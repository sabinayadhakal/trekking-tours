"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Star, Clock, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tour } from '@/types/tour';

interface ToursGridProps {
  tours: Tour[]
  onTourSelect?: (tour: Tour) => void
  className?: string
}

export default function ToursGrid({
  tours,
  onTourSelect,
  className = ""
}: ToursGridProps) {
  const router = useRouter()

  const handleLearnMore = (tour: Tour) => {
    if (onTourSelect) onTourSelect(tour)
  }

  const TourCard = ({ tour }: { tour: Tour }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = (e: React.MouseEvent) => {
      // Prevent triggering if click originated from buttons
      if ((e.target as HTMLElement).closest('[data-prevent-card-click]')) {
        return;
      }
      handleLearnMore(tour);
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
          {tour.originalPrice && (
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

          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[#1F4880] text-[#3C6AA6]">${tour.price}</span>
            {tour.originalPrice && (
              <span className="text-xs sm:text-sm text-[#5A91D1] line-through">${tour.originalPrice}</span>
            )}
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2"
            data-prevent-card-click // Add this data attribute
          >
            <Button
              variant="outline"
              className="flex-1 border-[#3C6AA6] text-[#3C6AA6] hover:bg-[#BFDFFF] hover:text-[#1F4880] transform transition-transform duration-300 hover:scale-105 text-xs sm:text-sm py-2"
              onClick={(e) => {
                e.stopPropagation();
                // Show highlights - you might want to implement a modal or different action
                handleLearnMore(tour);
              }}
              data-prevent-card-click
            >
              <span className="flex items-center justify-center gap-1">
                <span>Highlights</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-[#2C5282] to-[#4299E1] hover:from-[#3182CE] hover:to-[#63B3ED] text-white transform transition-transform duration-300 hover:scale-105 text-xs sm:text-sm py-2 border-0 shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                handleLearnMore(tour);
              }}
              data-prevent-card-click
            >
              <span className="flex items-center justify-center gap-1">
                <span>See Full Details</span>
                <ChevronRight className="w-3 h-3" />
              </span>
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