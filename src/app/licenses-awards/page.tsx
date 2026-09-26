"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  FileCheck,
  Globe,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Star,
  BadgeCheck,
  Medal,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const licenses = [
  {
    name: "Business Registration Certificate",
    description: "Official registration of the business under Nepal's company law",
    image: "/images/used/certs/ktm-municipal-cert.webp",
    category: "Government Registration",
  },
  {
    name: "Foreign Exchange Authorization Letter",
    description: "Official permission for making payments in foreign currency",
    image: "/images/used/certs/foreign-exchange-cert.webp",
    category: "Financial Authorization",
  },
  {
    name: "Industry and Commerce Office Certificate",
    description: "Certificate issued by the Industry and Commerce Office for business operation",
    image: "/images/used/certs/udhyog-banijya.webp",
    category: "Business Operation",
  },
  {
    name: "PAN Permanent Account Number Certificate",
    description: "Tax identification certificate issued by the Inland Revenue Department",
    image: "/images/used/certs/PAN-cert.webp",
    category: "Tax Identification",
  },
  {
    name: "Company Registration Certificate",
    description: "Certificate of incorporation issued by the Company Registrar's Office",
    image: "/images/used/certs/incorporate-cert.webp",
    category: "Company Incorporation",
  },
  {
    name: "Trekking Agencies' Association of Nepal (TAAN) Membership Certificate",
    description: "Member of Nepal's premier trekking association",
    image: "/images/used/certs/TAAN-cert-new.webp",
    category: "Industry Membership",
  },
  {
    name: "Tourism Industry Division Certificate",
    description: "Government-approved travel and tour operator license",
    image: "/images/used/certs/department-tourism-license.webp",
    category: "Tourism License",
  },
];

// Excellence Certificates (formerly TripAdvisor certificates)
const excellenceCertificates = [
  {
    name: "Certificate of Excellence 2017",
    image: "/images/used/tripadvisor/certificate-2017.webp",
    year: "2017",
  },
  {
    name: "Certificate of Excellence 2018",
    image: "/images/used/tripadvisor/certificate-2018.webp",
    year: "2018",
  },
  {
    name: "Certificate of Excellence 2020",
    image: "/images/used/tripadvisor/certificate-2020.webp",
    year: "2020",
  },
  {
    name: "Certificate of Excellence 2024",
    image: "/images/used/tripadvisor/certificate-2024.webp",
    year: "2024",
  },
  {
    name: "Certificate of Excellence 2025",
    image: "/images/used/tripadvisor/certificate-2025.webp",
    year: "2025",
  },
];

const recognitionBadges = [
  { name: "Sustainable Tourism Certified", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { name: "Excellence Award Winner", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { name: "Safety First Certified", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { name: "Local Community Partner", icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" /> },
];

export default function LicensesAwardsPage() {
  const [selectedLicense, setSelectedLicense] = React.useState<{ name: string; image: string } | null>(null);
  const [selectedCertificate, setSelectedCertificate] = React.useState<{ name: string; image: string } | null>(null);
  const [certificateStartIndex, setCertificateStartIndex] = React.useState(0);
  const [activeLicenseCategory, setActiveLicenseCategory] = React.useState<string>("All");

  // Responsive cards per page
  const [certificatesPerPage, setCertificatesPerPage] = React.useState(3);

  React.useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      if (w < 640) setCertificatesPerPage(1);
      else if (w < 1024) setCertificatesPerPage(2);
      else setCertificatesPerPage(3);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const licenseCategories = ["All", ...Array.from(new Set(licenses.map((l) => l.category)))];
  const filteredLicenses =
    activeLicenseCategory === "All"
      ? licenses
      : licenses.filter((l) => l.category === activeLicenseCategory);

  const openLicenseModal = (license: { name: string; image: string }) => {
    setSelectedLicense(license);
    document.body.style.overflow = "hidden";
  };

  const closeLicenseModal = () => {
    setSelectedLicense(null);
    document.body.style.overflow = "auto";
  };

  const openCertificateModal = (certificate: { name: string; image: string }) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  const nextCertificateSlide = () => {
    if (certificateStartIndex + certificatesPerPage < excellenceCertificates.length) {
      setCertificateStartIndex(certificateStartIndex + 1);
    }
  };

  const prevCertificateSlide = () => {
    if (certificateStartIndex > 0) {
      setCertificateStartIndex(certificateStartIndex - 1);
    }
  };

  React.useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedLicense) closeLicenseModal();
        if (selectedCertificate) closeCertificateModal();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [selectedLicense, selectedCertificate]);

  // Reset slide index if it goes out of bounds when per-page changes
  React.useEffect(() => {
    setCertificateStartIndex(0);
  }, [certificatesPerPage]);

  const visibleCertificates = excellenceCertificates.slice(
    certificateStartIndex,
    certificateStartIndex + certificatesPerPage
  );

  const totalSlides = Math.max(1, excellenceCertificates.length - certificatesPerPage + 1);

  return (
    <>
      <Head>
        <title>Licenses &amp; Awards | Himkala Adventure - Certified Trekking Agency in Nepal</title>
        <meta
          name="description"
          content="View Himkala Adventure's official licenses, government certifications, and awards. A fully licensed and trusted trekking and tour operator in Nepal since 2015."
        />
        <link rel="canonical" href="https://www.himkalaadventure.com/licenses-awards" />
        <meta property="og:title" content="Licenses & Awards | Himkala Adventure" />
        <meta
          property="og:description"
          content="Official licenses, government certifications, and awards of Himkala Adventure - a trusted trekking agency in Nepal."
        />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/licenses-awards" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Licenses & Awards | Himkala Adventure" />
        <meta
          name="twitter:description"
          content="Official licenses, government certifications, and awards of Himkala Adventure."
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
                  Credentials
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Licenses &amp; <span className="text-[#cf6943]">Awards</span>
                </h1>
              </div>
              <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Official certifications, government licenses, and awards that reflect our commitment to safety, quality, and professional standards.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Licenses Section ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase">
                  Government Certified
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#f7f2e9]">
                  Our Official <span className="text-[#ef966e]">Licenses</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#b9c9c0]">
                Fully registered and government-approved tour and trekking operator in Nepal.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2">
              {licenseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveLicenseCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium rounded-full border transition-all ${
                    activeLicenseCategory === cat
                      ? "bg-[#e47a4f] border-[#e47a4f] text-[#fff8ee]"
                      : "bg-[#f7f2e9]/5 border-[#f7f2e9]/20 text-[#f7f2e9]/80 hover:bg-[#f7f2e9]/10 hover:border-[#f7f2e9]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* License Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {filteredLicenses.map((license, i) => (
                <div
                  key={i}
                  className="bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 backdrop-blur-sm rounded-lg hover:bg-[#f7f2e9]/15 transition-all duration-300 cursor-pointer group overflow-hidden flex flex-col"
                  onClick={() => openLicenseModal(license)}
                >
                  {/* Large Preview Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0d2427]/40">
                    <Image
                      src={license.image}
                      alt={license.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2427]/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#e47a4f] text-[#fff8ee] px-2.5 py-1 text-[10px] font-bold tracking-[.1em] uppercase rounded">
                      {license.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#14383b]/90 backdrop-blur-sm text-[#f7f2e9] px-2.5 py-1 text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <FileCheck className="w-3 h-3" />
                      View
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#e47a4f]/25 rounded flex items-center justify-center text-[#f0a17f] shrink-0">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm sm:text-base text-[#f7f2e9] font-bold leading-snug group-hover:text-[#ef966e] transition-colors">
                        {license.name}
                      </h4>
                    </div>
                    <p className="text-[#f7f2e9]/60 text-xs sm:text-sm leading-relaxed">
                      {license.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition Badges */}
            <div className="border-t border-[#f7f2e9]/20 mt-10 sm:mt-12 pt-10 sm:pt-12">
              <h3 className="text-center text-[#f7f2e9] font-bold text-base sm:text-lg mb-6 sm:mb-8">
                Recognized &amp; Certified By
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-3xl mx-auto">
                {recognitionBadges.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#f7f2e9]/5 border border-[#f7f2e9]/20 rounded-lg p-3 sm:p-4 text-center hover:bg-[#f7f2e9]/10 transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e47a4f]/30 rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-1.5 sm:mb-2">
                      {item.icon}
                    </div>
                    <p className="text-[#f7f2e9] text-[10px] sm:text-xs font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Awards Section ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  Awards &amp; Recognition
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Awards &amp; <span className="text-[#cf6943]">Excellence</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Recognized consistently for exceptional service and traveler satisfaction over the years.
              </p>
            </div>

            {/* Awards Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
              <div className="bg-[#f7f2e9] border border-[#d8cec0]/40 rounded-lg p-4 sm:p-5 text-center">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#cf6943] mx-auto mb-1.5" />
                <div className="text-lg sm:text-2xl font-bold text-[#14383b]">
                  {excellenceCertificates.length}
                </div>
                <div className="text-[10px] sm:text-xs text-[#556363]">Excellence Awards</div>
              </div>
              <div className="bg-[#f7f2e9] border border-[#d8cec0]/40 rounded-lg p-4 sm:p-5 text-center">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#cf6943] mx-auto mb-1.5" />
                <div className="text-lg sm:text-2xl font-bold text-[#14383b]">2017</div>
                <div className="text-[10px] sm:text-xs text-[#556363]">First Awarded</div>
              </div>
              <div className="bg-[#f7f2e9] border border-[#d8cec0]/40 rounded-lg p-4 sm:p-5 text-center">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#cf6943] mx-auto mb-1.5" />
                <div className="text-lg sm:text-2xl font-bold text-[#14383b]">100%</div>
                <div className="text-[10px] sm:text-xs text-[#556363]">Verified Reviews</div>
              </div>
              <div className="bg-[#f7f2e9] border border-[#d8cec0]/40 rounded-lg p-4 sm:p-5 text-center">
                <Medal className="w-5 h-5 sm:w-6 sm:h-6 text-[#cf6943] mx-auto mb-1.5" />
                <div className="text-lg sm:text-2xl font-bold text-[#14383b]">2500+</div>
                <div className="text-[10px] sm:text-xs text-[#556363]">Happy Travelers</div>
              </div>
            </div>

            {/* Carousel — Responsive for desktop/tablet */}
            <div className="hidden sm:block mt-8 sm:mt-12 relative">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {visibleCertificates.map((cert, i) => (
                  <div
                    key={`${cert.year}-${i}`}
                    className="cursor-pointer group"
                    onClick={() => openCertificateModal(cert)}
                  >
                    <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg border border-[#d8cec0]/30 hover:border-[#cf6943]/50 flex flex-col h-full">
                      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ebe2d0]">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 400px"
                          quality={88}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14383b]/70 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex justify-center">
                          <span className="text-[10px] sm:text-xs text-[#f7f2e9] font-medium bg-[#14383b]/85 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-1.5">
                            <FileCheck className="w-3 h-3" />
                            Click to view full size
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 bg-[#e47a4f] text-[#fff8ee] px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded shadow-md">
                          {cert.year}
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                        <h4 className="text-sm sm:text-base font-bold text-[#14383b] text-center leading-snug">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Fill empty grid slots with placeholders so layout stays consistent */}
                {visibleCertificates.length < certificatesPerPage &&
                  Array.from({ length: certificatesPerPage - visibleCertificates.length }).map((_, i) => (
                    <div
                      key={`placeholder-${i}`}
                      className="hidden lg:block"
                      aria-hidden="true"
                    />
                  ))}
              </div>

              {/* Navigation Arrows + Dots */}
              {excellenceCertificates.length > certificatesPerPage && (
                <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <button
                    onClick={prevCertificateSlide}
                    disabled={certificateStartIndex === 0}
                    className={`flex h-10 w-10 items-center justify-center border rounded-full transition-all ${
                      certificateStartIndex === 0
                        ? "border-[#d8cec0]/40 text-[#d8cec0] cursor-not-allowed"
                        : "border-[#14383b] text-[#14383b] hover:border-[#cf6943] hover:text-[#cf6943] hover:bg-[#cf6943]/5 active:scale-95"
                    }`}
                    aria-label="Previous certificates"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex justify-center gap-1.5">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCertificateStartIndex(i)}
                        className={`rounded-full transition-all ${
                          certificateStartIndex === i
                            ? "w-6 h-2 bg-[#cf6943]"
                            : "w-2 h-2 bg-[#d8cec0] hover:bg-[#cf6943]/50"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextCertificateSlide}
                    disabled={certificateStartIndex + certificatesPerPage >= excellenceCertificates.length}
                    className={`flex h-10 w-10 items-center justify-center border rounded-full transition-all ${
                      certificateStartIndex + certificatesPerPage >= excellenceCertificates.length
                        ? "border-[#d8cec0]/40 text-[#d8cec0] cursor-not-allowed"
                        : "border-[#14383b] text-[#14383b] hover:border-[#cf6943] hover:text-[#cf6943] hover:bg-[#cf6943]/5 active:scale-95"
                    }`}
                    aria-label="Next certificates"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile: Vertical Stack (all certificates visible) */}
            <div className="sm:hidden mt-8">
              <div className="grid grid-cols-1 gap-5">
                {excellenceCertificates.map((cert, i) => (
                  <div
                    key={i}
                    className="cursor-pointer group"
                    onClick={() => openCertificateModal(cert)}
                  >
                    <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg border border-[#d8cec0]/30">
                      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ebe2d0]">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14383b]/70 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-3 flex justify-center">
                          <span className="text-[10px] text-[#f7f2e9] font-medium bg-[#14383b]/85 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-1.5">
                            <FileCheck className="w-3 h-3" />
                            Tap to view full size
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 bg-[#e47a4f] text-[#fff8ee] px-2.5 py-1 text-[10px] font-bold rounded shadow-md">
                          {cert.year}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-[#14383b] text-center leading-snug">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Note */}
            <div className="mt-10 sm:mt-12 bg-[#e4d8c8] rounded-lg p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#f0a17f]" />
                </div>
                <div>
                  <h4 className="text-[#14383b] font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
                    A Track Record You Can Trust
                  </h4>
                  <p className="text-[#556363] text-xs sm:text-sm leading-relaxed">
                    Our licenses and awards are a reflection of the trust our travelers place in us. Every certificate
                    represents a promise kept, a standard upheld, and a journey made memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>

      {/* ═══════════════════════ License Modal ═══════════════════════ */}
      {selectedLicense && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102e31]/90 backdrop-blur-sm animate-in fade-in duration-200 p-2 sm:p-4"
          onClick={closeLicenseModal}
        >
          <div
            className="relative max-w-4xl w-full bg-[#f7f2e9] rounded-lg overflow-hidden shadow-2xl mx-2 sm:mx-4 flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 sm:p-4 bg-[#14383b] shrink-0">
              <h3 className="text-[#f7f2e9] font-bold text-sm sm:text-base md:text-lg truncate pr-2 sm:pr-4">
                {selectedLicense.name}
              </h3>
              <button
                onClick={closeLicenseModal}
                className="text-[#f7f2e9] hover:text-[#ef966e] transition-colors p-1 active:text-[#ef966e] touch-manipulation"
                aria-label="Close license image"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="relative bg-[#f2ede4] p-2 sm:p-4 flex items-center justify-center flex-1 min-h-0">
              <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[70vh]">
                <Image
                  src={selectedLicense.image}
                  alt={selectedLicense.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={90}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════ Certificate Modal ═══════════════════════ */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102e31]/90 backdrop-blur-sm animate-in fade-in duration-200 p-2 sm:p-4"
          onClick={closeCertificateModal}
        >
          <div
            className="relative max-w-4xl w-full bg-[#f7f2e9] rounded-lg overflow-hidden shadow-2xl mx-2 sm:mx-4 flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 sm:p-4 bg-[#14383b] shrink-0">
              <h3 className="text-[#f7f2e9] font-bold text-sm sm:text-base md:text-lg truncate pr-2 sm:pr-4">
                {selectedCertificate.name}
              </h3>
              <button
                onClick={closeCertificateModal}
                className="text-[#f7f2e9] hover:text-[#ef966e] transition-colors p-1 active:text-[#ef966e] touch-manipulation"
                aria-label="Close certificate image"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="relative bg-[#f2ede4] p-2 sm:p-4 flex items-center justify-center flex-1 min-h-0">
              <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[70vh]">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={90}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}