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
  Flame,
  Landmark,
  Church,
  Compass,
  Trees,
  Cloud,
  MountainSnow,
  Gem,
  Medal,
  Wind,
  Flower2,
  Sun,
  CloudSun,
  Award,
  Eye,
  Navigation,
  Coffee,
  Sparkles,
  Footprints,
  Milestone,
  Info,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Tiger's Nest Preparation",
    altitude: "2,280m",
    distance: "Airport transfer + short orientation",
    description: "Welcome to Bhutan! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Transfer to your hotel in Paro (just 10 minutes from the airport). After check-in, meet your guide for a comprehensive briefing about tomorrow's hike to Taktsang Monastery (Tiger's Nest). Your guide will explain the trail, what to expect, and check that you have appropriate footwear and gear. The rest of the day is free to relax, acclimatize to the altitude, and prepare for the adventure ahead. Evening walk through Paro town to visit the local craft market and Rinpung Dzong illuminated at night. Early dinner and rest recommended.",
    overnight: "Hotel in Paro",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Tiger's Nest briefing", "Gear check", "Paro town exploration", "Rinpung Dzong evening view"],
  },
  {
    day: 2,
    title: "Taktsang Monastery (Tiger's Nest) Day Hike",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-7 hrs hike",
    description: "The day you've been waiting for! Early breakfast at the hotel (around 7:00 AM) before driving 15 minutes to the base camp of Taktsang Monastery. Your guide will brief you one final time before beginning the ascent. The trail starts with a gentle incline through beautiful pine forest, then becomes steeper with stone steps. The first section takes about 45-60 minutes to reach the cafeteria viewpoint - a perfect spot to rest, hydrate, and take your first photos of the monastery clinging to the cliff. From here, the trail descends slightly before the final climb to the monastery itself. The entire ascent takes 2-3 hours depending on your pace. Upon reaching Taktsang Monastery, you'll have time to explore this sacred site where Guru Rinpoche meditated in the 8th century. Feel the spiritual energy and marvel at the incredible location. Your guide will explain the history and significance of each temple. After visiting the monastery, descend back to the cafeteria for a well-deserved lunch with spectacular views. Continue the descent (another 1-1.5 hours) to the base. Transfer back to your hotel for a well-earned rest. Celebrate your achievement with a special dinner at a traditional Bhutanese farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Early morning start", "Pine forest trail", "Cafeteria viewpoint", "Taktsang Monastery exploration", "Guru Rinpoche's meditation cave", "Spectacular cliff-side views", "Traditional farmhouse dinner", "Cultural performance"],
  },
  {
    day: 3,
    title: "Paro Sightseeing & Departure",
    altitude: "2,280m",
    distance: "Local sightseeing + airport transfer",
    description: "After breakfast, enjoy a relaxing morning exploring Paro's cultural treasures at a leisurely pace. Visit the National Museum (Ta Dzong) housed in a historic watchtower, showcasing Bhutanese art, relics, and national costume. Explore Paro Rinpung Dzong, a magnificent fortress-monastery overlooking the valley. Time permitting, visit Kyichu Lhakhang, one of Bhutan's oldest and most sacred temples (built in the 7th century). Depending on your flight time, you may have opportunity for last-minute souvenir shopping in Paro town. Transfer to Paro International Airport for your departure flight (allow 2 hours before flight time). Our representative will assist with check-in. Bid farewell to the Land of the Thunder Dragon with the incredible achievement of hiking to the iconic Tiger's Nest Monastery - a memory you'll treasure forever.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["National Museum (Ta Dzong)", "Rinpung Dzong", "Kyichu Lhakhang (optional)", "Souvenir shopping", "Airport transfer", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation (3-star with breakfast) in Paro",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed) specialized in Taktsang history",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees (including Taktsang Monastery)",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (2 nights = $200)",
  "Government taxes and royalty",
  "Mineral water during sightseeing and hike",
  "Traditional scarf welcome at airport",
  "First aid medical kit",
  "Trekking poles (provided on request)",
  "Packed snacks for the hike (energy bars, fruits)",
  "Traditional farmhouse dinner with cultural performance",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monuments (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional - can be arranged)",
  "Horse ride up/down the trail (optional - available for hire locally)",
];

const gallery = [
  {
    src: "/images/used/bhutan-tiger.avif",
    alt: "Taktsang Monastery",
    caption: "Taktsang Monastery - The Tiger's Nest",
  },
  
];

const trailInfo = [
  {
    section: "Base to Cafeteria",
    time: "45-60 minutes",
    elevation: "2,280m → 2,900m",
    difficulty: "Steep climb",
    description: "The initial ascent through pine forest with stone steps. The most challenging section of the hike.",
  },
  {
    section: "Cafeteria to Monastery",
    time: "45-60 minutes",
    elevation: "2,900m → 3,120m → 2,900m",
    difficulty: "Moderate",
    description: "Descend slightly to a stream, then final climb to the monastery. Spectacular views throughout.",
  },
  {
    section: "Monastery Exploration",
    time: "45-60 minutes",
    elevation: "3,120m",
    difficulty: "Easy",
    description: "Visit the various temples, meditation caves, and viewpoints around the monastery complex.",
  },
  {
    section: "Descent to Base",
    time: "60-90 minutes",
    elevation: "3,120m → 2,280m",
    difficulty: "Easy to Moderate",
    description: "Gradual descent following the same trail. Take your time and enjoy the changing perspectives.",
  },
];

export default function TigersNestDayHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Tiger's Nest Day Hiking";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Tiger's Nest Day Hiking - Himkala Adventure");
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
                <a href="#trail-info" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Trail Details
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
            src="/images/used/bhutan-tiger.avif"
            alt="Tiger's Nest Monastery"
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
                <MapPin className="w-3 h-3 mr-1" /> Paro, Bhutan
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Footprints className="w-3 h-3 mr-1" /> Day Hike
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Award className="w-3 h-3 mr-1" /> Iconic Experience
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              TIGER'S NEST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                DAY HIKING
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              Hike to Bhutan's most sacred and iconic site - Taktsang Monastery, perched dramatically on a cliff 
              900 meters above the Paro Valley. A challenging but rewarding day hike with expert guidance, 
              traditional farmhouse dinner, and cultural immersion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-12 relative">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$1,250</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,050</div>
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
                        <span className="text-white/50 text-sm line-through">$1,250</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,050</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $200</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>3 Days / 2 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Mar-May, Sep-Nov</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 2-12</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>3-Star Hotel in Paro</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Footprints className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Hike: 8km / 5-7 hours</span>
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
                          <span className="text-slate-500">Start/End Point</span>
                          <span className="font-medium text-[#0f2940]">Paro Airport</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Taktsang (3,120m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Elevation Gain</span>
                          <span className="font-medium text-[#0f2940]">840m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Hike Duration</span>
                          <span className="font-medium text-[#0f2940]">5-7 hours round trip</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Moderate to Challenging</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Visa & SDF</span>
                          <span className="font-medium text-[#0f2940]">Fully Included ($200)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Trail Summary Card */}
                  <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-[10px] md:text-base">
                        <Milestone className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Trail Summary
                      </h3>
                      <div className="space-y-3 text-[10px] md:text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Distance</span>
                          <span className="font-medium text-[#0f2940]">8 km round trip</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Total Time</span>
                          <span className="font-medium text-[#0f2940]">5-7 hours</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Max Altitude</span>
                          <span className="font-medium text-[#0f2940]">3,120m</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Elevation Gain</span>
                          <span className="font-medium text-[#0f2940]">840m</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Trail Type</span>
                          <span className="font-medium text-[#0f2940]">Stone steps, forest path</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Best Time</span>
                          <span className="font-medium text-[#0f2940]">Early morning start</span>
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
              <div className="lg:hidden flex gap-2 mb-4">
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
                    The <strong>Tiger's Nest Monastery (Taktsang)</strong> is Bhutan's most iconic and sacred site - 
                    a stunning complex of temples clinging to a cliff face <strong>900 meters above the Paro Valley</strong>. 
                    This 3-day experience is designed specifically for those who want to focus on this legendary hike 
                    while also experiencing the best of Bhutanese culture and hospitality.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Your journey begins with arrival in Paro, followed by a briefing and preparation for the hike. 
                    The second day is dedicated entirely to the <strong>Taktsang hike</strong> - a challenging but 
                    incredibly rewarding 5-7 hour round trip through pine forests adorned with prayer flags, with 
                    spectacular views throughout. After descending, celebrate your achievement with a traditional 
                    farmhouse dinner and cultural performance.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With expert local guidance, all meals included, comfortable accommodation, and the Sustainable 
                    Development Fee covered, this package offers a focused, hassle-free experience of Bhutan's most 
                    unforgettable attraction. Perfect for travelers with limited time who don't want to miss the 
                    absolute highlight of the Land of the Thunder Dragon.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Experience Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                    "Expert guide sharing history and spiritual significance",
                    "Spectacular cliff-side monastery views",
                    "Visit Guru Rinpoche's meditation cave",
                    "Prayer flag-covered mountain trails",
                    "Traditional farmhouse dinner with cultural performance",
                    "Explore Paro's Rinpung Dzong and National Museum",
                    "All meals and hotel accommodation included",
                    "Small group size for personalized experience",
                    "All permits and visa fees included ($200 SDF)",
                    "Trekking poles and snacks provided",
                    "Achieve one of the world's most famous hikes",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Trail Details Section */}
              <section className="mb-6 md:mb-12" id="trail-info">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trail Details</h2>
                <Card className="bg-gradient-to-br from-[#f8fbfc] to-white border-[#C5E0ED]/30 rounded-lg md:rounded-2xl mb-4">
                  <CardContent className="p-3 md:p-5">
                    <p className="text-slate-600 text-xs md:text-sm mb-4">
                      The Tiger's Nest hike is challenging but achievable for most with reasonable fitness. Here's what to expect on the trail:
                    </p>
                    <div className="space-y-3">
                      {trailInfo.map((section, index) => (
                        <div key={index} className="border-b border-[#C5E0ED]/20 last:border-0 pb-3 last:pb-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Badge className="bg-[#C5E0ED]/30 text-[#0f2940] font-bold text-[8px] md:text-xs">
                              {section.section}
                            </Badge>
                            <span className="text-[8px] md:text-xs text-slate-500">{section.time}</span>
                            <span className="text-[8px] md:text-xs text-slate-500">{section.elevation}</span>
                          </div>
                          <p className="text-slate-600 text-[10px] md:text-sm mb-1">
                            <span className="font-medium">Difficulty:</span> {section.difficulty}
                          </p>
                          <p className="text-slate-600 text-[10px] md:text-sm">{section.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-amber-50 p-2 rounded-lg">
                      <p className="text-amber-700 text-[10px] md:text-xs flex items-start gap-1">
                        <Info className="w-3 h-3 shrink-0 mt-0.5" />
                        <span><strong>Pro Tip:</strong> Start early (around 8 AM) to avoid afternoon clouds and crowds. The cafeteria at the viewpoint serves food and drinks - a perfect rest stop.</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Hike</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, blooming rhododendrons along the trail, and clear morning skies. 
                        Paro Tshechu festival often falls in spring - a colorful addition if your dates align.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear mountain views, pleasant weather, and vibrant 
                        festivals. Perfect conditions for photography and hiking.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

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
                                <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover medical emergencies and evacuation.</li>
                    <li>• The Tiger's Nest hike is challenging with 840m elevation gain over stone steps. Good walking shoes and reasonable fitness are essential.</li>
                    <li>• Bhutan requires a minimum <strong>Sustainable Development Fee (SDF) of $100 per night</strong> - for 2 nights this is $200, which is fully included.</li>
                    <li>• <strong>Visa is processed by us</strong> - we need a clear passport copy and passport photo at least 15 days before travel.</li>
                    <li>• Horses are available for hire at the base if you prefer not to hike the entire way (approx $50-60, payable locally).</li>
                    <li>• The monastery interior prohibits photography - your guide will advise on respectful behavior.</li>
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
                      q: "How difficult is the Tiger's Nest hike?",
                      a: "The hike is moderate to challenging. You'll climb 840 meters over 4km to reach the monastery, with many stone steps. The total round trip takes 5-7 hours. Most people with reasonable fitness can complete it, but you should be prepared for a full day of exertion. Take your time, rest when needed, and stay hydrated. Your guide will set a comfortable pace for the group.",
                    },
                    {
                      q: "Can I ride a horse instead of hiking?",
                      a: "Yes! Local ponies are available for hire at the trailhead. The horses can take you up to the cafeteria viewpoint (approximately halfway), but cannot go to the monastery itself as the final section involves steps. The cost is approximately $50-60 round trip and is payable locally in cash. This is a great option if you have mobility concerns or want to conserve energy.",
                    },
                    {
                      q: "What should I wear and bring for the hike?",
                      a: "Essential items: comfortable broken-in hiking shoes with good grip, layers (mornings are cool), rain jacket (just in case), sunscreen, sunglasses, hat, water bottle (1-2 liters), and small backpack. We provide trekking poles on request and packed snacks. Dress modestly for monastery entry (shoulders and knees covered).",
                    },
                    {
                      q: "What is the Sustainable Development Fee (SDF) and is it included?",
                      a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. For this 2-night tour, the SDF of $200 is fully included in our package price - you don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment.",
                    },
                    {
                      q: "Do I need a visa? How does it work?",
                      a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                    },
                    {
                      q: "Is the monastery open every day?",
                      a: "Taktsang Monastery is open daily, but may close for special religious events. It's closed on some Buddhist holidays. We check ahead for your specific dates. The best time to visit is morning when the skies are clearest before afternoon clouds roll in - which is why we start early!",
                    },
                    {
                      q: "Can I take photos inside the monastery?",
                      a: "Photography is not permitted inside the monastery temples out of respect for the sacred spaces. However, you can take unlimited photos from the outside, including the famous views from the cafeteria and viewpoints along the trail. Your guide will advise on appropriate moments for photos.",
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