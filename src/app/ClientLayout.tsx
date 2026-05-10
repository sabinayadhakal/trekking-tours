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
  TimerReset
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
import { useRouter } from "next/navigation";

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
  category: 'destination' | 'service' | 'trek' | 'day-hiking' | 'sightseeing' | 'jungle-safari' | 'mountain-flight' | 'cultural-tour' | 'peak-climbing' | 'page';
  description?: string;
  icon?: React.ReactNode;
  subCategory?: string;
}

// Search data - comprehensive list of all your pages
const searchData: SearchResult[] = [
  // Main pages
  { title: "About Us", url: "/about-us", category: "page", icon: <FileText className="w-4 h-4" /> },
  { title: "Blog", url: "/blog", category: "page", icon: <BookOpen className="w-4 h-4" /> },
  { title: "Contact", url: "/contact", category: "page", icon: <Mail className="w-4 h-4" /> },

  // Destinations
  { title: "Bhutan", url: "/destinations/bhutan", category: "destination", icon: <Globe className="w-4 h-4" /> },
  { title: "Tibet", url: "/destinations/tibet", category: "destination", icon: <Globe className="w-4 h-4" /> },
  { title: "Nepal", url: "/destinations/nepal", category: "destination", icon: <Globe className="w-4 h-4" /> },

  // Bhutan Packages
  { title: "3 Nights 4 Days Bhutan Tour", url: "/destinations/bhutan/3-nights-4-days-bhutan-tour", category: "destination", subCategory: "bhutan", icon: <Landmark className="w-4 h-4" /> },
  { title: "Bhutan Cultural Tour", url: "/destinations/bhutan/bhutan-cultural-tour", category: "destination", subCategory: "bhutan", icon: <Landmark className="w-4 h-4" /> },
  { title: "Bhutan Festival Tour", url: "/destinations/bhutan/bhutan-festival-tour", category: "destination", subCategory: "bhutan", icon: <Music className="w-4 h-4" /> },
  { title: "Delightful Bhutan Tour", url: "/destinations/bhutan/delightful-bhutan-tour", category: "destination", subCategory: "bhutan", icon: <Sparkles className="w-4 h-4" /> },
  { title: "Druk Path Trek", url: "/destinations/bhutan/druk-path-trek", category: "destination", subCategory: "bhutan", icon: <Map className="w-4 h-4" /> },
  { title: "Jomolhari Trek", url: "/destinations/bhutan/jomolhari-trek", category: "destination", subCategory: "bhutan", icon: <MountainSnow className="w-4 h-4" /> },
  { title: "Short and Sweet Bhutan Tour", url: "/destinations/bhutan/short-and-sweet-bhutan-tour", category: "destination", subCategory: "bhutan", icon: <Sparkles className="w-4 h-4" /> },
  { title: "Snowman Trek", url: "/destinations/bhutan/snowman-trek", category: "destination", subCategory: "bhutan", icon: <Snowflake className="w-4 h-4" /> },
  { title: "Tiger's Nest Day Hiking", url: "/destinations/bhutan/tigers-nest-day-hiking", category: "destination", subCategory: "bhutan", icon: <Flag className="w-4 h-4" /> },

  // Tibet Packages
  { title: "Ancient Kingdoms Tour", url: "/destinations/tibet/ancient-kingdoms-tour", category: "destination", subCategory: "tibet", icon: <Castle className="w-4 h-4" /> },
  { title: "Everest Base Camp Tibet", url: "/destinations/tibet/everest-base-camp-tibet", category: "destination", subCategory: "tibet", icon: <Mountain className="w-4 h-4" /> },
  { title: "Kailash Mansarovar Yatra", url: "/destinations/tibet/kailash-mansarovar-yatra", category: "destination", subCategory: "tibet", icon: <Church className="w-4 h-4" /> },
  { title: "Lhasa City Tour", url: "/destinations/tibet/lhasa-city-tour", category: "destination", subCategory: "tibet", icon: <Building2 className="w-4 h-4" /> },
  { title: "Monastery Discovery Tour", url: "/destinations/tibet/monastery-discovery-tour", category: "destination", subCategory: "tibet", icon: <Church className="w-4 h-4" /> },
  { title: "Tibet Overland Tour", url: "/destinations/tibet/tibet-overland-tour", category: "destination", subCategory: "tibet", icon: <Map className="w-4 h-4" /> },
  { title: "Tibet Tour Namtso Lake", url: "/destinations/tibet/tibet-tour-namtso-lake", category: "destination", subCategory: "tibet", icon: <Waves className="w-4 h-4" /> },
  { title: "Tibet Unique Cultural Tour", url: "/destinations/tibet/tibet-unique-cultural-tour", category: "destination", subCategory: "tibet", icon: <Landmark className="w-4 h-4" /> },
  { title: "Tibetan Plateau Adventure", url: "/destinations/tibet/tibetan-plateau-adventure", category: "destination", subCategory: "tibet", icon: <Compass className="w-4 h-4" /> },

  // Services main pages
  { title: "Day Hikings", url: "/services/day-hikings", category: "service", icon: <Sun className="w-4 h-4" /> },
  { title: "Day Sightseeings", url: "/services/day-sightseeings", category: "service", icon: <Camera className="w-4 h-4" /> },
  { title: "Free Walking Tour", url: "/services/free-walking-tour", category: "service", icon: <Map className="w-4 h-4" /> },
  { title: "Jungle Safari", url: "/services/jungle-safari", category: "service", icon: <Trees className="w-4 h-4" /> },
  { title: "Mountain Flight & Heli Trip", url: "/services/mountain-flight-heli-trip", category: "service", icon: <Plane className="w-4 h-4" /> },
  { title: "Multi Day Cultural Tours", url: "/services/multi-day-cultural-tours", category: "service", icon: <Landmark className="w-4 h-4" /> },
  { title: "Peak Climbing", url: "/services/peak-climbing", category: "service", icon: <Mountain className="w-4 h-4" /> },
  { title: "Trekking", url: "/services/trekking", category: "service", icon: <Map className="w-4 h-4" /> },

  // Day Hikings
  { title: "Champa Devi Hiking", url: "/services/day-hikings/champa-devi-hiking", category: "day-hiking", icon: <Flag className="w-4 h-4" /> },
  { title: "Nagarkot Changunarayan Hiking", url: "/services/day-hikings/nagarkot-changunarayan-hiking", category: "day-hiking", icon: <Flag className="w-4 h-4" /> },
  { title: "Namobuddha Hiking", url: "/services/day-hikings/namobuddha-hiking", category: "day-hiking", icon: <Flag className="w-4 h-4" /> },

  // Day Sightseeings
  { title: "Bhaktapur Patan Sightseeing", url: "/services/day-sightseeings/bhaktapur-patan-sightseeing", category: "sightseeing", icon: <Camera className="w-4 h-4" /> },
  { title: "Bungamati Khokana Patan Sightseeing", url: "/services/day-sightseeings/bungamati-khokana-patan-sightseeing", category: "sightseeing", icon: <Camera className="w-4 h-4" /> },
  { title: "Bouddhanath Kapan Sightseeing", url: "/services/day-sightseeings/bouddhanath-kapan-sightseeing", category: "sightseeing", icon: <Camera className="w-4 h-4" /> },
  { title: "Changunarayan Bhaktapur Sanga Sightseeing", url: "/services/day-sightseeings/changunarayan-bhaktapur-sanga-sightseeing", category: "sightseeing", icon: <Camera className="w-4 h-4" /> },
  { title: "Dakshinkali Pharping Kirtipur Sightseeing", url: "/services/day-sightseeings/dakshinkali-pharping-kirtipur-sightseeing", category: "sightseeing", icon: <Camera className="w-4 h-4" /> },
  { title: "Kathmandu Sightseeing", url: "/services/day-sightseeings/kathmandu-sightseeing", category: "sightseeing", icon: <Camera className="w-4 h-4" /> },

  // Jungle Safari
  { title: "Chitwan National Park Jungle Safari", url: "/services/jungle-safari/chitwan-np-jungle-safari", category: "jungle-safari", icon: <Trees className="w-4 h-4" /> },

  // Mountain Flight & Heli Trip
  { title: "Annapurna Region Mountain Flight", url: "/services/mountain-flight-heli-trip/annapurna-region-mountain-flight-trip", category: "mountain-flight", icon: <Plane className="w-4 h-4" /> },
  { title: "Everest Region Helicopter Trip", url: "/services/mountain-flight-heli-trip/everest-region-helicopter-trip", category: "mountain-flight", icon: <Plane className="w-4 h-4" /> },
  { title: "Everest Region Mountain Flight", url: "/services/mountain-flight-heli-trip/everest-region-mountain-flight-trip", category: "mountain-flight", icon: <Plane className="w-4 h-4" /> },
  { title: "Langtang Region Helicopter Trip", url: "/services/mountain-flight-heli-trip/langtang-region-helicopter-trip", category: "mountain-flight", icon: <Plane className="w-4 h-4" /> },

  // Multi Day Cultural Tours
  { title: "Historic Nature Scenic Photography Tour", url: "/services/multi-day-cultural-tours/historic-nature-scenic-photography-tour", category: "cultural-tour", icon: <Camera className="w-4 h-4" /> },
  { title: "Kathmandu Bhaktapur Lalitpur Tour", url: "/services/multi-day-cultural-tours/kathmandu-bhaktapur-lalitpur-tour", category: "cultural-tour", icon: <Landmark className="w-4 h-4" /> },
  { title: "Kathmandu Pokhara Lumbini Chitwan Tour", url: "/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour", category: "cultural-tour", icon: <Map className="w-4 h-4" /> },
  { title: "Nepal Heritage Sites Tour", url: "/services/multi-day-cultural-tours/nepal-heritage-sites-tour", category: "cultural-tour", icon: <Landmark className="w-4 h-4" /> },
  { title: "Nepal Temples and Stupas Tour", url: "/services/multi-day-cultural-tours/nepal-temples-and-stupas-tour", category: "cultural-tour", icon: <Church className="w-4 h-4" /> },

  // Peak Climbing
  { title: "Island Peak Climbing", url: "/services/peak-climbing/island-peak-climbing", category: "peak-climbing", icon: <Mountain className="w-4 h-4" /> },
  { title: "Mera Peak Climbing", url: "/services/peak-climbing/mera-peak-climbing", category: "peak-climbing", icon: <Mountain className="w-4 h-4" /> },
  { title: "Pisang Peak Climbing", url: "/services/peak-climbing/pisang-peak-climbing", category: "peak-climbing", icon: <Mountain className="w-4 h-4" /> },
  { title: "Yala Peak Climbing", url: "/services/peak-climbing/yala-peak-climbing", category: "peak-climbing", icon: <Mountain className="w-4 h-4" /> },

  // Trekking
  { title: "Annapurna Base Camp Trek", url: "/services/trekking/annapurna-base-camp-trek", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Annapurna Circuit Trek", url: "/services/trekking/annapurna-circuit-trek", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Annapurna Circuit with Tilicho Lake", url: "/services/trekking/annapurna-circuit-trek-with-tilicho-lake", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Everest Base Camp Trek", url: "/services/trekking/everest-base-camp-trek", category: "trek", icon: <Mountain className="w-4 h-4" /> },
  { title: "Everest Gokyo Trek", url: "/services/trekking/gokyo-trek", category: "trek", icon: <Mountain className="w-4 h-4" /> },
  { title: "Everest Three Passes Trek", url: "/services/trekking/everest-three-passes-trek", category: "trek", icon: <Mountain className="w-4 h-4" /> },
  { title: "Ghorepani Poon Hill Trek", url: "/services/trekking/ghorepani-poon-hill-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Khopra Ridge with Khayar Lake", url: "/services/trekking/khopra-ridge-trek-with-khayar-lake", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Langtang Ganjala Pass Trek", url: "/services/trekking/langtang-ganjala-pass-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Langtang Gosainkunda Trek", url: "/services/trekking/langtang-gosainkunda-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Langtang Helambu Trek", url: "/services/trekking/langtang-helambu-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Langtang Valley Trek", url: "/services/trekking/langtang-valley-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Manaslu Circuit Trek", url: "/services/trekking/manaslu-circuit-trek", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Manaslu Circuit with Tsum Valley", url: "/services/trekking/manaslu-circuit-trek-with-tsum-valley", category: "trek", icon: <Map className="w-4 h-4" /> },
  { title: "Mardi Himal Trek", url: "/services/trekking/mardi-himal-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Nar Phu Trek", url: "/services/trekking/nar-phu-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Rupina La Trek", url: "/services/trekking/rupina-la-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Tamang Heritage Trail with Langtang", url: "/services/trekking/tamang-heritage-trail-and-langtang-valley-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
  { title: "Upper Mustang Trek", url: "/services/trekking/upper-mustang-trek", category: "trek", icon: <Flag className="w-4 h-4" /> },
];

// Group results by category for better organization
const categoryLabels: Record<string, string> = {
  destination: 'Destinations',
  service: 'Services',
  trek: 'Trekking Packages',
  'day-hiking': 'Day Hikings',
  sightseeing: 'Day Sightseeings',
  'jungle-safari': 'Jungle Safari',
  'mountain-flight': 'Mountain Flights & Heli Trips',
  'cultural-tour': 'Multi Day Cultural Tours',
  'peak-climbing': 'Peak Climbing',
  page: 'Pages'
};

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

// Destination dropdown component
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm"
      >
        Destinations
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 w-64 bg-[#153653]/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/30 overflow-hidden z-50"
          >
            <div className="py-2">
              <Link
                href="/destinations/nepal"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Nepal
              </Link>
              <Link
                href="/destinations/bhutan"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Bhutan
              </Link>
              <Link
                href="/destinations/tibet"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tibet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Services dropdown component
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm"
      >
        Our Services in Nepal
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 w-72 bg-[#153653]/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/30 overflow-hidden z-50"
          >
            <div className="py-2">
              <Link
                href="/services/free-walking-tour-kathmandu"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Free Walking Tour
              </Link>
              <Link
                href="/services/trekking"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Trekkings
              </Link>
              <Link
                href="/services/multi-day-cultural-tours"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Multi Day Cultural Tours
              </Link>
              <Link
                href="/services/day-hikings"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Day Hikings
              </Link>
              <Link
                href="/services/day-sightseeings"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Day Sightseeings
              </Link>
              <Link
                href="/services/mountain-flight-heli-trip"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Mountain Flights and Helicopter Sightseeings
              </Link>
              <Link
                href="/services/jungle-safari"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                Jungle Safari
              </Link>
              
              <Link
                href="/services/peak-climbing"
                className="block px-4 py-3 text-white/90 hover:text-[#C5E0ED] hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Peak Climbing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile dropdown components
const MobileDestinationsDropdown = ({ closeMenu }: { closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
      >
        <span className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#C5E0ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          Destinations
        </span>
        <ChevronDown className={`w-4 h-4 text-white/50 group-hover:text-[#C5E0ED] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-8 pt-2 space-y-1">
              <Link
                href="/destinations/nepal"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Nepal
              </Link>
              <Link
                href="/destinations/bhutan"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Bhutan
              </Link>
              <Link
                href="/destinations/tibet"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Tibet
              </Link>
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 text-lg font-medium text-white/90 hover:text-[#C5E0ED] hover:bg-[#153653]/60 rounded-xl transition-all active:scale-95 flex items-center justify-between backdrop-blur-sm border border-white/10 group"
      >
        <span className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#C5E0ED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          Our Services in Nepal
        </span>
        <ChevronDown className={`w-4 h-4 text-white/50 group-hover:text-[#C5E0ED] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-8 pt-2 space-y-1">
              <Link
                href="/services/free-walking-tour"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Free Walking Tour
              </Link>
              <Link
                href="/services/trekking"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Trekking
              </Link>
              <Link
                href="/services/multi-day-cultural-tours"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Multi Day Cultural Tours
              </Link>
              <Link
                href="/services/day-hikings"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Day Hikings
              </Link>
              <Link
                href="/services/day-sightseeings"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Day Sightseeings
              </Link>
              <Link
                href="/services/mountain-flight-heli-trip"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Mountain Flights and Helicopter Sightseeings
              </Link>
              <Link
                href="/services/jungle-safari"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Jungle Safari
              </Link>
              
              <Link
                href="/services/peak-climbing"
                className="block py-3 px-4 text-white/80 hover:text-[#C5E0ED] hover:bg-[#153653]/40 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Peak Climbing
              </Link>
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
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(query)
    );
    
    // Sort results: exact matches first, then starts with, then includes
    filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      if (aTitle === query) return -1;
      if (bTitle === query) return 1;
      if (aTitle.startsWith(query) && !bTitle.startsWith(query)) return -1;
      if (bTitle.startsWith(query) && !aTitle.startsWith(query)) return 1;
      return aTitle.indexOf(query) - bTitle.indexOf(query);
    });
    
    setResults(filtered.slice(0, 10)); // Limit to 10 results
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      handleResultClick(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url);
    onClose();
    setSearchQuery("");
  };

  // Group results by category
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={searchRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 top-full bg-[#153653]/95 backdrop-blur-xl border-t border-white/20 shadow-xl z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={(e) => {
              e.preventDefault();
              if (results.length > 0) {
                handleResultClick(results[0]);
              }
            }} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search destinations, treks, tours, packages..."
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C5E0ED] focus:border-transparent backdrop-blur-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>

            {/* Search Results */}
            {searchQuery && (
              <div className="mt-4 max-h-[60vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {Object.entries(groupedResults).map(([category, categoryResults]) => (
                      <div key={category} className="space-y-2">
                        <h3 className="text-xs font-semibold text-[#C5E0ED] uppercase tracking-wider px-3">
                          {categoryLabels[category] || category}
                        </h3>
                        <div className="space-y-1">
                          {categoryResults.map((result, index) => {
                            const globalIndex = results.indexOf(result);
                            return (
                              <button
                                key={result.url}
                                onClick={() => handleResultClick(result)}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                                  selectedIndex === globalIndex
                                    ? 'bg-[#C5E0ED]/20 text-white border border-[#C5E0ED]/30'
                                    : 'text-white/80 hover:bg-white/10'
                                }`}
                              >
                                <span className="text-[#C5E0ED]">
                                  {result.icon}
                                </span>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{result.title}</div>
                                  {result.subCategory && (
                                    <div className="text-xs text-white/40 mt-0.5 capitalize">
                                      {result.subCategory}
                                    </div>
                                  )}
                                </div>
                                <ChevronRight className="w-4 h-4 text-white/40" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-white/50">
                    <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            )}

            {/* Search Suggestions */}
            {!searchQuery && (
              <div className="mt-4 text-white/70 text-sm">
                <p className="mb-3 text-xs text-[#C5E0ED] uppercase tracking-wider">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Everest Base Camp", 
                    "Annapurna Circuit", 
                    "Bhutan Tour", 
                    "Tibet Tour", 
                    "Island Peak", 
                    "Chitwan Safari",
                    "Kathmandu Sightseeing",
                    "Free Walking Tour"
                  ].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setSearchQuery(term);
                      }}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 transition-colors text-sm"
                    >
                      {term}
                    </button>
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
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#C5E0ED] font-medium leading-none drop-shadow-lg">Private Limited</span>
            </div>
            <div className="sm:hidden backdrop-blur-sm bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
              <span className="text-base font-bold tracking-tight text-white drop-shadow-lg">Himkala Adventure</span>
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
            <DestinationsDropdown />
            
            {/* Services Dropdown */}
            <ServicesDropdown />
            
            {/* Other Navigation Items */}
            <Link 
              href="/about-us"
              className="text-sm font-medium text-white/90 hover:text-[#C5E0ED] transition-colors hover:scale-105 active:scale-95 px-3 py-1.5 rounded-lg hover:bg-white/5 backdrop-blur-sm"
              onClick={closeMenu}
            >
              About Us
            </Link>
            
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
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

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
              <div className="container mx-auto px-4 sm:px-6 py-6 h-full overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex flex-col space-y-2">
                      {/* Mobile Destinations Dropdown */}
                      <MobileDestinationsDropdown closeMenu={closeMenu} />
                      
                      {/* Mobile Services Dropdown */}
                      <MobileServicesDropdown closeMenu={closeMenu} />
                      
                      {/* About Us */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
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
                        transition={{ delay: 0.15 }}
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
                        transition={{ delay: 0.2 }}
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
                        transition={{ delay: 0.25 }}
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
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
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
                      <div className="flex items-center justify-center gap-4 text-white/40">
                        <Clock className="w-3 h-3" />
                        <span>Daily 9AM - 6PM</span>
                        <Shield className="w-3 h-3" />
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

      {/* Main content with safe area for mobile - Adjusted for larger logo */}
      <main className="pt-20 md:pt-24">
        {children}
      </main>

      {/* CTA Section - Mobile Optimized with Navbar Color */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#153653]/90 backdrop-blur-sm relative overflow-hidden border-t border-white/20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/used/cta.avif')] bg-cover bg-center opacity-20"></div>
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
                <span className="text-white/90 text-sm font-medium">With every trip comes new optimism...</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
What's Your <span className="text-[#C5E0ED]">Perfect</span><br className="hidden sm:block" /> Adventure?              </h2>
              
              <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed px-4">
You dream it. We plan it. Let's build your adventure together.              </p>
              
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
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 h-14 sm:h-16 px-8 sm:px-10 rounded-full text-lg backdrop-blur-sm hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-3 w-5 h-5" />
                    <span className="font-medium">WhatsApp Us</span>
                  </a>
                </Button>
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
Real adventures. Real connections. Nepal, Bhutan, and Tibet since 2015.             </p>
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
    {[
       { name: "Free Walking Tour", url: "/services/free-walking-tour" },
        { name: "Manaslu Circuit", url: "/services/trekking/manaslu-circuit-trek" },

      { name: "Everest Base Camp", url: "/services/trekking/everest-base-camp-trek" },
      { name: "Annapurna Circuit", url: "/services/trekking/annapurna-circuit-trek" },
      { name: "Langtang Valley", url: "/services/trekking/langtang-valley-trek" },
      { name: "Kathmandu, Pokhara, Lumbini, Chitwan Tour", url: "/services/multi-day-cultural-tours/kathmandu-pokhara-lumbini-chitwan-tour" },

    ].map((trek) => (
      <li key={trek.name}>
        <Link 
          href={trek.url}
          className="hover:text-[#C5E0ED] transition-colors flex items-center gap-2 py-1 group"
        >
          <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          {trek.name}
        </Link>
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
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-[#C5E0ED] transition-colors">
                    {phoneNumber}
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
          href={`tel:${phoneNumber.replace(/\s/g, '')}`}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4285F4] via-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>
    </>
  );
}