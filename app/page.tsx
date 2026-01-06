import HeroSlider from './components/HeroSlider';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen">
      <HeroSlider />

      {/* Introduction Section */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--color-cocoa)] element-animate" style={{ animationDelay: '0.2s' }}>
            Artisan Confectionery
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to SweetDreams, where every bite is a journey of flavor.
            We blend tradition with innovation to create handcrafted chocolates,
            luxurious cakes, and delicate pastries that delight the senses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Premium Ingredients", icon: "🍫", desc: "Sourced from the finest cocoa farms." },
              { title: "Handcrafted", icon: "👐", desc: "Made with love and precision daily." },
              { title: "Eco-Friendly", icon: "🌱", desc: "Sustainable packaging and practices." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/50 rounded-xl hover:bg-white transition-colors duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[var(--color-berry)] font-bold tracking-wider uppercase text-sm">Best Sellers</span>
              <h2 className="text-4xl font-serif mt-2 text-[var(--color-cocoa)]">Featured Delights</h2>
            </div>
            <Link href="/products" className="hidden md:inline-block border-b-2 border-[var(--color-cocoa)] pb-1 font-bold hover:text-[var(--color-berry)] hover:border-[var(--color-berry)] transition-all">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax / Special Offer */}
      <section className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&q=80&w=1920")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-[var(--color-gold)] text-xl font-bold tracking-widest uppercase mb-4 block">Limited Time Offer</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-6">The Royal collection</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">Experience the distinct flavors of our limited edition seasonal box.</p>
          <Link href="/products" className="bg-[var(--color-gold)] text-[var(--color-cocoa)] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
