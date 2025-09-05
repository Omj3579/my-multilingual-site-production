import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useShowcaseAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return {
    containerRef,
    backgroundY,
    imageY
  };
};
