
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

const categories = [
  { 
    id: 'home', 
    labelKey: 'products.menu.home', 
    href: '/products/home',
    icon: Home,
    title: 'Home',
    description: 'Transform your living space with smart storage solutions, elegant containers, and innovative household essentials',
    backgroundImage: '/products/categories/home.webp'
  },
  { 
    id: 'kitchen', 
    labelKey: 'products.menu.kitchen', 
    href: '/products/kitchen',
    icon: ChefHat,
    title: 'Kitchen',
    description: 'Elevate your culinary experience with premium food storage, measuring tools, and time-saving kitchen innovations',
    backgroundImage: '/products/categories/kitchen.webp'
  },
  { 
    id: 'garden', 
    labelKey: 'products.menu.garden', 
    href: '/products/garden',
    icon: Flower,
    title: 'Garden',
    description: 'Create your outdoor paradise with weather-resistant planters, stylish furniture, and durable garden essentials',
    backgroundImage: '/products/categories/garden.webp'
  },
  { 
    id: 'kids', 
    labelKey: 'products.menu.kids', 
    href: '/products/kids',
    icon: Baby,
    title: 'Kids',
    description: 'Spark imagination with colorful, BPA-free containers, lunch boxes, and playful designs that kids absolutely love',
    backgroundImage: '/products/categories/kids.webp'
  },
  { 
    id: 'active', 
    labelKey: 'products.menu.active', 
    href: '/products/active',
    icon: Dumbbell,
    title: 'Active',
    description: 'Fuel your adventures with leak-proof water bottles, sports containers, and gear built for active lifestyles',
    backgroundImage: '/products/categories/active.webp'
  },
  { 
    id: 'pallets', 
    labelKey: 'products.menu.pallets', 
    href: '/products/pallets',
    icon: Layers,
    title: 'Pallets',
    description: 'Optimize your logistics with industrial-grade pallets, crates, and heavy-duty storage solutions for maximum efficiency',
    backgroundImage: '/products/categories/pallets.webp'
  },
];

export const ProductsMenu = () => {
  const { language, translations } = useLanguage();
  const t = (key: string) => translations[key]?.[language] || translations[key]?.en || key;

  // Animation variants for dropdown content
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-lg xl:text-xl font-semibold text-gray-800 hover:text-[#fa9b6b] transition-colors duration-200 bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent">
        {language === 'en' ? 'Product Portfolio' : 'Termékportfólió'}
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container large mt-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-full p-8 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
            backdropFilter: 'blur(20px)',
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05)
            `,
            marginTop: '8px',
          }}
        >
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-[#fa9b6b] flex items-center justify-center mr-2">
                <Layers className="w-3 h-3 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Product Categories</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Discover premium plastic solutions designed for every aspect of modern life
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={category.id} variants={itemVariants}>
                  <Link
                    href={category.href}
                    className="group relative block rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-xl transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${category.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        {/* Icon */}
                        <div className="flex items-center mb-2">
                          <IconComponent className="w-5 h-5 text-[#fa9b6b] mr-2" />
                          <h3 className="text-lg font-bold text-white group-hover:text-[#fa9b6b] transition-colors duration-200">
                            {category.title}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-200">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-[#fa9b6b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#fa9b6b] rounded-full mr-2"></span>
                Precision quality solutions in plastic manufacturing with global reach and local expertise
                <span className="w-2 h-2 bg-[#fa9b6b] rounded-full ml-2"></span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <span className="w-1 h-1 bg-[#fa9b6b] rounded-full"></span>
                <span>Quality</span>
                <span>•</span>
                <span>Innovation</span>
                <span>•</span>
                <span>Sustainability</span>
                <span className="w-1 h-1 bg-[#fa9b6b] rounded-full"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProductsMenu;
