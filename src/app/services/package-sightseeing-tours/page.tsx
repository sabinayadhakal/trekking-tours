"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Mock package sightseeing tours data
const PACKAGE_SIGHTSEEING_TOURS: Tour[] = [
  {
    "id": "1",
    "title": "Nepal Temples and Stupas Tour - 5 Days Spiritual Journey Kathmandu",
    "location": "Kathmandu Valley, Nepal",
    "duration": "5 days / 4 nights",
    "rating": 4.8,
    "reviewCount": 342,
    "price": 650,
    "originalPrice": 720,
    "excerpt": "5-day spiritual tour of Nepal's sacred temples and stupas including Pashupatinath, Boudhanath, and Swayambhunath",
    "description": "Experience Nepal's spiritual heritage on this 5-day temples and stupas tour. Visit UNESCO World Heritage Sites including Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath Monkey Temple. Perfect for spiritual seekers and cultural enthusiasts exploring Hindu and Buddhist traditions in Kathmandu Valley.",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    "tags": ["Nepal Temple Tour", "Spiritual Journey", "Kathmandu Valley Tour", "Buddhist Stupas", "Hindu Temples", "Religious Tour Nepal"],
    "highlights": ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Dakshinkali Temple", "Patan Durbar Square"],
    "includes": ["Hotel Accommodation", "All Meals", "Expert Guide", "Private Transportation", "Entry Fees"],
    "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses"],
    "itinerary": [
      { "day": 1, "title": "Arrival in Kathmandu", "description": "Airport pickup, hotel check-in, orientation, welcome dinner" },
      { "day": 2, "title": "Kathmandu Sacred Sites", "description": "Visit Pashupatinath Temple, Boudhanath Stupa, and Guheshwori Temple" },
      { "day": 3, "title": "Ancient Stupas and Shrines", "description": "Explore Swayambhunath, Dakshinkali Temple, and Chobhar Gorge" },
      { "day": 4, "title": "Patan Religious Heritage", "description": "Discover Patan's temples, monasteries, and spiritual sites" },
      { "day": 5, "title": "Departure", "description": "Final temple visits, shopping for religious artifacts, airport transfer" }
    ],
    "maxGroupSize": 12,
    "included": ["4 nights accommodation in 3-star hotels", "All meals (4 breakfasts, 4 lunches, 4 dinners)", "Expert cultural guide", "Private transportation", "All temple entry fees", "Cultural performance"],
    "excluded": ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    "cancellationPolicy": "Free cancellation up to 15 days before departure. 50% refund between 7-15 days. No refund within 7 days.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["No special requirements", "Suitable for all fitness levels"],
    "permits": ["Heritage site entry permits"],
    "equipment": ["Comfortable walking shoes", "Camera", "Sun protection"],
    "entryRequirements": ["Valid passport", "Nepal visa"]
  },
  {
    "id": "2",
    "title": "Kathmandu Valley Heritage Tour - 4 Days UNESCO World Heritage Sites",
    "location": "Kathmandu Valley, Nepal",
    "duration": "4 days / 3 nights",
    "rating": 4.7,
    "reviewCount": 278,
    "price": 520,
    "originalPrice": 580,
    "excerpt": "4-day UNESCO World Heritage tour exploring Kathmandu, Patan, and Bhaktapur Durbar Squares in Nepal",
    "description": "Discover Kathmandu Valley's seven UNESCO World Heritage Sites on this 4-day cultural tour. Explore ancient royal cities, medieval architecture, and living Newari traditions. Perfect for history and culture enthusiasts visiting Nepal's cultural heartland.",
    "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    "tags": ["Kathmandu UNESCO Tour", "Heritage Sites Nepal", "Durbar Square Tour", "Cultural Tour Nepal", "Newari Architecture"],
    "highlights": ["Kathmandu Durbar Square", "Patan Durbar Square", "Bhaktapur Durbar Square", "Traditional Newari architecture", "Ancient Temples"],
    "includes": ["Hotel Accommodation", "Meals", "Guide", "Transport", "Entry Fees"],
    "excludes": ["International Flights", "Personal Shopping", "Travel Insurance"],
    "itinerary": [
      { "day": 1, "title": "Arrival and Kathmandu Exploration", "description": "Airport arrival, hotel check-in, Kathmandu Durbar Square tour, Thamel exploration" },
      { "day": 2, "title": "Patan and Tibetan Culture", "description": "Patan Durbar Square, Golden Temple, Tibetan refugee center, traditional crafts" },
      { "day": 3, "title": "Bhaktapur Medieval City", "description": "Bhaktapur Durbar Square, pottery square, traditional Newari lunch, cultural walk" },
      { "day": 4, "title": "Departure", "description": "Last-minute shopping, traditional breakfast, airport transfer" }
    ],
    "maxGroupSize": 10,
    "included": ["3 nights hotel accommodation", "All meals", "Expert heritage guide", "Private vehicle", "All UNESCO site entry fees"],
    "excluded": ["International flights", "Visa fees", "Personal expenses"],
    "cancellationPolicy": "Free cancellation up to 10 days before tour. 50% refund 5-10 days prior. No refund within 5 days.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,350m",
    "requirements": ["Comfortable walking shoes"],
    "permits": ["Heritage site permits"],
    "equipment": ["Camera", "Comfortable clothing"],
    "entryRequirements": ["Valid passport"]
  },
  {
    "id": "3",
    "title": "Nepal Family Adventure Tour - 7 Days Kid-Friendly Nepal Vacation",
    "location": "Kathmandu and Pokhara, Nepal",
    "duration": "7 days / 6 nights",
    "rating": 4.9,
    "reviewCount": 156,
    "price": 890,
    "originalPrice": 980,
    "excerpt": "7-day family-friendly Nepal tour with child-friendly activities in Kathmandu and Pokhara",
    "description": "Perfect Nepal family vacation combining cultural experiences with kid-friendly activities. Visit ancient sites, enjoy gentle nature walks, and create unforgettable family memories in Kathmandu and Pokhara. Designed for families with children of all ages.",
    "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    "tags": ["Nepal Family Tour", "Kid-Friendly Nepal", "Family Vacation", "Children Activities", "Pokhara Family Tour"],
    "highlights": ["Child-friendly activities", "Pokhara lakeside", "Gentle hiking", "Cultural workshops", "Family Boating"],
    "includes": ["Family Accommodations", "All Meals", "Child-Friendly Guide", "Activities", "Transport"],
    "excludes": ["International Flights", "Childcare Services", "Personal Expenses"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu Arrival", "description": "Airport pickup, family hotel check-in, orientation, child-friendly dinner" },
      { "day": 2, "title": "Kathmandu Family Day", "description": "Swayambhunath visit, children's museum, traditional puppet show" },
      { "day": 3, "title": "Travel to Pokhara", "description": "Scenic drive to Pokhara, lakeside hotel check-in, boating on Phewa Lake" },
      { "day": 4, "title": "Pokhara Adventures", "description": "Sarangkot sunrise, Peace Pagoda, Gupteshwor Cave, family hiking" },
      { "day": 5, "title": "Cultural Experiences", "description": "Traditional cooking class, cultural dance, local market visit" },
      { "day": 6, "title": "Return to Kathmandu", "description": "Morning activities in Pokhara, scenic drive back to Kathmandu" },
      { "day": 7, "title": "Departure", "description": "Last-minute family photos, airport transfer" }
    ],
    "maxGroupSize": 8,
    "included": ["6 nights family accommodations", "All meals", "Child-friendly activities", "Private transportation", "All entry fees"],
    "excluded": ["International flights", "Extra childcare", "Personal shopping"],
    "cancellationPolicy": "Free cancellation up to 21 days before departure. Flexible family policies available.",
    "isPopular": true,
    "isSoldOut": true,
    "difficulty": "easy",
    "maxAltitude": "1,400m",
    "requirements": ["Children must be accompanied"],
    "permits": ["Standard tourist permits"],
    "equipment": ["Family camera", "Comfortable shoes"],
    "entryRequirements": ["Passports for all family members"]
  },
  {
    "id": "4",
    "title": "Nepal Photography Tour - 8 Days Professional Photography Workshop",
    "location": "Kathmandu, Pokhara, Nagarkot",
    "duration": "8 days / 7 nights",
    "rating": 4.8,
    "reviewCount": 89,
    "price": 1250,
    "originalPrice": 1400,
    "excerpt": "8-day Nepal photography tour with professional guidance capturing landscapes, culture, and Himalayan views",
    "description": "Professional photography tour of Nepal with expert guidance. Capture stunning Himalayan landscapes, cultural moments, and daily life in Kathmandu, Pokhara, and Nagarkot. Includes photography workshops and golden hour sessions at Nepal's most photogenic locations.",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    ],
    "tags": ["Nepal Photography Tour", "Photography Workshop", "Landscape Photography", "Cultural Photography", "Himalayan Photography"],
    "highlights": ["Golden Hour Photography", "Professional Guidance", "Iconic Locations", "Photo Editing Workshop", "Himalayan Sunrise"],
    "includes": ["Photography Guide", "Accommodation", "Transport", "Meals", "Workshops"],
    "excludes": ["Camera Equipment", "International Flights", "Travel Insurance"],
    "itinerary": [
      { "day": 1, "title": "Arrival and Orientation", "description": "Airport pickup, hotel check-in, photography equipment check, orientation session" },
      { "day": 2, "title": "Kathmandu Cultural Photography", "description": "Early morning at Boudhanath, Patan Durbar Square, local markets, evening review" },
      { "day": 3, "title": "Temples and People", "description": "Pashupatinath rituals, Swayambhunath sunset, street photography workshop" },
      { "day": 4, "title": "Travel to Nagarkot", "description": "Morning travel to Nagarkot, Himalayan sunset photography, night photography" },
      { "day": 5, "title": "Nagarkot to Pokhara", "description": "Sunrise over Himalayas, travel to Pokhara, Phewa Lake golden hour" },
      { "day": 6, "title": "Pokhara Landscapes", "description": "Sarangkot sunrise, Peace Pagoda, waterfall photography, editing workshop" },
      { "day": 7, "title": "Return to Kathmandu", "description": "Morning Pokhara photography, return to Kathmandu, final review session" },
      { "day": 8, "title": "Departure", "description": "Last photo opportunities, airport transfer" }
    ],
    "maxGroupSize": 6,
    "included": ["Professional photography guide", "7 nights accommodation", "All meals", "Private transportation", "Photo workshops", "Location fees"],
    "excluded": ["Camera equipment", "International flights", "Personal insurance"],
    "cancellationPolicy": "Free cancellation up to 14 days before tour. 50% refund 7-14 days prior.",
    "isPopular": false,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "2,175m",
    "requirements": ["Basic photography knowledge", "Own camera equipment"],
    "permits": ["Standard permits"],
    "equipment": ["Camera with multiple lenses", "Tripod", "Extra memory cards"],
    "entryRequirements": ["Valid passport"]
  },
  {
    "id": "5",
    "title": "Pokhara Chitwan Lumbini Tour - 8 Days Nepal Cultural and Wildlife Experience",
    "location": "Pokhara, Chitwan, Lumbini, Nepal",
    "duration": "8 days / 7 nights",
    "rating": 4.7,
    "reviewCount": 203,
    "price": 950,
    "originalPrice": 1050,
    "excerpt": "8-day Nepal tour combining Pokhara's lakes, Chitwan wildlife safari, and Lumbini Buddhist pilgrimage site",
    "description": "Complete Nepal experience combining natural beauty, wildlife, and spirituality. Explore Pokhara's lakes and mountains, experience Chitwan National Park jungle safari, and visit Lumbini - birthplace of Lord Buddha. Perfect comprehensive Nepal tour for first-time visitors.",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    "tags": ["Pokhara Tour", "Chitwan Safari", "Lumbini Pilgrimage", "Nepal Classic Tour", "Wildlife and Culture"],
    "highlights": ["Pokhara Lakeside", "Chitwan Elephant Safari", "Lumbini Maya Devi Temple", "Himalayan Views", "Jungle Activities"],
    "includes": ["All Accommodation", "Meals", "Guide", "Transport", "Activity Fees"],
    "excludes": ["International Flights", "Personal Expenses", "Travel Insurance"],
    "itinerary": [
      { "day": 1, "title": "Kathmandu to Pokhara", "description": "Scenic drive or flight to Pokhara, hotel check-in, lakeside exploration" },
      { "day": 2, "title": "Pokhara Sightseeing", "description": "Sarangkot sunrise, Peace Pagoda, Devi's Fall, Gupteshwor Cave, boating" },
      { "day": 3, "title": "Pokhara to Chitwan", "description": "Travel to Chitwan National Park, jungle lodge check-in, Tharu cultural show" },
      { "day": 4, "title": "Chitwan Safari Day", "description": "Elephant safari, jungle walk, canoe ride, bird watching, elephant bathing" },
      { "day": 5, "title": "Chitwan to Lumbini", "description": "Morning safari activities, travel to Lumbini, hotel check-in" },
      { "day": 6, "title": "Lumbini Exploration", "description": "Maya Devi Temple, monastic zones, peace stupa, Buddhist monasteries" },
      { "day": 7, "title": "Lumbini to Kathmandu", "description": "Morning Lumbini visits, travel back to Kathmandu" },
      { "day": 8, "title": "Departure", "description": "Last-minute shopping, airport transfer" }
    ],
    "maxGroupSize": 12,
    "included": ["7 nights accommodation", "All meals", "Professional guide", "Private transportation", "Chitwan safari activities", "All entry fees"],
    "excluded": ["International flights", "Nepal visa", "Personal expenses", "Travel insurance"],
    "cancellationPolicy": "Free cancellation up to 15 days before departure. 50% refund 7-15 days prior.",
    "isPopular": true,
    "isSoldOut": false,
    "difficulty": "easy",
    "maxAltitude": "1,400m",
    "requirements": ["Comfortable walking shoes", "Light clothing"],
    "permits": ["Chitwan National Park permit"],
    "equipment": ["Binoculars", "Camera", "Sun protection"],
    "entryRequirements": ["Valid passport", "Nepal visa"]
  },

  {
  "id": "6",
  "title": "Kathmandu Pokhara Chitwan Tour - 9 Days Nepal Golden Triangle Tour",
  "location": "Kathmandu, Pokhara, Chitwan, Nepal",
  "duration": "9 days / 8 nights",
  "rating": 4.8,
  "reviewCount": 312,
  "price": 1100,
  "originalPrice": 1250,
  "excerpt": "9-day Nepal Golden Triangle tour covering Kathmandu cultural sites, Pokhara lakes, and Chitwan National Park wildlife safari",
  "description": "Experience Nepal's Golden Triangle on this comprehensive 9-day tour. Discover Kathmandu's UNESCO World Heritage Sites, enjoy Pokhara's stunning lakes and mountain views, and experience thrilling wildlife safari in Chitwan National Park. Perfect introduction to Nepal's diverse attractions.",
  "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
  "images": [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
  ],
  "tags": ["Kathmandu Pokhara Chitwan", "Nepal Golden Triangle", "Classic Nepal Tour", "Cultural and Wildlife", "UNESCO Heritage Tour"],
  "highlights": ["Kathmandu Durbar Square", "Pokhara Phewa Lake", "Chitwan Elephant Safari", "Swayambhunath Stupa", "Sarangkot Sunrise"],
  "includes": ["All Accommodation", "All Meals", "Expert Guide", "Private Transport", "All Entry Fees"],
  "excludes": ["International Flights", "Nepal Visa", "Travel Insurance", "Personal Expenses"],
  "itinerary": [
    { "day": 1, "title": "Arrival in Kathmandu", "description": "Airport pickup, hotel check-in, welcome dinner, tour briefing" },
    { "day": 2, "title": "Kathmandu Heritage Tour", "description": "Visit Swayambhunath, Pashupatinath Temple, Boudhanath Stupa, Patan Durbar Square" },
    { "day": 3, "title": "Kathmandu to Pokhara", "description": "Scenic drive or flight to Pokhara, lakeside hotel check-in, evening walk" },
    { "day": 4, "title": "Pokhara Sightseeing", "description": "Sarangkot sunrise, Peace Pagoda, Devi's Fall, Gupteshwor Cave, boating" },
    { "day": 5, "title": "Pokhara Free Day", "description": "Optional activities: paragliding, zip-line, hiking, or relax by lakeside" },
    { "day": 6, "title": "Pokhara to Chitwan", "description": "Travel to Chitwan National Park, jungle lodge check-in, Tharu cultural show" },
    { "day": 7, "title": "Chitwan Safari Day", "description": "Elephant safari, jungle walk, canoe ride, bird watching, elephant bathing" },
    { "day": 8, "title": "Chitwan to Kathmandu", "description": "Morning safari activities, travel back to Kathmandu, farewell dinner" },
    { "day": 9, "title": "Departure", "description": "Last-minute shopping, airport transfer" }
  ],
  "maxGroupSize": 14,
  "included": ["8 nights accommodation", "All meals (8 breakfasts, 8 lunches, 8 dinners)", "Professional tour guide", "Private transportation", "All entry fees and permits", "Chitwan safari activities"],
  "excluded": ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Optional activities"],
  "cancellationPolicy": "Free cancellation up to 15 days before departure. 50% refund between 7-15 days. No refund within 7 days.",
  "isPopular": true,
  "isSoldOut": false,
  "difficulty": "easy",
  "maxAltitude": "1,400m",
  "requirements": ["Comfortable walking shoes", "Light clothing for Chitwan"],
  "permits": ["Heritage site permits", "Chitwan National Park permit"],
  "equipment": ["Camera", "Binoculars", "Sun protection"],
  "entryRequirements": ["Valid passport", "Nepal visa"]
}
]

export default function HomePage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add the hero image path here for package tours
  const heroImage = "/images/numbered-cards-package.jpg"; // Change this to your desired image path

  // Load package sightseeing tours
  useEffect(() => {
    const loadTours = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setTours(PACKAGE_SIGHTSEEING_TOURS);
      } catch (err) {
        console.error("Error loading package tours:", err);
        setTours(PACKAGE_SIGHTSEEING_TOURS); // Still use mock data on error
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
          <p className="mt-4 text-muted-foreground">Loading package tours...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Updated Hero section with image for package tours */}
      <Hero 
        title="Nepal Package Sightseeing Tours"
        description="Discover the diverse beauty of Nepal with our carefully curated package tours. From cultural heritage sites and spiritual journeys to family adventures and photography expeditions, we offer comprehensive experiences that showcase the best of Nepal's treasures."
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