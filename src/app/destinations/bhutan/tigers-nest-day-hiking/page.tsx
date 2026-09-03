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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Tiger's Nest Preparation",
    altitude: "2,280m",
    distance: "Airport transfer + short orientation",
    description: "Welcome to Bhutan! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Transfer to your hotel in Paro (just 10 minutes from the airport). After check-in, meet your guide for a comprehensive briefing about tomorrow's hike to Taktsang Monastery (Tiger's Nest). Your guide will explain the trail, what to expect, and check that you have appropriate footwear and gear. The rest of the day is free to relax, acclimatize to the altitude, and prepare for the adventure ahead. Evening walk through Paro town to visit the local craft market and Rinpung Dzong illuminated at night. Early dinner and rest recommended.",
    overnight: "Hotel in Paro",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Tiger's Nest briefing", "Gear check", "Paro town exploration", "Rinpung Dzong evening view"],
  },
  {
    day: 2,
    title: "Taktsang Monastery (Tiger's Nest) Day Hike",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-7 hrs hike",
    description: "The day you've been waiting for! Early breakfast at the hotel (around 7:00 AM) before driving 15 minutes to the base camp of Taktsang Monastery. Your guide will brief you one final time before beginning the ascent. The trail starts with a gentle incline through beautiful pine forest, then becomes steeper with stone steps. The first section takes about 45-60 minutes to reach the cafeteria viewpoint - a perfect spot to rest, hydrate, and take your first photos of the monastery clinging to the cliff. From here, the trail descends slightly before the final climb to the monastery itself. The entire ascent takes 2-3 hours depending on your pace. Upon reaching Taktsang Monastery, you'll have time to explore this sacred site where Guru Rinpoche meditated in the 8th century. Feel the spiritual energy and marvel at the incredible location. Your guide will explain the history and significance of each temple. After visiting the monastery, descend back to the cafeteria for a well-deserved lunch with spectacular views. Continue the descent (another 1-1.5 hours) to the base. Transfer back to your hotel for a well-earned rest. Celebrate your achievement with a special dinner at a traditional Bhutanese farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Early morning start", "Pine forest trail", "Cafeteria viewpoint", "Taktsang Monastery exploration", "Guru Rinpoche's meditation cave", "Spectacular cliff-side views", "Traditional farmhouse dinner", "Cultural performance"],
  },
  {
    day: 3,
    title: "Paro Sightseeing & Departure",
    altitude: "2,280m",
    distance: "Local sightseeing + airport transfer",
    description: "After breakfast, enjoy a relaxing morning exploring Paro's cultural treasures at a leisurely pace. Visit the National Museum (Ta Dzong) housed in a historic watchtower, showcasing Bhutanese art, relics, and national costume. Explore Paro Rinpung Dzong, a magnificent fortress-monastery overlooking the valley. Time permitting, visit Kyichu Lhakhang, one of Bhutan's oldest and most sacred temples (built in the 7th century). Depending on your flight time, you may have opportunity for last-minute souvenir shopping in Paro town. Transfer to Paro International Airport for your departure flight (allow 2 hours before flight time). Our representative will assist with check-in. Bid farewell to the Land of the Thunder Dragon with the incredible achievement of hiking to the iconic Tiger's Nest Monastery - a memory you'll treasure forever.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["National Museum (Ta Dzong)", "Rinpung Dzong", "Kyichu Lhakhang (optional)", "Souvenir shopping", "Airport transfer", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation (3-star with breakfast) in Paro",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed) specialized in Taktsang history",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees (including Taktsang Monastery)",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (2 nights = $200)",
  "Government taxes and royalty",
  "Mineral water during sightseeing and hike",
  "Traditional scarf welcome at airport",
  "First aid medical kit",
  "Trekking poles (provided on request)",
  "Packed snacks for the hike (energy bars, fruits)",
  "Traditional farmhouse dinner with cultural performance",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monuments (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional - can be arranged)",
  "Horse ride up/down the trail (optional - available for hire locally)",
];

const gallery = [
  {
    src: "/images/used/bhutan-tiger.webp",
    alt: "Taktsang Monastery (Tiger's Nest) perched on a cliff in Paro Valley, Bhutan - iconic Buddhist monastery",
    caption: "Taktsang Monastery - The Tiger's Nest",
  },
];

const trailInfo = [
  {
    section: "Base to Cafeteria",
    time: "45-60 minutes",
    elevation: "2,280m → 2,900m",
    difficulty: "Steep climb",
    description: "The initial ascent through pine forest with stone steps. The most challenging section of the hike.",
  },
  {
    section: "Cafeteria to Monastery",
    time: "45-60 minutes",
    elevation: "2,900m → 3,120m → 2,900m",
    difficulty: "Moderate",
    description: "Descend slightly to a stream, then final climb to the monastery. Spectacular views throughout.",
  },
  {
    section: "Monastery Exploration",
    time: "45-60 minutes",
    elevation: "3,120m",
    difficulty: "Easy",
    description: "Visit the various temples, meditation caves, and viewpoints around the monastery complex.",
  },
  {
    section: "Descent to Base",
    time: "60-90 minutes",
    elevation: "3,120m → 2,280m",
    difficulty: "Easy to Moderate",
    description: "Gradual descent following the same trail. Take your time and enjoy the changing perspectives.",
  },
];

export default function TigersNestDayHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2]);

  const trekName = "Tiger's Nest Day Hiking";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/tigers-nest-day-hiking";
  const pageTitle = "Tiger's Nest Day Hiking - Himkala Adventure";
  const pageDescription = "Tiger's Nest Day Hiking: Hike to Bhutan's iconic Taktsang Monastery in 3 days. Expert guide, traditional farmhouse dinner, and all permits included. Book your Bhutan adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/bhutan-tiger.webp";

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
                    <span>Bhutan Day Hike</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Tiger's Nest <br />
                    <span className="text-[#cf6943]">Day Hiking</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Hike to Bhutan's most sacred and iconic site - Taktsang Monastery, perched dramatically on a cliff 
                    900 meters above the Paro Valley. A challenging but rewarding day hike with expert guidance.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Footprints className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Day Hike
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Iconic Experience
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Farmhouse Dinner
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
                src="/images/used/bhutan-tiger.webp"
                alt="Tiger's Nest Monastery - iconic Taktsang Monastery perched on a cliff in Paro Valley, Bhutan"
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
                  $1,050 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "3 Days / 2 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "3,120m" },
                { label: "Difficulty", value: "Moderate to Challenging" },
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
                  The <strong className="text-[#14383b]">Tiger's Nest Monastery (Taktsang)</strong> is Bhutan's most 
                  iconic and sacred site - a stunning complex of temples clinging to a cliff face 
                  <strong className="text-[#14383b]"> 900 meters above the Paro Valley</strong>. This 3-day 
                  <strong className="text-[#14383b]"> Bhutan hiking</strong> experience is designed specifically for 
                  those who want to focus on this legendary hike while also experiencing the best of Bhutanese 
                  culture and hospitality.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Your journey begins with arrival in Paro, followed by a briefing and preparation for the hike. 
                  The second day is dedicated entirely to the <strong className="text-[#14383b]">Taktsang hike</strong> - 
                  a challenging but incredibly rewarding 5-7 hour round trip through pine forests adorned with 
                  prayer flags, with spectacular views throughout. After descending, celebrate your achievement 
                  with a traditional farmhouse dinner and cultural performance.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With expert local guidance, all meals included, comfortable accommodation, and the Sustainable 
                  Development Fee covered, this package offers a focused, hassle-free experience of Bhutan's most 
                  unforgettable attraction. Perfect for travelers with limited time who don't want to miss the 
                  absolute highlight of the Land of the Thunder Dragon.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover medical emergencies and evacuation. 
                The Tiger's Nest hike is challenging with 840m elevation gain over stone steps. Good walking shoes and 
                reasonable fitness are essential.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Hiking Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                  "Expert guide sharing history and spiritual significance",
                  "Spectacular cliff-side monastery views",
                  "Visit Guru Rinpoche's meditation cave",
                  "Prayer flag-covered mountain trails",
                  "Traditional farmhouse dinner with cultural performance",
                  "Explore Paro's Rinpung Dzong and National Museum",
                  "All meals and hotel accommodation included",
                  "Small group size for personalized experience",
                  "All permits and visa fees included ($200 SDF)",
                  "Trekking poles and snacks provided",
                  "Achieve one of the world's most famous hikes",
                ].map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                    <span className="text-[#cf6943] mt-1">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Trail Details - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trail Details</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30 mb-4">
                <p className="text-[#556363] text-sm mb-4">
                  The Tiger's Nest hike is challenging but achievable for most with reasonable fitness. Here's what to expect on the trail:
                </p>
                <div className="space-y-3">
                  {trailInfo.map((section, index) => (
                    <div key={index} className="border-b border-[#d8cec0]/30 last:border-0 pb-3 last:pb-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="bg-[#cf6943]/10 text-[#cf6943] text-[10px] font-medium px-2 py-0.5 rounded">
                          {section.section}
                        </span>
                        <span className="text-[10px] text-[#66706d]">{section.time}</span>
                        <span className="text-[10px] text-[#66706d]">{section.elevation}</span>
                      </div>
                      <p className="text-[#556363] text-sm mb-1">
                        <span className="font-medium">Difficulty:</span> {section.difficulty}
                      </p>
                      <p className="text-[#556363] text-sm">{section.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Pro Tip:</strong> Start early (around 8 AM) to avoid afternoon clouds and crowds. The cafeteria at the viewpoint serves food and drinks - a perfect rest stop.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Season - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Hike Tiger's Nest</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Pleasant temperatures, blooming rhododendrons along the trail, and clear morning skies. 
                    Paro Tshechu festival often falls in spring - a colorful addition if your dates align.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear mountain views, pleasant weather, and vibrant 
                    festivals. Perfect conditions for photography and hiking.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in This Tiger's Nest Day Hike</h2>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Tiger's Nest Day Hiking</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                Experience the breathtaking beauty of Bhutan's most iconic hike through these stunning images.
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
                    q: "How difficult is the Tiger's Nest hike?",
                    a: "The hike is moderate to challenging. You'll climb 840 meters over 4km to reach the monastery, with many stone steps. The total round trip takes 5-7 hours. Most people with reasonable fitness can complete it, but you should be prepared for a full day of exertion. Take your time, rest when needed, and stay hydrated. Your guide will set a comfortable pace for the group.",
                  },
                  {
                    q: "Can I ride a horse instead of hiking?",
                    a: "Yes! Local ponies are available for hire at the trailhead. The horses can take you up to the cafeteria viewpoint (approximately halfway), but cannot go to the monastery itself as the final section involves steps. The cost is approximately $50-60 round trip and is payable locally in cash. This is a great option if you have mobility concerns or want to conserve energy.",
                  },
                  {
                    q: "What should I wear and bring for the hike?",
                    a: "Essential items: comfortable broken-in hiking shoes with good grip, layers (mornings are cool), rain jacket (just in case), sunscreen, sunglasses, hat, water bottle (1-2 liters), and small backpack. We provide trekking poles on request and packed snacks. Dress modestly for monastery entry (shoulders and knees covered).",
                  },
                  {
                    q: "What is the Sustainable Development Fee (SDF) and is it included?",
                    a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. For this 2-night tour, the SDF of $200 is fully included in our package price - you don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment.",
                  },
                  {
                    q: "Do I need a visa? How does it work?",
                    a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                  },
                  {
                    q: "Is the monastery open every day?",
                    a: "Taktsang Monastery is open daily, but may close for special religious events. It's closed on some Buddhist holidays. We check ahead for your specific dates. The best time to visit is morning when the skies are clearest before afternoon clouds roll in - which is why we start early!",
                  },
                  {
                    q: "Can I take photos inside the monastery?",
                    a: "Photography is not permitted inside the monastery temples out of respect for the sacred spaces. However, you can take unlimited photos from the outside, including the famous views from the cafeteria and viewpoints along the trail. Your guide will advise on appropriate moments for photos.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Conquer the Tiger's Nest?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Tiger's Nest Day Hiking experience today and achieve one of the world's most iconic hikes with expert guidance and cultural immersion.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                  <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                    <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                    Book This Hike
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}