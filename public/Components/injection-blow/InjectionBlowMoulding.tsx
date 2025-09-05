import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Droplet } from 'lucide-react';

const InjectionBlowMoulding = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
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
  const imageY = useTransform(smoothProgress, [0, 0.7], [80, -30]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [0.95, 1.05]);
  const bgElementsY = useTransform(smoothProgress, [0, 0.8], [0, -100]);
  
  // Benefits data
  const benefits = language === 'en' ? [
    "High precision manufacturing with minimal waste",
    "Perfect for products with thick walls and transparent finishes",
    "Cost-effective for medium to large production volumes",
    "Superior product consistency and durability"
  ] : [
    "Nagy pontosságú gyártás minimális hulladékkal",
    "Tökéletes vastag falú és átlátszó felületű termékekhez",
    "Költséghatékony közepes és nagy gyártási mennyiségekhez",
    "Kiváló termék konzisztencia és tartósság"
  ];

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Enhanced background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 z-0" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated circles */}
        <motion.div 
          className="absolute top-[30%] right-[5%] w-64 h-64 rounded-full bg-blue-50/50 blur-3xl"
          style={{ y: bgElementsY }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-orange-50/40 blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
        
        {/* Technical pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px"
          }}
        />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-40 left-[5%] h-32 w-32 border-2 border-dashed border-blue-100/50 rounded-full opacity-40 hidden lg:block"
          style={{ y: bgElementsY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 relative">
          {/* Left content column */}
          <motion.div 
            ref={contentRef}
            className="w-full lg:w-1/2 flex flex-col"
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
                {language === 'en' ? 'Our Technology' : 'Technológiánk'}
              </span>
            </motion.div>
            
            {/* Enhanced heading */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#334155] to-[#475569] bg-clip-text text-transparent">
                {language === 'en' ? 'Injection Blow Moulding' : 'Fröccsöntés-fúvás'}
              </span>
            </motion.h2>
            
            {/* Enhanced description box */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
            >
              <p className="text-[17px] text-slate-700 leading-relaxed font-medium">
                {language === 'en' 
                  ? "Flair-Plastic's injection blow moulding process enhances part consistency and supports the cost-effective mass production of large volumes with minimal waste. This efficient technique optimizes production and cuts overhead costs, making it perfect for clients aiming to scale operations while upholding quality and environmental standards."
                  : "A Flair-Plastic fröccsöntés-fúvási folyamata javítja az alkatrészek konzisztenciáját és támogatja a nagy mennyiségű, költséghatékony tömeggyártást minimális hulladékkal. Ez a hatékony technika optimalizálja a termelést és csökkenti a rezsiköltségeket, így tökéletes azon ügyfelek számára, akik a minőségi és környezetvédelmi előírások betartása mellett kívánják bővíteni működésüket."}
              </p>
            </motion.div>
            
            {/* Secondary description */}
            <motion.p 
              className="text-slate-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {language === 'en'
                ? "Flair-Plastic offers industry-leading injection blow molding solutions, leveraging our deep expertise in food and beverage production. Our commitment to sustainability and cost-effectiveness makes us the preferred partner for businesses seeking environmentally responsible products."
                : "A Flair-Plastic iparágvezető fröccsöntés-fúvási megoldásokat kínál, kihasználva mély szakértelmünket az élelmiszer- és italgyártásban. A fenntarthatóság és költséghatékonyság iránti elkötelezettségünk tesz minket a környezettudatos termékeket kereső vállalkozások preferált partnerévé."}
            </motion.p>
            
            {/* Benefits list with icons */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: contentInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                {language === 'en' ? 'Key Benefits:' : 'Főbb előnyök:'}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                  >
                    <div className="text-green-500 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced CTA button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href={language === 'en' ? '/en/quote' : '/hu/ajanlat'}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg overflow-hidden relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {language === 'en' ? 'Request a Quote' : 'Ajánlatot kérek'}
                </span>
                <ArrowRight className="h-5 w-5 relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right image column with 3D effects */}
          <motion.div
            ref={imageRef}
            className="w-full lg:w-1/2 relative"
            style={{ y: imageY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
              style={{ 
                scale: imageScale,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-amber-800/10 mix-blend-overlay z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: imageInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              
              {/* Main image */}
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/05/qty125.png.webp"
                alt={language === 'en' ? "Injection Blow Moulding" : "Fröccsöntés-fúvás"}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Floating product card */}
            <motion.div
              className="absolute -left-4 bottom-10 bg-white rounded-xl shadow-xl p-4 max-w-[200px] border-t-4 border-green-500 z-30"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -30 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Droplet className="h-4 w-4 text-green-500" />
                <h4 className="font-semibold text-green-700 text-sm">
                  {language === 'en' ? 'Product Highlight' : 'Termék kiemelés'}
                </h4>
              </div>
              <p className="text-xs text-slate-600">
                {language === 'en' 
                  ? "Crystal-clear containers with exceptional durability and precision detailing" 
                  : "Kristálytiszta tartályok kivételes tartóssággal és precíz részletekkel"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InjectionBlowMoulding;
