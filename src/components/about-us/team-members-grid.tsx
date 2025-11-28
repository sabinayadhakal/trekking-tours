"use client"

import * as React from "react"
import { Award, MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export type TeamMember = {
  id?: string
  name: string
  title: string
  years: number
  bio: string
  photoUrl?: string
  alt?: string
  specialties?: string[]
  regions?: string[]
}

type Alignment = "left" | "center"

interface TeamMembersGridProps {
  heading?: string
  subheading?: string
  members?: TeamMember[]
  desktopCols?: 2 | 3
  align?: Alignment
  className?: string
  style?: React.CSSProperties
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4 }
}

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 }
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ""
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : ""
  return (first + last).toUpperCase()
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, title, years, bio, photoUrl, alt, specialties, regions } = member
  const [loaded, setLoaded] = React.useState(false)
  const [errored, setErrored] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHoverVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card
        className={cn(
          "bg-[#D8E6F3] text-[#375D87] border border-[#6CA0DC] rounded-xl",
          "overflow-hidden shadow-lg transition-all duration-300",
          "hover:shadow-xl hover:border-[#4682B4]/50",
          "h-full flex flex-col group cursor-pointer"
        )}
      >
        <motion.div 
          className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#D8E6F3]/60 to-[#6CA0DC]/20 overflow-hidden"
          variants={imageHoverVariants}
          transition={{ duration: 0.5 }}
        >
          {photoUrl && !errored ? (
            <img
              src={photoUrl}
              alt={alt ?? `${name} – ${title}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
              className={cn(
                "h-full w-full object-cover transition-all duration-700",
                loaded ? "opacity-100" : "opacity-0",
                "group-hover:brightness-110"
              )}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6CA0DC]/20 to-[#4682B4]/10">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                aria-hidden="true"
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#4682B4] text-white text-xl font-bold"
              >
                {getInitials(name)}
              </motion.span>
            </div>
          )}

          <motion.div 
            className="absolute top-4 left-4"
            whileHover={{ scale: 1.05 }}
          >
            <Badge
              className={cn(
                "bg-white/95 text-[#375D87] border border-[#6CA0DC]/50",
                "shadow-lg backdrop-blur-sm font-semibold",
                "flex items-center gap-1.5 px-3 py-2"
              )}
              aria-label={`${years} years experience`}
            >
              <Award className="h-3.5 w-3.5 text-[#4682B4]" />
              <span className="tabular-nums font-bold">{years}</span>
              <span className="text-xs">years</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-[#375D87]/70 via-[#6CA0DC]/20 to-transparent flex items-end p-4"
          />
        </motion.div>

        <CardHeader className="space-y-2 pb-3">
          <CardTitle className="text-xl font-bold tracking-tight text-[#375D87] group-hover:text-[#4682B4] transition-colors">
            {name}
          </CardTitle>
          <CardDescription className="text-base font-semibold text-[#4682B4]">
            {title}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 pb-6">
          <p className="text-sm leading-relaxed text-[#375D87]/85 mb-4">{bio}</p>
          
          <div className="space-y-3">
            {specialties && specialties.length > 0 && (
              <div className="flex items-start gap-2">
                <Users className="h-4 w-4 text-[#4682B4] mt-0.5 flex-shrink-0" />
                <div className="flex flex-wrap gap-1.5">
                  {specialties.map((specialty, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#D8E6F3] text-[#375D87] border border-[#6CA0DC]/50">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {regions && regions.length > 0 && (
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#4682B4] mt-0.5 flex-shrink-0" />
                <div className="flex flex-wrap gap-1.5">
                  {regions.map((region, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#D8E6F3] text-[#375D87] border border-[#6CA0DC]/50">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function TeamMembersGrid({
  heading = "Our Team",
  subheading = "Seasoned professionals in adventure tourism.",
  members = [],
  desktopCols = 3,
  align = "left",
  className,
  style,
}: TeamMembersGridProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={cn("bg-[#D8E6F3]/80 py-16 relative", className)}
      style={style}
      aria-label="Team members"
    >
      <div className="container mx-auto px-4 relative">
        {(heading || subheading) && (
          <motion.div
            variants={itemVariants}
            className={cn(
              "mb-12 sm:mb-16",
              align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
            )}
          >
            {heading && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#375D87] mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg text-[#4682B4]/80 leading-relaxed">{subheading}</p>
            )}
          </motion.div>
        )}

        <motion.ul
          variants={containerVariants}
          className={cn(
            "grid grid-cols-1 gap-6 sm:gap-8 md:gap-10",
            "md:grid-cols-2",
            desktopCols === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2"
          )}
        >
          {members.map((m, index) => (
            <motion.li key={m.id ?? `${m.name}-${m.title}`} variants={itemVariants}>
              <TeamMemberCard member={m} />
            </motion.li>
          ))}
        </motion.ul>

        {/* Decorative blurred circles */}
        <motion.div className="absolute left-10 top-1/4 h-32 w-32 bg-[#4682B4]/20 rounded-full blur-xl" aria-hidden="true" />
        <motion.div className="absolute right-20 bottom-1/4 h-40 w-40 bg-[#6CA0DC]/15 rounded-full blur-xl" aria-hidden="true" />
      </div>
    </motion.section>
  )
}