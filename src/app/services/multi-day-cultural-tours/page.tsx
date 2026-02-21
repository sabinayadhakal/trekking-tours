"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark,
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  TrendingUp,
  Filter,
  Search,
  ArrowRight,
  Utensils,
  X,
  Bus,
  Ticket,
  UserCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const regionCategories = [
  "All Regions",
  "Kathmandu Valley",
  "Annapurna Region",
  "Langtang Region",
  "Everest Region",
  "Western Nepal",
  "Eastern Nepal",
];

const durationTypes = [
  "All Durations",
  "3-5 Days",
  "6-8 Days",
  "9-12 Days",
  "2 Weeks+",
];

const culturalTours = [
  {
    id: 1,
    name: "Kathmandu Valley Heritage Explorer",
    region: "Kathmandu Valley",
    duration: "5 Days",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "4-12",
    bestSeason: "Sep-May",
    price: 850,
    originalPrice: 990,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 156,
    highlights: ["7 UNESCO Sites", "Newari Cuisine Workshop", "Pottery Making", "Cultural Dance Evening"],
    description: "Immerse yourself in the living heritage of Kathmandu's ancient cities through hands-on cultural experiences.",
    featured: true,
  },
  {
    id: 2,
    name: "Annapurna Cultural Trek",
    region: "Annapurna Region",
    duration: "8 Days",
    difficulty: "Moderate",
    category: "Trekking & Culture",
    groupSize: "6-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1200,
    originalPrice: 1450,
    image: "https://images.unsplash.com/photo-1593693397816-1c665ec8d5f3?q=80&w=2071&auto=format&fit=crop",
    rating: 4.8,
    reviews: 98,
    highlights: ["Gurung Villages", "Annapurna Views", "Home Stays", "Traditional Dances"],
    description: "Experience the rich Gurung and Magar cultures while trekking through breathtaking Himalayan landscapes.",
    featured: true,
  },
  {
    id: 3,
    name: "Lumbini & Buddha Trail",
    region: "Western Nepal",
    duration: "4 Days",
    difficulty: "Easy",
    category: "Spiritual",
    groupSize: "4-14",
    bestSeason: "Oct-Apr",
    price: 650,
    originalPrice: 780,
    image: "https://images.unsplash.com/photo-1518991668576-85d87e6d6c6d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 87,
    highlights: ["Maya Devi Temple", "Monastic Meditation", "Sacred Garden", "Peace Pagoda"],
    description: "Follow the footsteps of Buddha through sacred sites and ancient monastic zones.",
    featured: false,
  },
  {
    id: 4,
    name: "Everest Monastery Trek",
    region: "Everest Region",
    duration: "10 Days",
    difficulty: "Challenging",
    category: "Spiritual & Trekking",
    groupSize: "6-8",
    bestSeason: "Mar-May, Oct-Nov",
    price: 1850,
    originalPrice: 2100,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 64,
    highlights: ["Tengboche Monastery", "Sherpa Villages", "Mountain Views", "Buddhist Ceremonies"],
    description: "Discover Sherpa Buddhist culture while trekking to the world's highest monasteries.",
    featured: true,
  },
  {
    id: 5,
    name: "Bandipur & Gorkha Heritage",
    region: "Western Nepal",
    duration: "3 Days",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "4-12",
    bestSeason: "Sep-May",
    price: 450,
    originalPrice: 550,
    image: "https://images.unsplash.com/photo-1536152471326-642d746f4d5a?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 112,
    highlights: ["Newari Architecture", "Gorkha Palace", "Traditional Crafts", "Mountain Views"],
    description: "Step back in time in perfectly preserved hill towns with rich Newari and Gorkhali heritage.",
    featured: false,
  },
  {
    id: 6,
    name: "Langtang Valley Cultural Trek",
    region: "Langtang Region",
    duration: "7 Days",
    difficulty: "Moderate",
    category: "Trekking & Culture",
    groupSize: "5-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 950,
    originalPrice: 1150,
    image: "https://images.unsplash.com/photo-1549887552-23ad7caa7e14?q=80&w=2071&auto=format&fit=crop",
    rating: 4.8,
    reviews: 76,
    highlights: ["Tamang Heritage", "Buddhist Monasteries", "Hot Springs", "Local Home Stays"],
    description: "Experience the unique Tamang culture and hospitality in the beautiful Langtang Valley.",
    featured: true,
  },
  {
    id: 7,
    name: "Janakpur & Mithila Art Tour",
    region: "Eastern Nepal",
    duration: "4 Days",
    difficulty: "Easy",
    category: "Art & Culture",
    groupSize: "4-10",
    bestSeason: "Oct-Mar",
    price: 550,
    originalPrice: 680,
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 43,
    highlights: ["Mithila Painting", "Janaki Temple", "Local Artisans", "Folk Music"],
    description: "Learn the ancient art of Mithila painting from master artists in its birthplace.",
    featured: false,
  },
  {
    id: 8,
    name: "Tansen & Ridi Cultural Journey",
    region: "Western Nepal",
    duration: "3 Days",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "4-12",
    bestSeason: "Sep-May",
    price: 400,
    originalPrice: 520,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
    rating: 4.7,
    reviews: 58,
    highlights: ["Palpa Durbar", "Metal Crafts", "Sacred Ridi", "Magar Culture"],
    description: "Explore the rich history and craftsmanship of this ancient Magar kingdom.",
    featured: true,
  },
  {
    id: 9,
    name: "Mustang & Lo Manthang Expedition",
    region: "Western Nepal",
    duration: "12 Days",
    difficulty: "Moderate",
    category: "Cultural Expedition",
    groupSize: "6-8",
    bestSeason: "May-Oct",
    price: 2800,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1593693397816-1c665ec8d5f3?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 35,
    highlights: ["Ancient Monasteries", "Tibetan Culture", "Cave Dwellings", "Forbidden Kingdom"],
    description: "Journey to the legendary walled city of Lo Manthang in the trans-Himalayan kingdom of Mustang.",
    featured: true,
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Heritage": return "bg-purple-100 text-purple-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    case "Trekking & Culture": return "bg-green-100 text-green-700";
    case "Art & Culture": return "bg-pink-100 text-pink-700";
    case "Cultural Expedition": return "bg-amber-100 text-amber-700";
    case "Spiritual & Trekking": return "bg-blue-100 text-blue-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function MultiDayCulturalToursPage() {
  const [selectedRegion, setSelectedRegion] = React.useState("All Regions");
  const [selectedDuration, setSelectedDuration] = React.useState("All Durations");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const filteredTours = culturalTours.filter((tour) => {
    const matchesRegion = selectedRegion === "All Regions" || tour.region === selectedRegion;
    const matchesDuration = selectedDuration === "All Durations" || tour.duration.includes(selectedDuration.replace("All Durations", ""));
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesDuration && matchesSearch;
  });

  const featuredTour = culturalTours.find((tour) => tour.id === 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Filter Drawer */}
      {showFilterDrawer && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilterDrawer(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl">
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940]">Filter Tours</h3>
                <button 
                  onClick={() => setShowFilterDrawer(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Duration Filter */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">Duration</h4>
                  <div className="flex flex-wrap gap-2">
                    {durationTypes.map((duration) => (
                      <button
                        key={duration}
                        onClick={() => {
                          setSelectedDuration(duration);
                          setShowFilterDrawer(false);
                        }}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedDuration === duration
                            ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white"
                            : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                        }`}
                      >
                        {duration}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region Filter */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">Region</h4>
                  <div className="space-y-2">
                    {regionCategories.map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setShowFilterDrawer(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                          selectedRegion === region
                            ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                            : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-gradient-to-br from-[#0f2940] to-[#1a4166] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#C5E0ED] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#7fb8d4] rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-[#C5E0ED]/20 text-white backdrop-blur-md border-[#C5E0ED]/40 py-1.5 md:py-2 px-4 md:px-5 text-xs md:text-sm">
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Deep Immersion in Nepalese Traditions
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Multi-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Cultural Tours</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From remote mountain monasteries and ancient trading villages to living heritage cities and spiritual sites, 
              embark on an immersive journey through Nepal's diverse cultural landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 20+ Ethnic Groups
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 3-12 Days
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <UserCircle className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Cultural Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="lg:sticky lg:top-0 z-30 py-4 bg-white border-b border-[#C5E0ED]/30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search cultural tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 md:h-12 pl-10 md:pl-12 pr-4 rounded-full border border-[#C5E0ED]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5E0ED]/50 focus:border-[#C5E0ED] text-base md:text-sm"
              />
            </div>

            {/* Mobile Filter Button */}
            <Button
              variant="outline"
              className="lg:hidden border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-full px-4"
              onClick={() => setShowFilterDrawer(true)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-wrap justify-center gap-2">
                {regionCategories.slice(0, 4).map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                      selectedRegion === region
                        ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white shadow-sm"
                        : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="h-9 md:h-10 px-3 md:px-4 rounded-full border border-[#C5E0ED]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5E0ED]/50 text-xs md:text-sm cursor-pointer"
                >
                  {durationTypes.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Active Filters */}
          <div className="lg:hidden mt-3 flex flex-wrap gap-2">
            <Badge className="bg-[#C5E0ED]/20 text-[#2d6a8a] border-none text-xs">
              {selectedRegion}
            </Badge>
            <Badge className="bg-[#C5E0ED]/20 text-[#2d6a8a] border-none text-xs">
              {selectedDuration}
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Tour */}
      {featuredTour && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={featuredTour.image}
                    alt={featuredTour.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1 text-xs md:text-sm">
                      Most Popular
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredTour.rating} ({featuredTour.reviews})
                  </div>
                </div>
                <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredTour.region}
                  </Badge>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                    {featuredTour.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {featuredTour.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.duration}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.category}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.groupSize} People
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.bestSeason}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {featuredTour.highlights.map((h, idx) => (
                      <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                    <div>
                      <span className="text-slate-400 text-sm line-through">${featuredTour.originalPrice}</span>
                      <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredTour.price}</span>
                      <span className="text-slate-500 text-sm">/person</span>
                    </div>
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Tours Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Tours</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Multi-Day Cultural Experiences</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{filteredTours.length}</span> tours
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredTours.map((tour, i) => (
              <Card 
                key={tour.id} 
                className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-40 md:h-52 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`border-none text-xs font-medium ${getCategoryColor(tour.category)}`}>
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {tour.rating}
                  </div>
                  {tour.featured && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                    {tour.region}
                  </Badge>
                  <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                    {tour.name}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {tour.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {tour.groupSize}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 text-xs line-through">${tour.originalPrice}</span>
                      <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${tour.price}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm">
                      Details <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <Landmark className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED] mx-auto mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1 md:mb-2">No tours found</h4>
              <p className="text-slate-600 text-sm md:text-base">Try adjusting your filters to see more results.</p>
              <Button
                variant="outline"
                className="mt-4 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-full"
                onClick={() => {
                  setSelectedRegion("All Regions");
                  setSelectedDuration("All Durations");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          <div className="text-center mt-8 md:mt-12">
            <Button variant="outline" className="border-[#0f2940] text-[#0f2940] hover:bg-[#0f2940] hover:text-white font-bold rounded-full px-6 md:px-10 py-4 md:py-6 text-sm md:text-base">
              View All Experiences
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Choose Our Tours</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Authentic Cultural Immersion with Local Experts
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our multi-day cultural tours are designed by ethnographers and local community leaders who provide deep insights into Nepal's diverse ethnic traditions, festivals, and ways of life.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Expert Cultural Guides with Anthropology Backgrounds",
                  "Authentic Home Stays & Community-Based Tourism",
                  "Hands-On Workshops with Local Artisans",
                  "Small Groups for Meaningful Cultural Exchange",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#0f2940]" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                  Customize Your Journey
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop"
                alt="Traditional Nepalese Culture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}