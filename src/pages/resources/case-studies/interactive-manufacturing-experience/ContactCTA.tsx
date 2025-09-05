import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // Mouse tracking for lighting effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="py-24 bg-gray-900 relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background gradient that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.15), transparent)`,
          transition: 'background 0.3s'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium tracking-wide mb-3">
              {language === 'hu' ? "Kezdjük el" : "Get Started"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {language === 'hu' ? "Szeretne többet megtudni?" : "Want to Learn More?"}
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              {language === 'hu'
                ? "Vegye fel velünk a kapcsolatot, és beszéljünk arról, hogyan alakíthatjuk együtt az Ön következő projektjét innovatív műanyaggyártási megoldásainkkal."
                : "Reach out to us and let's discuss how we can shape your next project with our innovative plastic manufacturing solutions."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                data-hover="true"
              >
                <span>{language === 'hu' ? "Kapcsolatfelvétel" : "Contact Us"}</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="/resources/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                data-hover="true"
              >
                {language === 'hu' ? "További esettanulmányok" : "More Case Studies"}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />
    </section>
  );
};

export default ContactCTA;