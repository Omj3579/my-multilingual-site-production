import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  const { language, setLanguage } = useLanguage();
  const [categoryDescriptions, setCategoryDescriptions] = useState<Record<string, {
    labels?: Record<string, string>;
    content?: Record<string, { description: string }>;
  }>>({});
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  
  // Scroll behavior states
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fetch category descriptions dynamically from the public folder
  useEffect(() => {
    fetch('/products/categories/category_descriptions_multilingual.json')
      .then((response) => response.json())
      .then((data) => {
        setCategoryDescriptions(data.categories);
      })
      .catch((error) => console.error('Error loading category descriptions:', error));
  }, []);

  // Handle scroll behavior for hiding/showing navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if header should be visible
      if (currentScrollY < 50) {
        // Always show when near top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        // Scrolling down - hide header (with small threshold to prevent flickering)
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle language change
  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  // Check if current path matches category
  const isActiveCategory = (category: string) => {
    return router.pathname === `/products/${category}`;
  };

  // Language configuration with flags
  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'hu', flag: '🇭🇺', name: 'Magyar' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === language) || languages[0];
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Modern Navigation Header with Scroll Behavior - Fully Transparent */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full top-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-8 md:px-12 py-4">
          <div className="flex items-center justify-center h-20 md:h-28">
            {/* Enhanced Logo with transparent styling */}
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex-none bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-4 h-16 flex items-center justify-center"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="https://flair-plastic.hu/wp-content/uploads/2022/09/cropped-flair_plastic_logo_cmyk_full_-_MAIN.png.webp"
                  alt="Flair-Plastic Logo"
                  width={140}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Modern Categories Navigation */}
            <motion.div 
              className="flex items-center mx-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 px-8 py-4 h-16"
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <nav className="flex space-x-6 items-center">
                {/* All Products Link */}
                <Link
                  href="/products"
                  className={`relative font-semibold text-lg transition-colors group ${
                    router.pathname === '/products' 
                      ? 'text-[#fa9b6b] font-bold' 
                      : 'text-gray-700 hover:text-[#fa9b6b]'
                  }`}
                >
                  {language === 'en' ? 'All Products' : language === 'hu' ? 'Minden Termék' : 'Alle Produkte'}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fa9b6b] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                  {router.pathname === '/products' && (
                    <motion.span 
                      layoutId="activeIndicator" 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#fa9b6b]"
                    />
                  )}
                </Link>

                {/* Category Links */}
                {Object.keys(categoryDescriptions).map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={`/products/${category}`}
                      className={`relative font-semibold text-lg transition-colors group ${
                        isActiveCategory(category) 
                          ? 'text-[#fa9b6b] font-bold' 
                          : 'text-gray-700 hover:text-[#fa9b6b]'
                      }`}
                    >
                      {categoryDescriptions[category]?.labels?.[language] ||
                        categoryDescriptions[category]?.labels?.en ||
                        category}
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fa9b6b] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
                      {isActiveCategory(category) && (
                        <motion.span 
                          layoutId="activeIndicator" 
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#fa9b6b]"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Right Section - Just Language Switcher */}
            <div className="flex-none flex items-center">
              {/* Language Switcher */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 px-6 h-16 flex items-center justify-center"
              >
                <div
                  className="relative"
                  onMouseEnter={() => {
                    if (langDropdownTimeout.current) clearTimeout(langDropdownTimeout.current);
                    setLangDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    langDropdownTimeout.current = setTimeout(() => setLangDropdownOpen(false), 120);
                  }}
                >
                  <button
                    className="flex items-center gap-2 text-gray-700 hover:text-[#fa9b6b] font-semibold"
                    onClick={() => setLangDropdownOpen((open) => !open)}
                    type="button"
                    aria-label="Change language"
                  >
                    <span className="text-lg">{getCurrentLanguage().flag}</span>
                    <Languages className="h-4 w-4" />
                    <span className="uppercase font-bold">{language}</span>
                  </button>
                  {langDropdownOpen && (
                    <div className="absolute right-0 z-10 w-48 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 mt-2 overflow-hidden">
                      <div className="py-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              handleLanguageChange(lang.code as Language);
                              setLangDropdownOpen(false);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 text-sm w-full text-left transition-colors hover:bg-gray-50 ${
                              language === lang.code
                                ? 'bg-gradient-to-r from-[#fa9b6b]/10 to-[#fa9b6b]/5 text-[#fa9b6b] font-semibold'
                                : 'text-gray-700'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <div className="flex flex-col">
                              <span className="font-medium">{lang.name}</span>
                              <span className="text-xs text-gray-500 uppercase">{lang.code}</span>
                            </div>
                            {language === lang.code && (
                              <div className="ml-auto w-2 h-2 rounded-full bg-[#fa9b6b]"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default ProductLayout;
