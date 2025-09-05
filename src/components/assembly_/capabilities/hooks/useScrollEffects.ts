import { useRef } from 'react';
import { useScroll, useTransform, useInView } from 'framer-motion';

export const useScrollEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(viewRef, { amount: 0.2, once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return {
    containerRef,
    viewRef,
    isInView,
    scrollYProgress,
    backgroundY
  };
};
