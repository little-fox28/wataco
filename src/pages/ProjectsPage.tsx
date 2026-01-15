/*
 * WATACO ENGINEERING WEBSITE - PROJECTS PAGE
 * Version: Wataco Project Page (v.2.1)
 * Date: 2024
 * Changes in v.2.1:
 * - CARD UI UPDATE:
 * + Removed `CountUp` animation from Project Capacity.
 * + Changed Icons (Zap, Calendar) and Text in Card Footer to Navy Blue (#1A2B3C).
 * + Status Badge: Updated text color to Brand Green (#228B22) for all statuses.
 * - Previous Features Retained:
 * + Map Visualization (SVG Tech Dots).
 * + Grid Layout & "Load More" functionality.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, ArrowUp,
    MapPin, Zap, Calendar, Building2, Factory, Sprout, Home, CheckCircle2
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import type { FadeInUpProps, ProjectCategory, ProjectDataProjectsPage, ProjectLocation, ProjectCardProps } from '../types';

// --- SHARED STYLES ---
const FontStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;700&display=swap');
    
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
      color: #1A2B3C;
    }
    
    .font-heading { font-family: var(--font-heading); letter-spacing: -0.01em; }
    .font-tech { font-family: var(--font-tech); letter-spacing: -0.03em; }
    
    .hero-text-shadow {
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
    }
    
    /* Custom Scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    /* Pulse animation for map dots */
    @keyframes pulse-ring {
      0% { transform: scale(0.33); opacity: 1; }
      80%, 100% { transform: scale(2); opacity: 0; }
    }
    @keyframes pulse-dot {
      0% { transform: scale(0.8); }
      50% { transform: scale(1); }
      100% { transform: scale(0.8); }
    }
    .pulse-ring {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #228B22;
      animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
    .pulse-dot {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #228B22;
      animation: pulse-dot 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
    }
  `}</style>
);

// --- ANIMATION COMPONENTS ---
const FadeInUp: React.FC<FadeInUpProps> = ({ children, delay = 0, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

// Removed local CountUp component as it was unused and caused errors.

// --- MOCK DATA ---
const projectCategories: ProjectCategory[] = [
    { id: 'all', label: 'Tất cả dự án', icon: null },
    { id: 'industrial', label: 'Công Nghiệp & FDI', icon: Factory },
    { id: 'commercial', label: 'Thương Mại', icon: Building2 },
    { id: 'agriculture', label: 'Nông Nghiệp', icon: Sprout },
    { id: 'residential', label: 'Dân Dụng', icon: Home },
];

const projectsList: ProjectDataProjectsPage[] = [
    { id: 1, name: "Nhà máy Dệt may Thành Công", category: 'industrial', location: "KCN Trảng Bàng, Tây Ninh", capacity: "1.2 MWp", year: "2023", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1565128938229-43654489eb12?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Kho vận Logis VI", category: 'industrial', location: "VSIP I, Bình Dương", capacity: "850 kWp", year: "2022", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1581094794329-cd56b350a942?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Farm Dưa Lưới Công Nghệ", category: 'agriculture', location: "Đức Trọng, Lâm Đồng", capacity: "500 kWp", year: "2022", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1582298649479-7a5528892787?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Villa Thảo Điền", category: 'residential', location: "Thủ Đức, TP.HCM", capacity: "15 kWp", year: "2023", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1600596542815-2a502f35f6e4?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Nhà máy Cơ khí Chính xác", category: 'industrial', location: "KCN Cao, TP.HCM", capacity: "2.5 MWp", year: "2023", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1534951474654-886e563204d5?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Trung tâm Thương mại Aeon", category: 'commercial', location: "Bình Tân, TP.HCM", capacity: "1.5 MWp", year: "2021", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=800" },
    { id: 7, name: "Trại Nấm Solar", category: 'agriculture', location: "Long Khánh, Đồng Nai", capacity: "200 kWp", year: "2021", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1627823521360-1554558e658a?auto=format&fit=crop&q=80&w=800" },
    { id: 8, name: "Khu nghỉ dưỡng Hồ Tràm", category: 'commercial', location: "BR-VT", capacity: "450 kWp", year: "2023", status: "Đang triển khai", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
    { id: 9, name: "Nhà máy Gỗ An Cường", category: 'industrial', location: "Bình Dương", capacity: "3.2 MWp", year: "2020", status: "Hoàn thành", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
];

const projectLocations: ProjectLocation[] = [
    { top: "15%", left: "45%", name: "Bắc Ninh" },
    { top: "18%", left: "48%", name: "Hải Dương" },
    { top: "20%", left: "40%", name: "Hải Phòng" },
    { top: "48%", left: "50%", name: "Quảng Ngãi" },
    { top: "75%", left: "52%", name: "Lâm Đồng" },
    { top: "80%", left: "55%", name: "Bình Thuận" },
    { top: "85%", left: "42%", name: "Tây Ninh" },
    { top: "87%", left: "45%", name: "Bình Dương" },
    { top: "88%", left: "44%", name: "Đồng Nai" },
    { top: "92%", left: "42%", name: "Long An" },
];

// --- COMPONENTS ---

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#228B22] transition-all duration-300"
        >
            {/* Status Badge - Green Text */}
            <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md border bg-white text-[#228B22] border-[#228B22]">
                    {project.status} 1
                </span>
            </div>

            {/* Image */}
            <div className="h-64 overflow-hidden relative">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Overlay Content (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <div className="flex items-center space-x-2 text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-1">
                        <MapPin size={12} />
                        <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold font-heading leading-tight group-hover:text-[#FFD700] transition-colors">
                        {project.name}
                    </h3>
                </div>
            </div>

            {/* Details (Footer) - Navy Blue Icons & Text */}
            <div className="p-6 bg-white flex justify-between items-center border-t border-gray-100">
                <div className="flex items-center space-x-6">
                    <div>
                        <div className="text-[10px] text-gray-400 uppercase font-bold">Công suất</div>
                        <div className="flex items-center text-[#1A2B3C] font-black text-lg font-tech">
                            <Zap size={16} className="mr-1 text-[#1A2B3C] fill-[#1A2B3C]" />
                            {project.capacity}
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-400 uppercase font-bold">Năm</div>
                        <div className="flex items-center text-[#1A2B3C] font-bold font-tech">
                            <Calendar size={14} className="text-[#1A2B3C] mr-1" />
                            {project.year}
                        </div>
                    </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1A2B3C] group-hover:bg-[#1A2B3C] group-hover:text-white transition-colors border border-gray-100">
                    <ArrowRight size={18} />
                </button>
            </div>
        </motion.div>
    );
};

const VietnamMapStylized = () => (
    <div className="lg:col-span-8 relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center">
        {/* Map Container */}
        <div className="relative flex-grow flex items-center justify-center p-0 lg:p-8 w-full">
            {/* Map Image */}
            <img src='/wataco/client-logo/vietnam-maps.png' className='h-full w-[45%]' />

            {/* Project Location Dots */}
            {projectLocations.map((loc, i) => (
                <div
                    key={i}
                    className="absolute flex items-center justify-center group/dot"
                    style={{
                        top: loc.top,
                        left: loc.left,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {/* Shadow Ping Effect */}
                    <div className="absolute w-4 h-4 bg-[#228B22] rounded-full opacity-75 animate-ping" style={{ zIndex: 5 }}></div>
                    {/* Dots */}
                    <div className="w-3 h-3 bg-[#228B22] rounded-full z-10 cursor-pointer hover:scale-125 transition-transform"></div>
                    {/* Tooltip */}
                    <div className="absolute opacity-0 group-hover/dot:opacity-100 transition-opacity bg-[#1A2B3C] text-white text-[10px] px-2 py-1 rounded shadow-lg -top-8 whitespace-nowrap z-20 pointer-events-none font-bold">
                        {loc.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
);


// --- MAIN PAGE ---
export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(6);

    // No explicit loading state needed for instant update
    // const [isLoadingMore, setIsLoadingMore] = useState(false); 

    const filteredProjects = projectsList.filter(project =>
        activeCategory === 'all' || project.category === activeCategory
    );

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    // Simplified Handler - Instant Update
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    // NEW: Handle Collapse
    const handleCollapse = () => {
        setVisibleCount(6);
        // Optional: smooth scroll back to top of grid?
        const gridElement = document.getElementById('project-grid-anchor');
        if (gridElement) gridElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Layout>
            <div className="bg-[#F8FAFC] min-h-screen text-[#1A2B3C]">
                <FontStyles />

                {/* HEADER REMOVED - CONTENT ONLY */}

                {/* --- HERO BANNER --- */}
                <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-[#1A2B3C]">
                    <div className="absolute inset-0 opacity-100">
                        <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
                    </div>
                    {/* Green Overlay 8% opacity */}
                    <div className="absolute inset-0 bg-[#228B22]" style={{ opacity: 0.08 }}></div>

                    <div className="relative z-10 text-center px-6 max-w-4xl hero-text-shadow">
                        <FadeInUp>
                            <h3 className="text-[#FFD700] font-black text-xs lg:text-sm uppercase tracking-[0.5em] mb-4 font-heading">
                                Hồ Sơ Năng Lực
                            </h3>
                            <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight font-heading mb-6 drop-shadow-2xl">
                                DẤU ẤN<br />CÔNG TRÌNH
                            </h1>
                            <p className="text-white text-sm lg:text-lg max-w-2xl mx-auto font-bold leading-relaxed">
                                Hơn 200 dự án đã triển khai, WATACO tự hào mang nguồn năng lượng xanh đến mọi miền tổ quốc.
                            </p>
                        </FadeInUp>
                    </div>
                </section>

                {/* --- STATS & MAP VISUALIZATION --- */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-[1440px] mx-auto px-6">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Stats */}
                            <FadeInUp className="lg:col-span-4 space-y-8">
                                <div className="text-center lg:text-left">
                                    <div className="text-5xl lg:text-6xl font-black text-[#228B22] font-tech mb-2">500<span className="text-[#228B22]">+</span></div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tổng công suất (MWp)</div>
                                </div>
                                <div className="w-full h-px bg-gray-200"></div>
                                <div className="text-center lg:text-left">
                                    <div className="text-5xl lg:text-6xl font-black text-[#228B22] font-tech mb-2">200<span className="text-[#FFD700]">+</span></div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Dự án hoàn thành</div>
                                </div>
                                <div className="w-full h-px bg-gray-200"></div>
                                <div className="text-center lg:text-left">
                                    <div className="text-5xl lg:text-6xl font-black text-[#228B22] font-tech mb-2">35<span className="text-[#228B22]">+</span></div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tỉnh thành phủ sóng</div>
                                </div>
                            </FadeInUp>

                            {/* Map Visualization (Fixed Visibility & Clean Design) */}
                            <FadeInUp delay={0.2} className="lg:col-span-8 relative h-[450px] lg:h-[600px] bg-[#F8FAFC] rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center group shadow-sm">
                                {/* Vietnam Map - Stylized Dots SVG */}
                                <VietnamMapStylized />

                                <div className="absolute bottom-6 right-6 z-10 text-center">
                                    <div className="inline-flex items-center bg-white border border-[#228B22] px-4 py-2 rounded-full shadow-lg">
                                        <CheckCircle2 size={16} className="text-[#228B22] mr-2" />
                                        <span className="font-bold text-[#1A2B3C] text-xs uppercase tracking-wide">Mạng lưới dự án toàn quốc</span>
                                    </div>
                                </div>
                            </FadeInUp>
                        </div>
                    </div>
                </section>

                {/* --- FILTERABLE PROJECT GALLERY --- */}
                <section className="py-20" id="project-grid-anchor">
                    <div className="max-w-[1440px] mx-auto px-6">
                        {/* Filter Bar */}
                        <FadeInUp className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                            <h2 className="text-2xl font-black text-[#1A2B3C] uppercase tracking-tight font-heading">
                                Thư Viện Dự Án
                            </h2>

                            <div className="flex flex-wrap justify-center gap-2">
                                {projectCategories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setActiveCategory(cat.id); setVisibleCount(6); }}
                                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center border ${activeCategory === cat.id
                                            ? 'bg-[#1A2B3C] text-white border-[#1A2B3C] shadow-md'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-[#228B22] hover:text-[#228B22]'
                                            }`}
                                    >
                                        {cat.icon && <cat.icon size={14} className="mr-2" />}
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </FadeInUp>

                        {/* Projects Grid */}
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory} // Key triggers the animation on category change
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="contents" // "contents" allows children to be direct grid items
                                >
                                    {visibleProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Empty State */}
                        {visibleProjects.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
                                <p className="text-gray-400">Không tìm thấy dự án phù hợp.</p>
                            </div>
                        )}

                        {/* Load More / Collapse Buttons */}
                        <div className="text-center mt-16 space-y-4">
                            {filteredProjects.length > visibleCount ? (
                                <FadeInUp className="inline-block">
                                    <button
                                        onClick={handleLoadMore}
                                        className="bg-[#1A2B3C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#228B22] transition-colors shadow-xl inline-flex items-center min-w-[220px] justify-center transform active:scale-95 duration-200"
                                    >
                                        Xem thêm dự án
                                        <ArrowRight size={20} className="ml-2" />
                                    </button>
                                </FadeInUp>
                            ) : visibleCount > 6 ? (
                                /* Show Collapse Button if we are expanded beyond initial 6 */
                                <FadeInUp className="inline-block">
                                    <button
                                        onClick={handleCollapse}
                                        className="bg-white border border-[#1A2B3C] text-[#1A2B3C] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-md inline-flex items-center min-w-[220px] justify-center transform active:scale-95 duration-200"
                                    >
                                        Thu gọn
                                        <ArrowUp size={20} className="ml-2" />
                                    </button>
                                </FadeInUp>
                            ) : null}

                            <p className="text-xs text-gray-400 font-medium">Hiển thị {Math.min(visibleCount, filteredProjects.length)} trên tổng số {filteredProjects.length} dự án</p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}