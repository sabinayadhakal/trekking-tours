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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Drive to Thimphu",
    altitude: "2,280m → 2,320m",
    distance: "50km / 1.5 hrs drive",
    description: "Welcome to Bhutan! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, receive a trek briefing where we'll discuss the short but beautiful trek ahead, check your gear, and handle permit arrangements. Evening visit to the Buddha Dordenma statue - one of the largest Buddha statues in the world at 51.5 meters. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Buddha Dordenma viewpoint", "Trek briefing", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Thimphu to Paro & Taktsang Monastery (Tiger's Nest) Hike",
    altitude: "2,320m → 2,280m → 3,120m → 2,280m",
    distance: "50km drive + 8km round trip hike / 5-6 hrs hike",
    description: "Early morning drive from Thimphu to Paro (1.5 hours). Upon arrival, proceed directly to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the highlight of your short trek. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint (midway), you'll see the monastery in all its glory. Continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. The spiritual energy and breathtaking location make this one of the most memorable hikes in the Himalayas. After descending, enjoy a celebratory lunch. Check into your hotel in Paro and rest those legs! Evening free to explore Paro town.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic drive Thimphu-Paro", "Tiger's Nest Monastery hike", "Spectacular cliff-side monastery", "Prayer flag forests", "Guru Rinpoche's meditation cave"],
  },
  {
    day: 3,
    title: "Paro Sightseeing & Departure",
    altitude: "2,280m",
    distance: "Local sightseeing + airport transfer",
    description: "After breakfast, enjoy morning sightseeing in Paro. Visit the National Museum (Ta Dzong) housed in a historic watchtower, showcasing Bhutanese art, relics, and national costume. Explore Paro Rinpung Dzong, a magnificent fortress-monastery overlooking the valley. Time permitting, visit a local farmhouse to experience traditional Bhutanese hospitality. Transfer to Paro International Airport for your departure flight. Our representative will assist with check-in. Bid farewell to the Land of the Thunder Dragon with memories of the iconic Tiger's Nest and the warm hospitality of Bhutan.",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["National Museum (Ta Dzong)", "Rinpung Dzong", "Farmhouse visit (optional)", "Airport transfer", "Fond farewells"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation (3-star with breakfast) - 1 night Thimphu, 1 night Paro",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees (including Taktsang Monastery)",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (2 nights = $200)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "First aid medical kit",
  "Trekking poles (if required)",
  "All government taxes and official expenses",
];

const excludes = [
  "International airfare to/from Paro",
  "Travel insurance (mandatory)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
  "Porter service (not needed for this short trek)",
];

const gallery = [
  {
    src: "/images/used/bhutan-tiger.webp",
    alt: "Taktsang Monastery (Tiger's Nest) perched on a cliff in Paro Valley, Bhutan - iconic Buddhist monastery",
    caption: "Taktsang Monastery - The Tiger's Nest",
  },
  {
    src: "/images/used/bhutan-paro.webp",
    alt: "Scenic Paro Valley with traditional Bhutanese architecture and mountain views in Bhutan",
    caption: "Scenic Paro Valley",
  },
  {
    src: "/images/used/hiking-trail.webp",
    alt: "Trail to Tiger's Nest Monastery - scenic hiking path through prayer flag-covered pine forests in Bhutan",
    caption: "Trail to Tiger's Nest Monastery",
  },
];

export default function ShortSweetBhutanTrekPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2]);

  const trekName = "Short and Sweet Bhutan Trek";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/short-and-sweet-bhutan-trek";
  const pageTitle = "Short and Sweet Bhutan Trek - Himkala Adventure";
  const pageDescription = "Short and Sweet Bhutan Trek: Hike to the iconic Tiger's Nest Monastery in just 3 days. Explore Thimphu and Paro with expert guides. Perfect for limited time. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/short-sweet-bhutan.webp";

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
                    <span>Bhutan Short Trek</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Short & Sweet <br />
                    <span className="text-[#cf6943]">Bhutan Trek</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    The perfect introduction to trekking in Bhutan! Experience the iconic Tiger's Nest Monastery hike, 
                    explore the cultural treasures of Thimphu and Paro - all in just 3 unforgettable days.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Sparkles className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Short & Sweet
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Tiger's Nest
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Day Hike
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
                src="/images/used/short-sweet-bhutan.webp"
                alt="Short and Sweet Bhutan Trek - iconic Tiger's Nest Monastery hike in Bhutan's Paro Valley"
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
                  $1,250 / person
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
                  The <strong className="text-[#14383b]">Short and Sweet Bhutan Trek</strong> is the perfect 
                  introduction to the magic of the Kingdom of Bhutan for those with limited time. This compact 
                  3-day adventure packs in the absolute must-see highlights, centering around the iconic 
                  <strong className="text-[#14383b]"> Taktsang Monastery (Tiger's Nest)</strong> hike - Bhutan's 
                  most famous and revered site.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Your journey begins in the capital city of Thimphu, where you'll visit the massive Buddha Dordenma 
                  statue and prepare for your adventure. The centerpiece is a full day dedicated to the challenging 
                  but rewarding <strong className="text-[#14383b]">hike to Tiger's Nest Monastery</strong>, perched 
                  dramatically on a cliff 900 meters above the Paro Valley - a pilgrimage that has drawn visitors 
                  for centuries.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With comfortable 3-star accommodation, all meals included, and expert local guidance, this package 
                  offers a stress-free taste of Bhutan's unique culture, stunning landscapes, and spiritual heritage. 
                  Perfect for travelers with limited time who don't want to miss the absolute best of the Land of 
                  the Thunder Dragon.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover medical emergencies and evacuation. 
                The Tiger's Nest hike takes 5-6 hours round trip with significant uphill sections (900m elevation gain). 
                Good walking shoes and reasonable fitness are essential.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trek Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                  "Visit Buddha Dordenma - one of the world's largest Buddha statues",
                  "Explore Paro's Rinpung Dzong and National Museum",
                  "Experience traditional Bhutanese hospitality",
                  "Scenic drives through Paro and Thimphu valleys",
                  "Prayer flag-covered mountain trails",
                  "Authentic Bhutanese cuisine throughout",
                  "Expert local guide sharing cultural insights",
                  "All permits and visa fees included ($200 SDF)",
                  "Perfect for time-pressed travelers",
                  "No camping - comfortable hotel accommodation",
                  "Achieve the Tiger's Nest hike in just one day",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Trek Bhutan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Pleasant temperatures, blooming rhododendrons, and clear skies. Perfect for the Tiger's Nest 
                    hike. Paro Tshechu festival often falls in spring - a colorful addition!
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
                    festivals including the famous Thimphu Tshechu.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in This Short and Sweet Bhutan Trek</h2>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Short and Sweet Bhutan Trek</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through Bhutan's iconic Tiger's Nest Monastery, scenic valleys, and cultural treasures.
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
                    q: "Is this really a 'trek'?",
                    a: "This is a short and sweet introduction to trekking in Bhutan! While most of the itinerary involves cultural sightseeing, Day 2 features the full 5-6 hour round trip hike to Taktsang Monastery (Tiger's Nest) with 900m elevation gain. It's a challenging day hike rather than a multi-day camping trek - perfect for those wanting a taste of Himalayan hiking without the commitment of a longer trek.",
                  },
                  {
                    q: "How difficult is the Tiger's Nest hike?",
                    a: "The hike to Taktsang Monastery is moderate to challenging and takes 5-6 hours round trip. The trail is well-maintained but has many stone steps and significant uphill sections (900m elevation gain). The first 45 minutes are steep, then you descend to a cafeteria viewpoint before the final climb. Most people with reasonable fitness can complete it.",
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
                    q: "What should I pack for this short trek?",
                    a: "Essential items include: comfortable broken-in walking shoes/hiking boots for the Tiger's Nest hike, layers (mornings can be cool), rain jacket (just in case), sunscreen, sunglasses, hat, water bottle, and modest clothing for monastery visits (shoulders and knees covered). Trekking poles are available on request.",
                  },
                  {
                    q: "Can I extend this tour?",
                    a: "Absolutely! This 3-day package is designed as a taster, but we can easily extend it to include Punakha (with its famous dzong and fertility temple), Gangtey Valley (crane sanctuary), or a longer trek. Contact us with your available days and interests for a customized itinerary.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Short and Sweet Bhutan Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Short and Sweet Bhutan Trek today and experience the iconic Tiger's Nest Monastery hike in just 3 unforgettable days.
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}