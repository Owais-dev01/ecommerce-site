export default function Footer() {
    return (
        <footer className="bg-[var(--color-cocoa)] text-[var(--color-gold)] py-12">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-serif mb-4">SweetDreams.</h3>
                    <p className="opacity-80">Crafting the finest confectionery for your sweet moments. Premium chocolates, cakes, and pastries.</p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="/products" className="hover:text-white transition-colors">Our Products</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
                    <p className="opacity-80">123 Sugar Lane, Candy City</p>
                    <p className="opacity-80">hello@sweetdreams.com</p>
                    <p className="opacity-80">+1 (555) 123-4567</p>
                </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-[rgba(255,255,255,0.1)] opacity-60">
                <p>&copy; {new Date().getFullYear()} SweetDreams Confectionery. All rights reserved.</p>
            </div>
        </footer>
    );
}
