"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock package sightseeing tours data
const PACKAGE_SIGHTSEEING_TOURS: Tour[] = [
  {
    id: "1",
    title: "Nepal Temples and Stupas Tour",
    location: "Kathmandu Valley, Nepal",
    duration: "5 days / 4 nights",
    rating: 4.8,
    reviewCount: 342,
    price: 650,
    originalPrice: 720,
    excerpt: "Spiritual journey through Nepal's most sacred religious sites",
    description: "Immerse yourself in Nepal's rich spiritual heritage on this comprehensive tour of its most important temples and stupas. Visit ancient Hindu temples, Buddhist stupas, and sacred sites that have been pilgrimage destinations for centuries. Experience daily rituals, learn about religious practices, and gain deep insights into Nepal's unique blend of Hinduism and Buddhism.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Spiritual", "Cultural", "Religious Sites"],
    highlights: ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Dakshinkali Temple"],
    includes: ["Accommodation", "All meals", "Expert guide", "Transportation", "Entry fees"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport pickup, hotel check-in, orientation, welcome dinner" },
      { day: 2, title: "Kathmandu Sacred Sites", description: "Visit Pashupatinath Temple, Boudhanath Stupa, and Guheshwori Temple" },
      { day: 3, title: "Ancient Stupas and Shrines", description: "Explore Swayambhunath, Dakshinkali Temple, and Chobhar Gorge" },
      { day: 4, title: "Patan Religious Heritage", description: "Discover Patan's temples, monasteries, and spiritual sites" },
      { day: 5, title: "Departure", description: "Final temple visits, shopping for religious artifacts, airport transfer" }
    ],
    maxGroupSize: 12,
    included: ["4 nights accommodation in 3-star hotels", "All meals (4 breakfasts, 4 lunches, 4 dinners)", "Expert cultural guide", "Private transportation", "All temple entry fees", "Cultural performance"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 15 days before departure. 50% refund between 7-15 days. No refund within 7 days.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["No special requirements", "Suitable for all fitness levels"],
    permits: ["Heritage site entry permits"],
    equipment: ["Comfortable walking shoes", "Camera", "Sun protection"],
    entryRequirements: ["Valid passport", "Nepal visa"]
  },
  {
    id: "2",
    title: "Kathmandu Valley Heritage Tour",
    location: "Kathmandu Valley, Nepal",
    duration: "4 days / 3 nights",
    rating: 4.7,
    reviewCount: 278,
    price: 520,
    originalPrice: 580,
    excerpt: "Explore UNESCO World Heritage Sites in the Kathmandu Valley",
    description: "Discover the cultural treasures of the Kathmandu Valley, home to seven UNESCO World Heritage Sites. This comprehensive tour takes you through ancient royal cities, medieval architecture, and living traditions that have been preserved for centuries. Experience the rich Newari culture and witness the valley's incredible artistic heritage.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["UNESCO", "Heritage", "Cultural"],
    highlights: ["Kathmandu Durbar Square", "Patan Durbar Square", "Bhaktapur Durbar Square", "Traditional Newari architecture"],
    includes: ["Hotel accommodation", "Meals", "Guide", "Transport", "Entry fees"],
    excludes: ["International flights", "Personal shopping"],
    itinerary: [
      { day: 1, title: "Arrival and Kathmandu Exploration", description: "Airport arrival, hotel check-in, Kathmandu Durbar Square tour, Thamel exploration" },
      { day: 2, title: "Patan and Tibetan Culture", description: "Patan Durbar Square, Golden Temple, Tibetan refugee center, traditional crafts" },
      { day: 3, title: "Bhaktapur Medieval City", description: "Bhaktapur Durbar Square, pottery square, traditional Newari lunch, cultural walk" },
      { day: 4, title: "Departure", description: "Last-minute shopping, traditional breakfast, airport transfer" }
    ],
    maxGroupSize: 10,
    included: ["3 nights hotel accommodation", "All meals", "Expert heritage guide", "Private vehicle", "All UNESCO site entry fees"],
    excluded: ["International flights", "Visa fees", "Personal expenses"],
    cancellationPolicy: "10-day cancellation policy for heritage tours.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["Comfortable walking shoes"],
    permits: ["Heritage site permits"],
    equipment: ["Camera", "Comfortable clothing"],
    entryRequirements: ["Valid passport"]
  },
  {
    id: "3",
    title: "Nepal Family Adventure Tour",
    location: "Kathmandu and Pokhara, Nepal",
    duration: "7 days / 6 nights",
    rating: 4.9,
    reviewCount: 156,
    price: 890,
    originalPrice: 980,
    excerpt: "Family-friendly exploration of Nepal's highlights",
    description: "Perfect for families with children, this tour combines cultural experiences with fun activities suitable for all ages. Visit ancient sites, enjoy gentle nature walks, experience local traditions, and create unforgettable family memories in the heart of the Himalayas.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Family", "Adventure", "Cultural"],
    highlights: ["Child-friendly activities", "Pokhara lakeside", "Gentle hiking", "Cultural workshops"],
    includes: ["Family accommodations", "All meals", "Child-friendly guide", "Activities", "Transport"],
    excludes: ["International flights", "Childcare services"],
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", description: "Airport pickup, family hotel check-in, orientation, child-friendly dinner" },
      { day: 2, title: "Kathmandu Family Day", description: "Swayambhunath visit, children's museum, traditional puppet show" },
      { day: 3, title: "Travel to Pokhara", description: "Scenic drive to Pokhara, lakeside hotel check-in, boating on Phewa Lake" },
      { day: 4, title: "Pokhara Adventures", description: "Sarangkot sunrise, Peace Pagoda, Gupteshwor Cave, family hiking" },
      { day: 5, title: "Cultural Experiences", description: "Traditional cooking class, cultural dance, local market visit" },
      { day: 6, title: "Return to Kathmandu", description: "Morning activities in Pokhara, scenic drive back to Kathmandu" },
      { day: 7, title: "Departure", description: "Last-minute family photos, airport transfer" }
    ],
    maxGroupSize: 8,
    included: ["6 nights family accommodations", "All meals", "Child-friendly activities", "Private transportation", "All entry fees"],
    excluded: ["International flights", "Extra childcare", "Personal shopping"],
    cancellationPolicy: "Flexible family cancellation policy available.",
    isPopular: true,
    isSoldOut: true,
    difficulty: "easy",
    maxAltitude: "1,400m",
    requirements: ["Children must be accompanied"],
    permits: ["Standard tourist permits"],
    equipment: ["Family camera", "Comfortable shoes"],
    entryRequirements: ["Passports for all family members"]
  },
  {
    id: "4",
    title: "Nepal Photography Tour",
    location: "Kathmandu, Pokhara, Nagarkot",
    duration: "8 days / 7 nights",
    rating: 4.8,
    reviewCount: 89,
    price: 1250,
    excerpt: "Capture Nepal's beauty with expert photography guidance",
    description: "Designed for photography enthusiasts, this tour takes you to the most photogenic locations in Nepal at the best times for lighting. Receive expert guidance from professional photographers while capturing stunning landscapes, cultural moments, and daily life in this beautiful Himalayan nation.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    tags: ["Photography", "Landscape", "Cultural"],
    highlights: ["Golden hour photography", "Professional guidance", "Iconic locations", "Photo editing workshop"],
    includes: ["Photography guide", "Accommodation", "Transport", "Meals", "Workshops"],
    excludes: ["Camera equipment", "International flights"],
    itinerary: [
      { day: 1, title: "Arrival and Orientation", description: "Airport pickup, hotel check-in, photography equipment check, orientation session" },
      { day: 2, title: "Kathmandu Cultural Photography", description: "Early morning at Boudhanath, Patan Durbar Square, local markets, evening review" },
      { day: 3, title: "Temples and People", description: "Pashupatinath rituals, Swayambhunath sunset, street photography workshop" },
      { day: 4, title: "Travel to Nagarkot", description: "Morning travel to Nagarkot, Himalayan sunset photography, night photography" },
      { day: 5, title: "Nagarkot to Pokhara", description: "Sunrise over Himalayas, travel to Pokhara, Phewa Lake golden hour" },
      { day: 6, title: "Pokhara Landscapes", description: "Sarangkot sunrise, Peace Pagoda, waterfall photography, editing workshop" },
      { day: 7, title: "Return to Kathmandu", description: "Morning Pokhara photography, return to Kathmandu, final review session" },
      { day: 8, title: "Departure", description: "Last photo opportunities, airport transfer" }
    ],
    maxGroupSize: 6,
    included: ["Professional photography guide", "7 nights accommodation", "All meals", "Private transportation", "Photo workshops", "Location fees"],
    excluded: ["Camera equipment", "International flights", "Personal insurance"],
    cancellationPolicy: "14-day cancellation for photography tours.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "2,175m",
    requirements: ["Basic photography knowledge", "Own camera equipment"],
    permits: ["Standard permits"],
    equipment: ["Camera with multiple lenses", "Tripod", "Extra memory cards"],
    entryRequirements: ["Valid passport"]
  }
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load package sightseeing tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(PACKAGE_SIGHTSEEING_TOURS);
      } catch (err) {
        console.error("Error loading package tours:", err);
        setTours(PACKAGE_SIGHTSEEING_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading package tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Package Sightseeing Tours"
        description="Discover the diverse beauty of Nepal with our carefully curated package tours. From cultural heritage sites and spiritual journeys to family adventures and photography expeditions, we offer comprehensive experiences that showcase the best of Nepal's treasures."
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
              <p className="text-muted-foreground">No sightseeing tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Package Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Itineraries</h3>
              <p className="text-muted-foreground">
                Our tours are carefully designed to include all must-see attractions with optimal timing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Knowledgeable guides provide deep insights into culture, history, and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Hassle-Free Experience</h3>
              <p className="text-muted-foreground">
                We handle all logistics, accommodations, transportation, and entry arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tour Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">By Duration</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Short Tours (4-5 days):</strong> Perfect for limited time
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Standard Tours (7-9 days):</strong> Comprehensive experiences
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Extended Tours (10+ days):</strong> In-depth exploration
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Customizable:</strong> Tailored to your preferences
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">By Interest</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Cultural & Heritage:</strong> Temples, palaces, UNESCO sites
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Family Friendly:</strong> Activities for all ages
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Photography:</strong> Designed for capturing best shots
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Comprehensive:</strong> Combining multiple experiences
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