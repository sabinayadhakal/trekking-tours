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
    title: "Chitwan Classic Jungle Safari",
    location: "Chitwan National Park, Nepal",
    duration: "3 days / 2 nights",
    rating: 4.8,
    reviewCount: 423,
    price: 285,
    originalPrice: 325,
    excerpt: "Complete wildlife experience in Nepal's premier national park",
    description: "Immerse yourself in the wilderness of Chitwan National Park, a UNESCO World Heritage Site. This classic safari package offers diverse activities including jungle walks, canoe rides, elephant safaris, and cultural performances. Spot rare wildlife like one-horned rhinoceros, Bengal tigers, crocodiles, and over 500 species of birds in their natural habitat.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Wildlife", "Jungle Safari", "All Inclusive"],
    highlights: ["Elephant safari", "Jungle walk", "Canoe ride", "Tharu cultural show"],
    includes: ["Accommodation", "All meals", "Activities", "Park fees", "Guide"],
    excludes: ["Transportation to Chitwan", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival and Village Tour", description: "Arrive in Chitwan, lunch, visit Tharu village, sunset views, dinner, cultural program" },
      { day: 2, title: "Full Day Safari Activities", description: "Bird watching, elephant safari, jungle walk, canoe trip, wildlife spotting" },
      { day: 3, title: "Departure", description: "Early morning nature walk, breakfast, departure from Chitwan" }
    ],
    maxGroupSize: 12,
    included: ["2 nights accommodation in jungle lodge", "All meals (2 breakfasts, 2 lunches, 2 dinners)", "All safari activities with expert guides", "Chitwan National Park entry fees", "Cultural program attendance"],
    excluded: ["Transportation to/from Chitwan", "Alcoholic beverages", "Personal expenses", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 7 days before departure. 50% refund between 3-7 days. No refund within 3 days.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "easy to moderate",
    requirements: ["Comfortable walking shoes", "Binoculars recommended"],
    equipment: ["Light clothing", "Sunscreen", "Insect repellent", "Camera"],
    entryRequirements: ["Valid identification"]
  }
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jungle safari tours from Strapi API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const response = await fetch(`${API_URL}/api/jungle-safaris?populate=*`);
        
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
            if (!imageData) return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop";
            
            if (Array.isArray(imageData)) {
              return imageData[0]?.url 
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData[0].url}`
                : "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop";
            } else if (imageData.url) {
              return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.url}`;
            } else if (imageData.data) {
              // Handle nested data structure
              if (Array.isArray(imageData.data)) {
                return imageData.data[0]?.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data[0].attributes.url}`
                  : "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop";
              } else {
                return imageData.data.attributes?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageData.data.attributes.url}`
                  : "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop";
              }
            }
            return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop";
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
            title: attributes.title || "Untitled Safari",
            location: attributes.location || "Chitwan National Park, Nepal",
            duration: attributes.duration || "",
            rating: attributes.rating || 0,
            reviewCount: attributes.reviewCount || 0,
            price: attributes.price || 0,
            originalPrice: attributes.originalPrice || attributes.price + 50,
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
            difficulty: attributes.difficulty || "easy to moderate",
            requirements: parseField(attributes.requirements, []),
            equipment: parseField(attributes.equipment, []),
            entryRequirements: parseField(attributes.entryRequirements, [])
          };
        });
        
        console.log("Transformed jungle safari tours:", transformedTours);
        setTours(transformedTours);
      } catch (err) {
        console.error("Error fetching jungle safari tours:", err);
        setError(`Failed to load jungle safari tours: ${err instanceof Error ? err.message : 'Unknown error'}`);
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
          <p className="mt-4 text-muted-foreground">Loading jungle safari tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Chitwan Jungle Safari Experiences"
        description="Discover the wild heart of Nepal at Chitwan National Park, a UNESCO World Heritage Site. Encounter rare wildlife including one-horned rhinoceros, Bengal tigers, and over 500 bird species in their natural habitat."
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
              <p className="text-muted-foreground">No jungle safari tours available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Chitwan Safaris?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Expert Naturalist Guides</h3>
              <p className="text-muted-foreground">
                Our guides have extensive knowledge of local wildlife and ecosystems for an educational experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Ethical Wildlife Viewing</h3>
              <p className="text-muted-foreground">
                We prioritize animal welfare and follow strict guidelines for responsible wildlife tourism.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive Packages</h3>
              <p className="text-muted-foreground">
                We handle accommodations, meals, activities, and permits for a seamless jungle experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Chitwan Wildlife Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What You Might See</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  One-horned rhinoceros (population: ~600)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Bengal tiger (population: ~120)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Gharial and mugger crocodiles
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Over 500 species of birds
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Sloth bears, leopards, and deer species
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Best Time to Visit</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>October-November:</strong> Perfect weather, clear skies
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>December-February:</strong> Cool temperatures, good wildlife spotting
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>March-April:</strong> Spring blooms, bird migration
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <strong>Monsoon (June-September):</strong> Lush vegetation, fewer tourists
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