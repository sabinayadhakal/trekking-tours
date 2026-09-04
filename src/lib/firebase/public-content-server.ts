import "server-only";

import { cache } from "react";
import {
  BLOG_POSTS_FALLBACK,
  BlogPost,
  normalizeBlogPosts,
} from "@/lib/blog-posts";
import {
  DestinationCountry,
  MANAGED_SERVICES_FALLBACK,
  ManagedService,
  ManagedServiceCollection,
  normalizeManagedServices,
} from "@/lib/managed-services";
import {
  TREKKING_SERVICES_FALLBACK,
  TrekkingService,
  normalizeTrekkingServices,
} from "@/lib/trekking-services";

type FirestoreValue = {
  nullValue?: null;
  booleanValue?: boolean;
  integerValue?: string;
  doubleValue?: number;
  timestampValue?: string;
  stringValue?: string;
  bytesValue?: string;
  referenceValue?: string;
  arrayValue?: { values?: FirestoreValue[] };
  mapValue?: { fields?: Record<string, FirestoreValue> };
};

type FirestoreDocument = {
  fields?: Record<string, FirestoreValue>;
};

type FirestoreListResponse = {
  documents?: FirestoreDocument[];
  nextPageToken?: string;
};

type CollectionResult =
  | { status: "available"; records: Record<string, unknown>[] }
  | { status: "unavailable" };

export type PublicContentResult<T> =
  | {
      status: "found";
      item: T;
      items: T[];
      source: "firestore" | "fallback";
    }
  | { status: "not-found" }
  | { status: "unavailable" };

function decodeValue(value: FirestoreValue): unknown {
  if ("nullValue" in value) return null;
  if ("booleanValue" in value) return value.booleanValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("stringValue" in value) return value.stringValue;
  if ("bytesValue" in value) return value.bytesValue;
  if ("referenceValue" in value) return value.referenceValue;
  if ("arrayValue" in value)
    return (value.arrayValue?.values || []).map(decodeValue);
  if ("mapValue" in value) return decodeFields(value.mapValue?.fields || {});
  return undefined;
}

function decodeFields(fields: Record<string, FirestoreValue>) {
  return Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, decodeValue(value)]),
  );
}

function withoutStorageFields(record: Record<string, unknown>) {
  const {
    order: _order,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    ...content
  } = record;
  return content;
}

const readCollection = cache(
  async (collection: string): Promise<CollectionResult> => {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim();
    if (!projectId || !apiKey) return { status: "unavailable" };

    const records: Record<string, unknown>[] = [];
    let pageToken: string | undefined;

    try {
      do {
        const endpoint = new URL(
          `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents/${encodeURIComponent(collection)}`,
        );
        endpoint.searchParams.set("key", apiKey);
        endpoint.searchParams.set("pageSize", "300");
        if (pageToken) endpoint.searchParams.set("pageToken", pageToken);

        const response = await fetch(endpoint, { cache: "no-store" });
        if (!response.ok) return { status: "unavailable" };

        const page = (await response.json()) as FirestoreListResponse;
        records.push(
          ...(page.documents || []).map((document) =>
            withoutStorageFields(decodeFields(document.fields || {})),
          ),
        );
        pageToken = page.nextPageToken;
      } while (pageToken);

      return { status: "available", records };
    } catch (error) {
      console.warn(`Could not load ${collection} on the server.`, error);
      return { status: "unavailable" };
    }
  },
);

function trekSlug(trek: Pick<TrekkingService, "id" | "link">) {
  return trek.link.split("/").filter(Boolean).at(-1) || trek.id;
}

function managedSlug(service: Pick<ManagedService, "id" | "slug" | "link">) {
  return (
    service.slug || service.link.split("/").filter(Boolean).at(-1) || service.id
  );
}

function normalizeEach<T>(
  records: Record<string, unknown>[],
  normalize: (value: unknown) => T[] | null,
) {
  return records.flatMap((record) => normalize([record]) || []);
}

export const loadPublicBlogPost = cache(
  async (slug: string): Promise<PublicContentResult<BlogPost>> => {
    const result = await readCollection("blogPosts");
    if (result.status === "unavailable") {
      const item = BLOG_POSTS_FALLBACK.find(
        (post) => post.slug === slug && post.published,
      );
      return item
        ? {
            status: "found",
            item,
            items: BLOG_POSTS_FALLBACK.filter((post) => post.published),
            source: "fallback",
          }
        : { status: "unavailable" };
    }

    const posts = normalizeEach(result.records, normalizeBlogPosts);
    const item = posts.find((post) => post.slug === slug);
    if (!item || !item.published) return { status: "not-found" };
    return {
      status: "found",
      item,
      items: posts.filter((post) => post.published),
      source: "firestore",
    };
  },
);

export const loadPublicTrekkingService = cache(
  async (slug: string): Promise<PublicContentResult<TrekkingService>> => {
    const result = await readCollection("trekkingServices");
    if (result.status === "unavailable") {
      const item = TREKKING_SERVICES_FALLBACK.find(
        (trek) => trekSlug(trek) === slug,
      );
      return item
        ? {
            status: "found",
            item,
            items: TREKKING_SERVICES_FALLBACK,
            source: "fallback",
          }
        : { status: "unavailable" };
    }

    const treks = normalizeEach(result.records, normalizeTrekkingServices);
    const item = treks.find((trek) => trekSlug(trek) === slug);
    if (!item) return { status: "not-found" };
    return {
      status: "found",
      item,
      items: treks,
      source: "firestore",
    };
  },
);

export const loadPublicManagedService = cache(
  async (
    collection: ManagedServiceCollection,
    slug: string,
    destination?: DestinationCountry,
  ): Promise<PublicContentResult<ManagedService>> => {
    const result = await readCollection(collection);
    if (result.status === "unavailable") {
      const item = MANAGED_SERVICES_FALLBACK[collection].find(
        (service) =>
          managedSlug(service) === slug &&
          (!destination || service.destination === destination) &&
          service.published,
      );
      return item
        ? {
            status: "found",
            item,
            items: MANAGED_SERVICES_FALLBACK[collection].filter(
              (service) => service.published,
            ),
            source: "fallback",
          }
        : { status: "unavailable" };
    }

    const services = normalizeEach(result.records, normalizeManagedServices);
    const item = services.find(
      (service) =>
        managedSlug(service) === slug &&
        (!destination || service.destination === destination),
    );
    if (!item || !item.published) return { status: "not-found" };
    return {
      status: "found",
      item,
      items: services.filter((service) => service.published),
      source: "firestore",
    };
  },
);
