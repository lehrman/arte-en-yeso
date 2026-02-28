'use client';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { products as staticProducts } from '@/data/data';

export default function FeaturedProducts({ gridClassName }) {
    const [featured, setFeatured] = useState(staticProducts.slice(0, 4));

    useEffect(() => {
        const customItems = JSON.parse(localStorage.getItem('abu_custom_products') || '[]');
        const allProducts = [...staticProducts, ...customItems];
        setFeatured(allProducts.slice(0, 6));
    }, []);

    return (
        <div className={gridClassName}>
            {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
