import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ManagedServiceDetail from "@/components/services/ManagedServiceDetail";
import { loadPublicManagedService } from "@/lib/firebase/public-content-server";
import {
  DestinationCountry,
  ManagedServiceCollection,
  managedServicePublicLink,
} from "@/lib/managed-services";
import {
  publicContentMetadata,
  unavailableContentMetadata,
} from "@/lib/public-content-metadata";

type ManagedServicePageProps = {
  collection: ManagedServiceCollection;
  slug: string;
  destination?: DestinationCountry;
};

export async function generateManagedServiceMetadata({
  collection,
  slug,
  destination,
}: ManagedServicePageProps): Promise<Metadata> {
  const result = await loadPublicManagedService(collection, slug, destination);
  if (result.status === "unavailable") return unavailableContentMetadata;
  if (result.status === "not-found") notFound();

  const service = result.item;
  return publicContentMetadata({
    title: `${service.name} | Himkala Adventure`,
    description: service.shortDescription || service.description,
    path: service.link || managedServicePublicLink(collection, service),
    image: service.image,
  });
}

export default async function ManagedServicePage({
  collection,
  slug,
  destination,
}: ManagedServicePageProps) {
  const result = await loadPublicManagedService(collection, slug, destination);
  if (result.status === "not-found") notFound();
  if (result.status === "unavailable")
    throw new Error("PUBLIC_CONTENT_UNAVAILABLE");

  return (
    <ManagedServiceDetail
      collection={collection}
      destination={destination}
      initialService={result.item}
    />
  );
}
