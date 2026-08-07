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
  PiggyBank
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown",
  excerpt: "Planning a trek in Nepal? Here's exactly how much it costs in 2026. From budget-friendly Poon Hill at $500 to premium Upper Mustang at $2,595. We break down every trek, permit, and hidden expense so you know what to budget.",
  heroImage: "/images/used/nepal-trek-cost-blog-hero.webp",
  author: {
    name: "Sabinaya Dhakal",
    avatar: "/placeholder.svg?text=SD",
    linkedin: "https://www.linkedin.com/in/sabinaya-dhakal-7b2a83289"
  },
  date: "August 4, 2026",
  readTime: "16 min read",
  category: "Trekking Guide",
  tags: ["Trekking Cost Nepal", "Budget Trekking Nepal", "Everest Base Camp Cost", "Annapurna Circuit Cost", "Nepal Trek 2026", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "How Much Does It Cost?" },
  { id: "quick-comparison", title: "Quick Comparison Table" },
  { id: "everest", title: "Everest Region Treks" },
  { id: "annapurna", title: "Annapurna Region Treks" },
  { id: "langtang", title: "Langtang Region Treks" },
  { id: "manaslu", title: "Manaslu Region Treks" },
  { id: "hidden-costs", title: "Hidden Costs to Budget For" },
  { id: "faq", title: "Frequently Asked Questions" },
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
        <title>How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown</title>
        <meta name="description" content="Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/nepal-trek-cost-2026" />
        
        <meta property="og:title" content="How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown" />
        <meta property="og:description" content="Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog/nepal-trek-cost-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta property="article:published_time" content="2026-06-04" />
        <meta property="article:author" content="Sabinaya Dhakal" />
        <meta property="article:tag" content="Trekking Cost Nepal" />
        <meta property="article:tag" content="Budget Trekking Nepal" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown" />
        <meta name="twitter:description" content="Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown",
              "description": "Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips.",
              "image": "https://www.himkalaadventure.com/images/used/manaslu-main-page.webp",
              "datePublished": "2026-06-04",
              "dateModified": "2026-06-04",
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
                "@id": "https://www.himkalaadventure.com/blog/nepal-trek-cost-2026"
              },
              "keywords": "Nepal trek cost 2026, Everest Base Camp price, Annapurna Circuit cost, budget trekking Nepal, trekking permits Nepal, Himkala Adventure",
              "articleSection": "Trekking Guide",
              "about": {
                "@type": "Thing",
                "name": "Trekking Cost in Nepal"
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
              alt="Trekking in Nepal Himalayas with mountain peaks"
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
                <DollarSign className="w-3 h-3 mr-1.5" /> {blogPost.category}
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
                        <Calculator className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
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
                      <h3 className="font-bold text-amber-800 mb-2">Ready to Book Your Trek?</h3>
                      <p className="text-amber-700 text-sm mb-4">
                        Himkala Adventure offers transparent pricing with no hidden fees. Book your 2026 trek today.
                      </p>
                      <Link href="/services/trekking" className="block">
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl">
                          View All Treks
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
                      Planning a trek in Nepal is exciting. Then comes the question: <span className="font-semibold text-[#0f2940]">"How much is this actually going to cost me?"</span>
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The short answer: <span className="font-bold text-[#0f2940]">Between $500 and $2,595</span>, depending on which trek you choose, how long you go, and what style of trekking you prefer.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      From budget-friendly sunrise hikes like Ghorepani Poon Hill at $500 to premium adventures like Upper Mustang at $2,595, Nepal has a trek for every budget. The key is knowing exactly what you're paying for and that's exactly what this guide covers.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Here's the complete breakdown region by region, trek by trek, so you know exactly what to budget for your 2026 Nepal trek.
                    </p>
                  </section>

                  {/* Quick Comparison Table */}
                  <section id="quick-comparison" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      </span>
                      Quick Comparison Table
                    </h2>
                    
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#0f2940] text-white">
                            <th className="text-left p-3 rounded-tl-lg">Region</th>
                            <th className="text-left p-3">Trek</th>
                            <th className="text-left p-3">Days</th>
                            <th className="text-left p-3">Max Altitude</th>
                            <th className="text-left p-3 rounded-tr-lg">Price (2026)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Everest</td>
                            <td className="p-3">Everest Base Camp</td>
                            <td className="p-3">14</td>
                            <td className="p-3">5,364m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,520</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Everest</td>
                            <td className="p-3">Gokyo Lakes</td>
                            <td className="p-3">14</td>
                            <td className="p-3">5,357m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,650</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Everest</td>
                            <td className="p-3">Three Passes</td>
                            <td className="p-3">18</td>
                            <td className="p-3">5,545m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,950</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Annapurna Circuit</td>
                            <td className="p-3">9</td>
                            <td className="p-3">5,416m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$800</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Annapurna Circuit + Tilicho</td>
                            <td className="p-3">12</td>
                            <td className="p-3">5,416m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,000</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Annapurna Base Camp</td>
                            <td className="p-3">9</td>
                            <td className="p-3">4,130m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$700</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Ghorepani Poon Hill</td>
                            <td className="p-3">6</td>
                            <td className="p-3">3,210m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$500</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Mardi Himal</td>
                            <td className="p-3">7</td>
                            <td className="p-3">4,500m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$600</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Khopra Ridge + Khayar Lake</td>
                            <td className="p-3">8</td>
                            <td className="p-3">4,660m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$700</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Nar Phu</td>
                            <td className="p-3">13</td>
                            <td className="p-3">5,300m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,350</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Annapurna</td>
                            <td className="p-3">Upper Mustang</td>
                            <td className="p-3">13</td>
                            <td className="p-3">3,840m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$2,595</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Langtang</td>
                            <td className="p-3">Langtang Valley</td>
                            <td className="p-3">8</td>
                            <td className="p-3">4,984m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$650</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Langtang</td>
                            <td className="p-3">Langtang Ganjala Pass</td>
                            <td className="p-3">13</td>
                            <td className="p-3">5,106m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,200</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Langtang</td>
                            <td className="p-3">Langtang Gosainkunda</td>
                            <td className="p-3">15</td>
                            <td className="p-3">4,380m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,395</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Langtang</td>
                            <td className="p-3">Tamang Heritage + Langtang</td>
                            <td className="p-3">13</td>
                            <td className="p-3">4,984m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,195</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Manaslu</td>
                            <td className="p-3">Manaslu Circuit</td>
                            <td className="p-3">12</td>
                            <td className="p-3">5,106m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,200</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Manaslu</td>
                            <td className="p-3">Manaslu + Tsum Valley</td>
                            <td className="p-3">17</td>
                            <td className="p-3">5,106m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$2,050</td>
                          </tr>
                          <tr className="hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Manaslu</td>
                            <td className="p-3">Rupina La</td>
                            <td className="p-3">16</td>
                            <td className="p-3">4,620m</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$1,895</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        <span className="font-semibold text-[#0f2940]">Note:</span> All prices are per person, based on twin-sharing accommodation and include permits, guide, porter, meals, and transfers. Flights (Lukla) and personal expenses are not included.
                      </p>
                    </div>
                  </section>

                  {/* Everest Region */}
                  <section id="everest" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Mountain className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Everest Region Treks ($1,520 - $1,950)
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The Everest region is the most famous trekking destination in Nepal and for good reason. Trekking to the foot of the world's highest mountain is a once-in-a-lifetime experience.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Everest Base Camp Trek</span> — the classic 14-day journey at <span className="font-bold text-[#2d6a8a]">$1,520</span>. Trek through legendary Sherpa villages, visit Tengboche Monastery, and stand at Kala Patthar for sunrise views of Everest.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Gokyo Lakes Trek</span> — 14 days at <span className="font-bold text-[#2d6a8a]">$1,650</span>. Swap the crowded EBC trail for the turquoise Gokyo Lakes and panoramic views from Gokyo Ri.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-bold text-[#0f2940]">Everest Three Passes Trek</span> — 18 days at <span className="font-bold text-[#2d6a8a]">$1,950</span>. The ultimate challenge for experienced trekkers, crossing three high passes above 5,300m.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Price Range:</span> $1,520 - $1,950</div>
                        <div><span className="font-medium text-[#2d6a8a]">Duration:</span> 14-18 days</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max Altitude:</span> 5,545m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/everest-base-camp-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Everest Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/gokyo-1.webp"
                        alt="Everest Base Camp with Khumbu Icefall in Nepal"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Everest Base Camp with Khumbu Icefall
                      </div>
                    </div>
                  </section>

                  {/* Annapurna Region */}
                  <section id="annapurna" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Mountain className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Annapurna Region Treks ($500 - $2,595)
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The Annapurna region offers the widest range of trekking options — from budget-friendly sunrise hikes to the premium forbidden kingdom of Upper Mustang.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Ghorepani Poon Hill Trek</span> — 6 days at <span className="font-bold text-[#2d6a8a]">$500</span>. The perfect beginner trek with stunning sunrise views over the Annapurna and Dhaulagiri ranges.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Mardi Himal Trek</span> — 7 days at <span className="font-bold text-[#2d6a8a]">$600</span>. A hidden gem offering spectacular close-up views of Machapuchare and Annapurna South.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Annapurna Base Camp Trek</span> — 9 days at <span className="font-bold text-[#2d6a8a]">$700</span>. Journey into the heart of the Annapurna Sanctuary, surrounded by towering peaks.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Annapurna Circuit Trek</span> — 9 days at <span className="font-bold text-[#2d6a8a]">$800</span>. The classic Himalayan trek circumnavigating the Annapurna massif, crossing the legendary Thorong La Pass.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Upper Mustang Trek</span> — 13 days at <span className="font-bold text-[#2d6a8a]">$2,595</span>. Journey to the forbidden kingdom of Lo in the rain shadow of the Himalayas. The higher cost is due to restricted area permits.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Other Annapurna region options include Khopra Ridge with Khayar Lake ($700, 8 days), Nar Phu ($1,350, 13 days), and Annapurna Circuit with Tilicho Lake ($1,000, 12 days).
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Price Range:</span> $500 - $2,595</div>
                        <div><span className="font-medium text-[#2d6a8a]">Duration:</span> 6-13 days</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max Altitude:</span> 5,416m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/annapurna-base-camp-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Annapurna Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/annapurna-circuit-1.webp"
                        alt="Annapurna Circuit with Thorong La Pass and mountain views"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Annapurna Circuit trek with Himalayan peaks
                      </div>
                    </div>
                  </section>

                  {/* Langtang Region */}
                  <section id="langtang" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Mountain className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Langtang Region Treks ($650 - $1,395)
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Just a few hours north of Kathmandu, Langtang offers dramatic glacial scenery and deeply rooted Tibetan-Buddhist culture with fewer trekkers on the trail.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Langtang Valley Trek</span> — 8 days at <span className="font-bold text-[#2d6a8a]">$650</span>. Explore the 'Valley of Glaciers' with rich Tamang culture and the stunning Kyanjin Gompa.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Tamang Heritage Trail + Langtang Valley</span> — 13 days at <span className="font-bold text-[#2d6a8a]">$1,195</span>. Combine the cultural trail with the stunning Langtang Valley.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Langtang Ganjala Pass Trek</span> — 13 days at <span className="font-bold text-[#2d6a8a]">$1,200</span>. Cross the challenging Ganjala Pass connecting Langtang with Helambu.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-bold text-[#0f2940]">Langtang Gosainkunda Trek</span> — 15 days at <span className="font-bold text-[#2d6a8a]">$1,395</span>. Trek to the sacred alpine lakes of Gosainkunda, an important Hindu pilgrimage site.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Price Range:</span> $650 - $1,395</div>
                        <div><span className="font-medium text-[#2d6a8a]">Duration:</span> 8-15 days</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max Altitude:</span> 5,106m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/langtang-valley-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Langtang Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/ganjala-pass-1.webp"
                        alt="Langtang Valley with Kyanjin Gompa and Himalayan peaks"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Kyanjin Gompa with Langtang Lirung mountain behind
                      </div>
                    </div>
                  </section>

                  {/* Manaslu Region */}
                  <section id="manaslu" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Mountain className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Manaslu Region Treks ($1,200 - $2,050)
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Less crowded and more remote than the Annapurna or Everest regions, the Manaslu region offers pristine wilderness and authentic Tibetan-Buddhist culture.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Manaslu Circuit Trek</span> — 12 days at <span className="font-bold text-[#2d6a8a]">$1,200</span>. Circle the world's eighth highest mountain through pristine wilderness and authentic Tibetan culture.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <span className="font-bold text-[#0f2940]">Rupina La Trek</span> — 16 days at <span className="font-bold text-[#2d6a8a]">$1,895</span>. An off-the-beaten-path trek in the Manaslu region offering pristine nature and authentic culture.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="font-bold text-[#0f2940]">Manaslu Circuit with Tsum Valley</span> — 17 days at <span className="font-bold text-[#2d6a8a]">$2,050</span>. Combine the Manaslu Circuit with the sacred Tsum Valley for an extended cultural adventure.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Price Range:</span> $1,200 - $2,050</div>
                        <div><span className="font-medium text-[#2d6a8a]">Duration:</span> 12-17 days</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max Altitude:</span> 5,106m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/manaslu-circuit-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Manaslu Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/manaslu-main-page.webp"
                        alt="Manaslu Circuit trek with mountain views and Himalayan landscape"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Manaslu Circuit trek with Himalayan landscape
                      </div>
                    </div>
                  </section>

                  {/* Hidden Costs */}
                  <section id="hidden-costs" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Wallet className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Hidden Costs to Budget For
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Here's where most first-time trekkers get caught out. The package price covers the essentials, but these extras add up quickly:
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
                            <td className="p-3 font-medium text-[#0f2940]">National Park Permit</td>
                            <td className="p-3">NPR 3,000-4,000</td>
                            <td className="p-3">$23-30</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Lukla Flight (Round Trip)</td>
                            <td className="p-3">NPR 40,000-55,000</td>
                            <td className="p-3">$300-400</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Travel Insurance (11 days)</td>
                            <td className="p-3">NPR 6,500-10,500</td>
                            <td className="p-3">$50-80</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Personal Gear (Rent)</td>
                            <td className="p-3">NPR 1,500-3,000</td>
                            <td className="p-3">$10-20</td>
                          </tr>
                          <tr className="border-b border-slate-200 hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Personal Gear (Buy)</td>
                            <td className="p-3">NPR 15,000-30,000</td>
                            <td className="p-3">$100-200</td>
                          </tr>
                          <tr className="hover:bg-[#f0f7fa] transition-colors">
                            <td className="p-3 font-medium text-[#0f2940]">Tips (Guide + Porter)</td>
                            <td className="p-3">NPR 12,000-20,000</td>
                            <td className="p-3 font-bold text-[#2d6a8a]">$100-150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5">
                      <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4" /> Budget Tips to Save Money
                      </h4>
                      <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
                        <li><span className="font-medium">Trek in a group</span> — More people = lower per-person cost</li>
                        <li><span className="font-medium">Travel during off-season</span> — Flights and tea houses are cheaper</li>
                        <li><span className="font-medium">Book early</span> — Early bird discounts available</li>
                        <li><span className="font-medium">Skip the porter</span> — Carry your own bag (harder, but saves money)</li>
                        <li><span className="font-medium">Use local transport</span> — Buses are cheaper than private jeeps</li>
                      </ul>
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
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">What's included in your trek package prices?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Our packages include airport transfers, Kathmandu to trailhead transport, tea house accommodation during the trek, all meals (breakfast, lunch, dinner), English-speaking guide, porter service, TIMS card and national park permits, first aid kit, and insurance for guides and porters.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">What's not included?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          International flights, Nepal visa, travel insurance, personal gear, tips for guides and porters, drinks (water, tea, beer), and hot showers or battery charging at tea houses.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">Do I need travel insurance?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Yes, absolutely. You must have travel insurance that covers trekking at altitude (up to 5,500m), emergency helicopter evacuation, and medical expenses. This is non-negotiable.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">How much should I tip my guide and porter?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Industry standard is 10-15% of your total trek cost, split between your guide and porter. For a $1,500 trek, budget $150-200 for tips. This makes a huge difference to their families.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">Are your prices negotiable?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          We offer group discounts and early bird pricing. The prices listed are our standard rates with discounts already applied. Contact us for custom group quotes.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                      <div className="relative h-[150px] md:h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/gokyo-1.webp"
                          alt="Gokyo Lakes turquoise water with Himalayan mountains"
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="relative h-[150px] md:h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/gokyo-3.webp"
                          alt="Himalayan mountain range at sunrise with golden light"
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