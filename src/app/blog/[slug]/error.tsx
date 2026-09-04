"use client";
import PublicContentError from "@/components/public/PublicContentError";
export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <PublicContentError {...props} returnHref="/blog" />;
}
