import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle } from 'lucide-react';

const InjectionMoulding = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
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
  const contentY = useTransform(smoothProgress, [0, 0.5], [100, 0]);
  const imageY = useTransform(smoothProgress, [0, 0.7], [50, -50]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [0.9, 1.05]);
  const imageRotate = useTransform(smoothProgress, [0, 0.5], [-1, 1]);
  const bgShapeY = useTransform(smoothProgress, [0, 1], [0, -100]);
  
  // Key benefits of IMD technology
  const benefits = language === 'en' ? [
    "Premium aesthetic appearance",
    "Scratch and chemical resistant",
    "Consistent quality across production runs",
    "Cost-effective for medium to large volumes"
  ] : [
    "Prémium esztétikai megjelenés",
    "Karc- és vegyszerálló",
    "Következetes minőség a gyártási sorozatokban",
    "Költséghatékony közepes és nagy mennyiségekhez"
  ];
  
  // Application areas
  const applications = language === 'en' ? [
    {
      title: "Consumer Electronics",
      desc: "Enhance device interfaces with durable, high-resolution graphics"
    },
    {
      title: "Automotive Interiors",
      desc: "Create sophisticated control panels and decorative elements"
    },
    {
      title: "Household Appliances",
      desc: "Elevate product aesthetics with scratch-resistant designs"
    }
  ] : [
    {
      title: "Fogyasztói elektronika",
      desc: "Eszközfelületek fejlesztése tartós, nagy felbontású grafikákkal"
    },
    {
      title: "Autóbelső",
      desc: "Kifinomult vezérlőpanelek és dekoratív elemek létrehozása"
    },
    {
      title: "Háztartási készülékek",
      desc: "Termékesztétika fokozása karcálló dizájnnal"
    }
  ];

  return (
    <section className="relative font-[Poppins] text-[#333] overflow-hidden" ref={containerRef}>
      {/* Enhanced background with layers */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-[#f8f9fc] to-[#f0f2f5] z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating gradient shape */}
        <motion.div 
          className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-50 via-indigo-50/30 to-transparent blur-[100px]"
          style={{ y: bgShapeY }}
        />
        
        {/* Technical pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px"
          }}
        />
        
        {/* Decorative circles */}
        <div className="absolute top-40 right-40 w-40 h-40 border-2 border-dashed border-blue-100/50 rounded-full opacity-40" />
        <motion.div 
          className="absolute bottom-60 left-20 w-24 h-24 border border-blue-200/20 rounded-full hidden lg:block"
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          {/* Top section with heading and content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-16">
            {/* Left content column */}
            <motion.div 
              ref={contentRef}
              className="lg:col-span-7 flex flex-col"
              style={{ y: contentY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: contentInView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Section badge */}
              <motion.div 
                className="flex items-center gap-2 text-blue-600 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="h-[2px] w-10 bg-blue-500"></div>
                <span className="uppercase tracking-wide text-sm font-medium">
                  {language === 'en' ? 'Advanced Technology' : 'Fejlett Technológia'}
                </span>
              </motion.div>
              
              {/* Enhanced heading with gradient */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#334155] to-[#64748b] bg-clip-text text-transparent">
                  {language === 'en' ? 'In-Mould Decoration' : 'Szerszámon Belüli Dekoráció'}
                </span>
              </motion.h2>
              
              {/* Enhanced description with highlight box */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="text-[17px] text-[#4b5563] leading-relaxed">
                  {language === 'en' 
                    ? "Flair-Plastic's in-mold decoration (IMD) technology allows for the integration of complex and vibrant graphics directly into your products. After extensive research and development, we have perfected a process that is both efficient and cost-effective, ensuring reliability in every project."
                    : "A Flair-Plastic szerszámon belüli dekorációs (IMD) technológiája lehetővé teszi komplex és élénk grafikák közvetlen integrálását termékeibe. Kiterjedt kutatás és fejlesztés után tökéletesítettük egy olyan folyamatot, amely hatékony és költséghatékony, biztosítva a megbízhatóságot minden projektben."
                  }
                </p>
              </motion.div>
              
              {/* Benefits list with icons */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: contentInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-slate-700 mb-4">
                  {language === 'en' ? 'Key Benefits:' : 'Főbb előnyök:'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                    >
                      <CheckCircle className="text-blue-500 h-5 w-5 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Enhanced CTA button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href={language === 'en' ? '/en/quote' : '/hu/ajanlat'}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg overflow-hidden relative group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <span className="relative z-10">
                    {language === 'en' ? 'Request a Quote' : 'Ajánlatot kérek'}
                  </span>
                  <ArrowRight className="h-5 w-5 relative z-10" />
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right image column with 3D effects */}
            <motion.div
              ref={imageRef}
              className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0"
              style={{ y: imageY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageInView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative rounded-[30px] overflow-hidden shadow-2xl bg-white transform-gpu"
                style={{ 
                  scale: imageScale,
                  rotate: imageRotate,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Corner decorations */}
                {['top-left', 'top-right'].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-6 h-6 z-20 ${
                      pos === 'top-left' ? 'top-4 left-4' : 'top-4 right-4'
                    } bg-blue-500 rounded-full`}
                    initial={{ scale: 0 }}
                    animate={{ scale: imageInView ? 1 : 0 }}
                    transition={{ delay: 0.9 + (i * 0.2) }}
                  />
                ))}
                
                {/* Main image with gradient overlay */}
                <div className="relative">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-amber-800/20 mix-blend-overlay z-10" />
                  
                  {/* Main image */}
                  <img
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/dec51.png.webp"
                    alt={language === 'en' ? 'In-Mould Decoration' : 'Szerszámon Belüli Dekoráció'}
                    className="w-full h-auto object-cover"
                    style={{ minWidth: "400px" }}
                  />
                </div>
                
                {/* Image caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-4 px-6 z-10">
                  <p className="text-white text-sm">
                    {language === 'en' 
                      ? "High-precision IMD application on consumer electronics" 
                      : "Nagy pontosságú IMD alkalmazás fogyasztói elektronikában"}
                  </p>
                </div>
              </motion.div>
              
              {/* Floating technique badge */}
              <motion.div
                className="absolute -left-10 top-1/4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-amber-500 max-w-[180px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -30 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-semibold text-amber-700 text-sm mb-1">
                  {language === 'en' ? 'IMD Technique' : 'IMD Technika'}
                </h4>
                <p className="text-xs text-slate-600">
                  {language === 'en' 
                    ? "Permanently integrated designs that withstand mechanical stress and chemicals" 
                    : "Tartósan integrált minták, amelyek ellenállnak a mechanikai igénybevételnek és vegyszereknek"}
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Application areas with cards */}
          <motion.div 
            ref={cardsRef}
            className="mt-32"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 60 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: cardsInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language === 'en' ? 'Applications of IMD Technology' : 'Az IMD technológia alkalmazási területei'}
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((app, i) => (
                <motion.div 
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-xl border-t border-blue-100"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: cardsInView ? 1 : 0, y: cardsInView ? 0 : 40 }}
                  transition={{ duration: 0.7, delay: 0.3 + (i * 0.2) }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                    {/* Application illustration - using SVG patterns for abstract representation */}
                    <svg 
                      className="absolute inset-0 w-full h-full opacity-20"  
                      viewBox="0 0 100 100" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id={`appPattern${i}`} patternUnits="userSpaceOnUse" width="10" height="10">
                          <path 
                            d={i === 0 
                              ? "M0 5 L10 5 M5 0 L5 10" 
                              : i === 1 
                                ? "M0 10 L10 0 M0 0 L10 10" 
                                : "M0,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0"
                            }
                            stroke="white" 
                            strokeWidth="1" 
                            fill="none" 
                          />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#appPattern${i})`} />
                    </svg>
                    
                    {/* Number indicator */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl">
                      {i + 1}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-xl mb-3 text-slate-800">{app.title}</h4>
                    <p className="text-slate-600">{app.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InjectionMoulding;
