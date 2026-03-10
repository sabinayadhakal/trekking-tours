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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro",
    altitude: "2,280m",
    distance: "-",
    description: "Welcome to Bhutan! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. After check-in at your hotel, receive a comprehensive trek briefing where we'll discuss the route, check your gear, and handle permit arrangements. Evening visit to the National Museum (Ta Dzong) and Paro Rinpung Dzong. Walk through Paro town and prepare for tomorrow's trek start.",
    overnight: "Hotel in Paro",
    meals: "Dinner",
    highlights: ["Airport pickup", "Traditional welcome", "Trek briefing", "Paro town exploration"],
  },
  {
    day: 2,
    title: "Trek to Jele Dzong",
    altitude: "2,280m → 3,480m",
    distance: "8km / 4-5 hrs",
    description: "After breakfast, drive to the trailhead at Ta Dzong (National Museum). The trek begins with a gradual climb through blue pine forests, ascending steadily with occasional views of the Paro Valley below. The trail passes traditional villages and farmland before entering denser forest. Arrive at Jele Dzong, a ruined fortress with a small monastery. The campsite offers stunning views of Mount Chomolhari and the surrounding mountains on clear days. Set up camp and enjoy the evening surrounded by nature.",
    overnight: "Camping at Jele Dzong",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Trek commencement", "Blue pine forests", "Jele Dzong ruins", "First mountain views", "Camping experience"],
  },
  {
    day: 3,
    title: "Jele Dzong to Jangchulakha",
    altitude: "3,480m → 3,770m",
    distance: "10km / 5-6 hrs",
    description: "Today's trail follows the ridge line with breathtaking views of the Himalayas, including Mount Chomolhari, Jichu Drake, and Tserim Kang. The path winds through dwarf rhododendron trees and alpine meadows. You may encounter yaks grazing in the pastures. The trail is undulating with several ascents and descents. Jangchulakha is a beautiful campsite near a small lake. Evening around the campfire with your trekking crew.",
    overnight: "Camping at Jangchulakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Himalayan panoramas", "Rhododendron forests", "Yak pastures", "Alpine meadows", "Mountain lakes"],
  },
  {
    day: 4,
    title: "Jangchulakha to Jimilangtsho",
    altitude: "3,770m → 3,870m",
    distance: "11km / 5-6 hrs",
    description: "The trail continues along the ridge, offering more stunning mountain views. You'll pass several yak herder camps and small settlements. The landscape opens up with vast alpine meadows and pristine lakes. Jimilangtsho is named after the nearby lake, which is home to large trout. The campsite is situated in a beautiful valley surrounded by mountains. Enjoy the tranquility and perhaps try some fishing in the lake.",
    overnight: "Camping at Jimilangtsho",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Ridge walking", "Yak herder camps", "Alpine lakes", "Trout fishing opportunity", "Mountain scenery"],
  },
  {
    day: 5,
    title: "Jimilangtsho to Simkotra Tsho",
    altitude: "3,870m → 4,110m",
    distance: "11km / 5-6 hrs",
    description: "Today's trek takes you to the highest altitude of the Druk Path. The trail climbs gradually through alpine terrain with stunning views of the surrounding peaks. You'll pass several beautiful lakes, including the twin lakes of Janetsho and the scenic Simkotra Tsho. The campsite is located near the lake, offering spectacular sunset views over the mountains. This is a great day for photography with the reflective lakes and mountain backdrops.",
    overnight: "Camping at Simkotra Tsho",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Highest point (4,110m)", "Twin lakes of Janetsho", "Simkotra Tsho lake", "Sunset photography", "Alpine scenery"],
  },
  {
    day: 6,
    title: "Simkotra Tsho to Phajoding",
    altitude: "4,110m → 3,750m",
    distance: "10km / 4-5 hrs",
    description: "The trail descends gradually through rhododendron and juniper forests. On clear days, you'll have magnificent views of the Thimphu Valley and the surrounding mountains. Phajoding is a monastery complex with several temples, some dating back to the 13th century. The monks may offer blessings to trekkers. The campsite is located near the monastery with views overlooking Thimphu city lights in the evening.",
    overnight: "Camping at Phajoding",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest descent", "Thimphu Valley views", "Phajoding Monastery", "Monk blessings", "City lights view"],
  },
  {
    day: 7,
    title: "Phajoding to Thimphu & Sightseeing",
    altitude: "3,750m → 2,320m",
    distance: "5km descent / 3 hrs trek + sightseeing",
    description: "Morning descent through blue pine forest to Thimphu, taking approximately 3 hours. The trail offers beautiful views of the Thimphu Valley as you descend. Upon arrival in Thimphu, check into your hotel and freshen up. Afternoon sightseeing in Bhutan's capital city: visit the Buddha Dordenma statue, the massive 51.5-meter bronze statue overlooking the valley, and the National Memorial Chorten. Evening free to explore Thimphu's main street and craft market. Celebrate your trek completion with a farewell dinner.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final descent", "Thimphu Valley views", "Buddha Dordenma", "National Memorial Chorten", "Farewell dinner"],
  },
  {
    day: 8,
    title: "Thimphu Sightseeing & Drive to Paro",
    altitude: "2,320m → 2,280m",
    distance: "50km / 1.5 hrs drive",
    description: "Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional Bhutanese painting and sculpture. After lunch, drive back to Paro with stops at scenic viewpoints. Evening free for last-minute souvenir shopping in Paro town.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "Arts and Crafts School", "Scenic drive", "Paro town exploration"],
  },
  {
    day: 9,
    title: "Departure from Paro",
    altitude: "2,280m",
    distance: "-",
    description: "After breakfast, transfer to Paro International Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the Land of the Thunder Dragon with memories of pristine mountain trails, high-altitude lakes, and the unparalleled beauty of the Druk Path.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Paro (3-star with breakfast)",
  "1 night hotel accommodation in Thimphu (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Camping equipment (tents, sleeping mats, kitchen tent, dining tent)",
  "Camping staff (cook, kitchen helpers)",
  "All camping meals and hot drinks",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (8 nights = $800)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket for high altitude (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,500m & emergency evacuation)",
  "Personal trekking gear and equipment (trekking boots, warm clothing, etc.)",
  "Meals in Paro and Thimphu (except welcome dinner and breakfasts)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guides, porters, and drivers (recommended)",
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Druk Path Trek",
    caption: "Druk Path Trek - Himalayan Panorama",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Mountain Lake",
    caption: "Alpine Lake on Druk Path",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Camping",
    caption: "Camping Under the Stars",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Rhododendron Forest",
    caption: "Rhododendron Forest in Bloom",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Yak Herd",
    caption: "Yaks in Alpine Pastures",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Phajoding Monastery",
    caption: "Phajoding Monastery",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Mountain Views",
    caption: "Views of Mount Chomolhari",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Paro Valley",
    caption: "Paro Valley from the Trail",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Prayer Flags",
    caption: "Prayer Flags on the Druk Path",
  },
];

export default function DrukPathTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Druk Path Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Druk Path Trek - Himkala Adventure");
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
            src="https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop"
            alt="Druk Path Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Kingdom of Bhutan
              </Badge>
              <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Mountain className="w-3 h-3 mr-1" /> Moderate Trek
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Tent className="w-3 h-3 mr-1" /> Camping Trek
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              DRUK PATH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              One of Bhutan's most beautiful short treks, connecting Paro and Thimphu through pristine 
              alpine forests, high mountain lakes, and stunning Himalayan panoramas. Experience camping 
              under the stars and authentic Bhutanese wilderness.
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
                      <span className="text-white/50 text-sm line-through">$3,250</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$2,950</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $300</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>9 Days / 8 Nights</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Best: Mar-May, Sep-Nov</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>5 Nights Camping / 3 Nights Hotel</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Utensils className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>All Meals Included</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                      <Button className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#0f2940] font-bold rounded-full h-10 md:h-12 mb-2 md:mb-3 text-sm md:text-base">
                        <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Book This Trek
                      </Button>
                    </Link>
                    
                    {/* WhatsApp Now Button */}
                    <a 
                      href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
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
                        <span className="text-slate-500">Start Point</span>
                        <span className="font-medium text-[#0f2940]">Paro</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">End Point</span>
                        <span className="font-medium text-[#0f2940]">Thimphu → Paro</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Highest Point</span>
                        <span className="font-medium text-[#0f2940]">Simkotra Tsho (4,110m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek Duration</span>
                        <span className="font-medium text-[#0f2940]">6 Days Trekking</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Moderate</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2">
                        <span className="text-slate-500">Visa & SDF</span>
                        <span className="font-medium text-[#0f2940]">Fully Included</span>
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
                    The <strong>Druk Path Trek</strong> is one of Bhutan's most beloved short treks, connecting 
                    the historic valleys of Paro and Thimphu. This <strong>6-day camping trek</strong> takes you 
                    through pristine alpine forests, past sparkling high-altitude lakes, and offers breathtaking 
                    views of the eastern Himalayas including <strong>Mount Chomolhari (7,326m)</strong>, Bhutan's 
                    second-highest peak.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trail follows an ancient trading and pilgrimage route, passing sacred sites, yak herder 
                    camps, and the ruins of Jele Dzong. You'll camp at scenic locations near mountain lakes, 
                    experience authentic Bhutanese wilderness, and enjoy the camaraderie of your trekking crew 
                    around the campfire each evening.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This trek is perfect for those seeking a genuine Himalayan trekking experience without the 
                    extreme altitude or duration of longer expeditions. With full camping support, expert guides, 
                    and all meals included, the Druk Path offers an unforgettable adventure through the pristine 
                    wilderness of the Land of the Thunder Dragon.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Stunning views of Mount Chomolhari and the eastern Himalayas",
                    "Camp beside pristine high-altitude lakes",
                    "Trek through ancient blue pine and rhododendron forests",
                    "Visit Jele Dzong ruins and Phajoding Monastery",
                    "Encounter yaks and nomadic herders in alpine pastures",
                    "Cross the highest point at Simkotra Tsho (4,110m)",
                    "Experience authentic camping under the stars",
                    "Photograph reflective mountain lakes and panoramas",
                    "Connect Paro and Thimphu valleys through wilderness",
                    "Campfire evenings with your trekking crew",
                    "All visas and SDF fees ($800 for 8 nights) included",
                    "Expert local guides sharing cultural and natural insights",
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
                        <Flower2 className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Mar - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Rhododendrons bloom in vibrant colors along the trail, pleasant temperatures, and clear 
                        mountain views. Some snow may remain at higher elevations early in the season.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear skies, stable weather, and the best mountain 
                        views. Perfect conditions for camping and photography.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
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
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2 md:pt-4 mb-2 md:mb-4">{day.description}</p>

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
                  <h4 className="font-bold text-amber-800 mb-1 md:mb-2 text-xs md:text-base">Important Information</h4>
                  <ul className="text-amber-700 text-[10px] md:text-sm leading-relaxed space-y-1 md:space-y-2">
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 4,500m and emergency evacuation.</li>
                    <li>• This is a <strong>camping trek</strong> with 5 nights in tents - all camping equipment provided including tents, sleeping mats, and dining tent.</li>
                    <li>• The trek reaches 4,110m - proper acclimatization is built into the itinerary.</li>
                    <li>• Bhutan requires a minimum <strong>Sustainable Development Fee (SDF) of $100 per night</strong> - for 8 nights this is $800, fully included.</li>
                    <li>• <strong>Visa is processed by us</strong> - we need a clear passport copy and passport photo at least 15 days before travel.</li>
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
                      q: "How difficult is the Druk Path Trek?",
                      a: "The Druk Path Trek is rated as moderate. You'll trek 4-6 hours daily at altitudes between 2,800m and 4,110m. The trails are well-defined with gradual ascents and descents. Previous trekking experience is helpful but not essential if you have good fitness. The itinerary includes gradual altitude gain for proper acclimatization.",
                    },
                    {
                      q: "What is the camping experience like?",
                      a: "You'll stay in comfortable two-person tents with sleeping mats provided. Our camping crew sets up a dining tent where meals are served, and a kitchen tent where our cook prepares fresh, hot meals. Toilet tents with portable toilets are provided at each campsite. Evenings are spent around the campfire with your guide and crew.",
                    },
                    {
                      q: "What is the Sustainable Development Fee (SDF) and is it included?",
                      a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. For this 8-night tour, the SDF of $800 is fully included in our package price - you don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure in Bhutan.",
                    },
                    {
                      q: "Do I need a visa? How does it work?",
                      a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                    },
                    {
                      q: "What kind of wildlife might I see?",
                      a: "The Druk Path is home to various wildlife including Himalayan monals (national bird of Bhutan), pheasants, and occasionally musk deer. You're almost certain to encounter yaks and their herders in the alpine pastures. The lakes are home to trout, and you may spot various bird species throughout the trek.",
                    },
                    {
                      q: "What should I pack for this trek?",
                      a: "Essential items include: broken-in trekking boots, warm layers (fleece, down jacket), waterproof jacket and pants, sleeping bag (we provide but you may bring your own), trekking poles, headlamp, water bottles, sunscreen, sunglasses, hat, and personal toiletries. A detailed packing list will be provided after booking.",
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