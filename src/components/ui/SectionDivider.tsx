import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  color?: string;
  style?: 'angled' | 'straight' | 'chevron' | 'dots';
  height?: number;
  animated?: boolean;
  accentColor?: string;
}

const SectionDivider = ({
  color = 'white',
  style = 'straight',
  height = 80,
  animated = true,
  accentColor = '#f39e74'
}: SectionDividerProps) => {
  
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
            <div style={{ position: 'absolute', inset: 0, backgroundColor: color }}></div>
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
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`, opacity: 0.3 }}></div>
          </div>
        );
      
      case 'straight':
      default:
        return (
          <div className="relative w-full h-full overflow-hidden">
            {/* Main fill */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: color }}></div>
            
            {/* Accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`, opacity: 0.3 }}></div>
            
            {/* Secondary accent line */}
            <div style={{ position: 'absolute', top: '3px', left: 0, right: 0, height: '1px', background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`, opacity: 0.1 }}></div>
          </div>
        );
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: `${height}px`,
      overflow: 'hidden'
    }}>
      {animated ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ 
            width: '100%', 
            height: '100%',
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