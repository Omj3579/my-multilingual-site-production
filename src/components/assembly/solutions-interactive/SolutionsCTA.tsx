import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle, Phone } from 'lucide-react';
import { SolutionsContent } from './solutionsContent';
import { Variants } from 'framer-motion';

interface SolutionsCTAProps {
  content: SolutionsContent;
  itemVariants: Variants;
}

const SolutionsCTA: React.FC<SolutionsCTAProps> = ({ content, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-5" />
      
      {/* Content */}
      <div className="relative z-10 text-center p-12 border border-blue-200/50 rounded-3xl bg-white/80 backdrop-blur-sm">
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            {content.cta.title}
          </h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {content.cta.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {content.cta.buttonText}
              <ArrowRight 
                size={20} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </motion.button>

            {/* Secondary Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                title="Download Brochure"
              >
                <Download size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                title="Live Chat"
              >
                <MessageCircle size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                title="Call Now"
              >
                <Phone size={20} />
              </motion.button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm font-medium">Custom Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>
  );
};

export default SolutionsCTA;
