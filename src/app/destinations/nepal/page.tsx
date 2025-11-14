"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

export default function NepalPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  // Mock Nepal tours data
  const mockNepalTours: Tour[] = [
    {
      id: "1",
      title: "Everest Base Camp Trek",
      location: "Sagarmatha National Park",
      duration: "14 Days",
      rating: 4.9,
      reviewCount: 156,
      price: 1299,
      originalPrice: 1499,
      excerpt: "Trek to the base of the world's highest mountain through stunning Himalayan landscapes",
      description: "Embark on the adventure of a lifetime to Everest Base Camp. This iconic trek takes you through Sherpa villages, ancient monasteries, and breathtaking valleys to stand at the foot of Mount Everest.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Trekking", "Adventure", "Himalayas", "Everest"],
      highlights: [
        "Stand at Everest Base Camp",
        "Cross Hillary Suspension Bridge",
        "Visit Tengboche Monastery",
        "Kala Patthar sunrise view"
      ],
      includes: [
        "Experienced Sherpa guide",
        "All meals during trek",
        "Teahouse accommodations",
        "Sagarmatha National Park permit"
      ],
      excludes: [
        "International flights",
        "Nepal visa fees",
        "Travel insurance",
        "Personal expenses"
      ],
      included: [
        "Experienced Sherpa guide",
        "All meals during trek",
        "Teahouse accommodations",
        "Sagarmatha National Park permit"
      ],
      excluded: [
        "International flights",
        "Nepal visa fees",
        "Travel insurance",
        "Personal expenses"
      ],
      entryRequirements: [
        "Valid passport",
        "Nepal tourist visa",
        "Travel insurance with helicopter evacuation"
      ],
      requirements: [
        "Good physical fitness",
        "Previous trekking experience recommended",
        "Proper hiking gear"
      ],
      itinerary: [
        {
          day: 1,
          title: "Kathmandu to Lukla to Phakding",
          description: "Scenic flight to Lukla and gentle trek to Phakding village"
        },
        {
          day: 2,
          title: "Phakding to Namche Bazaar",
          description: "Trek to the bustling Sherpa capital of Namche Bazaar"
        }
      ],
      maxGroupSize: 12,
      cancellationPolicy: "Free cancellation up to 60 days before departure. 50% refund between 30-59 days. No refund within 29 days.",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Challenging",
      maxAltitude: "5,545m",
      permits: ["TIMS card", "Sagarmatha National Park permit"],
      equipment: ["Trekking boots", "Down jacket", "Sleeping bag", "Trekking poles"]
    },
    {
      id: "2",
      title: "Annapurna Circuit Trek",
      location: "Annapurna Conservation Area",
      duration: "18 Days",
      rating: 4.8,
      reviewCount: 89,
      price: 1199,
      excerpt: "Complete circuit around the Annapurna massif with diverse landscapes",
      description: "Experience one of the world's best treks circling the Annapurna massif. Cross the challenging Thorong La Pass and witness incredible diversity from subtropical forests to high-altitude deserts.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Trekking", "Circuit", "Annapurna", "Thorong La"],
      highlights: [
        "Cross Thorong La Pass (5,416m)",
        "Natural hot springs at Tatopani",
        "Muktinath Temple visit",
        "Poon Hill sunrise"
      ],
      includes: [
        "ACAP permit and TIMS card",
        "All accommodation",
        "Three meals daily",
        "Experienced guide and porters"
      ],
      excludes: [
        "Personal expenses",
        "Alcoholic beverages",
        "Tips for guide and porters"
      ],
      included: [
        "ACAP permit and TIMS card",
        "All accommodation",
        "Three meals daily",
        "Experienced guide and porters"
      ],
      excluded: [
        "Personal expenses",
        "Alcoholic beverages",
        "Tips for guide and porters"
      ],
      entryRequirements: [
        "Valid passport",
        "Good physical condition"
      ],
      requirements: [
        "Excellent physical fitness",
        "High altitude experience",
        "Proper trekking equipment"
      ],
      itinerary: [
        {
          day: 1,
          title: "Drive to Besisahar and trek to Bhulbhule",
          description: "Scenic drive from Kathmandu and start of Annapurna Circuit"
        }
      ],
      maxGroupSize: 10,
      cancellationPolicy: "Free cancellation up to 45 days before departure for Annapurna treks.",
      isPopular: true,
      isSoldOut: false,
      difficulty: "Challenging",
      maxAltitude: "5,416m",
      permits: ["Annapurna Conservation Area Permit", "TIMS card"],
      equipment: ["4-season sleeping bag", "Waterproof gear", "Headlamp", "Trekking boots"]
    },
    {
      id: "3",
      title: "Chitwan Jungle Safari",
      location: "Chitwan National Park",
      duration: "4 Days",
      rating: 4.7,
      reviewCount: 67,
      price: 499,
      excerpt: "Wildlife adventure in Nepal's premier national park",
      description: "Explore the wilderness of Chitwan National Park, home to Bengal tigers, one-horned rhinoceros, and diverse bird species. Experience jungle safaris, elephant rides, and Tharu cultural shows.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Wildlife", "Safari", "Jungle", "Cultural"],
      highlights: [
        "Jeep safari in Chitwan National Park",
        "One-horned rhinoceros spotting",
        "Traditional Tharu dance performance",
        "Canoe ride on Rapti River"
      ],
      includes: [
        "All park entry fees",
        "Jungle activities as per itinerary",
        "Accommodation in jungle resort",
        "All meals during safari"
      ],
      excludes: [
        "Personal shopping",
        "Additional activities",
        "Beverages"
      ],
      included: [
        "All park entry fees",
        "Jungle activities as per itinerary",
        "Accommodation in jungle resort",
        "All meals during safari"
      ],
      excluded: [
        "Personal shopping",
        "Additional activities",
        "Beverages"
      ],
      entryRequirements: [
        "Valid passport",
        "Vaccination certificates if required"
      ],
      requirements: [
        "Comfortable clothing",
        "Binoculars for bird watching",
        "Camera for wildlife photography"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival and Tharu Village Tour",
          description: "Arrive in Chitwan and visit local Tharu community"
        }
      ],
      maxGroupSize: 15,
      cancellationPolicy: "Free cancellation up to 14 days before safari date.",
      isPopular: false,
      isSoldOut: false,
      difficulty: "Easy",
      maxAltitude: "415m",
      permits: ["Chitwan National Park entry permit"],
      equipment: ["Light clothing", "Sunscreen", "Insect repellent", "Camera"]
    },
    {
      id: "4",
      title: "Langtang Valley Trek",
      location: "Langtang National Park",
      duration: "10 Days",
      rating: 4.6,
      reviewCount: 42,
      price: 799,
      excerpt: "Beautiful valley trek close to Kathmandu with Tibetan culture",
      description: "Discover the stunning Langtang Valley, often called the 'valley of glaciers'. Experience Tamang and Tibetan cultures while trekking through pristine forests and high mountain scenery.",
      image: "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      images: [
        "https://images.unsplash.com/photo-1581503369908-6c5013366a9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      ],
      tags: ["Trekking", "Valley", "Tibetan Culture", "Glaciers"],
      highlights: [
        "Langtang Valley views",
        "Kyanjin Gompa monastery",
        "Tamang heritage experience",
        "Langtang Lirung glacier"
      ],
      includes: [
        "Langtang National Park permit",
        "Teahouse accommodation",
        "All meals during trek",
        "Experienced local guide"
      ],
      excludes: [
        "Personal expenses",
        "Travel insurance",
        "Kathmandu accommodation"
      ],
      included: [
        "Langtang National Park permit",
        "Teahouse accommodation",
        "All meals during trek",
        "Experienced local guide"
      ],
      excluded: [
        "Personal expenses",
        "Travel insurance",
        "Kathmandu accommodation"
      ],
      entryRequirements: [
        "Valid passport",
        "Moderate fitness level"
      ],
      requirements: [
        "Basic trekking fitness",
        "Warm clothing",
        "Trekking shoes"
      ],
      itinerary: [
        {
          day: 1,
          title: "Drive to Syabrubesi",
          description: "Scenic drive from Kathmandu to trek starting point"
        }
      ],
      maxGroupSize: 8,
      cancellationPolicy: "Standard trekking cancellation policy applies.",
      isPopular: true,
      isSoldOut: true,
      difficulty: "Moderate",
      maxAltitude: "4,984m",
      permits: ["Langtang National Park permit", "TIMS card"],
      equipment: ["Trekking gear", "Warm layers", "Water bottles", "First aid kit"]
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