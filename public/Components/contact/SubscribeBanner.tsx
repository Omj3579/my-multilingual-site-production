import React, { useRef } from 'react';
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SubscribeBanner = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const containerRef = useRef(null);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? 'Coming Soon!' : 'Hamarosan!',
      description: language === 'en' 
        ? 'This feature will be available soon.'
        : 'Ez a funkció hamarosan elérhető lesz.',
      duration: 3000,
    });
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        perspective: "1000px",
      }}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-[#f39e74]/20 to-blue-500/20 blur-xl rounded-2xl"></div>
      
      {/* Glass card */}
      <div className="relative bg-gradient-to-br from-[#f39e74]/80 to-[#e57b48]/80 backdrop-blur-md rounded-2xl px-8 py-12 shadow-xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        {/* Animated floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: 100 + Math.random() * 200,
                height: 100 + Math.random() * 200,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(30px)',
              }}
              animate={{
                x: [0, 30 * (Math.random() - 0.5), 0],
                y: [0, 30 * (Math.random() - 0.5), 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-sm">
              <Typewriter
                words={[language === 'en' ? 'Subscribe to our Community' : 'Iratkozzon fel közösségünkbe']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </h3>
            <p className="mt-2 text-white/90 max-w-xl">
              {language === 'en' 
                ? 'Join our newsletter to receive the latest updates, industry insights and exclusive offers.'
                : 'Csatlakozzon hírlevelünkhöz a legfrissebb frissítések, iparági betekintések és exkluzív ajánlatok fogadásához.'}
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/join-our-community"
              onClick={handleClick}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#e57b48] font-bold rounded-lg shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <span className="relative z-10">
                {language === 'en' ? 'Learn More' : 'Tudj meg többet'}
              </span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={20} />
              </span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f39e74]/10 to-transparent"
                  animate={{
                    left: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscribeBanner;
