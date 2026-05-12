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
  Flower,
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
    "description": "Begin your Annapurna Base Camp trek with a scenic drive from Kathmandu to Pokhara along the Prithvi Highway. The journey follows the Trishuli River, offering stunning views of rural Nepali landscapes, terraced farmlands, and distant Himalayan peaks. Upon arrival in Pokhara, the beautiful lake city, check into your hotel and enjoy free time to explore Phewa Lake or relax with mountain views of Machhapuchhre and Annapurna range. This drive is an essential part of the ABC trek experience, allowing you to witness Nepal's diverse geography before the adventure begins.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Scenic Kathmandu to Pokhara drive", "Trishuli River views", "Phewa Lake", "Annapurna mountain range panorama"]
},
{
    "day": 2,
    "title": "Drive to Kande and Trek to Landruk",
    "altitude": "820m → 1,770m → 1,565m",
    "distance": "30 min drive / 5-6 hrs trek",
    "description": "After breakfast in Pokhara, take a short 30-minute drive to Kande (1,770m), the starting point of today's trek. From Kande, the trail gradually ascends through lush rhododendron and oak forests, offering breathtaking views of Annapurna South and Hiunchuli. You'll pass through small Gurung villages before descending slightly to Landruk (1,565m), a charming hillside village known for its traditional stone houses, friendly locals, and spectacular mountain vistas. Landruk provides an authentic cultural experience and is a perfect introduction to teahouse trekking in the Annapurna region.",
    "overnight": "Teahouse in Landruk",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Drive from Pokhara to Kande", "Rhododendron forests", "Gurung village culture", "Views of Annapurna South and Hiunchuli"]
},
{
    "day": 3,
    "title": "Trek from Landruk to Lower Sinuwa",
    "altitude": "1,565m → 2,340m",
    "distance": "12km / 6-7 hrs trek",
    "description": "Today's trek takes you from Landruk through beautiful forests and traditional settlements to Lower Sinuwa. The trail descends to the Modi Khola River, crosses a suspension bridge, and then climbs steadily through dense rhododendron and bamboo forests. You'll pass through the village of Jhinu Danda, famous for its natural hot springs, before continuing to Lower Sinuwa. This section offers incredible views of Machhapuchhre (Fishtail Mountain) and Annapurna South. Lower Sinuwa sits on a ridge with excellent teahouses and stunning mountain panoramas, making it a perfect overnight stop on the ABC trek.",
    "overnight": "Teahouse in Lower Sinuwa",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Modi Khola River crossing", "Suspension bridge adventure", "Jhinu Danda hot springs view", "Machhapuchhre and Annapurna South vistas"]
},
{
    "day": 4,
    "title": "Trek from Lower Sinuwa to Deurali",
    "altitude": "2,340m → 3,200m",
    "distance": "11km / 5-6 hrs trek",
    "description": "Depart Lower Sinuwa and continue your ascent toward Annapurna Base Camp. The trail passes through Upper Sinuwa and then enters a dense bamboo forest that gradually thins as you gain altitude. You'll cross several suspension bridges over glacial streams before reaching Dovan, a small forest settlement. The valley narrows dramatically as you approach Deurali, with towering rock walls on both sides. The landscape becomes increasingly alpine, and you'll be rewarded with your first close-up views of Machhapuchhre. Deurali serves as the last major stop before entering the Annapurna Sanctuary, offering dramatic mountain scenery and a true sense of wilderness.",
    "overnight": "Teahouse in Deurali",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Bamboo and rhododendron forests", "Narrowing Modi River valley", "Alpine landscape transition", "Close-up Machhapuchhre views"]
},
{
    "day": 5,
    "title": "Trek from Deurali to Annapurna Base Camp via Machhapuchhre Base Camp",
    "altitude": "3,200m → 4,130m",
    "distance": "9km / 5-6 hrs trek",
    "description": "This is the most spectacular day of the entire Annapurna Base Camp trek. From Deurali, follow the Modi Khola upstream through a dramatic glacial valley. You'll reach Machhapuchhre Base Camp (3,700m), which offers jaw-dropping views of the iconic Fishtail Mountain towering directly above. Continue across a glacial moraine and enter the Annapurna Sanctuary - a natural amphitheater surrounded by massive snow-capped peaks including Annapurna I (8,091m), Annapurna South, Hiunchuli, and Gandharva Chuli. Arrive at Annapurna Base Camp (4,130m), where you'll be surrounded by a 360-degree panorama of the world's most beautiful mountains. The sense of accomplishment and the breathtaking scenery make every step worthwhile.",
    "overnight": "Teahouse at Annapurna Base Camp",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Machhapuchhre Base Camp", "Glacial moraine crossing", "Annapurna Sanctuary amphitheater", "360-degree Himalayan panorama at ABC (4,130m)"]
},
{
    "day": 6,
    "title": "Sunrise at Annapurna Base Camp and Trek to Lower Sinuwa",
    "altitude": "4,130m → 2,340m",
    "distance": "14km / 6-7 hrs trek",
    "description": "Wake up before dawn to witness one of nature's greatest spectacles - sunrise over the Annapurna massif. As the first light hits the peaks, the mountains transform from deep blue to golden yellow to brilliant white. This magical moment at Annapurna Base Camp is the highlight of the entire journey. After a hearty breakfast, begin your descent retracing your steps through the Annapurna Sanctuary, past Machhapuchhre Base Camp, and down through Deurali and Dovan. The descent offers completely different perspectives of the mountains and forests. Arrive at Lower Sinuwa by late afternoon, where comfortable teahouses await.",
    "overnight": "Teahouse in Lower Sinuwa",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Unforgettable sunrise at Annapurna Base Camp", "Golden light on Annapurna I", "Descending through Annapurna Sanctuary", "Changing forest and mountain perspectives"]
},
{
    "day": 7,
    "title": "Trek from Lower Sinuwa to Samrung",
    "altitude": "2,340m → 1,900m",
    "distance": "10km / 4-5 hrs trek",
    "description": "Enjoy a shorter trekking day as you continue your descent from Lower Sinuwa to Samrung. The trail passes through Jhinu Danda, where you can take a refreshing dip in the natural hot springs beside the Modi Khola River - the perfect way to soothe tired muscles after days of trekking. From Jhinu, follow the trail through terraced farmlands and small villages to Samrung, a peaceful settlement offering beautiful views of the surrounding hills and valleys. This relaxed day allows you to fully appreciate the local culture and landscapes as you make your way back toward civilization.",
    "overnight": "Teahouse in Samrung",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Jhinu Danda natural hot springs", "Modi Khola riverside relaxation", "Terraced farmlands", "Local village culture"]
},
{
    "day": 8,
    "title": "Short Trek to Nayapul and Jeep Drive to Pokhara",
    "altitude": "1,900m → 1,010m → 820m",
    "distance": "3-4 hrs trek / 2 hrs jeep drive",
    "description": "On your final day of trekking, enjoy a gentle walk from Samrung through picturesque villages and along the Modi Khola River to Nayapul. This section showcases the beautiful terraced farmlands and friendly rural communities of the Annapurna region. At Nayapul, a private jeep awaits for an exciting 2-hour drive back to Pokhara. The jeep ride offers a different perspective of the landscapes you traversed days earlier. Arrive in Pokhara by late afternoon, check into your lakeside hotel, and celebrate your successful Annapurna Base Camp trek with a well-deserved dinner and cold drink.",
    "overnight": "Hotel in Pokhara",
    "meals": "Breakfast, Lunch, Dinner",
    "highlights": ["Final day of ABC trekking", "Modi Khola valley views", "Jeep drive through rural Nepal", "Celebration dinner in Pokhara"]
},
{
    "day": 9,
    "title": "Drive from Pokhara to Kathmandu",
    "altitude": "820m → 1,400m",
    "distance": "200km / 6-7 hrs drive",
    "description": "After a leisurely breakfast in Pokhara, begin your scenic drive back to Kathmandu along the Prithvi Highway. The journey follows the Trishuli River, offering beautiful views of river valleys, rolling hills, and distant mountain peaks. You'll pass through charming towns and witness daily Nepali rural life along the way. Arrive in Kathmandu by late afternoon. The remainder of your day is free for souvenir shopping in Thamel, exploring UNESCO World Heritage sites you may have missed, or simply relaxing after your incredible ABC trek adventure.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast",
    "highlights": ["Return drive to Kathmandu", "Trishuli River scenery", "Rural Nepali landscapes", "Thamel souvenir shopping"]
}
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "2 nights hotel accommodation in Pokhara (3-star with breakfast)",
  "All meals during the trek (breakfast, lunch, dinner)",
  "Best available teahouse/lodge accommodation during trek",
  "Experienced English-speaking trekking guide (government licensed)",
  "Assistant guide for groups of 5 or more",
  "Porter service (1 porter per 2 trekkers, max 20kg per person)",
  "Annapurna Conservation Area Permit (ACAP)",
  "TIMS card (Trekkers' Information Management System)",
  "All ground transportation as per itinerary (Kathmandu-Pokhara-Nayapul & return)",
  "First aid medical kit including pulse oximeter",
  "Sleeping bag and down jacket (can be returned after trek)",
  "Duffle bag for porter to carry your belongings",
  "Trekking map of Annapurna region",
  "Farewell dinner in Kathmandu",
  "All government taxes and official expenses",
  "Emergency evacuation arrangement assistance (cost covered by insurance)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover high altitude trekking up to 4,200m & emergency evacuation)",
  "Personal trekking gear and equipment",
  "Meals in Kathmandu and Pokhara (except welcome dinner and breakfasts)",
  "Bottled/mineral water during trek (purification tablets provided)",
  "Hot showers and battery charging at lodges ($2-4 per use)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, bar bills, souvenirs)",
  "Tips and gratuities for guides and porters (recommended)",
  "Emergency evacuation/helicopter rescue costs (covered by insurance)",
  "Any costs arising from unforeseen circumstances (weather, landslides, political unrest)",
];

const gallery = [
  {
    src: "/images/used/abc-1.avif",
    alt: "Annapurna Base Camp",
    caption: "Annapurna Base Camp (4,130m)",
  },
  {
    src: "/images/used/abc-3.avif",
    alt: "Machhapuchhre Fishtail",
    caption: "Machhapuchhre - Fishtail Mountain",
  },
  
];

export default function AnnapurnaBaseCampTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  
  // Trek name constant for auto-fill functionality
  const trekName = "Annapurna Base Camp Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Annapurna Base Camp Trek - Himkala Adventure");
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
            src="/images/used/abc-main-page.avif"
            alt="Annapurna Base Camp Trek"
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
                <MapPin className="w-3 h-3 mr-1" /> Annapurna Region
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                Moderate
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
                <Flower className="w-3 h-3 mr-1" /> Annapurna Sanctuary
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-none mb-3 md:mb-6 tracking-tight">
              ANNAPURNA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4] italic font-light">
                BASE CAMP TREK
              </span>
            </h1>
            
            <p className="text-sm sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Journey into the heart of the Annapurna Sanctuary - a spectacular glacial amphitheater 
              surrounded by towering peaks, including the iconic Machhapuchhre (Fishtail).
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
                <div className="text-xs text-slate-400 line-through">$1,050</div>
                <div className="text-lg font-bold text-[#0f2940]">$700</div>
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
                        <span className="text-white/50 text-sm line-through">$1,050</span>
                        <div className="text-3xl md:text-4xl font-bold text-white mt-1">$700</div>
                        <span className="text-white/60 text-sm">per person</span>
                        <Badge className="ml-2 bg-green-500/20 text-green-300 border-none text-[8px] md:text-xs">Save $350</Badge>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3 text-white/80 text-[10px] md:text-sm">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" />
                          <span>9 Days / 8 Nights</span>
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
                          <span className="text-slate-500">Start Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">End Point</span>
                          <span className="font-medium text-[#0f2940]">Kathmandu</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek Start/End</span>
                          <span className="font-medium text-[#0f2940]">Nayapul</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Highest Point</span>
                          <span className="font-medium text-[#0f2940]">Annapurna Base Camp (4,130m)</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2 border-b border-slate-100">
                          <span className="text-slate-500">Trek Duration</span>
                          <span className="font-medium text-[#0f2940]">8 Trekking Days</span>
                        </div>
                        <div className="flex justify-between py-1.5 md:py-2">
                          <span className="text-slate-500">Difficulty</span>
                          <span className="font-medium text-[#0f2940]">Moderate</span>
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
                    The <strong>Annapurna Base Camp Trek</strong> (also known as the Annapurna Sanctuary Trek) 
                    takes you into the heart of the Annapurna massif, a spectacular glacial amphitheater surrounded 
                    by some of the world's highest and most beautiful mountains. At <strong>4,130 meters</strong>, 
                    Base Camp offers a 360-degree panorama of towering peaks including Annapurna I (8,091m), 
                    Annapurna South (7,219m), Machhapuchhre (6,993m), and Hiunchuli (6,441m).
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-2 md:mb-4 text-xs md:text-base">
                    The journey begins with a scenic drive to Pokhara, Nepal's beautiful lakeside city, before 
                    venturing into the Modi Khola Valley. The trail passes through traditional Gurung villages like 
                    Ghandruk, lush rhododendron forests, and terraced farmlands before entering the sanctuary. 
                    The sense of being enclosed by mountains grows with each step until you emerge at Base Camp, 
                    surrounded on all sides by ice and rock.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-base">
                    Unlike many Himalayan treks that require crossing high passes, the ABC trek is a 
                    straightforward "in-and-out" route, making it accessible to trekkers with moderate fitness 
                    levels. The reward is an intimate experience with the mountains - you sleep at the foot of 
                    giants and wake to watch the sunrise paint their peaks in golden light.
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section className="mb-6 md:mb-12" id="highlights">
                <h2 className="text-lg md:text-2xl font-serif text-[#0f2940] mb-2 md:mb-4">Trek Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {[
                    "Stand at Annapurna Base Camp (4,130m) in a mountain amphitheater",
                    "Sunrise over Annapurna I, Machhapuchhre, and surrounding peaks",
                    "Traditional Gurung villages and culture in Ghandruk",
                    "Natural hot springs at Jhinu Danda for muscle recovery",
                    "Dense rhododendron forests blooming in spring",
                    "Machhapuchhre Base Camp with close-up Fishtail views",
                    "Annapurna Sanctuary's unique glacial environment",
                    "Moderate difficulty - accessible to most active trekkers",
                    "Phewa Lake and mountain views in Pokhara",
                    "Dramatic valley scenery following the Modi Khola",
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
                        Rhododendron forests explode with color, temperatures are warm, and the sanctuary is lush 
                        and green. Excellent visibility and longer days.
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
                        The most popular season with crystal-clear skies, stable weather, and the best 
                        mountain views. Perfect temperatures for trekking.
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
                    <li>• <strong>Travel insurance is mandatory</strong> and must cover high altitude trekking up to 4,200m.</li>
                    <li>• The trail includes many stone steps - good knee support and trekking poles are recommended.</li>
                    <li>• Winter trekking (Dec-Feb) is possible but snow may close the sanctuary.</li>
                    <li>• We recommend starting physical preparation <strong>1-2 months before your trek</strong> with regular cardio and stair climbing.</li>
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
                      q: "How difficult is the Annapurna Base Camp Trek?",
                      a: "The trek is rated as moderate. You'll trek 4-6 hours daily on stone steps and forest trails. No technical experience is required, but good fitness and some preparation (cardio, stair climbing) will make the experience much more enjoyable.",
                    },
                    {
                      q: "Do I need previous trekking experience?",
                      a: "No, ABC is perfect for first-time trekkers to the Himalayas. The moderate altitude, well-established trail, and comfortable teahouses make it accessible while still providing an authentic mountain experience.",
                    },
                    {
                      q: "What is the accommodation like?",
                      a: "Teahouses along the route are comfortable by trekking standards. Rooms have twin beds with foam mattresses and shared bathrooms. At higher altitudes, facilities become more basic. Most lodges offer hot showers (paid) and charging points.",
                    },
                    {
                      q: "Can I see Annapurna I from Base Camp?",
                      a: "Yes! Annapurna I (8,091m) towers directly above Base Camp. The entire amphitheater surrounds you with peaks - Annapurna South, Hiunchuli, Gandharva Chuli, and the iconic Machhapuchhre (Fishtail) are all visible.",
                    },
                    {
                      q: "Is altitude sickness a concern on ABC?",
                      a: "At 4,130m, altitude is a consideration but the risk is lower than higher treks like Everest Base Camp. Our itinerary includes gradual altitude gain and an overnight at Machhapuchhre Base Camp (3,700m) before reaching ABC, allowing proper acclimatization.",
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