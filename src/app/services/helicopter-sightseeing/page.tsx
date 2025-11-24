"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock helicopter tours data
const HELICOPTER_TOURS: Tour[] = [
  {
    id: "1",
    title: "Everest Helicopter Sightseeing",
    location: "Everest Region, Nepal",
    duration: "4-5 hours",
    rating: 4.9,
    reviewCount: 342,
    price: 1150,
    originalPrice: 1250,
    excerpt: "Breathtaking aerial views of the world's highest peak",
    description: "Experience the ultimate adventure with a helicopter tour to Mount Everest. Fly over the majestic Himalayas, witness stunning glaciers, and land at the world's highest hotel at Everest View Point (3,880m) for breakfast with a panoramic view of Everest, Lhotse, and Ama Dablam. This once-in-a-lifetime journey offers unparalleled views of the world's highest mountains without the strenuous trek.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Helicopter", "Luxury", "Bucket List"],
    highlights: [
      "Mount Everest close-up view",
      "Kala Patthar landing",
      "Himalayan panorama",
      "Breakfast at Everest View Hotel"
    ],
    includes: ["Helicopter flight", "Experienced pilot", "Hotel transfers", "Breakfast at Everest View Hotel"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    included: ["Shared helicopter flight", "Expert pilot", "Hotel transfers", "Breakfast at Everest View Hotel", "All permits and taxes"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    itinerary: [
      { day: 1, title: "Everest Helicopter Tour", description: "Hotel pickup, flight to Lukla, aerial views of Everest region, landing at Syangboche for breakfast, return to Kathmandu" }
    ],
    maxGroupSize: 5,
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "3,880m (Everest View Hotel)",
    requirements: ["No experience needed", "Reasonable health condition"],
    permits: ["National Park entry permit", "Flight operation permit"],
    equipment: ["Warm clothing", "Sunglasses", "Camera"],
    entryRequirements: ["Valid passport for identification"]
  },
  {
    id: "2",
    title: "Annapurna Base Camp Helicopter Tour",
    location: "Annapurna Region, Nepal",
    duration: "3-4 hours",
    rating: 4.8,
    reviewCount: 189,
    price: 850,
    originalPrice: 950,
    excerpt: "Spectacular Annapurna range views with ABC landing",
    description: "Soar above the Annapurna Sanctuary and land at Annapurna Base Camp (4,130m) for unparalleled close-up views of the Annapurna massif. This helicopter adventure takes you deep into the heart of the Himalayas, offering breathtaking aerial perspectives of Machhapuchhre (Fishtail Mountain), Annapurna I, and surrounding peaks.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop"
    ],
    tags: ["Helicopter", "Annapurna", "Adventure"],
    highlights: [
      "Annapurna Base Camp landing",
      "Machhapuchhre close-up views",
      "Annapurna Sanctuary flight",
      "Himalayan glacier views"
    ],
    includes: ["Helicopter flight", "Pilot guide", "Hotel transfers"],
    excludes: ["Personal expenses", "Travel insurance"],
    included: ["Shared helicopter", "Expert pilot", "Transfers", "All permits"],
    excluded: ["Personal items", "Insurance"],
    itinerary: [
      { day: 1, title: "Annapurna Helicopter Tour", description: "Hotel pickup, scenic flight to Annapurna region, landing at ABC for photos, return to Pokhara" }
    ],
    maxGroupSize: 5,
    cancellationPolicy: "7-day cancellation policy with full refund.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "4,130m",
    requirements: ["Good health", "No altitude issues"],
    permits: ["ACAP permit", "Flight permits"],
    equipment: ["Warm layers", "Camera"],
    entryRequirements: ["Passport copy"]
  },
  {
    id: "3",
    title: "Langtang Valley Helicopter Tour",
    location: "Langtang Region, Nepal",
    duration: "3 hours",
    rating: 4.7,
    reviewCount: 124,
    price: 750,
    excerpt: "Glacier-filled valley adventure with monastery landing",
    description: "Discover the stunning Langtang Valley from above with this scenic helicopter tour. Fly over dramatic glaciers, traditional Tamang villages, and land at Kyanjin Gompa (3,870m) for spectacular views of Langtang Lirung and the surrounding peaks. Experience the beauty of this less-crowded Himalayan region.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Helicopter", "Langtang", "Glaciers"],
    highlights: [
      "Kyanjin Gompa landing",
      "Langtang Lirung views",
      "Glacier overflight",
      "Tamang culture insight"
    ],
    includes: ["Helicopter flight", "Pilot", "Transfers"],
    excludes: ["Meals", "Personal costs"],
    included: ["Flight", "Transfers", "Permits"],
    excluded: ["Food", "Extras"],
    itinerary: [
      { day: 1, title: "Langtang Valley Tour", description: "Hotel pickup, flight over Langtang National Park, landing at Kyanjin, photography session, return" }
    ],
    maxGroupSize: 5,
    cancellationPolicy: "Flexible 5-day cancellation.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "3,870m",
    requirements: ["Basic fitness"],
    permits: ["National Park permit"],
    equipment: ["Jacket", "Camera"],
    entryRequirements: ["ID required"]
  },
  
];

export default function HelicopterSightseeingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load helicopter tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(HELICOPTER_TOURS);
      } catch (err) {
        console.error("Error loading helicopter tours:", err);
        setTours(HELICOPTER_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading helicopter tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Helicopter Sightseeing Tours"
        description="Experience the Himalayas from above with our exclusive helicopter tours. Witness breathtaking aerial views of Everest, Annapurna, and Langtang regions without the strenuous trekking. A once-in-a-lifetime adventure awaits."
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
              <p className="text-muted-foreground">No helicopter tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections specific to helicopter tours */}
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

   

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Popular Helicopter Tour Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">⛰️</span>
              </div>
              <h3 className="font-semibold">Everest Region</h3>
              <p className="text-sm text-muted-foreground">Fly over the world's highest peak with landing at Kala Patthar</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🏔️</span>
              </div>
              <h3 className="font-semibold">Annapurna Region</h3>
              <p className="text-sm text-muted-foreground">Spectacular views of Annapurna massif with Muktinath landing</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🌄</span>
              </div>
              <h3 className="font-semibold">Langtang Region</h3>
              <p className="text-sm text-muted-foreground">Dramatic glacier views and landing at Kyanjin Gompa</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🗻</span>
              </div>
              <h3 className="font-semibold">Custom Tours</h3>
              <p className="text-sm text-muted-foreground">Personalized itineraries to remote Himalayan destinations</p>
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