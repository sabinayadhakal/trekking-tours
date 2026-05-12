"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Landmark,
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  ArrowRight,
  UserCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Only include cultural tours that exist in your folder structure
const culturalTours = [
  {
    id: 1,
    name: "Historic Nature Scenic Photography Tour",
    region: "Western Nepal",
    duration: "12 Days",
    difficulty: "Easy",
    category: "Photography",
    groupSize: "4-8",
    bestSeason: "Sep-May",
    price: 1895,
    originalPrice: 2200,
    image: "/images/used/historic-scenic-photography-nepal.avif",
    rating: 4.9,
    reviews: 67,
    highlights: ["Historic Sites", "Nature", "Scenic Views", "Photography"],
    description: "Capture Nepal's stunning landscapes and cultural heritage with expert photography guidance.",
    featured: true,
    link: "/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour",
  },
  {
    id: 2,
    name: "Kathmandu Bhaktapur Lalitpur Tour",
    region: "Kathmandu Valley",
    duration: "5 Days",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "4-12",
    bestSeason: "Year Round",
    price: 750,
    originalPrice: 950,
    image: "/images/used/durbar_square.avif",
    rating: 4.8,
    reviews: 156,
    highlights: ["Kathmandu Durbar Square", "Bhaktapur", "Patan", "Newari Culture"],
    description: "Explore the three medieval kingdoms of the Kathmandu Valley and their rich cultural heritage.",
    featured: true,
    link: "/services/multi-day-cultural-tours/kathmandu-bhaktapur-lalitpur-tour",
  },
  {
    id: 3,
    name: "Kathmandu Pokhara Lumbini Chitwan Tour",
    region: "Western Nepal",
    duration: "10 Days",
    difficulty: "Easy",
    category: "Heritage & Nature",
    groupSize: "4-10",
    bestSeason: "Sep-May",
    price: 2200,
    image: "/images/used/kathmandu-lumbini-pokhara-nepal.avif",
    rating: 4.9,
    reviews: 112,
    highlights: ["Kathmandu Valley", "Pokhara", "Lumbini", "Chitwan"],
    description: "The ultimate Nepal experience covering cultural heritage, natural beauty, and wildlife.",
    featured: false,
    link: "/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour",
  },
  {
    id: 4,
    name: "Nepal Heritage Sites Tour",
    region: "Kathmandu Valley",
    duration: "10 Days",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "4-12",
    bestSeason: "Year Round",
    price: 2300,
    originalPrice: 2450,
    image: "/images/used/nepal-heritage-sites-tour-nepal.avif",
    rating: 4.8,
    reviews: 134,
    highlights: ["UNESCO Sites", "Durbar Squares", "Stupas", "Temples"],
    description: "Comprehensive tour of Nepal's cultural heritage sites with expert guides.",
    featured: true,
    link: "/services/multi-day-cultural-tours/nepal-heritage-sites-tour",
  },
  {
    id: 5,
    name: "Nepal Temples and Stupas Tour",
    region: "Kathmandu Valley",
    duration: "10 Days",
    difficulty: "Easy",
    category: "Spiritual",
    groupSize: "4-12",
    bestSeason: "Year Round",
    price: 2200,
    originalPrice: 2350,
    image: "/images/used/monkey_temple.avif",
    rating: 4.8,
    reviews: 98,
    highlights: ["Pashupatinath", "Boudhanath", "Swayambhunath", "Ancient Temples"],
    description: "Spiritual journey through Nepal's most sacred temples and stupas.",
    featured: false,
    link: "/services/multi-day-cultural-tours/nepal-temples-and-stupas-tour",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Heritage": return "bg-purple-100 text-purple-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    case "Photography": return "bg-blue-100 text-blue-700";
    case "Heritage & Nature": return "bg-green-100 text-green-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function MultiDayCulturalToursPage() {
  const router = useRouter();

  const handleBookNow = (tourName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(tourName)}`);
  };

  const featuredTour = culturalTours.find((tour) => tour.id === 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-gradient-to-br from-[#0f2940] to-[#1a4166] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#C5E0ED] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#7fb8d4] rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-[#C5E0ED]/20 text-white backdrop-blur-md border-[#C5E0ED]/40 py-1.5 md:py-2 px-4 md:px-5 text-xs md:text-sm">
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Deep Immersion in Nepalese Traditions
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Multi-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Cultural Tours</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From remote mountain monasteries and ancient trading villages to living heritage cities and spiritual sites, 
              embark on an immersive journey through Nepal's diverse cultural landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 20+ Ethnic Groups
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 5-11 Days
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <UserCircle className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Cultural Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour */}
      {featuredTour && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredTour.link}
              className="cursor-pointer block"
            >
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredTour.image}
                      alt={featuredTour.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none font-bold px-3 py-1 text-xs md:text-sm">
                        Most Popular
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredTour.rating} ({featuredTour.reviews})
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredTour.region}
                    </Badge>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                      {featuredTour.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {featuredTour.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.duration}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.category}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.groupSize} People
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredTour.bestSeason}
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
                        <span className="text-slate-400 text-sm line-through">${featuredTour.originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredTour.price}</span>
                        <span className="text-slate-500 text-sm">/person</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredTour.name);
                        }}
                      >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4" />
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
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Multi-Day Cultural Experiences</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{culturalTours.length}</span> tours
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {culturalTours.map((tour) => (
              <Link 
                key={tour.id} 
                href={tour.link}
                className="cursor-pointer block"
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
                  <div className="relative h-40 md:h-52 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`border-none text-xs font-medium ${getCategoryColor(tour.category)}`}>
                        {tour.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {tour.rating}
                    </div>
                    {tour.featured && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                          Featured
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
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {tour.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {tour.groupSize}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 text-xs line-through">${tour.originalPrice}</span>
                        <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${tour.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(tour.name);
                        }}
                      >
                        Book Now <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
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
                Authentic Cultural Immersion with Local Experts
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our multi-day cultural tours are designed by ethnographers and local community leaders who provide deep insights into Nepal's diverse ethnic traditions, festivals, and ways of life.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Expert Cultural Guides with Anthropology Backgrounds",
                  "Authentic Home Stays & Community-Based Tourism",
                  "Hands-On Workshops with Local Artisans",
                  "Small Groups for Meaningful Cultural Exchange",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#0f2940]" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                  Customize Your Journey
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="/images/used/patan-1.avif"
                alt="Traditional Nepalese Culture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}