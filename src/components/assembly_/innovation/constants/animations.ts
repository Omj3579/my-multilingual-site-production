/**
 * Animation constants for AssemblyInnovation component
 * Centralized animation configurations for consistent motion design
 */

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const timelineVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    y: -10,
    transition: { duration: 0.2 }
  }
};

export const pillarsHoverVariants = {
  hover: { 
    scale: 1.05, 
    y: -10,
    transition: { duration: 0.2 }
  }
};

export const rdFocusHoverVariants = {
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

export const buttonHoverVariants = {
  hover: { 
    scale: 1.05, 
    y: -2,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const floatingAnimations = {
  float1: {
    y: [0, -20, 0],
    opacity: [0.3, 1, 0.3],
    transition: { duration: 4, repeat: Infinity }
  },
  float2: {
    y: [0, -30, 0],
    opacity: [0.4, 1, 0.4],
    transition: { duration: 5, repeat: Infinity, delay: 1 }
  }
};

export const iconRotateAnimation = {
  rotate: [0, 360],
  scale: [1, 1.1, 1],
  transition: { 
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }
};

export const progressBarVariants = {
  hidden: { width: 0 },
  visible: (progress: string) => ({
    width: progress,
    transition: { duration: 1.5, ease: "easeOut" }
  })
};

export const resultItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1, 
    x: 0,
    transition: { delay: index * 0.1, duration: 0.4 }
  })
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const statusLightAnimation = {
  opacity: [0.3, 1, 0.3],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Scroll-based transform configurations
export const scrollTransforms = {
  backgroundRange: [0, 1] as [number, number],
  backgroundYRange: ['0%', '30%'] as [string, string],
  timelineRange: [0, 1] as [number, number],
  timelineYRange: ['100%', '-100%'] as [string, string]
};
