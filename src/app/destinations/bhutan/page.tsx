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
  const mockBhutanTours: Tour[] = [
    {
      id: "1",
      title: "Classic Bhutan Cultural Tour",
      location: "Paro, Thimphu, Punakha",
      duration: "7 Days",
      rating: 4.9,
      reviewCount: 42,
      price: 2499,
      originalPrice: 2799,
      excerpt: "Experience the essence of Bhutan's culture and spirituality",
      description: "Discover the magical kingdom of Bhutan through its ancient monasteries, vibrant festivals, and breathtaking landscapes. This comprehensive cultural tour takes you through the heart of Bhutanese heritage.",
      image: "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Cultural", "Spiritual", "UNESCO", "Festivals"],
      highlights: [
        "Visit Tiger's Nest Monastery",
        "Explore Punakha Dzong",
        "Experience local festivals",
        "Traditional Bhutanese meals"
      ],
      includes: [
        "All meals included",
        "Expert local guide",
        "Comfortable accommodations",
        "All entry fees and permits"
      ],
      excludes: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Alcohol beverages"
      ],
      included: [
        "All meals included",
        "Expert local guide",
        "Comfortable accommodations",
        "All entry fees and permits"
      ],
      excluded: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Alcohol beverages"
      ],
      entryRequirements: [
        "Valid passport",
        "Bhutan visa arranged",
        "Travel insurance",
        "Vaccination certificates if required"
      ],
      requirements: [
        "Moderate fitness level",
        "Respect for local customs",
        "Comfortable walking shoes",
        "Weather-appropriate clothing"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Paro",
          description: "Arrive at Paro International Airport, transfer to hotel, and visit Paro Dzong."
        },
        {
          day: 2,
          title: "Tiger's Nest Monastery",
          description: "Hike to the iconic Taktsang Palphug Monastery, also known as Tiger's Nest."
        }
      ],
      maxGroupSize: 12,
      cancellationPolicy: "Free cancellation up to 30 days before departure. 50% refund between 15-29 days. No refund within 14 days of departure.",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Moderate",
      maxAltitude: "3,120m",
      permits: ["Bhutan visa", "Monastery entry permits"],
      equipment: ["Daypack", "Water bottles", "Walking poles", "Camera"]
    },
    {
      id: "2",
      title: "Bhutan Trekking Adventure",
      location: "Himalayan Mountains",
      duration: "10 Days",
      rating: 4.8,
      reviewCount: 28,
      price: 1899,
      excerpt: "Trek through pristine Himalayan landscapes",
      description: "Embark on an unforgettable trekking adventure through Bhutan's untouched wilderness, passing through remote villages and high mountain passes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Trekking", "Adventure", "Wilderness", "Mountains"],
      highlights: [
        "Druk Path Trek",
        "Remote village visits",
        "Alpine lakes",
        "Mountain panoramas"
      ],
      includes: [
        "Camping equipment",
        "Experienced trekking guide",
        "All meals during trek",
        "Porter service"
      ],
      excludes: [
        "Personal trekking gear",
        "Travel insurance",
        "International flights"
      ],
      included: [
        "Camping equipment",
        "Experienced trekking guide",
        "All meals during trek",
        "Porter service"
      ],
      excluded: [
        "Personal trekking gear",
        "Travel insurance",
        "International flights"
      ],
      entryRequirements: [
        "Valid passport",
        "Bhutan visa",
        "Good physical condition"
      ],
      requirements: [
        "Good physical fitness",
        "Trekking experience",
        "Proper hiking boots"
      ],
      itinerary: [
        {
          day: 1,
          title: "Start of Druk Path",
          description: "Begin trek from Paro to Jele Dzong through beautiful pine forests."
        }
      ],
      maxGroupSize: 8,
      cancellationPolicy: "Free cancellation up to 45 days before departure for trekking tours.",
      isPopular: false,
      isSoldOut: false,
      difficulty: "Challenging",
      maxAltitude: "4,200m",
      permits: ["Trekking permits", "National park fees"],
      equipment: ["Trekking boots", "Sleeping bag", "Water purification", "Headlamp"]
    },
    {
      id: "3",
      title: "Bhutan Festival Experience",
      location: "Various Locations",
      duration: "8 Days",
      rating: 5.0,
      reviewCount: 15,
      price: 2199,
      excerpt: "Immerse in vibrant Bhutanese festivals and traditions",
      description: "Time your visit to coincide with Bhutan's colorful festivals featuring masked dances, religious ceremonies, and community celebrations.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Festival", "Cultural", "Photography", "Traditional"],
      highlights: [
        "Paro Tshechu Festival",
        "Traditional mask dances",
        "Local artisan workshops",
        "Cultural performances"
      ],
      includes: [
        "Festival entry fees",
        "Cultural expert guide",
        "Traditional costume rental",
        "Photography guidance"
      ],
      excludes: [
        "International flights",
        "Personal shopping",
        "Special photography permits"
      ],
      included: [
        "Festival entry fees",
        "Cultural expert guide",
        "Traditional costume rental",
        "Photography guidance"
      ],
      excluded: [
        "International flights",
        "Personal shopping",
        "Special photography permits"
      ],
      entryRequirements: [
        "Valid passport",
        "Bhutan visa",
        "Festival timing alignment"
      ],
      requirements: [
        "Respect for religious ceremonies",
        "Camera equipment",
        "Comfortable clothing"
      ],
      itinerary: [
        {
          day: 1,
          title: "Festival Opening Day",
          description: "Witness the grand opening ceremony and first day of mask dances."
        }
      ],
      maxGroupSize: 15,
      cancellationPolicy: "Special festival cancellation policy applies due to limited dates.",
      isPopular: true,
      isSoldOut: true,
      difficulty: "Easy",
      maxAltitude: "2,300m",
      permits: ["Festival photography permit"],
      equipment: ["Camera", "Comfortable shoes", "Sun protection"]
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
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
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