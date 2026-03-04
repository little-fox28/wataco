import { Award, CheckCircle2, Eye, Handshake, Leaf, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import type { TranslationContent } from "../../../types";
import { StaggerContainer, StaggerItem } from "../../common/StaggerAnimations";

const MissionSection: React.FC<{ t: TranslationContent }> = ({ t }) => {
    if (!t.missionSection) return null;

    return (
        <section id="section-mission" className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#F8FAFC] relative overflow-hidden py-8 lg:py-12">
            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-50"></div>

            <div className="max-w-360 mx-auto px-6 relative z-10 w-full">

                {/* Section Header */}
                <StaggerContainer className="text-center mb-8 lg:mb-12">
                    <h3 className="text-[#228B22] font-black text-xs lg:text-sm uppercase tracking-[0.5em] font-heading mb-2 lg:mb-3 inline-flex items-center justify-center">
                        <span className="w-6 h-px bg-[#228B22] mr-3"></span>
                        {t.missionSection.subtitle}
                        <span className="w-6 h-px bg-[#228B22] ml-3"></span>
                    </h3>
                    <h2 className="text-2xl lg:text-4xl font-black text-[#1A2B3C] leading-tight font-heading">
                        {t.missionSection.title}
                    </h2>
                </StaggerContainer>

                {/* Vision & Mission Row (Balanced 2 columns) */}
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                    {/* Vision Card */}
                    <StaggerContainer>
                        <StaggerItem className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#228B22]/30 transition-all duration-500 group relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F0FDF4] rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 bg-white shadow-md border border-gray-50 rounded-xl flex items-center justify-center text-[#228B22] mb-4 lg:mb-6">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-black text-[#1A2B3C] mb-2 lg:mb-3 font-heading">{t.missionSection.vision.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base grow">{t.missionSection.vision.desc}</p>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Mission Card */}
                    <StaggerContainer delay={0.2}>
                        <StaggerItem className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FFD700]/50 transition-all duration-500 group relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD700]/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 z-0"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 bg-white shadow-md border border-gray-50 rounded-xl flex items-center justify-center text-[#FFD700] mb-4 lg:mb-6">
                                    <Rocket size={24} />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-black text-[#1A2B3C] mb-2 lg:mb-3 font-heading">{t.missionSection.mission.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base grow">{t.missionSection.mission.desc}</p>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>

                {/* Core Values Bento Row (Full width block with 5 items) */}
                <StaggerContainer className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                    <StaggerItem>
                        <div className="text-center mb-6 lg:mb-8">
                            <h3 className="text-lg lg:text-xl font-black text-[#1A2B3C] font-heading inline-block relative">
                                {t.missionSection.coreValues.title}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#228B22] rounded-full"></div>
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
                            {t.missionSection.coreValues.items.map((item: any, idx: number) => {
                                const icons = [Leaf, Award, ShieldCheck, Handshake, Lightbulb];
                                const Icon = icons[idx] || CheckCircle2;
                                return (
                                    <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#F8FAFC] border border-gray-100 shadow-inner flex items-center justify-center mb-3 group-hover:bg-[#228B22] group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                                            <Icon size={24} className="text-[#1A2B3C] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                        </div>
                                        <span className="font-bold text-xs lg:text-sm text-[#1A2B3C] leading-snug group-hover:text-[#228B22] transition-colors">{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </StaggerItem>
                </StaggerContainer>


            </div>
        </section>
    );
};

export default MissionSection