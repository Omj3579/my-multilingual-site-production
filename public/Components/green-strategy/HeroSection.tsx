import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, ArrowDown, Globe, Recycle, Droplet } from 'lucide-react';

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
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-green-900 via-green-800 to-emerald-800">
      {/* Floating particles - environmental icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* These are decorative SVG elements that float around to create visual interest */}
        <motion.div 
          className="absolute text-green-300/20 top-1/4 left-1/4"
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        >
          <Leaf size={120} />
        </motion.div>
        
        <motion.div 
          className="absolute text-green-300/10 top-2/3 right-1/4"
          animate={{ 
            y: [0, 20, 0], 
            rotate: [0, -8, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
        >
          <Recycle size={160} />
        </motion.div>
        
        <motion.div 
          className="absolute text-green-400/10 bottom-1/3 left-1/3"
          animate={{ 
            y: [0, 10, 0], 
            rotate: [0, 3, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        >
          <Droplet size={100} />
        </motion.div>
        
        <motion.div 
          className="absolute text-green-300/10 top-1/3 right-1/5"
          animate={{ 
            y: [0, -12, 0], 
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 9,
            ease: "easeInOut" 
          }}
        >
          <Globe size={140} />
        </motion.div>
      </div>
      
      {/* Abstract wave pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"
                d="M0,100 C50,150 150,50 200,100 C250,150 350,50 400,100" />
              <path fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"
                d="M0,50 C50,100 150,0 200,50 C250,100 350,0 400,50" />
              <path fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"
                d="M0,150 C50,200 150,100 200,150 C250,200 350,100 400,150" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" className="text-green-100" />
        </svg>
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-green-700/0 to-green-900/70 z-0"></div>
      
      {/* Background Video - with proper overlay and performance improvements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70 mix-blend-multiply"></div>
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80"
          >
            <source src="https://flair-plastic.hu/wp-content/uploads/2024/05/forest-canopy.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80" 
              alt="Forest canopy sustainability background" 
              className="w-full h-full object-cover"
            />
          </video>
        </div>
      </div>

      {/* Content overlay with parallax effect */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            {/* Green pill badge */}
            <div className="inline-flex items-center bg-green-700/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-green-600/50">
              <Leaf size={16} className="text-green-300 mr-2" />
              <span className="text-green-100 text-sm font-medium">
                {language === 'en' ? 'Sustainability Initiative' : 'Fenntarthatósági Kezdeményezés'}
              </span>
            </div>
            
            {/* Main heading with animated highlight */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 relative">
              <div className="relative inline-block mr-2">
                {language === 'en' ? 'Our ' : 'Zöld '}
                <motion.span
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-3 bg-green-500/30 rounded-full -z-10"
                ></motion.span>
              </div>
              <span className="text-green-300">
                {language === 'en' ? 'Green' : 'Stratégiánk'}
              </span>
              {language === 'en' ? ' Strategy' : ''}
            </h1>
            
            {/* Description with animated reveal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-green-100/90 mb-8 max-w-lg"
            >
              {language === 'en'
                ? 'Leading the way in sustainable manufacturing with innovative solutions and environmental responsibility that shapes the future for generations to come.'
                : 'Vezető szerep a fenntartható gyártásban innovatív megoldásokkal és környezeti felelősségvállalással, amely alakítja a jövőt a következő generációk számára.'}
            </motion.p>
            
            {/* Key metrics row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start mb-10"
            >
              {/* Metric 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-green-400/20">
                <div className="text-3xl font-bold text-green-300">30%</div>
                <div className="text-sm text-green-100">
                  {language === 'en' ? 'Energy Reduction' : 'Energia csökkentés'}
                </div>
              </div>
              
              {/* Metric 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-green-400/20">
                <div className="text-3xl font-bold text-green-300">75%</div>
                <div className="text-sm text-green-100">
                  {language === 'en' ? 'Recycled Materials' : 'Újrahasznosított anyagok'}
                </div>
              </div>
              
              {/* Metric 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3 border border-green-400/20">
                <div className="text-3xl font-bold text-green-300">2030</div>
                <div className="text-sm text-green-100">
                  {language === 'en' ? 'Carbon Neutral Goal' : 'Karbonsemleges cél'}
                </div>
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="#sustainability-details"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
              >
                <span>{language === 'en' ? 'Discover Our Initiatives' : 'Fedezze fel kezdeményezéseinket'}</span>
                <ArrowDown className="w-5 h-5 transition group-hover:animate-bounce" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right column with rotating globe or sustainability visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex items-center justify-center md:w-1/2"
          >
            <div className="relative">
              {/* Glowing orb background effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300/30 to-green-600/30 blur-3xl"></div>
              
              {/* Globe illustration or custom SVG */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="w-[400px] h-[400px] relative"
                >
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="250" cy="250" r="230" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.2" />
                    <circle cx="250" cy="250" r="200" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.3" />
                    <circle cx="250" cy="250" r="170" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.4" />
                    <circle cx="250" cy="250" r="140" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.5" />
                    <circle cx="250" cy="250" r="110" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.6" />
                    <circle cx="250" cy="250" r="80" fill="none" stroke="#ECFDF5" strokeWidth="1" opacity="0.7" />
                    
                    {/* Orbiting elements */}
                    <g>
                      <circle cx="450" cy="250" r="12" fill="#10B981" />
                      <circle cx="50" cy="250" r="8" fill="#6EE7B7" />
                      <circle cx="250" cy="450" r="10" fill="#34D399" />
                      <circle cx="250" cy="50" r="15" fill="#A7F3D0" />
                      <circle cx="380" cy="380" r="8" fill="#D1FAE5" />
                      <circle cx="120" cy="120" r="6" fill="#6EE7B7" />
                      <circle cx="380" cy="120" r="10" fill="#10B981" />
                      <circle cx="120" cy="380" r="12" fill="#34D399" />
                    </g>
                    
                    {/* Center earth illustration */}
                    <circle cx="250" cy="250" r="60" fill="url(#earthGradient)" />
                    <defs>
                      <radialGradient id="earthGradient" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#A7F3D0" />
                        <stop offset="100%" stopColor="#059669" />
                      </radialGradient>
                    </defs>
                  </svg>
                </motion.div>
                
                {/* Overlaid leaf */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Leaf size={80} className="text-green-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/70"
        >
          <ArrowDown size={24} />
        </motion.div>
      )}

      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[100px]"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-[#f2f2f2]" />
        </svg>
      </div>
      
      {/* Anchor point for scroll navigation */}
      <div id="sustainability-details" className="absolute bottom-0"></div>
    </section>
  );
};

export default HeroSection;
