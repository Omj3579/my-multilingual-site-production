import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Award } from 'lucide-react';
import { HeroFeature } from './heroContent';
import { Variants } from '../shared/types';

interface HeroFeaturesProps {
  features: HeroFeature[];
  variants: Variants;
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features, variants }) => {
  // Map icon names to actual icons
  const iconMap = {
    "Efficient Production": Zap,
    "Consumer Safety": Shield,
    "Trusted Partner": Award,
    "Hatékony Termelés": Zap,
    "Fogyasztói Biztonság": Shield,
    "Megbízható Partner": Award
  };

  return (
    <motion.div 
      variants={variants}
      className="flex flex-wrap gap-3"
    >
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.text as keyof typeof iconMap] || Zap;
        
        return (
          <div 
            key={index}
            className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
          >
            <IconComponent size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{feature.text}</span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroFeatures;
