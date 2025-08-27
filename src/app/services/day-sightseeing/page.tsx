"use client"

import { useState } from "react";
import Hero from "@/components/services/Hero";
import ToursGrid from "@/components/services/TourGrid";
import TourDetailModal from "@/components/services/TourDetailModal";
import Notifications from "@/components/services/Notifications";
import { Tour } from "@/types/tour";

// Cultural tours data
const MOCK_TOURS: Tour[] = [
  {
    id: "1",
    title: "Free Walking Tour Kathmandu",
    location: "Kathmandu, Nepal",
    duration: "3-4 hours",
    rating: 4.9,
    reviewCount: 507,
    price: 0,
    excerpt: "Explore hidden corners of Kathmandu with local guides",
    description: "Discover the authentic side of Kathmandu beyond the tourist trails. Our free walking tour takes you through ancient alleys, local markets, and hidden temples that most visitors never see. Learn about the city's history, culture, and daily life from knowledgeable local guides.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Free Tour", "Cultural", "Walking"],
    highlights: ["Local markets", "Hidden temples", "Ancient alleys"],
    includes: ["Professional guide"],
    excludes: ["Transportation", "Entry fees", "Meals"],
    itinerary: [
      { day: 1, title: "Kathmandu Walking Tour", description: "Meet at designated point, explore local markets, visit hidden temples, learn about local culture and history" }
    ],
    maxGroupSize: 15,
    included: ["Knowledgeable local guide"],
    excluded: ["Transportation", "Temple entry fees", "Meals and drinks", "Personal expenses"],
    cancellationPolicy: "Free cancellation up to 2 hours before departure.",
    isPopular: true
  },
  {
    id: "2",
    title: "Kapan Gumba, Bouddhanath and Pashupatinath Tour", 
    location: "Kathmandu, Nepal",
    duration: "5-6 hours",
    rating: 4.8,
    reviewCount: 234,
    price: 35,
    excerpt: "Spiritual journey through Nepal's most sacred sites",
    description: "Experience the spiritual heart of Nepal on this tour of three significant religious sites. Visit the peaceful Kapan Monastery where monks study and meditate, then explore the magnificent Bouddhanath Stupa - one of the largest spherical stupas in Nepal. Finally, witness the ancient rituals at Pashupatinath Temple, one of the most sacred Hindu temples dedicated to Lord Shiva.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Spiritual", "Cultural", "Half Day"],
    highlights: ["Kapan Monastery", "Bouddhanath Stupa", "Pashupatinath Temple"],
    includes: ["Professional guide", "Transportation", "Entry fees"],
    excludes: ["Meals", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Spiritual Tour", description: "Hotel pickup, visit Kapan Monastery, explore Bouddhanath Stupa, witness rituals at Pashupatinath, return to hotel" }
    ],
    maxGroupSize: 8,
    included: ["Expert local guide", "Private transportation", "All entry fees", "Bottled water"],
    excluded: ["Meals", "Personal expenses", "Gratuities", "Travel insurance"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours."
  },
  {
    id: "3",
    title: "Patan Durbar Square, Pashupatinath, Boudhanath Day Tour",
    location: "Kathmandu Valley, Nepal",
    duration: "7-8 hours",
    rating: 4.9,
    reviewCount: 189,
    price: 55,
    excerpt: "UNESCO World Heritage sites exploration",
    description: "Discover three UNESCO World Heritage Sites in a single day. Begin at Patan Durbar Square, renowned for its exquisite Newari architecture and ancient palaces. Then visit the sacred Pashupatinath Temple complex where Hindu cremation ceremonies take place along the Bagmati River. End your day at the magnificent Boudhanath Stupa, the center of Tibetan Buddhism in Nepal.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["UNESCO", "Cultural", "Full Day"],
    highlights: ["Patan Durbar Square", "Pashupatinath Temple", "Boudhanath Stupa"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "UNESCO Heritage Tour", description: "Hotel pickup, explore Patan Durbar Square, visit Pashupatinath Temple, lunch break, tour Boudhanath Stupa, return to hotel" }
    ],
    maxGroupSize: 6,
    included: ["Knowledgeable guide", "Private vehicle", "All entry fees", "Traditional lunch", "Bottled water"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true
  },
  {
    id: "4",
    title: "Patan Durbar Square, Bungamati, Khokana Day Tour",
    location: "Lalitpur, Nepal",
    duration: "6-7 hours",
    rating: 4.7,
    reviewCount: 127,
    price: 45,
    excerpt: "Traditional Newari culture and craftsmanship",
    description: "Immerse yourself in traditional Newari culture on this tour of Patan and its surrounding villages. Explore the architectural marvels of Patan Durbar Square, then travel to the medieval village of Bungamati, known for wood carving and as the birthplace of the deity Rato Machindranath. Continue to Khokana, a traditional village famous for its mustard oil production and unique urban planning.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Cultural", "Village Tour", "Full Day"],
    highlights: ["Patan Durbar Square", "Bungamati Village", "Khokana Village"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Newari Culture Tour", description: "Hotel pickup, explore Patan Durbar Square, visit Bungamati village, experience Khokana village, traditional lunch, return to hotel" }
    ],
    maxGroupSize: 8,
    included: ["Local guide", "Private transportation", "Entry fees", "Traditional lunch", "Bottled water"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours."
  },
  {
    id: "5",
    title: "Kathmandu Durbar Square, Swayambhunath, Bouddhanath and Pashupatinath",
    location: "Kathmandu, Nepal",
    duration: "8-9 hours",
    rating: 4.9,
    reviewCount: 276,
    price: 65,
    excerpt: "Complete Kathmandu heritage experience",
    description: "Experience the best of Kathmandu's cultural and spiritual heritage in one comprehensive tour. Begin at Kathmandu Durbar Square with its ancient palaces and temples. Then climb to the monkey temple of Swayambhunath for panoramic city views. Continue to the massive Bouddhanath Stupa, and conclude at the sacred Pashupatinath Temple complex on the banks of the Bagmati River.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Comprehensive", "Cultural", "Full Day"],
    highlights: ["Kathmandu Durbar Square", "Swayambhunath", "Bouddhanath", "Pashupatinath"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Complete Kathmandu Tour", description: "Hotel pickup, explore Kathmandu Durbar Square, visit Swayambhunath, lunch break, tour Bouddhanath, experience Pashupatinath, return to hotel" }
    ],
    maxGroupSize: 6,
    included: ["Expert guide", "Private vehicle", "All entry fees", "Lunch", "Bottled water"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours.",
    isPopular: true
  },
  {
    id: "6",
    title: "Bhaktapur Durbar Square and Patan Durbar Square",
    location: "Kathmandu Valley, Nepal",
    duration: "7-8 hours",
    rating: 4.8,
    reviewCount: 198,
    price: 60,
    excerpt: "Medieval city architecture and craftsmanship",
    description: "Explore two of the three royal cities of the Kathmandu Valley. Begin at Bhaktapur Durbar Square, a well-preserved medieval city known for its pottery, weaving, and stunning architecture. Then travel to Patan Durbar Square, famous for its exquisite Newari craftsmanship, ancient temples, and the Patan Museum with its exceptional collection of religious art.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop"
    ],
    tags: ["Architecture", "Cultural", "Full Day"],
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Newari Craftsmanship"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Medieval Cities Tour", description: "Hotel pickup, explore Bhaktapur Durbar Square, traditional lunch, visit Patan Durbar Square, return to hotel" }
    ],
    maxGroupSize: 6,
    included: ["Knowledgeable guide", "Private transportation", "All entry fees", "Traditional lunch", "Bottled water"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours."
  },
  {
    id: "7",
    title: "Dakshinkali, Pharping and Kirtipur",
    location: "Kathmandu Valley, Nepal",
    duration: "6-7 hours",
    rating: 4.6,
    reviewCount: 143,
    price: 50,
    excerpt: "Off-the-beaten-path cultural and spiritual experience",
    description: "Venture beyond the typical tourist trail to explore three unique sites around the Kathmandu Valley. Visit Dakshinkali Temple, one of Nepal's most important Hindu temples dedicated to the goddess Kali. Then explore Pharping with its sacred caves and monasteries important to Tibetan Buddhism. Finally, discover the medieval town of Kirtipur with its traditional atmosphere and panoramic views of the valley.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    tags: ["Offbeat", "Spiritual", "Full Day"],
    highlights: ["Dakshinkali Temple", "Pharping Caves", "Medieval Kirtipur"],
    includes: ["Professional guide", "Transportation", "Entry fees", "Lunch"],
    excludes: ["Personal expenses", "Tips", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Offbeat Valley Tour", description: "Hotel pickup, visit Dakshinkali Temple, explore Pharping caves and monasteries, discover Kirtipur town, lunch break, return to hotel" }
    ],
    maxGroupSize: 8,
    included: ["Local guide", "Private vehicle", "Entry fees", "Lunch", "Bottled water"],
    excluded: ["Personal expenses", "Gratuities", "Travel insurance", "Additional meals"],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. No refund within 24 hours."
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
        title="Kathmandu Cultural Tours"
        description="Discover the rich heritage of the Kathmandu Valley with our curated cultural tours. Explore ancient temples, medieval palaces, and vibrant local traditions with expert guides."
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
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Cultural Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Local Expert Guides</h3>
              <p className="text-muted-foreground">
                Our knowledgeable Nepali guides provide deep insights into culture, history, and traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Small Groups</h3>
              <p className="text-muted-foreground">
                Enjoy personalized attention with small group sizes for a more intimate experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold">All Inclusive</h3>
              <p className="text-muted-foreground">
                We handle transportation, entry fees, and meals so you can focus on the experience.
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