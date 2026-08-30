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
  Star,
  ArrowRight,
  Mountain,
  Sunrise,
  Camera,
  Building2,
  Landmark,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Day sightseeing tours data
const daySightseeings = [
  // Free Walking Tour - Featured First
  {
    id: 1,
    name: "Free Walking Tour Kathmandu",
    region: "Kathmandu",
    duration: "2-3 Hours",
    difficulty: "Easy",
    category: "Free Tour",
    groupSize: "2-15",
    bestSeason: "All Year",
    price: 0,
    originalPrice: 0,
    image: "/images/used/FWT-4.webp",
    rating: 4.9,
    reviews: 567,
    highlights: ["Thamel Streets", "Asan Market", "Durbar Square", "Local Culture"],
    description: "Join our free guided walking tour through the vibrant streets of Kathmandu and discover hidden gems, local markets, and ancient temples with our expert local guides.",
    featured: true,
    link: "/services/free-walking-tour-kathmandu",
    isFree: true,
  },
  {
    id: 2,
    name: "Kathmandu Sightseeing",
    region: "Kathmandu Valley",
    duration: "6-7 Hours",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-12",
    bestSeason: "All Year",
    price: 60,
    originalPrice: 80,
    image: "/images/used/monkey_temple.webp",
    rating: 4.9,
    reviews: 312,
    highlights: ["Swayambhunath Stupa", "Patan Durbar Square", "Pashupatinath Temple", "Bouddhanath Stupa"],
    description: "Explore the rich cultural heritage of Kathmandu Valley with visits to UNESCO World Heritage sites.",
    featured: false,
    link: "/services/day-sightseeings/kathmandu-sightseeing",
  },
  {
    id: 3,
    name: "Bhaktapur & Patan Sightseeing",
    region: "Bhaktapur & Patan",
    duration: "6-7 Hours",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "2-12",
    bestSeason: "All Year",
    price: 65,
    originalPrice: 85,
    image: "/images/used/bhaktapur-2.webp",
    rating: 4.8,
    reviews: 178,
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Pottery Square", "Golden Gate"],
    description: "Discover the medieval architecture and Newari culture of Bhaktapur and Patan's ancient cities.",
    featured: false,
    link: "/services/day-sightseeings/bhaktapur-patan-sightseeing",
  },
  {
    id: 4,
    name: "Bouddhanath & Kapan Sightseeing",
    region: "Kathmandu",
    duration: "4-5 Hours",
    difficulty: "Easy",
    category: "Spiritual",
    groupSize: "2-10",
    bestSeason: "All Year",
    price: 50,
    originalPrice: 65,
    image: "/images/used/kapan-1.webp",
    rating: 4.7,
    reviews: 134,
    highlights: ["Bouddhanath Stupa", "Kapan Monastery", "Prayer Flags", "Monastic Life"],
    description: "Experience the spiritual heart of Kathmandu at the largest stupa in Nepal and peaceful monastery.",
    featured: false,
    link: "/services/day-sightseeings/bouddhanath-kapan-sightseeing",
  },
  {
    id: 5,
    name: "Bungamati & Khokana Sightseeing",
    region: "Kathmandu",
    duration: "4-5 Hours",
    difficulty: "Easy",
    category: "Cultural",
    groupSize: "2-10",
    bestSeason: "All Year",
    price: 50,
    originalPrice: 65,
    image: "/images/used/bungamati-1.webp",
    rating: 4.6,
    reviews: 98,
    highlights: ["Rato Machhindranath Temple", "Newari Culture", "Mustard Oil Mills", "Traditional Villages"],
    description: "Visit traditional Newari villages and experience authentic rural life in the Kathmandu Valley.",
    featured: false,
    link: "/services/day-sightseeings/bungamati-khokana-patan-sightseeing",
  },
  {
    id: 6,
    name: "Changunarayan & Sanga Sightseeing",
    region: "Bhaktapur",
    duration: "5-6 Hours",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "2-12",
    bestSeason: "All Year",
    price: 55,
    originalPrice: 70,
    image: "/images/used/changunarayan-1.webp",
    rating: 4.8,
    reviews: 112,
    highlights: ["Changunarayan Temple", "UNESCO Site", "Himalayan Views", "Sanga Views"],
    description: "Visit the oldest Hindu temple in Nepal and enjoy panoramic views of the Himalayas.",
    featured: false,
    link: "/services/day-sightseeings/changunarayan-bhaktapur-sanga-sightseeing",
  },
  {
    id: 7,
    name: "Dakshinkali & Pharping Sightseeing",
    region: "Kathmandu",
    duration: "5-6 Hours",
    difficulty: "Easy",
    category: "Spiritual",
    groupSize: "2-10",
    bestSeason: "All Year",
    price: 50,
    originalPrice: 65,
    image: "/images/used/dakshinkali-2.webp",
    rating: 4.7,
    reviews: 89,
    highlights: ["Dakshinkali Temple", "Pharping Monastery", "Guru Rinpoche Cave", "River Views"],
    description: "Explore sacred Hindu temples and Buddhist monasteries in the scenic hills of southern Kathmandu.",
    featured: false,
    link: "/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Cultural": return "bg-amber-100 text-amber-700";
    case "Heritage": return "bg-purple-100 text-purple-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    case "Free Tour": return "bg-emerald-100 text-emerald-700";
    case "Sunrise View": return "bg-orange-100 text-orange-700";
    case "Nature": return "bg-green-100 text-green-700";
    case "Scenic": return "bg-blue-100 text-blue-700";
    case "Summit": return "bg-purple-100 text-purple-700";
    case "Forest": return "bg-emerald-100 text-emerald-700";
    case "Family": return "bg-pink-100 text-pink-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function DaySightseeingsPage() {
  const router = useRouter();

  const handleBookNow = (tourName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(tourName)}`);
  };

  const featuredTour = daySightseeings.find((tour) => tour.id === 1);
  const freeTour = daySightseeings.find((tour) => tour.isFree === true);

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
              <Landmark className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" /> Discover Nepal's Rich Heritage
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Sightseeing</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              Immerse yourself in Nepal's rich cultural tapestry with our expertly guided day tours. 
              From ancient temples and royal palaces to vibrant villages and UNESCO World Heritage sites.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Gift className="w-3 h-3 md:w-4 md:h-4 text-emerald-300" aria-hidden="true" /> Free Walking Tour
              </div>
              
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Building2 className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" aria-hidden="true" /> Ancient Cities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour - Free Walking Tour */}
      {featuredTour && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredTour.link}
              className="cursor-pointer block"
              aria-label={`View details for ${featuredTour.name}`}
            >
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10 relative">
                {featuredTour.isFree && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white border-none font-bold px-4 py-1.5 text-sm shadow-lg">
                      <Gift className="w-4 h-4 mr-1.5 inline" /> FREE TOUR
                    </Badge>
                  </div>
                )}
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredTour.image}
                      alt={`${featuredTour.name} - free walking tour in Kathmandu`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" aria-hidden="true" /> {featuredTour.rating} ({featuredTour.reviews})
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" aria-hidden="true" /> {featuredTour.region}
                    </Badge>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                      {featuredTour.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {featuredTour.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredTour.duration}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredTour.difficulty}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredTour.groupSize} People
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {featuredTour.bestSeason}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {featuredTour.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                      <div>
                        <span className="text-2xl md:text-3xl font-bold text-emerald-600">FREE</span>
                        <span className="text-slate-500 text-sm ml-2">/person</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base shadow-lg shadow-emerald-500/30"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredTour.name);
                        }}
                        aria-label={`Book ${featuredTour.name} now`}
                      >
                        Book Now - Free!
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

      {/* All Tours Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Tours</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Cultural & Heritage Sightseeing</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{daySightseeings.length}</span> tours
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {daySightseeings.map((tour) => (
              <Link 
                key={tour.id} 
                href={tour.link}
                className="cursor-pointer block"
                aria-label={`View details for ${tour.name}`}
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
                  <div className="relative h-40 md:h-52 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={`${tour.name} - ${tour.category} sightseeing tour in ${tour.region}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`border-none text-xs font-medium ${getCategoryColor(tour.category)}`}>
                        {tour.isFree ? <><Gift className="w-3 h-3 inline mr-1" /> FREE</> : tour.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" aria-hidden="true" /> {tour.rating}
                    </div>
                    {tour.featured && !tour.isFree && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                          Featured
                        </Badge>
                      </div>
                    )}
                    {tour.isFree && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white border-none text-xs font-bold">
                          <Gift className="w-3 h-3 inline mr-1" /> Free Tour
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                      {tour.region}
                    </Badge>
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                      {tour.name}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                      {tour.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {tour.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" aria-hidden="true" /> {tour.groupSize}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                      <div>
                        {tour.isFree ? (
                          <span className="text-lg md:text-xl font-bold text-emerald-600">FREE</span>
                        ) : (
                          <>
                            <span className="text-slate-400 text-xs line-through">${tour.originalPrice}</span>
                            <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${tour.price}</span>
                          </>
                        )}
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className={`font-bold rounded-full text-xs md:text-sm ${tour.isFree ? 'text-emerald-600 hover:bg-emerald-50' : 'text-[#2d6a8a] hover:bg-[#C5E0ED]/20'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(tour.name);
                        }}
                        aria-label={`Book ${tour.name}`}
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
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Choose Our Tours</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Expert Guides, Timeless Stories
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our knowledgeable guides bring Nepal's rich history and culture to life. From ancient temples 
                to hidden courtyards, discover the stories behind every monument and tradition.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Certified Cultural & Heritage Guides",
                  "Small Groups for Personalized Experience",
                  "Round-trip Transportation Included",
                  "Flexible Itineraries & Multiple Language Options",
                  "Free Walking Tours Available Daily",
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
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base" aria-label="Contact us to plan your sightseeing tour">
                  Plan Your Tour
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="/images/used/nepal-temple.webp"
                alt="Historic temple and palace in Kathmandu Valley with intricate Newari architecture"
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