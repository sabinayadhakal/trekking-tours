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
  IceCream,
  Flame,
  Award,
  MountainSnow,
  CloudSnow,
  Wind,
  Eye,
  Sunset,
  MountainIcon,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive climbing briefing where we'll discuss the route, check your technical gear, and handle permit arrangements. Bring two passport-sized photographs for your climbing permits. Evening free to explore the vibrant streets of Thamel or rest after your journey. Welcome dinner with traditional Nepali cuisine where you'll meet your climbing guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Climbing briefing", "Gear check", "Permit arrangements", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Drive to Besisahar - Trek to Ngadi",
    altitude: "1,400m → 820m → 930m",
    distance: "6-7 hrs drive / 3-4 hrs trek",
    description: "Early morning departure from Kathmandu for the scenic drive to Besisahar, the gateway to the Annapurna region. The journey follows the Trishuli and Marshyangdi Rivers through beautiful rural landscapes, terraced farmlands, and traditional villages. From Besisahar, we begin our trek with a gentle walk to Ngadi, passing through subtropical forests and small settlements. This short first day allows us to ease into trekking mode.",
    overnight: "Teahouse in Ngadi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic river drive", "Marshyangdi River valley", "Subtropical forests", "Trek commencement"],
  },
  {
    day: 3,
    title: "Trek to Jagat",
    altitude: "930m → 1,300m",
    distance: "15km / 5-6 hrs",
    description: "Today's trek follows the Marshyangdi River upstream through lush forests and traditional villages. We cross several suspension bridges and pass through terraced farmlands. The trail offers beautiful views of the surrounding hills and occasional glimpses of the Annapurna range. Jagat is a charming village with stone-paved streets and traditional architecture, marking our entry deeper into the Manang district.",
    overnight: "Teahouse in Jagat",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Marshyangdi River views", "Suspension bridge crossings", "Traditional villages", "Annapurna glimpses"],
  },
  {
    day: 4,
    title: "Trek to Dharapani",
    altitude: "1,300m → 1,860m",
    distance: "14km / 5-6 hrs",
    description: "The trail continues following the river, gradually climbing through forests of oak and rhododendron. We pass through several villages including Chamje and Tal, where the valley narrows dramatically. The landscape becomes more alpine as we gain altitude. Dharapani is a large village where the Annapurna and Manaslu circuit trails meet, offering interesting cultural interactions with local Gurung and Manangi communities.",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Oak and rhododendron forests", "Narrowing valley", "Trail junction", "Gurung culture"],
  },
  {
    day: 5,
    title: "Trek to Chame",
    altitude: "1,860m → 2,670m",
    distance: "13km / 5-6 hrs",
    description: "We continue our ascent through the beautiful Marshyangdi Valley. The trail passes through forests, across streams, and through several villages including Danakyu and Timang. As we gain altitude, the views of the surrounding peaks become more dramatic. Chame is the district headquarters of Manang, with basic amenities, hot springs, and stunning views of Annapurna II. Enjoy a soak in the natural hot springs to soothe tired muscles.",
    overnight: "Teahouse in Chame",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Marshyangdi Valley views", "Annapurna II vistas", "Hot springs soak", "District headquarters"],
  },
  {
    day: 6,
    title: "Trek to Pisang",
    altitude: "2,670m → 3,300m",
    distance: "12km / 4-5 hrs",
    description: "A relatively short day allowing for gradual acclimatization. The trail offers spectacular views of Annapurna II, Lamjung Himal, and Pisang Peak itself. We pass through Bhratang village with its apple orchards before the valley opens up dramatically. Upper Pisang, with its Tibetan-style village and ancient monastery, offers breathtaking views of the peak we've come to climb. The sight of Pisang Peak towering above the village is truly inspiring.",
    overnight: "Teahouse in Pisang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Pisang Peak", "Annapurna II panorama", "Apple orchards", "Tibetan-style village"],
  },
  {
    day: 7,
    title: "Acclimatization Day - Pisang",
    altitude: "3,300m",
    distance: "Rest Day",
    description: "Essential rest day for acclimatization and preparation. We'll take a short hike to the monastery above Upper Pisang for spectacular views of the Annapurna range and Pisang Peak. Your climbing guide will conduct a thorough training session on using crampons, ice axes, rope techniques, and other technical gear needed for the climb. Practice essential mountaineering skills and review the climbing route. This day is crucial for proper acclimatization before climbing higher.",
    overnight: "Teahouse in Pisang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Monastery visit", "Peak panorama", "Technical climbing training", "Gear preparation"],
  },
  {
    day: 8,
    title: "Trek to Pisang Peak Base Camp",
    altitude: "3,300m → 4,380m",
    distance: "6km / 4-5 hrs",
    description: "We leave the main Annapurna Circuit trail and head towards Pisang Peak Base Camp. The trail climbs steadily through alpine meadows and rocky terrain, with the peak growing closer with every step. Spectacular views of Annapurna II, Annapurna IV, and Gangapurna accompany us. Upon reaching Base Camp at 4,380m, our climbing team will set up tents and establish camp. The afternoon is for rest and final gear preparation. Your guide will review the climbing route for tomorrow's move to High Camp.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pisang Peak Base Camp", "Annapurna panorama", "Alpine meadows", "Camp establishment"],
  },
  {
    day: 9,
    title: "Climb to High Camp",
    altitude: "4,380m → 5,200m",
    distance: "4km / 4-5 hrs",
    description: "Today we move to High Camp, climbing on rocky terrain and glacier. The route offers incredible views of the surrounding peaks and a closer look at the summit pyramid of Pisang Peak. The climbing becomes more technical as we approach High Camp at 5,200m. Set up camp on the mountain, secure tents, and melt snow for water. Rest early and try to sleep as much as possible. We'll start very early tomorrow morning for the summit push. Your guide will review the final climbing route and safety procedures.",
    overnight: "Tented Camp at High Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["High Camp at 5,200m", "Glacier approach", "Summit pyramid view", "Final preparations"],
  },
  {
    day: 10,
    title: "Summit Pisang Peak - Return to Base Camp",
    altitude: "5,200m → 6,091m → 4,380m",
    distance: "10km / 10-12 hrs",
    description: "The most challenging and rewarding day! Wake at 1:00 AM for tea and light breakfast. Start climbing by 2:00 AM with headlamps lighting the way. The route follows a glacier then climbs a steep headwall with fixed ropes. From the summit ridge, the final push leads to the top of Pisang Peak (6,091m). From the summit, enjoy breathtaking 360-degree views of the Annapurna range including Annapurna I (8,091m), Annapurna II (7,937m), Annapurna III (7,555m), Annapurna IV (7,525m), Gangapurna (7,455m), and Manaslu (8,163m) in the distance. The sunrise over the Himalayas is unforgettable. After celebrating your achievement, descend carefully to High Camp, pack up, and continue down to Base Camp for a well-deserved rest.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Pisang Peak Summit (6,091m)", "Sunrise over Annapurna range", "360-degree Himalayan panorama", "Technical climbing achievement"],
  },
  {
    day: 11,
    title: "Contingency Day",
    altitude: "4,380m",
    distance: "Reserve Day",
    description: "This day is kept as a buffer for weather delays, acclimatization needs, or any unforeseen circumstances. If not needed, it can be used for additional rest or exploration of the surrounding area. If weather prevented summit on day 10, this provides another opportunity for the climb. Your guide will assess conditions and plan accordingly. Having this flexibility significantly increases summit success rates.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Summit window buffer", "Weather flexibility", "Additional acclimatization", "Mountain photography"],
  },
  {
    day: 12,
    title: "Trek to Pisang Village",
    altitude: "4,380m → 3,300m",
    distance: "6km / 3-4 hrs",
    description: "Begin our descent, retracing our steps back to Pisang village. The downhill trek offers a different perspective of the mountains and valleys we climbed through. The oxygen-rich lower altitude feels wonderful after days above 4,000m. Celebrate your successful summit with your climbing team at a comfortable teahouse in Pisang. Hot showers, warm meals, and the company of fellow trekkers await.",
    overnight: "Teahouse in Pisang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Descent to Pisang", "Return to lower altitude", "Summit celebration", "Hot shower treat"],
  },
  {
    day: 13,
    title: "Trek to Chame",
    altitude: "3,300m → 2,670m",
    distance: "12km / 4-5 hrs",
    description: "Continue descending along the Marshyangdi Valley. The trail offers beautiful views of the Annapurna range from a different perspective. We pass through Bhratang with its apple orchards and several small villages. Chame offers another chance to enjoy the natural hot springs and celebrate your achievement with your team.",
    overnight: "Teahouse in Chame",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Marshyangdi Valley descent", "Apple orchards", "Mountain perspectives", "Hot springs relaxation"],
  },
  {
    day: 14,
    title: "Trek to Dharapani",
    altitude: "2,670m → 1,860m",
    distance: "13km / 5-6 hrs",
    description: "Continue our descent through forests and villages. The trail follows the river, gradually losing altitude with each step. The vegetation becomes thicker and more lush as we descend. Dharapani offers comfortable teahouses and a sense of civilization returning after our mountain adventure.",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest descent", "River valley views", "Village life", "Trek progression"],
  },
  {
    day: 15,
    title: "Trek to Jagat",
    altitude: "1,860m → 1,300m",
    distance: "14km / 5-6 hrs",
    description: "Continue descending through the beautiful Marshyangdi Valley. The trail passes through several villages with opportunities to interact with local communities. Jagat's stone-paved streets and traditional architecture offer a charming setting for our final night of trekking before reaching the road head.",
    overnight: "Teahouse in Jagat",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Marshyangdi Valley", "Traditional villages", "Cultural interactions", "Final trekking day"],
  },
  {
    day: 16,
    title: "Trek to Ngadi - Drive to Besisahar",
    altitude: "1,300m → 930m → 820m",
    distance: "3-4 hrs trek / 1 hr drive",
    description: "Short final trek to Ngadi through subtropical forests and terraced farmlands. From Ngadi, we drive to Besisahar, enjoying the scenic river valley one last time. At Besisahar, meet our private vehicle for the journey back to Kathmandu. The drive offers beautiful views of rural Nepal as we return to the capital.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking segment", "Scenic drive to Kathmandu", "Trek completion", "Mountain farewell"],
  },
  {
    day: 17,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing atop Pisang Peak (6,091m), gazing at the majestic Annapurna range, and experiencing the warm hospitality of the Nepali people. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during trek and climb (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek and tented camp during climb",
  "Experienced English-speaking climbing guide (government licensed, IFMGA trained)",
  "Assistant climbing guides for groups of 4 or more",
  "Sherpa support for summit push",
  "High-quality climbing tent (North Face or similar) at Base Camp and High Camp",
  "Group climbing gear (ropes, ice screws, snow bars, wands, etc.)",
  "Personal climbing gear: harness, crampons, ice axe, helmet, ascender, carabiners",
  "Satellite phone for emergency communication (pay per use)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "Pisang Peak climbing permit",
  "All ground transportation as per itinerary (Kathmandu-Besisahar-Kathmandu by private vehicle)",
  "First aid medical kit including pulse oximeter and Gamow bag",
  "High-altitude sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "Pisang Peak summit certificate",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for summit day",
  "Oxygen cylinder and mask for emergency use",
  "High-altitude food and supplies for camps",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude climbing up to 6,200m & helicopter evacuation)",
  "Personal climbing gear not mentioned (boots, gaiters, etc.)",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides, sherpas, and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
  "Summit bonus for climbing guide and sherpa (customary)",
  "Personal climbing insurance",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Pisang Peak Summit",
    caption: "Pisang Peak Summit (6,091m) with Annapurna range behind",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Pisang Peak Climb",
    caption: "Climbing the headwall on Pisang Peak",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Annapurna Range",
    caption: "Annapurna II from Pisang Peak approach",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Upper Pisang",
    caption: "Upper Pisang village with the peak behind",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "High Camp",
    caption: "Pisang Peak High Camp at 5,200m",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Sunrise Summit",
    caption: "Sunrise over the Annapurna range from Pisang Peak",
  },
];

export default function PisangPeakClimbingPage() {
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
    const title = encodeURIComponent("Pisang Peak Climbing - Himkala Adventure");
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
            alt="Pisang Peak Climbing"
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
                <MountainSnow className="w-3 h-3 mr-1" /> 6,091m Summit
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              PISANG PEAK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CLIMBING EXPEDITION
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Summit the majestic Pisang Peak (6,091m) in the heart of the Annapurna region—a perfect blend of 
              cultural trekking and technical climbing with spectacular views of the entire Annapurna range.
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
                    <div className="text-xs text-slate-400 line-through">$2,800</div>
                    <div className="text-lg font-bold text-[#0f2940]">$2,495</div>
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
                      <span className="text-white/50 text-sm line-through">$2,800</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,495</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $305</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>17 Days / 16 Nights</span>
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
                        <span>Teahouse + Tented Camp</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 6,091m</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Climb
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
                        <span className="text-slate-500">Trek Start</span>
                        <span className="font-medium text-[#0f2940]">Besisahar</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek End</span>
                        <span className="font-medium text-[#0f2940]">Besisahar</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Summit Altitude</span>
                        <span className="font-medium text-[#0f2940]">Pisang Peak (6,091m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Climbing Days</span>
                        <span className="font-medium text-[#0f2940]">14 Days trek + climb</span>
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
                    The <strong>Pisang Peak Climbing Expedition</strong> (6,091m) is one of the most popular and rewarding climbing peaks in the Annapurna region. Rising dramatically above the picturesque village of Pisang, this elegant pyramid-shaped peak offers climbers a perfect introduction to Himalayan mountaineering combined with the cultural richness of the Annapurna Circuit.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The expedition follows the classic Annapurna Circuit trail through diverse landscapes—from subtropical forests and terraced farmlands to alpine meadows and glacial moraines. After acclimatizing in the beautiful village of Pisang with its Tibetan-style architecture and ancient monastery, we establish Base Camp and High Camp before the summit push. The climb involves glacier travel and a steep headwall with fixed ropes, offering exciting technical climbing with spectacular rewards.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    From the summit, climbers are treated to one of the most breathtaking panoramas in the Himalayas—a 360-degree view encompassing the entire Annapurna range including Annapurna I (8,091m), Annapurna II (7,937m), Annapurna III (7,555m), Annapurna IV (7,525m), Gangapurna (7,455m), and in the distance, Manaslu (8,163m) and the Tibetan peaks. This expedition is ideal for experienced trekkers with good fitness who want to combine cultural exploration with technical climbing at moderate altitude.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Climbing Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit Pisang Peak (6,091m) with stunning views of the entire Annapurna range",
                    "Spectacular 360-degree panorama including Annapurna I, II, III, IV, Gangapurna, and Manaslu",
                    "Trek the iconic Annapurna Circuit through diverse landscapes and cultures",
                    "Experience Tibetan-influenced culture in the beautiful village of Upper Pisang",
                    "Visit ancient monasteries and interact with local Manangi communities",
                    "Technical climbing on glacier and steep headwall with fixed ropes",
                    "Perfect peak for climbers with some previous experience seeking a 6,000m summit",
                    "Hot springs relaxation in Chame after the climb",
                    "Excellent success rates with proper acclimatization and experienced guides",
                    "Combine cultural trekking with mountaineering in one comprehensive expedition",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Award className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Climb</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Stable weather, warming temperatures, and excellent climbing conditions. Rhododendrons bloom along the lower trails. Longer days and good summit windows. Ideal for photography.
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
                        Crystal-clear skies, stable weather, and perfect mountain views. Cooler temperatures but excellent climbing conditions. Peak season with the highest success rates and vibrant cultural festivals.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow and high avalanche risk. Monsoon (Jun-Aug) brings rain, clouds, and poor summit visibility - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> Pisang Peak climbing permit and Annapurna Conservation Area Permit (ACAP) are both included and arranged by us.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous climb requiring excellent fitness. You should be comfortable trekking 5-7 hours daily at altitude and have good cardiovascular endurance.</li>
                    <li>• <strong>Technical Experience:</strong> Previous mountaineering experience with crampons and ice axes is recommended. The climb involves a steep headwall with fixed ropes requiring good technique.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude climbing up to 6,200m and helicopter evacuation. This is non-negotiable for your safety.</li>
                    <li>• <strong>Road Conditions:</strong> The drive from Kathmandu to Besisahar can be bumpy and subject to delays. We use comfortable private vehicles and plan for the journey accordingly.</li>
                    <li>• <strong>Acclimatization:</strong> Proper acclimatization is crucial. Our itinerary includes a rest day at Pisang and a gradual ascent profile to ensure safety.</li>
                    <li>• <strong>Summit Bonus:</strong> It's customary to provide a summit bonus to your climbing guide and Sherpa upon successful summit (typically $150-250 total).</li>
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
                      q: "How difficult is Pisang Peak climbing?",
                      a: "Pisang Peak is considered a challenging trekking peak requiring technical climbing skills. The climb involves glacier travel and a steep headwall with fixed ropes (up to 50 degrees). Good physical fitness, previous high-altitude trekking experience, and some technical climbing experience are recommended for success.",
                    },
                    {
                      q: "Do I need previous climbing experience?",
                      a: "Previous mountaineering experience with crampons and ice axes is strongly recommended. The steep headwall on Pisang Peak requires good technique and comfort with exposed terrain. If you're new to climbing, consider a less technical peak like Mera Peak or Island Peak first.",
                    },
                    {
                      q: "What is the success rate on Pisang Peak?",
                      a: "Success rates on Pisang Peak vary by season and weather but typically range from 60-80% with proper preparation. Spring (March-May) and autumn (September-November) offer the best conditions. Our experienced guides, proper acclimatization, and contingency day maximize summit chances.",
                    },
                    {
                      q: "What views can I expect from the summit?",
                      a: "The summit offers one of the finest panoramas in the Annapurna region including Annapurna I (8,091m), Annapurna II (7,937m), Annapurna III (7,555m), Annapurna IV (7,525m), Gangapurna (7,455m), Lamjung Himal, Manaslu (8,163m) in the distance, and numerous Tibetan peaks. The sunrise view is absolutely spectacular.",
                    },
                    {
                      q: "How does Pisang Peak compare to Island Peak?",
                      a: "Pisang Peak (6,091m) is slightly lower than Island Peak (6,189m) but considered more technically challenging due to steeper sections. Both offer excellent climbing experiences, but Pisang Peak requires more previous experience. The approach via the Annapurna Circuit offers richer cultural experiences.",
                    },
                    {
                      q: "What is the accommodation like during the climb?",
                      a: "During trekking (first 7 days and last 6 days), you'll stay in comfortable teahouses with twin-sharing rooms and shared bathrooms. At Pisang Peak Base Camp and High Camp, we use high-quality mountain tents with sleeping mats. Teahouses in the Annapurna region are excellent with good food and facilities.",
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