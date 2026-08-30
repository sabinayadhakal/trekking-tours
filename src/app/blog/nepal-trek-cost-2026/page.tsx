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
  DollarSign,
  Calculator,
  Wallet,
  Lightbulb,
  ArrowRight,
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
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
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
      "@id": "https://www.himkalaadventure.com/blog/nepal-trek-cost-2026",
    },
    keywords:
      "Nepal trek cost 2026, Everest Base Camp price, Annapurna Circuit cost, budget trekking Nepal, trekking permits Nepal, Himkala Adventure",
    articleSection: "Trekking Guide",
    about: {
      "@type": "Thing",
      name: "Trekking Cost in Nepal",
    },
  };

  return (
    <>
      <Head>
        <title>How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown</title>
        <meta name="description" content="Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/nepal-trek-cost-2026" />
        <meta property="og:title" content="How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown" />
        <meta property="og:description" content="Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/nepal-trek-cost-blog-hero.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog/nepal-trek-cost-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Much Does a Nepal Trek Really Cost? Complete 2026 Budget Breakdown" />
        <meta name="twitter:description" content="Complete 2026 cost breakdown for Nepal treks. Everest Base Camp from $1,520, Annapurna Circuit from $800, Poon Hill from $500, and more. Includes permits, hidden costs, and budget tips." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/nepal-trek-cost-blog-hero.webp" />
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
                      Planning a trek in Nepal is exciting. Then comes the question: <span className="font-semibold text-[#14383b]">"How much is this actually going to cost me?"</span>
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The short answer: <span className="font-bold text-[#14383b]">Between $500 and $2,595</span>, depending on which trek you choose, how long you go, and what style of trekking you prefer.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      From budget-friendly sunrise hikes like Ghorepani Poon Hill at $500 to premium adventures like Upper Mustang at $2,595, Nepal has a trek for every budget. The key is knowing exactly what you're paying for and that's exactly what this guide covers.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      Here's the complete breakdown region by region, trek by trek, so you know exactly what to budget for your 2026 Nepal trek.
                    </p>
                  </section>

                  {/* Quick Comparison Table */}
                  <section id="quick-comparison" className="mb-6 sm:mb-8 md:mb-12 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Quick Comparison Table
                    </h2>

                    <div className="w-full overflow-x-auto">
                      <div className="min-w-[280px] w-full">
                        <table className="w-full text-xs sm:text-sm border-collapse">
                          <thead>
                            <tr className="bg-[#14383b] text-[#f7f2e9]">
                              <th className="p-2 sm:p-3 text-left rounded-l-lg">Region</th>
                              <th className="p-2 sm:p-3 text-left">Trek</th>
                              <th className="p-2 sm:p-3 text-left">Days</th>
                              <th className="p-2 sm:p-3 text-left">Max Altitude</th>
                              <th className="p-2 sm:p-3 text-left rounded-r-lg">Price (2026)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Everest</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Everest Base Camp</td>
                              <td className="p-2 sm:p-3 text-[#556363]">14</td>
                              <td className="p-2 sm:p-3 text-[#556363]">5,364m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$1,520</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Everest</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Gokyo Lakes</td>
                              <td className="p-2 sm:p-3 text-[#556363]">14</td>
                              <td className="p-2 sm:p-3 text-[#556363]">5,357m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$1,650</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Everest</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Three Passes</td>
                              <td className="p-2 sm:p-3 text-[#556363]">18</td>
                              <td className="p-2 sm:p-3 text-[#556363]">5,545m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$1,950</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Annapurna</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Annapurna Circuit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">9</td>
                              <td className="p-2 sm:p-3 text-[#556363]">5,416m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$800</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Annapurna</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Annapurna Base Camp</td>
                              <td className="p-2 sm:p-3 text-[#556363]">9</td>
                              <td className="p-2 sm:p-3 text-[#556363]">4,130m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$700</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Annapurna</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Ghorepani Poon Hill</td>
                              <td className="p-2 sm:p-3 text-[#556363]">6</td>
                              <td className="p-2 sm:p-3 text-[#556363]">3,210m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$500</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Annapurna</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Upper Mustang</td>
                              <td className="p-2 sm:p-3 text-[#556363]">13</td>
                              <td className="p-2 sm:p-3 text-[#556363]">3,840m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$2,595</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Langtang</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Langtang Valley</td>
                              <td className="p-2 sm:p-3 text-[#556363]">8</td>
                              <td className="p-2 sm:p-3 text-[#556363]">4,984m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$650</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Manaslu</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Manaslu Circuit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">12</td>
                              <td className="p-2 sm:p-3 text-[#556363]">5,106m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$1,200</td>
                            </tr>
                            <tr className="hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Manaslu</td>
                              <td className="p-2 sm:p-3 text-[#556363]">Manaslu + Tsum Valley</td>
                              <td className="p-2 sm:p-3 text-[#556363]">17</td>
                              <td className="p-2 sm:p-3 text-[#556363]">5,106m</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$2,050</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                      <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                        <span className="font-semibold text-[#14383b]">Note:</span> All prices are per person, based on twin-sharing accommodation and include permits, guide, porter, meals, and transfers. Flights (Lukla) and personal expenses are not included.
                      </p>
                    </div>
                  </section>

                  {/* Everest Region */}
                  <section id="everest" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Everest Region Treks ($1,520 - $1,950)
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/gokyo-1.webp"
                          alt="Everest Base Camp with Khumbu Icefall in Nepal"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Everest Base Camp with Khumbu Icefall
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The Everest region is the most famous trekking destination in Nepal and for good reason. Trekking to the foot of the world's highest mountain is a once-in-a-lifetime experience.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Everest Base Camp Trek</span> — the classic 14-day journey at <span className="font-bold text-[#cf6943]">$1,520</span>. Trek through legendary Sherpa villages, visit Tengboche Monastery, and stand at Kala Patthar for sunrise views of Everest.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Gokyo Lakes Trek</span> — 14 days at <span className="font-bold text-[#cf6943]">$1,650</span>. Swap the crowded EBC trail for the turquoise Gokyo Lakes and panoramic views from Gokyo Ri.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      <span className="font-bold text-[#14383b]">Everest Three Passes Trek</span> — 18 days at <span className="font-bold text-[#cf6943]">$1,950</span>. The ultimate challenge for experienced trekkers, crossing three high passes above 5,300m.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Price Range:</span> $1,520 - $1,950</div>
                        <div><span className="font-medium text-[#cf6943]">Duration:</span> 14-18 days</div>
                        <div><span className="font-medium text-[#cf6943]">Max Altitude:</span> 5,545m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/everest-base-camp-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Everest Trek →
                      </Button>
                    </Link>
                  </section>

                  {/* Annapurna Region */}
                  <section id="annapurna" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Annapurna Region Treks ($500 - $2,595)
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/annapurna-circuit-1.webp"
                          alt="Annapurna Circuit with Thorong La Pass and mountain views"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Annapurna Circuit trek with Himalayan peaks
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The Annapurna region offers the widest range of trekking options — from budget-friendly sunrise hikes to the premium forbidden kingdom of Upper Mustang.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Ghorepani Poon Hill Trek</span> — 6 days at <span className="font-bold text-[#cf6943]">$500</span>. The perfect beginner trek with stunning sunrise views over the Annapurna and Dhaulagiri ranges.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Annapurna Base Camp Trek</span> — 9 days at <span className="font-bold text-[#cf6943]">$700</span>. Journey into the heart of the Annapurna Sanctuary, surrounded by towering peaks.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Annapurna Circuit Trek</span> — 9 days at <span className="font-bold text-[#cf6943]">$800</span>. The classic Himalayan trek circumnavigating the Annapurna massif, crossing the legendary Thorong La Pass.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      <span className="font-bold text-[#14383b]">Upper Mustang Trek</span> — 13 days at <span className="font-bold text-[#cf6943]">$2,595</span>. Journey to the forbidden kingdom of Lo in the rain shadow of the Himalayas. The higher cost is due to restricted area permits.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Price Range:</span> $500 - $2,595</div>
                        <div><span className="font-medium text-[#cf6943]">Duration:</span> 6-13 days</div>
                        <div><span className="font-medium text-[#cf6943]">Max Altitude:</span> 5,416m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/annapurna-base-camp-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Annapurna Trek →
                      </Button>
                    </Link>
                  </section>

                  {/* Langtang Region */}
                  <section id="langtang" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Langtang Region Treks ($650 - $1,395)
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/langtang-1.webp"
                          alt="Langtang Valley from Kyanjin Ri and Himalayan peaks"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Langtang Valley from Kyanjin Ri
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Just a few hours north of Kathmandu, Langtang offers dramatic glacial scenery and deeply rooted Tibetan-Buddhist culture with fewer trekkers on the trail.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Langtang Valley Trek</span> — 8 days at <span className="font-bold text-[#cf6943]">$650</span>. Explore the 'Valley of Glaciers' with rich Tamang culture and the stunning Kyanjin Gompa.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Langtang Ganjala Pass Trek</span> — 13 days at <span className="font-bold text-[#cf6943]">$1,200</span>. Cross the challenging Ganjala Pass connecting Langtang with Helambu.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      <span className="font-bold text-[#14383b]">Langtang Gosainkunda Trek</span> — 15 days at <span className="font-bold text-[#cf6943]">$1,395</span>. Trek to the sacred alpine lakes of Gosainkunda, an important Hindu pilgrimage site.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Price Range:</span> $650 - $1,395</div>
                        <div><span className="font-medium text-[#cf6943]">Duration:</span> 8-15 days</div>
                        <div><span className="font-medium text-[#cf6943]">Max Altitude:</span> 5,106m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/langtang-valley-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Langtang Trek →
                      </Button>
                    </Link>
                  </section>

                  {/* Manaslu Region */}
                  <section id="manaslu" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Manaslu Region Treks ($1,200 - $2,050)
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/manaslu-main-page.webp"
                          alt="Manaslu Circuit trek with mountain views and Himalayan landscape"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Manaslu Circuit trek with Himalayan landscape
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Less crowded and more remote than the Annapurna or Everest regions, the Manaslu region offers pristine wilderness and authentic Tibetan-Buddhist culture.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      <span className="font-bold text-[#14383b]">Manaslu Circuit Trek</span> — 12 days at <span className="font-bold text-[#cf6943]">$1,200</span>. Circle the world's eighth highest mountain through pristine wilderness and authentic Tibetan culture.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      <span className="font-bold text-[#14383b]">Manaslu Circuit with Tsum Valley</span> — 17 days at <span className="font-bold text-[#cf6943]">$2,050</span>. Combine the Manaslu Circuit with the sacred Tsum Valley for an extended cultural adventure.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Price Range:</span> $1,200 - $2,050</div>
                        <div><span className="font-medium text-[#cf6943]">Duration:</span> 12-17 days</div>
                        <div><span className="font-medium text-[#cf6943]">Max Altitude:</span> 5,106m</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/manaslu-circuit-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Manaslu Trek →
                      </Button>
                    </Link>
                  </section>

                  {/* Hidden Costs */}
                  <section id="hidden-costs" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Hidden Costs to Budget For
                    </h2>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Here's where most first-time trekkers get caught out. The package price covers the essentials, but these extras add up quickly:
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
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">National Park Permit</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 3,000-4,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$23-30</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Lukla Flight (Round Trip)</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 40,000-55,000</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$300-400</td>
                            </tr>
                            <tr className="border-b border-[#d8cec0]/30 hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Travel Insurance</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 6,500-10,500</td>
                              <td className="p-2 sm:p-3 text-[#556363]">$50-80</td>
                            </tr>
                            <tr className="hover:bg-[#e4d8c8]/50 transition-colors">
                              <td className="p-2 sm:p-3 font-medium text-[#14383b]">Tips (Guide + Porter)</td>
                              <td className="p-2 sm:p-3 text-[#556363]">NPR 12,000-20,000</td>
                              <td className="p-2 sm:p-3 font-bold text-[#cf6943]">$100-150</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                      <h4 className="font-bold text-[#14383b] flex items-center gap-2 mb-1.5 sm:mb-2 text-sm sm:text-base">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943]" /> Budget Tips to Save Money
                      </h4>
                      <ul className="text-[#556363] text-xs sm:text-sm leading-relaxed space-y-1 sm:space-y-1.5 list-disc pl-4 sm:pl-5">
                        <li><span className="font-medium text-[#14383b]">Trek in a group</span> — More people = lower per-person cost</li>
                        <li><span className="font-medium text-[#14383b]">Travel during off-season</span> — Flights and tea houses are cheaper</li>
                        <li><span className="font-medium text-[#14383b]">Book early</span> — Early bird discounts available</li>
                        <li><span className="font-medium text-[#14383b]">Use local transport</span> — Buses are cheaper than private jeeps</li>
                      </ul>
                    </div>
                  </section>

                  {/* FAQ Section */}
                  <section id="faq" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">What's included in your trek package prices?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Our packages include airport transfers, Kathmandu to trailhead transport, tea house accommodation during the trek, all meals (breakfast, lunch, dinner), English-speaking guide, porter service, TIMS card and national park permits, first aid kit, and insurance for guides and porters.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">What's not included?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          International flights, Nepal visa, travel insurance, personal gear, tips for guides and porters, drinks (water, tea, beer), and hot showers or battery charging at tea houses.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Do I need travel insurance?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Yes, absolutely. You must have travel insurance that covers trekking at altitude (up to 5,500m), emergency helicopter evacuation, and medical expenses. This is non-negotiable.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">How much should I tip my guide and porter?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Industry standard is 10-15% of your total trek cost, split between your guide and porter. For a $1,500 trek, budget $150-200 for tips. This makes a huge difference to their families.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
                      <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/gokyo-1.webp"
                          alt="Gokyo Lakes turquoise water with Himalayan mountains"
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={70}
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                        />
                      </div>
                      <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/gokyo-2.webp"
                          alt="Himalayan mountain range at sunrise with golden light"
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
                      <Calculator className="w-4 h-4 text-[#cf6943]" /> Contents
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
                      Ready to Book Your Trek?
                    </h3>
                    <p className="text-[#556363] text-xs sm:text-sm mb-3 sm:mb-4">
                      Himkala Adventure offers transparent pricing with no hidden fees. Book your 2026 trek today.
                    </p>
                    <Link href="/services/trekking" className="block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] w-full rounded-none text-xs sm:text-sm active:scale-[0.98] transition-transform">
                        View All Treks
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