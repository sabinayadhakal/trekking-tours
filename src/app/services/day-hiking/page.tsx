"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock day hiking tours data
const DAY_HIKING_TOURS: Tour[] = [
  {
    id: "1",
    title: "Nagarkot to Changunarayan Day Hiking",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.8,
    reviewCount: 156,
    price: 45,
    originalPrice: 55,
    excerpt: "Scenic hike through traditional villages with panoramic Himalayan views",
    description: "Experience one of the most popular day hikes in the Kathmandu Valley, offering breathtaking views of the Himalayas and a journey through traditional Nepali villages. The trail takes you from Nagarkot, famous for its sunrise views, to the ancient temple of Changunarayan, a UNESCO World Heritage Site.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Cultural", "Moderate"],
    highlights: ["Panoramic Himalayan views", "Traditional villages", "UNESCO Heritage Site"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Nagarkot to Changunarayan", description: "Early morning drive to Nagarkot, hike through villages and forests to Changunarayan Temple, return to Kathmandu" }
    ],
    maxGroupSize: 8,
    included: ["Professional hiking guide", "Private transportation", "All entry fees", "Packed lunch", "First aid kit"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "2,175m (Nagarkot)",
    requirements: ["Moderate fitness level", "Comfortable walking shoes"],
    permits: ["None required"],
    equipment: ["Day pack", "Water bottle", "Sun protection", "Comfortable shoes"],
    entryRequirements: ["None for day hikes"]
  },
  {
    id: "2",
    title: "Shivapuri Day Hike",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.6,
    reviewCount: 89,
    price: 35,
    originalPrice: 45,
    excerpt: "Forest hike to the second highest peak around Kathmandu Valley",
    description: "Explore the Shivapuri Nagarjun National Park on this rewarding day hike. Trek through pristine forests, spot diverse birdlife, and reach the summit of Shivapuri Peak for spectacular views of the Kathmandu Valley and Himalayan ranges.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Nature", "Challenging"],
    highlights: ["Shivapuri National Park", "Diverse wildlife", "360-degree mountain views"],
    includes: ["Expert naturalist guide", "National park fees", "Lunch", "Transportation"],
    excludes: ["Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Shivapuri Summit", description: "Drive to trailhead, hike through rhododendron forests to Shivapuri summit, picnic lunch with mountain views" }
    ],
    maxGroupSize: 6,
    included: ["Naturalist guide", "National park entry", "Lunch", "Transport"],
    excluded: ["Personal items", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 48 hours before hike.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "challenging",
    maxAltitude: "2,732m",
    requirements: ["Good physical fitness", "Hiking experience"],
    permits: ["National Park Permit"],
    equipment: ["Hiking boots", "Rain jacket", "Water", "Camera"],
    entryRequirements: ["None"]
  },
  {
    id: "3",
    title: "Phulchowki Day Hike",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.5,
    reviewCount: 67,
    price: 40,
    excerpt: "Highest peak around Kathmandu with rich biodiversity",
    description: "Conquer Phulchowki, the highest hill surrounding Kathmandu Valley. This hike takes you through dense forests teeming with birdlife and offers magnificent panoramic views from the summit.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Bird Watching", "Moderate"],
    highlights: ["Highest valley viewpoint", "Bird watching paradise", "Mountain panoramas"],
    includes: ["Bird watching guide", "Transport", "Lunch", "Entry fees"],
    excludes: ["Binoculars", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Phulchowki Summit", description: "Early start for bird watching, gradual ascent to summit, lunch with views, return via different trail" }
    ],
    maxGroupSize: 8,
    included: ["Specialist guide", "All fees", "Lunch", "Transport"],
    excluded: ["Optical equipment", "Personal items"],
    cancellationPolicy: "24-hour cancellation policy.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "2,782m",
    requirements: ["Moderate fitness", "Interest in nature"],
    permits: ["None"],
    equipment: ["Walking shoes", "Binoculars", "Layers"],
    entryRequirements: ["None"]
  },
  {
    id: "4",
    title: "Chandragiri Hills Day Hike",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.7,
    reviewCount: 124,
    price: 50,
    originalPrice: 60,
    excerpt: "Scenic hike with cable car option and stunning Himalayan views",
    description: "Hike to Chandragiri Hills for some of the best Himalayan views accessible from Kathmandu. Visit the famous Bhaleshwar Mahadev Temple and enjoy the breathtaking scenery of the entire Himalayan range.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Scenic", "Easy"],
    highlights: ["Cable car experience", "Bhaleshwar Temple", "Himalayan panorama"],
    includes: ["Guide", "Cable car ticket", "Lunch", "Transport"],
    excludes: ["Personal shopping", "Additional activities"],
    itinerary: [
      { day: 1, title: "Chandragiri Exploration", description: "Drive to base, optional hike or cable car ascent, temple visit, lunch with views, leisurely descent" }
    ],
    maxGroupSize: 10,
    included: ["Guide", "Cable car", "Lunch", "Transport"],
    excluded: ["Personal purchases", "Extra activities"],
    cancellationPolicy: "Flexible cancellation up to 12 hours before.",
    isPopular: true,
    isSoldOut: true,
    difficulty: "easy",
    maxAltitude: "2,551m",
    requirements: ["Basic fitness", "Suitable for families"],
    permits: ["None"],
    equipment: ["Comfortable shoes", "Camera", "Light jacket"],
    entryRequirements: ["None"]
  }
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load day hiking tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(DAY_HIKING_TOURS);
      } catch (err) {
        console.error("Error loading day hiking tours:", err);
        setTours(DAY_HIKING_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading day hiking tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Day Hiking Adventures"
        description="Experience the beauty of the Kathmandu Valley with our curated day hiking tours. Discover traditional villages, sacred sites, and breathtaking Himalayan views just hours from the city."
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
              <p className="text-muted-foreground">No day hiking tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Day Hikes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Local Expert Guides</h3>
              <p className="text-muted-foreground">
                Our knowledgeable Nepali guides share insights into culture, history, and nature.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Enjoy personalized attention with small group sizes for a better experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle transportation, meals, and fees so you can focus on enjoying the hike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Day Hike Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">Easy</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Hikes</h3>
              <p className="text-muted-foreground">2-4 hours, gentle terrain, suitable for all fitness levels</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">Moderate</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moderate Hikes</h3>
              <p className="text-muted-foreground">4-6 hours, some elevation gain, basic fitness recommended</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">Challenging</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenging Hikes</h3>
              <p className="text-muted-foreground">6-8 hours, significant elevation, good fitness required</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">Scenic</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scenic Hikes</h3>
              <p className="text-muted-foreground">Focus on photography and cultural experiences with moderate walking</p>
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