import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Landmark, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import type { TranslationContent } from "../../../types";
import { StaggerContainer } from "../../common/StaggerAnimations";

const InvestmentSolutionsSection: React.FC<{ t: TranslationContent }> = ({ t }) => {
    const [activeTab, setActiveTab] = useState<string>(t.solutionsData[0].id);

    useEffect(() => {
        if (!t.solutionsData.some((item) => item.id === activeTab)) {
            setActiveTab(t.solutionsData[0].id);
        }
    }, [t.solutionsData, activeTab]);

    const activeSolution = t.solutionsData.find((s) => s.id === activeTab) || t.solutionsData[0];

    return (
        <section id="section-solutions" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-gray-100">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-50"></div>

            <div className="max-w-360 mx-auto px-6 relative z-10">
                <StaggerContainer className="text-center mb-16">
                    <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4">{t.solutionsSub}</h3>
                    <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading">{t.solutionsTitle}</h2>
                </StaggerContainer>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
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
                                className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
                            >
                                <h3 className="text-2xl lg:text-3xl font-black text-[#1A2B3C] mb-6 font-heading leading-snug">
                                    {activeSolution.title}
                                </h3>
                                <p className="text-gray-600 text-base lg:text-lg mb-10 leading-relaxed font-light border-l-4 border-[#228B22] pl-5 bg-[#F8FAFC] py-3 rounded-r-lg">
                                    {activeSolution.desc}
                                </p>

                                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                                    {/* Benefits List */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{t.solutionsLabels.benefitsTitle}</h4>
                                        <ul className="space-y-4">
                                            {activeSolution.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-[#228B22] shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Abstract Diagram */}
                                    <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 flex flex-col justify-center items-center relative overflow-hidden">
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 text-center w-full">{t.solutionsLabels.modelTitle}</h4>

                                        {activeSolution.diagramType === 'three-party' && (
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
                                                    <span className="text-[9px] font-black text-[#1A2B3C] text-center leading-tight px-1">{activeSolution.roles.client}</span>
                                                </div>

                                                <div className="absolute bottom-4 right-0 w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                                    <Landmark size={24} className="text-[#228B22] mb-1" />
                                                    <span className="text-[9px] font-black text-[#1A2B3C] text-center leading-tight px-1">{activeSolution.roles.partner || ""}</span>
                                                </div>

                                                <div className="absolute top-[40%] left-[10%] text-[8px] text-gray-500 text-center w-20 rotate-[-60deg] bg-[#F8FAFC] px-1">{activeSolution.flows.watacoToClient}</div>
                                                <div className="absolute top-[40%] right-[10%] text-[8px] text-gray-500 text-center w-20 rotate-60 bg-[#F8FAFC] px-1">{activeSolution.flows.partnerToWataco}</div>
                                                <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-[8px] text-gray-500 text-center w-20 bg-[#F8FAFC] px-1">{activeSolution.flows.clientToPartner}</div>
                                            </div>
                                        )}

                                        {activeSolution.diagramType === 'two-party' && (
                                            <div className="relative w-full max-w-62.5 aspect-video flex items-center justify-between">
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300"></div>

                                                <div className="relative w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                                    <Factory size={24} className="text-blue-500 mb-1" />
                                                    <span className="text-[9px] font-black text-[#1A2B3C] text-center leading-tight px-1">{activeSolution.roles.client}</span>
                                                </div>

                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[9px] text-[#228B22] font-bold bg-[#F8FAFC] px-2 text-center w-full">{activeSolution.flows.clientToWataco}</div>

                                                <div className="relative w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center z-10">
                                                    <Wrench size={24} className="text-[#FFD700] mb-1" />
                                                    <span className="text-[9px] font-black text-[#1A2B3C]">WATACO</span>
                                                </div>
                                            </div>
                                        )}

                                        {activeSolution.note && (
                                            <div className="mt-8 text-[10px] text-gray-400 italic text-center max-w-[80%]">*{activeSolution.note}</div>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Link to Details */}
                                {activeSolution.linkSlug && (
                                    <div className="mt-10 flex justify-end border-t border-gray-100 pt-6">
                                        <a href={"/wataco/posts/giai-phap-esco"} className="inline-flex items-center text-white bg-[#228B22] px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#1A2B3C] transition-colors shadow-md group">
                                            {t.solutionsLabels.detailCta}
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentSolutionsSection