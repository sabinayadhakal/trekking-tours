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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Lhasa (3,650m)",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "Welcome to Lhasa, the spiritual heart of Tibet! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey to the sacred city. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views and your first glimpse of Tibetan landscapes. After checking into your hotel in Lhasa, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the days ahead, Tibetan culture, and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic drive to Lhasa", "Acclimatization briefing", "First glimpse of Tibetan landscape"],
  },
  {
    day: 2,
    title: "Lhasa - Potala Palace & Jokhang Temple",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Begin your exploration of Lhasa's cultural treasures with a visit to the iconic Potala Palace, the winter palace of the Dalai Lamas and one of Tibet's most recognizable landmarks. This 13-story marvel contains over 1,000 rooms, with stunning chapels, tombs of past Dalai Lamas, and breathtaking views of Lhasa. Your guide will explain the history and significance of this UNESCO World Heritage site. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century during the reign of King Songtsen Gampo. The temple houses the revered Jowo Shakyamuni statue and is a major pilgrimage site. In the evening, walk around the Barkhor Street, the pilgrimage circuit surrounding Jokhang, where you'll see devout pilgrims performing prostrations and can browse traditional Tibetan handicrafts. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace exploration", "Jokhang Temple", "Barkhor pilgrimage circuit", "Tibetan handicrafts", "Pilgrims and local life"],
  },
  {
    day: 3,
    title: "Lhasa - Drepung & Sera Monasteries",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "Today you'll explore two of Tibet's greatest monastic universities. Morning visit to Drepung Monastery, once the world's largest monastery with over 10,000 monks. Founded in 1416, it served as the seat of the Dalai Lamas before the Potala was built. Explore its whitewashed buildings clinging to the hillside, visit the impressive chapels, and learn about Tibetan Buddhist philosophy. After lunch, visit Sera Monastery, another ancient institution founded in 1419, famous for its lively 'debating' sessions where monks engage in spirited philosophical discussions in the courtyard (usually 3-5 PM). Wander through the ancient halls and witness this unique tradition that has continued for centuries. Evening free to explore Lhasa at your own pace or revisit Barkhor for more photos. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Drepung Monastery", "Sera Monastery", "Monk debates", "Tibetan Buddhist philosophy", "Monastic life"],
  },
  {
    day: 4,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, enjoy some free time for last-minute souvenir shopping at Barkhor Market or a final stroll through the old town. Depending on your flight time, you may visit any sites you missed or simply soak in the atmosphere of this unique city one last time. Transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with memories of ancient monasteries, devout pilgrims, and the unique culture of Tibet. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Free morning", "Last-minute shopping", "Airport transfer", "Departure assistance", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "3 nights hotel accommodation (3-star with breakfast) in Lhasa",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees (Potala Palace, Jokhang Temple, Drepung, Sera)",
  "Tibet Travel Permit (processed by us)",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "All government taxes and official expenses",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 4,000m)",
  "China Visa (required separately - we provide Tibet Permit support)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Single room supplement (if applicable)",
];

const gallery = [
  {
    src: "/images/used/tibet-1.webp",
    alt: "Potala Palace in Lhasa, Tibet - iconic UNESCO World Heritage site and former winter palace of the Dalai Lamas",
    caption: "Potala Palace - Iconic Landmark of Lhasa",
  },
  {
    src: "/images/used/tibet-lhasa.webp",
    alt: "Lhasa city view with traditional Tibetan architecture and mountain backdrop",
    caption: "Lhasa City with Mountain Backdrop",
  },
];

const lhasaFacts = [
  {
    fact: "Elevation",
    detail: "3,650m (11,975ft) - One of the highest cities in the world",
  },
  {
    fact: "Name Meaning",
    detail: "'Lhasa' means 'Place of the Gods' in Tibetan",
  },
  {
    fact: "Founded",
    detail: "7th century by King Songtsen Gampo",
  },
  {
    fact: "Sacred Sites",
    detail: "Over 100 monasteries and temples in the region",
  },
  {
    fact: "UNESCO Sites",
    detail: "Potala Palace (1994), Jokhang Temple (2000)",
  },
  {
    fact: "Population",
    detail: "Approximately 300,000 residents",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa Gonggar Airport",
    altitude: "3,570m",
    notes: "Arrival point, 1.5hrs from city",
  },
  {
    location: "Lhasa City",
    altitude: "3,650m",
    overnight: "3 nights",
    notes: "City center, acclimatization focus",
  },
  {
    location: "Potala Palace",
    altitude: "3,700m",
    notes: "Top of palace, some steps",
  },
  {
    location: "Sera Monastery",
    altitude: "3,680m",
    notes: "Gentle walking, debates courtyard",
  },
  {
    location: "Drepung Monastery",
    altitude: "3,800m",
    notes: "Hillside location, some incline",
  },
];

export default function LhasaCityTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);

  const tourName = "4-Day Lhasa City Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/tibet/lhasa-city-tour";
  const pageTitle = "4-Day Lhasa City Tour - Explore Tibet's Sacred Sites";
  const pageDescription = "4-Day Lhasa City Tour: Explore Potala Palace, Jokhang Temple, Barkhor circuit, and witness monk debates at Sera Monastery. Book your Tibet cultural tour now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tibet-1.webp";

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
                    <span>Tibet City Tour</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    4 Days <br />
                    <span className="text-[#cf6943]">Lhasa City Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Discover the sacred heart of Tibet! Explore the iconic Potala Palace, wander the pilgrim-filled 
                    Barkhor circuit, witness monk debates at ancient monasteries, and immerse yourself in Tibetan 
                    Buddhist culture in the 'Place of the Gods'.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      UNESCO Sites
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      City Tour
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      3,650m
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
                src="/images/used/tibet-1.webp"
                alt="Potala Palace in Lhasa, Tibet - iconic UNESCO World Heritage site and former winter palace of the Dalai Lamas"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: Apr-Oct
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $950 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "4 Days / 3 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "3,800m" },
                { label: "Difficulty", value: "Easy" },
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
                  The <strong className="text-[#14383b]">4-Day Lhasa City Tour</strong> is the perfect introduction 
                  to the spiritual and cultural heart of Tibet. Lhasa, meaning <strong className="text-[#14383b]">'Place of the Gods'</strong>, 
                  has been the center of Tibetan Buddhism for over 1,300 years and offers an unparalleled immersion 
                  into living Buddhist traditions.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Your journey takes you to Tibet's most sacred sites: the iconic <strong className="text-[#14383b]">Potala Palace</strong>, 
                  winter home of the Dalai Lamas and symbol of Tibetan civilization; the <strong className="text-[#14383b]">Jokhang Temple</strong>, 
                  Tibet's holiest shrine housing the revered Jowo Shakyamuni statue; and the ancient monastic 
                  universities of <strong className="text-[#14383b]">Drepung and Sera</strong>, where you'll witness 
                  lively monk debates - a tradition unchanged for centuries.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With expert local guides, comfortable accommodation, and gradual acclimatization built into 
                  the itinerary, this tour offers a seamless introduction to the 'Roof of the World'. Perfect 
                  for culture enthusiasts, photographers, and spiritual seekers wanting to experience Tibet's 
                  unique heritage in a short but comprehensive visit.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover high altitude up to 4,000m. 
                You need both a China Visa and Tibet Travel Permit. We arrange your Tibet Permit - submit passport 
                copy at least 20 days before travel.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Explore iconic Potala Palace - UNESCO World Heritage site",
                  "Visit Jokhang Temple, Tibet's holiest shrine",
                  "Walk the Barkhor pilgrim circuit with devout Tibetans",
                  "Witness lively monk debates at Sera Monastery",
                  "Discover Drepung Monastery, once the world's largest",
                  "Photograph Tibetan architecture and daily life",
                  "Shop for traditional handicrafts at Barkhor Market",
                  "Experience living Tibetan Buddhist culture",
                  "Learn about Tibetan history from expert local guides",
                  "Gradual acclimatization at 3,650m for comfort",
                  "All Tibet permits arranged in advance",
                  "Perfect for first-time visitors to Tibet",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit Lhasa</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Summer (May - Aug)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Warmest temperatures, clear mornings, and lush valleys. Occasional afternoon showers but 
                    generally excellent conditions for sightseeing.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <SunriseIcon className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Oct)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and perfect temperatures 
                    for exploring monasteries and the Barkhor circuit.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
            </div>
          </section>

          {/* Lhasa Facts - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Lhasa Facts</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lhasaFacts.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-24 shrink-0">{item.fact}:</span>
                      <span className="text-[#556363] text-sm">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Altitude Guide - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Altitude Guide</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="space-y-2">
                  {altitudeInfo.map((item, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-32">{item.location}</span>
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
                    <span><strong>Acclimatization:</strong> Rest on arrival, drink plenty of water, avoid alcohol, and move slowly.</span>
                  </p>
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in Lhasa City Tour</h2>
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Lhasa City Tour</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through Tibet's sacred capital - from the iconic Potala Palace to the ancient monasteries and vibrant pilgrim life.
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "Do I need a visa and permits for Lhasa?",
                    a: "Yes. You need both a China Visa (obtained from your local Chinese embassy/consulate before travel) AND a Tibet Travel Permit. We arrange your Tibet Permit for you - we need a clear passport copy at least 20 days before travel. Note that independent travel in Tibet is not permitted; you must be accompanied by a guide (included).",
                  },
                  {
                    q: "How do I get to Lhasa?",
                    a: "Most travelers fly into Lhasa Gonggar Airport from major Chinese cities like Chengdu, Beijing, Shanghai, or from Kathmandu (seasonal). Flights from Kathmandu offer spectacular Himalayan views. The airport is about 1.5 hours from Lhasa city center.",
                  },
                  {
                    q: "How will the altitude affect me?",
                    a: "Lhasa is at 3,650m. Most visitors experience some symptoms like mild headache, shortness of breath, or fatigue. Our itinerary includes a rest day on arrival for acclimatization. We recommend: rest on arrival, drink plenty of water, avoid alcohol, and move slowly. Oxygen cylinders are available in the vehicle for emergencies.",
                  },
                  {
                    q: "What is the accommodation like in Lhasa?",
                    a: "We use comfortable 3-star hotels in Lhasa with modern facilities, attached bathrooms, hot water, and heating. Hotels are centrally located for easy access to the main sites. Upgrades to 4-star hotels are available on request.",
                  },
                  {
                    q: "What is the best time to visit Lhasa?",
                    a: "The best time is May to October, with the peak season being September-October when skies are clearest. Summer (June-August) is warm but can have afternoon showers. Winter (November-March) is very cold but offers clear skies and fewer tourists.",
                  },
                  {
                    q: "Can I take photographs at monasteries?",
                    a: "Photography is generally allowed in monastery courtyards and exterior spaces, but strictly prohibited inside temple halls out of respect. Always look for signs and ask your guide before photographing. When photographing monks or pilgrims, ask permission first.",
                  },
                  {
                    q: "What should I pack for Lhasa?",
                    a: "Essential items: layers (temperatures vary greatly), warm jacket (evenings are cool), sun hat, sunglasses, high-SPF sunscreen, lip balm, reusable water bottle, personal medications, and comfortable walking shoes. Modest clothing covering shoulders and knees is required for monastery visits.",
                  },
                  {
                    q: "Can I extend this tour to visit other parts of Tibet?",
                    a: "Absolutely! This 4-day Lhasa tour can be extended to include Gyantse, Shigatse, Everest Base Camp, or even Mount Kailash. Contact us with your available days and interests for a customized itinerary.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Discover the Place of the Gods?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Lhasa City Tour today and immerse yourself in the spiritual heart of Tibet - a journey through ancient monasteries, sacred sites, and living Buddhist traditions.
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