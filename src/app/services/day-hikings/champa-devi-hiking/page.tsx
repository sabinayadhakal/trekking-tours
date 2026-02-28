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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Champa Devi Hiking Adventure",
    altitude: "1,350m → 2,250m → 1,350m",
    distance: "6-7 hours (4-5 hours hiking)",
    description: "Your day hiking adventure begins early at 7:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll drive approximately 45 minutes to the trailhead at Pharping, a historic town on the southern edge of the Kathmandu Valley. After a brief introduction and preparation, you'll begin your hike through terraced farmlands and lush forests. The trail gradually ascends through beautiful oak and rhododendron forests, offering glimpses of traditional village life along the way. After approximately 2-3 hours of hiking, you'll reach the summit of Champa Devi (2,250m), the highest hill in the southern Kathmandu Valley. Here you'll find a small temple dedicated to the goddess Champa Devi and breathtaking panoramic views of the entire Kathmandu Valley, including the Himalayan range on clear days. Enjoy a well-deserved picnic lunch with mountain views while your guide shares stories about the area's history and significance. After resting and photography, you'll begin your descent along a different route, offering new perspectives of the valley and surrounding hills. The descent takes approximately 2 hours. You'll arrive back at the trailhead by mid-afternoon and drive back to Kathmandu, arriving at your hotel by approximately 4:00 PM.",
    overnight: "Not applicable - day hike",
    meals: "Breakfast, Picnic Lunch",
    highlights: ["Panoramic views of Kathmandu Valley", "Himalayan views on clear days", "Traditional villages and terraced farms", "Oak and rhododendron forests", "Champa Devi temple at summit"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking hiking guide",
  "Picnic lunch with mountain views",
  "Bottled water (2 liters per person)",
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
    alt: "Champa Devi Summit",
    caption: "Panoramic view of Kathmandu Valley from Champa Devi summit",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Hiking Trail",
    caption: "Beautiful trail through oak and rhododendron forests",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Himalayan Views",
    caption: "Himalayan range visible from Champa Devi on clear days",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Terraced Farms",
    caption: "Traditional terraced farmlands along the hiking route",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Summit Temple",
    caption: "Small temple dedicated to goddess Champa Devi at the summit",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Forest Trail",
    caption: "Lush forest trail on the slopes of Champa Devi",
  },
];

export default function ChampaDeviHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Champa Devi Hiking - Himkala Adventure");
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
            alt="Champa Devi Hiking"
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
                <Eye className="w-3 h-3 mr-1" /> Valley Panorama
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              CHAMPA DEVI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                DAY HIKING ADVENTURE
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Escape the city and summit the highest peak in the southern Kathmandu Valley—enjoy panoramic views, 
              lush forests, traditional villages, and a peaceful picnic with Himalayan vistas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-4 md:gap-10">
            {/* Mobile Sticky Book Now Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2">
              <div className="container mx-auto px-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">$75</div>
                    <div className="text-lg font-bold text-[#0f2940]">$55</div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs">
                      <Heart className="w-3 h-3 mr-1" /> Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar - Hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$75</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$55</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $20</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>6-7 Hours</span>
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
                        <span>4-5 Hours Hiking</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 2,250m</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Hike
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 rounded-full h-10 md:h-12 text-xs md:text-base">
                        <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Enquire Now
                      </Button>
                    </Link>
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
                        <span className="font-medium text-[#0f2940]">7:00 AM</span>
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
                        <span className="text-slate-500">Trailhead</span>
                        <span className="font-medium text-[#0f2940]">Pharping</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Total Ascent</span>
                        <span className="font-medium text-[#0f2940]">Approx. 900m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Moderate</span>
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
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-8 w-full overflow-hidden">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-6">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-[10px] py-1.5"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5"
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
                    The <strong>Champa Devi Hiking Adventure</strong> is a perfect day escape from the bustling streets of Kathmandu, offering a rewarding hike to the highest peak in the southern Kathmandu Valley. At 2,250 meters, Champa Devi provides spectacular panoramic views of the entire valley, the surrounding hills, and on clear days, the majestic Himalayan range including Ganesh Himal, Langtang, and even Everest in the distance.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Named after the goddess Champa Devi, the hill is considered sacred and features a small temple at its summit where local people come to worship, especially during festivals. The hike takes you through a beautiful landscape of terraced farmlands, traditional villages, and lush forests of oak and rhododendron. Along the way, you'll experience rural Nepalese life, encounter friendly locals, and enjoy the peace and tranquility of nature just a short drive from the capital.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trail begins in Pharping, an ancient Newari town with deep Buddhist significance. As you ascend, the city noise fades away, replaced by birdsong and the rustle of leaves. The hike is moderately challenging with a steady ascent of about 900 meters, but the pace is relaxed with plenty of stops for photos and rest. A picnic lunch at the summit, with breathtaking views as your backdrop, is a highlight of the experience.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This day hike is perfect for nature lovers, photography enthusiasts, and anyone seeking a healthy outdoor activity with rewarding views. No previous hiking experience is required, though a reasonable level of fitness is recommended. With an expert guide to lead the way and share insights about the local culture, flora, and fauna, this Champa Devi hike offers an unforgettable adventure just outside Kathmandu.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Hiking Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit the highest peak in the southern Kathmandu Valley at 2,250m",
                    "Panoramic views of the entire Kathmandu Valley from above",
                    "Himalayan views including Ganesh Himal, Langtang, and distant Everest on clear days",
                    "Hike through beautiful oak and rhododendron forests",
                    "Pass through traditional villages and terraced farmlands",
                    "Visit the small temple dedicated to goddess Champa Devi at the summit",
                    "Picnic lunch with spectacular mountain views",
                    "Experience rural Nepalese life away from the city",
                    "Excellent bird watching opportunities (over 100 species recorded)",
                    "Peaceful escape from Kathmandu's crowds and noise",
                    "Expert guide sharing knowledge of local culture and nature",
                    "Perfect for photography at multiple viewpoints along the trail",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Footprints className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
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
                        Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for hiking with comfortable conditions and beautiful wildflowers along the trail.
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
                        Crystal-clear skies, perfect temperatures, and excellent visibility. The best season for Himalayan views and photography. Post-monsoon clarity is exceptional.
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
                        Cool, clear days with excellent visibility. Crisp air and fewer crowds on the trail. Morning temperatures are cold but hiking warms you up. Great for mountain views.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings rain and slippery trails. The hike is still possible but requires caution and proper gear. The landscape is lush and green during this season.</p>
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

              {/* Trail Details */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Map className="w-4 h-4 md:w-5 md:h-5" /> Trail Details & Difficulty
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Total Distance:</strong> Approximately 8-10 kilometers round trip</li>
                      <li><strong>Total Ascent:</strong> Approximately 900 meters from trailhead to summit</li>
                      <li><strong>Hiking Time:</strong> 2-3 hours up, 2 hours down (total 4-5 hours hiking)</li>
                      <li><strong>Trail Condition:</strong> Well-defined dirt trail with some rocky sections and steps. Can be slippery after rain.</li>
                      <li><strong>Difficulty:</strong> Moderate. Suitable for regular hikers and fit beginners. Regular rest stops are included.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Trail Type:</strong> Loop trail (different route for descent offering new views)</li>
                      <li><strong>Maximum Elevation:</strong> 2,250 meters at Champa Devi summit</li>
                      <li><strong>Minimum Elevation:</strong> Approximately 1,350 meters at trailhead</li>
                      <li><strong>Water Sources:</strong> Limited on trail; carry sufficient water (2 liters recommended)</li>
                      <li><strong>Facilities:</strong> No facilities on trail; restrooms available at trailhead village</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What to Bring */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Backpack className="w-4 h-4 md:w-5 md:h-5" /> What to Bring
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Footwear:</strong> Sturdy hiking shoes or boots with good grip (essential)</li>
                      <li><strong>Clothing:</strong> Comfortable hiking clothes, moisture-wicking layers</li>
                      <li><strong>Jacket:</strong> Light fleece or windproof jacket (weather can change)</li>
                      <li><strong>Rain Gear:</strong> Waterproof jacket or poncho (especially in monsoon)</li>
                      <li><strong>Sun Protection:</strong> Hat, sunglasses, sunscreen (exposed sections on upper trail)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Daypack:</strong> Small backpack for your personal items</li>
                      <li><strong>Water:</strong> At least 2 liters (provided, but carry in your pack)</li>
                      <li><strong>Snacks:</strong> Energy bars, nuts, or chocolate (optional, lunch provided)</li>
                      <li><strong>Camera:</strong> For stunning valley and mountain views</li>
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
                    <li>• <strong>Physical Fitness:</strong> This hike requires a reasonable level of fitness. You should be comfortable walking uphill for 2-3 hours with regular breaks. Regular exercise before the hike is recommended.</li>
                    <li>• <strong>Health Considerations:</strong> Inform us of any medical conditions (asthma, heart problems, etc.) when booking. The altitude is moderate (2,250m) and rarely causes issues.</li>
                    <li>• <strong>Weather:</strong> Mountain weather can change quickly. Be prepared for sun, wind, and possible rain even on clear days. Your guide will monitor conditions and adjust plans if necessary.</li>
                    <li>• <strong>Trail Etiquette:</strong> Respect local villages and farmland. Stay on the trail, don't litter, and ask permission before photographing local people.</li>
                    <li>• <strong>Group Size:</strong> We maintain small groups (maximum 8) for personalized attention and minimal environmental impact. Private hikes are available.</li>
                    <li>• <strong>Cancellation:</strong> Free cancellation up to 24 hours before the hike. Within 24 hours, 50% cancellation fee applies.</li>
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
                      q: "Is this hike suitable for beginners?",
                      a: "Yes, this hike is suitable for beginners with a reasonable level of fitness. The trail is well-defined and the ascent is steady but not too steep. We take regular breaks, and the pace is relaxed. If you exercise regularly and are comfortable walking uphill for 2-3 hours, you should enjoy this hike. For absolute beginners or those with concerns, we recommend some preparatory walking before the trip.",
                    },
                    {
                      q: "What are the chances of seeing the Himalayas?",
                      a: "On clear days, particularly in autumn (September-November) and spring (March-May), the Himalayan views are spectacular. You can see Ganesh Himal, the Langtang range, and on exceptionally clear days, even Mount Everest in the distance. Winter also offers good visibility. During monsoon, views are limited due to clouds, but the lush green landscape has its own beauty.",
                    },
                    {
                      q: "What is the significance of Champa Devi?",
                      a: "Champa Devi is named after a local goddess and is considered a sacred hill. There is a small temple at the summit where local people come to worship, especially during the full moon and important festivals. The area is also known for its medicinal herbs and diverse flora, which local people have traditionally used for healing.",
                    },
                    {
                      q: "Can I do this hike independently without a guide?",
                      a: "While the trail is generally well-defined, we strongly recommend hiring a guide for several reasons: safety (trails can be confusing in places), local knowledge (your guide will share insights about culture, flora, and fauna), and support (ensuring you have the best experience). Our guides are trained in first aid and know the area intimately.",
                    },
                    {
                      q: "What wildlife might I see on the trail?",
                      a: "The forests around Champa Devi are home to various bird species (over 100 recorded), including Himalayan bulbuls, laughing thrushes, and occasionally eagles. You might also see monkeys, and with luck, barking deer or wild boar. The area is rich in butterfly species, especially in spring and summer.",
                    },
                    {
                      q: "Is the trail safe during monsoon?",
                      a: "Yes, the trail is generally safe during monsoon, but it can be slippery. We provide hiking poles if needed, and your guide will adjust the pace accordingly. The forest is lush and beautiful during this season, with waterfalls and streams flowing. However, we avoid hiking during heavy rain for safety and comfort.",
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
                      <span className="text-[10px] md:text-xs text-slate-600">Trailhead (Pharping)</span>
                      <span className="text-[10px] md:text-xs font-bold text-[#0f2940]">1,350m</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-amber-600 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs text-slate-600">Mid-point</span>
                      <span className="text-[10px] md:text-xs font-bold text-[#0f2940]">1,800m</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-600 to-red-400 rounded-full" style={{ width: '40%', marginLeft: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs text-slate-600">Summit (Champa Devi)</span>
                      <span className="text-[10px] md:text-xs font-bold text-[#0f2940]">2,250m</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-500 mt-2">Total ascent: approximately 900 meters</p>
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