"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Everest Mountain Flight data
const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    title: "Everest Mountain Flight",
    location: "Himalayas, Nepal",
    duration: "1 hour flight",
    rating: 4.9,
    reviewCount: 512,
    price: 210,
    originalPrice: 250,
    excerpt: "Breathtaking aerial views of Mount Everest and the Himalayan range",
    description: "Experience the ultimate adventure with a spectacular mountain flight to Mount Everest. This one-hour scenic flight offers unparalleled close-up views of the world's highest peak and other majestic mountains in the Himalayan range. Each passenger gets a window seat for optimal viewing and photography opportunities. The flight includes expert commentary about the mountains and a certificate of achievement.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Scenic Flight", "Everest", "Bucket List"],
    highlights: ["Close-up views of Mount Everest", "Window seat guaranteed", "Himalayan panorama", "Flight certificate"],
    includes: ["Scenic flight", "Window seat", "Expert commentary", "Certificate", "Hotel transfers"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Everest Mountain Flight", description: "Early morning hotel pickup, transfer to airport, check-in, one-hour scenic flight with mountain views, return to hotel" }
    ],
    maxGroupSize: 1,
    included: ["One-hour scenic mountain flight", "Guaranteed window seat", "Expert commentary during flight", "Certificate of achievement", "Hotel pick-up and drop-off", "All airport taxes"],
    excluded: ["Personal expenses", "Meals and drinks", "Gratuities", "Travel insurance", "Visa fees"],
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
        title="Everest Mountain Flight Experience"
        description="Witness the majesty of Mount Everest and the Himalayan range from the air. This breathtaking one-hour flight offers unparalleled views of the world's highest peak without the strenuous trekking. A once-in-a-lifetime experience that will stay with you forever."
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
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Everest Mountain Flight?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Guaranteed Window Seat</h3>
              <p className="text-muted-foreground">
                Every passenger gets a window seat for optimal viewing and photography of the Himalayas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Commentary</h3>
              <p className="text-muted-foreground">
                Learn about the mountains from our knowledgeable crew during the flight.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Convenient Duration</h3>
              <p className="text-muted-foreground">
                Experience the majesty of Everest in just one hour, perfect for busy itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Flight Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mountains You'll See</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Everest</strong> (8,848m) - World's highest peak
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Kanchenjunga</strong> (8,586m) - World's third highest
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Lhotse</strong> (8,516m) - Fourth highest mountain
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Makalu</strong> (8,485m) - Fifth highest mountain
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Cho Oyu</strong> (8,188m) - Sixth highest mountain
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Flight Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Departure:</strong> Kathmandu Airport (early morning)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Duration:</strong> Approximately 1 hour flight time
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Aircraft:</strong> Modern turboprop planes with large windows
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Best Time:</strong> October to May (clear weather)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Included:</strong> Certificate of achievement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">What to Bring</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">📷</span>
              </div>
              <h3 className="font-semibold">Camera</h3>
              <p className="text-sm text-muted-foreground">With extra memory cards and batteries</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🕶️</span>
              </div>
              <h3 className="font-semibold">Sunglasses</h3>
              <p className="text-sm text-muted-foreground">Protection from bright mountain glare</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🧥</span>
              </div>
              <h3 className="font-semibold">Warm Layers</h3>
              <p className="text-sm text-muted-foreground">Although the cabin is heated</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">📱</span>
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">For aerial photography and videos</p>
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