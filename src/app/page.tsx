"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Globe,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const destinations = [
  {
    name: "Nepal",
    image: "/images/used/nepal-main-page.avif",
    description: "Himalayan peaks, ancient cities, and legendary trekking routes.",
    highlights: ["Everest Base Camp", "Annapurna Circuit", "Kathmandu Valley"],
    link: "/destinations/nepal"
  },
  {
    name: "Bhutan",
    image: "/images/used/bhutan-main-page-1.avif",
    description: "Monasteries, mountain fortresses, and a commitment to happiness.",
    highlights: ["Tiger's Nest", "Punakha Dzong", "Paro Valley"],
    link: "/destinations/bhutan"
  },
  {
    name: "Tibet",
    image: "/images/used/tibet-main-page.avif",
    description: "High-altitude plains, sacred peaks, and centuries-old Buddhist traditions.",
    highlights: ["Mount Kailash", "Lhasa", "Everest Base Camp (North)"],
    link: "/destinations/tibet"
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
    color: "from-sky-100 to-blue-50",
    link: "/services/free-walking-tour"
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Mountain Trekking",
    description: "Guided treks through Everest, Annapurna, Langtang with Sherpa guides.",
    color: "from-blue-100 to-cyan-50",
    link: "/services/trekking"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Peak Climbing",
    description: "Climbing expeditions to Island Peak, Mera Peak, Lobuche summits.",
    color: "from-emerald-100 to-teal-50",
    link: "/services/peak-climbing"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cultural Tours",
    description: "Ancient temples, monasteries, and Himalayan heritage experiences.",
    color: "from-amber-100 to-orange-50",
    link: "/services/multi-day-cultural-tours"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Day Sightseeings",
    description: "Explore Kathmandu Valley's UNESCO heritage sites and hidden gems.",
    color: "from-rose-100 to-pink-50",
    link: "/services/day-sightseeings"
  },
  {
    icon: <Tent className="w-6 h-6" />,
    title: "Jungle Safari",
    description: "Wildlife adventures in Chitwan National Park.",
    color: "from-green-100 to-emerald-50",
    link: "/services/jungle-safari"
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
    rating: 4.9,
    link: "/services/trekking/everest-base-camp-trek"
  },
  {
    name: "Annapurna Circuit",
    duration: "18 Days",
    difficulty: "Challenging",
    altitude: "5,416m",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    rating: 4.8,
    link: "/services/trekking/annapurna-circuit-trek"
  },
  {
    name: "Langtang Valley",
    duration: "10 Days",
    difficulty: "Easy-Moderate",
    altitude: "4,984m",
    price: "$950",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    link: "/services/trekking/langtang-valley-trek"
  },
  {
    name: "Manaslu Circuit",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$1,350",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    link: "/services/trekking/manaslu-circuit-trek"
  },
  {
    name: "Upper Mustang",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "4,010m",
    price: "$1,650",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    link: "/services/trekking/upper-mustang-trek"
  },
  {
    name: "Annapurna Base Camp",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "4,130m",
    price: "$1,150",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    link: "/services/trekking/annapurna-base-camp-trek"
  },
 
];

const testimonials = [
  {
    name: "Carole Munanoa",
    country: "France",
    text: "What truly set this tour apart was the way Shiva explained the coexistence of Hinduism and Buddhism in Kathmandu. He carefully unpacked the history, symbols, and everyday practices of both faiths.",
    trek: "Kathmandu City Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Arian Asgari",
    country: "Iran",
    text: "The Muldai trek is an underrated gem... What really made it special, though, were the people. Shiva and his son are just fantastic; they were so much more than guides, and the whole group felt like a family.",
    trek: "Muldai Trek",
    trekLink: "/services/trekking"
  },
  {
    name: "Sandra Andermatt",
    country: "Switzerland",
    text: "If you're in Kathmandu, do not miss out on the incredible free walking tour... It takes you off the beaten path, offering a chance to explore hidden gems and unusual places that most tourists never get to see.",
    trek: "Free Walking Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Anna Michelle Goksøyr",
    country: "Norway",
    text: "We did the Manaslu Circuit trek and it has been an amazing experience... The guides treated us like princesses, picked flowers for us, and have become friends for life. I deeply recommend traveling with Himkala Adventures.",
    trek: "Manaslu Circuit",
    trekLink: "/services/trekking/manaslu-circuit-trek"
  },
  {
    name: "Aránzazu Gs",
    country: "Spain",
    text: "Shiva is a professional, passionate, friendly, empathetic and excellent guide... he made me discover the Nepalese culture and their way of life, food, superstitions, customs... He transmits good vibes.",
    trek: "Nepal Cultural Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Krystsina Babets",
    country: "Belarus",
    text: "I did Annapurna Base Camp trekking... It was my third trekking experience with Himkala Adventure. Shiva is a very caring, knowledgeable guide and genuinely honest person. You will really have a great experience!",
    trek: "Annapurna Base Camp",
    trekLink: "/services/trekking/annapurna-base-camp-trek"
  },
  {
    name: "Novitri Esna",
    country: "Indonesia",
    text: "I’m a beginner trekker, but Shiva made the Langtang trek feel possible. He was so patient and always checked in... He pointed out langurs, yaks, and special places I would’ve missed. I felt supported the whole way.",
    trek: "Langtang Valley",
    trekLink: "/services/trekking/langtang-valley-trek"
  },
  {
    name: "Cangiamila Arianna",
    country: "Italy",
    text: "Nepal is a country rich in history and culture and Shiva is the best person you could ever ask to take you through all of that... Another great thing about Shiva is that he devolves part of his earnings towards the rebuilding of his village.",
    trek: "Kathmandu City Tour",
    trekLink: "/nepal-travel-packages"
  },

    {
    name: "Sébastien Schillé",
    country: "UK",
    text: "I had an amazing and unforgettable experience with Himkala Adventure!... I came to Shiva, Himkala Adventure's director, to ask him what he thought was the best next step. Before I knew it, he had come up with a complete itinerary... Shiva was an excellent guide! He is easy going, kind and very knowledgeable.",
    trek: "Valley Fringe Trek",
    trekLink: "/services/trekking"
  },
  {
    name: "Suffel Schatz",
    country: "Germany",
    text: "We did a 7day hiking tour with Himkala adventures... We had an amazing time, great conversations with our guide Sabinaya about Nepal's culture, history, everyday life, etc. Personal yet always professional. Thanks for that outstanding experience which we will never forget.",
    trek: "Ghorepani Poonhill Trek",
    trekLink: "/services/trekking/poon-hill-trek"
  },
  {
    name: "Nina Dupuy",
    country: "France",
    text: "I had the incredible opportunity to do the Everest Base Camp with this company... The organization was impeccable. My guide, Khadga, was extremely attentive and helpful... Reaching Base Camp was a triumphant moment. I will 100% do it again!",
    trek: "Everest Base Camp",
    trekLink: "/services/trekking/everest-base-camp-trek"
  },
  {
    name: "Dorota Grabek",
    country: "Spain",
    text: "Himkala Adventure organized for me and my friends 10 days trekking to Annapurna Base Camp. Our guide was very supportive and professional, he afforded us unforgettable and safe Himalayan trekking!",
    trek: "Annapurna Base Camp",
    trekLink: "/services/trekking/annapurna-base-camp-trek"
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
              src="/images/used/hero.avif"
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
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 fill-white" /> 2500+ Adventurers Since 2015
              </Badge>
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight mb-6 md:mb-8">
  Nepal Trekking & 
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic"> Cultural Tours</span>
</h1>
<p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light">
  Expert-guided adventures in Nepal, Bhutan, and Tibet; from Everest treks to Kathmandu city walks.
</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
                <Link href="/services/trekking">
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
                    <Compass className="mr-2 w-5 h-5 md:w-6 md:h-6" /> Explore Treks
                  </Button>
                </Link>
                <Link href="/contact">
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
                    <MessageCircle className="mr-2 w-5 h-5 md:w-6 md:h-6" /> Customize Your Trip
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "11+", label: "Years Experience", icon: <Award className="w-4 h-4" /> },
                  { value: "2500+", label: "Happy Travelers", icon: <Users className="w-4 h-4" /> },
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
        <MapPin className="w-3 h-3 mr-1.5" /> WHERE WE GO
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2940] mb-6">
        Nepal, Bhutan & Tibet
      </h2>
      <p className="text-base md:text-lg text-slate-600 leading-relaxed">
        Trekking, city tours, and cultural experiences across the Himalayas.
      </p>
    </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                {destinations.map((dest, i) => (
                  <Link
                    key={`${dest.name}-${i}`}
                    href={dest.link}
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
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {destinations.map((dest, i) => (
                <Link
                  key={dest.name}
                  href={dest.link}
                  className="relative h-[500px] rounded-3xl overflow-hidden group"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1200px) 33vw, 400px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/30 to-transparent" />
                  <div className="absolute bottom-0 p-8 w-full">
                    
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
<section id="services" className="py-16 md:py-32 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
      <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
        <CheckCircle className="w-3 h-3 mr-1.5" /> WHAT WE OFFER
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2940] mb-6">
        Treks, Tours & Cultural Experiences
      </h2>
      <p className="text-base md:text-lg text-slate-600 leading-relaxed">
        Guided trekking in Nepal, city tours in Kathmandu, and cultural journeys through Bhutan and Tibet.
      </p>
    </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={service.link}
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
                    <div className="text-[#2d6a8a] hover:text-[#0f2940] inline-flex items-center group">
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
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
          <Star className="w-3 h-3 mr-1.5 fill-[#C5E0ED]" /> TREKKING ROUTES
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
          Nepal's Finest Treks
        </h2>
        <p className="text-white/70 text-base">
          Everest Base Camp, Annapurna Circuit, and classic Himalayan trails.
        </p>
      </div>
              
              <div className="flex gap-4">
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
            </div>

            {/* Mobile: Always horizontal scroll */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                {popularTreks.map((trek, i) => (
                  <Link
                    key={trek.name}
                    href={trek.link}
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
                        <div className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full hover:from-[#b3d6e6] hover:to-[#6baac9] py-4 text-center transition-all duration-300">
                          View Details
                        </div>
                      </CardContent>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop with arrow navigation */}
            <div className="hidden md:block relative">
              {/* Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-8 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                <div className="flex gap-8 pr-8">
                  {popularTreks.map((trek, i) => (
                    <Link
                      key={trek.name}
                      href={trek.link}
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
                          <div className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full hover:from-[#b3d6e6] hover:to-[#6baac9] py-4 text-center transition-all duration-300">
                            View Details
                          </div>
                        </CardContent>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
<section className="py-16 md:py-32 bg-gradient-to-b from-slate-50 to-white">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <div>
        <Badge className="mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1.5 px-4 text-xs font-semibold">
          <ShieldCheck className="w-3 h-3 mr-1.5" /> WHY CHOOSE US
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2940] mb-6">
          Local Knowledge, Global Standards
        </h2>
        <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
          Born in Gorkha, based in Kathmandu, we offer authentic Himalayan experiences with professional service.
        </p>

        <div className="space-y-6">
          {[
            { 
              title: "Local Experts", 
              desc: "Nepali guides with deep knowledge of trails, culture, and hidden gems.",
              icon: <Users className="w-5 h-5" />
            },
            { 
              title: "Authentic City Tours", 
              desc: "Pioneers of Kathmandu's Free Walking Tours, see the real Nepal beyond the guidebooks.",
              icon: <MapPin className="w-5 h-5" />
            },
            { 
              title: "Reliable & Safe", 
              desc: "24/7 support, experienced guides, and careful planning for peace of mind.",
              icon: <ShieldCheck className="w-5 h-5" />
            },
            { 
              title: "Community Focused", 
              desc: "We support local families and sustainable tourism across Nepal, Bhutan, and Tibet.",
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
                    src="/images/used/why_choose_us.avif"
                    alt="Professional Himalayan Expedition Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940] to-transparent p-6 md:p-8">
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
    <div className="text-white mb-4">
      <div className="font-bold text-lg mb-2">2500+ Travelers Since 2015</div>
      <div className="text-white/70 text-sm">from 30+ countries around the world</div>
    </div>
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="text-white font-bold ml-2 text-lg">4.8/5 Rating</span>
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
        <Star className="w-3 h-3 mr-1.5 fill-[#2d6a8a]" /> TRAVELER STORIES
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2940] mb-6">
        Real Travelers, Real Experiences
      </h2>
      <p className="text-base md:text-lg text-slate-600 leading-relaxed">
        What guests say about their treks, city tours, and cultural journeys with us.
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
                        <Link href={testimonial.trekLink}>
                          <Badge className="bg-gradient-to-r from-[#C5E0ED]/20 to-[#7fb8d4]/20 text-[#0f2940] border-[#C5E0ED]/40 text-xs w-fit hover:bg-[#C5E0ED]/40 cursor-pointer transition-colors">
                            {testimonial.trek}
                          </Badge>
                        </Link>
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
                        <Link href={testimonial.trekLink}>
                          <Badge className="bg-gradient-to-r from-[#C5E0ED]/20 to-[#7fb8d4]/20 text-[#0f2940] border-[#C5E0ED]/40 text-xs w-fit font-medium hover:bg-[#C5E0ED]/40 cursor-pointer transition-colors">
                            {testimonial.trek}
                          </Badge>
                        </Link>
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
                    Join hundreds of satisfied travelers who've shared their experiences. 
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

      {/* Updated CSS for infinite scroll animation */}
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
          animation: infinite-scroll 150s linear infinite;
        }

        .animate-infinite-scroll-slow-desktop {
          display: flex;
          width: max-content;
          animation: infinite-scroll 150s linear infinite;
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