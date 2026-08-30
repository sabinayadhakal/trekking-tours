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
  Building2,
  Crown,
  Scroll,
  Sparkles,
  Coffee,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Bhaktapur & Patan Sightseeing Tour",
    altitude: "1,350m → 1,401m → 1,350m",
    distance: "Full day tour (8-9 hours)",
    description: "Your full-day heritage tour begins after breakfast at 8:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Bhaktapur (approximately 45 minutes), the best-preserved medieval city in Nepal and a UNESCO World Heritage Site. Known as the 'City of Devotees' and the 'City of Culture,' Bhaktapur transports you back to the 15th century with its stunning architecture and living traditions. Spend approximately 3-4 hours exploring this magnificent city. After lunch at a traditional Newari restaurant in Bhaktapur, you'll drive to Patan (Lalitpur), the 'City of Fine Arts' across the Bagmati River (approximately 30 minutes). Spend another 3-4 hours exploring Patan's exquisite temples, palace, and artisan quarters. In the late afternoon, your guide will drive you back to Kathmandu, arriving at your hotel by approximately 6:00 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Traditional Newari lunch", "Expert guide commentary"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (government licensed, heritage expert)",
  "Bhaktapur Durbar Square entrance fee",
  "Patan Durbar Square entrance fee",
  "Patan Museum entrance fee",
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
    src: "/images/used/bhaktapur-2.webp",
    alt: "Bhaktapur Durbar Square",
    caption: "Bhaktapur Durbar Square with Nyatapola Temple",
  },
  {
    src: "/images/used/patan-1.webp",
    alt: "Patan Durbar Square",
    caption: "Patan Durbar Square - City of Fine Arts",
  },
  {
    src: "/images/used/bhaktapur-4.webp",
    alt: "Pottery Square Bhaktapur",
    caption: "Traditional potters at work in Bhaktapur's Pottery Square",
  },
  {
    src: "/images/used/patan-2.webp",
    alt: "Krishna Temple Patan",
    caption: "Krishna Temple built entirely of stone in Patan",
  },
  {
    src: "/images/used/bhaktapur-3.webp",
    alt: "Palace of 55 Windows",
    caption: "Palace of 55 Windows in Bhaktapur Durbar Square",
  },
];

export default function BhaktapurPatanSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Bhaktapur & Patan Sightseeing Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Bhaktapur & Patan Sightseeing Tour - Himkala Adventure")}`;
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
                  Bhaktapur & Patan <br />
                  <span className="text-[#cf6943]">Sightseeing Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Discover two of Nepal's ancient royal cities in one day—explore the medieval grandeur of Bhaktapur 
                  and the artistic treasures of Patan with an expert guide.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Landmark className="w-3 h-3 inline mr-1" aria-hidden="true" />
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
              src="/images/used/bhaktapur-patan-nepal.webp"
              alt="Bhaktapur and Patan sightseeing tour in Nepal - UNESCO World Heritage cities with ancient temples and Newari architecture"
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
              { label: "Duration", value: "8-9 Hours" },
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
                The <strong className="text-[#14383b]">Bhaktapur & Patan Sightseeing Tour</strong> is a full-day 
                journey through two of the Kathmandu Valley's most magnificent ancient royal cities. Both cities 
                are UNESCO World Heritage Sites, renowned for their exquisite Newari architecture, rich cultural 
                traditions, and artistic heritage. This tour offers a perfect introduction to Nepal's medieval 
                history and living traditions.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Bhaktapur</strong>, also known as the "City of Devotees" or 
                the "City of Culture," is the best-preserved medieval city in Nepal. Founded in the 12th century, 
                it served as the capital of the Malla kingdom and remains a living museum of Newari culture. Its 
                cobblestone streets, red brick buildings, and intricately carved wooden windows transport visitors 
                back in time. The city's Durbar Square is home to architectural masterpieces including the famous 
                Nyatapola Temple (Nepal's tallest pagoda), the Palace of 55 Windows, and the Golden Gate—considered 
                one of the most beautiful works of art in the world.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Patan</strong> (officially Lalitpur), the "City of Fine Arts," 
                is renowned for its exceptional craftsmanship. For centuries, Patan's artisans have produced the 
                finest metalwork, woodcarving, and stone sculpture in Nepal. Patan Durbar Square is a stunning 
                collection of temples, statues, and palaces showcasing the pinnacle of Newari architecture. The 
                Patan Museum, housed in the ancient royal palace, is widely considered the best museum in Nepal, 
                displaying magnificent bronze statues and religious artifacts.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                With an expert guide to bring these ancient stones to life, comfortable private transportation, 
                and a delicious traditional Newari lunch included, this tour provides a comprehensive and enriching 
                experience of Nepal's cultural heritage. Perfect for culture enthusiasts, history buffs, photographers, 
                and anyone seeking to understand the soul of the Kathmandu Valley.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Comfortable walking shoes are essential as you'll be walking on uneven 
              stone streets. Modest dress is appreciated at temples (shoulders and knees covered).
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Explore Bhaktapur Durbar Square, the best-preserved medieval city in Nepal",
                "Marvel at Nyatapola Temple, Nepal's tallest pagoda at five stories",
                "Photograph the Palace of 55 Windows and the exquisite Golden Gate",
                "Watch traditional potters at work in Bhaktapur's famous Pottery Square",
                "Discover Patan Durbar Square, the 'City of Fine Arts'",
                "Visit the Patan Museum, the finest museum in Nepal",
                "See the stone-carved Krishna Temple and the Hiranya Varna Mahavihar (Golden Temple)",
                "Observe local artisans creating traditional metal statues and Thanka paintings",
                "Stroll through narrow cobblestone streets lined with ancient temples",
                "Enjoy a traditional Newari lunch at a local restaurant",
                "Learn about Newari culture, architecture, and living traditions from an expert guide",
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
                  Pleasant temperatures and clear mornings. Ideal for photography with soft morning light. The cities are vibrant with spring colors.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and vibrant festivals including Dashain and Tihar. The cities are beautifully decorated.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Cool, clear days with fewer crowds. Excellent for photography with crisp light. Morning fog may delay start but usually clears.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain, but heritage sites are still accessible with umbrella/raincoat.</p>
          </div>
        </section>

        {/* Bhaktapur Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Exploring Bhaktapur Durbar Square
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Nyatapola Temple:</strong> Nepal's tallest pagoda (5 stories), dedicated to the goddess Siddhi Lakshmi. Built in 1702, it's renowned for its massive structure and artistic excellence.</li>
                    <li><strong>Palace of 55 Windows:</strong> Built by King Jitamitra Malla in the 17th century, this magnificent palace features 55 intricately carved wooden windows, a masterpiece of Newari craftsmanship.</li>
                    <li><strong>Golden Gate:</strong> Considered one of the most beautiful works of art in the world, this gilded entrance to the palace is adorned with Hindu deities and exquisite metalwork.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Pottery Square:</strong> A living workshop where traditional potters shape clay using centuries-old techniques. Watch them create pots, fire them in open kilns, and display their wares.</li>
                    <li><strong>Bhairavnath Temple:</strong> A three-story pagoda dedicated to the terrifying aspect of Shiva, featuring beautiful woodcarvings and metalwork.</li>
                    <li><strong>Dattatreya Temple:</strong> Said to be built from a single tree trunk, this ancient temple is dedicated to the trinity of Brahma, Vishnu, and Shiva.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patan Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Palette className="w-4 h-4" aria-hidden="true" /> Exploring Patan Durbar Square
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Patan Museum:</strong> Housed in the former royal palace, this is widely considered the best museum in Nepal. Its collection of bronze statues, religious art, and historical artifacts is world-class.</li>
                    <li><strong>Krishna Temple:</strong> Built entirely of stone in the 17th century, this temple features 21 shrines and exquisite stone carvings depicting scenes from the Mahabharata and Ramayana.</li>
                    <li><strong>Hiranya Varna Mahavihar:</strong> The famous Golden Temple, a Buddhist monastery with gilded facade, beautiful courtyards, and ancient statues.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Mahabouddha Temple:</strong> Also known as the "Temple of a Thousand Buddhas," this terra-cotta temple is adorned with thousands of Buddha images.</li>
                    <li><strong>Kumbheshwar Temple:</strong> One of the few five-story pagodas in Nepal, dedicated to Lord Shiva, with a sacred pond believed to be fed from the Gosaikunda lake.</li>
                    <li><strong>Artisan Quarters:</strong> Patan's backstreets are filled with workshops where metalworkers, woodcarvers, and Thanka painters continue their ancient crafts.</li>
                  </ul>
                </div>
              </div>
            </div>
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
              A visual journey through Nepal's ancient royal cities - Bhaktapur and Patan.
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
                  q: "Is this a private or group tour?",
                  a: "This is a private tour exclusively for you and your party. You'll have your own private vehicle, driver, and expert guide, ensuring personalized attention and flexibility. You can set the pace and spend more time at sites that interest you most.",
                },
                {
                  q: "What time does the tour start and end?",
                  a: "The tour typically starts at 8:30 AM with pickup from your hotel in Kathmandu. You'll return to your hotel around 6:00 PM. The exact timing can be adjusted based on your preferences—just let us know when booking.",
                },
                {
                  q: "Is lunch included, and what kind of food can I expect?",
                  a: "Yes, a traditional Newari lunch is included at a local restaurant in Bhaktapur. You'll experience authentic Nepali cuisine including dishes like dal bhat, momo dumplings, and local specialties. Vegetarian options are available. Please inform us of any dietary requirements when booking.",
                },
                {
                  q: "Can I customize this tour?",
                  a: "Absolutely! This tour can be customized to your interests. You might want to spend more time in one city, add additional sites like Changunarayan Temple, or adjust the pace. Just let us know your preferences when booking.",
                },
                {
                  q: "What is the difference between Bhaktapur and Patan?",
                  a: "Bhaktapur is the best-preserved medieval city with a focus on traditional architecture and living culture. Patan is renowned for its artistic heritage, with the finest metalwork, stone carving, and the excellent Patan Museum. Together they offer a complete picture of Newari civilization.",
                },
                {
                  q: "How much walking is involved?",
                  a: "You'll walk approximately 3-4 hours total throughout the day, with breaks and vehicle transfers between sites. The terrain is uneven with stone-paved streets and some stairs. Comfortable walking shoes are essential. If you have mobility concerns, please inform us in advance.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore Nepal's Ancient Royal Cities?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Bhaktapur & Patan Sightseeing Tour today and discover the medieval grandeur and artistic treasures of the Kathmandu Valley.
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