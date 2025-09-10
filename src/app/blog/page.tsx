import BlogContent from "@/components/blog/BlogContent";
import YouTubeVideosSection from "@/components/blog/yt-video-section";
import BlogHero from "@/components/blog/blogHero";

export default function BlogPage() {
  return (
    <main>
      <BlogHero/>
      <BlogContent />
      <YouTubeVideosSection />
    </main>
  );
}