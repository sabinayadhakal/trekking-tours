"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  Instagram,
  Globe,
  HandHeart,
  Sparkles,
  MapPin,
  ExternalLink,
  Leaf,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────────────────────
// Partner data — swap image paths and placeholder text later.
// Everything in [brackets] is meant to be replaced.
// ─────────────────────────────────────────────────────────────

const partners = [
  {
    id: "project-nuga-nepal",
    name: "Project Nuga Nepal",
    subtitle: "Patan heritage walking tours for international visitors",
    image: "/images/used/partners/project-nuga-nepal.webp", // ← replace
    imageAlt: "Project Nuga Nepal heritage walking tour in Patan",
    badge: "PATAN · EST. [20XX]", // ← replace year
    paragraphs: [
      "Project Nuga Nepal is a Patan-based initiative founded by [her name], offering walking tours of Patan's old city for foreign visitors. The tours focus on Patan's living heritage — its courtyards, temples, Newari architecture, and the daily rhythms of the people who live among them — and are designed to give visitors a genuine, locally guided experience rather than a scripted tour.",
      "We recommend Project Nuga Nepal to our own guests, and [her name] recommends Himkala Adventure to hers. If you're spending time in Patan and want to see it properly, this is who we send people to.",
    ],
    linkLabel: "Learn more",
    linkHref: "[Instagram / website link]", // ← replace with real URL
    background: "bg-[#f2ede4]", // light
    reverse: false, // image on left
  },
  {
    id: "petals",
    name: "PETALS",
    subtitle: "Community foundation, recognized by UNESCO [exact award name and year]",
    image: "/images/used/partners/petals.webp", // ← replace
    imageAlt: "PETALS community foundation",
    badge: "UNESCO · [20XX]", // ← replace year
    paragraphs: [
      "PETALS is a community foundation founded by [her name], working on [brief description of what the foundation does — e.g. education, women's empowerment, community development, environmental work in the Patan area].",
      "[Her name]'s work through PETALS has been recognized by [exact UNESCO program or award name], [year]. The foundation's mission and her guiding work through Project Nuga Nepal are closely connected — both are about supporting the community whose heritage visitors come to experience.",
    ],
    linkLabel: "Learn more",
    linkHref: "[Instagram / website / donation link]", // ← replace with real URL
    background: "bg-[#e4d8c8]", // cream
    reverse: true, // content on left, image on right
  },
];

// Our commitment — replaces the "More Partners to Come" section
const commitments = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Rooted in Real Relationships",
    text: "Every partner on this page is someone we know personally. We don't list logos or fill space with names we've never met.",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Two-Way Trust",
    text: "We recommend them to our guests, and they recommend us to theirs. Trust that only flows one way isn't trust at all.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Small-Scale by Choice",
    text: "We keep our partnerships small on purpose. Fewer relationships, deeper involvement, more meaningful outcomes.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Community First",
    text: "When you travel with us, your money reaches the people whose place you've come to see. That's the whole point.",
  },
];

export default function PartnersCommunitiesPage() {
  return (
    <>
      <Head>
        <title>Partners &amp; Communities | Himkala Adventure - Local Partners in Nepal</title>
        <meta
          name="description"
          content="Meet the local guides, community projects, and small organizations Himkala Adventure works with across Nepal. Small-scale, respectful, and rooted in the communities visitors come to see."
        />
        <link rel="canonical" href="https://www.himkalaadventure.com/partners-communities" />
        <meta property="og:title" content="Partners & Communities | Himkala Adventure" />
        <meta
          property="og:description"
          content="Meet the local guides, community projects, and small organizations Himkala Adventure works with across Nepal."
        />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/partners-communities" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partners & Communities | Himkala Adventure" />
        <meta
          name="twitter:description"
          content="Meet the local guides, community projects, and small organizations Himkala Adventure works with across Nepal."
        />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        {/* ═══════════════════════ Page Header ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  Who We Work With
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Partners &amp; <span className="text-[#cf6943]">Communities</span>
                </h1>
              </div>
              <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Local guides, community projects, and small organizations across Nepal who share our approach to travel.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Intro Paragraph ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-[820px] mx-auto">
              <p className="text-[#556363] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-[1.75]">
                We believe the best travel experiences in Nepal come from working with people who genuinely know their place and genuinely care about it. Over the years, we&apos;ve built relationships with local guides, community projects, and small organizations who share our approach to travel: small-scale, respectful, and rooted in the communities visitors come to see. This page is where we introduce them.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Partner Profiles ═══════════════════════ */}
        {partners.map((partner, index) => (
          <section
            key={partner.id}
            className={`${partner.background} px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30`}
          >
            <div className="mx-auto max-w-[1220px]">
              <div
                className={`grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24`}
              >
                {/* Image block */}
                <div
                  className={`relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[520px] ${
                    partner.reverse ? "order-2 lg:order-1" : "order-2 lg:order-1"
                  }`}
                >
                  <Image
                    src={partner.image}
                    alt={partner.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    quality={85}
                  />
                  {/* Corner badge (like the "FOUNDED 2015" / "YEARS ON THESE TRAILS" badges) */}
                  <div className="absolute bottom-0 left-0 bg-[#14383b] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#f7f2e9] sm:px-8">
                    <div className="font-serif text-sm sm:text-base md:text-lg leading-none whitespace-nowrap">
                      {partner.badge}
                    </div>
                  </div>
                </div>

                {/* Content block */}
                <div className={`${partner.reverse ? "order-1 lg:order-2" : "order-1 lg:order-2"}`}>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                    Partner
                  </div>
                  <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                    {partner.name}
                  </h2>
                  <p className="text-[#cf6943] font-medium mt-1 sm:mt-2 text-sm sm:text-base">
                    {partner.subtitle}
                  </p>

                  <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-[#556363] text-sm sm:text-[15px] leading-relaxed">
                    {partner.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-5 sm:mt-7">
                    <a
                      href={partner.linkHref}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 text-[#cf6943] hover:text-[#b85a38] transition-colors text-sm sm:text-base font-medium border-b border-[#cf6943] hover:border-[#b85a38] pb-0.5"
                    >
                      {partner.linkLabel}
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ═══════════════════════ How We Work With Partners ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 text-[#f7f2e9] border-t border-[#f7f2e9]/10">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">
              {/* Left: Heading + paragraph */}
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase">
                  Our Approach
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#f7f2e9]">
                  How We Work <span className="text-[#ef966e]">With Our Partners</span>
                </h2>

                <p className="mt-5 sm:mt-7 text-[#b9c9c0] text-sm sm:text-base leading-relaxed">
                  Our partnerships are simple: we recommend people we genuinely trust, and we ask them to do the same for us. Every partner listed on this page is someone we&apos;ve worked with directly, and every recommendation we make is one we&apos;d stand behind ourselves.
                </p>

                <p className="mt-4 sm:mt-5 text-[#b9c9c0] text-sm sm:text-base leading-relaxed">
                  If you&apos;re a local guide, community project, homestay, or small organization working in Nepal and you&apos;d like to work with us, we&apos;d love to hear from you.
                </p>

                <div className="mt-6 sm:mt-8">
                  <Button
                    asChild
                    className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full h-11 sm:h-12 px-5 sm:px-7 text-xs sm:text-sm shadow-lg shadow-[#e47a4f]/30 active:scale-95 transition-all flex items-center justify-center gap-2 w-fit"
                  >
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: Two highlight points */}
              <div className="bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8">
                <h3 className="text-[#f7f2e9] font-serif font-bold text-lg sm:text-xl mb-5 sm:mb-6">
                  What You Can Expect
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {[
                    {
                      title: "We only recommend people we trust",
                      text: "Every partner is someone we've worked with directly, not a name from a list.",
                    },
                    {
                      title: "Every recommendation is one we stand behind",
                      text: "If we send you somewhere, we'd send our own family there too.",
                    },
                    {
                      title: "We collaborate, not just refer",
                      text: "Our partners recommend us back, creating a two-way relationship built on trust.",
                    },
                  ].map((point) => (
                    <li key={point.title} className="flex items-start gap-3 sm:gap-4">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ef966e] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#f7f2e9] text-sm sm:text-base font-medium">
                          {point.title}
                        </p>
                        <p className="text-[#b9c9c0] text-xs sm:text-sm mt-0.5 sm:mt-1">
                          {point.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Our Commitment ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  What Guides Us
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Our <span className="text-[#cf6943]">Commitment</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                The principles that shape who we choose to work with.
              </p>
            </div>

            {/* Informative Editorial List — same pattern as About's "What Sets Us Apart" */}
            <div className="mt-10 sm:mt-14 max-w-[820px]">
              {commitments.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 sm:gap-6 md:gap-7 pb-7 sm:pb-9 md:pb-11"
                  style={{
                    borderBottom:
                      i < commitments.length - 1
                        ? "1px solid rgba(203, 188, 172, 0.6)"
                        : "none",
                  }}
                >
                  {/* Icon - subtle, no gradient, no bg */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 text-[#cf6943] shrink-0 mt-1 sm:mt-1.5">
                    {item.icon}
                  </div>

                  {/* Content - just text, no button feel */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#14383b] mb-2 sm:mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#556363] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiet closing line */}
            <div className="mt-10 sm:mt-14 max-w-[820px] mx-auto text-center px-4">
              <p className="text-[#556363] italic text-base sm:text-lg leading-relaxed">
                &ldquo;Small groups. Real relationships. Places worth protecting.&rdquo;
              </p>
              <p className="text-[#66706d] text-xs sm:text-sm mt-3 tracking-[.05em] uppercase font-medium">
                The Himkala Way
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}