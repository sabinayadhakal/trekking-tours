"use client";

import { collection, deleteDoc, doc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import { BLOG_POSTS_FALLBACK, BLOG_POSTS_UPDATED_EVENT, BlogPost, normalizeBlogPosts } from "@/lib/blog-posts";
import { getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";

const COLLECTION = "blogPosts";
type StoredPost = BlogPost & { order?: number; createdAt?: unknown; updatedAt?: unknown };

function cleanDocument(data: StoredPost): BlogPost {
  const { order: _order, createdAt: _createdAt, updatedAt: _updatedAt, ...post } = data;
  return post;
}

function timestampValue(value: unknown) {
  if (typeof value === "number") return value;
  if (value && typeof value === "object" && "toMillis" in value && typeof value.toMillis === "function") return value.toMillis();
  return 0;
}

async function readCollection() {
  const database = getFirebaseDatabase();
  if (!database) return null;
  const snapshot = await getDocs(collection(database, COLLECTION));
  const stored = snapshot.docs.map((item) => item.data() as StoredPost);
  const documents = stored
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
    .map(cleanDocument);
  const posts = normalizeBlogPosts(documents);
  if (!posts) return null;
  const dated = stored
    .filter((item) => timestampValue(item.createdAt) > 0)
    .sort(
      (a, b) =>
        timestampValue(b.createdAt) - timestampValue(a.createdAt) ||
        (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER),
    );
  const datedIds = new Set(dated.map((item) => item.id));
  const recentIds = [
    ...dated.map((item) => item.id),
    ...posts.filter((item) => !datedIds.has(item.id)).map((item) => item.id),
  ];
  return { posts, latestId: recentIds[0], recentIds };
}

async function writeCollection(posts: BlogPost[]) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };
  try {
    const existingSnapshot = await getDocs(collection(database, COLLECTION));
    const existingIds = new Set(existingSnapshot.docs.map((item) => item.id));
    const batch = writeBatch(database);
    posts.forEach((post, order) => batch.set(doc(database, COLLECTION, post.id), { ...post, order, updatedAt: serverTimestamp(), ...(!existingIds.has(post.id) ? { createdAt: serverTimestamp() } : {}) }, { merge: true }));
    await batch.commit();
    window.dispatchEvent(new Event(BLOG_POSTS_UPDATED_EVENT));
    return { source: "firestore" as const };
  } catch (error) {
    console.warn("Could not save blog posts to Firestore.", error);
    return { source: "unavailable" as const, error: error instanceof Error ? error.message : "Could not save blog posts." };
  }
}

export async function loadBlogPosts({ allowFallback = true }: { allowFallback?: boolean } = {}) {
  if (isFirebaseConfigured) {
    try {
      const result = await readCollection();
      if (result?.posts.length) return { ...result, source: "firestore" as const };
    } catch (error) {
      console.warn("Could not load blog posts from Firestore.", error);
    }
  }
  return allowFallback
    ? {
        posts: BLOG_POSTS_FALLBACK,
        latestId: BLOG_POSTS_FALLBACK[0]?.id,
        recentIds: BLOG_POSTS_FALLBACK.map((post) => post.id),
        source: "fallback" as const,
      }
    : {
        posts: [],
        latestId: undefined,
        recentIds: [],
        source: "unavailable" as const,
      };
}

export function saveBlogPosts(posts: BlogPost[]) {
  return writeCollection(posts);
}

export function importHardcodedBlogPosts() {
  return writeCollection(BLOG_POSTS_FALLBACK);
}

export async function deleteBlogPost(id: string) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };
  try {
    await deleteDoc(doc(database, COLLECTION, id));
    window.dispatchEvent(new Event(BLOG_POSTS_UPDATED_EVENT));
    return { source: "firestore" as const };
  } catch (error) {
    return { source: "unavailable" as const, error: error instanceof Error ? error.message : "Could not delete blog article." };
  }
}
