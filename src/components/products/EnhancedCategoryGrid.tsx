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
      y: 0
    },
    hover: { 
      scale: 1.02,
      y: -6,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Get categories as array for advanced grid layouts
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
            className="relative h-[500px] rounded-3xl overflow-hidden mb-12 shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-all duration-700 ease-out"
                style={{ 
                  backgroundImage: `url(${featuredCategory[1].image || '/placeholder.svg'})` 
                }}
              />
            </div>

            {/* Professional Multi-layered Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 transition-all duration-500"></div>
            
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Award className="h-4 w-4" />
                    {language === 'en' ? 'Premium Collection' : 'Prémium Kollekció'}
                  </motion.div>
                  
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {featuredCategory[1].labels?.[language] || featuredCategory[1].labels?.en || featuredCategory[0]}
                  </motion.h2>
                  
                  <motion.p
                    className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg"
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
                        className="bg-white text-slate-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {language === 'en' ? 'Explore Collection' : 'Kollekció Felfedezése'}
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}        {/* Professional Mosaic Grid Layout - Exact Match to Your Image */}        <motion.div
          className="grid grid-cols-3 gap-3 lg:gap-4"
          style={{ gridAutoRows: 'minmax(180px, auto)' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {regularCategories.map(([key, category], index) => {
            const image = category.image || '/placeholder.svg';
            const label = category.labels?.[language] || category.labels?.en || key;
            const description = category.content?.[language]?.description || category.content?.en?.description || '';            // Exact mosaic layout matching your reference image (3-column grid)
            const getMosaicLayout = (index: number) => {
              const patterns = [
                // Row 1: Large 2x2 Kitchen card + Tall 1x2 Garden card (3 grid positions)
                { cols: "col-span-2", rows: "row-span-2", size: "large" }, // Kitchen (spans 2 cols, 2 rows)
                { cols: "col-span-1", rows: "row-span-2", size: "tall" },  // Garden (spans 1 col, 2 rows)
                
                // Row 2: Wide Kids card spans 2 columns at bottom
                { cols: "col-span-2", rows: "row-span-1", size: "wide" },  // Kids (wide under Kitchen)
                
                // Row 3: Two square cards
                { cols: "col-span-1", rows: "row-span-1", size: "normal" }, // Active (square)
                { cols: "col-span-1", rows: "row-span-1", size: "normal" }, // Pallets (square)
                
                // Repeat pattern for additional cards
                { cols: "col-span-2", rows: "row-span-2", size: "large" },
                { cols: "col-span-1", rows: "row-span-2", size: "tall" },
                { cols: "col-span-2", rows: "row-span-1", size: "wide" },
                { cols: "col-span-1", rows: "row-span-1", size: "normal" },
                { cols: "col-span-1", rows: "row-span-1", size: "normal" },
              ];
              return patterns[index % patterns.length];
            };            const layout = getMosaicLayout(index);
            const isLarge = layout.size === "large" || layout.size === "fullwidth";
            const isTall = layout.size === "tall";
            
            return (
              <motion.div
                key={key}
                className={`group relative overflow-hidden ${layout.cols} ${layout.rows}`}
                variants={itemVariants}
              >
                <Link href={`/products/${key}`} className="block w-full h-full">
                  <motion.div
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 w-full h-full flex flex-col cursor-pointer"
                    variants={hoverVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {/* Professional Background Image Layer */}
                    <div className="absolute inset-0">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-all duration-700 ease-out"
                        style={{ backgroundImage: `url(${image})` }}
                      />
                    </div>

                    {/* Multi-layered Professional Gradient Overlays (exactly like blog posts) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/25 group-hover:to-black/5 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 group-hover:via-black/15 group-hover:to-black/30 transition-all duration-500"></div>

                    {/* Top badges section with enhanced styling */}
                    <div className="relative z-20 flex justify-between items-start p-3 lg:p-4">
                      <div className="bg-white/95 backdrop-blur-md text-gray-800 font-semibold text-xs transition-all duration-300 px-2.5 py-1 rounded-full shadow-md">
                        <Package className="h-3 w-3 inline mr-1" />
                        {language === 'en' ? 'Category' : 'Kategória'}
                      </div>
                      
                      {/* Optional featured badge for first few categories */}
                      {index < 2 && (
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-md">
                          <Award className="h-3 w-3 mr-1 inline" />
                          {language === 'en' ? 'Featured' : 'Kiemelt'}
                        </div>
                      )}
                    </div>                    {/* Content overlay - responsive sizing based on card type */}
                    <div className="relative z-20 flex flex-col flex-1 justify-end p-3 lg:p-4">
                      <div className="text-white">
                        {/* Title with sizing based on card size */}
                        <h3 className={`font-bold text-white mb-2 leading-tight drop-shadow-lg line-clamp-2 ${
                          isLarge ? 'text-lg lg:text-xl' : 
                          isTall ? 'text-base lg:text-lg' : 
                          'text-sm lg:text-base'
                        }`}>
                          {label}
                        </h3>

                        {/* Description with sizing based on card size */}
                        <p className={`text-white/90 mb-3 leading-relaxed drop-shadow-md line-clamp-2 ${
                          isLarge ? 'text-sm lg:text-base' : 
                          isTall ? 'text-xs lg:text-sm' : 
                          'text-xs'
                        }`}>
                          {description}
                        </p>

                        {/* Stats for featured cards */}
                        {index < 2 && (
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex items-center text-white/80 text-xs">
                              <Package className="h-3 w-3 mr-1.5 text-blue-300" />
                              <span className="font-medium mr-3">{Math.floor(Math.random() * 50) + 20}+ {language === 'en' ? 'Products' : 'Termék'}</span>
                              <TrendingUp className="h-3 w-3 mr-1.5 text-green-300" />
                              <span>{language === 'en' ? 'Trending' : 'Trendi'}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>                    {/* Professional hover effects (like blog posts) */}
                    {/* Subtle gradient border effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Action Elements */}
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
