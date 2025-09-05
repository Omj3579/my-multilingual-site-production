import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { TimelineItem } from './innovation2Content';
import { CheckCircle2 } from 'lucide-react';

interface TimelineContentProps {
  activeTimelineItem: TimelineItem;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const TimelineContent: React.FC<TimelineContentProps> = ({
  activeTimelineItem,
  mouseX,
  mouseY
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl"
      style={{
        rotateX: useTransform(mouseY, [0, 1], [1, -1]),
        rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Timeline Content */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${activeTimelineItem.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
                {activeTimelineItem.year}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {activeTimelineItem.title}
                </h3>
                <p className="text-lg text-purple-300 font-medium">
                  {activeTimelineItem.subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-purple-100 leading-relaxed">
              {activeTimelineItem.description}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">Key Achievements</h4>
            <div className="grid gap-3">
              {activeTimelineItem.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm"
                >
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-purple-100">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {activeTimelineItem.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-lg text-sm font-medium border border-purple-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Display */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white">Performance Metrics</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/30">
              <div className="text-3xl font-bold text-blue-300 mb-2">
                {activeTimelineItem.metrics.capacity}
              </div>
              <div className="text-blue-200 text-sm">Daily Capacity</div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-400/30">
              <div className="text-3xl font-bold text-green-300 mb-2">
                {activeTimelineItem.metrics.accuracy}
              </div>
              <div className="text-green-200 text-sm">Accuracy Rate</div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl border border-purple-400/30">
              <div className="text-3xl font-bold text-purple-300 mb-2">
                {activeTimelineItem.metrics.clients}
              </div>
              <div className="text-purple-200 text-sm">Client Partners</div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-400/30">
              <div className="text-3xl font-bold text-orange-300 mb-2">
                {activeTimelineItem.metrics.workforce}
              </div>
              <div className="text-orange-200 text-sm">Workforce</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineContent;
