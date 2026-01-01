"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock day sightseeing tours data
const DAY_SIGHTSEEING_TOURS: Tour[] = [
 {
  "id": "1",
  "title": "Free Walking Tour Kathmandu",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "4 hours",
  "rating": 4.8,
  "price": 0,
  "originalPrice": 0,
  "excerpt": "Explore the cultural heart of Kathmandu on foot with a local expert.",
  "description": "Walk through Kathmandu's historic streets, visit key heritage sites, and experience local life with an expert guide on this immersive walking tour. Discover hidden alleys, bustling markets, and ancient temples while learning about Kathmandu's rich history and culture from a knowledgeable local.",
  "image": "/images/FWT-3.jpg",
  "images": [
    "/images/FWT-3.jpg",
    "/images/asan_market-1.jpg",
    "/images/swoyambhunath-2.jpg"
  ],
  "tags": ["Walking Tour", "Cultural", "Heritage", "Free Tour", "Half Day", "Nepal", "Local Experience"],
  "highlights": [
    "Explore Old Kathmandu Streets and hidden alleys",
    "Visit bustling local markets like Asan Market",
    "Discover heritage temples and traditional architecture",
    "Experience daily life in Kathmandu's historic neighborhoods",
    "Learn about Kathmandu's rich history from local guide"
  ],
  "includes": ["Professional English-speaking Guide", "Tour of key heritage sites"],
  "excludes": ["Food and beverages", "Transportation to meeting point", "Entry fees to monuments", "Tips for guide", "Travel insurance"],
  "included": ["Professional English-speaking Guide", "Tour of key heritage sites"],
  "excluded": ["Food and beverages", "Transportation to meeting point", "Entry fees to monuments", "Tips for guide", "Travel insurance"],
  "itinerary": [
    { "day": 1, "title": "Kathmandu Heritage Walking Tour", "description": "Meet in Thamel at designated time. Walk through Asan Market, Indrachowk, Durbar Square area, and surrounding heritage alleys. Learn about local culture, history, and architecture. Tour ends at starting point." }
  ],
  "maxGroupSize": 15,
  "cancellationPolicy": "Free cancellation anytime before tour start.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,350m",
  "requirements": ["Comfortable walking shoes", "Ability to walk 3-4 hours on city streets"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Water bottle", "Sun protection", "Small backpack"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "2",
  "title": "Kapan Gumba, Bouddhanath & Pashupatinath Day Tour",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "6 hours",
  "rating": 4.9,
  "price": 50,
  "originalPrice": 55,
  "excerpt": "Spiritual journey through sacred Buddhist and Hindu sites in Kathmandu.",
  "description": "Experience the tranquility of Kapan Gumba, the grandeur of Bouddhanath Stupa, and the spiritual significance of Pashupatinath Temple. This comprehensive tour offers insight into both Buddhist and Hindu traditions, showcasing some of Nepal's most important religious sites with comfortable transportation and expert guidance.",
  "image": "/images/boudhanath-1.jpg",
  "images": [
    "/images/boudhanath-1.jpg",
    "/images/pashupati-1.jpg",
    "/images/kapan-1.jpg"
  ],
  "tags": ["Spiritual", "Cultural", "Religious Sites", "Half Day", "Heritage", "Nepal", "UNESCO"],
  "highlights": [
    "Visit Kapan Gumba Monastery - important Tibetan Buddhist monastery",
    "Explore Bouddhanath Stupa - UNESCO World Heritage Site",
    "Experience Pashupatinath Temple - sacred Hindu temple complex",
    "Learn about Buddhist and Hindu traditions",
    "Witness spiritual rituals and ceremonies"
  ],
  "includes": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley", "Bottled Water"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "included": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley", "Bottled Water"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "itinerary": [
    { "day": 1, "title": "Spiritual Sites Day Tour", "description": "Morning pickup from hotel. Visit Kapan Gumba Monastery to observe Buddhist practices. Continue to Bouddhanath Stupa (UNESCO site) to explore the largest stupa in Nepal. Proceed to Pashupatinath Temple, one of Hinduism's most sacred sites. Return to hotel by afternoon." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Free cancellation up to 24 hours before tour. No refund within 24 hours.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,350m",
  "requirements": ["Comfortable walking shoes", "Respectful attire for religious sites", "Ability to walk moderate distances"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Modest clothing (shoulders and knees covered)", "Water bottle", "Camera"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
 {
  "id": "3",
  "title": "Patan Durbar Square, Pashupatinath and Bouddhanath Day Tour",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.7,
  "price": 55,
  "originalPrice": 60,
  "excerpt": "Explore ancient royal squares and sacred religious sites in one comprehensive tour.",
  "description": "Discover the artistic heritage of Patan Durbar Square, one of the three royal squares of the Kathmandu Valley, followed by the spiritual significance of Pashupatinath Temple and Bouddhanath Stupa. This tour offers a perfect blend of cultural history and religious insight.",
  "image": "/images/patan-1.jpg",
  "images": [
    "/images/patan-1.jpg",
    "/images/patan-2.jpg",
    "/images/boudhanath-1.jpg"
  ],
  "tags": ["Full Day", "UNESCO", "Cultural", "Religious", "Heritage", "Nepal"],
  "highlights": [
    "Patan Durbar Square - UNESCO World Heritage Site with exquisite architecture",
    "Pashupatinath Temple - Sacred Hindu temple complex on the Bagmati River",
    "Bouddhanath Stupa - One of the largest Buddhist stupas in the world",
    "Newari woodcarving and metalwork",
    "Spiritual rituals and cultural traditions"
  ],
  "includes": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "included": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "itinerary": [
    { "day": 1, "title": "Heritage & Spiritual Tour", "description": "Morning pickup from hotel. Visit Patan Durbar Square to explore ancient palaces and temples. Continue to Pashupatinath Temple to witness Hindu rituals. Proceed to Bouddhanath Stupa for Buddhist cultural experience. Return to hotel." }
  ],
  "maxGroupSize": 10,
  "cancellationPolicy": "Free cancellation up to 24 hours before tour. No refund within 24 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,350m",
  "requirements": ["Comfortable walking shoes", "Respectful attire for religious sites", "Ability to walk moderate distances"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Water bottle", "Camera", "Sun protection"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "4",
  "title": "Patan Durbar Square, Bungamati and Khokana Day Tour",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.9,
  "price": 55,
  "originalPrice": 60,
  "excerpt": "Traditional Newari village exploration combined with royal heritage discovery.",
  "description": "Experience the authentic charm of traditional Newari villages Bungamati and Khokana, then explore the artistic heritage of Patan Durbar Square. This tour offers a deep dive into living Newari culture, traditional crafts, and preserved village life just outside Kathmandu.",
  "image": "/images/bungamati-1.jpg",
  "images": [
    "/images/bungamati-1.jpg",
    "/images/khokana-1.jpg",
    "/images/patan-1.jpg"
  ],
  "tags": ["Cultural", "Village Tour", "Full Day", "Newari", "Traditional", "Nepal"],
  "highlights": [
    "Patan Durbar Square - UNESCO World Heritage Site",
    "Bungamati Village - Traditional Newari settlement with Rato Machhendranath Temple",
    "Khokana Village - Famous for mustard oil production and traditional crafts",
    "Newari architecture and woodcarving",
    "Authentic village life experience"
  ],
  "includes": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "included": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "itinerary": [
    { "day": 1, "title": "Village and Heritage Tour", "description": "Morning pickup from hotel. Visit Bungamati Village to see traditional Newari houses. Continue to Khokana Village to observe traditional crafts. Conclude at Patan Durbar Square to explore royal heritage. Return to hotel." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Free cancellation up to 24 hours before tour. No refund within 24 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,350m",
  "requirements": ["Comfortable walking shoes", "Ability to walk on village trails", "Respect for local customs"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Water bottle", "Camera", "Sun protection"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "5",
  "title": "Kathmandu Durbar Square, Swayambhunath, Bouddhanath and Pashupatinath Tour",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.8,
  "price": 70,
  "originalPrice": 80,
  "excerpt": "Complete cultural and spiritual tour covering all major UNESCO sites in Kathmandu.",
  "description": "Explore the royal heritage of Kathmandu Durbar Square, the panoramic views from Swayambhunath (Monkey Temple), and the spiritual centers of Bouddhanath and Pashupatinath. This comprehensive tour offers a complete overview of Kathmandu's cultural and religious diversity.",
  "image": "/images/ktm_durbar_square-2.jpg",
  "images": [
    "/images/ktm_durbar_square-2.jpg",
    "/images/swoyambhunath-1.jpg",
    "/images/boudhanath-1.jpg"
  ],
  "tags": ["Cultural", "Spiritual", "UNESCO", "Full Day", "Heritage", "Nepal"],
  "highlights": [
    "Kathmandu Durbar Square - Ancient royal palace complex",
    "Swayambhunath - Hilltop stupa with panoramic views of Kathmandu",
    "Bouddhanath - Largest Buddhist stupa in Nepal",
    "Pashupatinath - Sacred Hindu temple complex on Bagmati River",
    "Complete cultural immersion"
  ],
  "includes": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "included": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "itinerary": [
    { "day": 1, "title": "Complete Kathmandu Tour", "description": "Morning pickup from hotel. Visit Kathmandu Durbar Square. Continue to Swayambhunath for panoramic views. Proceed to Bouddhanath Stupa. Conclude at Pashupatinath Temple. Return to hotel." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Free cancellation up to 24 hours before tour. No refund within 24 hours.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "easy to moderate",
  "maxAltitude": "1,401m",
  "requirements": ["Comfortable walking shoes", "Ability to climb stairs at Swayambhunath", "Modest clothing for religious sites"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Water bottle", "Camera", "Sun protection", "Light jacket"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "6",
  "title": "Bhaktapur Durbar Square + Patan Durbar Square Tour",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.8,
  "price": 70,
  "originalPrice": 78,
  "excerpt": "Medieval city exploration of two UNESCO World Heritage Sites showcasing Newari architecture.",
  "description": "Discover the ancient royal squares of Bhaktapur and Patan, showcasing exquisite Newari architecture, woodcarving, and craftsmanship. These two medieval cities offer a fascinating glimpse into Nepal's artistic and cultural heritage.",
  "image": "/images/bhaktapur-1.jpg",
  "images": [
    "/images/bhaktapur-1.jpg",
    "/images/patan-1.jpg",
    "/images/bhaktapur-2.jpg"
  ],
  "tags": ["UNESCO", "Medieval", "Architectural", "Full Day", "Newari", "Nepal"],
  "highlights": [
    "Bhaktapur Durbar Square - Best preserved medieval city in Nepal",
    "Patan Durbar Square - City of fine arts and crafts",
    "Newari architecture, woodcarving and metalwork",
    "Traditional pottery square in Bhaktapur",
    "Golden Temple and Krishna Temple in Patan"
  ],
  "includes": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "included": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "itinerary": [
    { "day": 1, "title": "Medieval Cities Tour", "description": "Morning pickup from hotel. Visit Bhaktapur Durbar Square to explore medieval architecture. Continue to Patan Durbar Square to see fine arts and crafts. Return to hotel." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Free cancellation up to 24 hours before tour. No refund within 24 hours.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,350m",
  "requirements": ["Comfortable walking shoes", "Ability to walk on cobblestone streets", "Interest in architecture and history"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Water bottle", "Camera", "Sun protection"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
},
{
  "id": "7",
  "title": "Dakshinkali, Pharping and Kirtipur Tour",
  "location": "Nepal (Kathmandu Valley)",
  "duration": "1 day",
  "rating": 4.6,
  "price": 60,
  "originalPrice": 75,
  "excerpt": "Spiritual pilgrimage and historical hilltop town visit in Kathmandu's southern valley.",
  "description": "Visit the sacred Dakshinkali Temple, explore the Buddhist pilgrimage site of Pharping, and discover the ancient hilltop town of Kirtipur. This tour combines Hindu and Buddhist spiritual sites with historical exploration.",
  "image": "/images/dakshinkali-1.jpg",
  "images": [
    "/images/dakshinkali-1.jpg",
    "/images/pharping-1.jpg",
    "/images/kirtipur-1.jpg"
  ],
  "tags": ["Spiritual", "Pilgrimage", "Historical", "Full Day", "Hindu", "Buddhist", "Nepal"],
  "highlights": [
    "Dakshinkali Temple - Important Hindu temple dedicated to Goddess Kali",
    "Pharping - Sacred Buddhist site with caves and monasteries",
    "Kirtipur - Ancient hilltop town with rich history",
    "Spiritual rituals and ceremonies",
    "Panoramic views of Kathmandu Valley"
  ],
  "includes": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excludes": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "included": ["Professional English-speaking Guide", "Private Air-conditioned Vehicle", "All Monument Entry Fees", "Hotel Pickup/Dropoff within Kathmandu Valley"],
  "excluded": ["International Flights", "Nepal Visa", "Personal expenses & beverages", "Travel insurance", "Tips for guide & driver", "Lunch"],
  "itinerary": [
    { "day": 1, "title": "Spiritual & Historical Tour", "description": "Morning pickup from hotel. Visit Dakshinkali Temple to witness Hindu rituals. Continue to Pharping for Buddhist sites. Conclude at Kirtipur hilltop town. Return to hotel." }
  ],
  "maxGroupSize": 8,
  "cancellationPolicy": "Free cancellation up to 24 hours before tour. No refund within 24 hours.",
  "isPopular": false,
  "isSoldOut": false,
  "difficulty": "moderate",
  "maxAltitude": "1,500m",
  "requirements": ["Comfortable walking shoes", "Moderate fitness for hill walking", "Respect for religious customs"],
  "permits": ["None required"],
  "equipment": ["Comfortable walking shoes", "Water bottle", "Camera", "Sun protection", "Light jacket"],
  "entryRequirements": ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
}

  
]


export default function DaySightseeingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for cultural tours
  const heroImage = "/images/day-sightseeing-hero.jpg"; // Change this to your desired image path

  // Load day sightseeing tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(DAY_SIGHTSEEING_TOURS);
      } catch (err) {
        console.error("Error loading cultural tours:", err);
        setTours(DAY_SIGHTSEEING_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading cultural tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Updated Hero section with image for cultural tours */}
      <Hero 
        title="Kathmandu Cultural Tours"
        description="Discover the rich heritage of the Kathmandu Valley with our curated cultural tours. Explore ancient temples, medieval palaces, and vibrant local traditions with expert guides."
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
              <p className="text-muted-foreground">No cultural tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections remain the same */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Cultural Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Local Expert Guides</h3>
              <p className="text-muted-foreground">
                Our knowledgeable Nepali guides provide deep insights into culture, history, and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Enjoy personalized attention with small group sizes for a more intimate experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle transportation, entry fees, and meals so you can focus on the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Cultural Sites</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🛕</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">UNESCO Sites</h3>
              <p className="text-muted-foreground">7 Cultural World Heritage Sites in Kathmandu Valley</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🕌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sacred Temples</h3>
              <p className="text-muted-foreground">Hindu and Buddhist temples with centuries of history</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ancient Palaces</h3>
              <p className="text-muted-foreground">Royal palaces showcasing Newari architecture</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🛍️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Markets</h3>
              <p className="text-muted-foreground">Traditional markets with handicrafts and local products</p>
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