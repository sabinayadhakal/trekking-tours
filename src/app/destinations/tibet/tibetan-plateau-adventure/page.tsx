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
  Flame,
  Landmark,
  Church,
  Compass,
  Trees,
  Cloud,
  MountainSnow,
  Gem,
  Medal,
  Wind,
  Flower2,
  Sun,
  CloudSun,
  Award,
  Eye,
  Navigation,
  Coffee,
  Sparkles,
  Footprints,
  Milestone,
  Info,
  Globe,
  ScrollText,
  MountainIcon,
  Building,
  Library,
  Music,
  Drama,
  PartyPopper,
  Castle,
  Crown,
  Sword,
  Shield,
  History,
  LandPlot,
  ThermometerSnowflake,
  Cloudy,
  Sunrise as SunriseIcon,
  Circle,
  Waves,
  Droplets,
  Store,
  ShoppingBag,
  Scroll,
  BookOpen,
  Car,
  Route,
  Compass as CompassIcon,
  Map as MapIcon,
  CloudSun as CloudSunIcon,
  Wind as WindIcon,
  MountainIcon as MountainIconLucide,
  Compass as CompassLucide,
  MapPin as MapPinIcon,
  Tent as TentIcon,
  Navigation as NavigationIcon,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Lhasa (3,650m)",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "Welcome to Lhasa, the spiritual heart of Tibet and starting point of your plateau adventure! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey into the 'Roof of the World'. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views and your first glimpse of Tibetan landscapes. After checking into your hotel in Lhasa, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the epic 12-day adventure ahead, covering the route, highlights, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic drive to Lhasa", "Acclimatization briefing", "Adventure preparation"],
  },
  {
    day: 2,
    title: "Lhasa Sightseeing - Potala Palace & Jokhang Temple",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Begin your exploration of Lhasa's cultural treasures with a visit to the iconic Potala Palace, the winter palace of the Dalai Lamas and one of Tibet's most recognizable landmarks. This 13-story marvel contains over 1,000 rooms, with stunning chapels, tombs of past Dalai Lamas, and breathtaking views of Lhasa. Your guide will explain the history and significance of this UNESCO World Heritage site. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century. The temple houses the revered Jowo Shakyamuni statue and is a major pilgrimage site. In the evening, walk around the Barkhor Street, the pilgrimage circuit surrounding Jokhang, where you'll see devout pilgrims performing prostrations and can browse traditional Tibetan handicrafts. This cultural immersion prepares you for the journey ahead. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace exploration", "Jokhang Temple", "Barkhor pilgrimage circuit", "Tibetan handicrafts", "UNESCO World Heritage sites"],
  },
  {
    day: 3,
    title: "Lhasa to Gyantse via Yamdrok Lake (4,794m)",
    altitude: "3,650m → 4,794m → 3,950m",
    distance: "260km / 6-7 hrs drive",
    description: "Depart Lhasa and begin your epic plateau adventure! Cross the Kampala Pass (4,794m) for your first breathtaking view of Yamdrok Lake - one of Tibet's three sacred lakes with turquoise waters stretching beneath majestic snow-capped mountains. Stop for photos at this incredible location. Continue through picturesque valleys to reach Gyantse, a historic trading town and former capital of the Gyantse Kingdom. Upon arrival, visit the famous Pelkor Chode Monastery and its stunning Kumbum Stupa, a unique multi-tiered structure with 108 chapels built in the 15th century. This is one of Tibet's best-preserved architectural gems. Overnight in Gyantse.",
    overnight: "Hotel in Gyantse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yamdrok Lake viewpoint", "Kampala Pass (4,794m)", "Tibetan plateau scenery", "Pelkor Chode Monastery", "Kumbum Stupa"],
  },
  {
    day: 4,
    title: "Gyantse to Shigatse - Tashilhunpo Monastery",
    altitude: "3,950m → 3,840m",
    distance: "90km / 2 hrs drive",
    description: "Morning visit to the Gyantse Dzong, an ancient fortress perched on a hill overlooking the valley. This fortress played a crucial role in defending the Gyantse Kingdom and offers panoramic views of the surrounding countryside. After exploring the dzong, drive to Shigatse, Tibet's second-largest city and traditional capital of the Tsang Kingdom. Upon arrival, visit Tashilhunpo Monastery, the traditional seat of the Panchen Lama. Founded in 1447, this massive monastery houses a magnificent 26-meter statue of Maitreya (Future Buddha) and has been a center of Tibetan Buddhism for centuries. Explore the chapels, meet the monks, and experience the spiritual atmosphere of this ancient institution. Evening free to explore Shigatse's old town. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gyantse Dzong fortress", "Tashilhunpo Monastery", "26m Maitreya statue", "Panchen Lama's seat", "Shigatse old town"],
  },
  {
    day: 5,
    title: "Shigatse to Sakya - Ancient Sakya Kingdom",
    altitude: "3,840m → 4,280m → 3,840m",
    distance: "150km / 3-4 hrs drive",
    description: "Today you'll venture to one of Tibet's most unique ancient sites - the Sakya Monastery, seat of the Sakya Kingdom that ruled Tibet in the 13th century. The drive takes you through beautiful valleys with views of Himalayan peaks. Sakya Monastery is unlike any other in Tibet, with its fortress-like architecture painted in gray and red stripes, symbolizing its unique Buddhist tradition. The monastery's northern library houses one of the world's most valuable collections of Buddhist scriptures, including thousands of ancient manuscripts. Explore the monastery's chapels, see the stunning thangkas and murals, and learn about the Sakya Kingdom's role in Tibetan history. Return to Shigatse in the evening. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Sakya Monastery - unique architecture", "Ancient Sakya Kingdom history", "Priceless Buddhist manuscripts", "13th century Tibetan kingdom", "Fortress-like monastery"],
  },
  {
    day: 6,
    title: "Shigatse to Shegar - Gateway to Everest",
    altitude: "3,840m → 4,050m",
    distance: "240km / 5-6 hrs drive",
    description: "Today you'll drive closer to the world's highest mountain, passing through ever more dramatic landscapes. The journey takes you along the Friendship Highway, with stunning views of the Himalayas appearing on the horizon. You'll pass through traditional Tibetan villages and vast plains dotted with nomad tents and grazing yaks. On clear days, you'll see Mount Everest (8,848m), Cho Oyu (8,188m), and other Himalayan giants from viewpoints along the way. Arrive in Shegar (also known as New Tingri), a small town that serves as the gateway to Everest. The views of the Himalayan range from Shegar are spectacular, especially at sunset. Overnight in Shegar.",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Friendship Highway", "First views of Everest", "Himalayan panoramas", "Tibetan nomad settlements", "Sunset mountain views"],
  },
  {
    day: 7,
    title: "Shegar to Everest Base Camp (5,200m) & Return to Shegar",
    altitude: "4,050m → 5,200m → 4,050m",
    distance: "120km round trip / 5-6 hrs drive + exploration",
    description: "Early morning drive to Everest Base Camp, the highlight of your plateau adventure! Enter the Qomolangma National Nature Reserve and wind through dramatic mountain roads to reach the Rongbuk Valley. Pass Rongbuk Monastery, the highest-altitude monastery in the world (4,980m), before reaching the legendary Everest Base Camp at 5,200m. Stand in awe of Mount Everest (8,848m) towering above you - the world's highest point. Take photos, soak in the atmosphere, and absorb the magnitude of this moment. Your guide will share stories of expeditions and the mountain's spiritual significance. After spending time at base camp, return to Shegar for overnight. Overnight in Shegar.",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest Base Camp (5,200m)", "Mount Everest close-up views", "Rongbuk Monastery", "Qomolangma National Park", "Lifetime achievement"],
  },
  {
    day: 8,
    title: "Shegar to Saga via Pelku Tso Lake",
    altitude: "4,050m → 4,500m",
    distance: "300km / 6-7 hrs drive",
    description: "Continue your westward journey across the high plateau, heading toward the sacred Mount Kailash region. Today's drive takes you through increasingly remote landscapes, with vast plains, nomadic settlements, and spectacular mountain views. Stop at Pelku Tso Lake, a beautiful turquoise lake surrounded by snow-capped peaks. This is a great spot for photography and a picnic lunch. Continue to Saga, a small town at 4,500m that serves as a gateway to the western plateau. This is your first night at this altitude - take it easy and hydrate well. Overnight in Saga.",
    overnight: "Hotel in Saga",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Western plateau crossing", "Pelku Tso Lake", "Remote Tibetan landscapes", "Nomadic settlements", "High-altitude acclimatization"],
  },
  {
    day: 9,
    title: "Saga to Lake Manasarovar (4,590m)",
    altitude: "4,500m → 4,590m",
    distance: "300km / 6-7 hrs drive",
    description: "Continue your sacred journey toward Lake Manasarovar, one of the holiest lakes in Asia. The drive takes you through ever more dramatic landscapes, with the Himalayas constantly visible on the horizon. Pass through Mayum La Pass (5,200m) with stunning views. Finally, the moment you've been waiting for - your first glimpse of sacred Lake Manasarovar and Mount Kailash in the distance! Reach the shores of the holiest lake in Asia, where Hindus, Buddhists, and Jains have pilgrimaged for millennia. Arrive at your guesthouse near the lake. In the evening, participate in a special puja (prayer ceremony) by the lake, a profoundly spiritual experience. Overnight near Lake Manasarovar.",
    overnight: "Guesthouse near Manasarovar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First glimpse of Lake Manasarovar", "First view of Mount Kailash", "Sacred lake arrival", "Evening puja ceremony", "Spiritual culmination"],
  },
  {
    day: 10,
    title: "Lake Manasarovar Exploration & Darchen",
    altitude: "4,590m → 4,670m",
    distance: "40km / 1 hr drive + exploration",
    description: "A full morning dedicated to the sacred Lake Manasarovar. According to Hindu mythology, the lake was created in the mind of Brahma, and bathing here cleanses all sins. Take a holy dip in the sacred waters (be prepared - it's cold!), perform your own puja, and offer prayers. Walk along the shores, meditate, and absorb the spiritual energy of this unique place. Visit the nearby monasteries, including Chiu Gompa perched on a hill with spectacular lake views. After lunch, drive to Darchen, the base town for Mount Kailash pilgrimage. En route, you'll have your closest view of the south face of Mount Kailash - the most photogenic aspect of the sacred mountain. Stop at the viewpoint for photos and prayers. Overnight in Darchen.",
    overnight: "Guesthouse in Darchen",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Holy bath in Manasarovar", "Personal puja and prayers", "Chiu Gompa visit", "South face of Mount Kailash", "Spiritual immersion"],
  },
  {
    day: 11,
    title: "Darchen to Saga - Return Journey",
    altitude: "4,670m → 4,500m",
    distance: "450km / 8-9 hrs drive",
    description: "Begin your return journey, retracing the route across the western Tibetan plateau. The long drive offers final views of the sacred mountain and lake. Stop at viewpoints for last photographs and prayers. The landscape is no less beautiful on the return, with the Himalayas accompanying you. Arrive in Saga by evening, descending slightly in altitude. Reflect on the profound experiences of the past days. Overnight in Saga.",
    overnight: "Hotel in Saga",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Farewell views of Kailash", "Last Manasarovar glimpses", "Western plateau crossing", "Reflection time", "Gradual descent"],
  },
  {
    day: 12,
    title: "Saga to Lhasa & Departure",
    altitude: "4,500m → 3,650m",
    distance: "450km / 8-9 hrs drive + departure",
    description: "Final day of your epic plateau adventure! Drive from Saga back to Lhasa, crossing the vast Tibetan plateau one last time. Stop at scenic viewpoints along the way for final photos of this incredible landscape. Depending on your flight time, you may have a quick transfer to the airport or an overnight in Lhasa before departure. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of sacred lakes, ancient monasteries, Everest Base Camp, and the unparalleled beauty of the Tibetan plateau. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Final plateau crossing", "Last mountain views", "Airport transfer", "Departure assistance", "Epic adventure memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "11 nights hotel/guesthouse accommodation (3-star hotels in cities, basic guesthouses in remote areas)",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private 4WD Land Cruiser for all overland journeys",
  "All monument entrance fees",
  "Everest Base Camp entry permit and vehicle permit",
  "Lake Manasarovar entry permit",
  "Mount Kailash viewing permit",
  "Tibet Travel Permit (processed by us)",
  "Alien's Travel Permit",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "Puja supplies for Manasarovar ceremony",
  "All government taxes and official expenses",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 5,500m and emergency evacuation)",
  "China Visa (required separately - we provide Tibet Permit support)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Additional oxygen (supplemental oxygen available on request)",
  "Sleeping bag (recommended for Manasarovar guesthouse)",
  "Single room supplement (if applicable)",
];

const gallery = [
  {
    src: "/images/used/tibet-everest.webp",
    alt: "Mount Everest",
    caption: "Mount Everest (8,848m) from Tibetan Plateau",
  },
  {
    src: "/images/used/tibet-lake-1.webp",
    alt: "Lake ",
    caption: "Sacred Lake ",
  },
  {
    src: "/images/used/yamdrok-lake.webp",
    alt: "Yamdrok Lake",
    caption: "Turquoise Yamdrok Lake",
  },
  {
    src:"/images/used/tibet-1.webp",
    alt: "Potala Palace",
    caption: "Potala Palace, Lhasa",
  },
 
  {
    src: "/images/used/tibet-plateau.webp",
    alt: "Tibetan Plateau",
    caption: "Vast Tibetan Plateau Landscape",
  },
 
];

const routeInfo = [
  {
    segment: "Lhasa → Gyantse",
    distance: "260km",
    highlights: "Yamdrok Lake, Kampala Pass (4,794m)",
  },
  {
    segment: "Gyantse → Shigatse",
    distance: "90km",
    highlights: "Gyantse Dzong, Tashilhunpo",
  },
  {
    segment: "Shigatse → Sakya",
    distance: "150km",
    highlights: "Sakya Monastery",
  },
  {
    segment: "Shigatse → Shegar",
    distance: "240km",
    highlights: "Himalayan views, Everest panorama",
  },
  {
    segment: "Shegar → EBC",
    distance: "60km",
    highlights: "Everest Base Camp (5,200m)",
  },
  {
    segment: "Shegar → Saga",
    distance: "300km",
    highlights: "Pelku Tso Lake",
  },
  {
    segment: "Saga → Manasarovar",
    distance: "300km",
    highlights: "Lake Manasarovar, Kailash view",
  },
  {
    segment: "Manasarovar → Saga",
    distance: "450km",
    highlights: "Return journey",
  },
  {
    segment: "Saga → Lhasa",
    distance: "450km",
    highlights: "Final plateau crossing",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa",
    altitude: "3,650m",
    overnight: "2 nights",
    notes: "Start point, acclimatization",
  },
  {
    location: "Kampala Pass",
    altitude: "4,794m",
    overnight: "Pass only",
    notes: "Highest pass, Yamdrok view",
  },
  {
    location: "Gyantse",
    altitude: "3,950m",
    overnight: "1 night",
    notes: "Historic trading town",
  },
  {
    location: "Shigatse",
    altitude: "3,840m",
    overnight: "2 nights",
    notes: "Tibet's second city",
  },
  {
    location: "Sakya",
    altitude: "4,280m",
    overnight: "Day trip",
    notes: "Ancient kingdom",
  },
  {
    location: "Shegar",
    altitude: "4,050m",
    overnight: "2 nights",
    notes: "Everest gateway",
  },
  {
    location: "Everest Base Camp",
    altitude: "5,200m",
    overnight: "Day visit",
    notes: "Highest point",
  },
  {
    location: "Saga",
    altitude: "4,500m",
    overnight: "2 nights",
    notes: "Western plateau gateway",
  },
  {
    location: "Lake Manasarovar",
    altitude: "4,590m",
    overnight: "1 night",
    notes: "Sacred lake",
  },
  {
    location: "Darchen",
    altitude: "4,670m",
    overnight: "1 night",
    notes: "Kailash base",
  },
];

export default function TibetanPlateauAdventurePage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 6, 7, 9, 10]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Tour name constant for auto-fill functionality
  const tourName = "12-Day Tibetan Plateau Adventure";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("12-Day Tibetan Plateau Adventure - Himkala Adventure");
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
                <a href="#route" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Route Map
                </a>
                <a href="#altitude" onClick={() => setShowMobileNav(false)} className="block py-3 px-4 text-[#2d6a8a] hover:bg-[#f0f7fa] rounded-lg">
                  Altitude Profile
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
            src="/images/used/tibet-plateau.webp"
            alt="Tibetan Plateau Adventure"
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
                <MapPin className="w-3 h-3 mr-1" /> Tibet Autonomous Region
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Route className="w-3 h-3 mr-1" /> Epic Overland Journey
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 5,200m Highest Point
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              12 DAYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                TIBETAN PLATEAU ADVENTURE
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              The ultimate Tibetan odyssey - traverse the entire plateau from Lhasa to the sacred Mount Kailash region. 
              Visit Everest Base Camp, three holy lakes, ancient kingdoms, and experience the roof of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-12">
        <div className="container mx-auto px-3 md:px-6 max-w-full overflow-hidden">
          {/* Mobile Sticky Book Now Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#C5E0ED]/30 shadow-sm py-2 -mx-3 px-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">$3,250</div>
                <div className="text-lg font-bold text-[#0f2940]">$2,950</div>
              </div>
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
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
                      <span className="text-white/50 text-sm line-through">$3,250</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,950</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>12 Days / 11 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Jun-Oct</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 4-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Car className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>4WD Land Cruiser</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Max Altitude: 5,200m</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Adventure
                      </Button>
                    </Link>
                    
                    {/* WhatsApp Now Button */}
                    <a 
                      href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-full h-10 md:h-12 text-sm md:text-base">
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> WhatsApp Now
                      </Button>
                    </a>
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
                        <span className="text-slate-500">Start/End Point</span>
                        <span className="font-medium text-[#0f2940]">Lhasa</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Total Distance</span>
                        <span className="font-medium text-[#0f2940]">~2,500km</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Everest Base Camp (5,200m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Lakes Visited</span>
                        <span className="font-medium text-[#0f2940]">Yamdrok, Pelku Tso, Manasarovar</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Challenging (high altitude)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Permits</span>
                        <span className="font-medium text-[#0f2940]">Tibet Permit + Multiple Special Permits</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Route Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <Route className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Route Overview
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm max-h-60 overflow-y-auto pr-1">
                      {routeInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 border-b border-[#C5E0ED]/20 last:border-0 pb-1.5 last:pb-0">
                          <div className="w-28 font-medium text-[#0f2940] text-[10px]">{item.segment}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-600 text-[10px]">{item.distance}</span>
                            </div>
                            <p className="text-slate-500 text-[8px]">{item.highlights}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Altitude Guide Card */}
                <Card className="bg-[#f8fbfc] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-[#0f2940] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                      <MountainSnow className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> Altitude Profile
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm max-h-60 overflow-y-auto pr-1">
                      {altitudeInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 border-b border-[#C5E0ED]/20 last:border-0 pb-1.5 last:pb-0">
                          <div className="w-20 font-medium text-[#0f2940] text-[10px]">{item.location}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-slate-600 text-[10px]">{item.altitude}</span>
                              {item.overnight && (
                                <span className="text-slate-400 text-[8px]">{item.overnight}</span>
                              )}
                            </div>
                            <p className="text-slate-500 text-[8px]">{item.notes}</p>
                          </div>
                        </div>
                      ))}
                      <div className="mt-2 bg-amber-50 p-2 rounded-lg">
                        <p className="text-amber-700 text-[8px] flex items-start gap-1">
                          <Info className="w-2.5 h-2.5 shrink-0 mt-0.5" />
                          <span><strong>Acclimatization:</strong> Gradual ascent with multiple nights at increasing altitudes.</span>
                        </p>
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
            <article className="lg:col-span-8 w-full overflow-hidden">
              {/* Mobile Share Buttons */}
              <div className="lg:hidden flex gap-2 mb-4">
                <Button
                  size="sm"
                  className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3 h-3 mr-1" /> Share
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-lg text-xs py-1.5 min-h-[44px]"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-3 h-3 mr-1" /> Tweet
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 rounded-lg text-xs py-1.5 min-h-[44px]"
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
                    The <strong>12-Day Tibetan Plateau Adventure</strong> is the ultimate overland journey across the 
                    <strong> 'Roof of the World'</strong>. This epic expedition traverses the entire Tibetan plateau 
                    from Lhasa to the sacred Mount Kailash region, covering approximately <strong>2,500km</strong> of 
                    the world's most spectacular and remote landscapes.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    Your journey takes you to three of Tibet's most sacred lakes (<strong>Yamdrok, Pelku Tso, and 
                    Manasarovar</strong>), the base of the world's highest mountain at <strong>Everest Base Camp (5,200m)</strong>, 
                    ancient kingdoms including Sakya, and culminates with a visit to the shores of holy Lake Manasarovar 
                    with views of sacred Mount Kailash. You'll explore historic cities, remote monasteries, and experience 
                    the living culture of Tibetan nomads.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    With comfortable 4WD transport, expert local guides, and careful acclimatization built into the 
                    itinerary, this adventure offers an unparalleled opportunity to experience the full diversity of 
                    Tibet. Perfect for adventurers seeking the ultimate Tibetan road trip and those wishing to follow 
                    in the footsteps of ancient pilgrims.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Adventure Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Traverse the entire Tibetan plateau - 2,500km journey",
                    "Stand at Everest Base Camp (5,200m) - North Side",
                    "Visit three sacred lakes: Yamdrok, Pelku Tso, and Manasarovar",
                    "Perform puja and holy bath at Lake Manasarovar",
                    "View sacred Mount Kailash from the south face",
                    "Explore ancient Sakya Monastery and kingdom",
                    "Visit Potala Palace, Jokhang, and Tashilhunpo",
                    "Cross multiple high passes above 4,700m",
                    "Experience Tibetan nomad culture",
                    "Photograph the Himalayas from multiple viewpoints",
                    "All permits including EBC and Manasarovar included",
                    "Expert guides specializing in Tibetan history and culture",
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
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Best Time to Travel</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Summer (Jun - Aug)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Warmest temperatures, green pastures, and best access to remote areas. Longer daylight hours 
                        for driving. Occasional afternoon showers but generally good conditions.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <SunriseIcon className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Oct)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear skies, stable weather, and spectacular mountain 
                        views. Perfect for photography and long drives.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Sacred Lakes Section */}
              <section className="mb-6 md:mb-12">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/50 rounded-lg md:rounded-2xl overflow-hidden">
                  <CardContent className="p-3 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#0f2940] text-sm md:text-lg">Three Sacred Lakes of Tibet</h3>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">
                      Your journey visits three of Tibet's most sacred and beautiful lakes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Yamdrok Lake</span>
                        <p className="text-slate-600 text-[10px]">4,440m</p>
                        <p className="text-slate-500 text-[8px]">Turquoise waters, Kampala Pass</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Pelku Tso</span>
                        <p className="text-slate-600 text-[10px]">4,500m</p>
                        <p className="text-slate-500 text-[8px]">Remote beauty, western plateau</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg">
                        <span className="text-[#0f2940] font-bold text-xs">Manasarovar</span>
                        <p className="text-slate-600 text-[10px]">4,590m</p>
                        <p className="text-slate-500 text-[8px]">Holy lake, puja site, Kailash views</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                                <Car className="w-2.5 h-2.5 md:w-3 md:h-3" /> {day.distance}
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
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#f8fbfc] rounded-lg p-2 md:p-3">
                                <TentIcon className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" />
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
                      <h3 className="font-bold text-green-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
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
                      <h3 className="font-bold text-red-800 mb-2 md:mb-4 flex items-center gap-2 text-sm md:text-base">
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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information - Plateau Adventure</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is MANDATORY</strong> and must cover high altitude up to 5,500m and emergency helicopter evacuation.</li>
                    <li>• <strong>Altitude Acclimatization:</strong> This journey involves prolonged periods above 4,500m. The itinerary includes gradual ascent with multiple nights at increasing altitudes. Even so, altitude sickness is possible. Listen to your body and guide.</li>
                    <li>• <strong>Remote Travel:</strong> The western plateau is extremely remote with limited facilities. Be prepared for basic accommodation, long driving days, and no mobile signal for extended periods.</li>
                    <li>• <strong>Passport and Permits:</strong> You need a valid passport (6+ months) and China Visa. We arrange all Tibet permits including special permits for Everest, Manasarovar, and western Tibet. Submit passport copy at least 30 days before travel.</li>
                    <li>• <strong>Physical Preparation:</strong> This is a demanding journey due to altitude and long days. Good fitness and previous high-altitude experience recommended.</li>
                    <li>• <strong>What to pack:</strong> Warm layers (temperatures below freezing at night), good sleeping bag, trekking boots for short walks, sunscreen, sunglasses, and personal medications.</li>
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
                      q: "Is this tour suitable for first-time visitors to Tibet?",
                      a: "This is an advanced adventure tour designed for those with some high-altitude experience or excellent fitness. First-time visitors might prefer our shorter Lhasa or Everest tours. However, if you're determined and well-prepared, it's possible with good acclimatization. The journey involves 12 days at high altitude with long drives and basic accommodation.",
                    },
                    {
                      q: "How challenging are the long driving days?",
                      a: "Driving days range from 4-9 hours on sometimes rough roads. The vehicles are comfortable 4WD Land Cruisers, but the terrain can be bumpy. We take regular breaks for photos, meals, and rest. The longest days are Saga to Manasarovar and the return from Manasarovar (8-9 hours). Good preparation and a positive attitude are essential.",
                    },
                    {
                      q: "What is the accommodation like in remote western Tibet?",
                      a: "In Lhasa, Gyantse, and Shigatse, you'll stay in comfortable 3-star hotels. In Shegar and Saga, accommodation is comfortable but more basic. At Manasarovar and Darchen, expect very basic guesthouses with shared facilities, no heating, and limited electricity. This is part of the remote adventure experience. Bring a warm sleeping bag.",
                    },
                    {
                      q: "Will I see Mount Kailash up close?",
                      a: "You'll have excellent views of the south face of Mount Kailash from the viewpoint near Darchen and from the shores of Lake Manasarovar. However, this tour does not include the Kora (circumambulation) of Kailash, which requires an additional 3 days. If you wish to do the Kora, please contact us for our Kailash Mansarovar tour.",
                    },
                    {
                      q: "What permits do I need for this journey?",
                      a: "You need: 1) China Visa, 2) Tibet Travel Permit, 3) Alien's Travel Permit, 4) Military Permit for western Tibet, 5) Everest Permit, and 6) Manasarovar Permit. We arrange all Tibet permits for you - we need your passport copy at least 30 days before travel. China Visa must be obtained separately.",
                    },
                    {
                      q: "How will the altitude affect me on this long journey?",
                      a: "You'll spend 11 nights above 3,650m, with 7 nights above 4,000m and 2 nights above 4,500m. Most people experience some symptoms - headache, fatigue, shortness of breath. Our gradual itinerary helps with acclimatization. We carry oxygen and our guides are trained in altitude sickness recognition. Inform your guide immediately if you feel unwell.",
                    },
                    {
                      q: "Is there mobile phone signal on the plateau?",
                      a: "Mobile signal is available in Lhasa, Gyantse, Shigatse, and Shegar. In remote areas of western Tibet (Saga to Manasarovar), signal is extremely limited or non-existent. This is a true wilderness adventure - embrace the disconnection! Our guides carry satellite phones for emergencies only.",
                    },
                    {
                      q: "What is the food like on the tour?",
                      a: "Meals include a mix of Tibetan, Chinese, and some Western dishes. In cities, you'll eat at restaurants. In remote areas, meals are prepared by your guide or at basic guesthouses. Expect hearty, simple food. Vegetarian options are available with advance notice. Pack some favorite snacks from home for the journey.",
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