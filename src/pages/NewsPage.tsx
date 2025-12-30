/*
 * WATACO ENGINEERING WEBSITE - NEWS PAGE
 * Version: Wataco News Page (v.3.3)
 * Date: 2024
 * Changes in v.3.3:
 * - CONTENT UPDATE:
 * + Removed "Media Contact" widget from Sidebar as requested.
 * - FEATURE UPDATE (EXPERT CORNER):
 * + Converted "Expert Corner" from a static grid to an **Interactive Carousel**.
 * + Added navigation buttons (Prev/Next) for the slider.
 * + Expanded mock data to 6 articles to demonstrate scrolling capability.
 * + Responsive logic: Shows 1 item on mobile, 2 on tablet, 3 on desktop.
 * - Previous Features Retained:
 * + Hero Slider, Magazine Layout, Functional Filters.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, ArrowRight, Calendar, ChevronRight, ChevronLeft, Clock, Eye
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import type { HeroSlide, Category, NewsItem, TrendingNewsItem, ExpertArticle, HighlightWatacoProps, NewsListItemProps, SidebarWidgetProps } from '../types';

// --- SHARED STYLES ---
const FontStyles = () => (
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
      color: #1A2B3C;
    }
    
    .font-heading { font-family: var(--font-heading); letter-spacing: -0.01em; }
    .font-tech { font-family: var(--font-tech); letter-spacing: -0.03em; }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Hide scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

// --- HELPER: WATACO HIGHLIGHTER ---
const HighlightWataco: React.FC<HighlightWatacoProps> = ({ text }) => {
    if (!text) return null;
    const parts = text.split(/(WATACO)/g);
    return (
        <span>
            {parts.map((part, index) =>
                part === 'WATACO' ? <span key={index} className="text-[#228B22] font-black">{part}</span> : part
            )}
        </span>
    );
};

// --- MOCK DATA ---
const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: "WATACO Đạt Cột Mốc 500MWp Tổng Công Suất Lắp Đặt Tại Việt Nam",
        summary: "Hành trình 9 năm kiến tạo năng lượng xanh, khẳng định vị thế tổng thầu EPC hàng đầu.",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1600",
        date: "15/05/2024"
    },
    {
        id: 2,
        title: "Khởi Công Dự Án Solar Rooftop Cho Chuỗi Nhà Máy Dệt May Thành Công",
        summary: "Dự án trọng điểm giúp đối tác giảm phát thải CO2 và đạt chứng chỉ xanh quốc tế.",
        image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=1600",
        date: "12/05/2024"
    }
];

const categories: Category[] = [
    { id: 'all', label: 'Tất cả tin tức', count: 42 },
    { id: 'market', label: 'Thị trường & Chính sách', count: 15 },
    { id: 'tech', label: 'Công nghệ - Kỹ thuật', count: 12 },
    { id: 'project', label: 'Tiến độ Dự án', count: 8 },
    { id: 'internal', label: 'Văn hóa WATACO', count: 7 },
];

const newsFeed: NewsItem[] = [
    {
        id: 1,
        title: "Phân tích tác động của Quy hoạch điện VIII đến doanh nghiệp FDI",
        summary: "Cơ chế mua bán điện trực tiếp (DPPA) mở ra cơ hội lớn cho các doanh nghiệp sản xuất muốn sử dụng năng lượng sạch.",
        category: "Thị trường", categoryId: 'market',
        date: "10/05/2024", views: 1200,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c2f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Công nghệ Pin N-Type TOPCon: Xu hướng mới cho hiệu suất vượt trội",
        summary: "Tại sao công nghệ N-Type đang dần thay thế P-Type truyền thống? Bài viết chuyên sâu từ đội ngũ R&D của WATACO.",
        category: "Công nghệ", categoryId: 'tech',
        date: "08/05/2024", views: 980,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Lễ ký kết hợp tác chiến lược WATACO x Huawei Digital Power",
        summary: "Sự kiện đánh dấu bước ngoặt trong việc cung cấp các giải pháp biến tần và lưu trữ thông minh tại thị trường Việt Nam.",
        category: "Nội bộ", categoryId: 'internal',
        date: "05/05/2024", views: 2400,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Cập nhật tiến độ dự án KCN VSIP III - Bình Dương",
        summary: "Hoàn thành lắp đặt 80% khối lượng tấm pin, dự kiến đóng điện vào cuối quý 2/2024.",
        category: "Dự án", categoryId: 'project',
        date: "01/05/2024", views: 1850,
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        title: "Giải pháp O&M: Tối ưu hóa vận hành hệ thống sau lắp đặt",
        summary: "Quy trình bảo dưỡng tiêu chuẩn Nhật Bản giúp duy trì hiệu suất hệ thống trên 98% trong suốt vòng đời dự án.",
        category: "Công nghệ", categoryId: 'tech',
        date: "28/04/2024", views: 1100,
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=600"
    },
];

const trendingNews: TrendingNewsItem[] = [
    { id: 101, title: "Bảng giá lắp điện mặt trời áp mái 2024", date: "12/05" },
    { id: 102, title: "Giải pháp ESCO: Đầu tư 0 đồng", date: "10/05" },
    { id: 103, title: "Top 5 biến tần tốt nhất hiện nay", date: "08/05" },
];

// Expanded Expert Data for Slider
const expertArticles: ExpertArticle[] = [
    {
        id: 1,
        title: "Tối ưu hóa hiệu suất tấm pin trong điều kiện bức xạ thấp",
        desc: "Phân tích kỹ thuật chuyên sâu về tác động của bóng râm cục bộ và giải pháp từ công nghệ Half-cut cells kết hợp với Optimizers.",
        img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Hệ thống lưu trữ năng lượng (BESS) cho nhà máy công nghiệp",
        desc: "Đánh giá hiệu quả kinh tế kỹ thuật của việc tích hợp BESS để cắt giảm phụ tải đỉnh và đảm bảo an ninh năng lượng.",
        img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Tiêu chuẩn an toàn cháy nổ cho hệ thống điện mặt trời áp mái",
        desc: "Cập nhật các quy định mới nhất của PCCC và các biện pháp kỹ thuật bắt buộc để đảm bảo an toàn tuyệt đối cho nhà xưởng.",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Ứng dụng AI trong giám sát và vận hành hệ thống điện mặt trời",
        desc: "Sử dụng trí tuệ nhân tạo để dự báo sản lượng điện và phát hiện sớm các sự cố kỹ thuật tiềm ẩn.",
        img: "https://images.unsplash.com/photo-1555664424-778a69022365?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        title: "Tái chế tấm pin năng lượng mặt trời: Thách thức và giải pháp",
        desc: "Nghiên cứu về vòng đời của tấm pin và các phương pháp xử lý rác thải điện tử bền vững trong tương lai.",
        img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 6,
        title: "Mô hình Microgrid cho các khu công nghiệp biệt lập",
        desc: "Giải pháp lưới điện thông minh quy mô nhỏ giúp các khu công nghiệp tự chủ năng lượng và giảm phụ thuộc lưới điện quốc gia.",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600"
    }
]

// --- COMPONENTS ---

// 1. Hero Carousel Component
const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden bg-[#1A2B3C] text-white">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <img
                        src={heroSlides[current].image}
                        alt={heroSlides[current].title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 z-10">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        key={`text-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl"
                    >
                        <span className="bg-[#228B22] text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded-sm mb-4 inline-block">
                            Tin Nổi Bật
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-black font-heading leading-tight mb-4 hover:text-[#FFD700] transition-colors cursor-pointer">
                            <HighlightWataco text={heroSlides[current].title} />
                        </h2>
                        <p className="text-gray-300 text-lg line-clamp-2 mb-6 border-l-4 border-[#FFD700] pl-4">
                            {heroSlides[current].summary}
                        </p>
                        <div className="flex items-center text-sm text-gray-400 font-mono">
                            <Calendar size={14} className="mr-1" /> {heroSlides[current].date}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 right-8 lg:right-16 flex space-x-2 z-20">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${current === idx ? 'bg-[#FFD700] w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

// 2. News List Item
const NewsListItem: React.FC<NewsListItemProps> = ({ item }) => (
    <div className="group bg-white rounded-lg border border-gray-100 p-4 hover:shadow-lg hover:border-[#228B22] transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-pointer">
        {/* Thumbnail */}
        <div className="sm:w-1/3 lg:w-1/4 h-48 sm:h-auto rounded-md overflow-hidden relative shrink-0">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
            />
            <div className="absolute top-2 left-2 bg-[#1A2B3C]/90 text-white text-[9px] font-bold px-2 py-1 uppercase rounded-sm">
                {item.category}
            </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col justify-center">
            <div className="flex items-center text-xs text-gray-400 mb-2 font-mono">
                <Calendar size={12} className="mr-1" /> {item.date}
                <span className="mx-2">•</span>
                <Eye size={12} className="mr-1" /> {item.views}
            </div>
            <h3 className="text-xl font-bold text-[#1A2B3C] font-heading mb-3 group-hover:text-[#228B22] transition-colors leading-snug">
                <HighlightWataco text={item.title} />
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                {item.summary}
            </p>
            <div className="mt-auto flex items-center text-[#228B22] text-xs font-black uppercase tracking-wide group/link">
                Đọc tiếp <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
            </div>
        </div>
    </div>
);

// 3. Sidebar Widget
const SidebarWidget: React.FC<SidebarWidgetProps> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
        <h4 className="text-lg font-black text-[#1A2B3C] font-heading mb-6 flex items-center">
            <span className="w-1 h-6 bg-[#228B22] mr-3 rounded-full"></span>
            {title}
        </h4>
        {children}
    </div>
);


// --- MAIN PAGE ---
export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(5);

    // Expert Slider State
    const [expertIndex, setExpertIndex] = useState(0);

    const filteredNews = newsFeed.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const visibleNews = filteredNews.slice(0, visibleCount);

    // Remove unused nextExpert and prevExpert functions
    // const nextExpert = () => {
    //     setExpertIndex((prev) => (prev + 1) % (expertArticles.length - 2)); // Adjust for visible items
    // };
    // const prevExpert = () => {
    //     setExpertIndex((prev) => (prev - 1 + (expertArticles.length - 2)) % (expertArticles.length - 2));
    // };

    // Logic for visible window in slider (simple version)
    // We will simply translate the track.
    // Desktop: show 3. Mobile: show 1.
    // We'll rely on CSS constraints for mobile but let's implement a simple index-based translateX
    // To keep it simple in React without resize listeners, we'll use a responsive width assumption or just 1 card step on mobile.
    // Let's implement a simple "next goes to next card" logic.

    const handleExpertSlide = (dir: 'next' | 'prev') => {
        const maxIndex = expertArticles.length - 1;
        if (dir === 'next') {
            setExpertIndex(prev => prev >= maxIndex ? 0 : prev + 1);
        } else {
            setExpertIndex(prev => prev <= 0 ? maxIndex : prev - 1);
        }
    };

    return (
        <Layout>
            <div className="min-h-screen bg-[#F8FAFC]">
                <FontStyles />

                {/* --- HERO SLIDER --- */}
                <HeroCarousel />

                <div className="max-w-[1440px] mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* --- LEFT COLUMN: CONTENT (8 Cols) --- */}
                        <div className="lg:col-span-8">
                            {/* Filter Tabs */}
                            <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2 border-b border-gray-200">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-5 py-2.5 rounded-t-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${activeCategory === cat.id
                                            ? 'border-[#228B22] text-[#228B22] bg-white'
                                            : 'border-transparent text-gray-500 hover:text-[#1A2B3C]'
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* News List */}
                            <div className="space-y-6">
                                <AnimatePresence mode="popLayout">
                                    {visibleNews.length > 0 ? (
                                        visibleNews.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <NewsListItem item={item} />
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="text-center py-20 bg-white rounded-lg border border-gray-100 border-dashed">
                                            <p className="text-gray-400">Không tìm thấy bài viết nào.</p>
                                            <button onClick={() => { setSearchQuery(''); setActiveCategory('all') }} className="text-[#228B22] font-bold mt-2 hover:underline">Xóa bộ lọc</button>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Load More */}
                            {filteredNews.length > visibleCount && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={() => setVisibleCount(prev => prev + 3)}
                                        className="bg-white border border-[#1A2B3C] text-[#1A2B3C] px-8 py-3 rounded-md font-bold uppercase tracking-widest hover:bg-[#1A2B3C] hover:text-white transition-all shadow-sm active:scale-95"
                                    >
                                        Xem thêm tin cũ
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* --- RIGHT COLUMN: SIDEBAR (4 Cols) --- */}
                        <div className="lg:col-span-4 space-y-8">

                            {/* Search Widget */}
                            <div className="bg-white p-1 rounded-md border border-gray-200 shadow-sm flex items-center">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="w-full pl-4 pr-2 py-2 bg-transparent text-sm focus:outline-none text-[#1A2B3C]"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="p-2 bg-[#228B22] text-white rounded-md hover:bg-[#1A2B3C] transition-colors">
                                    <Search size={18} />
                                </button>
                            </div>

                            {/* Trending Widget */}
                            <SidebarWidget title="Đọc Nhiều Nhất">
                                <ul className="space-y-4">
                                    {trendingNews.map((item, idx) => (
                                        <li key={item.id} className="group cursor-pointer flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <span className="text-3xl font-black text-gray-200 group-hover:text-[#228B22] transition-colors leading-none -mt-1">
                                                0{idx + 1}
                                            </span>
                                            <div>
                                                <h5 className="text-sm font-bold text-[#1A2B3C] group-hover:text-[#228B22] transition-colors line-clamp-2 mb-1">
                                                    {item.title}
                                                </h5>
                                                <span className="text-xs text-gray-400 flex items-center">
                                                    <Clock size={10} className="mr-1" /> {item.date}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </SidebarWidget>

                            {/* Tag Cloud */}
                            <SidebarWidget title="Từ Khóa Hot">
                                <div className="flex flex-wrap gap-2">
                                    {["Solar Farm", "Điện áp mái", "Biến tần", "Pin lưu trữ", "EPC", "ESCO", "Net Zero"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-[#228B22] hover:text-white transition-colors cursor-pointer border border-gray-200">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </SidebarWidget>

                            {/* NOTE: Contact Card Removed as requested */}

                        </div>
                    </div>
                </div>

                {/* --- EXPERT CORNER SLIDER (Updated) --- */}
                <section className="py-20 bg-[#F3F4F6] text-[#1A2B3C] relative overflow-hidden border-t border-gray-200">
                    <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <span className="text-[#228B22] text-xs font-black uppercase tracking-[0.3em] block mb-2">Kiến Thức Chuyên Sâu</span>
                                <h2 className="text-3xl lg:text-4xl font-black font-heading text-[#1A2B3C]">GÓC CHUYÊN GIA</h2>
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex gap-2">
                                <button onClick={() => handleExpertSlide('prev')} className="p-3 rounded-full border border-gray-300 hover:bg-[#1A2B3C] hover:text-white hover:border-[#1A2B3C] transition-colors">
                                    <ChevronLeft size={20} />
                                </button>
                                <button onClick={() => handleExpertSlide('next')} className="p-3 rounded-full border border-gray-300 hover:bg-[#1A2B3C] hover:text-white hover:border-[#1A2B3C] transition-colors">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Slider Track */}
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-8"
                                animate={{ x: `-${expertIndex * 100}%` }} // Simplified sliding: move by 100% of container width logic adjusted below
                            // Actually for a proper 3-item view on desktop, we need percentage shifts.
                            // Let's assume on desktop we shift by 33.33% per index, on mobile 100%.
                            // Since we can't easily detect media query in this simplified framer block without hooks, 
                            // let's use a simpler "one by one" slide but display multiple.
                            // Better approach for responsive slider without resize listeners:
                            // Just slide by fixed pixel amounts or use CSS scroll snap, but Framer motion 'animate' expects values.
                            // For this POC, let's treat `expertIndex` as the STARTING item index.
                            >
                                {/* We map a larger array to allow sliding */}
                                <div className="flex gap-8 w-full transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${expertIndex * (100 / 1)}%)` }} // Default Mobile (1 item)
                                >
                                    {/* Note: In a real responsive framer slider, we'd use `useMedia` or CSS Scroll Snap. 
                                Here, to keep it simple and working:
                                I will use a CSS Grid with overflow-x-auto (Scroll Snap) combined with the buttons scrolling the ref.
                                This is much more robust for responsive than calculating pixels in JS.
                            */}
                                </div>
                            </motion.div>

                            {/* ROBUST CSS SCROLL SNAP IMPLEMENTATION */}
                            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
                                ref={(el) => {
                                    if (el) {
                                        // Simple Imperative scroll based on index
                                        const itemWidth = el.offsetWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
                                        el.scrollLeft = expertIndex * itemWidth;
                                    }
                                }}
                            >
                                {expertArticles.map((article) => (
                                    <div key={article.id} className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start">
                                        <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-transparent hover:border-[#228B22] flex flex-col h-full">
                                            <div className="h-60 overflow-hidden relative">
                                                <img
                                                    src={article.img}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="absolute top-4 right-4 bg-[#1A2B3C] text-[#FFD700] text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#FFD700]/20">
                                                    Tech Insight
                                                </div>
                                            </div>
                                            <div className="p-8 flex flex-col flex-grow">
                                                <h4 className="text-xl font-bold text-[#1A2B3C] leading-snug mb-4 group-hover:text-[#228B22] transition-colors line-clamp-2">
                                                    {article.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed flex-grow">
                                                    {article.desc}
                                                </p>
                                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-[#228B22] text-xs font-black uppercase tracking-wider group/link">
                                                    Đọc nghiên cứu <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}