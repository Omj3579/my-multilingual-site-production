
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { Clock, DollarSign, TrendingUp, Award, Users, Calendar } from 'lucide-react';
import { itemVariants } from '../shared/AnimationVariants';

interface CaseStudyResults {
  roi: string;
  productionIncrease: string;
  qualityImprovement: string;
  carbonReduction: string;
  energySavings: string;
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  timeline: string;
  investment: string;
  results: CaseStudyResults;
  impact: string;
  testimonial: string;
  clientLogo: string;
}

interface CaseStudiesCarouselProps {
  caseStudies: CaseStudy[];
  language: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({
  caseStudies,
  language,
  mouseX,
  mouseY
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          {language === 'en' ? 'Success Stories' : 'Sikertörténetek'}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            index={index}
            language={language}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>
    </motion.div>
  );
};

const CaseStudyCard: React.FC<{
  study: CaseStudy;
  index: number;
  language: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}> = ({ study, index, language, mouseX, mouseY }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -10 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
      style={{
        rotateX: useTransform(mouseY, [0, 1], [1, -1]),
        rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          {study.client.substring(0, 2)}
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">{study.client}</h4>
          <p className="text-indigo-300">{study.industry}</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h5 className="text-sm font-semibold text-indigo-300 mb-1">
            {language === 'en' ? 'Challenge:' : 'Kihívás:'}
          </h5>
          <p className="text-white text-sm leading-relaxed">{study.challenge}</p>
        </div>
        
        <div>
          <h5 className="text-sm font-semibold text-indigo-300 mb-1">
            {language === 'en' ? 'Solution:' : 'Megoldás:'}
          </h5>
          <p className="text-white text-sm leading-relaxed">{study.solution}</p>
        </div>
      </div>

      {/* Key Results */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 mb-6">
        <h5 className="text-green-300 font-semibold mb-3">
          {language === 'en' ? 'Key Results:' : 'Főbb Eredmények:'}
        </h5>
        <div className="grid grid-cols-2 gap-3">
          <ResultItem 
            icon={DollarSign}
            label="ROI"
            value={study.results.roi}
          />
          <ResultItem 
            icon={TrendingUp}
            label={language === 'en' ? 'Production' : 'Gyártás'}
            value={study.results.productionIncrease}
          />
          <ResultItem 
            icon={Award}
            label={language === 'en' ? 'Quality' : 'Minőség'}
            value={study.results.qualityImprovement}
          />
          <ResultItem 
            icon={Clock}
            label={language === 'en' ? 'Timeline' : 'Időkeret'}
            value={study.timeline}
          />
        </div>
      </div>

      {/* Impact Statement */}
      <div className="border-l-4 border-indigo-400 pl-4 mb-6">
        <p className="text-white text-sm italic leading-relaxed">"{study.impact}"</p>
      </div>

      {/* Testimonial */}
      <div className="bg-white/5 rounded-lg p-4">
        <p className="text-indigo-200 text-sm italic">"{study.testimonial}"</p>
      </div>
    </motion.div>
  );
};

const ResultItem: React.FC<{
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}> = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center space-x-2">
      <Icon size={16} className="text-green-400" />
      <div>
        <div className="text-green-300 text-xs font-medium">{label}</div>
        <div className="text-white text-sm font-bold">{value}</div>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;
