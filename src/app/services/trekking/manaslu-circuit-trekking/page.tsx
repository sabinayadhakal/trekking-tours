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
  Utensils,
  Compass,
  Map,
  BookOpen,
  Cloud,
  Wind,
  Sun,
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const ManasluCircuitTrekPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Image gallery for Manaslu - Lighter mountain blues
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-50 to-blue-100/30">
      {/* Header Section - Light Blue with Mountain Illustration */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-sky-100 to-blue-200 pt-12 pb-16"
      >
        {/* Mountain Illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/20 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-gradient-to-t from-blue-300/40 to-blue-400/20 rounded-tl-full rounded-tr-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-blue-400/30 to-blue-500/20 rounded-tl-full rounded-tr-full"></div>
          <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-gradient-to-t from-blue-300/30 to-blue-400/15 rounded-tl-full rounded-tr-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/80 backdrop-blur-sm text-blue-800 border-blue-200">
              <Mountain className="mr-2 h-3 w-3" />
              RESTRICTED AREA TREK • SINCE 2015
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 leading-tight">
              Manaslu Circuit Trek
            </h1>
            
            <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
              Complete the Circuit Around the World's Eighth Highest Mountain
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-blue-200">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-blue-800 font-medium">{trekData.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-blue-200">
                <Thermometer className="h-4 w-4 text-blue-600" />
                <span className="text-blue-800 font-medium">{trekData.maxAltitude}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-blue-200">
                <Footprints className="h-4 w-4 text-blue-600" />
                <span className="text-blue-800 font-medium">{trekData.difficulty}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-blue-200">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-blue-800 font-medium">{trekData.groupSize}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-2">
                {renderStars()}
                <span className="text-blue-800 font-semibold">{trekData.rating}</span>
                <span className="text-blue-700">(127 reviews)</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowBookingForm(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Trek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-blue-800 border-blue-300 hover:border-blue-400 px-10 py-6 rounded-full text-lg hover:shadow-lg transition-all duration-300"
                onClick={() => scrollToSection('itinerary')}
              >
                <Compass className="mr-2 h-5 w-5" />
                View Itinerary
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Gallery Section - Vertical Arrangement */}
      <section className="py-12 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Visual Journey</h2>
              <p className="text-blue-700">Experience Manaslu through stunning photography</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manasluImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden shadow-lg border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] relative overflow-hidden group">
                    <img
                      src={image}
                      alt={`Manaslu Trek ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm">
                        {index === 0 ? "Majestic Manaslu Peak" : 
                         index === 1 ? "Alpine Trail" : 
                         index === 2 ? "Glacial River Valley" :
                         index === 3 ? "Traditional Village" :
                         index === 4 ? "Local Culture" : "Suspension Bridge"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <div 
        ref={headerRef}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isSticky ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Mountain className="h-6 w-6 text-blue-700" />
              <span className="font-bold text-blue-800 text-lg hidden sm:inline">Manaslu Circuit</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {['overview', 'itinerary', 'highlights', 'cost', 'faq'].map((section, index) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors ${
                      currentImageIndex === index 
                        ? 'text-blue-600 border-b-2 border-blue-500' 
                        : 'text-blue-800 hover:text-blue-600'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-800">
                      ${trekData.price}
                    </span>
                    <span className="text-blue-600 line-through text-sm">
                      ${trekData.originalPrice}
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => setShowBookingForm(true)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar Images */}
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
                <Card className="border border-blue-200 shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 border-b border-blue-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                        <Compass className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-blue-900">Trek Overview</h2>
                        <p className="text-blue-700">Journey around Mount Manaslu (8,163m)</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6 text-blue-800">
                      {trekData.overview.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200">
                      <div className="flex items-start gap-4">
                        <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-blue-900 text-xl mb-2">Permit Information</h3>
                          <p className="text-blue-700">
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
                <Card className="border border-blue-200 shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 border-b border-blue-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-blue-900">Trip Highlights</h2>
                        <p className="text-blue-700">Unforgettable experiences await</p>
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
                          className="flex items-start gap-4 bg-white p-5 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                        >
                          <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-full p-3 flex-shrink-0">
                            <Check className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-blue-800 text-lg font-medium">{highlight}</span>
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
                <Card className="border border-blue-200 shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 border-b border-blue-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                          <Map className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-blue-900">Detailed Itinerary</h2>
                          <p className="text-blue-700">20 Days Complete Journey</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="bg-white/80 backdrop-blur-sm hover:bg-white text-blue-800 border-blue-300"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <div className="divide-y divide-blue-100">
                      {trekData.itinerary.map((day, index) => (
                        <motion.div
                          key={day.day}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="p-6 hover:bg-blue-50/50 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center text-white">
                                <div className="text-center">
                                  <div className="font-bold text-lg">{day.day}</div>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <div className="text-blue-600">
                                    {day.icon}
                                  </div>
                                  <h3 className="font-bold text-blue-900 text-xl">{day.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 text-blue-700">
                                  <Thermometer className="h-4 w-4" />
                                  <span className="font-medium">{day.altitude}</span>
                                </div>
                              </div>
                            </div>
                            {day.day === 12 && (
                              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                                Acclimatization Day
                              </Badge>
                            )}
                            {day.day === 15 && (
                              <Badge className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 border-red-200">
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
                <Card className="border border-blue-200 shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 border-b border-blue-200">
                    <h2 className="text-3xl font-bold text-blue-900">Cost Details</h2>
                    <p className="text-blue-700">Transparent pricing with no hidden fees</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Included */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 flex items-center justify-center">
                            <Check className="h-7 w-7 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-blue-900">Cost Includes</h3>
                            <p className="text-blue-700">Everything covered in your package</p>
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
                              className="flex items-start gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-blue-800">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Excluded */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-pink-100 border border-red-200 flex items-center justify-center">
                            <X className="h-7 w-7 text-red-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-blue-900">Cost Excludes</h3>
                            <p className="text-blue-700">Additional personal expenses</p>
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
                              className="flex items-start gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-blue-800">{item}</span>
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
                <Card className="border border-blue-200 shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 border-b border-blue-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-blue-900">Frequently Asked Questions</h2>
                        <p className="text-blue-700">Your questions answered</p>
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
                          className="border border-blue-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
                          >
                            <h3 className="font-bold text-blue-900 text-lg pr-8">{faq.question}</h3>
                            {openFaqs.includes(index) ? (
                              <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
                                <p className="text-blue-700 leading-relaxed">{faq.answer}</p>
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
              <Card className="border border-blue-200 shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-blue-100">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800 font-medium">Duration</span>
                      </div>
                      <span className="font-bold text-blue-900 text-lg">{trekData.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-blue-100">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800 font-medium">Max Altitude</span>
                      </div>
                      <span className="font-bold text-blue-900 text-lg">{trekData.maxAltitude}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-blue-100">
                      <div className="flex items-center gap-3">
                        <Footprints className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800 font-medium">Difficulty</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-red-100 to-orange-100 text-red-800 border-red-200">
                        {trekData.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-blue-100">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800 font-medium">Group Size</span>
                      </div>
                      <span className="font-bold text-blue-900 text-lg">{trekData.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-800 font-medium">Best Seasons</span>
                      </div>
                      <div className="text-right">
                        {trekData.bestSeasons.map((season, index) => (
                          <div key={index} className="font-bold text-blue-900">{season}</div>
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
              <Card className="border border-blue-200 shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-blue-600 to-sky-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">Ready to Trek?</h3>
                  <p className="text-blue-100">Reserve your Himalayan adventure</p>
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-blue-900">
                        ${trekData.price}
                      </span>
                      <div>
                        <span className="text-lg text-blue-600 line-through block">
                          ${trekData.originalPrice}
                        </span>
                        <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                          {trekData.discount}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-blue-700">per person • All inclusive package</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-700">Next Available Date</span>
                      <span className="font-bold text-blue-900">March 15, 2024</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-700">Spots Available</span>
                      <Badge className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200">4 left</Badge>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setShowBookingForm(true)}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                  
                  <p className="text-center text-sm text-blue-600 mt-4">
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
              <Card className="border border-blue-200 shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Himkala?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 hover:bg-blue-50/50 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">Expert Guides</h4>
                        <p className="text-sm text-blue-700">20+ years Himalayan experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-blue-50/50 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">Safety First</h4>
                        <p className="text-sm text-blue-700">Medical kits & emergency protocols</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 hover:bg-blue-50/50 rounded-lg transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">Local Support</h4>
                        <p className="text-sm text-blue-700">Supporting Nepalese communities</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border border-blue-200 shadow-lg rounded-2xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Need Assistance?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 hover:bg-blue-50/50 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-700">Call Us 24/7</p>
                        <p className="font-bold text-blue-900">+977-1-4412345</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-blue-50/50 rounded-lg transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-700">Email Support</p>
                        <p className="font-bold text-blue-900">info@himkala.com</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-blue-300 text-blue-800 hover:bg-blue-50 hover:border-blue-400"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Send Quick Inquiry
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Book Your Trek</h3>
                    <p className="text-blue-700">Manaslu Circuit • 20 Days</p>
                  </div>
                  <button 
                    onClick={() => setShowBookingForm(false)}
                    className="text-blue-500 hover:text-blue-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-blue-900">Package Price</p>
                        <p className="text-sm text-blue-700">All inclusive</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-900">${trekData.price}</div>
                        <div className="text-sm text-blue-600 line-through">${trekData.originalPrice}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+977 XXX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        Number of Travelers *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6+ people</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Dietary restrictions, medical conditions, or specific requests..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="rounded mt-1 border-blue-300 text-blue-600 focus:ring-blue-500" 
                      required 
                    />
                    <label htmlFor="terms" className="text-sm text-blue-700">
                      I agree to the terms and understand this is a challenging high-altitude trek.
                    </label>
                  </div>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setShowBookingForm(false);
                      alert('Thank you! We will contact you within 24 hours.');
                    }}
                  >
                    Submit Booking Request
                  </Button>
                  
                  <p className="text-center text-sm text-blue-600">
                    We'll confirm your booking within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManasluCircuitTrekPage;