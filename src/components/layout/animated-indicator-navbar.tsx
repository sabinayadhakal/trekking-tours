"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// ---------------- CONFIG ----------------
const NAV_LOGO = { url: "/", src: "/images/himkala-logo.png", alt: "Logo" };
const NAV_ITEMS = [
    { name: "Home", link: "/" },

  { name: "Our Story", link: "/about-us" },
  {
    name: "Destinations",
    children: [
      { name: "Bhutan", link: "/destinations/bhutan" },
      { name: "Nepal", link: "/destinations/nepal" },
      { name: "Tibet", link: "/destinations/tibet" },
    ],
  },
  {
    name: "Nepal Adventures",
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
  { name: "Trail Tales", link: "/blog" },
];

// WhatsApp configuration
const WHATSAPP_NUMBER = "+9779841376470";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;

// Search configuration
const SEARCH_PLACEHOLDER = "Search adventures, destinations...";

// ---------------- ANIMATED HAMBURGER ----------------
const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative h-8 w-8 flex items-center justify-center">
    <Menu
      size={36}
      strokeWidth={3}
      className={`text-neutral-50 absolute transition-all duration-300 ${
        isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
      }`}
    />
    <X
      size={38}
      strokeWidth={3}
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

// Search Modal Component with Browser Compatibility
const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>(["Bhutan", "Trekking", "Kathmandu"]);
  const [popularSearches] = useState(["Everest Base Camp", "Annapurna Circuit", "Cultural Tours", "Jungle Safari"]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add to recent searches
      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
      }
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Helper function to get quick results
  const getQuickResults = () => {
    if (!searchQuery.trim()) return [];
    
    const results: { name: string; link: string; category: string }[] = [];
    const query = searchQuery.toLowerCase();
    
    NAV_ITEMS.forEach(item => {
      // Check if item has children
      if ('children' in item && item.children) {
        // Filter children that match the search query
        item.children.forEach(child => {
          if (child.name.toLowerCase().includes(query)) {
            results.push({
              name: child.name,
              link: child.link,
              category: item.name
            });
          }
        });
      } else {
        // Check main nav item
        if (item.name.toLowerCase().includes(query)) {
          results.push({
            name: item.name,
            link: item.link || '#',
            category: 'Navigation'
          });
        }
      }
    });
    
    return results.slice(0, 5);
  };

  const quickResults = getQuickResults();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-32 md:pt-40 px-4"
          onClick={onClose}
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.95)', // Fallback for backdrop
          }}
        >
          {/* Backdrop - Simple solid color for compatibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900"
            style={{
              opacity: 0.95, // Manual opacity for older browsers
            }}
          />
          
          {/* Search Modal - No backdrop-blur for compatibility */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Container */}
            <div className="relative bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
              {/* Decorative elements - Simple gradients for compatibility */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(249, 115, 22, 0.05) 70%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              />
              <div 
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, rgba(6, 182, 212, 0.05) 70%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Search Input */}
              <form onSubmit={handleSearch} className="relative px-4 py-4 md:px-6 md:py-5">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={SEARCH_PLACEHOLDER}
                    autoFocus
                    className="w-full px-12 py-3 md:py-4 text-lg md:text-xl bg-slate-900 rounded-xl shadow-inner border border-slate-600 focus:border-amber-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(245,158,11,0.1)] text-white placeholder-slate-400 font-medium transition-all duration-200"
                    style={{
                      // Fallback for focus ring
                      boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
                    }}
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5 md:w-6 md:h-6" />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                    aria-label="Search"
                    style={{
                      background: 'linear-gradient(to right, #f59e0b, #f97316)', // Fallback gradient
                    }}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                {/* Quick tips */}
                <div className="flex items-center gap-2 mt-3 text-slate-300 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Try: "Everest", "Trekking", "Culture"</span>
                </div>
              </form>

              {/* Search Suggestions */}
              {(searchQuery.trim() || recentSearches.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="px-4 pb-4 md:px-6 md:pb-6 border-t border-slate-700"
                >
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && !searchQuery.trim() && (
                    <div>
                      <h3 className="text-sm font-semibold text-slate-300 mb-2">
                        RECENT SEARCHES
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((term, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchQuery(term)}
                            className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm transition-all duration-200 hover:scale-105 border border-slate-600"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">
                      POPULAR ADVENTURES
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1.5 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 hover:from-emerald-800/40 hover:to-cyan-800/40 text-white rounded-lg text-sm transition-all duration-200 hover:scale-105 border border-emerald-800/30"
                          style={{
                            background: 'linear-gradient(to right, rgba(6, 78, 59, 0.3), rgba(21, 94, 117, 0.3))',
                          }}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Results */}
                  {searchQuery.trim() && quickResults.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-slate-300 mb-2">
                        QUICK RESULTS
                      </h3>
                      <div className="space-y-2">
                        {quickResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.link}
                            onClick={onClose}
                            className="flex items-center justify-between p-3 hover:bg-slate-700/50 rounded-lg group transition-all duration-200 border border-slate-700 hover:border-amber-500/30"
                          >
                            <div>
                              <div className="font-medium text-white">{result.name}</div>
                              <div className="text-xs text-slate-400">{result.category}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 whitespace-nowrap"
            >
              <span>Press ESC to close</span>
              <span className="text-xs">•</span>
              <span>or click anywhere</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ---------------- MOBILE NAV ----------------
const MobileNav = ({
  activeItem,
  setActiveItem,
  onSearchOpen,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
  onSearchOpen: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let rafId: number;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const navbar = navbarRef.current;
      
      if (navbar) {
        if (currentScrollY > 10) {
          const scrollProgress = Math.min((currentScrollY - 10) / 140, 1);
          const easeOutQuart = 1 - Math.pow(1 - scrollProgress, 4);
          const translateY = -65 * easeOutQuart;
          
          navbar.style.transform = `translateY(${translateY}%)`;
          setIsScrolled(true);
        } else {
          navbar.style.transform = `translateY(0%)`;
          setIsScrolled(false);
        }
        
        navbar.style.willChange = 'transform';
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="block lg:hidden">
      {/* Navbar Header - Fixed with smooth transitions */}
      <div
        ref={navbarRef}
        className="flex flex-col items-center z-50 fixed top-0 left-0 right-0 transition-transform duration-[400ms] ease-out"
        style={{ 
          backgroundColor: "rgba(70, 130, 180, 0.15)",
          transform: 'translateY(0%)',
          backfaceVisibility: 'hidden',
          perspective: 1000,
        }}
      >
        {/* Logo - Enhanced with #C5E0ED shadow */}
        <div className="relative">
          <Link href={NAV_LOGO.url}>
            <motion.img
              src={NAV_LOGO.src}
              alt={NAV_LOGO.alt}
              className="object-contain h-35 transition-all duration-300 relative z-10"
              style={{
                opacity: 1,
                filter: isScrolled 
                  ? 'drop-shadow(0 0 15px rgba(197, 224, 237, 0.7)) brightness(1.1)' 
                  : 'drop-shadow(0 0 25px rgba(197, 224, 237, 0.9)) brightness(1.2)',
              }}
              whileHover={{ 
                scale: 1.1,
                filter: 'drop-shadow(0 0 35px rgba(197, 224, 237, 1)) brightness(1.3)'
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                filter: { duration: 0.3 }
              }}
            />
            
            {/* Glow effect behind logo with #C5E0ED */}
            {!isScrolled && (
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(197, 224, 237, 0.4) 0%, transparent 70%)',
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            
            {/* Additional outer glow */}
            <motion.div
              className="absolute -inset-4 rounded-full blur-2xl -z-10"
              style={{
                background: 'radial-gradient(circle at center, rgba(197, 224, 237, 0.2) 0%, transparent 80%)',
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </Link>
        </div>

        {/* Hamburger + Menu Title + Search Button */}
        <div className="flex justify-between items-center px-4 py-2 w-full bg-slate-900 -mt-11">
          <span className="text-neutral-50 font-semibold text-3xl">Menu</span>
          <div className="flex items-center gap-4">
            {/* Search Button - Compatible Design */}
            <motion.button
              onClick={onSearchOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500 shadow-lg transition-all duration-200 group"
              aria-label="Search"
              style={{
                background: '#1e293b',
              }}
            >
              <Search className="w-6 h-6 text-amber-400" />
            </motion.button>
            
            <button onClick={() => setIsOpen(true)}>
              <AnimatedHamburger isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="h-32" />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-slate-900 z-50 flex flex-col max-h-[80vh] overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="text-neutral-50">
                <X size={28} />
              </button>
            </div>

            {/* Nav Items */}
            <ul className="flex flex-col gap-3 p-4 text-neutral-50 text-lg font-semibold">
              {/* Search Button in Menu */}
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => onSearchOpen(), 100);
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-900/40 to-orange-900/40 hover:from-amber-800/50 hover:to-orange-800/50 text-amber-300 px-4 py-3 rounded-xl transition-all duration-200 border border-amber-800/40 hover:border-amber-700/60 group"
                  style={{
                    background: 'linear-gradient(to right, rgba(120, 53, 15, 0.4), rgba(124, 45, 18, 0.4))',
                  }}
                >
                  <Search className="w-5 h-5" />
                  <span>Explore Adventures</span>
                  <Sparkles className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>

              {NAV_ITEMS.map((item) =>
                "children" in item && item.children ? (
                  <li key={item.name}>
                    <button
                      onClick={() =>
                        setActiveItem(activeItem === item.name ? "" : item.name)
                      }
                      className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-colors border ${
                        activeItem === item.name
                          ? "bg-amber-900/30 text-amber-300 border-amber-700/40"
                          : "bg-slate-800 hover:bg-slate-700 border-slate-700"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          activeItem === item.name ? "rotate-180 text-amber-300" : "rotate-0"
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
                              className="block py-3 px-4 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 text-white transition-all duration-200 border border-amber-800/30 hover:border-amber-700/50"
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
                      className="w-full block bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg text-left transition-colors border border-slate-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}

              {/* CTA Buttons */}
              <li className="mt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block"
                >
                  <Button className="w-full h-14 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-200 cursor-pointer border border-amber-500/50">
                    Start Your Journey
                  </Button>
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full h-14 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-200 cursor-pointer border border-emerald-500/50"
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        {/* Floating background shapes with #C5E0ED accents */}
        <div className="hidden lg:block absolute inset-0 -z-10 overflow-hidden bg-slate-900">
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full" style={{ background: 'rgba(197, 224, 237, 0.2)' }} />
          <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full" style={{ background: 'rgba(197, 224, 237, 0.3)' }} />
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full" style={{ background: 'rgba(197, 224, 237, 0.4)' }} />
          
          {/* Animated floating particles */}
          <motion.div
            className="absolute top-1/5 right-1/5 w-2 h-2 rounded-full"
            style={{ background: 'rgba(197, 224, 237, 0.5)' }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-3 h-3 rounded-full"
            style={{ background: 'rgba(197, 224, 237, 0.4)' }}
            animate={{
              y: [0, 15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="hidden lg:flex justify-between items-center px-8 py-4 shadow-md h-32">
          {/* Logo + slogan - Enhanced with #C5E0ED */}
          <div className="flex items-center gap-6 pl-4 relative group">
            <div className="relative">
              <Link href="/">
                <motion.img
                  src={NAV_LOGO.src}
                  alt={NAV_LOGO.alt}
                  className="w-auto cursor-pointer rounded-lg relative z-10"
                  style={{ height: "180px" }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: 'drop-shadow(0 0 35px rgba(197, 224, 237, 0.9)) brightness(1.2)'
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    filter: { duration: 0.3 }
                  }}
                />
                
                {/* Multi-layered glow effect */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-lg"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(197, 224, 237, 0.3) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Outer glow layer */}
                <motion.div
                  className="absolute -inset-6 -z-20 rounded-lg blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(197, 224, 237, 0.15) 0%, transparent 80%)',
                  }}
                  animate={{
                    opacity: [0.1, 0.25, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </Link>
            </div>
            
            <motion.div className="text-white font-mono text-sm md:text-base overflow-hidden whitespace-nowrap">
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
          <nav className="flex gap-6 items-center relative">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem("")}
                >
                  <motion.span
                    className={`cursor-pointer font-semibold text-lg transition-colors duration-200 ${
                      activeItem === item.name ? "text-amber-400" : "text-white hover:text-amber-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
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
                        className="absolute left-0 mt-2 w-64 bg-slate-800 shadow-2xl rounded-lg z-50 border border-slate-700"
                      >
                        {item.children.map((child, index) => (
                          <motion.li
                            key={child.name}
                            className="px-4 py-3 hover:bg-slate-700 rounded-md transition-colors border-b border-slate-700/50 last:border-0"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * index }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Link
                              href={child.link}
                              className="text-white font-medium text-base block cursor-pointer hover:text-amber-300 transition-colors"
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.link || "#"}
                    className={`font-semibold text-lg transition-colors duration-200 ${
                      activeItem === item.name ? "text-amber-400" : "text-white hover:text-amber-400"
                    } cursor-pointer`}
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem("")}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            )}

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Search Button - Compatible Design */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg shadow-lg transition-all duration-200 cursor-pointer border border-slate-700 hover:border-amber-500 group"
                aria-label="Search"
                style={{
                  background: '#1e293b',
                }}
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span className="font-medium text-sm">Search</span>
              </motion.button>

              {/* WhatsApp Button */}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-full shadow-lg transition-all duration-200 cursor-pointer border border-emerald-500/50"
                aria-label="Contact via WhatsApp"
                style={{
                  background: 'linear-gradient(135deg, #059669, #047857)',
                }}
              >
                <WhatsAppIcon className="w-7 h-7" />
              </motion.a>

              {/* Contact Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-base px-5 py-3 rounded-lg shadow-lg transition-all duration-200 cursor-pointer border border-amber-500/50">
                    Plan your Trip
                  </Button>
                </Link>
              </motion.div>
            </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav 
            activeItem={activeItem} 
            setActiveItem={setActiveItem} 
            onSearchOpen={() => setIsSearchOpen(true)} 
          />
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export { AnimatedIndicatorNavbar };