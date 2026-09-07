"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  Copy,
  Check,
  ChevronDown,
  Star,
  Heart,
  Camera,
  AlertTriangle,
  Map,
  Menu,
  X,
  Landmark,
  Compass,
  Home,
  MountainSnow,
  Building2,
  Church,
  History,
  Footprints,
  MessageCircle,
  Globe,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Award,
  TrendingUp,
  Coffee,
  ShoppingBag,
  Droplet,
  Eye,
  Sunrise,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { loadManagedServices } from "@/lib/firebase/managed-services-repository";
import { MANAGED_SERVICES_FALLBACK, MANAGED_SERVICES_UPDATED_EVENT } from "@/lib/managed-services";

// All free tour options
const whyChoose = [
  {
    icon: Award,
    title: "Expert Local Guides",
    description: "All tours led by certified guides with decades of experience and deep cultural knowledge.",
  },
  {
    icon: Globe,
    title: "UNESCO World Heritage",
    description: "Visit UNESCO World Heritage sites across Kathmandu Valley - all completely free.",
  },
  {
    icon: Users,
    title: "Tips-Based Model",
    description: "You decide the value of the tour. No fixed fees - just gratitude for your guide's expertise.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Daily tours with multiple start times. Special requests and custom routes welcome.",
  },
];

const faqs = [
  {
    question: "Are the tours really free?",
    answer:
      "Yes! All our tours are completely free to join. We operate on a tips-based model - you decide what the experience was worth to you at the end of the tour.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
"Please use the 'Join Tour' button on this page or visit our Contact page to reserve your spot. We recommend booking at least 24 hours in advance to ensure guide availability.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable walking shoes, water, camera, and small cash for entrance fees and refreshments.",
  },
  {
    question: "Can I combine multiple tours?",
    answer:
      "Absolutely! We can arrange combination tours covering multiple sites in one day. Contact us to customize your experience.",
  },
  {
    question: "Are the tours suitable for children?",
    answer:
      "Yes, all our free tours are family-friendly. The pace is relaxed and guides are experienced with travelers of all ages.",
  },
];

const freeTourIcons = {
  kathmandu: Footprints,
} as const;

export default function FreeToursKathmanduPage() {
  const [freeTourOptions, setFreeTourOptions] = React.useState(MANAGED_SERVICES_FALLBACK.freeTours);
  const [copied, setCopied] = React.useState(false);
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const tourName = "Free Tours Kathmandu Valley";

  React.useEffect(() => {
    const refresh = () => { void loadManagedServices("freeTours").then(({ services }) => setFreeTourOptions(services.filter((service) => service.published))); };
    refresh();
    const onUpdate = (event: Event) => { if ((event as CustomEvent).detail === "freeTours") refresh(); };
    window.addEventListener(MANAGED_SERVICES_UPDATED_EVENT, onUpdate);
    return () => window.removeEventListener(MANAGED_SERVICES_UPDATED_EVENT, onUpdate);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2ede4] overflow-x-hidden">
      <main>
        {/* Header - Matching Free Walking Tour style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-[880px]">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[.12em] text-[#cf6943] uppercase">
                  <span className="h-px w-6 sm:w-8 bg-[#cf6943]" />
                  <span>Free Tours</span>
                </div>
                <h1 className="mt-3 sm:mt-5 font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] sm:leading-[.95] tracking-[-.03em] sm:tracking-[-.045em] text-[#14383b]">
                  Free Walking Tour <br />
                  <span className="text-[#cf6943]">Kathmandu</span>
                </h1>
              </div>
              <div className="max-w-full md:max-w-[280px]">
                <p className="text-sm leading-6 text-[#66706d]">
                  Join our free tips-based walking tour through Kathmandu's historic streets. Explore UNESCO World Heritage sites with expert local guides.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="bg-[#cf6943] text-[#fff8ee] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full">
                    FREE · Tips-based
                  </span>
                  <span className="bg-[#f7f2e9] text-[#14383b] px-3 py-1 text-[10px] font-bold tracking-wide rounded-full border border-[#d8cec0]/30">
                    Daily Tours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Image */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <figure className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-lg overflow-hidden bg-[#14383b]">
            <Image
              src="/images/used/FWT-4.webp"
              alt="Free Walking Tour Kathmandu - Explore UNESCO World Heritage sites"
              fill
              className="object-cover opacity-90"
              priority
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
              <span className="bg-[#e47a4f] text-[#fff8ee] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold tracking-wide rounded">
                Tips-based · Free to join
              </span>
            </div>
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <span className="bg-[#14383b]/90 text-[#f7f2e9] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded">
                UNESCO Sites
              </span>
            </div>
          </figure>
        </div>

        {/* Quick Stats - Minimal inline */}
        <div className="max-w-[880px] mx-auto px-4 sm:px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-6 sm:-mt-8 relative z-10">
            {[
              { label: "Tour Type", value: "Free Walking Tour" },
              { label: "UNESCO Sites", value: "Multiple Sites" },
              { label: "Rating", value: "4.9/5 (450+)" },
              { label: "Duration", value: "2-3 hours" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f7f2e9] rounded-lg p-3 text-center shadow-sm border border-[#d8cec0]/30">
                <p className="text-[10px] text-[#66706d] uppercase tracking-wider font-semibold">{stat.label}</p>
                <p className="text-sm font-bold text-[#14383b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Editorial Style */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[880px]">
            {/* Overview */}
            <article className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                <strong className="text-[#14383b]">Free Walking Tour Kathmandu</strong> offers a unique opportunity to explore Nepal's rich cultural heritage without spending a dime. Our tour is tips-based, meaning you decide the value of your guide's expertise.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Join our <strong className="text-[#14383b]">free walking tour</strong> through Kathmandu's most iconic <strong className="text-[#14383b]">UNESCO World Heritage sites</strong>. Led by expert local guides with decades of experience and deep cultural knowledge.
              </p>
              <p className="text-[#556363] text-sm sm:text-base leading-relaxed">
                Explore the historic streets, ancient temples, and vibrant local culture of Kathmandu. Our free tour is perfect for travelers who want to experience the authentic heart of Nepal's capital city.
              </p>
            </article>

            <div className="mt-6 p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded">
              <AlertTriangle className="w-4 h-4 inline mr-2" aria-hidden="true" />
              <strong>Tips‑based model:</strong> you award the time and experience of the guide. No fixed fee — gratitude welcomed.
            </div>
          </div>
        </section>

        {/* Tour Options - Clean cards */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="tours">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-6">Join Our Free Walking Tour</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-8">
              Explore Kathmandu's historic streets with our expert local guides. Free to join, tips-based.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {freeTourOptions.map((tour) => {
                const Icon = freeTourIcons[tour.id as keyof typeof freeTourIcons] || Footprints;
                return (
                  <div key={tour.id} className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden hover:shadow-md transition-all">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="relative h-48 md:h-auto md:col-span-1 min-h-[180px]">
                        <Image
                          src={tour.image}
                          alt={tour.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                          {tour.featured && (
                            <span className="bg-[#e47a4f] text-[#f7f2e9] text-[10px] font-bold px-2 py-0.5 rounded">Most Popular</span>
                          )}
                          <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">FREE</span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 md:col-span-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-[#cf6943]" />
                            </div>
                            <h3 className="font-bold text-[#14383b] text-base sm:text-lg">{tour.name}</h3>
                          </div>
                          <p className="text-[#556363] text-sm leading-relaxed mb-3">{tour.description}</p>
                          <div className="flex flex-wrap gap-3 text-xs text-[#66706d] mb-3">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#cf6943]" /> {tour.duration}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#cf6943]" /> {tour.meetingPoint}</span>
                            <span className="flex items-center gap-1"><Landmark className="w-3 h-3 text-[#cf6943]" /> {tour.unesco}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {tour.highlights.slice(0, 3).map((h, i) => (
                              <span key={i} className="text-[10px] border border-[#d8cec0]/50 text-[#556363] px-2 py-0.5 rounded">{h}</span>
                            ))}
                            {tour.highlights.length > 3 && (
                              <span className="text-[10px] text-[#66706d]">+{tour.highlights.length - 3} more</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#d8cec0]/30">
                          <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Tips-based
                          </span>
                          <Link href={`/contact?trek=${encodeURIComponent(tour.name)}`}>
                            <Button size="sm" className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#f7f2e9] font-bold rounded-full px-4 py-1.5 text-xs">
                              Join Tour <ChevronRight className="w-3 h-3 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          
          </div>
        </section>

        {/* Why Choose Us - Clean */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="why-choose">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Why Choose Our Free Walking Tour</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">Explore Kathmandu with expert local guides at no cost.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-3 p-4 bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30">
                    <div className="w-10 h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#cf6943]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#14383b] text-sm">{item.title}</h4>
                      <p className="text-[#556363] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works - Clean */}
        <section className="bg-[#e4d8c8] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="how-it-works">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">How It Works</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">Join our free walking tour in 4 simple steps.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  title: "Choose Your Tour",
                  description: "Select your preferred date.",
                  icon: Compass,
                },
                {
                  step: "2",
                  title: "Show Up",
                  description: "Meet your guide 5-10 minutes early.",
                  icon: MapPin,
                },
                {
                  step: "3",
                  title: "Explore & Learn",
                  description: "Enjoy expert-guided UNESCO tours.",
                  icon: Landmark,
                },
                {
                  step: "4",
                  title: "Tip Your Guide",
                  description: "You decide the value of the tour.",
                  icon: Heart,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-[#f7f2e9] p-4 rounded-lg border border-[#d8cec0]/30 text-center">
                    <div className="w-10 h-10 bg-[#cf6943]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sm font-bold text-[#cf6943]">{item.step}</span>
                    </div>
                    <div className="w-10 h-10 bg-[#cf6943]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-[#cf6943]" />
                    </div>
                    <h4 className="font-bold text-[#14383b] text-sm">{item.title}</h4>
                    <p className="text-[#556363] text-xs">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <Link href="#tours">
                <Button className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full px-6 py-2.5 text-sm">
                  Join Our Free Walking Tour
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f2ede4] px-4 sm:px-5 md:px-8 py-12 sm:py-16 lg:py-20" id="faq">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#14383b] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#556363] text-sm sm:text-base mb-6">Everything you need to know about our free walking tour.</p>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#f7f2e9] rounded-lg border border-[#d8cec0]/30 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span className="font-bold text-[#14383b] text-sm pr-4">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#66706d] transition-transform shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-4 pb-4 border-t border-[#d8cec0]/30">
                      <p className="text-[#556363] text-sm leading-relaxed pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>
    </div>
  );
}