import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManagedServiceDetail from "@/components/services/ManagedServiceDetail";
import { loadPublicFeaturedManagedService } from "@/lib/firebase/public-content-server";
import {
  publicContentMetadata,
  unavailableContentMetadata,
} from "@/lib/public-content-metadata";

const canonicalPath = "/services/free-walking-tour-kathmandu";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const result = await loadPublicFeaturedManagedService("freeTours");
  if (result.status === "unavailable") return unavailableContentMetadata;
  if (result.status === "not-found") notFound();

  const service = result.item;
  return publicContentMetadata({
    title: `${service.name} | Himkala Adventure`,
    description: service.shortDescription || service.description,
    path: canonicalPath,
    image: service.image,
  });
}

export default async function FreeWalkingTourKathmanduPage() {
  const result = await loadPublicFeaturedManagedService("freeTours");
  if (result.status === "not-found") notFound();
  if (result.status === "unavailable")
    throw new Error("PUBLIC_CONTENT_UNAVAILABLE");

  return (
    <ManagedServiceDetail
      collection="freeTours"
      initialService={result.item}
    />
  );
}
