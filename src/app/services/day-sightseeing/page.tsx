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
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
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
    "title": "Pashupatinath – Bouddhanath – Patan Tour",
    "location": "Kathmandu Valley, Nepal",
    "duration": "6 hours",
    "rating": 4.9,
    "reviewCount": 156,
    "price": 39,
    "excerpt": "Cultural and spiritual exploration of three major heritage sites.",
    "description": "Visit Nepal’s sacred Hindu and Buddhist landmarks followed by the cultural artistry of Patan’s royal squares.",
    "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop"
    ],
    "tags": ["UNESCO", "Cultural", "Half Day"],
    "highlights": ["Pashupatinath", "Bouddhanath", "Patan Durbar Square"],
    "includes": ["Guide", "Transportation"],
    "excludes": ["Meals", "Tips"],
    "itinerary": [
      { "day": 1, "title": "Cultural Tour", "description": "Pickup, visit Pashupatinath, Bouddhanath, and Patan Durbar Square, then return." }
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
    "title": "Kathmandu Sightseeing Tour",
    "location": "Kathmandu, Nepal",
    "duration": "1 day",
    "rating": 4.7,
    "reviewCount": 178,
    "price": 45,
    "excerpt": "Full-day exploration of Kathmandu's major heritage sites.",
    "description": "Discover the cultural, religious, and historical highlights of Kathmandu including key UNESCO World Heritage Sites.",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    "tags": ["Full Day", "UNESCO", "Cultural"],
    "highlights": ["Swayambhunath", "Patan", "Pashupatinath", "Durbar Square"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals", "Personal expenses"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu Full Day", "description": "Visit major UNESCO sites around the city." }
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
    "title": "Bungamati Khokana Patan Tour",
    "location": "Kathmandu Valley, Nepal",
    "duration": "1 day",
    "rating": 4.9,
    "reviewCount": 94,
    "price": 55,
    "excerpt": "Traditional Newari villages and heritage city exploration.",
    "description": "Experience the charm of Bungamati and Khokana’s old villages before exploring Patan’s artistic heritage.",
    "image": "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?w=800&h=600&fit=crop"
    ],
    "tags": ["Cultural", "Village Tour", "Full Day"],
    "highlights": ["Bungamati Village", "Khokana Village", "Patan Durbar Square"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals"],
    "itinerary": [
      { "day": 1, "title": "Village and City Tour", "description": "Visit Bungamati, Khokana, and Patan." }
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
    "title": "Changunarayan Bhaktapur Sanga Tour",
    "location": "Bhaktapur, Nepal",
    "duration": "1 day",
    "rating": 4.8,
    "reviewCount": 103,
    "price": 60,
    "excerpt": "Ancient temple visit and medieval city walk.",
    "description": "Explore the oldest temple in the Kathmandu Valley and wander through Bhaktapur’s beautifully preserved medieval streets.",
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    "tags": ["Medieval", "Cultural", "UNESCO"],
    "highlights": ["Changunarayan Temple", "Bhaktapur Durbar Square", "Sanga Viewpoint"],
    "includes": ["Guide", "Transport"],
    "excludes": ["Meals"],
    "itinerary": [
      { "day": 1, "title": "Bhaktapur and Changunarayan", "description": "Visit temple, explore Bhaktapur, and continue to Sanga." }
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