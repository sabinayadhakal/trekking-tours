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
  PawPrint,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Syabrubesi",
    "altitude": "1,400m → 1,550m",
    "distance": "122km / 7-8 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Syabrubesi, the gateway to the Langtang Valley. The journey follows the Trishuli River valley through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through Dhunche (1,950m), the district headquarters of Rasuwa, where your Langtang National Park permit will be checked. The road winds through hillside forests with occasional views of Ganesh Himal (7,422m) and other peaks. Arrive in Syabrubesi (1,550m), a charming village situated at the confluence of the Bhote Koshi and Trishuli Rivers. Check into your teahouse, meet your trekking crew, and prepare for the adventure ahead. Evening briefing on the Langtang Valley route, including the optional climbs to Kyanjin Ri and Tserko Ri.",
    "overnight": "Teahouse in Syabrubesi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Trishuli River drive", "Ganesh Himal views", "Dhunche pass through", "Gateway to Langtang", "Syabrubesi arrival"]
  },
  {
    "day": 2,
    "title": "Trek from Syabrubesi to Lama Hotel",
    "altitude": "1,550m → 2,380m",
    "distance": "15km / 6-7 hrs trek",
    "description": "Your Langtang Valley trek begins! After breakfast, cross the suspension bridge over the Bhote Koshi River and follow the Langtang Khola upstream. The trail winds through dense forests of oak, rhododendron, and bamboo, with occasional glimpses of waterfalls cascading down steep cliffs. This forest is one of the best places to spot the endangered red panda - keep your eyes open! You'll pass through several small settlements including Domen and Bamboo, where you can stop for tea or lunch. The afternoon climb through beautiful forest brings you to Lama Hotel (2,380m), a cluster of teahouses nestled in the woods beside the river. This area is also home to Himalayan monkeys and diverse bird species. Overnight in a comfortable teahouse at Lama Hotel.",
    "overnight": "Teahouse in Lama Hotel",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Suspension bridge crossing", "Dense oak and rhododendron forest", "Waterfalls and cascades", "Red panda habitat", "Lama Hotel arrival"]
  },
  {
    "day": 3,
    "title": "Trek from Lama Hotel to Langtang Village",
    "altitude": "2,380m → 3,430m",
    "distance": "14km / 5-6 hrs trek",
    "description": "Today the valley opens up dramatically as you gain altitude, offering your first breathtaking views of Langtang Lirung (7,227m) and other surrounding peaks. The trail passes through Ghoda Tabela (3,000m) - meaning 'horse stable' - a clearing with teahouses and yak pastures where you can see grazing yaks and horses. Above the tree line, you enter alpine terrain with beautiful mani walls, prayer flags, and traditional stone houses. Langtang Village (3,430m) was devastated by the 2015 earthquake but has been beautifully rebuilt, showcasing the incredible resilience of the local Tamang community. The village offers stunning mountain views and a chance to interact with friendly locals and hear their stories of rebuilding. Overnight in Langtang Village.",
    "overnight": "Teahouse in Langtang Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Langtang Lirung (7,227m)", "Ghoda Tabela yak pastures", "Alpine terrain with mani walls", "Rebuilt Langtang Village", "Tamang culture experience"]
  },
  {
    "day": 4,
    "title": "Trek from Langtang Village to Kyanjin Gompa",
    "altitude": "3,430m → 3,870m",
    "distance": "12km / 4-5 hrs trek",
    "description": "A relatively short day allowing for gradual acclimatization before the optional climbs tomorrow. The trail follows a broad, open valley with stunning mountain scenery on all sides - Langtang Lirung (7,227m) dominates the skyline, while peaks like Gangchempo (6,387m), Langtang II, and Dorje Lakpa surround you. You'll pass through Mundu village with its ancient chortens, prayer wheels, and traditional stone houses. Continue past yak pastures with grazing animals and beautiful mountain streams. Kyanjin Gompa (3,870m) is the last settlement in the Langtang Valley, a beautiful village dominated by its ancient Buddhist monastery (gompa) and surrounded by towering peaks. Visit the famous Kyanjin Cheese Factory, established by Swiss experts in the 1950s, to sample delicious yak cheese, curd, and fresh bread. Explore the monastery with its centuries-old Buddhist artifacts. Overnight in Kyanjin Gompa.",
    "overnight": "Teahouse in Kyanjin Gompa",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Broad valley panorama", "Mundu village chortens", "Yak pastures", "Kyanjin Gompa monastery", "Yak cheese factory visit and tasting"]
  },
  {
    "day": 5,
    "title": "Exploration Day - Kyanjin Ri or Tserko Ri",
    "altitude": "3,870m → 4,773m / 5,033m → 3,870m",
    "distance": "8-12km / 5-7 hrs hike",
    "description": "The highlight of the Langtang Valley trek! Choose your adventure based on fitness and weather. Kyanjin Ri (4,773m) offers a challenging 2-3 hour climb to a spectacular ridge with 360-degree views of the entire Langtang range including Langtang Lirung (7,227m), Langtang II, Dorje Lakpa (6,966m), and Yala Peak (5,732m). For experienced trekkers seeking an extra challenge, Tserko Ri (5,033m) is a longer, steeper climb with even more dramatic panoramas stretching to the Tibetan plateau. As the sun rises, the peaks glow golden - an unforgettable experience. After descending, explore the ancient Kyanjin Gompa monastery more thoroughly, walk to the glacial moraine of Langtang Lirung, visit the yak cheese factory again, or simply relax and soak in the mountain atmosphere. In the evening, enjoy a farewell celebration with your trekking team at Kyanjin Gompa.",
    "overnight": "Teahouse in Kyanjin Gompa",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Kyanjin Ri sunrise (4,773m)", "Tserko Ri option (5,033m)", "360-degree Himalayan panorama", "Langtang Lirung glacial moraine", "Farewell celebration with team"]
  },
  {
    "day": 6,
    "title": "Trek from Kyanjin Gompa to Lama Hotel",
    "altitude": "3,870m → 2,380m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Today you retrace your steps down the Langtang Valley, descending through Kyanjin Gompa, Mundu village, and Langtang Village. The descent offers completely different perspectives of the mountains and valley - the peaks that towered above you on the way up now appear from new angles. You'll pass through Ghoda Tabela with its yak pastures and continue into the lush forests. The forest feels magical in the afternoon light as you return to Lama Hotel (2,380m) for the night. This long descent day allows time to reflect on the incredible experiences of the past days - the mountain views, the rebuilt villages, and the warm hospitality of the Tamang people. Overnight in a comfortable teahouse at Lama Hotel.",
    "overnight": "Teahouse in Lama Hotel",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descending through Langtang Valley", "New mountain perspectives", "Ghoda Tabela yak pastures", "Forest return", "Reflection time"]
  },
  {
    "day": 7,
    "title": "Trek from Lama Hotel to Syabrubesi",
    "altitude": "2,380m → 1,550m",
    "distance": "15km / 5-6 hrs trek",
    "description": "Your final day of trekking in the Langtang Valley. The trail descends through beautiful forests of oak, rhododendron, and bamboo, following the Langtang Khola downstream. You'll cross several suspension bridges and pass through the small settlements of Bamboo and Domen. The rushing river, lush forest, and occasional waterfall create a peaceful farewell to the Langtang region. Arrive in Syabrubesi (1,550m) by early afternoon. Check into your teahouse, take a well-deserved hot shower, and enjoy cold drinks and snacks. In the evening, celebrate your successful Langtang Valley trek achievement - including your climb to Kyanjin Ri or Tserko Ri - with a celebration dinner with your guide and porters.",
    "overnight": "Teahouse in Syabrubesi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Langtang trek", "Suspension bridge crossings", "Forest descent", "Syabrubesi arrival", "Celebration dinner with team"]
  },
  {
    "day": 8,
    "title": "Drive from Syabrubesi to Kathmandu",
    "altitude": "1,550m → 1,400m",
    "distance": "122km / 7-8 hrs drive",
    "description": "After breakfast in Syabrubesi, begin your scenic drive back to Kathmandu along the Trishuli River, retracing your journey from a week ago. The drive offers beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your Langtang Valley adventure - the breathtaking views from Kyanjin Ri or Tserko Ri, the yak cheese factory, the rebuilt villages, and the warm hospitality of the Tamang people. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your successful Langtang Valley trek achievement - standing at 4,773m (or 5,033m) surrounded by the majestic Langtang Himalaya.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic drive to Kathmandu", "Trishuli River and countryside views", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Langtang National Park Entry Permit",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Syabrubesi-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Langtang region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Kyanjin Ri/Tserko Ri exploration day",
  "Yak cheese tasting at Kyanjin Gompa",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,100m & emergency evacuation)",
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
    src: "/images/used/ganjala-pass-1.avif",
    alt: "Kyanjin Gompa",
    caption: "Kyanjin Gompa with Langtang Lirung",
  },
  
  {
    src: "/images/used/langtang-1.avif",
    alt: "Langtang Valley",
    caption: "Langtang Valley with Yak Pastures",
  },
  
  {
    src: "/images/used/langtang-2.avif",
    alt: "Langtang Lirung",
    caption: "Langtang Lirung (7,227m)",
  },
];

export default function LangtangValleyTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Langtang Valley Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Langtang Valley Trek - Himkala Adventure");
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
            src="/images/used/langtang-main-page.avif"
            alt="Langtang Valley Trek"
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
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Easy-Moderate
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <TreePine className="w-3 h-3 mr-1" /> Valley of Glaciers
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              LANGTANG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                VALLEY TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Discover the "Valley of Glaciers" - a stunning Himalayan trek through rhododendron forests, 
              traditional Tamang villages, and to the foot of majestic Langtang Lirung.
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
                <div className="text-xs text-slate-400 line-through">$805</div>
                <div className="text-lg font-bold text-[#0f2940]">$650</div>
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
                        <span className="text-white/50 text-sm line-through">$805</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$650</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $155</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>10 Days / 9 Nights</span>
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
                          <span className="font-medium text-[#0f2940]">Syabrubesi</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Tserko Ri (5,033m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Kyanjin Ri</span>
                          <span className="font-medium text-[#0f2940]">4,773m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Trekking Days</span>
                          <span className="font-medium text-[#0f2940]">7 Days</span>
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
                    The <strong>Langtang Valley Trek</strong> is one of Nepal's most beautiful and accessible treks, located just north of Kathmandu near the Tibetan border. Known as the "Valley of Glaciers," this stunning region offers a perfect blend of dramatic Himalayan scenery, rich Tamang culture, and diverse wildlife - all in a compact 10-day itinerary.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trek takes you through lush rhododendron and bamboo forests, past traditional villages with mani walls and prayer flags, to the spectacular <strong>Kyanjin Gompa (3,870m)</strong> beneath the towering peak of Langtang Lirung (7,227m). The valley was severely affected by the 2015 earthquake but has been beautifully rebuilt, with the resilience of the local Tamang community shining through.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Highlights include the challenging but rewarding ascent of <strong>Kyanjin Ri (4,773m)</strong> or <strong>Tserko Ri (5,033m)</strong> for breathtaking 360-degree mountain panoramas, visiting the famous yak cheese factory, and the chance to spot rare wildlife including red pandas and Himalayan black bears in Langtang National Park. This trek is perfect for those seeking an authentic Himalayan experience without the crowds of Everest or Annapurna.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit Kyanjin Ri (4,773m) or Tserko Ri (5,033m) for panoramic Himalayan views",
                    "Visit ancient Kyanjin Gompa and famous yak cheese factory",
                    "Explore Langtang National Park - home to red pandas and Himalayan black bears",
                    "Experience authentic Tamang culture and hospitality",
                    "Spectacular views of Langtang Lirung (7,227m) and surrounding peaks",
                    "Trek through rhododendron, bamboo, and oak forests",
                    "No internal flights needed - just scenic drive from Kathmandu",
                    "Quieter trails than Everest or Annapurna regions",
                    "Beautiful mani walls, chortens, and prayer flags throughout the valley",
                    "Witness the resilience of rebuilt Langtang Village post-2015 earthquake",
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
                        Rhododendron forests burst into vibrant red, pink, and white blooms. Warm temperatures, clear mornings, and excellent visibility. The most colorful time to trek.
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
                        Crystal-clear skies, stable weather, and perfect trekking conditions. The best visibility for mountain photography. Peak season with vibrant teahouse atmosphere.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is cold with possible snow but offers solitude. Monsoon (Jun-Aug) brings lush greenery but leeches and possible landslides.</p>
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
                    <li>• <strong>Guide Required:</strong> Since 2023, solo trekking without a guide is banned in Langtang National Park - you must trek with a licensed guide for safety.</li>
                    <li>• <strong>Permits:</strong> Langtang National Park Entry Permit (NPR 3,000) and TIMS card (NPR 2,000) are required.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,100m and helicopter evacuation.</li>
                    <li>• <strong>Kyanjin Ri/Tserko Ri:</strong> Both optional hikes require early starts and good fitness - your guide will recommend based on conditions.</li>
                    <li>• <strong>Connectivity:</strong> Limited WiFi available at teahouses (paid), no signal in upper valley - prepare for digital detox.</li>
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
                      q: "How difficult is the Langtang Valley Trek?",
                      a: "The trek is rated as easy to moderate. You'll trek 4-7 hours daily on well-maintained trails with some steep sections. The main challenge is the altitude (up to 5,033m at Tserko Ri). No technical experience is required, and it's suitable for beginners with good fitness.",
                    },
                    {
                      q: "Do I need a guide for this trek?",
                      a: "Yes, since 2023 solo trekking without a guide is banned in Langtang National Park for foreign trekkers. You must trek with a licensed guide for safety reasons. Our package includes an experienced guide.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Teahouses are basic but comfortable, with twin-sharing rooms and shared bathrooms. Facilities become simpler at higher altitudes, but all offer warm meals and friendly service. Hot showers and charging are available for a small fee.",
                    },
                    {
                      q: "What is special about Kyanjin Gompa?",
                      a: "Kyanjin Gompa is the last settlement in the valley, home to an ancient Buddhist monastery and the famous yak cheese factory established by Swiss experts in the 1950s. It's also the base for hiking Kyanjin Ri and Tserko Ri.",
                    },
                    {
                      q: "Can I see red pandas on this trek?",
                      a: "Yes, Langtang National Park is one of the best places in Nepal to spot red pandas, though sightings are rare and require luck. The bamboo forests between Lama Hotel and Ghoda Tabela are prime habitat. You may also see Himalayan black bears, langur monkeys, and various bird species.",
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