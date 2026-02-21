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
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu",
    altitude: "1,400m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Thamel. After check-in, attend a comprehensive trek briefing where we'll discuss the route, check your gear, and handle permit arrangements. Evening free to explore the vibrant streets of Thamel or rest after your journey.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Trek briefing", "Gear check", "Permit arrangements"],
  },
  {
    day: 2,
    title: "Drive to Bhulbhule",
    altitude: "1,400m → 840m",
    distance: "170km / 7-8 hrs drive",
    description: "Early morning departure from Kathmandu. We drive through scenic mid-hills following the Trishuli and Marsyangdi Rivers. The journey offers glimpses of rural Nepali life, terraced farmlands, and distant mountain views. We pass through Besisahar, the district headquarters, before reaching Bhulbhule, our trek starting point on the banks of the Marsyangdi River.",
    overnight: "Teahouse in Bhulbhule",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive through mid-hills", "Trishuli and Marsyangdi Rivers", "Rural Nepali villages", "Trek commencement"],
  },
  {
    day: 3,
    title: "Trek to Jagat",
    altitude: "840m → 1,300m",
    distance: "15km / 6-7 hrs",
    description: "Our trek begins! The trail follows the Marsyangdi River through subtropical forests and terraced farmlands. We cross several suspension bridges and pass through traditional Gurung and Magar villages. The path offers views of waterfalls and the surrounding hills. Jagat is a charming village with stone-paved streets and traditional architecture.",
    overnight: "Teahouse in Jagat",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First day of trekking", "Suspension bridge crossings", "Gurung and Magar villages", "Subtropical landscapes"],
  },
  {
    day: 4,
    title: "Trek to Dharapani",
    altitude: "1,300m → 1,860m",
    distance: "16km / 6-7 hrs",
    description: "Today we enter the Manang District and the Annapurna Conservation Area. The trail continues along the Marsyangdi River through forests and villages. We pass through Chamje, Tal (the first village in Manang), and Karte. Notice the changing architecture and cultural influences as we enter the Tibetan Buddhist zone. Dharapani marks the junction with the Manaslu Circuit trail.",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Annapurna Conservation Area entry", "Tibetan Buddhist cultural zone", "Marsyangdi River valley", "Traditional villages"],
  },
  {
    day: 5,
    title: "Trek to Chame",
    altitude: "1,860m → 2,670m",
    distance: "14km / 5-6 hrs",
    description: "The trail climbs gradually through pine and rhododendron forests with increasing mountain views. We pass through Bagarchhap with its unique pagoda-style houses, Danakyu, and Timang. The valley narrows as we approach Chame, the district headquarters of Manang. Chame has hot springs, a small bazaar, and stunning views of Annapurna II and Lamjung Himal.",
    overnight: "Teahouse in Chame",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Annapurna II", "Hot springs at Chame", "Pine and rhododendron forests", "District headquarters"],
  },
  {
    day: 6,
    title: "Trek to Pisang",
    altitude: "2,670m → 3,200m",
    distance: "12km / 5-6 hrs",
    description: "The trail continues through forests with occasional views of Paungda Danda's impressive rock face. We pass through Bhratang before reaching the lower Pisang village. The landscape opens up revealing magnificent views of Annapurna II, Annapurna IV, and Pisang Peak. Upper Pisang, with its Gompa and traditional Tibetan architecture, is visible across the river.",
    overnight: "Teahouse in Pisang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Paungda Danda rock face", "Views of Annapurna II & IV", "Pisang Peak (6,091m)", "Traditional Tibetan architecture"],
  },
  {
    day: 7,
    title: "Trek to Manang",
    altitude: "3,200m → 3,540m",
    distance: "15km / 5-6 hrs",
    description: "Two route options: the upper trail via Ghyaru and Ngawal offers spectacular views but is more challenging; the lower trail follows the river. Both lead to Manang, the largest village in the valley. Manang is a fascinating town with monasteries, a medical clinic, bakeries, and excellent mountain views including Gangapurna and Annapurna III. Today we prepare for the Tilicho Lake side trip.",
    overnight: "Teahouse in Manang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Upper trail views (optional)", "Ghyaru and Ngawal villages", "Manang village", "Gangapurna and Annapurna III views"],
  },
  {
    day: 8,
    title: "Acclimatization Day in Manang",
    altitude: "3,540m",
    distance: "Optional hikes",
    description: "A crucial rest day for acclimatization before attempting the high altitude Tilicho Lake. Hike to Gangapurna Lake or the viewpoint above Manang for stunning mountain panoramas. Visit the Himalayan Rescue Association for an altitude awareness talk. Explore Manang's monasteries, the medical clinic, or simply rest and prepare for the challenging days ahead to Tilicho Lake.",
    overnight: "Teahouse in Manang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gangapurna Lake hike", "HRA altitude talk", "Monastery visits", "Preparation for Tilicho"],
  },
  {
    day: 9,
    title: "Trek to Khangsar & Tilicho Base Camp",
    altitude: "3,540m → 3,740m → 4,150m",
    distance: "12km / 6-7 hrs",
    description: "We leave the main circuit to venture toward Tilicho Lake. The trail climbs to Khangsar village with stunning views of Annapurna III and Gangapurna. After Khangsar, we traverse a dramatic hillside with potential avalanche paths (your guide will assess conditions). The landscape becomes increasingly barren and alpine as we approach Tilicho Base Camp, a small settlement nestled beneath towering peaks.",
    overnight: "Teahouse at Tilicho Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Khangsar village", "Views of Annapurna III", "Dramatic mountain traverse", "Arrival at Tilicho Base Camp"],
  },
  {
    day: 10,
    title: "Trek to Tilicho Lake & Return to Base Camp",
    altitude: "4,150m → 4,920m → 4,150m",
    distance: "12km / 7-8 hrs",
    description: "An early start for the challenging climb to Tilicho Lake (4,920m), the world's highest lake. The trail climbs steeply through barren, rocky terrain with increasingly dramatic mountain views. Suddenly, the brilliant turquoise waters of Tilicho Lake appear - a breathtaking sight surrounded by snow-capped peaks. Spend time at the sacred lake, taking photos and absorbing the incredible atmosphere. Return to Base Camp by late afternoon.",
    overnight: "Teahouse at Tilicho Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tilicho Lake (4,920m) - world's highest lake", "Turquoise glacial waters", "Sacred Hindu and Buddhist site", "Dramatic mountain reflections"],
  },
  {
    day: 11,
    title: "Trek to Yak Kharka via Mesokanto La Pass",
    altitude: "4,150m → 5,100m → 4,050m",
    distance: "10km / 6-7 hrs",
    description: "Today we cross the challenging Mesokanto La Pass (5,100m) to rejoin the main circuit. The climb is steep but rewards with spectacular views of the Annapurna range and Tilicho Peak. At the pass, prayer flags flutter in the wind. The descent leads to Yak Kharka, where we rejoin the classic Annapurna Circuit trail. This remote area offers yak pastures and stunning mountain scenery.",
    overnight: "Teahouse in Yak Kharka",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Mesokanto La Pass (5,100m)", "Panoramic mountain views", "Rejoining main circuit", "Yak pastures"],
  },
  {
    day: 12,
    title: "Trek to Thorong Phedi",
    altitude: "4,050m → 4,540m",
    distance: "8km / 4-5 hrs",
    description: "A shorter day as we climb to the base of Thorong La Pass. The trail passes through Letdar before reaching Thorong Phedi, nestled beneath the pass. The afternoon is free to rest, prepare gear, and hydrate for the early morning pass crossing. A short hike to High Camp (4,850m) can aid acclimatization for the big day ahead.",
    overnight: "Teahouse in Thorong Phedi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final approach to pass", "Thorong Phedi base camp", "Optional High Camp hike", "Pass preparation"],
  },
  {
    day: 13,
    title: "Cross Thorong La Pass to Muktinath",
    altitude: "4,540m → 5,416m → 3,800m",
    distance: "20km / 8-10 hrs",
    description: "The biggest day of the trek! Start at 3-4 AM for the challenging climb to Thorong La (5,416m), the world's highest pass. The trail is steep but well-defined, with prayer flags marking the summit. At the top, breathtaking 360-degree views of the Annapurna and Dhaulagiri ranges await. The long descent to Muktinath brings dramatic landscape changes - from barren mountains to the arid Mustang region. Visit the sacred Muktinath Temple, holy to both Hindus and Buddhists, to celebrate your incredible achievement of both Tilicho Lake and Thorong La.",
    overnight: "Teahouse in Muktinath",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Thorong La Pass (5,416m)", "360-degree Himalayan panorama", "Annapurna & Dhaulagiri views", "Muktinath Temple celebration"],
  },
  {
    day: 14,
    title: "Trek to Marpha & Drive to Tatopani",
    altitude: "3,800m → 2,670m → 1,190m",
    distance: "12km trek / 3-4 hrs drive",
    description: "Morning descent through Kagbeni, the gateway to Upper Mustang, with its ancient monasteries and Tibetan architecture. We trek to Marpha, famous for its apple orchards, apple brandy, and whitewashed streets. After lunch, a scenic jeep drive along the Kali Gandaki River - the world's deepest gorge - brings us to Tatopani (meaning 'hot water'), named for its natural hot springs. A well-deserved soak after crossing two high passes!",
    overnight: "Teahouse in Tatopani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kagbeni village", "Marpha apple orchards", "Kali Gandaki Gorge", "Natural hot springs"],
  },
  {
    day: 15,
    title: "Trek to Ghorepani",
    altitude: "1,190m → 2,860m",
    distance: "12km / 6-7 hrs",
    description: "Today we climb through lush forests with many stone steps - a challenging but rewarding day. The trail passes through Chitre and offers occasional mountain views. Ghorepani is a lively village at the crossroads of the Annapurna Circuit and Poon Hill trek. Enjoy the mountain atmosphere and prepare for tomorrow's sunrise.",
    overnight: "Teahouse in Ghorepani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest climb", "Traditional villages", "Mountain views", "Ghorepani village"],
  },
  {
    day: 16,
    title: "Poon Hill Sunrise & Trek to Ghandruk",
    altitude: "2,860m → 3,210m → 1,940m",
    distance: "15km / 7-8 hrs",
    description: "Pre-dawn hike to Poon Hill (3,210m) for the most spectacular sunrise over the Annapurna and Dhaulagiri ranges, including Machhapuchhre (Fishtail). After sunrise, return for breakfast, then descend through rhododendron forests to Tadapani. Continue through beautiful forests to Ghandruk, a large Gurung village with traditional stone houses and spectacular mountain views - the perfect finale to your epic journey.",
    overnight: "Teahouse in Ghandruk",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Poon Hill sunrise", "Annapurna & Dhaulagiri panorama", "Machhapuchhre views", "Ghandruk Gurung village"],
  },
  {
    day: 17,
    title: "Trek to Nayapul & Drive to Pokhara",
    altitude: "1,940m → 1,010m → 820m",
    distance: "12km trek / 1.5 hrs drive",
    description: "Final day of trekking descending through terraced farmlands and villages to Nayapul. The trail follows the Modi Khola River with beautiful valley views. At Nayapul, our private vehicle awaits for the short drive to Pokhara. Check into your lakeside hotel and celebrate completing the ultimate Annapurna experience - crossing Thorong La and visiting Tilicho Lake! Free evening to explore Lakeside's restaurants and bars.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Terraced farmlands", "Arrival in Pokhara", "Epic celebration dinner"],
  },
  {
    day: 18,
    title: "Drive to Kathmandu",
    altitude: "820m → 1,400m",
    distance: "200km / 7-8 hrs drive",
    description: "After breakfast, scenic drive back to Kathmandu through the Prithvi Highway, following the Trishuli River. The journey offers views of rural landscapes, river rafters, and distant hills. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy free time for souvenir shopping or final exploration of Thamel.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast",
    highlights: ["Scenic highway drive", "Trishuli River views", "Rural Nepal", "Thamel exploration"],
  },
  {
    day: 19,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing at the world's highest lake and crossing the legendary Thorong La Pass - the ultimate Annapurna achievement.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "1 night hotel accommodation in Pokhara (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more (essential for Tilicho side trip)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "Special permit for Tilicho Lake area (where required)",
  "All ground transportation as per itinerary (Kathmandu-Bhulbhule & Nayapul-Pokhara-Kathmandu)",
  "Jeep transfers for Tatopani to Ghorepani road section",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region including Tilicho",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Crampons/microspikes for Mesokanto La (if needed seasonally)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,500m, Tilicho Lake, and helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Tilicho Lake",
    caption: "Tilicho Lake (4,920m) - World's Highest Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Thorong La Pass",
    caption: "Thorong La Pass (5,416m)",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Mesokanto La Pass",
    caption: "Mesokanto La Pass (5,100m)",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Tilicho Base Camp",
    caption: "Trail to Tilicho Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Muktinath Temple",
    caption: "Sacred Muktinath Temple",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Poon Hill Sunrise",
    caption: "Poon Hill Sunrise Panorama",
  },
];

export default function AnnapurnaCircuitTilichoTrekPage() {
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
    const title = encodeURIComponent("Annapurna Circuit with Tilicho Lake Trek - Himkala Adventure");
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
            alt="Annapurna Circuit with Tilicho Lake Trek"
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
                <MapPin className="w-4 h-4 mr-1" /> Annapurna Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-4 py-2 text-sm">
                <Flame className="w-4 h-4 mr-1" /> Very Strenuous
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-4 py-2 text-sm">
                <Droplets className="w-4 h-4 mr-1" /> Tilicho Lake
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              ANNAPURNA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CIRCUIT WITH TILICHO LAKE
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              The ultimate Annapurna adventure - circumnavigate the massif, visit the world's highest lake, 
              cross two high passes, and stand atop Thorong La in one epic journey.
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
                    <div className="text-xs text-slate-400 line-through">$1,650</div>
                    <div className="text-xl font-bold text-[#0f2940]">$1,450</div>
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
                      <span className="text-white/50 text-sm line-through">$1,650</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,450</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $200</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>19 Days / 18 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Mar-May, Sep-Nov</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-8</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Teahouse Accommodation</span>
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
                        <span className="font-medium text-[#0f2940]">Bhulbhule</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End Point</span>
                        <span className="font-medium text-[#0f2940]">Nayapul → Pokhara</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Thorong La (5,416m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Tilicho Lake</span>
                        <span className="font-medium text-[#0f2940]">4,920m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Mesokanto La</span>
                        <span className="font-medium text-[#0f2940]">5,100m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Trekking Days</span>
                        <span className="font-medium text-[#0f2940]">17 Days</span>
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
                    The <strong>Annapurna Circuit with Tilicho Lake</strong> is the ultimate Himalayan 
                    adventure, combining the world's greatest trek with a visit to the world's highest lake. 
                    This epic journey circumnavigates the entire Annapurna massif while adding the challenging 
                    side trip to <strong>Tilicho Lake (4,920m)</strong>, sacred to both Hindus and Buddhists 
                    and one of the most spectacular alpine lakes on Earth.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    The route follows the classic Annapurna Circuit through 16 distinct climate zones, from 
                    subtropical forests to high-altitude desert. After acclimatizing in Manang, we venture off 
                    the main trail to Tilicho Base Camp, then ascend to the turquoise waters of Tilicho Lake 
                    surrounded by towering peaks. The adventure continues as we cross <strong>Mesokanto La 
                    Pass (5,100m)</strong> to rejoin the circuit, then tackle the legendary <strong>Thorong La 
                    Pass (5,416m)</strong> - the world's highest trekking pass.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    The journey concludes with the famous <strong>Poon Hill sunrise</strong> over the Annapurna 
                    and Dhaulagiri ranges, offering a spectacular finale to this comprehensive Himalayan 
                    experience. This trek is designed for experienced trekkers seeking the complete Annapurna 
                    experience, combining cultural immersion, challenging passes, and one of nature's most 
                    breathtaking alpine lakes.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Visit Tilicho Lake (4,920m) - world's highest lake",
                    "Cross Thorong La Pass (5,416m) - world's highest pass",
                    "Cross Mesokanto La Pass (5,100m)",
                    "Spectacular sunrise from Poon Hill (3,210m)",
                    "Two high passes and the world's highest lake in one trek",
                    "Sacred Muktinath Temple",
                    "Traditional Gurung, Magar, and Tibetan villages",
                    "Natural hot springs at Tatopani",
                    "Marpha's famous apple orchards and brandy",
                    "16 distinct climate zones from tropics to arctic",
                    "Kali Gandaki - world's deepest gorge",
                    "Annapurna and Dhaulagiri mountain panoramas",
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
                        Rhododendrons bloom, warmer temperatures, good visibility. Tilicho Lake may still be 
                        frozen but creates stunning ice formations. Pass conditions are generally good.
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
                        The most reliable season with crystal-clear skies, stable weather, and the best 
                        mountain views. Tilicho Lake is at its most beautiful turquoise color.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
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
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,500m, Tilicho Lake, and helicopter evacuation.</li>
                    <li>• This is a <strong>very strenuous trek</strong> requiring excellent physical fitness and preferably previous high-altitude experience.</li>
                    <li>• The Tilicho side trip adds 3-4 days and involves crossing Mesokanto La Pass (5,100m) - proper gear required.</li>
                    <li>• We recommend <strong>3-6 months of physical preparation</strong> including cardio, strength training, and practice hikes with a weighted pack.</li>
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
                      q: "How does the Tilicho Lake trek differ from the standard Annapurna Circuit?",
                      a: "The Tilicho extension adds 3-4 days to the classic circuit. You leave the main trail at Manang to visit Tilicho Lake (4,920m), the world's highest lake, then cross Mesokanto La Pass (5,100m) to rejoin the circuit at Yak Kharka before Thorong La. It's more challenging but rewards with one of the Himalayas' most spectacular lakes.",
                    },
                    {
                      q: "How difficult is the Tilicho Lake side trip?",
                      a: "The Tilicho section is very challenging. The trail to Base Camp involves a dramatic traverse with potential avalanche risk (your guide assesses conditions). The climb to the lake is steep at high altitude. Mesokanto La crossing requires good fitness and may need crampons seasonally. This section is for experienced trekkers only.",
                    },
                    {
                      q: "Is Tilicho Lake worth the extra effort?",
                      a: "Absolutely! Tilicho Lake is sacred to both Hindus and Buddhists, and its turquoise waters surrounded by snow-capped peaks create one of the most stunning scenes in the Himalayas. Many trekkers consider it the highlight of their entire Nepal experience.",
                    },
                    {
                      q: "What is the accommodation like at Tilicho Base Camp?",
                      a: "Tilicho Base Camp has basic teahouses with simple rooms and shared facilities. Due to its remote location, expect more basic amenities than on the main circuit. This adds to the adventure and sense of remoteness.",
                    },
                    {
                      q: "Can Tilicho Lake be visited in winter?",
                      a: "Winter (Dec-Feb) visits are possible but very challenging. The trail may be snow-covered and Mesokanto La can be closed. Spring (Mar-May) and autumn (Sep-Nov) are the best seasons when the lake is accessible and conditions are most favorable.",
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