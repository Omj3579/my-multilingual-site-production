import React from 'react';
import { motion } from 'framer-motion';
import { useInViewAnimation } from './hooks';
import { fadeInUpVariants } from './animations';

interface ManufacturingGridProps {
  features: string[];
  additionalContent?: string;
  className?: string;
}

const ManufacturingGrid: React.FC<ManufacturingGridProps> = ({
  features,
  additionalContent,
  className = ''
}) => {  const [ref, inView] = useInViewAnimation();

  return (
    <motion.div 
      ref={ref}
      className={className}
      variants={fadeInUpVariants}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-sm border border-gray-100 relative"            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75 12.75L10 15L16.25 8.75" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-medium text-gray-800">{feature}</span>
            </div>
            
            <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-t-blue-100 border-l-[16px] border-l-transparent transform rotate-90" />
            </div>
          </motion.div>
        ))}
      </div>
      
      {additionalContent && (
        <motion.div
          className="mt-8 pl-2 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100"          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[17px] text-[#3E3E3E] leading-relaxed">
            {additionalContent}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ManufacturingGrid;
