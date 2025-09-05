import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';

const FlairPlasticLegacy = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 20);
    mouseY.set(y / 20);
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="bg-[#f2f2f2] text-[#040404] font-[Poppins] px-6 md:px-10 py-20 md:py-28 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full opacity-20"
        style={{ 
          background: "radial-gradient(circle, rgba(243,158,116,0.1) 0%, rgba(243,158,116,0) 70%)",
          x: useTransform(mouseX, [-100, 100], [20, -20]),
          y: useTransform(mouseY, [-100, 100], [20, -20]),
        }}
      />
      
      <motion.div 
        className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full opacity-20"
        style={{ 
          background: "radial-gradient(circle, rgba(243,158,116,0.1) 0%, rgba(243,158,116,0) 70%)",
          x: useTransform(mouseX, [-100, 100], [-20, 20]),
          y: useTransform(mouseY, [-100, 100], [-20, 20]),
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-6 bg-[#f39e74]/10 border border-[#f39e74]/20 rounded-full mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#f39e74] mr-2"></div>
            <span className="text-sm font-medium text-gray-700">
              {language === 'en' ? 'Our Story' : 'Történetünk'}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-light text-center leading-snug mb-6">
            <span className="font-bold">Flair-Plastic:</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f39e74] to-[#e57b48]">
              {language === 'en'
                ? 'A legacy of precision in plastic injection moulding since 1990.'
                : 'A műanyag fröccsöntés precíziós öröksége 1990 óta.'}
            </span>
          </h2>
        </motion.div>

        {/* Main content with card effect */}
        <motion.div
          className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden p-8 md:p-12 shadow-xl"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px)",
            rotateX: useTransform(mouseY, [-200, 200], [2, -2]),
            rotateY: useTransform(mouseX, [-200, 200], [-2, 2]),
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Card background elements */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f39e74] to-[#e57b48]"></div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          
          {/* Intro Text */}
          <motion.p 
            className="text-left text-base md:text-lg text-[#555] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {language === 'en'
              ? 'Flair-Plastic, originally founded as STARPLAST in 1990, has been at the forefront of precision plastic injection moulding for over three decades. With a commitment to excellence that began at our inception, we have grown to become a key player in the plastic manufacturing industry, continually pushing the boundaries of technology and innovation.'
              : 'A Flair-Plastic, amelyet eredetileg STARPLAST néven alapítottak 1990-ben, több mint három évtizede élen jár a precíziós műanyag fröccsöntésben. A kezdetektől fogva kiválóságra való törekvésünkkel a műanyaggyártó ipar kulcsszereplőjévé váltunk, folyamatosan feszegetve a technológia és az innováció határait.'}
          </motion.p>

          {/* Highlighted Statement */}
          <motion.div
            className="my-10 p-6 bg-gradient-to-r from-[#f39e74]/10 to-[#e57b48]/5 rounded-lg border-l-4 border-[#f39e74]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <p className="text-left text-sm md:text-2xl font-semibold text-gray-700">
              {language === 'en'
                ? "Celebrating 30+ Years of Innovation: Flair-Plastic's Journey to Global Leadership in Plastic Injection Moulding"
                : '30+ év innováció ünneplése: A Flair-Plastic útja a műanyag fröccsöntés globális vezetőjévé'}
            </p>
          </motion.div>

          {/* Additional Text */}
          <motion.p 
            className="text-left text-base md:text-lg text-[#555] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {language === 'en'
              ? 'In 2024, Flair-Plastic proudly celebrated over three decades of leadership in the plastic injection moulding industry. From our humble beginnings in 1990 to becoming a globally recognized name, our journey has been driven by a relentless pursuit of innovation and sustainability. Known for our collaborative approach, we continue to develop and deliver solutions that not only meet but exceed the evolving needs of our customers.'
              : '2024-ben a Flair-Plastic büszkén ünnepelte több mint három évtizedes vezetői szerepét a műanyag fröccsöntő iparban. Az 1990-es szerény kezdetektől a globálisan elismert névvé válásig vezető utunkat az innováció és fenntarthatóság folyamatos keresése vezérelte. Együttműködő megközelítésünkről ismerten továbbra is olyan megoldásokat fejlesztünk és szállítunk, amelyek nemcsak megfelelnek, hanem túl is szárnyalják ügyfeleink fejlődő igényeit.'}
          </motion.p>
          
          {/* Animated shine effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              background: [
                "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 55%, rgba(255,255,255,0) 100%)",
                "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.2) 10%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)"
              ],
              backgroundPosition: ["200% 200%", "-100% -100%"]
            }}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 5 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FlairPlasticLegacy;

