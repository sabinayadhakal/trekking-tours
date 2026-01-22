"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  Filter,
  Search,
  ArrowRight,
  Thermometer,
  X,
  Flag,
  Target,
  Award,
  Snowflake,
  Route,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const peakRegions = [
  "All Regions",
  "Everest Region",
  "Annapurna Region",
  "Langtang Region",
  "Manaslu Region",
  "Island Peak",
  "Mera Peak",
];

const difficultyLevels = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expedition",
];

const peakClimbs = [
  {
    id: 1,
    name: "Island Peak Climbing",
    region: "Island Peak",
    duration: "20 Days",
    difficulty: "Intermediate",
    altitude: "6,189m",
    groupSize: "2-8",
    bestSeason: "Apr-May, Oct-Nov",
    price: 3200,
    originalPrice: 3800,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 187,
    highlights: ["Ice Climbing", "Everest Views", "High Camp", "Glacier Traverse"],
    description: "The most popular trekking peak in Nepal, perfect for first-time climbers with previous trekking experience.",
    featured: true,
    successRate: "95%",
    trainingDays: 3,
  },
  {
    id: 2,
    name: "Mera Peak Expedition",
    region: "Mera Peak",
    duration: "22 Days",
    difficulty: "Intermediate",
    altitude: "6,476m",
    groupSize: "2-6",
    bestSeason: "Apr-May, Oct-Nov",
    price: 3800,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 134,
    highlights: ["Highest Trekking Peak", "Panoramic Views", "Remote Valleys", "Snow Climb"],
    description: "Climb Nepal's highest trekking peak with spectacular 360° views of five 8,000m peaks.",
    featured: true,
    successRate: "92%",
    trainingDays: 4,
  },
  {
    id: 3,
    name: "Lobuche East Peak",
    region: "Everest Region",
    duration: "24 Days",
    difficulty: "Advanced",
    altitude: "6,119m",
    groupSize: "2-6",
    bestSeason: "Apr-May, Sep-Oct",
    price: 4500,
    originalPrice: 5200,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 89,
    highlights: ["Technical Climb", "Everest Base Camp", "Ice Wall", "Summit Ridge"],
    description: "A challenging climb in the Everest region with technical sections and stunning high mountain scenery.",
    featured: false,
    successRate: "85%",
    trainingDays: 5,
  },
  {
    id: 4,
    name: "Pisang Peak Climbing",
    region: "Annapurna Region",
    duration: "18 Days",
    difficulty: "Intermediate",
    altitude: "6,091m",
    groupSize: "2-8",
    bestSeason: "Mar-May, Sep-Nov",
    price: 2800,
    originalPrice: 3400,
    image: "https://images.unsplash.com/photo-1511317559916-56d5ddb3e3e3?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    highlights: ["Annapurna Circuit", "Rock Climbing", "Panorama Views", "Alpine Style"],
    description: "Combine the classic Annapurna Circuit with an exciting climb up this beautiful pyramid-shaped peak.",
    featured: true,
    successRate: "90%",
    trainingDays: 3,
  },
  {
    id: 5,
    name: "Chulu West Peak",
    region: "Annapurna Region",
    duration: "25 Days",
    difficulty: "Advanced",
    altitude: "6,419m",
    groupSize: "2-6",
    bestSeason: "Apr-May, Oct-Nov",
    price: 4200,
    originalPrice: 4900,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 67,
    highlights: ["Technical Ascent", "Manang Valley", "Fixed Lines", "Summit Ridge"],
    description: "A more technical climb requiring previous mountaineering experience and good physical fitness.",
    featured: false,
    successRate: "80%",
    trainingDays: 6,
  },
  {
    id: 6,
    name: "Yala Peak Climbing",
    region: "Langtang Region",
    duration: "16 Days",
    difficulty: "Beginner",
    altitude: "5,732m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Dec",
    price: 2200,
    originalPrice: 2700,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 198,
    highlights: ["Non-Technical", "Langtang Valley", "Shishapangma Views", "First Peak"],
    description: "Perfect introduction to peak climbing with no technical climbing required, just basic snow skills.",
    featured: false,
    successRate: "98%",
    trainingDays: 2,
  },
  {
    id: 7,
    name: "Tent Peak (Tharpu Chuli)",
    region: "Annapurna Region",
    duration: "19 Days",
    difficulty: "Intermediate",
    altitude: "5,663m",
    groupSize: "2-8",
    bestSeason: "Mar-May, Oct-Nov",
    price: 2600,
    originalPrice: 3100,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2074&auto=format&fit=crop",
    rating: 4.7,
    reviews: 123,
    highlights: ["Annapurna Sanctuary", "Machapuchare Base", "Snow Skills", "360° Views"],
    description: "A superb climb in the heart of the Annapurna Sanctuary with moderate technical difficulty.",
    featured: true,
    successRate: "93%",
    trainingDays: 3,
  },
  {
    id: 8,
    name: "Ama Dablam Base Camp",
    region: "Everest Region",
    duration: "21 Days",
    difficulty: "Beginner",
    altitude: "4,570m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 2900,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 145,
    highlights: ["Ama Dablam Views", "Icefall Training", "High Camp", "Climbing Workshop"],
    description: "Base camp trek with technical climbing workshops - perfect preparation for bigger peaks.",
    featured: true,
    successRate: "100%",
    trainingDays: 5,
  },
  {
    id: 9,
    name: "Naya Kanga Peak",
    region: "Langtang Region",
    duration: "17 Days",
    difficulty: "Intermediate",
    altitude: "5,846m",
    groupSize: "2-6",
    bestSeason: "Mar-May, Oct-Nov",
    price: 2700,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 78,
    highlights: ["Langtang Valley", "Snow Ridge", "Summit Push", "Cultural Villages"],
    description: "A challenging climb in the Langtang region with stunning views of the Tibetan border peaks.",
    featured: false,
    successRate: "88%",
    trainingDays: 3,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 text-green-700";
    case "Intermediate": return "bg-yellow-100 text-yellow-700";
    case "Advanced": return "bg-orange-100 text-orange-700";
    case "Expedition": return "bg-red-100 text-red-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

const getSuccessRateColor = (rate: string) => {
  const rateNum = parseInt(rate);
  if (rateNum >= 95) return "text-green-600";
  if (rateNum >= 90) return "text-yellow-600";
  if (rateNum >= 85) return "text-orange-600";
  return "text-red-600";
};

export default function PeakClimbingPage() {
  const [selectedRegion, setSelectedRegion] = React.useState("All Regions");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("All Levels");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const filteredClimbs = peakClimbs.filter((climb) => {
    const matchesRegion = selectedRegion === "All Regions" || climb.region === selectedRegion;
    const matchesDifficulty = selectedDifficulty === "All Levels" || climb.difficulty === selectedDifficulty;
    const matchesSearch = climb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          climb.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesDifficulty && matchesSearch;
  });

  const featuredClimb = peakClimbs.find((climb) => climb.id === 1);

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
                <h3 className="font-bold text-lg text-[#0f2940]">Filter Climbs</h3>
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
                  <h4 className="font-medium text-[#0f2940] mb-3">Difficulty Level</h4>
                  <div className="flex flex-wrap gap-2">
                    {difficultyLevels.map((level) => (
                      <button
                        key={level}
                        onClick={() => {
                          setSelectedDifficulty(level);
                          setShowFilterDrawer(false);
                        }}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedDifficulty === level
                            ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white"
                            : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region Filter */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">Climbing Region</h4>
                  <div className="space-y-2">
                    {peakRegions.map((region) => (
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
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Nepal - The Mountaineering Capital
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Peak <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Climbing</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From beginner-friendly trekking peaks to challenging alpine ascents, stand on top of 
              Nepal's majestic mountains with expert climbing guides and full support.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 9 Climbing Peaks
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Flag className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 5,732m - 6,476m
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 80-98% Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-0 z-30 py-4 bg-white border-b border-[#C5E0ED]/30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search climbing peaks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 md:h-12 pl-10 md:pl-12 pr-4 rounded-full border border-[#C5E0ED]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5E0ED]/50 focus:border-[#C5E0ED] text-sm"
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
                {peakRegions.slice(0, 4).map((region) => (
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
                  {difficultyLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
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
            <Badge className={`border-none text-xs font-medium ${getDifficultyColor(selectedDifficulty)}`}>
              {selectedDifficulty}
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Climb */}
      {featuredClimb && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={featuredClimb.image}
                    alt={featuredClimb.name}
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
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredClimb.rating} ({featuredClimb.reviews})
                  </div>
                </div>
                <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredClimb.region}
                  </Badge>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                    {featuredClimb.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {featuredClimb.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredClimb.duration}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Flag className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredClimb.altitude}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Target className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredClimb.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredClimb.groupSize} People
                    </div>
                  </div>
                  
                  {/* Success Rate & Training */}
                  <div className="grid grid-cols-2 gap-4 mb-4 md:mb-6">
                    <div className="bg-[#C5E0ED]/10 rounded-lg p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-4 h-4 text-[#2d6a8a]" />
                        <span className="text-xs md:text-sm font-medium text-[#0f2940]">Success Rate</span>
                      </div>
                      <div className={`text-lg md:text-xl font-bold ${getSuccessRateColor(featuredClimb.successRate)}`}>
                        {featuredClimb.successRate}
                      </div>
                    </div>
                    <div className="bg-[#C5E0ED]/10 rounded-lg p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Snowflake className="w-4 h-4 text-[#2d6a8a]" />
                        <span className="text-xs md:text-sm font-medium text-[#0f2940]">Training Days</span>
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#0f2940]">
                        {featuredClimb.trainingDays} Days
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {featuredClimb.highlights.map((h, idx) => (
                      <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                    <div>
                      <span className="text-slate-400 text-sm line-through">${featuredClimb.originalPrice}</span>
                      <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredClimb.price}</span>
                      <span className="text-slate-500 text-sm">/person</span>
                    </div>
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                      View Expedition Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Climbs Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Peaks</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Choose Your Mountain Challenge</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{filteredClimbs.length}</span> climbing expeditions
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredClimbs.map((climb, i) => (
              <Card 
                key={climb.id} 
                className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-40 md:h-52 overflow-hidden">
                  <Image
                    src={climb.image}
                    alt={climb.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`border-none text-xs font-medium ${getDifficultyColor(climb.difficulty)}`}>
                      {climb.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {climb.rating}
                  </div>
                  {climb.featured && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                    {climb.region}
                  </Badge>
                  <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                    {climb.name}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                    {climb.description}
                  </p>
                  
                  {/* Altitude & Success Rate */}
                  <div className="flex items-center justify-between mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Flag className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {climb.altitude}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className={`w-3 h-3 md:w-4 md:h-4 ${getSuccessRateColor(climb.successRate)}`} />
                      <span className={`font-medium ${getSuccessRateColor(climb.successRate)}`}>
                        {climb.successRate}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {climb.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {climb.groupSize}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 text-xs line-through">${climb.originalPrice}</span>
                      <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${climb.price}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm">
                      Details <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredClimbs.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <Mountain className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED] mx-auto mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1 md:mb-2">No climbs found</h4>
              <p className="text-slate-600 text-sm md:text-base">Try adjusting your filters to see more results.</p>
              <Button
                variant="outline"
                className="mt-4 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-full"
                onClick={() => {
                  setSelectedRegion("All Regions");
                  setSelectedDifficulty("All Levels");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          <div className="text-center mt-8 md:mt-12">
            <Button variant="outline" className="border-[#0f2940] text-[#0f2940] hover:bg-[#0f2940] hover:text-white font-bold rounded-full px-6 md:px-10 py-4 md:py-6 text-sm md:text-base">
              View All Climbing Expeditions
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Climb With Us</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Safety First, Summit Always
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our UIAGM/IFMGA certified guides have decades of Himalayan experience and prioritize 
                your safety while maximizing your chances of standing on the summit.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "UIAGM/IFMGA Certified Lead Guides",
                  "1:2 Guide to Client Ratio Maximum",
                  "Comprehensive Pre-Climb Training & Equipment",
                  "Satellite Communication & Medical Support",
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
                  Plan Your Expedition
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                alt="Mountain climbers on peak"
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