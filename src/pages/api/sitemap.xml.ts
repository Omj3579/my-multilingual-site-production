import { NextApiRequest, NextApiResponse } from 'next';
import { SEO_CONFIG, TECHNICAL_SEO } from '../../lib/seo/config';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
  alternates?: Array<{
    hreflang: string;
    href: string;
  }>;
}

// Static pages configuration
const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  
  // Company pages
  { path: '/company', changefreq: 'monthly', priority: '0.8' },
  { path: '/company/careers', changefreq: 'monthly', priority: '0.7' },
  { path: '/company/history', changefreq: 'yearly', priority: '0.6' },
  { path: '/company/management', changefreq: 'yearly', priority: '0.6' },
  
  // Services pages
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/services/plastic-injection-moulding', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/in-mould-labelling', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/in-mould-decoration', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/injection-blow', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/surface-finishing', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/assembly', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/tooling-management', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/material-selection', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/precision-quality', changefreq: 'monthly', priority: '0.8' },
  { path: '/services/contract-manufacturing', changefreq: 'monthly', priority: '0.8' },
  
  // Products pages
  { path: '/products', changefreq: 'monthly', priority: '0.9' },
  { path: '/products/cart', changefreq: 'weekly', priority: '0.4' },
  { path: '/products/searchresultspage', changefreq: 'weekly', priority: '0.5' },
  
  // Sustainability pages
  { path: '/sustainability', changefreq: 'monthly', priority: '0.8' },
  { path: '/sustainability/clean-sweep', changefreq: 'monthly', priority: '0.7' },
  { path: '/sustainability/green-strategy', changefreq: 'monthly', priority: '0.7' },
  
  // Resources pages
  { path: '/resources', changefreq: 'weekly', priority: '0.8' },
  { path: '/resources/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/resources/case-studies', changefreq: 'monthly', priority: '0.8' },
  { path: '/resources/news', changefreq: 'weekly', priority: '0.6' },
  { path: '/resources/updates', changefreq: 'weekly', priority: '0.6' },
  
  // Policy pages
  { path: '/policies/termsconditions', changefreq: 'yearly', priority: '0.3' },
  { path: '/policies/cookiesettings', changefreq: 'yearly', priority: '0.3' },
  { path: '/policies/privacypolicy', changefreq: 'yearly', priority: '0.3' },
  { path: '/policies/cookiepolicy', changefreq: 'yearly', priority: '0.3' },
  
  // Industry pages
  { path: '/industries/power-tools', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/household-products', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/hygiene-personal-care', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/agriculture', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/medical-healthcare', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/consumer-electronics', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/food-beverage-packaging', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/toys-educational-products', changefreq: 'monthly', priority: '0.9' },
  { path: '/industries/furniture', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/packaging', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/pharmaceutical-packaging', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/caps-closures', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/cosmetics-containers', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/baby-products', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/pet-products', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/gardening-tools-accessories', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/sanitary-products', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/cleaning-tools-accessories', changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/waste-management-products', changefreq: 'monthly', priority: '0.8' }
];

// Dynamic content - these would typically come from your CMS or database
const DYNAMIC_CONTENT = {
  blog: [
    'sustainable-plastic-manufacturing-innovations',
    'recycling-technology-advances-2024',
    'injection-Moulding-precision-techniques',
    'circular-economy-plastic-industry',
    'future-of-bioplastics-manufacturing',
    'smart-manufacturing-iot-integration',
    'automotive-plastic-components-evolution',
    'medical-device-manufacturing-standards'
  ],
  caseStudies: [
    'a-decade-of-innovation-collaboration',
    'aerospace-lightweight-durable-components',
    'automotive-lightweight-components',
    'circular-economy-implementation-showcase',
    'consumer-electronics-heat-management',
    'medical-device-sterilization-packaging',
    'packaging-breakthrough-interactive',
    'smart-manufacturing-transformation',
    'sustainable-packaging-innovation',
    'data-driven-manufacturing-excellence',
    'interactive-manufacturing-experience',
    'sustainable-future-strategy'
  ],
  news: [
    'annual-sustainability-report-interactive-dashboard',
    'ceo-keynote-plastic-future-summit',
    'european-expansion-interactive-announcement',
    'flair-plastic-announces-major-expansion',
    'innovation-award-interactive-showcase',
    'million-tons-recycled-milestone',
    'strategic-partnership-tech-innovation-lab',
    'sustainability-award-green-manufacturing-excellence'
  ],
  updates: [
    'new-injection-Moulding-machine-installation',
    'iso-certification-renewal-2024',
    'employee-training-sustainability-program',
    'facility-expansion-completion'
  ]
};

function generateSitemapUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const baseUrl = SEO_CONFIG.site.domain;
  const languages = SEO_CONFIG.site.languages;
  const defaultLang = SEO_CONFIG.site.defaultLanguage;

  // Add static pages
  STATIC_PAGES.forEach(page => {
    languages.forEach((lang: string) => {
      const isDefault = lang === defaultLang;
      const path = isDefault ? page.path : `/${lang}${page.path}`;
      const url = `${baseUrl}${path}`;
      
      // Generate alternates for this page
      const alternates = languages.map((altLang: string) => ({
        hreflang: altLang,
        href: altLang === defaultLang 
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${altLang}${page.path}`
      }));

      urls.push({
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: page.changefreq,
        priority: page.priority,
        alternates
      });
    });
  });

  // Add dynamic blog posts
  DYNAMIC_CONTENT.blog.forEach(slug => {
    languages.forEach((lang: string) => {
      const isDefault = lang === defaultLang;
      const path = isDefault ? `/resources/blog/${slug}` : `/${lang}/resources/blog/${slug}`;
      const url = `${baseUrl}${path}`;
      
      const alternates = languages.map((altLang: string) => ({
        hreflang: altLang,
        href: altLang === defaultLang 
          ? `${baseUrl}/resources/blog/${slug}`
          : `${baseUrl}/${altLang}/resources/blog/${slug}`
      }));

      urls.push({
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: TECHNICAL_SEO.sitemap.changeFrequency.blog,
        priority: String(TECHNICAL_SEO.sitemap.priority.blog),
        alternates
      });
    });
  });

  // Add case studies
  DYNAMIC_CONTENT.caseStudies.forEach(slug => {
    languages.forEach((lang: string) => {
      const isDefault = lang === defaultLang;
      const path = isDefault ? `/resources/case-studies/${slug}` : `/${lang}/resources/case-studies/${slug}`;
      const url = `${baseUrl}${path}`;
      
      const alternates = languages.map((altLang: string) => ({
        hreflang: altLang,
        href: altLang === defaultLang 
          ? `${baseUrl}/resources/case-studies/${slug}`
          : `${baseUrl}/${altLang}/resources/case-studies/${slug}`
      }));

      urls.push({
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: TECHNICAL_SEO.sitemap.changeFrequency.caseStudies,
        priority: String(TECHNICAL_SEO.sitemap.priority.caseStudies),
        alternates
      });
    });
  });

  // Add news
  DYNAMIC_CONTENT.news.forEach(slug => {
    languages.forEach((lang: string) => {
      const isDefault = lang === defaultLang;
      const path = isDefault ? `/resources/news/${slug}` : `/${lang}/resources/news/${slug}`;
      const url = `${baseUrl}${path}`;
      
      const alternates = languages.map((altLang: string) => ({
        hreflang: altLang,
        href: altLang === defaultLang 
          ? `${baseUrl}/resources/news/${slug}`
          : `${baseUrl}/${altLang}/resources/news/${slug}`
      }));

      urls.push({
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: TECHNICAL_SEO.sitemap.changeFrequency.news,
        priority: String(TECHNICAL_SEO.sitemap.priority.news),
        alternates
      });
    });
  });

  return urls;
}

function generateXMLSitemap(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => {
    let urlXml = `    <url>
      <loc>${url.loc}</loc>`;

    if (url.lastmod) {
      urlXml += `
      <lastmod>${url.lastmod}</lastmod>`;
    }

    if (url.changefreq) {
      urlXml += `
      <changefreq>${url.changefreq}</changefreq>`;
    }

    if (url.priority) {
      urlXml += `
      <priority>${url.priority}</priority>`;
    }

    // Add hreflang alternates
    if (url.alternates && url.alternates.length > 0) {
      url.alternates.forEach(alternate => {
        urlXml += `
      <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`;
      });
    }

    urlXml += `
    </url>`;

    return urlXml;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Generate sitemap URLs
  const urls = generateSitemapUrls();
  
  // Generate XML
  const sitemap = generateXMLSitemap(urls);

  // Set headers
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // Cache for 24 hours
  
  // Send sitemap
  res.status(200).send(sitemap);
}
