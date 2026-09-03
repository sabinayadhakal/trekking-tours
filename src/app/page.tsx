"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mountain, 
  Award, 
  ShieldCheck, 
  Users, 
  Star,
  Clock,
  Tent,
  Footprints,
  Camera,
  Heart,
  ChevronRight,
  MapPin,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight as RightIcon,
  Globe,
  Youtube,
  Instagram,
  Play,
  XCircle,
  ArrowRight,
  ArrowDownRight,
  MoveUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TREKKING_SERVICES_FALLBACK, TrekkingService } from "@/lib/trekking-services";
import { loadTrekkingServices } from "@/lib/firebase/trekking-services-repository";

const destinations = [
  {
    name: "Nepal",
    image: "/images/used/nepal-main-page.webp",
    description: "Himalayan peaks, ancient cities, and legendary trekking routes.",
    highlights: ["Everest Base Camp", "Annapurna Circuit", "Kathmandu Valley"],
    link: "/destinations/nepal"
  },
  {
    name: "Bhutan",
    image: "/images/used/bhutan-tiger.webp",
    description: "Monasteries, mountain fortresses, and a commitment to happiness.",
    highlights: ["Tiger's Nest", "Punakha Dzong", "Paro Valley"],
    link: "/destinations/bhutan"
  },
  {
    name: "Tibet",
    image: "/images/used/tibet-main-page.webp",
    description: "High-altitude plains, sacred peaks, and centuries-old Buddhist traditions.",
    highlights: ["Mount Kailash", "Lhasa", "Everest Base Camp (North)"],
    link: "/destinations/tibet"
  }
];

const services = [
  {
    icon: (
      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C5E0ED] to-[#7fb8d4] flex items-center justify-center">
          <span className="text-[#0f2940] font-bold text-xs sm:text-sm">1</span>
        </div>
      </div>
    ),
    title: "Free Walking Tour, Kathmandu",
    description: "First Free Walking Tour in Kathmandu, Nepal.",
    color: "from-sky-100 to-blue-50",
    link: "/services/free-walking-tour-kathmandu"
  },
  {
    icon: <Mountain className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Mountain Trekking",
    description: "Guided treks through Everest, Annapurna, Langtang with Sherpa guides.",
    color: "from-blue-100 to-cyan-50",
    link: "/services/trekking"
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Cultural Tours",
    description: "Ancient temples, monasteries, and Himalayan heritage experiences.",
    color: "from-amber-100 to-orange-50",
    link: "/services/multi-day-cultural-tours"
  },
  {
    icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Day Sightseeings",
    description: "Explore Kathmandu Valley's UNESCO heritage sites and hidden gems.",
    color: "from-rose-100 to-pink-50",
    link: "/services/day-sightseeings"
  },
  {
    icon: <Tent className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Jungle Safari",
    description: "Wildlife adventures in Chitwan National Park.",
    color: "from-green-100 to-emerald-50",
    link: "/services/jungle-safari"
  },
];

const testimonials = [
  {
    name: "Carole Munanoa",
    country: "France",
    text: "What truly set this tour apart was the way Shiva explained the coexistence of Hinduism and Buddhism in Kathmandu. He carefully unpacked the history, symbols, and everyday practices of both faiths.",
    trek: "Kathmandu City Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Arian Asgari",
    country: "Iran",
    text: "The Muldai trek is an underrated gem... What really made it special, though, were the people. Shiva and his son are just fantastic; they were so much more than guides, and the whole group felt like a family.",
    trek: "Muldai Trek",
    trekLink: "/services/trekking"
  },
  {
    name: "Sandra Andermatt",
    country: "Switzerland",
    text: "If you're in Kathmandu, do not miss out on the incredible free walking tour... It takes you off the beaten path, offering a chance to explore hidden gems and unusual places that most tourists never get to see.",
    trek: "Free Walking Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Anna Michelle Goksøyr",
    country: "Norway",
    text: "We did the Manaslu Circuit trek and it has been an amazing experience... The guides treated us like princesses, picked flowers for us, and have become friends for life. I deeply recommend traveling with Himkala Adventures.",
    trek: "Manaslu Circuit",
    trekLink: "/services/trekking/manaslu-circuit-trek"
  },
  {
    name: "Aránzazu Gs",
    country: "Spain",
    text: "Shiva is a professional, passionate, friendly, empathetic and excellent guide... he made me discover the Nepalese culture and their way of life, food, superstitions, customs... He transmits good vibes.",
    trek: "Nepal Cultural Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Krystsina Babets",
    country: "Belarus",
    text: "I did Annapurna Base Camp trekking... It was my third trekking experience with Himkala Adventure. Shiva is a very caring, knowledgeable guide and genuinely honest person. You will really have a great experience!",
    trek: "Annapurna Base Camp",
    trekLink: "/services/trekking/annapurna-base-camp-trek"
  },
  {
    name: "Novitri Esna",
    country: "Indonesia",
    text: "I'm a beginner trekker, but Shiva made the Langtang trek feel possible. He was so patient and always checked in... He pointed out langurs, yaks, and special places I would've missed. I felt supported the whole way.",
    trek: "Langtang Valley",
    trekLink: "/services/trekking/langtang-valley-trek"
  },
  {
    name: "Cangiamila Arianna",
    country: "Italy",
    text: "Nepal is a country rich in history and culture and Shiva is the best person you could ever ask to take you through all of that... Another great thing about Shiva is that he devolves part of his earnings towards the rebuilding of his village.",
    trek: "Kathmandu City Tour",
    trekLink: "/nepal-travel-packages"
  },
  {
    name: "Sébastien Schillé",
    country: "UK",
    text: "I had an amazing and unforgettable experience with Himkala Adventure!... I came to Shiva, Himkala Adventure's director, to ask him what he thought was the best next step. Before I knew it, he had come up with a complete itinerary... Shiva was an excellent guide! He is easy going, kind and very knowledgeable.",
    trek: "Valley Fringe Trek",
    trekLink: "/services/trekking"
  },
  {
    name: "Suffel Schatz",
    country: "Germany",
    text: "We did a 7day hiking tour with Himkala adventures... We had an amazing time, great conversations with our guide Sabinaya about Nepal's culture, history, everyday life, etc. Personal yet always professional. Thanks for that outstanding experience which we will never forget.",
    trek: "Ghorepani Poonhill Trek",
    trekLink: "/services/trekking/poon-hill-trek"
  },
  {
    name: "Nina Dupuy",
    country: "France",
    text: "I had the incredible opportunity to do the Everest Base Camp with this company... The organization was impeccable. My guide, Khadga, was extremely attentive and helpful... Reaching Base Camp was a triumphant moment. I will 100% do it again!",
    trek: "Everest Base Camp",
    trekLink: "/services/trekking/everest-base-camp-trek"
  },
  {
    name: "Dorota Grabek",
    country: "Spain",
    text: "Himkala Adventure organized for me and my friends 10 days trekking to Annapurna Base Camp. Our guide was very supportive and professional, he afforded us unforgettable and safe Himalayan trekking!",
    trek: "Annapurna Base Camp",
    trekLink: "/services/trekking/annapurna-base-camp-trek"
  }
];

const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

const featuredBlogs = [
  {
    title: "How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown",
    excerpt: "From budget-friendly Poon Hill at $500 to premium Upper Mustang at $2,595 — break down every trek, permit, and hidden expense.",
    image: "/images/used/nepal-trek-cost-blog-hero.webp",
    slug: "nepal-trek-cost-2026",
    date: "June 4, 2026",
    readTime: "16 min",
  },
  {
    title: "Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers",
    excerpt: "Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure.",
    image: "/images/used/solo-trek-blog-hero.webp",
    slug: "solo-trekking-nepal-2026",
    date: "August 7, 2026",
    readTime: "8 min",
  },
];

const youtubeVideos = [
  {
    title: "Himkala Adventure | Kathmandu, Nepal",
    url: "https://www.youtube.com/watch?v=JxiY-aG0e_c&t=10s",
  },
  {
    title: "Ritual Thread Ceremony | Himkala Adventure",
    url: "https://www.youtube.com/watch?v=a0P-e9MRRpY&pp=0gcJCdkKAYcqIYzv",
  },
  {
    title: "Nagarkot to Changunarayan Hiking | Himkala Adventure",
    url: "https://www.youtube.com/watch?v=6aUyYVxnaOA",
  },
  {
    title: "Kathmandu Valley Fringe Hiking with Himkala Adventure | Kathmandu, Nepal",
    url: "https://www.youtube.com/watch?v=JS9aWnSWHAA",
  },
  {
    title: "Amazing Free Walking Tour Kathmandu | Himkala Adevnture",
    url: "https://www.youtube.com/watch?v=BjfCd9C2uS4",
  },
];

const instagramPosts = [
  {
    title: "City or mountains? With us, you don't have to choose. 🇳🇵🏔️",
    url: "https://www.instagram.com/himkalaadventure/reel/DbsQAe9PPuI/",
    type: "reel",
  },
  {
    title: "The climb is worth it. 🇳🇵🐒 — Monkey Temple",
    url: "https://www.instagram.com/freewalkingtourkathmandu/reel/DbsuPo8zUMf/",
    type: "reel",
  },
  {
    title: "Kathmandu's Free Walking Tour — 12 Years Strong",
    url: "https://www.instagram.com/freewalkingtourkathmandu/reel/DblJWo7TsOB/",
    type: "reel",
  },
  {
    title: "Backpacking Diaries: Trekking the Himalayas with Himkala Adventure",
    url: "https://www.instagram.com/amberlowentravels/reel/DSSTpFck6F4/",
    type: "reel",
  },
  {
    title: "Humbled by the Mountains — Annapurna Circuit Trek",
    url: "https://www.instagram.com/back.to.that.moment/reel/DMzitZdIxVI/",
    type: "reel",
  },
  {
    title: "Langtang Summit: Kyangjing Ri at 4,400m",
    url: "https://www.instagram.com/thelonecompass/reel/DM4xMomRuex/",
    type: "reel",
  },
  {
    title: "Manaslu Circuit — Captured on 35mm Film",
    url: "https://www.instagram.com/himkalaadventure/reel/DLK9i0YvXLk/",
    type: "reel",
  },
  {
    title: "Annapurna Basecamp: Steep Stairs & Breathtaking Views",
    url: "https://www.instagram.com/back.to.that.moment/reel/DJ2HAhPoeqS/",
    type: "reel",
  },
  {
    title: "Shree Kharka to Tilicho Base Camp",
    url: "https://www.instagram.com/himkalaadventure/reel/DZzFS3_tL5w/",
    type: "reel",
  },
  {
    title: "Ice Lake — 4,620 Meters",
    url: "https://www.instagram.com/himkalaadventure/reel/DZuqJtjPGVO/",
    type: "reel",
  },
  {
    title: "Everest Three Passes Trekking",
    url: "https://www.instagram.com/himkalaadventure/p/Daj6PkTD1Tp/",
    type: "post",
  },
];

const tripadvisorUrl = "https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";

const getYouTubeThumbnail = (url: string) => {
  let videoId = "";
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/images/fallback.jpg";
};

const getYouTubeVideoId = (url: string) => {
  let videoId = "";
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0];
  }
  return videoId;
};

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; url: string } | null>(null);
  const [trekkingServices, setTrekkingServices] = useState<TrekkingService[]>(TREKKING_SERVICES_FALLBACK);
  const popularTreks = trekkingServices.filter((trek) => trek.showOnHomepage);

  useEffect(() => {
    let isMounted = true;

    const refreshTrekkingServices = async () => {
      const { treks } = await loadTrekkingServices();
      if (isMounted) setTrekkingServices(treks);
    };

    void refreshTrekkingServices();
    window.addEventListener("himkala:trekking-services-updated", refreshTrekkingServices);
    window.addEventListener("storage", refreshTrekkingServices);

    return () => {
      isMounted = false;
      window.removeEventListener("himkala:trekking-services-updated", refreshTrekkingServices);
      window.removeEventListener("storage", refreshTrekkingServices);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const openVideoModal = (video: { title: string; url: string }) => {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  const openInstagramPost = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedVideo) closeVideoModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [selectedVideo]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      {/* Viewport meta tag should be in _document.tsx or Head component */}
      
      <main>
        {/* Hero Section - Improved for mobile */}
        <section aria-label="Hero" className="hero-image relative min-h-[480px] sm:min-h-[560px] md:min-h-[720px] h-[85dvh] sm:h-[92dvh] max-h-[920px] bg-[#0d2427] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/used/hero.webp"
              alt="Himalayan Mountains landscape with snow-capped peaks"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0d2427]/40" />
          </div>

          <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-4 sm:px-5 md:px-8 lg:px-14">
            <div className="flex flex-1 items-end pb-12 sm:pb-16 lg:pb-24">
              <div className="max-w-[780px] text-[#f7f2e9]">
                <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-[#f0a17f]">
                  <span className="h-px w-6 sm:w-9 bg-[#e47a4f]" />
                  <span className="text-[9px] sm:text-xs font-semibold tracking-[.08em]">Local knowledge · wide horizons</span>
                </div>
                <h1 className="font-serif text-[clamp(2.8rem,8vw,8rem)] leading-[.95] sm:leading-[.91] tracking-[-.035em] sm:tracking-[-.045em]">
                  Nepal Trekking & <br />
                  <span className="text-[#f0a17f]">Cultural Tours</span>
                </h1>
                <p className="mt-5 sm:mt-7 max-w-[530px] text-sm sm:text-base leading-6 sm:leading-7 text-[#eee8dc]">
                  Thoughtful journeys through Nepal's mountains, villages, and living cultures led by people who call these trails home.
                </p>
                <div className="mt-6 sm:mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
                  <Link href="/contact
                  ">
                    <Button className="group flex items-center gap-3 sm:gap-4 bg-[#e47a4f] px-4 sm:px-5 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#fff8ee] hover:bg-[#f0956d] h-auto rounded-none active:scale-[0.98] transition-transform">
                      FIND YOUR WAY <ArrowDownRight size={15} className="sm:w-[17px] sm:h-[17px] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                    </Button>
                  </Link>
                  <Link href="/about-us" className="flex items-center gap-2 border-b border-[#eee8dc]/60 pb-1 text-[10px] sm:text-[11px] font-bold tracking-[.13em] hover:border-[#f0a17f] hover:text-[#f0a17f] active:text-[#f0a17f]">
                    WHY WITH US <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-7 right-5 hidden items-center gap-8 text-[10px] font-semibold tracking-[.18em] text-[#d8d0c3] sm:flex lg:right-14">
              <span>27°42′N · 85°19′E</span>
              <span className="h-px w-12 bg-[#e47a4f]" />
              <span>KATHMANDU, NEPAL</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 bg-gradient-to-t from-[#f2ede4] to-transparent" />
        </section>

        {/* Intro Section */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1220px] gap-8 sm:gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">A different kind of guide</div>
              <div className="mt-6 sm:mt-8 h-px w-16 sm:w-20 bg-[#cf6943]" />
            </div>
            <div>
             <h2 className="max-w-[860px] font-serif text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[1.1] sm:leading-[1.05] tracking-[-.03em] sm:tracking-[-.035em] text-[#14383b]">
The mountain doesn't care about your itinerary. <span className="text-[#b7aaa0]">It cares about your breath.</span>
</h2>
<p className="mt-5 sm:mt-8 max-w-[620px] text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#556363]">
We move slow because the trail decides the pace, not the guidebook. We budget for a broken down bus, a sudden landslide, or a teahouse owner who insists you stay for dinner. That delay is usually the best part of the trip.
</p>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section id="destinations" className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Where we go</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,5.4vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Nepal, Bhutan & <span className="text-[#cf6943]">Tibet</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Trekking in Nepal, city tours in Kathmandu, and cultural experiences across the Himalayas.
              </p>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden mt-8 sm:mt-12">
              <div className="flex overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                {destinations.map((dest, i) => (
                  <Link
                    key={`${dest.name}-${i}`}
                    href={dest.link}
                    className="flex-shrink-0 w-[80vw] sm:w-[85vw] mr-4 sm:mr-6 last:mr-0 snap-start"
                  >
                    <div className="relative h-[340px] sm:h-[400px] overflow-hidden bg-[#173b3d] rounded-lg">
                      <Image
                        src={dest.image}
                        alt={`${dest.name} destination - Himalayan trekking and cultural tours`}
                        fill
                        className="object-cover opacity-85"
                        sizes="85vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102c2f]/90 via-[#102c2f]/15 to-transparent" />
                      <div className="absolute bottom-0 p-5 sm:p-6 w-full">
                        <h3 className="text-xl sm:text-2xl font-serif text-[#f7f2e9] mb-2 sm:mb-3">{dest.name}</h3>
                        <p className="text-[#e9dfd2] text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                          {dest.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {dest.highlights.map((h, idx) => (
                            <span key={idx} className="text-[10px] sm:text-xs border border-[#f7f2e9]/50 text-[#f7f2e9] px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-5 mt-12">
              {destinations.map((dest, i) => (
                <Link
                  key={dest.name}
                  href={dest.link}
                  className="journey-card group relative block w-full overflow-hidden bg-[#173b3d] hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative min-h-[320px] overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={`${dest.name} - Himalayan trekking destination with cultural highlights`}
                      fill
                      className="object-cover opacity-85 journey-card-image"
                      sizes="(max-width: 1200px) 33vw, 400px"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102c2f]/90 via-[#102c2f]/15 to-transparent" />
                    <span className="absolute left-5 top-5 border border-[#f7f2e9]/50 px-2.5 py-1.5 text-[10px] font-bold tracking-[.15em] text-[#f7f2e9]">
                      Destination
                    </span>
                    <span className="absolute bottom-5 left-5 flex items-center gap-2 text-[11px] font-semibold tracking-wide text-[#e9dfd2]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ef966e]" /> Himalayan
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="mb-5 flex items-center justify-between text-[10px] font-bold tracking-[.15em] text-[#e5a07f]">
                        <span>Explore</span>
                        <MoveUpRight size={16} className="text-[#ef966e] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <h3 className="font-serif text-3xl leading-none tracking-[-.03em] text-[#f7f2e9]">{dest.name}</h3>
                      <p className="mt-5 max-w-[410px] text-sm leading-6 text-[#cad3cc]">{dest.description}</p>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-between border-t border-[#d9e0d5]/20 pt-5 gap-2">
                      {dest.highlights.map((h, idx) => (
                        <span key={idx} className="text-xs font-medium text-[#b8c6bb]">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">What we offer</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,5.4vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Treks, Tours & <span className="text-[#cf6943]">Cultural Experiences</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Guided trekking in Nepal, city tours in Kathmandu, and cultural journeys through Bhutan and Tibet.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={service.link}
                  className="group bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.99]"
                >
                  <CardContent className="p-5 sm:p-6 md:p-8 h-full">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded flex items-center justify-center text-[#2d6a8a] mb-4 sm:mb-6`}>
                      <div className="scale-[1.1] sm:scale-125" aria-hidden="true">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#14383b] mb-2 sm:mb-4">{service.title}</h3>
                    <p className="text-[#556363] leading-relaxed text-sm md:text-base mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    <div className="text-[#cf6943] hover:text-[#b85a38] inline-flex items-center group text-xs sm:text-sm font-bold">
                      Learn More
                      <ChevronRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Treks */}
        <section id="treks" className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase">Trekking Routes</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,5.4vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#f7f2e9]">
                  Nepal's <span className="text-[#ef966e]">Finest Treks</span>
                </h2>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={scrollLeft}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border border-[#55706e] hover:border-[#ef966e] hover:text-[#ef966e] transition-colors active:bg-[#ef966e]/10 touch-manipulation"
                  aria-label="Scroll left through treks"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </button>
                <button
                  onClick={scrollRight}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border border-[#55706e] hover:border-[#ef966e] hover:text-[#ef966e] transition-colors active:bg-[#ef966e]/10 touch-manipulation"
                  aria-label="Scroll right through treks"
                >
                  <RightIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Mobile: Always horizontal scroll */}
            <div className="md:hidden mt-8 sm:mt-12">
              <div className="flex overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                {popularTreks.map((trek, i) => (
                  <Link
                    key={trek.name}
                    href={trek.link}
                    className="flex-shrink-0 w-[80vw] sm:w-[85vw] mr-4 sm:mr-6 last:mr-0 snap-start"
                  >
                    <div className="bg-[#173b3d] border border-[#55706e] overflow-hidden rounded-lg">
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                        <Image
                          src={trek.image}
                          alt={`${trek.name} trek - ${trek.duration} trek in Nepal Himalayas`}
                          fill
                          className="object-cover opacity-85"
                          sizes="85vw"
                          quality={85}
                        />
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#14383b]/90 text-[#f7f2e9] px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-bold flex items-center gap-0.5 sm:gap-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {trek.rating}
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-[#f7f2e9] mb-3 sm:mb-4">{trek.name}</h3>
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                          <div className="flex items-center gap-1.5 sm:gap-2 text-[#b9c9c0]">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ef966e]" aria-hidden="true" />
                            <span className="text-xs sm:text-sm">{trek.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-[#b9c9c0]">
                            <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ef966e]" aria-hidden="true" />
                            <span className="text-xs sm:text-sm">{trek.maxAltitude}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-[#b9c9c0]">
                            <Footprints className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ef966e]" aria-hidden="true" />
                            <span className="text-xs sm:text-sm">{trek.difficulty}</span>
                          </div>
                          <div className="text-[#ef966e] font-bold text-base sm:text-lg">
                            ${trek.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="w-full bg-[#e47a4f] text-[#fff8ee] font-bold hover:bg-[#cf6943] py-3 sm:py-4 text-center transition-all duration-300 text-[10px] sm:text-xs tracking-[.14em] active:scale-[0.98]">
                          View Details
                        </div>
                      </CardContent>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop with arrow navigation */}
            <div className="hidden md:block relative mt-12">
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-8 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                <div className="flex gap-5 pr-8">
                  {popularTreks.map((trek, i) => (
                    <Link
                      key={trek.name}
                      href={trek.link}
                      className="flex-shrink-0 w-[400px]"
                    >
                      <div className="bg-[#173b3d] border border-[#55706e] overflow-hidden hover:border-[#ef966e] transition-all duration-300 rounded-lg">
                        <div className="relative h-72 overflow-hidden">
                          <Image
                            src={trek.image}
                            alt={`${trek.name} trek - popular Himalayan trekking route`}
                            fill
                            className="object-cover opacity-85"
                            sizes="400px"
                            quality={85}
                          />
                          <div className="absolute top-4 right-4 bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-sm font-bold flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" /> {trek.rating}
                          </div>
                        </div>
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-[#f7f2e9] mb-4">{trek.name}</h3>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-[#b9c9c0]">
                              <Clock className="w-4 h-4 text-[#ef966e]" aria-hidden="true" />
                              <span className="text-sm">{trek.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#b9c9c0]">
                              <Mountain className="w-4 h-4 text-[#ef966e]" aria-hidden="true" />
                              <span className="text-sm">{trek.maxAltitude}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#b9c9c0]">
                              <Footprints className="w-4 h-4 text-[#ef966e]" aria-hidden="true" />
                              <span className="text-sm">{trek.difficulty}</span>
                            </div>
                            <div className="text-[#ef966e] font-bold text-xl">
                              ${trek.price.toLocaleString()}
                            </div>
                          </div>
                          <div className="w-full bg-[#e47a4f] text-[#fff8ee] font-bold hover:bg-[#cf6943] py-4 text-center transition-all duration-300 text-xs tracking-[.14em]">
                            View Details
                          </div>
                        </CardContent>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From the Himalayan Journal */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Journal</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,5.4vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  From the <span className="text-[#cf6943]">Himalayan</span> Journal
                </h2>
              </div>
              <Link href="/blog" className="flex items-center gap-2 border-b border-[#cf6943] pb-1 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#cf6943] active:text-[#b85a38]">
                VIEW ALL <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
              </Link>
            </div>

            {/* 2 Featured Blog Post Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {featuredBlogs.map((blog, index) => (
                <Link href={`/blog/${blog.slug}`} key={index} className="active:scale-[0.99] transition-transform">
                  <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      <div className="relative h-48 sm:h-auto sm:min-h-[200px]">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover opacity-85"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                        />
                        {index === 0 && (
                          <span className="absolute top-3 left-3 bg-[#14383b]/90 text-[#f7f2e9] px-2 sm:px-2.5 py-1 sm:py-1.5 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 sm:col-span-2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[#66706d] mb-1.5 sm:mb-2">
                          <span className="flex items-center gap-0.5 sm:gap-1"><Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {blog.readTime}</span>
                          <span>•</span>
                          <span>{blog.date}</span>
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#14383b] mb-1.5 sm:mb-2 leading-snug line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="mt-2 sm:mt-3 text-[#cf6943] font-bold text-xs sm:text-sm inline-flex items-center hover:underline">
                          Read More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* YouTube & Instagram Horizontal Scrolls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-8">
              {/* YouTube */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded flex items-center justify-center">
                    <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-[#66706d] uppercase tracking-wider">YouTube Videos</h4>
                </div>
                <div className="overflow-hidden relative">
                  <div className="flex animate-infinite-scroll-youtube-home">
                    {[...youtubeVideos, ...youtubeVideos].map((video, i) => (
                      <div
                        key={`${video.url}-${i}`}
                        className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] mr-3 sm:mr-4 cursor-pointer active:scale-[0.97] transition-transform"
                        onClick={() => openVideoModal(video)}
                      >
                        <div className="bg-[#f7f2e9] rounded-lg overflow-hidden hover:shadow-md transition-all">
                          <div className="relative h-20 sm:h-24 md:h-28 overflow-hidden">
                            <Image
                              src={getYouTubeThumbnail(video.url)}
                              alt={video.title}
                              fill
                              className="object-cover"
                              sizes="180px"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-full flex items-center justify-center">
                                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white ml-0.5" fill="white" />
                              </div>
                            </div>
                          </div>
                          <div className="p-1.5 sm:p-2">
                            <p className="text-[10px] sm:text-xs font-medium text-[#14383b] line-clamp-1">{video.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] rounded flex items-center justify-center">
                    <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-[#66706d] uppercase tracking-wider">Instagram</h4>
                </div>
                <div className="overflow-hidden relative">
                  <div className="flex animate-infinite-scroll-instagram-home">
                    {[...instagramPosts, ...instagramPosts].map((post, i) => (
                      <div
                        key={`${post.url}-${i}`}
                        className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] mr-3 sm:mr-4 cursor-pointer active:scale-[0.97] transition-transform"
                        onClick={() => openInstagramPost(post.url)}
                      >
                        <div className="bg-[#f7f2e9] rounded-lg overflow-hidden hover:shadow-md transition-all border border-[#d8cec0]">
                          <div className="relative h-20 sm:h-24 md:h-28 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#833AB4]/5 via-[#FD1D1D]/5 to-[#F56040]/5">
                            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#833AB4]/40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                          </div>
                          <div className="p-1.5 sm:p-2">
                            <p className="text-[10px] sm:text-xs font-medium text-[#14383b] line-clamp-1">{post.title}</p>
                            <p className="text-[8px] sm:text-[10px] text-[#66706d] mt-0.5">{post.type === "reel" ? "📱 Reel" : "📷 Post"}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Modal - Mobile optimized */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102e31]/75 backdrop-blur-sm animate-in fade-in duration-200 p-2 sm:p-4"
            onClick={closeVideoModal}
          >
            <div 
              className="relative w-full max-w-5xl bg-[#f7f2e9] rounded-lg overflow-hidden shadow-2xl mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 sm:p-4 bg-[#14383b]">
                <h3 className="text-[#f7f2e9] font-bold text-sm sm:text-base md:text-lg truncate pr-2 sm:pr-4">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={closeVideoModal}
                  className="text-[#f7f2e9] hover:text-[#ef966e] transition-colors p-1 active:text-[#ef966e] touch-manipulation"
                  aria-label="Close video"
                >
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.url)}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
              <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[510px] overflow-hidden sm:min-h-[610px] order-2 lg:order-1">
                <Image
                  src="/images/used/why_choose_us.webp"
                  alt="Professional Himalayan expedition team - experienced guides and porters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">11<span className="text-xl sm:text-2xl">+</span></div>
                  <div className="mt-0.5 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">YEARS ON THESE TRAILS</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why choose us</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,5vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Local Knowledge, <span className="text-[#cf6943]">Global Standards</span>
                </h2>
                <p className="mt-4 sm:mt-7 max-w-[510px] text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#536461]">
                  Born in Gorkha, based in Kathmandu, we offer authentic Himalayan experiences with professional service.
                </p>
                <div className="mt-6 sm:mt-10 grid gap-5 sm:gap-7 border-t border-[#cbbcac] pt-5 sm:pt-7 sm:grid-cols-2">
                  {[
                    { icon: Users, title: 'Local Experts', text: 'Nepali guides with deep knowledge of trails, culture, and hidden gems.' },
                    { icon: MapPin, title: 'Authentic City Tours', text: "Pioneers of Kathmandu's Free Walking Tours, see the real Nepal beyond the guidebooks." },
                    { icon: ShieldCheck, title: 'Reliable & Safe', text: '24/7 support, experienced guides, and careful planning for peace of mind.' },
                    { icon: Heart, title: 'Community Focused', text: 'We support local families and sustainable tourism across Nepal, Bhutan, and Tibet.' },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-3 sm:gap-4">
                      <Icon size={18} className="sm:w-[20px] sm:h-[20px] mt-0.5 shrink-0 text-[#cf6943]" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-[#14383b]">{title}</h3>
                        <p className="mt-1 text-[11px] sm:text-xs leading-5 text-[#6b736d]">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Traveler Stories</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,5.4vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Real Travelers, <span className="text-[#cf6943]">Real Experiences</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                What guests say about their Everest Base Camp treks, Annapurna Circuit treks, and cultural journeys with us.
              </p>
            </div>

            {/* Horizontal Flow Animation for Mobile */}
            <div className="md:hidden overflow-hidden relative mt-8 sm:mt-12 py-3 sm:py-4">
              <div className="flex animate-infinite-scroll-slow-mobile">
                {infiniteTestimonials.map((testimonial, i) => (
                  <div
                    key={`${testimonial.name}-${i}`}
                    className="flex-shrink-0 w-[80vw] sm:w-[85vw] mr-4 sm:mr-6"
                  >
                    <div className="bg-[#f7f2e9] rounded-lg overflow-hidden border border-[#d8cec0] p-4 sm:p-5 md:p-6 h-full shadow-sm">
                      <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                      </div>
                      <p className="text-[#556363] italic mb-5 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <div className="font-bold text-base sm:text-lg text-[#14383b]">{testimonial.name}</div>
                        <div className="text-[#66706d] text-xs sm:text-sm flex items-center gap-1">
                          <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#cf6943]" aria-hidden="true" /> {testimonial.country}
                        </div>
                        <Link href={testimonial.trekLink}>
                          <span className="border border-[#cf6943]/50 text-[#cf6943] text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded w-fit hover:bg-[#cf6943]/10 active:bg-[#cf6943]/20 cursor-pointer transition-colors">
                            {testimonial.trek}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Flow Animation for Desktop */}
            <div className="hidden md:block overflow-hidden relative mt-12 py-8">
              <div className="flex animate-infinite-scroll-slow-desktop">
                {infiniteTestimonials.map((testimonial, i) => (
                  <div
                    key={`${testimonial.name}-${i}`}
                    className="flex-shrink-0 w-[400px] mr-8"
                  >
                    <div className="bg-[#f7f2e9] rounded-lg overflow-hidden border border-[#d8cec0] p-8 h-full shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                      </div>
                      <p className="text-[#556363] italic mb-8 leading-relaxed text-base">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <div className="flex flex-col gap-2">
                        <div className="font-bold text-lg text-[#14383b]">{testimonial.name}</div>
                        <div className="text-[#66706d] text-sm flex items-center gap-1">
                          <Globe className="w-3 h-3 text-[#cf6943]" aria-hidden="true" /> {testimonial.country}
                        </div>
                        <Link href={testimonial.trekLink}>
                          <span className="border border-[#cf6943]/50 text-[#cf6943] text-xs px-3 py-1 rounded w-fit font-medium hover:bg-[#cf6943]/10 cursor-pointer transition-colors">
                            {testimonial.trek}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TripAdvisor Section */}
            <div className="mt-8 sm:mt-12 bg-[#e4d8c8] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#14383b] mb-2 sm:mb-3">
                    See All Reviews on Tripadvisor
                  </h3>
                  <p className="text-sm sm:text-base text-[#556363] mb-3 sm:mb-4">
                    Join hundreds of satisfied travelers who've shared their experiences. 
                    Read detailed reviews, see more photos, and discover why we're rated so highly.
                  </p>
                  <a
                    href={tripadvisorUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded transition-all duration-300 text-[10px] sm:text-xs tracking-[.14em] active:scale-[0.98]"
                  >
                    <span>Visit Tripadvisor</span>
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </a>
                </div>
                
                <div className="lg:w-1/3 flex justify-center">
                  <a
                    href={tripadvisorUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block hover:scale-105 transition-transform duration-300 active:scale-95"
                  >
                    <div className="relative w-36 sm:w-44 md:w-48 h-36 sm:h-44 md:h-48 lg:h-56">
                      <Image
                        src="/images/TripAdvisor-Logo.png"
                        alt="Tripadvisor logo and reviews for Himkala Adventure"
                        fill
                        className="object-contain drop-shadow-lg"
                        unoptimized
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CSS for infinite scroll animations */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll-slow-mobile {
          display: flex;
          width: max-content;
          animation: infinite-scroll 150s linear infinite;
        }

        .animate-infinite-scroll-slow-desktop {
          display: flex;
          width: max-content;
          animation: infinite-scroll 150s linear infinite;
        }

        @keyframes infinite-scroll-youtube-home {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll-youtube-home {
          display: flex;
          width: max-content;
          animation: infinite-scroll-youtube-home 60s linear infinite;
        }

        .animate-infinite-scroll-youtube-home:hover {
          animation-play-state: paused;
        }

        @keyframes infinite-scroll-instagram-home {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll-instagram-home {
          display: flex;
          width: max-content;
          animation: infinite-scroll-instagram-home 60s linear infinite;
        }

        .animate-infinite-scroll-instagram-home:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation: fadeIn 0.2s ease-in;
        }

        /* Touch manipulation for mobile */
        .touch-manipulation {
          touch-action: manipulation;
        }

        /* Snap scrolling */
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}
