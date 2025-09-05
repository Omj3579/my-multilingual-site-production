import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Solution } from '../types';
import styles from './SolutionDisplay.module.css';

interface SolutionDisplayProps {
  solution: Solution;
  solutionVariants: Variants;
  itemVariants: Variants;
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({
  solution,
  solutionVariants,
  itemVariants
}) => {
  return (
    <motion.div
      key={solution.id}
      variants={solutionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="relative min-h-screen mb-32 overflow-hidden"
    >
      {/* Futuristic Background Layer */}
      <div className="absolute inset-0">
        {/* Primary Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover scale-110 opacity-40"
            priority
          />
        </div>        {/* Sophisticated Gradient Mesh */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-indigo-900/65" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-900/75 via-transparent to-slate-800/45" />
          {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 z-30 opacity-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/18 via-indigo-500/12 to-transparent" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-40 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Panel */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-10">
              {/* Solution Header */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-blue-400 tracking-widest uppercase">
                      Enterprise Solution
                    </div>
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight">
                      {solution.title}
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl">
                  {solution.description}
                </p>
              </div>

              {/* Key Metrics/Features Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300 transition-colors" />
                    Core Capabilities
                  </h3>
                  <div className="space-y-3">
                    {solution.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400/60 rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3 group-hover:bg-indigo-300 transition-colors" />
                    Industry Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.slice(0, 4).map((app, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-xs text-blue-200 rounded-lg border border-blue-400/20 font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    Explore Solution
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                  <span className="flex items-center">
                    Technical Specs
                    <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right Visual Panel */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>
                  
                  {/* Floating Info Cards */}
                  <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl">
                    <div className="text-2xl font-bold text-white">{solution.features.length}</div>
                    <div className="text-xs text-slate-300 uppercase tracking-wide">Features</div>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl border border-blue-400/20 rounded-xl p-4 shadow-xl">
                    <div className="text-2xl font-bold text-blue-300">{solution.applications.length}+</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Industries</div>
                  </div>
                </div>

                {/* Ambient Lighting Effects */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 rounded-full blur-3xl opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Advanced Geometric Decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${styles.gridPattern}`} />
      </div>
    </motion.div>
  );
};

export default SolutionDisplay;
