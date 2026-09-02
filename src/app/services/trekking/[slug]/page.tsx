import TrekkingServiceDetail from "@/components/trekking/TrekkingServiceDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TrekkingServiceDetail slug={slug} />;
}
