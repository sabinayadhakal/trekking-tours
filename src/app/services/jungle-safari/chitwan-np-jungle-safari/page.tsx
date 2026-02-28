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
  Bird,
  Flower2,
  PawPrint,
  Rabbit,
  Sun,
  Moon,
  Leaf,
  MountainSnow,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive tour briefing where we'll discuss your upcoming Chitwan jungle safari, wildlife viewing tips, what to pack, and handle any arrangements. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Tour briefing", "Welcome dinner", "Thamel exploration"],
  },
  {
    day: 2,
    title: "Drive to Chitwan National Park",
    altitude: "1,350m → 415m",
    distance: "5-6 hrs drive / 150km",
    description: "After breakfast, begin the scenic drive to Chitwan National Park, Nepal's first national park and a UNESCO World Heritage Site. The journey descends from the Kathmandu Valley through lush hills, terraced farmlands, and subtropical forests, offering glimpses of rural Nepalese life. Arrive at your jungle resort in Sauraha by early afternoon. After check-in and a welcome drink, enjoy an orientation about the park's history, wildlife, and safari activities. In the late afternoon, take a leisurely village walk to nearby Tharu communities, where you can observe their traditional mud-and-straw houses, learn about their unique culture, and photograph daily life. Return to the resort for dinner and an evening Tharu cultural dance performance featuring their famous stick dance. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "Tharu village walk", "Cultural dance performance", "Resort orientation"],
  },
  {
    day: 3,
    title: "Chitwan Jungle Safari - Canoeing & Elephant Breeding Center",
    altitude: "415m",
    distance: "Full day safari",
    description: "Early morning wake-up call for your first jungle adventure. Begin with a peaceful canoe ride along the Rapti River in a traditional dugout canoe. Drift silently through the water while your naturalist guide points out aquatic birds including kingfishers, egrets, storks, and if you're lucky, you may spot gharial and mugger crocodiles basking on the riverbanks. After breakfast at the resort, visit the Elephant Breeding Center, where you can observe these gentle giants up close and learn about conservation efforts to protect the endangered Asian elephant. See baby elephants playing and learn about their care and training. After lunch, enjoy a guided nature walk through the jungle with your naturalist. Walk quietly through the sal forests and grasslands, learning to identify animal tracks, bird calls, and medicinal plants. Your guide will share their extensive knowledge of the park's ecosystem. Return to the resort before sunset. Evening free to relax or enjoy the resort's amenities. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Canoe ride on Rapti River", "Elephant Breeding Center", "Nature walk", "Bird watching", "Crocodile spotting"],
  },
  {
    day: 4,
    title: "Chitwan Jungle Safari - Jeep Safari & Wildlife Photography",
    altitude: "415m",
    distance: "Full day safari",
    description: "Early morning departure for the highlight of your safari—a thrilling jeep safari deep into Chitwan National Park. Board an open-top 4WD vehicle with your naturalist guide and venture into the heart of the jungle. The park is home to over 50 species of mammals and 500 species of birds, offering incredible wildlife viewing opportunities. Your guide will navigate through grasslands, riverine forests, and wetlands in search of wildlife. Keep your camera ready for the park's most famous resident—the endangered one-horned rhinoceros. Chitwan has one of the largest populations of these magnificent creatures in the world, and sightings are almost guaranteed. You may also spot spotted deer, sambar deer, wild boar, langur monkeys, and if extremely lucky, the elusive Bengal tiger, leopard, or sloth bear. The park is also a birdwatcher's paradise with kingfishers, hornbills, peacocks, woodpeckers, and many species of waterfowl. After a few hours of exploration, stop at a scenic spot for a picnic breakfast in the jungle. Continue your safari through different ecosystems, maximizing your chances of wildlife encounters. Return to the resort by late morning for lunch and rest. In the late afternoon, enjoy a second safari or optional activities like bird watching or visiting the Gharial Breeding Center. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Jeep safari", "One-horned rhinoceros viewing", "Bengal tiger spotting (rare)", "Bird watching paradise", "Picnic breakfast in jungle"],
  },
  {
    day: 5,
    title: "Chitwan Jungle Safari - Bird Watching & Elephant Safari",
    altitude: "415m",
    distance: "Half day safari",
    description: "Early morning bird watching walk with your naturalist guide. Chitwan is a bird lover's paradise with over 500 species recorded. Your guide will help you spot and identify colorful birds including paradise flycatchers, bee-eaters, barbets, drongos, and if you're lucky, the rare Bengal florican. After breakfast, enjoy an optional elephant safari (included) for a different perspective of the jungle. Ride on the back of a trained elephant through the tall grasslands, giving you a elevated view of wildlife and the chance to get closer to rhinos. The elephants are also excellent at spotting wildlife that might be hidden from the ground. After lunch, you'll have free time to relax by the pool, visit local souvenir shops, or simply enjoy the peaceful jungle surroundings. Late afternoon, enjoy sunset views from the Rapti Riverbank with a cold drink, reflecting on your incredible wildlife experiences. Overnight at jungle resort.",
    overnight: "Jungle Resort in Chitwan",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Bird watching walk", "Elephant safari", "Sunset at Rapti River", "Relaxation time"],
  },
  {
    day: 6,
    title: "Return to Kathmandu",
    altitude: "415m → 1,350m",
    distance: "5-6 hrs drive / 150km",
    description: "After breakfast, begin your scenic drive back to Kathmandu. The journey offers one last chance to enjoy Nepal's beautiful countryside, with stops at viewpoints along the way. Arrive in Kathmandu by late afternoon and transfer to your hotel. Evening free for last-minute souvenir shopping or personal exploration. Farewell dinner at a traditional Nepali restaurant with cultural music and dance performance. Celebrate your incredible wildlife adventures in Chitwan National Park. Overnight in Kathmandu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic return drive", "Last mountain views", "Farewell dinner", "Wildlife celebration"],
  },
  {
    day: 7,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of close encounters with one-horned rhinos, peaceful canoe rides along jungle rivers, vibrant Tharu culture, and the incredible biodiversity of Chitwan National Park. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "4 nights jungle resort accommodation in Chitwan with all meals",
  "All meals during the tour as specified (breakfast, lunch, dinner)",
  "Experienced English-speaking guide for entire tour",
  "Professional naturalist guides for all safari activities",
  "All ground transportation as per itinerary in private vehicle",
  "Chitwan National Park entry permit (multiple days)",
  "Tharu village walk with cultural guide",
  "Tharu cultural dance performance",
  "Canoe ride on Rapti River",
  "Elephant Breeding Center visit",
  "Guided nature walks (multiple days)",
  "Jeep safari (full day with picnic breakfast)",
  "Bird watching walk with expert guide",
  "Elephant safari (one session)",
  "Sunset viewing at Rapti River",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours and safaris",
  "Binoculars for wildlife viewing",
  "Wildlife identification booklet",
  "Safari certificate of completion",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover medical emergencies and evacuation)",
  "Meals not specified in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, naturalists, drivers, and resort staff (recommended)",
  "Emergency evacuation/helicopter rescue costs",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges",
  "Optional activities not mentioned in itinerary",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "One-horned Rhinoceros",
    caption: "One-horned rhinoceros - Chitwan's most famous resident",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Elephant Safari",
    caption: "Elephant safari through Chitwan's grasslands",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Rapti River Canoe",
    caption: "Traditional dugout canoe ride on the Rapti River",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Bengal Tiger",
    caption: "Bengal tiger - the elusive king of Chitwan",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Tharu Dance",
    caption: "Traditional Tharu stick dance performance",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Chitwan Sunset",
    caption: "Sunset over the Rapti River, Chitwan",
  },
];

export default function ChitwanNationalParkJungleSafariPage() {
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
    const title = encodeURIComponent("Chitwan National Park Jungle Safari - Himkala Adventure");
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
            alt="Chitwan National Park Jungle Safari"
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
                <MapPin className="w-3 h-3 mr-1" /> Jungle Safari
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                One-horned Rhinos
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              CHITWAN NATIONAL PARK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                JUNGLE SAFARI
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Embark on an unforgettable wildlife adventure in Nepal's first national park—track one-horned rhinoceros, 
              canoe past crocodiles, spot Bengal tigers, and immerse yourself in Tharu culture.
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
                    <div className="text-xs text-slate-400 line-through">$1,050</div>
                    <div className="text-lg font-bold text-[#0f2940]">$895</div>
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
                      <span className="text-white/50 text-sm line-through">$1,050</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$895</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $155</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>7 Days / 6 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Oct-Mar (Year-round)</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <TreePine className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4 Days Jungle Safari</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <span>Endangered Wildlife</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Safari
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
                        <span className="text-slate-500">Start Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Park Size</span>
                        <span className="font-medium text-[#0f2940]">952 sq km</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">UNESCO Status</span>
                        <span className="font-medium text-[#0f2940]">World Heritage Site</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Key Wildlife</span>
                        <span className="font-medium text-[#0f2940]">One-horned Rhino, Bengal Tiger, Leopard, Elephant, Crocodile, 500+ Bird Species</span>
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
                    The <strong>Chitwan National Park Jungle Safari</strong> is a 7-day wildlife adventure into Nepal's most famous protected area. Established in 1973 as Nepal's first national park and designated a UNESCO World Heritage Site in 1984, Chitwan covers 952 square kilometers of pristine subtropical lowland wilderness. This tour offers an unparalleled opportunity to experience the incredible biodiversity of the Terai region while immersing yourself in the unique culture of the indigenous Tharu people.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Chitwan is home to an astonishing array of wildlife, including over 50 species of mammals and 500 species of birds. The park's most famous resident is the endangered <strong>one-horned rhinoceros</strong>, with Chitwan harboring one of the largest populations in the world—sightings are almost guaranteed. Other charismatic species include the elusive <strong>Bengal tiger</strong>, leopards, sloth bears, Asian elephants, wild boar, several species of deer, and two species of crocodiles: the mugger crocodile and the critically endangered gharial.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Your safari experience includes a variety of activities designed to maximize wildlife viewing while providing different perspectives of the jungle. Explore the park's rivers by traditional dugout canoe, venture deep into the wilderness on thrilling jeep safaris, walk quietly through the forest with expert naturalist guides, and ride on the back of trained elephants for an elevated view of the grasslands.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Beyond wildlife, you'll also discover the rich cultural heritage of the Tharu people, who have lived in harmony with the jungle for centuries. Visit their traditional villages, learn about their unique customs, and enjoy their energetic stick dance performances. With comfortable jungle lodge accommodations, expert guides, and a thoughtfully designed itinerary, this safari delivers an unforgettable wildlife experience in one of Asia's premier national parks.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Safari Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Track endangered one-horned rhinoceros in their natural habitat",
                    "Search for the elusive Bengal tiger on thrilling jeep safaris",
                    "Canoe along the Rapti River past basking crocodiles",
                    "Explore the park on foot with expert naturalist guides",
                    "Visit the Elephant Breeding Center and see baby elephants",
                    "Ride on elephant-back through tall grasslands",
                    "Spot over 500 bird species including kingfishers, hornbills, and peacocks",
                    "Experience traditional Tharu village life and culture",
                    "Enjoy energetic Tharu stick dance performances",
                    "Photograph wildlife from open-top safari vehicles",
                    "Picnic breakfast in the heart of the jungle",
                    "Sunset views over the Rapti River",
                    "Learn about conservation efforts protecting endangered species",
                    "Relax in comfortable jungle resort accommodations",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <PawPrint className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time for Safari</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar-May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warm temperatures and good wildlife viewing. Animals gather near water sources as temperatures rise. Excellent bird watching with migratory species still present.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Good</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sun className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep-Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Pleasant temperatures, clear skies, and excellent wildlife viewing. Post-monsoon vegetation is lush but animals are active. Ideal time for safaris.
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
                        Cool, dry weather with excellent wildlife viewing. Animals are active throughout the day and visibility is clear. Best time for tiger tracking.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Summer/Monsoon (Jun-Aug) brings high temperatures and heavy rainfall. Safari activities are limited, and wildlife viewing is challenging. The park closes for some activities during this period.</p>
              </section>

              {/* Wildlife Facts */}
              <div className="bg-green-50 border border-green-200 rounded-lg md:rounded-2xl p-3 md:p-6 mb-6 md:mb-12">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2 text-xs md:text-base">
                  Chitwan's Amazing Wildlife
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mt-2 md:mt-3">
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-0.5 md:mb-1">
                      
                    </div>
                    <div className="font-bold text-[10px] md:text-sm text-green-800">645+</div>
                    <div className="text-[8px] md:text-xs text-green-600">One-horned Rhinos</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-0.5 md:mb-1">
                      <PawPrint className="w-4 h-4 md:w-6 md:h-6 text-green-700" />
                    </div>
                    <div className="font-bold text-[10px] md:text-sm text-green-800">120-150</div>
                    <div className="text-[8px] md:text-xs text-green-600">Bengal Tigers</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-0.5 md:mb-1">
                      <Bird className="w-4 h-4 md:w-6 md:h-6 text-green-700" />
                    </div>
                    <div className="font-bold text-[10px] md:text-sm text-green-800">500+</div>
                    <div className="text-[8px] md:text-xs text-green-600">Bird Species</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-0.5 md:mb-1">
                     
                    </div>
                    <div className="font-bold text-[10px] md:text-sm text-green-800">2 Species</div>
                    <div className="text-[8px] md:text-xs text-green-600">Crocodiles</div>
                  </div>
                </div>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Safari Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Wildlife Sightings:</strong> While Chitwan offers excellent wildlife viewing opportunities, animals are wild and sightings cannot be guaranteed. Our experienced naturalists maximize your chances, especially for one-horned rhinos (95%+ success rate). Tigers are elusive and require patience and luck.</li>
                    <li>• <strong>What to Pack:</strong> Neutral-colored clothing (khaki, green, brown), long sleeves and pants for protection, comfortable walking shoes, hat, sunscreen, insect repellent, binoculars, camera with zoom lens, and flashlight.</li>
                    <li>• <strong>Safari Etiquette:</strong> Follow your guide's instructions at all times. Remain quiet during safaris to avoid disturbing wildlife. Never attempt to approach or feed animals.</li>
                    <li>• <strong>Physical Requirements:</strong> Most activities are easy and suitable for all fitness levels. Nature walks involve walking on uneven terrain for 1-2 hours. Inform us of any mobility concerns when booking.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - ensure your policy covers medical emergencies and evacuation.</li>
                    <li>• <strong>Visa:</strong> Nepal visa available on arrival at Tribhuvan International Airport. Bring two passport photos and cash for visa fees ($30 for 15 days, $50 for 30 days).</li>
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
                      q: "What are my chances of seeing a tiger?",
                      a: "Bengal tigers are elusive and sightings require patience and luck. Chitwan has an estimated 120-150 tigers, but they are shy and well-camouflaged. Your chances increase with longer safaris and experienced guides. Even without tiger sightings, you're almost guaranteed to see rhinos, deer, monkeys, and numerous bird species.",
                    },
                    {
                      q: "Will I definitely see a one-horned rhinoceros?",
                      a: "Yes, with over 95% success rate! Chitwan has one of the largest populations of one-horned rhinos in the world (645+ individuals). Our experienced guides know the best areas for rhino sightings, and they are often seen during jeep safaris, elephant safaris, and even from the river during canoe rides.",
                    },
                    {
                      q: "Is the safari safe?",
                      a: "Absolutely. All safari activities are conducted with experienced, licensed naturalist guides who have extensive knowledge of the park and its wildlife. You'll receive safety briefings before each activity. Vehicles are designed for safari use, and guides carry communication devices. Follow your guide's instructions at all times for a safe and enjoyable experience.",
                    },
                    {
                      q: "What kind of accommodation can I expect?",
                      a: "You'll stay at a comfortable jungle resort in Sauraha, just outside the park boundary. Accommodations range from standard rooms to deluxe options, all with attached bathrooms, hot showers, and reliable electricity. Resorts offer restaurants, gardens, and often swimming pools. The atmosphere is relaxed and immersed in nature.",
                    },
                    {
                      q: "Is this tour suitable for children?",
                      a: "Yes, Chitwan safaris are excellent for families. Children love the wildlife, elephant experiences, and canoe rides. Age-appropriate activities can be arranged. Most safari vehicles accommodate families comfortably. Please inform us of children's ages when booking so we can make appropriate arrangements.",
                    },
                    {
                      q: "What is the best time of year for bird watching?",
                      a: "Winter (December-February) is excellent for bird watching as many migratory species arrive from Siberia and Tibet. Spring (March-April) offers good resident bird viewing. Chitwan is home to over 500 bird species year-round, so bird enthusiasts will be delighted in any season.",
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