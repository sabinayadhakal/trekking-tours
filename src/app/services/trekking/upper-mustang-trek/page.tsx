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
    title: "Drive to Pokhara",
    altitude: "1,400m → 820m",
    distance: "200km / 6-7 hrs drive",
    description: "Scenic drive from Kathmandu to Pokhara along the Prithvi Highway, following the Trishuli River. The journey offers beautiful views of rural landscapes, river valleys, and distant mountains. Arrive in Pokhara, Nepal's second-largest city and gateway to the Annapurna region. Check into your lakeside hotel and enjoy free time to explore Phewa Lake or relax with mountain views.",
    overnight: "Hotel in Pokhara",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic highway drive", "Trishuli River views", "Arrival in Pokhara", "Phewa Lake"],
  },
  {
    day: 3,
    title: "Fly to Jomsom & Trek to Kagbeni",
    altitude: "820m → 2,720m → 2,810m",
    distance: "20 min flight / 3-4 hrs trek",
    description: "Early morning flight from Pokhara to Jomsom, offering spectacular views of the Annapurna and Dhaulagiri ranges. Upon arrival in Jomsom, a windswept town in the Kali Gandaki Valley, we meet our trekking crew and begin our trek to Kagbeni. The trail follows the Kali Gandaki River through dramatic landscapes. Kagbeni is a fascinating village with narrow alleys, ancient monasteries, and traditional Tibetan-style houses - it's the official gateway to the Upper Mustang region.",
    overnight: "Teahouse in Kagbeni",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic mountain flight", "Kali Gandaki Valley", "Kagbeni village", "Gateway to Upper Mustang"],
  },
  {
    day: 4,
    title: "Trek to Chele",
    altitude: "2,810m → 3,050m",
    distance: "14km / 5-6 hrs",
    description: "Today we enter the restricted area of Upper Mustang. After a permit check at Kagbeni, the trail climbs steadily with stunning views of the arid landscape. We pass through Tangbe village with its narrow alleys and red and white chortens. The trail offers views of the Kali Gandaki gorge and the mysterious sky caves carved into cliffs. We cross a small pass before descending to Chele, a village surrounded by spectacular red cliffs.",
    overnight: "Teahouse in Chele",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Enter Upper Mustang", "Tangbe village", "Sky caves views", "Red cliff landscapes"],
  },
  {
    day: 5,
    title: "Trek to Syangboche",
    altitude: "3,050m → 3,475m",
    distance: "15km / 6-7 hrs",
    description: "A challenging but rewarding day crossing two passes - Taklam La (3,624m) and Dajori La (3,735m). The trail offers breathtaking panoramic views of Nilgiri, Annapurna, and Tilicho Peak. We pass through Samar village with its barley fields and chortens. The landscape becomes increasingly dramatic with colorful rock formations and deep canyons. Syangboche is a small settlement with basic teahouses and stunning mountain views.",
    overnight: "Teahouse in Syangboche",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Taklam La Pass", "Dajori La Pass", "Samar village", "Panoramic mountain views"],
  },
  {
    day: 6,
    title: "Trek to Ghami",
    altitude: "3,475m → 3,520m",
    distance: "14km / 5-6 hrs",
    description: "Today we cross Yamda La Pass (3,850m) with spectacular views of the Mustang Valley. The trail passes through juniper forests and offers glimpses of wild blue sheep. We visit the longest mani wall in Mustang, stretching nearly 1km, covered with intricately carved stones. Ghami village is known for its red chortens and traditional Tibetan architecture. The Ghami monastery is worth visiting for its ancient murals.",
    overnight: "Teahouse in Ghami",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yamda La Pass", "Longest mani wall in Mustang", "Ghami monastery", "Tibetan architecture"],
  },
  {
    day: 7,
    title: "Trek to Tsarang",
    altitude: "3,520m → 3,620m",
    distance: "14km / 5-6 hrs",
    description: "After crossing the Ghami River via a suspension bridge, we climb towards Choya La Pass (3,870m) with stunning views of the surrounding peaks. The descent leads to Tsarang, a village dominated by a five-story fortress and a red Gompa. The Tsarang monastery houses ancient Buddhist texts and beautiful murals. The village offers a glimpse into traditional Mustangi life with its whitewashed houses and barley fields.",
    overnight: "Teahouse in Tsarang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Choya La Pass", "Tsarang fortress", "Red Gompa monastery", "Traditional Mustangi village"],
  },
  {
    day: 8,
    title: "Trek to Lo Manthang",
    altitude: "3,620m → 3,840m",
    distance: "10km / 4-5 hrs",
    description: "A relatively easy day as we approach the walled capital of Lo Manthang. The trail crosses Lo La Pass (3,950m) offering the first glimpse of the forbidden city - a breathtaking view of whitewashed houses surrounded by mud-brick walls. Lo Manthang feels like stepping back in time, with its narrow streets, ancient monasteries, and the four-story royal palace. The feeling of entering this legendary kingdom is truly magical.",
    overnight: "Teahouse in Lo Manthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Lo La Pass", "First view of Lo Manthang", "Walled city entrance", "Four-story royal palace"],
  },
  {
    day: 9,
    title: "Exploration Day in Lo Manthang",
    altitude: "3,840m",
    distance: "Exploration",
    description: "A full day to explore the mysteries of Lo Manthang. Visit the King's Palace, a four-story structure in the center of town where the Raja (king) still resides. Explore the three main gompas: Thubchen Gompa with its 55 columns and stunning murals, Jampa Gompa housing a massive Maitreya Buddha statue, and Chodi Gompa. Optionally, take a jeep or hike to Chhoser to see the ancient sky caves - thousands of cave dwellings carved into cliffs over 2,000 years ago. The caves were used for meditation, burial, and refuge.",
    overnight: "Teahouse in Lo Manthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["King's Palace visit", "Thubchen Gompa", "Jampa Gompa", "Chhoser sky caves"],
  },
  {
    day: 10,
    title: "Trek to Drakmar",
    altitude: "3,840m → 3,820m",
    distance: "13km / 6-7 hrs",
    description: "We leave Lo Manthang via a different route, visiting Ghar Gompa, one of Mustang's oldest monasteries perched on a cliff. The monastery contains ancient rock paintings and is still an active meditation site. The trail continues through dramatic red cliffs to Drakmar (meaning 'red cliff'), a village surrounded by stunning rock formations. The afternoon light on the cliffs creates a magical atmosphere.",
    overnight: "Teahouse in Drakmar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ghar Gompa", "Ancient rock paintings", "Dramatic red cliffs", "Scenic valley views"],
  },
  {
    day: 11,
    title: "Trek to Ghiling",
    altitude: "3,820m → 3,860m",
    distance: "12km / 5-6 hrs",
    description: "Today we trek through some of the most remote sections of Mustang, crossing several small passes with spectacular views of the surrounding mountains. The landscape alternates between barren deserts and green valleys where villagers grow barley and buckwheat. Ghiling is a prosperous village with a large Gompa and traditional water mills. The local monastery welcomes visitors to see its collection of thangkas and ancient texts.",
    overnight: "Teahouse in Ghiling",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Remote mountain passes", "Barley fields", "Ghiling Gompa", "Traditional water mills"],
  },
  {
    day: 12,
    title: "Trek to Chhusang",
    altitude: "3,860m → 3,050m",
    distance: "15km / 6-7 hrs",
    description: "A long descent day as we leave the high plateau behind. The trail passes through beautiful valleys with colorful rock formations and offers final glimpses of the Mustang landscape. We pass through the village of Chuksang with its impressive red cliffs and ancient cave dwellings. Chhusang is situated at the confluence of two rivers, surrounded by towering cliffs with caves visible in the rock faces.",
    overnight: "Teahouse in Chhusang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Colorful rock formations", "Chuksang village", "River confluence", "Cave dwellings"],
  },
  {
    day: 13,
    title: "Trek to Jomsom",
    altitude: "3,050m → 2,720m",
    distance: "12km / 4-5 hrs",
    description: "Our final day of trekking follows the Kali Gandaki River back to Jomsom. The trail is relatively easy with gentle gradients, offering different perspectives of the valley we first entered days ago. Arrive in Jomsom by early afternoon with time to celebrate your Upper Mustang achievement. Enjoy hot showers, explore the town, and sample local apple brandy. Evening celebration with your trekking team.",
    overnight: "Teahouse in Jomsom",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Kali Gandaki Valley", "Jomsom arrival", "Celebration dinner"],
  },
  {
    day: 14,
    title: "Fly to Pokhara & Drive to Kathmandu",
    altitude: "2,720m → 820m → 1,400m",
    distance: "20 min flight / 6-7 hrs drive",
    description: "Early morning flight back to Pokhara with final aerial views of the Himalayas. Upon arrival, transfer to a tourist bus or private vehicle for the scenic drive back to Kathmandu. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy free time for souvenir shopping or final exploration of Thamel. Evening farewell dinner celebrating your journey to the Forbidden Kingdom.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: ["Scenic mountain flight", "Farewell to Mustang", "Thamel exploration", "Celebration dinner"],
  },
  {
    day: 15,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of walking through the ancient walled city of Lo Manthang and exploring the mystical landscapes of the Forbidden Kingdom.",
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
  "Assistant guide for groups of 4 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Round-trip flights Pokhara - Jomsom - Pokhara",
  "Upper Mustang Restricted Area Permit ($500 for first 10 days)",
  "Annapurna Conservation Area Permit (ACAP)",
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Kathmandu)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Upper Mustang region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Welcome dinner in Kathmandu",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,000m & helicopter evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($3-5 per use)",
  "Alcoholic beverages and soft drinks (including famous local apple brandy)",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Jeep rental for optional Chhoser cave excursion in Lo Manthang",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
];

const gallery = [
  {
    src: "/images/used/upper-mustang-1.avif",
    alt: "Lo Manthang Walled City",
    caption: "Lo Manthang - The Walled Capital",
  },
  {
    src: "/images/used/upper-mustang-2.avif",
    alt: "Upper Mustang Landscape",
    caption: "High-Altitude Desert of Mustang",
  },

];

export default function UpperMustangTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Upper Mustang Forbidden Kingdom Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Upper Mustang Trek - Himkala Adventure");
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
            src="/images/used/upper-mustang-main-page.avif"
            alt="Upper Mustang Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Mustang Region
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Moderate
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Castle className="w-3 h-3 mr-1" /> Forbidden Kingdom
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              UPPER MUSTANG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                FORBIDDEN KINGDOM TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Journey to the ancient walled city of Lo Manthang, explore mysterious sky caves, 
              and experience preserved Tibetan Buddhist culture in Nepal's forbidden kingdom.
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
                <div className="text-xs text-slate-400 line-through">$3,200</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,895</div>
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
                      <span className="text-white/50 text-sm line-through">$3,200</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,895</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $305</Badge>
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
                        <span className="font-medium text-[#0f2940]">Jomsom</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Lo La Pass (3,950m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Permit Cost</span>
                        <span className="font-medium text-[#0f2940]">$500 (first 10 days)</span>
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
                    The <strong>Upper Mustang Trek</strong> takes you to the legendary "Forbidden Kingdom," a remote and restricted region near the Tibetan border that was closed to outsiders until 1992. This unique trek offers a journey through a high-altitude desert landscape of dramatic red cliffs, deep canyons, and ancient cave dwellings carved into sheer rock faces.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The cultural heart of the trek is <strong>Lo Manthang</strong>, the walled capital of the former Kingdom of Mustang, where Tibetan Buddhist culture has remained remarkably preserved for centuries. Here you'll explore ancient monasteries with stunning murals, visit the four-story royal palace where the king still resides, and wander through narrow streets that feel frozen in time.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Unlike any other trek in Nepal, Upper Mustang lies in the Himalayan rain shadow, offering dry trails even during monsoon season. The landscape resembles the Tibetan plateau - barren yet stunningly beautiful, with colorful rock formations, the world's deepest gorge (Kali Gandaki), and panoramic views of Annapurna, Dhaulagiri, and Nilgiri. This trek requires a special permit ($500 for 10 days) and must be arranged through a registered trekking agency.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Explore Lo Manthang - the ancient walled capital of the Mustang Kingdom",
                    "Visit mysterious sky caves carved into cliffs over 2,000 years ago",
                    "Ancient Buddhist monasteries with centuries-old murals and thangkas",
                    "High-altitude desert landscapes with dramatic red cliffs and canyons",
                    "Kali Gandaki - the world's deepest gorge",
                    "Preserved Tibetan Buddhist culture and traditional villages",
                    "Spectacular views of Annapurna, Dhaulagiri, and Nilgiri",
                    "Tiji Festival experience (if visiting in May) - masked dances and rituals",
                    "Longest mani wall in Mustang with intricately carved prayer stones",
                    "Remote and restricted area with few trekkers - a true off-the-beaten-path adventure",
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
                        Pleasant temperatures, blooming wildflowers, and clear skies. The famous Tiji Festival takes place in May - a three-day Buddhist festival with masked dances and rituals in Lo Manthang.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect trekking conditions. Excellent visibility for mountain photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Upper Mustang lies in the rain shadow and can be trekked year-round, though winter (Dec-Feb) is very cold with possible snow.</p>
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
                    <li>• <strong>Special Permit Required:</strong> Upper Mustang is a restricted area requiring a permit costing $500 per person for the first 10 days, then $50 per additional day.</li>
                    <li>• <strong>Travel Insurance is Mandatory</strong> and must cover high altitude trekking up to 4,000m and emergency helicopter evacuation.</li>
                    <li>• <strong>Guide Required:</strong> You must trek with a licensed guide in this restricted region - independent trekking is not permitted.</li>
                    <li>• <strong>Wind & Dust:</strong> Afternoon winds are strong - bring a good quality dust mask/buff and windproof jacket.</li>
                    <li>• <strong>Flight Delays:</strong> Jomsom flights can be delayed due to weather - we recommend keeping buffer days in your schedule.</li>
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
                      q: "Why is Upper Mustang called the 'Forbidden Kingdom'?",
                      a: "Upper Mustang was a restricted kingdom closed to outsiders until 1992 to preserve its unique Tibetan Buddhist culture. The capital, Lo Manthang, was never conquered by neighboring kingdoms and maintained its independence, with its own king, until recently.",
                    },
                    {
                      q: "How much does the Upper Mustang permit cost?",
                      a: "The restricted area permit costs $500 per person for the first 10 days, then $50 per additional day. This is set by the Nepali government and must be arranged through a registered trekking agency.",
                    },
                    {
                      q: "Is Upper Mustang difficult to trek?",
                      a: "The trek is rated as moderate. Altitudes are lower than Everest or Annapurna (max 3,950m), so altitude risk is minimal. The main challenges are strong afternoon winds, dusty trails, and long walking days.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Teahouses in Upper Mustang are basic but comfortable, with twin-sharing rooms and shared bathrooms. Facilities are simpler than in Everest or Annapurna but clean and welcoming. Hot showers are available at most lodges for an extra fee.",
                    },
                    {
                      q: "Can I trek Upper Mustang during monsoon?",
                      a: "Yes! Upper Mustang lies in the Himalayan rain shadow, so it receives minimal rainfall even during monsoon (June-August). This makes it one of the few treks in Nepal that's viable during the rainy season, though clouds may obscure mountain views.",
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