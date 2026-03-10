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
  IceCream,
  Flame,
  Award,
  MountainSnow,
  CloudSnow,
  Wind,
  Eye,
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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive climbing briefing where we'll discuss the route, check your technical gear, and handle permit arrangements. Bring two passport-sized photographs for your climbing permits. Evening free to explore the vibrant streets of Thamel or rest after your journey. Welcome dinner with traditional Nepali cuisine where you'll meet your climbing guide.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Climbing briefing", "Gear check", "Permit arrangements", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Fly to Lukla - Trek to Chutanga",
    altitude: "1,400m → 2,840m → 3,010m",
    distance: "35 min flight / 3-4 hrs trek",
    description: "Early morning flight to Lukla (2,840m), one of the world's most thrilling mountain airports. Enjoy spectacular views of Everest and other Himalayan peaks during the flight. After landing, meet your climbing crew and begin trekking to Chutanga. The trail ascends gradually through pine forests and small settlements, offering beautiful views of the Dudh Koshi Valley. This short trek allows for proper acclimatization before crossing the Zatrwa La Pass.",
    overnight: "Teahouse/Camp in Chutanga",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic mountain flight to Lukla", "Everest views from air", "Dudh Koshi Valley", "Acclimatization start"],
  },
  {
    day: 3,
    title: "Cross Zatrwa La Pass to Thuli Kharka",
    altitude: "3,010m → 4,610m → 4,320m",
    distance: "8km / 6-7 hrs",
    description: "Early start to cross Zatrwa La Pass (4,610m), our first significant pass of the expedition. The trail climbs steeply through alpine meadows and rocky terrain. At the pass, prayer flags flutter in the wind offering spectacular views of the Hinku Valley and distant Himalayan peaks. Descend slightly to Thuli Kharka, also known as 'Kothey', situated on a ridge with magnificent mountain views. This is our first experience above 4,000m, testing our acclimatization.",
    overnight: "Teahouse/Camp in Thuli Kharka",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Zatrwa La Pass (4,610m)", "Prayer flag-adorned summit", "Hinku Valley views", "First high-altitude experience"],
  },
  {
    day: 4,
    title: "Trek to Kothey",
    altitude: "4,320m → 3,690m",
    distance: "14km / 5-6 hrs",
    description: "Today we descend into the beautiful Hinku Valley. The trail drops steeply through rhododendron and pine forests, crossing several streams. As we lose altitude, the vegetation becomes thicker and more lush. We pass through yak pastures and small seasonal settlements before reaching Kothey, the main village in the Hinku Valley. This is the last permanent settlement before we enter the high alpine zone. Enjoy the relative warmth of lower altitude before our climb begins.",
    overnight: "Teahouse/Camp in Kothey",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hinku Valley descent", "Rhododendron forests", "Yak pastures", "Last permanent settlement"],
  },
  {
    day: 5,
    title: "Trek to Thaknak",
    altitude: "3,690m → 4,358m",
    distance: "10km / 4-5 hrs",
    description: "The trail follows the Hinku River upstream through widening glacial valley. The vegetation thins as we gain altitude, replaced by alpine scrub and grassy meadows. Spectacular views of Mera Peak's south face begin to appear ahead. We pass through Gondishung, a summer herding settlement, before reaching Thaknak. Set beneath towering peaks, this is our final stop before Mera Base Camp. Rest and prepare for the climbing phase ahead.",
    overnight: "Camp in Thaknak",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hinku River valley", "First views of Mera Peak", "Alpine meadows", "Glacial landscape"],
  },
  {
    day: 6,
    title: "Trek to Mera Peak Base Camp",
    altitude: "4,358m → 5,200m",
    distance: "5km / 3-4 hrs",
    description: "A short but steep climb to Mera Peak Base Camp. The trail crosses glacial moraines and follows the edge of the Hinku Glacier. As we gain altitude, the landscape becomes starkly beautiful with ice and rock dominating the view. Mera Peak's massive south face towers above us. At Base Camp (5,200m), our climbing team will set up tents and establish camp. Your guide will conduct a thorough training session on using crampons, ice axes, rope techniques, and other technical gear. Practice walking on snow and ice, and learn essential mountaineering skills needed for the summit push.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Mera Peak Base Camp", "Hinku Glacier crossing", "Technical climbing training", "Gear preparation"],
  },
  {
    day: 7,
    title: "Acclimatization and Training Day",
    altitude: "5,200m",
    distance: "Rest Day",
    description: "A crucial day for acclimatization and skill development. We'll take a short hike higher on the glacier to around 5,400m, allowing our bodies to adjust to the altitude. Your guide will provide advanced training on crampon techniques, ice axe arrest, rope team movement, and crevasse rescue. Practice ascending and descending fixed ropes, an essential skill for summit day. Review the climbing route and safety procedures. Rest well, hydrate, and prepare for the move to High Camp tomorrow.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Acclimatization hike", "Advanced rope techniques", "Crampon practice", "Route review"],
  },
  {
    day: 8,
    title: "Climb to Mera Peak High Camp",
    altitude: "5,200m → 5,800m",
    distance: "4km / 4-5 hrs",
    description: "Today we move to High Camp, climbing steadily on glacier and snow. The route offers incredible views of the surrounding peaks including Chamlang, Baruntse, and Makalu. The altitude becomes more challenging as we approach High Camp at 5,800m. Set up camp on the glacier, secure tents against wind, and melt snow for water. Rest early and try to sleep as much as possible. We'll start very early tomorrow for the summit push. Your guide will review the final climbing route and set expectations for summit day.",
    overnight: "Tented Camp at High Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["High Camp at 5,800m", "Makalu and Chamlang views", "Glacier camping", "Final summit preparation"],
  },
  {
    day: 9,
    title: "Summit Mera Peak - Return to Base Camp",
    altitude: "5,800m → 6,476m → 5,200m",
    distance: "12km / 10-12 hrs",
    description: "The most challenging and rewarding day! Wake at 1:00 AM for tea and light breakfast. Start climbing by 2:00 AM with headlamps lighting the way. The route follows the glacier, gradually steepening as we gain altitude. At sunrise, we reach the summit ridge with breathtaking 360-degree views. From the summit of Mera Peak (6,476m), you'll see five of the world's highest peaks: Everest (8,848m), Kanchenjunga (8,586m), Lhotse (8,516m), Makalu (8,485m), and Cho Oyu (8,188m). The panorama is simply unparalleled. After celebrating your achievement and capturing photos, descend carefully to High Camp, pack up, and continue down to Base Camp for a well-deserved rest.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Packed Lunch, Dinner",
    highlights: ["Mera Peak Summit (6,476m)", "Sunrise over five 8,000m peaks", "Unmatched Himalayan panorama", "Mountaineering achievement"],
  },
  {
    day: 10,
    title: "Contingency Day",
    altitude: "5,200m",
    distance: "Reserve Day",
    description: "This day is kept as a buffer for weather delays, acclimatization needs, or any unforeseen circumstances. If not needed, it can be used for additional rest or photography. If weather prevented summit on day 9, this provides another opportunity for the climb. Your guide will assess conditions and plan accordingly. Having this flexibility significantly increases summit success rates.",
    overnight: "Tented Camp at Base Camp",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Summit window buffer", "Weather flexibility", "Additional acclimatization", "Peak photography"],
  },
  {
    day: 11,
    title: "Trek to Kothey",
    altitude: "5,200m → 3,690m",
    distance: "15km / 6-7 hrs",
    description: "Begin our descent, retracing our steps through the Hinku Valley. The long descent through glacial moraine and alpine meadows brings us back to Kothey. The oxygen-rich lower altitude feels wonderful after days above 5,000m. Celebrate your successful summit with your climbing team and enjoy the comfort of a proper lodge. Hot showers and warm meals await.",
    overnight: "Teahouse/Camp in Kothey",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hinku Valley descent", "Return to lower altitude", "Summit celebration", "Hot shower treat"],
  },
  {
    day: 12,
    title: "Trek to Thuli Kharka",
    altitude: "3,690m → 4,320m",
    distance: "12km / 5-6 hrs",
    description: "Continue descending through the beautiful Hinku Valley. The trail follows the river through forests and past yak pastures. We begin a gradual ascent back toward Thuli Kharka, crossing streams and enjoying the changing landscapes. The mountains look different from this direction, offering new perspectives on peaks we've grown familiar with.",
    overnight: "Teahouse/Camp in Thuli Kharka",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hinku Valley views", "Forest trekking", "Yak pastures", "Mountain perspectives"],
  },
  {
    day: 13,
    title: "Cross Zatrwa La Pass to Chutanga",
    altitude: "4,320m → 4,610m → 3,010m",
    distance: "10km / 6-7 hrs",
    description: "Our final pass crossing as we leave the Hinku Valley. Climb back to Zatrwa La Pass (4,610m) for one last view of the incredible mountains we've climbed among. The descent to Chutanga is steep through forests and meadows. Celebrate crossing the pass with prayer flags and mountain views. Chutanga offers comfortable lodging and a sense of civilization returning.",
    overnight: "Teahouse/Camp in Chutanga",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Zatrwa La Pass return", "Final mountain views", "Forest descent", "Trek completion"],
  },
  {
    day: 14,
    title: "Trek to Lukla",
    altitude: "3,010m → 2,840m",
    distance: "6km / 3-4 hrs",
    description: "A short, easy descent to Lukla. The trail winds through pine forests and past small villages, offering last glimpses of the Himalayan giants. Arrive in Lukla by early afternoon. Celebrate your successful Mera Peak climb with your guides and porters at a farewell dinner. Exchange stories, enjoy hot showers, and prepare for tomorrow's flight back to Kathmandu.",
    overnight: "Teahouse in Lukla",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Last mountain views", "Farewell with crew", "Trek completion celebration"],
  },
  {
    day: 15,
    title: "Fly to Kathmandu",
    altitude: "2,840m → 1,400m",
    distance: "35 min flight",
    description: "Early morning flight back to Kathmandu after an unforgettable climbing adventure. The short flight offers one last aerial view of the Himalayas, including Everest if weather permits. Upon arrival, transfer to your hotel. Enjoy a well-deserved hot shower and rest. Evening farewell dinner with your climbing guide, celebrating your summit of Mera Peak (6,476m). Receive your summit certificate as a memento of your achievement.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: ["Scenic mountain flight", "Kathmandu return", "Summit certificate", "Farewell celebration"],
  },
  {
    day: 16,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of standing atop Mera Peak (6,476m), gazing at five of the world's highest 8,000-meter peaks, and experiencing the pristine beauty of the Hinku Valley. Namaste and until we meet again!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during trek and climb (breakfast, lunch, dinner)",
  "Teahouse accommodation during trek and tented camp during climb",
  "Experienced English-speaking climbing guide (government licensed, IFMGA trained)",
  "Assistant climbing guides for groups of 4 or more",
  "Sherpa support for summit push",
  "High-quality climbing tent (North Face or similar) at Base Camp and High Camp",
  "Group climbing gear (ropes, ice screws, snow bars, wands, etc.)",
  "Personal climbing gear: harness, crampons, ice axe, helmet, ascender, carabiners",
  "Satellite phone for emergency communication (pay per use)",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Makalu Barun National Park entry permit",
  "Mera Peak climbing permit",
  "All ground transportation as per itinerary",
  "First aid medical kit including pulse oximeter and Gamow bag",
  "High-altitude sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Mera Peak region",
  "Farewell dinner in Kathmandu",
  "Mera Peak summit certificate",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
  "Packed lunch for summit day",
  "Oxygen cylinder and mask for emergency use",
  "High-altitude food and supplies for camps",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude climbing up to 6,500m & helicopter evacuation)",
  "Personal climbing gear not mentioned (boots, gaiters, etc.)",
  "Meals in Kathmandu (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-5 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides, sherpas, and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Summit bonus for climbing guide and sherpa (customary)",
  "Personal climbing insurance",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Mera Peak Summit",
    caption: "Mera Peak Summit (6,476m) with Everest in background",
  },
  {
    src: "https://images.unsplash.com/photo-1562832135-14a35d25edef?q=80&w=2045&auto=format&fit=crop",
    alt: "Mera Peak Climb",
    caption: "Climbing the Mera Glacier",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Hinku Valley",
    caption: "Beautiful Hinku Valley approach",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Makalu View",
    caption: "Makalu (8,485m) from Mera Peak",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "High Camp",
    caption: "Mera Peak High Camp at 5,800m",
  },
  {
    src: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?q=80&w=2072&auto=format&fit=crop",
    alt: "Everest Region",
    caption: "Sunrise over the Himalayas from Mera Summit",
  },
];

export default function MeraPeakClimbingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Climb name constant for auto-fill functionality
  const climbName = "Mera Peak Climbing Expedition";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Mera Peak Climbing Expedition - Himkala Adventure");
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
            alt="Mera Peak Climbing"
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
                <MapPin className="w-3 h-3 mr-1" /> Makalu Region
              </Badge>
              <Badge className="bg-red-100 text-red-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Challenging
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 6,476m Summit
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              MERA PEAK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                CLIMBING EXPEDITION
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Summit the highest trekking peak in Nepal (6,476m) with unparalleled views of five 8,000-meter giants—Everest, 
              Kanchenjunga, Lhotse, Makalu, and Cho Oyu—from a single vantage point.
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
                <div className="text-xs text-slate-400 line-through">$3,500</div>
                <div className="text-lg font-bold text-[#0f2940]">$3,195</div>
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
                        <span className="text-white/50 text-sm line-through">$3,500</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$3,195</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $305</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>16 Days / 15 Nights</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Best: Mar-May, Sep-Nov</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Group Size: 2-6</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Teahouse + Tented Camp</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>Max Altitude: 6,476m</span>
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
                          <span className="font-medium text-[#0f2940]">Lukla</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek End</span>
                          <span className="font-medium text-[#0f2940]">Lukla</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Summit Altitude</span>
                          <span className="font-medium text-[#0f2940]">Mera Peak (6,476m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Climbing Days</span>
                          <span className="font-medium text-[#0f2940]">13 Days trek + climb</span>
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
                    The <strong>Mera Peak Climbing Expedition</strong> (6,476m) is the highest trekking peak in Nepal and one of the most spectacular mountaineering adventures in the Himalayas. Located in the remote Hinku Valley south of Mount Everest, Mera Peak offers climbers the opportunity to stand atop a 6,000-meter peak with an unparalleled <strong>panoramic view of five of the world's highest 8,000-meter mountains</strong>: Everest (8,848m), Kanchenjunga (8,586m), Lhotse (8,516m), Makalu (8,485m), and Cho Oyu (8,188m).
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The expedition begins with a thrilling flight to Lukla, followed by a trek through the pristine and less-visited Hinku Valley. Unlike the crowded Everest routes, the approach to Mera Peak offers true wilderness experience with pristine forests, yak pastures, and dramatic mountain scenery. The climb itself is technically straightforward, involving glacier travel and a steep but non-technical summit ridge, making it an <strong>ideal first 6,000-meter peak for aspiring climbers</strong>.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This expedition is perfect for experienced trekkers with good fitness who want to take their first steps into high-altitude mountaineering. While prior technical experience is beneficial, our comprehensive training at Base Camp ensures you'll learn all necessary skills including crampon use, rope techniques, and glacier travel. Standing on the summit of Mera Peak as the sun rises over the greatest mountains on Earth is an experience that will stay with you forever.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Climbing Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Summit the highest trekking peak in Nepal at 6,476m",
                    "Unmatched panoramic views of five 8,000m peaks: Everest, Kanchenjunga, Lhotse, Makalu, and Cho Oyu",
                    "Experience pristine wilderness in the remote Hinku Valley, away from crowded trails",
                    "Cross the challenging Zatrwa La Pass (4,610m) with spectacular mountain views",
                    "Climb on the magnificent Mera Glacier with professional guidance",
                    "Learn essential mountaineering skills - crampon use, rope techniques, glacier travel",
                    "Spectacular mountain flights to and from Lukla's thrilling airport",
                    "Opportunity to photograph sunrise over the world's highest mountains",
                    "Ideal first 6,000-meter peak with excellent success rates",
                    "Achieve a significant mountaineering milestone and receive a summit certificate",
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
                        Stable weather, warming temperatures, and longer climbing days. Rhododendrons bloom in the lower valleys. Excellent summit windows with good snow conditions.
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
                        Crystal-clear skies, stable weather, and perfect mountain views. Cooler temperatures but excellent climbing conditions. Peak season with the highest success rates.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-[8px] md:text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 mt-2">Note: Winter (Dec-Feb) is extremely cold with heavy snow and high avalanche risk. Monsoon (Jun-Aug) brings rain, clouds, and poor summit visibility - not recommended.</p>
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
                    <li>• <strong>Permits Required:</strong> Mera Peak climbing permit, Makalu Barun National Park entry permit, and local permits are all included and arranged by us.</li>
                    <li>• <strong>Physical Fitness:</strong> This is a strenuous climb requiring excellent fitness. You should be comfortable trekking 5-7 hours daily at altitude and have good cardiovascular endurance.</li>
                    <li>• <strong>Technical Experience:</strong> Previous mountaineering experience is helpful but not essential. Your guide will provide comprehensive training at Base Camp on crampon use, rope techniques, and ice axe handling.</li>
                    <li>• <strong>Travel Insurance:</strong> Mandatory - must cover high altitude climbing up to 6,500m and helicopter evacuation. This is non-negotiable for your safety.</li>
                    <li>• <strong>Lukla Flights:</strong> Weather can cause flight delays. We include buffer days, but be prepared for possible schedule changes. Pack essentials in hand luggage.</li>
                    <li>• <strong>Acclimatization:</strong> Proper acclimatization is crucial. Our itinerary includes a gradual ascent profile, rest days, and a contingency day for summit flexibility.</li>
                    <li>• <strong>Summit Bonus:</strong> It's customary to provide a summit bonus to your climbing guide and Sherpa upon successful summit (typically $200-300 total).</li>
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
                      q: "How difficult is Mera Peak climbing?",
                      a: "Mera Peak is considered the highest trekking peak in Nepal and is technically moderate. The climb involves walking on glaciers and a steep but non-technical summit ridge. No previous climbing experience is required, but excellent physical fitness and some high-altitude trekking experience are essential. The main challenges are altitude (6,476m) and endurance.",
                    },
                    {
                      q: "Do I need previous climbing experience?",
                      a: "Previous mountaineering experience is not required, but it's beneficial. Many successful climbers are experienced trekkers with good fitness who learn technical skills during training at Base Camp. You should be comfortable with heights and have a good head for exposed terrain. Your guide will teach you all necessary techniques.",
                    },
                    {
                      q: "What is the success rate on Mera Peak?",
                      a: "Mera Peak has one of the highest success rates among 6,000-meter peaks, typically 80-90% in good seasons. Spring (March-May) and autumn (September-November) offer the best conditions. Our experienced guides, proper acclimatization schedule, and contingency day significantly improve summit success.",
                    },
                    {
                      q: "What makes Mera Peak special compared to other peaks?",
                      a: "Mera Peak offers the most spectacular panoramic view of any trekking peak - you can see five 8,000-meter mountains from the summit: Everest, Kanchenjunga, Lhotse, Makalu, and Cho Oyu. The approach through the pristine Hinku Valley is also less crowded than other routes, offering a true wilderness experience.",
                    },
                    {
                      q: "What about altitude sickness?",
                      a: "Our itinerary includes proper acclimatization with a gradual ascent profile and rest days. We carry a Gamow bag and oxygen for emergencies, and our guides are trained in altitude sickness recognition. Good hydration, slow ascent, and listening to your body are crucial. The contingency day provides flexibility for acclimatization.",
                    },
                    {
                      q: "What is the accommodation like during the climb?",
                      a: "During trekking (first 5 days and last 4 days), you'll stay in basic teahouses with twin-sharing rooms and shared bathrooms. At Mera Peak Base Camp and High Camp, we use high-quality mountain tents with sleeping mats. Meals are prepared by our camp staff. Teahouses offer basic but warm facilities.",
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