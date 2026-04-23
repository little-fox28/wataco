import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import MissionSection from '../components/sections/page-home/MissionSection';
import { useTranslation } from '../hooks/useTranslation';

const FontStyles: React.FC = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Roboto+Mono:wght@400;500;700&display=swap');
    
    :root {
      --font-body: 'Noto Sans JP', sans-serif;
      --font-heading: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      --font-tech: 'Roboto Mono', monospace;
      --color-navy: #1A2B3C;
      --color-green: #228B22;
      --color-gold: #FFD700;
    }

    body {
      font-family: var(--font-body) !important;
      overflow-x: hidden;
      background-color: #F8FAFC;
    }
    
    .font-heading { font-family: var(--font-heading); letter-spacing: -0.01em; }
    .font-tech { font-family: var(--font-tech); letter-spacing: -0.03em; }
    .font-jp-style { font-feature-settings: "palt"; letter-spacing: 0.05em; }
    .hero-text-shadow { text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); }
    
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

const StaggerContainer = forwardRef<HTMLDivElement, { children: ReactNode; className?: string; delay?: number;[key: string]: any }>(({ children, className, delay = 0, ...props }, ref) => (
    <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: delay } } }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
));

const StaggerItem = forwardRef<HTMLDivElement, { children: ReactNode; className?: string; delay?: number }>(({ children, className, delay = 0 }, ref) => (
    <motion.div ref={ref} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } } }} className={className}>
        {children}
    </motion.div>
));

const dailyActivitiesMeta = [
    { id: 1, img: "about-us/team_building.jpg", span: "md:col-span-2 md:row-span-2" },
    { id: 2, img: "about-us/site_supervision.jpg", span: "md:col-span-1 md:row-span-1" },
    { id: 3, img: "about-us/internal_training.jpg", span: "md:col-span-1 md:row-span-1" },
    { id: 4, img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-2" },
    // { id: 5, img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1" },
    { id: 6, img: "about-us/sport_activities.jpg", span: "md:col-span-2 md:row-span-2" },
];

export default function AboutUsPage() {
    const { t } = useTranslation();

    const about = t.aboutUsPage;
    const dailyActivities = about.dailyActivities.map((item, idx) => ({ ...item, id: dailyActivitiesMeta[idx]?.id ?? idx + 1, img: dailyActivitiesMeta[idx]?.img ?? dailyActivitiesMeta[0].img, span: dailyActivitiesMeta[idx]?.span ?? "md:col-span-1 md:row-span-1" }));

    return (
        <div className="bg-[#F8FAFC] min-h-screen text-[#1A2B3C] selection:bg-[#FFD700] selection:text-[#1A2B3C] font-sans">
            <FontStyles />

            <MissionSection t={t} />


            <section className="py-20 lg:py-32 bg-white border-b border-gray-100 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6">
                    <StaggerContainer className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-3">{about.culture.subtitle}</h3>
                            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading">{about.culture.title}</h2>
                        </div>
                        <p className="text-gray-500 max-w-md font-light">{about.culture.description}</p>
                    </StaggerContainer>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 lg:gap-6">
                        {dailyActivities.map((act) => (
                            <StaggerItem key={act.id} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${act.span}`}>
                                <img
                                    src={act.img}
                                    alt={act.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/90 via-[#1A2B3C]/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-[#FFD700] text-[10px] font-black uppercase tracking-widest mb-2 block drop-shadow-md">{act.category}</span>
                                        <h4 className="text-white text-xl lg:text-2xl font-bold font-heading drop-shadow-lg">{act.title}</h4>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
