import { useRef, useState } from 'react';
import { useScroll, useTransform, useInView } from 'framer-motion';

export const useSolutionsBannerAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef(null);
  const [activeSolution, setActiveSolution] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  
  const inView = useInView(viewRef, { amount: 0.1, once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundYSecondary = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  
  return {
    containerRef,
    viewRef,
    inView,
    activeSolution,
    setActiveSolution,
    hoveredBenefit,
    setHoveredBenefit,
    scrollYProgress,
    backgroundY,
    backgroundYSecondary
  };
};
