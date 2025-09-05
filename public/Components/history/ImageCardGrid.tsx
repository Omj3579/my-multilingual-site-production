import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';

const ImageCardGrid = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const cards = [
    {
      imgSrc: "https://flair-plastic.hu/wp-content/uploads/2024/05/5.jpg.webp",
      alt: language === 'en' ? "Green plastic pellets" : "Zöld műanyag pelletek",
      title: language === 'en' ? "Materials Innovation" : "Anyagok innovációja",
      description: language === 'en' 
        ? "Advanced materials research has been at the heart of our development since 1990."
        : "A fejlett anyagkutatás 1990 óta fejlesztésünk középpontjában áll.",
    },
    {
      imgSrc: "https://flair-plastic.hu/wp-content/uploads/2024/09/History2.png",
      alt: language === 'en' ? "Material test object" : "Anyagvizsgálati tárgy",
      title: language === 'en' ? "Quality Testing" : "Minőségellenőrzés",
      description: language === 'en'
        ? "Our rigorous quality control processes ensure consistency and excellence in every product."
        : "Szigorú minőségellenőrzési folyamataink minden termék következetességét és kiválóságát biztosítják.",
    }
  ];
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 20);
    mouseY.set(y / 20);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-white px-6 md:px-20 py-16 md:py-24 -mt-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#f39e74]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <motion.div 
        className="max-w-6xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div 
          className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 border border-blue-100 rounded-full mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
          <span className="text-sm font-medium text-blue-800">
            {language === 'en' ? 'Visual Journey' : 'Vizuális utazás'}
          </span>
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' 
            ? 'Capturing Our Evolution' 
            : 'Fejlődésünk megörökítése'}
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en'
            ? 'These images represent key elements of our manufacturing excellence and innovation journey through the decades.'
            : 'Ezek a képek gyártási kiválóságunk és innovációs utazásunk kulcsfontosságú elemeit képviselik az évtizedek során.'}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "perspective(1000px)",
              rotateX: useTransform(mouseY, [-300, 300], [2, -2]),
              rotateY: useTransform(mouseX, [-300, 300], [-2, 2]),
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            {/* Image container with parallax effect */}
            <div 
              className="relative w-full h-[280px] md:h-[320px] overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              {/* Content overlay that appears on hover */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  y: useTransform(mouseY, [-100, 100], [-5, 5]),
                  x: useTransform(mouseX, [-100, 100], [-5, 5]),
                }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p
                  className="text-white/80"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            </div>
            
            {/* Animated shine effect */}
            <motion.div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 55%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 10%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)"
                ],
                backgroundPosition: ["200% 200%", "-150% -150%"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageCardGrid;

