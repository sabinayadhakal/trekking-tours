"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock peak climbing tours data
const PEAK_CLIMBING_TOURS: Tour[] = [
  {
    id: "1",
    title: "Mera Peak Climb",
    location: "Nepal",
    duration: "18 days",
    rating: 4.9,
    reviewCount: 210,
    price: 4500,
    originalPrice: 5000,
    excerpt: "Climb the highest trekking peak in Nepal with panoramic Himalayan views.",
    description: "Mera Peak (6476m) offers an exhilarating trekking peak experience with incredible views of Everest, Kanchenjunga, Makalu, and Cho Oyu. Ideal for adventurers looking for high-altitude trekking with moderate climbing.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Mera Peak", "Peak Climbing", "Adventure", "Nepal"],
    highlights: [
      "Summit of Mera Peak (6476m)",
      "Panoramic Himalayan views",
      "High-altitude trekking",
      "Sherpa culture experience",
      "Glacier and snow climbing"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay and briefing." },
      { day: 2, title: "Fly to Lukla & Trek to Paiya", description: "Start of trek through forested trails." },
      { day: 3, title: "Trek to Chutok", description: "Scenic trekking through villages." },
      { day: 4, title: "Trek to Thuli Kharka", description: "Gradual ascent and acclimatization." },
      { day: 5, title: "Trek to Khare", description: "Approach to Mera Peak base." },
      { day: 6, title: "Acclimatization & Preparation", description: "Local exploration and climbing prep." },
      { day: 7, title: "Mera Peak Summit Day", description: "Early morning ascent, return to Khare." },
      { day: 8, title: "Descend to Lukla", description: "Return trek through beautiful valleys." },
      { day: 9, title: "Fly back to Kathmandu", description: "Celebrate summit success." }
    ],
    maxGroupSize: 6,
    cancellationPolicy: "Full refund if canceled 45 days before departure.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "6,476m",
    requirements: ["Excellent fitness", "High-altitude trekking experience", "Acclimatization"],
    permits: ["Mera Peak Climbing Permit", "TIMS Card"],
    equipment: ["Climbing boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  },
  {
    id: "2",
    title: "Island Peak Climb",
    location: "Everest Region, Nepal",
    duration: "16 days",
    rating: 4.8,
    reviewCount: 189,
    price: 3800,
    originalPrice: 4200,
    excerpt: "Popular climbing peak with spectacular views of Everest and Lhotse.",
    description: "Island Peak (6189m) is one of Nepal's most popular climbing peaks, offering a perfect introduction to Himalayan mountaineering. The climb involves glacier travel and a steep snow slope to the summit with breathtaking views of the Everest region.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop"
    ],
    tags: ["Island Peak", "Everest Region", "Mountaineering"],
    highlights: [
      "Summit Island Peak (6189m)",
      "Everest region views",
      "Glacier training",
      "Ice climbing experience"
    ],
    includes: ["Climbing guide", "All meals", "Teahouse accommodation", "Climbing permits"],
    excludes: ["International flights", "Personal gear", "Insurance"],
    included: ["Expert climbing guide", "All meals during trek", "Teahouse accommodation", "Climbing permits and fees"],
    excluded: ["International flights", "Personal climbing gear", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", description: "Welcome and expedition briefing" },
      { day: 2, title: "Fly to Lukla, Trek to Phakding", description: "Scenic flight and start of Everest trek" },
      { day: 3, title: "Trek to Namche Bazaar", description: "Acclimatization in Sherpa capital" },
      { day: 4, title: "Acclimatization Day", description: "Hike to Everest View Hotel" },
      { day: 5, title: "Trek to Tengboche", description: "Visit famous monastery" },
      { day: 6, title: "Trek to Dingboche", description: "Enter high altitude region" },
      { day: 7, title: "Acclimatization", description: "Hike to Nagarjun Hill" },
      { day: 8, title: "Trek to Chhukung", description: "Approach to Island Peak" },
      { day: 9, title: "Island Peak Base Camp", description: "Climbing training and preparation" },
      { day: 10, title: "Summit Day", description: "Early start for summit attempt" },
      { day: 11, title: "Contingency Day", description: "Extra day for weather or acclimatization" },
      { day: 12, title: "Return Trek", description: "Begin descent to lower villages" },
      { day: 13, title: "Trek to Namche", description: "Return through familiar trails" },
      { day: 14, title: "Trek to Lukla", description: "Final trekking day" },
      { day: 15, title: "Fly to Kathmandu", description: "Return to civilization" },
      { day: 16, title: "Departure", description: "Airport transfer" }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "45-day cancellation policy for climbing expeditions.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "challenging",
    maxAltitude: "6,189m",
    requirements: ["Good physical condition", "Basic climbing experience", "Altitude experience"],
    permits: ["Island Peak Permit", "Sagarmatha National Park Permit"],
    equipment: ["Mountaineering boots", "Ice axe", "Crampons", "Harness"],
    entryRequirements: ["Nepal visa", "Comprehensive insurance"]
  },
  {
    id: "3",
    title: "Lobuche East Peak",
    location: "Everest Region, Nepal",
    duration: "20 days",
    rating: 4.7,
    reviewCount: 95,
    price: 5200,
    excerpt: "Technical climb with spectacular views from Everest Base Camp.",
    description: "Lobuche East (6119m) offers a more technical climbing experience than Island Peak, with challenging rock and ice sections. The peak provides magnificent views of Everest, Lhotse, Nuptse, and Ama Dablam.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Lobuche Peak", "Technical Climb", "Everest"],
    highlights: [
      "Summit Lobuche East (6119m)",
      "Technical rock and ice climbing",
      "Everest Base Camp visit",
      "Advanced mountaineering experience"
    ],
    includes: ["Experienced guide", "Expedition meals", "Camping equipment", "Climbing permits"],
    excludes: ["Personal technical gear", "International flights"],
    included: ["Professional climbing guide", "All expedition meals", "Camping equipment", "All necessary permits"],
    excluded: ["Personal technical equipment", "International airfare"],
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", description: "Expedition briefing and preparation" },
      { day: 2, title: "Fly to Lukla", description: "Scenic mountain flight" },
      { day: 3, title: "Trek to Namche", description: "Acclimatization begin" },
      { day: 4, title: "Namche Acclimatization", description: "Altitude adjustment day" },
      { day: 5, title: "Trek to Tengboche", description: "Monastery visit" },
      { day: 6, title: "Trek to Dingboche", description: "High altitude approach" },
      { day: 7, title: "Acclimatization Hike", description: "Chhukung Valley exploration" },
      { day: 8, title: "Trek to Lobuche", description: "Approach to peak" },
      { day: 9, title: "Everest Base Camp", description: "Visit EBC and return" },
      { day: 10, title: "Lobuche High Camp", description: "Establish high camp" },
      { day: 11, title: "Summit Day", description: "Early morning summit attempt" },
      { day: 12, title: "Contingency Day", description: "Extra summit day if needed" },
      { day: 13, title: "Descend to Pheriche", description: "Return to lower altitude" },
      { day: 14, title: "Trek to Namche", description: "Continue descent" },
      { day: 15, title: "Trek to Lukla", description: "Final trekking day" },
      { day: 16, title: "Fly to Kathmandu", description: "Return flight" },
      { day: 17, title: "Kathmandu", description: "Celebration and rest" },
      { day: 18, title: "Departure", description: "Airport transfer" }
    ],
    maxGroupSize: 4,
    cancellationPolicy: "60-day cancellation for technical climbs.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "expert",
    maxAltitude: "6,119m",
    requirements: ["Advanced climbing skills", "Previous high altitude experience", "Excellent fitness"],
    permits: ["Lobuche Peak Permit", "National Park Permit"],
    equipment: ["Technical climbing gear", "Mountaineering equipment", "High-altitude clothing"],
    entryRequirements: ["Nepal visa", "Mountaineering insurance"]
  },
  {
    id: "4",
    title: "Pisang Peak Climb",
    location: "Annapurna Region, Nepal",
    duration: "17 days",
    rating: 4.6,
    reviewCount: 124,
    price: 3500,
    originalPrice: 3900,
    excerpt: "Beautiful pyramid peak in the Annapurna Circuit region.",
    description: "Pisang Peak (6091m) offers a classic Himalayan climbing experience in the stunning Annapurna region. The peak features a beautiful pyramid shape and provides spectacular views of Annapurna II, III, IV, and Gangapurna.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Pisang Peak", "Annapurna", "Classic Climb"],
    highlights: [
      "Summit Pisang Peak (6091m)",
      "Annapurna Circuit trek",
      "Pyramid peak climb",
      "Manang Valley views"
    ],
    includes: ["Climbing guide", "All meals", "Accommodation", "Annapurna permits"],
    excludes: ["Personal expenses", "International flights"],
    included: ["Experienced guide", "All meals on trek", "Teahouse and camping accommodation", "All required permits"],
    excluded: ["Personal climbing gear", "International travel"],
    itinerary: [
      { day: 1, title: "Kathmandu to Besisahar", description: "Drive to trek starting point" },
      { day: 2, title: "Trek to Bahundanda", description: "Begin Annapurna Circuit" },
      { day: 3, title: "Trek to Chamje", description: "Follow Marsyangdi River" },
      { day: 4, title: "Trek to Bagarchhap", description: "Enter Manang district" },
      { day: 5, title: "Trek to Chame", description: "District headquarters" },
      { day: 6, title: "Trek to Pisang", description: "Approach Pisang Peak" },
      { day: 7, title: "Acclimatization", description: "Local hikes and preparation" },
      { day: 8, title: "Pisang Peak Base Camp", description: "Establish base camp" },
      { day: 9, title: "High Camp", description: "Move to high camp" },
      { day: 10, title: "Summit Day", description: "Early morning summit attempt" },
      { day: 11, title: "Contingency Day", description: "Extra summit day" },
      { day: 12, title: "Return to Pisang", description: "Descend to village" },
      { day: 13, title: "Continue Circuit", description: "Trek to Manang" },
      { day: 14, title: "Cross Thorong La", description: "High pass crossing" },
      { day: 15, title: "Descend to Muktinath", description: "Sacred temple visit" },
      { day: 16, title: "Return to Pokhara", description: "Drive back through scenic route" },
      { day: 17, title: "Departure", description: "Airport transfer" }
    ],
    maxGroupSize: 6,
    cancellationPolicy: "30-day cancellation policy.",
    isPopular: true,
    isSoldOut: true,
    difficulty: "challenging",
    maxAltitude: "6,091m",
    requirements: ["Good climbing experience", "High altitude fitness", "Technical skills"],
    permits: ["Pisang Peak Permit", "ACAP Permit"],
    equipment: ["Climbing gear", "Cold weather equipment", "Trekking equipment"],
    entryRequirements: ["Nepal visa", "Adequate insurance"]
  }
];

export default function PeakClimbingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load peak climbing tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(PEAK_CLIMBING_TOURS);
      } catch (err) {
        console.error("Error loading peak climbing expeditions:", err);
        setTours(PEAK_CLIMBING_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading peak climbing expeditions...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Peak Climbing Expeditions"
        description="Challenge yourself with Nepal's iconic peaks. From moderate trekking peaks to high-altitude summits, experience adventure, culture, and the breathtaking Himalayas with expert guides."
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
              <p className="text-muted-foreground">No peak climbing expeditions available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Peak Expeditions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Experienced Guides</h3>
              <p className="text-muted-foreground">
                Certified mountaineering guides ensure safety and provide expert training.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Well-Planned Itineraries</h3>
              <p className="text-muted-foreground">
                Carefully designed schedules allow proper acclimatization and maximized summit success.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Full Support</h3>
              <p className="text-muted-foreground">
                Logistics, permits, equipment, and meals are handled so you can focus on climbing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Peak Climbing Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">Beginner</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginner Peaks</h3>
              <p className="text-muted-foreground">5,000-5,500m, basic climbing skills, good fitness required</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">Moderate</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moderate Peaks</h3>
              <p className="text-muted-foreground">5,500-6,000m, previous climbing experience, good fitness</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">Challenging</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenging Peaks</h3>
              <p className="text-muted-foreground">6,000-6,500m, technical climbing skills, excellent fitness</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">Expert</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Peaks</h3>
              <p className="text-muted-foreground">6,500m+, advanced mountaineering skills, expedition experience</p>
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