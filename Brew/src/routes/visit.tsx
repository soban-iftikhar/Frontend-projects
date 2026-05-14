import { createFileRoute } from "@tanstack/react-router";
import { VisitSection } from "@/components/VisitSection";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Brew Islamabad" },
      { name: "description", content: "Find Brew at Shop 5, I-8 Markaz, Islamabad. Hours, contact & WhatsApp ordering." },
      { property: "og:title", content: "Visit Brew — I-8 Markaz, Islamabad" },
      { property: "og:description", content: "Address, hours & WhatsApp ordering." },
    ],
  }),
  component: () => <div className="pt-24"><VisitSection /></div>,
});
