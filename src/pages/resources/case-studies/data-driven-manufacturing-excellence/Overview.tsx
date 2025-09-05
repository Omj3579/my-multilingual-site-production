import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Zap, Globe, Shield } from 'lucide-react';

const Overview = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const overviewContent = {
    badge: {
      en: "Partnership Overview",
      hu: "Partnerség Áttekintése"
    },
    title: {
      en: "Revolutionizing Garden & Power Tool Manufacturing",
      hu: "A Kerti és Elektromos Szerszámgyártás Forradalmasítása"
    },
    description: {
      en: "For over a decade, Flair Plastic Ltd. has partnered with a leading European manufacturer in the garden and power tools industry. This collaboration has been pivotal in producing high-quality plastic components that contribute to the success of a wide range of tools, driving mutual growth and innovation.",
      hu: "Több mint egy évtizede a Flair Plastic Kft. egy vezető európai kerti és elektromos szerszámgyártóval működik együtt. Ez az együttműködés kulcsfontosságú volt a kiváló minőségű műanyag alkatrészek gyártásában, amelyek széles körű szerszámok sikeréhez járulnak hozzá, kölcsönös növekedést és innovációt hajtva."
    },
    highlights: [
      {
        icon: <Target className="w-6 h-6" />,
        title: { en: "Precision Manufacturing", hu: "Precíziós Gyártás" },
        description: { 
          en: "Advanced manufacturing processes delivering components with micro-precision tolerances",
          hu: "Fejlett gyártási folyamatok mikro-precíziós tűrésekkel rendelkező alkatrészek szállítása"
        }
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: { en: "Innovation Focus", hu: "Innovációs Fókusz" },
        description: { 
          en: "Continuous R&D investment creating breakthrough material solutions and design improvements",
          hu: "Folyamatos K+F befektetés áttörő anyagmegoldások és tervezési fejlesztések létrehozása"
        }
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: { en: "European Reach", hu: "Európai Elérhetőség" },
        description: { 
          en: "Strategic EU positioning enabling efficient supply chain management and rapid market response",
          hu: "Stratégiai EU pozicionálás hatékony ellátási lánc menedzsment és gyors piaci reagálás"
        }
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: { en: "Quality Assurance", hu: "Minőségbiztosítás" },
        description: { 
          en: "Rigorous quality control systems ensuring consistent excellence across all manufactured components",
          hu: "Szigorú minőségellenőrzési rendszerek következetes kiválóság biztosítása minden gyártott alkatrésztől"
        }
      }
    ]
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            {overviewContent.badge[language]}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {overviewContent.title[language]}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {overviewContent.description[language]}
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {overviewContent.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 h-full">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {highlight.title[language]}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description[language]}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-hover="true"
          >
            {language === 'hu' ? "Fedezze fel a termékeket" : "Explore Our Products"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;