import { useRef } from 'react';
import { useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';

export const useImpactAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.1, once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Advanced transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  return {
    containerRef,
    viewRef,
    inView,
    scrollYProgress,
    y1,
    y2,
    rotate,
    mouseX,
    mouseY
  };
};
