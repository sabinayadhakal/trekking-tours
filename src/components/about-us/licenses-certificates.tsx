"use client"

import * as React from "react"
import Image from "next/image"
import { Award, FileText, Shield, CheckCircle, Calendar, BookOpen, X } from "lucide-react"
import { motion } from "framer-motion"

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

export default function LicensesCertifications({
  className,
  style,
  title = "Licenses & Certifications",
  subtitle = "Our commitment to excellence and professionalism",
  items,
}: LicensesCertificationsProps) {
  const [selectedImage, setSelectedImage] = React.useState<{
    src: string
    alt: string
    title: string
    organization: string
  } | null>(null)

  const openModal = (item: LicenseCertification) => {
    if (item.imageSrc) {
      setSelectedImage({
        src: item.imageSrc,
        alt: item.imageAlt || `${item.title} certification`,
        title: item.title,
        organization: item.issuingOrganization
      })
    }
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
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
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-[#375D87]" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-wide text-[#375D87]">
                Professional Credentials
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              id="licenses-certifications-heading"
              className="font-heading text-3xl font-bold tracking-tight text-[#375D87] sm:text-4xl"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mt-4 max-w-2xl mx-auto text-lg text-[#375D87]"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col h-full rounded-lg bg-white overflow-hidden border border-[#6CA0DC]/20 shadow-md transition-all hover:shadow-lg"
              >
                {/* Image section - now clickable */}
                {item.imageSrc ? (
                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    onClick={() => openModal(item)}
                    className="relative h-48 w-full overflow-hidden bg-[#D8E6F3] cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#6CA0DC] focus:ring-offset-2"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || `${item.title} certification`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#375D87]/10 to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#375D87]/0 transition-all duration-300 group-hover:bg-[#375D87]/20 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                        <FileText className="h-6 w-6 text-[#375D87]" />
                      </div>
                    </div>
                  </motion.button>
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
          </div>

          {/* Empty state */}
          {items.length === 0 && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <FileText className="mx-auto h-12 w-12 text-[#6CA0DC]/60 mb-4" />
              <h3 className="text-lg font-medium text-[#375D87]">No certifications to display</h3>
              <p className="mt-2 text-[#375D87]">Our certifications will be listed here soon.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#6CA0DC]/20 bg-[#D8E6F3]">
              <div>
                <h3 className="font-semibold text-lg text-[#375D87]">{selectedImage.title}</h3>
                <p className="text-sm text-[#375D87]">{selectedImage.organization}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6CA0DC]"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-[#375D87]" />
              </button>
            </div>

            {/* Image */}
            <div className="relative h-[70vh] w-full bg-gray-100">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#6CA0DC]/20 bg-white">
              <p className="text-sm text-[#375D87] text-center">
                Click outside or press ESC to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}