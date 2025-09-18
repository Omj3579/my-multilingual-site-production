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

      {/* Optimized global styles for responsive navigation dropdowns with proper viewport handling */}
      <style jsx global>{`
        /* Ensure proper z-index and positioning hierarchy with perfect centering */
        [data-radix-navigation-menu-root] {
          position: relative;
          z-index: 70;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Fix viewport container positioning with optimal width and right-side positioning */
        [data-radix-navigation-menu-viewport] {
          position: absolute !important;
          z-index: 70 !important;
          overflow: visible !important;
          border-radius: 1rem;
          background: white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: fit-content !important;
          max-width: min(90vw, 1200px) !important;
          min-width: min(700px, 80vw) !important;
          max-height: min(75vh, 650px) !important;
          overflow-y: auto !important;
          /* Better right-biased positioning */
          left: 60% !important;
          transform: translateX(-30%) !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        
        /* Fix content positioning - allow natural content flow */
        [data-radix-navigation-menu-content] {
          position: relative !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: auto !important;
          pointer-events: auto !important;
          overflow: visible !important;
          /* Natural content flow without forced centering */
          margin: 0 !important;
          display: block !important;
        }
        
        /* Global navigation menu viewport positioning - balanced right alignment */
        [data-radix-navigation-menu-viewport] {
          position: absolute !important;
          left: 60% !important;
          transform: translateX(-30%) !important;
          top: 100% !important;
          margin-top: 8px !important;
          z-index: 70;
          /* Ensure positioning favors the right side while staying within viewport */
          right: auto !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          /* Conservative clipping prevention */
          min-width: 0 !important;
          max-width: 90vw !important;
        }
        
        /* Responsive dropdown container - stable width without dynamic padding */
        .navigation-dropdown-container {
          width: min(1100px, 88vw);
          max-width: min(88vw, 1100px);
          min-width: min(700px, 80vw);
          position: relative;
          margin: 0 auto;
          max-height: min(70vh, 550px);
          overflow-y: auto;
          /* Simple centering without complex calculations */
          left: 0;
          transform: none;
          right: auto;
          /* Fixed padding for consistent layout */
          box-sizing: border-box;
          padding: 1.5rem;
        }
        
        /* Large dropdown container for ProductsMenu - stable dimensions without dynamic padding */
        .navigation-dropdown-container.large {
          width: min(1300px, 90vw);
          max-width: min(90vw, 1300px);
          min-width: min(900px, 85vw);
          position: relative;
          margin: 0 auto;
          max-height: min(75vh, 650px);
          overflow-y: auto;
          /* Simple centering without complex calculations */
          left: 0;
          transform: none;
          right: auto;
          /* Fixed padding for consistent layout */
          box-sizing: border-box;
          padding: 1.5rem;
        }
        
        /* Responsive adjustments for laptop and small desktop screens - stable sizing */
        @media (max-width: 1600px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(88vw, 1150px) !important;
            max-height: min(72vh, 600px) !important;
            left: 58% !important;
            transform: translateX(-28%) !important;
          }
          .navigation-dropdown-container {
            width: min(1000px, 86vw);
            max-width: min(86vw, 1000px);
            min-width: min(650px, 80vw);
            max-height: min(70vh, 580px);
            padding: 1.25rem;
          }
          .navigation-dropdown-container.large {
            width: min(1200px, 88vw);
            max-width: min(88vw, 1200px);
            min-width: min(800px, 82vw);
            max-height: min(72vh, 620px);
            padding: 1.25rem;
          }
        }
        
        @media (max-width: 1400px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(86vw, 1050px) !important;
            max-height: min(70vh, 580px) !important;
            left: 56% !important;
            transform: translateX(-26%) !important;
          }
          .navigation-dropdown-container {
            width: min(900px, 84vw);
            max-width: min(84vw, 900px);
            min-width: min(600px, 78vw);
            max-height: min(68vh, 560px);
            padding: 1rem;
          }
          .navigation-dropdown-container.large {
            width: min(1100px, 86vw);
            max-width: min(86vw, 1100px);
            min-width: min(750px, 80vw);
            max-height: min(70vh, 600px);
            padding: 1rem;
          }
        }
        
        @media (max-width: 1200px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(90vw, 1000px) !important;
            max-height: min(78vh, 700px) !important;
            left: 58% !important;
            transform: translateX(-28%) !important;
          }
          .navigation-dropdown-container {
            width: min(950px, 87vw);
            max-width: min(87vw, 950px);
            min-width: min(700px, 82vw);
            max-height: min(75vh, 680px);
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .navigation-dropdown-container.large {
            width: min(1150px, 89vw);
            max-width: min(89vw, 1150px);
            min-width: min(800px, 84vw);
            max-height: min(77vh, 720px);
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 1024px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(92vw, 950px) !important;
            min-width: min(650px, 86vw) !important;
            max-height: min(75vh, 650px) !important;
            left: 55% !important;
            transform: translateX(-25%) !important;
          }
          .navigation-dropdown-container {
            width: min(900px, 89vw);
            max-width: min(89vw, 900px);
            min-width: min(650px, 84vw);
            max-height: min(73vh, 630px);
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .navigation-dropdown-container.large {
            width: min(1100px, 91vw);
            max-width: min(91vw, 1100px);
            min-width: min(750px, 86vw);
            max-height: min(75vh, 670px);
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          [data-radix-navigation-menu-viewport] {
            max-width: min(96vw, 700px) !important;
            min-width: min(400px, 92vw) !important;
            max-height: min(70vh, 500px) !important;
          }
          .navigation-dropdown-container {
            width: min(650px, 94vw);
            max-width: min(94vw, 650px);
            min-width: min(400px, 90vw);
            max-height: min(68vh, 450px);
          }
          .navigation-dropdown-container.large {
            width: min(700px, 96vw);
            max-width: min(96vw, 700px);
            min-width: min(450px, 92vw);
            max-height: min(47vh, 320px);
          }
        }
        
        @media (max-width: 640px) {
          [data-radix-navigation-menu-viewport] {
            max-width: 98vw !important;
            min-width: min(280px, 95vw) !important;
            max-height: min(45vh, 300px) !important;
          }
          .navigation-dropdown-container {
            width: calc(100vw - 2rem);
            max-width: calc(100vw - 2rem);
            min-width: min(280px, 95vw);
            max-height: min(40vh, 280px);
          }
          .navigation-dropdown-container.large {
            width: calc(100vw - 1.5rem);
            max-width: calc(100vw - 1.5rem);
            min-width: min(300px, 96vw);
            max-height: min(42vh, 300px);
          }
        }
        
        /* Optimized grid layouts for better card distribution */
        .navigation-dropdown-container .grid {
          display: grid;
          gap: 1rem;
        }
        
        .navigation-dropdown-container .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(200px, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-3 {
          grid-template-columns: repeat(3, minmax(180px, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-4 {
          grid-template-columns: repeat(4, minmax(160px, 1fr));
        }
        
        .navigation-dropdown-container .grid-cols-5 {
          grid-template-columns: repeat(5, minmax(140px, 1fr));
        }
        
        /* Aggressive icon size reduction for better space utilization */
        .navigation-dropdown-container [data-radix-navigation-menu-content] svg,
        .navigation-dropdown-container .lucide,
        .navigation-dropdown-container .w-8,
        .navigation-dropdown-container .h-8,
        .navigation-dropdown-container .w-6,
        .navigation-dropdown-container .h-6 {
          width: 1.25rem !important;
          height: 1.25rem !important;
          min-width: 1.25rem !important;
          min-height: 1.25rem !important;
        }
        
        /* Optimize spacing and padding for better content fit */
        .navigation-dropdown-container [data-radix-navigation-menu-content] {
          padding: 0.75rem !important;
        }
        
        .navigation-dropdown-container .p-6 {
          padding: 0.75rem !important;
        }
        
        .navigation-dropdown-container .p-4 {
          padding: 0.5rem !important;
        }
        
        .navigation-dropdown-container .gap-6 {
          gap: 0.75rem !important;
        }
        
        .navigation-dropdown-container .gap-4 {
          gap: 0.5rem !important;
        }
        
        /* Reduce text sizes and line heights for compact display */
        .navigation-dropdown-container h3,
        .navigation-dropdown-container .text-lg {
          font-size: 0.95rem !important;
          line-height: 1.3 !important;
          margin-bottom: 0.25rem !important;
        }
        
        .navigation-dropdown-container p,
        .navigation-dropdown-container .text-sm {
          font-size: 0.8rem !important;
          line-height: 1.25 !important;
          margin-bottom: 0.125rem !important;
        }
        
        .navigation-dropdown-container .text-xs {
          font-size: 0.7rem !important;
          line-height: 1.2 !important;
        }
        
        /* Optimize card height for better content fit */
        .navigation-dropdown-container .aspect-square,
        .navigation-dropdown-container .min-h-0 {
          min-height: auto !important;
          height: auto !important;
        }
        
        /* Reduce margins and improve vertical spacing */
        .navigation-dropdown-container .mb-4 {
          margin-bottom: 0.5rem !important;
        }
        
        .navigation-dropdown-container .mb-2 {
          margin-bottom: 0.25rem !important;
        }
        
        .navigation-dropdown-container .mt-2 {
          margin-top: 0.25rem !important;
        }
        
        .navigation-dropdown-container .space-y-2 > * + * {
          margin-top: 0.25rem !important;
        }
        
        .navigation-dropdown-container .space-y-4 > * + * {
          margin-top: 0.5rem !important;
        }
        
        /* Advanced responsive grid adjustments for optimal card distribution */
        @media (min-width: 768px) {
          .navigation-dropdown-container .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
          }
          .navigation-dropdown-container .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(200px, 1fr));
          }
          .navigation-dropdown-container .md\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(180px, 1fr));
          }
          .navigation-dropdown-container .md\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(160px, 1fr));
          }
        }
        
        @media (min-width: 1024px) {
          .navigation-dropdown-container .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(200px, 1fr));
          }
          .navigation-dropdown-container .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(180px, 1fr));
          }
          .navigation-dropdown-container .lg\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(160px, 1fr));
          }
        }
        
        @media (min-width: 1200px) {
          .navigation-dropdown-container .xl\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(200px, 1fr));
          }
          .navigation-dropdown-container .xl\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(180px, 1fr));
          }
          .navigation-dropdown-container .xl\\:grid-cols-6 {
            grid-template-columns: repeat(6, minmax(160px, 1fr));
          }
        }
        
        /* Responsive grid fallbacks for smaller screens */
        @media (max-width: 1024px) {
          .navigation-dropdown-container .grid-cols-3,
          .navigation-dropdown-container .md\\:grid-cols-3,
          .navigation-dropdown-container .lg\\:grid-cols-3,
          .navigation-dropdown-container .xl\\:grid-cols-4,
          .navigation-dropdown-container .xl\\:grid-cols-5,
          .navigation-dropdown-container .xl\\:grid-cols-6 {
            grid-template-columns: repeat(2, minmax(150px, 1fr));
          }
        }
        
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
        
        /* Improved text layout with optimal spacing and responsive sizing */
        .navigation-dropdown-container h3,
        .navigation-dropdown-container h4,
        .navigation-dropdown-container h5 {
          word-wrap: break-word;
          overflow-wrap: break-word;
          line-height: 1.3;
          margin-bottom: 0.5rem;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
        }
        
        .navigation-dropdown-container p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          font-size: clamp(0.8rem, 1.8vw, 0.95rem);
        }
        
        /* Optimized cards with better proportions and height constraints - reduced for better fit */
        .navigation-dropdown-container .group {
          padding: 0.875rem;
          min-height: 110px;
          max-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        
        /* Responsive card adjustments */
        @media (max-width: 1024px) {
          .navigation-dropdown-container .group {
            padding: 0.75rem;
            min-height: 100px;
            max-height: 140px;
          }
        }
        
        @media (max-width: 768px) {
          .navigation-dropdown-container .group {
            padding: 0.625rem;
            min-height: 90px;
            max-height: 120px;
          }
        }
        
        /* Better visual hierarchy for cards */
        .navigation-dropdown-container .group:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
          box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Optimize section spacing for responsive layouts */
        .navigation-dropdown-container > div {
          margin-bottom: 1.5rem;
        }
        
        .navigation-dropdown-container > div:last-child {
          margin-bottom: 0;
        }
        
        /* Enhanced badge and icon positioning */
        .navigation-dropdown-container .inline-flex {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        /* Reduced icon sizes to fit more content without scrolling */
        .navigation-dropdown-container svg,
        .navigation-dropdown-container img {
          width: 20px !important;
          height: 20px !important;
          max-width: 20px !important;
          max-height: 20px !important;
        }
        
        .navigation-dropdown-container .w-6,
        .navigation-dropdown-container .h-6 {
          width: 20px !important;
          height: 20px !important;
        }
        
        .navigation-dropdown-container .w-8,
        .navigation-dropdown-container .h-8 {
          width: 24px !important;
          height: 24px !important;
        }
        
        .navigation-dropdown-container .w-12,
        .navigation-dropdown-container .h-12 {
          width: 28px !important;
          height: 28px !important;
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
        
        /* Perfect viewport centering for all dropdown containers with clipping prevention */
        .navigation-dropdown-container,
        .navigation-dropdown-container.large {
          position: relative;
          margin: 0 auto;
          /* Enhanced centering techniques with bounds protection */
          display: block;
          text-align: left;
          /* Remove problematic centering that causes clipping */
          left: auto !important;
          transform: none !important;
          right: auto !important;
          /* Ensure full visibility within viewport */
          overflow-x: visible;
          max-width: calc(100vw - 2rem);
        }
        
        /* Ensure dropdown content is properly contained within viewport */
        [data-radix-navigation-menu-viewport] > div {
          display: block;
          width: 100%;
          max-width: 100%;
          overflow-x: visible;
        }
        
        /* Remove problematic centering that causes clipping */
        .navigation-dropdown-container > * {
          margin-left: 0;
          margin-right: 0;
        }
        
        /* Smart viewport positioning system - better right positioning with reduced width */
        [data-radix-navigation-menu-viewport] {
          /* Use CSS custom properties for better right-side positioning */
          --dropdown-offset-left: max(3rem, calc(65vw - 650px));
          --dropdown-offset-right: max(1rem, calc(35vw - 300px));
          left: var(--dropdown-offset-left) !important;
          right: var(--dropdown-offset-right) !important;
          transform: none !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          width: auto !important;
        }
        
        /* Compact text styling to fit more content without scrolling */
        .navigation-dropdown-container h3,
        .navigation-dropdown-container h4 {
          line-height: 1.2 !important;
          margin-bottom: 0.25rem !important;
        }
        
        .navigation-dropdown-container p {
          line-height: 1.3 !important;
          margin-bottom: 0.375rem !important;
          font-size: 0.85rem !important;
        }
        
        .navigation-dropdown-container .space-y-4 > * + * {
          margin-top: 0.75rem !important;
        }
        
        .navigation-dropdown-container .space-y-3 > * + * {
          margin-top: 0.5rem !important;
        }
        
        .navigation-dropdown-container .space-y-2 > * + * {
          margin-top: 0.375rem !important;
        }
      `}</style>
    </NavigationMenu>
  );
};

export default DesktopNavigation;