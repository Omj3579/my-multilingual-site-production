import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import CapabilitiesLayout from '@/components/layouts/CapabilitiesLayout';

// Enhanced versions of your existing components (preserving original content)
import EnhancedHeroSection from './EnhancedHeroSection';
import EnhancedAssemblyComponent from './EnhancedAssemblyComponent';
import EnhancedAssemblySection from './EnhancedAssemblySection';
import EnhancedSolutionsBanner from './EnhancedSolutionsBanner';
import EnhancedCommitmentCallout from './EnhancedCommitmentCallout';

const Assembly = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll tracking for navigation and effects
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    setIsScrolled(scrolled);
    setShowScrollTop(window.scrollY > 500);

    // Active section detection
    const sections = ['hero', 'overview', 'capabilities', 'solutions', 'commitment'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CapabilitiesLayout>
      {/* Modern Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : 50 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3"
      >
        {[
          { id: 'hero', label: language === 'en' ? 'Hero' : 'Főoldal' },
          { id: 'overview', label: language === 'en' ? 'Overview' : 'Áttekintés' },
          { id: 'capabilities', label: language === 'en' ? 'Capabilities' : 'Képességek' },
          { id: 'solutions', label: language === 'en' ? 'Solutions' : 'Megoldások' },
          { id: 'commitment', label: language === 'en' ? 'Commitment' : 'Elkötelezettség' }
        ].map((section, index) => (
          <motion.div
            key={section.id}
            className="relative group"
            whileHover={{ scale: 1.2 }}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-blue-400'
              }`}
            />
            
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                {section.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Page Sections with Enhanced Components */}
      <div id="hero">
        <EnhancedHeroSection />
      </div>
      
      <div id="overview">
        <EnhancedAssemblyComponent />
      </div>
      
      <div id="capabilities">
        <EnhancedAssemblySection />
      </div>
      
      <div id="solutions">
        <EnhancedSolutionsBanner />
      </div>
      
      <div id="commitment">
        <EnhancedCommitmentCallout />
      </div>
    </CapabilitiesLayout>
  );
};

export default Assembly;