import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, Droplet, Trash2 } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const [scrollIndicator, setScrollIndicator] = useState(true);
  
  // Hide scroll indicator when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80 mix-blend-multiply z-10"></div>
        
        {/* Main background image */}
        <div className="absolute inset-0">
          <img 
            src="https://flair-plastic.hu/wp-content/uploads/2024/05/sustn_fin123.jpg.webp"
            alt="Ocean background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Particles/floating elements */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {/* Resin pellet particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-white/80 backdrop-blur-sm z-20`}
              style={{
                width: `${Math.random() * 12 + 8}px`,
                height: `${Math.random() * 12 + 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: [100, -20, 50, -50, 0], 
                opacity: [0, 0.8, 0.5, 0.9, 0]
              }}
              transition={{ 
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
          
          {/* Larger abstract water shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-300/10 mix-blend-soft-light blur-3xl"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8], 
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-400/10 mix-blend-soft-light blur-3xl"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ 
              scale: [1, 0.8, 1], 
              opacity: [0.6, 0.4, 0.6],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-30 flex flex-col h-full">
        {/* Top logo/badge */}
        <motion.div
          className="absolute top-10 left-10 z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           {/*<div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center justify-center">
            <img 
              src="/logos/OIP.webp" 
              alt="Operation Clean Sweep Logo"
              className="h-16 w-full object-cover"
            />
          </div>*/}
        </motion.div>
        
        {/* Main content area */}
        <div className="container mx-auto px-6 flex items-center justify-center h-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left text column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="md:w-7/12 text-center md:text-left"
            >
              {/* Badge pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 inline-flex items-center bg-blue-700/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-blue-400/30"
              >
                <Droplet size={16} className="text-blue-200 mr-2" />
                <span className="text-blue-100 text-sm font-medium">
                  {language === 'en' ? 'Environmental Initiative' : 'Környezetvédelmi Kezdeményezés'}
                </span>
              </motion.div>
              
              {/* Main heading */}
              <div className="relative">
                {/* Title with special styling */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-block mr-4"
                  >
                    {language === 'en' ? 'Operation' : 'Művelet'}
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative inline-block"
                  >
                    <span className="text-blue-200">
                      {language === 'en' ? 'Clean Sweep' : 'Tiszta Söprés'}
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-blue-400/60 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </motion.div>
                </h1>
              </div>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-blue-100 mb-8 max-w-xl"
              >
                {language === 'en' 
                  ? 'Committed to preventing plastic pellet, flake, and powder loss to the environment through responsible handling and containment practices.'
                  : 'Elkötelezve a műanyag granulátumok, pelyhek és porok környezetbe kerülésének megelőzése mellett felelősségteljes kezelési és elszigetelési gyakorlatok révén.'}
              </motion.p>
              
              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start"
              >
                {/* Stat 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/20">
                  <div className="text-3xl font-bold text-blue-200">30K</div>
                  <div className="text-sm text-blue-100">
                    {language === 'en' ? 'Tons of pellets yearly' : 'Tonna szemcse évente'}
                  </div>
                </div>
                
                {/* Stat 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/20">
                  <div className="text-3xl font-bold text-blue-200">40K</div>
                  <div className="text-sm text-blue-100">
                    {language === 'en' ? 'Pellets per kilogram' : 'Szemcse kilogrammonként'}
                  </div>
                </div>
                
                {/* Stat 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-white/20">
                  <div className="text-3xl font-bold text-blue-200">100%</div>
                  <div className="text-sm text-blue-100">
                    {language === 'en' ? 'Commitment to prevention' : 'Elkötelezettség a megelőzés mellett'}
                  </div>
                </div>
              </motion.div>
              
              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <a
                  href="#cleansweep-details"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
                >
                  <span>{language === 'en' ? 'Learn About Our Initiatives' : 'Ismerje Meg Kezdeményezéseinket'}</span>
                  <ArrowDown className="w-5 h-5 transition group-hover:animate-bounce" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right visual column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:block md:w-5/12 relative"
            >
              {/* Floating visual element */}
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl transform -rotate-6"></div>
                
                {/* Main visual - floating image */}
                <div className="relative bg-gradient-to-br from-blue-900/90 to-blue-700/90 rounded-3xl overflow-hidden border border-blue-400/30 shadow-2xl">
                  <div className="aspect-w-4 aspect-h-5 overflow-hidden">
                    <img
                      src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Close-up-image-showing-a-pair-of-hands-holding-a-handful-of-bright-yellow-resin-pellets-against-a-wh.png"
                      alt="Resin pellets in hands"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Visual overlay with icon */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-blue-900/70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-600 rounded-full p-2 mr-4">
                        <Trash2 className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-medium text-lg">
                        {language === 'en' ? 'Zero pellet loss goal' : 'Nulla szemcseveszteség cél'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-xl">
                  <div className="bg-blue-500 rounded-full p-2">
                    <Droplet className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-xl">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="bg-blue-100 rounded-full p-2"
                  >
                    <img 
                      src="https://flair-plastic.hu/wp-content/uploads/2024/05/sustainability_edited.jpg.webp" 
                      alt="Sustainability Icon"
                      className="w-5 h-5 object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {scrollIndicator && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 1.5 }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="flex flex-col items-center">
            <div className="text-white/60 text-sm mb-2">
              {language === 'en' ? 'Scroll to explore' : 'Görgessen a felfedezéshez'}
            </div>
            <ArrowDown className="text-white/80" />
          </div>
        </motion.div>
      )}
      
      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[80px]"
          fill="white"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>
      
      {/* Anchor point for scroll navigation */}
      <div id="cleansweep-details" className="absolute bottom-0"></div>
    </section>
  );
};

export default HeroSection;
