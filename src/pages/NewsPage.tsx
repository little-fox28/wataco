import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight, Calendar,
    ChevronLeft,
    ChevronRight,
    Clock, Eye,
    Search
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import type { Category, ExpertArticle, HeroSlide, HighlightWatacoProps, NewsItem, NewsListItemProps, SidebarWidgetProps, TrendingNewsItem } from '../types';

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

// --- DATA FROM WATACO WORDPRESS EXPORT ---
const heroSlides: HeroSlide[] = [
    {
        id: 2530,
        title: "Wataco hợp tác cùng Tập đoàn TH triển khai hệ thống điện mặt trời: Đẩy mạnh sản xuất nông nghiệp bền vững",
        summary: "Wataco cùng Quỹ TMG ký kết hợp tác với Tập đoàn TH triển khai hệ thống điện mặt trời áp mái 1,188 MWp tại Nhà máy sữa TH Dalat Milk, giảm 1.500 tấn CO₂ mỗi năm.",
        image: "https://wataco.net/wp-content/uploads/2025/07/Buoi-le-ky-ket-hop-dong-du-an-dien-nang-luong-mat-troi-ap-mai-tai-Nha-may-sua-TH-Da-Lat-Milk-1-scaled.jpg",
        date: "22/07/2025"
    },
    {
        id: 2452,
        title: "Ryobi DS hợp tác cùng Wataco - Bước tiến lớn trong ngành năng lượng tái tạo",
        summary: "Ngày 23/10/2024, Ryobi DS Việt Nam ký kết hợp đồng EPC với Wataco triển khai dự án điện mặt trời áp mái tại Khu Công nghệ cao TP.HCM, giảm khoảng 732,69t CO₂/năm.",
        image: "https://wataco.net/wp-content/uploads/2024/11/wataco-2.jpg",
        date: "27/11/2024"
    },
    {
        id: 2433,
        title: "Wataco cùng Sato-Sangyo Việt Nam khởi động Dự án Điện mặt trời áp mái Giai đoạn 1",
        summary: "Wataco chính thức ký kết hợp đồng EPC và khởi công Dự án điện mặt trời áp mái Giai đoạn 1 tại KCN Mỹ Phước 3, Bình Dương cùng Công ty TNHH Sato-Sangyo Việt Nam.",
        image: "https://wataco.net/wp-content/uploads/2024/11/saoto-2.jpg",
        date: "25/11/2024"
    }
];

const newsFeed: NewsItem[] = [
    {
        id: 2530,
        title: "Wataco hợp tác cùng Tập đoàn TH triển khai hệ thống điện mặt trời: Đẩy mạnh sản xuất nông nghiệp bền vững",
        summary: "Wataco cùng Quỹ TMG ký kết hợp tác với Tập đoàn TH triển khai hệ thống điện mặt trời áp mái 1,188 MWp tại Nhà máy sữa TH Dalat Milk, giảm 1.500 tấn CO₂ mỗi năm.",
        category: "Dự án", categoryId: 'project',
        date: "22/07/2025", views: 1850,
        image: "https://wataco.net/wp-content/uploads/2025/07/Buoi-le-ky-ket-hop-dong-du-an-dien-nang-luong-mat-troi-ap-mai-tai-Nha-may-sua-TH-Da-Lat-Milk-1-scaled.jpg"
    },
    {
        id: 2452,
        title: "Ryobi DS hợp tác cùng Wataco - Bước tiến lớn trong ngành năng lượng tái tạo",
        summary: "Ngày 23/10/2024, Công ty TNHH MTV Dịch Vụ Phân phối Ryobi (Việt Nam) chính thức ký kết hợp đồng EPC với Wataco để triển khai dự án điện mặt trời áp mái tại Khu Công nghệ cao TP.HCM.",
        category: "Dự án", categoryId: 'project',
        date: "27/11/2024", views: 2400,
        image: "https://wataco.net/wp-content/uploads/2024/11/wataco-2.jpg"
    },
    {
        id: 2444,
        title: "Wataco hợp tác triển khai Dự án Điện mặt trời áp mái cùng Ryobi DS",
        summary: "Lễ ký kết Hợp đồng EPC và Lễ khởi công diễn ra tại Lô HC, Đường D2, Khu Công nghệ cao TP.HCM. Hệ thống giúp giảm khoảng 732,69t CO₂/năm với cam kết chất lượng và tiến độ cao nhất.",
        category: "Dự án", categoryId: 'project',
        date: "27/11/2024", views: 1650,
        image: "https://wataco.net/wp-content/uploads/2024/11/wataco-1.jpg"
    },
    {
        id: 2433,
        title: "Wataco cùng Sato-Sangyo Việt Nam khởi động Dự án Điện mặt trời áp mái Giai đoạn 1",
        summary: "Ngày 16/10/2024, Công ty TNHH Sato-Sangyo Việt Nam và Wataco chính thức ký kết hợp đồng EPC và khởi công Dự án Điện mặt trời áp mái nhà Giai đoạn 1 tại KCN Mỹ Phước 3, Bình Dương.",
        category: "Dự án", categoryId: 'project',
        date: "25/11/2024", views: 1200,
        image: "https://wataco.net/wp-content/uploads/2024/11/saoto-2.jpg"
    },
    {
        id: 2418,
        title: "Công Ty TNHH Sato Sangyo và Wataco hợp tác thúc đẩy năng lượng xanh",
        summary: "Lễ ký hợp đồng EPC và Lễ khởi công Dự án Điện mặt trời áp mái Giai đoạn 1 giữa Sato-Sangyo Việt Nam và Wataco đánh dấu bước tiến quan trọng trong phát triển năng lượng tái tạo tại Việt Nam.",
        category: "Dự án", categoryId: 'project',
        date: "15/11/2024", views: 980,
        image: "https://wataco.net/wp-content/uploads/2024/11/photo-1-17313150555211317666927-1731493186639-1731493191962613993936.png"
    },
    {
        id: 2017,
        title: "Công ty TNHH sợi dệt Hương Sen Comfor hợp tác cùng Wataco",
        summary: "Dự án điện mặt trời áp mái công suất hơn 2.200 kWp do Wataco thi công tại nhà máy Hương Sen Comfor (Thái Bình), sử dụng công nghệ tiên tiến của Pháp và Nhật Bản, tổng vốn đầu tư khoảng 36 tỷ đồng.",
        category: "Dự án", categoryId: 'project',
        date: "08/05/2023", views: 1100,
        image: "https://wataco.net/wp-content/uploads/2023/05/752526c4a74f7811215e-1.jpg"
    },
    {
        id: 1950,
        title: "Tân Á Đại Thành hợp tác cùng Wataco",
        summary: "Tập đoàn Tân Á Đại Thành ký kết hợp đồng mua bán điện (PPA) với SkyX Solar, với sự tham dự của Wataco làm đơn vị tổng thầu xây dựng hệ thống nhà máy năng lượng sạch.",
        category: "Dự án", categoryId: 'project',
        date: "05/05/2023", views: 1350,
        image: "https://wataco.net/wp-content/uploads/2023/05/1-6870.jpg"
    },
];

const trendingNews: TrendingNewsItem[] = [
    { id: 2530, title: "Wataco hợp tác cùng Tập đoàn TH triển khai hệ thống điện mặt trời áp mái", date: "22/07" },
    { id: 2452, title: "Ryobi DS hợp tác cùng Wataco - Bước tiến lớn trong ngành năng lượng tái tạo", date: "27/11" },
    { id: 2433, title: "Wataco cùng Sato-Sangyo Việt Nam khởi động Dự án Điện mặt trời áp mái Giai đoạn 1", date: "25/11" },
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
const HeroCarousel = ({ heroBadge }: { heroBadge: string }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-100 lg:h-150 overflow-hidden bg-[#1A2B3C] text-white">
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
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 z-10">
                <div className="max-w-360 mx-auto">
                    <motion.div
                        key={`text-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl"
                    >
                        <span className="bg-[#228B22] text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded-sm mb-4 inline-block">
                            {heroBadge}
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
const NewsListItem: React.FC<NewsListItemProps & { readMore: string }> = ({ item, readMore }) => (
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
        <div className="grow flex flex-col justify-center">
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
                {readMore} <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
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
    const { t } = useTranslation();
    const np = t.newsPage;

    const categories: Category[] = [
        { id: 'all', label: np.categoryAll, count: 7 },
        { id: 'project', label: np.categoryProject, count: 7 },
    ];

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

    const handleExpertSlide = (dir: 'next' | 'prev') => {
        const maxIndex = expertArticles.length - 1;
        if (dir === 'next') {
            setExpertIndex(prev => prev >= maxIndex ? 0 : prev + 1);
        } else {
            setExpertIndex(prev => prev <= 0 ? maxIndex : prev - 1);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <FontStyles />

            {/* --- HERO SLIDER --- */}
            <HeroCarousel heroBadge={np.heroBadge} />

            <div className="max-w-360 mx-auto px-6 py-16">
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
                                            <Link to={'/posts/wataco-hop-tac-cung-tap-doan-th-trien-khai-he-thong-dien-mat-troi-day-manh-san-xuat-nong-nghiep-ben-vung'}>
                                                <NewsListItem item={item} readMore={np.readMore} />
                                            </Link>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-lg border border-gray-100 border-dashed">
                                        <p className="text-gray-400">{np.noResults}</p>
                                        <button onClick={() => { setSearchQuery(''); setActiveCategory('all') }} className="text-[#228B22] font-bold mt-2 hover:underline">{np.clearFilter}</button>
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
                                    {np.loadMore}
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
                                placeholder={np.searchPlaceholder}
                                className="w-full pl-4 pr-2 py-2 bg-transparent text-sm focus:outline-none text-[#1A2B3C]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="p-2 bg-[#228B22] text-white rounded-md hover:bg-[#1A2B3C] transition-colors">
                                <Search size={18} />
                            </button>
                        </div>

                        {/* Trending Widget */}
                        <SidebarWidget title={np.trendingTitle}>
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
                        <SidebarWidget title={np.tagsTitle}>
                            <div className="flex flex-wrap gap-2">
                                {np.tags.map((tag, i) => (
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
                <div className="max-w-360 mx-auto px-6 relative z-10">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <span className="text-[#228B22] text-xs font-black uppercase tracking-[0.3em] block mb-2">{np.expertSubtitle}</span>
                            <h2 className="text-3xl lg:text-4xl font-black font-heading text-[#1A2B3C]">{np.expertTitle}</h2>
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
                            animate={{ x: `-${expertIndex * 100}%` }}
                        >
                            {/* We map a larger array to allow sliding */}
                            <div className="flex gap-8 w-full transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${expertIndex * (100 / 1)}%)` }}
                            >
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
                                <div key={article.id} className="min-w-full mb-1 md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start">
                                    <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-transparent hover:border-[#228B22] flex flex-col h-full">
                                        <div className="h-60 overflow-hidden relative">
                                            <img
                                                src={article.img}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="absolute top-4 right-4 bg-[#1A2B3C] text-[#FFD700] text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#FFD700]/20">
                                                Tech Insight
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col grow">
                                            <h4 className="text-xl font-bold text-[#1A2B3C] leading-snug mb-4 group-hover:text-[#228B22] transition-colors line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed grow">
                                                {article.desc}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-[#228B22] text-xs font-black uppercase tracking-wider group/link">
                                                {np.readResearch} <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
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
    );
}