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
    description: "Welcome to Lhasa, the spiritual heart of Tibet and home to some of the world's most sacred monasteries! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey to the holy city. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views and your first glimpse of Tibetan landscapes. After checking into your hotel in Lhasa, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the monastery discovery tour ahead, Tibetan Buddhism, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic drive to Lhasa", "Acclimatization briefing", "Introduction to Tibetan Buddhism"],
  },
  {
    day: 2,
    title: "Lhasa - Jokhang Temple & Ramoche Monastery",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Begin your monastery discovery with Lhasa's two most sacred temples. Morning visit to the Jokhang Temple, Tibet's holiest shrine, built in the 7th century during the reign of King Songtsen Gampo. The temple houses the revered Jowo Shakyamuni statue - believed to have been blessed by Buddha himself - and is the ultimate pilgrimage destination for Tibetan Buddhists. Walk the Barkhor pilgrimage circuit surrounding the temple, where you'll see devout pilgrims performing prostrations and spinning prayer wheels. After lunch, visit Ramoche Monastery, Jokhang's sister temple, which originally housed the Jowo statue. This lesser-visited gem offers a more intimate monastery experience with beautiful murals and a peaceful atmosphere. Evening free to explore Barkhor Market for religious artifacts and souvenirs. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jokhang Temple - Tibet's holiest shrine", "Jowo Shakyamuni statue", "Barkhor pilgrimage circuit", "Ramoche Monastery", "Prayer wheels and pilgrim atmosphere"],
  },
  {
    day: 3,
    title: "Lhasa - Drepung Monastery & Nechung Monastery",
    altitude: "3,650m → 3,800m",
    distance: "Local sightseeing",
    description: "Today you'll explore the 'great' monasteries of Lhasa. Morning visit to Drepung Monastery, once the world's largest monastery with over 10,000 monks. Founded in 1416, it served as the seat of the Dalai Lamas before the Potala was built. Wander through its whitewashed buildings clinging to the hillside, visit the impressive chapels including the Tsokchen (main assembly hall), and explore the various colleges (dratsangs) that once housed thousands of monks. Your guide will explain the monastic hierarchy and daily life of Tibetan Buddhist monks. Afternoon visit to Nechung Monastery, the former seat of the State Oracle of Tibet. This small but significant monastery contains beautiful murals and was the residence of the Nechung Oracle, who played a crucial role in Tibetan state decisions. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Drepung Monastery - world's largest monastery", "Tsokchen assembly hall", "Monastic colleges", "Nechung Monastery", "State Oracle history"],
  },
  {
    day: 4,
    title: "Lhasa - Sera Monastery & Retreat Hermitages",
    altitude: "3,650m → 3,680m",
    distance: "Local sightseeing",
    description: "Discover the vibrant monastic life at Sera Monastery, founded in 1419. Morning exploration of this ancient institution, famous for its lively 'debating' sessions where monks engage in spirited philosophical discussions in the courtyard (usually 3-5 PM). Wander through the temples, visit the printing house where scriptures are still printed using traditional woodblocks, and climb to the upper terraces for panoramic views. After lunch, take a short hike to the nearby hermitage caves and retreat centers where monks have meditated in solitude for centuries. These peaceful spots offer insight into the deeper aspects of Buddhist practice away from the main monastery. Witness the famous monk debates in the late afternoon - a truly unique experience. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sera Monastery", "Monk philosophical debates", "Traditional woodblock printing", "Hermitage caves", "Meditation retreats"],
  },
  {
    day: 5,
    title: "Lhasa - Ganden Monastery (4,300m)",
    altitude: "3,650m → 4,300m → 3,650m",
    distance: "70km round trip / 4-5 hrs",
    description: "Today's excursion takes you to Ganden Monastery, one of the 'great three' Gelugpa monasteries and the seat of the Ganden Tripa (head of the Gelug school). Founded in 1409 by Tsongkhapa himself, this monastery is perched dramatically on a mountain ridge at 4,300m, offering spectacular views of the surrounding valley. The drive itself is beautiful, winding through rural Tibetan countryside. Explore the monastery's temples, including the Serkhang (golden house) containing Tsongkhapa's relics, and walk the kora (pilgrimage path) around the monastery with prayer flags fluttering in the wind. The higher altitude provides a different perspective and a taste of more remote monastic life. Return to Lhasa in the late afternoon. Farewell dinner celebrating your monastery discovery journey. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ganden Monastery (4,300m)", "Tsongkhapa's relics", "Mountain ridge location", "Monastery kora path", "Panoramic valley views"],
  },
  {
    day: 6,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, enjoy some free time for reflection or last-minute souvenir shopping at Barkhor Market, where you can find religious artifacts, prayer flags, and Tibetan handicrafts to remember your journey. Transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of ancient monasteries, chanting monks, fluttering prayer flags, and the profound spiritual heritage of Tibet. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Free morning", "Barkhor Market shopping", "Airport transfer", "Departure assistance", "Spiritual memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "5 nights hotel accommodation (3-star with breakfast) in Lhasa",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed, specializing in Buddhist monasteries)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees (Jokhang, Ramoche, Drepung, Nechung, Sera, Ganden)",
  "Tibet Travel Permit (processed by us)",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency (especially for Ganden day)",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 4,500m)",
  "China Visa (required separately - we provide Tibet Permit support)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Single room supplement (if applicable)",
];

const gallery = [
 
  
  {
    src: "/images/used/prayer-wheels.webp",
    alt: "Prayer Wheels",
    caption: "Prayer Wheels at Monastery",
  },
 
  {
    src: "/images/used/jokhang-monk.webp",
    alt: "Monk in Prayer",
    caption: "Monk in Prayer at Monastery",
  },
  
    {
    src: "/images/used/tibet-prayers.webp",
    alt: "Butter Lamps in Jokhang Monastery",
    caption: "Lamps at Monastery",
  },
  
];

const monasteryInfo = [
  {
    monastery: "Jokhang Temple",
    founded: "7th century",
    order: "Various",
    significance: "Houses the Jowo Shakyamuni statue, Tibet's holiest shrine",
    highlights: "Jowo statue, Barkhor circuit, pilgrims",
  },
  {
    monastery: "Ramoche",
    founded: "7th century",
    order: "Gelug",
    significance: "Sister temple to Jokhang, originally housed Jowo statue",
    highlights: "Peaceful atmosphere, ancient murals",
  },
  {
    monastery: "Drepung",
    founded: "1416",
    order: "Gelug",
    significance: "Former seat of Dalai Lamas, once 10,000 monks",
    highlights: "Tsokchen hall, monastic colleges, hillside location",
  },
  {
    monastery: "Nechung",
    founded: "8th century",
    order: "Nyingma/Gelug",
    significance: "Former State Oracle seat",
    highlights: "Oracle history, beautiful murals",
  },
  {
    monastery: "Sera",
    founded: "1419",
    order: "Gelug",
    significance: "Famous for monk debates",
    highlights: "Debates (3-5pm), printing house, hermitages",
  },
  {
    monastery: "Ganden",
    founded: "1409",
    order: "Gelug",
    significance: "Seat of Ganden Tripa, founded by Tsongkhapa",
    highlights: "Mountain location (4,300m), Tsongkhapa relics",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa City",
    altitude: "3,650m",
    overnight: "5 nights",
    notes: "Base for monastery exploration",
  },
  {
    location: "Jokhang Temple",
    altitude: "3,660m",
    notes: "City center, gentle walking",
  },
  {
    location: "Drepung Monastery",
    altitude: "3,800m",
    notes: "Hillside location, some incline",
  },
  {
    location: "Sera Monastery",
    altitude: "3,680m",
    notes: "Gentle walking, debates courtyard",
  },
  {
    location: "Ganden Monastery",
    altitude: "4,300m",
    notes: "Highest point, mountain ridge",
  },
];

export default function MonasteryDiscoveryTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "6-Day Monastery Discovery Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("6-Day Monastery Discovery Tour - Himkala Adventure");
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
                <a href="#monasteries" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Monasteries
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
            src="/images/used/tibet-main-page.webp"
            alt="Monastery Discovery Tour Tibet"
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
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Monastery Discovery
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Scroll className="w-3 h-3 mr-1" /> Buddhist Heritage
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              6 DAYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                MONASTERY DISCOVERY TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              Journey into the heart of Tibetan Buddhism. Explore six of Tibet's most significant monasteries, 
              witness living traditions, and discover the spiritual heritage of the 'Roof of the World'.
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
                <div className="text-xs text-slate-400 line-through">$1,450</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,250</div>
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
                      <span className="text-white/50 text-sm line-through">$1,450</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,250</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $200</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>6 Days / 5 Nights</span>
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
                        <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>6 Monasteries</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 4,300m</span>
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
                        <span className="text-slate-500">Monasteries Visited</span>
                        <span className="font-medium text-[#0f2940]">Jokhang, Ramoche, Drepung, Nechung, Sera, Ganden</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Ganden Monastery (4,300m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour Duration</span>
                        <span className="font-medium text-[#0f2940]">6 Days / 5 Nights</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Easy to Moderate</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Permits</span>
                        <span className="font-medium text-[#0f2940]">Tibet Travel Permit</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Monasteries Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Monasteries of the Tour
                    </h3>
                    <div className="space-y-3 text-xs md:text-sm">
                      {monasteryInfo.map((item, index) => (
                        <div key={index} className="border-b border-[#C5E0ED]/20 last:border-0 pb-2 last:pb-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#0f2940] text-xs">{item.monastery}</span>
                            <Badge className="bg-[#C5E0ED]/30 text-[#0f2940] text-[8px]">{item.founded}</Badge>
                          </div>
                          <p className="text-slate-600 text-[9px] mb-1">{item.significance}</p>
                          <p className="text-slate-500 text-[8px]">Highlights: {item.highlights}</p>
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
                          <div className="w-24 font-medium text-[#0f2940] text-[10px]">{item.location}</div>
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
                          <span><strong>Note:</strong> Ganden Monastery at 4,300m is the highest point - oxygen available if needed.</span>
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
                    The <strong>6-Day Monastery Discovery Tour</strong> is a deep dive into the living Buddhist 
                    heritage of Tibet. This carefully curated journey takes you to <strong>six of Tibet's most 
                    significant monasteries</strong>, from the holiest Jokhang Temple to the mountain-perched 
                    Ganden Monastery, offering unparalleled insight into Tibetan Buddhist traditions, architecture, 
                    and monastic life.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    You'll explore the great monastic universities of <strong>Drepung and Sera</strong>, witness 
                    the famous monk debates at Sera, visit the former seat of the State Oracle at <strong>Nechung 
                    Monastery</strong>, and discover the quieter <strong>Ramoche Monastery</strong>. The journey 
                    culminates with an excursion to <strong>Ganden Monastery</strong> at 4,300m, founded by the 
                    great teacher Tsongkhapa and offering spectacular mountain views.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With expert local guides specializing in Buddhist philosophy, comfortable accommodation, and 
                    gradual acclimatization, this tour offers a profound spiritual and cultural experience. Perfect 
                    for those seeking to understand the heart of Tibetan Buddhism beyond the surface.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit six of Tibet's most significant monasteries",
                    "See the sacred Jowo Shakyamuni statue at Jokhang Temple",
                    "Witness lively monk debates at Sera Monastery",
                    "Explore Drepung, once the world's largest monastery",
                    "Visit Ganden Monastery at 4,300m with mountain views",
                    "Walk the Barkhor pilgrim circuit with devout Tibetans",
                    "Discover the peaceful Ramoche Monastery",
                    "Learn about the State Oracle at Nechung Monastery",
                    "See traditional woodblock printing at Sera",
                    "Experience meditation hermitages and retreat caves",
                    "Expert guide specializing in Buddhist philosophy",
                    "All Tibet permits arranged in advance",
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
                        Warmest temperatures, clear mornings, and lush valleys. Monastic life is in full swing with 
                        many monks in residence.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect temperatures 
                        for exploring monasteries and the Ganden excursion.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Monastic Life Section */}
              <section className="mb-6 md:mb-12">
                <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200/50 rounded-lg md:rounded-2xl overflow-hidden">
                  <CardContent className="p-3 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#0f2940] text-sm md:text-lg">Living Monastic Tradition</h3>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">
                      Unlike museum pieces, Tibet's monasteries are living institutions where monks continue ancient 
                      traditions of study, debate, and practice. You'll witness:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                      <div className="bg-white/80 p-2 rounded-lg text-center">
                        <span className="text-[#0f2940] font-bold text-[8px] block">Prayer Sessions</span>
                        <p className="text-slate-500 text-[7px]">Daily rituals</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg text-center">
                        <BookOpen className="w-4 h-4 mx-auto text-[#2d6a8a] mb-1" />
                        <span className="text-[#0f2940] font-bold text-[8px] block">Debates</span>
                        <p className="text-slate-500 text-[7px]">Philosophical training</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg text-center">
                        <Scroll className="w-4 h-4 mx-auto text-[#2d6a8a] mb-1" />
                        <span className="text-[#0f2940] font-bold text-[8px] block">Scripture Study</span>
                        <p className="text-slate-500 text-[7px]">Traditional education</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg text-center">
                        <span className="text-[#0f2940] font-bold text-[8px] block">Meditation</span>
                        <p className="text-slate-500 text-[7px]">Retreat practice</p>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information - Monastery Visits</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude up to 4,500m.</li>
                    <li>• <strong>Passport and Permits:</strong> You need a valid passport (6+ months) and China Visa. We arrange your Tibet Travel Permit - submit passport copy at least 20 days before travel.</li>
                    <li>• <strong>Dress Code:</strong> Modest clothing covering shoulders and knees is required at all monasteries. Remove hats when entering temple halls.</li>
                    <li>• <strong>Photography:</strong> Interior photography is strictly prohibited in most monastery chapels. Always ask your guide before taking photos of monks or pilgrims.</li>
                    <li>• <strong>Respectful Behavior:</strong> Speak quietly, avoid pointing feet at sacred objects, and follow your guide's instructions regarding proper conduct.</li>
                    <li>• <strong>Ganden Monastery:</strong> At 4,300m, you may feel the altitude. Take it slow, and inform your guide if you feel unwell. Oxygen is available.</li>
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
                      q: "Which monasteries are included in this tour?",
                      a: "This tour covers six of Tibet's most significant monasteries: Jokhang Temple (Tibet's holiest shrine), Ramoche Monastery (Jokhang's sister temple), Drepung Monastery (once the world's largest), Nechung Monastery (former State Oracle seat), Sera Monastery (famous for monk debates), and Ganden Monastery (founded by Tsongkhapa at 4,300m). Each offers unique insights into Tibetan Buddhism.",
                    },
                    {
                      q: "Will I see the monk debates at Sera Monastery?",
                      a: "Yes! The famous monk debates at Sera Monastery typically take place daily from 3:00 PM to 5:00 PM in the debating courtyard (except on special holidays). This is one of the highlights of the tour and a unique opportunity to witness living Buddhist philosophical tradition.",
                    },
                    {
                      q: "What is the significance of the Jowo Shakyamuni statue?",
                      a: "The Jowo Shakyamuni statue in Jokhang Temple is Tibet's most sacred religious object. According to tradition, it was blessed by Buddha himself and brought to Tibet in the 7th century through the marriages of King Songtsen Gampo. Pilgrims travel from across Tibet to make offerings before this statue.",
                    },
                    {
                      q: "How challenging is the Ganden Monastery excursion?",
                      a: "Ganden Monastery is at 4,300m, about 45km from Lhasa. The drive takes about 1.5 hours each way on winding mountain roads. At the monastery, there is some walking on uneven paths and steps, but it's manageable for most visitors. The altitude is the main consideration - take it slow, and inform your guide if you feel unwell. Oxygen is available in the vehicle.",
                    },
                    {
                      q: "Do I need a special permit for these monasteries?",
                      a: "All monasteries on this tour are covered by the standard Tibet Travel Permit, which we arrange for you. You do not need additional permits. However, you must have your passport and permit with you when visiting, as checkpoints may be present.",
                    },
                    {
                      q: "What is the best time to see the monasteries?",
                      a: "Monasteries are generally open from 9:00 AM to 4:00 PM. Mornings are less crowded and offer better light for photography. The monk debates at Sera are in the afternoon (3-5 PM). Our itinerary is timed to give you the best experience at each site.",
                    },
                    {
                      q: "Can I meet with monks and ask questions?",
                      a: "Yes, to some extent. Your guide can facilitate interactions with monks at the monasteries. Some monks speak basic English and are happy to chat with visitors. At Sera and Drepung, there are more opportunities for interaction than at the busier Jokhang.",
                    },
                    {
                      q: "Is photography allowed inside the monasteries?",
                      a: "Generally, photography is prohibited inside temple halls and chapels out of respect for the sacred spaces and to preserve ancient murals. Exterior photography is allowed throughout. At Sera's debating courtyard, photography is permitted but be respectful and avoid disturbing the debates. Always ask your guide if unsure.",
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