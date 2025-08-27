import { FullScreenBackgroundHero } from "@/components/landing/full-screen-background-hero";
import { NumberedBadgeCards } from "@/components/landing/numbered-badge-cards";
import { TabControlledGallery } from "@/components/landing/tab-controlled-gallery";
import { YearSelectorStats } from "@/components/landing/year-selector-stats";
import { ToggleTabsPricing } from "@/components/landing/toggle-tabs-pricing";
import { MasonryTestimonialGrid } from "@/components/landing/masonry-testimonial-grid";
import { ComplexBentoGrid } from "@/components/landing/complex-bento-grid";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <FullScreenBackgroundHero />

      {/* Services / Quick Value */}
      <NumberedBadgeCards />

      {/* ComplexBentoGrid - Desktop only */}
      <div className="hidden md:block">
        <ComplexBentoGrid />
      </div>


      {/* Social proof - Testimonials */}
      <MasonryTestimonialGrid />


      {/* Stats / Numbers */}
      <YearSelectorStats />

      {/* TabControlledGallery - Desktop only */}
      <div className="hidden md:block">
        <TabControlledGallery />
      </div>

      <ToggleTabsPricing />
    </main>
  );
}
