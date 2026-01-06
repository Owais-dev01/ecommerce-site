import { Product } from '../data/products';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card group cursor-pointer h-full flex flex-col">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/90 text-[var(--color-berry)] px-8 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-white hover:scale-105 shadow-lg">
                        View Details
                    </button>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div className="text-xs font-bold text-[var(--color-caramel)] uppercase tracking-wider bg-[var(--color-mint)] px-2 py-1 rounded-md">
                        {product.category}
                    </div>
                    <div className="text-[var(--color-gold)]">★★★★★</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[var(--color-cocoa)] mb-2 group-hover:text-[var(--color-berry)] transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow font-light">
                    {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-2xl font-serif font-bold text-[var(--color-cocoa)]">
                        ${product.price.toFixed(2)}
                    </span>
                    <button className="text-white bg-[var(--color-cocoa)] hover:bg-[var(--color-berry)] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md flex items-center gap-2">
                        <span>Add to Cart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
