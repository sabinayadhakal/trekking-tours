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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Drive to Thimphu",
    altitude: "2,280m → 2,320m",
    distance: "50km / 1.5 hrs drive",
    description: "Welcome to the Land of the Thunder Dragon! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, visit the Buddha Dordenma statue - one of the largest Buddha statues in the world at 51.5 meters. Evening exploration of Thimphu's main street and visit to the local craft market. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Buddha Dordenma viewpoint", "Thimphu craft market", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Thimphu Sightseeing",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "Full day exploring the cultural treasures of Thimphu. Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional Bhutanese painting and sculpture. Afternoon visit to the Folk Heritage Museum and Textile Museum showcasing traditional Bhutanese life and weaving arts. End the day at the massive Buddha Dordenma viewpoint for sunset photos.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Arts and Crafts School", "Folk Heritage Museum", "Textile Museum"],
  },
  {
    day: 3,
    title: "Thimphu to Punakha via Dochula Pass",
    altitude: "2,320m → 3,100m → 1,300m",
    distance: "75km / 3 hrs drive",
    description: "After breakfast, drive eastward toward Punakha, crossing the spectacular Dochula Pass (3,100m). On a clear day, the pass offers a stunning 360-degree view of the Himalayan range including Gangkar Puensum - the world's highest unclimbed mountain. Visit the 108 Druk Wangyal Chortens and the Druk Wangyal Lhakhang built in honor of Bhutanese soldiers. Descend through changing vegetation to the subtropical Punakha Valley. Afternoon visit to Punakha Dzong - arguably Bhutan's most beautiful dzong, strategically located at the confluence of the Pho Chhu and Mo Chhu rivers. Evening walk across the Punakha Suspension Bridge.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass (3,100m)", "108 chortens", "Himalayan views", "Punakha Dzong", "Suspension bridge"],
  },
  {
    day: 4,
    title: "Punakha Valley Exploration & Drive to Paro",
    altitude: "1,300m → 2,280m",
    distance: "130km / 4 hrs drive",
    description: "Morning hike to Chimi Lhakhang - the 'Fertility Temple' dedicated to the Divine Madman, Drukpa Kunley. The trail passes through picturesque rice fields and traditional villages. Visit the temple and receive blessings. Afternoon drive back to Paro, retracing your route through Dochula Pass with another opportunity for Himalayan photos. En route, stop at Simtokha Dzong - the oldest dzong in Bhutan (1629), now a monastic school. Arrive in Paro by evening. Farewell dinner at a traditional farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Chimi Lhakhang hike", "Rice field villages", "Dochula Pass", "Simtokha Dzong", "Farewell cultural dinner"],
  },
  {
    day: 5,
    title: "Taktsang Monastery (Tiger's Nest) Hike & Departure",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-6 hrs hike",
    description: "Early morning drive to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the perfect finale to your delightful journey. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint, you'll see the monastery in all its glory. Time permitting, continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. After descending, enjoy lunch before transferring to Paro International Airport for your departure flight. Our representative will assist with check-in. Tashi Delek (goodbye and good luck)!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Tiger's Monastery hike", "Cliff-side monastery", "Prayer flag forests", "Farewell to Bhutan", "Departure assistance"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation (3-star with breakfast) - 2 nights Thimphu, 1 night Punakha, 1 night Paro",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (4 nights = $400)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "Farmhouse visit with traditional welcome",
  "Cultural performance at farewell dinner",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Punakha Dzong",
    caption: "Punakha Dzong - Bhutan's Most Beautiful Fortress",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Taktsang Monastery",
    caption: "Taktsang Monastery - The Tiger's Nest",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Tashichho Dzong",
    caption: "Tashichho Dzong, Thimphu",
  },
  {
    src: "https://images.unsplash.com/photo-1625401905206-6d0b9b6f4b4d?q=80&w=2070&auto=format&fit=crop",
    alt: "Dochula Pass",
    caption: "108 Chortens at Dochula Pass",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Buddha Dordenma",
    caption: "Buddha Dordenma - Thimphu Valley",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Prayer Flags",
    caption: "Prayer Flags in the Himalayas",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Chimi Lhakhang",
    caption: "Chimi Lhakhang - Fertility Temple",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Traditional Architecture",
    caption: "Traditional Bhutanese Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Paro Valley",
    caption: "Scenic Paro Valley",
  },
];

export default function DelightfulBhutanTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "5-Day Delightful Bhutan Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("5-Day Delightful Bhutan Tour - Himkala Adventure");
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
            alt="Delightful Bhutan Tour"
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
                <MapPin className="w-3 h-3 mr-1" /> Kingdom of Bhutan
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Award className="w-3 h-3 mr-1" /> Delightful Experience
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> 3 Valleys
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              5 DAYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                DELIGHTFUL BHUTAN TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              A perfectly paced journey through Bhutan's western valleys - experience the magic of Thimphu, 
              the beauty of Punakha, and the iconic Tiger's Nest Monastery. Ideal for those seeking 
              a comprehensive Bhutan experience in just 5 days.
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
                <div className="text-xs text-slate-400 line-through">$2,250</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,950</div>
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
                      <span className="text-white/50 text-sm line-through">$2,250</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,950</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>5 Days / 4 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Mar-May, Sep-Nov</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>3-Star Hotels & Resorts</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>All Meals Included</span>
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
                        <span className="font-medium text-[#0f2940]">Paro Airport</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Valleys Covered</span>
                        <span className="font-medium text-[#0f2940]">Paro, Thimphu, Punakha</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Dochula Pass (3,100m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Duration</span>
                        <span className="font-medium text-[#0f2940]">5 Days / 4 Nights</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Easy to Moderate</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Visa & SDF</span>
                        <span className="font-medium text-[#0f2940]">Fully Included</span>
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
                    The <strong>5-Day Delightful Bhutan Tour</strong> offers the perfect balance of culture, 
                    scenery, and iconic experiences in the <strong>Kingdom of Bhutan</strong>. This carefully 
                    crafted itinerary takes you through three of Bhutan's most beautiful western valleys: 
                    <strong> Paro, Thimphu, and Punakha</strong>, each offering unique insights into this 
                    Himalayan kingdom's living traditions.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    From the bustling capital of Thimphu with its magnificent dzongs and monasteries to the 
                    subtropical Punakha Valley with its stunning fortress at the river confluence, and finally 
                    the serene Paro Valley - this tour packs the essential Bhutanese experiences into a perfectly 
                    paced 5-day journey.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The highlight is undoubtedly the <strong>hike to Taktsang Monastery (Tiger's Nest)</strong>, 
                    Bhutan's most revered site perched dramatically on a cliff face. With expert local guides, 
                    all meals included, and the mandatory Sustainable Development Fee covered, this tour offers 
                    a delightful and hassle-free introduction to the Land of the Thunder Dragon.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                    "Explore three valleys: Paro, Thimphu, and Punakha",
                    "Visit Punakha Dzong - Bhutan's most beautiful fortress",
                    "Cross Dochula Pass with 108 chortens & Himalayan views",
                    "Explore Tashichho Dzong and National Memorial Chorten",
                    "Walk through rice fields to Chimi Lhakhang",
                    "Visit Buddha Dordenma - one of the largest Buddha statues",
                    "Experience traditional farmhouse hospitality",
                    "Farewell dinner with cultural performance",
                    "All visas and SDF fees ($400 for 4 nights) included",
                    "Expert local guides sharing cultural insights",
                    "Perfectly paced for a short but comprehensive visit",
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
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming rhododendrons, and clear skies. Perfect for the Tiger's Nest 
                        hike and valley exploration. Paro Tshechu festival often falls in spring.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear mountain views, pleasant weather, and vibrant 
                        festivals including the famous Thimphu Tshechu.
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover medical emergencies and evacuation.</li>
                    <li>• Bhutan requires a minimum <strong>Sustainable Development Fee (SDF) of $100 per night</strong> - for 4 nights this is $400, which is fully included in our package.</li>
                    <li>• The Tiger's Nest hike takes 5-6 hours round trip with significant uphill sections - good walking shoes are essential.</li>
                    <li>• <strong>Visa is processed by us</strong> - we need a clear passport copy and passport photo at least 15 days before travel.</li>
                    <li>• This itinerary covers three valleys with comfortable driving distances - private vehicle provided throughout.</li>
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
                      q: "Is this tour suitable for first-time visitors to Bhutan?",
                      a: "Absolutely! This 5-day Delightful Bhutan Tour is specifically designed for first-time visitors who want to experience the essential highlights of Bhutan in a short but well-paced itinerary. It covers the must-see destinations (Paro, Thimphu, Punakha) and includes the iconic Tiger's Nest hike.",
                    },
                    {
                      q: "What is the Sustainable Development Fee (SDF) and is it included?",
                      a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. It funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment. For this 4-night tour, the SDF of $400 is fully included in our package price - you don't need to pay anything extra.",
                    },
                    {
                      q: "Do I need a visa? How does it work?",
                      a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                    },
                    {
                      q: "How difficult is the Tiger's Nest hike?",
                      a: "The hike to Taktsang Monastery is moderate and takes 5-6 hours round trip. The trail is well-maintained but has many stone steps and significant uphill sections. The first 45 minutes are steep, then you descend to a cafeteria viewpoint before the final climb. Most people with reasonable fitness can complete it.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "We use comfortable 3-star hotels throughout your journey. In Thimphu (2 nights), Punakha (1 night), and Paro (1 night). All rooms have attached bathrooms with hot water, comfortable beds, and heating. Properties are centrally located and offer authentic Bhutanese hospitality.",
                    },
                    {
                      q: "Can I customize this tour?",
                      a: "Yes! While this 5-day itinerary is our standard Delightful Bhutan Tour, we can customize it to your preferences - add extra days, include festival dates, upgrade hotels, or modify activities. Contact us with your requirements for a personalized quote.",
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