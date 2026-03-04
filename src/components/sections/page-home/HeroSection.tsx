import { AnimatePresence, motion, MotionValue } from 'framer-motion';
import type { TranslationContent } from '../../../types';

interface HeroSectionProps {
    t: TranslationContent;
    lang: string;
    heroY: MotionValue<number>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t, lang, heroY }) => {
    return (
        <section id="section-0" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A2B3C]">
            <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                <video
                    src="/wataco/hero-banner.webm"
                    className="w-full h-full object-cover opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#FFD700]/10 to-[#228B22]/40" />
            </motion.div>

            <div className="absolute inset-0 z-1 pointer-events-none opacity-10"
                style={{ backgroundImage: 'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="max-w-360 mx-auto px-4 sm:px-6 w-full relative z-10 hero-text-shadow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={lang}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center space-x-3 mb-3 sm:mb-4 lg:mb-8">
                            <span className="h-px w-6 sm:w-8 lg:w-12 bg-[#FFD700] drop-shadow-md" />
                            <span className="text-[#FFD700] font-black text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.5em] font-heading drop-shadow-md">Precision Engineering</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black text-white leading-[1.2] sm:leading-[1.1] mb-6 sm:mb-8 lg:mb-12 whitespace-pre-line tracking-tighter font-heading drop-shadow-2xl">
                            {t.heroH1.split('\n').map((line, index) => (
                                <span key={index} className={`block ${index >= 2 ? "text-[#FFD700]" : ""}`}>
                                    {line}
                                </span>
                            ))}
                        </h1>

                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl max-w-2xl mb-6 sm:mb-8 lg:mb-12 font-bold leading-relaxed border-l-4 border-[#228B22] pl-4 sm:pl-6 lg:pl-8 drop-shadow-lg">
                            {t.heroSub}
                        </p>

                        <div className="flex flex-wrap gap-4 sm:gap-6">
                            <button className="bg-white text-[#228b22] px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-[11px] sm:text-xs tracking-widest uppercase hover:bg-[#FFD700] hover:text-[#1A2B3C] transition-all shadow-xl border border-transparent rounded-md min-h-11">
                                {t.ctaMain}
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default HeroSection;
