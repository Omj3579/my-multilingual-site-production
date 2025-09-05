import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BarChart3, Users } from 'lucide-react';
import { type RDFocusProps } from '../types';

const RDFocus: React.FC<RDFocusProps> = ({
  rdFocus,
  language,
  itemVariants
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Future Research & Development' : 'Jövőbeli Kutatás & Fejlesztés'}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Exploring tomorrow\'s technologies to revolutionize assembly manufacturing'
            : 'A holnap technológiáinak kutatása az összeszerelési gyártás forradalmasításáért'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {rdFocus.map((focus, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200/50 shadow-lg"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {focus.title}
            </h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {focus.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Calendar size={16} className="text-purple-600" />
                <span className="text-gray-700">{focus.timeline}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <BarChart3 size={16} className="text-purple-600" />
                <span className="text-gray-700">{focus.investment}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users size={16} className="text-purple-600" />
                <span className="text-gray-700">{focus.team}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RDFocus;
