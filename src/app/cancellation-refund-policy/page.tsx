"use client";

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  XCircle,
  RefreshCw,
  AlertCircle,
  Plane,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Wallet,
  Calendar,
  FileText,
  Ban,
  Info,
  CreditCard,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Cancellation tiers — derived from the existing policy
const cancellationStages = [
  {
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Before Confirmation",
    status: "No Charge",
    statusColor: "text-[#3d8b6a]",
    content:
      "If you cancel your inquiry before making any payment, there are no charges. You are free to walk away at any point before a deposit is made.",
  },
  {
    icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "After Deposit Payment",
    status: "Deposit Non-Refundable",
    statusColor: "text-[#cf6943]",
    content:
      "The 15% deposit is non-refundable for any cancellation reason. This deposit secures your place, permits, and pre-arranged logistics on your behalf.",
  },
  {
    icon: <Ban className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "After Full Payment",
    status: "Refund Minus Charges",
    statusColor: "text-[#cf6943]",
    content:
      "If you've paid in full and cancel, you'll receive a refund minus the applicable cancellation charges. Written notification is required for all cancellations.",
  },
  {
    icon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "After Trip Departure",
    status: "No Refund",
    statusColor: "text-[#b23b3b]",
    content:
      "No refunds are provided for unused portions of the itinerary if clients drop out once the trip has begun.",
  },
];

// Refund-related terms
const refundTerms = [
  {
    id: "written-notification",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Written Notification Required",
    content:
      "All cancellations must be submitted in writing (email is acceptable). Verbal cancellations or cancellations communicated through guides on the trail are not considered valid. The date we receive your written notification determines the applicable charges.",
  },
  {
    id: "non-refundable-deposit",
    icon: <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Non-Refundable Deposit",
    content:
      "The deposit (15% for bookings more than ten weeks prior to arrival; 20% otherwise) is non-refundable regardless of the reason for cancellation. This includes cancellations due to personal reasons, illness, or changes in travel plans.",
  },
  {
    id: "partial-refunds",
    icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Partial Refunds",
    content:
      "If you have paid more than the deposit and cancel before departure, you'll receive a refund of the amount paid minus the non-refundable deposit and any cancellation charges already incurred on your behalf (such as issued permits, domestic flights, or hotel bookings).",
  },
  {
    id: "unused-services",
    icon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Unused Services",
    content:
      "No refunds are provided for unused portions of the itinerary. This includes missed meals, un-trekked sections, unused hotel nights, skipped activities, or early departures from the trip for any reason.",
  },
  {
    id: "company-cancellation",
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "If We Cancel Your Trip",
    content:
      "If Himkala Adventure cancels your trip due to war, natural disasters, conflict, or unfavorable climate, we'll offer an alternative trip or full refund. Other expenses incurred from the booking (such as international flights or personal gear) are your responsibility.",
  },
  {
    id: "flight-delays",
    icon: <Plane className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Flight Delays & Cancellations",
    content:
      "Flight delays or cancellations may occur in Himalayan regions due to weather, requiring itinerary modifications. In such cases, we rearrange your itinerary where possible, but refunds for delayed or canceled flights are governed by the airline's own policy.",
  },
  {
    id: "supplement-charge",
    icon: <Info className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Single Supplement Charge",
    content:
      "Rooms and tents are provided on a twin-sharing basis. Single room supplement charges apply for clients without a sharing partner. This is a charge, not a refund condition mentioned here for clarity on billing.",
  },
  {
    id: "insurance-recommendation",
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Travel Insurance Strongly Recommended",
    content:
      "Comprehensive travel insurance covering medical emergencies, natural calamities, helicopter evacuation, personal accidents, and trip cancellation is mandatory. Your insurance is your primary protection against unforeseen cancellations.",
  },
];

// Quick summary cards
const quickSummary = [
  {
    icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "20% Deposit",
    text: "15% if booked 10+ weeks ahead; always non-refundable.",
  },
  {
    icon: <Ban className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "No Refund After Start",
    text: "Unused itinerary portions are non-refundable.",
  },
  {
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Written Notice Only",
    text: "Email cancellations; verbal ones aren't valid.",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "We Cancel? Full Refund",
    text: "Or an alternative trip, at your choice.",
  },
];

export default function CancellationRefundPolicyPage() {
  const phoneNumber = "+977 9841376470";

  return (
    <>
      <Head>
        <title>Cancellation &amp; Refund Policy | Himkala Adventure - Nepal Trekking Agency</title>
        <meta
          name="description"
          content="Read Himkala Adventure's Cancellation & Refund Policy. Transparent terms on deposits, cancellations, refunds, and travel insurance for our Nepal, Bhutan, and Tibet trips."
        />
        <link rel="canonical" href="https://www.himkalaadventure.com/cancellation-refund-policy" />
        <meta property="og:title" content="Cancellation & Refund Policy | Himkala Adventure" />
        <meta
          property="og:description"
          content="Read Himkala Adventure's Cancellation & Refund Policy. Transparent terms on deposits, cancellations, refunds, and travel insurance."
        />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/cancellation-refund-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cancellation & Refund Policy | Himkala Adventure" />
        <meta
          name="twitter:description"
          content="Read Himkala Adventure's Cancellation & Refund Policy. Transparent terms on deposits, cancellations, refunds, and travel insurance."
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
                  Legal
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Cancellation &amp; <span className="text-[#cf6943]">Refund</span> Policy
                </h1>
              </div>
              <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Clear, fair terms on deposits, cancellations, and refunds so you can book with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Quick Summary Strip ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase">
                  At a Glance
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#f7f2e9]">
                  Quick <span className="text-[#ef966e]">Summary</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#b9c9c0]">
                The key points before reading the full details below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {quickSummary.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 backdrop-blur-sm rounded-lg p-5 sm:p-6 hover:bg-[#f7f2e9]/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/25 rounded flex items-center justify-center text-[#f0a17f] mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#f7f2e9] mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#f7f2e9]/70 text-xs sm:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Cancellation Stages ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                Cancellation Stages
              </div>
              <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                What Happens <span className="text-[#cf6943]">at Each Stage</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#536461]">
                Refunds depend on when you cancel. Here's how it works, from inquiry to departure.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {cancellationStages.map((stage, i) => (
                <div
                  key={i}
                  className="bg-[#f7f2e9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                      <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9] shrink-0">
                          {stage.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#14383b] mb-2 sm:mb-3">
                            {stage.title}
                          </h3>
                          <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed">
                            {stage.content}
                          </p>
                        </div>
                      </div>

                      {/* Status pill */}
                      <div className="sm:shrink-0 sm:ml-4">
                        <span
                          className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#14383b]/5 border border-[#d8cec0]/60 text-[11px] sm:text-xs font-bold tracking-wide ${stage.statusColor}`}
                        >
                          {stage.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Detailed Refund Terms ═══════════════════════ */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                Detailed Terms
              </div>
              <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                Refund <span className="text-[#cf6943]">Terms</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#536461]">
                Please read each of the following conditions carefully. They apply to every booking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {refundTerms.map((term) => (
                <div
                  key={term.id}
                  className="bg-[#f7f2e9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9] shrink-0">
                        {term.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#14383b] pt-1.5 sm:pt-2.5">
                        {term.title}
                      </h3>
                    </div>
                    <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed pl-0 sm:pl-16">
                      {term.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Company Cancellation Highlight ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded-full flex items-center justify-center text-[#f0a17f] shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase mb-2">
                      Your Protection
                    </div>
                    <h3 className="text-[#f7f2e9] font-serif font-bold text-xl sm:text-2xl md:text-3xl">
                      If We Cancel, You're Covered
                    </h3>
                  </div>
                </div>

                <p className="text-[#b9c9c0] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                  If Himkala Adventure cancels your trip due to war, natural disasters, conflict, or
                  unfavorable climate, we'll offer an alternative trip or a full refund as per your choice.
                </p>

                <p className="text-[#b9c9c0] text-sm sm:text-base leading-relaxed">
                  Other expenses you may have incurred from the booking such as international flights,
                  personal gear, or third-party bookings are your responsibility. This is why we strongly
                  recommend comprehensive travel insurance for every trip.
                </p>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ef966e] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#f7f2e9] text-sm font-medium">Alternative Trip Offered</p>
                      <p className="text-[#b9c9c0] text-xs mt-0.5">
                        Rescheduled at your convenience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ef966e] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#f7f2e9] text-sm font-medium">Or a Full Refund</p>
                      <p className="text-[#b9c9c0] text-xs mt-0.5">
                        Returned without penalty
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Insurance card */}
              <div className="bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded flex items-center justify-center text-[#f0a17f] mb-4 sm:mb-5">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-[#f7f2e9] font-serif font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                  Travel Insurance Is Mandatory
                </h4>
                <p className="text-[#b9c9c0] text-sm leading-relaxed mb-4 sm:mb-5">
                  Comprehensive travel insurance covering medical emergencies, natural calamities,
                  helicopter evacuation, personal accidents, and trip cancellation is required for all our
                  trips.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Covers medical emergencies",
                    "Includes helicopter evacuation",
                    "Protects against trip cancellation",
                    "Must cover your planned activity level & altitude",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#ef966e] shrink-0 mt-0.5" />
                      <span className="text-[#f7f2e9]/85 text-xs sm:text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Contact Section ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  Need Help?
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Contact <span className="text-[#cf6943]">Us</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Have a question about cancellations or refunds? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-8 sm:mt-12">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3 group-hover:bg-[#cf6943] transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">
                  Phone
                </p>
                <p className="text-[#14383b] font-medium text-xs sm:text-sm group-hover:text-[#cf6943] transition-colors break-all">
                  {phoneNumber}
                </p>
              </a>

              <a
                href="mailto:info@himkalaadventure.com"
                className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3 group-hover:bg-[#cf6943] transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">
                  Email
                </p>
                <p className="text-[#14383b] font-medium text-xs sm:text-sm group-hover:text-[#cf6943] transition-colors break-all">
                  info@himkalaadventure.com
                </p>
              </a>

              <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">
                  Address
                </p>
                <p className="text-[#14383b] font-medium text-xs sm:text-sm">
                  Thamel, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Important Notice ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-3xl">
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded-full flex items-center justify-center text-[#f0a17f] shrink-0">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-[#f7f2e9] font-bold text-base sm:text-lg mb-1 sm:mb-2">
                    Important Notice
                  </h3>
                  <p className="text-[#b9c9c0] text-xs sm:text-sm leading-relaxed">
                    All policies are subject to change. Please refer to your booking confirmation for the
                    specific terms applicable to your reservation. For any questions or special
                    circumstances, please contact us directly.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#f7f2e9]/20 pt-5 sm:pt-6">
                <p className="text-[#b9c9c0] text-xs sm:text-sm flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}