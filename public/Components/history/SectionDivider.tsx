import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionDividerProps {
  color?: string;
  style?: 'angled' | 'straight' | 'chevron' | 'dots';
  height?: number;
  animated?: boolean;
  targetRef?: React.RefObject<HTMLElement>;
  parallaxIntensity?: number;
  bgColor?: string;
  accentColor?: string;
}

const SectionDivider = ({
  color = 'white',
  style = 'straight',
  height = 80,
  animated = true,
  targetRef,
  parallaxIntensity = 1,
  bgColor = 'transparent',
  accentColor = '#f39e74'
}: SectionDividerProps) => {
  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -20 * parallaxIntensity]
  );
  
  // Render the appropriate divider style
  const renderDivider = () => {
    switch (style) {
      case 'angled':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ width: '100%', height: `${height}px` }}
          >
            <path
              d="M0,0L1200,100H0V0Z"
              fill={color}
            ></path>
            <path
              d="M0,0L1200,100H0V0Z"
              fill={accentColor}
              opacity="0.2"
              transform="translate(0, 2)"
            ></path>
          </svg>
        );
        
      case 'chevron':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ width: '100%', height: `${height}px` }}
          >
            <path
              d="M0,0L600,80L1200,0V120H0V0Z"
              fill={color}
            ></path>
            <path
              d="M0,0L600,80L1200,0V120H0V0Z"
              fill={accentColor}
              opacity="0.2"
              transform="translate(0, 3)"
            ></path>
          </svg>
        );
        
      case 'dots':
        return (
          <div className="relative w-full h-full overflow-hidden">
            <div className={`absolute inset-0 bg-${color}`}></div>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: accentColor,
                  opacity: 0.15 + (i * 0.03),
                  left: `${(i * 5) + Math.random() * 3}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
            <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${accentColor} to-transparent opacity-30`}></div>
          </div>
        );
      
      case 'straight':
      default:
        return (
          <div className="relative w-full h-full overflow-hidden">
            {/* Main fill */}
            <div className={`absolute inset-0 bg-${color}`}></div>
            
            {/* Accent line */}
            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${accentColor} to-transparent opacity-30`}></div>
            
            {/* Secondary accent line */}
            <div className={`absolute top-[3px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${accentColor} to-transparent opacity-10`}></div>
          </div>
        );
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: `${height}px`, 
      backgroundColor: bgColor,
      overflow: 'hidden'
    }}>
      {animated ? (
        <motion.div
          style={{ 
            width: '100%', 
            height: '100%',
            y: translateY
          }}
        >
          {renderDivider()}
        </motion.div>
      ) : (
        <div style={{ width: '100%', height: '100%' }}>
          {renderDivider()}
        </div>
      )}
    </div>
  );
};

export default SectionDivider;