"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  Mountain,
  Sunrise,
  Camera,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const regionCategories = [
  "All Regions",
  
];

const difficultyLevels = [
  "All Difficulties",
  "Easy",
  "Moderate",
  "Challenging",
];

// Only include day hikes that exist in your folder structure
const dayHikes = [
  {
    id: 1,
    name: "Nagarkot Changunarayan Hiking",
    region: "Nagarkot",
    duration: "5-6 Hours",
    difficulty: "Easy",
    category: "Sunrise View",
    groupSize: "2-12",
    bestSeason: "Sep-May",
    price: 65,
    originalPrice: 85,
    image: "https://images.unsplash.com/photo-1549887552-23ad7caa7e14?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 245,
    highlights: ["Himalayan Sunrise", "Panoramic Views", "Photo Points", "Breakfast with a View"],
    description: "Watch the sunrise paint the Himalayas in golden hues from one of Nepal's best viewpoints.",
    featured: true,
    link: "/services/day-hikings/nagarkot-changunarayan-hiking",
  },
  {
    id: 2,
    name: "Champa Devi Hiking",
    region: "Champadevi",
    duration: "5-6 Hours",
    difficulty: "Easy",
    category: "Forest",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 50,
    originalPrice: 65,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 89,
    highlights: ["Oak Forest", "Wildlife Spotting", "Temple Visit", "Valley Views"],
    description: "Traverse through dense forests home to monkeys, deer, and colorful birds.",
    featured: false,
    link: "/services/day-hikings/champa-devi-hiking",
  },
  {
    id: 3,
    name: "Namobuddha Hiking",
    region: "Dhulikhel",
    duration: "6 Hours",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-12",
    bestSeason: "Sep-May",
    price: 60,
    originalPrice: 80,
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 112,
    highlights: ["Buddhist Monastery", "Newari Villages", "Himalayan Views", "Sacred Site"],
    description: "Visit one of Nepal's most important pilgrimage sites with stunning mountain backdrops.",
    featured: true,
    link: "/services/day-hikings/namobuddha-hiking",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Sunrise View": return "bg-orange-100 text-orange-700";
    case "Nature": return "bg-green-100 text-green-700";
    case "Scenic": return "bg-blue-100 text-blue-700";
    case "Summit": return "bg-purple-100 text-purple-700";
    case "Cultural": return "bg-amber-100 text-amber-700";
    case "Forest": return "bg-emerald-100 text-emerald-700";
    case "Family": return "bg-pink-100 text-pink-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function DayHikesPage() {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = React.useState("All Regions");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("All Difficulties");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const handleBookNow = (hikeName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(hikeName)}`);
  };

  const filteredHikes = dayHikes.filter((hike) => {
    const matchesRegion = selectedRegion === "All Regions" || hike.region === selectedRegion;
    const matchesDifficulty = selectedDifficulty === "All Difficulties" || hike.difficulty === selectedDifficulty;
    const matchesSearch = hike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hike.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hike.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesDifficulty && matchesSearch;
  });

  const featuredHike = dayHikes.find((hike) => hike.id === 1);

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
                <h3 className="font-bold text-lg text-[#0f2940]">Filter Hikes</h3>
                <button 
                  onClick={() => setShowFilterDrawer(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Difficulty Filter */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">Difficulty</h4>
                  <div className="flex flex-wrap gap-2">
                    {difficultyLevels.map((difficulty) => (
                      <button
                        key={difficulty}
                        onClick={() => {
                          setSelectedDifficulty(difficulty);
                          setShowFilterDrawer(false);
                        }}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedDifficulty === difficulty
                            ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white"
                            : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                        }`}
                      >
                        {difficulty}
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
              <Mountain className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Perfect Day Adventures from the Cities
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Hikes</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              Escape the city for a day and discover Nepal's natural beauty on foot. From sunrise viewpoints 
              and forest trails to monastery hikes and village walks - all within easy reach.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Sunrise className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Sunrise Hikes
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 3-8 Hours
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Camera className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Photo Friendly
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
                placeholder="Search day hikes..."
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
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="h-9 md:h-10 px-3 md:px-4 rounded-full border border-[#C5E0ED]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5E0ED]/50 text-xs md:text-sm cursor-pointer"
                >
                  {difficultyLevels.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
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
              {selectedDifficulty}
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Hike */}
      {featuredHike && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredHike.link}
              className="cursor-pointer block"
            >
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredHike.image}
                      alt={featuredHike.name}
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
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredHike.rating} ({featuredHike.reviews})
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredHike.region}
                    </Badge>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                      {featuredHike.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {featuredHike.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredHike.duration}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredHike.difficulty}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredHike.groupSize} People
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredHike.bestSeason}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {featuredHike.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                      <div>
                        <span className="text-slate-400 text-sm line-through">${featuredHike.originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredHike.price}</span>
                        <span className="text-slate-500 text-sm">/person</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredHike.name);
                        }}
                      >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* All Hikes Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Hikes</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">One-Day Hiking Adventures</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{filteredHikes.length}</span> hikes
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredHikes.map((hike, i) => (
              <Link 
                key={hike.id} 
                href={hike.link}
                className="cursor-pointer block"
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
                  <div className="relative h-40 md:h-52 overflow-hidden">
                    <Image
                      src={hike.image}
                      alt={hike.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`border-none text-xs font-medium ${getCategoryColor(hike.category)}`}>
                        {hike.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {hike.rating}
                    </div>
                    {hike.featured && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                      {hike.region}
                    </Badge>
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                      {hike.name}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                      {hike.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {hike.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {hike.difficulty}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 text-xs line-through">${hike.originalPrice}</span>
                        <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${hike.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(hike.name);
                        }}
                      >
                        Details <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredHikes.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <Mountain className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED] mx-auto mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1 md:mb-2">No hikes found</h4>
              <p className="text-slate-600 text-sm md:text-base">Try adjusting your filters to see more results.</p>
              <Button
                variant="outline"
                className="mt-4 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-full"
                onClick={() => {
                  setSelectedRegion("All Regions");
                  setSelectedDifficulty("All Difficulties");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          <div className="text-center mt-8 md:mt-12">
            <Link href="/services/day-hikings">
              <Button variant="outline" className="border-[#0f2940] text-[#0f2940] hover:bg-[#0f2940] hover:text-white font-bold rounded-full px-6 md:px-10 py-4 md:py-6 text-sm md:text-base">
                View All Hikes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Choose Our Hikes</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Expert Guides, Unforgettable Trails
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our day hikes are led by certified guides who know every trail, viewpoint, and hidden gem. 
                Whether you're a beginner or experienced hiker, we have the perfect route for you.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Certified Trekking Guides with First Aid Training",
                  "Small Groups for Personalized Experience",
                  "Round-trip Transportation Included",
                  "Packed Snacks & Picnic Lunch Options",
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
                  Plan Your Hike
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
                alt="Hiking in Nepal"
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