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
  Camera,
  Building2,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Only include sightseeing tours that exist in your folder structure
const dayTours = [
  {
    id: 1,
    name: "Bhaktapur Patan Sightseeing",
    city: "Bhaktapur",
    duration: "6 Hours",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "2-12",
    bestSeason: "Year Round",
    price: 75,
    originalPrice: 95,
    image: "/images/used/bhaktapur-patan-nepal.avif",
    rating: 4.9,
    reviews: 312,
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Golden Temple", "Traditional Crafts"],
    description: "Discover ancient Newari architecture and living culture in two of Nepal's most historic cities.",
    featured: true,
    link: "/services/day-sightseeings/bhaktapur-patan-sightseeing",
  },
  {
    id: 2,
    name: "Bungamati Khokana Patan Sightseeing",
    city: "Patan",
    duration: "5 Hours",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "2-15",
    bestSeason: "Year Round",
    price: 65,
    originalPrice: 85,
    image: "/images/used/bungamati-1.avif",
    rating: 4.8,
    reviews: 156,
    highlights: ["Bungamati Village", "Khokana Village", "Patan Durbar Square", "Traditional Newari Life"],
    description: "Explore authentic Newari villages and the historic city of Patan in one immersive tour.",
    featured: false,
    link: "/services/day-sightseeings/bungamati-khokana-patan-sightseeing",
  },
  {
    id: 3,
    name: "Bouddhanath Kapan Sightseeing",
    city: "Baudha",
    duration: "3 Hours",
    difficulty: "Easy",
    category: "Spiritual",
    groupSize: "2-10",
    bestSeason: "Year Round",
    price: 45,
    originalPrice: 60,
    image: "/images/used/nepal-heritage-sites-tour-nepal.avif",
    rating: 4.8,
    reviews: 203,
    highlights: ["Great Bouddhanath Stupa", "Kapan Monastery", "Tibetan Buddhist Culture", "Monastery Visit"],
    description: "Experience Tibetan Buddhist culture at one of the largest stupas in the world and nearby monasteries.",
    featured: true,
    link: "/services/day-sightseeings/bouddhanath-kapan-sightseeing",
  },
  {
    id: 4,
    name: "Changunarayan Bhaktapur Sanga Sightseeing",
    city: "Bhaktapur",
    duration: "5 Hours",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "2-8",
    bestSeason: "Year Round",
    price: 55,
    originalPrice: 70,
    image: "/images/used/changunarayan-1.avif",
    rating: 4.7,
    reviews: 134,
    highlights: ["Changunarayan Temple", "Bhaktapur Durbar Square", "Sanga Viewpoint", "Traditional Villages"],
    description: "Visit Nepal's oldest temple and explore the medieval city of Bhaktapur with panoramic views.",
    featured: false,
    link: "/services/day-sightseeings/changunarayan-bhaktapur-sanga-sightseeing",
  },
  {
    id: 5,
    name: "Dakshinkali Pharping Kirtipur Sightseeing",
    city: "Kathmandu",
    duration: "5 Hours",
    difficulty: "Moderate",
    category: "Spiritual",
    groupSize: "2-12",
    bestSeason: "Year Round",
    price: 50,
    originalPrice: 65,
    image: "/images/used/dakshinkali-2.avif",
    rating: 4.7,
    reviews: 98,
    highlights: ["Dakshinkali Temple", "Pharping Caves", "Kirtipur Old Town", "Vajrayogini Temple"],
    description: "Discover sacred temples, meditation caves, and a historic hilltop town in one spiritual journey.",
    featured: false,
    link: "/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing",
  },
  {
    id: 6,
    name: "Kathmandu Sightseeing",
    city: "Kathmandu",
    duration: "6 Hours",
    difficulty: "Easy",
    category: "Heritage",
    groupSize: "2-10",
    bestSeason: "Year Round",
    price: 60,
    originalPrice: 80,
    image: "/images/used/monkey_temple.avif",
    rating: 4.9,
    reviews: 267,
    highlights: ["Swayambhunath Stupa", "Kathmandu Durbar Square", "Pashupatinath Temple", "Bouddhanath Stupa"],
    description: "Complete introduction to Kathmandu's UNESCO World Heritage sites and spiritual heart.",
    featured: true,
    link: "/services/day-sightseeings/kathmandu-sightseeing",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Heritage": return "bg-purple-100 text-purple-700";
    case "Spiritual": return "bg-indigo-100 text-indigo-700";
    case "Scenic": return "bg-blue-100 text-blue-700";
    case "Architecture": return "bg-amber-100 text-amber-700";
    case "Art": return "bg-pink-100 text-pink-700";
    case "Food": return "bg-orange-100 text-orange-700";
    case "Markets": return "bg-emerald-100 text-emerald-700";
    case "Photography": return "bg-cyan-100 text-cyan-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function DaySightseeingPage() {
  const router = useRouter();

  const handleBookNow = (tourName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(tourName)}`);
  };

  const featuredTour = dayTours.find((tour) => tour.id === 1);

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
              <Building2 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Discover Nepal's Urban Treasures
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Sightseeing Tours</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From ancient temples and royal palaces to vibrant markets and culinary adventures, 
              explore the rich tapestry of Nepal's cities with expert local guides.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Landmark className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> UNESCO Heritage
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 3-6 Hours
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Camera className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Photo Friendly
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
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredTour.city}
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
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Day Sightseeing Experiences</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{dayTours.length}</span> tours
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {dayTours.map((tour) => (
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
                      {tour.city}
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
                Authentic Sightseeing with Local Experts
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Our sightseeing tours are designed by locals who know every hidden gem, every story behind ancient walls, 
                and every flavor that defines Nepal's urban culture.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Certified Local Guides with Deep Cultural Knowledge",
                  "Small Groups for Personalized Attention",
                  "All Entrance Fees & Transportation Included",
                  "Flexible Itineraries & Customizable Options",
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
                  Customize Your Tour
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="/images/used/nepal-stupa.avif"
                alt="Kathmandu Durbar Square"
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