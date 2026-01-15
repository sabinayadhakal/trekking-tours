import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Add your domains for launch
      {
        protocol: 'https',
        hostname: 'himkala.com',
      },
      {
        protocol: 'https',
        hostname: 'himkalaadventure.com',
      },
      {
        protocol: 'https',
        hostname: 'www.himkala.com',
      },
      {
        protocol: 'https',
        hostname: 'www.himkalaadventure.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance optimizations - REMOVED swcMinify (default in Next.js 15)
  compress: true,
  
  // Critical for SEO migration
  async redirects() {
    return [
      // IMPORTANT: Redirect old domain to new primary domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'himkalaadventure.com',
          },
        ],
        destination: 'https://himkala.com/:path*',
        permanent: true, // 301 redirect
      },
      // Redirect www to non-www for primary domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.himkala.com',
          },
        ],
        destination: 'https://himkala.com/:path*',
        permanent: true,
      },
      // Redirect www for old domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.himkalaadventure.com',
          },
        ],
        destination: 'https://himkala.com/:path*',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // Security for API routes
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://himkala.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;