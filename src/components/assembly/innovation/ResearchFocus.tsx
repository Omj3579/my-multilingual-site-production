import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { innovationContent } from './innovationContent';

interface ResearchFocusProps {
  variants?: any;
}

const ResearchFocus: React.FC<ResearchFocusProps> = ({ variants }) => {
  const { language } = useLanguage();
  const content = innovationContent[language];

  return (
    <motion.div variants={variants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Research & Development Focus' : 'Kutatás és Fejlesztés Fókusz'}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Exploring tomorrow\'s technologies to revolutionize assembly manufacturing'
            : 'A holnap technológiáinak kutatása az összeszerelési gyártás forradalmasításáért'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {content.rdFocus.map((focus, index) => (
          <motion.div
            key={index}
            variants={variants}
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

            {/* Expected Outcomes */}
            <div className="mt-4 pt-4 border-t border-purple-200/50">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">
                {language === 'en' ? 'Expected Outcomes:' : 'Várható Eredmények:'}
              </h5>
              <div className="space-y-1">
                {focus.expectedOutcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResearchFocus;
