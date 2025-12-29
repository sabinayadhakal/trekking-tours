"use client";

import { Check, Mountain, Users, Clock, Star, MapPin, Calendar, Building } from "lucide-react";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

type Package = {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Easy to Moderate";
  groupSize: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  type: "trek" | "city" | "cultural-tour" | "overland-tour" | "short-tour" | "festival-tour" | "pilgrimage-trek";
  highlights: string[];
};  

type PackageData = {
  [key: string]: Package[];
};

const theme = {
  primary: "#295d7a",
  secondary: "#3a6e8c",
  light: "#d9ebf7",
  gradientStart: "#e8f3fa",
  gradientEnd: "#92bdd8",
};

const ToggleTabsPricing = () => {
  const [activeTab, setActiveTab] = useState("nepal");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef<string>("nepal");

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const packageData: PackageData = useMemo(() => ({
    nepal: [
      {
        id: "np-1",
        name: "Everest Base Camp Trek – Classic Route to the Foot of the World's Highest Peak",
        description: "Conquer the iconic trek to Everest Base Camp. Experience breathtaking panoramic Himalayan views, immerse in authentic Sherpa culture, and visit ancient monasteries on this challenging 14-day adventure.",
        duration: "14 Days",
        difficulty: "Challenging",
        groupSize: "2–12 people",
        price: 1450,
        rating: 4.8,
        reviews: 320,
        location: "Khumbu Region, Nepal",
        type: "trek",
        highlights: [
          "Panoramic views of Everest, Lhotse, and Ama Dablam",
          "Immersive Sherpa culture and villages",
          "Visit historic Tengboche Monastery",
          "Trek through UNESCO Sagarmatha National Park",
          "Kala Patthar summit for iconic sunrise views",
          "Full support team including guides and porters"
        ]
      },
      {
        id: "np-2",
        name: "Annapurna Base Camp Trek - Himalayan Panorama Journey",
        description: "Journey through diverse landscapes from terraced farms to high alpine terrain. Experience Gurung culture, rhododendron forests, and stunning Annapurna massif views on this moderate 10-day trek.",
        duration: "10 Days",
        difficulty: "Moderate",
        groupSize: "2–15 people",
        price: 950,
        rating: 4.7,
        reviews: 210,
        location: "Annapurna Region, Nepal",
        type: "trek",
        highlights: [
          "Spectacular sunrise from Poon Hill viewpoint",
          "Walk through blooming rhododendron forests",
          "Cultural immersion in traditional Ghandruk village",
          "360-degree views of Annapurna Massif",
          "Natural hot springs at Jhinu Danda",
          "All-inclusive meals and accommodation"
        ]
      },
      {
        id: "np-3",
        name: "Langtang Valley Trek - Hidden Himalayan Gem",
        description: "Discover the secluded Langtang Valley, known as the 'Valley of Glaciers.' Experience Tibetan-influenced culture, ancient monasteries, and stunning mountain vistas on this moderate 8-day trek.",
        duration: "8 Days",
        difficulty: "Moderate",
        groupSize: "2–10 people",
        price: 750,
        rating: 4.6,
        reviews: 145,
        location: "Langtang Region, Nepal",
        type: "trek",
        highlights: [
          "Explore Tibetan-influenced culture and traditions",
          "Visit sacred Kyanjin Gompa monastery",
          "Spectacular views of Langtang Lirung (7,234m)",
          "Less crowded alternative to Everest and Annapurna",
          "Cheese factory visit in Kyanjin Gompa",
          "All permits and national park fees included"
        ]
      }
    ],
    bhutan: [
      {
        id: "bt-1",
        name: "Bhutan Cultural Tour: Tigers Nest Monastery & Dzong Exploration",
        description: "Immerse yourself in Bhutan's rich Buddhist heritage on this 7-day cultural journey. Visit iconic landmarks including the legendary Tiger's Nest Monastery, magnificent Punakha Dzong, and experience traditional Bhutanese arts, crafts, and festivals with expert local guides.",
        duration: "7 Days",
        difficulty: "Easy",
        groupSize: "2–10 people",
        price: 1850,
        rating: 4.9,
        reviews: 150,
        location: "Paro, Thimphu, Punakha Valley",
        type: "cultural-tour",
        highlights: [
          "Tiger's Nest Monastery hike (Paro Taktsang)",
          "Punakha Dzong - Palace of Great Happiness",
          "Traditional Bhutanese arts & crafts workshops",
          "Scenic Himalayan drives through mountain passes",
          "National Memorial Chorten and Buddha Dordenma",
          "All Bhutan visa fees and tourism taxes included"
        ]
      },
      {
        id: "bt-2",
        name: "Bhutan Dragon Trail: Sacred Valleys & Cultural Immersion",
        description: "Journey deep into Bhutan's spiritual heartland on this 12-day cultural expedition. Explore sacred Bumthang Valley, witness endangered black-necked cranes in Phobjikha, and experience authentic village life, ancient monasteries, and traditional hot stone baths in remote Himalayan valleys.",
        duration: "12 Days",
        difficulty: "Moderate",
        groupSize: "2–8 people",
        price: 2850,
        rating: 4.8,
        reviews: 85,
        location: "Bumthang, Gangtey, Haa Valley",
        type: "cultural-tour",
        highlights: [
          "Sacred Bumthang Valley temple circuit",
          "Black-necked crane viewing in Phobjikha Valley",
          "Remote Haa Valley cultural immersion",
          "Traditional hot stone bath experience",
          "Gangtey Monastery and nature trails",
          "All-inclusive sustainable tourism package"
        ]
      },
      {
        id: "bt-3",
        name: "Bhutan Festival Tour: Vibrant Tshechus & Cultural Celebration",
        description: "Experience Bhutan's vibrant living culture during our exclusive 9-day festival tour. Witness spectacular masked dance festivals (Tshechus), join local celebrations, and explore ancient dzongs and monasteries while immersed in Bhutan's most colorful cultural events with expert guides.",
        duration: "9 Days",
        difficulty: "Easy",
        groupSize: "2–12 people",
        price: 2250,
        rating: 4.9,
        reviews: 120,
        location: "Paro, Thimphu, Punakha",
        type: "festival-tour",
        highlights: [
          "Exclusive Tshechu festival access",
          "Traditional masked dance performances",
          "Festival photography opportunities",
          "Cultural interactions with local communities",
          "Bhutanese traditional dress experience",
          "All festival permits and special access included"
        ]
      }
    ],
    tibet: [
      {
        id: "tb-1",
        name: "Tibet Overland Adventure: Lhasa to Everest Base Camp Tour",
        description: "Embark on an epic 9-day journey from Lhasa to Everest Base Camp. Explore ancient monasteries, cross high Himalayan passes, and witness the majestic north face of Mount Everest while immersing yourself in Tibet's rich Buddhist culture and breathtaking landscapes.",
        duration: "9 Days",
        difficulty: "Moderate",
        groupSize: "4–12 people",
        price: 1899,
        rating: 4.7,
        reviews: 95,
        location: "Lhasa, Gyantse, Shigatse, Everest Base Camp",
        type: "overland-tour",
        highlights: [
          "Potala Palace UNESCO World Heritage Site",
          "Sacred Jokhang Temple and Barkhor Street",
          "Gyantse Kumbum and Pelkor Monastery",
          "Tashilhunpo Monastery in Shigatse",
          "Drive across 5,000m+ Himalayan passes",
          "North Face Everest view from Rongbuk Monastery"
        ]
      },
      {
        id: "tb-2",
        name: "Mount Kailash Pilgrimage Trek: Sacred Kora Adventure",
        description: "Undertake the ultimate spiritual journey to Tibet's most sacred mountain. This 15-day pilgrimage includes the challenging Mount Kailash kora (circumambulation), visits to holy Lake Manasarovar, and deep immersion in Tibetan Buddhist culture in remote western Tibet.",
        duration: "15 Days",
        difficulty: "Challenging",
        groupSize: "4–10 people",
        price: 2499,
        rating: 4.9,
        reviews: 72,
        location: "Western Tibet, Mount Kailash, Lake Manasarovar",
        type: "pilgrimage-trek",
        highlights: [
          "Complete 3-day Mount Kailash kora (circumambulation)",
          "Holy dip in sacred Lake Manasarovar",
          "Visit ancient monasteries in remote western Tibet",
          "Experience authentic Tibetan Buddhist rituals",
          "Cross high-altitude passes over 5,600m",
          "All special permits and pilgrimage fees included"
        ]
      },
      {
        id: "tb-3",
        name: "Tibetan Cultural Discovery: Lhasa, Samye and Yarlung Valley",
        description: "Discover Tibet's cultural heartland on this 8-day immersive tour. Explore Lhasa's UNESCO sites, visit Tibet's first monastery at Samye, discover the ancient Yarlung Valley kingdom, and experience authentic Tibetan Buddhism with expert local guides.",
        duration: "8 Days",
        difficulty: "Easy to Moderate",
        groupSize: "4–15 people",
        price: 1450,
        rating: 4.6,
        reviews: 68,
        location: "Lhasa, Samye Monastery, Yarlung Valley",
        type: "cultural-tour",
        highlights: [
          "Potala Palace and Jokhang Temple exploration",
          "Samye Monastery - Tibet's first Buddhist monastery",
          "Yarlung Valley - cradle of Tibetan civilization",
          "Trandruk Temple and Yumbulagang Palace",
          "Tibetan Buddhist philosophy sessions",
          "All entrance fees and travel permits included"
        ]
      }
    ]
  }), []);

  const currentPackages = packageData[activeTab as keyof typeof packageData];

  const getDifficultyColor = useCallback((difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-blue-100 text-blue-800";
      case "Moderate":
        return "bg-green-100 text-green-800";
      case "Challenging":
        return "bg-red-100 text-red-800";
      case "Easy to Moderate":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }, []);

  const getPackageIcon = useCallback((type: string) => {
    return type === "trek" ? 
      <Mountain className="h-4 w-4 text-[#295d7a]" /> : 
      <Building className="h-4 w-4 text-[#295d7a]" />;
  }, []);

  const handleTabChange = useCallback(async (value: string) => {
    if (value === activeTab) return;
    
    setIsLoading(true);
    setSelectedPackage(null);
    prevTabRef.current = activeTab;
    setActiveTab(value);
    
    // Simulate loading only if we have more than 2 items to show
    if (packageData[value as keyof typeof packageData]?.length > 2) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    setIsLoading(false);
  }, [activeTab, packageData]);

  const handlePackageSelect = useCallback((index: number) => {
    setSelectedPackage(selectedPackage === index ? null : index);
  }, [selectedPackage]);

  const formatPrice = useCallback((price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  const handleWhatsAppClick = useCallback((pkg: Package) => {
    const phoneNumber = "+9779841376470";
    
    const message = `Hello! I'm interested in booking the "${pkg.name}" package.\n\n` +
                   `Package Details:\n` +
                   `- Duration: ${pkg.duration}\n` +
                   `- Difficulty: ${pkg.difficulty}\n` +
                   `- Group Size: ${pkg.groupSize}\n` +
                   `- Price: $${formatPrice(pkg.price)} per person\n` +
                   `- Location: ${pkg.location}\n\n` +
                   `I'd like to know more about availability and booking options.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }, [formatPrice]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const tabContentVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Determine animation direction based on tab order
  const tabs = ["nepal", "bhutan", "tibet"];
  const direction = tabs.indexOf(activeTab) - tabs.indexOf(prevTabRef.current);

  // Determine grid columns based on screen size
  const getGridCols = () => {
    if (isMobile) return "grid-cols-1";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <section className="bg-gradient-to-b from-[#e8f3fa] via-[#bfd9e9] to-[#92bdd8] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-[#d9ebf7] text-[#295d7a] border-[#295d7a]">
              Himalayan Adventures
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-center text-3xl sm:text-5xl font-semibold text-[#295d7a]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Journey, Your Way
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md sm:max-w-2xl mt-4"
          >
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 p-1 h-10 sm:h-12 bg-gradient-to-r from-[#d9ebf7] to-[#b0d4e4] rounded-full shadow-md">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="flex-1 text-center py-2 text-[#295d7a] data-[state=active]:bg-white data-[state=active]:shadow-md rounded-full transition-all duration-300 ease-out"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <div className="mt-8 lg:mt-12" ref={containerRef}>
          <AnimatePresence mode="wait" custom={direction}>
            {isLoading ? (
              <motion.div
                key="loading"
                custom={direction}
                variants={tabContentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`mx-auto grid w-full gap-6 ${getGridCols()}`}
              >
                {/* Show only 1 skeleton on mobile, 3 on desktop */}
                {(isMobile ? [1] : [1, 2, 3]).map((item) => (
                  <div key={item} className="w-full rounded-xl border bg-white p-6 shadow-sm">
                    <Skeleton className="h-7 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-3" />
                    <Skeleton className="h-5 w-1/2 mb-4" />
                    <Skeleton className="h-10 w-full mb-4" />
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((s) => (
                        <Skeleton key={s} className="h-3 w-full" />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                custom={direction}
                variants={tabContentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`mx-auto grid w-full gap-6 ${getGridCols()}`}
              >
                {/* On mobile, show only the first package, on desktop show all */}
                {(isMobile ? currentPackages.slice(0, 1) : currentPackages).map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    layout
                    variants={itemVariants}
                    className={`w-full rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-[#295d7a]/40 ${
                      selectedPackage === index 
                        ? "ring-2 ring-[#295d7a] border-[#295d7a] scale-[1.02]" 
                        : ""
                    }`}
                    onClick={() => handlePackageSelect(index)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          {getPackageIcon(pkg.type)}
                          <h3 className="text-xl font-semibold text-[#295d7a]">{pkg.name}</h3>
                        </div>
                        <p className="text-sm text-[#295d7a]/80">{pkg.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#295d7a]/80 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.location}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(pkg.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#295d7a]/80">
                        {pkg.rating} ({pkg.reviews} reviews)
                      </span>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex items-end gap-1 mb-2">
                      <span className="text-lg font-semibold">$</span>
                      <span className="text-4xl font-bold text-[#295d7a]">
                        {formatPrice(pkg.price)}
                      </span>
                    </div>
                    <p className="text-sm text-[#295d7a]/80 mb-4">
                      per person, all-inclusive package
                    </p>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppClick(pkg);
                      }}
                      className="w-full mb-4 py-3 text-base font-medium bg-[#295d7a] hover:bg-[#3a6e8c] transition-colors duration-300"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Contact to Book Now
                    </Button>

                    <Separator className="my-4" />

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex items-center gap-1 text-xs bg-[#d9ebf7] text-[#295d7a] px-3 py-1 rounded-full">
                        <Clock className="h-3 w-3" />
                        {pkg.duration}
                      </div>
                      <div
                        className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full ${getDifficultyColor(
                          pkg.difficulty
                        )}`}
                      >
                        {pkg.type === "trek" ? (
                          <Mountain className="h-3 w-3" />
                        ) : (
                          <Building className="h-3 w-3" />
                        )}
                        {pkg.difficulty}
                      </div>
                      <div className="flex items-center gap-1 text-xs bg-[#d9ebf7] text-[#295d7a] px-3 py-1 rounded-full">
                        <Users className="h-3 w-3" />
                        {pkg.groupSize}
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedPackage === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="pt-3">
                            <p className="mb-2 text-sm font-semibold text-[#295d7a]">
                              Key highlights:
                            </p>
                            <ul className="flex flex-col gap-2">
                              {pkg.highlights.map((highlight, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d9ebf7] mt-0.5 flex-shrink-0">
                                    <Check className="h-3 w-3 text-[#295d7a]" />
                                  </div>
                                  <p className="text-sm text-[#295d7a]/80">{highlight}</p>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export { ToggleTabsPricing };