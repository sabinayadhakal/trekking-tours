"use client";

import * as React from "react";
import Head from "next/head";
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
  CheckCircle,
  Compass,
  TrendingUp,
  ArrowRight,
  Footprints,
  Award,
  ShieldCheck,
  Heart,
  Camera,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Only include the treks you want (excluding Gokyo, Langtang Ganjala, Gosainkunda, Nar Phu, Rupina La, Upper Mustang)
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
    price: 1520,
    originalPrice: 1720,
    image: "/images/used/everest-main-page.webp",
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
    duration: "9 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 800,
    originalPrice: 1000,
    image: "/images/used/annapurna-circuit-main-page.webp",
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
    duration: "12 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 1000,
    originalPrice: 1200,
    image: "/images/used/tilicho-lake-1.webp",
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
    duration: "8 Days",
    difficulty: "Easy-Moderate",
    maxAltitude: "4,984m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 650,
    originalPrice: 805,
    image: "/images/used/langtang-main-page.webp",
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
    duration: "12 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1200,
    originalPrice: 1400,
    image: "/images/used/manaslu-main-page.webp",
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
    duration: "17 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 2050,
    originalPrice: 2305,
    image: "/images/used/tsum-valley-1.webp",
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
    duration: "9 Days",
    difficulty: "Moderate",
    maxAltitude: "4,130m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 700,
    originalPrice: 1050,
    image: "/images/used/abc-main-page.webp",
    rating: 4.8,
    reviews: 212,
    highlights: ["Annapurna Sanctuary", "Machapuchare Base Camp", "Hot Springs", "Gurung Villages"],
    description: "Journey into the heart of the Annapurna Sanctuary, surrounded by towering peaks.",
    featured: true,
    link: "/services/trekking/annapurna-base-camp-trek",
  },
  {
    id: 8,
    name: "Everest Three Passes Trek",
    region: "Everest Region",
    duration: "18 Days",
    difficulty: "Strenuous",
    maxAltitude: "5,545m",
    groupSize: "2-10",
    bestSeason: "Apr-May, Oct-Nov",
    price: 1950,
    originalPrice: 2250,
    image: "/images/used/3-passes-1.webp",
    rating: 4.9,
    reviews: 89,
    highlights: ["Kongma La", "Cho La", "Renjo La", "Gokyo Lakes"],
    description: "The ultimate challenge for experienced trekkers, crossing three high passes above 5,300m.",
    featured: true,
    link: "/services/trekking/everest-three-passes-trek",
  },
  {
    id: 9,
    name: "Ghorepani Poon Hill Trek",
    region: "Annapurna Region",
    duration: "6 Days",
    difficulty: "Easy",
    maxAltitude: "3,210m",
    groupSize: "2-16",
    bestSeason: "Year Round",
    price: 500,
    originalPrice: 635,
    image: "/images/used/ghorepani-poon-hill-1.webp",
    rating: 4.6,
    reviews: 324,
    highlights: ["Poon Hill Sunrise", "Rhododendron Forests", "Gurung Villages", "Mountain Panorama"],
    description: "The perfect short trek with stunning sunrise views over the Annapurna and Dhaulagiri ranges.",
    featured: false,
    link: "/services/trekking/ghorepani-poon-hill-trek",
  },
  {
    id: 10,
    name: "Khopra Ridge Trek with Khayar Lake",
    region: "Annapurna Region",
    duration: "8 Days",
    difficulty: "Moderate",
    maxAltitude: "4,660m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 700,
    originalPrice: 875,
    image: "/images/used/khopra-trek-1.webp",
    rating: 4.8,
    reviews: 78,
    highlights: ["Khopra Ridge", "Khayar Lake", "Annapurna South", "Dhaulagiri Views"],
    description: "Off-the-beaten-path trek offering stunning mountain views and the sacred Khayar Lake.",
    featured: false,
    link: "/services/trekking/khopra-ridge-trek-with-khayar-lake",
  },
  {
    id: 11,
    name: "Mardi Himal Trek",
    region: "Annapurna Region",
    duration: "7 Days",
    difficulty: "Moderate",
    maxAltitude: "4,500m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 600,
    originalPrice: 755,
    image: "/images/used/mardi-himal-1.webp",
    rating: 4.8,
    reviews: 145,
    highlights: ["Mardi Himal Base Camp", "Machapuchare Views", "Forest Trails", "Camping Experience"],
    description: "A hidden gem offering spectacular close-up views of Machapuchare and Annapurna South.",
    featured: true,
    link: "/services/trekking/mardi-himal-trek",
  },
  {
    id: 12,
    name: "Tamang Heritage Trail and Langtang Valley Trek",
    region: "Langtang Region",
    duration: "13 Days",
    difficulty: "Moderate",
    maxAltitude: "4,984m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1195,
    originalPrice: 1350,
    image: "/images/used/tamang-heritage-1.webp",
    rating: 4.8,
    reviews: 89,
    highlights: ["Tamang Heritage Trail", "Gatlang Village", "Briddim Village", "Langtang Valley"],
    description: "Combine the cultural Tamang Heritage Trail with the stunning Langtang Valley trek.",
    featured: false,
    link: "/services/trekking/tamang-heritage-trail-and-langtang-valley-trek",
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
    <>
      <Head>
        <title>Trekking in Nepal - Himalayan Treks - Himkala Adventure</title>
        <meta name="description" content="Explore Nepal's best treks with Himkala Adventure. Everest Base Camp, Annapurna Circuit, Manaslu Circuit, and more. Expert guides, safe and unforgettable experiences." />
        <link rel="canonical" href="https://www.himkalaadventure.com/services/trekking" />
        <meta property="og:title" content="Trekking in Nepal - Himalayan Treks - Himkala Adventure" />
        <meta property="og:description" content="Explore Nepal's best treks with Himkala Adventure. Everest Base Camp, Annapurna Circuit, Manaslu Circuit, and more." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/everest-main-page.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/services/trekking" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trekking in Nepal - Himalayan Treks - Himkala Adventure" />
        <meta name="twitter:description" content="Explore Nepal's best treks with Himkala Adventure. Everest Base Camp, Annapurna Circuit, Manaslu Circuit, and more." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/everest-main-page.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Page Header - matching Day Hikes style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Himalayan Adventures</div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Trekking <span className="text-[#cf6943]">in Nepal</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  From easy hill walks to challenging high-altitude circuits. Each trek is guided by experienced professionals who know these mountains intimately.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Trek - matching Day Hikes featured layout */}
          {featuredPackage && (
            <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
              <div className="mx-auto max-w-[1220px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                  <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                    <Image
                      src={featuredPackage.image}
                      alt={featuredPackage.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">🏔️</div>
                      <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">MOST POPULAR</div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Featured Trek</div>
                    <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                      {featuredPackage.name}
                    </h2>
                    <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                      <p>{featuredPackage.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredPackage.highlights.map((h, idx) => (
                          <span key={idx} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#556363]">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPackage.duration}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPackage.maxAltitude}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Footprints className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPackage.difficulty}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" /> {featuredPackage.region}
                      </span>
                    </div>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <span className="text-[#66706d] text-sm line-through">${featuredPackage.originalPrice}</span>
                        <span className="font-bold text-[#cf6943] text-xl sm:text-2xl">${featuredPackage.price}</span>
                        <span className="text-[#556363] text-xs">/person</span>
                      </div>
                      <Button 
                        className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-none px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleBookNow(featuredPackage.name);
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

          {/* All Treks Grid - matching Day Hikes grid */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">All Treks</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Himalayan <span className="text-[#cf6943]">Trekking Adventures</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  {trekkingPackages.length} treks available. From 6-day short treks to 18-day expeditions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {trekkingPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href={pkg.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 33vw, 33vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {pkg.rating}
                        </div>
                        <div className="absolute top-4 left-4 bg-[#cf6943] text-[#fff8ee] px-3 py-1.5 text-xs font-bold tracking-wide">
                          {pkg.region}
                        </div>
                        {pkg.featured && (
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-[#e47a4f] text-[#fff8ee] border-none text-[9px] px-2 py-0.5">Featured</Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#14383b] mb-1">{pkg.name}</h3>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed line-clamp-2">{pkg.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Clock className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {pkg.duration}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Mountain className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {pkg.maxAltitude}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Footprints className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {pkg.difficulty}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Users className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {pkg.groupSize}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {pkg.highlights.slice(0, 2).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                          {pkg.highlights.length > 2 && (
                            <span className="text-xs text-[#66706d]">+{pkg.highlights.length - 2} more</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#d8cec0]/30">
                          <div>
                            <span className="text-[#66706d] text-xs line-through">${pkg.originalPrice}</span>
                            <span className="font-bold text-[#cf6943] text-lg ml-1">${pkg.price}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px] px-4 text-xs"
                            onClick={(e) => { e.preventDefault(); handleBookNow(pkg.name); }}
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
                    Trusted <span className="text-[#cf6943]">Himalayan Guides</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Experienced guides, comprehensive support, and unforgettable experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Licensed Guides", text: "Government-certified guides with years of Himalayan experience." },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Small Groups", text: "Intimate group sizes for personalized attention and safety." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Expert Planning", text: "Carefully curated itineraries with proper acclimatization." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Local Knowledge", text: "Insider tips and cultural insights from our expert guides." },
                  { icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Photo Opportunities", text: "Perfect spots for capturing Nepal's stunning landscapes." },
                  { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Safety First", text: "Comprehensive safety protocols and emergency support." },
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
        Comprehensive support for a safe, comfortable, and unforgettable experience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
      <div className="space-y-4 sm:space-y-5">
        {[
          { title: "Licensed Guides", text: "Government-certified guides with years of Himalayan experience and comprehensive first aid training." },
          { title: "Porter Service", text: "One porter for every two trekkers, carrying up to 15kg of personal gear." },
          { title: "Accommodation", text: "Best available teahouses and lodges throughout the trek with comfortable amenities." },
          { title: "All Meals", text: "Three meals daily on trek, prepared with local ingredients and hygienic practices." },
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
        <h3 className="font-bold text-[#14383b] text-lg sm:text-xl mb-4">Additional Services</h3>
        <ul className="space-y-3">
          {[
            <><strong>Permits:</strong> All trekking permits and national park entry fees included in the package</>,
            <><strong>Transportation:</strong> Airport transfers and all local transport arrangements on the itinerary</>,
            <><strong>Equipment:</strong> Sleeping bag (-15°C rated) and down jacket provided for the trek</>,
            <><strong>First Aid Kit:</strong> Comprehensive medical supplies and oxygen cylinder for emergencies</>,
            <><strong>Small Groups:</strong> Intimate group sizes for personalized attention and safety</>,
            <><strong>Cultural Insights:</strong> Expert guidance on local customs, traditions, and history</>,
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
          Plan Your Trek Today
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