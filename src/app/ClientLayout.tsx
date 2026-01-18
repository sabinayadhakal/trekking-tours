"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mountain, 
  MapPin, 
  Phone,
  Mail,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
  Heart,
  ChevronRight,
  Compass,
  Search,
  Send,
  Globe,
  PhoneCall,
  User,
  BookOpen,
  ChevronDown,
  Clock,
  Shield,
  Award,
  Users,
  Star,
  ExternalLink, 
  ArrowRight,
  Plane,
  Building,
  MountainIcon,
  Trees,
  Bird,
  Map,
  Home,
  Flag,
  Cloud,
  Sunrise
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import React Icons
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin, 
  FaTiktok, 
  FaPinterest 
} from "react-icons/fa";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49" />
  </svg>
);

// Separate component for Terms Dialog
const TermsDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0a1f30] border-white/20 text-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-[#C5E0ED] mb-4">Terms and Conditions</DialogTitle>
        <div className="mt-4 space-y-4 text-sm text-white/80">
          <p><strong className="text-[#C5E0ED]">Down Payment:</strong></p>
          <p>To secure your place, a 20% down payment is required in advance as per company policy. For bookings more than ten weeks prior to arrival date, a 15% deposit applies. Please contact us if this causes any issues as we try to be flexible.</p>
          <p><strong className="text-[#C5E0ED]">How to pay your deposit:</strong></p>
          <p>You can pay via bank transfer in USD, EUR, or GBP to the following account:</p>
          <p className="bg-white/5 p-4 rounded-lg">
            FOR CREDIT TO:<br />
            Nepal Investment Mega Bank Nepal Ltd.<br />
            Kathmandu, Nepal<br />
            SWIFT: NIBLNPKT
          </p>
          <p className="bg-white/5 p-4 rounded-lg">
            BENEFICIARY FINAL CREDIT TO:<br />
            A/C Holder's Name: Himkala Adventure Pvt. Ltd.<br />
            A/C No: 13201100002097<br />
            Nepal Investment Mega Bank Nepal Ltd<br />
            Thamel, Kathmandu
          </p>
          <p><strong className="text-[#C5E0ED]">Payment of the balance:</strong></p>
          <p>The remaining balance can be paid after your arrival in Nepal. Credit card payments incur a 4% handling charge on the outstanding balance. Bank transfers have no handling fee.</p>
          <p><strong className="text-[#C5E0ED]">Last minute booking:</strong></p>
          <p>We accept last-minute bookings for Nepal trips only, not for India, Bhutan, or Tibet trips.</p>
          <p><strong className="text-[#C5E0ED]">Refund:</strong></p>
          <p>The 15% deposit is non-refundable for any cancellation reason. If you've paid in full, you'll receive a refund minus cancellation charges. Written notification is required for cancellations.</p>
          <p><strong className="text-[#C5E0ED]">Supplement charge:</strong></p>
          <p>Rooms/tents are provided on a twin-sharing basis. Single room supplement charges apply for clients without a sharing partner.</p>
          <p><strong className="text-[#C5E0ED]">Incomplete tour:</strong></p>
          <p>No refunds are provided for unused portions of the itinerary if clients drop out.</p>
          <p><strong className="text-[#C5E0ED]">Unforeseen circumstances:</strong></p>
          <p>If Himkala Adventure cancels your trip due to war, natural disasters, conflict, or unfavorable climate, we'll offer an alternative trip or full refund. Other expenses incurred from the booking are your responsibility.</p>
          <p><strong className="text-[#C5E0ED]">Clients' responsibility:</strong></p>
          <p>Our tour/trek guides have full authority during tours. Any unlawful acts may result in removal from the tour.</p>
          <p><strong className="text-[#C5E0ED]">Impact on your journey:</strong></p>
          <p>We strive to provide the best service but note that facilities in Himalayan countries may differ from Western standards.</p>
          <p><strong className="text-[#C5E0ED]">Travel insurance:</strong></p>
          <p>Comprehensive travel insurance covering medical emergencies, natural calamities, helicopter evacuation, personal accidents, trip cancellation, etc., is mandatory. Ensure your policy covers your planned activities and maximum altitudes.</p>
          <p><strong className="text-[#C5E0ED]">Tour amendment:</strong></p>
          <p>Itinerary changes require prior notice, though adjustments may be necessary en route due to circumstances like bad weather.</p>
          <p><strong className="text-[#C5E0ED]">Paper and documents:</strong></p>
          <p>All necessary documents must be provided in time for visa and permit processing. We're not responsible for delays due to missing paperwork.</p>
          <p><strong className="text-[#C5E0ED]">Flight delay/cancellation:</strong></p>
          <p>Flight delays or cancellations may occur in Himalayan regions due to weather, requiring itinerary modifications.</p>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

// Separate component for Privacy Dialog
const PrivacyDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0a1f30] border-white/20 text-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-[#C5E0ED] mb-4">Privacy Policy</DialogTitle>
        <div className="mt-4 space-y-4 text-sm text-white/80">
          <p>Himkala Adventure Pvt. Ltd. takes the responsibility of your data seriously and respects your privacy concerning any information we may gather from you across this website.</p>
          <p>Our website uses links to other websites (e.g. Facebook, Instagram, Twitter etc.) to which this data protection declaration does not apply. These sites might collect Device Information. Please be aware that we do not control the content and practices of these sites, and cannot take responsibility for their privacy policies.</p>
          <p>We only collect personal information that we need to provide a service to you (e.g. your name, email address and phone number) when you send us an email through inquiry, booking, or contact form. We collect it by lawful means, with your knowledge and agreement.</p>
          <p>We only keep the gathered information as long as required to provide you with the service you requested. The data we store will be protected with lawful means to prevent loss and theft, as well as unauthorized access, leak, copying, usage, or any adjustment. We don't share any personal information publicly or with third parties unless required by lawful request.</p>
          <p>You have the right to ask that your personal information be corrected, updated, or deleted at any time; please contact us through the contact information available on the website. If you have any queries about how we handle your personal information, please do not hesitate to contact us through email.</p>
          <p>We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

// Social links array
const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/HimkalaAdventureNepal?ref=embed_page", icon: FaFacebook, color: "hover:text-[#1877F2]" },
  { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram, color: "hover:text-[#E4405F]" },
  { name: "Twitter", href: "https://x.com/himkalanepal?s=21&t=2wPjjwhkMD0rUThQZq-5jQ", icon: FaTwitter, color: "hover:text-[#1DA1F2]" },
  { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube, color: "hover:text-[#FF0000]" },
  { name: "LinkedIn", href: "https://linkedin.com/yourpage", icon: FaLinkedin, color: "hover:text-[#0077B5]" },
  { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok, color: "hover:text-[#000000]" },
  { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest, color: "hover:text-[#E60023]" }
];

// Affiliation links array
const affiliationLinks = [
  { 
    name: "Nepal Tourism Board", 
    href: "https://ntb.gov.np/", 
    logo: "/images/ntb-logo.png",
    width: 40,
    height: 20
  },
  { 
    name: "Nepal Mountaineering Association", 
    href: "https://www.nepalmountaineering.org/", 
    logo: "/images/nma-logo.png",
    width: 40,
    height: 20
  },
  { 
    name: "Trekking Agencies' Association of Nepal", 
    href: "https://www.taan.org.np/", 
    logo: "/images/taan-logo.png",
    width: 40,
    height: 20
  }
];

// Destinations data
const destinations = [
  {
    name: "Nepal",
    href: "/destinations/nepal",
    description: "Land of Himalayas & Everest",
    icon: Mountain,
    color: "from-[#FF6B6B] to-[#EE5A24]",
    popularTreks: ["Everest Base Camp", "Annapurna Circuit", "Langtang Valley"]
  },
  {
    name: "Bhutan",
    href: "/destinations/bhutan",
    description: "Land of Thunder Dragon",
    icon: Flag,
    color: "from-[#FF9F43] to-[#F36818]",
    popularTreks: ["Druk Path Trek", "Jhomolhari Base Camp"]
  },
  {
    name: "Tibet",
    href: "/destinations/tibet",
    description: "Roof of the World",
    icon: Cloud,
    color: "from-[#54A0FF] to-[#2E86DE]",
    popularTreks: ["Everest North Face", "Mount Kailash"]
  }
];

// Services data
const services = [
  {
    name: "Free Walking Tour",
    href: "/services/free-walking-tour",
    icon: Heart,
    description: "Explore Kathmandu's heritage",
    color: "from-[#48DBFB] to-[#18A0FB]"
  },
  {
    name: "Trekking",
    href: "/services/trekking",
    icon: MountainIcon,
    description: "Himalayan adventures",
    color: "from-[#FF9F43] to-[#F36818]"
  },
  {
    name: "City Tours",
    href: "/services/city-tours",
    icon: Building,
    description: "Cultural experiences",
    color: "from-[#10AC84] to-[#0D8C6A]"
  },
  {
    name: "Mountain Flight",
    href: "/services/mountain-flight",
    icon: Plane,
    description: "Aerial Everest views",
    color: "from-[#54A0FF] to-[#2E86DE]"
  },
  {
    name: "Chitwan Jungle Safari",
    href: "/services/jungle-safari",
    icon: Trees,
    description: "Wildlife adventure",
    color: "from-[#00D2D3] to-[#00A8A8]"
  },
  {
    name: "Helicopter Sightseeing",
    href: "/services/helicopter-sightseeing",
    icon: Sunrise,
    description: "Luxury aerial tours",
    color: "from-[#FF6B6B] to-[#EE5A24]"
  },
  {
    name: "Peak Climbing",
    href: "/services/peak-climbing",
    icon: Mountain,
    description: "Summit expeditions",
    color: "from-[#5F27CD] to-[#341F97]"
  }
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [termsOpen, setTermsOpen] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const [destinationsOpen, setDestinationsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const searchRef = React.useRef<HTMLDivElement>(null);
  const destinationsRef = React.useRef<HTMLDivElement>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (destinationsOpen && destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) {
        setDestinationsOpen(false);
      }
      if (servicesOpen && servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, destinationsOpen, servicesOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDestinationsOpen(false);
    setServicesOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setIsSearchOpen(false);
    }
  };

  // WhatsApp number
  const whatsappNumber = "+9779841376470";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hello%20Himkala%20Adventure!%20I'm%20interested%20in%20your%20services.`;

  return (
    <>
      {/* Navigation - Mobile Optimized with Blue Translucent Theme */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#153653]/95 shadow-lg shadow-black/20' 
          : 'bg-[#153653]/85'
      } border-b border-white/20 backdrop-blur-md`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between relative">
          {/* Logo with Custom Image - EXTRA LARGE */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-10" onClick={closeMenu}>
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full">
                <Image
                  src="/images/himkala-logo-2.png"
                  alt="Himkala Adventure Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, 80px"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block backdrop-blur-sm bg-white/5 rounded-lg px-3 py-2 border border-white/10">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white block leading-tight drop-shadow-lg">Himkala Adventure</span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#C5E0ED] font-medium leading-none drop-shadow-lg">SnowArt Pvt. Ltd.</span>
            </div>
            <div className="sm:hidden backdrop-blur-sm bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
              <span className="text-lg font-bold tracking-tight text-white drop-shadow-lg">Himkala Adventure</span>
            </div>
          </Link>

          {/* Desktop Navigation with Glass Effect */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 relative z-10">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-white/80 hover:text-[#C5E0ED] hover:bg-white/5 p-2 rounded-lg transition-colors backdrop-blur-sm border border-white/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Destinations Dropdown */}
            <div className="relative" ref={destinationsRef}>
              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className="text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm flex items-center gap-1"
              >
                Destinations
                <ChevronDown className={`w-4 h-4 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {destinationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[500px] bg-[#153653]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#C5E0ED]" />
                        Explore Our Destinations
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {destinations.map((dest) => (
                          <Link
                            key={dest.name}
                            href={dest.href}
                            onClick={() => setDestinationsOpen(false)}
                            className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dest.color} flex items-center justify-center mb-3`}>
                              <dest.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-bold text-white group-hover:text-[#C5E0ED] transition-colors mb-1">
                              {dest.name}
                            </h4>
                            <p className="text-white/60 text-sm mb-2">{dest.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {dest.popularTreks.map((trek) => (
                                <span key={trek} className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/70">
                                  {trek}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-1 mt-3 text-[#C5E0ED] text-sm font-medium">
                              <span>Explore</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <Link
                          href="/destinations"
                          onClick={() => setDestinationsOpen(false)}
                          className="w-full py-3 bg-gradient-to-r from-[#C5E0ED]/20 to-[#9dcae0]/20 hover:from-[#C5E0ED]/30 hover:to-[#9dcae0]/30 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                        >
                          <Map className="w-4 h-4" />
                          View All Destinations
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Our Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm flex items-center gap-1"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[700px] bg-[#153653]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Compass className="w-5 h-5 text-[#C5E0ED]" />
                        Adventure Services & Activities
                      </h3>
                      <div className="grid grid-cols-4 gap-4">
                        {services.slice(0, 4).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-white group-hover:text-[#C5E0ED] transition-colors text-sm mb-1">
                              {service.name}
                            </h4>
                            <p className="text-white/60 text-xs">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {services.slice(4).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all hover:scale-[1.02] active:scale-95"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-bold text-white group-hover:text-[#C5E0ED] transition-colors text-sm mb-1">
                              {service.name}
                            </h4>
                            <p className="text-white/60 text-xs">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="w-full py-3 bg-gradient-to-r from-[#C5E0ED]/20 to-[#9dcae0]/20 hover:from-[#C5E0ED]/30 hover:to-[#9dcae0]/30 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                        >
                          <Compass className="w-4 h-4" />
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us */}
            <Link 
              href="/about-us"
              className="text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm"
              onClick={closeMenu}
            >
              About Us
            </Link>

            {/* Blogs */}
            <Link 
              href="/blog"
              className="text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm"
              onClick={closeMenu}
            >
              Blogs
            </Link>
            
            {/* WhatsApp Button on Desktop */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2ef575] hover:to-[#1a9f8f] text-white font-bold rounded-full px-4 lg:px-6 py-2 shadow-lg shadow-[#25D366]/30 backdrop-blur-sm transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>

            <Button 
              asChild
              className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#153653] font-bold rounded-full px-5 lg:px-6 shadow-lg shadow-[#C5E0ED]/20 active:scale-95 transition-transform backdrop-blur-sm"
            >
              <Link href="/contact">
                Plan Your Trip
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Icons - Only Search and Menu */}
          <div className="md:hidden flex items-center gap-2 relative z-10">
            {/* Search Button Mobile */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Menu Button */}
            <button 
              className="text-white p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Blur Background Layer - Separate from content */}
          <div className="absolute inset-0 bg-[#153653]/95 md:bg-[#153653]/85 backdrop-blur-md -z-10"></div>
        </div>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-full bg-[#153653]/95 backdrop-blur-xl border-t border-white/20 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto px-4 py-4">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search destinations, treks, packages..."
                    className="w-full pl-12 pr-24 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C5E0ED] focus:border-transparent backdrop-blur-sm"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#153653] font-bold rounded-lg px-4 py-2 text-sm backdrop-blur-sm hover:opacity-90 transition-opacity"
                  >
                    Search
                  </button>
                </form>
                {/* Search Suggestions */}
                <div className="mt-4 text-white/70 text-sm">
                  <p className="mb-2">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Everest Base Camp", "Annapurna Circuit", "Bhutan Tour", "Trekking Gear", "Best Season"].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setSearchQuery(term);
                          setIsSearchOpen(false);
                        }}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu - Blue Translucent Frosted Glass Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#153653]/95 backdrop-blur-xl border-t border-white/20"
              style={{ height: "calc(100vh - 64px)" }}
            >
              <div className="container mx-auto px-4 sm:px-6 py-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex flex-col space-y-2">
                      {/* Destinations Dropdown in Mobile */}
                      <div>
                        <button
                          onClick={() => setDestinationsOpen(!destinationsOpen)}
                          className="w-full py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#C5E0ED] rounded-full" />
                            Destinations
                          </span>
                          <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {destinationsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-6 mt-2 space-y-2 overflow-hidden"
                            >
                              {destinations.map((dest) => (
                                <Link
                                  key={dest.name}
                                  href={dest.href}
                                  onClick={closeMenu}
                                  className="flex items-center gap-3 py-3 px-4 text-white/70 hover:text-[#C5E0ED] rounded-lg hover:bg-white/5 transition-colors"
                                >
                                  <dest.icon className="w-4 h-4" />
                                  <span>{dest.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Services Dropdown in Mobile */}
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#C5E0ED] rounded-full" />
                            Our Services
                          </span>
                          <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-6 mt-2 space-y-2 overflow-hidden"
                            >
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={closeMenu}
                                  className="flex items-center gap-3 py-3 px-4 text-white/70 hover:text-[#C5E0ED] rounded-lg hover:bg-white/5 transition-colors"
                                >
                                  <service.icon className="w-4 h-4" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* About Us */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link 
                          href="/about-us"
                          className="py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
                          onClick={closeMenu}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#C5E0ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            About Us
                          </span>
                          <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-[#C5E0ED] group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>

                      {/* Blogs */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <Link 
                          href="/blog"
                          className="py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
                          onClick={closeMenu}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#C5E0ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            Blogs
                          </span>
                          <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-[#C5E0ED] group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                      
                      {/* Mobile WhatsApp Button in menu list */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
                          onClick={closeMenu}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#25D366] rounded-full" />
                            WhatsApp Chat
                          </span>
                          <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-[#25D366] transition-all" />
                        </a>
                      </motion.div>
                      
                      {/* Mobile Plan Your Trip Button in menu list */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <Link 
                          href="/contact"
                          className="py-4 px-4 text-lg font-medium text-white/90 bg-gradient-to-r from-[#C5E0ED]/20 to-[#9dcae0]/20 hover:from-[#C5E0ED]/30 hover:to-[#9dcae0]/30 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-[#C5E0ED]/30 group"
                          onClick={closeMenu}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#C5E0ED] rounded-full" />
                            Plan Your Trip
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#C5E0ED] group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <a 
                        href="tel:+9779841376470" 
                        className="flex items-center justify-center gap-2 text-white/90 hover:text-[#C5E0ED] transition-colors px-4 py-3 rounded-lg hover:bg-[#153653]/60 backdrop-blur-sm border border-white/10 group"
                        onClick={closeMenu}
                      >
                        <Phone className="w-5 h-5" />
                        <span className="text-sm font-medium">Call Us</span>
                      </a>
                      <a 
                        href="mailto:info@himkalaadventure.com" 
                        className="flex items-center justify-center gap-2 text-white/90 hover:text-[#C5E0ED] transition-colors px-4 py-3 rounded-lg hover:bg-[#153653]/60 backdrop-blur-sm border border-white/10 group"
                        onClick={closeMenu}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium">Email Us</span>
                      </a>
                    </div>
                    
                    {/* Contact Info at Bottom */}
                    <div className="mt-6 text-center text-white/60 text-xs space-y-3">
                      <p className="flex items-center justify-center gap-2">
                        <MapPin className="w-3 h-3" />
                        Thamel, Kathmandu, Nepal
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-3 h-3" />
                        <span>+977 9841376470</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>Daily 9AM - 6PM</span>
                      </div>
                      <p>© {new Date().getFullYear()} Himkala Adventure</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content with safe area for mobile - Adjusted for larger logo */}
      <main className="pt-20 md:pt-24">
        {children}
      </main>

      {/* CTA Section - Mobile Optimized with Navbar Color */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#153653]/90 backdrop-blur-sm relative overflow-hidden border-t border-white/20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#153653]/90 via-[#153653]/80 to-[#153653]/95"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 text-[#C5E0ED]" />
                <span className="text-white/90 text-sm font-medium">Start Your Adventure Today</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready for Your <span className="text-[#C5E0ED]">Himalayan</span><br className="hidden sm:block" /> Journey?
              </h2>
              
              <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Let our experts craft your perfect adventure. From Everest treks to Bhutan tours, we handle every detail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Plan My Trip - Primary Button */}
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] hover:from-[#b3d6e6] hover:to-[#8bc0d8] text-[#153653] font-bold h-14 sm:h-16 px-8 sm:px-10 rounded-full text-lg shadow-2xl shadow-[#C5E0ED]/40 hover:shadow-[#C5E0ED]/60 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto backdrop-blur-sm"
                >
                  <Link href="/contact">
                    <Compass className="mr-3 w-5 h-5" />
                    <span className="font-bold">Plan My Trip Now</span>
                  </Link>
                </Button>
                
                {/* WhatsApp Us - Secondary Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 h-14 sm:h-16 px-8 sm:px-10 rounded-full text-lg backdrop-blur-sm hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span className="font-medium">WhatsApp Us</span>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="text-white/70">
                  <div className="text-2xl font-bold text-[#C5E0ED]">12+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-white/70">
                  <div className="text-2xl font-bold text-[#C5E0ED]">5000+</div>
                  <div className="text-sm">Happy Travelers</div>
                </div>
                <div className="text-white/70">
                  <div className="text-2xl font-bold text-[#C5E0ED]">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
                <div className="text-white/70">
                  <div className="text-2xl font-bold text-[#C5E0ED]">100%</div>
                  <div className="text-sm">Safety Record</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Updated with New Logo */}
      <footer id="contact" className="bg-[#0a1f30] pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 md:mb-16">
            {/* Company Info - Updated Logo */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/himkala-logo-2.png"
                      alt="Himkala Adventure Logo"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-lg md:text-xl font-bold text-white block">Himkala Adventure</span>
                  <span className="text-xs text-[#C5E0ED]/60">SnowArt Pvt. Ltd.</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Trusted Himalayan adventures across Nepal, Bhutan, and Tibet since 2012.
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 ${social.color} transition-all active:scale-95 hover:bg-white/10`}
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Treks */}
            <div>
              <h5 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C5E0ED]" />
                Popular Treks/Tours
              </h5>
              <ul className="space-y-3 text-sm text-white/60">
                {["Everest Base Camp", "Annapurna Circuit", "Langtang Valley", "Manaslu Circuit", "Upper Mustang"].map((trek) => (
                  <li key={trek}>
                    <a href="#" className="hover:text-[#C5E0ED] transition-colors flex items-center gap-2 py-1 group">
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {trek}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#C5E0ED]" />
                Quick Links
              </h5>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  { label: "About Us", href: "/about-us" },
                  { label: "Blog", href: "/blog" },
                  { label: "Customize Your Trip", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="hover:text-[#C5E0ED] transition-colors flex items-center gap-2 py-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C5E0ED]" />
                Contact Us
              </h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5E0ED] shrink-0 mt-0.5" />
                  <span>Thamel, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C5E0ED] shrink-0 mt-0.5" />
                  <a href="tel:+9779841376470" className="hover:text-[#C5E0ED] transition-colors">
                    +977 9841376470
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C5E0ED] shrink-0 mt-0.5" />
                  <a href="mailto:info@himkalaadventure.com" className="hover:text-[#C5E0ED] transition-colors">
                    info@himkalaadventure.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C5E0ED] shrink-0 mt-0.5" />
                  <span>Daily 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications & Affiliations */}
          <div className="border-t border-white/10 pt-8 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {affiliationLinks.map((affiliation, index) => (
                <a
                  key={index}
                  href={affiliation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={affiliation.name}
                >
                  <img
                    src={affiliation.logo}
                    alt={`${affiliation.name} Logo`}
                    width={affiliation.width}
                    height={affiliation.height}
                    className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {affiliation.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Himkala Adventure (SnowArt). All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs text-white/40">
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white transition-colors hover:text-[#C5E0ED] cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setTermsOpen(true)}
                className="hover:text-white transition-colors hover:text-[#C5E0ED] cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />

      {/* Floating WhatsApp Button - Green for both Mobile & Desktop */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-2xl shadow-[#25D366]/50 hover:shadow-[#25D366]/70 hover:scale-110 active:scale-95 transition-all animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Floating Call Button - Mobile Only - SOLID BLUE */}
      <div className="md:hidden fixed bottom-24 right-6 z-40">
        <a 
          href="tel:+9779841376470"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4285F4] via-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>
    </>
  );
}