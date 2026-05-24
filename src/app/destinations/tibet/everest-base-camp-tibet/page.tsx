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
    description: "Welcome to Lhasa, the gateway to your Everest adventure! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey toward the world's highest mountain. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views. After checking into your hotel, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the days ahead, including what to expect at Everest Base Camp and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic Yarlung Valley drive", "Acclimatization briefing", "Everest preparation"],
  },
  {
    day: 2,
    title: "Lhasa Sightseeing & Acclimatization",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "A gentle day of sightseeing to aid acclimatization while experiencing Tibet's rich culture. Visit the iconic Potala Palace, the winter palace of the Dalai Lamas, offering breathtaking views of Lhasa. This 13-story marvel contains over 1,000 rooms and provides excellent context for Tibetan Buddhism. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century. Walk around the Barkhor pilgrimage circuit, where you'll see devout pilgrims and experience living Buddhism. This gentle activity helps your body adjust to the altitude while immersing you in Tibetan culture. Early to bed - tomorrow begins your journey toward Everest. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor pilgrimage circuit", "Gentle acclimatization", "Tibetan Buddhist culture"],
  },
  {
    day: 3,
    title: "Lhasa to Gyantse via Yamdrok Lake (4,794m)",
    altitude: "3,650m → 4,794m → 3,950m",
    distance: "260km / 6-7 hrs drive",
    description: "Depart Lhasa and begin your journey toward Everest! Cross the Kampala Pass (4,794m) for your first breathtaking view of Yamdrok Lake - one of Tibet's three sacred lakes with turquoise waters stretching beneath majestic snow-capped mountains. This is your first taste of high altitude - take it slow and enjoy the views. Stop for photos at this incredible location. Continue through picturesque valleys to reach Gyantse, a historic trading town. Upon arrival, visit the famous Pelkor Chode Monastery and its stunning Kumbum Stupa. This gentle introduction to higher altitudes prepares you for the days ahead. Overnight in Gyantse.",
    overnight: "Hotel in Gyantse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yamdrok Lake - sacred turquoise lake", "Kampala Pass (4,794m)", "First high-altitude experience", "Pelkor Chode Monastery", "Kumbum Stupa"],
  },
  {
    day: 4,
    title: "Gyantse to Shigatse (3,840m)",
    altitude: "3,950m → 3,840m",
    distance: "90km / 2 hrs drive",
    description: "Morning visit to the Gyantse Dzong, an ancient fortress offering panoramic views of the surrounding countryside. After exploring the dzong, drive to Shigatse, Tibet's second-largest city. Upon arrival, visit Tashilhunpo Monastery, the traditional seat of the Panchen Lama. Founded in 1447, this massive monastery houses a magnificent 26-meter statue of Maitreya (Future Buddha). This is an excellent place to learn about Tibetan Buddhism before continuing toward Everest. The remainder of the day is free for rest and acclimatization. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gyantse Dzong", "Tashilhunpo Monastery", "26m Maitreya statue", "Acclimatization", "Tibetan Buddhist learning"],
  },
  {
    day: 5,
    title: "Shigatse to Shegar (4,050m) via Tashilhunpo",
    altitude: "3,840m → 4,050m",
    distance: "240km / 5-6 hrs drive",
    description: "Today you'll drive closer to Everest, passing through ever more dramatic landscapes. The journey takes you along the Friendship Highway, with stunning views of the Himalayas appearing on the horizon. You'll pass through traditional Tibetan villages and vast plains dotted with nomad tents and grazing yaks. Arrive in Shegar (also known as New Tingri), a small town that serves as the gateway to Everest. On clear days, you can see Mount Everest and its neighboring peaks from viewpoints along the way. Rest and prepare for tomorrow's drive to base camp. Overnight in Shegar.",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Friendship Highway", "First views of Everest", "Tibetan nomad settlements", "Himalayan panoramas", "Gateway to Everest"],
  },
  {
    day: 6,
    title: "Shegar to Everest Base Camp (5,200m) & Return to Shegar",
    altitude: "4,050m → 5,200m → 4,050m",
    distance: "120km round trip / 5-6 hrs drive + exploration",
    description: "THE BIG DAY! Early morning drive to Everest Base Camp, the highlight of your journey. Enter the Qomolangma National Nature Reserve and wind through dramatic mountain roads to reach the Rongbuk Valley. Pass Rongbuk Monastery, the highest-altitude monastery in the world (4,980m), before reaching the legendary Everest Base Camp at 5,200m. Stand in awe of Mount Everest (8,848m) towering above you - the world's highest point. Take photos, soak in the atmosphere, and absorb the magnitude of this moment. Your guide will share stories of expeditions and the mountain's spiritual significance. After spending time at base camp, return to Shegar for overnight. This is a long but unforgettable day!",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest Base Camp (5,200m)", "Mount Everest close-up views", "Rongbuk Monastery", "Qomolangma National Park", "Lifetime achievement"],
  },
  {
    day: 7,
    title: "Shegar to Shigatse",
    altitude: "4,050m → 3,840m",
    distance: "240km / 5-6 hrs drive",
    description: "Begin your return journey, descending to lower altitudes. The drive offers another opportunity to photograph the Himalayan peaks in the morning light. Stop at viewpoints along the way to capture the majestic mountains. As you descend, you'll feel the air getting thicker and temperatures warming. Arrive in Shigatse by late afternoon. The remainder of the day is free to rest, reflect on your incredible achievement, or explore more of Shigatse. Celebrate reaching Everest Base Camp with a special dinner. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Morning mountain views", "Scenic return drive", "Descending to lower altitude", "Reflection time", "Celebration dinner"],
  },
  {
    day: 8,
    title: "Shigatse to Lhasa",
    altitude: "3,840m → 3,650m",
    distance: "280km / 6-7 hrs drive",
    description: "Continue your return journey to Lhasa, retracing the route through the beautiful Tibetan countryside. Stop at scenic viewpoints along the Yarlung Tsangpo River valley and capture last photos of the stunning Himalayan landscapes. Arrive in Lhasa by late afternoon. The remainder of the day is free for last-minute souvenir shopping at Barkhor Market or simply soaking in the atmosphere of this unique city. Enjoy a farewell dinner celebrating your successful journey to the base of the world's highest mountain. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic return drive", "Yarlung Tsangpo River valley", "Last mountain views", "Barkhor Market shopping", "Farewell dinner"],
  },
  {
    day: 9,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with the incredible achievement of standing at Everest Base Camp - a memory that will stay with you forever. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells", "Everest achievement memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "8 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private vehicle for all sightseeing and transfers (4WD Land Cruiser for overland journeys)",
  "All monument entrance fees",
  "Everest Base Camp entry permit and vehicle permit",
  "Tibet Travel Permit (processed by us)",
  "Alien's Travel Permit",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "All government taxes and official expenses",
  "Certificate of achievement from Everest Base Camp",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 5,500m and emergency evacuation)",
  "China Visa (required separately - we provide Tibet Permit support)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Additional oxygen (supplemental oxygen available on request)",
  "Sleeping bag and personal gear (not needed as you return to hotel same day)",
  "Single room supplement (if applicable)",
];

const gallery = [
  {
    src: "/images/used/tibet-everest.webp",
    alt: "Mount Everest",
    caption: "Mount Everest (8,848m) - World's Highest Peak",
  },
 
  
  
  {
    src: "/images/used/tibet-kingdom-1.webp",
    alt: "Himalayan Panorama",
    caption: "Himalayan Range from Tibet Side",
  },
  {
    src: "/images/used/yamdrok-lake.webp",
    alt: "Yamdrok Lake",
    caption: "Turquoise Yamdrok Lake",
  },
  
  {
    src: "/images/used/tibet-plateau.webp",
    alt: "Tibetan Plateau",
    caption: "Vast Tibetan Plateau",
  },
 
];

const altitudeInfo = [
  {
    location: "Lhasa",
    altitude: "3,650m",
    overnight: "3 nights",
    notes: "Initial acclimatization",
  },
  {
    location: "Gyantse",
    altitude: "3,950m",
    overnight: "1 night",
    notes: "Gradual ascent",
  },
  {
    location: "Shigatse",
    altitude: "3,840m",
    overnight: "2 nights",
    notes: "Tibet's second city",
  },
  {
    location: "Shegar",
    altitude: "4,050m",
    overnight: "2 nights",
    notes: "Everest gateway",
  },
  {
    location: "Everest Base Camp",
    altitude: "5,200m",
    overnight: "Day visit",
    notes: "Highest point - 5,200m",
  },
  {
    location: "Kampala Pass",
    altitude: "4,794m",
    overnight: "Pass only",
    notes: "Scenic viewpoint",
  },
];

const everestFacts = [
  {
    fact: "Height",
    detail: "8,848.86m (29,031.7 ft) - World's Highest Mountain",
  },
  {
    fact: "First Ascent",
    detail: "1953 by Sir Edmund Hillary (NZ) and Tenzing Norgay (NP)",
  },
  {
    fact: "Tibetan Name",
    detail: "Qomolangma - 'Goddess Mother of the World'",
  },
  {
    fact: "Nepali Name",
    detail: "Sagarmatha - 'Forehead in the Sky'",
  },
  {
    fact: "North Side",
    detail: "Tibet Base Camp at 5,200m (our destination)",
  },
  {
    fact: "South Side",
    detail: "Nepal Base Camp at 5,364m",
  },
];

export default function EverestBaseCampTibetPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 6]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Everest Base Camp from Tibet";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Everest Base Camp from Tibet - Himkala Adventure");
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
                <a href="#everest-facts" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Everest Facts
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
            src="/images/used/tibet-everest.webp"
            alt="Everest Base Camp Tibet"
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
                <MapPin className="w-3 h-3 mr-1" /> Tibet, China
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 5,200m / 17,060ft
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Award className="w-3 h-3 mr-1" /> Lifetime Achievement
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              EVEREST BASE CAMP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                FROM TIBET
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              Stand at the foot of the world's highest mountain! Drive across the Tibetan plateau to Everest Base Camp (5,200m), 
              visit the highest monastery on Earth, and witness Mount Everest up close - a lifetime achievement accessible 
              without trekking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-12 relative">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$2,450</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,150</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
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
              <div className="sticky top-24">
                <div className="space-y-4 md:space-y-6">
                  {/* Price Card */}
                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-white/50 text-sm line-through">$2,450</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,150</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $300</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>9 Days / 8 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Apr-Oct</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 2-12</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <span>4WD Land Cruiser transport</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 5,200m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-xs md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Quick Facts
                      </h3>
                      <div className="space-y-2 text-[10px] md:text-sm">
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Start/End Point</span>
                          <span className="font-medium text-[#0f2940]">Lhasa</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Destinations</span>
                          <span className="font-medium text-[#0f2940]">Lhasa, Gyantse, Shigatse, Shegar, EBC</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Everest Base Camp (5,200m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Tour Duration</span>
                          <span className="font-medium text-[#0f2940]">9 Days / 8 Nights</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Moderate (high altitude)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Permits</span>
                          <span className="font-medium text-[#0f2940]">Tibet Permit + EBC Permit</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Everest Facts Card */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Mount Everest Facts
                      </h3>
                      <div className="space-y-2 text-[10px] md:text-sm">
                        {everestFacts.map((item, index) => (
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
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Altitude Profile
                      </h3>
                      <div className="space-y-2 text-[10px] md:text-sm">
                        {altitudeInfo.map((item, index) => (
                          <div key={index} className="flex items-start gap-2 border-b border-[#C5E0ED]/20 last:border-0 pb-1.5 last:pb-0">
                            <div className="w-16 font-medium text-[#0f2940] text-[10px]">{item.location}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-600 text-[10px]">{item.altitude}</span>
                                <span className="text-slate-400 text-[8px]">{item.overnight}</span>
                              </div>
                              <p className="text-slate-500 text-[8px]">{item.notes}</p>
                            </div>
                          </div>
                        ))}
                        <div className="mt-2 bg-amber-50 p-2 rounded-lg">
                          <p className="text-amber-700 text-[8px] flex items-start gap-1">
                            <Info className="w-2.5 h-2.5 shrink-0 mt-0.5" />
                            <span><strong>Acclimatization:</strong> Gradual ascent with 3 nights in Lhasa before going higher.</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("facebook")}
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("twitter")}
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={handleCopyLink}
                        >
                          {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-8 w-full overflow-hidden mt-6 lg:mt-0">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-4">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5 min-h-[44px]"
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
                    The <strong>Everest Base Camp from Tibet</strong> tour offers a unique opportunity to stand at the 
                    foot of the world's highest mountain - <strong>Mount Everest (8,848m)</strong> - without the need 
                    for strenuous trekking. This 9-day journey takes you across the dramatic Tibetan plateau, through 
                    ancient cities and sacred sites, to the legendary North Face Base Camp at 5,200m.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Unlike the Nepalese side which requires multi-day trekking, the Tibetan approach allows you to 
                    drive to within sight of Everest, making this incredible achievement accessible to a wider range 
                    of travelers. You'll visit Rongbuk Monastery, the highest monastery in the world, and stand at 
                    the base camp used by early Everest expeditions and modern climbers attempting the North Ridge route.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With gradual acclimatization built into the itinerary, comfortable 4WD transport, expert guides, 
                    and all permits arranged, this tour offers a safe and memorable journey to the top of the world. 
                    Perfect for adventure seekers, mountain lovers, and anyone wanting to witness Everest up close.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Stand at Everest Base Camp (5,200m) - North Side",
                    "Visit Rongbuk Monastery, the world's highest monastery",
                    "Witness Mount Everest up close - the ultimate mountain",
                    "Drive across the legendary Tibetan plateau",
                    "Cross Kampala Pass at 4,794m with Yamdrok Lake views",
                    "Explore Potala Palace and Jokhang Temple in Lhasa",
                    "Visit Tashilhunpo Monastery in Shigatse",
                    "Photograph the Himalayan range from multiple viewpoints",
                    "Experience Tibetan Buddhist culture and monasteries",
                    "Gradual acclimatization for safety and comfort",
                    "All Everest permits arranged in advance",
                    "Certificate of achievement from Everest Base Camp",
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
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Summer (May - Aug)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmest temperatures, clear skies in the morning, and excellent visibility. Occasional afternoon 
                        clouds but generally good conditions. Best chance for clear Everest views.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <SunriseIcon className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Oct)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear skies, stable weather, and the best mountain views. 
                        Perfect conditions for Everest photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Everest Base Camp Day - Special Highlight */}
              <section className="mb-6 md:mb-12">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50 rounded-lg md:rounded-2xl overflow-hidden">
                  <CardContent className="p-3 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-[#0f2940] text-sm md:text-lg">The Big Day - Everest Base Camp</h3>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">
                      Day 6 is the highlight of your journey. You'll drive from Shegar (4,050m) through the Qomolangma National 
                      Nature Reserve, passing dramatic mountain scenery to reach Rongbuk Monastery (4,980m) - the highest 
                      monastery on Earth. From there, continue to the legendary Everest Base Camp at 5,200m, where you'll 
                      stand face-to-face with the world's highest mountain.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-[10px] md:text-xs">Altitude</span>
                        <p className="text-slate-600 text-[8px] md:text-[10px]">5,200m / 17,060ft</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-[10px] md:text-xs">Distance from Everest</span>
                        <p className="text-slate-600 text-[8px] md:text-[10px]">Approx. 20km</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-[10px] md:text-xs">Time at EBC</span>
                        <p className="text-slate-600 text-[8px] md:text-[10px]">1-2 hours</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-[10px] md:text-xs">Rongbuk Monastery</span>
                        <p className="text-slate-600 text-[8px] md:text-[10px]">4,980m</p>
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
                                <Backpack className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.distance}
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
                            <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

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
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
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
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information - Everest Base Camp</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is MANDATORY</strong> and must cover high altitude up to 5,500m and emergency evacuation.</li>
                    <li>• <strong>Altitude Acclimatization:</strong> This itinerary includes 3 nights in Lhasa before proceeding higher. Even so, some people experience altitude symptoms. Listen to your body and guide.</li>
                    <li>• <strong>Everest Base Camp access:</strong> Weather and road conditions can affect access to EBC. Your safety is our priority - alternate plans will be made if necessary.</li>
                    <li>• <strong>Passport and Permits:</strong> You need a valid passport (6+ months) and China Visa. We arrange all Tibet permits including the special EBC permit. Submit passport copy at least 25 days before travel.</li>
                    <li>• <strong>What to pack:</strong> Warm layers (temperatures near EBC can be near freezing even in summer), sunscreen, sunglasses, hat, and comfortable clothing for long drives.</li>
                    <li>• <strong>Certificate:</strong> You'll receive a commemorative certificate marking your achievement of reaching Everest Base Camp.</li>
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
                      q: "Do I need to trek to reach Everest Base Camp from Tibet?",
                      a: "No! This is the beauty of the Tibetan side - you can drive all the way to within sight of Everest. The journey involves scenic drives in comfortable 4WD vehicles, with only short walks at the sites. This makes Everest accessible to those who cannot or prefer not to trek for multiple days.",
                    },
                    {
                      q: "How high is Everest Base Camp on the Tibetan side?",
                      a: "The Tibetan (north side) Everest Base Camp is at 5,200m (17,060ft). This is actually lower than the Nepalese side base camp (5,364m). You'll spend 1-2 hours at base camp before returning to lower altitude for overnight.",
                    },
                    {
                      q: "Will I definitely see Mount Everest?",
                      a: "Weather permitting, yes! Everest is visible from multiple points along the journey, especially from the viewpoint near Shegar and at Base Camp itself. However, the mountain can be shrouded in clouds, especially in the afternoon. Morning views are typically clearest, which is why we plan to arrive at EBC in the morning.",
                    },
                    {
                      q: "How do I get to Lhasa?",
                      a: "Most travelers fly into Lhasa Gonggar Airport from major Chinese cities like Chengdu, Beijing, Shanghai, or from Kathmandu (seasonal). Flights from Kathmandu offer spectacular Himalayan views. Alternatively, the Qinghai-Tibet railway offers a scenic overland option but takes 20+ hours from mainland China.",
                    },
                    {
                      q: "What permits do I need for Everest Base Camp?",
                      a: "You need: 1) China Visa (obtained from your local Chinese embassy), 2) Tibet Travel Permit, 3) Alien's Travel Permit, and 4) Special EBC permit. We arrange all Tibet permits for you - we need your passport copy at least 25 days before travel.",
                    },
                    {
                      q: "How will the altitude affect me?",
                      a: "Most people experience some symptoms at altitude - mild headache, shortness of breath, fatigue. Our itinerary includes gradual acclimatization with 3 nights in Lhasa before going higher. We carry oxygen cylinders in the vehicle for emergencies. Listen to your body and inform your guide if you feel unwell.",
                    },
                    {
                      q: "What is the accommodation like along the route?",
                      a: "In Lhasa, you'll stay in comfortable 3-star hotels. In Gyantse, Shigatse, and Shegar, accommodation is comfortable but more basic - expect clean rooms with attached bathrooms and hot water (may be limited at peak times). All hotels are chosen for comfort and reliability.",
                    },
                    {
                      q: "Can I combine this with the Nepal side?",
                      a: "Yes! Some travelers combine the Tibet EBC tour with a visit to Nepal, flying from Lhasa to Kathmandu. From there, you could trek to EBC on the Nepalese side (different experience). Contact us for customization options.",
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