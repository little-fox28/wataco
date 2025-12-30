import React from 'react';
import { motion } from 'framer-motion';

interface HeroBannerProps {
    t: any; // Translation object
}

const HeroBanner: React.FC<HeroBannerProps> = ({ t }) => {
    return (
        <section className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden bg-[#1A2B3C]">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#228B22] rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700] rounded-full blur-[100px] mix-blend-screen opacity-50" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,43,60,0.8),rgba(26,43,60,0.9)),url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h3 className="text-[#FFD700] font-black text-xs lg:text-sm uppercase tracking-[0.5em] mb-4 font-heading">
                        {t.hero.sub}
                    </h3>
                    <h1 className="text-3xl lg:text-6xl font-black text-white leading-tight font-heading mb-6">
                        {t.hero.title}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#228B22] to-[#FFD700]">{t.hero.highlight}</span>
                    </h1>
                    <p className="text-gray-300 text-sm lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        {t.hero.desc}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;
