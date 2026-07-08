import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Brew Islamabad" },
      { name: "description", content: "Brew was started in 2023 to be Islamabad's coziest cafe. Read our story." },
      { property: "og:title", content: "About Brew" },
      { property: "og:description", content: "The story behind Islamabad's coziest cafe." },
    ],
  }),
  component: () => <div className="pt-24"><AboutSection /></div>,
});
