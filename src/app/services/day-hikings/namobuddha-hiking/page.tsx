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
  Scroll,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Namobuddha Hiking Adventure",
    altitude: "1,350m → 1,750m → 1,350m",
    distance: "7-8 hours (4-5 hours hiking)",
    description: "Your spiritual hiking adventure begins at 7:30 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll drive approximately 1.5 hours to the trailhead near Dhulikhel, a scenic town on the eastern rim of the Kathmandu Valley. Your hike begins with a gentle ascent through pine forests and terraced farmlands, offering beautiful views of the surrounding hills and, on clear days, the Himalayan range. After approximately 1.5-2 hours of hiking, you'll arrive at Namobuddha, one of the most sacred Buddhist pilgrimage sites in Nepal. This is where, according to ancient legend, a prince gave his body to a starving tigress and her cubs, an act of ultimate compassion that exemplifies the Buddhist ideal of selflessness. At the hilltop, you'll find the beautiful Thrangu Tashi Yangtse Monastery, a stunning example of Tibetan Buddhist architecture with its golden roofs, prayer flags, and peaceful courtyards. You'll also visit the ancient stupa that marks the site of the prince's self-sacrifice. Spend time exploring the monastery complex, observing monks in prayer, and soaking in the serene atmosphere with panoramic views of the Himalayas. Enjoy a peaceful picnic lunch overlooking the mountains. After lunch, you'll have free time for meditation, photography, or exploring further. Your driver will meet you at Namobuddha for the drive back to Kathmandu, arriving at your hotel by approximately 4:00 PM.",
    overnight: "Not applicable - day hike",
    meals: "Breakfast, Picnic Lunch",
    highlights: ["Visit sacred Namobuddha stupa and monastery", "Legend of the prince's self-sacrifice to a starving tigress", "Beautiful Thrangu Tashi Yangtse Monastery", "Panoramic Himalayan views", "Peaceful meditation atmosphere", "Scenic hike through forests and villages"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking hiking guide",
  "Picnic lunch with mountain views",
  "Bottled water (2 liters per person)",
  "Monastery donation",
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
    src: "/images/used/namobuddha-8.webp",
    alt: "Namobuddha Stupa",
    caption: "The sacred Namobuddha stupa marking the site of the prince's self-sacrifice",
  },
  {
    src: "/images/used/namobuddha-7.webp",
    alt: "Thrangu Tashi Yangtse Monastery",
    caption: "Beautiful Thrangu Tashi Yangtse Monastery at Namobuddha",
  },
  {
    src: "/images/used/namobuddha-5.webp",
    alt: "Himalayan Views",
    caption: "Panoramic views from Namobuddha hilltop",
  },
  {
    src: "/images/used/namobuddha-4.webp",
    alt: "Prayer Flags",
    caption: "Colorful prayer flags fluttering at the monastery",
  },
  {
    src: "/images/used/namobuddha-3.webp",
    alt: "Hiking Trail",
    caption: "Beautiful hiking trail through pine forests",
  },
  {
    src: "/images/used/namobuddha-6.webp",
    alt: "Monks at Prayer",
    caption: "Buddhist monks in prayer at the monastery",
  },
];

export default function NamobuddhaHikingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const trekName = "Namobuddha Hiking Adventure";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Namobuddha Hiking - Himkala Adventure")}`;
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
                  Namobuddha <br />
                  <span className="text-[#cf6943]">Day Hiking Adventure</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Hike to one of Nepal's most sacred Buddhist pilgrimage sites, where a prince's act of ultimate compassion 
                  is commemorated—explore ancient stupas, beautiful monasteries, and enjoy panoramic Himalayan views.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    Easy to Moderate
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    <Scroll className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    Spiritual Journey
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    1,750m
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
              src="/images/used/namobuddha-1.webp"
              alt="Namobuddha Buddhist pilgrimage site with monastery, stupa, and Himalayan mountain views in Nepal"
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
                $50 / person
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Free Walking Tour Style */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "7-8 Hours" },
              { label: "Group Size", value: "1-8 people" },
              { label: "Max Altitude", value: "1,750m" },
              { label: "Hiking Time", value: "4-5 Hours" },
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
                The <strong className="text-[#14383b]">Namobuddha Hiking Adventure</strong> is a unique spiritual 
                journey to one of the most sacred Buddhist pilgrimage sites in Nepal. Combining a scenic hike through 
                pine forests and terraced farmlands with a visit to an ancient stupa and beautiful monastery, this 
                day trip offers peace, inspiration, and breathtaking Himalayan views.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Namobuddha</strong> holds profound significance in Buddhist 
                tradition. According to ancient legend, it was here that a prince, in a previous life of the Buddha, 
                encountered a starving tigress with her cubs. Overcome with compassion, he offered his own body to 
                save them from starvation. This ultimate act of selflessness, known as the "Mahadan" (Great Gift), 
                is commemorated at this sacred site and exemplifies the Buddhist ideal of compassion for all beings.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                At the hilltop, you'll find the ancient <strong className="text-[#14383b]">Namobuddha Stupa</strong> 
                marking the exact spot of the prince's sacrifice, surrounded by prayer flags and offering stunning 
                panoramic views of the Himalayan range. Adjacent to the stupa is the magnificent 
                <strong className="text-[#14383b]"> Thrangu Tashi Yangtse Monastery</strong>, a vibrant center of 
                Tibetan Buddhism with golden roofs, beautifully painted murals, and peaceful courtyards where monks 
                engage in prayer and study.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The hike itself is a gentle ascent through scenic countryside, offering glimpses of rural Nepalese 
                life and ever-expanding mountain views. Whether you're a Buddhist seeking spiritual connection, a 
                nature lover, or simply someone looking for a peaceful day away from the city, Namobuddha offers an 
                experience that touches the heart and soul. With an expert guide to share the stories and significance 
                of this sacred place, this day hike is truly unforgettable.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Namobuddha is an active pilgrimage site and monastery. Dress modestly 
              (shoulders and knees covered), speak softly, and ask permission before photographing monks. Remove 
              shoes before entering temple buildings.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Hiking Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Visit the sacred Namobuddha Stupa, a major Buddhist pilgrimage site",
                "Learn the moving legend of the prince's self-sacrifice to a starving tigress",
                "Explore the beautiful Thrangu Tashi Yangtse Monastery",
                "Observe monks in prayer and daily life at the monastery",
                "Panoramic views of the Himalayan range including Ganesh Himal and Langtang",
                "Peaceful atmosphere perfect for meditation and reflection",
                "Scenic hike through pine forests and terraced farmlands",
                "Experience rural Nepalese village life along the trail",
                "Excellent photography opportunities of mountains and monastery",
                "Picnic lunch with breathtaking mountain views",
                "Knowledgeable guide sharing Buddhist philosophy and local culture",
                "Less crowded than other Kathmandu Valley day trips",
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
                  Pleasant temperatures, blooming rhododendrons, and excellent mountain visibility. Ideal for hiking and photography.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and exceptional mountain views. Post-monsoon clarity offers the best Himalayan visibility.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crisp clear air and excellent visibility. Cool but pleasant hiking conditions. Fewer visitors, offering a more peaceful experience.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: Monsoon (Jun-Aug) brings clouds and rain, limiting mountain views. The trail can be slippery but the landscape is lush and green. Monastery visits are unaffected.</p>
          </div>
        </section>

        {/* Namobuddha Legend - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Scroll className="w-4 h-4" aria-hidden="true" /> The Legend of Namobuddha
              </h3>
              <div className="space-y-2">
                <p className="text-amber-700 text-sm leading-relaxed">
                  According to Buddhist tradition, long ago in a past life, the Buddha was born as a prince named Mahasattva. One day, while walking in the forest with his brothers, he came upon a starving tigress who had just given birth to cubs. Weak from hunger, the tigress was about to eat her own young to survive.
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Overwhelmed with compassion, the prince sent his brothers away and offered his own body to the tigress. At first, the tigress was too weak to even bite him, so the prince cut himself and let her drink his blood, restoring her strength enough to eat. He then allowed the tigress to consume his body, saving her and her cubs from starvation.
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This ultimate act of self-sacrifice, known as the "Mahadan" (Great Gift), is commemorated at Namobuddha. The name itself means "Homage to the Buddha," honoring this profound act of compassion. The site has been a major pilgrimage destination for Buddhists for over 2,000 years, and the stupa marks the exact spot where this miraculous event took place.
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This story exemplifies the Buddhist ideal of compassion for all beings and the perfection of giving (dana paramita). Pilgrims from around the world come to Namobuddha to meditate, make offerings, and connect with this powerful example of selflessness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thrangu Tashi Yangtse Monastery - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Thrangu Tashi Yangtse Monastery
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-red-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> The monastery was established in 1976 by the Ven. Thrangu Rinpoche, a highly respected teacher of the Kagyu school of Tibetan Buddhism. It serves as a monastic college for over 300 monks and nuns, preserving and transmitting Buddhist teachings.</li>
                    <li><strong>Architecture:</strong> The monastery is a stunning example of traditional Tibetan Buddhist architecture, with golden roofs, beautifully painted murals, and intricately carved woodwork. The main prayer hall houses magnificent statues of Buddha, Chenrezig, and Padmasambhava.</li>
                    <li><strong>Stupa:</strong> Adjacent to the monastery is the ancient Namobuddha Stupa, which predates the monastery by many centuries. It contains relics and is a focal point for pilgrimage.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-red-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Monastic Life:</strong> Visitors can observe monks engaged in daily activities including prayer sessions, debates, and studies. The monastery follows a strict schedule of rituals and teachings that have been preserved for centuries.</li>
                    <li><strong>Meditation:</strong> The monastery offers opportunities for meditation, either in the main hall or in quieter corners. The peaceful atmosphere is conducive to mindfulness and reflection.</li>
                    <li><strong>Views:</strong> From the monastery grounds, you'll enjoy spectacular panoramic views of the Himalayan range including Ganesh Himal, Langtang, and on clear days, Everest in the distance.</li>
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
                    <li><strong>Total Distance:</strong> Approximately 6-8 kilometers round trip</li>
                    <li><strong>Total Ascent:</strong> Approximately 400 meters from trailhead to Namobuddha</li>
                    <li><strong>Hiking Time:</strong> 1.5-2 hours up, 1.5 hours down (total 3-4 hours hiking)</li>
                    <li><strong>Trail Condition:</strong> Well-defined dirt trail with stone steps, forest paths, and village sections. Can be slippery after rain.</li>
                    <li><strong>Difficulty:</strong> Easy to Moderate. Gentle ascent suitable for most fitness levels.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Trail Type:</strong> Out-and-back or loop options available</li>
                    <li><strong>Maximum Elevation:</strong> 1,750 meters at Namobuddha</li>
                    <li><strong>Minimum Elevation:</strong> Approximately 1,350 meters at trailhead</li>
                    <li><strong>Water Sources:</strong> Available at villages along the route</li>
                    <li><strong>Facilities:</strong> Basic tea houses and restrooms at Namobuddha</li>
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
                    <li><strong>Clothing:</strong> Comfortable hiking clothes, moisture-wicking layers</li>
                    <li><strong>Jacket:</strong> Light fleece or windproof jacket (weather can change)</li>
                    <li><strong>Rain Gear:</strong> Waterproof jacket or poncho (especially in monsoon)</li>
                    <li><strong>Sun Protection:</strong> Hat, sunglasses, sunscreen</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-purple-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Daypack:</strong> Small backpack for your personal items</li>
                    <li><strong>Water:</strong> At least 1-2 liters (provided, but carry in your pack)</li>
                    <li><strong>Camera:</strong> Essential for mountain and monastery photography</li>
                    <li><strong>Offerings:</strong> Small denomination rupees for donations at the monastery</li>
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
                  <span className="text-sm text-[#66706d]">Trailhead (Dhulikhel area)</span>
                  <span className="text-sm font-bold text-[#14383b]">1,350m</span>
                </div>
                <div className="w-full h-2 bg-[#d8cec0] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-amber-600 rounded-full" style={{ width: '77%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Mid-point</span>
                  <span className="text-sm font-bold text-[#14383b]">1,550m</span>
                </div>
                <div className="w-full h-2 bg-[#d8cec0] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-red-400 rounded-full" style={{ width: '50%', marginLeft: '77%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#66706d]">Namobuddha (Summit)</span>
                  <span className="text-sm font-bold text-[#14383b]">1,750m</span>
                </div>
                <p className="text-sm text-[#66706d] mt-2">Total ascent: approximately 400 meters (gentle, steady climb)</p>
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
              A visual journey to the sacred Buddhist pilgrimage site of Namobuddha.
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
                  q: "Is Namobuddha an active monastery?",
                  a: "Yes, Namobuddha is a thriving monastic community with over 300 monks and nuns in residence. The Thrangu Tashi Yangtse Monastery is an active center for Buddhist study and practice. Visitors are welcome to observe prayers and meditation, and you'll likely see monks engaged in their daily activities, creating a vibrant and authentic spiritual atmosphere.",
                },
                {
                  q: "Can I meditate at Namobuddha?",
                  a: "Absolutely! The peaceful atmosphere of Namobuddha is perfect for meditation. You can meditate in the main prayer hall (when not in use), in the stupa area, or in quieter corners of the monastery grounds. Your guide can help find a suitable spot. Many visitors find the energy of this sacred site deeply conducive to meditation.",
                },
                {
                  q: "What are the chances of seeing the Himalayas?",
                  a: "On clear days, particularly in autumn (September-November) and spring (March-May), the Himalayan views from Namobuddha are spectacular. You can see Ganesh Himal, the Langtang range, and on exceptionally clear days, even Mount Everest in the distance. Winter also offers good visibility. During monsoon, views are limited due to clouds, but the lush green landscape has its own beauty.",
                },
                {
                  q: "Is this hike suitable for beginners?",
                  a: "Yes, this hike is suitable for beginners with a reasonable level of fitness. The ascent is gentle (about 400 meters over 1.5-2 hours) and the trail is well-defined. We take regular breaks, and the pace is relaxed. Most people with basic fitness can complete this hike comfortably.",
                },
                {
                  q: "Can I combine Namobuddha with other nearby sites?",
                  a: "Yes, Namobuddha can be combined with a visit to Dhulikhel, a scenic hill town nearby, or with Panauti, a historic Newari village. If you have interest in extending your day, please inquire when booking. The standard hike focuses on Namobuddha to allow ample time for a relaxed experience.",
                },
                {
                  q: "What should I wear to the monastery?",
                  a: "Modest dress is required at the monastery. Shoulders and knees should be covered. Avoid wearing revealing clothing. Comfortable hiking clothes that meet these requirements are ideal. You'll need to remove shoes before entering temple buildings, so wearing easily removable footwear is helpful.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for Your Spiritual Journey?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Namobuddha Hiking Adventure today and experience the peace and inspiration of one of Nepal's most sacred Buddhist sites.
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