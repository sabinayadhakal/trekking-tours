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
  Copy,
  Check,
  Tag,
  Heart,
  Quote,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "Tilicho Lake: The Sacred Himalayan Lake of Legends, Faith, and Adventure",
  excerpt: "Perched at 4,919 meters in the Annapurna region, Tilicho Lake is not just one of the highest lakes in the world, it is a place where Hindu mythology meets breathtaking natural beauty. Discover the ancient story of Kakbhusundi, the crow sage, and why thousands of pilgrims and trekkers make the arduous journey to its holy shores each year.",
  heroImage: "/images/used/tilicho-blog.webp",
  author: {
    name: "Sabinaya Dhakal",
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
  { id: "itinerary", title: "Detailed Itinerary" },
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
    title: "Everest Base Camp vs. Annapurna Base Camp: How To Decide",
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
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
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
      "@id": "https://www.himkalaadventure.com/blog/tilicho-lake-sacred-trek",
    },
    keywords:
      "Tilicho Lake, Annapurna Circuit trek, Nepal trekking, Hindu pilgrimage, Kakbhusundi, highest lake Nepal, sacred lake Nepal, Annapurna trek",
    articleSection: "Trekking & Pilgrimage",
    wordCount: "2200",
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
                <Mountain className="w-4 h-4 text-[#cf6943]" /> Table of Contents
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
                High in the Annapurna Himalayas, where the air thins and the mountains touch the sky, lies a lake that has inspired legends for millennia. Tilicho Lake, sitting at 4,919 meters (16,138 feet), is not just one of the highest lakes in the world. It is a place where mythology becomes geography, where faith meets adventure, and where every visitor leaves transformed.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                For Hindus, this is no ordinary lake. It is the sacred abode of Kakbhusundi, the immortal crow sage who witnessed the Ramayana unfold. For trekkers, it is a challenging detour off the classic Annapurna Circuit that rewards with unparalleled views of the Himalayas. For pilgrims, it is a destination of deep spiritual significance, visited by thousands during the sacred month of August.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                In this comprehensive guide, we will explore the rich religious significance of Tilicho Lake, the legendary story of Kakbhusundi and his connection to Garuda and the Ramayana, what you need to pack for this high-altitude trek, how long it takes, and a detailed itinerary starting from Chame. Whether you come for faith or for adventure or both, Tilicho Lake awaits.
              </p>
            </section>

            {/* Image Break - Floating right */}
            <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
              <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="/images/used/tilicho-lake-1.webp"
                  alt="Tilicho Lake reflecting the surrounding Himalayan mountains at 4,919 meters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Tilicho Lake reflecting the Himalayas at 4,919m
                </div>
              </div>
            </div>

            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              This journey to the world's highest lake is not for the faint of heart. The trail involves steep climbs, exposed paths, and the constant challenge of altitude. But for those who make the journey, the reward is a place of profound beauty and spiritual significance that has drawn pilgrims and adventurers for centuries.
            </p>

            <div className="clear-both"></div>

            {/* Religious Significance - Kakbhusundi Legend */}
            <section id="religious-significance" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                The Sacred Legend of Kakbhusundi
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/tilicho-blog.webp"
                    alt="Sacred Tilicho Lake with surrounding Himalayan peaks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> The sacred shores of Tilicho Lake
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                According to Hindu mythology, Tilicho Lake is the eternal home of Kakbhusundi; a unique and fascinating figure. Kakbhusundi is a crow who was cursed and blessed into immortality. Unlike any other being, he possesses the rare gift of existing simultaneously in all three states of consciousness: waking, dreaming, and deep sleep.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The legend says that Kakbhusundi was originally a Brahmin named Bhushundi who was a devoted disciple of Lord Rama. Due to a curse from Sage Lomasa, he was transformed into a crow. However, Lord Rama, pleased with his unwavering devotion, blessed him with immortality and the ability to witness the entire Ramayana, not once, but countless times across different cosmic cycles.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                It is believed that Kakbhusundi resides at Tilicho Lake to this day, meditating and awaiting the next incarnation of Lord Rama. Devotees believe that bathing in the lake's icy waters can cleanse one of sins and bring blessings from the immortal crow sage. Some pilgrims even report seeing a giant crow near the lake, a sign that Kakbhusundi is present.
              </p>

              <div className="clear-both"></div>

              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                <div className="flex gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                  <p className="text-[#556363] text-xs sm:text-sm italic leading-relaxed">
                    <span className="font-bold text-[#14383b]">The Immortal Crow's Blessing:</span> Pilgrims believe that Kakbhusundi grants three wishes to those who reach Tilicho Lake with pure hearts. One for oneself, one for family, and one for all living beings.
                  </p>
                </div>
              </div>
            </section>

            {/* Ramayana Connection */}
            <section id="ramayana-connection" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                The Ramayana Connection & Garuda
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The story of Kakbhusundi is deeply intertwined with the Ramayana. In the Yoga Vasistha, an ancient philosophical text, Kakbhusundi narrates the entire Ramayana to Sage Vasistha from his unique perspective, having witnessed it unfold across multiple cosmic ages.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                What makes this particularly fascinating is Kakbhusundi's relationship with Garuda, the divine eagle and mount of Lord Vishnu. According to legend, Garuda once tried to eat Kakbhusundi the crow, not recognizing his divine nature. A great debate ensued between the two birds about who was greater; Lord Vishnu (Garuda's master) or Lord Rama (Kakbhusundi's master).
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The debate was resolved when both realized that Vishnu and Rama are manifestations of the same divine consciousness. Garuda and Kakbhusundi became friends, and it is said that they both visit Tilicho Lake, Garuda from time to time, and Kakbhusundi as his permanent resident. Some local traditions hold that the lake's name "Tilicho" derives from "Til" (sesame) and "Cho" (lake in Tibetan), referring to the sesame seeds offered as prayers at the site.
              </p>
            </section>

            {/* Other Religious Significances */}
            <section id="other-significance" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Other Religious Significances
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Beyond the Kakbhusundi legend, Tilicho Lake holds several other layers of spiritual importance:
              </p>
              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    title: "Sacred to Both Hindus and Buddhists",
                    desc: "While primarily a Hindu pilgrimage site, local Tibetan Buddhists also revere the lake, believing it to be connected to the sacred Manasarovar Lake in Tibet.",
                  },
                  {
                    title: "The August Pilgrimage",
                    desc: "Every year during the full moon of Shrawan (July-August), hundreds of pilgrims make the challenging journey to offer prayers and take a ritual dip in the freezing waters.",
                  },
                  {
                    title: "Shiva's Meditation",
                    desc: "Some traditions hold that Lord Shiva meditated near this lake after consuming the poison during the Samudra Manthan (churning of the ocean).",
                  },
                  {
                    title: "Connection to Muktinath",
                    desc: "The lake is spiritually linked to the nearby Muktinath Temple, one of the most sacred Vishnu temples in Hinduism. Many pilgrims visit both sites on the same journey.",
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

            {/* Trek Overview */}
            <section id="trek-overview" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Trek Overview & Duration
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The trek to Tilicho Lake is a challenging high-altitude journey that requires good physical fitness and proper acclimatization. The lake sits at 4,919 meters, and the trail reaches its highest point near the Tilicho Base Camp at around 5,200 meters.
              </p>

              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mb-3 sm:mb-4">
                <h3 className="font-bold text-[#14383b] mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Two Trek Options:
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <span className="font-bold text-[#cf6943] text-xs sm:text-sm">
                      Option 1: Tilicho Lake Trek Only (Without Thorong La)
                    </span>
                    <p className="text-[#556363] text-xs sm:text-sm mt-0.5">
                      This option takes you to Tilicho Lake and back, either returning to Chame or continuing to Jomsom. Duration: 7-10 days depending on starting point and pace. Suitable for those who want to focus specifically on the lake without crossing the challenging Thorong La pass.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#d8cec0]/30">
                    <span className="font-bold text-[#cf6943] text-xs sm:text-sm">
                      Option 2: Tilicho Lake + Annapurna Circuit (Including Thorong La)
                    </span>
                    <p className="text-[#556363] text-xs sm:text-sm mt-0.5">
                      This combines the Tilicho Lake detour with the full Annapurna Circuit, including the famous Thorong La pass at 5,416 meters. Duration: 11-12 days total. This is the classic route for adventure seekers wanting both the lake and the pass.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5">
                <div className="flex gap-2 sm:gap-3">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#14383b] mb-0.5 sm:mb-1 text-sm sm:text-base">
                      Important Note on Acclimatization
                    </h3>
                    <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                      The trail to Tilicho Lake is at very high altitude. Proper acclimatization is essential. Never rush the journey. The side trail from Khangsar to Tilicho Base Camp involves a steep climb along a narrow, exposed path that can be dangerous in bad weather. Always check conditions before proceeding.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section id="itinerary" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Detailed Itinerary (Starting from Chame)
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                This itinerary assumes you are starting your trek from Chame, which is already a 6-8 hour drive from Kathmandu or Pokhara. Walking begins at Chame. This route covers Tilicho Lake and continues over Thorong La to complete the Annapurna Circuit.
              </p>

              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    day: "Day 1",
                    route: "Drive to Chame (2,670m)",
                    alt: "2,670m",
                    desc: "Scenic drive from Kathmandu or Pokhara to the starting point.",
                  },
                  {
                    day: "Day 2",
                    route: "Chame to Pisang (3,200m)",
                    alt: "3,200m",
                    desc: "Easy walk through pine forests with views of Paungda Danda. 5-6 hours.",
                  },
                  {
                    day: "Day 3",
                    route: "Pisang to Manang (3,540m)",
                    alt: "3,540m",
                    desc: "Gradual climb through Upper Pisang with Annapurna II views. 5-6 hours.",
                  },
                  {
                    day: "Day 4",
                    route: "Acclimatization in Manang",
                    alt: "3,540m",
                    desc: "Rest day. Optional hike to Gangapurna Lake or Ice Lake.",
                  },
                  {
                    day: "Day 5",
                    route: "Manang to Shree Kharka (4,050m)",
                    alt: "4,050m",
                    desc: "Trek towards Tilicho. Steady climb with valley views. 5-6 hours.",
                  },
                  {
                    day: "Day 6",
                    route: "Shree Kharka to Tilicho Base Camp (4,150m)",
                    alt: "4,150m",
                    desc: "Shorter day to save energy. Pass through landslide section. 4-5 hours.",
                  },
                  {
                    day: "Day 7",
                    route: "Tilicho Lake (4,919m) & return to Shree Kharka",
                    alt: "4,919m",
                    desc: "Early morning climb to the sacred lake. Visit the holy site, return. 8-9 hours.",
                  },
                  {
                    day: "Day 8",
                    route: "Shree Kharka to Yak Kharka (4,050m)",
                    alt: "4,050m",
                    desc: "Return through Khangsar to Yak Kharka. 6-7 hours.",
                  },
                  {
                    day: "Day 9",
                    route: "Yak Kharka to Thorong Phedi (4,600m)",
                    alt: "4,600m",
                    desc: "Short day to prepare for the pass. 3-4 hours.",
                  },
                  {
                    day: "Day 10",
                    route: "Thorong La (5,416m) to Muktinath (3,800m)",
                    alt: "5,416m",
                    desc: "Highest point! Cross the pass and descend to Muktinath. 7-8 hours.",
                  },
                  {
                    day: "Day 11",
                    route: "Muktinath to Pokhara",
                    alt: "800m",
                    desc: "Visit Muktinath Temple, then return to Pokhara via scenic road.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 p-3 sm:p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30"
                  >
                    <div className="w-14 sm:w-16">
                      <span className="text-[10px] sm:text-xs font-bold text-[#cf6943] uppercase tracking-wider">
                        {item.day}
                      </span>
                    </div>
                    <div className="flex-1 min-w-[140px]">
                      <h3 className="font-bold text-[#14383b] text-xs sm:text-sm md:text-base">
                        {item.route}
                      </h3>
                      <p className="text-[#556363] text-[10px] sm:text-xs mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-0.5">
                      <Badge
                        variant="outline"
                        className="border-[#d8cec0] text-[#cf6943] text-[9px] sm:text-xs"
                      >
                        {item.alt}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Packing List */}
            <section id="packing-list" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Complete Packing List for Tilicho Lake
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30">
                  <h3 className="font-bold text-[#14383b] mb-2 sm:mb-3 text-sm sm:text-base">
                    Clothing
                  </h3>
                  <ul className="space-y-1 sm:space-y-1.5">
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
                      <li
                        key={i}
                        className="flex items-start gap-1.5 sm:gap-2 text-[#556363] text-[10px] sm:text-xs"
                      >
                        <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#cf6943] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/30">
                  <h3 className="font-bold text-[#14383b] mb-2 sm:mb-3 text-sm sm:text-base">
                    Gear & Essentials
                  </h3>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {[
                      "Sturdy trekking boots (broken in, waterproof)",
                      "35-45L daypack",
                      "Sleeping bag (-15°C comfort)",
                      "Trekking poles (essential)",
                      "Headlamp + spare batteries",
                      "Sunglasses (UV400, category 4)",
                      "Water bottles + purification",
                      "First aid kit + Diamox",
                      "Sunscreen (SPF 50+) and lip balm",
                      "Portable charger/power bank",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 sm:gap-2 text-[#556363] text-[10px] sm:text-xs"
                      >
                        <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#cf6943] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#e4d8c8] rounded-lg p-3 sm:p-4 md:p-5 mt-3 sm:mt-4">
                <div className="flex gap-2 sm:gap-3">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5" />
                  <p className="text-[#556363] text-xs sm:text-sm italic leading-relaxed">
                    <span className="font-bold text-[#14383b]">
                      Special Note for Tilicho:
                    </span>{" "}
                    The trail from Khangsar to Tilicho Base Camp is known for frequent landslides. Bring a helmet if possible, and always check with locals about trail conditions. Trekking poles are absolutely essential for stability.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Time */}
            <section id="best-time" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Best Time to Visit Tilicho Lake
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The best times to trek to Tilicho Lake are during the pre-monsoon (spring) and post-monsoon (autumn) seasons when the weather is most stable.
              </p>

              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  {
                    season: "Spring (March-May)",
                    desc: "Clear skies, blooming rhododendrons, moderate temperatures. One of the best times for the trek.",
                  },
                  {
                    season: "Autumn (September-November)",
                    desc: "Crystal clear mountain views, stable weather, festivals along the route. Peak season.",
                  },
                  {
                    season: "Winter (December-February)",
                    desc: "Extremely cold at high altitudes. The lake often freezes. Not recommended unless you have winter expedition experience.",
                  },
                  {
                    season: "Monsoon (June-August)",
                    desc: "High risk of landslides on the Khangsar-Tilicho section. The August pilgrimage still happens but is extremely challenging and dangerous.",
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
                        {item.season}
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
                  &quot;When I finally reached Tilicho Lake, after days of walking on that treacherous landslide trail, I understood why Kakbhusundi chose this place. The silence is not empty. It is full of something ancient. The lake does not just reflect the mountains. It reflects something inside you. I sat there for an hour, and I felt like I had been sitting there for lifetimes.&quot;
                </p>
                <footer className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#f0a17f] flex items-center justify-center bg-[#f7f2e9]/10">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#f0a17f]" />
                  </div>
                  <div>
                    <cite className="font-bold text-[#f0a17f] not-italic text-xs sm:text-sm md:text-base">
                      Samir Lama, Pilgrim & Trekker
                    </cite>
                    <p className="text-[#f7f2e9]/60 text-[10px] sm:text-xs md:text-sm">
                      Completed Tilicho Lake trek, November 2024
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Conclusion */}
            <section id="conclusion" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                A Journey of Faith & Adventure
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Tilicho Lake is more than a trekking destination. It is a place where the boundaries between mythology and geography dissolve. Whether you come seeking the blessing of Kakbhusundi, the challenge of the highest lake, or simply the profound beauty of the Himalayas, this journey will leave an indelible mark on your soul.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The trail is challenging. Perhaps one of the most mentally and physically demanding in the Annapurna region. The landslide section between Khangsar and Tilicho Base Camp demands respect and caution. The altitude is unforgiving. But those who make it are rewarded with something that no photograph can capture.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                As you stand at the shores of Tilicho Lake, at 4,919 meters, with the sacred waters reflecting the sky and the mountains standing guard, you will understand why Kakbhusundi; the immortal crow chose this place as his home. And perhaps, for a moment, you will feel immortal too.
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