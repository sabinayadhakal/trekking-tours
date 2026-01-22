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
  Smile,
  Cloud,
  Shield,
  Home,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const culturalTours = [
  {
    name: "Delightful Bhutan Tour",
    duration: "5 Days",
    difficulty: "Easy",
    altitude: "2,320m",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    region: "Paro • Thimphu",
    highlights: ["Tiger's Nest", "Thimphu Dzong", "Buddha Dordenma", "Traditional Markets"],
    description: "Perfect introduction to Bhutan's cultural highlights.",
    link: "/bhutan-tours/delightful-bhutan-tour",
  },
  {
    name: "Bhutan Cultural Tour",
    duration: "11 Days",
    difficulty: "Easy-Moderate",
    altitude: "3,120m",
    price: "$2,450",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    region: "Western Bhutan",
    highlights: ["Punakha Dzong", "Gangtey Valley", "Haa Valley", "Dochula Pass"],
    description: "Comprehensive exploration of Bhutan's cultural heritage.",
  },
  {
    name: "Short and Sweet Bhutan Tour",
    duration: "3 Days",
    difficulty: "Easy",
    altitude: "2,320m",
    price: "$850",
    image: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop",
    rating: 4.7,
    region: "Paro Valley",
    highlights: ["Tiger's Nest Hike", "Paro Dzong", "National Museum", "Farmhouse Visit"],
    description: "Perfect short visit to experience Bhutan's essence.",
  },
  {
    name: "3 Nights 4 Days Bhutan Tour",
    duration: "4 Days",
    difficulty: "Easy",
    altitude: "2,320m",
    price: "$950",
    image: "https://images.unsplash.com/photo-1575517111478-7b6f4746d1a9?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    region: "Paro • Thimphu",
    highlights: ["Tiger's Nest", "Thimphu City", "Cheri Monastery", "Traditional Arts"],
    description: "Extended cultural experience in Bhutan.",
  },
  {
    name: "Tiger's Nest Day Hiking",
    duration: "1 Day",
    difficulty: "Moderate",
    altitude: "3,120m",
    price: "$300",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    region: "Paro Valley",
    highlights: ["Taktsang Monastery", "Cliffside Temple", "Sacred Caves", "Panoramic Views"],
    description: "Iconic hike to Bhutan's most famous monastery.",
  },
  {
    name: "Bhutan Festival Tour",
    duration: "7 Days",
    difficulty: "Easy",
    altitude: "2,800m",
    price: "$1,650",
    image: "https://images.unsplash.com/photo-1573935146153-f632c1f0e7f8?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    region: "Various Dzongs",
    highlights: ["Paro Tshechu", "Thimphu Festival", "Mask Dances", "Cultural Performances"],
    description: "Experience Bhutan's vibrant religious festivals.",
  },
];

const trekkingPackages = [
  {
    name: "Druk Path Trek",
    duration: "6 Days",
    difficulty: "Moderate",
    altitude: "4,200m",
    price: "$1,350",
    image: "https://images.unsplash.com/photo-1575517111478-7b6f4746d1a9?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    region: "Paro to Thimphu",
    highlights: ["Jele Dzong", "Jangchu Lakha", "Jimilang Tsho", "Thimphu Valley"],
    description: "Classic trek connecting Paro and Thimphu through alpine lakes.",
  },
  {
    name: "Snowman Trek",
    duration: "25 Days",
    difficulty: "Challenging",
    altitude: "5,320m",
    price: "$5,800",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    region: "Lunana Region",
    highlights: ["Laya Village", "Lunana Region", "14 High Passes", "Remote Valleys"],
    description: "One of the world's most difficult and rewarding treks.",
  },
  {
    name: "Jomolhari Trek",
    duration: "9 Days",
    difficulty: "Moderate-Challenging",
    altitude: "4,940m",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    region: "Paro Region",
    highlights: ["Jomolhari Base Camp", "Jichu Drake", "Lingzhi Village", "Yak Herder Camps"],
    description: "Trek to the base of Bhutan's sacred mountain.",
  },
];

const dayTours = [
  {
    name: "Thimphu City Tour",
    duration: "1 Day",
    price: "$120",
    image: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop",
    highlights: ["Buddha Dordenma", "Tashichho Dzong", "Folk Heritage Museum", "National Memorial Chorten"],
    description: "Explore Bhutan's capital city and its landmarks.",
    icon: <Building className="w-5 h-5" />,
    color: "from-blue-100 to-blue-50",
  },
  {
    name: "Punakha Valley Tour",
    duration: "1 Day",
    price: "$150",
    image: "https://images.unsplash.com/photo-1573935146153-f632c1f0e7f8?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Punakha Dzong", "Phochu-Mochu Confluence", "Suspension Bridge", "Chimi Lhakhang"],
    description: "Visit Bhutan's ancient capital and fertility temple.",
    icon: <Castle className="w-5 h-5" />,
    color: "from-amber-100 to-amber-50",
  },
  {
    name: "Paro Valley Exploration",
    duration: "1 Day",
    price: "$110",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Paro Dzong", "National Museum", "Kyichu Lhakhang", "Traditional Farmhouse"],
    description: "Discover the cultural heart of Bhutan.",
    icon: <Home className="w-5 h-5" />,
    color: "from-green-100 to-green-50",
  },
  {
    name: "Dochula Pass & Temple",
    duration: "1 Day",
    price: "$130",
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=2070&auto=format&fit=crop",
    highlights: ["108 Chortens", "Himalayan Views", "Druk Wangyal Temple", "Rhododendron Forests"],
    description: "Scenic drive to the sacred mountain pass.",
    icon: <Mountain className="w-5 h-5" />,
    color: "from-purple-100 to-purple-50",
  },
  {
    name: "Gangtey Valley Nature",
    duration: "1 Day",
    price: "$180",
    image: "https://images.unsplash.com/photo-1575517111478-7b6f4746d1a9?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Black-necked Cranes", "Gangtey Monastery", "Nature Trails", "Valley Views"],
    description: "Visit the beautiful Phobjikha Valley.",
    icon: <Bird className="w-5 h-5" />,
    color: "from-emerald-100 to-emerald-50",
  },
  {
    name: "Bhutanese Cooking Class",
    duration: "1 Day",
    price: "$95",
    image: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop",
    highlights: ["Ema Datshi", "Red Rice", "Momos", "Butter Tea"],
    description: "Learn to cook authentic Bhutanese cuisine.",
    icon: <Utensils className="w-5 h-5" />,
    color: "from-red-100 to-red-50",
  },
];

const whyBhutan = [
  {
    icon: <Smile className="w-5 h-5" />,
    title: "Happiest Country in Asia",
    description: "Ranked #1 in Asia and #8 globally for happiness.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Carbon Negative Country",
    description: "The world's only carbon-negative nation.",
  },
  {
    icon: <Flag className="w-5 h-5" />,
    title: "Gross National Happiness",
    description: "Development philosophy prioritizing well-being over GDP.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Preserved Culture",
    description: "Traditional dress and architecture preserved by law.",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Last Shangri-La",
    description: "Pristine landscapes and untouched traditions.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Vajrayana Buddhism",
    description: "Spiritual home of Tantric Buddhism.",
  },
];

const regions = [
  {
    name: "Paro Valley",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop",
    tours: 8,
    treks: 3,
    description: "Gateway to Bhutan with Tiger's Nest Monastery.",
  },
  {
    name: "Thimphu",
    image: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop",
    tours: 12,
    treks: 2,
    description: "Capital city blending tradition with modernity.",
  },
  {
    name: "Punakha",
    image: "https://images.unsplash.com/photo-1573935146153-f632c1f0e7f8?q=80&w=2070&auto=format&fit=crop",
    tours: 6,
    treks: 1,
    description: "Ancient capital with majestic dzong at river confluence.",
  },
  {
    name: "Bumthang",
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=2070&auto=format&fit=crop",
    tours: 4,
    treks: 2,
    description: "Spiritual heartland with ancient temples.",
  },
];

export default function BhutanPage() {
  const [trekScrollPosition, setTrekScrollPosition] = React.useState(0);
  const [peakScrollPosition, setPeakScrollPosition] = React.useState(0);
  const [cityTourScrollPosition, setCityTourScrollPosition] = React.useState(0);
  const [regionScrollPosition, setRegionScrollPosition] = React.useState(0);

  const trekScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const peakScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const cityTourScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const regionScrollContainerRef = React.useRef<HTMLDivElement>(null);

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
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop"
            alt="Bhutan Himalayas"
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
              <Star className="w-4 h-4 mr-2 fill-white" /> The Last Shangri-La
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              DISCOVER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                BHUTAN
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Land of the Thunder Dragon, Gross National Happiness, and preserved ancient traditions.
              Experience the world's only carbon-negative country.
            </p>
          </div>
        </div>
      </section>

      {/* About Bhutan */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <MapPin className="w-3 h-3 mr-1.5" /> ABOUT BHUTAN
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 leading-tight">
                The Last Shangri-La
              </h2>
              <div className="space-y-3">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Nestled in the eastern Himalayas, <strong className="text-[#0f2940]">Bhutan</strong> is a 
                  landlocked country bordered by China to the north and India to the south, east, and west. 
                  Known as <strong className="text-[#0f2940]">Dru U - Land of the Thunder Dragon</strong>, it's the 
                  world's only carbon-negative country.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Bhutan is <strong className="text-[#0f2940]">the happiest country in Asia</strong> and ranks 
                  8th globally. With its <strong className="text-[#0f2940]">Gross National Happiness</strong> 
                  philosophy, development prioritizes well-being over GDP. <strong className="text-[#0f2940]">Vajrayana Buddhism</strong> 
                  is the state religion, deeply influencing daily life.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  From subtropical plains to Himalayan peaks exceeding 7,000m, Bhutan offers 
                  pristine landscapes, ancient dzongs, and a unique culture preserved by 
                  traditional dress and architecture laws.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop"
                    alt="Tiger's Nest Monastery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573935146153-f632c1f0e7f8?q=80&w=2070&auto=format&fit=crop"
                    alt="Bhutanese Culture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=2070&auto=format&fit=crop"
                    alt="Bhutan Dzong"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1575517111478-7b6f4746d1a9?q=80&w=2070&auto=format&fit=crop"
                    alt="Bhutan Landscape"
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

      {/* Cultural Tours Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <Landmark className="w-3 h-3 mr-1.5" /> CULTURAL TOURS
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940]">
                Bhutan Cultural Experiences
              </h2>
              <p className="text-slate-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                Discover Bhutan's rich heritage with our expert-guided tours. Minimum daily package applies.
              </p>
            </div>
            <Link href="/bhutan-tours">
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
              {culturalTours.map((tour, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] mr-4 last:mr-0 snap-center">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 h-full rounded-xl overflow-hidden shadow-lg">
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
                          <Castle className="w-5 h-5" />
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
                        <Link href={tour.link || "/contact"}>
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
            {culturalTours.map((tour, i) => (
              <Card key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
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
                      <Castle className="w-5 h-5" />
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
                    <Link href={tour.link || "/contact"}>
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

      {/* Why Bhutan */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7fb8d4] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <CheckCircle className="w-3 h-3 mr-1.5" /> WHY VISIT BHUTAN
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
              A Kingdom Like No Other
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              From Gross National Happiness to carbon-negative status, Bhutan offers unique experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyBhutan.map((item, i) => (
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

      {/* Bhutan Regions */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <Compass className="w-3 h-3 mr-1.5" /> BHUTAN REGIONS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              Explore Bhutan's Iconic Valleys
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Each region offers unique landscapes, dzongs, and cultural experiences.
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
                        {region.tours} Tours • {region.treks} Treks
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
                      {region.tours} Tours • {region.treks} Treks
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

      {/* Best Time to Visit */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <Calendar className="w-3 h-3 mr-1.5" /> WHEN TO VISIT
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              Best Time to Visit Bhutan
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                season: "Spring",
                months: "March - May",
                icon: <TreePine className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-pink-100 to-orange-100",
                borderColor: "border-pink-200",
                highlights: ["Rhododendron blooms", "Paro Tshechu", "Clear skies", "Wildflowers"],
                rating: "Excellent",
              },
              {
                season: "Summer",
                months: "June - August",
                icon: <Cloud className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-green-100 to-emerald-100",
                borderColor: "border-green-200",
                highlights: ["Monsoon season", "Lush greenery", "Fewer tourists", "Indoor cultural visits"],
                rating: "Moderate",
              },
              {
                season: "Autumn",
                months: "September - November",
                icon: <Mountain className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-amber-100 to-orange-100",
                borderColor: "border-amber-200",
                highlights: ["Clear mountain views", "Thimphu Tshechu", "Perfect trekking", "Festival season"],
                rating: "Best",
              },
              {
                season: "Winter",
                months: "December - February",
                icon: <Snowflake className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-blue-100 to-cyan-100",
                borderColor: "border-blue-200",
                highlights: ["Snow-capped peaks", "Punakha Drubchen", "Clear skies", "Cultural immersion"],
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

      {/* Trekking in Bhutan */}
      <section id="trekking" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-5">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <Mountain className="w-3 h-3 mr-1.5" /> BHUTAN TREKKING
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940]">
                Himalayan Treks in Bhutan
              </h2>
              <p className="text-slate-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                From moderate valley walks to challenging high-altitude expeditions.
              </p>
            </div>
            <Link href="/bhutan-trekking">
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
                      <Link href="/contact">
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
                  <Link href="/contact">
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

      {/* Day Tours */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-5">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <Globe className="w-3 h-3 mr-1.5" /> DAY TOURS
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                Explore Bhutan Daily
              </h2>
              <p className="text-white/70 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                Perfect additions to your Bhutan itinerary.
              </p>
            </div>
            <Link href="/bhutan-day-tours">
              <Button variant="outline" className="text-[#C5E0ED] border-[#C5E0ED]/50 hover:bg-[#C5E0ED]/10 font-bold group rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                View All <ChevronRightIcon className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={peakScrollContainerRef}
            >
              {dayTours.map((tour, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center">
                  <Card className={`bg-gradient-to-br ${tour.color} border-0 rounded-xl overflow-hidden hover:shadow-lg transition-all`}>
                    <div className="relative h-56 overflow-hidden">
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
            {dayTours.map((tour, i) => (
              <Card key={i} className={`bg-gradient-to-br ${tour.color} border-0 rounded-xl overflow-hidden hover:shadow-xl transition-all group hover:scale-[1.02]`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 1024px) 33vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-[#2d6a8a] border-none font-bold">
                      {tour.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5">
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
                    <Link href="/contact">
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

      {/* Bhutan Tourism Policy */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <ShieldCheck className="w-3 h-3 mr-1.5" /> BHUTAN TOURISM
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              Sustainable Tourism Policy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bhutan's unique approach preserves culture and environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Minimum Daily Package</h4>
                  <p className="text-slate-600 text-sm">US $200-250 per day includes accommodation, meals, transport, guide, and sustainable development fee.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Custom Itineraries</h4>
                  <p className="text-slate-600 text-sm">Create your own itinerary - no group travel required. Personal guides for intimate experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Cultural Preservation</h4>
                  <p className="text-slate-600 text-sm">Traditional dress (Gho & Kira) and architecture preserved by law. No backpacker-style tourism.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Carbon Negative</h4>
                  <p className="text-slate-600 text-sm">72% forest cover. Tourism supports conservation and community development.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#C5E0ED]/30">
              <h4 className="font-bold text-[#0f2940] mb-4 text-lg">Unique Bhutanese Culture</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Ema Datshi:</strong> National dish - chillies and cheese</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Red Rice:</strong> Unique to Bhutan, grown in Paro Valley</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>No Smoking:</strong> Tobacco sales are illegal nationwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Protective Symbols:</strong> Houses painted with protective phallus symbols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Easy Access:</strong> Just 1-hour flight from Kathmandu to Paro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Preserved Heritage:</strong> 17th century dzongs still in use today</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add missing icon component
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);