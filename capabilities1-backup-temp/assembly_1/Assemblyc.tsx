import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Assembly = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative font-sans text-gray-800 overflow-hidden pt-10 pb-24">
      {isMounted && (
        <>
          <div className="absolute left-0 -bottom-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-50/40 to-transparent blur-3xl"></div>
          <div className="absolute right-0 top-20 w-[250px] h-[250px] rounded-full bg-gradient-radial from-amber-50/30 to-transparent blur-2xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="assembly-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#assembly-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10 px-6 py-10 max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20"
        >
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
                {language === 'en' ? 'Manufacturing' : 'Gyártás'}
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-8">
                {language === 'en' ? 'Assembly' : 'Összeszerelés'}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {language === 'en' 
                  ? 'Explore the essential assembly stage of the production process and ensure a seamless manufacturing operation with our specialized expertise.'
                  : 'Fedezze fel a gyártási folyamat alapvető összeszerelési szakaszát, és biztosítsa a zökkenőmentes gyártási műveletet szakértelmünkkel.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            >
              {[
                {
                  title: language === 'en' ? 'Precision Assembly' : 'Precíziós összeszerelés',
                  description: language === 'en' 
                    ? 'High-accuracy component assembly with stringent quality controls.'
                    : 'Nagy pontosságú alkatrész-összeszerelés szigorú minőségellenőrzéssel.'
                },
                {
                  title: language === 'en' ? 'Advanced Technology' : 'Fejlett technológia',
                  description: language === 'en'
                    ? 'State-of-the-art equipment for efficient and reliable assembly.'
                    : 'Csúcstechnológiás berendezések a hatékony és megbízható összeszereléshez.'
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-4"
            >
              <a
                href="/quote"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors group"
              >
                <span>{language === 'en' ? 'Request a quote' : 'Kérjen árajánlatot'}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative z-10 rounded-[30px] overflow-hidden shadow-xl">
              <div className="aspect-[4/3] w-full">
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/09/3-4.png"
                  alt={language === 'en' ? 'Assembly Process' : 'Összeszerelési folyamat'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                <div className="flex justify-between items-center">
                  {[
                    {
                      value: '15+',
                      label: language === 'en' ? 'Years Experience' : 'Év tapasztalat'
                    },
                    {
                      value: '99.7%',
                      label: language === 'en' ? 'Quality Rate' : 'Minőségi arány'
                    }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-50"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {language === 'en' ? 'Our Assembly Process' : 'Összeszerelési folyamatunk'}
              </h3>
              
              <div className="space-y-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                      {step}
                    </div>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? `Step ${step}: ${['Component preparation', 'Precision assembly', 'Quality inspection'][step-1]}` 
                        : `${step}. lépés: ${['Alkatrész előkészítés', 'Precíziós összeszerelés', 'Minőségellenőrzés'][step-1]}`}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-right">
                <a
                  href={language === 'en' ? '/capabilities/assembly/process' : '/kepessegek/osszeszereles/folyamat'}
                  className="text-blue-600 inline-flex items-center font-medium group"
                >
                  <span>{language === 'en' ? 'Learn more' : 'Tudj meg többet'}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Assembly;