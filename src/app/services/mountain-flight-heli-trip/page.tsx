"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Plane,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  ArrowRight,
  Eye,
  Mountain,
  Camera,
  Award,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Only include mountain flights that exist in your folder structure
const mountainFlights = [
  {
    id: 1,
    name: "Everest Region Mountain Flight Trip",
    route: "Everest Region",
    duration: "1 Hour",
    altitude: "8,848m",
    groupSize: "1-25",
    bestSeason: "Sep-May",
    price: 350,
    originalPrice: 450,
    image: "/images/used/everest-flight-1.webp",
    rating: 4.9,
    reviews: 456,
    highlights: ["Mount Everest", "Lhotse", "Makalu", "Ama Dablam"],
    description: "The ultimate aerial adventure flying close to the world's highest peaks with guaranteed window seats.",
    featured: true,
    aircraft: "Beechcraft 1900D",
    departure: "06:00 AM",
    link: "/services/mountain-flight-heli-trip/everest-region-mountain-flight-trip",
  },
  {
    id: 2,
    name: "Everest Region Helicopter Trip",
    route: "Everest Region",
    duration: "4 Hours",
    altitude: "8,848m",
    groupSize: "1-5",
    bestSeason: "Sep-May",
    price: 2000,
    originalPrice: 2450,
    image: "/images/used/everest-heli-1.webp",
    rating: 4.9,
    reviews: 156,
    highlights: ["Landing at Kalapatthar", "Everest Base Camp", "Gokyo Lakes", "Helicopter Landing"],
    description: "Luxury helicopter tour with landing opportunities at strategic viewpoints.",
    featured: true,
    aircraft: "AS350 B3",
    departure: "07:00 AM",
    link: "/services/mountain-flight-heli-trip/everest-region-helicopter-trip",
  },
  {
    id: 4,
    name: "Langtang Region Helicopter Trip",
    route: "Langtang Region",
    duration: "1.5 Hours",
    altitude: "7,234m",
    groupSize: "1-6",
    bestSeason: "Oct-Apr",
    price: 1500,
    originalPrice: 1750,
    image: "/images/used/langtang-heli.webp",
    rating: 4.8,
    reviews: 89,
    highlights: ["Langtang Lirung", "Ganesh Himal", "Dorje Lakpa", "Kyanjin Gompa"],
    description: "Helicopter exploration of the beautiful Langtang Valley with landing at Kyanjin Gompa.",
    featured: false,
    aircraft: "AS350 B3",
    departure: "08:00 AM",
    link: "/services/mountain-flight-heli-trip/langtang-region-helicopter-trip",
  },
];

export default function MountainFlightsPage() {
  const router = useRouter();

  const handleBookNow = (flightName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(flightName)}`);
  };

  const featuredFlight = mountainFlights.find((flight) => flight.id === 1);

  // Schema.org Product schemas for each flight
  const productSchemas = mountainFlights.map((flight) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": flight.name,
    "description": flight.description,
    "image": `https://www.himkalaadventure.com${flight.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": flight.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": `https://www.himkalaadventure.com${flight.link}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": flight.rating,
      "reviewCount": flight.reviews
    }
  }));

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided mountain flights and helicopter trips in Nepal including Everest, Annapurna, and Langtang regions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thamel, Lekhnath Marga",
      "addressLocality": "Kathmandu",
      "addressCountry": "Nepal"
    },
    "telephone": "+977 9841376470",
    "email": "info@himkalaadventure.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7172,
      "longitude": 85.3240
    }
  };

  return (
    <>
      <Head>
        <title>Mountain Flights & Helicopter Tours in Nepal - Himkala Adventure</title>
        <meta name="description" content="Soar above the Himalayas with our mountain flights and helicopter tours. Everest, Langtang, and more. Guaranteed window seats and expert pilots." />
        <link rel="canonical" href="https://www.himkalaadventure.com/services/mountain-flight-heli-trip" />
        <meta property="og:title" content="Mountain Flights & Helicopter Tours in Nepal - Himkala Adventure" />
        <meta property="og:description" content="Soar above the Himalayas with our mountain flights and helicopter tours. Everest, Langtang, and more." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/everest-flight-1.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/services/mountain-flight-heli-trip" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mountain Flights & Helicopter Tours in Nepal - Himkala Adventure" />
        <meta name="twitter:description" content="Soar above the Himalayas with our mountain flights and helicopter tours. Everest, Langtang, and more." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/everest-flight-1.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Page Header - matching Day Hikes style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Aerial Adventures</div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Mountain <span className="text-[#cf6943]">Flights</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Soar above the world's highest peaks without breaking a sweat. Experience the majestic Himalayas from a bird's-eye view with guaranteed window seats.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Flight - matching Day Hikes featured layout */}
          {featuredFlight && (
            <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
              <div className="mx-auto max-w-[1220px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                  <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                    <Image
                      src={featuredFlight.image}
                      alt={featuredFlight.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">✈️</div>
                      <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">GUARANTEED WINDOW SEAT</div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Featured Flight</div>
                    <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                      {featuredFlight.name}
                    </h2>
                    <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                      <p>{featuredFlight.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredFlight.highlights.map((h, idx) => (
                          <span key={idx} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#556363]">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredFlight.duration}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Plane className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredFlight.aircraft}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredFlight.altitude}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredFlight.departure}
                      </span>
                    </div>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-[#66706d] text-sm line-through">${featuredFlight.originalPrice}</span>
                        <span className="font-bold text-[#cf6943] text-xl sm:text-2xl">${featuredFlight.price}</span>
                        <span className="text-[#556363] text-xs">/person</span>
                      </div>
                      <Button 
                        className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-none px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredFlight.name);
                        }}
                      >
                        Book Now <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* All Flights Grid - matching Day Hikes grid */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">All Flights</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Aerial <span className="text-[#cf6943]">Adventures</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  {mountainFlights.length} flights available. From 1-hour scenic flights to helicopter landings.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {mountainFlights.map((flight) => (
                  <Link
                    key={flight.id}
                    href={flight.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={flight.image}
                          alt={flight.name}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 33vw, 33vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {flight.rating}
                        </div>
                        <div className="absolute top-4 left-4 bg-[#cf6943] text-[#fff8ee] px-3 py-1.5 text-xs font-bold tracking-wide">
                          {flight.aircraft.includes("Helicopter") ? "HELI" : "FLIGHT"}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[#66706d]">{flight.route}</span>
                          {flight.featured && (
                            <Badge className="bg-[#e47a4f] text-[#fff8ee] border-none text-[9px] px-2 py-0.5">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-[#14383b] mb-1">{flight.name}</h3>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed line-clamp-2">{flight.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Clock className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {flight.duration}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Plane className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {flight.departure}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Users className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {flight.groupSize}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Mountain className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {flight.altitude}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {flight.highlights.slice(0, 2).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                          {flight.highlights.length > 2 && (
                            <span className="text-xs text-[#66706d]">+{flight.highlights.length - 2} more</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#d8cec0]/30">
                          <div>
                            <span className="text-[#66706d] text-xs line-through">${flight.originalPrice}</span>
                            <span className="font-bold text-[#cf6943] text-lg ml-1">${flight.price}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px] px-4 text-xs"
                            onClick={(e) => { e.preventDefault(); handleBookNow(flight.name); }}
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us - matching Day Hikes style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why Choose Us</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Safety & Experience <span className="text-[#cf6943]">at 30,000 Feet</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Experienced Himalayan pilots with guaranteed window seats and live commentary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Expert Pilots", text: "Himalayan pilots with 10,000+ hours of experience in mountain flying." },
                  { icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Window Seats", text: "Guaranteed window seats for all passengers with unobstructed views." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Live Commentary", text: "Expert commentary identifying peaks and sharing Himalayan knowledge." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Flexible Rescheduling", text: "Weather guarantee with flexible rescheduling options." },
                  { icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Photo Opportunities", text: "Perfect conditions for capturing stunning Himalayan photography." },
                  { icon: <Plane className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Premium Aircraft", text: "Modern, well-maintained aircraft with safety as our top priority." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="p-5 sm:p-6 md:p-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9] mb-4 sm:mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#14383b] mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#556363] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included - clean list format matching Bhutan page */}
<section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
  <div className="mx-auto max-w-[1220px]">
    <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Included</div>
        <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
          What's <span className="text-[#cf6943]">Included</span>
        </h2>
      </div>
      <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
        Everything you need for an unforgettable aerial adventure.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
      <div className="space-y-4 sm:space-y-5">
        {[
          { title: "Aircraft", text: "Modern, well-maintained aircraft with experienced Himalayan pilots and safety as our top priority." },
          { title: "Window Seats", text: "Guaranteed window seats for all passengers with unobstructed views of the majestic Himalayas." },
          { title: "Live Commentary", text: "Expert pilot commentary identifying peaks, glaciers, and sharing fascinating Himalayan stories." },
          { title: "Timely Departures", text: "Punctual and reliable service with flexible rescheduling options in case of weather changes." },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f7f2e9] rounded-lg flex items-center justify-center text-[#cf6943] flex-shrink-0 border border-[#d8cec0]">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h3>
              <p className="text-[#556363] text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f7f2e9] p-5 sm:p-6 md:p-8 rounded-lg border border-[#d8cec0]">
        <h3 className="font-bold text-[#14383b] text-lg sm:text-xl mb-4">Additional Amenities</h3>
        <ul className="space-y-3">
          {[
            <><strong>Photo Opportunities:</strong> Perfect conditions for capturing stunning Himalayan photography from above</>,
            <><strong>Small Groups:</strong> Intimate group sizes for a comfortable and personalized experience</>,
            <><strong>Expert Pilots:</strong> Himalayan pilots with 10,000+ hours of mountain flying experience</>,
            <><strong>Safety Priority:</strong> Highest safety standards with regular aircraft maintenance and inspections</>,
            <><strong>Weather Guarantee:</strong> Flexible rescheduling or full refund if weather conditions are unsafe</>,
            <><strong>Airport Transfers:</strong> Convenient pickup and drop-off from your Kathmandu hotel</>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 text-[#cf6943] mt-0.5 flex-shrink-0" />
              <span className="text-[#556363] text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-8 sm:mt-12 text-center">
      <Link href="/contact">
        <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-none px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm">
          Book Your Mountain Flight Today
        </Button>
      </Link>
    </div>
  </div>
</section>
        </main>
      </div>
    </>
  );
}