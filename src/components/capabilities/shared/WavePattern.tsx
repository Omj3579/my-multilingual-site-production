import React from 'react';
import { motion } from 'framer-motion';

interface WavePatternProps {
  position: 'top' | 'bottom';
  height?: string;
  pathData?: string;
  delay?: number;
  duration?: number;
  rotate?: boolean;
}

const WavePattern: React.FC<WavePatternProps> = ({
  position,
  height = position === 'top' ? '60px' : '100px',
  pathData,
  delay = position === 'top' ? 0 : 0.5,
  duration = 1.5,
  rotate = position === 'top'
}) => {
  const defaultPath = position === 'top' 
    ? "M0,0 C150,100 350,0 500,100 C650,200 850,100 1200,0 L1200,120 L0,120 Z"
    : "M0,0 C150,100 1050,0 1200,100 L1200,120 L0,120 Z";

  return (
    <div className={`absolute ${position}-0 left-0 w-full overflow-hidden leading-[0] ${rotate ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full"
        style={{ height }}
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration, ease: "easeInOut", delay }}
          d={pathData || defaultPath}
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default WavePattern;
