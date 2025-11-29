"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";


const DAY_HIKING_TOURS: Tour[] = 
  [
  {
    id: "1",
    title: "Sundarijal to Chisapani Day Hiking",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.7,
    reviewCount: 142,
    price: 40,
    originalPrice: 50,
    excerpt: "Forest hike through Shivapuri National Park with scenic valley and mountain views",
    description: "A classic hiking route near Kathmandu, the Sundarijal to Chisapani trail leads you through lush forests, waterfalls, and traditional Tamang villages inside Shivapuri Nagarjun National Park. Perfect for nature lovers seeking a refreshing full-day trek.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Nature", "Moderate"],
    highlights: ["Waterfalls and forests", "National Park trail", "Village walk"],
    includes: ["Guide", "National Park entry", "Lunch", "Transportation"],
    excludes: ["Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Sundarijal to Chisapani", description: "Start at Sundarijal, hike through forests and villages to Chisapani, enjoy views, return to Kathmandu" }
    ],
    maxGroupSize: 10,
    included: ["Guide", "Park permits", "Lunch", "Transport"],
    excluded: ["Personal items", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 24 hours before.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "2,215m (Chisapani)",
    requirements: ["Moderate fitness", "Comfort walking for 5–6 hours"],
    permits: ["National Park Permit"],
    equipment: ["Hiking shoes", "Water bottle", "Sun protection", "Light jacket"],
    entryRequirements: ["None"]
  },

  {
    id: "2",
    title: "Namobuddha Day Hiking",
    location: "Kavre, Nepal",
    duration: "1 day",
    rating: 4.8,
    reviewCount: 120,
    price: 35,
    originalPrice: 45,
    excerpt: "Peaceful cultural hike to one of Buddhism’s holiest pilgrimage sites",
    description: "A serene day hike offering lush forest trails, rural landscapes, and a peaceful arrival at the sacred Namobuddha Monastery. Perfect for hikers seeking a cultural and nature-filled day outside the city.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Cultural", "Easy"],
    highlights: ["Thrangu Tashi Yangtse Monastery", "Village paths", "Peaceful forest walk"],
    includes: ["Guide", "Transportation", "Lunch"],
    excludes: ["Monastery donations", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Namobuddha Trail", description: "Drive to Dhulikhel, hike through villages to Namobuddha Monastery, explore the site, return to Kathmandu" }
    ],
    maxGroupSize: 12,
    included: ["Guide", "Lunch", "Transport"],
    excluded: ["Personal items", "Donations"],
    cancellationPolicy: "48-hour free cancellation.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,750m",
    requirements: ["Basic fitness"],
    permits: ["None"],
    equipment: ["Walking shoes", "Water", "Sunhat"],
    entryRequirements: ["None"]
  },

  {
    id: "3",
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
    id: "4",
    title: "Rupakot Day Hiking",
    location: "Kaski, Nepal",
    duration: "1 day",
    rating: 4.6,
    reviewCount: 74,
    price: 55,
    originalPrice: 65,
    excerpt: "A peaceful hike with stunning views of Begnas & Rupa Lakes and the Annapurna range",
    description: "This scenic hike takes you through quiet forests and villages to the beautiful hilltop of Rupakot. With panoramic lake views and the Annapurna Himalayas in the background, it’s one of Pokhara’s best lesser-known day hikes.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Scenic", "Easy"],
    highlights: ["Rupa & Begnas Lakes", "Annapurna views", "Peaceful forest trails"],
    includes: ["Guide", "Transportation", "Lunch"],
    excludes: ["Personal expenses"],
    itinerary: [
      { day: 1, title: "Rupakot Ridge Hike", description: "Drive to Begnas area, hike to Rupakot viewpoint, explore the ridge, lunch, hike down and return" }
    ],
    maxGroupSize: 10,
    included: ["Guide", "Lunch", "Transport"],
    excluded: ["Personal items"],
    cancellationPolicy: "Free cancellation 24 hours before.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,320m",
    requirements: ["Basic fitness"],
    permits: ["None"],
    equipment: ["Comfortable shoes", "Hat", "Water bottle"],
    entryRequirements: ["None"]
  },

  {
    id: "5",
    title: "Champadevi Day Hiking",
    location: "Kathmandu Valley, Nepal",
    duration: "1 day",
    rating: 4.7,
    reviewCount: 101,
    price: 35,
    excerpt: "A rewarding ridge hike with wide Himalayan and valley views",
    description: "Champadevi is one of the most scenic ridge walks around Kathmandu. The trail passes forests, local shrines, and offers incredible views of the Langtang, Ganesh, and Annapurna ranges.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Scenic", "Moderate"],
    highlights: ["Ridge trail", "Valley & mountain views", "Sacred hilltop"],
    includes: ["Guide", "Lunch", "Transport"],
    excludes: ["Personal expenses"],
    itinerary: [
      { day: 1, title: "Champadevi Summit", description: "Drive to Hattiban, ascend through forest to ridge, summit Champadevi, enjoy views, return to Kathmandu" }
    ],
    maxGroupSize: 10,
    included: ["Guide", "Packed lunch", "Transport"],
    excluded: ["Personal items"],
    cancellationPolicy: "Free cancellation up to 24 hours.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "moderate",
    maxAltitude: "2,278m",
    requirements: ["Good fitness"],
    permits: ["None"],
    equipment: ["Hiking shoes", "Snacks", "Water"],
    entryRequirements: ["None"]
  },

  {
    id: "6",
    title: "Balthali Village Day Hiking",
    location: "Kavre, Nepal",
    duration: "1 day",
    rating: 4.6,
    reviewCount: 85,
    price: 40,
    originalPrice: 50,
    excerpt: "A peaceful countryside hike through terraced fields and traditional villages",
    description: "Balthali Village offers one of the most relaxing day hikes near Kathmandu, featuring terraced farmland, forest trails, and a glimpse into rural Nepali lifestyle. Ideal for travelers seeking an easy, culture-rich walk.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop"
    ],
    tags: ["Day Hike", "Cultural", "Easy"],
    highlights: ["Village lifestyle", "Terraced landscapes", "Countryside peace"],
    includes: ["Guide", "Lunch", "Transport"],
    excludes: ["Personal expenses"],
    itinerary: [
      { day: 1, title: "Balthali Village", description: "Drive to Khopasi, hike through villages to Balthali, enjoy lunch and scenery, return via rural trails" }
    ],
    maxGroupSize: 12,
    included: ["Guide", "Lunch", "Transport"],
    excluded: ["Personal items"],
    cancellationPolicy: "Free cancellation 24 hours before.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,600m",
    requirements: ["Basic fitness"],
    permits: ["None"],
    equipment: ["Walking shoes", "Hat", "Water bottle"],
    entryRequirements: ["None"]
  },

  {
    id: "7",
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
  }

];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for day hiking
  const heroImage = "/images/day-hiking-hero.jpg"; // Change this to your desired image path

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
      {/* Updated Hero section with image for day hiking */}
      <Hero 
        title="Nepal Day Hiking Adventures"
        description="Experience the beauty of the Kathmandu Valley with our curated day hiking tours. Discover traditional villages, sacred sites, and breathtaking Himalayan views just hours from the city."
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
              <p className="text-muted-foreground">No day hiking tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections remain the same */}
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