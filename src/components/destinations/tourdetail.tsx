"use client"

import { useState, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight, Star, MapPin, Check, X as XIcon, Mountain, Gauge, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { Tour } from "@/types/tour"

interface TourDetailModalProps {
  tour: Tour
  isOpen: boolean
  onClose: () => void
}

export default function TourDetailModal({ tour, isOpen, onClose }: TourDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary">("overview")
  const modalRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => firstFocusableRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % tour.images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-[#EAF2FF] max-w-6xl w-full max-h-[90vh] rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 transition-transform transform hover:scale-[1.01]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#A0C4FF]">
          <h2 className="text-2xl font-bold text-[#3C6AA6] transition-colors duration-300 group-hover:text-[#1F4880]">{tour.title}</h2>
          <div className="flex items-center gap-2">
            <button
              ref={firstFocusableRef}
              onClick={onClose}
              className="p-2 hover:bg-[#BFDFFF] rounded-md transition-colors duration-300 transform hover:scale-110"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-[#3C6AA6]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-88px)] overflow-hidden">
          {/* Left Column - Image Gallery (desktop only) */}
          <div className="hidden lg:block lg:w-1/2 p-6">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={tour.images[currentImageIndex]}
                alt={`${tour.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-80 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              {tour.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#3C6AA6]/30 hover:bg-[#3C6AA6]/50 text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3C6AA6]/30 hover:bg-[#3C6AA6]/50 text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="w-full lg:w-1/2 p-6 overflow-y-auto overscroll-contain scroll-smooth space-y-4 animate-in fade-in-0 duration-500">
            {/* Location & Rating */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#5A91D1] transition-colors duration-300">
                <MapPin className="h-4 w-4" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#FFD166] text-[#FFD166] transition-transform duration-300 transform hover:scale-110" />
                  <span className="font-medium">{tour.rating}</span>
                </div>
                <span className="text-[#5A91D1]/80">({tour.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Difficulty & Altitude */}
            <div className="grid grid-cols-2 gap-4 my-4">
              {tour.difficulty && (
                <div className="flex items-center gap-2 p-3 bg-[#BFDFFF] rounded-md transform transition-transform duration-300 hover:scale-[1.02]">
                  <Gauge className="h-4 w-4 text-[#3C6AA6]" />
                  <div>
                    <span className="text-sm text-[#3C6AA6]">Difficulty</span>
                    <p className="font-medium capitalize">{tour.difficulty}</p>
                  </div>
                </div>
              )}
              {tour.maxAltitude && (
                <div className="flex items-center gap-2 p-3 bg-[#BFDFFF] rounded-md transform transition-transform duration-300 hover:scale-[1.02]">
                  <Mountain className="h-4 w-4 text-[#3C6AA6]" />
                  <div>
                    <span className="text-sm text-[#3C6AA6]">Max Altitude</span>
                    <p className="font-medium">{tour.maxAltitude}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="border-b mb-4 border-[#A0C4FF]">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                    activeTab === "overview"
                      ? "border-[#3C6AA6] text-[#3C6AA6]"
                      : "border-transparent text-[#5A91D1] hover:text-[#3C6AA6]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("itinerary")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                    activeTab === "itinerary"
                      ? "border-[#3C6AA6] text-[#3C6AA6]"
                      : "border-transparent text-[#5A91D1] hover:text-[#3C6AA6]"
                  }`}
                >
                  Itinerary
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === "overview" ? (
                <>
                  <p className="text-[#3C6AA6] leading-relaxed">{tour.description}</p>

                  {tour.highlights && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">Highlights</h3>
                      <ul className="space-y-1">
                        {tour.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <Check className="h-4 w-4 text-[#3C6AA6] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.includes && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">What's Included</h3>
                      <ul className="space-y-1">
                        {tour.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <Check className="h-4 w-4 text-[#3C6AA6] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.excludes && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">What's Not Included</h3>
                      <ul className="space-y-1">
                        {tour.excludes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <XIcon className="h-4 w-4 text-red-500 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.requirements && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">Requirements</h3>
                      <ul className="space-y-1">
                        {tour.requirements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <Check className="h-4 w-4 text-[#3C6AA6] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.permits && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">Permits</h3>
                      <ul className="space-y-1">
                        {tour.permits.map((permit, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <Check className="h-4 w-4 text-[#3C6AA6] mt-0.5" />
                            <span>{permit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.equipment && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">Equipment Needed</h3>
                      <ul className="space-y-1">
                        {tour.equipment.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <Check className="h-4 w-4 text-[#3C6AA6] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.entryRequirements && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">Entry Requirements</h3>
                      <ul className="space-y-1">
                        {tour.entryRequirements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 transform transition-transform duration-300 hover:scale-[1.02]">
                            <Check className="h-4 w-4 text-[#3C6AA6] mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Cancellation Policy Section */}
                  {tour.cancellationPolicy && (
                    <div>
                      <h3 className="font-semibold mb-2 text-[#3C6AA6]">Cancellation Policy</h3>
                      <div className="bg-[#BFDFFF]/50 p-3 rounded-md transform transition-transform duration-300 hover:scale-[1.01]">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-[#3C6AA6] mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-[#3C6AA6]">
                            {tour.cancellationPolicy.split('\n').map((paragraph, idx) => (
                              <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-3">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="p-3 bg-[#BFDFFF]/50 rounded-md transform transition-transform duration-300 hover:scale-[1.01]">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#3C6AA6] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{day.day}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#3C6AA6]">{day.title}</h4>
                          <p className="text-sm text-[#5A91D1]">{day.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}