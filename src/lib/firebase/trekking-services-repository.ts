"use client";

import { collection, deleteDoc, doc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import { getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";
import { normalizeTrekkingServices, TREKKING_SERVICES_FALLBACK, TREKKING_SERVICES_UPDATED_EVENT, TrekkingService } from "@/lib/trekking-services";

const COLLECTION = "trekkingServices";
type StoredTrek = TrekkingService & { order?: number; updatedAt?: unknown };

function cleanDocument(data: StoredTrek): TrekkingService {
  const { order: _order, updatedAt: _updatedAt, ...trek } = data;
  return trek;
}

async function readCollection() {
  const database = getFirebaseDatabase();
  if (!database) return null;
  const snapshot = await getDocs(collection(database, COLLECTION));
  const documents = snapshot.docs
    .map((item) => item.data() as StoredTrek)
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
    .map(cleanDocument);
  return normalizeTrekkingServices(documents);
}

async function writeCollection(treks: TrekkingService[]) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };
  try {
    const batch = writeBatch(database);
    treks.forEach((trek, order) => batch.set(doc(database, COLLECTION, trek.id), { ...trek, order, updatedAt: serverTimestamp() }));
    await batch.commit();
    window.dispatchEvent(new Event(TREKKING_SERVICES_UPDATED_EVENT));
    return { source: "firestore" as const };
  } catch (error) {
    console.warn("Could not save trekking services to Firestore.", error);
    return { source: "unavailable" as const, error: error instanceof Error ? error.message : "Could not save trekking services." };
  }
}

export async function loadTrekkingServices({ allowFallback = true }: { allowFallback?: boolean } = {}) {
  if (isFirebaseConfigured) {
    try {
      const treks = await readCollection();
      if (treks?.length) return { treks, source: "firestore" as const };
    } catch (error) {
      console.warn("Could not load trekking services from Firestore.", error);
    }
  }
  return allowFallback
    ? { treks: TREKKING_SERVICES_FALLBACK, source: "fallback" as const }
    : { treks: [], source: "unavailable" as const };
}

export function saveTrekkingServices(treks: TrekkingService[]) {
  return writeCollection(treks);
}

export function importHardcodedTrekkingServices() {
  return writeCollection(TREKKING_SERVICES_FALLBACK);
}

export async function deleteTrekkingService(id: string) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };
  try {
    await deleteDoc(doc(database, COLLECTION, id));
    window.dispatchEvent(new Event(TREKKING_SERVICES_UPDATED_EVENT));
    return { source: "firestore" as const };
  } catch (error) {
    return { source: "unavailable" as const, error: error instanceof Error ? error.message : "Could not delete trekking service." };
  }
}
