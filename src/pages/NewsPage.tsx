import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight, Calendar,
    Clock, Eye,
    Search
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import type { Category, HeroSlide, HighlightWatacoProps, NewsItem, NewsListItemProps, SidebarWidgetProps, TrendingNewsItem } from '../types';

// --- SHARED STYLES ---
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
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Hide scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

// --- HELPER: WATACO HIGHLIGHTER ---
const HighlightWataco: React.FC<HighlightWatacoProps> = ({ text }) => {
    if (!text) return null;
    const parts = text.split(/(WATACO)/g);
    return (
        <span>
            {parts.map((part, index) =>
                part === 'WATACO' ? <span key={index} className="text-[#228B22] font-black">{part}</span> : part
            )}
        </span>
    );
};

// --- DATA FROM WATACO WORDPRESS EXPORT ---
// Data moved inside component

// --- COMPONENTS ---

// 1. Hero Carousel Component
const HeroCarousel = ({ heroBadge, heroSlides }: { heroBadge: string, heroSlides: HeroSlide[] }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (heroSlides.length === 0) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    if (heroSlides.length === 0) return null;

    return (
        <div className="relative h-100 lg:h-150 overflow-hidden bg-[#1A2B3C] text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <img
                        src={heroSlides[current].image}
                        alt={heroSlides[current].title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 z-10">
                <div className="max-w-360 mx-auto">
                    <motion.div
                        key={`text-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl"
                    >
                        <span className="bg-[#228B22] text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded-sm mb-4 inline-block">
                            {heroBadge}
                        </span>
                        <Link to={`/posts/${heroSlides[current].slug}`}>
                            <h2 className="text-3xl lg:text-5xl font-black font-heading leading-tight mb-4 hover:text-[#FFD700] transition-colors cursor-pointer">
                                <HighlightWataco text={heroSlides[current].title} />
                            </h2>
                        </Link>
                        <p className="text-gray-300 text-lg line-clamp-2 mb-6 border-l-4 border-[#FFD700] pl-4">
                            {heroSlides[current].summary}
                        </p>
                        <div className="flex items-center text-sm text-gray-400 font-mono">
                            <Calendar size={14} className="mr-1" /> {heroSlides[current].date}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 right-8 lg:right-16 flex space-x-2 z-20">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${current === idx ? 'bg-[#FFD700] w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

// 2. News List Item
const NewsListItem: React.FC<NewsListItemProps & { readMore: string }> = ({ item, readMore }) => (
    <div className="group bg-white rounded-lg border border-gray-100 p-4 hover:shadow-lg hover:border-[#228B22] transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-pointer">
        {/* Thumbnail */}
        <div className="sm:w-1/3 lg:w-1/4 h-48 sm:h-auto rounded-md overflow-hidden relative shrink-0">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
            />
            <div className="absolute top-2 left-2 bg-[#1A2B3C]/90 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">
                {item.category}
            </div>
        </div>

        {/* Content */}
        <div className="grow flex flex-col justify-center">
            <div className="flex items-center text-xs text-gray-400 mb-2 font-mono">
                <Calendar size={12} className="mr-1" /> {item.date}
                <span className="mx-2">•</span>
                <Eye size={12} className="mr-1" /> {item.views}
            </div>
            <h3 className="text-xl font-bold text-[#1A2B3C] font-heading mb-3 group-hover:text-[#228B22] transition-colors leading-snug">
                <HighlightWataco text={item.title} />
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                {item.summary}
            </p>
            <div className="mt-auto flex items-center text-[#228B22] text-xs font-black uppercase tracking-wide group/link">
                {readMore} <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
            </div>
        </div>
    </div>
);

// 3. Sidebar Widget
const SidebarWidget: React.FC<SidebarWidgetProps> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
        <h4 className="text-lg font-black text-[#1A2B3C] font-heading mb-6 flex items-center">
            <span className="w-1 h-6 bg-[#228B22] mr-3 rounded-full"></span>
            {title}
        </h4>
        {children}
    </div>
);


// --- MAIN PAGE ---
export default function NewsPage() {
    const { t } = useTranslation();
    const np = t.newsPage;

    const allNewsPosts = t.newsPosts || [];

    const heroSlides: HeroSlide[] = allNewsPosts.slice(0, 3).map(post => ({
        id: post.id,
        title: post.title,
        summary: post.summary,
        image: post.heroImage,
        date: post.date,
        slug: post.slug
    }));

    const newsFeed: NewsItem[] = allNewsPosts.map(post => ({
        id: post.id,
        title: post.title,
        summary: post.summary,
        category: post.category,
        categoryId: post.categoryId,
        date: post.date,
        views: post.views,
        image: post.heroImage,
        slug: post.slug
    }));

    const trendingNews: TrendingNewsItem[] = allNewsPosts.slice(0, 3).map(post => ({
        id: post.id,
        title: post.title,
        date: post.date.split('/').slice(0, 2).join('/'),
        slug: post.slug
    }));

    const categories: Category[] = [
        { id: 'all', label: np.categoryAll, count: allNewsPosts.length },
        { id: 'project', label: np.categoryProject, count: allNewsPosts.filter(p => p.categoryId === 'project').length },
    ];

    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(5);

    // Expert Slider State

    const filteredNews = newsFeed.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const visibleNews = filteredNews.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <FontStyles />

            {/* --- HERO SLIDER --- */}
            <HeroCarousel heroBadge={np.heroBadge} heroSlides={heroSlides} />

            <div className="max-w-360 mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- LEFT COLUMN: CONTENT (8 Cols) --- */}
                    <div className="lg:col-span-8">
                        {/* Filter Tabs */}
                        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2 border-b border-gray-200">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-5 py-2.5 rounded-t-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${activeCategory === cat.id
                                        ? 'border-[#228B22] text-[#228B22] bg-white'
                                        : 'border-transparent text-gray-500 hover:text-[#1A2B3C]'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* News List */}
                        <div className="space-y-6">
                            <AnimatePresence mode="popLayout">
                                {visibleNews.length > 0 ? (
                                    visibleNews.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <Link to={`/posts/${item.slug}`}>
                                                <NewsListItem item={item} readMore={np.readMore} />
                                            </Link>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-lg border border-gray-100 border-dashed">
                                        <p className="text-gray-400">{np.noResults}</p>
                                        <button onClick={() => { setSearchQuery(''); setActiveCategory('all') }} className="text-[#228B22] font-bold mt-2 hover:underline">{np.clearFilter}</button>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Load More */}
                        {filteredNews.length > visibleCount && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 3)}
                                    className="bg-white border border-[#1A2B3C] text-[#1A2B3C] px-8 py-3 rounded-md font-bold uppercase tracking-widest hover:bg-[#1A2B3C] hover:text-white transition-all shadow-sm active:scale-95"
                                >
                                    {np.loadMore}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* --- RIGHT COLUMN: SIDEBAR (4 Cols) --- */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Search Widget */}
                        <div className="bg-white p-1 rounded-md border border-gray-200 shadow-sm flex items-center">
                            <input
                                type="text"
                                placeholder={np.searchPlaceholder}
                                className="w-full pl-4 pr-2 py-2 bg-transparent text-sm focus:outline-none text-[#1A2B3C]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="p-2 bg-[#228B22] text-white rounded-md hover:bg-[#1A2B3C] transition-colors">
                                <Search size={18} />
                            </button>
                        </div>

                        {/* Trending Widget */}
                        <SidebarWidget title={np.trendingTitle}>
                            <ul className="space-y-4">
                                {trendingNews.map((item, idx) => (
                                    <Link key={item.id} to={`/posts/${item.slug}`}>
                                        <li className="group cursor-pointer flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <span className="text-3xl font-black text-gray-200 group-hover:text-[#228B22] transition-colors leading-none -mt-1">
                                                0{idx + 1}
                                            </span>
                                            <div>
                                                <h5 className="text-sm font-bold text-[#1A2B3C] group-hover:text-[#228B22] transition-colors line-clamp-2 mb-1">
                                                    {item.title}
                                                </h5>
                                                <span className="text-xs text-gray-400 flex items-center">
                                                    <Clock size={10} className="mr-1" /> {item.date}
                                                </span>
                                            </div>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </SidebarWidget>

                        {/* Tag Cloud */}
                        <SidebarWidget title={np.tagsTitle}>
                            <div className="flex flex-wrap gap-2">
                                {np.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-[#228B22] hover:text-white transition-colors cursor-pointer border border-gray-200">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </SidebarWidget>

                        {/* NOTE: Contact Card Removed as requested */}

                    </div>
                </div>
            </div>
        </div>
    );
}