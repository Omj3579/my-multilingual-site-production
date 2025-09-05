import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { useMouseInteraction } from './shared/hooks';
import { ComponentProps } from './shared/types';
import ParticlesBackground from './shared/ParticlesBackground';
import GradientBlobs from './shared/GradientBlobs';
import HeroTitle from './shared/HeroTitle';
import HeroImage from './shared/HeroImage';

interface HeroWithTitleProps extends ComponentProps {
  title?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const HeroWithTitle: React.FC<HeroWithTitleProps> = ({ 
  title, 
  imageUrl = "https://flair-plastic.hu/wp-content/uploads/2024/05/machine-performing-in-mould-decoration-on-white-plastic-parts-showcasing-the-process-of-1.png.webp",
  imageAlt = "Injection Molding Machine",
  className = ''
}) => {
  const { mousePosition, containerRef, scrollYProgress } = useMouseInteraction();
  
  // Create spring-based scroll progress for smoother animations
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Background color gradients changing based on scroll
  const gradientStart = useTransform(
    smoothScroll,
    [0, 0.5, 1],
    ["hsla(210, 100%, 99%, 1)", "hsla(220, 100%, 98%, 1)", "hsla(230, 100%, 97%, 1)"]
  );
  
  const gradientEnd = useTransform(
    smoothScroll,
    [0, 0.5, 1],
    ["hsla(210, 50%, 95%, 1)", "hsla(220, 50%, 92%, 1)", "hsla(230, 50%, 90%, 1)"]
  );

  return (
    <motion.div 
      ref={containerRef}
      className={`w-full h-screen relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`
      }}
    >
      {/* Floating gradient blobs */}
      <GradientBlobs />
      
      {/* Particles Background */}
      <ParticlesBackground />
      
      <div className="relative z-10 h-full w-full mx-auto px-4 lg:px-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left side - Title */}
          <HeroTitle />
          
          {/* Right side - Enhanced image */}
          <HeroImage 
            imageUrl={imageUrl}
            imageAlt={imageAlt}
          />
        </div>
      </div>
      
      {/* Custom cursor effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-gray-800 pointer-events-none z-50 hidden md:block"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
};

export default HeroWithTitle;
