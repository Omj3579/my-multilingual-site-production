import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, Menu, X, Share2, Bookmark, Download } from 'lucide-react';

// New redesigned components
import AssemblyHero from './AssemblyHero';
import AssemblyOverview from './AssemblyOverview';
import AssemblyCapabilities from './AssemblyCapabilities';
import AssemblyShowcase from './AssemblyShowcase';
import AssemblyInnovation from './AssemblyInnovation';
import AssemblySolutions from './AssemblySolutions';
import AssemblyImpact from './AssemblyImpact';
import AssemblyCallToAction from './AssemblyCallToAction';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

const Assembly = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll tracking for navigation and effects
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 100);
    setShowScrollTop(scrollY > 1000);

    // Update active section based on scroll position
    const sections = ['hero', 'overview', 'capabilities', 'showcase', 'innovation', 'solutions', 'impact', 'cta'];
    const sectionElements = sections.map(id => document.getElementById(id));
    
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const element = sectionElements[i];
      if (element && element.offsetTop <= scrollY + 200) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Navigation items
  const navigationItems = [
    { id: 'hero', label: language === 'en' ? 'Overview' : 'Áttekintés' },
    { id: 'capabilities', label: language === 'en' ? 'Capabilities' : 'Képességek' },
    { id: 'showcase', label: language === 'en' ? 'Showcase' : 'Bemutató' },
    { id: 'innovation', label: language === 'en' ? 'Innovation' : 'Innováció' },
    { id: 'solutions', label: language === 'en' ? 'Solutions' : 'Megoldások' },
    { id: 'impact', label: language === 'en' ? 'Impact' : 'Hatás' }
  ];

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
      </Head>

      {/* Floating Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-semibold text-gray-900">
                {language === 'en' ? 'Assembly Services' : 'Összeszerelési Szolgáltatások'}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Share2 size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Bookmark size={20} />
              </motion.button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg"
              >
                <div className="py-4 space-y-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
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
        
        <section id="impact">
          <AssemblyImpact />
        </section>
        
        <section id="cta">
          <AssemblyCallToAction />
        </section>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform-gpu z-50"
        style={{
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0,
          transformOrigin: '0%'
        }}
      />
    </CapabilitiesLayout>
  );
};

export default Assembly;