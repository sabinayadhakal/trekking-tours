import ManagedServiceForm from "@/components/admin/ManagedServiceForm";
export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <ManagedServiceForm collection="jungleSafaris" serviceId={id}/>; }
