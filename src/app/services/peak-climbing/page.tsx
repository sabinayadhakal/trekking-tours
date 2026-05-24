"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  ArrowRight,
  Flag,
  Target,
  Award,
  Snowflake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Only include peak climbs that exist in your folder structure
const peakClimbs = [
  {
    id: 1,
    name: "Island Peak Climbing",
    region: "Everest Region",
    duration: "15 Days",
    difficulty: "Technical",
    altitude: "6,189m",
    groupSize: "2-8",
    bestSeason: "Apr-May, Oct-Nov",
    price: 2450,
    originalPrice: 2800,
    image: "/images/used/island-peak-climbing-nepal.webp",
    rating: 4.8,
    reviews: 156,
    highlights: ["Summit Experience", "Technical Training", "Everest Views", "Glacier Crossing"],
    description: "Climb the most popular trekking peak in Nepal with expert guides and technical training.",
    featured: true,
    successRate: "92%",
    trainingDays: 3,
    link: "/services/peak-climbing/island-peak-climbing",
  },
  {
    id: 2,
    name: "Mera Peak Climbing",
    region: "Everest Region",
    duration: "14 Days",
    difficulty: "Moderate-Technical",
    altitude: "6,476m",
    groupSize: "2-6",
    bestSeason: "Apr-May, Oct-Nov",
    price: 2650,
    originalPrice: 3100,
    image: "/images/used/mera-peak-nepal.webp",
    rating: 4.9,
    reviews: 124,
    highlights: ["Highest Trekking Peak", "5 x 8000m Views", "Remote Wilderness", "Non-technical Summit"],
    description: "Stand on Nepal's highest trekking peak with spectacular panoramic views of five 8,000m peaks.",
    featured: true,
    successRate: "95%",
    trainingDays: 4,
    link: "/services/peak-climbing/mera-peak-climbing",
  },
  
  {
    id: 3,
    name: "Yala Peak Climbing",
    region: "Langtang Region",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "5,520m",
    groupSize: "2-8",
    bestSeason: "Mar-May, Sep-Dec",
    price: 1850,
    originalPrice: 2200,
    image: "/images/used/yala-peak-nepal.webp",
    rating: 4.5,
    reviews: 112,
    highlights: ["Beginner Friendly", "Langtang Valley", "Tibetan Border Views", "Cultural Experience"],
    description: "Perfect introduction to peak climbing with no technical climbing required, just basic snow skills.",
    featured: false,
    successRate: "98%",
    trainingDays: 2,
    link: "/services/peak-climbing/yala-peak-climbing",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Moderate": return "bg-green-100 text-green-700";
    case "Moderate-Challenging": return "bg-yellow-100 text-yellow-700";
    case "Challenging": return "bg-orange-100 text-orange-700";
    case "Technical": return "bg-red-100 text-red-700";
    case "Moderate-Technical": return "bg-purple-100 text-purple-700";
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
  const router = useRouter();

  const handleBookNow = (climbName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(climbName)}`);
  };

  const featuredClimb = peakClimbs.find((climb) => climb.id === 1);

  return (
    <div className="min-h-screen bg-white">
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
                <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 4 Climbing Peaks
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Flag className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 5,520m - 6,476m
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 90-98% Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Climb */}
      {featuredClimb && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredClimb.link}
              className="cursor-pointer block"
            >
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
                      <Button 
                        className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredClimb.name);
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

      {/* All Climbs Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Peaks</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Choose Your Mountain Challenge</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{peakClimbs.length}</span> climbing expeditions
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {peakClimbs.map((climb) => (
              <Link 
                key={climb.id} 
                href={climb.link}
                className="cursor-pointer block"
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
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
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(climb.name);
                        }}
                      >
                        Book Now <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
                src="/images/used/island-peak-climbing-nepal.webp"
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