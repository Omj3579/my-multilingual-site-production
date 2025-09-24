import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductLayout from '@/components/layouts/ProductLayout';
import ProductDetailHero from '@/components/products/ProductDetailHero';
import { fetchProductsByCategory, fetchProductById, fetchCategoryDescriptions, Product } from '@/utils/fetchProducts';
import PDFViewer from '@/components/products/PDFViewer';
import { PRODUCT_SEO_TEMPLATES } from '@/lib/seo/productSEO';
import { PRODUCT_CATEGORIES_SEO } from '@/lib/seo/productCategoriesSEO';

interface ProductDetailPageProps {
  product: any;
  categoryId: string;
  categoryData: any;
}

export async function getStaticPaths() {
  const { categories } = fetchCategoryDescriptions();
  const categoryIds = Object.keys(categories || {});
  const locales = ['en', 'hu', 'de']; // All supported locales
  
  let paths: { params: { categoryId: string; productId: string }, locale: string }[] = [];
  
  for (const categoryId of categoryIds) {
    const products = fetchProductsByCategory(categoryId);
    for (const locale of locales) {
      paths = paths.concat(
        products.map((product: Product) => ({
          params: { categoryId, productId: product.id },
          locale,
        }))
      );
    }
  }
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }: { params: { categoryId: string; productId: string }, locale: string }) {
  const { categoryId, productId } = params;
  const product = fetchProductById(categoryId, productId);
  const data = fetchCategoryDescriptions();
  const categoryData = data.categories?.[categoryId] || {};
  
  return {
    props: {
      product,
      categoryId,
      categoryData,
      locale, // Pass locale to component if needed
    },
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, categoryId, categoryData }) => {
  const { language } = useLanguage();
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  // Get category name for SEO
  const categoryName = categoryData?.labels?.[language] || categoryData?.labels?.en || categoryId;
  
  // Generate SEO data
  const seoTitle = PRODUCT_SEO_TEMPLATES.generateTitle(
    product.name?.[language] || product.name?.en || 'Product',
    categoryName,
    language
  );
  const seoDescription = PRODUCT_SEO_TEMPLATES.generateDescription(product, categoryName, language);
  const seoKeywords = PRODUCT_SEO_TEMPLATES.generateKeywords(product, categoryName, language);
  const structuredData = PRODUCT_SEO_TEMPLATES.generateStructuredData(product, categoryName, categoryId, language);
  
  // PDF file mapping
  const pdfCatalogs: Record<string, string> = {
    'active': '/api/catalogs/active.pdf',
    'garden': '/api/catalogs/garden.pdf',
    'home': '/api/catalogs/Home.pdf',
    'kids': '/api/catalogs/kids.pdf',
    'kitchen': '/api/catalogs/kitchen.pdf',
    'pallets': '/api/catalogs/pallets.pdf',
  };
  const getProductHeroImage = (category: string): string => {
    const productHeroImages = {
      'home': '/products/categories/hero/home-product-detail.jpg',
      'kitchen': '/products/categories/hero/kitchen-product-detail.jpg',
      'garden': '/products/categories/hero/garden-product-detail.jpg',
      'kids': '/products/categories/hero/kids-product-detail.jpg',
      'lifestyle': '/products/categories/hero/lifestyle-product-detail.jpg'
    };
    return productHeroImages[category as keyof typeof productHeroImages] || '/products/categories/hero/default-product-detail.jpg';
  };
  const pdfFile = pdfCatalogs[categoryId];
  if (!product) {
    return (
      <ProductLayout>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">{language === 'en' ? 'Loading product...' : 'Termék betöltése...'}</p>
        </div>
      </ProductLayout>
    );
  }
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://flair-plastic.hu/products/${categoryId}/${product.id}`} />
        {product.images?.[0] && (
          <>
            <meta property="og:image" content={`https://flair-plastic.hu${product.images[0]}`} />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image:alt" content={product.name?.[language] || product.name?.en || 'Flair Plastic Product'} />
          </>
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {product.images?.[0] && (
          <meta name="twitter:image" content={`https://flair-plastic.hu${product.images[0]}`} />
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://flair-plastic.hu/products/${categoryId}/${product.id}`} />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="en" href={`https://flair-plastic.hu/en/products/${categoryId}/${product.id}`} />
        <link rel="alternate" hrefLang="hu" href={`https://flair-plastic.hu/hu/products/${categoryId}/${product.id}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://flair-plastic.hu/products/${categoryId}/${product.id}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      <ProductLayout>
        {/* Product Detail Hero Section remains */}
        <ProductDetailHero 
          product={product}
          categoryId={categoryId}
          heroImage={getProductHeroImage(categoryId)}
        />
        {/* PDF Viewer Section */}
        <div className="container mx-auto px-4 py-8">
          {pdfFile ? (
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-2xl font-bold mb-4 text-slate-800">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Catalog</h2>
              <div className="mb-4 text-slate-600">{language === 'en' ? 'Scroll and browse the full catalog below.' : 'Görgesse és böngéssze a teljes katalógust lent.'}</div>
              <div className="overflow-hidden">
                <PDFViewer fileUrl={pdfFile} width="98%" height="140vh" />
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-500 py-12">No catalog available for this category.</div>
          )}
        </div>
      </ProductLayout>
    </>
  );
}

export default ProductDetailPage;