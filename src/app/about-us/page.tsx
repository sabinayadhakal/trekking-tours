"use client";

import * as React from "react";
import Image from "next/image";
import {
  Mountain,
  Award,
  ShieldCheck,
  FileCheck,
  Users,
  Heart,
  Globe,
  CheckCircle,
  Scroll,
  Building,
  BadgeCheck,
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
  Calendar,
  Plane,
  FileText,
  FileWarning,
  MapPin as MapIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const licenses = [
  {
    name: "Certification of Incorporate Company",
    number: "ID: 131462/071/072",
    description: "Registered Private Limited Company under Nepal law",
    icon: <Building className="w-6 h-6" />,
  },
  {
    name: "Trekking Agencies' Association of Nepal (TAAN)",
    number: "",
    description: "Member of Nepal's premier trekking association",
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  
  {
    name: "Certificate of tourism industry division ",
    number: "ID: 1888/071",
    description: "Government-approved travel and tour operator license",
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    name: "Guiding Certificate",
    number: "ID: TG-01/36",
    description: "Official certification for professional tourist guide in Nepal",
    icon: <Scroll className="w-6 h-6" />,
  },
  {
    name: "Foreign Exchange Authorization Letter",
    number: "ID: N.R.B/B.B.Bya.B/E/Tre/H.223/081",
    description: "Official permission for making payments in foreign currency",
    icon: <FileCheck className="w-6 h-6" />,
  },
];

const accreditations = [
  {
    name: "Sustainable Tourism Certified",
    description: "Committed to eco-friendly and responsible tourism practices",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    name: "TripAdvisor Excellence Award",
    description: "Consistently rated excellent by travelers worldwide",
    icon: <Award className="w-8 h-8" />,
  },
  {
    name: "Safety First Certified",
    description: "Meeting international safety standards for adventure tourism",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    name: "Local Community Partner",
    description: "Supporting and empowering local Sherpa communities",
    icon: <Heart className="w-8 h-8" />,
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

const policies = [
  {
    title: "Booking & Reservation",
    icon: <CreditCard className="w-6 h-6" />,
    points: [
      "20% down payment required to secure your place (15% if booking more than ten weeks prior)",
      "Remaining balance payable after arrival in Nepal",
      "4% handling charge for credit card payments (no charge for bank transfers)",
      "Last minute bookings accepted for Nepal trips only",
    ],
  },
  {
    title: "Cancellation Policy",
    icon: <XCircle className="w-6 h-6" />,
    points: [
      "No refund of deposit for cancellations",
      "Cancellation charges apply even for full payments",
      "Written notification required for all cancellations",
      "No refund for unused portions of the itinerary",
    ],
  },
  {
    title: "Safety & Insurance",
    icon: <ShieldCheck className="w-6 h-6" />,
    points: [
      "Comprehensive travel insurance mandatory for all treks",
      "Must cover medical, evacuation, and trip cancellation",
      "Ensure policy covers all activities and altitudes",
      "Emergency helicopter evacuation coordination included",
    ],
  },
  {
    title: "Changes & Modifications",
    icon: <RefreshCw className="w-6 h-6" />,
    points: [
      "Prior notice required for itinerary changes",
      "Modifications may occur en route due to circumstances like bad weather",
      "Single supplement charge applies for solo travelers",
      "Itinerary will be modified for flight delays/cancellations",
    ],
  },
];

const companyValues = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Safety First",
    description: "Your safety is our absolute priority. We never compromise on equipment, training, or emergency protocols.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Authentic Experiences",
    description: "We create genuine connections with local communities, cultures, and the natural environment.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Sustainable Tourism",
    description: "We minimize our environmental footprint and contribute positively to local economies.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Guidance",
    description: "Our guides are certified professionals with deep knowledge and years of experience.",
  },
];

const companyHighlights = [
  {
    icon: <MapIcon className="w-6 h-6" />,
    title: "Custom-Planned Journeys",
    text: "No generic packages. We create personalized itineraries that match your unique preferences and interests.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Free Walking Tours",
    text: "First of its kind in Nepal! Daily tours exploring Kathmandu's streets and local life.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Proven Trustworthiness",
    text: "Verified by glowing reviews from travelers worldwide on TripAdvisor and social media.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Value for Money",
    text: "No glitches, no difficulties. We ensure smooth, hassle-free experiences throughout your journey.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Home Away From Home",
    text: "We serve with honest spirit, making you feel at home while exploring Nepal's wonders.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Top-Notch Service",
    text: "Single-sightedly determined to deliver exceptional experiences that exceed expectations.",
  },
];

const additionalPolicies = [
  {
    icon: <AlertCircle className="w-5 h-5" />,
    title: "Clients' Responsibility",
    text: "Our guides have full authority during tours. Unlawful acts may result in removal from the tour.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Tour Amendment",
    text: "Prior notice required for itinerary changes. Modifications may occur en route due to circumstances like bad weather.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Paper and Documents",
    text: "All necessary documents must be provided in sequence for visas and permits. We're not accountable for missing documents.",
  },
  {
    icon: <Plane className="w-5 h-5" />,
    title: "Flight Delay/Cancellation",
    text: "Possible in Himalayan regions due to weather. Itinerary will be modified accordingly.",
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
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Page Header - COMPLETE FIX FOR SAFARI */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#0f2940] bg-gradient-to-br from-[#0f2940] to-[#1a4166] relative overflow-hidden">
        {/* Solid overlay for Safari fallback */}
        <div className="absolute inset-0 bg-[#0f2940] safari-fallback" />
        
        {/* Gradient background for modern browsers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2940] to-[#1a4166] modern-gradient" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#C5E0ED] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#7fb8d4] rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge with Safari-safe styling */}
            <div className="mb-4 sm:mb-6 inline-block">
              <Badge className="bg-[#0f2940]/95 bg-[#0a1e32] text-white border-[#C5E0ED]/40 border-[#C5E0ED] py-1.5 sm:py-2 px-4 sm:px-5 text-xs sm:text-sm">
                <Mountain className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> Est. 2015
              </Badge>
            </div>
            
            {/* Main title - Using solid text for Safari */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6 relative">
              About <span className="text-[#C5E0ED] font-bold">Himkala Adventure</span>
            </h1>
            
            {/* Description with Safari-safe high contrast */}
            <div className="relative">
              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed px-2 safari-text-fallback">
               With years of field experience, Himkala Adventure provides expert guidance for travelers seeking more than just a trek. We are specialists in Nepal’s legendary trekking routes and vibrant city tours, and we have expanded our expertise to include curated cultural journeys in Bhutan and Tibet. Our philosophy remains the same: professional advice, comprehensive planning, and a commitment to your safety ensures your trip is perfectly tailored to your dreams.
              </p>
              {/* Modern browser version with opacity */}
              <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed px-2 modern-text absolute top-0 left-0 w-full">
               With years of field experience, Himkala Adventure provides expert guidance for travelers seeking more than just a trek. We are specialists in Nepal’s legendary trekking routes and vibrant city tours, and we have expanded our expertise to include curated cultural journeys in Bhutan and Tibet. Our philosophy remains the same: professional advice, comprehensive planning, and a commitment to your safety ensures your trip is perfectly tailored to your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the code remains exactly the same... */}
      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
                <Mountain className="w-3 h-3 mr-1.5" /> OUR STORY
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 sm:mb-6 leading-tight">
Streets, Stories & the Himalayas              </h2>
              <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Himkala Adventure was founded in 2015 by a native of Gorkha with a deep-rooted passion for the Himalayas and a dream to share Nepal's beauty with the world. What began as a small operation has grown into a locally trusted guiding service, known today for our immersive city tours and the highly popular Free Walking Tours in Kathmandu.
                </p>
                <p>
                  While we are steadily building our name in trekking, our focus remains on authentic cultural connections, helping travelers fall in love with Nepal's vibrant streets, stories, and traditions. We are proud to have extended our expertise into Bhutan and Tibet, and our vision remains clear: to grow into one of the region's most trusted names in adventure, one authentic experience at a time.
                </p>
               
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl sm:shadow-2xl shadow-[#0f2940]/20">
                <Image
                  src="/images/used/FWT-4.avif"
                  alt="Himalayan landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/30">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-[#C5E0ED]">11+</div>
                      <div className="text-xs text-white/90">Years</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-[#C5E0ED]">2500+</div>
                      <div className="text-xs text-white/90">Travelers</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-[#C5E0ED]">100%</div>
                      <div className="text-xs text-white/90">Safety</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#C5E0ED]/10 via-white to-[#C5E0ED]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
              <Star className="w-3 h-3 mr-1.5" /> WHAT SETS US APART
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 sm:mb-6">What Sets Himkala Adventure Apart?</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-2">
              Among hundreds of tour companies in Nepal, we stand out with our unique approach 
              and unwavering commitment to exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {companyHighlights.map((item, i) => (
              <div key={i}>
                <Card className="bg-white border-[#C5E0ED]/30 h-full rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-[#C5E0ED]/20 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg sm:rounded-xl flex items-center justify-center text-[#0f2940] mb-3 sm:mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0f2940] mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 text-center">
            <p className="text-slate-600 italic text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4">
              &quot;We don&apos;t just plan trips; we create memorable experiences that stay with you long after you&apos;ve returned home.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Managing Director */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#C5E0ED]/20 via-[#e8f4f8] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="lg:order-1">
              <Badge className="mb-3 sm:mb-4 bg-[#0f2940] text-[#C5E0ED] border-none text-xs">Managing Director</Badge>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-2">Shiva Prasad Dhakal</h3>
              <p className="text-[#2d6a8a] font-medium mb-4 sm:mb-6 text-sm sm:text-base">Managing Director & Founder</p>
              
              <div className="relative mb-4 sm:mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-[#C5E0ED]" />
                <p className="text-slate-600 italic leading-relaxed pl-6 sm:pl-8 text-sm sm:text-base">
                  &quot;Beyond the trails and temples lie the real treasures: the conversations, the kindness of strangers, and the feeling of being truly welcomed somewhere new.&quot;
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                <p>
                  A native of Gorkha with a deep connection to the Himalayas, Shiva Prasad Dhakal founded Himkala Adventure to share Nepal's beauty in a more personal way. A true pioneer in Kathmandu's tourism scene, he introduced the city's first Free Walking Tours creating opportunities for travelers to experience local life beyond the usual tourist paths. Today, as Managing Director, he brings that same thoughtful approach to every journey, blending his passion for the mountains with a commitment to authentic cultural connection.
                </p>
                <p>
                 Our approach is simple: create meaningful experiences while giving back to the communities and landscapes that make them possible. We travel with care, respect, and a commitment to leaving things better than we found them.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h4 className="font-bold text-[#0f2940] text-sm sm:text-base">Key Achievements:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                    <span>Certified Trekking Guide (2000)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                    <span>Certified Tour Guide (2010)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                    <span>Five times continuous receiver of Trip Advisor Excellence certificate (2016)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                    <span>First to start the Free Walking Tour in Kathmandu (2017)</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-[#C5E0ED]/30 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0f2940]">25+</div>
                  <div className="text-xs text-slate-500">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-[#C5E0ED]/30 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0f2940]">2500+</div>
                  <div className="text-xs text-slate-500">Clients Served</div>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-[#C5E0ED]/30 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#0f2940]">100%</div>
                  <div className="text-xs text-slate-500">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="lg:order-2">
              <div className="relative">
                <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl sm:shadow-2xl shadow-[#0f2940]/20">
                  <Image
                    src="/images/used/shiva.avif"
                    alt="Shiva Prasad Dhakal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    quality={85}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-[#0f2940] to-[#1a4166] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C5E0ED] rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0f2940]" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xs sm:text-sm">Founded</div>
                      <div className="text-[#C5E0ED] text-lg sm:text-xl md:text-2xl font-bold">2015</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
              <Award className="w-3 h-3 mr-1.5" /> OUR VALUES
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 sm:mb-6">What Drives Us Every Day</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyValues.map((value, i) => (
              <div key={i}>
                <Card className="bg-gradient-to-br from-[#f8fbfc] to-white border-[#C5E0ED]/30 h-full rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-[#C5E0ED]/20 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#0f2940] mx-auto mb-3 sm:mb-4 md:mb-5">
                      {value.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0f2940] mb-1 sm:mb-2">{value.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#f0f7fa]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
              <Users className="w-3 h-3 mr-1.5" /> OUR TEAM
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 sm:mb-6">Meet Our Expert Guides</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-2">
              We are passionate about creating authentic, safe, and transformative travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {teamMembers.map((member, i) => (
              <div key={i}>
                <Card className="bg-white border-[#C5E0ED]/30 overflow-hidden rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940] to-transparent opacity-60" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <Badge className="bg-[#C5E0ED] text-[#0f2940] border-none text-xs">{member.experience}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5">
                    <h4 className="text-base sm:text-lg font-bold text-[#0f2940] mb-1">{member.name}</h4>
                    <p className="text-[#2d6a8a] text-xs sm:text-sm font-medium mb-1 sm:mb-2">{member.role}</p>
                    <p className="text-slate-500 text-xs mb-2 sm:mb-3">{member.speciality}</p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Accreditations */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0f2940] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#C5E0ED] rounded-full blur-[150px]" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#7fb8d4] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#C5E0ED] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
              <ShieldCheck className="w-3 h-3 mr-1.5" /> CREDENTIALS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">Licenses & Accreditations</h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed px-2">
              Demonstrating our commitment to safety, quality, and professional standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            {licenses.map((license, i) => (
              <div key={i}>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl h-full hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C5E0ED]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#C5E0ED] shrink-0">
                        {license.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base mb-1">{license.name}</h4>
                        <p className="text-[#C5E0ED] text-xs sm:text-sm font-mono mb-1 sm:mb-2">{license.number}</p>
                        <p className="text-white/80 text-xs sm:text-sm">{license.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8 sm:pt-12 md:pt-16">
            <h4 className="text-center text-white font-bold text-lg sm:text-xl mb-6 sm:mb-8 md:mb-10">
              Recognized & Certified By
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {accreditations.map((acc, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#C5E0ED]/30 rounded-full flex items-center justify-center text-[#C5E0ED] mx-auto mb-3 sm:mb-4">
                    {acc.icon}
                  </div>
                  <h5 className="text-white font-bold text-sm mb-1 sm:mb-2">{acc.name}</h5>
                  <p className="text-white/80 text-xs">{acc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Policies */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
              <FileCheck className="w-3 h-3 mr-1.5" /> TERMS & POLICIES
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 sm:mb-6">Booking Terms & Conditions</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-2">
              Transparent policies to ensure a smooth and worry-free booking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {policies.map((policy, i) => (
              <div key={i}>
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl h-full shadow-lg shadow-[#0f2940]/5">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-[#0f2940]">
                        {policy.icon}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#0f2940]">{policy.title}</h4>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {policy.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d6a8a] shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-xs sm:text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Policies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {additionalPolicies.map((policy, i) => (
              <div key={i}>
                <Card className="bg-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl h-full">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg sm:rounded-xl flex items-center justify-center text-[#0f2940]">
                        {policy.icon}
                      </div>
                      <h5 className="text-sm sm:text-base font-bold text-[#0f2940]">{policy.title}</h5>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm">{policy.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bank Details */}
          <Card className="mt-8 sm:mt-12 bg-gradient-to-r from-[#C5E0ED]/10 to-[#9dcae0]/10 border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 text-[#0f2940]" />
                <h4 className="text-lg sm:text-xl font-bold text-[#0f2940]">Payment Details</h4>
              </div>
              <div className="grid gap-3 sm:gap-4 text-slate-600 text-sm sm:text-base">
                <div>
                  <p className="font-bold text-[#0f2940] mb-1">FOR CREDIT TO:</p>
                  <p>{bankDetails.bankName}</p>
                  <p>{bankDetails.location}</p>
                </div>
                <div>
                  <p className="font-bold text-[#0f2940] mb-1">SWIFT:</p>
                  <p>{bankDetails.swift}</p>
                </div>
                <div>
                  <p className="font-bold text-[#0f2940] mb-1">BENEFICIARY FINAL CREDIT TO:</p>
                  <p>A/C Holder&apos;s Name: {bankDetails.accountHolder}</p>
                  <p>A/C No: {bankDetails.accountNumber}</p>
                  <p>{bankDetails.bankName}</p>
                  <p>{bankDetails.branch}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice - Safari fallback */}
          <div className="mt-8 sm:mt-12 bg-[#0f2940] bg-gradient-to-r from-[#0f2940] to-[#1a4166] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#C5E0ED]/30 rounded-full flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#C5E0ED]" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">Important Notice</h4>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  All policies are subject to change. Please refer to your booking confirmation for the specific terms 
                  applicable to your reservation. For any questions or special circumstances, please contact us directly 
                  and we&apos;ll be happy to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-[#C5E0ED]/20 text-[#2d6a8a] border-[#C5E0ED]/30 py-1 px-3 sm:py-1.5 sm:px-4 text-xs font-semibold">
              <Phone className="w-3 h-3 mr-1.5" /> GET IN TOUCH
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f2940] mb-4 sm:mb-6">Contact Information</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Address", value: "Thamel, Kathmandu, Nepal" },
              { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Phone", value: "+977 9841376470" },
              { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Email", value: "info@himkalaadventure.com" },
              { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Hours", value: "Sun - Fri, 9AM - 6PM" },
            ].map((item, i) => (
              <div key={i}>
                <Card className="bg-gradient-to-br from-[#f8fbfc] to-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl text-center h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-full flex items-center justify-center text-[#0f2940] mx-auto mb-3 sm:mb-4">
                      {item.icon}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mb-1">{item.label}</p>
                    <p className="text-[#0f2940] font-bold text-sm sm:text-base">{item.value}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add this CSS for Safari fallback */}
      <style jsx global>{`
        /* Hide modern styles in Safari */
        @supports not (backdrop-filter: blur(10px)) {
          .modern-gradient {
            opacity: 0;
          }
          .modern-text {
            opacity: 0;
          }
        }
        
        /* Show modern styles in modern browsers */
        @supports (backdrop-filter: blur(10px)) {
          .safari-fallback {
            opacity: 0;
          }
          .safari-text-fallback {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}