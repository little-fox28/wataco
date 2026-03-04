import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Briefcase, Clock,
    Handshake,
    Heart,
    Lightbulb,
    MapPin,
    Search,
    ShieldCheck,
    TrendingUp
} from 'lucide-react';
import { forwardRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

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
    }
    
    .font-heading { font-family: var(--font-heading); letter-spacing: -0.01em; }
    .font-tech { font-family: var(--font-tech); letter-spacing: -0.03em; }
    
    .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.3); }

    /* Custom Scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

// --- ANIMATION COMPONENTS ---
interface FadeInUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}
const FadeInUp = ({ children, delay = 0, className }: FadeInUpProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);



// --- SUB COMPONENTS ---

import type { Job } from '../types';

interface JobCardProps {
    job: Job;
}

const JobCard = forwardRef<HTMLDivElement, JobCardProps>(({ job }, ref) => {
    const { t } = useTranslation();
    return (
        <motion.div
            ref={ref}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-lg border border-gray-100 hover:border-[#228B22] hover:shadow-lg transition-all duration-300 group relative"
        >
            {job.urgent && (
                <span className="absolute top-4 right-4 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-red-100 animate-pulse">
                    {t.careersPage.jobCard.urgent}
                </span>
            )}
            <div className="mb-4">
                <span className="text-[#228B22] text-xs font-bold uppercase tracking-widest mb-2 block">{job.department}</span>
                <h3 className="text-lg font-bold text-[#1A2B3C] font-heading group-hover:text-[#228B22] transition-colors">{job.title}</h3>
            </div>

            <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={16} className="mr-2 text-gray-400" /> {job.location}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                    <Briefcase size={16} className="mr-2 text-gray-400" /> {job.type}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-2 text-gray-400" /> {t.careersPage.jobCard.deadlinePrefix}{job.deadline}
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-sm font-bold text-[#1A2B3C] font-mono">{job.salary}</span>
                <button className="text-xs font-black uppercase tracking-widest text-[#228B22] flex items-center group/btn">
                    {t.careersPage.jobCard.apply} <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    )
});

// --- PAGE SECTIONS ---

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative h-100 lg:h-125 flex items-center justify-center overflow-hidden bg-[#F0FDF4]">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover opacity-90"
                    alt={t.careersPage.hero.alt}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#228B22]/20 to-[#228B22]/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
                <FadeInUp>
                    <h3 className="text-[#FFD700] font-black text-xs lg:text-sm uppercase tracking-[0.5em] mb-4 font-heading drop-shadow-md">
                        {t.careersPage.hero.subtitle}
                    </h3>
                    <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight font-heading mb-6 tracking-tight drop-shadow-lg">
                        {t.careersPage.hero.title1}<br />{t.careersPage.hero.title2}
                    </h1>
                    <p className="text-white text-base lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-8 drop-shadow-md">
                        {t.careersPage.hero.description}
                    </p>
                    <button onClick={() => {
                        const jobsEl = document.getElementById('jobs');
                        if (jobsEl) {
                            jobsEl.scrollIntoView({ behavior: 'smooth' });
                        }
                    }} className="bg-[#FFD700] text-[#1A2B3C] px-8 py-4 rounded-md font-black uppercase tracking-widest hover:bg-white hover:text-[#228B22] transition-all shadow-xl">
                        {t.careersPage.hero.button}
                    </button>
                </FadeInUp>
            </div>
        </section>
    )
};

const CultureSection = () => {
    const { t } = useTranslation();
    const cultureValues = [
        { icon: ShieldCheck, ...t.careersPage.culture.values[0] },
        { icon: Handshake, ...t.careersPage.culture.values[1] },
        { icon: Lightbulb, ...t.careersPage.culture.values[2] },
        { icon: Heart, ...t.careersPage.culture.values[3] },
        { icon: TrendingUp, ...t.careersPage.culture.values[4] },
    ];
    return (
        <section className="py-20 bg-[#F8FAFC] border-t border-gray-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-100 h-100 bg-[#228B22]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-360 mx-auto px-6 relative z-10">
                <FadeInUp className="text-center mb-16">
                    <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4">{t.careersPage.culture.subtitle}</h3>
                    <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading mb-4 uppercase">{t.careersPage.culture.title}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">{t.careersPage.culture.description}</p>
                </FadeInUp>

                <div className="flex flex-wrap justify-center gap-8">
                    {cultureValues.map((item, idx) => (
                        <FadeInUp
                            key={idx}
                            delay={idx * 0.1}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#228B22] transition-all duration-300 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] flex flex-col items-center text-center"
                        >
                            {/* Hexagon shaped icon container */}
                            <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#F0FDF4] drop-shadow-sm group-hover:text-[#228B22] transition-colors duration-500">
                                    <polygon fill="currentColor" points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" />
                                </svg>
                                <item.icon size={36} className="relative z-10 text-[#228B22] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-[#1A2B3C] mb-4 group-hover:text-[#228B22] transition-colors leading-tight">{item.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    )
};

const JobBoardSection = () => {
    const { t } = useTranslation();
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const activeCategory = t.careersPage.jobBoard.categories[activeCategoryIndex];

    // Filter Logic
    const filteredJobs = t.careersPage.jobs.filter(job => {
        const matchCat = activeCategoryIndex === 0 || job.department === activeCategory;
        const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <section id="jobs" className="py-20 bg-[#F8FAFC] border-t border-gray-100">
            <div className="max-w-360 mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-[#1A2B3C] font-heading mb-2">{t.careersPage.jobBoard.title}</h2>
                        <p className="text-gray-500 text-sm">{t.careersPage.jobBoard.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t.careersPage.jobBoard.searchPlaceholder}
                                className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#228B22] w-full sm:w-64 text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Filter Button */}
                        <div className="flex overflow-x-auto no-scrollbar gap-2">
                            {t.careersPage.jobBoard.categories.map((cat, index) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategoryIndex(index)}
                                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap border transition-all ${activeCategoryIndex === index
                                        ? 'bg-[#1A2B3C] text-white border-[#1A2B3C]'
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-[#228B22]'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16 bg-white rounded-lg border border-dashed border-gray-300">
                                <p className="text-gray-500 mb-4">{t.careersPage.jobBoard.noResults}</p>
                                <button onClick={() => { setActiveCategoryIndex(0); setSearchQuery("") }} className="text-[#228B22] font-bold underline">{t.careersPage.jobBoard.viewAllJobs}</button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-12 text-center p-8 bg-[#F0FDF4] rounded-xl border border-[#DCFCE7]">
                    <h4 className="font-bold text-[#1A2B3C] mb-2">{t.careersPage.jobBoard.ctaTitle}</h4>
                    <p className="text-sm text-gray-600 mb-4">{t.careersPage.jobBoard.ctaDescription}</p>
                    <a href="" className="inline-flex items-center text-[#228B22] font-black uppercase tracking-widest text-xs border-b-2 border-[#228B22] pb-1 hover:text-[#1A2B3C] hover:border-[#1A2B3C] transition-all">
                        {t.careersPage.jobBoard.ctaButton} <ArrowRight size={14} className="ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
};

// --- MAIN PAGE (COMPOSED) ---
export default function CareersPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen text-[#1A2B3C]">
            <FontStyles />
            <HeroSection />
            <CultureSection />
            <JobBoardSection />
        </div>
    );
}