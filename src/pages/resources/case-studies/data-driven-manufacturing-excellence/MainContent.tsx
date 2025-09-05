import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Package, Settings, Paintbrush, Wrench, ChevronRight, Eye, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const MainContent = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeProduct, setActiveProduct] = useState(0);

  const mainContent = {
    badge: {
      en: "Key Products",
      hu: "Kulcstermékek"
    },
    title: {
      en: "Engineering Excellence<br/>Across Product Lines",
      hu: "Mérnöki Kiválóság<br/>Termékcsaládokon Keresztül"
    },
    description: {
      en: "As part of this partnership, Flair Plastic Ltd. manufactures several critical components that define industry standards for durability, precision, and performance.",
      hu: "E partnerség részeként a Flair Plastic Kft. számos kritikus alkatrészt gyárt, amelyek meghatározzák az iparági szabványokat a tartósság, pontosság és teljesítmény terén."
    },
    products: [
      {
        id: 'lawnmower',
        title: { en: "Lawnmower Housings", hu: "Fűnyíró Házak" },
        description: { 
          en: "Robust and lightweight plastic housings that enhance the durability and performance of high-efficiency lawnmowers.", 
          hu: "Robusztus és könnyű műanyag házak, amelyek fokozzák a nagy hatékonyságú fűnyírók tartósságát és teljesítményét." 
        },
        features: [
          { en: "UV-resistant materials", hu: "UV-álló anyagok" },
          { en: "Impact-resistant design", hu: "Ütésálló kialakítás" },
          { en: "Optimized airflow", hu: "Optimalizált légáramlás" },
          { en: "Weather-proof coating", hu: "Időjárásálló bevonat" }
        ],
        icon: <Wrench className="w-6 h-6" />,
        image: "/images/products/lawnmower-housing.jpg",
        stats: { efficiency: "25%", weight: "30%", durability: "40%" }
      },
      {
        id: 'storage',
        title: { en: "Tool Storage Systems", hu: "Szerszám Tárolórendszerek" },
        description: { 
          en: "Custom-designed plastic storage solutions that ensure tools are organized and easily accessible.", 
          hu: "Egyedi tervezésű műanyag tárolómegoldások, amelyek biztosítják a szerszámok rendszerezettségét és könnyű hozzáférhetőségét." 
        },
        features: [
          { en: "Modular design", hu: "Moduláris kialakítás" },
          { en: "Stackable components", hu: "Rakható alkatrészek" },
          { en: "Secure locking mechanism", hu: "Biztonságos zárómechanizmus" },
          { en: "Transparent panels", hu: "Átlátszó panelek" }
        ],
        icon: <Package className="w-6 h-6" />,
        image: "/images/products/storage-system.jpg",
        stats: { organization: "90%", access: "60%", space: "45%" }
      },
      {
        id: 'spray',
        title: { en: "Paint Spray System Components", hu: "Festékszóró Rendszer Alkatrészek" },
        description: { 
          en: "Precision parts for advanced paint spray systems, vital for consistent application and professional finishes.", 
          hu: "Precíziós alkatrészek fejlett festékszóró rendszerekhez, amelyek létfontosságúak az egyenletes felvitelhez és professzionális befejezéshez." 
        },
        features: [
          { en: "Chemical resistance", hu: "Vegyszerálló" },
          { en: "Precision nozzles", hu: "Precíziós fúvókák" },
          { en: "Easy maintenance", hu: "Könnyű karbantartás" },
          { en: "Professional grade", hu: "Professzionális szintű" }
        ],
        icon: <Paintbrush className="w-6 h-6" />,
        image: "/images/products/spray-system.jpg",
        stats: { precision: "95%", efficiency: "35%", quality: "50%" }
      },
      {
        id: 'sanding',
        title: { en: "Sanding Tool Housings", hu: "Csiszológép Házak" },
        description: { 
          en: "Ergonomically designed housings for palm sanders, providing comfort and precision for detailed work.", 
          hu: "Ergonomikusan tervezett házak tenyércsiszolókhoz, kényelmet és pontosságot biztosítanak a részletes munkákhoz." 
        },
        features: [
          { en: "Ergonomic grip", hu: "Ergonomikus fogás" },
          { en: "Vibration dampening", hu: "Rezgéscsillapítás" },
          { en: "Dust collection", hu: "Por gyűjtés" },
          { en: "Lightweight construction", hu: "Könnyű konstrukció" }
        ],
        icon: <Settings className="w-6 h-6" />,
        image: "/images/products/sanding-tool.jpg",
        stats: { comfort: "85%", precision: "40%", dust: "70%" }
      }
    ]
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Package className="w-4 h-4" />
            {mainContent.badge[language]}
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: mainContent.title[language] }}
          />
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {mainContent.description[language]}
          </p>
        </motion.div>

        {/* Product Showcase */}
        <div className="max-w-7xl mx-auto">
          {/* Product Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {mainContent.products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeProduct === index
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                data-hover="true"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activeProduct === index ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                }`}>
                  {product.icon}
                </div>
                <span className="font-medium">{product.title[language]}</span>
              </button>
            ))}
          </motion.div>

          {/* Active Product Display */}
          <motion.div
            key={activeProduct}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Product Image */}
            <div className="relative">
              <motion.div 
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={mainContent.products[activeProduct].image}
                  alt={mainContent.products[activeProduct].title[language]}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Image overlay with stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(mainContent.products[activeProduct].stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xl font-bold text-blue-600">+{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating action button */}
              <motion.button 
                className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-hover="true"
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {mainContent.products[activeProduct].title[language]}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {mainContent.products[activeProduct].description[language]}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'hu' ? "Főbb jellemzők" : "Key Features"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mainContent.products[activeProduct].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature[language]}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  {language === 'hu' ? "Részletek megtekintése" : "View Details"}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
                
                <motion.button 
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  {language === 'hu' ? "Specifikációk" : "Specifications"}
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;