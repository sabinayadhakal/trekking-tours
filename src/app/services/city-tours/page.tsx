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

const cityCategories = [
  "All Cities",
  "Kathmandu",
  "Pokhara",
  "Bhaktapur",
  "Lalitpur",
  "Chitwan",
  "Lumbini",
];

const durationTypes = [
  "All Durations",
  "Half Day",
  "Full Day",
  "2-3 Days",
  "Multi-Day",
];

const cityTours = [
  {
    id: 1,
    name: "Kathmandu Heritage Tour",
    city: "Kathmandu",
    duration: "8 Hours",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-12",
    bestSeason: "Year Round",
    price: 85,
    originalPrice: 110,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 234,
    highlights: ["Swayambhunath", "Patan Durbar", "Boudhanath", "Pashupatinath"],
    description: "Explore UNESCO World Heritage sites and ancient temples in the cultural heart of Nepal.",
    featured: true,
  },
  {
    id: 2,
    name: "Pokhara Valley Experience",
    city: "Pokhara",
    duration: "Full Day",
    difficulty: "Easy",
    category: "Scenic",
    groupSize: "2-10",
    bestSeason: "Sep-May",
    price: 75,
    originalPrice: 95,
    image: "https://images.unsplash.com/photo-1593693397816-1c665ec8d5f3?q=80&w=2071&auto=format&fit=crop",
    rating: 4.8,
    reviews: 189,
    highlights: ["Phewa Lake", "World Peace Pagoda", "Devi's Fall", "Sarangkot"],
    description: "Discover the natural beauty of Pokhara with stunning lake and mountain views.",
    featured: true,
  },
  {
    id: 3,
    name: "Bhaktapur Ancient City Walk",
    city: "Bhaktapur",
    duration: "6 Hours",
    difficulty: "Easy",
    category: "Historical",
    groupSize: "2-8",
    bestSeason: "Year Round",
    price: 65,
    originalPrice: 85,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    highlights: ["Durbar Square", "Pottery Square", "Nyatapola Temple", "Local Cuisine"],
    description: "Step back in time through medieval streets and traditional Newari architecture.",
    featured: false,
  },
  {
    id: 4,
    name: "Chitwan Jungle Safari",
    city: "Chitwan",
    duration: "3 Days",
    difficulty: "Moderate",
    category: "Wildlife",
    groupSize: "2-12",
    bestSeason: "Oct-Mar",
    price: 320,
    originalPrice: 380,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 98,
    highlights: ["Elephant Safari", "Canoe Ride", "Bird Watching", "Tharu Culture"],
    description: "Experience wildlife adventures in Nepal's premier national park.",
    featured: true,
  },
  {
    id: 5,
    name: "Lumbini Pilgrimage Tour",
    city: "Lumbini",
    duration: "2 Days",
    difficulty: "Easy",
    category: "Spiritual",
    groupSize: "2-14",
    bestSeason: "Oct-Apr",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1518991668576-85d87e6d6c6d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 212,
    highlights: ["Maya Devi Temple", "Peace Stupa", "Monastic Zones", "Sacred Garden"],
    description: "Visit the birthplace of Lord Buddha and explore ancient monastic complexes.",
    featured: false,
  },
  {
    id: 6,
    name: "Nagarkot Sunrise & Hike",
    city: "Kathmandu",
    duration: "10 Hours",
    difficulty: "Moderate",
    category: "Adventure",
    groupSize: "2-8",
    bestSeason: "Sep-Jun",
    price: 95,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1549887552-23ad7caa7e14?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 87,
    highlights: ["Himalayan Sunrise", "Nature Hike", "Local Village", "Mountain Views"],
    description: "Witness breathtaking Himalayan sunrise followed by scenic countryside hike.",
    featured: true,
  },
  {
    id: 7,
    name: "Patan Art & Architecture",
    city: "Lalitpur",
    duration: "5 Hours",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-6",
    bestSeason: "Year Round",
    price: 55,
    originalPrice: 70,
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 324,
    highlights: ["Golden Temple", "Metal Workshops", "Wood Carvings", "Courtyard Museums"],
    description: "Discover the ancient art and craftsmanship of Patan's living heritage.",
    featured: false,
  },
  {
    id: 8,
    name: "Food Tour Kathmandu",
    city: "Kathmandu",
    duration: "4 Hours",
    difficulty: "Easy",
    category: "Culinary",
    groupSize: "2-10",
    bestSeason: "Year Round",
    price: 70,
    originalPrice: 90,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
    rating: 4.9,
    reviews: 67,
    highlights: ["Newari Cuisine", "Street Food", "Local Markets", "Cooking Demo"],
    description: "Taste authentic Nepali flavors through local markets and hidden eateries.",
    featured: true,
  },
  {
    id: 9,
    name: "Bandipur Cultural Walk",
    city: "Pokhara",
    duration: "Full Day",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-8",
    bestSeason: "Sep-May",
    price: 110,
    originalPrice: 140,
    image: "https://images.unsplash.com/photo-1536152471326-642d746f4d5a?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 45,
    highlights: ["Newari Architecture", "Mountain Views", "Silk Farm", "Cave Exploration"],
    description: "Experience preserved Newari culture in this beautifully maintained hill town.",
    featured: false,
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Cultural": return "bg-purple-100 text-purple-700";
    case "Historical": return "bg-amber-100 text-amber-700";
    case "Wildlife": return "bg-green-100 text-green-700";
    case "Adventure": return "bg-blue-100 text-blue-700";
    case "Culinary": return "bg-pink-100 text-pink-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    case "Scenic": return "bg-cyan-100 text-cyan-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function CityToursPage() {
  const [selectedCity, setSelectedCity] = React.useState("All Cities");
  const [selectedDuration, setSelectedDuration] = React.useState("All Durations");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const filteredTours = cityTours.filter((tour) => {
    const matchesCity = selectedCity === "All Cities" || tour.city === selectedCity;
    const matchesDuration = selectedDuration === "All Durations" || tour.duration.includes(selectedDuration.replace("All Durations", ""));
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesDuration && matchesSearch;
  });

  const featuredTour = cityTours.find((tour) => tour.id === 1);

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

                {/* City Filter */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">City</h4>
                  <div className="space-y-2">
                    {cityCategories.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setShowFilterDrawer(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                          selectedCity === city
                            ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                            : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                        }`}
                      >
                        {city}
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
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Discover Nepal's Urban Treasures
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              City <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Tours</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From ancient temples and royal palaces to vibrant markets and culinary adventures, 
              explore the rich tapestry of Nepal's cities with expert local guides.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 7 UNESCO Sites
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 4-10 Hours
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <UserCircle className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Local Guides
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
          placeholder="Search city tours..."
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
          {cityCategories.slice(0, 4).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedCity === city
                  ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white shadow-sm"
                  : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
              }`}
            >
              {city}
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
        {selectedCity}
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
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredTour.city}
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
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Explore City Experiences</h3>
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
                    {tour.city}
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
                  setSelectedCity("All Cities");
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
                Authentic Experiences with Local Experts
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our city tours are designed by locals who know every hidden gem, every story behind ancient walls, 
                and every flavor that defines Nepal's urban culture.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Certified Local Guides with Deep Cultural Knowledge",
                  "Small Groups for Personalized Attention",
                  "All Entrance Fees & Transportation Included",
                  "Flexible Itineraries & Customizable Options",
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
                  Customize Your Tour
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1593693397816-1c665ec8d5f3?q=80&w=2071&auto=format&fit=crop"
                alt="Kathmandu Durbar Square"
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