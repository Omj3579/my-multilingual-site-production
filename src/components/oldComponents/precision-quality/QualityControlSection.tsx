import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  FileSearch, 
  BadgeCheck, 
  Cog, 
  ClipboardCheck, 
  Puzzle, 
  ChevronDown, 
  BarChart3, 
  Users, 
  RefreshCw,
  Gauge
} from 'lucide-react';

const QualityControlSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('process');
  const [activeProcess, setActiveProcess] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Quality control process steps
  const processSteps = [
    {
      step: 1,
      icon: FileSearch,
      title: language === 'en' ? 'Material Testing' : 'Anyagvizsgálat',
      description: language === 'en'
        ? 'We begin with thorough testing of all raw materials to verify their compliance with our high standards for durability, safety, and performance.'
        : 'Az összes alapanyag alapos tesztelésével kezdjük, hogy ellenőrizzük megfelelőségüket a tartósságra, biztonságra és teljesítményre vonatkozó magas követelményeinknek.'
    },
    {
      step: 2,
      icon: Cog,
      title: language === 'en' ? 'In-Process Inspections' : 'Folyamatközi ellenőrzések',
      description: language === 'en'
        ? 'During manufacturing, our products undergo multiple inspections to monitor and correct any deviations in real-time, ensuring that every component meets precise specifications.'
        : 'A gyártás során termékeink többszörös ellenőrzésen mennek keresztül a valós idejű eltérések figyelése és korrigálása érdekében, biztosítva, hogy minden alkatrész megfeleljen a pontos előírásoknak.'
    },
    {
      step: 3,
      icon: ClipboardCheck,
      title: language === 'en' ? 'Final Product Testing' : 'Végtermék tesztelés',
      description: language === 'en'
        ? 'Before any product leaves our facilities, it is subjected to rigorous testing to confirm its functionality and quality.'
        : 'Mielőtt bármely termék elhagyná létesítményeinket, szigorú tesztelésnek vetjük alá a funkcionalitás és minőség ellenőrzése érdekében.'
    },
    {
      step: 4,
      icon: BadgeCheck,
      title: language === 'en' ? 'Compliance Checks' : 'Megfelelőségi ellenőrzések',
      description: language === 'en'
        ? 'We continuously update our processes to align with the latest industry standards and regulations.'
        : 'Folyamatosan frissítjük folyamatainkat, hogy összhangban legyenek a legújabb iparági szabványokkal és előírásokkal.'
    }
  ];

  // Quality system elements
  const qualitySystems = [
    {
      icon: Puzzle,
      title: language === 'en' ? 'Scientific Quality Planning' : 'Tudományos minőségtervezés',
      description: language === 'en'
        ? 'Methodical approach to testing, analysis and validation ensures consistent quality outcomes.'
        : 'A tesztelés, elemzés és validálás módszeres megközelítése biztosítja a következetes minőségi eredményeket.'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Advanced Manufacturing Analysis' : 'Fejlett gyártási elemzés',
      description: language === 'en'
        ? 'Real-time monitoring and statistical process control to detect and prevent quality issues.'
        : 'Valós idejű monitoring és statisztikai folyamatirányítás a minőségi problémák észlelésére és megelőzésére.'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Technical Team Training' : 'Technikai csapatképzés',
      description: language === 'en'
        ? 'Continuous education ensures our staff is updated with latest quality methodologies.'
        : 'A folyamatos oktatás biztosítja, hogy munkatársaink naprakészek legyenek a legújabb minőségi módszertanokkal.'
    },
    {
      icon: RefreshCw,
      title: language === 'en' ? 'Continuous Improvement' : 'Folyamatos fejlesztés',
      description: language === 'en'
        ? 'Regular review and optimization of quality processes for ever-better outcomes.'
        : 'A minőségi folyamatok rendszeres felülvizsgálata és optimalizálása az egyre jobb eredmények érdekében.'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: language === 'en' ? 'What is your "Right First Time" approach?' : 'Mi az "Elsőre jól" megközelítés?',
      answer: language === 'en'
        ? 'Our "Right First Time" approach aims to achieve zero-defect outcomes by focusing on getting every aspect of production correct from the beginning. This minimizes waste, rework, and ensures optimal quality.'
        : 'Az "Elsőre jól" megközelítésünk célja a nulla hibás eredmények elérése a gyártás minden szempontjának kezdettől fogva helyes megvalósításával. Ez minimalizálja a hulladékot, az újramunkálást, és biztosítja az optimális minőséget.'
    },
    {
      question: language === 'en' ? 'How do you implement Process Failure Mode Effects Analysis?' : 'Hogyan valósítja meg a Folyamat Hibamód és Hatáselemzést?',
      answer: language === 'en'
        ? 'We conduct systematic analysis to identify potential failure modes in our processes, evaluate their impact, and implement preventive measures. This proactive approach helps us anticipate issues before they occur.'
        : 'Szisztematikus elemzést végzünk a folyamatainkban rejlő potenciális hibamódok azonosítására, hatásuk értékelésére és megelőző intézkedések bevezetésére. Ez a proaktív megközelítés segít előre látni a problémákat, mielőtt azok bekövetkeznének.'
    },
    {
      question: language === 'en' ? 'What quality metrics do you track?' : 'Milyen minőségi mutatókat követnek nyomon?',
      answer: language === 'en'
        ? 'We track multiple quality KPIs including first-pass yield, defect rates, customer complaints, on-time delivery, and process capability indices. These metrics are reviewed regularly to identify improvement opportunities.'
        : 'Több minőségi KPI-t követünk nyomon, beleértve az első átmeneti kihozatalt, a hibaarányokat, az ügyfelektől érkező panaszokat, a határidőre történő szállítást és a folyamatképességi mutatókat. Ezeket a mutatókat rendszeresen felülvizsgáljuk a fejlesztési lehetőségek azonosítása érdekében.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic background with layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-100/50 to-transparent opacity-70 -z-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-100/30 to-transparent opacity-70 -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main heading with animated underline */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mx-auto mb-4"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {language === 'en' ? (
                <>
                  Rigorous Quality Control: <span className="text-blue-700">Ensuring <br className="hidden sm:block" /> Excellence at Every Step</span>
                </>
              ) : (
                <>
                  Szigorú minőségellenőrzés: <span className="text-blue-700">Kiválóság <br className="hidden sm:block" /> biztosítása minden lépésben</span>
                </>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto text-lg"
            >
              {language === 'en'
                ? "At Flair–Plastic, our commitment to quality is reflected through stringent quality control processes implemented at every stage of production."
                : "A Flair–Plastic-nél a minőség iránti elkötelezettségünket szigorú minőségellenőrzési folyamatok tükrözik a gyártás minden szakaszában."}
            </motion.p>
          </div>

          {/* Tabs navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-5 py-3 rounded-full text-sm md:text-base transition-all ${
                activeTab === 'process'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {language === 'en' ? 'Quality Control Process' : 'Minőségellenőrzési folyamat'}
            </button>
            <button
              onClick={() => setActiveTab('systems')}
              className={`px-5 py-3 rounded-full text-sm md:text-base transition-all ${
                activeTab === 'systems'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {language === 'en' ? 'Quality Systems' : 'Minőségi rendszerek'}
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-5 py-3 rounded-full text-sm md:text-base transition-all ${
                activeTab === 'faq'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {language === 'en' ? 'Quality FAQ' : 'Minőségi GYIK'}
            </button>
          </div>

          {/* Tab content with animations */}
          <AnimatePresence mode="wait">
            {/* Quality Process Tab */}
            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-2 mb-12">
                  {/* Process steps visualization */}
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 md:p-10">
                    <div className="flex flex-col md:flex-row justify-between mb-10">
                      {processSteps.map((step, index) => (
                        <div 
                          key={step.step}
                          onClick={() => setActiveProcess(step.step)}
                          className={`flex flex-col items-center cursor-pointer mb-6 md:mb-0 transition-all relative ${activeProcess === step.step ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
                        >
                          {/* Step number with connector line */}
                          <div className="flex items-center justify-center mb-4">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center z-10 ${
                              activeProcess === step.step 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'bg-white text-blue-600 border-2 border-blue-200'
                            }`}>
                              <span className="font-bold">{step.step}</span>
                            </div>
                            
                            {/* Connector line - only show between elements */}
                            {index < processSteps.length - 1 && (
                              <div className="hidden md:block absolute h-0.5 bg-blue-200 w-full -right-1/2 top-6 z-0"></div>
                            )}
                          </div>
                          <span className={`text-sm font-medium ${activeProcess === step.step ? 'text-blue-700' : 'text-gray-600'}`}>
                            {step.title}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Active process details */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      {processSteps.map((step) => (
                        activeProcess === step.step && (
                          <motion.div 
                            key={step.step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row items-center gap-6"
                          >
                            <div className="bg-blue-100 rounded-full p-4 flex-shrink-0">
                              <step.icon size={32} className="text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-blue-700 mb-2">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </motion.div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Results box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 shadow-lg mx-auto max-w-3xl"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <CheckCircle2 size={24} className="text-blue-200" />
                    <h3 className="text-xl font-bold">
                      {language === 'en' ? 'The Flair-Plastic Quality Guarantee' : 'A Flair-Plastic minőségi garancia'}
                    </h3>
                  </div>
                  <p className="text-blue-50 text-center leading-relaxed">
                    {language === 'en'
                      ? "Through these comprehensive quality control measures, Flair–Plastic guarantees the delivery of only the highest quality products and services, reflecting our unwavering dedication to excellence."
                      : "Ezeken az átfogó minőségellenőrzési intézkedéseken keresztül a Flair–Plastic garantálja a legmagasabb minőségű termékek és szolgáltatások szállítását, tükrözve a kiválóság iránti rendíthetetlen elkötelezettségünket."}
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Quality Systems Tab */}
            {activeTab === 'systems' && (
              <motion.div
                key="systems"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Zero-defect approach highlight */}
                <div className="bg-white rounded-2xl shadow-xl p-2 mb-12">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                        <Gauge size={60} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-white text-2xl font-bold mb-4">
                        {language === 'en' ? '"Right First Time" Approach' : '"Elsőre jól" megközelítés'}
                      </h3>
                      <p className="text-blue-100">
                        {language === 'en'
                          ? "Flair–Plastic prioritizes a zero-defect outcome with our \"Right First Time\" approach. At the heart of this goal are our extensive quality systems that emphasize scientific quality planning, advanced manufacturing analysis, and ongoing technical training for our team."
                          : "A Flair–Plastic a \"Elsőre jól\" megközelítéssel a nulla hibás eredményt helyezi előtérbe. E cél középpontjában kiterjedt minőségi rendszereink állnak, amelyek hangsúlyozzák a tudományos minőségtervezést, a fejlett gyártási elemzést és csapatunk folyamatos technikai képzését."}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Quality system elements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {qualitySystems.map((system, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                          <system.icon size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{system.title}</h3>
                          <p className="text-gray-600">{system.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stage gate process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {language === 'en' ? 'Stage Gate Quality Process' : 'Szakaszkapu minőségi folyamat'}
                  </h3>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                    {language === 'en'
                      ? "For new product introductions and production transfers, Flair–Plastic utilizes a detailed stage gate process. This approach encompasses the execution of Process Failure Mode Effects Analysis (PFMEA) and the formulation of control plans."
                      : "Az új termékek bevezetéséhez és a gyártási átadásokhoz a Flair–Plastic részletes szakaszkapu folyamatot alkalmaz. Ez a megközelítés magában foglalja a Folyamat Hibamód és Hatáselemzést (PFMEA) és az ellenőrzési tervek kidolgozását."}
                  </p>
                  
                  {/* Stage gate visualization */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {['Planning', 'Analysis', 'Design', 'Validation', 'Launch'].map((stage, index) => (
                      <div key={stage} className="relative flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center z-10 border-2 border-blue-200">
                          <span className="text-blue-700 font-bold">{index + 1}</span>
                        </div>
                        <span className="mt-2 font-medium text-gray-700">
                          {language === 'en' 
                            ? stage 
                            : index === 0 ? 'Tervezés' 
                            : index === 1 ? 'Elemzés' 
                            : index === 2 ? 'Dizájn' 
                            : index === 3 ? 'Validálás' 
                            : 'Bevezetés'}
                        </span>
                        
                        {/* Connector line - only show between elements */}
                        {index < 4 && (
                          <div className="hidden md:block absolute h-0.5 bg-blue-200 w-full left-full top-8 z-0 translate-x-[-8px]"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
            
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-semibold text-lg text-gray-900">{item.question}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-blue-600 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-gray-600">
                              <div className="h-px w-full bg-gray-100 mb-4"></div>
                              <p>{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Additional prompt */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-100"
                >
                  <p className="text-center text-gray-700">
                    {language === 'en'
                      ? "Have more questions about our quality processes? Our team is ready to help."
                      : "További kérdései vannak minőségi folyamatainkról? Csapatunk készen áll segíteni."}
                  </p>
                  <div className="mt-4 text-center">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      {language === 'en' ? 'Contact Quality Team' : 'Kapcsolat a minőségi csapattal'}
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Bottom summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Quality Commitment' : 'Minőségi elkötelezettségünk'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? "Our dedication to robust quality systems, scientific analysis, and continuous improvement empowers us to minimize defects, optimize efficiency, and consistently surpass customer expectations."
                : "A robusztus minőségi rendszerek, tudományos elemzés és folyamatos fejlesztés iránti elkötelezettségünk lehetővé teszi számunkra a hibák minimalizálását, a hatékonyság optimalizálását és az ügyfelek elvárásainak következetes túlteljesítését."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityControlSection;
