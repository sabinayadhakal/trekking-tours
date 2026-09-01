"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Award,
  ShieldCheck,
  FileCheck,
  Users,
  Heart,
  Globe,
  CheckCircle,
  Quote,
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertCircle,
  CreditCard,
  XCircle,
  RefreshCw,
  Star,
  Plane,
  FileText,
  MapPin as MapIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const licenses = [
  {
    name: "Certification of Incorporate Company",
    number: "ID: 131462/071/072",
    description: "Registered Private Limited Company under Nepal law",
  },
  {
    name: "Trekking Agencies' Association of Nepal (TAAN)",
    number: "",
    description: "Member of Nepal's premier trekking association",
  },
  {
    name: "Certificate of tourism industry division ",
    number: "ID: 1888/071",
    description: "Government-approved travel and tour operator license",
  },
  {
    name: "Guiding Certificate",
    number: "ID: TG-01/36",
    description: "Official certification for professional tourist guide in Nepal",
  },
  {
    name: "Foreign Exchange Authorization Letter",
    number: "ID: N.R.B/B.B.Bya.B/E/Tre/H.223/081",
    description: "Official permission for making payments in foreign currency",
  },
];

const teamMembers = [
  {
    name: "Sabinaya Dhakal",
    role: "Professional Certified Trekking Guide & IT Facilitator",
    experience: "6 years",
    speciality: "High-Altitude Trekking & IT Management",
    image: "/images/sabinaya.jpg",
    bio: "Sabinaya has a strong background in high-altitude trekking and also manages various IT tasks within the company. His calm approach, safety awareness, and knowledge of the region make him a dependable part of our team.",
  },
];

const companyHighlights = [
  {
    icon: <MapIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Custom-Planned Journeys",
    text: "No generic packages. We create personalized itineraries that match your unique preferences and interests.",
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Free Walking Tours",
    text: "First of its kind in Nepal! Daily tours exploring Kathmandu's streets and local life.",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Proven Trustworthiness",
    text: "Verified by glowing reviews from travelers worldwide on TripAdvisor and social media.",
  },
  {
    icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Value for Money",
    text: "No glitches, no difficulties. We ensure smooth, hassle-free experiences throughout your journey.",
  },
  {
    icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Home Away From Home",
    text: "We serve with honest spirit, making you feel at home while exploring Nepal's wonders.",
  },
  {
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Top-Notch Service",
    text: "Single-sightedly determined to deliver exceptional experiences that exceed expectations.",
  },
];

const bankDetails = {
  bankName: "Nepal Investment Mega Bank Nepal Ltd.",
  location: "Kathmandu, Nepal",
  swift: "NIBLNPKT",
  accountHolder: "Himkala Adventure Pvt. Ltd.",
  accountNumber: "13201100002097",
  branch: "Thamel, Kathmandu",
};

export default function AboutPage() {
  const phoneNumber = "+977 9841376470";

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:info@himkalaadventure.com";
  };

  return (
    <>
      <Head>
        <title>About Himkala Adventure | Trusted Trekking Agency in Nepal since 2015</title>
        <meta name="description" content="Learn about Himkala Adventure, a trusted trekking agency in Nepal since 2015. Meet our expert guides, explore our licenses, and discover why travelers choose us for authentic Himalayan experiences." />
        <link rel="canonical" href="https://www.himkalaadventure.com/about-us" />
        <meta property="og:title" content="About Himkala Adventure | Trusted Trekking Agency in Nepal since 2015" />
        <meta property="og:description" content="Learn about Himkala Adventure, a trusted trekking agency in Nepal since 2015. Meet our expert guides, explore our licenses, and discover why travelers choose us for authentic Himalayan experiences." />
        <meta property="og:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta property="og:url" content="https://www.himkalaadventure.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Himkala Adventure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Himkala Adventure | Trusted Trekking Agency in Nepal since 2015" />
        <meta name="twitter:description" content="Learn about Himkala Adventure, a trusted trekking agency in Nepal since 2015. Meet our expert guides, explore our licenses, and discover why travelers choose us for authentic Himalayan experiences." />
        <meta name="twitter:image" content="https://www.himkalaadventure.com/images/used/FWT-4.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
        {/* Page Header */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">About Us</div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  About <span className="text-[#cf6943]">Himkala</span> Adventure
                </h1>
              </div>
              <p className="max-w-full md:max-w-[280px] lg:max-w-[380px] text-sm leading-6 text-[#66706d]">
                Est. 2015 · Kathmandu, Nepal... Trekking, cultural tours, and authentic Himalayan experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
              <div className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] order-2 lg:order-1">
                <Image
                  src="/images/used/FWT-4.webp"
                  alt="Himalayan landscape and trekking in Nepal with Himkala Adventure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  quality={85}
                />
                <div className="absolute bottom-0 left-0 bg-[#e47a4f] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#fff8ee] sm:px-8">
                  <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">11<span className="text-xl sm:text-2xl">+</span></div>
                  <div className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-bold tracking-[.15em]">YEARS ON THESE TRAILS</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Our Story</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Streets, Stories &amp; <span className="text-[#cf6943]">the Himalayas</span>
                </h2>
                <p className="mt-4 sm:mt-7 max-w-full lg:max-w-[510px] text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#536461]">
                  Born in Gorkha, based in Kathmandu, we offer authentic Himalayan experiences with professional service.
                </p>
                <div className="mt-5 sm:mt-8 space-y-3 sm:space-y-4 text-[#556363] text-sm leading-relaxed">
                  <p>
                    Himkala Adventure was founded in 2015 by a native of Gorkha with a deep-rooted passion for the Himalayas and a dream to share Nepal's beauty with the world. What began as a small operation has grown into a locally trusted guiding service, known today for our immersive city tours and the highly popular Free Walking Tours in Kathmandu.
                  </p>
                  <p>
                    While we are steadily building our name in trekking, our focus remains on authentic cultural connections, helping travelers fall in love with Nepal's vibrant streets, stories, and traditions. We are proud to have extended our expertise into Bhutan and Tibet, and our vision remains clear: to grow into one of the region's most trusted names in adventure, one authentic experience at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Why choose us</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  What Sets <span className="text-[#cf6943]">Us Apart</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Among hundreds of tour companies in Nepal, we stand out with our unique approach.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {companyHighlights.map((item, i) => (
                <div key={i} className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9] mb-4 sm:mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#14383b] mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#556363] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-[#556363] italic text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                &ldquo;We don&apos;t just plan trips; we create memorable experiences that stay with you long after you&apos;ve returned home.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Managing Director */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 sm:gap-12 lg:gap-14 lg:items-center lg:gap-24">
              <div className="order-2 lg:order-1">
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Managing Director</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,4.8rem)] leading-[1.05] sm:leading-[.96] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Shiva <span className="text-[#cf6943]">Prasad</span> Dhakal
                </h2>
                <p className="text-[#cf6943] font-medium mt-1 sm:mt-2 text-sm sm:text-base">Managing Director &amp; Founder</p>
                
                <div className="relative mt-4 sm:mt-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-[#e47a4f]" />
                  <p className="text-[#556363] italic leading-relaxed pl-6 sm:pl-8 text-sm sm:text-base">
                    &ldquo;Beyond the trails and temples lie the real treasures: the conversations, the kindness of strangers, and the feeling of being truly welcomed somewhere new.&rdquo;
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-[#556363] text-sm leading-relaxed">
                  <p>
                    A native of Gorkha with a deep connection to the Himalayas, Shiva Prasad Dhakal founded Himkala Adventure to share Nepal's beauty in a more personal way. A true pioneer in Kathmandu's tourism scene, he introduced the city's first Free Walking Tours creating opportunities for travelers to experience local life beyond the usual tourist paths.
                  </p>
                  <p>
                    Today, as Managing Director, he brings that same thoughtful approach to every journey, blending his passion for the mountains with a commitment to authentic cultural connection. His leadership is defined by integrity, local knowledge, and a genuine care for both travelers and the communities they visit.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-t border-[#cbbcac] pt-6 sm:pt-8">
                  {[
                    { title: "Certified Trekking Guide", year: "2000" },
                    { title: "Certified Tour Guide", year: "2010" },
                    { title: "TripAdvisor Excellence", year: "2016" },
                    { title: "Free Walking Tour Pioneer", year: "2017" },
                  ].map(({ title, year }) => (
                    <div key={title} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#cf6943] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#14383b]">{title}</p>
                        <p className="text-xs text-[#66706d]">{year}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
                  <div className="bg-[#f7f2e9] border border-[#d8cec0]/30 rounded p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#14383b]">25+</div>
                    <div className="text-[10px] sm:text-xs text-[#556363]">Years Experience</div>
                  </div>
                  <div className="bg-[#f7f2e9] border border-[#d8cec0]/30 rounded p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#14383b]">2500+</div>
                    <div className="text-[10px] sm:text-xs text-[#556363]">Clients Served</div>
                  </div>
                  <div className="bg-[#f7f2e9] border border-[#d8cec0]/30 rounded p-3 sm:p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#14383b]">100%</div>
                    <div className="text-[10px] sm:text-xs text-[#556363]">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[550px]">
                  <Image
                    src="/images/used/shiva.webp"
                    alt="Shiva Prasad Dhakal - Managing Director of Himkala Adventure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute bottom-0 left-0 bg-[#14383b] px-4 sm:px-6 py-3 sm:py-4 md:py-5 text-[#f7f2e9] sm:px-8">
                    <div className="text-[8px] sm:text-[10px] font-bold tracking-[.15em]">FOUNDED</div>
                    <div className="font-serif text-2xl sm:text-3xl md:text-4xl leading-none">2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Our Team</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Meet Our <span className="text-[#cf6943]">Expert Guides</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Passionate about creating authentic, safe, and transformative travel experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      quality={85}
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#14383b]/90 text-[#f7f2e9] px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-[.15em]">
                      {member.experience}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-[#14383b]">{member.name}</h3>
                    <p className="text-[#cf6943] text-sm font-medium mt-1">{member.role}</p>
                    <p className="text-[#66706d] text-xs mt-1">{member.speciality}</p>
                    <p className="text-[#556363] text-sm leading-relaxed mt-3 sm:mt-4">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Licenses & Accreditations */}
        <section className="bg-[#14383b] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 text-[#f7f2e9]">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#ef966e] uppercase">Credentials</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#f7f2e9]">
                  Licenses &amp; <span className="text-[#ef966e]">Accreditations</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#b9c9c0]">
                Demonstrating our commitment to safety, quality, and professional standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {licenses.map((license, i) => (
                <div key={i} className="bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 backdrop-blur-sm rounded hover:bg-[#f7f2e9]/15 transition-all duration-300">
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded flex items-center justify-center text-[#f0a17f] shrink-0">
                        <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base text-[#f7f2e9] font-bold mb-0.5 sm:mb-1 break-words">{license.name}</h4>
                        {license.number && (
                          <p className="text-[#f0a17f] text-xs sm:text-sm font-mono mb-1 sm:mb-2 break-all">{license.number}</p>
                        )}
                        <p className="text-[#f7f2e9]/60 text-xs sm:text-sm">{license.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#f7f2e9]/20 mt-10 sm:mt-12 pt-10 sm:pt-12">
              <h3 className="text-center text-[#f7f2e9] font-bold text-base sm:text-lg mb-6 sm:mb-8">Recognized &amp; Certified By</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-3xl mx-auto">
                {[
                  { name: "Sustainable Tourism Certified", icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { name: "TripAdvisor Excellence", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { name: "Safety First Certified", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { name: "Local Community Partner", icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f7f2e9]/5 border border-[#f7f2e9]/20 rounded p-3 sm:p-4 text-center hover:bg-[#f7f2e9]/10 transition-colors">
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

        {/* Booking Terms & Policies */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 border-t border-[#d8cec0]/30">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Terms &amp; Policies</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Booking <span className="text-[#cf6943]">Terms</span> &amp; Conditions
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Transparent policies to ensure a smooth and worry-free booking experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-12">
              {[
                {
                  title: "Booking & Reservation",
                  icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
                  points: [
                    "20% down payment required to secure your place (15% if booking more than ten weeks prior)",
                    "Remaining balance payable after arrival in Nepal",
                    "4% handling charge for credit card payments (no charge for bank transfers)",
                    "Last minute bookings accepted for Nepal trips only",
                  ],
                },
                {
                  title: "Cancellation Policy",
                  icon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
                  points: [
                    "No refund of deposit for cancellations",
                    "Cancellation charges apply even for full payments",
                    "Written notification required for all cancellations",
                    "No refund for unused portions of the itinerary",
                  ],
                },
                {
                  title: "Safety & Insurance",
                  icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
                  points: [
                    "Comprehensive travel insurance mandatory for all treks",
                    "Must cover medical, evacuation, and trip cancellation",
                    "Ensure policy covers all activities and altitudes",
                    "Emergency helicopter evacuation coordination included",
                  ],
                },
                {
                  title: "Changes & Modifications",
                  icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />,
                  points: [
                    "Prior notice required for itinerary changes",
                    "Modifications may occur en route due to circumstances like bad weather",
                    "Single supplement charge applies for solo travelers",
                    "Itinerary will be modified for flight delays/cancellations",
                  ],
                },
              ].map((policy, i) => (
                <div key={i} className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9]">
                        {policy.icon}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#14383b]">{policy.title}</h3>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {policy.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#cf6943] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#556363]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Policies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6 sm:mt-8">
              {[
                { icon: <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, title: "Clients' Responsibility", text: "Our guides have full authority during tours. Unlawful acts may result in removal from the tour." },
                { icon: <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, title: "Tour Amendment", text: "Prior notice required for itinerary changes. Modifications may occur en route due to circumstances like bad weather." },
                { icon: <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, title: "Paper and Documents", text: "All necessary documents must be provided in sequence for visas and permits." },
                { icon: <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, title: "Flight Delay/Cancellation", text: "Possible in Himalayan regions due to weather. Itinerary will be modified accordingly." },
              ].map((policy, i) => (
                <div key={i} className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#e47a4f] to-[#cf6943] rounded flex items-center justify-center text-[#f7f2e9]">
                        {policy.icon}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#14383b]">{policy.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#556363]">{policy.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bank Details */}
            <div className="mt-6 sm:mt-8 bg-[#e4d8c8] rounded overflow-hidden">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#14383b]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#14383b]">Payment Details</h3>
                </div>
                <div className="grid gap-2 sm:gap-3 text-[#556363] text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-[#14383b] mb-0.5 sm:mb-1">FOR CREDIT TO:</p>
                    <p>{bankDetails.bankName}</p>
                    <p>{bankDetails.location}</p>
                    <p className="break-all">SWIFT: {bankDetails.swift}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#14383b] mb-0.5 sm:mb-1">BENEFICIARY FINAL CREDIT TO:</p>
                    <p className="break-all">A/C Holder: {bankDetails.accountHolder}</p>
                    <p className="break-all">A/C No: {bankDetails.accountNumber}</p>
                    <p>{bankDetails.bankName}</p>
                    <p>{bankDetails.branch}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-6 sm:mt-8 bg-[#14383b] rounded p-5 sm:p-6 md:p-8 border border-[#f7f2e9]/20">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e47a4f]/30 rounded-full flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#f0a17f]" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-[#f7f2e9] font-bold text-base sm:text-lg mb-0.5 sm:mb-1">Important Notice</h4>
                  <p className="text-[#f7f2e9]/70 text-xs sm:text-sm leading-relaxed">
                    All policies are subject to change. Please refer to your booking confirmation for the specific terms 
                    applicable to your reservation. For any questions or special circumstances, please contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">Get In Touch</div>
                <h2 className="mt-3 sm:mt-5 font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Contact <span className="text-[#cf6943]">Information</span>
                </h2>
              </div>
              <p className="max-w-full md:max-w-[280px] text-sm leading-6 text-[#66706d]">
                Have questions or ready to start planning your Himalayan adventure?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-8 sm:mt-12">
              <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">Address</p>
                <p className="text-[#14383b] font-medium text-xs sm:text-sm">Thamel, Kathmandu, Nepal</p>
              </div>

              <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">Phone</p>
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-[#14383b] font-medium text-xs sm:text-sm hover:text-[#cf6943] transition-colors break-all">
                  {phoneNumber}
                </a>
              </div>

              <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">Email</p>
                <a 
                  href="#" 
                  onClick={handleEmailClick}
                  className="text-[#14383b] font-medium text-xs sm:text-sm hover:text-[#cf6943] transition-colors break-all"
                >
                  info@himkalaadventure.com
                </a>
              </div>

              <div className="bg-[#f7f2e9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#14383b] rounded-full flex items-center justify-center text-[#f0a17f] mx-auto mb-2 sm:mb-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-[10px] sm:text-xs text-[#556363] uppercase tracking-wider mb-0.5 sm:mb-1">Hours</p>
                <p className="text-[#14383b] font-medium text-xs sm:text-sm">Sun - Fri, 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}