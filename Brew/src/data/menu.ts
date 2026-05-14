export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  category: "Coffee" | "Iced Teas" | "Matcha" | "Baked Goods" | "Desserts";
  img: string;
};

export const categories = ["All", "Coffee", "Iced Teas", "Matcha", "Baked Goods", "Desserts"] as const;

export const menu: MenuItem[] = [
  { name: "Classic Espresso", desc: "Bold, intense, single shot of pure energy.", price: 350, category: "Coffee", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80" },
  { name: "Creamy Cappuccino", desc: "Velvety foam over rich espresso.", price: 450, category: "Coffee", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80" },
  { name: "Caramel Latte", desc: "Smooth latte kissed with caramel swirl.", price: 550, category: "Coffee", img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&q=80" },
  { name: "Cold Brew", desc: "Slow-steeped 18 hours for that perfect chill.", price: 500, category: "Coffee", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80" },
  { name: "Dalgona Coffee", desc: "Whipped, dreamy, viral for a reason.", price: 500, category: "Coffee", img: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=800&q=80" },

  { name: "Peach Iced Tea", desc: "Sun-kissed peach over crushed ice.", price: 400, category: "Iced Teas", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80" },
  { name: "Lemon Mint Iced Tea", desc: "Crisp lemon, fresh mint, instant refresh.", price: 380, category: "Iced Teas", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80" },
  { name: "Strawberry Iced Tea", desc: "Sweet berries with a tea-time twist.", price: 420, category: "Iced Teas", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&q=80" },
  { name: "Passion Fruit Tea", desc: "Tropical, tangy, completely addictive.", price: 450, category: "Iced Teas", img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=800&q=80" },

  { name: "Classic Matcha Latte", desc: "Ceremonial grade, steamed to perfection.", price: 550, category: "Matcha", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80" },
  { name: "Iced Matcha", desc: "Stone-ground matcha over creamy milk & ice.", price: 600, category: "Matcha", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80" },
  { name: "Matcha Smoothie", desc: "Blended thick with banana and oat milk.", price: 650, category: "Matcha", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80" },

  { name: "Fudgy Brownie", desc: "Rich, gooey, chocolate-overload bliss.", price: 350, category: "Baked Goods", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80" },
  { name: "Chocolate Chip Cookie", desc: "Warm, soft centre, crisp golden edges.", price: 200, category: "Baked Goods", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80" },
  { name: "Croissant", desc: "Buttery, flaky, French-style perfection.", price: 380, category: "Baked Goods", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80" },

  { name: "New York Cheesecake", desc: "Classic, dense, melts on your fork.", price: 600, category: "Desserts", img: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=800&q=80" },
  { name: "Lotus Biscoff Cake Slice", desc: "Caramelised cookie cream, pure obsession.", price: 700, category: "Desserts", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80" },
  { name: "Tiramisu", desc: "Coffee-soaked layers of mascarpone heaven.", price: 650, category: "Desserts", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80" },
  { name: "Chocolate Lava Cake", desc: "Crack the shell, watch it ooze.", price: 580, category: "Desserts", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80" },
];
