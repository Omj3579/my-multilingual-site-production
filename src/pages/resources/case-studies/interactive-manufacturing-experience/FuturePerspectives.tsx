import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { RefreshCw, BarChart3, ArrowRight } from 'lucide-react';

const FuturePerspectives = () => {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  // Future initiatives
  const initiatives = [
    {
      title: { 
        en: "Sustainable Materials Research", 
        hu: "Fenntartható anyagok kutatása" 
      },
      description: { 
        en: "Exploring bio-based polymers and advanced recycling technologies to further reduce environmental impact while maintaining product durability.", 
        hu: "Bio-alapú polimerek és fejlett újrahasznosítási technológiák feltárása a környezeti hatás további csökkentése érdekében, miközben megőrizzük a termékek tartósságát." 
      },
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: { 
        en: "Smart Component Integration", 
        hu: "Intelligens komponens integráció" 
      },
      description: { 
        en: "Developing IoT-enabled plastic components with embedded sensors to provide usage data and enhance tool functionality and maintenance.", 
        hu: "IoT-képes műanyag alkatrészek fejlesztése beágyazott érzékelőkkel, amelyek használati adatokat szolgáltatnak és javítják a szerszámok funkcionalitását és karbantartását." 
      },
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium tracking-wide mb-3">
              {language === 'hu' ? "Előretekintés" : "Looking Forward"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {language === 'hu' ? "Jövőbeli kilátások" : "Future Perspectives"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'hu' 
                ? "A Flair Plastic Kft. és EU-s partnerünk elkötelezettek a folyamatos innováció mellett, biztosítva vezető pozíciónkat a kerti és elektromos szerszámok iparágában."
                : "Flair Plastic Ltd. and our EU partner remain committed to ongoing innovation, ensuring we maintain our leadership in the garden and power tools industry."
              }
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-hover="true"
            >
              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 relative z-10 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-colors duration-300 ${hoveredIndex === index ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-600'}`}>
                  {initiative.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {initiative.title[language === 'hu' ? 'hu' : 'en']}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {initiative.description[language === 'hu' ? 'hu' : 'en']}
                </p>
                
                <motion.div 
                  className="mt-auto"
                  animate={{ x: hoveredIndex === index ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
                    {language === 'hu' ? "Tudjon meg többet" : "Learn more"}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
              
              {/* Background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl -z-10"
                animate={{ 
                  scale: hoveredIndex === index ? 1.05 : 1, 
                  opacity: hoveredIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturePerspectives;