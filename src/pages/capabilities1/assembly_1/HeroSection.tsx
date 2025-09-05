import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration errors by only rendering decorative elements client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-blue-50/30 pt-16 font-sans">
      {/* Decorative elements - client-side only to prevent hydration mismatch */}
      {isMounted && (
        <>
          <div className="absolute left-[5%] top-[10%] h-64 w-64 rounded-full bg-gradient-radial from-amber-100/10 to-transparent blur-3xl"></div>
          <div className="absolute right-[15%] top-[5%] h-32 w-32 rounded-full bg-gradient-radial from-blue-100/10 to-transparent blur-2xl"></div>
          <div className="absolute bottom-[5%] right-[10%] h-40 w-40 rounded-full bg-gradient-radial from-blue-100/10 to-transparent blur-2xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.015]">
            <svg width="100%" height="100%">
              <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="container mx-auto px-6 md:px-10">
        {/* Title with animated reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 md:text-base">
                {language === 'en' ? 'Our Services' : 'Szolgáltatásaink'}
              </h2>
              <h1 className="relative text-5xl font-bold leading-tight md:text-7xl lg:text-[100px]">
                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                  {language === 'en' ? 'Assembly' : 'Összeszerelés'}
                </span>
              </h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 hidden max-w-sm md:block md:mt-0"
            >
              <p className="text-lg text-gray-600">
                {language === 'en' 
                  ? 'Professional assembly services with precision and quality assurance at every step.'
                  : 'Professzionális összeszerelési szolgáltatások precizitással és minőségbiztosítással minden lépésben.'}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main content section with image and info card */}
        <div className="relative mt-8 md:mt-12 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 rounded-[40px] md:rounded-[70px_0px_70px_70px] overflow-hidden shadow-2xl shadow-blue-900/10"
          >
            {/* Image container */}
            <div className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full">
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/1.webp"
                alt={language === 'en' ? 'Assembly Hero Image' : 'Összeszerelés Főkep'}
                className="h-full w-full object-cover"
                loading="eager"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:max-w-lg md:right-auto"
            >
              <div className="rounded-2xl bg-white/90 p-6 backdrop-blur-sm md:p-8">
                <h3 className="mb-2 text-xl font-bold text-gray-900 md:text-2xl">
                  {language === 'en' ? 'Complete Assembly Solutions' : 'Komplett Összeszerelési Megoldások'}
                </h3>
                <p className="mb-4 text-gray-700">
                  {language === 'en' 
                    ? 'From simple component assembly to complex multi-stage processes, our facilities deliver precision and quality in every project.'
                    : 'Az egyszerű alkatrész összeszereléstől a komplex többlépcsős folyamatokig, létesítményeink minden projektben precizitást és minőséget biztosítanak.'}
                </p>
                <motion.a
                  href={language === 'en' ? '/capabilities/assembly/details' : '/kepessegek/osszeszereles/reszletek'}
                  className="group inline-flex items-center font-medium text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <span>{language === 'en' ? 'Learn more' : 'További információk'}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Secondary features list - mobile only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 block md:hidden"
          >
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Professional assembly services with precision and quality assurance at every step.'
                : 'Professzionális összeszerelési szolgáltatások precizitással és minőségbiztosítással minden lépésben.'}
            </p>
          </motion.div>
          
          {/* Stats or features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-6"
          >
            {[
              { 
                value: '99.8%', 
                label: language === 'en' ? 'Quality Rate' : 'Minőségi Ráta'
              },
              { 
                value: '24/7', 
                label: language === 'en' ? 'Production' : 'Gyártás'
              },
              { 
                value: '15+', 
                label: language === 'en' ? 'Years Experience' : 'Év Tapasztalat',
                className: 'hidden md:block'
              },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm ${stat.className || ''}`}
              >
                <div className="text-2xl font-bold text-blue-600 md:text-3xl">{stat.value}</div>
                <div className="text-sm text-gray-500 md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave separator */}
      {isMounted && (
        <div className="relative z-0 mt-10 md:mt-16">
          <svg 
            className="text-blue-50 w-full h-16 md:h-24" 
            viewBox="0 0 1440 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1440,20 1440,20 L1440,100 L0,100 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
