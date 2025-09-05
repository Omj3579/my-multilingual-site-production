import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Package, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryData {
  labels?: Record<string, string>;
  content?: Record<string, { description: string }>;
  image?: string;
  stats?: {
    productCount?: number;
    trending?: boolean;
    featured?: boolean;
  };
}

interface EnhancedCategoryGridProps {
  categories: Record<string, CategoryData>;
}

const EnhancedCategoryGrid: React.FC<EnhancedCategoryGridProps> = ({ categories }) => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0
    },
    hover: { 
      scale: 1.03,
      y: -8,
      rotateX: 5,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    rest: { 
      scale: 1,
      filter: "brightness(1) saturate(1)"
    },
    hover: { 
      scale: 1.1,
      filter: "brightness(1.1) saturate(1.2)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };  // Get categories as array for advanced grid layouts
  const categoryEntries = Object.entries(categories);
  const featuredCategory = categoryEntries[0];
  const regularCategories = categoryEntries.slice(1);

  return (
    <div className="space-y-20">
      {/* Advanced Masonry-Style Grid with Featured Hero */}
      <div className="relative">
        {/* Hero Featured Category - Full Width */}
        {featuredCategory && (
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>            <motion.div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
              style={{ 
                backgroundImage: `url(${featuredCategory[1].image || '/placeholder.svg'})` 
              }}
            />
            
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Award className="h-4 w-4" />
                    {language === 'en' ? 'Premium Collection' : 'Prémium Kollekció'}
                  </motion.div>
                  
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {featuredCategory[1].labels?.[language] || featuredCategory[1].labels?.en || featuredCategory[0]}
                  </motion.h2>
                  
                  <motion.p
                    className="text-xl text-white/90 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {featuredCategory[1].content?.[language]?.description || featuredCategory[1].content?.en?.description || ''}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link href={`/products/${featuredCategory[0]}`}>
                      <motion.button
                        className="bg-white text-slate-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-3"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {language === 'en' ? 'Explore Collection' : 'Kollekció Felfedezése'}
                        <ArrowRight className="h-5 w-5" />                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}        {/* Professional Mosaic Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {regularCategories.map(([key, category], index) => {
            const image = category.image || '/placeholder.svg';
            const label = category.labels?.[language] || category.labels?.en || key;
            const description = category.content?.[language]?.description || category.content?.en?.description || '';
            
            // Professional mosaic layout patterns - structured and intentional
            const getMosaicLayout = (index: number) => {
              const patterns = [
                { cols: "md:col-span-2 lg:col-span-3", height: "h-[500px]" }, // Large featured
                { cols: "md:col-span-2 lg:col-span-2", height: "h-[240px]" }, // Wide short
                { cols: "md:col-span-2 lg:col-span-1", height: "h-[240px]" }, // Square short
                { cols: "md:col-span-2 lg:col-span-2", height: "h-[500px]" }, // Square large
                { cols: "md:col-span-2 lg:col-span-2", height: "h-[240px]" }, // Wide short
                { cols: "md:col-span-2 lg:col-span-2", height: "h-[240px]" }, // Wide short
              ];
              return patterns[index % patterns.length];
            };

            const layout = getMosaicLayout(index);
            
            return (
              <motion.div
                key={key}
                className={`group relative overflow-hidden ${layout.cols} ${layout.height}`}
                variants={itemVariants}
              >                <Link href={`/products/${key}`}>
                  <motion.div
                    className="relative w-full h-full bg-white rounded-2xl overflow-hidden cursor-pointer transform-gpu"
                    variants={hoverVariants}
                    initial="rest"
                    whileHover="hover"
                    style={{ willChange: 'transform' }}
                  >
                    {/* Professional Card Container with proper layering */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      {/* Background Image Layer - Z-Index 10 */}
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center z-10"
                        style={{ backgroundImage: `url(${image})` }}
                        variants={imageVariants}
                        initial="rest"
                        whileHover="hover"
                      />
                        {/* Professional Gradient Overlay - Z-Index 20 */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/80 group-hover:from-black/40 group-hover:to-black/90 transition-all duration-500" />
                      
                      {/* Additional depth overlay for better text contrast */}
                      <div className="absolute bottom-0 left-0 right-0 z-30 h-3/5 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                    </div>                    {/* Content and Interactive Elements Layer */}
                    {layout.height === "h-[500px]" ? (
                      // Large card layout
                      <>
                        {/* Navigation Icon for large cards */}
                        <div className="absolute top-6 right-6 z-40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <motion.div
                            className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 shadow-xl border border-white/40"
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-6 w-6" />
                          </motion.div>
                        </div>

                        {/* Premium badge for large cards */}
                        <div className="absolute top-6 left-6 z-30">
                          <motion.div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-blue-400/50 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {language === 'en' ? 'Featured' : 'Kiemelt'}
                          </motion.div>
                        </div>

                        {/* Large card content */}
                        <div className="absolute bottom-0 left-0 right-0 z-30 p-8">
                          <motion.h3
                            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-2xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {label}
                          </motion.h3>
                          
                          <motion.p
                            className="text-white/95 text-lg line-clamp-3 leading-relaxed mb-6 drop-shadow-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {description}
                          </motion.p>

                          {/* Enhanced stats for large cards */}
                          <motion.div
                            className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                          >
                            <div className="flex items-center gap-3 text-white/90 text-base">
                              <Package className="h-5 w-5 drop-shadow-lg" />
                              <span className="font-semibold drop-shadow-lg">
                                {Math.floor(Math.random() * 50) + 20}+ {language === 'en' ? 'Products' : 'Termék'}
                              </span>
                            </div>
                            <div className="w-px h-5 bg-white/60"></div>
                            <div className="flex items-center gap-3 text-white/90 text-base">
                              <TrendingUp className="h-5 w-5 drop-shadow-lg" />
                              <span className="font-semibold drop-shadow-lg">
                                {language === 'en' ? 'Trending' : 'Trendi'}
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </>
                    ) : (
                      // Compact card layout
                      <>
                        {/* Compact navigation icon */}
                        <div className="absolute top-3 right-3 z-40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <motion.div
                            className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 shadow-lg border border-white/40"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </div>

                        {/* Compact badge */}
                        <div className="absolute top-3 left-3 z-30">
                          <motion.div
                            className="bg-white/95 backdrop-blur-sm text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/40"
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {language === 'en' ? 'Category' : 'Kategória'}
                          </motion.div>
                        </div>

                        {/* Compact content */}
                        <div className="absolute bottom-0 left-0 right-0 z-30 p-4">
                          <motion.h3
                            className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-2xl"
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {label}
                          </motion.h3>
                          
                          <motion.p
                            className="text-white/90 text-sm line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {description}
                          </motion.p>
                        </div>
                      </>
                    )}

                    {/* Professional border effect and card surface */}
                    <div className="absolute inset-0 z-50 rounded-2xl border border-white/20 group-hover:border-blue-400/60 transition-all duration-300 pointer-events-none shadow-xl group-hover:shadow-2xl" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 z-40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>        {/* Floating Action Elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default EnhancedCategoryGrid;
