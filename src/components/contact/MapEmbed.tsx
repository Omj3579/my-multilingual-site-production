import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MapEmbed = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="w-full rounded-xl overflow-hidden relative">
      {/* Controls */}
      <button
        className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-md shadow-md border border-gray-200 hover:bg-white transition-all"
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? "Minimize map" : "Expand map"}
      >
        {expanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
      </button>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <iframe
            title={language === 'en' ? 'Flair Plastic Location Map' : 'Flair Plastic elhelyezkedése'}
            src="https://www.google.com/maps/d/u/0/embed?mid=1bg8aksk9v-9rhUwib6r1p7tUxgTn7NE&ehbc=2E312F"
            width="100%"
            loading="lazy"
            allowFullScreen
            className={`w-full border-0 transition-all duration-300 ${
              expanded ? "h-[500px]" : "h-[280px]"
            }`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MapEmbed;

