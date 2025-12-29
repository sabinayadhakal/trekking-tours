"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock day sightseeing tours data
const DAY_SIGHTSEEING_TOURS: Tour[] = [
  {
    "id": "1",
    "title": "Free Walking Tour Kathmandu",
    "location": "Kathmandu, Nepal",
    "duration": "4 hours",
    "rating": 4.8,
    "reviewCount": 112,
    "price": 0,
    "excerpt": "Explore the cultural heart of Kathmandu on foot.",
    "description": "Walk through Kathmandu’s historic streets, visit key heritage sites, and experience local life with an expert guide on this immersive walking tour.",
    "image": "/images/FWT-3.jpg",
    "images": [
      "/images/FWT-3.jpg",
      "/images/asan_market-1.jpg",
"/images/swoyambhunath-2.jpg",    ],
    "tags": ["Walking Tour", "Cultural", "Half Day"],
    "highlights": ["Old Kathmandu Streets", "Local Markets", "Heritage Temples"],
    "includes": ["Professional guide"],
    "excludes": ["Meals", "Transportation"],
    "itinerary": [
      { "day": 1, "title": "Walking Tour", "description": "Meet in Thamel, walk through Ason, Indrachowk, Durbar Square, and surrounding heritage alleys." }
    ],
    "maxGroupSize": 15,
    "included": ["Guide"],
    "excluded": ["Food", "Transport"],
    "cancellationPolicy": "Free cancellation anytime.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["Comfortable shoes"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  },
  
  {
    "id": "2",
    "title": "Kapan Gumba, Bouddhanath and Pashupatinath Day Tour",
    "location": "Kathmandu Valley, Nepal",
    "duration": "6 hours",
    "rating": 4.9,
    "reviewCount": 156,
    "price": 39,
    "excerpt": "Spiritual journey through sacred Buddhist and Hindu sites.",
    "description": "Experience the tranquility of Kapan Gumba, the grandeur of Bouddhanath Stupa, and the spiritual significance of Pashupatinath Temple.",
    "image":  "/images/boudhanath-1.jpg",
    "images": [
      "/images/boudhanath-1.jpg",
 "/images/kopan-1.jpg", 
       "/images/pashupati-1.jpg",

 
   ],
    "tags": ["Spiritual", "Cultural", "Half Day"],
    "highlights": ["Kapan Gumba Monastery", "Bouddhanath Stupa", "Pashupatinath Temple"],
    "includes": ["Guide", "Transportation"],
    "excludes": ["Meals", "Tips"],
    "itinerary": [
      { "day": 1, "title": "Spiritual Day Tour", "description": "Pickup, visit Kapan Gumba Monastery, Bouddhanath Stupa, and Pashupatinath Temple, then return." }
    ],
    "maxGroupSize": 8,
    "included": ["Guide", "Private vehicle", "Entry fees"],
    "excluded": ["Food", "Insurance"],
    "cancellationPolicy": "Free cancellation up to 24 hours.",
    "isPopular": false,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["Comfortable shoes"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  },
  {
    "id": "3",
    "title": "Patan Durbar Square, Pashupatinath and Bouddhanath Day Tour",
    "location": "Kathmandu Valley, Nepal",
    "duration": "1 day",
    "rating": 4.7,
    "reviewCount": 178,
    "price": 45,
    "excerpt": "Explore ancient royal squares and sacred religious sites.",
    "description": "Discover the artistic heritage of Patan Durbar Square followed by the spiritual significance of Pashupatinath and Bouddhanath.",
    "image":       "/images/patan-1.jpg",

    "images": [
            "/images/patan-1.jpg",
                  "/images/boudhanath-2.jpg",

                        "/images/pashupati-2.jpg",


    ],
    "tags": ["Full Day", "UNESCO", "Cultural", "Religious"],
    "highlights": ["Patan Durbar Square", "Pashupatinath Temple", "Bouddhanath Stupa"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals", "Personal expenses"],
    "itinerary": [
      { "day": 1, "title": "Heritage & Spiritual Tour", "description": "Visit Patan Durbar Square, Pashupatinath Temple, and Bouddhanath Stupa." }
    ],
    "maxGroupSize": 10,
    "included": ["Guide", "Entry fees", "Private transportation"],
    "excluded": ["Food", "Insurance"],
    "cancellationPolicy": "Free cancellation 24 hours prior.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["Comfortable shoes"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  },
  {
    "id": "4",
    "title": "Patan Durbar Square, Bungamati, Khokana Day Tour",
    "location": "Kathmandu Valley, Nepal",
    "duration": "1 day",
    "rating": 4.9,
    "reviewCount": 94,
    "price": 55,
    "excerpt": "Traditional Newari village exploration and royal heritage.",
    "description": "Experience the charm of traditional Newari villages Bungamati and Khokana before exploring the artistic heritage of Patan Durbar Square.",
    "image":             "/images/bungamati-1.jpg",

    "images": [
            "/images/bungamati-1.jpg",
                        "/images/patan-1.jpg",
                                    "/images/bungamati-2.jpg",


    ],
    "tags": ["Cultural", "Village Tour", "Full Day", "Newari"],
    "highlights": ["Patan Durbar Square", "Bungamati Village", "Khokana Village"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals"],
    "itinerary": [
      { "day": 1, "title": "Village and Heritage Tour", "description": "Visit Patan Durbar Square, Bungamati Village, and Khokana Village." }
    ],
    "maxGroupSize": 8,
    "included": ["Guide", "Entry fees", "Vehicle"],
    "excluded": ["Food"],
    "cancellationPolicy": "24-hour cancellation policy.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["Walking shoes"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  },
  {
    "id": "5",
    "title": "Kathmandu Durbar Square, Swayambhunath, Bouddhanath and Pashupatinath",
    "location": "Kathmandu, Nepal",
    "duration": "1 day",
    "rating": 4.8,
    "reviewCount": 103,
    "price": 60,
    "excerpt": "Complete cultural and spiritual tour of Kathmandu's highlights.",
    "description": "Explore the royal heritage of Kathmandu Durbar Square, the panoramic views from Swayambhunath, and the spiritual centers of Bouddhanath and Pashupatinath.",
    "image":             "/images/ktm_durbar_square-2.jpg",

    "images": [
       "/images/ktm_durbar_square-2.jpg",
                  "/images/swoyambhunath-1.jpg",
                      "/images/boudhanath-1.jpg",
                                  "/images/pashupati-1.jpg",



    ],
    "tags": ["Cultural", "Spiritual", "UNESCO", "Full Day"],
    "highlights": ["Kathmandu Durbar Square", "Swayambhunath", "Bouddhanath", "Pashupatinath"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals"],
    "itinerary": [
      { "day": 1, "title": "Complete Kathmandu Tour", "description": "Visit Kathmandu Durbar Square, Swayambhunath, Bouddhanath, and Pashupatinath." }
    ],
    "maxGroupSize": 8,
    "included": ["Guide", "Transport", "Entry fees"],
    "excluded": ["Food", "Insurance"],
    "cancellationPolicy": "Free cancellation 24 hours before.",
    "isPopular": false,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,401m",
    "requirements": ["Comfortable shoes"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  },
  {
    "id": "6",
    "title": "Bhaktapur Durbar Square + Patan Durbar Square",
    "location": "Kathmandu Valley, Nepal",
    "duration": "1 day",
    "rating": 4.8,
    "reviewCount": 120,
    "price": 65,
    "excerpt": "Medieval city exploration of two UNESCO World Heritage Sites.",
    "description": "Discover the ancient royal squares of Bhaktapur and Patan, showcasing exquisite Newari architecture and craftsmanship.",
    "image":  "/images/bhaktapur-1.jpg",
    "images": [
       "/images/bhaktapur-1.jpg",
        "/images/patan-1.jpg",
    ],
    "tags": ["UNESCO", "Medieval", "Architectural", "Full Day"],
    "highlights": ["Bhaktapur Durbar Square", "Patan Durbar Square", "Newari Architecture"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals"],
    "itinerary": [
      { "day": 1, "title": "Medieval Cities Tour", "description": "Explore Bhaktapur Durbar Square and Patan Durbar Square." }
    ],
    "maxGroupSize": 8,
    "included": ["Guide", "Transport", "Entry fees"],
    "excluded": ["Food", "Insurance"],
    "cancellationPolicy": "Free cancellation 24 hours before.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["Comfortable walking shoes"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  },
  {
    "id": "7",
    "title": "Dakshinkali, Pharping and Kirtipur",
    "location": "Kathmandu Valley, Nepal",
    "duration": "1 day",
    "rating": 4.6,
    "reviewCount": 85,
    "price": 50,
    "excerpt": "Spiritual pilgrimage and historical hilltop town visit.",
    "description": "Visit the sacred Dakshinkali Temple, explore the Buddhist pilgrimage site of Pharping, and discover the ancient hilltop town of Kirtipur.",
    "image": "/images/dakshinkali-1.jpg",
    "images": [
      "/images/dakshinkali-1.jpg",
      "/images/pharping-2.jpg",
      "/images/dakshinkali-2.jpg",
      "/images/dakshinkali-3.jpg",
    ],
    "tags": ["Spiritual", "Pilgrimage", "Historical", "Full Day"],
    "highlights": ["Dakshinkali Temple", "Pharping Monastery", "Kirtipur Town"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals"],
    "itinerary": [
      { "day": 1, "title": "Spiritual & Historical Tour", "description": "Visit Dakshinkali Temple, Pharping, and Kirtipur." }
    ],
    "maxGroupSize": 8,
    "included": ["Guide", "Transport", "Entry fees"],
    "excluded": ["Food", "Insurance"],
    "cancellationPolicy": "Free cancellation 24 hours before.",
    "isPopular": false,
    "isSoldOut": false,
    "difficulty": "moderate",
    "maxAltitude": "1,500m",
    "requirements": ["Comfortable walking shoes", "Moderate fitness"],
    "permits": [],
    "equipment": [],
    "entryRequirements": []
  }

  
]


export default function DaySightseeingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for cultural tours
  const heroImage = "/images/day-sightseeing-hero.jpg"; // Change this to your desired image path

  // Load day sightseeing tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(DAY_SIGHTSEEING_TOURS);
      } catch (err) {
        console.error("Error loading cultural tours:", err);
        setTours(DAY_SIGHTSEEING_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading cultural tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Updated Hero section with image for cultural tours */}
      <Hero 
        title="Kathmandu Cultural Tours"
        description="Discover the rich heritage of the Kathmandu Valley with our curated cultural tours. Explore ancient temples, medieval palaces, and vibrant local traditions with expert guides."
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
              <p className="text-muted-foreground">No cultural tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections remain the same */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Cultural Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Local Expert Guides</h3>
              <p className="text-muted-foreground">
                Our knowledgeable Nepali guides provide deep insights into culture, history, and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Enjoy personalized attention with small group sizes for a more intimate experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle transportation, entry fees, and meals so you can focus on the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Cultural Sites</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🛕</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">UNESCO Sites</h3>
              <p className="text-muted-foreground">7 Cultural World Heritage Sites in Kathmandu Valley</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🕌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sacred Temples</h3>
              <p className="text-muted-foreground">Hindu and Buddhist temples with centuries of history</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ancient Palaces</h3>
              <p className="text-muted-foreground">Royal palaces showcasing Newari architecture</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🛍️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Markets</h3>
              <p className="text-muted-foreground">Traditional markets with handicrafts and local products</p>
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