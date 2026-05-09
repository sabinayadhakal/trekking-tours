// src/app/robots.ts
import { MetadataRoute } from 'next'

const baseUrl = 'https://www.himkalaadventure.com' // Replace with your actual domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}