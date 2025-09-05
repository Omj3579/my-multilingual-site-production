import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileServicesMenu } from './mobile/MobileServicesMenu';
import { MobileSustainabilityMenu } from './mobile/MobileSustainabilityMenu';
import { MobileCompanyMenu } from './mobile/MobileCompanyMenu';
import { ExternalLink, Phone, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { translations, language } = useLanguage();
  const router = useRouter();
  
  // Check if the current path matches the link href
  const isActive = (path: string) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="md:hidden border-t border-gray-100 overflow-hidden"
        >
          <div className="py-4 px-2">
            {/* Main navigation */}
            <nav className="flex flex-col space-y-1 mb-6">
              <motion.div variants={itemVariants} className="px-2 py-1.5 text-xs font-medium uppercase text-gray-500 tracking-wider">
                {language === 'en' ? 'Navigation' : 'Navigáció'}
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MobileServicesMenu onClose={onClose} />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MobileSustainabilityMenu onClose={onClose} />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MobileCompanyMenu onClose={onClose} />
              </motion.div>
              
              {/* Products Portfolio */}
              <motion.div variants={itemVariants}>
                <Link
                  href="/products"
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActive('/products')
                      ? 'bg-[#fa9b6b]/10 text-[#fa9b6b]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={onClose}
                >
                  <span>{translations['nav.products']?.[language]}</span>
                  {isActive('/products') && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fa9b6b]"></div>
                  )}
                </Link>
              </motion.div>
            </nav>

            {/* Quick contacts */}
            <div className="border-t border-gray-100 pt-4 px-2">
              <motion.div variants={itemVariants} className="px-2 py-1.5 text-xs font-medium uppercase text-gray-500 tracking-wider mb-2">
                {language === 'en' ? 'Quick Contact' : 'Gyors Kapcsolat'}
              </motion.div>
              
              <div className="space-y-2">
                <motion.a
                  href="tel:+36123456789"
                  variants={itemVariants}
                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-[#fa9b6b] transition-colors"
                >
                  <Phone size={16} className="mr-3 text-gray-400" />
                  <span>+36 1 234 5678</span>
                </motion.a>
                
                <motion.a
                  href="https://goo.gl/maps/yourmaplocation"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-[#fa9b6b] transition-colors"
                >
                  <MapPin size={16} className="mr-3 text-gray-400" />
                  <span>{language === 'en' ? 'Company Location' : 'Cég Helyszín'}</span>
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </motion.a>
              </div>
            </div>

            {/* Contact call to action */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 px-4"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full py-3 px-4 bg-[#fa9b6b] hover:bg-[#e86e40] text-white font-medium text-center rounded-lg transition-colors shadow-sm"
              >
                {language === 'en' ? 'Contact Us Now' : 'Lépjen kapcsolatba velünk'}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
