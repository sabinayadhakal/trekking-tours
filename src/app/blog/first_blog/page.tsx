"use client";

import * as React from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "The Ultimate Guide to Everest Base Camp Trek: Everything You Need to Know",
  excerpt: "Planning your dream trek to the foot of the world's highest peak? This comprehensive guide covers preparation, best seasons, packing lists, acclimatization tips, and what to expect on this life-changing journey through the Khumbu region.",
  heroImage: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
  author: {
    name: "Tshering Namgyal Sherpa",
    avatar: "/images/managing-director.jpg",
    bio: "Senior Trekking Guide with 15+ years of experience in the Himalayas. Summited Everest 3 times.",
    role: "Head Guide & Co-Founder"
  },
  date: "January 15, 2025",
  readTime: "12 min read",
  category: "Trekking Guide",
  tags: ["Everest", "Trekking", "Nepal", "Adventure", "Himalayas"],
};

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "best-time", title: "Best Time to Trek" },
  { id: "itinerary", title: "Classic Itinerary" },
  { id: "preparation", title: "Physical Preparation" },
  { id: "packing", title: "Essential Packing List" },
  { id: "altitude", title: "Altitude & Acclimatization" },
  { id: "costs", title: "Costs & Budget" },
  { id: "tips", title: "Pro Tips" },
];

const relatedPosts = [
  {
    title: "Annapurna Circuit vs Everest Base Camp: Which Trek is Right for You?",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=800&auto=format&fit=crop",
    date: "January 5, 2025",
    readTime: "10 min",
  },
  {
    title: "Understanding Altitude Sickness: Prevention and Treatment",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=800&auto=format&fit=crop",
    date: "December 28, 2024",
    readTime: "7 min",
  },
  {
    title: "Packing List for Himalayan Treks: The Essential Gear Guide",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    date: "December 15, 2024",
    readTime: "11 min",
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
      const offset = 80; // Account for fixed header
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
    <div className="min-h-screen bg-white">
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
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Properly Sized & Centered */}
<section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
  <div className="absolute inset-0 z-0">
    <Image
      src={blogPost.heroImage}
      alt={blogPost.title}
      fill
      className="object-cover"
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
        The Ultimate Guide to Everest Base Camp Trek
      </h1>
      
      <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 font-light px-2 sm:px-0">
        Planning your dream trek to the foot of the world's highest peak? This comprehensive guide covers preparation, best seasons, packing lists, acclimatization tips, and what to expect on this life-changing journey through the Khumbu region.
      </p>
      
      <div className="flex flex-col items-center justify-center gap-4 text-xs sm:text-sm text-white/70">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED]">
              <Image 
                src={blogPost.author.avatar} 
                alt={blogPost.author.name} 
                width={48} 
                height={48} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-white text-sm sm:text-base">{blogPost.author.name}</p>
              <p className="text-white/60 text-xs">{blogPost.author.role}</p>
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
                    <h3 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
                    </h3>
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
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#C5E0ED]" /> Share Article
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-xl"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-xl"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl"
                        onClick={handleCopyLink}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Button variant="outline" className="w-full border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/10 rounded-xl">
                  <Bookmark className="w-4 h-4 mr-2" /> Save for Later
                </Button>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              <div className="max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-8 md:mb-12">
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 first-letter:text-4xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-[#0f2940] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    The Everest Base Camp trek is not just a journey to the foot of the world&apos;s highest mountain—it&apos;s a pilgrimage through some of Earth&apos;s most dramatic landscapes, ancient Sherpa culture, and the very limits of human endurance. Every year, thousands of trekkers from around the globe make this iconic journey, and for good reason.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Standing at 5,364 meters (17,598 feet), Everest Base Camp offers an unparalleled view of the Khumbu Icefall and the towering south face of Mount Everest. But the destination is only part of the experience—the trail itself winds through rhododendron forests, crosses suspension bridges draped with prayer flags, and passes through traditional Sherpa villages where time seems to stand still.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    In this comprehensive guide, we&apos;ll cover everything you need to know to prepare for this life-changing adventure. Whether you&apos;re a seasoned trekker or embarking on your first high-altitude journey, this guide will help you prepare physically, mentally, and logistically for the trek of a lifetime.
                  </p>
                </section>

                {/* Image Break */}
                <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
                    alt="Trekkers on the Everest trail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Trekkers crossing a suspension bridge near Namche Bazaar
                  </div>
                </div>

                {/* Best Time */}
                <section id="best-time" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Best Time to Trek
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The timing of your Everest Base Camp trek can make or break your experience. Nepal has four distinct seasons, but only two offer ideal trekking conditions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <Card className="bg-gradient-to-br from-[#C5E0ED]/20 to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl">
                      <CardContent className="p-4 md:p-6">
                        <h4 className="font-bold text-[#0f2940] mb-2">Autumn (Sep - Nov)</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          The most popular season with stable weather, clear skies, and excellent visibility. Temperatures are moderate, and the post-monsoon landscape is lush and green.
                        </p>
                        <Badge className="bg-green-100 text-green-700 border-none text-xs">Highly Recommended</Badge>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#C5E0ED]/20 to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl">
                      <CardContent className="p-4 md:p-6">
                        <h4 className="font-bold text-[#0f2940] mb-2">Spring (Mar - May)</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Second-best season featuring blooming rhododendrons and warming temperatures. Late spring can bring afternoon clouds but mornings are typically clear.
                        </p>
                        <Badge className="bg-blue-100 text-blue-700 border-none text-xs">Recommended</Badge>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl md:rounded-2xl p-4 md:p-6 flex gap-3">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-amber-800 mb-1 text-sm md:text-base">Avoid Monsoon Season (Jun - Aug)</h4>
                      <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
                        Heavy rainfall, leeches, slippery trails, and obscured mountain views make monsoon season challenging. Winter (Dec - Feb) brings extreme cold and potential snowfall at higher elevations.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Itinerary */}
                <section id="itinerary" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Classic 14-Day Itinerary
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The classic EBC trek takes 12-14 days, allowing proper acclimatization. Here&apos;s a day-by-day breakdown of the journey:
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    {[
                      { day: "Day 1-2", route: "Kathmandu → Lukla → Phakding", altitude: "2,840m", desc: "Scenic flight to Lukla, easy trek through forest" },
                      { day: "Day 3-4", route: "Phakding → Namche Bazaar", altitude: "3,440m", desc: "Steep climb with first Everest views, acclimatization day" },
                      { day: "Day 5-6", route: "Namche → Tengboche", altitude: "3,860m", desc: "Visit famous monastery, stunning Ama Dablam views" },
                      { day: "Day 7-8", route: "Tengboche → Dingboche", altitude: "4,410m", desc: "Alpine terrain begins, acclimatization hike to Nangkartshang" },
                      { day: "Day 9-10", route: "Dingboche → Lobuche", altitude: "4,940m", desc: "Memorial cairns, dramatic Khumbu glacier views" },
                      { day: "Day 11", route: "Lobuche → Gorak Shep → EBC", altitude: "5,364m", desc: "The big day! Reach Base Camp and return to Gorak Shep" },
                      { day: "Day 12", route: "Kala Patthar Sunrise", altitude: "5,545m", desc: "Pre-dawn climb for best Everest panorama" },
                      { day: "Day 13-14", route: "Return to Lukla", altitude: "2,840m", desc: "Rapid descent through familiar terrain" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-3 p-3 md:p-4 bg-[#f8fbfc] rounded-lg md:rounded-xl hover:bg-[#C5E0ED]/20 transition-colors">
                        <div className="w-full sm:w-24">
                          <span className="text-xs font-bold text-[#2d6a8a] uppercase tracking-wider">{item.day}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#0f2940] mb-1 text-sm md:text-base">{item.route}</h4>
                          <p className="text-slate-600 text-xs md:text-sm">{item.desc}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] text-xs">{item.altitude}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Quote Block */}
                <div className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] rounded-xl md:rounded-2xl p-6 md:p-8 my-8 md:my-12 relative overflow-hidden">
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 opacity-20">
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED]" />
                  </div>
                  <blockquote className="relative z-10">
                    <p className="text-base md:text-lg lg:text-xl font-serif text-white leading-relaxed mb-3 md:mb-4 italic">
                      &quot;It&apos;s not the mountain we conquer, but ourselves. The Everest Base Camp trek teaches you that every step forward, no matter how small, brings you closer to something extraordinary.&quot;
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED]">
                        <Image src={blogPost.author.avatar} alt={blogPost.author.name} width={48} height={48} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <cite className="font-bold text-[#C5E0ED] not-italic text-sm md:text-base">{blogPost.author.name}</cite>
                        <p className="text-white/60 text-xs md:text-sm">{blogPost.author.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* Physical Preparation */}
                <section id="preparation" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <User className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Physical Preparation
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    While you don&apos;t need to be an elite athlete, the EBC trek demands good cardiovascular fitness and leg strength. Start training at least 3 months before your trek.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {[
                      { title: "Cardio Training", desc: "4-5 sessions per week: running, cycling, swimming, or stair climbing. Build up to 60-minute sessions." },
                      { title: "Strength Training", desc: "Focus on legs, core, and back. Squats, lunges, planks, and deadlifts 2-3 times per week." },
                      { title: "Practice Hikes", desc: "Weekend hikes with a loaded backpack. Gradually increase distance and elevation gain." },
                    ].map((item, i) => (
                      <Card key={i} className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl">
                        <CardContent className="p-4 md:p-6">
                          <h4 className="font-bold text-[#0f2940] mb-2 text-sm md:text-base">{item.title}</h4>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Packing List */}
                <section id="packing" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Mountain className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Essential Packing List
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h4 className="font-bold text-[#0f2940] mb-3 text-sm md:text-base">Clothing</h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {[
                          "Down jacket (-20°C rated)",
                          "Fleece jacket and pants",
                          "Waterproof shell jacket",
                          "Thermal base layers (2 sets)",
                          "Trekking pants (2 pairs)",
                          "Warm hat, sun hat, buff",
                          "Insulated gloves + liner gloves",
                          "Wool hiking socks (4-5 pairs)",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <h4 className="font-bold text-[#0f2940] mb-3 text-sm md:text-base">Gear & Essentials</h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {[
                          "Sturdy trekking boots (broken in)",
                          "35-45L daypack",
                          "Sleeping bag (-15°C comfort)",
                          "Trekking poles (adjustable)",
                          "Headlamp + spare batteries",
                          "Sunglasses (UV400, category 4)",
                          "Water bottles + purification",
                          "First aid kit + personal meds",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#2d6a8a] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Altitude */}
                <section id="altitude" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Mountain className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Altitude & Acclimatization
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Acute Mountain Sickness (AMS) is the biggest risk on the EBC trek. Understanding how your body adapts to altitude is crucial for a safe and enjoyable experience.
                  </p>

                  <div className="bg-[#f8fbfc] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#C5E0ED]/30">
                    <h4 className="font-bold text-[#0f2940] mb-3 text-sm md:text-base">The Golden Rules of Acclimatization</h4>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {[
                        { rule: "Climb High, Sleep Low", desc: "Take acclimatization hikes to higher elevations during rest days, then return to sleep at lower altitude." },
                        { rule: "Stay Hydrated", desc: "Drink 3-4 liters of water daily. Dehydration worsens AMS symptoms and is common at altitude." },
                        { rule: "Ascend Gradually", desc: "Above 3,000m, don't gain more than 300-500m of sleeping elevation per day." },
                        { rule: "Listen to Your Body", desc: "Headache, nausea, and fatigue are early warning signs. Don't ignore them—rest or descend if symptoms worsen." },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded md:rounded-lg flex items-center justify-center shrink-0">
                            <span className="font-bold text-[#0f2940] text-xs md:text-sm">{i + 1}</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-[#0f2940] mb-1 text-sm md:text-base">{item.rule}</h5>
                            <p className="text-slate-600 text-xs md:text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Costs */}
                <section id="costs" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Tag className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Costs & Budget
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The total cost of your EBC trek depends on your style of travel and whether you go guided or independent. Here&apos;s a realistic breakdown:
                  </p>

                  <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C5E0ED]/30">
                        {[
                          { type: "Budget", price: "$800-1,200", includes: "Independent trek, basic teahouses, no guide" },
                          { type: "Mid-Range", price: "$1,500-2,500", includes: "Licensed guide, comfortable lodges, meals included" },
                          { type: "Premium", price: "$3,000-5,000", includes: "Private guide, best lodges, helicopter return" },
                        ].map((tier, i) => (
                          <div key={i} className="p-4 md:p-6 text-center">
                            <h4 className="font-bold text-[#0f2940] mb-1 md:mb-2 text-sm md:text-base">{tier.type}</h4>
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2d6a8a] mb-2 md:mb-3">{tier.price}</p>
                            <p className="text-slate-600 text-xs md:text-sm">{tier.includes}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Pro Tips */}
                <section id="tips" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Pro Tips from Our Guides
                  </h2>

                  <div className="space-y-3 md:space-y-4">
                    {[
                      { tip: "Book flights early", desc: "Lukla flights are weather-dependent and often delayed. Keep buffer days in Kathmandu." },
                      { tip: "Bring cash", desc: "ATMs are unreliable beyond Namche. Bring enough Nepali rupees for the entire trek plus emergency funds." },
                      { tip: "Charge devices in lower villages", desc: "Charging fees increase with altitude. Top up batteries in Namche and Tengboche." },
                      { tip: "Try the local food", desc: "Dal bhat (lentils and rice) is unlimited refills and provides sustained energy. It's the trekker's fuel!" },
                      { tip: "Hire a porter", desc: "Even fit trekkers benefit from carrying lighter loads at altitude. Support the local economy too." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]">
                        <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#0f2940] mb-1 text-sm md:text-base">{item.tip}</h4>
                          <p className="text-slate-600 text-xs md:text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Author Card */}
                <Card className="bg-gradient-to-br from-[#f8fbfc] to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border-4 border-white shadow-lg shrink-0">
                        <Image src={blogPost.author.avatar} alt={blogPost.author.name} width={96} height={96} className="object-cover w-full h-full" />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-xs font-bold text-[#2d6a8a] uppercase tracking-wider mb-1 md:mb-2">Written By</p>
                        <h3 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1">{blogPost.author.name}</h3>
                        <p className="text-[#2d6a8a] text-sm mb-2 md:mb-3">{blogPost.author.role}</p>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{blogPost.author.bio}</p>
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
                      >
                        <Facebook className="w-4 h-4 mr-2" /> Share
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter className="w-4 h-4 mr-2" /> Tweet
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/10"
                      onClick={handleCopyLink}
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
          <div className="mb-8 md:mb-12">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Continue Reading</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">Related Articles</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {relatedPosts.map((post, i) => (
              <Card key={i} className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}