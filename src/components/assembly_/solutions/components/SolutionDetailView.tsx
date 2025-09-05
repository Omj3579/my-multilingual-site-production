import React from 'react';
import { motion, AnimatePresence, useTransform, MotionValue } from 'framer-motion';
import { Solution, Language } from '../types';
import SolutionDetails from './SolutionDetails';
import PerformanceMetrics from './PerformanceMetrics';
import CaseStudyHighlight from './CaseStudyHighlight';
import ActionButtons from './ActionButtons';

interface SolutionDetailViewProps {
  activeSolution: number;
  solution: Solution;
  language: Language;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({
  activeSolution,
  solution,
  language,
  mouseX,
  mouseY
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
        style={{
          rotateX: useTransform(mouseY, [0, 1], [1, -1]),
          rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Solution Details */}
          <SolutionDetails solution={solution} language={language} />

          {/* Metrics & Case Study */}
          <div className="space-y-8">
            {/* Performance Metrics */}
            <PerformanceMetrics solution={solution} language={language} />

            {/* Case Study Highlight */}
            <CaseStudyHighlight solution={solution} language={language} />

            {/* Action Buttons */}
            <ActionButtons language={language} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SolutionDetailView;
