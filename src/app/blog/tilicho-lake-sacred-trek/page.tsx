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
  title: "Tilicho Lake: The Sacred Himalayan Lake of Legends, Faith, and Adventure",
  excerpt: "Perched at 4,919 meters in the Annapurna region, Tilicho Lake is not just one of the highest lakes in the world, it is a place where Hindu mythology meets breathtaking natural beauty. Discover the ancient story of Kakbhusundi, the crow sage, and why thousands of pilgrims and trekkers make the arduous journey to its holy shores each year.",
  heroImage: "/images/used/tilicho-blog.webp",
  author: {
    name: "Sabinaya Dhakal",
    avatar: "/placeholder.svg?text=SD",
    
  },
  date: "May 20, 2026",
  readTime: "12 min read",
  category: "Trekking & Pilgrimage",
  tags: ["Tilicho Lake", "Annapurna Circuit", "Nepal Trekking", "Hindu Pilgrimage", "Kakbhusundi", "Ramayana", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "The Lake Above the Clouds" },
  { id: "religious-significance", title: "The Sacred Legend of Kakbhusundi" },
  { id: "ramayana-connection", title: "The Ramayana Connection" },
  { id: "other-significance", title: "Other Religious Significances" },
  { id: "trek-overview", title: "Trek Overview & Duration" },
  { id: "itinerary", title: "Detailed Itinerary (Starting from Chame)" },
  { id: "packing-list", title: "Complete Packing List" },
  { id: "best-time", title: "Best Time to Visit" },
  { id: "conclusion", title: "A Journey of Faith & Adventure" },
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
    title: "5 Best Beginner Treks in Nepal: From Sunrise Hikes to Himalayan Valleys",
    image: "/images/used/manaslu-main-page.webp",
    date: "May 24, 2026",
    readTime: "14 min",
    href: "/blog/best-beginner-treks-nepal",
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

  // Schema.org BlogPosting structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": `https://www.himkalaadventure.com${blogPost.heroImage}`,
    "datePublished": "2026-05-20",
    "dateModified": "2026-05-20",
    "author": {
      "@type": "Person",
      "name": blogPost.author.name
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
      "@id": "https://www.himkalaadventure.com/blog/tilicho-lake-sacred-trek"
    },
    "keywords": "Tilicho Lake, Annapurna Circuit trek, Nepal trekking, Hindu pilgrimage, Kakbhusundi, highest lake Nepal, sacred lake Nepal, Annapurna trek",
    "articleSection": "Trekking & Pilgrimage",
    "wordCount": "2200"
  };

  return (
    <div className="min-h-screen bg-white">
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
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl">
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-[#0f2940] flex items-center gap-2">
                  <Menu className="w-5 h-5 text-[#2d6a8a]" aria-hidden="true" /> Contents
                </h3>
                <button 
                  onClick={() => setShowMobileTOC(false)}
                  className="p-2 rounded-lg hover:bg-slate-100"
                  aria-label="Close table of contents"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <nav className="space-y-2" aria-label="Table of contents">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm py-3 px-4 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                        : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                    }`}
                    aria-current={activeSection === item.id ? "location" : undefined}
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
                    <Facebook className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={handleCopyLink}
                    aria-label="Copy link to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
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
            alt="Tilicho Lake at 4,919 meters in the Annapurna region, Nepal - sacred Himalayan lake and trekking destination"
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
              <Tag className="w-3 h-3 mr-1.5" aria-hidden="true" /> {blogPost.category}
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
                    <User className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-bold text-white text-sm sm:text-base">{blogPost.author.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5E0ED]" aria-hidden="true" /> 
                    <span>{blogPost.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5E0ED]" aria-hidden="true" /> 
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
                    <h2 className="font-bold text-[#0f2940] mb-4 flex items-center gap-2 text-base">
                      <Mountain className="w-4 h-4 text-[#2d6a8a]" aria-hidden="true" /> Table of Contents
                    </h2>
                    <nav className="space-y-2" aria-label="Table of contents">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                            activeSection === item.id
                              ? "bg-[#C5E0ED]/30 text-[#0f2940] font-medium"
                              : "text-slate-600 hover:bg-[#f0f7fa] hover:text-[#2d6a8a]"
                          }`}
                          aria-current={activeSection === item.id ? "location" : undefined}
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] border-none rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-base">
                      <Share2 className="w-4 h-4 text-[#C5E0ED]" aria-hidden="true" /> Share Article
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-xl"
                        onClick={() => handleShare("facebook")}
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-4 h-4" aria-hidden="true" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white rounded-xl"
                        onClick={() => handleShare("twitter")}
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" aria-hidden="true" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl"
                        onClick={handleCopyLink}
                        aria-label="Copy link to clipboard"
                      >
                        {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Himkala Adventure Callout */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <Mountain className="w-8 h-8 text-amber-600 mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-bold text-amber-800 mb-2 text-base">Trek to Tilicho Lake with Us</h3>
                    <p className="text-amber-700 text-sm mb-4">
                      Let Himkala Adventure guide you on this sacred journey to the world's highest lake.
                    </p>
                    <Link href="/services/trekking/annapurna-circuit-trek-with-tilicho-lake" className="block">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl" aria-label="Book your Tilicho Lake trek with Himkala Adventure">
                        Plan My Tilicho Trek
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
                    High in the Annapurna Himalayas, where the air thins and the mountains touch the sky, lies a lake that has inspired legends for millennia. Tilicho Lake, sitting at 4,919 meters (16,138 feet), is not just one of the highest lakes in the world. It is a place where mythology becomes geography, where faith meets adventure, and where every visitor leaves transformed.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    For Hindus, this is no ordinary lake. It is the sacred abode of Kakbhusundi, the immortal crow sage who witnessed the Ramayana unfold. For trekkers, it is a challenging detour off the classic Annapurna Circuit that rewards with unparalleled views of the Himalayas. For pilgrims, it is a destination of deep spiritual significance, visited by thousands during the sacred month of August.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    In this comprehensive guide, we will explore the rich religious significance of Tilicho Lake, the legendary story of Kakbhusundi and his connection to Garuda and the Ramayana, what you need to pack for this high-altitude trek, how long it takes, and a detailed itinerary starting from Chame. Whether you come for faith or for adventure or both, Tilicho Lake awaits.
                  </p>
                </section>

                {/* Image Break */}
                <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="/images/used/tilicho-lake-1.webp"
                    alt="Tilicho Lake reflecting the surrounding Himalayan mountains in Annapurna region, Nepal - sacred lake at 4,919 meters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" aria-hidden="true" /> Tilicho Lake reflecting the surrounding Himalayas at 4,919 meters
                  </div>
                </div>

                {/* Religious Significance - Kakbhusundi Legend */}
                <section id="religious-significance" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    The Sacred Legend of Kakbhusundi
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    According to Hindu mythology, Tilicho Lake is the eternal home of Kakbhusundi; a unique and fascinating figure. Kakbhusundi is a crow who was cursed and blessed into immortality. Unlike any other being, he possesses the rare gift of existing simultaneously in all three states of consciousness: waking, dreaming, and deep sleep.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The legend says that Kakbhusundi was originally a Brahmin named Bhushundi who was a devoted disciple of Lord Rama. Due to a curse from Sage Lomasa, he was transformed into a crow. However, Lord Rama, pleased with his unwavering devotion, blessed him with immortality and the ability to witness the entire Ramayana, not once, but countless times across different cosmic cycles.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    It is believed that Kakbhusundi resides at Tilicho Lake to this day, meditating and awaiting the next incarnation of Lord Rama. Devotees believe that bathing in the lake's icy waters can cleanse one of sins and bring blessings from the immortal crow sage. Some pilgrims even report seeing a giant crow near the lake, a sign that Kakbhusundi is present.
                  </p>
                </section>

                {/* Ramayana Connection */}
                <section id="ramayana-connection" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    The Ramayana Connection & Garuda
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The story of Kakbhusundi is deeply intertwined with the Ramayana. In the Yoga Vasistha, an ancient philosophical text, Kakbhusundi narrates the entire Ramayana to Sage Vasistha from his unique perspective, having witnessed it unfold across multiple cosmic ages.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    What makes this particularly fascinating is Kakbhusundi's relationship with Garuda, the divine eagle and mount of Lord Vishnu. According to legend, Garuda once tried to eat Kakbhusundi the crow, not recognizing his divine nature. A great debate ensued between the two birds about who was greater; Lord Vishnu (Garuda's master) or Lord Rama (Kakbhusundi's master).
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    The debate was resolved when both realized that Vishnu and Rama are manifestations of the same divine consciousness. Garuda and Kakbhusundi became friends, and it is said that they both visit Tilicho Lake, Garuda from time to time, and Kakbhusundi as his permanent resident. Some local traditions hold that the lake's name "Tilicho" derives from "Til" (sesame) and "Cho" (lake in Tibetan), referring to the sesame seeds offered as prayers at the site.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 mt-4">
                    <div className="flex gap-3">
                      <Sparkles className="w-5 h-5 text-green-600 shrink-0" aria-hidden="true" />
                      <p className="text-green-800 text-sm italic leading-relaxed">
                        <span className="font-bold">The Immortal Crow's Blessing:</span> Pilgrims believe that Kakbhusundi grants three wishes to those who reach Tilicho Lake with pure hearts. One for oneself, one for family, and one for all living beings.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Other Religious Significances */}
                <section id="other-significance" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    Other Religious Significances
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Beyond the Kakbhusundi legend, Tilicho Lake holds several other layers of spiritual importance:
                  </p>
                  <div className="space-y-4 mt-4">
                    {[
                      { title: "Sacred to Both Hindus and Buddhists", desc: "While primarily a Hindu pilgrimage site, local Tibetan Buddhists also revere the lake, believing it to be connected to the sacred Manasarovar Lake in Tibet." },
                      { title: "The August Pilgrimage", desc: "Every year during the full moon of Shrawan (July-August), hundreds of pilgrims make the challenging journey to offer prayers and take a ritual dip in the freezing waters." },
                      { title: "Shiva's Meditation", desc: "Some traditions hold that Lord Shiva meditated near this lake after consuming the poison during the Samudra Manthan (churning of the ocean)." },
                      { title: "Connection to Muktinath", desc: "The lake is spiritually linked to the nearby Muktinath Temple, one of the most sacred Vishnu temples in Hinduism. Many pilgrims visit both sites on the same journey." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-[#f8fbfc] rounded-lg border border-[#C5E0ED]/20">
                        <div className="w-6 h-6 bg-[#2d6a8a]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-[#2d6a8a]" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0f2940] text-sm md:text-base">{item.title}</h3>
                          <p className="text-slate-600 text-xs md:text-sm mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Trek Overview */}
                <section id="trek-overview" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    Trek Overview & Duration
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The trek to Tilicho Lake is a challenging high-altitude journey that requires good physical fitness and proper acclimatization. The lake sits at 4,919 meters, and the trail reaches its highest point near the Tilicho Base Camp at around 5,200 meters.
                  </p>
                  
                  <div className="bg-[#f0f7fa] rounded-xl p-5 mb-4">
                    <h3 className="font-bold text-[#0f2940] mb-2 text-sm md:text-base">Two Trek Options:</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-bold text-[#2d6a8a]">Option 1: Tilicho Lake Trek Only (Without Thorong La)</span>
                        <p className="text-sm text-slate-600 mt-1">This option takes you to Tilicho Lake and back, either returning to Chame or continuing to Jomsom. Duration: 7-10 days depending on starting point and pace. Suitable for those who want to focus specifically on the lake without crossing the challenging Thorong La pass.</p>
                      </div>
                      <div className="pt-2 border-t border-[#C5E0ED]/30">
                        <span className="font-bold text-[#2d6a8a]">Option 2: Tilicho Lake + Annapurna Circuit (Including Thorong La)</span>
                        <p className="text-sm text-slate-600 mt-1">This combines the Tilicho Lake detour with the full Annapurna Circuit, including the famous Thorong La pass at 5,416 meters. Duration: 11-12 days total. This is the classic route for adventure seekers wanting both the lake and the pass.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-amber-800 mb-1 text-sm md:text-base">Important Note on Acclimatization</h3>
                        <p className="text-amber-700 text-sm leading-relaxed">
                          The trail to Tilicho Lake is at very high altitude. Proper acclimatization is essential. Never rush the journey. The side trail from Khangsar to Tilicho Base Camp involves a steep climb along a narrow, exposed path that can be dangerous in bad weather. Always check conditions before proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Itinerary */}
                <section id="itinerary" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    Detailed Itinerary (Starting from Chame)
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    This itinerary assumes you are starting your trek from Chame, which is already a 6-8 hour drive from Kathmandu or Pokhara. Walking begins at Chame. This route covers Tilicho Lake and continues over Thorong La to complete the Annapurna Circuit.
                  </p>
                  
                  <div className="space-y-3 mt-4">
                    {[
                      { day: "Day 1", route: "Drive Kathmandu/Pokhara to Chame (2,670m)", alt: "2,670m", desc: "Scenic drive to the starting point of the trek. Overnight in Chame." },
                      { day: "Day 2", route: "Chame to Pisang (3,200m)", alt: "3,200m", desc: "Easy walk through pine forests with views of Paungda Danda rock face. 5-6 hours." },
                      { day: "Day 3", route: "Pisang to Manang (3,540m)", alt: "3,540m", desc: "Gradual climb through Upper Pisang with spectacular Annapurna II views. 5-6 hours." },
                      { day: "Day 4", route: "Acclimatization Day in Manang", alt: "3,540m", desc: "Rest day. Optional hike to Gangapurna Lake or Ice Lake. Essential for altitude." },
                      { day: "Day 5", route: "Manang to Shree Kharka (4,050m)", alt: "4,050m", desc: "Trek towards Tilicho. The trail climbs steadily with views of the valley below. 5-6 hours." },
                      { day: "Day 6", route: "Shree Kharka to Tilicho Base Camp (4,150m)", alt: "4,150m", desc: "Shorter day to save energy for the lake. Pass through the famous landslide section. 4-5 hours." },
                      { day: "Day 7", route: "Tilicho Base Camp to Tilicho Lake (4,919m) & return to Shree Kharka", alt: "4,919m", desc: "Early morning climb to the sacred lake. Visit the holy site, then descend back to Shree Kharka. 8-9 hours round trip." },
                      { day: "Day 8", route: "Shree Kharka to Yak Kharka (4,050m)", alt: "4,050m", desc: "Return through Khangsar and continue to Yak Kharka. Gradual descent and climb. 6-7 hours." },
                      { day: "Day 9", route: "Yak Kharka to Thorong Phedi (4,600m)", alt: "4,600m", desc: "Short day to prepare for the pass crossing. Gradual climb with mountain views. 3-4 hours." },
                      { day: "Day 10", route: "Thorong Phedi to Thorong La (5,416m) to Muktinath (3,800m)", alt: "5,416m", desc: "The highest point of the trek! Cross the famous pass and descend to sacred Muktinath Temple. 7-8 hours." },
                      { day: "Day 11", route: "Muktinath to Pokhara by EV", alt: "800m", desc: "Visit Muktinath Temple in the morning, then take an electric vehicle (EV) back to Pokhara via scenic mountain roads." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-[#f8fbfc] rounded-lg border border-[#C5E0ED]/20">
                        <div className="w-16 sm:w-20">
                          <span className="text-xs font-bold text-[#2d6a8a] uppercase tracking-wider">{item.day}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#0f2940] text-sm md:text-base">{item.route}</h3>
                          <p className="text-slate-600 text-xs md:text-sm mt-0.5">{item.desc}</p>
                        </div>
                        <div className="mt-1">
                          <Badge variant="outline" className="border-[#C5E0ED] text-[#2d6a8a] text-xs">{item.alt}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Packing List */}
                <section id="packing-list" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    Complete Packing List for Tilicho Lake
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-[#0f2940] mb-3 text-sm md:text-base">Clothing</h3>
                      <ul className="space-y-1.5">
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
                            <ChevronRight className="w-3 h-3 text-[#2d6a8a] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f2940] mb-3 text-sm md:text-base">Gear & Essentials</h3>
                      <ul className="space-y-1.5">
                        {[
                          "Sturdy trekking boots (broken in, waterproof)",
                          "35-45L daypack",
                          "Sleeping bag (-15°C comfort)",
                          "Trekking poles (essential for landslide section)",
                          "Headlamp + spare batteries",
                          "Sunglasses (UV400, category 4)",
                          "Water bottles + purification tablets",
                          "First aid kit + Diamox for altitude",
                          "Sunscreen (SPF 50+) and lip balm",
                          "Portable charger/power bank",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <ChevronRight className="w-3 h-3 text-[#2d6a8a] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 md:p-5 mt-6">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" aria-hidden="true" />
                      <p className="text-red-800 text-sm italic leading-relaxed">
                        <span className="font-bold">Special Note for Tilicho:</span> The trail from Khangsar to Tilicho Base Camp is known for frequent landslides. Bring a helmet if possible, and always check with locals about trail conditions. Trekking poles are absolutely essential for stability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Best Time */}
                <section id="best-time" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    Best Time to Visit Tilicho Lake
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The best times to trek to Tilicho Lake are during the pre-monsoon (spring) and post-monsoon (autumn) seasons when the weather is most stable.
                  </p>
                  
                  <div className="space-y-4 mt-4">
                    {[
                      { season: "Spring (March-May)", desc: "Clear skies, blooming rhododendrons, moderate temperatures. One of the best times for the trek." },
                      { season: "Autumn (September-November)", desc: "Crystal clear mountain views, stable weather, festivals along the route. Peak season." },
                      { season: "Winter (December-February)", desc: "Extremely cold at high altitudes. The lake often freezes. Not recommended unless you have winter expedition experience." },
                      { season: "Monsoon (June-August)", desc: "High risk of landslides on the Khangsar-Tilicho section. The August pilgrimage still happens but is extremely challenging and dangerous." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-[#f8fbfc] rounded-lg border border-[#C5E0ED]/20">
                        <div className="w-6 h-6 bg-[#2d6a8a]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-[#2d6a8a]" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0f2940] text-sm md:text-base">{item.season}</h3>
                          <p className="text-slate-600 text-xs md:text-sm mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Quote Block */}
                <div className="bg-gradient-to-br from-[#0f2940] to-[#1a4166] rounded-xl md:rounded-2xl p-6 md:p-8 my-8 md:my-12 relative overflow-hidden">
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 opacity-20">
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#C5E0ED]" aria-hidden="true" />
                  </div>
                  <blockquote className="relative z-10">
                    <p className="text-base md:text-lg lg:text-xl font-serif text-white leading-relaxed mb-3 md:mb-4 italic">
                      &quot;When I finally reached Tilicho Lake, after days of walking on that treacherous landslide trail, I understood why Kakbhusundi chose this place. The silence is not empty. It is full of something ancient. The lake does not just reflect the mountains. It reflects something inside you. I sat there for an hour, and I felt like I had been sitting there for lifetimes.&quot;
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED] flex items-center justify-center bg-white/10">
                        <User className="w-5 h-5 text-[#C5E0ED]" aria-hidden="true" />
                      </div>
                      <div>
                        <cite className="font-bold text-[#C5E0ED] not-italic text-sm md:text-base">Samir Lama, Pilgrim & Trekker</cite>
                        <p className="text-white/60 text-xs md:text-sm">Completed Tilicho Lake trek, November 2024</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* Conclusion */}
                <section id="conclusion" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    </span>
                    A Journey of Faith & Adventure
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Tilicho Lake is more than a trekking destination. It is a place where the boundaries between mythology and geography dissolve. Whether you come seeking the blessing of Kakbhusundi, the challenge of the highest lake, or simply the profound beauty of the Himalayas, this journey will leave an indelible mark on your soul.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The trail is challenging. Perhaps one of the most mentally and physically demanding in the Annapurna region. The landslide section between Khangsar and Tilicho Base Camp demands respect and caution. The altitude is unforgiving. But those who make it are rewarded with something that no photograph can capture.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    As you stand at the shores of Tilicho Lake, at 4,919 meters, with the sacred waters reflecting the sky and the mountains standing guard, you will understand why Kakbhusundi; the immortal crow chose this place as his home. And perhaps, for a moment, you will feel immortal too.
                  </p>
                </section>

                {/* Author Card */}
                <Card className="bg-gradient-to-br from-[#f8fbfc] to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl md:rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-[#2d6a8a]/10">
                        <User className="w-8 h-8 text-[#2d6a8a]" aria-hidden="true" />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-xs font-bold text-[#2d6a8a] uppercase tracking-wider mb-1 md:mb-2">Written By</p>
                        <h3 className="text-lg md:text-xl font-bold text-[#0f2940] mb-1">{blogPost.author.name}</h3>
                        <a 
                          href="https://www.instagram.com/sabinayadhakal/" 
                          target="_blank" 
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-2 text-sm text-[#2d6a8a] hover:text-[#1a4a6a] transition-colors mt-2"
                          aria-label="Follow Sabinaya Dhakal on Instagram"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-4 h-4 mr-2" aria-hidden="true" /> Share
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white"
                        onClick={() => handleShare("twitter")}
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4 mr-2" aria-hidden="true" /> Tweet
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#C5E0ED] text-[#2d6a8a] hover:bg-[#C5E0ED]/10"
                      onClick={handleCopyLink}
                      aria-label="Copy link to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" aria-hidden="true" /> Link Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" aria-hidden="true" /> Copy Link
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
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-bold text-[#0f2940] mb-2 md:mb-3 leading-snug group-hover:text-[#2d6a8a] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 md:gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" /> {post.readTime}
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