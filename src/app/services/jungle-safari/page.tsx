"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trees,
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
  PawPrint,
  X,
  Eye,
  Tent,
  Binoculars,
  Camera,
  Bird,
  Cat,
  Fish,
  Turtle,
  Rabbit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const safariParks = [
  "All Parks",
  "Chitwan National Park",
  "Bardiya National Park",
  "Koshi Tappu Wildlife",
  "Shuklaphanta Wildlife",
  "Parsa National Park",
];

const safariDurations = [
  "All Durations",
  "1 Day",
  "2-3 Days",
  "4-5 Days",
  "Week Long",
];

const jungleSafaris = [
  {
    id: 1,
    name: "Chitwan Classic Safari",
    park: "Chitwan National Park",
    duration: "3 Days",
    difficulty: "Easy",
    groupSize: "2-12",
    bestSeason: "Oct-Mar",
    price: 450,
    originalPrice: 550,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 342,
    highlights: ["Elephant Safari", "Canoe Ride", "Bird Watching", "Tharu Culture"],
    description: "Experience Nepal's premier wildlife destination with elephant safaris and jungle walks.",
    featured: true,
    activities: ["Elephant Safari", "Jungle Walk", "Canoe", "Cultural Show"],
    wildlife: ["Rhino", "Tiger", "Crocodile", "Birds"],
  },
  {
    id: 2,
    name: "Bardiya Wilderness Safari",
    park: "Bardiya National Park",
    duration: "4 Days",
    difficulty: "Moderate",
    groupSize: "2-8",
    bestSeason: "Oct-Apr",
    price: 650,
    originalPrice: 780,
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
    rating: 4.8,
    reviews: 189,
    highlights: ["Tiger Tracking", "River Dolphin", "Jeep Safari", "Remote Wilderness"],
    description: "Explore Nepal's largest and most remote national park with excellent tiger spotting opportunities.",
    featured: true,
    activities: ["Jeep Safari", "Tiger Tracking", "Birding", "Village Visit"],
    wildlife: ["Tiger", "Elephant", "Gangetic Dolphin", "Deer"],
  },
  {
    id: 3,
    name: "Koshi Tappu Birding Safari",
    park: "Koshi Tappu Wildlife",
    duration: "2 Days",
    difficulty: "Easy",
    groupSize: "2-10",
    bestSeason: "Nov-Mar",
    price: 320,
    originalPrice: 390,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    highlights: ["Bird Watching", "Water Buffalo", "River Safari", "Migrant Birds"],
    description: "A paradise for bird watchers with over 500 species recorded in this wetland reserve.",
    featured: false,
    activities: ["Bird Watching", "River Safari", "Nature Walk", "Photography"],
    wildlife: ["Birds", "Water Buffalo", "Dolphin", "Gharial"],
  },
  {
    id: 4,
    name: "Shuklaphanta Rhino Safari",
    park: "Shuklaphanta Wildlife",
    duration: "3 Days",
    difficulty: "Easy",
    groupSize: "2-8",
    bestSeason: "Oct-Mar",
    price: 480,
    originalPrice: 580,
    image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 98,
    highlights: ["Rhino Viewing", "Swamp Deer", "Elephant Ride", "Grasslands"],
    description: "Home to Nepal's largest herd of swamp deer and endangered one-horned rhinoceros.",
    featured: true,
    activities: ["Elephant Safari", "Jeep Drive", "Tower Watch", "Grassland Tour"],
    wildlife: ["Rhino", "Swamp Deer", "Tiger", "Elephant"],
  },
  {
    id: 5,
    name: "Chitwan Luxury Safari",
    park: "Chitwan National Park",
    duration: "4 Days",
    difficulty: "Easy",
    groupSize: "2-6",
    bestSeason: "Oct-Apr",
    price: 950,
    originalPrice: 1150,
    image: "https://images.unsplash.com/photo-1536152471326-642d746f4d5a?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 78,
    highlights: ["Luxury Lodge", "Private Guide", "Spa", "Gourmet Dining"],
    description: "Premium safari experience with luxury accommodation and personalized service.",
    featured: false,
    activities: ["Private Safari", "Spa Treatment", "Fine Dining", "Cultural Tour"],
    wildlife: ["Rhino", "Tiger", "Bear", "Crocodile"],
  },
  {
    id: 6,
    name: "Bardiya Tiger Special",
    park: "Bardiya National Park",
    duration: "5 Days",
    difficulty: "Moderate",
    groupSize: "2-6",
    bestSeason: "Feb-May",
    price: 850,
    originalPrice: 1000,
    image: "https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 56,
    highlights: ["Tiger Focus", "Expert Tracker", "Camera Traps", "Research Visit"],
    description: "Specialized safari focusing on tiger conservation and research with expert trackers.",
    featured: true,
    activities: ["Tracking", "Camera Traps", "Research Visit", "Night Safari"],
    wildlife: ["Tiger", "Leopard", "Wild Elephant", "Dolphin"],
  },
  {
    id: 7,
    name: "Family Jungle Adventure",
    park: "Chitwan National Park",
    duration: "2 Days",
    difficulty: "Easy",
    groupSize: "2-12",
    bestSeason: "Year Round",
    price: 380,
    originalPrice: 450,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 234,
    highlights: ["Family Friendly", "Elephant Bathing", "Nature Crafts", "Junior Ranger"],
    description: "Perfect introduction to wildlife for families with child-friendly activities.",
    featured: false,
    activities: ["Elephant Bath", "Craft Workshop", "Nature Games", "Campfire"],
    wildlife: ["Rhino", "Monkey", "Deer", "Birds"],
  },
  {
    id: 8,
    name: "Photography Safari",
    park: "Bardiya National Park",
    duration: "4 Days",
    difficulty: "Moderate",
    groupSize: "2-4",
    bestSeason: "Nov-Feb",
    price: 1200,
    originalPrice: 1450,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    rating: 4.9,
    reviews: 45,
    highlights: ["Photo Guide", "Hide Photography", "Golden Hours", "Editing Workshop"],
    description: "Professional photography safari with expert guides and specialized hides.",
    featured: true,
    activities: ["Hide Photography", "Editing Workshop", "Golden Hour Shoots", "Review Sessions"],
    wildlife: ["Tiger", "Birds", "Landscapes", "Macro"],
  },
  {
    id: 9,
    name: "Conservation Volunteer Safari",
    park: "Chitwan National Park",
    duration: "7 Days",
    difficulty: "Moderate",
    groupSize: "2-8",
    bestSeason: "Sep-May",
    price: 750,
    originalPrice: 900,
    image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    reviews: 67,
    highlights: ["Volunteer Work", "Conservation Talk", "Community Visit", "Research"],
    description: "Combine wildlife viewing with conservation work and community interaction.",
    featured: false,
    activities: ["Volunteering", "Research Help", "Community Work", "Monitoring"],
    wildlife: ["Rhino", "Elephant", "Birds", "Reptiles"],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-700";
    case "Moderate": return "bg-yellow-100 text-yellow-700";
    case "Challenging": return "bg-orange-100 text-orange-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

const getWildlifeIcon = (animal: string) => {
  const animalLower = animal.toLowerCase();
  
  if (animalLower.includes("tiger") || animalLower.includes("leopard") || animalLower.includes("cat")) {
    return Cat;
  } else if (animalLower.includes("elephant")) {
    return Search;
  } else if (animalLower.includes("rhino") || animalLower.includes("buffalo")) {
    return Eye;
  } else if (animalLower.includes("bird")) {
    return Bird;
  } else if (animalLower.includes("dolphin") || animalLower.includes("whale")) {
    return Fish;
  } else if (animalLower.includes("crocodile") || animalLower.includes("turtle")) {
    return Turtle;
  } else if (animalLower.includes("bear")) {
    return PawPrint;
  } else if (animalLower.includes("deer") || animalLower.includes("antelope")) {
    return Rabbit;
  } else if (animalLower.includes("monkey")) {
    return Cat;
  } else if (animalLower.includes("landscape")) {
    return Camera;
  } else if (animalLower.includes("macro")) {
    return Search;
  } else if (animalLower.includes("reptile")) {
    return Turtle;
  } else {
    return PawPrint;
  }
};

export default function JungleSafariPage() {
  const [selectedPark, setSelectedPark] = React.useState("All Parks");
  const [selectedDuration, setSelectedDuration] = React.useState("All Durations");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const filteredSafaris = jungleSafaris.filter((safari) => {
    const matchesPark = selectedPark === "All Parks" || safari.park === selectedPark;
    const matchesDuration = selectedDuration === "All Durations" || safari.duration.includes(selectedDuration.replace("All Durations", ""));
    const matchesSearch = safari.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          safari.park.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          safari.wildlife.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPark && matchesDuration && matchesSearch;
  });

  const featuredSafari = jungleSafaris.find((safari) => safari.id === 1);

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
                <h3 className="font-bold text-lg text-[#0f2940]">Filter Safaris</h3>
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
                  <h4 className="font-medium text-[#0f2940] mb-3">Safari Duration</h4>
                  <div className="flex flex-wrap gap-2">
                    {safariDurations.map((duration) => (
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

                {/* Park Filter */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">National Park</h4>
                  <div className="space-y-2">
                    {safariParks.map((park) => (
                      <button
                        key={park}
                        onClick={() => {
                          setSelectedPark(park);
                          setShowFilterDrawer(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                          selectedPark === park
                            ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                            : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                        }`}
                      >
                        {park}
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
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Nepal's Wildlife Paradise
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Jungle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Safari</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              Discover Nepal's incredible wildlife in lush national parks, home to rare Bengal tigers, 
              one-horned rhinoceros, and over 500 bird species in pristine wilderness.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Trees className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 5 National Parks
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <PawPrint className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 200+ Species
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Camera className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Photography Focus
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
                placeholder="Search jungle safaris..."
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
                {safariParks.slice(0, 4).map((park) => (
                  <button
                    key={park}
                    onClick={() => setSelectedPark(park)}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                      selectedPark === park
                        ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white shadow-sm"
                        : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                    }`}
                  >
                    {park.replace(" National Park", "").replace(" Wildlife", "")}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="h-9 md:h-10 px-3 md:px-4 rounded-full border border-[#C5E0ED]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5E0ED]/50 text-xs md:text-sm cursor-pointer"
                >
                  {safariDurations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Active Filters */}
          <div className="lg:hidden mt-3 flex flex-wrap gap-2">
            <Badge className="bg-[#C5E0ED]/20 text-[#2d6a8a] border-none text-xs">
              {selectedPark}
            </Badge>
            <Badge className="bg-[#C5E0ED]/20 text-[#2d6a8a] border-none text-xs">
              {selectedDuration}
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Safari */}
      {featuredSafari && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={featuredSafari.image}
                    alt={featuredSafari.name}
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
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredSafari.rating} ({featuredSafari.reviews})
                  </div>
                </div>
                <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredSafari.park}
                  </Badge>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                    {featuredSafari.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {featuredSafari.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredSafari.duration}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Trees className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredSafari.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredSafari.groupSize} People
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredSafari.bestSeason}
                    </div>
                  </div>
                  
                  {/* Wildlife Icons */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-sm font-medium text-[#0f2940] mb-2">Spot These Animals:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredSafari.wildlife.map((animal, idx) => {
                        const Icon = getWildlifeIcon(animal);
                        return (
                          <span key={idx} className="flex items-center gap-1.5 text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                            <Icon className="w-3 h-3" /> {animal}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {featuredSafari.highlights.map((h, idx) => (
                      <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                    <div>
                      <span className="text-slate-400 text-sm line-through">${featuredSafari.originalPrice}</span>
                      <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredSafari.price}</span>
                      <span className="text-slate-500 text-sm">/person</span>
                    </div>
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                      Book Safari
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Safaris Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Safaris</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Explore Wildlife Adventures</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{filteredSafaris.length}</span> safaris
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredSafaris.map((safari, i) => (
              <Card 
                key={safari.id} 
                className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-40 md:h-52 overflow-hidden">
                  <Image
                    src={safari.image}
                    alt={safari.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`border-none text-xs font-medium ${getDifficultyColor(safari.difficulty)}`}>
                      {safari.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {safari.rating}
                  </div>
                  {safari.featured && (
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 md:p-6">
                  <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                    {safari.park.replace(" National Park", "")}
                  </Badge>
                  <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                    {safari.name}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                    {safari.description}
                  </p>
                  
                  {/* Wildlife Mini Icons */}
                  <div className="flex items-center gap-1.5 mb-3 md:mb-4">
                    {safari.wildlife.slice(0, 3).map((animal, idx) => {
                      const Icon = getWildlifeIcon(animal);
                      return (
                        <span key={idx} className="text-xs bg-[#C5E0ED]/10 text-[#2d6a8a] p-1 rounded-full">
                          <Icon className="w-3 h-3" />
                        </span>
                      );
                    })}
                    {safari.wildlife.length > 3 && (
                      <span className="text-xs text-slate-500">+{safari.wildlife.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {safari.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {safari.groupSize}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 text-xs line-through">${safari.originalPrice}</span>
                      <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${safari.price}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm">
                      Details <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSafaris.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <Trees className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED] mx-auto mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1 md:mb-2">No safaris found</h4>
              <p className="text-slate-600 text-sm md:text-base">Try adjusting your filters to see more results.</p>
              <Button
                variant="outline"
                className="mt-4 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-full"
                onClick={() => {
                  setSelectedPark("All Parks");
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
              View All Safari Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Choose Our Safaris</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Conservation-Focused Wildlife Experiences
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our safaris are led by certified naturalists and conservationists who prioritize animal welfare 
                and sustainable tourism while offering unforgettable wildlife encounters.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Certified Naturalist Guides with 10+ Years Experience",
                  "Ethical Wildlife Viewing Practices",
                  "Direct Contribution to Conservation Projects",
                  "Small Groups for Minimal Environmental Impact",
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
                  Customize Your Safari
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?q=80&w=2070&auto=format&fit=crop"
                alt="Jungle safari elephant ride"
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