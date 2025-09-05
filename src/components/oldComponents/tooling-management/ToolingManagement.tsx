import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Wrench, Hammer, Shield, BarChart } from 'lucide-react';

const ToolingManagement = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const benefits = [
    {
      icon: Wrench,
      title: language === 'en' ? 'Extended Tool Life' : 'Meghosszabbított Szerszám Élettartam',
      description: language === 'en' 
        ? 'Our maintenance protocols extend tool lifespan by up to 40%.'
        : 'Karbantartási protokolljaink akár 40%-kal is meghosszabbítják a szerszámok élettartamát.'
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Minimized Downtime' : 'Minimalizált Állásidő',
      description: language === 'en'
        ? 'Proactive maintenance reduces unplanned production interruptions.'
        : 'A proaktív karbantartás csökkenti a nem tervezett termelési megszakításokat.'
    },
    {
      icon: CheckCircle,
      title: language === 'en' ? 'Quality Assurance' : 'Minőségbiztosítás',
      description: language === 'en'
        ? 'Well-maintained tools ensure consistent product quality.'
        : 'A jól karbantartott szerszámok biztosítják a termékminőség következetességét.'
    }
  ];

  return (
    <section className="relative font-sans text-gray-800 bg-white py-20 overflow-hidden">
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute right-0 top-40 w-[250px] h-[250px] rounded-full bg-gradient-radial from-amber-50/40 to-transparent blur-3xl"></div>
          <div className="absolute left-0 bottom-40 w-[300px] h-[300px] rounded-full bg-gradient-radial from-amber-50/30 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="tooling-dot-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.3" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#tooling-dot-grid)" />
            </svg>
          </div>
        </>
      )}

      {/* Background curves */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-r from-amber-50 to-orange-50/50 -skew-y-3 transform origin-left z-0" />
      <div className="absolute bottom-[150px] left-0 w-full h-[100px] bg-amber-50/30 -skew-y-2 transform origin-right z-0" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            {/* Eyebrow text */}
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-orange-600 mb-4">
              {language === 'en' ? 'Tools & Maintenance' : 'Szerszámok & Karbantartás'}
            </span>
            
            {/* Header */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="mr-2">{language === 'en' ? 'Precision' : 'Precíz'}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                {language === 'en' ? 'Tooling' : 'Szerszám'}
              </span>
              <br />
              {language === 'en' ? 'Maintenance for' : 'Karbantartás a'}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                {language === 'en' ? 'Optimal Performance' : 'Optimális Teljesítményért'}
              </span>
            </h2>

            {/* Description Paragraph */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg leading-relaxed text-gray-600 mb-10"
            >
              {language === 'en' 
                ? "At Flair-Plastic, we understand that the backbone of flawless production lies in the systematic maintenance of our tooling. Our comprehensive tool maintenance program is designed to ensure each tool operates at peak efficiency, minimizing downtime and extending its lifespan. By integrating state-of-the-art techniques and a rigorous maintenance schedule, we not only uphold but enhance the quality of the products we manufacture."
                : "A Flair-Plastic-nál tudjuk, hogy a kifogástalan gyártás alapja a szerszámok szisztematikus karbantartása. Átfogó szerszámkarbantartási programunkat úgy alakítottuk ki, hogy minden szerszám maximális hatékonysággal működjön, minimalizálva az állásidőt és meghosszabbítva élettartamát. A legkorszerűbb technikák és szigorú karbantartási ütemterv integrálásával nem csak fenntartjuk, hanem javítjuk az általunk gyártott termékek minőségét."}
            </motion.p>

            {/* Benefits Section */}
            <div className="mt-10">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center mb-4 shadow-sm">
                      <benefit.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image with Layered Design */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
            {/* Background layer with pattern */}
            <div className="absolute right-0 top-5 w-[85%] h-[85%] rounded-3xl bg-amber-50/50 border border-amber-100/50 z-0"></div>
            
            {/* Main Display Area */}
            <div className="relative z-10 w-full">
              {/* Featured Image Layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20"
              >
                <div className="rounded-[25px] overflow-hidden shadow-lg relative">
                  <img
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/Design-a-panoramic-cover-image-for-a-tooling-management-web-page-dimensions-1745x571-depicting-a-s.png.webp"
                    alt={language === 'en' ? "Tooling Management" : "Szerszámkezelés"}
                    className="w-full h-auto object-cover"
                  />
                  {/* Semi-transparent overlay gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Image caption overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <h3 className="text-white text-lg font-semibold drop-shadow-md">
                    {language === 'en' ? 'Advanced Tooling Technologies' : 'Fejlett Szerszámtechnológiák'}
                  </h3>
                </div>
              </motion.div>

              {/* Bottom right card - partially overlapping */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-[-30px] right-[-20px] bg-white rounded-2xl shadow-xl p-4 border-t border-l border-amber-100 z-30 max-w-[220px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800">
                    {language === 'en' ? 'ISO Certified' : 'ISO Tanúsított'}
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  {language === 'en' 
                    ? 'Our tooling management complies with ISO 9001 quality standards'
                    : 'Szerszámkezelésünk megfelel az ISO 9001 minőségi szabványoknak'}
                </p>
              </motion.div>

              {/* Top left card - partially overlapping */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-[-40px] left-[20px] bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg p-4 z-30 max-w-[180px] text-white"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Hammer className="h-4 w-4" />
                  <h4 className="text-sm font-bold">
                    {language === 'en' ? 'Tool Lifecycle' : 'Szerszám Életciklus'}
                  </h4>
                </div>
                <p className="text-xs opacity-90">
                  {language === 'en' 
                    ? 'Complete tracking from design to maintenance'
                    : 'Teljes nyomon követés a tervezéstől a karbantartásig'}
                </p>
              </motion.div>

              {/* Middle left floating metric card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="absolute left-[-30px] top-[40%] transform -translate-y-1/2 bg-white shadow-lg rounded-xl p-3 border border-amber-100 z-40"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-amber-100 p-1.5 rounded-full">
                    <BarChart className="h-4 w-4 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-amber-700 font-bold text-lg leading-none mb-0.5">+40%</p>
                    <p className="text-xs text-gray-500 leading-none">
                      {language === 'en' ? 'Extended lifespan' : 'Hosszabb élettartam'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right floating success metric */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute right-[-15px] top-[30%] bg-white shadow-lg rounded-full h-[80px] w-[80px] flex flex-col items-center justify-center border border-amber-100 z-40"
              >
                <p className="text-orange-600 font-bold text-xl leading-tight">99.7%</p>
                <p className="text-[10px] text-gray-500 leading-tight text-center px-1">
                  {language === 'en' ? 'Success rate' : 'Sikerességi arány'}
                </p>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-[-40px] right-[10%] w-[100px] h-[100px] border-4 border-amber-100 rounded-full opacity-40 z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-md"></div>

              {/* Bottom decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-[-50px] right-[20%] h-[3px] bg-gradient-to-r from-amber-300/50 to-orange-400/50 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolingManagement;
