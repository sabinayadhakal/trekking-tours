"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

export default function TibetPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  // Mock Tibet tours data
  const mockTibetTours: Tour[] = [
  {
    "id": "1",
    "title": "Lhasa Cultural Discovery Tour",
    "location": "Lhasa, Tibet",
    "duration": "3 Days",
    "rating": 4.9,
    "reviewCount": 78,
    "price": 899,
    "originalPrice": 999,
    "excerpt": "Explore the spiritual heart of Tibet with visits to ancient monasteries and palaces",
    "description": "Immerse yourself in the rich spiritual heritage of Lhasa. Visit iconic landmarks including the Potala Palace, Jokhang Temple, and ancient monasteries while experiencing authentic Tibetan Buddhist culture.",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    "tags": ["Cultural", "Spiritual", "UNESCO", "Buddhist"],
    "highlights": [
      "Potala Palace UNESCO World Heritage Site",
      "Jokhang Temple - Tibet's Holiest Shrine",
      "Barkhor Street Pilgrimage Circuit",
      "Sera Monastery Buddhist Debates"
    ],
    "includes": [
      "All Tibet travel permits",
      "Expert Tibetan English-speaking guide",
      "Comfortable hotel accommodations",
      "All entrance fees to monuments"
    ],
    "excludes": [
      "China/Tibet visa fees",
      "International flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "included": [
      "All Tibet travel permits",
      "Expert Tibetan English-speaking guide",
      "Comfortable hotel accommodations",
      "All entrance fees to monuments"
    ],
    "excluded": [
      "China/Tibet visa fees",
      "International flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "entryRequirements": [
      "Chinese visa with Tibet endorsement",
      "Tibet Travel Permit (arranged by us)",
      "Alien Travel Permit for remote areas",
      "Military permit for restricted zones"
    ],
    "requirements": [
      "Respect for religious customs",
      "Moderate fitness for high altitude",
      "Warm clothing for variable weather"
    ],
    "itinerary": [
      { "day": 1, "title": "Arrival in Lhasa", "description": "Arrive in Lhasa, transfer to hotel, and acclimatize to high altitude" },
      { "day": 2, "title": "Potala Palace & Jokhang Temple", "description": "Visit the magnificent Potala Palace and sacred Jokhang Temple" },
      { "day": 3, "title": "Barkhor Street & Sera Monastery", "description": "Walk the pilgrimage circuit and attend Sera Monastery debates before departure" }
    ],
    "maxGroupSize": 10,
    "cancellationPolicy": "Free cancellation up to 45 days before departure due to permit processing requirements.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "Moderate",
    "maxAltitude": "3,650m",
    "permits": ["Tibet Travel Permit", "Alien Travel Permit", "Monastery entry permits"],
    "equipment": ["Warm layers", "Comfortable walking shoes", "Sunglasses", "Camera"]
  },
  {
    "id": "2",
    "title": "Everest Base Camp Tibet Tour",
    "location": "Tingri, Rongbuk Valley",
    "duration": "4 Days",
    "rating": 4.7,
    "reviewCount": 62,
    "price": 1199,
    "originalPrice": 1399,
    "excerpt": "Witness the north face of Mount Everest from Tibet",
    "description": "Experience the world's highest peak from the Tibetan side. Drive to Rongbuk Valley, home to the world's highest monastery, and stand at Everest Base Camp with breathtaking views of the north face.",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "images": [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    "tags": ["Everest", "Adventure", "Landscape", "Monastery"],
    "highlights": [
      "Tibet Everest Base Camp (5,200m)",
      "Rongbuk Monastery - World's Highest",
      "Views of Everest North Face",
      "Friendship Highway Scenery"
    ],
    "includes": [
      "All necessary Tibet permits",
      "Comfortable vehicle with driver",
      "Hotel and guesthouse accommodation",
      "English-speaking Tibetan guide"
    ],
    "excludes": [
      "Personal expenses",
      "Optional activities",
      "Tips for guide and driver"
    ],
    "included": [
      "All necessary Tibet permits",
      "Comfortable vehicle with driver",
      "Hotel and guesthouse accommodation",
      "English-speaking Tibetan guide"
    ],
    "excluded": [
      "Personal expenses",
      "Optional activities",
      "Tips for guide and driver"
    ],
    "entryRequirements": [
      "Chinese visa with Tibet permit",
      "Good health for high altitude",
      "Valid passport"
    ],
    "requirements": [
      "Good health condition",
      "Warm clothing for cold temperatures",
      "Camera for spectacular photos"
    ],
    "itinerary": [
      { "day": 1, "title": "Lhasa to Shigatse", "description": "Scenic drive along the Friendship Highway with monastery visits" },
      { "day": 2, "title": "Shigatse to Rongbuk Valley", "description": "Drive through stunning landscapes to the highest monastery in the world" },
      { "day": 3, "title": "Everest Base Camp Excursion", "description": "Visit Everest Base Camp, enjoy panoramic views and photography opportunities" },
      { "day": 4, "title": "Return to Lhasa", "description": "Drive back along Friendship Highway with cultural stops before departure" }
    ],
    "maxGroupSize": 12,
    "cancellationPolicy": "Free cancellation up to 30 days before departure for Everest tours.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "Moderate",
    "maxAltitude": "5,200m",
    "permits": ["Tibet Travel Permit", "Alien Travel Permit", "Everest Nature Reserve Permit"],
    "equipment": ["Warm clothing", "Sunglasses", "Sun protection", "Daypack"]
  },
  {
    "id": "3",
    "title": "Tibetan Monastery Retreat Experience",
    "location": "Various Monasteries",
    "duration": "5 Days",
    "rating": 5.0,
    "reviewCount": 23,
    "price": 1399,
    "originalPrice": 1599,
    "excerpt": "Deep spiritual immersion in Tibetan Buddhist monasteries",
    "description": "Participate in authentic Buddhist practices and meditation sessions in remote Tibetan monasteries. Live with monks, learn about Tibetan Buddhism, and experience the peaceful monastic lifestyle.",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "images": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    "tags": ["Retreat", "Meditation", "Buddhist", "Spiritual"],
    "highlights": [
      "Monastic accommodation experience",
      "Morning prayer sessions with monks",
      "Buddhist philosophy teachings",
      "Meditation and mindfulness practices"
    ],
    "includes": [
      "Monastery accommodation and meals",
      "Buddhist teaching sessions",
      "Meditation guidance",
      "All required permits and donations"
    ],
    "excludes": [
      "Personal spiritual items",
      "Additional donations",
      "International flights"
    ],
    "included": [
      "Monastery accommodation and meals",
      "Buddhist teaching sessions",
      "Meditation guidance",
      "All required permits and donations"
    ],
    "excluded": [
      "Personal spiritual items",
      "Additional donations",
      "International flights"
    ],
    "entryRequirements": [
      "Open mind and respectful attitude",
      "Chinese visa with Tibet permit",
      "Interest in Buddhist philosophy"
    ],
    "requirements": [
      "Respect for monastic rules",
      "Modest clothing",
      "Openness to spiritual practices"
    ],
    "itinerary": [
      { "day": 1, "title": "Arrival and Orientation", "description": "Settle into monastery accommodation and learn daily routines" },
      { "day": 2, "title": "Meditation and Study", "description": "Attend morning prayers and learn Buddhist philosophy" },
      { "day": 3, "title": "Monastic Life Experience", "description": "Participate in daily monastic activities and meditation sessions" },
      { "day": 4, "title": "Cultural Excursion", "description": "Visit nearby sacred sites and interact with local monks" },
      { "day": 5, "title": "Departure", "description": "Final reflections and transfer back to Lhasa or airport" }
    ],
    "maxGroupSize": 6,
    "cancellationPolicy": "Special cancellation policy for monastery retreats - 45 days notice required.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "Easy",
    "maxAltitude": "3,800m",
    "permits": ["Tibet Travel Permit", "Monastery stay permission"],
    "equipment": ["Modest clothing", "Journal for reflections", "Personal meditation cushion"]
  }
]


  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTours(mockTibetTours)
      } catch (err) {
        console.error('Error loading tours:', err)
      } finally {
        setLoading(false)
      }
    }

    loadTours()
  }, [])

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedTour(null)
  }

  if (loading) {
    return (
      <ThemeProvider>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-200 rounded-lg h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <Notifications showTestToast={true} />

      {/* Hero section */}
      <Hero
        title="Discover the Mystical Land of Tibet"
        description="Experience ancient monasteries, breathtaking landscapes, and rich Buddhist culture in the Roof of the World."
        backgroundImage="/images/tibet-hero.png"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Tibet Journeys</h2>
        {tours.length > 0 ? (
          <ToursGrid tours={tours} onTourSelect={handleTourSelect} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No tours available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new Tibet tour offerings.
            </p>
          </div>
        )}
      </section>

      {/* Trip Detail Modal */}
      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </ThemeProvider>
  )
}