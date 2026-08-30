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
  Landmark,
  Compass,
  Droplets,
  Award,
  Church,
  History,
  Palette,
  Scroll,
  Sparkles,
  Coffee,
  ShoppingBag,
  TreePine,
  Home,
  MountainSnow,
  Eye,
  Sunset,
  Droplet,
  Building2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Kathmandu Valley Sightseeing Tour",
    altitude: "1,350m",
    distance: "Full day tour (6-7 hours)",
    description: "Your full-day cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Swayambhunath Stupa (Monkey Temple), one of the most sacred Buddhist sites in Nepal. Perched on a hilltop west of Kathmandu, this ancient stupa offers panoramic views of the valley. Spend approximately 1.5 hours exploring the stupa, prayer wheels, and surrounding shrines. Next, drive to Kathmandu Durbar Square (20 minutes), the historic seat of royalty and a UNESCO World Heritage Site. Spend approximately 2 hours exploring the ancient palace complex, including the Kumari Ghar (home of the Living Goddess), Hanuman Dhoka Palace, and numerous temples. Enjoy a traditional Nepali lunch at a local restaurant. In the afternoon, continue to Pashupatinath Temple (20 minutes), one of the holiest Hindu temples dedicated to Lord Shiva. Spend approximately 1.5 hours along the banks of the Bagmati River, observing rituals and cremation ceremonies. Finally, visit Boudhanath Stupa (20 minutes), one of the largest stupas in South Asia and the center of Tibetan Buddhism in Nepal. Spend approximately 1 hour circumambulating the stupa and exploring the surrounding monasteries. Your guide will then drive you back to your hotel, arriving by approximately 5:00 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Swayambhunath Stupa (Monkey Temple)", "Kathmandu Durbar Square", "Kumari Living Goddess", "Pashupatinath Temple", "Boudhanath Stupa"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (heritage expert)",
  "Swayambhunath Stupa entrance fee",
  "Kathmandu Durbar Square entrance fee",
  "Pashupatinath Temple entrance fee",
  "Boudhanath Stupa entrance fee",
  "Traditional Nepali lunch at local restaurant",
  "Bottled water during the tour",
  "All government taxes and service charges",
  "Hotel pickup and drop-off (within Kathmandu valley)",
];

const excludes = [
  "Meals not specified (dinner)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guide and driver (recommended)",
  "Travel insurance",
  "Photography fees at certain temples (where applicable)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "/images/used/monkey_temple.webp",
    alt: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes of Buddha",
    caption: "Swayambhunath Stupa (Monkey Temple) with all-seeing eyes of Buddha",
  },
  {
    src: "/images/used/ktm-durbar-1.webp ",
    alt: "Kathmandu Durbar Square with ancient temples and palace",
    caption: "Kathmandu Durbar Square with ancient temples and palace",
  },
  {
    src: "/images/used/pashupati-1.webp",
    alt: "Pashupatinath Temple on the banks of the Bagmati River",
    caption: "Pashupatinath Temple on the banks of the Bagmati River",
  },
  {
    src: "/images/used/nepal-stupa.webp",
    alt: "Boudhanath Stupa - Center of Tibetan Buddhism in Nepal",
    caption: "Boudhanath Stupa - Center of Tibetan Buddhism in Nepal",
  },
];

export default function KathmanduSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Kathmandu Valley Sightseeing Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/kathmandu-valley-sightseeing-tour";
  const pageTitle = "Kathmandu Valley Sightseeing Tour - Himkala Adventure";
  const pageDescription = "Explore Kathmandu Valley's UNESCO heritage sites: Swayambhunath, Durbar Square, Pashupatinath, and Boudhanath. Private tour with expert guide. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/monkey_temple.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Kathmandu Valley Sightseeing Tour - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": tourName,
    "description": pageDescription,
    "image": imageUrl,
    "url": canonicalUrl,
    "brand": {
      "@type": "Organization",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "100",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl,
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
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
                    <span>Day Sightseeing Tour</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Kathmandu Valley <br />
                    <span className="text-[#cf6943]">Sightseeing Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Discover the cultural heart of Nepal—explore ancient stupas, sacred Hindu temples, royal palaces, 
                    and living traditions on this comprehensive introduction to the Kathmandu Valley's UNESCO World Heritage Sites.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      Easy
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      4 UNESCO Sites
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Full Day
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
                src="/images/used/monkey_temple.webp"
                alt="Kathmandu Valley Sightseeing Tour - Swayambhunath Stupa with all-seeing eyes of Buddha"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Available Daily
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $100 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "6-7 Hours" },
                { label: "Group Size", value: "1-12 people" },
                { label: "UNESCO Sites", value: "4 Sites" },
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
                  The <strong className="text-[#14383b]">Kathmandu Valley Sightseeing Tour</strong> is the perfect 
                  introduction to Nepal's rich cultural heritage, taking you to four of the valley's most significant 
                  UNESCO World Heritage Sites in a single day. This comprehensive tour offers a journey through 2,000 
                  years of history, art, architecture, and living religious traditions.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Your journey begins at <strong className="text-[#14383b]">Swayambhunath Stupa</strong>, also known 
                  as the Monkey Temple, perched on a hilltop overlooking the Kathmandu Valley. Its iconic all-seeing 
                  eyes of Buddha gaze in all four directions, symbolizing wisdom and compassion. Next, explore 
                  <strong className="text-[#14383b]">Kathmandu Durbar Square</strong>, the historic seat of royalty 
                  and a stunning collection of temples, palaces, and courtyards built between the 12th and 18th centuries.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The tour continues to <strong className="text-[#14383b]">Pashupatinath Temple</strong>, the holiest 
                  Hindu temple in Nepal, located on the banks of the sacred Bagmati River. Here you'll observe sadhus 
                  (holy men), devotees performing puja, and traditional cremation ceremonies. The final stop is 
                  <strong className="text-[#14383b]">Boudhanath Stupa</strong>, one of the largest spherical stupas 
                  in South Asia and the center of Tibetan Buddhism in Nepal.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Modest dress is required at temples. Photography of cremation ceremonies 
                at Pashupatinath is strictly prohibited. The Living Goddess appears at certain times from her palace window.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Visit Swayambhunath Stupa (Monkey Temple) with panoramic valley views",
                  "Climb the 365 steps past meditation shrines and prayer wheels",
                  "See the all-seeing eyes of Buddha, symbolizing wisdom and compassion",
                  "Explore Kathmandu Durbar Square, a UNESCO World Heritage Site",
                  "Visit the Kumari Ghar and see the Living Goddess (if she appears)",
                  "Admire intricate woodcarvings at the Kumari Ghar and Hanuman Dhoka",
                  "Observe Hindu rituals and cremation ceremonies at Pashupatinath Temple",
                  "See sadhus (holy men) and learn about Hindu traditions",
                  "Circumambulate Boudhanath Stupa, one of the largest in South Asia",
                  "Spin prayer wheels and experience Tibetan Buddhist culture",
                  "Enjoy a traditional Nepali lunch at a local restaurant",
                  "Learn about Nepal's syncretic Hindu-Buddhist culture from an expert guide",
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Pleasant temperatures and clear mornings. Ideal for photography with soft morning light. The valley is vibrant with spring colors.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. The city is beautifully decorated.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Cool, clear days with excellent visibility. Fewer tourists. Morning fog may delay start but usually clears by mid-morning.
                  </p>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#66706d]">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain, but heritage sites are still accessible with umbrella/raincoat.</p>
            </div>
          </section>

          {/* Itinerary - Free Walking Tour Style (Accordion) */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Tour Itinerary</h2>
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
                          <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">1</span>
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
                              <MapPin className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                              <span><strong>Meeting Point:</strong> Your hotel in Kathmandu</span>
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

          {/* Detailed Site Descriptions - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Detailed Site Descriptions</h2>

              {/* Swayambhunath */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 mb-6">
                <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                  <Landmark className="w-4 h-4" aria-hidden="true" /> Swayambhunath Stupa - The Monkey Temple
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> One of the oldest religious sites in Nepal, dating back to the 5th century. Legend says the Kathmandu Valley was once a lake, and Swayambhu emerged as a self-created lotus flower on a hilltop.</li>
                    <li><strong>The Eyes:</strong> The all-seeing eyes of Buddha painted on all four sides of the stupa represent wisdom and compassion, with the third eye symbolizing inner vision.</li>
                    <li><strong>The 365 Steps:</strong> The eastern approach features 365 steps, one for each day of the year, taking you past meditation shrines and prayer wheels.</li>
                  </ul>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Panoramic Views:</strong> From the hilltop, enjoy sweeping views of the entire Kathmandu Valley, surrounding hills, and on clear days, the Himalayan range.</li>
                    <li><strong>Surrounding Shrines:</strong> The complex includes numerous smaller shrines dedicated to Hindu and Buddhist deities, reflecting Nepal's syncretic religious traditions.</li>
                    <li><strong>Vajra and Toran:</strong> The thunderbolt (vajra) and the gilded toran at the stupa's entrance are masterpieces of metalwork.</li>
                  </ul>
                </div>
              </div>

              {/* Kathmandu Durbar Square */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4" aria-hidden="true" /> Kathmandu Durbar Square - Royal Heritage
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Kumari Ghar:</strong> This ornate palace is home to the Kumari, the Living Goddess. A young girl selected from the Newari Buddhist community, she appears at certain times of day to bless visitors.</li>
                    <li><strong>Hanuman Dhoka Palace:</strong> The ancient royal palace complex, named after the monkey god Hanuman. Features intricate woodcarvings, courtyards, and the historic Nasal Chowk where royal coronations took place.</li>
                    <li><strong>Taleju Temple:</strong> The tallest temple in the square, dedicated to the royal goddess Taleju. Non-Hindus cannot enter, but its magnificent architecture can be admired from outside.</li>
                  </ul>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Majipat Lhakhang:</strong> A three-story pagoda dedicated to Avalokiteshvara, featuring beautiful woodcarvings and metalwork.</li>
                    <li><strong>Kasthamandap:</strong> Originally a rest house built from the wood of a single tree, this structure gave Kathmandu its name. Reconstructed after the 2015 earthquake.</li>
                    <li><strong>Ashok Vinayak:</strong> A small but important Ganesh shrine in the center of the square, worshiped before any major undertaking.</li>
                  </ul>
                </div>
              </div>

              {/* Pashupatinath */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm">
                  <Droplet className="w-4 h-4" aria-hidden="true" /> Pashupatinath Temple - Sacred Hindu Shrine
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Main Temple:</strong> The two-story pagoda-style temple, with its golden roof and silver doors, houses the sacred linga of Lord Shiva. Non-Hindus cannot enter the inner courtyard.</li>
                    <li><strong>Bagmati River:</strong> The river is considered sacred, and its banks are lined with cremation platforms. Observing the cremation rituals offers insight into Hindu beliefs about death and rebirth.</li>
                    <li><strong>Sadhus:</strong> The temple complex is home to many sadhus (holy men), recognizable by their orange robes, dreadlocks, and face paint.</li>
                  </ul>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Smaller Temples:</strong> The complex contains hundreds of smaller shrines, each with its own significance and mythology.</li>
                    <li><strong>Pashupatinath Area:</strong> The surrounding area is filled with ashrams, monasteries, and lodges for pilgrims.</li>
                    <li><strong>Festivals:</strong> The biggest celebration is Maha Shivaratri (February/March), when hundreds of thousands of devotees gather to worship Lord Shiva.</li>
                  </ul>
                </div>
              </div>

              {/* Boudhanath */}
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-sm">
                  <Church className="w-4 h-4" aria-hidden="true" /> Boudhanath Stupa - Center of Tibetan Buddhism
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ul className="text-purple-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> Believed to have been built in the 5th century, Boudhanath is one of the largest stupas in South Asia. It stands at the ancient trade route to Tibet.</li>
                    <li><strong>Architecture:</strong> The stupa's massive mandala represents the Buddhist cosmos. The white dome symbolizes the entire world, while the 13 rings above represent the stages to enlightenment.</li>
                    <li><strong>Prayer Wheels:</strong> Surrounding the base are 108 small prayer wheels. Spinning them while circumambulating clockwise is believed to send prayers to the universe.</li>
                  </ul>
                  <ul className="text-purple-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Surrounding Monasteries:</strong> Boudhanath is surrounded by over 50 monasteries representing different schools of Tibetan Buddhism.</li>
                    <li><strong>Pilgrims:</strong> Throughout the day, you'll see Tibetan monks in maroon robes, pilgrims prostrating, and locals engaged in devotion.</li>
                    <li><strong>Evening Atmosphere:</strong> At sunset, hundreds of butter lamps are lit, and the chanting of mantras fills the air. The stupa is beautifully illuminated after dark.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* UNESCO Timeline - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
                <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                  <History className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> UNESCO World Heritage Timeline
                </h3>
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <div className="w-20 text-xs font-bold text-[#cf6943]">5th Century</div>
                    <div className="text-sm text-[#556363]">Swayambhunath Stupa established</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 text-xs font-bold text-[#cf6943]">5th Century</div>
                    <div className="text-sm text-[#556363]">Boudhanath Stupa built</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 text-xs font-bold text-[#cf6943]">12th-18th C.</div>
                    <div className="text-sm text-[#556363]">Kathmandu Durbar Square developed by Malla kings</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 text-xs font-bold text-[#cf6943]">1979</div>
                    <div className="text-sm text-[#556363]">Kathmandu Valley designated UNESCO World Heritage Site</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 text-xs font-bold text-[#cf6943]">2003</div>
                    <div className="text-sm text-[#556363]">Pashupatinath added to UNESCO list</div>
                  </div>
                </div>
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
                A visual journey through the cultural heart of Nepal - from ancient stupas to royal palaces.
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
                    q: "What is the Living Goddess Kumari?",
                    a: "The Kumari is a prepubescent girl selected from the Newari Buddhist community who is worshipped as the living incarnation of the goddess Taleju. She lives in the Kumari Ghar palace and appears at certain times of day to bless visitors. The selection process involves 32 perfections, and once chosen, she lives in the palace until her first menstruation.",
                  },
                  {
                    q: "Can I see cremations at Pashupatinath?",
                    a: "Yes, open-air cremations take place daily on the banks of the Bagmati River. Photography of the cremation itself is strictly prohibited out of respect, but observing from a distance is acceptable. Your guide will explain the Hindu death rituals and their spiritual significance.",
                  },
                  {
                    q: "How much walking is involved?",
                    a: "You'll walk approximately 3-4 hours total throughout the day, with vehicle transfers between sites. The terrain is uneven with stone-paved streets and some stairs (especially at Swayambhunath). Comfortable walking shoes are essential.",
                  },
                  {
                    q: "Is this tour suitable for children?",
                    a: "Yes, this tour is very family-friendly. Children are fascinated by the monkeys at Swayambhunath, the Living Goddess, and the colorful rituals. The tour pace is relaxed with breaks.",
                  },
                  {
                    q: "Can I customize this tour?",
                    a: "Absolutely! This tour can be customized to your interests. You might want to spend more time at certain sites, add Patan or Bhaktapur, or focus more on photography. Please let us know your preferences when booking.",
                  },
                  {
                    q: "What is the best time of day for photography?",
                    a: "Morning light (9-11 AM) is excellent for Swayambhunath and Boudhanath. Late afternoon (3-5 PM) offers beautiful light at Pashupatinath and Kathmandu Durbar Square. Our itinerary is timed to provide good lighting at each location.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore Nepal's Cultural Heart?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Kathmandu Valley Sightseeing Tour today and discover the ancient temples, royal palaces, and living traditions of Nepal's UNESCO World Heritage Sites.
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