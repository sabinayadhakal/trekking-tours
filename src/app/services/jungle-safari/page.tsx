"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock jungle safari tours data
const JUNGLE_SAFARI_TOURS: Tour[] = [
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
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy to moderate",
    requirements: ["Comfortable walking shoes", "Binoculars recommended"],
    equipment: ["Light clothing", "Sunscreen", "Insect repellent", "Camera"],
    entryRequirements: ["Valid identification"]
  },
  {
    id: "2",
    title: "Bardia Wildlife Adventure Safari",
    location: "Bardia National Park, Nepal",
    duration: "4 days / 3 nights",
    rating: 4.7,
    reviewCount: 156,
    price: 420,
    originalPrice: 480,
    excerpt: "Remote wilderness experience in Western Nepal",
    description: "Explore Bardia National Park, one of Nepal's most pristine and least-visited wildlife reserves. This remote park offers excellent opportunities to spot tigers, wild elephants, and Gangetic dolphins in a more exclusive setting away from the crowds.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Wildlife", "Adventure", "Remote"],
    highlights: ["Tiger tracking", "Elephant sightings", "River dolphin watching", "Jungle drives"],
    includes: ["Lodge accommodation", "All meals", "Expert tracker", "Park fees"],
    excludes: ["Transport to Bardia", "Personal items"],
    itinerary: [
      { day: 1, title: "Arrival and Orientation", description: "Arrive in Bardia, afternoon jungle walk, evening presentation" },
      { day: 2, title: "Full Day Wildlife Tracking", description: "Morning elephant safari, afternoon jungle drive, evening crocodile spotting" },
      { day: 3, title: "River and Village Exploration", description: "River rafting for dolphin watching, Tharu village visit, cultural evening" },
      { day: 4, title: "Departure", description: "Early bird watching, breakfast, departure" }
    ],
    maxGroupSize: 8,
    included: ["3 nights jungle lodge", "All meals", "Wildlife activities", "Park fees", "Expert guide"],
    excluded: ["Transportation", "Alcohol", "Personal shopping"],
    cancellationPolicy: "10-day cancellation policy for remote area bookings.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "moderate",
    requirements: ["Good fitness", "Patience for wildlife viewing"],
    equipment: ["Neutral colored clothing", "Binoculars", "Camera"],
    entryRequirements: ["ID required"]
  },
  {
    id: "3",
    title: "Chitwan Luxury Safari Experience",
    location: "Chitwan National Park, Nepal",
    duration: "2 days / 1 night",
    rating: 4.9,
    reviewCount: 89,
    price: 450,
    excerpt: "Premium wildlife experience with luxury accommodation",
    description: "Indulge in a luxury safari experience at Chitwan's finest jungle resort. Enjoy premium accommodations, gourmet dining, and exclusive wildlife activities including private elephant safaris and guided nature walks with expert naturalists.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Luxury", "Wildlife", "Premium"],
    highlights: ["Luxury resort stay", "Private elephant safari", "Gourmet dining", "Spa treatments"],
    includes: ["Luxury accommodation", "Gourmet meals", "Private guide", "Spa access"],
    excludes: ["Transport", "Premium beverages", "Personal services"],
    itinerary: [
      { day: 1, title: "Arrival and Premium Safari", description: "Luxury transfer, welcome drinks, private elephant safari, gourmet dinner" },
      { day: 2, title: "Morning Activities and Departure", description: "Sunrise bird watching, breakfast, nature walk with naturalist, departure" }
    ],
    maxGroupSize: 6,
    included: ["Luxury suite", "Gourmet meals", "Private activities", "Spa access"],
    excluded: ["Premium alcohol", "Personal purchases"],
    cancellationPolicy: "14-day cancellation for luxury bookings.",
    isPopular: true,
    isSoldOut: true,
    difficulty: "easy",
    requirements: ["None"],
    equipment: ["Casual elegant wear", "Camera"],
    entryRequirements: ["None"]
  },
  {
    id: "4",
    title: "Family Jungle Safari Package",
    location: "Chitwan National Park, Nepal",
    duration: "3 days / 2 nights",
    rating: 4.8,
    reviewCount: 234,
    price: 680,
    originalPrice: 750,
    excerpt: "Family-friendly wildlife adventure with child-focused activities",
    description: "Specially designed for families with children, this safari package offers safe and engaging wildlife experiences. Includes child-friendly activities, educational programs, and accommodations perfect for families exploring the jungle together.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    tags: ["Family", "Educational", "Wildlife"],
    highlights: ["Child-friendly activities", "Elephant breeding center", "Nature crafts", "Family accommodations"],
    includes: ["Family room", "All meals", "Child activities", "Park fees"],
    excludes: ["Transport", "Childcare", "Personal items"],
    itinerary: [
      { day: 1, title: "Family Arrival and Orientation", description: "Arrival, lunch, elephant breeding center visit, evening cultural show" },
      { day: 2, title: "Family Safari Day", description: "Gentle elephant safari, nature crafts, canoe ride, wildlife documentary" },
      { day: 3, title: "Departure", description: "Bird watching, breakfast, departure" }
    ],
    maxGroupSize: 10,
    included: ["Family accommodations", "All meals", "Child-focused activities", "Educational materials"],
    excluded: ["Transportation", "Extra childcare"],
    cancellationPolicy: "Flexible family cancellation policy.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    requirements: ["Children must be accompanied"],
    equipment: ["Comfortable family gear", "Child binoculars"],
    entryRequirements: ["None"]
  }
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
      <Hero 
        title="Chitwan Jungle Safari Experiences"
        description="Discover the wild heart of Nepal at Chitwan National Park, a UNESCO World Heritage Site. Encounter rare wildlife including one-horned rhinoceros, Bengal tigers, and over 500 bird species in their natural habitat."
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