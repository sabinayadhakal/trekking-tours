"use client";

import { Check, Mountain, Users, Clock, Star, MapPin, Calendar, Building } from "lucide-react";
import { useState, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
  type: "trek" | "city" | "cultural-tour" | "overland-tour" | "short-tour";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const prevTabRef = useRef<string>("nepal");

  const packageData: PackageData = useMemo(() => ({
    nepal: [
      {
        id: "np-1",
        name: "Everest Base Camp Trek",
        description: "A classic trek to the foot of the world's highest mountain.",
        duration: "14 Days",
        difficulty: "Challenging",
        groupSize: "2–12 people",
        price: 1599,
        rating: 4.8,
        reviews: 320,
        location: "Khumbu Region, Nepal",
        type: "trek",
        highlights: [
          "Panoramic views of Everest, Lhotse, and Ama Dablam",
          "Immersive Sherpa culture",
          "Visit Tengboche Monastery",
          "Trek through Sagarmatha National Park"
        ]
      },
      {
        id: "np-2",
        name: "Annapurna Base Camp Trek",
        description: "Scenic trek through diverse landscapes and Gurung villages.",
        duration: "10 Days",
        difficulty: "Moderate",
        groupSize: "2–15 people",
        price: 1199,
        rating: 4.7,
        reviews: 210,
        location: "Annapurna Region, Nepal",
        type: "trek",
        highlights: [
          "Sunrise view from Poon Hill",
          "Walk through lush rhododendron forests",
          "Cultural immersion in Ghandruk",
          "Majestic Annapurna Massif views"
        ]
      },
      {
        id: "np-3",
        name: "Langtang Valley Trek",
        description: "A beautiful trek through the valley of glaciers.",
        duration: "8 Days",
        difficulty: "Moderate",
        groupSize: "2–10 people",
        price: 899,
        rating: 4.6,
        reviews: 145,
        location: "Langtang Region, Nepal",
        type: "trek",
        highlights: [
          "Explore Tibetan-influenced culture",
          "Visit Kyanjin Gompa monastery",
          "Spectacular views of Langtang Lirung",
          "Less crowded alternative to Everest and Annapurna"
        ]
      }
    ],
    bhutan: [
      {
        id: "bt-1",
        name: "Cultural Tour of Bhutan",
        description: "Experience Bhutan's monasteries, dzongs, and traditions.",
        duration: "7 Days",
        difficulty: "Easy",
        groupSize: "2–10 people",
        price: 1999,
        rating: 4.9,
        reviews: 150,
        location: "Paro, Thimphu, Punakha",
        type: "cultural-tour",
        highlights: [
          "Visit Tiger's Nest Monastery",
          "Explore Punakha Dzong",
          "Discover Bhutanese arts and crafts",
          "Scenic Himalayan drives"
        ]
      },
      {
        id: "bt-2",
        name: "Bhutan Dragon Trail",
        description: "A deeper exploration of Bhutan's hidden valleys.",
        duration: "12 Days",
        difficulty: "Moderate",
        groupSize: "2–8 people",
        price: 2599,
        rating: 4.8,
        reviews: 85,
        location: "Bumthang, Gangtey, Haa Valley",
        type: "cultural-tour",
        highlights: [
          "Explore the sacred Bumthang Valley",
          "See black-necked cranes in Phobjikha Valley",
          "Visit remote temples and monasteries",
          "Experience traditional hot stone baths"
        ]
      }
    ],
    tibet: [
      {
        id: "tb-1",
        name: "Lhasa and Everest Overland Tour",
        description: "A journey from Lhasa to Everest Base Camp by road.",
        duration: "9 Days",
        difficulty: "Easy to Moderate",
        groupSize: "4–20 people",
        price: 2499,
        rating: 4.6,
        reviews: 95,
        location: "Lhasa to Everest Base Camp",
        type: "overland-tour",
        highlights: [
          "Potala Palace and Jokhang Temple",
          "Explore Gyantse and Shigatse",
          "Drive across high Himalayan passes",
          "View of Everest North Face"
        ]
      },
      {
        id: "tb-2",
        name: "Mount Kailash Pilgrimage",
        description: "A spiritual journey to Tibet's most sacred mountain.",
        duration: "15 Days",
        difficulty: "Challenging",
        groupSize: "4–12 people",
        price: 3299,
        rating: 4.9,
        reviews: 72,
        location: "Western Tibet",
        type: "trek",
        highlights: [
          "Circumambulate sacred Mount Kailash",
          "Visit Lake Manasarovar",
          "Experience Tibetan Buddhist culture",
          "Journey through remote western Tibet"
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

  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabContentVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Determine animation direction based on tab order
  const tabs = ["nepal", "bhutan", "tibet"];
  const direction = tabs.indexOf(activeTab) - tabs.indexOf(prevTabRef.current);

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
                className="mx-auto grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              >
                {[1, 2, 3].map((item) => (
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
                className="mx-auto grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              >
                {currentPackages.map((pkg, index) => (
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
                      asChild
                      className="w-full mb-4 py-3 text-base font-medium bg-[#295d7a] hover:bg-[#3a6e8c] transition-colors duration-300"
                    >
                      <a href="/contact">
                        <Calendar className="mr-2 h-4 w-4" />
                        Contact Us to Book Now
                      </a>
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