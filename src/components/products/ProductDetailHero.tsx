import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Star, Heart, Share2, Download, ChevronLeft, ChevronRight, Zap, Award, Shield, Truck, Plus, Minus, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/utils/fetchProducts';

interface ProductDetailHeroProps {
  product: Product;
  categoryId: string;
  onQuantityChange?: (quantity: number) => void;
  onAddToCart?: () => void;
  heroImage?: string;
}

const ProductDetailHero: React.FC<ProductDetailHeroProps> = ({
  product,
  categoryId,
  onQuantityChange,
  onAddToCart,
  heroImage
}) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const images = product.images || ['/placeholder.svg'];
  const keyFeatures = product.keyFeatures?.[language] || product.keyFeatures?.en || [];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, language);
    onAddToCart?.();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const calcTransform = (factor = 1) => {
    return `perspective(1000px) rotateX(${mousePosition.y * 2 * factor}deg) rotateY(${mousePosition.x * -2 * factor}deg)`;
  };
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with optional hero image */}
      {heroImage ? (
        <div className="absolute inset-0">
          <Image 
            src={heroImage}
            alt="Product background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/80" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-60 -right-60 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 blur-3xl"
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

        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <pattern id="detail-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#detail-grid)" className="text-slate-400" />
          </svg>
        </div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 py-8 md:py-16"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center mb-8 text-sm text-slate-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="hover:text-blue-600 transition-colors">
            {language === 'en' ? 'Home' : 'Kezdőlap'}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/products" className="hover:text-blue-600 transition-colors">
            {language === 'en' ? 'Products' : 'Termékek'}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href={`/products/${categoryId}`} className="hover:text-blue-600 transition-colors">
            {categoryId}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-800 font-medium">
            {product.name?.[language] || product.name?.en}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Enhanced Image Gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}          >
            {/* Main Image Container */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl overflow-hidden mb-6">
              <div className="relative h-96 md:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    className="relative w-full h-full p-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt={product.name?.[language] || product.name?.en || 'Product image'}
                      fill
                      className="object-contain"
                      priority={currentImageIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </>
                )}

                {/* Premium Badge */}
                <div className="absolute top-6 left-6 flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Premium' : 'Prémium'}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <motion.button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-12 h-12 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-slate-600 hover:text-red-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
                  </motion.button>

                  <motion.button
                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-slate-600 hover:text-blue-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-slate-600 hover:text-green-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-blue-500 ring-2 ring-blue-500/20' 
                        : 'border-white/50 hover:border-blue-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`${product.name?.[language] || product.name?.en} ${index + 1}`}
                      className="w-full h-full object-contain bg-white/60"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Product Title & Rating */}
            <div>
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight"
                style={{ transform: calcTransform(0.05) }}
              >
                {product.name?.[language] || product.name?.en}
              </motion.h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-slate-600 ml-2">(4.8)</span>
                </div>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-green-600 font-medium">
                  {language === 'en' ? 'In Stock' : 'Raktáron'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <p className="text-lg text-slate-700 leading-relaxed">
                {product.longDesc?.[language] || product.longDesc?.en || product.desc?.[language] || product.desc?.en}
              </p>
            </div>

            {/* Key Features */}
            {keyFeatures.length > 0 && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  {language === 'en' ? 'Key Features' : 'Főbb Jellemzők'}
                </h3>
                <div className="space-y-3">
                  {keyFeatures.slice(0, 4).map((feature, idx) => {
                    const [label, ...rest] = feature.split(':');
                    const value = rest.join(':').trim();
                    return (                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors cursor-pointer"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                        </div>
                        <div>
                          <span className="font-medium text-slate-800">{label}</span>
                          {value && <span className="text-blue-600 font-semibold">: {value}</span>}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: language === 'en' ? 'Quality Assured' : 'Minőségbiztosítás' },
                { icon: Award, label: language === 'en' ? 'ISO Certified' : 'ISO Tanúsított' },
                { icon: Truck, label: language === 'en' ? 'Fast Delivery' : 'Gyors Szállítás' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 text-center"
                  whileHover={{ y: -2, scale: 1.02 }}
                  style={{ transform: calcTransform(0.1) }}
                >
                  <badge.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-slate-700">{badge.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {language === 'en' ? 'Quantity' : 'Mennyiség'}
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-white/80">
                    <motion.button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-4 py-3 text-slate-600 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="px-6 py-3 font-semibold text-slate-800 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <motion.button
                      onClick={() => handleQuantityChange(1)}
                      className="px-4 py-3 text-slate-600 hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ transform: calcTransform(0.05) }}
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                {language === 'en' ? 'Request Quote' : 'Árajánlat Kérése'}
              </motion.button>

              <p className="text-sm text-slate-600 text-center mt-3">
                {language === 'en' ? 'Free consultation included' : 'Ingyenes konzultáció mellékelve'}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDetailHero;
