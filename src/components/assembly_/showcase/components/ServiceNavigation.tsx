import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ServiceNavigationProps } from '../types';

export const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  services,
  activeShowcase,
  setActiveShowcase,
  onNext,
  onPrev
}) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
        <button
          onClick={onPrev}
          className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
          aria-label="Previous service"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveShowcase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeShowcase 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={onNext}
          className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
          aria-label="Next service"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
