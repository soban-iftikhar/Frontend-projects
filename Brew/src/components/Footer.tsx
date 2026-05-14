import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-beige">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-5xl font-bold">Brew</h3>
          <p className="mt-3 text-beige/70 italic">Sip. Stay. Repeat.</p>
          <p className="mt-6 text-beige/60 text-sm leading-relaxed max-w-xs">
            Islamabad's coziest corner for coffee, conversation and good vibes.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4">Quick Links</h4>
          <ul className="space-y-2 text-beige/70">
            <li><Link to="/" className="hover:text-beige transition">Home</Link></li>
            <li><Link to="/menu" className="hover:text-beige transition">Menu</Link></li>
            <li><Link to="/about" className="hover:text-beige transition">About</Link></li>
            <li><Link to="/gallery" className="hover:text-beige transition">Gallery</Link></li>
            <li><Link to="/visit" className="hover:text-beige transition">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4">Find Us</h4>
          <p className="text-beige/70 text-sm leading-relaxed">
            Shop 5, Sector I-8 Markaz<br />Islamabad, Pakistan
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com/brew.isb" aria-label="Instagram" className="w-10 h-10 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-espresso transition">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/923111234567" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-espresso transition">
              <MessageCircle size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-espresso transition">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-beige/10">
        <p className="text-center text-beige/60 text-sm py-5">
          © 2025 Brew, Islamabad. Crafted by Soban Iftikhar.
        </p>
      </div>
    </footer>
  );
}
