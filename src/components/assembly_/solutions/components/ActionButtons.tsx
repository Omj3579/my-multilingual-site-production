import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Language } from '../types';

interface ActionButtonsProps {
  language: Language;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ language }) => {
  return (
    <div className="flex space-x-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {language === 'en' ? 'Get Quote' : 'Árajánlat Kérése'}
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Download size={20} />
      </motion.button>
    </div>
  );
};

export default ActionButtons;
