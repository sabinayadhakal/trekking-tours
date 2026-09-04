export default function PublicDetailLoading() {
  return (
    <main className="min-h-[70vh] bg-[#f2ede4] px-5 py-20" aria-busy="true">
      <div className="mx-auto max-w-[880px] animate-pulse">
        <div className="h-3 w-36 rounded-full bg-[#cf6943]/20" />
        <div className="mt-6 h-14 max-w-2xl rounded-xl bg-[#14383b]/10 sm:h-20" />
        <div className="mt-4 h-5 max-w-xl rounded bg-[#14383b]/10" />
        <div className="mt-10 h-64 rounded-xl bg-[#e4d8c8] sm:h-96" />
        <p className="mt-6 text-center text-sm font-semibold text-[#66706d]">
          Loading content…
        </p>
      </div>
    </main>
  );
}
