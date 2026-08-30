"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Trees,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  ArrowRight,
  PawPrint,
  Eye,
  Camera,
  Bird,
  Cat,
  Fish,
  Turtle,
  Rabbit,
  Award,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Only include jungle safaris that exist in your folder structure
const jungleSafaris = [
  {
    id: 1,
    name: "Chitwan NP Jungle Safari",
    park: "Chitwan National Park",
    duration: "7 Days with Kathmandu Arrival and Departure",
    difficulty: "Easy",
    groupSize: "2-12",
    bestSeason: "Oct-Mar",
    price: 650,
    originalPrice: 850,
    image: "/images/used/nepal-chitwan.webp",
    rating: 4.9,
    reviews: 342,
    highlights: ["Elephant Safari", "Canoe Ride", "Bird Watching", "Tharu Culture"],
    description: "Experience Nepal's premier wildlife destination with elephant safaris and jungle walks.",
    featured: true,
    activities: ["Elephant Safari", "Jungle Walk", "Canoe", "Cultural Show"],
    wildlife: ["Rhino", "Tiger", "Crocodile", "Birds"],
    link: "/services/jungle-safari/chitwan-np-jungle-safari",
  },
];

const getWildlifeIcon = (animal: string) => {
  const animalLower = animal.toLowerCase();
  
  if (animalLower.includes("tiger") || animalLower.includes("leopard") || animalLower.includes("cat")) {
    return Cat;
  } else if (animalLower.includes("elephant")) {
    return Eye;
  } else if (animalLower.includes("rhino") || animalLower.includes("buffalo")) {
    return Eye;
  } else if (animalLower.includes("bird")) {
    return Bird;
  } else if (animalLower.includes("dolphin") || animalLower.includes("whale")) {
    return Fish;
  } else if (animalLower.includes("crocodile") || animalLower.includes("turtle")) {
    return Turtle;
  } else if (animalLower.includes("bear")) {
    return PawPrint;
  } else if (animalLower.includes("deer") || animalLower.includes("antelope")) {
    return Rabbit;
  } else if (animalLower.includes("monkey")) {
    return Cat;
  } else if (animalLower.includes("landscape")) {
    return Camera;
  } else if (animalLower.includes("reptile")) {
    return Turtle;
  } else {
    return PawPrint;
  }
};

export default function JungleSafariPage() {
  const router = useRouter();

  const handleBookNow = (safariName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(safariName)}`);
  };

  const featuredSafari = jungleSafaris.find((safari) => safari.id === 1);

  // Schema.org Product schemas for each safari
  const productSchemas = jungleSafaris.map((safari) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": safari.name,
    "description": safari.description,
    "image": `https://www.himkalaadventure.com${safari.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Himkala Adventure Pvt. Ltd."
    },
    "offers": {
      "@type": "Offer",
      "price": safari.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": `https://www.himkalaadventure.com${safari.link}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": safari.rating,
      "reviewCount": safari.reviews
    }
  }));

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Himkala Adventure Pvt. Ltd.",
    "description": "Expert-guided jungle safaris in Nepal including Chitwan National Park wildlife adventures.",
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
        <title>Jungle Safari in Nepal - Wildlife Tours - Himkala Adventure</title>
        <meta name="description" content="Experience Nepal's incredible wildlife with expert-guided jungle safaris. Chitwan National Park, Bengal tigers, one-horned rhinos, and more. Book your wildlife adventure now!" />
        <link rel="canonical" href="https://www.himkalaadventure.com/services/jungle-safari" />
        <meta property="og:title" content="Jungle Safari in Nepal - Wildlife Tours - Himkala Adventure" />
        <meta property="og:description" content="Experience Nepal's incredible wildlife with expert-guided jungle safaris. Chitwan National Park, Bengal tigers, one-horned rhinos, and more." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/nepal-chitwan.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/services/jungle-safari" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jungle Safari in Nepal - Wildlife Tours - Himkala Adventure" />
        <meta name="twitter:description" content="Experience Nepal's incredible wildlife with expert-guided jungle safaris. Chitwan National Park, Bengal tigers, one-horned rhinos, and more." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/nepal-chitwan.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Page Header - matching Day Hikes style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Wildlife Adventures</div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Jungle <span className="text-[#cf6943]">Safari</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Discover Nepal's incredible wildlife in lush national parks, home to rare Bengal tigers, one-horned rhinoceros, and over 500 bird species.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Safari - matching Day Hikes featured layout */}
          {featuredSafari && (
            <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
              <div className="mx-auto max-w-[1220px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                  <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                    <Image
                      src={featuredSafari.image}
                      alt={featuredSafari.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">🐘</div>
                      <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">WILDLIFE ADVENTURE</div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Featured Safari</div>
                    <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                      {featuredSafari.name}
                    </h2>
                    <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                      <p>{featuredSafari.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredSafari.highlights.map((h, idx) => (
                          <span key={idx} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-[#14383b] mb-1.5">Wildlife You May Spot:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {featuredSafari.wildlife.map((animal, idx) => {
                            const Icon = getWildlifeIcon(animal);
                            return (
                              <span key={idx} className="flex items-center gap-1 text-[10px] border border-[#d8cec0] text-[#556363] px-2 py-0.5 rounded">
                                <Icon className="w-3 h-3 text-[#cf6943]" /> {animal}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#556363]">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredSafari.duration.replace(" with Kathmandu Arrival and Departure", "")}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Trees className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredSafari.park}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredSafari.groupSize}
                      </span>
                    </div>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-[#66706d] text-sm line-through">${featuredSafari.originalPrice}</span>
                        <span className="font-bold text-[#cf6943] text-xl sm:text-2xl">${featuredSafari.price}</span>
                        <span className="text-[#556363] text-xs">/person</span>
                      </div>
                      <Button 
                        className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-none px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredSafari.name);
                        }}
                      >
                        Book Safari <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* All Safaris Grid - matching Day Hikes grid */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">All Safaris</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Explore <span className="text-[#cf6943]">Wildlife Adventures</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  {jungleSafaris.length} safari available. From elephant rides to jungle walks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {jungleSafaris.map((safari) => (
                  <Link
                    key={safari.id}
                    href={safari.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={safari.image}
                          alt={safari.name}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 33vw, 33vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {safari.rating}
                        </div>
                        <div className="absolute top-4 left-4 bg-[#cf6943] text-[#fff8ee] px-3 py-1.5 text-xs font-bold tracking-wide">
                          {safari.difficulty}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-[#66706d]">{safari.park}</span>
                          {safari.featured && (
                            <Badge className="bg-[#e47a4f] text-[#fff8ee] border-none text-[9px] px-2 py-0.5">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-[#14383b] mb-1">{safari.name}</h3>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed line-clamp-2">{safari.description}</p>
                        
                        {/* Wildlife Icons */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {safari.wildlife.slice(0, 4).map((animal, idx) => {
                            const Icon = getWildlifeIcon(animal);
                            return (
                              <span key={idx} className="flex items-center gap-1 text-[10px] border border-[#d8cec0] text-[#556363] px-1.5 py-0.5 rounded">
                                <Icon className="w-2.5 h-2.5 text-[#cf6943]" /> {animal}
                              </span>
                            );
                          })}
                          {safari.wildlife.length > 4 && (
                            <span className="text-[10px] text-[#66706d]">+{safari.wildlife.length - 4}</span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Clock className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {safari.duration.replace(" with Kathmandu Arrival and Departure", "")}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Users className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {safari.groupSize}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Calendar className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {safari.bestSeason}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <MapPin className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {safari.park.replace(" National Park", "")}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#d8cec0]/30">
                          <div>
                            <span className="text-[#66706d] text-xs line-through">${safari.originalPrice}</span>
                            <span className="font-bold text-[#cf6943] text-lg ml-1">${safari.price}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px] px-4 text-xs"
                            onClick={(e) => { e.preventDefault(); handleBookNow(safari.name); }}
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
                    Conservation-Focused <span className="text-[#cf6943]">Wildlife Experiences</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Certified naturalists, ethical wildlife viewing, and sustainable tourism.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Expert Naturalists", text: "Certified guides with 10+ years of wildlife experience and deep conservation knowledge." },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Ethical Wildlife Viewing", text: "Prioritizing animal welfare with responsible viewing practices and minimal impact." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Conservation Focused", text: "Direct contributions to local conservation projects and community programs." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Small Groups", text: "Intimate group sizes for minimal environmental impact and optimal wildlife sightings." },
                  { icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Photography Focus", text: "Perfect opportunities for wildlife photography with expert guidance." },
                  { icon: <Trees className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Pristine Wilderness", text: "Access to Nepal's best national parks with diverse ecosystems and wildlife." },
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
        Everything you need for an unforgettable wildlife adventure.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
      <div className="space-y-4 sm:space-y-5">
        {[
          { title: "Expert Naturalist", text: "Government-certified wildlife guides with deep knowledge of Nepal's ecosystems and animal behavior." },
          { title: "Park Entry Fees", text: "All national park entry permits and conservation fees included in the safari price." },
          { title: "Safari Activities", text: "Elephant safari, jungle walks, canoe rides, and cultural shows with local communities." },
          { title: "Accommodation", text: "Comfortable lodge stays with all necessary amenities for a relaxing wilderness experience." },
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
            <><strong>Photo Opportunities:</strong> Access to the best wildlife viewing spots with expert guidance</>,
            <><strong>Small Groups:</strong> Intimate groups of 2-12 people for minimal environmental impact</>,
            <><strong>Local Guides:</strong> Community-based naturalists with generations of local knowledge</>,
            <><strong>Cultural Experiences:</strong> Tharu culture shows, village visits, and traditional hospitality</>,
            <><strong>All Meals:</strong> Breakfast, lunch, and dinner included during the safari stay</>,
            <><strong>Transportation:</strong> Round-trip transport from Kathmandu to the national park</>,
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
          Customize Your Safari Today
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