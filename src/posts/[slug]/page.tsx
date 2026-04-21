import { motion, useScroll, useSpring } from 'framer-motion';
import {
    ChevronRight,
    Facebook, Link2,
    Linkedin,
    ListOrdered,
    Phone
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { contentDatabaseByLanguage } from '../../data/posts';
import { useTranslation } from '../../hooks/useTranslation';

// --- 1. GLOBAL STYLES ---
const FontStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Roboto+Mono:wght@400;500;700&display=swap');
    
    :root {
      --font-body: 'Noto Sans JP', sans-serif;
      --font-heading: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      --font-tech: 'Roboto Mono', monospace;
      --color-navy: #1A2B3C;
      --color-green: #228B22;
      --color-gold: #FFD700;
    }

    body {
      font-family: var(--font-body) !important;
      overflow-x: hidden;
      background-color: #F8FAFC;
      color: #1A2B3C;
    }
    
    .font-heading { font-family: var(--font-heading); letter-spacing: -0.01em; }
    .font-tech { font-family: var(--font-tech); letter-spacing: -0.03em; }

    /* Hide scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    /* --- SEO & UX OPTIMIZED PROSE STYLING --- */
    .article-prose { 
        color: #334155; 
        font-size: 1.125rem; 
        line-height: 1.85; 
        font-weight: 400; 
        max-width: 800px; 
        margin: 0 auto;
    }
    
    .article-prose p { margin-bottom: 1.75rem; text-align: justify; }
    
    .article-prose h2 { 
        margin-top: 3.5rem; 
        margin-bottom: 1.25rem; 
        font-size: 1.875rem; 
        font-weight: 900; 
        color: var(--color-navy); 
        font-family: var(--font-heading);
        position: relative;
        padding-bottom: 0.75rem;
    }
    
    .article-prose h2::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50px;
        height: 4px;
        background-color: var(--color-green);
        border-radius: 2px;
    }

    .article-prose h3 { 
        margin-top: 2.5rem; 
        margin-bottom: 1rem; 
        font-size: 1.375rem; 
        font-weight: 700; 
        color: var(--color-navy); 
        font-family: var(--font-heading); 
    }
    
    .article-prose ul { 
        list-style: none; 
        padding-left: 0; 
        margin-bottom: 2rem; 
        background: #fff;
        padding: 1.5rem 2rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    
    .article-prose ul li { margin-bottom: 1rem; position: relative; padding-left: 2rem; }
    .article-prose ul li:last-child { margin-bottom: 0; }
    .article-prose ul li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-green);
        font-weight: 900;
        font-size: 1.1rem;
    }

    .article-prose strong, .article-prose b { font-weight: 700; color: #1A2B3C; }
    
    /* Optimized Blockquote */
    .article-prose blockquote { 
        border-left: 4px solid var(--color-green); 
        padding: 1.5rem 2rem; 
        margin: 3rem 0; 
        background: #F0FDF4;
        border-radius: 0 0.75rem 0.75rem 0;
        font-style: italic; 
        font-size: 1.35rem; 
        font-weight: 500; 
        line-height: 1.6;
        color: var(--color-navy); 
        font-family: var(--font-heading);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }

    /* Optimized Figure/Image */
    .article-prose figure { margin: 3rem 0; }
    .article-prose figure img { 
        width: 100%; 
        border-radius: 1rem; 
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); 
        object-fit: cover;
    }
    .article-prose figcaption { 
        text-align: center; 
        font-size: 0.875rem; 
        color: #64748b; 
        margin-top: 1rem; 
        font-style: italic;
    }
  `}</style>
);

// --- MAIN ARTICLE COMPONENT ---

export default function ArticleDetail() {
    const { t, lang } = useTranslation();
    const contentDatabase = contentDatabaseByLanguage[lang];
    const np = t.newsPage;
    const { slug } = useParams();
    const [currentSlug, setCurrentSlug] = useState(slug || "");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (slug) {
            setCurrentSlug(slug);
        }
    }, [slug]);

    const pageData = contentDatabase[currentSlug];

    // Derived state for related articles
    const currentTags = pageData?.tags || [];
    const relatedArticles = Object.values(contentDatabase)
        .filter(article => article.slug !== currentSlug)
        .filter(article => article.tags?.some((tag: string) => currentTags.includes(tag)))
        .map(article => {
            const matchCount = article.tags.filter((tag: string) => currentTags.includes(tag)).length;
            return { ...article, matchCount };
        })
        .sort((a, b) => b.matchCount - a.matchCount)
        .slice(0, 3);

    // Reading Progress Bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentSlug]);

    const handleNavigate = (slug: string) => {
        if (contentDatabase[slug]) {
            setCurrentSlug(slug);
        }
    };

    const handleShareLink = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleScrollToToc = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 40;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">{np.notFound}</p>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen text-[#1A2B3C] font-sans selection:bg-[#228B22] selection:text-white pb-10 relative">
            <FontStyles />

            {/* Fake SEO Head */}
            <div className="hidden">
                <title>{`${pageData.title} | WATACO Engineering`}</title>
                <meta name="description" content={pageData.metaDescription} />
            </div>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#228B22] z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* --- SEO SEMANTIC MAIN CONTAINER --- */}
            <main role="main" className="flex flex-col">
                {/* --- HERO SECTION ---*/}
                <section className="relative z-0 bg-[#1A2B3C] overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">

                    {/* Background Layer - Decoupled from Document Flow */}
                    <div className="absolute inset-0 -z-10">
                        <img
                            src={pageData.heroImage}
                            alt={`Hình nền: ${pageData.title}`}
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-100" />
                    </div>

                    {/* Content Layer - Drives the height of the section naturally */}
                    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
                        {/* Semantic Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-white/80 mb-6 font-bold">
                            <ol className="flex items-center space-x-2 list-none m-0 p-0">
                                <li><a href="#" className="hover:text-white transition-colors">{np.home}</a></li>
                                <li><ChevronRight size={12} /></li>
                                <li><a href="#" className="hover:text-white transition-colors">{pageData.category}</a></li>
                                <li><ChevronRight size={12} /></li>
                                <li aria-current="page" className="text-[#FFD700] line-clamp-1 max-w-[200px]">{pageData.title}</li>
                            </ol>
                        </nav>

                        {/* H1 SEO Title */}
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight font-heading max-w-4xl drop-shadow-lg" itemProp="headline">
                                {pageData.title}
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* --- MAIN CONTENT & SIDEBAR GRID --- */}
                <section className="w-full max-w-[1440px] mx-auto px-6 mt-8 lg:mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Article Body */}
                        <motion.article
                            key={currentSlug}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                            className="lg:col-span-8 bg-transparent"
                            itemScope itemType="http://schema.org/Article"
                        >
                            {/* Abstract / Meta Description */}
                            <p className="text-xl text-gray-500 font-medium mb-10 leading-relaxed border-l-4 border-[#228B22] pl-6" itemProp="description">
                                {pageData.metaDescription}
                            </p>

                            {/* RAW HTML RENDERER (WordPress Style) */}
                            <div
                                className="article-prose"
                                itemProp="articleBody"
                                dangerouslySetInnerHTML={{ __html: pageData.contentHTML }}
                            />

                            {/* Social Share Footer */}
                            <div className="mt-12 py-6 border-y border-gray-100 flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{np.share}</span>
                                <div className="flex items-center gap-3">
                                    <button className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                                        <Facebook size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors">
                                        <Linkedin size={18} />
                                    </button>
                                    <button onClick={handleShareLink} className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[#1A2B3C] hover:text-white transition-colors relative">
                                        <Link2 size={18} />
                                        {copied && <span className="absolute -top-8 bg-[#1A2B3C] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">{np.copied}</span>}
                                    </button>
                                </div>
                            </div>
                        </motion.article>

                        {/* Right Column: Sidebar */}
                        <aside className="lg:col-span-4" role="complementary">
                            {/* Sticky Container */}
                            <div className="sticky top-10 space-y-8">

                                {/* SEO Table of Contents Widget */}
                                {pageData.toc && pageData.toc.length > 0 && (
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                                        <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100 flex items-center">
                                            <ListOrdered size={18} className="text-[#228B22] mr-2" />
                                            <h2 className="text-sm font-black text-[#1A2B3C] uppercase tracking-widest m-0">
                                                {np.tocTitle}
                                            </h2>
                                        </div>
                                        <nav aria-label="Table of contents" className="p-6">
                                            <ul className="space-y-3 m-0 p-0 list-none">
                                                {pageData.toc.map((item: { id: string; label: string }, idx: number) => (
                                                    <li key={idx} className="m-0 p-0 before:hidden">
                                                        <button
                                                            onClick={() => handleScrollToToc(item.id)}
                                                            className="text-left text-sm text-gray-600 hover:text-[#228B22] font-medium transition-colors w-full focus:outline-none"
                                                        >
                                                            {item.label}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                )}

                                {/* Related Articles Widget (Tag-based) */}
                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100">
                                        <h2 className="text-sm font-black text-[#1A2B3C] uppercase tracking-widest m-0">
                                            {np.relatedArticles}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col p-6 space-y-6">
                                        {relatedArticles.length > 0 ? relatedArticles.map((article, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => handleNavigate(article.slug)}
                                                className="group cursor-pointer flex gap-4 items-center"
                                            >
                                                <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 border border-gray-100">
                                                    <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-bold text-[#1A2B3C] line-clamp-2 leading-snug group-hover:text-[#228B22] transition-colors mb-1">
                                                        {article.title}
                                                    </h5>
                                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{article.category}</span>
                                                </div>
                                            </div>
                                        )) : (
                                            <p className="text-sm text-gray-500">{np.updating}</p>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Contact Widget */}
                                <div className="bg-[#1A2B3C] p-8 rounded-xl text-center text-white relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#228B22] rounded-full blur-[50px] opacity-30 pointer-events-none"></div>
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                                        <Phone size={28} className="text-[#FFD700]" />
                                    </div>
                                    <h3 className="text-xl font-black font-heading mb-3 relative z-10 m-0">{np.needConsult}</h3>
                                    <p className="text-sm text-gray-300 mb-8 font-light relative z-10">
                                        {np.consultDesc}
                                    </p>
                                    <a href="tel:0359 959 831" aria-label="Gọi ngay số hotline" className="block w-full bg-[#228B22] hover:bg-[#FFD700] hover:text-[#1A2B3C] text-white py-4 rounded-md font-bold uppercase tracking-widest text-xs transition-colors relative z-10 shadow-lg text-center">
                                        {np.callHotline} 078.678.8837
                                    </a>
                                </div>

                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </div>
    );
}