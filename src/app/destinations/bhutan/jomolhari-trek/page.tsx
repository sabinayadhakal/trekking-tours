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
  MountainIcon,
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
    title: "Paro to Shana Zampa",
    altitude: "2,280m → 2,870m",
    distance: "17km / 5-6 hrs drive/trek",
    description: "After breakfast, drive approximately 1 hour to the trek start point at Drukgyel Dzong, a ruined fortress with historical significance. The trek begins here, following the Paro River upstream through beautiful valleys dotted with traditional villages and farmland. The trail passes through rice paddies and apple orchards before entering dense forest. You'll cross several suspension bridges and pass small settlements. Arrive at Shana Zampa, your first campsite in a lovely forest clearing by the river.",
    overnight: "Camping at Shana Zampa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Drukgyel Dzong visit", "Paro River valley", "Suspension bridges", "Traditional villages", "First campsite"],
  },
  {
    day: 3,
    title: "Shana Zampa to Soi Thangthangkha",
    altitude: "2,870m → 3,610m",
    distance: "20km / 6-7 hrs",
    description: "Today's trek continues following the Paro River upstream. The trail gradually ascends through beautiful mixed forests of pine, fir, and rhododendron. You'll pass several army outposts as you approach the Tibetan border region. The valley narrows and the scenery becomes more dramatic with towering cliffs and waterfalls. Cross the river several times on wooden bridges. Arrive at Soi Thangthangkha, a grassy campsite surrounded by forest. The views of surrounding peaks begin to appear.",
    overnight: "Camping at Soi Thangthangkha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Paro River valley", "Mixed forests", "Waterfalls", "Tibetan border approach", "Mountain views"],
  },
  {
    day: 4,
    title: "Soi Thangthangkha to Jangothang",
    altitude: "3,610m → 4,080m",
    distance: "19km / 6-7 hrs",
    description: "This is one of the most spectacular days of the trek. The trail continues ascending through juniper and rhododendron forests, then opens into alpine meadows with stunning views of Mount Jomolhari (7,314m) appearing ahead. You'll pass yak herder camps with their traditional tents and grazing yaks. The valley widens as you approach Jangothang, also known as 'Jomolhari Base Camp'. The campsite is in a spectacular location with Mount Jomolhari towering directly ahead and beautiful mountain views in all directions.",
    overnight: "Camping at Jangothang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Mount Jomolhari", "Yak herder camps", "Alpine meadows", "Jomolhari Base Camp", "Spectacular mountain scenery"],
  },
  {
    day: 5,
    title: "Acclimatization Day at Jangothang",
    altitude: "4,080m",
    distance: "Optional hikes",
    description: "A rest and acclimatization day at one of the most beautiful campsites in the Himalayas. Several optional hikes are available: hike to the ridge behind camp for breathtaking views of Mount Jomolhari, Jichu Drake, and Tserim Kang; visit Tshophu Lake, a beautiful alpine lake about 2 hours away; or explore the nearby yak herder settlements. This day also serves as a buffer in case of weather delays. Enjoy the spectacular mountain scenery and photograph the peaks at different times of day.",
    overnight: "Camping at Jangothang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rest and acclimatization", "Optional ridge hike", "Tshophu Lake visit", "Yak herder settlements", "Mountain photography"],
  },
  {
    day: 6,
    title: "Jangothang to Lingshi",
    altitude: "4,080m → 4,150m (via 4,830m pass)",
    distance: "18km / 7-8 hrs",
    description: "Today you cross the Nyile La Pass at 4,830m - the highest point of the trek. Start early for the challenging but rewarding climb. The trail ascends gradually at first, then becomes steeper as you approach the pass. Prayer flags mark the summit, where you'll be rewarded with spectacular 360-degree views of Mount Jomolhari, Jichu Drake, and the surrounding Himalayas. The descent to Lingshi is long but scenic, passing yak pastures and offering views of Lingshi Dzong perched on a hill. Camp near the dzong in a beautiful valley.",
    overnight: "Camping at Lingshi",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Nyile La Pass (4,830m)", "360-degree Himalayan views", "Lingshi Dzong", "Yak pastures", "Challenging but rewarding day"],
  },
  {
    day: 7,
    title: "Lingshi to Shodu",
    altitude: "4,150m → 4,100m (via 4,650m pass)",
    distance: "18km / 6-7 hrs",
    description: "Today you cross the Yeli La Pass at 4,650m. The climb is steady but less steep than yesterday, offering continuing views of the Himalayan peaks. From the pass, you'll have excellent views of Mount Jomolhari, Jichu Drake, and Mount Gangchenta. The descent is long and gradual through beautiful forests and meadows. You'll pass several chortens and mani walls before reaching Shodu, a campsite in a forest clearing by a stream. This is a beautiful, peaceful spot surrounded by rhododendron trees.",
    overnight: "Camping at Shodu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yeli La Pass (4,650m)", "Mountain panoramas", "Forest descent", "Chortens and mani walls", "Peaceful campsite"],
  },
  {
    day: 8,
    title: "Shodu to Barshong",
    altitude: "4,100m → 3,750m",
    distance: "16km / 5-6 hrs",
    description: "The trail descends gradually through dense rhododendron and bamboo forests. You'll cross several streams and pass small waterfalls. The valley narrows and the vegetation becomes thicker. You may see wildlife including monkeys and various bird species. Barshong is the site of a ruined dzong, and you'll camp near the ruins. The afternoon is free to explore the area and visit the remaining structures of the dzong.",
    overnight: "Camping at Barshong",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rhododendron forests", "Bamboo groves", "Waterfalls", "Barshong Dzong ruins", "Wildlife spotting"],
  },
  {
    day: 9,
    title: "Barshong to Dolam Kencho",
    altitude: "3,750m → 3,550m",
    distance: "15km / 5-6 hrs",
    description: "The trail continues descending through beautiful forests, following the Thimphu River. You'll pass several traditional villages and farmland as you gradually leave the high mountains behind. The valley widens and you'll see more settlements. Dolam Kencho is a small village with a monastery. Camp near the village and enjoy your last night in the tents.",
    overnight: "Camping at Dolam Kencho",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Forest descent", "Traditional villages", "Thimphu River valley", "Dolam Kencho village", "Last camping night"],
  },
  {
    day: 10,
    title: "Dolam Kencho to Thimphu",
    altitude: "3,550m → 2,320m",
    distance: "15km trek + 1 hr drive",
    description: "Final day of trekking! The trail descends through pine forests to the roadhead at Dodena, taking approximately 4-5 hours. Along the way, you'll pass traditional farmhouses and enjoy views of the Thimphu Valley spreading out below. At Dodena, your vehicle will be waiting to drive you into Thimphu (approximately 1 hour). Check into your hotel and enjoy a hot shower! Celebrate your trek completion with a farewell dinner in Thimphu.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Final trekking day", "Thimphu Valley views", "Traditional farmhouses", "Trek completion", "Farewell dinner"],
  },
  {
    day: 11,
    title: "Thimphu Sightseeing",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "A well-deserved rest day with sightseeing in Bhutan's capital city. Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Visit the National Memorial Chorten and the Buddha Dordenma statue - one of the largest Buddha statues in the world at 51.5 meters. Afternoon visit to the Folk Heritage Museum and the School of Arts and Crafts. Evening free to explore Thimphu's main street and craft market.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Buddha Dordenma", "Folk Heritage Museum", "Thimphu craft market"],
  },
  {
    day: 12,
    title: "Thimphu to Paro & Departure",
    altitude: "2,320m → 2,280m",
    distance: "50km / 1.5 hrs drive",
    description: "After breakfast, drive back to Paro. If time permits before your flight, visit the National Museum (Ta Dzong) or simply enjoy a final walk through Paro town. Transfer to Paro International Airport for your departure flight. Our representative will assist with check-in. Bid farewell to the Land of the Thunder Dragon with memories of the majestic Mount Jomolhari, high mountain passes, and the unparalleled beauty of the Himalayas.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Scenic drive to Paro", "Final shopping opportunity", "Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation (3-star with breakfast) - 1 night Paro, 2 nights Thimphu",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Camping equipment (tents, sleeping mats, kitchen tent, dining tent)",
  "Camping staff (cook, kitchen helpers)",
  "All camping meals and hot drinks",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Horse for emergency evacuation",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (11 nights = $1,100)",
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
  "Travel insurance (mandatory - must cover high altitude trekking up to 5,000m & emergency evacuation)",
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
    alt: "Mount Jomolhari",
    caption: "Mount Jomolhari (7,314m) - Bhutan's Second Highest Peak",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Jangothang",
    caption: "Jangothang - Jomolhari Base Camp",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Nyile La Pass",
    caption: "Nyile La Pass (4,830m) with Prayer Flags",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Yak Herders",
    caption: "Yak Herders in Alpine Pastures",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Lingshi Dzong",
    caption: "Lingshi Dzong on Hilltop",
  },
  {
    src: "https://images.unsplash.com/photo-1625401916060-e734a3c4d42a?q=80&w=2070&auto=format&fit=crop",
    alt: "Alpine Lake",
    caption: "Tshophu Lake near Jangothang",
  },
  {
    src: "https://images.unsplash.com/photo-1612611345910-17b9560f6e93?q=80&w=2070&auto=format&fit=crop",
    alt: "Rhododendron Forest",
    caption: "Rhododendron Forest in Bloom",
  },
  {
    src: "https://images.unsplash.com/photo-1625401878753-0b2d4d99790a?q=80&w=2070&auto=format&fit=crop",
    alt: "Mountain Camp",
    caption: "Camping Under Jomolhari",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Prayer Flags",
    caption: "Prayer Flags at Mountain Pass",
  },
];

export default function JomolhariTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // Trek name constant for auto-fill functionality
  const trekName = "Jomolhari Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Jomolhari Trek - Himkala Adventure");
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
            alt="Jomolhari Trek"
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
                <Mountain className="w-3 h-3 mr-1" /> Challenging Trek
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <MountainSnow className="w-3 h-3 mr-1" /> 4,830m Pass
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              JOMOLHARI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light px-2">
              One of Bhutan's most spectacular treks, taking you to the base of sacred Mount Jomolhari (7,314m). 
              Cross high mountain passes, camp beside alpine lakes, and experience the pristine Himalayan 
              wilderness of the Land of the Thunder Dragon.
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
                <div className="text-xs text-slate-400 line-through">$4,250</div>
                <div className="text-lg font-bold text-[#0f2940]">$3,950</div>
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
                      <span className="text-white/50 text-sm line-through">$4,250</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$3,950</div>
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
                        <span>Best: Apr-May, Sep-Oct</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>Group Size: 2-12</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Tent className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>9 Nights Camping / 2 Nights Hotel</span>
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
                        <span className="font-medium text-[#0f2940]">Nyile La (4,830m)</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Trek Duration</span>
                        <span className="font-medium text-[#0f2940]">9 Days Trekking</span>
                      </div>
                      <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                        <span className="text-slate-500">Difficulty</span>
                        <span className="font-medium text-[#0f2940]">Challenging</span>
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
                    The <strong>Jomolhari Trek</strong> is widely regarded as one of the most beautiful treks in the 
                    Himalayas, offering spectacular views of <strong>Mount Jomolhari (7,314m)</strong>, Bhutan's 
                    second-highest and most sacred peak. This <strong>9-day camping trek</strong> takes you through 
                    pristine forests, alpine meadows, and high mountain passes, following ancient trading routes 
                    along the Tibetan border.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The trek begins in the Paro Valley and gradually ascends to Jangothang (Jomolhari Base Camp), 
                    where you'll spend a full day acclimatizing and exploring the spectacular surroundings. You'll 
                    cross two high passes - <strong>Nyile La (4,830m)</strong> and <strong>Yeli La (4,650m)</strong> - 
                    with breathtaking panoramic views of the eastern Himalayas. Along the way, you'll encounter 
                    yak herders, visit remote monasteries, and camp beside pristine alpine lakes.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    This challenging but rewarding trek is perfect for experienced trekkers seeking an authentic 
                    Himalayan wilderness experience. With full camping support, expert guides, and all meals included, 
                    the Jomolhari Trek offers an unforgettable adventure through the sacred landscapes of the Land 
                    of the Thunder Dragon.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Spectacular views of sacred Mount Jomolhari (7,314m)",
                    "Cross two high passes: Nyile La (4,830m) and Yeli La (4,650m)",
                    "Camp at Jangothang - Jomolhari Base Camp",
                    "Full acclimatization day with optional lake hikes",
                    "Visit Lingshi Dzong perched on a dramatic hilltop",
                    "Encounter yak herders in alpine pastures",
                    "Trek through rhododendron and blue pine forests",
                    "Camp beside pristine alpine lakes",
                    "Experience authentic Himalayan camping",
                    "Explore traditional Bhutanese villages",
                    "All visas and SDF fees ($1,100 for 11 nights) included",
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
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Spring (Apr - May)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        Rhododendrons bloom in vibrant colors along the trail, pleasant temperatures, and clear 
                        mountain views. Some snow may remain at higher passes early in the season.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-3 md:p-5">
                      <div className="flex items-center gap-2 mb-1 md:mb-3">
                        <Sunrise className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-xs md:text-base">Autumn (Sep - Oct)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with crystal-clear skies, stable weather, and the best mountain 
                        views. Perfect conditions for crossing high passes.
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
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,000m and emergency evacuation.</li>
                    <li>• This is a <strong>challenging trek</strong> with 9 days of camping and two high passes above 4,800m - good physical preparation is essential.</li>
                    <li>• A rest/acclimatization day is included at Jangothang (4,080m) to help with altitude adjustment.</li>
                    <li>• Bhutan requires a minimum <strong>Sustainable Development Fee (SDF) of $100 per night</strong> - for 11 nights this is $1,100, fully included.</li>
                    <li>• <strong>Visa is processed by us</strong> - we need a clear passport copy and passport photo at least 15 days before travel.</li>
                    <li>• Horses are available for emergency evacuation along the trek route.</li>
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
                      q: "How difficult is the Jomolhari Trek?",
                      a: "The Jomolhari Trek is rated as challenging. You'll trek 5-8 hours daily at altitudes between 2,800m and 4,830m, with two high passes to cross. The trails are well-defined but can be steep in sections. Good physical fitness and previous trekking experience at altitude are recommended. The itinerary includes a rest day at Jangothang for acclimatization.",
                    },
                    {
                      q: "What is the highest point on the trek?",
                      a: "The highest point is Nyile La Pass at 4,830m, crossed on Day 6. You'll also cross Yeli La at 4,650m on Day 7. Both passes offer spectacular mountain views and are the most challenging days of the trek. Proper acclimatization and an early start are essential.",
                    },
                    {
                      q: "What is the camping experience like?",
                      a: "You'll camp for 9 nights in comfortable two-person tents with sleeping mats provided. Our camping crew sets up a dining tent where meals are served, and a kitchen tent where our cook prepares fresh, hot meals. Toilet tents with portable toilets are provided at each campsite. Evenings are spent around the campfire with your guide and crew.",
                    },
                    {
                      q: "What is the Sustainable Development Fee (SDF) and is it included?",
                      a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. For this 11-night tour, the SDF of $1,100 is fully included in our package price - you don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure in Bhutan.",
                    },
                    {
                      q: "Do I need a visa? How does it work?",
                      a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                    },
                    {
                      q: "What wildlife might I see on the trek?",
                      a: "The Jomolhari region is rich in wildlife. You're almost certain to encounter yaks and their herders. You may also see blue sheep, Himalayan marmots, and various bird species including the Himalayan monal (national bird of Bhutan). Lucky trekkers might spot musk deer or even the elusive snow leopard, though sightings are rare.",
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