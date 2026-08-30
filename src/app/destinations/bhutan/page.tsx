"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mountain,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronRight,
  Calendar,
  Snowflake,
  Camera,
  Heart,
  Compass,
  ShieldCheck,
  Landmark,
  Castle,
  Globe,
  Smile,
  Cloud,
  Shield,
  Flag,
  ArrowDownRight,
  ArrowRight,
  CheckCircle,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const culturalTours = [
  {
    name: "Delightful Bhutan Tour",
    duration: "5 Days",
    difficulty: "Easy",
    altitude: "2,320m",
    price: "$1,950",
    image: "/images/used/delightful-bhutan.webp",
    rating: 4.9,
    region: "Paro • Thimphu",
    highlights: ["Tiger's Nest", "Thimphu Dzong", "Buddha Dordenma", "Traditional Markets"],
    description: "Perfect introduction to Bhutan's cultural highlights.",
    link: "/destinations/bhutan/delightful-bhutan-tour",
  },
  {
    name: "Bhutan Cultural Tour",
    duration: "11 Days",
    difficulty: "Easy-Moderate",
    altitude: "3,120m",
    price: "$3,950",
    image: "/images/used/cultural-bhutan.webp",
    rating: 4.8,
    region: "Western Bhutan",
    highlights: ["Punakha Dzong", "Gangtey Valley", "Haa Valley", "Dochula Pass"],
    description: "Comprehensive exploration of Bhutan's cultural heritage.",
    link: "/destinations/bhutan/bhutan-cultural-tour",
  },
  {
    name: "Short and Sweet Bhutan Tour",
    duration: "3 Days",
    difficulty: "Easy",
    altitude: "2,320m",
    price: "$1,250",
    image: "/images/used/short-sweet-bhutan.webp",
    rating: 4.7,
    region: "Paro Valley",
    highlights: ["Tiger's Nest Hike", "Paro Dzong", "National Museum", "Farmhouse Visit"],
    description: "Perfect short visit to experience Bhutan's essence.",
    link: "/destinations/bhutan/short-and-sweet-bhutan-tour",
  },
  {
    name: "3 Nights 4 Days Bhutan Tour",
    duration: "4 Days",
    difficulty: "Easy",
    altitude: "2,320m",
    price: "$1,450",
    image: "/images/used/3days-4nights-bhutan.webp",
    rating: 4.6,
    region: "Paro • Thimphu",
    highlights: ["Tiger's Nest", "Thimphu City", "Cheri Monastery", "Traditional Arts"],
    description: "Extended cultural experience in Bhutan.",
    link: "/destinations/bhutan/3-nights-4-days-bhutan-tour",
  },
  {
    name: "Tiger's Nest Day Hiking",
    duration: "3 Day",
    difficulty: "Moderate",
    altitude: "3,120m",
    price: "$1,050",
    image: "/images/used/bhutan-tiger.webp",
    rating: 4.9,
    region: "Paro Valley",
    highlights: ["Taktsang Monastery", "Cliffside Temple", "Sacred Caves", "Panoramic Views"],
    description: "Iconic hike to Bhutan's most famous monastery.",
    link: "/destinations/bhutan/tigers-nest-day-hiking",
  },
  {
    name: "Bhutan Festival Tour",
    duration: "7 Days",
    difficulty: "Easy",
    altitude: "2,800m",
    price: "$2,750",
    image: "/images/used/bhutan-culture.webp",
    rating: 4.8,
    region: "Various Dzongs",
    highlights: ["Paro Tshechu", "Thimphu Festival", "Mask Dances", "Cultural Performances"],
    description: "Experience Bhutan's vibrant religious festivals.",
    link: "/destinations/bhutan/bhutan-festival-tour",
  },
];

const regions = [
  {
    name: "Paro Valley",
    description: "The gateway to Bhutan, where the iconic Taktsang Monastery clings to a sheer cliff face. This fertile valley is home to some of Bhutan's oldest temples and the nation's only international airport.",
    highlights: ["Taktsang 'Tiger's Nest' Monastery", "Kyichu Lhakhang", "Paro Dzong"],
  },
  {
    name: "Thimphu Valley",
    description: "The world's only capital city without traffic lights, where tradition meets modernity. Home to the royal family, government, and a vibrant cultural scene.",
    highlights: ["Tashichho Dzong", "Buddha Dordenma", "Weekend Market"],
  },
  {
    name: "Punakha Valley",
    description: "The ancient capital of Bhutan, nestled at the confluence of two rivers. Famous for its temperate climate, rice paddies, and the most beautiful dzong in the country.",
    highlights: ["Punakha Dzong", "Chimi Lhakhang", "Subtropical Climate"],
  },
  {
    name: "Bumthang Valley",
    description: "The spiritual heartland of Bhutan, a complex of four valleys dotted with ancient monasteries and sacred sites. Where Padmasambhava left his body print and Bhutanese Buddhism took root.",
    highlights: ["Jambay Lhakhang", "Kurjey Lhakhang", "Sacred Sites"],
  },
];

export default function BhutanPage() {
  const router = useRouter();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleBookNow = (tourName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(tourName)}`);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const canonicalUrl = "https://www.himkalaadventure.com/destinations/bhutan";
  const pageTitle = "Bhutan Travel & Tours - Himkala Adventure";
  const pageDescription = "Bhutan travel & tours: Explore the Last Shangri-La with our expert-guided cultural tours. Visit Tiger's Nest, Thimphu, Punakha, and more.";
  const imageUrl = "https://www.himkalaadventure.com/images/used/bhutan-tiger.webp";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        <main>
          {/* Page Header - matching about page style */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Destination</div>
                  <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Discover <span className="text-[#cf6943]">Bhutan</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Land of the Thunder Dragon — where Gross National Happiness outshines GDP and ancient monasteries cling to cliffs.
                </p>
              </div>
            </div>
          </section>

          {/* About Bhutan - matching about page story layout */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                  <Image
                    src="/images/used/bhutan-tiger.webp"
                    alt="Tiger's Nest Monastery in Paro Valley, Bhutan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                    <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">1<span className="text-xl sm:text-2xl">+</span></div>
                    <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">HOUR FLIGHT FROM KATHMANDU</div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">About Bhutan</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    The Last <span className="text-[#cf6943]">Shangri-La</span>
                  </h2>
                  <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                    <p>
                      Nestled in the eastern Himalayas, Bhutan is a landlocked country bordered by China to the north and India to the south, east, and west. Known as <strong className="text-[#14383b]">Dru U — Land of the Thunder Dragon</strong>, it's the world's only carbon-negative country.
                    </p>
                    <p>
                      Bhutan is <strong className="text-[#14383b]">the happiest country in Asia</strong> and ranks 8th globally. With its <strong className="text-[#14383b]">Gross National Happiness</strong> philosophy, development prioritizes well-being over GDP. <strong className="text-[#14383b]">Vajrayana Buddhism</strong> is the state religion, deeply influencing daily life.
                    </p>
                    <p>
                      From subtropical plains to Himalayan peaks exceeding 7,000m, Bhutan offers pristine landscapes, ancient dzongs, and a unique culture preserved by traditional dress and architecture laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Bhutan - clean cards matching about page */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why Visit</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    A Kingdom <span className="text-[#cf6943]">Like No Other</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  From Gross National Happiness to carbon-negative status, Bhutan offers unique experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <Smile className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Happiest Country in Asia", text: "Ranked #1 in Asia and #8 globally for happiness." },
                  { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Carbon Negative", text: "The world's only carbon-negative nation with 72% forest cover." },
                  { icon: <Flag className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Gross National Happiness", text: "Development prioritizing well-being over GDP." },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Preserved Culture", text: "Traditional dress and architecture preserved by law." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Last Shangri-La", text: "Pristine landscapes and untouched traditions." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Vajrayana Buddhism", text: "Spiritual home of Tantric Buddhism." },
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

          {/* Cultural Tours - matching main page trek layout */}
          <section id="tours" className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Cultural Tours</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Bhutan <span className="text-[#cf6943]">Cultural Experiences</span>
                  </h2>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  
                </div>
              </div>

              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#556363]">
                Discover Bhutan's rich heritage with our expert-guided tours. Minimum daily package applies for sustainable tourism.
              </p>

              {/* Mobile Horizontal Scroll */}
              <div className="md:hidden mt-8 sm:mt-12">
                <div className="flex overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                  {culturalTours.map((tour) => (
                    <Link
                      key={tour.name}
                      href={tour.link}
                      className="flex-shrink-0 w-[80vw] sm:w-[85vw] mr-4 sm:mr-6 last:mr-0 snap-start"
                    >
                      <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <Image
                            src={tour.image}
                            alt={tour.name}
                            fill
                            className="object-cover"
                            sizes="85vw"
                            quality={85}
                          />
                          <div className="absolute top-3 right-3 bg-[#14383b]/90 text-[#f7f2e9] px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {tour.rating}
                          </div>
                          <div className="absolute top-3 left-3 bg-[#cf6943] text-[#fff8ee] px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide">
                            {tour.duration}
                          </div>
                        </div>
                        <CardContent className="p-4 sm:p-5 md:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-[#14383b] mb-1">{tour.name}</h3>
                          <p className="text-[#66706d] text-xs sm:text-sm mb-2">{tour.region}</p>
                          <p className="text-[#556363] text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{tour.description}</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {tour.highlights.slice(0, 3).map((h) => (
                              <span key={h} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                                {h}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xl sm:text-2xl font-bold text-[#0f2940]">{tour.price}</span>
                            <Button 
                              size="sm" 
                              className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full text-xs min-h-[44px] px-4 sm:px-6"
                              onClick={(e) => { e.preventDefault(); handleBookNow(tour.name); }}
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

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {culturalTours.map((tour) => (
                  <Link
                    key={tour.name}
                    href={tour.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-56 overflow-hidden">
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
                          {tour.duration}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#14383b] mb-1">{tour.name}</h3>
                        <p className="text-[#66706d] text-sm mb-2">{tour.region}</p>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed">{tour.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tour.highlights.slice(0, 3).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-[#0f2940]">{tour.price}</span>
                          <Button 
                            size="sm" 
                            className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px] px-6"
                            onClick={(e) => { e.preventDefault(); handleBookNow(tour.name); }}
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

          {/* Bhutan Regions - clean text-focused */}
          <section id="regions" className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Sacred Valleys</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Valleys of the <span className="text-[#cf6943]">Thunder Dragon</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Carved by ancient rivers and blessed by saints, each valley holds its own stories and traditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                {regions.map((region, index) => (
                  <div key={index} className="bg-[#f7f2e9] p-5 sm:p-6 md:p-8 rounded-lg border border-[#d8cec0] hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl sm:text-5xl font-serif text-[#e47a4f]/30 select-none leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-serif text-[#14383b] mb-2">{region.name}</h3>
                        <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                          {region.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {region.highlights.map((item) => (
                            <span key={item} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">When to Visit</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Best Time to <span className="text-[#cf6943]">Visit Bhutan</span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  {
                    season: "Spring",
                    months: "March - May",
                    icon: <TreePine className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Rhododendron blooms", "Paro Tshechu", "Clear skies"],
                    rating: "Excellent",
                  },
                  {
                    season: "Summer",
                    months: "June - August",
                    icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Monsoon season", "Lush greenery", "Fewer tourists"],
                    rating: "Moderate",
                  },
                  {
                    season: "Autumn",
                    months: "September - November",
                    icon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Clear mountain views", "Thimphu Tshechu", "Perfect trekking"],
                    rating: "Best",
                  },
                  {
                    season: "Winter",
                    months: "December - February",
                    icon: <Snowflake className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Snow-capped peaks", "Punakha Drubchen", "Clear skies"],
                    rating: "Good",
                  },
                ].map((season) => (
                  <div key={season.season} className="bg-[#f7f2e9] p-5 sm:p-6 rounded-lg border border-[#d8cec0] hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9]">
                        {season.icon}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        season.rating === "Best" ? "bg-green-500 text-white" : 
                        season.rating === "Excellent" ? "bg-blue-500 text-white" : 
                        season.rating === "Good" ? "bg-amber-500 text-white" : "bg-slate-500 text-white"
                      }`}>
                        {season.rating}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#14383b] mb-1">{season.season}</h3>
                    <p className="text-[#66706d] text-sm mb-3">{season.months}</p>
                    <ul className="space-y-1.5">
                      {season.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-[#556363]">
                          <CheckCircle className="w-3 h-3 text-[#cf6943]" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tourism Policy - clean cards */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Sustainable Tourism</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Tourism <span className="text-[#cf6943]">with Purpose</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Bhutan's unique approach preserves culture and environment while creating meaningful experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { title: "Minimum Daily Package", text: "US $200-250 per day includes accommodation, meals, transport, guide, and sustainable development fee." },
                    { title: "Custom Itineraries", text: "Create your own itinerary — no group travel required. Personal guides for intimate experiences." },
                    { title: "Cultural Preservation", text: "Traditional dress (Gho & Kira) and architecture preserved by law. No backpacker-style tourism." },
                    { title: "Carbon Negative", text: "72% forest cover. Tourism supports conservation and community development." },
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
                  <h3 className="font-bold text-[#14383b] text-lg sm:text-xl mb-4">Unique Bhutanese Culture</h3>
                  <ul className="space-y-3">
                    {[
                      <><strong>Ema Datshi:</strong> National dish — chillies and cheese</>,
                      <><strong>Red Rice:</strong> Unique to Bhutan, grown in Paro Valley</>,
                      <><strong>No Smoking:</strong> Tobacco sales are illegal nationwide</>,
                      <><strong>Protective Symbols:</strong> Houses painted with protective symbols</>,
                      <><strong>Easy Access:</strong> Just 1-hour flight from Kathmandu to Paro</>,
                      <><strong>Preserved Heritage:</strong> 17th century dzongs still in use</>,
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 text-[#cf6943] mt-0.5 flex-shrink-0" />
                        <span className="text-[#556363] text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .touch-manipulation {
            touch-action: manipulation;
          }

          .snap-x {
            scroll-snap-type: x mandatory;
          }
          .snap-start {
            scroll-snap-align: start;
          }
        `}</style>
      </div>
    </>
  );
}