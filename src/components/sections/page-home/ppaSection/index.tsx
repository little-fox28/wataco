import { CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import type { TranslationContent } from "../../../../types";
import { StaggerContainer, StaggerItem } from "../../../common/StaggerAnimations";
import PPAImage from "./ppa-image";

const PpaModelSection: React.FC<{ t: TranslationContent }> = ({ t }) => (
    <section id="section-ppa" className="min-h-screen flex flex-col items-center justify-center bg-[#0B1120] text-white relative overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000"
                alt="Solar Panels Background"
                className="w-full h-full object-center"
            />
            {/* Dark overlay to blend the black background of the PPA diagram seamlessly */}
            <div className="absolute inset-0 bg-[#1A2B3C]/70"></div>
        </div>

        <div className="max-w-360 mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Column: Image with floating animation */}
                <StaggerContainer className="lg:col-span-6 flex justify-center lg:justify-start">
                    <PPAImage />
                </StaggerContainer>

                {/* Right Column: Text Content */}
                <StaggerContainer className="lg:col-span-6">
                    <StaggerItem>
                        <h3 className="text-[#FFD700] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4 flex items-center">
                            <Zap size={16} className="mr-2" /> {t.ppaSection.subtitle}
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
                        <Link to={"/posts/mo-hinh-ppa-dien-mat-troi-0-dong"}>
                            <button className="bg-[#228B22] hover:bg-[#FFD700] hover:text-[#1A2B3C] text-white px-8 py-4 rounded-md font-black uppercase tracking-widest text-xs transition-colors shadow-lg shadow-[#228B22]/20 active:scale-95">
                                {t.ppaSection.button}
                            </button>
                        </Link>
                    </StaggerItem>

                </StaggerContainer>

            </div>
        </div>
    </section>
);

export default PpaModelSection