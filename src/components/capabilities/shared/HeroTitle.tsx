import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParallax } from './hooks';
import { getContent, getJSXContent } from './utils';

interface HeroTitleProps {
  title?: {
    en: React.ReactElement;
    hu: React.ReactElement;
  };
  subtitle?: {
    en: string;
    hu: string;
  };
  description?: {
    en: string;
    hu: string;
  };
  buttonText?: {
    en: string;
    hu: string;
  };
  className?: string;
}

const defaultContent = {
  title: {
    en: <>Plastic <br/> Injection <br/> Moulding</>,
    hu: <>Műanyag <br/> Fröccsöntés <br/> Gyártás</>
  },
  subtitle: {
    en: 'Our Expertise',
    hu: 'Szaktudásunk'
  },
  description: {
    en: 'Precision engineering and innovative manufacturing solutions for advanced plastic components.',
    hu: 'Precíziós mérnöki munka és innovatív gyártási megoldások fejlett műanyag alkatrészekhez.'
  },
  buttonText: {
    en: 'Learn More',
    hu: 'Tudj meg többet'
  }
};

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  className = ''
}) => {  const { language } = useLanguage();
  const { contentY: titleParallax } = useParallax([0, 1], ['0%', '-150px']);

  const content = {
    title: title || defaultContent.title,
    subtitle: subtitle || defaultContent.subtitle,
    description: description || defaultContent.description,
    buttonText: buttonText || defaultContent.buttonText
  };

  return (
    <motion.div 
      className={`flex flex-col space-y-8 ${className}`}
      style={{ y: titleParallax }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.span 
          className="text-sm uppercase tracking-[0.3em] font-medium text-gray-500 block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}        >
          {getContent(content.subtitle, language)}
        </motion.span>
        
        <div className="relative">
          <motion.h1 
            className="text-6xl md:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}          >
            {getJSXContent(content.title, language)}
          </motion.h1>
          
          {/* Glowing effect */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full blur-lg opacity-30"
            style={{
              background: 'linear-gradient(45deg, #3490dc, #6574cd)',
              filter: 'blur(40px)',
              maskImage: 'linear-gradient(to right, #000, transparent)'
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Animated underline */}
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </div>
        
        <motion.p 
          className="text-gray-600 text-lg mt-8 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}        >
          {getContent(content.description, language)}
        </motion.p>
        
        <motion.button
          className="mt-10 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg flex items-center space-x-2 group overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >          <span className="relative z-10">
            {getContent(content.buttonText, language)}
          </span>
          <motion.span 
            className="relative z-10 transition-transform"
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            →
          </motion.span>
          {/* Button hover effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;
