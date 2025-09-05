import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AnimatedText } from './shared/AnimatedText';
import { useInViewAnimation } from './shared/hooks';
import { commitmentText, highlightWords } from './shared/constants';
import { ComponentProps } from './shared/types';
import FloatingElements from './shared/FloatingElements';
import WavePattern from './shared/WavePattern';

const CommitmentCallout: React.FC<ComponentProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const { ref, controls } = useInViewAnimation();

  return (
    <section className={`relative bg-gradient-to-br from-[#232C1E] to-[#354327] text-[#F1F1F1] font-montserrat overflow-hidden ${className}`}>
      {/* Top wave */}
      <WavePattern position="top" />

      {/* Main Text Content */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-left" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          className="text-6xl sm:text-[34px] md:text-[45px] font-bold leading-relaxed md:leading-[1.6]"
        >
          <AnimatedText
            text={commitmentText[language]}
            highlightWords={highlightWords[language]}
            highlightColor="text-[#f89c1d]"
            className="text-6xl sm:text-[34px] md:text-[45px] font-bold leading-relaxed md:leading-[1.6]"
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Bottom Wave */}
      <WavePattern position="bottom" />
    </section>
  );
};

export default CommitmentCallout;
