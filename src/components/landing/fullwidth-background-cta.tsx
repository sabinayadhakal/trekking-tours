"use client";

import { Compass, Calendar, MapPin, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const FullwidthBackgroundCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter();

  // Himalayan adventure images
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1580548259485-0c6f1cceec33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  ];

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Function to handle button click and route to contact page
  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated flowing images */}
      <div className="absolute inset-0 z-1 overflow-hidden opacity-40">
        <div className={`flex h-full ${isVisible ? 'animate-flow' : ''}`}>
          {/* First set of images */}
          <div className="flex h-full animate-scrollHorizontally">
            {images.map((image, index) => (
              <div
                key={`first-${index}`}
                className="h-64 w-64 flex-shrink-0 mx-4 rounded-xl overflow-hidden transform transition-all duration-1000 hover:scale-105"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
          
          {/* Duplicate set for seamless looping */}
          <div className="flex h-full animate-scrollHorizontally">
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="h-64 w-64 flex-shrink-0 mx-4 rounded-xl overflow-hidden transform transition-all duration-1000 hover:scale-105"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-slate-600/20 animate-floatSlow" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-slate-400/30 animate-floatMedium" />
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-white/10 animate-floatFast" />

      {/* Content */}
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col gap-8 p-4 text-center items-center">
          <div className={`flex items-center justify-center gap-3 text-2xl font-medium backdrop-blur-sm bg-slate-900/30 rounded-full px-6 py-3 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Compass className="h-8 w-8 text-cyan-300" />
            <span className="text-cyan-300 font-semibold">Ready for Your Adventure?</span>
          </div>
          
          <h2 className={`text-5xl md:text-6xl font-bold font-display text-white max-w-3xl leading-tight transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Let's Craft Your <span className="text-cyan-300">Perfect Journey</span>
          </h2>
          
          <p className={`text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Get your free consultation and custom itinerary planning with us.
          </p>

          {/* Trust indicators */}
          <div className={`flex flex-wrap justify-center gap-6 mt-4 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="h-5 w-5 text-cyan-300" />
              <span>Flexible Dates</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-5 w-5 text-cyan-300" />
              <span>Local Experts</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="h-5 w-5 text-cyan-300" />
              <span>Small Groups</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="h-5 w-5 text-amber-300" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-6 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              size="lg" 
              onClick={handleContactClick}
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-6 h-auto rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-700/30 font-semibold"
            >
              Start Planning Now
            </Button>
          </div>

          <p className={`text-white/60 text-sm mt-4 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            No commitment required. Get expert advice within 24 hours.
          </p>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes scrollHorizontally {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
        
        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(-15px);
          }
        }
        
        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }
        
        .animate-scrollHorizontally {
          animation: scrollHorizontally 60s linear infinite;
        }
        
        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        .animate-floatMedium {
          animation: floatMedium 6s ease-in-out infinite;
        }
        
        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
        }
        
        .animate-flow:hover .animate-scrollHorizontally {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export { FullwidthBackgroundCta };