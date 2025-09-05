import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Info,
  X
} from 'lucide-react';

const ModernIMDShowcase = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const techSpecs = [
    {
      id: 1,
      position: { top: '25%', left: '20%' },
      title: language === 'en' ? 'High-Precision Application' : 'Nagy pontosságú alkalmazás',
      description: language === 'en' 
        ? 'Advanced IMD technology for seamless decoration integration'
        : 'Fejlett IMD technológia a zökkenőmentes díszítési integráció érdekében'
    },
    {
      id: 2,
      position: { top: '45%', left: '70%' },
      title: language === 'en' ? 'Quality Control' : 'Minőségellenőrzés',
      description: language === 'en'
        ? 'Rigorous testing ensures perfect adhesion and finish'
        : 'A szigorú tesztelés tökéletes tapadást és felületet biztosít'
    },
    {
      id: 3,
      position: { top: '70%', left: '35%' },
      title: language === 'en' ? 'Material Innovation' : 'Anyag innováció',
      description: language === 'en'
        ? 'Premium materials for enhanced durability and aesthetics'
        : 'Prémium anyagok a fokozott tartósság és esztétika érdekében'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-100 to-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Technology in Action' : 'Technológia működés közben'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Experience the precision and sophistication of our In-Mould Decoration process through advanced visualization.'
              : 'Tapasztalja meg formában díszítési folyamatunk pontosságát és kifinomultságát fejlett vizualizáción keresztül.'
            }
          </p>
        </motion.div>

        {/* Main Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Background Container */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Interactive Image Container */}
            <div className="relative aspect-video">
              {/* Main Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900">
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Interior-view-showcasing-sustainability-featuring-a-frosted-glass-partition-with-a-vibrant-eco-the-600x431.png.webp"
                  alt={language === 'en' ? 'High-precision IMD application on consumer electronics' : 'Nagy pontosságú IMD alkalmazás fogyasztói elektronikán'}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Overlay with interactive elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent">
                
                {/* Interactive Hotspots */}
                {techSpecs.map((spec) => (
                  <motion.div
                    key={spec.id}
                    className="absolute"
                    style={spec.position}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + spec.id * 0.2 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveHotspot(activeHotspot === spec.id ? null : spec.id)}
                      className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white/30 backdrop-blur-sm"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    </motion.button>
                    
                    {/* Hotspot Info */}
                    <AnimatePresence>
                      {activeHotspot === spec.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 10 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200 min-w-64 max-w-80"
                        >
                          <h4 className="font-bold text-gray-900 mb-2">{spec.title}</h4>
                          <p className="text-gray-600 text-sm">{spec.description}</p>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Play/Pause Button */}
                <div className="absolute bottom-6 left-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 text-white font-medium border border-white/30"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    {language === 'en' ? (isPlaying ? 'Pause Tour' : 'Start Tour') : (isPlaying ? 'Túra szüneteltetése' : 'Túra indítása')}
                  </motion.button>
                </div>

                {/* Controls */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowInfo(!showInfo)}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30"
                  >
                    <Info className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Progress Indicator */}
                {isPlaying && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-blue-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                )}
              </div>
            </div>

            {/* Info Panel */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-800 border-t border-slate-700"
                >
                  <div className="p-6 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {language === 'en' ? 'IMD Technology Showcase' : 'IMD technológia bemutatása'}
                      </h3>
                      <p className="text-slate-300 mb-4">
                        {language === 'en'
                          ? 'This interactive demonstration showcases our advanced In-Mould Decoration process, highlighting precision application techniques and quality control measures.'
                          : 'Ez az interaktív bemutató bemutatja fejlett formában díszítési folyamatunkat, kiemelve a precíziós alkalmazási technikákat és minőségellenőrzési intézkedéseket.'
                        }
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">300 DPI</div>
                          <div className="text-slate-400 text-sm">{language === 'en' ? 'Resolution' : 'Felbontás'}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">15-45s</div>
                          <div className="text-slate-400 text-sm">{language === 'en' ? 'Cycle Time' : 'Ciklusidő'}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">10+ {language === 'en' ? 'Years' : 'Év'}</div>
                          <div className="text-slate-400 text-sm">{language === 'en' ? 'Durability' : 'Tartósság'}</div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowInfo(false)}
                      aria-label="Close information panel"
                      className="ml-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Technical Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-6 mt-8"
          >
            {[
              { 
                label: language === 'en' ? 'Precision Level' : 'Pontossági szint', 
                value: '±0.05mm',
                description: language === 'en' ? 'Exceptional accuracy' : 'Kivételes pontosság'
              },
              { 
                label: language === 'en' ? 'Production Speed' : 'Gyártási sebesség', 
                value: '500+/h',
                description: language === 'en' ? 'High throughput' : 'Nagy teljesítmény'
              },
              { 
                label: language === 'en' ? 'Quality Rate' : 'Minőségi arány', 
                value: '99.8%',
                description: language === 'en' ? 'Consistent excellence' : 'Következetes kiválóság'
              },
              { 
                label: language === 'en' ? 'Material Types' : 'Anyagtípusok', 
                value: '50+',
                description: language === 'en' ? 'Versatile options' : 'Sokoldalú lehetőségek'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernIMDShowcase;
