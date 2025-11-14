"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Sample tours data
const TOURS: Tour[] = [
  {
    id: "1",
    title: "Annapurna Base Camp Trek",
    location: "Nepal",
    duration: "12 days",
    rating: 4.8,
    reviewCount: 120,
    price: 850,
    originalPrice: 950,
    excerpt: "Classic trek to the base of the majestic Annapurna massif.",
    description: "The Annapurna Base Camp Trek takes you through diverse landscapes, from lush rhododendron forests to high-altitude glaciers, with spectacular views of the Annapurna range.",
    image: "/images/annapurna.jpg",
    images: ["/images/annapurna1.jpg", "/images/annapurna2.jpg", "/images/annapurna3.jpg"],
    tags: ["Annapurna", "Trekking", "Adventure", "Nepal"],
    highlights: [
      "Spectacular mountain views",
      "Diverse landscapes and ecosystems",
      "Rich cultural experiences",
      "Natural hot springs at Jhinu Danda"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Arrive in Kathmandu and transfer to hotel." },
      { day: 2, title: "Drive to Pokhara", description: "Scenic drive to Pokhara with lake views." },
      { day: 3, title: "Trek to Tikhedhunga", description: "Start trek through villages and rivers." }
    ],
    maxGroupSize: 15,
    cancellationPolicy: "Full refund if canceled 30 days before start date",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate to challenging",
    maxAltitude: "4,130m (ABC)",
    requirements: ["Good physical fitness", "Previous trekking experience recommended"],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    equipment: ["Trekking boots", "Warm layers", "Backpack", "Trekking poles"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  }
];

export default function HomePage() {
  const [tours] = useState<Tour[]>(TOURS);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Trekking Adventures"
        description="Experience the ultimate Himalayan adventure with our comprehensive trekking options. From gentle cultural walks to challenging high-altitude treks and peak climbing expeditions, we offer guided experiences for every level of adventurer in Nepal's most spectacular mountain regions."
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          {tours.length > 0 ? (
            <ToursGrid
              tours={tours}
              onTourSelect={handleTourSelect}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No trekking tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Trekking Regions of Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">⛰️</span>
              </div>
              <h3 className="font-semibold">Everest Region</h3>
              <p className="text-sm text-muted-foreground">Home to the world's highest peak with classic treks</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🏔️</span>
              </div>
              <h3 className="font-semibold">Annapurna Region</h3>
              <p className="text-sm text-muted-foreground">Diverse landscapes from lush valleys to high passes</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🌄</span>
              </div>
              <h3 className="font-semibold">Langtang Region</h3>
              <p className="text-sm text-muted-foreground">Closest Himalayan trekking from Kathmandu</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🗻</span>
              </div>
              <h3 className="font-semibold">Restricted Areas</h3>
              <p className="text-sm text-muted-foreground">Upper Mustang, Manaslu, and Tsum Valley</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trekking Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">Easy</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Treks</h3>
              <p className="text-muted-foreground">3-7 days, max altitude below 3,500m, no previous experience needed</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">Moderate</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moderate Treks</h3>
              <p className="text-muted-foreground">7-14 days, max altitude 4,000-5,000m, good fitness required</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">Challenging</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenging Treks</h3>
              <p className="text-muted-foreground">14-21 days, high passes above 5,000m, previous trekking experience</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">Expert</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Treks</h3>
              <p className="text-muted-foreground">Peak climbing, technical sections, mountaineering experience needed</p>
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