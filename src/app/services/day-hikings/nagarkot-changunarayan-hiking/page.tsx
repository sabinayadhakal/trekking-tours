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
  TreePine,
  Footprints,
  MountainSnow,
  Eye,
  Sunset,
  Cloud,
  Wind,
  Coffee,
  Leaf,
  Flower2,
  Sun,
  Sunrise as SunriseIcon,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Nagarkot-Changunarayan Hiking Adventure",
    altitude: "1,350m → 2,175m → 1,541m → 1,350m",
    distance: "8-9 hours (5-6 hours hiking)",
    description: "Your day hiking adventure begins very early at 4:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll drive approximately 1.5 hours to Nagarkot, a famous hill station renowned for its spectacular sunrise views over the Himalayas. Arrive at the viewpoint just before sunrise and witness one of nature's most breathtaking spectacles as the first light illuminates the snow-capped peaks, including Everest on clear days. After sunrise, enjoy a hot breakfast at a local café with mountain views. Your hike then begins, descending from Nagarkot through beautiful forests and traditional villages. The trail offers continuous panoramic views of the Himalayan range, including Ganesh Himal, Langtang, Jugal, and Everest on clear days. You'll pass through charming villages where you can observe rural life and terraced farmlands. After approximately 3-4 hours of hiking, you'll arrive at Changunarayan Temple, the oldest Hindu temple in Nepal dating back to the 4th century. This UNESCO World Heritage Site is renowned for its exquisite stone, wood, and metal crafts. Spend time exploring the temple complex with your guide, learning about its history and significance. Enjoy a well-deserved picnic lunch near the temple. After exploring, your driver will meet you and drive you back to Kathmandu, arriving at your hotel by approximately 4:00 PM.",
    overnight: "Not applicable - day hike",
    meals: "Breakfast, Picnic Lunch",
    highlights: ["Spectacular sunrise over the Himalayas from Nagarkot", "Panoramic mountain views including Everest on clear days", "Scenic downhill hike through forests and villages", "Visit to Changunarayan Temple (4th century UNESCO site)", "Traditional village and rural life experience"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking hiking guide",
  "Early morning pickup (4:30 AM) for sunrise",
  "Hot breakfast at Nagarkot viewpoint",
  "Picnic lunch near Changunarayan",
  "Bottled water (2 liters per person)",
  "Changunarayan Temple entrance fee",
  "All necessary permits",
  "First aid kit",
  "All government taxes and service charges",
  "Hotel pickup and drop-off (within Kathmandu valley)",
];

const excludes = [
  "Meals not specified (dinner)",
  "Alcoholic beverages and soft drinks",
  "Personal expenses (phone calls, laundry, souvenirs, etc.)",
  "Tips and gratuities for guide and driver (recommended)",
  "Travel insurance",
  "Personal hiking equipment (sturdy shoes, daypack, etc.)",
  "Optional activities not mentioned in itinerary",
  "International phone calls and internet charges",
];

const gallery = [
  {
    src: "/images/used/nagarkot-hike-1.webp",
    alt: "Sunrise over Himalayas from Nagarkot",
    caption: "Spectacular sunrise over the Himalayas from Nagarkot viewpoint",
  },
  {
    src: "/images/used/changunarayan-temple-2.webp",
    alt: "Changunarayan Temple",
    caption: "Changunarayan Temple",
  },
  {
    src: "/images/used/changunarayan-temple-1.webp",
    alt: "Changunarayan Temple",
    caption: "Changunarayan Temple - Nepal's oldest temple (4th century)",
  },
  {
    src: "/images/used/nagarkot-3.webp",
    alt: "Hiking Trail",
    caption: "Beautiful hiking trail through forests and villages",
  },
  {
    src: "/images/used/nagarkot-4.webp",
    alt: "Traditional Village",
    caption: "Traditional village along the hiking route",
  },
];

export default function NagarkotChangunarayanHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Nagarkot-Changunarayan Hiking Adventure";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Nagarkot-Changunarayan Hiking - Himkala Adventure")}`;
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
                  <span>Day Hiking</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Nagarkot-Changunarayan <br />
                  <span className="text-[#cf6943]">Day Hiking Adventure</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Witness a spectacular sunrise over the Himalayas from Nagarkot, then hike through scenic forests and villages 
                  to the ancient Changunarayan Temple—a perfect blend of natural beauty and cultural heritage.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Moderate
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <SunriseIcon className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Sunrise & Heritage
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    2,175m
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
              src="/images/used/nagarkot-changu.webp"
              alt="Nagarkot sunrise over Himalayan mountains with panoramic views in Nepal - popular day hike destination"
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
                $45 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "8-9 Hours" },
              { label: "Group Size", value: "1-8 people" },
              { label: "Max Altitude", value: "2,175m" },
              { label: "Hiking Time", value: "5-6 Hours" },
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
                The <strong className="text-[#14383b]">Nagarkot-Changunarayan Hiking Adventure</strong> is one of 
                the most rewarding day hikes in the Kathmandu Valley, combining a spectacular Himalayan sunrise 
                with a scenic downhill trek through traditional villages and forests to one of Nepal's most 
                important historical sites. This hike offers the perfect blend of natural beauty and cultural heritage.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Your adventure begins before dawn with a drive to <strong className="text-[#14383b]">Nagarkot</strong> 
                (2,175m), a famous hill station renowned for its panoramic views of the Himalayan range. As the sun 
                rises, you'll witness an unforgettable spectacle—the first light painting the snow-capped peaks in 
                shades of gold and orange. On clear days, the view stretches from Annapurna in the west to Everest 
                in the east, encompassing Ganesh Himal, Langtang, Jugal, and dozens of other majestic peaks.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                After sunrise and a hearty breakfast, you'll begin your downhill hike through a landscape of terraced 
                farmlands, pine forests, and traditional villages. The trail offers continuous mountain views and 
                opportunities to observe rural Nepalese life. Farmers working in their fields, children playing, 
                and women weaving traditional fabrics provide authentic glimpses of village culture.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The hike concludes at <strong className="text-[#14383b]">Changunarayan Temple</strong>, the oldest 
                Hindu temple in Nepal, dating back to the 4th century. This UNESCO World Heritage Site is a masterpiece 
                of Licchavi-era art and architecture, featuring exquisite stone sculptures, woodcarvings, and inscriptions. 
                After exploring the temple complex, you'll enjoy a picnic lunch before your driver returns you to 
                Kathmandu. This hike is perfect for nature lovers, photography enthusiasts, and anyone seeking a 
                memorable day away from the city.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> This hike requires a very early start (4:30 AM pickup) to reach Nagarkot for sunrise. 
              Nagarkot is cold in the early morning, especially in winter. Warm clothing, hat, and gloves are essential.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Hiking Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Spectacular sunrise over the Himalayas from Nagarkot viewpoint",
                "Panoramic mountain views including Everest, Langtang, and Ganesh Himal",
                "Scenic downhill hike through pine forests and terraced farmlands",
                "Pass through traditional villages with authentic rural life",
                "Visit Changunarayan Temple, Nepal's oldest temple (4th century UNESCO site)",
                "Exquisite stone sculptures and Licchavi-era art at the temple",
                "Continuous mountain views throughout the hike",
                "Excellent photography opportunities at multiple locations",
                "Hot breakfast at Nagarkot with mountain views",
                "Picnic lunch near the ancient temple",
                "Knowledgeable guide sharing insights about culture and history",
                "Perfect combination of nature and heritage in one day",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Best Time for Hiking</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Spring (Mar-May)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Pleasant temperatures, blooming rhododendrons, and excellent mountain visibility. Ideal for sunrise views and comfortable hiking.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and exceptional mountain views. Post-monsoon clarity offers the best chance to see Everest.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air and excellent visibility. Cold mornings but clear skies. Snow-capped peaks are spectacular. Fewer crowds on the trail.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings clouds and rain, limiting mountain views. The trail can be slippery but the landscape is lush and green.</p>
          </div>
        </section>

        {/* Nagarkot Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <SunriseIcon className="w-4 h-4" aria-hidden="true" /> Nagarkot - The Sunrise Viewpoint
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Elevation:</strong> 2,175 meters above sea level, offering unobstructed views of the Himalayan range.</li>
                    <li><strong>Himalayan Views:</strong> On clear days, you can see peaks from Annapurna in the west to Everest in the east, including Ganesh Himal (7,407m), Langtang Lirung (7,227m), Dorje Lakpa (6,975m), and Mount Everest (8,848m).</li>
                    <li><strong>Sunrise:</strong> The main attraction is the spectacular sunrise, when the first light illuminates the snow-capped peaks in golden hues. The viewing towers provide excellent vantage points.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Weather:</strong> Early mornings are cold year-round. Temperatures can drop to near freezing in winter. Warm clothing is essential.</li>
                    <li><strong>Best Time:</strong> October-November and March-April offer the clearest skies and best visibility. Winter also offers clear views but colder temperatures.</li>
                    <li><strong>Facilities:</strong> Viewing towers, cafés, and restaurants are available at the viewpoint for breakfast and hot drinks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changunarayan Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Changunarayan Temple - Nepal's Oldest Temple
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> Dating back to the 4th century, Changunarayan is the oldest Hindu temple in Nepal. It was built by King Mandev of the Licchavi dynasty and has been continuously worshiped for over 1,700 years. The temple is dedicated to Lord Vishnu.</li>
                    <li><strong>Architecture:</strong> The two-story pagoda-style temple is adorned with exquisite stone, wood, and metal craft. The temple's struts, doors, and windows are decorated with images of deities and mythological scenes.</li>
                    <li><strong>Stone Inscriptions:</strong> The temple complex contains the oldest stone inscription in Nepal, dating to 464 CE, which provides valuable information about the Licchavi dynasty.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-green-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Important Sculptures:</strong> The temple is renowned for its 5th to 8th-century stone sculptures, including the Vishwaroop (the cosmic form of Vishnu), the Vishnu Vikrant (Vishnu's giant stride), and the Garuda (Vishnu's eagle mount).</li>
                    <li><strong>UNESCO Status:</strong> Changunarayan was designated a UNESCO World Heritage Site in 1979 as part of the Kathmandu Valley UNESCO designation.</li>
                    <li><strong>Surrounding Village:</strong> The small village of Changunarayan has preserved its traditional character, with brick houses and carved windows, offering a glimpse into rural Newari life.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trail Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Map className="w-4 h-4" aria-hidden="true" /> Trail Details & Difficulty
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Total Distance:</strong> Approximately 12-15 kilometers one way</li>
                    <li><strong>Total Descent:</strong> Approximately 650 meters from Nagarkot to Changunarayan</li>
                    <li><strong>Hiking Time:</strong> 4-5 hours (mostly downhill, some gentle ups)</li>
                    <li><strong>Trail Condition:</strong> Well-defined trail with stone steps, forest paths, and village sections. Can be slippery after rain.</li>
                    <li><strong>Difficulty:</strong> Easy to Moderate. Mostly downhill makes it accessible for most fitness levels.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Trail Type:</strong> One-way trail (vehicle meets you at the end)</li>
                    <li><strong>Start Elevation:</strong> 2,175 meters at Nagarkot</li>
                    <li><strong>End Elevation:</strong> 1,541 meters at Changunarayan</li>
                    <li><strong>Water Sources:</strong> Available at villages along the route</li>
                    <li><strong>Facilities:</strong> Tea houses and rest stops at villages along the way</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Bring - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2 text-sm">
                <Backpack className="w-4 h-4" aria-hidden="true" /> What to Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-purple-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Footwear:</strong> Sturdy hiking shoes or boots with good grip (essential)</li>
                    <li><strong>Clothing:</strong> Warm layers for early morning (temperatures can be near freezing at Nagarkot), comfortable hiking clothes for later</li>
                    <li><strong>Jacket:</strong> Warm insulated jacket for sunrise, windproof outer layer</li>
                    <li><strong>Hat and Gloves:</strong> Essential for cold morning at Nagarkot</li>
                    <li><strong>Sun Protection:</strong> Hat, sunglasses, sunscreen for later in the day</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-purple-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Daypack:</strong> Small backpack for your personal items</li>
                    <li><strong>Camera:</strong> Essential for sunrise and mountain photography</li>
                    <li><strong>Water:</strong> At least 1-2 liters (provided, but carry in your pack)</li>
                    <li><strong>Snacks:</strong> Energy bars, nuts, or chocolate (optional, meals provided)</li>
                    <li><strong>Personal Items:</strong> Any medications, hand sanitizer, tissues</li>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Hiking Itinerary</h2>
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

        {/* Elevation Profile - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
              <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> Elevation Profile
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Nagarkot (Start)</span>
                  <span className="text-sm font-bold text-[#14383b]">2,175m</span>
                </div>
                <div className="w-full h-2 bg-[#d8cec0] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-green-400 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Mid-point</span>
                  <span className="text-sm font-bold text-[#14383b]">~1,850m</span>
                </div>
                <div className="w-full h-2 bg-[#d8cec0] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-blue-600 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Changunarayan (End)</span>
                  <span className="text-sm font-bold text-[#14383b]">1,541m</span>
                </div>
                <p className="text-sm text-[#66706d] mt-2">Total descent: approximately 650 meters (mostly downhill hiking)</p>
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
              A visual journey from the spectacular Nagarkot sunrise to the ancient Changunarayan Temple.
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
                  q: "Can I really see Mount Everest from Nagarkot?",
                  a: "On exceptionally clear days, particularly in autumn and spring, Mount Everest can be seen from Nagarkot as a distant peak on the eastern horizon. More commonly, you'll see closer peaks like Ganesh Himal, Langtang Lirung, and the Jugal range. The view is spectacular regardless, with dozens of snow-capped peaks visible. Your guide can help identify the mountains.",
                },
                {
                  q: "Is the hike difficult?",
                  a: "The hike is mostly downhill from Nagarkot to Changunarayan, making it accessible for most fitness levels. There are some gentle uphill sections, but overall it's considered easy to moderate. You should be comfortable walking for 4-5 hours with breaks. The pace is relaxed with plenty of stops for photos and rest.",
                },
                {
                  q: "What if it's cloudy on the day of my hike?",
                  a: "Weather in the Himalayas can be unpredictable. If the forecast suggests very poor visibility, we can discuss rescheduling or offer alternative options. However, even on cloudy days, the sunrise can be beautiful with colors painting the clouds, and the hike through villages and forests is still enjoyable. The temple visit is unaffected by weather.",
                },
                {
                  q: "What should I wear for the early morning cold?",
                  a: "Dress in warm layers that you can remove as the day warms up. Essential items include: thermal base layer, fleece or wool mid-layer, insulated jacket, warm hat, gloves, and a scarf. Sturdy hiking shoes are essential. Your guide will have extra layers in case needed.",
                },
                {
                  q: "Is this hike suitable for children?",
                  a: "Yes, this hike is suitable for active children aged 8 and above. The mostly downhill trail is manageable, and children usually enjoy the sunrise experience and exploring the ancient temple. Please inform us when booking so we can make appropriate arrangements.",
                },
                {
                  q: "What is the significance of Changunarayan Temple?",
                  a: "Changunarayan is the oldest Hindu temple in Nepal, dating back to the 4th century. It contains some of the finest examples of Licchavi period art, including stone sculptures that are masterpieces of Nepalese art. The temple has been continuously worshiped for over 1,700 years, making it a living link to Nepal's ancient past.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Sunrise Adventure?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Nagarkot-Changunarayan Hiking Adventure today and experience the magic of a Himalayan sunrise combined with ancient cultural heritage.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={`/contact?trek=${encodeURIComponent(trekName)}`}>
                <Button className="bg-[#cf6943] hover:bg-[#b85a38] text-white font-bold rounded-full px-6 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Book This Hike
                </Button>
              </Link>
              <a 
                href={`https://wa.me/9779841376470?text=${encodeURIComponent(`Hello, I would like to inquire about the ${trekName}.`)}`}
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