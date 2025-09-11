import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Recycle, 
  Leaf, 
  Droplet, 
  Zap, 
  PackageCheck, 
  Truck, 
  BookOpen, 
  Factory,
  BarChart3 
} from 'lucide-react';

const SustainableCycleSection = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: Zap,
      title: language === 'en' ? 'Renewable Energy Infrastructure' : 'Megújuló Energia Infrastruktúra',
      description: language === 'en' 
        ? 'Implementing renewable energy solutions across our manufacturing facilities to reduce environmental impact and enhance operational sustainability through strategic energy efficiency initiatives.'
        : 'Megújuló energiamegoldások bevezetése gyártó létesítményeinkben a környezeti hatások csökkentése és az üzemeltetési fenntarthatóság növelése érdekében stratégiai energiahatékonysági kezdeményezéseken keresztül.'
    },
    {
      icon: Droplet,
      title: language === 'en' ? 'Closed-Loop Thermal Management' : 'Zárt Körű Termikus Kezelés',
      description: language === 'en'
        ? 'Advanced circulation systems optimizing thermal regulation processes essential for precision manufacturing operations and resource conservation.'
        : 'Fejlett cirkulációs rendszerek termikus szabályozási folyamatok optimalizálásához, amelyek alapvető fontosságúak a precíziós gyártási műveletekhez és erőforrás-megőrzéshez.'
    },
    {
      icon: Recycle,
      title: language === 'en' ? 'Material Flow Optimization' : 'Anyagáramlás Optimalizálás',
      description: language === 'en'
        ? 'Comprehensive recovery systems ensuring complete reintegration of production outputs, achieving operational excellence through circular manufacturing principles.'
        : 'Átfogó visszanyerési rendszerek biztosítva a gyártási kimenetek teljes reintegrációját, működési kiválóság elérése körforgásos gyártási elveken keresztül.'
    },
    {
      icon: PackageCheck,
      title: language === 'en' ? 'Environmental Containment Protocols' : 'Környezeti Visszatartási Protokollok',
      description: language === 'en'
        ? 'Rigorous quality management systems preventing material dispersion and ensuring comprehensive environmental stewardship throughout operations.'
        : 'Szigorú minőségkezelési rendszerek anyag szóródás megelőzésére és átfogó környezeti felelősségvállalás biztosítására a műveletek során.'
    },
    {
      icon: Factory,
      title: language === 'en' ? 'Precision Manufacturing Excellence' : 'Precíziós Gyártási Kiválóság',
      description: language === 'en'
        ? 'Advanced process control methodologies optimizing material utilization through enhanced manufacturing precision and quality assurance systems.'
        : 'Fejlett folyamatszabályozási módszertanok anyagkihasználás optimalizálásához fokozott gyártási precizitással és minőségbiztosítási rendszerekkel.'
    },
    {
      icon: Truck,
      title: language === 'en' ? 'Operational Efficiency Systems' : 'Működési Hatékonyság Rendszerek',
      description: language === 'en'
        ? 'Streamlined material handling and logistics optimization reducing operational footprint while enhancing manufacturing productivity and sustainability.'
        : 'Egyszerűsített anyagkezelés és logisztikai optimalizálás működési lábnyom csökkentésére miközben növeli a gyártási produktivitást és fenntarthatóságot.'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Sustainability Excellence Training' : 'Fenntarthatósági Kiválóság Képzés',
      description: language === 'en'
        ? 'Comprehensive professional development programs advancing environmental stewardship capabilities across all organizational levels and operational functions.'
        : 'Átfogó szakmai fejlesztési programok környezeti felelősségvállalási képességek fejlesztésére minden szervezeti szinten és működési funkcióban.'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Performance Analytics & Optimization' : 'Teljesítmény Analitika és Optimalizálás',
      description: language === 'en'
        ? 'Advanced monitoring and analytics systems providing real-time sustainability metrics for continuous improvement and operational excellence.'
        : 'Fejlett monitoring és analitikai rendszerek valós idejű fenntarthatósági mutatók biztosítására folyamatos fejlesztés és működési kiválóság érdekében.'
    },
    {
      icon: Leaf,
      title: language === 'en' ? 'Innovation & Technology Development' : 'Innováció és Technológia Fejlesztés',
      description: language === 'en'
        ? 'Strategic research and development initiatives advancing next-generation sustainable manufacturing technologies and environmental solutions.'
        : 'Stratégiai kutatás-fejlesztési kezdeményezések következő generációs fenntartható gyártási technológiák és környezeti megoldások fejlesztésére.'
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Top gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white -z-10"></div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-100/30 to-green-200/20 -z-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-100/30 to-green-200/20 -z-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Middle Image Section - enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[21/9] relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000"
                alt="Sustainability in Nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {language === 'en' ? 'Our Environmental Vision' : 'Környezetvédelmi Jövőképünk'}
                </h3>
                <p className="text-white/90">
                  {language === 'en'
                    ? "At Flair-Plastic, we believe in a future where industrial manufacturing and environmental stewardship work in harmony, creating sustainable solutions for generations to come."
                    : "A Flair-Plastic-nál hiszünk egy olyan jövőben, ahol az ipari gyártás és a környezetvédelem harmóniában működik, fenntartható megoldásokat teremtve az elkövetkező generációk számára."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section - Key Pillars */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                {language === 'en' ? 'SUSTAINABILITY FRAMEWORK' : 'FENNTARTHATÓSÁGI KERETRENDSZER'}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {language === 'en'
                  ? "Comprehensive Sustainability Excellence Framework"
                  : "Átfogó Fenntarthatósági Kiválóság Keretrendszer"}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en'
                  ? "Our integrated sustainability approach encompasses advanced technology deployment, operational optimization, and environmental stewardship to deliver measurable impact across manufacturing excellence."
                  : "Integrált fenntarthatósági megközelítésünk fejlett technológiai telepítést, működési optimalizálást és környezeti felelősségvállalást foglal magában mérhető hatás eléréséhez a gyártási kiválóságban."}
              </p>
            </motion.div>

            {/* Featured Pillars in Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group"
                >
                  <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors">
                        <pillar.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{pillar.title}</h4>
                        <p className="text-gray-600">{pillar.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
          
          {/* Bottom commitment banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full shadow-lg">
              <Leaf className="w-5 h-5 mr-2" />
              <span className="font-medium">
                {language === 'en'
                  ? "Committed to a sustainable future, one innovation at a time"
                  : "Elkötelezettek vagyunk a fenntartható jövő mellett, egy innováció után a másikkal"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainableCycleSection;
