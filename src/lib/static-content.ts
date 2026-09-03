import { BLOG_POSTS_FALLBACK } from "@/lib/blog-posts";
import { TREKKING_SERVICES_FALLBACK } from "@/lib/trekking-services";

export type StaticTrek = {
  id: string;
  slug: string;
  name: string;
  region: string;
  days: number;
  price: number;
  max_altitude: number;
  difficulty: string;
  max_group_size: number;
  rating: number;
  review_count: number;
  description: string;
  image: string;
  featured: boolean;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  created_at: string;
  updated_at: string;
};

const numericValue = (value: string) => Number(value.replace(/[^\d]/g, "")) || 0;
const slugFromLink = (link: string) => link.split("/").filter(Boolean).at(-1) || link;

const treks: StaticTrek[] = TREKKING_SERVICES_FALLBACK.map((trek) => ({
  id: trek.id,
  slug: slugFromLink(trek.link),
  name: trek.name,
  region: trek.region,
  days: trek.durationDays || Number.parseInt(trek.duration, 10) || 0,
  price: trek.price,
  max_altitude: numericValue(trek.maxAltitude),
  difficulty: trek.difficulty,
  max_group_size: Number(trek.groupSize.match(/\d+$/)?.[0]) || 0,
  rating: trek.rating,
  review_count: trek.reviews,
  description: trek.shortDescription || trek.description,
  image: trek.image,
  featured: trek.featured,
  itinerary: (trek.itinerary || []).map((day) => day.title),
  inclusions: trek.inclusions || [],
  exclusions: trek.exclusions || [],
  created_at: "2026-01-01T00:00:00.000Z",
  updated_at: "2026-01-01T00:00:00.000Z",
}));

export async function getAllTreks() { return treks; }
export async function getTrekBySlug(slug: string) { return treks.find((trek) => trek.slug === slug || trek.id === slug) || null; }
export async function getTreksByRegion(region: string) { return treks.filter((trek) => trek.region.toLowerCase() === region.toLowerCase()); }
export async function getAllRegions() { return [...new Set(treks.map((trek) => trek.region))]; }
export async function getAllBlogPosts() { return BLOG_POSTS_FALLBACK.filter((post) => post.published).map((post) => ({ ...post, updated_at: "2026-01-01T00:00:00.000Z" })); }
