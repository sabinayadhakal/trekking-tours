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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Dakshinkali, Pharping & Kirtipur Sightseeing Tour",
    altitude: "1,350m → 1,450m → 1,500m → 1,400m → 1,350m",
    distance: "Full day tour (6-7 hours)",
    description: "Your full-day spiritual and cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Dakshinkali (approximately 45 minutes), one of the most important Hindu temples dedicated to the goddess Kali. Spend approximately 1 hour experiencing this powerful sacred site, especially vibrant on Tuesdays and Saturdays when animal sacrifices take place. Next, drive to nearby Pharping (15 minutes), an ancient Newari town and important Buddhist pilgrimage site. Spend approximately 2 hours exploring the sacred caves where Guru Rinpoche meditated, visiting the monasteries, and experiencing the unique blend of Hindu and Buddhist traditions. Enjoy a traditional Nepali lunch at a local restaurant in Pharping. In the afternoon, drive to Kirtipur (30 minutes), a historic Newari hilltop town with panoramic valley views. Spend approximately 2 hours exploring its ancient temples, narrow streets, and enjoying the peaceful atmosphere. Your guide will then drive you back to Kathmandu, arriving at your hotel by approximately 4:30 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Dakshinkali Temple", "Pharping meditation caves", "Buddhist monasteries", "Kirtipur hilltop town", "Panoramic valley views"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (Hindu and Buddhist culture expert)",
  "Dakshinkali Temple donation",
  "Pharping monastery donations",
  "Kirtipur temple entrance fees",
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
    src: "/images/used/dakshinkali-1.webp",
    alt: "Dakshinkali Temple",
    caption: "Dakshinkali Temple - Sacred Hindu shrine dedicated to Goddess Kali",
  },
  {
    src: "/images/used/pharping-2.webp",
    alt: "Pharping Monastery",
    caption: "Buddhist monastery in Pharping, important pilgrimage site",
  },
  {
    src: "/images/used/kirtipur-2.webp",
    alt: "Kirtipur Hilltop",
    caption: "Historic Kirtipur town with panoramic valley views",
  },
  
];

export default function DakshinkaliPharpingKirtipurSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Tour name constant for auto-fill functionality
  const tourName = "Dakshinkali, Pharping & Kirtipur Sightseeing Tour";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Dakshinkali, Pharping & Kirtipur Sightseeing Tour - Himkala Adventure");
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

  // Schema.org Product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dakshinkali, Pharping & Kirtipur Sightseeing Tour",
    "description": "A full-day spiritual and cultural tour visiting Dakshinkali Temple (Hindu shrine to Goddess Kali), Pharping meditation caves (Buddhist pilgrimage site), and Kirtipur hilltop town in Nepal.",
    "image": "https://www.himkalaadventure.com/images/used/dakshinkali-2.webp",
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": "100",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": "https://www.himkalaadventure.com/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "98"
    }
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided day sightseeing tours in Nepal including Dakshinkali, Pharping, and Kirtipur spiritual and cultural tours.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thamel, Lekhnath Marga",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    },
    "telephone": "+977 9841376470",
    "email": "info@himkalaadventure.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7172,
      "longitude": 85.3240
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Mobile Navigation Drawer */}
      {showMobileNav && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileNav(false)}
            aria-label="Close navigation"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940]">Quick Navigation</h3>
                <button 
                  onClick={() => setShowMobileNav(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
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
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
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
            src="/images/used/dakshinkali-2.webp"
            alt="Dakshinkali Temple, Pharping meditation caves and Kirtipur sightseeing tour - spiritual and cultural journey in Nepal"
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
                <MapPin className="w-3 h-3 mr-1" aria-hidden="true" /> Day Sightseeing Tour
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Spiritual Journey
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              DAKSHINKALI, PHARPING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & KIRTIPUR SIGHTSEEING TOUR
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the sacred heart of Nepal's spiritual traditions—from the powerful Goddess Kali temple at Dakshinkali 
              to the ancient meditation caves of Pharping and the historic hilltop town of Kirtipur.
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
                <div className="text-xs text-slate-400 line-through">$120</div>
                <div className="text-lg font-bold text-[#0f2940]">$100</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] text-white font-bold rounded-full px-4 py-1.5 text-xs min-h-[44px]" aria-label={`Book ${tourName} now`}>
                  <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Book Now
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
                        <span className="text-white/50 text-sm line-through">$120</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$100</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $20</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>6-7 Hours</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Available Daily</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Group Size: 1-12</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <span>Hindu & Buddhist Sites</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Map className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" />
                          <span>Max Altitude: 1,500m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base" aria-label={`Book ${tourName}`}>
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Book This Tour
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label="Inquire about Dakshinkali, Pharping and Kirtipur sightseeing tour on WhatsApp"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-xs md:text-base">
                          <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> WhatsApp Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Quick Facts */}
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Map className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Quick Facts
                      </h3>
                      <div className="space-y-2 text-[10px] md:text-sm">
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Start Time</span>
                          <span className="font-medium text-[#0f2940]">9:00 AM</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Time</span>
                          <span className="font-medium text-[#0f2940]">~4:30 PM</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Pickup Location</span>
                          <span className="font-medium text-[#0f2940]">Your Hotel in Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Tour Type</span>
                          <span className="font-medium text-[#0f2940]">Spiritual, Cultural, Pilgrimage</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Best Day</span>
                          <span className="font-medium text-[#0f2940]">Tuesday or Saturday for Dakshinkali</span>
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
                        <Share2 className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> Share
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg md:rounded-xl text-[8px] md:text-xs"
                          onClick={handleCopyLink}
                          aria-label="Copy link to clipboard"
                        >
                          {copied ? <Check className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />}
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
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-3 h-3 mr-1" aria-hidden="true" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-3 h-3 mr-1" aria-hidden="true" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-[10px] py-1.5 min-h-[44px]"
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                >
                  {copied ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                </Button>
              </div>

              {/* Overview */}
              <section className="mb-6 md:mb-12" id="overview">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Dakshinkali, Pharping & Kirtipur Sightseeing Tour</strong> is a unique journey into the spiritual heart of Nepal, exploring sites sacred to both Hindus and Buddhists. This tour offers a rare glimpse into the living traditions of Tantric Hinduism, ancient Buddhist meditation caves, and a historic hilltop town that has preserved its medieval character.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Dakshinkali Temple</strong>, located about 22 kilometers south of Kathmandu, is one of the most important Hindu temples in Nepal. Dedicated to the goddess Kali, the fierce form of Durga, this temple is a major pilgrimage site, especially on Tuesdays and Saturdays when animal sacrifices are offered. The temple is situated in a scenic gorge where a stream flows, creating a powerful and atmospheric setting.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    <strong>Pharping</strong>, also known as Pharping, is an ancient Newari town that has become one of the most important Buddhist pilgrimage sites in Nepal. It was here that Guru Rinpoche (Padmasambhava) meditated in a cave and achieved enlightenment, bringing Buddhism to Tibet. Today, Pharping is home to numerous monasteries, sacred caves, and a vibrant community of monks and nuns from various Tibetan Buddhist traditions.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The tour concludes at <strong>Kirtipur</strong>, a historic Newari hilltop town that was once a independent kingdom. Overlooking the Kathmandu Valley, Kirtipur has preserved its traditional character with narrow streets, brick houses, and ancient temples. Its strategic location has made it a witness to pivotal moments in Nepalese history, and its peaceful atmosphere offers a perfect end to this spiritual journey.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Dakshinkali Temple, one of Nepal's most powerful Hindu shrines",
                    "Experience the vibrant atmosphere on Tuesday or Saturday (animal sacrifice days)",
                    "Explore the sacred meditation caves of Pharping where Guru Rinpoche practiced",
                    "Visit Buddhist monasteries representing different Tibetan traditions",
                    "See the Asura Cave and Yangleshö Cave, important pilgrimage sites",
                    "Discover the ancient Newari town of Pharping with its unique culture",
                    "Explore historic Kirtipur, a hilltop town with panoramic valley views",
                    "Visit the Bagh Bhairab Temple and Uma Maheshwar Temple in Kirtipur",
                    "Enjoy traditional Nepali lunch at a local restaurant",
                    "Learn about the syncretic blend of Hindu and Buddhist traditions",
                    "Panoramic photography opportunities from Kirtipur's hilltop",
                    "Peaceful atmosphere away from the main tourist crowds",
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
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures and clear mornings. Ideal for exploring temples and caves. The hillsides are lush and green.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, perfect temperatures, and important religious festivals. Ideal time for pilgrimage and photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-amber-500" aria-hidden="true" />
                        <h3 className="font-bold text-[#0f2940] text-xs md:text-base">Winter (Dec-Feb)</h3>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Cool, clear days with excellent visibility. Fewer tourists. Morning fog may delay start but usually clears by mid-morning.
                      </p>
                      <Badge className="bg-blue-100 text-blue-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: The tour operates year-round. For the full Dakshinkali experience with animal sacrifices, plan your visit on a Tuesday or Saturday.</p>
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
                    aria-label={expandedDays.length === itinerary.length ? "Collapse all itinerary days" : "Expand all itinerary days"}
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
                          aria-label={expandedDays.includes(day.day) ? `Collapse ${day.title}` : `Expand ${day.title}`}
                        >
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex flex-col items-center justify-center shrink-0">
                            <span className="text-[8px] md:text-[10px] font-bold text-[#0f2940] uppercase">Day Tour</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-[#0f2940] text-xs md:text-base truncate">{day.title}</h3>
                            <div className="flex flex-wrap gap-1 md:gap-3 text-xs text-slate-500 mt-0.5 md:mt-1">
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" aria-hidden="true" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs">
                                <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" aria-hidden="true" /> {day.distance}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-3 h-3 md:w-5 md:h-5 text-slate-400 transition-transform shrink-0 ${
                              expandedDays.includes(day.day) ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {expandedDays.includes(day.day) && (
                          <div className="px-2 md:px-4 pb-2 md:pb-4 border-t border-[#C5E0ED]/20">
                            <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
                                <span className="text-[10px] md:text-xs"><strong>Meeting Point:</strong> Your hotel in Kathmandu</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" />
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

              {/* Dakshinkali Details */}
              <div className="bg-red-50 border border-red-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Dakshinkali Temple - The Goddess Kali's Shrine
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-red-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Goddess Kali:</strong> Dakshinkali is dedicated to Kali, the fierce form of Durga, who represents time, change, and power. She is depicted as a dark goddess with a necklace of skulls, holding weapons and the head of a demon. Worshipers seek her protection and blessings.</li>
                      <li><strong>Animal Sacrifice:</strong> The temple is famous for its animal sacrifices, particularly on Tuesdays and Saturdays, which are considered auspicious for Kali. Devotees offer chickens, goats, and sometimes buffalo to the goddess, believing that the sacrifice pleases her and brings blessings. This ancient tradition continues to this day.</li>
                      <li><strong>Temple Layout:</strong> The temple is situated in a scenic gorge where a small stream flows. The main shrine houses the black stone image of Kali. The surrounding area has numerous smaller shrines dedicated to other deities.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-red-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Pilgrimage Site:</strong> Thousands of devotees visit Dakshinkali daily, with crowds swelling to tens of thousands on special festival days. The atmosphere is intense and devotional, offering a glimpse into living Hinduism.</li>
                      <li><strong>Festivals:</strong> The biggest celebrations occur during Dashain (October) when animal sacrifices are offered throughout the festival. During this time, the temple is especially vibrant with pilgrims from across Nepal.</li>
                      <li><strong>Photography Note:</strong> Photography is permitted in the temple complex, but be respectful during sacrifices. Your guide will advise on appropriate behavior and the best times to visit for a meaningful experience.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pharping Details */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Pharping - Sacred Buddhist Pilgrimage
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Guru Rinpoche's Cave:</strong> The most sacred site in Pharping is the cave where Guru Rinpoche (Padmasambhava) meditated and achieved enlightenment in the 8th century. He is credited with bringing Buddhism to Tibet and is revered as a second Buddha. The cave, now enshrined within a monastery, is a major pilgrimage destination for Buddhists from around the world.</li>
                      <li><strong>Asura Cave:</strong> Another important meditation cave where Guru Rinpoche practiced and subdued negative forces. The cave contains a footprint believed to be his and is a powerful place for meditation.</li>
                      <li><strong>Yangleshö Cave:</strong> This cave complex is where Guru Rinpoche performed important tantric practices. It is now part of a larger monastery complex with beautiful murals and statues.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Monasteries:</strong> Pharping is home to numerous monasteries representing different Tibetan Buddhist traditions. The Thrangu Tashi Yangtse Monastery, Shechen Monastery, and Namo Buddha Monastery are among the most important. Visitors can observe monks in prayer, study, and debate.</li>
                      <li><strong>Newari Town:</strong> Beyond its Buddhist significance, Pharping is a traditional Newari town with brick houses, carved windows, and ancient temples. The blend of Hindu and Buddhist traditions is visible throughout the town.</li>
                      <li><strong>Pilgrimage Circuit:</strong> For serious practitioners, Pharping is part of a larger pilgrimage circuit that includes Namo Buddha (where Buddha gave his body to a starving tigress) and other sacred sites in the Kathmandu Valley.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kirtipur Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  <Landmark className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Kirtipur - Hilltop Historic Town
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>History:</strong> Kirtipur is an ancient Newari town that was once an independent kingdom. It was conquered by Prithvi Narayan Shah in 1767 during his unification of Nepal, and its resistance became legendary. The town's name means "City of Glory."</li>
                      <li><strong>Bagh Bhairab Temple:</strong> The most important temple in Kirtipur, dedicated to Bhairab, the fierce form of Shiva. The temple features a striking stone image of the deity and intricate woodcarvings. It is guarded by stone lions and has a fascinating history.</li>
                      <li><strong>Uma Maheshwar Temple:</strong> This beautiful temple dedicated to Shiva and Parvati is one of the finest examples of Newari architecture in the valley. Its multi-tiered roof and intricate carvings are exquisite.</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-700 text-[10px] md:text-sm leading-relaxed space-y-1.5">
                      <li><strong>Chilancho Stupa:</strong> A large Buddhist stupa on the hilltop offering panoramic views of the Kathmandu Valley and, on clear days, the Himalayan range. The stupa is an important pilgrimage site for Buddhists.</li>
                      <li><strong>Traditional Architecture:</strong> Kirtipur has preserved its medieval character remarkably well. Narrow brick-paved streets wind between traditional Newari houses with carved windows and doors, creating a peaceful and authentic atmosphere.</li>
                      <li><strong>Panoramic Views:</strong> From its hilltop location, Kirtipur offers stunning views of the Kathmandu Valley, including the distant Himalayas. The sunset view from here is particularly beautiful.</li>
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
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Cost Includes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50/50 border-red-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-6">
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" /> Cost Excludes
                      </h3>
                      <ul className="space-y-1 md:space-y-2">
                        {excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[10px] md:text-sm text-slate-600">
                            <XCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
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
                <AlertTriangle className="w-4 h-4 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information for Your Visit</h3>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Dakshinkali Animal Sacrifice:</strong> Animal sacrifice is a traditional practice at Dakshinkali, especially on Tuesdays and Saturdays. If you are sensitive to this, please inform your guide, and they can arrange a visit on a quieter day or advise you on what to expect. The experience is an authentic part of Hindu tradition, but it is not for everyone.</li>
                    <li>• <strong>Dress Code:</strong> Modest dress is required at all religious sites. Shoulders and knees should be covered. Remove shoes before entering temples and cave shrines.</li>
                    <li>• <strong>Photography:</strong> Photography is generally permitted, but always ask before taking photos of people, especially during religious rituals. Some monasteries may restrict photography inside shrine rooms.</li>
                    <li>• <strong>What to Bring:</strong> Comfortable walking shoes, modest clothing, sun protection, water bottle, camera, and small denomination rupees for offerings or donations.</li>
                    <li>• <strong>Physical Requirements:</strong> The tour involves moderate walking on uneven surfaces, including some stairs at temple sites. Suitable for most fitness levels. Inform us of mobility concerns when booking.</li>
                    <li>• <strong>Cultural Sensitivity:</strong> These are active religious sites. Be respectful of worshipers, follow your guide's instructions, and maintain a quiet demeanor in meditation areas.</li>
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
                        alt={`${image.alt} - Dakshinkali, Pharping and Kirtipur sightseeing tour in Nepal`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        loading="lazy"
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
                      q: "What days are best for visiting Dakshinkali?",
                      a: "Tuesdays and Saturdays are the most vibrant days at Dakshinkali, when animal sacrifices are offered. These days offer the most authentic experience of Hindu devotion but can be crowded and intense. If you prefer a quieter visit, any other day is also meaningful, though you won't see sacrifices. Your guide can help you choose based on your preferences.",
                    },
                    {
                      q: "Who was Guru Rinpoche and why is Pharping important?",
                      a: "Guru Rinpoche (Padmasambhava) was an 8th-century Buddhist master who is credited with bringing Buddhism to Tibet. He meditated in caves in Pharping and achieved enlightenment, making this one of the most important Buddhist pilgrimage sites in the world. Tibetan Buddhists believe he is a second Buddha, and visiting his meditation caves is considered highly meritorious.",
                    },
                    {
                      q: "Can I meditate in the caves at Pharping?",
                      a: "Yes, visitors are welcome to meditate quietly in the caves. Many pilgrims do so, and the atmosphere is conducive to contemplation. Your guide can help you find a quiet time. Be respectful of others who may be engaged in their own practice. Some caves have designated meditation areas.",
                    },
                    {
                      q: "Is Kirtipur worth visiting after seeing other durbar squares?",
                      a: "Absolutely. Kirtipur offers something different from the main durbar squares. It's a living town rather than a museum, with a peaceful, authentic atmosphere. Its hilltop location provides stunning valley views, and its temples and architecture are beautiful but less crowded. It's a wonderful place to experience traditional Newari life away from tourist crowds.",
                    },
                    {
                      q: "How much walking is involved in this tour?",
                      a: "The tour involves moderate walking, approximately 2-3 hours total throughout the day. The terrain is generally easy, though there are some stairs at temple sites and uneven stone streets in Kirtipur. The pace is leisurely with plenty of time for rest and photography. The vehicle is always nearby.",
                    },
                    {
                      q: "Can I combine this tour with other nearby attractions?",
                      a: "Yes, depending on your interests and time, this tour can be extended to include Namo Buddha (another important Buddhist pilgrimage site) or additional time in any of the locations. Please inquire when booking for a customized itinerary. The standard tour is designed to be relaxed and comprehensive.",
                    },
                  ].map((faq, i) => (
                    <Card key={i} className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-lg md:rounded-xl">
                      <CardContent className="p-2 md:p-5">
                        <h3 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-xs md:text-base">{faq.q}</h3>
                        <p className="text-slate-600 text-[10px] md:text-sm leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Spiritual Timeline */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-lg md:rounded-xl mb-6 md:mb-12">
                <CardContent className="p-3 md:p-6">
                  <h3 className="font-bold text-[#0f2940] mb-2 md:mb-4 flex items-center gap-2 text-xs md:text-base">
                    <History className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a]" aria-hidden="true" /> Spiritual Heritage Timeline
                  </h3>
                  <div className="space-y-1.5 md:space-y-3">
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">8th Century</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Guru Rinpoche meditates in Pharping caves and achieves enlightenment</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">12th Century</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Kirtipur established as an independent Newari kingdom</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">17th Century</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Dakshinkali Temple becomes major pilgrimage site</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">1767</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Kirtipur conquered by Prithvi Narayan Shah during unification</div>
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="w-16 md:w-20 text-[10px] md:text-xs font-bold text-[#2d6a8a]">1970s</div>
                      <div className="text-[10px] md:text-xs text-slate-600">Tibetan monasteries established in Pharping by exiled lamas</div>
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