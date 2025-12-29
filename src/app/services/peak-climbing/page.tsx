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
    "id": "1",
    "title": "Mera Peak Climbing Expedition - 6476m Highest Trekking Peak Nepal",
    "location": "Hinku Valley, Nepal",
    "duration": "18 days",
    "rating": 4.9,
    "reviewCount": 210,
    "price": 4500,
    "originalPrice": 5000,
    "excerpt": "18-day Mera Peak climbing expedition to Nepal's highest trekking peak at 6476m with panoramic Everest views",
    "description": "Mera Peak climbing expedition to 6476m - the highest trekking peak in Nepal. Experience high-altitude mountaineering with panoramic Himalayan views of Everest, Kanchenjunga, Makalu, and Cho Oyu. Perfect introduction to Himalayan peak climbing in Nepal's Hinku Valley.",
    "image": "/images/mera_peak-1.jpg",
    "images": [
     
    ],
    "tags": ["Mera Peak Climbing", "Highest Trekking Peak", "Nepal Peak Climbing", "6476m Expedition", "Himalayan Mountaineering", "Everest View Trek"],
    "highlights": [
      "Summit Mera Peak (6476m) - Highest Trekking Peak",
      "Panoramic Views of 5 Eight-Thousanders",
      "High-Altitude Glacier Climbing",
      "Sherpa Culture Experience",
      "Lukla Flight Adventure"
    ],
    "includes": ["Experienced Climbing Guide", "All Meals on Trek", "Teahouse & Camp Accommodation", "Mera Peak Climbing Permit", "Sagarmatha National Park Permit", "TIMS Card", "Porters"],
    "excludes": ["International Flights", "Personal Climbing Gear", "Travel Insurance", "Nepal Visa", "Personal Expenses"],
    "included": ["Experienced Climbing Guide", "All Meals on Trek", "Teahouse & Camp Accommodation", "Mera Peak Climbing Permit", "Sagarmatha National Park Permit", "TIMS Card", "Porters"],
    "excluded": ["International Flights", "Personal Climbing Gear", "Travel Insurance", "Nepal Visa", "Personal Expenses"],
    "itinerary": [
      { "day": 1, "title": "Arrival in Kathmandu", "description": "Airport pickup, hotel transfer, expedition briefing, gear check" },
      { "day": 2, "title": "Fly to Lukla & Trek to Paiya", "description": "Scenic mountain flight to Lukla, begin trek through forested trails" },
      { "day": 3, "title": "Trek to Chutok", "description": "Scenic trekking through traditional Sherpa villages" },
      { "day": 4, "title": "Trek to Thuli Kharka", "description": "Gradual ascent and important acclimatization day" },
      { "day": 5, "title": "Trek to Khare", "description": "Approach to Mera Peak base camp area" },
      { "day": 6, "title": "Acclimatization & Climbing Training", "description": "Ice axe and crampon training, glacier practice" },
      { "day": 7, "title": "Mera Peak Summit Day", "description": "Early morning ascent to summit, return to high camp" },
      { "day": 8, "title": "Descend to Lukla", "description": "Return trek through beautiful Hinku Valley" },
      { "day": 9, "title": "Fly back to Kathmandu", "description": "Celebrate summit success, farewell dinner" }
    ],
    "maxGroupSize": 6,
    "cancellationPolicy": "Full refund if canceled 45 days before departure. 50% refund 30-45 days prior.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "challenging",
    "maxAltitude": "6,476m",
    "requirements": ["Excellent physical fitness", "Previous high-altitude experience", "Basic mountaineering skills", "Medical clearance"],
    "permits": ["Mera Peak Climbing Permit", "Sagarmatha National Park Permit", "TIMS Card"],
    "equipment": ["Climbing boots", "Ice axe", "Crampons", "Harness", "Helmet", "Four-season sleeping bag", "High-altitude clothing"],
    "entryRequirements": ["Valid passport", "Nepal visa", "Comprehensive travel insurance with helicopter evacuation"]
  },
  {
    "id": "2",
    "title": "Island Peak Climbing - 6189m Imja Tse Everest Region Expedition",
    "location": "Everest Region, Nepal",
    "duration": "16 days",
    "rating": 4.8,
    "reviewCount": 189,
    "price": 3800,
    "originalPrice": 4200,
    "excerpt": "16-day Island Peak climbing expedition to 6189m with Everest views and glacier climbing experience",
    "description": "Island Peak climbing (Imja Tse) at 6189m - Nepal's most popular climbing peak in Everest region. Perfect introduction to Himalayan mountaineering with glacier travel, ice climbing, and spectacular views of Everest, Lhotse, and Ama Dablam.",
    "image": "/images/island_peak-1.jpg",
    "images": [
   
    ],
    "tags": ["Island Peak Climbing", "Imja Tse Expedition", "Everest Region Climbing", "6189m Peak", "Beginner Mountaineering", "Glacier Climbing"],
    "highlights": [
      "Summit Island Peak (6189m)",
      "Everest Base Camp Trek",
      "Glacier Training and Ice Climbing",
      "Professional Climbing Instruction",
      "Sherpa Culture Immersion"
    ],
    "includes": ["Expert Climbing Guide", "All Meals During Trek", "Teahouse Accommodation", "Island Peak Climbing Permit", "Sagarmatha National Park Permit", "TIMS Card"],
    "excludes": ["International Flights", "Personal Climbing Gear", "Travel Insurance", "Nepal Visa"],
    "included": ["Expert climbing guide", "All meals during trek", "Teahouse accommodation", "Climbing permits and fees", "Group climbing equipment"],
    "excluded": ["International flights", "Personal climbing gear", "Travel insurance", "Nepal visa"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu Arrival", "description": "Welcome and expedition briefing, gear check and preparation" },
      { "day": 2, "title": "Fly to Lukla, Trek to Phakding", "description": "Scenic Himalayan flight to Lukla, start Everest trek" },
      { "day": 3, "title": "Trek to Namche Bazaar", "description": "Acclimatization in Sherpa capital, Everest first views" },
      { "day": 4, "title": "Acclimatization Day", "description": "Hike to Everest View Hotel, Khumjung village visit" },
      { "day": 5, "title": "Trek to Tengboche", "description": "Visit famous Tengboche Monastery" },
      { "day": 6, "title": "Trek to Dingboche", "description": "Enter high altitude region, spectacular mountain views" },
      { "day": 7, "title": "Acclimatization", "description": "Hike to Nagarjun Hill for altitude adaptation" },
      { "day": 8, "title": "Trek to Chhukung", "description": "Approach to Island Peak base area" },
      { "day": 9, "title": "Island Peak Base Camp", "description": "Climbing training and summit preparation" },
      { "day": 10, "title": "Summit Day", "description": "Early start for summit attempt, return to base camp" },
      { "day": 11, "title": "Contingency Day", "description": "Extra day for weather or acclimatization" },
      { "day": 12, "title": "Return Trek", "description": "Begin descent to lower villages" },
      { "day": 13, "title": "Trek to Namche", "description": "Return through familiar trails" },
      { "day": 14, "title": "Trek to Lukla", "description": "Final trekking day celebration" },
      { "day": 15, "title": "Fly to Kathmandu", "description": "Return to civilization, hot shower" },
      { "day": 16, "title": "Departure", "description": "Airport transfer, expedition concludes" }
    ],
    "maxGroupSize": 8,
    "cancellationPolicy": "Full refund 45 days before departure. 50% refund 30-45 days prior.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "challenging",
    "maxAltitude": "6,189m",
    "requirements": ["Good physical condition", "Basic climbing experience recommended", "Altitude experience helpful", "Medical fitness certificate"],
    "permits": ["Island Peak Permit", "Sagarmatha National Park Permit", "TIMS Card"],
    "equipment": ["Mountaineering boots", "Ice axe", "Crampons", "Harness", "Helmet", "Ascender"],
    "entryRequirements": ["Nepal visa", "Comprehensive mountaineering insurance"]
  },
  
  {
    "id": "3",
    "title": "Yala Peak Climbing - 5500m Beginner Friendly Langtang Region Expedition",
    "location": "Langtang Region, Nepal",
    "duration": "14 days",
    "rating": 4.5,
    "reviewCount": 87,
    "price": 2200,
    "originalPrice": 2500,
    "excerpt": "14-day Yala Peak climbing expedition to 5500m - perfect beginner peak in Langtang region with Shishapangma views",
    "description": "Yala Peak climbing at 5500m - ideal beginner climbing peak in Langtang region near Tibet border. Non-technical snow climb with spectacular views of Shishapangma and Langtang Himal. Perfect first Himalayan peak climbing experience with cultural Tamang village visits.",
    "image": "/images/yala_peak-1.jpg",
    "images": [
      
    ],
    "tags": ["Yala Peak Climbing", "Beginner Peak Nepal", "5500m Expedition", "Langtang Region Trek", "First Himalayan Peak", "Non-Technical Climb"],
    "highlights": [
      "Summit Yala Peak (5500m)",
      "Beginner Friendly Non-Technical Climb",
      "Shishapangma Mountain Views",
      "Tamang Cultural Experience",
      "Langtang Valley Exploration"
    ],
    "includes": ["Climbing Guide", "All Meals", "Teahouse Accommodation", "Yala Peak Permit", "Langtang National Park Permit", "TIMS Card"],
    "excludes": ["International Flights", "Personal Gear", "Travel Insurance", "Nepal Visa"],
    "included": ["Experienced climbing guide", "All meals during trek", "Teahouse accommodation", "Yala Peak climbing permit", "Langtang National Park permit", "TIMS card"],
    "excluded": ["International flights", "Personal climbing gear", "Travel insurance", "Nepal visa"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu Arrival", "description": "Expedition briefing, gear check, hotel accommodation" },
      { "day": 2, "title": "Drive to Syabrubesi", "description": "Scenic drive to Langtang region starting point" },
      { "day": 3, "title": "Trek to Lama Hotel", "description": "Begin Langtang Valley trek through forests" },
      { "day": 4, "title": "Trek to Langtang Village", "description": "Traditional Tamang villages, mountain views" },
      { "day": 5, "title": "Trek to Kyanjin Gompa", "description": "Reach main village, monastery visit" },
      { "day": 6, "title": "Acclimatization Day", "description": "Kyanjin Ri hike, climbing training" },
      { "day": 7, "title": "Trek to Yala Peak Base Camp", "description": "Approach to base camp, final preparation" },
      { "day": 8, "title": "Summit Day", "description": "Early morning summit attempt, return to Kyanjin" },
      { "day": 9, "title": "Contingency Day", "description": "Extra day for weather or acclimatization" },
      { "day": 10, "title": "Trek to Lama Hotel", "description": "Begin return journey through valley" },
      { "day": 11, "title": "Trek to Syabrubesi", "description": "Final trekking day, celebration" },
      { "day": 12, "title": "Drive to Kathmandu", "description": "Return to Kathmandu, hot shower" },
      { "day": 13, "title": "Kathmandu Free Day", "description": "Sightseeing, shopping, celebration dinner" },
      { "day": 14, "title": "Departure", "description": "Airport transfer, expedition concludes" }
    ],
    "maxGroupSize": 8,
    "cancellationPolicy": "Full refund 30 days before departure. 50% refund 15-30 days prior.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "moderate",
    "maxAltitude": "5,500m",
    "requirements": ["Good physical fitness", "No previous climbing experience needed", "Basic trekking experience helpful", "Medical clearance"],
    "permits": ["Yala Peak Permit", "Langtang National Park Permit", "TIMS Card"],
    "equipment": ["Trekking boots", "Warm layers", "Sleeping bag", "Trekking poles", "Basic climbing gear provided"],
    "entryRequirements": ["Valid passport", "Nepal visa", "Travel insurance"]
  }
]

export default function PeakClimbingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for peak climbing
  const heroImage = "/images/peak-climbing-hero.jpg"; // Change this to your desired image path

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
      {/* Updated Hero section with image for peak climbing */}
      <Hero 
        title="Nepal Peak Climbing Expeditions"
        description="Challenge yourself with Nepal's iconic peaks. From moderate trekking peaks to high-altitude summits, experience adventure, culture, and the breathtaking Himalayas with expert guides."
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