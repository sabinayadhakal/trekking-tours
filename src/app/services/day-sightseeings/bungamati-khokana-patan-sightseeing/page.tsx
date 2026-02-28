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
  Church,
  History,
  Palette,
  Scroll,
  Sparkles,
  Coffee,
  ShoppingBag,
  TreePine,
  Wheat,
  Droplet,
  Home,
  Factory,
  Flower2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Bungamati, Khokana & Patan Sightseeing Tour",
    altitude: "1,350m → 1,400m → 1,350m",
    distance: "Full day tour (6-7 hours)",
    description: "Your full-day cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Bungamati (approximately 45 minutes), a traditional Newari village known as the birthplace of the god Rato Machhindranath. Spend approximately 1.5 hours exploring this charming village, visiting the Rato Machhindranath Temple, and observing woodcarving workshops. Next, drive to nearby Khokana (15 minutes), a medieval Newari village famous for its mustard oil production and traditional lifestyle. Spend another 1.5 hours wandering through its narrow streets, visiting the oil mills, and experiencing authentic village life. After a traditional Newari lunch at a local restaurant, continue to Patan (30 minutes), the 'City of Fine Arts.' Spend approximately 2-3 hours exploring Patan Durbar Square, a UNESCO World Heritage Site, with its magnificent temples, royal palace, and artisan workshops. In the late afternoon, your guide will drive you back to Kathmandu, arriving at your hotel by approximately 5:00 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Bungamati village exploration", "Rato Machhindranath Temple", "Khokana mustard oil village", "Patan Durbar Square", "Traditional Newari lunch"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (Newari culture expert)",
  "Patan Durbar Square entrance fee",
  "Patan Museum entrance fee",
  "Bungamati village donation",
  "Khokana village donation",
  "Traditional Newari lunch at local restaurant",
  "Bottled water during the tour",
  "All government taxes and service charges",
  "Hotel pickup and drop-off (within Kathmandu valley)",
];

const excludes = [
  "Meals not specified (dinner)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guide and driver (recommended)",
  "Travel insurance",
  "Photography fees at certain temples (where applicable)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Bungamati Village",
    caption: "Traditional Newari village of Bungamati with its temple",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Khokana Village",
    caption: "Medieval Khokana village known for mustard oil production",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Patan Durbar Square",
    caption: "Patan Durbar Square - UNESCO World Heritage Site",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Mustard Oil Press",
    caption: "Traditional mustard oil press in Khokana village",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Woodcarving Bungamati",
    caption: "Traditional woodcarving workshops in Bungamati",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Krishna Temple Patan",
    caption: "Krishna Temple in Patan Durbar Square",
  },
];

export default function BungamatiKhokanaPatanSightseeingPage() {
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
    const title = encodeURIComponent("Bungamati, Khokana & Patan Sightseeing Tour - Himkala Adventure");
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
            alt="Bungamati, Khokana and Patan Sightseeing"
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
                <MapPin className="w-3 h-3 mr-1" /> Day Sightseeing Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Home className="w-3 h-3 mr-1" /> Village Experience
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              BUNGAMATI, KHOKANA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & PATAN SIGHTSEEING TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Discover authentic Newari village life, traditional crafts, and ancient temples—explore the charming villages 
              of Bungamati and Khokana before immersing yourself in the artistic heritage of Patan Durbar Square.
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
                    <div className="text-xs text-slate-400 line-through">$95</div>
                    <div className="text-lg font-bold text-[#0f2940]">$75</div>
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
                      <span className="text-white/50 text-sm line-through">$95</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$75</div>
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
                        <span>Group Size: 1-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Home className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Village Experience</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 1,400m</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
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
                        <span className="font-medium text-[#0f2940]">9:00 AM</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End Time</span>
                        <span className="font-medium text-[#0f2940]">~5:00 PM</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Pickup Location</span>
                        <span className="font-medium text-[#0f2940]">Your Hotel in Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour Type</span>
                        <span className="font-medium text-[#0f2940]">Cultural, Village, Heritage</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">UNESCO Site</span>
                        <span className="font-medium text-[#0f2940]">Patan Durbar Square</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Easy - Suitable for all</span>
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
                    The <strong>Bungamati, Khokana & Patan Sightseeing Tour</strong> is a unique full-day journey that combines authentic Newari village life with the artistic splendor of one of Nepal's most beautiful royal cities. This tour offers a rare glimpse into traditional lifestyles that have remained largely unchanged for centuries, followed by the architectural and artistic treasures of Patan.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Bungamati</strong> is a traditional Newari village located on the banks of the Bagmati River, south of Kathmandu. It is considered the birthplace of the god Rato Machhindranath, the patron deity of Patan, and his magnificent chariot festival begins here every year. The village is also renowned for its woodcarving tradition, with skilled artisans creating intricate temple carvings and decorative pieces. Walking through Bungamati's narrow brick-paved streets, you'll see traditional Newari houses with carved windows and doors, and experience a pace of life far removed from the capital.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Khokana</strong>, just a short distance from Bungamati, is a medieval Newari village that has preserved its traditional character remarkably well. It is famous throughout Nepal for its mustard oil production, using traditional stone presses powered by water buffalo. The village's narrow alleys, traditional houses, and agricultural lifestyle offer an authentic glimpse into rural Newari culture. Khokana was also the first village in Nepal to have electricity, and its unique layout and architecture make it a fascinating place to explore.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The tour concludes in <strong>Patan</strong> (Lalitpur), the 'City of Fine Arts,' where you'll explore the magnificent Patan Durbar Square, a UNESCO World Heritage Site. With its stunning collection of temples, the ancient royal palace (now the Patan Museum), and living artisan quarters, Patan provides a perfect contrast to the rural villages you visited earlier. This combination of village life and royal heritage offers a comprehensive understanding of Newari culture in all its dimensions.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Explore authentic Newari village life in Bungamati and Khokana",
                    "Visit the Rato Machhindranath Temple, birthplace of the rain god",
                    "Observe traditional woodcarving artisans at work in Bungamati",
                    "See centuries-old mustard oil presses in Khokana village",
                    "Wander through narrow brick-paved streets lined with traditional houses",
                    "Experience rural Nepali lifestyle unchanged for generations",
                    "Enjoy a traditional Newari lunch at a local restaurant",
                    "Discover Patan Durbar Square, a UNESCO World Heritage Site",
                    "Visit the Patan Museum, the finest museum in Nepal",
                    "See the stone-carved Krishna Temple and the Golden Temple",
                    "Observe metalworkers and Thanka painters in Patan's artisan quarters",
                    "Learn about Newari culture, architecture, and traditions from an expert guide",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Home className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Visit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures and clear mornings. Villages are vibrant with spring colors. Ideal for photography and comfortable walking.
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
                        Crystal-clear skies, perfect temperatures, and post-harvest activity in villages. Ideal time to see agricultural life and festivals.
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
                        Cool, clear days with excellent visibility. Fewer tourists. Mustard oil production in full swing. Morning fog may clear by mid-morning.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain but villages are lush and green. Umbrella/raincoat recommended.</p>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-6 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Tour Itinerary</h2>
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
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day Tour</span>
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

              {/* Bungamati Details */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Bungamati - Birthplace of the Rain God
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Rato Machhindranath Temple:</strong> Bungamati's main temple is dedicated to the god Rato Machhindranath, the deity of rain and compassion. The temple's intricate woodcarving and architecture are excellent examples of Newari craftsmanship. The god resides here for six months each year before being moved to Patan for the famous chariot festival.</li>
                      <li><strong>Woodcarving Tradition:</strong> Bungamati is renowned throughout Nepal for its skilled woodcarvers. Many of the intricately carved windows, doors, and temple struts found across the Kathmandu Valley were crafted here. You can visit workshops where artisans continue this ancient tradition.</li>
                      <li><strong>Traditional Architecture:</strong> The village features classic Newari houses with brick facades, carved wooden windows, and tiled roofs. Narrow brick-paved streets create a maze-like layout typical of medieval Newari settlements.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Rato Machhindranath Chariot Festival:</strong> This is one of Nepal's longest and most important festivals, lasting several months. The massive chariot is constructed in Patan, pulled through the streets, and eventually reaches Bungamati, where the god resides for six months. The festival attracts thousands of devotees.</li>
                      <li><strong>Village Layout:</strong> Bungamati is built on a ridge overlooking the Bagmati River. Its strategic location and traditional layout reflect centuries of Newari urban planning and social organization.</li>
                      <li><strong>Local Life:</strong> Wander through the village to see daily life—women winnowing grain, children playing in the streets, and elders gathered in public squares. The pace of life here is unhurried and authentic.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Khokana Details */}
              <div className="bg-green-50 border border-green-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Droplet className="w-4 h-4 md:w-5 md:h-5" /> Khokana - The Mustard Oil Village
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Mustard Oil Production:</strong> Khokana is famous throughout Nepal for its traditional mustard oil. The village has dozens of oil presses (called 'kol') powered by water buffalo. You can see the entire process—from pressing the seeds to bottling the golden oil—using methods unchanged for centuries.</li>
                      <li><strong>Medieval Layout:</strong> Khokana's street layout is a masterpiece of medieval planning. The main street runs north-south with a drainage channel, and the village is organized according to traditional Newari social structure. It was the first village in Nepal to have electricity (in 1960), yet it has preserved its traditional character remarkably well.</li>
                      <li><strong>Shephardess Temple:</strong> The village's main temple is dedicated to the goddess Shephardess, reflecting Khokana's agricultural heritage. The temple architecture is simple but elegant.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Agricultural Lifestyle:</strong> Surrounding Khokana are fertile fields where villagers grow mustard, rice, and vegetables. Depending on the season, you may see harvesting, threshing, or planting activities.</li>
                      <li><strong>Traditional Houses:</strong> Khokana's houses are classic examples of Newari residential architecture, with brick ground floors and wooden upper stories. Many have carved windows and doors, though less ornate than in the royal cities.</li>
                      <li><strong>UNESCO Recognition:</strong> Khokana has been nominated as a UNESCO World Heritage Site candidate due to its outstanding preservation of medieval Newari village life and traditional technology.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Patan Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Landmark className="w-4 h-4 md:w-5 md:h-5" /> Patan - City of Fine Arts
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Patan Durbar Square:</strong> This UNESCO World Heritage Site is a stunning collection of temples, statues, and palaces. Highlights include the Krishna Temple (built entirely of stone), the Hiranya Varna Mahavihar (Golden Temple), and the ancient royal palace.</li>
                      <li><strong>Patan Museum:</strong> Housed in the former royal palace, this is widely considered the best museum in Nepal. Its collection of bronze statues, religious art, and historical artifacts is world-class and beautifully displayed.</li>
                      <li><strong>Krishna Temple:</strong> Built in the 17th century, this stone temple features 21 shrines and exquisite carvings depicting scenes from the Mahabharata and Ramayana. It is one of Patan's most beloved landmarks.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Golden Temple:</strong> Officially Hiranya Varna Mahavihar, this Buddhist monastery features a gilded facade, beautiful courtyards, and ancient statues. It is one of Patan's most sacred sites.</li>
                      <li><strong>Artisan Quarters:</strong> Patan's backstreets are filled with workshops where metalworkers, woodcarvers, and Thanka painters continue their ancient crafts. You can observe artisans at work and purchase authentic pieces.</li>
                      <li><strong>Mahabouddha Temple:</strong> Also known as the "Temple of a Thousand Buddhas," this terra-cotta temple is adorned with thousands of Buddha images.</li>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Your Visit</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>What to Wear:</strong> Comfortable walking shoes are essential as you'll be walking on uneven stone streets. Modest dress is appreciated at temples. Sun hat and sunscreen recommended.</li>
                    <li>• <strong>Village Etiquette:</strong> These are living villages where people go about their daily lives. Ask permission before photographing people, and be respectful of private spaces. A smile goes a long way.</li>
                    <li>• <strong>Photography:</strong> Photography is welcome in public areas. Some workshops may request a small fee for photography. Always ask before taking portraits.</li>
                    <li>• <strong>Shopping:</strong> Bungamati is an excellent place to purchase authentic woodcarvings directly from artisans. Khokana's mustard oil makes a unique souvenir. Patan's artisan quarters offer metalwork and Thanka paintings.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves moderate walking (approximately 3-4 hours total) on uneven surfaces. Suitable for most fitness levels. Inform us of mobility concerns when booking.</li>
                    <li>• <strong>Cultural Sensitivity:</strong> These are traditional communities. Dress modestly, speak softly, and follow your guide's instructions on proper behavior.</li>
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
                      q: "What makes Bungamati and Khokana special compared to other villages?",
                      a: "These villages are remarkable for their exceptional preservation of traditional Newari culture, architecture, and crafts. Bungamati is Nepal's premier woodcarving center and the birthplace of the rain god Rato Machhindranath. Khokana has preserved its medieval street layout and traditional mustard oil industry, with working oil presses using methods unchanged for centuries. Together they offer an authentic glimpse into pre-modern Newari life that's increasingly rare to find.",
                    },
                    {
                      q: "Can I buy mustard oil in Khokana?",
                      a: "Yes! Khokana's mustard oil is famous throughout Nepal for its purity and flavor. You can purchase bottles directly from the oil presses or local shops. The oil makes an excellent and authentic souvenir. Prices are very reasonable, and you'll be supporting the local economy directly.",
                    },
                    {
                      q: "Are there opportunities to buy woodcarvings in Bungamati?",
                      a: "Absolutely. Bungamati is renowned for its woodcarving tradition, and you can visit workshops where artisans create everything from small decorative pieces to elaborate temple struts. Purchasing directly from the artisans ensures authenticity and fair prices. Your guide can help with communication and fair negotiation.",
                    },
                    {
                      q: "How much walking is involved in the villages?",
                      a: "You'll walk approximately 1-1.5 hours in each village on uneven brick-paved streets. The terrain is generally flat but requires comfortable walking shoes. The pace is leisurely with plenty of stops for photos and explanations. If you have mobility concerns, please inform us when booking.",
                    },
                    {
                      q: "Is this tour suitable for children?",
                      a: "Yes, this tour is very family-friendly. Children love seeing the animals, the oil presses, and the narrow village streets. The pace is relaxed, and there are opportunities for breaks. The traditional Newari lunch is also usually popular with children. Please let us know if you have specific needs for children.",
                    },
                    {
                      q: "What is the best time of year to see mustard oil production?",
                      a: "Mustard oil production happens year-round, but winter (December-February) is when you're most likely to see the presses in full operation. The mustard harvest occurs in late autumn, so production is especially active during winter months. However, there's almost always some production happening regardless of season.",
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

              {/* Newari Culture Glossary */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl mb-6 md:mb-12">
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-[#0f2940] mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                    <Scroll className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a]" /> Newari Culture Glossary
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Newar</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Indigenous people of Kathmandu Valley</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Machhindranath</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Rain god, patron deity of Patan</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Kol</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Traditional oil press</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Bahal</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Buddhist monastery courtyard</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Puja</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Worship ritual</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Chaitya</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Small Buddhist shrine</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Lohan</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Carved stone water spout</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 md:p-2 rounded">
                      <div className="font-bold text-[10px] md:text-xs text-[#0f2940]">Patan</div>
                      <div className="text-[8px] md:text-xs text-slate-600">Lalitpur, City of Fine Arts</div>
                    </div>
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