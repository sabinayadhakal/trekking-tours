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
    image: "/images/used/everest-main-page.avif",
    rating: 4.9,
    region: "Everest Region",
    highlights: ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche Monastery"],
    description: "Walk in the footsteps of legends to the base of the world's highest peak.",
    link: "/services/trekking/everest-base-camp-trek",
  },
  {
    name: "Annapurna Circuit Trek",
    duration: "18 Days",
    difficulty: "Challenging",
    altitude: "5,416m",
    price: "$1,250",
    image: "/images/used/annapurna-circuit-main-page.avif",
    rating: 4.8,
    region: "Annapurna Region",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Valley", "Tatopani Hot Springs"],
    description: "The classic Himalayan circuit crossing the legendary Thorong La Pass.",
    link: "/services/trekking/annapurna-circuit-trek",
  },
  {
    name: "Manaslu Circuit Trek",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$1,350",
    image: "/images/used/manaslu-main-page.avif",
    rating: 4.9,
    region: "Manaslu Region",
    highlights: ["Larkya La Pass", "Tibetan Villages", "Remote Trails", "Buddhist Monasteries"],
    description: "Circle the world's eighth highest mountain through pristine wilderness.",
    link: "/services/trekking/manaslu-circuit-trek",
  },
  {
    name: "Langtang Valley Trek",
    duration: "10 Days",
    difficulty: "Easy-Moderate",
    altitude: "4,984m",
    price: "$950",
    image: "/images/used/langtang-main-page.avif",
    rating: 4.7,
    region: "Langtang Region",
    highlights: ["Kyanjin Gompa", "Langtang Village", "Cheese Factory", "Tserko Ri"],
    description: "Explore the 'Valley of Glaciers' just north of Kathmandu.",
    link: "/services/trekking/langtang-valley-trek",
  },
  {
    name: "Upper Mustang Trek",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "3,840m",
    price: "$1,650",
    image: "/images/used/upper-mustang-main-page.avif",
    rating: 4.9,
    region: "Mustang Region",
    highlights: ["Lo Manthang", "Ancient Caves", "Tibetan Culture", "Desert Landscape"],
    description: "Journey to the forbidden kingdom of Lo in the rain shadow of the Himalayas.",
    link: "/services/trekking/upper-mustang-trek",
  },
 {
    name: "Annapurna Base Camp Trek",
    duration: "11 Days",
    difficulty: "Moderate",
    altitude: "4,130m",
    price: "$950",
    image: "/images/used/abc-main-page.avif",
    rating: 4.9,
    region: "Annapurna Region",
    highlights: ["Annapurna Sanctuary", "Natural Hot Springs", "Machapuchare View", "Bamboo Forests", "Mountain Amphitheater"],
    description: "Journey into the Annapurna Sanctuary, standing at the base of towering peaks including Annapurna I and Machapuchare.",
    link: "/services/trekking/annapurna-base-camp-trek",
},
];

const peakClimbing = [
  {
    name: "Island Peak Climbing",
    duration: "18 Days",
    difficulty: "Technical",
    altitude: "6,189m",
    price: "$2,450",
    image: "/images/used/island-peak-nepal-1.avif",
    rating: 4.8,
    highlights: ["Summit Experience", "Technical Training", "Everest Views", "Glacier Crossing"],
    link: "/services/peak-climbing/island-peak-climbing",
  },
  {
    name: "Mera Peak Expedition",
    duration: "18 Days",
    difficulty: "Moderate-Technical",
    altitude: "6,476m",
    price: "$2,650",
    image: "/images/used/mera-peak-nepal.avif",
    rating: 4.9,
    highlights: ["Highest Trekking Peak", "5 x 8000m Views", "Remote Wilderness", "Non-technical Summit"],
    link: "/services/peak-climbing/mera-peak-climbing",
  },
  {
    name: "Yala Peak Climbing",
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "5,520m",
    price: "$1,850",
    image: "/images/used/yala-peak-nepal.avif",
    rating: 4.5,
    highlights: ["Beginner Friendly", "Langtang Valley", "Tibetan Border Views", "Cultural Experience"],
    link: "/services/peak-climbing/yala-peak-climbing",
}
];

const cityTours = [
 {
    name: "Free Walking Tour Kathmandu",
    duration: "4-5 Hours",
    difficulty: "Easy",
    altitude: "1,400m",
    price: "Tips-based",
    image: "/images/used/free-walking-tour-nepal.avif",
    rating: 4.8,
    highlights: ["Kathe Swoyambhu", "Glass Beads Market", "Local Lassi", "Monkey Temple", "Newar Architecture"],
    description: "First Free Walking Tour in Kathmandu, Nepal.",
    icon: <Compass className="w-5 h-5" />,
    color: "from-sky-100 to-blue-50",
    link: "/services/free-walking-tour",
},
  {
    name: "Bhaktapur & Patan Day Tour",
    duration: "1 Day",
    price: "$95",
    image: "/images/used/bhaktapur-patan-nepal.avif",
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Golden Temple", "Traditional Crafts"],
    description: "Discover ancient Newari architecture and living culture.",
    icon: <Castle className="w-5 h-5" />,
    color: "from-amber-100 to-amber-50",
    link: "/services/day-sightseeings/bhaktapur-patan-sightseeing",
  },
  {
    name: "Nagarkot Changunarayan Hiking",
    duration: "1 Day",
    difficulty: "Easy",
    altitude: "2,195m",
    price: "$75",
    image: "https://images.unsplash.com/photo-1624962904597-6e6ee6a8d648?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    highlights: ["Himalayan Sunrise", "Mt. Everest Views", "UNESCO Temple", "Village Walk", "Downhill Trail", "Rural Life Experience"],
    description: "Scenic day hike with panoramic mountain views.",
    icon: <Sunrise className="w-5 h-5" />,
    color: "from-orange-100 to-amber-50",
    link: "/services/day-hikings/nagarkot-changunarayan-hiking",
},
  {
    name: "Nepal Heritage Sites Tour",
    duration: "10 Days",
    difficulty: "Easy",
    altitude: "1,400m",
    price: "$850",
    image: "/images/used/nepal-heritage-sites-tour-nepal.avif",
    rating: 4.8,
    highlights: ["Kathmandu Valley", "Pokhara", "Lumbini", "Chitwan"],
    description: "Explore Nepal's rich cultural heritage across the country.",
    icon: <Landmark className="w-5 h-5" />,
    color: "from-emerald-100 to-teal-50",
    link: "/services/multi-day-cultural-tours/nepal-heritage-sites-tour",
},

{
    name: "Kathmandu Pokhara Lumbini Chitwan Tour",
    duration: "10 Days",
    difficulty: "Easy",
    altitude: "1,400m",
    price: "$850",
    image: "/images/used/kathmandu-lumbini-pokhara-nepal.avif",
    rating: 4.8,
    highlights: ["Kathmandu Valley", "Pokhara", "Lumbini", "Chitwan"],
    description: "Complete Nepal experience covering all major destinations.",
    icon: <Map className="w-5 h-5" />,
    color: "from-blue-100 to-cyan-50",
    link: "/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour",
},

{
    name: "Historic Nature Scenic Photography Tour",
    duration: "11 Days",
    difficulty: "Easy",
    altitude: "2,100m",
    price: "$900",
    image: "/images/used/historic-scenic-photography-nepal.avif",
    rating: 4.9,
    highlights: ["Historic Sites", "Nature", "Scenic Views", "Photography"],
    description: "Perfect tour for photography enthusiasts.",
    icon: <Camera className="w-5 h-5" />,
    color: "from-purple-100 to-pink-50",
    link: "/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour",
}
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
    description: "Home to the world's highest peak and the legendary Sherpa people. This sacred landscape is dotted with ancient monasteries, bustling trading villages, and the footsteps of mountaineering history.",
    characteristics: [
      "Sagamartha National Park - home to Everest, Lhotse, and Cho Oyu",
      "Tengboche Monastery - spiritual heart of the Khumbu",
      "Sherpa culture - legendary mountaineers and Buddhist traditions"
    ],
    culturalSignature: "Land of the Sherpas"
  },
  {
    name: "Annapurna Region",
    description: "The most diverse trekking region on Earth, where you can walk from subtropical forests to high-altitude deserts in days. Home to the world's deepest gorge and the sacred pilgrimage site of Muktinath.",
    characteristics: [
      "Thorong La Pass - world's highest trekking pass at 5,416m",
      "Annapurna Circuit - circumambulation of an 8,000m peak",
      "Gurung and Thakali cultures - ancient trade routes"
    ],
    culturalSignature: "The Great Diversity"
  },
  {
    name: "Langtang Region",
    description: "The 'Valley of Glaciers' lies just north of Kathmandu, offering pristine wilderness and warm Tamang hospitality. Rebuilding stronger after the 2015 earthquake, this region remains a hidden gem.",
    characteristics: [
      "Langtang National Park - red pandas and Himalayan wildlife",
      "Tamang heritage - Tibetan-Buddhist mountain culture",
      "Kyanjin Gompa - high-altitude monastery and cheese factory"
    ],
    culturalSignature: "Valley of Glaciers"
  },
  {
    name: "Manaslu Region",
    description: "A restricted area preserving authentic Tibetan culture and pristine landscapes. Circumnavigate the world's eighth highest mountain through remote villages and ancient trade routes to Tibet.",
    characteristics: [
      "Tsum Valley - 'Hidden Valley' of Buddhist meditation caves",
      "Larkya La Pass - one of Nepal's most spectacular high passes",
      "Tibetan heritage - untouched Buddhist traditions"
    ],
    culturalSignature: "The Hidden Circuit"
  }
];

export default function NepalPage() {
  const router = useRouter();
  const [trekScrollPosition, setTrekScrollPosition] = React.useState(0);
  const [peakScrollPosition, setPeakScrollPosition] = React.useState(0);
  const [cityTourScrollPosition, setCityTourScrollPosition] = React.useState(0);
  const [regionScrollPosition, setRegionScrollPosition] = React.useState(0);

  const trekScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const peakScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const cityTourScrollContainerRef = React.useRef<HTMLDivElement>(null);
  const regionScrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleBookNow = (itemName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(itemName)}`);
  };

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
      src="/images/used/nepal-hero.avif"
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
                <Link href="/services/day-sightseeings/kathmandu-sightseeing">
                  <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/nepal-temple.avif"
                      alt="Kathmandu Temple"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
                <Link href="/services/jungle-safari/chitwan-np-jungle-safari">
                  <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/nepal-chitwan.avif"
                      alt="Chitwan Wildlife"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                <Link href="/destinations/nepal">
                  <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/nepal-himal.avif"
                      alt="Prayer Flags"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </Link>
                <Link href="/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour">
                  <div className="relative h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/used/nepal-stupa.avif"
                      alt="Pokhara Lake"
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
            <Link href="/services/day-sightseeings">
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
                <Link 
                  key={i} 
                  href={tour.link}
                  className="flex-shrink-0 w-[85vw] mr-4 last:mr-0 snap-center cursor-pointer"
                >
                  <Card className={`bg-gradient-to-br ${tour.color} border-0 h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}>
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
                        {tour.highlights?.slice(0, 2).map((h, idx) => (
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
            {cityTours.map((tour, i) => (
              <Link 
                key={i}
                href={tour.link}
                className="cursor-pointer"
              >
                <Card className={`bg-gradient-to-br ${tour.color} border-0 h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}>
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
                      {tour.highlights?.slice(0, 3).map((h, idx) => (
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

      {/* Trekking Regions */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#f0f7fa] to-white">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Header with decorative elements */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="h-px w-12 bg-gradient-to-l from-[#2d6a8a]/30 to-transparent"></div>
        <Badge className="bg-transparent text-[#2d6a8a] border-[#2d6a8a]/20 px-5 py-1.5 text-xs font-light tracking-[0.2em] uppercase rounded-full">
          Himalayan Kingdoms
        </Badge>
        <div className="h-px w-12 bg-gradient-to-r from-[#2d6a8a]/30 to-transparent"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2940] mb-4">
        Nepal's Legendary Regions
      </h2>
      <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        From the Sherpa kingdoms of the east to the Tibetan-influenced valleys of the west, each region tells its own story
      </p>
    </div>

    {/* Regions as descriptive cards - no buttons, no trek/peak counts */}
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
              
              {/* Regional characteristics - replacing treks/peaks */}
              <div className="space-y-2">
                {region.characteristics?.map((trait, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-[#2d6a8a] mt-1">•</span>
                    <span className="text-slate-600">{trait}</span>
                  </div>
                ))}
              </div>
              
              {/* Cultural signature */}
              <div className="mt-4 inline-block">
                <span className="text-xs text-[#2d6a8a] bg-[#C5E0ED]/10 px-3 py-1 rounded-full border border-[#C5E0ED]/20">
                  {region.culturalSignature}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural context footer */}
      <div className="mt-20 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#C5E0ED]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-b from-[#f0f7fa] to-white px-8">
              <span className="text-sm text-slate-500 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-[#2d6a8a]/40" />
                Where the gods reside and legends are born
                <Mountain className="w-4 h-4 text-[#2d6a8a]/40" />
              </span>
            </div>
          </div>
        </div>
      </div>
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
            <Link href="/services/trekking">
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
                <Link 
                  key={i} 
                  href={trek.link}
                  className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center cursor-pointer"
                >
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
                      <Button 
                        className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] hover:from-[#b3d6e6] hover:to-[#6baac9] text-[#0f2940] font-bold rounded-full py-2 text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(trek.name);
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
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
              <Link 
                key={i}
                href={trek.link}
                className="cursor-pointer"
              >
                <Card className="bg-white border-[#C5E0ED]/30 h-full rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all group hover:scale-[1.02]">
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
                    <Button 
                      className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] hover:from-[#b3d6e6] hover:to-[#6baac9] text-[#0f2940] font-bold rounded-full py-2 text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleBookNow(trek.name);
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
                <Link 
                  key={i} 
                  href={peak.link}
                  className="flex-shrink-0 w-[85vw] mr-6 last:mr-0 snap-center cursor-pointer"
                >
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
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs"
                          onClick={(e) => {
                            e.preventDefault();
                            handleBookNow(peak.name);
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
              <Link 
                key={i}
                href={peak.link}
                className="cursor-pointer"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group hover:scale-[1.02]">
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
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] text-[#0f2940] font-bold rounded-full text-xs"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(peak.name);
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