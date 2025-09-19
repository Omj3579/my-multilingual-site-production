import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Configure for production environment
  compress: true,
  poweredByHeader: false,
  output: 'standalone',
  
  // Skip linting during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // SEO and Performance optimizations
  experimental: {
    scrollRestoration: true
  },
  
  // Memory optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxSize: 244000,
        },
      }
    }
    return config
  },
  
  // Advanced Internationalization Configuration
  i18n: {
    // Core locale settings
    locales: ['en', 'hu', 'de'],
    defaultLocale: 'en',
    
    // Domain-based routing with intelligent fallbacks
    domains: [
      {
        domain: 'en.flair-plastic.hu',
        defaultLocale: 'en',
        // English domain serves only English content
      },
      {
        domain: 'hu.flair-plastic.hu', 
        defaultLocale: 'hu',
        // Hungarian domain with English fallback capability
      },
      {
        domain: 'de.flair-plastic.hu',
        defaultLocale: 'de',
        // German domain with English fallback capability
      }
    ]
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flair-plastic.hu',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'opcleansweep.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.opcleansweep.org',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize images for production
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      },
      {
        source: '/(.*).xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/capabilities/plastic-injection',
        destination: '/services/plastic-injection-moulding',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/resources/blog/:slug*',
        permanent: true,
      },
      {
        source: '/news/:slug*',
        destination: '/resources/news/:slug*',
        permanent: true,
      },
      {
        source: '/case-studies/:slug*',
        destination: '/resources/case-studies/:slug*',
        permanent: true,
      },
      // Redirect old sitemap locations
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
        permanent: true,
      },
      {
        source: '/robots.txt',
        destination: '/api/robots.txt',
        permanent: true,
      }
    ];
  },
  
  // Rewrites for SEO-friendly URLs
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml'
      },
      {
        source: '/robots.txt',
        destination: '/api/robots.txt'
      },
      {
        source: '/site.webmanifest',
        destination: '/api/site.webmanifest'
      }
    ];
  }
};

export default nextConfig;
