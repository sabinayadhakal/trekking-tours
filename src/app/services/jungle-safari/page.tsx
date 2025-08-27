"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Chitwan Jungle Safari tours data
const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    title: "Chitwan Classic Jungle Safari",
    location: "Chitwan National Park, Nepal",
    duration: "3 days / 2 nights",
    rating: 4.8,
    reviewCount: 423,
    price: 285,
    originalPrice: 325,
    excerpt: "Complete wildlife experience in Nepal's premier national park",
    description: "Immerse yourself in the wilderness of Chitwan National Park, a UNESCO World Heritage Site. This classic safari package offers diverse activities including jungle walks, canoe rides, elephant safaris, and cultural performances. Spot rare wildlife like one-horned rhinoceros, Bengal tigers, crocodiles, and over 500 species of birds in their natural habitat.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Wildlife", "Jungle Safari", "All Inclusive"],
    highlights: ["Elephant safari", "Jungle walk", "Canoe ride", "Tharu cultural show"],
    includes: ["Accommodation", "All meals", "Activities", "Park fees", "Guide"],
    excludes: ["Transportation to Chitwan", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival and Village Tour", description: "Arrive in Chitwan, lunch, visit Tharu village, sunset views, dinner, cultural program" },
      { day: 2, title: "Full Day Safari Activities", description: "Bird watching, elephant safari, jungle walk, canoe trip, wildlife spotting" },
      { day: 3, title: "Departure", description: "Early morning nature walk, breakfast, departure from Chitwan" }
    ],
    maxGroupSize: 12,
    included: ["2 nights accommodation in jungle lodge", "All meals (2 breakfasts, 2 lunches, 2 dinners)", "All safari activities with expert guides", "Chitwan National Park entry fees", "Cultural program attendance"],
    excluded: ["Transportation to/from Chitwan", "Alcoholic beverages", "Personal expenses", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
    isPopular: true
  },
  {
    id: "2",
    title: "Chitwan Premium Wildlife Experience", 
    location: "Chitwan National Park, Nepal",
    duration: "4 days / 3 nights",
    rating: 4.9,
    reviewCount: 287,
    price: 450,
    excerpt: "Luxury jungle retreat with exclusive wildlife viewing opportunities",
    description: "Experience Chitwan in style with our premium safari package. Stay in a luxury jungle resort with enhanced amenities while enjoying extended wildlife viewing opportunities. This package includes jeep safaris deep into the park, specialized bird watching tours, and visits to elephant breeding centers. Perfect for photography enthusiasts and those seeking a more comfortable jungle experience.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Luxury", "Wildlife", "Photography"],
    highlights: ["Jeep safari", "Luxury accommodation", "Elephant breeding center", "Bird watching"],
    includes: ["Luxury accommodation", "All meals", "Jeep safari", "Expert naturalist", "Park fees"],
    excludes: ["Transportation", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival and Orientation", description: "Arrive in Chitwan, welcome drink, lunch, orientation, sunset by the river, dinner" },
      { day: 2, title: "Deep Jungle Exploration", description: "Full day jeep safari, picnic lunch, wildlife photography, evening relaxation" },
      { day: 3, title: "Cultural and Conservation", description: "Bird watching, visit elephant breeding center, Tharu culture experience, farewell dinner" },
      { day: 4, title: "Departure", description: "Early morning nature walk, breakfast, departure from Chitwan" }
    ],
    maxGroupSize: 8,
    included: ["3 nights luxury accommodation", "All meals (3 breakfasts, 3 lunches, 3 dinners)", "Full day jeep safari with picnic", "Expert naturalist guide", "All park entry fees", "Elephant breeding center visit"],
    excluded: ["Transportation to/from Chitwan", "Alcoholic beverages", "Personal expenses", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 14 days before departure. 50% refund between 7-14 days. No refund within 7 days.",
    isPopular: true
  },
  {
    id: "3",
    title: "Chitwan Family Safari Adventure",
    location: "Chitwan National Park, Nepal",
    duration: "3 days / 2 nights",
    rating: 4.7,
    reviewCount: 196,
    price: 520,
    excerpt: "Family-friendly jungle experience with special activities for children",
    description: "Specially designed for families with children, this safari package offers a perfect blend of adventure and education. Child-friendly activities include elephant bathing, nature crafts, shorter jungle walks, and interactive sessions with naturalists. Safety is prioritized with experienced guides who specialize in family tours, making this an unforgettable experience for all ages.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Family", "Educational", "Adventure"],
    highlights: ["Elephant bathing", "Child-friendly activities", "Nature crafts", "Family guides"],
    includes: ["Family accommodation", "All meals", "Child-friendly activities", "Specialized guides", "Park fees"],
    excludes: ["Transportation", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival and Gentle Introduction", description: "Arrive in Chitwan, lunch, short nature walk, elephant interaction, dinner" },
      { day: 2, title: "Family Adventure Day", description: "Canoe ride, jungle activities for kids, elephant bathing, cultural show" },
      { day: 3, title: "Departure", description: "Bird watching, breakfast, nature craft session, departure" }
    ],
    maxGroupSize: 6,
    included: ["2 nights family accommodation", "All meals (2 breakfasts, 2 lunches, 2 dinners)", "All child-friendly activities", "Specialized family guide", "Chitwan National Park entry fees", "Elephant bathing experience"],
    excluded: ["Transportation to/from Chitwan", "Alcoholic beverages", "Personal expenses", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days."
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
        title="Chitwan Jungle Safari Experiences"
        description="Discover the wild heart of Nepal at Chitwan National Park, a UNESCO World Heritage Site. Encounter rare wildlife including one-horned rhinoceros, Bengal tigers, and over 500 bird species in their natural habitat."
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

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Chitwan Wildlife Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What You Might See</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  One-horned rhinoceros (population: ~600)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Bengal tiger (population: ~120)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Gharial and mugger crocodiles
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Over 500 species of birds
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Sloth bears, leopards, and deer species
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Best Time to Visit</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>October-November:</strong> Perfect weather, clear skies
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>December-February:</strong> Cool temperatures, good wildlife spotting
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>March-April:</strong> Spring blooms, bird migration
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Monsoon (June-September):</strong> Lush vegetation, fewer tourists
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