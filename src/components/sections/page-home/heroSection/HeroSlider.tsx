import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../hooks/useTranslation";

const HeroSlider = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    const { t } = useTranslation();

    const slides = t.heroSlides;
    const ctaText = t.heroSliderCta;

    useEffect(() => {
        const heroTimer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(heroTimer);
    }, [slides.length]);

    return (
        <>
            <div className="min-h-55 lg:min-h-70">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={heroIndex}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            },
                            exit: {
                                opacity: 0,
                                y: -20,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        className="max-w-5xl"
                    >
                        {/* MASK REVEAL TEXT ANIMATION */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.2] mb-6 tracking-tight font-heading uppercase">
                            {slides[heroIndex].title.split('\n').map((line, index, arr) => (
                                <span key={index} className="block overflow-hidden pb-2">
                                    <motion.span
                                        className={`block ${index === arr.length - 1 ? "text-[#FFD700]" : ""}`}
                                        variants={{
                                            hidden: { y: "120%", opacity: 0, rotateX: 20 },
                                            visible: { y: "0%", opacity: 1, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                        }}
                                    >
                                        {line}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
                            }}
                            className="text-white text-base lg:text-xl max-w-3xl mb-8 font-medium leading-relaxed border-l-4 border-[#228B22] pl-6"
                        >
                            {slides[heroIndex].description}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-6 items-center mt-8">
                <button className="bg-white text-[#228B22] px-10 py-5 font-black text-xs tracking-widest uppercase hover:bg-[#FFD700] hover:text-[#1A2B3C] transition-all duration-300 rounded-md">
                    {ctaText}
                </button>

                {/* Dynamic Slider Indicators */}
                <div className="flex gap-3 ml-0 lg:ml-6 mt-4 lg:mt-0">
                    {slides.map((_, idx: number) => (
                        <div
                            key={idx}
                            onClick={() => setHeroIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-500 cursor-pointer shadow-md ${heroIndex === idx ? 'w-16 bg-[#FFD700]' : 'w-6 bg-white/20 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroSlider;
