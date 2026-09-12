import hardcoded from "@/lib/managed-services-hardcoded.generated.json";

export type ManagedServiceKind =
  | "free-tour"
  | "multi-day"
  | "day-hiking"
  | "day-sightseeing"
  | "mountain-flight"
  | "jungle-safari"
  | "destination-tour";
export type ManagedServiceCollection =
  | "freeTours"
  | "multiDayTours"
  | "dayHikings"
  | "daySightseeings"
  | "mountainFlights"
  | "jungleSafaris"
  | "destinationTours";
export type DestinationCountry = "bhutan" | "tibet";
export type ManagedServiceSeason = {
  id: string;
  title: string;
  description: string;
  badge: string;
};
export type ManagedServiceItineraryDay = {
  id: string;
  day: number;
  title: string;
  altitude: string;
  distance: string;
  description: string;
  overnight: string;
  meals: string;
  highlights: string[];
};
export type ManagedServiceGalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};
export type ManagedServiceFaq = {
  id: string;
  question: string;
  answer: string;
};
export type ManagedServiceContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items: string[];
  tone: "neutral" | "amber" | "blue";
};
export type ManagedServiceStat = { label: string; value: string };
export type ManagedServiceInfoTable = {
  id: string;
  title: string;
  placement?: "before-seasons" | "before-itinerary";
  columns: string[];
  rows: { id: string; values: string[] }[];
};

export type ManagedService = {
  id: string;
  slug: string;
  kind: ManagedServiceKind;
  destination?: DestinationCountry;
  name: string;
  cardTitle?: string;
  description: string;
  cardDescription?: string;
  shortDescription?: string;
  region: string;
  duration: string;
  difficulty: string;
  category?: string;
  groupSize: string;
  bestSeason: string;
  price: number | string;
  originalPrice?: number;
  image: string;
  imageAlt?: string;
  rating?: number;
  reviews?: number;
  highlights: string[];
  serviceHighlights?: string[];
  featured: boolean;
  showOnHomepage: boolean;
  showOnNepalSection1: boolean;
  showOnNepalSection2: boolean;
  published: boolean;
  link: string;
  badge?: string;
  unesco?: string;
  meetingPoint?: string;
  startTimes?: string;
  route: string;
  altitude: string;
  aircraft: string;
  departure: string;
  park: string;
  activities: string[];
  wildlife: string[];
  isFree: boolean;
  heroEyebrow?: string;
  heroBadges?: string[];
  quickStats?: ManagedServiceStat[];
  overview?: string[];
  importantBanner?: string;
  seasons?: ManagedServiceSeason[];
  seasonNote?: string;
  contentSections?: ManagedServiceContentSection[];
  informationTables?: ManagedServiceInfoTable[];
  itinerary?: ManagedServiceItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  galleryIntro?: string;
  gallery?: ManagedServiceGalleryImage[];
  faqs?: ManagedServiceFaq[];
  ctaTitle?: string;
  ctaDescription?: string;
};

export const MANAGED_SERVICE_COLLECTIONS: Record<
  ManagedServiceCollection,
  {
    label: string;
    singular: string;
    kind: ManagedServiceKind;
    publicPath: string;
    adminPath: string;
  }
> = {
  freeTours: {
    label: "Free Tours",
    singular: "Free tour",
    kind: "free-tour",
    publicPath: "/services/free-tour-kathmandu",
    adminPath: "/admin/free-tours",
  },
  multiDayTours: {
    label: "Multi Day",
    singular: "Multi-day tour",
    kind: "multi-day",
    publicPath: "/services/multi-day-cultural-tours",
    adminPath: "/admin/multi-day",
  },
  dayHikings: {
    label: "Day Hikings",
    singular: "Day hiking",
    kind: "day-hiking",
    publicPath: "/services/day-hikings",
    adminPath: "/admin/day-hikings",
  },
  daySightseeings: {
    label: "Day Sightseeing",
    singular: "Sightseeing tour",
    kind: "day-sightseeing",
    publicPath: "/services/day-sightseeings",
    adminPath: "/admin/day-sightseeings",
  },
  mountainFlights: {
    label: "Mountain Flights",
    singular: "Mountain flight",
    kind: "mountain-flight",
    publicPath: "/services/mountain-flight-heli-trip",
    adminPath: "/admin/mountain-flights",
  },
  jungleSafaris: {
    label: "Jungle Safari",
    singular: "Jungle safari",
    kind: "jungle-safari",
    publicPath: "/services/jungle-safari",
    adminPath: "/admin/jungle-safari",
  },
  destinationTours: {
    label: "Destinations",
    singular: "Destination tour",
    kind: "destination-tour",
    publicPath: "/destinations",
    adminPath: "/admin/destinations",
  },
};

export const HOMEPAGE_MANAGED_SERVICE_COLLECTIONS = [
  "freeTours",
  "multiDayTours",
  "dayHikings",
  "daySightseeings",
  "destinationTours",
] as const satisfies readonly ManagedServiceCollection[];

export function canShowManagedServiceOnHomepage(
  collection: ManagedServiceCollection,
) {
  return HOMEPAGE_MANAGED_SERVICE_COLLECTIONS.includes(
    collection as (typeof HOMEPAGE_MANAGED_SERVICE_COLLECTIONS)[number],
  );
}

function completeManagedService(
  value: Partial<ManagedService>,
): ManagedService {
  const kind = value.kind || "multi-day";
  return {
    id: value.id || "",
    slug: value.slug || value.id || "",
    kind,
    name: value.name || "",
    description: value.description || "",
    shortDescription: value.shortDescription || value.description || "",
    region:
      value.region || (kind === "free-tour" ? "Kathmandu Valley" : "Nepal"),
    duration: value.duration || "",
    difficulty: value.difficulty || "Easy",
    category: value.category || "",
    groupSize:
      value.groupSize || (kind === "free-tour" ? "Open group" : "2-12"),
    bestSeason: value.bestSeason || (kind === "free-tour" ? "Year-round" : ""),
    price: value.price ?? (kind === "free-tour" ? "FREE (tips-based)" : 0),
    image: value.image || "/images/used/",
    highlights: Array.isArray(value.highlights) ? value.highlights : [],
    featured: value.featured === true,
    showOnHomepage: value.showOnHomepage === true,
    published: value.published !== false,
    link: value.link || "",
    route: value.route || "",
    altitude: value.altitude || "",
    aircraft: value.aircraft || "",
    departure: value.departure || "",
    park: value.park || "",
    isFree: value.isFree === true,
    ...value,
    showOnNepalSection1: value.showOnNepalSection1 === true,
    showOnNepalSection2:
      typeof value.showOnNepalSection2 === "boolean"
        ? value.showOnNepalSection2
        : kind !== "destination-tour",
    activities: Array.isArray(value.activities) ? value.activities : [],
    wildlife: Array.isArray(value.wildlife) ? value.wildlife : [],
    serviceHighlights: Array.isArray(value.serviceHighlights)
      ? value.serviceHighlights
      : [],
    heroBadges: Array.isArray(value.heroBadges) ? value.heroBadges : [],
    quickStats: Array.isArray(value.quickStats) ? value.quickStats : [],
    overview: Array.isArray(value.overview) ? value.overview : [],
    seasons: Array.isArray(value.seasons) ? value.seasons : [],
    contentSections: Array.isArray(value.contentSections)
      ? value.contentSections.filter(
        (section) =>
          kind !== "destination-tour" || section.title !== "Cost Includes",
      )
      : [],
    informationTables: Array.isArray(value.informationTables)
      ? value.informationTables
      : [],
    itinerary: Array.isArray(value.itinerary) ? value.itinerary : [],
    inclusions: Array.isArray(value.inclusions) ? value.inclusions : [],
    exclusions: Array.isArray(value.exclusions) ? value.exclusions : [],
    gallery: Array.isArray(value.gallery) ? value.gallery : [],
    faqs: Array.isArray(value.faqs) ? value.faqs : [],
  };
}

function singleFeatured(items: ManagedService[], byDestination = false) {
  const found = new Set<string>();
  return items.map((item) => {
    if (!item.featured) return item;
    const group = byDestination ? item.destination || "unknown" : "all";
    if (!found.has(group)) {
      found.add(group);
      return item;
    }
    return { ...item, featured: false };
  });
}

const source = hardcoded as unknown as Record<
  ManagedServiceCollection,
  ManagedService[]
>;
export const MANAGED_SERVICES_FALLBACK: Record<
  ManagedServiceCollection,
  ManagedService[]
> = {
  freeTours: singleFeatured(source.freeTours.map(completeManagedService)),
  multiDayTours: singleFeatured(
    source.multiDayTours.map(completeManagedService),
  ),
  dayHikings: singleFeatured(source.dayHikings.map(completeManagedService)),
  daySightseeings: singleFeatured(
    source.daySightseeings.map(completeManagedService),
  ),
  mountainFlights: singleFeatured(
    source.mountainFlights.map(completeManagedService),
  ),
  jungleSafaris: singleFeatured(
    source.jungleSafaris.map(completeManagedService),
  ),
  destinationTours: singleFeatured(
    source.destinationTours.map(completeManagedService),
    true,
  ),
};

export function normalizeManagedServices(
  value: unknown,
): ManagedService[] | null {
  if (!Array.isArray(value)) return null;
  const valid = value.every((entry) => {
    const item = entry as Partial<ManagedService>;
    return (
      typeof item.id === "string" &&
      typeof item.name === "string" &&
      typeof item.description === "string" &&
      typeof item.image === "string"
    );
  });
  if (
    !valid ||
    new Set(value.map((entry) => (entry as ManagedService).id)).size !==
    value.length
  )
    return null;
  const services = value.map((entry) =>
    completeManagedService(entry as Partial<ManagedService>),
  );
  return singleFeatured(
    services,
    services.some((item) => item.kind === "destination-tour"),
  );
}

export function createManagedServiceId(name: string) {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || `service-${Date.now()}`
  );
}

export function blankManagedService(
  collection: ManagedServiceCollection,
): ManagedService {
  const config = MANAGED_SERVICE_COLLECTIONS[collection];
  return {
    id: "",
    slug: "",
    kind: config.kind,
    ...(collection === "destinationTours"
      ? { destination: "bhutan" as const }
      : {}),
    name: "",
    description: "",
    shortDescription: "",
    region: "",
    duration: "",
    difficulty: "Easy",
    category: "",
    groupSize: "2-12",
    bestSeason: "",
    price: collection === "freeTours" ? "FREE (tips-based)" : 0,
    originalPrice: 0,
    image: "/images/used/",
    imageAlt: "",
    rating: 4.8,
    reviews: 0,
    highlights: [],
    serviceHighlights: [],
    featured: false,
    showOnHomepage: false,
    showOnNepalSection1: false,
    showOnNepalSection2: false,
    published: true,
    link: collection === "freeTours" ? config.publicPath : "",
    badge: "",
    unesco: "",
    meetingPoint: "",
    startTimes: "",
    route: "",
    altitude: "",
    aircraft: "",
    departure: "",
    park: "",
    activities: [],
    wildlife: [],
    isFree: false,
    heroEyebrow: "",
    heroBadges: [],
    quickStats: [],
    overview: [""],
    importantBanner: "",
    seasons: [],
    seasonNote: "",
    contentSections: [],
    informationTables: [],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    galleryIntro: "",
    gallery: [],
    faqs: [],
    ctaTitle: "",
    ctaDescription: "",
  };
}

export function managedServicePublicLink(
  collection: ManagedServiceCollection,
  service: Pick<ManagedService, "destination" | "slug" | "id">,
) {
  const config = MANAGED_SERVICE_COLLECTIONS[collection];
  if (collection === "freeTours") return config.publicPath;
  if (collection === "destinationTours")
    return `${config.publicPath}/${service.destination || "bhutan"}/${service.slug || service.id}`;
  return `${config.publicPath}/${service.slug || service.id}`;
}

export const MANAGED_SERVICES_UPDATED_EVENT =
  "himkala:managed-services-updated";
