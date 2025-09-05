import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Droplets, FlaskConical, Factory } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 100 
  });
  
  // Parallax effects
  const titleY = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.08]);
  const decorationY = useTransform(smoothProgress, [0, 1], [0, -80]);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: (clientX / window.innerWidth) - 0.5,
        y: (clientY / window.innerHeight) - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Enhanced 3D transform calculation
  const calcTransform = (factor = 1) => {
    return `perspective(1200px) rotateX(${mousePosition.y * 5 * factor}deg) rotateY(${mousePosition.x * -7 * factor}deg)`;
  };
  
  // Process steps data
  const processSteps = language === 'en' ? [
    { icon: <FlaskConical className="h-6 w-6" />, title: "Injection Phase", desc: "Melted plastic is injected into the mold to form the preform" },
    { icon: <Droplets className="h-6 w-6" />, title: "Blow Phase", desc: "The preform is stretched and blown into the final shape" },
    { icon: <Factory className="h-6 w-6" />, title: "Ejection Phase", desc: "The finished product is cooled and ejected from the mold" }
  ] : [
    { icon: <FlaskConical className="h-6 w-6" />, title: "Befecskendezési fázis", desc: "Az olvasztott műanyagot a szerszámba fecskendezzük az előforma kialakításához" },
    { icon: <Droplets className="h-6 w-6" />, title: "Fúvási fázis", desc: "Az előformát kifeszítjük és a végső alakra fújjuk" },
    { icon: <Factory className="h-6 w-6" />, title: "Kidobási fázis", desc: "A készterméket lehűtjük és kidobjuk a szerszámból" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden" ref={containerRef}>
      {/* Enhanced background with decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Technical pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
        
        {/* Animated gradient shapes */}
        <motion.div 
          className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/30 via-blue-50/20 to-transparent blur-[120px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -right-[10%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-amber-100/30 via-orange-50/20 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
        
        {/* Decorative circles */}
        <div className="absolute top-40 left-[10%] h-16 w-16 border border-blue-200/30 rounded-full hidden lg:block" />
        <motion.div 
          className="absolute bottom-[30%] right-[15%] h-24 w-24 border-2 border-dashed border-blue-200/40 rounded-full"
          style={{ y: decorationY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Main content container */}
      <div className="container max-w-[1600px] mx-auto px-6 pt-32 pb-20 flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:space-x-10">
          {/* Left content column */}
          <motion.div 
            className="w-full lg:w-1/2 pt-10 lg:pt-20"
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
              className="flex items-center gap-2 text-blue-600 mb-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="h-[2px] w-10 bg-blue-500"></div>
              <span className="uppercase tracking-wide text-sm font-medium">
                {language === 'en' ? 'Manufacturing Process' : 'Gyártási Folyamat'}
              </span>
            </motion.div>
            
            {/* Enhanced title treatment */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-[#333] leading-[1.05]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="block">
                {language === 'en' ? 'Injection Blow' : 'Fröccsöntés'}
              </span>
              <span className="block bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                {language === 'en' ? 'Moulding' : 'Fúvás'}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.div 
              className="mt-6 max-w-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
              }}
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                {language === 'en' 
                  ? "Our advanced injection blow moulding technology combines precision with efficiency, producing high-quality containers with superior clarity, consistency, and strength. Perfect for products requiring thick walls and transparent finishes."
                  : "Fejlett fröccsöntés-fúvási technológiánk ötvözi a pontosságot a hatékonysággal, kiváló minőségű, tiszta, következetes és erős tartályokat állít elő. Tökéletes választás vastag falú és átlátszó termékekhez."}
              </p>
            </motion.div>
            
            {/* Key features badges */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {[
                language === 'en' ? 'Higher Wall Thickness' : 'Nagyobb falvastagság',
                language === 'en' ? 'Crystal-Clear Clarity' : 'Kristálytiszta átlátszóság',
                language === 'en' ? 'Excellent Detail' : 'Kiváló részletesség',
                language === 'en' ? 'Material Efficiency' : 'Anyaghatékonyság'
              ].map((feature, i) => (
                <motion.span 
                  key={i}
                  className="px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium text-slate-700 backdrop-blur-sm border border-slate-100"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.95)" }}
                  style={{ transform: calcTransform(0.3) }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right hero image with enhanced effects */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative rounded-[40px_0px_40px_0px] lg:rounded-[70px_0px_70px_5px] overflow-hidden shadow-2xl transform-gpu"
              style={{ 
                height: "min(600px, 60vh)",
                scale: imageScale,
                transformStyle: 'preserve-3d',
                transform: calcTransform(0.2),
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Enhanced multi-layer gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-amber-800/20 mix-blend-multiply z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Main image */}
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/05/gk100.png.webp"
                alt={language === 'en' ? "Injection Blow Moulding" : "Fröccsöntés-fúvás"}
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
            
            {/* Floating spec badge */}
            <motion.div
              className="absolute -right-6 -bottom-10 lg:-right-6 lg:-bottom-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-30 max-w-[220px] border-l-4 border-blue-500"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ transform: calcTransform(0.5) }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-blue-900 text-sm">
                {language === 'en' ? 'Premium Quality' : 'Prémium Minőség'}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {language === 'en' 
                  ? "Our IBM process ensures crystal-clear transparency and precise wall thickness distribution."
                  : "IBM folyamatunk biztosítja a kristálytiszta átlátszóságot és a pontos falvastagság-eloszlást."}
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Process steps section */}
        <motion.div 
          className="mt-20 lg:mt-28 mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h3 
              className="text-2xl font-semibold mb-10 text-center text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {language === 'en' ? 'The Injection Blow Moulding Process' : 'A Fröccsöntés-fúvási Folyamat'}
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                  transition={{ delay: 0.8 + (i * 0.2), duration: 0.6 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  style={{ transform: calcTransform(0.3) }}
                >
                  <div className="flex items-start gap-5">
                    <div className="rounded-full w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 font-medium mb-1">STEP {i + 1}</div>
                      <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Subtle decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-50/50 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a
            href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>
              {language === 'en' ? 'Learn More About Our Services' : 'Tudjon meg többet szolgáltatásainkról'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
