"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import { 
  Mountain, 
  Compass, 
  Award, 
  ShieldCheck, 
  Users, 
  Star,
  Clock,
  Phone,
  Tent,
  Footprints,
  Camera,
  Heart,
  ChevronRight,
  MapPin,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight as RightIcon,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const destinations = [
  {
    name: "Nepal",
    image: "/images/nepal-1.jpg",
    description: "Birthplace of Buddha, home to Everest and Annapurna.",
    tours: "15+ Treks",
    highlights: ["Everest Base Camp", "Annapurna Circuit", "Langtang"]
  },
  {
    name: "Bhutan",
    image: "https://images.unsplash.com/photo-1578503173325-452778794828?q=80&w=2070&auto=format&fit=crop",
    description: "Land of Thunder Dragon, ancient monasteries, happiness measured.",
    tours: "8+ Cultural",
    highlights: ["Tiger's Nest", "Punakha Dzong", "Paro"]
  },
  {
    name: "Tibet",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop",
    description: "Roof of the World, spiritual awakening, vast plateaus.",
    tours: "5+ Expeditions",
    highlights: ["Mount Kailash", "Lhasa", "Everest North"]
  }
];

const services = [
  {
    icon: (
      <div className="relative w-6 h-6">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] flex items-center justify-center">
          <span className="text-[#0f2940] font-bold text-sm">1</span>
        </div>
      </div>
    ),
    title: "Free Walking Tour, Kathmandu",
    description: "First Free Walking Tour in Kathmandu, Nepal.",
    color: "from-sky-100 to-blue-50"
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Mountain Trekking",
    description: "Guided treks through Everest, Annapurna, Langtang with Sherpa guides.",
    color: "from-blue-100 to-cyan-50"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Peak Climbing",
    description: "Climbing expeditions to Island Peak, Mera Peak, Lobuche summits.",
    color: "from-emerald-100 to-teal-50"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cultural Tours",
    description: "Ancient temples, monasteries, and Himalayan heritage experiences.",
    color: "from-amber-100 to-orange-50"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photography Tours",
    description: "Capture the Himalayas in all their glory.",
    color: "from-rose-100 to-pink-50"
  },
];

const popularTreks = [
  {
    name: "Everest Base Camp",
    duration: "14 Days",
    difficulty: "Moderate",
    altitude: "5,364m",
    price: "$1,450",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9
  },
  {
    name: "Annapurna Circuit",
    duration: "18 Days",
    difficulty: "Challenging",
    altitude: "5,416m",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    rating: 4.8
  },
  {
    name: "Langtang Valley",
    duration: "10 Days",
    difficulty: "Easy-Moderate",
    altitude: "4,984m",
    price: "$950",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7
  },
  {
    name: "Manaslu Circuit",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$1,350",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8
  },
  {
    name: "Upper Mustang",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "4,010m",
    price: "$1,650",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "UK",
    text: "Himkala made my Everest dream come true. Guides were incredibly knowledgeable!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    trek: "Everest Base Camp"
  },
  {
    name: "Michael Chen",
    country: "Canada",
    text: "Bhutan tour exceeded expectations. Perfectly arranged, profound insights.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    trek: "Bhutan Cultural"
  },
  {
    name: "Emma Rodriguez",
    country: "Spain",
    text: "Professional, friendly, passionate. The gold standard for Himalayan adventures!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    trek: "Annapurna Circuit"
  },
  {
    name: "James Wilson",
    country: "Australia",
    text: "Best trekking experience of my life! The organization was flawless from start to finish.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    trek: "Langtang Valley"
  },
  {
    name: "Lisa Tanaka",
    country: "Japan",
    text: "The attention to detail and safety measures were outstanding. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    trek: "Manaslu Circuit"
  },
  {
    name: "David Müller",
    country: "Germany",
    text: "An authentic cultural experience combined with world-class trekking. Will be back!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    trek: "Tibet Expedition"
  }
];

// Duplicate testimonials for infinite scroll effect
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

const tripadvisorUrl = "https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[95vh] md:min-h-screen flex items-center overflow-hidden bg-[#0f2940]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
              alt="Himalayan Mountains"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f2940]/90 via-[#1a4166]/70 to-[#0f2940]/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2940]/80 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 py-2 px-4 text-xs md:text-sm font-medium">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 fill-white" /> 5000+ Adventurers Since 2012
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight mb-6 md:mb-8">
                Himalayan 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic"> Expeditions</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light">
                Life-changing journeys across Nepal, Bhutan, and Tibet with certified expert guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
                <Button size="lg" className="
                  bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]
                  hover:from-[#b3d6e6] hover:to-[#6baac9]
                  text-[#0f2940] font-bold 
                  h-14 sm:h-16 md:h-18
                  px-8 sm:px-10 md:px-12
                  rounded-full
                  text-base sm:text-lg md:text-xl
                  shadow-2xl shadow-[#C5E0ED]/40
                  border-2 border-white/30
                  w-full sm:w-auto
                  transition-all duration-300
                  hover:scale-[1.02]
                ">
                  <Compass className="mr-2 w-5 h-5 md:w-6 md:h-6" /> Explore Expeditions
                </Button>
                <Button size="lg" variant="outline" className="
                  bg-white/15 backdrop-blur-sm
                  text-white 
                  border-white/40
                  hover:bg-white/25 
                  hover:border-white/60
                  h-14 sm:h-16 md:h-18
                  px-8 sm:px-10 md:px-12
                  rounded-full
                  text-base sm:text-lg md:text-xl
                  border-2
                  w-full sm:w-auto
                  transition-all duration-300
                ">
                  <Phone className="mr-2 w-5 h-5 md:w-6 md:h-6" /> Book Consultation
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "12+", label: "Years Experience", icon: <Award className="w-4 h-4" /> },
                  { value: "5000+", label: "Happy Trekkers", icon: <Users className="w-4 h-4" /> },
                  { value: "150+", label: "Expeditions", icon: <Mountain className="w-4 h-4" /> },
                  { value: "100%", label: "Safety Record", icon: <ShieldCheck className="w-4 h-4" /> }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {stat.icon}
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-xs text-white/70 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section id="destinations" className="py-16 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
              <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
                <MapPin className="w-3 h-3 mr-1.5" /> PREMIUM DESTINATIONS
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2940] mb-6">
                Himalayan Kingdoms
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Explore the world's most majestic mountain regions with our expertly crafted journeys.
              </p>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                {destinations.map((dest, i) => (
                  <div
                    key={`${dest.name}-${i}`}
                    className="flex-shrink-0 w-[85vw] mr-6 last:mr-0"
                  >
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover"
                        sizes="85vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/30 to-transparent" />
                      <div className="absolute bottom-0 p-6 w-full">
                        <Badge className="mb-3 bg-white text-[#0f2940] border-none px-4 py-1.5 text-sm font-bold">
                          {dest.tours}
                        </Badge>
                        <h3 className="text-2xl font-serif text-white mb-3">{dest.name}</h3>
                        <p className="text-white/90 text-sm mb-4 leading-relaxed">
                          {dest.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dest.highlights.map((h, idx) => (
                            <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {destinations.map((dest, i) => (
                <div
                  key={dest.name}
                  className="relative h-[500px] rounded-3xl overflow-hidden"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 33vw, 400px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/30 to-transparent" />
                  <div className="absolute bottom-0 p-8 w-full">
                    <Badge className="mb-3 bg-white text-[#0f2940] border-none px-4 py-1.5 text-sm font-bold">
                      {dest.tours}
                    </Badge>
                    <h3 className="text-3xl font-serif text-white mb-3">{dest.name}</h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {dest.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="py-16 md:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
              <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
                <CheckCircle className="w-3 h-3 mr-1.5" /> OUR SERVICES
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2940] mb-6">
                Comprehensive Expedition Services
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                From guided treks to cultural immersions, we provide complete Himalayan adventure solutions with safety and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#C5E0ED]/30"
                >
                  <CardContent className="p-6 md:p-8 h-full">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-[#2d6a8a] mb-6`}>
                      <div className="scale-125">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0f2940] mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="text-[#2d6a8a] hover:text-[#0f2940] hover:bg-[#C5E0ED]/20 px-0 group">
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Treks - Desktop with arrow navigation */}
        <section id="treks" className="py-16 md:py-32 bg-[#0f2940]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6">
              <div className="max-w-2xl">
                <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
                  <Star className="w-3 h-3 mr-1.5 fill-[#C5E0ED]" /> POPULAR TREKS
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
                  Signature Adventures
                </h2>
                <p className="text-white/70 text-base">
                  Our most sought-after Himalayan journeys, carefully curated for unforgettable experiences.
                </p>
              </div>
              <Button variant="outline" className=" border-white/30 hover:bg-white/10 font-bold rounded-full px-8 py-6 text-base">
                View All Expeditions
              </Button>
            </div>

            {/* Mobile: Always horizontal scroll */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                {popularTreks.map((trek, i) => (
                  <div
                    key={trek.name}
                    className="flex-shrink-0 w-[85vw] mr-6 last:mr-0"
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={trek.image}
                          alt={trek.name}
                          fill
                          className="object-cover"
                          sizes="85vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#0f2940]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {trek.rating}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">{trek.name}</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-white/70">
                            <Clock className="w-4 h-4 text-[#C5E0ED]" />
                            <span className="text-sm">{trek.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <Mountain className="w-4 h-4 text-[#C5E0ED]" />
                            <span className="text-sm">{trek.altitude}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <Footprints className="w-4 h-4 text-[#C5E0ED]" />
                            <span className="text-sm">{trek.difficulty}</span>
                          </div>
                          <div className="text-[#C5E0ED] font-bold text-lg">
                            {trek.price}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full hover:from-[#b3d6e6] hover:to-[#6baac9] py-6">
                          View Itinerary
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop with arrow navigation */}
            <div className="hidden md:block relative">
              {/* Navigation Arrows */}
              <div className="flex justify-end gap-4 mb-8">
                <Button
                  onClick={scrollLeft}
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white rounded-full p-3"
                  size="icon"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  onClick={scrollRight}
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white rounded-full p-3"
                  size="icon"
                >
                  <RightIcon className="h-6 w-6" />
                </Button>
              </div>

              {/* Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-8 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                <div className="flex gap-8 pr-8">
                  {popularTreks.map((trek, i) => (
                    <div
                      key={trek.name}
                      className="flex-shrink-0 w-[400px]"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                        <div className="relative h-72 overflow-hidden">
                          <Image
                            src={trek.image}
                            alt={trek.name}
                            fill
                            className="object-cover"
                            sizes="400px"
                            quality={85}
                          />
                          <div className="absolute top-4 right-4 bg-[#0f2940]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {trek.rating}
                          </div>
                        </div>
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-white mb-4">{trek.name}</h3>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-white/70">
                              <Clock className="w-4 h-4 text-[#C5E0ED]" />
                              <span className="text-sm">{trek.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                              <Mountain className="w-4 h-4 text-[#C5E0ED]" />
                              <span className="text-sm">{trek.altitude}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                              <Footprints className="w-4 h-4 text-[#C5E0ED]" />
                              <span className="text-sm">{trek.difficulty}</span>
                            </div>
                            <div className="text-[#C5E0ED] font-bold text-xl">
                              {trek.price}
                            </div>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full hover:from-[#b3d6e6] hover:to-[#6baac9] py-6 text-base">
                            View Itinerary
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Removed avatars */}
        <section className="py-16 md:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
                  <ShieldCheck className="w-3 h-3 mr-1.5" /> WHY CHOOSE US
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2940] mb-6">
                  Expedition Excellence
                </h2>
                <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                  With over a decade of Himalayan expertise, we prioritize safety, sustainability, and exceptional experiences.
                </p>

                <div className="space-y-6">
                  {[
                    { 
                      title: "Certified Expertise", 
                      desc: "Fully licensed with Nepal Tourism Board and international mountaineering certifications.",
                      icon: <Award className="w-5 h-5" />
                    },
                    { 
                      title: "Local Guide Network", 
                      desc: "Experienced Sherpa guides with extensive knowledge of Himalayan terrain.",
                      icon: <Users className="w-5 h-5" />
                    },
                    { 
                      title: "Safety First Approach", 
                      desc: "24/7 emergency support, satellite communication, and comprehensive insurance.",
                      icon: <ShieldCheck className="w-5 h-5" />
                    },
                    { 
                      title: "Sustainable Tourism", 
                      desc: "Eco-friendly practices and direct community support initiatives.",
                      icon: <Heart className="w-5 h-5" />
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-xl flex items-center justify-center shrink-0">
                        <div className="text-[#0f2940]">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0f2940] mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
                    alt="Professional Himalayan Expedition Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    quality={85}
                  />
                  {/* Removed the avatar section from here */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940] to-transparent p-6 md:p-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
                      <div className="text-white mb-4">
                        <div className="font-bold text-lg mb-2">5000+ Adventurers Trust Us</div>
                        <div className="text-white/70 text-sm">from 50+ countries worldwide</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-white font-bold ml-2 text-lg">4.9/5 Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Testimonials - Horizontal Flow Animation */}
<section className="py-16 md:py-32 bg-white overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
      <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
        <Star className="w-3 h-3 mr-1.5 fill-[#2d6a8a]" /> TESTIMONIALS
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2940] mb-6">
        Adventurer Experiences
      </h2>
      <p className="text-base md:text-lg text-slate-600 leading-relaxed">
        Hear from our global community of Himalayan explorers and their unforgettable journeys.
      </p>
    </div>

    {/* Horizontal Flow Animation for Mobile */}
    <div className="md:hidden overflow-hidden relative py-4">
      <div className="flex animate-infinite-scroll-slow-mobile">
        {infiniteTestimonials.map((testimonial, i) => (
          <div
            key={`${testimonial.name}-${i}`}
            className="flex-shrink-0 w-[85vw] mr-6"
          >
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-2xl overflow-hidden border border-[#C5E0ED]/40 p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg text-[#0f2940]">{testimonial.name}</div>
                <div className="text-slate-600 text-sm flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#2d6a8a]" /> {testimonial.country}
                </div>
                <Badge className="bg-gradient-to-r from-[#C5E0ED]/20 to-[#7fb8d4]/20 text-[#0f2940] border-[#C5E0ED]/40 text-xs w-fit">
                  {testimonial.trek}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Horizontal Flow Animation for Desktop */}
    <div className="hidden md:block overflow-hidden relative py-8">
      <div className="flex animate-infinite-scroll-slow-desktop">
        {infiniteTestimonials.map((testimonial, i) => (
          <div
            key={`${testimonial.name}-${i}`}
            className="flex-shrink-0 w-[400px] mr-8"
          >
            <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-3xl overflow-hidden border border-[#C5E0ED]/40 p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#7fb8d4]/60">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg text-[#0f2940]">{testimonial.name}</div>
                <div className="text-slate-600 text-sm flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#2d6a8a]" /> {testimonial.country}
                </div>
                <Badge className="bg-gradient-to-r from-[#C5E0ED]/20 to-[#7fb8d4]/20 text-[#0f2940] border-[#C5E0ED]/40 text-xs w-fit font-medium">
                  {testimonial.trek}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* TripAdvisor Section */}
    <div className="mt-12 sm:mt-20 bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] rounded-2xl p-6 sm:p-8 md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="lg:w-2/3 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-[#2E4F7C] mb-3">
            See All Reviews on Tripadvisor
          </h3>
          <p className="text-sm sm:text-base text-[#3C6AA6] mb-4">
            Join thousands of satisfied travelers who've shared their experiences. 
            Read detailed reviews, see more photos, and discover why we're rated so highly.
          </p>
          <a
            href={tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2d6a8a] to-[#3C6AA6] hover:from-[#0f2940] hover:to-[#2d6a8a] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>Visit Tripadvisor</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        <div className="lg:w-1/3 flex justify-center">
          <a
            href={tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-48 sm:w-56 h-48 sm:h-56">
              <Image
                src="/images/TripAdvisor-Logo.png"
                alt="Tripadvisor"
                fill
                className="object-contain drop-shadow-lg"
                unoptimized
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Updated CSS for infinite scroll animation - with hover pause for individual cards */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Animation speeds matching reference code */
        .animate-infinite-scroll-slow-mobile {
          display: flex;
          width: max-content;
          animation: infinite-scroll 150s linear infinite; /* Matching reference mobile timing */
        }

        .animate-infinite-scroll-slow-desktop {
          display: flex;
          width: max-content;
          animation: infinite-scroll 150s linear infinite; /* Matching reference desktop timing */
        }

        

        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}