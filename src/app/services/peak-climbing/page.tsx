"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Helper function to create URL-friendly slugs
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

// Insert your peak climbing tours array here
const PEAK_CLIMBING_TOURS: Tour[] = [
  {
    "id": "1",
    "title": "Mera Peak Climbing Expedition - 6476m Highest Trekking Peak Nepal",
    "location": "Hinku Valley, Nepal",
    "duration": "18 days",
    "rating": 4.9,
    "price": 4500,
    "originalPrice": 5000,
    "excerpt": "18-day Mera Peak climbing expedition to Nepal's highest trekking peak at 6476m with panoramic Everest views",
    "description": "Mera Peak climbing expedition to 6476m - the highest trekking peak in Nepal. Experience high-altitude mountaineering with panoramic Himalayan views of Everest, Kanchenjunga, Makalu, and Cho Oyu. Perfect introduction to Himalayan peak climbing in Nepal's Hinku Valley.",
    "image": "/images/mera_peak-1.jpg",
    "images": [
      "/images/mera_peak-1.jpg",
      "/images/mera-peak-summit-1.jpg",
      "/images/hinku-valley-1.jpg",
      "/images/mera-glacier-1.jpg",
      "/images/lukla-flight-1.jpg",
      "/images/everest-panorama-1.jpg",
      "/images/climbing-training-1.jpg",
      "/images/teahouse-accommodation-1.jpg",
      "/images/sherpa-guide-1.jpg",
      "/images/peak-sunrise-1.jpg",
      "/images/camping-high-camp-1.jpg",
      "/images/summit-celebration-1.jpg"
    ],
    "tags": ["Mera Peak Climbing", "Highest Trekking Peak", "Nepal Peak Climbing", "6476m Expedition", "Himalayan Mountaineering", "Everest View Trek", "Adventure Climbing", "Hinku Valley", "High Altitude"],
    "highlights": [
      "Summit Mera Peak (6476m) - Highest Trekking Peak in Nepal",
      "Panoramic Views of 5 Eight-Thousanders (Everest, Kanchenjunga, Makalu, Lhotse, Cho Oyu)",
      "High-Altitude Glacier Climbing Experience",
      "Sherpa Culture and Village Experience",
      "Lukla Flight - World's Most Exciting Airport",
      "Comprehensive Climbing Training"
    ],
    "includes": ["Experienced Climbing Guide", "All Meals on Trek", "Teahouse & Camp Accommodation", "Mera Peak Climbing Permit", "Sagarmatha National Park Permit", "TIMS Card", "Porters", "Climbing Equipment"],
    "excludes": ["International Flights", "Personal Climbing Gear", "Travel Insurance", "Nepal Visa", "Personal Expenses", "Alcoholic Drinks"],
    "included": ["Experienced climbing guide (1:2 ratio)", "All meals during trek (breakfast, lunch, dinner)", "Teahouse accommodation (14 nights)", "Camp accommodation at high camps (3 nights)", "Mera Peak climbing permit and royalties", "Sagarmatha National Park entry permit", "Trekker's Information Management System (TIMS) card", "Porters for group equipment (1:3 ratio)", "Group climbing equipment (ropes, ice screws, snow bars)", "Domestic flight Kathmandu-Lukla-Kathmandu", "Airport transfers in Kathmandu", "First aid kit and oxygen for emergencies", "Celebration dinner in Kathmandu"],
    "excluded": ["International airfare to/from Nepal", "Personal climbing gear (boots, harness, ice axe, crampons)", "Comprehensive travel and climbing insurance", "Nepal entry visa fee", "Personal expenses (phone calls, laundry, drinks)", "Alcoholic and bottled beverages", "Tips for guides and porters", "Meals in Kathmandu (except celebration dinner)", "Extra nights accommodation in Kathmandu", "Rescue and evacuation costs"],
    "entryRequirements": ["Valid passport with 6 months validity", "Nepal visa (obtainable on arrival)", "Comprehensive mountaineering insurance", "Medical fitness certificate"],
    "itinerary": [
      { "day": 1, "title": "Arrival in Kathmandu (1,400m)", "description": "Airport pickup and transfer to hotel, expedition briefing with lead guide, gear check and rental arrangements, welcome dinner" },
      { "day": 2, "title": "Fly to Lukla (2,840m) & Trek to Paiya (2,730m)", "description": "Early morning scenic flight to Lukla, meet trekking crew, begin trek through forested trails to Paiya, 3-4 hours trek" },
      { "day": 3, "title": "Trek to Chutok (2,800m)", "description": "Scenic trekking through traditional Sherpa villages, crossing suspension bridges, 5-6 hours trek" },
      { "day": 4, "title": "Trek to Thuli Kharka (4,300m)", "description": "Gradual ascent through rhododendron forests, important acclimatization day, 5-6 hours trek" },
      { "day": 5, "title": "Trek to Khare (5,045m)", "description": "Approach to Mera Peak base camp area, first glacier views, 4-5 hours trek" },
      { "day": 6, "title": "Acclimatization & Climbing Training at Khare", "description": "Ice axe and crampon training on nearby glacier, rope techniques, rest and acclimatization" },
      { "day": 7, "title": "Trek to Mera High Camp (5,780m)", "description": "Ascend to high camp on snow, set up camp, summit preparation, 4-5 hours" },
      { "day": 8, "title": "Mera Peak Summit Day (6,476m) & Return to Khare", "description": "Early morning alpine start (2-3 AM), technical climb to summit, panoramic views, return to high camp then Khare, 10-12 hours" },
      { "day": 9, "title": "Contingency/Extra Summit Day", "description": "Buffer day for weather or additional acclimatization" },
      { "day": 10, "title": "Descend to Thuli Kharka", "description": "Return trek through beautiful Hinku Valley, 5-6 hours" },
      { "day": 11, "title": "Trek to Lukla via Zatrwa La Pass", "description": "Cross Zatrwa La Pass (4,600m), final trekking day, celebration in Lukla, 6-7 hours" },
      { "day": 12, "title": "Fly back to Kathmandu", "description": "Morning flight to Kathmandu (weather dependent), transfer to hotel, free afternoon, farewell celebration dinner" },
      { "day": 13, "title": "Departure from Kathmandu", "description": "Airport transfer for international departure, expedition concludes" }
    ],
    "maxGroupSize": 6,
    "cancellationPolicy": "Full refund if canceled 60 days before departure. 70% refund 45-60 days prior. 50% refund 30-45 days prior. No refund within 30 days.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "challenging",
    "maxAltitude": "6,476m",
    "requirements": ["Excellent physical fitness and endurance", "Previous high-altitude experience (above 4,000m)", "Basic mountaineering skills preferred", "Medical clearance for high-altitude climbing", "Experience with multi-day trekking", "Mental preparedness for challenging conditions"],
    "permits": ["Mera Peak Climbing Permit", "Sagarmatha National Park Permit", "Trekker's Information Management System (TIMS)", "Local area conservation fee"],
    "equipment": ["Mountaineering boots (B2/B3 rated)", "Ice axe and crampons", "Climbing harness and helmet", "Four-season sleeping bag (-20°C)", "High-altitude down jacket and pants", "Thermal base layers", "Climbing gloves and mittens", "Headlamp with extra batteries", "Trekking poles", "50-70 liter backpack", "Sunglasses (category 4)", "Personal first aid kit"],
  },
  {
    "id": "2",
    "title": "Island Peak Climbing - 6189m Imja Tse Everest Region Expedition",
    "location": "Everest Region, Nepal",
    "duration": "16 days",
    "rating": 4.8,
    "price": 3800,
    "originalPrice": 4200,
    "excerpt": "16-day Island Peak climbing expedition to 6189m with Everest views and glacier climbing experience",
    "description": "Island Peak climbing (Imja Tse) at 6189m - Nepal's most popular climbing peak in Everest region. Perfect introduction to Himalayan mountaineering with glacier travel, ice climbing, and spectacular views of Everest, Lhotse, and Ama Dablam.",
    "image": "/images/island_peak-1.jpg",
    "images": [
      "/images/island_peak-1.jpg",
      "/images/island-peak-summit-1.jpg",
      "/images/imja-glacier-1.jpg",
      "/images/everest-base-camp-1.jpg",
      "/images/ice-climbing-1.jpg",
      "/images/ama-dablam-view-1.jpg",
      "/images/lobuche-peak-1.jpg",
      "/images/namche-bazaar-1.jpg",
      "/images/climbing-instruction-1.jpg",
      "/images/glacier-training-1.jpg",
      "/images/teahouse-everest-1.jpg",
      "/images/summit-ridge-1.jpg"
    ],
    "tags": ["Island Peak Climbing", "Imja Tse Expedition", "Everest Region Climbing", "6189m Peak", "Beginner Mountaineering", "Glacier Climbing", "Everest Views", "Adventure Trekking"],
    "highlights": [
      "Summit Island Peak (6,189m) - Most Popular Climbing Peak",
      "Everest Base Camp Trek Combination",
      "Glacier Training and Ice Climbing Instruction",
      "Professional Climbing Guide with Summit Experience",
      "Sherpa Culture Immersion in Khumbu Region",
      "Views of Everest, Lhotse, Nuptse, and Ama Dablam"
    ],
    "includes": ["Expert Climbing Guide", "All Meals During Trek", "Teahouse Accommodation", "Island Peak Climbing Permit", "Sagarmatha National Park Permit", "TIMS Card", "Group Climbing Equipment"],
    "excludes": ["International Flights", "Personal Climbing Gear", "Travel Insurance", "Nepal Visa", "Personal Expenses"],
    "included": ["Expert climbing guide (1:2 ratio)", "All meals during trek (breakfast, lunch, dinner)", "Teahouse accommodation (14 nights)", "Tented accommodation at Island Peak base camp (1 night)", "Island Peak climbing permit and royalties", "Sagarmatha National Park entry permit", "Trekker's Information Management System (TIMS) card", "Group climbing equipment (ropes, ice screws, carabiners)", "Domestic flight Kathmandu-Lukla-Kathmandu", "Airport transfers in Kathmandu", "Porter service for group equipment (15kg per person)", "Comprehensive climbing training at base camp", "First aid kit and emergency oxygen", "Celebration dinner in Kathmandu"],
    "excluded": ["International airfare to/from Nepal", "Personal climbing equipment (boots, harness, crampons, ice axe)", "Travel insurance with climbing coverage and helicopter evacuation", "Nepal entry visa fee", "Personal expenses (phone, laundry, drinks, snacks)", "Alcoholic beverages", "Tips for guide and porters (recommended)", "Meals in Kathmandu (except celebration dinner)", "Extra hotel nights in Kathmandu", "Personal porter for extra luggage", "Battery charging fees at teahouses"],
    "entryRequirements": ["Valid passport with 6 months validity", "Nepal visa (obtainable on arrival)", "Comprehensive mountaineering insurance", "Medical fitness certificate"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu Arrival (1,400m)", "description": "Airport pickup and transfer to hotel, expedition briefing, gear check and rental arrangements" },
      { "day": 2, "title": "Fly to Lukla (2,840m), Trek to Phakding (2,610m)", "description": "Scenic mountain flight to Lukla, begin trek to Phakding, 3-4 hours trek" },
      { "day": 3, "title": "Trek to Namche Bazaar (3,440m)", "description": "Cross suspension bridges, enter Sagarmatha National Park, acclimatization in Sherpa capital, 5-6 hours" },
      { "day": 4, "title": "Acclimatization Day in Namche", "description": "Hike to Everest View Hotel for first Everest views, visit Khumjung village and Hillary School" },
      { "day": 5, "title": "Trek to Tengboche (3,860m)", "description": "Visit famous Tengboche Monastery, views of Everest and Ama Dablam, 5-6 hours" },
      { "day": 6, "title": "Trek to Dingboche (4,410m)", "description": "Enter high altitude region, spectacular mountain views, 5-6 hours" },
      { "day": 7, "title": "Acclimatization in Dingboche", "description": "Hike to Nagarjun Hill (5,100m) for altitude adaptation, views of Makalu" },
      { "day": 8, "title": "Trek to Chhukung (4,730m)", "description": "Approach to Island Peak base area, views of Lhotse and Island Peak, 3-4 hours" },
      { "day": 9, "title": "Trek to Island Peak Base Camp (5,200m)", "description": "Climbing training, ice axe and crampon practice, summit preparation, 3-4 hours" },
      { "day": 10, "title": "Summit Day: Island Peak (6,189m) & Return to Chhukung", "description": "Early alpine start (1-2 AM), technical climb including glacier and headwall, summit celebration, return to Chhukung, 10-12 hours" },
      { "day": 11, "title": "Contingency Day for Summit", "description": "Extra day for weather or additional acclimatization" },
      { "day": 12, "title": "Trek to Namche Bazaar", "description": "Return trek through Tengboche, 6-7 hours" },
      { "day": 13, "title": "Trek to Lukla", "description": "Final trekking day, celebration dinner in Lukla, 6-7 hours" },
      { "day": 14, "title": "Fly to Kathmandu", "description": "Morning flight to Kathmandu, transfer to hotel, free afternoon" },
      { "day": 15, "title": "Kathmandu Free Day", "description": "Sightseeing, shopping, or rest day, farewell celebration dinner" },
      { "day": 16, "title": "Departure", "description": "Airport transfer for international departure" }
    ],
    "maxGroupSize": 8,
    "cancellationPolicy": "Full refund if canceled 60 days before departure. 70% refund 45-60 days prior. 50% refund 30-45 days prior. No refund within 30 days.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "challenging",
    "maxAltitude": "6,189m",
    "requirements": ["Good physical condition and endurance", "Basic climbing experience recommended", "Previous altitude experience (above 4,000m)", "Medical fitness certificate for climbing", "Experience with multi-day trekking", "Mental preparedness for summit day"],
    "permits": ["Island Peak Climbing Permit", "Sagarmatha National Park Permit", "Trekker's Information Management System (TIMS)", "Local area conservation fee"],
    "equipment": ["Mountaineering boots (B2 rated minimum)", "Ice axe and crampons", "Climbing harness, helmet, and carabiners", "Ascender/descender device", "Four-season sleeping bag (-15°C)", "Down jacket and waterproof shell", "Thermal base layers and mid-layers", "Climbing gloves and mittens", "Headlamp with extra batteries", "Trekking poles", "50-60 liter backpack", "Sunglasses and ski goggles", "Personal first aid and medications"],
  },
  {
    "id": "3",
    "title": "Yala Peak Climbing - 5500m Beginner Friendly Langtang Region Expedition",
    "location": "Langtang Region, Nepal",
    "duration": "14 days",
    "rating": 4.5,
    "price": 2200,
    "originalPrice": 2500,
    "excerpt": "14-day Yala Peak climbing expedition to 5500m - perfect beginner peak in Langtang region with Shishapangma views",
    "description": "Yala Peak climbing at 5500m - ideal beginner climbing peak in Langtang region near Tibet border. Non-technical snow climb with spectacular views of Shishapangma and Langtang Himal. Perfect first Himalayan peak climbing experience with cultural Tamang village visits.",
    "image": "/images/yala_peak-1.jpg",
    "images": [
      "/images/yala_peak-1.jpg",
      "/images/yala-peak-summit-1.jpg",
      "/images/langtang-valley-1.jpg",
      "/images/shishapangma-views-1.jpg",
      "/images/tamang-village-1.jpg",
      "/images/kyanjin-gompa-1.jpg",
      "/images/beginner-climbing-1.jpg",
      "/images/langtang-glacier-1.jpg",
      "/images/peak-ascent-1.jpg",
      "/images/teahouse-langtang-1.jpg",
      "/images/cultural-experience-1.jpg",
      "/images/summit-group-1.jpg"
    ],
    "tags": ["Yala Peak Climbing", "Beginner Peak Nepal", "5500m Expedition", "Langtang Region Trek", "First Himalayan Peak", "Non-Technical Climb", "Entry Level Mountaineering", "Tamang Culture", "Scenic Trekking"],
    "highlights": [
      "Summit Yala Peak (5,500m) - Perfect First Himalayan Peak",
      "Beginner Friendly Non-Technical Snow Climb",
      "Spectacular Views of Shishapangma (8,027m) in Tibet",
      "Tamang Cultural Experience in Traditional Villages",
      "Langtang Valley Exploration - Switzerland of Nepal",
      "Kyanjin Gompa Monastery Visit"
    ],
    "includes": ["Climbing Guide", "All Meals", "Teahouse Accommodation", "Yala Peak Permit", "Langtang National Park Permit", "TIMS Card", "Basic Climbing Instruction"],
    "excludes": ["International Flights", "Personal Gear", "Travel Insurance", "Nepal Visa", "Personal Expenses"],
    "included": ["Experienced climbing guide (1:3 ratio)", "All meals during trek (breakfast, lunch, dinner)", "Teahouse accommodation (12 nights)", "Yala Peak climbing permit and royalties", "Langtang National Park entry permit", "Trekker's Information Management System (TIMS) card", "Basic climbing instruction and training", "Ground transportation Kathmandu-Syabrubesi-Kathmandu", "Porter service for group equipment (10kg per person)", "Group safety equipment (rope, first aid kit)", "Celebration dinner in Kathmandu", "Airport transfers in Kathmandu"],
    "excluded": ["International airfare to/from Nepal", "Personal climbing/trekking gear", "Travel insurance with emergency evacuation", "Nepal entry visa fee", "Personal expenses (drinks, laundry, phone)", "Alcoholic beverages", "Tips for guide and porters", "Meals in Kathmandu (except celebration dinner)", "Extra hotel nights in Kathmandu", "Personal porter for extra luggage", "Battery charging and hot shower fees"],
    "entryRequirements": ["Valid passport with 6 months validity", "Nepal visa (obtainable on arrival)", "Travel insurance with altitude coverage", "Basic medical fitness certificate"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu Arrival (1,400m)", "description": "Airport pickup and transfer to hotel, expedition briefing, gear check" },
      { "day": 2, "title": "Drive to Syabrubesi (1,550m)", "description": "Scenic drive through hills and Trisuli River valley to Langtang region starting point, 7-8 hours" },
      { "day": 3, "title": "Trek to Lama Hotel (2,380m)", "description": "Begin Langtang Valley trek through dense forests, possible monkey sightings, 5-6 hours" },
      { "day": 4, "title": "Trek to Langtang Village (3,430m)", "description": "Pass through traditional Tamang villages, increasing mountain views, 5-6 hours" },
      { "day": 5, "title": "Trek to Kyanjin Gompa (3,870m)", "description": "Reach main village of Langtang Valley, visit cheese factory and monastery, 3-4 hours" },
      { "day": 6, "title": "Acclimatization Day at Kyanjin", "description": "Hike to Kyanjin Ri (4,773m) for panoramic views, climbing training session" },
      { "day": 7, "title": "Trek to Yala Peak Base Camp (4,800m)", "description": "Approach to base camp, final summit preparation, 4-5 hours" },
      { "day": 8, "title": "Summit Day: Yala Peak (5,500m) & Return to Kyanjin", "description": "Early morning start (4-5 AM), non-technical snow climb to summit, spectacular views, return to Kyanjin, 8-10 hours" },
      { "day": 9, "title": "Contingency Day for Summit", "description": "Extra day for weather or additional exploration" },
      { "day": 10, "title": "Trek to Lama Hotel", "description": "Begin return journey through beautiful valley, 5-6 hours" },
      { "day": 11, "title": "Trek to Syabrubesi", "description": "Final trekking day, celebration with team, 5-6 hours" },
      { "day": 12, "title": "Drive to Kathmandu", "description": "Return drive to Kathmandu, transfer to hotel, free evening" },
      { "day": 13, "title": "Kathmandu Free Day", "description": "Sightseeing, shopping, or rest, farewell celebration dinner" },
      { "day": 14, "title": "Departure", "description": "Airport transfer for international departure" }
    ],
    "maxGroupSize": 8,
    "cancellationPolicy": "Full refund if canceled 45 days before departure. 70% refund 30-45 days prior. 50% refund 15-30 days prior. No refund within 15 days.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "moderate",
    "maxAltitude": "5,500m",
    "requirements": ["Good physical fitness and stamina", "No previous climbing experience needed", "Basic trekking experience helpful", "Medical clearance for moderate altitude", "Positive attitude and team spirit", "Ability to carry daypack for 5-7 hours"],
    "permits": ["Yala Peak Climbing Permit", "Langtang National Park Permit", "Trekker's Information Management System (TIMS)", "Local municipality fee"],
    "equipment": ["Sturdy trekking boots (waterproof)", "Four-season sleeping bag (-10°C)", "Down jacket and thermal layers", "Trekking poles", "Headlamp with extra batteries", "30-40 liter daypack", "Sunglasses and sunscreen", "Waterproof jacket and pants", "Warm hat and gloves", "Water bottles or hydration system", "Personal first aid kit", "Camera and extra batteries"],
  }
  // Your peak climbing tours data here
  // Example structure for reference:
  // {
  //   "id": "1",
  //   "title": "Mera Peak Climbing Expedition - 6476m Highest Trekking Peak Nepal",
  //   ... rest of the data
  // }
];

export default function PeakClimbingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const heroImage = "/images/peak-climbing-hero.jpg";

  // Handle "See Full Details" button click - redirect to detail page
  const handleSeeDetails = (tour: Tour) => {
    // For Mera Peak (id: "1"), route to specific URL
    if (tour.id === "1") {
      router.push("/services/peak-climbing/mera-peak-climbing-expedition-6476m");
    } else {
      // For other peaks, create slug from title
      const slug = createSlug(tour.title);
      router.push(`/services/peak-climbing/${slug}`);
    }
  };

  // Handle "Highlights" button click - show modal
  const handleHighlightsClick = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  // Handle card click - redirect to detail page
  const handleCardClick = (tour: Tour) => {
    handleSeeDetails(tour); // Same as "See Full Details"
  };

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
        backgroundImage={heroImage}
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          {tours.length > 0 ? (
            <ToursGrid
              tours={tours}
              onCardClick={handleCardClick}
              onHighlightsClick={handleHighlightsClick}
              onSeeDetailsClick={handleSeeDetails}
              className="py-4"
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