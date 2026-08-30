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
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
  excerpt: "Nepal has a trek for every level of experience. Despite its reputation for giant peaks and extreme altitudes, some of the most rewarding adventures are easily within reach for first-timers – with only a moderate level of fitness required. From single-day sunrise hikes to multi-day routes deep into the Himalayas, these five treks are the ones worth considering.",
  heroImage: "/images/used/manaslu-main-page.webp",
  author: {
    name: "Meg Cassidy",
  },
  date: "May 24, 2026",
  readTime: "14 min read",
  category: "Trekking Guide",
  tags: ["Beginner Treks", "Nepal Trekking", "Nagarkot", "Poon Hill", "Mardi Himal", "Langtang", "Namobuddha", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "Trekking for Everyone" },
  { id: "nagarkot", title: "Nagarkot to Changunarayan" },
  { id: "namobuddha", title: "Namobuddha Day Hike" },
  { id: "poonhill", title: "Ghorepani Poon Hill Trek" },
  { id: "mardi", title: "Mardi Himal Trek" },
  { id: "langtang", title: "Langtang Valley Trek" },
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
    datePublished: "2026-05-24",
    dateModified: "2026-05-24",
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
      "@id": "https://www.himkalaadventure.com/blog/best-beginner-treks-nepal",
    },
    keywords:
      "beginner treks Nepal, Nagarkot trek, Poon Hill trek, Mardi Himal trek, Langtang Valley trek, Nepal trekking guide, first-time trekker Nepal",
    articleSection: "Trekking Guide",
    about: {
      "@type": "Thing",
      name: "Trekking in Nepal",
    },
  };

  return (
    <>
      <Head>
        <title>5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers</title>
        <meta name="description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/best-beginner-treks-nepal" />
        <meta property="og:title" content="5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers" />
        <meta property="og:description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog/best-beginner-treks-nepal" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers" />
        <meta name="twitter:description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
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
                      Nepal has a trek for every level of experience. Despite its reputation for giant peaks and extreme altitudes, some of the most rewarding adventures are easily within reach for first-timers – with only a moderate level of fitness required.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      These five treks are the ones worth considering. They range from single-day hikes a short drive from Kathmandu to multi-day routes deep into the Himalayas. Through rhododendron forests, traditional villages and with views of the Himalayas as your backdrop. All are guided, with permits, accommodation and navigation taken care of before you set foot on the trail.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      Whether you have just one day or a full week, whether you want sunrise views over Everest or the spiritual calm of an ancient monastery, there's a trek here waiting for you. Let's find the one that fits.
                    </p>
                  </section>

                  {/* Nagarkot to Changunarayan */}
                  <section id="nagarkot" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Nagarkot to Changunarayan – Sunrise Views at Nepal's Oldest Sacred Temple
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/nagarkot-changu.webp"
                          alt="Sunrise view from Nagarkot with Himalayan peaks"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Sunrise from Nagarkot
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Your day starts at 4:30 AM for the sunrise, but the early alarm is worth it. This mostly downhill hike allows you to witness one of Kathmandu Valley's best sunrise viewpoints with Nepal's oldest standing temple, and it's one of the most manageable routes for someone with little to no trekking experience.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The drive from Kathmandu takes around 90 minutes, timed to arrive at Nagarkot just as the sky begins to lighten for morning. At 2,175m, the viewpoint stretches from Annapurna in the west to Everest in the east and on clear days you'll count dozens of distant peaks catching the sun.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      From Nagarkot, the trail drops steadily through pine forests, farmlands and traditional villages across roughly 12 to 15 kilometres of mostly downhill walking, making the total hike around 5 to 6 hours at a relaxed pace. The hike ends at Changunarayan – Nepal's oldest Hindu temple, perched above the valley with 4th century carvings etched on its walls.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mb-3 sm:mb-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> One day</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 2,175m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> September to May</div>
                      </div>
                    </div>

                    <Link href="/services/day-hikings/nagarkot-changunarayan-hiking" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Nagarkot Hike Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Namobuddha */}
                  <section id="namobuddha" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Namobuddha – Witness Culture and History Like No Other
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/namobuddha-1.webp"
                          alt="Thrangu Tashi Yangtse Monastery at Namobuddha"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Namobuddha Monastery
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Not every great trek in Nepal is about the altitude. Namobuddha is one of the most sacred Buddhist pilgrimage sites in the country and consists of a single day climb through rural farmlands and thick pine forests to an ancient monastery that has been drawing religious pilgrims for over 2,000 years.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The hike starts near Dhulikhel – around 40 kilometres from Kathmandu, and is a gentle ascent of around 400 metres across 1.5 to 2 hours.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      At the top, the Thrangu Tashi Yangtse Monastery stands alongside the ancient stupa, golden rooftops catching the light above the treeline. Inside, over 250 monks study, pray and live and the chanting carries across the courtyard, occasionally punctuated by rhythmic strikes of a drum.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> One day</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 1,750m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> September to May</div>
                      </div>
                    </div>

                    <Link href="/services/day-hikings/namobuddha-hiking" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Namobuddha Hike Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Ghorepani Poon Hill */}
                  <section id="poonhill" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Ghorepani Poon Hill Trek – Sunrise Views of Annapurna's Mountain Range
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/ghorepani-2.webp"
                          alt="Sunrise from Poon Hill with Annapurna range"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Sunrise from Poon Hill
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      If you've been looking for a sign to book your first multi-day trek, this is it.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The Ghorepani Poon Hill Trek takes around 6 days and is one of the best multi-day treks for beginners, with some of the best views across the Annapurna Conservation area, at a moderate altitude, making it the ideal first multi-day trek for those with little to no experience of altitude or sustained uphill walking.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      On day four, you'll experience the pre-dawn climb to Poon Hill – a 45-minute push up stone steps in the dark. Near the top, the sky begins to shift to deep purple with Annapurna I emerging slowly from the dark. By the time the sun clears the horizon, both Annapurna I and II are lit up in full from the top of Poon Hill.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> 6 day tour, 4 days trekking</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy for multi-day</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 3,210m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/ghorepani-poon-hill-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Poon Hill Trek Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Mardi Himal */}
                  <section id="mardi" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Mardi Himal Trek – A Less Travelled Gem of the Annapurna Region
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/mardi-3.webp"
                          alt="Machhapuchhre from Mardi Himal trail"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Machhapuchhre from Mardi
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Poon Hill is the obvious first multi-day trek in the Annapurna region – and for good reason. But if you have a week and the need for a bigger challenge, Mardi Himal is what you're searching for.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      The final push to Mardi Himal Base Camp at 4,500m is where the trek earns its reputation — the altitude bites, the gradient steepens, and the hours add up. But above 4,000m, with Machhapuchhre towering directly ahead and the Annapurna range laid out behind you, whatever the climb took out of you, the view puts back.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> 7 days</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 4,500m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/mardi-himal-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Mardi Himal Trek Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Langtang Valley */}
                  <section id="langtang" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Langtang – Trek the 'Valley of Glaciers' Only a Few Hours from Kathmandu
                    </h2>

                    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/langtang-2.webp"
                          alt="Views from Kyanjin Ri"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Views from Kyanjin Ri
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Langtang doesn't get the same headlines as Everest or Annapurna – and that's exactly what makes it worth the attention. A few hours north of Kathmandu, it offers dramatic glacial scenery, dense rhododendron forest and deeply rooted Tibetan-Buddhist culture in a shorter timeframe, with fewer trekkers along the trail, making it a quieter, more peaceful slow ascend.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      At 3,870m, the valley opens out at Kyanjin Gompa — the last permanent settlement on the trek, and one of its most memorable stops. The monastery was rebuilt after the 2015 earthquake and sits surrounded by prayer flags, mani walls and ancient stupas, with Langtang Lirung filling the sky beyond.
                    </p>

                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> 8 days</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 5,033m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/langtang-valley-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-none px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs tracking-[.14em] font-bold active:scale-[0.98] transition-transform">
                        Book Your Langtang Trek Today →
                      </Button>
                    </Link>
                  </section>

                  {/* FAQ Section */}
                  <section id="faq" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Do I need a guide to trek in Nepal?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          For many routes, yes, and in some cases it's now a legal requirement. Trekking in the Annapurna Conservation Area now requires a licensed guide by law, as does Langtang National Park since 2023. Even on trails where a guide isn't mandatory, hiring one is strongly recommended – particularly for first-time trekkers.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">How physically fit do I need to be?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Only a moderate level of fitness is required for all of these treks and you don't need to be an athlete. Some experience with full-day hikes carrying your backpack will make all the difference to your experience.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">What should I pack?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          It will depend on the season and altitude. Generally, sturdy hiking boots, walking trousers and base layers, a fleece, and a down jacket for the colder evenings at altitude are recommended. Gloves, a hat and extra pairs of wool socks are also recommended. Pack light, and only bring what you think you need.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
                      <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/annapurna-circuit-3.webp"
                          alt="Trekker on a mountain ridge with panoramic Himalayan views"
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={70}
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                        />
                      </div>
                      <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/gokyo-3.webp"
                          alt="Himalayan mountain range at golden hour"
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
                      <Mountain className="w-4 h-4 text-[#cf6943]" /> Contents
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
                      Ready for Your First Trek?
                    </h3>
                    <p className="text-[#556363] text-xs sm:text-sm mb-3 sm:mb-4">
                      Let Himkala Adventure guide you on the perfect beginner trek tailored to your fitness and interests.
                    </p>
                    <Link href="/services/trekking" className="block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] w-full rounded-none text-xs sm:text-sm active:scale-[0.98] transition-transform">
                        Plan My Trek
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