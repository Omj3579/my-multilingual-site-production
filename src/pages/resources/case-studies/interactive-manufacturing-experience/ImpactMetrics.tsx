import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ImpactMetrics = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Impact data
  const impacts = [
    {
      value: "30%",
      label: { 
        en: "Reduction in material waste", 
        hu: "Anyaghulladék-csökkentés" 
      },
      description: { 
        en: "Through optimized production processes and material recovery", 
        hu: "Optimalizált gyártási folyamatok és anyagvisszanyerés által" 
      }
    },
    {
      value: "45%",
      label: { 
        en: "Lighter components", 
        hu: "Könnyebb alkatrészek" 
      },
      description: { 
        en: "While maintaining or improving structural integrity", 
        hu: "A szerkezeti integritás megőrzése vagy javítása mellett" 
      }
    },
    {
      value: "60%",
      label: { 
        en: "Faster product development", 
        hu: "Gyorsabb termékfejlesztés" 
      },
      description: { 
        en: "From concept to production with modular design", 
        hu: "A koncepciótól a gyártásig moduláris tervezéssel" 
      }
    }
  ];

  return (
    <section className="py-24 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium tracking-wide mb-3">
            {language === 'hu' ? "Mérhető eredmények" : "Measurable Results"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'hu' ? "Partnerségünk hatása" : "Partnership Impact"}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {language === 'hu' 
              ? "Együttműködésünk értékelhető előnyöket eredményezett mind a termelési hatékonyság, mind a termékteljesítmény szempontjából."
              : "Our collaboration has yielded quantifiable benefits in both production efficiency and product performance."
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 text-center h-full flex flex-col items-center">
                <div className="mb-6">
                  <motion.div
                    className="text-6xl font-bold text-amber-500"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      duration: 2.5, 
                      delay: 0.4 + (index * 0.1),
                      bounce: 0.4
                    }}
                  >
                    {impact.value}
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {impact.label[language === 'hu' ? 'hu' : 'en']}
                </h3>
                
                <p className="text-gray-600">
                  {impact.description[language === 'hu' ? 'hu' : 'en']}
                </p>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-500 rounded-full hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;