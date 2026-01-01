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
  "title": "Nagarkot to Changunarayan Day Hike",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.9,
  "price": 60,
  "originalPrice": 70,
  "excerpt": "Panoramic Himalayan sunrise views followed by a cultural hike to ancient heritage sites.",
  "description": "This classic day hike combines stunning Himalayan vistas with rich cultural heritage. Begin with a spectacular sunrise over the mountains from Nagarkot viewpoint, then descend through lush forests and traditional Tamang and Newari villages. The hike concludes at Changunarayan Temple, one of Nepal's oldest and most important Hindu temples and a UNESCO World Heritage Site. Perfect for those seeking both natural beauty and cultural immersion.",
  "image": "/images/nagarkot-1.jpg",
  "images": ["/images/nagarkot-1.jpg", "/images/nagarkot-2.jpg"],
  "tags": ["Day Hike", "Cultural", "Sunrise", "UNESCO", "Kathmandu Valley", "Nepal"],
  "highlights": [
    "Sunrise Himalayan panorama from Nagarkot (2,195m)",
    "Traditional village walk through Tamang and Newari communities",
    "Visit UNESCO World Heritage Site Changunarayan Temple",
    "Easy accessibility from Kathmandu",
    "Perfect combination of nature and culture"
  ],
  "includes": ["Professional English-speaking Guide", "Private Transportation (pickup/dropoff)", "All Entry Fees and Permits", "Breakfast at Nagarkot Viewpoint", "Packed Lunch", "First Aid Kit", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Extra accommodation beyond itinerary"],
  "included": ["Professional English-speaking Guide", "Private Transportation (pickup/dropoff)", "All Entry Fees and Permits", "Breakfast at Nagarkot Viewpoint", "Packed Lunch", "First Aid Kit", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Nagarkot Sunrise & Hike to Changunarayan", "description": "Early morning pickup from hotel (approx 4:30 AM). Drive to Nagarkot for sunrise over Himalayan ranges including Everest, Langtang, and Ganesh Himal. After breakfast, begin hiking through forests and traditional villages. Visit Changunarayan Temple (UNESCO site). Drive back to Kathmandu. Dropoff at hotel by late afternoon." }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Free cancellation up to 24 hours before departure. 50% refund if cancelled 12-24 hours before. No refund within 12 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "2,195m (Nagarkot)",
  "requirements": ["Moderate fitness level", "Ability to walk 4-5 hours on varied terrain", "Comfortable with gradual descents"],
  "permits": ["None required for day hike"],
  "equipment": ["Sturdy hiking shoes", "Day pack (20-30L)", "Water bottle (2L recommended)", "Sun protection (hat, sunglasses, sunscreen)", "Light jacket/warm layer", "Camera"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)",]
},
{
  "id": "2",
  "title": "Dhulikhel to Panauti Day Hike",
  "location": "Nepal (Kavrepalanchok District)",
  "duration": "1 day",
  "rating": 4.6,
  "price": 50,
  "originalPrice": 60,
  "excerpt": "Historical trail connecting two ancient Newari towns with traditional architecture.",
  "description": "Explore the living history of Nepal on this gentle day hike connecting Dhulikhel and Panauti, two beautifully preserved Newari towns. Walk through terraced farmlands, cross traditional suspension bridges, and witness daily rural life. The hike culminates in Panauti, considered one of Nepal's most important medieval towns, featuring exceptional woodcarving, metalwork, and ancient temples at the sacred confluence of two rivers.",
  "image": "/images/dhulikhel-1.jpg",
  "images": ["/images/dhulikhel-1.jpg", "/images/dhulikhel-2.jpg"],
  "tags": ["Day Hike", "Cultural", "Historical", "Newari Architecture", "Easy Hike", "Nepal"],
  "highlights": [
    "Explore Newari architecture & culture in Dhulikhel",
    "Walk through beautiful terraced farmlands",
    "Visit Panauti's ancient temples & sacred river confluence",
    "Traditional suspension bridge crossings",
    "Experience rural Nepali village life"
  ],
  "includes": ["Professional Local Guide", "Private Transportation", "All Monument Entry Fees", "Traditional Nepali Lunch", "Bottled Water", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Extra accommodation beyond itinerary"],
  "included": ["Professional Local Guide", "Private Transportation", "All Monument Entry Fees", "Traditional Nepali Lunch", "Bottled Water", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Dhulikhel Exploration to Panauti", "description": "Morning pickup from hotel (approx 7:00 AM). Drive to Dhulikhel, explore old town and Kali Temple. Begin hiking through villages and farms to Panauti. Visit Indreshwor Temple complex at sacred river confluence. Enjoy traditional Nepali lunch. Drive back to Kathmandu. Dropoff at hotel by late afternoon." }
  ],
  "maxGroupSize": 12,
  "cancellationPolicy": "Free cancellation up to 48 hours before departure. 50% refund if cancelled 24-48 hours before.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,550m (Dhulikhel)",
  "requirements": ["Basic fitness", "Comfortable walking on flat and gentle downhill trails"],
  "permits": ["None"],
  "equipment": ["Comfortable walking shoes", "Small day pack", "Water bottle", "Sun hat", "Light rain jacket (seasonal)"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)",]
},
{
  "id": "3",
  "title": "Pharping to Champadevi Day Hike",
  "location": "Nepal (Southern Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.7,
  "price": 55,
  "originalPrice": 67,
  "excerpt": "Spiritual journey to a sacred hilltop with panoramic valley views.",
  "description": "A rewarding day hike combining spirituality, nature, and panoramic views. Start at the sacred Buddhist meditation sites of Pharping, then ascend through dense rhododendron and pine forests to the summit of Champadevi (2,278m). The peak is crowned with Buddhist stupas and offers one of the best 360-degree views of the Kathmandu Valley and Himalayan ranges to the north. A perfect escape for both spiritual seekers and hiking enthusiasts.",
  "image": "/images/pharping-1.jpg",
  "images": ["/images/pharping-1.jpg", "/images/pharping-2.jpg"],
  "tags": ["Day Hike", "Nature", "Spiritual", "Panoramic Views", "Moderate Hike", "Nepal"],
  "highlights": [
    "Visit sacred Buddhist sites of Pharping",
    "Champadevi summit with 360° views of Kathmandu Valley and Himalayas",
    "Forest walk with rhododendrons (spectacular in spring)",
    "Peaceful spiritual atmosphere",
    "Escape from city hustle"
  ],
  "includes": ["Experienced Hiking Guide", "Private Transportation", "Lunch and Snacks", "All Required Permits", "First Aid Kit", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Extra accommodation beyond itinerary"],
  "included": ["Experienced Hiking Guide", "Private Transportation", "Lunch and Snacks", "All Required Permits", "First Aid Kit", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Extra accommodation beyond itinerary"],
  "itinerary": [
    { "day": 1, "title": "Pharping Temples to Champadevi Summit", "description": "Morning pickup from hotel (approx 7:00 AM). Drive to Pharping, visit sacred caves and monasteries. Ascend to Champadevi summit for panoramic views. Enjoy packed lunch at viewpoint. Descend via alternative trail. Drive back to Kathmandu. Dropoff at hotel by late afternoon." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Free cancellation up to 24 hours before. No refund within 24 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "2,278m (Champadevi summit)",
  "requirements": ["Good fitness level", "Ability to hike uphill for 2-3 hours", "Comfortable with stairs and uneven trails"],
  "permits": ["None required"],
  "equipment": ["Sturdy hiking boots", "Day pack (20-30L)", "At least 2L water", "Warm layer and rain jacket", "Sun protection", "Trekking poles (optional)"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)", ]
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