import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SparkleSystemProps {
  sparkles: Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
  }>;
}

export const SparkleSystem: React.FC<SparkleSystemProps> = ({ sparkles }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className={`absolute ${sparkle.color}`}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={sparkle.size} />
        </motion.div>
      ))}
    </div>
  );
};

interface FloatingShapesProps {
  mousePosition: { x: number; y: number };
  y1: any;
  y2: any;
  rotate: any;
  scale: any;
  scrollYProgress: any;
}

export const FloatingShapes: React.FC<FloatingShapesProps> = ({ 
  y1, y2, rotate, scale, scrollYProgress 
}) => {
  return (
    <>
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl"
        style={{ y: y1, rotate, scale }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl"
        style={{ y: y2, rotate: scrollYProgress }}
        animate={{
          scale: [1, 0.8, 1],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </>
  );
};

interface DynamicBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ mousePosition }) => {
  return (
    <div 
      className="absolute inset-0 opacity-40 transition-all duration-700"
      style={{
        background: `radial-gradient(circle 1000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.4), rgba(219, 39, 119, 0.3), rgba(59, 130, 246, 0.2), transparent)`,
      }}
    />
  );
};
