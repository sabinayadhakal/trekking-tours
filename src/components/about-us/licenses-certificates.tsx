"use client"

import * as React from "react"
import Image from "next/image"
import { Award, FileText, Shield, CheckCircle, Calendar, BookOpen } from "lucide-react"
import { motion, Variants } from "framer-motion"

export type LicenseCertification = {
  title: string
  issuingOrganization: string
  issueDate?: string
  expirationDate?: string
  credentialId?: string
  credentialUrl?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

export type LicensesCertificationsProps = {
  className?: string
  style?: React.CSSProperties
  title?: string
  subtitle?: string
  items: LicenseCertification[]
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

const imageVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
}

export default function LicensesCertifications({
  className,
  style,
  title = "Licenses & Certifications",
  subtitle = "Our commitment to excellence and professionalism",
  items,
}: LicensesCertificationsProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      aria-labelledby="licenses-certifications-heading"
      className={[
        "relative w-full overflow-hidden rounded-lg border border-[#6CA0DC]",
        "bg-[#D8E6F3] sm:bg-gradient-to-br sm:from-[#D8E6F3]/70 sm:to-[#6CA0DC]/60",
        "shadow-lg transition-colors",
        className || "",
      ].join(" ")}
      style={style}
    >
      {/* Decorative circles */}
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[#D8E6F3]/30 pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 h-72 w-72 rounded-full bg-[#6CA0DC]/30 pointer-events-none" />
      
      {/* Blue-themed icons */}
      <BookOpen className="absolute -left-4 -top-4 h-24 w-24 text-[#375D87]/10" />
      <Shield className="absolute -right-4 -bottom-4 h-24 w-24 text-[#375D87]/10" />
      <Award className="absolute right-12 top-12 h-16 w-16 text-[#375D87]/10" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#375D87]" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-wide text-[#375D87]">
              Professional Credentials
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            id="licenses-certifications-heading"
            className="font-heading text-3xl font-bold tracking-tight text-[#375D87] sm:text-4xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-[#375D87]">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col h-full rounded-lg bg-white overflow-hidden border border-[#6CA0DC]/20 shadow-md transition-all hover:shadow-lg"
            >
              {/* Image section */}
              {item.imageSrc ? (
                <motion.div variants={imageVariants} className="relative h-48 w-full overflow-hidden bg-[#D8E6F3]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || `${item.title} certification`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#375D87]/10 to-transparent" />
                </motion.div>
              ) : (
                <div className="relative h-48 w-full overflow-hidden bg-[#D8E6F3] flex items-center justify-center">
                  <FileText className="h-16 w-16 text-[#375D87]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#375D87]/10 to-transparent" />
                </div>
              )}

              {/* Content section */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-lg text-[#375D87] mb-2">{item.title}</h3>
                <p className="text-[#375D87] mb-4 flex-1">{item.issuingOrganization}</p>

                {/* Dates */}
                <div className="space-y-2 mb-4">
                  {item.issueDate && (
                    <div className="flex items-center text-sm text-[#375D87]">
                      <Calendar className="h-4 w-4 mr-2 text-[#6CA0DC]" />
                      <span>Issued: {item.issueDate}</span>
                    </div>
                  )}
                  {item.expirationDate && (
                    <div className="flex items-center text-sm text-[#375D87]">
                      <Calendar className="h-4 w-4 mr-2 text-[#6CA0DC]" />
                      <span>Expires: {item.expirationDate}</span>
                    </div>
                  )}
                </div>

                {item.credentialId && (
                  <div className="mb-4">
                    <span className="text-xs font-medium text-[#375D87] bg-[#D8E6F3] px-2 py-1 rounded">
                      ID: {item.credentialId}
                    </span>
                  </div>
                )}

                {item.description && (
                  <p className="text-sm text-[#375D87] mb-4">{item.description}</p>
                )}

                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#6CA0DC] hover:text-[#375D87] mt-auto"
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Verify credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {items.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-[#6CA0DC]/60 mb-4" />
            <h3 className="text-lg font-medium text-[#375D87]">No certifications to display</h3>
            <p className="mt-2 text-[#375D87]">Our certifications will be listed here soon.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
