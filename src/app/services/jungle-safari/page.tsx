"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

const JUNGLE_SAFARI_TOURS: Tour[] = [
  {
  "id": "1",
  "title": "Chitwan National Park Jungle Safari - 3 Days Wildlife Tour Nepal",
  "location": "Chitwan National Park, Nepal",
  "duration": "3 days / 2 nights",
  "rating": 4.8,
  "reviewCount": 423,
  "price": 285,
  "originalPrice": 325,
  "excerpt": "3-day Chitwan National Park jungle safari with elephant rides, wildlife spotting, and Tharu cultural experience. UNESCO World Heritage Site.",
  "description": "Experience Chitwan National Park jungle safari in Nepal's premier wildlife destination. This 3-day package offers elephant safari rides, jungle walks, canoe trips, and Tharu cultural shows. Spot one-horned rhinoceros, Bengal tigers, crocodiles, and over 500 bird species. Perfect wildlife adventure in Nepal.",
  "image": "/images/chitwan-1.jpg",

  "images": [
    "/images/chitwan-1.jpg",
    "/images/chitwan-2.jpg",
    "/images/chitwan-3.jpg",
  ],
  "tags": ["Chitwan National Park", "Nepal Jungle Safari", "Wildlife Tour", "Elephant Safari", "UNESCO World Heritage", "One-Horned Rhino"],
  "highlights": ["Elephant Back Safari", "Jungle Walk with Guide", "Canoe Ride Crocodile Spotting", "Tharu Cultural Dance", "One-Horned Rhinoceros Viewing", "Bird Watching 500+ Species"],
  "includes": ["Jungle Lodge Accommodation", "All Meals", "Professional Safari Guide", "National Park Fees", "All Safari Activities"],
  "excludes": ["Transportation to Chitwan", "Personal Expenses", "Travel Insurance", "Alcoholic Drinks"],
  "itinerary": [
    { "day": 1, "title": "Arrival & Tharu Village Cultural Tour", "description": "Arrive at safari lodge, lunch, explore Tharu village, sunset views, cultural performance after dinner" },
    { "day": 2, "title": "Full Day Jungle Safari - Elephant Ride & Wildlife", "description": "Bird watching, elephant back safari, jungle walk, canoe trip, crocodile spotting, jeep safari" },
    { "day": 3, "title": "Nature Walk & Departure from Chitwan", "description": "Morning nature walk, breakfast, visit elephant breeding center, check out and departure" }
  ],
  "maxGroupSize": 12,
  "included": ["2 nights jungle lodge accommodation", "All meals (2 breakfasts, 2 lunches, 2 dinners)", "Chitwan National Park entry fees", "Professional naturalist guide", "Elephant safari ride", "Jungle walk", "Canoe trip", "Jeep safari", "Tharu cultural dance"],
  "excluded": ["Transportation to/from Chitwan", "Alcoholic beverages", "Personal expenses and tips", "Travel insurance", "Services not mentioned"],
  "cancellationPolicy": "Free cancellation up to 7 days before safari. 50% refund 3-7 days prior. No refund within 3 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy to moderate",
  "requirements": ["Comfortable walking shoes", "Binoculars recommended", "Valid passport/ID", "Moderate physical fitness"],
  "equipment": ["Light clothing", "Warm layers", "Sunscreen", "Insect repellent", "Camera", "Water bottle"],
  "entryRequirements": ["Valid passport or government ID", "Chitwan National Park entry permit"]
}
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for jungle safari
  const heroImage = "/images/jungle-safari-hero.jpg"; // Change this to your desired image path

  // Load jungle safari tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(JUNGLE_SAFARI_TOURS);
      } catch (err) {
        console.error("Error loading jungle safari tours:", err);
        setTours(JUNGLE_SAFARI_TOURS); // Still use mock data on error
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading jungle safari tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Updated Hero section with image for jungle safari */}
      <Hero 
        title="Chitwan Jungle Safari Experiences"
        description="Discover the wild heart of Nepal at Chitwan National Park, a UNESCO World Heritage Site. Encounter rare wildlife including one-horned rhinoceros, Bengal tigers, and over 500 bird species in their natural habitat."
        backgroundImage={heroImage} // Add this line
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
              <p className="text-muted-foreground">No jungle safari tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Chitwan Safaris?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Naturalist Guides</h3>
              <p className="text-muted-foreground">
                Our guides have extensive knowledge of local wildlife and ecosystems for an educational experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Ethical Wildlife Viewing</h3>
              <p className="text-muted-foreground">
                We prioritize animal welfare and follow strict guidelines for responsible wildlife tourism.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive Packages</h3>
              <p className="text-muted-foreground">
                We handle accommodations, meals, activities, and permits for a seamless jungle experience.
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