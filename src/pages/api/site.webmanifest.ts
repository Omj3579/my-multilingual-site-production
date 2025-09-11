import { NextApiRequest, NextApiResponse } from 'next';
import { SEO_CONFIG } from '../../lib/seo/config';

interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
  purpose?: string;
}

interface WebAppManifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: string;
  background_color: string;
  theme_color: string;
  orientation: string;
  scope: string;
  lang: string;
  icons: ManifestIcon[];
  categories: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<WebAppManifest>) {
  const manifest: WebAppManifest = {
    name: SEO_CONFIG.site.name,
    short_name: "Flair Plastic",
    description: SEO_CONFIG.site.description.en,
    start_url: "/",
    display: "standalone",
    background_color: SEO_CONFIG.site.backgroundColor,
    theme_color: SEO_CONFIG.site.themeColor,
    orientation: "portrait-primary",
    scope: "/",
    lang: SEO_CONFIG.site.defaultLanguage,
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    categories: [
      "business",
      "manufacturing",
      "sustainability",
      "industrial"
    ]
  };

  // Set headers for web app manifest
  res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
  
  res.status(200).json(manifest);
}
