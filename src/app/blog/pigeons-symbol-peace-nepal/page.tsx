"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  ChevronRight,
  Copy,
  Check,
  Tag,
  Menu,
  X,
  Heart,
  MoveUpRight,
  Bird,
  Landmark,
  Droplets,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Shield,
  Globe,
  Quote,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "From Sacred Messengers to 'Flying Rats': Why Nepalis Worship Pigeons While Europeans Shoo Them Away",
  excerpt: "In Kathmandu, pigeons are revered as divine ancestors and harbingers of peace. In London, they're pests. This stark cultural divide reveals deep truths about how we see nature, spirituality, and our place in the world. Discover the fascinating story behind Nepal's urban pigeons and what they teach us about coexistence.",
  heroImage: "/images/used/dog-pigeons.webp",
  author: {
    name: "Sabinaya Dhakal",
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
    }
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
  };

  // Schema.org BlogPosting structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    description: blogPost.excerpt,
    image: `https://www.himkalaadventure.com${blogPost.heroImage}`,
    datePublished: "2026-05-09",
    dateModified: "2026-05-09",
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
      "@id": "https://www.himkalaadventure.com/blog/pigeons-symbol-peace-nepal",
    },
    keywords:
      "pigeons Nepal, cultural contrasts Nepal Europe, urban wildlife Nepal, pigeon symbolism Hinduism, Kathmandu pigeons, Nepali culture traditions",
    articleSection: "Culture & Society",
    wordCount: "1800",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Page Header - Updated to match Free Walking Tour style */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[880px]">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                <span>{blogPost.category}</span>
              </div>
              <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                {blogPost.title}
              </h1>
            </div>
            <div className="max-w-full md:max-w-[280px]">
              <p className="text-sm leading-6 text-[#66706d]">
                {blogPost.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                  {blogPost.readTime}
                </span>
                <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                  {blogPost.date}
                </span>
              </div>
            </div>
          </div>

          {/* Author & Share - Clean row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-6 border-t border-[#d8cec0]/30">
            <div className="flex items-center gap-3 text-sm text-[#66706d]">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#d8cec0]/30 bg-[#e4d8c8] flex items-center justify-center">
                <User className="w-4 h-4 text-[#cf6943]" />
              </div>
              <span className="font-medium text-[#14383b]">{blogPost.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 rounded-full bg-[#e4d8c8] hover:bg-[#d8cec0] transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4 text-[#14383b]" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-[#e4d8c8] hover:bg-[#d8cec0] transition-colors"
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#cf6943]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#14383b]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents - Inline, clean */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-6 sm:py-8 border-b border-[#d8cec0]/30">
        <div className="mx-auto max-w-[880px]">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-xs font-semibold text-[#66706d] uppercase tracking-wider flex items-center gap-2">
                <Bird className="w-4 h-4 text-[#cf6943]" /> Table of Contents
              </span>
              <ChevronDown className="w-4 h-4 text-[#66706d] group-open:rotate-180 transition-transform" />
            </summary>
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 mt-3 sm:mt-4">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-xs sm:text-sm py-2 px-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-[#e47a4f]/20 text-[#14383b] font-medium"
                      : "text-[#556363] hover:bg-[#e4d8c8] hover:text-[#cf6943]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </details>
        </div>
      </section>

      {/* Main Content - Full width, no sidebar */}
      <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[880px]">
          <article className="prose prose-sm sm:prose-base prose-slate prose-headings:font-serif prose-headings:text-[#14383b] prose-a:text-[#cf6943] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#14383b] prose-headings:tracking-[-.02em] prose-headings:leading-tight max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-6 sm:mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-lg text-[#556363] leading-relaxed mb-3 sm:mb-4 first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-6xl first-letter:font-serif first-letter:text-[#14383b] first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-0.5 sm:first-letter:mt-1">
                Imagine walking through a bustling city square. In Kathmandu, you'd likely see elderly women scattering handfuls of golden corn and rice to flocks of pigeons, their faces serene with the act of giving. In London or Paris, you'd more likely see a cyclist swerving to avoid the same bird, muttering about "flying rats" and the mess they leave behind.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                How can the same creature inspire such radically different emotions? The humble pigeon known scientifically as the rock dove is one of the most widespread urban birds on the planet. Yet its cultural standing varies so dramatically that it offers a fascinating window into the spiritual, historical, and environmental values of different societies.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                In Nepal, pigeons aren't just tolerated, they're welcomed, fed, and revered as symbols of peace, divine messengers, and even reincarnated ancestors. This blog post explores the beautiful relationship between Nepalis and pigeons, why these birds are everywhere in Nepali cities, and how this perspective contrasts so sharply with the European view. By the end, you might never look at a pigeon the same way again.
              </p>
            </section>

            {/* Image Break - Floating right */}
            <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
              <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="/images/used/devotee-pigeons.webp"
                  alt="Devotee feeding pigeons at a temple courtyard in Kathmandu, Nepal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Devotees feeding pigeons at a temple courtyard
                </div>
              </div>
            </div>

            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              This stark cultural divide reveals deep truths about how we see nature, spirituality, and our place in the world. In Nepal, pigeons are sacred. In Europe, they're pests. What explains this dramatic difference? The answer lies in religion, history, economics, and how each society defines its relationship with the natural world.
            </p>

            <div className="clear-both"></div>

            {/* Symbol of Peace */}
            <section id="symbol-of-peace" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Why Pigeons = Peace in Nepal
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/dog-pigeons.webp"
                    alt="Pigeons gathered at a temple courtyard in Kathmandu, Nepal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Pigeons gathering at a temple courtyard
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                In Nepal, the pigeon's association with peace is deeply rooted in both Hindu and Buddhist traditions. The white pigeon, in particular, is seen as a gentle, harmless creature that embodies the ideal of <span className="italic">ahimsa</span> (non-violence), a core tenet of both religions.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Unlike predatory animals, pigeons neither bite nor sting nor threaten humans. Their soft cooing sounds are considered soothing and meditative, adding to the peaceful atmosphere of temple courtyards where they gather in large numbers. For many Nepalis, watching pigeons eat from one's hand is a small but meaningful act of compassion that generates good karma.
              </p>
              <div className="clear-both"></div>
              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                <div className="flex gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                  <p className="text-[#556363] text-xs sm:text-sm italic leading-relaxed">
                    <span className="font-bold text-[#14383b]">The Dove as a Global Peace Symbol:</span> Interestingly, the use of a white dove carrying an olive branch as a peace symbol originated in the biblical story of Noah's Ark. Nepal's reverence for pigeons predates this Western symbol by millennia, rooted in completely different philosophical traditions.
                  </p>
                </div>
              </div>
            </section>

            {/* Religious Significance */}
            <section id="religious-significance" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Divine Messengers & Ancestors
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The pigeon's sacred status in Nepal goes far beyond general notions of peace. In Hindu mythology, pigeons are believed to be messengers of Yama, the god of death, and are also associated with the goddess of wealth and prosperity, Lakshmi. Feeding pigeons is thought to please Lakshmi, bringing wealth and good fortune to one's home.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Perhaps even more significant is the widespread belief across both Hindu and Buddhist communities in Nepal that pigeons may be the reincarnated souls of ancestors or loved ones who have passed away. When a Nepali feeds a pigeon, they may literally be offering food to their grandfather, mother, or another departed relative who has returned in this humble form.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-5">
                <div className="bg-[#f7f2e9] rounded-lg p-4 sm:p-5 border border-[#d8cec0]/30">
                  <h3 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <Shield className="w-4 h-4 text-[#cf6943]" /> Bhagwan's Mount
                  </h3>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    In some traditions, the pigeon is considered a mount (vahana) of certain deities, making the bird itself semi-divine and worthy of respect.
                  </p>
                </div>
                <div className="bg-[#f7f2e9] rounded-lg p-4 sm:p-5 border border-[#d8cec0]/30">
                  <h3 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <Globe className="w-4 h-4 text-[#cf6943]" /> Buddhist Connections
                  </h3>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    Tibetan Buddhist traditions also venerate pigeons, seeing them as beings capable of generating Bodhicitta (the compassionate mind striving for enlightenment).
                  </p>
                </div>
              </div>
            </section>

            {/* Feeding Culture */}
            <section id="feeding-culture" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Why Nepalis Invite Pigeons In
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Walk through any major Nepali city; Kathmandu, Pokhara, Bhaktapur and you'll notice pigeons congregating not just near temples but also around homes, street corners, and public squares. This isn't accidental. Nepalis actively encourage pigeons to come near human settlements for several interconnected reasons:
              </p>
              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    title: "Daily Merit-Making",
                    desc: "For many devout Hindus and Buddhists, offering food to pigeons is part of their daily morning ritual (puja). The act generates punya (merit) that can improve one's current life circumstances or future rebirth.",
                  },
                  {
                    title: "Ancestor Connection",
                    desc: "The belief that deceased relatives may return as pigeons transforms feeding into an act of ongoing family care. Nepalis often feed pigeons with the explicit intention of honoring their ancestors.",
                  },
                  {
                    title: "Festivals & Special Days",
                    desc: "During festivals like Tihar (the festival of lights) and Nag Panchami, feeding pigeons becomes especially important. Some families even construct small perches on rooftops specifically for pigeons.",
                  },
                  {
                    title: "Economic & Historical Factors",
                    desc: "Unlike European cities that underwent rapid industrialization and sanitation campaigns that demonized urban animals, Nepal's predominantly agrarian and religious culture never developed the same aversion.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#cf6943]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#cf6943]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#14383b] text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-[#556363] text-xs sm:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote Block */}
            <div className="bg-[#14383b] rounded-lg p-5 sm:p-6 md:p-8 my-6 sm:my-8 md:my-12 relative overflow-hidden border border-[#f7f2e9]/20">
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 opacity-20">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#f0a17f]" />
              </div>
              <blockquote className="relative z-10">
                <p className="text-sm sm:text-base md:text-lg font-serif text-[#f7f2e9] leading-relaxed mb-3 sm:mb-4 italic">
                  &quot;When I feed the pigeons every morning, I am not just giving grain to birds. I am offering food to my mother, who passed away ten years ago. The pigeon that eats from my hand, perhaps that is her. And even if it isn't, the act of giving keeps her memory alive in my heart.&quot;
                </p>
                <footer className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#f0a17f] flex items-center justify-center bg-[#f7f2e9]/10">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#f0a17f]" />
                  </div>
                  <div>
                    <cite className="font-bold text-[#f0a17f] not-italic text-xs sm:text-sm md:text-base">
                      Kamala Devi, 67, Kathmandu resident
                    </cite>
                    <p className="text-[#f7f2e9]/60 text-[10px] sm:text-xs md:text-sm">
                      Interviewed at Pashupatinath Temple, 2025
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Europe's Perspective */}
            <section id="europe-perspective" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Europe's 'Flying Rats': A Study in Contrast
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Now, let's cross continents. In cities like London, Paris, Berlin, and Rome, the pigeon enjoys no such reverence. Instead, the common phrase "flying rat" captures the prevailing European attitude: pigeons are dirty, disease-carrying pests that deface statues, spread droppings, and compete with humans for urban space.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                This hostility isn't ancient. It's a relatively modern development tied to industrialization and changing ideas about urban sanitation. In medieval Europe, pigeons were actually valued. They were kept in dovecotes for their eggs, meat, and nutrient-rich droppings (used as fertilizer). Nobility even considered them a status symbol.
              </p>
              <div className="bg-[#e4d8c8] rounded-lg p-4 sm:p-5 mt-3 sm:mt-4">
                <h3 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <AlertTriangle className="w-4 h-4 text-[#cf6943]" /> The Turning Point
                </h3>
                <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                  The shift began during the Industrial Revolution when cities grew crowded and sanitation became a public health crisis. Pigeons, which thrived on grain spillage and urban waste, multiplied rapidly. Their droppings, previously seen as valuable fertilizer, now corroded stone buildings and statues. By the 20th century, urban planners and public health officials had successfully rebranded pigeons from useful animals to vermin.
                </p>
              </div>
            </section>

            {/* Reasons for Difference */}
            <section id="reasons-for-difference" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Why Such Different Views?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <div className="bg-[#f7f2e9] rounded-lg overflow-hidden border border-[#d8cec0]/50">
                  <div className="bg-[#14383b] px-3 sm:px-4 py-1.5 sm:py-2">
                    <h3 className="font-bold text-[#f7f2e9] text-xs sm:text-sm">
                      Nepal (Reverence)
                    </h3>
                  </div>
                  <div className="p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                    {[
                      "Religious beliefs (Hinduism/Buddhism)",
                      "Ancestor reincarnation beliefs",
                      "Ahimsa (non-violence) philosophy",
                      "Agrarian, pre-industrial mindset",
                      "Animals seen as co-inhabitants, not pests",
                      "Feeding = merit/positive karma",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm text-[#556363]"
                      >
                        <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#f7f2e9] rounded-lg overflow-hidden border border-[#d8cec0]/50">
                  <div className="bg-[#cf6943] px-3 sm:px-4 py-1.5 sm:py-2">
                    <h3 className="font-bold text-[#f7f2e9] text-xs sm:text-sm">
                      Europe (Rejection)
                    </h3>
                  </div>
                  <div className="p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                    {[
                      "Secular, utilitarian worldview",
                      "Industrial-era sanitation campaigns",
                      "Urban planning prioritizing cleanliness",
                      "Association with disease (real & perceived)",
                      "Property damage (droppings corrosive)",
                      "Seen as invasive & overpopulated",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm text-[#556363]"
                      >
                        <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* What We Can Learn */}
            <section id="urban-coexistence" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                What We Can Learn from Nepal's Approach
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Nepal's relationship with pigeons isn't naive. Nepalis are fully aware that pigeons can be messy and that large flocks create sanitation challenges. Yet the spiritual and cultural benefits of coexistence are seen as outweighing the inconveniences. This perspective offers valuable lessons for our increasingly urbanized world:
              </p>
              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    lesson: "Compassion as Urban Policy",
                    desc: "How might our cities change if we prioritized kindness toward all living beings, even those we find inconvenient?",
                  },
                  {
                    lesson: "Nature Connection in Daily Life",
                    desc: "Feeding pigeons requires no special trip to a national park. It's a daily moment of connection with the non-human world.",
                  },
                  {
                    lesson: "Death & Continuity",
                    desc: "Believing that ancestors may return as animals offers a comforting model of death that keeps loved ones symbolically present.",
                  },
                  {
                    lesson: "Beyond Utility",
                    desc: "A creature need not be 'useful' to humans to deserve respect and care. This principle extends far beyond pigeons to all of nature.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-[#f7f2e9] rounded-lg border-l-4 border-[#cf6943]"
                  >
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#14383b] text-sm sm:text-base">
                        {item.lesson}
                      </h3>
                      <p className="text-[#556363] text-xs sm:text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Beyond the Feathers: A Mirror to Ourselves
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The pigeon, it turns out, is not just a bird. It's a mirror reflecting how different cultures answer fundamental questions: What is our relationship with other living beings? How do we honor our ancestors? What do we consider sacred versus polluted?
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                In Nepal, the pigeon invites us into a worldview where the boundaries between human, animal, and divine are porous and permeable. Your deceased grandmother might be waiting for you on a temple ledge. Your act of scattering grain is indistinguishable from prayer. Peace isn't an abstract ideal. It's a cooing sound outside your window at dawn.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Next time you see a pigeon whether in Kathmandu, London, or anywhere in between, perhaps pause before dismissing it. That unassuming bird carries centuries of spiritual meaning, cultural baggage, and a lesson about how we choose to see the world. And in Nepal, at least, the choice is clear: welcome the pigeon, feed the pigeon, love the pigeon. For in that small act, peace becomes real.
              </p>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
              {blogPost.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-[#d8cec0] text-[#556363] hover:bg-[#e4d8c8] cursor-pointer rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </article>

          {/* Share Section - Bottom of article */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[#d8cec0]/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-[#66706d]">Enjoyed this article? Share it with fellow adventurers.</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-[#1877f2] hover:bg-[#1877f2]/90 text-white rounded-lg"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-3.5 h-3.5 mr-1.5" /> Share
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#d8cec0] text-[#14383b] hover:bg-[#e4d8c8] rounded-lg"
                  onClick={handleCopyLink}
                >
                  {copied ? <Check className="w-3.5 h-3.5 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-[880px]">
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
              className="flex items-center gap-2 border-b border-[#cf6943] pb-1 text-[10px] sm:text-[11px] font-bold tracking-[.14em] text-[#cf6943]"
            >
              VIEW ALL <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {relatedPosts.map((post, i) => (
              <Link href={post.href} key={i} className="block">
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
    </div>
  );
}