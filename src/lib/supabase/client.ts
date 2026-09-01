import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Trek = {
  id: string
  slug: string
  name: string
  region: string
  days: number
  price: number
  max_altitude: number
  difficulty: 'Easy' | 'Easy-Moderate' | 'Moderate' | 'Challenging' | 'Strenuous'
  max_group_size: number
  rating: number
  review_count: number
  description: string
  image: string
  featured: boolean
  itinerary: string[]
  inclusions: string[]
  exclusions: string[]
  created_at: string
  updated_at: string
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  read_time: number
  category: string
  tags: string[]
  created_at: string
  updated_at: string
}