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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getTrekkingDurationLabel,
  TREKKING_SERVICES_UPDATED_EVENT,
  TrekkingService,
} from "@/lib/trekking-services";
import { loadTrekkingServices } from "@/lib/firebase/trekking-services-repository";
import { loadManagedServices } from "@/lib/firebase/managed-services-repository";
import {
  managedServicePublicLink,
  MANAGED_SERVICES_UPDATED_EVENT,
  ManagedService,
  ManagedServiceCollection,
} from "@/lib/managed-services";

type NepalTrekCard = {
  name: string;
  duration: string;
  difficulty: string;
  altitude: string;
  price: string;
  image: string;
  rating: number;
  region: string;
  highlights: string[];
  description: string;
  link: string;
};

const trekkingPackagesFallback: NepalTrekCard[] = [
  {
    name: "Everest Base Camp Trek",
    duration: "14 Days",
    difficulty: "Moderate",
    altitude: "5,364m",
    price: "$1,520",
    image: "/images/used/everest-main-page.webp",
    rating: 4.9,
    region: "Everest Region",
    highlights: ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche Monastery"],
    description: "Walk in the footsteps of legends to the base of the world's highest peak.",
    link: "/services/trekking/everest-base-camp-trek",
  },
  {
    name: "Annapurna Circuit Trek",
    duration: "9 Days",
    difficulty: "Challenging",
    altitude: "5,416m",
    price: "$800",
    image: "/images/used/annapurna-circuit-main-page.webp",
    rating: 4.8,
    region: "Annapurna Region",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Valley", "Tatopani Hot Springs"],
    description: "The classic Himalayan circuit crossing the legendary Thorong La Pass.",
    link: "/services/trekking/annapurna-circuit-trek",
  },
  {
    name: "Manaslu Circuit Trek",
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$1,200",
    image: "/images/used/manaslu-main-page.webp",
    rating: 4.9,
    region: "Manaslu Region",
    highlights: ["Larkya La Pass", "Tibetan Villages", "Remote Trails", "Buddhist Monasteries"],
    description: "Circle the world's eighth highest mountain through pristine wilderness.",
    link: "/services/trekking/manaslu-circuit-trek",
  },
  {
    name: "Langtang Valley Trek",
    duration: "10 Days",
    difficulty: "Easy-Moderate",
    altitude: "4,984m",
    price: "$650",
    image: "/images/used/langtang-main-page.webp",
    rating: 4.7,
    region: "Langtang Region",
    highlights: ["Kyanjin Gompa", "Langtang Village", "Cheese Factory", "Tserko Ri"],
    description: "Explore the 'Valley of Glaciers' just north of Kathmandu.",
    link: "/services/trekking/langtang-valley-trek",
  },
  {
    name: "Manaslu Circuit Trek with Tsum Valley",
    duration: "18 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    price: "$2,050",
    image: "/images/used/tsum-valley-1.webp",
    rating: 4.9,
    region: "Manaslu Region",
    highlights: ["Tsum Valley", "Larkya La Pass", "Tibetan Culture", "Buddhist Monasteries", "Remote Villages"],
    description: "Journey through the hidden Tsum Valley and circumnavigate the world's eighth highest mountain.",
    link: "/services/trekking/manaslu-circuit-trek-with-tsum-valley",
  },
  {
    name: "Annapurna Base Camp Trek",
    duration: "11 Days",
    difficulty: "Moderate",
    altitude: "4,130m",
    price: "$700",
    image: "/images/used/abc-main-page.webp",
    rating: 4.9,
    region: "Annapurna Region",
    highlights: ["Annapurna Sanctuary", "Natural Hot Springs", "Machapuchare View", "Bamboo Forests", "Mountain Amphitheater"],
    description: "Journey into the Annapurna Sanctuary, standing at the base of towering peaks.",
    link: "/services/trekking/annapurna-base-camp-trek",
  },
];

function toNepalTrekCard(trek: TrekkingService): NepalTrekCard {
  return {
    name: trek.name,
    duration: getTrekkingDurationLabel(trek),
    difficulty: trek.difficulty,
    altitude: trek.maxAltitude,
    price: `$${trek.price.toLocaleString("en-US")}`,
    image: trek.image,
    rating: trek.rating,
    region: trek.region,
    highlights: trek.highlights,
    description: trek.shortDescription || trek.description,
    link: trek.link,
  };
}

type CulturalExperienceCard = {
  name: string;
  duration: string;
  difficulty?: string;
  altitude?: string;
  price: string;
  image: string;
  rating?: number;
  highlights: string[];
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
};

const cityToursFallback: CulturalExperienceCard[] = [
  {
    name: "Free Walking Tour Kathmandu",
    duration: "4-5 Hours",
    difficulty: "Easy",
    altitude: "1,400m",
    price: "Tips-based",
    image: "/images/used/free-walking-tour-nepal.webp",
    rating: 4.8,
    highlights: ["Kathe Swoyambhu", "Glass Beads Market", "Local Lassi", "Monkey Temple", "Newar Architecture"],
    description: "First Free Walking Tour in Kathmandu and other parts of Kathmandu Valley, Nepal.",
    icon: <Compass className="w-5 h-5" />,
    color: "from-sky-100 to-blue-50",
    link: "/services/free-walking-tour-kathmandu",
  },
  {
    name: "Bhaktapur & Patan Day Tour",
    duration: "1 Day",
    price: "$100",
    image: "/images/used/bhaktapur-patan-nepal.webp",
    highlights: ["Bhaktapur Durbar Square", "Patan Durbar Square", "Golden Temple", "Traditional Crafts"],
    description: "Discover ancient Newari architecture and living culture.",
    icon: <Castle className="w-5 h-5" />,
    color: "from-amber-100 to-amber-50",
    link: "/services/day-sightseeings/bhaktapur-patan-sightseeing",
  },
  {
    name: "Nagarkot Changunarayan Hiking",
    duration: "1 Day",
    difficulty: "Easy",
    altitude: "2,195m",
    price: "$45",
    image: "/images/used/nagarkot-changu.webp",
    rating: 4.8,
    highlights: ["Himalayan Sunrise", "Mt. Everest Views", "UNESCO Temple", "Village Walk", "Downhill Trail", "Rural Life Experience"],
    description: "Scenic day hike with panoramic mountain views.",
    icon: <Sunrise className="w-5 h-5" />,
    color: "from-orange-100 to-amber-50",
    link: "/services/day-hikings/nagarkot-changunarayan-hiking",
  },
  {
    name: "Nepal Heritage Sites Tour",
    duration: "10 Days",
    difficulty: "Easy",
    altitude: "1,400m",
    price: "$2300",
    image: "/images/used/nepal-heritage-sites-tour-nepal.webp",
    rating: 4.8,
    highlights: ["Kathmandu Valley", "Pokhara", "Lumbini", "Chitwan"],
    description: "Explore Nepal's rich cultural heritage across the country.",
    icon: <Landmark className="w-5 h-5" />,
    color: "from-emerald-100 to-teal-50",
    link: "/services/multi-day-cultural-tours/nepal-heritage-sites-tour",
  },

  {
    name: "Kathmandu Pokhara Lumbini Chitwan Tour",
    duration: "10 Days",
    difficulty: "Easy",
    altitude: "1,400m",
    price: "$2200",
    image: "/images/used/kathmandu-lumbini-pokhara-nepal.webp",
    rating: 4.8,
    highlights: ["Kathmandu Valley", "Pokhara", "Lumbini", "Chitwan"],
    description: "Complete Nepal experience covering all major destinations.",
    icon: <Map className="w-5 h-5" />,
    color: "from-blue-100 to-cyan-50",
    link: "/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour",
  },

  {
    name: "Historic Nature Scenic Photography Tour",
    duration: "12 Days",
    difficulty: "Easy",
    altitude: "2,100m",
    price: "$1895",
    image: "/images/used/historic-scenic-photography-nepal.webp",
    rating: 4.9,
    highlights: ["Historic Sites", "Nature", "Scenic Views", "Photography"],
    description: "Perfect tour for photography enthusiasts.",
    icon: <Camera className="w-5 h-5" />,
    color: "from-purple-100 to-pink-50",
    link: "/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour",
  }
];

const culturalExperienceCollections = [
  "freeTours",
  "multiDayTours",
  "dayHikings",
  "daySightseeings",
  "mountainFlights",
  "jungleSafaris",
] as const satisfies readonly ManagedServiceCollection[];

const culturalExperiencePresentation: Record<
  (typeof culturalExperienceCollections)[number],
  { icon: React.ReactNode; color: string }
> = {
  freeTours: {
    icon: <Compass className="h-5 w-5" />,
    color: "from-sky-100 to-blue-50",
  },
  multiDayTours: {
    icon: <Landmark className="h-5 w-5" />,
    color: "from-emerald-100 to-teal-50",
  },
  dayHikings: {
    icon: <Sunrise className="h-5 w-5" />,
    color: "from-orange-100 to-amber-50",
  },
  daySightseeings: {
    icon: <Castle className="h-5 w-5" />,
    color: "from-amber-100 to-amber-50",
  },
  mountainFlights: {
    icon: <Plane className="h-5 w-5" />,
    color: "from-blue-100 to-cyan-50",
  },
  jungleSafaris: {
    icon: <Binoculars className="h-5 w-5" />,
    color: "from-green-100 to-emerald-50",
  },
};

function servicePriceLabel(price: ManagedService["price"]) {
  return typeof price === "number"
    ? `$${price.toLocaleString("en-US")}`
    : price;
}

function toCulturalExperience(
  collection: (typeof culturalExperienceCollections)[number],
  service: ManagedService,
): CulturalExperienceCard {
  return {
    name: service.cardTitle || service.name,
    duration: service.duration,
    difficulty: service.difficulty,
    altitude: service.altitude,
    price: servicePriceLabel(service.price),
    image: service.image,
    rating: service.rating,
    highlights: service.highlights,
    description:
      service.cardDescription ||
      service.shortDescription ||
      service.description,
    ...culturalExperiencePresentation[collection],
    link: service.link || managedServicePublicLink(collection, service),
  };
}

const regions = [
  {
    name: "Everest Region",
    description: "Home to the world's highest peak and the legendary Sherpa people. This sacred landscape is dotted with ancient monasteries, bustling trading villages, and the footsteps of mountaineering history.",
    highlights: ["Sagamartha National Park", "Tengboche Monastery", "Sherpa Culture"],
  },
  {
    name: "Annapurna Region",
    description: "The most diverse trekking region on Earth, where you can walk from subtropical forests to high-altitude deserts in days. Home to the world's deepest gorge and the sacred pilgrimage site of Muktinath.",
    highlights: ["Thorong La Pass", "Annapurna Circuit", "Gurung & Thakali Cultures"],
  },
  {
    name: "Langtang Region",
    description: "The 'Valley of Glaciers' lies just north of Kathmandu, offering pristine wilderness and warm Tamang hospitality. Rebuilding stronger after the 2015 earthquake, this region remains a hidden gem.",
    highlights: ["Langtang National Park", "Tamang Heritage", "Kyanjin Gompa"],
  },
  {
    name: "Manaslu Region",
    description: "A restricted area preserving authentic Tibetan culture and pristine landscapes. Circumnavigate the world's eighth highest mountain through remote villages and ancient trade routes to Tibet.",
    highlights: ["Tsum Valley", "Larkya La Pass", "Tibetan Heritage"],
  }
];

export default function NepalPage() {
  const router = useRouter();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [trekkingPackages, setTrekkingPackages] =
    React.useState<NepalTrekCard[]>(trekkingPackagesFallback);
  const [cityTours, setCityTours] =
    React.useState<CulturalExperienceCard[]>(cityToursFallback);

  React.useEffect(() => {
    let isMounted = true;

    const refreshTreks = async () => {
      const { treks } = await loadTrekkingServices();
      if (isMounted) setTrekkingPackages(treks.map(toNepalTrekCard));
    };

    void refreshTreks();
    window.addEventListener(TREKKING_SERVICES_UPDATED_EVENT, refreshTreks);
    return () => {
      isMounted = false;
      window.removeEventListener(TREKKING_SERVICES_UPDATED_EVENT, refreshTreks);
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;

    const refreshCulturalExperiences = async () => {
      const results = await Promise.all(
        culturalExperienceCollections.map(async (collection) => ({
          collection,
          result: await loadManagedServices(collection),
        })),
      );
      if (!isMounted) return;

      setCityTours(
        results.flatMap(({ collection, result }) =>
          result.services
            .filter((service) => service.published)
            .map((service) => toCulturalExperience(collection, service)),
        ),
      );
    };

    const handleManagedServicesUpdate = (event: Event) => {
      const collection = (event as CustomEvent<ManagedServiceCollection>)
        .detail;
      if (
        culturalExperienceCollections.some(
          (candidate) => candidate === collection,
        )
      ) {
        void refreshCulturalExperiences();
      }
    };

    void refreshCulturalExperiences();
    window.addEventListener(
      MANAGED_SERVICES_UPDATED_EVENT,
      handleManagedServicesUpdate,
    );
    return () => {
      isMounted = false;
      window.removeEventListener(
        MANAGED_SERVICES_UPDATED_EVENT,
        handleManagedServicesUpdate,
      );
    };
  }, []);

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

  const canonicalUrl = "https://www.himkalaadventure.com/destinations/nepal";
  const pageTitle = "Nepal Travel & Tours - Himkala Adventure";
  const pageDescription = "Nepal travel & tours: Explore the Himalayas with our expert-guided treks and tours. From Everest Base Camp to cultural heritage sites. Book your Nepal adventure now!";
  const imageUrl = "https://www.himkalaadventure.com/images/used/nepal-hero.webp";

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
                    Discover <span className="text-[#cf6943]">Nepal</span>
                  </h1>
                </div>
                <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                  Where ancient temples meet soaring peaks — the birthplace of Buddha and the roof of the world.
                </p>
              </div>
            </div>
          </section>

          {/* About Nepal - matching about page story layout */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
                <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                  <Image
                    src="/images/used/nepal-hero.webp"
                    alt="Nepal Himalayas with majestic mountain landscape"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                    <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">8<span className="text-xl sm:text-2xl">+</span></div>
                    <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">8,000M PEAKS</div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">About Nepal</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    A Land of <span className="text-[#cf6943]">Endless Wonder</span>
                  </h2>
                  <div className="mt-4 sm:mt-7 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                    <p>
                      Nestled between India and China, Nepal is a small country with an enormous presence. From the jungles of the Terai to the summits of the Himalayas, this nation offers astonishing diversity.
                    </p>
                    <p>
                      Home to <strong className="text-[#14383b]">eight of the world's 8,000-meter peaks</strong>, including the legendary Mount Everest, Nepal has been the ultimate destination for adventurers. It's also the <strong className="text-[#14383b]">birthplace of Buddha</strong> and a living museum of traditions.
                    </p>
                    <p>
                      Whether you seek high-altitude trekking, ancient monasteries, jungle safaris, or genuine human connection, Nepal delivers transformative experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Nepal - clean cards matching about page */}
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why Visit</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    A Country <span className="text-[#cf6943]">Like No Other</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  From world-record peaks to ancient kingdoms, Nepal offers unique experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  { icon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />, title: "8 of World's 14 Highest Peaks", text: "Home to Mount Everest and seven other 8,000m+ giants." },
                  { icon: <Building className="w-4 h-4 sm:w-5 sm:h-5" />, title: "UNESCO World Heritage Sites", text: "Ten UNESCO sites including ancient temples and stupas." },
                  { icon: <Bird className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Incredible Biodiversity", text: "From subtropical jungles to alpine meadows with rare wildlife." },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Warm Hospitality", text: "Experience legendary Nepali hospitality with 'Namaste'." },
                  { icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Adventure Capital", text: "Trekking, climbing, rafting, and endless adventure possibilities." },
                  { icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, title: "Spiritual Heritage", text: "Birthplace of Buddha, land of ancient traditions." },
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

          {/* Trekking Packages - matching main page trek layout */}
          <section id="treks" className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Trekking Adventures</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Himalayan <span className="text-[#cf6943]">Treks</span>
                  </h2>
                </div>
                <div className="flex gap-3 sm:gap-4">

                </div>
              </div>

              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#556363]">
                From easy hill walks to challenging high-altitude circuits. Each trek is guided by experienced professionals who know these mountains intimately.
              </p>

              {/* Mobile Horizontal Scroll */}
              <div className="md:hidden mt-8 sm:mt-12">
                <div className="flex overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                  {trekkingPackages.map((trek) => (
                    <Link
                      key={trek.name}
                      href={trek.link}
                      className="flex-shrink-0 w-[80vw] sm:w-[85vw] mr-4 sm:mr-6 last:mr-0 snap-start"
                    >
                      <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <Image
                            src={trek.image}
                            alt={trek.name}
                            fill
                            className="object-cover"
                            sizes="85vw"
                            quality={85}
                          />
                          <div className="absolute top-3 right-3 bg-[#14383b]/90 text-[#f7f2e9] px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {trek.rating}
                          </div>
                          <div className="absolute top-3 left-3 bg-[#cf6943] text-[#fff8ee] px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide">
                            {trek.region}
                          </div>
                        </div>
                        <CardContent className="p-4 sm:p-5 md:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-[#14383b] mb-1">{trek.name}</h3>
                          <p className="text-[#556363] text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{trek.description}</p>
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[#556363] text-xs sm:text-sm">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" aria-hidden="true" /> {trek.duration}
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[#556363] text-xs sm:text-sm">
                              <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" aria-hidden="true" /> {trek.altitude}
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[#556363] text-xs sm:text-sm">
                              <Footprints className="w-3 h-3 sm:w-4 sm:h-4 text-[#cf6943]" aria-hidden="true" /> {trek.difficulty}
                            </div>
                            <div className="text-[#cf6943] font-bold text-base sm:text-lg">{trek.price}</div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {trek.highlights.slice(0, 3).map((h) => (
                              <span key={h} className="text-[10px] sm:text-xs border border-[#d8cec0] text-[#556363] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                                {h}
                              </span>
                            ))}
                          </div>
                          <Button
                            className="w-full bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full text-xs min-h-[44px]"
                            onClick={(e) => { e.preventDefault(); handleBookNow(trek.name); }}
                          >
                            Book Now
                          </Button>
                        </CardContent>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {trekkingPackages.map((trek) => (
                  <Link
                    key={trek.name}
                    href={trek.link}
                    className="group block"
                  >
                    <div className="bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={trek.image}
                          alt={trek.name}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 1024px) 33vw, 33vw"
                          quality={85}
                        />
                        <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {trek.rating}
                        </div>
                        <div className="absolute top-4 left-4 bg-[#cf6943] text-[#fff8ee] px-3 py-1.5 text-xs font-bold tracking-wide">
                          {trek.region}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#14383b] mb-1">{trek.name}</h3>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed">{trek.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Clock className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {trek.duration}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Mountain className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {trek.altitude}
                          </div>
                          <div className="flex items-center gap-2 text-[#556363] text-sm">
                            <Footprints className="w-4 h-4 text-[#cf6943]" aria-hidden="true" /> {trek.difficulty}
                          </div>
                          <div className="text-[#cf6943] font-bold text-xl">{trek.price}</div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {trek.highlights.slice(0, 3).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                        <Button
                          className="w-full bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full min-h-[44px]"
                          onClick={(e) => { e.preventDefault(); handleBookNow(trek.name); }}
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Cultural Tours - matching city tours style */}
          <section id="tours" className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Cultural Tours</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Cultural & <span className="text-[#cf6943]">Heritage Experiences</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Discover Nepal's rich heritage with our expert-guided day tours and multi-day cultural journeys.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {cityTours.map((tour) => (
                  <Link
                    key={tour.name}
                    href={tour.link}
                    className="group block"
                  >
                    <div className={`bg-[#f7f2e9] border border-[#d8cec0] overflow-hidden hover:shadow-md transition-all duration-300 rounded-lg h-full`}>
                      <div className="relative h-48 overflow-hidden">
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
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9]">
                            {tour.icon}
                          </div>
                          <h3 className="text-lg font-bold text-[#14383b]">{tour.name}</h3>
                        </div>
                        <p className="text-[#556363] text-sm mb-4 leading-relaxed">{tour.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tour.highlights.slice(0, 3).map((h) => (
                            <span key={h} className="text-xs border border-[#d8cec0] text-[#556363] px-2.5 py-1 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-[#14383b]">{tour.price}</span>
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

          {/* Nepal Regions - clean text-focused */}
          <section id="regions" className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Regions</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Nepal's <span className="text-[#cf6943]">Legendary Regions</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  From the Sherpa kingdoms of the east to the Tibetan-influenced valleys of the west, each region tells its own story.
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
          <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">When to Visit</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    Best Time to <span className="text-[#cf6943]">Visit Nepal</span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-12">
                {[
                  {
                    season: "Spring",
                    months: "March - May",
                    icon: <Sunrise className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Rhododendron blooms", "Clear skies", "Warm temperatures", "Pre-monsoon trekking"],
                    rating: "Excellent",
                  },
                  {
                    season: "Summer/Monsoon",
                    months: "June - August",
                    icon: <TreePine className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Lush landscapes", "Fewer tourists", "Best for Mustang", "Cultural festivals"],
                    rating: "Moderate",
                  },
                  {
                    season: "Autumn",
                    months: "September - November",
                    icon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Best visibility", "Peak trekking season", "Dashain festival", "Perfect weather"],
                    rating: "Best",
                  },
                  {
                    season: "Winter",
                    months: "December - February",
                    icon: <Snowflake className="w-4 h-4 sm:w-5 sm:h-5" />,
                    highlights: ["Clear views", "Fewer crowds", "Lower altitude treks", "Budget-friendly"],
                    rating: "Good",
                  },
                ].map((season) => (
                  <div key={season.season} className="bg-[#f7f2e9] p-5 sm:p-6 rounded-lg border border-[#d8cec0] hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9]">
                        {season.icon}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${season.rating === "Best" ? "bg-green-500 text-white" :
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

          {/* What's Included - clean list format matching Bhutan page */}
          <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
            <div className="mx-auto max-w-[1220px]">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Our Services</div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    What We <span className="text-[#cf6943]">Provide</span>
                  </h2>
                </div>
                <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                  Comprehensive support for a safe, comfortable, and unforgettable experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { title: "Licensed Guides", text: "Government-certified guides with extensive local knowledge." },
                    { title: "Accommodation", text: "Best available teahouses and lodges throughout the trek." },
                    { title: "All Meals", text: "Three meals daily on trek, prepared with local ingredients." },
                    { title: "Permits & Fees", text: "All trekking permits and national park entry fees included." },
                    { title: "Transportation", text: "Airport transfers and all local transport arrangements." },
                    { title: "Porter Service", text: "One porter for every two trekkers, carrying up to 15kg." },
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
                  <h3 className="font-bold text-[#14383b] text-lg sm:text-xl mb-4">Included Equipment</h3>
                  <ul className="space-y-3">
                    {[
                      <><strong>Sleeping Bag:</strong> -15°C rated for high-altitude comfort</>,
                      <><strong>Down Jacket:</strong> Insulated jacket for cold mornings and evenings</>,
                      <><strong>Duffle Bag:</strong> For your trekking gear, carried by porters</>,
                      <><strong>First Aid Kit:</strong> Comprehensive medical supplies and oxygen cylinder</>,
                      <><strong>Water Purification:</strong> Tablets or UV filter for safe drinking water</>,
                      <><strong>Trekking Poles:</strong> Adjustable poles for stability on trails</>,
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
