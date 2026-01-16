"use client";

import { useState } from "react";
import { ChevronDown, Mountain, Calendar, DollarSign, HelpCircle, MapPin, Clock, Users, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const itinerary = [
  { day: 1, title: "Kathmandu to Soti Khola", altitude: "700m", description: "Drive through scenic hills to the trek starting point." },
  { day: 2, title: "Soti Khola to Machha Khola", altitude: "870m", description: "Follow the Budhi Gandaki River through subtropical forests." },
  { day: 3, title: "Machha Khola to Jagat", altitude: "1,340m", description: "Cross suspension bridges and pass through traditional villages." },
  { day: 4, title: "Jagat to Deng", altitude: "1,860m", description: "Enter the restricted Manaslu region with permit checkpoints." },
  { day: 5, title: "Deng to Namrung", altitude: "2,660m", description: "Witness the transition to Tibetan Buddhist culture." },
  { day: 6, title: "Namrung to Samagaon", altitude: "3,530m", description: "Stunning views of Manaslu peak and ancient monasteries." },
  { day: 7, title: "Acclimatization Day in Samagaon", altitude: "3,530m", description: "Explore Birendra Lake and Pungyen Monastery." },
  { day: 8, title: "Samagaon to Samdo", altitude: "3,860m", description: "Trek through high alpine meadows near Tibet border." },
  { day: 9, title: "Samdo to Dharamsala", altitude: "4,460m", description: "Prepare for the challenging Larkya La pass crossing." },
  { day: 10, title: "Dharamsala to Bimthang via Larkya La Pass", altitude: "5,160m", description: "Cross the majestic Larkya La Pass - the trek highlight." },
  { day: 11, title: "Bimthang to Tilije", altitude: "2,300m", description: "Descend through rhododendron forests to lower valleys." },
  { day: 12, title: "Tilije to Dharapani", altitude: "1,860m", description: "Join the Annapurna Circuit trail." },
  { day: 13, title: "Dharapani to Besisahar to Kathmandu", altitude: "760m", description: "Drive back to Kathmandu through scenic landscapes." },
];

const faqs = [
  { question: "What is the best time to do the Manaslu Circuit Trek?", answer: "The best seasons are Spring (March-May) and Autumn (September-November) when weather is stable and views are clearest." },
  { question: "Do I need a special permit?", answer: "Yes, you need a Manaslu Restricted Area Permit and Annapurna Conservation Area Permit. These require trekking with a registered agency and in groups of minimum 2 people." },
  { question: "How difficult is the trek?", answer: "It's a challenging trek rated moderate to difficult. The Larkya La Pass at 5,160m is demanding. Good fitness and prior trekking experience recommended." },
  { question: "Is altitude sickness a concern?", answer: "Yes, proper acclimatization is crucial. The itinerary includes rest days and gradual ascent to minimize risks." },
  { question: "What about accommodation and food?", answer: "Teahouse accommodation is available throughout. Rooms are basic but comfortable. Dal bhat, noodles, and Tibetan dishes are common." },
];

export default function ManasluTrekPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A8CA5] via-[#D9E6EC] to-[#FDFDFD] text-gray-800">
      {/* Hero Section */}
      <div 
        className="relative h-[85vh] sm:h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/40 via-[#3d6678]/20 to-[#1c3c50]/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
            Nepal • Restricted Area Trek
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white px-2">
            Manaslu Circuit
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-white/90 px-4">
            Journey around the world's eighth highest peak through ancient Tibetan villages and over the legendary Larkya La Pass
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 Days</span>
            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> 5,160m Max</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 177 km</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Min 2 People</span>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-4 sm:px-0">
            <Button className="rounded-full bg-[#2B5C6B] hover:bg-[#246071] text-white px-6 sm:px-8 py-5 sm:py-6 text-base font-medium w-full sm:w-auto">
              Book Now
            </Button>
            <Button variant="outline" className="rounded-full border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base w-full sm:w-auto">
              Customize for Yourself
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 right-4 z-50 sm:hidden rounded-full bg-[#2B5C6B] p-3 text-white shadow-lg"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation - Fixed on Desktop, Mobile Menu */}
      <nav className={`${mobileMenuOpen ? 'fixed inset-0 z-40 bg-[#1c3c50]/95 backdrop-blur-md' : 'sticky top-0 z-50 hidden sm:block'} border-b border-[#2B5C6B]/20 bg-[#1c3c50]/90 backdrop-blur-md`}>
        <div className="mx-auto flex max-w-4xl flex-col sm:flex-row items-center justify-center gap-2 px-4 sm:px-6 py-4">
          {[
            { id: "overview", icon: Mountain, label: "Overview" },
            { id: "itinerary", icon: Calendar, label: "Itinerary" },
            { id: "cost", icon: DollarSign, label: "Cost" },
            { id: "faq", icon: HelpCircle, label: "FAQ" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 rounded-full px-4 py-3 sm:py-2 text-sm transition-all w-full sm:w-auto ${
                activeSection === id
                  ? "bg-[#2B5C6B] text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
        <section id="overview" className="mb-16 sm:mb-24 scroll-mt-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-semibold text-[#2B5C6B]">Overview</h2>
          <div className="space-y-4 sm:space-y-6 text-gray-800 leading-relaxed">
            <p className="text-base sm:text-lg">
              The Manaslu Circuit Trek is one of Nepal's most rewarding and culturally rich treks, circling Mount Manaslu (8,163m), the eighth highest mountain in the world. This off-the-beaten-path adventure offers a pristine alternative to the crowded Annapurna and Everest regions.
            </p>
            <p className="text-base sm:text-lg">
              Traverse through diverse landscapes—from lush subtropical forests to high alpine meadows—while experiencing the authentic Tibetan Buddhist culture of remote mountain villages. The trek culminates at the challenging Larkya La Pass (5,160m), offering breathtaking panoramic views of the Himalayan giants.
            </p>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Difficulty", value: "Moderate to Challenging" },
                { label: "Best Season", value: "Mar-May, Sep-Nov" },
                { label: "Starting Point", value: "Soti Khola" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-[#D9E6EC] bg-white p-4 sm:p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-wider text-[#2B5C6B]">{label}</p>
                  <p className="mt-2 text-lg font-medium text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="itinerary" className="mb-16 sm:mb-24 scroll-mt-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-semibold text-[#2B5C6B]">Day-by-Day Itinerary</h2>
          <div className="space-y-3 sm:space-y-4">
            {itinerary.map((day) => (
              <div
                key={day.day}
                className="group rounded-2xl border border-[#D9E6EC] bg-white p-4 sm:p-5 transition-all hover:border-[#2B5C6B]/30 hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2B5C6B] text-sm font-medium text-white">
                      {day.day}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800">{day.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{day.description}</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-center shrink-0 rounded-full bg-[#EAF4F8] px-3 py-1 text-xs text-[#2B5C6B] font-medium mt-2 sm:mt-0">
                    {day.altitude}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cost" className="mb-16 sm:mb-24 scroll-mt-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-semibold text-[#2B5C6B]">Cost Details</h2>
          <div className="rounded-3xl border border-[#D9E6EC] bg-gradient-to-br from-white to-[#EAF4F8] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-bold text-[#2B5C6B]">$1,450</span>
              <span className="text-gray-600">per person</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Based on group size of 2-4 people</p>
            
            <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 sm:mb-4 text-sm font-medium uppercase tracking-wider text-[#2B5C6B]">Included</h4>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  {[
                    "All necessary permits and fees",
                    "Experienced English-speaking guide",
                    "Porter service (1 porter per 2 trekkers)",
                    "Teahouse accommodation",
                    "Three meals daily during trek",
                    "Ground transportation",
                    "First aid medical kit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2B5C6B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 sm:mt-0">
                <h4 className="mb-3 sm:mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">Not Included</h4>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                  {[
                    "International flights",
                    "Nepal visa fees",
                    "Travel insurance",
                    "Personal trekking gear",
                    "Tips for guides and porters",
                    "Extra meals and beverages",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-16 sm:mb-24 scroll-mt-16">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-semibold text-[#2B5C6B]">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-[#D9E6EC] bg-white px-4 sm:px-6 data-[state=open]:bg-[#F4FBFF]"
              >
                <AccordionTrigger className="py-4 text-left text-gray-800 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="text-sm sm:text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#2B5C6B] to-[#4A8CA5] border border-[#2B5C6B] p-6 sm:p-10 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready for the Adventure?</h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-lg text-white/90 text-sm sm:text-base">
            Embark on an unforgettable journey through the heart of the Himalayas. Limited permits available each season.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button className="rounded-full bg-white hover:bg-gray-100 text-[#2B5C6B] px-6 sm:px-8 py-5 sm:py-6 text-base font-medium w-full sm:w-auto">
              Book Now
            </Button>
            <Button variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base w-full sm:w-auto">
              Customize for Yourself
            </Button>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/80 text-sm">Have questions?</p>
            <a 
              href="https://wa.me/9779841376470?text=Hello! I'm interested in booking the Manaslu Circuit Trek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}