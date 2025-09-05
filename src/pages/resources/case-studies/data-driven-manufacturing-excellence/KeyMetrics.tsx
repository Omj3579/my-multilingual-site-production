import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Award, Recycle, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';

const KeyMetrics = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({});

  const metricsContent = {
    badge: {
      en: "Performance Metrics",
      hu: "Teljesítménymutatók"
    },
    title: {
      en: "Measurable Excellence",
      hu: "Mérhető Kiválóság"
    },
    subtitle: {
      en: "Our partnership delivers quantifiable results across all key performance indicators",
      hu: "Partnerségünk mérhető eredményeket szolgáltat minden kulcsfontosságú teljesítménymutató terén"
    },
    metrics: [
      {
        id: 'years',
        value: 10,
        suffix: '+',
        title: { en: "Years of Partnership", hu: "Év Partnerség" },
        description: { en: "Sustained collaboration", hu: "Fenntartott együttműködés" },
        icon: <Clock className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500"
      },
      {
        id: 'components',
        value: 15,
        suffix: 'M+',
        title: { en: "Components Delivered", hu: "Szállított Alkatrész" },
        description: { en: "High-quality manufacturing", hu: "Kiváló minőségű gyártás" },
        icon: <CheckCircle className="w-6 h-6" />,
        color: "from-green-500 to-emerald-500"
      },
      {
        id: 'categories',
        value: 4,
        suffix: '',
        title: { en: "Product Categories", hu: "Termékkategória" },
        description: { en: "Diverse portfolio", hu: "Változatos portfólió" },
        icon: <Award className="w-6 h-6" />,
        color: "from-purple-500 to-pink-500"
      },
      {
        id: 'recycled',
        value: 30,
        suffix: '%',
        title: { en: "Recycled Materials", hu: "Újrahasznosított Anyagok" },
        description: { en: "Sustainability focus", hu: "Fenntarthatósági fókusz" },
        icon: <Recycle className="w-6 h-6" />,
        color: "from-orange-500 to-red-500"
      },
      {
        id: 'efficiency',
        value: 95,
        suffix: '%',
        title: { en: "Production Efficiency", hu: "Gyártási Hatékonyság" },
        description: { en: "Optimized processes", hu: "Optimalizált folyamatok" },
        icon: <TrendingUp className="w-6 h-6" />,
        color: "from-indigo-500 to-blue-500"
      },
      {
        id: 'satisfaction',
        value: 98,
        suffix: '%',
        title: { en: "Client Satisfaction", hu: "Ügyfél-elégedettség" },
        description: { en: "Excellence in service", hu: "Kiváló szolgáltatás" },
        icon: <ArrowUpRight className="w-6 h-6" />,
        color: "from-teal-500 to-cyan-500"
      }
    ]
  };

  // Animated counter effect
  useEffect(() => {
    if (!isInView) return;

    metricsContent.metrics.forEach((metric) => {
      let start = 0;
      const end = metric.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60 FPS

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => ({ ...prev, [metric.id]: end }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [metric.id]: Math.floor(start) }));
        }
      }, 16);
    });
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-cyan-300 rounded-full text-sm font-medium mb-4 border border-white/20">
            <TrendingUp className="w-4 h-4" />
            {metricsContent.badge[language]}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {metricsContent.title[language]}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {metricsContent.subtitle[language]}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {metricsContent.metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full group-hover:transform group-hover:scale-105">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${metric.color} text-white rounded-xl mb-6 shadow-lg`}>
                    {metric.icon}
                  </div>
                  
                  {/* Value */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {counts[metric.id] || 0}{metric.suffix}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {metric.title[language]}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {metric.description[language]}
                  </p>
                </div>

                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-300 mb-6">
            {language === 'hu' 
              ? "Ezek a számok csak a kezdetet jelentik. Fedezze fel, hogyan érhetjük el együtt még nagyobb sikereket."
              : "These numbers are just the beginning. Discover how we can achieve even greater success together."
            }
          </p>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-hover="true"
          >
            {language === 'hu' ? "Részletek megtekintése" : "View Details"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyMetrics;