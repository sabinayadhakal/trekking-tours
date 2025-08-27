"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Day hiking tours data
const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    title: "Nagarkot to Changunarayan Day Hiking",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.8,
    reviewCount: 156,
    price: 45,
    originalPrice: 55,
    excerpt: "Scenic hike through traditional villages with panoramic Himalayan views",
    description: "Experience one of the most popular day hikes in the Kathmandu Valley, offering breathtaking views of the Himalayas and a journey through traditional Nepali villages. The trail takes you from Nagarkot, famous for its sunrise views, to the ancient temple of Changunarayan, a UNESCO World Heritage Site.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Cultural", "Moderate"],
    highlights: ["Panoramic Himalayan views", "Traditional villages", "UNESCO Heritage Site"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Nagarkot to Changunarayan", description: "Early morning drive to Nagarkot, hike through villages and forests to Changunarayan Temple, return to Kathmandu" }
    ],
    maxGroupSize: 8,
    included: ["Professional hiking guide", "Private transportation", "All entry fees", "Packed lunch", "First aid kit"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true
  },
  {
    id: "2",
    title: "Dhulikhel to Panauti Day Hiking", 
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.6,
    reviewCount: 89,
    price: 40,
    excerpt: "Cultural hike through ancient towns with rich Newari heritage",
    description: "Discover the cultural heritage of the Kathmandu Valley on this scenic day hike from Dhulikhel to Panauti. The trail passes through traditional villages, terraced fields, and offers insights into Newari culture and architecture. Panauti is one of the oldest towns in Nepal, with beautifully preserved temples and monuments.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Cultural", "Easy-Moderate"],
    highlights: ["Newari architecture", "Terraced farmland", "Ancient temples"],
    includes: ["Professional guide", "Transportation", "Lunch"],
    excludes: ["Personal expenses", "Entry fees", "Tips"],
    itinerary: [
      { day: 1, title: "Dhulikhel to Panauti", description: "Drive to Dhulikhel, hike through villages and farmland to historic Panauti, explore temples, return to Kathmandu" }
    ],
    maxGroupSize: 10,
    included: ["Experienced local guide", "Round-trip transportation", "Traditional Nepali lunch", "Basic first aid"],
    excluded: ["Personal expenses", "Temple entry fees", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours."
  },
  {
    id: "3",
    title: "Pharping to Champadevi Hiking",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.7,
    reviewCount: 112,
    price: 50,
    originalPrice: 60,
    excerpt: "Spiritual hike to sacred sites with panoramic valley views",
    description: "This rewarding day hike takes you from the sacred town of Pharping, known for its monasteries and caves, to the summit of Champadevi Hill (2,278m). The trail offers spectacular views of the Kathmandu Valley and Himalayan ranges, passing through lush forests and traditional villages. Champadevi is a important pilgrimage site for both Hindus and Buddhists.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Spiritual", "Moderate"],
    highlights: ["Sacred pilgrimage sites", "Panoramic valley views", "Monasteries and caves"],
    includes: ["Professional guide", "Transportation", "Lunch", "Entry fees"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Pharping to Champadevi", description: "Drive to Pharping, visit monasteries, hike to Champadevi summit, enjoy panoramic views, return to Kathmandu" }
    ],
    maxGroupSize: 8,
    included: ["Knowledgeable guide", "Private transportation", "Packed lunch", "All entry fees", "First aid kit"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true
  }
];

export default function HomePage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleBookNow = (tour: Tour) => {
    console.log("Booking tour:", tour.title);
    // You can add booking logic here or open a booking modal
  };

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Day Hiking Adventures"
        description="Experience the beauty of the Kathmandu Valley with our curated day hiking tours. Discover traditional villages, sacred sites, and breathtaking Himalayan views just hours from the city."
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <ToursGrid
            tours={MOCK_TOURS}
            onTourSelect={handleTourSelect}
          />
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Day Hikes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Local Expert Guides</h3>
              <p className="text-muted-foreground">
                Our knowledgeable Nepali guides share insights into culture, history, and nature.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Enjoy personalized attention with small group sizes for a better experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle transportation, meals, and fees so you can focus on enjoying the hike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Notifications />
    </main>
  );
}