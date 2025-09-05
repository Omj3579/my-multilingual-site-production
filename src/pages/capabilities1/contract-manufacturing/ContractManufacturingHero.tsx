import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const ContractManufacturingHero = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Mouse position tracking for 3D effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll animations setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 100 
  });
  
  // Parallax effects
  const titleY = useTransform(smoothProgress, [0, 0.5], [0, -40]);
  const imageY = useTransform(smoothProgress, [0, 0.5], [0, 50]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.05]);
  const decorationY = useTransform(smoothProgress, [0, 1], [0, -80]);
  const badgeY = useTransform(smoothProgress, [0, 0.3], [0, -20]);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Calculate 3D transform based on mouse position
  const calcTransform = (factor = 1) => {
    return `perspective(2000px) rotateX(${mousePosition.y * 7 * factor}deg) rotateY(${mousePosition.x * -10 * factor}deg)`;
  };
  
  // Expertise cards data
  const expertiseCards = language === 'en' ? [
    { title: "Precision Engineering", desc: "Delivering tight tolerances and exceptional quality" },
    { title: "Complete Solutions", desc: "From concept to delivery with integrated services" },
    { title: "Global Reach", desc: "Supporting clients with worldwide manufacturing services" }
  ] : [
    { title: "Precíziós Mérnöki Munka", desc: "Szűk tűréshatárok és kivételes minőség biztosítása" },
    { title: "Teljes Körű Megoldások", desc: "A koncepcióktól a szállításig integrált szolgáltatásokkal" },
    { title: "Globális Jelenlét", desc: "Ügyfelek támogatása világszintű gyártási képességekkel" }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-b from-white to-slate-50 overflow-hidden min-h-[90vh] pt-20"
    >
      {/* Technical background with pattern and gradient overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -left-[15%] top-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-100/30 via-amber-50/20 to-transparent blur-[120px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -right-[10%] bottom-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-100/20 via-blue-50/15 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-40 left-[12%] h-16 w-16 border border-amber-200/30 rounded-full hidden lg:block"
          style={{ y: decorationY }}
        />
        <motion.div 
          className="absolute bottom-[30%] right-[15%] h-24 w-24 border-2 border-dashed border-amber-200/40 rounded-full"
          style={{ y: decorationY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Main content container */}
      <div className="container max-w-[1600px] mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start min-h-[700px]">
          {/* Left content column */}
          <motion.div 
            className="w-full lg:w-1/2 pt-10 lg:pt-24"
            ref={ref}
            style={{ y: titleY }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {/* Enhanced category badge */}
            <motion.div 
              className="inline-flex mb-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              style={{ transform: calcTransform(0.3) }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-amber-500 mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                {language === 'en' ? 'Manufacturing Services' : 'Gyártási Szolgáltatások'}
              </span>
            </motion.div>
            
            {/* Enhanced title treatment */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-[#333] leading-[1.05] mb-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="block">
                {language === 'en' ? 'Contract' : 'Szerződéses'}
              </span>
              <span className="block bg-gradient-to-r from-amber-600 to-amber-500 text-transparent bg-clip-text">
                {language === 'en' ? 'Manufacturing' : 'Gyártás'}
              </span>
            </motion.h1>
            
            {/* Description with gradient background */}
            <motion.div 
              className="relative mt-6 max-w-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
              }}
            >
              <p className="relative z-10 text-lg text-gray-600 leading-relaxed">
                {language === 'en' 
                  ? "End-to-end production solutions combining large-scale services with personalized service. From concept development to final delivery, we provide customized manufacturing excellence for your unique needs."
                  : "Végponttól végpontig terjedő gyártási megoldások, amelyek ötvözik a nagyléptékű képességeket a személyre szabott szolgáltatással. A koncepció kidolgozásától a végső szállításig egyedi gyártási kiválóságot biztosítunk az Ön egyedi igényeihez."}
              </p>
              <div className="absolute -left-4 -bottom-3 w-20 h-8 bg-amber-100 rounded-full blur-xl opacity-30" />
            </motion.div>
            
            {/* Expert areas cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {expertiseCards.map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                    backgroundColor: "rgba(255,255,255,0.95)" 
                  }}
                  style={{ transform: calcTransform(0.2) }}
                >
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              className="mt-10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }
              }}
            >
              <motion.button
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-3 px-6 rounded-lg font-medium group transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>
                  {language === 'en' ? 'Explore Our Services' : 'Fedezze Fel Szolgáltatásainkat'}
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right hero image with enhanced effects */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative rounded-[50px_0px_50px_0px] lg:rounded-[80px_0px_80px_5px] overflow-hidden shadow-2xl transform-gpu"
              style={{ 
                height: "min(550px, 60vh)",
                width: "100%",
                scale: imageScale,
                transformStyle: 'preserve-3d',
                transform: calcTransform(0.2),
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Multi-layer gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-amber-900/30 via-transparent to-blue-900/20 mix-blend-multiply z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Hero image */}
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/05/Close-up-view-of-a-technicians-hands-wearing-purple-gloves-assembling-electronic-components.-A-gre-1024x334.png.webp"
                alt={language === 'en' ? 'Contract Manufacturing' : 'Szerződéses Gyártás'}
                className="w-full h-full object-cover"
              />
              
              {/* Corner accent elements */}
              {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-12 h-12 z-20 pointer-events-none ${
                    pos === 'top-left' ? 'top-5 left-5' : 
                    pos === 'top-right' ? 'top-5 right-5' : 
                    pos === 'bottom-left' ? 'bottom-5 left-5' : 
                    'bottom-5 right-5'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path 
                      d={
                        pos === 'top-left' ? "M2 2V20H6V6H20V2H2Z" : 
                        pos === 'top-right' ? "M46 2H28V6H42V20H46V2Z" : 
                        pos === 'bottom-left' ? "M2 46H20V42H6V28H2V46Z" : 
                        "M46 46V28H42V42H28V46H46Z"
                      }
                      fill="white"
                      fillOpacity="0.9"
                    />
                  </svg>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Floating tech badge */}
            <motion.div
              className="absolute -right-6 -bottom-10 lg:-right-6 lg:-bottom-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-30 max-w-[220px] border-l-4 border-amber-500"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ y: badgeY, transform: calcTransform(0.5) }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-amber-800 text-sm">
                {language === 'en' ? 'Quality Assured' : 'Minőségbiztosított'}
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                {language === 'en' 
                  ? "ISO 9001 certified manufacturing with strict quality control at every production step."
                  : "ISO 9001 tanúsított gyártás szigorú minőségellenőrzéssel a gyártás minden lépésében."}
              </p>
            </motion.div>
            
            {/* Additional floating element */}
            <motion.div
              className="absolute top-10 -left-10 lg:top-20 lg:-left-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-100 z-20"
              style={{ y: badgeY, transform: calcTransform(0.4) }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-semibold bg-gradient-to-br from-amber-600 to-amber-500 text-transparent bg-clip-text">
                {language === 'en' ? '30+ Years Experience' : '30+ Év Tapasztalat'}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <svg className="absolute bottom-0 left-0 w-full text-white h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default ContractManufacturingHero;
