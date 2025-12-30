import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../common/SectionHeader';
import ProductCard, { containerVariants } from '../../common/ProductCard';
import { Sun, Cpu, Battery } from 'lucide-react';

interface ProductDisplayGridProps {
    t: any; // Translation object
    activeCategory: string;
    filteredPanels: any[]; // Array of product objects
    filteredInverters: any[]; // Array of product objects
    filteredStorage: any[]; // Array of product objects
    filteredSpecific: any[]; // Array of product objects
    getFilteredProducts: (category?: string | null) => any[]; // Function to get all filtered products
    setSearchQuery: (query: string) => void;
}

const ProductDisplayGrid: React.FC<ProductDisplayGridProps> = ({
    t,
    activeCategory,
    filteredPanels,
    filteredInverters,
    filteredStorage,
    filteredSpecific,
    getFilteredProducts,
    setSearchQuery,
}) => {
    return (
        <section className="py-12 lg:py-20 min-h-[600px]">
            <div className="max-w-[1440px] mx-auto px-6">
                <AnimatePresence mode="wait">
                    {/* CASE 1: "ALL" SELECTED -> SHOW TIERS */}
                    {activeCategory === 'all' ? (
                        <motion.div
                            key="all-categories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* 1. PANELS TIER */}
                            {filteredPanels.length > 0 && (
                                <div className="mb-16">
                                    <SectionHeader title={t.filters.panels} icon={Sun} color="#F59E0B" />
                                    <motion.div
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        {filteredPanels.map(p => <ProductCard key={p.id} product={p} t={t} />)}
                                    </motion.div>
                                </div>
                            )}

                            {/* 2. INVERTERS TIER */}
                            {filteredInverters.length > 0 && (
                                <div className="mb-16">
                                    <SectionHeader title={t.filters.inverter} icon={Cpu} color="#228B22" />
                                    <motion.div
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        {filteredInverters.map(p => <ProductCard key={p.id} product={p} t={t} />)}
                                    </motion.div>
                                </div>
                            )}

                            {/* 3. STORAGE TIER */}
                            {filteredStorage.length > 0 && (
                                <div className="mb-16">
                                    <SectionHeader title={t.filters.storage} icon={Battery} color="#3B82F6" />
                                    <motion.div
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        {filteredStorage.map(p => <ProductCard key={p.id} product={p} t={t} />)}
                                    </motion.div>
                                </div>
                            )}

                            {/* EMPTY STATE FOR ALL */}
                            {getFilteredProducts().length === 0 && (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-gray-400">{t.ui.noResult}</p>
                                    <button onClick={() => setSearchQuery('')} className="text-[#228B22] mt-2 underline">{t.ui.resetFilter}</button>
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        /* CASE 2: SPECIFIC CATEGORY SELECTED -> SHOW SINGLE GRID */
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {filteredSpecific.length > 0 ? (
                                filteredSpecific.map((product) => (
                                    <ProductCard key={product.id} product={product} t={t} />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-gray-400">{t.ui.noResult}</p>
                                    <button onClick={() => setSearchQuery('')} className="text-[#228B22] mt-2 underline">{t.ui.resetFilter}</button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProductDisplayGrid;
