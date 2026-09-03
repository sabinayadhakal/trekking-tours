import ManagedServiceDetail from "@/components/services/ManagedServiceDetail";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <ManagedServiceDetail collection="mountainFlights" serviceId={slug}/>; }
