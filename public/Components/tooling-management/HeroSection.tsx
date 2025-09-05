import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-amber-50/80 to-white overflow-hidden">
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-amber-100/30 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-gradient-radial from-amber-100/30 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="tooling-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#tooling-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-amber-600 mb-4">
              {language === 'en' ? 'Specialized Services' : 'Speciális Szolgáltatások'}
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-800 mb-6">
              <div className="mb-3">{language === 'en' ? 'Tooling' : 'Szerszám'}</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                {language === 'en' ? 'Management' : 'Kezelés'}
              </div>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg mb-8">
              {language === 'en' 
                ? 'Precision maintenance and management solutions for optimal tool performance and extended lifespan.'
                : 'Precíziós karbantartási és kezelési megoldások az optimális szerszámteljesítmény és a megnövelt élettartam érdekében.'}
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="#learn-more"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center group"
              >
                {language === 'en' ? 'Learn More' : 'Tudj Meg Többet'}
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
              
              <a
                href="/contact"
                className="border border-amber-200 hover:bg-amber-50 text-amber-700 px-8 py-3 rounded-full font-medium transition-all"
              >
                {language === 'en' ? 'Contact Us' : 'Kapcsolat'}
              </a>
            </div>
          </motion.div>
          
          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <div className="aspect-[16/9]">
                  <img
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/panoramic-cover-image-for-a-tooling-management-web-page-with-dimensions-of-1745x571.-The-im-1.png.webp"
                    alt={language === 'en' ? "Tooling Management" : "Szerszámkezelés"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-2xl p-4 max-w-[220px] border border-amber-100"
              >
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0 1 12 2v5h4a1 1 0 0 1 .82 1.573l-7 10A1 1 0 0 1 8 18v-5H4a1 1 0 0 1-.82-1.573l7-10a1 1 0 0 1 1.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {language === 'en' ? 'Enhanced Performance' : 'Javított Teljesítmény'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'en' 
                    ? 'Up to 40% longer tool lifespan with our management systems'
                    : 'Akár 40%-kal hosszabb szerszám élettartam a kezelési rendszereinkkel'}
                </p>
              </motion.div>
              
              {/* Accent Element */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-8 border-amber-100/50 z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
