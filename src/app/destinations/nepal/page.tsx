"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronRight,
  Calendar,
  TrendingUp,
  Sunrise,
  Snowflake,
  Camera,
  Heart,
  Tent,
  Compass,
  Award,
  ShieldCheck,
  Phone,
  Plane,
  Building,
  Utensils,
  Map,
  Binoculars,
  TreePine,
  Bird,
  Footprints,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CheckCircle,
  Landmark,
  Castle,
  Church,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trekkingPackages = [
  {
    name: "Everest Base Camp Trek",
    duration: "14 Days",
    difficulty: "Moderate",
    altitude: "5,364m",
    price: "$1,450",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    region: "Everest Region",
    highlights: ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche Monastery"],
    description: "Walk in the footsteps of legends to the base of the world's highest peak.",
  },
  {
    name: "Annapurna Circuit Trek",
    duration: "18 Days",
    difficulty: "Challenging",
    altitude: "5,416m",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    rating: 4.8,
    region: "Annapurna Region",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Valley", "Tatopani Hot Springs"],
    description: "The classic Himalayan circuit crossing the legendary Thorong La Pass.",
  },
  {
    name: "Manaslu Circuit Trek",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$1,350",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    rating: 4.9,
    region: "Manaslu Region",
    highlights: ["Larkya La Pass", "Tibetan Villages", "Remote Trails", "Buddhist Monasteries"],
    description: "Circle the world's eighth highest mountain through pristine wilderness.",
    link: "/trekking-in-nepal/manaslu-circuit-trek",
  },
  {
    name: "Langtang Valley Trek",
    duration: "10 Days",
    difficulty: "Easy-Moderate",
    altitude: "4,984m",
    price: "$950",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    region: "Langtang Region",
    highlights: ["Kyanjin Gompa", "Langtang Village", "Cheese Factory", "Tserko Ri"],
    description: "Explore the 'Valley of Glaciers' just north of Kathmandu.",
  },
  {
    name: "Upper Mustang Trek",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "3,840m",
    price: "$1,650",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    rating: 4.9,
    region: "Mustang Region",
    highlights: ["Lo Manthang", "Ancient Caves", "Tibetan Culture", "Desert Landscape"],
    description: "Journey to the forbidden kingdom of Lo in the rain shadow of the Himalayas.",
  },
  {
    name: "Ghorepani Poon Hill Trek",
    duration: "5 Days",
    difficulty: "Easy",
    altitude: "3,210m",
    price: "$550",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    region: "Annapurna Region",
    highlights: ["Poon Hill Sunrise", "Rhododendron Forests", "Gurung Villages", "Mountain Panorama"],
    description: "The perfect short trek with stunning sunrise views over the Annapurna range.",
  },
];

const peakClimbing = [
  {
    name: "Island Peak Climbing",
    duration: "18 Days",
    difficulty: "Technical",
    altitude: "6,189m",
    price: "$2,450",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    highlights: ["Summit Experience", "Technical Training", "Everest Views", "Glacier Crossing"],
  },
  {
    name: "Mera Peak Expedition",
    duration: "18 Days",
    difficulty: "Moderate-Technical",
    altitude: "6,476m",
    price: "$2,650",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop",
    rating: 4.9,
    highlights: ["Highest Trekking Peak", "5 x 8000m Views", "Remote Wilderness", "Non-technical Summit"],
  },
  {
    name: "Lobuche Peak Climbing",
    duration: "16 Days",
    difficulty: "Technical",
    altitude: "6,119m",
    price: "$2,350",
    image: "https://images.unsplash.com/photo-1549492423-400259a2e574?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    highlights: ["Technical Challenge", "EBC Trail", "Khumbu Glacier", "Stunning Views"],
  },
];

const cityTours = [
  {
    name: "Kathmandu Heritage Tour",
    duration: "1 Day",
    price: "$85",
    image: "https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Pashupatinath", "Boudhanath Stupa", "Swayambhunath", "Kathmandu Durbar Square"],
    description: "Explore 4 UNESCO World Heritage Sites in one day.",
    icon: <Landmark className="w-5 h-5" />,
    color: "from-blue-100 to-blue-50",
  },
  {
    name: "Bhaktapur & Patan Day Tour",
    duration: "1 Day",
    price: "$95",
    image: "https://images.unsplash.com/photo-1587734195503-904137cec4a6?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Golden Temple", "Traditional Crafts"],
    description: "Discover ancient Newari architecture and living culture.",
    icon: <Castle className="w-5 h-5" />,
    color: "from-amber-100 to-amber-50",
  },
  {
    name: "Nagarkot Sunrise Tour",
    duration: "1 Day",
    price: "$120",
    image: "https://images.unsplash.com/photo-1627900749201-c6bc7226a3a0?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Sunrise over Himalayas", "Everest Range View", "Countryside Drive", "Breakfast with View"],
    description: "Witness breathtaking sunrise over the Himalayan range.",
    icon: <Sunrise className="w-5 h-5" />,
    color: "from-orange-100 to-orange-50",
  },
  {
    name: "Pokhara City Tour",
    duration: "1 Day",
    price: "$75",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2032&auto=format&fit=crop",
    highlights: ["Phewa Lake Boating", "World Peace Pagoda", "Davis Falls", "Gupteshwor Cave"],
    description: "Experience the beauty of Nepal's adventure capital.",
    icon: <Globe className="w-5 h-5" />,
    color: "from-teal-100 to-teal-50",
  },
  {
    name: "Lumbini Day Tour",
    duration: "1 Day",
    price: "$180",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Maya Devi Temple", "Ashoka Pillar", "World Peace Pagoda", "Monastic Zone"],
    description: "Pilgrimage to the birthplace of Lord Buddha.",
    icon: <Church className="w-5 h-5" />,
    color: "from-green-100 to-green-50",
  },
  {
    name: "Chitwan Safari Day Tour",
    duration: "1 Day",
    price: "$150",
    image: "https://images.unsplash.com/photo-1585016495481-91613a3ab2f1?q=80&w=2071&auto=format&fit=crop",
    highlights: ["Elephant Safari", "One-horned Rhino", "Tharu Culture", "Bird Watching"],
    description: "Wildlife adventure in Nepal's famous jungle.",
    icon: <Bird className="w-5 h-5" />,
    color: "from-emerald-100 to-emerald-50",
  },
];

const whyNepal = [
  {
    icon: <Mountain className="w-5 h-5" />,
    title: "8 of World's 14 Highest Peaks",
    description: "Home to Mount Everest and seven other 8,000m+ giants.",
  },
  {
    icon: <Building className="w-5 h-5" />,
    title: "UNESCO World Heritage Sites",
    description: "Ten UNESCO sites including ancient temples and stupas.",
  },
  {
    icon: <Bird className="w-5 h-5" />,
    title: "Incredible Biodiversity",
    description: "From subtropical jungles to alpine meadows with rare wildlife.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Warm Hospitality",
    description: "Experience legendary Nepali hospitality with 'Namaste'.",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Adventure Capital",
    description: "Trekking, climbing, rafting, and endless adventure possibilities.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Spiritual Heritage",
    description: "Birthplace of Buddha, land of ancient traditions.",
  },
];

const regions = [
  {
    name: "Everest Region",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
    treks: 8,
    peaks: 5,
    description: "Home to the world's highest peak and legendary Sherpa people.",
  },
  {
    name: "Annapurna Region",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    treks: 12,
    peaks: 4,
    description: "Most diverse trekking region with iconic circuits.",
  },
  {
    name: "Langtang Region",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    treks: 5,
    peaks: 3,
    description: "The 'Valley of Glaciers' offers pristine wilderness.",
  },
  {
    name: "Manaslu Region",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    treks: 3,
    peaks: 2,
    description: "Remote area with authentic Tibetan culture.",
  },
];

export default function NepalPage() {
  const [trekScrollPosition, setTrekScrollPosition] = React.useState(0);
  const [peakScrollPosition, setPeakScrollPosition] = React.useState(0);
  const [cityTourScrollPosition, setCityTourScrollPosition] = React.useState(0);
  const [regionScrollPosition, setRegionScrollPosition] = React.useState(0);

  const trekScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const peakScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const cityTourScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const regionScrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Fixed scroll functions - handle null refs properly
  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>, setPosition?: React.Dispatch<React.SetStateAction<number>>) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      if (setPosition) {
        setPosition(ref.current.scrollLeft - scrollAmount);
      }
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>, setPosition?: React.Dispatch<React.SetStateAction<number>>) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      if (setPosition) {
        setPosition(ref.current.scrollLeft + scrollAmount);
      }
    }
  };

  // Separate functions for each section to avoid type issues
  const scrollRegionLeft = () => scrollLeft(regionScrollContainerRef, setRegionScrollPosition);
  const scrollRegionRight = () => scrollRight(regionScrollContainerRef, setRegionScrollPosition);
  const scrollTrekLeft = () => scrollLeft(trekScrollContainerRef, setTrekScrollPosition);
  const scrollTrekRight = () => scrollRight(trekScrollContainerRef, setTrekScrollPosition);
  const scrollPeakLeft = () => scrollLeft(peakScrollContainerRef, setPeakScrollPosition);
  const scrollPeakRight = () => scrollRight(peakScrollContainerRef, setPeakScrollPosition);
  const scrollCityTourLeft = () => scrollLeft(cityTourScrollContainerRef, setCityTourScrollPosition);
  const scrollCityTourRight = () => scrollRight(cityTourScrollContainerRef, setCityTourScrollPosition);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
{/* Hero Section - Simplified & Larger Heading */}
<section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
      alt="Nepal Himalayas"
      fill
      className="object-cover"
      priority
      quality={85}
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
  </div>

  <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
    <div className="max-w-5xl mx-auto text-center w-full">
      <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 py-2 px-4 text-sm font-medium">
        <Star className="w-4 h-4 mr-2 fill-white" /> 5000+ Adventurers Since 2012
      </Badge>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
        DISCOVER <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
          NEPAL
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
        Where ancient temples meet soaring peaks. Experience the birthplace of Buddha, 
        the roof of the world, and the warmest hospitality on Earth.
      </p>
    </div>
  </div>
</section>

      {/* About Nepal - Optimized for Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <MapPin className="w-3 h-3 mr-1.5" /> ABOUT NEPAL
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 leading-tight">
                A Land of Endless Wonder
              </h2>
              <div className="space-y-3">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Nestled between India and China, <strong className="text-[#0f2940]">Nepal</strong> is a small country 
                  with an enormous presence. From the jungles of the Terai to the summits of 
                  the Himalayas, this nation offers astonishing diversity.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Home to <strong className="text-[#0f2940]">eight of the world's 8,000-meter peaks</strong>, including the 
                  legendary Mount Everest, Nepal has been the ultimate destination for adventurers. 
                  It's also the <strong className="text-[#0f2940]">birthplace of Buddha</strong> and a living museum of traditions.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Whether you seek high-altitude trekking, ancient monasteries, jungle safaris, 
                  or genuine human connection, Nepal delivers transformative experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=2070&auto=format&fit=crop"
                    alt="Kathmandu Temple"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1585016495481-91613a3ab2f1?q=80&w=2071&auto=format&fit=crop"
                    alt="Chitwan Wildlife"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop"
                    alt="Prayer Flags"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2032&auto=format&fit=crop"
                    alt="Pokhara Lake"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Tours Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <Landmark className="w-3 h-3 mr-1.5" /> CITY TOURS
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940]">
                Cultural & Heritage Experiences
              </h2>
              <p className="text-slate-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                Discover Nepal's rich heritage with our expert-guided day tours.
              </p>
            </div>
            <Link href="/city-tours">
              <Button variant="outline" className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 font-bold group rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                View All Tours <ChevronRightIcon className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={cityTourScrollContainerRef}
            >
              {cityTours.map((tour, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] mr-4 last:mr-0 snap-center">
                  <Card className={`bg-gradient-to-br ${tour.color} border-0 h-full rounded-xl overflow-hidden shadow-lg`}>
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover"
                        sizes="85vw"
                        quality={85}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-[#2d6a8a] border-none font-bold text-xs">
                          {tour.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/80 rounded-lg flex items-center justify-center text-[#2d6a8a]">
                          {tour.icon}
                        </div>
                        <h4 className="text-base font-bold text-[#0f2940] line-clamp-1">{tour.name}</h4>
                      </div>
                      <p className="text-slate-600 text-xs mb-3 line-clamp-2">{tour.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {tour.highlights.slice(0, 2).map((h, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/60 text-[#2d6a8a] text-xs">
                            {h}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-[#0f2940]">{tour.price}</span>
                        <Link href={`/city-tours/${tour.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          <Button size="sm" className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={scrollCityTourLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollCityTourRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityTours.map((tour, i) => (
              <Card key={i} className={`bg-gradient-to-br ${tour.color} border-0 h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-[#2d6a8a] border-none font-bold">
                      {tour.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center text-[#2d6a8a]">
                      {tour.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2940]">{tour.name}</h4>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tour.highlights.slice(0, 3).map((h, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white/60 text-[#2d6a8a] text-xs">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#0f2940]">{tour.price}</span>
                    <Link href={`/city-tours/${tour.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button size="sm" className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nepal - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7fb8d4] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <CheckCircle className="w-3 h-3 mr-1.5" /> WHY VISIT NEPAL
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
              A Country Like No Other
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              From world-record peaks to ancient kingdoms, Nepal offers unique experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyNepal.map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm h-full rounded-xl hover:bg-white/10 transition-all hover:scale-[1.02]">
                <CardContent className="p-4 sm:p-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] mb-3">
                    <div className="scale-125">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trekking Regions - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <Compass className="w-3 h-3 mr-1.5" /> TREKKING REGIONS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              Explore Nepal's Iconic Regions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Each region offers unique landscapes, cultures, and trekking experiences.
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={regionScrollContainerRef}
            >
              {regions.map((region, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center">
                  <div className="relative h-[350px] rounded-2xl overflow-hidden">
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      className="object-cover"
                      sizes="85vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/30 to-transparent" />
                    <div className="absolute bottom-0 p-5 w-full">
                      <Badge className="mb-3 bg-white text-[#0f2940] border-none px-3 py-1 text-sm font-bold">
                        {region.treks} Treks • {region.peaks} Peaks
                      </Badge>
                      <h3 className="text-xl font-serif text-white mb-2">{region.name}</h3>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                        {region.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll Buttons for Mobile */}
            <button
              onClick={scrollRegionLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRegionRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((region, i) => (
              <div key={i} className="group">
                <div className="relative h-72 rounded-xl overflow-hidden cursor-pointer">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 1024px) 25vw, 25vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/30 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <Badge className="mb-2 bg-white text-[#0f2940] border-none text-sm font-bold">
                      {region.treks} Treks • {region.peaks} Peaks
                    </Badge>
                    <h4 className="text-lg font-bold text-white mb-1.5">{region.name}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{region.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <Calendar className="w-3 h-3 mr-1.5" /> WHEN TO VISIT
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              Best Time to Visit Nepal
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                season: "Spring",
                months: "March - May",
                icon: <Sunrise className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-pink-100 to-orange-100",
                borderColor: "border-pink-200",
                highlights: ["Rhododendron blooms", "Clear skies", "Warm temperatures", "Pre-monsoon trekking"],
                rating: "Excellent",
              },
              {
                season: "Summer/Monsoon",
                months: "June - August",
                icon: <TreePine className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-green-100 to-emerald-100",
                borderColor: "border-green-200",
                highlights: ["Lush landscapes", "Fewer tourists", "Best for Mustang", "Cultural festivals"],
                rating: "Moderate",
              },
              {
                season: "Autumn",
                months: "September - November",
                icon: <Mountain className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-amber-100 to-orange-100",
                borderColor: "border-amber-200",
                highlights: ["Best visibility", "Peak trekking season", "Dashain festival", "Perfect weather"],
                rating: "Best",
              },
              {
                season: "Winter",
                months: "December - February",
                icon: <Snowflake className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-blue-100 to-cyan-100",
                borderColor: "border-blue-200",
                highlights: ["Clear views", "Fewer crowds", "Lower altitude treks", "Budget-friendly"],
                rating: "Good",
              },
            ].map((season, i) => (
              <Card key={i} className={`bg-gradient-to-br ${season.color} ${season.borderColor} border h-full rounded-xl hover:scale-[1.02] transition-transform`}>
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/80 rounded-lg flex items-center justify-center text-[#2d6a8a]">
                      {season.icon}
                    </div>
                    <Badge className={`
                      ${season.rating === "Best" ? "bg-green-500 text-white" : 
                        season.rating === "Excellent" ? "bg-blue-500 text-white" : 
                        season.rating === "Good" ? "bg-amber-500 text-white" : "bg-slate-500 text-white"
                      } border-none text-xs
                    `}>
                      {season.rating}
                    </Badge>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0f2940] mb-1">{season.season}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mb-2.5">{season.months}</p>
                  <ul className="space-y-1.5">
                    {season.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <Star className="w-3 h-3 text-[#2d6a8a] fill-[#C5E0ED]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trekking Packages - Enhanced */}
      <section id="packages" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-5">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <Star className="w-3 h-3 mr-1.5 fill-[#2d6a8a]" /> TREKKING ADVENTURES
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940]">
                Himalayan Treks
              </h2>
              <p className="text-slate-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                From easy hill walks to challenging high-altitude circuits.
              </p>
            </div>
            <Link href="/trekking-in-nepal">
              <Button variant="outline" className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 font-bold group rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                View All Treks <ChevronRightIcon className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={trekScrollContainerRef}
            >
              {trekkingPackages.map((trek, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center">
                  <Card className="bg-white border-[#C5E0ED]/30 h-full rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={trek.image}
                        alt={trek.name}
                        fill
                        className="object-cover"
                        sizes="85vw"
                        quality={85}
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-[#C5E0ED] text-[#0f2940] border-none font-bold text-xs">
                          {trek.region}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3 bg-[#0f2940]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {trek.rating}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="text-base font-bold text-[#0f2940] mb-2 line-clamp-1">{trek.name}</h4>
                      <p className="text-slate-500 text-xs mb-3 line-clamp-2">{trek.description}</p>
                      <div className="grid grid-cols-2 gap-1.5 mb-3">
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <Clock className="w-3 h-3 text-[#2d6a8a]" /> {trek.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <TrendingUp className="w-3 h-3 text-[#2d6a8a]" /> {trek.altitude}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                          <Footprints className="w-3 h-3 text-[#2d6a8a]" /> {trek.difficulty}
                        </div>
                        <div className="text-[#0f2940] font-bold text-base">{trek.price}</div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {trek.highlights.slice(0, 3).map((h, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-[#f0f7fa] text-[#2d6a8a] text-xs">
                            {h}
                          </Badge>
                        ))}
                      </div>
                      <Link href={trek.link || "/contact"}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] hover:from-[#b3d6e6] hover:to-[#6baac9] text-[#0f2940] font-bold rounded-full py-2 text-sm">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={scrollTrekLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollTrekRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {trekkingPackages.map((trek, i) => (
              <Card key={i} className="bg-white border-[#C5E0ED]/30 h-full rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all group hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={trek.image}
                    alt={trek.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 1024px) 33vw, 25vw"
                    quality={85}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-[#C5E0ED] text-[#0f2940] border-none font-bold text-sm">
                      {trek.region}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#0f2940]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {trek.rating}
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-[#0f2940] mb-2 line-clamp-1">{trek.name}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mb-3 line-clamp-2">{trek.description}</p>
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                      <Clock className="w-3 h-3 text-[#2d6a8a]" /> {trek.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                      <TrendingUp className="w-3 h-3 text-[#2d6a8a]" /> {trek.altitude}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                      <Footprints className="w-3 h-3 text-[#2d6a8a]" /> {trek.difficulty}
                    </div>
                    <div className="text-[#0f2940] font-bold text-base sm:text-lg">{trek.price}</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {trek.highlights.slice(0, 3).map((h, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#f0f7fa] text-[#2d6a8a] text-xs">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <Link href={trek.link || "/contact"}>
                    <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] hover:from-[#b3d6e6] hover:to-[#6baac9] text-[#0f2940] font-bold rounded-full py-2 text-sm">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Peak Climbing - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-5">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <TrendingUp className="w-3 h-3 mr-1.5" /> PEAK CLIMBING
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                Summit Your Dreams
              </h2>
              <p className="text-white/70 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                Professionally guided peak climbing expeditions.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="outline" className="text-[#C5E0ED] border-[#C5E0ED]/50 hover:bg-[#C5E0ED]/10 font-bold group rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                Enquire Now <ChevronRightIcon className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={peakScrollContainerRef}
            >
              {peakClimbing.map((peak, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={peak.image}
                        alt={peak.name}
                        fill
                        className="object-cover"
                        sizes="85vw"
                        quality={85}
                      />
                      <div className="absolute top-3 right-3 bg-[#0f2940]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {peak.rating}
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-orange-500 text-white border-none font-bold text-xs">
                          {peak.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-base font-bold text-white mb-3 line-clamp-1">{peak.name}</h3>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-white/70 text-xs">
                          <Clock className="w-3 h-3 text-[#C5E0ED]" /> {peak.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-white/70 text-xs">
                          <TrendingUp className="w-3 h-3 text-[#C5E0ED]" /> {peak.altitude}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {peak.highlights.map((h, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-white/80 text-xs">
                            {h}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#C5E0ED]">{peak.price}</span>
                        <Link href="/contact">
                          <Button size="sm" className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={scrollPeakLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollPeakRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {peakClimbing.map((peak, i) => (
              <Card key={i} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={peak.image}
                    alt={peak.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 1024px) 33vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute top-3 right-3 bg-[#0f2940]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {peak.rating}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-orange-500 text-white border-none font-bold text-sm">
                      {peak.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3">{peak.name}</h4>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock className="w-3 h-3 text-[#C5E0ED]" /> {peak.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <TrendingUp className="w-3 h-3 text-[#C5E0ED]" /> {peak.altitude}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {peak.highlights.map((h, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-white/10 text-white/80 text-xs">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#C5E0ED]">{peak.price}</span>
                    <Link href="/contact">
                      <Button size="sm" className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <ShieldCheck className="w-3 h-3 mr-1.5" /> OUR SERVICES
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              What We Provide
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprehensive support for a safe, comfortable, and unforgettable experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Licensed Guides", desc: "Government-certified guides" },
              { icon: <Tent className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Accommodation", desc: "Best available teahouses" },
              { icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />, title: "All Meals", desc: "Three meals daily on trek" },
              { icon: <Map className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Permits & Fees", desc: "All trekking permits" },
              { icon: <Plane className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Transportation", desc: "Airport transfers included" },
              { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Porter Service", desc: "1 porter per 2 trekkers" },
              { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, title: "First Aid Kit", desc: "Medical supplies" },
              { icon: <Binoculars className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Equipment", desc: "Sleeping bag & jacket" },
            ].map((item, i) => (
              <Card key={i} className="bg-white border-[#C5E0ED]/30 h-full rounded-lg hover:shadow-md transition-all hover:scale-[1.02]">
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] mx-auto mb-1.5 sm:mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#0f2940] text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs line-clamp-2">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}