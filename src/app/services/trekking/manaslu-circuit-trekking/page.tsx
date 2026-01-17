"use client";

import { useState } from "react";
import { ChevronDown, Mountain, Calendar, DollarSign, HelpCircle, MapPin, Clock, Users, TrendingUp, Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
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
        style={{ backgroundImage: "url('/images/manaslu-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3c50]/60 via-[#3d6678]/40 to-[#1c3c50]/20" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="mb-4 inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
              Nepal • Restricted Area Trek
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Manaslu Circuit
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Journey around the world's eighth highest peak through ancient Tibetan villages and over the legendary Larkya La Pass
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-white/80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">13 Days</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">5,160m Max</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">177 km</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Min 2 People</span>
              </div>
            </div>
            
            {/* Centered Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button className="rounded-full bg-[#2B5C6B] hover:bg-[#246071] text-white px-8 py-6 text-base font-medium w-full sm:w-auto">
                Book Now
              </Button>
              <Button variant="outline" className="rounded-full border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-base w-full sm:w-auto">
                Customize for Yourself
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden absolute top-4 right-4 z-50 rounded-full bg-[#2B5C6B] p-3 text-white shadow-lg"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Bar - NOT sticky or fixed */}
        <nav className={`relative z-40 ${mobileMenuOpen ? 'fixed inset-0 bg-[#1c3c50]/95 backdrop-blur-md flex items-center justify-center' : 'bg-[#1c3c50]/90 border-b border-[#2B5C6B]/20'}`}>
          <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 py-4">
            {/* Mobile close button */}
            {mobileMenuOpen && (
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="sm:hidden absolute top-4 right-4 rounded-full bg-[#2B5C6B] p-3 text-white shadow-lg"
              >
                <X size={24} />
              </button>
            )}
            
            <div className={`${mobileMenuOpen ? 'flex flex-col' : 'hidden sm:flex flex-row'} items-center justify-center gap-2`}>
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
          </div>
        </nav>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section id="overview" className="mb-16 sm:mb-24">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
                <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-[#2B5C6B]">Overview</h2>
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    The Manaslu Circuit Trek is one of Nepal's most rewarding and culturally rich treks, circling Mount Manaslu (8,163m), the eighth highest mountain in the world. This off-the-beaten-path adventure offers a pristine alternative to the crowded Annapurna and Everest regions.
                  </p>
                  <p className="text-base sm:text-lg">
                    Traverse through diverse landscapes—from lush subtropical forests to high alpine meadows—while experiencing the authentic Tibetan Buddhist culture of remote mountain villages. The trek culminates at the challenging Larkya La Pass (5,160m), offering breathtaking panoramic views of the Himalayan giants.
                  </p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Difficulty", value: "Moderate to Challenging", icon: "🏔️" },
                      { label: "Best Season", value: "Mar-May, Sep-Nov", icon: "☀️" },
                      { label: "Starting Point", value: "Soti Khola", icon: "📍" },
                    ].map(({ label, value, icon }) => (
                      <div key={label} className="rounded-2xl border border-[#D9E6EC] bg-[#F4FBFF] p-5 text-center">
                        <div className="text-2xl mb-2">{icon}</div>
                        <p className="text-xs uppercase tracking-wider text-[#2B5C6B] font-medium">{label}</p>
                        <p className="mt-2 text-lg font-semibold text-gray-800">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="itinerary" className="mb-16 sm:mb-24">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
                <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-[#2B5C6B]">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="group rounded-2xl border border-[#D9E6EC] bg-white p-4 sm:p-5 transition-all hover:border-[#2B5C6B]/50 hover:shadow-md hover:bg-[#F4FBFF]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2B5C6B] text-base font-bold text-white">
                              {day.day}
                            </span>
                            <span className="mt-2 text-xs font-medium text-[#2B5C6B] bg-[#EAF4F8] px-2 py-1 rounded-full">
                              {day.altitude}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-800 text-lg">{day.title}</h3>
                            <p className="mt-2 text-gray-600">{day.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="cost" className="mb-16 sm:mb-24">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
                <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-[#2B5C6B]">Cost Details</h2>
                <div className="bg-gradient-to-r from-[#F4FBFF] to-[#EAF4F8] rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-bold text-[#2B5C6B]">$1,450</span>
                        <span className="text-gray-600">per person</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Based on group size of 2-4 people</p>
                    </div>
                    <Button className="mt-4 sm:mt-0 rounded-full bg-[#2B5C6B] hover:bg-[#246071] text-white px-6 py-5">
                      Book This Package
                    </Button>
                  </div>
                  
                  <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-[#2B5C6B]">✅ Included</h4>
                      <ul className="space-y-3 text-gray-700">
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
                            <div className="h-2 w-2 rounded-full bg-[#2B5C6B] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-gray-500">❌ Not Included</h4>
                      <ul className="space-y-3 text-gray-600">
                        {[
                          "International flights",
                          "Nepal visa fees",
                          "Travel insurance",
                          "Personal trekking gear",
                          "Tips for guides and porters",
                          "Extra meals and beverages",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="h-2 w-2 rounded-full bg-gray-400 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-16 sm:mb-24">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
                <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-[#2B5C6B]">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="rounded-2xl border border-[#D9E6EC] bg-white px-4 sm:px-6 data-[state=open]:bg-[#F4FBFF]"
                    >
                      <AccordionTrigger className="py-4 text-left text-gray-800 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        <span className="text-base font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          </div>

          {/* Sidebar Contact Section */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-gradient-to-b from-[#2B5C6B] to-[#4A8CA5] rounded-3xl shadow-lg p-6 sm:p-8 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">Get Expert Advice</h3>
                <p className="text-white/90 mb-6">
                  Have questions about permits, fitness requirements, or want to customize your trek? Our experts are here to help.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/9779841376470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                  >
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">WhatsApp Chat</p>
                      <p className="text-sm text-white/80">Instant response</p>
                    </div>
                    <ChevronDown className="h-5 w-5 transform rotate-270" />
                  </a>
                  
                  <a 
                    href="tel:+9779841376470"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Call Us</p>
                      <p className="text-sm text-white/80">+977 9841376470</p>
                    </div>
                    <ChevronDown className="h-5 w-5 transform rotate-270" />
                  </a>
                  
                  <a 
                    href="mailto:info@himkala.com"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                  >
                    <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Email Us</p>
                      <p className="text-sm text-white/80">info@himkala.com</p>
                    </div>
                    <ChevronDown className="h-5 w-5 transform rotate-270" />
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-bold mb-3">Quick Facts</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      Restricted Area Permit Required
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      Minimum 2 People
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      Spring & Autumn Best Seasons
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      Moderate to Difficult Level
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-sm p-6">
                <h4 className="font-bold text-[#2B5C6B] mb-4">Need Customization?</h4>
                <p className="text-gray-600 mb-4">
                  Want to add extra days, change the route, or have special requirements?
                </p>
                <Button className="w-full rounded-full bg-[#2B5C6B] hover:bg-[#246071] text-white py-6">
                  Customize Your Trek
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-[#2B5C6B] via-[#4A8CA5] to-[#2B5C6B] p-8 sm:p-12 text-center mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for Your Himalayan Adventure?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join hundreds of trekkers who have experienced the magic of Manaslu with us. Limited permits available each season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="rounded-full bg-white hover:bg-gray-100 text-[#2B5C6B] px-8 py-6 font-bold text-lg">
              Book Your Trek Now
            </Button>
            <a 
              href="https://wa.me/9779841376470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-6 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat Now
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">Nepal's #1 Rated Manaslu Trek Operator</p>
        </section>
      </main>
    </div>
  );
}