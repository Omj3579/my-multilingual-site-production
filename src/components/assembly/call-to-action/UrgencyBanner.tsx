import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface UrgencyBannerProps {
  title: string;
  urgencyTimer: number;
  itemVariants: any;
}

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ 
  title, 
  urgencyTimer, 
  itemVariants 
}) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="text-center"
    >
      <motion.div 
        className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-xl rounded-full border border-red-500/50 shadow-2xl"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 20px rgba(239, 68, 68, 0.5)',
            '0 0 40px rgba(249, 115, 22, 0.5)',
            '0 0 20px rgba(239, 68, 68, 0.5)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Flame size={20} className="text-yellow-300 animate-pulse" />
        <div className="text-white">
          <span className="font-bold">{title}</span>
          <span className="mx-3">•</span>
          <span className="font-mono text-yellow-300">{formatTime(urgencyTimer)}</span>
        </div>
        <Flame size={20} className="text-yellow-300 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};
