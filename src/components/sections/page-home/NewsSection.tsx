import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Newspaper } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TranslationContent } from '../../../types';
import { StaggerContainer, StaggerItem } from '../../common/StaggerAnimations';

interface NewsSectionProps {
    t: TranslationContent;
}

const NewsSection: React.FC<NewsSectionProps> = ({ t }) => {
    const [activeNewsIndex, setActiveNewsIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveNewsIndex((prev) => (prev + 1) % t.newsArticles.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [t.newsArticles.length]);

    return (
        <section id="section-6" className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-white via-[#F0FDF4] to-white border-t border-[#e5e7eb] py-12 sm:py-16 md:py-20">
            <div className="max-w-360 mx-auto px-4 sm:px-6 w-full">
                <StaggerContainer className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
                    <div>
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#228b22]/10 rounded flex items-center justify-center text-[#228b22]">
                                <Newspaper size={18} />
                            </div>
                            <h3 className="text-[#228b22] font-black text-[10px] sm:text-sm uppercase tracking-[0.5em] font-heading">{t.newsSub}</h3>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-black text-[#1A2B3C] tracking-tighter leading-none font-heading">{t.newsTitle}</h2>
                    </div>
                    <Link to="/news" className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A2B3C] flex items-center group">
                        <span>{t.viewAllArticles}</span>
                        <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </StaggerContainer>

                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:h-150">

                    <StaggerContainer className="lg:col-span-5 flex flex-col h-full space-y-2 overflow-y-auto pr-2 news-list-scroll" delay={0.2}>
                        {t.newsArticles.map((article, idx) => (
                            <StaggerItem key={idx}>
                                <button
                                    onClick={() => setActiveNewsIndex(idx)}
                                    className={`w-full text-left p-6 transition-all duration-300 border-l-4 group rounded-r-md ${activeNewsIndex === idx
                                        ? 'bg-[#DCFCE7] border-[#228B22] shadow-sm'
                                        : 'bg-white border-transparent hover:bg-[#F0FDF4] hover:border-gray-200'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={`text-[10px] font-bold font-tech uppercase tracking-wider ${activeNewsIndex === idx ? 'text-[#228B22]' : 'text-gray-400'}`}>
                                            {article.source}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-tech">{article.date}</span>
                                    </div>
                                    <h4 className={`text-sm lg:text-base font-bold leading-relaxed transition-colors font-heading ${activeNewsIndex === idx ? 'text-[#1A2B3C]' : 'text-gray-500 group-hover:text-[#1A2B3C]'
                                        }`}>
                                        {article.title}
                                    </h4>
                                </button>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <StaggerContainer className="lg:col-span-7 h-full" delay={0.4}>
                        <div className="relative h-75 sm:h-100 lg:h-full rounded-lg overflow-hidden shadow-2xl bg-gray-100 border-2 border-[#FFD700]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeNewsIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={t.newsArticles[activeNewsIndex].img}
                                        alt={t.newsArticles[activeNewsIndex].title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 p-12 w-full">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <span className="bg-[#FFD700] text-[#1A2B3C] px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block rounded-sm shadow-sm">
                                                {t.newsArticles[activeNewsIndex].tag}
                                            </span>
                                            <h3 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-6 font-heading max-w-xl">
                                                {t.newsArticles[activeNewsIndex].title}
                                            </h3>
                                            <Link to={"posts/wataco-ky-ket-hop-tac-nhat-ban"} className="inline-flex items-center text-white hover:text-[#FFD700] transition-colors text-xs font-bold uppercase tracking-widest group">
                                                <span>Đọc chi tiết</span>
                                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </StaggerContainer>

                </div>
            </div>
        </section>
    );
}
export default NewsSection;
