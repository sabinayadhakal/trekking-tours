"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Hero from "@/components/destinations/hero"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"

// Sample Bhutan trips
const bhutanTrips: Tour[] = [
   {
    id: "1",
    title: "Bhutan Cultural & Heritage Tour",
    location: "Bhutan",
    duration: "3 nights / 4 days",
    rating: 4.7,
    reviewCount: 55,
    price: 1200,
    excerpt: "Explore Bhutan’s cultural treasures and historic landmarks on a short 4-day tour.",
    description: "This 4-day tour covers Thimphu and Paro, allowing travelers to visit key cultural landmarks like the National Memorial Chorten, Tashichho Dzong, and the iconic Paro Taktsang (Tiger's Nest). Ideal for travelers with limited time who want an immersive Bhutanese cultural experience.",
    image: "/images/bhutan-1.jpg",
    images: ["/images/thimphu.jpg", "/images/paro.jpg", "/images/tiger-nest.jpg"],
    tags: ["Bhutan", "Culture", "Heritage", "Short Tour"],
    highlights: [
      "Visit Paro Taktsang (Tiger’s Nest Monastery)",
      "Explore Thimphu city and local markets",
      "See Tashichho Dzong and National Memorial Chorten",
      "Experience Bhutanese traditional culture and lifestyle",
      "Enjoy scenic Himalayan landscapes"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees"],
    excludes: ["International flights", "Lunch & personal expenses"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees"],
    excluded: ["International flights", "Lunch & personal expenses"],
    entryRequirements: ["Visa arranged via Bhutan tour operator required"],
    requirements: ["Valid passport with at least 6 months validity, visa arranged by authorized tour operator"],
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Arrive in Paro, transfer to hotel, explore Paro town and local markets." },
      { day: 2, title: "Paro & Tiger's Nest", description: "Hike to Paro Taktsang (Tiger's Nest Monastery) and visit Rinpung Dzong." },
      { day: 3, title: "Thimphu Sightseeing", description: "Drive to Thimphu, visit Tashichho Dzong, National Memorial Chorten, and craft markets." },
      { day: 4, title: "Departure", description: "Transfer to Paro airport for departure." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 15 days before start date",
    isPopular: true,
    isSoldOut: false
  },
  {
    id: "2",
    title: "Bhutan Classic Tour",
    location: "Bhutan",
    duration: "5 nights / 6 days",
    rating: 4.8,
    reviewCount: 65,
    price: 1800,
    excerpt: "A classic Bhutan tour covering Paro, Thimphu, and Punakha with cultural and scenic highlights.",
    description: "This 6-day tour allows travelers to explore the major cultural and natural highlights of Bhutan. From the scenic Paro Valley and majestic Tiger's Nest to Punakha Dzong and Thimphu city, experience Bhutanese traditions, architecture, and hospitality.",
    image: "/images/bhutan-2.jpg",
    images: ["/images/paro.jpg", "/images/thimphu.jpg", "/images/punakha.jpg"],
    tags: ["Bhutan", "Culture", "Nature", "Classic Tour"],
    highlights: [
      "Visit Paro Taktsang (Tiger’s Nest)",
      "Explore Thimphu and Punakha Dzongs",
      "Scenic drive through Dochu La Pass",
      "Experience local monasteries and villages",
      "Learn about Bhutanese culture and traditions"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees"],
    excludes: ["International flights", "Lunch & personal expenses"],
    entryRequirements: ["Visa arranged via Bhutan tour operator required"],
    requirements: ["Valid passport with at least 6 months validity, visa arranged by authorized tour operator"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees"],
    excluded: ["International flights", "Lunch & personal expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Arrive in Paro and explore Paro town." },
      { day: 2, title: "Paro & Tiger's Nest", description: "Hike to Tiger’s Nest Monastery and visit Rinpung Dzong." },
      { day: 3, title: "Thimphu Sightseeing", description: "Drive to Thimphu, visit Tashichho Dzong, National Memorial Chorten, and craft markets." },
      { day: 4, title: "Punakha Valley", description: "Drive to Punakha via scenic Dochu La Pass, visit Punakha Dzong and Chimi Lhakhang Temple." },
      { day: 5, title: "Return to Paro", description: "Drive back to Paro, explore local markets, optional leisure activities." },
      { day: 6, title: "Departure", description: "Transfer to Paro airport for departure." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 15 days before start date",
    isPopular: true,
    isSoldOut: false
  },
  {
    id: "3",
    title: "Bhutan Adventure & Culture Tour",
    location: "Bhutan",
    duration: "7 nights / 8 days",
    rating: 4.9,
    reviewCount: 70,
    price: 2500,
    excerpt: "Explore Bhutan’s culture, nature, and scenic landscapes over 8 days, including hikes and cultural experiences.",
    description: "This 8-day tour combines cultural visits, scenic drives, and moderate hikes. Discover the highlights of Paro, Thimphu, Punakha, and Bumthang with immersive experiences in monasteries, villages, and natural landscapes. Perfect for travelers seeking adventure and culture.",
    image: "/images/bhutan-3.jpg",
    images: ["/images/bhutan-bumthang.jpg", "/images/punakha.jpg", "/images/thimphu.jpg"],
    tags: ["Bhutan", "Adventure", "Culture", "Hiking", "Nature"],
    highlights: [
      "Visit Paro Taktsang and Rinpung Dzong",
      "Explore Thimphu and Punakha Dzongs",
      "Hike in scenic valleys",
      "Discover Bumthang region and ancient monasteries",
      "Experience Bhutanese culture, lifestyle, and festivals"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees", "Moderate hikes"],
    excludes: ["International flights", "Lunch & personal expenses"],
    entryRequirements: ["Visa arranged via Bhutan tour operator required"],
    requirements: ["Valid passport with at least 6 months validity, visa arranged by authorized tour operator, comfortable trekking shoes for hikes"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees", "Moderate hikes"],
    excluded: ["International flights", "Lunch & personal expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Arrive in Paro, transfer to hotel, explore local area." },
      { day: 2, title: "Paro Sightseeing", description: "Visit Tiger’s Nest, Rinpung Dzong, and local market." },
      { day: 3, title: "Thimphu Sightseeing", description: "Drive to Thimphu, visit Tashichho Dzong, National Memorial Chorten, and local handicraft centers." },
      { day: 4, title: "Punakha Excursion", description: "Drive to Punakha via Dochu La Pass, visit Punakha Dzong and Chimi Lhakhang Temple." },
      { day: 5, title: "Hike in Punakha Valley", description: "Enjoy a scenic hike in Punakha Valley, visit local villages." },
      { day: 6, title: "Bumthang Region", description: "Fly or drive to Bumthang, visit Jakar Dzong, ancient monasteries, and local villages." },
      { day: 7, title: "Bumthang Exploration", description: "Explore more of Bumthang’s cultural and natural sites, interact with locals." },
      { day: 8, title: "Return to Paro & Departure", description: "Fly back to Paro and transfer to airport for departure." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 15 days before start date",
    isPopular: true,
    isSoldOut: false
  },
  {
    id: "4",
    title: "Bhutan Grand Tour",
    location: "Bhutan",
    duration: "8 nights / 9 days",
    rating: 5.0,
    reviewCount: 80,
    price: 3200,
    excerpt: "An extensive Bhutan tour covering Paro, Thimphu, Punakha, and Bumthang with cultural, scenic, and spiritual experiences.",
    description: "The 9-day Grand Bhutan Tour provides a comprehensive experience of the kingdom. Visit all major cultural landmarks, hike scenic trails, explore monasteries, interact with locals, and enjoy panoramic Himalayan views. Ideal for travelers who want a full Bhutanese cultural and natural immersion.",
    image: "/images/bhutan-4.jpg",
    images: ["/images/paro.jpg", "/images/thimphu.jpg", "/images/bumthang.jpg"],
    tags: ["Bhutan", "Culture", "Heritage", "Adventure", "Himalayas"],
    highlights: [
      "Visit iconic Tiger’s Nest Monastery and Rinpung Dzong",
      "Explore Thimphu, Punakha, and Bumthang regions",
      "Hike scenic trails with panoramic views",
      "Immerse in Bhutanese culture, traditions, and festivals",
      "Experience ancient monasteries and local lifestyles"
    ],
    includes: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees", "Hikes & excursions"],
    excludes: ["International flights", "Lunch & personal expenses"],
    entryRequirements: ["Visa arranged via Bhutan tour operator required"],
    requirements: ["Valid passport with at least 6 months validity, visa arranged by authorized tour operator, moderate fitness for hikes"],
    included: ["Accommodation", "Breakfast & Dinner", "Guided tour", "Transport within Bhutan", "Entrance fees", "Hikes & excursions"],
    excluded: ["International flights", "Lunch & personal expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Paro", description: "Arrive in Paro and transfer to hotel, explore local area." },
      { day: 2, title: "Paro Sightseeing", description: "Visit Tiger’s Nest Monastery, Rinpung Dzong, and local market." },
      { day: 3, title: "Thimphu Sightseeing", description: "Drive to Thimphu, visit Tashichho Dzong, National Memorial Chorten, and handicraft centers." },
      { day: 4, title: "Punakha Valley", description: "Drive to Punakha via Dochu La Pass, visit Punakha Dzong and Chimi Lhakhang." },
      { day: 5, title: "Punakha Hiking & Villages", description: "Enjoy scenic hikes and visit local villages in Punakha Valley." },
      { day: 6, title: "Bumthang Region", description: "Drive or fly to Bumthang, visit Jakar Dzong, monasteries, and villages." },
      { day: 7, title: "Bumthang Exploration", description: "Explore more of Bumthang’s cultural and natural sites." },
      { day: 8, title: "Return to Paro", description: "Fly back to Paro and leisure day." },
      { day: 9, title: "Departure", description: "Transfer to Paro airport for departure." }
    ],
    maxGroupSize: 12,
    cancellationPolicy: "Full refund if canceled 15 days before start date",
    isPopular: true,
    isSoldOut: false
  }
];


export default function BhutanPage() {
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

  return (
    <ThemeProvider>

      {/* Hero section */}
      <Hero
        title="Discover the Kingdom of Bhutan"
        description="Immerse yourself in Bhutan’s breathtaking landscapes, vibrant culture, and spiritual heritage."
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Bhutan Trips</h2>
        <ToursGrid tours={bhutanTrips} onTourSelect={handleTourSelect} />
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
