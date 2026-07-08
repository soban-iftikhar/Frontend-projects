export function Marquee() {
  const items = [
    "Iced Teas", "Cold Brews", "Matcha Lattes", "Brownies",
    "Cheesecakes", "Loaded Fries", "Good Vibes Only",
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-espresso text-beige py-5 overflow-hidden border-y border-espresso">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl mx-8 inline-flex items-center gap-8">
            {t}
            <span className="text-sage">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
