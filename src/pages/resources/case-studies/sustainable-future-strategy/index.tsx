import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, Menu, X, Share2, Bookmark, Download } from 'lucide-react';

// Component imports
import Hero from './Hero';
import Overview from './Overview';
import InnovationTimeline from './InnovationTimeline'; // Fixed capitalization
import ProductShowcase from './ProductShowcase';
import SustainabilityImpact from './SustainabilityImpact';
import InnovationLab from './InnovationLab';
import GlobalPartnerships from './GlobalPartnerships';
import FutureRoadmap from './FutureRoadmap';
import CallToAction from './CallToAction';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';

// Define section type for better structure
const DecadeOfInnovationV3 = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Updated section IDs to match our components
  const sections = [
    { id: 'hero', name: { en: 'Overview', hu: 'Áttekintés' } },
    { id: 'summary', name: { en: 'Executive Summary', hu: 'Vezetői Összefoglaló' } },
    { id: 'timeline', name: { en: 'Innovation Timeline', hu: 'Innovációs Idővonal' } },
    { id: 'products', name: { en: 'Product Showcase', hu: 'Termék Bemutató' } },
    { id: 'sustainability', name: { en: 'Sustainability Impact', hu: 'Fenntarthatósági Hatás' } },
    { id: 'lab', name: { en: 'Innovation Lab', hu: 'Innovációs Labor' } },
    { id: 'partnerships', name: { en: 'Global Partnerships', hu: 'Globális Partnerségek' } },
    { id: 'roadmap', name: { en: 'Future Roadmap', hu: 'Jövő Ütemterv' } },
    { id: 'cta', name: { en: 'Get Involved', hu: 'Csatlakozz' } }
  ];

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setReadingProgress(scrollPercent);
    setIsScrolled(scrollTop > 100);
    setShowScrollTop(scrollTop > 1000);

    // Update active section
    const currentSection = sections.find(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, [sections]);

  // Add throttling to scroll event for better performance
  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const pageTitle = language === 'hu' 
    ? 'Egy Évtized Innováció és Együttműködés | STAR-PLUS Kft' 
    : 'A Decade of Innovation and Collaboration | STAR-PLUS Ltd';

  const pageDescription = language === 'hu'
    ? 'Fedezze fel 10 év áttörő innovációját, fenntartható fejlesztését és globális együttműködését. Komprehenzív esettanulmány a jövő technológiáiról és stratégiáiról.'
    : 'Explore 10 years of breakthrough innovation, sustainable development, and global collaboration. Comprehensive case study on future technologies and strategies.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={language === 'hu' ? 'innováció, fenntarthatóság, technológia, együttműködés, jövő, AI, automatizálás' : 'innovation, sustainability, technology, collaboration, future, AI, automation'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/case-studies/decade-innovation-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/images/case-studies/decade-innovation-twitter.jpg" />
        <link rel="canonical" href="https://starplus.hu/resources/case-studies/decade-of-innovation-collaboration-v3" />
      </Head>

      <div className="min-h-screen bg-gray-900 relative">
        {/* Reading Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />

        {/* Floating Navigation */}
        <motion.nav 
          className={`fixed top-4 right-4 z-40 transition-all duration-300 ${
            isScrolled ? 'bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-2' : ''
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            {/* Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>

            {/* Quick Actions */}
            {isScrolled && (
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                  <Download className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="absolute top-full right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-2">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                        activeSection === section.id 
                          ? 'bg-blue-500 text-white' 
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium">{section.name[language]}</span>
                      {activeSection === section.id && (
                        <motion.div 
                          className="w-2 h-2 bg-white rounded-full"
                          layoutId="activeIndicator"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg z-40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>        {/* Main Content */}
        <ResourcesLayout>
        <main>
        
          {sections.map(section => (
            <section key={section.id} id={section.id}>
              {section.id === 'hero' && <Hero />}
              {section.id === 'summary' && <Overview />}
              {section.id === 'timeline' && <InnovationTimeline />}
              {section.id === 'products' && <ProductShowcase />}
              {section.id === 'sustainability' && <SustainabilityImpact />}
              {section.id === 'lab' && <InnovationLab />}
              {section.id === 'partnerships' && <GlobalPartnerships />}
              {section.id === 'roadmap' && <FutureRoadmap />}
              {section.id === 'cta' && <CallToAction />}
            </section>
          ))}
        </main>
        </ResourcesLayout>
      </div>
    </>
  );
};

export default DecadeOfInnovationV3;