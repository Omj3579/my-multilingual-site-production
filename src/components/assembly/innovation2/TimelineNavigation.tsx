import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TimelineItem } from './innovation2Content';
import { AnimationVariants } from '../shared/AnimationVariants';

interface TimelineNavigationProps {
  timeline: TimelineItem[];
  activeTimeline: number;
  setActiveTimeline: (index: number) => void;
  nextTimeline: () => void;
  prevTimeline: () => void;
}

const TimelineNavigation: React.FC<TimelineNavigationProps> = ({
  timeline,
  activeTimeline,
  setActiveTimeline,
  nextTimeline,
  prevTimeline
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
        <button
          onClick={prevTimeline}
          className="p-3 text-purple-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {timeline.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTimeline(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTimeline 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextTimeline}
          className="p-3 text-purple-200 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TimelineNavigation;
