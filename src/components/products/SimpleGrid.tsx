import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { CategoryDescriptions } from '@/utils/fetchProducts';
import { motion } from 'framer-motion';
import { Package, Award, TrendingUp } from 'lucide-react';

interface SimpleGridProps {
  categories: CategoryDescriptions;
}

interface CategoryCardProps {
  category: {
    id: string;
    labels?: Record<string, string>;
    content?: Record<string, { description: string }>;
    image?: string;
  };
  isLarge?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isLarge = false }) => {
  const { language } = useLanguage();
  
  const label = category.labels?.[language] || category.labels?.en || category.id;
  const description = category.content?.[language]?.description || category.content?.en?.description || '';
  const image = category.image || '/placeholder.svg';

  // Fallback descriptions if none provided
  const getFallbackDescription = (categoryId: string) => {
    const descriptions = {
      kitchen: {
        en: "Discover smart kitchen storage, airtight containers, measuring jugs, and time-saving gadgets. Transform your cooking experience with products designed for organization, efficiency, and culinary creativity.",
        hu: "Fedezze fel az okos konyhai tárolókat, légmentes tárolókat, mérőkancsókat és időtakarékos eszközöket. Alakítsa át főzési élményét szervezettségre, hatékonyságra és kulináris kreativitásra tervezett termékekkel."
      },
      garden: {
        en: "Premium outdoor furniture, planters, and garden accessories designed for durability and style. Create your perfect outdoor living space with weather-resistant, elegant solutions.",
        hu: "Prémium kültéri bútorok, ültetőedények és kerti kiegészítők, amelyek tartósságra és stílusra tervezettek. Alkossa meg tökéletes kültéri életterét időjárásálló, elegáns megoldásokkal."
      },
      active: {
        en: "High-performance sports and fitness containers, water bottles, and active lifestyle accessories. Built for durability and designed to support your active pursuits.",
        hu: "Nagy teljesítményű sport- és fitnesz tárolók, kulacs és aktív életmód kiegészítők. Tartósságra építve és aktív tevékenységeinek támogatására tervezve."
      },
      kids: {
        en: "Safe, colorful, and fun products designed specifically for children. BPA-free materials, child-friendly designs, and products that make mealtime and playtime enjoyable.",
        hu: "Biztonságos, színes és szórakoztató termékek, amelyeket kifejezetten gyermekek számára terveztek. BPA-mentes anyagok, gyerekbarát dizájn és termékek, amelyek élvezetessé teszik az étkezést és a játékot."
      },
      pallets: {
        en: "Discover heavy-duty pallets, crates, and storage containers engineered for industrial use. Ensure reliability, safety, and efficiency in your warehouse or logistics operations.",
        hu: "Fedezze fel az ipari használatra tervezett nehéz raklapokat, ládákat és tárolóedényeket. Biztosítsa a megbízhatóságot, biztonságot és hatékonyságot raktári vagy logisztikai műveletekben."
      }
    };
    
    const categoryDesc = descriptions[categoryId as keyof typeof descriptions];
    if (!categoryDesc) return '';
    
    return (categoryDesc as Record<string, string>)[language] || categoryDesc.en || '';
  };

  const finalDescription = description || getFallbackDescription(category.id);

  // Define colors based on category
  const getBadgeColors = (categoryId: string) => {
    switch (categoryId) {
      case 'kitchen':
        return 'from-blue-600 to-purple-600';
      case 'garden':
        return 'from-green-600 to-emerald-600';
      case 'active':
        return 'from-orange-600 to-red-600';
      case 'kids':
        return 'from-purple-600 to-pink-600';
      case 'pallets':
        return 'from-slate-600 to-gray-600';
      default:
        return 'from-blue-600 to-purple-600';
    }
  };

  const getBadgeText = (categoryId: string) => {
    switch (categoryId) {
      case 'kitchen':
        return language === 'en' ? 'Premium' : 'Prémium';
      case 'garden':
        return language === 'en' ? 'Outdoor' : 'Kültéri';
      case 'active':
        return language === 'en' ? 'Active' : 'Aktív';
      case 'kids':
        return language === 'en' ? 'Kids Safe' : 'Gyerekbiztos';
      case 'pallets':
        return language === 'en' ? 'Professional' : 'Professzionális';
      default:
        return language === 'en' ? 'Category' : 'Kategória';
    }
  };

  const getHoverColors = (categoryId: string) => {
    switch (categoryId) {
      case 'kitchen':
        return 'from-blue-500/20 via-purple-500/20 to-pink-500/20';
      case 'garden':
        return 'from-green-500/20 via-emerald-500/20 to-teal-500/20';
      case 'active':
        return 'from-orange-500/20 via-red-500/20 to-pink-500/20';
      case 'kids':
        return 'from-purple-500/20 via-pink-500/20 to-rose-500/20';
      case 'pallets':
        return 'from-slate-500/20 via-gray-500/20 to-zinc-500/20';
      default:
        return 'from-blue-500/20 via-purple-500/20 to-pink-500/20';
    }
  };

  return (
    <motion.div
      className="group relative overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/products/${category.id}`} className="block w-full h-full">
        <motion.div
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 w-full h-full flex flex-col cursor-pointer"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-all duration-700 ease-out"
              style={{ 
                backgroundImage: `url(${image})`,
                backgroundColor: '#D97706' // Orange fallback color matching your image
              }}
            />
          </div>

          {/* Professional Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/25 group-hover:to-black/5 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 group-hover:via-black/15 group-hover:to-black/30 transition-all duration-500"></div>

          {/* Top badges */}
          <div className="relative z-20 flex justify-between items-start p-4">
            <div className="bg-white/95 backdrop-blur-md text-gray-800 font-semibold text-sm transition-all duration-300 px-3 py-2 rounded-full shadow-md">
              <Package className={`${isLarge ? 'h-4 w-4' : 'h-3 w-3'} inline mr-2`} />
              {language === 'en' ? 'Category' : 'Kategória'}
            </div>
            
            <div className={`bg-gradient-to-r ${getBadgeColors(category.id)} text-white font-bold text-sm px-3 py-2 rounded-full shadow-md`}>
              <Award className={`${isLarge ? 'h-4 w-4' : 'h-3 w-3'} mr-2 inline`} />
              {getBadgeText(category.id)}
            </div>
          </div>

          {/* Content overlay */}
          <div className="relative z-20 flex flex-col flex-1 justify-end p-4">
            <div className="text-white">
              <h3 className={`font-bold text-white mb-3 leading-tight drop-shadow-lg ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
                {label}
              </h3>

              {/* Always show description for all cards */}
              <p className="text-white/90 mb-4 leading-relaxed drop-shadow-md text-sm lg:text-base line-clamp-3">
                {finalDescription}
              </p>

              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center text-white/80 text-sm">
                  <Package className="h-4 w-4 mr-2 text-white/60" />
                  <span className="font-medium mr-3">
                    {Math.floor(Math.random() * 30) + 15}+ {language === 'en' ? 'Products' : 'Termék'}
                  </span>
                  <TrendingUp className="h-4 w-4 mr-2 text-white/60" />
                  <span>{language === 'en' ? 'Popular' : 'Népszerű'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover effects */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${getHoverColors(category.id)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
          
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const SimpleGrid: React.FC<SimpleGridProps> = ({ categories }) => {
  // Extract specific categories
  const kitchenCategory = Object.entries(categories).find(([key]) => key === 'kitchen')?.[1];
  const gardenCategory = Object.entries(categories).find(([key]) => key === 'garden')?.[1];
  const activeCategory = Object.entries(categories).find(([key]) => key === 'active')?.[1];
  const kidsCategory = Object.entries(categories).find(([key]) => key === 'kids')?.[1];
  const palletsCategory = Object.entries(categories).find(([key]) => key === 'pallets')?.[1];

  // Add IDs to categories
  const kitchenWithId = kitchenCategory ? { ...kitchenCategory, id: 'kitchen' } : null;
  const gardenWithId = gardenCategory ? { ...gardenCategory, id: 'garden' } : null;
  const activeWithId = activeCategory ? { ...activeCategory, id: 'active' } : null;
  const kidsWithId = kidsCategory ? { ...kidsCategory, id: 'kids' } : null;
  const palletsWithId = palletsCategory ? { ...palletsCategory, id: 'pallets' } : null;

  return (
    <div className="container mx-auto px-4">
      {/* Custom Grid Layout matching the image */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Row: Kitchen (2 columns) + Garden (1 column) */}
        {kitchenWithId && (
          <div className="lg:col-span-2 h-96">
            <CategoryCard category={kitchenWithId} isLarge={true} />
          </div>
        )}
        
        {gardenWithId && (
          <div className="h-96">
            <CategoryCard category={gardenWithId} isLarge={true} />
          </div>
        )}
        
        {/* Second Row: Active + Kids (both occupy full width together and same height as first row) */}
        {activeWithId && (
          <div className="lg:col-span-1 md:col-span-1 h-96">
            <CategoryCard category={activeWithId} isLarge={true} />
          </div>
        )}
        
        {kidsWithId && (
          <div className="lg:col-span-2 md:col-span-1 h-96">
            <CategoryCard category={kidsWithId} isLarge={true} />
          </div>
        )}
      </div>
      
      {/* Third Row: Pallets - Full width section (same height as other rows) */}
      {palletsWithId && (
        <div className="mt-6">
          <div className="h-96">
            <CategoryCard category={palletsWithId} isLarge={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleGrid;
