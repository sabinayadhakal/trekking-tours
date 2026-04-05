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
  Landmark,
  Compass,
  Droplets,
  Award,
  Plane,
  Cloud,
  Wind,
  Eye,
  Gauge,
  Coffee,
  Wifi,
  Battery,
  Luggage,
  Helicopter,
  Trophy,
  Sparkles,
  Trees,
  Bird,
  Flower2,
  LandPlot,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive helicopter briefing where we'll discuss tomorrow's Langtang flight, weather considerations, high-altitude precautions, photography tips, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Helicopter briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Langtag Valley Helicopter Tour with Kyanjin Gompa Landing",
    altitude: "1,350m → 3,950m (Kyanjin Gompa) → 1,350m",
    distance: "3-4 hours helicopter flight",
    description: "This is the day you've been waiting for! Early morning transfer to Tribhuvan International Airport's domestic terminal for your Langtang helicopter adventure. Your helicopter departs at sunrise (around 6:30-7:00 AM) for optimal weather conditions and lighting. Fly north over the beautiful Nepalese countryside, with aerial views of terraced hillsides, traditional villages, and lush green forests. As you ascend, the dramatic Himalayan vistas unfold, giving you a sense of wonder and adventure. You'll fly over Langtang National Park, Nepal's first Himalayan national park, known for its diverse flora and fauna including red pandas, Himalayan tahrs, and over 250 species of birds [citation:2][citation:7]. The helicopter flies through the heart of the Langtang Valley, often called the 'Valley of Glaciers,' offering spectacular views of snow-capped peaks, deep gorges, cascading waterfalls, and pristine glaciers [citation:1]. The highlight of the tour is a landing at Kyanjin Gompa (3,950m), a charming Tibetan-influenced village surrounded by towering peaks. Step out onto solid ground for 30-40 minutes of exploration time. Visit the ancient Buddhist monastery, sample fresh yak cheese from the famous local cheese factory (the oldest in Nepal), and soak in panoramic mountain views [citation:3][citation:5]. The mountains visible from here include Langtang Lirung (7,227m), Langshisha Ri (6,983m), Ganesh Himal (7,407m), Dorje Lakpa (6,975m), Yala Peak, Naya Kanga, and Gangchempo [citation:2][citation:7]. On the return flight, you'll also get spectacular aerial views of the sacred Gosaikunda Lake, a high-altitude alpine lake system revered by both Hindus and Buddhists [citation:4]. You'll be back in Kathmandu by mid-morning, with the rest of the day free to recover, process your incredible experience, and share photos. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kyanjin Gompa landing (3,950m)", "Langtang Lirung and Ganesh Himal views", "Ancient Buddhist monastery visit", "Yak cheese factory tasting", "Gosaikunda Lake aerial views", "Langtang National Park flyover"],
  },
  {
    day: 3,
    title: "Rest Day & Photo Processing",
    altitude: "1,350m",
    distance: "-",
    description: "After yesterday's high-altitude adventure, enjoy a well-deserved rest day. Sleep in and recover from the early start. The morning is free for relaxation or optional light activities. In the afternoon, you may choose to visit some of Kathmandu's UNESCO World Heritage Sites (optional, at additional cost) or simply relax at your hotel. Your guide can assist with organizing and backing up your Langtang photographs. Evening free for personal exploration or souvenir shopping in Thamel. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rest and recovery", "Photo organization", "Optional heritage site visits", "Thamel exploration"],
  },
  {
    day: 4,
    title: "Kathmandu Valley Sightseeing (Optional) or Leisure",
    altitude: "1,350m",
    distance: "Full day",
    description: "Today offers flexibility based on your preferences. You may choose to join an optional sightseeing tour of Kathmandu Valley's UNESCO World Heritage Sites (additional cost), including Swayambhunath Stupa (Monkey Temple), Pashupatinath Temple, and Boudhanath Stupa. Alternatively, enjoy a leisurely day exploring the vibrant neighborhoods of Kathmandu, visiting local cafes, shopping for souvenirs, or simply relaxing at your hotel. Your guide can provide recommendations based on your interests. Evening farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible Langtang helicopter adventure with fellow travelers. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Optional heritage sightseeing", "Leisure and shopping", "Cultural farewell dinner", "Langtang celebration"],
  },
  {
    day: 5,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of flying through the Valley of Glaciers, standing at 3,950m in the shadow of Langtang Lirung, experiencing the rich Tamang and Tibetan Buddhist culture, and the warm hospitality of the Nepali people. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking guide",
  "Langtang Valley Helicopter Tour with Kyanjin Gompa landing (3-4 hours)",
  "30-40 minutes ground exploration time at Kyanjin Gompa",
  "All helicopter ground handling and permits",
  "Langtang National Park entry permit",
  "First aid medical kit including pulse oximeter and oxygen for emergency",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours",
  "Langtang flight certificate of completion",
  "Souvenir photographs",
  "Passenger insurance (by aviation company)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover helicopter evacuation up to 4,000m)",
  "Optional sightseeing tours on Day 4 (UNESCO heritage sites)",
  "Meals not specified in itinerary",
  "Breakfast, tea/coffee, and other meals at Kyanjin Gompa",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, pilots, and support staff (recommended)",
  "Emergency evacuation/helicopter rescue costs beyond included coverage",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges",
];

const gallery = [
  {
    src: "/images/used/langtang-flight-2.avif",
    alt: "Langtang Lirung",
    caption: "Langtang Lirung (7,227m) - The highest peak in the Langtang range",
  },
  
  {
    src: "/images/used/langtang-flight-1.avif",
    alt: "Helicopter in Langtang",
    caption: "Helicopter landing at Kyanjin Gompa with mountain backdrop",
  },
   

  
];

export default function LangtangRegionHelicopterTripPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Langtang Region Helicopter Trip";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Langtang Region Helicopter Trip - Himkala Adventure");
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
            src="/images/used/langtang-heli.avif"
            alt="Langtang Region Helicopter Trip"
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
                <MapPin className="w-3 h-3 mr-1" /> Helicopter Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Helicopter className="w-3 h-3 mr-1" /> Kyanjin Gompa Landing
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              LANGTANG REGION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                HELICOPTER TRIP
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Fly into the 'Valley of Glaciers' and land at Kyanjin Gompa (3,950m)—explore ancient monasteries, 
              sample fresh yak cheese, and witness breathtaking Himalayan peaks including Langtang Lirung and Ganesh Himal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - with proper sticky sidebar */}
      <section className="py-6 md:py-12 relative">
        <div className="container mx-auto px-3 md:px-6 max-w-full">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$1,350</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,195</div>
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
              <div className="sticky top-24">
                <div className="space-y-4 md:space-y-6">
                  {/* Price Card */}
                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-white/50 text-sm line-through">$1,350</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,195</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $155</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>5 Days / 4 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Feb-May, Sep-Dec</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 1-5 per helicopter</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Helicopter className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>3-4 Hour Helicopter Flight</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Gauge className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 3,950m (Kyanjin Gompa)</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Trip
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
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
                          <span className="text-slate-500">Start Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Flight Duration</span>
                          <span className="font-medium text-[#0f2940]">3-4 hours round trip</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Helicopter Type</span>
                          <span className="font-medium text-[#0f2940]">AS350 B3 / Ecureuil</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Landing Site</span>
                          <span className="font-medium text-[#0f2940]">Kyanjin Gompa (3,950m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Easy (moderate altitude)</span>
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
              <div className="lg:hidden flex gap-2 mb-6">
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
                    The <strong>Langtang Region Helicopter Trip</strong> offers a once-in-a-lifetime opportunity to explore one of Nepal's most beautiful Himalayan valleys in just a single day. Known as the "Valley of Glaciers," the Langtang region is renowned for its pristine natural beauty, rich Tibetan-influenced culture, and stunning mountain panoramas—all accessible within a short flight from Kathmandu [citation:1][citation:5].
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The centerpiece of this 5-day adventure is a <strong>3-4 hour helicopter tour</strong> that takes you deep into the heart of the Langtang Valley. Unlike other mountain flights that remain at a distance, this experience includes a <strong>landing at Kyanjin Gompa (3,950m)</strong>—a charming Tibetan-influenced village surrounded by towering peaks. Here, you'll step out and spend 30-40 minutes exploring the ancient Buddhist monastery, visiting the famous yak cheese factory (the oldest in Nepal), and soaking in panoramic mountain views [citation:3][citation:9].
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The flight route takes you over Langtang National Park, Nepal's first Himalayan national park, known for its diverse flora and fauna including red pandas, Himalayan tahrs, and over 250 species of birds [citation:2][citation:7]. You'll witness spectacular views of snow-capped peaks including <strong>Langtang Lirung (7,227m), Ganesh Himal (7,407m), Dorje Lakpa (6,975m), Langshisha Ri (6,983m), Yala Peak, and Naya Kanga</strong> [citation:2][citation:7]. On the return journey, you'll also get breathtaking aerial views of the sacred Gosaikunda Lake, a high-altitude alpine lake system revered by both Hindus and Buddhists [citation:4].
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With experienced pilots, modern helicopters, and careful attention to safety and comfort, this tour makes the beauty of the Langtang region accessible to everyone. No trekking is required—just bring your sense of adventure and your camera. Whether you're a nature lover, cultural enthusiast, photographer, or simply seeking a unique Himalayan experience, this helicopter trip to the Valley of Glaciers delivers an unforgettable adventure.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trip Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "3-4 hour helicopter flight from Kathmandu to the Langtang Valley",
                    "Landing at Kyanjin Gompa (3,950m) with 30-40 minutes ground exploration",
                    "Step out to explore the ancient Buddhist monastery and local culture",
                    "Visit Nepal's oldest yak cheese factory and sample fresh yak cheese",
                    "Spectacular views of Langtang Lirung (7,227m), Ganesh Himal, and Dorje Lakpa",
                    "Fly over Langtang National Park, home to red pandas and Himalayan tahrs",
                    "Aerial views of the sacred Gosaikunda Lake at 4,380m",
                    "Experience the 'Valley of Glaciers' with its pristine glaciers and alpine meadows",
                    "Witness traditional Tamang and Tibetan-influenced villages from above",
                    "Perfect for photographers, nature lovers, and culture enthusiasts",
                    "No trekking required—accessible to all fitness levels",
                    "Rest days included for relaxation and optional sightseeing",
                    "Farewell dinner with traditional Nepali cultural performance",
                    "Langtang flight certificate as a lasting souvenir",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Trophy className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time for Helicopter Tour</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Excellent visibility, blooming rhododendrons, and pleasant temperatures. Ideal for photography with clear skies and vibrant colors in the lower valleys [citation:7].
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, stable weather, and perfect mountain views. Post-monsoon clarity is exceptional. Peak season with the highest success rates [citation:7].
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Winter (Dec-Feb)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crisp clear air and excellent visibility on clear days. Snow-covered peaks are spectacular. Flights may be delayed due to fog but often operate successfully [citation:2].
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings clouds and rain, significantly reducing visibility. Helicopter tours are often cancelled during this period. We do not recommend Langtang helicopter trips during monsoon season [citation:2].</p>
              </section>

              {/* Altitude Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Mountain className="w-4 h-4 md:w-5 md:h-5" /> About the Altitude
                </h4>
                <p className="text-blue-700 text-[10px] md:text-sm leading-relaxed">
                  The helicopter lands at Kyanjin Gompa (3,950m), which is moderately high altitude. While the flight is quick and most people handle this altitude well, some may experience mild symptoms like shortness of breath or lightheadedness. The helicopter carries supplemental oxygen for emergencies, and your pilot monitors all passengers. The landing time is limited to 30-40 minutes to minimize altitude exposure. If you have respiratory or cardiac conditions, please consult your doctor before booking.
                </p>
              </div>

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
                                <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Helicopter Tour</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Weather Dependency:</strong> Helicopter flights are highly weather-dependent. Flights operate only in clear visibility. If weather prevents the flight, you will be offered a full refund or rescheduling. We recommend keeping your travel dates flexible [citation:2].</li>
                    <li>• <strong>Altitude:</strong> Kyanjin Gompa is at 3,950m. Most people handle this altitude well, but some may experience mild symptoms. The helicopter carries supplemental oxygen for emergencies.</li>
                    <li>• <strong>Health Considerations:</strong> Not recommended for pregnant women, infants under 2 years, or those with serious respiratory or cardiac conditions. Consult your doctor before booking.</li>
                    <li>• <strong>What to Wear:</strong> Dress in warm layers. Temperatures at Kyanjin Gompa can be near freezing even on sunny days. Warm jacket, gloves, hat, and sunglasses are essential. Comfortable walking shoes for exploring.</li>
                    <li>• <strong>Photography Tips:</strong> Bring a camera with zoom lens (70-200mm recommended). Polarizing filter helps reduce glare. Extra batteries (cold drains them quickly) and memory cards. Clean your lens before flight.</li>
                    <li>• <strong>Weight Restrictions:</strong> Helicopter weight limits are strictly enforced. Maximum passenger weight is typically 100kg (220lbs). Passengers exceeding this may need to purchase an additional seat.</li>
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
                      q: "How long is the helicopter flight?",
                      a: "The total helicopter flight time is approximately 3-4 hours round trip from Kathmandu. This includes the flight to the Langtang Valley, 30-40 minutes on the ground at Kyanjin Gompa for exploration, and the return flight. The actual flying time to Kyanjin Gompa is about 35-45 minutes each way [citation:3][citation:9].",
                    },
                    {
                      q: "What mountains will I see during the flight?",
                      a: "You'll see spectacular views of the Langtang range including Langtang Lirung (7,227m), Langshisha Ri (6,983m), Ganesh Himal (7,407m), Dorje Lakpa (6,975m), Yala Peak (5,520m), Naya Kanga (5,846m), Gangchempo (6,387m), and on clear days, even glimpses of Shishapangma in Tibet [citation:2][citation:7].",
                    },
                    {
                      q: "Can I try yak cheese at Kyanjin Gompa?",
                      a: "Yes! Kyanjin Gompa is famous for its yak cheese factory, which is the oldest in Nepal. During your ground time, you can visit the factory, sample fresh yak cheese, and even purchase some to take home. The cheese is made from the milk of naks (female yaks) and is a local specialty [citation:3][citation:9].",
                    },
                    {
                      q: "Is this tour suitable for children?",
                      a: "Yes, children aged 3 and above can enjoy this helicopter tour. The flight is smooth and the experience is thrilling for young adventurers. However, please consider that Kyanjin Gompa is at 3,950m altitude. Children under 3 years are not recommended due to the altitude. All children must be accompanied by adults [citation:2].",
                    },
                    {
                      q: "What is the cancellation policy?",
                      a: "If weather prevents the flight, you receive a full refund for the helicopter portion. If you cancel due to personal reasons, cancellation fees apply based on how far in advance you cancel: 30+ days (10%), 15-29 days (25%), 7-14 days (50%), 3-6 days (75%), within 48 hours (100%). We strongly recommend travel insurance to cover unforeseen circumstances [citation:2].",
                    },
                    {
                      q: "How does this compare to the Everest helicopter tour?",
                      a: "The Langtang helicopter tour is shorter and more affordable than the Everest tour. It offers a different mountain experience—lush green valleys, dense forests, and the famous yak cheese factory. The altitude is lower (3,950m vs 5,545m), making it more accessible for those concerned about altitude. Both offer incredible Himalayan experiences, just in different regions.",
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