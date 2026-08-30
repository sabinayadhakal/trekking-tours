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
  Menu,
  X,
  Heart,
  MoveUpRight,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: "Everest Base Camp vs. Annapurna Base Camp: How To Decide Your Next Big Trek",
  excerpt: "Two major treks dominate every Nepal itinerary shortlist. Everest Base Camp is famous for the altitude and the realisation that you're standing at the foot of the world's tallest mountain. Annapurna Base Camp is famous for the scenery, the feeling of being swallowed whole by peaks on every side. Which one is right for you?",
  heroImage: "/images/used/ebc-vs-abc.webp",
  author: {
    name: "Meg Cassidy",
  },
  date: "May 26, 2026",
  readTime: "16 min read",
  category: "Trekking Guide",
  tags: ["Everest Base Camp", "Annapurna Base Camp", "EBC vs ABC", "Nepal Trekking", "Trek Comparison", "Himkala Adventure"],
};

const tableOfContents = [
  { id: "introduction", title: "Two Giants of Nepal Trekking" },
  { id: "at-a-glance", title: "At a Glance Comparison" },
  { id: "altitude", title: "Altitude" },
  { id: "physical-preparation", title: "Physical Preparation" },
  { id: "duration-logistics", title: "Duration and Logistics" },
  { id: "cost", title: "Cost" },
  { id: "scenery-experience", title: "Scenery and Experience" },
  { id: "crowds", title: "Crowds" },
  { id: "best-time", title: "Best Time to Trek" },
  { id: "what-to-expect", title: "What to Expect" },
  { id: "which-is-right", title: "Which is Right for You?" },
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
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
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
      "@id": "https://www.himkalaadventure.com/blog/everest-vs-annapurna-base-camp",
    },
    keywords:
      "Everest Base Camp, Annapurna Base Camp, EBC vs ABC, Nepal trekking, Himalayan trek comparison, Everest trek, Annapurna trek",
    articleSection: "Trekking Guide",
    wordCount: "2100",
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
                <Menu className="w-4 h-4 text-[#cf6943]" /> Table of Contents
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
                Two major treks dominate every Nepal itinerary shortlist. Everest Base Camp is the name everyone knows. It's famous for the altitude and the realisation that you're standing at the foot of the world's tallest mountain. Annapurna Base Camp is famous for the scenery, the feeling of being swallowed whole by peaks on every side.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Both treks are achievable for fairly fit, non-technical trekkers. Deciding which one suits you best, however, goes beyond just choosing by name.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                To help you decide, this guide breaks down key factors like altitude, cost, logistics, terrain, and overall experience. These details will support your decision as you get closer to booking that flight to Nepal.
              </p>
            </section>

            {/* Image Break - Floating right */}
            <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
              <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                <Image
                  src="/images/used/ebc-vs-abc.webp"
                  alt="Comparison of Everest and Annapurna mountain ranges in Nepal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Everest and Annapurna – two very different Himalayan experiences
                </div>
              </div>
            </div>

            <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              This comparison guide breaks down everything you need to know about both treks. We'll look at altitude, physical preparation, duration, logistics, cost, scenery, crowds, and the best times to go. By the end, you'll have a clear picture of which trek aligns with your goals, fitness level, and travel style.
            </p>

            <div className="clear-both"></div>

            {/* At a Glance Comparison Table */}
            <section id="at-a-glance" className="mb-6 sm:mb-8 md:mb-12 w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                At a Glance Comparison
              </h2>

              <div className="w-full overflow-x-auto">
                <div className="min-w-[280px] w-full">
                  <table className="w-full text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#14383b] text-[#f7f2e9]">
                        <th className="p-2 sm:p-3 text-left rounded-l-lg">Features</th>
                        <th className="p-2 sm:p-3 text-left">Everest Base Camp</th>
                        <th className="p-2 sm:p-3 text-left rounded-r-lg">Annapurna Base Camp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Maximum altitude", ebc: "5,364m (at Kala Patthar)", abc: "4,130m" },
                        { feature: "Duration", ebc: "12 – 14 days", abc: "10 – 12 days" },
                        { feature: "Difficulty", ebc: "Moderate–challenging", abc: "Moderate" },
                        { feature: "Base cost (guided)", ebc: "$1,400 – $2,500", abc: "$700 – $1,200" },
                        { feature: "Starting point", ebc: "Lukla (flight from Kathmandu)", abc: "Pokhara" },
                        { feature: "Best seasons", ebc: "Mar – May, Oct – Nov", abc: "Mar – May, Oct – Nov" },
                      ].map((item, i) => (
                        <tr key={i} className={`border-b border-[#d8cec0]/30 ${i % 2 === 0 ? 'bg-[#f7f2e9]' : 'bg-[#f2ede4]'}`}>
                          <td className="p-2 sm:p-3 font-medium text-[#14383b] text-xs sm:text-sm">{item.feature}</td>
                          <td className="p-2 sm:p-3 text-[#556363] text-xs sm:text-sm">{item.ebc}</td>
                          <td className="p-2 sm:p-3 text-[#556363] text-xs sm:text-sm">{item.abc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Altitude */}
            <section id="altitude" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Altitude
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/everest-2.webp"
                    alt="Tengboche Monastery with Ama Dablam mountain in the Everest region"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> Tengboche Monastery – a highlight of the Everest trek
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                The altitude difference between these two treks is significant – and this will shape everything from your itinerary to your risk profile.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Everest Base Camp reaches 5,364m at Kala Patthar – the rocky viewpoint above Gorak Shep that frames Everest's north face. The trail itself is good for those with a fair amount of fitness, but the altitude is more unforgiving. Acclimatisation at Namche Bazaar and Dingboche is built into the itinerary for good reason. Above 4,000m, fitness becomes secondary to how well your body adapts.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Annapurna Base Camp has a more manageable altitude at 4,130m, but the terrain more than compensates for this. Daily elevation can be harsher, with steep stone staircases, ascents through dense rhododendron forests, and tough climbs through the Modi Khola valley, with little flat ground to recover on.
              </p>

              <div className="clear-both"></div>
            </section>

            {/* Physical Preparation */}
            <section id="physical-preparation" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Physical Preparation
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Neither trek requires prior mountaineering experience, but both reward a solid base of cardiovascular fitness before you arrive.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                For Everest, the priority is endurance, as you will be trekking long days at altitude and your body will work harder to compensate for the thinner air. Training should focus on sustained walking, long hikes, uphill work and anything that builds your capacity to walk steadily for half a day with few breaks.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Annapurna can be more demanding on your legs. The steeper ascents and irregular terrain means strength training, particularly quads and knees, matters as much as cardiovascular fitness. Consistent training for a few months before either trek will impact your experience more than you realise.
              </p>
            </section>

            {/* Duration and Logistics */}
            <section id="duration-logistics" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Duration and Logistics
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Out of the two, Annapurna Base Camp is logistically easier. Pokhara is your base – a short domestic flight or a seven-hour bus ride from Kathmandu – and the trailhead is within easy reach. A standard itinerary runs 10–12 days. The route alternates between stretches of quiet trail through forests and small villages, past teahouses, locally-owned shops and the occasional school or temple, though the busier stops still retain a certain calm.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Everest Base Camp is a little more involved with the trek starting from Lukla, accessed only by a flight, which can be weather-dependent. Delays are common, though mainly in shoulder seasons. Namche Bazaar is the last hub before settlements thin out and the route becomes progressively more remote, with longer stretches between stops and less of everyday Nepali life visible on the trail. For EBC, plan for 12–14 days minimum, allowing extra time for acclimatisation.
              </p>
            </section>

            {/* Cost */}
            <section id="cost" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Cost
              </h2>

              <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] float-right ml-0 sm:ml-4 md:ml-6 mb-3 sm:mb-4">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/used/abc-3.webp"
                    alt="Annapurna Base Camp sanctuary surrounded by 7,000-meter Himalayan peaks"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[8px] sm:text-[9px] px-2 py-1 rounded flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-white/70 rounded-full"></span> The Annapurna Sanctuary – circled by 7,000m peaks
                  </div>
                </div>
              </div>

              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Both treks run as fully guided packages – with permits, accommodation, meals, a guide, and an optional porter included. With Himkala Adventure, Annapurna starts from USD 1,180 and Everest from USD 1,450.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Everest's higher cost comes down to logistics. The Khumbu valley is remote, and supplies are expensive. Teahouse prices climb with every kilometre of altitude, and the Kathmandu–Lukla flight is a cost you'll have to factor before arriving at the start point. Annapurna is more straightforward in terms of financial commitment, based in Pokhara with road access to the trailhead via jeep.
              </p>

              <div className="clear-both"></div>
            </section>

            {/* Scenery and Experience */}
            <section id="scenery-experience" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Scenery and Experience
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Personal preference carries more weight than anything else.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Everest Base Camp moves through the Khumbu valley, through Sherpa villages and ancient monasteries with the constant presence of the world's tallest mountain growing closer with every day. Tengboche Monastery, perched at 3,860m with Ama Dablam rising behind it, is one of the most picturesque, peaceful places in the Himalayas.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Annapurna Base Camp is a different experience. The trail ascends deep into rhododendron forests, terraced Gurung villages, and the deep gorge of the Modi Khola before opening into the Annapurna Sanctuary – a high glacial amphitheatre circled by peaks exceeding 7,000m. The transition from forest to alpine to sanctuary happens fast. On the descent, Jhinu hot springs offer something Everest can't: a well-earned soak in natural thermal pools with Machhapuchhre standing overhead.
              </p>
            </section>

            {/* Crowds */}
            <section id="crowds" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Crowds
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Everest Base Camp is one of the most trafficked trekking routes in the world. The spring peak season lasts between April and May and brings significant numbers through the Khumbu valley. It's still a wilderness experience, but a shared one. If solitude matters, your window is narrower and trekking during the shoulder seasons might be for you.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Annapurna draws fewer trekkers, and the trail network is more spread out with different entry and exit points, meaning foot traffic doesn't concentrate the same way – the crowd is more transient with trekkers branching off onto other routes. The Annapurna route itself retains a sense of quiet that's increasingly difficult to find on the Everest route during the peak trekking season.
              </p>
            </section>

            {/* Best Time to Trek */}
            <section id="best-time" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Best Time to Trek
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Spring (March until May) and autumn (September to November) are the best windows for both treks, bringing clear skies, stable temperatures and the best visibility on the high routes. October and November are widely considered the sweet spot: post-monsoon air means exceptional clarity, and the trails are at their most defined.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                If your dates are fixed outside the peak windows, Everest gives you more margin due to its better weather coverage during shoulder seasons.
              </p>
            </section>

            {/* What to Expect */}
            <section id="what-to-expect" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                What to Expect
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                With either trek, you'll travel village-to-village staying in local teahouses with meals included and no camping required. Days typically run up to five to seven hours of trekking, with the pace set by you and your guide. Breaks are a must, and you'll stop for lunch halfway through the day.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                The trails largely differ in terrain, with Everest following a well-worn, heavily signposted route through increasingly sparse high-altitude terrain. Annapurna moves through more varied ground: farmland, dense forest, exposed ridgelines, and the dramatic narrowing of the gorge before the sanctuary opens up. You'll also come across more stores, villagers and settlements, especially at lower altitudes.
              </p>
            </section>

            {/* Which is Right for You */}
            <section id="which-is-right" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Which is Right for You?
              </h2>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Standing at the foot of the world's highest mountain carries a weight that no amount of comparison can realistically account for. Everest is for those seeking higher altitude and for those who want deep immersion into Sherpa culture. EBC demands more of your time and budget, but finally making it to base camp is worth it.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Annapurna Base Camp is the stronger choice if you're trekking for the first time at altitude, working with a tighter budget or schedule. It's also the stronger option for variety in scenery, with parts of the trail emptying entirely. Logistically, it's easier, but it still delivers in everything from altitude to experience.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#14383b] mb-3 sm:mb-4 tracking-[-.025em]">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                  <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Which trek is easier for beginners?</h3>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    Annapurna Base Camp is generally considered easier for beginners. The maximum altitude is lower at 4,130m compared to Everest's 5,364m, and the logistics are more straightforward with road access from Pokhara. That said, both treks are achievable for fit first-timers with proper preparation.
                  </p>
                </div>

                <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                  <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">Do I need a guide for these treks?</h3>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    Yes, both treks now legally require a licensed guide. In the Annapurna Conservation Area and Sagarmatha National Park, solo trekking is no longer permitted. A guide also arranges teahouse accommodation, handles permits, and knows the terrain – which is invaluable for first-time trekkers at altitude.
                  </p>
                </div>

                <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                  <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">How much does each trek cost with Himkala Adventure?</h3>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    Annapurna Base Camp starts from USD 1,180 for a fully guided package including permits, accommodation, meals, and guide. Everest Base Camp starts from USD 1,450, with the higher cost reflecting the remote location and Kathmandu-Lukla flight. Both treks can be customised to your schedule and budget.
                  </p>
                </div>

                <div className="bg-[#f7f2e9] rounded-lg p-3 sm:p-4 md:p-5 border border-[#d8cec0]/50">
                  <h3 className="font-bold text-[#14383b] text-sm sm:text-base mb-1 sm:mb-2">When is the best time to book?</h3>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    For both treks, the prime seasons are spring (March-May) and autumn (September-November). These windows offer the clearest skies and most stable weather. However, bookings should be made at least 2-3 months in advance, especially for Everest Base Camp which sees high demand in October and April.
                  </p>
                </div>
              </div>
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