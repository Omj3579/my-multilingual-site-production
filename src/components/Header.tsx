import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { useIsMobile, useIsTablet, useIsSmallLaptop } from '@/hooks/use-mobile';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './header/Logo';
import MainLanguageSwitcher from './header/MainLanguageSwitcher';
import ProductLanguageSwitcher from './header/ProductLanguageSwitcher';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';
import ProductMobileMenu from './header/ProductMobileMenu';
import ProductsNavigationBar from './header/navigation/ProductsNavigationBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmallLaptop = useIsSmallLaptop();
  const router = useRouter();
  const { language } = useLanguage();
  
  // Check if we're on a products page
  const isProductsPage = router.pathname.startsWith('/products');
  
  // Define product categories for mobile menu
  const productCategories = [
    { label: 'Home', href: '/products/home' },
    { label: 'Kitchen', href: '/products/kitchen' },
    { label: 'Garden', href: '/products/garden' },
    { label: 'Kids', href: '/products/kids' },
    { label: 'Active', href: '/products/active' },
    { label: 'Pallets', href: '/products/pallets' },
  ];
  
  // Determine if we should show mobile menu (mobile + tablet only, not small laptop)
  const shouldShowMobileMenu = isMobile || isTablet;
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
      
      setShowScrollTop(currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!shouldShowMobileMenu && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [shouldShowMobileMenu, isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render the main header on products pages - products pages will use unified header
  // Removed: if (isProductsPage) { return null; }

  return (
    <>      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full top-0 z-[60] transition-all duration-300"
      >        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4">
          <div className={`flex items-center ${isProductsPage ? 'h-16 sm:h-18 md:h-20 lg:h-24' : shouldShowMobileMenu ? 'h-16 sm:h-18 md:h-20 lg:h-24' : 'h-18 sm:h-20 md:h-22 lg:h-28'} ${isProductsPage ? 'gap-4 lg:gap-4 justify-center' : shouldShowMobileMenu ? 'justify-center gap-3' : 'justify-center gap-2 lg:gap-3'}`}>            {/* Logo with enhanced design and branding */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex-none relative group"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                borderRadius: shouldShowMobileMenu ? '20px' : (isSmallLaptop ? '16px' : '20px'),
                padding: shouldShowMobileMenu ? '16px 20px' : (isSmallLaptop ? '12px 16px' : '16px 20px'),
                height: shouldShowMobileMenu ? '64px' : (isSmallLaptop ? '52px' : '64px'),
                width: shouldShowMobileMenu ? '80px' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `
                  0 10px 25px -5px rgba(0, 0, 0, 0.1),
                  0 8px 10px -6px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.6)
                `,
                border: '1px solid rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Subtle background pattern */}
              <div 
                className="absolute inset-0 opacity-30 rounded-[inherit]" 
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(250, 155, 107, 0.1), transparent 50%)'
                }}
              />
              
              {/* Logo component */}
              <div className="relative z-10">
                <Logo />
              </div>
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(250, 155, 107, 0.05), rgba(232, 110, 64, 0.05))',
                  boxShadow: '0 0 20px rgba(250, 155, 107, 0.15)'
                }}
              />
            </motion.div>

            {/* Desktop Navigation - fit content size instead of full width */}
            {!shouldShowMobileMenu && (
              <motion.div 
                className="flex items-center"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,245,245,0.75))',
                  boxShadow: `
                    15px 15px 30px rgba(0,0,0,0.08),
                    -15px -15px 30px rgba(255,255,255,0.7),
                    inset 0 0 15px rgba(255,255,255,0.1)
                  `,
                  borderRadius: '25px',
                  padding: '10px 12px',
                  backdropFilter: 'blur(8px)',
                  height: isSmallLaptop ? '56px' : '64px',
                  width: 'fit-content',
                }}
              >
                <div className="text-lg md:text-xl xl:text-2xl font-semibold">
                  {isProductsPage ? (
                    <ProductsNavigationBar />
                  ) : (
                    <DesktopNavigation />
                  )}
                </div>
              </motion.div>
            )}

            {/* Right Section with responsive elements */}
            <div className={`flex-none flex items-center ${isProductsPage ? 'space-x-0' : 'space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-4'}`}>              {/* Contact button - responsive sizing and visibility - hidden on products pages */}
              {!shouldShowMobileMenu && !isProductsPage && (
                <motion.a
                  href="/contact"                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: `
                      8px 8px 16px rgba(0,0,0,0.05),
                      -8px -8px 16px rgba(255,255,255,0.4),
                      inset 0 0 8px rgba(250,155,107,0.05)
                    `
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center text-white font-bold text-lg xl:text-xl"
                  style={{
                    background: 'linear-gradient(145deg, #fa9b6b, #e86e40)',
                    boxShadow: `
                      6px 6px 12px rgba(232,110,64,0.1),
                      -6px -6px 12px rgba(250,155,107,0.3),
                      inset 0 0 6px rgba(255,255,255,0.05)
                    `,
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    height: '64px',
                    padding: '0 24px',
                    minWidth: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {language === 'en' ? 'Contact Us' : 'Kapcsolat'}
                </motion.a>
              )}

              {/* Language switcher - responsive sizing */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))',
                  boxShadow: `
                    15px 15px 30px rgba(0,0,0,0.1),
                    -15px -15px 30px rgba(255,255,255,0.8),
                    inset 0 0 15px rgba(255,255,255,0.2)
                  `,
                  borderRadius: shouldShowMobileMenu ? '20px' : (isSmallLaptop ? '16px' : '18px'),
                  padding: shouldShowMobileMenu ? '0 16px' : (isSmallLaptop ? '0 14px' : '0 18px'),
                  backdropFilter: 'blur(8px)',
                  border: 'none',
                  height: shouldShowMobileMenu ? '64px' : (isSmallLaptop ? '52px' : '64px'),
                  minWidth: shouldShowMobileMenu ? '72px' : 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className={shouldShowMobileMenu ? "text-lg font-semibold" : "text-lg xl:text-xl font-semibold"}>
                  {isProductsPage ? <ProductLanguageSwitcher /> : <MainLanguageSwitcher />}
                </div>
              </motion.div>              {/* Mobile menu toggle - show for mobile, tablet, and small laptop */}
              {shouldShowMobileMenu && (
                <AnimatePresence mode="wait">
                  <motion.button
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: isMenuOpen ? 0 : -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="focus:outline-none ml-2"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))',
                      boxShadow: `
                        15px 15px 30px rgba(0,0,0,0.1),
                        -15px -15px 30px rgba(255,255,255,0.8),
                        inset 0 0 15px rgba(255,255,255,0.2)
                      `,
                      borderRadius: '20px',
                      backdropFilter: 'blur(8px)',
                      border: 'none',
                      height: '64px',
                      width: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? (
                      <X className="h-6 w-6 xl:h-8 xl:w-8 text-gray-700" />
                    ) : (
                      <Menu className="h-6 w-6 xl:h-8 xl:w-8 text-gray-700" />
                    )}
                  </motion.button>
                </AnimatePresence>
              )}
            </div>
          </div>          {/* Mobile Navigation Menu - responsive design */}
          <AnimatePresence>
            {isMenuOpen && shouldShowMobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-3 md:mt-4"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,245,245,0.75))',
                  boxShadow: `
                    20px 20px 40px rgba(0,0,0,0.1),
                    -20px -20px 40px rgba(255,255,255,0.8),
                    inset 0 0 20px rgba(255,255,255,0.2)
                  `,
                  borderRadius: isSmallLaptop ? '20px' : '25px',
                  margin: '0 12px 12px 12px',
                  padding: isSmallLaptop ? '16px' : '20px',
                  backdropFilter: 'blur(10px)',
                }}
              ><div className="text-xl lg:text-2xl font-semibold">
                  {isProductsPage ? (
                    <ProductMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} categories={productCategories} />
                  ) : (
                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Removed gradient indicator since header is now fully transparent */}
      </motion.header>      {/* Neomorphic scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.15, 
              y: -3,
              boxShadow: `
                25px 25px 50px rgba(0,0,0,0.15),
                -25px -25px 50px rgba(255,255,255,0.9),
                inset 0 0 25px rgba(250,155,107,0.1)
              `
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))',
              boxShadow: `
                20px 20px 40px rgba(0,0,0,0.1),
                -20px -20px 40px rgba(255,255,255,0.8),
                inset 0 0 20px rgba(255,255,255,0.2)
              `,
              borderRadius: '20px',
              padding: '18px',
              backdropFilter: 'blur(10px)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-7 w-7 text-[#fa9b6b] font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;