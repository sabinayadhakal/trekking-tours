"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Star,
  Compass,
  TrendingUp,
  ArrowRight,
  Footprints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Only include treks that exist in your folder structure
const trekkingPackages = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    region: "Everest Region",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "5,364m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1450,
    originalPrice: 1650,
    image: "/images/used/everest-main-page.avif",
    rating: 4.9,
    reviews: 234,
    highlights: ["Khumbu Glacier", "Tengboche Monastery", "Sherpa Culture", "Kala Patthar"],
    description: "Trek to the foot of the world's highest mountain through legendary Sherpa villages and breathtaking Himalayan landscapes.",
    featured: true,
    link: "/services/trekking/everest-base-camp-trek",
  },
  {
    id: 2,
    name: "Annapurna Circuit Trek",
    region: "Annapurna Region",
    duration: "18 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 1250,
    originalPrice: 1450,
    image: "/images/used/annapurna-circuit-main-page.avif",
    rating: 4.8,
    reviews: 189,
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Valley", "Diverse Landscapes"],
    description: "The classic Himalayan trek circumnavigating the Annapurna massif, crossing the legendary Thorong La Pass.",
    featured: true,
    link: "/services/trekking/annapurna-circuit-trek",
  },
  {
    id: 3,
    name: "Annapurna Circuit Trek with Tilicho Lake",
    region: "Annapurna Region",
    duration: "20 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 1450,
    originalPrice: 1650,
    image: "/images/used/tilicho-lake-1.avif",
    rating: 4.9,
    reviews: 98,
    highlights: ["Thorong La Pass", "Tilicho Lake", "Muktinath Temple", "Manang Valley"],
    description: "Extended Annapurna Circuit with a side trip to the world's highest lake - Tilicho.",
    featured: false,
    link: "/services/trekking/annapurna-circuit-trek-with-tilicho-lake",
  },
  {
    id: 4,
    name: "Langtang Valley Trek",
    region: "Langtang Region",
    duration: "10 Days",
    difficulty: "Easy-Moderate",
    maxAltitude: "4,984m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 950,
    originalPrice: 1100,
    image: "/images/used/langtang-main-page.avif",
    rating: 4.7,
    reviews: 156,
    highlights: ["Kyanjin Gompa", "Langtang Village", "Cheese Factory", "Tserko Ri"],
    description: "Explore the 'Valley of Glaciers' just north of Kathmandu with rich Tamang culture.",
    featured: false,
    link: "/services/trekking/langtang-valley-trek",
  },
  {
    id: 5,
    name: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    duration: "16 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1350,
    originalPrice: 1550,
    image: "/images/used/manaslu-main-page.avif",
    rating: 4.9,
    reviews: 98,
    highlights: ["Larkya La Pass", "Tibetan Villages", "Remote Trails", "Buddhist Monasteries"],
    description: "Circle the world's eighth highest mountain through pristine wilderness and authentic Tibetan culture.",
    featured: true,
    link: "/services/trekking/manaslu-circuit-trek",
  },
  {
    id: 6,
    name: "Manaslu Circuit Trek with Tsum Valley",
    region: "Manaslu Region",
    duration: "21 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1850,
    originalPrice: 2100,
    image: "/images/used/tsum-valley-1.avif",
    rating: 4.9,
    reviews: 67,
    highlights: ["Tsum Valley", "Larkya La Pass", "Ancient Monasteries", "Remote Villages"],
    description: "Combine the Manaslu Circuit with the sacred Tsum Valley for an extended cultural adventure.",
    featured: false,
    link: "/services/trekking/manaslu-circuit-trek-with-tsum-valley",
  },
  {
    id: 7,
    name: "Annapurna Base Camp Trek",
    region: "Annapurna Region",
    duration: "12 Days",
    difficulty: "Moderate",
    maxAltitude: "4,130m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 1150,
    originalPrice: 1350,
    image: "/images/used/abc-main-page.avif",
    rating: 4.8,
    reviews: 212,
    highlights: ["Annapurna Sanctuary", "Machapuchare Base Camp", "Hot Springs", "Gurung Villages"],
    description: "Journey into the heart of the Annapurna Sanctuary, surrounded by towering peaks.",
    featured: true,
    link: "/services/trekking/annapurna-base-camp-trek",
  },
  {
    id: 8,
    name: "Gokyo Trek",
    region: "Everest Region",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "5,357m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1450,
    originalPrice: 1650,
    image: "/images/used/gokyo-1.avif",
    rating: 4.8,
    reviews: 134,
    highlights: ["Gokyo Lakes", "Gokyo Ri", "Ngozumpa Glacier", "Everest Views"],
    description: "Trek to the stunning turquoise Gokyo Lakes and climb Gokyo Ri for panoramic Everest views.",
    featured: false,
    link: "/services/trekking/gokyo-trek",
  },
  {
    id: 9,
    name: "Everest Three Passes Trek",
    region: "Everest Region",
    duration: "21 Days",
    difficulty: "Strenuous",
    maxAltitude: "5,545m",
    groupSize: "2-10",
    bestSeason: "Apr-May, Oct-Nov",
    price: 1850,
    originalPrice: 2100,
    image: "/images/used/3-passes-1.avif",
    rating: 4.9,
    reviews: 89,
    highlights: ["Kongma La", "Cho La", "Renjo La", "Gokyo Lakes"],
    description: "The ultimate challenge for experienced trekkers, crossing three high passes above 5,300m.",
    featured: true,
    link: "/services/trekking/everest-three-passes-trek",
  },
  {
    id: 10,
    name: "Gorepani Poon Hill Trek",
    region: "Annapurna Region",
    duration: "5 Days",
    difficulty: "Easy",
    maxAltitude: "3,210m",
    groupSize: "2-16",
    bestSeason: "Year Round",
    price: 550,
    originalPrice: 650,
    image: "/images/used/ghorepani-poon-hill-1.avif",
    rating: 4.6,
    reviews: 324,
    highlights: ["Poon Hill Sunrise", "Rhododendron Forests", "Gurung Villages", "Mountain Panorama"],
    description: "The perfect short trek with stunning sunrise views over the Annapurna and Dhaulagiri ranges.",
    featured: false,
    link: "/services/trekking/gorepani-poon-hill-trek",
  },
  {
    id: 11,
    name: "Khopra Ridge Trek with Khayar Lake",
    region: "Annapurna Region",
    duration: "12 Days",
    difficulty: "Moderate",
    maxAltitude: "4,660m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1250,
    originalPrice: 1450,
    image:"/images/used/khopra-trek-1.avif",
    rating: 4.8,
    reviews: 78,
    highlights: ["Khopra Ridge", "Khayar Lake", "Annapurna South", "Dhaulagiri Views"],
    description: "Off-the-beaten-path trek offering stunning mountain views and the sacred Khayar Lake.",
    featured: false,
    link: "/services/trekking/khopra-ridge-trek-with-khayar-lake",
  },
  {
    id: 12,
    name: "Langtang Ganjala Pass Trek",
    region: "Langtang Region",
    duration: "14 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1350,
    originalPrice: 1550,
    image: "/images/used/ganjala-pass-1.avif",
    rating: 4.8,
    reviews: 67,
    highlights: ["Ganjala Pass", "Langtang Valley", "Helambu Region", "Panoramic Views"],
    description: "Cross the challenging Ganjala Pass connecting Langtang with Helambu for a complete adventure.",
    featured: false,
    link: "/services/trekking/langtang-ganjala-pass-trek",
  },
  {
    id: 13,
    name: "Langtang Gosainkunda Trek",
    region: "Langtang Region",
    duration: "12 Days",
    difficulty: "Moderate",
    maxAltitude: "4,380m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1150,
    originalPrice: 1350,
    image: "/images/used/gosaikunda-1.avif",
    rating: 4.7,
    reviews: 112,
    highlights: ["Gosainkunda Lake", "Sacred Pilgrimage", "Langtang Valley", "Mountain Views"],
    description: "Trek to the sacred alpine lakes of Gosainkunda, an important Hindu pilgrimage site.",
    featured: false,
    link: "/services/trekking/langtang-gosainkunda-trek",
  },
  {
    id: 14,
    name: "Langtang Helambu Trek",
    region: "Langtang Region",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "4,380m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1250,
    originalPrice: 1450,
    image: "/images/used/helambu-1.avif",
    rating: 4.7,
    reviews: 98,
    highlights: ["Helambu Valley", "Tamang Culture", "Langtang National Park", "Village Life"],
    description: "Explore the scenic Helambu region with its unique Tamang culture and Buddhist monasteries.",
    featured: false,
    link: "/services/trekking/langtang-helambu-trek",
  },
  {
    id: 15,
    name: "Mardi Himal Trek",
    region: "Annapurna Region",
    duration: "10 Days",
    difficulty: "Moderate",
    maxAltitude: "4,500m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 950,
    originalPrice: 1150,
    image: "/images/used/mardi-himal-1.avif",
    rating: 4.8,
    reviews: 145,
    highlights: ["Mardi Himal Base Camp", "Machapuchare Views", "Forest Trails", "Camping Experience"],
    description: "A hidden gem offering spectacular close-up views of Machapuchare and Annapurna South.",
    featured: true,
    link: "/services/trekking/mardi-himal-trek",
  },
  {
    id: 16,
    name: "Nar Phu Trek",
    region: "Annapurna Region",
    duration: "14 Days",
    difficulty: "Challenging",
    maxAltitude: "5,300m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1650,
    originalPrice: 1850,
    image: "/images/used/narphu-1.avif",
    rating: 4.9,
    reviews: 56,
    highlights: ["Nar Village", "Phu Village", "Tibetan Culture", "Kang La Pass"],
    description: "Explore the remote and restricted Nar-Phu valleys with their ancient Tibetan Buddhist culture.",
    featured: true,
    link: "/services/trekking/nar-phu-trek",
  },
  {
    id: 17,
    name: "Rupina La Trek",
    region: "Manaslu Region",
    duration: "14 Days",
    difficulty: "Challenging",
    maxAltitude: "4,620m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1450,
    originalPrice: 1650,
    image: "/images/used/rupinala-1.avif",
    rating: 4.7,
    reviews: 45,
    highlights: ["Rupina La Pass", "Remote Villages", "Mountain Views", "Cultural Experience"],
    description: "An off-the-beaten-path trek in the Manaslu region offering pristine nature and authentic culture.",
    featured: false,
    link: "/services/trekking/rupina-la-trek",
  },
  {
    id: 18,
    name: "Tamang Heritage Trail and Langtang Valley Trek",
    region: "Langtang Region",
    duration: "12 Days",
    difficulty: "Moderate",
    maxAltitude: "4,984m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1250,
    originalPrice: 1450,
    image: "/images/used/tamang-heritage-1.avif",
    rating: 4.8,
    reviews: 89,
    highlights: ["Tamang Heritage Trail", "Gatlang Village", "Briddim Village", "Langtang Valley"],
    description: "Combine the cultural Tamang Heritage Trail with the stunning Langtang Valley trek.",
    featured: false,
    link: "/services/trekking/tamang-heritage-trail-and-langtang-valley-trek",
  },
  {
    id: 19,
    name: "Upper Mustang Trek",
    region: "Annapurna Region",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "3,840m",
    groupSize: "2-10",
    bestSeason: "Mar-Nov",
    price: 1850,
    originalPrice: 2100,
    image: "/images/used/upper-mustang-main-page.avif",
    rating: 4.9,
    reviews: 112,
    highlights: ["Lo Manthang", "Ancient Caves", "Tibetan Culture", "Desert Landscape"],
    description: "Journey to the forbidden kingdom of Lo in the rain shadow of the Himalayas.",
    featured: true,
    link: "/services/trekking/upper-mustang-trek",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-700";
    case "Easy-Moderate": return "bg-green-100 text-green-700";
    case "Moderate": return "bg-yellow-100 text-yellow-700";
    case "Challenging": return "bg-orange-100 text-orange-700";
    case "Strenuous": return "bg-red-100 text-red-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function TrekkingNepalPage() {
  const router = useRouter();

  const handleBookNow = (trekName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(trekName)}`);
  };

  const featuredPackage = trekkingPackages.find((pkg) => pkg.id === 1);

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
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Nepal - The Himalayan Wonderland
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white mb-4 md:mb-6">
              Trekking in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5E0ED] to-[#7fb8d4]">Nepal</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8">
              From the legendary Everest Base Camp to the sacred trails of Annapurna, discover why Nepal remains 
              the ultimate destination for trekkers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 19 Trekking Routes
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> 5 to 21 Days
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-[#C5E0ED]" /> Up to 5,545m
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Package */}
      {featuredPackage && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <Link 
              href={featuredPackage.link}
              className="cursor-pointer block"
            >
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-[2rem] overflow-hidden shadow-lg md:shadow-xl shadow-[#0f2940]/10">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-60 md:h-72 lg:h-auto min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredPackage.image}
                      alt={featuredPackage.name}
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
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#C5E0ED] text-[#C5E0ED]" /> {featuredPackage.rating} ({featuredPackage.reviews})
                    </div>
                  </div>
                  <CardContent className="p-5 md:p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 md:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> {featuredPackage.region}
                    </Badge>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-3 md:mb-4 leading-tight">
                      {featuredPackage.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {featuredPackage.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.duration}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.maxAltitude}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Footprints className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.difficulty}
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-slate-600 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {featuredPackage.groupSize} People
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {featuredPackage.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs bg-[#C5E0ED]/20 text-[#2d6a8a] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-slate-100 gap-4">
                      <div>
                        <span className="text-slate-400 text-sm line-through">${featuredPackage.originalPrice}</span>
                        <span className="text-2xl md:text-3xl font-bold text-[#0f2940] ml-1 md:ml-2">${featuredPackage.price}</span>
                        <span className="text-slate-500 text-sm">/person</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#0f2940] to-[#1a4166] hover:from-[#1a4166] hover:to-[#0f2940] text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredPackage.name);
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

      {/* All Packages Grid */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-2 md:mb-4">All Packages</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Explore Our Treks</h3>
              <p className="text-slate-500 text-sm">
                Showing <span className="font-bold text-[#0f2940]">{trekkingPackages.length}</span> packages
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {trekkingPackages.map((pkg) => (
              <Link 
                key={pkg.id} 
                href={pkg.link}
                className="cursor-pointer block"
              >
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg md:hover:shadow-xl hover:shadow-[#C5E0ED]/20 transition-all duration-300 group">
                  <div className="relative h-40 md:h-52 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`border-none text-xs font-medium ${getDifficultyColor(pkg.difficulty)}`}>
                        {pkg.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0f2940] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#C5E0ED] text-[#C5E0ED]" /> {pkg.rating}
                    </div>
                    {pkg.featured && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] border-none text-xs font-bold">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] mb-2 md:mb-3 text-xs">
                      {pkg.region}
                    </Badge>
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-1 md:mb-2 group-hover:text-[#2d6a8a] transition-colors line-clamp-1">
                      {pkg.name}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                      {pkg.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Mountain className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a]" /> {pkg.maxAltitude}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 text-xs line-through">${pkg.originalPrice}</span>
                        <span className="text-lg md:text-xl font-bold text-[#0f2940] ml-1">${pkg.price}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-[#2d6a8a] hover:bg-[#C5E0ED]/20 font-bold rounded-full text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(pkg.name);
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
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Why Trek with Us</h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-[#0f2940] mb-4 md:mb-6">
                Your Safety & Experience Are Our Priority
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                With over a decade of experience in Himalayan expeditions, we&apos;ve built a reputation for excellence, 
                safety, and creating life-changing adventures.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Government Licensed & Certified Guides",
                  "Best Available Teahouse Accommodations",
                  "All Permits & Entry Fees Included",
                  "24/7 Emergency Support & Communication",
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
                  Get Free Consultation
                </Button>
              </Link>
            </div>
            <div className="relative h-60 md:h-[450px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl order-first lg:order-last">
              <Image
                src="/images/used/hero.avif"
                alt="Trekkers in Himalayas"
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