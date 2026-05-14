import { MapPin, Phone, MessageCircle, Instagram, Clock } from "lucide-react";

export function VisitSection() {
  return (
    <section id="visit" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-rose font-medium tracking-widest text-sm uppercase">✦ Come Through</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-3">Visit Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-[520px]">
            <iframe
              title="Brew location on Google Maps"
              src="https://www.google.com/maps?q=I-8+Markaz,+Islamabad,+Pakistan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md flex flex-col justify-between gap-8">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "Shop 5, I-8 Markaz, Islamabad" },
                { icon: Phone, label: "Phone", value: "051-1234567" },
                { icon: MessageCircle, label: "WhatsApp", value: "0311-1234567" },
                { icon: Instagram, label: "Instagram", value: "@brew.isb" },
                { icon: Clock, label: "Hours", value: "Mon–Thu 11am–11pm · Fri–Sun 10am–12am" },
              ].map((row) => (
                <div key={row.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-sage/30 flex items-center justify-center text-espresso">
                    <row.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-espresso/60">{row.label}</p>
                    <p className="font-display text-lg mt-0.5">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/923111234567"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-medium px-6 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg transition-all"
            >
              <MessageCircle size={20} /> Chat to Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
