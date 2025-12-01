"use client";

import { Compass, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok, FaPinterest } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580548259485-0c6f1cceec33?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2070&auto=format&fit=crop"
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/HimkalaAdventureNepal?ref=embed_page", icon: FaFacebook },
  { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram },
  { name: "Twitter", href: "https://x.com/himkalanepal?s=21&t=2wPjjwhkMD0rUThQZq-5jQ", icon: FaTwitter },
  { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube },
  { name: "LinkedIn", href: "https://linkedin.com/yourpage", icon: FaLinkedin },
  { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok },
  { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest }
];

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

const quickLinks = [
  { name: "Tours", href: "/services/package-sightseeing-tours" },
  { name: "Treks", href: "/services/trekking" },
  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about-us" },
  { name: "Stories", href: "/blog" }
];

// Separate component for Terms Dialog
const TermsDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <div className="mt-4 space-y-4 text-sm">
          {/* Terms content remains the same */}
          <p><strong>Down Payment:</strong></p>
          <p>To secure your place, a 20% down payment is required in advance as per company policy. For bookings more than ten weeks prior to arrival date, a 15% deposit applies. Please contact us if this causes any issues as we try to be flexible.</p>
          <p><strong>How to pay your deposit:</strong></p>
          <p>You can pay via bank transfer in USD, EUR, or GBP to the following account:</p>
          <p>FOR CREDIT TO:<br />
          Nepal Investment Mega Bank Nepal Ltd.<br />
          Kathmandu, Nepal<br />
          SWIFT: NIBLNPKT</p>
          <p>BENEFICIARY FINAL CREDIT TO:<br />
          A/C Holder's Name: Himkala Adventure Pvt. Ltd.<br />
          A/C No: 13201100002097<br />
          Nepal Investment Mega Bank Nepal Ltd<br />
          Thamel, Kathmandu</p>
          <p><strong>Payment of the balance:</strong></p>
          <p>The remaining balance can be paid after your arrival in Nepal. Credit card payments incur a 4% handling charge on the outstanding balance. Bank transfers have no handling fee.</p>
          <p><strong>Last minute booking:</strong></p>
          <p>We accept last-minute bookings for Nepal trips only, not for India, Bhutan, or Tibet trips.</p>
          <p><strong>Refund:</strong></p>
          <p>The 15% deposit is non-refundable for any cancellation reason. If you've paid in full, you'll receive a refund minus cancellation charges. Written notification is required for cancellations.</p>
          <p><strong>Supplement charge:</strong></p>
          <p>Rooms/tents are provided on a twin-sharing basis. Single room supplement charges apply for clients without a sharing partner.</p>
          <p><strong>Incomplete tour:</strong></p>
          <p>No refunds are provided for unused portions of the itinerary if clients drop out.</p>
          <p><strong>Unforeseen circumstances:</strong></p>
          <p>If Himkala Adventure cancels your trip due to war, natural disasters, conflict, or unfavorable climate, we'll offer an alternative trip or full refund. Other expenses incurred from the booking are your responsibility.</p>
          <p><strong>Clients' responsibility:</strong></p>
          <p>Our tour/trek guides have full authority during tours. Any unlawful acts may result in removal from the tour.</p>
          <p><strong>Impact on your journey:</strong></p>
          <p>We strive to provide the best service but note that facilities in Himalayan countries may differ from Western standards.</p>
          <p><strong>Travel insurance:</strong></p>
          <p>Comprehensive travel insurance covering medical emergencies, natural calamities, helicopter evacuation, personal accidents, trip cancellation, etc., is mandatory. Ensure your policy covers your planned activities and maximum altitudes.</p>
          <p><strong>Tour amendment:</strong></p>
          <p>Itinerary changes require prior notice, though adjustments may be necessary en route due to circumstances like bad weather.</p>
          <p><strong>Paper and documents:</strong></p>
          <p>All necessary documents must be provided in time for visa and permit processing. We're not responsible for delays due to missing paperwork.</p>
          <p><strong>Flight delay/cancellation:</strong></p>
          <p>Flight delays or cancellations may occur in Himalayan regions due to weather, requiring itinerary modifications.</p>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

// Separate component for Privacy Dialog
const PrivacyDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Privacy Policy</DialogTitle>
        <div className="mt-4 space-y-4 text-sm">
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

// Separate component for Flowing Images with inline styles
const FlowingImages = ({ isVisible }: { isVisible: boolean }) => (
  <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
    <div className={`flex h-48 sm:h-56 md:h-64 ${isVisible ? "" : ""}`}>
      {["first", "second"].map((set) => (
        <div 
          key={set} 
          className="flex h-full"
          style={{
            animation: 'scrollHorizontally 80s linear infinite'
          }}
        >
          {images.map((img, idx) => (
            <div
              key={`${set}-${idx}`}
              className="h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 flex-shrink-0 mx-2 sm:mx-3 md:mx-4 rounded-lg md:rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

// Separate component for Floating Shapes with inline styles
const FloatingShapes = () => {
  const shapes = [
    { style: "top-1/5 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-slate-600/20", animation: "15s" },
    { style: "top-1/3 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400/15", animation: "10s" },
    { style: "top-1/4 right-1/5 w-6 h-6 sm:w-8 sm:h-8 bg-white/15", animation: "8s" },
    { style: "top-1/2 right-1/4 w-8 h-8 sm:w-10 sm:h-10 bg-slate-400/20", animation: "15s" },
    { style: "bottom-1/3 left-1/5 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-300/15", animation: "10s" },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${shape.style}`}
          style={{
            animation: `float ${shape.animation} ease-in-out infinite`
          }}
        />
      ))}
    </div>
  );
};

export const NewsletterFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    
    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes scrollHorizontally {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
      `}</style>

      <footer
        ref={containerRef}
        className="relative w-full bg-slate-900 overflow-hidden"
      >
        {/* Dialogs */}
        <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
        <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />

        {/* Background Elements */}
        <FlowingImages isVisible={isVisible} />
        <FloatingShapes />

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-4 py-8 md:py-12">
          {/* Top Section - Call to Action */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center lg:text-left max-w-2xl">
              <div className={`flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-medium mb-4 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <Compass className="h-6 w-6 md:h-8 md:w-8 text-cyan-300" />
                <span className="text-cyan-300 font-semibold">Ready for Your Adventure?</span>
              </div>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                Design Your Trip, <span className="text-cyan-300">Your Way</span>
              </h2>
              
              {/* Affiliation Logos */}
              <div className={`flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                {affiliationLinks.map((affiliation) => (
                  <a
                    key={affiliation.name}
                    href={affiliation.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    title={affiliation.name}
                  >
                    <Image 
                      src={affiliation.logo} 
                      width={affiliation.width} 
                      height={affiliation.height} 
                      alt={`${affiliation.name} Logo`}
                      className="h-auto"
                    />
                  </a>
                ))}
                <a 
                  href="https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  title="TripAdvisor"
                >
                  <Image 
                    src="/images/TripAdvisor-Logo.png" 
                    width={100} 
                    height={40} 
                    alt="TripAdvisor Logo" 
                    className="h-auto"
                  />
                </a>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full max-w-md transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <h3 className="text-xl md:text-2xl font-bold text-cyan-300 mb-6 text-center">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-cyan-300" />
                  </div>
                  <a href="tel:+9779841376470" className="hover:text-cyan-300 transition-colors">
                    +977 9841376470
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-cyan-300" />
                  </div>
                  <a href="mailto:info@himkalaadventure.com" className="hover:text-cyan-300 transition-colors break-all">
                    info@himkalaadventure.com
                  </a>
                </div>
                
                
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-slate-700">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 p-2 bg-slate-700/50 rounded-full"
                    title={link.name}
                  >
                    {link.icon && typeof link.icon === "function" ? <link.icon size={20} /> : link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Links and Copyright */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
                {quickLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-white hover:text-cyan-300 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                  type="button"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                  type="button"
                >
                  Privacy Policy
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t border-slate-700">
              <div className="text-white text-sm">
                <div>© 2015 - {new Date().getFullYear()}. All rights reserved. Himkala Adventure.</div>
                <div className="mt-1">
                  Website by:{" "}
                  <a
                    href="https://www.linkedin.com/in/sabinaya-dhakal-a3a433321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:underline"
                  >
                    Sabinaya Dhakal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};