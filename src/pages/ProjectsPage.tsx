import {
    ArrowRight,
    Building2,
    Calendar,
    Factory,
    MapPin,
    Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectProcessFlow from '../components/sections/page-home/projectSection/projectProcessFlow';
import { useTranslation } from '../hooks/useTranslation';

// --- TYPES ---
interface FadeInUpProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCategory {
    id: 'all' | 'vietnam' | 'international';
    label: string;
    icon: React.FC<any> | null;
}

interface ProjectDataProjectsPage {
    id: number;
    name: string;
    category: 'vietnam' | 'international';
    location: string;
    capacity: string;
    year: string;
    status: string;
    image: string;
    slug: string;
}

interface ProjectCardProps {
    project: ProjectDataProjectsPage;
}


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
  `}</style>
);

// --- ANIMATION COMPONENTS ---
const FadeInUp: React.FC<FadeInUpProps> = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

// --- COMPONENTS ---

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#228B22]">
            {/* Status Badge - Green Text */}
            <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md border bg-white text-[#228B22] border-[#228B22]">
                    {project.status}
                </span>
            </div>

            {/* Image */}
            <div className="h-64 overflow-hidden relative">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-60 group-hover:opacity-40" />

                {/* Overlay Content (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <div className="flex items-center space-x-2 text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-1">
                        <MapPin size={12} />
                        <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold font-heading leading-tight group-hover:text-[#FFD700]">
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
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1A2B3C] group-hover:bg-[#1A2B3C] group-hover:text-white border border-gray-100">
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

// --- MAIN PAGE ---
export default function ProjectsPage() {
    const { t } = useTranslation();

    // order: Vietnam, International, All projects
    const projectCategories: ProjectCategory[] = [
        { id: 'vietnam', label: t.projectsPage.categoryVietnam, icon: Factory },
        { id: 'international', label: t.projectsPage.categoryInternational, icon: Building2 },
        { id: 'all', label: t.projectsPage.categoryAll, icon: null },
    ];

    const projectsList: ProjectDataProjectsPage[] = [
        ...t.projectsData.vietnam.map((p, i) => ({
            id: i,
            name: p.name,
            category: 'vietnam' as const,
            location: p.location,
            capacity: p.capacity,
            year: p.year,
            status: p.status,
            image: p.img,
            slug: p.slug
        })),
        ...t.projectsData.international.map((p, i) => ({
            id: t.projectsData.vietnam.length + i,
            name: p.name,
            category: 'international' as const,
            location: p.location,
            capacity: p.capacity,
            year: p.year,
            status: p.status,
            image: p.img,
            slug: p.slug
        })),
    ];

    const [activeCategory, setActiveCategory] = useState<'all' | 'vietnam' | 'international'>('vietnam');
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    // maintain how many items have been loaded per category to simulate caching
    const loadedCounts = useRef<{ [key in 'all' | 'vietnam' | 'international']: number }>({
        vietnam: 6,
        international: 6,
        all: 6
    });
    // reset visible count when category changes (use cached value)
    useEffect(() => {
        setVisibleCount(loadedCounts.current[activeCategory]);
        // ensure all-projects cache grows at least as much as specific categories
        if (activeCategory !== 'all') {
            loadedCounts.current.all = Math.max(
                loadedCounts.current.all,
                loadedCounts.current[activeCategory]
            );
        }
    }, [activeCategory]);

    // IntersectionObserver lazy-load: add more when sentinel is visible
    const filteredProjects = projectsList
        .filter(project => activeCategory === 'all' || project.category === activeCategory)
        .sort((a, b) => {
            const inProgressSet = new Set(['Đang triển khai', 'In Progress', '進行中']);
            const aInProgress = inProgressSet.has(a.status);
            const bInProgress = inProgressSet.has(b.status);
            if (aInProgress === bInProgress) return 0;
            return aInProgress ? -1 : 1;
        });

    useEffect(() => {
        const el = sentinelRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsLoadingMore(true);
                        setVisibleCount(prev => {
                            const next = Math.min(prev + 3, filteredProjects.length);
                            loadedCounts.current[activeCategory] = next;
                            return next;
                        });
                    }
                });
            },
            { root: null, rootMargin: '300px', threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [filteredProjects.length]);


    // turn off loading indicator after visibleCount updates
    useEffect(() => {
        if (!isLoadingMore) return;
        const t = setTimeout(() => setIsLoadingMore(false), 600);
        return () => clearTimeout(t);
    }, [visibleCount, isLoadingMore]);

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    return (
        <div className="bg-[#F8FAFC] min-h-screen text-[#1A2B3C]">
            <FontStyles />

            <ProjectProcessFlow />

            {/* --- FILTERABLE PROJECT GALLERY --- */}
            <section className="py-20" id="project-grid-anchor">
                <div className="max-w-360 mx-auto px-6">
                    <FadeInUp className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <h2 className="text-2xl font-black text-[#1A2B3C] uppercase tracking-tight font-heading">
                            {t.projectsPage.libraryTitle}
                        </h2>

                        <div className="flex flex-wrap justify-center gap-2">
                            {projectCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => { setActiveCategory(cat.id); setVisibleCount(6); }}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center border ${activeCategory === cat.id
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="contents">
                            {visibleProjects.map((project) => (
                                <Link to={`/posts/${project.slug}`} key={project.id}>
                                    <ProjectCard project={project} />
                                </Link>
                            ))}
                            {isLoadingMore && Array.from({ length: 3 }).map((_, idx) => (
                                <div key={`skeleton-${idx}`} className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm animate-pulse">
                                    <div className="h-64 bg-gray-200" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {visibleProjects.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
                            <p className="text-gray-400">{t.projectsPage.noProjects}</p>
                        </div>
                    )}

                    {/* Sentinel for lazy-load */}
                    <div ref={sentinelRef} className="h-6" />

                    <div className="text-center mt-6 space-y-2">
                        <p className="text-xs text-gray-400 font-medium">{t.projectsPage.showingProjects.replace('{current}', Math.min(visibleCount, filteredProjects.length).toString()).replace('{total}', filteredProjects.length.toString())}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
