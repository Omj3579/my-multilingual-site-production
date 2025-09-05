import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  elements?: Array<{
    className: string;
    delay: number;
    duration: number;
    position: string;
  }>;
}

const defaultElements = [
  {
    className: "absolute w-4 h-4 rounded-full bg-[#f89c1d] opacity-70",
    delay: 0.2,
    duration: 2,
    position: "bottom-20 left-0"
  },
  {
    className: "absolute left-1/4 w-3 h-3 rounded-full bg-white opacity-50",
    delay: 0.7,
    duration: 2.3,
    position: "bottom-20 left-1/4"
  },
  {
    className: "absolute left-2/3 w-5 h-5 rounded-full bg-[#f89c1d] opacity-60",
    delay: 1.1,
    duration: 2.7,
    position: "bottom-20 left-2/3"
  },
  {
    className: "absolute left-1/2 w-2 h-2 rounded-full bg-white opacity-40",
    delay: 0.5,
    duration: 2.1,
    position: "bottom-20 left-1/2"
  }
];

const FloatingElements: React.FC<FloatingElementsProps> = ({ elements = defaultElements }) => {
  return (
    <div className="absolute bottom-20 left-0 w-full h-20 pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={element.className}
          animate={{
            y: [-20 - index * 5, -80 - index * 10],
            x: [0, index % 2 === 0 ? 30 : -20],
            opacity: [element.className.includes('opacity-70') ? 0.7 : 
                     element.className.includes('opacity-50') ? 0.5 : 
                     element.className.includes('opacity-60') ? 0.6 : 0.4, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
