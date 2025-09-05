import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/utils/fetchProducts';

interface EnhancedProductCardProps {
  product: Product;
  categoryId: string;
  index: number;
}

const EnhancedProductCard: React.FC<EnhancedProductCardProps> = ({ 
  product, 
  categoryId, 
  index 
}) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productName = product.name?.[language] || product.name?.en || '';
  const productDesc = product.desc?.[language] || product.desc?.en || '';
  const images = product.images || ['/placeholder.svg'];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, language);
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-gray-200">
        
        {/* Product Badge */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
            >
              {product.badges[0]}
            </motion.div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 z-10">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-2"
              >                <motion.button
                  onClick={handleToggleLike}
                  className={`p-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200 ${
                    isLiked 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'bg-white/90 text-gray-700 hover:bg-white hover:text-red-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
                  title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>
                
                <motion.button
                  className="p-2 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Share product"
                  title="Share product"
                >
                  <Share2 className="h-4 w-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Image */}
        <Link href={`/products/${categoryId}/${product.id}`}>
          <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <motion.img
              src={images[currentImageIndex]}
              alt={productName}
              className="w-full h-full object-contain p-4"
              variants={imageVariants}
              onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
            />
            
            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentImageIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        idx === currentImageIndex 
                          ? 'bg-blue-500' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                      title={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quick View Overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center"
                >
                  <motion.div
                    className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Eye className="h-4 w-4" />
                      {language === 'en' ? 'Quick View' : 'Gyors megtekintés'}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-6">
          {/* Product ID */}
          <div className="text-xs font-mono text-blue-600 mb-2 tracking-wider">
            {product.id}
          </div>

          {/* Product Name */}
          <Link href={`/products/${categoryId}/${product.id}`}>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
              {productName}
            </h3>
          </Link>

          {/* Product Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {productDesc}
          </p>

          {/* Product Specs Preview */}
          {product.specs && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.specs.material && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                  {product.specs.material}
                </span>
              )}
              {product.specs.size && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                  {product.specs.size}
                </span>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link 
              href={`/products/${categoryId}/${product.id}`}
              className="flex-1"
            >
              <motion.button
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="h-4 w-4" />
                {language === 'en' ? 'View Details' : 'Részletek'}
              </motion.button>
            </Link>

            <motion.button
              onClick={handleQuickAdd}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default EnhancedProductCard;
