import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Play } from 'lucide-react';

const IBMSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [titleRef, titleInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [textRef, textInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [showVideo, setShowVideo] = useState(false);
  
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
  const imageParallax = useTransform(smoothProgress, [0.3, 0.8], [50, -50]);
  const titleParallax = useTransform(smoothProgress, [0.1, 0.4], [50, -30]);
  const benefitsParallax = useTransform(smoothProgress, [0.5, 0.9], [70, -20]);

  // Benefits of thick walls and transparent finishes
  const thickWallBenefits = language === 'en' ? [
    "Enhanced product durability with excellent impact resistance",
    "Superior thermal insulation for temperature-sensitive contents",
    "Crystal-clear transparency for premium product visibility",
    "Precise detailing and high-quality surface finish"
  ] : [
    "Fokozott terméktartósság kiváló ütésállósággal",
    "Kiváló hőszigetelés hőmérséklet-érzékeny tartalmak számára",
    "Kristálytiszta átlátszóság a kiváló termékvisibility érdekében",
    "Precíz részletek és kiváló minőségű felületi kidolgozás"
  ];
  
  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Gradient background transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-[#ebebeb] z-0" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Technical pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
        
        {/* Animated gradient shapes */}
        <motion.div 
          className="absolute left-[5%] top-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/20 via-indigo-50/10 to-transparent blur-[80px]"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-[10%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-amber-100/20 via-orange-50/10 to-transparent blur-[60px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20">
        {/* Top heading section */}
        <motion.div 
          ref={titleRef}
          className="mb-16"
          style={{ y: titleParallax }}
          initial={{ opacity: 0 }}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {language === 'en' ? (
              <>What Makes Injection Blow Moulding the <span className="text-blue-600">Right Choice?</span></>
            ) : (
              <>Miért a fröccsöntés-fúvás a <span className="text-blue-600">helyes választás?</span></>
            )}
          </motion.h2>
          
          <motion.div 
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-0 md:w-[12%]" />
            <motion.div 
              className="w-full md:w-[88%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-[95%]">
                {language === 'en' 
                  ? "Cost is a paramount consideration in any project, particularly for large-scale and industrial applications. Injection blow moulding offers exceptional customization, allowing easy scalability to align precisely with customer requirements."
                  : "A költség minden projekt esetében kiemelt szempont, különösen nagy léptékű és ipari alkalmazások esetén. A fröccsöntés-fúvás kivételes testreszabhatóságot kínál, lehetővé téve a könnyű méretezhetőséget az ügyfelek igényeinek megfelelően."}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Main image section with enhanced presentation */}
        <motion.div 
          ref={imageRef}
          className="relative mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: imageParallax }}
        >
          <motion.div 
            className="w-full rounded-[30px] overflow-hidden shadow-2xl relative"
            initial={{ scale: 0.95 }}
            animate={{ scale: imageInView ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 via-transparent to-amber-700/10 mix-blend-overlay z-10" 
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
              onClick={() => setShowVideo(true)}
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
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/gk100.png.webp"
              alt={language === 'en' ? "Injection Blow Moulding Process" : "Fröccsöntés-fúvási folyamat"}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
        
        {/* Bottom section - Benefits of thicker walls */}
        <motion.div 
          ref={textRef}
          className="max-w-[1240px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: textInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {language === 'en' ? (
              <><span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Benefits</span> of Thicker Walls and Transparent Finishes</>
            ) : (
              <><span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Előnyök</span> a vastagabb falak és átlátszó felületek esetén</>
            )}
          </motion.h3>
          
          <div className="flex">
            <div className="hidden md:block w-[12%]" />
            <div className="w-full md:w-[88%]">
              <motion.p 
                className="text-lg text-slate-700 leading-relaxed max-w-[95%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {language === 'en'
                  ? "At Flair-Plastic, our commitment to injection blow moulding enables us to provide dependable and flexible solutions that extend the possibilities of its applications beyond the usual limits. It's our dedication to quality and innovation that distinctly distinguishes us."
                  : "A Flair-Plastic-nál a fröccsöntés-fúvás iránti elkötelezettségünk lehetővé teszi, hogy megbízható és rugalmas megoldásokat kínáljunk, amelyek a szokásos határok ötül bővítik az alkalmazási lehetőségeket. A minőség és innováció iránti elkötelezettségünk az, ami egyértelműen megkülönböztet minket."}
              </motion.p>
              
              {/* Benefits cards */}
              <motion.div 
                ref={benefitsRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-10"
                style={{ y: benefitsParallax }}
                initial={{ opacity: 0 }}
                animate={{ opacity: benefitsInView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {thickWallBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="h-5 w-5 text-blue-500" />
                      </div>
                      <p className="text-slate-700">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-700 leading-relaxed max-w-[95%] mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {language === 'en'
                  ? "Flair-Plastic's innovations in injection blow moulding enable the creation of products with varied thicknesses, utilising a diverse range of materials and resins. We have perfected the mass production of glass-like, thick-walled transparent plastics, ideal for reusable bottles and lighting products."
                  : "A Flair-Plastic innovációi a fröccsöntés-fúvásban lehetővé teszik különböző vastagságú termékek létrehozását, változatos anyagok és gyanták felhasználásával. Tökéletesítettük az üvegszerű, vastag falú átlátszó műanyagok tömeggyártását, amely ideális újrafelhasználható palackokhoz és világítástechnikai termékekhez."}
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        {/* Video lightbox */}
        <AnimatePresence>
          {showVideo && (
            <motion.div 
              className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
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
                  onClick={() => setShowVideo(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/gk100.png.webp"
                  alt={language === 'en' ? "Injection Blow Moulding Process Closeup" : "Fröccsöntés-fúvási folyamat közelről"}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IBMSection;
