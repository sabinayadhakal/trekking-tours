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
  Home,
  MountainSnow,
  Eye,
  Sunset,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Changunarayan, Bhaktapur & Sanga Sightseeing Tour",
    altitude: "1,350m → 1,541m → 1,401m → 1,500m → 1,350m",
    distance: "Full day tour (7-8 hours)",
    description: "Your full-day cultural and scenic tour begins after breakfast at 8:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Changunarayan (approximately 45 minutes), the oldest Hindu temple in Nepal and a UNESCO World Heritage Site. Spend approximately 1.5 hours exploring this ancient temple complex with its exquisite stone, wood, and metal crafts dating back to the 4th century. Next, drive to Bhaktapur (30 minutes), the best-preserved medieval city in Nepal. Spend approximately 3 hours exploring Bhaktapur Durbar Square, including the Palace of 55 Windows, Nyatapola Temple, and Pottery Square. Enjoy a traditional Newari lunch at a local restaurant. In the late afternoon, drive to Sanga (30 minutes), a hilltop viewpoint offering spectacular panoramic views of the Himalayan range including Everest on clear days. Spend approximately 1 hour enjoying the views and photography. Your guide will then drive you back to Kathmandu, arriving at your hotel by approximately 5:30 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Changunarayan Temple (4th century)", "Bhaktapur Durbar Square", "Nyatapola Temple", "Pottery Square", "Sanga hilltop views"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (heritage expert)",
  "Changunarayan Temple entrance fee",
  "Bhaktapur Durbar Square entrance fee",
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
    src: "/images/used/changunarayan-1.avif",
    alt: "Changunarayan Temple",
    caption: "Changunarayan Temple - The oldest Hindu temple in Nepal (4th century)",
  },
  {
    src: "/images/used/bhaktapur-2.avif",
    alt: "Bhaktapur Durbar Square",
    caption: "Bhaktapur Durbar Square with Nyatapola Temple",
  },
  {
    src: "/images/used/sanga-1.avif",
    alt: "Sanga Viewpoint",
    caption: "Panoramic Himalayan views from Sanga hilltop",
  },
  {
    src: "/images/used/bhaktapur-5.avif",
    alt: "Nyatapola Temple",
    caption: "Nyatapola Temple - Nepal's tallest pagoda",
  },
  {
    src: "/images/used/bhaktapur-3.avif",
    alt: "Palace of 55 Windows",
    caption: "Palace of 55 Windows in Bhaktapur Durbar Square",
  },
  {
    src: "/images/used/bhaktapur-4.avif",
    alt: "Pottery Square",
    caption: "Traditional potters at work in Bhaktapur's Pottery Square",
  },
];

export default function ChangunarayanBhaktapurSangaSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Changunarayan, Bhaktapur & Sanga Sightseeing Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Changunarayan, Bhaktapur & Sanga Sightseeing Tour - Himkala Adventure");
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
            src="/images/used/changunarayan-1.avif"
            alt="Changunarayan, Bhaktapur and Sanga Sightseeing"
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
                2 UNESCO Sites
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              CHANGUNARAYAN, BHAKTAPUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & SANGA SIGHTSEEING TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Journey through 1,700 years of history—from Nepal's oldest temple at Changunarayan to the medieval splendor 
              of Bhaktapur, culminating in panoramic Himalayan views from the Sanga hilltop.
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
                <div className="text-xs text-slate-400 line-through">$95</div>
                <div className="text-lg font-bold text-[#0f2940]">$75</div>
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
                        <span className="text-white/50 text-sm line-through">$95</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$75</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $20</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>7-8 Hours</span>
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
                          <span>2 UNESCO Sites</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 1,541m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Tour
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
                          <span className="text-slate-500">Start Time</span>
                          <span className="font-medium text-[#0f2940]">8:30 AM</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Time</span>
                          <span className="font-medium text-[#0f2940]">~5:30 PM</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Pickup Location</span>
                          <span className="font-medium text-[#0f2940]">Your Hotel in Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Tour Type</span>
                          <span className="font-medium text-[#0f2940]">Heritage, Cultural, Scenic</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">UNESCO Sites</span>
                          <span className="font-medium text-[#0f2940]">Changunarayan, Bhaktapur Durbar Square</span>
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
                    The <strong>Changunarayan, Bhaktapur & Sanga Sightseeing Tour</strong> is a full-day journey that spans 1,700 years of Nepalese history and culture, culminating in breathtaking Himalayan views. This unique tour combines the oldest temple in Nepal, the best-preserved medieval city in the Kathmandu Valley, and a spectacular hilltop viewpoint, offering a comprehensive experience of the valley's heritage and natural beauty.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Changunarayan Temple</strong> is the oldest Hindu temple in Nepal, dating back to the 4th century. This UNESCO World Heritage Site is dedicated to Lord Vishnu and is renowned for its exquisite stone, wood, and metal craft, including some of the finest examples of Licchavi period art. The temple complex is perched on a hilltop, offering beautiful views of the surrounding countryside and, on clear days, the Himalayan range.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Bhaktapur</strong>, also known as the "City of Devotees" or the "City of Culture," is the best-preserved medieval city in Nepal and a UNESCO World Heritage Site. Founded in the 12th century, its red brick buildings, cobblestone streets, and intricately carved wooden windows transport visitors back in time. The city's Durbar Square is home to architectural masterpieces including the famous Nyatapola Temple (Nepal's tallest pagoda), the Palace of 55 Windows, and the Golden Gate.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The tour concludes at <strong>Sanga</strong>, a hilltop viewpoint that offers spectacular panoramic views of the Himalayan range. On clear days, you can see peaks from Ganesh Himal to Everest, with the sun setting behind the mountains creating a magical atmosphere. This combination of ancient heritage and natural beauty makes this tour a perfect introduction to the Kathmandu Valley's treasures.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Changunarayan Temple, the oldest Hindu temple in Nepal (4th century)",
                    "Explore exquisite stone carvings and inscriptions from the Licchavi period",
                    "Discover Bhaktapur Durbar Square, a UNESCO World Heritage Site",
                    "Marvel at Nyatapola Temple, Nepal's tallest pagoda at five stories",
                    "Photograph the Palace of 55 Windows and the exquisite Golden Gate",
                    "Watch traditional potters at work in Bhaktapur's famous Pottery Square",
                    "Enjoy panoramic Himalayan views from the Sanga hilltop viewpoint",
                    "See Mount Everest, Ganesh Himal, and Langtang range on clear days",
                    "Stroll through narrow cobblestone streets lined with ancient temples",
                    "Enjoy a traditional Newari lunch at a local restaurant in Bhaktapur",
                    "Learn about Newari culture, architecture, and history from an expert guide",
                    "Private transportation with hotel pickup and drop-off",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
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
                        Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for photography and comfortable walking.
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
                        Crystal-clear skies, perfect temperatures, and excellent Himalayan visibility. Peak season for mountain views and festivals.
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
                        Cool, clear days with excellent visibility. Fewer tourists. Morning fog may delay start but usually clears by mid-morning.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain but landscapes are lush and green. Umbrella/raincoat recommended.</p>
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

              {/* Changunarayan Details */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Changunarayan Temple - Nepal's Oldest Temple
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>History:</strong> Dating back to the 4th century, Changunarayan is the oldest Hindu temple in Nepal. It was built by King Mandev of the Licchavi dynasty and has been continuously worshiped for over 1,700 years. The temple is dedicated to Lord Vishnu, the preserver in the Hindu trinity.</li>
                      <li><strong>Architecture:</strong> The two-story pagoda-style temple is adorned with exquisite stone, wood, and metal craft. Unlike later temples, Changunarayan features intricate stone carvings that are considered masterpieces of Licchavi art. The temple's struts, doors, and windows are decorated with images of deities and mythological scenes.</li>
                      <li><strong>Stone Inscriptions:</strong> The temple complex contains the oldest stone inscription in Nepal, dating to 464 CE, which provides valuable information about the Licchavi dynasty and early Nepalese history.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Important Sculptures:</strong> The temple is renowned for its 5th to 8th-century stone sculptures, including the Vishwaroop (the cosmic form of Vishnu), the Vishnu Vikrant (Vishnu's giant stride), and the Garuda (Vishnu's eagle mount) kneeling before the temple.</li>
                      <li><strong>Hilltop Location:</strong> Perched on a forested hilltop, the temple offers beautiful views of the surrounding countryside and, on clear days, the Himalayan range including Ganesh Himal and Langtang.</li>
                      <li><strong>Surrounding Village:</strong> The small village of Changunarayan has preserved its traditional character, with brick houses, carved windows, and a peaceful atmosphere away from the city crowds.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bhaktapur Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Landmark className="w-4 h-4 md:w-5 md:h-5" /> Bhaktapur - The Medieval City
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Nyatapola Temple:</strong> Built in 1702, this five-story pagoda is Nepal's tallest temple. Dedicated to the goddess Siddhi Lakshmi, it's renowned for its massive structure, artistic excellence, and the fact that it survived the 1934 and 2015 earthquakes with minimal damage. The temple rises on a five-tiered platform, each level guarded by stone figures of increasingly powerful mythical beings.</li>
                      <li><strong>Palace of 55 Windows:</strong> Built by King Jitamitra Malla in the 17th century, this magnificent palace features 55 intricately carved wooden windows, a masterpiece of Newari craftsmanship. The balcony with its peacock windows is particularly famous.</li>
                      <li><strong>Golden Gate:</strong> Considered one of the most beautiful works of art in the world, this gilded entrance to the palace is adorned with Hindu deities and exquisite metalwork. It leads to the Taleju Temple complex.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Pottery Square:</strong> A living workshop where traditional potters shape clay using centuries-old techniques. Watch them create pots, fire them in open kilns, and display their wares. You can even try your hand at the potter's wheel.</li>
                      <li><strong>Bhairavnath Temple:</strong> A three-story pagoda dedicated to the terrifying aspect of Shiva, featuring beautiful woodcarvings and metalwork. Originally built as a one-story temple, it was later expanded to its current height.</li>
                      <li><strong>Dattatreya Temple:</strong> Said to be built from a single tree trunk, this ancient temple is dedicated to the trinity of Brahma, Vishnu, and Shiva. The adjacent monastery houses intricate woodcarvings and a famous manuscript.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sanga Details */}
              <div className="bg-green-50 border border-green-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Eye className="w-4 h-4 md:w-5 md:h-5" /> Sanga Viewpoint - Himalayan Panorama
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Panoramic Views:</strong> Perched at approximately 1,500m, Sanga offers one of the best roadside viewpoints in the Kathmandu Valley. On clear days, you can see an uninterrupted panorama of the Himalayan range stretching from Ganesh Himal in the west to Mount Everest in the east.</li>
                      <li><strong>Peaks Visible:</strong> The view includes Ganesh Himal (7,407m), Langtang Lirung (7,227m), Dorje Lakpa (6,975m), Jugal Himal, and on exceptionally clear days, Mount Everest (8,848m) and Cho Oyu (8,188m) in the distance.</li>
                      <li><strong>Sunset Views:</strong> Late afternoon visits offer spectacular sunset views as the setting sun paints the snow-capped peaks in shades of gold and pink.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Photography:</strong> Sanga is a photographer's paradise, offering unobstructed views of the Himalayas. The morning light is excellent for photography, while sunset creates magical colors.</li>
                      <li><strong>Local Life:</strong> The area around Sanga is dotted with small villages and terraced farmlands, offering glimpses of rural Nepalese life. You may see farmers working in their fields or children playing.</li>
                      <li><strong>Peaceful Atmosphere:</strong> Unlike crowded viewpoints in the city, Sanga offers a peaceful setting to absorb the majesty of the Himalayas without the crowds.</li>
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
                    <li>• <strong>What to Wear:</strong> Comfortable walking shoes are essential as you'll be walking on uneven stone streets. Modest dress is appreciated at temples. Sun hat and sunscreen recommended. Bring a warm layer for late afternoon at Sanga viewpoint.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas. Some temples may charge a small fee for cameras/video. The Sanga viewpoint offers excellent photo opportunities - bring a zoom lens for mountain shots.</li>
                    <li>• <strong>Weather for Mountain Views:</strong> Himalayan visibility depends on weather conditions. Early morning and late afternoon offer the best chances for clear views. Autumn and spring have the highest probability of clear skies.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves moderate walking (approximately 3-4 hours total) on uneven surfaces. Suitable for most fitness levels. Inform us of mobility concerns when booking.</li>
                    <li>• <strong>Cultural Sensitivity:</strong> These are living religious sites. Be respectful of worshippers, remove shoes before entering temples, and follow your guide's instructions.</li>
                    <li>• <strong>What to Bring:</strong> Camera, binoculars for mountain viewing, water bottle, snacks, and cash for souvenirs or donations.</li>
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
                      q: "What makes Changunarayan Temple so special?",
                      a: "Changunarayan is the oldest Hindu temple in Nepal, dating back to the 4th century. It contains some of the finest examples of Licchavi period art, including stone sculptures and inscriptions that are masterpieces of Nepalese art. The temple has been continuously worshiped for over 1,700 years, making it a living link to Nepal's ancient past.",
                    },
                    {
                      q: "Can we see Mount Everest from Sanga?",
                      a: "On exceptionally clear days, particularly in autumn and spring, Mount Everest can be seen from Sanga as a distant peak on the eastern horizon. More commonly, you'll see closer peaks like Ganesh Himal, Langtang Lirung, and the Jugal range. The view is spectacular regardless, with dozens of snow-capped peaks visible.",
                    },
                    {
                      q: "Is the tour suitable for elderly or less mobile travelers?",
                      a: "Yes, with some considerations. The walking surfaces in Bhaktapur and Changunarayan are uneven stone-paved streets. However, the pace is leisurely with plenty of rest stops. The vehicle can drop you close to major sites. Sanga viewpoint requires only a short walk. Please inform us of mobility concerns when booking so we can make appropriate arrangements.",
                    },
                    {
                      q: "What is the best time of day for the Sanga viewpoint?",
                      a: "Late afternoon (3:30-5:00 PM) is ideal for Sanga as the sun begins to set behind the Himalayas, creating beautiful colors on the snow-capped peaks. The light is also excellent for photography. Our itinerary is timed to arrive at Sanga during this optimal window.",
                    },
                    {
                      q: "Can I buy souvenirs in Bhaktapur?",
                      a: "Absolutely! Bhaktapur is famous for its pottery, woodcarvings, and Thanka paintings. Pottery Square offers direct purchases from potters. The streets are lined with shops selling traditional crafts, masks, and souvenirs. Prices are generally reasonable, and bargaining is acceptable.",
                    },
                    {
                      q: "What is the difference between Bhaktapur and other durbar squares?",
                      a: "Bhaktapur is the best-preserved medieval city, with a more authentic, lived-in feel than Kathmandu or Patan. It's smaller and more walkable, with a cohesive red-brick aesthetic. It suffered less damage in the 2015 earthquake than Kathmandu Durbar Square, so more original structures remain intact.",
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

              {/* Heritage Timeline */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl mb-6 md:mb-12">
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-[#0f2940] mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                    <History className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a]" /> Heritage Timeline
                  </h3>
                  <div className="space-y-1.5 md:space-y-3">
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-14 md:w-16 text-[10px] md:text-xs font-bold text-[#2d6a8a]">4th C.</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Changunarayan Temple established by King Mandev of Licchavi dynasty</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-14 md:w-16 text-[10px] md:text-xs font-bold text-[#2d6a8a]">12th C.</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Bhaktapur founded as capital of the Malla kingdom</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-14 md:w-16 text-[10px] md:text-xs font-bold text-[#2d6a8a]">1702</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Nyatapola Temple built - Nepal's tallest pagoda</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-14 md:w-16 text-[10px] md:text-xs font-bold text-[#2d6a8a]">1750s</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Palace of 55 Windows completed</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-14 md:w-16 text-[10px] md:text-xs font-bold text-[#2d6a8a]">1979</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Bhaktapur Durbar Square designated UNESCO World Heritage Site</div>
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