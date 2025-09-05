import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, DollarSign, TrendingUp, Award, ChevronRight, Sparkles, Target } from 'lucide-react';
import { CaseStudy } from '../types';
import { cardVariants, staggerChildren, slideInFromLeft, pulseVariants } from '../constants/animations';

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <motion.div
      className="mb-16"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Header Section */}
      <motion.div 
        className="text-center mb-12"
        variants={slideInFromLeft}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6"
          variants={pulseVariants}
          animate="animate"
        >
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-blue-300 font-medium">Success Stories</span>
        </motion.div>
        
        <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
          Transformative Impact
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Real results from industry leaders who partnered with us to achieve breakthrough innovations
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(study.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full flex flex-col overflow-hidden"
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-3xl"
              animate={{
                opacity: hoveredCard === study.id ? 1 : 0,
                scale: hoveredCard === study.id ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Card Number Badge */}
            <motion.div
              className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.5 }}
            >
              {index + 1}
            </motion.div>

            <div className="relative z-10">
              {/* Header Section */}
              <div className="flex items-center mb-6">
                <motion.div
                  className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mr-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Building className="w-8 h-8 text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {study.client}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-blue-300 border border-blue-400/30">
                      {study.industry}
                    </span>
                    <motion.div
                      className="p-1 rounded-full bg-green-500/20"
                      variants={pulseVariants}
                      animate="animate"
                    >
                      <Award className="w-3 h-3 text-green-400" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution Section */}
              <div className="mb-6 space-y-4">
                <motion.div
                  className="p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-400/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h4 className="text-sm font-semibold text-red-300 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </motion.div>
                
                <motion.div
                  className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Solution
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </motion.div>
              </div>

              {/* Timeline & Investment */}
              <div className="flex items-center justify-between mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                <motion.div 
                  className="flex items-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium">{study.timeline}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-green-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{study.investment}</span>
                </motion.div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(study.results).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.15)"
                    }}
                  >
                    <motion.div
                      className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {typeof value === 'string' ? value : `${value}%`}
                    </motion.div>
                    <div className="text-xs text-gray-400 capitalize leading-tight">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial & Impact */}
              <div className="mt-auto space-y-4">
                <motion.div
                  className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute top-2 right-2 text-blue-400/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                  <p className="text-gray-300 text-sm italic leading-relaxed mb-3">
                    &ldquo;{study.testimonial}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300 text-xs font-medium">Client Testimonial</span>
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-400/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <p className="text-emerald-300 text-sm font-medium flex-1">
                    {study.impact}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
