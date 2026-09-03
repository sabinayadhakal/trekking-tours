"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Lhasa (3,650m)",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "Welcome to Lhasa, the spiritual heart of Tibet and starting point of your overland adventure! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey into the 'Roof of the World'. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views and your first glimpse of Tibetan landscapes. After checking into your hotel in Lhasa, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the overland journey ahead, Tibetan culture, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic drive to Lhasa", "Acclimatization briefing", "Overland journey preparation"],
  },
  {
    day: 2,
    title: "Lhasa Sightseeing - Potala Palace & Jokhang Temple",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Begin your exploration of Lhasa's cultural treasures with a visit to the iconic Potala Palace, the winter palace of the Dalai Lamas and one of Tibet's most recognizable landmarks. This 13-story marvel contains over 1,000 rooms, with stunning chapels, tombs of past Dalai Lamas, and breathtaking views of Lhasa. Your guide will explain the history and significance of this UNESCO World Heritage site. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century. The temple houses the revered Jowo Shakyamuni statue and is a major pilgrimage site. In the evening, walk around the Barkhor Street, the pilgrimage circuit surrounding Jokhang, where you'll see devout pilgrims performing prostrations and can browse traditional Tibetan handicrafts. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace exploration", "Jokhang Temple", "Barkhor pilgrimage circuit", "Tibetan handicrafts", "UNESCO World Heritage sites"],
  },
  {
    day: 3,
    title: "Lhasa to Gyantse via Yamdrok Lake (4,794m)",
    altitude: "3,650m → 4,794m → 3,950m",
    distance: "260km / 6-7 hrs drive",
    description: "Depart Lhasa and begin your overland journey across the Tibetan plateau! Cross the Kampala Pass (4,794m) for your first breathtaking view of Yamdrok Lake - one of Tibet's three sacred lakes with turquoise waters stretching beneath majestic snow-capped mountains. Stop for photos at this incredible location. Continue through picturesque valleys to reach Gyantse, a historic trading town and former capital of the Gyantse Kingdom. Upon arrival, visit the famous Pelkor Chode Monastery and its stunning Kumbum Stupa, a unique multi-tiered structure with 108 chapels built in the 15th century. This is one of Tibet's best-preserved architectural gems. Overnight in Gyantse.",
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
    title: "Shigatse to Shegar - Gateway to Everest",
    altitude: "3,840m → 4,050m",
    distance: "240km / 5-6 hrs drive",
    description: "Today you'll drive closer to the world's highest mountain, passing through ever more dramatic landscapes. The journey takes you along the Friendship Highway, with stunning views of the Himalayas appearing on the horizon. You'll pass through traditional Tibetan villages and vast plains dotted with nomad tents and grazing yaks. On clear days, you'll see Mount Everest (8,848m), Cho Oyu (8,188m), and other Himalayan giants from viewpoints along the way. Arrive in Shegar (also known as New Tingri), a small town that serves as the gateway to Everest. The views of the Himalayan range from Shegar are spectacular, especially at sunset. Overnight in Shegar.",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Friendship Highway", "First views of Everest", "Himalayan panoramas", "Tibetan nomad settlements", "Sunset mountain views"],
  },
  {
    day: 6,
    title: "Shegar to Everest Base Camp (5,200m) & Return to Shigatse",
    altitude: "4,050m → 5,200m → 3,840m",
    distance: "240km / 6-7 hrs drive + exploration",
    description: "Early morning drive to Everest Base Camp, the highlight of your overland journey! Enter the Qomolangma National Nature Reserve and wind through dramatic mountain roads to reach the Rongbuk Valley. Pass Rongbuk Monastery, the highest-altitude monastery in the world (4,980m), before reaching the legendary Everest Base Camp at 5,200m. Stand in awe of Mount Everest (8,848m) towering above you - the world's highest point. Take photos, soak in the atmosphere, and absorb the magnitude of this moment. Your guide will share stories of expeditions and the mountain's spiritual significance. After spending time at base camp, begin your return journey, descending to Shigatse for overnight. This is a long but unforgettable day!",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest Base Camp (5,200m)", "Mount Everest close-up views", "Rongbuk Monastery", "Qomolangma National Park", "Lifetime achievement"],
  },
  {
    day: 7,
    title: "Shigatse to Lhasa via Yarlung Valley",
    altitude: "3,840m → 3,650m",
    distance: "280km / 6-7 hrs drive",
    description: "Begin your return journey to Lhasa with a scenic detour through the Yarlung Valley, considered the cradle of Tibetan civilization. This is where the first Tibetan kings established their kingdom and where Tibetan culture was born. Visit the Yumbulagang Palace, Tibet's oldest building, perched dramatically on a hilltop. According to legend, this palace was built for the first Tibetan king in the 2nd century BC. Continue to Lhasa, arriving by late afternoon. Enjoy a farewell dinner celebrating your overland journey through Tibet. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yarlung Valley - cradle of Tibetan civilization", "Yumbulagang Palace", "Scenic return drive", "Last mountain views", "Farewell dinner"],
  },
  {
    day: 8,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, enjoy some free time for last-minute souvenir shopping at Barkhor Market or a final stroll through the old town. Transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of sacred lakes, ancient monasteries, Everest Base Camp, and the unforgettable landscapes of the Tibetan plateau. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Free morning", "Last-minute shopping", "Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "7 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private 4WD Land Cruiser for all overland journeys and sightseeing",
  "All monument entrance fees",
  "Everest Base Camp entry permit and vehicle permit",
  "Tibet Travel Permit (processed by us)",
  "Alien's Travel Permit",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
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
  "Single room supplement (if applicable)",
];

const gallery = [
  {
    src: "/images/used/tibet-overland.webp",
    alt: "Friendship Highway in Tibet with Himalayan mountain views",
    caption: "Friendship Highway",
  },
  {
    src: "/images/used/tibet-road.webp",
    alt: "Mountain roads of Tibet with dramatic plateau landscapes",
    caption: "Roads of Tibet",
  },
  {
    src: "/images/used/views-tibet-train.webp",
    alt: "Scenic train views of the Tibetan plateau with mountain peaks",
    caption: "Views of Tibet from a train",
  },
];

const routeInfo = [
  {
    segment: "Lhasa → Gyantse",
    distance: "260km",
    duration: "6-7 hrs",
    highlights: "Yamdrok Lake, Kampala Pass (4,794m)",
  },
  {
    segment: "Gyantse → Shigatse",
    distance: "90km",
    duration: "2 hrs",
    highlights: "Gyantse Dzong, Tashilhunpo Monastery",
  },
  {
    segment: "Shigatse → Shegar",
    distance: "240km",
    duration: "5-6 hrs",
    highlights: "Himalayan views, Everest panorama",
  },
  {
    segment: "Shegar → EBC → Shigatse",
    distance: "240km",
    duration: "6-7 hrs + EBC visit",
    highlights: "Everest Base Camp (5,200m), Rongbuk Monastery",
  },
  {
    segment: "Shigatse → Lhasa",
    distance: "280km",
    duration: "6-7 hrs",
    highlights: "Yarlung Valley, Yumbulagang Palace",
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
    location: "Shegar",
    altitude: "4,050m",
    overnight: "1 night",
    notes: "Everest gateway",
  },
  {
    location: "Everest Base Camp",
    altitude: "5,200m",
    overnight: "Day visit",
    notes: "Highest point",
  },
  {
    location: "Yarlung Valley",
    altitude: "3,600m",
    overnight: "Pass through",
    notes: "Cradle of civilization",
  },
];

export default function TibetOverlandTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 5, 6]);

  const tourName = "8-Day Tibet Overland Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/tours/tibet-overland-tour";
  const pageTitle = "8-Day Tibet Overland Tour - Everest Base Camp Drive";
  const pageDescription = "8-Day Tibet Overland Tour: Drive from Lhasa to Everest Base Camp across the Tibetan plateau. Visit Yamdrok Lake, Potala Palace, and ancient monasteries. Book your adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tibet-overland.webp";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@himkalanepal" />
        <meta name="twitter:creator" content="@himkalanepal" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Header - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[880px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                    <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                    <span>Tibet Overland Adventure</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    8 Days <br />
                    <span className="text-[#cf6943]">Tibet Overland Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    An epic journey across the Tibetan plateau - from sacred Lhasa to the base of the world's highest 
                    mountain. Experience ancient monasteries, turquoise lakes, Everest Base Camp, and the cradle of 
                    Tibetan civilization.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Route className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Overland Journey
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <MountainSnow className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Everest Base Camp
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      ~1,100km
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
                src="/images/used/tibet-overland.webp"
                alt="Tibet Overland Tour - scenic road trip across the Tibetan plateau with mountain views and adventure travel"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: May-Oct
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $1,950 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "8 Days / 7 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "5,200m" },
                { label: "Distance", value: "~1,100km" },
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
                  The <strong className="text-[#14383b]">8-Day Tibet Overland Tour</strong> is the ultimate road trip 
                  across the <strong className="text-[#14383b]">'Roof of the World'</strong>. This epic journey takes 
                  you from the sacred capital of Lhasa through the heart of the Tibetan plateau, past turquoise lakes 
                  and ancient monasteries, to the base of the world's highest mountain - 
                  <strong className="text-[#14383b]"> Mount Everest (8,848m)</strong>.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  You'll traverse the famous Friendship Highway, cross high mountain passes, visit the historic cities 
                  of Gyantse and Shigatse, and stand in awe at <strong className="text-[#14383b]">Everest Base Camp (5,200m)</strong>. 
                  The journey also includes a visit to the Yarlung Valley, cradle of Tibetan civilization, where you'll 
                  see Tibet's oldest building, Yumbulagang Palace.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With comfortable 4WD transport, expert local guides, and gradual acclimatization built into the 
                  itinerary, this tour offers an unforgettable adventure through Tibet's most spectacular landscapes 
                  and cultural treasures. Perfect for those seeking to experience the full diversity of Tibet in 
                  just over a week.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is MANDATORY and must cover high altitude up to 5,500m and emergency evacuation. 
                China Visa required (we arrange all Tibet permits including EBC permit). Submit passport copy at least 25 days before travel.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Stand at Everest Base Camp (5,200m) - North Side",
                  "Visit sacred Yamdrok Lake and cross Kampala Pass (4,794m)",
                  "Explore Potala Palace and Jokhang Temple in Lhasa",
                  "Discover Gyantse's Kumbum Stupa and Pelkor Chode",
                  "Visit Tashilhunpo Monastery in Shigatse",
                  "Drive the legendary Friendship Highway",
                  "See Yumbulagang - Tibet's oldest building",
                  "Experience the vast Tibetan plateau",
                  "Photograph the Himalayan range from multiple viewpoints",
                  "Visit Rongbuk Monastery, the world's highest monastery",
                  "Gradual acclimatization for safety and comfort",
                  "All permits including EBC permit arranged",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Tibet Overland Tour</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Summer (May - Aug)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Warmest temperatures, clear mornings, and green valleys. Best chance for clear views at 
                    Everest Base Camp. Occasional afternoon showers.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <SunriseIcon className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Oct)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and the best mountain views. 
                    Perfect for photography and long drives.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
            </div>
          </section>

          {/* Route Overview - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Route Overview</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="space-y-2">
                  {routeInfo.map((item, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-32">{item.segment}</span>
                      <span className="text-[#cf6943] font-medium text-sm w-16">{item.distance}</span>
                      <span className="text-[#66706d] text-xs w-20">{item.duration}</span>
                      <span className="text-[#556363] text-xs flex-1">{item.highlights}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Everest Day Highlight - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200/50">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  <h3 className="text-xl font-serif text-[#14383b]">The Big Day - Everest Base Camp</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed mb-4">
                  Day 6 is the highlight of your overland journey. You'll drive from Shegar (4,050m) through the 
                  Qomolangma National Nature Reserve, passing dramatic mountain scenery to reach Rongbuk Monastery 
                  (4,980m) - the highest monastery on Earth. From there, continue to the legendary Everest Base Camp 
                  at 5,200m, where you'll stand face-to-face with the world's highest mountain.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Altitude</span>
                    <p className="text-[#556363] text-sm">5,200m / 17,060ft</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Distance from Everest</span>
                    <p className="text-[#556363] text-sm">Approx. 20km</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Time at EBC</span>
                    <p className="text-[#556363] text-sm">1-2 hours</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Rongbuk Monastery</span>
                    <p className="text-[#556363] text-sm">4,980m</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Altitude Profile - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Altitude Profile</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="space-y-2">
                  {altitudeInfo.map((item, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-24">{item.location}</span>
                      <span className="text-[#cf6943] font-medium text-sm w-20">{item.altitude}</span>
                      {item.overnight && (
                        <span className="text-[#66706d] text-xs">{item.overnight}</span>
                      )}
                      <span className="text-[#556363] text-xs flex-1">{item.notes}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Acclimatization:</strong> Gradual ascent with 2 nights in Lhasa before going higher.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Itinerary - Free Walking Tour Style (Accordion) */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
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
                              <Landmark className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in Tibet Overland Tour</h2>
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Tibet Overland Tour</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey across the Tibetan plateau - from sacred Lhasa to the base of the world's highest mountain.
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "Is this tour suitable for those who don't trek?",
                    a: "Absolutely! This is a driving tour with short walks at each site. You'll visit Everest Base Camp by vehicle - no trekking required. The longest walks are at monastery sites (30-60 minutes of easy walking). This makes the tour accessible to those who cannot or prefer not to trek for multiple days.",
                  },
                  {
                    q: "Will I definitely see Mount Everest?",
                    a: "Weather permitting, yes! Everest is visible from multiple points along the journey, especially from the viewpoint near Shegar and at Base Camp itself. However, the mountain can be shrouded in clouds, especially in the afternoon. Morning views are typically clearest, which is why we plan to arrive at EBC in the morning.",
                  },
                  {
                    q: "How long are the daily drives?",
                    a: "Drive times range from 2-7 hours per day, with the longest days being Lhasa to Gyantse (6-7 hrs) and the Everest day (6-7 hrs driving plus EBC visit). The drives are broken up with scenic stops and site visits. Our vehicles are comfortable 4WD Land Cruisers with plenty of space.",
                  },
                  {
                    q: "What permits do I need for this tour?",
                    a: "You need: 1) China Visa (obtained from your local Chinese embassy), 2) Tibet Travel Permit, 3) Alien's Travel Permit, and 4) Special EBC permit. We arrange all Tibet permits for you - we need your passport copy at least 25 days before travel. China Visa must be obtained separately, but we provide support documents.",
                  },
                  {
                    q: "How will the altitude affect me?",
                    a: "Most people experience some symptoms at altitude - mild headache, shortness of breath, fatigue. Our itinerary includes 2 nights in Lhasa for acclimatization before going higher. We carry oxygen cylinders in the vehicle for emergencies. Listen to your body and inform your guide if you feel unwell.",
                  },
                  {
                    q: "What is the accommodation like along the route?",
                    a: "In Lhasa, you'll stay in comfortable 3-star hotels. In Gyantse, Shigatse, and Shegar, accommodation is comfortable but more basic - expect clean rooms with attached bathrooms and hot water (may be limited at peak times). All hotels are chosen for comfort and reliability.",
                  },
                  {
                    q: "Can I do this tour in the opposite direction?",
                    a: "Yes, the tour can be done in reverse, ending in Lhasa. This is often combined with an entry from Nepal (Kathmandu to Lhasa overland). Contact us for details if you're interested in this option.",
                  },
                  {
                    q: "What should I pack for this overland tour?",
                    a: "Essentials: warm layers (temperatures vary greatly), warm jacket (evenings are cool), sun hat, sunglasses, high-SPF sunscreen, lip balm, reusable water bottle, personal medications, and comfortable walking shoes. Modest clothing covering shoulders and knees is required for monastery visits. A daypack for daily essentials is useful.",
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px] text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for the Ultimate Tibet Overland Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your 8-Day Tibet Overland Tour today and experience the journey of a lifetime - from sacred Lhasa to the base of the world's highest mountain.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                  <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                    Book This Tour
                  </Button>
                </Link>
                <a 
                  href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${tourName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-2 text-sm">
                    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    WhatsApp Now
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}