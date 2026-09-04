import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { loadPublicBlogPost } from "@/lib/firebase/public-content-server";
import {
  publicContentMetadata,
  unavailableContentMetadata,
} from "@/lib/public-content-metadata";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await loadPublicBlogPost(slug);
  if (result.status === "unavailable") return unavailableContentMetadata;
  if (result.status === "not-found") notFound();

  const post = result.item;
  return publicContentMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function DynamicBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await loadPublicBlogPost(slug);
  if (result.status === "not-found") notFound();
  if (result.status === "unavailable")
    throw new Error("PUBLIC_CONTENT_UNAVAILABLE");

  const relatedPosts = result.items
    .filter((post) => result.item.relatedSlugs.includes(post.slug))
    .map(
      ({
        id,
        slug: relatedSlug,
        title,
        image,
        imageAlt,
        date,
        readTime,
        published,
      }) => ({
        id,
        slug: relatedSlug,
        title,
        image,
        imageAlt,
        date,
        readTime,
        published,
      }),
    );
  return (
    <BlogPostDetail initialPost={result.item} initialPosts={relatedPosts} />
  );
}
