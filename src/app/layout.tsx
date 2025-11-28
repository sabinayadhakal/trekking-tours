import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { AnimatedIndicatorNavbar } from "@/components/layout/animated-indicator-navbar";
import { NewsletterFooter } from "@/components/layout/newsletter-footer";

export const metadata: Metadata = {
  title: "Himkala Adventure - Premium Trekking & Tours in Nepal | Explore Himalayas",
  description: "Experience unforgettable adventures with Himkala Adventure. Expert-led trekking tours, cultural experiences, and Himalayan expeditions in Nepal. Book your dream adventure today!",
  keywords: "Nepal trekking, Himalayan adventures, Everest base camp, Annapurna circuit, Nepal tours, adventure travel, trekking in Nepal, cultural tours Nepal",
  authors: [{ name: "Himkala Adventure" }],
  creator: "Himkala Adventure",
  publisher: "Himkala Adventure",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.himkalaadventure.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Himkala Adventure - Premium Trekking & Tours in Nepal",
    description: "Experience unforgettable adventures with Himkala Adventure. Expert-led trekking tours and Himalayan expeditions in Nepal.",
    url: 'https://www.himkalaadventure.com', // Replace with your actual domain
    siteName: 'Himkala Adventure',
    images: [
      {
        url: '/images/himkala-logo.png', // Consider adding a dedicated OG image
        width: 1200,
        height: 630,
        alt: 'Himkala Adventure - Trekking in Nepal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Himkala Adventure - Premium Trekking & Tours in Nepal",
    description: "Experience unforgettable adventures with Himkala Adventure. Expert-led trekking tours in Nepal.",
    images: ['/images/himkala-logo.png'], // Consider adding a dedicated Twitter image
    creator: '@himkalaadventure', // Replace with your actual Twitter handle
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
    // Add your Google Search Console verification code
    // google: 'your-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/images/himkala-logo.png',
        sizes: '196x196',
        type: 'image/png',
      },
      {
        url: '/images/himkala-logo.png',
        sizes: '96x96', 
        type: 'image/png',
      },
      {
        url: '/images/himkala-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/himkala-logo.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/images/himkala-logo.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="preconnect" href="https://www.google.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Himkala Adventure",
              "description": "Premium trekking and adventure tours in Nepal",
              "url": "https://www.himkalaadventure.com",
              "logo": "https://www.himkalaadventure.com/images/himkala-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nepal"
              },
              "areaServed": "Nepal",
              "serviceType": "Adventure Travel, Trekking Tours"
            })
          }}
        />
      </head>
      <body className="antialiased bg-white">
        <ErrorReporter />

        {/* Supabase Script */}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Himkala Adventure", "version": "1.0.0", "greeting": "hi"}'
        />

        {/* reCAPTCHA v3 Script */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        {/* Header with larger logo */}
        <AnimatedIndicatorNavbar />

        {/* Spacer to prevent header blocking hero section */}
        <div className="h-[96px] lg:h-[120px]" />

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <NewsletterFooter />
      </body>
    </html>
  );
}