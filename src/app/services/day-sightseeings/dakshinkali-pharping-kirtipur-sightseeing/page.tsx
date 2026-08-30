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
  TreePine,
  Home,
  MountainSnow,
  Eye,
  Sunset,
  Droplet,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const itinerary = [
  {
    day: 1,
    title: "Dakshinkali, Pharping & Kirtipur Sightseeing Tour",
    altitude: "1,350m → 1,450m → 1,500m → 1,400m → 1,350m",
    distance: "Full day tour (6-7 hours)",
    description: "Your full-day spiritual and cultural tour begins after breakfast at 9:00 AM when your private guide and driver will pick you up from your hotel in Kathmandu. You'll first drive to Dakshinkali (approximately 45 minutes), one of the most important Hindu temples dedicated to the goddess Kali. Spend approximately 1 hour experiencing this powerful sacred site, especially vibrant on Tuesdays and Saturdays when animal sacrifices take place. Next, drive to nearby Pharping (15 minutes), an ancient Newari town and important Buddhist pilgrimage site. Spend approximately 2 hours exploring the sacred caves where Guru Rinpoche meditated, visiting the monasteries, and experiencing the unique blend of Hindu and Buddhist traditions. Enjoy a traditional Nepali lunch at a local restaurant in Pharping. In the afternoon, drive to Kirtipur (30 minutes), a historic Newari hilltop town with panoramic valley views. Spend approximately 2 hours exploring its ancient temples, narrow streets, and enjoying the peaceful atmosphere. Your guide will then drive you back to Kathmandu, arriving at your hotel by approximately 4:30 PM.",
    overnight: "Not applicable - day tour",
    meals: "Breakfast, Lunch",
    highlights: ["Dakshinkali Temple", "Pharping meditation caves", "Buddhist monasteries", "Kirtipur hilltop town", "Panoramic valley views"],
  },
];

const includes = [
  "Private vehicle with driver for the full day",
  "Experienced English-speaking tour guide (Hindu and Buddhist culture expert)",
  "Dakshinkali Temple donation",
  "Pharping monastery donations",
  "Kirtipur temple entrance fees",
  "Traditional Nepali lunch at local restaurant",
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
    src: "/images/used/dakshinkali-1.webp",
    alt: "Dakshinkali Temple",
    caption: "Dakshinkali Temple - Sacred Hindu shrine dedicated to Goddess Kali",
  },
  {
    src: "/images/used/pharping-2.webp",
    alt: "Pharping Monastery",
    caption: "Buddhist monastery in Pharping, important pilgrimage site",
  },
  {
    src: "/images/used/kirtipur-2.webp",
    alt: "Kirtipur Hilltop",
    caption: "Historic Kirtipur town with panoramic valley views",
  },
];

export default function DakshinkaliPharpingKirtipurSightseeingPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedDays, setExpandedDays] = React.useState<number[]>([1]);

  const tourName = "Dakshinkali, Pharping & Kirtipur Sightseeing Tour";

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
      const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Dakshinkali, Pharping & Kirtipur Sightseeing Tour - Himkala Adventure")}`;
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
                  Dakshinkali, Pharping <br />
                  <span className="text-[#cf6943]">& Kirtipur Sightseeing Tour</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Discover the sacred heart of Nepal's spiritual traditions—from the powerful Goddess Kali temple at Dakshinkali 
                  to the ancient meditation caves of Pharping and the historic hilltop town of Kirtipur.
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
                    Hindu & Buddhist
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
              src="/images/used/dakshinkali-2.webp"
              alt="Dakshinkali Temple, Pharping meditation caves and Kirtipur sightseeing tour - spiritual and cultural journey in Nepal"
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
              { label: "Duration", value: "6-7 Hours" },
              { label: "Group Size", value: "1-12 people" },
              { label: "Faiths", value: "Hindu & Buddhist" },
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
                The <strong className="text-[#14383b]">Dakshinkali, Pharping & Kirtipur Sightseeing Tour</strong> is 
                a unique journey into the spiritual heart of Nepal, exploring sites sacred to both Hindus and Buddhists. 
                This tour offers a rare glimpse into the living traditions of Tantric Hinduism, ancient Buddhist 
                meditation caves, and a historic hilltop town that has preserved its medieval character.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Dakshinkali Temple</strong>, located about 22 kilometers south of 
                Kathmandu, is one of the most important Hindu temples in Nepal. Dedicated to the goddess Kali, the 
                fierce form of Durga, this temple is a major pilgrimage site, especially on Tuesdays and Saturdays 
                when animal sacrifices are offered. The temple is situated in a scenic gorge where a stream flows, 
                creating a powerful and atmospheric setting.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Pharping</strong>, also known as Pharping, is an ancient Newari 
                town that has become one of the most important Buddhist pilgrimage sites in Nepal. It was here that 
                Guru Rinpoche (Padmasambhava) meditated in a cave and achieved enlightenment, bringing Buddhism to 
                Tibet. Today, Pharping is home to numerous monasteries, sacred caves, and a vibrant community of 
                monks and nuns from various Tibetan Buddhist traditions.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The tour concludes at <strong className="text-[#14383b]">Kirtipur</strong>, a historic Newari hilltop 
                town that was once an independent kingdom. Overlooking the Kathmandu Valley, Kirtipur has preserved 
                its traditional character with narrow streets, brick houses, and ancient temples. Its strategic 
                location has made it a witness to pivotal moments in Nepalese history, and its peaceful atmosphere 
                offers a perfect end to this spiritual journey.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Important:</strong> Animal sacrifice is a traditional practice at Dakshinkali, especially on 
              Tuesdays and Saturdays. If you are sensitive to this, please inform your guide for a visit on a 
              quieter day. Modest dress is required at all religious sites.
            </div>
          </div>
        </section>

        {/* Highlights - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Visit Dakshinkali Temple, one of Nepal's most powerful Hindu shrines",
                "Experience the vibrant atmosphere on Tuesday or Saturday (animal sacrifice days)",
                "Explore the sacred meditation caves of Pharping where Guru Rinpoche practiced",
                "Visit Buddhist monasteries representing different Tibetan traditions",
                "See the Asura Cave and Yangleshö Cave, important pilgrimage sites",
                "Discover the ancient Newari town of Pharping with its unique culture",
                "Explore historic Kirtipur, a hilltop town with panoramic valley views",
                "Visit the Bagh Bhairab Temple and Uma Maheshwar Temple in Kirtipur",
                "Enjoy traditional Nepali lunch at a local restaurant",
                "Learn about the syncretic blend of Hindu and Buddhist traditions",
                "Panoramic photography opportunities from Kirtipur's hilltop",
                "Peaceful atmosphere away from the main tourist crowds",
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
                  Pleasant temperatures and clear mornings. Ideal for exploring temples and caves. The hillsides are lush and green.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Excellent</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Autumn (Sep-Nov)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Crystal-clear skies, perfect temperatures, and important religious festivals. Ideal time for pilgrimage and photography.
                </p>
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Best Season</span>
              </div>
              <div className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Snowflake className="w-5 h-5 text-[#cf6943]" aria-hidden="true" />
                  <h3 className="font-semibold text-[#14383b]">Winter (Dec-Feb)</h3>
                </div>
                <p className="text-[#556363] text-sm leading-relaxed">
                  Cool, clear days with excellent visibility. Fewer tourists. Morning fog may delay start but usually clears by mid-morning.
                </p>
                <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">Good</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#66706d]">Note: The tour operates year-round. For the full Dakshinkali experience with animal sacrifices, plan your visit on a Tuesday or Saturday.</p>
          </div>
        </section>

        {/* Dakshinkali Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-sm">
                <Droplet className="w-4 h-4" aria-hidden="true" /> Dakshinkali Temple - The Goddess Kali's Shrine
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-red-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Goddess Kali:</strong> Dakshinkali is dedicated to Kali, the fierce form of Durga, who represents time, change, and power. She is depicted as a dark goddess with a necklace of skulls, holding weapons and the head of a demon. Worshipers seek her protection and blessings.</li>
                    <li><strong>Animal Sacrifice:</strong> The temple is famous for its animal sacrifices, particularly on Tuesdays and Saturdays, which are considered auspicious for Kali. Devotees offer chickens, goats, and sometimes buffalo to the goddess, believing that the sacrifice pleases her and brings blessings.</li>
                    <li><strong>Temple Layout:</strong> The temple is situated in a scenic gorge where a small stream flows. The main shrine houses the black stone image of Kali.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-red-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Pilgrimage Site:</strong> Thousands of devotees visit Dakshinkali daily, with crowds swelling to tens of thousands on special festival days. The atmosphere is intense and devotional, offering a glimpse into living Hinduism.</li>
                    <li><strong>Festivals:</strong> The biggest celebrations occur during Dashain (October) when animal sacrifices are offered throughout the festival.</li>
                    <li><strong>Photography Note:</strong> Photography is permitted in the temple complex, but be respectful during sacrifices. Your guide will advise on appropriate behavior.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pharping Details - Free Walking Tour Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                <Church className="w-4 h-4" aria-hidden="true" /> Pharping - Sacred Buddhist Pilgrimage
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Guru Rinpoche's Cave:</strong> The most sacred site in Pharping is the cave where Guru Rinpoche (Padmasambhava) meditated and achieved enlightenment in the 8th century. He is credited with bringing Buddhism to Tibet and is revered as a second Buddha.</li>
                    <li><strong>Asura Cave:</strong> Another important meditation cave where Guru Rinpoche practiced and subdued negative forces. The cave contains a footprint believed to be his and is a powerful place for meditation.</li>
                    <li><strong>Yangleshö Cave:</strong> This cave complex is where Guru Rinpoche performed important tantric practices. It is now part of a larger monastery complex with beautiful murals and statues.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-amber-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Monasteries:</strong> Pharping is home to numerous monasteries representing different Tibetan Buddhist traditions. Visitors can observe monks in prayer, study, and debate.</li>
                    <li><strong>Newari Town:</strong> Beyond its Buddhist significance, Pharping is a traditional Newari town with brick houses, carved windows, and ancient temples. The blend of Hindu and Buddhist traditions is visible throughout the town.</li>
                    <li><strong>Pilgrimage Circuit:</strong> For serious practitioners, Pharping is part of a larger pilgrimage circuit that includes Namo Buddha and other sacred sites in the Kathmandu Valley.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kirtipur Details - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm">
                <Landmark className="w-4 h-4" aria-hidden="true" /> Kirtipur - Hilltop Historic Town
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>History:</strong> Kirtipur is an ancient Newari town that was once an independent kingdom. It was conquered by Prithvi Narayan Shah in 1767 during his unification of Nepal, and its resistance became legendary. The town's name means "City of Glory."</li>
                    <li><strong>Bagh Bhairab Temple:</strong> The most important temple in Kirtipur, dedicated to Bhairab, the fierce form of Shiva. The temple features a striking stone image of the deity and intricate woodcarvings.</li>
                    <li><strong>Uma Maheshwar Temple:</strong> This beautiful temple dedicated to Shiva and Parvati is one of the finest examples of Newari architecture in the valley.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5">
                    <li><strong>Chilancho Stupa:</strong> A large Buddhist stupa on the hilltop offering panoramic views of the Kathmandu Valley and, on clear days, the Himalayan range.</li>
                    <li><strong>Traditional Architecture:</strong> Kirtipur has preserved its medieval character remarkably well. Narrow brick-paved streets wind between traditional Newari houses with carved windows and doors.</li>
                    <li><strong>Panoramic Views:</strong> From its hilltop location, Kirtipur offers stunning views of the Kathmandu Valley, including the distant Himalayas. The sunset view from here is particularly beautiful.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary - Free Walking Tour Style (Accordion) */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
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

        {/* Spiritual Heritage Timeline - Free Walking Tour Style */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="bg-[#f7f2e9] p-6 rounded-lg border border-[#d8cec0]/30">
              <h3 className="font-bold text-[#14383b] mb-4 flex items-center gap-2 text-sm">
                <History className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> Spiritual Heritage Timeline
              </h3>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <div className="w-20 text-xs font-bold text-[#cf6943]">8th Century</div>
                  <div className="text-sm text-[#556363]">Guru Rinpoche meditates in Pharping caves and achieves enlightenment</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-20 text-xs font-bold text-[#cf6943]">12th Century</div>
                  <div className="text-sm text-[#556363]">Kirtipur established as an independent Newari kingdom</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-20 text-xs font-bold text-[#cf6943]">17th Century</div>
                  <div className="text-sm text-[#556363]">Dakshinkali Temple becomes major pilgrimage site</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-20 text-xs font-bold text-[#cf6943]">1767</div>
                  <div className="text-sm text-[#556363]">Kirtipur conquered by Prithvi Narayan Shah during unification</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-20 text-xs font-bold text-[#cf6943]">1970s</div>
                  <div className="text-sm text-[#556363]">Tibetan monasteries established in Pharping by exiled lamas</div>
                </div>
              </div>
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
              A spiritual journey through Nepal's sacred Hindu and Buddhist sites.
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
                  q: "What days are best for visiting Dakshinkali?",
                  a: "Tuesdays and Saturdays are the most vibrant days at Dakshinkali, when animal sacrifices are offered. These days offer the most authentic experience of Hindu devotion but can be crowded and intense. If you prefer a quieter visit, any other day is also meaningful, though you won't see sacrifices. Your guide can help you choose based on your preferences.",
                },
                {
                  q: "Who was Guru Rinpoche and why is Pharping important?",
                  a: "Guru Rinpoche (Padmasambhava) was an 8th-century Buddhist master who is credited with bringing Buddhism to Tibet. He meditated in caves in Pharping and achieved enlightenment, making this one of the most important Buddhist pilgrimage sites in the world. Tibetan Buddhists believe he is a second Buddha, and visiting his meditation caves is considered highly meritorious.",
                },
                {
                  q: "Can I meditate in the caves at Pharping?",
                  a: "Yes, visitors are welcome to meditate quietly in the caves. Many pilgrims do so, and the atmosphere is conducive to contemplation. Your guide can help you find a quiet time. Be respectful of others who may be engaged in their own practice. Some caves have designated meditation areas.",
                },
                {
                  q: "Is Kirtipur worth visiting after seeing other durbar squares?",
                  a: "Absolutely. Kirtipur offers something different from the main durbar squares. It's a living town rather than a museum, with a peaceful, authentic atmosphere. Its hilltop location provides stunning valley views, and its temples and architecture are beautiful but less crowded. It's a wonderful place to experience traditional Newari life away from tourist crowds.",
                },
                {
                  q: "How much walking is involved in this tour?",
                  a: "The tour involves moderate walking, approximately 2-3 hours total throughout the day. The terrain is generally easy, though there are some stairs at temple sites and uneven stone streets in Kirtipur. The pace is leisurely with plenty of time for rest and photography. The vehicle is always nearby.",
                },
                {
                  q: "Can I combine this tour with other nearby attractions?",
                  a: "Yes, depending on your interests and time, this tour can be extended to include Namo Buddha (another important Buddhist pilgrimage site) or additional time in any of the locations. Please inquire when booking for a customized itinerary. The standard tour is designed to be relaxed and comprehensive.",
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Ready for a Spiritual Journey?</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Book your Dakshinkali, Pharping & Kirtipur Sightseeing Tour today and discover the sacred heart of Nepal's spiritual traditions.
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