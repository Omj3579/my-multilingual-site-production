import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMouseInteraction, useParallax } from './hooks';

interface HeroImageProps {
  imageUrl: string;
  imageAlt: string;
  className?: string;
  overlayLabels?: {
    topLeft?: string;
    bottomRight?: string;
  };
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  imageAlt,
  className = '',
  overlayLabels
}) => {
  const { language } = useLanguage();  const { mousePosition } = useMouseInteraction();
  const { contentY: imageParallax } = useParallax([0, 1], ['0%', '-50px']);

  const defaultLabels = {
    topLeft: language === 'en' ? 'Precision Engineering' : 'Precíziós mérnöki munka',
    bottomRight: language === 'en' ? 'Advanced Technology' : 'Fejlett technológia'
  };

  const labels = { ...defaultLabels, ...overlayLabels };

  return (
    <motion.div 
      className={`hidden lg:flex justify-center items-center h-full ${className}`}
      style={{ y: imageParallax }}
    >
      <motion.div 
        className="relative w-full h-[500px] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="h-full w-full backdrop-blur-sm bg-white/20 rounded-2xl relative">
          {/* Enhanced image with 3D effect */}
          <motion.div 
            className="w-full h-full relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={imageUrl}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover z-10"
              style={{
                transform: `translateX(${-mousePosition.x / 60}px) translateY(${-mousePosition.y / 60}px) scale(1.1)`
              }}
            />
            
            {/* Floating elements over the image to create 3D effect */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500/20 rounded-full blur-md z-20"
              animate={{
                y: [-5, 5, -5],
                x: [5, -5, 5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-amber-500/20 rounded-full blur-md z-20"
              animate={{
                y: [8, -8, 8],
                x: [-5, 5, -5],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Image overlay with depth effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-transparent to-gray-900/20 z-20"
              animate={{
                background: [
                  "linear-gradient(to top right, rgba(17, 24, 39, 0.3), transparent, rgba(17, 24, 39, 0.2))",
                  "linear-gradient(to top right, rgba(17, 24, 39, 0.2), transparent, rgba(17, 24, 39, 0.3))",
                  "linear-gradient(to top right, rgba(17, 24, 39, 0.3), transparent, rgba(17, 24, 39, 0.2))"
                ]
              }}
              transition={{
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-xl rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-400/20 to-pink-500/20 blur-xl rounded-full transform -translate-x-1/2 translate-y-1/2" />
        
        {/* Glass reflection effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/30 to-transparent"
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        
        {/* Glass container border */}
        <div className="absolute inset-0 rounded-2xl border border-white/20" />
        
        {/* Floating UI elements */}
        {labels.topLeft && (
          <motion.div
            className="absolute top-6 left-6 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-sm text-gray-700 font-medium"
            animate={{
              y: [-2, 2, -2],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {labels.topLeft}
          </motion.div>
        )}
        
        {labels.bottomRight && (
          <motion.div
            className="absolute bottom-8 right-8 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-sm text-gray-700 font-medium"
            animate={{
              y: [2, -2, 2],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          >
            {labels.bottomRight}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
