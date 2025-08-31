"use client";

import BlogContent from "@/components/blog/BlogContent";
import BlogHero from "@/components/blog/blogHero";
import BlogForm from "@/components/blog/BlogForm";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div className="p-4 md:p-8 space-y-12">
        <BlogContent />
      </div>

      {/* Pass a dummy addPost function to satisfy TypeScript */}
      <BlogForm addPost={(post) => console.log("New blog submitted:", post)} />
    </>
  );
}
