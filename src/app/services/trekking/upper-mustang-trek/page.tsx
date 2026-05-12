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
    "day": 1,
    "title": "Drive from Kathmandu to Pokhara",
    "altitude": "1,400m → 820m",
    "distance": "200km / 6-7 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Pokhara, the gateway to the Annapurna region and the starting point for the Upper Mustang Trek. The journey follows the Prithvi Highway along the winding Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through charming towns and witness daily Nepali rural life along the way, with occasional views of Manaslu and Ganesh Himal on clear days. Arrive in Pokhara (820m), Nepal's second-largest city and the beautiful lake city. Check into your lakeside hotel and enjoy free time to explore Phewa Lake - take a boat ride, visit the Tal Barahi Temple in the middle of the lake, or simply relax with stunning views of the Annapurna range and Machhapuchhre (Fishtail) reflecting on the water. In the evening, explore Lakeside's vibrant restaurants, bars, and shops, and prepare your gear for the adventure ahead. Evening briefing on the Upper Mustang restricted area regulations and permit requirements.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Prithvi Highway drive", "Trishuli River views", "Rural Nepali countryside", "Phewa Lake and mountain reflections", "Upper Mustang trek briefing"]
  },
  {
    "day": 2,
    "title": "Fly from Pokhara to Jomsom & Trek to Kagbeni",
    "altitude": "820m → 2,720m → 2,810m",
    "distance": "20 min flight / 3-4 hrs trek",
    "description": "Early morning flight from Pokhara to Jomsom, offering spectacular aerial views of the Annapurna and Dhaulagiri ranges, the Kali Gandaki Gorge (the world's deepest gorge), and the dramatic mountain landscapes. The 20-minute flight is an experience in itself, with the Himalayas seemingly close enough to touch. Upon arrival at Jomsom Airport (2,720m), a windswept town in the Kali Gandaki Valley, you'll meet your trekking crew and porters. After organizing gear, begin your trek to Kagbeni. The trail follows the Kali Gandaki River north through dramatic, arid landscapes with views of Nilgiri and Dhaulagiri. Kagbeni (2,810m) is a fascinating village with narrow alleys, ancient monasteries, traditional Tibetan-style houses, and red chortens. Kagbeni serves as the official gateway to the Upper Mustang region - here, your restricted area permits will be checked. Overnight in Kagbeni.",
    "overnight": "Teahouse in Kagbeni",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic mountain flight to Jomsom", "Annapurna and Dhaulagiri aerial views", "Kali Gandaki Valley", "Kagbeni village arrival", "Upper Mustang permit checkpoint"]
  },
  {
    "day": 3,
    "title": "Trek from Kagbeni to Chele",
    "altitude": "2,810m → 3,050m",
    "distance": "14km / 5-6 hrs trek",
    "description": "Today you enter the restricted area of Upper Mustang - the legendary Forbidden Kingdom that remained closed to foreigners until 1992. After the permit check at Kagbeni, the trail climbs steadily through the arid, lunar-like landscape with stunning views of Nilgiri and the surrounding peaks. You'll pass through Tangbe village with its narrow alleys, whitewashed houses, and red and white chortens. The trail offers views of the Kali Gandaki gorge and the mysterious sky caves carved into the cliffs - ancient cave dwellings used for meditation, burial, and refuge, some dating back over 2,000 years. You'll cross a small pass before descending to Chele (3,050m), a village surrounded by spectacular red cliffs and colorful rock formations. Overnight in Chele.",
    "overnight": "Teahouse in Chele",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Enter restricted Upper Mustang", "Tangbe village", "Sky caves views", "Red cliff landscapes", "Chele village arrival"]
  },
  {
    "day": 4,
    "title": "Trek from Chele to Syangboche",
    "altitude": "3,050m → 3,475m",
    "distance": "15km / 6-7 hrs trek",
    "description": "A challenging but rewarding day crossing two high passes on the Upper Mustang trek. The trail climbs steadily out of Chele, reaching Taklam La Pass (3,624m) with breathtaking panoramic views of Nilgiri (7,061m), Annapurna I (8,091m), and Tilicho Peak (7,134m). After descending, you'll climb to Dajori La Pass (3,735m), offering even more dramatic views of the Mustang Valley and the surrounding peaks. The trail passes through Samar village, a small settlement with barley fields, chortens, and a few teahouses nestled in a green oasis. The landscape becomes increasingly dramatic with colorful rock formations, deep canyons, and barren desert terrain. Syangboche (3,475m) is a small settlement with basic teahouses and stunning mountain views. Overnight in Syangboche.",
    "overnight": "Teahouse in Syangboche",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Taklam La Pass (3,624m)", "Dajori La Pass (3,735m)", "Nilgiri and Annapurna views", "Samar village oasis", "Syangboche arrival"]
  },
  {
    "day": 5,
    "title": "Trek from Syangboche to Ghami",
    "altitude": "3,475m → 3,520m",
    "distance": "14km / 5-6 hrs trek",
    "description": "Today you cross Yamda La Pass (3,850m), the highest point of today's trek, with spectacular 360-degree views of the Mustang Valley and the surrounding peaks. The trail passes through juniper forests - a rare sight in this arid region - and offers glimpses of wild blue sheep (bharal) grazing on the hillsides. You'll visit the longest mani wall in Mustang, stretching nearly 1 kilometer along the trail, covered with intricately carved prayer stones (mani) and colorful prayer flags. Ghami village (3,520m) is known for its red chortens, traditional Tibetan-style flat-roofed stone houses, and whitewashed walls. The Ghami Monastery is worth visiting for its ancient murals, thangkas, and peaceful atmosphere. The village has a unique layout with narrow alleys and a large entrance gate. Overnight in Ghami.",
    "overnight": "Teahouse in Ghami",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Yamda La Pass (3,850m)", "Juniper forests", "Longest mani wall in Mustang (1km)", "Wild blue sheep spotting", "Ghami monastery and village"]
  },
  {
    "day": 6,
    "title": "Trek from Ghami to Tsarang",
    "altitude": "3,520m → 3,620m",
    "distance": "14km / 5-6 hrs trek",
    "description": "After crossing the Ghami River via a suspension bridge, you climb steadily towards Choya La Pass (3,870m) with stunning views of the surrounding peaks and the deep valleys below. The descent leads to Tsarang (3,620m), a village dominated by a magnificent five-story white fortress (the Tsarang Fortress or King's Palace) and a red Gompa (monastery). The Tsarang Monastery houses ancient Buddhist texts, beautiful murals, thangkas, and a large collection of statues. The village offers a glimpse into traditional Mustangi life with its whitewashed houses, narrow streets, barley fields, and apple orchards. The fortress is an impressive structure that once served as the residence of the local king. Overnight in Tsarang.",
    "overnight": "Teahouse in Tsarang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Suspension bridge crossing", "Choya La Pass (3,870m)", "Tsarang five-story fortress", "Red Gompa monastery", "Traditional Mustangi village"]
  },
  {
    "day": 7,
    "title": "Trek from Tsarang to Lo Manthang",
    "altitude": "3,620m → 3,840m",
    "distance": "10km / 4-5 hrs trek",
    "description": "A relatively easy day as you approach the legendary walled capital of the Mustang Kingdom - Lo Manthang! The trail crosses Lo La Pass (3,950m), offering the first breathtaking glimpse of the Forbidden City - a stunning view of whitewashed houses surrounded by massive mud-brick walls, with the four-story royal palace rising above the town. The feeling of entering this legendary kingdom is truly magical and surreal, as if stepping back in time several centuries. Lo Manthang (3,840m) is the cultural and political heart of Upper Mustang, with its narrow streets, ancient monasteries, chortens, and the famous four-story royal palace where the Raja (king) still resides. The town is surrounded by a 6-meter-high mud-brick wall with four gates. Check into your teahouse and explore the town. Overnight in Lo Manthang.",
    "overnight": "Teahouse in Lo Manthang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Lo La Pass (3,950m)", "First breathtaking view of Lo Manthang", "Walled Forbidden City", "Four-story royal palace", "Lo Manthang arrival celebration"]
  },
  {
    "day": 8,
    "title": "Exploration Day in Lo Manthang - Monasteries & Sky Caves",
    "altitude": "3,840m",
    "distance": "Exploration / Optional hike to Chhoser (3-4 hrs)",
    "description": "A full day to explore the mysteries and wonders of Lo Manthang, the Forbidden Kingdom! Visit the King's Palace (Raja's Palace), a four-story structure in the center of town where the Mustang King, Jigme Dorje Palbar Bista, still resides. Explore the three main gompas of Lo Manthang: Thubchen Gompa, a massive complex with 55 columns and stunning 15th-century murals depicting Buddhist deities and mandalas; Jampa Gompa, housing a massive 15-meter-tall Maitreya Buddha statue; and Chodi Gompa, a smaller but equally fascinating monastery. For an even more incredible experience, take an optional jeep or hike to Chhoser to see the ancient sky caves - thousands of man-made cave dwellings carved into vertical cliffs over 2,000 years ago. The caves were used for meditation, burial, and refuge. The views of the Himalayan peaks from the caves are spectacular. In the evening, witness a traditional cultural performance if available. Overnight in Lo Manthang.",
    "overnight": "Teahouse in Lo Manthang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["King's Palace visit", "Thubchen Gompa (55 columns, 15th-century murals)", "Jampa Gompa (15m Maitreya Buddha)", "Chodi Gompa", "Chhoser sky caves (optional)"]
  },
  {
    "day": 9,
    "title": "Trek from Lo Manthang to Drakmar via Ghar Gompa",
    "altitude": "3,840m → 3,820m",
    "distance": "13km / 6-7 hrs trek",
    "description": "Today you leave Lo Manthang via a different route, allowing you to experience more of Mustang's hidden gems. You'll visit Ghar Gompa, one of Mustang's oldest and most sacred monasteries, dramatically perched on a cliff face. The monastery dates back to the 8th century and contains ancient rock paintings, Buddhist artifacts, and meditation caves. It is still an active meditation site for Buddhist monks. The trail continues through dramatic red cliffs, deep canyons, and barren landscapes that feel like another planet. Drakmar (3,820m) means 'red cliff' in Tibetan, and the village is surrounded by stunning red rock formations that glow beautifully in the afternoon light. The village has a few teahouses and offers spectacular sunset views. Overnight in Drakmar.",
    "overnight": "Teahouse in Drakmar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Leave Lo Manthang via different route", "Ghar Gompa (8th-century cliff monastery)", "Ancient rock paintings", "Dramatic red cliffs", "Drakmar 'red cliff' village"]
  },
  {
    "day": 10,
    "title": "Trek from Drakmar to Ghiling",
    "altitude": "3,820m → 3,860m",
    "distance": "12km / 5-6 hrs trek",
    "description": "Today you trek through some of the most remote and spectacular sections of Upper Mustang. The trail crosses several small passes with spectacular views of the surrounding mountains, including Nilgiri, Annapurna, and Dhaulagiri in the distance. The landscape alternates between barren, moon-like deserts and green valleys where villagers grow barley, buckwheat, and potatoes using traditional irrigation methods. You'll pass through small, isolated settlements with chortens and prayer flags fluttering in the wind. Ghiling (3,860m) is a prosperous village with a large Gompa (monastery) and traditional water mills. The local monastery welcomes visitors to see its collection of thangkas (Buddhist paintings) and ancient texts. Overnight in Ghiling.",
    "overnight": "Teahouse in Ghiling",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Remote mountain passes", "Isolated settlements", "Barley and buckwheat fields", "Ghiling Gompa", "Traditional water mills"]
  },
  {
    "day": 11,
    "title": "Trek from Ghiling to Chhusang",
    "altitude": "3,860m → 3,050m",
    "distance": "15km / 6-7 hrs trek",
    "description": "A long descent day as you leave the high Mustang plateau behind. The trail passes through beautiful valleys with colorful rock formations - red, yellow, green, and white bands of rock create a natural canvas. You'll have final glimpses of the Mustang landscape before descending into the Kali Gandaki Valley. You'll pass through Chuksang village with its impressive red cliffs and ancient cave dwellings carved into the rock faces. Chhusang (3,050m) is situated at the dramatic confluence of two rivers, surrounded by towering cliffs with caves visible high in the rock faces. The village has a few teahouses and offers beautiful views. Overnight in Chhusang.",
    "overnight": "Teahouse in Chhusang",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Leave Mustang plateau", "Colorful rock formations", "Chuksang village", "River confluence", "Chhusang arrival"]
  },
  {
    "day": 12,
    "title": "Trek from Chhusang to Jomsom",
    "altitude": "3,050m → 2,720m",
    "distance": "12km / 4-5 hrs trek",
    "description": "Your final day of trekking on the Upper Mustang journey follows the Kali Gandaki River back to Jomsom. The trail is relatively easy with gentle gradients, offering completely different perspectives of the valley you first entered days ago. The landscape gradually becomes less arid as you approach Jomsom, with more vegetation and settlements along the way. Arrive in Jomsom (2,720m) by early afternoon. Check into your teahouse, take a well-deserved hot shower, and enjoy the simple pleasures of civilization. Explore Jomsom town - known for its apple orchards, apple brandy, and beautiful views of Nilgiri and Dhaulagiri. In the evening, celebrate your incredible Upper Mustang achievement - visiting the Forbidden Kingdom of Lo Manthang - with a celebration dinner with your trekking team. Overnight in Jomsom.",
    "overnight": "Teahouse in Jomsom",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Upper Mustang trek", "Kali Gandaki Valley return", "Jomsom arrival", "Apple brandy tasting", "Celebration dinner with team"]
  },
  {
    "day": 13,
    "title": "Fly from Jomsom to Pokhara & Drive to Kathmandu",
    "altitude": "2,720m → 820m → 1,400m",
    "distance": "20 min flight / 6-7 hrs drive",
    "description": "Early morning flight from Jomsom back to Pokhara - a spectacular 20-minute flight with final aerial views of the Annapurna and Dhaulagiri ranges, the Kali Gandaki Gorge, and the beautiful mountain landscapes you've been trekking through. Upon arrival at Pokhara's domestic airport, you'll be transferred to the tourist bus station. Board a tourist bus for the scenic drive back to Kathmandu along the Prithvi Highway, following the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your incredible Upper Mustang trek achievement - walking through the ancient walled city of Lo Manthang, visiting the Forbidden Kingdom that only a few thousand trekkers experience each year, and exploring the mystical landscapes of this hidden Himalayan kingdom.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": ["Scenic Jomsom to Pokhara flight", "Final Annapurna and Dhaulagiri views", "Scenic drive to Kathmandu", "Thamel souvenir shopping", "Farewell celebration dinner"]
  }
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
                <div className="text-xs text-slate-400 line-through">$2,900</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,595</div>
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
                      <span className="text-white/50 text-sm line-through">$2,900</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,595</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $305</Badge>
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