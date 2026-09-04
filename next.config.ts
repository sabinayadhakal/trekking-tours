import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Resolve dynamic SEO metadata before sending the response. This also lets
  // notFound() return a real 404 instead of a streamed 200 with noindex.
  htmlLimitedBots: /.*/,
  images: {
    unoptimized: true, // This stops Vercel from charging you for image transformations
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
