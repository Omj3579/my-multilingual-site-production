import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import styles from './BackgroundEffects.module.css';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface BackgroundEffectsProps {
  sparkles: Sparkle[];
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  sparkles,
  y1,
  y2,
  rotate,
  scale
}) => {
  return (
    <>
      {/* Ultra-sophisticated particle system */}
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
      </div>      {/* Dynamic gradient background that follows mouse */}
      <div 
        className={`absolute inset-0 opacity-40 transition-all duration-700 ${styles.dynamicBackground}`}
      />

      {/* Floating geometric shapes with ultra-sophisticated animations */}
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
        style={{ y: y2, rotate }}
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

export default BackgroundEffects;
