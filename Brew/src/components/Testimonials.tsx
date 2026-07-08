import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maryam K.",
    handle: "@maryam.sips",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Brew has ruined every other cafe for me. The iced matcha alone is worth the drive from F-7.",
  },
  {
    name: "Ahmed R.",
    handle: "@ahmedinislamabad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "Finally a cafe in I-8 that actually has aesthetic vibes AND good food. The lotus cake is unreal.",
  },
  {
    name: "Zara T.",
    handle: "@zarabakes",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Came for the brownie, stayed for 3 hours. The staff is so warm and the cold brew is perfect.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8 bg-sage/40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-espresso/70 font-medium tracking-widest text-sm uppercase">✦ Reviews</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-3">What People Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.handle}
              className="bg-beige rounded-3xl p-7 hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-display text-lg font-semibold leading-tight">{r.name}</h4>
                  <p className="text-rose text-sm">{r.handle}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="fill-espresso text-espresso" />
                ))}
              </div>
              <p className="mt-4 text-espresso/80 italic leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
