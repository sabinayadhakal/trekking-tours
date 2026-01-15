"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

// Helper function to create URL-friendly slugs
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
}

// Mock Nepal tours data
const MOCK_NEPAL_TOURS: Tour[] = [
  {
    id: "1",
    title: "Free Walking Tour Kathmandu",
    location: "Kathmandu",
    duration: "4 Hours",
    rating: 4.9,
    price: 0,
    excerpt: "Join the first FREE WALKING TOUR in Kathmandu, Nepal! Explore the beautiful capital with experienced local guides.",
    description: "We are offering the first FREE WALKING TOUR in Kathmandu, Nepal! Join this amazing free city tour around the beautiful capital. Everybody knows that Free Walking Tours in Europe are very popular, and now this unique experience is here in Nepal.\n\nOrganized daily by Himkala Adventure, this walk begins at the Garden of Dreams and guides you through local temples, bustling markets, and ends at the iconic Monkey Temple. Tours run with licensed and experienced guides, ensuring cultural depth and a warm experience.\n\nTour Schedule\nMorning Shift: 9:00 am – 1:00 pm\nAfternoon Shift: 2:00 pm – 6:00 pm\n\nTours start from the Garden of Dreams, Thamel.",
    image: "/images/FWT-2.jpg",
    images: ["/images/FWT-2.jpg"],
    tags: ["Free", "Walking Tour", "Cultural", "City Tour"],
    highlights: [
      "Garden of Dreams starting point",
      "Local temples visit",
      "Bustling markets exploration",
      "Monkey Temple (Swayambhunath) visit"
    ],
    includes: [
      "Licensed experienced guide",
      "Cultural insights",
      "Local market experience",
      "Temple visits"
    ],
    excludes: [
      "Personal expenses",
      "Transportation",
      "Entrance fees",
      "Food and drinks"
    ],
    included: [
      "Licensed experienced guide",
      "Cultural insights",
      "Local market experience",
      "Temple visits"
    ],
    excluded: [
      "Personal expenses",
      "Transportation",
      "Entrance fees",
      "Food and drinks"
    ],
    requirements: [
      "Moderate walking ability",
      "Respect for local customs",
      "Punctuality"
    ],
    itinerary: [
      {
        day: 1,
        title: "Morning or Afternoon Walking Tour",
        description: "Start at Garden of Dreams, explore local temples and markets, end at Monkey Temple"
      }
    ],
    maxGroupSize: 15,
    cancellationPolicy: "Free cancellation up to 24 hours before tour. No-shows may affect future booking eligibility.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "1,400m",
    permits: ["None required"],
    equipment: ["Comfortable shoes", "Water", "Sun protection", "Camera"],
    entryRequirements: ["Valid Passport", "Nepal Visa (obtainable on arrival)"]
  },
  {
    id: "2",
    title: "Trekking in Nepal",
    location: "Various Regions",
    duration: "Multiple Days",
    rating: 4.9,
    price: 899,
    excerpt: "Experience world-class trekking adventures in the majestic Himalayas of Nepal",
    description: "Discover the ultimate trekking experience in Nepal's breathtaking Himalayan landscapes. From Everest Base Camp to Annapurna Circuit, we offer guided treks for all skill levels.",
    image: "/images/trekking-hero.jpg",
    images: ["/images/trekking-hero.jpg"],
    tags: ["Trekking", "Adventure", "Himalayas", "Mountains"],
    highlights: [
      "Professional trekking guides",
      "All permits arranged",
      "Teahouse accommodations",
      "Mountain scenery"
    ],
    includes: [
      "Experienced trekking guide",
      "All necessary permits",
      "Accommodation during trek",
      "Meals as specified"
    ],
    excludes: [],
    included: [
      "Experienced trekking guide",
      "All necessary permits",
      "Accommodation during trek",
      "Meals as specified"
    ],
    excluded: [],
    entryRequirements: ["Valid Passport", "Nepal Visa (obtainable on arrival)"],
    requirements: [],
    itinerary: [],
    maxGroupSize: 12,
    cancellationPolicy: "Standard trekking cancellation policy",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Various",
    maxAltitude: "5,545m",
    permits: ["TIMS Card", "National Park Permit"],
    equipment: ["Trekking boots", "Sleeping bag", "Warm clothing", "Backpack"]
  },
  {
    id: "3",
    title: "Day Hiking in Nepal",
    location: "Kathmandu Valley",
    duration: "1 Day",
    rating: 4.7,
    price: 49,
    excerpt: "Perfect short hikes around Kathmandu Valley for those with limited time",
    description: "Enjoy scenic day hikes in the beautiful hills surrounding Kathmandu Valley. Perfect for travelers who want to experience Nepal's nature without multi-day commitments.",
    image: "/images/day-hiking-hero.jpg",
    images: ["/images/day-hiking-hero.jpg"],
    tags: ["Hiking", "Day Trip", "Nature", "Scenic"],
    highlights: [
      "Scenic valley views",
      "Local village visits",
      "Professional guides",
      "Lunch included"
    ],
    includes: ["Professional guide", "Transportation", "Lunch", "Water"],
    excludes: ["Personal expenses", "Travel insurance"],
    included: ["Professional guide", "Transportation", "Lunch", "Water"],
    excluded: ["Personal expenses", "Travel insurance"],
    entryRequirements: ["Valid ID"],
    requirements: ["Basic fitness level"],
    itinerary: [
      {
        day: 1,
        title: "Day Hike Experience",
        description: "Morning pickup, scenic hike with guide, lunch at viewpoint, return to hotel"
      }
    ],
    maxGroupSize: 10,
    cancellationPolicy: "Standard day hike cancellation",
    isPopular: false,
    isSoldOut: false,
    difficulty: "Moderate",
    maxAltitude: "2,300m",
    permits: ["None required"],
    equipment: ["Comfortable shoes", "Daypack", "Water bottle", "Sun protection"]
  },
  {
    id: "4",
    title: "Day Sightseeing in Nepal",
    location: "Kathmandu, Patan, Bhaktapur",
    duration: "1 Day",
    rating: 4.6,
    price: 39,
    excerpt: "Explore UNESCO World Heritage Sites and ancient cities in day tours",
    description: "Discover the rich cultural heritage of Nepal through our guided day sightseeing tours. Visit ancient temples, palaces, and UNESCO sites with expert local guides.",
    image: "/images/day-sightseeing-hero.jpg",
    images: ["/images/day-sightseeing-hero.jpg"],
    tags: ["Sightseeing", "Cultural", "UNESCO", "Heritage"],
    highlights: [
      "UNESCO World Heritage Sites",
      "Expert cultural guides",
      "Transportation included",
      "Lunch at local restaurants"
    ],
    includes: ["Professional guide", "Transportation", "Entrance fees", "Lunch"],
    excludes: ["Personal expenses", "Tips"],
    included: ["Professional guide", "Transportation", "Entrance fees", "Lunch"],
    excluded: ["Personal expenses", "Tips"],
    entryRequirements: ["Valid Passport/ID"],
    requirements: ["Comfortable walking shoes"],
    itinerary: [
      {
        day: 1,
        title: "Cultural Heritage Tour",
        description: "Visit UNESCO sites, ancient temples, palaces, and cultural landmarks"
      }
    ],
    maxGroupSize: 15,
    cancellationPolicy: "Standard sightseeing cancellation",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "1,400m",
    permits: ["None required"],
    equipment: ["Comfortable shoes", "Camera", "Sun protection"]
  },
  {
    id: "5",
    title: "Package Sightseeing Tours in Nepal",
    location: "Multiple Destinations",
    duration: "3-10 Days",
    rating: 4.8,
    price: 299,
    excerpt: "Comprehensive sightseeing packages covering major attractions across Nepal",
    description: "Our package sightseeing tours offer the perfect way to experience Nepal's diverse attractions. From cultural heritage to natural wonders, we've got you covered.",
    image: "/images/numbered-cards-package.jpg",
    images: ["/images/numbered-cards-package.jpg"],
    tags: ["Package", "Sightseeing", "Cultural", "Comprehensive"],
    highlights: [
      "Multiple destinations",
      "All transportation",
      "Hotel accommodations",
      "Professional guides"
    ],
    includes: ["Accommodation", "Transportation", "Guides", "Some meals"],
    excludes: ["International flights", "Personal expenses"],
    included: ["Accommodation", "Transportation", "Guides", "Some meals"],
    excluded: ["International flights", "Personal expenses"],
    entryRequirements: ["Valid Passport", "Nepal Visa"],
    requirements: ["General fitness"],
    itinerary: [
      {
        day: 1,
        title: "Multi-day Package Tour",
        description: "Comprehensive tour covering major attractions across Nepal"
      }
    ],
    maxGroupSize: 20,
    cancellationPolicy: "Package tour cancellation policy",
    isPopular: false,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "2,000m",
    permits: ["None required"],
    equipment: ["Comfortable clothes", "Camera", "Travel essentials"]
  },
  {
    id: "6",
    title: "Jungle Safari Tours in Nepal",
    location: "Chitwan, Bardia",
    duration: "2-4 Days",
    rating: 4.7,
    price: 199,
    excerpt: "Wildlife adventures in Nepal's national parks with jungle safaris",
    description: "Experience the wild side of Nepal with our jungle safari tours. Spot rhinos, tigers, and exotic birds in Chitwan and Bardia National Parks.",
    image: "/images/jungle-safari-hero.jpg",
    images: ["/images/jungle-safari-hero.jpg"],
    tags: ["Wildlife", "Safari", "Jungle", "Adventure"],
    highlights: [
      "Jeep safaris",
      "Elephant rides",
      "Bird watching",
      "Tharu cultural shows"
    ],
    includes: ["Park fees", "Accommodation", "Meals", "Guide"],
    excludes: ["Personal expenses", "Travel insurance"],
    included: ["Park fees", "Accommodation", "Meals", "Guide"],
    excluded: ["Personal expenses", "Travel insurance"],
    entryRequirements: ["Valid Passport/ID"],
    requirements: ["General fitness"],
    itinerary: [
      {
        day: 1,
        title: "Jungle Safari Adventure",
        description: "Wildlife spotting, jungle activities, and cultural experiences"
      }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Jungle safari cancellation",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "415m",
    permits: ["National Park Permit"],
    equipment: ["Light clothing", "Binoculars", "Camera", "Insect repellent"]
  },
  {
    id: "7",
    title: "Mountain Flights in Nepal",
    location: "Himalayan Range",
    duration: "1 Hour",
    rating: 4.9,
    price: 199,
    excerpt: "Spectacular mountain flight experience over the Himalayas",
    description: "Witness the majestic Himalayas from above with our mountain flight tours. Get up close with Mount Everest and other peaks without the trekking.",
    image: "/images/mountain-flight-hero.jpg",
    images: ["/images/mountain-flight-hero.jpg"],
    tags: ["Flight", "Mountains", "Everest", "Scenic"],
    highlights: [
      "Close-up Everest views",
      "Professional commentary",
      "Window seats guaranteed",
      "Certificate of achievement"
    ],
    includes: ["Flight ticket", "Airport transfers", "Certificate"],
    excludes: ["Travel insurance", "Personal expenses"],
    included: ["Flight ticket", "Airport transfers", "Certificate"],
    excluded: ["Travel insurance", "Personal expenses"],
    entryRequirements: ["Valid Passport/ID"],
    requirements: ["None"],
    itinerary: [
      {
        day: 1,
        title: "Mountain Flight Experience",
        description: "Scenic flight over Himalayas with Everest views"
      }
    ],
    maxGroupSize: 25,
    cancellationPolicy: "Flight tour cancellation",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "N/A",
    permits: ["Flight permit"],
    equipment: ["Camera", "Warm clothing", "Passport copy"]
  },
  {
    id: "8",
    title: "Helicopter Sightseeing in Nepal",
    location: "Various Regions",
    duration: "2-4 Hours",
    rating: 5.0,
    price: 999,
    excerpt: "Luxury helicopter tours for breathtaking aerial views of Nepal",
    description: "Experience Nepal's most spectacular sights from the air with our helicopter sightseeing tours. Perfect for those seeking luxury and unique perspectives.",
    image: "/images/helicopter-tours-hero.jpg",
    images: ["/images/helicopter-tours-hero.jpg"],
    tags: ["Helicopter", "Luxury", "Scenic", "Adventure"],
    highlights: [
      "Aerial mountain views",
      "Luxury experience",
      "Flexible itineraries",
      "Expert pilots"
    ],
    includes: ["Helicopter flight", "Pilot", "Hotel transfers", "Permits"],
    excludes: ["Personal expenses", "Travel insurance"],
    included: ["Helicopter flight", "Pilot", "Hotel transfers", "Permits"],
    excluded: ["Personal expenses", "Travel insurance"],
    entryRequirements: ["Valid Passport/ID"],
    requirements: ["None"],
    itinerary: [
      {
        day: 1,
        title: "Helicopter Sightseeing Tour",
        description: "Aerial tour of scenic locations with expert commentary"
      }
    ],
    maxGroupSize: 5,
    cancellationPolicy: "Helicopter tour cancellation",
    isPopular: false,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "N/A",
    permits: ["Flight permit"],
    equipment: ["Camera", "Comfortable clothing"]
  },
  {
    id: "9",
    title: "Peak Climbing in Nepal",
    location: "Himalayan Peaks",
    duration: "10-20 Days",
    rating: 4.8,
    price: 2499,
    excerpt: "Professional peak climbing expeditions for adventure enthusiasts",
    description: "Challenge yourself with our peak climbing expeditions in the Himalayas. We offer guided climbs to various peaks suitable for different experience levels.",
    image: "/images/peak-climbing-hero.jpg",
    images: ["/images/peak-climbing-hero.jpg"],
    tags: ["Climbing", "Adventure", "Expedition", "Mountains"],
    highlights: [
      "Professional climbing guides",
      "All climbing equipment",
      "Expedition planning",
      "Summit attempts"
    ],
    includes: ["Guide", "Climbing permits", "Equipment", "Base camp services"],
    excludes: ["Personal gear", "Travel insurance", "International flights"],
    included: ["Guide", "Climbing permits", "Equipment", "Base camp services"],
    excluded: ["Personal gear", "Travel insurance", "International flights"],
    entryRequirements: ["Valid Passport", "Nepal Visa", "Climbing experience"],
    requirements: ["Excellent fitness", "Climbing experience", "Altitude experience"],
    itinerary: [
      {
        day: 1,
        title: "Peak Climbing Expedition",
        description: "Multi-day climbing expedition with professional guides"
      }
    ],
    maxGroupSize: 8,
    cancellationPolicy: "Expedition cancellation policy",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Expert",
    maxAltitude: "6,000m+",
    permits: ["Climbing permit", "National Park permit"],
    equipment: ["Personal climbing gear", "High-altitude clothing", "Technical equipment"]
  }
]

export default function NepalPage() {
  const [tours, setTours] = useState<Tour[]>([])
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Handle "See Full Details" button click - redirect to detail page
  const handleSeeDetails = (tour: Tour) => {
    // Special handling for Free Walking Tour (id: "1")
    if (tour.id === "1") {
      router.push("/services/Free-Walking-Tour")
    } else {
      // Create slug from title for routing
      const slug = createSlug(tour.title)
      router.push(`/destinations/nepal/${slug}`)
    }
  }

  // Handle "Highlights" button click - show modal
  const handleHighlightsClick = (tour: Tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  // Handle card click - redirect to detail page
  const handleCardClick = (tour: Tour) => {
    handleSeeDetails(tour) // Same as "See Full Details"
  }

  // Load Nepal tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTours(MOCK_NEPAL_TOURS)
      } catch (err) {
        console.error('Error loading tours:', err)
        setTours(MOCK_NEPAL_TOURS)
      } finally {
        setLoading(false)
      }
    }

    loadTours()
  }, [])

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
        title="Explore Nepal's Incredible Landscapes, Heritage and History"
        description="From high Himalayan treks to exotic wildlife safaris, discover the best experiences Nepal has to offer."
        backgroundImage="/images/nepal-hero.jpg"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Nepal Trips</h2>
        {tours.length > 0 ? (
          <ToursGrid
            tours={tours}
            onCardClick={handleCardClick}
            onHighlightsClick={handleHighlightsClick}
            onSeeDetailsClick={handleSeeDetails}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No tours available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new Nepal tour offerings.
            </p>
          </div>
        )}
      </section>

      {/* Additional sections for Nepal */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Nepal for Your Adventure?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Our certified Nepali guides have extensive knowledge of local culture, trails, and safety protocols.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All-Inclusive Packages</h3>
              <p className="text-muted-foreground">
                We handle permits, accommodation, meals, and transportation for a seamless experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Responsible Tourism</h3>
              <p className="text-muted-foreground">
                We prioritize sustainable practices and support local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nepal Travel Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">⛰️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Himalayan Treks</h3>
              <p className="text-muted-foreground">Everest, Annapurna, Langtang - world's best trekking routes</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🕌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Heritage</h3>
              <p className="text-muted-foreground">UNESCO sites, ancient temples, and diverse ethnic traditions</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🦏</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wildlife Safaris</h3>
              <p className="text-muted-foreground">Jungle adventures in Chitwan and Bardia National Parks</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">🚁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Adventure Sports</h3>
              <p className="text-muted-foreground">Paragliding, rafting, bungee jumping, and mountain flights</p>
            </div>
          </div>
        </div>
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