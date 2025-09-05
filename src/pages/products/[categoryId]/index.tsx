import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductLayout from '@/components/layouts/ProductLayout';
import CategoryHeroSection from '@/components/products/CategoryHeroSection';
import { fetchProductsByCategory, fetchCategoryDescriptions } from '@/utils/fetchProducts';
import PDFViewer from '@/components/products/PDFViewer';

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
  return {
    paths: categoryIds.map((categoryId) => ({ params: { categoryId } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params;
  const products = fetchProductsByCategory(categoryId);
  const data = fetchCategoryDescriptions();
  const categoryData = data.categories?.[categoryId] || {};
  return {
    props: {
      categoryId,
      products,
      categoryData,
    },
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, categoryData }) => {
  const { language } = useLanguage();
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
  );
};

export default CategoryPage;
