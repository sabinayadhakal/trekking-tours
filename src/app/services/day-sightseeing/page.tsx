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
    id: "1",
    title: "Free Walking Tour Kathmandu",
    location: "Kathmandu, Nepal",
    duration: "3-4 hours",
    rating: 4.9,
    reviewCount: 507,
    price: 0,
    excerpt: "Explore hidden corners of Kathmandu with local guides",
    description: "Discover the authentic side of Kathmandu beyond the tourist trails. Our free walking tour takes you through ancient alleys, local markets, and hidden temples that most visitors never see. Learn about the city's history, culture, and daily life from knowledgeable local guides.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Free Tour", "Cultural", "Walking"],
    highlights: ["Local markets", "Hidden temples", "Ancient alleys"],
    includes: ["Professional guide"],
    excludes: ["Transportation", "Entry fees", "Meals"],
    itinerary: [
      { day: 1, title: "Kathmandu Walking Tour", description: "Meet at designated point, explore local markets, visit hidden temples, learn about local culture and history" }
    ],
    maxGroupSize: 15,
    included: ["Knowledgeable local guide"],
    excluded: ["Transportation", "Temple entry fees", "Meals and drinks", "Personal expenses"],
    cancellationPolicy: "Free cancellation up to 2 hours before departure.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["Comfortable walking shoes", "Weather-appropriate clothing"],
    permits: [],
    equipment: [],
    entryRequirements: []
  },
  {
    id: "2",
    title: "Kapan Gumba, Bouddhanath and Pashupatinath Tour", 
    location: "Kathmandu, Nepal",
    duration: "5-6 hours",
    rating: 4.8,
    reviewCount: 234,
    price: 35,
    excerpt: "Spiritual journey through Nepal's most sacred sites",
    description: "Experience the spiritual heart of Nepal on this tour of three significant religious sites. Visit the peaceful Kapan Monastery where monks study and meditate, then explore the magnificent Bouddhanath Stupa - one of the largest spherical stupas in Nepal. Finally, witness the ancient rituals at Pashupatinath Temple, one of the most sacred Hindu temples dedicated to Lord Shiva.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Spiritual", "Cultural", "Half Day"],
    highlights: ["Kapan Monastery", "Bouddhanath Stupa", "Pashupatinath Temple"],
    includes: ["Professional guide", "Transportation", "Entry fees"],
    excludes: ["Meals", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Spiritual Tour", description: "Hotel pickup, visit Kapan Monastery, explore Bouddhanath Stupa, witness rituals at Pashupatinath, return to hotel" }
    ],
    maxGroupSize: 8,
    included: ["Expert local guide", "Private transportation", "All entry fees", "Bottled water"],
    excluded: ["Meals", "Personal expenses", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["Comfortable walking shoes"],
    permits: [],
    equipment: [],
    entryRequirements: []
  },
  {
    id: "3",
    title: "Patan Durbar Square, Pashupatinath, Boudhanath Day Tour",
    location: "Kathmandu Valley, Nepal",
    duration: "7-8 hours",
    rating: 4.9,
    reviewCount: 189,
    price: 55,
    excerpt: "UNESCO World Heritage sites exploration",
    description: "Discover three UNESCO World Heritage Sites in a single day. Begin at Patan Durbar Square, renowned for its exquisite Newari architecture and ancient palaces. Then visit the sacred Pashupatinath Temple complex where Hindu cremation ceremonies take place along the Bagmati River. End your day at the magnificent Boudhanath Stupa, the center of Tibetan Buddhism in Nepal.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["UNESCO", "Cultural", "Full Day"],
    highlights: ["Patan Durbar Square", "Pashupatinath Temple", "Boudhanath Stupa"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "UNESCO Heritage Tour", description: "Hotel pickup, explore Patan Durbar Square, visit Pashupatinath Temple, lunch break, tour Boudhanath Stupa, return to hotel" }
    ],
    maxGroupSize: 6,
    included: ["Knowledgeable guide", "Private vehicle", "All entry fees", "Traditional lunch", "Bottled water"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["Comfortable walking shoes"],
    permits: [],
    equipment: [],
    entryRequirements: []
  },
  {
    id: "4",
    title: "Bhaktapur and Changunarayan Cultural Tour",
    location: "Bhaktapur, Nepal",
    duration: "6-7 hours",
    rating: 4.7,
    reviewCount: 156,
    price: 45,
    excerpt: "Medieval city and ancient temple exploration",
    description: "Step back in time in Bhaktapur, the best-preserved medieval city in Nepal. Wander through cobblestone streets, admire intricate woodcarvings, and visit ancient temples. Continue to Changunarayan Temple, the oldest temple in the Kathmandu Valley, featuring exquisite stone and wood carvings.",
    image: "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?w=800&h=600&fit=crop"
    ],
    tags: ["UNESCO", "Medieval", "Cultural"],
    highlights: ["Bhaktapur Durbar Square", "Pottery Square", "Changunarayan Temple"],
    includes: ["Guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal shopping", "Additional snacks"],
    itinerary: [
      { day: 1, title: "Bhaktapur Exploration", description: "Hotel pickup, explore Bhaktapur's medieval architecture, visit pottery workshops, tour Changunarayan Temple, return" }
    ],
    maxGroupSize: 8,
    included: ["Cultural guide", "Transport", "All fees", "Lunch"],
    excluded: ["Souvenirs", "Extra food"],
    cancellationPolicy: "24-hour cancellation policy applies.",
    isPopular: true,
    isSoldOut: true,
    difficulty: "easy",
    maxAltitude: "1,401m",
    requirements: ["Comfortable shoes"],
    permits: [],
    equipment: [],
    entryRequirements: []
  },
  {
    id: "5",
    title: "Swayambhunath and Kathmandu Durbar Square",
    location: "Kathmandu, Nepal",
    duration: "4-5 hours",
    rating: 4.6,
    reviewCount: 278,
    price: 30,
    excerpt: "Monkey Temple and royal palace discovery",
    description: "Visit two of Kathmandu's most iconic landmarks. Climb the 365 steps to Swayambhunath Stupa (Monkey Temple) for panoramic city views and spiritual ambiance. Then explore Kathmandu Durbar Square with its ancient temples, palaces, and living goddess Kumari.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    tags: ["Iconic", "Historical", "Half Day"],
    highlights: ["Swayambhunath Stupa", "Monkey Temple", "Kathmandu Durbar Square", "Kumari Temple"],
    includes: ["Guide", "Entry fees", "Transportation"],
    excludes: ["Meals", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Iconic Landmarks", description: "Hotel pickup, climb to Swayambhunath, explore temples, visit Durbar Square, see Kumari Temple, return" }
    ],
    maxGroupSize: 10,
    included: ["Expert guide", "All entry fees", "Transport"],
    excluded: ["Food and drinks", "Shopping"],
    cancellationPolicy: "Flexible cancellation policy.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["Comfortable walking shoes"],
    permits: [],
    equipment: [],
    entryRequirements: []
  }
];

export default function DaySightseeingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
      <Hero 
        title="Kathmandu Cultural Tours"
        description="Discover the rich heritage of the Kathmandu Valley with our curated cultural tours. Explore ancient temples, medieval palaces, and vibrant local traditions with expert guides."
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

      {/* Additional sections can be added here */}
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