import { NextApiRequest, NextApiResponse } from 'next';

interface SitemapIndex {
  loc: string;
  lastmod: string;
}

// Define available sitemaps
const SITEMAP_TYPES = [
  'main',
  'blog',
  'case-studies',
  'news',
  'products',
  'services'
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemaps = SITEMAP_TYPES.map(type => ({
    loc: `https://star-plus.com/api/sitemap-${type}.xml`,
    lastmod: new Date().toISOString()
  }));

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(sitemapIndex);
}
