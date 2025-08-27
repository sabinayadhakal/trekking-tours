"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Package sightseeing tours data
const MOCK_TOURS: Tour[] = [
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
    isPopular: true
  },
  {
    id: "2",
    title: "Kathmandu and Pokhara Tour", 
    location: "Kathmandu & Pokhara, Nepal",
    duration: "7 days / 6 nights",
    rating: 4.9,
    reviewCount: 487,
    price: 890,
    excerpt: "Perfect combination of cultural heritage and natural beauty",
    description: "Experience the best of Nepal with this classic tour combining the cultural riches of Kathmandu Valley with the stunning natural beauty of Pokhara. Explore ancient temples, palaces, and bustling markets in Kathmandu, then travel to picturesque Pokhara for breathtaking views of the Annapurna range, serene lakes, and adventure activities. This tour offers the perfect balance of culture, nature, and relaxation.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Cultural", "Scenic", "Most Popular"],
    highlights: ["Kathmandu Durbar Square", "Pokhara Lakeside", "Sarangkot sunrise", "Davis Falls"],
    includes: ["Accommodation", "All meals", "Guide", "Transportation", "Domestic flight"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport reception, hotel transfer, orientation meeting" },
      { day: 2, title: "Kathmandu Heritage", description: "Explore Kathmandu Durbar Square, Swayambhunath, and Patan Durbar Square" },
      { day: 3, title: "Sacred Sites", description: "Visit Pashupatinath, Boudhanath, and Bhaktapur Durbar Square" },
      { day: 4, title: "To Pokhara", description: "Scenic drive or flight to Pokhara, afternoon boating on Fewa Lake" },
      { day: 5, title: "Pokhara Exploration", description: "Sarangkot sunrise views, Davis Falls, Gupteshwor Cave, Tibetan refugee camp" },
      { day: 6, title: "Return to Kathmandu", description: "Morning free in Pokhara, return to Kathmandu, farewell dinner" },
      { day: 7, title: "Departure", description: "Last-minute shopping, airport transfer for departure" }
    ],
    maxGroupSize: 10,
    included: ["6 nights accommodation in 3-star hotels", "All meals (6 breakfasts, 6 lunches, 6 dinners)", "Expert guide throughout", "Private transportation", "Domestic flight (Pokhara-Kathmandu)", "All entry fees", "Boating in Fewa Lake"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 20 days before departure. 50% refund between 10-20 days. No refund within 10 days.",
    isPopular: true
  },
  {
    id: "3",
    title: "Kathmandu Valley Tour",
    location: "Kathmandu Valley, Nepal",
    duration: "4 days / 3 nights",
    rating: 4.7,
    reviewCount: 289,
    price: 420,
    excerpt: "Compact exploration of the Kathmandu Valley's UNESCO World Heritage Sites",
    description: "Perfect for travelers with limited time, this comprehensive tour covers the essential cultural and historical sites of the Kathmandu Valley. Visit all seven UNESCO World Heritage Sites, including ancient royal palaces, sacred temples, and magnificent stupas. Experience the vibrant culture, architecture, and traditions that make the Kathmandu Valley a living museum of medieval Nepal.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["UNESCO", "Cultural", "Short Tour"],
    highlights: ["All 7 UNESCO sites", "Traditional Newari lunch", "Cultural表演", "Local market visit"],
    includes: ["Accommodation", "All meals", "Expert guide", "Transportation", "Entry fees"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival and Kathmandu Sites", description: "Airport pickup, hotel check-in, visit Swayambhunath and Kathmandu Durbar Square" },
      { day: 2, title: "Patan and Sacred Sites", description: "Explore Patan Durbar Square, Pashupatinath Temple, and Boudhanath Stupa" },
      { day: 3, title: "Bhaktapur and Changunarayan", description: "Discover Bhaktapur Durbar Square and Changunarayan Temple" },
      { day: 4, title: "Departure", description: "Morning free for last-minute shopping, airport transfer" }
    ],
    maxGroupSize: 8,
    included: ["3 nights accommodation in 3-star hotels", "All meals (3 breakfasts, 3 lunches, 3 dinners)", "Expert cultural guide", "Private transportation", "All UNESCO site entry fees", "Traditional Newari lunch"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 10 days before departure. 50% refund between 5-10 days. No refund within 5 days.",
    isPopular: true
  },
  {
    id: "4",
    title: "Nepal Heritage Sites Tour",
    location: "Kathmandu, Pokhara, Lumbini, Chitwan",
    duration: "9 days / 8 nights",
    rating: 4.9,
    reviewCount: 198,
    price: 1250,
    excerpt: "Comprehensive journey through Nepal's cultural and natural heritage",
    description: "Embark on an extensive tour covering Nepal's most significant cultural, historical, and natural heritage sites. From the ancient temples of Kathmandu Valley to the birthplace of Buddha in Lumbini, from wildlife adventures in Chitwan to the stunning landscapes of Pokhara, this tour offers a complete Nepal experience. Perfect for those who want to see the diverse aspects of Nepal in one comprehensive journey.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Comprehensive", "Heritage", "Multi-Destination"],
    highlights: ["Lumbini - Buddha's birthplace", "Chitwan wildlife safari", "Pokhara lakes", "Kathmandu heritage"],
    includes: ["Accommodation", "All meals", "Expert guide", "Transportation", "Domestic flights", "Safari activities"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport reception, hotel transfer, welcome dinner" },
      { day: 2, title: "Kathmandu Heritage", description: "Explore Kathmandu's UNESCO World Heritage Sites" },
      { day: 3, title: "To Chitwan", description: "Drive to Chitwan National Park, afternoon jungle activities" },
      { day: 4, title: "Chitwan Safari", description: "Full day of wildlife activities including elephant safari, jungle walk, canoe ride" },
      { day: 5, title: "To Lumbini", description: "Drive to Lumbini, visit Maya Devi Temple and monastic zone" },
      { day: 6, title: "To Pokhara", description: "Drive to Pokhara, afternoon boating on Fewa Lake" },
      { day: 7, title: "Pokhara Exploration", description: "Sarangkot sunrise, Davis Falls, Gupteshwor Cave, Tibetan camp" },
      { day: 8, title: "Return to Kathmandu", description: "Fly back to Kathmandu, free afternoon, farewell dinner" },
      { day: 9, title: "Departure", description: "Last-minute shopping, airport transfer for departure" }
    ],
    maxGroupSize: 8,
    included: ["8 nights accommodation in 3-star hotels", "All meals (8 breakfasts, 8 lunches, 8 dinners)", "Expert guide throughout", "Private transportation", "Domestic flight (Pokhara-Kathmandu)", "All entry fees and activities", "Chitwan safari package"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 30 days before departure. 50% refund between 15-30 days. No refund within 15 days.",
    isPopular: true
  },
  {
    id: "5",
    title: "City and Countryside Family Tour",
    location: "Kathmandu, Nagarkot, Dhulikhel",
    duration: "10 days / 9 nights",
    rating: 4.8,
    reviewCount: 156,
    price: 1450,
    excerpt: "Family-friendly exploration of urban and rural Nepal",
    description: "Specially designed for families with children, this tour offers a perfect blend of city excitement and countryside tranquility. Experience the vibrant culture of Kathmandu, enjoy mountain views from Nagarkot and Dhulikhel, and participate in child-friendly activities like pottery making, paper crafting, and gentle nature walks. Educational, fun, and comfortable for all ages.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Family", "Educational", "Multi-Generation"],
    highlights: ["Child-friendly activities", "Mountain views", "Cultural experiences", "Comfortable pace"],
    includes: ["Family accommodation", "All meals", "Child-friendly guide", "Transportation", "Activities"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport reception, family-friendly hotel check-in, orientation" },
      { day: 2, title: "Kathmandu for Kids", description: "Visit Swayambhunath, explore Patan Durbar Square with treasure hunt" },
      { day: 3, title: "Cultural Activities", description: "Pottery making in Thimi, paper factory visit, traditional mask painting" },
      { day: 4, title: "To Nagarkot", description: "Drive to Nagarkot, gentle nature walk, sunset views" },
      { day: 5, title: "Countryside Experience", description: "Visit local farm, participate in farming activities, traditional cooking lesson" },
      { day: 6, title: "To Dhulikhel", description: "Scenic drive to Dhulikhel, cultural walk through Newari villages" },
      { day: 7, title: "Mountain Views", description: "Sunrise viewing, easy hiking, visit ancient temples" },
      { day: 8, title: "Bhaktapur Exploration", description: "Discover Bhaktapur Durbar Square, traditional crafts demonstration" },
      { day: 9, title: "Return to Kathmandu", description: "Return to Kathmandu, farewell dinner with cultural show" },
      { day: 10, title: "Departure", description: "Last-minute souvenir shopping, airport transfer" }
    ],
    maxGroupSize: 6,
    included: ["9 nights family-friendly accommodation", "All meals (9 breakfasts, 9 lunches, 9 dinners)", "Child-friendly expert guide", "Private transportation", "All activities and entry fees", "Cultural performances"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 30 days before departure. 50% refund between 15-30 days. No refund within 15 days."
  },
  {
    id: "6",
    title: "Historic, Scenic, Wildlife Family Tour",
    location: "Kathmandu, Pokhara, Chitwan",
    duration: "9 days / 8 nights",
    rating: 4.9,
    reviewCount: 203,
    price: 1350,
    excerpt: "Diverse experiences perfect for family adventure and education",
    description: "This specially curated family tour combines history, nature, and wildlife in one unforgettable journey. Explore ancient temples and palaces in Kathmandu, enjoy the stunning landscapes of Pokhara, and experience thrilling wildlife adventures in Chitwan National Park. With activities suitable for all ages and interests, this tour offers something for every family member.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Family", "Adventure", "Wildlife"],
    highlights: ["Chitwan elephant safari", "Pokhara boating", "Kathmandu heritage", "Child-friendly activities"],
    includes: ["Family accommodation", "All meals", "Expert guide", "Transportation", "Safari activities"],
    excludes: ["International flights", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport reception, family-friendly hotel check-in, orientation" },
      { day: 2, title: "Kathmandu Heritage", description: "Explore Kathmandu Durbar Square, Swayambhunath, and participate in cultural activities" },
      { day: 3, title: "Sacred Sites", description: "Visit Pashupatinath, Boudhanath, and Patan Durbar Square with interactive learning" },
      { day: 4, title: "To Chitwan", description: "Drive to Chitwan National Park, afternoon gentle jungle activities" },
      { day: 5, title: "Chitwan Safari", description: "Elephant safari, canoe ride, nature walk, cultural program" },
      { day: 6, title: "To Pokhara", description: "Drive to Pokhara, afternoon boating on Fewa Lake" },
      { day: 7, title: "Pokhara Family Fun", description: "Sarangkot sunrise, Davis Falls, cave exploration, relaxed pace" },
      { day: 8, title: "Return to Kathmandu", description: "Fly back to Kathmandu, farewell dinner with cultural show" },
      { day: 9, title: "Departure", description: "Last-minute souvenir shopping, airport transfer" }
    ],
    maxGroupSize: 6,
    included: ["8 nights family-friendly accommodation", "All meals (8 breakfasts, 8 lunches, 8 dinners)", "Child-friendly expert guide", "Private transportation", "Domestic flight (Pokhara-Kathmandu)", "All activities and entry fees", "Chitwan safari package"],
    excluded: ["International flights", "Nepal visa fee", "Travel insurance", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 30 days before departure. 50% refund between 15-30 days. No refund within 15 days.",
    isPopular: true
  },
  {
    id: "7",
    title: "Photography Tours",
    location: "Kathmandu, Bhaktapur, Patan, Nagarkot",
    duration: "Customizable (5-10 days)",
    rating: 4.9,
    reviewCount: 178,
    price: 950,
    excerpt: "Designed for photography enthusiasts seeking iconic Nepal shots",
    description: "Specifically designed for photography enthusiasts, this tour takes you to the most photogenic locations in Nepal at the best times for lighting. Accompanied by a photographer guide, you'll capture stunning images of ancient architecture, vibrant cultural scenes, majestic mountain vistas, and daily life. Learn techniques for travel photography while creating an impressive portfolio of Nepal images.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Photography", "Customizable", "Professional"],
    highlights: ["Golden hour photography", "Local life portraits", "Architecture details", "Mountain landscapes"],
    includes: ["Photographer guide", "Accommodation", "Transportation", "Special access permits"],
    excludes: ["Photography equipment", "International flights", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Arrival and Orientation", description: "Airport pickup, hotel check-in, photography briefing, evening street photography" },
      { day: 2, title: "Kathmandu Architecture", description: "Early morning at Swayambhunath, Kathmandu Durbar Square details, portrait opportunities" },
      { day: 3, title: "Cultural Photography", description: "Pashupatinath rituals, Boudhanath pilgrims, local market life" },
      { day: 4, title: "Bhaktapur Focus", description: "Sunrise in Bhaktapur, traditional craftspeople, architectural details" },
      { day: 5, title: "Patan and People", description: "Patan Durbar Square, Golden Temple, portrait sessions with locals" },
      { day: 6, title: "To Nagarkot", description: "Travel to Nagarkot, sunset mountain photography" },
      { day: 7, title: "Mountain Sunrise", description: "Sunrise over Himalayas, countryside life, return to Kathmandu" },
      { day: 8, title: "Special Access", description: "Arranged access to ceremonies or events, portfolio review" },
      { day: 9, title: "Free Day", description: "Optional additional photography locations or free time" },
      { day: 10, title: "Departure", description: "Image backup and final discussion, airport transfer" }
    ],
    maxGroupSize: 4,
    included: ["Photographer guide throughout", "Accommodation in photogenic locations", "Private transportation", "Special access permits where possible", "All entry fees", "Portfolio review session"],
    excluded: ["Photography equipment", "International flights", "Nepal visa fee", "Travel insurance", "Meals", "Personal expenses", "Gratuities"],
    cancellationPolicy: "Free cancellation up to 30 days before departure. 50% refund between 15-30 days. No refund within 15 days."
  }
];

export default function HomePage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleBookNow = (tour: Tour) => {
    console.log("Booking tour:", tour.title);
    // You can add booking logic here or open a booking modal
  };

  return (
    <main className="min-h-screen">
      <Hero 
        title="Nepal Package Sightseeing Tours"
        description="Discover the diverse beauty of Nepal with our carefully curated package tours. From cultural heritage sites and spiritual journeys to family adventures and photography expeditions, we offer comprehensive experiences that showcase the best of Nepal's treasures."
      />
      
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <ToursGrid
            tours={MOCK_TOURS}
            onTourSelect={handleTourSelect}
          />
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