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
const PUBLISHED_DATE = "2024-01-15";
const MODIFIED_DATE = new Date().toISOString().split("T")[0];
const AUTHOR_NAME = "Himkala Adventure";
const CONTACT_PHONE = "+977 9841376470";
const CONTACT_EMAIL = "himkalaadventure@gmail.com";

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
    q: "Is the Free Walking Tour Kathmandu really free?",
    a: "There's no upfront ticket price, but it isn't charity work either. It runs on tips: you pay your guide at the end, based on what you felt the experience was worth, on a pay-what-you-please basis.",
  },
  {
    q: "How do I book the tour?",
    a: "You can reserve directly through Himkala Adventure's Facebook page, via WhatsApp at +977 9841376470, or by email at himkalaadventure@gmail.com. There's no third-party booking platform involved.",
  },
  {
    q: "Who leads the tour?",
    a: "Certified local guides Mr. Shiva Dhakal or Sabinaya, both from Himkala Adventure, lead the walks directly, with no intermediary between you and your guide.",
  },
  {
    q: "Does the tour run in bad weather or with a small group?",
    a: "Yes. The schedule holds regardless of weather conditions and regardless of how many people have booked for that day.",
  },
  {
    q: "How much should I tip?",
    a: "There's no fixed amount. Tip based on how much value you felt the tour delivered and your guide's expertise — whatever feels fair to you.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable walking shoes, weather-appropriate clothing, water, a camera, and some cash for souvenirs along the route and for your tip at the end.",
  },
  {
    q: "Does Himkala Adventure offer anything besides the walking tour?",
    a: "Yes. As a government-registered company, Himkala Adventure also arranges transportation, other guided tours, day hikes, and multi-day treks across Nepal, alongside various adventure activities.",
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

const blogTips = [
  {
    icon: <Footprints className="w-4 h-4" />,
    title: "Wear comfortable shoes",
    text: "The tour covers old, sometimes uneven cobblestone streets and narrow alleys, so proper walking shoes matter more than style here.",
  },
  {
    icon: <Thermometer className="w-4 h-4" />,
    title: "Dress for the weather",
    text: "Bring weather-appropriate layers, since Kathmandu's temperature can shift noticeably between shaded alleys and open squares.",
  },
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    title: "Carry water",
    text: "Staying hydrated matters even on a walking tour, especially in the warmer months.",
  },
  {
    icon: <Camera className="w-4 h-4" />,
    title: "Bring a camera",
    text: "Between historic temples, working artisans, and street scenes, there's no shortage of moments worth capturing.",
  },
  {
    icon: <ShoppingBag className="w-4 h-4" />,
    title: "Bring some cash",
    text: "A little extra money is useful for souvenirs along the route, and of course for your tip at the end, since that's what supports your guide directly.",
  },
];

/* ------------------------------------------------------------------ */
/*  STRUCTURED DATA (JSON-LD)                                          */
/* ------------------------------------------------------------------ */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Free Walking Tour Kathmandu | Himkala Adventure Blog & Tour Guide",
      description:
        "The story behind the Free Walking Tour Kathmandu by Himkala Adventure — the first local-based free walking tour in Nepal. Tips-based, daily 9am & 2pm, led by certified local guides Shiva Dhakal & Sabinaya.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#tour` },
      primaryImageOfPage: { "@id": `${PAGE_URL}/#primaryimage` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
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
    /* -------- BlogPosting (so the article is indexed as a blog) -------- */
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}/#blogposting`,
      headline: "Free Walking Tour Kathmandu — The Story, the Route, and Why It Works",
      description:
        "How Himkala Adventure built Nepal's first local-based free walking tour in the aftermath of the 2015 earthquake, and what travellers actually experience on the route today.",
      image: TOUR_IMAGE,
      author: { "@type": "Organization", name: AUTHOR_NAME, url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      mainEntityOfPage: { "@id": `${PAGE_URL}/#webpage` },
      articleSection: "Kathmandu Walking Tours",
      keywords:
        "Free Walking Tour Kathmandu, Himkala Adventure, Shiva Dhakal, Sabinaya, Kathmandu walking tour, Thamel, Asan Market, Monkey Temple, Swoyambhunath, pay-what-you-please tour Nepal",
      inLanguage: "en",
    },
    {
      "@type": ["Product", "TouristAttraction"],
      "@id": `${PAGE_URL}/#tour`,
      name: TOUR_NAME,
      alternateName: [
        "Free Tour Kathmandu",
        "Kathmandu Free Walking Tour",
        "Tips-Based Walking Tour Kathmandu",
        "Himkala Adventure Free Walking Tour",
      ],
      description:
        "The first tips-based free walking tour in the Kathmandu Valley, run by Himkala Adventure. A 4–5 hour guided walk through Thamel, Kathesimbhu Stupa, Indra Chowk, Durbar Square, Newar courtyards, the Vishnumati cremation ghats, and Swoyambhunath (Monkey Temple). Led by certified local guides Shiva Dhakal and Sabinaya. Daily departures at 9:00 AM and 2:00 PM from the Garden of Dreams.",
      image: [TOUR_IMAGE, `${SITE_URL}/images/used/monkey_temple.webp`, `${SITE_URL}/images/used/kathesimbu.webp`],
      brand: { "@type": "Brand", name: "Himkala Adventure" },
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
      name: "Himkala Adventure",
      alternateName: "Free Tour Kathmandu",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      sameAs: [
        "https://www.tripadvisor.com/",
        "https://www.instagram.com/",
        "https://www.facebook.com/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
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
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
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

  /* Shared prose paragraph class for the blog body */
  const p = "text-[#556363] text-sm sm:text-base leading-relaxed mb-5";

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        {/* Header / HERO */}
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
                  <span>Free Walking Tour · Blog & Guide</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Free Walking Tour <br />
                  <span className="text-[#cf6943]">Kathmandu</span>
                </h1>
                <p className="mt-3 max-w-[560px] text-sm sm:text-base text-[#556363] leading-relaxed">
                  The story behind Nepal's first local-based free walking tour — how it began, what you'll see on the route, and why it's become one of the most recommended things to do in Kathmandu.
                </p>
                <p className="mt-3 text-xs text-[#66706d]">
                  By <strong className="text-[#14383b]">{AUTHOR_NAME}</strong> · Updated {MODIFIED_DATE} · 12 min read
                </p>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Led by certified local guides Shiva Dhakal &amp; Sabinaya. Daily departures at 9:00 AM &amp; 2:00 PM from the Garden of Dreams.
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
              alt="Free Walking Tour Kathmandu by Himkala Adventure — group exploring the old city core with a certified local guide"
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

        {/* ============================================================ */}
        {/*  BLOG BODY                                                   */}
        {/* ============================================================ */}

        {/* 1. Opening — the opposite of a car window */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                Most visitors to Kathmandu see the city through a car window on the way to somewhere else — Thamel for gear, Durbar Square for photos, the airport for the next flight into the mountains. The <strong className="text-[#14383b]">Free Walking Tour Kathmandu</strong>, organized by <strong className="text-[#14383b]">Himkala Adventure</strong>, was built for the opposite experience: slow down, walk the old core of the city on foot, and let a certified local guide show you the Kathmandu that doesn't show up on a map.
              </p>
              <p className={p}>
                Himkala Adventure is proud to be the first local-based company and guide running a Free Walking Tour in Kathmandu, Nepal. That matters, because it means the tour wasn't designed from an office abroad and franchised out. It was built by people who grew up in these alleys, know which shopkeeper has run their stall for three generations, and can explain why a particular courtyard temple still gets fresh marigolds every morning. This is a walking tour led by locals, for anyone who wants to see the city the way a local actually sees it.
              </p>
            </article>
          </div>
        </section>

        {/* Inline image: ancient temple */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/ancient_temple.webp"
              alt="Ancient temple in the Kathmandu old city core seen on the Free Walking Tour"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              The old core of Kathmandu — best experienced on foot.
            </figcaption>
          </figure>
        </div>

        {/* 2. Where the idea came from */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              Where the Idea Came From
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                The free walking tour format wasn't invented in Kathmandu. It has roots in European cities like Copenhagen, Berlin, and Prague, where pay-what-you-please walking tours became a popular, low-barrier way for travelers to get an authentic introduction to a city led by someone who actually lives there. Himkala Adventure brought that same model to Nepal in the aftermath of the devastating 2015 earthquake, at a time when Kathmandu badly needed a way to show travelers that the city was still standing, still welcoming, and still very much worth walking through.
              </p>
              <p className={p}>
                In the years right after the earthquake, tourism to Nepal took a heavy hit, and many visitors assumed the capital itself was too damaged or unsafe to explore on foot. A free, guide-led walking tour turned out to be an ideal way to counter that — low-cost enough that hesitant travelers had almost no reason not to try it, and personal enough that a local guide could show, street by street, which parts of the old city had survived, which temples were being rebuilt, and why Kathmandu's culture was very much alive even as reconstruction continued around it. What started as a way to rebuild confidence in visiting the capital has since grown into one of the most consistently recommended things to do in Kathmandu in its own right.
              </p>
            </article>
          </div>
        </section>

        {/* Inline image: monkey temple */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/monkey_temple.webp"
              alt="Swoyambhunath Monkey Temple — the final stop of the Free Walking Tour Kathmandu"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Swoyambhunath (Monkey Temple) — the tour finishes at the top of the hill.
            </figcaption>
          </figure>
        </div>

        {/* 3. How it works — pay what you feel */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              How It Works: No Upfront Price, Pay What You Feel Is Fair
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                The core idea behind a free walking tour is simple, but it changes everything about how the experience feels. There is no upfront price and no fixed ticket to buy. Instead, travelers pay their guide at the end, on a <strong className="text-[#14383b]">pay-what-you-please</strong> basis, based entirely on how much value they felt the tour delivered.
              </p>
              <p className={p}>
                This tip-based model isn't just a pricing gimmick. It's what keeps the quality high. Because guides at Himkala Adventure work directly for gratuities rather than a flat agency fee, their only real incentive is to make sure you leave the tour genuinely satisfied. A guide who under-delivers earns less. A guide who goes above and beyond — spending extra time at a spot you loved, answering every question with real depth — earns more. That single incentive is a big part of why travelers consistently describe this format as more engaging than traditional "pay first" tours, where the guide has already been paid before the walk even begins.
              </p>
              <p className={p}>
                Booking is straightforward and doesn't require a formal travel agency in between. You can reserve your spot directly through Himkala Adventure's Facebook page, over WhatsApp at <strong className="text-[#14383b]">{CONTACT_PHONE}</strong>, or by email at <strong className="text-[#14383b]">{CONTACT_EMAIL}</strong>, and a real person will confirm your slot. There's no complicated third-party booking platform to navigate, and no intermediary standing between you and the guide who will actually walk you through the city.
              </p>
            </article>
            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Tips-based model:</strong> you award the time and experience of the guide. No fixed fee — gratitude welcomed.
            </div>
          </div>
        </section>

        {/* 4. What to expect */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              What to Expect on the Tour
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                The Free Walking Tour Kathmandu is built around flexibility as much as it is around a fixed route. You'll cover a mix of major historical landmarks and quieter local alleys that most short-stay visitors never find on their own, all woven together into a route that shows both the monumental and the everyday sides of the city.
              </p>
              <p className={p}>
                Topics are kept flexible on purpose. Rather than reciting a rehearsed script at every stop, your guide adjusts the conversation around what you're curious about — whether that's temple architecture, street food, or how a particular neighborhood has changed in the last decade. The goal throughout is to encourage genuine exploration and observation, not passive listening, so you leave the tour having actually <em>looked</em> at Kathmandu through a local's eye rather than just having it described to you.
              </p>
            </article>
          </div>
        </section>

        {/* Inline image: buddhist temple */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/buddhist_temple-1.webp"
              alt="Buddhist temple stop on the Free Walking Tour Kathmandu route"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Monastery courtyards, prayer flags, and quiet side temples — a local's Kathmandu.
            </figcaption>
          </figure>
        </div>

        {/* 5. Local insights from certified guides */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              Local Insights from Certified Guides
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                Every tour is led by a certified local guide — most often <strong className="text-[#14383b]">Mr. Shiva Dhakal</strong> or <strong className="text-[#14383b]">Sabinaya</strong> — both of whom bring genuine cultural immersion to the walk rather than a rehearsed itinerary. Along the route, expect real stories, not just facts, about local history, traditional food, festivals, religious customs, architecture, and even a candid look at local politics and daily life in the city. It's the kind of context that turns a temple from "an old building" into a place with a story, and turns a market street from "a place to buy souvenirs" into a living record of how Kathmandu has traded, eaten, and celebrated for centuries.
              </p>
              <p className={p}>
                Because there's no upfront ticket price and the tour runs on tips, it also remains one of the most budget-friendly ways to experience Kathmandu in real depth, regardless of your travel budget.
              </p>
            </article>
          </div>
        </section>

        {/* Inline image: kathesimbu */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/kathesimbu.webp"
              alt="Kathesimbhu Stupa — a stop on the Free Walking Tour Kathmandu"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Kathesimbhu Stupa — one of the small, easy-to-miss stops most visitors walk past.
            </figcaption>
          </figure>
        </div>

        {/* 6. A social experience */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              A Social Experience, Too
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                Because the tour runs on a public schedule with no fixed capacity based on weather or group size, it naturally becomes a meeting point for travelers from all over the world. Solo travelers in particular often find it one of the easiest, lowest-pressure ways to meet other people early in their Nepal trip — whether that turns into a shared cup of tea after the walk or plans to explore the mountains together later on.
              </p>
            </article>
          </div>
        </section>

        {/* 7. The route: neighborhoods */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-4">
              The Route: Neighborhoods You'll Walk Through
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
                  <p className="text-[#556363] text-sm leading-relaxed pl-5">{hood.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#556363] text-sm sm:text-base leading-relaxed italic max-w-[720px] border-l-2 border-[#cf6943] pl-4">
              Walking through all of these in a single guided route, rather than visiting them separately over several days, is part of what makes the tour feel so dense with genuine local color in a relatively short amount of time.
            </p>
          </div>
        </section>

        {/* Inline image: indrachowk */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/indrachowk.webp"
              alt="Indrachowk old trading intersection — part of the Free Walking Tour Kathmandu route"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Indrachowk — one of the classic old trading intersections of Kathmandu.
            </figcaption>
          </figure>
        </div>

        {/* 8. Tips for participants */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">
              Tips for Participants
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-6 max-w-[720px]">
              A few practical notes to get the most out of your walk.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogTips.map((tip, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0 text-[#cf6943]">
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

        {/* Inline image: beads market */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/beads.webp"
              alt="Glass beads market in Kathmandu old city — a stop on the Free Walking Tour"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              Prayer beads, glass beads, and singing bowls — Bhagawan Bahal Road.
            </figcaption>
          </figure>
        </div>

        {/* 9. Schedule and group size */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              Schedule and Group Size
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                The Free Walking Tour Kathmandu runs on a regular, predictable schedule. It goes ahead regardless of weather and regardless of how many participants sign up on a given day, so you don't need to worry about a tour being cancelled last minute because the group is small or the sky looks grey. Reach out via Facebook, WhatsApp at <strong className="text-[#14383b]">{CONTACT_PHONE}</strong>, or email at <strong className="text-[#14383b]">{CONTACT_EMAIL}</strong> to confirm the current schedule and reserve your spot.
              </p>
            </article>

            {/* Tour Stops accordion */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#14383b]">
                  Stops Along the Way
                </h3>
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
          </div>
        </section>

        {/* 10. Why choose Himkala Adventure */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              Why Choose Himkala Adventure
            </h2>
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className={p}>
                Himkala Adventure is a government-registered travel company, and the Free Walking Tour Kathmandu is only one part of what it offers. Beyond the walking tour, the company also arranges airport and local transportation, other guided city and cultural tours, day hikes, and multi-day treks across Nepal's major trekking regions, along with a range of other adventure activities. That means the same guide who walks you through Asan Market and Indrachowk in the morning can, if you want, be the person planning your trek into the Everest, Annapurna, or Manaslu region the following week.
              </p>
              <p className={p}>
                Just as importantly, Himkala Adventure offers this tour directly. There is no intermediary standing between you and your guide; you are booking with the people who actually lead the walk — Mr. Shiva Dhakal or Sabinaya — not with an agency reselling someone else's tour. Combined with being the first local-based company and guide running a free walking tour in Kathmandu, this direct model has earned the tour a tremendous number of positive reviews, and it has become genuinely well known among travelers, including within Dutch traveler group chats and several other international travel community platforms, largely through word of mouth from people who took the walk and told their friends.
              </p>
            </article>

            {/* Tour Highlights inside "Why" section as supporting bullets */}
            <div className="mt-8">
              <h3 className="font-serif text-base sm:text-lg text-[#14383b] mb-4">Tour Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlightsList.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#14383b] text-sm sm:text-base">
                    <span className="text-[#cf6943] mt-1">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Inline image: cremation ghats */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8 pb-12 sm:pb-16">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/cremation-1.webp"
              alt="Sacred cremation ghats along the Bishnumati River — a quiet stop on the Free Walking Tour Kathmandu"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 880px) 100vw, 880px"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2940]/80 to-transparent px-4 py-3 text-[10px] sm:text-xs text-[#f7f2e9]">
              The sacred Bishnumati river ghats — a sobering, deeply local stop on the route.
            </figcaption>
          </figure>
        </div>

        {/* Practical Info (kept — useful for tour page intent) */}
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
                    "Small cash for refreshments & tip",
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

        {/* FAQ */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-[#14383b] text-sm mb-1">{faq.q}</h3>
                  <p className="text-[#556363] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Nearby Attractions</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">
              Extend your exploration with these nearby attractions, all within walking distance of the tour route.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nearbyAttractions.map((attraction, i) => (
                <div key={i} className="border-b border-[#d8cec0]/30 pb-3 last:border-0">
                  <h3 className="font-semibold text-[#14383b] text-sm">{attraction.name}</h3>
                  <p className="text-[#556363] text-sm leading-relaxed">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
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
                  <p className="text-[#556363] text-sm leading-relaxed italic">
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
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
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
                    alt={`Free Walking Tour Kathmandu - stop ${i + 1} along the route`}
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

        {/* Closing + CTA + Hashtags */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-5">
              The Most Authentic Way to See Kathmandu on Foot
            </h2>
            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-5 max-w-[720px]">
              Whether you're spending a single day in Kathmandu before heading into the mountains, or you want a proper introduction to the city before exploring further, the Free Walking Tour Kathmandu is one of the most authentic, budget-friendly ways to do it — led by the people who know these streets best.
            </p>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "#FreeWalkingTour",
                "#VisitNepal",
                "#WalkingTourKathmandu",
                "#HimkalaAdventure",
                "#NepalTravel",
                "#Kathmandu",
                "#Thamel",
                "#MonkeyTemple",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[11px] font-medium rounded-full border border-[#d8cec0]/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Copy link CTA */}
            <div className="p-5 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-serif text-base sm:text-lg text-[#14383b]">
                  Enjoyed this article?
                </p>
                <p className="text-[#66706d] text-sm">
                  Copy the link and send it to fellow adventurers.
                </p>
              </div>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 bg-[#cf6943] hover:bg-[#b85734] text-[#fff8ee] px-4 py-2.5 text-xs font-bold tracking-wide rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" aria-hidden="true" /> Link Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" /> Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}