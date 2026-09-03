"use client";

import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";
import {
  normalizeSocialMediaContent,
  SOCIAL_MEDIA_EMPTY,
  SOCIAL_MEDIA_FALLBACK,
  SOCIAL_MEDIA_UPDATED_EVENT,
  SocialMediaContent,
} from "@/lib/social-media";

const COLLECTION = "siteContent";
const DOCUMENT = "socialMedia";

export async function loadSocialMediaContent({ allowFallback = true }: { allowFallback?: boolean } = {}) {
  if (isFirebaseConfigured) {
    try {
      const database = getFirebaseDatabase();
      if (database) {
        const snapshot = await getDoc(doc(database, COLLECTION, DOCUMENT));
        const content = snapshot.exists() ? normalizeSocialMediaContent(snapshot.data()) : null;
        if (content) return { content, source: "firestore" as const };
      }
    } catch (error) {
      console.warn("Could not load shared social media content from Firestore.", error);
    }
  }

  return allowFallback
    ? { content: SOCIAL_MEDIA_FALLBACK, source: "fallback" as const }
    : { content: SOCIAL_MEDIA_EMPTY, source: "unavailable" as const };
}

export async function saveSocialMediaContent(content: SocialMediaContent) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };

  try {
    await setDoc(doc(database, COLLECTION, DOCUMENT), { ...content, updatedAt: serverTimestamp() });
    window.dispatchEvent(new Event(SOCIAL_MEDIA_UPDATED_EVENT));
    return { source: "firestore" as const };
  } catch (error) {
    console.warn("Could not save shared social media content to Firestore.", error);
    return {
      source: "unavailable" as const,
      error: error instanceof Error ? error.message : "Could not save social media content.",
    };
  }
}

export function importHardcodedSocialMediaContent() {
  return saveSocialMediaContent(SOCIAL_MEDIA_FALLBACK);
}
