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
    title: "Fly to Lukla - Trek to Phakding",
    altitude: "1,400m → 2,840m → 2,652m",
    distance: "35 min flight / 3-4 hrs trek",
    description: "Early morning flight to Lukla (2,840m), one of the world's most thrilling mountain airports. Enjoy spectacular views of Everest and other Himalayan peaks during the flight. After landing, meet your climbing crew and begin trekking to Phakding. The trail descends gently through pine forests, crossing suspension bridges over the Dudh Koshi River. Pass through several small villages and monasteries before reaching Phakding for overnight stay.",
    overnight: "Teahouse in Phakding",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic mountain flight to Lukla", "Everest views from air", "Dudh Koshi River valley", "First day in Everest region"],
  },
  {
    day: 3,
    title: "Trek to Namche Bazaar",
    altitude: "2,652m → 3,440m",
    distance: "10km / 5-6 hrs",
    description: "Today's trek follows the Dudh Koshi River with several suspension bridge crossings, including the famous Hillary Bridge. Enter Sagarmatha National Park at Monjo, where permits are checked. The trail climbs steadily through pine and rhododendron forests. On clear days, you'll catch your first glimpse of Everest from the hilltop above Namche. Arrive at Namche Bazaar, the bustling Sherpa capital with its colorful market, bakeries, and stunning mountain views.",
    overnight: "Teahouse in Namche Bazaar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hillary Bridge crossing", "Sagarmatha National Park entry", "First Everest view", "Sherpa culture at Namche Bazaar"],
  },
  {
    day: 4,
    title: "Acclimatization Day - Namche Bazaar",
    altitude: "3,440m",
    distance: "Rest Day",
    description: "Essential rest day for acclimatization. We'll take a short hike to the Everest View Hotel (3,880m) for spectacular panoramic views of Everest (8,848m), Lhotse (8,516m), Ama Dablam (6,812m), and Thamserku (6,623m). Visit the Sherpa Museum and learn about the culture and mountaineering history of the region. Explore the local markets, visit the monastery, and enjoy the vibrant atmosphere of Namche. This day is crucial for proper acclimatization before climbing higher.",
    overnight: "Teahouse in Namche Bazaar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest View Hotel hike", "Panoramic Himalayan views", "Sherpa Museum", "Acclimatization walk"],
  },
  {
    day: 5,
    title: "Trek to Tengboche",
    altitude: "3,440m → 3,860m",
    distance: "10km / 5-6 hrs",
    description: "The trail contours along the hillside with breathtaking views of Everest, Nuptse, Lhotse, and Ama Dablam. Descend to the Dudh Koshi River and cross a suspension bridge before the steep climb through rhododendron forests to Tengboche. Visit the famous Tengboche Monastery, the largest monastery in the Khumbu region, where you can observe Buddhist rituals and enjoy stunning sunset views over the Himalayas. The spiritual atmosphere here is unforgettable.",
    overnight: "Teahouse in Tengboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ama Dablam views", "Tengboche Monastery visit", "Sunset over Everest", "Buddhist ceremony observation"],
  },
  {
    day: 6,
    title: "Trek to Dingboche",
    altitude: "3,860m → 4,410m",
    distance: "11km / 5-6 hrs",
    description: "Descend through forests to Deboche, then cross the Imja Khola River. The trail continues through Pangboche village, home to the oldest monastery in the Khumbu. Above Pangboche, the landscape becomes more alpine with fewer trees. The valley opens up with spectacular views of Ama Dablam, Taboche, and Cholatse. Arrive in Dingboche, a beautiful village surrounded by potato fields and impressive mountain peaks.",
    overnight: "Teahouse in Dingboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Pangboche monastery", "Ama Dablam close-up", "Alpine landscape", "Imja Valley views"],
  },
  {
    day: 7,
    title: "Acclimatization Day - Dingboche",
    altitude: "4,410m",
    distance: "Rest Day",
    description: "Another important rest day for acclimatization. We'll hike to Nangkartshang Peak (5,100m) for incredible views of Makalu (8,485m), the world's fifth highest mountain, Lhotse, and the massive south face of Ama Dablam. This gradual ascent to higher altitude helps prepare your body for the climb ahead. Explore Dingboche's network of stone walls protecting barley and potato fields, and visit local tea houses to experience high-altitude Sherpa life.",
    overnight: "Teahouse in Dingboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nangkartshang Peak hike", "Makalu views", "Acclimatization walk", "Sherpa high-altitude farming"],
  },
  {
    day: 8,
    title: "Trek to Chhukung",
    altitude: "4,410m → 4,730m",
    distance: "5km / 2-3 hrs",
    description: "A short day allowing for gradual acclimatization. Follow the Imja Valley past Bibre and through alpine meadows with yak pastures. The trail offers spectacular views of Lhotse, Nuptse, Ama Dablam, and the massive south face of Lhotse. Chhukung is a small settlement in a dramatic glacial valley, serving as the last stop before Island Peak Base Camp. Rest and prepare for the climbing phase ahead.",
    overnight: "Teahouse in Chhukung",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Imja Valley views", "Lhotse south face", "Yak pastures", "Preparation for climbing"],
  },
  {
    day: 9,
    title: "Trek to Island Peak Base Camp",
    altitude: "4,730m → 5,087m",
    distance: "4km / 3-4 hrs",
    description: "We leave the main trail and head towards Island Peak Base Camp. The trail climbs gradually through rocky terrain and moraines with stunning views of Island Peak, Ama Dablam, and Lhotse. Upon reaching Base Camp, your climbing guide will conduct a thorough training session on using crampons, ice axes, rope techniques, and other technical gear. Practice walking on snow and ice, and learn essential mountaineering skills needed for the summit push. Prepare your gear for the early morning summit attempt.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Island Peak Base Camp", "Technical climbing training", "Gear preparation", "Crampon practice"],
  },
  {
    day: 10,
    title: "Climb to High Camp",
    altitude: "5,087m → 5,600m",
    distance: "3km / 3-4 hrs",
    description: "Today we move to High Camp, a short but steep climb on moraine and glacier. The route is rocky and requires careful navigation. High Camp offers spectacular views of the surrounding peaks and a closer look at the summit pyramid of Island Peak. Rest early, hydrate well, and prepare for the midnight summit push. Your guide will review the climbing route and safety procedures. Try to sleep as early as possible.",
    overnight: "Tented Camp at High Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["High Camp setup", "Summit pyramid view", "Glacier approach", "Final preparations"],
  },
  {
    day: 11,
    title: "Summit Island Peak - Return to Chhukung",
    altitude: "5,600m → 6,189m → 4,730m",
    distance: "12km / 10-12 hrs",
    description: "The most challenging and rewarding day! Wake at 1:00 AM for tea and light breakfast. Start climbing by 2:00 AM with headlamps lighting the way. Traverse the glacier, ascend the steep headwall using fixed ropes (45-50 degrees), and reach the summit ridge. From the summit (6,189m), enjoy breathtaking 360-degree views of Mount Everest, Lhotse, Makalu, Baruntse, Ama Dablam, and countless other peaks. The sunrise over the Himalayas is unforgettable. After celebrating your achievement, descend carefully to High Camp, pack up, and continue down to Base Camp and then to Chhukung for a well-deserved rest.",
    overnight: "Teahouse in Chhukung",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Island Peak Summit (6,189m)", "Sunrise over Everest", "360-degree Himalayan panorama", "Technical climbing achievement"],
  },
  {
    day: 12,
    title: "Contingency Day",
    altitude: "4,730m",
    distance: "Reserve Day",
    description: "This day is kept as a buffer for weather delays, acclimatization needs, or any unforeseen circumstances. If not needed, it can be used for additional rest or a short hike to explore the Chhukung Valley. If weather prevented summit on day 11, this provides another opportunity for the climb. Your guide will assess conditions and plan accordingly.",
    overnight: "Teahouse in Chhukung",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Flexibility for weather", "Summit window buffer", "Additional acclimatization", "Valley exploration"],
  },
  {
    day: 13,
    title: "Trek to Pangboche / Tengboche",
    altitude: "4,730m → 3,860m",
    distance: "12km / 5-6 hrs",
    description: "Begin our descent, retracing our steps through the beautiful Khumbu Valley. The downhill trek offers a different perspective of the mountains and villages. Stop at Pangboche to visit the ancient monastery or push on to Tengboche. Celebrate your successful summit with fellow trekkers and enjoy the familiar comforts of lower altitude.",
    overnight: "Teahouse in Pangboche/Tengboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Descent through Khumbu", "Mountain views from new angles", "Monastery visits", "Summit celebration"],
  },
  {
    day: 14,
    title: "Trek to Namche Bazaar",
    altitude: "3,860m → 3,440m",
    distance: "10km / 4-5 hrs",
    description: "Continue descending through rhododendron and pine forests. Cross the suspension bridge over the Dudh Koshi and climb slightly to Namche Bazaar. Enjoy the familiar comforts of Namche - visit a bakery for well-deserved treats, explore shops for souvenirs, and celebrate your achievement with your climbing team. Hot showers and comfortable lodges await.",
    overnight: "Teahouse in Namche Bazaar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest descent", "Namche Bazaar return", "Celebration with team", "Hot shower treat"],
  },
  {
    day: 15,
    title: "Trek to Lukla",
    altitude: "3,440m → 2,840m",
    distance: "18km / 6-7 hrs",
    description: "Our final day of trekking follows the Dudh Koshi River through forests and villages. The trail descends gradually, crossing several suspension bridges. Enjoy the last views of the Himalayan giants before reaching Lukla. Celebrate your successful Island Peak climb with your guides and porters at a farewell dinner. Exchange stories and prepare for tomorrow's flight.",
    overnight: "Teahouse in Lukla",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Last mountain views", "Farewell with crew", "Trek completion"],
  },
  {
    day: 16,
    title: "Fly to Kathmandu",
    altitude: "2,840m → 1,400m",
    distance: "35 min flight",
    description: "Early morning flight back to Kathmandu after an unforgettable climbing adventure. The short flight offers one last aerial view of the Himalayas. Upon arrival, transfer to your hotel. Enjoy a well-deserved hot shower and rest. Evening farewell dinner with your climbing guide, celebrating your summit of Island Peak (6,189m). Receive your summit certificate as a memento of your achievement.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: ["Scenic mountain flight", "Kathmandu return", "Summit certificate", "Farewell celebration"],
  },
  {
    day: 17,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing atop Island Peak (6,189m), gazing at Everest from your summit, and experiencing the warm hospitality of the Sherpa people. Namaste and until we meet again!",
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
  "Experienced English-speaking climbing guide (government licensed)",
  "Assistant climbing guides for groups of 4 or more",
  "Sherpa support for summit push",
  "High-quality climbing tent (North Face or similar) at Base Camp and High Camp",
  "Group climbing gear (ropes, ice screws, snow bars, etc.)",
  "Personal climbing gear: harness, crampons, ice axe, helmet, ascender, carabiners",
  "Satellite phone for emergency communication (pay per use)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Sagarmatha National Park entry permit",
  "Island Peak climbing permit",
  "TIMS (Trekkers' Information Management System) card",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter and Gamow bag",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Everest region",
  "Farewell dinner in Kathmandu",
  "Island Peak summit certificate",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for summit day",
  "Oxygen cylinder and mask for emergency use",
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
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Summit bonus for climbing guide and sherpa (customary)",
  "Personal climbing insurance",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1562832135-14a35d25edef?q=80&w=2045&auto=format&fit=crop",
    alt: "Island Peak Summit",
    caption: "Island Peak Summit (6,189m) with Everest behind",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Island Peak Climb",
    caption: "Climbing the headwall on Island Peak",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Base Camp",
    caption: "Island Peak Base Camp with training session",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Ama Dablam",
    caption: "Ama Dablam view from Tengboche",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Namche Bazaar",
    caption: "Namche Bazaar - Sherpa capital",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Everest Region",
    caption: "Tengboche Monastery with Everest",
  },
];

export default function IslandPeakClimbingPage() {
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
    const title = encodeURIComponent("Island Peak Climbing - Himkala Adventure");
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
            src="https://images.unsplash.com/photo-1562832135-14a35d25edef?q=80&w=2045&auto=format&fit=crop"
            alt="Island Peak Climbing"
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
                Very Strenuous
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-4 py-2 text-sm">
                <MountainSnow className="w-4 h-4 mr-1" /> 6,189m Summit
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              ISLAND PEAK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CLIMBING EXPEDITION
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Summit the iconic Island Peak (6,189m) in the Everest region—a perfect introduction to Himalayan 
              mountaineering with breathtaking views of Everest, Lhotse, and Ama Dablam.
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
                    <div className="text-xs text-slate-400 line-through">$3,200</div>
                    <div className="text-xl font-bold text-[#0f2940]">$2,895</div>
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
                      <span className="text-white/50 text-sm line-through">$3,200</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,895</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $305</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>17 Days / 16 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Mar-May, Sep-Nov</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-6</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Teahouse + Tented Camp</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 6,189m</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Climb
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
                        <span className="text-slate-500">Trek Start</span>
                        <span className="font-medium text-[#0f2940]">Lukla</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek End</span>
                        <span className="font-medium text-[#0f2940]">Lukla</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Summit Altitude</span>
                        <span className="font-medium text-[#0f2940]">Island Peak (6,189m)</span>
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
                    The <strong>Island Peak Climbing Expedition</strong> (Imja Tse, 6,189m) is one of Nepal's most popular and rewarding peak climbing adventures, offering a perfect introduction to Himalayan mountaineering. Situated in the heart of the Everest region, this stunning peak was named "Island Peak" by Eric Shipton's 1953 expedition because it resembles an island in a sea of ice when viewed from Dingboche.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    The climb combines trekking through the iconic Khumbu Valley with technical mountaineering on snow and ice. After acclimatizing at beautiful villages like Namche Bazaar, Tengboche, and Dingboche, you'll establish base camp and high camp before the summit push. The final ascent involves a steep headwall climb using fixed ropes (45-50 degrees) before reaching the spectacular summit ridge with its breathtaking <strong>360-degree panorama</strong> including Mount Everest (8,848m), Lhotse (8,516m), Makalu (8,485m), and the stunning Ama Dablam (6,812m).
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    This expedition is ideal for trekkers with some previous high-altitude experience who want to take their first steps into technical climbing. Prior experience with crampons and ice axes is helpful but not essential—your guide will provide comprehensive training at Base Camp. The climb requires excellent fitness, mental determination, and a spirit of adventure. Standing atop Island Peak at sunrise, watching the world's highest peaks light up in golden hues, is an experience you'll treasure forever.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Climbing Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit Island Peak (6,189m) - a classic Himalayan climbing peak ",
                    "Standing at the summit with breathtaking 360° views of Everest, Lhotse, Makalu, and Ama Dablam ",
                    "Experience technical mountaineering with fixed rope climbing on snow/ice (45-50°)",
                    "Trek through the iconic Everest region with its rich Sherpa culture ",
                    "Visit the famous Tengboche Monastery and observe Buddhist rituals",
                    "Acclimatize at Namche Bazaar, the bustling Sherpa capital",
                    "Climb with experienced, government-licensed climbing guides",
                    "Learn essential mountaineering skills - crampon use, rope techniques, glacier travel",
                    "Spectacular mountain flights to and from Lukla's thrilling airport",
                    "Achieve a significant mountaineering milestone and receive a summit certificate",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Award className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Best Time to Climb</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Stable weather, warming temperatures, and excellent climbing conditions. Rhododendrons bloom along the lower trails. The most popular season with longer summit windows.
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
                        Crystal-clear skies, stable weather, and perfect mountain views. Cooler temperatures but excellent climbing conditions. Peak season with vibrant cultural festivals.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow and high avalanche risk. Monsoon (Jun-Aug) brings rain, clouds, and limited summit views - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> Island Peak climbing permit, Sagarmatha National Park entry permit, and TIMS card are all included and arranged by us.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous climb requiring excellent fitness. You should be comfortable trekking 5-7 hours daily at altitude and have good cardiovascular endurance.</li>
                    <li>• <strong>Technical Experience:</strong> Previous mountaineering experience is helpful but not essential. Your guide will provide comprehensive training at Base Camp on crampon use, rope techniques, and ice axe handling.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude climbing up to 6,200m and helicopter evacuation. This is non-negotiable for your safety.</li>
                    <li>• <strong>Lukla Flights:</strong> Weather can cause flight delays. We include buffer days, but be prepared for possible schedule changes. Pack essentials in hand luggage.</li>
                    <li>• <strong>Acclimatization:</strong> Proper acclimatization is crucial. Our itinerary includes rest days at Namche and Dingboche, plus a contingency day for summit flexibility.</li>
                    <li>• <strong>Summit Bonus:</strong> It's customary to provide a summit bonus to your climbing guide and Sherpa upon successful summit (typically $150-250 total).</li>
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
                      q: "How difficult is Island Peak climbing?",
                      a: "Island Peak is considered a trekking peak but requires technical climbing skills. The climb involves walking on glaciers, crossing crevasses, and ascending a steep headwall with fixed ropes (45-50 degrees). Good physical fitness, mental determination, and some previous high-altitude experience are essential. Prior technical experience is helpful but not mandatory as training is provided.",
                    },
                    {
                      q: "Do I need previous climbing experience?",
                      a: "Previous mountaineering experience is beneficial but not strictly required. Many successful climbers are experienced trekkers with good fitness who learn technical skills during training at Base Camp. You should be comfortable with heights and have a good head for exposed terrain. Your guide will teach you proper use of crampons, ice axe, and rope techniques.",
                    },
                    {
                      q: "What is the success rate on Island Peak?",
                      a: "Success rates vary by season and weather conditions but typically range from 70-90% with proper preparation. Spring (March-May) and autumn (September-November) offer the best conditions. Our experienced guides, proper acclimatization schedule, and contingency day significantly improve summit success .",
                    },
                    {
                      q: "What climbing gear do I need?",
                      a: "We provide group climbing gear (ropes, ice screws) and technical equipment (harness, crampons, ice axe, helmet, ascender). You'll need personal items: climbing boots (plastic or insulated), gaiters, warm clothing, headlamp, sunglasses, and backpack. A detailed gear list will be provided upon booking.",
                    },
                    {
                      q: "What about altitude sickness?",
                      a: "Our itinerary includes proper acclimatization with rest days at Namche (3,440m) and Dingboche (4,410m) plus a gradual ascent profile. We carry a Gamow bag and oxygen for emergencies, and our guides are trained in altitude sickness recognition. Good hydration, slow ascent, and listening to your body are crucial.",
                    },
                    {
                      q: "What is the accommodation like during the climb?",
                      a: "During trekking, you'll stay in comfortable teahouses with twin-sharing rooms and shared bathrooms. At Island Peak Base Camp and High Camp, we use high-quality mountain tents with sleeping mats. Meals are prepared by our camp staff. Teahouses offer basic but warm facilities.",
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