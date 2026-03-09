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
  TreePine,
  Footprints,
  MountainSnow,
  Eye,
  Sunset,
  Cloud,
  Wind,
  Coffee,
  Leaf,
  Flower2,
  Sun,
  Sunrise as SunriseIcon,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Nagarkot-Changunarayan Hiking Adventure",
    altitude: "1,350m → 2,175m → 1,541m → 1,350m",
    distance: "8-9 hours (5-6 hours hiking)",
    description: "Your day hiking adventure begins very early at 4:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll drive approximately 1.5 hours to Nagarkot, a famous hill station renowned for its spectacular sunrise views over the Himalayas. Arrive at the viewpoint just before sunrise and witness one of nature's most breathtaking spectacles as the first light illuminates the snow-capped peaks, including Everest on clear days. After sunrise, enjoy a hot breakfast at a local café with mountain views. Your hike then begins, descending from Nagarkot through beautiful forests and traditional villages. The trail offers continuous panoramic views of the Himalayan range, including Ganesh Himal, Langtang, Jugal, and Everest on clear days. You'll pass through charming villages where you can observe rural life and terraced farmlands. After approximately 3-4 hours of hiking, you'll arrive at Changunarayan Temple, the oldest Hindu temple in Nepal dating back to the 4th century. This UNESCO World Heritage Site is renowned for its exquisite stone, wood, and metal crafts. Spend time exploring the temple complex with your guide, learning about its history and significance. Enjoy a well-deserved picnic lunch near the temple. After exploring, your driver will meet you and drive you back to Kathmandu, arriving at your hotel by approximately 4:00 PM.",
    overnight: "Not applicable - day hike",
    meals: "Breakfast, Picnic Lunch",
    highlights: ["Spectacular sunrise over the Himalayas from Nagarkot", "Panoramic mountain views including Everest on clear days", "Scenic downhill hike through forests and villages", "Visit to Changunarayan Temple (4th century UNESCO site)", "Traditional village and rural life experience"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking hiking guide",
  "Early morning pickup (4:30 AM) for sunrise",
  "Hot breakfast at Nagarkot viewpoint",
  "Picnic lunch near Changunarayan",
  "Bottled water (2 liters per person)",
  "Changunarayan Temple entrance fee",
  "All necessary permits",
  "First aid kit",
  "All government taxes and service charges",
  "Hotel pickup and drop-off (within Kathmandu valley)",
];

const excludes = [
  "Meals not specified (dinner)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guide and driver (recommended)",
  "Travel insurance",
  "Personal hiking equipment (sturdy shoes, daypack, etc.)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Sunrise over Himalayas from Nagarkot",
    caption: "Spectacular sunrise over the Himalayas from Nagarkot viewpoint",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Himalayan Panorama",
    caption: "Panoramic Himalayan views including Ganesh Himal and Langtang",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Changunarayan Temple",
    caption: "Changunarayan Temple - Nepal's oldest temple (4th century)",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Hiking Trail",
    caption: "Beautiful hiking trail through forests and villages",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Traditional Village",
    caption: "Traditional village along the hiking route",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Everest View",
    caption: "Mount Everest visible from Nagarkot on clear days",
  },
];

export default function NagarkotChangunarayanHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Nagarkot-Changunarayan Hiking Adventure";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Nagarkot-Changunarayan Hiking - Himkala Adventure");
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
            src="https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop"
            alt="Nagarkot-Changunarayan Hiking"
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
                <MapPin className="w-3 h-3 mr-1" /> Day Hiking
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Moderate
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <SunriseIcon className="w-3 h-3 mr-1" /> Sunrise & Heritage
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              NAGARKOT-CHANGUNARAYAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                DAY HIKING ADVENTURE
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Witness a spectacular sunrise over the Himalayas from Nagarkot, then hike through scenic forests and villages 
              to the ancient Changunarayan Temple—a perfect blend of natural beauty and cultural heritage.
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
                <div className="text-xs text-slate-400 line-through">$85</div>
                <div className="text-lg font-bold text-[#0f2940]">$65</div>
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
                        <span className="text-white/50 text-sm line-through">$85</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$65</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $20</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>8-9 Hours</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Available Daily</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 1-8</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Footprints className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>5-6 Hours Hiking</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 2,175m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Hike
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
                          <span className="text-slate-500">Start Time</span>
                          <span className="font-medium text-[#0f2940]">4:30 AM</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Time</span>
                          <span className="font-medium text-[#0f2940]">~4:00 PM</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Pickup Location</span>
                          <span className="font-medium text-[#0f2940]">Your Hotel in Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Start Point</span>
                          <span className="font-medium text-[#0f2940]">Nagarkot (2,175m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Changunarayan (1,541m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Moderate (mostly downhill)</span>
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
                    The <strong>Nagarkot-Changunarayan Hiking Adventure</strong> is one of the most rewarding day hikes in the Kathmandu Valley, combining a spectacular Himalayan sunrise with a scenic downhill trek through traditional villages and forests to one of Nepal's most important historical sites. This hike offers the perfect blend of natural beauty and cultural heritage.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Your adventure begins before dawn with a drive to <strong>Nagarkot</strong> (2,175m), a famous hill station renowned for its panoramic views of the Himalayan range. As the sun rises, you'll witness an unforgettable spectacle—the first light painting the snow-capped peaks in shades of gold and orange. On clear days, the view stretches from Annapurna in the west to Everest in the east, encompassing Ganesh Himal, Langtang, Jugal, and dozens of other majestic peaks.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    After sunrise and a hearty breakfast, you'll begin your downhill hike through a landscape of terraced farmlands, pine forests, and traditional villages. The trail offers continuous mountain views and opportunities to observe rural Nepalese life. Farmers working in their fields, children playing, and women weaving traditional fabrics provide authentic glimpses of village culture.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The hike concludes at <strong>Changunarayan Temple</strong>, the oldest Hindu temple in Nepal, dating back to the 4th century. This UNESCO World Heritage Site is a masterpiece of Licchavi-era art and architecture, featuring exquisite stone sculptures, woodcarvings, and inscriptions. After exploring the temple complex, you'll enjoy a picnic lunch before your driver returns you to Kathmandu. This hike is perfect for nature lovers, photography enthusiasts, and anyone seeking a memorable day away from the city.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Hiking Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Spectacular sunrise over the Himalayas from Nagarkot viewpoint",
                    "Panoramic mountain views including Everest, Langtang, and Ganesh Himal",
                    "Scenic downhill hike through pine forests and terraced farmlands",
                    "Pass through traditional villages with authentic rural life",
                    "Visit Changunarayan Temple, Nepal's oldest temple (4th century UNESCO site)",
                    "Exquisite stone sculptures and Licchavi-era art at the temple",
                    "Continuous mountain views throughout the hike",
                    "Excellent photography opportunities at multiple locations",
                    "Hot breakfast at Nagarkot with mountain views",
                    "Picnic lunch near the ancient temple",
                    "Knowledgeable guide sharing insights about culture and history",
                    "Perfect combination of nature and heritage in one day",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <SunriseIcon className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time for Hiking</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming rhododendrons, and excellent mountain visibility. Ideal for sunrise views and comfortable hiking.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sun className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect temperatures, and exceptional mountain views. Post-monsoon clarity offers the best chance to see Everest.
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
                        Crisp clear air and excellent visibility. Cold mornings but clear skies. Snow-capped peaks are spectacular. Fewer crowds on the trail.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings clouds and rain, limiting mountain views. The trail can be slippery but the landscape is lush and green.</p>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-6 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Hiking Itinerary</h2>
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
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day Hike</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h4>
                            <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.distance}
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
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span className="text-[10px] md:text-xs"><strong>Meeting Point:</strong> Your hotel in Kathmandu</span>
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

              {/* Nagarkot Details */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <SunriseIcon className="w-4 h-4 md:w-5 md:h-5" /> Nagarkot - The Sunrise Viewpoint
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Elevation:</strong> 2,175 meters above sea level, offering unobstructed views of the Himalayan range.</li>
                      <li><strong>Himalayan Views:</strong> On clear days, you can see peaks from Annapurna in the west to Everest in the east, including Ganesh Himal (7,407m), Langtang Lirung (7,227m), Dorje Lakpa (6,975m), and Mount Everest (8,848m).</li>
                      <li><strong>Sunrise:</strong> The main attraction is the spectacular sunrise, when the first light illuminates the snow-capped peaks in golden hues. The viewing towers provide excellent vantage points.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Weather:</strong> Early mornings are cold year-round. Temperatures can drop to near freezing in winter. Warm clothing is essential.</li>
                      <li><strong>Best Time:</strong> October-November and March-April offer the clearest skies and best visibility. Winter also offers clear views but colder temperatures.</li>
                      <li><strong>Facilities:</strong> Viewing towers, cafés, and restaurants are available at the viewpoint for breakfast and hot drinks.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Changunarayan Details */}
              <div className="bg-green-50 border border-green-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Landmark className="w-4 h-4 md:w-5 md:h-5" /> Changunarayan Temple - Nepal's Oldest Temple
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>History:</strong> Dating back to the 4th century, Changunarayan is the oldest Hindu temple in Nepal. It was built by King Mandev of the Licchavi dynasty and has been continuously worshiped for over 1,700 years. The temple is dedicated to Lord Vishnu.</li>
                      <li><strong>Architecture:</strong> The two-story pagoda-style temple is adorned with exquisite stone, wood, and metal craft. The temple's struts, doors, and windows are decorated with images of deities and mythological scenes.</li>
                      <li><strong>Stone Inscriptions:</strong> The temple complex contains the oldest stone inscription in Nepal, dating to 464 CE, which provides valuable information about the Licchavi dynasty.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Important Sculptures:</strong> The temple is renowned for its 5th to 8th-century stone sculptures, including the Vishwaroop (the cosmic form of Vishnu), the Vishnu Vikrant (Vishnu's giant stride), and the Garuda (Vishnu's eagle mount).</li>
                      <li><strong>UNESCO Status:</strong> Changunarayan was designated a UNESCO World Heritage Site in 1979 as part of the Kathmandu Valley UNESCO designation.</li>
                      <li><strong>Surrounding Village:</strong> The small village of Changunarayan has preserved its traditional character, with brick houses and carved windows, offering a glimpse into rural Newari life.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Trail Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Map className="w-4 h-4 md:w-5 md:h-5" /> Trail Details & Difficulty
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Total Distance:</strong> Approximately 12-15 kilometers one way</li>
                      <li><strong>Total Descent:</strong> Approximately 650 meters from Nagarkot to Changunarayan</li>
                      <li><strong>Hiking Time:</strong> 4-5 hours (mostly downhill, some gentle ups)</li>
                      <li><strong>Trail Condition:</strong> Well-defined trail with stone steps, forest paths, and village sections. Can be slippery after rain.</li>
                      <li><strong>Difficulty:</strong> Easy to Moderate. Mostly downhill makes it accessible for most fitness levels.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Trail Type:</strong> One-way trail (vehicle meets you at the end)</li>
                      <li><strong>Start Elevation:</strong> 2,175 meters at Nagarkot</li>
                      <li><strong>End Elevation:</strong> 1,541 meters at Changunarayan</li>
                      <li><strong>Water Sources:</strong> Available at villages along the route</li>
                      <li><strong>Facilities:</strong> Tea houses and rest stops at villages along the way</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What to Bring */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Backpack className="w-4 h-4 md:w-5 md:h-5" /> What to Bring
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-purple-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Footwear:</strong> Sturdy hiking shoes or boots with good grip (essential)</li>
                      <li><strong>Clothing:</strong> Warm layers for early morning (temperatures can be near freezing at Nagarkot), comfortable hiking clothes for later</li>
                      <li><strong>Jacket:</strong> Warm insulated jacket for sunrise, windproof outer layer</li>
                      <li><strong>Hat and Gloves:</strong> Essential for cold morning at Nagarkot</li>
                      <li><strong>Sun Protection:</strong> Hat, sunglasses, sunscreen for later in the day</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-purple-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Daypack:</strong> Small backpack for your personal items</li>
                      <li><strong>Camera:</strong> Essential for sunrise and mountain photography</li>
                      <li><strong>Water:</strong> At least 1-2 liters (provided, but carry in your pack)</li>
                      <li><strong>Snacks:</strong> Energy bars, nuts, or chocolate (optional, meals provided)</li>
                      <li><strong>Personal Items:</strong> Any medications, hand sanitizer, tissues</li>
                    </ul>
                  </div>
                </div>
              </div>

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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Hikers</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Early Start:</strong> This hike requires a very early start (4:30 AM pickup) to reach Nagarkot for sunrise. Please prepare by going to bed early the night before.</li>
                    <li>• <strong>Weather for Sunrise:</strong> Mountain views depend on weather conditions. Autumn and spring offer the highest probability of clear skies. Even if clouds obscure distant peaks, the sunrise itself is beautiful.</li>
                    <li>• <strong>Cold Temperatures:</strong> Nagarkot is cold in the early morning, especially in winter (near freezing). Warm clothing, hat, and gloves are essential.</li>
                    <li>• <strong>Physical Fitness:</strong> The hike is mostly downhill and suitable for most fitness levels. However, you should be comfortable walking for 4-5 hours with breaks.</li>
                    <li>• <strong>Photography:</strong> Bring your camera! The sunrise and mountain views are spectacular. A zoom lens is useful for distant peaks.</li>
                    <li>• <strong>Trail Conditions:</strong> Some sections can be slippery after rain. Your guide will adjust the pace accordingly and provide hiking poles if needed.</li>
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
                      q: "Can I really see Mount Everest from Nagarkot?",
                      a: "On exceptionally clear days, particularly in autumn and spring, Mount Everest can be seen from Nagarkot as a distant peak on the eastern horizon. More commonly, you'll see closer peaks like Ganesh Himal, Langtang Lirung, and the Jugal range. The view is spectacular regardless, with dozens of snow-capped peaks visible. Your guide can help identify the mountains.",
                    },
                    {
                      q: "Is the hike difficult?",
                      a: "The hike is mostly downhill from Nagarkot to Changunarayan, making it accessible for most fitness levels. There are some gentle uphill sections, but overall it's considered easy to moderate. You should be comfortable walking for 4-5 hours with breaks. The pace is relaxed with plenty of stops for photos and rest.",
                    },
                    {
                      q: "What if it's cloudy on the day of my hike?",
                      a: "Weather in the Himalayas can be unpredictable. If the forecast suggests very poor visibility, we can discuss rescheduling or offer alternative options. However, even on cloudy days, the sunrise can be beautiful with colors painting the clouds, and the hike through villages and forests is still enjoyable. The temple visit is unaffected by weather.",
                    },
                    {
                      q: "What should I wear for the early morning cold?",
                      a: "Dress in warm layers that you can remove as the day warms up. Essential items include: thermal base layer, fleece or wool mid-layer, insulated jacket, warm hat, gloves, and a scarf. Sturdy hiking shoes are essential. Your guide will have extra layers in case needed.",
                    },
                    {
                      q: "Is this hike suitable for children?",
                      a: "Yes, this hike is suitable for active children aged 8 and above. The mostly downhill trail is manageable, and children usually enjoy the sunrise experience and exploring the ancient temple. Please inform us when booking so we can make appropriate arrangements.",
                    },
                    {
                      q: "What is the significance of Changunarayan Temple?",
                      a: "Changunarayan is the oldest Hindu temple in Nepal, dating back to the 4th century. It contains some of the finest examples of Licchavi period art, including stone sculptures that are masterpieces of Nepalese art. The temple has been continuously worshiped for over 1,700 years, making it a living link to Nepal's ancient past.",
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

              {/* Elevation Profile */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl mb-6 md:mb-12">
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-[#0f2940] mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a]" /> Elevation Profile
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs text-slate-600">Nagarkot (Start)</span>
                      <span className="text-[10px] md:text-xs font-bold text-[#0f2940]">2,175m</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-600 to-green-400 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs text-slate-600">Mid-point</span>
                      <span className="text-[10px] md:text-xs font-bold text-[#0f2940]">~1,850m</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-blue-600 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs text-slate-600">Changunarayan (End)</span>
                      <span className="text-[10px] md:text-xs font-bold text-[#0f2940]">1,541m</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-500 mt-2">Total descent: approximately 650 meters (mostly downhill hiking)</p>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}