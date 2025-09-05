import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, Menu, X, Share2, Bookmark } from 'lucide-react';

// New redesigned components
import AssemblyHero from './hero';
import AssemblyOverview from './overview';
import AssemblyCapabilities from './capabilities';
import AssemblyShowcase from './showcase';
import AssemblyInnovation from './innovation';
import AssemblySolutions from './solutions'; // Interactive solutions showcase
import AssemblySolutionsBanner from './solutionsBanner'; // Solutions banner component
import AssemblyImpact from './impact';
import AssemblyCallToAction from './callToAction';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const Assembly = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Enhanced scroll tracking with progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });  // Enhanced scroll tracking for navigation and effects with directional header behavior
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    // Determine scroll direction and header visibility
    if (scrollY < 100) {
      // Hide header at the top
      setShowHeader(false);
    } else if (scrollY > lastScrollY) {
      // Scrolling down - show header
      setShowHeader(true);
    } else if (scrollY < lastScrollY) {
      // Scrolling up - hide header
      setShowHeader(false);
    }
    
    setLastScrollY(scrollY);
    setIsScrolled(scrollY > 100);
    setShowScrollTop(scrollY > 1000);
    
    // Update active section based on scroll position with error handling
    try {
      const sections = ['hero', 'overview', 'capabilities', 'showcase', 'innovation', 'solutions', 'solutions-banner', 'impact', 'cta'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollY + 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    } catch (error) {
      console.warn('Error updating active section:', error);
    }
  }, [lastScrollY]);
  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  // Handle sharing functionality
  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'en' 
            ? 'Assembly Services - Advanced Manufacturing Solutions' 
            : 'Összeszerelési Szolgáltatások - Fejlett Gyártási Megoldások',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  }, [language]);

  // Handle bookmark functionality
  const handleBookmark = useCallback(() => {
    // Add to browser bookmarks or local storage
    const bookmark = {
      title: language === 'en' 
        ? 'Assembly Services - Advanced Manufacturing Solutions' 
        : 'Összeszerelési Szolgáltatások - Fejlett Gyártási Megoldások',
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    
    // Store in localStorage for demo purposes
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [language]);  // Navigation items - memoized for performance
  const navigationItems = useMemo(() => [
    { id: 'hero', label: language === 'en' ? 'Overview' : 'Áttekintés' },
    { id: 'capabilities', label: language === 'en' ? 'Capabilities' : 'Képességek' },
    { id: 'showcase', label: language === 'en' ? 'Showcase' : 'Bemutató' },
    { id: 'innovation', label: language === 'en' ? 'Innovation' : 'Innováció' },
    { id: 'solutions', label: language === 'en' ? 'Solutions' : 'Megoldások' },
    { id: 'solutions-banner', label: language === 'en' ? 'Solutions Overview' : 'Megoldások Áttekintése' },
    { id: 'impact', label: language === 'en' ? 'Impact' : 'Hatás' }
  ], [language]);

  return (
    <CapabilitiesLayout>
      <Head>
        <title>
          {language === 'en' 
            ? 'Assembly Services - Advanced Manufacturing Solutions' 
            : 'Összeszerelési Szolgáltatások - Fejlett Gyártási Megoldások'
          }
        </title>
        <meta name="description" content={
          language === 'en'
            ? 'Comprehensive assembly services with cutting-edge technology and precision engineering for optimal manufacturing outcomes.'
            : 'Átfogó összeszerelési szolgáltatások élvonalbeli technológiával és precíziós mérnöki munkával az optimális gyártási eredményekért.'
        } />
      </Head>      {/* Floating Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showHeader ? 0 : -100,
          opacity: showHeader ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={`transition-all duration-300 rounded-full px-6 py-3 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-xl border border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-md shadow-lg border border-gray-200/30'
        }`}>
          <div className="flex items-center space-x-6">
            {/* Logo/Title - Compact for floating nav */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>              <span className="font-semibold text-gray-900 text-base hidden sm:block">
                {language === 'en' ? 'Assembly' : 'Összeszerelés'}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 px-3 py-1 rounded-full ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Action Buttons - Compact */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="p-1.5 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50"
                title={language === 'en' ? 'Share page' : 'Oldal megosztása'}
              >
                <Share2 size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookmark}
                className="p-1.5 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50"
                title={language === 'en' ? 'Bookmark page' : 'Oldal könyvjelzőzése'}
              >
                <Bookmark size={16} />
              </motion.button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-50"
                aria-label={isMenuOpen 
                  ? (language === 'en' ? 'Close menu' : 'Menü bezárása')
                  : (language === 'en' ? 'Open menu' : 'Menü megnyitása')
                }
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Adjusted for floating design */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200/50 mt-3 pt-3"
              >
                <div className="space-y-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}                      className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                        activeSection === item.id 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative">
        <section id="hero">
          <AssemblyHero />
        </section>
        
        <section id="overview">
          <AssemblyOverview />
        </section>
        
        <section id="capabilities">
          <AssemblyCapabilities />
        </section>
        
        <section id="showcase">
          <AssemblyShowcase />
        </section>
        
        <section id="innovation">
          <AssemblyInnovation />
        </section>
          <section id="solutions">
          <AssemblySolutions />
        </section>
        
        <section id="solutions-banner">
          <AssemblySolutionsBanner />
        </section>
        
        <section id="impact">
          <AssemblyImpact />
        </section>
        
        <section id="cta">
          <AssemblyCallToAction />
        </section>
      </main>      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={language === 'en' ? 'Scroll to top' : 'Görgetés tetejére'}
            title={language === 'en' ? 'Back to top' : 'Vissza a tetejére'}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>{/* Enhanced Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform-gpu z-50 origin-left"
        style={{ scaleX }}
      />
    </CapabilitiesLayout>
  );
};

export default Assembly;