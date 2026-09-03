"use client";

import { useParams } from "next/navigation";
import TrekkingServiceForm from "@/components/admin/TrekkingServiceForm";

export default function EditTrekPage() {
  const params = useParams<{ id: string }>();
  return <TrekkingServiceForm serviceId={params.id} />;
}
