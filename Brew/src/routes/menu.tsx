import { createFileRoute } from "@tanstack/react-router";
import { MenuSection } from "@/components/MenuSection";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Brew Islamabad" },
      { name: "description", content: "Coffee, matcha, iced teas, baked goods & desserts. Made fresh daily at Brew, I-8 Markaz Islamabad." },
      { property: "og:title", content: "Menu — Brew Islamabad" },
      { property: "og:description", content: "Explore Brew's full menu of coffee, matcha & desserts." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <MenuSection />
    </div>
  ),
});
