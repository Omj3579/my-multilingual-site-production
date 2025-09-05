import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ServicesMenu } from './navigation/ServicesMenu';
import { SustainabilityMenu } from './navigation/SustainabilityMenu';
import { CompanyMenu } from './navigation/CompanyMenu';
import ProductsMenu from './navigation/ProductsMenu';

const DesktopNavigation = () => {

  // Animation variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <NavigationMenu 
      className="hidden md:flex"
      // Padding is handled via CSS instead
    >
      <NavigationMenuList className="flex space-x-2">
        {/* Animated menu items with staggered entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={itemVariants}
        >
          <ServicesMenu />
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={itemVariants}
        >
          <SustainabilityMenu />
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={itemVariants}
        >
          <CompanyMenu />
        </motion.div>        {/* Products Portfolio - Dropdown Menu */}
        <motion.div
          initial="hidden"
          animate="visible" 
          custom={3}
          variants={itemVariants}
        >
          <ProductsMenu />
        </motion.div>
      </NavigationMenuList>

      {/* Add this override style to ensure dropdown content has no width limits */}
      <style jsx global>{`
        .navigation-menu-viewport {
          width: auto !important;
          min-width: auto !important;
          max-width: none !important;
          padding: 0 32px !important;
        }
        
        /* Ensure ProductsMenu has enough space */
        [data-radix-navigation-menu-content] {
          width: auto !important;
          max-width: none !important;
        }
      `}</style>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
