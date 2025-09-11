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
    title: "Nepal Temples and Stupas Tour",
    location: "Kathmandu Valley, Nepal",
    duration: "5 days / 4 nights",
    rating: 4.8,
    reviewCount: 342,
    price: 650,
    originalPrice: 720,
    excerpt: "Spiritual journey through Nepal's most sacred religious sites",
    description: "Immerse yourself in Nepal's rich spiritual heritage on this comprehensive tour of its most important temples and stupas. Visit ancient Hindu temples, Buddhist stupas, and sacred sites that have been pilgrimage destinations for centuries. Experience daily rituals, learn about religious practices, and gain deep insights into Nepal's unique blend of Hinduism and Buddhism.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Spiritual", "Cultural", "Religious Sites"],
    highlights: ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Dakshinkali Temple"],
    includes: ["Accommodation", "All meals", "Expert guide", "Transportation", "Entry fees"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport pickup, hotel check-in, orientation, welcome dinner" },
      { day: 2, title: "Kathmandu Sacred Sites", description: "Visit Pashupatinath Temple, Boudhanath Stupa, and Guheshwori Temple" },
      { day: 3, title: "Ancient Stupas and Shrines", description: "Explore Swayambhunath, Dakshinkali Temple, and Chobhar Gorge" },
      { day: 4, title: "Patan Religious Heritage", description: "Discover Patan's temples, monasteries, and spiritual sites" },
      { day: 5, title: "Departure", description: "Final temple visits, shopping for religious artifacts, airport transfer" }
    ],
    maxGroupSize: 12,
    included: ["4 nights accommodation in 3-star hotels", "All meals (4 breakfasts, 4 lunches, 4 dinners)", "Expert cultural guide", "Private transportation", "All temple entry fees", "Cultural performance"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 15 days before departure. 50% refund between 7-15 days. No refund within 7 days.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy",
    maxAltitude: "1,350m",
    requirements: ["No special requirements", "Suitable for all fitness levels"],
    permits: ["Heritage site entry permits"],
    equipment: ["Comfortable walking shoes", "Camera", "Sun protection"],
    entryRequirements: ["Valid passport", "Nepal visa"]
  }
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tours from Strapi API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const response = await fetch(`${API_URL}/api/package-sightseeing-tours?populate=*`);
        
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
            if (!imageData) return "/images/default-tour.jpg";
            
            if (Array.isArray(imageData)) {
              return imageData[0]?.url 
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData[0].url}`
                : "/images/default-tour.jpg";
            } else if (imageData.url) {
              return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.url}`;
            } else if (imageData.data) {
              // Handle nested data structure
              if (Array.isArray(imageData.data)) {
                return imageData.data[0]?.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data[0].attributes.url}`
                  : "/images/default-tour.jpg";
              } else {
                return imageData.data.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data.attributes.url}`
                  : "/images/default-tour.jpg";
              }
            }
            return "/images/default-tour.jpg";
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
            title: attributes.title || "Untitled Tour",
            location: attributes.location || "",
            duration: attributes.duration || "",
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
            maxGroupSize: attributes.maxGroupSize || 0,
            cancellationPolicy: attributes.cancellationPolicy || "",
            isPopular: attributes.isPopular || false,
            isSoldOut: attributes.isSoldOut || false,
            difficulty: attributes.difficulty || "easy",
            maxAltitude: attributes.maxAltitude || "",
            requirements: parseField(attributes.requirements, []),
            permits: parseField(attributes.permits, []),
            equipment: parseField(attributes.equipment, []),
            entryRequirements: parseField(attributes.entryRequirements, [])
          };
        });
        
        console.log("Transformed tours:", transformedTours);
        setTours(transformedTours);
      } catch (err) {
        console.error("Error fetching tours:", err);
        setError(`Failed to load tours: ${err instanceof Error ? err.message : 'Unknown error'}`);
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
          <p className="mt-4 text-muted-foreground">Loading tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Package Sightseeing Tours"
        description="Discover the diverse beauty of Nepal with our carefully curated package tours. From cultural heritage sites and spiritual journeys to family adventures and photography expeditions, we offer comprehensive experiences that showcase the best of Nepal's treasures."
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
              <p className="text-muted-foreground">No sightseeing tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Package Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Itineraries</h3>
              <p className="text-muted-foreground">
                Our tours are carefully designed to include all must-see attractions with optimal timing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Local Guides</h3>
              <p className="text-muted-foreground">
                Knowledgeable guides provide deep insights into culture, history, and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Hassle-Free Experience</h3>
              <p className="text-muted-foreground">
                We handle all logistics, accommodations, transportation, and entry arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tour Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">By Duration</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Short Tours (4-5 days):</strong> Perfect for limited time
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Standard Tours (7-9 days):</strong> Comprehensive experiences
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Extended Tours (10+ days):</strong> In-depth exploration
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Customizable:</strong> Tailored to your preferences
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">By Interest</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Cultural & Heritage:</strong> Temples, palaces, UNESCO sites
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Family Friendly:</strong> Activities for all ages
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Photography:</strong> Designed for capturing best shots
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Comprehensive:</strong> Combining multiple experiences
                </li>
              </ul>
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