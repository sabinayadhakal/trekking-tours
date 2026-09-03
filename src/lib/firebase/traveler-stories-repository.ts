"use client";

import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";
import {
  normalizeTravelerStoriesContent,
  TRAVELER_STORIES_EMPTY,
  TRAVELER_STORIES_FALLBACK,
  TRAVELER_STORIES_UPDATED_EVENT,
  TravelerStoriesContent,
} from "@/lib/traveler-stories";

const COLLECTION = "siteContent";
const DOCUMENT = "travelerStories";

export async function loadTravelerStories({ allowFallback = true }: { allowFallback?: boolean } = {}) {
  if (isFirebaseConfigured) {
    try {
      const database = getFirebaseDatabase();
      if (database) {
        const snapshot = await getDoc(doc(database, COLLECTION, DOCUMENT));
        const content = snapshot.exists() ? normalizeTravelerStoriesContent(snapshot.data()) : null;
        if (content) return { content, source: "firestore" as const };
      }
    } catch (error) {
      console.warn("Could not load Traveler Stories from Firestore.", error);
    }
  }

  return allowFallback
    ? { content: TRAVELER_STORIES_FALLBACK, source: "fallback" as const }
    : { content: TRAVELER_STORIES_EMPTY, source: "unavailable" as const };
}

export async function saveTravelerStories(content: TravelerStoriesContent) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };

  try {
    await setDoc(doc(database, COLLECTION, DOCUMENT), { ...content, updatedAt: serverTimestamp() });
    window.dispatchEvent(new Event(TRAVELER_STORIES_UPDATED_EVENT));
    return { source: "firestore" as const };
  } catch (error) {
    console.warn("Could not save Traveler Stories to Firestore.", error);
    return {
      source: "unavailable" as const,
      error: error instanceof Error ? error.message : "Could not save Traveler Stories.",
    };
  }
}

export function importHardcodedTravelerStories() {
  return saveTravelerStories(TRAVELER_STORIES_FALLBACK);
}
