import React from 'react';
import { motion } from 'framer-motion';
import { ChallengeItem } from './overviewContent';
import { AnimationVariants } from './types';

interface ChallengesSectionProps {
  title: string;
  subtitle: string;
  items: ChallengeItem[];
  itemVariants: AnimationVariants;
  cardVariants: AnimationVariants;
}

const ChallengesSection: React.FC<ChallengesSectionProps> = ({ 
  title, 
  subtitle, 
  items, 
  itemVariants, 
  cardVariants 
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="text-center lg:text-left">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600">
          {subtitle}
        </p>
      </div>
      
      <div className="space-y-6">
        {items.map((challenge, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <challenge.icon size={24} className="text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {challenge.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChallengesSection;
