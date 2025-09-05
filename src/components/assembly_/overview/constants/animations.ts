import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
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

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const statCountVariants: Variants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: { duration: 0.5, type: "spring" }
  }
};

export const progressBarVariants: Variants = {
  hidden: { width: 0 },
  visible: { 
    width: '100%',
    transition: { duration: 1, ease: "easeOut" }
  }
};
