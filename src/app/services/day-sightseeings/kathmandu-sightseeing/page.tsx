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
  Droplet,
  Building2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Kathmandu Valley Sightseeing Tour",
    altitude: "1,350m",
    distance: "Full day tour (6-7 hours)",
    description: "Your full-day cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Swayambhunath Stupa (Monkey Temple), one of the most sacred Buddhist sites in Nepal. Perched on a hilltop west of Kathmandu, this ancient stupa offers panoramic views of the valley. Spend approximately 1.5 hours exploring the stupa, prayer wheels, and surrounding shrines. Next, drive to Kathmandu Durbar Square (20 minutes), the historic seat of royalty and a UNESCO World Heritage Site. Spend approximately 2 hours exploring the ancient palace complex, including the Kumari Ghar (home of the Living Goddess), Hanuman Dhoka Palace, and numerous temples. Enjoy a traditional Nepali lunch at a local restaurant. In the afternoon, continue to Pashupatinath Temple (20 minutes), one of the holiest Hindu temples dedicated to Lord Shiva. Spend approximately 1.5 hours along the banks of the Bagmati River, observing rituals and cremation ceremonies. Finally, visit Boudhanath Stupa (20 minutes), one of the largest stupas in South Asia and the center of Tibetan Buddhism in Nepal. Spend approximately 1 hour circumambulating the stupa and exploring the surrounding monasteries. Your guide will then drive you back to your hotel, arriving by approximately 5:00 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Swayambhunath Stupa (Monkey Temple)", "Kathmandu Durbar Square", "Kumari Living Goddess", "Pashupatinath Temple", "Boudhanath Stupa"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (heritage expert)",
  "Swayambhunath Stupa entrance fee",
  "Kathmandu Durbar Square entrance fee",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Traditional Nepali lunch at local restaurant",
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
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Swayambhunath Stupa",
    caption: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes of Buddha",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Kathmandu Durbar Square",
    caption: "Kathmandu Durbar Square with ancient temples and palace",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Pashupatinath Temple",
    caption: "Pashupatinath Temple on the banks of the Bagmati River",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Boudhanath Stupa",
    caption: "Boudhanath Stupa - Center of Tibetan Buddhism in Nepal",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Kumari Living Goddess",
    caption: "Kumari Ghar - Home of the Living Goddess in Kathmandu",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Prayer Wheels",
    caption: "Spinning prayer wheels at Boudhanath Stupa",
  },
];

export default function KathmanduSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Kathmandu Valley Sightseeing Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Kathmandu Valley Sightseeing Tour - Himkala Adventure");
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
            alt="Kathmandu Valley Sightseeing"
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
                <Landmark className="w-3 h-3 mr-1" /> 4 UNESCO Sites
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              KATHMANDU VALLEY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                SIGHTSEEING TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the cultural heart of Nepal—explore ancient stupas, sacred Hindu temples, royal palaces, 
              and living traditions on this comprehensive introduction to the Kathmandu Valley's UNESCO World Heritage Sites.
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
                <div className="text-xs text-slate-400 line-through">$75</div>
                <div className="text-lg font-bold text-[#0f2940]">$55</div>
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
                          <span>Group Size: 1-12</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>4 UNESCO Sites</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 1,350m</span>
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
                          <span className="font-medium text-[#0f2940]">Cultural, Heritage, UNESCO</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">UNESCO Sites</span>
                          <span className="font-medium text-[#0f2940]">Swayambhunath, Kathmandu Durbar Square, Pashupatinath, Boudhanath</span>
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
                    The <strong>Kathmandu Valley Sightseeing Tour</strong> is the perfect introduction to Nepal's rich cultural heritage, taking you to four of the valley's most significant UNESCO World Heritage Sites in a single day. This comprehensive tour offers a journey through 2,000 years of history, art, architecture, and living religious traditions that continue to shape Nepalese life today.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Your journey begins at <strong>Swayambhunath Stupa</strong>, also known as the Monkey Temple, perched on a hilltop overlooking the Kathmandu Valley. This ancient Buddhist stupa, dating back to the 5th century, is one of the most sacred sites in Nepal. Its iconic all-seeing eyes of Buddha gaze in all four directions, symbolizing wisdom and compassion. The climb up 365 steps takes you past meditation shrines, prayer wheels, and playful monkeys, rewarding you with panoramic valley views.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Next, you'll explore <strong>Kathmandu Durbar Square</strong>, the historic seat of royalty. This UNESCO World Heritage Site is a stunning collection of temples, palaces, and courtyards built between the 12th and 18th centuries. Here you'll visit the <strong>Kumari Ghar</strong>, home to the Living Goddess Kumari, a young girl worshipped as the incarnation of the goddess Taleju. The square's intricate woodcarvings, stone sculptures, and pagoda-style temples showcase the finest Newari craftsmanship.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The tour continues to <strong>Pashupatinath Temple</strong>, the holiest Hindu temple in Nepal, dedicated to Lord Shiva. Located on the banks of the sacred Bagmati River, this sprawling complex is a place of pilgrimage, ritual, and cremation. You'll observe sadhus (holy men), devotees performing puja, and the traditional cremation ceremonies that have taken place here for centuries. The final stop is <strong>Boudhanath Stupa</strong>, one of the largest spherical stupas in South Asia and the center of Tibetan Buddhism in Nepal. Circumambulating the massive mandala while spinning prayer wheels, surrounded by fluttering prayer flags and the murmur of mantras, is a profoundly moving experience.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Swayambhunath Stupa (Monkey Temple) with panoramic valley views",
                    "Climb the 365 steps past meditation shrines and prayer wheels",
                    "See the all-seeing eyes of Buddha, symbolizing wisdom and compassion",
                    "Explore Kathmandu Durbar Square, a UNESCO World Heritage Site",
                    "Visit the Kumari Ghar and see the Living Goddess (if she appears)",
                    "Admire intricate woodcarvings at the Kumari Ghar and Hanuman Dhoka",
                    "Observe Hindu rituals and cremation ceremonies at Pashupatinath Temple",
                    "See sadhus (holy men) and learn about Hindu traditions",
                    "Circumambulate Boudhanath Stupa, one of the largest in South Asia",
                    "Spin prayer wheels and experience Tibetan Buddhist culture",
                    "Enjoy a traditional Nepali lunch at a local restaurant",
                    "Learn about Nepal's syncretic Hindu-Buddhist culture from an expert guide",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Landmark className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
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
                        Pleasant temperatures and clear mornings. Ideal for photography with soft morning light. The valley is vibrant with spring colors.
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
                        Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. The city is beautifully decorated.
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
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain, but heritage sites are still accessible with umbrella/raincoat.</p>
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

              {/* Swayambhunath Details */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Swayambhunath Stupa - The Monkey Temple
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>History:</strong> Swayambhunath is one of the oldest religious sites in Nepal, dating back to the 5th century. Legend says the Kathmandu Valley was once a lake, and Swayambhu emerged as a self-created lotus flower on a hilltop. The stupa was built on this sacred spot.</li>
                      <li><strong>The Eyes:</strong> The all-seeing eyes of Buddha painted on all four sides of the stupa are among Nepal's most iconic images. The eyes represent wisdom and compassion, with the third eye symbolizing inner vision. The nose is shaped like the Nepali number 'one' (ek), symbolizing unity.</li>
                      <li><strong>The 365 Steps:</strong> The eastern approach features 365 steps, one for each day of the year. The climb takes you past meditation shrines, prayer wheels, and the resident monkeys that give the temple its nickname.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Panoramic Views:</strong> From the hilltop, you'll enjoy sweeping views of the entire Kathmandu Valley, including the cityscape, surrounding hills, and on clear days, the Himalayan range.</li>
                      <li><strong>Surrounding Shrines:</strong> The complex includes numerous smaller shrines dedicated to Hindu and Buddhist deities, reflecting the syncretic nature of Nepalese religion. The Shantipur Temple and the Ajima shrines are particularly significant.</li>
                      <li><strong>Vajra and Toran:</strong> The thunderbolt (vajra) and the gilded toran (metal arch) at the stupa's entrance are masterpieces of metalwork, depicting the five Buddhas and other divine figures.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kathmandu Durbar Square Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Kathmandu Durbar Square - Royal Heritage
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Kumari Ghar:</strong> This ornate palace is home to the Kumari, the Living Goddess. A young girl selected from the Newari Buddhist community, she is worshipped as the incarnation of the goddess Taleju. She appears at certain times of day from the central window to bless visitors.</li>
                      <li><strong>Hanuman Dhoka Palace:</strong> The ancient royal palace complex, named after the monkey god Hanuman whose statue guards the entrance. The palace features intricate woodcarvings, courtyards, and the historic Nasal Chowk where royal coronations took place.</li>
                      <li><strong>Taleju Temple:</strong> The tallest temple in the square, dedicated to the royal goddess Taleju. Non-Hindus cannot enter, but its magnificent architecture can be admired from outside.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Majipat Lhakhang:</strong> A three-story pagoda dedicated to Avalokiteshvara, featuring beautiful woodcarvings and metalwork.</li>
                      <li><strong>Kasthamandap:</strong> Originally a rest house built from the wood of a single tree, this structure gave Kathmandu its name. Reconstructed after the 2015 earthquake, it remains a symbol of the city.</li>
                      <li><strong>Ashok Vinayak:</strong> A small but important Ganesh shrine in the center of the square, worshiped before any major undertaking.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pashupatinath Details */}
              <div className="bg-green-50 border border-green-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Droplet className="w-4 h-4 md:w-5 md:h-5" /> Pashupatinath Temple - Sacred Hindu Shrine
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Main Temple:</strong> The two-story pagoda-style temple, with its golden roof and silver doors, houses the sacred linga of Lord Shiva. Non-Hindus cannot enter the inner courtyard but can view the temple from across the Bagmati River.</li>
                      <li><strong>Bagmati River:</strong> The river is considered sacred, and its banks are lined with cremation platforms (ghats). Arya Ghat is used for cremations of ordinary people, while the royal family was cremated at Raja Ghat. Observing the cremation rituals offers insight into Hindu beliefs about death and rebirth.</li>
                      <li><strong>Sadhus:</strong> The temple complex is home to many sadhus (holy men), recognizable by their orange robes, dreadlocks, and face paint. They are willing to be photographed for a small donation.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-green-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Smaller Temples:</strong> The complex contains hundreds of smaller shrines, including the Guhyeshwari Temple and the Ram Temple. Each has its own significance and mythology.</li>
                      <li><strong>Pashupatinath Area:</strong> The surrounding area is filled with ashrams, monasteries, and lodges for pilgrims. The Kailashnath Temple and the Gorakhnath Temple are also worth visiting.</li>
                      <li><strong>Festivals:</strong> The biggest celebration is Maha Shivaratri (February/March), when hundreds of thousands of devotees gather to worship Lord Shiva. The atmosphere is electric with devotion.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boudhanath Details */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Boudhanath Stupa - Center of Tibetan Buddhism
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-purple-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>History:</strong> Believed to have been built in the 5th century, Boudhanath is one of the largest stupas in South Asia. It stands at the ancient trade route to Tibet, and Tibetan merchants have offered prayers here for centuries. After the Chinese invasion of Tibet in 1959, many Tibetan refugees settled around the stupa, making it the center of Tibetan culture in Nepal.</li>
                      <li><strong>Architecture:</strong> The stupa's massive mandala represents the Buddhist cosmos. The white dome symbolizes the entire world, while the 13 rings above represent the stages to enlightenment. The all-seeing eyes of Buddha gaze in all four directions.</li>
                      <li><strong>Prayer Wheels:</strong> Surrounding the base are 108 small prayer wheels (a sacred number in Buddhism). Spinning them while circumambulating clockwise is believed to send prayers to the universe and bring good karma.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-purple-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Surrounding Monasteries:</strong> Boudhanath is surrounded by over 50 monasteries representing different schools of Tibetan Buddhism. The Shechen Monastery and Thrangu Tashi Yangtse Monastery are particularly beautiful and welcome visitors.</li>
                      <li><strong>Pilgrims:</strong> Throughout the day, you'll see Tibetan monks in maroon robes, pilgrims prostrating, and locals engaged in devotion. The atmosphere is peaceful and deeply spiritual.</li>
                      <li><strong>Evening Atmosphere:</strong> At sunset, hundreds of butter lamps are lit, and the chanting of mantras fills the air. The stupa is beautifully illuminated after dark.</li>
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
                    <li>• <strong>Dress Code:</strong> Modest dress is required at temples. Shoulders and knees should be covered. Remove shoes before entering temple premises. Carry socks for comfort.</li>
                    <li>• <strong>Photography:</strong> Photography is permitted in most areas. Some temple interiors may restrict it. Always ask permission before photographing sadhus or during cremation ceremonies at Pashupatinath.</li>
                    <li>• <strong>Kumari Appearance:</strong> The Living Goddess appears at certain times from her palace window, typically in the late afternoon. Her appearance is brief and not guaranteed. Your guide will time the visit for the best chance.</li>
                    <li>• <strong>Pashupatinath Cremations:</strong> Photography of cremation ceremonies is strictly prohibited. Observing from a distance is acceptable. Your guide will explain the rituals respectfully.</li>
                    <li>• <strong>Physical Requirements:</strong> This tour involves moderate walking (approximately 3-4 hours total) on uneven surfaces. Suitable for most fitness levels. Inform us of mobility concerns when booking.</li>
                    <li>• <strong>What to Bring:</strong> Comfortable walking shoes, modest clothing, sun protection, water bottle, camera, and small denomination rupees for donations or offerings.</li>
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
                      q: "What is the Living Goddess Kumari?",
                      a: "The Kumari is a prepubescent girl selected from the Newari Buddhist community who is worshipped as the living incarnation of the goddess Taleju. She lives in the Kumari Ghar palace and appears at certain times of day to bless visitors. The selection process involves 32 perfections, and once chosen, she lives in the palace until her first menstruation, after which a new Kumari is selected.",
                    },
                    {
                      q: "Can I see cremations at Pashupatinath?",
                      a: "Yes, open-air cremations take place daily on the banks of the Bagmati River. Photography of the cremation itself is strictly prohibited out of respect, but observing from a distance is acceptable. Your guide will explain the Hindu death rituals and their spiritual significance. The experience is profound and offers insight into Hindu beliefs about death and rebirth.",
                    },
                    {
                      q: "How much walking is involved?",
                      a: "You'll walk approximately 3-4 hours total throughout the day, with vehicle transfers between sites. The terrain is uneven with stone-paved streets and some stairs (especially at Swayambhunath). Comfortable walking shoes are essential. The pace is leisurely with plenty of time for rest and photography.",
                    },
                    {
                      q: "Is this tour suitable for children?",
                      a: "Yes, this tour is very family-friendly. Children are fascinated by the monkeys at Swayambhunath, the Living Goddess, and the colorful rituals. The tour pace is relaxed with breaks. Please let us know if you have specific needs for children.",
                    },
                    {
                      q: "Can I customize this tour?",
                      a: "Absolutely! This tour can be customized to your interests. You might want to spend more time at certain sites, add Patan or Bhaktapur, or focus more on photography. Please let us know your preferences when booking, and we'll create a personalized itinerary.",
                    },
                    {
                      q: "What is the best time of day for photography?",
                      a: "Morning light (9-11 AM) is excellent for Swayambhunath and Boudhanath. Late afternoon (3-5 PM) offers beautiful light at Pashupatinath and Kathmandu Durbar Square. Our itinerary is timed to provide good lighting at each location.",
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

              {/* UNESCO Timeline */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl mb-6 md:mb-12">
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-[#0f2940] mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                    <History className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a]" /> UNESCO World Heritage Timeline
                  </h3>
                  <div className="space-y-1.5 md:space-y-3">
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">5th Century</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Swayambhunath Stupa established</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">5th Century</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Boudhanath Stupa built</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">12th-18th C.</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Kathmandu Durbar Square developed by Malla kings</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">1979</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Kathmandu Valley designated UNESCO World Heritage Site</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">2003</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Pashupatinath added to UNESCO list</div>
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