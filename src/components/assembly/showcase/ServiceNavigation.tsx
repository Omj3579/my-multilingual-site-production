import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceNavigationProps {
  activeShowcase: number;
  servicesLength: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  activeShowcase,
  servicesLength,
  onPrevious,
  onNext,
  onSelect
}) => {
  const { language } = useLanguage();

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
        <button
          onClick={onPrevious}
          className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
          aria-label={language === 'en' ? 'Previous service' : 'Előző szolgáltatás'}
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {Array.from({ length: servicesLength }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeShowcase 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-blue-400'
              }`}
              aria-label={`${language === 'en' ? 'Go to service' : 'Ugrás a szolgáltatáshoz'} ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={onNext}
          className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
          aria-label={language === 'en' ? 'Next service' : 'Következő szolgáltatás'}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServiceNavigation;
