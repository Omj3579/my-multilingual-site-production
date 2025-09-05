import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';

const ProductsMenu: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    {
      id: 'all',
      name: { en: 'All Products', hu: 'Minden Termék', de: 'Alle Produkte' },
      description: { 
        en: 'View our complete product catalog', 
        hu: 'Tekintse meg teljes termékkatalógusunkat',
        de: 'Sehen Sie unseren kompletten Produktkatalog'
      },
      href: '/products',
      icon: Package,
      image: '/products/categories/hero/Products-hero.png'
    },
    {
      id: 'home',
      name: { en: 'Home', hu: 'Otthon', de: 'Zuhause' },
      description: { 
        en: 'Essential home products', 
        hu: 'Alapvető otthoni termékek',
        de: 'Wesentliche Haushaltsprodukte'
      },
      href: '/products/home',
      icon: Package,
      image: '/products/categories/home.webp'
    },
    {
      id: 'kitchen',
      name: { en: 'Kitchen', hu: 'Konyha', de: 'Küche' },
      description: { 
        en: 'Professional kitchen solutions', 
        hu: 'Professzionális konyhai megoldások',
        de: 'Professionelle Küchenlösungen'
      },
      href: '/products/kitchen',
      icon: Package,
      image: '/products/categories/kitchen.webp'
    },
    {
      id: 'garden',
      name: { en: 'Garden', hu: 'Kert', de: 'Garten' },
      description: { 
        en: 'Garden and outdoor products', 
        hu: 'Kerti és kültéri termékek',
        de: 'Garten- und Außenprodukte'
      },
      href: '/products/garden',
      icon: Package,
      image: '/products/categories/garden.webp'
    },
    {
      id: 'kids',
      name: { en: 'Kids', hu: 'Gyerek', de: 'Kinder' },
      description: { 
        en: 'Safe and fun kids products', 
        hu: 'Biztonságos és szórakoztató gyermektermékek',
        de: 'Sichere und lustige Kinderprodukte'
      },
      href: '/products/kids',
      icon: Package,
      image: '/products/categories/kids.webp'
    },
    {
      id: 'active',
      name: { en: 'Active', hu: 'Aktív', de: 'Aktiv' },
      description: { 
        en: 'Active lifestyle products', 
        hu: 'Aktív életmód termékek',
        de: 'Aktive Lifestyle-Produkte'
      },
      href: '/products/active',
      icon: Package,
      image: '/products/categories/active.webp'
    },
    {
      id: 'pallets',
      name: { en: 'Pallets', hu: 'Raklapok', de: 'Paletten' },
      description: { 
        en: 'Industrial pallet solutions', 
        hu: 'Ipari raklap megoldások',
        de: 'Industrielle Palettenlösungen'
      },
      href: '/products/pallets',
      icon: Package,
      image: '/products/categories/pallets.webp'
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const getMenuLabel = () => {
    switch (language) {
      case 'hu':
        return 'Termékportfólió';
      case 'de':
        return 'Produktportfolio';
      default:
        return 'Product Portfolio';
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu Trigger */}
      <button
        className="flex items-center gap-1 text-slate-700 hover:text-[#fa9b6b] font-semibold transition-colors group"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {getMenuLabel()}
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[800px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#fa9b6b]/10 to-[#fa9b6b]/5 px-6 py-4 border-b border-white/10">
            <h3 className="text-lg font-bold text-slate-800">
              {language === 'en' ? 'Product Categories' : 
               language === 'hu' ? 'Termékkategóriák' : 
               'Produktkategorien'}
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {language === 'en' ? 'Explore our comprehensive range of premium products' : 
               language === 'hu' ? 'Fedezze fel prémium termékeink átfogó kínálatát' : 
               'Entdecken Sie unser umfassendes Sortiment an Premium-Produkten'}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/80 to-white/60 hover:from-white/90 hover:to-white/80 border border-white/30 hover:border-[#fa9b6b]/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundImage: `url('${category.image}')` }}
                    />
                    
                    {/* Content */}
                    <div className="relative p-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#fa9b6b]/20 to-[#fa9b6b]/10 rounded-lg flex items-center justify-center group-hover:from-[#fa9b6b]/30 group-hover:to-[#fa9b6b]/20 transition-all duration-300">
                        <Icon className="h-5 w-5 text-[#fa9b6b]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 group-hover:text-[#fa9b6b] transition-colors duration-200">
                          {category.name[language as Language]}
                        </h4>
                        <p className="text-sm text-slate-600 line-clamp-1">
                          {category.description[language as Language]}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-slate-50/80 to-white/80 px-6 py-3 border-t border-white/10">
            <p className="text-xs text-slate-500 text-center">
              {language === 'en' ? 'Precision quality solutions in plastic manufacturing with global reach and local expertise' : 
               language === 'hu' ? 'Precíziós minőségi megoldások műanyaggyártásban globális elérhetőséggel és helyi szakértelemmel' : 
               'Präzise Qualitätslösungen in der Kunststoffherstellung mit globaler Reichweite und lokaler Expertise'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsMenu;
