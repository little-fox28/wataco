import { motion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
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

const FadeInUp = forwardRef<HTMLDivElement, { children: ReactNode; className?: string; delay?: number }>(({ children, delay = 0, className }, ref) => (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
        {children}
    </motion.div>
));

// const awardsMeta = [Trophy, ShieldCheck, Star, Medal];
// const communityMeta = [
//     { img: "https://plus.unsplash.com/premium_photo-1679500295467-51b10bd019ec?auto=format&fit=crop&q=80&w=800", icon: SunMedium },
//     { img: "https://images.unsplash.com/photo-1556074851-baee07a28b14?auto=format&fit=crop&q=80&w=800", icon: Droplets },
//     { img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800", icon: BookOpen }
// ];
const recognitionsMeta = [
    { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", color: "#FFD700" },
    { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400", color: "#228B22" },
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", color: "#3B82F6" }
];
const dailyActivitiesMeta = [
    { id: 1, img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-2" },
    { id: 2, img: "https://images.unsplash.com/photo-1759922378222-47ad736a174d?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
    { id: 3, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
    { id: 4, img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-2" },
    { id: 5, img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1" },
    { id: 6, img: "https://images.unsplash.com/photo-1762944082537-bf904828a5c9?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1" },
];

export default function AboutUsPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const { t } = useTranslation();

    const about = t.aboutUsPage;
    // const awardsData = about.awards.items.map((item, idx) => ({ ...item, icon: awardsMeta[idx] ?? Trophy }));
    const recognitions = about.recognitions.map((item, idx) => ({ ...item, img: recognitionsMeta[idx]?.img ?? recognitionsMeta[0].img, color: recognitionsMeta[idx]?.color ?? "#FFD700" }));
    // const communityActivities = about.community.activities.map((item, idx) => ({ ...item, img: communityMeta[idx]?.img ?? communityMeta[0].img, icon: communityMeta[idx]?.icon ?? SunMedium }));
    const dailyActivities = about.dailyActivities.map((item, idx) => ({ ...item, id: dailyActivitiesMeta[idx]?.id ?? idx + 1, img: dailyActivitiesMeta[idx]?.img ?? dailyActivitiesMeta[0].img, span: dailyActivitiesMeta[idx]?.span ?? "md:col-span-1 md:row-span-1" }));

    return (
        <div className="bg-[#F8FAFC] min-h-screen text-[#1A2B3C] selection:bg-[#FFD700] selection:text-[#1A2B3C] font-sans">
            <FontStyles />

            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FFD700] overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                        alt={about.hero.imageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B3C] via-[#1A2B3C]/80 to-[#F8FAFC]" />
                </motion.div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
                    <FadeInUp>
                        <span className="inline-block bg-[#228B22] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm border border-[#228B22]">
                            {about.hero.badge}
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight font-heading mb-6 tracking-tight drop-shadow-md">
                            {about.hero.titlePrefix} <span className="text-[#FFD700]">{about.hero.titleHighlight}</span>
                        </h1>
                        <p className="text-gray-300 text-base lg:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                            {about.hero.description}
                        </p>
                    </FadeInUp>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#228B22]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    <StaggerContainer className="text-center mb-16">
                        <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-3">{about.recognition.subtitle}</h3>
                        <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading mb-6">{about.recognition.title}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-light">{about.recognition.description}</p>
                    </StaggerContainer>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {recognitions.map((rec, idx) => (
                            <StaggerItem key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative group">
                                <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{ backgroundColor: rec.color }}></div>

                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
                                            <img src={rec.img} alt={rec.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div
                                            className="absolute inset-0 rounded-full border-2 border-dashed opacity-50 scale-125 animate-[spin_10s_linear_infinite]"
                                            style={{ borderColor: rec.color }}
                                        ></div>
                                    </div>

                                    <span className="text-[10px] font-black uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-gray-50" style={{ color: rec.color }}>
                                        {rec.type}
                                    </span>

                                    <h4 className="text-2xl font-black text-[#1A2B3C] font-heading mb-1">{rec.name}</h4>
                                    <p className="text-sm font-bold text-gray-400 mb-4">{rec.role}</p>

                                    <p className="text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100 pt-4 w-full">
                                        "{rec.desc}"
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* <section className="py-24 lg:py-36 relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000"
                        alt={about.awards.sectionImageAlt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1A2B3C]/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-[#1A2B3C]/50 to-transparent opacity-90"></div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    <StaggerContainer className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 border-b border-white/20 pb-8">
                        <div>
                            <h3 className="text-[#FFD700] font-black text-sm uppercase tracking-[0.5em] font-heading mb-3">{about.awards.subtitle}</h3>
                            <h2 className="text-3xl lg:text-5xl font-black leading-tight font-heading">{about.awards.title}</h2>
                        </div>
                        <p className="text-gray-300 max-w-md font-light lg:text-right">
                            {about.awards.description}
                        </p>
                    </StaggerContainer>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {awardsData.map((award, idx) => {
                            const Icon = award.icon;
                            return (
                                <StaggerItem key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-[#FFD700] hover:bg-white/20 transition-all duration-300 group flex flex-col items-center text-center shadow-lg">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#F59E0B] text-[#1A2B3C] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={36} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-heading mb-4 group-hover:text-[#FFD700] transition-colors">{award.title}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed font-light">{award.desc}</p>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section> */}

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

            {/* <section className="py-20 lg:py-32 bg-[#F0FDF4] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    <StaggerContainer className="text-center mb-20">
                        <h3 className="text-[#228B22] font-black text-sm uppercase tracking-[0.5em] font-heading mb-4">{about.community.subtitle}</h3>
                        <h2 className="text-3xl lg:text-5xl font-black text-[#1A2B3C] font-heading mb-4">{about.community.title}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">{about.community.description}</p>
                    </StaggerContainer>

                    <div className="space-y-16 lg:space-y-24">
                        {communityActivities.map((activity, idx) => {
                            const isEven = idx % 2 !== 0;
                            return (
                                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                                    <FadeInUp delay={0.1} className="w-full lg:w-1/2 relative group">
                                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3]">
                                            <img
                                                src={activity.img}
                                                alt={activity.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-[#228B22]/10 mix-blend-overlay"></div>
                                        </div>
                                        <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#228B22] transform group-hover:rotate-12 transition-transform duration-300 hidden md:flex`}>
                                            <activity.icon size={40} strokeWidth={1.5} />
                                        </div>
                                    </FadeInUp>

                                    <FadeInUp delay={0.2} className="w-full lg:w-1/2">
                                        <div className="inline-block bg-[#E2F5E9] text-[#228B22] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                            {activity.category}
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-black text-[#1A2B3C] font-heading mb-6 leading-tight">
                                            {activity.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                                            {activity.desc}
                                        </p>
                                    </FadeInUp>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}
        </div>
    );
}
