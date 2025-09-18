import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { 
  Home,
  ChefHat,
  Flower,
  Baby,
  Dumbbell,
  Layers
} from "lucide-react";

export const ProductsMenu = () => {
  const { translations, language } = useLanguage();

  // Animation variants for dropdown content
  const containerVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  const categories = [
    { 
      id: 'home', 
      title: language === 'en' ? 'Home' : 'Otthon',
      description: language === 'en' ? 'Smart storage solutions and elegant containers for modern living' : 'Intelligens tárolási megoldások és elegáns tárolók modern élethez',
      href: '/products/home',
      icon: Home,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      id: 'kitchen', 
      title: language === 'en' ? 'Kitchen' : 'Konyha',
      description: language === 'en' ? 'Premium food storage and kitchen essentials' : 'Prémium élelmiszer-tároló és konyhai alapvető eszközök',
      href: '/products/kitchen',
      icon: ChefHat,
      color: "from-orange-500 to-red-600"
    },
    { 
      id: 'garden', 
      title: language === 'en' ? 'Garden' : 'Kert',
      description: language === 'en' ? 'Weather-resistant planters and stylish garden furniture' : 'Időjárásálló ültetők és stílusos kerti bútorok',
      href: '/products/garden',
      icon: Flower,
      color: "from-green-500 to-emerald-600"
    },
    { 
      id: 'kids', 
      title: language === 'en' ? 'Kids' : 'Gyermek',
      description: language === 'en' ? 'Colorful, BPA-free containers and lunch boxes for kids' : 'Színes, BPA-mentes tárolók és uzsonnás dobozok gyerekeknek',
      href: '/products/kids',
      icon: Baby,
      color: "from-pink-500 to-rose-600"
    },
    { 
      id: 'active', 
      title: language === 'en' ? 'Active' : 'Sport',
      description: language === 'en' ? 'Leak-proof bottles and sports containers for active living' : 'Szivárgásmentes palackok és sport tárolók aktív élethez',
      href: '/products/active',
      icon: Dumbbell,
      color: "from-purple-500 to-violet-600"
    },
    { 
      id: 'pallets', 
      title: language === 'en' ? 'Pallets' : 'Raklapok',
      description: language === 'en' ? 'Industrial-grade pallets and heavy-duty storage solutions' : 'Ipari minőségű raklapok és nagy teherbírású tárolási megoldások',
      href: '/products/pallets',
      icon: Layers,
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.products']?.[language] || 'Product Portfolio'}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container xl mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-full p-2.5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98))',
            backdropFilter: 'blur(40px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 4px 20px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.1)
            `,
            marginTop: '8px',
            overflow: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fa9b6b]/20 via-blue-500/10 to-purple-500/20 animate-gradient-x"></div>
          </div>
          
          {/* Compact Header */}
          <div className="relative mb-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#fa9b6b] to-purple-600 flex items-center justify-center shadow-md">
                    <Layers className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="ml-2">
                  <h2 className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Product Categories
                  </h2>
                  <p className="text-xs text-gray-600">Discover premium plastic solutions designed for every aspect of modern life</p>
                </div>
              </div>
              <div className="px-2 py-0.5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-md border border-white/30">
                <span className="text-xs font-medium text-gray-700">BPA-Free</span>
              </div>
            </div>
          </div>

          {/* Modern Futuristic Multi-Column Layout */}
          <div className="relative grid grid-cols-3 gap-x-2.5 gap-y-1.5">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div 
                  key={category.id} 
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link 
                    href={category.href}
                    className="group relative block px-3 py-1.5 rounded-lg border border-transparent hover:border-orange-200 hover:bg-gradient-to-r hover:from-[#fa9b6b]/5 hover:to-transparent transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {/* Icon - Fixed Left Position */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                        <IconComponent size={20} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-[#fa9b6b] transition-colors leading-tight mb-1">
                          {category.title}
                        </h3>
                        <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Modern Footer */}
          <div className="relative pt-1 border-t border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#fa9b6b] to-purple-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Quality</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Innovation</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Sustainability</span>
                </div>
              </div>
              <button 
                onClick={() => window.location.href = '/products'}
                className="text-xs text-[#fa9b6b] hover:text-orange-600 underline hover:no-underline transition-colors duration-200"
              >
                Explore Full Portfolio →
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-600">
                Precision quality solutions in plastic manufacturing with global reach and local expertise
              </p>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
