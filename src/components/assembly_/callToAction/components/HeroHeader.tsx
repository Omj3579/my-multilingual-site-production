import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Rocket, Crown, Gift } from 'lucide-react';

interface HeroHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  urgencyOffer: {
    value: string;
    subtitle: string;
  };
  itemVariants: Variants;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ 
  badge, 
  title, 
  subtitle, 
  description, 
  urgencyOffer, 
  itemVariants 
}) => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-xl border border-white/20 text-purple-200 mb-6">
          <Rocket size={16} className="mr-2" />
          {badge}
        </span>
      </motion.div>
      
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {title}
        <motion.span 
          className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {subtitle}
        </motion.span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-2xl text-purple-100 leading-relaxed mb-8"
      >
        {description}
      </motion.p>

      {/* Value Proposition Banner */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-2xl border border-yellow-400/30"
      >
        <Crown size={32} className="text-yellow-400" />
        <div className="text-left">
          <div className="text-2xl font-bold text-white">{urgencyOffer.value}</div>
          <div className="text-yellow-300">{urgencyOffer.subtitle}</div>
        </div>
        <Gift size={32} className="text-yellow-400" />
      </motion.div>
    </div>
  );
};

export default HeroHeader;
