import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";

const CommitmentCallout = ({ height = "min-h-[400px]" }) => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      className={`relative overflow-hidden ${height} bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-16`}
    >
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-orange-200/20 to-transparent blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full bg-gradient-radial from-amber-200/20 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="callout-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#callout-grid)" />
            </svg>
          </div>
        </>
      )}

      {/* Quote icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full shadow-lg">
          <QuoteIcon size={24} className="text-white" />
        </div>
      </motion.div>

      {/* Center container with border and shadow */}
      <div className="mx-auto max-w-[1280px] h-full flex items-center justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg border border-amber-100 px-8 py-10 md:px-12 md:py-14 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500"></div>
          
          {/* Main quote text */}
          <div className="relative pl-4 border-l-4 border-orange-400">
            <p className="max-w-[1080px] text-left text-2xl sm:text-3xl md:text-4xl leading-snug text-gray-800 font-light">
              {language === 'en' ? (
                <>
                  When Flair-Plastic manages both moulding and final assembly,{" "}
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    we streamline your supply chain and enhance efficiency.
                  </span>
                </>
              ) : (
                <>
                  Amikor a Flair-Plastic kezeli mind a fröccsöntést, mind a végső összeszerelést,{" "}
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    optimalizáljuk az ellátási láncot és növeljük a hatékonyságot.
                  </span>
                </>
              )}
            </p>
            
            {/* Attribution */}
            <p className="mt-8 text-right text-gray-500 font-medium">
              — Flair-Plastic {language === 'en' ? 'Management Team' : 'Vezetőség'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modern accent triangle */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M720 48L0 0H1440L720 48Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default CommitmentCallout;
