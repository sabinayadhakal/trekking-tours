"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  Cloud,
  Home,
  Flag,
  Eye,
  Wind,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const culturalTours = [
  {
    name: "Tibet's Unique Cultural Tour",
    duration: "7 Days",
    difficulty: "Easy",
    altitude: "3,650m",
    price: "$1,950",
    image: "/images/used/tibet-cultural-1.webp",
    rating: 4.9,
    region: "Lhasa • Gyantse",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Street", "Drepung Monastery"],
    description: "Experience Tibet's rich cultural heritage and spiritual traditions.",
    link: "/destinations/tibet/tibet-unique-cultural-tour",
  },
  {
    name: "Tibet Tour with Namtso Lake",
    duration: "5 Days",
    difficulty: "Moderate",
    altitude: "4,718m",
    price: "$1,150",
    image: "/images/used/tibet-2.webp",
    rating: 4.8,
    region: "Lhasa • Namtso",
    highlights: ["Namtso Lake", "Turquoise Waters", "Yangpachen", "Nyenchen Tanglha Range"],
    description: "Visit the heavenly lake at the roof of the world.",
    link: "/destinations/tibet/tibet-tour-namtso-lake",
  },
  {
    name: "Tibet Overland Tour",
    duration: "8 Days",
    difficulty: "Moderate",
    altitude: "5,200m",
    price: "$1,950",
    image: "/images/used/tibet-overland.webp",
    rating: 4.9,
    region: "Kathmandu to Lhasa",
    highlights: ["Friendship Highway", "Himalayan Views", "Gyantse Kumbum", "Yamdrok Lake"],
    description: "Spectacular overland journey through the Himalayas.",
    link: "/destinations/tibet/tibet-overland-tour",
  },
  {
    name: "Lhasa City Tour",
    duration: "4 Days",
    difficulty: "Easy",
    altitude: "3,650m",
    price: "$950",
    image: "/images/used/tibet-lhasa.webp",
    rating: 4.7,
    region: "Lhasa",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Circuit", "Sera Monastery"],
    description: "Explore the forbidden city's most sacred sites.",
    link: "/destinations/tibet/lhasa-city-tour",
  },
  {
    name: "Kailash Mansarovar Yatra",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,638m",
    price: "$2,950",
    image: "/images/used/tibet-4.webp",
    rating: 4.9,
    region: "Western Tibet",
    highlights: ["Mount Kailash", "Lake Mansarovar", "Parikrama", "Sacred Sites"],
    description: "Pilgrimage to the most sacred mountain in Asia.",
    link: "/destinations/tibet/kailash-mansarovar-yatra",
  },
  {
    name: "Everest Base Camp Tibet",
    duration: "9 Days",
    difficulty: "Moderate-Challenging",
    altitude: "5,200m",
    price: "$2,150",
    image: "/images/used/tibet-everest.webp",
    rating: 4.8,
    region: "Tingri • Rongbuk",
    highlights: ["North Face Everest", "Rongbuk Monastery", "Tingri Plains", "Base Camp"],
    description: "See the world's highest peak from the Tibetan side.",
    link: "/destinations/tibet/everest-base-camp-tibet",
  },
];

const monasteryTours = [
  {
    name: "Monastery Discovery Tour",
    duration: "6 Days",
    difficulty: "Easy",
    altitude: "3,900m",
    price: "$1,250",
    image: "/images/used/tibet-1.webp",
    rating: 4.8,
    region: "Central Tibet",
    highlights: ["Drepung Monastery", "Sera Monastery", "Ganden Monastery", "Monk Debates"],
    description: "Explore Tibet's great monastic universities.",
    link: "/destinations/tibet/monastery-discovery-tour",
  },
  {
    name: "Ancient Kingdoms Tour",
    duration: "9 Days",
    difficulty: "Moderate",
    altitude: "4,500m",
    price: "$2,550",
    image: "/images/used/tibet-kingdom.webp",
    rating: 4.7,
    region: "Tsang Province",
    highlights: ["Shigatse", "Sakya Monastery", "Gyantse Dzong", "Tashilhunpo"],
    description: "Journey through Tibet's historical kingdoms.",
    link: "/destinations/tibet/ancient-kingdoms-tour",
  },
  {
    name: "Tibetan Plateau Adventure",
    duration: "12 Days",
    difficulty: "Challenging",
    altitude: "5,000m",
    price: "$2,950",
    image: "/images/used/tibet-plateau.webp",
    rating: 4.9,
    region: "Changtang Plateau",
    highlights: ["Nomadic Culture", "High-altitude Lakes", "Wildlife", "Remote Valleys"],
    description: "Explore the vast Tibetan plateau wilderness.",
    link: "/destinations/tibet/tibetan-plateau-adventure",
  },
];

const whyTibet = [
  {
    icon: <Mountain className="w-5 h-5" />,
    title: "Roof of the World",
    description: "Highest plateau on Earth with average elevation over 4,500m.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Spiritual Heartland",
    description: "Center of Tibetan Buddhism with thousand-year traditions.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Potala Palace",
    description: "UNESCO World Heritage site and architectural wonder.",
  },
  {
    icon: <Wind className="w-5 h-5" />,
    title: "Ancient Kingdoms",
    description: "Land of diverse principalities, dialects, and traditions.",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Himalayan Vistas",
    description: "Spectacular views of the world's highest mountains.",
  },
  {
    icon: <Moon className="w-5 h-5" />,
    title: "Sacred Lakes",
    description: "Turquoise holy lakes like Namtso and Yamdrok.",
  },
];

const regions = [
  {
    name: "Ü-Tsang",
    description: "The cultural and spiritual heartland of Tibet, centered around the sacred city of Lhasa. Home to the Potala Palace, Jokhang Temple, and the great monastic universities of Drepung, Sera, and Ganden.",
    characteristics: [
      "Ancient seat of the Dalai Lamas",
      "Center of Tibetan Buddhist scholarship",
      "Yarlung Valley - cradle of Tibetan civilization"
    ],
    culturalFocus: "Sacred Heartland"
  },
  {
    name: "Kham",
    description: "A land of rugged mountains and deep gorges, known for its distinctive art, music, and the legendary Khampa warriors. The region's unique dialect and traditions reflect its fierce independent spirit.",
    characteristics: [
      "Renowned for thangka painting and woodblock printing",
      "Traditional Khampa horsemanship culture",
      "Derge Parkhang - ancient printing house"
    ],
    culturalFocus: "Artistic Heritage"
  },
  {
    name: "Amdo",
    description: "Vast grasslands stretching across northeastern Tibet, home to nomadic communities and some of Tibet's most influential monasteries. Birthplace of the 14th Dalai Lama and many great Buddhist masters.",
    characteristics: [
      "Rich nomadic pastoral traditions",
      "Kumbum Monastery - major pilgrimage site",
      "Distinct Amdo dialect and folk music"
    ],
    culturalFocus: "Nomadic Traditions"
  },
  {
    name: "Ngari",
    description: "The 'roof of the roof of the world,' encompassing the sacred Mount Kailash and Lake Mansarovar. This remote western region holds the ruins of the ancient Guge Kingdom and some of Tibet's oldest Buddhist sites.",
    characteristics: [
      "Mount Kailash - sacred to four religions",
      "Ancient Guge Kingdom archaeological sites",
      "High-altitude desert landscapes"
    ],
    culturalFocus: "Ancient Pilgrimage"
  }
];

export default function TibetPage() {
  const router = useRouter();
  const [trekScrollPosition, setTrekScrollPosition] = React.useState(0);
  const [monasteryScrollPosition, setMonasteryScrollPosition] = React.useState(0);
  const [cityTourScrollPosition, setCityTourScrollPosition] = React.useState(0);
  const [regionScrollPosition, setRegionScrollPosition] = React.useState(0);

  const trekScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const monasteryScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const cityTourScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const regionScrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleBookNow = (itemName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(itemName)}`);
  };

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
  const scrollMonasteryLeft = () => scrollLeft(monasteryScrollContainerRef, setMonasteryScrollPosition);
  const scrollMonasteryRight = () => scrollRight(monasteryScrollContainerRef, setMonasteryScrollPosition);
  const scrollCityTourLeft = () => scrollLeft(cityTourScrollContainerRef, setCityTourScrollPosition);
  const scrollCityTourRight = () => scrollRight(cityTourScrollContainerRef, setCityTourScrollPosition);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/used/tibet-main-page.webp"
            alt="Tibet Himalayas"
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
              <Star className="w-4 h-4 mr-2 fill-white" /> Roof of the World
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              DISCOVER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                TIBET
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Land of the Potala Palace, ancient monasteries, and the spiritual heart of Tibetan Buddhism.
              Journey to the dwelling place of gods and spiritual spirits.
            </p>
          </div>
        </div>
      </section>

      {/* About Tibet */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <MapPin className="w-3 h-3 mr-1.5" /> ABOUT TIBET
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 leading-tight">
                The Spiritual Roof of the World
              </h2>
              <div className="space-y-3">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  <strong className="text-[#0f2940]">Tibet</strong> is culturally and historically rich, 
                  where <strong className="text-[#0f2940]">Tibetan Buddhism</strong> holds a special position 
                  of interest in the world. It can be said to be the dwelling place of gods, lokeshvara, 
                  tantra, and spiritual spirits.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  The many-storied <strong className="text-[#0f2940]">Potala Palace</strong> towers above 
                  Lhasa like a celestial realm suspended in air. <strong className="text-[#0f2940]">Lhasa</strong> 
                  contains treasures like the <strong className="text-[#0f2940]">Barkhor</strong> market circuit 
                  and the mysterious <strong className="text-[#0f2940]">Jokhang Temple</strong>, Tibet's most sacred shrine.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Tibet was a land of many principalities with different dialects and styles of dress. 
                  Multiple sects and subsects of Tibetan Buddhism created one of the world's greatest 
                  and most complex religious traditions, all enriching each other.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <Link href="/destinations/tibet/lhasa-city-tour">
                  <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/tibet-1.webp"
                      alt="Potala Palace"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
                <Link href="/destinations/tibet/monastery-discovery-tour">
                  <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/tibet-3.webp"
                      alt="Tibetan Monastery"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                <Link href="/destinations/tibet/tibet-overland-tour">
                  <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/tibet-2.webp"
                      alt="Tibetan Landscape"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
                <Link href="/destinations/tibet/kailash-mansarovar-yatra">
                  <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/tibet-4.webp"
                      alt="Prayer Flags"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
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
                <Landmark className="w-3 h-3 mr-1.5" /> TIBET TOURS
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940]">
                Spiritual & Cultural Journeys
              </h2>
              <p className="text-slate-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                Experience Tibet's rich heritage and breathtaking landscapes.
              </p>
            </div>
            
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={cityTourScrollContainerRef}
            >
              {culturalTours.map((tour, i) => (
                <Link 
                  key={i} 
                  href={tour.link}
                  className="flex-shrink-0 w-[85vw] mr-4 last:mr-0 snap-center cursor-pointer"
                >
                  <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0 h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
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
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs"
                          onClick={(e) => {
                            e.preventDefault();
                            handleBookNow(tour.name);
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
              <Link 
                key={i}
                href={tour.link}
                className="cursor-pointer"
              >
                <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0 h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
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
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(tour.name);
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tibet */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7fb8d4] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <CheckCircle className="w-3 h-3 mr-1.5" /> WHY VISIT TIBET
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
              A Land of Spiritual Wonder
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              From ancient monasteries to breathtaking landscapes, Tibet offers transformative experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyTibet.map((item, i) => (
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

     {/* Tibet Regions */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#f0f7fa] to-white">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Header with decorative elements */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="h-px w-12 bg-gradient-to-l from-[#2d6a8a]/30 to-transparent"></div>
        <Badge className="bg-transparent text-[#2d6a8a] border-[#2d6a8a]/20 px-5 py-1.5 text-xs font-light tracking-[0.2em] uppercase rounded-full">
          Sacred Geography
        </Badge>
        <div className="h-px w-12 bg-gradient-to-r from-[#2d6a8a]/30 to-transparent"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2940] mb-4">
        The Four Pillars of Tibet
      </h2>
      <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Ancient kingdoms and sacred valleys, each holding centuries of wisdom within their mountains and monasteries
      </p>
    </div>

    {/* Regions as descriptive cards - no buttons, no images */}
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {regions.map((region, index) => (
          <div key={index} className="relative">
            {/* Decorative element */}
            <div className="absolute -left-6 top-0 text-6xl font-serif text-[#C5E0ED]/30 select-none">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            <div className="relative pl-4 border-l-2 border-[#C5E0ED] group hover:border-[#2d6a8a] transition-colors duration-300">
              <h3 className="text-2xl font-serif text-[#0f2940] mb-3 group-hover:text-[#2d6a8a] transition-colors">
                {region.name}
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                {region.description}
              </p>
              
              {/* Cultural characteristics - replacing tour counts */}
              <div className="space-y-2">
                {region.characteristics?.map((trait, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-[#2d6a8a] mt-1">•</span>
                    <span className="text-slate-600">{trait}</span>
                  </div>
                ))}
              </div>
              
              {/* Subtle cultural tag */}
              <div className="mt-4 inline-block">
                <span className="text-xs text-[#2d6a8a] bg-[#C5E0ED]/10 px-3 py-1 rounded-full border border-[#C5E0ED]/20">
                  {region.culturalFocus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Historical context footer */}
      <div className="mt-20 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#C5E0ED]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-b from-[#f0f7fa] to-white px-8">
              <span className="text-sm text-slate-500 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#2d6a8a]/40" />
                For centuries, these lands have preserved the spiritual and cultural heritage of Tibet
                <Compass className="w-4 h-4 text-[#2d6a8a]/40" />
              </span>
            </div>
          </div>
        </div>
      </div>
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
              Best Time to Visit Tibet
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                season: "Spring",
                months: "April - May",
                icon: <TreePine className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-pink-100 to-orange-100",
                borderColor: "border-pink-200",
                highlights: ["Mild weather", "Fewer tourists", "Blooming flowers", "Clear skies"],
                rating: "Excellent",
              },
              {
                season: "Summer",
                months: "June - August",
                icon: <Sunrise className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-green-100 to-emerald-100",
                borderColor: "border-green-200",
                highlights: ["Warmest months", "Festival season", "Lush landscapes", "Rain showers"],
                rating: "Best",
              },
              {
                season: "Autumn",
                months: "September - October",
                icon: <Mountain className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-amber-100 to-orange-100",
                borderColor: "border-amber-200",
                highlights: ["Clear mountain views", "Dry weather", "Harvest season", "Photography"],
                rating: "Excellent",
              },
              {
                season: "Winter",
                months: "November - March",
                icon: <Snowflake className="w-5 h-5 sm:w-5 sm:h-5" />,
                color: "from-blue-100 to-cyan-100",
                borderColor: "border-blue-200",
                highlights: ["Fewest tourists", "Snow landscapes", "Lower prices", "Indoor cultural tours"],
                rating: "Moderate",
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
                        season.rating === "Moderate" ? "bg-amber-500 text-white" : "bg-slate-500 text-white"
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

      {/* Monastery & Adventure Tours */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-5">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
                <Building className="w-3 h-3 mr-1.5" /> MONASTERY & ADVENTURE
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                Spiritual & Adventure Tours
              </h2>
              <p className="text-white/70 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                Explore ancient monasteries and remote Tibetan landscapes.
              </p>
            </div>
            
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
              ref={monasteryScrollContainerRef}
            >
              {monasteryTours.map((tour, i) => (
                <Link 
                  key={i} 
                  href={tour.link}
                  className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center cursor-pointer"
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white rounded-xl overflow-hidden hover:shadow-lg transition-all">
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
                      <div className="absolute top-3 left-3 bg-[#0f2940]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {tour.rating}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-[#C5E0ED]">
                          <Building className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold text-white line-clamp-1">{tour.name}</h4>
                      </div>
                      <p className="text-white/70 text-xs mb-3 line-clamp-2">{tour.description}</p>
                      <div className="grid grid-cols-2 gap-1.5 mb-3">
                        <div className="flex items-center gap-1.5 text-white/70 text-xs">
                          <Clock className="w-3 h-3 text-[#C5E0ED]" /> {tour.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-white/70 text-xs">
                          <TrendingUp className="w-3 h-3 text-[#C5E0ED]" /> {tour.altitude}
                        </div>
                        <div className="flex items-center gap-1.5 text-white/70 text-xs">
                          <Footprints className="w-3 h-3 text-[#C5E0ED]" /> {tour.difficulty}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {tour.highlights.slice(0, 2).map((h, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-white/90 border-white/20 text-xs">
                            {h}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white">{tour.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs"
                          onClick={(e) => {
                            e.preventDefault();
                            handleBookNow(tour.name);
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={scrollMonasteryLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollMonasteryRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {monasteryTours.map((tour, i) => (
              <Link 
                key={i}
                href={tour.link}
                className="cursor-pointer"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white rounded-xl overflow-hidden hover:shadow-xl transition-all group hover:scale-[1.02]">
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
                    <div className="absolute top-3 left-3 bg-[#0f2940]/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {tour.rating}
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-[#C5E0ED]">
                        <Building className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-white">{tour.name}</h4>
                    </div>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{tour.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Clock className="w-4 h-4 text-[#C5E0ED]" /> {tour.duration}
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <TrendingUp className="w-4 h-4 text-[#C5E0ED]" /> {tour.altitude}
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Footprints className="w-4 h-4 text-[#C5E0ED]" /> {tour.difficulty}
                      </div>
                      <div className="text-white font-bold text-lg">{tour.price}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tour.highlights.slice(0, 3).map((h, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/10 text-white/90 border-white/20 text-xs">
                          {h}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] hover:from-[#b3d6e6] hover:to-[#6baac9] text-[#0f2940] font-bold rounded-full py-2 text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBookNow(tour.name);
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 text-xs font-semibold">
              <ShieldCheck className="w-3 h-3 mr-1.5" /> TRAVEL TO TIBET
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4">
              Travel Information & Tips
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everything you need to know for your journey to the Roof of the World.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Easy Access from Nepal</h4>
                  <p className="text-slate-600 text-sm">Regular flights between Kathmandu and Lhasa (1 hour). Overland route via Friendship Highway offers spectacular Himalayan views.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Overland Route Experience</h4>
                  <p className="text-slate-600 text-sm">Spectacular view of the Himalayas from Tibetan plateau. See white glaciers, multi-colored hills, turquoise lakes, and ancient monastic cities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Cultural Diversity</h4>
                  <p className="text-slate-600 text-sm">Experience the wonderful diversity of Tibetan people and culture across different regions - what made Tibet remarkable.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] rounded-lg flex items-center justify-center text-[#0f2940] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f2940] mb-1">Permits & Regulations</h4>
                  <p className="text-slate-600 text-sm">Tibet Travel Permit required for all visitors. We handle all paperwork including China Group Visa and Tibet Travel Permits.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#C5E0ED]/30">
              <h4 className="font-bold text-[#0f2940] mb-4 text-lg">What to Expect in Tibet</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>High Altitude:</strong> Lhasa at 3,650m, gradual acclimatization important</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Spiritual Atmosphere:</strong> Active monasteries with praying monks and pilgrims</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Architectural Marvels:</strong> Ancient dzongs, palaces, and monastic complexes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Dramatic Landscapes:</strong> Vast plateaus, turquoise lakes, snow-capped peaks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Monastic Cities:</strong> Visit Sakya, Shigatse, and Gyantse - ancient centers of power</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm"><strong>Local Cuisine:</strong> Tsampa, butter tea, momos, and Tibetan noodle soups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}