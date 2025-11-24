"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

// Extend the Tour interface locally
interface ExtendedTour extends Tour {
  redirectUrl?: string
}

export default function NepalPage() {
  const [selectedTour, setSelectedTour] = useState<ExtendedTour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<ExtendedTour[]>([])
  const [loading, setLoading] = useState(true)

  // Mock Nepal tours data with ExtendedTour type
  const mockNepalTours: ExtendedTour[] = [
    {
      id: "1",
      title: "Free Walking Tour Kathmandu",
      location: "Kathmandu",
      duration: "4 Hours",
      rating: 4.9,
      reviewCount: 203,
      price: 0,
      originalPrice: 0,
      excerpt: "Join the first FREE WALKING TOUR in Kathmandu, Nepal! Explore the beautiful capital with experienced local guides.",
      description: "We are offering the first FREE WALKING TOUR in Kathmandu, Nepal! Join this amazing free city tour around the beautiful capital. Everybody knows that Free Walking Tours in Europe are very popular, and now this unique experience is here in Nepal.\n\nOrganized daily by Himkala Adventure, this walk begins at the Garden of Dreams and guides you through local temples, bustling markets, and ends at the iconic Monkey Temple. Tours run with licensed and experienced guides, ensuring cultural depth and a warm experience.\n\nTour Schedule\nMorning Shift: 9:00 am – 1:00 pm\nAfternoon Shift: 2:00 pm – 6:00 pm\n\nTours start from the Garden of Dreams, Thamel.",
      image: "/images/walking-tour-kathmandu.jpg",
      images: [
        "/images/walking-tour-kathmandu.jpg"
      ],
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
      entryRequirements: [
        "Comfortable walking shoes",
        "Weather appropriate clothing",
        "Water bottle",
        "Camera"
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
      equipment: ["Comfortable shoes", "Water", "Sun protection", "Camera"]
    },
    {
      id: "2",
      title: "Trekking in Nepal",
      location: "Various Regions",
      duration: "Multiple Days",
      rating: 4.9,
      reviewCount: 456,
      price: 899,
      excerpt: "Experience world-class trekking adventures in the majestic Himalayas of Nepal",
      description: "Discover the ultimate trekking experience in Nepal's breathtaking Himalayan landscapes. From Everest Base Camp to Annapurna Circuit, we offer guided treks for all skill levels.",
      image: "/images/trekking-nepal.jpg",
      images: [
        "/images/trekking-nepal.jpg"
      ],
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
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 12,
      cancellationPolicy: "Standard trekking cancellation policy",
      redirectUrl: "/services/trekking",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Various"
    },
    {
      id: "3",
      title: "Day Hiking in Nepal",
      location: "Kathmandu Valley",
      duration: "1 Day",
      rating: 4.7,
      reviewCount: 189,
      price: 49,
      excerpt: "Perfect short hikes around Kathmandu Valley for those with limited time",
      description: "Enjoy scenic day hikes in the beautiful hills surrounding Kathmandu Valley. Perfect for travelers who want to experience Nepal's nature without multi-day commitments.",
      image: "/images/day-hiking.jpg",
      images: [
        "/images/day-hiking.jpg"
      ],
      tags: ["Hiking", "Day Trip", "Nature", "Scenic"],
      highlights: [
        "Scenic valley views",
        "Local village visits",
        "Professional guides",
        "Lunch included"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 10,
      cancellationPolicy: "Standard day hike cancellation",
      redirectUrl: "/services/day-hiking",
      isPopular: false,
      isSoldOut: false,
      difficulty: "Moderate"
    },
    {
      id: "4",
      title: "Day Sightseeing in Nepal",
      location: "Kathmandu, Patan, Bhaktapur",
      duration: "1 Day",
      rating: 4.6,
      reviewCount: 234,
      price: 39,
      excerpt: "Explore UNESCO World Heritage Sites and ancient cities in day tours",
      description: "Discover the rich cultural heritage of Nepal through our guided day sightseeing tours. Visit ancient temples, palaces, and UNESCO sites with expert local guides.",
      image: "/images/day-sightseeing.jpg",
      images: [
        "/images/day-sightseeing.jpg"
      ],
      tags: ["Sightseeing", "Cultural", "UNESCO", "Heritage"],
      highlights: [
        "UNESCO World Heritage Sites",
        "Expert cultural guides",
        "Transportation included",
        "Lunch at local restaurants"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 15,
      cancellationPolicy: "Standard sightseeing cancellation",
      redirectUrl: "/services/day-sightseeing",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Easy"
    },
    {
      id: "5",
      title: "Package Sightseeing Tours in Nepal",
      location: "Multiple Destinations",
      duration: "3-10 Days",
      rating: 4.8,
      reviewCount: 167,
      price: 299,
      excerpt: "Comprehensive sightseeing packages covering major attractions across Nepal",
      description: "Our package sightseeing tours offer the perfect way to experience Nepal's diverse attractions. From cultural heritage to natural wonders, we've got you covered.",
      image: "/images/package-sightseeing.jpg",
      images: [
        "/images/package-sightseeing.jpg"
      ],
      tags: ["Package", "Sightseeing", "Cultural", "Comprehensive"],
      highlights: [
        "Multiple destinations",
        "All transportation",
        "Hotel accommodations",
        "Professional guides"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 20,
      cancellationPolicy: "Package tour cancellation policy",
      redirectUrl: "/services/package-sightseeing-tours",
      isPopular: false,
      isSoldOut: false,
      difficulty: "Easy"
    },
    {
      id: "6",
      title: "Jungle Safari Tours in Nepal",
      location: "Chitwan, Bardia",
      duration: "2-4 Days",
      rating: 4.7,
      reviewCount: 145,
      price: 199,
      excerpt: "Wildlife adventures in Nepal's national parks with jungle safaris",
      description: "Experience the wild side of Nepal with our jungle safari tours. Spot rhinos, tigers, and exotic birds in Chitwan and Bardia National Parks.",
      image: "/images/jungle-safari.jpg",
      images: [
        "/images/jungle-safari.jpg"
      ],
      tags: ["Wildlife", "Safari", "Jungle", "Adventure"],
      highlights: [
        "Jeep safaris",
        "Elephant rides",
        "Bird watching",
        "Tharu cultural shows"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 12,
      cancellationPolicy: "Jungle safari cancellation",
      redirectUrl: "/services/jungle-safari",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Easy"
    },
    {
      id: "7",
      title: "Mountain Flights in Nepal",
      location: "Himalayan Range",
      duration: "1 Hour",
      rating: 4.9,
      reviewCount: 278,
      price: 199,
      excerpt: "Spectacular mountain flight experience over the Himalayas",
      description: "Witness the majestic Himalayas from above with our mountain flight tours. Get up close with Mount Everest and other peaks without the trekking.",
      image: "/images/mountain-flight.jpg",
      images: [
        "/images/mountain-flight.jpg"
      ],
      tags: ["Flight", "Mountains", "Everest", "Scenic"],
      highlights: [
        "Close-up Everest views",
        "Professional commentary",
        "Window seats guaranteed",
        "Certificate of achievement"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 25,
      cancellationPolicy: "Flight tour cancellation",
      redirectUrl: "/services/mountain-flight",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Easy"
    },
    {
      id: "8",
      title: "Helicopter Sightseeing in Nepal",
      location: "Various Regions",
      duration: "2-4 Hours",
      rating: 5.0,
      reviewCount: 89,
      price: 999,
      excerpt: "Luxury helicopter tours for breathtaking aerial views of Nepal",
      description: "Experience Nepal's most spectacular sights from the air with our helicopter sightseeing tours. Perfect for those seeking luxury and unique perspectives.",
      image: "/images/helicopter-tour.jpg",
      images: [
        "/images/helicopter-tour.jpg"
      ],
      tags: ["Helicopter", "Luxury", "Scenic", "Adventure"],
      highlights: [
        "Aerial mountain views",
        "Luxury experience",
        "Flexible itineraries",
        "Expert pilots"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 5,
      cancellationPolicy: "Helicopter tour cancellation",
      redirectUrl: "/services/helicopter-sightseeing",
      isPopular: false,
      isSoldOut: false,
      difficulty: "Easy"
    },
    {
      id: "9",
      title: "Peak Climbing in Nepal",
      location: "Himalayan Peaks",
      duration: "10-20 Days",
      rating: 4.8,
      reviewCount: 78,
      price: 2499,
      excerpt: "Professional peak climbing expeditions for adventure enthusiasts",
      description: "Challenge yourself with our peak climbing expeditions in the Himalayas. We offer guided climbs to various peaks suitable for different experience levels.",
      image: "/images/peak-climbing.jpg",
      images: [
        "/images/peak-climbing.jpg"
      ],
      tags: ["Climbing", "Adventure", "Expedition", "Mountains"],
      highlights: [
        "Professional climbing guides",
        "All climbing equipment",
        "Expedition planning",
        "Summit attempts"
      ],
      includes: [],
      excludes: [],
      included: [],
      excluded: [],
      entryRequirements: [],
      requirements: [],
      itinerary: [],
      maxGroupSize: 8,
      cancellationPolicy: "Expedition cancellation policy",
      redirectUrl: "/services/peak-climbing",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Expert"
    }
  ]

  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setTours(mockNepalTours)
      } catch (err) {
        console.error('Error loading tours:', err)
      } finally {
        setLoading(false)
      }
    }

    loadTours()
  }, [])

  const handleTourSelect = (tour: ExtendedTour) => {
    // If tour has redirectUrl, navigate to that page
    if (tour.redirectUrl) {
      window.location.href = tour.redirectUrl
      return
    }
    
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
        title="Explore Nepal's Incredible Landscapes, Heritage and History"
        description="From high Himalayan treks to exotic wildlife safaris, discover the best experiences Nepal has to offer."
        backgroundImage="/images/hero-nepal.jpg"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Nepal Trips</h2>
        {tours.length > 0 ? (
          <ToursGrid tours={tours} onTourSelect={handleTourSelect} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No tours available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new Nepal tour offerings.
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