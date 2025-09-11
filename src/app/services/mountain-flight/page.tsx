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
    title: "Everest Mountain Flight",
    location: "Himalayas, Nepal",
    duration: "1 hour flight",
    rating: 4.9,
    reviewCount: 512,
    price: 210,
    originalPrice: 250,
    excerpt: "Breathtaking aerial views of Mount Everest and the Himalayan range",
    description: "Experience the ultimate adventure with a spectacular mountain flight to Mount Everest. This one-hour scenic flight offers unparalleled close-up views of the world's highest peak and other majestic mountains in the Himalayan range. Each passenger gets a window seat for optimal viewing and photography opportunities. The flight includes expert commentary about the mountains and a certificate of achievement.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Scenic Flight", "Everest", "Bucket List"],
    highlights: ["Close-up views of Mount Everest", "Window seat guaranteed", "Himalayan panorama", "Flight certificate"],
    includes: ["Scenic flight", "Window seat", "Expert commentary", "Certificate", "Hotel transfers"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Everest Mountain Flight", description: "Early morning hotel pickup, transfer to airport, check-in, one-hour scenic flight with mountain views, return to hotel" }
    ],
    maxGroupSize: 1,
    included: ["One-hour scenic mountain flight", "Guaranteed window seat", "Expert commentary during flight", "Certificate of achievement", "Hotel pick-up and drop-off", "All airport taxes"],
    excluded: ["Personal expenses", "Meals and drinks", "Gratuities", "Travel insurance", "Visa fees"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "8,848m (Everest)",
    requirements: ["No special requirements", "Suitable for all ages"],
    permits: ["None required"],
    equipment: ["Camera", "Sunglasses"],
    entryRequirements: ["Valid passport for identification"]
  }
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch mountain flights from Strapi API
  useEffect(() => {
    const fetchMountainFlights = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const response = await fetch(`${API_URL}/api/mountain-flights?populate=*`);
        
        console.log("API Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response data:", data);
        
        // Handle different response formats
        let flightsData = [];
        
        // Format 1: Standard Strapi v4 response (data array)
        if (data.data && Array.isArray(data.data)) {
          flightsData = data.data;
        } 
        // Format 2: Array response (direct)
        else if (Array.isArray(data)) {
          flightsData = data;
        }
        // Format 3: Single object response
        else if (data.data && typeof data.data === 'object') {
          flightsData = [data.data];
        }
        // Format 4: Direct object
        else if (data.id) {
          flightsData = [data];
        } else {
          console.warn("Unexpected API response format, using fallback data");
          setTours(FALLBACK_TOURS);
          setLoading(false);
          return;
        }
        
        // Transform API response to match Tour type
        const transformedFlights: Tour[] = flightsData.map((item: any) => {
          // Extract attributes based on Strapi v4 format or direct format
          const attributes = item.attributes || item;
          const id = item.id?.toString() || Math.random().toString(36).substr(2, 9);
          
          // Handle image extraction
          const extractImageUrl = (imageData: any) => {
            if (!imageData) return "/images/default-flight.jpg";
            
            if (Array.isArray(imageData)) {
              return imageData[0]?.url 
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData[0].url}`
                : "/images/default-flight.jpg";
            } else if (imageData.url) {
              return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.url}`;
            } else if (imageData.data) {
              // Handle nested data structure
              if (Array.isArray(imageData.data)) {
                return imageData.data[0]?.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data[0].attributes.url}`
                  : "/images/default-flight.jpg";
              } else {
                return imageData.data.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data.attributes.url}`
                  : "/images/default-flight.jpg";
              }
            }
            return "/images/default-flight.jpg";
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
            title: attributes.title || "Untitled Flight",
            location: attributes.location || "Himalayas, Nepal",
            duration: attributes.duration || "1 hour flight",
            rating: attributes.rating || 0,
            reviewCount: attributes.reviewCount || 0,
            price: attributes.price || 0,
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
            maxGroupSize: attributes.maxGroupSize || 1,
            cancellationPolicy: attributes.cancellationPolicy || "",
            isPopular: attributes.isPopular || false,
            isSoldOut: attributes.isSoldOut || false,
            difficulty: attributes.difficulty || "easy",
            maxAltitude: attributes.maxAltitude || "8,848m (Everest)",
            requirements: parseField(attributes.requirements, []),
            permits: parseField(attributes.permits, []),
            equipment: parseField(attributes.equipment, []),
            entryRequirements: parseField(attributes.entryRequirements, [])
          };
        });
        
        console.log("Transformed flights:", transformedFlights);
        setTours(transformedFlights);
      } catch (err) {
        console.error("Error fetching mountain flights:", err);
        setError(`Failed to load flights: ${err instanceof Error ? err.message : 'Unknown error'}`);
        // Use fallback data if API fails
        setTours(FALLBACK_TOURS);
      } finally {
        setLoading(false);
      }
    };

    fetchMountainFlights();
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
          <p className="mt-4 text-muted-foreground">Loading mountain flights...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Everest Mountain Flight Experience"
        description="Witness the majesty of Mount Everest and the Himalayan range from the air. This breathtaking one-hour flight offers unparalleled views of the world's highest peak without the strenuous trekking. A once-in-a-lifetime experience that will stay with you forever."
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
              <p className="text-muted-foreground">No mountain flights available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Everest Mountain Flight?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Guaranteed Window Seat</h3>
              <p className="text-muted-foreground">
                Every passenger gets a window seat for optimal viewing and photography of the Himalayas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Commentary</h3>
              <p className="text-muted-foreground">
                Learn about the mountains from our knowledgeable crew during the flight.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Convenient Duration</h3>
              <p className="text-muted-foreground">
                Experience the majesty of Everest in just one hour, perfect for busy itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Flight Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mountains You'll See</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Everest</strong> (8,848m) - World's highest peak
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Kanchenjunga</strong> (8,586m) - World's third highest
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Lhotse</strong> (8,516m) - Fourth highest mountain
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Makalu</strong> (8,485m) - Fifth highest mountain
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Mount Cho Oyu</strong> (8,188m) - Sixth highest mountain
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Flight Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Departure:</strong> Kathmandu Airport (early morning)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Duration:</strong> Approximately 1 hour flight time
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Aircraft:</strong> Modern turboprop planes with large windows
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Best Time:</strong> October to May (clear weather)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Included:</strong> Certificate of achievement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">What to Bring</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">📷</span>
              </div>
              <h3 className="font-semibold">Camera</h3>
              <p className="text-sm text-muted-foreground">With extra memory cards and batteries</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🕶️</span>
              </div>
              <h3 className="font-semibold">Sunglasses</h3>
              <p className="text-sm text-muted-foreground">Protection from bright mountain glare</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">🧥</span>
              </div>
              <h3 className="font-semibold">Warm Layers</h3>
              <p className="text-sm text-muted-foreground">Although the cabin is heated</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">📱</span>
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">For aerial photography and videos</p>
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