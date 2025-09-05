import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionsBannerContent } from './solutionsBannerContent';

interface UniversalBenefitsProps {
  variants?: any;
}

const UniversalBenefits: React.FC<UniversalBenefitsProps> = ({ variants }) => {
  const { language } = useLanguage();
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const content = solutionsBannerContent[language];

  const itemVariants = variants || {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Universal Benefits' : 'Univerzális Előnyök'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.universalBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            onHoverStart={() => setHoveredBenefit(index)}
            onHoverEnd={() => setHoveredBenefit(null)}
            className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <benefit.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h4>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                  {benefit.improvement}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>

            <motion.div 
              className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={hoveredBenefit === index ? { width: '100%' } : { width: '70%' }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UniversalBenefits;
