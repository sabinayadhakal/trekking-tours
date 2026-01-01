export interface Tour {
  id: string
  title: string
  location: string
  duration: string
  rating: number
  price: number
  originalPrice?: number
  excerpt: string
  description: string
  image: string
  images: string[]
  tags: string[]
  highlights: string[]
  includes: string[]
  excludes: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  maxGroupSize: number
  included: string[]
  excluded: string[]
  cancellationPolicy: string
  isPopular?: boolean
  isSoldOut?: boolean
  difficulty?: string
  maxAltitude?: string
  requirements?: string[]            // <-- must be array
  permits?: string[]                 // <-- must be array
  equipment?: string[]               // <-- optional array
  entryRequirements?: string[]       // <-- optional array
}
