
import React, { useState, useEffect } from 'react';
import { motion, useTransform, MotionValue, useMotionValue } from 'framer-motion';

interface BackgroundElementsProps {
  scrollYProgress?: MotionValue<number>;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({ 
  scrollYProgress, 
  mouseX, 
  mouseY 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Create fallback motion values for SSR
  const fallbackScrollY = useMotionValue(0);
  const fallbackMouseX = useMotionValue(0);
  const fallbackMouseY = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Always call hooks in the same order, but use fallback values during SSR
  const safeScrollY = scrollYProgress || fallbackScrollY;
  const safeMouseX = mouseX || fallbackMouseX;
  const safeMouseY = mouseY || fallbackMouseY;

  const backgroundY = useTransform(safeScrollY, [0, 1], ['0%', '40%']);
  const y1 = useTransform(safeScrollY, [0, 1], [0, -200]);
  const y2 = useTransform(safeScrollY, [0, 1], [0, 150]);
  
  // Mouse-based transforms
  const mouseTransformX1 = useTransform(safeMouseX, [0, 1], [100, 200]);
  const mouseTransformY1 = useTransform(safeMouseY, [0, 1], [100, 300]);
  const mouseTransformX2 = useTransform(safeMouseX, [0, 1], [300, 100]);
  const mouseTransformY2 = useTransform(safeMouseY, [0, 1], [200, 400]);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"
        style={{ y: backgroundY }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full filter blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
            
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Interactive particles that respond to mouse - only show when mounted and mouse values exist */}
      {isMounted && mouseX && mouseY && (
        <>
          <motion.div 
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              x: mouseTransformX1,
              y: mouseTransformY1,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute w-1 h-1 bg-indigo-300/60 rounded-full"
            style={{
              x: mouseTransformX2,
              y: mouseTransformY2,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 bg-grid-pattern"
      />
    </div>
  );
};

export default BackgroundElements;
