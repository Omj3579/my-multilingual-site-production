import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [contentRef, contentInView] = useInView({ threshold: 0.3, triggerOnce: true });
  
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
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -80]);
  const contentY = useTransform(smoothProgress, [0.3, 0.8], [50, -30]);
  
  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Enhanced background with gradient and texture */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-50 via-[#fde9cb] to-orange-50 z-0"
        style={{ y: backgroundY }}
      />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Technical pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23333'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Text */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-center relative z-10">
        <h2 className="text-[26px] sm:text-[32px] md:text-[42px] font-extrabold leading-snug">
          {language === 'en' ? (
            <>
              <span className="text-[#7a85ff]">We are enhancing our </span>
              <span className="text-green-700">injection blow moulding</span>
              <br />
              <span className="text-[#7a85ff]">capabilities perpetually, empowering you to</span>{' '}
              <span className="text-green-700">advance your projects further.</span>
            </>
          ) : (
            <>
              <span className="text-[#7a85ff]">Folyamatosan fejlesztjük </span>
              <span className="text-green-700">fröccsöntés-fúvási</span>
              <br />
              <span className="text-[#7a85ff]">képességeinket, lehetővé téve, hogy</span>{' '}
              <span className="text-green-700">projektjeit tovább fejlessze.</span>
            </>
          )}
        </h2>

        {/* Call to action button with icon */}
        <div className="mt-10">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 ease-in-out">
            {language === 'en' ? 'Get in Touch' : 'Lépjen Kapcsolatba'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      {/* Upward-pointing triangle cutting into the bottom of image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "70px solid transparent",
            borderRight: "70px solid transparent",
            borderBottom: "60px solid white",
          }}
        />
      </div>
    </section>
  );
};

export default CommitmentCallout;

