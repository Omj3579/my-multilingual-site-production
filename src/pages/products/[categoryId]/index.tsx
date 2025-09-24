import React from 'react';
import Head from 'next/head';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductLayout from '@/components/layouts/ProductLayout';
import CategoryHeroSection from '@/components/products/CategoryHeroSection';
import { fetchProductsByCategory, fetchCategoryDescriptions } from '@/utils/fetchProducts';
import PDFViewer from '@/components/products/PDFViewer';
import { PRODUCT_CATEGORIES_SEO, generateCategoryStructuredData } from '@/lib/seo/productCategoriesSEO';

interface CategoryData {
  labels?: Record<string, string>;
  content?: Record<string, { description: string }>;
  image?: string;
}

interface CategoryPageProps {
  categoryId: string;
  categoryData: CategoryData;
}

export async function getStaticPaths() {
  const data = fetchCategoryDescriptions();
  const categoryIds = Object.keys(data.categories || {});
  const locales = ['en', 'hu', 'de']; // All supported locales
  
  // Generate paths for all locales and categories
  const paths = locales.flatMap((locale) =>
    categoryIds.map((categoryId) => ({
      params: { categoryId },
      locale,
    }))
  );
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: { params: { categoryId: string }, locale: string }) {
  const { categoryId } = params;
  const products = fetchProductsByCategory(categoryId);
  const data = fetchCategoryDescriptions();
  const categoryData = data.categories?.[categoryId] || {};
  
  return {
    props: {
      categoryId,
      products,
      categoryData,
      locale, // Pass locale to component if needed
    },
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, categoryData }) => {
  const { language } = useLanguage();
  
  // Get SEO data for this category
  const categorySEO = PRODUCT_CATEGORIES_SEO[categoryId];
  const structuredData = generateCategoryStructuredData(categoryId, language);
  
  // PDF file mapping
  const pdfCatalogs: Record<string, string> = {
    'active': '/api/catalogs/active.pdf',
    'garden': '/api/catalogs/garden.pdf',
    'home': '/api/catalogs/Home.pdf',
    'kids': '/api/catalogs/kids.pdf',
    'kitchen': '/api/catalogs/kitchen.pdf',
    'pallets': '/api/catalogs/pallets.pdf',
  };
  
  const label = categoryData.labels?.[language] || categoryData.labels?.en || categoryId;
  const description = categoryData.content?.[language]?.description || categoryData.content?.en?.description || '';
  
  // SEO meta data
  const seoTitle = categorySEO?.title[language] || categorySEO?.title.en || `${label} | Flair Plastic Manufacturing`;
  const seoDescription = categorySEO?.description[language] || categorySEO?.description.en || description;
  const seoKeywords = categorySEO?.keywords[language] || categorySEO?.keywords.en || [];
  
  const getCategoryHeroImage = (category: string): string => {
    const categoryImages = {
      'home': '/products/categories/home.webp',
      'kitchen': '/products/categories/kitchen.webp',
      'garden': '/products/categories/garden.webp',
      'kids': '/products/categories/kids.webp',
      'lifestyle': '/products/categories/lifestyle.webp'
    };
    return categoryImages[category as keyof typeof categoryImages] || categoryData.image || '/products/categories/hero/default-category.jpg';
  };
  // PDF file for this category
  const pdfFile = pdfCatalogs[categoryId];
  
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={categorySEO?.openGraph.title[language] || categorySEO?.openGraph.title.en || seoTitle} />
        <meta property="og:description" content={categorySEO?.openGraph.description[language] || categorySEO?.openGraph.description.en || seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://flair-plastic.hu/products/${categoryId}`} />
        {categorySEO?.openGraph.images[0] && (
          <>
            <meta property="og:image" content={`https://flair-plastic.hu${categorySEO.openGraph.images[0].url}`} />
            <meta property="og:image:width" content={categorySEO.openGraph.images[0].width.toString()} />
            <meta property="og:image:height" content={categorySEO.openGraph.images[0].height.toString()} />
            <meta property="og:image:alt" content={categorySEO.openGraph.images[0].alt[language] || categorySEO.openGraph.images[0].alt.en} />
          </>
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={categorySEO?.openGraph.title[language] || categorySEO?.openGraph.title.en || seoTitle} />
        <meta name="twitter:description" content={categorySEO?.openGraph.description[language] || categorySEO?.openGraph.description.en || seoDescription} />
        {categorySEO?.openGraph.images[0] && (
          <meta name="twitter:image" content={`https://flair-plastic.hu${categorySEO.openGraph.images[0].url}`} />
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://flair-plastic.hu/products/${categoryId}`} />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="en" href={`https://flair-plastic.hu/en/products/${categoryId}`} />
        <link rel="alternate" hrefLang="hu" href={`https://flair-plastic.hu/hu/products/${categoryId}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://flair-plastic.hu/products/${categoryId}`} />
        
        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
      </Head>
      
      <ProductLayout>
        {/* Category Hero Section remains */}
        <CategoryHeroSection 
          categoryId={categoryId}
          categoryName={label}
          categoryDescription={description}
          productCount={undefined}
          backgroundImage={getCategoryHeroImage(categoryId)}
        />
        {/* PDF Viewer Section */}
        <div className="container mx-auto px-4 py-8">
          {pdfFile ? (
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                  <div className="overflow-hidden">
                    {/* PDFViewer component */}
                    <React.Suspense fallback={<div>Loading PDF...</div>}>
                      <PDFViewer fileUrl={pdfFile} width="98%" height="140vh" />
                    </React.Suspense>
                  </div>
                </div>
          ) : (
            <div className="text-center text-slate-500 py-12">No catalog available for this category.</div>
          )}
        </div>
      </ProductLayout>
    </>
  );
};

export default CategoryPage;
