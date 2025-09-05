import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useScroll, useSpring, useMotionValue } from 'framer-motion';

interface WaveDividerProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
  animated?: boolean;
  pattern?: 'default' | 'gentle' | 'sharp' | 'layered';
  height?: number;
  inverted?: boolean;
  parallaxIntensity?: number;
  gradientStart?: string;
  gradientEnd?: string;
}

const WaveDivider = ({ 
  className = '', 
  color = 'currentColor',
  secondaryColor,
  animated = true,
  pattern = 'default',
  height = 100,
  inverted = false,
  parallaxIntensity = 1,
  gradientStart,
  gradientEnd,
}: WaveDividerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Use a spring for smoother wave animation
  const springX = useSpring(0, { stiffness: 100, damping: 30 });
  const springY = useSpring(0, { stiffness: 100, damping: 25 });
  
  // Mouse tracking for interactive waves
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Wave patterns
  const patterns = {
    default: "M0,20 C320,80 420,10 720,30 C1020,50 1220,80 1440,20 L1440,100 L0,100 Z",
    gentle: "M0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,100 L0,100 Z",
    sharp: "M0,50 L360,20 L720,50 L1080,20 L1440,50 L1440,100 L0,100 Z",
    layered: inverted 
      ? "M0,50 Q360,0 720,50 Q1080,100 1440,50 L1440,0 L0,0 Z" 
      : "M0,50 Q360,100 720,50 Q1080,0 1440,50 L1440,100 L0,100 Z",
  };
  
  // Layer offsets for parallax effect
  const offsets = {
    waveA: useTransform(scrollYProgress, [0, 1], [0, 30 * parallaxIntensity]),
    waveB: useTransform(scrollYProgress, [0, 1], [0, 20 * parallaxIntensity]),
    waveC: useTransform(scrollYProgress, [0, 1], [0, 10 * parallaxIntensity]),
  };
  
  // Layer opacity based on scroll
  const opacityA = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const opacityB = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.5]);
  const opacityC = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.3]);
  
  // Mouse effects for interactive waves
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(xRatio * 2 - 1);
    mouseY.set(yRatio * 2 - 1);
    
    springX.set(xRatio * 2 - 1);
    springY.set(yRatio * 2 - 1);
  };
  
  // Determine final colors
  const primaryColor = color;
  const secondColor = secondaryColor || (color === 'currentColor' ? 'currentColor' : `${color}90`);
  const thirdColor = secondaryColor ? `${secondaryColor}70` : (color === 'currentColor' ? 'currentColor' : `${color}70`);
  
  // Define gradient if needed
  const useGradient = gradientStart && gradientEnd;
  const gradientId = `wave-gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  // Calculate adjusted height based on pattern
  const heightMultiplier = pattern === 'layered' ? 1.5 : 1;
  const viewBoxHeight = height * heightMultiplier;
  
  return (
    <div 
      ref={containerRef}
      className={`w-full overflow-hidden ${className}`}
      onMouseMove={animated ? handleMouseMove : undefined}
      style={{ height: `${height}px` }}
    >
      <svg 
        viewBox={`0 0 1440 ${viewBoxHeight}`}
        className="w-full h-full"
        preserveAspectRatio="none"
        style={{ 
          transform: inverted ? 'rotate(180deg)' : 'none',
          filter: `drop-shadow(0 ${inverted ? '-2' : '2'}px 2px rgba(0,0,0,0.03))`
        }}
      >
        {useGradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
        )}
        
        {animated ? (
          <>
            {/* First wave layer - furthest back */}
            <motion.path 
              d={patterns[pattern]}
              fill={useGradient ? `url(#${gradientId})` : thirdColor}
              style={{ 
                y: offsets.waveA,
                opacity: opacityA,
                filter: 'blur(1px)'
              }}
              animate={{
                d: [
                  patterns[pattern],
                  pattern === 'sharp' 
                    ? patterns[pattern] // Don't animate sharp pattern
                    : patterns[pattern].replace(
                        /C(\d+),(\d+)/g, 
                        (_, x, y) => `C${Number(x) + 30},${Number(y) - 10}`
                      )
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            {/* Second wave layer - middle */}
            <motion.path 
              d={patterns[pattern]}
              fill={useGradient ? `url(#${gradientId})` : secondColor}
              style={{ 
                y: offsets.waveB,
                opacity: opacityB,
              }}
              animate={{
                d: [
                  patterns[pattern],
                  pattern === 'sharp' 
                    ? patterns[pattern] // Don't animate sharp pattern
                    : patterns[pattern].replace(
                        /C(\d+),(\d+)/g, 
                        (_, x, y) => `C${Number(x) - 40},${Number(y) + 15}`
                      )
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            
            {/* Main wave layer - foreground */}
            <motion.path 
              d={patterns[pattern]}
              fill={useGradient ? `url(#${gradientId})` : primaryColor}
              style={{ 
                y: offsets.waveC,
                x: useTransform(springX, [-1, 1], [-5, 5]),
                scaleX: useTransform(springX, [-1, 1], [0.995, 1.005]),
              }}
              animate={{
                d: [
                  patterns[pattern],
                  pattern === 'sharp' 
                    ? patterns[pattern] // Don't animate sharp pattern
                    : patterns[pattern].replace(
                        /C(\d+),(\d+)/g, 
                        (_, x, y) => `C${Number(x) + 10},${Number(y) - 5}`
                      )
                ],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        ) : (
          // Static version
          <path 
            d={patterns[pattern]}
            fill={useGradient ? `url(#${gradientId})` : primaryColor}
          />
        )}
      </svg>
    </div>
  );
};

export default WaveDivider;
