"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mountain,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Copy,
  Check,
  Tag,
  ChevronRight,
  Quote,
  MapPin,
  Camera,
  AlertTriangle,
  Lightbulb,
  Menu,
  X,
  Heart,
  Globe,
  Shield,
  Bird,
  Landmark,
  Droplets,
  Sparkles,
  TrendingUp,
  DollarSign,
  Wallet,
  Calculator,
  PiggyBank,
  UserRound,
  Compass,
  Footprints,
  ShieldCheck,
  Sun,
  Cloud,
  Wind,
  Award,
  Users,
  CheckCircle2,
  Route,
  Info,
  Timer,
  FileCheck,
  BookOpen,
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
    avatar: "/placeholder.svg?text=SD",
    linkedin: "https://www.linkedin.com/in/sabinaya-dhakal-7b2a83289"
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
  {
    title: "How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown",
    image: "/images/used/nepal-trek-cost-blog-hero.webp",
    date: "June 4, 2026",
    readTime: "16 min",
    href: "/blog/nepal-trek-cost-2026",
  },
  {
    title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
    image: "/images/used/dog-pigeons.webp",
    date: "May 9, 2026",
    readTime: "9 min",
    href: "/blog/pigeons-symbol-peace-nepal",
  },
  {
    title: "Tilicho Lake: The Sacred Himalayan Lake of Legends, Faith, and Adventure",
    image: "/images/used/tilicho-blog.webp",
    date: "May 20, 2026",
    readTime: "12 min",
    href: "/blog/tilicho-lake-sacred-trek",
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
    const title = encodeURIComponent(blogPost.title);
    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
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
        behavior: "smooth"
      });
    }
    setShowMobileTOC(false);
  };

  return (
    <>
      <Head>
        <title>Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers</title>
        <meta name="description" content="Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/solo-trekking-nepal-2026" />

        <meta property="og:title" content="Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers" />
        <meta property="og:description" content="Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog/solo-trekking-nepal-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta property="article:published_time" content="2026-08-07" />
        <meta property="article:author" content="Sabinaya Dhakal" />
        <meta property="article:tag" content="Solo Trekking Nepal" />
        <meta property="article:tag" content="Independent Trekking" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers" />
        <meta name="twitter:description" content="Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Solo Trekking in Nepal: Complete 2026 Guide for Independent Travelers",
              "description": "Solo trekking in Nepal is legal again. Complete 2026 guide covering best treks, permits, costs, safety tips, and everything you need for a solo Himalayan adventure.",
              "image": "https://www.himkalaadventure.com/images/used/manaslu-main-page.webp",
              "datePublished": "2026-08-07",
              "dateModified": "2026-08-07",
              "author": {
                "@type": "Person",
                "name": "Sabinaya Dhakal",
                "url": "https://www.linkedin.com/in/sabinaya-dhakal-7b2a83289"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Himkala Adventure Pvt. Ltd.",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.himkalaadventure.com/images/logo.webp"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.himkalaadventure.com/blog/solo-trekking-nepal-2026"
              },
              "keywords": "solo trekking Nepal, independent trekking, Nepal trek 2026, solo travel Nepal, trekking guide Nepal",
              "articleSection": "Trekking Guide",
              "about": {
                "@type": "Thing",
                "name": "Solo Trekking in Nepal"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Mobile Table of Contents Drawer */}
        {showMobileTOC && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobileTOC(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl">
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-[#0f2940] flex items-center gap-2">
                    <Menu className="w-5 h-5 text-[#2d6a8a]" /> Contents
                  </h3>
                  <button
                    onClick={() => setShowMobileTOC(false)}
                    className="p-2 rounded-lg hover:bg-slate-100"
                    aria-label="Close table of contents"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm py-3 px-4 rounded-lg transition-all ${
                        activeSection === item.id
                          ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                          : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                      }`}
                      aria-label={`Scroll to ${item.title}`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                      onClick={() => handleShare("facebook")}
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                      onClick={() => handleShare("twitter")}
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                      onClick={handleCopyLink}
                      aria-label="Copy link to article"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
          <div className="absolute inset-0 z-0">
            <Image
              src={blogPost.heroImage}
              alt="Solo trekker in Nepal Himalayas with mountain peaks"
              fill
              className="object-cover object-center"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] via-[#0f2940]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
            <div className="max-w-4xl mx-auto text-center w-full">
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30 py-1.5 px-3 text-xs font-medium">
                <UserRound className="w-3 h-3 mr-1.5" /> {blogPost.category}
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-4 md:mb-6 px-2">
                {blogPost.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 font-light px-2 sm:px-0">
                {blogPost.excerpt}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-sm text-white/70">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED] bg-white/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-bold text-white text-sm sm:text-base">{blogPost.author.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5E0ED]" />
                      <span>{blogPost.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5E0ED]" />
                      {blogPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Sidebar - Table of Contents (Desktop only) */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24 space-y-6">
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h2 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2 text-lg">
                        <BookOpen className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
                      </h2>
                      <nav className="space-y-2">
                        {tableOfContents.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                              activeSection === item.id
                                ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                                : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                            }`}
                            aria-label={`Scroll to ${item.title}`}
                          >
                            {item.title}
                          </button>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                        <Share2 className="w-4 h-4 text-[#C5E0ED]" /> Share Article
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-xl"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-xl"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl"
                          onClick={handleCopyLink}
                          aria-label="Copy link to article"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Himkala Adventure Callout */}
                  <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 rounded-2xl overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <Mountain className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                      <h3 className="font-bold text-amber-800 mb-2">Ready for Your Solo Trek?</h3>
                      <p className="text-amber-700 text-sm mb-4">
                        Himkala Adventure offers guided solo treks with experienced local guides. Safe. Reliable. Unforgettable.
                      </p>
                      <Link href="/services/trekking" className="block">
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl">
                          Explore Treks
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-9 overflow-x-hidden">
                <div className="max-w-full">
                  {/* Introduction */}
                  <section id="introduction" className="mb-8 md:mb-12">
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 first-letter:text-4xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-[#0f2940] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      Solo trekking in Nepal has always been on the bucket list for independent travelers. And in 2026, it's finally back on the table legally and safely.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      After a brief period of mandatory guide requirements, Nepal has lifted the blanket restriction. Solo trekkers are now welcome on most popular routes, provided they follow the updated guidelines and obtain the correct permits.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Whether you're dreaming of the Everest Base Camp, the Annapurna Circuit, or the quiet trails of Langtang and Manaslu, this guide covers everything you need to know from the new 2026 rules to safety tips, costs, and packing essentials.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-5 mt-6">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800 leading-relaxed">
                          <span className="font-bold">Good News for 2026:</span> Solo trekkers can now trek independently on most routes, including Everest Base Camp, Annapurna Circuit, Langtang Valley, and Manaslu Circuit. No guide is required by law for these routes as of March 2026.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* What Changed in 2026 */}
                  <section id="whats-changed" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      What Changed in 2026?
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      In early 2026, the Nepal Tourism Board and the Department of Tourism made a significant policy shift. The mandatory guide requirement introduced during the pandemic was lifted for most popular trekking routes.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      This means you can now trek independently again. But there are new requirements you need to know:
                    </p>
                    <ul className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed list-disc pl-5 md:pl-6">
                      <li><span className="font-medium text-[#0f2940]">TIMS Card is Still Required:</span> The Trekkers' Information Management System (TIMS) card is still mandatory for all trekkers.</li>
                      <li><span className="font-medium text-[#0f2940]">National Park Permits:</span> You still need permits for each national park (Sagarmatha, Annapurna, Langtang, Manaslu).</li>
                      <li><span className="font-medium text-[#0f2940]">Restricted Areas:</span> Treks in restricted areas like Upper Mustang, Nar Phu, and Manaslu still require a licensed guide and special permits.</li>
                      <li><span className="font-medium text-[#0f2940]">Insurance:</span> Travel insurance covering helicopter evacuation up to 6,000m is now mandatory (and always recommended).</li>
                      <li><span className="font-medium text-[#0f2940]">Check-in System:</span> You must register your trekking route and check in at checkpoints along the way.</li>
                    </ul>
                  </section>

                  {/* Best Treks for Solo Travelers */}
                  <section id="best-treks" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Compass className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Best Treks for Solo Travelers
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Not all treks are equally suited for solo travelers. Here are the best options for 2026, based on safety, infrastructure, ease of navigation, and solo-friendly teahouses.
                    </p>

                    {/* Everest Base Camp */}
                    <div className="bg-white rounded-xl border border-[#C5E0ED]/30 p-4 md:p-5 mb-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#0f2940] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <h4 className="text-lg font-bold text-[#0f2940]">Everest Base Camp</h4>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                        The classic. Well-established teahouse network, clearly marked trails, and plenty of fellow trekkers. Perfect for solo travelers who want a social experience.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">14 Days</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">5,364m</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">$1,520 with guide</Badge>
                        <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                      </div>
                    </div>

                    {/* Annapurna Circuit */}
                    <div className="bg-white rounded-xl border border-[#C5E0ED]/30 p-4 md:p-5 mb-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#0f2940] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <h4 className="text-lg font-bold text-[#0f2940]">Annapurna Circuit</h4>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                        Diverse landscapes, rich culture, and iconic Thorong La Pass. Excellent teahouses and a well-worn path make this a classic solo trek.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">9-18 Days</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">5,416m</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">$800 with guide</Badge>
                        <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                      </div>
                    </div>

                    {/* Langtang Valley */}
                    <div className="bg-white rounded-xl border border-[#C5E0ED]/30 p-4 md:p-5 mb-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#0f2940] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <h4 className="text-lg font-bold text-[#0f2940]">Langtang Valley</h4>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                        Close to Kathmandu, less crowded, and incredibly scenic. Langtang is perfect for solo trekkers who want a quieter, more intimate experience.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">8 Days</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">4,984m</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">$650 with guide</Badge>
                        <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                      </div>
                    </div>

                    {/* Ghorepani Poon Hill */}
                    <div className="bg-white rounded-xl border border-[#C5E0ED]/30 p-4 md:p-5 mb-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#0f2940] rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                        <h4 className="text-lg font-bold text-[#0f2940]">Ghorepani Poon Hill</h4>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                        The perfect short trek for first-time solo trekkers. Stunning sunrise views over Annapurna and Dhaulagiri. Easy terrain and excellent teahouses.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">6 Days</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">3,210m</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">$500 with guide</Badge>
                        <Badge className="bg-green-100 text-green-700 border-none">Solo Friendly</Badge>
                      </div>
                    </div>

                    {/* Manaslu Circuit (Permit Required) */}
                    <div className="bg-white rounded-xl border border-[#C5E0ED]/30 p-4 md:p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#0f2940] rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                        <h4 className="text-lg font-bold text-[#0f2940]">Manaslu Circuit</h4>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                        Remote, pristine, and culturally rich. Manaslu offers an off-the-beaten-path experience. <span className="font-semibold text-amber-600">Note: A licensed guide is required for Manaslu.</span>
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">12 Days</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">5,106m</Badge>
                        <Badge className="bg-[#0f2940]/10 text-[#0f2940] border-none">$1,200 with guide</Badge>
                        <Badge className="bg-amber-100 text-amber-700 border-none">Guide Required</Badge>
                      </div>
                    </div>
                  </section>

                  {/* Safety Tips */}
                  <section id="safety-tips" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Shield className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Essential Safety Tips for Solo Trekkers
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Solo trekking is rewarding but requires extra preparation. Here's how to stay safe:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-[#0f2940] text-sm">1. Acclimatize Properly</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">Acute Mountain Sickness (AMS) is real. Don't rush. Follow the golden rule: climb high, sleep low. Plan rest days into your itinerary.</p>
                        </div>
                      </div>
                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20 flex items-start gap-3">
                        <FileCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-[#0f2940] text-sm">2. Register Your Trek</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">Register your route with the TIMS office and check in at checkpoints. Let someone know your itinerary and expected return date.</p>
                        </div>
                      </div>
                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20 flex items-start gap-3">
                        <div>
                          <h5 className="font-bold text-[#0f2940] text-sm">3. Emergency Communication</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">Carry a local SIM card with data. Emergency helicopter evacuation is available but expensive. Make sure your insurance covers it.</p>
                        </div>
                      </div>
                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20 flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-[#0f2940] text-sm">4. Trek in Peak Seasons</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">Trekking in March-May or October-November means more fellow trekkers on the trail. This is safer for solo travelers.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Permits & Costs */}
                  <section id="permits-costs" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Permits & Costs for Solo Trekkers
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Here's what you'll need to budget for permits and logistics:
                    </p>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#0f2940] text-white">
                            <th className="text-left p-3 rounded-tl-lg">Item</th>
                            <th className="text-left p-3">Cost (NPR)</th>
                            <th className="text-left p-3 rounded-tr-lg">Cost (USD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">TIMS Card</td>
                            <td className="p-3">NPR 1,000-2,000</td>
                            <td className="p-3">$10-20</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Sagarmatha National Park Permit</td>
                            <td className="p-3">NPR 3,000</td>
                            <td className="p-3">$23</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna Conservation Area Permit</td>
                            <td className="p-3">NPR 3,000</td>
                            <td className="p-3">$23</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Langtang National Park Permit</td>
                            <td className="p-3">NPR 3,000</td>
                            <td className="p-3">$23</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Manaslu Restricted Area Permit</td>
                            <td className="p-3">NPR 7,000+</td>
                            <td className="p-3">$50+</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Lukla Flight (Round Trip)</td>
                            <td className="p-3">NPR 40,000-55,000</td>
                            <td className="p-3">$300-400</td>
                          </tr>
                          <tr className="hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Travel Insurance (11 days)</td>
                            <td className="p-3">NPR 6,500-10,500</td>
                            <td className="p-3">$50-80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        <span className="font-semibold text-[#0f2940]">Total Solo Trek Cost:</span> A 10-day solo trek in Nepal costs approximately <span className="font-bold text-[#2d6a8a]">$800-1,500</span> including permits, transport, accommodation, food, and incidentals. Treks with guides cost more but include more services and peace of mind.
                      </p>
                    </div>
                  </section>

                  {/* Packing Guide */}
                  <section id="packing-guide" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Footprints className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Packing for Solo Trekking
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-white border-[#C5E0ED]/20 rounded-xl overflow-hidden">
                        <CardContent className="p-4 md:p-5">
                          <h4 className="font-bold text-[#0f2940] text-sm mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" /> Essential Gear
                          </h4>
                          <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> Trekking boots (broken in)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> Down jacket & fleece
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> Waterproof jacket & pants
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> Trekking pants (2 pairs)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> Base layers (thermal)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-1" /> Sleeping bag (-10°C rating)
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border-[#C5E0ED]/20 rounded-xl overflow-hidden">
                        <CardContent className="p-4 md:p-5">
                          <h4 className="font-bold text-[#0f2940] text-sm mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Solo Essentials
                          </h4>
                          <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> Local SIM card (Ncell or NTC)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> Power bank (20,000mAh+)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> Water purification tablets
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> First aid kit (with altitude meds)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> Head torch (with spare batteries)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0 mt-1" /> Trekking poles (recommended)
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* FAQ Section */}
                  <section id="faq" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-4 mt-4">
                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">Is solo trekking in Nepal legal in 2026?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Yes. The mandatory guide requirement was lifted in March 2026. Solo trekkers can trek independently on most routes, including Everest Base Camp, Annapurna Circuit, Langtang Valley, and others. Restricted areas like Upper Mustang, Nar Phu, and Manaslu still require a licensed guide.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">What permits do I need for solo trekking?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          You need a TIMS card and national park permits specific to the region (Sagarmatha National Park for EBC, Annapurna Conservation Area for ACAP, Langtang National Park, etc.). For restricted areas like Manaslu, you need special permits.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">Is it safe to trek solo in Nepal?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Yes, with proper preparation. Stick to popular routes, register your trek, carry a local SIM card, and check in at checkpoints. Trekking in peak seasons (March-May, October-November) means more fellow trekkers on the trail, which is safer.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">How much does a solo trek cost in Nepal?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          A 10-day solo trek costs approximately $800-1,500 including permits, transport, accommodation, food, and incidentals. Add $300-400 for Lukla flights if trekking to Everest Base Camp.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">Do I need a guide for solo trekking?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          No, it's not legally required on most routes. However, hiring a guide can enhance your experience, improve safety, and provide cultural insights. Himkala Adventure offers optional guides for solo trekkers who want extra support.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                      <div className="relative h-[150px] md:h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/gokyo-2.webp"
                          alt="Photos from solo trekker in the Everest Three Passes trek"
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="relative h-[150px] md:h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/mardi-3.webp"
                          alt="Solo trekking in Nepal Himalayas at sunrise"
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Author Card with LinkedIn */}
                  <Card className="bg-gradient-to-br from-[#f8fbfc] to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 md:p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-[#2d6a8a]/10">
                          <User className="w-8 h-8 text-[#2d6a8a]" />
                        </div>
                        <div className="text-center md:text-left">
                          <p className="text-xs font-bold text-[#2d6a8a] uppercase tracking-wider mb-1 md:mb-2">Written By</p>
                          <h3 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1">{blogPost.author.name}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-2">
                            Sabinaya is a certified trekking guide based in Kathmandu. He has been leading treks across Nepal for years and specializes in helping solo travelers discover the best of the Himalayas safely and confidently.
                          </p>
                          <a
                            href={blogPost.author.linkedin}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center gap-2 text-sm text-[#2d6a8a] hover:text-[#1a4a6a] transition-colors mt-2"
                            aria-label="Connect with Sabinaya Dhakal on LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                            </svg>
                            Sabinaya Dhakal on LinkedIn
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mobile Share Buttons */}
                  <div className="lg:hidden mt-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4 mr-2" /> Share
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4 mr-2" /> Tweet
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/10"
                        onClick={handleCopyLink}
                        aria-label="Copy link to article"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-2" /> Link Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" /> Copy Link
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                    {blogPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/20 cursor-pointer rounded-full px-3 py-1 text-xs md:text-sm">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Continue Your Journey</h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">More Insights from Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {relatedPosts.map((post, i) => (
                <Link href={post.href} key={i} className="block">
                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer">
                    <div className="relative h-40 md:h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-2 md:mb-3 leading-snug group-hover:text-[#2d6a8a] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 md:gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}