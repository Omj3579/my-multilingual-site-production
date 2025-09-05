import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';

const ContractManufacturing = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Interactive mouse effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (bounds) {
      const mouseXValue = e.clientX - bounds.left;
      const mouseYValue = e.clientY - bounds.top;
      mouseX.set(mouseXValue - bounds.width / 2);
      mouseY.set(mouseYValue - bounds.height / 2);
    }
  };
  
  const rotateX = useTransform(mouseY, [-300, 300], [1, -1]);
  const rotateY = useTransform(mouseX, [-300, 300], [-1, 1]);
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 100 
  });
  
  const bgShapeY = useTransform(smoothProgress, [0, 1], [0, -100]);
  
  // Animated background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    
    // Animation loop
    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.03)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw interactive particles
      const particleCount = 80;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < particleCount; i++) {
        const x = canvas.width * (i / particleCount) + Math.sin(time + i * 0.1) * 50 + (mouseX * 100);
        const y = canvas.height * 0.5 + Math.cos(time + i * 0.1) * 50 + (mouseY * 100);
        const size = Math.sin(time + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${0.03 + Math.sin(time + i) * 0.02})`;
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
  
  // Key benefits of contract manufacturing
  const benefits = language === 'en' ? [
    "End-to-end project management",
    "Flexible production capacity",
    "Cost-effective manufacturing solutions",
    "Direct access to technical expertise"
  ] : [
    "Végponttól végpontig tartó projektmenedzsment",
    "Rugalmas gyártási kapacitás",
    "Költséghatékony gyártási megoldások",
    "Közvetlen hozzáférés a műszaki szakértelemhez"
  ];
  
  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative font-sans text-[#333] bg-white py-24 overflow-hidden"
    >
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[#ebebeb] z-0" />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23000000' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px"
          }}
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating gradient shape */}
        <motion.div 
          className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-amber-50 via-amber-50/30 to-transparent blur-[100px]"
          style={{ y: bgShapeY }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Enhanced floating elements */}
        <motion.div 
          className="absolute top-40 left-[10%] w-28 h-28 rounded-full bg-gradient-to-br from-amber-100/40 to-amber-50/10 hidden md:block"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-40 right-[15%] w-40 h-40 rounded-full border-2 border-dashed border-amber-200/20 hidden md:block"
          animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Content Container with 3D tilt effect */}
      <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start"
          style={{
            perspective: 2000,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col"
            style={{
              transformStyle: "preserve-3d",
              rotateX: isInView ? rotateX : 0,
              rotateY: isInView ? rotateY : 0,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section tag - like in SurfaceFinishing.tsx */}
            <motion.div 
              className="flex items-center gap-2 text-amber-600 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-[2px] w-8 bg-amber-500"></div>
              <span className="uppercase tracking-wide text-sm font-medium">
                {language === 'en' ? 'Manufacturing Excellence' : 'Gyártási Kiválóság'}
              </span>
            </motion.div>
            
            {/* Enhanced heading with gradient */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                {language === 'en' 
                  ? 'Explore Our Contract Manufacturing Solutions'
                  : 'Fedezze fel szerződéses gyártási megoldásainkat'}
              </span>
            </motion.h2>

            {/* Content in highlight box like in SurfaceFinishing.tsx */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
            >
              <p className="text-lg leading-relaxed text-[#555]">
                {language === 'en'
                  ? 'At Flair-Plastic, we are uniquely positioned to expertly handle the complexities of both large and small-scale projects with a personalised touch, especially in the realm of contract manufacturing.'
                  : 'A Flair-Plastic egyedülálló pozícióban van ahhoz, hogy szakértő módon kezelje mind a nagy-, mind a kisléptékű projektek összetettségét személyre szabott megközelítéssel, különösen a szerződéses gyártás területén.'}
              </p>
            </motion.div>
            
            {/* Second paragraph with normal styling */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg leading-relaxed text-gray-600">
                {language === 'en'
                  ? 'Our approach combines robust capabilities to manage substantial projects with the nimbleness required to tailor our services to meet specific client needs.'
                  : 'Megközelítésünk ötvözi a nagyszabású projektek kezeléséhez szükséges robusztus képességeket azzal a rugalmassággal, amely az ügyfelek egyedi igényeihez igazított szolgáltatásokhoz szükséges.'}
              </p>
            </motion.div>
            
            {/* Benefits list with icons like in InjectionMoulding.tsx */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                {language === 'en' ? 'Key Advantages:' : 'Főbb előnyök:'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                  >
                    <CheckCircle className="text-amber-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-slate-600">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced CTA with better interactive animation - like in SurfaceFinishing.tsx */}
            <motion.div 
              className="mt-8 flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href={language === 'en' ? '/en/quote' : '/hu/ajanlat'}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg overflow-hidden relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
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
                  {language === 'en' ? 'Request a Quote' : 'Árajánlat kérése'}
                </span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: hovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image Column with enhanced floating 3D effect */}
          <motion.div 
            className="lg:col-span-5 relative z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative rounded-[30px] overflow-hidden shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
              }}
              animate={{ 
                rotateX: [-2, 2, -2],
                rotateY: [2, -2, 2],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 0,
                rotateY: 0,
                transition: { duration: 0.3 } 
              }}
            >
              {/* Enhanced gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 z-10 mix-blend-overlay" />
              
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/1-5.png"
                alt={language === 'en' ? "Injection Moulding" : "Fröccsöntés"}
                className="w-full h-auto object-cover"
              />
              
              {/* Highlight effect */}
              <motion.div 
                className="absolute inset-0 opacity-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent z-10"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  backgroundPosition: ["200% 200%", "-100% -100%", "200% 200%"] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatDelay: 6 
                }}
              />
              
              {/* Image caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-4 px-4 z-10">
                <p className="text-white text-sm">
                  {language === 'en' 
                    ? "Precision manufacturing for complex plastic components" 
                    : "Precíziós gyártás összetett műanyag alkatrészekhez"}
                </p>
              </div>
            </motion.div>
            
            {/* Floating technique badge - like in InjectionMoulding.tsx */}
            <motion.div
              className="absolute -left-10 top-1/4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-amber-500 max-w-[180px] z-20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-semibold text-amber-700 text-sm mb-1">
                {language === 'en' ? 'Production Excellence' : 'Gyártási Kiválóság'}
              </h4>
              <p className="text-xs text-slate-600">
                {language === 'en' 
                  ? "ISO 9001 certified processes with rigorous quality control" 
                  : "ISO 9001 tanúsított folyamatok szigorú minőségellenőrzéssel"}
              </p>
            </motion.div>
            
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full backdrop-blur-xl z-10 border border-amber-200/30"
              animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContractManufacturing;
