"use client"

import * as React from "react"
import Image from "next/image"
import { Award, Clock, Quote, Compass, Flag, Mountain, Trees, Map } from "lucide-react"
import { motion } from "framer-motion"

export type ManagingDirectorSectionProps = {
  className?: string
  style?: React.CSSProperties
  name: string
  title?: string
  headshotSrc: string
  headshotAlt?: string
  background: string
  vision: string
  yearsExperience: number
  achievements?: { label: string; year?: string }[] | string[]
  quote?: string
  quoteAttribution?: string
  orientation?: "image-left" | "image-right"
}

function normalizeAchievements(
  input?: ManagingDirectorSectionProps["achievements"]
): { label: string; year?: string }[] {
  if (!input) return []
  if (Array.isArray(input)) {
    return input.map(item =>
      typeof item === "string" ? { label: item } : { label: item.label, year: item.year }
    )
  }
  return []
}

export default function ManagingDirectorSection({
  className,
  style,
  name,
  title = "Managing Director",
  headshotSrc,
  headshotAlt = "Portrait of the Managing Director",
  background,
  vision,
  yearsExperience,
  achievements,
  quote,
  quoteAttribution,
  orientation = "image-left",
}: ManagingDirectorSectionProps) {
  const items = normalizeAchievements(achievements)
  const imageFirst = orientation === "image-left"

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
      aria-labelledby="managing-director-heading"
      className={[
        "relative w-full overflow-hidden rounded-lg border border-[#6CA0DC]",
        "bg-[#D8E6F3]/80 shadow-lg transition-colors",
        className || "",
      ].join(" ")}
      style={style}
    >
      {/* Decorative circles */}
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[#4682B4]/15 pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 h-72 w-72 rounded-full bg-[#6495ED]/10 pointer-events-none" />

      {/* Mountain blue-themed icons */}
      <Trees className="absolute -left-4 -top-4 h-24 w-24 text-[#375D87]/20" />
      <Mountain className="absolute -right-4 -bottom-4 h-24 w-24 text-[#375D87]/20" />
      <Map className="absolute right-12 top-12 h-16 w-16 text-[#375D87]/20" />

      <div className="grid items-stretch gap-8 p-6 sm:p-8 md:gap-10 md:grid-cols-2">
        {/* Image column */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={imageFirst ? "order-1" : "order-2 md:order-2"}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative h-64 sm:h-72 md:h-80 w-full max-h-80 overflow-hidden rounded-lg bg-[#D8E6F3]/50 ring-2 ring-[#6CA0DC]"
          >
            <Image
              src={headshotSrc}
              alt={headshotAlt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#375D87]/10 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4682B4]/10 to-[#6495ED]/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Content column */}
        <div className={imageFirst ? "order-2" : "order-1 md:order-1 relative flex flex-col justify-center"}>
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[#375D87]" />
            <span className="text-sm font-medium uppercase tracking-wide text-[#375D87]">{title}</span>
          </motion.div>

          <motion.h2 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            id="managing-director-heading" 
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#375D87]"
          >
            {name}
          </motion.h2>

          {/* Quick facts */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-[#D8E6F3]/60 px-3 py-1.5 text-[#375D87] ring-1 ring-[#6CA0DC]"
            >
              <Clock className="h-4 w-4 text-[#6CA0DC]" />
              <span className="font-medium">{yearsExperience}+ years</span>
              <span className="text-[#6CA0DC]">in adventure tourism</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-[#D8E6F3]/60 px-3 py-1.5 text-[#375D87] ring-1 ring-[#6CA0DC]"
            >
              <Compass className="h-4 w-4 text-[#6CA0DC]" />
              <span className="font-medium">Vision-led growth</span>
            </motion.div>
          </motion.div>

          {/* Background & Vision */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 space-y-4 text-base leading-relaxed"
          >
            <p className="text-[#375D87]">{background}</p>
            <motion.div 
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg bg-[#D8E6F3]/40 p-4 ring-1 ring-[#6CA0DC]"
            >
              <div className="mb-2 inline-flex items-center gap-2">
                <Flag className="h-4 w-4 text-[#6CA0DC]" />
                <span className="text-sm font-semibold tracking-wide text-[#375D87]">Vision for the company</span>
              </div>
              <p className="text-[#375D87]">{vision}</p>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          {items.length > 0 && (
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-[#6CA0DC]" />
                <h3 className="text-base font-semibold tracking-wide text-[#375D87]">Key achievements</h3>
              </div>
              <ul className="grid list-outside grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
                {items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: idx * 0.08,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-20px" }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-2 rounded-md bg-[#D8E6F3]/40 px-3 py-2 text-sm text-[#375D87] ring-1 ring-[#6CA0DC]"
                  >
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[#6CA0DC] text-white">
                      ✓
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium leading-snug text-[#375D87]">{item.label}</span>
                      {item.year && <span className="text-xs text-[#6CA0DC]">Year: {item.year}</span>}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* YouTube Video */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 w-full sm:w-10/12 md:w-9/12 lg:w-8/12"
          >
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-video w-full overflow-hidden rounded-lg ring-1 ring-[#6CA0DC]"
            >
              <iframe
                src="https://www.youtube.com/embed/JxiY-aG0e_c"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </motion.div>
          </motion.div>

          {/* Quote */}
          {quote && (
            <motion.figure 
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-8"
            >
              <motion.blockquote 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-lg bg-[#D8E6F3]/40 px-5 py-4 text-base italic text-[#375D87] ring-1 ring-[#6CA0DC]"
              >
                <Quote className="absolute -left-2 -top-2 h-5 w-5 text-[#6CA0DC]" />
                "{quote}"
              </motion.blockquote>
              {quoteAttribution && <figcaption className="mt-2 pl-6 text-sm text-[#6CA0DC]">— {quoteAttribution}</figcaption>}
            </motion.figure>
          )}
        </div>
      </div>
    </motion.section>
  )
}