'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
    {
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1920",
        title: "Indulge in Luxury",
        subtitle: "Handcrafted Chocolates & Cakes"
    },
    {
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1920",
        title: "Fresh from the Oven",
        subtitle: "Artisan Pastries Daily"
    },
    {
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=1920",
        title: "Sweet Moments",
        subtitle: "Celebrate with our Confections"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="h-full flex flex-col justify-center items-center text-center text-white px-4">
                        <h1 className={`text-6xl md:text-8xl font-serif mb-6 transform transition-all duration-1000 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {slide.title}
                        </h1>
                        <p className={`text-2xl md:text-3xl mb-10 font-light tracking-wide transform transition-all duration-1000 delay-200 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {slide.subtitle}
                        </p>
                        <Link
                            href="/products"
                            className={`btn-primary text-xl px-10 py-4 transform transition-all duration-1000 delay-400 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-[var(--color-gold)] w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}
