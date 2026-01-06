'use client';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <main className="pt-24 min-h-screen bg-[var(--color-cream)]">
            <div className="container-custom section-padding">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-[var(--color-cocoa)] mb-6">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have a question about our products or want to place a custom order? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <div className="bg-[var(--color-cocoa)] text-white p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-serif mb-8 text-[var(--color-gold)]">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <h3 className="font-bold mb-1">Our Store</h3>
                                    <p className="opacity-80">123 Sugar Lane<br />Candy City, CC 94043</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <h3 className="font-bold mb-1">Phone</h3>
                                    <p className="opacity-80">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl">✉️</span>
                                <div>
                                    <h3 className="font-bold mb-1">Email</h3>
                                    <p className="opacity-80">hello@sweetdreams.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-bold mb-4 text-[var(--color-gold)]">Opening Hours</h3>
                            <p className="opacity-80">Mon - Fri: 9:00 AM - 8:00 PM</p>
                            <p className="opacity-80">Sat - Sun: 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-12">
                        {submitted ? (
                            <div className="h-full flex flex-col justify-center items-center text-center">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-2xl font-bold text-[var(--color-cocoa)] mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-[var(--color-berry)] font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-[var(--color-cocoa)] mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-caramel)] focus:ring-2 focus:ring-[var(--color-caramel)] outline-none transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-[var(--color-cocoa)] mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-caramel)] focus:ring-2 focus:ring-[var(--color-caramel)] outline-none transition-all"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-[var(--color-cocoa)] mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-caramel)] focus:ring-2 focus:ring-[var(--color-caramel)] outline-none transition-all"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="How can we sweeten your day?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn-primary bg-[var(--color-cocoa)] text-[var(--color-gold)] hover:bg-white hover:text-[var(--color-cocoa)] border-[var(--color-cocoa)]"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
