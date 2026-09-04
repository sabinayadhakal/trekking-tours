import "server-only";

import { BLOG_POSTS_FALLBACK } from "@/lib/blog-posts";
import {
  MANAGED_SERVICE_COLLECTIONS,
  MANAGED_SERVICES_FALLBACK,
  ManagedServiceCollection,
  managedServicePublicLink,
} from "@/lib/managed-services";
import { TREKKING_SERVICES_FALLBACK } from "@/lib/trekking-services";

export type SitemapContentKind = "trekking" | "blog" | ManagedServiceCollection;

export type SitemapContentEntry = {
  path: string;
  kind: SitemapContentKind;
  lastModified?: string;
};

type FirestoreValue = {
  booleanValue?: boolean;
  stringValue?: string;
  timestampValue?: string;
};

type FirestoreDocument = {
  name: string;
  fields?: Record<string, FirestoreValue>;
  createTime?: string;
  updateTime?: string;
};

type FirestoreListResponse = {
  documents?: FirestoreDocument[];
  nextPageToken?: string;
};

const REVALIDATE_SECONDS = 60 * 60;
const FIRESTORE_COLLECTIONS: ManagedServiceCollection[] = [
  "freeTours",
  "multiDayTours",
  "dayHikings",
  "daySightseeings",
  "mountainFlights",
  "jungleSafaris",
  "destinationTours",
];

function stringField(document: FirestoreDocument, field: string) {
  return document.fields?.[field]?.stringValue?.trim() || undefined;
}

function booleanField(document: FirestoreDocument, field: string) {
  return document.fields?.[field]?.booleanValue;
}

function documentId(document: FirestoreDocument) {
  return decodeURIComponent(document.name.split("/").at(-1) || "");
}

function lastModified(document: FirestoreDocument) {
  return (
    document.fields?.updatedAt?.timestampValue ||
    document.updateTime ||
    document.fields?.createdAt?.timestampValue ||
    document.createTime
  );
}

function publicPath(value: string | undefined) {
  if (!value) return undefined;

  try {
    const url = new URL(value, "https://www.himkalaadventure.com");
    if (url.origin !== "https://www.himkalaadventure.com") return undefined;
    if (!url.pathname.startsWith("/") || url.pathname.startsWith("/admin"))
      return undefined;
    return url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
  } catch {
    return undefined;
  }
}

async function readFirestoreCollection(collection: string) {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim();
  if (!projectId || !apiKey) return null;

  const documents: FirestoreDocument[] = [];
  let pageToken: string | undefined;

  try {
    do {
      const endpoint = new URL(
        `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents/${encodeURIComponent(collection)}`,
      );
      endpoint.searchParams.set("key", apiKey);
      endpoint.searchParams.set("pageSize", "300");
      if (pageToken) endpoint.searchParams.set("pageToken", pageToken);

      const response = await fetch(endpoint, {
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (!response.ok) return null;

      const page = (await response.json()) as FirestoreListResponse;
      documents.push(...(page.documents || []));
      pageToken = page.nextPageToken;
    } while (pageToken);

    return documents;
  } catch (error) {
    console.warn(`Could not load ${collection} for sitemap.`, error);
    return null;
  }
}

function fallbackTrekking(): SitemapContentEntry[] {
  return TREKKING_SERVICES_FALLBACK.map((trek) => ({
    path: trek.link,
    kind: "trekking",
  }));
}

function firestoreTrekking(documents: FirestoreDocument[]) {
  const valid = documents
    .map((document) => {
      const id = stringField(document, "id") || documentId(document);
      const path = publicPath(
        stringField(document, "link") ||
          (id ? `/services/trekking/${id}` : undefined),
      );
      return path
        ? {
            path,
            kind: "trekking" as const,
            lastModified: lastModified(document),
            published: booleanField(document, "published") !== false,
          }
        : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  if (documents.length === 0 || valid.length === 0) return fallbackTrekking();
  return valid
    .filter((entry) => entry.published)
    .map(({ published: _published, ...entry }) => entry);
}

function fallbackBlog(): SitemapContentEntry[] {
  return BLOG_POSTS_FALLBACK.filter((post) => post.published).map((post) => {
    const date = new Date(post.date);
    return {
      path: `/blog/${post.slug}`,
      kind: "blog",
      ...(Number.isNaN(date.getTime())
        ? {}
        : { lastModified: date.toISOString() }),
    };
  });
}

function firestoreBlog(documents: FirestoreDocument[]) {
  const valid = documents
    .map((document) => {
      const slug = stringField(document, "slug") || documentId(document);
      const path = publicPath(slug ? `/blog/${slug}` : undefined);
      return path
        ? {
            path,
            kind: "blog" as const,
            lastModified: lastModified(document),
            published: booleanField(document, "published") !== false,
          }
        : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  if (documents.length === 0 || valid.length === 0) return fallbackBlog();
  return valid
    .filter((entry) => entry.published)
    .map(({ published: _published, ...entry }) => entry);
}

function fallbackManaged(
  collection: ManagedServiceCollection,
): SitemapContentEntry[] {
  return MANAGED_SERVICES_FALLBACK[collection]
    .filter((service) => service.published)
    .map((service) => ({
      path:
        publicPath(service.link) ||
        managedServicePublicLink(collection, service),
      kind: collection,
    }));
}

function firestoreManaged(
  collection: ManagedServiceCollection,
  documents: FirestoreDocument[],
) {
  const valid = documents
    .map((document) => {
      const id = stringField(document, "id") || documentId(document);
      const slug = stringField(document, "slug") || id;
      const destination = stringField(document, "destination");
      const fallbackLink =
        collection === "freeTours"
          ? MANAGED_SERVICE_COLLECTIONS[collection].publicPath
          : collection === "destinationTours"
            ? destination && slug
              ? `/destinations/${destination}/${slug}`
              : undefined
            : slug
              ? `${MANAGED_SERVICE_COLLECTIONS[collection].publicPath}/${slug}`
              : undefined;
      const path = publicPath(stringField(document, "link") || fallbackLink);

      return path
        ? {
            path,
            kind: collection,
            lastModified: lastModified(document),
            published: booleanField(document, "published") !== false,
          }
        : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  if (documents.length === 0 || valid.length === 0)
    return fallbackManaged(collection);
  return valid
    .filter((entry) => entry.published)
    .map(({ published: _published, ...entry }) => entry);
}

export async function loadSitemapContent(): Promise<SitemapContentEntry[]> {
  const [trekking, blog, ...managed] = await Promise.all([
    readFirestoreCollection("trekkingServices"),
    readFirestoreCollection("blogPosts"),
    ...FIRESTORE_COLLECTIONS.map(readFirestoreCollection),
  ]);

  return [
    ...(trekking === null ? fallbackTrekking() : firestoreTrekking(trekking)),
    ...(blog === null ? fallbackBlog() : firestoreBlog(blog)),
    ...managed.flatMap((documents, index) => {
      const collection = FIRESTORE_COLLECTIONS[index];
      return documents === null
        ? fallbackManaged(collection)
        : firestoreManaged(collection, documents);
    }),
  ];
}
