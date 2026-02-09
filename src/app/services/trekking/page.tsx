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
  TrendingUp,
  Filter,
  Search,
  ArrowRight,
  Footprints,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trekRegions = [
  "All Regions",
  "Everest Region",
  "Annapurna Region",
  "Langtang Region",
  "Manaslu Region",
  "Remote Trails",
];

const difficultyLevels = [
  "All Levels",
  "Easy",
  "Moderate",
  "Challenging",
  "Strenuous",
];

const trekkingPackages = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    region: "Everest Region",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "5,364m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1450,
    originalPrice: 1650,
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 234,
    highlights: ["Khumbu Glacier", "Tengboche Monastery", "Sherpa Culture", "Kala Patthar"],
    description: "Trek to the foot of the world's highest mountain through legendary Sherpa villages and breathtaking Himalayan landscapes.",
    featured: true,
  },
  {
    id: 2,
    name: "Annapurna Circuit Trek",
    region: "Annapurna Region",
    duration: "18 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 1250,
    originalPrice: 1450,
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    rating: 4.8,
    reviews: 189,
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Valley", "Diverse Landscapes"],
    description: "The classic Himalayan trek circumnavigating the Annapurna massif, crossing the legendary Thorong La Pass.",
    featured: true,
  },
  {
    id: 3,
    name: "Langtang Valley Trek",
    region: "Langtang Region",
    duration: "10 Days",
    difficulty: "Easy",
    maxAltitude: "4,984m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 950,
    originalPrice: 1100,
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    highlights: ["Kyanjin Gompa", "Langtang Glacier", "Tamang Culture", "Cheese Factory"],
    description: "A shorter trek perfect for those with limited time, offering stunning mountain views and rich Tamang heritage.",
    featured: false,
  },
  {
    id: 4,
    name: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    duration: "16 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1350,
    originalPrice: 1550,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    reviews: 98,
    highlights: ["Larkya La Pass", "Remote Villages", "Buddhist Monasteries", "Wildlife"],
    description: "A remote and pristine alternative to the Annapurna Circuit, offering solitude and authentic cultural experiences.",
    featured: true,
  },
  {
    id: 5,
    name: "Annapurna Base Camp Trek",
    region: "Annapurna Region",
    duration: "12 Days",
    difficulty: "Moderate",
    maxAltitude: "4,130m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 1050,
    originalPrice: 1200,
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop",
    rating: 4.8,
    reviews: 212,
    highlights: ["Annapurna Sanctuary", "Machapuchare Views", "Hot Springs", "Gurung Villages"],
    description: "Journey into the heart of the Annapurna Sanctuary, surrounded by towering peaks in a natural amphitheater.",
    featured: false,
  },
  {
    id: 6,
    name: "Gokyo Lakes & Everest Base Camp",
    region: "Everest Region",
    duration: "18 Days",
    difficulty: "Challenging",
    maxAltitude: "5,545m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1650,
    originalPrice: 1850,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 87,
    highlights: ["Gokyo Ri", "Cho La Pass", "Turquoise Lakes", "Ngozumpa Glacier"],
    description: "The ultimate Everest region adventure combining the stunning Gokyo Lakes with the classic EBC route.",
    featured: true,
  },
  {
    id: 7,
    name: "Poon Hill Trek",
    region: "Annapurna Region",
    duration: "5 Days",
    difficulty: "Easy",
    maxAltitude: "3,210m",
    groupSize: "2-16",
    bestSeason: "Year Round",
    price: 550,
    originalPrice: 650,
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    rating: 4.6,
    reviews: 324,
    highlights: ["Poon Hill Sunrise", "Ghorepani", "Rhododendron Forests", "Gurung Culture"],
    description: "The perfect introductory trek offering spectacular sunrise views over the Annapurna and Dhaulagiri ranges.",
    featured: false,
  },
  {
    id: 8,
    name: "Upper Mustang Trek",
    region: "Remote Trails",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "3,840m",
    groupSize: "2-10",
    bestSeason: "Mar-Nov",
    price: 1850,
    originalPrice: 2100,
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 67,
    highlights: ["Lo Manthang", "Cave Monasteries", "Tibetan Culture", "Desert Landscapes"],
    description: "Explore the forbidden kingdom of Mustang, a preserved Tibetan enclave with ancient monasteries.",
    featured: true,
  },
  {
    id: 9,
    name: "Three Passes Trek",
    region: "Everest Region",
    duration: "20 Days",
    difficulty: "Strenuous",
    maxAltitude: "5,545m",
    groupSize: "2-10",
    bestSeason: "Apr-May, Oct-Nov",
    price: 1950,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 45,
    highlights: ["Kongma La", "Cho La", "Renjo La", "Gokyo Lakes"],
    description: "The ultimate challenge for experienced trekkers, crossing three high passes above 5,300m.",
    featured: false,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-700";
    case "Moderate": return "bg-yellow-100 text-yellow-700";
    case "Challenging": return "bg-orange-100 text-orange-700";
    case "Strenuous": return "bg-red-100 text-red-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function TrekkingNepalPage() {
  const [selectedRegion, setSelectedRegion] = React.useState("All Regions");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("All Levels");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const filteredPackages = trekkingPackages.filter((pkg) => {
    const matchesRegion = selectedRegion === "All Regions" || pkg.region === selectedRegion;
    const matchesDifficulty = selectedDifficulty === "All Levels" || pkg.difficulty === selectedDifficulty;
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesDifficulty && matchesSearch;
  });

  const featuredPackage = trekkingPackages.find((pkg) => pkg.id === 1);

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
                <h3 className="font-bold text-lg text-[#0f2940]">Filter Treks</h3>
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
                  <h4 className="font-medium text-[#0f2940] mb-3">Region</h4>
                  <div className="space-y-2">
                    {trekRegions.map((region) => (
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
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Nepal - The Himalayan Wonderland
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Trekking in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Nepal</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From the legendary Everest Base Camp to the sacred trails of Annapurna, discover why Nepal remains 
              the ultimate destination for trekkers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 9 Trekking Routes
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 5 to 20 Days
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Up to 5,545m
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
          placeholder="Search treks..."
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
          {trekRegions.slice(0, 4).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedRegion === region
                  ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white shadow-sm"
                  : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
              }`}
            >
              {region.replace(" Region", "")}
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
      {/* Featured Package */}
      {featuredPackage && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={featuredPackage.image}
                    alt={featuredPackage.name}
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
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredPackage.rating} ({featuredPackage.reviews})
                  </div>
                </div>
                <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredPackage.region}
                  </Badge>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                    {featuredPackage.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {featuredPackage.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.duration}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.maxAltitude}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Footprints className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.groupSize} People
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {featuredPackage.highlights.map((h, idx) => (
                      <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                    <div>
                      <span className="text-slate-400 text-sm line-through">${featuredPackage.originalPrice}</span>
                      <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredPackage.price}</span>
                      <span className="text-slate-500 text-sm">/person</span>
                    </div>
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Packages Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Packages</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Explore Our Treks</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{filteredPackages.length}</span> packages
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredPackages.map((pkg, i) => (
              <Card 
                key={pkg.id} 
                className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-40 md:h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`border-none text-xs font-medium ${getDifficultyColor(pkg.difficulty)}`}>
                      {pkg.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {pkg.rating}
                  </div>
                  {pkg.featured && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                    {pkg.region}
                  </Badge>
                  <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                    {pkg.name}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                    {pkg.description}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {pkg.maxAltitude}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 text-xs line-through">${pkg.originalPrice}</span>
                      <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${pkg.price}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm">
                      Details <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <Mountain className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED] mx-auto mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1 md:mb-2">No treks found</h4>
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
              Load More Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Trek with Us</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Your Safety & Experience Are Our Priority
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                With over a decade of experience in Himalayan expeditions, we&apos;ve built a reputation for excellence, 
                safety, and creating life-changing adventures.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Government Licensed & Certified Guides",
                  "Best Available Teahouse Accommodations",
                  "All Permits & Entry Fees Included",
                  "24/7 Emergency Support & Communication",
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
                  Get Free Consultation
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
                alt="Trekkers in Himalayas"
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