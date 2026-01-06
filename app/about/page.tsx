export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[var(--color-cocoa)] overflow-hidden">
                <div className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1920")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-serif mb-4">Our Story</h1>
                    <p className="text-xl md:text-2xl text-[var(--color-gold)]">Tradition meets Innovation</p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="section-padding container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[var(--color-berry)] font-bold tracking-wider uppercase mb-2 block">Since 1985</span>
                        <h2 className="text-4xl font-serif mb-6 text-[var(--color-cocoa)]">A Passion for Sweetness</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            SweetDreams began as a small family kitchen in the heart of Paris. Our founder, Marie, believed that a dessert is not just food—it's an emotion.
                            With recipes passed down through generations and a touch of modern flair, we have grown into a sanctuary for sweet lovers.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Every chocolate, every cake, and every pastry is crafted with the utmost care, using only sustainable, high-quality ingredients sourced from around the globe.
                        </p>
                    </div>
                    <div className="relative h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1556910638-6b4545c7d5c5?auto=format&fit=crop&q=80&w=800"
                            alt="Baker working"
                            className="w-full h-full object-cover rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-[var(--color-cream)] section-padding">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-serif mb-12 text-[var(--color-cocoa)]">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Quality First</h3>
                            <p>We never compromise on ingredients. Only the finest Belgian chocolate, Madagascar vanilla, and fresh local fruits make the cut.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Artistry</h3>
                            <p>We treat every confection as a piece of art. The visual appeal is just as important as the taste.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Sustainability</h3>
                            <p>We are committed to eco-friendly packaging and ethical sourcing practices to support our planet and farmers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
