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
  Footprints,
  Milestone,
  Info,
  Globe,
  ScrollText,
  MountainIcon,
  Building,
  Library,
  Music,
  Drama,
  PartyPopper,
  Castle,
  Crown,
  Sword,
  Shield,
  History,
  LandPlot,
  ThermometerSnowflake,
  Cloudy,
  Sunrise as SunriseIcon,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Lhasa (3,650m)",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "Welcome to Lhasa, the gateway to your Everest adventure! Upon arrival at Lhasa Gonggar Airport, you'll be greeted by our representative and begin your journey toward the world's highest mountain. The scenic 1.5-hour drive follows the Yarlung Tsangpo River valley, offering stunning mountain views. After checking into your hotel, the remainder of the day is dedicated to rest and acclimatization. Your guide will provide a comprehensive briefing about the days ahead, including what to expect at Everest Base Camp and important tips for high-altitude wellness. Early dinner and rest are recommended to help your body adjust to the 3,650m altitude. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Dinner",
    highlights: ["Airport pickup", "Scenic Yarlung Valley drive", "Acclimatization briefing", "Everest preparation"],
  },
  {
    day: 2,
    title: "Lhasa Sightseeing & Acclimatization",
    altitude: "3,650m",
    distance: "Local sightseeing",
    description: "A gentle day of sightseeing to aid acclimatization while experiencing Tibet's rich culture. Visit the iconic Potala Palace, the winter palace of the Dalai Lamas, offering breathtaking views of Lhasa. This 13-story marvel contains over 1,000 rooms and provides excellent context for Tibetan Buddhism. After lunch, visit the Jokhang Temple, Tibet's most sacred temple, built in the 7th century. Walk around the Barkhor pilgrimage circuit, where you'll see devout pilgrims and experience living Buddhism. This gentle activity helps your body adjust to the altitude while immersing you in Tibetan culture. Early to bed - tomorrow begins your journey toward Everest. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor pilgrimage circuit", "Gentle acclimatization", "Tibetan Buddhist culture"],
  },
  {
    day: 3,
    title: "Lhasa to Gyantse via Yamdrok Lake (4,794m)",
    altitude: "3,650m → 4,794m → 3,950m",
    distance: "260km / 6-7 hrs drive",
    description: "Depart Lhasa and begin your journey toward Everest! Cross the Kampala Pass (4,794m) for your first breathtaking view of Yamdrok Lake - one of Tibet's three sacred lakes with turquoise waters stretching beneath majestic snow-capped mountains. This is your first taste of high altitude - take it slow and enjoy the views. Stop for photos at this incredible location. Continue through picturesque valleys to reach Gyantse, a historic trading town. Upon arrival, visit the famous Pelkor Chode Monastery and its stunning Kumbum Stupa. This gentle introduction to higher altitudes prepares you for the days ahead. Overnight in Gyantse.",
    overnight: "Hotel in Gyantse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Yamdrok Lake - sacred turquoise lake", "Kampala Pass (4,794m)", "First high-altitude experience", "Pelkor Chode Monastery", "Kumbum Stupa"],
  },
  {
    day: 4,
    title: "Gyantse to Shigatse (3,840m)",
    altitude: "3,950m → 3,840m",
    distance: "90km / 2 hrs drive",
    description: "Morning visit to the Gyantse Dzong, an ancient fortress offering panoramic views of the surrounding countryside. After exploring the dzong, drive to Shigatse, Tibet's second-largest city. Upon arrival, visit Tashilhunpo Monastery, the traditional seat of the Panchen Lama. Founded in 1447, this massive monastery houses a magnificent 26-meter statue of Maitreya (Future Buddha). This is an excellent place to learn about Tibetan Buddhism before continuing toward Everest. The remainder of the day is free for rest and acclimatization. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Gyantse Dzong", "Tashilhunpo Monastery", "26m Maitreya statue", "Acclimatization", "Tibetan Buddhist learning"],
  },
  {
    day: 5,
    title: "Shigatse to Shegar (4,050m) via Tashilhunpo",
    altitude: "3,840m → 4,050m",
    distance: "240km / 5-6 hrs drive",
    description: "Today you'll drive closer to Everest, passing through ever more dramatic landscapes. The journey takes you along the Friendship Highway, with stunning views of the Himalayas appearing on the horizon. You'll pass through traditional Tibetan villages and vast plains dotted with nomad tents and grazing yaks. Arrive in Shegar (also known as New Tingri), a small town that serves as the gateway to Everest. On clear days, you can see Mount Everest and its neighboring peaks from viewpoints along the way. Rest and prepare for tomorrow's drive to base camp. Overnight in Shegar.",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Friendship Highway", "First views of Everest", "Tibetan nomad settlements", "Himalayan panoramas", "Gateway to Everest"],
  },
  {
    day: 6,
    title: "Shegar to Everest Base Camp (5,200m) & Return to Shegar",
    altitude: "4,050m → 5,200m → 4,050m",
    distance: "120km round trip / 5-6 hrs drive + exploration",
    description: "THE BIG DAY! Early morning drive to Everest Base Camp, the highlight of your journey. Enter the Qomolangma National Nature Reserve and wind through dramatic mountain roads to reach the Rongbuk Valley. Pass Rongbuk Monastery, the highest-altitude monastery in the world (4,980m), before reaching the legendary Everest Base Camp at 5,200m. Stand in awe of Mount Everest (8,848m) towering above you - the world's highest point. Take photos, soak in the atmosphere, and absorb the magnitude of this moment. Your guide will share stories of expeditions and the mountain's spiritual significance. After spending time at base camp, return to Shegar for overnight. This is a long but unforgettable day!",
    overnight: "Hotel in Shegar",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Everest Base Camp (5,200m)", "Mount Everest close-up views", "Rongbuk Monastery", "Qomolangma National Park", "Lifetime achievement"],
  },
  {
    day: 7,
    title: "Shegar to Shigatse",
    altitude: "4,050m → 3,840m",
    distance: "240km / 5-6 hrs drive",
    description: "Begin your return journey, descending to lower altitudes. The drive offers another opportunity to photograph the Himalayan peaks in the morning light. Stop at viewpoints along the way to capture the majestic mountains. As you descend, you'll feel the air getting thicker and temperatures warming. Arrive in Shigatse by late afternoon. The remainder of the day is free to rest, reflect on your incredible achievement, or explore more of Shigatse. Celebrate reaching Everest Base Camp with a special dinner. Overnight in Shigatse.",
    overnight: "Hotel in Shigatse",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Morning mountain views", "Scenic return drive", "Descending to lower altitude", "Reflection time", "Celebration dinner"],
  },
  {
    day: 8,
    title: "Shigatse to Lhasa",
    altitude: "3,840m → 3,650m",
    distance: "280km / 6-7 hrs drive",
    description: "Continue your return journey to Lhasa, retracing the route through the beautiful Tibetan countryside. Stop at scenic viewpoints along the Yarlung Tsangpo River valley and capture last photos of the stunning Himalayan landscapes. Arrive in Lhasa by late afternoon. The remainder of the day is free for last-minute souvenir shopping at Barkhor Market or simply soaking in the atmosphere of this unique city. Enjoy a farewell dinner celebrating your successful journey to the base of the world's highest mountain. Overnight in Lhasa.",
    overnight: "Hotel in Lhasa",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Scenic return drive", "Yarlung Tsangpo River valley", "Last mountain views", "Barkhor Market shopping", "Farewell dinner"],
  },
  {
    day: 9,
    title: "Departure from Lhasa",
    altitude: "3,650m",
    distance: "Airport transfer",
    description: "After breakfast, transfer to Lhasa Gonggar Airport for your departure flight. Our representative will assist with check-in and ensure you have a smooth departure. Bid farewell to the 'Roof of the World' with the incredible achievement of standing at Everest Base Camp - a memory that will stay with you forever. Tashi Delek (good luck and goodbye)!",
    overnight: "-",
    meals: "Breakfast",
    highlights: ["Airport transfer", "Departure assistance", "Fond farewells", "Everest achievement memories"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "8 nights hotel accommodation (3-star with breakfast) as per itinerary",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Tibetan guide (government licensed)",
  "Private vehicle for all sightseeing and transfers (4WD Land Cruiser for overland journeys)",
  "All monument entrance fees",
  "Everest Base Camp entry permit and vehicle permit",
  "Tibet Travel Permit (processed by us)",
  "Alien's Travel Permit",
  "Government taxes and service fees",
  "Mineral water during sightseeing",
  "Oxygen cylinders available in vehicle for emergency",
  "First aid medical kit",
  "All government taxes and official expenses",
  "Certificate of achievement from Everest Base Camp",
];

const excludes = [
  "International/domestic airfare to/from Lhasa",
  "Travel insurance (mandatory - must cover high altitude up to 5,500m and emergency evacuation)",
  "China Visa (required separately - we provide Tibet Permit support)",
  "Meals not mentioned in itinerary",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, bar bills)",
  "Tips and gratuities for guide and driver (recommended)",
  "Camera fees at monasteries (if applicable)",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Additional oxygen (supplemental oxygen available on request)",
  "Sleeping bag and personal gear (not needed as you return to hotel same day)",
  "Single room supplement (if applicable)",
];

const gallery = [
  {
    src: "/images/used/tibet-everest.webp",
    alt: "Mount Everest at 8,848m - the world's highest mountain viewed from the Tibetan side",
    caption: "Mount Everest (8,848m) - World's Highest Peak",
  },
 
  {
    src: "/images/used/yamdrok-lake.webp",
    alt: "Sacred Yamdrok Lake - turquoise holy lake in Tibet with mountain reflections",
    caption: "Turquoise Yamdrok Lake",
  },
  {
    src: "/images/used/views-tibet-train.webp",
    alt: "Vast Tibetan plateau landscape with traditional settlements and mountain views",
    caption: "Vast Tibetan Plateau",
  },
];

const altitudeInfo = [
  {
    location: "Lhasa",
    altitude: "3,650m",
    overnight: "3 nights",
    notes: "Initial acclimatization",
  },
  {
    location: "Gyantse",
    altitude: "3,950m",
    overnight: "1 night",
    notes: "Gradual ascent",
  },
  {
    location: "Shigatse",
    altitude: "3,840m",
    overnight: "2 nights",
    notes: "Tibet's second city",
  },
  {
    location: "Shegar",
    altitude: "4,050m",
    overnight: "2 nights",
    notes: "Everest gateway",
  },
  {
    location: "Everest Base Camp",
    altitude: "5,200m",
    overnight: "Day visit",
    notes: "Highest point - 5,200m",
  },
  {
    location: "Kampala Pass",
    altitude: "4,794m",
    overnight: "Pass only",
    notes: "Scenic viewpoint",
  },
];

const everestFacts = [
  {
    fact: "Height",
    detail: "8,848.86m (29,031.7 ft) - World's Highest Mountain",
  },
  {
    fact: "First Ascent",
    detail: "1953 by Sir Edmund Hillary (NZ) and Tenzing Norgay (NP)",
  },
  {
    fact: "Tibetan Name",
    detail: "Qomolangma - 'Goddess Mother of the World'",
  },
  {
    fact: "Nepali Name",
    detail: "Sagarmatha - 'Forehead in the Sky'",
  },
  {
    fact: "North Side",
    detail: "Tibet Base Camp at 5,200m (our destination)",
  },
  {
    fact: "South Side",
    detail: "Nepal Base Camp at 5,364m",
  },
];

export default function EverestBaseCampTibetPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3, 6]);

  const tourName = "Everest Base Camp from Tibet";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/tibet/everest-base-camp-tibet";
  const pageTitle = "Everest Base Camp from Tibet - Himkala Adventure";
  const pageDescription = "Everest Base Camp from Tibet: Drive to the North Face Base Camp at 5,200m and see Mount Everest up close. Visit Rongbuk Monastery and the Tibetan plateau. Book your Everest adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tibet-everest.webp";

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
                    <span>Tibet Overland Adventure</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Everest Base Camp <br />
                    <span className="text-[#cf6943]">From Tibet</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    Stand at the foot of the world's highest mountain! Drive across the Tibetan plateau to Everest Base Camp (5,200m), 
                    visit the highest monastery on Earth, and witness Mount Everest up close.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <MountainSnow className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      5,200m
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      Drive to EBC
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      9 Days
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
                src="/images/used/tibet-everest.webp"
                alt="Everest Base Camp from Tibet - the North Face of Mount Everest at 8,848m viewed from the Tibetan plateau"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: Apr-Oct
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $2,150 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "9 Days / 8 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Max Altitude", value: "5,200m / 17,060ft" },
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
                  The <strong className="text-[#14383b]">Everest Base Camp from Tibet</strong> tour offers a unique 
                  opportunity to stand at the foot of the world's highest mountain - 
                  <strong className="text-[#14383b]"> Mount Everest (8,848m)</strong> - without the need for 
                  strenuous trekking. This 9-day journey takes you across the dramatic Tibetan plateau, through 
                  ancient cities and sacred sites, to the legendary North Face Base Camp at 5,200m.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  Unlike the Nepalese side which requires multi-day trekking, the Tibetan approach allows you to 
                  drive to within sight of Everest, making this incredible achievement accessible to a wider range 
                  of travelers. You'll visit Rongbuk Monastery, the highest monastery in the world, and stand at 
                  the base camp used by early Everest expeditions and modern climbers attempting the North Ridge route.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  With gradual acclimatization built into the itinerary, comfortable 4WD transport, expert guides, 
                  and all permits arranged, this tour offers a safe and memorable journey to the top of the world. 
                  Perfect for adventure seekers, mountain lovers, and anyone wanting to witness Everest up close.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is MANDATORY and must cover high altitude up to 5,500m and emergency evacuation. 
                China Visa required (we arrange all Tibet permits including the special EBC permit).
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Stand at Everest Base Camp (5,200m) - North Side",
                  "Visit Rongbuk Monastery, the world's highest monastery",
                  "Witness Mount Everest up close - the ultimate mountain",
                  "Drive across the legendary Tibetan plateau",
                  "Cross Kampala Pass at 4,794m with Yamdrok Lake views",
                  "Explore Potala Palace and Jokhang Temple in Lhasa",
                  "Visit Tashilhunpo Monastery in Shigatse",
                  "Photograph the Himalayan range from multiple viewpoints",
                  "Experience Tibetan Buddhist culture and monasteries",
                  "Gradual acclimatization for safety and comfort",
                  "All Everest permits arranged in advance",
                  "Certificate of achievement from Everest Base Camp",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit Everest from Tibet</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Summer (May - Aug)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Warmest temperatures, clear skies in the morning, and excellent visibility. Occasional afternoon 
                    clouds but generally good conditions. Best chance for clear Everest views.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <SunriseIcon className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Oct)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear skies, stable weather, and the best mountain views. 
                    Perfect conditions for Everest photography.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
            </div>
          </section>

          {/* Everest Facts - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Mount Everest Facts</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {everestFacts.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-24 shrink-0">{item.fact}:</span>
                      <span className="text-[#556363] text-sm">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Altitude Profile - Free Walking Tour Style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Altitude Profile</h2>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="space-y-2">
                  {altitudeInfo.map((item, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-2 border-b border-[#d8cec0]/30 last:border-0 pb-2 last:pb-0">
                      <span className="font-semibold text-[#14383b] text-sm w-20">{item.location}</span>
                      <span className="text-[#cf6943] font-medium text-sm w-20">{item.altitude}</span>
                      <span className="text-[#66706d] text-xs">{item.overnight}</span>
                      <span className="text-[#556363] text-xs flex-1">{item.notes}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Acclimatization:</strong> Gradual ascent with 3 nights in Lhasa before going higher.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Everest Base Camp Day - Special Highlight */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200/50">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  <h3 className="text-xl font-serif text-[#14383b]">The Big Day - Everest Base Camp</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed mb-4">
                  Day 6 is the highlight of your journey. You'll drive from Shegar (4,050m) through the Qomolangma National 
                  Nature Reserve, passing dramatic mountain scenery to reach Rongbuk Monastery (4,980m) - the highest 
                  monastery on Earth. From there, continue to the legendary Everest Base Camp at 5,200m, where you'll 
                  stand face-to-face with the world's highest mountain.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Altitude</span>
                    <p className="text-[#556363] text-sm">5,200m / 17,060ft</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Distance from Everest</span>
                    <p className="text-[#556363] text-sm">Approx. 20km</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Time at EBC</span>
                    <p className="text-[#556363] text-sm">1-2 hours</p>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg text-center">
                    <span className="text-[#0f2940] font-bold text-xs block">Rongbuk Monastery</span>
                    <p className="text-[#556363] text-sm">4,980m</p>
                  </div>
                </div>
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in This Everest Base Camp from Tibet Tour</h2>
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
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Everest Base Camp from Tibet</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey across the Tibetan plateau to the foot of the world's highest mountain.
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "Do I need to trek to reach Everest Base Camp from Tibet?",
                    a: "No! This is the beauty of the Tibetan side - you can drive all the way to within sight of Everest. The journey involves scenic drives in comfortable 4WD vehicles, with only short walks at the sites. This makes Everest accessible to those who cannot or prefer not to trek for multiple days.",
                  },
                  {
                    q: "How high is Everest Base Camp on the Tibetan side?",
                    a: "The Tibetan (north side) Everest Base Camp is at 5,200m (17,060ft). This is actually lower than the Nepalese side base camp (5,364m). You'll spend 1-2 hours at base camp before returning to lower altitude for overnight.",
                  },
                  {
                    q: "Will I definitely see Mount Everest?",
                    a: "Weather permitting, yes! Everest is visible from multiple points along the journey, especially from the viewpoint near Shegar and at Base Camp itself. However, the mountain can be shrouded in clouds, especially in the afternoon. Morning views are typically clearest, which is why we plan to arrive at EBC in the morning.",
                  },
                  {
                    q: "How do I get to Lhasa?",
                    a: "Most travelers fly into Lhasa Gonggar Airport from major Chinese cities like Chengdu, Beijing, Shanghai, or from Kathmandu (seasonal). Flights from Kathmandu offer spectacular Himalayan views. Alternatively, the Qinghai-Tibet railway offers a scenic overland option but takes 20+ hours from mainland China.",
                  },
                  {
                    q: "What permits do I need for Everest Base Camp?",
                    a: "You need: 1) China Visa (obtained from your local Chinese embassy), 2) Tibet Travel Permit, 3) Alien's Travel Permit, and 4) Special EBC permit. We arrange all Tibet permits for you - we need your passport copy at least 25 days before travel.",
                  },
                  {
                    q: "How will the altitude affect me?",
                    a: "Most people experience some symptoms at altitude - mild headache, shortness of breath, fatigue. Our itinerary includes gradual acclimatization with 3 nights in Lhasa before going higher. We carry oxygen cylinders in the vehicle for emergencies. Listen to your body and inform your guide if you feel unwell.",
                  },
                  {
                    q: "What is the accommodation like along the route?",
                    a: "In Lhasa, you'll stay in comfortable 3-star hotels. In Gyantse, Shigatse, and Shegar, accommodation is comfortable but more basic - expect clean rooms with attached bathrooms and hot water (may be limited at peak times). All hotels are chosen for comfort and reliability.",
                  },
                  {
                    q: "Can I combine this with the Nepal side?",
                    a: "Yes! Some travelers combine the Tibet EBC tour with a visit to Nepal, flying from Lhasa to Kathmandu. From there, you could trek to EBC on the Nepalese side (different experience). Contact us for customization options.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready to Stand at the Foot of Everest?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your Everest Base Camp from Tibet tour today and achieve the dream of standing at the world's highest mountain.
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