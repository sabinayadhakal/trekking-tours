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
  TreePine,
  Landmark,
  Droplets,
  Flower,
  Compass,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Thamel. After check-in, attend a comprehensive trek briefing where we'll discuss the route, check your gear, and handle permit arrangements. Bring two passport-sized photographs for your trekking permits. Evening free to explore the vibrant streets of Thamel or rest after your journey. Welcome dinner with traditional Nepali cuisine where you'll meet your trek guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Trek briefing", "Gear check", "Permit arrangements", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Drive to Syabrubesi",
    altitude: "1,350m → 1,550m",
    distance: "122km / 7-8 hrs drive",
    description: "Early morning departure from Kathmandu for the scenic drive to Syabrubesi. The journey follows the Trishuli River valley through beautiful rural landscapes, terraced farmlands, and traditional villages. We pass through Dhunche, the district headquarters, where your Langtang National Park permit will be checked. The road winds through hillside forests with occasional views of Ganesh Himal. Arrive in Syabrubesi, a charming village that serves as the gateway to both the Tamang Heritage Trail and Langtang Valley. Check into your teahouse and prepare for the trek ahead.",
    overnight: "Teahouse in Syabrubesi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic Trishuli River drive", "Ganesh Himal views", "Dhunche permit check", "Gateway to Langtang"],
  },
  {
    day: 3,
    title: "Trek to Gatlang",
    altitude: "1,550m → 2,238m",
    distance: "12km / 5-6 hrs",
    description: "Our trek begins! We cross the Bhote Koshi River and start a steady ascent through pine forests and terraced fields. The trail passes through Goljung village, offering our first taste of Tamang culture with its traditional stone houses and colorful prayer flags. A viewpoint along the way provides spectacular panoramic views of Ganesh Himal and the Langtang range. Gatlang is a beautiful Tamang village perched on a hillside, known for its traditional architecture, Parvatikunda Lake, and warm hospitality. Experience a traditional Tamang welcome and enjoy cultural interactions with locals.",
    overnight: "Teahouse/Homestay in Gatlang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First Tamang village experience", "Goljung village", "Ganesh Himal views", "Parvatikunda Lake"],
  },
  {
    day: 4,
    title: "Trek to Tatopani",
    altitude: "2,238m → 2,607m",
    distance: "12km / 6-7 hrs",
    description: "Today's trail descends to the Thangbuche River, crossing a suspension bridge, then climbs steadily through terraced fields and rhododendron forests. The effort is rewarded with stunning views of Ganesh Himal and the Langtang range throughout the day. Tatopani, meaning 'hot water' in Nepali, is famous for its natural hot springs. Soak your tired muscles in the warm, mineral-rich waters (around 40°C/104°F) - a truly rejuvenating experience believed to have healing properties. Overnight in this peaceful village nestled in a beautiful valley.",
    overnight: "Teahouse in Tatopani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Suspension bridge crossing", "Rhododendron forests", "Natural hot springs soak", "Therapeutic mineral waters"],
  },
  {
    day: 5,
    title: "Trek to Thuman via Nagthali",
    altitude: "2,607m → 3,165m → 2,338m",
    distance: "12km / 6-7 hrs",
    description: "A challenging but rewarding day as we climb to Nagthali (3,165m), the highest point of the Tamang Heritage Trail. Nagthali was once a meditation retreat for Tibetan Buddhist monks and still maintains a peaceful, spiritual atmosphere. The viewpoint offers breathtaking 360-degree panoramas of the Langtang range, Ganesh Himal, and even glimpses of the Tibetan plateau on clear days. After soaking in the views, we descend through rhododendron and pine forests to Thuman, a large traditional Tamang village with intricately carved wooden houses, ancient monasteries, and spectacular mountain views.",
    overnight: "Teahouse in Thuman",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nagthali viewpoint (3,165m)", "360-degree Himalayan panorama", "Meditation retreat site", "Traditional Thuman village"],
  },
  {
    day: 6,
    title: "Trek to Briddim",
    altitude: "2,338m → 2,345m",
    distance: "12km / 5-6 hrs",
    description: "Today's trail takes us through beautiful rhododendron and oak forests, with occasional openings revealing stunning mountain views. We pass through the village of Timure, near the Tibetan border, where we can visit the historic Rasuwagadi Fort - a reminder of ancient Nepal-Tibet trade relations. Briddim is a charming Tamang village nestled at the foot of Langtang Himal, with distinctive stone houses with wooden shingle roofs. Experience authentic homestay hospitality, learn about traditional weaving, and enjoy cultural performances arranged by the local community.",
    overnight: "Teahouse/Homestay in Briddim",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rhododendron forests", "Rasuwagadi Fort", "Tibetan border proximity", "Traditional weaving demonstrations"],
  },
  {
    day: 7,
    title: "Trek to Lama Hotel",
    altitude: "2,345m → 2,380m",
    distance: "14km / 6-7 hrs",
    description: "We leave the Tamang Heritage Trail and join the classic Langtang Valley route. The trail descends through dense forests of oak, rhododendron, and bamboo, following the Langtang Khola river. This section is rich in wildlife - keep an eye out for langur monkeys, and if you're extremely lucky, red pandas in the dense bamboo thickets. Lama Hotel is a cluster of teahouses nestled in the forest beside the roaring river, marking our entry into the main Langtang Valley.",
    overnight: "Teahouse in Lama Hotel",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Join Langtang Valley trail", "Wildlife spotting (langur monkeys)", "Dense bamboo forests", "Langtang Khola river"],
  },
  {
    day: 8,
    title: "Trek to Langtang Village",
    altitude: "2,380m → 3,430m",
    distance: "14km / 6-7 hrs",
    description: "Today the valley opens up dramatically as we gain altitude, offering first breathtaking views of Langtang Lirung (7,227m). The trail passes through Ghoda Tabela ('horse stable') - a clearing with teahouses and yak pastures. Above the tree line, we enter alpine terrain with mani walls, prayer flags, and traditional stone houses. Langtang Village was devastated by the 2015 earthquake but has been beautifully rebuilt, showcasing the incredible resilience of the local community. The village offers stunning mountain views and a chance to interact with friendly Tamang locals and hear their stories of rebuilding.",
    overnight: "Teahouse in Langtang Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Langtang Lirung", "Ghoda Tabela yak pastures", "Rebuilt Langtang Village", "Community resilience"],
  },
  {
    day: 9,
    title: "Trek to Kyanjin Gompa",
    altitude: "3,430m → 3,870m",
    distance: "10km / 4-5 hrs",
    description: "A relatively short day allowing for gradual acclimatization. The trail follows a broad, open valley with stunning mountain scenery on all sides - Langtang Lirung dominates the skyline, while peaks like Gangchempo and Dorje Lakpa surround us. We pass through Mundu village with its ancient chortens and continue past yak pastures with grazing animals. Kyanjin Gompa is the last settlement in the valley, a beautiful village dominated by its ancient Buddhist monastery and surrounded by towering peaks. Visit the famous Kyanjin Cheese Factory, established by Swiss experts in the 1950s, to sample delicious yak cheese and curd.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Broad valley panorama", "Mundu village chortens", "Kyanjin Gompa monastery", "Yak cheese factory visit"],
  },
  {
    day: 10,
    title: "Exploration Day - Kyanjin Ri or Tserko Ri",
    altitude: "3,870m → 4,773m / 4,985m → 3,870m",
    distance: "8-12km / 5-8 hrs",
    description: "The highlight of the trek! Choose your adventure based on fitness and weather. Kyanjin Ri (4,773m) offers a challenging 2-3 hour climb to a spectacular ridge with 360-degree views of the entire Langtang range including Langtang Lirung, Langtang II, Dorje Lakpa, and Yala Peak. For experienced trekkers seeking an extra challenge, Tserko Ri (4,985m) is a longer, steeper climb with even more dramatic panoramas stretching to the Tibetan plateau. As the sun rises, the peaks glow golden - an unforgettable experience. After descending, explore the ancient monastery, walk to the glacial moraine, or simply relax and soak in the mountain atmosphere.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Kyanjin Ri sunrise (4,773m)", "Tserko Ri option (4,985m)", "360-degree Himalayan panorama", "Glacier moraine exploration"],
  },
  {
    day: 11,
    title: "Trek to Lama Hotel",
    altitude: "3,870m → 2,380m",
    distance: "18km / 6-7 hrs",
    description: "We retrace our steps down the valley, descending through Langtang Village and Ghoda Tabela back into the forest. The descent offers completely different perspectives of the mountains and valley. The forest feels magical in the afternoon light as we return to Lama Hotel for the night. This long descent day allows time to reflect on the incredible experiences of the past days.",
    overnight: "Teahouse in Lama Hotel",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Descending through Langtang Valley", "New mountain perspectives", "Forest return", "Reflection time"],
  },
  {
    day: 12,
    title: "Trek to Syabrubesi",
    altitude: "2,380m → 1,550m",
    distance: "15km / 5-6 hrs",
    description: "Final day of trekking as we continue descending through Bamboo and Domen to Syabrubesi. The trail follows the river through lush forest with many suspension bridge crossings. Arrive in Syabrubesi by early afternoon with time to celebrate your incredible journey through both Tamang Heritage and Langtang Valley! Enjoy a hot shower, cold drinks, and a well-deserved celebration dinner with your guide and porters. Share stories of your adventure and exchange contact information with new friends.",
    overnight: "Teahouse in Syabrubesi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Suspension bridge crossings", "Celebration in Syabrubesi", "Farewell to trekking team"],
  },
  {
    day: 13,
    title: "Drive to Kathmandu",
    altitude: "1,550m → 1,350m",
    distance: "122km / 7-8 hrs drive",
    description: "Scenic drive back to Kathmandu along the Trishuli River, retracing our journey from nearly two weeks ago. Stop for lunch along the way and enjoy final views of the Nepali countryside. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy free time for souvenir shopping in Thamel or simply relax after your adventure. Evening farewell dinner celebrating your Tamang Heritage and Langtang Valley achievement.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive through countryside", "Trishuli River views", "Thamel exploration", "Farewell celebration dinner"],
  },
  {
    day: 14,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of soaking in natural hot springs, experiencing authentic Tamang culture, and standing atop Kyanjin Ri surrounded by the majestic Langtang Himalaya.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/homestay accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Langtang National Park Entry Permit",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Syabrubesi-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Langtang and Tamang Heritage region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Kyanjin Ri/Tserko Ri exploration day",
  "Yak cheese tasting at Kyanjin Gompa",
  "Cultural program in Tamang villages (where available)",
  "Two passport-sized photographs for permits (if needed)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,000m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-4 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Kyanjin Gompa",
    caption: "Kyanjin Gompa with Langtang Lirung",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Tatopani Hot Springs",
    caption: "Natural Hot Springs at Tatopani",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Tamang Village",
    caption: "Traditional Tamang Village - Thuman",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Nagthali Viewpoint",
    caption: "Nagthali Viewpoint (3,165m)",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Langtang Village",
    caption: "Rebuilt Langtang Village",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Kyanjin Ri",
    caption: "Sunrise from Kyanjin Ri (4,773m)",
  },
];

export default function TamangHeritageLangtangTrekPage() {
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
    const title = encodeURIComponent("Tamang Heritage & Langtang Valley Trek - Himkala Adventure");
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

      {/* Hero Section - Simplified & Larger Heading */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Tamang Heritage and Langtang Valley Trek"
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
                <MapPin className="w-4 h-4 mr-1" /> Langtang Region
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-4 py-2 text-sm">
                Moderate
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-4 py-2 text-sm">
                <Landmark className="w-4 h-4 mr-1" /> Tamang Heritage
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              TAMANG HERITAGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & LANGTANG VALLEY TREK
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              A perfect blend of cultural immersion and Himalayan scenery - trek through traditional Tamang villages, 
              soak in natural hot springs, and explore the majestic Langtang Valley.
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
                    <div className="text-xs text-slate-400 line-through">$1,450</div>
                    <div className="text-xl font-bold text-[#0f2940]">$1,295</div>
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
                      <span className="text-white/50 text-sm line-through">$1,450</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,295</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $155</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>14 Days / 13 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Mar-May, Sep-Nov</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Teahouse & Homestay</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>All Meals Included</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Trek
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
                        <span className="text-slate-500">Start Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek Start/End</span>
                        <span className="font-medium text-[#0f2940]">Syabrubesi</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Tserko Ri (4,985m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Nagthali Viewpoint</span>
                        <span className="font-medium text-[#0f2940]">3,165m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Trekking Days</span>
                        <span className="font-medium text-[#0f2940]">10 Days</span>
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
                    The <strong>Tamang Heritage and Langtang Valley Trek</strong> is a unique combination of cultural immersion and spectacular Himalayan scenery, offering one of Nepal's most rewarding and accessible trekking experiences [citation:3][citation:5]. This 14-day journey takes you through the recently opened Tamang Heritage Trail, restricted until 2004, and into the majestic Langtang Valley, known as the "Valley of Glaciers" [citation:4].
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    The trek begins with cultural exploration in traditional Tamang villages like Gatlang, Tatopani, Thuman, and Briddim, where you'll experience authentic Tibetan-influenced Buddhist culture, ancient monasteries, and warm homestay hospitality [citation:5][citation:7]. A highlight is soaking in the natural hot springs at Tatopani, believed to have healing properties [citation:5][citation:8]. From Nagthali viewpoint (3,165m), you'll enjoy panoramic views of the Langtang and Ganesh Himal ranges [citation:6].
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    The second half of the trek follows the classic Langtang Valley route to <strong>Kyanjin Gompa (3,870m)</strong>, with optional hikes to Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for breathtaking 360-degree Himalayan panoramas [citation:3][citation:6]. This moderate trek is perfect for those seeking authentic cultural encounters, diverse wildlife including red pandas and Himalayan black bears, and stunning mountain scenery without the crowds of Everest or Annapurna [citation:5][citation:8].
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Authentic Tamang culture in traditional villages (Gatlang, Thuman, Briddim)",
                    "Natural hot springs at Tatopani - therapeutic soak with mountain views",
                    "Nagthali viewpoint (3,165m) with panoramic Langtang & Ganesh Himal views",
                    "Kyanjin Gompa (3,870m) and famous yak cheese factory",
                    "Summit Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for 360° Himalayan panorama",
                    "Langtang National Park - home to red pandas and Himalayan black bears",
                    "Traditional homestay experiences and cultural performances",
                    "Spectacular views of Langtang Lirung (7,227m) and surrounding peaks",
                    "Historic Rasuwagadi Fort near Tibetan border",
                    "Less crowded trails - perfect for authentic Himalayan experience",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Star className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Best Time to Trek</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Rhododendron forests burst into vibrant red, pink, and white blooms. Mild temperatures, clear skies, and excellent visibility. The most colorful time to trek [citation:5][citation:8].
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, stable weather, and perfect trekking conditions. Lush green trails after monsoon and spectacular mountain views. Festival atmosphere with local celebrations [citation:5][citation:6].
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is cold with possible snow but offers solitude. Monsoon (Jun-Aug) brings lush greenery but leeches and possible landslides [citation:3].</p>
              </section>

              {/* Detailed Itinerary */}
              <section className="mb-8 md:mb-12" id="itinerary">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-serif text-[#0f2940]">Day-by-Day Itinerary</h2>
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
                            <span className="text-[10px] font-bold text-[#0f2940] uppercase">Day</span>
                            <span className="text-lg md:text-xl font-bold text-[#0f2940] leading-none">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[#0f2940] text-sm md:text-base truncate">{day.title}</h4>
                            <div className="flex flex-wrap gap-2 md:gap-3 text-xs text-slate-500 mt-1">
                              <span className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> {day.altitude}
                              </span>
                              <span className="flex items-center gap-1">
                                <Backpack className="w-3 h-3" /> {day.distance}
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
                                <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
                                <span><strong>Overnight:</strong> {day.overnight}</span>
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
                  <h4 className="font-bold text-amber-800 mb-1.5 md:mb-2 text-sm md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-xs md:text-sm leading-relaxed space-y-1.5 md:space-y-2">
                    <li>• <strong>Guide Required:</strong> Since 2023, solo trekking without a guide is banned in Langtang National Park - you must trek with a licensed guide for safety [citation:1][citation:8].</li>
                    <li>• <strong>Permits:</strong> Langtang National Park Entry Permit (NPR 3,000) and TIMS card (NPR 2,000) are required - bring two passport photos [citation:1][citation:8].</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,000m and helicopter evacuation [citation:1][citation:8].</li>
                    <li>• <strong>Homestay Experience:</strong> In Tamang villages, accommodation may be basic homestays with shared facilities - embrace the authentic cultural experience [citation:5][citation:7].</li>
                    <li>• <strong>Physical Preparation:</strong> You'll trek 5-7 hours daily with some steep sections - good fitness and prior training recommended [citation:1].</li>
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
                      q: "How difficult is the Tamang Heritage and Langtang Valley Trek?",
                      a: "The trek is rated as moderate. You'll trek 5-7 hours daily on well-maintained trails with some steep sections, particularly to Nagthali and Kyanjin Ri. The highest point is 4,985m at Tserko Ri, so proper acclimatization is important. No technical experience is required, and it's suitable for beginners with good fitness [citation:3][citation:5][citation:6].",
                    },
                    {
                      q: "What is unique about the Tamang Heritage Trail?",
                      a: "The Tamang Heritage Trail was restricted until 2004 and offers authentic cultural immersion in traditional Tamang villages with Tibetan Buddhist heritage [citation:4]. You'll experience homestays, cultural performances, ancient monasteries, and the famous natural hot springs at Tatopani. The Tamang people are descendants of Tibetan horse traders who have preserved their unique language and customs [citation:8].",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Accommodation varies from basic homestays in Tamang villages to teahouses along the Langtang Valley. Rooms typically have twin beds with foam mattresses and shared bathrooms. Hot showers and charging are available for small fees. Homestays offer an authentic cultural experience with local families [citation:1][citation:5][citation:7].",
                    },
                    {
                      q: "What wildlife might I see?",
                      a: "Langtang National Park is home to red pandas, Himalayan black bears, musk deer, langur monkeys, and over 250 bird species. The forests between Lama Hotel and Ghoda Tabela are prime red panda habitat, though sightings require luck [citation:2][citation:8].",
                    },
                    {
                      q: "Do I need special permits for this trek?",
                      a: "You need a Langtang National Park Entry Permit and TIMS card. No special restricted area permits are required as the Tamang Heritage Trail is now open. Your trekking agency will arrange these permits for you [citation:1][citation:8].",
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
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}