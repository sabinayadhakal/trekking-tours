"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  MapPin,
  Copy,
  Check,
  Star,
  Heart,
  AlertTriangle,
  CheckCircle2,
  Landmark,
  Coffee,
  ShoppingBag,
  MountainSnow,
  Church,
  Footprints,
  MessageCircle,
  Calendar,
  Compass,
  Camera,
  Shield,
  Globe,
  ChevronDown,
  Sun,
  Thermometer,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.freetourkathmandu.com";
const PAGE_URL = `${SITE_URL}/free-walking-tour-kathmandu`;
const TOUR_NAME = "Free Walking Tour Kathmandu";
const TOUR_IMAGE = `${SITE_URL}/images/used/fwt-1.webp`;
const PRICE_NPR = "0";
const CURRENCY = "NPR";
const RATING_VALUE = "4.9";
const REVIEW_COUNT = "1000";
const DURATION_ISO = "PT4H30M";
const LATITUDE = "27.7148";
const LONGITUDE = "85.3145";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const tourStops = [
  {
    name: "Kathe Swoyambhu (Kathesimbhu Stupa)",
    icon: Church,
    description:
      "A beautiful embodiment of religious harmony where Hindu, Buddhist and Tibetan cultures coexist. Small stupas with symbolic paintings surround the main stupa. Very photogenic, often undergoing gentle construction.",
  },
  {
    name: "Local Lassi Stop",
    icon: Coffee,
    description:
      "Near the glass-bead market, try freshly churned lassi with sugar, yogurt, dried fruits and concentrated milk (khuwa). A must-try refreshment — NPR 40 (small) / NPR 70 (large).",
  },
  {
    name: "Glass Beads Market (Indra Chowk)",
    icon: ShoppingBag,
    description:
      "Generations of Kathmandu's Muslim minority make colourful glass beads for Hindu ceremonies. Iconic green bead necklaces are given to brides. A wholesale market bursting with colour.",
  },
  {
    name: "Monkey Temple (Swoyambhunath Stupa)",
    icon: MountainSnow,
    description:
      "Now 424 steps (post-quake reconstruction). Hundreds of monkeys, not aggressive but will pester if you carry sweets. Panoramic valley views, symbolic carvings, souvenir shops. Entrance NPR 200.",
  },
];

const neighborhoods = [
  {
    name: "Thamel",
    description:
      "The city's main travel hub, known for trekking gear, North Face and outdoor brand shops (official and otherwise), fancy jewelry, garments, and ethnic items.",
  },
  {
    name: "Thahity",
    description:
      "A quieter square known for prayer flags, butter lamps, robes for monks and nuns, ethnic dress, tea, and incense — reflecting the neighbourhood's strong Buddhist character.",
  },
  {
    name: "Naghal",
    description:
      "Home to traditional Nepali handmade paper (lokta), Newari food including the savory lentil pancake known as bara, and shops selling Nepal's national dress.",
  },
  {
    name: "Asan Market",
    description:
      "One of Kathmandu's oldest and busiest trading squares — local vegetables and fruit, fried fish, dried meat, beans, beaten rice (chiura), leaf plates, Nepali spices, copper pots, saris, and ritual items used in daily Hindu worship.",
  },
  {
    name: "Indrachowk",
    description:
      "Known for lassi stalls, jewelry, clothing, glass beads, and cosmetics — one of the city's classic old trading intersections.",
  },
  {
    name: "Yetkha",
    description:
      "A good stop for souvenirs of all kinds, Nepali handicrafts, and traditional Nepali musical instruments.",
  },
  {
    name: "Bhagawan Bahal Road",
    description:
      "Famous specifically for prayer beads, including bodhichitta seed malas, alongside handcrafted singing bowls.",
  },
];

const highlightsList = [
  "Hidden relics of Kathmandu's Malla Golden Age",
  "Tibetan Buddhist monastery & craft shops",
  "Newari courtyards, Bahi, Biharas, monasteries",
  "Bustling local markets: handicrafts, beads, spices, thangkas",
  "Freak Street (optional) – hippie trail history",
  "Sacred Bishnumati river & local cremation ghats",
];

const reviews = [
  {
    name: "Eline F.",
    country: "Switzerland",
    date: "April 2026",
    text: "Great walking tour in Kathmandu! Sabinaya is extremely knowledgeable about his country and any question you would have about his culture, and has great recommendations! He made the tour really fun and interesting, I definitely recommend it!",
  },
  {
    name: "Alessia C.",
    country: "Italy",
    date: "April 2026",
    text: "We joined the free walking tour in the morning with Sabinaya, and it was absolutely amazing. We were fortunate to have a private experience with just the two of us, which made it easy to have continuous conversations with our guide. Sabinaya shared wonderful stories and fascinating insights about every place we visited. The tour lasted nearly five hours and took us through many interesting spots, all brought to life through his engaging storytelling.",
  },
  {
    name: "Isabella R.",
    country: "United Kingdom",
    date: "March 2026",
    text: "Shiva was a fantastic tour guide! He is enthusiastic and shared his knowledge with us freely. Highly recommend this walking tour!!",
  },
];

const faqs = [
  {
    q: "Is the tour really free?",
    a: "Yes! The Free Walking Tour Kathmandu is tips-based — you decide what to give the guide based on your experience. There is no fixed fee to join.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes, advance reservation is required so our guide can prepare for the tour. Please book your spot at least 24 hours in advance. On tour day, simply meet us at the Garden of Dreams entrance 5–10 minutes before your scheduled start time (9:00 AM or 2:00 PM daily).",
  },
  {
    q: "How long does the tour last?",
    a: "The tour typically takes 4-5 hours, covering approximately 4-5 kilometers through Kathmandu's historic centre.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable walking shoes, water, sun protection, and small cash for refreshments and the Monkey Temple entrance fee (NPR 200).",
  },
  {
    q: "Is it suitable for children?",
    a: "Absolutely! The tour is family-friendly and suitable for all ages. Children often enjoy the monkeys at Swoyambhunath.",
  },
  {
    q: "What happens if it rains?",
    a: "The tour operates rain or shine. In case of heavy rain, your guide will adjust the route to include more covered areas.",
  },
  {
    q: "How many people join the tour?",
    a: "Group sizes vary from 2-3 people to 15-20 during peak season. The intimate size allows for personal attention and questions throughout the walk.",
  },
  {
    q: "Can I leave the tour early?",
    a: "Yes, you're free to leave at any point. The guide can direct you back to Thamel or advise on transportation from wherever you are.",
  },
];

const galleryImages = [
  "/images/used/beads.webp",
  "/images/used/ancient_temple.webp",
  "/images/used/buddhist_temple-1.webp",
  "/images/used/cremation-1.webp",
  "/images/used/indrachowk.webp",
  "/images/used/kathesimbu.webp",
  "/images/used/monkey_temple.webp",
  "/images/used/teeth.webp",
];

const nearbyAttractions = [
  {
    name: "Garden of Dreams",
    description: "Historic neo-classical garden with beautiful pavilions and fountains — your meeting point.",
  },
  {
    name: "Thamel District",
    description: "Kathmandu's vibrant tourist hub with shops, restaurants, and lively nightlife.",
  },
  {
    name: "Durbar Square",
    description: "UNESCO World Heritage site with ancient palaces, temples, and courtyards.",
  },
  {
    name: "Swayambhunath Stupa",
    description: "Ancient stupa perched on a hill with panoramic views of the Kathmandu Valley.",
  },
];

/* ------------------------------------------------------------------ */
/*  STRUCTURED DATA (JSON-LD) — declared AFTER the arrays it uses      */
/* ------------------------------------------------------------------ */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Free Walking Tour Kathmandu | Tips-Based Walking Tour Nepal",
      description:
        "Join the #1 Free Walking Tour in Kathmandu. Daily 9am & 2pm. Discover Swoyambhunath (Monkey Temple), Durbar Square, Indra Chowk, hidden Newar courtyards & more. Book your spot — tips-based, no fixed fee.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#tour` },
      primaryImageOfPage: { "@id": `${PAGE_URL}/#primaryimage` },
      datePublished: "2024-01-15",
      dateModified: new Date().toISOString().split("T")[0],
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}/#primaryimage`,
      url: TOUR_IMAGE,
      contentUrl: TOUR_IMAGE,
      width: 1200,
      height: 630,
      caption:
        "Free Walking Tour Kathmandu group exploring hidden temples and cultural heritage in Nepal's capital",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Kathmandu Tours", item: `${SITE_URL}/tours` },
        { "@type": "ListItem", position: 3, name: TOUR_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": ["Product", "TouristAttraction"],
      "@id": `${PAGE_URL}/#tour`,
      name: TOUR_NAME,
      alternateName: [
        "Free Tour Kathmandu",
        "Kathmandu Free Walking Tour",
        "Tips-Based Walking Tour Kathmandu",
      ],
      description:
        "The first tips-based free walking tour in the Kathmandu Valley. A 4–5 hour guided walk through Thamel, Kathesimbhu Stupa, Indra Chowk, Durbar Square, Newar courtyards, the Vishnumati cremation ghats, and Swoyambhunath (Monkey Temple). Led by expert local guides. Daily departures at 9:00 AM and 2:00 PM from the Garden of Dreams.",
      image: [TOUR_IMAGE, `${SITE_URL}/images/used/monkey_temple.webp`, `${SITE_URL}/images/used/kathesimbu.webp`],
      brand: { "@type": "Brand", name: "Free Tour Kathmandu" },
      category: "Walking Tour",
      offers: {
        "@type": "Offer",
        url: PAGE_URL,
        priceCurrency: CURRENCY,
        price: PRICE_NPR,
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: RATING_VALUE,
        reviewCount: REVIEW_COUNT,
        bestRating: "5",
        worstRating: "1",
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        datePublished: r.date,
        reviewBody: r.text,
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        locationCreated: { "@type": "Place", name: r.country },
      })),
      touristType: ["Cultural travellers", "Solo travellers", "Families", "Backpackers", "Photographers"],
      availableLanguage: ["English", "Nepali", "Hindi"],
      provider: { "@id": `${SITE_URL}/#organization` },
      itinerary: {
        "@type": "ItemList",
        itemListElement: tourStops.map((stop, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "TouristAttraction",
            name: stop.name,
            description: stop.description,
          },
        })),
      },
      geo: { "@type": "GeoCoordinates", latitude: LATITUDE, longitude: LONGITUDE },
      duration: DURATION_ISO,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Free Tour Kathmandu",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      sameAs: [
        "https://www.tripadvisor.com/",
        "https://www.instagram.com/",
        "https://www.facebook.com/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+977-9800000000",
        contactType: "customer service",
        availableLanguage: ["English", "Nepali", "Hindi"],
      },
    },
    {
      "@type": "TouristInformationCenter",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Free Tour Kathmandu — Garden of Dreams Meeting Point",
      image: TOUR_IMAGE,
      url: PAGE_URL,
      telephone: "+977-9800000000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kaiser Mahal, Tridevi Marg",
        addressLocality: "Kathmandu",
        addressRegion: "Bagmati",
        postalCode: "44600",
        addressCountry: "NP",
      },
      geo: { "@type": "GeoCoordinates", latitude: LATITUDE, longitude: LONGITUDE },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "14:00",
        },
      ],
      priceRange: "Free (tips-based)",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "ImageGallery",
      "@id": `${PAGE_URL}/#gallery`,
      name: "Free Walking Tour Kathmandu — Route Photo Gallery",
      image: galleryImages.map((src) => `${SITE_URL}${src}`),
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function FreeWalkingTourKathmanduPage() {
  const [copied, setCopied] = React.useState(false);
  const [expandedStops, setExpandedStops] = React.useState<number[]>([]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleStop = (idx: number) => {
    setExpandedStops((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        {/* Header */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-[#66706d]">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/tours" className="hover:underline">Kathmandu Tours</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-[#14383b] font-semibold">Free Walking Tour</li>
              </ol>
            </nav>

            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Free Walking Tour</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Free Walking Tour <br />
                  <span className="text-[#cf6943]">Kathmandu</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  The first tips‑based walking tour in the valley. Discover hidden temples, lively markets, and living culture.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    FREE · Tips-based
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Daily 9am &amp; 2pm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/fwt-1.webp"
              alt="Free Walking Tour Kathmandu - exploring hidden temples and cultural heritage in Nepal's capital"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Tips-based · Free to join
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                Daily 9am &amp; 2pm
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Duration", value: "4-5 hours" },
              { label: "Group Size", value: "2-20 people" },
              { label: "Rating", value: "4.9/5 (1000+)" },
              { label: "Language", value: "English" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Free Tour Kathmandu</strong> is the first of its kind in the Kathmandu Valley. While other walking tours exist, this is the only one that provides a free glimpse of the highlights of Kathmandu, led and narrated by a dedicated tour guide with decades of experience. Winding through the heart of the old centre, the tour encompasses iconic temples, stupas, monasteries, palaces and local Newar architecture.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Departing from just outside the <strong className="text-[#14383b]">Garden of Dreams</strong> at 9:00 and 14:00 daily, the tour passes through southern Thamel via Kathesimbhu Stupa and Buddhist monasteries, then enters local streets towards Indra Chowk market. From there, the tour passes around Durbar Square and through a sleepy Newar neighbourhood towards the local cremation centre near the sacred Vishnumati River.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Crossing the river, the tour passes through Swoyambhunath suburb and finishes at the top of picturesque <strong className="text-[#14383b]">Monkey Temple</strong>. Your guide will either walk you back to Thamel or direct you to a bus or taxi.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Tips‑based model:</strong> you award the time and experience of the guide. No fixed fee — gratitude welcomed.
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 🆕 NEIGHBORHOODS OF THE OLD CITY                             */}
        {/* ============================================================ */}
        <section
          className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20"
          aria-labelledby="neighborhoods-heading"
        >
          <div className="mx-auto max-w-[880px]">
            <h2
              id="neighborhoods-heading"
              className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-4"
            >
              Neighborhoods of the Old City
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-8 max-w-[720px]">
              The Free Walking Tour Kathmandu is built around a handful of neighborhoods in the old city core, each with its own character and its own specialty trade that's been passed down for generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {neighborhoods.map((hood, i) => (
                <div key={i} className="border-b border-[#d8cec0]/40 pb-4 last:border-0">
                  <h3 className="font-serif text-base sm:text-lg text-[#14383b] mb-1 flex items-start gap-2">
                    <span className="text-[#cf6943] mt-1 text-sm" aria-hidden="true">✦</span>
                    <span>{hood.name}</span>
                  </h3>
                  <p className="text-[#556363] text-sm leading-relaxed pl-5">
                    {hood.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#556363] text-sm sm:text-base leading-relaxed italic max-w-[720px] border-l-2 border-[#cf6943] pl-4">
              Walking through all of these in a single guided route, rather than visiting them separately over several days, is part of what makes the tour feel so dense with genuine local color in a relatively short amount of time.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tour Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlightsList.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                  <span className="text-[#cf6943] mt-1">✦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tour Stops */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">Stops Along the Way</h2>
              <button
                className="text-[#cf6943] text-xs font-semibold hover:underline"
                onClick={() =>
                  setExpandedStops(expandedStops.length === tourStops.length ? [] : tourStops.map((_, i) => i))
                }
              >
                {expandedStops.length === tourStops.length ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="space-y-2">
              {tourStops.map((stop, idx) => {
                const Icon = stop.icon;
                const isExpanded = expandedStops.includes(idx);
                return (
                  <div key={idx} className="border-b border-[#d8cec0]/50 last:border-0">
                    <button
                      className="w-full flex items-center gap-4 py-4 text-left"
                      onClick={() => toggleStop(idx)}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943]" aria-hidden="true" />
                      </div>
                      <span className="font-medium text-[#14383b] text-sm sm:text-base flex-1">{stop.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <div className="pb-4 pl-12 sm:pl-14">
                        <p className="text-[#556363] text-sm sm:text-base leading-relaxed">{stop.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Plan Your Visit</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#14383b] text-sm mb-3">Tour Details</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-[#d8cec0]/30 py-2">
                    <dt className="text-[#66706d]">Duration</dt>
                    <dd className="text-[#14383b] font-medium">4-5 hours</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#d8cec0]/30 py-2">
                    <dt className="text-[#66706d]">Schedule</dt>
                    <dd className="text-[#14383b] font-medium">Daily 9am &amp; 2pm</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#d8cec0]/30 py-2">
                    <dt className="text-[#66706d]">Meeting Point</dt>
                    <dd className="text-[#14383b] font-medium">Garden of Dreams</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#d8cec0]/30 py-2">
                    <dt className="text-[#66706d]">End Point</dt>
                    <dd className="text-[#14383b] font-medium">Monkey Temple</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-[#66706d]">Language</dt>
                    <dd className="text-[#14383b] font-medium">English</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-semibold text-[#14383b] text-sm mb-3">What to Bring</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Comfortable walking shoes",
                    "Water bottle",
                    "Sun protection",
                    "NPR 200 for Monkey Temple entrance",
                    "Small cash for refreshments",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#556363]">
                      <CheckCircle2 className="w-4 h-4 text-[#cf6943] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30">
              <p className="text-[#556363] text-sm">
                <strong className="text-[#14383b]">Note:</strong> The tour runs rain or shine. In case of heavy rain, your guide will adjust the route to include more covered areas.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Tips for the Tour</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Sun className="w-4 h-4" />, title: "Best Time", text: "Morning tours (9am) are cooler. Afternoon tours (2pm) offer beautiful golden hour light at Monkey Temple." },
                { icon: <Thermometer className="w-4 h-4" />, title: "Weather", text: "Dress in layers and bring a light rain jacket during monsoon season." },
                { icon: <Camera className="w-4 h-4" />, title: "Photography", text: "Ask permission before photographing locals. The tour offers countless photo opportunities." },
                { icon: <Footprints className="w-4 h-4" />, title: "Walking", text: "Comfortable walking shoes are essential. The tour covers uneven streets, stairs, and steep sections." },
              ].map((tip, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#14383b] text-sm">{tip.title}</h4>
                    <p className="text-[#556363] text-sm leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h4>
                  <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Nearby Attractions</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              Extend your exploration with these nearby attractions, all within walking distance of the tour route.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nearbyAttractions.map((attraction, i) => (
                <div key={i} className="border-b border-[#d8cec0]/30 pb-3 last:border-0">
                  <h4 className="font-semibold text-[#14383b] text-sm">{attraction.name}</h4>
                  <p className="text-[#556363] text-sm leading-relaxed">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b]">4.9 · 1000+ Reviews</h2>
              <span className="text-[#66706d] text-sm">on TripAdvisor</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-[#f7f2e9] p-5 rounded-lg border border-[#d8cec0]/30">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[#556363] text-sm leading-relaxed italic line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-3">
                    <div className="font-medium text-[#14383b] text-sm">{review.name}</div>
                    <div className="text-[#66706d] text-xs">{review.country} · {review.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Glances of the Route</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              A visual journey through Kathmandu's hidden temples, lively markets, and sacred sites.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative h-28 sm:h-32 rounded-lg overflow-hidden bg-[#d8cec0]">
                  <Image
                    src={src}
                    alt={`Free Walking Tour Kathmandu - stop along the route`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}