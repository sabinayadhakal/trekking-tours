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
  Wheat,
  Droplet,
  Home,
  Factory,
  Flower2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Bungamati, Khokana & Patan Sightseeing Tour",
    altitude: "1,350m → 1,400m → 1,350m",
    distance: "Full day tour (6-7 hours)",
    description: "Your full-day cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Bungamati (approximately 45 minutes), a traditional Newari village known as the birthplace of the god Rato Machhindranath. Spend approximately 1.5 hours exploring this charming village, visiting the Rato Machhindranath Temple, and observing woodcarving workshops. Next, drive to nearby Khokana (15 minutes), a medieval Newari village famous for its mustard oil production and traditional lifestyle. Spend another 1.5 hours wandering through its narrow streets, visiting the oil mills, and experiencing authentic village life. After a traditional Newari lunch at a local restaurant, continue to Patan (30 minutes), the 'City of Fine Arts.' Spend approximately 2-3 hours exploring Patan Durbar Square, a UNESCO World Heritage Site, with its magnificent temples, royal palace, and artisan workshops. In the late afternoon, your guide will drive you back to Kathmandu, arriving at your hotel by approximately 5:00 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Bungamati village exploration", "Rato Machhindranath Temple", "Khokana mustard oil village", "Patan Durbar Square", "Traditional Newari lunch"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (Newari culture expert)",
  "Patan Durbar Square entrance fee",
  "Patan Museum entrance fee",
  "Bungamati village donation",
  "Khokana village donation",
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
    src: "/images/used/bungamati-1.webp",
    alt: "Bungamati Village",
    caption: "Traditional Newari village of Bungamati with its temple",
  },
  {
    src: "/images/used/bungamati-2.webp",
    alt: "Dhime Baja",
    caption: "Newari men playing Dhime Baaja",
  },
  {
    src: "/images/used/patan-2.webp",
    alt: "Patan Durbar Square",
    caption: "Patan Durbar Square - UNESCO World Heritage Site",
  },
  {
    src: "/images/used/bungamati-4.webp",
    alt: "Local Newari Food",
    caption: "Local Newari Food in Bungamati, Khokana",
  },
  {
    src: "/images/used/bungamati-5.webp",
    alt: "Woodcarving Bungamati",
    caption: "Traditional woodcarving workshops in Bungamati",
  },
  {
    src: "/images/used/patan-1.webp",
    alt: "Krishna Temple Patan",
    caption: "Krishna Temple in Patan Durbar Square",
  },
];

export default function BungamatiKhokanaPatanSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Bungamati, Khokana & Patan Sightseeing Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Bungamati, Khokana & Patan Sightseeing Tour - Himkala Adventure")}`;
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
                  Bungamati, Khokana <br />
                  <span className="text-[#cf6943]">& Patan Sightseeing Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Discover authentic Newari village life, traditional crafts, and ancient temples—explore the charming villages 
                  of Bungamati and Khokana before immersing yourself in the artistic heritage of Patan Durbar Square.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Home className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Village Experience
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
              src="/images/used/bungamati-1.webp"
              alt="Bungamati, Khokana and Patan sightseeing tour - traditional Newari villages and UNESCO heritage sites in Nepal"
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
              { label: "UNESCO Site", value: "Patan" },
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
                The <strong className="text-[#14383b]">Bungamati, Khokana & Patan Sightseeing Tour</strong> is a 
                unique full-day journey that combines authentic Newari village life with the artistic splendor of 
                one of Nepal's most beautiful royal cities. This tour offers a rare glimpse into traditional 
                lifestyles that have remained largely unchanged for centuries, followed by the architectural and 
                artistic treasures of Patan.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Bungamati</strong> is a traditional Newari village located on 
                the banks of the Bagmati River, south of Kathmandu. It is considered the birthplace of the god 
                Rato Machhindranath, the patron deity of Patan, and his magnificent chariot festival begins here 
                every year. The village is also renowned for its woodcarving tradition, with skilled artisans 
                creating intricate temple carvings and decorative pieces. Walking through Bungamati's narrow 
                brick-paved streets, you'll see traditional Newari houses with carved windows and doors, and 
                experience a pace of life far removed from the capital.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Khokana</strong>, just a short distance from Bungamati, is a 
                medieval Newari village that has preserved its traditional character remarkably well. It is famous 
                throughout Nepal for its mustard oil production, using traditional stone presses powered by water 
                buffalo. The village's narrow alleys, traditional houses, and agricultural lifestyle offer an 
                authentic glimpse into rural Newari culture. Khokana was also the first village in Nepal to have 
                electricity, and its unique layout and architecture make it a fascinating place to explore.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The tour concludes in <strong className="text-[#14383b]">Patan</strong> (Lalitpur), the 'City of 
                Fine Arts,' where you'll explore the magnificent Patan Durbar Square, a UNESCO World Heritage Site. 
                With its stunning collection of temples, the ancient royal palace (now the Patan Museum), and living 
                artisan quarters, Patan provides a perfect contrast to the rural villages you visited earlier. This 
                combination of village life and royal heritage offers a comprehensive understanding of Newari culture 
                in all its dimensions.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Comfortable walking shoes are essential as you'll be walking on uneven 
              stone streets. Ask permission before photographing people, and be respectful of private spaces.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Explore authentic Newari village life in Bungamati and Khokana",
                "Visit the Rato Machhindranath Temple, birthplace of the rain god",
                "Observe traditional woodcarving artisans at work in Bungamati",
                "See centuries-old mustard oil presses in Khokana village",
                "Wander through narrow brick-paved streets lined with traditional houses",
                "Experience rural Nepali lifestyle unchanged for generations",
                "Enjoy a traditional Newari lunch at a local restaurant",
                "Discover Patan Durbar Square, a UNESCO World Heritage Site",
                "Visit the Patan Museum, the finest museum in Nepal",
                "See the stone-carved Krishna Temple and the Golden Temple",
                "Observe metalworkers and Thanka painters in Patan's artisan quarters",
                "Learn about Newari culture, architecture, and traditions from an expert guide",
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
                  Pleasant temperatures and clear mornings. Villages are vibrant with spring colors. Ideal for photography and comfortable walking.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and post-harvest activity in villages. Ideal time to see agricultural life and festivals.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Cool, clear days with excellent visibility. Fewer tourists. Mustard oil production in full swing. Morning fog may clear by mid-morning.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain but villages are lush and green. Umbrella/raincoat recommended.</p>
          </div>
        </section>

        {/* Bungamati Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Bungamati - Birthplace of the Rain God
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Rato Machhindranath Temple:</strong> Bungamati's main temple is dedicated to the god Rato Machhindranath, the deity of rain and compassion. The temple's intricate woodcarving and architecture are excellent examples of Newari craftsmanship. The god resides here for six months each year before being moved to Patan for the famous chariot festival.</li>
                    <li><strong>Woodcarving Tradition:</strong> Bungamati is renowned throughout Nepal for its skilled woodcarvers. Many of the intricately carved windows, doors, and temple struts found across the Kathmandu Valley were crafted here. You can visit workshops where artisans continue this ancient tradition.</li>
                    <li><strong>Traditional Architecture:</strong> The village features classic Newari houses with brick facades, carved wooden windows, and tiled roofs. Narrow brick-paved streets create a maze-like layout typical of medieval Newari settlements.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Rato Machhindranath Chariot Festival:</strong> This is one of Nepal's longest and most important festivals, lasting several months. The massive chariot is constructed in Patan, pulled through the streets, and eventually reaches Bungamati, where the god resides for six months. The festival attracts thousands of devotees.</li>
                    <li><strong>Village Layout:</strong> Bungamati is built on a ridge overlooking the Bagmati River. Its strategic location and traditional layout reflect centuries of Newari urban planning and social organization.</li>
                    <li><strong>Local Life:</strong> Wander through the village to see daily life—women winnowing grain, children playing in the streets, and elders gathered in public squares. The pace of life here is unhurried and authentic.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Khokana Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm">
                <Droplet className="w-4 h-4" aria-hidden="true" /> Khokana - The Mustard Oil Village
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Mustard Oil Production:</strong> Khokana is famous throughout Nepal for its traditional mustard oil. The village has dozens of oil presses (called 'kol') powered by water buffalo. You can see the entire process—from pressing the seeds to bottling the golden oil—using methods unchanged for centuries.</li>
                    <li><strong>Medieval Layout:</strong> Khokana's street layout is a masterpiece of medieval planning. The main street runs north-south with a drainage channel, and the village is organized according to traditional Newari social structure. It was the first village in Nepal to have electricity (in 1960), yet it has preserved its traditional character remarkably well.</li>
                    <li><strong>Shephardess Temple:</strong> The village's main temple is dedicated to the goddess Shephardess, reflecting Khokana's agricultural heritage. The temple architecture is simple but elegant.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Agricultural Lifestyle:</strong> Surrounding Khokana are fertile fields where villagers grow mustard, rice, and vegetables. Depending on the season, you may see harvesting, threshing, or planting activities.</li>
                    <li><strong>Traditional Houses:</strong> Khokana's houses are classic examples of Newari residential architecture, with brick ground floors and wooden upper stories. Many have carved windows and doors, though less ornate than in the royal cities.</li>
                    <li><strong>UNESCO Recognition:</strong> Khokana has been nominated as a UNESCO World Heritage Site candidate due to its outstanding preservation of medieval Newari village life and traditional technology.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patan Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Palette className="w-4 h-4" aria-hidden="true" /> Patan - City of Fine Arts
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Patan Durbar Square:</strong> This UNESCO World Heritage Site is a stunning collection of temples, statues, and palaces. Highlights include the Krishna Temple (built entirely of stone), the Hiranya Varna Mahavihar (Golden Temple), and the ancient royal palace.</li>
                    <li><strong>Patan Museum:</strong> Housed in the former royal palace, this is widely considered the best museum in Nepal. Its collection of bronze statues, religious art, and historical artifacts is world-class and beautifully displayed.</li>
                    <li><strong>Krishna Temple:</strong> Built in the 17th century, this stone temple features 21 shrines and exquisite carvings depicting scenes from the Mahabharata and Ramayana. It is one of Patan's most beloved landmarks.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Golden Temple:</strong> Officially Hiranya Varna Mahavihar, this Buddhist monastery features a gilded facade, beautiful courtyards, and ancient statues. It is one of Patan's most sacred sites.</li>
                    <li><strong>Artisan Quarters:</strong> Patan's backstreets are filled with workshops where metalworkers, woodcarvers, and Thanka painters continue their ancient crafts. You can observe artisans at work and purchase authentic pieces.</li>
                    <li><strong>Mahabouddha Temple:</strong> Also known as the "Temple of a Thousand Buddhas," this terra-cotta temple is adorned with thousands of Buddha images.</li>
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

        {/* Newari Culture Glossary - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
              <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                <Scroll className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> Newari Culture Glossary
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Newar</div>
                  <div className="text-[10px] text-[#66706d]">Indigenous people of Kathmandu Valley</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Machhindranath</div>
                  <div className="text-[10px] text-[#66706d]">Rain god, patron deity of Patan</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Kol</div>
                  <div className="text-[10px] text-[#66706d]">Traditional oil press</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Bahal</div>
                  <div className="text-[10px] text-[#66706d]">Buddhist monastery courtyard</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Puja</div>
                  <div className="text-[10px] text-[#66706d]">Worship ritual</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Chaitya</div>
                  <div className="text-[10px] text-[#66706d]">Small Buddhist shrine</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Lohan</div>
                  <div className="text-[10px] text-[#66706d]">Carved stone water spout</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Patan</div>
                  <div className="text-[10px] text-[#66706d]">Lalitpur, City of Fine Arts</div>
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
              A visual journey through traditional Newari villages and the artistic heritage of Patan.
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
                  q: "What makes Bungamati and Khokana special compared to other villages?",
                  a: "These villages are remarkable for their exceptional preservation of traditional Newari culture, architecture, and crafts. Bungamati is Nepal's premier woodcarving center and the birthplace of the rain god Rato Machhindranath. Khokana has preserved its medieval street layout and traditional mustard oil industry, with working oil presses using methods unchanged for centuries. Together they offer an authentic glimpse into pre-modern Newari life that's increasingly rare to find.",
                },
                {
                  q: "Can I buy mustard oil in Khokana?",
                  a: "Yes! Khokana's mustard oil is famous throughout Nepal for its purity and flavor. You can purchase bottles directly from the oil presses or local shops. The oil makes an excellent and authentic souvenir. Prices are very reasonable, and you'll be supporting the local economy directly.",
                },
                {
                  q: "Are there opportunities to buy woodcarvings in Bungamati?",
                  a: "Absolutely. Bungamati is renowned for its woodcarving tradition, and you can visit workshops where artisans create everything from small decorative pieces to elaborate temple struts. Purchasing directly from the artisans ensures authenticity and fair prices. Your guide can help with communication and fair negotiation.",
                },
                {
                  q: "How much walking is involved in the villages?",
                  a: "You'll walk approximately 1-1.5 hours in each village on uneven brick-paved streets. The terrain is generally flat but requires comfortable walking shoes. The pace is leisurely with plenty of stops for photos and explanations. If you have mobility concerns, please inform us when booking.",
                },
                {
                  q: "Is this tour suitable for children?",
                  a: "Yes, this tour is very family-friendly. Children love seeing the animals, the oil presses, and the narrow village streets. The pace is relaxed, and there are opportunities for breaks. The traditional Newari lunch is also usually popular with children. Please let us know if you have specific needs for children.",
                },
                {
                  q: "What is the best time of year to see mustard oil production?",
                  a: "Mustard oil production happens year-round, but winter (December-February) is when you're most likely to see the presses in full operation. The mustard harvest occurs in late autumn, so production is especially active during winter months. However, there's almost always some production happening regardless of season.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore Authentic Newari Villages?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Bungamati, Khokana & Patan Sightseeing Tour today and experience the authentic heart of Newari culture.
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