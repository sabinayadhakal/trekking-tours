"use client";

import { Compass } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok, FaPinterest, FaEnvelope, FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1580548259485-0c6f1cceec33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/1K5sDKJ5po/?mibextid=wwXIfr", icon: FaFacebook },
  { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram },
  { name: "Twitter", href: "https://x.com/himkalanepal?s=21&t=2wPjjwhkMD0rUThQZq-5jQ", icon: FaTwitter },
  { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube },
  { name: "LinkedIn", href: "https://linkedin.com/yourpage", icon: FaLinkedin },
  { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok },
  { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest }
];

export const NewsletterFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
   <footer
  ref={containerRef}
  className="relative w-full bg-slate-900 overflow-hidden"
>
      {/* Flowing images overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className={`flex h-56 sm:h-64 ${isVisible ? "animate-flow" : ""}`}>
          {["first","second"].map((set) => (
            <div key={set} className="flex h-full animate-scrollHorizontally">
              {images.map((img, idx) => (
                <div
                  key={`${set}-${idx}`}
                  className="h-56 sm:h-64 w-56 sm:w-64 flex-shrink-0 mx-2 sm:mx-4 rounded-xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Desktop content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-between items-start gap-6 p-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start">
          <div className={`flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-medium backdrop-blur-sm bg-slate-900/30 rounded-full px-4 py-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <Compass className="h-6 sm:h-8 w-6 sm:w-8 text-cyan-300" />
            <span className="text-cyan-300 font-semibold">Ready for Your Adventure?</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold text-white max-w-full sm:max-w-xl leading-snug sm:leading-tight transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            Let's Craft Your <span className="text-cyan-300">Perfect Journey</span>
          </h2>

          <p className={`text-sm sm:text-lg text-white/90 max-w-full sm:max-w-md leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            Get your free consultation and custom itinerary planning with us.
          </p>

  {/* Affiliations */}
  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
    <Image src="/images/ntb-logo.png" width={40} height={20} alt="NTB Logo" />
    <Image src="/images/nma-logo.png" width={40} height={20} alt="NMA Logo" />
    <Image src="/images/sustainable-tourism-logo.png" width={40} height={20} alt="Sustainable Tourism Logo" />
    <Image src="/images/taan-logo.png" width={40} height={20} alt="TAAN Logo" />
  </div>

  {/* Copyright */}
  <div className="text-white/70 text-sm mt-2 md:mt-0 text-center text-2sx md:text-right">
  </div>


  
</div>


        {/* Right Column */}
        <div className="flex flex-col gap-4 md:w-1/2 mt-24 md:mt-40">
          {/* Quick Links & Contact */}
          <div className="flex flex-col sm:flex-row -mt-40 sm:mt-4 justify-between gap-4 text-white font-medium">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl text-cyan-300">Quick Links</h3>
              <a href="/services/package-sightseeing-tours" className="hover:text-cyan-300 text-sm sm:text-base">Tours</a>
              <a href="/services/trekking" className="hover:text-cyan-300 text-sm sm:text-base">Treks</a>
              <a href="/contact" className="hover:text-cyan-300 text-sm sm:text-base">Contact</a>
              <a href="/about-us" className="hover:text-cyan-300 text-sm sm:text-base">About Us</a>
              <a href="/blog" className="hover:text-cyan-300 text-sm sm:text-base">Stories</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl text-cyan-300">Contact</h3>
              <a href="tel:+9779841376470" className="flex items-center gap-2 hover:text-cyan-300 text-sm sm:text-base">
                <FaPhone /> +977 9841376470
              </a>
              <a href="mailto:himkalaadventure@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 text-sm sm:text-base">
                <FaEnvelope /> himkalaadventure@gmail.com
              </a>
            </div>
          </div>

         {/* Social Links */}
<div className="flex gap-3 mt-4 flex-wrap justify-center md:justify-start items-center">
  {socialLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-110"
    >
      {link.icon && typeof link.icon === "function" ? <link.icon size={20} /> : link.icon}
    </a>
  ))}

  <a
    href="https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-1 transform transition-transform duration-500 hover:scale-105 floatLogo"
  >
    <Image src="/images/TripAdvisor-Logo.png" width={100} height={40} alt="TripAdvisor Logo" />
  </a>

  {/* Mobile-only copyright */}
  <span className="block text-white text-3xs mt-2 md:hidden text-center">
    © 2015 - 2025 All rights reserved. Himkala Adventure.
  </span>
</div>

        </div>
      </div>

      

      {/* Animations */}
      <style jsx>{`
        @keyframes scrollHorizontally { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        @keyframes floatSlow { 0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-30px) translateX(20px);} }
        @keyframes floatMedium { 0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-20px) translateX(-15px);} }
        @keyframes floatFast { 0%,100%{transform:translateY(0) translateX(0);}50%{transform:translateY(-15px) translateX(10px);} }
        @keyframes floatLogo { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }

        .animate-scrollHorizontally { animation: scrollHorizontally 60s linear infinite; }
        .animate-floatSlow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-floatMedium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-floatFast { animation: floatFast 4s ease-in-out infinite; }
        .floatLogo { animation: floatLogo 3s ease-in-out infinite; }
        .animate-flow:hover .animate-scrollHorizontally { animation-play-state: paused; }
      `}</style>

      {/* Credits */}
      <div className="relative z-10 mb-2 flex justify-center px-4 text-white text-sm">
        Website made by{' '}
        <a href="https://www.linkedin.com/in/sabinaya-dhakal-a3a433321/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline ml-1">
          Sabinaya Dhakal
        </a>
      </div>
      
    </footer>
  );
};
