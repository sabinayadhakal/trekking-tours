// app/contact/page.tsx - Updated with optional message field

"use client"

import { useState, useEffect } from "react"
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaLinkedin, FaTiktok, FaPinterest, FaWhatsapp, FaPaperPlane 
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser'
import { useSearchParams } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ojt7njt',
  TEMPLATE_ID: 'template_jg69n0b', 
  PUBLIC_KEY: 'RlgxwbPN2Im6fttW-'
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfwMAwsAAAAACKKJ6cMAFle1qwzY6Qf-MFMhWVH"

interface BlogContentProps {
  posts?: { title: string }[]
  onSubmit?: () => void
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Privacy Policy Dialog Component
const PrivacyPolicyDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-[#346272]">Privacy Policy</DialogTitle>
        <DialogDescription className="sr-only">
          Privacy policy details
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4 space-y-4 text-[#3c5d63]">
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

// Terms and Conditions Dialog Component
const TermsDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-[#346272]">Terms and Conditions</DialogTitle>
        <DialogDescription className="sr-only">
          Terms and conditions details
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4 space-y-4 text-[#3c5d63]">
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
    </DialogContent>
  </Dialog>
);

export default function ContactSection({ posts = [], onSubmit }: BlogContentProps) {
  const searchParams = useSearchParams()
  const trekFromUrl = searchParams.get('trek')
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTrek: trekFromUrl ? decodeURIComponent(trekFromUrl) : "",
    message: "",
  })
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  // Update preferredTrek when trekFromUrl changes
  useEffect(() => {
    if (trekFromUrl) {
      setFormData(prev => ({
        ...prev,
        preferredTrek: decodeURIComponent(trekFromUrl)
      }))
    }
  }, [trekFromUrl])

  // Check if reCAPTCHA is loaded and ready
  useEffect(() => {
    const checkRecaptcha = () => {
      if (typeof window.grecaptcha !== 'undefined' && 
          typeof window.grecaptcha.ready !== 'undefined' &&
          typeof window.grecaptcha.execute !== 'undefined') {
        setIsRecaptchaReady(true)
      }
    }

    // Check immediately
    checkRecaptcha()

    // Also check after a delay in case it's still loading
    const timer = setTimeout(checkRecaptcha, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  // Get reCAPTCHA token with better error handling
  const getRecaptchaToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Check if reCAPTCHA is available
      if (typeof window.grecaptcha === 'undefined') {
        reject(new Error('reCAPTCHA not loaded. Please refresh the page.'))
        return
      }

      if (typeof window.grecaptcha.ready === 'undefined' || 
          typeof window.grecaptcha.execute === 'undefined') {
        reject(new Error('reCAPTCHA not properly initialized.'))
        return
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { 
            action: 'contact_form' 
          })
          resolve(token)
        } catch (err) {
          reject(new Error(`reCAPTCHA execution failed: ${err}`))
        }
      })
    })
  }

  // Verify reCAPTCHA token with backend
  const verifyRecaptcha = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      return data.success
    } catch (error) {
      console.error('reCAPTCHA verification failed:', error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation - Message is now optional
    if (!formData.name.trim()) {
      setError("Please enter your name")
      return
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address")
      return
    }
    if (!formData.preferredTrek.trim()) {
      setError("Please specify your preferred trek")
      return
    }
    // Note: Removed validation for message field - it's now optional
    
    setIsSubmitting(true)
    setError("")
    
    try {
      // Get reCAPTCHA token
      let token: string
      try {
        token = await getRecaptchaToken()
      } catch (recaptchaError: any) {
        console.warn('reCAPTCHA failed, proceeding without it:', recaptchaError.message)
        // If reCAPTCHA fails, we can choose to proceed anyway or show error
        // For now, let's proceed but you might want to be stricter in production
        token = 'bypass_due_to_error'
      }

      // Only verify if we got a real token
      let isHuman = true
      if (token !== 'bypass_due_to_error') {
        isHuman = await verifyRecaptcha(token)
        
        if (!isHuman) {
          setError("Security verification failed. Please try again.")
          return
        }
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        preferred_trek: formData.preferredTrek,
        message: formData.message || 'No message provided',
        to_email: 'himkalaadventure@gmail.com',
        recaptcha_token: token
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      
      console.log("Email sent successfully!")
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        preferredTrek: trekFromUrl ? decodeURIComponent(trekFromUrl) : "", 
        message: "" 
      })
      setSuccess(true)
      onSubmit?.()
      setTimeout(() => setSuccess(false), 4000)
      
    } catch (err: any) {
      console.error('Error sending email:', err)
      
      // More specific error messages
      if (err.message?.includes('reCAPTCHA')) {
        setError("Security service issue. Please refresh the page and try again.")
      } else if (err.text?.includes('Quota exceeded')) {
        setError("We're experiencing high volume. Please try again later or contact us directly.")
      } else {
        setError("There was an error submitting your enquiry. Please try again or contact us directly.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/share/1K5sDKJ5po/?mibextid=wwXIfr", icon: FaFacebook },
    { name: "Instagram", href: "https://www.instagram.com/himkalaadventure?igsh=MTc4aDR0bm92ODd0NQ%3D%3D&utm_source=qr", icon: FaInstagram },
    { name: "Twitter", href: "https://x.com/himkalanepal?s=21&t=2wPjjwhkMD0rUThQZq-5jQ", icon: FaTwitter },
    { name: "YouTube", href: "https://www.youtube.com/@himkalaadventure5936", icon: FaYoutube },
    { name: "LinkedIn", href: "https://linkedin.com/yourpage", icon: FaLinkedin },
    { name: "TikTok", href: "https://www.tiktok.com/@himkalaadventure", icon: FaTiktok },
    { name: "Pinterest", href: "https://www.pinterest.com/HimkalaNepal/_profile/", icon: FaPinterest },
    { name: "WhatsApp", href: "https://wa.me/9779841376470", icon: FaWhatsapp },
  ]

  return (
    <>
      {/* Dialogs */}
      <PrivacyPolicyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />

      <AnimatePresence>
        {!success ? (
          <motion.form 
            onSubmit={handleSubmit} 
            className="mt-6 sm:mt-0 space-y-6 bg-[#f1f9fb] p-10 md:p-12 rounded-3xl shadow-lg border border-[#c9e0e5] w-full max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#346272] mb-6 text-center">Your Trip, Your Way</h2>
            
            {trekFromUrl && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800 font-medium">
                  You're customizing: <span className="font-bold">{decodeURIComponent(trekFromUrl)}</span>
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  Tell us how you'd like to customize this trip (dates, duration, group size, etc.)
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {error}
              </div>
            )}

            {/* reCAPTCHA status indicator */}
            {!isRecaptchaReady && (
              <div className="text-xs text-gray-500 text-center mb-2">
                ⏳ Loading security verification...
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-[#3c5d63] mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-[#3c5d63] mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-[#3c5d63] mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+977 9841376470"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="preferredTrek" className="text-sm font-medium text-[#3c5d63] mb-1">Preferred Trek/ Tour *</label>
                <input
                  type="text"
                  id="preferredTrek"
                  name="preferredTrek"
                  placeholder="E.g., Everest Base Camp, Annapurna Circuit"
                  value={formData.preferredTrek}
                  onChange={handleChange}
                  className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition bg-white"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-[#3c5d63] mb-1">
                How would you like your trip planned?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us your customization preferences (optional):
• Preferred dates and duration
• Number of people in your group
• Budget considerations
• Special requirements or interests
• Any specific changes to the itinerary"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition resize-none bg-white"
                rows={6}
                // Removed the required attribute
              />
            </div>

            {/* reCAPTCHA notice with clickable links */}
            <div className="text-xs text-gray-500 text-center">
              This site is protected by reCAPTCHA and the Google{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="underline hover:text-[#346272] transition-colors"
              >
                Privacy Policy
              </button>{' '}
              and{' '}
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="underline hover:text-[#346272] transition-colors"
              >
                Terms of Service
              </button>
              {' '}apply.
            </div>

            <div className="text-center mt-6 sm:mt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-[#4b8690] text-white px-6 py-3 rounded-xl hover:bg-[#3a6a72] font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Request"} <FaPaperPlane className="w-5 h-5" />
              </button>
              <p className="mt-3 text-xs sm:text-sm text-[#2f4b53]">
                By clicking this button, you agree to let us contact you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d5ebef] text-[#346272] hover:bg-[#bde0e5] hover:text-[#1f3338] transition text-xl"
                    title={social.name}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ scale: 0, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="mt-8 text-[#346272] font-semibold text-center text-lg max-w-2xl mx-auto p-8 bg-green-100 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-2">Thank you for your request! 🎉</h3>
            <p>We've received your request and will work on it for you within a few hours.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}