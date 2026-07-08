import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/components/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Brew Islamabad" },
      { name: "description", content: "Inside Brew — moments, drinks and desserts from our I-8 Markaz cafe." },
      { property: "og:title", content: "Gallery — Brew Islamabad" },
      { property: "og:description", content: "The Brew aesthetic, in pictures." },
    ],
  }),
  component: () => <div className="pt-24"><GallerySection /></div>,
});
