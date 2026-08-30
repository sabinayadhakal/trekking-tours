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
  Sparkles,
  TrendingUp,
  Tent,
  Utensils,
  Heart,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sunrise,
  Snowflake,
  Map,
  Backpack,
  Gauge,
  Trophy,
  Plane,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu & Flight Briefing",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive flight briefing where we'll discuss tomorrow's Everest mountain flight, weather considerations, photography tips, peak identification, and handle any arrangements. Evening free to explore the vibrant streets of Thamel, with its bustling shops, restaurants, and cafes. In the evening, enjoy a welcome dinner with traditional Nepali cuisine where you'll meet your guide and fellow travelers, preparing for the adventure of a lifetime.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: [
      "Airport pickup and private transfer",
      "Hotel check-in in Thamel",
      "Mountain flight briefing and preparation",
      "Thamel exploration",
      "Welcome dinner with Nepali cuisine"
    ]
  },
  {
    day: 2,
    title: "Everest Mountain Flight - The Experience of a Lifetime",
    altitude: "1,350m → 8,000m+ (flight altitude)",
    distance: "1 hour flight",
    description: "This is the day you've been waiting for! Early morning transfer to Tribhuvan International Airport's domestic terminal for your Everest Mountain Flight. The flight typically departs at sunrise (around 6:30-7:00 AM) for optimal lighting and weather conditions. Board your aircraft and prepare for an unforgettable hour-long journey into the heart of the Himalayas. As the plane ascends, you'll be greeted by an ever-expanding panorama of snow-capped peaks. The flight path takes you east over the beautiful Nepalese countryside, with aerial views of terraced hillsides and traditional villages. Your first major Himalayan views include the Gaurishankar range, followed by the mighty Everest massif. The aircraft flies at approximately 8,000-9,000 meters, bringing you incredibly close to some of the world's highest mountains. Every passenger gets a window seat for unobstructed photography. Your pilot and guide will identify each peak as you fly past, including Mount Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), Makalu (8,485m), Cho Oyu (8,188m), and many others. The flight turns at Kala Patthar, the famous Everest viewpoint, offering the closest possible aerial views of the world's highest peak. After this once-in-a-lifetime experience, you'll be back in Kathmandu by mid-morning, with the rest of the day free to process your incredible experience, share photos, and reflect on soaring among the giants of the Himalayas. Transfer to your hotel. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant celebrating your Everest mountain flight achievement.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: [
      "Mount Everest (8,848m) aerial view",
      "Lhotse, Nuptse, Makalu, Cho Oyu close-up views",
      "Guaranteed window seat for every passenger",
      "Peak identification by expert guide",
      "Sunrise departure for optimal photography",
      "Farewell dinner with cultural performance"
    ]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "1 night hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the tour as specified (breakfast, dinner)",
  "Experienced English-speaking guide",
  "Everest Mountain Flight (1 hour flight with guaranteed window seat)",
  "Peak identification card and flight map",
  "All ground transportation as per itinerary in private vehicle",
  "First aid medical kit",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Everest flight certificate of completion",
  "Souvenir photographs",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover flight cancellation and medical emergencies)",
  "Lunch on Day 2 (not specified in itinerary)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, pilots, and support staff (recommended)",
  "Emergency evacuation/rescue costs",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges on domestic flight",
];

const gallery = [
  {
    src: "/images/used/everest-flight-2.webp",
    alt: "Mount Everest",
    caption: "Mount Everest (8,848m) - The world's highest peak viewed from mountain flight",
  },
  {
    src: "/images/used/everest-flight-1.webp",
    alt: "Window View",
    caption: "Unobstructed window view of Himalayan peaks during flight",
  },
];

export default function EverestRegionMountainFlightTripPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2]);

  const tourName = "Everest Region Mountain Flight Trip";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Everest Region Mountain Flight Trip - Himkala Adventure")}`;
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
                  <span>Mountain Flight</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Everest Region <br />
                  <span className="text-[#cf6943]">Mountain Flight Trip</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Soar among the giants of the Himalayas on an unforgettable 1-hour mountain flight—witness Mount Everest, 
                  Lhotse, Makalu, and Cho Oyu from breathtaking proximity, with guaranteed window seats for every passenger.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    <Plane className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    View 8,000m Peaks
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    1 Hour Flight
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    2 Days
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
              src="/images/used/everest-flight-1.webp"
              alt="Everest Region Mountain Flight - aerial view of Mount Everest and Himalayan peaks from aircraft window"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best Season: Oct-May
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $300 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "2 Days / 1 Night" },
              { label: "Group Size", value: "1-15 people" },
              { label: "Flight Altitude", value: "8,000-9,000m" },
              { label: "Flight Time", value: "1 Hour" },
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
                The <strong className="text-[#14383b]">Everest Region Mountain Flight Trip</strong> offers a 
                once-in-a-lifetime opportunity to experience the world's highest mountains from the air. This 
                2-day journey combines the thrill of a dedicated mountain flight over the Everest region with 
                the cultural attractions of Kathmandu, creating a perfect short itinerary for those who want 
                to witness Mount Everest and its neighboring giants without extensive trekking.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The centerpiece of this trip is a <strong className="text-[#14383b]">1-hour mountain flight 
                from Kathmandu</strong> that takes you into the heart of the Everest region. Flying at 
                approximately 8,000-9,000 meters, you'll come face-to-face with some of the world's highest 
                peaks, including <strong className="text-[#14383b]">Mount Everest (8,848m), Lhotse (8,516m), 
                Makalu (8,485m), Cho Oyu (8,188m), Nuptse (7,861m), and the stunning Ama Dablam (6,812m)</strong>. 
                Every passenger is guaranteed a window seat, ensuring unobstructed photography opportunities 
                throughout the flight. The flight turns at Kala Patthar, the famous Everest viewpoint, offering 
                the closest possible aerial views of the world's highest peak.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                With experienced guides, comfortable accommodations, and seamless logistics, this mountain 
                flight trip offers the perfect introduction to Nepal's Himalayan wonders. No previous experience 
                is required—just bring your camera and your sense of wonder.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Flights operate only in clear visibility. If weather prevents the 
              flight, you will be offered a full refund or rescheduling. Early morning flights offer the 
              clearest skies and best lighting for photography.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trip Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "1-hour dedicated mountain flight over the Everest region",
                "Aerial views of Mount Everest (8,848m) - the world's highest peak",
                "Close-up views of Lhotse (8,516m), Makalu (8,485m), and Cho Oyu (8,188m)",
                "Stunning views of Nuptse, Ama Dablam, and the entire Khumbu region",
                "Guaranteed window seat for every passenger with unobstructed photography",
                "Experienced pilot and guide providing peak identification throughout flight",
                "Sunrise departure for optimal lighting and weather conditions",
                "Flight turns at Kala Patthar for the best possible Everest views",
                "Perfect for photographers, families, and those with limited time",
                "No trekking required—suitable for all ages and fitness levels",
                "No altitude concerns—remains at comfortable cruising altitude",
                "Flight certificate and peak identification card as souvenirs",
                "Farewell dinner with traditional Nepali cultural performance",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Mountain Flight</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Excellent visibility, warming temperatures, and clear skies. Ideal for photography with optimal lighting conditions.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, stable weather, and perfect mountain views. Post-monsoon clarity is exceptional.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air and excellent visibility. Cold but clear mornings with snow-covered peaks.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings clouds and rain, significantly reducing visibility. Flights are often cancelled during this period.</p>
          </div>
        </section>

        {/* Comparison with Helicopter Tour - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Plane className="w-4 h-4" aria-hidden="true" /> Mountain Flight vs. Helicopter Tour
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-2">
                This fixed-wing mountain flight offers a different experience from helicopter tours:
              </p>
              <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc pl-4">
                <li><strong>No landing:</strong> Remains at cruising altitude throughout (no high-altitude exposure)</li>
                <li><strong>Pressurized cabin:</strong> Comfortable for all passengers regardless of health</li>
                <li><strong>Lower cost:</strong> More affordable than helicopter options</li>
                <li><strong>Larger groups:</strong> Share the experience with up to 15 passengers</li>
                <li><strong>Guaranteed window seat:</strong> Every passenger has unobstructed views</li>
                <li><strong>Longer flight time:</strong> 1 hour vs. shorter helicopter routes</li>
              </ul>
              <p className="text-blue-700 text-sm leading-relaxed mt-2">
                If you prefer to land at Kala Patthar and step onto snow at 5,545m, please see our <Link href="/services/mountain-flight-heli-trip/everest-region-helicopter-trip" className="font-bold underline">Everest Region Helicopter Trip</Link>.
              </p>
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
                            <Tent className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
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
              A visual journey from the window of a mountain flight over the Everest region.
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
                  q: "How close do we get to Mount Everest?",
                  a: "The mountain flight takes you within approximately 20-30 kilometers of Mount Everest, offering spectacular close-up views. The aircraft flies at about 8,000-9,000 meters, with Everest towering at 8,848 meters, so you're seeing the peak from a similar altitude.",
                },
                {
                  q: "Is the flight safe?",
                  a: "Yes, mountain flights in Nepal are operated by experienced pilots with extensive Himalayan flying experience. All aircraft are modern, well-maintained, and meet international safety standards.",
                },
                {
                  q: "What happens if the flight is cancelled due to weather?",
                  a: "If your flight is cancelled due to weather, we will offer you a full refund for the mountain flight portion or the opportunity to reschedule for the next day if your schedule permits.",
                },
                {
                  q: "Which peaks will I see during the flight?",
                  a: "You'll see Mount Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), Makalu (8,485m), Cho Oyu (8,188m), Ama Dablam (6,812m), and many other stunning peaks.",
                },
                {
                  q: "Is the flight suitable for children and elderly?",
                  a: "Yes! The mountain flight is smooth and suitable for all ages. There are no altitude concerns as the cabin is pressurized. Infants under 2 years typically fly for free (lap child).",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Soar Among the Giants?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Everest Region Mountain Flight Trip today and experience the world's highest peaks from the best seat in the house.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Flight
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