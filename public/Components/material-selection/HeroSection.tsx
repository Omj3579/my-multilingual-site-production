import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown, Droplets, Zap, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-amber-50/80 to-white overflow-hidden">
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-amber-100/30 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-gradient-radial from-amber-100/30 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="material-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#material-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="container mx-auto px-4 md:px-6 pt-20 pb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center min-h-[70vh]">
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 md:pr-8 md:pt-8 z-20 mt-8 md:mt-0"
          >
            <span className="inline-block text-sm uppercase tracking-wider font-medium text-amber-600 mb-4">
              {language === 'en' ? 'Expert Guidance' : 'Szakértői Útmutatás'}
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="block text-gray-800">{language === 'en' ? 'Material' : 'Anyag'}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                {language === 'en' ? 'Selection' : 'választás'}
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl mb-8"
            >
              {language === 'en' 
                ? 'Precise material selection ensures optimal performance, compliance, and cost-efficiency in your plastic injection molding projects.'
                : 'A pontos anyagválasztás biztosítja a műanyag fröccsöntési projektjeinek optimális teljesítményét, megfelelőségét és költséghatékonyságát.'}
            </motion.p>
            
            {/* Key Benefits */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="space-y-4 mb-8"
            >
              {/* Benefit 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-center"
              >
                <div className="bg-amber-100 p-1.5 rounded-full mr-3">
                  <Droplets className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">
                  {language === 'en' 
                    ? 'Specialized materials for complex applications'
                    : 'Speciális anyagok komplex alkalmazásokhoz'}
                </span>
              </motion.div>
              
              {/* Benefit 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-center"
              >
                <div className="bg-amber-100 p-1.5 rounded-full mr-3">
                  <Zap className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">
                  {language === 'en' 
                    ? 'Performance-optimized polymer solutions'
                    : 'Teljesítmény-optimalizált polimer megoldások'}
                </span>
              </motion.div>
              
              {/* Benefit 3 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-center"
              >
                <div className="bg-amber-100 p-1.5 rounded-full mr-3">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-gray-700">
                  {language === 'en' 
                    ? 'Regulatory-compliant sustainable options'
                    : 'Szabályozásnak megfelelő fenntartható opciók'}
                </span>
              </motion.div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a 
                href="#material-details"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full transition-colors shadow-md hover:shadow-lg group"
              >
                <span>{language === 'en' ? 'Explore Materials' : 'Fedezze fel az anyagokat'}</span>
                <ChevronDown className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Image Area */}
          <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
            {/* Background pattern */}
            <div className="absolute top-8 right-8 bottom-8 left-8 border-2 border-dashed border-amber-200 rounded-[70px_0px_0px_5px] -z-10"></div>
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative overflow-hidden rounded-[70px_0px_0px_5px] shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Close-up-view-of-a-precision-machine-selecting-organizing-resin-pellets-in-a-pl1astic-factory.-The-.png.webp"
                  alt={language === 'en' ? 'Material Selection Process' : 'Anyagválasztási folyamat'}
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-8000 hover:scale-105"
                />
              </div>
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:left-6 bg-white rounded-2xl shadow-xl p-5 border border-amber-100 max-w-[260px] z-20"
            >
              <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">40+</span>
                </div>
                {language === 'en' ? 'Material Options' : 'Anyagválaszték'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? 'Access to a diverse range of polymers and composites to meet your exact specifications.'
                  : 'Hozzáférés a polimerek és kompozitok széles választékához, hogy megfeleljen az Ön pontos előírásainak.'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
      
      {/* Anchor point for CTA link */}
      <div id="material-details" className="-mt-32 pt-32"></div>
    </section>
  );
};

export default HeroSection;
