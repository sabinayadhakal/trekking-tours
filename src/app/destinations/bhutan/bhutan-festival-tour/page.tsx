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
  ScrollText,
  Soup,
  Cherry,
  Library,
  Warehouse,
  Milestone,
  Castle,
  Flower2,
  PartyPopper,
  Music,
  Drama,
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
    description: "Welcome to the Land of the Thunder Dragon during festival season! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, receive a festival briefing from your guide about the Tshechu (festival) you'll experience. Evening free to explore Thimphu's main street and visit the local craft market. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Festival briefing", "Thimphu craft market", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Thimphu Tshechu (Festival Day)",
    altitude: "2,320m",
    distance: "Local festival attendance",
    description: "Full day immersion at the Thimphu Tshechu - one of Bhutan's most spectacular religious festivals. Witness colorful masked dances (cham) performed by monks and laypeople, depicting Buddhist teachings and legends. The festival grounds come alive with thousands of Bhutanese families dressed in their finest traditional attire (kira and gho). Watch the unfolding of the giant thongdrel (religious scroll) at dawn, believed to cleanse sins. Interact with locals, enjoy festival food, and capture incredible photographs of the vibrant ceremonies. Your guide will explain the symbolism behind each dance and ritual throughout the day.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Thimphu Tshechu masked dances", "Traditional Bhutanese attire", "Thongdrel unveiling", "Local festival atmosphere", "Cultural explanations"],
  },
  {
    day: 3,
    title: "Thimphu Sightseeing & Festival Continuation",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional painting and sculpture. Afternoon return to the festival grounds for more dances and ceremonies, or explore the weekend market if timing aligns. Evening visit to Buddha Dordenma viewpoint for sunset photos overlooking the valley.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Arts and Crafts School", "Additional festival time", "Buddha Dordenma sunset"],
  },
  {
    day: 4,
    title: "Thimphu to Punakha via Dochula Pass",
    altitude: "2,320m → 3,100m → 1,300m",
    distance: "75km / 3 hrs drive",
    description: "After breakfast, drive eastward toward Punakha, crossing the spectacular Dochula Pass (3,100m). On a clear day, the pass offers a stunning 360-degree view of the Himalayan range including Gangkar Puensum - the world's highest unclimbed mountain. Visit the 108 Druk Wangyal Chortens and the Druk Wangyal Lhakhang built in honor of Bhutanese soldiers. Descend through changing vegetation to the subtropical Punakha Valley. Afternoon visit to Punakha Dzong - arguably Bhutan's most beautiful dzong, strategically located at the confluence of the Pho Chhu and Mo Chhu rivers. Evening walk across the Punakha Suspension Bridge.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass (3,100m)", "108 chortens", "Himalayan views", "Punakha Dzong", "Suspension bridge"],
  },
  {
    day: 5,
    title: "Punakha Valley Exploration",
    altitude: "1,300m",
    distance: "Local sightseeing",
    description: "Morning hike to Chimi Lhakhang - the 'Fertility Temple' dedicated to the Divine Madman, Drukpa Kunley. The trail passes through picturesque rice fields and traditional villages. Visit the temple and receive blessings from the wooden phallus symbols. Afternoon visit to Khamsum Yulley Namgyal Chorten, a beautiful stupa overlooking the valley, built for peace and harmony. Time permitting, visit a local farmhouse to experience traditional Bhutanese rural life and perhaps sample ara (local wine). Return to Punakha for overnight.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Chimi Lhakhang hike", "Rice field villages", "Khamsum Yulley Chorten", "Farmhouse visit", "Traditional rural life"],
  },
  {
    day: 6,
    title: "Punakha to Paro",
    altitude: "1,300m → 2,280m",
    distance: "130km / 4 hrs drive",
    description: "Morning drive back to Paro, retracing your route through Dochula Pass with another opportunity for Himalayan photos. En route, stop at Simtokha Dzong - the oldest dzong in Bhutan (1629), now a monastic school. Arrive in Paro by afternoon. Visit the National Museum (Ta Dzong) housed in a historic watchtower, showcasing Bhutanese art, relics, and national costume. Explore Paro Rinpung Dzong, a magnificent fortress-monastery overlooking the valley. Evening free for last-minute souvenir shopping in Paro town. Farewell dinner at a traditional farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass", "Simtokha Dzong", "National Museum", "Rinpung Dzong", "Farewell cultural dinner"],
  },
  {
    day: 7,
    title: "Taktsang Monastery (Tiger's Nest) Hike & Departure",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-6 hrs hike",
    description: "Early morning drive to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the perfect finale to your festival journey. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint, you'll see the monastery in all its glory. Time permitting, continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. After descending, enjoy lunch before transferring to Paro International Airport for your departure flight. Our representative will assist with check-in. Tashi Delek (goodbye and good luck) - may the festival blessings accompany you home!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Tiger's Monastery hike", "Cliff-side monastery", "Prayer flag forests", "Festival farewell", "Departure assistance"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "6 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (6 nights = $600)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
  "Festival entrance fees and special access arrangements",
  "Farmhouse visit with traditional welcome",
  "Cultural performance at farewell dinner",
  "First aid medical kit",
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
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "/images/used/bhutan-culture.webp",
    alt: "Thimphu Tshechu - traditional Bhutanese mask dance festival with colorful costumes and cultural performances",
    caption: "Thimphu Tshechu - Masked Dances",
  },
  {
    src: "/images/used/bhutan-page-2.webp",
    alt: "Punakha Dzong - magnificent fortress-monastery at the confluence of two rivers in Punakha Valley, Bhutan",
    caption: "Punakha Dzong",
  },
  {
    src: "/images/used/mask-bhutan.webp",
    alt: "Bhutanese mask dancer - traditional cham dance performer in elaborate costume during Tshechu festival",
    caption: "Cham Dance Performer",
  },
];

export default function BhutanFestivalTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);

  const tourName = "7-Day Bhutan Festival Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/bhutan-festival-tour";
  const pageTitle = "7-Day Bhutan Festival Tour - Himkala Adventure";
  const pageDescription = "7-Day Bhutan Festival Tour: Experience Thimphu Tshechu's masked dances, ancient rituals, and vibrant culture. Includes Punakha Dzong, Dochula Pass, and Tiger's Nest. Book your festival adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/bhutan-culture.webp";

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
                    <span>Bhutan Festival Tour</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    7 Days <br />
                    <span className="text-[#cf6943]">Bhutan Festival Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Experience the magic of Bhutan's sacred Tshechu festivals - witness vibrant masked dances, 
                    ancient rituals, and Bhutanese culture at its most colorful.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <PartyPopper className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Festival Tshechu
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Masked Dances
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Tiger's Nest
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
                src="/images/used/bhutan-culture.webp"
                alt="7-Day Bhutan Festival Tour - colorful Thimphu Tshechu festival with masked dancers and traditional Bhutanese culture"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Festival Dates: Sep-Oct
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $2,750 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "7 Days / 6 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Festival", value: "Thimphu Tshechu" },
                { label: "Difficulty", value: "Easy to Moderate" },
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
                  The <strong className="text-[#14383b]">7-Day Bhutan Festival Tour</strong> offers a magical window 
                  into the soul of Bhutan during its most vibrant and sacred celebrations. The centerpiece is the 
                  <strong className="text-[#14383b]"> Thimphu Tshechu</strong>, one of Bhutan's largest and most 
                  spectacular religious festivals, where masked dances (cham) reenact Buddhist teachings and 
                  legends passed down through centuries.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Tshechus are not merely tourist attractions but deeply spiritual events where Bhutanese families 
                  gather in their finest traditional attire to receive blessings, socialize, and witness the
                  <strong className="text-[#14383b]"> unveiling of the giant thongdrel (religious scroll)</strong> 
                  at dawn. Your experienced guide will explain the symbolism behind each dance, the stories they 
                  represent, and the cultural significance of the rituals you witness.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Beyond the festival, this carefully paced <strong className="text-[#14383b]">Bhutan festival tour</strong> 
                  includes visits to <strong className="text-[#14383b]">Punakha Dzong</strong> (Bhutan's most beautiful 
                  fortress), the <strong className="text-[#14383b]">Dochula Pass</strong> with its 108 chortens, and 
                  culminates with the iconic <strong className="text-[#14383b]">hike to Taktsang Monastery (Tiger's Nest)</strong>. 
                  With all meals, visas, and the Sustainable Development Fee included, this is a complete cultural 
                  immersion into the Land of the Thunder Dragon at its most festive.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Festival dates are confirmed 6 months in advance based on the lunar calendar. 
                Early booking is essential as accommodations fill quickly. Travel insurance is mandatory.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full day at Thimphu Tshechu with masked dances",
                  "Witness giant thongdrel (religious scroll) unveiling",
                  "Bhutanese families in traditional festival attire",
                  "Visit Punakha Dzong - Bhutan's most beautiful fortress",
                  "Cross Dochula Pass with 108 chortens & Himalayan views",
                  "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                  "Explore Tashichho Dzong and National Memorial Chorten",
                  "Walk through rice fields to Chimi Lhakhang",
                  "Farmhouse visit with traditional hospitality",
                  "Farewell dinner with cultural performance",
                  "All visas and SDF fees ($600 for 6 nights) included",
                  "Expert guide explaining festival symbolism",
                ].map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                    <span className="text-[#cf6943] mt-1">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Festival Calendar - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Thimphu Tshechu Festival Dates</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30 mb-4">
                <p className="text-[#556363] text-sm mb-4">
                  The Thimphu Tshechu is held annually according to the Bhutanese lunar calendar. Below are the upcoming festival dates:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-[#f2ede4] rounded-lg">
                    <div className="font-bold text-[#14383b] text-sm">2024</div>
                    <div className="text-sm text-[#66706d]">Sep 15-17</div>
                  </div>
                  <div className="text-center p-3 bg-[#f2ede4] rounded-lg">
                    <div className="font-bold text-[#14383b] text-sm">2025</div>
                    <div className="text-sm text-[#66706d]">Oct 3-5</div>
                  </div>
                  <div className="text-center p-3 bg-[#f2ede4] rounded-lg">
                    <div className="font-bold text-[#14383b] text-sm">2026</div>
                    <div className="text-sm text-[#66706d]">Sep 22-24</div>
                  </div>
                  <div className="text-center p-3 bg-[#f2ede4] rounded-lg">
                    <div className="font-bold text-[#14383b] text-sm">2027</div>
                    <div className="text-sm text-[#66706d]">Oct 10-12</div>
                  </div>
                </div>
                <p className="text-[10px] text-[#66706d] mt-3">*Dates are approximate and confirmed 6 months in advance. We can also arrange tours for Paro Tshechu (spring) and other festivals.</p>
              </div>
            </div>
          </section>

          {/* Itinerary - Free Walking Tour Style (Accordion) */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Day-by-Day Festival Itinerary</h2>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in This Bhutan Festival Tour</h2>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Festival Gallery</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through Bhutan's vibrant Tshechu festivals, majestic dzongs, and sacred monasteries.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Festival FAQ</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "What is a Tshechu festival?",
                    a: "Tshechu means 'tenth day' and celebrates the birthday of Guru Rinpoche (Padmasambhava), who introduced Buddhism to Bhutan. These annual religious festivals feature masked dances (cham) performed by monks and laypeople, depicting Buddhist teachings, stories, and legends. They are occasions for the community to gather, receive blessings, and socialize.",
                  },
                  {
                    q: "What should I wear to the festival?",
                    a: "Comfortable, modest clothing is recommended. While there's no strict dress code for tourists, showing respect by covering shoulders and knees is appreciated. The festival grounds involve standing and walking on grass/dirt, so comfortable shoes are essential. Mornings can be cool, so layers are recommended. Your guide will advise on appropriate attire.",
                  },
                  {
                    q: "Can I take photographs at the festival?",
                    a: "Yes, photography is generally allowed at Tshechus, and the colorful dances make for incredible photos. However, be respectful - avoid using flash during dances, don't block views of Bhutanese attendees, and always ask before photographing individuals. Some inner monastery areas may prohibit photography - your guide will advise.",
                  },
                  {
                    q: "What is the thongdrel unveiling?",
                    a: "The thongdrel is a giant religious scroll (often the size of a building) depicting Guru Rinpoche and other deities. It is unfurled at dawn on the final day of the Tshechu, and it's believed that simply viewing it cleanses sins and brings blessings. This is a highlight of the festival and draws huge crowds before dawn.",
                  },
                  {
                    q: "Is the Sustainable Development Fee (SDF) really included?",
                    a: "Yes! The SDF of $100 per night ($600 for 6 nights) is fully included in our package price. You don't need to pay anything extra. This fee funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment.",
                  },
                  {
                    q: "Can I combine this with other festivals?",
                    a: "Absolutely! While this itinerary focuses on Thimphu Tshechu, we can customize to include Paro Tshechu (spring), Punakha Drubchen, or Jambay Lhakhang Drup. Contact us with your preferred dates and interests for a personalized festival itinerary.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Bhutan Festival Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your 7-Day Bhutan Festival Tour today and experience the magic of Thimphu Tshechu - where culture, spirituality, and celebration come alive.
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}