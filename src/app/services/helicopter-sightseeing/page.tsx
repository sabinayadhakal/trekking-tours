"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Fallback data in case API fails
const FALLBACK_TOURS: Tour[] = [
  {
    id: "1",
    title: "Everest Helicopter Sightseeing",
    location: "Everest Region, Nepal",
    duration: "4-5 hours",
    rating: 4.9,
    reviewCount: 342,
    price: 1150,
    originalPrice: 1250,
    excerpt: "Breathtaking aerial views of the world's highest peak",
    description: "Experience the ultimate adventure with a helicopter tour to Mount Everest. Fly over the majestic Himalayas, witness stunning glaciers, and land at the world's highest hotel at Everest View Point (3,880m) for breakfast with a panoramic view of Everest, Lhotse, and Ama Dablam. This once-in-a-lifetime journey offers unparalleled views of the world's highest mountains without the strenuous trek.",
    image: "/images/everest-helicopter.jpg",
    images: ["/images/everest-helicopter1.jpg", "/images/everest-helicopter2.jpg", "/images/everest-helicopter3.jpg"],
    tags: ["Helicopter", "Luxury", "Bucket List"],
    highlights: [
      "Mount Everest close-up view",
      "Kala Patthar landing",
      "Himalayan panorama",
      "Breakfast at Everest View Hotel"
    ],
    includes: ["Helicopter flight", "Experienced pilot", "Hotel transfers", "Breakfast at Everest View Hotel"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    included: ["Shared helicopter flight", "Expert pilot", "Hotel transfers", "Breakfast at Everest View Hotel", "All permits and taxes"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    itinerary: [
      { day: 1, title: "Everest Helicopter Tour", description: "Hotel pickup, flight to Lukla, aerial views of Everest region, landing at Syangboche for breakfast, return to Kathmandu" }
    ],
    maxGroupSize: 5,
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "Easy",
    maxAltitude: "3,880m (Everest View Hotel)",
    requirements: ["No experience needed", "Reasonable health condition"],
    permits: ["National Park entry permit", "Flight operation permit"],
    equipment: ["Warm clothing", "Sunglasses", "Camera"],
    entryRequirements: ["Valid passport for identification"]
  }
];

export default function HelicopterSightseeingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch helicopter tours from Strapi API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const response = await fetch(`${API_URL}/api/helicopter-sightseeings?populate=*`);
        
        console.log("API Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response data:", data);
        
        // Handle different response formats
        let toursData = [];
        
        // Format 1: Standard Strapi v4 response (data array)
        if (data.data && Array.isArray(data.data)) {
          toursData = data.data;
        } 
        // Format 2: Array response (direct)
        else if (Array.isArray(data)) {
          toursData = data;
        }
        // Format 3: Single object response
        else if (data.data && typeof data.data === 'object') {
          toursData = [data.data];
        }
        // Format 4: Direct object
        else if (data.id) {
          toursData = [data];
        } else {
          console.warn("Unexpected API response format, using fallback data");
          setTours(FALLBACK_TOURS);
          setLoading(false);
          return;
        }
        
        // Transform API response to match Tour type
        const transformedTours: Tour[] = toursData.map((item: any) => {
          // Extract attributes based on Strapi v4 format or direct format
          const attributes = item.attributes || item;
          const id = item.id?.toString() || Math.random().toString(36).substr(2, 9);
          
          // Handle image extraction
          const extractImageUrl = (imageData: any) => {
            if (!imageData) return "/images/default-helicopter.jpg";
            
            if (Array.isArray(imageData)) {
              return imageData[0]?.url 
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData[0].url}`
                : "/images/default-helicopter.jpg";
            } else if (imageData.url) {
              return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.url}`;
            } else if (imageData.data) {
              // Handle nested data structure
              if (Array.isArray(imageData.data)) {
                return imageData.data[0]?.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data[0].attributes.url}`
                  : "/images/default-helicopter.jpg";
              } else {
                return imageData.data.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data.attributes.url}`
                  : "/images/default-helicopter.jpg";
              }
            }
            return "/images/default-helicopter.jpg";
          };
          
          // Handle multiple images extraction
          const extractMultipleImages = (imagesData: any): string[] => {
            if (!imagesData) return [];
            
            if (Array.isArray(imagesData)) {
              return imagesData
                .map((img: any) => 
                  img.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${img.url}` : null
                )
                .filter(Boolean) as string[];
            } else if (imagesData.data && Array.isArray(imagesData.data)) {
              return imagesData.data
                .map((img: any) => 
                  img.attributes?.url 
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${img.attributes.url}`
                    : null
                )
                .filter(Boolean) as string[];
            }
            return [];
          };
          
          // Parse JSON fields if they are stored as strings
          const parseField = (field: any, defaultValue: any = []) => {
            if (typeof field === 'string') {
              try {
                return JSON.parse(field);
              } catch {
                return defaultValue;
              }
            }
            return field || defaultValue;
          };
          
          return {
            id,
            title: attributes.title || "Untitled Helicopter Tour",
            location: attributes.location || "",
            duration: attributes.duration || "",
            rating: attributes.rating || 0,
            reviewCount: attributes.reviewCount || 0,
            price: attributes.price || 0,
            originalPrice: attributes.originalPrice || attributes.price || 0,
            excerpt: attributes.excerpt || "",
            description: attributes.description || "",
            image: extractImageUrl(attributes.image),
            images: extractMultipleImages(attributes.images),
            tags: parseField(attributes.tags, []),
            highlights: parseField(attributes.highlights, []),
            includes: parseField(attributes.includes, []),
            excludes: parseField(attributes.excludes, []),
            included: parseField(attributes.included || attributes.includes, []),
            excluded: parseField(attributes.excluded || attributes.excludes, []),
            itinerary: parseField(attributes.itinerary, []),
            maxGroupSize: attributes.maxGroupSize || 0,
            cancellationPolicy: attributes.cancellationPolicy || "",
            isPopular: attributes.isPopular || false,
            isSoldOut: attributes.isSoldOut || false,
            difficulty: attributes.difficulty || "Easy",
            maxAltitude: attributes.maxAltitude || "",
            requirements: parseField(attributes.requirements, []),
            permits: parseField(attributes.permits, []),
            equipment: parseField(attributes.equipment, []),
            entryRequirements: parseField(attributes.entryRequirements, [])
          };
        });
        
        console.log("Transformed helicopter tours:", transformedTours);
        setTours(transformedTours);
      } catch (err) {
        console.error("Error fetching helicopter tours:", err);
        setError(`Failed to load helicopter tours: ${err instanceof Error ? err.message : 'Unknown error'}`);
        // Use fallback data if API fails
        setTours(FALLBACK_TOURS);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading helicopter tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Helicopter Sightseeing Tours"
        description="Experience the Himalayas from above with our exclusive helicopter tours. Witness breathtaking aerial views of Everest, Annapurna, and Langtang regions without the strenuous trekking. A once-in-a-lifetime adventure awaits."
      />
      
      {error && (
        <div className="container mx-auto px-4 py-4">
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Note: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      )}
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          {tours.length > 0 ? (
            <ToursGrid
              tours={tours}
              onTourSelect={handleTourSelect}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No helicopter tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections specific to helicopter tours */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Helicopter Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Pilots</h3>
              <p className="text-muted-foreground">
                Our experienced pilots have extensive knowledge of Himalayan weather and terrain for your safety.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Limited to 5 passengers per flight ensuring everyone has a window seat for optimal views.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle all permits, transfers, and arrangements for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tour Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Warm layers (temperatures drop at high altitude)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Sunglasses and sunscreen (high UV at altitude)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Camera with extra batteries
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Valid passport for permit processing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Flights are weather-dependent and may be rescheduled
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Weight restrictions apply for passenger safety
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Oxygen is available on all flights
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Minimum 2 passengers required for tour operation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Popular Helicopter Tour Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">⛰️</span>
              </div>
              <h3 className="font-semibold">Everest Region</h3>
              <p className="text-sm text-muted-foreground">Fly over the world's highest peak with landing at Kala Patthar</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🏔️</span>
              </div>
              <h3 className="font-semibold">Annapurna Region</h3>
              <p className="text-sm text-muted-foreground">Spectacular views of Annapurna massif with Muktinath landing</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🌄</span>
              </div>
              <h3 className="font-semibold">Langtang Region</h3>
              <p className="text-sm text-muted-foreground">Dramatic glacier views and landing at Kyanjin Gompa</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🗻</span>
              </div>
              <h3 className="font-semibold">Custom Tours</h3>
              <p className="text-sm text-muted-foreground">Personalized itineraries to remote Himalayan destinations</p>
            </div>
          </div>
        </div>
      </section>

      {selectedTour && (
        <TourDetailModal
          tour={selectedTour}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Notifications />
    </main>
  );
}