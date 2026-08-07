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
  TrendingUp
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
        {/* Primary SEO */}
        <title>5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers</title>
        <meta name="description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <link rel="canonical" href="https://www.himkalaadventure.com/blog/best-beginner-treks-nepal" />
        
        {/* Open Graph Tags */}
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
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 Best Beginner Treks in Nepal | Trekking Guide for First-Timers" />
        <meta name="twitter:description" content="Discover the 5 best beginner treks in Nepal including Nagarkot, Poon Hill, Mardi Himal, and Langtang Valley. Perfect for first-time trekkers with moderate fitness." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/manaslu-main-page.webp" />
        
        {/* Schema.org - BlogPosting Schema */}
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
              alt="Beginner trekking in Nepal - Himalayan mountains and trails"
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
                <Tag className="w-3 h-3 mr-1.5" /> {blogPost.category}
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
                        <Mountain className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
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
                      <h3 className="font-bold text-amber-800 mb-2">Ready for Your First Trek?</h3>
                      <p className="text-amber-700 text-sm mb-4">
                        Let Himkala Adventure guide you on the perfect beginner trek tailored to your fitness and interests.
                      </p>
                      <Link href="/services/trekking" className="block">
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl">
                          Plan My Trek
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
                      Nepal has a trek for every level of experience. Despite its reputation for giant peaks and extreme altitudes, some of the most rewarding adventures are easily within reach for first-timers – with only a moderate level of fitness required.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      These five treks are the ones worth considering. They range from single-day hikes a short drive from Kathmandu to multi-day routes deep into the Himalayas. Through rhododendron forests, traditional villages and with views of the Himalayas as your backdrop. All are guided, with permits, accommodation and navigation taken care of before you set foot on the trail.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Whether you have just one day or a full week, whether you want sunrise views over Everest or the spiritual calm of an ancient monastery, there's a trek here waiting for you. Let's find the one that fits.
                    </p>
                  </section>

                  {/* Nagarkot to Changunarayan */}
                  <section id="nagarkot" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Nagarkot to Changunarayan – Sunrise Views at Nepal's Oldest Sacred Temple
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Your day starts at 4:30 AM for the sunrise, but the early alarm is worth it. This mostly downhill hike allows you to witness one of Kathmandu Valley's best sunrise viewpoints with Nepal's oldest standing temple, and it's one of the most manageable routes for someone with little to no trekking experience.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The drive from Kathmandu takes around 90 minutes, timed to arrive at Nagarkot just as the sky begins to lighten for morning. At 2,175m, the viewpoint stretches from Annapurna in the west to Everest in the east and on clear days you'll count dozens of distant peaks catching the sun. You'll stop for breakfast – black tea steaming with the air sharp and a little chilly as snowcapped peaks catch the sunrise.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      From Nagarkot, the trail drops steadily through pine forests, farmlands and traditional villages across roughly 12 to 15 kilometres of mostly downhill walking, making the total hike around 5 to 6 hours at a relaxed pace.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The hike ends at Changunarayan – Nepal's oldest Hindu temple, perched above the valley with 4th century carvings etched on its walls. Built by King Mandev of the Licchavi dynasty and dedicated to Lord Vishnu, it has been continuously worshipped for over 1,700 years. After the tour, you can enjoy a late lunch before the driver will take your group back to Kathmandu, giving you the rest of the afternoon to further explore the city before sunset.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 mb-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Time:</span> One day</div>
                        <div><span className="font-medium text-[#2d6a8a]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max altitude:</span> 2,175m</div>
                        <div><span className="font-medium text-[#2d6a8a]">Best season:</span> September to May</div>
                      </div>
                    </div>

                    <Link href="/services/day-hikings/nagarkot-changunarayan-hiking" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Nagarkot to Changunarayan Hike Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/nagarkot-changu.webp"
                        alt="Sunrise view from Nagarkot with Himalayan peaks in Nepal"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Sunrise over the Himalayas from Nagarkot viewpoint
                      </div>
                    </div>
                  </section>

                  {/* Namobuddha */}
                  <section id="namobuddha" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Namobuddha – Witness Culture and History Like No Other
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Not every great trek in Nepal is about the altitude. Namobuddha is one of the most sacred Buddhist pilgrimage sites in the country and consists of a single day climb through rural farmlands and thick pine forests to an ancient monastery that has been drawing religious pilgrims for over 2,000 years.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The hike starts near Dhulikhel – around 40 kilometres from Kathmandu, and is a gentle ascent of around 400 metres across 1.5 to 2 hours.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      At the top, the Thrangu Tashi Yangtse Monastery stands alongside the ancient stupa, golden rooftops catching the light above the treeline. Inside, over 250 monks study, pray and live and the chanting carries across the courtyard, occasionally punctuated by rhythmic strikes of a drum.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      The pace throughout is gentle and the atmosphere at the top is unlike anything near Kathmandu. For those drawn to the spiritual and cultural side of Nepal as much as the mountains, this experience is one to stick with you.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Time:</span> One day</div>
                        <div><span className="font-medium text-[#2d6a8a]">Difficulty:</span> Easy</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max altitude:</span> 1,750m</div>
                        <div><span className="font-medium text-[#2d6a8a]">Best season:</span> September to May</div>
                      </div>
                    </div>

                    <Link href="/services/day-hikings/namobuddha-hiking" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Namobuddha Day Hike Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/namobuddha-1.webp"
                        alt="Thrangu Tashi Yangtse Monastery at Namobuddha in Nepal"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Thrangu Tashi Yangtse Monastery at Namobuddha
                      </div>
                    </div>
                  </section>

                  {/* Ghorepani Poon Hill */}
                  <section id="poonhill" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Ghorepani Poon Hill Trek – Sunrise Views of Annapurna's Mountain Range
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      If you've been looking for a sign to book your first multi-day trek, this is it.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The Ghorepani Poon Hill Trek takes around 6 days and is one of the best multi-day treks for beginners, with some of the best views across the Annapurna Conservation area, at a moderate altitude, making it the ideal first multi-day trek for those with little to no experience of altitude or sustained uphill walking.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The trek starts with a ride from Pokhara to Nayapul and you begin by moving through rhododendron forests and traditional Gurung villages over four days of trekking. You'll be hiking well-worn trails, resting in warm teahouses, and enjoy the daily Dal Bhat to power you through the day. The trail also passes through Ghandruk, one of the most beautiful Gurung villages in the Annapurna region, with a small museum dedicated to the local culture and history.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      On day four, you'll experience the pre-dawn climb to Poon Hill – a 45-minute push up stone steps in the dark, headtorch on, the trail quiet except for the sound of fellow trekkers making the same ascent. Near the top, the sky begins to shift to deep purple with Annapurna I emerging slowly from the dark, still blanketed by dozens of stars. By the time the sun clears the horizon, both Annapurna I and II are lit up in full from the top of Poon Hill.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Trek this route in spring and the forests come alive with rhododendrons lining the trail in deep red, pink and white from the valley floor all the way up to Ghorepani.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Time:</span> 6 day tour, 4 days trekking</div>
                        <div><span className="font-medium text-[#2d6a8a]">Difficulty:</span> Easy for multi-day</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max altitude:</span> 3,210m</div>
                        <div><span className="font-medium text-[#2d6a8a]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/ghorepani-poon-hill-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Ghorepani Poon Hill Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/ghorepani-2.webp"
                        alt="Sunrise view from Poon Hill with Annapurna mountain range in Nepal"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Sunrise over Annapurna range from Poon Hill
                      </div>
                    </div>
                  </section>

                  {/* Mardi Himal */}
                  <section id="mardi" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Mardi Himal Trek – A Less Travelled Gem of the Annapurna Region
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Poon Hill is the obvious first multi-day trek in the Annapurna region – and for good reason. But if you have a week and the need for a bigger challenge, Mardi Himal is what you're searching for.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The trail climbs out of Pokhara through dense rhododendron and oak forest, rising gradually through Low Camp and Forest Camp before breaking above the tree line onto an open ridge. The teahouses at High Camp are basic and exposed, and the air is noticeably thinner by this point of the trek. Machhapuchhre will shadow you in the sky, the distinctive double summit unmistakable, with the full Annapurna range stretching out behind it.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      The final push to Mardi Himal Base Camp at 4,500m is where the trek earns its reputation — the altitude bites, the gradient steepens, and the hours add up. But above 4,000m, with Machhapuchhre towering directly ahead and the Annapurna range laid out behind you, whatever the climb took out of you, the view puts back. Standing at the base of a 5,587m peak with nothing but open sky and towering mountains in every direction – the kind of morning views that Nepal rewards trekkers with.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Time:</span> 7 days</div>
                        <div><span className="font-medium text-[#2d6a8a]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max altitude:</span> 4,500m</div>
                        <div><span className="font-medium text-[#2d6a8a]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/mardi-himal-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Mardi Himal Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/mardi-3.webp"
                        alt="Mardi Himal Base Camp with Machhapuchhre mountain in Nepal"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Machhapuchhre (Fishtail) mountain viewed from Mardi Himal trail
                      </div>
                    </div>
                  </section>

                  {/* Langtang Valley */}
                  <section id="langtang" className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      Langtang – Trek the 'Valley of Glaciers' Only a Few Hours from Kathmandu
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Langtang doesn't get the same headlines as Everest or Annapurna – and that's exactly what makes it worth the attention. A few hours north of Kathmandu, it offers dramatic glacial scenery, dense rhododendron forest and deeply rooted Tibetan-Buddhist culture in a shorter timeframe, with fewer trekkers along the trail, making it a quieter, more peaceful slow ascend.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      From Syabrubesi the trail climbs through dense bamboo forest before opening into alpine meadows. Traditional Tamang villages line the route – distinct wooden architecture and local crafts, making it feel far removed from the bustle of Kathmandu. The forest is also one of the last habitats in Nepal where Red Pandas and Himalayan Black Bears still roam — rare, but reason enough to keep your eyes on the treeline.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      At 3,870m, the valley opens out at Kyanjin Gompa — the last permanent settlement on the trek, and one of its most memorable stops. The monastery was rebuilt after the 2015 earthquake and sits surrounded by prayer flags, mani walls and ancient stupas, with Langtang Lirung filling the sky beyond. Before continuing your journey, try the famous yak cheese produced at the village factory.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Beyond Kyanjin, the trail gives way to alpine pastures and glaciers. You can choose to trek to Kyanjin Ri at 4,773m – which is a manageable route once you've acclimatised. Or for the adventurous trekkers, to Tserko Ri – a strenuous, full-day ascent.
                    </p>
                    
                    <div className="bg-[#f0f7fa] rounded-xl p-4 md:p-5 my-4">
                      <h4 className="font-bold text-[#0f2940] mb-2">At a Glance:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                        <div><span className="font-medium text-[#2d6a8a]">Time:</span> 8 days</div>
                        <div><span className="font-medium text-[#2d6a8a]">Difficulty:</span> Easy to moderate</div>
                        <div><span className="font-medium text-[#2d6a8a]">Max altitude:</span> 5,033m</div>
                        <div><span className="font-medium text-[#2d6a8a]">Best season:</span> March-May, Sep-Nov</div>
                      </div>
                    </div>

                    <Link href="/services/trekking/langtang-valley-trek" className="inline-block">
                      <Button className="bg-[#0f2940] hover:bg-[#1a4166] text-white rounded-full px-4 md:px-6 py-2 text-xs md:text-sm">
                        Book Your Langtang Valley Trek Today →
                      </Button>
                    </Link>

                    <div className="relative h-[250px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden my-6 w-full">
                      <Image
                        src="/images/used/ganjala-pass-1.webp"
                        alt="Kyanjin Gompa monastery with Langtang Lirung mountain in Nepal"
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
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">Do I need a guide to trek in Nepal?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          For many routes, yes, and in some cases it's now a legal requirement. Trekking in the Annapurna Conservation Area now requires a licensed guide by law, as does Langtang National Park since 2023. Even on trails where a guide isn't mandatory, hiring one is strongly recommended – particularly for first-time trekkers. A licensed guide arranges teahouse accommodation, handles permits, and knows the terrain. That last part matters more than most beginners expect. It's also vital that you research the correct permits – though with Himkala Adventure, this is organised ahead of time to ensure you have a smooth, enjoyable trip.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">How physically fit do I need to be?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Only a moderate level of fitness is required for all of these treks and you don't need to be an athlete. Some experience with full-day hikes carrying your backpack will make all the difference to your experience.
                        </p>
                      </div>

                      <div className="bg-[#f8fbfc] rounded-xl p-4 md:p-5 border border-[#C5E0ED]/20">
                        <h3 className="font-bold text-[#0f2940] text-sm md:text-base mb-2">What should I pack?</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2">
                          It will depend on the season and altitude and it's always good to check with your guide prior to commencing the tour. Generally, sturdy hiking boots, walking trousers and base layers, a fleece, and a down jacket for the colder evenings at altitude are recommended. Gloves, a hat and extra pairs of wool socks are also recommended.
                        </p>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Beyond clothing, you can bring: toilet roll and personal toiletries, snacks, medication and electrolytes, a battery pack and chargers, enough cash (ATMs will not be available on any of the treks), and some personal entertainment for quiet evenings in the teahouses. Pack light, and only bring what you think you need. There are also many trekking stores in Kathmandu and Pokhara to buy or rent gear such as poles, downjackets and hiking boots, all of which can be arranged prior to beginning your chosen trek.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                      <div className="relative h-[150px] md:h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/gokyo-1.webp"
                          alt="Trekker on a ridge with mountain views in Nepal"
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="relative h-[150px] md:h-[200px] rounded-xl overflow-hidden">
                        <Image
                          src="/images/used/gokyo-3.webp"
                          alt="Himalayan mountain range at sunrise in Nepal"
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
                            aria-label="Connect with Meg Cassidy on LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                            </svg>
                            Meg Cassidy on LinkedIn
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