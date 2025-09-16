
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface Category {
  label: string;
  href: string;
  icon?: string; // image path
}

interface ProductMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

const ProductMobileMenu = ({ onClose, categories }: ProductMobileMenuProps) => {
  const router = useRouter();

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {/* Categories list */}
      <div className="flex flex-col gap-3 w-full">
        {categories.map((cat, index) => {
          const categoryColors = {
            'Home': '#FF6B6B',
            'Kitchen': '#4ECDC4', 
            'Garden': '#45B7D1',
            'Kids': '#96CEB4',
            'Active': '#FECA57',
            'Pallets': '#FF9FF3'
          };
          
          const categoryColor = categoryColors[cat.label as keyof typeof categoryColors] || '#fa9b6b';
          const isActive = router.asPath === cat.href;
          
          return (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={cat.href}
                onClick={onClose}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl
                  transition-all duration-300 ease-out text-base font-semibold tracking-tight
                  ${isActive 
                    ? 'text-white shadow-lg transform scale-105' 
                    : 'text-gray-700 hover:text-white hover:shadow-md'
                  }
                `}
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, ${categoryColor}, ${categoryColor}dd)`
                    : 'rgba(255,255,255,0.6)',
                  boxShadow: isActive 
                    ? `0 8px 25px ${categoryColor}40, 0 4px 12px ${categoryColor}20`
                    : '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                {/* Colored dot indicator */}
                <div 
                  className={`
                    w-3 h-3 rounded-full flex-shrink-0
                    transition-all duration-300
                    ${isActive ? 'bg-white/90' : ''}
                  `}
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.9)' : categoryColor,
                    boxShadow: isActive ? 'none' : `0 0 12px ${categoryColor}60`,
                  }}
                />
                
                {/* Label */}
                <span className={`
                  transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-700'}
                `}>
                  {cat.label}
                </span>

                {/* Hover background for non-active items */}
                {!isActive && (
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColor}dd, ${categoryColor}bb)`,
                      zIndex: -1,
                    }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
export default ProductMobileMenu;
