import { useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';
import type { MousePosition } from '../types';

export const useSolutionsAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [activeSolution, setActiveSolution] = useState(0);
  
  const inView = useInView(viewRef, { amount: 0.1, once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);
  
  return {
    containerRef,
    viewRef,
    inView,
    activeSolution,
    setActiveSolution,
    mousePosition,
    scrollYProgress,
    backgroundY,
    y1,
    y2,
    scale,
    rotate,
    mouseX,
    mouseY,
    handleMouseMove
  };
};
