import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  BarChart4, 
  Microscope, 
  Users, 
  Recycle, 
  ChevronRight, 
  ShieldCheck,
  Lightbulb,
  BadgeDollarSign,
  Settings,
  ChevronDown  // Add this import
} from 'lucide-react';

const ChoosingMaterialsSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('regulatory');
  const [showMobileSelector, setShowMobileSelector] = useState(false);

  const factors = [
    {
      id: 'regulatory',
      icon: ShieldCheck,
      title: language === 'en' ? 'Regulatory Compliance' : 'Szabályozási megfelelőség',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      content: language === 'en'
        ? 'Increasing regulatory requirements across various industries demand materials that not only perform well but also comply with strict environmental and safety standards. This pushes for a meticulous review of material choices to ensure compliance without compromising on quality or functionality.'
        : 'A különböző iparágakban növekvő szabályozási követelmények olyan anyagokat igényelnek, amelyek nemcsak jól teljesítenek, hanem megfelelnek a szigorú környezetvédelmi és biztonsági előírásoknak is. Ez az anyagválasztások alapos felülvizsgálatát teszi szükségessé a minőség vagy funkcionalitás csökkenése nélkül.'
    },
    {
      id: 'technological',
      icon: Microscope,
      title: language === 'en' ? 'Technological Advancements' : 'Technológiai fejlődés',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      content: language === 'en'
        ? 'As technology evolves, so do the capabilities of plastic injection moulding. Innovations in material science continually introduce new polymers and composites that offer improved strength, durability, and heat resistance, enabling the creation of more advanced and reliable products.'
        : 'A technológia fejlődésével a műanyag fröccsöntés képességei is fejlődnek. Az anyagtudomány innovációi folyamatosan új polimereket és kompozitokat vezetnek be, amelyek jobb szilárdságot, tartósságot és hőállóságot kínálnak, lehetővé téve fejlettebb és megbízhatóbb termékek létrehozását.'
    },
    {
      id: 'consumer',
      icon: Users,
      title: language === 'en' ? 'Consumer Preferences' : 'Fogyasztói preferenciák',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      content: language === 'en'
        ? 'Increasing consumer awareness about environmental issues is driving demand for products made from recycled or biodegradable materials. Businesses must adapt their material selection to align with these preferences to remain competitive and socially responsible.'
        : 'A környezetvédelmi kérdésekkel kapcsolatos növekvő fogyasztói tudatosság növeli az újrahasznosított vagy biológiailag lebomló anyagokból készült termékek iránti keresletet. A vállalatoknak az anyagválasztást ezekhez a preferenciákhoz kell igazítaniuk a versenyképesség és társadalmi felelősség megőrzése érdekében.'
    },
    {
      id: 'lifecycle',
      icon: Recycle,
      title: language === 'en' ? 'Lifecycle Analysis' : 'Életciklus elemzés',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      content: language === 'en'
        ? 'There is a growing trend towards conducting thorough lifecycle analyses of products to understand their environmental impact from production to disposal. This holistic view encourages the use of materials that not only meet functional and regulatory demands but also minimize environmental impact.'
        : 'Egyre növekvő tendencia a termékek alapos életciklus-elemzésének elvégzése, hogy megértsük környezeti hatásukat a gyártástól a hulladékkezelésig. Ez a holisztikus szemlélet olyan anyagok használatát ösztönzi, amelyek nemcsak a funkcionális és szabályozási követelményeknek felelnek meg, hanem minimalizálják a környezeti hatást is.'
    }
  ];

  // Additional material selection criteria for the grid
  const selectionCriteria = [
    {
      icon: Settings,
      title: language === 'en' ? 'Mechanical Properties' : 'Mechanikai tulajdonságok',
      description: language === 'en' 
        ? 'Strength, flexibility, impact resistance, and wear characteristics that determine how the material performs under stress.'
        : 'Szilárdság, rugalmasság, ütésállóság és kopásjellemzők, amelyek meghatározzák, hogyan teljesít az anyag terhelés alatt.'
    },
    {
      icon: Lightbulb,
      title: language === 'en' ? 'Processing Requirements' : 'Feldolgozási követelmények',
      description: language === 'en'
        ? 'Flow characteristics, melting temperature, cooling requirements, and cycle times that affect production efficiency.'
        : 'Folyási jellemzők, olvadási hőmérséklet, hűtési követelmények és ciklusidők, amelyek befolyásolják a gyártási hatékonyságot.'
    },
    {
      icon: BadgeDollarSign,
      title: language === 'en' ? 'Cost Considerations' : 'Költségmegfontolások',
      description: language === 'en'
        ? 'Material cost per unit, processing costs, and long-term value assessment for optimal budget management.'
        : 'Egységenkénti anyagköltség, feldolgozási költségek és hosszú távú értékelés az optimális költségvetés-kezelés érdekében.'
    }
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-amber-50/50 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-amber-50/50 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider font-medium text-amber-600 mb-3 block"
            >
              {language === 'en' ? 'Expert Material Selection' : 'Szakértői anyagválasztás'}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span>{language === 'en' ? 'Choosing ' : 'Anyagválasztás '}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                {language === 'en' ? 'Materials' : 'műanyag'}
              </span>
              <br className="hidden md:block" />
              <span className="text-gray-800">
                {language === 'en' ? 'for Plastic Injection Molding' : 'fröccsöntéshez'}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"
            ></motion.div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              {/* Intro Card */}
              <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {language === 'en' ? 'The Critical Role of Materials' : 'Az anyagok kritikus szerepe'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Material selection is a crucial component of plastic injection molding. Choosing the appropriate material guarantees that a part fulfills its design specifications, performs effectively in its intended use, and is economically viable to produce.'
                    : 'Az anyagválasztás a műanyag fröccsöntés kulcsfontosságú eleme. A megfelelő anyag kiválasztása biztosítja, hogy az alkatrész megfeleljen a tervezési előírásoknak, hatékonyan működjön a tervezett felhasználás során, és gazdaságosan gyártható legyen.'}
                </p>
              </div>

              {/* Highlighted Statement Card */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-start gap-4">
                  <BarChart4 className="w-12 h-12 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {language === 'en' ? 'Growing Importance' : 'Növekvő fontosság'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? 'Recently, the importance of precise material selection has grown significantly. This shift is driven by several factors that affect manufacturing decisions and product development.'
                        : 'Az utóbbi időben jelentősen megnőtt a pontos anyagválasztás fontossága. Ezt a változást több olyan tényező is befolyásolja, amely hatással van a gyártási döntésekre és a termékfejlesztésre.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Selection Criteria Grid */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {language === 'en' ? 'Key Selection Criteria' : 'Fő kiválasztási kritériumok'}
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {selectionCriteria.map((criterion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex gap-4 bg-white p-4 rounded-xl border border-amber-100 hover:shadow-md transition-all"
                    >
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-lg">
                        <criterion.icon className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{criterion.title}</h4>
                        <p className="text-sm text-gray-600">{criterion.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Tab Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden"
            >
              {/* Tab Navigation - REPLACE the current tab navigation with this */}
              <div className="mb-6">
                {/* Desktop tabs - grid layout */}
                <div className="hidden md:grid grid-cols-4 gap-2">
                  {factors.map((factor) => (
                    <button
                      key={factor.id}
                      onClick={() => setActiveTab(factor.id)}
                      className={`flex items-center justify-center gap-2 py-4 px-3 rounded-lg transition-all ${
                        activeTab === factor.id
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-md'
                          : 'bg-amber-50/50 text-gray-700 hover:bg-amber-50 border border-amber-100'
                      }`}
                    >
                      <factor.icon className={`w-5 h-5 ${activeTab === factor.id ? 'text-white' : 'text-amber-600'}`} />
                      <span className="text-sm">{factor.title}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile dropdown selector */}
                <div className="md:hidden relative">
                  <div 
                    className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center justify-between cursor-pointer"
                    onClick={() => setShowMobileSelector(prev => !prev)}
                  >
                    {factors.find(f => f.id === activeTab) && (
                      <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full">
                          {React.createElement(factors.find(f => f.id === activeTab)?.icon || ShieldCheck, { 
                            className: "w-4 h-4 text-white" 
                          })}
                        </div>
                        <span className="font-medium">{factors.find(f => f.id === activeTab)?.title}</span>
                      </div>
                    )}
                    <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${showMobileSelector ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Mobile dropdown menu */}
                  {showMobileSelector && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-amber-100 rounded-lg shadow-lg z-20">
                      {factors.map((factor) => (
                        <button
                          key={factor.id}
                          onClick={() => {
                            setActiveTab(factor.id);
                            setShowMobileSelector(false);
                          }}
                          className={`flex items-center gap-3 w-full p-3 text-left transition-colors ${
                            activeTab === factor.id ? 'bg-amber-50/70' : 'hover:bg-amber-50/50'
                          } ${factor.id !== factors[factors.length-1].id ? 'border-b border-amber-100' : ''}`}
                        >
                          <div className={`p-2 rounded-full ${activeTab === factor.id ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-amber-100'}`}>
                            <factor.icon className={`w-4 h-4 ${activeTab === factor.id ? 'text-white' : 'text-amber-600'}`} />
                          </div>
                          <span className={activeTab === factor.id ? 'font-medium text-amber-700' : 'text-gray-700'}>{factor.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {factors.map((factor) => (
                  <div 
                    key={factor.id} 
                    className={activeTab === factor.id ? 'block' : 'hidden'}
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${factor.color} flex-shrink-0`}>
                        <factor.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{factor.title}</h3>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed">{factor.content}</p>
                    </div>

                    {/* Additional content specific to each tab */}
                    {factor.id === 'regulatory' && (
                      <div className="mt-8 p-5 bg-amber-50 rounded-xl border border-amber-100">
                        <h4 className="font-bold text-gray-800 mb-2">
                          {language === 'en' ? 'Common Regulatory Standards' : 'Gyakori szabályozási előírások'}
                        </h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li>
                            {language === 'en' 
                              ? 'FDA (Food and Drug Administration) requirements for food-contact materials'
                              : 'FDA (Food and Drug Administration) követelmények élelmiszerrel érintkező anyagokhoz'}
                          </li>
                          <li>
                            {language === 'en'
                              ? 'RoHS (Restriction of Hazardous Substances) compliance in electronics'
                              : 'RoHS (veszélyes anyagok korlátozása) megfelelőség az elektronikában'}
                          </li>
                          <li>
                            {language === 'en'
                              ? 'EU REACH (Registration, Evaluation, Authorization and Restriction of Chemicals)'
                              : 'EU REACH (vegyi anyagok regisztrálása, értékelése, engedélyezése és korlátozása)'}
                          </li>
                        </ul>
                      </div>
                    )}

                    {factor.id === 'technological' && (
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[{
                          title: language === 'en' ? 'Advanced Composites' : 'Fejlett kompozitok',
                          desc: language === 'en' 
                            ? 'Carbon fiber reinforced polymers for high-strength applications'
                            : 'Szénszál erősítésű polimerek nagy szilárdságú alkalmazásokhoz'
                        },
                        {
                          title: language === 'en' ? 'Engineered Resins' : 'Mérnöki gyanták',
                          desc: language === 'en'
                            ? 'Materials designed for specific thermal and chemical resistance'
                            : 'Speciális hő- és vegyszerállóságra tervezett anyagok'
                        },
                        {
                          title: language === 'en' ? 'Bio-based Polymers' : 'Biopolimerek',
                          desc: language === 'en'
                            ? 'Renewable alternatives to traditional petroleum-based plastics'
                            : 'Megújuló alternatívák a hagyományos kőolaj alapú műanyagokhoz'
                        }].map((item, i) => (
                          <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                            <h5 className="font-semibold text-amber-700 mb-2">{item.title}</h5>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {factor.id === 'consumer' && (
                      <div className="mt-8 flex flex-col md:flex-row gap-4 items-center p-5 bg-amber-50 rounded-xl border border-amber-100">
                        <div className="md:w-1/4 flex-shrink-0">
                          <div className="aspect-square rounded-full bg-gradient-to-r from-amber-400/30 to-orange-400/30 flex items-center justify-center p-3">
                            <span className="text-3xl font-bold text-amber-600">76%</span>
                          </div>
                        </div>
                        <div className="md:w-3/4">
                          <h4 className="font-bold text-gray-800 mb-2">
                            {language === 'en'
                              ? 'Consumer Demand for Sustainable Materials'
                              : 'Fogyasztói igény a fenntartható anyagokra'}
                          </h4>
                          <p className="text-gray-700">
                            {language === 'en'
                              ? 'Recent studies show that 76% of consumers are more likely to purchase products that use environmentally sustainable materials, with this percentage growing yearly.'
                              : 'A legújabb tanulmányok szerint a fogyasztók 76%-a nagyobb valószínűséggel vásárol olyan termékeket, amelyek környezetvédelmi szempontból fenntartható anyagokat használnak, és ez a százalék évente növekszik.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {factor.id === 'lifecycle' && (
                      <div className="mt-8">
                        <h4 className="font-bold text-gray-800 mb-4">
                          {language === 'en' ? 'Lifecycle Analysis Components' : 'Életciklus-elemzés összetevői'}
                        </h4>
                        <div className="relative">
                          {/* Timeline line */}
                          <div className="absolute left-[15px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-amber-400 to-orange-400"></div>
                          
                          <div className="space-y-8 relative pl-10">
                            {[{
                              phase: language === 'en' ? 'Raw Material Acquisition' : 'Nyersanyag beszerzés',
                              desc: language === 'en'
                                ? 'Environmental impact of extracting and processing raw materials'
                                : 'A nyersanyagok kitermelésének és feldolgozásának környezeti hatása'
                            },
                            {
                              phase: language === 'en' ? 'Manufacturing Process' : 'Gyártási folyamat',
                              desc: language === 'en'
                                ? 'Energy consumption and emissions during the production phase'
                                : 'Energiafogyasztás és kibocsátások a gyártási fázisban'
                            },
                            {
                              phase: language === 'en' ? 'Distribution & Use' : 'Forgalmazás és használat',
                              desc: language === 'en'
                                ? 'Transportation footprint and product longevity considerations'
                                : 'Szállítási lábnyom és termék élettartam megfontolások'
                            },
                            {
                              phase: language === 'en' ? 'End-of-Life Management' : 'Életciklus végi kezelés',
                              desc: language === 'en'
                                ? 'Recyclability, biodegradability, or disposal requirements'
                                : 'Újrahasznosíthatóság, biológiai lebonthatóság vagy ártalmatlanítási követelmények'
                            }].map((item, i) => (
                              <div key={i} className="relative">
                                <div className="absolute -left-[22px] top-0 w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-800">{item.phase}</h5>
                                <p className="text-gray-600">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 shadow-lg text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' 
                ? 'Need Help Selecting the Right Material?' 
                : 'Segítségre van szüksége a megfelelő anyag kiválasztásához?'}
            </h3>
            <p className="max-w-3xl mx-auto mb-6">
              {language === 'en'
                ? 'Our materials experts can guide you through the selection process to find the optimal solution for your specific application requirements.'
                : 'Anyagszakértőink végigvezetik Önt a kiválasztási folyamaton, hogy megtalálja az optimális megoldást az Ön speciális alkalmazási követelményeihez.'}
            </p>
            <a 
              href={language === 'en' ? '/contact' : '/kapcsolat'} 
              className="inline-flex items-center px-6 py-3 bg-white text-amber-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {language === 'en' ? 'Consult With Us' : 'Konzultáljon velünk'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChoosingMaterialsSection;
