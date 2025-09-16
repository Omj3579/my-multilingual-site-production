import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductLayout from '@/components/layouts/ProductLayout';
import SimpleGrid from '@/components/products/SimpleGrid';
import ProductsHeroSection from '@/components/products/ProductsHeroSection';
import { fetchCategoryDescriptions, CategoryDescriptions } from '@/utils/fetchProducts';
import { PRODUCTS_MAIN_SEO } from '@/lib/seo/productsMainSEO';

interface ProductsPageProps {
  categories: CategoryDescriptions;
  productsPageContent: {
    labels?: Record<string, string>;
    content?: Record<string, { description: string }>;
  };
}

export async function getStaticProps() {
  const data = fetchCategoryDescriptions();
  return {
    props: {
      categories: data.categories || {},
      productsPageContent: data.productsPage || {},
    },
  };
}

const Products: React.FC<ProductsPageProps> = ({ categories, productsPageContent }) => {
  const { language, translations } = useLanguage();

  // Debug: log categories to check if they're loaded
  if (typeof window !== "undefined") {
    // Only log on client
    // @ts-expect-error - Adding categories to window for debugging purposes
    window.__categories = categories;
  }

  // Get SEO data for current language
  const seoData = PRODUCTS_MAIN_SEO[language as keyof typeof PRODUCTS_MAIN_SEO] || PRODUCTS_MAIN_SEO.en;

  // Helper for translation fallback
  const t = (key: string) => translations[key]?.[language] || translations[key]?.en || key;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={seoData.openGraph.type} />
        <meta property="og:url" content={seoData.openGraph.url} />
        <meta property="og:title" content={seoData.openGraph.title} />
        <meta property="og:description" content={seoData.openGraph.description} />
        <meta property="og:image" content={seoData.openGraph.image} />
        <meta property="og:image:alt" content={seoData.openGraph.imageAlt} />
        <meta property="og:site_name" content="Flair Plastic" />
        <meta property="og:locale" content={language === 'hu' ? 'hu_HU' : 'en_US'} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.openGraph.url} />
        <meta property="twitter:title" content={seoData.openGraph.title} />
        <meta property="twitter:description" content={seoData.openGraph.description} />
        <meta property="twitter:image" content={seoData.openGraph.image} />
        <meta property="twitter:image:alt" content={seoData.openGraph.imageAlt} />
        
        {/* Alternate Language Links */}
        <link rel="alternate" hrefLang="en" href="https://flairplastic.hu/products" />
        <link rel="alternate" hrefLang="hu" href="https://flairplastic.hu/hu/products" />
        <link rel="alternate" hrefLang="x-default" href="https://flairplastic.hu/products" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Flair Plastic" />
        <meta name="publisher" content="Flair Plastic" />
        <meta name="language" content={language} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData),
          }}
        />
      </Head>
      
      <ProductLayout>
        {/* Sophisticated Hero Section */}
        <ProductsHeroSection
          title={productsPageContent?.labels?.[language] || productsPageContent?.labels?.en || undefined}
          description={productsPageContent?.content?.[language]?.description || productsPageContent?.content?.en?.description || undefined}
          heroImage="/products/categories/hero/Products-hero.png"
        />

      {/* Premium Categories Section */}
      <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-400/5 to-transparent rounded-full"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <pattern id="premium-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.4" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#premium-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-600">
                {t('products.premiumCategories')}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              {t('products.precisionCrafted')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('products.productCollections')}
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('products.exploreCategories')}
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-8 bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl px-8 py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">{Object.keys(categories).length}</div>
                  <div className="text-sm text-slate-600">{t('products.categories')}</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">1000+</div>
                  <div className="text-sm text-slate-600">{t('products.products')}</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">30+</div>
                  <div className="text-sm text-slate-600">{t('products.years')}</div>
                </div>
              </div>
            </div>
          </div>
            {/* Simple Clean Grid */}
          {Object.keys(categories).length === 0 ? (
            null
          ) : (
            <SimpleGrid categories={categories} />
          )}

          {/* Premium CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="1" fill="currentColor" />
                    <circle cx="10" cy="10" r="0.5" fill="currentColor" />
                    <circle cx="50" cy="10" r="0.5" fill="currentColor" />
                    <circle cx="10" cy="50" r="0.5" fill="currentColor" />
                    <circle cx="50" cy="50" r="0.5" fill="currentColor" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-sm">
                  {t('products.needCustomSolutions')}
                </h3>
                <p className="text-lg md:text-2xl opacity-95 mb-10 max-w-2xl mx-auto font-medium">
                  {t('products.customSolutionsDesc')}
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 inline-block"
                >
                  {t('products.contactExperts')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
    </>
  );
};

export default Products;