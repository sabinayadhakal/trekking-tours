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
  title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
  excerpt: "From the rainbow blooms of spring to the crystal-clear skies of autumn, every season in Nepal offers something magical. But timing your visit right can mean the difference between watching Everest disappear behind clouds or standing beneath its glittering peak. Here's everything you need to know.",
  heroImage: "/images/used/historic-scenic-photography-nepal.webp",
  author: {
    name: "Sabinaya Dhakal",
    avatar: "/placeholder.svg?text=SD",
    
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
    title: "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
    image: "/images/used/manaslu-main-page.webp",
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

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[380px] md:h-[60vh] md:min-h-[500px] overflow-hidden bg-[#0f2940]">
        <div className="absolute inset-0 z-0">
          <Image
            src={blogPost.heroImage}
            alt={blogPost.title}
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
                    <h3 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
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

                {/* Himkala Adventure Callout */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <Mountain className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-bold text-amber-800 mb-2">Plan Your Perfect Trip</h3>
                    <p className="text-amber-700 text-sm mb-4">
                      Let Himkala Adventure help you choose the best season for your dream Nepal experience.
                    </p>
                    <Link href="/services/day-sightseeings" className="block">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl">
                        Plan My Journey
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              <div className="max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-8 md:mb-12">
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 first-letter:text-4xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-[#0f2940] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    Ask ten different travelers about the best time to visit Nepal, and you might get ten different answers. The trekker who summited Kala Patthar in November will swear by autumn's crystal skies. The photographer who captured rhododendron forests ablaze with color will insist spring is unmatched. And the budget traveler who had entire tea houses to themselves in February? They'll tell you winter's secret magic is worth the chill.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The truth is, Nepal doesn't have one "best" time. It has four distinct seasons, each offering a completely different version of this Himalayan nation. The question isn't "When should you visit Nepal?" but rather "What kind of Nepal experience are you seeking?"
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    In this comprehensive guide, we'll walk you through every season, so you can time your visit perfectly. Whether you're dreaming of Everest views, cultural festivals, wildlife safaris, or peaceful monastery stays, there's a perfect window waiting for you. Let's find it together.
                  </p>
                </section>

                {/* Image Break */}
                <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="/images/used/when-to-visit-nepal-1.webp"
                    alt="Views of trekking in Everest region at the time of December"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Views of the Everest region at the time of December
                  </div>
                </div>

                {/* Autumn Season */}
                <section id="autumn" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Autumn (September - November): The Golden Season
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    If there's a consensus "best" season in Nepal, autumn takes the crown and for very good reason. The monsoon rains have just departed, washing the dust from the air and leaving behind impossibly clear skies. The mountains, often hidden behind haze or clouds for much of the year, emerge in breathtaking clarity.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    This is also festival season. Dashain and Tihar, Nepal's biggest celebrations, fill the streets with music, lights, and joy. The weather is mild and stable which is perfect for trekking, sightseeing, or simply sitting at a café watching the world go by.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 mt-4">
                    <div className="flex gap-3">
                      <Sparkles className="w-5 h-5 text-green-600 shrink-0" />
                      <p className="text-green-800 text-sm italic leading-relaxed">
                        <span className="font-bold">Pro Tip:</span> October is the absolute sweet spot. The trails have dried out, the temperatures are perfect, and the festival season brings an extra layer of cultural magic to your journey.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Spring Season */}
                <section id="spring" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Spring (March - May): Blooming Beauty
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Spring in Nepal is nature's grand unveiling. After the cooler winter months, the hillsides explode into color as rhododendrons; Nepal's national flower those bloom in brilliant reds, pinks, and whites. The weather warms gradually, and the days grow longer, making it the second-most popular trekking season after autumn.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    For mountaineers, spring is the climbing season. This is when Everest expeditions begin, and the Khumbu region buzzes with an energy unlike any other time of year. Even if you're not summiting, watching the preparations and meeting climbers from around the world adds a unique dimension to your trek.
                  </p>
                </section>

                {/* Winter Season */}
                <section id="winter" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Winter (December - February): Solitude & Snow
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Winter is Nepal's best-kept secret. While most travelers assume the country shuts down, the truth is far more interesting. Yes, it's cold, especially at higher elevations but the skies are often shockingly clear, the crowds vanish, and you might find yourself the only guest in a tea house with the world's best view.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    For budget travelers and solitude seekers, winter offers incredible value. Flight prices drop, accommodations negotiate, and the trails feel like they belong to you alone. The key is choosing your destination wisely: stick to lower elevations (Pokhara, Chitwan, Lumbini) or prepare properly for high-altitude treks.
                  </p>
                </section>

                {/* Monsoon Season */}
                <section id="monsoon" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Summer/Monsoon (June - August): The Green Season
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Monsoon is Nepal's most misunderstood season. While many guidebooks tell you to avoid it entirely, savvy travelers know that monsoon offers unique rewards if you know where to go and what to expect. The landscapes transform into a lush, vibrant green that you won't see any other time of year.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The key to enjoying monsoon is staying in rain-shadow areas like Upper Mustang (which receives almost no rain) or focusing on cultural tours in Kathmandu and Pokhara valleys. The north side of the Annapurna circuit, including Manang, also stays relatively dry. And the best part? You'll have entire sights almost to yourself.
                  </p>
                </section>

                {/* Quick Month Guide */}
                <section id="month-guide" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Quick Month-by-Month Guide
                  </h2>
                  
                  <div className="space-y-4 mt-4">
                    {[
                      { title: "March-April", desc: "Rhododendrons in full bloom. Perfect trekking weather. Holi festival." },
                      { title: "October-November", desc: "Crystal clear mountain views. Dashain and Tihar festivals. Peak season." },
                      { title: "December-February", desc: "Solitude on the trails. Clear skies but cold. Best for budget travelers." },
                      { title: "June-August", desc: "Lush green landscapes. Upper Mustang stays dry. Lowest prices of the year." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-[#f8fbfc] rounded-lg border border-[#C5E0ED]/20">
                        <div className="w-6 h-6 bg-[#2d6a8a]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-[#2d6a8a]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0f2940] text-sm md:text-base">{item.title}</h4>
                          <p className="text-slate-600 text-xs md:text-sm mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 mt-6">
                    <div className="flex gap-3">
                      <Sparkles className="w-5 h-5 text-green-600 shrink-0" />
                      <p className="text-green-800 text-sm italic leading-relaxed">
                        <span className="font-bold">Insider Tip:</span> If you want the perfect balance of good weather and fewer crowds, try late September or early November. You'll catch the tail end of the monsoon freshness or the beginning of winter's clarity without the October rush.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Best Seasons by Activity */}
                <section id="by-activity" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Best Seasons by Activity
                  </h2>
                  
                  <div className="space-y-4 mt-4">
                    {[
                      { title: "🏔️ High-Altitude Trekking", desc: "Best during October-November or March-April for clear skies and stable weather." },
                      { title: "🐘 Wildlife Safari", desc: "Best during October-March when animals gather near water sources." },
                      { title: "🏛️ Cultural Tours", desc: "Best during September-November or March-May for pleasant walking weather." },
                      { title: "💰 Budget Travel", desc: "Best during December-February or June-August for lower prices." },
                      { title: "🎉 Festival Experiences", desc: "Best during October for Dashain and Tihar, Nepal's biggest celebrations." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-[#f8fbfc] rounded-lg border border-[#C5E0ED]/20">
                        <div className="w-6 h-6 bg-[#2d6a8a]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-[#2d6a8a]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0f2940] text-sm md:text-base">{item.title}</h4>
                          <p className="text-slate-600 text-xs md:text-sm mt-0.5">{item.desc}</p>
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
                      &quot;I've led treks in every season, and here's what I tell my guests: there's no bad time to come to Nepal, only different times for different dreams. October gives you postcards. February gives you the mountains to yourself. July gives you the deepest green you've ever seen. The question is never 'if' you should come. It's 'which Nepal' you want to meet.&quot;
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED] flex items-center justify-center bg-white/10">
                        <User className="w-5 h-5 text-[#C5E0ED]" />
                      </div>
                      <div>
                        <cite className="font-bold text-[#C5E0ED] not-italic text-sm md:text-base"> Sabinaya Dhakal</cite>
                 
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* Conclusion */}
                <section id="conclusion" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Finding Your Perfect Time
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    After reading this guide, you might feel overwhelmed by choices. That's understandable. Nepal truly offers something special in every season. Here's how to decide:
                  </p>
                  <div className="bg-[#f0f7fa] rounded-xl p-5 mb-4">
                    <p className="text-[#0f2940] font-medium mb-2">Ask yourself these questions:</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#2d6a8a] mt-0.5 shrink-0" /> Do you want guaranteed clear mountain views? → <span className="font-medium">Autumn (October-November)</span></li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#2d6a8a] mt-0.5 shrink-0" /> Do you dream of blooming rhododendron forests? → <span className="font-medium">Spring (March-April)</span></li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#2d6a8a] mt-0.5 shrink-0" /> Is solitude and budget your priority? → <span className="font-medium">Winter (December-February)</span></li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#2d6a8a] mt-0.5 shrink-0" /> Do you love lush landscapes and don't mind rain? → <span className="font-medium">Monsoon (June-August) with a rain-shadow trek</span></li>
                    </ul>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Ultimately, the best time to visit Nepal is whenever you can make it happen. The mountains wait. The temples stand patient. And whichever season you choose, Nepal will welcome you with warmth that has nothing to do with the weather.
                  </p>
                </section>

                {/* Author Card */}
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
          href="https://www.instagram.com/sabinayadhakal/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#2d6a8a] hover:text-[#1a4a6a] transition-colors mt-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.667.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          @sabinayadhakal
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
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-xs md:text-sm font-bold text-[#2d6a8a] uppercase tracking-[0.25em] mb-3 md:mb-4">Continue Your Journey</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0f2940]">More Insights from Us</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {relatedPosts.map((post, i) => (
              <Link href={post.href} key={i} className="block">
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-[#C5E0ED]/20 transition-all duration-300 group cursor-pointer">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
  );
}