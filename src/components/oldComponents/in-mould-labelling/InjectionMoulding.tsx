import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Minus, ChevronRight, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const InjectionMoulding = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 100 
  });
  
  // Parallax effects
  const contentY = useTransform(smoothProgress, [0, 0.5], [50, -30]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [0.95, 1.05]);
  const imageRotate = useTransform(smoothProgress, [0, 0.5], [2, -2]);
  const decorationY = useTransform(smoothProgress, [0, 1], [0, -100]);

  // Benefits of IML
  const benefits = language === 'en' 
    ? [
        "Superior print quality and durability",
        "Environmentally friendly - reduces waste",
        "Cost-effective all-in-one production",
        "Enhanced product aesthetics"
      ]
    : [
        "Kiváló nyomtatási minőség és tartósság",
        "Környezetbarát - csökkenti a hulladékot",
        "Költséghatékony, egy lépéses gyártás",
        "Továbbfejlesztett termékesztétika"
      ];

  return (
    <section 
      ref={containerRef}
      className="relative font-[Poppins] text-[#333] overflow-hidden"
    >
      {/* Enhanced background with layered elements */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-[#f0f2f5] to-[#e8eaed] z-0" />
      <div className="absolute inset-0 overflow-hidden">
        {/* Technical grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative blobs */}
        <motion.div 
          className="absolute -right-[10%] -bottom-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-100/20 to-transparent blur-[80px]"
          style={{ y: decorationY }}
        />
        <motion.div 
          className="absolute -left-[10%] top-[30%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-amber-100/20 to-transparent blur-[60px]"
          animate={{
            scale: [1, 1.1, 1],
            translateY: [0, -20, 0],
            translateX: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="relative z-10 px-6 py-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Content row with staggered reveal */}
          <motion.div 
            ref={ref}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-24"
          >
            {/* Left content column */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col"
              style={{ y: contentY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.7 }}
            >
              {/* Section badge */}
              <motion.div 
                className="inline-flex items-center gap-2 text-blue-600 mb-6 self-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-10 h-[2px] bg-blue-500" />
                <span className="uppercase tracking-wider text-sm font-medium">
                  {language === 'en' ? 'Our Technology' : 'Technológiánk'}
                </span>
              </motion.div>
              
              {/* Enhanced heading with gradient */}
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold mb-8 leading-tight bg-gradient-to-br from-[#1a1a1a] to-[#555] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {language === 'en' ? 'In-Mould Labelling' : 'Címkézés a szerszámban'}
              </motion.h2>

              {/* Description with highlight box */}
              <motion.div 
                className="rounded-xl bg-white p-6 shadow-lg border-l-4 border-blue-500 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="text-[17px] text-[#444] leading-relaxed">
                  {language === 'en' 
                    ? "Flair-Plastic's in-mould labelling technology seamlessly integrates high-quality labels into plastic products during the injection molding process, ensuring durability and premium aesthetics while optimizing production efficiency."
                    : "A Flair-Plastic címkézési technológiája zökkenőmentesen integrálja a kiváló minőségű címkéket a műanyag termékekbe a fröccsöntési folyamat során, biztosítva a tartósságot és a prémium esztétikát, miközben optimalizálja a gyártási hatékonyságot."}
                </p>
              </motion.div>

              {/* Benefits list */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="font-semibold text-lg mb-4 text-gray-700">
                  {language === 'en' ? 'Key Benefits:' : 'Főbb előnyök:'}
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    >
                      <CheckCircle className="text-blue-500 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced CTA button */}
              <motion.div
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.a 
                  href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'} 
                  className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg overflow-hidden relative group shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  
                  <span className="relative z-10">
                    {language === 'en' ? 'Request a Quote' : 'Ajánlatot kérek'}
                  </span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right image column with animation effects */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center items-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Primary image with 3D effect */}
              <motion.div
                className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  scale: imageScale,
                  rotate: imageRotate,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-overlay z-10" />
                
                {/* Corner accents */}
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-8 h-8 z-30 pointer-events-none ${
                      pos === 'top-left' ? 'top-4 left-4' : 
                      pos === 'top-right' ? 'top-4 right-4' : 
                      pos === 'bottom-left' ? 'bottom-4 left-4' : 
                      'bottom-4 right-4'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                    transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
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
                        fillOpacity="0.9"
                      />
                    </svg>
                  </motion.div>
                ))}

                {/* Main image */}
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/pvc-conveyor.png.webp"
                  alt={language === 'en' ? "In-Mould Labelling" : "Címkézés a szerszámban"}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
              
              {/* Technical specs badge */}
              <motion.div
                className="absolute -left-6 bottom-16 bg-white rounded-lg shadow-xl p-4 z-30 max-w-[220px] border-l-4 border-amber-500"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <h4 className="font-bold text-amber-600 text-sm mb-1">
                  {language === 'en' ? 'Technical Specs' : 'Műszaki adatok'}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {language === 'en' 
                    ? "Up to 0.01mm precision, compatible with polypropylene, polyethylene, and polystyrene materials."
                    : "Akár 0,01 mm-es pontosság, kompatibilis polipropilén, polietilén és polisztirol anyagokkal."}
                </p>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-20 h-20 border-2 border-dashed border-blue-200 rounded-full"
                animate={{
                  rotate: 360
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="absolute top-10 left-10 w-24 h-24 border border-blue-100 rounded-full opacity-50"
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
