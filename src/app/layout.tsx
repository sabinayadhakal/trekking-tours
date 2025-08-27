import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { AnimatedIndicatorNavbar } from "@/components/layout/animated-indicator-navbar";
import { NewsletterFooter } from "@/components/layout/newsletter-footer";

export const metadata: Metadata = {
  title: "Himkala Adventure- Explore Nepal",
  description: "Explore Nepal with Himkala(SnowArt) Adventure",
  icons: {
    icon: '/images/himkala-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />

        {/* Header */}
        <AnimatedIndicatorNavbar  />

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
