import React from 'react';
import { motion } from 'framer-motion';

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

interface GuaranteesProps {
  guarantees: Guarantee[];
  itemVariants: any;
  language: string;
}

export const Guarantees: React.FC<GuaranteesProps> = ({ 
  guarantees, 
  itemVariants, 
  language 
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          {language === 'en' ? 'Risk-Free Guarantees' : 'Kockázatmentes Garanciák'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((guarantee, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <guarantee.icon size={28} />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-3">{guarantee.title}</h4>
            <p className="text-sm text-purple-200 leading-relaxed">{guarantee.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
