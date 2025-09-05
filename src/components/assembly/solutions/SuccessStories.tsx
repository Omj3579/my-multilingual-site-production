import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionsBannerContent } from './solutionsBannerContent';

interface SuccessStoriesProps {
  variants?: any;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ variants }) => {
  const { language } = useLanguage();
  const content = solutionsBannerContent[language];

  const itemVariants = variants || {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Success Stories' : 'Sikertörténetek'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {content.successStories.map((story, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-gray-900">{story.client}</h4>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {story.industry}
                </span>
              </div>
              
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-1">
                  {language === 'en' ? 'Challenge:' : 'Kihívás:'}
                </h5>
                <p className="text-sm text-gray-600">{story.challenge}</p>
              </div>
              
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-1">
                  {language === 'en' ? 'Solution:' : 'Megoldás:'}
                </h5>
                <p className="text-sm text-gray-600">{story.solution}</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200/50">
                <h5 className="text-sm font-semibold text-green-800 mb-1">
                  {language === 'en' ? 'Result:' : 'Eredmény:'}
                </h5>
                <p className="text-sm text-green-700 font-medium">{story.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessStories;
