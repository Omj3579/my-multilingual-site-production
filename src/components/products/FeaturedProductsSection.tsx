import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, TrendingUp, Award, ChevronLeft, ChevronRight, Heart, Share2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: { [key: string]: string };
  desc?: { [key: string]: string };
  images?: string[];
  featured?: boolean;
  category?: string;
  rating?: number;
  badges?: string[];
}

interface FeaturedProductsSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  categoryId?: string;
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  products,
  title,
  subtitle,
  categoryId
}) => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  useEffect(() => {
    if (!isAutoPlaying || featuredProducts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProducts.length]);

  const handleLike = (productId: string) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(featuredProducts.length / 3)) % Math.ceil(featuredProducts.length / 3));
    setIsAutoPlaying(false);
  };

  if (featuredProducts.length === 0) return null;

  const defaultTitle = language === 'en' ? 'Featured Products' : 'Kiemelt Termékek';
  const defaultSubtitle = language === 'en' 
    ? 'Discover our most innovative and popular solutions' 
    : 'Fedezze fel legújabb és legnépszerűbb megoldásainkat';

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tech pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%">
            <pattern id="featured-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="0.5" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#featured-grid)" className="text-blue-600" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-200/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              {language === 'en' ? 'TRENDING NOW' : 'MOST NÉPSZERŰ'}
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title || defaultTitle}
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle || defaultSubtitle}
          </motion.p>
        </motion.div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {featuredProducts.length > 3 && (
            <>              <motion.button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-xl border border-white/50 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                aria-label={language === 'en' ? 'Previous slide' : 'Előző dia'}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-xl border border-white/50 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                aria-label={language === 'en' ? 'Next slide' : 'Következő dia'}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}

          {/* Products Grid */}
          <motion.div 
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts
                      .slice(slideIndex * 3, (slideIndex + 1) * 3)
                      .map((product, index) => (
                        <motion.div
                          key={product.id}
                          className="group relative"
                          initial={{ opacity: 0, y: 30 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          whileHover={{ y: -8 }}
                        >
                          {/* Product Card */}
                          <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-white/80">
                            {/* Featured Badge */}
                            <div className="absolute top-4 left-4 z-10 flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              {language === 'en' ? 'Featured' : 'Kiemelt'}
                            </div>

                            {/* Action Buttons */}
                            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">                              <motion.button
                                onClick={() => handleLike(product.id)}
                                className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all ${
                                  likedProducts.has(product.id) 
                                    ? 'bg-red-500 text-white' 
                                    : 'bg-white/80 text-slate-600 hover:text-red-500'
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`${language === 'en' ? 'Like product' : 'Termék kedvelése'}: ${product.name[language] || product.name.en}`}
                              >
                                <Heart className="w-4 h-4" fill={likedProducts.has(product.id) ? 'currentColor' : 'none'} />
                              </motion.button>

                              <motion.button
                                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-slate-600 hover:text-blue-500 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`${language === 'en' ? 'Share product' : 'Termék megosztása'}: ${product.name[language] || product.name.en}`}
                              >
                                <Share2 className="w-4 h-4" />
                              </motion.button>
                            </div>

                            {/* Product Image */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={product.images?.[0] || '/placeholder.svg'}
                                alt={product.name[language] || product.name.en}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                              <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
                                {product.name[language] || product.name.en}
                              </h3>
                              
                              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                {product.desc?.[language] || product.desc?.en || ''}
                              </p>

                              {/* Rating */}
                              {product.rating && (
                                <div className="flex items-center mb-4">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < product.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-slate-600 ml-2">({product.rating.toFixed(1)})</span>
                                </div>
                              )}

                              {/* Badges */}
                              {product.badges && product.badges.length > 0 && (
                                <div className="flex flex-wrap gap-1 mb-4">
                                  {product.badges.slice(0, 2).map((badge, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-md"
                                    >
                                      {badge}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* CTA Button */}
                              <Link
                                href={`/products/${categoryId || product.category}/${product.id}`}
                                className="group/btn flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium transition-all hover:from-blue-600 hover:to-purple-600 hover:shadow-lg"
                              >
                                <span>{language === 'en' ? 'View Details' : 'Részletek'}</span>
                                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Slide Indicators */}
          {featuredProducts.length > 3 && (
            <motion.div
              className="flex justify-center mt-8 gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >              {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-blue-500 scale-110'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`${language === 'en' ? 'Go to slide' : 'Ugrás a'} ${index + 1}${language === 'hu' ? '. diára' : ''}`}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            href={categoryId ? `/products/${categoryId}` : '/products'}
            className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl font-semibold border border-white/50 hover:bg-white hover:shadow-lg transition-all"
          >
            <Award className="w-5 h-5 mr-2" />
            {language === 'en' ? 'View All Products' : 'Összes Termék Megtekintése'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
