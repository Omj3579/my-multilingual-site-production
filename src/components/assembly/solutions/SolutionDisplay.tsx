import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

interface SolutionData {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
  applications: string[];
  benefits: Array<{
    icon: any;
    title: string;
    description: string;
    metric: string;
  }>;
  certifications: string[];
  clientSuccess: string;
}

interface SolutionDisplayProps {
  activeSolution: number;
  solutionData: SolutionData;
  language: string;
}

export const SolutionDisplay: React.FC<SolutionDisplayProps> = ({
  activeSolution,
  solutionData,
  language
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSolution}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-2xl"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Solution Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                  <solutionData.icon size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {solutionData.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {solutionData.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {solutionData.description}
              </p>
            </div>

            {/* Applications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                {language === 'en' ? 'Key Applications' : 'Főbb Alkalmazások'}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {solutionData.applications.map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50"
                  >
                    <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{app}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                {language === 'en' ? 'Certifications' : 'Tanúsítványok'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {solutionData.certifications.map((cert) => (
                  <span 
                    key={cert} 
                    className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200/50"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits & Metrics */}
          <div className="space-y-8">
            {/* Key Benefits */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">
                {language === 'en' ? 'Key Benefits' : 'Főbb Előnyök'}
              </h4>
              
              {solutionData.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white hover:scale-105 transition-transform"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <benefit.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold">{benefit.title}</h5>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full">
                      {benefit.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Client Success */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star size={20} className="mr-2 text-yellow-500" />
                {language === 'en' ? 'Client Success' : 'Ügyfél Siker'}
              </h4>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                {solutionData.clientSuccess}
              </p>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{language === 'en' ? 'Learn More' : 'További Információ'}</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
