"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Plane,
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
  Cloud,
  X,
  Eye,
  Mountain,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Minimal route options based on actual flights in your folder structure
const flightRoutes = [
  "All Routes",
  "Everest Region",
  "Annapurna Region",
  "Langtang Region",
];

// Minimal duration options
const flightDurations = [
  "All Durations",
  "1 Hour",
  "1.5 Hours",
  "4 Hours",
];

// Only include mountain flights that exist in your folder structure
const mountainFlights = [
  {
    id: 1,
    name: "Everest Region Mountain Flight Trip",
    route: "Everest Region",
    duration: "1 Hour",
    altitude: "8,848m",
    groupSize: "1-25",
    bestSeason: "Sep-May",
    price: 350,
    originalPrice: 420,
    image: "https://images.unsplash.com/photo-1511317559916-56d5ddb3e3e3?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 456,
    highlights: ["Mount Everest", "Lhotse", "Makalu", "Ama Dablam"],
    description: "The ultimate aerial adventure flying close to the world's highest peaks with guaranteed window seats.",
    featured: true,
    aircraft: "Beechcraft 1900D",
    departure: "06:00 AM",
    link: "/services/mountain-flight-heli-trip/everest-region-mountain-flight-trip",
  },
  {
    id: 2,
    name: "Everest Region Helicopter Trip",
    route: "Everest Region",
    duration: "4 Hours",
    altitude: "8,848m",
    groupSize: "1-5",
    bestSeason: "Sep-May",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1562329261-38b6b9d4efd8?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 156,
    highlights: ["Landing at Kalapatthar", "Everest Base Camp", "Gokyo Lakes", "Helicopter Landing"],
    description: "Luxury helicopter tour with landing opportunities at strategic viewpoints.",
    featured: true,
    aircraft: "AS350 B3",
    departure: "07:00 AM",
    link: "/services/mountain-flight-heli-trip/everest-region-helicopter-trip",
  },
  {
    id: 3,
    name: "Annapurna Region Mountain Flight Trip",
    route: "Annapurna Region",
    duration: "1 Hour",
    altitude: "8,091m",
    groupSize: "1-20",
    bestSeason: "Year Round",
    price: 320,
    originalPrice: 380,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2074&auto=format&fit=crop",
    rating: 4.8,
    reviews: 312,
    highlights: ["Annapurna I", "Dhaulagiri", "Machapuchare", "Manaslu"],
    description: "Spectacular views of the entire Annapurna range with crystal-clear mountain vistas.",
    featured: false,
    aircraft: "Beechcraft 1900D",
    departure: "07:00 AM",
    link: "/services/mountain-flight-heli-trip/annapurna-region-mountain-flight-trip",
  },
  {
    id: 4,
    name: "Langtang Region Helicopter Trip",
    route: "Langtang Region",
    duration: "1.5 Hours",
    altitude: "7,234m",
    groupSize: "1-6",
    bestSeason: "Oct-Apr",
    price: 950,
    originalPrice: 1150,
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop",
    rating: 4.8,
    reviews: 89,
    highlights: ["Langtang Lirung", "Ganesh Himal", "Dorje Lakpa", "Kyanjin Gompa"],
    description: "Helicopter exploration of the beautiful Langtang Valley with landing at Kyanjin Gompa.",
    featured: false,
    aircraft: "AS350 B3",
    departure: "08:00 AM",
    link: "/services/mountain-flight-heli-trip/langtang-region-helicopter-trip",
  },
];

const getAircraftColor = (aircraft: string) => {
  switch (aircraft) {
    case "Beechcraft 1900D": return "bg-blue-100 text-blue-700";
    case "AS350 B3": return "bg-red-100 text-red-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function MountainFlightsPage() {
  const router = useRouter();
  const [selectedRoute, setSelectedRoute] = React.useState("All Routes");
  const [selectedDuration, setSelectedDuration] = React.useState("All Durations");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  const handleBookNow = (flightName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(flightName)}`);
  };

  const filteredFlights = mountainFlights.filter((flight) => {
    const matchesRoute = selectedRoute === "All Routes" || flight.route === selectedRoute;
    const matchesDuration = selectedDuration === "All Durations" || flight.duration.includes(selectedDuration.replace("All Durations", ""));
    const matchesSearch = flight.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          flight.route.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRoute && matchesDuration && matchesSearch;
  });

  const featuredFlight = mountainFlights.find((flight) => flight.id === 1);

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
                <h3 className="font-bold text-lg text-[#0f2940]">Filter Flights</h3>
                <button 
                  onClick={() => setShowFilterDrawer(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Duration Filter - Minimal */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">Flight Duration</h4>
                  <div className="flex flex-wrap gap-2">
                    {flightDurations.map((duration) => (
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

                {/* Route Filter - Minimal */}
                <div>
                  <h4 className="font-medium text-[#0f2940] mb-3">Flight Route</h4>
                  <div className="space-y-2">
                    {flightRoutes.map((route) => (
                      <button
                        key={route}
                        onClick={() => {
                          setSelectedRoute(route);
                          setShowFilterDrawer(false);
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                          selectedRoute === route
                            ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                            : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                        }`}
                      >
                        {route}
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
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Nepal - The Ultimate Aerial Adventure
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Mountain <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Flights</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              Soar above the world's highest peaks without breaking a sweat. Experience the majestic Himalayas 
              from a bird's-eye view in our specially designed mountain flights.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Plane className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 4 Flight Options
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 1-4 hours
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Eye className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Guaranteed Window Seat
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
                placeholder="Search mountain flights..."
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

            {/* Desktop Filters - Minimal */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-wrap justify-center gap-2">
                {flightRoutes.slice(1).map((route) => (
                  <button
                    key={route}
                    onClick={() => setSelectedRoute(route)}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                      selectedRoute === route
                        ? "bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white shadow-sm"
                        : "bg-[#f0f7fa] text-[#2d6a8a] hover:bg-[#C5E0ED]/40"
                    }`}
                  >
                    {route}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="h-9 md:h-10 px-3 md:px-4 rounded-full border border-[#C5E0ED]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5E0ED]/50 text-xs md:text-sm cursor-pointer"
                >
                  {flightDurations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Active Filters */}
          <div className="lg:hidden mt-3 flex flex-wrap gap-2">
            <Badge className="bg-[#C5E0ED]/20 text-[#2d6a8a] border-none text-xs">
              {selectedRoute}
            </Badge>
            <Badge className="bg-[#C5E0ED]/20 text-[#2d6a8a] border-none text-xs">
              {selectedDuration}
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Flight */}
      {featuredFlight && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredFlight.link}
              className="cursor-pointer block"
            >
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredFlight.image}
                      alt={featuredFlight.name}
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
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredFlight.rating} ({featuredFlight.reviews})
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredFlight.route}
                    </Badge>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                      {featuredFlight.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {featuredFlight.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredFlight.duration}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Plane className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredFlight.aircraft}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredFlight.altitude}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredFlight.departure}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {featuredFlight.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                      <div>
                        <span className="text-slate-400 text-sm line-through">${featuredFlight.originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredFlight.price}</span>
                        <span className="text-slate-500 text-sm">/person</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredFlight.name);
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

      {/* All Flights Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Flights</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Choose Your Aerial Adventure</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{filteredFlights.length}</span> flights
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredFlights.map((flight, i) => (
              <Link 
                key={flight.id} 
                href={flight.link}
                className="cursor-pointer block"
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
                  <div className="relative h-40 md:h-52 overflow-hidden">
                    <Image
                      src={flight.image}
                      alt={flight.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`border-none text-xs font-medium ${getAircraftColor(flight.aircraft)}`}>
                        {flight.aircraft.split(" ")[0]}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {flight.rating}
                    </div>
                    {flight.featured && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                      {flight.route}
                    </Badge>
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                      {flight.name}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                      {flight.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {flight.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Plane className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {flight.departure}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 text-xs line-through">${flight.originalPrice}</span>
                        <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${flight.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(flight.name);
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

          {filteredFlights.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <Plane className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED] mx-auto mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1 md:mb-2">No flights found</h4>
              <p className="text-slate-600 text-sm md:text-base">Try adjusting your filters to see more results.</p>
              <Button
                variant="outline"
                className="mt-4 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-full"
                onClick={() => {
                  setSelectedRoute("All Routes");
                  setSelectedDuration("All Durations");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          <div className="text-center mt-8 md:mt-12">
            <Link href="/services/mountain-flight-heli-trip">
              <Button variant="outline" className="border-[#0f2940] text-[#0f2940] hover:bg-[#0f2940] hover:text-white font-bold rounded-full px-6 md:px-10 py-4 md:py-6 text-sm md:text-base">
                View All Flight Options
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
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Choose Our Flights</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Safety & Experience at 30,000 Feet
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                With decades of experience flying in the Himalayas, we offer the safest and most scenic 
                mountain flights with expert pilots who know every peak by name.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Experienced Himalayan Pilots with 10,000+ Hours",
                  "Guaranteed Window Seats for All Passengers",
                  "Live Commentary & Peak Identification",
                  "Flexible Rescheduling & Weather Guarantee",
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
                  Book Your Flight
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                alt="Mountain flight view"
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