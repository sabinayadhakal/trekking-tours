"use client"

import { useState } from "react"
import Hero from "@/components/destinations/hero"
import Notifications, { notify } from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

// Sample Tibet trips
const tibetTrips: Tour[] = [
  {
    id: "5",
    title: "Tibet Lhasa Tour",
    location: "Tibet, China",
    duration: "5 nights / 6 days",
    rating: 4.8,
    reviewCount: 95,
    price: 1800,
    excerpt: "Explore the spiritual heart of Tibet with a 6-day Lhasa tour, visiting Potala Palace, Jokhang Temple, and Barkhor Street.",
    description: "This 6-day tour focuses on Lhasa, the cultural and spiritual center of Tibet. Discover ancient temples, monasteries, and local markets while immersing yourself in Tibetan culture and Buddhist traditions.",
    image: "/images/lhasa-1.jpg",
    images: ["/images/potala-palace.jpg", "/images/jokhang-temple.jpg", "/images/barkhor-street.jpg"],
    tags: ["Tibet", "Lhasa", "Culture", "Heritage", "Spiritual"],
    highlights: [
      "Visit Potala Palace, Jokhang Temple, and Sera Monastery",
      "Walk around Barkhor Street and explore local markets",
      "Experience Tibetan Buddhism and culture",
      "Enjoy scenic city views and local cuisine",
      "Interact with local monks and artisans"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Tibet", "Entrance fees"],
    excludes: ["International flights", "Lunch & personal expenses", "Tibet travel permit fees"],
    entryRequirements: ["Chinese visa required", "Tibet Travel Permit arranged via tour operator"],
    requirements: ["Valid passport with at least 6 months validity, Tibet permit via authorized operator"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Tibet", "Entrance fees"],
    excluded: ["International flights", "Lunch & personal expenses", "Tibet travel permit fees"],
    itinerary: [
      { day: 1, title: "Arrival in Lhasa", description: "Arrive in Lhasa, transfer to hotel, evening leisure." },
      { day: 2, title: "Potala Palace & Jokhang Temple", description: "Visit Potala Palace, Jokhang Temple, and Barkhor Street." },
      { day: 3, title: "Sera & Drepung Monasteries", description: "Explore Sera and Drepung Monasteries, witness monk debates." },
      { day: 4, title: "Norbulingka & Tibetan Museum", description: "Visit Norbulingka Palace, Tibetan Museum, and local markets." },
      { day: 5, title: "Leisure & Culture", description: "Free day for shopping, cultural activities, or city exploration." },
      { day: 6, title: "Departure", description: "Transfer to airport or next destination." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 15 days before start date",
    difficulty: "Easy",
    maxAltitude: "3,650 m",
    isPopular: true,
    isSoldOut: false
  },
  {
    id: "6",
    title: "Tibet Overland Tour",
    location: "Tibet, China",
    duration: "10 nights / 11 days",
    rating: 5.0,
    reviewCount: 110,
    price: 3800,
    excerpt: "A comprehensive overland journey through Tibet visiting Lhasa, Shigatse, Everest Base Camp, and Yamdrok Lake.",
    description: "Experience Tibet’s majestic landscapes and spiritual landmarks on this 11-day overland tour. Travel across the Tibetan Plateau, see Everest Base Camp, stunning lakes, and monasteries, while learning about Tibetan culture and traditions.",
    image: "/images/tibet-overland.jpg",
    images: ["/images/everest-base.jpg", "/images/shigatse.jpg", "/images/yamdrok-lake.jpg"],
    tags: ["Tibet", "Lhasa", "Everest", "Adventure", "Culture"],
    highlights: [
      "Visit Lhasa’s Potala Palace and Jokhang Temple",
      "Explore Shigatse and Tashilhunpo Monastery",
      "Experience the grandeur of Everest Base Camp",
      "See Yamdrok and Namtso Lakes",
      "Immerse in Tibetan culture and high-altitude landscapes"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Tibet", "Entrance fees"],
    excludes: ["International flights", "Lunch & personal expenses", "Tibet travel permit fees"],
    entryRequirements: ["Chinese visa required", "Tibet Travel Permit arranged via tour operator"],
    requirements: ["Valid passport with at least 6 months validity, Tibet permit via authorized operator, moderate fitness for high-altitude travel"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Tibet", "Entrance fees"],
    excluded: ["International flights", "Lunch & personal expenses", "Tibet travel permit fees"],
    itinerary: [
      { day: 1, title: "Arrival in Lhasa", description: "Arrive in Lhasa, transfer to hotel, evening leisure." },
      { day: 2, title: "Lhasa Sightseeing", description: "Visit Potala Palace, Jokhang Temple, Barkhor Street." },
      { day: 3, title: "Sera & Drepung Monasteries", description: "Explore local monasteries and experience monk debates." },
      { day: 4, title: "Drive to Shigatse", description: "Travel to Shigatse, visit Tashilhunpo Monastery." },
      { day: 5, title: "Yamdrok Lake", description: "Drive via Yamdrok Lake, scenic stops, photography opportunities." },
      { day: 6, title: "Gyantse & Pelkor Chode Monastery", description: "Visit Gyantse town and Pelkor Chode Monastery." },
      { day: 7, title: "Everest Base Camp", description: "Drive to Everest Base Camp, see glaciers, panoramic Himalayan views." },
      { day: 8, title: "Explore Rongbuk & Local Villages", description: "Visit Rongbuk Monastery, interact with local communities." },
      { day: 9, title: "Return to Shigatse", description: "Drive back to Shigatse, leisure evening." },
      { day: 10, title: "Return to Lhasa", description: "Drive back to Lhasa, free time for shopping and culture." },
      { day: 11, title: "Departure", description: "Transfer to Lhasa airport or next destination." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 20 days before start date",
    difficulty: "Moderate",
    maxAltitude: "3,650 m – 5,200 m",
    isPopular: true,
    isSoldOut: false
  },
  {
    id: "7",
    title: "Tibet Short Tour",
    location: "Lhasa, Tibet",
    duration: "3 nights / 4 days",
    rating: 4.7,
    reviewCount: 70,
    price: 1200,
    excerpt: "A short 4-day tour to explore Lhasa’s spiritual and cultural highlights.",
    description: "Ideal for travelers with limited time, this 4-day tour focuses on the must-see attractions in Lhasa, including Potala Palace, Jokhang Temple, and Barkhor Street, offering a compact but immersive Tibetan experience.",
    image: "/images/tibet-short.jpg",
    images: ["/images/potala-palace.jpg", "/images/jokhang-temple.jpg", "/images/barkhor-street.jpg"],
    tags: ["Tibet", "Lhasa", "Culture", "Heritage", "Short Tour"],
    highlights: [
      "Visit Lhasa’s iconic Potala Palace and Jokhang Temple",
      "Explore Barkhor Street and local markets",
      "Learn about Tibetan culture and Buddhist traditions",
      "Compact and immersive experience for short-time travelers"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Lhasa", "Entrance fees"],
    excludes: ["International flights", "Lunch & personal expenses", "Tibet travel permit fees"],
    entryRequirements: ["Chinese visa required", "Tibet Travel Permit arranged via tour operator"],
    requirements: ["Valid passport with at least 6 months validity, Tibet permit via authorized operator"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Lhasa", "Entrance fees"],
    excluded: ["International flights", "Lunch & personal expenses", "Tibet travel permit fees"],
    itinerary: [
      { day: 1, title: "Arrival in Lhasa", description: "Arrive in Lhasa, transfer to hotel, evening leisure." },
      { day: 2, title: "Potala Palace & Jokhang Temple", description: "Visit Potala Palace, Jokhang Temple, and Barkhor Street." },
      { day: 3, title: "Sera Monastery & Cultural Activities", description: "Explore Sera Monastery and optional cultural activities." },
      { day: 4, title: "Departure", description: "Transfer to Lhasa airport for departure." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 15 days before start date",
    difficulty: "Easy",
    maxAltitude: "3,650 m",
    isPopular: true,
    isSoldOut: false
  }
];


export default function TibetPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedTour(null)
  }

  const handleBookNow = (tour: Tour) => {
    notify.info(`Redirecting to booking for ${tour.title}`)
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  return (
    <ThemeProvider>
      <Notifications showTestToast={true} />

      {/* Hero Section */}
      <Hero
        title="Discover the Mystical Land of Tibet"
        description="Experience the spiritual heart of Tibet, its highland landscapes, and rich culture."
        backgroundImage="/images/hero-tibet.jpg"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Tibet Trips</h2>
        <ToursGrid
          tours={tibetTrips}
          onTourSelect={handleTourSelect}
        />
          
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
