import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

const ProductsMenu: React.FC = () => {
  const { language } = useLanguage();

  const getMenuLabel = () => {
    switch (language) {
      case 'hu': return 'Termékportfólió';
      case 'de': return 'Produktportfolio';
      default: return 'Product Portfolio';
    }
  };

  const categories = [
    {
      id: 'home',
      name: {
        en: 'Home',
        hu: 'Otthon',
        de: 'Zuhause'
      },
      description: {
        en: '🏠 Transform your living space with smart storage solutions, elegant containers, and innovative household essentials',
        hu: '🏠 Alakítsa át lakóterét okos tárolási megoldásokkal, elegáns tárolókkal és innovatív háztartási kellékekkel',
        de: '🏠 Verwandeln Sie Ihren Wohnraum mit intelligenten Aufbewahrungslösungen und innovativen Haushaltsartikeln'
      },
      href: '/products/home',
      image: '/products/categories/home.webp'
    },
    {
      id: 'kitchen',
      name: {
        en: 'Kitchen',
        hu: 'Konyha',
        de: 'Küche'
      },
      description: {
        en: '👨‍🍳 Elevate your culinary experience with premium food storage, measuring tools, and time-saving kitchen innovations',
        hu: '👨‍🍳 Emelje új szintre gasztronómiai élményét prémium élelmiszer-tárolókkal és időtakarékos konyhai innovációkkal',
        de: '👨‍🍳 Verbessern Sie Ihr kulinarisches Erlebnis mit Premium-Lebensmittellagerung und zeitsparenden Kücheninnovationen'
      },
      href: '/products/kitchen',
      image: '/products/categories/kitchen.webp'
    },
    {
      id: 'garden',
      name: {
        en: 'Garden',
        hu: 'Kert',
        de: 'Garten'
      },
      description: {
        en: '🌱 Create your outdoor paradise with weather-resistant planters, stylish furniture, and durable garden essentials',
        hu: '🌱 Alkossa meg kültéri paradicsomát időjárásálló ültetőedényekkel, stílusos bútorokkal és tartós kerti kellékekkel',
        de: '🌱 Schaffen Sie Ihr Outdoor-Paradies mit wetterfesten Pflanzgefäßen, stilvollen Möbeln und langlebigen Gartenartikeln'
      },
      href: '/products/garden',
      image: '/products/categories/garden.webp'
    },
    {
      id: 'kids',
      name: {
        en: 'Kids',
        hu: 'Gyerekek',
        de: 'Kinder'
      },
      description: {
        en: '🎨 Spark imagination with colorful, BPA-free containers, lunch boxes, and playful designs that kids absolutely love',
        hu: '🎨 Gyújtsa be a fantáziát színes, BPA-mentes tárolókkal, uzsonnás dobozokkal és játékos dizájnokkal',
        de: '🎨 Entfachen Sie die Fantasie mit farbenfrohen, BPA-freien Behältern und verspielten Designs, die Kinder lieben'
      },
      href: '/products/kids',
      image: '/products/categories/kids.webp'
    },
    {
      id: 'active',
      name: {
        en: 'Active',
        hu: 'Aktív',
        de: 'Aktiv'
      },
      description: {
        en: '⚡ Fuel your adventures with leak-proof water bottles, sports containers, and gear built for active lifestyles',
        hu: '⚡ Táplálja kalandjait szivárgásmentes kulaccsokkal, sport tárolókkal és aktív életmódra tervezett felszerelésekkel',
        de: '⚡ Stärken Sie Ihre Abenteuer mit auslaufsicheren Wasserflaschen und Ausrüstung für aktive Lebensstile'
      },
      href: '/products/active',
      image: '/products/categories/active.webp'
    },
    {
      id: 'pallets',
      name: {
        en: 'Pallets',
        hu: 'Raklapok',
        de: 'Paletten'
      },
      description: {
        en: '📦 Optimize your logistics with industrial-grade pallets, crates, and heavy-duty storage solutions for maximum efficiency',
        hu: '📦 Optimalizálja logisztikáját ipari minőségű raklapokkal, ládákkal és nagy teherbírású tárolási megoldásokkal',
        de: '📦 Optimieren Sie Ihre Logistik mit Industriepaletten, Kisten und Schwerlast-Lagerlösungen für maximale Effizienz'
      },
      href: '/products/pallets',
      image: '/products/categories/pallets.webp'
    }
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="flex items-center gap-2 text-slate-700 hover:text-[#fa9b6b] font-semibold transition-all duration-300 group bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[#fa9b6b] px-3 py-2 rounded-lg hover:bg-[#fa9b6b]/5">
        <span className="relative">
          {getMenuLabel()}
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform duration-300 origin-center"></div>
        </span>
        <ChevronDown className="h-5 w-5 transition-all duration-300 group-data-[state=open]:rotate-180 group-hover:text-[#fa9b6b] group-data-[state=open]:text-[#fa9b6b]" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="w-[1400px] p-0" style={{ width: '1400px', maxWidth: '1400px' }}>
        <div className="bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
          {/* Enhanced Header with gradient and better typography */}
          <div className="bg-gradient-to-r from-[#fa9b6b]/20 via-[#fa9b6b]/15 to-[#fa9b6b]/10 px-12 py-10 border-b border-white/30 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,155,107,0.1)_0%,transparent_50%)] opacity-70"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fa9b6b]/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fa9b6b]/15 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                {language === 'en' ? '🎯 Product Categories' : 
                 language === 'hu' ? '🎯 Termékkategóriák' : 
                 '🎯 Produktkategorien'}
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {language === 'en' ? 'Discover premium plastic solutions designed for every aspect of modern life' : 
                 language === 'hu' ? 'Fedezze fel a modern élet minden területére tervezett prémium műanyag megoldásokat' : 
                 'Entdecken Sie Premium-Kunststofflösungen für jeden Bereich des modernen Lebens'}
              </p>
            </div>
          </div>

          {/* Categories Grid with staggered animation */}
          <div className="p-12">
            <div className="grid grid-cols-3 gap-10">
              {categories.map((category, index) => {
                const delayClass = `delay-[${index * 100}ms]`;
                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 hover:from-white/98 hover:via-white/95 hover:to-white/90 border border-white/60 hover:border-[#fa9b6b]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#fa9b6b]/20 hover:scale-[1.05] transform-gpu backdrop-blur-sm animate-in fade-in-0 slide-in-from-bottom-4 ${delayClass}`}
                    style={{ '--bg-image': `url('${category.image}')` } as React.CSSProperties}
                  >
                    {/* Enhanced Background Image with better visibility */}
                    <div className="absolute inset-0 bg-[image:var(--bg-image)] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 scale-110 group-hover:scale-105 brightness-110 contrast-125 saturate-125" />
                    
                    {/* Enhanced Gradient Overlay with more sophisticated blending */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/60 to-white/80 group-hover:from-[#fa9b6b]/10 group-hover:via-white/50 group-hover:to-white/70 transition-all duration-700" />
                    
                    {/* Subtle pattern overlay for texture */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(circle_at_2px_2px,rgba(250,155,107,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
                    
                    {/* Content - Now without icon, more space for text */}
                    <div className="relative p-8 flex flex-col justify-center min-h-[130px]">
                      <div className="space-y-3">
                        <h4 className="font-bold text-2xl text-slate-800 group-hover:text-[#fa9b6b] transition-colors duration-300 leading-tight">
                          {category.name[language as Language]}
                        </h4>
                        <p className="text-base text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300 font-medium">
                          {category.description[language as Language]}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Hover Effect Border with glow */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#fa9b6b]/30 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(250,155,107,0.3)]" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="bg-gradient-to-r from-slate-50/95 via-white/95 to-slate-50/95 px-10 py-6 border-t border-white/30 relative">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(250,155,107,0.05)_50%,transparent_100%)]"></div>
            <div className="relative z-10 text-center">
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                ✨ {language === 'en' ? 'Precision quality solutions in plastic manufacturing with global reach and local expertise' : 
                   language === 'hu' ? 'Precíziós minőségi megoldások műanyaggyártásban globális elérhetőséggel és helyi szakértelemmel' : 
                   'Präzise Qualitätslösungen in der Kunststoffherstellung mit globaler Reichweite und lokaler Expertise'} ✨
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#fa9b6b] rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-500 font-medium">
                  {language === 'en' ? 'Quality • Innovation • Sustainability' : 
                   language === 'hu' ? 'Minőség • Innováció • Fenntarthatóság' : 
                   'Qualität • Innovation • Nachhaltigkeit'}
                </span>
                <div className="w-2 h-2 bg-[#fa9b6b] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProductsMenu;
