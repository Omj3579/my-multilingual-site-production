import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook for scroll-based parallax effects
export const useParallax = (
  inputRange: number[] = [0, 1], 
  outputRange: string[] = ['0%', '-8%']
) => {
  const ref = useRef(null);
  
  // Only initialize scroll on client side
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Always call hooks, but use conditional values
  const backgroundYTransform = useTransform(smoothScroll, [0, 1], ['0%', '30%']);
  const contentYTransform = useTransform(smoothScroll, inputRange, outputRange);
  const staticBg = useMotionValue('0%');
  const staticContent = useMotionValue('0%');
  
  const backgroundY = isClient ? backgroundYTransform : staticBg;
  const contentY = isClient ? contentYTransform : staticContent;
  
  return { ref, scrollYProgress: smoothScroll, backgroundY, contentY };
};

// Simple parallax hook that returns just the motion value
export const useSimpleParallax = (
  inputRange: number[] = [0, 1], 
  outputRange: string[] = ['0%', '-8%']
) => {
  const { scrollYProgress } = useScroll();
  
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return useTransform(smoothScroll, inputRange, outputRange);
};

// Custom hook for mouse-based interactive effects
export const useMouseInteraction = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll();
  
  const springConfig = { stiffness: 50, damping: 10 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const parallaxX = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);
  
  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isClient) return;
      
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Normalized cursor position for blobs
      const normalizedX = e.clientX / window.innerWidth;
      const normalizedY = e.clientY / window.innerHeight;
      
      mouseX.set(x);
      mouseY.set(y);
      cursorX.set(normalizedX);
      cursorY.set(normalizedY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (isClient) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY, cursorX, cursorY, isClient]);

  return {
    containerRef,
    mousePosition,
    scrollYProgress,
    smoothMouseX,
    smoothMouseY,
    parallaxX,
    parallaxY,
    cursorX,
    cursorY
  };
};

// Custom hook for intersection observer with consistent options
export const useInViewAnimation = (options: Record<string, unknown> = {}) => {
  const defaultOptions = {
    triggerOnce: true,
    threshold: 0.1,
    ...options
  };
  
  return useInView(defaultOptions);
};

// Custom hook for staggered word animations
export const useWordAnimation = (text: string, highlightWords: string[] = []) => {
  const words = text.split(' ');
  
  return {
    words,
    isHighlighted: (word: string) => 
      highlightWords.some(hw => word.includes(hw.replace(/[,.]/g, '')))
  };
};
