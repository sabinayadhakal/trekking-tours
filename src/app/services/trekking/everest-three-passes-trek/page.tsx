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
  Flag,
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
    title: "Flight to Lukla & Trek to Phakding",
    altitude: "2,840m → 2,610m",
    distance: "35min flight / 3-4 hrs trek",
    description: "Early morning flight to Lukla (Tenzing-Hillary Airport), one of the most thrilling mountain flights in the world. After meeting our porters, we begin our trek descending to Phakding. The trail follows the Dudh Koshi River through pine forests, crossing suspension bridges and passing through small settlements. This short trek helps with acclimatization.",
    overnight: "Teahouse in Phakding",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic mountain flight to Lukla", "First views of Himalayan peaks", "Dudh Koshi River valley", "Suspension bridge crossings"],
  },
  {
    day: 3,
    title: "Trek to Namche Bazaar",
    altitude: "2,610m → 3,440m",
    distance: "10km / 5-6 hrs",
    description: "Today's trek takes us to the gateway of the Everest region. We follow the Dudh Koshi, crossing several suspension bridges including the famous Hillary Bridge. The trail steepens as we approach Namche, with the last section being a challenging uphill climb. The first views of Mount Everest appear as we near Namche Bazaar, the bustling Sherpa capital.",
    overnight: "Teahouse in Namche Bazaar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Mount Everest", "Hillary Suspension Bridge", "Namche Bazaar", "Sherpa culture"],
  },
  {
    day: 4,
    title: "Acclimatization Day in Namche Bazaar",
    altitude: "3,440m",
    distance: "Optional hikes",
    description: "A crucial rest day for acclimatization. Hike to the Everest View Hotel for panoramic views of Everest, Lhotse, and Ama Dablam. Alternatively, visit the Sherpa Museum, Khumjung village, or the Hillary School. Namche offers great shopping for trekking gear and souvenirs, plus authentic Sherpa culture and bakeries. This acclimatization is essential for the high passes ahead.",
    overnight: "Teahouse in Namche Bazaar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest View Hotel", "Panoramic mountain views", "Sherpa Museum", "Khumjung village visit"],
  },
  {
    day: 5,
    title: "Trek to Tengboche",
    altitude: "3,440m → 3,860m",
    distance: "10km / 5-6 hrs",
    description: "Leaving Namche, the trail contours along hillsides with stunning views of Everest, Nuptse, Lhotse, and Ama Dablam. We pass through rhododendron forests and traditional Sherpa villages. Tengboche Monastery, the largest in the Khumbu region, offers spectacular sunset views over the Himalayas. Evening prayer ceremony at the monastery is a magical experience.",
    overnight: "Teahouse in Tengboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Spectacular mountain views", "Tengboche Monastery", "Sunset over Himalayas", "Prayer ceremony"],
  },
  {
    day: 6,
    title: "Trek to Dingboche",
    altitude: "3,860m → 4,410m",
    distance: "11km / 5-6 hrs",
    description: "Descending through forests to Deboche, then crossing the Imja Khola. The trail climbs through rhododendron and juniper forests before opening into the alpine Imja Valley. Dingboche is a beautiful village surrounded by potato fields and dramatic mountain scenery including Ama Dablam and Lhotse.",
    overnight: "Teahouse in Dingboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Imja Valley views", "Ama Dablam panorama", "Alpine landscapes", "Sherpa farming community"],
  },
  {
    day: 7,
    title: "Acclimatization Day in Dingboche",
    altitude: "4,410m",
    distance: "Optional hikes",
    description: "Another important rest day to aid acclimatization before attempting the high passes. Hike to Nagarjun Hill (5,100m) for spectacular views of Makalu, Lhotse, and the surrounding peaks. The climb provides excellent panoramic views and helps prepare for higher altitudes. Alternatively, explore Dingboche's Buddhist monastery or simply rest.",
    overnight: "Teahouse in Dingboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nagarjun Hill hike", "Views of Mt. Makalu", "Acclimatization", "Preparation for passes"],
  },
  {
    day: 8,
    title: "Trek to Chhukhung",
    altitude: "4,410m → 4,730m",
    distance: "8km / 3-4 hrs",
    description: "A short trek to Chhukhung, a small settlement beneath the massive south face of Lhotse. The trail follows the Imja Khola valley with increasingly dramatic mountain scenery. Chhukhung offers stunning views of Island Peak, Ama Dablam, and the impressive Lhotse-Nuptse wall. This location serves as our base for the first pass crossing.",
    overnight: "Teahouse in Chhukhung",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Island Peak views", "Lhotse south face", "Chhukhung Valley", "Preparation for Kongma La"],
  },
  {
    day: 9,
    title: "Trek to Lobuche via Kongma La Pass",
    altitude: "4,730m → 5,535m → 4,940m",
    distance: "12km / 8-9 hrs",
    description: "The most challenging day of the trek crossing the highest pass - Kongma La (5,535m). We start early, ascending steeply through rocky terrain and past a frozen lake. The climb is demanding but rewards with spectacular views of Makalu, Lhotse, and Ama Dablam. The descent follows the Khumbu Glacier moraine to Lobuche, navigating through boulder fields and glacial terrain.",
    overnight: "Teahouse in Lobuche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kongma La Pass (5,535m) - highest pass", "Panoramic mountain views", "Khumbu Glacier moraine", "First pass crossing complete"],
  },
  {
    day: 10,
    title: "Trek to Gorakshep & Everest Base Camp",
    altitude: "4,940m → 5,364m → 5,164m",
    distance: "13km / 7-8 hrs",
    description: "We follow the Khumbu Glacier to Gorakshep, the last settlement before Base Camp. After lunch, we continue to Everest Base Camp (5,364m) following the glacier moraine. Standing at Base Camp surrounded by the Khumbu Icefall and towering peaks is an unforgettable moment. Return to Gorakshep for overnight stay.",
    overnight: "Teahouse in Gorakshep",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest Base Camp (5,364m)", "Khumbu Icefall views", "Glacier moraine trail", "Mount Everest close-up"],
  },
  {
    day: 11,
    title: "Kala Patthar Sunrise & Trek to Dzongla",
    altitude: "5,164m → 5,545m → 4,830m",
    distance: "15km / 8-9 hrs",
    description: "Pre-dawn hike to Kala Patthar (5,545m) for the most spectacular sunrise views of Mount Everest, Nuptse, Changtse, and the entire Khumbu range. After sunrise, return to Gorakshep for breakfast, then descend and traverse to Dzongla. The trail offers incredible views of Cholatse and Tawache peaks.",
    overnight: "Teahouse in Dzongla",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kala Patthar sunrise", "Best Everest views", "Panoramic mountain photography", "Views of Cholatse and Tawache"],
  },
  {
    day: 12,
    title: "Trek to Thagnak via Cho La Pass",
    altitude: "4,830m → 5,420m → 4,700m",
    distance: "10km / 7-8 hrs",
    description: "Today we cross the famous Cho La Pass (5,420m). The ascent is steep, leading to a glacier crossing that may require crampons depending on conditions. The pass offers stunning views of Cholatse and Ama Dablam. The descent is steep and rocky, leading to Thagnak beside the beautiful Cho La Lake.",
    overnight: "Teahouse in Thagnak",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Cho La Pass crossing (5,420m)", "Glacier traverse", "Views of Cholatse and Ama Dablam", "Cho La Lake"],
  },
  {
    day: 13,
    title: "Trek to Gokyo",
    altitude: "4,700m → 4,790m",
    distance: "6km / 3-4 hrs",
    description: "A shorter day following the Ngozumpa Glacier, Nepal's largest glacier. The trail offers incredible views of Cho Oyu (8,188m) and the turquoise Gokyo Lakes suddenly appear - a breathtaking sight. We pass the first and second lakes before reaching Gokyo village, nestled between the third lake and the glacier.",
    overnight: "Teahouse in Gokyo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First Gokyo Lake", "Turquoise glacial lakes", "Ngozumpa Glacier views", "Arrival in Gokyo valley"],
  },
  {
    day: 14,
    title: "Acclimatization Day - Gokyo Ri Hike",
    altitude: "4,790m → 5,357m → 4,790m",
    distance: "5km / 4-5 hrs",
    description: "Pre-dawn hike to Gokyo Ri (5,357m) for the most spectacular panoramic views of the entire Everest region. From the summit, witness Everest, Lhotse, Makalu, Cho Oyu, and the incredible Gokyo Lakes spread out below. After sunrise, return to Gokyo for breakfast. The afternoon is free to explore the fourth and fifth Gokyo Lakes.",
    overnight: "Teahouse in Gokyo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gokyo Ri sunrise (5,357m)", "360-degree Himalayan panorama", "Everest, Lhotse, Makalu, Cho Oyu views", "Fourth and fifth Gokyo Lakes"],
  },
  {
    day: 15,
    title: "Trek to Lungdhen via Renjo La Pass",
    altitude: "4,790m → 5,360m → 4,380m",
    description: "Today we cross the final pass - Renjo La (5,360m). The climb offers spectacular views back over the Gokyo Lakes. At the summit, prayer flags flutter in the wind with a breathtaking panorama of Everest, Lhotse, Makalu, and Cho Oyu. The descent leads into the remote Bhote Koshi Valley, a peaceful region with traditional Sherpa settlements.",
    overnight: "Teahouse in Lungdhen",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Renjo La Pass crossing (5,360m)", "Final pass completion", "Views back over Gokyo Lakes", "Remote Bhote Koshi Valley"],
  },
  {
    day: 16,
    title: "Trek to Thame",
    altitude: "4,380m → 3,800m",
    distance: "10km / 5-6 hrs",
    description: "Descending through the scenic Bhote Koshi Valley, we pass through traditional Sherpa villages with ancient monasteries. Thame is an important historical village, once a major trading post with Tibet. Visit the Thame Monastery and explore this charming settlement, birthplace of many famous Sherpa climbers.",
    overnight: "Teahouse in Thame",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Bhote Koshi Valley", "Traditional Sherpa villages", "Thame Monastery", "Historic trading post"],
  },
  {
    day: 17,
    title: "Trek to Namche Bazaar & Lukla",
    altitude: "3,800m → 3,440m → 2,840m",
    distance: "18km / 7-8 hrs",
    description: "Our final trekking day follows the trail back through Namche Bazaar and down to Lukla. We pass through familiar villages with new perspectives, celebrating our incredible journey crossing all three high passes. Arrive in Lukla by evening for a final celebration with your trekking team.",
    overnight: "Teahouse in Lukla",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Last day of trekking", "Passing through Namche", "Celebration with team", "Completion of Three Passes circuit"],
  },
  {
    day: 18,
    title: "Flight to Kathmandu & Departure",
    altitude: "2,840m → 1,400m",
    distance: "35min flight",
    description: "Early morning flight back to Kathmandu after crossing all three high passes of the Everest region. The short flight offers final aerial views of the Himalayas. Upon arrival, transfer to your hotel. Enjoy a well-deserved hot shower and free time for souvenir shopping in Thamel before your evening departure transfer to the airport.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Scenic mountain flight", "Final Himalayan views", "Three Passes achievement", "Farewell to Nepal"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more (essential for pass safety)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Round-trip flights Kathmandu - Lukla - Kathmandu",
  "Sagarmatha National Park Permit",
  "Khumbu Rural Municipality Permit (TIMS card)",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Everest Three Passes region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Crampons and microspikes for glacier crossings (as needed)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,600m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($3-6 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Kongma La Pass",
    caption: "Kongma La Pass (5,535m) - Highest Pass",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Cho La Pass Glacier",
    caption: "Cho La Pass Glacier Crossing",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Renjo La Pass View",
    caption: "Renjo La Pass with Gokyo Lakes",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Three Passes Trail",
    caption: "Trail to Kongma La",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Everest from Kala Patthar",
    caption: "Everest from Kala Patthar",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Gokyo Lakes",
    caption: "Gokyo Lakes from Renjo La",
  },
];

export default function EverestThreePassesTrekPage() {
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
    const title = encodeURIComponent("Everest Three Passes Trek - Himkala Adventure");
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
            alt="Everest Three Passes Trek"
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
                <MapPin className="w-4 h-4 mr-1" /> Everest Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-4 py-2 text-sm">
                <Flag className="w-4 h-4 mr-1" /> Very Strenuous
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-4 py-2 text-sm">
                <Mountain className="w-4 h-4 mr-1" /> Three Passes
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              EVEREST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                THREE PASSES TREK
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              The ultimate Everest challenge - cross Kongma La, Cho La, and Renjo La, 
              trek to Everest Base Camp, Gokyo Lakes, and Kala Patthar in one epic circuit.
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
                    <div className="text-xs text-slate-400 line-through">$2,150</div>
                    <div className="text-xl font-bold text-[#0f2940]">$1,850</div>
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
                      <span className="text-white/50 text-sm line-through">$2,150</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,850</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>18 Days / 17 Nights</span>
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
                        <span className="text-slate-500">Start/End</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek Start/End</span>
                        <span className="font-medium text-[#0f2940]">Lukla</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Pass</span>
                        <span className="font-medium text-[#0f2940]">Kongma La (5,535m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Cho La Pass</span>
                        <span className="font-medium text-[#0f2940]">5,420m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Renjo La Pass</span>
                        <span className="font-medium text-[#0f2940]">5,360m</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Trekking Days</span>
                        <span className="font-medium text-[#0f2940]">16 Days</span>
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
                    The <strong>Everest Three Passes Trek</strong> is the ultimate adventure in the Khumbu region, 
                    designed for experienced trekkers seeking the complete Everest experience. This challenging 
                    circuit crosses three high-altitude passes - <strong>Kongma La (5,535m), Cho La (5,420m), and 
                    Renjo La (5,360m)</strong> - while visiting Everest Base Camp, Kala Patthar, and the stunning 
                    Gokyo Lakes.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    Unlike the standard Everest Base Camp Trek which follows an "in-and-out" route, the Three Passes 
                    Trek creates a complete circuit through four major valleys: Imja Khola, Khumbu, Gokyo, and Bhote 
                    Koshi. This allows trekkers to experience the full geographical diversity of the 
                    Sagarmatha National Park, from lush rhododendron forests to barren glacial moraines and 
                    challenging glacier crossings.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Each pass offers unique perspectives: <strong>Kongma La</strong> provides views of Makalu and 
                    Lhotse, <strong>Cho La</strong> features a thrilling glacier traverse between Cholatse and 
                    Lobuche peaks, and <strong>Renjo La</strong> rewards with the most spectacular panorama of 
                    Everest reflected in the turquoise Gokyo Lakes. This trek is a true test of 
                    endurance and mental resilience, but the rewards are unmatched - a lifetime of memories 
                    standing atop the world's highest mountain passes.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Cross all three high passes: Kongma La (5,535m), Cho La (5,420m), Renjo La (5,360m)",
                    "Everest Base Camp (5,364m) and Kala Patthar sunrise (5,545m)",
                    "Turquoise Gokyo Lakes and Gokyo Ri panorama (5,357m)",
                    "Complete circuit through four major Khumbu valleys",
                    "Ngozumpa Glacier - Nepal's largest glacier",
                    "Thrilling glacier crossing on Cho La Pass",
                    "Remote Bhote Koshi Valley and Thame village",
                    "Views of four 8,000m peaks: Everest, Lhotse, Makalu, Cho Oyu",
                    "Tengboche Monastery and Sherpa culture",
                    "Less crowded than standard EBC route",
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
                        Warmer temperatures, blooming rhododendrons, and stable weather. Pass conditions are good 
                        but some snow may remain on Cho La glacier.
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
                        The most reliable season with crystal-clear skies, stable weather, and excellent pass 
                        conditions. Perfect for photography and the best mountain views.
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
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,600m including glacier crossings and helicopter evacuation.</li>
                    <li>• This is a <strong>very strenuous trek</strong> requiring excellent physical fitness and preferably previous high-altitude experience.</li>
                    <li>• Pass conditions vary by season - crampons/microspikes provided for glacier sections on Cho La.</li>
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
                      q: "How difficult is the Three Passes Trek compared to EBC?",
                      a: "The Three Passes Trek is significantly more difficult than the standard Everest Base Camp Trek. It requires crossing three passes above 5,300m, involves glacier traverses, and spends more days at extreme altitude. Good physical fitness, previous trekking experience, and proper acclimatization are essential.",
                    },
                    {
                      q: "Do I need technical climbing experience?",
                      a: "No technical climbing experience is required, but you should be comfortable walking on snow and ice. The Cho La Pass involves a glacier crossing where we provide crampons or microspikes as needed. Our experienced guides will assist and ensure safety throughout.",
                    },
                    {
                      q: "What is the success rate for completing all three passes?",
                      a: "With proper acclimatization and good weather, most well-prepared trekkers complete all three passes. The key is following the itinerary, listening to your guide, and not pushing too hard. Our acclimatization schedule (days at Namche, Dingboche, and Chhukhung) maximizes your chances of success.",
                    },
                    {
                      q: "Which pass is the most challenging?",
                      a: "Kongma La (5,535m) is generally considered the most challenging due to its altitude and rocky terrain. Cho La is technically demanding due to the glacier crossing. Renjo La is often described as the most scenic but less technically difficult. Each presents unique challenges.",
                    },
                    {
                      q: "Can we see Everest from all three passes?",
                      a: "Yes! Each pass offers unique perspectives of Everest and the surrounding peaks. Renjo La provides the classic view of Everest reflected in Gokyo Lakes. Kongma La offers views of Makalu and Lhotse. Cho La has stunning views of Cholatse and Ama Dablam.",
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