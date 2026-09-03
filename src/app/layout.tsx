import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

// Load Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Himkala Adventure | Best Himalayan Trekking Tours in Nepal, Bhutan & Tibet",
  description: "Expert-guided trekking tours in Nepal, Bhutan & Tibet. Everest Base Camp, Annapurna Circuit, Manaslu Trek & cultural tours. 2500+ happy travelers since 2015. Book your Himalayan adventure today!",
  icons: {
    icon: [
      {
        url: '/himkala-logo.png',
        href: '/himkala-logo.png',
      }
    ],
    apple: [
      {
        url: '/himkala-logo.png',
        href: '/himkala-logo.png',
      }
    ],
  },
  alternates: {
    canonical: 'https://himkalaadventure.com',
  },
  openGraph: {
    title: 'Himkala Adventure | Himalayan Trekking Tours in Nepal, Bhutan & Tibet',
    description: 'Expert-guided Everest Base Camp, Annapurna Circuit, Manaslu treks & cultural tours. Local guides, authentic experiences, and unforgettable Himalayan adventures.',
    url: 'https://himkalaadventure.com',
    siteName: 'Himkala Adventure',
    images: [
      {
        url: 'https://himkalaadventure.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himkala Adventure - Himalayan Trekking Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himkala Adventure | Himalayan Trekking Tours',
    description: 'Expert-guided Everest Base Camp, Annapurna, Manaslu treks & cultural tours in Nepal, Bhutan & Tibet.',
    images: ['https://himkalaadventure.com/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Himkala Adventure Pvt. Ltd.',
    alternateName: 'Himkala Adventure',
    description: 'Himalayan trekking and tour agency specializing in Nepal, Bhutan, and Tibet expeditions. Expert-guided Everest Base Camp, Annapurna Circuit, Manaslu treks, and cultural tours.',
    url: 'https://himkalaadventure.com',
    logo: 'https://himkalaadventure.com/himkala-logo.png',
    image: 'https://himkalaadventure.com/images/hero.webp',
    telephone: '+9779841376470',
    email: 'info@himkalaadventure.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thamel, Lekhnath Marga',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
      postalCode: '44600',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.7172,
      longitude: 85.3240,
    },
    sameAs: [
      'https://www.facebook.com/share/1HhkiiMrsz/',
      'https://x.com/himkalanepal',
      'https://www.instagram.com/himkalaadventure',
      'https://youtube.com/@himkalaadventure5936',
      'https://www.tiktok.com/@himkalaadventure',
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD, EUR, NPR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHours: 'Mo-Su 09:00-18:00',
    founder: {
      '@type': 'Person',
      name: 'Shiva Sapkota',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Everest Base Camp Trek',
        description: '14-day trek to Everest Base Camp with experienced guides',
        price: '1520',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Annapurna Circuit Trek',
        description: '18-day classic Annapurna Circuit trek',
        price: '800',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Manaslu Circuit Trek',
        description: '16-day Manaslu Circuit trek around the 8th highest peak',
        price: '1200',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Himkala Adventure',
    url: 'https://himkalaadventure.com',
    description: 'Expert-guided trekking tours in Nepal, Bhutan & Tibet. Himalayan adventures including Everest Base Camp, Annapurna Circuit, and cultural tours.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://himkalaadventure.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/himkala-logo.png" />
        <link rel="canonical" href="https://himkalaadventure.com" />
        
        {/* hreflang tags */}
        <link rel="alternate" href="https://himkalaadventure.com" hrefLang="en" />
        <link rel="alternate" href="https://himkalaadventure.com" hrefLang="x-default" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Google Analytics placeholder */}
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
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        {/* Facebook Pixel placeholder */}
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
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        <Script
          id="orchids-browser-logs"
          strategy="afterInteractive"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          data-orchids-project-id="2dc0f335-cccb-4f57-b67b-42efbd3440c6"
        />
        <Script
          id="route-messenger"
          strategy="afterInteractive"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ErrorReporter />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
