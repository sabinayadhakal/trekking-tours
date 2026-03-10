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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive helicopter briefing where we'll discuss tomorrow's Everest flight, weather considerations, high-altitude precautions, photography tips, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Helicopter briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Everest Base Camp Helicopter Tour with Landing at Kala Patthar",
    altitude: "1,350m → 5,545m (Kala Patthar) → 1,350m",
    distance: "3-4 hours helicopter flight",
    description: "This is the day you've been dreaming of! Early morning transfer to Kathmandu Airport's domestic terminal for your Everest helicopter adventure. Your helicopter departs at sunrise (around 6:00-6:30 AM) for optimal weather conditions and lighting. Fly east over the beautiful Nepalese countryside, with aerial views of terraced hillsides, traditional villages, and gradually approaching Himalayan peaks. Your first major viewpoint is the stunning Langtang range, followed by Gaurishankar and then the mighty Everest massif. The helicopter flies through the heart of the Khumbu region, passing over Namche Bazaar, Tengboche with its famous monastery, and following the Dudh Kosi Valley toward Everest. The highlight of the tour is a landing at Kala Patthar (5,545m), the famous viewpoint directly opposite Mount Everest. Step out onto the snow for 15-20 minutes of unforgettable, close-up views of Everest (8,848m), Nuptse, Lhotse, and the entire Khumbu icefall. Your pilot will ensure you capture stunning photographs with the world's highest peak as your backdrop. After this once-in-a-lifetime experience, enjoy a champagne celebration at the world's highest landing zone. The return flight offers different perspectives of the mountains you've just witnessed. You'll be back in Kathmandu by mid-morning, with the rest of the day free to recover, process your incredible experience, and share photos. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest Base Camp flyover", "Kala Patthar landing (5,545m)", "Close-up views of Mount Everest", "Champagne celebration at high altitude", "Aerial views of Namche Bazaar and Tengboche"],
  },
  {
    day: 3,
    title: "Rest Day & Photo Processing",
    altitude: "1,350m",
    distance: "-",
    description: "After yesterday's high-altitude adventure, enjoy a well-deserved rest day. Sleep in and recover from the early start. The morning is free for relaxation or optional light activities. In the afternoon, you may choose to visit some of Kathmandu's UNESCO World Heritage Sites (optional, at additional cost) or simply relax at your hotel. Your guide can assist with organizing and backing up your Everest photographs. Evening free for personal exploration or souvenir shopping in Thamel. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rest and recovery", "Photo organization", "Optional heritage site visits", "Thamel exploration"],
  },
  {
    day: 4,
    title: "Kathmandu Valley Sightseeing (Optional) or Leisure",
    altitude: "1,350m",
    distance: "Full day",
    description: "Today offers flexibility based on your preferences. You may choose to join an optional sightseeing tour of Kathmandu Valley's UNESCO World Heritage Sites (additional cost), including Swayambhunath Stupa (Monkey Temple), Pashupatinath Temple, and Boudhanath Stupa. Alternatively, enjoy a leisurely day exploring the vibrant neighborhoods of Kathmandu, visiting local cafes, shopping for souvenirs, or simply relaxing at your hotel. Your guide can provide recommendations based on your interests. Evening farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible Everest helicopter adventure with fellow travelers. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Optional heritage sightseeing", "Leisure and shopping", "Cultural farewell dinner", "Everest celebration"],
  },
  {
    day: 5,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing at 5,545m in the shadow of Mount Everest, the world's highest peak, experiencing the thrill of helicopter flight through the Himalayas, and the warm hospitality of the Nepali people. Namaste and until we meet again!",
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
  "Everest Base Camp Helicopter Tour with Kala Patthar landing (3-4 hours)",
  "Champagne celebration at Kala Patthar (5,545m)",
  "All helicopter ground handling and permits",
  "First aid medical kit including pulse oximeter and oxygen for emergency",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours",
  "Everest flight certificate of completion",
  "Souvenir photographs",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover helicopter evacuation up to 5,500m)",
  "Optional sightseeing tours on Day 4 (UNESCO heritage sites)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks (except champagne on helicopter)",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, pilots, and support staff (recommended)",
  "Emergency evacuation/helicopter rescue costs beyond included coverage",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Mount Everest",
    caption: "Mount Everest (8,848m) viewed from helicopter",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Kala Patthar Landing",
    caption: "Helicopter landing at Kala Patthar (5,545m) with Everest behind",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Everest Massif",
    caption: "The entire Everest massif including Lhotse and Nuptse",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Khumbu Glacier",
    caption: "Khumbu Glacier and icefall viewed from helicopter",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Helicopter in Mountains",
    caption: "Helicopter flying through the Himalayan peaks",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Champagne Celebration",
    caption: "Champagne toast at Kala Patthar with Everest backdrop",
  },
];

export default function EverestRegionHelicopterTripPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Everest Region Helicopter Trip";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Everest Region Helicopter Trip - Himkala Adventure");
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
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Everest Region Helicopter Trip"
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
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Moderate
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Helicopter className="w-3 h-3 mr-1" /> Kala Patthar Landing
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              EVEREST REGION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                HELICOPTER TRIP
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the ultimate Himalayan adventure—fly to the foot of Mount Everest, land at Kala Patthar (5,545m), 
              and stand face-to-face with the world's highest peak, all in a single unforgettable morning.
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
                <div className="text-xs text-slate-400 line-through">$1,450</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,295</div>
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
                        <span className="text-white/50 text-sm line-through">$1,450</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,295</div>
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
                          <span>Best: Oct-May (Year-round)</span>
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
                          <span>Max Altitude: 5,545m (Kala Patthar)</span>
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
                          <span className="font-medium text-[#0f2940]">Kala Patthar (5,545m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Moderate (high altitude)</span>
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
                    The <strong>Everest Region Helicopter Trip</strong> is the ultimate Himalayan experience—a once-in-a-lifetime opportunity to fly into the heart of the Khumbu region and land at the foot of the world's highest mountain. This 5-day adventure combines the thrill of helicopter flight with the awe-inspiring presence of Mount Everest, offering unparalleled access to the world's most famous peak.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The centerpiece of this trip is a <strong>3-4 hour helicopter tour from Kathmandu</strong> that takes you deep into the Everest region. Unlike fixed-wing mountain flights that remain at a distance, this helicopter adventure includes a <strong>landing at Kala Patthar (5,545m)</strong>—the famous viewpoint directly opposite Everest. Here, you'll step out onto the snow and stand face-to-face with the world's highest peak, surrounded by the giants of the Himalayas including Lhotse, Nuptse, and the entire Khumbu icefall. A champagne celebration at this incredible altitude makes the moment even more memorable.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The flight route takes you over the beautiful Nepalese countryside, past the Langtang range, and into the heart of the Khumbu. You'll fly over Namche Bazaar, the bustling Sherpa capital, and Tengboche with its famous monastery, following the Dudh Kosi Valley toward Everest. The return flight offers different perspectives of these magnificent peaks.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With experienced pilots, modern helicopters, and careful attention to safety and comfort, this tour makes the dream of seeing Everest up close accessible to everyone. No trekking is required—just bring your sense of adventure and your camera. Whether you're celebrating a special occasion, seeking the ultimate photograph, or simply fulfilling a lifelong dream, this helicopter trip to Everest Base Camp and Kala Patthar delivers an experience you'll treasure forever.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trip Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "3-4 hour helicopter flight from Kathmandu to the Everest region",
                    "Landing at Kala Patthar (5,545m) with Mount Everest directly in view",
                    "Step out onto snow at the world's highest helicopter landing zone",
                    "Champagne celebration with Everest as your backdrop",
                    "Close-up aerial views of Mount Everest (8,848m), Lhotse, and Nuptse",
                    "Fly over Namche Bazaar, Tengboche Monastery, and the Khumbu icefall",
                    "Spectacular mountain photography opportunities from every angle",
                    "Experienced high-altitude helicopter pilots",
                    "No trekking required—accessible to all fitness levels",
                    "Rest day included for recovery after high-altitude experience",
                    "Optional Kathmandu Valley sightseeing available",
                    "Farewell dinner with traditional Nepali cultural performance",
                    "Everest flight certificate as a lasting souvenir",
                    "Perfect for celebrating special occasions",
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
                        Excellent visibility, stable weather, and warming temperatures. Ideal for photography with clear skies and optimal lighting. Peak climbing season adds excitement.
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
                        Crystal-clear skies, stable weather, and perfect mountain views. Post-monsoon clarity is exceptional. Peak season with the highest success rates.
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
                        Crisp clear air and excellent visibility. Cold but clear mornings with snow-covered peaks. Flights may be delayed due to fog but often operate successfully.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings clouds and rain, significantly reducing visibility. Helicopter tours are often cancelled during this period. We do not recommend Everest helicopter trips during monsoon season.</p>
              </section>

              {/* Altitude Acclimatization Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Mountain className="w-4 h-4 md:w-5 md:h-5" /> Important: High Altitude Experience
                </h4>
                <p className="text-blue-700 text-[10px] md:text-sm leading-relaxed">
                  The helicopter lands at Kala Patthar (5,545m), which is extremely high altitude. While the flight itself is quick, your body will experience rapid altitude gain. Most people feel some effects of altitude—shortness of breath, mild headache, or dizziness. These are normal and usually pass quickly. Your pilot will monitor everyone's condition and can shorten the landing if needed. We recommend discussing any health concerns with your doctor before booking, especially if you have respiratory or cardiac conditions. The landing is optional; if you prefer not to step out, you can remain in the helicopter.
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
                    <li>• <strong>Weather Dependency:</strong> Helicopter flights are highly weather-dependent. Flights operate only in clear visibility. If weather prevents the flight, you will be offered a full refund or rescheduling. We monitor conditions closely and advise accordingly.</li>
                    <li>• <strong>High Altitude:</strong> Kala Patthar is at 5,545m. Most people experience some altitude effects. The helicopter carries supplemental oxygen for emergencies, and your pilot monitors all passengers. The landing is optional.</li>
                    <li>• <strong>Health Considerations:</strong> Not recommended for pregnant women, infants under 2 years, or those with serious respiratory or cardiac conditions. Consult your doctor before booking.</li>
                    <li>• <strong>What to Wear:</strong> Dress in warm layers. Temperatures at Kala Patthar can be -10°C to -20°C even on sunny days. Warm jacket, gloves, hat, and sunglasses are essential. Good hiking boots recommended for stepping onto snow.</li>
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
                      q: "Do we actually land at Everest Base Camp?",
                      a: "The helicopter flies over Everest Base Camp but lands at Kala Patthar (5,545m), which is the famous viewpoint directly opposite Everest. This offers far better views of the mountain than Base Camp itself, which is situated lower and surrounded by the Khumbu icefall. From Kala Patthar, you get an unobstructed, face-to-face view of Everest. Some tours may also offer a landing at Gorakshep or actually at Base Camp depending on conditions and permits.",
                    },
                    {
                      q: "Is the helicopter tour safe?",
                      a: "Yes, helicopter tours in Nepal are operated by experienced pilots with extensive high-altitude flying experience. All helicopters are modern, well-maintained, and meet international safety standards. Operators follow strict safety protocols and weather minimums. Flights are only conducted in clear weather conditions. Safety is always the priority.",
                    },
                    {
                      q: "How long is the helicopter flight?",
                      a: "The total helicopter flight time is approximately 3-4 hours round trip from Kathmandu. This includes the flight to the Everest region, time spent at Kala Patthar (15-20 minutes on the ground), and the return flight. The actual time on the ground at high altitude is limited to minimize exposure.",
                    },
                    {
                      q: "What happens if I feel sick at high altitude?",
                      a: "The helicopter carries supplemental oxygen for emergency use. Your pilot is trained to recognize altitude sickness symptoms and will monitor all passengers during the landing. If anyone feels unwell, the pilot can shorten the landing or return to lower altitude immediately. Most people experience only mild, temporary symptoms that pass quickly.",
                    },
                    {
                      q: "Can I book this for a special occasion?",
                      a: "Absolutely! This helicopter tour is perfect for celebrating birthdays, anniversaries, proposals, or other special occasions. The champagne toast at Kala Patthar with Mount Everest as your backdrop creates an unforgettable moment. Please inform us when booking if you're celebrating something special, and we'll do our best to make it memorable.",
                    },
                    {
                      q: "What is the cancellation policy?",
                      a: "If weather prevents the flight, you receive a full refund for the helicopter portion. If you cancel due to personal reasons, cancellation fees apply based on how far in advance you cancel: 30+ days (10%), 15-29 days (25%), 7-14 days (50%), 3-6 days (75%), within 48 hours (100%). We strongly recommend travel insurance to cover unforeseen circumstances.",
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