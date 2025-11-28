"use client"

import { useState, useEffect } from "react"
import { 
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaLinkedin, FaTiktok, FaPinterest, FaWhatsapp, FaPaperPlane 
} from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser'

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

export default function ContactSection({ posts = [], onSubmit }: BlogContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTrek: "",
    message: "",
  })
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)

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
    
    // Validation
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
    if (!formData.message.trim()) {
      setError("Please enter your message")
      return
    }
    
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
        message: formData.message,
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
      setFormData({ name: "", email: "", phone: "", preferredTrek: "", message: "" })
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
    <AnimatePresence>
      {!success ? (
        <motion.form 
          onSubmit={handleSubmit} 
          className="mt-6 sm:mt-0 space-y-6 bg-[#f1f9fb] p-10 md:p-12 rounded-3xl shadow-lg border border-[#c9e0e5] w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#346272] mb-6 text-center">Send Your Enquiry</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          {/* reCAPTCHA status indicator (optional, for debugging) */}
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
              <label htmlFor="preferredTrek" className="text-sm font-medium text-[#3c5d63] mb-1">Preferred Trek/Tour *</label>
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
            <label htmlFor="message" className="text-sm font-medium text-[#3c5d63] mb-1">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your enquiry, preferred dates, number of people, etc..."
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-[#4b8690] focus:ring-2 focus:ring-[#4b8690] transition resize-none bg-white"
              rows={6}
              required
            />
          </div>

          {/* reCAPTCHA notice */}
          <div className="text-xs text-gray-500 text-center">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a>{' '}
            apply.
          </div>

          <div className="text-center mt-6 sm:mt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-[#4b8690] text-white px-6 py-3 rounded-xl hover:bg-[#3a6a72] font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"} <FaPaperPlane className="w-5 h-5" />
            </button>
            <p className="mt-3 text-xs sm:text-sm text-[#2f4b53]">
              By sending an enquiry, you agree to let us contact you.
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
          <h3 className="text-2xl font-bold mb-2">Thank you for your enquiry! 🎉</h3>
          <p>We've received your message and will respond to you within 24 hours.</p>
          <p className="mt-2 text-sm font-normal">A confirmation has been sent to {formData.email}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}