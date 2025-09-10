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
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTours = async () => {
      try {
        console.log('Fetching tours from:', `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nepal-destinations?populate=*`)
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nepal-destinations?populate=*`
        )
        
        if (!response.ok) {
          throw new Error(`Failed to fetch tours: ${response.status} ${response.statusText}`)
        }
        
        const data = await response.json()
        console.log('Full API Response:', data)
        
        if (!data || !Array.isArray(data)) {
          if (data.data && Array.isArray(data.data)) {
            console.log('Using data.data array')
            processToursData(data.data)
          } else {
            throw new Error('Invalid API response format')
          }
        } else {
          processToursData(data)
        }
      } catch (err) {
        console.error('Error fetching tours:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        setLoading(false)
      }
    }

    const processToursData = (toursData: any[]) => {
      try {
        console.log('Processing tours data:', toursData)
        
        const formattedTours: Tour[] = toursData.map((item: any) => {
          console.log('Processing item:', item)
          
          const attributes = item.attributes || item
          const id = item.id?.toString() || Math.random().toString()
          
          let imageUrl = "/images/default-tour.jpg"
          if (attributes.image) {
            if (typeof attributes.image === 'string') {
              imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.image}`
            } else if (attributes.image.data) {
              if (Array.isArray(attributes.image.data)) {
                imageUrl = attributes.image.data[0]?.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.image.data[0].attributes.url}`
                  : "/images/default-tour.jpg"
              } else {
                imageUrl = attributes.image.data?.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.image.data.attributes.url}`
                  : "/images/default-tour.jpg"
              }
            } else if (attributes.image.url) {
              imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.image.url}`
            }
          }
          
          let imagesUrls: string[] = []
          if (attributes.images) {
            if (Array.isArray(attributes.images)) {
              imagesUrls = attributes.images.map((img: any) => {
                if (typeof img === 'string') {
                  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${img}`
                } else if (img.url) {
                  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`
                } else if (img.data) {
                  return img.data.attributes?.url 
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.data.attributes.url}`
                    : ""
                }
                return ""
              }).filter((url: string) => url !== "")
            } else if (attributes.images.data && Array.isArray(attributes.images.data)) {
              imagesUrls = attributes.images.data.map((img: any) => 
                img.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.attributes.url}`
                  : ""
              ).filter((url: string) => url !== "")
            }
          }
          
          const parseField = (field: any) => {
            if (typeof field === 'string') {
              try {
                return JSON.parse(field)
              } catch {
                return []
              }
            }
            return field || []
          }
          
          return {
            id: id,
            title: attributes.title || "Untitled Tour",
            location: attributes.location || "Nepal",
            duration: attributes.duration || "",
            rating: typeof attributes.rating === 'number' ? attributes.rating : 0,
            reviewCount: typeof attributes.reviewCount === 'number' ? attributes.reviewCount : 0,
            price: typeof attributes.price === 'number' ? attributes.price : 0,
            originalPrice: typeof attributes.originalPrice === 'number' ? attributes.originalPrice : 0,
            excerpt: attributes.excerpt || "",
            description: attributes.description || "",
            image: imageUrl,
            images: imagesUrls,
            tags: parseField(attributes.tags),
            highlights: parseField(attributes.highlights),
            includes: parseField(attributes.includes),
            excludes: parseField(attributes.excludes),
            included: parseField(attributes.included || attributes.includes),
            excluded: parseField(attributes.excluded || attributes.excludes),
            entryRequirements: parseField(attributes.entryRequirements),
            requirements: parseField(attributes.requirements),
            itinerary: parseField(attributes.itinerary),
            maxGroupSize: typeof attributes.maxGroupSize === 'number' ? attributes.maxGroupSize : 0,
            cancellationPolicy: attributes.cancellationPolicy || "",
            isPopular: Boolean(attributes.isPopular),
            isSoldOut: Boolean(attributes.isSoldOut),
            difficulty: attributes.difficulty || "",
            maxAltitude: attributes.maxAltitude || "",
            permits: parseField(attributes.permits),
            equipment: parseField(attributes.equipment)
          }
        })
        
        console.log('Formatted tours:', formattedTours)
        setTours(formattedTours)
      } catch (err) {
        console.error('Error processing tours data:', err)
        setError('Failed to process tour data')
      } finally {
        setLoading(false)
      }
    }

    fetchTours()
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

  if (error) {
    return (
      <ThemeProvider>
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-500 text-lg mb-4">Error loading tours</p>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500 mb-4">
            Check if your Strapi server is running and the API endpoint is correct.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
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
              Check your Strapi admin panel to add Nepal destinations.
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