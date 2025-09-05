import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Cpu, Database, Shield, Zap, Settings, BarChart3, Download, ExternalLink } from 'lucide-react';

const TechnicalDetails = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeSpec, setActiveSpec] = useState('materials');

  const technicalContent = {
    badge: {
      en: "Technical Specifications",
      hu: "Műszaki Specifikációk"
    },
    title: {
      en: "Engineering Excellence<br/>in Every Detail",
      hu: "Mérnöki Kiválóság<br/>Minden Részletben"
    },
    subtitle: {
      en: "Discover the advanced technologies and precision engineering that power our manufacturing processes",
      hu: "Fedezze fel a fejlett technológiákat és precíziós mérnöki munkát, amelyek hajtják gyártási folyamatainkat"
    },
    categories: {
      materials: {
        label: { en: "Materials", hu: "Anyagok" },
        icon: <Database className="w-5 h-5" />
      },
      processes: {
        label: { en: "Processes", hu: "Folyamatok" },
        icon: <Settings className="w-5 h-5" />
      },
      quality: {
        label: { en: "Quality", hu: "Minőség" },
        icon: <Shield className="w-5 h-5" />
      },
      performance: {
        label: { en: "Performance", hu: "Teljesítmény" },
        icon: <BarChart3 className="w-5 h-5" />
      }
    },
    specifications: {
      materials: {
        title: { en: "Advanced Materials Engineering", hu: "Fejlett Anyagmérnökség" },
        description: {
          en: "Our material selection process combines sustainability with performance, utilizing cutting-edge polymer science to deliver exceptional results.",
          hu: "Anyagválasztási folyamatunk ötvözi a fenntarthatóságot a teljesítménnyel, élvonalbeli polimer tudományt alkalmazva kivételes eredmények eléréséhez."
        },
        details: [
          {
            name: { en: "High-Density Polyethylene (HDPE)", hu: "Nagy Sűrűségű Polietilén (HDPE)" },
            properties: [
              { en: "Chemical resistance: Excellent", hu: "Vegyszerálló: Kiváló" },
              { en: "Impact strength: 95+ kJ/m²", hu: "Ütési szilárdság: 95+ kJ/m²" },
              { en: "Temperature range: -40°C to +80°C", hu: "Hőmérséklet tartomány: -40°C - +80°C" },
              { en: "UV stabilization: 10+ years", hu: "UV stabilizáció: 10+ év" }
            ],
            applications: { en: "Lawnmower housings, heavy-duty components", hu: "Fűnyíró házak, nagy terhelésű alkatrészek" }
          },
          {
            name: { en: "Recycled ABS Composite", hu: "Újrahasznosított ABS Kompozit" },
            properties: [
              { en: "Recycled content: 30-50%", hu: "Újrahasznosított tartalom: 30-50%" },
              { en: "Tensile strength: 40+ MPa", hu: "Szakítószilárdság: 40+ MPa" },
              { en: "Heat deflection: 95°C", hu: "Hőtorzulás: 95°C" },
              { en: "Surface finish: Premium grade", hu: "Felületi minőség: Prémium" }
            ],
            applications: { en: "Tool storage systems, precision housings", hu: "Szerszám tárolórendszerek, precíziós házak" }
          }
        ]
      },
      processes: {
        title: { en: "Advanced Manufacturing Processes", hu: "Fejlett Gyártási Folyamatok" },
        description: {
          en: "State-of-the-art injection molding technologies combined with precision automation deliver consistent, high-quality results at scale.",
          hu: "Legmodernebb fröccsöntési technológiák precíziós automatizálással kombinálva következetes, kiváló minőségű eredményeket szolgáltatnak nagyban."
        },
        details: [
          {
            name: { en: "Multi-Cavity Injection Molding", hu: "Többüregű Fröccsöntés" },
            specifications: [
              { en: "Cavity count: Up to 32 cavities", hu: "Üreg szám: Akár 32 üreg" },
              { en: "Cycle time: 45-180 seconds", hu: "Ciklus idő: 45-180 másodperc" },
              { en: "Tolerance: ±0.05mm", hu: "Tűrés: ±0,05mm" },
              { en: "Production rate: 1000+ parts/hour", hu: "Gyártási sebesség: 1000+ darab/óra" }
            ],
            advantages: { en: "High efficiency, consistent quality, reduced cost per part", hu: "Nagy hatékonyság, következetes minőség, csökkentett darabköltség" }
          },
          {
            name: { en: "In-Mold Assembly (IMA)", hu: "Forma-beli Összeszerelés (IMA)" },
            specifications: [
              { en: "Assembly stages: Up to 3 components", hu: "Összeszerelési szakaszok: Akár 3 alkatrész" },
              { en: "Precision: ±0.02mm alignment", hu: "Pontosság: ±0,02mm igazítás" },
              { en: "Automation level: 95%", hu: "Automatizálási szint: 95%" },
              { en: "Quality control: 100% inline inspection", hu: "Minőségellenőrzés: 100% beépített ellenőrzés" }
            ],
            advantages: { en: "Reduced assembly time, improved precision, lower labor costs", hu: "Csökkentett összeszerelési idő, javított pontosság, alacsonyabb munkaerőköltség" }
          }
        ]
      },
      quality: {
        title: { en: "Comprehensive Quality Assurance", hu: "Átfogó Minőségbiztosítás" },
        description: {
          en: "Our multi-stage quality control system ensures every component meets the highest standards through rigorous testing and validation.",
          hu: "Többlépcsős minőségellenőrzési rendszerünk biztosítja, hogy minden alkatrész megfeleljen a legmagasabb szabványoknak szigorú tesztelésen és validáláson keresztül."
        },
        details: [
          {
            name: { en: "Dimensional Inspection", hu: "Méretfelügyeleti Ellenőrzés" },
            methods: [
              { en: "3D coordinate measuring: ±0.001mm accuracy", hu: "3D koordináta mérés: ±0,001mm pontosság" },
              { en: "Optical scanning: Full surface analysis", hu: "Optikai szkennelés: Teljes felületelemzés" },
              { en: "Statistical process control: Real-time monitoring", hu: "Statisztikai folyamatszabályozás: Valós idejű monitoring" },
              { en: "Automated sorting: 99.9% accuracy", hu: "Automatikus válogatás: 99,9% pontosság" }
            ]
          },
          {
            name: { en: "Material Testing", hu: "Anyagvizsgálat" },
            methods: [
              { en: "Tensile testing: ASTM D638 standard", hu: "Szakítóvizsgálat: ASTM D638 szabvány" },
              { en: "Impact testing: Charpy and Izod methods", hu: "Ütővizsgálat: Charpy és Izod módszerek" },
              { en: "Thermal analysis: DSC and TGA", hu: "Termikus analízis: DSC és TGA" },
              { en: "UV exposure testing: 2000+ hours", hu: "UV expozíciós teszt: 2000+ óra" }
            ]
          }
        ]
      },
      performance: {
        title: { en: "Performance Metrics & Analytics", hu: "Teljesítménymutatók és Analitika" },
        description: {
          en: "Real-time performance monitoring and advanced analytics drive continuous improvement across all manufacturing operations.",
          hu: "Valós idejű teljesítményfigyelés és fejlett analitika folyamatos fejlesztést hajt minden gyártási műveletnél."
        },
        details: [
          {
            name: { en: "Production Efficiency", hu: "Gyártási Hatékonyság" },
            metrics: [
              { en: "Overall Equipment Effectiveness (OEE): 87%", hu: "Összesített Berendezési Hatékonyság (OEE): 87%" },
              { en: "First-pass yield: 98.5%", hu: "Első átfutási hozam: 98,5%" },
              { en: "Downtime reduction: 45% year-over-year", hu: "Állásidő csökkentés: 45% éves szinten" },
              { en: "Energy efficiency: 25% improvement", hu: "Energiahatékonyság: 25% javulás" }
            ]
          },
          {
            name: { en: "Quality Performance", hu: "Minőségi Teljesítmény" },
            metrics: [
              { en: "Defect rate: <0.2%", hu: "Hibaarány: <0,2%" },
              { en: "Customer complaints: 99.8% reduction", hu: "Vásárlói panaszok: 99,8% csökkentés" },
              { en: "Inspection accuracy: 99.95%", hu: "Ellenőrzési pontosság: 99,95%" },
              { en: "Certification compliance: 100%", hu: "Tanúsítványi megfelelés: 100%" }
            ]
          }
        ]
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
            <Cpu className="w-4 h-4" />
            {technicalContent.badge[language]}
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: technicalContent.title[language] }}
          />
          
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {technicalContent.subtitle[language]}
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {Object.entries(technicalContent.categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveSpec(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border ${
                activeSpec === key
                  ? 'bg-white/20 text-white border-white/30 shadow-lg shadow-white/10'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
              data-hover="true"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                activeSpec === key ? 'bg-white/20' : 'bg-white/10'
              }`}>
                {category.icon}
              </div>
              <span className="font-medium">{category.label[language]}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Display */}
        <motion.div
          key={activeSpec}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {technicalContent.specifications[activeSpec].title[language]}
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {technicalContent.specifications[activeSpec].description[language]}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalContent.specifications[activeSpec].details.map((detail, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {detail.name[language]}
                  </h4>
                  <div className="flex gap-2">
                    <button 
                      className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors"
                      data-hover="true"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button 
                      className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors"
                      data-hover="true"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Properties/Specifications/Methods/Metrics */}
                <div className="space-y-3 mb-6">
                  {(detail.properties || detail.specifications || detail.methods || detail.metrics)?.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-blue-100 text-sm">{item[language] || item}</span>
                    </div>
                  ))}
                </div>

                {/* Applications/Advantages */}
                {(detail.applications || detail.advantages) && (
                  <div className="pt-4 border-t border-white/10">
                    <h5 className="text-sm font-semibold text-cyan-300 mb-2">
                      {detail.applications 
                        ? (language === 'hu' ? 'Alkalmazások' : 'Applications')
                        : (language === 'hu' ? 'Előnyök' : 'Advantages')
                      }
                    </h5>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      {(detail.applications || detail.advantages)[language]}
                    </p>
                  </div>
                )}

                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Download Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex flex-wrap gap-4 justify-center">
              <motion.button 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                <Download className="w-4 h-4" />
                {language === 'hu' ? "Műszaki adatlap letöltése" : "Download Technical Datasheet"}
              </motion.button>
              
              <motion.button 
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                <Zap className="w-4 h-4" />
                {language === 'hu' ? "Teljesítményadatok" : "Performance Data"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalDetails;