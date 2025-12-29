"use client";

import { useState, useEffect, useRef } from "react";
import { Award, Globe, Mountain } from "lucide-react";

const ComplexBentoGrid = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach(card => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#d0e6f0] via-[#a3cde3] to-[#7fb3d5]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="text-xs text-[#4a6c7d] md:text-sm font-semibold tracking-wider mb-2">
            ABOUT HIMKALA(SNOWART) ADVENTURE
          </div>
          <h2 className="mt-4 mb-8 text-4xl font-bold text-[#2e4f5c] md:text-5xl">
Trekking & Tour Packages Crafted with Expertise Since 2015          </h2>
          <p className="text-base text-[#3d6678] md:text-lg">
            From Nepal’s trekking trails to Bhutan and Tibet’s cultural landscapes, our certified guides and local expertise craft safe, meaningful Himalayan adventures.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Card 1 */}
          <div
            className="bento-card group relative isolate h-80 overflow-hidden rounded-2xl border border-[#7fb3d5] transition-all duration-500 hover:shadow-2xl hover:z-10 hidden md:block"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            ref={addToRefs}
          >
            <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#2e4f5c]/90 via-[#3d6678]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="card-shine" />
            <img
              src="/images/bento-grid-free-walking.jpg"
              alt="Free Walking Tour| Nepal Tour"
              className="absolute inset-0 -z-30 size-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="flex h-full flex-col justify-between p-8">
              <span className="flex size-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7fb3d5]/30">
                <Mountain
                  className="size-6 text-white transition-transform duration-300 group-hover:scale-125"
                  strokeWidth={1.5}
                />
              </span>
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="font-bold text-white text-xl">Free Walking Tour</h3>
                <p className="mt-2 text-white/90">
                  Original & Free Walking Tour of Kathmandu | Discover Nepal's Capital
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bento-card group relative isolate h-80 overflow-hidden rounded-2xl border border-[#7fb3d5] transition-all duration-500 hover:shadow-2xl hover:z-10 hidden md:block"
            onMouseEnter={() => setActiveCard(4)}
            onMouseLeave={() => setActiveCard(null)}
            ref={addToRefs}
          >
            <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#2e4f5c]/90 via-[#3d6678]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="card-shine" />
            <img
              src="/images/bento-grid-safety.jpg"
              alt="Safety First"
              className="absolute inset-0 -z-30 size-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="flex h-full flex-col justify-between p-8">
              <span className="flex size-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7fb3d5]/30">
                <Globe
                  className="size-6 text-white transition-transform duration-300 group-hover:scale-125"
                  strokeWidth={1.5}
                />
              </span>
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="font-bold text-white text-xl">Safety First</h3>
                <p className="mt-2 text-white/90">
                  Experience the thrill of Nepal trekking & Bhutan tours without the worry. Our safety-first rule, certified guides, and proven protocols protect you on every adventure.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="bento-card group relative isolate h-80 overflow-hidden rounded-2xl border border-[#7fb3d5] transition-all duration-500 hover:shadow-2xl hover:z-10 hidden md:block"
            onMouseEnter={() => setActiveCard(5)}
            onMouseLeave={() => setActiveCard(null)}
            ref={addToRefs}
          >
            <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#2e4f5c]/90 via-[#3d6678]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="card-shine" />
            <img
              src="/images/tripadvisor-awards.jpg"
              alt="Award Winning Tours"
              className="absolute inset-0 -z-30 size-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="flex h-full flex-col justify-between p-8">
              <span className="flex size-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7fb3d5]/30">
                <Award
                  className="size-6 text-white transition-transform duration-300 group-hover:scale-125"
                  strokeWidth={1.5}
                />
              </span>
              <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="font-bold text-white text-xl">Award Winning</h3>
                <p className="mt-2 text-white/90">
6-Time TripAdvisor Winner | Unforgettable Nepal, Bhutan & Tibet Trekking & Tours                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .bento-card {
          position: relative;
          overflow: hidden;
        }

        .bento-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.15),
            transparent 40%
          );
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .bento-card:hover::before {
          opacity: 1;
        }

        .card-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.2) 45%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.2) 55%,
            rgba(255, 255, 255, 0) 65%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          opacity: 0;
          z-index: -15;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .bento-card:hover .card-shine {
          opacity: 1;
          animation: shine 1.5s forwards;
        }

        @keyframes shine {
          0% {
            transform: rotate(30deg) translateY(-100%);
          }
          100% {
            transform: rotate(30deg) translateY(100%);
          }
        }
      `}</style>
    </section>
  );
};

export { ComplexBentoGrid };
