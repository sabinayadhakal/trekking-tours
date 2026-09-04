"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PublicContentError({
  error,
  reset,
  returnHref,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  returnHref: string;
}) {
  useEffect(() => {
    console.error("Public content could not be rendered.", error);
  }, [error]);

  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f2ede4] px-5 py-20 text-center">
      <div className="max-w-lg">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#cf6943]">
          Temporary interruption
        </p>
        <h1 className="mt-3 font-serif text-4xl text-[#14383b]">
          This content is temporarily unavailable
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#66706d]">
          We could not reach our content service. Please try again in a moment.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button onClick={reset} className="bg-[#cf6943] text-white">
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href={returnHref}>Return</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
