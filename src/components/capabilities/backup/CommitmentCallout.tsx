import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animated sentence variants
  const textVariants = {
    hidden: {},
    visible: {},
  };

  // Single word animation
  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
      },
    }),
  };

  // Transform text to arrays of words for animation
  const enText = "Flair-Plastic extends its commitment to excellence by offering comprehensive manufacturing support, including advanced engineering and design services, and a steadfast focus on client satisfaction through innovative technologies and optimized product performance.";
  const huText = "A Flair-Plastic kiterjeszti kiválóság iránti elkötelezettségét azáltal, hogy átfogó gyártási támogatást nyújt, beleértve a fejlett mérnöki és tervezési szolgáltatásokat, valamint az ügyfelek elégedettségére való kitartó összpontosítást az innovatív technológiák és az optimalizált termékteljesítmény révén.";

  const enWords = enText.split(" ");
  const huWords = huText.split(" ");
  
  // Highlight words in English
  const highlightWords = ["commitment", "excellence", "comprehensive", "manufacturing", "support", "client", "satisfaction", "innovative", "technologies", "optimized"];
  
  // Highlight words in Hungarian
  const highlightWordsHu = ["kiválóság", "elkötelezettségét", "átfogó", "gyártási", "támogatást", "ügyfelek", "elégedettségére", "innovatív", "technológiák", "optimalizált"];

  return (
    <section className="relative bg-gradient-to-br from-[#232C1E] to-[#354327] text-[#F1F1F1] font-montserrat overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,0 C150,100 350,0 500,100 C650,200 850,100 1200,0 L1200,120 L0,120 Z"
            fill="#ffffff"
          ></motion.path>
        </svg>
      </div>

      {/* Main Text Content with word-by-word animation */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-left" ref={ref}>
        <motion.p 
          className="text-6xl sm:text-[34px] md:text-[45px] font-bold leading-relaxed md:leading-[1.6]"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          {language === 'en' ? (
            <>
              {enWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  custom={i}
                  className={`inline-block mr-[0.3em] ${
                    highlightWords.includes(word.replace(/[,.]/g, '')) 
                      ? 'text-[#f89c1d]' 
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </>
          ) : (
            <>
              {huWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  custom={i}
                  className={`inline-block mr-[0.3em] ${
                    highlightWordsHu.includes(word.replace(/[,.]/g, '')) 
                      ? 'text-[#f89c1d]' 
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </>
          )}
        </motion.p>
      </div>

      {/* Animated particles at the bottom */}
      <div className="absolute bottom-20 left-0 w-full h-20 pointer-events-none">
        <motion.div 
          className="absolute w-4 h-4 rounded-full bg-[#f89c1d] opacity-70"
          animate={{ 
            y: [-20, -80], 
            x: [0, 30],
            opacity: [0.7, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div 
          className="absolute left-1/4 w-3 h-3 rounded-full bg-white opacity-50"
          animate={{ 
            y: [-10, -90], 
            x: [0, -20],
            opacity: [0.5, 0],
          }}
          transition={{ 
            duration: 2.3, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        <motion.div 
          className="absolute left-2/3 w-5 h-5 rounded-full bg-[#f89c1d] opacity-60"
          animate={{ 
            y: [-15, -100], 
            x: [0, 15],
            opacity: [0.6, 0],
          }}
          transition={{ 
            duration: 2.7, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1.1,
          }}
        />
        <motion.div 
          className="absolute left-1/2 w-2 h-2 rounded-full bg-white opacity-40"
          animate={{ 
            y: [-5, -70], 
            x: [0, -10],
            opacity: [0.4, 0],
          }}
          transition={{ 
            duration: 2.1, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Bottom Wave with animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            d="M0,0 C150,100 1050,0 1200,100 L1200,120 L0,120 Z"
            fill="#ffffff"
          ></motion.path>
        </svg>
      </div>
    </section>
  );
};

export default CommitmentCallout;
