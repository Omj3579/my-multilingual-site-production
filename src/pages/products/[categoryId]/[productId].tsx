import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductLayout from '@/components/layouts/ProductLayout';
import ProductDetailHero from '@/components/products/ProductDetailHero';
import { fetchProductsByCategory, fetchProductById, fetchCategoryDescriptions, Product } from '@/utils/fetchProducts';
import PDFViewer from '@/components/products/PDFViewer';

interface ProductDetailPageProps {
  product: any;
  categoryId: string;
}

export async function getStaticPaths() {
  const { categories } = fetchCategoryDescriptions();
  const categoryIds = Object.keys(categories || {});
  let paths: { params: { categoryId: string; productId: string } }[] = [];
  for (const categoryId of categoryIds) {
    const products = fetchProductsByCategory(categoryId);
    paths = paths.concat(
      products.map((product: Product) => ({
        params: { categoryId, productId: product.id },
      }))
    );
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { categoryId: string; productId: string } }) {
  const { categoryId, productId } = params;
  const product = fetchProductById(categoryId, productId);
  return {
    props: {
      product,
      categoryId,
    },
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, similarProducts, categoryId }) => {
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
  );
}