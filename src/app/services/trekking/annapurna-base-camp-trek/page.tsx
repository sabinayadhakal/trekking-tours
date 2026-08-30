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
  Flower,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
    src: "/images/used/abc-1.webp",
    alt: "Annapurna Base Camp sunrise - golden light hitting Annapurna I and surrounding peaks at 4,130m in Nepal",
    caption: "Annapurna Base Camp (4,130m)",
  },
  {
    src: "/images/used/abc-3.webp",
    alt: "Machhapuchhre or Fishtail Mountain - iconic peak towering above the Annapurna Sanctuary in Nepal",
    caption: "Machhapuchhre - Fishtail Mountain",
  },
];

export default function AnnapurnaBaseCampTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Annapurna Base Camp Trek";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
    } else if (platform === "twitter") {
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Annapurna Base Camp Trek - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <main>
        {/* Header - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Annapurna Region</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Annapurna <br />
                  <span className="text-[#cf6943]">Base Camp Trek</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Journey into the heart of the Annapurna Sanctuary - a spectacular glacial amphitheater 
                  surrounded by towering peaks, including the iconic Machhapuchhre (Fishtail).
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Moderate
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Flower className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Annapurna Sanctuary
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    4,130m
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/abc-main-page.webp"
              alt="Annapurna Base Camp Trek - trekking through the Annapurna Sanctuary at 4,130m with views of Annapurna I and Machhapuchhre peaks in Nepal"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best Season: Mar-May, Sep-Nov
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $700 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "9 Days / 8 Nights" },
              { label: "Group Size", value: "2-12 people" },
              { label: "Max Altitude", value: "4,130m" },
              { label: "Difficulty", value: "Moderate" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Overview - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The <strong className="text-[#14383b]">Annapurna Base Camp Trek</strong> (also known as the 
                Annapurna Sanctuary Trek) takes you into the heart of the Annapurna massif, a spectacular 
                glacial amphitheater surrounded by some of the world's highest and most beautiful mountains. 
                At <strong className="text-[#14383b]">4,130 meters</strong>, Base Camp offers a 360-degree 
                panorama of towering peaks including Annapurna I (8,091m), Annapurna South (7,219m), 
                Machhapuchhre (6,993m), and Hiunchuli (6,441m). This 
                <strong className="text-[#14383b]"> Annapurna Base Camp trekking</strong> adventure is one of 
                Nepal's most popular and rewarding <strong className="text-[#14383b]">trekking in Nepal</strong> 
                experiences.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The journey begins with a scenic drive to Pokhara, Nepal's beautiful lakeside city, before 
                venturing into the Modi Khola Valley. The trail passes through traditional Gurung villages like 
                Ghandruk, lush rhododendron forests, and terraced farmlands before entering the sanctuary. 
                The sense of being enclosed by mountains grows with each step until you emerge at Base Camp, 
                surrounded on all sides by ice and rock.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Unlike many Himalayan treks that require crossing high passes, the 
                <strong className="text-[#14383b]"> ABC trek</strong> is a straightforward "in-and-out" route, 
                making it accessible to trekkers with moderate fitness levels. The reward is an intimate 
                experience with the mountains - you sleep at the foot of giants and wake to watch the sunrise 
                paint their peaks in golden light.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude trekking 
              up to 4,200m. The trail includes many stone steps - good knee support and trekking poles are recommended.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                  <span className="text-[#cf6943] mt-1">✦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Best Season - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Trek Annapurna Base Camp</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Rhododendron forests explode with color, temperatures are warm, and the sanctuary is lush 
                  and green. Excellent visibility and longer days.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  The most popular season with crystal-clear skies, stable weather, and the best 
                  mountain views. Perfect temperatures for trekking.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary - Free Walking Tour Style (Accordion) */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Day-by-Day Itinerary</h2>
              <button
                className="text-[#cf6943] text-xs font-semibold hover:underline"
                onClick={() =>
                  setExpandedDays(expandedDays.length === itinerary.length ? [] : itinerary.map((d) => d.day))
                }
              >
                {expandedDays.length === itinerary.length ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="space-y-2">
              {itinerary.map((day) => {
                const isExpanded = expandedDays.includes(day.day);
                return (
                  <div
                    key={day.day}
                    className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center gap-4 p-4 text-left"
                      onClick={() => toggleDay(day.day)}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#cf6943]/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                        <span className="text-[8px] font-bold text-[#cf6943] uppercase">Day</span>
                        <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">{day.day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-[#14383b] text-sm sm:text-base block truncate">{day.title}</span>
                        <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs text-[#66706d] mt-0.5">
                          <span>{day.altitude}</span>
                          <span>·</span>
                          <span>{day.distance}</span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-[#556363] text-sm leading-relaxed mb-4">{day.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          <div className="flex items-center gap-2 text-xs text-[#556363] bg-[#f2ede4] rounded-lg p-2">
                            <Tent className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                            <span><strong>Overnight:</strong> {day.overnight}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#556363] bg-[#f2ede4] rounded-lg p-2">
                            <Utensils className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                            <span><strong>Meals:</strong> {day.meals}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {day.highlights.map((h, i) => (
                            <span key={i} className="bg-[#cf6943]/10 text-[#cf6943] text-[10px] font-medium px-2 py-0.5 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Includes / Excludes - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="includes">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
                  Cost Includes
                </h3>
                <ul className="space-y-1.5">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-semibold text-[#14383b] text-sm mb-4 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" aria-hidden="true" />
                  Cost Excludes
                </h3>
                <ul className="space-y-1.5">
                  {excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363] text-sm">
                      <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="gallery">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey through the Annapurna Sanctuary - from lush forests to the heart of the Himalayas.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((image, i) => (
                <div key={i} className="relative h-28 sm:h-40 rounded-lg overflow-hidden bg-[#d8cec0]">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white text-[10px] font-medium truncate">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                <div key={i}>
                  <h4 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h4>
                  <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Now / CTA - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Trek to the Heart of the Annapurnas?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Annapurna Base Camp Trek today and experience the magic of the Annapurna Sanctuary - a journey into the heart of the Himalayas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Trek
                </Button>
              </Link>
              <a 
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2 text-sm">
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  WhatsApp Now
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-[#cf6943] text-[#cf6943] hover:bg-[#cf6943]/10 rounded-full px-6 py-2 text-sm"
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
                }}
              >
                <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                Share
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}