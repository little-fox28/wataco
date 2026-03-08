import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Eye, Star, Target } from "lucide-react";
import { useRef } from "react";
import type { TranslationContent } from "../../../types";

const MissionSection: React.FC<{ t: TranslationContent }> = ({ t }) => {
    if (!t.missionSection) return null;

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Subtle parallax for background elements
    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-24 lg:py-40 bg-white relative overflow-hidden border-t border-gray-100">
            {/* Scrolling decorative background */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute top-1/4 -right-32 w-150 h-150 bg-[#228B22]/5 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                className="absolute bottom-1/4 -left-32 w-100 h-100 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-360 mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* LEFT: Sticky Title Area */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#228B22] font-black text-xs uppercase tracking-[0.3em] mb-4 block">
                                Định Hướng Chiến Lược
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-[#1A2B3C] font-heading leading-tight mb-6 tracking-tight">
                                {t.missionSection.title}
                            </h2>
                            <div className="w-16 h-1.5 bg-linear-to-r from-[#228B22] to-[#FFD700] rounded-full"></div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Scrolling Content Area */}
                    <div className="lg:w-2/3 flex flex-col gap-24 lg:gap-32 pb-10">

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-4 lg:-left-12 -top-8 text-[120px] text-gray-50 font-black font-heading opacity-50 select-none z-0">
                                01
                            </div>
                            <div className="relative z-10 pl-6 border-l-4 border-transparent hover:border-[#228B22] transition-colors duration-500">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3.5 bg-[#F0FDF4] text-[#228B22] rounded-full shadow-sm"><Eye size={28} /></div>
                                    <h3 className="text-2xl lg:text-4xl font-black text-[#1A2B3C] font-heading">{t.missionSection.vision.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light">
                                    {t.missionSection.vision.desc}
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-4 lg:-left-12 -top-8 text-[120px] text-gray-50 font-black font-heading opacity-50 select-none z-0">
                                02
                            </div>
                            <div className="relative z-10 pl-6 border-l-4 border-transparent hover:border-[#228B22] transition-colors duration-500">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3.5 bg-[#F0FDF4] text-[#228B22] rounded-full shadow-sm"><Target size={28} /></div>
                                    <h3 className="text-2xl lg:text-4xl font-black text-[#1A2B3C] font-heading">{t.missionSection.mission.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg lg:text-xl font-light">
                                    {t.missionSection.mission.desc}
                                </p>
                            </div>
                        </motion.div>

                        {/* Core Values Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -left-4 lg:-left-12 -top-8 text-[120px] text-gray-50 font-black font-heading opacity-50 select-none z-0">
                                03
                            </div>
                            <div className="relative z-10 pl-6 border-l-4 border-transparent hover:border-[#FFD700] transition-colors duration-500">
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="p-3.5 bg-[#FFFBEB] text-[#F59E0B] rounded-full shadow-sm"><Star size={28} /></div>
                                    <h3 className="text-2xl lg:text-4xl font-black text-[#1A2B3C] font-heading">{t.missionSection.coreValues.title}</h3>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {t.missionSection.coreValues.items.map((item, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="flex items-start space-x-3 group"
                                        >
                                            <CheckCircle2 size={20} className="text-gray-300 group-hover:text-[#228B22] transition-colors shrink-0 mt-1" />
                                            <span className="text-gray-600 group-hover:text-[#1A2B3C] transition-colors font-medium text-base lg:text-lg">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};


export default MissionSection