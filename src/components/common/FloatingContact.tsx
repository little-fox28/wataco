import { Phone } from "lucide-react";

const FloatingContact = () => (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Zalo Button */}
        <a
            href="https://zalo.me/0786788837"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#0068FF] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        >
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                Chat Zalo
                <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-l-4 border-l-gray-900 border-y-4 border-y-transparent"></span>
            </span>
            <span className="text-white font-black text-xs font-heading">Zalo</span>
        </a>

        {/* Phone Button */}
        <a
            href="tel:0786788837"
            className="w-14 h-14 rounded-full bg-[#EA580C] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        >
            <div className="absolute inset-0 rounded-full bg-[#EA580C] animate-ping opacity-20"></div>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                Hotline: 078.678.8837
                <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-l-4 border-l-gray-900 border-y-4 border-y-transparent"></span>
            </span>
            <Phone size={24} className="text-white fill-white" />
        </a>
    </div>
);

export default FloatingContact