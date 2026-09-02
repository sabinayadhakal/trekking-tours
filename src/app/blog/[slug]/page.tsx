"use client";
import { useParams } from "next/navigation";
import BlogPostDetail from "@/components/blog/BlogPostDetail";
export default function DynamicBlogPage(){const params=useParams<{slug:string}>();return <BlogPostDetail slug={params.slug}/>}
