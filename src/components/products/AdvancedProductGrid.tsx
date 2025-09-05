import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/utils/fetchProducts';
import EnhancedProductCard from './EnhancedProductCard';
import { Grid3X3, LayoutGrid, Layers, Zap, SortAsc } from 'lucide-react';

interface AdvancedProductGridProps {
  products: Product[];
  categoryId: string;
}

type GridPattern = 'masonry' | 'mosaic' | 'staggered' | 'hexagon' | 'spiral' | 'wave';
type SortOption = 'featured' | 'name' | 'newest' | 'popular';

const AdvancedProductGrid: React.FC<AdvancedProductGridProps> = ({ products, categoryId }) => {
  const { language } = useLanguage();
  const [gridPattern, setGridPattern] = useState<GridPattern>('masonry');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [sortedProducts, setSortedProducts] = useState(products);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Sort products based on selected option
  useEffect(() => {
    const sorted = [...products];
    switch (sortBy) {
      case 'name':
        sorted.sort((a, b) => (a.name[language] || a.name.en).localeCompare(b.name[language] || b.name.en));
        break;
      case 'featured':
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'newest':
        sorted.reverse();
        break;
      case 'popular':
        sorted.sort(() => Math.random() - 0.5); // Randomize for demo
        break;
    }
    setSortedProducts(sorted);
  }, [products, sortBy, language]);

  const handlePatternChange = (pattern: GridPattern) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setGridPattern(pattern);
      setIsTransitioning(false);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Generate grid classes based on pattern
  const getGridClasses = () => {
    switch (gridPattern) {
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
      case 'mosaic':
        return 'grid grid-cols-12 gap-4 auto-rows-[200px]';
      case 'staggered':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      case 'hexagon':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      case 'spiral':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      case 'wave':
        return 'flex flex-wrap gap-4 justify-center';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  // Get individual item classes for mosaic pattern
  const getMosaicItemClasses = (index: number) => {
    const patterns = [
      'col-span-6 row-span-2',  // Large
      'col-span-3 row-span-1',  // Small
      'col-span-3 row-span-1',  // Small
      'col-span-4 row-span-2',  // Medium tall
      'col-span-4 row-span-1',  // Medium wide
      'col-span-4 row-span-1',  // Medium wide
      'col-span-6 row-span-1',  // Wide
      'col-span-3 row-span-2',  // Tall narrow
    ];
    return patterns[index % patterns.length];
  };

  // Get wave positioning
  const getWaveStyle = (index: number) => {
    const amplitude = 60;
    const frequency = 0.5;
    const y = Math.sin(index * frequency) * amplitude;
    return { transform: `translateY(${y}px)` };
  };

  // Get spiral positioning
  const getSpiralStyle = (index: number) => {
    const radius = index * 8;
    const angle = index * 0.5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  const patternOptions = [
    { id: 'masonry', icon: Layers, label: language === 'en' ? 'Masonry' : 'Kőfal' },
    { id: 'mosaic', icon: Grid3X3, label: language === 'en' ? 'Mosaic' : 'Mozaik' },
    { id: 'staggered', icon: LayoutGrid, label: language === 'en' ? 'Staggered' : 'Eltolt' },
    { id: 'hexagon', icon: Zap, label: language === 'en' ? 'Hexagon' : 'Hatszög' },
  ] as const;

  const sortOptions = [
    { id: 'featured', label: language === 'en' ? 'Featured' : 'Kiemelt' },
    { id: 'name', label: language === 'en' ? 'Name' : 'Név' },
    { id: 'newest', label: language === 'en' ? 'Newest' : 'Legújabb' },
    { id: 'popular', label: language === 'en' ? 'Popular' : 'Népszerű' },
  ] as const;

  return (
    <div className="space-y-8">
      {/* Advanced Controls */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Grid Pattern Selector */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <LayoutGrid className="h-4 w-4" />
              {language === 'en' ? 'Grid Pattern' : 'Rács Minta'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {patternOptions.map(({ id, icon: Icon, label }) => (
                <motion.button
                  key={id}
                  onClick={() => handlePatternChange(id as GridPattern)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    gridPattern === id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <SortAsc className="h-4 w-4" />
              {language === 'en' ? 'Sort By' : 'Rendezés'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => setSortBy(id as SortOption)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    sortBy === id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded-xl">
            {sortedProducts.length} {language === 'en' ? 'products' : 'termék'}
          </div>
        </div>
      </div>

      {/* Advanced Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${gridPattern}-${sortBy}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`transition-all duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        >
          {gridPattern === 'masonry' && (
            <div className={getGridClasses()}>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="break-inside-avoid mb-6"
                  style={{
                    height: index % 3 === 0 ? '420px' : index % 2 === 0 ? '380px' : '350px'
                  }}
                >
                  <EnhancedProductCard
                    product={product}
                    categoryId={categoryId}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {gridPattern === 'mosaic' && (
            <div className={getGridClasses()}>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className={getMosaicItemClasses(index)}
                >
                  <EnhancedProductCard
                    product={product}
                    categoryId={categoryId}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {gridPattern === 'staggered' && (
            <div className={getGridClasses()}>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className={index % 2 === 0 ? 'mt-0' : 'mt-8'}
                >
                  <EnhancedProductCard
                    product={product}
                    categoryId={categoryId}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {gridPattern === 'hexagon' && (
            <div className="flex flex-wrap justify-center gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="relative"
                  style={{
                    width: '300px',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    margin: index % 2 === 0 ? '0 -20px 40px 0' : '20px -20px 40px 0'
                  }}
                >
                  <div className="w-full h-[350px] relative">
                    <EnhancedProductCard
                      product={product}
                      categoryId={categoryId}
                      index={index}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {gridPattern === 'spiral' && (
            <div className="relative min-h-[800px]">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="absolute w-80"
                  style={getSpiralStyle(index)}
                  initial={{ ...itemVariants.hidden, ...getSpiralStyle(index) }}
                  animate={{ ...itemVariants.visible, ...getSpiralStyle(index) }}
                >
                  <EnhancedProductCard
                    product={product}
                    categoryId={categoryId}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {gridPattern === 'wave' && (
            <div className={getGridClasses()}>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="w-80"
                  style={getWaveStyle(index)}
                >
                  <EnhancedProductCard
                    product={product}
                    categoryId={categoryId}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default AdvancedProductGrid;
