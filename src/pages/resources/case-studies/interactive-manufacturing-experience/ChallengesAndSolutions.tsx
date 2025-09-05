import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { RefreshCw, BarChart3, PlusCircle } from 'lucide-react';

const ChallengesAndSolutions = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('challenges');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  // Enhanced challenges and solutions data
  const data = {
    challenges: [
      {
        icon: <RefreshCw className="w-8 h-8 text-amber-500" />,
        title: { 
          en: "Order Volume Variability", 
          hu: "Rendelési mennyiség változékonysága" 
        },
        description: { 
          en: "Seasonal market demands created significant fluctuations in order volumes, requiring highly adaptable production schedules and resource allocation.", 
          hu: "A szezonális piaci kereslet jelentős ingadozásokat eredményezett a rendelési mennyiségekben, ami rendkívül alkalmazkodóképes gyártási ütemezést és erőforrás-allokációt igényelt." 
        }
      },
      {
        icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
        title: { 
          en: "Material Quality Consistency", 
          hu: "Anyagminőség konzisztenciája" 
        },
        description: { 
          en: "Incorporating recycled materials posed challenges in maintaining consistent quality standards across production batches due to variations in feedstock composition.", 
          hu: "Az újrahasznosított anyagok beépítése kihívásokat jelentett a következetes minőségi szabványok fenntartásában a gyártási tételek között az alapanyag-összetétel változásai miatt." 
        }
      },
      {
        icon: <PlusCircle className="w-8 h-8 text-amber-500" />,
        title: { 
          en: "Packaging Costs", 
          hu: "Csomagolási költségek" 
        },
        description: { 
          en: "Balancing the need for protective, sustainable packaging while controlling costs required innovative approaches to design and material selection.", 
          hu: "A védő, fenntartható csomagolás iránti igény és a költségek kontrolljának egyensúlya innovatív megközelítéseket igényelt a tervezés és az anyagválasztás terén." 
        }
      }
    ],
    solutions: [
      {
        icon: <RefreshCw className="w-8 h-8 text-amber-500" />,
        title: { 
          en: "Adaptive Order Management", 
          hu: "Adaptív rendeléskezelés" 
        },
        description: { 
          en: "Implemented a dynamic production scheduling system that analyzes historical data and market forecasts to anticipate demand fluctuations and optimize resource allocation.", 
          hu: "Bevezettünk egy dinamikus termelésütemezési rendszert, amely elemzi a történelmi adatokat és a piaci előrejelzéseket, hogy előre jelezze a keresleti ingadozásokat és optimalizálja az erőforrás-elosztást." 
        }
      },
      {
        icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
        title: { 
          en: "Enhanced Quality Control", 
          hu: "Megerősített minőségellenőrzés" 
        },
        description: { 
          en: "Developed an advanced material testing protocol that evaluates each batch of recycled feedstock, ensuring consistent properties through precise blending and additive formulation.", 
          hu: "Fejlett anyagvizsgálati protokollt dolgoztunk ki, amely minden újrahasznosított alapanyag-tételt értékel, biztosítva a konzisztens tulajdonságokat a precíz keveréssel és adalékanyag-formulázással." 
        }
      },
      {
        icon: <PlusCircle className="w-8 h-8 text-amber-500" />,
        title: { 
          en: "Sustainable Packaging Solutions", 
          hu: "Fenntartható csomagolási megoldások" 
        },
        description: { 
          en: "Created custom-designed, stackable packaging made from 100% recycled cardboard with optimized geometry that reduces material usage while improving protection during transportation.", 
          hu: "100%-ban újrahasznosított kartonból készült, egymásba rakható, egyedi tervezésű csomagolást hoztunk létre optimalizált geometriával, amely csökkenti az anyagfelhasználást, miközben javítja a szállítás közbeni védelmet." 
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium tracking-wide mb-3">
            {language === 'hu' ? "Együttműködés részletei" : "Collaboration Insights"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'hu' ? "Kihívások és megoldások" : "Challenges & Solutions"}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {language === 'hu' 
              ? "A sikeres partnerségek a közös problémamegoldásból és az akadályok közös leküzdéséből születnek."
              : "Successful partnerships are born from collaborative problem-solving and overcoming obstacles together."
            }
          </p>
        </motion.div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-gray-100 shadow-inner">
            <motion.button
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'challenges' ? 'text-white' : 'text-gray-700 hover:text-gray-900'}`}
              onClick={() => setActiveTab('challenges')}
              data-hover="true"
            >
              {activeTab === 'challenges' && (
                <motion.div
                  className="absolute inset-0 bg-amber-500 rounded-full z-0"
                  layoutId="tabBackground"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {language === 'hu' ? "Kihívások" : "Challenges"}
              </span>
            </motion.button>
            <motion.button
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'solutions' ? 'text-white' : 'text-gray-700 hover:text-gray-900'}`}
              onClick={() => setActiveTab('solutions')}
              data-hover="true"
            >
              {activeTab === 'solutions' && (
                <motion.div
                  className="absolute inset-0 bg-amber-500 rounded-full z-0"
                  layoutId="tabBackground"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {language === 'hu' ? "Megoldások" : "Solutions"}
              </span>
            </motion.button>
          </div>
        </div>
        
        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  data-hover="true"
                >
                  <div className="p-3 bg-amber-50 rounded-xl inline-flex mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {item.title[language === 'hu' ? 'hu' : 'en']}
                  </h3>
                  <p className="text-gray-600">
                    {item.description[language === 'hu' ? 'hu' : 'en']}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ChallengesAndSolutions;