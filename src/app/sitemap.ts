import { MetadataRoute } from "next";
import {
  loadSitemapContent,
  SitemapContentKind,
} from "@/lib/firebase/sitemap-content";

const baseUrl = "https://www.himkalaadventure.com";

export const revalidate = 3600;

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastModified?: string;
};

const staticPages: SitemapEntry[] = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/about-us", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/free-walking-tour-kathmandu.html", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/trekking", priority: 0.95, changeFrequency: "weekly" },
  {
    path: "/services/free-tour-kathmandu",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/services/free-walking-tour-kathmandu",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/services/local-city-tour-kathmandu-free",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  { path: "/destinations/nepal", priority: 0.95, changeFrequency: "weekly" },
  { path: "/destinations/bhutan", priority: 0.9, changeFrequency: "weekly" },
  { path: "/destinations/tibet", priority: 0.9, changeFrequency: "weekly" },
  {
    path: "/services/multi-day-cultural-tours",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/services/jungle-safari",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/services/day-hikings",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/services/day-sightseeings",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/services/mountain-flight-heli-trip",
    priority: 0.85,
    changeFrequency: "weekly",
  },
];

const contentSettings: Record<
  SitemapContentKind,
  Pick<SitemapEntry, "priority" | "changeFrequency">
> = {
  trekking: { priority: 0.9, changeFrequency: "weekly" },
  blog: { priority: 0.8, changeFrequency: "monthly" },
  freeTours: { priority: 0.9, changeFrequency: "weekly" },
  multiDayTours: { priority: 0.85, changeFrequency: "weekly" },
  dayHikings: { priority: 0.8, changeFrequency: "weekly" },
  daySightseeings: { priority: 0.8, changeFrequency: "weekly" },
  mountainFlights: { priority: 0.85, changeFrequency: "weekly" },
  jungleSafaris: { priority: 0.85, changeFrequency: "weekly" },
  destinationTours: { priority: 0.85, changeFrequency: "weekly" },
};

function newerDate(first?: string, second?: string) {
  if (!first) return second;
  if (!second) return first;
  return Date.parse(second) > Date.parse(first) ? second : first;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await loadSitemapContent();
  const entries = new Map<string, SitemapEntry>();

  for (const entry of [
    ...staticPages,
    ...content.map((item) => ({
      path: item.path,
      ...contentSettings[item.kind],
      lastModified: item.lastModified,
    })),
  ]) {
    const normalizedPath = entry.path === "/" ? "" : entry.path;
    const existing = entries.get(normalizedPath);
    entries.set(normalizedPath, {
      ...entry,
      path: normalizedPath,
      priority: Math.max(existing?.priority || 0, entry.priority),
      changeFrequency: existing?.changeFrequency || entry.changeFrequency,
      lastModified: newerDate(existing?.lastModified, entry.lastModified),
    });
  }

  return Array.from(entries.values()).map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
