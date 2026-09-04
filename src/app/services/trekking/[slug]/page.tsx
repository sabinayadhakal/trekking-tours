import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrekkingServiceDetail from "@/components/trekking/TrekkingServiceDetail";
import { loadPublicTrekkingService } from "@/lib/firebase/public-content-server";
import {
  publicContentMetadata,
  unavailableContentMetadata,
} from "@/lib/public-content-metadata";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await loadPublicTrekkingService(slug);
  if (result.status === "unavailable") return unavailableContentMetadata;
  if (result.status === "not-found") notFound();

  const trek = result.item;
  return publicContentMetadata({
    title: `${trek.name} | Himkala Adventure`,
    description: trek.shortDescription || trek.description,
    path: trek.link,
    image: trek.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const result = await loadPublicTrekkingService(slug);
  if (result.status === "not-found") notFound();
  if (result.status === "unavailable")
    throw new Error("PUBLIC_CONTENT_UNAVAILABLE");
  return <TrekkingServiceDetail initialTrek={result.item} />;
}
