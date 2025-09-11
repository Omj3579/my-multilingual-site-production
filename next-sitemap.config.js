import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: process.env.SITE_URL || 'https://flairplastic.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/server-sitemap-index.xml', // Exclude dynamic sitemap
    '/favicon-test',
    '/admin/*',
    '/api/*'
  ],
  additionalPaths: async (config) => {
    const result = [];
    
    // Add product categories
    const categories = ['active', 'garden', 'home', 'kids', 'kitchen', 'pallets'];
    categories.forEach(category => {
      result.push({
        loc: `/products/${category}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    // Add industries pages
    const industries = [
      'automotive', 'hygiene-personal-care', 'garden-power-tools',
      'home-living', 'food-beverage', 'medical-healthcare',
      'electronics-technology', 'construction-building',
      'packaging-logistics', 'sports-recreation',
      'industrial-manufacturing', 'agriculture-farming',
      'retail-commercial', 'energy-utilities',
      'textiles-apparel', 'furniture-interior',
      'toys-entertainment', 'chemical-pharmaceutical',
      'aerospace-defense'
    ];
    
    industries.forEach(industry => {
      result.push({
        loc: `/industries/${industry}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/api']
      }
    ],
    additionalSitemaps: [
      `${config.siteUrl}/server-sitemap-index.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.5;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/products')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/industries')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}

export default config;
