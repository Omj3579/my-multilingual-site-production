import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../shared/hooks';

interface BackgroundPatternProps {
  children: React.ReactNode;
  className?: string;
  pattern?: 'grid' | 'dots' | 'mesh';
  gradient?: string;
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  children,
  className = '',
  pattern = 'grid',
  gradient = 'from-[#f5f7fa] to-[#e8eef5]'
}) => {
  const { ref, backgroundY } = useParallax();

  const getPatternDataURL = () => {
    switch (pattern) {
      case 'dots':
        return `data:image/svg+xml,${encodeURIComponent(`
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g fill="#9C92AC" fillOpacity="0.1">
                <circle cx="30" cy="30" r="1.5"/>
              </g>
            </g>
          </svg>
        `)}`;
      case 'mesh':
        return `data:image/svg+xml,${encodeURIComponent(`
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g stroke="#9C92AC" strokeWidth="0.5" strokeOpacity="0.1">
                <path d="M40 0L0 0 0 40M40 0L40 40"/>
              </g>
            </g>
          </svg>
        `)}`;
      default: // grid
        return `data:image/svg+xml,${encodeURIComponent(`
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g fill="#9C92AC" fillOpacity="0.1">
                <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/>
              </g>
            </g>
          </svg>
        `)}`;
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background with pattern */}      <motion.div 
        className={`absolute inset-0 bg-gradient-to-b ${gradient} -z-10`}
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: getPatternDataURL(),
            backgroundRepeat: 'repeat'
          }}
        />
      </motion.div>
      
      {children}
    </div>
  );
};
