import { TREKKING_HARDCODED_CONTENT } from "@/lib/trekking-hardcoded-content.generated";

export type TrekSeason = {
  id: string;
  title: string;
  description: string;
  badge: string;
};

export type TrekItineraryDay = {
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

export type TrekGalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type TrekFaq = {
  id: string;
  question: string;
  answer: string;
};

export type TrekkingService = {
  id: string;
  name: string;
  region: string;
  duration: string;
  difficulty: string;
  maxAltitude: string;
  groupSize: string;
  bestSeason: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  highlights: string[];
  description: string;
  featured: boolean;
  showOnHomepage: boolean;
  showOnNepalSection1?: boolean;
  showOnNepalSection2?: boolean;
  link: string;
  shortDescription?: string;
  heroBadge?: string;
  overview?: string[];
  importantBanner?: string;
  trekHighlights?: string[];
  seasons?: TrekSeason[];
  itinerary?: TrekItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  galleryIntro?: string;
  gallery?: TrekGalleryImage[];
  faqs?: TrekFaq[];
  mainImageAlt?: string;
  durationDays?: number;
  durationNights?: number;
  ctaTitle?: string;
  ctaDescription?: string;
};

/**
 * Uses the structured duration fields as the source of truth. The legacy
 * `duration` string remains only as a fallback for older documents.
 */
export function getTrekkingDurationLabel(
  trek: Pick<TrekkingService, "duration" | "durationDays" | "durationNights">,
  { includeNights = false }: { includeNights?: boolean } = {},
) {
  const days =
    typeof trek.durationDays === "number" && trek.durationDays > 0
      ? trek.durationDays
      : undefined;
  if (!days) return trek.duration;

  const dayLabel = `${days} ${days === 1 ? "Day" : "Days"}`;
  if (!includeNights) return dayLabel;

  const nights =
    typeof trek.durationNights === "number" && trek.durationNights >= 0
      ? trek.durationNights
      : Math.max(days - 1, 0);
  return `${dayLabel} / ${nights} ${nights === 1 ? "Night" : "Nights"}`;
}

/** Permanent source fallback for all trekking services and their card details. */
const TREKKING_SERVICE_SUMMARIES: TrekkingService[] = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp Trek",
    region: "Everest Region",
    duration: "14 Days",
    difficulty: "Moderate",
    maxAltitude: "5,364m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1520,
    originalPrice: 1720,
    image: "/images/used/everest-main-page.webp",
    rating: 4.9,
    reviews: 234,
    highlights: [
      "Khumbu Glacier",
      "Tengboche Monastery",
      "Sherpa Culture",
      "Kala Patthar",
    ],
    description:
      "Trek to the foot of the world's highest mountain through legendary Sherpa villages and breathtaking Himalayan landscapes.",
    featured: true,
    showOnHomepage: true,
    link: "/services/trekking/everest-base-camp-trek",
  },
  {
    id: "annapurna-circuit",
    name: "Annapurna Circuit Trek",
    region: "Annapurna Region",
    duration: "9 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 800,
    originalPrice: 1000,
    image: "/images/used/annapurna-circuit-main-page.webp",
    rating: 4.8,
    reviews: 189,
    highlights: [
      "Thorong La Pass",
      "Muktinath Temple",
      "Manang Valley",
      "Diverse Landscapes",
    ],
    description:
      "The classic Himalayan trek circumnavigating the Annapurna massif, crossing the legendary Thorong La Pass.",
    featured: true,
    showOnHomepage: true,
    link: "/services/trekking/annapurna-circuit-trek",
  },
  {
    id: "annapurna-circuit-tilicho",
    name: "Annapurna Circuit Trek with Tilicho Lake",
    region: "Annapurna Region",
    duration: "12 Days",
    difficulty: "Challenging",
    maxAltitude: "5,416m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Oct-Nov",
    price: 1000,
    originalPrice: 1200,
    image: "/images/used/tilicho-lake-1.webp",
    rating: 4.9,
    reviews: 98,
    highlights: [
      "Thorong La Pass",
      "Tilicho Lake",
      "Muktinath Temple",
      "Manang Valley",
    ],
    description:
      "Extended Annapurna Circuit with a side trip to the world's highest lake - Tilicho.",
    featured: false,
    showOnHomepage: false,
    link: "/services/trekking/annapurna-circuit-trek-with-tilicho-lake",
  },
  {
    id: "langtang-valley",
    name: "Langtang Valley Trek",
    region: "Langtang Region",
    duration: "8 Days",
    difficulty: "Easy-Moderate",
    maxAltitude: "4,984m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 650,
    originalPrice: 805,
    image: "/images/used/langtang-main-page.webp",
    rating: 4.7,
    reviews: 156,
    highlights: [
      "Kyanjin Gompa",
      "Langtang Village",
      "Cheese Factory",
      "Tserko Ri",
    ],
    description:
      "Explore the 'Valley of Glaciers' just north of Kathmandu with rich Tamang culture.",
    featured: false,
    showOnHomepage: true,
    link: "/services/trekking/langtang-valley-trek",
  },
  {
    id: "manaslu-circuit",
    name: "Manaslu Circuit Trek",
    region: "Manaslu Region",
    duration: "12 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1200,
    originalPrice: 1400,
    image: "/images/used/manaslu-main-page.webp",
    rating: 4.9,
    reviews: 98,
    highlights: [
      "Larkya La Pass",
      "Tibetan Villages",
      "Remote Trails",
      "Buddhist Monasteries",
    ],
    description:
      "Circle the world's eighth highest mountain through pristine wilderness and authentic Tibetan culture.",
    featured: true,
    showOnHomepage: true,
    link: "/services/trekking/manaslu-circuit-trek",
  },
  {
    id: "manaslu-tsum-valley",
    name: "Manaslu Circuit Trek with Tsum Valley",
    region: "Manaslu Region",
    duration: "17 Days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 2050,
    originalPrice: 2305,
    image: "/images/used/tsum-valley-1.webp",
    rating: 4.9,
    reviews: 67,
    highlights: [
      "Tsum Valley",
      "Larkya La Pass",
      "Ancient Monasteries",
      "Remote Villages",
    ],
    description:
      "Combine the Manaslu Circuit with the sacred Tsum Valley for an extended cultural adventure.",
    featured: false,
    showOnHomepage: false,
    link: "/services/trekking/manaslu-circuit-trek-with-tsum-valley",
  },
  {
    id: "annapurna-base-camp",
    name: "Annapurna Base Camp Trek",
    region: "Annapurna Region",
    duration: "9 Days",
    difficulty: "Moderate",
    maxAltitude: "4,130m",
    groupSize: "2-14",
    bestSeason: "Mar-May, Sep-Dec",
    price: 700,
    originalPrice: 1050,
    image: "/images/used/abc-main-page.webp",
    rating: 4.8,
    reviews: 212,
    highlights: [
      "Annapurna Sanctuary",
      "Machapuchare Base Camp",
      "Hot Springs",
      "Gurung Villages",
    ],
    description:
      "Journey into the heart of the Annapurna Sanctuary, surrounded by towering peaks.",
    featured: true,
    showOnHomepage: true,
    link: "/services/trekking/annapurna-base-camp-trek",
  },
  {
    id: "everest-three-passes",
    name: "Everest Three Passes Trek",
    region: "Everest Region",
    duration: "18 Days",
    difficulty: "Strenuous",
    maxAltitude: "5,545m",
    groupSize: "2-10",
    bestSeason: "Apr-May, Oct-Nov",
    price: 1950,
    originalPrice: 2250,
    image: "/images/used/3-passes-1.webp",
    rating: 4.9,
    reviews: 89,
    highlights: ["Kongma La", "Cho La", "Renjo La", "Gokyo Lakes"],
    description:
      "The ultimate challenge for experienced trekkers, crossing three high passes above 5,300m.",
    featured: true,
    showOnHomepage: false,
    link: "/services/trekking/everest-three-passes-trek",
  },
  {
    id: "ghorepani-poon-hill",
    name: "Ghorepani Poon Hill Trek",
    region: "Annapurna Region",
    duration: "6 Days",
    difficulty: "Easy",
    maxAltitude: "3,210m",
    groupSize: "2-16",
    bestSeason: "Year Round",
    price: 500,
    originalPrice: 635,
    image: "/images/used/ghorepani-poon-hill-1.webp",
    rating: 4.6,
    reviews: 324,
    highlights: [
      "Poon Hill Sunrise",
      "Rhododendron Forests",
      "Gurung Villages",
      "Mountain Panorama",
    ],
    description:
      "The perfect short trek with stunning sunrise views over the Annapurna and Dhaulagiri ranges.",
    featured: false,
    showOnHomepage: false,
    link: "/services/trekking/ghorepani-poon-hill-trek",
  },
  {
    id: "khopra-ridge",
    name: "Khopra Ridge Trek with Khayar Lake",
    region: "Annapurna Region",
    duration: "8 Days",
    difficulty: "Moderate",
    maxAltitude: "4,660m",
    groupSize: "2-10",
    bestSeason: "Mar-May, Sep-Nov",
    price: 700,
    originalPrice: 875,
    image: "/images/used/khopra-trek-1.webp",
    rating: 4.8,
    reviews: 78,
    highlights: [
      "Khopra Ridge",
      "Khayar Lake",
      "Annapurna South",
      "Dhaulagiri Views",
    ],
    description:
      "Off-the-beaten-path trek offering stunning mountain views and the sacred Khayar Lake.",
    featured: false,
    showOnHomepage: false,
    link: "/services/trekking/khopra-ridge-trek-with-khayar-lake",
  },
  {
    id: "mardi-himal",
    name: "Mardi Himal Trek",
    region: "Annapurna Region",
    duration: "7 Days",
    difficulty: "Moderate",
    maxAltitude: "4,500m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 600,
    originalPrice: 755,
    image: "/images/used/mardi-himal-1.webp",
    rating: 4.8,
    reviews: 145,
    highlights: [
      "Mardi Himal Base Camp",
      "Machapuchare Views",
      "Forest Trails",
      "Camping Experience",
    ],
    description:
      "A hidden gem offering spectacular close-up views of Machapuchare and Annapurna South.",
    featured: true,
    showOnHomepage: false,
    link: "/services/trekking/mardi-himal-trek",
  },
  {
    id: "tamang-heritage-langtang",
    name: "Tamang Heritage Trail and Langtang Valley Trek",
    region: "Langtang Region",
    duration: "13 Days",
    difficulty: "Moderate",
    maxAltitude: "4,984m",
    groupSize: "2-12",
    bestSeason: "Mar-May, Sep-Nov",
    price: 1195,
    originalPrice: 1350,
    image: "/images/used/tamang-heritage-1.webp",
    rating: 4.8,
    reviews: 89,
    highlights: [
      "Tamang Heritage Trail",
      "Gatlang Village",
      "Briddim Village",
      "Langtang Valley",
    ],
    description:
      "Combine the cultural Tamang Heritage Trail with the stunning Langtang Valley trek.",
    featured: false,
    showOnHomepage: false,
    link: "/services/trekking/tamang-heritage-trail-and-langtang-valley-trek",
  },
];

function keepSingleFeatured(treks: TrekkingService[]) {
  let foundFeatured = false;
  return treks.map((trek) => {
    if (!trek.featured) return trek;
    if (!foundFeatured) {
      foundFeatured = true;
      return trek;
    }
    return { ...trek, featured: false };
  });
}

export const TREKKING_SERVICES_FALLBACK: TrekkingService[] = keepSingleFeatured(
  TREKKING_SERVICE_SUMMARIES.map((trek) => ({
    ...trek,
    ...TREKKING_HARDCODED_CONTENT[trek.id],
    showOnNepalSection1: true,
    showOnNepalSection2: false,
  })),
);

const EDITORIAL_FIELDS = [
  "shortDescription",
  "heroBadge",
  "overview",
  "importantBanner",
  "trekHighlights",
  "seasons",
  "itinerary",
  "inclusions",
  "exclusions",
  "galleryIntro",
  "gallery",
  "faqs",
  "mainImageAlt",
  "durationDays",
  "durationNights",
  "ctaTitle",
  "ctaDescription",
] as const;

/** Adds missing detail-page content to records created before the structured editor existed. */
export function enrichTrekkingServicesWithHardcodedContent(
  treks: TrekkingService[],
) {
  const sourceById = new Map(
    TREKKING_SERVICES_FALLBACK.map((trek) => [trek.id, trek]),
  );
  return treks.map((trek) => {
    const source = sourceById.get(trek.id);
    if (!source) return trek;
    const enriched = { ...trek };
    for (const field of EDITORIAL_FIELDS) {
      const current = enriched[field];
      if (
        current === undefined ||
        current === null ||
        current === "" ||
        (Array.isArray(current) && current.length === 0)
      ) {
        Object.assign(enriched, { [field]: source[field] });
      }
    }
    return enriched;
  });
}

export const TREKKING_SERVICES_UPDATED_EVENT =
  "himkala:trekking-services-updated";

export function createTrekkingServiceId(name: string) {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "trek"}-${Date.now()}`;
}

export function normalizeTrekkingServices(
  value: unknown,
): TrekkingService[] | null {
  if (!Array.isArray(value)) return null;
  const valid = value.every((item) => {
    const trek = item as Partial<TrekkingService>;
    return (
      typeof trek?.id === "string" &&
      typeof trek.name === "string" &&
      typeof trek.region === "string" &&
      typeof trek.duration === "string" &&
      typeof trek.difficulty === "string" &&
      typeof trek.maxAltitude === "string" &&
      typeof trek.groupSize === "string" &&
      typeof trek.bestSeason === "string" &&
      typeof trek.price === "number" &&
      typeof trek.originalPrice === "number" &&
      typeof trek.image === "string" &&
      typeof trek.rating === "number" &&
      typeof trek.reviews === "number" &&
      Array.isArray(trek.highlights) &&
      typeof trek.description === "string" &&
      typeof trek.featured === "boolean" &&
      typeof trek.showOnHomepage === "boolean" &&
      typeof trek.link === "string"
    );
  });
  if (
    !valid ||
    new Set(value.map((item) => (item as TrekkingService).id)).size !==
      value.length
  )
    return null;
  return keepSingleFeatured(
    (value as TrekkingService[]).map((trek) => ({
      ...trek,
      showOnNepalSection1: trek.showOnNepalSection1 ?? true,
      showOnNepalSection2: trek.showOnNepalSection2 ?? false,
    })),
  );
}
