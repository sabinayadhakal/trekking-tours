"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Mountain, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Check, 
  X, 
  Star, 
  ArrowRight,
  Shield,
  Award,
  Heart,
  Thermometer,
  Footprints,
  Camera,
  Globe,
  Phone,
  Mail,
  Download,
  ChevronDown,
  ChevronUp,
  Home,
  Compass,
  Map,
  BookOpen,
  Cloud,
  Wind,
  Sun,
  MessageCircle,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const ManasluCircuitTrekPage = () => {
  const router = useRouter();
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Image gallery for Manaslu - Mountain-themed images
  const manasluImages = [
    "/images/manaslu-mountain-1.jpg",
    "/images/manaslu-mountain-2.jpg",
    "/images/manaslu-mountain-3.jpg",
    "/images/manaslu-village-1.jpg",
    "/images/manaslu-village-2.jpg",
    "/images/manaslu-trail-1.jpg"
  ];

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
      
      // Check which section is visible
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentImageIndex(Math.min(index, manasluImages.length - 1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate images when not scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % manasluImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Fade in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // WhatsApp Booking Handler
  const handleWhatsAppBooking = () => {
    const phoneNumber = "+9779841376470";
    
    // Construct the message
    let message = `Hello! I'm interested in booking the "${trekData.title}" package.\n\n`;
    message += `I would like to know more information about:\n`;
    message += `- Availability and dates\n`;
    message += `- Booking process\n`;
    message += `- Detailed itinerary\n`;
    message += `- What's included\n\n`;
    message += `Please provide me with more information. Thank you!`;
    
    // Add package details
    message += `\n\nPackage Details:\n`;
    message += `- Duration: ${trekData.duration}\n`;
    message += `- Price: $${trekData.price}\n`;
    message += `- Difficulty: ${trekData.difficulty}\n`;
    message += `- Max Altitude: ${trekData.maxAltitude}\n`;
    message += `- Group Size: ${trekData.groupSize}\n`;
    
    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Customize Trip Handler - Redirect to contact page with trek name
  const handleCustomizeTrip = () => {
    // Encode the trek name for URL parameter
    const trekName = encodeURIComponent(trekData.title);
    // Redirect to contact page with trek name as query parameter
    router.push(`/contact?trek=${trekName}`);
  };

  // Data
  const trekData = {
    title: "Manaslu Circuit Trek",
    subtitle: "A Journey Around the Eighth Highest Mountain",
    duration: "20 Days",
    difficulty: "Challenging",
    rating: 4.9,
    price: 1250,
    originalPrice: 1350,
    discount: "Save $100",
    maxAltitude: "5,106m (Larkya La Pass)",
    groupSize: "4-12 People",
    bestSeasons: ["Spring (Mar-May)", "Autumn (Sep-Nov)"],
    
    overview: `Manaslu Circuit Trekking focuses on wilderness and authentic village experiences. This spectacular trek wraps around Mount Manaslu, the world's eighth highest peak (8,163m). The journey begins by climbing against the current of the Budhi Gandaki River through dramatic gorges where glaciers hang from frozen eaves of the planet.

We cross suspension bridges and pass through fields of barley, following ancient routes where Tibetan salt-trading caravans have traveled for millennia. As we climb higher, we step into Tibetan territory where architecture changes and monasteries, Mani walls, and Chortens dot the landscape.

The trail crosses the legendary land of Gorkha where herder's huts lay tucked high in thawing meadows. Close to a dozen peaks over 21,000 ft. serrate the horizon as we approach Larkya La Pass, the highest point at 17,175 ft.

The Manaslu Conservation Area requires special permits and a registered guide - this extra requirement helps preserve the region's pristine beauty and keeps it less crowded than other popular treks.`,

    highlights: [
      "Complete circuit of Mount Manaslu (8,163m)",
      "Crossing the dramatic Larkya La Pass (5,106m)",
      "Authentic Tibetan Buddhist villages and monasteries",
      "Ancient salt-trading routes and suspension bridges",
      "Natural hot springs and diverse ecosystems",
      "Rich cultural exchange with local communities"
    ],

    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", altitude: "1,350m", icon: <Home /> },
      { day: 2, title: "Kathmandu Heritage Tour & Preparation", altitude: "1,350m", icon: <Compass /> },
      { day: 3, title: "Drive to Aarughat Bazaar", altitude: "570m", icon: <Map /> },
      { day: 4, title: "Trek to Sotikhola", altitude: "730m", icon: <Footprints /> },
      { day: 5, title: "Trek to Machhakhola", altitude: "930m", icon: <Footprints /> },
      { day: 6, title: "Trek to Dovan", altitude: "1,070m", icon: <Footprints /> },
      { day: 7, title: "Trek to Philim", altitude: "1,570m", icon: <Footprints /> },
      { day: 8, title: "Trek to Deng", altitude: "1,860m", icon: <Footprints /> },
      { day: 9, title: "Trek to Namrung", altitude: "2,540m", icon: <Mountain /> },
      { day: 10, title: "Trek to Lho", altitude: "3,020m", icon: <Mountain /> },
      { day: 11, title: "Trek to Samagaun", altitude: "3,390m", icon: <Mountain /> },
      { day: 12, title: "Acclimatization Day", altitude: "3,390m", icon: <Cloud /> },
      { day: 13, title: "Trek to Samdo", altitude: "3,690m", icon: <Wind /> },
      { day: 14, title: "Trek to Dharamshala", altitude: "4,460m", icon: <Wind /> },
      { day: 15, title: "Cross Larkya La Pass", altitude: "5,106m", icon: <Award /> },
      { day: 16, title: "Trek to Bhimthang", altitude: "3,590m", icon: <Footprints /> },
      { day: 17, title: "Trek to Tilije", altitude: "2,300m", icon: <Footprints /> },
      { day: 18, title: "Trek to Jagat", altitude: "1,300m", icon: <Footprints /> },
      { day: 19, title: "Drive to Kathmandu", altitude: "1,350m", icon: <Map /> },
      { day: 20, title: "Departure", altitude: "1,350m", icon: <Sun /> }
    ],

    includes: [
      "Airport transfers in private tourist vehicle",
      "3 nights in 3-star hotels in Kathmandu with breakfast",
      "Guided heritage tour of Kathmandu valley",
      "All meals during trek (breakfast, lunch, dinner)",
      "Teahouse/lodge accommodation during trek",
      "Professional English-speaking trekking guide",
      "Porters (1 porter for every 2 trekkers)",
      "All staff salaries, insurance, and equipment",
      "Manaslu Conservation Area permit & special permit",
      "TIMS card and restricted area entry permit",
      "Down jacket and sleeping bag (if needed)",
      "All camping equipment for camping option",
      "Transport: Kathmandu-Aarughat & Beshishahar-Kathmandu",
      "Farewell dinner with cultural show",
      "All government taxes and service charges"
    ],

    excludes: [
      "Lunch and dinner in Kathmandu",
      "Monument entrance fees in Kathmandu",
      "Emergency rescue and evacuation",
      "Travel insurance (mandatory)",
      "Nepal entry visa fee",
      "Personal expenses (phone, laundry, drinks)",
      "Personal trekking equipment",
      "Tips for guides and porters",
      "Expenses not mentioned in 'Includes'"
    ],

    faqs: [
      {
        question: "How difficult is the Manaslu Circuit Trek?",
        answer: "The Manaslu Circuit is rated as challenging. You'll be hiking 5-7 hours daily at high altitudes, with the Larkya La Pass crossing being the most demanding day. Good physical fitness and previous high-altitude trekking experience are recommended."
      },
      {
        question: "What's the best time to do this trek?",
        answer: "Spring (March-May) and Autumn (September-November) are ideal. These seasons offer clear skies, stable weather, and optimal mountain views. October is particularly popular with beautiful autumn colors."
      },
      {
        question: "What kind of accommodation is provided?",
        answer: "We use clean, comfortable teahouses along the route. Rooms are basic but cozy, with shared bathrooms. In Kathmandu, you'll stay in 3-star hotels with modern amenities."
      },
      {
        question: "Is altitude sickness a concern?",
        answer: "Yes, proper acclimatization is crucial. Our itinerary includes acclimatization days, and our guides are trained to recognize symptoms. We ascend gradually and provide guidance on preventing AMS."
      },
      {
        question: "What should I pack for this trek?",
        answer: "Essential items include: sturdy hiking boots, layered clothing (thermals, fleece, down jacket), waterproof gear, sleeping bag (we can provide), trekking poles, headlamp, personal medication, and high SPF sunscreen."
      }
    ]
  };

  // Render star rating
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(trekData.rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set section refs
  const setSectionRef = (index: number, element: HTMLElement | null) => {
    sectionRefs.current[index] = element;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F8FF]/40 via-[#CFE8FF]/30 to-[#A6D4FF]/20">
      {/* Image Gallery Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-3 gap-0 h-[85vh]">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="col-span-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3C6AA6]/40 via-[#468faf]/20 to-transparent z-10" />
            <img
              src={manasluImages[0]}
              alt="Manaslu Mountain"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white max-w-2xl"
              >
                <Badge className="mb-4 bg-white/20 backdrop-blur-md text-white border-white/30">
                  <Mountain className="mr-2 h-3 w-3" />
                  RESTRICTED AREA TREK
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  Manaslu Circuit Trek
                </h1>
                <p className="text-xl text-slate-200 mb-6">
                  Complete the Circuit Around the World's Eighth Highest Mountain
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#3C6AA6] hover:bg-[#468faf] text-white px-8 py-6 rounded-full text-lg font-semibold border border-white/20 shadow-xl transition-all duration-200"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Images */}
          <div className="grid grid-rows-2 gap-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#3C6AA6]/40 to-transparent z-10" />
              <img
                src={manasluImages[1]}
                alt="Mountain Trail"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-medium">Alpine Trail</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#3C6AA6]/40 to-transparent z-10" />
              <img
                src={manasluImages[2]}
                alt="Mountain Village"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-medium">Traditional Village</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 right-8 z-30"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#3C6AA6]/20">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-[#3C6AA6]">
                  ${trekData.price}
                </span>
                <span className="text-[#468faf] line-through text-lg">
                  ${trekData.originalPrice}
                </span>
              </div>
              <Badge className="bg-[#468faf] text-white border-0">
                {trekData.discount}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#E3F8FF] flex items-center justify-center mx-auto mb-2">
                  <Calendar className="h-5 w-5 text-[#3C6AA6]" />
                </div>
                <p className="text-sm text-[#3C6AA6]/80">Duration</p>
                <p className="font-semibold text-[#3C6AA6]">{trekData.duration}</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#E3F8FF] flex items-center justify-center mx-auto mb-2">
                  <Thermometer className="h-5 w-5 text-[#3C6AA6]" />
                </div>
                <p className="text-sm text-[#3C6AA6]/80">Max Altitude</p>
                <p className="font-semibold text-[#3C6AA6]">{trekData.maxAltitude}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Gallery Grid */}
      <section className="py-12 bg-[#E3F8FF]/40">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {manasluImages.slice(3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <div 
        ref={headerRef}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isSticky ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#3C6AA6]/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Mountain className="h-6 w-6 text-[#3C6AA6]" />
              <span className="font-bold text-[#3C6AA6] text-lg hidden sm:inline">Manaslu Circuit</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {['overview', 'itinerary', 'highlights', 'cost', 'faq'].map((section, index) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors ${
                      currentImageIndex === index 
                        ? 'text-[#3C6AA6] border-b-2 border-[#468faf]' 
                        : 'text-[#468faf] hover:text-[#3C6AA6]'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#3C6AA6]">
                      ${trekData.price}
                    </span>
                    <span className="text-[#468faf] line-through text-sm">
                      ${trekData.originalPrice}
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="bg-[#3C6AA6] hover:bg-[#468faf] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section 
              id="overview" 
              ref={el => setSectionRef(0, el)}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <div className="bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] p-8 border-b border-[#3C6AA6]/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3C6AA6] flex items-center justify-center">
                        <Compass className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-[#3C6AA6]">Trek Overview</h2>
                        <p className="text-[#468faf]">Journey around Mount Manaslu (8,163m)</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6 text-[#3C6AA6]">
                      {trekData.overview.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#E3F8FF]/60 to-[#CFE8FF]/60 border border-[#3C6AA6]/20">
                      <div className="flex items-start gap-4">
                        <Shield className="h-8 w-8 text-[#3C6AA6] flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-[#3C6AA6] text-xl mb-2">Permit Information</h3>
                          <p className="text-[#468faf]">
                            Manaslu Conservation Area requires special permits and a registered guide. This regulation helps preserve the region's pristine environment and cultural heritage, ensuring a more authentic experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Highlights */}
            <section 
              id="highlights" 
              ref={el => setSectionRef(1, el)}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <div className="bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] p-8 border-b border-[#3C6AA6]/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3C6AA6] flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-[#3C6AA6]">Trip Highlights</h2>
                        <p className="text-[#468faf]">Unforgettable experiences await</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {trekData.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-4 bg-[#E3F8FF]/40 p-5 rounded-xl border border-[#3C6AA6]/20 hover:border-[#468faf] hover:shadow-md transition-all duration-300"
                        >
                          <div className="bg-[#E3F8FF] rounded-full p-3 flex-shrink-0">
                            <Check className="h-5 w-5 text-[#3C6AA6]" />
                          </div>
                          <span className="text-[#3C6AA6] text-lg font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Detailed Itinerary */}
            <section 
              id="itinerary" 
              ref={el => setSectionRef(2, el)}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <div className="bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] p-8 border-b border-[#3C6AA6]/20">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#3C6AA6] flex items-center justify-center">
                          <Map className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-[#3C6AA6]">Detailed Itinerary</h2>
                          <p className="text-[#468faf]">20 Days Complete Journey</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="bg-white hover:bg-[#E3F8FF]/50 text-[#3C6AA6] border-[#3C6AA6]/30"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <div className="divide-y divide-[#E3F8FF]">
                      {trekData.itinerary.map((day, index) => (
                        <motion.div
                          key={day.day}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="p-6 hover:bg-[#E3F8FF]/30 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#3C6AA6] flex items-center justify-center text-white">
                                <div className="text-center">
                                  <div className="font-bold text-lg">{day.day}</div>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <div className="text-[#3C6AA6]">
                                    {day.icon}
                                  </div>
                                  <h3 className="font-bold text-[#3C6AA6] text-xl">{day.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 text-[#468faf]">
                                  <Thermometer className="h-4 w-4" />
                                  <span className="font-medium">{day.altitude}</span>
                                </div>
                              </div>
                            </div>
                            {day.day === 12 && (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                                Acclimatization Day
                              </Badge>
                            )}
                            {day.day === 15 && (
                              <Badge className="bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 border-rose-200">
                                Challenge Day
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Cost Include/Exclude */}
            <section 
              id="cost" 
              ref={el => setSectionRef(3, el)}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <div className="bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] p-8 border-b border-[#3C6AA6]/20">
                    <h2 className="text-3xl font-bold text-[#3C6AA6]">Cost Details</h2>
                    <p className="text-[#468faf]">Transparent pricing with no hidden fees</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Included */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                            <Check className="h-7 w-7 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#3C6AA6]">Cost Includes</h3>
                            <p className="text-[#468faf]">Everything covered in your package</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {trekData.includes.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors"
                            >
                              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-[#3C6AA6]">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Excluded */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                            <X className="h-7 w-7 text-rose-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#3C6AA6]">Cost Excludes</h3>
                            <p className="text-[#468faf]">Additional personal expenses</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {trekData.excludes.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors"
                            >
                              <X className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                              <span className="text-[#3C6AA6]">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Trip FAQ */}
            <section 
              id="faq" 
              ref={el => setSectionRef(4, el)}
              className="scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl overflow-hidden bg-white">
                  <div className="bg-gradient-to-r from-[#E3F8FF] to-[#CFE8FF] p-8 border-b border-[#3C6AA6]/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3C6AA6] flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-[#3C6AA6]">Frequently Asked Questions</h2>
                        <p className="text-[#468faf]">Your questions answered</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {trekData.faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border border-[#3C6AA6]/20 rounded-xl overflow-hidden hover:border-[#468faf] transition-colors duration-300"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-[#E3F8FF]/30 transition-colors"
                          >
                            <h3 className="font-bold text-[#3C6AA6] text-lg pr-8">{faq.question}</h3>
                            {openFaqs.includes(index) ? (
                              <ChevronUp className="h-5 w-5 text-[#3C6AA6] flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-[#3C6AA6] flex-shrink-0" />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {openFaqs.includes(index) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6 pt-2"
                              >
                                <p className="text-[#468faf] leading-relaxed">{faq.answer}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#3C6AA6] mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-[#E3F8FF]">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-[#3C6AA6]" />
                        <span className="text-[#3C6AA6] font-medium">Duration</span>
                      </div>
                      <span className="font-bold text-[#3C6AA6] text-lg">{trekData.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#E3F8FF]">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-5 w-5 text-[#3C6AA6]" />
                        <span className="text-[#3C6AA6] font-medium">Max Altitude</span>
                      </div>
                      <span className="font-bold text-[#3C6AA6] text-lg">{trekData.maxAltitude}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#E3F8FF]">
                      <div className="flex items-center gap-3">
                        <Footprints className="h-5 w-5 text-[#3C6AA6]" />
                        <span className="text-[#3C6AA6] font-medium">Difficulty</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 border-rose-200">
                        {trekData.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#E3F8FF]">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-[#3C6AA6]" />
                        <span className="text-[#3C6AA6] font-medium">Group Size</span>
                      </div>
                      <span className="font-bold text-[#3C6AA6] text-lg">{trekData.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-[#3C6AA6]" />
                        <span className="text-[#3C6AA6] font-medium">Best Seasons</span>
                      </div>
                      <div className="text-right">
                        {trekData.bestSeasons.map((season, index) => (
                          <div key={index} className="font-bold text-[#3C6AA6]">{season}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl overflow-hidden bg-white">
                <div className="bg-[#3C6AA6] p-6 text-white">
                  <h3 className="text-2xl font-bold">Ready to Trek?</h3>
                  <p className="text-[#CFE8FF]">Reserve your Himalayan adventure</p>
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-[#3C6AA6]">
                        ${trekData.price}
                      </span>
                      <div>
                        <span className="text-lg text-[#468faf] line-through block">
                          ${trekData.originalPrice}
                        </span>
                        <Badge className="bg-[#468faf] text-white border-0">
                          {trekData.discount}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-[#468faf]">per person • All inclusive package</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#468faf]">Next Available Date</span>
                      <span className="font-bold text-[#3C6AA6]">March 15, 2024</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#468faf]">Spots Available</span>
                      <Badge className="bg-rose-500 text-white border-0">4 left</Badge>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-[#3C6AA6] hover:bg-[#468faf] text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                  
                  <p className="text-center text-sm text-[#468faf] mt-4">
                    Free cancellation up to 30 days before
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#3C6AA6] mb-6">Why Himkala?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-[#E3F8FF] flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-[#3C6AA6]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3C6AA6]">Expert Guides</h4>
                        <p className="text-sm text-[#468faf]">10+ years Himalayan experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-[#E3F8FF] flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-[#3C6AA6]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3C6AA6]">Safety First</h4>
                        <p className="text-sm text-[#468faf]">Medical kits & emergency protocols</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-[#E3F8FF] flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-[#3C6AA6]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3C6AA6]">Local Support</h4>
                        <p className="text-sm text-[#468faf]">Supporting Nepalese communities</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Card - UPDATED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border border-[#3C6AA6]/20 shadow-lg rounded-2xl bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#3C6AA6] mb-6">Need Assistance?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#3C6AA6] flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#468faf]">Call Us 24/7</p>
                        <p className="font-bold text-[#3C6AA6]">+977-1-4412345</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-[#E3F8FF]/30 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#3C6AA6] flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#468faf]">Email Support</p>
                        <p className="font-bold text-[#3C6AA6]">info@himkala.com</p>
                      </div>
                    </div>
                  </div>
                 <Button 
  onClick={handleCustomizeTrip}
  className="bg-[#2C5282] hover:bg-[#3182CE] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-semibold border-0"
>
  <div className="flex items-center justify-center gap-2">
    {/* Simple mountain icon */}
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
    </svg>
    Customize This Trip By Yourself
  </div>
</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={handleWhatsAppBooking}
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-lg hover:shadow-xl transition-all duration-200"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ManasluCircuitTrekPage;  