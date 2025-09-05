import React from 'react';
import { motion, Variants } from 'framer-motion';
import { UniversalBenefit } from '../types';

interface UniversalBenefitsProps {
  benefits: UniversalBenefit[];
  containerVariants: Variants;
  itemVariants: Variants;
}

const UniversalBenefits: React.FC<UniversalBenefitsProps> = ({
  benefits,
  containerVariants,
  itemVariants
}) => {
  return (
    <motion.div 
      variants={containerVariants}
      className="mb-20"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Universal Assembly Benefits
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Regardless of your industry, our assembly solutions deliver consistent value through proven methodologies and cutting-edge technology.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <benefit.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {benefit.title}
            </h4>
            <p className="text-gray-600 mb-3">
              {benefit.description}
            </p>
            <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
              {benefit.improvement}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UniversalBenefits;
