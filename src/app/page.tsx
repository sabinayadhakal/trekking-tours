import { FullScreenBackgroundHero } from "@/components/landing/full-screen-background-hero";
import { NumberedBadgeCards } from "@/components/landing/numbered-badge-cards";
import { TabControlledGallery } from "@/components/landing/tab-controlled-gallery";
import { YearSelectorStats } from "@/components/landing/year-selector-stats";
import { ToggleTabsPricing } from "@/components/landing/toggle-tabs-pricing";
import {MasonryTestimonialGrid} from "@/components/landing/masonry-testimonial-grid";
import { ComplexBentoGrid } from "@/components/landing/complex-bento-grid";
import CombinedContentSection from '@/components/landing/combined-content-section';


export default function Home() {
  return (
    <main>
      <FullScreenBackgroundHero />
      <NumberedBadgeCards />
      <div className="hidden md:block"><ComplexBentoGrid /></div>
      <MasonryTestimonialGrid />
      <YearSelectorStats />
      <div className="hidden md:block"><TabControlledGallery /></div>
      <div className="hidden md:block"><ToggleTabsPricing /></div>
      <CombinedContentSection/>
    </main>
  );
}
