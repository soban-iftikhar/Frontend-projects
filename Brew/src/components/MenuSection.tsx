import { useState } from "react";
import { categories, menu, type MenuItem } from "@/data/menu";
import { Plus, ShoppingBag } from "lucide-react";

type OrderItem = MenuItem & { quantity: number };

export function MenuSection({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const items: MenuItem[] =
    active === "All" ? menu : menu.filter((m) => m.category === active);
  const visible = limit ? items.slice(0, limit) : items;

  const addToOrder = (item: MenuItem) => {
    setOrder((prev) => {
      const existing = prev.find((o) => o.name === item.name);
      if (existing) {
        return prev.map((o) =>
          o.name === item.name ? { ...o, quantity: o.quantity + 1 } : o
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setToast(`${item.name} added!`);
    setTimeout(() => setToast(null), 2000);
  };

  const totalItems = order.reduce((sum, o) => sum + o.quantity, 0);
  const totalPrice = order.reduce((sum, o) => sum + o.price * o.quantity, 0);

  const handleCheckout = () => {
    if (order.length === 0) return;
    const orderText = order
      .map((o) => `${o.quantity}x ${o.name} (Rs. ${o.price * o.quantity})`)
      .join(", ");
    const msg = `Hi Brew! I'd like to order: ${orderText}. Total: Rs. ${totalPrice}`;
    window.open(
      `https://wa.me/923111234567?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="menu" className="py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sage font-medium tracking-widest text-sm uppercase">
            ✦ The Menu ✦
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-3">
            The Menu
          </h2>
          <p className="mt-4 text-espresso/70 italic">
            Made fresh, served with love.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-2 md:gap-3 mb-12 pb-2 scrollbar-hide snap-x px-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === c
                  ? "bg-espresso text-beige shadow-md scale-105"
                  : "bg-white/60 text-espresso hover:bg-white border border-espresso/10"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {visible.map((item) => (
            <article
              key={item.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-display text-lg md:text-2xl font-semibold leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-display text-base md:text-lg whitespace-nowrap text-sage font-semibold">
                    Rs. {item.price}
                  </span>
                </div>
                <p className="mt-2 text-espresso/65 text-xs md:text-sm">
                  {item.desc}
                </p>
                <button
                  onClick={() => addToOrder(item)}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-beige hover:bg-espresso hover:text-beige border border-espresso/15 px-4 py-2.5 rounded-full text-sm font-medium transition-all"
                >
                  <Plus size={16} /> Add to Order
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Floating cart — only shows when items added */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <button
              onClick={handleCheckout}
              className="flex items-center gap-2 bg-espresso text-beige px-4 py-3 rounded-full shadow-xl text-xs font-semibold hover:scale-105 transition-transform whitespace-nowrap"
            >
              <ShoppingBag size={16} />
              <span>{totalItems} item{totalItems > 1 ? "s" : ""}</span>
              <span className="opacity-60">·</span>
              <span>Rs. {totalPrice}</span>
              <span className="hidden sm:inline opacity-70">· Order on WhatsApp</span>
            </button>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-sage text-white text-sm px-5 py-2.5 rounded-full shadow-lg">
            {toast}
          </div>
        )}
      </div>
    </section>
  );
}