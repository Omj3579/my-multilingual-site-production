import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const SurfaceFinishing = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  
  // Parallax effects
  const contentY = useTransform(smoothProgress, [0, 0.5], [50, -30]);
  const imageY = useTransform(smoothProgress, [0, 0.7], [70, -30]);
  const bgShapeY = useTransform(smoothProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Track mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    
    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 180, 50, 0.08)');
      gradient.addColorStop(1, 'rgba(255, 200, 100, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw interactive particles
      const particleCount = 100;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < particleCount; i++) {
        const x = canvas.width * (i / particleCount) + Math.sin(time + i * 0.1) * 50 + (mouseX * 100);
        const y = canvas.height * 0.5 + Math.cos(time + i * 0.1) * 50 + (mouseY * 100);
        const size = Math.sin(time + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 150, 50, ${0.03 + Math.sin(time + i) * 0.02})`;
        ctx.fill();
      }
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative font-[Poppins] text-[#333]" ref={containerRef}>
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      
      {/* Enhanced background with layers */}
      <div className="absolute inset-x-0 bottom-0 h-[250px] bg-[#ebebeb] z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating gradient shape */}
        <motion.div 
          className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-blue-50 via-indigo-50/30 to-transparent blur-[80px]"
          style={{ y: bgShapeY }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Technical pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px"
          }}
        />
        
        {/* Decorative circles */}
        <motion.div 
          className="absolute top-20 right-[30%] w-16 h-16 border-2 border-dashed border-amber-100/80 rounded-full opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute bottom-40 left-[10%] w-24 h-24 border border-slate-200/20 rounded-full hidden lg:block" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* Left Content with animations */}
          <motion.div 
            ref={contentRef}
            className="w-full lg:w-1/2 flex flex-col pr-[2px]"
            style={{ y: contentY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: contentInView ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Section tag */}
            <motion.div 
              className="flex items-center gap-2 text-amber-600 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="uppercase tracking-wide text-sm font-medium">
                {language === 'en' ? 'Aesthetic Enhancement' : 'Esztétikai Fejlesztés'}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#333] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {language === 'en' 
                ? 'Surface Finishing Solutions for Injection Moulding'
                : 'Felületkezelési megoldások fröccsöntéshez'}
            </motion.h2>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
            >
              <p className="text-[17px] text-[#555] leading-relaxed">
                {language === 'en' 
                  ? "Flair-Plastic offers a comprehensive suite of painting and printing services designed to meet diverse aesthetic and functional needs. Our premium surface finishing options include polished, textured, printed, or painted treatments, each tailored to enhance the product's visual appeal and durability."
                  : "A Flair-Plastic átfogó festési és nyomtatási szolgáltatásokat kínál, amelyeket úgy terveztek, hogy megfeleljenek a különböző esztétikai és funkcionális igényeknek. Prémium felületkezelési lehetőségeink között szerepel a polírozott, texturált, nyomtatott vagy festett kezelés, mindegyiket úgy alakítottuk ki, hogy javítsa a termék vizuális megjelenését és tartósságát."}
              </p>
            </motion.div>

            {/* CTA button with enhanced animation */}
            <motion.div
              className="flex justify-end mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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

          {/* Right Image with enhanced effects */}
          <motion.div
            ref={imageRef}
            className="w-full lg:w-[320px] mt-0 lg:mt-10"
            style={{ y: imageY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="rounded-[20px] overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: imageInView ? 1 : 0.95 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
            >
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-bl from-blue-900/10 via-transparent to-amber-700/10 mix-blend-overlay z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: imageInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              
              {/* Main image */}
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/1-3.png"
                alt={language === 'en' ? 'Injection Moulding' : 'Fröccsöntés'}
                className="w-full h-auto object-cover"
              />
              
              {/* Image caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-4 px-4 z-10">
                <p className="text-white text-sm">
                  {language === 'en' 
                    ? "High-precision surface finishing on plastic components" 
                    : "Nagy pontosságú felületkezelés műanyag alkatrészeken"}
                </p>
              </div>
            </motion.div>
            
            {/* Floating technique badge */}
            <motion.div
              className="absolute -left-10 top-1/4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-amber-500 max-w-[180px] z-20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-amber-700 text-sm mb-1">
                {language === 'en' ? 'Technique Spotlight' : 'Technika Kiemelés'}
              </h4>
              <p className="text-xs text-slate-600">
                {language === 'en' 
                  ? "Multi-color tampo printing with 0.1mm precision" 
                  : "Többszínű tamponnyomás 0,1 mm-es pontossággal"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SurfaceFinishing;

