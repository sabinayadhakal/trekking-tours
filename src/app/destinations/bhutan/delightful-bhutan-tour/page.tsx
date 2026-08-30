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
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Paro & Drive to Thimphu",
    altitude: "2,280m → 2,320m",
    distance: "50km / 1.5 hrs drive",
    description: "Welcome to the Land of the Thunder Dragon! Upon arrival at Paro International Airport, you'll be greeted by our representative with a traditional Bhutanese scarf (khata) welcome. Drive through the picturesque Paro Valley alongside the Pachu River, ascending gradually to Bhutan's capital city, Thimphu. After check-in at your hotel, visit the Buddha Dordenma statue - one of the largest Buddha statues in the world at 51.5 meters. Evening exploration of Thimphu's main street and visit to the local craft market. Welcome dinner with traditional Bhutanese cuisine.",
    overnight: "Hotel in Thimphu",
    meals: "Dinner",
    highlights: ["Traditional scarf welcome", "Buddha Dordenma viewpoint", "Thimphu craft market", "Welcome dinner"],
  },
  {
    day: 2,
    title: "Thimphu Sightseeing",
    altitude: "2,320m",
    distance: "Local sightseeing",
    description: "Full day exploring the cultural treasures of Thimphu. Morning visit to the iconic Tashichho Dzong ('Fortress of the Glorious Religion'), the seat of Bhutan's government and summer residence of the monastic body. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. Visit the School of Arts and Crafts (Zorig Chusum) where students learn traditional Bhutanese painting and sculpture. Afternoon visit to the Folk Heritage Museum and Textile Museum showcasing traditional Bhutanese life and weaving arts. End the day at the massive Buddha Dordenma viewpoint for sunset photos.",
    overnight: "Hotel in Thimphu",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Tashichho Dzong", "National Memorial Chorten", "Arts and Crafts School", "Folk Heritage Museum", "Textile Museum"],
  },
  {
    day: 3,
    title: "Thimphu to Punakha via Dochula Pass",
    altitude: "2,320m → 3,100m → 1,300m",
    distance: "75km / 3 hrs drive",
    description: "After breakfast, drive eastward toward Punakha, crossing the spectacular Dochula Pass (3,100m). On a clear day, the pass offers a stunning 360-degree view of the Himalayan range including Gangkar Puensum - the world's highest unclimbed mountain. Visit the 108 Druk Wangyal Chortens and the Druk Wangyal Lhakhang built in honor of Bhutanese soldiers. Descend through changing vegetation to the subtropical Punakha Valley. Afternoon visit to Punakha Dzong - arguably Bhutan's most beautiful dzong, strategically located at the confluence of the Pho Chhu and Mo Chhu rivers. Evening walk across the Punakha Suspension Bridge.",
    overnight: "Hotel in Punakha",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Dochula Pass (3,100m)", "108 chortens", "Himalayan views", "Punakha Dzong", "Suspension bridge"],
  },
  {
    day: 4,
    title: "Punakha Valley Exploration & Drive to Paro",
    altitude: "1,300m → 2,280m",
    distance: "130km / 4 hrs drive",
    description: "Morning hike to Chimi Lhakhang - the 'Fertility Temple' dedicated to the Divine Madman, Drukpa Kunley. The trail passes through picturesque rice fields and traditional villages. Visit the temple and receive blessings. Afternoon drive back to Paro, retracing your route through Dochula Pass with another opportunity for Himalayan photos. En route, stop at Simtokha Dzong - the oldest dzong in Bhutan (1629), now a monastic school. Arrive in Paro by evening. Farewell dinner at a traditional farmhouse with cultural performance.",
    overnight: "Hotel in Paro",
    meals: "Breakfast, Lunch, Dinner",
    highlights: ["Chimi Lhakhang hike", "Rice field villages", "Dochula Pass", "Simtokha Dzong", "Farewell cultural dinner"],
  },
  {
    day: 5,
    title: "Taktsang Monastery (Tiger's Nest) Hike & Departure",
    altitude: "2,280m → 3,120m → 2,280m",
    distance: "8km round trip / 5-6 hrs hike",
    description: "Early morning drive to the base camp of Taktsang Monastery - Bhutan's most famous landmark and the perfect finale to your delightful journey. Begin the 2-3 hour uphill hike through pine forests adorned with prayer flags. The trail offers spectacular views of the monastery clinging to a cliff 900 meters above the valley. At the cafeteria viewpoint, you'll see the monastery in all its glory. Time permitting, continue to the monastery itself - a sacred site where Guru Rinpoche meditated in the 8th century. After descending, enjoy lunch before transferring to Paro International Airport for your departure flight. Our representative will assist with check-in. Tashi Delek (goodbye and good luck)!",
    overnight: "-",
    meals: "Breakfast, Lunch",
    highlights: ["Tiger's Monastery hike", "Cliff-side monastery", "Prayer flag forests", "Farewell to Bhutan", "Departure assistance"],
  },
];

const includes = [
  "All airport/hotel transfers in private vehicle",
  "4 nights hotel accommodation (3-star with breakfast) - 2 nights Thimphu, 1 night Punakha, 1 night Paro",
  "All meals as per itinerary (breakfast, lunch, dinner)",
  "English-speaking Bhutanese guide (government licensed)",
  "Private vehicle for all sightseeing and transfers",
  "All monument entrance fees",
  "Bhutan Visa fee (processed by us)",
  "Sustainable Development Fee (SDF) of $100 per night (4 nights = $400)",
  "Government taxes and royalty",
  "Mineral water during sightseeing",
  "Traditional scarf welcome at airport",
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
  "Camera fees at monuments",
  "Any costs arising from unforeseen circumstances (weather, flight delays, political unrest)",
  "Hot stone bath (optional)",
  "Traditional archery experience (optional)",
];

const gallery = [
  {
    src: "/images/used/bhutan-page-2.webp",
    alt: "Punakha Dzong - magnificent fortress-monastery at the confluence of two rivers in Punakha Valley, Bhutan",
    caption: "Punakha Dzong - Bhutan's Most Beautiful Fortress",
  },
  {
    src: "/images/used/bhutan-tiger.webp",
    alt: "Taktsang Monastery (Tiger's Nest) perched on a cliff in Paro Valley, Bhutan - iconic Buddhist monastery",
    caption: "Taktsang Monastery - The Tiger's Nest",
  },
  {
    src: "/images/used/bhutan-paro.webp",
    alt: "Tashichho Dzong - Fortress of the Glorious Religion in Thimphu, Bhutan",
    caption: "Tashichho Dzong, Thimphu",
  },
];

export default function DelightfulBhutanTourPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1, 2, 3]);

  const tourName = "5-Day Delightful Bhutan Tour";
  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan/delightful-bhutan-tour";
  const pageTitle = "5-Day Delightful Bhutan Tour - Himkala Adventure";
  const pageDescription = "5-Day Delightful Bhutan Tour: Explore Paro, Thimphu, and Punakha valleys, visit Tiger's Nest, and experience Bhutan's culture. A perfect short tour. Book now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/delightful-bhutan.webp";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("5-Day Delightful Bhutan Tour - Himkala Adventure")}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
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
                    <span>Bhutan Tour Package</span>
                  </div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    5 Days <br />
                    <span className="text-[#cf6943]">Delightful Bhutan Tour</span>
                  </h1>
                </div>
                <div className="max-w-full md:max-w-[280px]">
                  <p className="text-sm leading-6 text-[#66706d]">
                    A perfectly paced journey through Bhutan's western valleys - experience the magic of Thimphu, 
                    the beauty of Punakha, and the iconic Tiger's Nest Monastery.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                      <Award className="w-3 h-3 inline mr-1" aria-hidden="true" />
                      Delightful Experience
                    </span>
                    <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                      3 Valleys
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
                src="/images/used/delightful-bhutan.webp"
                alt="5-Day Delightful Bhutan Tour - scenic Bhutanese landscape with traditional dzong and mountain views"
                fill
                className="object-cover opacity-90"
                priority
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                  Best Season: Mar-May, Sep-Nov
                </span>
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                  $1,950 / person
                </span>
              </div>
            </figure>
          </div>

          {/* Quick Stats - Free Walking Tour Style */}
          <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
              {[
                { label: "Duration", value: "5 Days / 4 Nights" },
                { label: "Group Size", value: "2-12 people" },
                { label: "Valleys", value: "3 Valleys" },
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
                  The <strong className="text-[#14383b]">5-Day Delightful Bhutan Tour</strong> offers the perfect 
                  balance of culture, scenery, and iconic experiences in the Kingdom of Bhutan. This carefully 
                  crafted <strong className="text-[#14383b]">Bhutan tour</strong> takes you through three of 
                  Bhutan's most beautiful western valleys: <strong className="text-[#14383b]">Paro, Thimphu, and Punakha</strong>, 
                  each offering unique insights into this Himalayan kingdom's living traditions.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  From the bustling capital of Thimphu with its magnificent dzongs and monasteries to the 
                  subtropical Punakha Valley with its stunning fortress at the river confluence, and finally 
                  the serene Paro Valley - this tour packs the essential Bhutanese experiences into a perfectly 
                  paced 5-day journey.
                </p>
                <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                  The highlight is undoubtedly the <strong className="text-[#14383b]">hike to Taktsang Monastery 
                  (Tiger's Nest)</strong>, Bhutan's most revered site perched dramatically on a cliff face. 
                  With expert local guides, all meals included, and the mandatory Sustainable Development Fee 
                  covered, this tour offers a delightful and hassle-free introduction to the Land of the 
                  Thunder Dragon.
                </p>
              </article>

              <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
                <strong>Important:</strong> Travel insurance is mandatory and must cover medical emergencies and evacuation. 
                Bhutan requires a minimum Sustainable Development Fee (SDF) of $100 per night - for 4 nights this is 
                $400, which is fully included in our package.
              </div>
            </div>
          </section>

          {/* Highlights - Free Walking Tour Style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[880px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Hike to iconic Taktsang Monastery (Tiger's Nest)",
                  "Explore three valleys: Paro, Thimphu, and Punakha",
                  "Visit Punakha Dzong - Bhutan's most beautiful fortress",
                  "Cross Dochula Pass with 108 chortens & Himalayan views",
                  "Explore Tashichho Dzong and National Memorial Chorten",
                  "Walk through rice fields to Chimi Lhakhang",
                  "Visit Buddha Dordenma - one of the largest Buddha statues",
                  "Experience traditional farmhouse hospitality",
                  "Farewell dinner with cultural performance",
                  "All visas and SDF fees ($400 for 4 nights) included",
                  "Expert local guides sharing cultural insights",
                  "Perfectly paced for a short but comprehensive visit",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time to Visit Bhutan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Flower2 className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Spring (Mar - May)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    Pleasant temperatures, blooming rhododendrons, and clear skies. Perfect for the Tiger's Nest 
                    hike and valley exploration. Paro Tshechu festival often falls in spring.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
                </div>
                <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                    <h3 className="font-semibold text-[#14383b]">Autumn (Sep - Nov)</h3>
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed">
                    The most popular season with crystal-clear mountain views, pleasant weather, and vibrant 
                    festivals including the famous Thimphu Tshechu.
                  </p>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
                </div>
              </div>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">What's Included in This Delightful Bhutan Tour</h2>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Photo Gallery - Delightful Bhutan Tour</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6">
                A visual journey through Bhutan's majestic dzongs, sacred monasteries, and breathtaking Himalayan landscapes.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    q: "Is this tour suitable for first-time visitors to Bhutan?",
                    a: "Absolutely! This 5-day Delightful Bhutan Tour is specifically designed for first-time visitors who want to experience the essential highlights of Bhutan in a short but well-paced itinerary. It covers the must-see destinations (Paro, Thimphu, Punakha) and includes the iconic Tiger's Nest hike.",
                  },
                  {
                    q: "What is the Sustainable Development Fee (SDF) and is it included?",
                    a: "The SDF is a $100 per night fee that all international visitors pay to visit Bhutan. It funds free education, healthcare, and infrastructure while preserving Bhutan's culture and environment. For this 4-night tour, the SDF of $400 is fully included in our package price - you don't need to pay anything extra.",
                  },
                  {
                    q: "Do I need a visa? How does it work?",
                    a: "Yes, all international visitors except Indian nationals require a visa for Bhutan. We process your visa as part of the package. You'll need to send us a clear passport copy and passport photo at least 15 days before travel. The visa is stamped in your passport upon arrival at Paro Airport.",
                  },
                  {
                    q: "How difficult is the Tiger's Nest hike?",
                    a: "The hike to Taktsang Monastery is moderate and takes 5-6 hours round trip. The trail is well-maintained but has many stone steps and significant uphill sections. The first 45 minutes are steep, then you descend to a cafeteria viewpoint before the final climb. Most people with reasonable fitness can complete it.",
                  },
                  {
                    q: "What is the accommodation like?",
                    a: "We use comfortable 3-star hotels throughout your journey. In Thimphu (2 nights), Punakha (1 night), and Paro (1 night). All rooms have attached bathrooms with hot water, comfortable beds, and heating. Properties are centrally located and offer authentic Bhutanese hospitality.",
                  },
                  {
                    q: "Can I customize this tour?",
                    a: "Yes! While this 5-day itinerary is our standard Delightful Bhutan Tour, we can customize it to your preferences - add extra days, include festival dates, upgrade hotels, or modify activities. Contact us with your requirements for a personalized quote.",
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Delightful Bhutan Adventure?</h2>
              <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Book your 5-Day Delightful Bhutan Tour today and experience the magic of the Land of the Thunder Dragon in a perfectly paced journey.
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