"use client";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import {
  getFirebaseDatabase,
  isFirebaseConfigured,
} from "@/lib/firebase/client";
import {
  MANAGED_SERVICES_FALLBACK,
  MANAGED_SERVICES_UPDATED_EVENT,
  ManagedService,
  ManagedServiceCollection,
  normalizeManagedServices,
} from "@/lib/managed-services";

type StoredService = ManagedService & {
  order?: number;
  createdAt?: unknown;
  updatedAt?: unknown;
};
function timestampValue(value: unknown) {
  if (typeof value === "number") return value;
  if (
    value &&
    typeof value === "object" &&
    "toMillis" in value &&
    typeof value.toMillis === "function"
  )
    return value.toMillis();
  return 0;
}
function cleanDocument(data: StoredService): ManagedService {
  const {
    order: _order,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    ...service
  } = data;
  return service;
}

async function readCollection(name: ManagedServiceCollection) {
  const database = getFirebaseDatabase();
  if (!database) return null;
  const snapshot = await getDocs(collection(database, name));
  const stored = snapshot.docs.map((item) => item.data() as StoredService);
  const ordered = [...stored].sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) -
      (b.order ?? Number.MAX_SAFE_INTEGER),
  );
  const services = normalizeManagedServices(ordered.map(cleanDocument));
  const dated = stored
    .filter((item) => timestampValue(item.createdAt) > 0)
    .sort((a, b) => timestampValue(b.createdAt) - timestampValue(a.createdAt));
  return services
    ? { services, latestId: dated[0]?.id || services.at(-1)?.id }
    : null;
}

async function writeCollection(
  name: ManagedServiceCollection,
  services: ManagedService[],
) {
  const database = getFirebaseDatabase();
  if (!database)
    return {
      source: "unavailable" as const,
      error: "Firebase is not configured.",
    };
  try {
    const existing = await getDocs(collection(database, name));
    const existingIds = new Set(existing.docs.map((item) => item.id));
    const batch = writeBatch(database);
    services.forEach((service, order) =>
      batch.set(
        doc(database, name, service.id),
        {
          ...service,
          order,
          updatedAt: serverTimestamp(),
          ...(!existingIds.has(service.id)
            ? { createdAt: serverTimestamp() }
            : {}),
        },
        { merge: true },
      ),
    );
    await batch.commit();
    window.dispatchEvent(
      new CustomEvent(MANAGED_SERVICES_UPDATED_EVENT, { detail: name }),
    );
    return { source: "firestore" as const };
  } catch (error) {
    return {
      source: "unavailable" as const,
      error: error instanceof Error ? error.message : `Could not save ${name}.`,
    };
  }
}

export async function loadManagedServices(
  name: ManagedServiceCollection,
  { allowFallback = true }: { allowFallback?: boolean } = {},
) {
  if (isFirebaseConfigured) {
    try {
      const result = await readCollection(name);
      if (result?.services.length)
        return { ...result, source: "firestore" as const };
    } catch (error) {
      console.warn(`Could not load ${name} from Firestore.`, error);
    }
  }
  return allowFallback
    ? {
        services: MANAGED_SERVICES_FALLBACK[name],
        latestId: MANAGED_SERVICES_FALLBACK[name].at(-1)?.id,
        source: "fallback" as const,
      }
    : { services: [], latestId: undefined, source: "unavailable" as const };
}

export function saveManagedServices(
  name: ManagedServiceCollection,
  services: ManagedService[],
) {
  return writeCollection(name, services);
}
export function importHardcodedManagedServices(name: ManagedServiceCollection) {
  return writeCollection(name, MANAGED_SERVICES_FALLBACK[name]);
}
export async function importAllNewManagedServices() {
  const collections: ManagedServiceCollection[] = [
    "freeTours",
    "multiDayTours",
    "dayHikings",
    "daySightseeings",
    "mountainFlights",
    "jungleSafaris",
    "destinationTours",
  ];
  const results = await Promise.all(
    collections.map((name) => importHardcodedManagedServices(name)),
  );
  return {
    results,
    success: results.every((result) => result.source === "firestore"),
  };
}
export async function deleteManagedService(
  name: ManagedServiceCollection,
  id: string,
) {
  const database = getFirebaseDatabase();
  if (!database)
    return {
      source: "unavailable" as const,
      error: "Firebase is not configured.",
    };
  try {
    await deleteDoc(doc(database, name, id));
    window.dispatchEvent(
      new CustomEvent(MANAGED_SERVICES_UPDATED_EVENT, { detail: name }),
    );
    return { source: "firestore" as const };
  } catch (error) {
    return {
      source: "unavailable" as const,
      error:
        error instanceof Error ? error.message : "Could not delete service.",
    };
  }
}
