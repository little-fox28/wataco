import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { TranslationContent } from "../../../types";
import { StaggerContainer, StaggerItem } from "../../common/StaggerAnimations";

const PpaModelSection: React.FC<{ t: TranslationContent }> = ({ t }) => (
    <section id="section-ppa" className="py-20 lg:py-32 bg-[#0B1120] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000"
                alt="Solar Panels Background"
                className="w-full h-full object-center"
            />
            {/* Dark overlay to blend the black background of the PPA diagram seamlessly */}
            <div className="absolute inset-0 bg-[#1A2B3C]/70"></div>
        </div>

        <div className="max-w-360 mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Column: Image with floating animation */}
                <StaggerContainer className="lg:col-span-6 flex justify-center lg:justify-start">
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="w-full max-w-lg"
                    >
                        {/* Using the user's provided filename. Assuming it's in the public folder or accessible path */}
                        <img
                            src="ppa-model.png"
                            alt="Mô hình PPA ESCO"
                            className="w-full rounded-lg h-auto object-contain drop-shadow-[0_0_30px_rgba(34,139,34,0.3)]"
                        />
                    </motion.div>
                </StaggerContainer>

                {/* Right Column: Text Content */}
                <StaggerContainer className="lg:col-span-6">
                    <StaggerItem>
                        <h3 className="text-[#FFD700] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4">
                            {t.ppaSection.subtitle}
                        </h3>
                        <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight font-heading mb-6">
                            {t.ppaSection.title}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light border-l-4 border-[#228B22] pl-4">
                            {t.ppaSection.desc}
                        </p>
                    </StaggerItem>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                        {t.ppaSection.benefits.map((benefit, idx) => (
                            <StaggerItem key={idx} className="flex items-start group">
                                <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-[#228B22]/20 flex items-center justify-center shrink-0 group-hover:bg-[#228B22] transition-colors">
                                    <CheckCircle2 size={14} className="text-[#228B22] group-hover:text-white" />
                                </div>
                                <span className="text-gray-200 font-medium group-hover:text-white transition-colors text-sm lg:text-base">
                                    {benefit}
                                </span>
                            </StaggerItem>
                        ))}
                    </div>

                    <StaggerItem className="mt-12 pt-8 border-t border-white/10">
                        <Link to={"/posts/giai-phap-esco"}>
                            <button className="bg-[#228B22] hover:bg-[#FFD700] hover:text-[#1A2B3C] text-white px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs transition-colors shadow-lg shadow-[#228B22]/20 active:scale-95">
                                Giải pháp ESCO / Mô hình PPA
                            </button>
                        </Link>
                    </StaggerItem>

                </StaggerContainer>

            </div>
        </div>
    </section>
);

export default PpaModelSection