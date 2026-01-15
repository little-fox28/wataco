import { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, MapPin, Briefcase, Clock, ArrowRight,
    Users, Zap, TrendingUp, Heart
} from 'lucide-react';
import Layout from '../components/layout/Layout';

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
    }
    
    .font-heading { font-family: var(--font-heading); letter-spacing: -0.01em; }
    .font-tech { font-family: var(--font-tech); letter-spacing: -0.03em; }
    
    .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.3); }

    /* Custom Scrollbar */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>
);

// --- ANIMATION COMPONENTS ---
const FadeInUp = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
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

// --- MOCK DATA ---

const benefits = [
    { icon: Zap, title: "Công Nghệ Tiên Tiến", desc: "Làm việc với các công nghệ năng lượng hàng đầu thế giới từ Nhật Bản." },
    { icon: TrendingUp, title: "Lộ Trình Thăng Tiến", desc: "Đánh giá năng lực định kỳ 6 tháng/lần với cơ hội lên quản lý." },
    { icon: Users, title: "Văn Hóa Cởi Mở", desc: "Môi trường làm việc tôn trọng sự khác biệt và khuyến khích sáng tạo." },
    { icon: Heart, title: "Phúc Lợi Toàn Diện", desc: "Bảo hiểm sức khỏe cao cấp, du lịch hàng năm và thưởng dự án." }
];

const jobCategories = ["Tất cả", "Kỹ thuật", "Kinh doanh", "Vận hành", "Văn phòng"];

const jobsList = [
    {
        id: 1,
        title: "Kỹ Sư Thiết Kế Điện Mặt Trời (Solar Design Engineer)",
        department: "Kỹ thuật",
        location: "TP. Hồ Chí Minh",
        type: "Toàn thời gian",
        salary: "Thỏa thuận",
        deadline: "30/06/2024",
        urgent: true
    },
    {
        id: 2,
        title: "Trưởng Nhóm Kinh Doanh B2B (Sales Team Leader)",
        department: "Kinh doanh",
        location: "Bình Dương",
        type: "Toàn thời gian",
        salary: "20 - 30 Triệu + HH",
        deadline: "15/06/2024",
        urgent: true
    },
    {
        id: 3,
        title: "Chuyên Viên Giám Sát An Toàn (HSE Supervisor)",
        department: "Vận hành",
        location: "Các tỉnh miền Nam",
        type: "Toàn thời gian",
        salary: "Thỏa thuận",
        deadline: "30/06/2024",
        urgent: false
    },
    {
        id: 4,
        title: "Kế Toán Tổng Hợp",
        department: "Văn phòng",
        location: "TP. Hồ Chí Minh",
        type: "Toàn thời gian",
        salary: "15 - 18 Triệu",
        deadline: "20/06/2024",
        urgent: false
    },
    {
        id: 5,
        title: "Thực Tập Sinh Kỹ Thuật Điện",
        department: "Kỹ thuật",
        location: "TP. Hồ Chí Minh",
        type: "Bán thời gian / Thực tập",
        salary: "Hỗ trợ lương",
        deadline: "Liên tục tuyển",
        urgent: false
    }
];

const hiringProcess = [
    { step: "01", title: "Nộp Hồ Sơ", desc: "Gửi CV qua email hoặc form đăng ký." },
    { step: "02", title: "Sơ Vấn", desc: "Trao đổi qua điện thoại với HR." },
    { step: "03", title: "Phỏng Vấn", desc: "Gặp gỡ trực tiếp quản lý chuyên môn." },
    { step: "04", title: "Tiếp Nhận", desc: "Nhận Offer và bắt đầu hành trình." }
];

// Fixed: Using forwardRef for AnimatePresence compatibility
interface JobCardProps {
    job: {
        id: number;
        title: string;
        department: string;
        location: string;
        type: string;
        salary: string;
        deadline: string;
        urgent: boolean;
    };
}

const JobCard = forwardRef<HTMLDivElement, JobCardProps>(({ job }, ref) => (
    <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-lg border border-gray-100 hover:border-[#228B22] hover:shadow-lg transition-all duration-300 group relative"
    >
        {job.urgent && (
            <span className="absolute top-4 right-4 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-red-100 animate-pulse">
                Gấp
            </span>
        )}
        <div className="mb-4">
            <span className="text-[#228B22] text-xs font-bold uppercase tracking-widest mb-2 block">{job.department}</span>
            <h3 className="text-lg font-bold text-[#1A2B3C] font-heading group-hover:text-[#228B22] transition-colors">{job.title}</h3>
        </div>

        <div className="space-y-2 mb-6">
            <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={16} className="mr-2 text-gray-400" /> {job.location}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
                <Briefcase size={16} className="mr-2 text-gray-400" /> {job.type}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-2 text-gray-400" /> Hạn nộp: {job.deadline}
            </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <span className="text-sm font-bold text-[#1A2B3C] font-mono">{job.salary}</span>
            <button className="text-xs font-black uppercase tracking-widest text-[#228B22] flex items-center group/btn">
                Ứng tuyển <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    </motion.div>
));

// --- MAIN PAGE ---
export default function CareersPage() {
    const [activeCategory, setActiveCategory] = useState("Tất cả");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter Logic
    const filteredJobs = jobsList.filter(job => {
        const matchCat = activeCategory === "Tất cả" || job.department === activeCategory;
        const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <Layout>
            <div className="bg-[#F8FAFC] min-h-screen text-[#1A2B3C]">
                <FontStyles />
                {/* --- HERO SECTION --- */}
                <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-[#1A2B3C]">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                            className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale"
                            alt="Team working"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C] via-transparent to-transparent"></div>
                    </div>

                    <div className="relative z-10 text-center px-6 max-w-4xl">
                        <FadeInUp>
                            <h3 className="text-[#FFD700] font-black text-xs lg:text-sm uppercase tracking-[0.5em] mb-4 font-heading">
                                Gia Nhập WATACO
                            </h3>
                            <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight font-heading mb-6 tracking-tight">
                                KIẾN TẠO TƯƠNG LAI<br />NĂNG LƯỢNG XANH
                            </h1>
                            <p className="text-gray-300 text-base lg:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                                Chúng tôi tìm kiếm những cộng sự đam mê, nhiệt huyết để cùng nhau xây dựng nền tảng năng lượng bền vững cho Việt Nam.
                            </p>
                            <button className="bg-[#228B22] text-white px-8 py-4 rounded-md font-black uppercase tracking-widest hover:bg-white hover:text-[#1A2B3C] transition-all shadow-xl">
                                Xem các vị trí đang mở
                            </button>
                        </FadeInUp>
                    </div>
                </section>

                {/* --- CULTURE & BENEFITS --- */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1440px] mx-auto px-6">
                        <FadeInUp className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-black text-[#1A2B3C] font-heading mb-4">Tại Sao Chọn WATACO?</h2>
                            <p className="text-gray-500">Môi trường làm việc chuyên nghiệp chuẩn Nhật Bản với chế độ đãi ngộ hàng đầu.</p>
                        </FadeInUp>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((item, idx) => (
                                <FadeInUp key={idx} delay={idx * 0.1} className="p-6 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:border-[#228B22] hover:shadow-lg transition-all text-center group cursor-default">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.icon size={28} className="text-[#228B22]" />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#1A2B3C] mb-3">{item.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </FadeInUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- HIRING PROCESS --- */}
                <section className="py-20 bg-[#1A2B3C] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#228B22_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                    <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-black font-heading">Quy Trình Tuyển Dụng</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connection Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

                            {hiringProcess.map((step, idx) => (
                                <FadeInUp key={idx} delay={idx * 0.2} className="relative text-center">
                                    <div className="w-16 h-16 bg-[#1A2B3C] border-2 border-[#228B22] text-[#228B22] rounded-full flex items-center justify-center text-xl font-black font-heading mx-auto mb-6 shadow-[0_0_15px_rgba(34,139,34,0.3)]">
                                        {step.step}
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-400">{step.desc}</p>
                                </FadeInUp>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- JOB BOARD --- */}
                <section id="jobs" className="py-20 bg-[#F8FAFC]">
                    <div className="max-w-[1440px] mx-auto px-6">

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl font-black text-[#1A2B3C] font-heading mb-2">Vị Trí Đang Tuyển</h2>
                                <p className="text-gray-500 text-sm">Hãy tìm kiếm cơ hội phù hợp với bạn.</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                {/* Search */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm công việc..."
                                        className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#228B22] w-full sm:w-64 text-sm"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>

                                {/* Filter Button (Visual only for now or simple toggle) */}
                                <div className="flex overflow-x-auto no-scrollbar gap-2">
                                    {jobCategories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap border transition-all ${activeCategory === cat
                                                ? 'bg-[#1A2B3C] text-white border-[#1A2B3C]'
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-[#228B22]'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {filteredJobs.length > 0 ? (
                                    filteredJobs.map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-16 bg-white rounded-lg border border-dashed border-gray-300">
                                        <p className="text-gray-500 mb-4">Không tìm thấy vị trí phù hợp.</p>
                                        <button onClick={() => { setActiveCategory("Tất cả"); setSearchQuery("") }} className="text-[#228B22] font-bold underline">Xem tất cả công việc</button>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mt-12 text-center p-8 bg-[#F0FDF4] rounded-xl border border-[#DCFCE7]">
                            <h4 className="font-bold text-[#1A2B3C] mb-2">Không tìm thấy vị trí phù hợp?</h4>
                            <p className="text-sm text-gray-600 mb-4">Gửi CV của bạn vào kho dữ liệu nhân tài của chúng tôi. Chúng tôi sẽ liên hệ khi có cơ hội.</p>
                            <a href="mailto:hr@wataco.com" className="inline-flex items-center text-[#228B22] font-black uppercase tracking-widest text-xs border-b-2 border-[#228B22] pb-1 hover:text-[#1A2B3C] hover:border-[#1A2B3C] transition-all">
                                Gửi CV ngay <ArrowRight size={14} className="ml-2" />
                            </a>
                        </div>

                    </div>
                </section>
            </div>
        </Layout>
    );
}