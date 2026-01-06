'use client';
import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ["All", "Chocolates", "Cakes", "Pastries", "Candies", "Donuts"];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <main className="pt-24 min-h-screen bg-[var(--color-cream)]">
            <div className="container-custom section-padding">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-[var(--color-cocoa)] mb-6">Our Collection</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our wide range of handcrafted sweets, freshly baked cakes, and artisan chocolates.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-[var(--color-cocoa)] text-[var(--color-gold)] scale-105 shadow-lg'
                                    : 'bg-white text-[var(--color-cocoa)] hover:bg-[var(--color-secondary)] hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="animate-fade-in">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl text-[var(--color-cocoa)]">No products found in this category.</h3>
                    </div>
                )}
            </div>
        </main>
    );
}
