"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Copy,
  Check,
  ChevronDown,
  Star,
  TrendingUp,
  Tent,
  Utensils,
  Heart,
  Camera,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Phone,
  Sunrise,
  Snowflake,
  Map,
  Backpack,
  Menu,
  X,
  Flame,
  Landmark,
  Church,
  Compass,
  Trees,
  Cloud,
  MountainSnow,
  Gem,
  Medal,
  Wind,
  Flower2,
  Sun,
  CloudSun,
  Award,
  Eye,
  Navigation,
  Coffee,
  Sparkles,
  Footprints,
  Milestone,
  Info,
  Globe,
  ScrollText,
  MountainIcon,
  Building,
  Library,
  Music,
  Drama,
  PartyPopper,
  Castle,
  Crown,
  Sword,
  Shield,
  History,
  LandPlot,
  ThermometerSnowflake,
  Cloudy,
  Sunrise as SunriseIcon,
  Circle,
  Waves,
  Droplets,
  Store,
  ShoppingBag,
  Scroll,
  BookOpen,
  Car,
  Route,
  Compass as CompassIcon,
  Map as MapIcon,
  CloudSun as CloudSunIcon,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Lhasa (3,650m)",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "Welcome to Lhasa, the spiritual heart of Tibet! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey to the sacred city. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views and your first glimpse of Tibetan landscapes. After checking into your hotel in Lhasa, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the days ahead, including your excursion to the breathtaking Namtso Lake, Tibetan culture, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic drive to Lhasa", "Acclimatization briefing", "Namtso Lake preparation"],
  },
  {
    day: 2,
    title: "Lhasa Sightseeing - Potala Palace & Jokhang Temple",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Begin your exploration of Lhasa's cultural treasures with a visit to the iconic Potala Palace, the winter palace of the Dalai Lamas and one of Tibet's most recognizable landmarks. This 13-story marvel contains over 1,000 rooms, with stunning chapels, tombs of past Dalai Lamas, and breathtaking views of Lhasa. Your guide will explain the history and significance of this UNESCO World Heritage site. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century. The temple houses the revered Jowo Shakyamuni statue and is a major pilgrimage site. In the evening, walk around the Barkhor Street, the pilgrimage circuit surrounding Jokhang, where you'll see devout pilgrims performing prostrations and can browse traditional Tibetan handicrafts. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace exploration", "Jokhang Temple", "Barkhor pilgrimage circuit", "Tibetan handicrafts", "UNESCO World Heritage sites"],
  },
  {
    day: 3,
    title: "Lhasa to Namtso Lake (4,718m) via Damxung",
    altitude: "3,650m → 4,718m",
    distance: "250km / 5-6 hrs drive",
    description: "Early morning departure for one of Tibet's most spectacular destinations - Namtso Lake! Drive north from Lhasa through beautiful grasslands and pastures, passing traditional Tibetan nomad settlements with their distinctive black yak-hair tents. Cross the Largen La Pass (5,190m) for your first breathtaking view of Namtso Lake - one of the three sacred lakes of Tibet and the highest saltwater lake in the world. The turquoise waters stretch to the horizon, backed by the majestic Nyenchen Tanglha mountain range. Arrive at the lake shore and check into your guesthouse. Spend the afternoon exploring the lake shore, visiting Tashi Dor Island with its meditation caves and hermitages, and watching the incredible sunset over the water. The colors of Namtso at sunset are truly unforgettable. Overnight near Namtso Lake.",
    overnight: "Guesthouse near Namtso",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Namtso Lake (4,718m)", "Largen La Pass (5,190m)", "Tibetan nomad settlements", "Tashi Dor Island", "Sunset over sacred lake"],
  },
  {
    day: 4,
    title: "Namtso Lake Sunrise & Return to Lhasa",
    altitude: "4,718m → 3,650m",
    distance: "250km / 5-6 hrs drive",
    description: "Wake early to witness the magical sunrise over Namtso Lake - a truly spiritual experience as the first light paints the snow-capped mountains and lake in golden hues. Take a final walk along the shore, offer prayers at the small temples, and soak in the peaceful atmosphere of this sacred place. After breakfast, begin your return journey to Lhasa, stopping at viewpoints along the way for last photos of this incredible landscape. Arrive in Lhasa by late afternoon. The remainder of the day is free for rest, reflection, or last-minute souvenir shopping at Barkhor Market. Enjoy a farewell dinner celebrating your journey to the heavenly lake. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Namtso Lake sunrise", "Sacred lake photography", "Scenic return drive", "Barkhor Market shopping", "Farewell dinner"],
  },
  {
    day: 5,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of ancient monasteries, sacred lakes, and the breathtaking beauty of Tibet. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells", "Namtso Lake memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation (3-star with breakfast) - 3 nights Lhasa, 1 night Namtso guesthouse",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private vehicle for all sightseeing and transfers (4WD Land Cruiser for Namtso journey)",
  "All monument entrance fees (Potala, Jokhang, Namtso Lake, Tashi Dor Island)",
  "Namtso Lake entry permit",
  "Tibet Travel Permit (processed by us)",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 5,200m)",
  "China Visa (required separately - we provide Tibet Permit support)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Additional oxygen (supplemental oxygen available on request)",
  "Single room supplement (if applicable)",
];

const gallery = [
  {
    src: "/images/used/tibet-2.webp",
    alt: "Namtso Lake",
    caption: "Namtso Lake - Heaven's Lake at 4,718m",
  },
  {
    src: "/images/used/tibet-1.webp",
    alt: "Potala Palace",
    caption: "Potala Palace - Iconic Landmark of Lhasa",
  },
   {
    src: "/images/used/tibet-lake-1.webp",
    alt: "Stones Stacked Besides the Lake",
    caption: "Stones Stacked Besides the Lake",
  },
   {
    src: "/images/used/tibet-lake-2.webp",
    alt: "Yak beside the lake",
    caption: "Yak beside the lake",
  },
  
];

const namtsoFacts = [
  {
    fact: "Elevation",
    detail: "4,718m (15,479ft) - Highest saltwater lake in the world",
  },
  {
    fact: "Name Meaning",
    detail: "'Heavenly Lake' or 'Lake of Heaven' in Tibetan",
  },
  {
    fact: "Size",
    detail: "1,920 sq km - Second largest saltwater lake in Tibet",
  },
  {
    fact: "Sacred Status",
    detail: "One of the three sacred lakes of Tibet, along with Yamdrok and Manasarovar",
  },
  {
    fact: "Location",
    detail: "Surrounded by the Nyenchen Tanglha mountain range",
  },
  {
    fact: "Tashi Dor Island",
    detail: "Sacred island with meditation caves and hermitages",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa",
    altitude: "3,650m",
    overnight: "3 nights",
    notes: "Base city, acclimatization",
  },
  {
    location: "Largen La Pass",
    altitude: "5,190m",
    overnight: "Pass only",
    notes: "Highest point on journey",
  },
  {
    location: "Namtso Lake",
    altitude: "4,718m",
    overnight: "1 night",
    notes: "Sacred lake, overnight stay",
  },
  {
    location: "Tashi Dor Island",
    altitude: "4,720m",
    notes: "Meditation caves, walking",
  },
];

export default function TibetTourWithNamtsoLakePage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 4]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "5-Day Tibet Tour with Namtso Lake";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("5-Day Tibet Tour with Namtso Lake - Himkala Adventure");
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileNav(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940]">Quick Navigation</h3>
                <button 
                  onClick={() => setShowMobileNav(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <a href="#overview" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Overview
                </a>
                <a href="#highlights" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Highlights
                </a>
                <a href="#namtso-facts" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Namtso Facts
                </a>
                <a href="#altitude" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Altitude Guide
                </a>
                <a href="#itinerary" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Itinerary
                </a>
                <a href="#includes" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  What's Included
                </a>
                <a href="#gallery" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Gallery
                </a>
                <a href="#faq" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  FAQ
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/used/tibet-2.webp"
            alt="Tibet Tour with Namtso Lake"
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
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
              <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MapPin className="w-3 h-3 mr-1" /> Tibet Autonomous Region
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Waves className="w-3 h-3 mr-1" /> Namtso Lake
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 4,718m
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              5 DAYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                TIBET TOUR WITH NAMTSO LAKE
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              Experience the best of Tibet in just 5 days! Explore the sacred sites of Lhasa and journey to 
              breathtaking Namtso Lake - the highest saltwater lake in the world, nestled in the Himalayas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$1,350</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,150</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]">
                  <Heart className="w-3 h-3 mr-1" /> Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Grid with sticky sidebar */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:gap-10">
            {/* Sidebar - Sticky on desktop */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$1,350</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,150</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $200</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>5 Days / 4 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Car className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4WD Land Cruiser</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 5,190m</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
                      </Button>
                    </Link>
                    
                    {/* WhatsApp Now Button */}
                    <a 
                      href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-sm md:text-base">
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Quick Facts
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Start/End Point</span>
                        <span className="font-medium text-[#0f2940]">Lhasa</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Total Distance</span>
                        <span className="font-medium text-[#0f2940]">~500km</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Largen La Pass (5,190m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour Duration</span>
                        <span className="font-medium text-[#0f2940]">5 Days / 4 Nights</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Moderate (high altitude)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Permits</span>
                        <span className="font-medium text-[#0f2940]">Tibet Permit + Namtso Permit</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Namtso Facts Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Waves className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Namtso Lake Facts
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm">
                      {namtsoFacts.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 border-b border-[#C5E0ED]/20 last:border-0 pb-1.5 last:pb-0">
                          <span className="font-medium text-[#0f2940] w-24 text-[10px]">{item.fact}:</span>
                          <span className="text-slate-600 text-[10px] flex-1">{item.detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Altitude Guide Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Altitude Guide
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm">
                      {altitudeInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 border-b border-[#C5E0ED]/20 last:border-0 pb-1.5 last:pb-0">
                          <div className="w-20 font-medium text-[#0f2940] text-[10px]">{item.location}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-600 text-[10px]">{item.altitude}</span>
                              {item.overnight && (
                                <span className="text-slate-400 text-[8px]">{item.overnight}</span>
                              )}
                            </div>
                            <p className="text-slate-500 text-[8px]">{item.notes}</p>
                          </div>
                        </div>
                      ))}
                      <div className="mt-2 bg-amber-50 p-2 rounded-lg">
                        <p className="text-amber-700 text-[8px] flex items-start gap-1">
                          <Info className="w-2.5 h-2.5 shrink-0 mt-0.5" />
                          <span><strong>Note:</strong> Namtso overnight at 4,718m is very high - inform guide if you feel unwell.</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Share
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-xs"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-xs"
                        onClick={handleCopyLink}
                      >
                        {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-8 w-full overflow-hidden">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-4">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={handleCopyLink}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-6 md:mb-12" id="overview">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>5-Day Tibet Tour with Namtso Lake</strong> offers the perfect introduction to the 
                    spiritual and natural wonders of Tibet. This carefully crafted itinerary combines the cultural 
                    treasures of Lhasa with an unforgettable journey to <strong>Namtso Lake (4,718m)</strong> - the 
                    highest saltwater lake in the world and one of Tibet's three sacred lakes.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    You'll explore the iconic <strong>Potala Palace</strong> and <strong>Jokhang Temple</strong>, 
                    walk the pilgrim circuit at Barkhor, and witness living Tibetan Buddhism. Then venture north 
                    across the Tibetan plateau to discover the breathtaking turquoise waters of Namtso, surrounded 
                    by the snow-capped Nyenchen Tanglha mountains. Watch the sunset and sunrise over the sacred lake, 
                    visit meditation caves on Tashi Dor Island, and experience the stark beauty of high-altitude Tibet.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With expert local guides, comfortable transport, and careful acclimatization, this tour offers 
                    an unforgettable taste of Tibet's unique culture and landscapes. Perfect for travelers with limited 
                    time who don't want to miss the absolute highlights of the 'Roof of the World'.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit sacred Namtso Lake (4,718m) - highest saltwater lake in the world",
                    "Cross Largen La Pass at 5,190m with stunning mountain views",
                    "Explore iconic Potala Palace and Jokhang Temple in Lhasa",
                    "Walk the Barkhor pilgrim circuit with devout Tibetans",
                    "Witness sunset and sunrise over turquoise Namtso Lake",
                    "Visit Tashi Dor Island with ancient meditation caves",
                    "Experience Tibetan nomad culture on the drive to Namtso",
                    "Photograph the Nyenchen Tanglha mountain range",
                    "All Tibet and Namtso permits arranged in advance",
                    "Perfect 5-day itinerary for time-limited travelers",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Visit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Summer (Jun - Aug)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmest temperatures, green pastures, and the lake is ice-free. Best chance for clear skies 
                        and comfortable overnight at the lake. Occasional afternoon showers.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <SunriseIcon className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Oct)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear skies, stable weather, and spectacular colors. 
                        Perfect for photography. Cold nights but stunning days.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Namtso Highlight Section */}
              <section className="mb-6 md:mb-12">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50 rounded-lg md:rounded-2xl overflow-hidden">
                  <CardContent className="p-3 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#0f2940] text-sm md:text-lg">The Heavenly Lake - Namtso</h3>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">
                      Namtso, meaning 'Heavenly Lake' in Tibetan, is one of the most sacred sites in Tibet. At 4,718m, 
                      it's the highest saltwater lake in the world. The lake is particularly famous for its incredible 
                      color changes throughout the day - from deep turquoise to brilliant blue to golden at sunset.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Altitude</span>
                        <p className="text-slate-600 text-[10px]">4,718m / 15,479ft</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Area</span>
                        <p className="text-slate-600 text-[10px]">1,920 sq km</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Sacred Site</span>
                        <p className="text-slate-600 text-[10px]">Tashi Dor Island</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Highest Pass</span>
                        <p className="text-slate-600 text-[10px]">Largen La (5,190m)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-6 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Day-by-Day Itinerary</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4"
                    onClick={() =>
                      setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                    }
                  >
                    {expandedDays.length === itinerary.length ? "Collapse All" : "Expand All"}
                  </Button>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {itinerary.map((day) => (
                    <Card
                      key={day.day}
                      className={`bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl overflow-hidden transition-all ${
                        expandedDays.includes(day.day) ? "shadow-md md:shadow-lg shadow-[#C5E0ED]/20" : "hover:shadow-sm"
                      }`}
                    >
                      <CardContent className="p-0">
                        <button
                          className="w-full flex items-center gap-2 md:gap-4 p-2 md:p-4 text-left"
                          onClick={() => toggleDay(day.day)}
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                            <span className="text-base md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h4>
                            <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <Car className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.distance}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedDays.includes(day.day) && (
                          <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span className="text-[10px] md:text-xs"><strong>Overnight:</strong> {day.overnight}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span className="text-[10px] md:text-xs"><strong>Meals:</strong> {day.meals}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {day.highlights.map((h, i) => (
                                <Badge key={i} variant="secondary" className="bg-[#C5E0ED]/20 text-[#2d6a8a] text-[8px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1">
                                  {h}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Includes / Excludes */}
              <section className="mb-6 md:mb-12" id="includes">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                  <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> Cost Includes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" /> Cost Excludes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <XCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Important Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 flex gap-2 md:gap-4 mb-6 md:mb-12">
                <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information - Namtso Lake Tour</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is MANDATORY</strong> and must cover high altitude up to 5,200m.</li>
                    <li>• <strong>Altitude Acclimatization:</strong> You'll spend a night at 4,718m at Namtso. This is very high - some people experience significant altitude symptoms. Inform your guide immediately if you feel unwell.</li>
                    <li>• <strong>Namtso Lake access:</strong> The lake is accessible only from June to October. Winter and spring (November-May) the road is often closed due to snow. Check seasonal availability before booking.</li>
                    <li>• <strong>Accommodation at Namtso:</strong> Basic guesthouse with shared facilities. No luxury - this is part of the experience. Bring warm sleeping bag if you have one.</li>
                    <li>• <strong>Passport and Permits:</strong> You need a valid passport (6+ months) and China Visa. We arrange all Tibet permits including special Namtso permit. Submit passport copy at least 20 days before travel.</li>
                    <li>• <strong>What to pack for Namtso:</strong> Warm layers (temperatures drop below freezing at night even in summer), warm hat, gloves, and a good sleeping bag if you have one.</li>
                  </ul>
                </div>
              </div>

              {/* Photo Gallery */}
              <section className="mb-6 md:mb-12" id="gallery">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3">
                  {gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-24 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-1 md:p-3">
                          <p className="text-white text-[8px] md:text-xs font-medium truncate">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-6 md:mb-12" id="faq">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2 md:space-y-4">
                  {[
                    {
                      q: "What is special about Namtso Lake?",
                      a: "Namtso Lake is one of the three sacred lakes of Tibet and the highest saltwater lake in the world at 4,718m. Its name means 'Heavenly Lake' in Tibetan. The lake is famous for its stunning turquoise color, dramatic setting against the Nyenchen Tanglha mountains, and its sacred Tashi Dor Island with ancient meditation caves. For Tibetans, circumambulating the lake brings spiritual merit.",
                    },
                    {
                      q: "Is it possible to visit Namtso Lake year-round?",
                      a: "No. The road to Namtso is typically open only from June to October. In winter and spring (November-May), heavy snow blocks the mountain passes and access is not possible. Even in summer, weather can cause temporary closures. We always check conditions before departure.",
                    },
                    {
                      q: "How difficult is the overnight stay at Namtso?",
                      a: "The main challenge is the altitude - 4,718m is very high. Many people experience difficulty sleeping, headache, or shortness of breath. The accommodation is basic (simple guesthouse with shared facilities, no heating). Come prepared with warm clothes and a good attitude. The incredible sunset and sunrise make it all worthwhile!",
                    },
                    {
                      q: "What permits do I need for this tour?",
                      a: "You need: 1) China Visa (from your local Chinese embassy), 2) Tibet Travel Permit, and 3) Special Namtso permit. We arrange all Tibet permits for you - we need your passport copy at least 20 days before travel. China Visa must be obtained separately, but we provide support documents.",
                    },
                    {
                      q: "How will the altitude affect me at Namtso?",
                      a: "Most people feel some effects at 4,718m - headache, shortness of breath, difficulty sleeping are common. Our itinerary includes 2 nights in Lhasa for acclimatization before going to Namtso, which helps. We carry oxygen in the vehicle, and our guides are trained in altitude sickness recognition. Inform your guide immediately if you feel unwell.",
                    },
                    {
                      q: "What is the accommodation like at Namtso?",
                      a: "Accommodation at Namtso is basic - simple guesthouses with shared bathrooms (no attached bathrooms), no heating, and limited electricity. Rooms have beds with blankets, but it gets very cold at night. We recommend bringing a warm sleeping bag. This rustic experience is part of the adventure and allows you to experience the lake at sunset and sunrise.",
                    },
                    {
                      q: "Can I visit Tashi Dor Island?",
                      a: "Yes! Tashi Dor is a peninsula (not actually an island) with a small monastery and numerous meditation caves used by hermits for centuries. You can walk along the shore and explore the area. The rock formations and prayer flags make for excellent photography. Your guide will explain the sacred significance.",
                    },
                    {
                      q: "What should I pack specifically for Namtso?",
                      a: "Essentials: warm layers (temperatures drop below freezing at night even in summer), thermal underwear, fleece, down jacket, warm hat, gloves, thick socks, and a good sleeping bag (rated to at least -5°C). Daytime is warmer but windy. Sun protection is essential at this altitude. Your guide will provide a detailed packing list after booking.",
                    },
                  ].map((faq, i) => (
                    <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                      <CardContent className="p-2 md:p-5">
                        <h4 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-xs md:text-base">{faq.q}</h4>
                        <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}