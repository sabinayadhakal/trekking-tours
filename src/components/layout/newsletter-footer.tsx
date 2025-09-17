"use client";

import { Compass } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaTiktok, FaPinterest, FaEnvelope, FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
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
  { name: "Facebook", href: "https://www.facebook.com/share/1K5sDKJ5po/?mibextid=wwXIfr", icon: FaFacebook },
  { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram },
  { name: "Twitter", href: "https://x.com/himkalanepal?s=21&t=2wPjjwhkMD0rUThQZq-5jQ", icon: FaTwitter },
  { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube },
  { name: "LinkedIn", href: "https://linkedin.com/yourpage", icon: FaLinkedin },
  { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok },
  { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest }
];

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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-slate-900 overflow-hidden"
    >
      {/* Terms and Conditions Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogDescription className="mt-4 space-y-4">
              {/* Terms text */}
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription className="mt-4 space-y-4">
              <p>Himkala Adventure Pvt. Ltd. takes the responsibility of your data seriously and respects your privacy concerning any information we may gather from you across this website.</p>
              <p>Our website uses links to other websites (e.g. Facebook, Instagram, Twitter, and Google Maps) to which this data protection declaration does not apply. These sites might collect Device Information. Please be aware that we do not control the content and practices of these sites, and cannot take responsibility for their privacy policies.</p>
              <p>We only collect personal information that we need to provide a service to you (e.g. your name, email address, telephone number, and postal address) when you send us an email through inquiry, booking, or contact form. We collect it by lawful means, with your knowledge and agreement.</p>
              <p>We only keep the gathered information as long as required to provide you with the service you requested. The data we store will be protected with lawful means to prevent loss and theft, as well as unauthorized access, leak, copying, usage, or any adjustment. We don't share any personal information publicly or with third parties unless required by lawful request.</p>
              <p>You have the right to ask that your personal information be corrected, updated, or deleted at any time; please contact us through the contact information available on the website. If you have any queries about how we handle your personal information, please do not hesitate to contact us through email.</p>
              <p>We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Flowing images overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className={`flex h-56 sm:h-64 ${isVisible ? "animate-flow" : ""}`}>
          {["first", "second"].map((set) => (
            <div key={set} className="flex h-full animate-scrollHorizontally">
              {images.map((img, idx) => (
                <div
                  key={`${set}-${idx}`}
                  className="h-56 sm:h-64 w-56 sm:w-64 flex-shrink-0 mx-2 sm:mx-4 rounded-xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floating background shapes (above images) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/5 left-1/4 w-12 h-12 rounded-full bg-slate-600/20 animate-floatSlow" />
        <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-cyan-400/15 animate-floatMedium" />
        <div className="absolute top-1/4 right-1/5 w-8 h-8 rounded-full bg-white/15 animate-floatFast" />
        <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-slate-400/20 animate-floatSlow" />
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 rounded-full bg-cyan-300/15 animate-floatMedium" />
        <div className="absolute bottom-1/4 left-1/3 w-9 h-9 rounded-full bg-white/20 animate-floatFast" />
        <div className="absolute bottom-1/5 right-1/4 w-7 h-7 rounded-full bg-slate-500/20 animate-floatSlow" />
        <div className="absolute bottom-1/6 right-1/3 w-4 h-4 rounded-full bg-cyan-200/15 animate-floatMedium" />
      </div>

      {/* Main content */}
      <div className="relative z-30 container mx-auto flex flex-col md:flex-row justify-between items-start gap-6 p-4">
        {/* Left */}
        <div className="flex flex-col gap-4 md:w-1/2 items-center md:items-start">
          <div
            className={`flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-medium backdrop-blur-sm bg-slate-900/30 rounded-full px-4 py-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Compass className="h-6 sm:h-8 w-6 sm:w-8 text-cyan-300" />
            <span className="text-cyan-300 font-semibold">Ready for Your Adventure?</span>
          </div>
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl font-bold text-white max-w-full sm:max-w-xl leading-snug sm:leading-tight transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Let's Craft Your <span className="text-cyan-300">Perfect Journey</span>
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mt-10">
            <Image src="/images/ntb-logo.png" width={40} height={20} alt="NTB Logo" />
            <Image src="/images/nma-logo.png" width={40} height={20} alt="NMA Logo" />
            <Image src="/images/sustainable-tourism-logo.png" width={40} height={20} alt="Sustainable Tourism Logo" />
            <Image src="/images/taan-logo.png" width={40} height={20} alt="TAAN Logo" />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 md:w-1/2 mt-24 md:mt-40">
          <div className="flex flex-col sm:flex-row -mt-40 sm:mt-4 justify-between gap-4 text-white font-medium">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl text-cyan-300">Quick Links</h3>
              <a href="/services/package-sightseeing-tours" className="hover:text-cyan-300 text-sm sm:text-base">Tours</a>
              <a href="/services/trekking" className="hover:text-cyan-300 text-sm sm:text-base">Treks</a>
              <a href="/contact" className="hover:text-cyan-300 text-sm sm:text-base">Contact</a>
              <a href="/about-us" className="hover:text-cyan-300 text-sm sm:text-base">About Us</a>
              <a href="/blog" className="hover:text-cyan-300 text-sm sm:text-base">Stories</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl text-cyan-300">Contact</h3>
              <a href="tel:+9779841376470" className="flex items-center gap-2 hover:text-cyan-300 text-sm sm:text-base">
                <FaPhone /> +977 9841376470
              </a>
              <a href="mailto:himkalaadventure@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 text-sm sm:text-base">
                <FaEnvelope /> himkalaadventure@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-4 flex-wrap justify-center md:justify-start items-center">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-all duration-300 transform hover:scale-110">
                {link.icon && typeof link.icon === "function" ? <link.icon size={20} /> : link.icon}
              </a>
            ))}
            <a href="https://www.tripadvisor.com/Attraction_Review-g293890-d8417075-Reviews-Himkala_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html" target="_blank" rel="noopener noreferrer" className="ml-1 transform transition-transform duration-500 hover:scale-105 floatLogo">
              <Image src="/images/TripAdvisor-Logo.png" width={100} height={40} alt="TripAdvisor Logo" />
            </a>
          </div>
        </div>
      </div>

 {/* Footer bottom section (terms above copyright) */}
<div className="relative z-30 w-full px-4 py-4 flex flex-col items-center text-white text-sm gap-2 text-center">
  {/* Terms and Privacy Links */}
  <div className="flex gap-4 mb-2 justify-center">
    <button
      onClick={() => setTermsOpen(true)}
      className="text-cyan-300 hover:underline text-sm"
    >
      Terms and Conditions
    </button>
    <button
      onClick={() => setPrivacyOpen(true)}
      className="text-cyan-300 hover:underline text-sm"
    >
      Privacy Policy
    </button>
  </div>

  {/* Copyright */}
  <div className="flex flex-col items-center gap-1">
    <div>© 2015 - today. All rights reserved. Himkala Adventure.</div>
    <div>
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





      {/* Animations */}
      <style jsx>{`
        @keyframes scrollHorizontally { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-30px) translateX(20px); } }
        @keyframes floatMedium { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(-15px); } }
        @keyframes floatFast { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-15px) translateX(10px); } }

        .animate-scrollHorizontally { animation: scrollHorizontally 60s linear infinite; }
        .animate-floatSlow { animation: floatSlow 12s ease-in-out infinite; }
        .animate-floatMedium { animation: floatMedium 8s ease-in-out infinite; }
        .animate-floatFast { animation: floatFast 6s ease-in-out infinite; }
      `}</style>
    </footer>
  );
};
