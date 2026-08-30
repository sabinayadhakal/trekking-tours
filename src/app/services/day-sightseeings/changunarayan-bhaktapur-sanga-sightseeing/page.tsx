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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Changunarayan, Bhaktapur & Sanga Sightseeing Tour",
    altitude: "1,350m → 1,541m → 1,401m → 1,500m → 1,350m",
    distance: "Full day tour (7-8 hours)",
    description: "Your full-day cultural and scenic tour begins after breakfast at 8:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Changunarayan (approximately 45 minutes), the oldest Hindu temple in Nepal and a UNESCO World Heritage Site. Spend approximately 1.5 hours exploring this ancient temple complex with its exquisite stone, wood, and metal crafts dating back to the 4th century. Next, drive to Bhaktapur (30 minutes), the best-preserved medieval city in Nepal. Spend approximately 3 hours exploring Bhaktapur Durbar Square, including the Palace of 55 Windows, Nyatapola Temple, and Pottery Square. Enjoy a traditional Newari lunch at a local restaurant. In the late afternoon, drive to Sanga (30 minutes), a hilltop viewpoint offering spectacular panoramic views of the Himalayan range including Everest on clear days. Spend approximately 1 hour enjoying the views and photography. Your guide will then drive you back to Kathmandu, arriving at your hotel by approximately 5:30 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Changunarayan Temple (4th century)", "Bhaktapur Durbar Square", "Nyatapola Temple", "Pottery Square", "Sanga hilltop views"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (heritage expert)",
  "Changunarayan Temple entrance fee",
  "Bhaktapur Durbar Square entrance fee",
  "Traditional Newari lunch at local restaurant",
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
    src: "/images/used/changunarayan-1.webp",
    alt: "Changunarayan Temple",
    caption: "Changunarayan Temple - The oldest Hindu temple in Nepal (4th century)",
  },
  {
    src: "/images/used/bhaktapur-2.webp",
    alt: "Bhaktapur Durbar Square",
    caption: "Bhaktapur Durbar Square with Nyatapola Temple",
  },
  {
    src: "/images/used/sanga-1.webp",
    alt: "Sanga Viewpoint",
    caption: "Panoramic Himalayan views from Sanga hilltop",
  },
  {
    src: "/images/used/bhaktapur-5.webp",
    alt: "Nyatapola Temple",
    caption: "Nyatapola Temple - Nepal's tallest pagoda",
  },
  {
    src: "/images/used/bhaktapur-3.webp",
    alt: "Palace of 55 Windows",
    caption: "Palace of 55 Windows in Bhaktapur Durbar Square",
  },
  {
    src: "/images/used/bhaktapur-4.webp",
    alt: "Pottery Square",
    caption: "Traditional potters at work in Bhaktapur's Pottery Square",
  },
];

export default function ChangunarayanBhaktapurSangaSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Changunarayan, Bhaktapur & Sanga Sightseeing Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Changunarayan, Bhaktapur & Sanga Sightseeing Tour - Himkala Adventure")}`;
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
                  <span>Day Sightseeing Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Changunarayan, Bhaktapur <br />
                  <span className="text-[#cf6943]">& Sanga Sightseeing Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Journey through 1,700 years of history—from Nepal's oldest temple at Changunarayan to the medieval splendor 
                  of Bhaktapur, culminating in panoramic Himalayan views from the Sanga hilltop.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    2 UNESCO Sites
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Newari Lunch
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
              src="/images/used/changunarayan-1.webp"
              alt="Changunarayan Temple, Bhaktapur and Sanga sightseeing tour - Nepal's oldest Hindu temple with Himalayan views"
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
              { label: "Duration", value: "7-8 Hours" },
              { label: "Group Size", value: "1-12 people" },
              { label: "UNESCO Sites", value: "2 Sites" },
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
                The <strong className="text-[#14383b]">Changunarayan, Bhaktapur & Sanga Sightseeing Tour</strong> is 
                a full-day journey that spans 1,700 years of Nepalese history and culture, culminating in breathtaking 
                Himalayan views. This unique tour combines the oldest temple in Nepal, the best-preserved medieval 
                city in the Kathmandu Valley, and a spectacular hilltop viewpoint, offering a comprehensive experience 
                of the valley's heritage and natural beauty.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Changunarayan Temple</strong> is the oldest Hindu temple in Nepal, 
                dating back to the 4th century. This UNESCO World Heritage Site is dedicated to Lord Vishnu and is 
                renowned for its exquisite stone, wood, and metal craft, including some of the finest examples of 
                Licchavi period art. The temple complex is perched on a hilltop, offering beautiful views of the 
                surrounding countryside and, on clear days, the Himalayan range.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Bhaktapur</strong>, also known as the "City of Devotees" or the 
                "City of Culture," is the best-preserved medieval city in Nepal and a UNESCO World Heritage Site. 
                Founded in the 12th century, its red brick buildings, cobblestone streets, and intricately carved 
                wooden windows transport visitors back in time. The city's Durbar Square is home to architectural 
                masterpieces including the famous Nyatapola Temple (Nepal's tallest pagoda), the Palace of 55 Windows, 
                and the Golden Gate.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The tour concludes at <strong className="text-[#14383b]">Sanga</strong>, a hilltop viewpoint that 
                offers spectacular panoramic views of the Himalayan range. On clear days, you can see peaks from 
                Ganesh Himal to Everest, with the sun setting behind the mountains creating a magical atmosphere. 
                This combination of ancient heritage and natural beauty makes this tour a perfect introduction to 
                the Kathmandu Valley's treasures.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Comfortable walking shoes are essential as you'll be walking on uneven 
              stone streets. Modest dress is appreciated at temples. Bring a warm layer for late afternoon at 
              the Sanga viewpoint.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Visit Changunarayan Temple, the oldest Hindu temple in Nepal (4th century)",
                "Explore exquisite stone carvings and inscriptions from the Licchavi period",
                "Discover Bhaktapur Durbar Square, a UNESCO World Heritage Site",
                "Marvel at Nyatapola Temple, Nepal's tallest pagoda at five stories",
                "Photograph the Palace of 55 Windows and the exquisite Golden Gate",
                "Watch traditional potters at work in Bhaktapur's famous Pottery Square",
                "Enjoy panoramic Himalayan views from the Sanga hilltop viewpoint",
                "See Mount Everest, Ganesh Himal, and Langtang range on clear days",
                "Stroll through narrow cobblestone streets lined with ancient temples",
                "Enjoy a traditional Newari lunch at a local restaurant in Bhaktapur",
                "Learn about Newari culture, architecture, and history from an expert guide",
                "Private transportation with hotel pickup and drop-off",
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
                  Pleasant temperatures, blooming rhododendrons, and clear mountain views. Ideal for photography and comfortable walking.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and excellent Himalayan visibility. Peak season for mountain views and festivals.
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
            <p className="mt-3 text-[10px] text-[#66706d]">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain but landscapes are lush and green. Umbrella/raincoat recommended.</p>
          </div>
        </section>

        {/* Changunarayan Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Changunarayan Temple - Nepal's Oldest Temple
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> Dating back to the 4th century, Changunarayan is the oldest Hindu temple in Nepal. It was built by King Mandev of the Licchavi dynasty and has been continuously worshiped for over 1,700 years. The temple is dedicated to Lord Vishnu, the preserver in the Hindu trinity.</li>
                    <li><strong>Architecture:</strong> The two-story pagoda-style temple is adorned with exquisite stone, wood, and metal craft. Unlike later temples, Changunarayan features intricate stone carvings that are considered masterpieces of Licchavi art.</li>
                    <li><strong>Stone Inscriptions:</strong> The temple complex contains the oldest stone inscription in Nepal, dating to 464 CE, which provides valuable information about the Licchavi dynasty.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Important Sculptures:</strong> The temple is renowned for its 5th to 8th-century stone sculptures, including the Vishwaroop (the cosmic form of Vishnu), the Vishnu Vikrant (Vishnu's giant stride), and the Garuda kneeling before the temple.</li>
                    <li><strong>Hilltop Location:</strong> Perched on a forested hilltop, the temple offers beautiful views of the surrounding countryside and, on clear days, the Himalayan range including Ganesh Himal and Langtang.</li>
                    <li><strong>Surrounding Village:</strong> The small village of Changunarayan has preserved its traditional character, with brick houses, carved windows, and a peaceful atmosphere away from the city crowds.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bhaktapur Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Bhaktapur - The Medieval City
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Nyatapola Temple:</strong> Built in 1702, this five-story pagoda is Nepal's tallest temple. Dedicated to the goddess Siddhi Lakshmi, it's renowned for its massive structure, artistic excellence, and that it survived the 1934 and 2015 earthquakes with minimal damage.</li>
                    <li><strong>Palace of 55 Windows:</strong> Built by King Jitamitra Malla in the 17th century, this magnificent palace features 55 intricately carved wooden windows, a masterpiece of Newari craftsmanship.</li>
                    <li><strong>Golden Gate:</strong> Considered one of the most beautiful works of art in the world, this gilded entrance to the palace is adorned with Hindu deities and exquisite metalwork.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Pottery Square:</strong> A living workshop where traditional potters shape clay using centuries-old techniques. Watch them create pots, fire them in open kilns, and display their wares.</li>
                    <li><strong>Bhairavnath Temple:</strong> A three-story pagoda dedicated to the terrifying aspect of Shiva, featuring beautiful woodcarvings and metalwork.</li>
                    <li><strong>Dattatreya Temple:</strong> Said to be built from a single tree trunk, this ancient temple is dedicated to the trinity of Brahma, Vishnu, and Shiva.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanga Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4" aria-hidden="true" /> Sanga Viewpoint - Himalayan Panorama
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Panoramic Views:</strong> Perched at approximately 1,500m, Sanga offers one of the best roadside viewpoints in the Kathmandu Valley. On clear days, you can see an uninterrupted panorama of the Himalayan range stretching from Ganesh Himal in the west to Mount Everest in the east.</li>
                    <li><strong>Peaks Visible:</strong> The view includes Ganesh Himal (7,407m), Langtang Lirung (7,227m), Dorje Lakpa (6,975m), Jugal Himal, and on exceptionally clear days, Mount Everest (8,848m) and Cho Oyu (8,188m).</li>
                    <li><strong>Sunset Views:</strong> Late afternoon visits offer spectacular sunset views as the setting sun paints the snow-capped peaks in shades of gold and pink.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Photography:</strong> Sanga is a photographer's paradise, offering unobstructed views of the Himalayas. The morning light is excellent for photography, while sunset creates magical colors.</li>
                    <li><strong>Local Life:</strong> The area around Sanga is dotted with small villages and terraced farmlands, offering glimpses of rural Nepalese life.</li>
                    <li><strong>Peaceful Atmosphere:</strong> Unlike crowded viewpoints in the city, Sanga offers a peaceful setting to absorb the majesty of the Himalayas without the crowds.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary - Free Walking Tour Style (Accordion) */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
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

        {/* Heritage Timeline - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
              <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                <History className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> Heritage Timeline
              </h3>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <div className="w-16 text-xs font-bold text-[#cf6943]">4th C.</div>
                  <div className="text-sm text-[#556363]">Changunarayan Temple established by King Mandev of Licchavi dynasty</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 text-xs font-bold text-[#cf6943]">12th C.</div>
                  <div className="text-sm text-[#556363]">Bhaktapur founded as capital of the Malla kingdom</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 text-xs font-bold text-[#cf6943]">1702</div>
                  <div className="text-sm text-[#556363]">Nyatapola Temple built - Nepal's tallest pagoda</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 text-xs font-bold text-[#cf6943]">1750s</div>
                  <div className="text-sm text-[#556363]">Palace of 55 Windows completed</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 text-xs font-bold text-[#cf6943]">1979</div>
                  <div className="text-sm text-[#556363]">Bhaktapur Durbar Square designated UNESCO World Heritage Site</div>
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
              A journey through 1,700 years of history - from Nepal's oldest temple to medieval Bhaktapur and Himalayan views.
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
                  q: "What makes Changunarayan Temple so special?",
                  a: "Changunarayan is the oldest Hindu temple in Nepal, dating back to the 4th century. It contains some of the finest examples of Licchavi period art, including stone sculptures and inscriptions that are masterpieces of Nepalese art. The temple has been continuously worshiped for over 1,700 years, making it a living link to Nepal's ancient past.",
                },
                {
                  q: "Can we see Mount Everest from Sanga?",
                  a: "On exceptionally clear days, particularly in autumn and spring, Mount Everest can be seen from Sanga as a distant peak on the eastern horizon. More commonly, you'll see closer peaks like Ganesh Himal, Langtang Lirung, and the Jugal range. The view is spectacular regardless, with dozens of snow-capped peaks visible.",
                },
                {
                  q: "Is the tour suitable for elderly or less mobile travelers?",
                  a: "Yes, with some considerations. The walking surfaces in Bhaktapur and Changunarayan are uneven stone-paved streets. However, the pace is leisurely with plenty of rest stops. The vehicle can drop you close to major sites. Sanga viewpoint requires only a short walk. Please inform us of mobility concerns when booking so we can make appropriate arrangements.",
                },
                {
                  q: "What is the best time of day for the Sanga viewpoint?",
                  a: "Late afternoon (3:30-5:00 PM) is ideal for Sanga as the sun begins to set behind the Himalayas, creating beautiful colors on the snow-capped peaks. The light is also excellent for photography. Our itinerary is timed to arrive at Sanga during this optimal window.",
                },
                {
                  q: "Can I buy souvenirs in Bhaktapur?",
                  a: "Absolutely! Bhaktapur is famous for its pottery, woodcarvings, and Thanka paintings. Pottery Square offers direct purchases from potters. The streets are lined with shops selling traditional crafts, masks, and souvenirs. Prices are generally reasonable, and bargaining is acceptable.",
                },
                {
                  q: "What is the difference between Bhaktapur and other durbar squares?",
                  a: "Bhaktapur is the best-preserved medieval city, with a more authentic, lived-in feel than Kathmandu or Patan. It's smaller and more walkable, with a cohesive red-brick aesthetic. It suffered less damage in the 2015 earthquake than Kathmandu Durbar Square, so more original structures remain intact.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore 1,700 Years of History?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Changunarayan, Bhaktapur & Sanga Sightseeing Tour today and discover Nepal's oldest temple, medieval splendor, and Himalayan views.
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
  );
}