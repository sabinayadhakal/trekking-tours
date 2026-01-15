"use client"

import { useState } from "react"
import { Star, Clock, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tour } from '@/types/tour';

interface ToursGridProps {
  tours: Tour[]
  onCardClick: (tour: Tour) => void
  onHighlightsClick: (tour: Tour) => void
  onSeeDetailsClick: (tour: Tour) => void
  className?: string
}

export default function ToursGrid({
  tours,
  onCardClick,
  onHighlightsClick,
  onSeeDetailsClick,
  className = ""
}: ToursGridProps) {
  const TourCard = ({ tour }: { tour: Tour }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = (e: React.MouseEvent) => {
      // Prevent triggering if click originated from buttons
      if ((e.target as HTMLElement).closest('[data-prevent-card-click]')) {
        return;
      }
      onCardClick(tour);
    }

    const handleSeeDetails = (e: React.MouseEvent) => {
      e.stopPropagation();
      onSeeDetailsClick(tour);
    }

    const handleHighlights = (e: React.MouseEvent) => {
      e.stopPropagation();
      onHighlightsClick(tour);
    }

    return (
      <Card 
        className="group relative overflow-hidden bg-[#EAF2FF] cursor-pointer border border-[#CBD5E0] mb-4"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fixed aspect ratio using padding hack for older browsers */}
        <div className="relative overflow-hidden" style={{ paddingBottom: '75%' }}>
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{ transition: 'transform 0.5s ease' }}
          />
          <div 
            className="absolute inset-0 bg-black opacity-0"
            style={{ transition: 'opacity 0.5s ease' }}
          />
          {tour.isPopular && (
            <Badge className="absolute top-2 left-2 text-xs bg-[#3C6AA6] text-[#EAF2FF] z-10">
              Popular
            </Badge>
          )}
          {tour.isSoldOut && (
            <Badge variant="destructive" className="absolute top-2 left-2 text-xs z-10">
              Sold Out
            </Badge>
          )}
          {tour.originalPrice && (
            <Badge variant="secondary" className="absolute top-2 right-2 text-xs bg-[#A0C4FF] text-[#1F4880] z-10">
              Save ${tour.originalPrice - tour.price}
            </Badge>
          )}
        </div>

        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 text-[#3C6AA6]">{tour.title}</h3>
            <div className="flex items-center text-[#5A91D1] text-xs mt-1 flex-wrap">
              <div className="flex items-center mr-2">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(tour.rating)
                      ? "text-[#FFD166]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium">{tour.rating}</span>
          </div>

          <p className="text-[#5A91D1] text-sm line-clamp-3">{tour.excerpt}</p>

          <div className="flex flex-wrap">
            {tour.tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs mr-1 mb-1 bg-[#A0C4FF] text-[#1F4880]"
                style={{ marginRight: '4px', marginBottom: '4px' }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-baseline">
            <span className="text-xl font-bold text-[#3C6AA6]">${tour.price}</span>
            {tour.originalPrice && (
              <span className="text-xs text-[#5A91D1] line-through ml-2">${tour.originalPrice}</span>
            )}
          </div>

          <div 
            className="pt-2"
            data-prevent-card-click
          >
            {/* Using flexbox with margins instead of gaps for better browser support */}
            <div className="flex flex-col sm:flex-row" style={{ margin: '-4px' }}>
              <div className="flex-1 p-1">
                <Button
                  variant="outline"
                  className="w-full border-[#3C6AA6] text-[#3C6AA6] hover:bg-[#BFDFFF] hover:text-[#1F4880] text-xs py-2"
                  style={{ 
                    border: '1px solid #3C6AA6',
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={handleHighlights}
                  data-prevent-card-click
                >
                  <span className="flex items-center justify-center">
                    <span>Highlights</span>
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </span>
                </Button>
              </div>
              <div className="flex-1 p-1">
                <Button
                  className="w-full text-white text-xs py-2"
                  style={{ 
                    background: 'linear-gradient(to right, #2C5282, #4299E1)',
                    border: 'none',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={handleSeeDetails}
                  data-prevent-card-click
                >
                  <span className="flex items-center justify-center">
                    <span>See Full Details</span>
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>

        {/* Visual feedback for clickable card */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none border-2 border-[#3C6AA6] opacity-30"
            style={{ borderRadius: 'inherit' }}
          />
        )}
      </Card>
    );
  };

  return (
    <div className={className}>
      <div className="text-center px-2 mb-6">
        <h2 className="text-2xl font-bold text-[#3C6AA6] mb-2">Available Experiences</h2>
        <p className="text-[#5A91D1] text-sm">{tours.length} amazing experiences to choose from</p>
      </div>

      {/* Using flexbox instead of grid for better browser support */}
      <div className="flex flex-wrap" style={{ margin: '-8px' }}>
        {tours.map((tour) => (
          <div 
            key={tour.id} 
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
            style={{ boxSizing: 'border-box' }}
          >
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  )
}