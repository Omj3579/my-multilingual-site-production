import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Calendar, CheckCircle2, TrendingUp, Leaf, Zap, Globe, Award, Clock, ChevronRight } from 'lucide-react';
import { SustainabilityGoals as SustainabilityGoalsType } from '../types';
import { cardVariants, progressBarVariants, staggerChildren, pulseVariants, fadeInScale } from '../constants/animations';

interface SustainabilityGoalsProps {
  sustainabilityGoals: SustainabilityGoalsType;
}

export const SustainabilityGoals: React.FC<SustainabilityGoalsProps> = ({ 
  sustainabilityGoals 
}) => {
  const [animatedProgress, setAnimatedProgress] = useState<Record<number, number>>({});
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const progressMap: Record<number, number> = {};
      sustainabilityGoals.goals.forEach((goal, index) => {
        progressMap[index] = goal.progress;
      });
      setAnimatedProgress(progressMap);
    }, 500);

    return () => clearTimeout(timer);
  }, [sustainabilityGoals.goals]);

  const getIconForGoal = (target: string) => {
    const targetLower = target.toLowerCase();
    if (targetLower.includes('carbon') || targetLower.includes('emission')) return Leaf;
    if (targetLower.includes('energy')) return Zap;
    if (targetLower.includes('waste') || targetLower.includes('circular')) return Globe;
    return Target;
  };

  const getGradientForProgress = (progress: number) => {
    if (progress >= 80) return 'from-emerald-500 via-green-500 to-lime-400';
    if (progress >= 60) return 'from-blue-500 via-cyan-500 to-emerald-400';
    if (progress >= 40) return 'from-yellow-500 via-amber-500 to-orange-400';
    return 'from-red-500 via-pink-500 to-purple-400';
  };

  const timeRemaining = (deadline: string) => {
    const target = new Date(deadline + ', 2030');
    const now = new Date();
    const diffTime = target.getTime() - now.getTime();
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return Math.max(0, diffMonths);
  };

  return (
    <motion.div
      className="mb-16"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Header */}
      <motion.div 
        className="text-center mb-12"
        variants={fadeInScale}
      >
        <motion.div
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6"
          variants={pulseVariants}
          animate="animate"
        >
          <Award className="w-6 h-6 text-emerald-400" />
          <span className="text-emerald-300 font-semibold">2030 Sustainability Vision</span>
        </motion.div>
        
        <motion.h2
          className="text-5xl font-bold mb-6"
          variants={cardVariants}
        >
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            {sustainabilityGoals.title}
          </span>
        </motion.h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our commitment to a sustainable future through measurable goals and innovative solutions
        </p>
      </motion.div>

      {/* Progress Overview Bar */}
      <motion.div
        className="mb-12 p-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20"
        variants={cardVariants}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Overall Progress</h3>
          <motion.span 
            className="text-2xl font-bold text-emerald-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            {Math.round(sustainabilityGoals.goals.reduce((acc, goal) => acc + goal.progress, 0) / sustainabilityGoals.goals.length)}%
          </motion.span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: `${sustainabilityGoals.goals.reduce((acc, goal) => acc + goal.progress, 0) / sustainabilityGoals.goals.length}%` 
            }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sustainabilityGoals.goals.map((goal, index) => {
          const IconComponent = getIconForGoal(goal.target);
          const months = timeRemaining(goal.deadline);
          const isSelected = selectedGoal === index;
          
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setSelectedGoal(index)}
              onHoverEnd={() => setSelectedGoal(null)}
              className={`group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 cursor-pointer overflow-hidden ${
                isSelected ? 'border-emerald-400/50 scale-105' : 'border-white/20'
              }`}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5"
                animate={{
                  opacity: isSelected ? 1 : 0,
                  scale: isSelected ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Progress Ring Background */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 175.93" }}
                    animate={{ strokeDasharray: `${(animatedProgress[index] || 0) * 1.7593} 175.93` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#06D6A0" />
                      <stop offset="100%" stopColor="#00F5FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{goal.progress}%</span>
                </div>
              </motion.div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start mb-6 pr-20">
                  <motion.div
                    className="p-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl mr-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {goal.target}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-1" />
                        {goal.deadline}
                      </div>
                      <div className="flex items-center text-orange-300">
                        <Clock className="w-4 h-4 mr-1" />
                        {months} months left
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <motion.div 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                    goal.status === 'Ahead of Schedule' || goal.status === 'Időben Előrébb'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-4 h-4" />
                  {goal.status}
                </motion.div>

                {/* Advanced Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-300">Progress Tracking</span>
                    <motion.span 
                      className="text-lg font-bold text-white"
                      key={animatedProgress[index]}
                      initial={{ scale: 1.2, color: "#10B981" }}
                      animate={{ scale: 1, color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                    >
                      {animatedProgress[index] || 0}%
                    </motion.span>
                  </div>
                  
                  <div className="relative w-full bg-white/10 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getGradientForProgress(goal.progress)} rounded-full relative`}
                      variants={progressBarVariants}
                      initial="hidden"
                      animate="visible"
                      custom={animatedProgress[index] || 0}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress Milestones */}
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Key Initiatives */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" />
                    Active Initiatives
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {goal.initiatives.map((initiative, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/10 group-hover:border-emerald-400/20 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(16, 185, 129, 0.1)"
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          variants={pulseVariants}
                          animate="animate"
                        />
                        <span className="text-sm text-gray-300 flex-1">{initiative}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      className="absolute bottom-4 right-4 p-2 bg-emerald-500/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <ChevronRight className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
