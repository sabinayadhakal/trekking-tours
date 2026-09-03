"use client";

import { collection, deleteDoc, doc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import { getFirebaseDatabase, isFirebaseConfigured } from "@/lib/firebase/client";
import { normalizeTrekkingServices, TREKKING_SERVICES_FALLBACK, TREKKING_SERVICES_UPDATED_EVENT, TrekkingService } from "@/lib/trekking-services";

const COLLECTION = "trekkingServices";
type StoredTrek = TrekkingService & { order?: number; createdAt?: unknown; updatedAt?: unknown };

function cleanDocument(data: StoredTrek): TrekkingService {
  const { order: _order, createdAt: _createdAt, updatedAt: _updatedAt, ...trek } = data;
  return trek;
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
  const stored = snapshot.docs.map((item) => item.data() as StoredTrek);
  const documents = stored
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
    .map(cleanDocument);
  const treks = normalizeTrekkingServices(documents);
  const dated = stored.filter((item) => timestampValue(item.createdAt) > 0).sort((a, b) => timestampValue(b.createdAt) - timestampValue(a.createdAt));
  return treks ? { treks, latestId: dated[0]?.id || treks.at(-1)?.id } : null;
}

async function writeCollection(treks: TrekkingService[]) {
  const database = getFirebaseDatabase();
  if (!database) return { source: "unavailable" as const, error: "Firebase is not configured." };
  try {
    const existingSnapshot = await getDocs(collection(database, COLLECTION));
    const existingIds = new Set(existingSnapshot.docs.map((item) => item.id));
    const batch = writeBatch(database);
    treks.forEach((trek, order) => batch.set(doc(database, COLLECTION, trek.id), { ...trek, order, updatedAt: serverTimestamp(), ...(!existingIds.has(trek.id) ? { createdAt: serverTimestamp() } : {}) }, { merge: true }));
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
      const result = await readCollection();
      if (result?.treks.length) return { ...result, source: "firestore" as const };
    } catch (error) {
      console.warn("Could not load trekking services from Firestore.", error);
    }
  }
  return allowFallback
    ? { treks: TREKKING_SERVICES_FALLBACK, latestId: TREKKING_SERVICES_FALLBACK.at(-1)?.id, source: "fallback" as const }
    : { treks: [], latestId: undefined, source: "unavailable" as const };
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
