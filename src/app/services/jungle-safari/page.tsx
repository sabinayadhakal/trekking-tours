"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Helper function to create URL-friendly slugs
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

// Insert your jungle safari tours array here
const JUNGLE_SAFARI_TOURS: Tour[] = [
   {
  "id": "1",
  "title": "Chitwan National Park Jungle Safari - 3 Days Wildlife Tour Nepal",
  "location": "Chitwan National Park, Nepal",
  "duration": "3 days / 2 nights",
  "rating": 4.8,
  "price": 315,
  "originalPrice": 400,
  "excerpt": "3-day Chitwan National Park jungle safari with elephant rides, wildlife spotting, and Tharu cultural experience. UNESCO World Heritage Site.",
  "description": "Experience Chitwan National Park jungle safari in Nepal's premier wildlife destination. This 3-day package offers elephant safari rides, jungle walks, canoe trips, and Tharu cultural shows. Spot one-horned rhinoceros, Bengal tigers, crocodiles, and over 500 bird species. Perfect wildlife adventure in Nepal.",
  "image": "/images/chitwan-1.jpg",
  "images": [
    "/images/chitwan-1.jpg",
    "/images/chitwan-2.jpg",
    "/images/chitwan-3.jpg",
    "/images/elephant-safari-1.jpg",
    "/images/one-horned-rhino-1.jpg",
    "/images/canoe-trip-1.jpg",
    "/images/jungle-walk-1.jpg",
    "/images/tharu-village-1.jpg",
    "/images/chitwan-birds-1.jpg",
    "/images/crocodile-spotting-1.jpg",
    "/images/jungle-lodge-1.jpg",
    "/images/tharu-dance-1.jpg"
  ],
  "tags": ["Chitwan National Park", "Nepal Jungle Safari", "Wildlife Tour", "Elephant Safari", "UNESCO World Heritage", "One-Horned Rhino", "Wildlife Photography", "Bird Watching"],
  "highlights": ["Elephant Back Safari", "Jungle Walk with Guide", "Canoe Ride Crocodile Spotting", "Tharu Cultural Dance", "One-Horned Rhinoceros Viewing", "Bird Watching 500+ Species", "Jeep Safari Adventure", "Sunset Views Over Rapti River"],
  "includes": ["Jungle Lodge Accommodation", "All Meals", "Professional Safari Guide", "National Park Fees", "All Safari Activities", "Cultural Performances"],
  "excludes": ["Transportation to Chitwan", "Personal Expenses", "Travel Insurance", "Alcoholic Drinks", "Optional Activities"],
  "included": ["2 nights jungle lodge accommodation", "All meals (2 breakfasts, 2 lunches, 2 dinners)", "Chitwan National Park entry fees", "Professional naturalist guide", "Elephant safari ride (1 hour)", "Jungle walk with armed guard", "Canoe trip on Rapti River", "Jeep safari in buffer zone", "Tharu cultural dance performance", "Sunset views from riverbank", "Visit to elephant breeding center"],
  "excluded": ["Transportation to/from Chitwan", "Alcoholic beverages", "Personal expenses and tips", "Travel insurance", "Optional elephant bathing experience", "Additional safari activities", "Visa fees"],
  "entryRequirements": ["Valid passport", "Nepal visa (obtainable on arrival for most nationalities)", "Vaccination certificates (recommended)"],
  "itinerary": [
    { "day": 1, "title": "Arrival & Tharu Village Cultural Tour", "description": "Arrive at safari lodge, welcome drink, lunch, Tharu village exploration, sunset views over Rapti River, cultural performance after dinner" },
    { "day": 2, "title": "Full Day Jungle Safari - Elephant Ride & Wildlife", "description": "Early morning bird watching, breakfast, elephant back safari through grasslands, jungle walk with naturalist, canoe trip for crocodile spotting, afternoon jeep safari, evening relaxation" },
    { "day": 3, "title": "Nature Walk & Departure from Chitwan", "description": "Morning nature walk with guide, breakfast, visit to elephant breeding center, check out and departure to next destination" }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Free cancellation up to 7 days before safari. 50% refund 3-7 days prior. No refund within 3 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy to moderate",
  "maxAltitude": "415m",
  "requirements": ["Comfortable walking shoes", "Binoculars recommended", "Valid passport/ID", "Moderate physical fitness", "Respect for wildlife and local culture"],
  "permits": ["Chitwan National Park entry permit", "Buffer zone entry permit"],
  "equipment": ["Light cotton clothing", "Warm layers for evening", "Sunscreen and hat", "Insect repellent", "Camera with zoom lens", "Water bottle", "Comfortable walking shoes"],
}
  // Your jungle safari tours data here
  // Example structure for reference:
  // {
  //   "id": "1",
  //   "title": "Chitwan National Park Jungle Safari - 3 Days Wildlife Tour Nepal",
  //   ... rest of the data
  // }
];

export default function JungleSafariPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const heroImage = "/images/jungle-safari-hero.jpg";

  // Handle "See Full Details" button click - redirect to detail page
  const handleSeeDetails = (tour: Tour) => {
    // For Chitwan National Park Jungle Safari (id: "1"), route to specific URL
    if (tour.id === "1") {
      router.push("/services/jungle-safari/chitwan-national-park-jungle-safari");
    } else {
      // For other safaris, create slug from title
      const slug = createSlug(tour.title);
      router.push(`/services/jungle-safari/${slug}`);
    }
  };

  // Handle "Highlights" button click - show modal
  const handleHighlightsClick = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  // Handle card click - redirect to detail page
  const handleCardClick = (tour: Tour) => {
    handleSeeDetails(tour); // Same as "See Full Details"
  };

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
      <Hero 
        title="Chitwan Jungle Safari Experiences"
        description="Discover the wild heart of Nepal at Chitwan National Park, a UNESCO World Heritage Site. Encounter rare wildlife including one-horned rhinoceros, Bengal tigers, and over 500 bird species in their natural habitat."
        backgroundImage={heroImage}
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          {tours.length > 0 ? (
            <ToursGrid
              tours={tours}
              onCardClick={handleCardClick}
              onHighlightsClick={handleHighlightsClick}
              onSeeDetailsClick={handleSeeDetails}
              className="py-4"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No jungle safari tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

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