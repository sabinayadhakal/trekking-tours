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
  "id": "np-2",
  "name": "Manaslu Circuit Trek - The Forbidden Mountain Odyssey",
  "description": "Embark on an epic journey around the world's eighth-highest peak, crossing the challenging Larkya La Pass. Experience pristine landscapes, ancient Buddhist culture, and remote villages on this demanding yet rewarding 14-day adventure.",
  "duration": "14 Days",
  "difficulty": "Challenging",
  "groupSize": "2–12 people",
  "price": 1250,
  "rating": 4.8,
  "location": "Manaslu Region, Nepal",
  "type": "trek",
  "highlights": [
    "Circuit around Mount Manaslu (8,163m), the 'Mountain of the Spirit'",
    "Cross the high-altitude Larkya La Pass (5,106m)",
    "Experience Tibetan Buddhist culture in remote villages",
    "Less crowded alternative with restricted area permits",
    "Dramatic landscapes from subtropical to arctic zones",
    "Visit ancient monasteries like Sama Gompa"
  ]
},
{
  "id": "np-3",
  "name": "Tamang Heritage & Langtang Valley Trek - Culture & Wilderness Combo",
  "description": "Experience the perfect blend of rich cultural immersion and breathtaking Himalayan wilderness. This 12-day journey combines the traditional Tamang Heritage Trail with the stunning Langtang Valley, offering ancient monasteries, glacial landscapes, and authentic village life in one unforgettable adventure.",
  "duration": "13 Days",
  "difficulty": "Moderate",
  "groupSize": "2–12 people",
  "price": 1100,
  "rating": 4.7,
  "location": "Langtang Region, Nepal",
  "type": "trek",
  "highlights": [
    "Dual experience: Tamang culture & Langtang wilderness",
    "Visit sacred Kyanjin Gompa monastery (3,870m)",
    "Natural hot springs relaxation at Tatopani",
    "Home-stay experiences in traditional Tamang villages",
    "Spectacular views of Langtang Lirung (7,234m)",
    "Cheese factory visit with local yak cheese tasting",
    "Ancient monasteries, prayer walls, and cultural museums",
    "Less crowded trails with panoramic Himalayan vistas"
  ]
}
    ],
   bhutan: [
  {
    id: "bt-1",
    name: "Delightful Bhutan Tour: Cultural Heartlands Exploration",
    description: "This thoughtfully designed 5-day program merges cultural immersion, historical exploration, and spiritual discovery across Bhutan's most iconic valleys. Experience ancient temples, majestic dzongs, breathtaking mountain passes, and the legendary Tiger's Nest Monastery in Thimpu, Punakha, and Paro.",
    duration: "5 Days",
    difficulty: "Moderate",
    groupSize: "2–12 people",
    price: 1850,
    rating: 4.9,
    location: "Thimpu, Punakha, Paro",
    type: "cultural-tour", // Already correct
    highlights: [
      "Hike to Tiger's Nest Monastery (Taktsang)",
      "Cross Dochula Pass (3,200m) with panoramic mountain views",
      "Visit Punakha Dzong - masterpiece of Bhutanese architecture",
      "Explore Thimpu's cultural and historical sites",
      "Experience traditional Archery Sports",
      "Comprehensive cultural immersion across three valleys"
    ]
  },
  {
    id: "bt-2",
    name: "Short and Sweet Bhutan Express: Quick Himalayan Getaway",
    description: "Designed for travelers with very limited time who want to explore Bhutan's essence. This compact 3-day tour begins with a scenic mountain flight from Kathmandu to Paro, offering breathtaking Himalayan views. Experience Bhutan's spiritual heart with visits to sacred monasteries and dzongs, including the iconic Tiger's Nest Monastery hike.",
    duration: "3 Days",
    difficulty: "Moderate",
    groupSize: "2–10 people",
    price: 899,
    rating: 4.7,
    location: "Paro, Thimpu",
    type: "short-tour", // Changed from "express-tour" to "short-tour"
    highlights: [
      "Scenic mountain flight from Kathmandu to Paro over Himalayas",
      "Hike to Taktsang Monastery (Tiger's Nest) at 9,678 feet",
      "Visit Rinpung Dzong and Kichu Lhakhang (7th century temple)",
      "Explore Thimpu - Bhutan's capital city",
      "Witness traditional Archery sports",
      "Perfect quick getaway for time-limited travelers"
    ]
  },
  {
    id: "bt-3",
    name: "Bhutan Grand Cultural Expedition: Spiritual Heartlands Journey",
    description: "An immersive 11-day journey through Bhutan's spiritual heartlands, exploring ancient dzongs, sacred monasteries, and untouched Himalayan valleys. Experience Bhutan's untouched lands and Buddhist way of life, traveling through 8 major regions including remote valleys to discover the kingdom's unique secular Buddhist culture.",
    duration: "11 Days",
    difficulty: "Moderate",
    groupSize: "2–8 people",
    price: 3499,
    rating: 5.0,
    location: "Paro, Thimpu, Punakha, Wangdue, Gangtey, Phobjikha, Trongsa, Bumthang",
    type: "cultural-tour", // Changed from "expedition-tour" to "cultural-tour"
    highlights: [
      "Enthralling mountain flight from Kathmandu to Paro over Himalayas",
      "Explore 8 major regions of Bhutan including remote valleys",
      "See rare black-necked cranes in Phobjikha glacial valley",
      "Visit ancient dzongs, monasteries, and sacred pilgrimage sites",
      "Cross multiple high mountain passes including Dochula, Pelela, Yutong La",
      "Experience authentic Bhutanese Buddhist way of life"
    ]
  }
],
    tibet: [
  {
    id: "tb-1",
    name: "Tibet Classic Cultural Tour: Monasteries & Sacred Sites",
    description: "This classic 7-day tour covers all major cultural centers of Tibet including Tsedang, Lhasa, Gyatse, and Shigatse. Designed for travelers with limited time and budget, it offers a deep immersion into Tibetan history, spirituality, and architecture with visits to UNESCO World Heritage sites.",
    duration: "7 Days",
    difficulty: "Moderate",
    groupSize: "2–10 people",
    price: 1899,
    rating: 4.8,
    location: "Lhasa, Tsedang, Gyatse, Shigatse",
    type: "cultural-tour",
    highlights: [
      "Scenic flight from Kathmandu to Lhasa over Himalayas",
      "Visit Jokhang Temple and Barkhor Square - spiritual heart of Tibet",
      "Tour Potala Palace - iconic UNESCO World Heritage site",
      "Explore Tsedang - cradle of Tibetan civilization (3,200m)",
      "See Drepung Monastery - former home of Dalai Lamas",
      "Experience Sera Monastery's monk debates"
    ]
  },
  {
    id: "tb-2",
    name: "Namtso Lake Heavenly Trek: High Altitude Sacred Lake Adventure",
    description: "Journey to Namtso, one of Tibet's three holy lakes, known as the 'Heavenly Lake' for its stunning turquoise waters and dramatic mountain backdrop. This 9-day expedition combines cultural exploration of Lhasa's monasteries with a challenging high-altitude trek to the remote Namtso Lake at 4,718m.",
    duration: "9 Days",
    difficulty: "Challenging",
    groupSize: "2–8 people",
    price: 2199,
    rating: 4.9,
    location: "Lhasa, Shigatse, Namtso Lake, Zhangmu",
    type: "trek",
    highlights: [
      "Trek to Namtso Lake - Tibet's sacred turquoise lake at 4,718m",
      "Cross Yangpachen Pass at 5,630m altitude",
      "Scenic Trans-Himalayan flight with Mt. Everest views",
      "Visit Potala Palace, Jokhang Temple, and Lhasa's major monasteries",
      "Camp beside the holy lake with nomadic cultural experiences",
      "Visit Tashilunpo Monastery in Shigatse"
    ]
  },
  {
    id: "tb-3",
    name: "Tibet Overland Adventure: Nepal to Lhasa via Friendship Highway",
    description: "Embark on an epic 8-day overland journey from Kathmandu to Lhasa via the historic Araniko Highway. This adventure takes you through dramatic Himalayan landscapes, crossing the Tibetan Plateau at 5,200m, visiting ancient monasteries and fortress cities along the historic Friendship Highway.",
    duration: "8 Days",
    difficulty: "Challenging",
    groupSize: "2–6 people",
    price: 1999,
    rating: 4.7,
    location: "Nyalam, Lhatse, Shigatse, Gyantse, Lhasa",
    type: "overland-tour",
    highlights: [
      "Scenic drive on Araniko Highway from Kathmandu to Kodari border",
      "Cross Lalung La Pass at 5,200m on Tibetan Plateau",
      "Breathtaking mountain views of Langtang, Gaurishankar, and Melungtse",
      "Visit Tashilunpo Monastery in Shigatse - seat of Panchen Lamas",
      "Explore Gyantse Fortress and Pelkhor Chode Monastery",
      "Discover Lhasa's Potala Palace, Jokhang Temple, and Barkhor Square"
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
            className="text-center text-3xl sm:text-5xl font-bold text-[#295d7a]"
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