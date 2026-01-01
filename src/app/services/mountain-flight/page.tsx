"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

const MOUNTAIN_FLIGHT_TOURS: Tour[] = [
  {
  "id": "1",
  "title": "Everest Mountain Flight",
  "location": "Himalayas, Nepal",
  "duration": "1 hour flight",
  "rating": 4.9,
  "price": 210,
  "originalPrice": 250,
  "excerpt": "Breathtaking aerial views of Mount Everest and the Himalayan range",
  "description": "Experience the ultimate adventure with a spectacular mountain flight to Mount Everest. This one-hour scenic flight offers unparalleled close-up views of the world's highest peak and other majestic mountains in the Himalayan range. Each passenger gets a window seat for optimal viewing and photography opportunities. The flight includes expert commentary about the mountains and a certificate of achievement.",
  "image": "/images/mountain_flight-1.jpg",
  "images": [
    "/images/mountain_flight-1.jpg",
    "/images/everest-flight-2.jpg",
    "/images/himalayan-panorama-1.jpg",
    "/images/airplane-cabin-1.jpg",
    "/images/mountain-flight-view-1.jpg",
    "/images/everest-closeup-1.jpg",
    "/images/annapurna-range-1.jpg",
    "/images/flight-certificate-1.jpg",
    "/images/airport-transfer-1.jpg",
    "/images/window-seat-view-1.jpg",
    "/images/mt-everest-aerial-1.jpg",
    "/images/himalayan-peaks-1.jpg"
  ],
  "tags": ["Scenic Flight", "Everest", "Bucket List", "Mountain Flight", "Aerial Tour", "Himalayan Adventure", "Sightseeing Flight", "Nepal Experience"],
  "highlights": ["Close-up views of Mount Everest", "Window seat guaranteed", "Himalayan panorama including Lhotse, Makalu, and Cho Oyu", "Certificate of achievement", "Expert commentary about peaks", "Early morning optimal visibility"],
  "includes": ["Scenic flight", "Window seat", "Expert commentary", "Certificate", "Hotel transfers", "Airport taxes"],
  "excludes": ["Personal expenses", "Tips", "Travel insurance", "Meals", "Additional photography services"],
  "included": ["One-hour scenic mountain flight", "Guaranteed window seat", "Expert commentary during flight (English)", "Certificate of achievement", "Hotel pick-up and drop-off in Kathmandu", "All airport taxes and surcharges", "Flight route covering Everest, Kanchenjunga, and other peaks"],
  "excluded": ["Personal expenses", "Meals and drinks", "Gratuities for driver and staff", "Travel insurance", "Visa fees", "Additional activities", "Excess baggage charges"],
  "entryRequirements": ["Valid passport for identification", "Nepal visa (obtainable on arrival for most nationalities)"],
  "itinerary": [
    { "day": 1, "title": "Everest Mountain Flight Experience", "description": "Early morning hotel pickup (5:30-6:00 AM), transfer to Tribhuvan International Airport, check-in and boarding, one-hour scenic flight with mountain views (Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga), return to airport, certificate distribution, return to hotel by 9:00 AM" }
  ],
  "maxGroupSize": 1,
  "cancellationPolicy": "Free cancellation up to 24 hours before departure. No refund within 24 hours. Weather-dependent flights may be rescheduled.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "8,848m (Everest)",
  "requirements": ["No special requirements", "Suitable for all ages", "Valid identification", "Ability to board small aircraft", "No serious health conditions"],
  "permits": ["None required"],
  "equipment": ["Camera with good zoom", "Sunglasses", "Warm clothing", "Passport/ID copy", "Binoculars (optional)", "Motion sickness medication if needed"],
}
  
  
];

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for mountain flights
  const heroImage = "/images/mountain-flight-hero.jpg"; // Change this to your desired image path

  // Load mountain flight tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(MOUNTAIN_FLIGHT_TOURS);
      } catch (err) {
        console.error("Error loading mountain flights:", err);
        setTours(MOUNTAIN_FLIGHT_TOURS); // Still use mock data on error
      } finally {
        setLoading(false);
      }
    };

    loadTours();
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
      {/* Updated Hero section with image for mountain flights */}
      <Hero 
        title="Everest Mountain Flight Experience"
        description="Witness the majesty of Mount Everest and the Himalayan range from the air. This breathtaking one-hour flight offers unparalleled views of the world's highest peak without the strenuous trekking. A once-in-a-lifetime experience that will stay with you forever."
        backgroundImage={heroImage} // Add this line
      />
      
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