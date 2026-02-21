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
  Compass,
  
  TentTree,
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
    description: "Early morning departure from Kathmandu for the scenic drive to Syabrubesi. The journey follows the Trishuli River valley through beautiful rural landscapes, terraced farmlands, and traditional villages. We pass through Dhunche, the district headquarters, where your Langtang National Park permit will be checked. The road winds through hillside forests with occasional views of Ganesh Himal. Arrive in Syabrubesi, a charming village that serves as the gateway to the Langtang region. Check into your teahouse and prepare for the trek ahead.",
    overnight: "Teahouse in Syabrubesi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic Trishuli River drive", "Ganesh Himal views", "Dhunche permit check", "Gateway to Langtang"],
  },
  {
    day: 3,
    title: "Trek to Lama Hotel",
    altitude: "1,550m → 2,380m",
    distance: "15km / 6-7 hrs",
    description: "Our trek begins! We cross the suspension bridge over the Bhote Koshi River and follow the Langtang Khola upstream. The trail winds through dense forests of oak, rhododendron, and bamboo, with occasional glimpses of waterfalls cascading down steep cliffs. We pass through small settlements including Bamboo, where we stop for lunch. The afternoon climb through forest brings us to Lama Hotel, a cluster of teahouses nestled in the woods. Keep an eye out for red pandas and Himalayan monkeys in this forested section.",
    overnight: "Teahouse in Lama Hotel",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Suspension bridge crossings", "Dense oak and rhododendron forest", "Bamboo village", "Red panda habitat"],
  },
  {
    day: 4,
    title: "Trek to Langtang Village",
    altitude: "2,380m → 3,430m",
    distance: "14km / 6-7 hrs",
    description: "Today the valley opens up dramatically as we gain altitude, offering first breathtaking views of Langtang Lirung (7,227m). The trail passes through Ghoda Tabela ('horse stable') - a clearing with teahouses and yak pastures. Above the tree line, we enter alpine terrain with mani walls, prayer flags, and traditional stone houses. Langtang Village was devastated by the 2015 earthquake but has been beautifully rebuilt, showcasing the incredible resilience of the local community. The village offers stunning mountain views and a chance to interact with friendly Tamang locals and hear their stories of rebuilding.",
    overnight: "Teahouse in Langtang Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Langtang Lirung", "Ghoda Tabela yak pastures", "Rebuilt Langtang Village", "Community resilience"],
  },
  {
    day: 5,
    title: "Trek to Kyanjin Gompa",
    altitude: "3,430m → 3,870m",
    distance: "10km / 4-5 hrs",
    description: "A relatively short day allowing for gradual acclimatization. The trail follows a broad, open valley with stunning mountain scenery on all sides - Langtang Lirung dominates the skyline, while peaks like Gangchempo and Dorje Lakpa surround us. We pass through Mundu village with its ancient chortens and continue past yak pastures with grazing animals. Kyanjin Gompa is the last settlement in the valley, a beautiful village dominated by its ancient Buddhist monastery and surrounded by towering peaks. Visit the famous Kyanjin Cheese Factory, established by Swiss experts in the 1950s, to sample delicious yak cheese and curd.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Broad valley panorama", "Mundu village chortens", "Kyanjin Gompa monastery", "Yak cheese factory visit"],
  },
  {
    day: 6,
    title: "Acclimatization Day - Kyanjin Ri or Tserko Ri",
    altitude: "3,870m → 4,773m / 4,985m → 3,870m",
    distance: "8-12km / 5-8 hrs",
    description: "A crucial acclimatization day with optional summit hikes. Kyanjin Ri (4,773m) offers a challenging 2-3 hour climb to a spectacular ridge with 360-degree views of the entire Langtang range including Langtang Lirung, Langtang II, Dorje Lakpa, and Yala Peak. For experienced trekkers seeking an extra challenge, Tserko Ri (4,985m) is a longer, steeper climb with even more dramatic panoramas stretching to the Tibetan plateau. As the sun rises, the peaks glow golden - an unforgettable experience. After descending, explore the ancient monastery, walk to the glacial moraine, or simply relax and soak in the mountain atmosphere. This acclimatization is essential for the challenging Ganja La crossing ahead.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Kyanjin Ri sunrise (4,773m)", "Tserko Ri option (4,985m)", "360-degree Himalayan panorama", "Acclimatization for Ganja La"],
  },
  {
    day: 7,
    title: "Trek to Ngegang",
    altitude: "3,870m → 4,300m",
    distance: "12km / 5-6 hrs",
    description: "We leave the main Langtang Valley and head toward the Ganja La region. The trail crosses the Langtang Khola and begins a steady climb through alpine meadows and juniper forests. The landscape becomes increasingly remote and wild as we gain altitude. Ngegang is a high-altitude grazing area with basic camping facilities - tonight we switch from teahouses to camping. This marks the beginning of the remote pass crossing section with no teahouses for the next 4 days.",
    overnight: "Camping at Ngegang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Leave main valley", "Alpine meadows", "Remote wilderness", "Camping experience"],
  },
  {
    day: 8,
    title: "Trek to High Camp",
    altitude: "4,300m → 4,700m",
    distance: "8km / 4-5 hrs",
    description: "A shorter day to aid acclimatization before the pass crossing. The trail climbs steadily through rocky terrain with stunning views of the surrounding peaks. We set up camp at High Camp, a windswept plateau beneath the pass. The afternoon is free to rest, hydrate, and prepare for the challenging day ahead. Your guide will assess conditions and provide a briefing on the pass crossing procedure. The views of Naya Kanga (5,846m) and surrounding glaciers are spectacular from this vantage point.",
    overnight: "Camping at High Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Stunning mountain views", "Naya Kanga peak", "Pass preparation", "High-altitude camping"],
  },
  {
    day: 9,
    title: "Cross Ganja La Pass to Keldang",
    altitude: "4,700m → 5,130m → 4,270m",
    distance: "12km / 8-9 hrs",
    description: "The most challenging and rewarding day of the trek! We start early (3-4 AM) for the ascent to Ganja La Pass (5,130m). The climb is steep and demanding, crossing snow and ice fields where crampons and ropes may be necessary depending on conditions. At the summit, prayer flags flutter in the wind with breathtaking 360-degree views of Langtang Lirung, Naya Kanga, Dorje Lakpa, Ganesh Himal, and even glimpses of Shisha Pangma (8,013m) in Tibet. After celebrating at the top, we begin the long descent to Keldang, passing small glacial lakes and rocky terrain. This is a tiring but unforgettable day.",
    overnight: "Camping at Keldang",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Ganja La Pass (5,130m)", "360-degree Himalayan panorama", "Views of Shisha Pangma", "Glacial lakes"],
  },
  {
    day: 10,
    title: "Trek to Dukpu",
    altitude: "4,270m → 4,040m",
    distance: "12km / 6-7 hrs",
    description: "After the exertion of the pass crossing, today's trek is mostly downhill through beautiful alpine landscapes. The trail descends through valleys with occasional yak pastures and offers spectacular views back toward the pass. We pass through remote wilderness areas with no settlements - the sense of solitude is profound. Dukpu is a small grazing area with basic camping facilities, nestled in a valley surrounded by forests and mountains.",
    overnight: "Camping at Dukpu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Alpine descent", "Remote wilderness", "Views back to Ganja La", "Solitude"],
  },
  {
    day: 11,
    title: "Trek to Tarkeghyang",
    altitude: "4,040m → 2,590m",
    distance: "14km / 6-7 hrs",
    description: "A significant descent day as we leave the high mountains behind and enter the Helambu region. The trail descends through rhododendron and pine forests, with the vegetation becoming increasingly lush as we lose altitude. We pass through traditional Sherpa and Hyolmo villages with their distinctive stone houses, mani walls, and prayer flags. Tarkeghyang is the largest village in Helambu, with a beautiful ancient monastery, friendly locals, and comfortable teahouses - a welcome return to civilization after days of camping.",
    overnight: "Teahouse in Tarkeghyang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Enter Helambu region", "Rhododendron forests", "Sherpa and Hyolmo villages", "Tarkeghyang monastery"],
  },
  {
    day: 12,
    title: "Trek to Sermathang",
    altitude: "2,590m → 2,610m",
    distance: "10km / 4-5 hrs",
    description: "A relatively easy day following ridgelines with stunning views of the Himalayas on clear days. The trail passes through several small villages with opportunities to observe rural life and interact with friendly locals. Sermathang is a beautiful village perched on a ridge with spectacular mountain views, several monasteries, and a warm community. The village is known for its traditional architecture and the famous Guru Rinpoche statue. Enjoy the sunset views over the mountains and celebrate nearing the end of your epic journey.",
    overnight: "Teahouse in Sermathang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ridge walking", "Mountain views", "Sermathang village", "Guru Rinpoche statue"],
  },
  {
    day: 13,
    title: "Trek to Melamchi Pul Bazaar",
    altitude: "2,610m → 880m",
    distance: "14km / 5-6 hrs",
    description: "Final day of trekking as we descend through terraced farmlands, forests, and villages to Melamchi Pul Bazaar. The trail offers a fascinating transition from mountain villages to subtropical lowlands. We pass through Dubhachaur and other settlements before reaching Melamchi Pul, a bustling market town. Celebrate your incredible achievement of crossing Ganja La Pass and trekking through Langtang and Helambu! Enjoy a hot shower, cold drinks, and a well-deserved celebration dinner with your trekking team.",
    overnight: "Teahouse in Melamchi Pul",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Terraced farmlands", "Melamchi Pul arrival", "Celebration dinner"],
  },
  {
    day: 14,
    title: "Drive to Kathmandu",
    altitude: "880m → 1,350m",
    distance: "3-4 hrs drive",
    description: "After breakfast, we drive back to Kathmandu through scenic countryside. The short drive takes us through beautiful landscapes and villages before reaching the capital. Arrive in Kathmandu by early afternoon and check into your hotel. Enjoy free time for souvenir shopping in Thamel, a well-deserved massage, or simply rest after your adventure. Evening farewell dinner celebrating your Ganja La crossing and the completion of this epic journey through Langtang and Helambu.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: ["Scenic drive", "Thamel exploration", "Farewell celebration dinner", "Trek completion"],
  },
  {
    day: 15,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing atop Ganja La Pass surrounded by the majestic Himalayas, crossing glaciers, and experiencing the warm hospitality of mountain communities.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek (where available)",
  "Camping equipment (tents, sleeping tents, kitchen tents, toilet tents, cooking gear) for pass section",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more (essential for pass safety)",
  "Cook and kitchen staff for camping section",
  "Porter service for all trekking and camping gear",
  "Langtang National Park Entry Permit",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Syabrubesi & Melamchi-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Crampons and microspikes for Ganja La crossing",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Langtang and Helambu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Ganja La crossing day",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,200m, glacier crossing, and helicopter evacuation)",
  "Personal trekking gear and equipment (except as listed in includes)",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at teahouses ($2-4 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides, porters, and camping staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, flight delays, political unrest)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Ganja La Pass",
    caption: "Ganja La Pass (5,130m)",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Kyanjin Gompa",
    caption: "Kyanjin Gompa with Langtang Lirung",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Langtang Valley",
    caption: "Langtang Valley - Valley of Glaciers",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Tserko Ri View",
    caption: "Sunrise from Tserko Ri (4,985m)",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Tarkeghyang Village",
    caption: "Tarkeghyang - Helambu's Largest Village",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Camping under Stars",
    caption: "Camping in the Himalayas",
  },
];

export default function LangtangGanjaLaTrekPage() {
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
    const title = encodeURIComponent("Langtang Ganja La Trek - Himkala Adventure");
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
            alt="Langtang Ganja La Trek"
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
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-4 py-2 text-sm">
                Strenuous
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-4 py-2 text-sm">
                 className="w-4 h-4 mr-1" / Glacier Crossing
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              LANGTANG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                GANJA LA TREK
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              An epic high-altitude adventure crossing the challenging Ganja La Pass (5,130m), 
              connecting the remote Langtang Valley with the serene Helambu region.
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
                    <div className="text-xs text-slate-400 line-through">$2,250</div>
                    <div className="text-xl font-bold text-[#0f2940]">$1,995</div>
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
                      <span className="text-white/50 text-sm line-through">$2,250</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,995</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $255</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>15 Days / 14 Nights</span>
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
                        <span>Teahouse + Camping</span>
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
                        <span className="font-medium text-[#0f2940]">Syabrubesi / Melamchi</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Ganja La (5,130m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Pass Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Technical (crampons/ropes)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Trekking Days</span>
                        <span className="font-medium text-[#0f2940]">11 Days</span>
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
                    The <strong>Langtang Ganja La Trek</strong> is one of Nepal's most adventurous and rewarding high-altitude treks, connecting the beautiful Langtang Valley with the serene Helambu region via the challenging <strong>Ganja La Pass (5,130m/5,200m)</strong> [citation:5][citation:8]. This strenuous journey combines the best of both regions - the dramatic glaciers and yak pastures of Langtang with the cultural richness of Helambu's Sherpa and Hyolmo villages [citation:3][citation:10].
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    The trek begins in the Langtang Valley, known as the "Valley of Glaciers," where you'll trek to <strong>Kyanjin Gompa (3,870m)</strong> beneath the towering peak of Langtang Lirung (7,227m) [citation:4]. After acclimatization and optional hikes to Kyanjin Ri or Tserko Ri, the route becomes increasingly remote and wild. For the next four days, you'll camp in pristine wilderness, crossing the <strong>Ganja La Pass</strong> where crampons and ropes may be necessary depending on snow conditions [citation:7][citation:5].
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    From the pass summit, you're rewarded with breathtaking 360-degree views of <strong>Langtang Lirung, Naya Kanga, Dorje Lakpa, Ganesh Himal, and even glimpses of Shisha Pangma (8,013m) in Tibet</strong> [citation:1][citation:7]. The descent leads into the lush Helambu region, with its terraced fields, apple orchards, and ancient Buddhist monasteries. This trek is designed for experienced trekkers seeking solitude, wilderness, and the satisfaction of conquering a technical high Himalayan pass [citation:8].
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Cross Ganja La Pass (5,130m) - a technical high-altitude pass with glacier crossings",
                    "360-degree panoramic views of Langtang Lirung, Naya Kanga, Dorje Lakpa, Ganesh Himal, and Shisha Pangma (Tibet)",
                    "Remote wilderness camping - 4 nights in pristine high-altitude valleys",
                    "Kyanjin Gompa monastery and famous yak cheese factory",
                    "Summit Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for spectacular Langtang panoramas",
                    "Traditional Sherpa and Hyolmo villages in Helambu with ancient monasteries",
                    "Langtang National Park - home to red pandas, Himalayan black bears, and Himalayan thar",
                    "Less crowded than Everest or Annapurna - true off-the-beaten-path adventure",
                    "Diverse landscapes from subtropical forests to glaciers and alpine deserts",
                    "Cultural immersion with Tamang, Sherpa, and Hyolmo communities",
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
                        Rhododendron forests burst into vibrant bloom, warming temperatures, and excellent visibility. The Ganja La may have snow but conditions are generally stable for crossing [citation:4][citation:7].
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
                        The most reliable season with crystal-clear skies, stable weather, and perfect trekking conditions. Minimal snow on the pass, making crossing easier [citation:5][citation:9].
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow making the pass impassable. Monsoon (Jun-Aug) brings leeches and landslides - not recommended for this trek [citation:4][citation:8].</p>
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
                    <li>• <strong>Technical Pass Crossing:</strong> Ganja La is a challenging pass requiring crampons, ice axes, and ropes depending on conditions [citation:5][citation:7]. Basic mountaineering skills are recommended.</li>
                    <li>• <strong>Camping Required:</strong> For 4 nights (Ngegang to Dukpu), there are no teahouses - you must be prepared for camping with all gear provided [citation:4][citation:10].</li>
                    <li>• <strong>Guide Mandatory:</strong> Independent trekking is not recommended on this route - a licensed guide is essential for safety on the unmarked, technical pass section [citation:7][citation:8].</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous trek with 6-9 hour days, high altitude (5,130m), and technical sections. Excellent fitness and prior high-altitude experience required [citation:5][citation:9].</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,200m, glacier crossing, and helicopter evacuation [citation:8][citation:10].</li>
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
                      q: "How difficult is the Ganja La Pass crossing?",
                      a: "Ganja La is one of Nepal's more challenging trekking passes. The crossing involves steep ascents/descents, snow and ice fields, and requires crampons and possibly ropes depending on conditions [citation:5][citation:7]. The pass is not technically a climb, but basic mountaineering skills and excellent fitness are essential. Your guide will provide training and assistance [citation:8].",
                    },
                    {
                      q: "Do I need previous camping experience?",
                      a: "No prior camping experience is necessary, but you should be prepared for basic conditions with no running water, squat toilets, and cold temperatures. Our experienced camping staff will set up tents, prepare meals, and ensure your comfort. A positive attitude and flexibility are important [citation:1][citation:10].",
                    },
                    {
                      q: "What wildlife might I see on this trek?",
                      a: "Langtang National Park is home to red pandas (rare sightings), Himalayan black bears, musk deer, Himalayan thar, and langur monkeys [citation:7][citation:8]. The forests between Lama Hotel and Langtang are prime red panda habitat. Bird watchers will enjoy over 250 species including Himalayan monals and blood pheasants.",
                    },
                    {
                      q: "What is the accommodation like during the camping section?",
                      a: "During the 4-day camping section (Ngegang to Dukpu), you'll sleep in spacious dome tents with sleeping mats provided. Our camping staff sets up separate kitchen and dining tents, and prepares fresh, hot meals. Facilities are basic - no showers, no electricity, and pit toilets. This is a true wilderness experience [citation:4][citation:10].",
                    },
                    {
                      q: "Can I do this trek if I've never used crampons before?",
                      a: "Yes, with proper guidance. Your guide will provide instruction on using crampons and ice axes before the pass crossing. However, you should be comfortable walking on snow and ice, and have excellent balance. The guide will assess conditions and may rope up the group if necessary for safety [citation:5][citation:7].",
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