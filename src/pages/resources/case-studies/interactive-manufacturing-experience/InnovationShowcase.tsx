import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Award, ArrowRight } from 'lucide-react';

const InnovationShowcase = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  const innovations = [
    {
      title: { 
        en: "Proprietary Material Blend", 
        hu: "Szabadalmaztatott anyagkeverék" 
      },
      description: { 
        en: "Our jointly developed high-impact polymer blend combines durability with reduced weight, resulting in more efficient tool operation.", 
        hu: "Közösen kifejlesztett nagy ütésállóságú polimer keverékünk ötvözi a tartósságot a csökkentett súllyal, hatékonyabb szerszámműködést eredményezve." 
      }
    },
    {
      title: { 
        en: "Modular Design System", 
        hu: "Moduláris tervezési rendszer" 
      },
      description: { 
        en: "Created a standardized component architecture that allows for rapid development of new products while maintaining manufacturing efficiency.", 
        hu: "Szabványosított komponens-architektúrát hoztunk létre, amely lehetővé teszi az új termékek gyors fejlesztését a gyártási hatékonyság fenntartása mellett." 
      }
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-amber-500/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-600/30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium tracking-wide mb-3">
            {language === 'hu' ? "Innovációs központ" : "Innovation Hub"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {language === 'hu' ? "Úttörő fejlesztések" : "Pioneering Developments"}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {language === 'hu' 
              ? "Közös innovációs erőfeszítéseink révén fejlesztettük ki ezeket az iparágvezető technológiákat."
              : "Through our joint innovation efforts, we've developed these industry-leading technologies."
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 shadow-[0_0_25px_rgba(255,165,0,0.1)] relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              data-hover="true"
            >
              {/* Accent glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-amber-500/10 rounded-xl inline-flex mr-4">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                  </div>
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {innovation.title[language === 'hu' ? 'hu' : 'en']}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {innovation.description[language === 'hu' ? 'hu' : 'en']}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-amber-400 font-medium mr-2">
                      {language === 'hu' ? "Szabadalmaztatott" : "Patented"}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  </div>
                  
                  <motion.button
                    className="text-amber-300 group-hover:text-amber-200 flex items-center text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    {language === 'hu' ? "További részletek" : "View details"}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;