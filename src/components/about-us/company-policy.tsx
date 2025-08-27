"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { FileText, CreditCard, Calendar, Plane, Shield, AlertCircle, RefreshCw, FileWarning } from "lucide-react"

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function CompanyPolicySection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      aria-labelledby="company-policy-heading"
      className="relative w-full overflow-hidden rounded-lg border border-[#6CA0DC] bg-[#D8E6F3] sm:bg-gradient-to-br sm:from-[#D8E6F3]/70 sm:to-[#6CA0DC]/60 shadow-lg transition-colors my-12"
    >
      {/* Decorative background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full"
        style={{ background: "radial-gradient(120px 120px at 70% 30%, rgba(108,160,220,0.15), transparent 65%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-12 h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(140px 140px at 40% 60%, rgba(216,230,243,0.1), transparent 60%)" }} />

      {/* Decorative icons */}
      <FileText className="absolute -left-4 -top-4 h-24 w-24 text-[#375D87]/40" />
      <Shield className="absolute -right-4 -bottom-4 h-24 w-24 text-[#375D87]/40" />

      <div className="relative p-6 sm:p-8 md:p-10">
        <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
          <span className="text-sm font-medium uppercase tracking-wide text-[#375D87]">Company Policy</span>
        </motion.div>

        <motion.h2 variants={itemVariants} id="company-policy-heading"
          className="font-heading text-3xl font-bold tracking-tight text-[#375D87] sm:text-4xl mb-8">
          Booking Terms & Conditions
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Down Payment */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Down Payment</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>20% down payment required to secure your place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>15% if booking more than ten weeks prior to arrival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Contact us for flexibility options</span>
                </li>
              </ul>
            </motion.div>

            {/* Payment Details */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Payment Details</h3>
              </div>
              <div className="text-sm text-[#375D87]">
                <p className="font-medium mb-2 text-[#375D87]">FOR CREDIT TO:</p>
                <p>Nepal Investment Mega Bank Nepal Ltd.</p>
                <p>Kathmandu, Nepal</p>
                <p className="mt-3 font-medium text-[#375D87]">SWIFT: NIBLNPKT</p>
                <p className="mt-3 font-medium text-[#375D87]">BENEFICIARY FINAL CREDIT TO:</p>
                <p>A/C Holder's Name: Himkala Adventure Pvt. Ltd.</p>
                <p>A/C No: 13201100002097</p>
                <p>Nepal Investment Mega Bank Nepal Ltd</p>
                <p>Thamel, Kathmandu</p>
              </div>
            </motion.div>

            {/* Balance Payment */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Payment of Balance</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Remaining balance payable after arrival in Nepal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>4% handling charge for credit card payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>No charge for bank transfers</span>
                </li>
              </ul>
            </motion.div>

            {/* Last Minute Booking */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Last Minute Booking</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Accepted for Nepal trips only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Not available for India, Bhutan, or Tibet trips</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Refund Policy */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Refund Policy</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>No refund of 15% deposit for cancellations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Cancellation charges apply even for full payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Written notification required for cancellations</span>
                </li>
              </ul>
            </motion.div>

            {/* Supplement Charge */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Supplement Charge</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Rooms/tents provided on twin sharing basis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Single supplement charge applies for solo travelers</span>
                </li>
              </ul>
            </motion.div>

            {/* Incomplete Tour */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Incomplete Tour</h3>
              </div>
              <p className="text-[#375D87]">No refund for unused portions of the itinerary if you drop out from the journey.</p>
            </motion.div>

            {/* Unforeseen Circumstances */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Unforeseen Circumstances</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>If we cancel due to war, natural disasters, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>We'll offer an alternative trip or full refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Other expenses incurred are your responsibility</span>
                </li>
              </ul>
            </motion.div>

            {/* Travel Insurance */}
            <motion.div variants={itemVariants} className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
              <div className="mb-4 flex items-center gap-3">
                <FileWarning className="h-6 w-6 text-[#6CA0DC]" />
                <h3 className="text-lg font-semibold text-[#375D87]">Travel Insurance</h3>
              </div>
              <ul className="space-y-2 text-[#375D87]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Comprehensive insurance required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Must cover medical, evacuation, trip cancellation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#6CA0DC]" aria-hidden="true" />
                  <span>Ensure policy covers all activities and altitudes</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Additional Policies */}
        <motion.div variants={itemVariants} className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Clients' Responsibility */}
          <div className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
            <div className="mb-3 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-[#6CA0DC]" />
              <h3 className="text-lg font-semibold text-[#375D87]">Clients' Responsibility</h3>
            </div>
            <p className="text-sm text-[#375D87]">Our guides have full authority during tours. Unlawful acts may result in removal from the tour.</p>
          </div>

          {/* Tour Amendment */}
          <div className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
            <div className="mb-3 flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-[#6CA0DC]" />
              <h3 className="text-lg font-semibold text-[#375D87]">Tour Amendment</h3>
            </div>
            <p className="text-sm text-[#375D87]">Prior notice required for itinerary changes. Modifications may occur en route due to circumstances like bad weather.</p>
          </div>

          {/* Paper and Documents */}
          <div className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
            <div className="mb-3 flex items-center gap-3">
              <FileText className="h-5 w-5 text-[#6CA0DC]" />
              <h3 className="text-lg font-semibold text-[#375D87]">Paper and Documents</h3>
            </div>
            <p className="text-sm text-[#375D87]">All necessary documents must be provided in sequence for visas and permits. We're not accountable for missing documents.</p>
          </div>

          {/* Flight Delay/Cancellation */}
          <div className="rounded-lg bg-[#D8E6F3]/60 p-5 ring-1 ring-[#6CA0DC]/20">
            <div className="mb-3 flex items-center gap-3">
              <Plane className="h-5 w-5 text-[#6CA0DC]" />
              <h3 className="text-lg font-semibold text-[#375D87]">Flight Delay/Cancellation</h3>
            </div>
            <p className="text-sm text-[#375D87]">Possible in Himalayan regions due to weather. Itinerary will be modified accordingly.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
