import React from 'react';
import { Separator } from "@/components/ui/separator";
import { motion } from 'framer-motion';
import { useInViewAnimation } from './shared/hooks';
import { ComponentProps } from './shared/types';

interface SectionDividerProps extends ComponentProps {
  maxWidth?: string;
  height?: string;
  gradient?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '',
  maxWidth = 'max-w-3xl',
  height = 'h-[1.5px]',
  gradient = 'from-transparent via-gray-400 to-transparent'
}) => {
  const { ref, controls } = useInViewAnimation();
  
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: { 
            opacity: 1, 
            scaleX: 1,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            }
          }
        }}
        initial="hidden"
        animate={controls}
        className="w-full flex items-center justify-center"
      >
        <Separator className={`bg-gradient-to-r ${gradient} ${height} ${maxWidth} w-full`} />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
