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
  Plane,
  Cloud,
  Wind,
  Eye,
  Gauge,
  Coffee,
  Wifi,
  Battery,
  Luggage,
  Helicopter,
  Trophy,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    "day": 1,
    "title": "Arrival in Kathmandu & Tour Briefing",
    "altitude": "1,350m",
    "distance": "-",
    "description": "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Thamel. After check-in and some rest, attend a comprehensive helicopter briefing where we'll discuss tomorrow's Everest flight, weather considerations, high-altitude precautions, photography tips, and handle any arrangements. Take time to explore the vibrant streets of Thamel, with its bustling shops, restaurants, and cafes. In the evening, enjoy a welcome dinner with traditional Nepali cuisine where you'll meet your guide and fellow travelers, preparing for the adventure of a lifetime.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Dinner",
    "highlights": [
      "Airport pickup and private transfer",
      "Hotel check-in in Thamel",
      "Helicopter tour briefing and preparation",
      "Thamel exploration",
      "Welcome dinner with Nepali cuisine"
    ]
  },
  {
    "day": 2,
    "title": "Everest Base Camp Helicopter Tour with Landing at Kala Patthar",
    "altitude": "1,350m → 5,545m (Kala Patthar) → 1,350m",
    "distance": "3-4 hours helicopter flight",
    "description": "This is the day you've been dreaming of! Early morning pickup from your hotel in Kathmandu (around 5:00-5:30 AM) and transfer to Tribhuvan International Airport's domestic terminal for your Everest helicopter adventure. Your helicopter departs at sunrise (approximately 6:00-6:30 AM) to ensure optimal weather conditions and the most spectacular lighting for photography. Fly east over the beautiful Nepalese countryside, with breathtaking aerial views of terraced hillsides, traditional villages, winding rivers, and the gradual approach of the Himalayan giants. Your first major viewpoint is the stunning Langtang range, followed by the majestic Gaurishankar (7,134m), and then the mighty Everest massif appears on the horizon. The helicopter flies through the heart of the Khumbu region, passing over Lukla (the famous Tenzing-Hillary Airport), Namche Bazaar (the Sherpa capital), Tengboche with its famous monastery perched on a hilltop, and following the Dudh Koshi Valley toward Everest. You'll have incredible aerial views of Ama Dablam (6,812m), Lhotse (8,516m), Nuptse (7,861m), and finally Mount Everest (8,848m) - the world's highest peak. The absolute highlight of the tour is a landing at Kala Patthar (5,545m), the famous viewpoint directly opposite Mount Everest. Step out onto the snow-covered landscape for approximately 15-20 minutes of unforgettable, close-up views of Everest's southwest face, the Khumbu Icefall, and the entire Everest massif. Your pilot will ensure you capture stunning photographs with the world's highest peak as your backdrop. After this once-in-a-lifetime experience, enjoy a champagne celebration at the world's highest helicopter landing zone, commemorating your incredible achievement. The return flight offers different perspectives of the mountains you've just witnessed, with the morning sun illuminating the peaks in golden light. You'll be back in Kathmandu by mid-morning (approximately 9:30-10:00 AM), with the rest of the day free to process your incredible experience, share photos, and reflect on standing in the shadow of Mount Everest. Transfer to your hotel. Evening farewell dinner at a traditional Nepali restaurant celebrating your Everest helicopter achievement. This is a bucket-list adventure that will stay with you forever.",
    "overnight": "Hotel in Kathmandu",
    "meals": "Breakfast, Dinner",
    "highlights": [
      "Everest Base Camp flyover and aerial views",
      "Landing at Kala Patthar (5,545m) - world's highest helicopter landing zone",
      "Close-up face-to-face views of Mount Everest (8,848m)",
      "Champagne celebration at 5,545 meters altitude",
      "Aerial views of Namche Bazaar, Tengboche Monastery, and Lukla Airport",
      "Panoramic views of Everest, Lhotse, Nuptse, Ama Dablam, and the Khumbu Icefall",
      "Professional pilot commentary on Himalayan peaks",
      "Sunrise departure for optimal mountain photography lighting",
      "Farewell dinner with cultural performance"
    ]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "2 nights hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the tour as specified (breakfast, dinner)",
  "Experienced English-speaking guide for briefing",
  "Everest Base Camp Helicopter Tour with Kala Patthar landing (3-4 hours)",
  "Champagne celebration at Kala Patthar (5,545m)",
  "All helicopter ground handling and permits",
  "First aid medical kit including pulse oximeter and oxygen for emergency",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Bottled water during tours",
  "Everest flight certificate of completion",
  "Souvenir photographs",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover helicopter evacuation up to 5,500m)",
  "Lunch on Day 2 (not specified in itinerary)",
  "Alcoholic beverages and soft drinks (except champagne on helicopter)",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, pilots, and support staff (recommended)",
  "Emergency evacuation/helicopter rescue costs beyond included coverage",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges",
];

const gallery = [
  {
    src: "/images/used/everest-heli-2.webp",
    alt: "Mount Everest",
    caption: "Mount Everest (8,848m) viewed from helicopter",
  },
  {
    src: "/images/used/everest-heli-1.webp",
    alt: "Everest Massif",
    caption: "The entire Everest massif including Lhotse and Nuptse",
  },
];

export default function EverestRegionHelicopterTripPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2]);

  const tourName = "Everest Region Helicopter Trip";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Everest Region Helicopter Trip - Himkala Adventure")}`;
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
                  <span>Helicopter Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Everest Region <br />
                  <span className="text-[#cf6943]">Helicopter Trip</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Experience the ultimate Himalayan adventure—fly to the foot of Mount Everest, land at Kala Patthar (5,545m), 
                  and stand face-to-face with the world's highest peak, all in a single unforgettable morning.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    <Helicopter className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Kala Patthar Landing
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Mountain className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    5,545m
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
              src="/images/used/everest-heli-1.webp"
              alt="Everest Region Helicopter Trip - aerial view of Mount Everest and surrounding Himalayan peaks in Nepal"
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
                $2,000 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "2 Days / 1 Night" },
              { label: "Group Size", value: "1-5 per helicopter" },
              { label: "Max Altitude", value: "5,545m" },
              { label: "Flight Time", value: "3-4 Hours" },
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
                The <strong className="text-[#14383b]">Everest Region Helicopter Trip</strong> is the ultimate 
                Himalayan experience—a once-in-a-lifetime opportunity to fly into the heart of the Khumbu region 
                and land at the foot of the world's highest mountain. This 2-day adventure combines the thrill of 
                helicopter flight with the awe-inspiring presence of Mount Everest, offering unparalleled access 
                to the world's most famous peak.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The centerpiece of this trip is a <strong className="text-[#14383b]">3-4 hour helicopter tour 
                from Kathmandu</strong> that takes you deep into the Everest region. Unlike fixed-wing mountain 
                flights that remain at a distance, this helicopter adventure includes a 
                <strong className="text-[#14383b]"> landing at Kala Patthar (5,545m)</strong>—the famous viewpoint 
                directly opposite Everest. Here, you'll step out onto the snow and stand face-to-face with the 
                world's highest peak, surrounded by the giants of the Himalayas including Lhotse, Nuptse, and the 
                entire Khumbu icefall. A champagne celebration at this incredible altitude makes the moment even 
                more memorable.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                With experienced pilots, modern helicopters, and careful attention to safety and comfort, this 
                tour makes the dream of seeing Everest up close accessible to everyone. No trekking is required—
                just bring your sense of adventure and your camera. Whether you're celebrating a special occasion, 
                seeking the ultimate photograph, or simply fulfilling a lifelong dream, this helicopter trip 
                delivers an experience you'll treasure forever.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-blue-50 border-l-4 border-blue-400 text-blue-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>High Altitude Alert:</strong> The helicopter lands at Kala Patthar (5,545m). Most people 
              feel some effects of altitude—shortness of breath, mild headache, or dizziness. Your pilot will 
              monitor everyone's condition.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trip Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "3-4 hour helicopter flight from Kathmandu to the Everest region",
                "Landing at Kala Patthar (5,545m) with Mount Everest directly in view",
                "Step out onto snow at the world's highest helicopter landing zone",
                "Champagne celebration with Everest as your backdrop",
                "Close-up aerial views of Mount Everest (8,848m), Lhotse, and Nuptse",
                "Fly over Namche Bazaar, Tengboche Monastery, and the Khumbu icefall",
                "Spectacular mountain photography opportunities from every angle",
                "Experienced high-altitude helicopter pilots",
                "No trekking required—accessible to all fitness levels",
                "Everest flight certificate as a lasting souvenir",
                "Perfect for celebrating special occasions",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Helicopter Tour</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Excellent visibility, stable weather, and warming temperatures. Ideal for photography with clear skies and optimal lighting.
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
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings clouds and rain, significantly reducing visibility. Helicopter tours are often cancelled during this period.</p>
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
              A visual journey to the foot of the world's highest mountain.
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
                  q: "Do we actually land at Everest Base Camp?",
                  a: "The helicopter flies over Everest Base Camp but lands at Kala Patthar (5,545m), which offers far better panoramic views of Everest than Base Camp itself.",
                },
                {
                  q: "Is the helicopter tour safe?",
                  a: "Yes, all operations are conducted by experienced pilots with modern, well-maintained helicopters following strict safety protocols.",
                },
                {
                  q: "How long is the helicopter flight?",
                  a: "The total flight time is approximately 3-4 hours round trip, including 15-20 minutes on the ground at Kala Patthar.",
                },
                {
                  q: "What happens if weather prevents the flight?",
                  a: "If weather conditions are unsafe, the flight will be rescheduled or you will receive a full refund for the helicopter portion.",
                },
                {
                  q: "Can I book this for a special occasion?",
                  a: "Absolutely! The champagne toast at Kala Patthar makes it perfect for birthdays, anniversaries, or proposals.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Fly to the Top of the World?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Everest Region Helicopter Trip today and experience the ultimate Himalayan adventure—face-to-face with the world's highest peak.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(tourName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Trip
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