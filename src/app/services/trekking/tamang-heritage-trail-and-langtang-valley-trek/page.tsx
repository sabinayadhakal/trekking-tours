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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Syabrubesi",
    "altitude": "1,350m → 1,550m",
    "distance": "122km / 7-8 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Syabrubesi, the gateway to both the Tamang Heritage Trail and Langtang Valley. The journey follows the Trishuli River valley through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through Dhunche (1,950m), the district headquarters of Rasuwa, where your Langtang National Park permit will be checked. The road winds through hillside forests with occasional views of Ganesh Himal (7,422m). Arrive in Syabrubesi (1,550m), a charming village situated at the confluence of the Bhote Koshi and Trishuli Rivers. Check into your teahouse, meet your trekking crew, and prepare for the adventure ahead. Evening briefing on the Tamang Heritage Trail and Langtang Valley route.",
    "overnight": "Teahouse in Syabrubesi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Trishuli River drive", "Ganesh Himal views", "Dhunche permit check", "Gateway to Tamang Heritage Trail", "Syabrubesi arrival"]
  },
  {
    "day": 2,
    "title": "Trek from Syabrubesi to Gatlang",
    "altitude": "1,550m → 2,238m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Your Tamang Heritage Trail trek begins! You cross the Bhote Koshi River and start a steady ascent through pine forests and terraced fields. The trail passes through Goljung village, offering your first taste of Tamang culture with its traditional stone houses, colorful prayer flags, and friendly locals. A viewpoint along the way provides spectacular panoramic views of Ganesh Himal (7,422m) and the Langtang range. Gatlang (2,238m) is a beautiful Tamang village perched on a hillside, known for its traditional architecture, Parvatikunda Lake (a sacred pond), and warm hospitality. Experience a traditional Tamang welcome and enjoy cultural interactions with locals. Visit the local monastery and explore the village's stone-paved streets. Overnight in Gatlang.",
    "overnight": "Teahouse/Homestay in Gatlang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First Tamang village experience", "Goljung village", "Ganesh Himal views", "Parvatikunda Lake", "Traditional Tamang welcome"]
  },
  {
    "day": 3,
    "title": "Trek from Gatlang to Tatopani",
    "altitude": "2,238m → 2,607m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Today's trail descends to the Thangbuche River, crossing a suspension bridge, then climbs steadily through terraced fields and beautiful rhododendron forests. The effort is rewarded with stunning views of Ganesh Himal and the Langtang range throughout the day, with the peaks seeming to follow you as you trek. Tatopani (2,607m), meaning 'hot water' in Nepali, is famous for its natural hot springs. Soak your tired muscles in the warm, mineral-rich waters (approximately 40°C/104°F) - a truly rejuvenating experience believed to have healing properties for aching muscles and joints. The village is nestled in a beautiful valley surrounded by forests and mountains. Overnight in Tatopani.",
    "overnight": "Teahouse in Tatopani",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Suspension bridge crossing", "Rhododendron forests", "Ganesh Himal and Langtang views", "Natural hot springs soak", "Therapeutic mineral waters"]
  },
  {
    "day": 4,
    "title": "Trek from Tatopani to Thuman via Nagthali",
    "altitude": "2,607m → 3,165m → 2,338m",
    "distance": "12km / 6-7 hrs trek",
    "description": "A challenging but rewarding day as you climb to Nagthali (3,165m), the highest point of the Tamang Heritage Trail. Nagthali was once a meditation retreat for Tibetan Buddhist monks and still maintains a peaceful, spiritual atmosphere with stunning mountain views. The viewpoint offers breathtaking 360-degree panoramas of the Langtang range, Ganesh Himal, and even glimpses of the Tibetan plateau on clear days. After soaking in the views and having a packed lunch, you descend through rhododendron and pine forests to Thuman (2,338m), a large traditional Tamang village with intricately carved wooden houses, ancient monasteries, prayer flags fluttering in the wind, and spectacular mountain views. Explore the village and interact with friendly locals. Overnight in Thuman.",
    "overnight": "Teahouse in Thuman",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Nagthali viewpoint (3,165m)", "360-degree Himalayan panorama", "Meditation retreat site", "Traditional Thuman village", "Ancient monasteries"]
  },
  {
    "day": 5,
    "title": "Trek from Thuman to Briddim",
    "altitude": "2,338m → 2,345m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Today's trail takes you through beautiful rhododendron and oak forests, with occasional openings revealing stunning mountain views of Ganesh Himal and Langtang Lirung. You'll pass through the village of Timure, located near the Tibetan border, where you can visit the historic Rasuwagadi Fort - a reminder of ancient Nepal-Tibet trade relations and the old salt trade route. Briddim (2,345m) is a charming Tamang village nestled at the foot of Langtang Himal, with distinctive stone houses with wooden shingle roofs. Experience authentic homestay hospitality, learn about traditional weaving, and enjoy cultural performances arranged by the local community. The village has a unique layout with narrow stone-paved alleys and a beautiful monastery. Overnight in Briddim.",
    "overnight": "Teahouse/Homestay in Briddim",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Rhododendron and oak forests", "Rasuwagadi Fort", "Tibetan border proximity", "Traditional weaving demonstrations", "Briddim village homestay"]
  },
  {
    "day": 6,
    "title": "Trek from Briddim to Sherpa Gaon",
    "altitude": "2,345m → 2,500m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A relatively short day allowing for gradual acclimatization and cultural exploration. The trail continues through beautiful forests and terraced fields, with stunning views of the surrounding peaks. Sherpa Gaon (2,500m) is a traditional Sherpa village that offers a unique blend of Sherpa and Tamang culture. The village is named after the Sherpa community who migrated here centuries ago and still maintain their distinct traditions, architecture, and Buddhist practices. Explore the village with its mani walls, prayer wheels, chortens, and a beautiful monastery. The views of Langtang Lirung and the surrounding peaks are spectacular from this vantage point. This is an excellent spot for photography and cultural immersion before continuing to the Langtang Valley. Overnight in Sherpa Gaon.",
    "overnight": "Teahouse in Sherpa Gaon",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Short acclimatization day", "Traditional Sherpa village", "Sherpa-Tamang cultural blend", "Mani walls and prayer wheels", "Langtang Lirung views"]
  },
  {
    "day": 7,
    "title": "Trek from Sherpa Gaon to Lama Hotel",
    "altitude": "2,500m → 2,380m",
    "distance": "14km / 6-7 hrs trek",
    "description": "You leave the Tamang Heritage Trail and join the classic Langtang Valley route. The trail descends through dense forests of oak, rhododendron, and bamboo, following the Langtang Khola river. This section is rich in wildlife - keep your eyes open for langur monkeys swinging through the trees, and if you're extremely lucky, the endangered red panda in the dense bamboo thickets. The forest is magical with moss-covered trees, colorful rhododendrons (blooming spectacularly in March-April), and the sound of the river below. Lama Hotel (2,380m) is a cluster of teahouses nestled in the forest beside the roaring river, marking your entry into the main Langtang Valley. Overnight in Lama Hotel.",
    "overnight": "Teahouse in Lama Hotel",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Join Langtang Valley trail", "Wildlife spotting (langur monkeys)", "Dense bamboo forests", "Rhododendron and oak forests", "Lama Hotel arrival"]
  },
  {
    "day": 8,
    "title": "Trek from Lama Hotel to Langtang Village",
    "altitude": "2,380m → 3,430m",
    "distance": "14km / 6-7 hrs trek",
    "description": "Today the valley opens up dramatically as you gain altitude, offering your first breathtaking views of Langtang Lirung (7,227m) and other surrounding peaks. The trail passes through Ghoda Tabela (3,000m) - meaning 'horse stable' - a clearing with teahouses and yak pastures where you can see grazing yaks and horses. Above the tree line, you enter alpine terrain with beautiful mani walls, prayer flags, and traditional stone houses. Langtang Village (3,430m) was devastated by the 2015 earthquake but has been beautifully rebuilt, showcasing the incredible resilience of the local Tamang community. The village offers stunning mountain views and a chance to interact with friendly locals and hear their stories of rebuilding. Visit the memorial chorten dedicated to those who lost their lives. Overnight in Langtang Village.",
    "overnight": "Teahouse in Langtang Village",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Langtang Lirung (7,227m)", "Ghoda Tabela yak pastures", "Alpine terrain with mani walls", "Rebuilt Langtang Village", "Earthquake memorial chorten"]
  },
  {
    "day": 9,
    "title": "Trek from Langtang Village to Kyanjin Gompa",
    "altitude": "3,430m → 3,870m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A relatively short day allowing for gradual acclimatization before the optional climbs tomorrow. The trail follows a broad, open valley with stunning mountain scenery on all sides - Langtang Lirung (7,227m) dominates the skyline, while peaks like Gangchempo (6,387m), Langtang II, and Dorje Lakpa surround you. You'll pass through Mundu village with its ancient chortens, prayer wheels, and traditional stone houses. Continue past yak pastures with grazing animals and beautiful mountain streams. Kyanjin Gompa (3,870m) is the last settlement in the Langtang Valley, a beautiful village dominated by its ancient Buddhist monastery (gompa) and surrounded by towering peaks. Visit the famous Kyanjin Cheese Factory, established by Swiss experts in the 1950s, to sample delicious yak cheese, curd, and fresh bread. Explore the monastery with its centuries-old Buddhist artifacts. Overnight in Kyanjin Gompa.",
    "overnight": "Teahouse in Kyanjin Gompa",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Broad valley panorama", "Mundu village chortens", "Yak pastures", "Kyanjin Gompa monastery", "Yak cheese factory visit and tasting"]
  },
  {
    "day": 10,
    "title": "Exploration Day - Kyanjin Ri or Tserko Ri",
    "altitude": "3,870m → 4,773m / 4,985m → 3,870m",
    "distance": "8-12km / 5-8 hrs hike",
    "description": "The highlight of the Langtang Valley section! Choose your adventure based on fitness and weather. Kyanjin Ri (4,773m) offers a challenging 2-3 hour climb to a spectacular ridge with 360-degree views of the entire Langtang range including Langtang Lirung (7,227m), Langtang II, Dorje Lakpa (6,966m), and Yala Peak (5,732m). For experienced trekkers seeking an extra challenge, Tserko Ri (4,985m) is a longer, steeper climb with even more dramatic panoramas stretching to the Tibetan plateau. As the sun rises, the peaks glow golden - an unforgettable experience. After descending, explore the ancient Kyanjin Gompa monastery more thoroughly, walk to the glacial moraine of Langtang Lirung, visit the yak cheese factory again, or simply relax and soak in the mountain atmosphere. Overnight at Kyanjin Gompa.",
    "overnight": "Teahouse in Kyanjin Gompa",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Kyanjin Ri sunrise (4,773m)", "Tserko Ri option (4,985m)", "360-degree Himalayan panorama", "Langtang Lirung glacial moraine", "Yak cheese factory tasting"]
  },
  {
    "day": 11,
    "title": "Trek from Kyanjin Gompa to Lama Hotel",
    "altitude": "3,870m → 2,380m",
    "distance": "18km / 6-7 hrs trek",
    "description": "Today you retrace your steps down the Langtang Valley, descending through Kyanjin Gompa, Mundu village, and Langtang Village. The descent offers completely different perspectives of the mountains and valley - the peaks that towered above you on the way up now appear from new angles. You'll pass through Ghoda Tabela with its yak pastures and continue into the lush forests. The forest feels magical in the afternoon light as you return to Lama Hotel (2,380m) for the night. This long descent day allows time to reflect on the incredible experiences of the past days - the mountain views, the rebuilt villages, and the warm hospitality of the Tamang people. Overnight in a comfortable teahouse at Lama Hotel.",
    "overnight": "Teahouse in Lama Hotel",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Descending through Langtang Valley", "New mountain perspectives", "Ghoda Tabela yak pastures", "Forest return", "Reflection time"]
  },
  {
    "day": 12,
    "title": "Trek from Lama Hotel to Syabrubesi",
    "altitude": "2,380m → 1,550m",
    "distance": "15km / 5-6 hrs trek",
    "description": "Your final day of trekking on the Tamang Heritage Trail and Langtang Valley combined journey. The trail descends through beautiful forests of oak, rhododendron, and bamboo, following the Langtang Khola downstream. You'll cross several suspension bridges and pass through the small settlements of Bamboo and Domen. The rushing river, lush forest, and occasional waterfall create a peaceful farewell to the Langtang region. Arrive in Syabrubesi (1,550m) by early afternoon. Check into your teahouse, take a well-deserved hot shower, and enjoy cold drinks and snacks. In the evening, celebrate your successful Tamang Heritage Trail and Langtang Valley trek achievement - including your climb to Kyanjin Ri or Tserko Ri - with a celebration dinner with your guide and porters. Overnight in Syabrubesi.",
    "overnight": "Teahouse in Syabrubesi",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of combined trek", "Suspension bridge crossings", "Forest descent", "Syabrubesi arrival", "Celebration dinner with team"]
  },
  {
    "day": 13,
    "title": "Drive from Syabrubesi to Kathmandu",
    "altitude": "1,550m → 1,350m",
    "distance": "122km / 7-8 hrs drive",
    "description": "After breakfast in Syabrubesi, begin your scenic drive back to Kathmandu along the Trishuli River, retracing your journey from nearly two weeks ago. The drive offers beautiful views of river valleys, rolling hills, terraced farmlands, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. The drive is a wonderful opportunity to reflect on your Tamang Heritage Trail and Langtang Valley adventure - the natural hot springs at Tatopani, the spiritual Nagthali viewpoint, the traditional villages of Gatlang, Thuman, Briddim, and Sherpa Gaon, the breathtaking views from Kyanjin Ri or Tserko Ri, the rebuilt Langtang Village, and the warm hospitality of the Tamang and Sherpa people. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your successful Tamang Heritage Trail and Langtang Valley trek achievement - a unique journey combining cultural immersion with Himalayan mountain views.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic drive to Kathmandu", "Trishuli River and countryside views", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
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
    src: "/images/used/ganjala-pass-1.avif",
    alt: "Kyanjin Gompa",
    caption: "Kyanjin Gompa with Langtang Lirung",
  },
 
  {
    src: "/images/used/tamang-heritage-1.avif",
    alt: "Tamang Village",
    caption: "Traditional Tamang Village - Thuman",
  },
  {
    src: "/images/used/tht-2.avif",
    alt: "Nagthali Viewpoint",
    caption: "Nagthali Viewpoint (3,165m)",
  },
  
  {
    src: "/images/used/langtang-1.avif",
    alt: "Kyanjin Ri",
    caption: "Sunrise from Kyanjin Ri (4,773m)",
  },
];

export default function TamangHeritageLangtangTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Tamang Heritage & Langtang Valley Trek";

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
            src="/images/used/tht-4.avif"
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
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6 justify-center">
              <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MapPin className="w-3 h-3 mr-1" /> Langtang Region
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Moderate
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Tamang Heritage
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              TAMANG HERITAGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                & LANGTANG VALLEY TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              A perfect blend of cultural immersion and Himalayan scenery - trek through traditional Tamang villages, 
              soak in natural hot springs, and explore the majestic Langtang Valley.
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
                <div className="text-xs text-slate-400 line-through">$1,350</div>
                <div className="text-lg font-bold text-[#0f2940]">$1,195</div>
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
                      <span className="text-white/50 text-sm line-through">$1,350</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,195</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $155</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>13 Days / 12 Nights</span>
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
                        <span>Teahouse & Homestay</span>
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
                    The <strong>Tamang Heritage and Langtang Valley Trek</strong> is a unique combination of cultural immersion and spectacular Himalayan scenery, offering one of Nepal's most rewarding and accessible trekking experiences. This 14-day journey takes you through the recently opened Tamang Heritage Trail, restricted until 2004, and into the majestic Langtang Valley, known as the "Valley of Glaciers."
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trek begins with cultural exploration in traditional Tamang villages like Gatlang, Tatopani, Thuman, and Briddim, where you'll experience authentic Tibetan-influenced Buddhist culture, ancient monasteries, and warm homestay hospitality. A highlight is soaking in the natural hot springs at Tatopani, believed to have healing properties. From Nagthali viewpoint (3,165m), you'll enjoy panoramic views of the Langtang and Ganesh Himal ranges.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The second half of the trek follows the classic Langtang Valley route to <strong>Kyanjin Gompa (3,870m)</strong>, with optional hikes to Kyanjin Ri (4,773m) or Tserko Ri (4,985m) for breathtaking 360-degree Himalayan panoramas. This moderate trek is perfect for those seeking authentic cultural encounters, diverse wildlife including red pandas and Himalayan black bears, and stunning mountain scenery without the crowds of Everest or Annapurna.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
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
                        Rhododendron forests burst into vibrant red, pink, and white blooms. Mild temperatures, clear skies, and excellent visibility. The most colorful time to trek.
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
                        Crystal-clear skies, stable weather, and perfect trekking conditions. Lush green trails after monsoon and spectacular mountain views. Festival atmosphere with local celebrations.
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
                    <li>• <strong>Permits:</strong> Langtang National Park Entry Permit (NPR 3,000) and TIMS card (NPR 2,000) are required - bring two passport photos.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,000m and helicopter evacuation.</li>
                    <li>• <strong>Homestay Experience:</strong> In Tamang villages, accommodation may be basic homestays with shared facilities - embrace the authentic cultural experience.</li>
                    <li>• <strong>Physical Preparation:</strong> You'll trek 5-7 hours daily with some steep sections - good fitness and prior training recommended.</li>
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
                      q: "How difficult is the Tamang Heritage and Langtang Valley Trek?",
                      a: "The trek is rated as moderate. You'll trek 5-7 hours daily on well-maintained trails with some steep sections, particularly to Nagthali and Kyanjin Ri. The highest point is 4,985m at Tserko Ri, so proper acclimatization is important. No technical experience is required, and it's suitable for beginners with good fitness.",
                    },
                    {
                      q: "What is unique about the Tamang Heritage Trail?",
                      a: "The Tamang Heritage Trail was restricted until 2004 and offers authentic cultural immersion in traditional Tamang villages with Tibetan Buddhist heritage. You'll experience homestays, cultural performances, ancient monasteries, and the famous natural hot springs at Tatopani. The Tamang people are descendants of Tibetan horse traders who have preserved their unique language and customs.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Accommodation varies from basic homestays in Tamang villages to teahouses along the Langtang Valley. Rooms typically have twin beds with foam mattresses and shared bathrooms. Hot showers and charging are available for small fees. Homestays offer an authentic cultural experience with local families.",
                    },
                    {
                      q: "What wildlife might I see?",
                      a: "Langtang National Park is home to red pandas, Himalayan black bears, musk deer, langur monkeys, and over 250 bird species. The forests between Lama Hotel and Ghoda Tabela are prime red panda habitat, though sightings require luck.",
                    },
                    {
                      q: "Do I need special permits for this trek?",
                      a: "You need a Langtang National Park Entry Permit and TIMS card. No special restricted area permits are required as the Tamang Heritage Trail is now open. Your trekking agency will arrange these permits for you.",
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