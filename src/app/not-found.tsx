import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f2ede4] px-5 py-20 text-center">
      <div className="max-w-lg">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#cf6943]">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl text-[#14383b]">
          Content not found
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#66706d]">
          This page does not exist or is no longer published.
        </p>
        <Button asChild className="mt-7 bg-[#cf6943] text-white">
          <Link href="/">Return to home page</Link>
        </Button>
      </div>
    </main>
  );
}
