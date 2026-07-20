"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Trees,
  Calendar,
  Clock,
  Users,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-700";
    case "Moderate": return "bg-yellow-100 text-yellow-700";
    case "Challenging": return "bg-orange-100 text-orange-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

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
    <div className="min-h-screen bg-white">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Page Header */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-gradient-to-br from-[#0f2940] to-[#1a4166] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#C5E0ED] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#7fb8d4] rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-[#C5E0ED]/20 text-white backdrop-blur-md border-[#C5E0ED]/40 py-1.5 md:py-2 px-4 md:px-5 text-xs md:text-sm">
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Nepal's Wildlife Paradise
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Jungle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Safari</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              Discover Nepal's incredible wildlife in lush national parks, home to rare Bengal tigers, 
              one-horned rhinoceros, and over 500 bird species in pristine wilderness.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Trees className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" /> 5 National Parks
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <PawPrint className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" /> 200+ Species
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Camera className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" /> Photography Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Safari */}
      {featuredSafari && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredSafari.link}
              className="cursor-pointer block"
              aria-label={`View details for ${featuredSafari.name}`}
            >
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredSafari.image}
                      alt={`${featuredSafari.name} - jungle safari in Nepal's ${featuredSafari.park}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1 text-xs md:text-sm">
                        Most Popular
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" aria-hidden="true" /> {featuredSafari.rating} ({featuredSafari.reviews})
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" aria-hidden="true" /> {featuredSafari.park}
                    </Badge>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                      {featuredSafari.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {featuredSafari.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredSafari.duration}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Trees className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredSafari.difficulty}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredSafari.groupSize} People
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredSafari.bestSeason}
                      </div>
                    </div>
                    
                    {/* Wildlife Icons */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-sm font-medium text-[#0f2940] mb-2">Spot These Animals:</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredSafari.wildlife.map((animal, idx) => {
                          const Icon = getWildlifeIcon(animal);
                          return (
                            <span key={idx} className="flex items-center gap-1.5 text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                              <Icon className="w-3 h-3" aria-hidden="true" /> {animal}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {featuredSafari.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                      <div>
                        <span className="text-slate-400 text-sm line-through">${featuredSafari.originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredSafari.price}</span>
                        <span className="text-slate-500 text-sm">/person</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredSafari.name);
                        }}
                        aria-label={`Book ${featuredSafari.name} now`}
                      >
                        Book Safari
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* All Safaris Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Safaris</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Explore Wildlife Adventures</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{jungleSafaris.length}</span> safaris
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {jungleSafaris.map((safari) => (
              <Link 
                key={safari.id} 
                href={safari.link}
                className="cursor-pointer block"
                aria-label={`View details for ${safari.name}`}
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
                  <div className="relative h-40 md:h-52 overflow-hidden">
                    <Image
                      src={safari.image}
                      alt={`${safari.name} - jungle safari in Nepal with wildlife viewing`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`border-none text-xs font-medium ${getDifficultyColor(safari.difficulty)}`}>
                        {safari.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" aria-hidden="true" /> {safari.rating}
                    </div>
                    {safari.featured && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                      {safari.park.replace(" National Park", "")}
                    </Badge>
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                      {safari.name}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                      {safari.description}
                    </p>
                    
                    {/* Wildlife Mini Icons */}
                    <div className="flex items-center gap-1.5 mb-3 md:mb-4">
                      {safari.wildlife.slice(0, 3).map((animal, idx) => {
                        const Icon = getWildlifeIcon(animal);
                        return (
                          <span key={idx} className="text-xs bg-[#C5E0ED]/10 text-[#2d6a8a] p-1 rounded-full">
                            <Icon className="w-3 h-3" aria-hidden="true" />
                          </span>
                        );
                      })}
                      {safari.wildlife.length > 3 && (
                        <span className="text-xs text-slate-500">+{safari.wildlife.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {safari.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {safari.groupSize}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 text-xs line-through">${safari.originalPrice}</span>
                        <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${safari.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(safari.name);
                        }}
                        aria-label={`Book ${safari.name}`}
                      >
                        Book Now <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" aria-hidden="true" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Choose Our Safaris</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Conservation-Focused Wildlife Experiences
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our safaris are led by certified naturalists and conservationists who prioritize animal welfare 
                and sustainable tourism while offering unforgettable wildlife encounters.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Certified Naturalist Guides with 10+ Years Experience",
                  "Ethical Wildlife Viewing Practices",
                  "Direct Contribution to Conservation Projects",
                  "Small Groups for Minimal Environmental Impact",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#0f2940]" aria-hidden="true" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base" aria-label="Contact us to customize your jungle safari">
                  Customize Your Safari
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="/images/used/chitwan-1.webp"
                alt="Jungle safari elephant ride in Chitwan National Park, Nepal - wildlife adventure experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}