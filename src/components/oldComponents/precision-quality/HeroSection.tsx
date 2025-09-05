import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BadgeCheck, Gauge, MoveRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Quality metrics for the animated counters
  const metrics = [
    {
      value: '99.7',
      symbol: '%',
      label: language === 'en' ? 'First-Time Quality Rate' : 'Első alkalom minőségi arány'
    },
    {
      value: 'ISO',
      symbol: '9001',
      label: language === 'en' ? 'Quality Certification' : 'Minőségi tanúsítvány'
    },
    {
      value: '100',
      symbol: '%',
      label: language === 'en' ? 'Inspection Rate' : 'Ellenőrzési arány'
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background decorative elements */}
      {isMounted && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-300"></div>
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-100/30 to-transparent blur-3xl -z-10"></div>
          <div className="absolute bottom-40 left-20 w-[300px] h-[300px] rounded-full bg-gradient-radial from-blue-100/20 to-transparent blur-3xl -z-10"></div>
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="quality-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#quality-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Left Content Column */}
          <div className="relative z-10">
            {/* Mini Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 mb-6"
            >
              <BadgeCheck size={16} className="text-blue-500" />
              <span className="text-sm font-medium text-blue-700">
                {language === 'en' ? 'Quality Excellence' : 'Kiváló minőség'}
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-slate-800">
                {language === 'en' ? 'Uncover ' : 'Fedezze fel '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                {language === 'en' ? 'Quality' : 'a minőséget'}
              </span>
              <br />
              <span className="text-slate-700">
                {language === 'en' ? 'at ' : 'a '}
                <span className="font-extrabold">Flair-Plastic</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mb-8"
            >
              {language === 'en' 
                ? 'Precision and excellence are at the core of our manufacturing process, ensuring your products meet the highest industry standards.'
                : 'A precizitás és a kiválóság a gyártási folyamatunk középpontjában áll, biztosítva, hogy termékei megfeleljenek a legmagasabb iparági szabványoknak.'}
            </motion.p>

            {/* Key Points */}
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
              className="space-y-4 mb-10"
            >
              {/* Point 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-start"
              >
                <div className="bg-blue-100 p-1.5 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700">
                  {language === 'en' 
                    ? 'Comprehensive quality control across the entire production process'
                    : 'Átfogó minőségellenőrzés a teljes gyártási folyamat során'}
                </span>
              </motion.div>
              
              {/* Point 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-start"
              >
                <div className="bg-blue-100 p-1.5 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700">
                  {language === 'en' 
                    ? 'Advanced inspection equipment and testing protocols'
                    : 'Fejlett ellenőrző berendezések és tesztelési protokollok'}
                </span>
              </motion.div>
              
              {/* Point 3 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-start"
              >
                <div className="bg-blue-100 p-1.5 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-700">
                  {language === 'en' 
                    ? 'ISO-certified quality management systems'
                    : 'ISO-tanúsított minőségirányítási rendszerek'}
                </span>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a 
                href="#quality-details"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white rounded-full transition-colors shadow-md hover:shadow-lg group"
              >
                <span>{language === 'en' ? 'Explore Our Quality Systems' : 'Fedezze fel minőségi rendszereinket'}</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            {/* Background box decoration */}
            <div aria-hidden="true" className="absolute -top-4 -right-4 -bottom-4 -left-4 rounded-2xl bg-gradient-to-br from-blue-100/50 to-sky-100/50 transform rotate-2 hidden md:block"></div>
            
            {/* Secondary decoration */}
            <div aria-hidden="true" className="absolute inset-0 rounded-2xl border-2 border-dashed border-blue-200 transform -rotate-2 hidden md:block"></div>
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-2"
            >
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Image-of-two-quality-assurance-engineers-in-a-plastic-manufacturing-facility-closely-inspecting-m.png.webp"
                alt={language === 'en' ? 'Quality Assurance Engineers' : 'Minőségbiztosítási mérnökök'}
                className="w-full h-auto rounded-xl"
              />

              {/* Quality metrics floating cards */}
              <div className="absolute inset-0 z-10">
                {/* Top right metric */}
                <motion.div
                  initial={{ opacity: 0, y: -20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 border-t border-l border-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <Gauge className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-2xl font-bold text-slate-800">{metrics[0].value}</span>
                        <span className="text-lg font-medium text-blue-600">{metrics[0].symbol}</span>
                      </div>
                      <p className="text-xs text-slate-600">{metrics[0].label}</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Bottom left metric */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 border-b border-r border-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-bold text-slate-800">{metrics[1].value}</span>
                        <span className="text-lg font-medium text-blue-600">{metrics[1].symbol}</span>
                      </div>
                      <p className="text-xs text-slate-600">{metrics[1].label}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wavy divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"></path>
        </svg>
      </div>
      
      {/* Anchor point for CTA link */}
      <div id="quality-details" className="-mt-32 pt-32"></div>
    </section>
  );
};

export default HeroSection;
