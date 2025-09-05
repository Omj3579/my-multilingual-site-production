import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export const floatingAnimation = {
  y: [0, -10, 0],
  rotate: [0, 5, 0]
};

export const floatingTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const
};

export const scrollIndicatorAnimation = {
  y: [0, 10, 0]
};

export const scrollIndicatorTransition = {
  duration: 2,
  repeat: Infinity
};
