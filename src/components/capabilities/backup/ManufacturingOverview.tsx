import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

const ManufacturingOverview = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Mouse movement for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothScrollProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Parallax values
  const backgroundY = useTransform(smoothScrollProgress, [0, 1], ['0%', '30%']);
  const videoY = useTransform(smoothScrollProgress, [0, 0.5, 1], ['0%', '-5%', '-10%']);
  const textY = useTransform(smoothScrollProgress, [0, 1], ['0%', '-8%']);
  
  // Decorative elements movement
  const circle1X = useTransform(smoothScrollProgress, [0, 1], ['0%', '-10%']);
  const circle1Y = useTransform(smoothScrollProgress, [0, 1], ['0%', '20%']);
  const circle2X = useTransform(smoothScrollProgress, [0, 1], ['0%', '10%']);
  const circle2Y = useTransform(smoothScrollProgress, [0, 1], ['0%', '15%']);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: clientX / window.innerWidth - 0.5,
        y: clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };
  
  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  };
  
  // Feature list items
  const manufacturingFeatures = language === 'en' ? [
    "Injection Molding with 30-2500 ton machines",
    "Multi-shot & LSR capabilities",
    "In-mold decoration & labeling",
    "Automated assembly lines",
    "Quality testing & inspection",
    "Custom packaging solutions"
  ] : [
    "Fröccsöntés 30-2500 tonnás gépekkel",
    "Többkomponensű & LSR képességek",
    "Szerszámon belüli dekoráció és címkézés",
    "Automatizált összeszerelő sorok",
    "Minőségellenőrzés és vizsgálat",
    "Egyedi csomagolási megoldások"
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative font-[Poppins] bg-white overflow-hidden"
    >
      {/* Enhanced background with subtle pattern and animated gradient */}
      <motion.div 
        className="absolute inset-0 w-full" 
        style={{ y: backgroundY }}
      >
        <div className="bg-gradient-to-b from-[#f0f0f0] to-[#fcfcfc] h-[600px] relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-15" 
            style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            }} 
          />
          
          {/* Animated gradient circles */}
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-100/40 via-indigo-100/30 to-blue-50/20 blur-[80px]"
            style={{ 
              top: '-200px', 
              left: '-100px',
              x: circle1X,
              y: circle1Y
            }}
          />
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-50/20 via-purple-100/30 to-indigo-50/40 blur-[60px]"
            style={{ 
              bottom: '-150px', 
              right: '-80px',
              x: circle2X,
              y: circle2Y
            }}
          />
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        ref={ref}
        // Change this line - reduce the negative margin to prevent overlap
        className="relative z-10 mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: videoY }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          // Increase height for better video visibility
          className="w-full h-[600px] md:h-[675px] rounded-xl overflow-hidden shadow-2xl relative transform-gpu"
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 5}deg)`
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          {/* Glass effect overlay */}
          <div className="absolute inset-0 border border-white/30 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-[2px] z-0" />
          
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-xl p-[2px] z-10 overflow-hidden">
            <motion.div 
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />
            <div className="absolute inset-[1.5px] rounded-lg bg-white" />
          </div>
          
          {/* Video thumbnail overlay */}
          {!isVideoPlaying && (
            <div 
              className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center"
              onClick={() => setIsVideoPlaying(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <motion.div 
                className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center pl-1">
                  <motion.svg 
                    width="20" 
                    height="24" 
                    viewBox="0 0 10 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M0 0L10 6L0 12V0Z" fill="white"/>
                  </motion.svg>
                </div>
              </motion.div>
              <div className="absolute bottom-10 w-full text-center">
                <motion.h3 
                  className="text-white text-xl md:text-2xl font-medium drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {language === 'en' 
                    ? 'Discover Our Manufacturing Process'
                    : 'Fedezze fel gyártási folyamatunkat'}
                </motion.h3>
              </div>
            </div>
          )}
          
          {/* YouTube iframe */}
          <motion.iframe
            className="w-full h-full relative z-20"
            src={`https://www.youtube.com/embed/h0gnHvFlSq0?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=${isVideoPlaying ? 1 : 0}&enablejsapi=1&origin=https%3A%2F%2Fflair-plastic.hu&widgetid=1`}
            title={language === 'en' ? 'Flair-Plastic – How it\'s made?' : 'Flair-Plastic – Hogyan készül?'}
            frameBorder="0"
            allowFullScreen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Corner accents */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 z-40 pointer-events-none ${
                pos === 'top-left' ? 'top-4 left-4' : 
                pos === 'top-right' ? 'top-4 right-4' : 
                pos === 'bottom-left' ? 'bottom-4 left-4' : 
                'bottom-4 right-4'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path 
                  d={
                    pos === 'top-left' ? "M1 1V12H3V3H12V1H1Z" : 
                    pos === 'top-right' ? "M31 1H20V3H29V12H31V1Z" : 
                    pos === 'bottom-left' ? "M1 31H12V29H3V20H1V31Z" : 
                    "M31 31V20H29V29H20V31H31Z"
                  }
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Text content section */}
      <motion.div 
        className="mt-28 px-6 sm:px-10 lg:px-12 pb-28"
        style={{ y: textY }}
      >
        <div className="max-w-[1080px] mx-auto space-y-32">
          {/* First block */}
          <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Decorative line */}
            <motion.div 
              className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Title column */}
            <motion.div className="lg:col-span-5" variants={fadeInUp}>
              <motion.h2 
                className="text-4xl font-normal leading-snug text-[#2D2D2D] mb-8 text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative inline-block">
                  {language === 'en' ? (
                    <>
                      Plastic Injection Moulding and Contract Manufacturing{" "}
                    </>
                  ) : (
                    <>
                      műanyag fröccsöntési és szerződéses gyártási{" "}
                    </>
                  )}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
            </motion.div>
            
            {/* Content column */}
            <motion.div className="lg:col-span-7" variants={fadeInUp}>
              <motion.div 
                className="pl-2 sm:pl-4 lg:pl-0 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-50 hidden sm:block lg:hidden" />
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100">
                  <p className="text-[17px] text-[#3E3E3E] leading-relaxed">
                    {language === 'en' 
                      ? "At Flair-Plastic, we provide a comprehensive suite of plastic injection Moulding capabilities, positioning us as the premier partner for businesses in search of top-tier manufacturing solutions. Our expertise spans from traditional plastic injection Moulding to advanced techniques such as in-Moulding decoration (IMD), in-Moulding labelling (IML), and various decorative technologies. We specialize in over multi-shot injection Moulding, along with liquid silicone rubber (LSR) Moulding and injection blow Moulding. Our contract manufacturing services include project management, tooling management, and assembly, all designed to deliver a seamless end-to-end experience."
                      : "A Flair-Plastic-nél átfogó műanyag fröccsöntési képességeket kínálunk, ami a csúcskategóriás gyártási megoldásokat kereső vállalkozások elsőszámú partnerévé tesz minket. Szakértelmünk a hagyományos műanyag fröccsöntéstől a fejlett technikákig terjed, mint például a szerszámon belüli dekoráció (IMD), szerszámon belüli címkézés (IML) és különböző dekorációs technológiák. Többkomponensű fröccsöntésre, folyékony szilikon gumi (LSR) fröccsöntésre és fröccsfúvásra specializálódtunk. Szerződéses gyártási szolgáltatásaink magukban foglalják a projektmenedzsmentet, szerszámkezelést és összeszerelést, amelyek mind zökkenőmentes végpontok közötti élményt nyújtanak."}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Second block */}
          <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -left-10 top-0 w-20 h-20 rounded-full border border-gray-200 opacity-40 hidden lg:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div 
              className="absolute -right-5 bottom-10 w-10 h-10 rounded-full border border-blue-200 opacity-30 hidden lg:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            {/* Title column */}
            <motion.div className="lg:col-span-5 lg:col-start-8 lg:row-start-1" variants={fadeInUp}>
              <motion.h2 
                className="text-4xl font-normal leading-snug text-[#2D2D2D] mb-8 text-left lg:text-right"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative inline-block">
                  {language === 'en' ? (
                    <>
                      Manufacturing Support & Unmatched Quality{" "}
                    </>
                  ) : (
                    <>
                      Gyártási támogatás és páratlan minőség{" "}
                    </>
                  )}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
            </motion.div>
            
            {/* Features grid */}
            <motion.div 
              className="lg:col-span-7 lg:col-start-1 lg:row-start-1"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {manufacturingFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-sm border border-gray-100 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.75 12.75L10 15L16.25 8.75" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-t-blue-100 border-l-[16px] border-l-transparent transform rotate-90" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-8 pl-2 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-[17px] text-[#3E3E3E] leading-relaxed">
                  {language === 'en' 
                    ? "Our commitment to quality extends through every aspect of production, from material selection to final packaging. With ISO 9001:2015 certification and rigorous quality assurance protocols, we ensure consistent excellence across all manufacturing processes. Our experienced team provides comprehensive support throughout your product lifecycle, offering design assistance, production optimization, and continuous improvement initiatives."
                    : "Minőség iránti elkötelezettségünk a gyártás minden aspektusára kiterjed, az anyagválasztástól a végső csomagolásig. Az ISO 9001:2015 tanúsítvánnyal és szigorú minőségbiztosítási protokollokkal biztosítjuk a következetes kiválóságot minden gyártási folyamatban. Tapasztalt csapatunk átfogó támogatást nyújt a termék teljes életciklusán keresztül, tervezési segítséget, gyártási optimalizálást és folyamatos fejlesztési kezdeményezéseket kínálva."}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Call-to-action section */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <span className="relative z-10 mr-2">
                {language === 'en' ? 'Discuss Your Manufacturing Needs' : 'Beszéljünk gyártási igényeiről'}
              </span>
              <motion.svg 
                className="relative z-10 w-5 h-5" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ManufacturingOverview;
