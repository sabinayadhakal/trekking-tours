import { supabase } from './client'

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

export async function getAllTreks(): Promise<Trek[]> {
  const { data, error } = await supabase
    .from('treks')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching treks:', error)
    return []
  }

  return data || []
}

export async function getTrekBySlug(slug: string): Promise<Trek | null> {
  const { data, error } = await supabase
    .from('treks')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching trek:', error)
    return null
  }

  return data
}

export async function getTreksByRegion(region: string): Promise<Trek[]> {
  const { data, error } = await supabase
    .from('treks')
    .select('*')
    .eq('region', region)
    .order('name')

  if (error) {
    console.error('Error fetching treks by region:', error)
    return []
  }

  return data || []
}

export async function getFeaturedTreks(): Promise<Trek[]> {
  const { data, error } = await supabase
    .from('treks')
    .select('*')
    .eq('featured', true)
    .order('name')

  if (error) {
    console.error('Error fetching featured treks:', error)
    return []
  }

  return data || []
}

export async function getAllRegions(): Promise<string[]> {
  const { data, error } = await supabase
    .from('treks')
    .select('region')
    .order('region')

  if (error) {
    console.error('Error fetching regions:', error)
    return []
  }

  const regions = [...new Set(data.map((item: { region: string }) => item.region))]
  return regions
}