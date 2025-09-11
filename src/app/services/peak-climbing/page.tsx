"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Fallback data in case API fails (optional)
const FALLBACK_PEAK_TOURS: Tour[] = [
  {
    id: "5",
    title: "Mera Peak Climb",
    location: "Nepal",
    duration: "18 days",
    rating: 4.9,
    reviewCount: 210,
    price: 4500,
    originalPrice: 5000,
    excerpt: "Climb the highest trekking peak in Nepal with panoramic Himalayan views.",
    description: "Mera Peak (6476m) offers an exhilarating trekking peak experience with incredible views of Everest, Kanchenjunga, Makalu, and Cho Oyu. Ideal for adventurers looking for high-altitude trekking with moderate climbing.",
    image: "/images/mera_peak.jpg",
    images: ["/images/mera_peak1.jpg", "/images/mera_peak2.jpg", "/images/mera_peak3.jpg"],
    tags: ["Mera Peak", "Peak Climbing", "Adventure", "Nepal"],
    highlights: [
      "Summit of Mera Peak (6476m)",
      "Panoramic Himalayan views",
      "High-altitude trekking",
      "Sherpa culture experience",
      "Glacier and snow climbing"
    ],
    includes: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excludes: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
    included: ["Guide", "Meals", "Accommodation", "Permits", "Porters"],
    excluded: ["Flights", "Personal expenses", "Travel insurance", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Overnight stay and briefing." },
      { day: 2, title: "Fly to Lukla & Trek to Paiya", description: "Start of trek through forested trails." },
      { day: 3, title: "Trek to Chutok", description: "Scenic trekking through villages." },
      { day: 4, title: "Trek to Thuli Kharka", description: "Gradual ascent and acclimatization." },
      { day: 5, title: "Trek to Khare", description: "Approach to Mera Peak base." },
      { day: 6, title: "Acclimatization & Preparation", description: "Local exploration and climbing prep." },
      { day: 7, title: "Mera Peak Summit Day", description: "Early morning ascent, return to Khare." },
      { day: 8, title: "Descend to Lukla", description: "Return trek through beautiful valleys." },
      { day: 9, title: "Fly back to Kathmandu", description: "Celebrate summit success." }
    ],
    maxGroupSize: 6,
    cancellationPolicy: "Full refund if canceled 45 days before departure.",
    isPopular: true,
    isSoldOut: false,
    difficulty: "hard",
    maxAltitude: "6,476m",
    requirements: ["Excellent fitness", "High-altitude trekking experience", "Acclimatization"],
    permits: ["Mera Peak Climbing Permit", "TIMS Card"],
    equipment: ["Climbing boots", "Backpack", "Warm layers", "Sleeping bag", "Trekking poles", "Crampons"],
    entryRequirements: ["Valid Nepal visa", "Travel insurance"]
  }
];

export default function PeakClimbingPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch peak climbing tours from Strapi API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const response = await fetch(`${API_URL}/api/peak-climbings?populate=*`);
        
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
          setTours(FALLBACK_PEAK_TOURS);
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
            difficulty: attributes.difficulty || "",
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
        setTours(FALLBACK_PEAK_TOURS);
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
          <p className="mt-4 text-muted-foreground">Loading peak climbing expeditions...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Peak Climbing Expeditions"
        description="Challenge yourself with Nepal's iconic peaks. From moderate trekking peaks to high-altitude summits, experience adventure, culture, and the breathtaking Himalayas with expert guides."
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
              <p className="text-muted-foreground">No peak climbing expeditions available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Peak Expeditions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Experienced Guides</h3>
              <p className="text-muted-foreground">
                Certified mountaineering guides ensure safety and provide expert training.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Well-Planned Itineraries</h3>
              <p className="text-muted-foreground">
                Carefully designed schedules allow proper acclimatization and maximized summit success.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Full Support</h3>
              <p className="text-muted-foreground">
                Logistics, permits, equipment, and meals are handled so you can focus on climbing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Peak Climbing Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">Beginner</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginner Peaks</h3>
              <p className="text-muted-foreground">5,000-5,500m, basic climbing skills, good fitness required</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">Moderate</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moderate Peaks</h3>
              <p className="text-muted-foreground">5,500-6,000m, previous climbing experience, good fitness</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">Challenging</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenging Peaks</h3>
              <p className="text-muted-foreground">6,000-6,500m, technical climbing skills, excellent fitness</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">Expert</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Peaks</h3>
              <p className="text-muted-foreground">6,500m+, advanced mountaineering skills, expedition experience</p>
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