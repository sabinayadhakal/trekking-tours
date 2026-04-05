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
  Award,
  MountainSnow,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive climbing briefing where we'll discuss the route, check your gear, and handle permit arrangements. Bring two passport-sized photographs for your permits. Evening free to explore the vibrant streets of Thamel. Welcome dinner with traditional Nepali cuisine where you'll meet your climbing guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Climbing briefing", "Gear check", "Permit arrangements", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Drive to Syabrubesi",
    altitude: "1,350m → 1,550m",
    distance: "7-8 hrs drive / 122km",
    description: "Early morning departure from Kathmandu for the scenic drive to Syabrubesi. The journey follows the Trishuli River through beautiful rural landscapes, terraced farmlands, and traditional villages. We pass through Dhunche, the district headquarters of Rasuwa, before descending to Syabrubesi. En-route, enjoy views of Ganesh Himal and the Annapurnas on clear days. Syabrubesi is a charming Tamang village and the gateway to the Langtang region.",
    overnight: "Teahouse in Syabrubesi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic river drive", "Ganesh Himal views", "Tamang village", "Langtang region gateway"],
  },
  {
    day: 3,
    title: "Trek to Lama Hotel",
    altitude: "1,550m → 2,400m",
    distance: "11km / 6-7 hrs",
    description: "Our trek begins! We follow the Langtang Khola upstream through lush forests of oak, rhododendron, and bamboo. The trail crosses several suspension bridges and passes through landslide zones. We may spot playful monkeys, red pandas, and bears if lucky. The gradual ascent through beautiful forest brings us to Lama Hotel, a small settlement nestled in the alpine forest. The sound of the river and chirping birds accompanies us throughout the day.",
    overnight: "Teahouse in Lama Hotel",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Suspension bridge crossings", "Alpine forests", "Wildlife spotting", "Langtang Khola views"],
  },
  {
    day: 4,
    title: "Trek to Langtang Village",
    altitude: "2,400m → 3,430m",
    distance: "12km / 6-7 hrs",
    description: "Today we climb amidst occasional glimpses of Langtang Lirung between the trees. At Ghore Tabela (3,000m), the trail emerges from the forest into a widening valley. We pass temporary settlements used by herders who bring their livestock to graze in high pastures during summer. The trail continues gently climbing with stunning mountain views. Langtang village, the headquarters of Langtang National Park, features traditional flat-roofed Tibetan-style houses surrounded by stone walls enclosing fields of buckwheat, potatoes, and barley.",
    overnight: "Teahouse in Langtang Village",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Langtang Lirung glimpses", "Ghore Tabela", "Tibetan-style architecture", "High mountain pastures"],
  },
  {
    day: 5,
    title: "Trek to Kyanjin Gompa",
    altitude: "3,430m → 3,870m",
    distance: "7km / 3-4 hrs",
    description: "A shorter day allowing for gradual acclimatization. The trail skirts through rich yak pastures and traditional villages of Muna to Singdun. We cross a wooden cantilever bridge and reach a wide valley after climbing a moraine. Finally, ascending through mountain passes, we arrive at Kyanjin Gompa, a stunning settlement beneath towering peaks. Visit the ancient monastery and the government-operated cheese factory where you can sample fresh yak cheese. The views of Langtang Lirung, Kimshung, and surrounding peaks are breathtaking.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kyanjin Gompa monastery", "Yak cheese factory", "Langtang Lirung views", "Acclimatization"],
  },
  {
    day: 6,
    title: "Acclimatization Day - Kyanjin Gompa",
    altitude: "3,870m",
    distance: "Rest Day",
    description: "Essential rest day for acclimatization. We hike to Kyanjin Ri (4,773m) or Tserko Ri (5,000m) for spectacular panoramic views of the Langtang range including Langtang Lirung (7,246m), Dorje Lakpa (6,990m), Gangchempo (6,388m), and even Shishapangma (8,027m) in Tibet. Explore the monastery, interact with local monks, and learn about Buddhist culture. This acclimatization is crucial for the summit push ahead. Your climbing guide will review techniques and prepare you for the climb.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Kyanjin Ri hike", "Tserko Ri views", "Monastery visit", "Acclimatization"],
  },
  {
    day: 7,
    title: "Trek to Yala Peak Base Camp",
    altitude: "3,870m → 4,800m",
    distance: "6-7 hrs",
    description: "Today we trek to Yala Peak Base Camp through beautiful yak pastures and rocky glacial terrain. The trail offers stunning views of Yala Peak, Naya Kanga, Gangchempo, and Tserko Ri. As we gain altitude, the landscape becomes more alpine and barren. Upon reaching Base Camp at approximately 4,800m, our team sets up tents and establishes camp. Your guide will conduct a thorough training session on using crampons, ice axes, rope techniques, and other climbing gear needed for the summit.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yala Peak Base Camp", "Climbing training", "Gear preparation", "Glacial landscape"],
  },
  {
    day: 8,
    title: "Summit Yala Peak - Return to Kyanjin Gompa",
    altitude: "4,800m → 5,732m → 3,870m",
    distance: "10-12 hrs",
    description: "The most exciting and challenging day! Wake at 2:00 AM for tea and light breakfast. Start climbing by 3:00 AM with headlamps lighting the way. The climb involves walking on snow slopes and a short rocky section near the summit. The final 15 meters is a steep rock pyramid where hands are definitely required. From the summit (5,732m), enjoy breathtaking 360-degree views of Langtang Lirung, Dorje Lakpa, Gangchempo, Naya Kanga, and the Tibetan peak Shishapangma (8,027m). The sense of achievement is overwhelming. After celebrating, descend carefully to Base Camp, pack up, and continue down to Kyanjin Gompa for a well-deserved rest.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Yala Peak Summit (5,732m)", "Shishapangma views", "Panoramic Langtang range", "Beginner-friendly summit"],
  },
  {
    day: 9,
    title: "Contingency Day",
    altitude: "3,870m",
    distance: "Reserve Day",
    description: "This day is kept as a buffer for weather delays, acclimatization needs, or any unforeseen circumstances. If not needed, it can be used for additional rest, photography, or exploring more of Kyanjin Gompa. If weather prevented summit on day 8, this provides another opportunity for the climb. Your guide will assess conditions and plan accordingly. Having this flexibility significantly increases summit success rates.",
    overnight: "Teahouse in Kyanjin Gompa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Summit window buffer", "Weather flexibility", "Additional acclimatization", "Peak photography"],
  },
  {
    day: 10,
    title: "Trek to Lama Hotel",
    altitude: "3,870m → 2,400m",
    distance: "12km / 5-6 hrs",
    description: "Begin our descent, retracing our steps through the beautiful Langtang Valley. Follow the Langtang Khola downstream through forests and past yak pastures. The downhill trek offers different perspectives of the mountains. Stop for lunch at Langtang village before continuing the descent. Arrive at Lama Hotel, nestled in the forest, for overnight stay. Celebrate your successful summit with your climbing team.",
    overnight: "Teahouse in Lama Hotel",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Langtang Valley descent", "Forest trekking", "Summit celebration", "Hot shower treat"],
  },
  {
    day: 11,
    title: "Trek to Syabrubesi",
    altitude: "2,400m → 1,550m",
    distance: "10km / 5-6 hrs",
    description: "Our final day of trekking continues descending through rhododendron, oak, and pine forests. Pass through Bamboo and small villages with terraced fields. En-route, enjoy rewarding views of Langtang Himal and Ganesh Himal. Walk through uphill forest of oak and hemlock, then gradually decline towards rhododendron forest and pastures to reach the ridge at Phoprang Danda. Gently climb uphill, passing Buddhist monasteries before reaching Syabrubesi village. Celebrate trek completion with your team.",
    overnight: "Teahouse in Syabrubesi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Forest descent", "Mountain farewell", "Trek completion"],
  },
  {
    day: 12,
    title: "Drive to Kathmandu",
    altitude: "1,550m → 1,350m",
    distance: "7-8 hrs drive",
    description: "After breakfast, drive back to Kathmandu along the scenic highway through typical countryside. The journey offers beautiful views of rural landscapes, river valleys, and terraced farmlands. Arrive in Kathmandu by late afternoon. Check into your hotel and enjoy a well-deserved hot shower. Evening farewell dinner with your climbing team, celebrating your successful summit of Yala Peak (5,732m). Receive your summit certificate as a memento of your achievement.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive", "Kathmandu return", "Summit certificate", "Farewell celebration"],
  },
  {
    day: 13,
    title: "Departure",
    altitude: "1,350m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing atop Yala Peak (5,732m), gazing at the majestic Langtang range and the Tibetan peak Shishapangma, and experiencing the warm hospitality of the Tamang people. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during trek and climb (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek and tented camp at Base Camp",
  "Experienced English-speaking climbing guide (government licensed)",
  "Assistant climbing guides for groups of 4 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Langtang National Park entry permit",
  "TIMS (Trekkers' Information Management System) card",
  "Yala Peak climbing permit",
  "All ground transportation as per itinerary (Kathmandu-Syabrubesi-Kathmandu by private vehicle)",
  "First aid medical kit including pulse oximeter",
  "Group climbing gear (ropes, ice screws, etc.)",
  "Personal climbing gear: harness, crampons, ice axe, helmet (provided)",
  "High-quality mountain tents at Base Camp",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Langtang region",
  "Farewell dinner in Kathmandu",
  "Yala Peak summit certificate",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for summit day",
  "Boiled water during the climb",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude climbing up to 5,800m & helicopter evacuation)",
  "Personal climbing gear not mentioned (boots, gaiters, etc.)",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Kathmandu sightseeing entrance fees",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
  "Summit bonus for climbing guide (customary)",
];

const gallery = [
  {
    src: "/images/used/yala-peak-2.avif",
    alt: "Yala Peak Summit",
    caption: "Yala Peak Summit (5,732m) with Langtang range behind",
  },
  {
    src: "/images/used/langtang-2.avif",
    alt: "Kyanjin Gompa",
    caption: "Kyanjin Gompa with Langtang Lirung",
  },
 
];

export default function YalaPeakClimbingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Climb name constant for auto-fill functionality
  const climbName = "Yala Peak Climbing Expedition";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Yala Peak Climbing Expedition - Himkala Adventure");
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
            src="/images/used/yala-peak-nepal.avif"
            alt="Yala Peak Climbing"
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
                Beginner Friendly
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 5,732m Summit
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              YALA PEAK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CLIMBING EXPEDITION
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Summit your first Himalayan peak in the beautiful Langtang Valley—a perfect introduction to 
              mountaineering with stunning views of Langtang Lirung and Tibet's Shishapangma.
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
                <div className="text-lg font-bold text-[#0f2940]">$1,195</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(climbName)}`}>
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
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,195</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $205</Badge>
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
                          <span>Group Size: 2-10</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Teahouse + Tented Camp</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 5,732m</span>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <Link href={`/contact?trek=${encodeURIComponent(climbName)}`}>
                        <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-xs md:text-base">
                          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Climb
                        </Button>
                      </Link>
                      
                      {/* WhatsApp Now Button */}
                      <a 
                        href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${climbName}.`)}`}
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
                          <span className="font-medium text-[#0f2940]">Syabrubesi</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek End</span>
                          <span className="font-medium text-[#0f2940]">Syabrubesi</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Summit Altitude</span>
                          <span className="font-medium text-[#0f2940]">Yala Peak (5,732m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Climbing Days</span>
                          <span className="font-medium text-[#0f2940]">11 Days trek + climb</span>
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
                    The <strong>Yala Peak Climbing Expedition</strong> (5,732m) is one of Nepal's most accessible and rewarding trekking peaks, perfect for beginners seeking their first Himalayan summit. Located in the stunning Langtang Valley near the Nepal-Tibet border, Yala Peak offers a perfect introduction to mountaineering without requiring advanced technical skills.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The expedition combines trekking through the beautiful Langtang Valley—often called the "Valley of Glaciers"—with a non-technical climb to a spectacular summit. The route takes you through lush forests, traditional Tamang and Tibetan villages, and past ancient monasteries including the famous Kyanjin Gompa. From the summit, you'll enjoy breathtaking 360-degree views of the Langtang range including <strong>Langtang Lirung (7,246m), Dorje Lakpa (6,990m), Gangchempo (6,388m), and even Shishapangma (8,027m)</strong> in Tibet, the world's 14th highest peak.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This expedition is ideal for trekkers with good fitness who want to experience the thrill of standing on a Himalayan peak without the technical demands of higher mountains. Prior climbing experience is not required—your guide will provide comprehensive training at Base Camp on using crampons, ice axes, and rope techniques. With proper acclimatization and determination, Yala Peak offers an achievable and unforgettable mountaineering adventure in one of Nepal's most beautiful regions.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Climbing Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit Yala Peak (5,732m) – a perfect first Himalayan peak for beginners",
                    "Spectacular panoramic views of Langtang Lirung, Dorje Lakpa, Gangchempo, and Tibet's Shishapangma",
                    "Trek through the beautiful Langtang Valley, often called the 'Valley of Glaciers'",
                    "Visit the ancient Kyanjin Gompa monastery and sample local yak cheese",
                    "Experience rich Tamang and Tibetan Buddhist culture in traditional mountain villages",
                    "Explore Langtang National Park with diverse flora and fauna including red pandas and monkeys",
                    "Non-technical climb suitable for beginners with training provided",
                    "Less crowded than Everest or Annapurna regions, offering peaceful trekking",
                    "Short drive from Kathmandu, minimizing travel time",
                    "Achieve a memorable mountaineering milestone with a summit certificate",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]"
                    >
                      <Award className="w-3 h-3 md:w-4 h-4 text-[#2d6a8a] fill-[#C5E0ED] shrink-0" />
                      <span className="text-[#0f2940] font-medium text-xs md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Season */}
              <section className="mb-6 md:mb-12">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Climb</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Rhododendrons bloom in vibrant colors along the trail. Warming temperatures and longer days. Excellent visibility and stable weather for climbing. Ideal for photography.
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
                        Crystal-clear skies, stable weather, and perfect mountain views. Cool but pleasant temperatures. Peak season with the highest success rates and vibrant cultural festivals.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is very cold with heavy snow. Monsoon (Jun-Aug) brings rain, clouds, and leeches - not recommended for climbing.</p>
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
                    <li>• <strong>Permits Required:</strong> Langtang National Park entry permit, TIMS card, and Yala Peak climbing permit. All are included and arranged by us.</li>
                    <li>• <strong>No Technical Experience Needed:</strong> Yala Peak is perfect for beginners. Your guide will provide comprehensive training at Base Camp on crampon use, rope techniques, and ice axe handling.</li>
                    <li>• <strong>Physical Fitness:</strong> Good fitness is required for 5-7 hour trekking days at altitude. Prior trekking experience is beneficial.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude trekking up to 5,800m and helicopter evacuation.</li>
                    <li>• <strong>Road Conditions:</strong> The drive to Syabrubesi takes 7-8 hours on winding mountain roads. Be prepared for a long but scenic journey.</li>
                    <li>• <strong>Acclimatization:</strong> Proper acclimatization is crucial. Our itinerary includes a rest day at Kyanjin Gompa with optional hikes to higher viewpoints.</li>
                    <li>• <strong>Summit Bonus:</strong> It's customary to provide a summit bonus to your climbing guide upon successful summit (typically $100-150).</li>
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
                      q: "How difficult is Yala Peak climbing?",
                      a: "Yala Peak is considered one of the easiest trekking peaks in Nepal. The climb involves walking on snow slopes and a short rocky section near the summit. No technical climbing experience is required, though good fitness and proper acclimatization are essential. It's perfect for beginners seeking their first Himalayan summit.",
                    },
                    {
                      q: "Do I need previous climbing experience?",
                      a: "No previous climbing experience is required for Yala Peak. Your guide will provide comprehensive training at Base Camp on using crampons, ice axes, and rope techniques. However, good physical fitness and some prior trekking experience at altitude are beneficial.",
                    },
                    {
                      q: "What is the success rate on Yala Peak?",
                      a: "Yala Peak has a very high success rate, typically 85-95% in good seasons. Spring (March-May) and autumn (September-November) offer the best conditions. Our experienced guides, proper acclimatization schedule, and contingency day maximize summit success.",
                    },
                    {
                      q: "What views can I expect from the summit?",
                      a: "From the summit, enjoy breathtaking 360-degree views of the Langtang range including Langtang Lirung (7,246m), Dorje Lakpa (6,990m), Gangchempo (6,388m), Naya Kanga, and Tserko Ri. To the north, you'll see Shishapangma (8,027m) in Tibet, the world's 14th highest peak. The sunrise view is spectacular.",
                    },
                    {
                      q: "Is Yala Peak suitable as a training climb for higher peaks?",
                      a: "Absolutely! Yala Peak is an excellent training peak for climbers planning to attempt higher peaks like Island Peak, Mera Peak, or Lobuche Peak. It helps build confidence with basic mountaineering skills and allows you to experience high-altitude climbing in a less demanding environment.",
                    },
                    {
                      q: "What is the accommodation like during the climb?",
                      a: "During trekking, you'll stay in comfortable teahouses with twin-sharing rooms and shared bathrooms. At Yala Peak Base Camp, we provide high-quality mountain tents with sleeping mats. Teahouses in the Langtang region offer warm hospitality, good food, and stunning mountain views.",
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