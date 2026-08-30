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
  TrendingUp,
  Sunrise,
  Snowflake,
  Camera,
  Heart,
  Tent,
  Compass,
  Award,
  ShieldCheck,
  Phone,
  Plane,
  Building,
  Utensils,
  Map,
  Binoculars,
  TreePine,
  Bird,
  Footprints,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CheckCircle,
  Landmark,
  Castle,
  Church,
  Globe,
  Cloud,
  Home,
  Flag,
  Eye,
  Wind,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const culturalTours = [
  {
    name: "Tibet's Unique Cultural Tour",
    duration: "7 Days",
    difficulty: "Easy",
    altitude: "3,650m",
    price: "$1,950",
    image: "/images/used/tibet-cultural-1.webp",
    rating: 4.9,
    region: "Lhasa • Gyantse",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Street", "Drepung Monastery"],
    description: "Experience Tibet's rich cultural heritage and spiritual traditions.",
    link: "/destinations/tibet/tibet-unique-cultural-tour",
  },
  {
    name: "Tibet Tour with Namtso Lake",
    duration: "5 Days",
    difficulty: "Moderate",
    altitude: "4,718m",
    price: "$1,150",
    image: "/images/used/tibet-2.webp",
    rating: 4.8,
    region: "Lhasa • Namtso",
    highlights: ["Namtso Lake", "Turquoise Waters", "Yangpachen", "Nyenchen Tanglha Range"],
    description: "Visit the heavenly lake at the roof of the world.",
    link: "/destinations/tibet/tibet-tour-namtso-lake",
  },
  {
    name: "Tibet Overland Tour",
    duration: "8 Days",
    difficulty: "Moderate",
    altitude: "5,200m",
    price: "$1,950",
    image: "/images/used/tibet-overland.webp",
    rating: 4.9,
    region: "Kathmandu to Lhasa",
    highlights: ["Friendship Highway", "Himalayan Views", "Gyantse Kumbum", "Yamdrok Lake"],
    description: "Spectacular overland journey through the Himalayas.",
    link: "/destinations/tibet/tibet-overland-tour",
  },
  {
    name: "Lhasa City Tour",
    duration: "4 Days",
    difficulty: "Easy",
    altitude: "3,650m",
    price: "$950",
    image: "/images/used/tibet-lhasa.webp",
    rating: 4.7,
    region: "Lhasa",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Circuit", "Sera Monastery"],
    description: "Explore the forbidden city's most sacred sites.",
    link: "/destinations/tibet/lhasa-city-tour",
  },
  {
    name: "Kailash Mansarovar Yatra",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,638m",
    price: "$2,950",
    image: "/images/used/tibet-4.webp",
    rating: 4.9,
    region: "Western Tibet",
    highlights: ["Mount Kailash", "Lake Mansarovar", "Parikrama", "Sacred Sites"],
    description: "Pilgrimage to the most sacred mountain in Asia.",
    link: "/destinations/tibet/kailash-mansarovar-yatra",
  },
  {
    name: "Everest Base Camp Tibet",
    duration: "9 Days",
    difficulty: "Moderate-Challenging",
    altitude: "5,200m",
    price: "$2,150",
    image: "/images/used/tibet-everest.webp",
    rating: 4.8,
    region: "Tingri • Rongbuk",
    highlights: ["North Face Everest", "Rongbuk Monastery", "Tingri Plains", "Base Camp"],
    description: "See the world's highest peak from the Tibetan side.",
    link: "/destinations/tibet/everest-base-camp-tibet",
  },
];

const regions = [
  {
    name: "Ü-Tsang",
    description: "The cultural and spiritual heartland of Tibet, centered around the sacred city of Lhasa. Home to the Potala Palace, Jokhang Temple, and the great monastic universities of Drepung, Sera, and Ganden.",
    highlights: ["Ancient seat of the Dalai Lamas", "Center of Tibetan Buddhist scholarship", "Yarlung Valley - cradle of Tibetan civilization"],
  },
  {
    name: "Kham",
    description: "A land of rugged mountains and deep gorges, known for its distinctive art, music, and the legendary Khampa warriors. The region's unique dialect and traditions reflect its fierce independent spirit.",
    highlights: ["Renowned for thangka painting", "Traditional Khampa horsemanship", "Derge Parkhang - ancient printing house"],
  },
  {
    name: "Amdo",
    description: "Vast grasslands stretching across northeastern Tibet, home to nomadic communities and some of Tibet's most influential monasteries. Birthplace of the 14th Dalai Lama and many great Buddhist masters.",
    highlights: ["Rich nomadic pastoral traditions", "Kumbum Monastery - major pilgrimage site", "Distinct Amdo dialect and folk music"],
  },
  {
    name: "Ngari",
    description: "The 'roof of the roof of the world,' encompassing the sacred Mount Kailash and Lake Mansarovar. This remote western region holds the ruins of the ancient Guge Kingdom and some of Tibet's oldest Buddhist sites.",
    highlights: ["Mount Kailash - sacred to four religions", "Ancient Guge Kingdom", "High-altitude desert landscapes"],
  }
];

export default function TibetPage() {
  const router = useRouter();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleBookNow = (itemName: string) => {
    router.push(`/contact?trek=${encodeURIComponent(itemName)}`);
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

  const canonicalUrl = "https://www.himkalaadventure.com/destinations/tibet";
  const pageTitle = "Tibet Travel & Tours - Himkala Adventure";
  const pageDescription = "Tibet travel & tours: Explore the Roof of the World with our expert-guided cultural tours. Visit Lhasa, Potala Palace, and more.";
  const imageUrl = "https://www.himkalaadventure.com/images/used/tibet-main-page.webp";

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
                    Discover <span className="text-[#cf6943]">Tibet</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Roof of the World — where ancient monasteries cling to mountains and the spiritual heart of Tibetan Buddhism beats strong.
                </p>
              </div>
            </div>
          </section>

          {/* About Tibet - matching about page story layout */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                  <Image
                    src="/images/used/tibet-main-page.webp"
                    alt="Tibet Himalayas with prayer flags and sacred mountains"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                    <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">4,500<span className="text-xl sm:text-2xl">m</span></div>
                    <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">AVERAGE ELEVATION</div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">About Tibet</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    The Spiritual <span className="text-[#cf6943]">Roof of the World</span>
                  </h2>
                  <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                    <p>
                      Tibet is culturally and historically rich, where <strong className="text-[#14383b]">Tibetan Buddhism</strong> holds a special position of interest in the world. It can be said to be the dwelling place of gods, lokeshvara, tantra, and spiritual spirits.
                    </p>
                    <p>
                      The many-storied <strong className="text-[#14383b]">Potala Palace</strong> towers above Lhasa like a celestial realm suspended in air. <strong className="text-[#14383b]">Lhasa</strong> contains treasures like the <strong className="text-[#14383b]">Barkhor</strong> market circuit and the mysterious <strong className="text-[#14383b]">Jokhang Temple</strong>, Tibet's most sacred shrine.
                    </p>
                    <p>
                      Tibet was a land of many principalities with different dialects and styles of dress. Multiple sects and subsects of Tibetan Buddhism created one of the world's greatest and most complex religious traditions, all enriching each other.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Tibet - clean cards matching about page */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why Visit</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    A Land of <span className="text-[#cf6943]">Spiritual Wonder</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  From ancient monasteries to breathtaking landscapes, Tibet offers transformative experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Roof of the World", text: "Highest plateau on Earth with average elevation over 4,500m." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Spiritual Heartland", text: "Center of Tibetan Buddhism with thousand-year traditions." },
                  { icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Potala Palace", text: "UNESCO World Heritage site and architectural wonder." },
                  { icon: <Wind className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Ancient Kingdoms", text: "Land of diverse principalities, dialects, and traditions." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Himalayan Vistas", text: "Spectacular views of the world's highest mountains." },
                  { icon: <Moon className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Sacred Lakes", text: "Turquoise holy lakes like Namtso and Yamdrok." },
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
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Tibet Tours</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Spiritual & <span className="text-[#cf6943]">Cultural Journeys</span>
                  </h2>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={scrollLeft}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border border-[#b7aaa0] hover:border-[#cf6943] hover:text-[#cf6943] transition-colors active:bg-[#cf6943]/10 touch-manipulation"
                    aria-label="Scroll left"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" aria-hidden="true" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border border-[#b7aaa0] hover:border-[#cf6943] hover:text-[#cf6943] transition-colors active:bg-[#cf6943]/10 touch-manipulation"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#556363]">
                Experience Tibet's rich heritage and breathtaking landscapes with our expert-guided tours.
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

          {/* Tibet Regions - clean text-focused */}
          <section id="regions" className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Regions</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    The Four <span className="text-[#cf6943]">Pillars of Tibet</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Ancient kingdoms and sacred valleys, each holding centuries of wisdom within their mountains and monasteries.
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
                    Best Time to <span className="text-[#cf6943]">Visit Tibet</span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  {
                    season: "Spring",
                    months: "April - May",
                    icon: <TreePine className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Mild weather", "Fewer tourists", "Blooming flowers", "Clear skies"],
                    rating: "Excellent",
                  },
                  {
                    season: "Summer",
                    months: "June - August",
                    icon: <Sunrise className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Warmest months", "Festival season", "Lush landscapes", "Rain showers"],
                    rating: "Best",
                  },
                  {
                    season: "Autumn",
                    months: "September - October",
                    icon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Clear mountain views", "Dry weather", "Harvest season", "Photography"],
                    rating: "Excellent",
                  },
                  {
                    season: "Winter",
                    months: "November - March",
                    icon: <Snowflake className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Fewest tourists", "Snow landscapes", "Lower prices", "Indoor cultural tours"],
                    rating: "Moderate",
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
                        season.rating === "Moderate" ? "bg-amber-500 text-white" : "bg-slate-500 text-white"
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

          {/* Travel Information - clean cards */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Travel Information</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Travel <span className="text-[#cf6943]">to Tibet</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Everything you need to know for your journey to the Roof of the World.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { title: "Easy Access from Nepal", text: "Regular flights between Kathmandu and Lhasa (1 hour). Overland route via Friendship Highway offers spectacular Himalayan views." },
                    { title: "Overland Route Experience", text: "Spectacular view of the Himalayas from Tibetan plateau. See white glaciers, multi-colored hills, turquoise lakes, and ancient monastic cities." },
                    { title: "Cultural Diversity", text: "Experience the wonderful diversity of Tibetan people and culture across different regions — what made Tibet remarkable." },
                    { title: "Permits & Regulations", text: "Tibet Travel Permit required for all visitors. We handle all paperwork including China Group Visa and Tibet Travel Permits." },
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
                  <h3 className="font-bold text-[#14383b] text-lg sm:text-xl mb-4">What to Expect in Tibet</h3>
                  <ul className="space-y-3">
                    {[
                      <><strong>High Altitude:</strong> Lhasa at 3,650m, gradual acclimatization important</>,
                      <><strong>Spiritual Atmosphere:</strong> Active monasteries with praying monks and pilgrims</>,
                      <><strong>Architectural Marvels:</strong> Ancient dzongs, palaces, and monastic complexes</>,
                      <><strong>Dramatic Landscapes:</strong> Vast plateaus, turquoise lakes, snow-capped peaks</>,
                      <><strong>Local Cuisine:</strong> Tsampa, butter tea, momos, and Tibetan noodle soups</>,
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