"use client";

import * as React from "react";
import Head from "next/head";
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
  Menu,
  X,
  Heart,
  MoveUpRight,
  BookOpen,
  Compass,
  Footprints,
  Shield,
  DollarSign,
  Info,
  AlertTriangle,
  FileCheck,
  Users,
  CheckCircle2,
  UserRound,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers",
  excerpt: "Solo trekking in Nepal is now legal again and safer than ever. From the best treks for solo travelers to permits, costs, and safety tips, here's everything you need to know to plan your solo Himalayan adventure in 2026.",
  heroImage: "/images/used/solo-trek-blog-hero.webp",
  author: {
    name: "Sabinaya Dhakal",
  },
  date: "August 7, 2026",
  readTime: "8 min read",
  category: "Trekking Guide",
  tags: ["Solo Trekking Nepal", "Independent Trekking", "Nepal Trek 2026", "Solo Travel Nepal", "Trekking Guide", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "Why Solo Trekking in Nepal?" },
  { id: "whats-changed", title: "What Changed in 2026?" },
  { id: "best-treks", title: "Best Treks for Solo Travelers" },
  { id: "safety-tips", title: "Essential Safety Tips" },
  { id: "permits-costs", title: "Permits & Costs" },
  { id: "packing-guide", title: "Packing for Solo Trekking" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const relatedPosts = [
  {
    title: "Everest Base Camp vs. Annapurna Base Camp: How To Decide Your Next Big Trek",
    image: "/images/used/ebc-vs-abc.webp",
    date: "May 26, 2026",
    readTime: "16 min",
    href: "/blog/everest-vs-annapurna-base-camp",
  },
  {
    title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
    image: "/images/used/historic-scenic-photography-nepal.webp",
    date: "May 7, 2026",
    readTime: "9 min",
    href: "/blog/best-time-to-visit-nepal",
  },
  {
    title: "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
    image: "/images/used/nagarkot-changu.webp",
    date: "May 24, 2026",
    readTime: "14 min",
    href: "/blog/best-beginner-treks-nepal",
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
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
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
      "@id": "https://www.himkalaadventure.com/blog/solo-trekking-nepal-2026",
    },
    keywords:
      "solo trekking Nepal, independent trekking, Nepal trek 2026, solo travel Nepal, trekking guide Nepal",
    articleSection: "Trekking Guide",
    about: {
      "@type": "Thing",
      name: "Solo Trekking in Nepal",
    },
  };

  return (
    <>
      <Head>
        <title>Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers</title>
        <meta name="description" content="Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/solo-trekking-nepal-2026" />
        <meta property="og:title" content="Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers" />
        <meta property="og:description" content="Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/solo-trek-blog-hero.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog/solo-trekking-nepal-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers" />
        <meta name="twitter:description" content="Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/solo-trek-blog-hero.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
                      Solo trekking in Nepal has always been on the bucket list for independent travelers. And in 2026, it's finally back on the table legally and safely.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      After a brief period of mandatory guide requirements, Nepal has lifted the blanket restriction. Solo trekkers are now welcome on most popular routes, provided they follow the updated guidelines and obtain the correct permits.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Whether you're dreaming of the Everest Base Camp, the Annapurna Circuit, or the quiet trails of Langtang and Manaslu, this guide covers everything you need to know from the new 2026 rules to safety tips, costs, and packing essentials.
                    </p>
                    <div className="bg-[#e4d8c8] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mt-4 sm:mt-5">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          <span className="font-bold text-[#14383b]">Good News for 2026:</span> Solo trekkers can now trek independently on most routes, including Everest Base Camp, Annapurna Circuit, Langtang Valley, and Manaslu Circuit. No guide is required by law for these routes as of March 2026.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* What Changed in 2026 */}
                  <section id="whats-changed" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      What Changed in 2026?
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/gokyo-2.webp"
                          alt="Solo trekker in the Himalayas with mountain views"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Solo trekker enjoying the Himalayas
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      In early 2026, the Nepal Tourism Board and the Department of Tourism made a significant policy shift. The mandatory guide requirement introduced during the pandemic was lifted for most popular trekking routes.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      This means you can now trek independently again. But there are new requirements you need to know:
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-[#556363] text-xs sm:text-sm leading-relaxed list-disc pl-4 sm:pl-5 md:pl-6">
                      <li><span className="font-medium text-[#14383b]">TIMS Card is Still Required:</span> The Trekkers' Information Management System (TIMS) card is still mandatory for all trekkers.</li>
                      <li><span className="font-medium text-[#14383b]">National Park Permits:</span> You still need permits for each national park (Sagarmatha, Annapurna, Langtang, Manaslu).</li>
                      <li><span className="font-medium text-[#14383b]">Restricted Areas:</span> Treks in restricted areas like Upper Mustang, Nar Phu, and Manaslu still require a licensed guide and special permits.</li>
                      <li><span className="font-medium text-[#14383b]">Insurance:</span> Travel insurance covering helicopter evacuation up to 6,000m is now mandatory (and always recommended).</li>
                      <li><span className="font-medium text-[#14383b]">Check-in System:</span> You must register your trekking route and check in at checkpoints along the way.</li>
                    </ul>

                    <div className="clear-both"></div>
                  </section>

                  {/* Best Treks for Solo Travelers */}
                  <section id="best-treks" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Best Treks for Solo Travelers
                    </h2>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Not all treks are equally suited for solo travelers. Here are the best options for 2026, based on safety, infrastructure, ease of navigation, and solo-friendly teahouses.
                    </p>

                    <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                      <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#14383b] rounded-full flex items-center justify-center text-[#f7f2e9] font-bold text-[10px] sm:text-xs md:text-sm">1</div>
                          <h3 className="text-base sm:text-lg font-bold text-[#14383b]">Everest Base Camp</h3>
                        </div>
                        <p className="text-[#556363] text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                          The classic. Well-established teahouse network, clearly marked trails, and plenty of fellow trekkers. Perfect for solo travelers who want a social experience.
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">14 Days</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">5,364m</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">$1,520 with guide</Badge>
                          <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                        </div>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#14383b] rounded-full flex items-center justify-center text-[#f7f2e9] font-bold text-[10px] sm:text-xs md:text-sm">2</div>
                          <h3 className="text-base sm:text-lg font-bold text-[#14383b]">Annapurna Circuit</h3>
                        </div>
                        <p className="text-[#556363] text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                          Diverse landscapes, rich culture, and iconic Thorong La Pass. Excellent teahouses and a well-worn path make this a classic solo trek.
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">9-18 Days</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">5,416m</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">$800 with guide</Badge>
                          <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                        </div>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#14383b] rounded-full flex items-center justify-center text-[#f7f2e9] font-bold text-[10px] sm:text-xs md:text-sm">3</div>
                          <h3 className="text-base sm:text-lg font-bold text-[#14383b]">Langtang Valley</h3>
                        </div>
                        <p className="text-[#556363] text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                          Close to Kathmandu, less crowded, and incredibly scenic. Langtang is perfect for solo trekkers who want a quieter, more intimate experience.
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">8 Days</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">4,984m</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">$650 with guide</Badge>
                          <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                        </div>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#14383b] rounded-full flex items-center justify-center text-[#f7f2e9] font-bold text-[10px] sm:text-xs md:text-sm">4</div>
                          <h3 className="text-base sm:text-lg font-bold text-[#14383b]">Ghorepani Poon Hill</h3>
                        </div>
                        <p className="text-[#556363] text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                          The perfect short trek for first-time solo trekkers. Stunning sunrise views over Annapurna and Dhaulagiri. Easy terrain and excellent teahouses.
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">6 Days</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">3,210m</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">$500 with guide</Badge>
                          <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                        </div>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#14383b] rounded-full flex items-center justify-center text-[#f7f2e9] font-bold text-[10px] sm:text-xs md:text-sm">5</div>
                          <h3 className="text-base sm:text-lg font-bold text-[#14383b]">Manaslu Circuit</h3>
                        </div>
                        <p className="text-[#556363] text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                          Remote, pristine, and culturally rich. Manaslu offers an off-the-beaten-path experience. <span className="font-semibold text-[#cf6943]">Note: A licensed guide is required for Manaslu.</span>
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">12 Days</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">5,106m</Badge>
                          <Badge className="bg-[#14383b]/10 text-[#14383b] border-none">$1,200 with guide</Badge>
                          <Badge className="bg-amber-100 text-amber-700 border-none">Guide Required</Badge>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Safety Tips */}
                  <section id="safety-tips" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Essential Safety Tips for Solo Trekkers
                    </h2>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Solo trekking is rewarding but requires extra preparation. Here's how to stay safe:
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30 flex items-start gap-2 sm:gap-3">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#14383b] text-xs sm:text-sm">1. Acclimatize Properly</h4>
                          <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">Acute Mountain Sickness (AMS) is real. Don't rush. Follow the golden rule: climb high, sleep low. Plan rest days into your itinerary.</p>
                        </div>
                      </div>
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30 flex items-start gap-2 sm:gap-3">
                        <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#14383b] text-xs sm:text-sm">2. Register Your Trek</h4>
                          <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">Register your route with the TIMS office and check in at checkpoints. Let someone know your itinerary and expected return date.</p>
                        </div>
                      </div>
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30 flex items-start gap-2 sm:gap-3">
                        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#14383b] text-xs sm:text-sm">3. Emergency Communication</h4>
                          <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">Carry a local SIM card with data. Emergency helicopter evacuation is available but expensive. Make sure your insurance covers it.</p>
                        </div>
                      </div>
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30 flex items-start gap-2 sm:gap-3">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#14383b] text-xs sm:text-sm">4. Trek in Peak Seasons</h4>
                          <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">Trekking in March-May or October-November means more fellow trekkers on the trail. This is safer for solo travelers.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Permits & Costs */}
                  <section id="permits-costs" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Permits & Costs for Solo Trekkers
                    </h2>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Here's what you'll need to budget for permits and logistics:
                    </p>

                    <div className="w-full overflow-x-auto">
                      <div className="min-w-[280px] w-full">
                        <table className="w-full text-xs sm:text-sm border-collapse">
                          <thead>
                            <tr className="bg-[#14383b] text-[#f7f2e9]">
                              <th className="p-2 sm:p-3 text-left rounded-l-lg">Item</th>
                              <th className="p-2 sm:p-3 text-left">Cost (NPR)</th>
                              <th className="p-2 sm:p-3 text-left rounded-r-lg">Cost (USD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">TIMS Card</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 1,000-2,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$10-20</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Sagarmatha National Park Permit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 3,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$23</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Annapurna Conservation Area Permit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 3,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$23</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Langtang National Park Permit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 3,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$23</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Manaslu Restricted Area Permit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 7,000+</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$50+</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Lukla Flight (Round Trip)</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 40,000-55,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$300-400</td>
                            </tr>
                            <tr className="hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Travel Insurance (11 days)</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 6,500-10,500</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$50-80</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                      <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                        <span className="font-semibold text-[#14383b]">Total Solo Trek Cost:</span> A 10-day solo trek in Nepal costs approximately <span className="font-bold text-[#cf6943]">$800-1,500</span> including permits, transport, accommodation, food, and incidentals. Treks with guides cost more but include more services and peace of mind.
                      </p>
                    </div>
                  </section>

                  {/* Packing Guide */}
                  <section id="packing-guide" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Packing for Solo Trekking
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30">
                        <h4 className="font-bold text-[#14383b] text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" /> Essential Gear
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-[#556363]">
                          {[
                            "Trekking boots (broken in)",
                            "Down jacket & fleece",
                            "Waterproof jacket & pants",
                            "Trekking pants (2 pairs)",
                            "Base layers (thermal)",
                            "Sleeping bag (-10°C rating)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30">
                        <h4 className="font-bold text-[#14383b] text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#cf6943]" /> Solo Essentials
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-[#556363]">
                          {[
                            "Local SIM card (Ncell or NTC)",
                            "Power bank (20,000mAh+)",
                            "Water purification tablets",
                            "First aid kit (with altitude meds)",
                            "Head torch (with spare batteries)",
                            "Trekking poles (recommended)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#cf6943] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* FAQ Section */}
                  <section id="faq" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Is solo trekking in Nepal legal in 2026?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Yes. The mandatory guide requirement was lifted in March 2026. Solo trekkers can trek independently on most routes, including Everest Base Camp, Annapurna Circuit, Langtang Valley, and others. Restricted areas like Upper Mustang, Nar Phu, and Manaslu still require a licensed guide.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">What permits do I need for solo trekking?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          You need a TIMS card and national park permits specific to the region (Sagarmatha National Park for EBC, Annapurna Conservation Area for ACAP, Langtang National Park, etc.). For restricted areas like Manaslu, you need special permits.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Is it safe to trek solo in Nepal?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Yes, with proper preparation. Stick to popular routes, register your trek, carry a local SIM card, and check in at checkpoints. Trekking in peak seasons (March-May, October-November) means more fellow trekkers on the trail, which is safer.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">How much does a solo trek cost in Nepal?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          A 10-day solo trek costs approximately $800-1,500 including permits, transport, accommodation, food, and incidentals. Add $300-400 for Lukla flights if trekking to Everest Base Camp.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Do I need a guide for solo trekking?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          No, it's not legally required on most routes. However, hiring a guide can enhance your experience, improve safety, and provide cultural insights. Himkala Adventure offers optional guides for solo trekkers who want extra support.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
                      <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/gokyo-2.webp"
                          alt="Solo trekker in the Everest Three Passes trek"
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={70}
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                        />
                      </div>
                      <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/mardi-3.webp"
                          alt="Solo trekking in Nepal Himalayas at sunrise"
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={70}
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                        />
                      </div>
                    </div>
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
                      <BookOpen className="w-4 h-4 text-[#cf6943]" /> Contents
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
                      Ready for Your Solo Trek?
                    </h3>
                    <p className="text-[#556363] text-xs sm:text-sm mb-3 sm:mb-4">
                      Himkala Adventure offers guided solo treks with experienced local guides. Safe. Reliable. Unforgettable.
                    </p>
                    <Link href="/services/trekking" className="block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] w-full rounded-none text-xs sm:text-sm active:scale-[0.98] transition-transform">
                        Explore Treks
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
    </>
  );
}