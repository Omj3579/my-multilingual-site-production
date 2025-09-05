import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { innovationContent } from './innovationContent';

interface InnovationTimelineProps {
  variants?: Record<string, any>;
  activeInnovation: number;
  setActiveInnovation: (index: number) => void;
}

const InnovationTimeline: React.FC<InnovationTimelineProps> = ({ 
  variants, 
  activeInnovation, 
  setActiveInnovation 
}) => {
  const { language } = useLanguage();
  const content = innovationContent[language];

  const getStatusColor = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'Deployed': 'from-green-500 to-emerald-500',
      'Production Ready': 'from-blue-500 to-cyan-500',
      'Scaling': 'from-purple-500 to-pink-500',
      'Research Phase': 'from-orange-500 to-red-500',
      'Development': 'from-yellow-500 to-orange-500',
      'Prototype': 'from-indigo-500 to-purple-500',
      'Bevezetett': 'from-green-500 to-emerald-500',
      'Gyártásra Kész': 'from-blue-500 to-cyan-500',
      'Skálázódás': 'from-purple-500 to-pink-500',
      'Kutatási Fázis': 'from-orange-500 to-red-500',
      'Fejlesztés': 'from-yellow-500 to-orange-500',
      'Prototípus': 'from-indigo-500 to-purple-500'
    };
    return statusMap[status] || 'from-gray-500 to-gray-600';
  };

  return (
    <motion.div variants={variants} className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Innovation Timeline' : 'Innovációs Ütemterv'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
      </div>

      {/* Timeline Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {content.timeline.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveInnovation(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeInnovation === index
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
            }`}
          >
            {item.year}
          </motion.button>
        ))}
      </div>

      {/* Active Innovation Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Main Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white">
                  {React.createElement(content.timeline[activeInnovation].icon, { size: 32 })}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {content.timeline[activeInnovation].title}
                  </h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                      {content.timeline[activeInnovation].category}
                    </span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(content.timeline[activeInnovation].status)} text-white text-sm font-medium rounded-full`}>
                      {content.timeline[activeInnovation].status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {content.timeline[activeInnovation].description}
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/50">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'en' ? 'Impact Achieved:' : 'Elért Hatás:'}
                </h5>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {content.timeline[activeInnovation].impact}
                </p>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock size={20} className="mr-2 text-purple-600" />
                  {language === 'en' ? 'Technologies Used:' : 'Használt Technológiák:'}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {content.timeline[activeInnovation].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle2 size={20} className="mr-2 text-green-600" />
                  {language === 'en' ? 'Key Results:' : 'Főbb Eredmények:'}
                </h5>
                <div className="space-y-2">
                  {content.timeline[activeInnovation].results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200/50"
                    >
                      <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>{language === 'en' ? 'Learn More' : 'További Információ'}</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default InnovationTimeline;
