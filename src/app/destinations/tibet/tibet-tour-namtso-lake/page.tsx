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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Lhasa (3,650m)",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "Welcome to Lhasa, the spiritual heart of Tibet! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey to the sacred city. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views and your first glimpse of Tibetan landscapes. After checking into your hotel in Lhasa, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the days ahead, including your excursion to the breathtaking Namtso Lake, Tibetan culture, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic drive to Lhasa", "Acclimatization briefing", "Namtso Lake preparation"],
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
    title: "Lhasa to Namtso Lake (4,718m) via Damxung",
    altitude: "3,650m → 4,718m",
    distance: "250km / 5-6 hrs drive",
    description: "Early morning departure for one of Tibet's most spectacular destinations - Namtso Lake! Drive north from Lhasa through beautiful grasslands and pastures, passing traditional Tibetan nomad settlements with their distinctive black yak-hair tents. Cross the Largen La Pass (5,190m) for your first breathtaking view of Namtso Lake - one of the three sacred lakes of Tibet and the highest saltwater lake in the world. The turquoise waters stretch to the horizon, backed by the majestic Nyenchen Tanglha mountain range. Arrive at the lake shore and check into your guesthouse. Spend the afternoon exploring the lake shore, visiting Tashi Dor Island with its meditation caves and hermitages, and watching the incredible sunset over the water. The colors of Namtso at sunset are truly unforgettable. Overnight near Namtso Lake.",
    overnight: "Guesthouse near Namtso",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Namtso Lake (4,718m)", "Largen La Pass (5,190m)", "Tibetan nomad settlements", "Tashi Dor Island", "Sunset over sacred lake"],
  },
  {
    day: 4,
    title: "Namtso Lake Sunrise & Return to Lhasa",
    altitude: "4,718m → 3,650m",
    distance: "250km / 5-6 hrs drive",
    description: "Wake early to witness the magical sunrise over Namtso Lake - a truly spiritual experience as the first light paints the snow-capped mountains and lake in golden hues. Take a final walk along the shore, offer prayers at the small temples, and soak in the peaceful atmosphere of this sacred place. After breakfast, begin your return journey to Lhasa, stopping at viewpoints along the way for last photos of this incredible landscape. Arrive in Lhasa by late afternoon. The remainder of the day is free for rest, reflection, or last-minute souvenir shopping at Barkhor Market. Enjoy a farewell dinner celebrating your journey to the heavenly lake. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Namtso Lake sunrise", "Sacred lake photography", "Scenic return drive", "Barkhor Market shopping", "Farewell dinner"],
  },
  {
    day: 5,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of ancient monasteries, sacred lakes, and the breathtaking beauty of Tibet. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells", "Namtso Lake memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation (3-star with breakfast) - 3 nights Lhasa, 1 night Namtso guesthouse",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private vehicle for all sightseeing and transfers (4WD Land Cruiser for Namtso journey)",
  "All monument entrance fees (Potala, Jokhang, Namtso Lake, Tashi Dor Island)",
  "Namtso Lake entry permit",
  "Tibet Travel Permit (processed by us)",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 5,200m)",
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
    src: "/images/used/tibet-2.webp",
    alt: "Namtso Lake at 4,718m - the highest saltwater lake in the world, sacred to Tibetan Buddhists",
    caption: "Namtso Lake - Heaven's Lake at 4,718m",
  },
  {
    src: "/images/used/tibet-1.webp",
    alt: "Potala Palace in Lhasa, Tibet - iconic UNESCO World Heritage site and former winter palace of the Dalai Lamas",
    caption: "Potala Palace - Iconic Landmark of Lhasa",
  },
  {
    src: "/images/used/tibet-lake-1.webp",
    alt: "Stacked stones and prayer flags beside Namtso Lake, Tibet - sacred pilgrimage site",
    caption: "Stones Stacked Besides the Lake",
  },
  {
    src: "/images/used/tibet-lake-2.webp",
    alt: "Tibetan yak grazing near Namtso Lake with mountain backdrop",
    caption: "Yak beside the lake",
  },
];

const namtsoFacts = [
  {
    fact: "Elevation",
    detail: "4,718m (15,479ft) - Highest saltwater lake in the world",
  },
  {
    fact: "Name Meaning",
    detail: "'Heavenly Lake' or 'Lake of Heaven' in Tibetan",
  },
  {
    fact: "Size",
    detail: "1,920 sq km - Second largest saltwater lake in Tibet",
  },
  {
    fact: "Sacred Status",
    detail: "One of the three sacred lakes of Tibet, along with Yamdrok and Manasarovar",
  },
  {
    fact: "Location",
    detail: "Surrounded by the Nyenchen Tanglha mountain range",
  },
  {
    fact: "Tashi Dor Island",
    detail: "Sacred island with meditation caves and hermitages",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa",
    altitude: "3,650m",
    overnight: "3 nights",
    notes: "Base city, acclimatization",
  },
  {
    location: "Largen La Pass",
    altitude: "5,190m",
    overnight: "Pass only",
    notes: "Highest point on journey",
  },
  {
    location: "Namtso Lake",
    altitude: "4,718m",
    overnight: "1 night",
    notes: "Sacred lake, overnight stay",
  },
  {
    location: "Tashi Dor Island",
    altitude: "4,720m",
    notes: "Meditation caves, walking",
  },
];

export default function TibetTourWithNamtsoLakePage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 4]);

  const tourName = "5-Day Tibet Tour with Namtso Lake";
  const canonicalUrl = "https://www.himkalaadventure.com/tours/tibet-namtso-lake-tour";
  const pageTitle = "5-Day Tibet Tour with Namtso Lake - Sacred Lake Adventure";
  const pageDescription = "5-Day Tibet Tour with Namtso Lake: Explore Lhasa's Potala Palace and journey to the highest saltwater lake in the world at 4,718m. Book your Tibet adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tibet-2.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("5-Day Tibet Tour with Namtso Lake - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
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
                    <span>Tibet Sacred Lake Tour</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    5 Days <br />
                    <span className="text-[#cf6943]">Tibet Tour with Namtso Lake</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Experience the best of Tibet in just 5 days! Explore the sacred sites of Lhasa and journey to 
                    breathtaking Namtso Lake - the highest saltwater lake in the world, nestled in the Himalayas.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Waves className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Namtso Lake
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      4,718m
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Potala Palace
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
                src="/images/used/tibet-2.webp"
                alt="Namtso Lake in Tibet - sacred heavenly lake at 4,718m with turquoise waters and mountain backdrop"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: Jun-Oct
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $1,150 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "5 Days / 4 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "5,190m" },
                { label: "Distance", value: "~500km" },
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
                  The <strong className="text-[#14383b]">5-Day Tibet Tour with Namtso Lake</strong> offers the 
                  perfect introduction to the spiritual and natural wonders of Tibet. This carefully crafted 
                  itinerary combines the cultural treasures of Lhasa with an unforgettable journey to 
                  <strong className="text-[#14383b]"> Namtso Lake (4,718m)</strong> - the highest saltwater lake 
                  in the world and one of Tibet's three sacred lakes.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  You'll explore the iconic <strong className="text-[#14383b]">Potala Palace</strong> and 
                  <strong className="text-[#14383b]"> Jokhang Temple</strong>, walk the pilgrim circuit at Barkhor, 
                  and witness living Tibetan Buddhism. Then venture north across the Tibetan plateau to discover 
                  the breathtaking turquoise waters of Namtso, surrounded by the snow-capped Nyenchen Tanglha 
                  mountains. Watch the sunset and sunrise over the sacred lake, visit meditation caves on Tashi 
                  Dor Island, and experience the stark beauty of high-altitude Tibet.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With expert local guides, comfortable transport, and careful acclimatization, this tour offers 
                  an unforgettable taste of Tibet's unique culture and landscapes. Perfect for travelers with limited 
                  time who don't want to miss the absolute highlights of the 'Roof of the World'.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is MANDATORY and must cover high altitude up to 5,200m. 
                You'll spend a night at 4,718m at Namtso - this is very high. Inform your guide immediately if you 
                feel unwell. Road access is only open June-October.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Visit sacred Namtso Lake (4,718m) - highest saltwater lake in the world",
                  "Cross Largen La Pass at 5,190m with stunning mountain views",
                  "Explore iconic Potala Palace and Jokhang Temple in Lhasa",
                  "Walk the Barkhor pilgrim circuit with devout Tibetans",
                  "Witness sunset and sunrise over turquoise Namtso Lake",
                  "Visit Tashi Dor Island with ancient meditation caves",
                  "Experience Tibetan nomad culture on the drive to Namtso",
                  "Photograph the Nyenchen Tanglha mountain range",
                  "All Tibet and Namtso permits arranged in advance",
                  "Perfect 5-day itinerary for time-limited travelers",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Summer (Jun - Aug)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Warmest temperatures, green pastures, and the lake is ice-free. Best chance for clear skies 
                    and comfortable overnight at the lake. Occasional afternoon showers.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <SunriseIcon className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Oct)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and spectacular colors. 
                    Perfect for photography. Cold nights but stunning days.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
            </div>
          </section>

          {/* Namtso Facts - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Namtso Lake Facts</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {namtsoFacts.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-28 shrink-0">{item.fact}:</span>
                      <span className="text-[#556363] text-sm">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Namtso Highlight - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200/50">
                <h3 className="text-xl font-serif text-[#14383b] mb-3">The Heavenly Lake - Namtso</h3>
                <p className="text-[#556363] text-sm leading-relaxed mb-4">
                  Namtso, meaning 'Heavenly Lake' in Tibetan, is one of the most sacred sites in Tibet. At 4,718m, 
                  it's the highest saltwater lake in the world. The lake is particularly famous for its incredible 
                  color changes throughout the day - from deep turquoise to brilliant blue to golden at sunset.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Altitude</span>
                    <p className="text-[#556363] text-sm">4,718m / 15,479ft</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Area</span>
                    <p className="text-[#556363] text-sm">1,920 sq km</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Sacred Site</span>
                    <p className="text-[#556363] text-sm">Tashi Dor Island</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Highest Pass</span>
                    <p className="text-[#556363] text-sm">Largen La (5,190m)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Altitude Guide - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Altitude Guide</h2>
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
                    <span><strong>Note:</strong> Namtso overnight at 4,718m is very high - inform guide if you feel unwell.</span>
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey from the sacred sites of Lhasa to the breathtaking beauty of Namtso Lake.
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
                    q: "What is special about Namtso Lake?",
                    a: "Namtso Lake is one of the three sacred lakes of Tibet and the highest saltwater lake in the world at 4,718m. Its name means 'Heavenly Lake' in Tibetan. The lake is famous for its stunning turquoise color, dramatic setting against the Nyenchen Tanglha mountains, and its sacred Tashi Dor Island with ancient meditation caves. For Tibetans, circumambulating the lake brings spiritual merit.",
                  },
                  {
                    q: "Is it possible to visit Namtso Lake year-round?",
                    a: "No. The road to Namtso is typically open only from June to October. In winter and spring (November-May), heavy snow blocks the mountain passes and access is not possible. Even in summer, weather can cause temporary closures. We always check conditions before departure.",
                  },
                  {
                    q: "How difficult is the overnight stay at Namtso?",
                    a: "The main challenge is the altitude - 4,718m is very high. Many people experience difficulty sleeping, headache, or shortness of breath. The accommodation is basic (simple guesthouse with shared facilities, no heating). Come prepared with warm clothes and a good attitude. The incredible sunset and sunrise make it all worthwhile!",
                  },
                  {
                    q: "What permits do I need for this tour?",
                    a: "You need: 1) China Visa (from your local Chinese embassy), 2) Tibet Travel Permit, and 3) Special Namtso permit. We arrange all Tibet permits for you - we need your passport copy at least 20 days before travel. China Visa must be obtained separately, but we provide support documents.",
                  },
                  {
                    q: "How will the altitude affect me at Namtso?",
                    a: "Most people feel some effects at 4,718m - headache, shortness of breath, difficulty sleeping are common. Our itinerary includes 2 nights in Lhasa for acclimatization before going to Namtso, which helps. We carry oxygen in the vehicle, and our guides are trained in altitude sickness recognition. Inform your guide immediately if you feel unwell.",
                  },
                  {
                    q: "What is the accommodation like at Namtso?",
                    a: "Accommodation at Namtso is basic - simple guesthouses with shared bathrooms (no attached bathrooms), no heating, and limited electricity. Rooms have beds with blankets, but it gets very cold at night. We recommend bringing a warm sleeping bag. This rustic experience is part of the adventure and allows you to experience the lake at sunset and sunrise.",
                  },
                  {
                    q: "Can I visit Tashi Dor Island?",
                    a: "Yes! Tashi Dor is a peninsula (not actually an island) with a small monastery and numerous meditation caves used by hermits for centuries. You can walk along the shore and explore the area. The rock formations and prayer flags make for excellent photography. Your guide will explain the sacred significance.",
                  },
                  {
                    q: "What should I pack specifically for Namtso?",
                    a: "Essentials: warm layers (temperatures drop below freezing at night even in summer), thermal underwear, fleece, down jacket, warm hat, gloves, thick socks, and a good sleeping bag (rated to at least -5°C). Daytime is warmer but windy. Sun protection is essential at this altitude. Your guide will provide a detailed packing list after booking.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for the Heavenly Lake Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your 5-Day Tibet Tour with Namtso Lake today and experience the sacred beauty of Tibet's highest lake.
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
    </>
  );
}