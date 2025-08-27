import ReviewForm from "@/components/leave-review/reviewform";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <ReviewForm />
      </div>
    </div>
  );
}