"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// ---------------- CONFIG ----------------
const NAV_LOGO = { url: "/", src: "/images/himkala-logo.png", alt: "Logo" };
const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  {
    name: "Destinations",
    children: [
      { name: "Bhutan", link: "/destinations/bhutan" },
      { name: "Nepal", link: "/destinations/nepal" },
      { name: "Tibet", link: "/destinations/tibet" },
    ],
  },
  {
    name: "Our Services",
    children: [
      { name: "Free Walking Tour Kathmandu", link: "/services/Free-Walking-Tour" },
      { name: "Trekking", link: "/services/trekking" },
      { name: "Day Hiking", link: "/services/day-hiking" },
      { name: "Day Sightseeing", link: "/services/day-sightseeing" },
      { name: "Package Sightseeing Tours", link: "/services/package-sightseeing-tours" },
      { name: "Jungle Safari", link: "/services/jungle-safari" },
      { name: "Mountain Flight", link: "/services/mountain-flight" },
      { name: "Helicopter Sightseeing", link: "/services/helicopter-sightseeing" },
      { name: "Peak Climbing", link: "/services/peak-climbing" },
    ],
  },
  { name: "Stories", link: "/blog" },
];

// WhatsApp configuration
const WHATSAPP_NUMBER = "+9779841376470";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;

// ---------------- ANIMATED HAMBURGER ----------------
const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative h-6 w-6 flex items-center justify-center">
    <Menu
      size={30}
      strokeWidth={2.5}
      className={`text-neutral-50 absolute transition-all duration-300 ${
        isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
      }`}
    />
    <X
      size={32}
      strokeWidth={2.5}
      className={`text-neutral-50 absolute transition-all duration-300 ${
        isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
      }`}
    />
  </div>
);

// WhatsApp Icon SVG
const WhatsAppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
  </svg>
);

// ---------------- MOBILE NAV ----------------
const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <div className="flex flex-col bg-[#1F2937] z-50">
        <div className="flex flex-col items-center py-1">
          <Link href={NAV_LOGO.url}>
            <motion.img
              src={NAV_LOGO.src}
              alt={NAV_LOGO.alt}
              className="object-contain h-14 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          <motion.span
            className="text-white text-sm font-mono -mt-1 text-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            with each trip comes new optimism...
          </motion.span>
        </div>

        <div className="flex justify-between items-center px-4 py-2 bg-[#111827]">
          <span className="text-neutral-50 font-semibold text-lg">Menu</span>
          <button onClick={() => setIsOpen(true)}>
            <AnimatedHamburger isOpen={isOpen} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1F2937] z-50 flex flex-col max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="text-neutral-50">
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 p-4 text-neutral-50 text-lg font-semibold">
              {NAV_ITEMS.map((item) =>
                "children" in item && item.children ? (
                  <li key={item.name}>
                    <button
                      onClick={() =>
                        setActiveItem(activeItem === item.name ? "" : item.name)
                      }
                      className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-colors ${
                        activeItem === item.name 
                          ? "bg-blue-600 text-white" 
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          activeItem === item.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {activeItem === item.name && (
                      <ul className="flex flex-col gap-2 mt-2 pl-0">
                        {item.children.map((child) => (
                          <li key={child.name} className="mb-1 last:mb-0">
                            <Link
                              href={child.link}
                              onClick={() => {
                                setActiveItem("");
                                setIsOpen(false);
                              }}
                              className="block py-3 px-4 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 text-white transition-colors"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link
                      href={item.link || "#"}
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsOpen(false);
                      }}
                      className="w-full block bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg text-left transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}

              <li className="mt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
                    Plan your Trip
                  </Button>
                </Link>
                
                {/* WhatsApp Button for Mobile */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
                >
                  <WhatsAppIcon className="w-7 h-7" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ---------------- DESKTOP NAV + HEADER ----------------
const AnimatedIndicatorNavbar = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Floating background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-slate-600/20 animate-floatSlow" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-slate-400/30 animate-floatMedium" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-white/10 animate-floatFast" />
      </div>

      <div className="hidden lg:flex justify-between items-center px-12 py-4 shadow-md h-32">
        {/* Logo + slogan */}
        <div className="flex items-center gap-6 pl-8">
          <Link href="/">
            <motion.img
              src={NAV_LOGO.src}
              alt={NAV_LOGO.alt}
              className="w-auto cursor-pointer drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-lg"
              style={{ height: "200px" }}
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          <motion.div className="text-white font-mono text-shadow-2xs overflow-hidden whitespace-nowrap">
            {"with each trip comes a new optimism...".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 2,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Nav Menu */}
        <nav className="flex gap-8 items-center relative">
          {NAV_ITEMS.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem("")}
              >
                <motion.span
                  className={`cursor-pointer font-semibold text-xl ${
                    activeItem === item.name ? "text-blue-400" : "text-white"
                  }`}
                  whileHover={{ scale: 1.05, color: "#60A5FA" }}
                >
                  {item.name}
                </motion.span>

                <AnimatePresence>
                  {activeItem === item.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-[#1F2937] shadow-lg rounded-md z-50"
                    >
                      {item.children.map((child, index) => (
                        <motion.li
                          key={child.name}
                          className="px-4 py-3 hover:bg-blue-800/30 rounded-md transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * index }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <Link
                            href={child.link}
                            className="text-white font-medium text-lg block"
                          >
                            {child.name}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.link || "#"}
                  className={`font-semibold text-xl ${
                    activeItem === item.name ? "text-blue-400" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            )
          )}

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Button */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300"
              aria-label="Contact via WhatsApp"
            >
              <WhatsAppIcon className="w-8 h-8" />
            </motion.a>

            {/* Contact Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-6 py-4 rounded-lg shadow-lg transition-all duration-300">
Plan your Trip                </Button>
              </Link>
            </motion.div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>

      {/* Floating animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(-15px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        .animate-floatSlow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-floatMedium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-floatFast { animation: floatFast 4s ease-in-out infinite; }
      `}</style>
    </header>
  );
};

export { AnimatedIndicatorNavbar };