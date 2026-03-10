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
    description: "Welcome to Lhasa, the spiritual and historical heart of Tibet! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey into the ancient kingdoms of Tibet. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views. After checking into your hotel, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the ancient kingdoms you'll explore, Tibetan history, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic Yarlung Valley drive", "Acclimatization briefing", "Introduction to Tibetan kingdoms"],
  },
  {
    day: 2,
    title: "Lhasa - Potala Palace & Jokhang Temple",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Begin your exploration of Tibet's ancient capital with a visit to the iconic Potala Palace, the winter palace of the Dalai Lamas and symbol of Tibetan civilization. This 13-story marvel contains over 1,000 rooms, with stunning chapels, tombs of past Dalai Lamas, and breathtaking views of Lhasa. Learn about the history of the Tibetan kingdom and its spiritual leaders. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century during the reign of King Songtsen Gampo. The temple houses the revered Jowo Shakyamuni statue and is a major pilgrimage site. In the evening, walk around the Barkhor Street, the ancient pilgrimage circuit surrounding Jokhang, where you'll see devout pilgrims and experience living history. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace - symbol of Tibetan civilization", "Jokhang Temple (7th century)", "Barkhor pilgrimage circuit", "Ancient Tibetan architecture", "Living Buddhist traditions"],
  },
  {
    day: 3,
    title: "Lhasa - Drepung & Sera Monasteries",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Today you'll explore two of Tibet's greatest monastic universities, centers of learning for centuries. Morning visit to Drepung Monastery, once the world's largest monastery with over 10,000 monks. Founded in 1416, it served as the seat of the Dalai Lamas before the Potala was built. Explore its whitewashed buildings clinging to the hillside, visit the impressive chapels, and learn about Tibetan Buddhist philosophy. After lunch, visit Sera Monastery, another ancient institution founded in 1419, famous for its lively 'debating' sessions where monks engage in spirited philosophical discussions in the courtyard (usually 3-5 PM). Wander through the ancient halls and witness this unique tradition that has continued for centuries. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Drepung Monastery - former seat of Dalai Lamas", "Sera Monastery monk debates", "Ancient monastic universities", "Tibetan Buddhist philosophy", "Centuries-old traditions"],
  },
  {
    day: 4,
    title: "Lhasa to Gyantse - Yamdrok Lake & Tibetan Plateau",
    altitude: "3,650m → 4,794m → 3,950m",
    distance: "260km / 6-7 hrs drive",
    description: "Depart Lhasa and journey into the heart of the ancient Tibetan kingdoms. Cross the Kampala Pass (4,794m) for your first breathtaking view of Yamdrok Lake - one of Tibet's three sacred lakes with turquoise waters stretching beneath majestic snow-capped mountains. This area was historically part of the ancient Tibetan kingdom. Stop for photos at this incredible location. Continue through picturesque valleys to reach Gyantse, a historic trading town and former capital of the Gyantse Kingdom. Upon arrival, visit the famous Pelkor Chode Monastery and its stunning Kumbum Stupa, a unique multi-tiered structure with 108 chapels built in the 15th century. This is one of Tibet's best-preserved architectural gems. Overnight in Gyantse.",
    overnight: "Hotel in Gyantse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yamdrok Lake - sacred turquoise lake", "Kampala Pass (4,794m)", "Ancient Tibetan plateau landscapes", "Pelkor Chode Monastery", "Kumbum Stupa - architectural masterpiece"],
  },
  {
    day: 5,
    title: "Gyantse to Shigatse - Ancient Fortresses & Monasteries",
    altitude: "3,950m → 3,840m",
    distance: "90km / 2 hrs drive",
    description: "Morning visit to the Gyantse Dzong, an ancient fortress perched on a hill overlooking the valley. This fortress played a crucial role in defending the Gyantse Kingdom against foreign invasions and offers panoramic views of the surrounding countryside. After exploring the dzong, drive to Shigatse, Tibet's second-largest city and traditional capital of the Tsang Kingdom. Upon arrival, visit Tashilhunpo Monastery, the traditional seat of the Panchen Lama. Founded in 1447, this massive monastery houses a magnificent 26-meter statue of Maitreya (Future Buddha) and has been a center of Tibetan Buddhism for centuries. Explore the chapels, meet the monks, and experience the spiritual atmosphere of this ancient institution. Evening free to explore Shigatse's old town. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gyantse Dzong - ancient fortress", "Tsang Kingdom history", "Tashilhunpo Monastery", "26m Maitreya statue", "Panchen Lama's traditional seat"],
  },
  {
    day: 6,
    title: "Shigatse to Sakya - Ancient Sakya Kingdom",
    altitude: "3,840m → 4,280m → 3,840m",
    distance: "150km / 3-4 hrs drive",
    description: "Today you'll venture to one of Tibet's most unique ancient sites - the Sakya Monastery, seat of the Sakya Kingdom that ruled Tibet in the 13th century. The drive takes you through beautiful valleys with views of Himalayan peaks. Sakya Monastery is unlike any other in Tibet, with its fortress-like architecture painted in gray and red stripes, symbolizing its unique Buddhist tradition. The monastery's northern library houses one of the world's most valuable collections of Buddhist scriptures, including thousands of ancient manuscripts. Explore the monastery's chapels, see the stunning thangkas and murals, and learn about the Sakya Kingdom's role in Tibetan history. Return to Shigatse in the evening. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sakya Monastery - unique architecture", "Ancient Sakya Kingdom history", "Priceless Buddhist manuscripts", "13th century Tibetan kingdom", "Fortress-like monastery"],
  },
  {
    day: 7,
    title: "Shigatse to Lhasa - Yarlung Valley & Tibetan Civilization",
    altitude: "3,840m → 3,650m",
    distance: "280km / 6-7 hrs drive",
    description: "Begin your return journey to Lhasa with a detour into the Yarlung Valley, considered the cradle of Tibetan civilization. This is where the first Tibetan kings established their kingdom and where Tibetan culture was born. Visit the Yumbulagang Palace, Tibet's oldest building, perched dramatically on a hilltop. According to legend, this palace was built for the first Tibetan king in the 2nd century BC. Explore the nearby Tandruk Monastery, one of Tibet's earliest temples. Continue to Lhasa, arriving by late afternoon. Enjoy a farewell dinner celebrating your journey through the ancient kingdoms of Tibet. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yarlung Valley - cradle of Tibetan civilization", "Yumbulagang Palace - Tibet's oldest building", "First Tibetan kings' history", "Tandruk Monastery", "Farewell dinner"],
  },
  {
    day: 8,
    title: "Lhasa - Ganden Monastery & Optional Activities",
    altitude: "3,650m → 4,300m → 3,650m",
    distance: "70km round trip / 4-5 hrs",
    description: "Today you have options to deepen your exploration of ancient Tibet. The primary excursion is to Ganden Monastery, one of the 'great three' Gelugpa monasteries, founded in 1409 by Tsongkhapa. Perched on a mountain ridge at 4,300m, it offers spectacular views and a profound sense of history. The monastery was the seat of the Ganden Tripa and played a central role in Tibetan Buddhism. Alternatively, you may choose to revisit favorite sites in Lhasa, explore more of the Barkhor market, or simply rest and reflect on your journey. In the evening, enjoy a traditional Tibetan cultural performance with music and dance. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ganden Monastery (optional)", "Tsongkhapa's seat", "Mountain ridge monastery", "Tibetan cultural performance", "Free time for exploration"],
  },
  {
    day: 9,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of ancient kingdoms, sacred monasteries, and the living legacy of Tibetan civilization - a journey through 1,500 years of history that will stay with you forever. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells", "Memories of ancient Tibet"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "8 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed, specialized in Tibetan history)",
  "Private vehicle for all sightseeing and transfers (4WD Land Cruiser for overland journeys)",
  "All monument entrance fees",
  "Tibet Travel Permit (processed by us)",
  "Alien's Travel Permit and Military Permit (for Sakya and Yarlung Valley)",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "Traditional Tibetan cultural performance",
  "All government taxes and official expenses",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 5,000m)",
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
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Potala Palace",
    caption: "Potala Palace - Symbol of Tibetan Civilization",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Yumbulagang Palace",
    caption: "Yumbulagang - Tibet's Oldest Building",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Sakya Monastery",
    caption: "Sakya Monastery - Ancient Kingdom Seat",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Yamdrok Lake",
    caption: "Sacred Yamdrok Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Kumbum Stupa",
    caption: "Kumbum Stupa - Gyantse",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Tashilhunpo Monastery",
    caption: "Tashilhunpo Monastery, Shigatse",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Ganden Monastery",
    caption: "Ganden Monastery on Mountain Ridge",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Gyantse Dzong",
    caption: "Gyantse Dzong - Ancient Fortress",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Yarlung Valley",
    caption: "Yarlung Valley - Cradle of Tibetan Civilization",
  },
];

const kingdomInfo = [
  {
    kingdom: "Tibetan Empire",
    period: "7th - 9th Century",
    capital: "Lhasa",
    significance: "Unified Tibet under King Songtsen Gampo, introduced Buddhism",
    sites: "Jokhang Temple, Potala Palace (later)",
  },
  {
    kingdom: "Sakya Kingdom",
    period: "13th - 14th Century",
    capital: "Sakya",
    significance: "Ruled Tibet under Mongol patronage, Sakya Monastery",
    sites: "Sakya Monastery",
  },
  {
    kingdom: "Tsang Kingdom",
    period: "15th - 17th Century",
    capital: "Shigatse",
    significance: "Rival to Lhasa, patronized Karma Kagyu school",
    sites: "Tashilhunpo Monastery, Shigatse Dzong",
  },
  {
    kingdom: "Gyantse Kingdom",
    period: "14th - 17th Century",
    capital: "Gyantse",
    significance: "Independent principality, trade center",
    sites: "Pelkor Chode, Kumbum Stupa, Gyantse Dzong",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa",
    altitude: "3,650m",
    overnight: "5 nights",
    notes: "Acclimatization focus - rest on arrival",
  },
  {
    location: "Gyantse",
    altitude: "3,950m",
    overnight: "1 night",
    notes: "Ancient kingdom capital",
  },
  {
    location: "Shigatse",
    altitude: "3,840m",
    overnight: "2 nights",
    notes: "Tsang Kingdom capital",
  },
  {
    location: "Sakya",
    altitude: "4,280m",
    overnight: "Day trip",
    notes: "Sakya Kingdom - highest point",
  },
  {
    location: "Kampala Pass",
    altitude: "4,794m",
    overnight: "Pass only",
    notes: "Highest point - short photo stop",
  },
  {
    location: "Ganden",
    altitude: "4,300m",
    overnight: "Day trip",
    notes: "Optional excursion",
  },
];

export default function TibetanAncientKingdomsTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "9-Day Tibetan Ancient Kingdoms Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("9-Day Tibetan Ancient Kingdoms Tour - Himkala Adventure");
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
                <a href="#kingdoms" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Ancient Kingdoms
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
            src="https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop"
            alt="Tibetan Ancient Kingdoms Tour"
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
                <Crown className="w-3 h-3 mr-1" /> Ancient Kingdoms
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <History className="w-3 h-3 mr-1" /> 1,500 Years of History
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              9 DAYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                TIBETAN ANCIENT KINGDOMS TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              Journey through 1,500 years of Tibetan history - from the cradle of civilization in the Yarlung Valley 
              to the powerful kingdoms of Sakya, Tsang, and Gyantse. Explore ancient monasteries, fortress dzongs, 
              and the living legacy of Tibet's royal dynasties.
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
                <div className="text-xs text-slate-400 line-through">$2,850</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,550</div>
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
                      <span className="text-white/50 text-sm line-through">$2,850</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,550</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>9 Days / 8 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: May-Oct</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-10</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>3-Star Hotels</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Crown className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4 Ancient Kingdoms</span>
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
                        <span className="text-slate-500">Kingdoms Visited</span>
                        <span className="font-medium text-[#0f2940]">Tibetan Empire, Sakya, Tsang, Gyantse</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Kampala Pass (4,794m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour Duration</span>
                        <span className="font-medium text-[#0f2940]">9 Days / 8 Nights</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Moderate (altitude)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Permits</span>
                        <span className="font-medium text-[#0f2940]">Tibet Permit + Military Permits</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ancient Kingdoms Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Crown className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Ancient Kingdoms of Tibet
                    </h3>
                    <div className="space-y-3 text-xs md:text-sm">
                      {kingdomInfo.map((kingdom, index) => (
                        <div key={index} className="border-b border-[#C5E0ED]/20 last:border-0 pb-2 last:pb-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[#0f2940]">{kingdom.kingdom}</span>
                            <Badge className="bg-[#C5E0ED]/30 text-[#0f2940] text-[8px]">{kingdom.period}</Badge>
                          </div>
                          <p className="text-slate-600 text-[10px] mb-1">{kingdom.significance}</p>
                          <p className="text-slate-500 text-[8px]">Sites: {kingdom.sites}</p>
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
                          <span><strong>Acclimatization:</strong> 5 nights in Lhasa allows proper adjustment before higher altitudes.</span>
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
                    The <strong>9-Day Tibetan Ancient Kingdoms Tour</strong> is a profound journey through 
                    <strong> 1,500 years of Tibetan history</strong>, exploring the remnants of the great kingdoms 
                    that shaped the Roof of the World. From the cradle of Tibetan civilization in the Yarlung Valley 
                    to the powerful dynasties of Sakya, Tsang, and Gyantse, this tour offers an unparalleled 
                    immersion into Tibet's royal heritage.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Your journey begins in Lhasa, the ancient capital of the Tibetan Empire, where you'll explore 
                    the Potala Palace and Jokhang Temple. You'll then venture across the Tibetan plateau to discover 
                    the fortress monasteries of Gyantse, the Panchen Lama's seat at Tashilhunpo, and the unique 
                    Sakya Monastery with its priceless manuscripts. The highlight is a visit to the Yarlung Valley, 
                    where the first Tibetan kings established their kingdom and where Tibet's oldest building, 
                    Yumbulagang Palace, still stands.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With expert local guides specializing in Tibetan history, comfortable accommodation, and all 
                    permits arranged, this tour offers a unique opportunity to understand the political and spiritual 
                    foundations of Tibetan civilization. Perfect for history enthusiasts, culture seekers, and anyone 
                    wanting to go beyond the surface of this fascinating land.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Yumbulagang - Tibet's oldest building (2nd century BC)",
                    "Explore the Yarlung Valley, cradle of Tibetan civilization",
                    "Discover the unique Sakya Monastery and its ancient manuscripts",
                    "Tour the Potala Palace, symbol of Tibetan sovereignty",
                    "Visit four ancient kingdoms: Tibetan Empire, Sakya, Tsang, Gyantse",
                    "Explore Gyantse Dzong and Kumbum Stupa",
                    "Visit Tashilhunpo Monastery, seat of the Panchen Lama",
                    "Cross the Tibetan plateau via Kampala Pass (4,794m)",
                    "Witness monk debates at Sera Monastery",
                    "Photograph turquoise Yamdrok Lake",
                    "All Tibet and Military permits arranged",
                    "Expert historian guide specializing in Tibetan kingdoms",
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
                        <Sun className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Summer (Jun - Aug)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmest temperatures, green valleys, and clear skies. Perfect for photography and comfortable 
                        sightseeing. Occasional afternoon showers but generally excellent conditions.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Oct)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear skies, stable weather, and the best mountain views. 
                        Perfect conditions for crossing high passes.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information - Tibet Travel</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude up to 5,000m and emergency evacuation.</li>
                    <li>• <strong>Passport and Permits:</strong> You need a valid passport (6+ months validity) and China Visa (obtained separately). We arrange all Tibet permits including special Military Permits for Sakya and Yarlung Valley. Submit passport copy at least 25 days before travel.</li>
                    <li>• <strong>Altitude Acclimatization:</strong> This itinerary includes 5 nights in Lhasa before venturing higher, allowing proper acclimatization. Oxygen cylinders are available in the vehicle for emergencies.</li>
                    <li>• <strong>Ancient Sites:</strong> Some sites like Yumbulagang and Sakya have limited facilities. Prepare accordingly with snacks, water, and appropriate clothing.</li>
                    <li>• <strong>Photography Restrictions:</strong> Military areas and some monastery interiors prohibit photography. Always ask your guide before taking photos.</li>
                    <li>• <strong>Cultural Sensitivity:</strong> These are active religious sites. Dress modestly (shoulders and knees covered) and behave respectfully.</li>
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
                      q: "What makes this tour different from other Tibet tours?",
                      a: "This tour focuses specifically on Tibet's royal and political history, visiting the actual seats of ancient kingdoms. You'll explore sites rarely visited on standard tours, including the Yarlung Valley (cradle of Tibetan civilization), Sakya Monastery (seat of the Sakya Kingdom), and Yumbulagang Palace (Tibet's oldest building). Our guides specialize in Tibetan history.",
                    },
                    {
                      q: "Do I need special permits for these ancient sites?",
                      a: "Yes. In addition to the standard Tibet Travel Permit, this itinerary requires Military Permits for Sakya and the Yarlung Valley. We arrange all permits for you, but need your passport copy at least 25 days before travel. Note that some areas may have restricted access on certain days - we plan accordingly.",
                    },
                    {
                      q: "How physically demanding is this tour?",
                      a: "The tour involves moderate walking at altitude, with some sites requiring climbing steps (Potala Palace, Kumbum Stupa). The main challenge is the altitude, with overnight stays at 3,650-3,950m and day trips to 4,300-4,794m. Good general fitness is sufficient, but you should be comfortable with walking 2-4 hours daily.",
                    },
                    {
                      q: "What is the accommodation like in remote areas?",
                      a: "In Lhasa, you'll stay in comfortable 3-star hotels with modern facilities. In Gyantse and Shigatse, accommodation is comfortable but more basic - expect clean rooms with attached bathrooms and reliable hot water. Sakya is visited as a day trip from Shigatse, so no overnight there.",
                    },
                    {
                      q: "Will I see the famous Sakya library?",
                      a: "Yes! The Sakya Monastery's northern library is one of Tibet's greatest treasures, housing thousands of ancient manuscripts, including the world-famous 'Sakya Legshe' and texts written in gold and silver. The library is usually accessible, though photography is strictly prohibited to preserve these priceless artifacts.",
                    },
                    {
                      q: "What is the significance of Yumbulagang?",
                      a: "Yumbulagang is Tibet's oldest building, traditionally dated to the 2nd century BC as the palace of the first Tibetan king, Nyatri Tsenpo. It represents the beginning of Tibetan civilization and the Yarlung dynasty that eventually united Tibet. The current structure was partially rebuilt but stands on the original foundations.",
                    },
                    {
                      q: "Can I combine this with Mount Everest Base Camp?",
                      a: "Yes! This tour can be extended to include Everest Base Camp (additional 4-5 days). Contact us with your interests and available time, and we can customize an itinerary that includes both the ancient kingdoms and the world's highest mountain.",
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