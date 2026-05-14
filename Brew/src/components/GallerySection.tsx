const images = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80", alt: "Aesthetic cafe interior", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80", alt: "Latte art" },
  { src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80", alt: "Brownie closeup" },
  { src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=80", alt: "Iced tea on table", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=700&q=80", alt: "Cheesecake slice" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=700&q=80", alt: "Cozy corner seating" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sage font-medium tracking-widest text-sm uppercase">✦ Gallery</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-3">The Brew Aesthetic</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-3xl ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-beige text-5xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
