"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Helicopter sightseeing tours data
const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    title: "Everest Helicopter Sightseeing",
    location: "Everest Region, Nepal",
    duration: "4-5 hours",
    rating: 4.9,
    reviewCount: 342,
    price: 1150,
    excerpt: "Breathtaking aerial views of the world's highest peak",
    description: "Experience the ultimate adventure with a helicopter tour to Mount Everest. Fly over the majestic Himalayas, witness stunning glaciers, and land at the world's highest hotel at Everest View Point (3,880m) for breakfast with a panoramic view of Everest, Lhotse, and Ama Dablam. This once-in-a-lifetime journey offers unparalleled views of the world's highest mountains without the strenuous trek.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Helicopter", "Luxury", "Bucket List"],
    highlights: ["Mount Everest close-up", "Kala Patthar landing", "Himalayan panorama"],
    includes: ["Helicopter flight", "Experienced pilot", "Hotel transfers", "Breakfast at Everest View Hotel"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Everest Helicopter Tour", description: "Hotel pickup, flight to Lukla, aerial views of Everest region, landing at Syangboche for breakfast, return to Kathmandu" }
    ],
    maxGroupSize: 5,
    included: ["Shared helicopter flight", "Expert pilot", "Hotel transfers", "Breakfast at Everest View Hotel", "All permits and taxes"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
    isPopular: true
  },
  {
    id: "2",
    title: "Pokhara - Annapurna Helicopter Sightseeing", 
    location: "Annapurna Region, Nepal",
    duration: "2-3 hours",
    rating: 4.8,
    reviewCount: 276,
    price: 450,
    excerpt: "Spectacular aerial tour of the Annapurna massif",
    description: "Soar above the stunning Annapurna range on this breathtaking helicopter tour from Pokhara. Witness majestic peaks including Annapurna I (8,091m), Machhapuchhre (Fishtail Mountain), Dhaulagiri, and Hiunchuli. The highlight is a landing at Muktinath Temple (3,800m), a sacred site for both Hindus and Buddhists, offering incredible panoramic views of the Mustang region and the Kali Gandaki Valley below.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Helicopter", "Scenic", "Spiritual"],
    highlights: ["Annapurna range views", "Muktinath landing", "Kali Gandaki Valley"],
    includes: ["Helicopter flight", "Experienced pilot", "Hotel transfers", "Temple visit"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Annapurna Helicopter Tour", description: "Hotel pickup in Pokhara, flight over Annapurna range, landing at Muktinath Temple, aerial views of Kali Gandaki Valley, return to Pokhara" }
    ],
    maxGroupSize: 5,
    included: ["Shared helicopter flight", "Expert pilot", "Hotel transfers in Pokhara", "Muktinath Temple visit", "All permits and taxes"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Accommodation in Pokhara"],
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
    isPopular: true
  },
  {
    id: "3",
    title: "Langtang Helicopter Sightseeing",
    location: "Langtang Region, Nepal",
    duration: "3-4 hours",
    rating: 4.7,
    reviewCount: 189,
    price: 650,
    excerpt: "Dramatic views of the Langtang Himal and glaciers",
    description: "Discover the stunning Langtang region on this exhilarating helicopter tour. Fly north from Kathmandu to witness the majestic Langtang Lirung (7,234m), Dorje Lakpa, and other spectacular peaks. The tour includes a landing at Kyanjin Gompa (3,870m), where you can experience the unique Tamang culture and enjoy breathtaking views of glaciers and high mountain lakes. This journey offers incredible photographic opportunities of one of Nepal's most beautiful but less-visited regions.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
    ],
    tags: ["Helicopter", "Adventure", "Glacier Views"],
    highlights: ["Langtang Lirung", "Kyanjin Gompa landing", "Glacier views"],
    includes: ["Helicopter flight", "Experienced pilot", "Hotel transfers", "Cultural experience"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Langtang Helicopter Tour", description: "Hotel pickup in Kathmandu, flight to Langtang region, landing at Kyanjin Gompa, aerial views of glaciers, return to Kathmandu" }
    ],
    maxGroupSize: 5,
    included: ["Shared helicopter flight", "Expert pilot", "Hotel transfers in Kathmandu", "Cultural experience at Kyanjin Gompa", "All permits and taxes"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
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
        title="Nepal Helicopter Sightseeing Tours"
        description="Experience the Himalayas from above with our exclusive helicopter tours. Witness breathtaking aerial views of Everest, Annapurna, and Langtang regions without the strenuous trekking. A once-in-a-lifetime adventure awaits."
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
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Helicopter Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Pilots</h3>
              <p className="text-muted-foreground">
                Our experienced pilots have extensive knowledge of Himalayan weather and terrain for your safety.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Limited to 5 passengers per flight ensuring everyone has a window seat for optimal views.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle all permits, transfers, and arrangements for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tour Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Warm layers (temperatures drop at high altitude)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Sunglasses and sunscreen (high UV at altitude)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Camera with extra batteries
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Valid passport for permit processing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Flights are weather-dependent and may be rescheduled
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Weight restrictions apply for passenger safety
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Oxygen is available on all flights
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Minimum 2 passengers required for tour operation
                </li>
              </ul>
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