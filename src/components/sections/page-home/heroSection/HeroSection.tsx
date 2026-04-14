import { motion, MotionValue } from 'framer-motion';
import HeroSlider from './HeroSlider';

interface HeroSectionProps {
    heroY: MotionValue<number>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroY }) => {
    const videoSrc = import.meta.env.DEV
        ? "/video_banner.mp4"
        : "https://pub-97eda7c36ee5433890d3d2112ed13a81.r2.dev/video_banner.mp4";

    return (
        <section id="section-0" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A2B3C]">
            <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                <video
                    src={videoSrc}
                    className="w-full h-full object-cover opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#FFD700]/10 to-[#228B22]/50" />
            </motion.div>

            <div className="absolute inset-0 z-1 pointer-events-none opacity-10"
                style={{ backgroundImage: 'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="max-w-360 mx-auto px-4 sm:px-6 w-full relative z-10 hero-text-shadow">
                <HeroSlider />
            </div>
        </section>
    );
}

export default HeroSection;
