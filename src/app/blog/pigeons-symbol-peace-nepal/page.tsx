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
  title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
  excerpt: "In Kathmandu, pigeons are revered as divine ancestors and harbingers of peace. In London, they're pests. This stark cultural divide reveals deep truths about how we see nature, spirituality, and our place in the world. Discover the fascinating story behind Nepal's urban pigeons and what they teach us about coexistence.",
  heroImage: "/images/used/dog-pigeons.avif",
  author: {
    name: "Sabinaya Dhakal",
    avatar: "/placeholder.svg?text=AS",
    
  },
  date: "May 9, 2026",
  readTime: "9 min read",
  category: "Culture & Society",
  tags: ["Pigeons", "Nepal", "Cultural Contrasts", "Urban Wildlife", "Symbolism", "Hinduism", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "A Tale of Two Cities" },
  { id: "symbol-of-peace", title: "Why Pigeons = Peace in Nepal" },
  { id: "religious-significance", title: "Divine Messengers & Ancestors" },
  { id: "feeding-culture", title: "Why Nepalis Invite Pigeons In" },
  { id: "europe-perspective", title: "Europe's 'Flying Rats'" },
  { id: "reasons-for-difference", title: "Why Such Different Views?" },
  { id: "urban-coexistence", title: "What We Can Learn" },
  { id: "conclusion", title: "Beyond the Feathers" },
];

const relatedPosts = [
  {
    title: "When Should You Visit Nepal? A Month-by-Month Guide to Perfect Timing",
    image: "/images/used/historic-scenic-photography-nepal.avif",
    date: "May 7, 2026",
    readTime: "11 min",
    href: "/blog/best-time-to-visit-nepal",
  },
  {
    title: "Tilicho Lake: The Sacred Himalayan Lake of Legends, Faith, and Adventure",
    image: "/images/used/tilicho-blog.avif",
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
                      <Bird className="w-4 h-4 text-[#2d6a8a]" /> Table of Contents
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
                    <h3 className="font-bold text-amber-800 mb-2">Experience Nepal's Culture Firsthand</h3>
                    <p className="text-amber-700 text-sm mb-4">
                      Join Himkala Adventure for authentic cultural tours in Kathmandu, spiritual journeys, and Himalayan treks.
                    </p>
                    <Link href="/services/day-sightseeings" className="block">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full rounded-xl">
                        Explore Our Tours
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
                    Imagine walking through a bustling city square. In Kathmandu, you'd likely see elderly women scattering handfuls of golden corn and rice to flocks of pigeons, their faces serene with the act of giving. In London or Paris, you'd more likely see a cyclist swerving to avoid the same bird, muttering about "flying rats" and the mess they leave behind.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    How can the same creature inspire such radically different emotions? The humble pigeon known scientifically as the rock dove is one of the most widespread urban birds on the planet. Yet its cultural standing varies so dramatically that it offers a fascinating window into the spiritual, historical, and environmental values of different societies.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    In Nepal, pigeons aren't just tolerated, they're welcomed, fed, and revered as symbols of peace, divine messengers, and even reincarnated ancestors. This blog post explores the beautiful relationship between Nepalis and pigeons, why these birds are everywhere in Nepali cities, and how this perspective contrasts so sharply with the European view. By the end, you might never look at a pigeon the same way again.
                  </p>
                </section>

                {/* Image Break */}
                <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden my-8 md:my-12">
                  <Image
                    src="/images/used/devotee-pigeons.avif"
                    alt="Pigeons being fed at a temple in Kathmandu, Nepal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Devotees feeding pigeons at a temple courtyard in Kathmandu, Nepal
                  </div>
                </div>

                {/* Symbol of Peace */}
                <section id="symbol-of-peace" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Why Pigeons = Peace in Nepal
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    In Nepal, the pigeon's association with peace is deeply rooted in both Hindu and Buddhist traditions. The white pigeon, in particular, is seen as a gentle, harmless creature that embodies the ideal of <span className="italic">ahimsa</span> (non-violence), a core tenet of both religions.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Unlike predatory animals, pigeons neither bite nor sting nor threaten humans. Their soft cooing sounds are considered soothing and meditative, adding to the peaceful atmosphere of temple courtyards where they gather in large numbers. For many Nepalis, watching pigeons eat from one's hand is a small but meaningful act of compassion that generates good karma.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 mt-4">
                    <div className="flex gap-3">
                      <Sparkles className="w-5 h-5 text-green-600 shrink-0" />
                      <p className="text-green-800 text-sm italic leading-relaxed">
                        <span className="font-bold">The Dove as a Global Peace Symbol:</span> Interestingly, the use of a white dove carrying an olive branch as a peace symbol originated in the biblical story of Noah's Ark. Nepal's reverence for pigeons predates this Western symbol by millennia, rooted in completely different philosophical traditions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Religious Significance */}
                <section id="religious-significance" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Landmark className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Divine Messengers & Ancestors
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The pigeon's sacred status in Nepal goes far beyond general notions of peace. In Hindu mythology, pigeons are believed to be messengers of Yama, the god of death, and are also associated with the goddess of wealth and prosperity, Lakshmi. Feeding pigeons is thought to please Lakshmi, bringing wealth and good fortune to one's home.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Perhaps even more significant is the widespread belief across both Hindu and Buddhist communities in Nepal that pigeons may be the reincarnated souls of ancestors or loved ones who have passed away. When a Nepali feeds a pigeon, they may literally be offering food to their grandfather, mother, or another departed relative who has returned in this humble form.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Card className="bg-gradient-to-br from-[#C5E0ED]/20 to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl">
                      <CardContent className="p-5">
                        <h4 className="font-bold text-[#0f2940] mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#2d6a8a]" /> Bhagwan's Mount
                        </h4>
                        <p className="text-slate-600 text-sm">
                          In some traditions, the pigeon is considered a mount (vahana) of certain deities, making the bird itself semi-divine and worthy of respect.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#C5E0ED]/20 to-[#e8f4f8] border-[#C5E0ED]/30 rounded-xl">
                      <CardContent className="p-5">
                        <h4 className="font-bold text-[#0f2940] mb-2 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-[#2d6a8a]" /> Buddhist Connections
                        </h4>
                        <p className="text-slate-600 text-sm">
                          Tibetan Buddhist traditions also venerate pigeons, seeing them as beings capable of generating Bodhicitta (the compassionate mind striving for enlightenment).
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Feeding Culture */}
                <section id="feeding-culture" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Droplets className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Why Nepalis Invite Pigeons In
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Walk through any major Nepali city; Kathmandu, Pokhara, Bhaktapur and you'll notice pigeons congregating not just near temples but also around homes, street corners, and public squares. This isn't accidental. Nepalis actively encourage pigeons to come near human settlements for several interconnected reasons:
                  </p>
                  <div className="space-y-4 mt-4">
                    {[
                      { title: "Daily Merit-Making", desc: "For many devout Hindus and Buddhists, offering food to pigeons is part of their daily morning ritual (puja). The act generates punya (merit) that can improve one's current life circumstances or future rebirth." },
                      { title: "Ancestor Connection", desc: "The belief that deceased relatives may return as pigeons transforms feeding into an act of ongoing family care. Nepalis often feed pigeons with the explicit intention of honoring their ancestors." },
                      { title: "Festivals & Special Days", desc: "During festivals like Tihar (the festival of lights) and Nag Panchami, feeding pigeons becomes especially important. Some families even construct small perches on rooftops specifically for pigeons." },
                      { title: "Economic & Historical Factors", desc: "Unlike European cities that underwent rapid industrialization and sanitation campaigns that demonized urban animals, Nepal's predominantly agrarian and religious culture never developed the same aversion." },
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
                      &quot;When I feed the pigeons every morning, I am not just giving grain to birds. I am offering food to my mother, who passed away ten years ago. The pigeon that eats from my hand, perhaps that is her. And even if it isn't, the act of giving keeps her memory alive in my heart.&quot;
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#C5E0ED] flex items-center justify-center bg-white/10">
                        <User className="w-5 h-5 text-[#C5E0ED]" />
                      </div>
                      <div>
                        <cite className="font-bold text-[#C5E0ED] not-italic text-sm md:text-base">Kamala Devi, 67, Kathmandu resident</cite>
                        <p className="text-white/60 text-xs md:text-sm">Interviewed at Pashupatinath Temple, 2025</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* Europe's Perspective */}
                <section id="europe-perspective" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Europe's 'Flying Rats': A Study in Contrast
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Now, let's cross continents. In cities like London, Paris, Berlin, and Rome, the pigeon enjoys no such reverence. Instead, the common phrase "flying rat" captures the prevailing European attitude: pigeons are dirty, disease-carrying pests that deface statues, spread droppings, and compete with humans for urban space.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    This hostility isn't ancient. It's a relatively modern development tied to industrialization and changing ideas about urban sanitation. In medieval Europe, pigeons were actually valued. They were kept in dovecotes for their eggs, meat, and nutrient-rich droppings (used as fertilizer). Nobility even considered them a status symbol.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5 mt-4">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> The Turning Point
                    </h4>
                    <p className="text-red-700 text-sm leading-relaxed">
                      The shift began during the Industrial Revolution when cities grew crowded and sanitation became a public health crisis. Pigeons, which thrived on grain spillage and urban waste, multiplied rapidly. Their droppings, previously seen as valuable fertilizer, now corroded stone buildings and statues. By the 20th century, urban planners and public health officials had successfully rebranded pigeons from useful animals to vermin.
                    </p>
                  </div>
                </section>

                {/* Reasons for Difference */}
                <section id="reasons-for-difference" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Why Such Different Views?
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <Card className="border-[#C5E0ED]/30 rounded-xl overflow-hidden">
                      <div className="bg-[#0f2940] px-4 py-2">
                        <h3 className="font-bold text-white text-sm">Nepal (Reverence)</h3>
                      </div>
                      <CardContent className="p-4 space-y-2">
                        {[
                          "Religious beliefs (Hinduism/Buddhism)",
                          "Ancestor reincarnation beliefs",
                          "Ahimsa (non-violence) philosophy",
                          "Agrarian, pre-industrial mindset",
                          "Animals seen as co-inhabitants, not pests",
                          "Feeding = merit/positive karma",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                            <Heart className="w-3 h-3 text-green-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                    <Card className="border-red-200 rounded-xl overflow-hidden">
                      <div className="bg-red-700 px-4 py-2">
                        <h3 className="font-bold text-white text-sm">Europe (Rejection)</h3>
                      </div>
                      <CardContent className="p-4 space-y-2">
                        {[
                          "Secular, utilitarian worldview",
                          "Industrial-era sanitation campaigns",
                          "Urban planning prioritizing cleanliness",
                          "Association with disease (real & perceived)",
                          "Property damage (droppings corrosive)",
                          "Seen as invasive & overpopulated",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                            <X className="w-3 h-3 text-red-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* What We Can Learn */}
                <section id="urban-coexistence" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    What We Can Learn from Nepal's Approach
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Nepal's relationship with pigeons isn't naive. Nepalis are fully aware that pigeons can be messy and that large flocks create sanitation challenges. Yet the spiritual and cultural benefits of coexistence are seen as outweighing the inconveniences. This perspective offers valuable lessons for our increasingly urbanized world:
                  </p>
                  <div className="space-y-3 mt-4">
                    {[
                      { lesson: "Compassion as Urban Policy", desc: "How might our cities change if we prioritized kindness toward all living beings, even those we find inconvenient?" },
                      { lesson: "Nature Connection in Daily Life", desc: "Feeding pigeons requires no special trip to a national park. It's a daily moment of connection with the non-human world." },
                      { lesson: "Death & Continuity", desc: "Believing that ancestors may return as animals offers a comforting model of death that keeps loved ones symbolically present." },
                      { lesson: "Beyond Utility", desc: "A creature need not be 'useful' to humans to deserve respect and care. This principle extends far beyond pigeons to all of nature." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 md:p-4 bg-gradient-to-r from-[#C5E0ED]/20 to-transparent rounded-lg md:rounded-xl border-l-4 border-[#2d6a8a]">
                        <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#0f2940] mb-1 text-sm md:text-base">{item.lesson}</h4>
                          <p className="text-slate-600 text-xs md:text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-8 md:mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f2940] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg md:rounded-xl flex items-center justify-center text-[#0f2940]">
                      <Bird className="w-4 h-4 md:w-5 md:h-5" />
                    </span>
                    Beyond the Feathers: A Mirror to Ourselves
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The pigeon, it turns out, is not just a bird. It's a mirror reflecting how different cultures answer fundamental questions: What is our relationship with other living beings? How do we honor our ancestors? What do we consider sacred versus polluted?
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    In Nepal, the pigeon invites us into a worldview where the boundaries between human, animal, and divine are porous and permeable. Your deceased grandmother might be waiting for you on a temple ledge. Your act of scattering grain is indistinguishable from prayer. Peace isn't an abstract ideal. It's a cooing sound outside your window at dawn.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Next time you see a pigeon whether in Kathmandu, London, or anywhere in between, perhaps pause before dismissing it. That unassuming bird carries centuries of spiritual meaning, cultural baggage, and a lesson about how we choose to see the world. And in Nepal, at least, the choice is clear: welcome the pigeon, feed the pigeon, love the pigeon. For in that small act, peace becomes real.
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