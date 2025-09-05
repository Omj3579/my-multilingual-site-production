import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const CEOCard = () => {
  const { language } = useLanguage();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('experience'); // 'experience', 'vision', 'achievements'
  
  // Mouse tracking for subtle 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Content for the three tabs
  const tabContent = {
    experience: {
      en: "Peter joined Flair-Plastic as CEO in January 2024, from Alvelo Ltd, having demonstrated robust leadership in sales and operations management. His extensive knowledge in FMCG sales and years of strategic market expansion have been invaluable to the growth of Flair-Plastic.",
      hu: "Péter 2024 januárjában csatlakozott a Flair-Plastic-hez vezérigazgatóként az Alvelo Ltd-től, ahol kiemelkedő vezetői képességeket mutatott az értékesítés és a működés irányításában. Az FMCG értékesítésben szerzett széles körű ismeretei és a stratégiai piaci terjeszkedésben szerzett több éves tapasztalata felbecsülhetetlen értéket jelentett a Flair-Plastic növekedésében."
    },
    vision: {
      en: "Leadership roles include significant positions at Reckitt, where he served as Sales Business Unit Leader, and at Well Done Kft, where he was the Sales and Marketing Director overseeing Hungary, Slovakia, and Romania, and most recently as COO for Alvelo Ltd.",
      hu: "Vezetői pozíciói között jelentős szerepet töltött be a Reckittnél, ahol értékesítési üzletág vezetőként dolgozott, valamint a Well Done Kft-nél, ahol értékesítési és marketing igazgatóként felügyelte Magyarországot, Szlovákiát és Romániát, legutóbb pedig az Alvelo Ltd operatív igazgatójaként tevékenykedett."
    },
    achievements: {
      en: "Under Peter's leadership, Flair-Plastic has enhanced operational efficiency by 24%, expanded into two new European markets, and implemented advanced quality control systems that have reduced defect rates to industry-leading levels.",
      hu: "Péter vezetése alatt a Flair-Plastic 24%-kal javította működési hatékonyságát, két új európai piacra terjeszkedett ki, és olyan fejlett minőségellenőrzési rendszereket vezetett be, amelyek az iparági vezető szintre csökkentették a hibaarányt."
    }
  };

  return (
    <div className="px-6 pt-16 pb-20 bg-gradient-to-b from-white to-gray-50">
      {/* Magazine-style header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="relative flex items-center justify-center">
          <motion.div 
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-[#FFAB77]/10 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <motion.div 
            className="absolute right-10 -bottom-6 w-16 h-16 bg-[#FFAB77]/5 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          
          <div className="relative z-10 text-center">
            <motion.p 
              className="text-sm md:text-base uppercase tracking-widest text-gray-500 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              {language === 'en' ? "Leading by example" : "Példamutatással vezetve"}
            </motion.p>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {language === 'en' ? "Our Vision Bearer" : "Víziónk Hordozója"}
            </motion.h2>
            
            <motion.div
              className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-[#FFAB77] to-[#e57b48] mx-auto mt-4 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="h-full w-full bg-white/50"
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main content with diagonal split design */}
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            rotateX,
            rotateY
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          onMouseMove={handleMouseMove}
        >
          {/* Diagonal overlay */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="absolute -left-5 -top-5 right-1/3 -bottom-5 bg-gradient-to-br from-[#FFAB77]/10 to-transparent transform rotate-3 md:-rotate-6 rounded-3xl"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFAB77] to-[#e57b48] z-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
            {/* Image Section - Now on right with angle clip path */}
            <motion.div 
              className="relative md:col-span-5 md:order-2 overflow-hidden z-10 h-[400px] md:h-auto"
              initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              animate={{ 
                clipPath: isInView 
                  ? "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" 
                  : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
              }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent z-10"></div>
              
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/J.Peter_-768x899.png"
                alt={language === 'en' ? "Peter Jekő" : "Jekő Péter"}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Vertical text along image */}
              <div className="absolute bottom-10 -left-6 transform -rotate-90 origin-right z-20">
                <motion.div 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="h-[2px] w-10 bg-white"></div>
                  <p className="text-xs uppercase tracking-widest text-white font-light">
                    Flair-Plastic
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Text Section with tabs */}
            <div className="md:col-span-7 md:order-1 p-8 md:p-14 flex flex-col justify-between relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-10"
                >
                  <div className="inline-flex items-center mb-3 px-4 py-1.5 bg-[#FFAB77]/10 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[#FFAB77]"></div>
                    <span className="ml-2 text-sm font-medium text-[#e57b48]">
                      {language === 'en' ? "Chief Executive Officer" : "Vezérigazgató"}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-[#333] mb-2">
                    {language === 'en' ? "Peter Jekő" : "Jekő Péter"}
                  </h3>
                  
                  <div className="flex items-center">
                    <div className="h-[2px] w-10 bg-[#FFAB77]/50 mr-3"></div>
                    <p className="text-lg font-medium text-gray-500">
                      {language === 'en' ? "Visionary Leader" : "Jövőbe látó vezető"}
                    </p>
                  </div>
                </motion.div>
                
                {/* Tab navigation */}
                <motion.div 
                  className="flex space-x-2 md:space-x-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {['experience', 'vision', 'achievements'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        activeTab === tab 
                          ? 'bg-[#FFAB77] text-white font-medium shadow-md' 
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {language === 'en' 
                        ? tab.charAt(0).toUpperCase() + tab.slice(1) 
                        : tab === 'experience' 
                          ? 'Tapasztalat' 
                          : tab === 'vision' 
                            ? 'Vízió' 
                            : 'Eredmények'}
                    </button>
                  ))}
                </motion.div>
                
                {/* Tab content with animated transitions */}
                <motion.div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-base md:text-lg leading-relaxed text-gray-600 space-y-4"
                    >
                      <p>
                        {language === 'en' 
                          ? tabContent[activeTab].en 
                          : tabContent[activeTab].hu}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
              
              {/* Bottom section with signature and social */}
              <motion.div 
                className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {/* Signature */}
                <div className="mb-4 md:mb-0">
                  <motion.svg 
                    width="150" 
                    height="50" 
                    viewBox="0 0 150 50" 
                    className="text-[#333]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  >
                    <motion.path
                      d="M5,25 C20,10 35,40 50,20 C65,0 80,30 95,25 C110,20 125,35 145,15"
                      fill="transparent"
                      strokeWidth="2"
                      stroke="currentColor"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isInView ? 1 : 0 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </motion.svg>
                </div>
                
                {/* Social links */}
                <div className="flex space-x-4">
                  {['linkedin', 'email', 'twitter'].map((social) => (
                    <motion.a 
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FFAB77]/10 hover:text-[#e57b48] transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social === 'linkedin' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      )}
                      {social === 'email' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      )}
                      {social === 'twitter' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CEOCard;
