import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Solution, Language } from '../types';

interface SolutionDetailsProps {
  solution: Solution;
  language: Language;
}

const SolutionDetails: React.FC<SolutionDetailsProps> = ({ solution, language }) => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${solution.color} text-white`}>
            <solution.icon size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {solution.title}
            </h3>
            <p className="text-lg text-blue-600 font-medium">
              {solution.subtitle}
            </p>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          {solution.description}
        </p>
      </div>

      {/* Applications */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">
          {language === 'en' ? 'Key Applications' : 'Főbb Alkalmazások'}
        </h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {solution.applications.map((app, index) => (
            <motion.div
              key={app}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50"
            >
              <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{app}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">
          {language === 'en' ? 'Core Technologies' : 'Alapvető Technológiák'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {solution.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full border border-purple-200/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">
          {language === 'en' ? 'Certifications' : 'Tanúsítványok'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {solution.certifications.map((cert) => (
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
  );
};

export default SolutionDetails;
