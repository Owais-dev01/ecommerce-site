'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-6'}`}>
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold font-serif text-[var(--color-cocoa)] tracking-wider">
                    SweetDreams<span className="text-[var(--color-berry)]">.</span>
                </Link>

                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="font-semibold text-[var(--color-cocoa)] hover:text-[var(--color-berry)] transition-colors">Home</Link>
                    <Link href="/about" className="font-semibold text-[var(--color-cocoa)] hover:text-[var(--color-berry)] transition-colors">About</Link>
                    <Link href="/products" className="font-semibold text-[var(--color-cocoa)] hover:text-[var(--color-berry)] transition-colors">Products</Link>
                    <Link href="/contact" className="font-semibold text-[var(--color-cocoa)] hover:text-[var(--color-berry)] transition-colors">Contact</Link>
                </div>

                <button className="md:hidden text-[var(--color-cocoa)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
