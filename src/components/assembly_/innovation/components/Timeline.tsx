import React from 'react';
import { type TimelineProps } from '../types';

const Timeline: React.FC<TimelineProps> = ({ 
  timeline, 
  activeInnovation, 
  onInnovationSelect, 
  language 
}) => {
  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'en' ? 'Innovation Timeline' : 'Innovációs Idővonal'}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Journey through our breakthrough technologies and revolutionary advances in assembly manufacturing'
            : 'Utazás áttörő technológiáinkon és forradalmi előrelépéseinken az összeszerelési gyártásban'
          }
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
          {timeline.map((item, index) => (
            <button
              key={index}
              onClick={() => onInnovationSelect(index)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeInnovation === index
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
