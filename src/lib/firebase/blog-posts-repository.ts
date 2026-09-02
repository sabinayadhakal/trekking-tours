"use client";

import { collection, deleteDoc, doc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import { BLOG_POSTS_FALLBACK, BLOG_POSTS_UPDATED_EVENT, BlogPost, normalizeBlogPosts } from "@/lib/blog-posts";
import { getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";

const COLLECTION = "blogPosts";
type StoredPost = BlogPost & { order?: number; updatedAt?: unknown };

function cleanDocument(data: StoredPost): BlogPost {
  const { order: _order, updatedAt: _updatedAt, ...post } = data;
  return post;
}

async function readCollection() {
  const database = getFirebaseDatabase();
  if (!database) return null;
  const snapshot = await getDocs(collection(database, COLLECTION));
  const documents = snapshot.docs
    .map((item) => item.data() as StoredPost)
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
    .map(cleanDocument);
  return normalizeBlogPosts(documents);
}

async function writeCollection(posts: BlogPost[]) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };
  try {
    const batch = writeBatch(database);
    posts.forEach((post, order) => batch.set(doc(database, COLLECTION, post.id), { ...post, order, updatedAt: serverTimestamp() }));
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
      const posts = await readCollection();
      if (posts?.length) return { posts, source: "firestore" as const };
    } catch (error) {
      console.warn("Could not load blog posts from Firestore.", error);
    }
  }
  return allowFallback
    ? { posts: BLOG_POSTS_FALLBACK, source: "fallback" as const }
    : { posts: [], source: "unavailable" as const };
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
