import React from 'react';
import { Star } from 'lucide-react';
import { Solution, Language } from '../types';

interface CaseStudyHighlightProps {
  solution: Solution;
  language: Language;
}

const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({ solution, language }) => {
  const caseStudy = solution.caseStudies[0];
  
  if (!caseStudy) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Star size={20} className="mr-2 text-yellow-500" />
        {language === 'en' ? 'Success Story' : 'Sikertörténet'}
      </h4>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-600">
            {language === 'en' ? 'Client:' : 'Ügyfél:'} {caseStudy.client}
          </p>
          <p className="text-sm font-medium text-gray-600">
            {language === 'en' ? 'Challenge:' : 'Kihívás:'} {caseStudy.challenge}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-blue-800">
            {language === 'en' ? 'Solution:' : 'Megoldás:'} {caseStudy.solution}
          </p>
          <p className="text-sm font-bold text-green-800">
            {language === 'en' ? 'Result:' : 'Eredmény:'} {caseStudy.result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHighlight;
