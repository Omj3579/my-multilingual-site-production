import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductLayout from '@/components/layouts/ProductLayout';
import SimpleGrid from '@/components/products/SimpleGrid';
import ProductsHeroSection from '@/components/products/ProductsHeroSection';
import { fetchCategoryDescriptions, CategoryDescriptions } from '@/utils/fetchProducts';

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
  const { language } = useLanguage();
  
  // Debug: log categories to check if they're loaded
  if (typeof window !== "undefined") {
    // Only log on client
    // @ts-expect-error - Adding categories to window for debugging purposes
    window.__categories = categories;
  }

  return (
    <ProductLayout>      {/* Sophisticated Hero Section */}      <ProductsHeroSection
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
                {language === 'en' ? 'Premium Manufacturing Categories' : 'Prémium Gyártási Kategóriák'}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              {language === 'en' ? 'Precision Crafted' : 'Precíziós Kidolgozású'}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Product Collections' : 'Termékkollekcíók'}
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Explore our expertly engineered product categories, each designed to meet the highest standards of quality, durability, and performance in modern manufacturing.'
                : 'Fedezze fel szakértői módon megtervezett termékkategóriáinkat, amelyek mindegyike a minőség, tartósság és teljesítmény legmagasabb standardjainak megfelelően készült a modern gyártásban.'}
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-8 bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl px-8 py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">{Object.keys(categories).length}</div>
                  <div className="text-sm text-slate-600">{language === 'en' ? 'Categories' : 'Kategória'}</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">500+</div>
                  <div className="text-sm text-slate-600">{language === 'en' ? 'Products' : 'Termék'}</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">15+</div>
                  <div className="text-sm text-slate-600">{language === 'en' ? 'Years' : 'Év'}</div>
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
                <h3 className="text-3xl font-bold mb-4">
                  {language === 'en' ? 'Need Custom Solutions?' : 'Egyedi Megoldásokra Van Szüksége?'}
                </h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  {language === 'en' 
                    ? 'Our expert team specializes in creating tailored manufacturing solutions for your unique requirements.'
                    : 'Szakértő csapatunk egyedi gyártási megoldások létrehozására specializálódott az Ön egyedi igényeihez.'}
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {language === 'en' ? 'Contact Our Experts' : 'Kapcsolatfelvétel Szakértőinkkel'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Products;