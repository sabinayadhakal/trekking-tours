"use client";

import * as React from "react";
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
  Sunrise,
  Camera,
  Footprints,
  TreePine,
  Building2,
  Award,
  ShieldCheck,
  Utensils,
  Compass,
  Heart,
} from "lucide-react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Only include day hikes that exist in your folder structure
const dayHikes = [
  {
    id: 1,
    name: "Nagarkot Changunarayan Hiking",
    region: "Nagarkot",
    duration: "5-6 Hours",
    difficulty: "Easy",
    category: "Sunrise View",
    groupSize: "2-12",
    bestSeason: "Sep-May",
    price: 45,
    originalPrice: 60,
    image: "/images/used/nagarkot-changu.webp",
    rating: 4.9,
    reviews: 245,
    highlights: ["Himalayan Sunrise", "Panoramic Views", "Photo Points", "Breakfast with a View"],
    description: "Watch the sunrise paint the Himalayas in golden hues from one of Nepal's best viewpoints.",
    featured: true,
    link: "/services/day-hikings/nagarkot-changunarayan-hiking",
  },
  {
    id: 2,
    name: "Champa Devi Hiking",
    region: "Champadevi",
    duration: "5-6 Hours",
    difficulty: "Easy",
    category: "Forest",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 50,
    originalPrice: 60,
    image: "/images/used/champadevi-1.webp",
    rating: 4.7,
    reviews: 89,
    highlights: ["Oak Forest", "Wildlife Spotting", "Temple Visit", "Valley Views"],
    description: "Traverse through dense forests home to monkeys, deer, and colorful birds.",
    featured: false,
    link: "/services/day-hikings/champa-devi-hiking",
  },
  {
    id: 3,
    name: "Namobuddha Hiking",
    region: "Dhulikhel",
    duration: "6 Hours",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-12",
    bestSeason: "Sep-May",
    price: 50,
    originalPrice: 65,
    image: "/images/used/namobuddha-1.webp",
    rating: 4.8,
    reviews: 112,
    highlights: ["Buddhist Monastery", "Newari Villages", "Himalayan Views", "Sacred Site"],
    description: "Visit one of Nepal's most important pilgrimage sites with stunning mountain backdrops.",
    featured: true,
    link: "/services/day-hikings/namobuddha-hiking",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Sunrise View": return "bg-orange-100 text-orange-700";
    case "Nature": return "bg-green-100 text-green-700";
    case "Scenic": return "bg-blue-100 text-blue-700";
    case "Summit": return "bg-purple-100 text-purple-700";
    case "Cultural": return "bg-amber-100 text-amber-700";
    case "Forest": return "bg-emerald-100 text-emerald-700";
    case "Family": return "bg-pink-100 text-pink-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function DayHikesPage() {
  const router = useRouter();

  const handleBookNow = (hikeName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(hikeName)}`);
  };

  const featuredHike = dayHikes.find((hike) => hike.id === 1);

  // Schema.org Product schema for day hikes
  const productSchemas = dayHikes.map((hike) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": hike.name,
    "description": hike.description,
    "image": `https://www.himkalaadventure.com${hike.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": hike.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": `https://www.himkalaadventure.com${hike.link}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": hike.rating,
      "reviewCount": hike.reviews
    }
  }));

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided day hikes in Nepal including Nagarkot, Champa Devi, and Namobuddha treks.",
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
        <title>Day Hikes in Nepal - Himkala Adventure</title>
        <meta name="description" content="Explore Nepal's best day hikes from Kathmandu. Expert-guided sunrise hikes, forest trails, and cultural walks. Book your day adventure now!" />
        <link rel="canonical" href="https://www.himkalaadventure.com/services/day-hikings" />
        <meta property="og:title" content="Day Hikes in Nepal - Himkala Adventure" />
        <meta property="og:description" content="Explore Nepal's best day hikes from Kathmandu. Expert-guided sunrise hikes, forest trails, and cultural walks." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/hiking-1.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/services/day-hikings" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day Hikes in Nepal - Himkala Adventure" />
        <meta name="twitter:description" content="Explore Nepal's best day hikes from Kathmandu. Expert-guided sunrise hikes, forest trails, and cultural walks." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/hiking-1.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Page Header - matching Nepal page style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Day Adventures</div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Day <span className="text-[#cf6943]">Hikes</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Escape the city for a day and discover Nepal's natural beauty on foot. From sunrise viewpoints to forest trails and village walks.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Hike - matching Nepal page story layout */}
          {featuredHike && (
            <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
              <div className="mx-auto max-w-[1220px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                  <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                    <Image
                      src={featuredHike.image}
                      alt={featuredHike.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">⭐</div>
                      <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">MOST POPULAR</div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Featured Hike</div>
                    <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                      {featuredHike.name}
                    </h2>
                    <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                      <p>{featuredHike.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredHike.highlights.map((h, idx) => (
                          <span key={idx} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#556363]">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredHike.duration}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredHike.difficulty}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredHike.groupSize}
                      </span>
                    </div>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-[#66706d] text-sm line-through">${featuredHike.originalPrice}</span>
                        <span className="font-bold text-[#cf6943] text-xl sm:text-2xl">${featuredHike.price}</span>
                        <span className="text-[#556363] text-xs">/person</span>
                      </div>
                      <Button 
                        className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-none px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredHike.name);
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

          {/* All Hikes Grid - matching Nepal page trekking packages */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">All Hikes</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    One-Day <span className="text-[#cf6943]">Hiking Adventures</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  {dayHikes.length} hikes available. From sunrise views to cultural walks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {dayHikes.map((hike) => (
                  <Link
                    key={hike.id}
                    href={hike.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={hike.image}
                          alt={hike.name}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 33vw, 33vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {hike.rating}
                        </div>
                        <div className="absolute top-4 left-4 bg-[#cf6943] text-[#fff8ee] px-3 py-1.5 text-xs font-bold tracking-wide">
                          {hike.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[#66706d]">{hike.region}</span>
                          {hike.featured && (
                            <Badge className="bg-[#e47a4f] text-[#fff8ee] border-none text-[9px] px-2 py-0.5">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-[#14383b] mb-1">{hike.name}</h3>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed line-clamp-2">{hike.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Clock className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {hike.duration}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Mountain className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {hike.difficulty}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Users className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {hike.groupSize}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Calendar className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {hike.bestSeason}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {hike.highlights.slice(0, 2).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                          {hike.highlights.length > 2 && (
                            <span className="text-xs text-[#66706d]">+{hike.highlights.length - 2} more</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#d8cec0]/30">
                          <div>
                            <span className="text-[#66706d] text-xs line-through">${hike.originalPrice}</span>
                            <span className="font-bold text-[#cf6943] text-lg ml-1">${hike.price}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px] px-4 text-xs"
                            onClick={(e) => { e.preventDefault(); handleBookNow(hike.name); }}
                          >
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us - matching Nepal page why visit */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why Choose Us</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Expert Guides, <span className="text-[#cf6943]">Unforgettable Trails</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Certified guides, small groups, and unforgettable trails within easy reach.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Certified Guides", text: "All hikes led by government-certified guides with first aid training." },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Small Groups", text: "Intimate group sizes for a personalized and safe experience." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Curated Trails", text: "Carefully selected routes with the best views and experiences." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Local Knowledge", text: "Insider tips and cultural insights from our expert guides." },
                  { icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Photo Friendly", text: "Perfect spots for capturing Nepal's stunning landscapes." },
                  { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Flexible Scheduling", text: "Morning and afternoon departures to suit your schedule." },
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
        Everything you need for a perfect day hike experience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
      <div className="space-y-4 sm:space-y-5">
        {[
          { title: "Licensed Guide", text: "Government-certified guides with extensive local knowledge and first aid training." },
          { title: "Transportation", text: "Round-trip transport from Kathmandu to the trailhead and back." },
          { title: "Snacks & Lunch", text: "Packed snacks and a picnic lunch to keep you energized throughout the hike." },
          { title: "Flexible Timing", text: "Choose between morning or afternoon departures to suit your schedule." },
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
            <><strong>Photo Stops:</strong> Access to the best viewpoints for capturing Nepal's stunning landscapes</>,
            <><strong>Small Groups:</strong> Intimate groups of 2-12 people for a personalized experience</>,
            <><strong>First Aid Kit:</strong> Comprehensive medical supplies carried by your guide</>,
            <><strong>Trekking Poles:</strong> Available upon request for added stability on the trail</>,
            <><strong>Water:</strong> Complementary bottled water for the hike</>,
            <><strong>Entry Fees:</strong> All national park and monument entry fees included</>,
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
          Plan Your Day Hike Today
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