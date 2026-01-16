"use client";

import { useState } from "react";
import { ChevronDown, Mountain, Calendar, DollarSign, HelpCircle, MapPin, Clock, Users, TrendingUp } from "lucide-react";
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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-950/50 to-stone-950" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-400">
            Nepal • Restricted Area Trek
          </span>
          <h1 className="font-serif text-5xl font-light tracking-tight text-white md:text-7xl">
            Manaslu Circuit
          </h1>
          <p className="mt-4 max-w-xl text-lg text-stone-300">
            Journey around the world&apos;s eighth highest peak through ancient Tibetan villages and over the legendary Larkya La Pass
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-500" /> 13 Days</span>
            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-amber-500" /> 5,160m Max</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-500" /> 177 km</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-amber-500" /> Min 2 People</span>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full bg-amber-500 px-8 py-6 text-base font-medium text-stone-950 hover:bg-amber-400">
              Book Now
            </Button>
            <Button variant="outline" className="rounded-full border-stone-600 bg-transparent px-8 py-6 text-base text-stone-200 hover:bg-stone-800 hover:text-white">
              Customize for Yourself
            </Button>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-2 px-6 py-4">
          {[
            { id: "overview", icon: Mountain, label: "Overview" },
            { id: "itinerary", icon: Calendar, label: "Itinerary" },
            { id: "cost", icon: DollarSign, label: "Cost" },
            { id: "faq", icon: HelpCircle, label: "FAQ" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                activeSection === id
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <section id="overview" className="mb-24">
          <h2 className="mb-8 font-serif text-3xl text-white">Overview</h2>
          <div className="space-y-6 text-stone-300 leading-relaxed">
            <p>
              The Manaslu Circuit Trek is one of Nepal&apos;s most rewarding and culturally rich treks, circling Mount Manaslu (8,163m), the eighth highest mountain in the world. This off-the-beaten-path adventure offers a pristine alternative to the crowded Annapurna and Everest regions.
            </p>
            <p>
              Traverse through diverse landscapes—from lush subtropical forests to high alpine meadows—while experiencing the authentic Tibetan Buddhist culture of remote mountain villages. The trek culminates at the challenging Larkya La Pass (5,160m), offering breathtaking panoramic views of the Himalayan giants.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Difficulty", value: "Moderate to Challenging" },
                { label: "Best Season", value: "Mar-May, Sep-Nov" },
                { label: "Starting Point", value: "Soti Khola" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-stone-800 bg-stone-900/50 p-6">
                  <p className="text-xs uppercase tracking-wider text-stone-500">{label}</p>
                  <p className="mt-2 text-lg text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="itinerary" className="mb-24">
          <h2 className="mb-8 font-serif text-3xl text-white">Day-by-Day Itinerary</h2>
          <div className="space-y-4">
            {itinerary.map((day) => (
              <div
                key={day.day}
                className="group rounded-2xl border border-stone-800 bg-stone-900/30 p-5 transition-all hover:border-amber-500/30 hover:bg-stone-900/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-sm font-medium text-amber-400">
                      {day.day}
                    </span>
                    <div>
                      <h3 className="font-medium text-white">{day.title}</h3>
                      <p className="mt-1 text-sm text-stone-400">{day.description}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-stone-800 px-3 py-1 text-xs text-stone-400">
                    {day.altitude}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cost" className="mb-24">
          <h2 className="mb-8 font-serif text-3xl text-white">Cost Details</h2>
          <div className="rounded-3xl border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-900/50 p-8">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl text-white">$1,450</span>
              <span className="text-stone-400">per person</span>
            </div>
            <p className="mt-2 text-sm text-stone-500">Based on group size of 2-4 people</p>
            
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-400">Included</h4>
                <ul className="space-y-3 text-sm text-stone-300">
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
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-stone-500">Not Included</h4>
                <ul className="space-y-3 text-sm text-stone-400">
                  {[
                    "International flights",
                    "Nepal visa fees",
                    "Travel insurance",
                    "Personal trekking gear",
                    "Tips for guides and porters",
                    "Extra meals and beverages",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-24">
          <h2 className="mb-8 font-serif text-3xl text-white">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-stone-800 bg-stone-900/30 px-6 data-[state=open]:bg-stone-900/60"
              >
                <AccordionTrigger className="py-5 text-left text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-stone-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/20 p-10 text-center">
          <h2 className="font-serif text-3xl text-white">Ready for the Adventure?</h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Embark on an unforgettable journey through the heart of the Himalayas. Limited permits available each season.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="rounded-full bg-amber-500 px-8 py-6 text-base font-medium text-stone-950 hover:bg-amber-400">
              Book Now
            </Button>
            <Button variant="outline" className="rounded-full border-stone-600 bg-transparent px-8 py-6 text-base text-stone-200 hover:bg-stone-800 hover:text-white">
              Customize for Yourself
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
