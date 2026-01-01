"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/destinations/hero"
import Notifications from "@/components/destinations/notifications"
import ThemeProvider from "@/components/destinations/themeProvider"
import ToursGrid from "@/components/destinations/tourGrid"
import TourDetailModal from "@/components/destinations/tourdetail"
import { Tour } from "@/types/tour"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin } from "lucide-react"

// Extend the Tour interface locally
interface ExtendedTour extends Tour {
  redirectUrl?: string
}

export default function NepalPage() {
  const [selectedTour, setSelectedTour] = useState<ExtendedTour | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tours, setTours] = useState<ExtendedTour[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Mock Nepal tours data - prices kept in data but will be hidden in UI
  const mockNepalTours: ExtendedTour[] = [
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
      images: [
        "/images/FWT-2.jpg"
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
      price: 899,
      excerpt: "Experience world-class trekking adventures in the majestic Himalayas of Nepal",
      description: "Discover the ultimate trekking experience in Nepal's breathtaking Himalayan landscapes. From Everest Base Camp to Annapurna Circuit, we offer guided treks for all skill levels.",
      image: "/images/trekking-hero.jpg",
      images: [
        "/images/trekking-hero.jpg"
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
      price: 49,
      excerpt: "Perfect short hikes around Kathmandu Valley for those with limited time",
      description: "Enjoy scenic day hikes in the beautiful hills surrounding Kathmandu Valley. Perfect for travelers who want to experience Nepal's nature without multi-day commitments.",
      image: "/images/day-hiking-hero.jpg",
      images: [
        "/images/day-hiking-hero.jpg"
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
      price: 39,
      excerpt: "Explore UNESCO World Heritage Sites and ancient cities in day tours",
      description: "Discover the rich cultural heritage of Nepal through our guided day sightseeing tours. Visit ancient temples, palaces, and UNESCO sites with expert local guides.",
      image: "/images/day-sightseeing-hero.jpg",
      images: [
        "/images/day-sightseeing-hero.jpg"
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
      price: 299,
      excerpt: "Comprehensive sightseeing packages covering major attractions across Nepal",
      description: "Our package sightseeing tours offer the perfect way to experience Nepal's diverse attractions. From cultural heritage to natural wonders, we've got you covered.",
      image: "/images/numbered-cards-package.jpg",
      images: [
        "/images/numbered-cards-package.jpg"
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
      price: 199,
      excerpt: "Wildlife adventures in Nepal's national parks with jungle safaris",
      description: "Experience the wild side of Nepal with our jungle safari tours. Spot rhinos, tigers, and exotic birds in Chitwan and Bardia National Parks.",
      image: "/images/jungle-safari-hero.jpg",
      images: [
        "/images/jungle-safari-hero.jpg"
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
      price: 199,
      excerpt: "Spectacular mountain flight experience over the Himalayas",
      description: "Witness the majestic Himalayas from above with our mountain flight tours. Get up close with Mount Everest and other peaks without the trekking.",
      image: "/images/mountain-flight-hero.jpg",
      images: [
        "/images/mountain-flight-hero.jpg"
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
      price: 999,
      excerpt: "Luxury helicopter tours for breathtaking aerial views of Nepal",
      description: "Experience Nepal's most spectacular sights from the air with our helicopter sightseeing tours. Perfect for those seeking luxury and unique perspectives.",
      image: "/images/helicopter-tours-hero.jpg",
      images: [
        "/images/helicopter-tours-hero.jpg"
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
      price: 2499,
      excerpt: "Professional peak climbing expeditions for adventure enthusiasts",
      description: "Challenge yourself with our peak climbing expeditions in the Himalayas. We offer guided climbs to various peaks suitable for different experience levels.",
      image: "/images/peak-climbing-hero.jpg",
      images: [
        "/images/peak-climbing-hero.jpg"
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

  const handleContactBooking = () => {
    router.push("/contact")
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
        backgroundImage="/images/nepal-hero.jpg"
      />

      {/* Trips Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Nepal Trips</h2>
        {tours.length > 0 ? (
          <CustomToursGrid 
            tours={tours} 
            onTourSelect={handleTourSelect}
            onContactBooking={handleContactBooking}
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

// Custom ToursGrid component specifically for Nepal page
function CustomToursGrid({
  tours,
  onTourSelect,
  onContactBooking,
  className = ""
}: {
  tours: Tour[]
  onTourSelect?: (tour: Tour) => void
  onContactBooking?: () => void
  className?: string
}) {
  const TourCard = ({ tour }: { tour: Tour }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = (e: React.MouseEvent) => {
      // Prevent triggering if click originated from customize button
      if ((e.target as HTMLElement).closest('[data-prevent-card-click]')) {
        return;
      }
      
      // Special handling for Free Walking Tour (id: "1") - redirect directly
      if (tour.id === "1") {
        window.location.href = "/services/Free-Walking-Tour";
      } else {
        onTourSelect?.(tour);
      }
    }

    const handleLearnMoreClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent card click from triggering
      
      // Special handling for Free Walking Tour (id: "1")
      if (tour.id === "1") {
        window.location.href = "/services/Free-Walking-Tour";
      } else {
        onTourSelect?.(tour);
      }
    }

    const handleCustomizeClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent card click from triggering
      
      // Special handling for Free Walking Tour (id: "1")
      if (tour.id === "1") {
        // URL encode the message
        const message = encodeURIComponent("Hello! I'm interested in booking the Free Walking Tour. Please let me know when you would organize it.");
        // Redirect to WhatsApp with phone number and pre-filled message
        window.open(`https://wa.me/9779841376470?text=${message}`, '_blank');
      } else {
        onContactBooking?.();
      }
    }

    return (
      <Card 
        className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] bg-[#EAF2FF] cursor-pointer"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {tour.isPopular && (
            <Badge className="absolute top-2 left-2 text-[10px] sm:text-xs bg-[#3C6AA6] text-[#EAF2FF] transform scale-90 group-hover:scale-110 transition-transform duration-300">
              Popular
            </Badge>
          )}
          {tour.isSoldOut && (
            <Badge variant="destructive" className="absolute top-2 left-2 text-[10px] sm:text-xs transform scale-90 group-hover:scale-110 transition-transform duration-300">
              Sold Out
            </Badge>
          )}
          {tour.originalPrice && tour.originalPrice > tour.price && tour.price > 0 && (
            <Badge variant="secondary" className="absolute top-2 right-2 text-[10px] sm:text-xs transform scale-90 group-hover:scale-110 transition-transform duration-300 bg-[#A0C4FF] text-[#1F4880]">
              Save ${tour.originalPrice - tour.price}
            </Badge>
          )}
        </div>

        <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div>
            <h3 className="font-semibold text-lg sm:text-xl line-clamp-1 transition-colors duration-300 group-hover:text-[#1F4880] text-[#3C6AA6]">{tour.title}</h3>
            <div className="flex items-center gap-1 text-[#5A91D1] text-xs sm:text-sm mt-1 flex-wrap">
              <MapPin className="w-3 h-3" />
              <span>{tour.location}</span>
              <span className="mx-1 sm:mx-2">•</span>
              <Clock className="w-3 h-3" />
              <span>{tour.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
                    i < Math.floor(tour.rating)
                      ? "fill-[#FFD166] text-[#FFD166]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium">{tour.rating}</span>
          </div>

          <p className="text-[#5A91D1] text-sm sm:text-base line-clamp-3">{tour.excerpt}</p>

          <div className="flex flex-wrap gap-1">
            {tour.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[9px] sm:text-xs transform transition-transform duration-300 group-hover:scale-105 bg-[#A0C4FF] text-[#1F4880]">{tag}</Badge>
            ))}
          </div>

          {/* PRICE SECTION - Only show if price is 0 (free tour) */}
          {tour.price === 0 ? (
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-lg sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[#1F4880] text-[#3C6AA6]">Free</span>
              {tour.originalPrice && tour.originalPrice > 0 && (
                <span className="text-xs sm:text-sm text-[#5A91D1] line-through">${tour.originalPrice}</span>
              )}
            </div>
          ) : (
            // For paid tours, show "Contact for Price" instead of price
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-lg sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[#1F4880] text-[#3C6AA6]">
              </span>
            </div>
          )}

          <div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2"
            data-prevent-card-click // Add this data attribute to prevent card click
          >
            <Button
              variant="outline"
              className="flex-1 border-[#3C6AA6] text-[#3C6AA6] hover:bg-[#BFDFFF] hover:text-[#1F4880] transform transition-transform duration-300 hover:scale-105 text-xs sm:text-sm py-2"
              onClick={handleLearnMoreClick}
              data-prevent-card-click
            >
              Learn More
            </Button>
            <Button
              className="flex-1 bg-[#3C6AA6] text-[#EAF2FF] hover:bg-[#1F4880] transform transition-transform duration-300 hover:scale-105 text-xs sm:text-sm py-2"
              onClick={handleCustomizeClick}
              data-prevent-card-click
            >
              {tour.id === "1" ? "Book on WhatsApp" : "Customize yourself"}
            </Button>
          </div>
        </CardContent>

        {/* Visual feedback for clickable card */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none border-2 border-[#3C6AA6] opacity-30 rounded-[inherit] transition-opacity duration-300" />
        )}
      </Card>
    );
  };

  return (
    <div className={`space-y-4 sm:space-y-6 ${className}`}>
      <div className="text-center px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-[#3C6AA6] mb-1 sm:mb-2">Available Experiences</h2>
        <p className="text-[#5A91D1] text-sm sm:text-base">{tours.length} amazing experiences to choose from</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  )
}