import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FontStyles from '../components/common/FontStyles';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
    VN: {
        notFound: {
            title: "KHÔNG TÌM THẤY TRANG",
            desc: "Trang bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc tạm thời không thể truy cập.",
            backBtn: "QUAY LẠI TRANG CHỦ"
        }
    },
    EN: {
        notFound: {
            title: "PAGE NOT FOUND",
            desc: "The page you are looking for does not exist, has been removed, or is temporarily unavailable.",
            backBtn: "BACK TO HOMEPAGE"
        }
    },
    JP: {
        notFound: {
            title: "ページが見つかりません",
            desc: "お探しのページは存在しないか、削除されたか、一時的に利用できません。",
            backBtn: "ホームに戻る"
        }
    }
};

const NotFoundPage = () => {
    const { lang } = useLanguage();
    const t = translations[lang].notFound;

    return (
        <div className="min-h-screen bg-[#1A2B3C] flex flex-col items-center justify-center relative px-6 text-center font-sans selection:bg-[#228B22] selection:text-white">
            <FontStyles />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center"
            >

                <h1 className="text-[100px] md:text-[150px] font-black font-tech text-white leading-none tracking-tighter mt-8 mb-2 drop-shadow-md select-none">
                    404
                </h1>

                <h2 className="text-xl md:text-2xl font-bold text-[#FFD700] font-heading uppercase tracking-widest mb-6">
                    {t.title}
                </h2>

                <p className="text-gray-400 text-sm md:text-base font-light max-w-md mx-auto mb-10 leading-relaxed">
                    {t.desc}
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-300 bg-white text-[#1A2B3C] hover:bg-[#228B22] hover:text-white shadow-lg group"
                >
                    <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
                    {t.backBtn}
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
