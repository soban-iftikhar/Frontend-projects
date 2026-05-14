import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { Testimonials } from "@/components/Testimonials";
import { VisitSection } from "@/components/VisitSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <Testimonials />
      <VisitSection />
    </>
  );
}
