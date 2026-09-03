"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  CheckCircle,
  Star,
  ArrowRight,
  Mountain,
  Camera,
  Footprints,
  Building2,
  Landmark,
  Gift,
  Award,
  ShieldCheck,
  Compass,
  Heart,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { loadManagedServices } from "@/lib/firebase/managed-services-repository";
import { MANAGED_SERVICES_FALLBACK, MANAGED_SERVICES_UPDATED_EVENT } from "@/lib/managed-services";


export default function DaySightseeingsPage() {
  const router = useRouter();
  const [daySightseeings, setDaySightseeings] = React.useState(MANAGED_SERVICES_FALLBACK.daySightseeings);
  const [expandedTour, setExpandedTour] = React.useState<string | null>(null);

  React.useEffect(() => {
    const refresh = () => { void loadManagedServices("daySightseeings").then(({ services }) => setDaySightseeings(services.filter((service) => service.published))); };
    refresh();
    const onUpdate = (event: Event) => { if ((event as CustomEvent).detail === "daySightseeings") refresh(); };
    window.addEventListener(MANAGED_SERVICES_UPDATED_EVENT, onUpdate);
    return () => window.removeEventListener(MANAGED_SERVICES_UPDATED_EVENT, onUpdate);
  }, []);

  const handleBookNow = (tourName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(tourName)}`);
  };

  const featuredTour = daySightseeings.find((tour) => tour.featured) || daySightseeings[0];

  const toggleTour = (id: string) => {
    setExpandedTour(expandedTour === id ? null : id);
  };

  // Schema.org Product schema for sightseeing tours
  const productSchemas = daySightseeings.map((tour) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": tour.name,
    "description": tour.description,
    "image": `https://www.himkalaadventure.com${tour.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": tour.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": `https://www.himkalaadventure.com${tour.link}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tour.rating,
      "reviewCount": tour.reviews
    }
  }));

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided day sightseeing tours in Nepal's Kathmandu Valley including UNESCO World Heritage sites.",
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
        <title>Day Sightseeing Tours in Nepal - Himkala Adventure</title>
        <meta name="description" content="Explore Nepal's cultural heritage with our day sightseeing tours. UNESCO World Heritage sites, ancient temples, and historic cities. Book your cultural tour today!" />
        <link rel="canonical" href="https://www.himkalaadventure.com/services/day-sightseeings" />
        <meta property="og:title" content="Day Sightseeing Tours in Nepal - Himkala Adventure" />
        <meta property="og:description" content="Explore Nepal's cultural heritage with our day sightseeing tours. UNESCO World Heritage sites, ancient temples, and historic cities." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/nepal-temple.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/services/day-sightseeings" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day Sightseeing Tours in Nepal - Himkala Adventure" />
        <meta name="twitter:description" content="Explore Nepal's cultural heritage with our day sightseeing tours. UNESCO World Heritage sites, ancient temples, and historic cities." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/nepal-temple.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Page Header - matching Day Hikes style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Cultural Tours</div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Day <span className="text-[#cf6943]">Sightseeing</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Immerse yourself in Nepal's rich cultural tapestry with our expertly guided day tours. From ancient temples and royal palaces to vibrant villages and UNESCO World Heritage sites.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Tour - Free Walking Tour */}
          {featuredTour && (
            <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
              <div className="mx-auto max-w-[1220px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                  <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                    <Image
                      src={featuredTour.image}
                      alt={featuredTour.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">🎁</div>
                      <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">FREE TOUR</div>
                    </div>
                    {featuredTour.isFree && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-emerald-500 text-white border-none font-bold px-3 py-1.5 text-xs shadow-lg">
                          <Gift className="w-3 h-3 mr-1 inline" /> FREE
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Featured Tour</div>
                    <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                      {featuredTour.name}
                    </h2>
                    <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                      <p>{featuredTour.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredTour.highlights.map((h, idx) => (
                          <span key={idx} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#556363]">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredTour.duration}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredTour.difficulty}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredTour.groupSize}
                      </span>
                    </div>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="font-bold text-emerald-600 text-xl sm:text-2xl">FREE</span>
                        <span className="text-[#556363] text-xs">/person</span>
                      </div>
                      <Button 
                        className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-none px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredTour.name);
                        }}
                      >
                        Book Now - Free! <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* All Tours Grid - matching Day Hikes style */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">All Tours</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Cultural & <span className="text-[#cf6943]">Heritage Sightseeing</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  {daySightseeings.length} tours available. From ancient temples to living heritage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {daySightseeings.map((tour) => (
                  <Link
                    key={tour.id}
                    href={tour.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={tour.image}
                          alt={tour.name}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 33vw, 33vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {tour.rating}
                        </div>
                        <div className="absolute top-4 left-4 bg-[#cf6943] text-[#fff8ee] px-3 py-1.5 text-xs font-bold tracking-wide">
                          {tour.isFree ? "FREE" : tour.category}
                        </div>
                        {tour.isFree && (
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-emerald-500 text-white border-none text-[9px] font-bold px-2 py-0.5">
                              <Gift className="w-2.5 h-2.5 mr-1 inline" /> Free Tour
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[#66706d]">{tour.region}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#14383b] mb-1">{tour.name}</h3>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed line-clamp-2">{tour.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Clock className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {tour.duration}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Users className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {tour.groupSize}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <MapPin className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {tour.region}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Calendar className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {tour.bestSeason}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tour.highlights.slice(0, 2).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                          {tour.highlights.length > 2 && (
                            <span className="text-xs text-[#66706d]">+{tour.highlights.length - 2} more</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#d8cec0]/30">
                          <div>
                            {tour.isFree ? (
                              <span className="font-bold text-emerald-600 text-lg">FREE</span>
                            ) : (
                              <>
                                <span className="text-[#66706d] text-xs line-through">${tour.originalPrice}</span>
                                <span className="font-bold text-[#cf6943] text-lg ml-1">${tour.price}</span>
                              </>
                            )}
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px] px-4 text-xs"
                            onClick={(e) => { e.preventDefault(); handleBookNow(tour.name); }}
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
                    Expert Guides, <span className="text-[#cf6943]">Timeless Stories</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Certified guides, small groups, and unforgettable cultural experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Certified Guides", text: "All tours led by government-certified cultural guides with deep local knowledge." },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Small Groups", text: "Intimate group sizes for a personalized and immersive experience." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Curated Routes", text: "Carefully selected heritage sites with the best stories and insights." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Local Knowledge", text: "Insider tips and cultural insights from our expert local guides." },
                  { icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Photo Friendly", text: "Perfect spots for capturing Nepal's stunning architecture and culture." },
                  { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Flexible Scheduling", text: "Morning, afternoon, and full-day options to suit your schedule." },
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
        Everything you need for a perfect sightseeing experience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
      <div className="space-y-4 sm:space-y-5">
        {[
          { title: "Licensed Guide", text: "Government-certified cultural guides with deep local knowledge and storytelling expertise." },
          { title: "Transportation", text: "Round-trip transport from Kathmandu to all tour destinations." },
          { title: "Entry Fees", text: "All UNESCO World Heritage site entry fees included in the tour price." },
          { title: "Expert Insights", text: "Historical, cultural, and architectural knowledge shared throughout the tour." },
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
            <><strong>Flexible Timing:</strong> Choose between morning, afternoon, or full-day departures</>,
            <><strong>Photo Stops:</strong> Access to the best photo opportunities at each heritage site</>,
            <><strong>Small Groups:</strong> Intimate groups of 2-15 people for a personalized experience</>,
            <><strong>Free Tour Option:</strong> Free walking tour available in Kathmandu (tips-based)</>,
            <><strong>Cultural Insights:</strong> Local stories and traditions shared at each location</>,
            <><strong>Comfortable Pace:</strong> Tours designed for easy walking with regular rest stops</>,
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
          Plan Your Sightseeing Tour Today
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
