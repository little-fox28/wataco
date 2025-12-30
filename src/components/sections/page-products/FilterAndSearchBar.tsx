import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Search, Sun, Cpu, Battery } from 'lucide-react';

interface FilterAndSearchBarProps {
    t: any; // Translation object
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const FilterAndSearchBar: React.FC<FilterAndSearchBarProps> = ({
    t,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
}) => {
    // Derived Data
    const categories = [
        { id: 'all', label: t.filters.all, icon: null },
        { id: 'panels', label: t.filters.panels, icon: Sun },
        { id: 'inverter', label: t.filters.inverter, icon: Cpu },
        { id: 'storage', label: t.filters.storage, icon: Battery },
    ];

    return (
        <section className="sticky top-[64px] lg:top-[80px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    {/* Categories */}
                    <div className="w-full lg:w-auto overflow-x-auto no-scrollbar">
                        <LayoutGroup>
                            <div className="flex space-x-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center z-10 ${activeCategory === cat.id
                                            ? 'text-white'
                                            : 'text-gray-500 hover:text-[#1A2B3C]'
                                            }`}
                                    >
                                        {activeCategory === cat.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-[#1A2B3C] rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        {cat.icon && <cat.icon size={14} className="mr-2" />}
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </LayoutGroup>
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-[300px]">
                        <input
                            type="text"
                            placeholder={t.ui.searchPlaceholder}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#228B22] text-sm text-[#1A2B3C] transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterAndSearchBar;
