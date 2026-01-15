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

// Mock helicopter tours data (your existing HELICOPTER_TOURS array remains the same)
const HELICOPTER_TOURS: Tour[] = [
  {
    "id": "1",
    "title": "Everest Helicopter Sightseeing",
    "location": "Everest Region, Nepal",
    "duration": "4-5 hours",
    "rating": 4.9,
    "price": 1499,
    "originalPrice": 1600,
    "excerpt": "Breathtaking aerial views of the world's highest peak with exclusive landing experience",
    "description": "Experience the ultimate adventure with a helicopter tour to Mount Everest. Fly over the majestic Himalayas, witness stunning glaciers, and land at the world's highest hotel at Everest View Point (3,880m) for breakfast with a panoramic view of Everest, Lhotse, and Ama Dablam. This once-in-a-lifetime journey offers unparalleled views of the world's highest mountains without the strenuous trek.",
    "image": "/images/helicopter-1.jpg",
    "images": [
      "/images/helicopter-1.jpg",
      "/images/everest-helicopter-2.jpg",
      "/images/kala-patthar-landing-1.jpg",
      "/images/everest-view-hotel-1.jpg",
      "/images/helicopter-cabin-1.jpg",
      "/images/everest-closeup-2.jpg",
      "/images/himalayan-glaciers-1.jpg",
      "/images/breakfast-everest-view-1.jpg",
      "/images/lukla-airport-1.jpg",
      "/images/helicopter-pilot-1.jpg",
      "/images/ama-dablam-view-1.jpg",
      "/images/hotel-transfer-1.jpg"
    ],
    "tags": ["Helicopter Tour", "Everest Experience", "Luxury Adventure", "Mountain Flight", "Bucket List", "Himalayan Views", "Scenic Flight", "VIP Experience"],
    "highlights": [
      "Mount Everest close-up view from helicopter",
      "Kala Patthar landing for photography",
      "Himalayan panorama including Lhotse and Nuptse",
      "Breakfast at Everest View Hotel (world's highest)",
      "Flight over Khumbu Glacier",
      "View of Everest Base Camp from air"
    ],
    "includes": ["Helicopter flight", "Experienced pilot", "Hotel transfers", "Breakfast at Everest View Hotel", "All permits"],
    "excludes": ["Personal expenses", "Tips", "Travel insurance", "Additional activities"],
    "included": ["Shared helicopter flight (5 passengers max)", "Expert pilot with mountain experience", "Hotel pick-up and drop-off in Kathmandu", "Breakfast at Everest View Hotel", "All necessary permits and taxes", "Flight over Khumbu Icefall and glaciers", "Multiple photo stop opportunities", "Flight commentary about peaks"],
    "excluded": ["Personal expenses and souvenirs", "Gratuities for pilot and staff", "Travel and medical insurance", "Additional meals and drinks", "Visa fees", "Excess baggage charges"],
    "entryRequirements": ["Valid passport", "Nepal visa (obtainable on arrival)"],
    "itinerary": [
      { "day": 1, "title": "Everest Helicopter Tour - Ultimate Mountain Experience", "description": "Early morning hotel pickup (6:00 AM), transfer to domestic airport, safety briefing, helicopter flight to Lukla, aerial tour of Everest region with close-up views, landing at Syangboche for breakfast at Everest View Hotel (30 minutes), flight to Kala Patthar for photography (15 minutes), return flight over glaciers and peaks, arrival back in Kathmandu, hotel drop-off by noon" }
    ],
    "maxGroupSize": 5,
    "cancellationPolicy": "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days. Weather-related cancellations fully refundable.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "5,545m (Kala Patthar)",
    "requirements": ["No experience needed", "Reasonable health condition", "No serious heart or lung conditions", "Ability to board helicopter", "Passenger weight under 110kg"],
    "permits": ["Sagarmatha National Park entry permit", "TIMS card", "Flight operation permit", "Landing permits"],
    "equipment": ["Warm clothing (layers)", "Sunglasses with UV protection", "Camera with extra batteries", "Sunscreen and lip balm", "Passport copy", "Comfortable shoes", "Motion sickness medication if needed"],
  },
  {
    "id": "2",
    "title": "Annapurna Base Camp Helicopter Tour",
    "location": "Annapurna Region, Nepal",
    "duration": "3-4 hours",
    "rating": 4.8,
    "price": 870,
    "originalPrice": 950,
    "excerpt": "Spectacular Annapurna range views with ABC landing experience",
    "description": "Soar above the Annapurna Sanctuary and land at Annapurna Base Camp (4,130m) for unparalleled close-up views of the Annapurna massif. This helicopter adventure takes you deep into the heart of the Himalayas, offering breathtaking aerial perspectives of Machhapuchhre (Fishtail Mountain), Annapurna I, and surrounding peaks. Experience the grandeur of the Himalayas in comfort and style.",
    "image": "/images/helicopter-2.jpg",
    "images": [
      "/images/helicopter-2.jpg",
      "/images/annapurna-helicopter-1.jpg",
      "/images/abc-landing-1.jpg",
      "/images/machhapuchhre-view-1.jpg",
      "/images/annapurna-sanctuary-1.jpg",
      "/images/helicopter-annapurna-2.jpg",
      "/images/glacier-views-1.jpg",
      "/images/pokhara-lake-1.jpg",
      "/images/himalayan-village-1.jpg",
      "/images/annapurna-range-2.jpg",
      "/images/helicopter-interior-1.jpg",
      "/images/abc-panorama-1.jpg"
    ],
    "tags": ["Helicopter Tour", "Annapurna", "Mountain Adventure", "Scenic Flight", "ABC Helicopter", "Himalayan Views", "Luxury Travel", "Quick Adventure"],
    "highlights": [
      "Annapurna Base Camp landing (4,130m)",
      "Machhapuchhre (Fishtail Mountain) close-up views",
      "Annapurna Sanctuary aerial exploration",
      "Himalayan glacier and icefall views",
      "Flight over Modi Khola valley",
      "Panoramic views of Annapurna I-IV"
    ],
    "includes": ["Helicopter flight", "Pilot guide", "Hotel transfers", "All necessary permits"],
    "excludes": ["Personal expenses", "Travel insurance", "Additional meals"],
    "included": ["Shared helicopter flight from Pokhara", "Expert pilot with Annapurna region knowledge", "Hotel transfers in Pokhara", "All permits (ACAP, TIMS)", "Annapurna Base Camp landing (15-20 minutes)", "Flight commentary about peaks and geography", "Multiple photo opportunities", "Flight over traditional villages"],
    "excluded": ["Personal items and souvenirs", "Travel and medical insurance", "Meals and drinks (except bottled water)", "Accommodation in Pokhara", "Tips for pilot and ground staff", "Additional activities in Pokhara"],
    "entryRequirements": ["Valid passport copy", "Nepal visa"],
    "itinerary": [
      { "day": 1, "title": "Annapurna Helicopter Tour - Sanctuary Adventure", "description": "Morning hotel pickup in Pokhara (7:00 AM), transfer to Pokhara airport, safety briefing, helicopter flight to Annapurna region, aerial tour of Annapurna Sanctuary, landing at Annapurna Base Camp for photography (15-20 minutes), flight over Machhapuchhre Base Camp, views of Hiunchuli and Gangapurna, return to Pokhara, hotel drop-off by 11:00 AM" }
    ],
    "maxGroupSize": 5,
    "cancellationPolicy": "Free cancellation up to 7 days before departure. 70% refund between 3-7 days. No refund within 3 days. Weather cancellations rescheduled or refunded.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "4,130m (Annapurna Base Camp)",
    "requirements": ["Good health condition", "No serious altitude issues history", "Passenger weight under 110kg", "Ability to handle moderate altitude", "No recent heart surgery"],
    "permits": ["Annapurna Conservation Area Permit (ACAP)", "Trekker's Information Management System (TIMS)", "Helicopter landing permit", "Flight operation clearance"],
    "equipment": ["Warm layers (thermals recommended)", "Camera with zoom capability", "Sunglasses and sunscreen", "Comfortable walking shoes", "Water bottle", "Passport/ID copy", "Light backpack"],
  },
  {
    "id": "3",
    "title": "Langtang Valley Helicopter Tour",
    "location": "Langtang Region, Nepal",
    "duration": "3 hours",
    "rating": 4.7,
    "price": 800,
    "excerpt": "Glacier-filled valley adventure with monastery landing experience",
    "description": "Discover the stunning Langtang Valley from above with this scenic helicopter tour. Fly over dramatic glaciers, traditional Tamang villages, and land at Kyanjin Gompa (3,870m) for spectacular views of Langtang Lirung and the surrounding peaks. Experience the beauty of this less-crowded Himalayan region with its rich Tibetan-influenced culture and breathtaking landscapes.",
    "image": "/images/helicopter-3.jpg",
    "images": [
      "/images/helicopter-3.jpg",
      "/images/langtang-helicopter-1.jpg",
      "/images/kyanjin-gompa-1.jpg",
      "/images/langtang-lirung-1.jpg",
      "/images/langtang-glaciers-1.jpg",
      "/images/tamang-village-1.jpg",
      "/images/helicopter-valley-1.jpg",
      "/images/langtang-national-park-1.jpg",
      "/images/gosainkunda-lake-1.jpg",
      "/images/helicopter-mountain-1.jpg",
      "/images/buddhist-monastery-1.jpg",
      "/images/himalayan-landscape-1.jpg"
    ],
    "tags": ["Helicopter Tour", "Langtang Valley", "Glacier Adventure", "Cultural Experience", "Mountain Flight", "Quick Escape", "Scenic Views", "Himalayan Culture"],
    "highlights": [
      "Kyanjin Gompa landing at 3,870m",
      "Langtang Lirung (7,227m) close-up views",
      "Glacier overflight of Langtang Glacier",
      "Tamang culture insight from air",
      "Views of Ganesh Himal range",
      "Flight over traditional Tibetan-style villages"
    ],
    "includes": ["Helicopter flight", "Experienced pilot", "Hotel transfers", "All permits"],
    "excludes": ["Meals", "Personal costs", "Travel insurance"],
    "included": ["Shared helicopter flight from Kathmandu", "Expert pilot familiar with Langtang region", "Hotel transfers in Kathmandu", "All necessary permits (National Park, TIMS)", "Landing at Kyanjin Gompa (15 minutes)", "Flight over Langtang National Park", "Views of Himalayan peaks and glaciers", "Bottled water during flight"],
    "excluded": ["Food and meals during tour", "Personal expenses and shopping", "Travel and medical insurance", "Accommodation in Kathmandu", "Tips for pilot and staff", "Additional activities in Kathmandu"],
    "entryRequirements": ["Valid passport or ID", "Nepal visa"],
    "itinerary": [
      { "day": 1, "title": "Langtang Valley Helicopter Tour - Cultural Flight", "description": "Morning hotel pickup in Kathmandu (7:30 AM), transfer to domestic airport, safety briefing, helicopter flight north to Langtang region, aerial tour over traditional Tamang villages, landing at Kyanjin Gompa for photography and monastery visit (15 minutes), flight over Langtang Glacier, views of Langtang Lirung and surrounding peaks, return flight with views of Gosainkunda region, arrival back in Kathmandu, hotel drop-off by 10:30 AM" }
    ],
    "maxGroupSize": 5,
    "cancellationPolicy": "Free cancellation up to 5 days before departure. 50% refund between 2-5 days. No refund within 2 days. Weather cancellations fully refundable.",
    "isPopular": false,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "3,870m (Kyanjin Gompa)",
    "requirements": ["Basic fitness level", "No serious health conditions", "Comfortable with helicopter travel", "Passenger weight under 110kg", "Ability to walk at moderate altitude"],
    "permits": ["Langtang National Park entry permit", "TIMS card", "Helicopter landing clearance", "Flight operation permit"],
    "equipment": ["Warm jacket and layers", "Camera with extra memory cards", "Sunglasses and hat", "Comfortable shoes", "Personal medications if any", "Small backpack for personal items"],
  }
];

export default function HelicopterSightseeingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const heroImage = "/images/helicopter-tours-hero.jpg";

  // Handle "See Full Details" button click - redirect to detail page
  const handleSeeDetails = (tour: Tour) => {
    // Create slug from title for routing
    const slug = createSlug(tour.title);
    router.push(`/services/helicopter-sightseeing/${slug}`);
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

  // Load helicopter tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(HELICOPTER_TOURS);
      } catch (err) {
        console.error("Error loading helicopter tours:", err);
        setTours(HELICOPTER_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading helicopter tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Helicopter Sightseeing Tours"
        description="Experience the Himalayas from above with our exclusive helicopter tours. Witness breathtaking aerial views of Everest, Annapurna, and Langtang regions without the strenuous trekking. A once-in-a-lifetime adventure awaits."
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
              <p className="text-muted-foreground">No helicopter tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Helicopter Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Pilots</h3>
              <p className="text-muted-foreground">
                Our experienced pilots have extensive knowledge of Himalayan weather and terrain for your safety.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Limited to 5 passengers per flight ensuring everyone has a window seat for optimal views.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle all permits, transfers, and arrangements for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Popular Helicopter Tour Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">⛰️</span>
              </div>
              <h3 className="font-semibold">Everest Region</h3>
              <p className="text-sm text-muted-foreground">Fly over the world's highest peak with landing at Kala Patthar</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🏔️</span>
              </div>
              <h3 className="font-semibold">Annapurna Region</h3>
              <p className="text-sm text-muted-foreground">Spectacular views of Annapurna massif with Muktinath landing</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🌄</span>
              </div>
              <h3 className="font-semibold">Langtang Region</h3>
              <p className="text-sm text-muted-foreground">Dramatic glacier views and landing at Kyanjin Gompa</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🗻</span>
              </div>
              <h3 className="font-semibold">Custom Tours</h3>
              <p className="text-sm text-muted-foreground">Personalized itineraries to remote Himalayan destinations</p>
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