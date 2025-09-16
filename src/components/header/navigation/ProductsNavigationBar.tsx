import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  { 
    id: 'home', 
    labelKey: 'products.menu.home', 
    href: '/products/home',
    title: 'Home',
    color: '#FF6B6B', // Coral red
  },
  { 
    id: 'kitchen', 
    labelKey: 'products.menu.kitchen', 
    href: '/products/kitchen',
    title: 'Kitchen',
    color: '#4ECDC4', // Turquoise
  },
  { 
    id: 'garden', 
    labelKey: 'products.menu.garden', 
    href: '/products/garden',
    title: 'Garden',
    color: '#45B7D1', // Sky blue
  },
  { 
    id: 'kids', 
    labelKey: 'products.menu.kids', 
    href: '/products/kids',
    title: 'Kids',
    color: '#96CEB4', // Mint green
  },
  { 
    id: 'active', 
    labelKey: 'products.menu.active', 
    href: '/products/active',
    title: 'Active',
    color: '#FECA57', // Golden yellow
  },
  { 
    id: 'pallets', 
    labelKey: 'products.menu.pallets', 
    href: '/products/pallets',
    title: 'Pallets',
    color: '#FF9FF3', // Pink
  },
];

export const ProductsNavigationBar = () => {
  const { language, translations } = useLanguage();
  const router = useRouter();
  
  const t = (key: string) => translations[key]?.[language] || translations[key]?.en || key;

  return (
    <div className="flex items-center justify-center space-x-2 lg:space-x-3 xl:space-x-4 w-full">
      {categories.map((category, index) => {
        const isActive = router.pathname === category.href;
        
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={category.href}
              className={`
                group relative flex items-center justify-center
                px-3 py-2 lg:px-4 lg:py-3 xl:px-5 xl:py-3
                rounded-xl lg:rounded-2xl
                transition-all duration-300 ease-out
                ${isActive 
                  ? 'text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-white hover:shadow-md'
                }
              `}
              style={{
                background: isActive 
                  ? `linear-gradient(135deg, ${category.color}, ${category.color}dd)`
                  : 'transparent',
                boxShadow: isActive 
                  ? `0 8px 25px ${category.color}40, 0 4px 12px ${category.color}20`
                  : 'none',
              }}
            >
              {/* Colored dot indicator */}
              <div 
                className={`
                  w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 
                  rounded-full mr-2 lg:mr-2.5 xl:mr-3
                  transition-all duration-300
                  ${isActive ? 'bg-white/90' : 'group-hover:scale-125'}
                `}
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.9)' : category.color,
                  boxShadow: isActive ? 'none' : `0 0 8px ${category.color}60`,
                }}
              />
              
              {/* Label */}
              <span className={`
                text-sm lg:text-base xl:text-lg font-semibold
                transition-all duration-300
                ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}
              `}>
                {t(category.labelKey) || category.title}
              </span>

              {/* Hover background */}
              <div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${category.color}dd, ${category.color}bb)`,
                  zIndex: -1,
                }}
              />

              {/* Active glow effect */}
              {isActive && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl lg:rounded-2xl"
                  style={{
                    background: `radial-gradient(circle, ${category.color}30 0%, transparent 70%)`,
                    zIndex: -2,
                  }}
                />
              )}

              {/* Subtle pulse animation for active item */}
              {isActive && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-xl lg:rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                    zIndex: -3,
                  }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductsNavigationBar;
