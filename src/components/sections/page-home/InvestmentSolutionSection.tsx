import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Factory, Landmark, Wrench } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { TranslationContent } from "../../../types";
import { StaggerContainer } from "../../common/StaggerAnimations";

/* ────────────────────────────────────────────────────────
   Reusable content card – shared by both desktop & mobile
   ──────────────────────────────────────────────────────── */
interface SolutionCardProps {
    // biome-ignore lint: accept any matching solution shape
    solution: any;
    // biome-ignore lint: accept translation object
    labels: any;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, labels }) => {
    const content = (
        <div className={`bg-white mb-10 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 h-full flex flex-col transition-all duration-300 ${solution.linkSlug ? 'hover:shadow-2xl hover:scale-[1.01] hover:border-[#228B22]/30 cursor-pointer group' : ''}`}>
            <h3 className="text-xl lg:text-3xl font-black text-[#1A2B3C] mb-6 font-heading leading-snug group-hover:text-[#228B22] transition-colors">
                {solution.title}
            </h3>
            <p className="text-gray-600 text-sm lg:text-lg mb-10 leading-relaxed font-light border-l-4 border-[#228B22] pl-5 bg-[#F8FAFC] py-3 rounded-r-lg">
                {solution.desc}
            </p>

            <div className="flex-1">
                {/* Abstract Diagram */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 flex flex-col justify-center items-center relative overflow-hidden">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 text-center w-full">{labels.modelTitle}</h4>

                    {solution.diagramType === 'three-party' && (
                        <div className="relative w-full max-w-75 aspect-square">
                            <svg className="absolute inset-0 w-full h-full text-gray-200">
                                <polygon points="150,40 250,220 50,220" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                <Wrench size={24} className="text-[#FFD700] mb-1" />
                                <span className="text-[9px] font-black text-[#1A2B3C]">WATACO</span>
                            </div>

                            <div className="absolute bottom-4 left-0 w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                <Factory size={24} className="text-blue-500 mb-1" />
                                <span className="text-[9px] font-black text-[#1A2B3C] text-center leading-tight px-1">{solution.roles.client}</span>
                            </div>

                            <div className="absolute bottom-4 right-0 w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                <Landmark size={24} className="text-[#228B22] mb-1" />
                                <span className="text-[9px] font-black text-[#1A2B3C] text-center leading-tight px-1">{solution.roles.partner || ""}</span>
                            </div>

                            <div className="absolute top-[40%] left-[10%] text-[8px] text-gray-500 text-center w-20 rotate-[-60deg] bg-[#F8FAFC] px-1">{solution.flows.watacoToClient}</div>
                            <div className="absolute top-[40%] right-[10%] text-[8px] text-gray-500 text-center w-20 rotate-60 bg-[#F8FAFC] px-1">{solution.flows.partnerToWataco}</div>
                            <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-[8px] text-gray-500 text-center w-20 bg-[#F8FAFC] px-1">{solution.flows.clientToPartner}</div>
                        </div>
                    )}

                    {solution.diagramType === 'two-party' && (
                        <div className="relative w-full max-w-62.5 aspect-video flex items-center justify-between">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300"></div>

                            <div className="relative w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                <Factory size={24} className="text-blue-500 mb-1" />
                                <span className="text-[9px] font-black text-[#1A2B3C] text-center leading-tight px-1">{solution.roles.client}</span>
                            </div>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[9px] text-[#228B22] font-bold bg-[#F8FAFC] px-2 text-center w-full">{solution.flows.clientToWataco}</div>

                            <div className="relative w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                <Wrench size={24} className="text-[#FFD700] mb-1" />
                                <span className="text-[9px] font-black text-[#1A2B3C]">WATACO</span>
                            </div>
                        </div>
                    )}

                    {solution.note && (
                        <div className="mt-8 text-[10px] text-gray-400 italic text-center max-w-[80%]">*{solution.note}</div>
                    )}
                </div>
            </div>

            {/* Arrow indicator */}
            {solution.linkSlug && (
                <div className="mt-6 flex items-center justify-end gap-2 text-[#228B22] opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-widest">{labels.detailCta}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            )}
        </div>
    );

    if (solution.linkSlug) {
        return (
            <Link to={`/posts/${solution.linkSlug}`} className="block no-underline h-full">
                {content}
            </Link>
        );
    }

    return content;
};

/* ──────────────────────────────
   Main section component
   ────────────────────────────── */
const InvestmentSolutionsSection: React.FC<{ t: TranslationContent }> = ({ t }) => {
    const [activeTab, setActiveTab] = useState<string>(t.solutionsData[0].id);

    // Mobile slider state
    const [mobileIndex, setMobileIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (!t.solutionsData.some((item) => item.id === activeTab)) {
            setActiveTab(t.solutionsData[0].id);
        }
    }, [t.solutionsData, activeTab]);

    // Keep mobileIndex in range when data changes
    useEffect(() => {
        if (mobileIndex >= t.solutionsData.length) {
            setMobileIndex(0);
        }
    }, [t.solutionsData, mobileIndex]);

    // Auto-play for mobile slider
    const resetAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(() => {
            setMobileIndex((prev) => (prev + 1) % t.solutionsData.length);
        }, 6000);
    }, [t.solutionsData.length]);

    useEffect(() => {
        resetAutoPlay();
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [resetAutoPlay]);

    const goToSlide = (idx: number) => {
        setMobileIndex(idx);
        resetAutoPlay();
    };

    const goPrev = () => goToSlide((mobileIndex - 1 + t.solutionsData.length) % t.solutionsData.length);
    const goNext = () => goToSlide((mobileIndex + 1) % t.solutionsData.length);

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };
    const handleTouchEnd = () => {
        if (touchDeltaX.current < -50) goNext();
        else if (touchDeltaX.current > 50) goPrev();
    };

    const activeSolution = t.solutionsData.find((s) => s.id === activeTab) || t.solutionsData[0];
    const mobileSolution = t.solutionsData[mobileIndex];
    const swipeVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };
    const [[slideKey, slideDir], setSlide] = useState([mobileIndex, 1]);

    // Sync slideKey when mobileIndex changes
    useEffect(() => {
        setSlide(([prevKey]) => [mobileIndex, mobileIndex > prevKey ? 1 : -1]);
    }, [mobileIndex]);

    return (
        <section id="section-solutions" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-gray-100">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-50"></div>

            <div className="max-w-360 mx-auto px-6 relative z-10">
                <StaggerContainer className="text-center mb-16">
                    <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4">{t.solutionsSub}</h3>
                    <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading">{t.solutionsTitle}</h2>
                </StaggerContainer>

                {/* ═══════════════════════════════════════════
                    DESKTOP: Original tab layout (lg and above)
                    ═══════════════════════════════════════════ */}
                <div className="hidden lg:flex flex-row gap-16">
                    {/* LEFT: Tabs Navigation */}
                    <div className="lg:w-1/3 flex flex-col gap-3 relative z-20">
                        {t.solutionsData.map((sol) => (
                            <button
                                key={sol.id}
                                onClick={() => setActiveTab(sol.id)}
                                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 border ${activeTab === sol.id
                                    ? 'bg-white border-[#228B22] shadow-[0_10px_30px_rgba(34,139,34,0.15)] transform scale-105 z-10'
                                    : 'bg-transparent border-transparent hover:bg-white/50 text-gray-500'
                                    }`}
                            >
                                <h4 className={`text-lg font-bold font-heading mb-1 ${activeTab === sol.id ? 'text-[#228B22]' : 'text-gray-700'}`}>
                                    {sol.shortTitle}
                                </h4>
                                <p className={`text-xs ${activeTab === sol.id ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {t.solutionsLabels.chooseSolution}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: Content Area */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <SolutionCard solution={activeSolution} labels={t.solutionsLabels} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════
                    MOBILE: Slider (below lg)
                    ═══════════════════════════════════════════ */}
                <div
                    className="lg:hidden relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Slider viewport */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait" custom={slideDir}>
                            <motion.div
                                key={slideKey}
                                custom={slideDir}
                                variants={swipeVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                            >
                                <SolutionCard solution={mobileSolution} labels={t.solutionsLabels} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Prev / Next arrows */}
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous solution"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#228B22] transition-colors z-20"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next solution"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#228B22] transition-colors z-20"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* Dot indicators */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {t.solutionsData.map((sol, idx) => (
                            <button
                                key={sol.id}
                                type="button"
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to ${sol.shortTitle}`}
                                className={`rounded-full transition-all duration-300 ${idx === mobileIndex
                                    ? 'w-6 h-2.5 bg-[#228B22]'
                                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentSolutionsSection