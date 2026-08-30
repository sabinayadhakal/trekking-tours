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
  ArrowLeft,
  Share2,
  Facebook,
  Camera,
  Twitter,
  Copy,
  Check,
  Tag,
  Menu,
  X,
  Heart,
  Instagram,
  MoveUpRight,
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
    avatar: "/placeholder.svg?text=MC",
    linkedin: "https://www.linkedin.com/in/meg-c-bbb136294?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
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
  {
    title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
    image: "/images/used/historic-scenic-photography-nepal.webp",
    date: "May 7, 2026",
    readTime: "9 min",
    href: "/blog/best-time-to-visit-nepal",
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
        <title>5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers</title>
        <meta name="description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/best-beginner-treks-nepal" />
        <meta property="og:title" content="5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers" />
        <meta property="og:description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/blog/best-beginner-treks-nepal" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta property="article:published_time" content="2026-05-24" />
        <meta property="article:author" content="Meg Cassidy" />
        <meta property="article:tag" content="Beginner Treks" />
        <meta property="article:tag" content="Nepal Trekking" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers" />
        <meta name="twitter:description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
              "description": "Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness.",
              "image": "https://www.himkalaadventure.com/images/used/manaslu-main-page.webp",
              "datePublished": "2026-05-24",
              "dateModified": "2026-05-24",
              "author": {
                "@type": "Person",
                "name": "Meg Cassidy",
                "url": "https://www.linkedin.com/in/meg-c-bbb136294"
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
                "@id": "https://www.himkalaadventure.com/blog/best-beginner-treks-nepal"
              },
              "keywords": "beginner treks Nepal, Nagarkot trek, Poon Hill trek, Mardi Himal trek, Langtang Valley trek, Nepal trekking guide, first-time trekker Nepal",
              "articleSection": "Trekking Guide",
              "about": {
                "@type": "Thing",
                "name": "Trekking in Nepal"
              }
            })
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        {/* Mobile Table of Contents Drawer */}
        {showMobileTOC && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobileTOC(false)}
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
                      aria-label={`Scroll to ${item.title}`}
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
                      className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white active:scale-[0.98] transition-transform"
                      onClick={() => handleShare("twitter")}
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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

        {/* Page Header - Simple, clean */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 border-b border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-6">
              <div>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[#cf6943] hover:text-[#b85a38] text-xs sm:text-sm font-medium mb-3 sm:mb-4 active:text-[#b85a38] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to Blog
                </Link>
                
                <Badge className="mb-3 sm:mb-4 bg-[#14383b] text-[#f0a17f] border-none text-[10px] sm:text-xs">
                  <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5" /> {blogPost.category}
                </Badge>
                
                <h1 className="font-serif text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.1] sm:leading-[1.05] tracking-[-.03em] sm:tracking-[-.035em] text-[#14383b]">
                  {blogPost.title}
                </h1>
              </div>
            </div>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-[#556363]">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#cf6943]/30 bg-[#e4d8c8] flex items-center justify-center">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#cf6943]" />
                </div>
                <span className="font-medium text-[#14383b]">{blogPost.author.name}</span>
              </div>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943]" /> 
                <span>{blogPost.date}</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943]" /> 
                {blogPost.readTime}
              </span>
              {/* Mobile TOC Trigger */}
              <button
                onClick={() => setShowMobileTOC(true)}
                className="lg:hidden inline-flex items-center gap-1.5 text-[#cf6943] hover:text-[#b85a38] text-xs font-medium active:text-[#b85a38] transition-colors"
              >
                <Menu className="w-3.5 h-3.5" /> Contents
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Sidebar - Table of Contents (Desktop only) */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24 space-y-5 sm:space-y-6">
                  <Card className="bg-[#f7f2e9] border-[#d8cec0]/50 rounded-xl sm:rounded-2xl overflow-hidden">
                    <CardContent className="p-5 sm:p-6">
                      <h2 className="font-bold text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                        <Mountain className="w-4 h-4 text-[#cf6943]" /> Table of Contents
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
                            aria-label={`Scroll to ${item.title}`}
                          >
                            {item.title}
                          </button>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#0d2427] to-[#14383b] border-none rounded-xl sm:rounded-2xl overflow-hidden">
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="font-bold text-[#f7f2e9] mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                        <Share2 className="w-4 h-4 text-[#f0a17f]" /> Share Article
                      </h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-xl active:scale-[0.98] transition-transform"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-xl active:scale-[0.98] transition-transform"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#f7f2e9]/10 hover:bg-[#f7f2e9]/20 text-[#f7f2e9] rounded-xl active:scale-[0.98] transition-transform"
                          onClick={handleCopyLink}
                          aria-label="Copy link to article"
                        >
                          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Himkala Adventure Callout */}
                  <Card className="bg-gradient-to-br from-[#e47a4f]/20 to-[#cf6943]/20 border-[#e47a4f]/30 rounded-xl sm:rounded-2xl overflow-hidden">
                    <CardContent className="p-5 sm:p-6 text-center">
                      <Mountain className="w-7 h-7 sm:w-8 sm:h-8 text-[#cf6943] mx-auto mb-2 sm:mb-3" />
                      <h3 className="font-bold text-[#14383b] mb-1 sm:mb-2 text-sm sm:text-base">Ready for Your First Trek?</h3>
                      <p className="text-[#556363] text-xs sm:text-sm mb-3 sm:mb-4">
                        Let Himkala Adventure guide you on the perfect beginner trek tailored to your fitness and interests.
                      </p>
                      <Link href="/services/trekking" className="block">
                        <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] w-full rounded-xl text-xs sm:text-sm active:scale-[0.98] transition-transform">
                          Plan My Trek
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-9 overflow-x-hidden">
                <div className="max-w-full prose prose-sm sm:prose-base prose-slate prose-headings:font-serif prose-headings:text-[#14383b] prose-a:text-[#cf6943] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#14383b]">
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
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9] shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                      Nagarkot to Changunarayan – Sunrise Views at Nepal's Oldest Sacred Temple
                    </h2>
                    
                    <div className="float-right ml-4 sm:ml-5 md:ml-6 mb-3 sm:mb-4 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/nagarkot-changu.webp"
                          alt="Sunrise view from Nagarkot with Himalayan peaks"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
                          loading="lazy"
                          quality={70}
                        />
                        <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded truncate">
                          <Camera className="w-2.5 h-2.5 inline mr-0.5" /> Sunrise from Nagarkot
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Your day starts at 4:30 AM for the sunrise, but the early alarm is worth it. This mostly downhill hike allows you to witness one of Kathmandu Valley's best sunrise viewpoints with Nepal's oldest standing temple, and it's one of the most manageable routes for someone with little to no trekking experience.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The drive from Kathmandu takes around 90 minutes, timed to arrive at Nagarkot just as the sky begins to lighten for morning. At 2,175m, the viewpoint stretches from Annapurna in the west to Everest in the east and on clear days you'll count dozens of distant peaks catching the sun. You'll stop for breakfast – black tea steaming with the air sharp and a little chilly as snowcapped peaks catch the sunrise.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      From Nagarkot, the trail drops steadily through pine forests, farmlands and traditional villages across roughly 12 to 15 kilometres of mostly downhill walking, making the total hike around 5 to 6 hours at a relaxed pace.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The hike ends at Changunarayan – Nepal's oldest Hindu temple, perched above the valley with 4th century carvings etched on its walls. Built by King Mandev of the Licchavi dynasty and dedicated to Lord Vishnu, it has been continuously worshipped for over 1,700 years. After the tour, you can enjoy a late lunch before the driver will take your group back to Kathmandu, giving you the rest of the afternoon to further explore the city before sunset.
                    </p>
                    
                    <div className="clear-both"></div>

                    <div className="bg-[#e4d8c8] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-3 sm:mb-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> One day</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 2,175m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> September to May</div>
                      </div>
                    </div>

                    <Link href="/services/day-hikings/nagarkot-changunarayan-hiking" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm active:scale-[0.98] transition-transform">
                        Book Your Nagarkot to Changunarayan Hike Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Namobuddha */}
                  <section id="namobuddha" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9] shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                      Namobuddha – Witness Culture and History Like No Other
                    </h2>

                    <div className="float-right ml-4 sm:ml-5 md:ml-6 mb-3 sm:mb-4 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/namobuddha-1.webp"
                          alt="Thrangu Tashi Yangtse Monastery at Namobuddha"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
                          loading="lazy"
                          quality={70}
                        />
                        <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded truncate">
                          <Camera className="w-2.5 h-2.5 inline mr-0.5" /> Namobuddha Monastery
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Not every great trek in Nepal is about the altitude. Namobuddha is one of the most sacred Buddhist pilgrimage sites in the country and consists of a single day climb through rural farmlands and thick pine forests to an ancient monastery that has been drawing religious pilgrims for over 2,000 years.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The hike starts near Dhulikhel – around 40 kilometres from Kathmandu, and is a gentle ascent of around 400 metres across 1.5 to 2 hours.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      At the top, the Thrangu Tashi Yangtse Monastery stands alongside the ancient stupa, golden rooftops catching the light above the treeline. Inside, over 250 monks study, pray and live and the chanting carries across the courtyard, occasionally punctuated by rhythmic strikes of a drum.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      The pace throughout is gentle and the atmosphere at the top is unlike anything near Kathmandu. For those drawn to the spiritual and cultural side of Nepal as much as the mountains, this experience is one to stick with you.
                    </p>

                    <div className="clear-both"></div>
                    
                    <div className="bg-[#e4d8c8] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> One day</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 1,750m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> September to May</div>
                      </div>
                    </div>

                    <Link href="/services/day-hikings/namobuddha-hiking" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm active:scale-[0.98] transition-transform">
                        Book Your Namobuddha Day Hike Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Ghorepani Poon Hill */}
                  <section id="poonhill" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9] shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                      Ghorepani Poon Hill Trek – Sunrise Views of Annapurna's Mountain Range
                    </h2>

                    <div className="float-right ml-4 sm:ml-5 md:ml-6 mb-3 sm:mb-4 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/ghorepani-2.webp"
                          alt="Sunrise from Poon Hill with Annapurna range"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
                          loading="lazy"
                          quality={70}
                        />
                        <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded truncate">
                          <Camera className="w-2.5 h-2.5 inline mr-0.5" /> Sunrise from Poon Hill
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      If you've been looking for a sign to book your first multi-day trek, this is it.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The Ghorepani Poon Hill Trek takes around 6 days and is one of the best multi-day treks for beginners, with some of the best views across the Annapurna Conservation area, at a moderate altitude, making it the ideal first multi-day trek for those with little to no experience of altitude or sustained uphill walking.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The trek starts with a ride from Pokhara to Nayapul and you begin by moving through rhododendron forests and traditional Gurung villages over four days of trekking. You'll be hiking well-worn trails, resting in warm teahouses, and enjoy the daily Dal Bhat to power you through the day. The trail also passes through Ghandruk, one of the most beautiful Gurung villages in the Annapurna region, with a small museum dedicated to the local culture and history.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      On day four, you'll experience the pre-dawn climb to Poon Hill – a 45-minute push up stone steps in the dark, headtorch on, the trail quiet except for the sound of fellow trekkers making the same ascent. Near the top, the sky begins to shift to deep purple with Annapurna I emerging slowly from the dark, still blanketed by dozens of stars. By the time the sun clears the horizon, both Annapurna I and II are lit up in full from the top of Poon Hill.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      Trek this route in spring and the forests come alive with rhododendrons lining the trail in deep red, pink and white from the valley floor all the way up to Ghorepani.
                    </p>

                    <div className="clear-both"></div>
                    
                    <div className="bg-[#e4d8c8] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> 6 day tour, 4 days trekking</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy for multi-day</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 3,210m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/ghorepani-poon-hill-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm active:scale-[0.98] transition-transform">
                        Book Your Ghorepani Poon Hill Trek Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Mardi Himal */}
                  <section id="mardi" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9] shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                      Mardi Himal Trek – A Less Travelled Gem of the Annapurna Region
                    </h2>

                    <div className="float-right ml-4 sm:ml-5 md:ml-6 mb-3 sm:mb-4 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/mardi-3.webp"
                          alt="Machhapuchhre from Mardi Himal trail"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
                          loading="lazy"
                          quality={70}
                        />
                        <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded truncate">
                          <Camera className="w-2.5 h-2.5 inline mr-0.5" /> Machhapuchhre from Mardi
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Poon Hill is the obvious first multi-day trek in the Annapurna region – and for good reason. But if you have a week and the need for a bigger challenge, Mardi Himal is what you're searching for.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      The trail climbs out of Pokhara through dense rhododendron and oak forest, rising gradually through Low Camp and Forest Camp before breaking above the tree line onto an open ridge. The teahouses at High Camp are basic and exposed, and the air is noticeably thinner by this point of the trek. Machhapuchhre will shadow you in the sky, the distinctive double summit unmistakable, with the full Annapurna range stretching out behind it.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      The final push to Mardi Himal Base Camp at 4,500m is where the trek earns its reputation — the altitude bites, the gradient steepens, and the hours add up. But above 4,000m, with Machhapuchhre towering directly ahead and the Annapurna range laid out behind you, whatever the climb took out of you, the view puts back. Standing at the base of a 5,587m peak with nothing but open sky and towering mountains in every direction – the kind of morning views that Nepal rewards trekkers with.
                    </p>

                    <div className="clear-both"></div>
                    
                    <div className="bg-[#e4d8c8] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> 7 days</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 4,500m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/mardi-himal-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm active:scale-[0.98] transition-transform">
                        Book Your Mardi Himal Trek Today →
                      </Button>
                    </Link>
                  </section>

                  {/* Langtang Valley */}
                  <section id="langtang" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9] shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                      Langtang – Trek the 'Valley of Glaciers' Only a Few Hours from Kathmandu
                    </h2>

                    <div className="float-right ml-4 sm:ml-5 md:ml-6 mb-3 sm:mb-4 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px] rounded-lg overflow-hidden">
                        <Image
                          src="/images/used/langtang-2.webp"
                          alt="Views from Kyanjin Ri"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
                          loading="lazy"
                          quality={70}
                        />
                        <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded truncate">
                          <Camera className="w-2.5 h-2.5 inline mr-0.5" /> Views from Kyanjin Ri
                        </div>
                      </div>
                    </div>

                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Langtang doesn't get the same headlines as Everest or Annapurna – and that's exactly what makes it worth the attention. A few hours north of Kathmandu, it offers dramatic glacial scenery, dense rhododendron forest and deeply rooted Tibetan-Buddhist culture in a shorter timeframe, with fewer trekkers along the trail, making it a quieter, more peaceful slow ascend.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      From Syabrubesi the trail climbs through dense bamboo forest before opening into alpine meadows. Traditional Tamang villages line the route – distinct wooden architecture and local crafts, making it feel far removed from the bustle of Kathmandu. The forest is also one of the last habitats in Nepal where Red Pandas and Himalayan Black Bears still roam — rare, but reason enough to keep your eyes on the treeline.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      At 3,870m, the valley opens out at Kyanjin Gompa — the last permanent settlement on the trek, and one of its most memorable stops. The monastery was rebuilt after the 2015 earthquake and sits surrounded by prayer flags, mani walls and ancient stupas, with Langtang Lirung filling the sky beyond. Before continuing your journey, try the famous yak cheese produced at the village factory.
                    </p>
                    <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                      Beyond Kyanjin, the trail gives way to alpine pastures and glaciers. You can choose to trek to Kyanjin Ri at 4,773m – which is a manageable route once you've acclimatised. Or for the adventurous trekkers, to Tserko Ri – a strenuous, full-day ascent.
                    </p>

                    <div className="clear-both"></div>
                    
                    <div className="bg-[#e4d8c8] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 my-3 sm:my-4">
                      <h4 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#556363]">
                        <div><span className="font-medium text-[#cf6943]">Time:</span> 8 days</div>
                        <div><span className="font-medium text-[#cf6943]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#cf6943]">Max altitude:</span> 5,033m</div>
                        <div><span className="font-medium text-[#cf6943]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/langtang-valley-trek" className="inline-block">
                      <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm active:scale-[0.98] transition-transform">
                        Book Your Langtang Valley Trek Today →
                      </Button>
                    </Link>
                  </section>

                  {/* FAQ Section */}
                  <section id="faq" className="mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#14383b] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded-lg flex items-center justify-center text-[#f7f2e9] shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                      <div className="bg-[#f7f2e9] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Do I need a guide to trek in Nepal?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          For many routes, yes, and in some cases it's now a legal requirement. Trekking in the Annapurna Conservation Area now requires a licensed guide by law, as does Langtang National Park since 2023. Even on trails where a guide isn't mandatory, hiring one is strongly recommended – particularly for first-time trekkers. A licensed guide arranges teahouse accommodation, handles permits, and knows the terrain. That last part matters more than most beginners expect. It's also vital that you research the correct permits – though with Himkala Adventure, this is organised ahead of time to ensure you have a smooth, enjoyable trip.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">How physically fit do I need to be?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Only a moderate level of fitness is required for all of these treks and you don't need to be an athlete. Some experience with full-day hikes carrying your backpack will make all the difference to your experience.
                        </p>
                      </div>

                      <div className="bg-[#f7f2e9] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                        <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">What should I pack?</h3>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
                          It will depend on the season and altitude and it's always good to check with your guide prior to commencing the tour. Generally, sturdy hiking boots, walking trousers and base layers, a fleece, and a down jacket for the colder evenings at altitude are recommended. Gloves, a hat and extra pairs of wool socks are also recommended.
                        </p>
                        <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                          Beyond clothing, you can bring: toilet roll and personal toiletries, snacks, medication and electrolytes, a battery pack and chargers, enough cash (ATMs will not be available on any of the treks), and some personal entertainment for quiet evenings in the teahouses. Pack light, and only bring what you think you need. There are also many trekking stores in Kathmandu and Pokhara to buy or rent gear such as poles, downjackets and hiking boots, all of which can be arranged prior to beginning your chosen trek.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/annapurna-circuit-3.webp"
                          alt="Trekker on a mountain ridge with panoramic Himalayan views"
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={65}
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                        />
                      </div>
                      <div className="relative h-[100px] sm:h-[130px] md:h-[160px] rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/gokyo-3.webp"
                          alt="Himalayan mountain range at golden hour"
                          fill
                          className="object-cover"
                          loading="lazy"
                          quality={65}
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Author Card */}
                  <Card className="bg-gradient-to-br from-[#f7f2e9] to-[#e4d8c8] border-[#d8cec0]/50 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center sm:items-start">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border-4 border-[#f7f2e9] shadow-lg flex items-center justify-center bg-[#14383b]/10">
                          <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#cf6943]" />
                        </div>
                        <div className="text-center sm:text-left">
                          <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#cf6943] uppercase tracking-wider mb-0.5 sm:mb-1 md:mb-2">Written By</p>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#14383b] mb-0.5 sm:mb-1">{blogPost.author.name}</h3>
                          <a 
                            href={blogPost.author.linkedin}
                            target="_blank" 
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#cf6943] hover:text-[#14383b] transition-colors mt-1 sm:mt-2 active:text-[#14383b]"
                            aria-label="Connect with Meg Cassidy on LinkedIn"
                          >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                            </svg>
                            Meg Cassidy on LinkedIn
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mobile Share Buttons */}
                  <div className="lg:hidden mt-4 sm:mt-5 md:mt-6">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white text-xs sm:text-sm active:scale-[0.98] transition-transform"
                          onClick={() => handleShare("facebook")}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Share
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white text-xs sm:text-sm active:scale-[0.98] transition-transform"
                          onClick={() => handleShare("twitter")}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Tweet
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#d8cec0] text-[#14383b] hover:bg-[#e4d8c8] text-xs sm:text-sm active:bg-[#e4d8c8] active:scale-[0.98] transition-transform"
                        onClick={handleCopyLink}
                        aria-label="Copy link to article"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Link Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Copy Link
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                    {blogPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-[#d8cec0] text-[#556363] hover:bg-[#e4d8c8] active:bg-[#e4d8c8] cursor-pointer rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs md:text-sm">
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
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-[#cf6943] uppercase tracking-[0.2em]">Continue Your Journey</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#14383b] mt-1 sm:mt-2">
                  More Insights <span className="text-[#cf6943]">from Us</span>
                </h2>
              </div>
              <Link href="/blog" className="flex items-center gap-1.5 sm:gap-2 text-[#cf6943] hover:text-[#b85a38] text-xs sm:text-sm font-medium active:text-[#b85a38] transition-colors">
                View All Articles <MoveUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {relatedPosts.map((post, i) => (
                <Link href={post.href} key={i} className="block active:scale-[0.99] transition-transform">
                  <Card className="bg-[#f7f2e9] border-[#d8cec0]/50 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-[#14383b]/10 transition-all duration-300 group cursor-pointer">
                    <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                        quality={65}
                      />
                    </div>
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#14383b] mb-1.5 sm:mb-2 md:mb-3 leading-snug group-hover:text-[#cf6943] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-[#556363]">
                        <span className="flex items-center gap-0.5 sm:gap-1">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-0.5 sm:gap-1">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {post.readTime}
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

      <style jsx global>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </>
  );
}