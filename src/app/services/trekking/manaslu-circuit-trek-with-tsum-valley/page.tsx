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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Thamel. After check-in, attend a comprehensive trek briefing where we'll discuss the route, check your gear, and handle permit arrangements. Bring two passport-sized photographs for your trekking permits. Evening free to explore the vibrant streets of Thamel or rest after your journey. Welcome dinner with traditional Nepali cuisine where you'll meet your trek guide. ",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Trek briefing", "Gear check", "Permit arrangements", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Drive to Machha Khola",
    altitude: "1,400m → 890m",
    distance: "150km / 8-9 hrs drive",
    description: "Early morning departure from Kathmandu for the scenic drive to Machha Khola. The journey follows the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. We pass through Arughat before the road becomes rougher, following the Budhi Gandaki River. The drive offers glimpses of Ganesh Himal and the dramatic river gorge. Arrive in Machha Khola, a small settlement named after the 'Fish River' that flows through it. Check into your teahouse and prepare for the trek ahead. ",
    overnight: "Teahouse in Machha Khola",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic river drive", "Ganesh Himal views", "Budhi Gandaki River", "Gateway to Manaslu"],
  },
  {
    day: 3,
    title: "Trek to Jagat",
    altitude: "890m → 1,410m",
    distance: "20km / 6-7 hrs",
    description: "Our trek begins! We follow the Budhi Gandaki River upstream, crossing several suspension bridges and passing through subtropical forests. The trail passes through Khursane and Labubesi, with occasional waterfalls and landslide areas. After crossing a long suspension bridge, we climb stone steps to Jagat, a beautiful stone-paved village that serves as the official entry point to the Manaslu Conservation Area. Here we register our permits at the checkpoint. ",
    overnight: "Teahouse in Jagat",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Suspension bridge crossings", "Subtropical forests", "Permit checkpoint", "Stone-paved village"],
  },
  {
    day: 4,
    title: "Trek to Lokpa",
    altitude: "1,410m → 2,240m",
    distance: "18km / 6-7 hrs",
    description: "Today we enter the restricted Tsum Valley region. After a short climb to Salleri, we walk along scenic riverbanks and cross the Budhi Gandaki on a long suspension bridge. The trail opens up as we head toward Philim, passing through Sirdibas. At Ekle Bhatti, the trail splits—we take the right-hand trail that ascends through dense forest and narrow gorges toward Lokpa, the first village in Tsum Valley. The landscape becomes increasingly dramatic as we gain altitude. ",
    overnight: "Teahouse in Lokpa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Enter Tsum Valley", "Forest ascent", "Dramatic gorges", "Remote wilderness"],
  },
  {
    day: 5,
    title: "Trek to Chumling",
    altitude: "2,240m → 2,386m",
    distance: "10km / 4-5 hrs",
    description: "A relatively short day allowing for acclimatization. We descend through forest and cross a stream on a bridge, then ascend steeply on stone stairs through rhododendron and pine forests. The trail offers beautiful views of Ganesh Himal and the surrounding peaks. We pass through Ripchet before reaching Chumling (Lower Tsum), a traditional village with ancient monasteries and stone houses. Chumling is the administrative center of Tsum Valley and offers a fascinating glimpse into Tibetan-influenced culture. ",
    overnight: "Teahouse in Chumling",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rhododendron forests", "Ganesh Himal views", "Traditional architecture", "Lower Tsum Valley"],
  },
  {
    day: 6,
    title: "Trek to Chhokang Paro",
    altitude: "2,386m → 3,031m",
    distance: "11km / 5-6 hrs",
    description: "Today we trek through beautiful landscapes with stunning views of Ganesh Himal and Sringi Himal. The trail crosses a suspension bridge and passes through fields of potatoes and maize. We cross the Serpu Khola and gradually ascend to Chhokang Paro, also known as Chekampar, the main village of Upper Tsum. On clear days, you'll see amazing views of Mt. Himalchuli (7,893m). The village has several monasteries and traditional Tibetan-style houses. ",
    overnight: "Teahouse in Chhokang Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ganesh Himal panorama", "Traditional villages", "Upper Tsum Valley", "Himalchuli views"],
  },
  {
    day: 7,
    title: "Trek to Rachen Gompa & Nile",
    altitude: "3,031m → 3,240m → 3,361m",
    distance: "12km / 5-6 hrs",
    description: "We trek through small villages and ascend to a ridge reaching the courtyard of Rachen Gompa (3,240m), one of the oldest monasteries in Tsum Valley. The monastery houses ancient Buddhist texts and beautiful murals. From here, we continue to visit Milarepa's Cave (Piren Phu Cave), where the great Tibetan sage is said to have meditated—his footprint is believed to be set in the stone. We cross the Siyar Khola and pass through the hamlets of Phurbe and Pangdun before reaching Nile village, nestled beneath towering cliffs. ",
    overnight: "Teahouse in Nile",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rachen Gompa", "Milarepa's Cave", "Sacred footprint", "Cliff-side village"],
  },
  {
    day: 8,
    title: "Hike to Mu Gompa & Return to Chhokang Paro",
    altitude: "3,361m → 3,700m → 3,031m",
    distance: "16km / 7-8 hrs",
    description: "Early start for the highlight of Tsum Valley—a hike to Mu Gompa (3,700m), the largest monastery in the region. The trail follows the west bank of the river with spectacular views of chortens and the Tibetan mountains beyond. Mu Gompa offers breathtaking panoramic views of the Himalaya and a peaceful, spiritual atmosphere. On the way, we also visit Dephyudonma Gompa. After exploring the monasteries, we return to Chhokang Paro for overnight stay. ",
    overnight: "Teahouse in Chhokang Paro",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Mu Gompa (3,700m)", "Largest Tsum monastery", "Tibetan mountain views", "Dephyudonma Gompa"],
  },
  {
    day: 9,
    title: "Trek to Deng",
    altitude: "3,031m → 1,860m",
    distance: "21km / 6-7 hrs",
    description: "We leave Tsum Valley and descend back to the main Manaslu Circuit trail. The long descent retraces our steps through Chumling and Lokpa before joining the main valley at Deng. The dramatic change in vegetation and temperature is striking as we lose altitude. Deng is a small settlement with basic teahouses, nestled beside the river. ",
    overnight: "Teahouse in Deng",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Descend Tsum Valley", "Rejoin Manaslu Circuit", "Changing vegetation", "Riverside settlement"],
  },
  {
    day: 10,
    title: "Trek to Namrung",
    altitude: "1,860m → 2,660m",
    distance: "22km / 6-7 hrs",
    description: "The trail follows the Budhi Gandaki upstream through beautiful forests and traditional villages. We pass through Philim, where we re-register at the checkpoint, and continue through pine and rhododendron forests. The valley narrows as we approach Namrung, a traditional village with stunning views of Sringi Himal and the surrounding peaks. The Tibetan influence becomes more evident in the architecture and culture. ",
    overnight: "Teahouse in Namrung",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Budhi Gandaki Valley", "Sringi Himal views", "Tibetan architecture", "Cultural transition"],
  },
  {
    day: 11,
    title: "Trek to Shyala",
    altitude: "2,660m → 3,520m",
    distance: "10km / 4-5 hrs",
    description: "A shorter day allowing for gradual acclimatization. The trail continues through forests and opens up to alpine meadows with increasingly dramatic mountain views. We pass through Lihi and Sho villages before reaching Shyala, a small settlement with teahouses and spectacular views of Manaslu North and the surrounding peaks. The afternoon is free to rest and enjoy the mountain panorama. ",
    overnight: "Teahouse in Shyala",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Alpine meadows", "Manaslu North views", "Acclimatization", "Mountain panorama"],
  },
  {
    day: 12,
    title: "Trek to Samagaon",
    altitude: "3,520m → 3,530m",
    distance: "19km / 7-8 hrs",
    description: "Today we catch our first breathtaking views of Mount Manaslu (8,163m), the world's eighth highest peak. The trail passes through Lho village with its ancient monastery and continues through beautiful terrain with stunning mountain panoramas. Samagaon (also called Sama) is the largest village on the circuit, with a gompa (monastery) and school. This traditional Tibetan village is surrounded by dramatic peaks including Manaslu, Ngadi Himal, and Himal Chuli. ",
    overnight: "Teahouse in Samagaon",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Mt. Manaslu", "Lho monastery", "Samagaon village", "Stunning mountain panorama"],
  },
  {
    day: 13,
    title: "Acclimatization Day - Manaslu Base Camp Hike",
    altitude: "3,530m → 4,800m → 3,530m",
    distance: "14km / 6-7 hrs",
    description: "A crucial rest day for acclimatization with an optional hike to Manaslu Base Camp (4,800m) for spectacular close-up views of Manaslu's south face and the Punggen Glacier. The trail offers incredible views of Manaslu, Himal Chuli, and the surrounding peaks. Alternatively, you can hike to Birendra Tal, a beautiful glacial lake, or explore Samagaon village and visit the ancient Pungyen Gompa. This acclimatization is essential for the challenging Larkya La crossing ahead. ",
    overnight: "Teahouse in Samagaon",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Manaslu Base Camp hike", "Punggen Glacier", "Birendra Tal lake", "Acclimatization"],
  },
  {
    day: 14,
    title: "Trek to Samdo",
    altitude: "3,530m → 3,690m",
    distance: "8km / 3-4 hrs",
    description: "A relatively easy day with gradual climbing. The trail offers spectacular views of Manaslu, Samdo Peak, and surrounding glaciers. We pass through Kermo Kharka and juniper forests before reaching Samdo, the last major village before the pass. This remote settlement has strong Tibetan heritage, and locals still trade with Tibet via the nearby Lajyang border. The village has a small monastery and stunning mountain views. ",
    overnight: "Teahouse in Samdo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Spectacular mountain views", "Juniper forests", "Remote Tibetan village", "Lajyang border"],
  },
  {
    day: 15,
    title: "Trek to Dharmasala (Larkya Phedi)",
    altitude: "3,690m → 4,460m",
    distance: "12km / 4-5 hrs",
    description: "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as we climb above the tree line. The trail passes through Larkya Bazaar, an old trading post, before reaching Dharmasala (also called Larkya Phedi), a basic stone shelter serving as the final stop before the pass crossing. Rest early, prepare your gear, and try to sleep as conditions allow. We'll start very early tomorrow morning. ",
    overnight: "Basic Lodge/Dharmasala",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["High camp experience", "Alpine terrain", "Larkya Bazaar", "Pass preparation"],
  },
  {
    day: 16,
    title: "Cross Larkya La Pass to Bimthang",
    altitude: "4,460m → 5,106m → 3,720m",
    distance: "23km / 10-11 hrs",
    description: "The most challenging and rewarding day of the trek! We start at 3-4 AM to reach the pass before conditions deteriorate. The climb is steady on a moraine path with cairns marking the way. At Larkya La (5,106m), prayer flags flutter in the wind and 360-degree views reveal Manaslu, Himlung Himal, Cheo Himal, Annapurna II, and the Tibetan peaks beyond. The long descent to Bimthang passes through glacial moraine, past beautiful glacial lakes, and through yak pastures. This is a tiring but unforgettable day. ",
    overnight: "Teahouse in Bimthang",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Larkya La Pass (5,106m)", "360-degree Himalayan panorama", "Glacial lakes", "Prayer flag-adorned summit"],
  },
  {
    day: 17,
    title: "Trek to Dharapani",
    altitude: "3,720m → 1,820m",
    distance: "20km / 6-7 hrs",
    description: "A long descent day through dramatically changing landscapes. From alpine terrain, we descend through rhododendron forests, crossing streams and passing through Gurung villages. The vegetation transforms from alpine to temperate to subtropical. At Dharapani, we join the Annapurna Circuit trail and reach the road head. The village marks our transition back to more accessible regions. Celebrate your incredible achievement of crossing Larkya La and exploring both Tsum Valley and Manaslu Circuit! ",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dramatic landscape change", "Rhododendron forests", "Gurung villages", "Join Annapurna Circuit"],
  },
  {
    day: 18,
    title: "Drive to Kathmandu",
    altitude: "1,820m → 1,400m",
    distance: "8-9 hrs drive",
    description: "Our trekking adventure concludes as we drive back to Kathmandu. From Dharapani, we drive to Besisahar, then continue along the scenic Prithvi Highway to Kathmandu. The journey offers beautiful views of rural landscapes, river valleys, and terraced farmlands. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy a well-deserved hot shower. Evening farewell dinner with your trekking team, celebrating your incredible journey through Tsum Valley and across Larkya La Pass. ",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "Trek completion", "Farewell dinner with team", "Celebration"],
  },
  {
    day: 19,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of exploring the sacred Tsum Valley, crossing the legendary Larkya La Pass, and standing in the shadow of Mount Manaslu. ",
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
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Manaslu Restricted Area Permit (RAP)",
  "Tsum Valley Restricted Area Permit",
  "Manaslu Conservation Area Permit (MCAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "All ground transportation as per itinerary (Kathmandu-Machha Khola & Dharapani-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Manaslu and Tsum Valley region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Larkya La and Mu Gompa days",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,200m & helicopter evacuation)",
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
    src: "/images/used/tsum-4.avif",
    alt: "Tsum Valley",
    caption: "Sacred Tsum Valley with Ganesh Himal",
  },
  {
    src: "/images/used/manaslu-main-page.avif",
    alt: "Manaslu Mountain",
    caption: "Mount Manaslu (8,163m)",
  },
  {
    src: "/images/used/tsum-3.avif",
    alt: "Way to Tsum Valley",
    caption: "Way to Sacred Tsum Valley",
  },
  {
    src: "/images/used/tsum-valley-1.avif",
    alt: "Tsum Valley",
    caption: "Sacred Tsum Valley with Ganesh Himal",
  },
  
];

export default function ManasluTsumValleyTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Manaslu Circuit with Tsum Valley Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Manaslu Circuit with Tsum Valley Trek - Himkala Adventure");
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
            src="/images/used/tsum-valley-1.avif"
            alt="Manaslu Circuit with Tsum Valley Trek"
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
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Challenging
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Landmark className="w-3 h-3 mr-1" /> Tsum Valley
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              MANASLU CIRCUIT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                WITH TSUM VALLEY TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Explore the sacred Tsum Valley and circumnavigate Mount Manaslu—a journey through ancient monasteries, 
              remote Tibetan villages, and across the legendary Larkya La Pass.
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
                <div className="text-xs text-slate-400 line-through">$2,550</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,295</div>
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
                        <span className="text-white/50 text-sm line-through">$2,550</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,295</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $255</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>19 Days / 18 Nights</span>
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
                          <span className="text-slate-500">Trek Start</span>
                          <span className="font-medium text-[#0f2940]">Machha Khola</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek End</span>
                          <span className="font-medium text-[#0f2940]">Dharapani</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Larkya La (5,106m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Trekking Days</span>
                          <span className="font-medium text-[#0f2940]">16 Days</span>
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
                    The <strong>Manaslu Circuit with Tsum Valley Trek</strong> is one of Nepal's most authentic and rewarding Himalayan adventures, combining the sacred Tsum Valley with the classic Manaslu Circuit. This comprehensive journey takes you through two restricted regions rich in Tibetan Buddhist culture, culminating in the crossing of the legendary <strong>Larkya La Pass (5,106m)</strong> with spectacular views of Mount Manaslu (8,163m), the world's eighth highest peak.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trek begins in the subtropical forests of the Budhi Gandaki Valley before ascending to the remote <strong>Tsum Valley</strong>, a sacred Himalayan enclave opened to trekkers only in 2008. Here you'll explore ancient monasteries including <strong>Rachen Gompa, Mu Gompa, and Dephyudonma Gompa</strong>, visit <strong>Milarepa's Cave</strong> where the great Tibetan sage meditated, and experience the unique 'Shyagya' tradition of non-violence that has been practiced by the Tsumbas since 1920.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    After rejoining the main Manaslu Circuit, you'll trek through traditional Tibetan villages, past mani walls and chortens, with ever-present views of the towering Himalayas. The highlight is crossing <strong>Larkya La Pass</strong>, one of Nepal's longest high passes, where prayer flags flutter against a 360-degree panorama of peaks including Manaslu, Himlung Himal, Cheo Himal, Annapurna II, and Ganesh Himal. This challenging trek is ideal for experienced trekkers seeking deep cultural immersion, pristine wilderness, and the satisfaction of conquering a major Himalayan pass.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Explore the sacred Tsum Valley, opened to trekkers in 2008, with its ancient Tibetan Buddhist culture",
                    "Cross the legendary Larkya La Pass (5,106m) - one of Nepal's longest and most spectacular high passes",
                    "Visit ancient monasteries including Mu Gompa, Rachen Gompa, and Dephyudonma Gompa",
                    "Discover Milarepa's Cave and witness the footprint of the great Tibetan sage",
                    "Experience the unique 'Shyagya' tradition of non-violence practiced by Tsumba people since 1920",
                    "Panoramic views of Manaslu (8,163m), Himlung Himal, Cheo Himal, Annapurna II, and Ganesh Himal",
                    "Walk in the footsteps of ancient trading routes to Tibet through traditional villages",
                    "Remote wilderness with far fewer trekkers than Everest or Annapurna regions",
                    "Diverse landscapes from subtropical forests to alpine deserts and glacial moraines",
                    "Authentic cultural immersion with Tamang, Gurung, and Tibetan communities",
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
                        Rhododendrons bloom in vibrant colors, warming temperatures, and excellent visibility. Some snow may remain on Larkya La early in the season.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect conditions for crossing Larkya La. Peak season for mountain photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is very cold with heavy snow making the pass difficult. Monsoon (Jun-Aug) brings leeches and landslides - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> This trek requires four permits: Manaslu Restricted Area Permit, Tsum Valley Restricted Area Permit, Manaslu Conservation Area Permit (MCAP), and Annapurna Conservation Area Permit (ACAP). A new local permit (NPR 1000) is also required.</li>
                    <li>• <strong>Guide Mandatory:</strong> Independent trekking is not permitted in these restricted areas. You must trek with a licensed guide from a registered agency.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,200m and helicopter evacuation.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous trek with long days (8-10 hours on pass day), high altitude, and remote terrain. Excellent fitness and prior high-altitude experience required.</li>
                    <li>• <strong>Road Construction:</strong> Some sections, especially between Machha Khola and Jagat, may have road construction and occasional blasting. Your guide will ensure safe passage.</li>
                    <li>• <strong>Shyagya Tradition:</strong> In Tsum Valley, respect the non-violence tradition - do not kill any animals or insects.</li>
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
                      q: "How difficult is the Manaslu Circuit with Tsum Valley Trek?",
                      a: "This trek is rated as challenging to strenuous. You'll trek 5-8 hours daily on rugged terrain with significant altitude gain. The Larkya La Pass day involves 10-11 hours of trekking at over 5,000m with glacier crossings. Prior high-altitude trekking experience and excellent fitness are essential.",
                    },
                    {
                      q: "What makes Tsum Valley special?",
                      a: "Tsum Valley is a sacred Himalayan enclave with deep Buddhist significance. It's home to ancient monasteries like Mu Gompa and Rachen Gompa, Milarepa's Cave with the sage's footprint, and the unique 'Shyagya' tradition of non-violence practiced since 1920. The valley opened to trekkers only in 2008 and retains authentic Tibetan culture.",
                    },
                    {
                      q: "How much do the permits cost?",
                      a: "Permit costs vary by season. For Manaslu: $75-100/week + $10-15/day. Tsum Valley: $35-40/week + $7/day. MCAP and ACAP: approximately $22 each. A new local permit costs NPR 1000. Total for 19 days ranges approximately $250-300 per person.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Teahouses throughout the trek are basic but comfortable, with twin-sharing rooms and shared bathrooms. In Tsum Valley and remote sections, facilities are simpler. Hot showers and charging are available at most lodges for an extra fee ($2-5). The teahouses offer warm hospitality and hearty meals.",
                    },
                    {
                      q: "What wildlife might I see?",
                      a: "The Manaslu Conservation Area is home to 33 mammal species including Himalayan tahr, blue sheep (bharal), musk deer, Himalayan marmots, and occasionally snow leopards. Over 110 bird species include the colorful Himalayan monal (Danphe), Nepal's national bird.",
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