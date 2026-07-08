import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-12 px-5 md:px-8 overflow-hidden grain">
      {/* decorative blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-rose/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-sage/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[calc(100vh-7rem)]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-white/70 border border-espresso/10 text-espresso text-xs md:text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
            Now Open in I-8 Islamabad
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] mt-6">
            Where Every Sip Feels Like a <em className="text-sage not-italic">Vibe.</em>
          </h1>
          <p className="mt-6 text-base md:text-lg text-espresso/75 max-w-xl leading-relaxed">
            Islamabad's coziest corner for coffee lovers, sweet tooths, and good conversations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-espresso text-beige px-6 py-3.5 rounded-full font-medium hover:scale-105 hover:shadow-xl transition-all"
            >
              Explore Menu <ArrowRight size={18} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 border-2 border-espresso text-espresso px-6 py-3.5 rounded-full font-medium hover:bg-espresso hover:text-beige transition-all"
            >
              Find Us
            </Link>
          </div>

          <div className="mt-12 flex gap-8 text-sm">
            <div>
              <p className="font-display text-3xl font-bold">2K+</p>
              <p className="text-espresso/60">Happy Sippers</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">25+</p>
              <p className="text-espresso/60">Menu Items</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">4.9★</p>
              <p className="text-espresso/60">Avg. Rating</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up delay-1">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1000&q=80"
              alt="Aesthetic iced coffee at Brew cafe"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-8 bg-rose text-espresso px-5 py-3 rounded-2xl shadow-xl font-display font-semibold animate-float">
            Now Open in I-8 Islamabad ✦
          </div>

          <div className="hidden md:flex absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-espresso text-beige items-center justify-center text-center font-display text-sm animate-spin-slow">
            ✦ Sip · Stay · Repeat ·
          </div>
        </div>
      </div>
    </section>
  );
}
