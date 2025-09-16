import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ServicesMenu } from './navigation/ServicesMenu';
import { SustainabilityMenu } from './navigation/SustainabilityMenu';
import { CompanyMenu } from './navigation/CompanyMenu';
import { ProductsMenu } from './navigation/ProductsMenu';

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
      <NavigationMenuList className="flex space-x-0 md:space-x-1 xl:space-x-2">
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
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={itemVariants}
        >
          <ProductsMenu />
        </motion.div>
      </NavigationMenuList>

      {/* Optimized global styles for ultra-wide and responsive navigation dropdowns */}
      <style jsx global>{`
        /* Ensure proper z-index and positioning hierarchy */
        [data-radix-navigation-menu-root] {
          position: relative;
          z-index: 70;
        }
        
        /* Fix viewport container positioning with ultra-generous sizing */
        [data-radix-navigation-menu-viewport] {
          position: relative !important;
          z-index: 70 !important;
          overflow: hidden !important;
          border-radius: 1rem;
          background: white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: fit-content !important;
          max-width: min(98vw, 1700px) !important;
          min-width: 900px !important;
        }
        
        /* Fix content positioning */
        [data-radix-navigation-menu-content] {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          pointer-events: auto !important;
        }
        
        /* Ultra-wide dropdown container - optimized for content display */
        .navigation-dropdown-container {
          width: 1300px;
          max-width: min(98vw, 1300px);
          min-width: 900px;
        }
        
        /* Extra-large dropdown container for ProductsMenu */
        .navigation-dropdown-container.large {
          width: 1400px;
          max-width: min(90vw, 1400px);
          min-width: 1000px;
        }
        
        /* Responsive adjustments - maintain ultra-wide sizes */
        @media (max-width: 1600px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(95vw, 1400px) !important;
          }
          .navigation-dropdown-container {
            width: 1100px;
            max-width: min(95vw, 1100px);
          }
          .navigation-dropdown-container.large {
            width: 1300px;
            max-width: min(95vw, 1300px);
          }
        }
        
        @media (max-width: 1400px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(92vw, 1200px) !important;
          }
          .navigation-dropdown-container {
            width: 1000px;
            max-width: min(92vw, 1000px);
          }
          .navigation-dropdown-container.large {
            width: 1200px;
            max-width: min(92vw, 1200px);
          }
        }
        
        @media (max-width: 1200px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(90vw, 1000px) !important;
          }
          .navigation-dropdown-container {
            width: 900px;
            max-width: min(90vw, 900px);
          }
          .navigation-dropdown-container.large {
            width: 1000px;
            max-width: min(90vw, 1000px);
          }
        }
        
        @media (max-width: 1024px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(88vw, 900px) !important;
            min-width: 700px !important;
          }
          .navigation-dropdown-container {
            width: 800px;
            max-width: min(88vw, 800px);
            min-width: 700px;
          }
          .navigation-dropdown-container.large {
            width: 900px;
            max-width: min(88vw, 900px);
            min-width: 750px;
          }
        }
        
        @media (max-width: 768px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(95vw, 700px) !important;
            min-width: 500px !important;
          }
          .navigation-dropdown-container {
            width: 650px;
            max-width: min(95vw, 650px);
            min-width: 500px;
          }
          .navigation-dropdown-container.large {
            width: 700px;
            max-width: min(95vw, 700px);
            min-width: 550px;
          }
        }
        
        @media (max-width: 640px) {
          [data-radix-navigation-menu-viewport] {
            max-width: 98vw !important;
            min-width: 400px !important;
          }
          .navigation-dropdown-container {
            width: calc(100vw - 1rem);
            max-width: calc(100vw - 1rem);
            min-width: 400px;
          }
          .navigation-dropdown-container.large {
            width: calc(100vw - 1rem);
            max-width: calc(100vw - 1rem);
            min-width: 400px;
          }
        }
        
        /* Optimized grid layouts for better card distribution */
        .navigation-dropdown-container .grid {
          display: grid;
          gap: 1.5rem;
        }
        
        .navigation-dropdown-container .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(250px, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-3 {
          grid-template-columns: repeat(3, minmax(220px, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-4 {
          grid-template-columns: repeat(4, minmax(200px, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-5 {
          grid-template-columns: repeat(5, minmax(180px, 1fr));
        }
        
        /* Advanced responsive grid adjustments for optimal card distribution */
        @media (min-width: 768px) {
          .navigation-dropdown-container .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(280px, 1fr));
          }
          .navigation-dropdown-container .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(250px, 1fr));
          }
          .navigation-dropdown-container .md\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(220px, 1fr));
          }
          .navigation-dropdown-container .md\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(200px, 1fr));
          }
        }
        
        @media (min-width: 1024px) {
          .navigation-dropdown-container .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(260px, 1fr));
          }
          .navigation-dropdown-container .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(240px, 1fr));
          }
          .navigation-dropdown-container .lg\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(220px, 1fr));
          }
        }
        
        @media (min-width: 1200px) {
          .navigation-dropdown-container .xl\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(260px, 1fr));
          }
          .navigation-dropdown-container .xl\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(240px, 1fr));
          }
          .navigation-dropdown-container .xl\\:grid-cols-6 {
            grid-template-columns: repeat(6, minmax(200px, 1fr));
          }
        }
        
        /* Responsive grid fallbacks for smaller screens */
        @media (max-width: 640px) {
          .navigation-dropdown-container .grid-cols-2,
          .navigation-dropdown-container .md\\:grid-cols-2,
          .navigation-dropdown-container .grid-cols-3,
          .navigation-dropdown-container .md\\:grid-cols-3,
          .navigation-dropdown-container .grid-cols-4,
          .navigation-dropdown-container .md\\:grid-cols-4,
          .navigation-dropdown-container .grid-cols-5,
          .navigation-dropdown-container .md\\:grid-cols-5,
          .navigation-dropdown-container .lg\\:grid-cols-3,
          .navigation-dropdown-container .lg\\:grid-cols-4,
          .navigation-dropdown-container .lg\\:grid-cols-5,
          .navigation-dropdown-container .xl\\:grid-cols-4,
          .navigation-dropdown-container .xl\\:grid-cols-5,
          .navigation-dropdown-container .xl\\:grid-cols-6 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
        
        /* Improved text layout with optimal spacing */
        .navigation-dropdown-container h3,
        .navigation-dropdown-container h4,
        .navigation-dropdown-container h5 {
          word-wrap: break-word;
          overflow-wrap: break-word;
          line-height: 1.3;
          margin-bottom: 0.625rem;
        }
        
        .navigation-dropdown-container p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          line-height: 1.5;
          margin-bottom: 0.875rem;
        }
        
        /* Optimized cards with better proportions */
        .navigation-dropdown-container .group {
          padding: 1.5rem;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        /* Better visual hierarchy for cards */
        .navigation-dropdown-container .group:hover {
          transform: translateY(-3px);
          transition: all 0.3s ease;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Optimize section spacing for ultra-wide layouts */
        .navigation-dropdown-container > div {
          margin-bottom: 2rem;
        }
        
        .navigation-dropdown-container > div:last-child {
          margin-bottom: 0;
        }
        
        /* Enhanced badge and icon positioning */
        .navigation-dropdown-container .inline-flex {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        /* Custom scrollbar styling for dropdown containers */
        .navigation-dropdown-container [class*="overflow-y-auto"]::-webkit-scrollbar {
          width: 8px;
        }
        
        .navigation-dropdown-container [class*="overflow-y-auto"]::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
        }
        
        .navigation-dropdown-container [class*="overflow-y-auto"]::-webkit-scrollbar-thumb {
          background: rgba(250, 155, 107, 0.3);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        .navigation-dropdown-container [class*="overflow-y-auto"]::-webkit-scrollbar-thumb:hover {
          background: rgba(250, 155, 107, 0.5);
        }
        
        /* Firefox scrollbar styling */
        .navigation-dropdown-container [class*="overflow-y-auto"] {
          scrollbar-width: thin;
          scrollbar-color: rgba(250, 155, 107, 0.3) rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </NavigationMenu>
  );
};

export default DesktopNavigation;