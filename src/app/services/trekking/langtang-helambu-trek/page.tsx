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
  Droplets,
  Landmark,
  Compass,
  Flame,
  MessageCircle,
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
    description: "Today the valley opens up dramatically as we gain altitude, offering first breathtaking views of Langtang Lirung (7,227m). The trail passes through Ghoda Tabela ('horse stable') - a clearing with teahouses and yak pastures. Above the tree line, we enter alpine terrain with mani walls, prayer flags, and traditional stone houses. Langtang Village was devastated by the 2015 earthquake but has been beautifully rebuilt, showcasing the incredible resilience of the local community. Before entering, you'll pause at a memorial honoring those lost. The village offers stunning mountain views and a chance to interact with friendly Tamang locals.",
    overnight: "Teahouse in Langtang Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Langtang Lirung", "Ghoda Tabela yak pastures", "Earthquake memorial", "Rebuilt Langtang Village"],
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
    title: "Exploration Day - Kyanjin Ri or Tserko Ri",
    altitude: "3,870m → 4,773m / 4,985m → 3,870m",
    distance: "8-12km / 5-8 hrs",
    description: "The highlight of the Langtang section! Choose your adventure based on fitness and weather. Kyanjin Ri (4,773m) offers a challenging 2-3 hour climb to a spectacular ridge with 360-degree views of the entire Langtang range including Langtang Lirung, Langtang II, Dorje Lakpa, and Yala Peak. For experienced trekkers seeking an extra challenge, Tserko Ri (4,985m) is a longer, steeper climb with even more dramatic panoramas stretching to the Tibetan plateau. As the sun rises, the peaks glow golden - an unforgettable experience. After descending, explore the ancient monastery, walk to the glacial moraine, or simply relax and soak in the mountain atmosphere.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Kyanjin Ri sunrise (4,773m)", "Tserko Ri option (4,985m)", "360-degree Himalayan panorama", "Glacial moraine exploration"],
  },
  {
    day: 7,
    title: "Trek to Thulo Syabru",
    altitude: "3,870m → 2,110m",
    distance: "18km / 7-8 hrs",
    description: "We retrace our steps down the valley, descending through Langtang Village and Ghoda Tabela. At Ghoda Tabela, we take a different route heading south toward the Gosaikunda region. The trail climbs through rhododendron and oak forests, crossing ridges with spectacular views back toward the Langtang range. We arrive at Thulo Syabru, a beautiful Tamang village perched on a ridge with stunning mountain views. The village offers a chance to experience authentic Tamang culture, with traditional houses, ancient gompas, and friendly locals. The sunset views over the Himalayas from here are spectacular.",
    overnight: "Teahouse in Thulo Syabru",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Descend through Langtang Valley", "Rhododendron forests", "Thulo Syabru village", "Sunset mountain views"],
  },
  {
    day: 8,
    title: "Trek to Sing Gompa",
    altitude: "2,110m → 3,250m",
    distance: "10km / 5-6 hrs",
    description: "A steady climb through beautiful forests of rhododendron, oak, and pine, with occasional openings revealing stunning mountain views. The trail passes through grazing pastures and small settlements before reaching Sing Gompa, also known as Chandanbari. Sing Gompa is famous for its cheese factory, established by Swiss experts, producing delicious yak and cow cheese. The village has a small monastery and offers excellent views of Ganesh Himal and the Langtang range. Sample fresh cheese while enjoying the mountain panorama.",
    overnight: "Teahouse in Sing Gompa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest climb with mountain views", "Sing Gompa cheese factory", "Yak cheese tasting", "Ganesh Himal views"],
  },
  {
    day: 9,
    title: "Trek to Gosaikunda Lake",
    altitude: "3,250m → 4,380m",
    distance: "12km / 6-7 hrs",
    description: "The most challenging day of the trek as we climb steadily to the sacred Gosaikunda Lakes. The trail passes through Laurebina Yak pastures before reaching Laurebina Pass (4,610m), marked with prayer flags and offering spectacular views of the lakes and surrounding peaks. The descent brings us to the main Gosaikunda Lake (4,380m), one of the most sacred Hindu pilgrimage sites in Nepal. According to legend, the lake was created by Lord Shiva when he thrust his trident into the mountain to obtain water to quench his thirst after swallowing poison. The deep blue waters surrounded by barren peaks create a mystical atmosphere. Visit the temples on the lakeshore and witness the ritual offerings made by pilgrims.",
    overnight: "Teahouse at Gosaikunda",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Laurebina Pass (4,610m)", "Sacred Gosaikunda Lake", "Hindu pilgrimage site", "Lord Shiva legend"],
  },
  {
    day: 10,
    title: "Cross Laurebina Pass to Ghopte",
    altitude: "4,380m → 4,610m → 3,440m",
    distance: "12km / 6-7 hrs",
    description: "We leave the sacred lakes behind and continue our journey eastward, crossing Laurebina Pass (4,610m) once more before descending through rocky terrain with spectacular mountain views. The landscape is barren and dramatic, with occasional glimpses of Himalayan tahr and other wildlife. We descend through forests of rhododendron and juniper to Ghopte, a small settlement with basic teahouses nestled in a valley. This remote area offers a true wilderness experience with few trekkers and pristine nature.",
    overnight: "Teahouse in Ghopte",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Laurebina Pass crossing", "Dramatic rocky landscape", "Wildlife spotting", "Remote wilderness"],
  },
  {
    day: 11,
    title: "Trek to Tharepati",
    altitude: "3,440m → 3,650m",
    distance: "12km / 5-6 hrs",
    description: "Today's trail takes us through beautiful forests with occasional openings revealing views of the surrounding peaks. We cross several small ridges and passes before reaching Tharepati, a small settlement perched on a ridge at the junction of several trekking routes. The views from Tharepati are spectacular - on clear days, you can see Langtang Lirung, Ganesh Himal, and even distant views of Manaslu and the Annapurna range. The village has a small monastery and friendly locals who welcome trekkers.",
    overnight: "Teahouse in Tharepati",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest trails", "Ridge-top village", "Spectacular mountain views", "Multi-range panorama"],
  },
  {
    day: 12,
    title: "Trek to Kutumsang",
    altitude: "3,650m → 2,470m",
    distance: "14km / 6-7 hrs",
    description: "A long descent through forests and traditional villages. The trail passes through Magin Goth, a grazing settlement, then continues through rhododendron and oak forests to Gul Bhanjyang, a village with teahouses and beautiful mountain views. From here, we descend further to Kutumsang, a larger village with several teahouses. The changing vegetation zones offer a fascinating transition from alpine to subtropical environments. Kutumsang offers comfortable accommodation and stunning sunset views over the mountains.",
    overnight: "Teahouse in Kutumsang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Magin Goth pastures", "Gul Bhanjyang village", "Changing vegetation zones", "Sunset mountain views"],
  },
  {
    day: 13,
    title: "Trek to Chisapani",
    altitude: "2,470m → 2,215m",
    distance: "12km / 5-6 hrs",
    description: "A relatively easy day with gentle ups and downs through forests and villages. The trail offers beautiful views of the Himalayan range on clear days, including Langtang, Ganesh, and even Everest in the distance. We pass through several small Tamang villages with opportunities to observe rural life. Chisapani, meaning 'cold water', is a popular viewpoint with spectacular sunrise views over the Himalayas. The village has excellent teahouses and a warm atmosphere. This is a favorite spot for photographers and nature lovers.",
    overnight: "Teahouse in Chisapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Himalayan views including Everest", "Traditional Tamang villages", "Sunset panorama", "Photography paradise"],
  },
  {
    day: 14,
    title: "Trek to Sundarijal & Drive to Kathmandu",
    altitude: "2,215m → 1,350m → 1,350m",
    distance: "10km trek / 1 hr drive",
    description: "Our final day of trekking descends through Shivapuri National Park, a protected area with rich biodiversity. The trail follows a river through lush forest, passing waterfalls and traditional villages. We reach Sundarijal, a small town on the outskirts of Kathmandu Valley, where our private vehicle awaits. The short drive takes us back to Kathmandu, where you can enjoy a hot shower and rest after 14 days of adventure. Evening farewell dinner celebrating your incredible journey through Langtang Valley, sacred Gosaikunda Lake, and the beautiful Helambu region. Share stories with your trekking team.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Shivapuri National Park", "Waterfall and forest trail", "Sundarijal arrival", "Trek completion", "Farewell celebration dinner"],
  },
  {
    day: 15,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing beside sacred lakes, trekking through the Valley of Glaciers, and experiencing the warm hospitality of mountain communities.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Langtang National Park Entry Permit",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Syabrubesi & Sundarijal-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Langtang, Gosaikunda & Helambu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Kyanjin Ri and Gosaikunda days",
  "Yak cheese tasting at Kyanjin Gompa",
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
  "Tips and gratuities for guides, porters, and drivers (recommended)",
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
    alt: "Gosaikunda Lake",
    caption: "Sacred Gosaikunda Lake (4,380m)",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Langtang Valley",
    caption: "Langtang Valley - Valley of Glaciers",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Chisapani Sunrise",
    caption: "Sunrise from Chisapani",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Tarkeghyang Village",
    caption: "Traditional Village in Helambu",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Rhododendron Forest",
    caption: "Rhododendron Forests in Spring",
  },
];

export default function LangtangHelambuTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Langtang Helambu Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Langtang Helambu Trek - Himkala Adventure");
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
            alt="Langtang Helambu Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Langtang Region
              </Badge>
              <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Moderate
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Droplets className="w-3 h-3 mr-1" /> Gosaikunda Lake
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              LANGTANG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                HELAMBU TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              An epic circuit through the Langtang Valley to the sacred Gosaikunda Lakes and the cultural 
              heartland of Helambu—three diverse regions in one unforgettable journey.
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
                <div className="text-xs text-slate-400 line-through">$1,750</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,595</div>
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
                        <span className="text-white/50 text-sm line-through">$1,750</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,595</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $155</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>15 Days / 14 Nights</span>
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
                          <span className="font-medium text-[#0f2940]">Syabrubesi / Sundarijal</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Tserko Ri (4,985m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Gosaikunda</span>
                          <span className="font-medium text-[#0f2940]">4,380m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Trekking Days</span>
                          <span className="font-medium text-[#0f2940]">13 Days</span>
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
                    The <strong>Langtang Helambu Trek</strong> is a classic circuit that combines three of Nepal's most beautiful regions into one comprehensive journey: the dramatic Langtang Valley, the sacred Gosaikunda Lakes, and the culturally rich Helambu Valley. This trek offers a perfect blend of natural beauty, spiritual discovery, and cultural immersion, all within a relatively accessible area close to Kathmandu.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The journey begins in the Langtang Valley, known as the "Valley of Glaciers," where you'll trek beneath the towering peak of <strong>Langtang Lirung (7,227m)</strong> to <strong>Kyanjin Gompa (3,870m)</strong>. After exploring the valley and optional ascents of Kyanjin Ri or Tserko Ri, the trail leads to the sacred <strong>Gosaikunda Lakes (4,380m)</strong>, a series of alpine lakes revered by both Hindus and Buddhists. According to Hindu mythology, Lord Shiva created these lakes with his trident.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The final section leads through the <strong>Helambu Valley</strong>, home to the Hyolmo people with their unique dialect and Buddhist traditions. You'll pass through traditional villages, ancient monasteries, and rhododendron forests before descending to Sundarijal on the outskirts of Kathmandu. This moderate-grade trek is ideal for trekkers seeking diverse landscapes, cultural depth, and spiritual tranquility without the crowds of Everest or Annapurna.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Sacred Gosaikunda Lakes (4,380m) - Hindu pilgrimage site created by Lord Shiva",
                    "Kyanjin Gompa (3,870m) with ancient monastery and famous yak cheese factory",
                    "Summit Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for 360° Himalayan panorama",
                    "Cross Laurebina Pass (4,610m) with prayer flags and spectacular views",
                    "Langtang Valley - the 'Valley of Glaciers' with views of Langtang Lirung (7,227m)",
                    "Helambu Valley - traditional Hyolmo, Tamang, and Sherpa villages",
                    "Sunrise from Chisapani over the entire Himalayan range",
                    "Langtang National Park - home to red pandas, Himalayan black bears, and langur monkeys",
                    "Diverse ecosystems from subtropical forests to alpine deserts and sacred lakes",
                    "End at Sundarijal - just 1 hour from Kathmandu, no return flight needed",
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
                        Rhododendron forests burst into vibrant bloom, mild temperatures, and excellent visibility. The Gosaikunda lakes thaw, creating stunning reflections of surrounding peaks.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect trekking conditions. The Janai Purnima festival (Aug/Sep) draws thousands of pilgrims to Gosaikunda.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is cold with possible snow but offers solitude. Monsoon (Jun-Aug) brings leeches and landslides but lush greenery.</p>
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
                    <li>• <strong>Permits Required:</strong> Langtang National Park Entry Permit (approx. USD 30) and TIMS card (approx. USD 20) are required. Your trekking agency can arrange both.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,000m and helicopter evacuation.</li>
                    <li>• <strong>Gosaikunda Festival:</strong> If trekking during Janai Purnima (Aug/Sep), expect crowds of pilgrims and limited accommodation - book well in advance.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a moderate trek with 5-7 hour days and altitudes up to 4,985m. Prior trekking experience recommended.</li>
                    <li>• <strong>No Flights Required:</strong> This trek starts and ends with scenic drives from Kathmandu - no internal flights needed.</li>
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
                      q: "How difficult is the Langtang Helambu Trek?",
                      a: "The trek is rated as moderate. You'll trek 5-7 hours daily on well-maintained trails with some steep sections, particularly to Kyanjin Ri and Laurebina Pass. The highest point is 4,985m at Tserko Ri, so proper acclimatization is important. This trek is suitable for trekkers with good fitness and some prior trekking experience.",
                    },
                    {
                      q: "What is the significance of Gosaikunda Lake?",
                      a: "Gosaikunda is one of the most sacred Hindu pilgrimage sites in Nepal. According to Hindu mythology, Lord Shiva created the lake by thrusting his trident into the mountain to obtain water to quench his thirst after swallowing poison to save the world. Thousands of pilgrims visit during the Janai Purnima festival (Aug/Sep) to bathe in the holy waters.",
                    },
                    {
                      q: "What is the accommodation like on this trek?",
                      a: "You'll stay in teahouses (local lodges) throughout the trek. Rooms are basic but cozy, usually twin-sharing with shared bathrooms. Some lodges offer hot showers, Wi-Fi, and charging facilities for an extra fee ($2-4 per use). In Kathmandu, you'll stay in 3-star hotels.",
                    },
                    {
                      q: "What wildlife might I see?",
                      a: "Langtang National Park is home to red pandas (rare sightings), Himalayan black bears, musk deer, Himalayan thar, and langur monkeys. The forests between Lama Hotel and Langtang are prime red panda habitat. Bird watchers will enjoy over 250 species including Himalayan monals and blood pheasants.",
                    },
                    {
                      q: "How do I get to the starting point and from the ending point?",
                      a: "The trek starts with a 7-8 hour scenic drive from Kathmandu to Syabrubesi. The trek ends at Sundarijal, which is just a 1-hour drive from Kathmandu. This means no internal flights are required, making the trek more accessible and cost-effective.",
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