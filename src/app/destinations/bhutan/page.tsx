"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

export default function BhutanPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  // Mock Bhutan tours data
  const mockBhutanTours: Tour[] = 
    [
  // 1 NIGHT 2 DAYS
  {
    id: "B1",
    title: "Paro Weekend Escape",
    location: "Paro",
    duration: "2 Days",
    rating: 4.7,
    reviewCount: 19,
    price: 499,
    originalPrice: 549,
    excerpt: "A quick cultural gateway into Bhutan's heritage",
    description: "A short but immersive journey exploring Paro’s iconic landmarks, monasteries, and serene landscapes—perfect for time-bound travelers.",
    image: "https://images.unsplash.com/photo-1559599075-5cde18107c03?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1559599075-5cde18107c03?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Short Trip", "Cultural", "Quick Escape"],
    highlights: [
      "Visit Paro Dzong",
      "Explore local markets",
      "Evening cultural show"
    ],
    includes: ["Accommodation", "Local guide", "Breakfast", "Entry fees"],
    excludes: ["International flights", "Personal expenses"],
    included: ["Accommodation", "Local guide", "Breakfast", "Entry fees"],
    excluded: ["International flights", "Personal expenses"],
    entryRequirements: ["Valid passport", "Bhutan visa"],
    requirements: ["Comfortable shoes"],
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Visit Paro Dzong and explore the riverside." },
      { day: 2, title: "Local Experiences", description: "Market visit and optional short hike." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund up to 7 days before departure.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "2,200m",
    permits: ["Bhutan visa"],
    equipment: ["Camera", "Comfortable shoes"]
  },

  // 2 NIGHTS 3 DAYS
  {
    id: "B2",
    title: "Thimphu Cultural Highlights",
    location: "Thimphu",
    duration: "3 Days",
    rating: 4.8,
    reviewCount: 22,
    price: 799,
    originalPrice: 899,
    excerpt: "Explore Bhutan’s capital and its cultural treasures",
    description: "Discover Thimphu’s monasteries, craft workshops, and scenic viewpoints while soaking in Bhutan’s urban charm.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Cultural", "City Tour", "Heritage"],
    highlights: [
      "Buddha Dordenma",
      "Tashichho Dzong",
      "Craft market visit"
    ],
    includes: ["Hotel stay", "Breakfast & dinner", "Guide", "Transport"],
    excludes: ["International flights", "Alcohol"],
    included: ["Hotel stay", "Breakfast & dinner", "Guide", "Transport"],
    excluded: ["International flights", "Alcohol"],
    entryRequirements: ["Passport", "Bhutan visa"],
    requirements: ["Respect for local customs"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Drive to Thimphu and evening walk." },
      { day: 2, title: "City Tour", description: "Visit Buddha Point, dzongs, and museums." },
      { day: 3, title: "Departure", description: "Free morning and final souvenir shopping." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Cancel up to 10 days before trip.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "2,350m",
    permits: ["Bhutan visa"],
    equipment: ["Comfortable clothing"]
  },

  // 3 NIGHTS 4 DAYS
  {
    id: "B3",
    title: "Paro & Thimphu Exploration",
    location: "Paro, Thimphu",
    duration: "4 Days",
    rating: 4.9,
    reviewCount: 31,
    price: 1199,
    originalPrice: 1299,
    excerpt: "A perfect introduction to Bhutan’s culture and landscapes",
    description: "Explore two of Bhutan’s most significant cities with guided monastery visits, scenic hikes, and cultural immersion.",
    image: "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Cultural", "Scenic", "Short Tour"],
    highlights: [
      "Tiger’s Nest Viewpoint",
      "Thimphu Craft Bazaar",
      "National Memorial Chorten"
    ],
    includes: ["Accommodation", "Meals", "Guide", "Transport"],
    excludes: ["International flights"],
    included: ["Accommodation", "Meals", "Guide", "Transport"],
    excluded: ["International flights"],
    entryRequirements: ["Passport", "Bhutan visa"],
    requirements: ["Comfortable hiking shoes"],
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Visit Paro Dzong." },
      { day: 2, title: "Drive to Thimphu", description: "Explore major cultural sites." },
      { day: 3, title: "Return to Paro", description: "Hike to Tiger’s Nest viewpoint." },
      { day: 4, title: "Departure", description: "Final shopping and airport drop." }
    ],
    maxGroupSize: 14,
    cancellationPolicy: "Free cancellation 20 days in advance.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Moderate",
    maxAltitude: "3,120m",
    permits: ["Bhutan visa"],
    equipment: ["Hiking shoes", "Camera"]
  },

  // 4 NIGHTS 5 DAYS
  {
    id: "B4",
    title: "Bhutan Essence Tour",
    location: "Paro, Thimphu, Punakha",
    duration: "5 Days",
    rating: 4.9,
    reviewCount: 24,
    price: 1499,
    originalPrice: 1599,
    excerpt: "Discover Bhutan’s spiritual landmarks and valley landscapes",
    description: "A balanced itinerary covering Bhutan’s cultural highlights, sacred monasteries, and the majestic Punakha Dzong.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Culture", "Heritage", "Scenic"],
    highlights: [
      "Dochula Pass",
      "Punakha Dzong",
      "Chimi Lhakhang"
    ],
    includes: ["Meals", "Hotels", "Guide", "Transport"],
    excludes: ["Flights", "Insurance"],
    included: ["Meals", "Hotels", "Guide", "Transport"],
    excluded: ["Flights", "Insurance"],
    entryRequirements: ["Passport", "Bhutan visa"],
    requirements: ["Moderate fitness"],
    itinerary: [
      { day: 1, title: "Paro Arrival", description: "Visit local sites." },
      { day: 2, title: "Thimphu Tour", description: "Explore museums and viewpoints." },
      { day: 3, title: "Drive to Punakha", description: "Stop at Dochula Pass." },
      { day: 4, title: "Return to Paro", description: "Cultural sightseeing." },
      { day: 5, title: "Departure", description: "Airport drop." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Free cancellation up to 21 days.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Moderate",
    maxAltitude: "3,050m",
    permits: ["Bhutan visa"],
    equipment: ["Warm clothing"]
  },

  // 5 NIGHTS 6 DAYS
  {
    id: "B5",
    title: "Western Bhutan Discovery",
    location: "Paro, Thimphu, Punakha, Haa Valley",
    duration: "6 Days",
    rating: 4.8,
    reviewCount: 26,
    price: 1699,
    originalPrice: 1799,
    excerpt: "A deeper dive into Bhutan’s western valleys",
    description: "This multi-valley tour blends cultural depth with scenic exploration, showcasing Bhutan’s remote and peaceful landscapes.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Valleys", "Culture", "Remote"],
    highlights: [
      "Haa Valley Day Trip",
      "Punakha Suspension Bridge",
      "Traditional farmhouse visit"
    ],
    includes: ["Guide", "Meals", "Hotels", "Transport"],
    excludes: ["Insurance", "Flights"],
    included: ["Guide", "Meals", "Hotels", "Transport"],
    excluded: ["Insurance", "Flights"],
    entryRequirements: ["Passport", "Bhutan visa"],
    requirements: ["Walking shoes"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Introductory cultural tour." },
      { day: 2, title: "Thimphu Sightseeing", description: "Museums and temples." },
      { day: 3, title: "Haa Valley Trip", description: "Visit remote villages." },
      { day: 4, title: "Punakha Drive", description: "Scenic valleys and passes." },
      { day: 5, title: "Back to Paro", description: "Local handicraft shopping." },
      { day: 6, title: "Departure", description: "Airport transfer." }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Full refund before 25 days.",
    isPopular: false,
    isSoldOut: false,
    difficulty: "Moderate",
    maxAltitude: "3,140m",
    permits: ["Bhutan visa"],
    equipment: ["Warm layers"]
  },

  // 6 NIGHTS 7 DAYS
  {
    id: "B6",
    title: "Bhutan Cultural Circuit",
    location: "Paro, Thimphu, Punakha, Wangdue",
    duration: "7 Days",
    rating: 4.9,
    reviewCount: 38,
    price: 1999,
    originalPrice: 2199,
    excerpt: "A full week exploring Bhutan’s cultural heart",
    description: "A comprehensive cultural immersion covering ancient dzongs, sacred sites, and the peaceful rural heartlands of Bhutan.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Cultural", "Full Week", "Heritage"],
    highlights: [
      "Tashichho Dzong",
      "Punakha Valley",
      "Local weaving center"
    ],
    includes: ["Guide", "Entry permits", "Hotels", "Meals"],
    excludes: ["Insurance", "Flights"],
    included: ["Guide", "Entry permits", "Hotels", "Meals"],
    excluded: ["Insurance", "Flights"],
    entryRequirements: ["Passport", "Visa"],
    requirements: ["Comfortable clothing"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Paro city walk." },
      { day: 2, title: "Thimphu Tour", description: "Major landmarks." },
      { day: 3, title: "Cultural Workshops", description: "Handicrafts and arts." },
      { day: 4, title: "Drive to Punakha", description: "Valley exploration." },
      { day: 5, title: "Wangdue Tour", description: "Rural landscapes." },
      { day: 6, title: "Return to Paro", description: "Rest day." },
      { day: 7, title: "Departure", description: "Airport transfer." }
    ],
    maxGroupSize: 14,
    cancellationPolicy: "30-day refund policy.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "3,100m",
    permits: ["Bhutan visa"],
    equipment: ["Walking shoes"]
  },

  // 7 NIGHTS 8 DAYS
  {
    id: "B7",
    title: "Bhutan Heritage Journey",
    location: "Paro, Thimphu, Punakha, Phobjikha",
    duration: "8 Days",
    rating: 5.0,
    reviewCount: 33,
    price: 2299,
    originalPrice: 2499,
    excerpt: "Traverse Bhutan’s valleys and ancient monasteries",
    description: "This journey brings you through Bhutan’s most sacred landscapes and high mountain valleys, including the serene Phobjikha Valley.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Heritage", "Valleys", "Long Tour"],
    highlights: [
      "Gangtey Monastery",
      "Phobjikha Valley Trek",
      "Dochula Pass"
    ],
    includes: ["Meals", "Guide", "Transport", "Accommodation"],
    excludes: ["Flights", "Insurance"],
    included: ["Meals", "Guide", "Transport", "Accommodation"],
    excluded: ["Flights", "Insurance"],
    entryRequirements: ["Passport", "Visa"],
    requirements: ["Light trekking ability"],
    itinerary: [
      { day: 1, title: "Paro Arrival", description: "Relax and explore." },
      { day: 2, title: "Thimphu Tour", description: "Cultural highlights." },
      { day: 3, title: "Punakha Drive", description: "Valley sightseeing." },
      { day: 4, title: "Phobjikha Transfer", description: "Visit Gangtey." },
      { day: 5, title: "Phobjikha Hike", description: "Nature trail walk." },
      { day: 6, title: "Return to Paro", description: "Scenic drive." },
      { day: 7, title: "Tiger’s Nest", description: "Hike to the iconic monastery." },
      { day: 8, title: "Departure", description: "Final morning in Paro." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund 35 days before departure.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Moderate",
    maxAltitude: "3,300m",
    permits: ["Bhutan visa"],
    equipment: ["Hiking gear"]
  },

  // 8 NIGHTS 9 DAYS
  {
    id: "B8",
    title: "Ultimate Bhutan Experience",
    location: "Paro, Thimphu, Punakha, Phobjikha, Bumthang",
    duration: "9 Days",
    rating: 5.0,
    reviewCount: 41,
    price: 2799,
    originalPrice: 2999,
    excerpt: "A complete journey across Bhutan’s cultural and spiritual heartlands",
    description: "Travel deep into Bhutan’s central valleys, exploring Bumthang—the cultural heart of the kingdom—along with the country’s most sacred monasteries and breathtaking landscapes.",
    image: "https://images.unsplash.com/photo-1509644851130-484289537bde?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509644851130-484289537bde?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Long Tour", "Cultural", "Scenic"],
    highlights: [
      "Bumthang Valley",
      "Sacred Kurjey Lhakhang",
      "Tiger’s Nest Monastery",
      "Dochula Pass & Phobjikha"
    ],
    includes: ["All meals", "All accommodations", "Guide", "Transport", "Permits"],
    excludes: ["International flights", "Insurance"],
    included: ["All meals", "All accommodations", "Guide", "Transport", "Permits"],
    excluded: ["International flights", "Insurance"],
    entryRequirements: ["Valid passport", "Bhutan visa"],
    requirements: ["Moderate fitness", "Respect for cultural sites"],
    itinerary: [
      { day: 1, title: "Paro Arrival", description: "Acclimatize and explore." },
      { day: 2, title: "Thimphu Tour", description: "City and cultural sites." },
      { day: 3, title: "Punakha Valley", description: "Explore Punakha Dzong." },
      { day: 4, title: "Phobjikha Valley", description: "Visit Gangtey Monastery." },
      { day: 5, title: "Drive to Bumthang", description: "Cross high mountain passes." },
      { day: 6, title: "Bumthang Tour", description: "Sacred sites and temples." },
      { day: 7, title: "Return to Paro", description: "Scenic cross-country drive." },
      { day: 8, title: "Tiger’s Nest Hike", description: "Full-day iconic hike." },
      { day: 9, title: "Departure", description: "Final day in Bhutan." }
    ],
    maxGroupSize: 15,
    cancellationPolicy: "Refund available up to 40 days prior.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Moderate",
    maxAltitude: "3,500m",
    permits: ["Bhutan visa", "Park fees"],
    equipment: ["Trekking shoes", "Warm clothing", "Camera"]
  }
]

  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTours(mockBhutanTours)
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
      {/* Hero section */}
      <Hero
        title="Discover the Kingdom of Bhutan"
        description="Immerse yourself in Bhutan's breathtaking landscapes, vibrant culture, and spiritual heritage."
        backgroundImage="/images/bhutan-hero.png"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Bhutan Trips</h2>
        {tours.length > 0 ? (
          <ToursGrid tours={tours} onTourSelect={handleTourSelect} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No tours available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new Bhutan tour offerings.
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