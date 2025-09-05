import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Configure for production environment
  compress: true,
  poweredByHeader: false,
  output: 'standalone',
  i18n: {
    locales: ['en', 'hu', 'de'],
    defaultLocale: 'en',
  },
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
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: '/capabilities/plastic-injection',
        destination: '/capabilities/plastic-injection-moulding',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
