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
  Bird,
  TreePine,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Bouddhanath & Kapan Sightseeing Tour",
    altitude: "1,350m → 1,400m → 1,350m",
    distance: "Half day tour (4-5 hours)",
    description: "Your half-day spiritual and cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Bouddhanath Stupa (approximately 20 minutes), one of the largest spherical stupas in South Asia and a UNESCO World Heritage Site. Spend approximately 2 hours exploring this magnificent Buddhist shrine, the center of Tibetan Buddhism in Nepal. After Bouddhanath, you'll drive to the peaceful Kapan Monastery (approximately 15 minutes), a serene Buddhist monastery perched on a hilltop overlooking the Kathmandu Valley. Spend another 1.5-2 hours exploring the monastery, interacting with monks, and enjoying panoramic valley views. In the early afternoon, your guide will drive you back to Kathmandu, arriving at your hotel by approximately 1:30 PM.",
    overnight: "Not applicable - half day tour",
    meals: "Breakfast",
    highlights: ["Bouddhanath Stupa exploration", "Kapan Monastery visit", "Monk interaction", "Expert guide commentary"],
  },
];

const includes = [
  "Private vehicle with driver for the half day",
  "Experienced English-speaking tour guide (Buddhist culture expert)",
  "Bouddhanath Stupa entrance fee",
  "Kapan Monastery donation",
  "Bottled water during the tour",
  "All government taxes and service charges",
  "Hotel pickup and drop-off (within Kathmandu valley)",
];

const excludes = [
  "Meals (lunch not included)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guide and driver (recommended)",
  "Travel insurance",
  "Photography fees at certain locations (where applicable)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "/images/used/nepal-heritage-sites-tour-nepal.webp",
    alt: "Bouddhanath Stupa",
    caption: "Bouddhanath Stupa - One of the largest stupas in South Asia",
  },
  {
    src: "/images/used/kapan-1.webp",
    alt: "Kapan Monastery",
    caption: "Kapan Monastery perched on a hilltop overlooking Kathmandu Valley",
  },
  {
    src: "/images/used/kapan-2.webp",
    alt: "Buddha Statue inside Kapan Monastery",
    caption: "Big Buddha Statue inside the main Monastery",
  },
];

export default function BouddhanathKapanSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Bouddhanath & Kapan Sightseeing Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Bouddhanath & Kapan Sightseeing Tour - Himkala Adventure")}`;
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
                  Bouddhanath & Kapan <br />
                  <span className="text-[#cf6943]">Sightseeing Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Experience the spiritual heart of Tibetan Buddhism in Nepal—explore the magnificent Bouddhanath Stupa 
                  and find peace at the serene Kapan Monastery, with opportunities to interact with monks.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Scroll className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Spiritual Journey
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Half Day
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
              src="/images/used/nepal-stupa.webp"
              alt="Bouddhanath Stupa - iconic Buddhist stupa in Kathmandu, Nepal with Tibetan prayer flags and monasteries"
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
              { label: "Duration", value: "4-5 Hours" },
              { label: "Group Size", value: "1-12 people" },
              { label: "UNESCO Site", value: "Bouddhanath" },
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
                The <strong className="text-[#14383b]">Bouddhanath & Kapan Sightseeing Tour</strong> is a half-day 
                spiritual journey to two of the Kathmandu Valley's most significant Buddhist sites. This tour offers 
                a perfect introduction to Tibetan Buddhism in Nepal, combining the grandeur of one of the world's 
                largest stupas with the peaceful serenity of a working monastery.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Bouddhanath Stupa</strong> is one of the largest spherical stupas 
                in South Asia and a UNESCO World Heritage Site. Standing at 36 meters tall, it has been a center of 
                Tibetan Buddhism in Nepal for centuries and is a focal point for Tibetan refugees who have settled 
                in the area. The stupa's massive mandala, all-seeing eyes of Buddha, and fluttering prayer flags 
                create an atmosphere of profound spirituality. Surrounding the stupa are dozens of monasteries, 
                shops selling Tibetan crafts, and restaurants serving traditional Tibetan cuisine.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Kapan Monastery</strong> (officially known as Thrangu Tashi 
                Yangtse Monastery) is a serene Buddhist monastery perched on a hilltop just north of Bouddhanath. 
                Established in 1975 by the Ven. Thrangu Rinpoche, it serves as a monastic college for over 300 
                monks and nuns. The monastery offers breathtaking panoramic views of the Kathmandu Valley and the 
                Himalayan foothills on clear days. Unlike the bustling stupa, Kapan provides a peaceful retreat 
                where you can observe monks in meditation, attend prayer sessions, and learn about Buddhist philosophy.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                With an expert guide to explain Buddhist symbolism, monastic life, and the history of these sacred 
                sites, this tour provides a rich cultural and spiritual experience. Perfect for those seeking peace, 
                cultural understanding, or simply a beautiful introduction to Tibetan Buddhism in Nepal.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Modest dress is required at both sites. Shoulders and knees should be covered. 
              Remove shoes before entering monastery buildings. Always circumambulate Bouddhanath clockwise.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Explore Bouddhanath Stupa, one of the largest stupas in South Asia (UNESCO World Heritage Site)",
                "Circumambulate the massive mandala while spinning prayer wheels",
                "Observe Tibetan monks and pilgrims engaged in daily rituals",
                "Visit the surrounding monasteries and learn about Tibetan Buddhism",
                "Drive to peaceful Kapan Monastery perched on a hilltop",
                "Enjoy panoramic views of the Kathmandu Valley",
                "Interact with resident monks and learn about monastic life",
                "Observe or join meditation sessions (depending on schedule)",
                "Photograph stunning architecture and spiritual moments",
                "Learn about Buddhist symbolism, prayer flags, and the all-seeing eyes",
                "Peaceful atmosphere away from the city crowds",
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
                  Pleasant temperatures and clear mornings. Ideal for photography with soft morning light. The monasteries are vibrant with spring colors.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and important Buddhist festivals including Mani Rimdu. The stupa is beautifully decorated.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Cool, clear days with excellent visibility. Fewer tourists at both sites. Morning fog may delay start but usually clears by mid-morning.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: The tour operates year-round. Monsoon (Jun-Aug) brings occasional rain, but both sites are still accessible with umbrella/raincoat.</p>
          </div>
        </section>

        {/* Bouddhanath Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Bouddhanath Stupa - The Heart of Tibetan Buddhism
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> Believed to have been built in the 5th century, Bouddhanath is one of the oldest and largest stupas in the world. It stands at the ancient trade route to Tibet, and Tibetan merchants have offered prayers here for centuries.</li>
                    <li><strong>Architecture:</strong> The stupa's massive mandala represents the Buddhist cosmos. The white dome symbolizes the entire world, while the 13 rings above represent the stages to enlightenment. The all-seeing eyes of Buddha gaze in all four directions, symbolizing his omniscience.</li>
                    <li><strong>Prayer Wheels:</strong> Surrounding the base are 108 small prayer wheels (a sacred number in Buddhism). Spinning them while circumambulating clockwise is believed to send prayers to the universe and bring good karma.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Tibetan Community:</strong> After the Chinese invasion of Tibet in 1959, many Tibetan refugees settled around Bouddhanath. Today, the area is the center of Tibetan culture in Nepal, with dozens of monasteries, thankas, and craft shops.</li>
                    <li><strong>Surrounding Monasteries:</strong> Bouddhanath is surrounded by over 50 monasteries representing different schools of Tibetan Buddhism. Many welcome visitors and offer insights into Buddhist philosophy and practice.</li>
                    <li><strong>Losar Festival:</strong> During Tibetan New Year (February/March), the stupa is beautifully decorated, and thousands of pilgrims gather for celebrations, making it an especially vibrant time to visit.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kapan Monastery Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Church className="w-4 h-4" aria-hidden="true" /> Kapan Monastery - A Peaceful Retreat
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> Officially known as Thrangu Tashi Yangtse Monastery, Kapan was established in 1975 by the Ven. Thrangu Rinpoche, a highly respected teacher of the Kagyu school of Tibetan Buddhism. It serves as a monastic college for over 300 monks and nuns.</li>
                    <li><strong>Monastic Life:</strong> Visitors can observe monks engaged in daily activities including prayer sessions, debates, and studies. The monastery follows a strict schedule of rituals and teachings that have been preserved for centuries.</li>
                    <li><strong>Meditation:</strong> Kapan offers opportunities for meditation, either observing the monks or joining guided sessions (depending on schedule). The peaceful atmosphere is conducive to mindfulness and reflection.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Panoramic Views:</strong> Perched on a hilltop at approximately 1,400m, Kapan offers breathtaking views of the Kathmandu Valley and, on clear days, the Himalayan foothills including Ganesh Himal and Langtang range.</li>
                    <li><strong>Stupa and Gardens:</strong> The monastery grounds include a beautiful stupa, prayer flag-adorned paths, and peaceful gardens perfect for quiet contemplation. Colorful flowers and trees create a serene environment.</li>
                    <li><strong>Monk Interaction:</strong> Unlike larger monasteries, Kapan welcomes visitors to interact with monks, who are often happy to practice their English and share insights about their way of life. This personal connection is a highlight for many visitors.</li>
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
                        <span className="text-[8px] font-bold text-[#cf6943] uppercase">Half</span>
                        <span className="text-base sm:text-lg font-bold text-[#14383b] leading-none">Day</span>
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

        {/* Tibetan Buddhism Glossary - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
              <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                <Scroll className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> Tibetan Buddhism Glossary
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Stupa</div>
                  <div className="text-[10px] text-[#66706d]">Buddhist reliquary mound</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Mani</div>
                  <div className="text-[10px] text-[#66706d]">Prayer wheel / mantra</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Gompa</div>
                  <div className="text-[10px] text-[#66706d]">Buddhist monastery</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Khata</div>
                  <div className="text-[10px] text-[#66706d]">Ceremonial scarf</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Rinpoche</div>
                  <div className="text-[10px] text-[#66706d]">Precious teacher</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Mantra</div>
                  <div className="text-[10px] text-[#66706d]">Sacred utterance</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Mandala</div>
                  <div className="text-[10px] text-[#66706d]">Cosmic diagram</div>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <div className="font-bold text-xs text-[#14383b]">Bodhisattva</div>
                  <div className="text-[10px] text-[#66706d]">Enlightened being</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Includes / Excludes - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="includes">
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
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="gallery">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey through the spiritual heart of Tibetan Buddhism in Nepal.
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
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  q: "What is the significance of the all-seeing eyes on the stupa?",
                  a: "The eyes on Buddhist stupas represent the all-seeing wisdom of Buddha. The nose is shaped like the Nepali number 'one' (ek), symbolizing unity. The third eye represents inner vision. They remind us that Buddha sees all actions and thoughts with wisdom and compassion. The eyes face all four directions, symbolizing Buddha's universal awareness.",
                },
                {
                  q: "Can I participate in meditation at Kapan Monastery?",
                  a: "Yes, depending on the schedule. Kapan welcomes visitors to observe meditation sessions, and sometimes guided meditation is available for visitors. Your guide can help arrange participation if desired. The monastery also offers longer meditation courses for those interested in a deeper experience (advance booking required).",
                },
                {
                  q: "Is it appropriate to take photos of monks?",
                  a: "Generally yes, but always ask permission first with a smile and respectful gesture. Most monks are happy to be photographed, especially if you show genuine interest in their way of life. A small donation is appreciated for portrait photos. During prayer sessions, photography should be discreet without flash.",
                },
                {
                  q: "How much time should I spend at each site?",
                  a: "We recommend approximately 1.5-2 hours at Bouddhanath to properly circumambulate the stupa, visit surrounding monasteries, and absorb the atmosphere. At Kapan, 1-1.5 hours allows time to explore the monastery grounds, enjoy the views, and potentially interact with monks. Our tour is paced comfortably to allow unhurried exploration.",
                },
                {
                  q: "What is the best time of day to visit?",
                  a: "Morning (9-11 AM) is ideal for several reasons: the light is beautiful for photography, the stupa is less crowded than afternoon, and monks are engaged in morning prayers and activities at Kapan. Our tour is scheduled during this optimal window.",
                },
                {
                  q: "Can I combine this with other sights?",
                  a: "Absolutely! This half-day tour can easily be combined with other nearby attractions. Popular combinations include adding Pashupatinath Temple (morning) before Bouddhanath, or visiting Swayambhunath in the afternoon. Please inquire when booking for a customized itinerary.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for a Spiritual Journey?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Bouddhanath & Kapan Sightseeing Tour today and discover the peace and spirituality of Tibetan Buddhism in Nepal.
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