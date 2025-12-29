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
  "id": "1",
  "title": "Nagarkot to Changunarayan Day Hiking",
  "location": "Kathmandu Valley, Nepal",
  "duration": "1 day",
  "rating": 4.9,
  "reviewCount": 210,
  "price": 50,
  "originalPrice": 60,
  "excerpt": "Panoramic Himalayan sunrise views followed by a cultural hike to ancient heritage sites",
  "description": "This classic day hike combines stunning Himalayan vistas with rich cultural heritage. Begin with a spectacular sunrise over the mountains from Nagarkot viewpoint, then descend through lush forests and traditional Tamang and Newari villages. The hike concludes at Changunarayan Temple, one of Nepal's oldest and most important Hindu temples and a UNESCO World Heritage Site. Perfect for those seeking both natural beauty and cultural immersion.",
  "image": "/images/nagarkot-1.jpg",
  "images": [
    "/images/nagarkot-1.jpg",
    
  ],
  "tags": ["Day Hike", "Cultural", "Moderate", "UNESCO"],
  "highlights": ["Sunrise Himalayan panorama", "Traditional village walk", "UNESCO Changunarayan Temple"],
  "includes": ["Professional guide", "Private transportation", "Entry fees", "Breakfast & lunch"],
  "excludes": ["Personal expenses", "Tips", "Travel insurance"],
  "itinerary": [
    { "day": 1, "title": "Nagarkot Sunrise to Changunarayan", "description": "Early morning pick-up, drive to Nagarkot for sunrise views over Himalayas, begin hiking through forests and villages, visit Changunarayan Temple, return to Kathmandu" }
  ],
  "maxGroupSize": 10,
  "included": ["Professional English-speaking guide", "Private vehicle transportation", "All entry fees and permits", "Breakfast at Nagarkot viewpoint", "Packed lunch", "First aid kit"],
  "excluded": ["Personal expenses and souvenirs", "Gratuities for guide/driver", "Travel/medical insurance", "Additional snacks/drinks"],
  "cancellationPolicy": "Free cancellation up to 24 hours before departure. 50% refund if cancelled 12-24 hours before. No refund within 12 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "2,195m (Nagarkot)",
  "requirements": ["Moderate fitness level", "Ability to walk 4-5 hours on varied terrain", "Comfortable with gradual descents"],
  "permits": ["None required for day hike"],
  "equipment": ["Sturdy hiking shoes", "Day pack (20-30L)", "Water bottle (2L recommended)", "Sun protection (hat, sunglasses, sunscreen)", "Light jacket/warm layer", "Camera"],
  "entryRequirements": ["None"]
},
{
  "id": "2",
  "title": "Dhulikhel to Panauti Day Hiking",
  "location": "Kavrepalanchok District, Nepal",
  "duration": "1 day",
  "rating": 4.6,
  "reviewCount": 89,
  "price": 40,
  "originalPrice": 50,
  "excerpt": "Historical trail connecting two ancient Newari towns with traditional architecture",
  "description": "Explore the living history of Nepal on this gentle day hike connecting Dhulikhel and Panauti, two beautifully preserved Newari towns. Walk through terraced farmlands, cross traditional suspension bridges, and witness daily rural life. The hike culminates in Panauti, considered one of Nepal's most important medieval towns, featuring exceptional woodcarving, metalwork, and ancient temples at the sacred confluence of two rivers.",
  "image": "/images/dhulikhel-1.jpg",
  "images": [
    "/images/dhulikhel-1.jpg",
 

  ],
  "tags": ["Day Hike", "Cultural", "Easy", "Historical"],
  "highlights": ["Newari architecture & culture", "Terraced farmland views", "Panauti's ancient temples & river confluence"],
  "includes": ["Guide", "Transportation", "Lunch", "Entry fees"],
  "excludes": ["Personal expenses", "Tips", "Monastery donations"],
  "itinerary": [
    { "day": 1, "title": "Dhulikhel Exploration to Panauti", "description": "Drive to Dhulikhel, explore old town and Kali Temple, hike through villages and farms to Panauti, visit Indreshwor Temple complex, return to Kathmandu" }
  ],
  "maxGroupSize": 12,
  "included": ["Knowledgeable local guide", "Round-trip private transportation", "All monument entry fees", "Traditional Nepali lunch", "Bottled water"],
  "excluded": ["Personal shopping", "Additional donations at temples", "Travel insurance", "Alcoholic beverages"],
  "cancellationPolicy": "Free cancellation up to 48 hours before departure. 50% refund if cancelled 24-48 hours before.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,550m (Dhulikhel)",
  "requirements": ["Basic fitness", "Comfortable walking on flat and gentle downhill trails"],
  "permits": ["None"],
  "equipment": ["Comfortable walking shoes", "Small day pack", "Water bottle", "Sun hat", "Light rain jacket (seasonal)"],
  "entryRequirements": ["None"]
},
{
  "id": "3",
  "title": "Pharping to Champadevi Hiking",
  "location": "Southern Kathmandu Valley, Nepal",
  "duration": "1 day",
  "rating": 4.7,
  "reviewCount": 134,
  "price": 45,
  "originalPrice": 55,
  "excerpt": "Spiritual journey to a sacred hilltop with panoramic valley views",
  "description": "A rewarding day hike combining spirituality, nature, and panoramic views. Start at the sacred Buddhist meditation sites of Pharping, then ascend through dense rhododendron and pine forests to the summit of Champadevi (2,278m). The peak is crowned with Buddhist stupas and offers one of the best 360-degree views of the Kathmandu Valley and Himalayan ranges to the north. A perfect escape for both spiritual seekers and hiking enthusiasts.",
  "image":  "/images/pharping-1.jpg",
  "images": [
"/images/pharping-1.jpg",
 ],
  "tags": ["Day Hike", "Nature", "Moderate", "Spiritual"],
  "highlights": ["Sacred Buddhist sites of Pharping", "Champadevi summit with 360° views", "Forest walk with rhododendrons (spring)"],
  "includes": ["Guide", "Transportation", "Lunch", "Entry fees"],
  "excludes": ["Personal expenses", "Tips", "Travel insurance"],
  "itinerary": [
    { "day": 1, "title": "Pharping Temples to Champadevi Summit", "description": "Drive to Pharping, visit sacred caves and monasteries, ascend to Champadevi summit for views, enjoy packed lunch, descend via alternative trail, return to Kathmandu" }
  ],
  "maxGroupSize": 8,
  "included": ["Experienced hiking guide", "Private vehicle transport", "Lunch and snacks", "All required permits", "First aid kit"],
  "excluded": ["Personal trekking gear", "Additional drinks", "Travel/medical insurance", "Monastery donations (optional)"],
  "cancellationPolicy": "Free cancellation up to 24 hours before. No refund within 24 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "2,278m (Champadevi summit)",
  "requirements": ["Good fitness level", "Ability to hike uphill for 2-3 hours", "Comfortable with stairs and uneven trails"],
  "permits": ["None required"],
  "equipment": ["Sturdy hiking boots", "Day pack (20-30L)", "At least 2L water", "Warm layer and rain jacket", "Sun protection", "Trekking poles (optional)"],
  "entryRequirements": ["None"]
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
    <h2 className="text-3xl font-bold text-center mb-8">Day Hiking Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="text-center p-6 bg-background rounded-lg shadow hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary font-bold">🥾</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">All Levels Welcome</h3>
        <p className="text-muted-foreground">Easy to moderate trails suitable for beginners to experienced hikers</p>
      </div>
      <div className="text-center p-6 bg-background rounded-lg shadow hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary font-bold">🌄</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Panoramic Views</h3>
        <p className="text-muted-foreground">Stunning Himalayan vistas and valley landscapes</p>
      </div>
      <div className="text-center p-6 bg-background rounded-lg shadow hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary font-bold">🏞️</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Nature Immersion</h3>
        <p className="text-muted-foreground">Forest trails, rivers, waterfalls, and local flora/fauna</p>
      </div>
      <div className="text-center p-6 bg-background rounded-lg shadow hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary font-bold">🍛</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Picnic Lunch</h3>
        <p className="text-muted-foreground">Traditional Nepali lunch with scenic views along the trail</p>
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