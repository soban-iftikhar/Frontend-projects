import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_4px_30px_-10px_rgba(44,24,16,0.15)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-3xl md:text-4xl font-bold text-espresso tracking-tight">
          Brew
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-espresso/80 hover:text-espresso text-sm font-medium relative group transition-colors"
                activeProps={{ className: "text-espresso" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-espresso transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/menu"
          className="hidden md:inline-flex items-center bg-espresso text-beige px-5 py-2.5 rounded-full text-sm font-medium hover:bg-espresso/90 hover:scale-105 transition-all"
        >
          Order Now
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden text-espresso"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur border-t border-espresso/10 animate-fade-up">
          <ul className="flex flex-col px-6 py-5 gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-espresso text-lg font-medium py-1"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-espresso text-beige px-5 py-3 rounded-full font-medium"
            >
              Order Now
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
