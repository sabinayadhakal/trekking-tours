import type { Metadata } from "next";
import ManagedServicePage, {
  generateManagedServiceMetadata,
} from "@/components/services/ManagedServicePage";
type PageProps = { params: Promise<{ slug: string }> };
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateManagedServiceMetadata({ collection: "dayHikings", slug });
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ManagedServicePage collection="dayHikings" slug={slug} />;
}
