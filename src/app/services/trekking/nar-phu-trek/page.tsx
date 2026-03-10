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
  Wind,
  Castle,
  Compass,
  MessageCircle,
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
    title: "Drive to Jagat",
    altitude: "1,400m → 1,300m",
    distance: "205km / 8-9 hrs drive",
    description: "Early morning departure from Kathmandu. We drive west through scenic mid-hills following the Trishuli and Marshyangdi Rivers. After reaching Besisahar, we switch to 4WD jeeps for the rough road ahead. The journey offers beautiful views of terraced farmlands, waterfalls, and rural villages. Arrive in Jagat, a traditional village with stone-paved streets, and prepare for the trek ahead.",
    overnight: "Teahouse in Jagat",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive through mid-hills", "Trishuli and Marshyangdi Rivers", "4WD jeep adventure", "Arrival at Jagat"],
  },
  {
    day: 3,
    title: "Trek to Dharapani",
    altitude: "1,300m → 1,860m",
    distance: "14km / 6-7 hrs",
    description: "Our trek begins! We follow the Marsyangdi River through lush forests and terraced farmlands. Cross a suspension bridge to Chamje, then ascend steeply into the Manang district. Tal village welcomes us with its stunning valley setting beside a calm river. Continue through rocky paths and pine forests to reach Dharapani, a large village at the junction with the Manaslu Circuit trail.",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First day of trekking", "Suspension bridge crossings", "Tal village valley", "Entry into Manang district"],
  },
  {
    day: 4,
    title: "Trek to Koto",
    altitude: "1,860m → 2,600m",
    distance: "14.6km / 6-7 hrs",
    description: "Today we trek through pine and fir forests with fresh mountain air and stunning views of Annapurna II and Lamjung Himal. Pass through Bagarchhap with its unique pagoda-style houses, then continue to Timang. The trail winds through rhododendron forests before reaching Koto, the last village before entering the restricted Nar Phu Valley. Here we complete our permit checks.",
    overnight: "Teahouse in Koto",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Views of Annapurna II", "Bagarchhap village", "Rhododendron forests", "Last checkpoint before restricted area"],
  },
  {
    day: 5,
    title: "Trek to Meta",
    altitude: "2,600m → 3,560m",
    distance: "15km / 7-8 hrs",
    description: "Today we enter the restricted Nar Phu Valley! The trail follows the Soti Khola through narrow canyons and dense pine forests. After passing Dharmasala, the landscape opens into alpine meadows with breathtaking views of Kang Guru and Pisang Peak. A steep climb brings us to Meta, a small settlement perched on a ridge with stunning valley views.",
    overnight: "Teahouse in Meta",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Enter Nar Phu restricted area", "Narrow canyon trails", "Alpine meadows", "Views of Kang Guru & Pisang Peak"],
  },
  {
    day: 6,
    title: "Trek to Phu Village",
    altitude: "3,560m → 4,080m",
    distance: "14km / 7-8 hrs",
    description: "The landscape becomes increasingly dramatic as we trek through high alpine terrain with yak pastures, sacred chortens, and mani walls. We pass through Kyang and Jhunam villages before reaching Phu, one of the most remote villages in Nepal. Phu is a stunning Tibetan-style settlement of stone houses clustered beneath towering cliffs, with the ancient Tashi Lakhang Monastery nearby.",
    overnight: "Teahouse in Phu Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yak pastures", "Sacred chortens and mani walls", "Phu village arrival", "Tibetan-style architecture"],
  },
  {
    day: 7,
    title: "Acclimatization & Exploration in Phu",
    altitude: "4,080m",
    distance: "Optional hikes",
    description: "A crucial rest day for acclimatization at high altitude. Visit the ancient Tashi Lakhang Gompa, built by Karma Sonam Rinpoche who came to Nepal with the Dalai Lama in 1959. For the adventurous, hike to Himlung Himal Base Camp (4,920m) through icy valleys where you may spot blue sheep. Interact with locals, learn about their Tibetan-influenced culture, and enjoy the raw beauty of this remote valley.",
    overnight: "Teahouse in Phu Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashi Lakhang Gompa", "Himlung Base Camp hike", "Blue sheep spotting", "Tibetan cultural immersion"],
  },
  {
    day: 8,
    title: "Trek to Nar Phedi",
    altitude: "4,080m → 3,490m",
    distance: "12km / 6-7 hrs",
    description: "We retrace our steps slightly, descending through alpine meadows to Nar Phedi, a small settlement at the confluence of trails. Nar Phedi Monastery offers a peaceful atmosphere where you can interact with resident monks and learn about their daily life. The rustic teahouses provide a quiet setting to rest before the final push to Nar Village.",
    overnight: "Teahouse in Nar Phedi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Alpine meadows", "Nar Phedi Monastery", "Monk interactions", "Peaceful atmosphere"],
  },
  {
    day: 9,
    title: "Trek to Nar Village",
    altitude: "3,490m → 4,110m",
    distance: "6km / 3-4 hrs",
    description: "A shorter day allowing for gradual acclimatization. We follow the river, then cross it to climb gently towards Nar Village. Colorful prayer flags and Buddhist chortens line the trail. Nar is the larger of the two valley villages, with tightly clustered stone houses, a vibrant local culture, and spectacular mountain views. Spend the afternoon exploring this fascinating settlement.",
    overnight: "Teahouse in Nar Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Prayer flags and chortens", "Nar village arrival", "Traditional Tibetan architecture", "Mountain panorama"],
  },
  {
    day: 10,
    title: "Trek to Ngawal via Kang La Pass",
    altitude: "4,110m → 5,306m → 3,660m",
    distance: "20km / 9-10 hrs",
    description: "The most challenging and rewarding day! Early start for the ascent to Kang La Pass (5,306m), the trek's highest point. The climb is steep and relentless, but the 360-degree panoramic views from the top are unforgettable - Annapurna II, Gangapurna, Tilicho Peak, and the entire Annapurna range. The long descent leads to Ngawal, a beautiful village where we rejoin the Annapurna Circuit route.",
    overnight: "Teahouse in Ngawal",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Kang La Pass (5,306m)", "360-degree Himalayan panorama", "Annapurna range views", "Rejoin Annapurna Circuit"],
  },
  {
    day: 11,
    title: "Trek to Manang",
    altitude: "3,660m → 3,540m",
    distance: "12km / 5-6 hrs",
    description: "A relatively easy day as we descend through the beautiful Pisang Valley. Pass through villages with traditional architecture and enjoy views of Pisang Peak. The trail offers new perspectives of the Annapurna range before reaching Manang, the largest village in the valley. Manang has excellent teahouses, bakeries, and a famous Himalayan Rescue Association clinic.",
    overnight: "Teahouse in Manang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pisang Valley", "Pisang Peak views", "Manang village", "Himalayan Rescue Association"],
  },
  {
    day: 12,
    title: "Drive to Jomsom via Thorong La",
    altitude: "3,540m → 5,416m → 2,720m",
    distance: "8-9 hrs drive",
    description: "Early morning jeep drive to cross the legendary Thorong La Pass (5,416m) - the world's highest pass. While not trekking, the drive offers spectacular mountain scenery. Descend to the sacred Muktinath Temple, holy to both Hindus and Buddhists, then continue to Jomsom, the main town of the Mustang region. Celebrate completing the Nar Phu adventure!",
    overnight: "Teahouse in Jomsom",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Thorong La Pass (5,416m)", "Muktinath Temple", "Kali Gandaki Valley", "Jomsom arrival"],
  },
  {
    day: 13,
    title: "Fly to Pokhara & Drive to Kathmandu",
    altitude: "2,720m → 820m → 1,400m",
    distance: "20 min flight / 6-7 hrs drive",
    description: "Early morning flight from Jomsom to Pokhara with spectacular aerial views of the Annapurna and Dhaulagiri ranges. Upon arrival, transfer to a tourist bus or private vehicle for the scenic drive back to Kathmandu. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy free time for souvenir shopping or final exploration of Thamel.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: ["Scenic mountain flight", "Pokhara lakeside views", "Thamel exploration", "Celebration dinner"],
  },
  {
    day: 14,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of walking through ancient Tibetan villages and crossing the remote Nar Phu Valley.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Nar Phu Restricted Area Permit (RAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Jagat & Jomsom-Pokhara-Kathmandu)",
  "4WD jeep transportation for rough road sections",
  "Round-trip flight Jomsom - Pokhara",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Nar Phu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Kang La Pass crossing day",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,400m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($3-6 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Extra day permit fees if trek exceeds 7 days in restricted area",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Phu Village",
    caption: "Phu Village - Remote Tibetan Settlement",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Nar Phu Valley",
    caption: "Dramatic Nar Phu Valley Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Kang La Pass",
    caption: "Kang La Pass (5,306m)",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Tashi Lakhang Gompa",
    caption: "Ancient Tashi Lakhang Monastery",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Nar Village",
    caption: "Nar Village with Mountain Views",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Annapurna Range",
    caption: "Annapurna Range from Kang La",
  },
];

export default function NarPhuTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Nar Phu Valley Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Nar Phu Valley Trek - Himkala Adventure");
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

      {/* Hero Section - Simplified & Larger Heading */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Nar Phu Valley Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Annapurna Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Challenging
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Restricted Area
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              NAR PHU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                VALLEY TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Discover one of Nepal's best-kept secrets - a remote Himalayan valley with ancient Tibetan villages, 
              dramatic canyons, and the legendary Kang La Pass.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$2,350</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,095</div>
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
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Price Card */}
                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                      <span className="text-white/50 text-sm line-through">$2,350</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,095</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>14 Days / 13 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Mar-May, Sep-Nov</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-8</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Teahouse Accommodation</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>All Meals Included</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Trek
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
                        <span className="text-slate-500">Start Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End Point</span>
                        <span className="font-medium text-[#0f2940]">Kathmandu</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek Start/End</span>
                        <span className="font-medium text-[#0f2940]">Jagat / Jomsom</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Kang La Pass (5,306m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Permit Cost</span>
                        <span className="font-medium text-[#0f2940]">$100 (peak) + ACAP</span>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Overview</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The <strong>Nar Phu Valley Trek</strong> is one of Nepal's best-kept secrets, a remote and restricted region 
                    that opened to trekkers only in 2003. Tucked away north of the Annapurna Circuit, this hidden valley offers 
                    an authentic adventure through dramatic landscapes, ancient Tibetan Buddhist villages, and pristine wilderness 
                    untouched by mass tourism.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The journey takes you through narrow canyons, alpine meadows, and yak pastures to the villages of 
                    <strong>Phu (4,080m)</strong> and <strong>Nar (4,110m)</strong>, where time seems to have stood still. Here you'll find 
                    centuries-old monasteries like Tashi Lakhang Gompa, traditional stone houses, and warm hospitality from locals who 
                    maintain their Tibetan-influenced culture.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The trek's climax is crossing the <strong>Kang La Pass (5,306m)</strong>, offering breathtaking 360-degree views of the 
                    Annapurna range including Annapurna II, Gangapurna, and Tilicho Peak. This challenging trek requires special permits 
                    and is ideal for experienced trekkers seeking solitude, cultural immersion, and raw Himalayan beauty away from crowded trails.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Remote Tibetan-influenced villages of Phu and Nar, frozen in time",
                    "Cross Kang La Pass (5,306m) with 360° Annapurna panorama",
                    "Ancient Tashi Lakhang Gompa with centuries-old Buddhist murals",
                    "Restricted area with few trekkers - true wilderness solitude",
                    "Dramatic landscapes: narrow canyons, alpine meadows, yak pastures",
                    "Himlung Himal Base Camp excursion (4,920m) with blue sheep sightings",
                    "Traditional stone houses, mani walls, and colorful prayer flags",
                    "Spectacular views of Annapurna II, Gangapurna, and Pisang Peak",
                    "Cultural immersion with Tibetan Buddhist communities",
                    "Off-the-beaten-path adventure - Nepal's best-kept secret",
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

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Trek</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmer temperatures, blooming wildflowers, and excellent visibility. Snow remains above 4,500m on Kang La Pass, adding to the scenic beauty.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Crystal-clear skies, stable weather, and perfect trekking conditions. The most reliable season for crossing Kang La Pass with spectacular mountain views.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with possible pass closures. Summer (Jun-Aug) brings monsoon rains on lower trails but the rain shadow keeps upper valleys drier.</p>
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Restricted Area Permits Required:</strong> Nar Phu requires a special permit costing $100 (Sept-Nov) or $75 (Dec-Aug) for 7 days, plus ACAP and TIMS.</li>
                    <li>• <strong>Guide is Mandatory:</strong> Independent trekking is not permitted in this restricted region - you must trek with a licensed guide.</li>
                    <li>• <strong>Challenging Trek:</strong> This is a strenuous trek with long days (8-9 hours), high altitude (5,306m), and remote terrain. Prior high-altitude experience recommended.</li>
                    <li>• <strong>Limited Facilities:</strong> Teahouses are basic with shared bathrooms, no heating, and limited menu options. Prepare for rustic conditions.</li>
                    <li>• <strong>No Connectivity:</strong> Most of the trek has no mobile network or WiFi - be prepared for digital detox.</li>
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
                      q: "How difficult is the Nar Phu Valley Trek?",
                      a: "The trek is rated as challenging. You'll trek 6-9 hours daily on rugged terrain with significant altitude gain. The Kang La Pass day is particularly demanding with 9-10 hours of trekking at over 5,000m. Prior high-altitude trekking experience and excellent fitness are essential.",
                    },
                    {
                      q: "Do I need special permits for Nar Phu?",
                      a: "Yes, Nar Phu is a restricted area requiring a special permit costing $100 per person (Sept-Nov) or $75 (Dec-Aug) for the first 7 days, plus $15 per extra day. You also need ACAP and TIMS cards. Permits must be arranged through a registered trekking agency.",
                    },
                    {
                      q: "Is a guide mandatory for this trek?",
                      a: "Yes, independent trekking is not permitted in the Nar Phu restricted area. You must trek with a licensed government guide. This is for your safety and to preserve the region's fragile culture and environment.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Teahouses in Nar Phu are basic compared to the Annapurna Circuit. Rooms are simple with twin beds and shared squat toilets. No heating, so a warm sleeping bag is essential. Hot showers (bucket type) are available at some lodges for an extra fee.",
                    },
                    {
                      q: "Can I see Annapurna from Kang La Pass?",
                      a: "Absolutely! Kang La Pass offers spectacular 360-degree views of the Annapurna range including Annapurna II (7,937m), Gangapurna (7,455m), Tilicho Peak (7,134m), and Pisang Peak, plus distant views of Manaslu and Dhaulagiri.",
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