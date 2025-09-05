import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { RefreshCw, BarChart3, PlusCircle } from 'lucide-react';

const QuickStats = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });
  
  // Stats data
  const stats = [
    { 
      value: "10+", 
      label: language === 'hu' ? "Év együttműködés" : "Years of collaboration",
      icon: <RefreshCw className="text-amber-500 w-8 h-8 mb-4" />
    },
    { 
      value: "15M+", 
      label: language === 'hu' ? "Gyártott alkatrész" : "Components produced",
      icon: <BarChart3 className="text-amber-500 w-8 h-8 mb-4" />
    },
    { 
      value: "4", 
      label: language === 'hu' ? "Fő termékkategória" : "Major product categories", 
      icon: <PlusCircle className="text-amber-500 w-8 h-8 mb-4" />
    },
    { 
      value: "30%", 
      label: language === 'hu' ? "Újrahasznosított anyag" : "Recycled materials", 
      icon: <RefreshCw className="text-amber-500 w-8 h-8 mb-4" />
    }
  ];

  return (
    <section className="py-16 bg-gray-100" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-hover="true"
            >
              {stat.icon}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-gray-800 block">
                  {stat.value}
                </span>
              </motion.div>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;