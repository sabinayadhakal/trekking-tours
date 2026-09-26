"use client";

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FileText,
  CreditCard,
  XCircle,
  RefreshCw,
  ShieldCheck,
  Users,
  AlertCircle,
  Plane,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
  Wallet,
  Calendar,
  Briefcase,
  Home,
  Mountain,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bankDetails = {
  bankName: "Nepal Investment Mega Bank Nepal Ltd.",
  location: "Kathmandu, Nepal",
  swift: "NIBLNPKT",
  accountHolder: "Himkala Adventure Pvt. Ltd.",
  accountNumber: "13201100002097",
  branch: "Thamel, Kathmandu",
};

// Grouped terms for cleaner navigation
const termGroups = [
  {
    id: "booking-payment",
    groupTitle: "Booking & Payment",
    groupIcon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
    items: [
      {
        title: "Down Payment",
        content:
          "To secure your place, a 20% down payment is required in advance as per company policy. For bookings more than ten weeks prior to arrival date, a 15% deposit applies. Please contact us if this causes any issues as we try to be flexible.",
      },
      {
        title: "How to Pay Your Deposit",
        content:
          "You can pay via bank transfer in USD, EUR, or GBP to the account details listed further below in the Payment Details section.",
      },
      {
        title: "Payment of the Balance",
        content:
          "The remaining balance can be paid after your arrival in Nepal. Credit card payments incur a 4% handling charge on the outstanding balance. Bank transfers have no handling fee.",
      },
      {
        title: "Last Minute Booking",
        content:
          "We accept last-minute bookings for Nepal trips only, not for Bhutan, or Tibet trips.",
      },
    ],
  },
  {
    id: "cancellation-refund",
    groupTitle: "Cancellation & Refund",
    groupIcon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    items: [
      {
        title: "Refund",
        content:
          "The 15% deposit is non-refundable for any cancellation reason. If you've paid in full, you'll receive a refund minus cancellation charges. Written notification is required for cancellations.",
      },
      {
        title: "Incomplete Tour",
        content:
          "No refunds are provided for unused portions of the itinerary if clients drop out.",
      },
      {
        title: "Unforeseen Circumstances",
        content:
          "If Himkala Adventure cancels your trip due to war, natural disasters, conflict, or unfavorable climate, we'll offer an alternative trip or full refund. Other expenses incurred from the booking are your responsibility.",
      },
      {
        title: "Flight Delay / Cancellation",
        content:
          "Flight delays or cancellations may occur in Himalayan regions due to weather, requiring itinerary modifications.",
      },
    ],
  },
  {
    id: "during-your-trip",
    groupTitle: "During Your Trip",
    groupIcon: <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />,
    items: [
      {
        title: "Supplement Charge",
        content:
          "Rooms/tents are provided on a twin-sharing basis. Single room supplement charges apply for clients without a sharing partner.",
      },
      {
        title: "Clients' Responsibility",
        content:
          "Our tour/trek guides have full authority during tours. Any unlawful acts may result in removal from the tour.",
      },
      {
        title: "Impact on Your Journey",
        content:
          "We strive to provide the best service but note that facilities in Himalayan countries may differ from Western standards.",
      },
      {
        title: "Tour Amendment",
        content:
          "Itinerary changes require prior notice, though adjustments may be necessary en route due to circumstances like bad weather.",
      },
    ],
  },
  {
    id: "insurance-documents",
    groupTitle: "Insurance & Documents",
    groupIcon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    items: [
      {
        title: "Travel Insurance",
        content:
          "Comprehensive travel insurance covering medical emergencies, natural calamities, helicopter evacuation, personal accidents, trip cancellation, etc., is mandatory. Ensure your policy covers your planned activities and maximum altitudes.",
      },
      {
        title: "Paper and Documents",
        content:
          "All necessary documents must be provided in time for visa and permit processing. We're not responsible for delays due to missing paperwork.",
      },
    ],
  },
];

// Quick summary for the dark section
const quickSummary = [
  {
    icon: <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "20% Down Payment",
    text: "15% if booking more than 10 weeks ahead.",
  },
  {
    icon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Deposit Non-Refundable",
    text: "Written notice required for cancellations.",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Insurance Mandatory",
    text: "Must cover medical, evacuation & altitude.",
  },
  {
    icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Flexible Amendments",
    text: "Itinerary may adjust en route as needed.",
  },
];

export default function TermsAndConditionsPage() {
  const phoneNumber = "+977 9841376470";

  return (
    <>
      <Head>
        <title>Terms and Conditions | Himkala Adventure - Trekking Agency in Nepal</title>
        <meta
          name="description"
          content="Read Himkala Adventure's Terms and Conditions. Transparent booking, payment, cancellation, insurance, and travel policies for our Nepal, Bhutan, and Tibet trips."
        />
        <link rel="canonical" href="https://www.himkalaadventure.com/terms-and-conditions" />
        <meta property="og:title" content="Terms and Conditions | Himkala Adventure" />
        <meta
          property="og:description"
          content="Read Himkala Adventure's Terms and Conditions. Transparent booking, payment, cancellation, insurance, and travel policies."
        />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions | Himkala Adventure" />
        <meta
          name="twitter:description"
          content="Read Himkala Adventure's Terms and Conditions. Transparent booking, payment, cancellation, insurance, and travel policies."
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
                  Terms &amp; <span className="text-[#cf6943]">Conditions</span>
                </h1>
              </div>
              <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Transparent policies to ensure a smooth and worry-free booking experience from deposit to departure.
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
                  Key <span className="text-[#ef966e]">Points</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#b9c9c0]">
                The essentials before you dig into the full terms.
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

        {/* ═══════════════════════ Full Terms Content ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                Full Terms
              </div>
              <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                Our Complete <span className="text-[#cf6943]">Policy</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#536461]">
                Please read the following terms carefully before booking. By confirming a booking with us, you agree to these conditions.
              </p>
            </div>

            {/* Term Groups */}
            <div className="space-y-6 sm:space-y-8">
              {termGroups.map((group) => (
                <div key={group.id} className="bg-[#f7f2e9] rounded-lg overflow-hidden shadow-sm">
                  {/* Group Header */}
                  <div className="bg-[#14383b] px-5 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#e47a4f]/25 rounded flex items-center justify-center text-[#f0a17f] shrink-0">
                      {group.groupIcon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f7f2e9] font-serif">
                      {group.groupTitle}
                    </h3>
                  </div>

                  {/* Group Items */}
                  <div className="divide-y divide-[#d8cec0]/40">
                    {group.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 md:p-8 hover:bg-[#f2ede4]/40 transition-colors"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf6943] shrink-0 mt-0.5 sm:mt-1" />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#14383b] mb-1.5 sm:mb-2.5">
                              {item.title}
                            </h4>
                            <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Payment Details ═══════════════════════ */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  Banking
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Payment <span className="text-[#cf6943]">Details</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Bank transfer details for your deposit or full payment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {/* Bank / SWIFT */}
              <div className="bg-[#f7f2e9] rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#14383b] px-5 sm:px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#e47a4f]/25 rounded flex items-center justify-center text-[#f0a17f] shrink-0">
                    <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#f7f2e9] font-serif">
                    For Credit To
                  </h3>
                </div>
                <div className="p-5 sm:p-6 md:p-8 space-y-2 sm:space-y-3">
                  <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed font-medium">
                    {bankDetails.bankName}
                  </p>
                  <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed">
                    {bankDetails.location}
                  </p>
                  <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#d8cec0]/50">
                    <p className="text-[10px] sm:text-xs text-[#66706d] uppercase tracking-wider mb-1">
                      SWIFT Code
                    </p>
                    <p className="text-[#14383b] font-bold text-sm sm:text-base tracking-wide break-all">
                      {bankDetails.swift}
                    </p>
                  </div>
                </div>
              </div>

              {/* Beneficiary */}
              <div className="bg-[#f7f2e9] rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#14383b] px-5 sm:px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#e47a4f]/25 rounded flex items-center justify-center text-[#f0a17f] shrink-0">
                    <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#f7f2e9] font-serif">
                    Beneficiary Final Credit To
                  </h3>
                </div>
                <div className="p-5 sm:p-6 md:p-8 space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#66706d] uppercase tracking-wider mb-1">
                      A/C Holder's Name
                    </p>
                    <p className="text-[#14383b] font-bold text-sm sm:text-base break-all">
                      {bankDetails.accountHolder}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#66706d] uppercase tracking-wider mb-1">
                      A/C Number
                    </p>
                    <p className="text-[#14383b] font-bold text-sm sm:text-base tracking-wide break-all">
                      {bankDetails.accountNumber}
                    </p>
                  </div>
                  <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#d8cec0]/50">
                    <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed">
                      {bankDetails.bankName}
                    </p>
                    <p className="text-[#556363] text-sm sm:text-[15px] leading-relaxed">
                      {bankDetails.branch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Contact / Important Notice ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">
              {/* Important Notice */}
              <div>
                <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded-full flex items-center justify-center text-[#f0a17f] shrink-0">
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase mb-2">
                      Please Note
                    </div>
                    <h3 className="text-[#f7f2e9] font-serif font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">
                      Important Notice
                    </h3>
                  </div>
                </div>

                <p className="text-[#b9c9c0] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                  All policies are subject to change. Please refer to your booking confirmation for the
                  specific terms applicable to your reservation. For any questions or special circumstances,
                  please contact us directly.
                </p>

                <p className="text-[#b9c9c0] text-sm sm:text-base leading-relaxed">
                  By proceeding with a booking, you acknowledge that you have read, understood, and accepted
                  these Terms &amp; Conditions in full.
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8">
                <h3 className="text-[#f7f2e9] font-serif font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  Questions? Reach Out
                </h3>
                <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                    <a
                      href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                      className="text-[#f7f2e9]/85 hover:text-[#f0a17f] transition-colors break-all"
                    >
                      {phoneNumber}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                    <a
                      href="mailto:info@himkalaadventure.com"
                      className="text-[#f7f2e9]/85 hover:text-[#f0a17f] transition-colors break-all"
                    >
                      info@himkalaadventure.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[#f7f2e9]/85">Thamel, Kathmandu, Nepal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[#f7f2e9]/85">Daily 9AM – 6PM</span>
                  </li>
                </ul>

                <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-[#f7f2e9]/20">
                  <Button
                    asChild
                    className="w-full bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-sm shadow-lg shadow-[#e47a4f]/30 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer meta */}
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#f7f2e9]/20">
              <p className="text-[#b9c9c0] text-xs sm:text-sm flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}