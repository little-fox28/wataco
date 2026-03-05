import { useMemo } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const PPA_TRANSLATIONS = {
    VN: {
        investor: "QUỸ ĐẦU TƯ",
        client: "KHÁCH HÀNG",
        epc: "TỔNG THẦU EPC",
        payment: "Thanh toán tiền ĐMT\nsử dụng hàng tháng",
        funding: "Cấp vốn thực hiện và\nduy trì hệ thống ĐMT",
        process: [
            "Thiết kế, Cung cấp vật tư, Thi công lắp đặt",
            "Hoàn tất các thủ tục cần thiết",
            "Vận hành và Bảo dưỡng"
        ]
    },
    EN: {
        investor: "INVESTMENT\nFUND",
        client: "CLIENT",
        epc: "EPC CONTRACTOR",
        payment: "Monthly Solar Power\nUsage Payment",
        funding: "Funding for Solar System\nImplementation & Maintenance",
        process: [
            "Design, Procurement, & Construction Installation",
            "Completion of Necessary Procedures",
            "Operation and Maintenance (O&M)"
        ]
    },
    JP: {
        investor: "投資ファンド",
        client: "顧客",
        epc: "EPC元請け業者",
        payment: "月々の太陽光発電\n使用料支払い",
        funding: "太陽光発電システムの\n構築・維持資金調達",
        process: [
            "設計、調達、建設・設置",
            "必要な手続きの完了",
            "運転・保守 (O&M)"
        ]
    }
};


const PPAImage = () => {
    const { lang } = useLanguage()
    const t = useMemo(() => PPA_TRANSLATIONS[lang] || PPA_TRANSLATIONS.VN, [lang])

    return (
        <div className="relative w-[85%] max-w-225 mx-auto font-sans select-none">
            {/* Base Image */}
            <img src={"/wataco/ppa.png"} alt="PPA Model Base" className="w-full block rounded-2xl" />

            {/* Text Overlay */}
            <div className="absolute inset-0">

                {/* Investment Fund (Top) */}
                <div className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(8px,1.4vw,13px)] font-bold text-center">
                    {t.investor}
                </div>

                {/* Client (Bottom Left) */}
                <div className="absolute top-[66%] left-[34%] -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(8px,1.4vw,14px)] text-center">
                    <div className="font-bold">{t.client}</div>
                </div>

                {/* EPC Contractor (Bottom Right) */}
                <div className="absolute top-[66%] left-[66%] -translate-x-1/2 -translate-y-1/2 text-white text-[clamp(8px,1.4vw,14px)] text-center">
                    <div className="font-bold">{t.epc}</div>
                </div>

                {/* Payment Arrow Text (Left) */}
                <div className="absolute top-[30%] left-[7%] w-[20%] -rotate-60 text-center font-bold text-gray-800 text-[clamp(8px,1.4vw,11px)] leading-tight">
                    {t.payment}
                </div>

                {/* Funding Arrow Text (Right) */}
                <div className="absolute top-[30%] left-[73%] w-[20%] rotate-62 text-center font-bold text-gray-800 text-[clamp(8px,1.4vw,11px)] leading-tight">
                    {t.funding}
                </div>

                {/* Process (Bottom) */}
                <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] text-center font-bold text-gray-800 text-[clamp(8px,1.4vw,10px)] leading-relaxed">
                    {t.process.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PPAImage;