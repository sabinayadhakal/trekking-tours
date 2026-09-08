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
  Globe as GlobeIcon,
  FileText,
  Sparkles,
  TrendingUp,
  Briefcase,
  Landmark,
  Trees,
  Plane,
  MountainSnow,
  Tent,
  Map,
  Camera,
  Utensils,
  Coffee,
  Sun,
  Cloud,
  Wind,
  Snowflake,
  Flame,
  Droplets,
  Waves,
  Leaf,
  Flower2,
  Bird,
  Rabbit,
  Turtle,
  Fish,
  TreePine,
  Cherry,
  Apple,
  CheckCircle,
  ChevronUp,
  Grape,
  Wheat,
  Carrot,
  Citrus,
  Banana,
  Pizza,
  Beer,
  Wine,
  Music,
  Drama,
  Theater,
  Palette,
  Brush,
  Pen,
  Book,
  GraduationCap,
  School,
  Church,
  Building2,
  Castle,
  Home,
  Warehouse,
  Store,
  ShoppingBag,
  ShoppingCart,
  Gift,
  Gem,
  Diamond,
  Medal,
  Trophy,
  Target,
  Flag,
  FlagTriangleRight,
  FlagTriangleLeft,
  Palmtree,
  TreeDeciduous,
  UtensilsCrossed,
  GlassWater,
  LandPlot,
  MountainIcon,
  TentTree,
  Sunrise,
  Sunset,
  Thermometer,
  Umbrella,
  Tornado,
  Rainbow,
  Moon,
  Stars,
  Eclipse,
  Zap,
  Battery,
  Power,
  Plug,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  AlarmClock,
  Timer,
  TimerOff,
  TimerReset,
  Footprints,
  Check,
  MessageSquare,
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
import { usePathname, useRouter } from "next/navigation";

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

// Define types for search results
interface SearchResult {
  title: string;
  url: string;
  category: 'destination' | 'service' | 'trek' | 'day-hiking' | 'sightseeing' | 'jungle-safari' | 'mountain-flight' | 'cultural-tour' | 'free-tour' | 'blog' | 'page';
  description?: string;
  icon?: React.ReactNode;
  subCategory?: string;
}

// Search data
const searchData: SearchResult[] = [
  { title: "About Us", url: "/about-us", category: "page", icon: <FileText className="w-4 h-4" /> },
  { title: "Blog", url: "/blog", category: "page", icon: <BookOpen className="w-4 h-4" /> },
  { title: "Contact", url: "/contact", category: "page", icon: <Mail className="w-4 h-4" /> },
  { title: "Bhutan", url: "/destinations/bhutan", category: "destination", icon: <Globe className="w-4 h-4" /> },
  { title: "Tibet", url: "/destinations/tibet", category: "destination", icon: <Globe className="w-4 h-4" /> },
  { title: "Nepal", url: "/destinations/nepal", category: "destination", icon: <Globe className="w-4 h-4" /> },
  { title: "Day Hiking in Nepal", url: "/services/day-hikings", category: "service", icon: <Sun className="w-4 h-4" /> },
  { title: "Day Tour in Nepal", url: "/services/day-sightseeings", category: "service", icon: <Camera className="w-4 h-4" /> },
  { title: "Free Walking Tour Kathmandu", url: "/services/free-tour-kathmandu", category: "service", icon: <Compass className="w-4 h-4" /> },
  { title: "Jungle Safari", url: "/services/jungle-safari", category: "service", icon: <Trees className="w-4 h-4" /> },
  { title: "Mountain Flight & Heli Trip", url: "/services/mountain-flight-heli-trip", category: "service", icon: <Plane className="w-4 h-4" /> },
  { title: "Multi Day Cultural Tours", url: "/services/multi-day-cultural-tours", category: "service", icon: <Landmark className="w-4 h-4" /> },
  { title: "Trekking", url: "/services/trekking", category: "service", icon: <Map className="w-4 h-4" /> },
  { title: "Annapurna Base Camp Trek", url: "/services/trekking/annapurna-base-camp-trek", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Annapurna Circuit Trek", url: "/services/trekking/annapurna-circuit-trek", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Everest Base Camp Trek", url: "/services/trekking/everest-base-camp-trek", category: "trek", icon: <Mountain className="w-4 h-4" /> },
  { title: "Everest Three Passes Trek", url: "/services/trekking/everest-three-passes-trek", category: "trek", icon: <Mountain className="w-4 h-4" /> },
  { title: "Ghorepani Poon Hill Trek", url: "/services/trekking/ghorepani-poon-hill-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Langtang Valley Trek", url: "/services/trekking/langtang-valley-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Manaslu Circuit Trek", url: "/services/trekking/manaslu-circuit-trek", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Mardi Himal Trek", url: "/services/trekking/mardi-himal-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
];

// Group results by category
const categoryLabels: Record<string, string> = {
  destination: 'Destinations',
  service: 'Services',
  trek: 'Trekking Packages',
  'day-hiking': 'Day Hiking in Nepal',
  sightseeing: 'Day Tour in Nepal',
  'jungle-safari': 'Jungle Safari',
  'mountain-flight': 'Mountain Flights & Heli Trips',
  'cultural-tour': 'Multi Day Cultural Tours',
  'free-tour': 'Free Tours',
  blog: 'Blog',
  page: 'Pages'
};

// Terms Dialog
const TermsDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#f2ede4] border-[#e4d8c8]/30 text-[#14383b]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-serif font-bold text-[#14383b] mb-4">Terms and Conditions</DialogTitle>
        <div className="mt-4 space-y-4 text-sm text-[#556363]">
          <p><strong className="text-[#cf6943]">Down Payment:</strong></p>
          <p>To secure your place, a 20% down payment is required in advance as per company policy. For bookings more than ten weeks prior to arrival date, a 15% deposit applies. Please contact us if this causes any issues as we try to be flexible.</p>
          <p><strong className="text-[#cf6943]">How to pay your deposit:</strong></p>
          <p>You can pay via bank transfer in USD, EUR, or GBP to the following account:</p>
          <p className="bg-[#e4d8c8]/50 p-4 rounded-lg">FOR CREDIT TO:<br />Nepal Investment Mega Bank Nepal Ltd.<br />Kathmandu, Nepal<br />SWIFT: NIBLNPKT</p>
          <p className="bg-[#e4d8c8]/50 p-4 rounded-lg">BENEFICIARY FINAL CREDIT TO:<br />A/C Holder's Name: Himkala Adventure Pvt. Ltd.<br />A/C No: 13201100002097<br />Nepal Investment Mega Bank Nepal Ltd<br />Thamel, Kathmandu</p>
          <p><strong className="text-[#cf6943]">Payment of the balance:</strong></p>
          <p>The remaining balance can be paid after your arrival in Nepal. Credit card payments incur a 4% handling charge on the outstanding balance. Bank transfers have no handling fee.</p>
          <p><strong className="text-[#cf6943]">Last minute booking:</strong></p>
          <p>We accept last-minute bookings for Nepal trips only, not for India, Bhutan, or Tibet trips.</p>
          <p><strong className="text-[#cf6943]">Refund:</strong></p>
          <p>The 15% deposit is non-refundable for any cancellation reason. If you've paid in full, you'll receive a refund minus cancellation charges. Written notification is required for cancellations.</p>
          <p><strong className="text-[#cf6943]">Supplement charge:</strong></p>
          <p>Rooms/tents are provided on a twin-sharing basis. Single room supplement charges apply for clients without a sharing partner.</p>
          <p><strong className="text-[#cf6943]">Incomplete tour:</strong></p>
          <p>No refunds are provided for unused portions of the itinerary if clients drop out.</p>
          <p><strong className="text-[#cf6943]">Unforeseen circumstances:</strong></p>
          <p>If Himkala Adventure cancels your trip due to war, natural disasters, conflict, or unfavorable climate, we'll offer an alternative trip or full refund. Other expenses incurred from the booking are your responsibility.</p>
          <p><strong className="text-[#cf6943]">Clients' responsibility:</strong></p>
          <p>Our tour/trek guides have full authority during tours. Any unlawful acts may result in removal from the tour.</p>
          <p><strong className="text-[#cf6943]">Impact on your journey:</strong></p>
          <p>We strive to provide the best service but note that facilities in Himalayan countries may differ from Western standards.</p>
          <p><strong className="text-[#cf6943]">Travel insurance:</strong></p>
          <p>Comprehensive travel insurance covering medical emergencies, natural calamities, helicopter evacuation, personal accidents, trip cancellation, etc., is mandatory. Ensure your policy covers your planned activities and maximum altitudes.</p>
          <p><strong className="text-[#cf6943]">Tour amendment:</strong></p>
          <p>Itinerary changes require prior notice, though adjustments may be necessary en route due to circumstances like bad weather.</p>
          <p><strong className="text-[#cf6943]">Paper and documents:</strong></p>
          <p>All necessary documents must be provided in time for visa and permit processing. We're not responsible for delays due to missing paperwork.</p>
          <p><strong className="text-[#cf6943]">Flight delay/cancellation:</strong></p>
          <p>Flight delays or cancellations may occur in Himalayan regions due to weather, requiring itinerary modifications.</p>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

// Privacy Dialog
const PrivacyDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#f2ede4] border-[#e4d8c8]/30 text-[#14383b]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-serif font-bold text-[#14383b] mb-4">Privacy Policy</DialogTitle>
        <div className="mt-4 space-y-4 text-sm text-[#556363]">
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

// Social links
const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/HimkalaAdventureNepal?ref=embed_page", icon: FaFacebook, color: "hover:text-[#1877F2]" },
  { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram, color: "hover:text-[#E4405F]" },
  { name: "Twitter", href: "https://x.com/HimkalaNepal", icon: FaTwitter, color: "hover:text-[#1DA1F2]" },
  { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube, color: "hover:text-[#FF0000]" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/himkalaadventure/", icon: FaLinkedin, color: "hover:text-[#0077B5]" },
  { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok, color: "hover:text-[#000000]" },
  { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest, color: "hover:text-[#E60023]" }
];

// Affiliation links
const affiliationLinks = [
  { name: "Nepal Tourism Board", href: "https://ntb.gov.np/", logo: "/images/ntb-logo.png", width: 40, height: 20 },
  { name: "Nepal Mountaineering Association", href: "https://www.nepalmountaineering.org/", logo: "/images/nma-logo.png", width: 40, height: 20 },
  { name: "Trekking Agencies' Association of Nepal", href: "https://www.taan.org.np/", logo: "/images/taan-logo.png", width: 40, height: 20 }
];

// Destination dropdown
const DestinationsDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 text-xs font-semibold tracking-[.08em] text-[#f7f2e9]/90 hover:text-[#f0a17f] transition-colors px-3 py-1.5">
        Destinations
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute left-0 top-full mt-2 w-64 bg-[#0d2427]/95 backdrop-blur-xl border border-[#f7f2e9]/20 rounded-xl shadow-2xl shadow-black/30 overflow-hidden z-50">
            <div className="py-2">
              <Link href="/destinations/nepal" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Nepal</Link>
              <Link href="/destinations/bhutan" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Bhutan</Link>
              <Link href="/destinations/tibet" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors" onClick={() => setIsOpen(false)}>Tibet</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Services dropdown
const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 text-xs font-semibold tracking-[.08em] text-[#f7f2e9]/90 hover:text-[#f0a17f] transition-colors px-3 py-1.5">
        Our Services in Nepal
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute left-0 top-full mt-2 w-72 bg-[#0d2427]/95 backdrop-blur-xl border border-[#f7f2e9]/20 rounded-xl shadow-2xl shadow-black/30 overflow-hidden z-50">
            <div className="py-2">
              <Link href="/services/free-tour-kathmandu" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Free Walking Tour Kathmandu</Link>
              <Link href="/services/free-walking-tour-kathmandu" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Free Tour Kathmandu</Link>
              <Link href="/services/trekking" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Trekking in Nepal</Link>
              <Link href="/services/multi-day-cultural-tours" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Multi Day Cultural Tours</Link>
              <Link href="/services/day-hikings" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Day Hiking in Nepal</Link>
              <Link href="/services/day-sightseeings" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Day Tour in Nepal</Link>
              <Link href="/services/mountain-flight-heli-trip" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors border-b border-[#f7f2e9]/5" onClick={() => setIsOpen(false)}>Mountain Flights and Heli</Link>
              <Link href="/services/jungle-safari" className="block px-4 py-3 text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 transition-colors" onClick={() => setIsOpen(false)}>Jungle Safari</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile dropdowns
const MobileDestinationsDropdown = ({ closeMenu }: { closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 px-4 text-base font-medium text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-xl transition-all active:scale-95 flex items-center justify-between border-b border-[#f7f2e9]/10 group">
        <span>Destinations</span>
        <ChevronDown className={`w-4 h-4 text-[#f7f2e9]/50 group-hover:text-[#f0a17f] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="pl-6 pt-2 space-y-1">
              <Link href="/destinations/nepal" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Nepal</Link>
              <Link href="/destinations/bhutan" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Bhutan</Link>
              <Link href="/destinations/tibet" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Tibet</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileServicesDropdown = ({ closeMenu }: { closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 px-4 text-base font-medium text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-xl transition-all active:scale-95 flex items-center justify-between border-b border-[#f7f2e9]/10 group">
        <span>Our Services in Nepal</span>
        <ChevronDown className={`w-4 h-4 text-[#f7f2e9]/50 group-hover:text-[#f0a17f] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="pl-6 pt-2 space-y-1">
              <Link href="/services/free-tour-kathmandu" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Free Tours Kathmandu</Link>
              <Link href="/services/free-walking-tour-kathmandu" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Original Free Walking Tour</Link>
              <Link href="/services/trekking" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Trekking</Link>
              <Link href="/services/multi-day-cultural-tours" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Multi Day Cultural Tours</Link>
              <Link href="/services/day-hikings" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Day Hiking in Nepal</Link>
              <Link href="/services/day-sightseeings" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Day Tour in Nepal</Link>
              <Link href="/services/mountain-flight-heli-trip" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Mountain Flights and Heli</Link>
              <Link href="/services/jungle-safari" className="block py-3 px-4 text-[#f7f2e9]/80 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-lg transition-colors" onClick={closeMenu}>Jungle Safari</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Search Component
const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  React.useEffect(() => {
    if (searchQuery.trim() === "") { setResults([]); setSelectedIndex(-1); return; }
    const query = searchQuery.toLowerCase();
    const filtered = searchData.filter(item => item.title.toLowerCase().includes(query));
    filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase(), bTitle = b.title.toLowerCase();
      if (aTitle === query) return -1;
      if (bTitle === query) return 1;
      if (aTitle.startsWith(query) && !bTitle.startsWith(query)) return -1;
      if (bTitle.startsWith(query) && !aTitle.startsWith(query)) return 1;
      return aTitle.indexOf(query) - bTitle.indexOf(query);
    });
    setResults(filtered.slice(0, 10));
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : prev); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(prev => prev > 0 ? prev - 1 : -1); }
    else if (e.key === 'Enter' && selectedIndex >= 0) handleResultClick(results[selectedIndex]);
    else if (e.key === 'Escape') onClose();
  };

  const handleResultClick = (result: SearchResult) => { router.push(result.url); onClose(); setSearchQuery(""); };

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) acc[result.category] = [];
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div ref={searchRef} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="absolute inset-x-0 top-full bg-[#0d2427]/95 backdrop-blur-xl border-t border-[#f7f2e9]/20 shadow-xl z-50" onClick={(e) => e.stopPropagation()}>
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={(e) => { e.preventDefault(); if (results.length > 0) handleResultClick(results[0]); }} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#f7f2e9]/50" aria-hidden="true" />
              <input ref={inputRef} type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search destinations, treks, tours, packages..." className="w-full pl-12 pr-12 py-3 bg-[#f7f2e9]/10 border border-[#f7f2e9]/20 rounded-xl text-[#f7f2e9] placeholder-[#f7f2e9]/50 focus:outline-none focus:ring-2 focus:ring-[#e47a4f] focus:border-transparent backdrop-blur-sm" aria-label="Search" />
              {searchQuery && <button type="button" onClick={() => setSearchQuery("")} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg hover:bg-[#f7f2e9]/10 text-[#f7f2e9]/60 hover:text-[#f7f2e9] transition-colors" aria-label="Clear search"><X className="w-4 h-4" aria-hidden="true" /></button>}
            </form>
            {searchQuery && (
              <div className="mt-4 max-h-[60vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {Object.entries(groupedResults).map(([category, categoryResults]) => (
                      <div key={category} className="space-y-2">
                        <h3 className="text-xs font-bold tracking-[.12em] text-[#e47a4f] uppercase px-3">{categoryLabels[category] || category}</h3>
                        <div className="space-y-1">
                          {categoryResults.map((result, index) => {
                            const globalIndex = results.indexOf(result);
                            return (
                              <button key={result.url} onClick={() => handleResultClick(result)} onMouseEnter={() => setSelectedIndex(globalIndex)} className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${selectedIndex === globalIndex ? 'bg-[#e47a4f]/20 text-[#f7f2e9] border border-[#e47a4f]/30' : 'text-[#f7f2e9]/80 hover:bg-[#f7f2e9]/10'}`}>
                                <span className="text-[#e47a4f]" aria-hidden="true">{result.icon}</span>
                                <div className="flex-1"><div className="font-medium text-sm">{result.title}</div>{result.subCategory && <div className="text-xs text-[#f7f2e9]/40 mt-0.5 capitalize">{result.subCategory}</div>}</div>
                                <ChevronRight className="w-4 h-4 text-[#f7f2e9]/40" aria-hidden="true" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-[#f7f2e9]/50">
                    <Search className="w-12 h-12 mx-auto mb-3 opacity-30" aria-hidden="true" />
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            )}
            {!searchQuery && (
              <div className="mt-4 text-[#f7f2e9]/70 text-sm">
                <p className="mb-3 text-xs font-bold tracking-[.12em] text-[#e47a4f] uppercase">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {["Everest Base Camp", "Annapurna Circuit", "Bhutan Tour", "Tibet Tour", "Kathmandu Sightseeing", "Free Walking Tour", "Free Tour Kathmandu"].map((term) => (
                    <button key={term} onClick={() => setSearchQuery(term)} className="px-3 py-1.5 bg-[#f7f2e9]/5 hover:bg-[#f7f2e9]/10 rounded-lg backdrop-blur-sm border border-[#f7f2e9]/10 transition-colors text-sm">{term}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [termsOpen, setTermsOpen] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);

  const phoneNumber = "+977 9841376470";
  const whatsappMessage = "";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // The administration area has its own application shell. Public pages retain
  // the existing navigation, CTA, footer, and floating controls unchanged.
  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Navigation - Dark Theme */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0d2427]/95 shadow-lg shadow-black/20' 
          : 'bg-[#0d2427]/85'
      } border-b border-[#f7f2e9]/20 backdrop-blur-md`} aria-label="Main navigation">
        <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-10" onClick={closeMenu} aria-label="Himkala Adventure - Home">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full">
                <Image
                  src="/images/himkala-logo-2.png"
                  alt="Himkala Adventure Logo - Himalayan Trekking Company Nepal"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 48px, 56px"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm md:text-base font-serif font-bold text-[#f7f2e9] block leading-tight">Himkala Adventure</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-[#f0a17f] font-medium leading-none">Private Limited</span>
            </div>
            <div className="sm:hidden">
              <span className="text-xs font-serif font-bold text-[#f7f2e9]">Himkala Adventure</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 relative z-10">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-[#f7f2e9]/80 hover:text-[#f0a17f] p-2 transition-colors"
              aria-label="Search treks, tours, and destinations"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
            </button>

            <DestinationsDropdown />
            <ServicesDropdown />
            
            <Link 
              href="/about-us"
              className="inline-flex h-8 items-center justify-center px-3 text-xs font-semibold tracking-[.08em] text-[#f7f2e9]/90 transition-colors hover:text-[#f0a17f]"
              onClick={closeMenu}
            >
              About Us
            </Link>
            
            <Link 
              href="/blog"
              className="inline-flex h-8 items-center justify-center px-3 text-xs font-semibold tracking-[.08em] text-[#f7f2e9]/90 transition-colors hover:text-[#f0a17f]"
              onClick={closeMenu}
            >
              Blogs
            </Link>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1a9f8f] text-white font-bold rounded-full px-4 py-2 shadow-lg shadow-[#25D366]/30 transition-all active:scale-95 text-xs tracking-[.08em]"
            >
              <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <Button 
              asChild
              className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold rounded-full px-5 py-2 shadow-lg shadow-[#e47a4f]/20 active:scale-95 transition-transform text-xs tracking-[.08em] h-auto"
            >
              <Link href="/contact">
                Plan Your Trip
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Icons */}
          <div className="md:hidden flex items-center gap-2 relative z-10">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-[#f7f2e9] p-2 transition-colors"
              aria-label="Search treks and tours"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>

            <button 
              className="text-[#f7f2e9] p-2 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="absolute inset-0 bg-[#0d2427]/95 md:bg-[#0d2427]/85 backdrop-blur-md -z-10"></div>
        </div>

        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0d2427]/95 backdrop-blur-xl border-t border-[#f7f2e9]/20"
              style={{ height: "calc(100vh - 60px)" }}
            >
              <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex flex-col space-y-1">
                      <MobileDestinationsDropdown closeMenu={closeMenu} />
                      <MobileServicesDropdown closeMenu={closeMenu} />
                      
                      <Link 
                        href="/about-us"
                        className="py-4 px-4 text-base font-medium text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-xl transition-all active:scale-95 flex items-center justify-between border-b border-[#f7f2e9]/10 group"
                        onClick={closeMenu}
                      >
                        <span>About Us</span>
                        <ChevronRight className="w-4 h-4 text-[#f7f2e9]/50 group-hover:text-[#f0a17f] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                      </Link>
                      
                      <Link 
                        href="/blog"
                        className="py-4 px-4 text-base font-medium text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-xl transition-all active:scale-95 flex items-center justify-between border-b border-[#f7f2e9]/10 group"
                        onClick={closeMenu}
                      >
                        <span>Blogs</span>
                        <ChevronRight className="w-4 h-4 text-[#f7f2e9]/50 group-hover:text-[#f0a17f] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                      </Link>
                      
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="py-4 px-4 text-base font-medium text-[#f7f2e9]/90 hover:text-[#f0a17f] hover:bg-[#f7f2e9]/10 rounded-xl transition-all active:scale-95 flex items-center justify-between border-b border-[#f7f2e9]/10 group"
                        onClick={closeMenu}
                      >
                        <span className="flex items-center gap-2">
                          <WhatsAppIcon className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
                          WhatsApp Chat
                        </span>
                        <ExternalLink className="w-4 h-4 text-[#f7f2e9]/50 group-hover:text-[#25D366] transition-all" aria-hidden="true" />
                      </a>
                      
                      <Link 
                        href="/contact"
                        className="py-4 px-4 text-base font-medium text-[#f7f2e9]/90 bg-[#e47a4f]/20 hover:bg-[#e47a4f]/30 rounded-xl transition-all active:scale-95 flex items-center justify-between border border-[#e47a4f]/30 group"
                        onClick={closeMenu}
                      >
                        <span>Plan Your Trip</span>
                        <ArrowRight className="w-4 h-4 text-[#e47a4f] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-[#f7f2e9]/20">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 text-[#f7f2e9]/90 hover:text-[#f0a17f] transition-colors px-4 py-3 rounded-lg hover:bg-[#f7f2e9]/10 border border-[#f7f2e9]/10 group"
                        onClick={closeMenu}
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-medium">Call Us</span>
                      </a>
                      <a 
                        href="mailto:info@himkalaadventure.com" 
                        className="flex items-center justify-center gap-2 text-[#f7f2e9]/90 hover:text-[#f0a17f] transition-colors px-4 py-3 rounded-lg hover:bg-[#f7f2e9]/10 border border-[#f7f2e9]/10 group"
                        onClick={closeMenu}
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-medium">Email Us</span>
                      </a>
                    </div>
                    
                    <div className="text-center text-[#f7f2e9]/60 text-xs space-y-3">
                      <p className="flex items-center justify-center gap-2">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        Thamel, Kathmandu, Nepal
                      </p>
                      <div className="flex items-center justify-center gap-4 text-[#f7f2e9]/40">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        <span>Daily 9AM - 6PM</span>
                        <Shield className="w-3 h-3" aria-hidden="true" />
                        <span>Licensed</span>
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

      {/* Main content */}
      <main className="pt-[60px] md:pt-[72px]">
        {children}
      </main>

      {/* CTA Section - Simplified with Buttons */}
      <section className="bg-[#0d2427] px-5 py-16 sm:py-20 md:py-24 border-t border-[#f7f2e9]/20 relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#e47a4f] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#f0a17f] rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#f7f2e9]/10 backdrop-blur-sm border border-[#f7f2e9]/20">
              <Star className="w-4 h-4 text-[#f0a17f]" aria-hidden="true" />
              <span className="text-[#f7f2e9]/90 text-sm font-medium">With each trip... comes a new optimism!!!</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f7f2e9] mb-4 sm:mb-6 leading-tight">
              Start Planning Your <br className="hidden sm:block" />
              <span className="text-[#f0a17f]">Journey</span>
            </h2>
            
            <p className="text-[#f7f2e9]/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Whether you're dreaming of trekking in Nepal, exploring ancient temples, or discovering hidden valleys, we're here to make it happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Plan My Trip Button - Primary */}
              <Button 
                asChild
                className="bg-[#e47a4f] hover:bg-[#cf6943] text-[#fff8ee] font-bold h-14 sm:h-16 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-2xl shadow-[#e47a4f]/40 hover:shadow-[#e47a4f]/60 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Link href="/contact">
                  <Compass className="mr-3 w-5 h-5" aria-hidden="true" />
                  Plan My Trip Now
                </Link>
              </Button>
              
              {/* WhatsApp Us Button - Secondary */}
              <Button 
                asChild
                variant="outline"
                className="bg-[#f7f2e9]/10 hover:bg-[#f7f2e9]/20 text-[#f7f2e9] border-[#f7f2e9]/30 hover:border-[#f7f2e9]/50 h-14 sm:h-16 px-8 sm:px-10 rounded-full text-base sm:text-lg backdrop-blur-sm hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer nofollow">
                  <WhatsAppIcon className="mr-3 w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">WhatsApp Us</span>
                </a>
              </Button>
            </div>
            
            <p className="text-[#f7f2e9]/50 text-xs sm:text-sm mt-6">
              ✦ Free consultation • No obligations • Expert advice ✦
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Dark Theme */}
      <footer id="contact" className="bg-[#0d2427] pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-10 border-t border-[#f7f2e9]/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 md:mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/himkala-logo-2.png"
                      alt="Himkala Adventure Logo - Himalayan Trekking Company"
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-lg font-serif font-bold text-[#f7f2e9] block">Himkala Adventure</span>
                  <span className="text-xs text-[#f0a17f]/60">SnowArt Pvt. Ltd.</span>
                </div>
              </div>
              <p className="text-[#f7f2e9]/60 text-sm leading-relaxed mb-6">
                Real adventures. Real connections. Nepal, Bhutan, and Tibet since 2015.
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`w-10 h-10 rounded-full bg-[#f7f2e9]/5 border border-[#f7f2e9]/10 flex items-center justify-center text-[#f7f2e9]/60 ${social.color} transition-all active:scale-95 hover:bg-[#f7f2e9]/10`}
                    aria-label={`Follow us on ${social.name}`}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Treks */}
            <div>
              <h5 className="font-serif font-bold text-[#f7f2e9] mb-6 text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#f0a17f]" aria-hidden="true" />
                Popular Treks/Tours
              </h5>
              <ul className="space-y-3 text-sm text-[#f7f2e9]/60">
                {[
                  { name: "Free Walking Tour", url: "/services/free-walking-tour-kathmandu" },
                  { name: "Free Tour, Kathmandu", url: "/services/free-walking-tour-kathmandu" },
                  { name: "Manaslu Circuit", url: "/services/trekking/manaslu-circuit-trek" },
                  { name: "Everest Base Camp", url: "/services/trekking/everest-base-camp-trek" },
                  { name: "Annapurna Circuit", url: "/services/trekking/annapurna-circuit-trek" },
                  { name: "Kathmandu, Pokhara, Lumbini, Chitwan Tour", url: "/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour" },
                ].map((trek) => (
                  <li key={trek.name}>
                    <Link 
                      href={trek.url}
                      className="hover:text-[#f0a17f] transition-colors flex items-center gap-2 py-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#f0a17f]" aria-hidden="true" />
                      {trek.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-serif font-bold text-[#f7f2e9] mb-6 text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#f0a17f]" aria-hidden="true" />
                Quick Links
              </h5>
              <ul className="space-y-3 text-sm text-[#f7f2e9]/60">
                {[
                  { label: "About Us", href: "/about-us" },
                  { label: "Blog", href: "/blog" },
                  { label: "Customize Your Trip", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="hover:text-[#f0a17f] transition-colors flex items-center gap-2 py-1 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#f0a17f]" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-serif font-bold text-[#f7f2e9] mb-6 text-lg flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#f0a17f]" aria-hidden="true" />
                Contact Us
              </h5>
              <ul className="space-y-4 text-sm text-[#f7f2e9]/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Thamel, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-[#f0a17f] transition-colors">
                    {phoneNumber}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                  <a href="mailto:info@himkalaadventure.com" className="hover:text-[#f0a17f] transition-colors">
                    info@himkalaadventure.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#f0a17f] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Daily 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications & Affiliations */}
          <div className="border-t border-[#f7f2e9]/10 pt-8 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {affiliationLinks.map((affiliation, index) => (
                <a
                  key={index}
                  href={affiliation.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group relative"
                  title={affiliation.name}
                >
                  <img
                    src={affiliation.logo}
                    alt={`${affiliation.name} Logo - Official certification`}
                    width={affiliation.width}
                    height={affiliation.height}
                    className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[#f7f2e9]/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {affiliation.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-6 border-t border-[#f7f2e9]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#f7f2e9]/40 text-center md:text-left">
              © {new Date().getFullYear()} Himkala Adventure (SnowArt). All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs text-[#f7f2e9]/40">
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-[#f0a17f] transition-colors cursor-pointer"
                aria-label="Open privacy policy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setTermsOpen(true)}
                className="hover:text-[#f0a17f] transition-colors cursor-pointer"
                aria-label="Open terms and conditions"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/50 hover:shadow-[#25D366]/70 hover:scale-110 active:scale-95 transition-all animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Floating Call Button - Mobile Only */}
      <div className="md:hidden fixed bottom-24 right-6 z-40">
        <a 
          href={`tel:${phoneNumber.replace(/\s/g, '')}`}
          className="w-12 h-12 rounded-full bg-[#e47a4f] flex items-center justify-center shadow-2xl shadow-[#e47a4f]/50 hover:shadow-[#e47a4f]/70 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-white" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
