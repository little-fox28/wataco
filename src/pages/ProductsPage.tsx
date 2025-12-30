/*
 * WATACO ENGINEERING WEBSITE - PRODUCTS PAGE
 * Version: Products-v.2
 * Date: 2024
 * Description: 
 * - Enhanced Tab Switching Animation:
 * + Implemented "Sliding Pill" background for active tab state using `layoutId`.
 * + Switched content transition to `mode="wait"` with a clean "Fade Up" effect for distinct category separation.
 * + Added Staggered entrance animation for product cards.
 * - Retained Tiered Layout for "All" view.
 */

import { useState } from 'react';

import { rawProducts } from '../data/productData';

import { useTranslation } from '../hooks/useTranslation';

import Layout from '../components/layout/Layout';

import HeroBanner from '../components/sections/page-products/HeroBanner';

import FilterAndSearchBar from '../components/sections/page-products/FilterAndSearchBar';

import ProductDisplayGrid from '../components/sections/page-products/ProductDisplayGrid';

import CallToAction from '../components/sections/page-products/CallToAction';



interface Product {

    id: number;

    category: string;

    brand: string;

    model: string;

    power: string;

    efficiency: string;

    warranty: string;

    image: string;

    tag: string;

}



export default function ProductsPage() {

    const [activeCategory, setActiveCategory] = useState('all');

    const [searchQuery, setSearchQuery] = useState('');



    const { t } = useTranslation();



    // Filtering Logic

    const getFilteredProducts = (category?: string | null): Product[] => {

        return rawProducts.filter((product: Product) => {

            const categoryMatch = category ? product.category === category : true;

            const searchMatch = product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||

                product.brand.toLowerCase().includes(searchQuery.toLowerCase());

            return categoryMatch && searchMatch;

        });

    };



    // Pre-calculate lists to avoid function calls in render

    const filteredPanels = getFilteredProducts('panels');

    const filteredInverters = getFilteredProducts('inverter');

    const filteredStorage = getFilteredProducts('storage');

    const filteredSpecific = getFilteredProducts(activeCategory);



    return (

        <Layout>

            <HeroBanner t={t} />

            <FilterAndSearchBar

                t={t}

                activeCategory={activeCategory}

                setActiveCategory={setActiveCategory}

                searchQuery={searchQuery}

                setSearchQuery={setSearchQuery}

            />

            <ProductDisplayGrid

                t={t}

                activeCategory={activeCategory}

                filteredPanels={filteredPanels}

                filteredInverters={filteredInverters}

                filteredStorage={filteredStorage}

                filteredSpecific={filteredSpecific}

                getFilteredProducts={getFilteredProducts}

                setSearchQuery={setSearchQuery}

            />

            <CallToAction t={t} />

        </Layout>

    );

}