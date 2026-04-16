import { motion } from 'framer-motion';
import { BarChart3, Calendar, ChevronLeft, ChevronRight, MapPin, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectData, TranslationContent } from '../../../../types';
import { StaggerContainer } from '../../../common/StaggerAnimations';

interface ProjectSectionProps {
    t: TranslationContent;
}

export default function ProjectSection({ t }: ProjectSectionProps) {
    const [activeProjectTab, setActiveProjectTab] = useState('vietnam');
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleProjectTabChange = (id: string) => {
        setActiveProjectTab(id);
        setCurrentProjectIndex(0);
    };

    const paginateProject = (newDirection: number) => {
        const projects: ProjectData[] = t.projectsData[activeProjectTab];
        let newIndex = currentProjectIndex + newDirection;
        if (newIndex < 0) newIndex = projects.length - 1;
        if (newIndex >= projects.length) newIndex = 0;
        setCurrentProjectIndex(newIndex);
    };

    // Helper to determine card position and style
    const getCardStyle = (index: number, total: number) => {
        let offset = index - currentProjectIndex;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;
        if (offset === 0) return { x: '0%', scale: 1, opacity: 1, zIndex: 10, filter: 'brightness(100%)', pointerEvents: 'auto' };
        else if (offset === -1 || (currentProjectIndex === 0 && index === total - 1)) return { x: '-70%', scale: 0.85, opacity: 0.6, zIndex: 5, filter: 'brightness(50%) blur(1px)', pointerEvents: 'none' };
        else if (offset === 1 || (currentProjectIndex === total - 1 && index === 0)) return { x: '70%', scale: 0.85, opacity: 0.6, zIndex: 5, filter: 'brightness(50%) blur(1px)', pointerEvents: 'none' };
        else return { x: '0%', scale: 0.5, opacity: 0, zIndex: 0, pointerEvents: 'none' };
    };

    return (
        <section id="section-3" className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-[#1A2B3C] relative overflow-hidden py-12 sm:py-16 md:py-20">
            <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10 w-full">
                {/* Section Header */}
                <StaggerContainer className="flex justify-between mb-8 sm:mb-12 lg:mb-16 gap-6 sm:gap-8">
                    <div>
                        <h3 className="text-[#228B22] font-black text-xs sm:text-sm uppercase tracking-[0.5em] font-heading mb-2">{t.projectsSub}</h3>
                        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-black tracking-tighter leading-none text-[#1A2B3C] font-heading">{t.projectsTitle}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        {t.projectTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleProjectTabChange(tab.id)}
                                className={`px-5 py-2.5 sm:px-2.5 sm:py:2.5 text-sm font-semibold rounded-full transition-all duration-300  ${activeProjectTab === tab.id
                                    ? 'bg-[#1A2B3C] text-white shadow-lg shadow-blue-900/20 transform scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'} 
                  `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </StaggerContainer>

                {/* 3-CARD CAROUSEL - TRANSITION UPDATED TO FadeInUp for Category Switch */}
                <motion.div
                    key={activeProjectTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-100 sm:h-125 lg:h-125 flex items-center justify-center touch-pan-y"
                >

                    {/* Slider Track with Swipe */}
                    <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, { offset }) => {
                            const swipe = offset.x;
                            if (swipe < -100) paginateProject(1);
                            else if (swipe > 100) paginateProject(-1);
                        }}
                    >
                        {t.projectsData[activeProjectTab].map((project, idx) => {
                            const cardStyle = getCardStyle(idx, t.projectsData[activeProjectTab].length);

                            return (
                                <motion.div
                                    key={`${activeProjectTab}-${idx}`}
                                    className="absolute top-0 w-[85%] lg:w-[65%] h-full bg-[#111] rounded-md shadow-2xl overflow-hidden border border-white/10"
                                    initial={false}
                                    animate={cardStyle}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Status Badge - Green Text */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md border bg-white text-[#228B22] border-[#228B22]">
                                            {project.status}
                                        </span>
                                    </div>
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-full object-cover object-center"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90" />

                                    {/* Card Content - Only show for center card, or fade others */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 transition-opacity duration-300"
                                        style={{ opacity: cardStyle.opacity < 1 ? 0 : 1 }}>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className="text-[#FFD700] text-[10px] font-bold tracking-widest uppercase font-heading flex items-center">
                                                <MapPin size={12} className="mr-2" />
                                                {project.location}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl lg:text-5xl font-black text-white leading-tight mb-6 font-heading">
                                            {project.name}
                                        </h3>
                                        {/* UPDATED STATS ROW: Year - Capacity - Production */}
                                        <div className="flex flex-wrap items-center gap-4 lg:gap-6 border-t border-white/20 pt-6">
                                            <div className="flex items-center text-[#FFD700]">
                                                <Calendar size={16} className="mr-2 opacity-80" />
                                                <span className="text-sm font-bold font-tech">{project.year}</span>
                                            </div>
                                            <div className="flex items-center text-[#FFD700]">
                                                <Zap size={16} className="mr-2 opacity-80" />
                                                <span className="text-sm font-bold font-tech">{project.capacity}</span>
                                            </div>
                                            <div className="flex items-center text-[#FFD700]">
                                                <BarChart3 size={16} className="mr-2 opacity-80" />
                                                <span className="text-sm font-bold font-tech">{project.production}</span>
                                            </div>
                                            <button className="ml-auto bg-white/10 hover:bg-[#228b22] text-white px-6 py-2 text-[9px] font-black uppercase tracking-widest transition-colors border border-white/20 hover:border-[#228b22] rounded-md min-h-[44px] active:scale-95">
                                                <Link to={`posts/${project.slug}`}>
                                                    {t.viewProject}
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Controls */}
                    <div className="absolute inset-y-0 left-0 flex items-center z-30 pointer-events-none">
                        <button
                            onClick={() => paginateProject(-1)}
                            className="ml-2 lg:ml-4 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center z-30 pointer-events-none">
                        <button
                            onClick={() => paginateProject(1)}
                            className="mr-2 lg:mr-4 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        {t.projectsData[activeProjectTab].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentProjectIndex(idx)}
                                className={`h-1 transition-all duration-300 ${idx === currentProjectIndex ? 'bg-[#FFD700] w-8' : 'bg-[#1A2B3C]/30 w-4 hover:bg-[#1A2B3C]'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
