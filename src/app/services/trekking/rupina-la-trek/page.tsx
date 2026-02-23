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
  Compass,
  Droplets,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu (1,350m)",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Thamel. After check-in, you can rest or explore the vibrant streets of Thamel. In the evening, attend a comprehensive trek briefing where we'll discuss the route, check your gear, and handle permit arrangements. Bring two passport-sized photographs for your trekking permits. Welcome dinner with traditional Nepali cuisine where you'll meet your trek guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Trek briefing", "Gear check", "Permit arrangements", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Drive to Barpak Village (1,915m)",
    altitude: "1,350m → 1,915m",
    distance: "205km / 7-8 hrs drive",
    description: "Early morning departure from Kathmandu for the scenic drive to Barpak Village. The journey follows the Prithvi Highway before turning off towards Gorkha. We pass through picturesque landscapes, terraced farmlands, and traditional villages with views of Ganesh Himal and the Manaslu range in the distance. Barpak is the largest Gurung village in Nepal and was the epicenter of the 2015 earthquake. Today, it has been beautifully rebuilt and offers a fascinating glimpse into Gurung culture and hospitality.",
    overnight: "Teahouse/Homestay in Barpak",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive through Gorkha", "Ganesh Himal views", "Barpak Gurung village", "Cultural immersion"],
  },
  {
    day: 3,
    title: "Rest Day in Barpak - Acclimatization & Exploration",
    altitude: "1,915m",
    distance: "Exploration",
    description: "A rest day to acclimatize and explore Barpak village. Barpak is famous for its brave Gurkha soldiers, including Captain Gaje Ghale, a Victoria Cross recipient. Walk through the village's stone-paved streets, visit the local schools, and interact with friendly locals. You can take a short hike to nearby viewpoints for panoramic views of Boudha Himal and the surrounding peaks. In the evening, you may be treated to a cultural performance by the local community, featuring traditional Gurung dances and songs.",
    overnight: "Teahouse/Homestay in Barpak",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gurung cultural experience", "Village exploration", "Views of Boudha Himal", "Local hospitality"],
  },
  {
    day: 4,
    title: "Trek to Gai Kharka (2,900m)",
    altitude: "1,915m → 2,900m",
    distance: "15km / 6-7 hrs",
    description: "Our trek begins! Leaving Barpak, we ascend through terraced fields and forests with stunning views of Boudha Himal accompanying us. The trail passes through the small settlement of Jhong before entering dense rhododendron and pine forests. We cross several ridges with spectacular mountain views before descending to Gai Kharka, a grazing pasture with basic camping facilities. Tonight, we switch from teahouses to camping, marking our entry into the remote wilderness section.",
    overnight: "Camping at Gai Kharka",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First day of trekking", "Rhododendron forests", "Boudha Himal views", "Camping experience"],
  },
  {
    day: 5,
    title: "Trek to Rupina La Phedi (3,800m)",
    altitude: "2,900m → 3,800m",
    distance: "12km / 5-6 hrs",
    description: "Today's trek takes us through beautiful alpine meadows and forests. The trail ascends gradually, offering increasingly dramatic views of the surrounding peaks, including Boudha Himal, Sringi Himal, and Ganesh Himal. We pass through Ruse Kharka, a summer grazing area, before continuing to Rupina La Phedi, our base camp for the pass crossing. The afternoon is free to rest and prepare for tomorrow's challenging ascent.",
    overnight: "Camping at Rupina La Phedi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Alpine meadows", "Mountain panorama", "Pass preparation", "Remote wilderness"],
  },
  {
    day: 6,
    title: "Cross Rupina La Pass (4,720m) to Boudha Himal Base Camp (3,600m)",
    altitude: "3,800m → 4,720m → 3,600m",
    distance: "14km / 8-9 hrs",
    description: "The most challenging and rewarding day of the trek! We start early (3-4 AM) for the ascent to Rupina La Pass (approx. 4,720m). The climb is steep and demanding, crossing rocky terrain with cairns marking the way. At the summit, prayer flags flutter in the wind, and you're rewarded with breathtaking 360-degree views of Manaslu (8,163m), Himal Chuli (7,893m), Boudha Himal (6,672m), Peak 29, and the Ganesh Himal range. After celebrating at the top, we begin the long descent to Boudha Himal Base Camp, passing glacial moraines and pristine mountain scenery. This is a tiring but unforgettable day.",
    overnight: "Camping at Boudha Himal Base Camp",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Rupina La Pass (4,720m)", "360-degree Himalayan panorama", "Manaslu & Himal Chuli views", "Glacial landscapes"],
  },
  {
    day: 7,
    title: "Trek to Zhong Kharka (2,960m)",
    altitude: "3,600m → 2,960m",
    distance: "11km / 6-7 hrs",
    description: "Today we continue our descent through stunning alpine landscapes. The trail passes through the Boudha Himal glacier moraine and offers incredible views back towards the pass. We follow the Chhuling Khola through forests and meadows, with opportunities to spot Himalayan wildlife including blue sheep and Himalayan thar. Zhong Kharka is a beautiful grazing pasture surrounded by forests and mountains.",
    overnight: "Camping at Zhong Kharka",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Glacial moraine descent", "Wildlife spotting", "Alpine scenery", "Peaceful camping"],
  },
  {
    day: 8,
    title: "Trek to Nyak Village (2,340m)",
    altitude: "2,960m → 2,340m",
    distance: "12km / 6-7 hrs",
    description: "A long descent day as we leave the high mountains behind. The trail follows the river through forests and offers spectacular views of Ganesh Himal. We pass through several small settlements before reaching Nyak Village, where we rejoin civilization and transition back to teahouse accommodation. Nyak is a charming village at the junction with the Manaslu Circuit trail, offering warm hospitality and comfortable lodges. Celebrate completing the remote pass section of your journey!",
    overnight: "Teahouse in Nyak Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ganesh Himal views", "Rejoin Manaslu Circuit", "Nyak Village arrival", "Celebration"],
  },
  {
    day: 9,
    title: "Trek to Deng (1,860m)",
    altitude: "2,340m → 1,860m",
    distance: "18km / 6-7 hrs",
    description: "We now join the classic Manaslu Circuit trail, following the Budhi Gandaki River downstream through beautiful forests and traditional villages. The trail offers stunning views of the surrounding peaks and passes through several small settlements. Deng is a small village with basic teahouses, nestled beside the river. This section of the trek is less crowded than the main Manaslu Circuit, offering a sense of wilderness and solitude.",
    overnight: "Teahouse in Deng",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Budhi Gandaki Valley", "Traditional villages", "Forest trails", "Riverside camping"],
  },
  {
    day: 10,
    title: "Trek to Namrung (2,630m)",
    altitude: "1,860m → 2,630m",
    distance: "22km / 7-8 hrs",
    description: "Today we trek through increasingly dramatic landscapes with ever-improving mountain views. The trail follows the river upstream, passing through Philim and several other villages. As we gain altitude, the Tibetan influence becomes more evident in the architecture and culture. Namrung is a beautiful village with stunning views of Sringi Himal and the surrounding peaks.",
    overnight: "Teahouse in Namrung",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sringi Himal views", "Tibetan architecture", "Cultural transition", "Mountain panorama"],
  },
  {
    day: 11,
    title: "Trek to Samagaon (3,530m)",
    altitude: "2,630m → 3,530m",
    distance: "19km / 7-8 hrs",
    description: "Today we catch our first breathtaking views of Mount Manaslu (8,163m), the world's eighth highest peak. The trail passes through Lho village with its ancient monastery and continues through beautiful terrain with stunning mountain panoramas. Samagaon (also called Sama) is the largest village on the circuit, with a gompa (monastery) and school. This traditional Tibetan village is surrounded by dramatic peaks including Manaslu, Ngadi Himal, and Himal Chuli.",
    overnight: "Teahouse in Samagaon",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Mt. Manaslu", "Lho monastery", "Samagaon village", "Stunning mountain panorama"],
  },
  {
    day: 12,
    title: "Acclimatization Day - Manaslu Base Camp Hike (4,800m)",
    altitude: "3,530m → 4,800m → 3,530m",
    distance: "14km / 6-7 hrs",
    description: "A crucial rest day for acclimatization with an optional hike to Manaslu Base Camp (4,800m) for spectacular close-up views of Manaslu's south face and the Punggen Glacier. The trail offers incredible views of Manaslu, Himal Chuli, and the surrounding peaks. Alternatively, you can hike to Birendra Tal, a beautiful glacial lake, or explore Samagaon village and visit the ancient Pungyen Gompa. This acclimatization is essential for the challenging Larkya La crossing ahead.",
    overnight: "Teahouse in Samagaon",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Manaslu Base Camp hike", "Punggen Glacier", "Birendra Tal lake", "Acclimatization"],
  },
  {
    day: 13,
    title: "Trek to Samdo (3,875m)",
    altitude: "3,530m → 3,875m",
    distance: "8km / 3-4 hrs",
    description: "A relatively easy day with gradual climbing. The trail offers spectacular views of Manaslu, Samdo Peak, and surrounding glaciers. We pass through Kermo Kharka and juniper forests before reaching Samdo, the last major village before the pass. This remote settlement has strong Tibetan heritage, and locals still trade with Tibet via the nearby Lajyang border. The village has a small monastery and stunning mountain views.",
    overnight: "Teahouse in Samdo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Spectacular mountain views", "Juniper forests", "Remote Tibetan village", "Lajyang border"],
  },
  {
    day: 14,
    title: "Trek to Dharmasala (Larkya Phedi) (4,460m)",
    altitude: "3,875m → 4,460m",
    distance: "12km / 5-6 hrs",
    description: "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as we climb above the tree line. The trail passes through Larkya Bazaar, an old trading post, before reaching Dharmasala (also called Larkya Phedi), a basic stone shelter serving as the final stop before the pass crossing. Rest early, prepare your gear, and try to sleep as conditions allow. We'll start very early tomorrow morning.",
    overnight: "Basic Lodge/Dharmasala",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["High camp experience", "Alpine terrain", "Larkya Bazaar", "Pass preparation"],
  },
  {
    day: 15,
    title: "Cross Larkya La Pass (5,106m) to Bimthang (3,720m)",
    altitude: "4,460m → 5,106m → 3,720m",
    distance: "23km / 10-11 hrs",
    description: "The most challenging and rewarding day of the entire trek! We start at 3-4 AM to reach the pass before conditions deteriorate. The climb is steady on a moraine path with cairns marking the way. At Larkya La (5,106m), prayer flags flutter in the wind and 360-degree views reveal Manaslu, Himlung Himal, Cheo Himal, Annapurna II, and the Tibetan peaks beyond. The long descent to Bimthang passes through glacial moraine, past beautiful glacial lakes, and through yak pastures. This is a tiring but unforgettable day - the culmination of your entire journey.",
    overnight: "Teahouse in Bimthang",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Larkya La Pass (5,106m)", "360-degree Himalayan panorama", "Glacial lakes", "Prayer flag-adorned summit"],
  },
  {
    day: 16,
    title: "Trek to Dharapani (1,860m)",
    altitude: "3,720m → 1,860m",
    distance: "20km / 6-7 hrs",
    description: "A long descent day through dramatically changing landscapes. From alpine terrain, we descend through rhododendron forests, crossing streams and passing through Gurung villages. The vegetation transforms from alpine to temperate to subtropical. At Dharapani, we join the Annapurna Circuit trail and reach the road head. The village marks our transition back to more accessible regions. Celebrate your incredible achievement of crossing both Rupina La and Larkya La passes!",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dramatic landscape change", "Rhododendron forests", "Gurung villages", "Join Annapurna Circuit"],
  },
  {
    day: 17,
    title: "Drive to Kathmandu (1,350m)",
    altitude: "1,860m → 1,350m",
    distance: "8-9 hrs drive",
    description: "Our trekking adventure concludes as we drive back to Kathmandu. From Dharapani, we drive to Besisahar, then continue along the scenic Prithvi Highway to Kathmandu. The journey offers beautiful views of rural landscapes, river valleys, and terraced farmlands. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy a well-deserved hot shower. Evening farewell dinner with your trekking team, celebrating your incredible journey through the Manaslu region and across two high Himalayan passes.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "Trek completion", "Farewell dinner with team", "Celebration"],
  },
  {
    day: 18,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing atop Rupina La and Larkya La passes, surrounded by the majestic Himalayas.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation in Kathmandu (3-star with breakfast) including pre/post-trek",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek (where available)",
  "Camping equipment (tents, sleeping tents, kitchen tents, toilet tents, cooking gear) for remote section",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 4 or more",
  "Cook and kitchen staff for camping section",
  "Porter service for all trekking and camping gear",
  "Manaslu Restricted Area Permit (RAP)",
  "Manaslu Conservation Area Permit (MCAP)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Barpak & Dharapani-Kathmandu by private jeep)",
  "First aid medical kit including pulse oximeter and portable oxygen",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Manaslu region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for Rupina La and Larkya La crossing days",
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
  "Tips and gratuities for guides, porters, and camping staff (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Rupina La Pass",
    caption: "Rupina La Pass (approx. 4,720m)",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Larkya La Pass",
    caption: "Larkya La Pass (5,106m)",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Manaslu Mountain",
    caption: "Mount Manaslu (8,163m) from Samagaon",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Barpak Village",
    caption: "Barpak Village - Epicenter of 2015 Earthquake",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Camping in Himalayas",
    caption: "Camping in Remote Section of Rupina La",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Gurung Village",
    caption: "Traditional Gurung Village",
  },
];

export default function RupinaLaTrekPage() {
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
    const title = encodeURIComponent("Rupina La Pass Trek - Himkala Adventure");
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
            alt="Rupina La Pass Trek"
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
                <MapPin className="w-4 h-4 mr-1" /> Manaslu Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-4 py-2 text-sm">
                Strenuous
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-4 py-2 text-sm">
                 className="w-4 h-4 mr-1" / Remote Pass
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
              RUPINA LA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                PASS TREK
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              A remote and adventurous trek through the lower Manaslu region, crossing the challenging Rupina La Pass 
              and connecting to the classic Manaslu Circuit via Larkya La.
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
                    <div className="text-xs text-slate-400 line-through">$2,450</div>
                    <div className="text-xl font-bold text-[#0f2940]">$2,195</div>
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
                      <span className="text-white/50 text-sm line-through">$2,450</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,195</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $255</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>18 Days / 17 Nights</span>
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
                        <span className="font-medium text-[#0f2940]">Barpak / Dharapani</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Larkya La (5,106m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Rupina La Pass</span>
                        <span className="font-medium text-[#0f2940]">approx. 4,720m</span>
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
                    The <strong>Rupina La Pass Trek</strong> is a remote and adventurous trek in the lower Manaslu region, offering a true off-the-beaten-path experience for experienced trekkers seeking solitude and raw wilderness. Officially opened to tourists in 1991, this route takes you through pristine landscapes, traditional Gurung villages, and across the challenging <strong>Rupina La Pass (approx. 4,720m)</strong>, before connecting to the classic Manaslu Circuit.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    The journey begins in <strong>Barpak Village</strong>, the largest Gurung settlement in Nepal and the epicenter of the 2015 earthquake. From here, you'll trek through dense rhododendron forests, alpine meadows, and glacial moraines, with spectacular views of <strong>Manaslu (8,163m), Himal Chuli (7,893m), Boudha Himal (6,672m), and the Ganesh Himal range</strong>. The remote section between Barpak and Nyak Village requires fully outfitted camping, with no teahouses for 5-6 days.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    After crossing Rupina La, you join the classic Manaslu Circuit and continue to the legendary <strong>Larkya La Pass (5,106m)</strong>, one of Nepal's longest and most spectacular high passes. This trek is the ultimate adventure for those seeking to explore the raw beauty of the Himalayas far from the crowds, combining two challenging passes, rich Gurung and Tibetan culture, and some of the most pristine wilderness in Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Cross two challenging high passes: Rupina La (4,720m) and Larkya La (5,106m) ",
                    "Explore Barpak, the largest Gurung village in Nepal and 2015 earthquake epicenter ",
                    "Fully outfitted camping trek through pristine wilderness with no teahouses for 5-6 days ",
                    "Spectacular views of Manaslu (8,163m), Himal Chuli, Boudha Himal, and Ganesh Himal ",
                    "Authentic cultural immersion with Gurung and Tibetan communities ",
                    "Ancient Buddhist monasteries, chortens, and mani walls throughout the region ",
                    "Remote and less-traveled trails - true off-the-beaten-path adventure ",
                    "Opportunity to spot Himalayan wildlife including blue sheep and Himalayan thar ",
                    "Diverse landscapes from subtropical forests to glacial moraines and high passes ",
                    "Combine with Manaslu Circuit for the ultimate Himalayan experience",
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
                        Rhododendrons bloom in vibrant colors, warming temperatures, and excellent visibility. Ideal for crossing both passes with moderate snow conditions.
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
                        The most popular season with crystal-clear skies, stable weather, and perfect conditions. Excellent visibility for mountain photography and pass crossings.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow making the passes impassable. Monsoon (Jun-Aug) brings leeches and landslides - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> This trek requires multiple permits including Manaslu Restricted Area Permit, MCAP, ACAP, and TIMS card. Permit costs vary by season.</li>
                    <li>• <strong>Camping Section:</strong> The trek includes 5-6 nights of fully outfitted camping with no teahouses. All camping equipment is provided.</li>
                    <li>• <strong>Guide Mandatory:</strong> Independent trekking is not permitted in this region. You must trek with a licensed guide from a registered agency.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous trek with long days (8-11 hours on pass days), high altitude (5,106m), and remote terrain. Excellent fitness and prior high-altitude experience required.</li>
                    <li>• <strong>Minimum Group Size:</strong> Restricted Area Permits require a minimum group of 2 trekkers.</li>
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
                      q: "How difficult is the Rupina La Pass Trek?",
                      a: "This trek is rated as strenuous to challenging. You'll trek 5-8 hours daily on rugged terrain with significant altitude gain. The Rupina La and Larkya La pass days involve 8-11 hours of trekking at over 4,700-5,100m with glacier crossings. Prior high-altitude trekking experience and excellent fitness are essential.",
                    },
                    {
                      q: "What is the story behind the name 'Rupina La'?",
                      a: "According to local tales from the villages of Laprak and Barpak, the Rupina La Pass derives its name from a shepherdess named Rupina. Long ago, while tending her sheep in the area, she mysteriously disappeared, leaving a legacy that lent her name to the pass. In the Gurung language, it is also referred to as 'Ruwala,' meaning 'horn pass'.",
                    },
                    {
                      q: "Do I need camping experience for this trek?",
                      a: "No prior camping experience is necessary, but you should be prepared for basic conditions with no running water, squat toilets, and cold temperatures. Our experienced camping staff will set up tents, prepare meals, and ensure your comfort during the 5-6 nights of camping. A positive attitude and flexibility are important.",
                    },
                    {
                      q: "What permits are required and how much do they cost?",
                      a: "You need: Manaslu Restricted Area Permit (USD 75-100/week + per day charges), Manaslu Conservation Area Permit (MCAP ~USD 30), Annapurna Conservation Area Permit (ACAP ~USD 30), and TIMS card (~USD 20). A local Tsum Nupri entrance fee (NPR 1,000) may also apply. Total ranges from USD 200-300 per person depending on season and itinerary length.",
                    },
                    {
                      q: "What wildlife might I see on this trek?",
                      a: "The Manaslu region is home to 33 mammal species including Himalayan tahr, blue sheep (bharal), musk deer, Himalayan marmots, and occasionally snow leopards. Over 110 bird species include the colorful Himalayan monal (Danphe), Nepal's national bird. You may also see langur monkeys in the lower forests.",
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