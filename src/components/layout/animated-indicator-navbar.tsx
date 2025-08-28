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
  { name: "Blogs", link: "/blog" },
];

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

// ---------------- MOBILE NAV ----------------
const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHideHeader(true);
      else setHideHeader(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="block lg:hidden">
      <motion.div
        className="flex flex-col bg-[#1F2937] z-50"
        animate={{ y: hideHeader ? -75 : 0 }}
        transition={{ type: "tween", duration: 0.35 }}
      >
        <div className="flex flex-col items-center py-1">
          <Link href={NAV_LOGO.url}>
            <motion.img
              src={NAV_LOGO.src}
              alt={NAV_LOGO.alt}
              className="object-contain h-14"
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
      </motion.div>

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
                      className="w-full text-left bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg flex justify-between items-center"
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
                      <ul className="flex flex-col gap-2 pl-6 mt-2">
                        {item.children.map((child) => (
                          <li key={child.name} className="list-disc list-inside">
                            <Link
                              href={child.link}
                              onClick={() => {
                                setActiveItem("");
                                setIsOpen(false);
                              }}
                              className="hover:text-accent-300 transition-colors block"
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
                      className="w-full block bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-left"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}

              <li className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block"
                >
                  <Button className="w-full bg-orange-500 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
                    Contact Us & Book Now
                  </Button>
                </Link>
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
              className="w-auto cursor-pointer"
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
    <nav className="flex gap-12 items-center relative">
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
                activeItem === item.name ? "text-yellow-400" : "text-white"
              }`}
              whileHover={{ scale: 1.05, color: "#FBBF24" }}
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
                      className="px-4 py-3 hover:bg-gray-700 rounded-md"
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
            whileHover={{ scale: 1.05, color: "#FBBF24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item.link || "#"}
              className={`font-semibold text-xl ${
                activeItem === item.name ? "text-yellow-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          </motion.div>
        )
      )}

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href="/contact">
          <Button className="bg-orange-500 text-white font-bold text-lg px-6 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            Contact Us & Book Now
          </Button>
        </Link>
      </motion.div>
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
