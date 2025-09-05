import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 lg:py-24 overflow-hidden">
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
          <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full bg-gradient-radial from-orange-700/10 to-transparent blur-3xl"></div>
          <div className="absolute right-0 bottom-1/3 w-[400px] h-[400px] rounded-full bg-gradient-radial from-amber-700/10 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="commitment-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#commitment-grid)" />
            </svg>
          </div>
        </>
      )}
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Quote decoration */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-900/20">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          {/* Main Callout Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl px-8 md:px-16 py-14 md:py-20 shadow-xl border border-gray-700"
          >
            {/* Decorative accent lines */}
            <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-amber-500/30 rounded-tl-xl"></div>
            <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-amber-500/30 rounded-br-xl"></div>
            
            <p className="max-w-5xl mx-auto text-center text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed font-light tracking-wide">
              {language === 'en' ? (
                <>
                  At{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Flair–Plastic, precision
                  </span>{" "}
                  in tooling is not just a{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    goal—it's a guarantee
                  </span>
                  .<br className="hidden md:block" />
                  Our advanced{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    management systems
                  </span>{" "}
                  and maintenance protocols ensure that every tool is engineered to
                  perform optimally. Rely on us to uphold the highest standards of tool{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    integrity and efficiency
                  </span>
                  , making every{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    production cycle successful
                  </span>
                  .
                </>
              ) : (
                <>
                  A{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Flair–Plastic-nál a precizitás
                  </span>{" "}
                  a szerszámkezelésben nem csak egy{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    cél—hanem garancia
                  </span>
                  .<br className="hidden md:block" />
                  Fejlett{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    irányítási rendszereink
                  </span>{" "}
                  és karbantartási protokolljaink biztosítják, hogy minden szerszám optimális 
                  teljesítményre legyen tervezve. Számíthat ránk, hogy fenntartsuk a szerszámok{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    integritásának és hatékonyságának
                  </span>{" "}
                  legmagasabb színvonalát, így minden{" "}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    gyártási ciklus sikeres lesz
                  </span>
                  .
                </>
              )}
            </p>
            
            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-10 text-right"
            >
              <p className="text-gray-400 font-medium italic">
                — Flair-Plastic {language === 'en' ? 'Tooling Management Team' : 'Szerszámkezelési Csapat'}
              </p>
            </motion.div>
          </motion.div>
          
          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <a 
              href={language === 'en' ? '/contact' : '/kapcsolat'}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full shadow-lg shadow-amber-900/20 font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/30 hover:-translate-y-1"
            >
              {language === 'en' ? 'Speak With Our Tooling Experts' : 'Beszéljen Szerszámszakértőinkkel'}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Modern Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CommitmentCallout;
