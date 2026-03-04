import { Home, MapPin } from 'lucide-react';
import type { TranslationContent } from '../../../types';
import { StaggerContainer, StaggerItem } from '../../common/StaggerAnimations';

interface HeritageSectionProps {
    t: TranslationContent;
}

const HeritageSection: React.FC<HeritageSectionProps> = ({ t }) => {
    return (
        <section id="section-1" className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden py-12 sm:py-16 md:py-20">
            <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
                    <StaggerContainer className="lg:col-span-5 relative">
                        <div className="relative group">
                            <div className="overflow-hidden rounded-[40px] lg:rounded-[100px/75px] border-8 lg:border-12 border-[#F4F7F6] shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=1200"
                                    alt="Sendai City Heritage"
                                    className="w-full aspect-4/3 object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-6 right-6 bg-[#FFD700] p-3 shadow-lg z-10">
                                    <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-[#1A2B3C] leading-none mb-1">ESTABLISHED</div>
                                    <div className="text-lg lg:text-xl font-black text-[#1A2B3C] leading-none">2015</div>
                                </div>
                            </div>
                        </div>
                    </StaggerContainer>

                    <StaggerContainer className="lg:col-span-7" delay={0.2}>
                        <StaggerItem className="flex items-center space-x-4 mb-6 lg:mb-8">
                            <div className="p-3 bg-white border border-gray-100 rounded-full shadow-sm">
                                <MapPin size={20} className="text-[#228B22]" />
                            </div>
                            <h3 className="text-[#228b22] font-black text-sm uppercase tracking-[0.5em] font-heading">{t.introSub}</h3>
                        </StaggerItem>
                        <StaggerItem>
                            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-[#1A2B3C] mb-6 sm:mb-8 lg:mb-12 tracking-tighter leading-none font-heading">{t.introTitle}</h2>
                        </StaggerItem>
                        <StaggerItem className="space-y-6 lg:space-y-8">
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                                <div className="border-l-4 border-[#FFD700] pl-6 py-1">
                                    <p className="text-lg lg:text-xl text-gray-700 italic font-medium leading-relaxed">"{t.introContent1}"</p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{t.introContent2}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{t.introContent3}</p>
                                    <div className="flex items-center space-x-2 text-[#228B22] font-bold text-xs uppercase tracking-widest mt-auto">
                                        <Home size={16} />
                                        <span>Enterprises & Industrial</span>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}

export default HeritageSection;
