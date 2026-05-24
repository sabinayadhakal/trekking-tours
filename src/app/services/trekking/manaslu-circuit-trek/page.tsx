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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    "day": 1,
    "title": "Drive from Kathmandu to Machha Khola",
    "altitude": "1,400m → 890m",
    "distance": "150km / 8-9 hrs drive",
    "description": "Early morning departure from your hotel in Kathmandu for the scenic drive to Machha Khola, the traditional starting point of the Manaslu Circuit Trek. The journey follows the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. You'll pass through Dhading Besi and Arughat before reaching Soti Khola. The road then continues along the Budhi Gandaki River through increasingly rugged terrain to Machha Khola (890m), a small village named for the 'fish river' that flows beside it. Check into your teahouse, meet your trekking crew, and prepare for the adventure ahead. Evening briefing on the Manaslu Circuit route, including the Larkya La Pass (5,106m) crossing.",
    "overnight": "Teahouse in Machha Khola",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Trishuli River drive", "Arughat and Soti Khola pass through", "Budhi Gandaki River views", "Machha Khola arrival", "Manaslu Circuit briefing"]
  },
  {
    "day": 2,
    "title": "Trek from Machha Khola to Jagat",
    "altitude": "890m → 1,340m",
    "distance": "14km / 6-7 hrs trek",
    "description": "Your Manaslu Circuit trek begins! Today's trail follows the Budhi Gandaki River through a narrowing gorge with dramatic scenery. You'll cross the river multiple times on suspension bridges, passing through the villages of Khursane and Labubesi. The trail winds through subtropical forests with sal trees, bamboo, and banana plants. Watch for langur monkeys swinging through the trees. You'll pass through Khorlabesi, known for its natural hot springs, and Tatopani (meaning 'hot water') before reaching Jagat (1,340m). Jagat marks the entry point to the Manaslu Conservation Area, where your permits will be checked. This is a beautiful village perched on a ridge with traditional stone houses. Overnight in Jagat.",
    "overnight": "Teahouse in Jagat",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Budhi Gandaki River gorge", "Suspension bridge crossings", "Khorlabesi hot springs", "Manaslu Conservation Area entry", "Jagat village arrival"]
  },
  {
    "day": 3,
    "title": "Trek from Jagat to Namrung",
    "altitude": "1,340m → 2,660m",
    "distance": "15km / 7-8 hrs trek",
    "description": "A significant altitude gain day as you climb deeper into the Manaslu region. From Jagat, you cross a dramatic suspension bridge and begin climbing through terraced farmlands and forests. The trail passes through Salleri and Deng, where Tibetan influence begins to appear with mani walls, chortens, and prayer flags. As you continue climbing through rhododendron and pine forests, the landscape becomes more alpine. You'll pass through Ghap before reaching Namrung (2,660m), a picturesque village with traditional flat-roofed stone houses decorated with colorful prayer flags. Here, the Nubri Valley opens up with stunning views of the surrounding peaks. Overnight in Namrung.",
    "overnight": "Teahouse in Namrung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Dramatic suspension bridge crossing", "First mani walls and chortens", "Rhododendron and pine forests", "Nubri Valley views", "Namrung Tibetan village"]
  },
  {
    "day": 4,
    "title": "Trek from Namrung to Shyala",
    "altitude": "2,660m → 3,520m",
    "distance": "9km / 5-6 hrs trek",
    "description": "Today you continue gaining altitude with spectacular mountain views beginning to appear. The trail passes through the villages of Lihi and Sho, with the first breathtaking glimpses of Mount Manaslu (8,163m), Ngadi Himal, and Himal Chuli. The landscape becomes more alpine with juniper forests and yak pastures. Shyala (3,520m) is a small settlement situated on a ridge with stunning panoramic views of the Manaslu range. The village has a beautiful gompa and offers opportunities to interact with local Tibetan Buddhist communities. The afternoon light on Manaslu is spectacular from this vantage point. Overnight in Shyala.",
    "overnight": "Teahouse in Shyala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["First views of Mount Manaslu (8,163m)", "Lihi and Sho villages", "Ngadi Himal and Himal Chuli views", "Alpine juniper forests", "Shyala ridge panorama"]
  },
  {
    "day": 5,
    "title": "Trek from Shyala to Samagaon via Pungyen Gompa Hike",
    "altitude": "3,520m → 3,530m (with detour)",
    "distance": "8km / 5-6 hrs trek + hike",
    "description": "Today's highlight is the hike to the ancient Pungyen Gompa (literally 'Fairy Tale Gompa'), perched on a hillside with spectacular views of Manaslu's north face. From Shyala, you first descend slightly before climbing to the gompa, which sits at approximately 3,800m. The gompa is partly in ruins but holds deep spiritual significance for local Buddhists. From here, the panoramic views of Manaslu, Ngadi Himal, and the glacier below are breathtaking. After exploring the gompa, you continue to Samagaon (also called Sama - 3,530m), the largest village on the Manaslu Circuit. Samagaon is a traditional Tibetan village with flat-roofed stone houses, a school, several gompas, and stunning surrounding peaks. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Pungyen Gompa hike", "Manaslu north face views", "Ruins of ancient gompa", "Tibetan Buddhist spirituality", "Samagaon village arrival"]
  },
  {
    "day": 6,
    "title": "Acclimatization Day in Samagaon - Birendra Lake & Manaslu Base Camp Hike",
    "altitude": "3,530m → 4,400m → 3,530m",
    "distance": "10-12km / 5-6 hrs round trip",
    "description": "A crucial acclimatization day before the challenging Larkya La Pass crossing. The golden rule: climb high, sleep low. Today you'll experience some of the most spectacular scenery of the entire trek. Start with a morning hike to Birendra Tal (Birendra Lake), a stunning turquoise glacial lake at approximately 3,700m, fed by the melting ice of the Manaslu Glacier. The reflection of Manaslu in the crystal-clear waters is unforgettable. From there, continue toward Manaslu Base Camp (4,400m) for even closer views of the massive south face of Manaslu, hanging glaciers, and the Khumbu-like icefall. This hike is challenging but provides excellent acclimatization for the high pass ahead. Return to Samagaon for lunch. The afternoon is free to explore Samagaon village, visit the local gompa, or simply rest and hydrate. Overnight in Samagaon.",
    "overnight": "Teahouse in Samagaon",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Birendra Lake turquoise waters", "Manaslu Glacier views", "Manaslu Base Camp hike (4,400m)", "Manaslu south face close-up", "Acclimatization for Larkya La"]
  },
  {
    "day": 7,
    "title": "Trek from Samagaon to Samdo",
    "altitude": "3,530m → 3,860m",
    "distance": "7km / 4-5 hrs trek",
    "description": "A relatively easy day with gradual climbing, allowing for continued acclimatization. The trail follows the valley northward with spectacular views of Manaslu, Samdo Peak (6,325m), and surrounding glaciers. You'll pass through Kermo Kharka, a seasonal grazing area with yak pastures, and walk through juniper forests. Samdo (3,860m) is the last major village before the Larkya La Pass crossing. This remote settlement has strong Tibetan heritage, with locals who still speak Tibetan dialect and maintain traditional customs. Some families still trade with Tibet via the nearby Lajyang border crossing. Explore the village with its prayer wheels, mani walls, and traditional flat-roofed houses. Overnight in Samdo.",
    "overnight": "Teahouse in Samdo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Kermo Kharka yak pastures", "Juniper forests", "Samdo Peak views", "Remote Tibetan village culture", "Samdo arrival"]
  },
  {
    "day": 8,
    "title": "Acclimatization Day in Samdo - Optional Hike to Tibet Border",
    "altitude": "3,860m → 4,200m → 3,860m",
    "distance": "8-10km / 4-5 hrs round trip",
    "description": "Another vital acclimatization day before attempting the high Larkya La Pass (5,106m) tomorrow. Today you have the option of hiking toward the Tibetan border at Lajyang (approximately 4,200m). This trail follows the valley northward, passing through stark, high-altitude landscapes with stunning views of the surrounding peaks and the Lajyang Valley. The border area is fascinating, with evidence of old trade routes between Nepal and Tibet. On clear days, you can see into the Tibetan Autonomous Region. Alternatively, you can explore the side valley toward the Gya La pass or simply rest and prepare for the challenging day ahead. Your guide will provide a detailed briefing on the Larkya La crossing, including weather conditions, pacing, and safety protocols. Overnight in Samdo.",
    "overnight": "Teahouse in Samdo",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Optional Tibet border hike (Lajyang)", "High-altitude stark landscapes", "Old Nepal-Tibet trade route", "Final acclimatization for Larkya La", "Pass crossing preparation briefing"]
  },
  {
    "day": 9,
    "title": "Trek from Samdo to Dharmasala (Larkya Phedi)",
    "altitude": "3,860m → 4,460m",
    "distance": "8km / 4-5 hrs trek",
    "description": "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as you climb above the tree line. The trail follows the valley, passing through rocky moraine and crossing streams. You'll see stunning views of Samdo Peak, Larkya Peak, and the surrounding glaciers. Dharmasala (4,460m), also known as Larkya Phedi, is a basic stone shelter serving as the final stop before the pass crossing. The accommodation here is very basic - this is a true high-altitude camp. Rest early, organize your gear for tomorrow's pre-dawn start, and try to sleep as conditions allow. Your guide will check weather conditions and confirm the departure time (typically 3-4 AM). Overnight at Dharmasala.",
    "overnight": "Basic Lodge at Dharmasala",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Alpine terrain above tree line", "Samdo Peak and Larkya Peak views", "High camp experience", "Pass preparation", "Dharmasala arrival"]
  },
  {
    "day": 10,
    "title": "Cross Larkya La Pass & Trek to Bimthang",
    "altitude": "4,460m → 5,106m → 3,720m",
    "distance": "23km / 10-12 hrs trek",
    "description": "The most challenging and rewarding day of the Manaslu Circuit Trek! Start very early (3-4 AM) to reach the pass before weather conditions deteriorate. The climb from Dharmasala is steady on a moraine path with stone cairns marking the way. The altitude is extreme, so move slowly, breathe deeply, and rest frequently. Reaching Larkya La Pass (5,106m) - the highest point of the trek - is an indescribable feeling. Prayer flags flutter in the wind as you take in the 360-degree panoramic views: Mount Manaslu (8,163m), Himlung Himal (7,126m), Cheo Himal (6,820m), Gyaji Kang, Kang Guru, and Annapurna II in the distance. After celebrating at the pass, begin the long descent to Bimthang (3,720m) through glacial moraine, past yak pastures, and finally into a beautiful valley with rhododendron forests. This is a very long, tiring day but absolutely unforgettable. Overnight in Bimthang.",
    "overnight": "Teahouse in Bimthang",
    "meals": "Breakfast, Packed Lunch, Dinner",
    "highlights": ["Larkya La Pass crossing (5,106m)", "360-degree Himalayan panorama", "Manaslu, Himlung, Annapurna views", "Prayer flag-adorned summit", "Glacial moraine and descent"]
  },
  {
    "day": 11,
    "title": "Trek from Bimthang to Tilje & Jeep to Besisahar",
    "altitude": "3,720m → 2,300m → 760m",
    "distance": "12km trek / 3-4 hrs trek + 4-5 hrs jeep",
    "description": "Your final day of trekking on the Manaslu Circuit. From Bimthang, the trail descends through beautiful rhododendron and pine forests, passing through the villages of Gho, Karche, and finally Tilje (2,300m). You'll cross several streams and suspension bridges, with the landscape transforming from alpine to subtropical. The views back toward the Manaslu range are spectacular. Upon arrival in Tilje, you'll board a private jeep for the scenic drive to Besisahar (760m), the district headquarters of Lamjung and the traditional trailhead for the Annapurna Circuit. The jeep drive follows the Marsyangdi River through dramatic gorges and past terraced farmlands. Arrive in Besisahar by late afternoon. Check into your teahouse and celebrate your incredible achievement - crossing Larkya La Pass (5,106m) and completing the Manaslu Circuit! Overnight in Besisahar.",
    "overnight": "Teahouse in Besisahar",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of Manaslu Circuit trek", "Rhododendron and pine forests", "Tilje village arrival", "Scenic jeep ride to Besisahar", "Manaslu Circuit completion celebration"]
  },
  {
    "day": 12,
    "title": "Bus from Besisahar to Kathmandu",
    "altitude": "760m → 1,400m",
    "distance": "180km / 7-8 hrs bus",
    "description": "After breakfast in Besisahar, board a tourist bus for the scenic drive back to Kathmandu. The journey follows the Marsyangdi River valley before joining the Trishuli River, passing through beautiful landscapes, terraced farmlands, traditional villages, and dramatic river gorges. The bus journey is a wonderful opportunity to relax, reflect on your Manaslu Circuit adventure, and watch the world go by. You'll pass through Besisahar, Dumre, and eventually reach the outskirts of the Kathmandu Valley. Arrive in Kathmandu by late afternoon. Check into your hotel in Thamel, take a well-deserved hot shower, and enjoy the comforts of the city. The remainder of your day is free for souvenir shopping in Thamel, visiting a spa for a much-needed massage, or simply relaxing. In the evening, enjoy a farewell dinner celebrating your successful Manaslu Circuit trek achievement - crossing Larkya La Pass at 5,106m and completing one of Nepal's most spectacular restricted area treks.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic bus journey to Kathmandu", "Marsyangdi and Trishuli Rivers", "Rural Nepali landscapes", "Thamel souvenir shopping", "Farewell celebration dinner"]
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
  "Manaslu Restricted Area Permit",
  "Manaslu Conservation Area Permit (MCAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary",
  "First aid medical kit",
  "Oximeter to check pulse and oxygen saturation",
  "Sleeping bag (can be returned after trek)",
  "Down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Manaslu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "/images/used/manaslu-main-page.webp",
    alt: "Manaslu Mountain View",
    caption: "Mount Manaslu (8,163m)",
  },
  {
    src: "/images/used/manaslu-3.webp",
    alt: "Pungyen Gompa",
    caption: "Pungyen Gompa located at the base of Manaslu",
  },
  {
    src: "/images/used/manaslu-4.webp",
    alt: "Birendra Lake",
    caption: "Birendra Lake-- Manaslu glacial lake",
  },
  {
    src: "/images/used/manaslu-2.webp",
    alt: "Way to Namrung",
    caption: "Way to Namrung",
  },
 
];

export default function ManasluCircuitTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Manaslu Circuit Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Manaslu Circuit Trek - Himkala Adventure");
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
            src="/images/used/manaslu-1.webp"
            alt="Manaslu Circuit Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Manaslu Region
              </Badge>
              <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Challenging
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Restricted Area
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              MANASLU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CIRCUIT TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Circumnavigate the world&apos;s eighth highest mountain through remote Tibetan villages, 
              ancient monasteries, and cross the legendary Larkya La Pass at 5,106 meters.
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
                <div className="text-xs text-slate-400 line-through">$1,400</div>
                <div className="text-lg font-bold text-[#0f2940]">1,200</div>
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
                        <span className="text-white/50 text-sm line-through">$1,400</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,200</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $200</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>12 Days / 11 Nights</span>
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
                          <span className="text-slate-500">Start/End</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek Start</span>
                          <span className="font-medium text-[#0f2940]">Soti Khola</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek End</span>
                          <span className="font-medium text-[#0f2940]">Dharapani</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">5,106m</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trekking Days</span>
                          <span className="font-medium text-[#0f2940]">12 Days</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Permits</span>
                          <span className="font-medium text-[#0f2940]">RAP, MCAP, ACAP</span>
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
                    The Manaslu Circuit Trek is one of Nepal&apos;s most rewarding yet challenging treks, 
                    circumnavigating <strong>Mount Manaslu (8,163m)</strong>, the eighth highest mountain 
                    in the world. Often called the &quot;Killer Mountain&quot; due to its steep faces and 
                    unpredictable weather, Manaslu offers trekkers a unique blend of natural beauty 
                    and cultural immersion.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Unlike the more popular Annapurna and Everest regions, the Manaslu area remained 
                    closed to foreigners until 1991. This restricted access has preserved its pristine 
                    environment and authentic Tibetan Buddhist culture.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    The crown jewel of this trek is the crossing of <strong>Larkya La Pass (5,106m)</strong>, 
                    one of the highest and most spectacular passes in Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Cross Larkya La Pass (5,106m)",
                    "Views of Mt. Manaslu (8,163m)",
                    "Remote Tibetan Buddhist villages",
                    "Ancient monasteries & gompas",
                    "Pristine & less crowded trails",
                    "Rich cultural heritage",
                    "Diverse landscapes & ecosystems",
                    "Optional Manaslu Base Camp visit",
                    "Birendra Tal glacial lake",
                    "Authentic teahouse experience",
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
                        Rhododendrons bloom in vibrant colors, temperatures warm up, and skies are generally 
                        clear.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Recommended</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with stable weather, crystal-clear visibility, and comfortable 
                        temperatures.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">What&apos;s Included</h2>
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
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,500m.</li>
                    <li>• The Manaslu region is a <strong>restricted area</strong> requiring a special permit.</li>
                    <li>• We recommend starting physical preparation <strong>2-3 months before your trek</strong>.</li>
                    <li>• The itinerary may be modified due to weather conditions or other circumstances.</li>
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
                      q: "How difficult is the Manaslu Circuit Trek?",
                      a: "The trek is rated as challenging due to its length (16 days), high altitude (crossing Larkya La at 5,106m), and remote terrain. Good physical fitness is essential, and previous trekking experience at altitude is recommended.",
                    },
                    {
                      q: "Do I need a guide for this trek?",
                      a: "Yes, the Manaslu region is a restricted area, and trekking independently is not permitted. You must be accompanied by a licensed guide and have all necessary permits arranged through a registered trekking agency.",
                    },
                    {
                      q: "What about altitude sickness?",
                      a: "The itinerary includes two acclimatization days (at Samagaon and Samdo) to help your body adjust. Our guides are trained in altitude sickness recognition and carry oximeters. We recommend Diamox and following proper hydration protocols.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Accommodation is in basic teahouses/lodges throughout the trek. Expect simple rooms with twin beds, shared bathrooms, and limited facilities. Hot showers and charging are available at extra cost in most places.",
                    },
                    {
                      q: "Is the Manaslu trek crowded?",
                      a: "No, Manaslu sees far fewer trekkers than Everest or Annapurna regions due to permit restrictions and its remote nature. This is one of its biggest attractions - you'll enjoy a more authentic and peaceful experience.",
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