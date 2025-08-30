"use client";

import { Mountain, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface DataItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  rating: number;
  price: string;
  route: string;
}

const DATA: DataItem[] = [
  {
    id: 1,
    number: "01",
    title: "Trekking and Peak Climbing",
    description:
      "Multi-day mountain treks through pristine Himalayan trails.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0",
    duration: "7-14 days",
    difficulty: "Moderate to Challenging",
    rating: 4.9,
    price: "From $1,200",
    route: "/services/trekking"
  },
  {
    id: 2,
    number: "02",
    title: "Cultural Tours",
    description:
      "Explore old monasteries, traditional villages and customs.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0",
    duration: "5-10 days",
    difficulty: "Easy to Moderate",
    rating: 4.8,
    price: "From $950",
    route: "/services/day-sightseeing"
  },
  {
    id: 3,
    number: "03",
    title: "Package Tours",
    description:
      "Pre-arranged travel plan in one single priced trip.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    duration: "Flexible",
    difficulty: "Customizable",
    rating: 5.0,
    price: "From $420",
    route: "/services/package-sightseeing-tours"
  },
];

const NumberedBadgeCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <section className="bg-gradient-to-b from-[#E3F8FF]/50 via-[#CFE8FF]/40 to-[#A6D4FF]/30 py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Warm blurred decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#A6D4FF]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CFE8FF]/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#E3F8FF]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-0">
        {/* Header */}
        <div className="flex flex-col items-center pb-6 text-center">
          <Badge variant="outline" className="bg-[#B8E0FF]/30 px-3 py-1 border-[#A6D4FF] shadow-md mb-3">
            
            <p className="text-sm font-medium text-[#3C6AA6]">Our Adventures</p>
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2E4F7C] max-w-3xl">
            To Travel is to <span className="text-[#3C6AA6]">Live</span>.
          </h1>
          <p className="text-sm sm:text-lg text-[#1F3A5A] max-w-2xl mt-2 sm:mt-4">
            Discover the beauty of the Himalayas with our carefully crafted itineraries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl border border-[#CFE8FF] shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-3 sm:p-6 relative">
                {/* Number Badge */}
                <div className="text-white inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-lg font-bold shadow-md bg-[#3C6AA6]">
                  {feature.number}
                </div>
                <p className="text-lg sm:text-xl my-2 sm:my-4 font-semibold text-[#2E4F7C] group-hover:text-[#3C6AA6] transition-colors">
                  {feature.title}
                </p>
                
                {/* Truncated description for mobile */}
                <p className="text-sm text-[#1F3A5A] mb-2 sm:mb-4 leading-relaxed">
                  {feature.description.length > 60 ? feature.description.slice(0, 60) + "..." : feature.description}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2 sm:pt-4 border-t border-[#CFE8FF]">
                  <p className="text-sm sm:text-lg font-bold text-[#1F3A5A]">{feature.price}</p>
                  <Button
                    className="text-white px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm rounded-full transition-all group-hover:shadow-lg bg-[#3C6AA6] hover:bg-[#2E4F7C]"
                    size="sm"
                    onClick={() => handleNavigation(feature.route)}
                  >
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="mt-auto flex min-h-[150px] sm:min-h-[200px] justify-center overflow-hidden rounded-b-2xl relative">
                <div className="h-[150px] sm:h-[200px] w-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ${activeCard === feature.id ? 'scale-105 sm:scale-110' : 'scale-100'}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C6AA6]/30 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-16 px-4">
          <p className="text-sm sm:text-lg text-[#1F3A5A] mb-3 sm:mb-6">Ready to start your adventure?</p>
          <Button
            className="text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-[#3C6AA6]/30 bg-[#3C6AA6] hover:bg-[#2E4F7C]"
            onClick={() => handleNavigation("/contact")}
          >
            Plan Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export { NumberedBadgeCards };
