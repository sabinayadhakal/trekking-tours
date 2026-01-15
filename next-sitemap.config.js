/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://himkala.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://himkala.com/sitemap-0.xml',
    ],
  },
  exclude: [
    '/admin*',
    '/api*',
    '/404',
    '/500',
    '/dashboard*',
    '/server-sitemap.xml',
  ],
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
};