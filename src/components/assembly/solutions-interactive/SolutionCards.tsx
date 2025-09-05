import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2, Award, TrendingUp } from 'lucide-react';
import { SolutionItem } from './solutionsContent';
import { Variants } from 'framer-motion';

interface SolutionCardsProps {
  solutions: SolutionItem[];
  activeSolution: number;
  setActiveSolution: (index: number) => void;
  expandedSolution: number | null;
  setExpandedSolution: (index: number | null) => void;
  itemVariants: Variants;
}

const SolutionCards: React.FC<SolutionCardsProps> = ({
  solutions,
  activeSolution,
  setActiveSolution,
  expandedSolution,
  setExpandedSolution,
  itemVariants
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Assembly Solutions</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => {
              setActiveSolution(index);
              setExpandedSolution(expandedSolution === index ? null : index);
            }}
            className={`group cursor-pointer bg-white rounded-2xl p-6 border transition-all duration-300 ${
              activeSolution === index
                ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20'
                : 'border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300'
            }`}
          >
            {/* Solution Icon & Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                <solution.icon size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h4>
                <p className="text-sm text-gray-500">{solution.industry}</p>
              </div>
              <div className="text-gray-400">
                {expandedSolution === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Complexity:</span>
                <span className="font-medium text-gray-900">{solution.complexity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Volume:</span>
                <span className="font-medium text-gray-900">{solution.volume}</span>
              </div>
            </div>

            {/* Key Metrics Preview */}
            <div className="space-y-2">
              {Object.entries(solution.metrics).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex justify-between text-xs">
                  <span className="text-gray-500">{key}:</span>
                  <span className="font-semibold text-blue-600">{value}</span>
                </div>
              ))}
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedSolution === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200 space-y-6"
                >
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Applications */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Applications</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.applications.slice(0, 4).map((app) => (
                        <div key={app} className="flex items-center space-x-2">
                          <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{app}</span>
                        </div>
                      ))}
                      {solution.applications.length > 4 && (
                        <span className="text-xs text-blue-600 font-medium">
                          +{solution.applications.length - 4} more...
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-1">
                      {solution.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {solution.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{solution.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">Certifications</h5>
                    <div className="flex flex-wrap gap-1">
                      {solution.certifications.map((cert) => (
                        <div key={cert} className="flex items-center space-x-1">
                          <Award size={12} className="text-yellow-500" />
                          <span className="text-xs text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Preview */}
                  {solution.caseStudies.length > 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp size={14} className="text-green-600" />
                        <h5 className="text-sm font-semibold text-green-800">Success Story</h5>
                      </div>
                      <p className="text-xs text-green-700">
                        <strong>{solution.caseStudies[0].client}:</strong> {solution.caseStudies[0].result}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SolutionCards;
