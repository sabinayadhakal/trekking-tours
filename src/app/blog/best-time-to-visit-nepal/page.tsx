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
  Tag,
  ChevronRight,
  Quote,
  Camera,
  Menu,
  X,
  Heart,
  Sparkles,
  MoveUpRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  const [showMobileTOC, setShowMobileTOC] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
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
    setShowMobileTOC(false);
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
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Mobile Table of Contents Drawer */}
      {showMobileTOC && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileTOC(false)}
            aria-label="Close table of contents"
          />
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#f7f2e9] shadow-xl">
            <div className="p-5 sm:p-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <h3 className="font-bold text-base sm:text-lg text-[#14383b] flex items-center gap-2">
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943]" /> Contents
                </h3>
                <button
                  onClick={() => setShowMobileTOC(false)}
                  className="p-2 rounded-lg hover:bg-[#e4d8c8] active:bg-[#e4d8c8] touch-manipulation"
                  aria-label="Close table of contents"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <nav className="space-y-1 sm:space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all touch-manipulation ${
                      activeSection === item.id
                        ? "bg-[#e47a4f]/20 text-[#14383b] font-medium"
                        : "text-[#556363] hover:bg-[#e4d8c8] hover:text-[#cf6943] active:bg-[#e4d8c8]"
                    }`}
                    aria-current={activeSection === item.id ? "location" : undefined}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#d8cec0]">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white active:scale-[0.98] transition-transform"
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#14383b] hover:bg-[#0d2427] text-[#f7f2e9] active:scale-[0.98] transition-transform"
                    onClick={handleCopyLink}
                    aria-label="Copy link to article"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header - Dark theme matching main page */}
      <section className="bg-[#0d2427] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden border-b border-[#f7f2e9]/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#e47a4f] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#f0a17f] rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1220px] relative z-10">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                <div className="h-px w-6 sm:w-9 bg-[#e47a4f]" />
                <span className="text-[9px] sm:text-xs font-semibold tracking-[.08em] text-[#f0a17f]">
                  {blogPost.category}
                </span>
              </div>

              <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#f7f2e9]">
                {blogPost.title}
              </h1>
            </div>
            <p className="max-w-full md:max-w-[380px] text-sm leading-6 text-[#f7f2e9]/70">
              {blogPost.excerpt}
            </p>
          </div>

          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-[#f7f2e9]/70">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#f0a17f]/30 bg-[#f7f2e9]/10 flex items-center justify-center">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0a17f]" />
              </div>
              <span className="font-medium text-[#f7f2e9]">{blogPost.author.name}</span>
            </div>
            <span className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f0a17f]" />
              <span>{blogPost.date}</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-1.5">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f0a17f]" />
              {blogPost.readTime}
            </span>
            {/* Mobile TOC Trigger */}
            <button
              onClick={() => setShowMobileTOC(true)}
              className="lg:hidden inline-flex items-center gap-1.5 text-[#f0a17f] hover:text-[#f7f2e9] text-xs font-medium active:text-[#f7f2e9] transition-colors"
            >
              <Menu className="w-3.5 h-3.5" /> Contents
            </button>
          </div>

          {/* Share buttons - header */}
          <div className="flex items-center gap-2 mt-4 sm:mt-5">
            <button
              onClick={() => handleShare("facebook")}
              className="p-1.5 sm:p-2 rounded-full bg-[#f7f2e9]/10 hover:bg-[#f7f2e9]/20 transition-colors active:bg-[#f7f2e9]/30 touch-manipulation"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f7f2e9]" />
            </button>
            <button
              onClick={handleCopyLink}
              className="p-1.5 sm:p-2 rounded-full bg-[#f7f2e9]/10 hover:bg-[#f7f2e9]/20 transition-colors active:bg-[#f7f2e9]/30 touch-manipulation"
              aria-label="Copy link"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0a17f]" />
              ) : (
                <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f7f2e9]" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Article Content - Left side */}
            <article className="lg:col-span-9 overflow-x-hidden">
              <div className="max-w-full prose prose-sm sm:prose-base prose-slate prose-headings:font-serif prose-headings:text-[#14383b] prose-a:text-[#cf6943] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#14383b] prose-headings:tracking-[-.02em] prose-headings:leading-tight">
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
                      className="border-[#d8cec0] text-[#556363] hover:bg-[#e4d8c8] active:bg-[#e4d8c8] cursor-pointer rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar - Table of Contents (Desktop only) - STICKY */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-5 sm:space-y-6">
                <div className="bg-[#f7f2e9] border border-[#d8cec0]/50 rounded-lg p-5 sm:p-6">
                  <h2 className="font-serif text-lg font-bold text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2">
                    <Menu className="w-4 h-4 text-[#cf6943]" /> Contents
                  </h2>
                  <nav className="space-y-1 sm:space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left text-xs sm:text-sm py-2 px-3 rounded-lg transition-all touch-manipulation ${
                          activeSection === item.id
                            ? "bg-[#e47a4f]/20 text-[#14383b] font-medium"
                            : "text-[#556363] hover:bg-[#e4d8c8] hover:text-[#cf6943]"
                        }`}
                        aria-current={activeSection === item.id ? "location" : undefined}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Share Article Card */}
                <div className="bg-gradient-to-br from-[#0d2427] to-[#14383b] border-none rounded-lg p-5 sm:p-6">
                  <h3 className="font-bold text-[#f7f2e9] mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <Share2 className="w-4 h-4 text-[#f0a17f]" /> Share Article
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg active:scale-[0.98] transition-transform"
                      onClick={() => handleShare("facebook")}
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#f7f2e9]/10 hover:bg-[#f7f2e9]/20 text-[#f7f2e9] rounded-lg active:scale-[0.98] transition-transform"
                      onClick={handleCopyLink}
                      aria-label="Copy link to article"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </Button>
                  </div>
                </div>

                {/* Himkala Adventure Callout */}
                <div className="bg-gradient-to-br from-[#e47a4f]/20 to-[#cf6943]/20 border border-[#e47a4f]/30 rounded-lg p-5 sm:p-6 text-center">
                  <Mountain className="w-7 h-7 sm:w-8 sm:h-8 text-[#cf6943] mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-serif text-base font-bold text-[#14383b] mb-1 sm:mb-2">
                    Plan Your Perfect Trip
                  </h3>
                  <p className="text-[#556363] text-xs sm:text-sm mb-3 sm:mb-4">
                    Let Himkala Adventure help you choose the best season for your dream Nepal experience.
                  </p>
                  <Link href="/services/day-sightseeings" className="block">
                    <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] w-full rounded-none text-xs sm:text-sm active:scale-[0.98] transition-transform">
                      Plan My Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
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
              className="flex items-center gap-2 border-b border-[#cf6943] pb-1 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#cf6943] active:text-[#b85a38]"
            >
              VIEW ALL <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {relatedPosts.map((post, i) => (
              <Link href={post.href} key={i} className="block active:scale-[0.99] transition-transform">
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

      <style jsx global>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
}