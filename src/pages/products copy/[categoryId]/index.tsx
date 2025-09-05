import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductLayout from '@/components/layouts/ProductLayout';
import AdvancedProductGrid from '@/components/products/AdvancedProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import CategoryHeroSection from '@/components/products/CategoryHeroSection';
import { fetchProductsByCategory, fetchCategoryDescriptions, Product } from '@/utils/fetchProducts';

interface CategoryData {
  labels?: Record<string, string>;
  content?: Record<string, { description: string }>;
  image?: string;
}

interface CategoryPageProps {
  categoryId: string;
  products: Product[];
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

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, products, categoryData }) => {
  const { language } = useLanguage();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const label = categoryData.labels?.[language] || categoryData.labels?.en || categoryId;  const description =
    categoryData.content?.[language]?.description ||
    categoryData.content?.en?.description ||
    'Discover our premium products in this category.';

  // Define category-specific hero images
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

  return (
    <ProductLayout>
      {/* Sophisticated Category Hero Section */}
      <CategoryHeroSection 
        categoryId={categoryId}
        categoryName={label}
        categoryDescription={description}
        productCount={filteredProducts.length}
        backgroundImage={getCategoryHeroImage(categoryId)}
      />

      {/* Enhanced Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-8">
          <ProductFilters
            products={products}
            onFilteredProducts={setFilteredProducts}
          />        </div>

        {/* Advanced Products Grid */}
        <AdvancedProductGrid 
          products={filteredProducts} 
          categoryId={categoryId} 
        />
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">
              {language === 'en' ? 'No products found' : 'Nem találhatók termékek'}
            </div>
            <p className="text-slate-500">
              {language === 'en' 
                ? 'Try adjusting your filters or search criteria'
                : 'Próbálja módosítani a szűrőket vagy a keresési feltételeket'}
            </p>
          </div>
        )}
      </div>
    </ProductLayout>
  );
};

export default CategoryPage;
