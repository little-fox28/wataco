import React from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Mail } from 'lucide-react';

// Container variants for staggered animation
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: { opacity: 0 }
};

export const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4 }
    }
};

interface ProductCardProps {
    product: {
        id: number;
        category: string;
        brand: string;
        model: string;
        power: string;
        efficiency: string;
        warranty: string;
        image: string;
        tag: string;
    };
    t: any; // Translation object
}

const ProductCard: React.FC<ProductCardProps> = ({ product, t }) => (
    <motion.div
        variants={cardVariants}
        className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#228B22] transition-all duration-300 group flex flex-col h-full"
    >
        {/* Image Area */}
        <div className="relative h-60 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.tag && (
                    <span className="bg-[#FFD700] text-[#1A2B3C] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                        {product.tag}
                    </span>
                )}
                <span className="bg-[#1A2B3C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                    {product.brand}
                </span>
            </div>
            <img
                src={product.image}
                alt={product.model}
                className="h-full w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
            />
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-[#1A2B3C]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="bg-white text-[#228B22] hover:bg-[#228B22] hover:text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg transition-colors flex items-center transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Search size={14} className="mr-2" /> {t.ui.viewFast}
                </button>
            </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow border-t border-gray-100">
            <h3 className="text-lg font-bold text-[#1A2B3C] font-heading mb-3 line-clamp-1" title={product.model}>{product.model}</h3>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 bg-[#F8FAFC] rounded-md mb-4 px-2">
                <div className="text-center border-r border-gray-200 last:border-0">
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">{t.ui.specPower}</div>
                    <div className="text-xs font-bold text-[#228B22] font-tech">{product.power}</div>
                </div>
                <div className="text-center border-r border-gray-200 last:border-0">
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">{t.ui.specEff}</div>
                    <div className="text-xs font-bold text-[#228B22] font-tech">{product.efficiency}</div>
                </div>
                <div className="text-center">
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-1">{t.ui.specWarranty}</div>
                    <div className="text-xs font-bold text-[#228B22] font-tech">{product.warranty}</div>
                </div>
            </div>

            <div className="mt-auto flex gap-3">
                <button className="flex-1 bg-[#228B22] hover:bg-[#1A2B3C] text-white py-3 rounded-md text-[11px] font-black uppercase tracking-wider transition-colors shadow-md flex items-center justify-center group/btn">
                    <Mail size={14} className="mr-2 group-hover/btn:animate-bounce" />
                    {t.ui.quoteBtn}
                </button>
                <button className="flex-none w-10 bg-gray-100 hover:bg-[#FFD700] text-[#1A2B3C] rounded-md flex items-center justify-center transition-colors border border-gray-200">
                    <Download size={16} />
                </button>
            </div>
        </div>
    </motion.div>
);

export default ProductCard;
