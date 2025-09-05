import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { innovationContent } from './innovationContent';

interface InnovationCategoriesProps {
  variants?: any;
}

const InnovationCategories: React.FC<InnovationCategoriesProps> = ({ variants }) => {
  const { language } = useLanguage();
  const content = innovationContent[language];

  return (
    <motion.div variants={variants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Innovation Categories' : 'Innovációs Kategóriák'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {content.categories.map((category, index) => (
          <motion.div
            key={index}
            variants={variants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                <category.icon size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h4>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mt-2">
                  {category.investmentLevel}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {category.description}
            </p>

            {/* Innovations List */}
            <div className="space-y-3 mb-6">
              <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {language === 'en' ? 'Key Innovations:' : 'Főbb Innovációk:'}
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {category.innovations.map((innovation, innovationIndex) => (
                  <motion.div
                    key={innovationIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + innovationIndex * 0.05 }}
                    className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200/50 hover:bg-purple-50 hover:border-purple-200 transition-colors"
                  >
                    {innovation}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className={`bg-gradient-to-r ${category.color} bg-opacity-10 rounded-xl p-4 mb-6`}>
              <h5 className="text-sm font-semibold text-gray-700 mb-1">
                {language === 'en' ? 'Measured Impact:' : 'Mért Hatás:'}
              </h5>
              <p className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.impact}
              </p>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-4 py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
            >
              <span>{language === 'en' ? 'Explore Technology' : 'Technológia Felfedezése'}</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InnovationCategories;
