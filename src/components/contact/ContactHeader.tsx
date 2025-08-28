"use client"

import * as React from "react"
import { Mountain, Tent, Trees, Sparkles, MapPin } from "lucide-react"
import { motion, Variants } from "framer-motion"

export type ContactHeaderProps = {
  title?: string
  tagline?: string
  orientation?: "row" | "column"
  logoVariant?: "mountain" | "tent" | "trees"
  className?: string
  style?: React.CSSProperties
}

const iconByVariant = {
  mountain: Mountain,
  tent: Tent,
  trees: Trees,
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 15 } },
}

function BrandMark({
  variant = "mountain",
  "aria-hidden": ariaHidden = true,
}: { variant?: "mountain" | "tent" | "trees"; "aria-hidden"?: boolean }) {
  const Icon = iconByVariant[variant] || Mountain
  return (
    <motion.div
      className="relative grid size-16 place-items-center rounded-xl border-2 
                 bg-gradient-to-br from-[#f0f6fb] to-[#dbe8f4] 
                 shadow-lg transition-all duration-300 ease-out sm:size-20 
                 group hover:shadow-xl hover:-translate-y-0.5"
      aria-hidden={ariaHidden}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      variants={iconVariants}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Icon className="size-8 sm:size-10 text-[#3a5d8c]" strokeWidth={2} />
      </motion.div>
      <motion.span
        className="pointer-events-none absolute -top-1 -right-1 inline-block size-2.5 rounded-full bg-[#4e7bb8]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 rounded-xl bg-[#4e7bb8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export default function ContactHeader({
  title = "Himkala(SnowArt) Adventure",
  tagline = "City tours and trekking adventures.",
  orientation = "row",
  logoVariant = "mountain",
  className,
  style,
}: ContactHeaderProps) {
  const isRow = orientation === "row"
  const headingId = React.useId()

  const rootClasses = [
    "relative -mt-0 sm:-mt-5",
    "bg-gradient-to-br from-[#f2f8fc]/90 to-[#d9e5f2]/80",
    "border-2 border-[#c0d4e8]",
    "rounded-2xl",
    "px-6 py-4 sm:px-6 sm:py-5",
    "shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-[#a8c3dd]",
    className || "",
  ].join(" ")

  const layoutClasses = isRow
    ? "flex items-center gap-5 sm:gap-6"
    : "flex flex-col items-start gap-4 sm:items-center text-left sm:text-center"

  return (
    <section className={rootClasses} aria-labelledby={headingId} style={style}>
      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
        <div className={layoutClasses}>
          <motion.div className="group relative" variants={itemVariants}>
            <BrandMark variant={logoVariant} />
            <motion.div
              className="absolute -inset-2 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="h-full w-full rounded-2xl ring-2 ring-[#4e7bb8]/30 ring-offset-2 ring-offset-transparent pointer-events-none"
                aria-hidden
              />
            </motion.div>
          </motion.div>

          <motion.div className={isRow ? "flex-1" : ""} variants={itemVariants}>
            <motion.h1
              id={headingId}
              className="font-heading text-2xl leading-tight tracking-[-0.02em] text-[#1f355e] sm:text-3xl flex items-center gap-2"
            >
              <MapPin className="h-6 w-6 text-[#3a5d8c]" />
              {title}
            </motion.h1>
            {tagline && (
              <motion.p
                className="mt-2 max-w-prose text-sm text-[#375c85]/80 sm:text-base leading-relaxed"
                variants={itemVariants}
              >
                {tagline}
              </motion.p>
            )}
          </motion.div>
        </div>

        <motion.div
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-4 w-4 text-[#8aaed6]/70" />
        </motion.div>

        <motion.div
          className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-3 w-3 text-[#8aaed6]/60" />
        </motion.div>
      </div>

      {/* Mobile fallback */}
      <div className="flex flex-col items-start sm:hidden gap-3">
        <motion.div
          className="flex items-center gap-2"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <BrandMark variant={logoVariant} aria-hidden={false} />
          <motion.h1
            id={headingId}
            className="font-heading text-2xl text-[#1f355e]"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {title}
          </motion.h1>
        </motion.div>

        {tagline && (
          <motion.p
            className="text-sm text-[#375c85]/80"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {tagline}
          </motion.p>
        )}
      </div>
    </section>
  )
}
