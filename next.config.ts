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
    scrollRestoration: true,
    optimizeCss: true,
    gzipSize: true
  },
  
  // Advanced SEO Configuration for Plastic Injection Moulding Services
  generateEtags: false, // Better for caching
  
  // Enable trailing slashes for better SEO consistency
  trailingSlash: false,
  
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
  
  // Image optimization for manufacturing services
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
    // Optimized for manufacturing service images
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    minimumCacheTTL: 31536000, // 1 year for service images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers for security and SEO optimization
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
          },
          // Additional SEO and performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
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
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      },
      // Service page specific headers for better SEO
      {
        source: '/services/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1'
          }
        ]
      },
      // Manufacturing service images optimization
      {
        source: '/images/services/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO - Enhanced for manufacturing services
  async redirects() {
    return [
      // Legacy service page redirects
      {
        source: '/capabilities/plastic-injection',
        destination: '/services/plastic-injection-moulding',
        permanent: true,
      },
      {
        source: '/capabilities/injection-molding',
        destination: '/services/plastic-injection-moulding', 
        permanent: true,
      },
      {
        source: '/capabilities/imd',
        destination: '/services/in-mould-decoration',
        permanent: true,
      },
      {
        source: '/capabilities/iml',
        destination: '/services/in-mould-labelling',
        permanent: true,
      },
      // Content redirects
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
      // Old service structure redirects
      {
        source: '/manufacturing/:slug*',
        destination: '/services/:slug*',
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
      },
      // Service-specific SEO redirects
      {
        source: '/plastic-injection',
        destination: '/services/plastic-injection-moulding',
        permanent: true,
      },
      {
        source: '/contract-manufacturing-services',
        destination: '/services/contract-manufacturing',
        permanent: true,
      }
    ];
  },
  
  // Rewrites for SEO-friendly URLs and manufacturing services
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
      },
      // Service-specific sitemap rewrites
      {
        source: '/services-sitemap.xml',
        destination: '/api/services-sitemap.xml'
      },
      {
        source: '/manufacturing-sitemap.xml', 
        destination: '/api/services-sitemap.xml'
      },
      // Professional SEO-friendly service URLs
      {
        source: '/services/precision-plastic-injection-moulding',
        destination: '/services/plastic-injection-moulding'
      },
      {
        source: '/services/advanced-in-mould-labelling-iml',
        destination: '/services/in-mould-labelling'
      },
      {
        source: '/services/luxury-in-mould-decoration-imd', 
        destination: '/services/in-mould-decoration'
      },
      {
        source: '/services/professional-contract-manufacturing',
        destination: '/services/contract-manufacturing'
      },
      {
        source: '/services/advanced-surface-finishing-solutions',
        destination: '/services/surface-finishing'
      },
      {
        source: '/services/professional-assembly-integration',
        destination: '/services/assembly'
      },
      // Legacy SEO redirects maintained for compatibility
      {
        source: '/injection-molding',
        destination: '/services/plastic-injection-moulding'
      },
      {
        source: '/imd-services',
        destination: '/services/in-mould-decoration'
      },
      {
        source: '/iml-services', 
        destination: '/services/in-mould-labelling'
      }
    ];
  }
};

export default nextConfig;
