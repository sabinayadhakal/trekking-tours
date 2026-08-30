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
  Sparkles,
  Facebook,
  Twitter,
  Copy,
  Check,
  ChevronDown,
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
  Helicopter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kathmandu & Helicopter Briefing",
    altitude: "1,350m",
    distance: "-",
    description: "Welcome to Nepal! Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel in Kathmandu. After check-in, attend a comprehensive helicopter briefing where we'll discuss tomorrow's Langtang flight, weather considerations, high-altitude precautions, photography tips, and handle any arrangements. Evening free to explore the vibrant streets of Thamel, with its bustling shops, restaurants, and cafes. In the evening, enjoy a welcome dinner with traditional Nepali cuisine where you'll meet your guide and fellow travelers, preparing for the adventure of a lifetime.",
    overnight: "Hotel in Kathmandu",
    meals: "Dinner",
    highlights: [
      "Airport pickup and private transfer",
      "Hotel check-in in Thamel",
      "Helicopter tour briefing and preparation",
      "Thamel exploration",
      "Welcome dinner with Nepali cuisine"
    ]
  },
  {
    day: 2,
    title: "Langtang Valley Helicopter Tour with Kyanjin Gompa Landing",
    altitude: "1,350m → 3,950m (Kyanjin Gompa) → 1,350m",
    distance: "3-4 hours helicopter flight",
    description: "This is the day you've been waiting for! Early morning transfer to Tribhuvan International Airport's domestic terminal for your Langtang helicopter adventure. Your helicopter departs at sunrise (around 6:30-7:00 AM) for optimal weather conditions and lighting. Fly north over the beautiful Nepalese countryside, with aerial views of terraced hillsides, traditional villages, and lush green forests. As you ascend, the dramatic Himalayan vistas unfold, giving you a sense of wonder and adventure. You'll fly over Langtang National Park, Nepal's first Himalayan national park, known for its diverse flora and fauna including red pandas, Himalayan tahrs, and over 250 species of birds. The helicopter flies through the heart of the Langtang Valley, often called the 'Valley of Glaciers,' offering spectacular views of snow-capped peaks, deep gorges, cascading waterfalls, and pristine glaciers. The highlight of the tour is a landing at Kyanjin Gompa (3,950m), a charming Tibetan-influenced village surrounded by towering peaks. Step out onto solid ground for 30-40 minutes of exploration time. Visit the ancient Buddhist monastery, sample fresh yak cheese from the famous local cheese factory (the oldest in Nepal), and soak in panoramic mountain views. The mountains visible from here include Langtang Lirung (7,227m), Langshisha Ri (6,983m), Ganesh Himal (7,407m), Dorje Lakpa (6,975m), Yala Peak, Naya Kanga, and Gangchempo. On the return flight, you'll also get spectacular aerial views of the sacred Gosaikunda Lake, a high-altitude alpine lake system revered by both Hindus and Buddhists. You'll be back in Kathmandu by mid-morning, with the rest of the day free to recover, process your incredible experience, and share photos. Transfer to your hotel. In the evening, enjoy a farewell dinner at a traditional Nepali restaurant celebrating your Langtang helicopter achievement.",
    overnight: "Hotel in Kathmandu",
    meals: "Breakfast, Dinner",
    highlights: [
      "Kyanjin Gompa landing (3,950m)",
      "Langtang Lirung and Ganesh Himal views",
      "Ancient Buddhist monastery visit",
      "Yak cheese factory tasting",
      "Gosaikunda Lake aerial views",
      "Langtang National Park flyover",
      "Farewell dinner with cultural performance"
    ]
  }
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "1 night hotel accommodation in Kathmandu (3-star with breakfast)",
  "All meals during the tour as specified (breakfast, dinner)",
  "Experienced English-speaking guide",
  "Langtang Valley Helicopter Tour with Kyanjin Gompa landing (3-4 hours)",
  "30-40 minutes ground exploration time at Kyanjin Gompa",
  "All helicopter ground handling and permits",
  "Langtang National Park entry permit",
  "First aid medical kit including pulse oximeter and oxygen for emergency",
  "Farewell dinner with cultural performance",
  "All government taxes and official expenses",
  "Emergency contact number 24/7",
  "Complimentary map of Nepal",
  "Langtang flight certificate of completion",
  "Souvenir photographs",
  "Passenger insurance (by aviation company)",
];

const excludes = [
  "International airfare to/from Nepal",
  "Nepal visa fee ($30 USD for 15 days, $50 for 30 days - available on arrival)",
  "Travel insurance (mandatory - must cover helicopter evacuation up to 4,000m)",
  "Lunch on Day 2 (not specified in itinerary)",
  "Breakfast, tea/coffee, and other meals at Kyanjin Gompa",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guides, pilots, and support staff (recommended)",
  "Emergency evacuation/helicopter rescue costs beyond included coverage",
  "Any costs arising from unforeseen circumstances (weather, political unrest)",
  "International phone calls and internet charges",
  "Excess baggage charges",
];

const gallery = [
  {
    src: "/images/used/langtang-flight-2.webp",
    alt: "Langtang Lirung",
    caption: "Langtang Lirung (7,227m) - The highest peak in the Langtang range",
  },
  {
    src: "/images/used/langtang-flight-1.webp",
    alt: "Helicopter in Langtang",
    caption: "Helicopter landing at Kyanjin Gompa with mountain backdrop",
  },
];

export default function LangtangRegionHelicopterTripPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2]);

  const tourName = "Langtang Region Helicopter Trip";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Langtang Region Helicopter Trip - Himkala Adventure")}`;
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
                  Langtang Region <br />
                  <span className="text-[#cf6943]">Helicopter Trip</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Fly into the 'Valley of Glaciers' and land at Kyanjin Gompa (3,950m)—explore ancient monasteries, 
                  sample fresh yak cheese, and witness breathtaking Himalayan peaks including Langtang Lirung and Ganesh Himal.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    <Helicopter className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Kyanjin Gompa
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Mountain className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    3,950m
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Yak Cheese
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
              src="/images/used/langtang-heli.webp"
              alt="Langtang Region Helicopter Trip - aerial view of Langtang Valley and Himalayan peaks in Nepal"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Best: Feb-May, Sep-Dec
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                $1,500 / person
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
              { label: "Max Altitude", value: "3,950m" },
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
                The <strong className="text-[#14383b]">Langtang Region Helicopter Trip</strong> offers a 
                once-in-a-lifetime opportunity to explore one of Nepal's most beautiful Himalayan valleys in 
                just a single morning. Known as the "Valley of Glaciers," the Langtang region is renowned for 
                its pristine natural beauty, rich Tibetan-influenced culture, and stunning mountain panoramas—all 
                accessible within a short flight from Kathmandu.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The centerpiece of this 2-day adventure is a <strong className="text-[#14383b]">3-4 hour helicopter 
                tour</strong> that takes you deep into the heart of the Langtang Valley. Unlike other mountain 
                flights that remain at a distance, this experience includes a 
                <strong className="text-[#14383b]"> landing at Kyanjin Gompa (3,950m)</strong>—a charming 
                Tibetan-influenced village surrounded by towering peaks. Here, you'll step out and spend 30-40 
                minutes exploring the ancient Buddhist monastery, visiting the famous yak cheese factory (the 
                oldest in Nepal), and soaking in panoramic mountain views.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                With experienced pilots, modern helicopters, and careful attention to safety and comfort, this 
                tour makes the beauty of the Langtang region accessible to everyone. No trekking is required—just 
                bring your sense of adventure and your camera. Whether you're a nature lover, cultural enthusiast, 
                photographer, or simply seeking a unique Himalayan experience, this helicopter trip delivers an 
                unforgettable adventure.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-blue-50 border-l-4 border-blue-400 text-blue-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>About the Altitude:</strong> Kyanjin Gompa is at 3,950m. Most people handle this well, 
              but some may experience mild altitude symptoms. The helicopter carries supplemental oxygen for emergencies.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Trip Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "3-4 hour helicopter flight from Kathmandu to the Langtang Valley",
                "Landing at Kyanjin Gompa (3,950m) with 30-40 minutes ground exploration",
                "Step out to explore the ancient Buddhist monastery and local culture",
                "Visit Nepal's oldest yak cheese factory and sample fresh yak cheese",
                "Spectacular views of Langtang Lirung (7,227m), Ganesh Himal, and Dorje Lakpa",
                "Fly over Langtang National Park, home to red pandas and Himalayan tahrs",
                "Aerial views of the sacred Gosaikunda Lake at 4,380m",
                "Experience the 'Valley of Glaciers' with its pristine glaciers and alpine meadows",
                "Perfect for photographers, nature lovers, and culture enthusiasts",
                "No trekking required—accessible to all fitness levels",
                "Langtang flight certificate as a lasting souvenir",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Helicopter Tour</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Excellent visibility, blooming rhododendrons, and pleasant temperatures. Ideal for photography with clear skies.
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
                  Crisp clear air and excellent visibility on clear days. Snow-covered peaks are spectacular.
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
              A visual journey through the 'Valley of Glaciers' - from helicopter to mountain village.
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
                  q: "How long is the helicopter flight?",
                  a: "The total helicopter flight time is approximately 3-4 hours round trip from Kathmandu. This includes the flight to the Langtang Valley, 30-40 minutes on the ground at Kyanjin Gompa, and the return flight.",
                },
                {
                  q: "What mountains will I see during the flight?",
                  a: "You'll see Langtang Lirung (7,227m), Langshisha Ri (6,983m), Ganesh Himal (7,407m), Dorje Lakpa (6,975m), Yala Peak, Naya Kanga, Gangchempo, and the sacred Gosaikunda Lake.",
                },
                {
                  q: "Can I try yak cheese at Kyanjin Gompa?",
                  a: "Yes! The yak cheese factory is the oldest in Nepal. During your ground time, you can visit the factory, sample fresh yak cheese, and even purchase some to take home.",
                },
                {
                  q: "Is this tour suitable for children?",
                  a: "Yes, children aged 3 and above can enjoy this helicopter tour. Children under 3 years are not recommended due to the altitude. All children must be accompanied by adults.",
                },
                {
                  q: "What is the cancellation policy?",
                  a: "If weather prevents the flight, you receive a full refund. For personal cancellations, fees apply based on notice period. We strongly recommend travel insurance.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Explore the Valley of Glaciers?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Langtang Region Helicopter Trip today and experience the breathtaking beauty of the Himalayas from above.
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