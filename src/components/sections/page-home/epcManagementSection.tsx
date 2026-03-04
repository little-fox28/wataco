import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { TranslationContent } from "../../../types";
import { StaggerContainer, StaggerItem } from "../../common/StaggerAnimations";

const EpcManagementSection: React.FC<{ t: TranslationContent }> = ({ t }) => {
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    return (
        <section id="section-epc" className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden py-12 sm:py-16 md:py-20">
            {/* Lightbox Modal for Certificate/Image */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomedImage(null)}
                        className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={zoomedImage}
                            alt="Chứng chỉ EPC"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image itself
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-[#F8FAFC] to-white pointer-events-none"></div>

            <div className="max-w-360 mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column (Sticky Title, Desc & Featured Image) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <StaggerContainer>
                            <StaggerItem>
                                <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4">
                                    {t.epcSection.subtitle}
                                </h3>
                                <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading mb-6">
                                    {t.epcSection.title}
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light border-l-4 border-[#FFD700] pl-4">
                                    {t.epcSection.desc}
                                </p>
                            </StaggerItem>

                            {/* Prominent Featured Image Card - Click to Zoom */}
                            <StaggerItem className="mb-10">
                                <div
                                    className="relative rounded-2xl overflow-hidden shadow-2xl group w-full h-70 lg:h-87.5 cursor-zoom-in"
                                    onClick={() => setZoomedImage(t.epcSection.image)}
                                    title="Click để phóng to chứng chỉ"
                                >
                                    <img
                                        src={t.epcSection.image}
                                        alt={t.epcSection.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-[#1A2B3C]/30 to-transparent opacity-90 transition-opacity"></div>

                                    {/* Zoom hint overlay */}
                                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Search size={20} className="text-white" />
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg lg:text-xl leading-tight font-heading">{t.epcSection.qualityCommitment}</p>
                                            <p className="text-[#FFD700] text-xs uppercase tracking-widest mt-1 font-bold">{t.epcSection.japanStandard}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <Link to={"/posts/tong-thau-va-quan-ly-epc"}>
                                    <button className="bg-[#1A2B3C] hover:bg-[#228B22] text-white px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs transition-colors shadow-lg flex items-center group active:scale-95">
                                        {t.epcSection.epcProfile}
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    {/* Right Column (Steps Timeline) */}
                    <div className="lg:col-span-7 relative">
                        {/* Vertical line for timeline - hidden on small screens */}
                        <div className="hidden sm:block absolute left-7.75 top-8 bottom-8 w-0.5 bg-gray-100"></div>

                        <StaggerContainer className="space-y-8">
                            {t.epcSection.steps.map((step, idx) => (
                                <StaggerItem key={idx} className="relative pl-0 sm:pl-20">
                                    {/* Timeline Node */}
                                    <div className="hidden sm:flex absolute left-0 top-6 w-16 h-16 bg-white border-4 border-gray-50 rounded-full items-center justify-center shadow-sm z-10 text-[#1A2B3C] font-black font-tech">
                                        0{idx + 1}
                                    </div>

                                    {/* Content Card - Changed hover state to default state */}
                                    <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#228B22] shadow-xl flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                                        {/* Accent line for active look */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#228B22]"></div>

                                        <div className="w-14 h-14 bg-[#228B22] rounded-full flex items-center justify-center shrink-0 shadow-md">
                                            <step.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-[#228B22] font-heading mb-3">
                                                <span className="sm:hidden text-gray-300 font-tech mr-2">0{idx + 1}.</span>
                                                {step.title}
                                            </h4>
                                            <p className="text-gray-500 leading-relaxed text-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EpcManagementSection