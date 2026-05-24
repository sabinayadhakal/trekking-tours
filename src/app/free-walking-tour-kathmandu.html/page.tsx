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
  Home,
  MountainSnow,
  Eye,
  Sunset,
  Droplet,
  Building2,
  Coffee,
  ShoppingBag,
  Scroll,
  Sparkles,
  Church,
  History,
  Palette,
  Footprints,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Free walking tour data based on the description
const tourStops = [
  {
    name: "Kathe Swoyambhu",
    icon: Church,
    description:
      "A beautiful embodiment of religious harmony where Hindu, Buddhist and Tibetan cultures coexist. Small stupas with symbolic paintings surround the main stupa. Very photogenic, often undergoing gentle construction.",
  },
  {
    name: "Local Lassi Stop",
    icon: Coffee,
    description:
      "Near the glass-bead market, try freshly churned lassi with sugar, yogurt, dried fruits and concentrated milk (khuwa). A must-try refreshment — NPR 40 (small) / NPR 70 (large).",
  },
  {
    name: "Glass Beads Market",
    icon: ShoppingBag,
    description:
      "Generations of Kathmandu's Muslim minority make colourful glass beads for Hindu ceremonies. Iconic green bead necklaces are given to brides. A wholesale market bursting with colour.",
  },
  {
    name: "Monkey Temple (Swoyambhunath)",
    icon: MountainSnow,
    description:
      "Now 424 steps (post‑quake reconstruction). Hundreds of monkeys, not aggressive but will pester if you carry sweets. Panoramic valley views, symbolic carvings, souvenir shops. Entrance NPR 200.",
  },
];

const reviews = {
  total: 350,
  excellent: 97,
  veryGood: 86,
  quote: "Previous visitors have come from a wide range of countries and have included both ‘first timers’ and seasoned travellers to Nepal.",
};

const highlightsList = [
  "Hidden relics of Kathmandu’s Malla Golden Age",
  "Tibetan Buddhist monastery & craft shops",
  "Newari courtyards, Bahi, Biharas, monasteries",
  "Bustling local markets: handicrafts, beads, spices, thangkas",
  "Freak Street (optional) – hippie trail history",
  "Sacred Bishnumati river & local cremation ghats",
];

export default function FreeWalkingTourKathmanduPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedStops, setExpandedStops] = React.useState<number[]>([]); // none expanded by default
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "Free Walking Tour Kathmandu";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Free Walking Tour Kathmandu - Himkala Adventure");
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const toggleStop = (idx: number) => {
    setExpandedStops((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
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
                <a href="#stops" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Tour Stops
                </a>
                <a href="#reviews" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Reviews
                </a>
                <a href="#practical" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Practical Info
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
            src=                    "/images/used/fwt-1.webp"

            alt="Free Walking Tour Kathmandu"
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
                <MapPin className="w-3 h-3 mr-1" /> Tips‑based · Free Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy · 4‑5 hours
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Local expert guide
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              FREE WALKING TOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                KATHMANDU
              </span>
            </h1>

            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              The first tips‑based walking tour in the valley. Led by decades‑experienced guides,
              discover hidden temples, lively markets, and living culture — completely free to join.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-4 md:gap-10">
            {/* Mobile Sticky Info Bar */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[#0f2940] font-medium">
                  <span className="text-slate-500 text-[10px]">tips‑based</span>
                  <div className="font-bold text-xs">free to join</div>
                </div>
                <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                  <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]">
                    <Heart className="w-3 h-3 mr-1" /> Confirm attendance
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar - Hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Info Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">FREE</div>
                      <span className="text-white/60 text-[10px] md:text-sm">tips‑based tour</span>
                      <Badge className="ml-2 bg-amber-500/20 text-amber-300 border-none text-[8px] md:text-xs">you decide</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4‑5 hours · 9am & 2pm daily</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Start: Garden of Dreams</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group: any size (intimate)</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Footprints className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>End: Monkey Temple (Swoyambhu)</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>No reservation needed</span>
                      </div>
                    </div>

                    {/* Confirm Attendance Button */}
                    <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Confirm attendance
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
                    
                    <p className="text-[8px] md:text-[10px] text-white/40 text-center">please arrive 5‑10 min early</p>
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
                        <span className="text-slate-500">Start times</span>
                        <span className="font-medium text-[#0f2940]">9:00 & 14:00</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Meeting point</span>
                        <span className="font-medium text-[#0f2940]">Garden of Dreams (outside)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tour type</span>
                        <span className="font-medium text-[#0f2940]">Cultural, heritage, walking</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End point</span>
                        <span className="font-medium text-[#0f2940]">Swoyambhu (Monkey Temple)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Easy, some stairs</span>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Experience</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Free Tour Kathmandu</strong> is the first of its kind in the Kathmandu Valley. While other walking tours exist,
                    this is the only one that provides a free glimpse of the highlights of Kathmandu, led and narrated by a dedicated tour guide with decades of experience.
                    Winding through the heart of the old centre, the tour encompasses iconic temples, stupas, monasteries, palaces and local Newar architecture.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Departing from just outside the <strong>Garden of Dreams</strong> at 9:00 and 14:00 daily, the tour passes through southern Thamel
                    via Kathesimbhu Stupa and Buddhist monasteries, then enters local streets towards Indra Chowk market.
                    From there, the tour passes around Durbar Square and through a sleepy Newar neighbourhood towards the local cremation centre near the sacred Vishnumati River.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Crossing the river, the tour passes through Swoyambhunath suburb and finishes at the top of picturesque <strong>Monkey Temple</strong>.
                    Your guide will either walk you back to Thamel or direct you to a bus or taxi.
                  </p>
                </div>
                <div className="mt-3 md:mt-4 p-2 md:p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-[10px] md:text-sm rounded">
                  <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
                  <strong>Tips‑based model:</strong> you award the time and experience of the guide. No fixed fee — gratitude welcomed.
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trip Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {highlightsList.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tour Stops (like itinerary but as expandable cards) */}
              <section className="mb-6 md:mb-12" id="stops">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <h2 className="text-lg md:text-2xl font-serif text-[#0f2940]">Stops along the way</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#2d6a8a] border-[#C5E0ED] hover:bg-[#C5E0ED]/20 rounded-full text-xs md:text-sm px-2 md:px-4"
                    onClick={() =>
                      setExpandedStops(expandedStops.length === tourStops.length ? [] : tourStops.map((_, i) => i))
                    }
                  >
                    {expandedStops.length === tourStops.length ? "Collapse All" : "Expand All"}
                  </Button>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {tourStops.map((stop, idx) => {
                    const Icon = stop.icon;
                    return (
                      <Card
                        key={idx}
                        className={`bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl overflow-hidden transition-all ${
                          expandedStops.includes(idx) ? "shadow-md md:shadow-lg shadow-[#C5E0ED]/20" : "hover:shadow-sm"
                        }`}
                      >
                        <CardContent className="p-0">
                          <button
                            className="w-full flex items-center gap-2 md:gap-4 p-2 md:p-4 text-left"
                            onClick={() => toggleStop(idx)}
                          >
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 md:w-6 md:h-6 text-[#0f2940]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{stop.name}</h4>
                            </div>
                            <ChevronDown
                              className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                                expandedStops.includes(idx) ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedStops.includes(idx) && (
                            <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                              <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4">
                                {stop.description}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Reviews & Tips box */}
              <section className="mb-6 md:mb-12" id="reviews">
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-3 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-2 flex items-center gap-2 text-sm md:text-lg">
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" /> Reviews
                    </h3>
                    <p className="text-slate-700 mb-2 text-[10px] md:text-sm">
                      Out of over <strong>{reviews.total}+ reviews on TripAdvisor</strong>, {reviews.excellent}% rate the Free Walking Tour as ‘Excellent’ or ({reviews.veryGood}% ‘Very Good’).
                    </p>
                    <p className="text-slate-600 italic text-[10px] md:text-sm">“{reviews.quote}”</p>
                    <div className="mt-3 md:mt-4 text-[8px] md:text-xs text-slate-500 flex items-center gap-1">
                      <Users className="w-2.5 h-2.5 md:w-3 md:h-3" /> solo, couples, families – all welcome
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Practical info (monkey temple note, entrance fee) */}
              <section className="mb-6 md:mb-12" id="practical">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Note & Practical</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-2 md:p-6">
                  <div className="flex gap-2 md:gap-3">
                    <div>
                      <p className="text-blue-800 text-[10px] md:text-sm mb-1 md:mb-2">
                        <strong>Please confirm prior to joining:</strong> The Free Walking Tour is tips‑based — you award the guide for their time and experience. Please show up at the Garden of Dreams 5‑10 minutes before start.
                      </p>
                      <p className="text-blue-700 text-[10px] md:text-sm">
                        <strong>Monkey Temple entrance:</strong> NPR 200 per person (not included, payable on the spot). Bring small cash for refreshments like lassi or souvenirs.
                      </p>
                      <p className="text-blue-700 text-[10px] md:text-sm mt-1 md:mt-2">Namaste 🙏</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Photo Gallery - minimal version */}
              <section className="mb-6 md:mb-12" id="gallery">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Glances of the route</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-3">
                  {[
                    "/images/used/beads.webp",
                    "/images/used/ancient_temple.webp",
                    "/images/used/buddhist_temple-1.webp",
                    "/images/used/cremation-1.webp",
                                        "/images/used/indrachowk.webp",
                                                            "/images/used/kathesimbu.webp",
                                                                                "/images/used/monkey_temple.webp",
                                                                                                    "/images/used/teeth.webp",




                  ].map((src, i) => (
                    <div key={i} className="relative h-20 md:h-32 rounded-lg overflow-hidden">
                      <Image src={src} alt="tour preview" fill className="object-cover" />
                    </div>
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