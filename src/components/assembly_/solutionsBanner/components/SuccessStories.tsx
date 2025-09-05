import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SuccessStory } from '../types';

interface SuccessStoriesProps {
  stories: SuccessStory[];
  containerVariants: Variants;
  itemVariants: Variants;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({
  stories,
  containerVariants,
  itemVariants
}) => {
  return (
    <motion.div 
      variants={containerVariants}
      className="mb-20"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Success Stories Across Industries
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          See how our assembly solutions have transformed businesses across different sectors.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        className="grid lg:grid-cols-3 gap-8"
      >
        {stories.map((story, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">{story.client}</h4>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {story.industry}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Challenge:</h5>
                <p className="text-gray-600 text-sm">{story.challenge}</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Solution:</h5>
                <p className="text-gray-600 text-sm">{story.solution}</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <h5 className="font-semibold text-green-800 mb-2">Result:</h5>
                <p className="text-green-700 text-sm font-medium">{story.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SuccessStories;
