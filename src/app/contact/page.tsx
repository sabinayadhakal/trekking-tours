"use client";

import * as React from "react";
import emailjs from '@emailjs/browser';
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Calendar,
  CheckCircle,
  Mountain,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Script from 'next/script';

// Declare the global grecaptcha object for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_eqhbbzb',
  TEMPLATE_ID: 'template_jg69n0b', 
  PUBLIC_KEY: 'RlgxwbPN2Im6fttW-'
} as const;

// reCAPTCHA Configuration - Using environment variables
const RECAPTCHA_CONFIG = {
  SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
  PROJECT_ID: 'third-light-479206-p6',
} as const;

// Popular treks/tours options for clickable chips
const POPULAR_TREKS = [
  "Everest Base Camp Trek",
  "Annapurna Circuit Trek",
  "Langtang Valley Trek",
  "Manaslu Circuit Trek",
  "Upper Mustang Trek",
  "Ghorepani Poon Hill Trek",
  "Mardi Himal Trek",
  "Bhutan Cultural Tour",
  "Tibet Overland Tour",
  "Free Walking Tour, Kathmandu",
  "Kathmandu, Pokhara, Lumbini, Chitwan Tour",
  "Chitwan National Park Jungle Safari",
  "Annapurna Region Mountain Flight Trip",
  "Everest Region Helicopter Trip",
  "Namobuddha Day Hiking",
  "Island Peak Climbing",
  "Mera Peak Climbing",
];

// Terms Dialog Component
const TermsDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0a1f30] border-white/20 text-white w-[95vw] sm:w-full mx-auto">
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl font-bold text-[#C5E0ED] mb-4 text-center">Terms and Conditions</DialogTitle>
      </DialogHeader>
      <div className="mt-4 space-y-4 text-sm text-white/80 px-2 sm:px-0">
        <p><strong className="text-[#C5E0ED]">Down Payment:</strong></p>
        <p>To secure your place, a 20% down payment is required in advance as per company policy. For bookings more than ten weeks prior to arrival date, a 15% deposit applies. Please contact us if this causes any issues as we try to be flexible.</p>
        <p><strong className="text-[#C5E0ED]">How to pay your deposit:</strong></p>
        <p>You can pay via bank transfer in USD, EUR, or GBP to the following account:</p>
        <p className="bg-white/5 p-3 sm:p-4 rounded-lg text-xs sm:text-sm">
          FOR CREDIT TO:<br />
          Nepal Investment Mega Bank Nepal Ltd.<br />
          Kathmandu, Nepal<br />
          SWIFT: NIBLNPKT
        </p>
        <p className="bg-white/5 p-3 sm:p-4 rounded-lg text-xs sm:text-sm">
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
    </DialogContent>
  </Dialog>
);

// Privacy Dialog Component
const PrivacyDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0a1f30] border-white/20 text-white w-[95vw] sm:w-full mx-auto">
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl font-bold text-[#C5E0ED] mb-4 text-center">Privacy Policy</DialogTitle>
      </DialogHeader>
      <div className="mt-4 space-y-4 text-sm text-white/80 px-2 sm:px-0">
        <p>Himkala Adventure Pvt. Ltd. takes the responsibility of your data seriously and respects your privacy concerning any information we may gather from you across this website.</p>
        <p>Our website uses links to other websites (e.g. Facebook, Instagram, Twitter etc.) to which this data protection declaration does not apply. These sites might collect Device Information. Please be aware that we do not control the content and practices of these sites, and cannot take responsibility for their privacy policies.</p>
        <p>We only collect personal information that we need to provide a service to you (e.g. your name, email address and phone number) when you send us an email through inquiry, booking, or contact form. We collect it by lawful means, with your knowledge and agreement.</p>
        <p>We only keep the gathered information as long as required to provide you with the service you requested. The data we store will be protected with lawful means to prevent loss and theft, as well as unauthorized access, leak, copying, usage, or any adjustment. We don't share any personal information publicly or with third parties unless required by lawful request.</p>
        <p>You have the right to ask that your personal information be corrected, updated, or deleted at any time; please contact us through the contact information available on the website. If you have any queries about how we handle your personal information, please do not hesitate to contact us through email.</p>
        <p>We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
      </div>
    </DialogContent>
  </Dialog>
);

const contactInfo = [
  { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Address", value: "Thamel, Kathmandu, Nepal" },
  { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Phone", value: "+977 9841376470" },
  { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Email", value: "info@himkalaadventure.com" },
  { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Hours", value: "Sun - Fri, 9AM - 6PM" },
];

// Contact Form Content Component
function ContactFormContent() {
  const searchParams = useSearchParams();
  const trekFromUrl = searchParams.get('trek');
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = React.useState(false);
  const [recaptchaError, setRecaptchaError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    tour: trekFromUrl ? decodeURIComponent(trekFromUrl) : "",
    message: "",
  });
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const [termsOpen, setTermsOpen] = React.useState(false);
  const [showMoreTreks, setShowMoreTreks] = React.useState(false);

  // Update when trekFromUrl changes
  React.useEffect(() => {
    if (trekFromUrl) {
      const decodedTrek = decodeURIComponent(trekFromUrl);
      setFormData(prev => ({
        ...prev,
        tour: decodedTrek
      }));
    }
  }, [trekFromUrl]);

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Check if reCAPTCHA site key is available
  React.useEffect(() => {
    if (!RECAPTCHA_CONFIG.SITE_KEY) {
      console.error('reCAPTCHA site key is missing. Check your NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable.');
      setRecaptchaError(true);
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTrekClick = (trek: string) => {
    setFormData((prev) => ({ ...prev, tour: trek }));
  };

  // Execute reCAPTCHA and get token
  const executeRecaptcha = async (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }

      if (!RECAPTCHA_CONFIG.SITE_KEY) {
        reject(new Error('reCAPTCHA site key not configured'));
        return;
      }

      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(
            RECAPTCHA_CONFIG.SITE_KEY,
            { action }
          );
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  // Verify token with backend API - UPDATED WITH BETTER ERROR LOGGING
  const verifyRecaptchaToken = async (token: string, action: string): Promise<boolean> => {
    try {
      console.log('Sending to API:', { 
        token: token.substring(0, 20) + '...', 
        action, 
        projectId: RECAPTCHA_CONFIG.PROJECT_ID 
      });
      
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          action,
          projectId: RECAPTCHA_CONFIG.PROJECT_ID,
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      if (!response.ok) {
        console.error('reCAPTCHA verification failed - Full error:', data);
        
        // Show more details in alert
        let errorMsg = 'Unknown error';
        if (data.details) {
          if (typeof data.details === 'string') {
            errorMsg = data.details;
          } else if (data.details.message) {
            errorMsg = data.details.message;
          } else if (data.details.error) {
            errorMsg = data.details.error.message || JSON.stringify(data.details.error);
          }
        } else if (data.error) {
          errorMsg = data.error;
        }
        
        alert(`Verification failed: ${errorMsg} (Status: ${response.status})`);
        return false;
      }

      // Check if the token is valid
      if (!data.valid) {
        console.warn('reCAPTCHA token is invalid:', data);
        const reason = data.invalidReason ? ` (${data.invalidReason})` : '';
        alert(`Invalid token${reason}. Please refresh and try again.`);
        return false;
      }

      // Check if the score is above threshold (0.5 is a common threshold)
      if (data.score < 0.5) {
        console.warn('reCAPTCHA score too low:', data.score);
        alert(`Score too low: ${data.score}. Please try again.`);
        return false;
      }

      // Verify the action matches
      if (data.action !== action) {
        console.warn('reCAPTCHA action mismatch:', data.action, 'vs', action);
        alert('Action mismatch. Please refresh and try again.');
        return false;
      }

      console.log('reCAPTCHA verification successful! Score:', data.score);
      return true;
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  };

  const sendEmail = async (data: any) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        preferred_trek: data.tour,
        message: data.message || 'No message provided',
        to_email: 'himkalaadventure@gmail.com',
        reply_to: data.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);
      return true;
      
    } catch (error: any) {
      console.error("Email sending failed:", error);
      
      // Try fallback with different parameters
      try {
        const fallbackTemplateParams = {
          user_name: data.name,
          user_email: data.email,
          user_phone: data.phone || 'Not provided',
          user_trek: data.tour,
          user_message: data.message || 'No message provided',
          to_email: 'himkalaadventure@gmail.com',
        };

        const fallbackResponse = await emailjs.send(
          'service_eqhbbzb',
          'template_jg69n0b',
          fallbackTemplateParams,
          'RlgxwbPN2Im6fttW-'
        );

        console.log("Email sent with fallback params:", fallbackResponse);
        return true;
      } catch (fallbackError) {
        console.error("All email sending methods failed:", fallbackError);
        throw error;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    setRecaptchaError(false);
    setIsSubmitting(true);
    
    try {
      // Check if reCAPTCHA is configured
      if (!RECAPTCHA_CONFIG.SITE_KEY) {
        console.warn('reCAPTCHA not configured, skipping verification');
        // Still allow form submission if reCAPTCHA is not configured
        await sendEmail(formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        return;
      }

      // Execute reCAPTCHA
      let token;
      try {
        token = await executeRecaptcha('submit_contact_form');
        console.log('reCAPTCHA token generated:', token.substring(0, 20) + '...');
      } catch (recaptchaError) {
        console.error('reCAPTCHA execution failed:', recaptchaError);
        setRecaptchaError(true);
        alert('Security verification failed. Please try again or contact us directly.');
        setIsSubmitting(false);
        return;
      }

      // Verify token with backend
      const isValid = await verifyRecaptchaToken(token, 'submit_contact_form');
      
      if (!isValid) {
        setRecaptchaError(true);
        // Don't show another alert here since verifyRecaptchaToken already shows one
        setIsSubmitting(false);
        return;
      }

      // Send email only if reCAPTCHA passes
      await sendEmail(formData);
      
      console.log("Form submitted successfully!");
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          tour: "", 
          message: "" 
        });
      }, 5000);
      
    } catch (err: any) {
      console.error('Error submitting form:', err);
      
      if (err.text) {
        try {
          const errorObj = JSON.parse(err.text);
          if (errorObj.error === "Missing 'to_email' parameter") {
            alert("Email configuration error. Please contact us directly at himkalaadventure@gmail.com");
          } else {
            alert("There was an error sending your inquiry. Please try again.");
          }
        } catch {
          alert("There was an error submitting your enquiry. Please try again.");
        }
      } else if (err.message?.includes('quota') || err.message?.includes('limit')) {
        alert("Our email service is currently busy. Please try again in a few minutes.");
      } else {
        alert("There was an error submitting your enquiry. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[400px] flex items-center justify-center px-4">
        <div className="text-center w-full max-w-md">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#0f2940]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0f2940] mb-3 sm:mb-4">Thank You!</h2>
          <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6 px-2">
            We&apos;ve received your inquiry and will get back to you within 24 hours. Get ready for your Himalayan adventure!
          </p>
          <div className="space-y-3 sm:space-y-4 px-2">
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", phone: "", tour: "", message: "" });
              }}
              className="w-full bg-gradient-to-r from-[#C5E0ED] to-[#9dcae0] text-[#0f2940] font-bold rounded-lg sm:rounded-xl px-4 h-11 sm:h-12 text-sm sm:text-base"
            >
              Send Another Inquiry
            </Button>
            <a
              href="https://wa.me/9779841376470"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg sm:rounded-xl h-10 sm:h-11 text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />

      {/* Load reCAPTCHA Enterprise script only if site key exists */}
      {RECAPTCHA_CONFIG.SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_CONFIG.SITE_KEY}`}
          onLoad={() => {
            console.log('reCAPTCHA script loaded successfully');
            setRecaptchaLoaded(true);
          }}
          onError={(e) => {
            console.error('Failed to load reCAPTCHA:', e);
            setRecaptchaError(true);
          }}
        />
      )}

      <form onSubmit={handleSubmit} className="w-full">
        {trekFromUrl && (
          <div className="bg-gradient-to-r from-[#C5E0ED]/20 to-transparent border border-[#C5E0ED]/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 w-full">
            <p className="text-[#0f2940] font-medium text-sm sm:text-base">
              You&apos;re booking: <span className="font-bold">{decodeURIComponent(trekFromUrl)}</span>
            </p>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Tell us how you&apos;d like to customize this trip
            </p>
          </div>
        )}

        <div className="space-y-4 sm:space-y-6 w-full">
          {/* Name */}
          <div className="space-y-1.5 sm:space-y-2 w-full">
            <Label htmlFor="name" className="text-[#0f2940] font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d6a8a]" />
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="h-10 sm:h-12 rounded-lg sm:rounded-xl border-slate-200 focus:border-[#C5E0ED] focus:ring-1 focus:ring-[#C5E0ED]/20 bg-[#f8fbfc] text-sm sm:text-base w-full"
              required
              autoComplete="name"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5 sm:space-y-2 w-full">
            <Label htmlFor="email" className="text-[#0f2940] font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d6a8a]" />
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-10 sm:h-12 rounded-lg sm:rounded-xl border-slate-200 focus:border-[#C5E0ED] focus:ring-1 focus:ring-[#C5E0ED]/20 bg-[#f8fbfc] text-sm sm:text-base w-full"
              required
              autoComplete="email"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5 sm:space-y-2 w-full">
            <Label htmlFor="phone" className="text-[#0f2940] font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d6a8a]" />
              Phone / WhatsApp <span className="text-slate-400 text-xs font-normal">(Optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+977 9841376470"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="h-10 sm:h-12 rounded-lg sm:rounded-xl border-slate-200 focus:border-[#C5E0ED] focus:ring-1 focus:ring-[#C5E0ED]/20 bg-[#f8fbfc] text-sm sm:text-base w-full"
              autoComplete="tel"
            />
          </div>

          {/* Preferred Tour */}
          <div className="space-y-1.5 sm:space-y-2 w-full">
            <Label htmlFor="tour" className="text-[#0f2940] font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
              <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d6a8a]" />
              Preferred Tour / Trek <span className="text-slate-400 text-xs font-normal">(Optional)</span>
            </Label>
            <Input
              id="tour"
              placeholder="e.g., Everest Base Camp, Annapurna Circuit"
              value={formData.tour}
              onChange={(e) => handleChange("tour", e.target.value)}
              className="h-10 sm:h-12 rounded-lg sm:rounded-xl border-slate-200 focus:border-[#C5E0ED] focus:ring-1 focus:ring-[#C5E0ED]/20 bg-[#f8fbfc] text-sm sm:text-base w-full"
            />
            
            {/* Popular Trek Chips */}
            <div className="mt-2 sm:mt-3 w-full">
              <p className="text-xs text-slate-500 mb-1.5 sm:mb-2">Popular treks (click to select):</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full">
                {POPULAR_TREKS.slice(0, showMoreTreks ? POPULAR_TREKS.length : 4).map((trek) => (
                  <button
                    key={trek}
                    type="button"
                    onClick={() => handleTrekClick(trek)}
                    className={`px-2.5 py-1.5 text-[11px] sm:text-xs rounded-md border transition-colors flex-shrink-0 ${
                      formData.tour === trek
                        ? 'bg-[#C5E0ED] text-[#0f2940] border-[#C5E0ED]'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-[#f0f7fa] hover:border-[#C5E0ED]/50'
                    }`}
                  >
                    {trek}
                  </button>
                ))}
              </div>
              
              {POPULAR_TREKS.length > 4 && (
                <button
                  type="button"
                  onClick={() => setShowMoreTreks(!showMoreTreks)}
                  className="mt-1.5 text-xs text-[#2d6a8a] hover:text-[#0f2940] font-medium flex items-center gap-0.5 sm:gap-1"
                >
                  {showMoreTreks ? 'Show less' : `Show ${POPULAR_TREKS.length - 4} more`}
                  {showMoreTreks ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5 sm:space-y-2 w-full">
            <Label htmlFor="message" className="text-[#0f2940] font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d6a8a]" />
              How would you like your trip planned?
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us your customization preferences (optional):
• Preferred dates and duration
• Number of people in your group
• Budget considerations
• Special requirements or interests
• Any specific changes to the itinerary"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="min-h-[100px] sm:min-h-[120px] rounded-lg sm:rounded-xl border-slate-200 focus:border-[#C5E0ED] focus:ring-1 focus:ring-[#C5E0ED]/20 bg-[#f8fbfc] resize-none text-sm sm:text-base w-full"
            />
          </div>

          {/* Privacy/Terms Notice */}
          <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-[#f8fbfc] border border-[#C5E0ED]/30 rounded-lg sm:rounded-xl w-full">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f2940] shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-[#0f2940] font-medium">Security & Privacy</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                By submitting, you agree to our{' '}
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="underline hover:text-[#2d6a8a] transition-colors"
                >
                  Privacy Policy
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => setTermsOpen(true)}
                  className="underline hover:text-[#2d6a8a] transition-colors"
                >
                  Terms of Service
                </button>.
              </p>
            </div>
          </div>

          {/* reCAPTCHA Error Message */}
          {recaptchaError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-xs text-red-600">
                Security verification failed. Please refresh the page and try again, or contact us directly.
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 sm:h-14 bg-[#0f2940] hover:bg-[#1a4166] text-white font-bold rounded-lg sm:rounded-xl text-sm sm:text-base shadow-md sm:shadow-lg shadow-[#0f2940]/10 sm:shadow-[#0f2940]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </span>
            ) : !recaptchaLoaded && RECAPTCHA_CONFIG.SITE_KEY ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Loading security...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Inquiry
              </span>
            )}
          </Button>

          <p className="text-center text-xs text-slate-500 px-2 w-full">
            We respond within 24 hours. Your information is safe with us.
          </p>
        </div>
      </form>
    </>
  );
}

// Main component with Suspense
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="pt-6 pb-8 sm:pt-8 sm:pb-12 bg-[#0f2940]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            {/* Badge */}
            <Badge className="mb-4 sm:mb-6 bg-[#0a1e32] text-white border-[#C5E0ED] py-1.5 sm:py-2 px-4 sm:px-5 text-xs sm:text-sm mx-auto">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> 
              Get In Touch
            </Badge>
            
            {/* Main title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4 text-center">
              Plan Your <span className="text-[#C5E0ED] font-bold">Adventure</span>
            </h1>
            
            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center px-2 sm:px-0">
Where would you like to go? Share your ideas with us, and we'll create an experience that feels like it was made just for you.            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
            {/* Contact Form */}
            <div className="lg:w-3/5 mb-8 lg:mb-0">
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-xl shadow-[#0f2940]/5 overflow-hidden mx-auto w-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-10">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C5E0ED] to-[#9dcae0] rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f2940]" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-[#0f2940]">Trip Inquiry Form</h2>
                      <p className="text-xs sm:text-sm text-slate-500">Fill in your details to get started</p>
                    </div>
                  </div>

                  <Suspense fallback={
                    <div className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
                      <div className="text-slate-400 text-sm sm:text-base">Loading contact form...</div>
                    </div>
                  }>
                    <ContactFormContent />
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:w-2/5 space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <Card className="bg-[#0f2940] border-none rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center">Contact Information</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {contactInfo.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C5E0ED]/20 rounded-lg sm:rounded-xl flex items-center justify-center text-[#C5E0ED] shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-white/50 uppercase tracking-wider">{item.label}</p>
                          <p className="text-white text-sm sm:text-base font-medium break-words">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-[#f0f7fa] border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C5E0ED] rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f2940]" />
                    </div>
                    <h4 className="font-bold text-[#0f2940] text-sm sm:text-base">Quick Response</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our team responds to all inquiries within 24 hours. For urgent matters, call us directly or send a WhatsApp message.
                  </p>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-white border-[#C5E0ED]/30 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-[#0f2940] text-sm sm:text-base">WhatsApp Us</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    Prefer instant messaging? Chat with us directly on WhatsApp for quick responses.
                  </p>
                  <a
                    href="https://wa.me/9779841376470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg sm:rounded-xl h-10 sm:h-11 text-xs sm:text-sm">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Emergency Card */}
              <Card className="bg-white border-red-200 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <h4 className="font-bold text-[#0f2940] text-sm sm:text-base">Emergency Contact</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    For urgent assistance during treks or tours, call our 24/7 emergency line.
                  </p>
                  <a
                    href="tel:+9779841376470"
                    className="block w-full"
                  >
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg sm:rounded-xl h-10 sm:h-11 text-xs sm:text-sm">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      Call Emergency Line
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Performance and alignment fixes */}
      <style jsx global>{`
        /* Ensure proper alignment and prevent right inclination */
        .container {
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Center all form elements */
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Ensure inputs don't overflow or shift */
        input, textarea, button {
          max-width: 100%;
        }
        
        /* Improve form input readability on mobile */
        input, textarea {
          font-size: 16px !important;
        }
        
        /* Make sure trek chips are properly aligned */
        .flex-wrap {
          justify-content: flex-start;
        }
        
        /* Center dialog content */
        [role="dialog"] > div {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}