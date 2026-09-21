import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

// Load Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://himkalaadventure.com";
const SITE_NAME = "Himkala Adventure";
const PHONE = "+9779841376470";
const EMAIL = "info@himkalaadventure.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ─────────────────────────────────────────────
  // PRIMARY TITLE — keyword-rich, location + intent
  // ─────────────────────────────────────────────
  title: {
    default:
      "Himkala Adventure |Trekking Company – Everest Base Camp, Annapurna & Free Kathmandu Tour",
    template: "%s | Himkala Adventure – Nepal Trekking & Himalayan Tours",
  },

  // ─────────────────────────────────────────────
  // DESCRIPTION — 155–160 chars, primary keywords first
  // ─────────────────────────────────────────────
  description:
    "Nepal's trusted trekking company since 2015. Everest Base Camp, Annapurna Circuit & Manaslu treks with expert local guides + FREE Kathmandu city tour. Bhutan & Tibet tours available. 2500+ happy travelers. Book today!",

  // ─────────────────────────────────────────────
  // KEYWORDS — broad + long-tail + geo-targeted
  // ─────────────────────────────────────────────
  keywords: [
    // Core – Nepal Trekking
    "Nepal trekking",
    "trekking in Nepal",
    "best trekking company Nepal",
    "Nepal trekking agency",
    "Himalayan trekking Nepal",
    "Nepal hiking tours",
    "Everest Base Camp trek",
    "EBC trek Nepal",
    "Annapurna Circuit trek",
    "Annapurna Base Camp trek",
    "Manaslu Circuit trek",
    "Langtang Valley trek",
    "Gokyo Lakes trek",
    "Upper Mustang trek",
    "Poon Hill trek",
    "Ghorepani trek",
    "Kanchenjunga trek",
    "Everest Three Passes trek",
    "Island Peak climbing",
    "Mera Peak climbing",
    // Free Tour – Kathmandu
    "free Kathmandu tour",
    "free Kathmandu city tour",
    "Kathmandu sightseeing tour",
    "Kathmandu heritage tour",
    "Kathmandu Valley tour",
    "free Nepal tour package",
    "Kathmandu Durbar Square tour",
    "Swayambhunath temple tour",
    "Boudhanath Stupa tour",
    "Pashupatinath temple tour",
    // Bhutan & Tibet
    "Bhutan tour packages",
    "Tibet tour from Nepal",
    "Bhutan trekking tours",
    "Tibet Everest Base Camp tour",
    "Lhasa tour",
    "Bhutan cultural tour",
    "Tibet travel agency Nepal",
    // Region + intent
    "Nepal adventure tours",
    "Nepal tour operator",
    "Himalaya trekking company",
    "Nepal travel agency Thamel",
    "Nepal guide service",
    "Nepal trekking cost",
    "Nepal trekking packages 2025",
    "best time to trek Nepal",
  ],

  authors: [{ name: "Himkala Adventure", url: SITE_URL }],
  creator: "Himkala Adventure",
  publisher: "Himkala Adventure Pvt. Ltd.",

  // ─────────────────────────────────────────────
  // ICONS
  // ─────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/himkala-logo.png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/himkala-logo.png",
  },

  manifest: "/manifest.webmanifest",

  // ─────────────────────────────────────────────
  // CANONICAL + HREFLANG (multi-language ready)
  // ─────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "en-GB": SITE_URL,
      "en-AU": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  // ─────────────────────────────────────────────
  // OPEN GRAPH
  // ─────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Himkala Adventure | Nepal Trekking Experts – Everest Base Camp, Annapurna & FREE Kathmandu Tour",
    description:
      "Expert-guided Nepal treks: Everest Base Camp, Annapurna Circuit, Manaslu + FREE Kathmandu city tour. Bhutan & Tibet adventures. 2500+ happy travelers since 2015.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Himkala Adventure – Nepal Trekking & Himalayan Tours",
        type: "image/jpeg",
      },
      {
        url: `${SITE_URL}/images/og-everest.jpg`,
        width: 1200,
        height: 630,
        alt: "Everest Base Camp Trek with Himkala Adventure",
      },
      {
        url: `${SITE_URL}/images/og-annapurna.jpg`,
        width: 1200,
        height: 630,
        alt: "Annapurna Circuit Trek Nepal",
      },
    ],
    countryName: "Nepal",
  },

  // ─────────────────────────────────────────────
  // TWITTER / X CARD
  // ─────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@himkalanepal",
    creator: "@himkalanepal",
    title:
      "Himkala Adventure | Nepal Trekking – Everest Base Camp, Annapurna & FREE Kathmandu Tour",
    description:
      "Expert-guided Nepal treks + FREE Kathmandu tour. Everest Base Camp, Annapurna, Manaslu. Bhutan & Tibet tours. 2500+ happy travelers.",
    images: [`${SITE_URL}/images/twitter-image.jpg`],
  },

  // ─────────────────────────────────────────────
  // ROBOTS
  // ─────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─────────────────────────────────────────────
  // VERIFICATION
  // ─────────────────────────────────────────────
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },

  // ─────────────────────────────────────────────
  // APP / PWA
  // ─────────────────────────────────────────────
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ─────────────────────────────────────────────
  // CATEGORY + CLASSIFICATION
  // ─────────────────────────────────────────────
  category: "Travel & Tourism",
  classification: "Trekking, Adventure Travel, Himalayan Tours",

  // ─────────────────────────────────────────────
  // OTHER META
  // ─────────────────────────────────────────────
  other: {
    "geo.region": "NP-BA",
    "geo.placename": "Kathmandu, Nepal",
    "geo.position": "27.7172;85.3240",
    ICBM: "27.7172, 85.3240",
    "business:contact_data:street_address": "Thamel, Lekhnath Marga",
    "business:contact_data:locality": "Kathmandu",
    "business:contact_data:country_name": "Nepal",
    "business:contact_data:phone_number": PHONE,
    "business:contact_data:email": EMAIL,
    "business:contact_data:website": SITE_URL,
    "og:email": EMAIL,
    "og:phone_number": PHONE,
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
    "pinterest-rich-pin": "true",
  },
};

// ─────────────────────────────────────────────
// VIEWPORT (theme color for mobile browsers)
// ─────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ─────────────────────────────────────────────
  // 1. TravelAgency / LocalBusiness Schema (enriched)
  // ─────────────────────────────────────────────
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "TouristInformationCenter"],
    "@id": `${SITE_URL}/#organization`,
    name: "Himkala Adventure Pvt. Ltd.",
    alternateName: ["Himkala Adventure", "Himkala Nepal", "Himkala Treks"],
    legalName: "Himkala Adventure Pvt. Ltd.",
    description:
      "Nepal-based Himalayan trekking and tour operator specializing in Everest Base Camp, Annapurna Circuit, Manaslu treks, free Kathmandu city tours, and Bhutan & Tibet tour packages.",
    slogan: "Your Himalayan Adventure Starts Here",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/himkala-logo.png`,
      width: 512,
      height: 512,
    },
    image: [
      `${SITE_URL}/images/hero.webp`,
      `${SITE_URL}/images/og-image.jpg`,
    ],
    telephone: PHONE,
    email: EMAIL,
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thamel, Lekhnath Marga",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.7172,
      longitude: 85.324,
    },
    hasMap: "https://maps.google.com/?q=Thamel,Kathmandu,Nepal",
    areaServed: [
      { "@type": "Country", name: "Nepal" },
      { "@type": "Country", name: "Bhutan" },
      { "@type": "Country", name: "Tibet" },
      { "@type": "Place", name: "Everest Region" },
      { "@type": "Place", name: "Annapurna Region" },
      { "@type": "Place", name: "Manaslu Region" },
      { "@type": "Place", name: "Langtang Region" },
      { "@type": "Place", name: "Kathmandu Valley" },
    ],
    sameAs: [
      "https://www.facebook.com/share/1HhkiiMrsz/",
      "https://x.com/himkalanepal",
      "https://www.instagram.com/himkalaadventure",
      "https://youtube.com/@himkalaadventure5936",
      "https://www.tiktok.com/@himkalaadventure",
    ],
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, GBP, AUD, NPR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, Wise, PayPal",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Shiva Sapkota",
      jobTitle: "Founder & Managing Director",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "327",
      bestRating: "5",
      worstRating: "1",
    },
    knowsLanguage: ["English", "Nepali", "Hindi"],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Everest Base Camp Trek – 14 Days",
        description:
          "14-day guided Everest Base Camp trek with experienced Sherpa guides, Lukla flights, teahouse accommodation, and full board meals.",
        price: "1520",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/treks/everest-base-camp-trek`,
        category: "Nepal Trekking",
      },
      {
        "@type": "Offer",
        name: "Annapurna Circuit Trek – 18 Days",
        description:
          "18-day classic Annapurna Circuit trek including Thorong La Pass (5,416m), Muktinath, and Pokhara.",
        price: "800",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/treks/annapurna-circuit-trek`,
        category: "Nepal Trekking",
      },
      {
        "@type": "Offer",
        name: "Manaslu Circuit Trek – 16 Days",
        description:
          "16-day Manaslu Circuit trek around the world's 8th highest peak with Larkya La Pass.",
        price: "1200",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/treks/manaslu-circuit-trek`,
        category: "Nepal Trekking",
      },
      {
        "@type": "Offer",
        name: "FREE Kathmandu City Tour",
        description:
          "Complimentary guided Kathmandu heritage tour covering Durbar Square, Swayambhunath, Boudhanath, and Pashupatinath — free with any Himkala trek booking.",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/tours/free-kathmandu-tour`,
        category: "Free Tour",
      },
      {
        "@type": "Offer",
        name: "Bhutan Cultural Tour – 7 Days",
        description:
          "7-day Bhutan tour including Paro, Thimphu, Punakha Dzong, and Tiger's Nest Monastery.",
        price: "1850",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/tours/bhutan-cultural-tour`,
        category: "Bhutan Tour",
      },
      {
        "@type": "Offer",
        name: "Tibet Tour from Kathmandu – 8 Days",
        description:
          "8-day Tibet tour from Kathmandu covering Lhasa, Potala Palace, Jokhang Temple, and Everest North Base Camp.",
        price: "1650",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/tours/tibet-tour-from-kathmandu`,
        category: "Tibet Tour",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Himkala Adventure Trekking & Tour Packages",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Nepal Trekking Packages" },
        { "@type": "OfferCatalog", name: "Nepal Tour Packages" },
        { "@type": "OfferCatalog", name: "Bhutan Tour Packages" },
        { "@type": "OfferCatalog", name: "Tibet Tour Packages" },
        { "@type": "OfferCatalog", name: "Peak Climbing Expeditions" },
      ],
    },
  };

  // ─────────────────────────────────────────────
  // 2. WebSite Schema + Sitelinks SearchBox
  // ─────────────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "Himkala Nepal",
    url: SITE_URL,
    description:
      "Himkala Adventure – Nepal trekking, Himalayan tours, free Kathmandu city tours, Bhutan and Tibet travel packages.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ─────────────────────────────────────────────
  // 3. FAQ Schema — targets "People Also Ask" + voice search
  // ─────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best trekking company in Nepal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Himkala Adventure is one of Nepal's top-rated trekking companies, based in Thamel, Kathmandu. With over 2,500 happy travelers since 2015 and a 4.9/5 rating, we specialize in Everest Base Camp, Annapurna Circuit, and Manaslu treks with expert local guides.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a free Kathmandu city tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Himkala Adventure offers a completely FREE guided Kathmandu city tour with every trek booking. The tour covers Kathmandu Durbar Square, Swayambhunath (Monkey Temple), Boudhanath Stupa, and Pashupatinath Temple.",
        },
      },
      {
        "@type": "Question",
        name: "How much does the Everest Base Camp trek cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our 14-day Everest Base Camp trek starts at $1,520 USD per person, including Lukla flights, teahouse accommodation, meals, permits, and an experienced Sherpa guide.",
        },
      },
      {
        "@type": "Question",
        name: "Do you organize tours to Bhutan and Tibet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Himkala Adventure offers full Bhutan cultural tours (7 days from $1,850) and Tibet tours from Kathmandu (8 days from $1,650), including Lhasa, Potala Palace, and Everest North Base Camp.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to trek in Nepal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best time to trek in Nepal is during spring (March–May) and autumn (September–November), offering clear skies, stable weather, and spectacular Himalayan views.",
        },
      },
    ],
  };

  // ─────────────────────────────────────────────
  // 4. Breadcrumb Schema (site hierarchy)
  // ─────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nepal Trekking",
        item: `${SITE_URL}/treks`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tours",
        item: `${SITE_URL}/tours`,
      },
    ],
  };

  // ─────────────────────────────────────────────
  // 5. Service Schema (Nepal trekking core service)
  // ─────────────────────────────────────────────
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Nepal Trekking & Himalayan Tour Operator",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Nepal" },
      { "@type": "Country", name: "Bhutan" },
      { "@type": "Country", name: "Tibet" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trekking & Tour Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Everest Base Camp Trek" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annapurna Circuit Trek" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manaslu Circuit Trek" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Kathmandu City Tour" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bhutan Cultural Tour" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tibet Tour from Kathmandu" } },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Favicon fallback */}
        <link rel="icon" href="/himkala-logo.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Geo meta */}
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Kathmandu, Nepal" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />

        {/* Theme color */}
        <meta name="theme-color" content="#0f172a" />

        {/* ─────────────────────────────────────────────
            Structured Data (JSON-LD)
        ───────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* ─────────────────────────────────────────────
            Google Analytics 4
        ───────────────────────────────────────────── */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />

        {/* ─────────────────────────────────────────────
            Facebook Pixel
        ───────────────────────────────────────────── */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}