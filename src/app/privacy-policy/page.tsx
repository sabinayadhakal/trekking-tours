"use client";

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  UserCheck,
  Database,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  CheckCircle,
  Globe,
  Share2,
  Trash2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const privacySections = [
  {
    id: "introduction",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Introduction",
    content: [
      "Himkala Adventure Pvt. Ltd. takes the responsibility of your data seriously and respects your privacy concerning any information we may gather from you across this website.",
      "This Privacy Policy explains what information we collect, how we use it, how we protect it, and the rights you have regarding your personal data. By using our website or services, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Information We Collect",
    content: [
      "We only collect personal information that we need to provide a service to you, such as your name, email address, and phone number, when you send us an email through an inquiry, booking, or contact form.",
      "We collect this information by lawful means, with your knowledge and agreement. We do not collect any information automatically beyond what is necessary for the website to function properly (such as basic device information and cookies used for analytics).",
    ],
  },
  {
    id: "third-party-links",
    icon: <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Third-Party Links & Social Media",
    content: [
      "Our website uses links to other websites (e.g. Facebook, Instagram, Twitter, YouTube, LinkedIn, TikTok, and Pinterest) to which this data protection declaration does not apply.",
      "These sites might collect Device Information. Please be aware that we do not control the content and practices of these sites, and cannot take responsibility for their privacy policies. We encourage you to review the privacy policy of any third-party site you visit through our links.",
    ],
  },
  {
    id: "how-we-use",
    icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "How We Use Your Information",
    content: [
      "The information we collect is used solely to respond to your inquiries, process your bookings, and provide you with the travel services you have requested.",
      "We may occasionally use your contact details to send you important updates about your trip or respond to your questions. We do not use your information for unsolicited marketing purposes.",
    ],
  },
  {
    id: "data-retention",
    icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Data Retention",
    content: [
      "We only keep the gathered information as long as required to provide you with the service you requested.",
      "Once your trip is complete and any legal or accounting obligations are fulfilled, your personal data is securely removed from our systems unless you have explicitly consented to us retaining it for future communication.",
    ],
  },
  {
    id: "data-security",
    icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "How We Protect Your Data",
    content: [
      "The data we store is protected with lawful means to prevent loss and theft, as well as unauthorized access, leak, copying, usage, or any adjustment.",
      "We don't share any personal information publicly or with third parties unless required by a lawful request. Access to your personal data is limited to authorized team members who need it to provide our services.",
    ],
  },
  {
    id: "your-rights",
    icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Your Rights",
    content: [
      "You have the right to ask that your personal information be corrected, updated, or deleted at any time.",
      "To exercise any of these rights, please contact us through the contact information available on the website. If you have any queries about how we handle your personal information, please do not hesitate to contact us through email.",
    ],
  },
  {
    id: "policy-updates",
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Updates to This Policy",
    content: [
      "We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.",
      "When we make changes, we will update the date at the bottom of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
    ],
  },
];

const dataSummary = [
  {
    icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "What We Collect",
    text: "Name, email, phone number only when you contact us.",
  },
  {
    icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "How We Use It",
    text: "To respond to inquiries and process your bookings.",
  },
  {
    icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "How We Protect It",
    text: "Secure storage with restricted team access only.",
  },
  {
    icon: <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Your Control",
    text: "Request correction or deletion of your data anytime.",
  },
];

export default function PrivacyPolicyPage() {
  const phoneNumber = "+977 9841376470";

  return (
    <>
      <Head>
        <title>Privacy Policy | Himkala Adventure - Trusted Trekking Agency in Nepal</title>
        <meta
          name="description"
          content="Read Himkala Adventure's Privacy Policy. Learn how we collect, use, protect, and respect your personal information when you use our website and travel services."
        />
        <link rel="canonical" href="https://www.himkalaadventure.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Himkala Adventure" />
        <meta
          property="og:description"
          content="Read Himkala Adventure's Privacy Policy. Learn how we collect, use, protect, and respect your personal information."
        />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Himkala Adventure" />
        <meta
          name="twitter:description"
          content="Read Himkala Adventure's Privacy Policy. Learn how we collect, use, protect, and respect your personal information."
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
                  Privacy <span className="text-[#cf6943]">Policy</span>
                </h1>
              </div>
              <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Your trust matters. Here's exactly how we handle your personal information transparently and responsibly.
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
                  Privacy <span className="text-[#ef966e]">Summary</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#b9c9c0]">
                The short version because privacy should be simple.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {dataSummary.map((item, i) => (
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

        {/* ═══════════════════════ Full Policy Content ═══════════════════════ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                Full Policy
              </div>
              <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                Everything You Need <span className="text-[#cf6943]">to Know</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#536461]">
                Please read this policy carefully. If you have any questions, feel free to reach out to us at any time.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {privacySections.map((section, i) => (
                <div
                  key={section.id}
                  className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-lg"
                >
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9] shrink-0">
                        {section.icon}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#14383b] pt-1 sm:pt-2">
                        {section.title}
                      </h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4 pl-0 sm:pl-16">
                      {section.content.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-[#556363] text-sm sm:text-[15px] leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ Contact Section ═══════════════════════ */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  Questions?
                </div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Contact <span className="text-[#cf6943]">Us</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                If you have any queries about how we handle your personal information, please reach out.
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

        {/* ═══════════════════════ Policy Footer Note ═══════════════════════ */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="max-w-3xl">
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded-full flex items-center justify-center text-[#f0a17f] shrink-0">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-[#f7f2e9] font-bold text-base sm:text-lg mb-1 sm:mb-2">
                    Your Privacy, Our Commitment
                  </h3>
                  <p className="text-[#b9c9c0] text-xs sm:text-sm leading-relaxed">
                    We believe in transparency. If at any point you feel your data is not being handled
                    responsibly, please contact us immediately and we will act on it. This policy may be updated
                    periodically to reflect changes in our practices, operational needs, or legal requirements.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#f7f2e9]/20 pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
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