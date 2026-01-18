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
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Thamel. After check-in, attend a comprehensive trek briefing where we'll discuss the route, check your gear, and handle permit arrangements. Evening free to explore the vibrant streets of Thamel or rest after your journey.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: ["Airport pickup", "Trek briefing", "Gear check", "Permit arrangements"],
  },
  {
    day: 2,
    title: "Drive to Soti Khola",
    altitude: "730m",
    distance: "140km / 7-8 hrs drive",
    description: "Early morning departure from Kathmandu. We drive through the scenic mid-hills of Nepal, passing through Dhading Besi and Arughat. The road winds through terraced farmlands, traditional villages, and lush subtropical forests. The journey offers glimpses of rural Nepali life and distant mountain views. Arrive at Soti Khola, a small village on the banks of the Budhi Gandaki River.",
    overnight: "Teahouse in Soti Khola",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive through mid-hills", "Views of terraced farmlands", "First glimpse of Budhi Gandaki River"],
  },
  {
    day: 3,
    title: "Trek to Machha Khola",
    altitude: "890m",
    distance: "14km / 6-7 hrs",
    description: "Our trekking adventure begins! The trail follows the Budhi Gandaki River through a narrow gorge, crossing it multiple times on suspension bridges. We pass through Khursane and Labubesi, walking through subtropical forests with sal trees and banana plants. The path alternates between rocky riverside trails and forested sections. Watch for langur monkeys and colorful birds.",
    overnight: "Teahouse in Machha Khola",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First day of trekking", "Suspension bridge crossings", "Subtropical forest", "Riverside trails"],
  },
  {
    day: 4,
    title: "Trek to Jagat",
    altitude: "1,340m",
    distance: "12km / 6-7 hrs",
    description: "Continue along the Budhi Gandaki through increasingly dramatic gorge scenery. The trail becomes more rugged with some steep climbs and descents. We pass through Khorlabesi with its hot springs (time for a quick dip if desired) and the villages of Tatopani and Dobhan. At Jagat, we reach the first permit checkpoint and enter the Manaslu Conservation Area.",
    overnight: "Teahouse in Jagat",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Hot springs at Khorlabesi", "Dramatic gorge scenery", "Manaslu Conservation Area entry", "First checkpoint"],
  },
  {
    day: 5,
    title: "Trek to Deng",
    altitude: "1,860m",
    distance: "11km / 6-7 hrs",
    description: "Cross to the west bank of the Budhi Gandaki on a dramatic suspension bridge. The landscape begins to change as we enter the Tibetan cultural zone. Notice the mani walls (stones carved with Buddhist prayers), chortens (Buddhist shrines), and prayer flags becoming more frequent. The village of Philim offers stunning views and marks our entry into a more remote region.",
    overnight: "Teahouse in Deng",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Entry into Tibetan cultural zone", "Mani walls and chortens", "Village of Philim", "Changing landscape"],
  },
  {
    day: 6,
    title: "Trek to Namrung",
    altitude: "2,660m",
    distance: "8km / 5-6 hrs",
    description: "A shorter but steep day with significant altitude gain. The trail climbs through beautiful rhododendron and pine forests, offering occasional views of distant peaks. We enter the Nubri Valley, where Tibetan influence becomes dominant in architecture, dress, and culture. Namrung is a picturesque village with traditional flat-roofed stone houses decorated with prayer flags.",
    overnight: "Teahouse in Namrung",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Rhododendron forests", "Nubri Valley", "Tibetan-style architecture", "Significant altitude gain"],
  },
  {
    day: 7,
    title: "Trek to Samagaon",
    altitude: "3,530m",
    distance: "9km / 5-6 hrs",
    description: "Today we catch our first breathtaking views of Mount Manaslu (8,163m)! The trail passes through Lihi and Sho villages, climbing gradually through forests with stunning mountain panoramas. Samagaon (also called Sama) is the largest village on the circuit, with a gompa (monastery) and school. This traditional Tibetan village is surrounded by dramatic peaks including Manaslu, Ngadi Himal, and Himal Chuli.",
    overnight: "Teahouse in Samagaon",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["First views of Mt. Manaslu", "Samagaon village", "Pungyen Gompa", "Stunning mountain panorama"],
  },
  {
    day: 8,
    title: "Acclimatization Day in Samagaon",
    altitude: "3,530m",
    distance: "Optional hikes",
    description: "A crucial rest day for acclimatization. Options include a hike to Manaslu Base Camp (4,400m) for spectacular close-up views of Manaslu's south face, or a shorter walk to Birendra Tal, a beautiful glacial lake. Alternatively, explore Samagaon village, visit the ancient Pungyen Gompa, interact with local Tibetan Buddhist communities, or simply rest and enjoy the mountain scenery.",
    overnight: "Teahouse in Samagaon",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Acclimatization", "Optional hike to Manaslu Base Camp", "Birendra Tal glacial lake", "Pungyen Gompa visit"],
  },
  {
    day: 9,
    title: "Trek to Samdo",
    altitude: "3,860m",
    distance: "7km / 4-5 hrs",
    description: "A relatively easy day with gradual climbing. The trail offers spectacular views of Manaslu, Samdo Peak, and surrounding glaciers. We pass through Kermo Kharka and juniper forests before reaching Samdo, the last major village before the pass. This remote settlement has strong Tibetan heritage, and locals still trade with Tibet via the nearby Lajyang border.",
    overnight: "Teahouse in Samdo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Spectacular mountain views", "Juniper forests", "Remote Tibetan village", "Yak pastures"],
  },
  {
    day: 10,
    title: "Acclimatization Day in Samdo",
    altitude: "3,860m",
    distance: "Optional hikes",
    description: "Another vital acclimatization day before attempting the high pass. Take an optional hike toward the Tibetan border at Lajyang or explore the valley toward the Gya La pass. The area offers excellent views of snow peaks and glaciers. This is your chance to experience the stark beauty of high-altitude landscapes and prepare mentally and physically for the Larkya La crossing.",
    overnight: "Teahouse in Samdo",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Second acclimatization day", "Optional hike to Tibet border", "High-altitude landscapes", "Final preparation for pass"],
  },
  {
    day: 11,
    title: "Trek to Dharmasala (Larkya Phedi)",
    altitude: "4,460m",
    distance: "5km / 4-5 hrs",
    description: "A short but important trek to the high camp below Larkya La Pass. The terrain becomes increasingly barren and alpine as we climb above the tree line. Dharmasala is a basic stone shelter serving as the final stop before the pass crossing. Rest early, prepare your gear, and try to sleep as conditions allow. We'll start very early tomorrow morning.",
    overnight: "Basic lodge/Dharmasala",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["High camp experience", "Alpine terrain", "Pass preparation", "Early rest for big day"],
  },
  {
    day: 12,
    title: "Cross Larkya La Pass to Bimthang",
    altitude: "5,106m → 3,720m",
    distance: "23km / 10-12 hrs",
    description: "The most challenging and rewarding day of the trek! We start at 3-4 AM to reach the pass before conditions deteriorate. The climb is steady on a moraine path with cairns marking the way. At Larkya La (5,106m), prayer flags flutter in the wind and 360-degree views reveal Manaslu, Himlung Himal, Cheo Himal, and Annapurna II. The long descent to Bimthang passes through glacial moraine and yak pastures.",
    overnight: "Teahouse in Bimthang",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Larkya La Pass crossing (5,106m)", "360-degree Himalayan panorama", "Prayer flag-adorned summit", "Glacial landscapes"],
  },
  {
    day: 13,
    title: "Trek to Dharapani",
    altitude: "1,860m",
    distance: "20km / 6-7 hrs",
    description: "A long descent day through dramatically changing landscapes. From alpine terrain, we descend through rhododendron forests, crossing streams and passing through Gurung villages. The vegetation transforms from alpine to temperate to subtropical. At Dharapani, we join the Annapurna Circuit trail. The village marks our transition back to more accessible regions.",
    overnight: "Teahouse in Dharapani",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dramatic landscape change", "Rhododendron forests", "Gurung villages", "Join Annapurna Circuit trail"],
  },
  {
    day: 14,
    title: "Drive to Kathmandu",
    altitude: "1,400m",
    distance: "180km / 8-9 hrs drive",
    description: "Our trekking adventure concludes as we drive back to Kathmandu along the scenic Marsyangdi Valley. The road follows the river through dramatic gorges and passes through Besisahar and other market towns. Arrive in Kathmandu by evening. Check into your hotel and enjoy a well-deserved hot shower. Evening celebration dinner with your trekking team!",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive along Marsyangdi Valley", "Trek completion celebration", "Farewell dinner with team"],
  },
  {
    day: 15,
    title: "Free Day in Kathmandu",
    altitude: "1,400m",
    distance: "-",
    description: "A free day to explore Kathmandu's UNESCO World Heritage Sites including Pashupatinath Temple, Boudhanath Stupa, Swayambhunath (Monkey Temple), and Kathmandu Durbar Square. Perfect for souvenir shopping in Thamel, getting a massage, or simply relaxing. Our team can arrange guided sightseeing tours if desired.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast",
    highlights: ["UNESCO World Heritage Sites", "Shopping in Thamel", "Cultural exploration", "Rest and relaxation"],
  },
  {
    day: 16,
    title: "Departure",
    altitude: "1,400m",
    distance: "-",
    description: "Transfer to Tribhuvan International Airport for your departure flight. Our representative will ensure you reach the airport with plenty of time. Bid farewell to Nepal with memories of an incredible Himalayan adventure. We hope to see you again for another journey into the mountains!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells"],
  },
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
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Manaslu Mountain View",
    caption: "Mount Manaslu (8,163m)",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2069&auto=format&fit=crop",
    alt: "Himalayan Valley",
    caption: "Nubri Valley",
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop",
    alt: "Mountain Trail",
    caption: "Trail through forests",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
    alt: "Trekkers on Trail",
    caption: "Trekking to Larkya La",
  },
  {
    src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    alt: "Prayer Flags",
    caption: "Prayer flags at pass",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    alt: "Mountain Peaks",
    caption: "Panoramic views",
  },
];

export default function ManasluCircuitTrekPage() {
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
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-4 py-2 text-sm">
          <MapPin className="w-4 h-4 mr-1" /> Manaslu Region
        </Badge>
        <Badge className="bg-orange-100 text-orange-700 border-none font-bold px-4 py-2 text-sm">
          Challenging
        </Badge>
        <Badge className="bg-white/20 backdrop-blur-sm text-white border-none font-bold px-4 py-2 text-sm">
          Restricted Area
        </Badge>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-4 md:mb-6 tracking-tight">
        MANASLU <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
          CIRCUIT TREK
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
        Circumnavigate the world&apos;s eighth highest mountain through remote Tibetan villages, 
        ancient monasteries, and cross the legendary Larkya La Pass at 5,106 meters.
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
                    <div className="text-xs text-slate-400 line-through">$1,550</div>
                    <div className="text-xl font-bold text-[#0f2940]">$1,350</div>
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
                      <span className="text-white/50 text-sm line-through">$1,550</span>
                      <div className="text-3xl md:text-4xl font-bold text-white mt-1">$1,350</div>
                      <span className="text-white/60 text-sm">per person</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-xs">Save $200</Badge>
                    </div>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white/80 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                        <span>16 Days / 15 Nights</span>
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
                        <span>Teahouse Accommodation</span>
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
                    The Manaslu Circuit Trek is one of Nepal&apos;s most rewarding yet challenging treks, 
                    circumnavigating <strong>Mount Manaslu (8,163m)</strong>, the eighth highest mountain 
                    in the world. Often called the &quot;Killer Mountain&quot; due to its steep faces and 
                    unpredictable weather, Manaslu offers trekkers a unique blend of natural beauty 
                    and cultural immersion.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    Unlike the more popular Annapurna and Everest regions, the Manaslu area remained 
                    closed to foreigners until 1991. This restricted access has preserved its pristine 
                    environment and authentic Tibetan Buddhist culture.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    The crown jewel of this trek is the crossing of <strong>Larkya La Pass (5,106m)</strong>, 
                    one of the highest and most spectacular passes in Nepal.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-8 md:mb-12" id="highlights">
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">Trek Highlights</h2>
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
                        Rhododendrons bloom in vibrant colors, temperatures warm up, and skies are generally 
                        clear.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Recommended</Badge>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 rounded-lg md:rounded-2xl">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <Snowflake className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <h4 className="font-bold text-[#0f2940] text-sm md:text-base">Autumn (Sep - Nov)</h4>
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                        The most popular season with stable weather, crystal-clear visibility, and comfortable 
                        temperatures.
                      </p>
                      <Badge className="bg-green-100 text-green-700 border-none text-xs">Best Season</Badge>
                    </CardContent>
                  </Card>
                </div>
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
                <h2 className="text-xl md:text-2xl font-serif text-[#0f2940] mb-3 md:mb-4">What&apos;s Included</h2>
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
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 5,500m.</li>
                    <li>• The Manaslu region is a <strong>restricted area</strong> requiring a special permit.</li>
                    <li>• We recommend starting physical preparation <strong>2-3 months before your trek</strong>.</li>
                    <li>• The itinerary may be modified due to weather conditions or other circumstances.</li>
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