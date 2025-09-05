import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductLayout from '@/components/layouts/ProductLayout';
import ProductDetailHero from '@/components/products/ProductDetailHero';
import { fetchProductsByCategory, fetchProductById, fetchCategoryDescriptions, Product } from '@/utils/fetchProducts';

interface ProductDetailPageProps {
  product: Product;
  similarProducts: Product[];
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
  const similarProducts = fetchProductsByCategory(categoryId).filter((p: Product) => p.id !== productId);
  return {
    props: {
      product,
      similarProducts,
      categoryId,
    },
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, similarProducts, categoryId }) => {
  const router = useRouter();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Define category-specific hero images for product detail pages
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

  // Carousel auto-scroll
  useEffect(() => {
    const container = document.getElementById('similar-products');
    if (!container) return;
    const scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, [similarProducts]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, language);
    router.push("/products/cart");
  };

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
    <ProductLayout>      {/* Modern Product Detail Hero Section */}
      <ProductDetailHero 
        product={product}
        categoryId={categoryId}
        onQuantityChange={handleQuantityChange}
        onAddToCart={handleAddToCart}
        heroImage={getProductHeroImage(categoryId)}
      />

      {/* Enhanced Product Information Sections */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Technical Specifications */}
          {(product.keyFeatures?.[language] || product.keyFeatures?.en) && 
           (product.keyFeatures?.[language] || product.keyFeatures?.en)!.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-4"></div>
                {language === 'en' ? 'Technical Specifications' : 'Műszaki specifikációk'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(product.keyFeatures?.[language] || product.keyFeatures?.en || []).map((feature: string, idx: number) => {
                  const [label, ...rest] = feature.split(':');
                  const value = rest.join(':').trim();
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{label}</h4>
                        {value && <p className="text-blue-600 font-medium">{value}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Similar Products Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {language === 'en' ? 'Similar Products' : 'Hasonló termékek'}
            </h2>
            <p className="text-lg text-slate-600">
              {language === 'en' 
                ? 'Explore more products from our collection'
                : 'Fedezzen fel több terméket a kollekciónkból'}
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg p-3 z-10 hover:bg-white transition-colors"
              aria-label={language === 'en' ? 'Previous products' : 'Előző termékek'}
              onClick={() => {
                const container = document.getElementById('similar-products');
                container?.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
              }}
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg p-3 z-10 hover:bg-white transition-colors"
              aria-label={language === 'en' ? 'Next products' : 'Következő termékek'}
              onClick={() => {
                const container = document.getElementById('similar-products');
                container?.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
              }}
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>            {/* Similar Products Carousel */}
            <div
              id="similar-products"
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {similarProducts.map((similar: Product) => (
                <Link 
                  key={similar.id} 
                  href={`/products/${categoryId}/${similar.id}`}
                  className="flex-shrink-0 w-80 group"
                >
                  <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 p-4">
                      <img
                        src={similar.images?.[0] || '/placeholder.svg'}
                        alt={similar.name?.[language] || similar.name?.en}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">
                        {similar.name?.[language] || similar.name?.en}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3">
                        {similar.desc?.[language] || similar.desc?.en || ''}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>    </ProductLayout>
  );
};

export default ProductDetailPage;