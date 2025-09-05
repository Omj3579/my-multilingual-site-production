import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './header/Logo';
import LanguageSwitcher from './header/LanguageSwitcher';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  
  // Check if we're on a products page
  const isProductsPage = router.pathname.startsWith('/products');
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
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Don't render the main header on products pages
  if (isProductsPage) {
    return null;
  }

  return (
    <>      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full top-0 z-50 transition-all duration-300"
      >        <div className="container mx-auto px-8 md:px-12 py-4">
          <div className="flex items-center justify-center h-20 md:h-28">            {/* Logo with clean white background - completely borderless */}
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex-none [&_*]:border-0 [&_*]:outline-0 [&_*]:shadow-none"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '16px 24px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '0 !important',
                boxShadow: 'none !important',
                outline: 'none !important',
                WebkitBoxShadow: 'none !important',
                MozBoxShadow: 'none !important',
              }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation - with neomorphic background and standardized height */}
            {!isMobile && (
              <motion.div 
                className="flex items-center mx-8"
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
                  padding: '16px 32px',
                  backdropFilter: 'blur(8px)',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="text-2xl font-semibold">
                  <DesktopNavigation />
                </div>
              </motion.div>
            )}

            {/* Right Section with neomorphic elements */}
            <div className="flex-none flex items-center space-x-4 md:space-x-6">              {/* Neomorphic Contact button for desktop - standardized height */}
              {!isMobile && (
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
                  className="hidden md:flex items-center text-white font-bold text-xl"
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
                    padding: '0 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Contact Us
                </motion.a>
              )}

              {/* Neomorphic Language switcher - standardized height */}
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
                  borderRadius: '18px',
                  padding: '0 24px',
                  backdropFilter: 'blur(8px)',
                  border: 'none',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="text-xl font-semibold">
                  <LanguageSwitcher />
                </div>
              </motion.div>              {/* Neomorphic Mobile menu toggle - standardized height */}
              {isMobile && (
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
                    className="focus:outline-none"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))',
                      boxShadow: `
                        15px 15px 30px rgba(0,0,0,0.1),
                        -15px -15px 30px rgba(255,255,255,0.8),
                        inset 0 0 15px rgba(255,255,255,0.2)
                      `,
                      borderRadius: '18px',
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
                      <X className="h-8 w-8 text-gray-700" />
                    ) : (
                      <Menu className="h-8 w-8 text-gray-700" />
                    )}
                  </motion.button>
                </AnimatePresence>
              )}
            </div>
          </div>          {/* Mobile Navigation Menu with neomorphic design */}
          <AnimatePresence>
            {isMenuOpen && isMobile && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-4"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,245,245,0.75))',
                  boxShadow: `
                    20px 20px 40px rgba(0,0,0,0.1),
                    -20px -20px 40px rgba(255,255,255,0.8),
                    inset 0 0 20px rgba(255,255,255,0.2)
                  `,
                  borderRadius: '25px',
                  margin: '0 16px 16px 16px',
                  padding: '20px',
                  backdropFilter: 'blur(10px)',
                }}
              ><div className="text-2xl font-semibold">
                  <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
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
