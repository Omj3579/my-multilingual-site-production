import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface SolutionsBackgroundProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const SolutionsBackground: React.FC<SolutionsBackgroundProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll(
    containerRef ? {
      target: containerRef,
      offset: ["start end", "end start"]
    } : {}
  );

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const rotateBackground = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Background Gradients */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-full filter blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full filter blur-3xl"
        style={{ y: backgroundY2 }}
      />

      {/* Secondary Floating Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-50/40 to-emerald-50/40 rounded-full filter blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '15%']) }}
      />

      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-blue-200/30 rounded-full"
        style={{ rotate: rotateBackground }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-dashed border-purple-200/40 rounded-lg"
        animate={{ 
          rotate: [0, 45, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-300/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Diagonal Lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 5]) }}
      >
        <svg width="100%" height="100%" className="text-blue-600">
          <defs>
            <pattern id="diagonals" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0,60 L60,0" stroke="currentColor" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonals)" />
        </svg>
      </motion.div>
    </div>
  );
};

export default SolutionsBackground;
