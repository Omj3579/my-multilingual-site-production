import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play, Zap, LineChart, Shield, Factory } from 'lucide-react';

const IMDTechnologyShowcase = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 100 
  });
  
  // Track elements in view for animations
  const [textRef, textInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [quoteRef, quoteInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  // Parallax effects
  const imageParallax = useTransform(smoothProgress, [0.1, 0.6], [50, -50]);
  const imageScale = useTransform(smoothProgress, [0.1, 0.6], [0.95, 1.05]);
  const quoteParallax = useTransform(smoothProgress, [0.3, 0.8], [50, -30]);
  const decorationParallax = useTransform(smoothProgress, [0.2, 0.9], [0, -100]);
  
  // Technical specifications data
  const techSpecs = language === 'en' ? [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Resolution",
      value: "Up to 300 DPI", 
      desc: "Achieve photo-realistic quality with our high-resolution printing capabilities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cycle Time",
      value: "15-45 seconds",
      desc: "Optimized production cycles for maximum efficiency and throughput"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Durability",
      value: "10+ year lifespan",
      desc: "Resistant to UV, chemicals, and mechanical abrasion"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Production",
      value: "50,000+ units/day",
      desc: "Scalable manufacturing capacity for projects of any size"
    }
  ] : [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Felbontás",
      value: "Akár 300 DPI", 
      desc: "Érjen el fotórealisztikus minőséget magas felbontású nyomtatási képességeinkkel"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ciklusidő",
      value: "15-45 másodperc",
      desc: "Optimalizált gyártási ciklusok a maximális hatékonyság és teljesítmény érdekében"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tartósság",
      value: "10+ év élettartam",
      desc: "Ellenáll az UV-nak, vegyszereknek és mechanikai kopásnak"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Gyártás",
      value: "50,000+ egység/nap",
      desc: "Skálázható gyártási kapacitás bármilyen méretű projekthez"
    }
  ];

  // Calculate a transition delay based on index
  const getDelay = (index, baseDelay = 0.2) => baseDelay + (index * 0.1);
  
  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Enhanced background with gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ebebeb] via-[#e0e2e5] to-[#212a1d] z-0" />
      
      {/* Technical background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient shape */}
        <motion.div 
          className="absolute -left-[20%] top-[40%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-50/20 via-indigo-50/10 to-transparent blur-[150px]"
          style={{ y: decorationParallax }}
          animate={{
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -right-[10%] bottom-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-amber-400/10 via-orange-300/10 to-transparent blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Decorative circles and lines */}
        <div className="absolute top-60 right-[5%] w-32 h-32 border-2 border-dashed border-slate-200/30 rounded-full" />
        <motion.div 
          className="absolute left-[10%] bottom-[30%] w-40 h-40 border border-white/10 rounded-full hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-[1440px] mx-auto pt-12 pb-24 px-6">
        {/* Top paragraph section */}
        <motion.div 
          ref={textRef}
          className="max-w-[960px] mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section badge */}
          <motion.div 
            className="flex items-center gap-2 text-blue-600 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-[2px] w-10 bg-blue-500"></div>
            <span className="uppercase tracking-wide text-sm font-medium">
              {language === 'en' ? 'Cutting-Edge Process' : 'Élvonalbeli Folyamat'}
            </span>
          </motion.div>
          
          <motion.p
            className="text-[#444] text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: textInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {language === 'en' 
              ? "By continuously refining our in-mould films and processes, we have developed an IMD technique that ensures high precision and cost-effectiveness across our global facilities. Our method not only optimizes your production process but also reduces operational costs, while consistently delivering superior image quality."
              : "Az öntőforma-fóliák és -folyamatok folyamatos finomításával olyan IMD-technikát fejlesztettünk ki, amely nagy pontosságot és költséghatékonyságot biztosít globális létesítményeinkben. Módszerünk nemcsak optimalizálja a gyártási folyamatot, hanem csökkenti a működési költségeket is, miközben következetesen kiváló képminőséget biztosít."
            }
          </motion.p>
        </motion.div>
        
        {/* Featured image section with enhanced presentation */}
        <motion.div 
          ref={imageRef}
          className="relative mx-auto mb-20" // Adjusted bottom margin for cleaner transition
          style={{ y: imageParallax }}
        >
          <motion.div
            className="relative rounded-[30px] overflow-hidden shadow-2xl mx-auto"
            style={{ 
              maxWidth: "1250px",
              scale: imageScale,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Advanced gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-bl from-blue-900/30 via-transparent to-amber-700/20 mix-blend-overlay z-10" 
              initial={{ opacity: 0 }}
              animate={{ opacity: imageInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            
            {/* Play button for expandable image/video */}
            <motion.button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: imageInView ? 1 : 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLightbox(true)}
            >
              <Play className="h-8 w-8 text-blue-600 ml-1" />
              
              {/* Animated ring around play button */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
            
            {/* Main image */}
            <img
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/ty1562-1.png.webp"
              alt={language === 'en' ? "IMD Technology" : "IMD Technológia"}
              className="w-full h-auto object-cover"
            />
            
            {/* Corner accent lines */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-14 h-14 z-20 pointer-events-none ${
                  pos === 'top-left' ? 'top-5 left-5' : 
                  pos === 'top-right' ? 'top-5 right-5' : 
                  pos === 'bottom-left' ? 'bottom-5 left-5' : 
                  'bottom-5 right-5'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0 }}
                transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <path 
                    d={
                      pos === 'top-left' ? "M2 2V24H6V6H24V2H2Z" : 
                      pos === 'top-right' ? "M54 2H32V6H50V24H54V2Z" : 
                      pos === 'bottom-left' ? "M2 54H24V50H6V32H2V54Z" : 
                      "M54 54V32H50V50H32V54H54Z"
                    }
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </motion.div>
            ))}
            
            {/* Technical specs floating card */}
            <motion.div
              className="absolute -right-5 -bottom-8 bg-white rounded-xl shadow-xl p-4 max-w-[220px] border-t-4 border-blue-500 z-30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-blue-700 text-sm mb-1">
                {language === 'en' ? 'Surface Finish Options' : 'Felületkezelési lehetőségek'}
              </h4>
              <p className="text-xs text-slate-600">
                {language === 'en' 
                  ? "Matte, glossy, textured, and soft-touch finishes available for all IMD applications" 
                  : "Matt, fényes, texturált és soft-touch felületek minden IMD alkalmazáshoz"}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Technical specifications cards - added padding-top for smoother transition */}
        <div ref={statsRef} className="relative mb-32 px-4 pt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  className={`bg-[#2a3626] rounded-xl p-6 border border-[#3d4b37] shadow-lg transition-all ${
                    activeSpec === i ? 'ring-2 ring-amber-400 transform scale-[1.02]' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 40 }}
                  transition={{ duration: 0.6, delay: getDelay(i, 0.3) }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setActiveSpec(i)}
                >
                  <div className="text-amber-400 mb-3">
                    {spec.icon}
                  </div>
                  <h4 className="text-white text-lg font-medium mb-1">{spec.title}</h4>
                  <div className="text-amber-400 text-xl font-bold mb-3">{spec.value}</div>
                  <p className="text-gray-300 text-sm">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Highlighted quote section with advanced text treatment */}
        <motion.div 
          ref={quoteRef}
          className="max-w-[1000px] mx-auto text-center px-6"
          style={{ y: quoteParallax }}
          initial={{ opacity: 0 }}
          animate={{ opacity: quoteInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-bold leading-snug text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: quoteInView ? 1 : 0, y: quoteInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {language === 'en' ? (
              <>
                In-mold decoration technology offers the flexibility to create{" "}
                <motion.span 
                  className="relative inline-block"
                  initial={{ perspective: 1000 }}
                  whileHover={{ rotateX: 10, rotateY: -10 }}
                >
                  <span className="text-[#fbbf24] font-bold relative z-10">
                    detailed, vibrant graphics
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-[#fbbf24]/20 blur-sm -z-10" 
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>{" "}
                and seamlessly integrate them into your product.
              </>
            ) : (
              <>
                A szerszámon belüli dekorációs technológia lehetővé teszi{" "}
                <motion.span 
                  className="relative inline-block"
                  initial={{ perspective: 1000 }}
                  whileHover={{ rotateX: 10, rotateY: -10 }}
                >
                  <span className="text-[#fbbf24] font-bold relative z-10">
                    részletes, élénk grafikák
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-[#fbbf24]/20 blur-sm -z-10" 
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>{" "}
                létrehozását és zökkenőmentes integrálását a termékbe.
              </>
            )}
          </motion.h2>
          
          {/* Added CTA button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: quoteInView ? 1 : 0, y: quoteInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
              className="inline-flex items-center gap-2 bg-[#fbbf24] hover:bg-amber-500 text-[#212a1d] py-3 px-6 rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                {language === 'en' ? 'Discuss Your Project' : 'Beszéljünk projektjéről'}
              </span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Image lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLightbox(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full bg-transparent rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full"
                onClick={() => setShowLightbox(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/05/ty1562-1.png.webp"
                alt={language === 'en' ? "IMD Technology Closeup" : "IMD Technológia Közelről"}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IMDTechnologyShowcase;
