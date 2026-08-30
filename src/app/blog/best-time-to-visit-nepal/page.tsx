"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Copy,
  Check,
  ChevronRight,
  Quote,
  Camera,
  Menu,
  Heart,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
  excerpt: "From the rainbow blooms of spring to the crystal-clear skies of autumn, every season in Nepal offers something magical. But timing your visit right can mean the difference between watching Everest disappear behind clouds or standing beneath its glittering peak. Here's everything you need to know.",
  heroImage: "/images/used/historic-scenic-photography-nepal.webp",
  author: {
    name: "Sabinaya Dhakal",
  },
  date: "May 7, 2026",
  readTime: "9 min read",
  category: "Travel Guide",
  tags: ["Best Time to Visit", "Nepal Travel", "Seasons", "Trekking", "Weather", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "The Season Dilemma" },
  { id: "autumn", title: "Autumn: The Golden Season" },
  { id: "spring", title: "Spring: Blooming Beauty" },
  { id: "winter", title: "Winter: Solitude & Snow" },
  { id: "monsoon", title: "Monsoon: The Green Season" },
  { id: "month-guide", title: "Quick Month-by-Month Guide" },
  { id: "by-activity", title: "Best Seasons by Activity" },
  { id: "conclusion", title: "Finding Your Perfect Time" },
];

const relatedPosts = [
  {
    title: "Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers",
    image: "/images/used/solo-trek-blog-hero.webp",
    date: "August 7, 2026",
    readTime: "18 min",
    href: "/blog/solo-trekking-nepal-2026",
  },
  {
    title: "How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown",
    image: "/images/used/nepal-trek-cost-blog-hero.webp",
    date: "June 4, 2026",
    readTime: "16 min",
    href: "/blog/nepal-trek-cost-2026",
  },
  {
    title: "Everest Base Camp vs. Annapurna Base Camp: How To Decide Your Next Big Trek",
    image: "/images/used/ebc-vs-abc.webp",
    date: "May 26, 2026",
    readTime: "16 min",
    href: "/blog/everest-vs-annapurna-base-camp",
  },
];

export default function BlogPostPage() {
  const [copied, setCopied] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("introduction");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Schema.org BlogPosting structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    description: blogPost.excerpt,
    image: `https://www.himkalaadventure.com${blogPost.heroImage}`,
    datePublished: "2026-05-07",
    dateModified: "2026-05-07",
    author: {
      "@type": "Person",
      name: blogPost.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Himkala Adventure Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.himkalaadventure.com/images/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.himkalaadventure.com/blog/when-to-visit-nepal",
    },
    keywords:
      "Nepal travel, best time to visit Nepal, trekking seasons, Nepal weather, Himalayan trekking, cultural tours Nepal",
    articleSection: "Travel Guide",
    wordCount: "1500",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Page Header - Updated to match Free Walking Tour style */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[880px]">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                <span>{blogPost.category}</span>
              </div>
              <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                {blogPost.title}
              </h1>
            </div>
            <div className="max-w-full md:max-w-[280px]">
              <p className="text-sm leading-6 text-[#66706d]">
                {blogPost.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                  {blogPost.readTime}
                </span>
                <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                  {blogPost.date}
                </span>
              </div>
            </div>
          </div>

          {/* Author & Share - Clean row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-6 border-t border-[#d8cec0]/30">
            <div className="flex items-center gap-3 text-sm text-[#66706d]">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#d8cec0]/30 bg-[#e4d8c8] flex items-center justify-center">
                <User className="w-4 h-4 text-[#cf6943]" />
              </div>
              <span className="font-medium text-[#14383b]">{blogPost.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 rounded-full bg-[#e4d8c8] hover:bg-[#d8cec0] transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4 text-[#14383b]" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-[#e4d8c8] hover:bg-[#d8cec0] transition-colors"
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#cf6943]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#14383b]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents - Inline, clean */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-6 sm:py-8 border-b border-[#d8cec0]/30">
        <div className="mx-auto max-w-[880px]">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-xs font-semibold text-[#66706d] uppercase tracking-wider flex items-center gap-2">
                <Menu className="w-4 h-4 text-[#cf6943]" /> Table of Contents
              </span>
              <ChevronDown className="w-4 h-4 text-[#66706d] group-open:rotate-180 transition-transform" />
            </summary>
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 mt-3 sm:mt-4">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-xs sm:text-sm py-2 px-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-[#e47a4f]/20 text-[#14383b] font-medium"
                      : "text-[#556363] hover:bg-[#e4d8c8] hover:text-[#cf6943]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </details>
        </div>
      </section>

      {/* Main Content - Full width, no sidebar */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[880px]">
          <article className="prose prose-sm sm:prose-base prose-slate prose-headings:font-serif prose-headings:text-[#14383b] prose-a:text-[#cf6943] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#14383b] prose-headings:tracking-[-.02em] prose-headings:leading-tight max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-6 sm:mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-lg text-[#556363] leading-relaxed mb-3 sm:mb-4 first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-[#14383b] first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-0.5 sm:first-letter:mt-1">
                Ask ten different travelers about the best time to visit Nepal, and you might get ten different answers. The trekker who summited Kala Patthar in November will swear by autumn's crystal skies. The photographer who captured rhododendron forests ablaze with color will insist spring is unmatched. And the budget traveler who had entire tea houses to themselves in February? They'll tell you winter's secret magic is worth the chill.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The truth is, Nepal doesn't have one "best" time. It has four distinct seasons, each offering a completely different version of this Himalayan nation. The question isn't "When should you visit Nepal?" but rather "What kind of Nepal experience are you seeking?"
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                In this comprehensive guide, we'll walk you through every season, so you can time your visit perfectly. Whether you're dreaming of Everest views, cultural festivals, wildlife safaris, or peaceful monastery stays, there's a perfect window waiting for you. Let's find it together.
              </p>
            </section>

            {/* Image Break - Floating right */}
            <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
              <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="/images/used/when-to-visit-nepal-1.webp"
                  alt="Breathtaking Himalayan mountain views in the Everest region during December"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                  <Camera className="w-2.5 h-2.5" /> Everest region in December
                </div>
              </div>
            </div>

            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              This guide breaks down each season with honest advice, insider tips, and practical recommendations for what to expect. We'll cover the best times for different activities, the hidden gems of each season, and the practical considerations that can make or break your journey. By the end, you'll have a clear picture of when to plan your Nepal adventure.
            </p>

            <div className="clear-both"></div>

            {/* Autumn Season */}
            <section id="autumn" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Autumn (September - November): The Golden Season
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/abc-3.webp"
                    alt="Crystal clear autumn views of the Himalayas in Nepal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5" /> Crystal clear Himalayan views in autumn
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                If there's a consensus "best" season in Nepal, autumn takes the crown and for very good reason. The monsoon rains have just departed, washing the dust from the air and leaving behind impossibly clear skies. The mountains, often hidden behind haze or clouds for much of the year, emerge in breathtaking clarity.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                This is also festival season. Dashain and Tihar, Nepal's biggest celebrations, fill the streets with music, lights, and joy. The weather is mild and stable which is perfect for trekking, sightseeing, or simply sitting at a café watching the world go by.
              </p>
              <div className="clear-both"></div>
              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                <div className="flex gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                  <p className="text-[#556363] text-xs sm:text-sm italic leading-relaxed">
                    <span className="font-bold text-[#14383b]">Pro Tip:</span> October is the absolute sweet spot. The trails have dried out, the temperatures are perfect, and the festival season brings an extra layer of cultural magic to your journey.
                  </p>
                </div>
              </div>
            </section>

            {/* Spring Season */}
            <section id="spring" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Spring (March - May): Blooming Beauty
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/manaslu-4.webp"
                    alt="Clear view of a lake from Manaslu during spring"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5" /> Clear view from Manaslu during spring
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Spring in Nepal is nature's grand unveiling. After the cooler winter months, the hillsides explode into color as rhododendrons; Nepal's national flower those bloom in brilliant reds, pinks, and whites. The weather warms gradually, and the days grow longer, making it the second-most popular trekking season after autumn.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                For mountaineers, spring is the climbing season. This is when Everest expeditions begin, and the Khumbu region buzzes with an energy unlike any other time of year. Even if you're not summiting, watching the preparations and meeting climbers from around the world adds a unique dimension to your trek.
              </p>

              <div className="clear-both"></div>
            </section>

            {/* Winter Season */}
            <section id="winter" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Winter (December - February): Solitude & Snow
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/mardi-himal-1.webp"
                    alt="Snow-covered trails and peaceful winter trekking in Nepal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5" /> Snow-covered trails in winter
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Winter is Nepal's best-kept secret. While most travelers assume the country shuts down, the truth is far more interesting. Yes, it's cold, especially at higher elevations but the skies are often shockingly clear, the crowds vanish, and you might find yourself the only guest in a tea house with the world's best view.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                For budget travelers and solitude seekers, winter offers incredible value. Flight prices drop, accommodations negotiate, and the trails feel like they belong to you alone. The key is choosing your destination wisely: stick to lower elevations (Pokhara, Chitwan, Lumbini) or prepare properly for high-altitude treks.
              </p>

              <div className="clear-both"></div>
            </section>

            {/* Monsoon Season */}
            <section id="monsoon" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Summer/Monsoon (June - August): The Green Season
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/hiking-1.webp"
                    alt="Lush green landscapes during monsoon season in Nepal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5" /> Lush green landscapes during monsoon
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Monsoon is Nepal's most misunderstood season. While many guidebooks tell you to avoid it entirely, savvy travelers know that monsoon offers unique rewards if you know where to go and what to expect. The landscapes transform into a lush, vibrant green that you won't see any other time of year.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The key to enjoying monsoon is staying in rain-shadow areas like Upper Mustang (which receives almost no rain) or focusing on cultural tours in Kathmandu and Pokhara valleys. The north side of the Annapurna circuit, including Manang, also stays relatively dry. And the best part? You'll have entire sights almost to yourself.
              </p>

              <div className="clear-both"></div>
            </section>

            {/* Quick Month Guide */}
            <section id="month-guide" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Quick Month-by-Month Guide
              </h2>

              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    title: "March-April",
                    desc: "Rhododendrons in full bloom. Perfect trekking weather. Holi festival.",
                  },
                  {
                    title: "October-November",
                    desc: "Crystal clear mountain views. Dashain and Tihar festivals. Peak season.",
                  },
                  {
                    title: "December-February",
                    desc: "Solitude on the trails. Clear skies but cold. Best for budget travelers.",
                  },
                  {
                    title: "June-August",
                    desc: "Lush green landscapes. Upper Mustang stays dry. Lowest prices of the year.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#14383b] text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-[#556363] text-xs sm:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-4 sm:mt-5">
                <div className="flex gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                  <p className="text-[#556363] text-xs sm:text-sm italic leading-relaxed">
                    <span className="font-bold text-[#14383b]">Insider Tip:</span> If you want the perfect balance of good weather and fewer crowds, try late September or early November. You'll catch the tail end of the monsoon freshness or the beginning of winter's clarity without the October rush.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Seasons by Activity */}
            <section id="by-activity" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Best Seasons by Activity
              </h2>

              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    title: "🏔️ High-Altitude Trekking",
                    desc: "Best during October-November or March-April for clear skies and stable weather.",
                  },
                  {
                    title: "🐘 Wildlife Safari",
                    desc: "Best during October-March when animals gather near water sources.",
                  },
                  {
                    title: "🏛️ Cultural Tours",
                    desc: "Best during September-November or March-May for pleasant walking weather.",
                  },
                  {
                    title: "💰 Budget Travel",
                    desc: "Best during December-February or June-August for lower prices.",
                  },
                  {
                    title: "🎉 Festival Experiences",
                    desc: "Best during October for Dashain and Tihar, Nepal's biggest celebrations.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#14383b] text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-[#556363] text-xs sm:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote Block */}
            <div className="bg-[#14383b] rounded-lg p-5 sm:p-6 md:p-8 my-6 sm:my-8 md:my-12 relative overflow-hidden border border-[#f7f2e9]/20">
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 opacity-20">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#f0a17f]" />
              </div>
              <blockquote className="relative z-10">
                <p className="text-sm sm:text-base md:text-lg font-serif text-[#f7f2e9] leading-relaxed mb-3 sm:mb-4 italic">
                  &quot;I've led treks in every season, and here's what I tell my guests: there's no bad time to come to Nepal, only different times for different dreams. October gives you postcards. February gives you the mountains to yourself. July gives you the deepest green you've ever seen. The question is never 'if' you should come. It's 'which Nepal' you want to meet.&quot;
                </p>
                <footer className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#f0a17f] flex items-center justify-center bg-[#f7f2e9]/10">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#f0a17f]" />
                  </div>
                  <div>
                    <cite className="font-bold text-[#f0a17f] not-italic text-xs sm:text-sm md:text-base">
                      Sabinaya Dhakal
                    </cite>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Conclusion */}
            <section id="conclusion" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Finding Your Perfect Time
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                After reading this guide, you might feel overwhelmed by choices. That's understandable. Nepal truly offers something special in every season. Here's how to decide:
              </p>
              <div className="bg-[#e4d8c8] rounded-lg p-4 sm:p-5 mb-3 sm:mb-4">
                <p className="text-[#14383b] font-medium text-sm sm:text-base mb-2">
                  Ask yourself these questions:
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#556363]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943] mt-0.5 shrink-0" />
                    Do you want guaranteed clear mountain views? →{" "}
                    <span className="font-medium text-[#14383b]">Autumn (October-November)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943] mt-0.5 shrink-0" />
                    Do you dream of blooming rhododendron forests? →{" "}
                    <span className="font-medium text-[#14383b]">Spring (March-April)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943] mt-0.5 shrink-0" />
                    Is solitude and budget your priority? →{" "}
                    <span className="font-medium text-[#14383b]">Winter (December-February)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943] mt-0.5 shrink-0" />
                    Do you love lush landscapes and don't mind rain? →{" "}
                    <span className="font-medium text-[#14383b]">Monsoon (June-August) with a rain-shadow trek</span>
                  </li>
                </ul>
              </div>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Ultimately, the best time to visit Nepal is whenever you can make it happen. The mountains wait. The temples stand patient. And whichever season you choose, Nepal will welcome you with warmth that has nothing to do with the weather.
              </p>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
              {blogPost.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-[#d8cec0] text-[#556363] hover:bg-[#e4d8c8] cursor-pointer rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </article>

          {/* Share Section - Bottom of article */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[#d8cec0]/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-[#66706d]">Enjoyed this article? Share it with fellow adventurers.</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3.5 h-3.5 mr-1.5" /> Share
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#d8cec0] text-[#14383b] hover:bg-[#e4d8c8] rounded-lg"
                  onClick={handleCopyLink}
                >
                  {copied ? <Check className="w-3.5 h-3.5 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[880px]">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
            <div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                Continue Your Journey
              </div>
              <h2 className="mt-2 sm:mt-3 font-serif text-[clamp(1.8rem,4vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                More Insights <span className="text-[#cf6943]">from Us</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 border-b border-[#cf6943] pb-1 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#cf6943]"
            >
              VIEW ALL <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {relatedPosts.map((post, i) => (
              <Link href={post.href} key={i} className="block">
                <div className="group bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg h-full">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                      quality={70}
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#14383b] mb-2 leading-snug line-clamp-2 group-hover:text-[#cf6943] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-[#556363]">
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-0.5 sm:gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}