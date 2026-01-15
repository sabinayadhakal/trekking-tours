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
          '/_next/',
          '/404',
          '/500',
          '/checkout',
          '/cart',
          '/payment',
          '/thank-you',
        ],
      },
      {
        userAgent: 'Googlebot',
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
      'https://himkala.com/sitemap.xml',
    ],
  },
  exclude: [
    '/admin*',
    '/api*',
    '/dashboard*',
    '/private*',
    '/_next*',
    '/404',
    '/500',
    '/checkout*',
    '/payment*',
    '/cart',
    '/thank-you',
  ],
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false, // Set to false for single sitemap
  generateRobotsTxt: false, // Set to false since you're using static robots.txt
  autoLastmod: true,
  trailingSlash: false,
  outDir: 'public',
  
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    const importantPages = ['/about-us', '/contact', '/blog'];
    if (importantPages.includes(path)) {
      priority = 0.9;
      changefreq = 'daily';
    }
    
    if (path.includes('/destinations/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    if (path.includes('/services/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    
    if (path.includes('/blog/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};