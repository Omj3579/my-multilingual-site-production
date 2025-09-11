import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Flair Plastic Manufacturing',
  defaultTitle: 'Flair Plastic - Advanced Injection Molding & Contract Manufacturing',
  description: 'Leading plastic injection molding and contract manufacturing company specializing in sustainable manufacturing solutions with global reach and local expertise.',
  canonical: 'https://flairplastic.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flairplastic.com',
    siteName: 'Flair Plastic Manufacturing',
    title: 'Flair Plastic - Advanced Injection Molding & Contract Manufacturing',
    description: 'Leading plastic injection molding and contract manufacturing company specializing in sustainable manufacturing solutions with global reach and local expertise.',
    images: [
      {
        url: 'https://flairplastic.com/images/og-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Flair Plastic Manufacturing - Advanced Injection Molding Solutions',
        type: 'image/jpeg',
      },
      {
        url: 'https://flairplastic.com/images/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Flair Plastic Manufacturing Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@flairplastic',
    site: '@flairplastic',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    },
    {
      name: 'author',
      content: 'Flair Plastic Manufacturing',
    },
    {
      name: 'publisher',
      content: 'Flair Plastic Manufacturing',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'theme-color',
      content: '#3B82F6',
    },
    {
      name: 'msapplication-TileColor',
      content: '#3B82F6',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  languageAlternates: [
    {
      hrefLang: 'en',
      href: 'https://flairplastic.com/en',
    },
    {
      hrefLang: 'hu',
      href: 'https://flairplastic.com/hu',
    },
    {
      hrefLang: 'x-default',
      href: 'https://flairplastic.com',
    },
  ],
};

export default config;
