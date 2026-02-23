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
  Scroll,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Namobuddha Hiking Adventure",
    altitude: "1,350m → 1,750m → 1,350m",
    distance: "7-8 hours (4-5 hours hiking)",
    description: "Your spiritual hiking adventure begins at 7:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll drive approximately 1.5 hours to the trailhead near Dhulikhel, a scenic town on the eastern rim of the Kathmandu Valley. Your hike begins with a gentle ascent through pine forests and terraced farmlands, offering beautiful views of the surrounding hills and, on clear days, the Himalayan range. After approximately 1.5-2 hours of hiking, you'll arrive at Namobuddha, one of the most sacred Buddhist pilgrimage sites in Nepal. This is where, according to ancient legend, a prince gave his body to a starving tigress and her cubs, an act of ultimate compassion that exemplifies the Buddhist ideal of selflessness. At the hilltop, you'll find the beautiful Thrangu Tashi Yangtse Monastery, a stunning example of Tibetan Buddhist architecture with its golden roofs, prayer flags, and peaceful courtyards. You'll also visit the ancient stupa that marks the site of the prince's self-sacrifice. Spend time exploring the monastery complex, observing monks in prayer, and soaking in the serene atmosphere with panoramic views of the Himalayas. Enjoy a peaceful picnic lunch overlooking the mountains. After lunch, you'll have free time for meditation, photography, or exploring further. Your driver will meet you at Namobuddha for the drive back to Kathmandu, arriving at your hotel by approximately 4:00 PM.",
    overnight: "Not applicable - day hike",
    meals: "Breakfast, Picnic Lunch",
    highlights: ["Visit sacred Namobuddha stupa and monastery", "Legend of the prince's self-sacrifice to a starving tigress", "Beautiful Thrangu Tashi Yangtse Monastery", "Panoramic Himalayan views", "Peaceful meditation atmosphere", "Scenic hike through forests and villages"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking hiking guide",
  "Picnic lunch with mountain views",
  "Bottled water (2 liters per person)",
  "Monastery donation",
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
    alt: "Namobuddha Stupa",
    caption: "The sacred Namobuddha stupa marking the site of the prince's self-sacrifice",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Thrangu Tashi Yangtse Monastery",
    caption: "Beautiful Thrangu Tashi Yangtse Monastery at Namobuddha",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Himalayan Views",
    caption: "Panoramic Himalayan views from Namobuddha hilltop",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Prayer Flags",
    caption: "Colorful prayer flags fluttering at the monastery",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Hiking Trail",
    caption: "Beautiful hiking trail through pine forests",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Monks at Prayer",
    caption: "Buddhist monks in prayer at the monastery",
  },
];

export default function NamobuddhaHikingPage() {
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
    const title = encodeURIComponent("Namobuddha Hiking - Himkala Adventure");
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
    <div className="min-h-screen bg-white">
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
            alt="Namobuddha Hiking"
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
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-1" /> Day Hiking
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-4 py-2 text-sm">
                Easy to Moderate
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-4 py-2 text-sm">
                Spiritual Journey
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              NAMOBUDDHA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                DAY HIKING ADVENTURE
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Hike to one of Nepal's most sacred Buddhist pilgrimage sites, where a prince's act of ultimate compassion 
              is commemorated—explore ancient stupas, beautiful monasteries, and enjoy panoramic Himalayan views.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
            {/* Mobile Sticky Book Now Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-3">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">$75</div>
                    <div className="text-xl font-bold text-[#0f2940]">$55</div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-6 py-2 text-sm">
                      <Heart className="w-4 h-4 mr-2" /> Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$75</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$55</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $20</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>7-8 Hours</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Available Daily</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 1-8</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Footprints className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4-5 Hours Hiking</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 1,750m</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Hike
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 rounded-full h-10 md:h-12 text-sm md:text-base">
                        <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Enquire Now
                      </Button>
                    </Link>
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
                        <span className="text-slate-500">Start Time</span>
                        <span className="font-medium text-[#0f2940]">7:30 AM</span>
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
                        <span className="font-medium text-[#0f2940]">Dhulikhel area</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Total Ascent</span>
                        <span className="font-medium text-[#0f2940]">Approx. 400m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Easy to Moderate</span>
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
            <article className="lg:col-span-8">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-6">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-xs"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-xs"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-xs"
                  onClick={handleCopyLink}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-8 md:mb-12" id="overview">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    The <strong>Namobuddha Hiking Adventure</strong> is a unique spiritual journey to one of the most sacred Buddhist pilgrimage sites in Nepal. Combining a scenic hike through pine forests and terraced farmlands with a visit to an ancient stupa and beautiful monastery, this day trip offers peace, inspiration, and breathtaking Himalayan views.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    <strong>Namobuddha</strong> holds profound significance in Buddhist tradition. According to ancient legend, it was here that a prince, in a previous life of the Buddha, encountered a starving tigress with her cubs. Overcome with compassion, he offered his own body to save them from starvation. This ultimate act of selflessness, known as the "Mahadan" (Great Gift), is commemorated at this sacred site and exemplifies the Buddhist ideal of compassion for all beings.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    At the hilltop, you'll find the ancient <strong>Namobuddha Stupa</strong> marking the exact spot of the prince's sacrifice, surrounded by prayer flags and offering stunning panoramic views of the Himalayan range. Adjacent to the stupa is the magnificent <strong>Thrangu Tashi Yangtse Monastery</strong>, a vibrant center of Tibetan Buddhism with golden roofs, beautifully painted murals, and peaceful courtyards where monks engage in prayer and study.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    The hike itself is a gentle ascent through scenic countryside, offering glimpses of rural Nepalese life and ever-expanding mountain views. Whether you're a Buddhist seeking spiritual connection, a nature lover, or simply someone looking for a peaceful day away from the city, Namobuddha offers an experience that touches the heart and soul. With an expert guide to share the stories and significance of this sacred place, this day hike is truly unforgettable.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Hiking Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit the sacred Namobuddha Stupa, a major Buddhist pilgrimage site",
                    "Learn the moving legend of the prince's self-sacrifice to a starving tigress",
                    "Explore the beautiful Thrangu Tashi Yangtse Monastery",
                    "Observe monks in prayer and daily life at the monastery",
                    "Panoramic views of the Himalayan range including Ganesh Himal and Langtang",
                    "Peaceful atmosphere perfect for meditation and reflection",
                    "Scenic hike through pine forests and terraced farmlands",
                    "Experience rural Nepalese village life along the trail",
                    "Excellent photography opportunities of mountains and monastery",
                    "Picnic lunch with breathtaking mountain views",
                    "Knowledgeable guide sharing Buddhist philosophy and local culture",
                    "Less crowded than other Kathmandu Valley day trips",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <span className="text-[#0f2940] font-medium text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Best Time for Hiking</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming rhododendrons, and excellent mountain visibility. Ideal for hiking and photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Sun className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Autumn (Sep-Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect temperatures, and exceptional mountain views. Post-monsoon clarity offers the best Himalayan visibility.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Winter (Dec-Feb)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crisp clear air and excellent visibility. Cool but pleasant hiking conditions. Fewer visitors, offering a more peaceful experience.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-xs text-slate-500 mt-2">Note: Monsoon (Jun-Aug) brings clouds and rain, limiting mountain views. The trail can be slippery but the landscape is lush and green. Monastery visits are unaffected.</p>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-8 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-serif text-[#0f2940]">Hiking Itinerary</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm"
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
                          className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left"
                          onClick={() => toggleDay(day.day)}
                        >
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[10px] font-bold text-[#0f2940] uppercase">Day Hike</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0f2940] text-sm md:text-base truncate">{day.title}</h4>
                            <div className="flex flex-wrap gap-2 md:gap-3 text-xs text-slate-500 mt-1">
                              <span className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {day.distance}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedDays.includes(day.day) && (
                          <div className="px-3 md:px-4 pb-3 md:pb-4 border-t border-[#C5E0ED]/20">
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-3 md:pt-4 mb-3 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span><strong>Meeting Point:</strong> Your hotel in Kathmandu</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span><strong>Meals:</strong> {day.meals}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {day.highlights.map((h, i) => (
                                <Badge key={i} variant="secondary" className="bg-[#C5E0ED]/20 text-[#2d6a8a] text-xs">
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

              {/* Namobuddha Legend */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-4 md:p-6 mb-8 md:mb-12">
                <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Scroll className="w-4 h-4 md:w-5 md:h-5" /> The Legend of Namobuddha
                </h4>
                <div className="space-y-3">
                  <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
                    According to Buddhist tradition, long ago in a past life, the Buddha was born as a prince named Mahasattva. One day, while walking in the forest with his brothers, he came upon a starving tigress who had just given birth to cubs. Weak from hunger, the tigress was about to eat her own young to survive.
                  </p>
                  <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
                    Overwhelmed with compassion, the prince sent his brothers away and offered his own body to the tigress. At first, the tigress was too weak to even bite him, so the prince cut himself and let her drink his blood, restoring her strength enough to eat. He then allowed the tigress to consume his body, saving her and her cubs from starvation.
                  </p>
                  <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
                    This ultimate act of self-sacrifice, known as the "Mahadan" (Great Gift), is commemorated at Namobuddha. The name itself means "Homage to the Buddha," honoring this profound act of compassion. The site has been a major pilgrimage destination for Buddhists for over 2,000 years, and the stupa marks the exact spot where this miraculous event took place.
                  </p>
                  <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
                    This story exemplifies the Buddhist ideal of compassion for all beings and the perfection of giving (dana paramita). Pilgrims from around the world come to Namobuddha to meditate, make offerings, and connect with this powerful example of selflessness.
                  </p>
                </div>
              </div>

              {/* Thrangu Tashi Yangtse Monastery Details */}
              <div className="bg-red-50 border border-red-200 rounded-lg md:rounded-2xl p-4 md:p-6 mb-8 md:mb-12">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-sm md:text-base">
           Thrangu Tashi Yangtse Monastery
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-red-700 text-xs md:text-sm leading-relaxed space-y-2">
                      <li><strong>History:</strong> The monastery was established in 1976 by the Ven. Thrangu Rinpoche, a highly respected teacher of the Kagyu school of Tibetan Buddhism. It serves as a monastic college for over 300 monks and nuns, preserving and transmitting Buddhist teachings.</li>
                      <li><strong>Architecture:</strong> The monastery is a stunning example of traditional Tibetan Buddhist architecture, with golden roofs, beautifully painted murals, and intricately carved woodwork. The main prayer hall houses magnificent statues of Buddha, Chenrezig, and Padmasambhava.</li>
                      <li><strong>Stupa:</strong> Adjacent to the monastery is the ancient Namobuddha Stupa, which predates the monastery by many centuries. It contains relics and is a focal point for pilgrimage.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-red-700 text-xs md:text-sm leading-relaxed space-y-2">
                      <li><strong>Monastic Life:</strong> Visitors can observe monks engaged in daily activities including prayer sessions, debates, and studies. The monastery follows a strict schedule of rituals and teachings that have been preserved for centuries.</li>
                      <li><strong>Meditation:</strong> The monastery offers opportunities for meditation, either in the main hall or in quieter corners. The peaceful atmosphere is conducive to mindfulness and reflection.</li>
                      <li><strong>Views:</strong> From the monastery grounds, you'll enjoy spectacular panoramic views of the Himalayan range including Ganesh Himal, Langtang, and on clear days, Everest in the distance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Trail Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-4 md:p-6 mb-8 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Map className="w-4 h-4 md:w-5 md:h-5" /> Trail Details & Difficulty
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-blue-700 text-xs md:text-sm leading-relaxed space-y-2">
                      <li><strong>Total Distance:</strong> Approximately 6-8 kilometers round trip</li>
                      <li><strong>Total Ascent:</strong> Approximately 400 meters from trailhead to Namobuddha</li>
                      <li><strong>Hiking Time:</strong> 1.5-2 hours up, 1.5 hours down (total 3-4 hours hiking)</li>
                      <li><strong>Trail Condition:</strong> Well-defined dirt trail with stone steps, forest paths, and village sections. Can be slippery after rain.</li>
                      <li><strong>Difficulty:</strong> Easy to Moderate. Gentle ascent suitable for most fitness levels.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-xs md:text-sm leading-relaxed space-y-2">
                      <li><strong>Trail Type:</strong> Out-and-back or loop options available</li>
                      <li><strong>Maximum Elevation:</strong> 1,750 meters at Namobuddha</li>
                      <li><strong>Minimum Elevation:</strong> Approximately 1,350 meters at trailhead</li>
                      <li><strong>Water Sources:</strong> Available at villages along the route</li>
                      <li><strong>Facilities:</strong> Basic tea houses and restrooms at Namobuddha</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What to Bring */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg md:rounded-2xl p-4 md:p-6 mb-8 md:mb-12">
                <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Backpack className="w-4 h-4 md:w-5 md:h-5" /> What to Bring
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-purple-700 text-xs md:text-sm leading-relaxed space-y-2">
                      <li><strong>Footwear:</strong> Sturdy hiking shoes or boots with good grip (essential)</li>
                      <li><strong>Clothing:</strong> Comfortable hiking clothes, moisture-wicking layers</li>
                      <li><strong>Jacket:</strong> Light fleece or windproof jacket (weather can change)</li>
                      <li><strong>Rain Gear:</strong> Waterproof jacket or poncho (especially in monsoon)</li>
                      <li><strong>Sun Protection:</strong> Hat, sunglasses, sunscreen</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-purple-700 text-xs md:text-sm leading-relaxed space-y-2">
                      <li><strong>Daypack:</strong> Small backpack for your personal items</li>
                      <li><strong>Water:</strong> At least 1-2 liters (provided, but carry in your pack)</li>
                      <li><strong>Camera:</strong> Essential for mountain and monastery photography</li>
                      <li><strong>Offerings:</strong> Small denomination rupees for donations at the monastery</li>
                      <li><strong>Personal Items:</strong> Any medications, hand sanitizer, tissues</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Includes / Excludes */}
              <section className="mb-8 md:mb-12" id="includes">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <Card className="bg-green-50/50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-green-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> Cost Includes
                      </h3>
                      <ul className="space-y-1.5 md:space-y-2">
                        {includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-red-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" /> Cost Excludes
                      </h3>
                      <ul className="space-y-1.5 md:space-y-2">
                        {excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                            <XCircle className="w-3 h-3 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Important Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-4 md:p-6 flex gap-3 md:gap-4 mb-8 md:mb-12">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-1.5 md:mb-2 text-sm md:text-base">Important Information for Hikers</h4>
                  <ul className="text-amber-700 text-xs md:text-sm leading-relaxed space-y-1.5 md:space-y-2">
                    <li>• <strong>Spiritual Etiquette:</strong> Namobuddha is an active pilgrimage site and monastery. Dress modestly (shoulders and knees covered), speak softly, and ask permission before photographing monks. Remove shoes before entering temple buildings.</li>
                    <li>• <strong>Physical Fitness:</strong> The hike involves a gentle ascent of about 400 meters over 1.5-2 hours. Suitable for most fitness levels with regular breaks.</li>
                    <li>• <strong>Weather for Mountain Views:</strong> Himalayan visibility depends on weather conditions. Autumn and spring offer the best chances for clear views. Even without mountains, the monastery and atmosphere are rewarding.</li>
                    <li>• <strong>Monastery Schedule:</strong> Monks have prayer sessions at specific times. Your guide will time the visit to observe these if possible. Morning is generally the best time to see monks engaged in activities.</li>
                    <li>• <strong>Offerings:</strong> Small donations are appreciated at the monastery. You may also offer khata (ceremonial scarves) as a sign of respect.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas of the monastery, but always ask before taking photos of monks or during prayer sessions.</li>
                  </ul>
                </div>
              </div>

              {/* Photo Gallery */}
              <section className="mb-8 md:mb-12" id="gallery">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {gallery.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-32 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                          <p className="text-white text-xs font-medium truncate">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8 md:mb-12" id="faq">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      q: "Is Namobuddha an active monastery?",
                      a: "Yes, Namobuddha is a thriving monastic community with over 300 monks and nuns in residence. The Thrangu Tashi Yangtse Monastery is an active center for Buddhist study and practice. Visitors are welcome to observe prayers and meditation, and you'll likely see monks engaged in their daily activities, creating a vibrant and authentic spiritual atmosphere.",
                    },
                    {
                      q: "Can I meditate at Namobuddha?",
                      a: "Absolutely! The peaceful atmosphere of Namobuddha is perfect for meditation. You can meditate in the main prayer hall (when not in use), in the stupa area, or in quieter corners of the monastery grounds. Your guide can help find a suitable spot. Many visitors find the energy of this sacred site deeply conducive to meditation.",
                    },
                    {
                      q: "What are the chances of seeing the Himalayas?",
                      a: "On clear days, particularly in autumn (September-November) and spring (March-May), the Himalayan views from Namobuddha are spectacular. You can see Ganesh Himal, the Langtang range, and on exceptionally clear days, even Mount Everest in the distance. Winter also offers good visibility. During monsoon, views are limited due to clouds, but the lush green landscape has its own beauty.",
                    },
                    {
                      q: "Is this hike suitable for beginners?",
                      a: "Yes, this hike is suitable for beginners with a reasonable level of fitness. The ascent is gentle (about 400 meters over 1.5-2 hours) and the trail is well-defined. We take regular breaks, and the pace is relaxed. Most people with basic fitness can complete this hike comfortably.",
                    },
                    {
                      q: "Can I combine Namobuddha with other nearby sites?",
                      a: "Yes, Namobuddha can be combined with a visit to Dhulikhel, a scenic hill town nearby, or with Panauti, a historic Newari village. If you have interest in extending your day, please inquire when booking. The standard hike focuses on Namobuddha to allow ample time for a relaxed experience.",
                    },
                    {
                      q: "What should I wear to the monastery?",
                      a: "Modest dress is required at the monastery. Shoulders and knees should be covered. Avoid wearing revealing clothing. Comfortable hiking clothes that meet these requirements are ideal. You'll need to remove shoes before entering temple buildings, so wearing easily removable footwear is helpful.",
                    },
                  ].map((faq, i) => (
                    <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                      <CardContent className="p-4 md:p-5">
                        <h4 className="font-bold text-[#0f2940] mb-1.5 md:mb-2 text-sm md:text-base">{faq.q}</h4>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Elevation Profile */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl mb-8 md:mb-12">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a]" /> Elevation Profile
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Trailhead (Dhulikhel area)</span>
                      <span className="text-xs font-bold text-[#0f2940]">1,350m</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-amber-600 rounded-full" style={{ width: '77%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Mid-point</span>
                      <span className="text-xs font-bold text-[#0f2940]">1,550m</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-600 to-red-400 rounded-full" style={{ width: '50%', marginLeft: '77%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Namobuddha (Summit)</span>
                      <span className="text-xs font-bold text-[#0f2940]">1,750m</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Total ascent: approximately 400 meters (gentle, steady climb)</p>
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