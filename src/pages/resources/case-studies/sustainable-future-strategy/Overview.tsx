import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Utensils, Bath, Shirt, Baby, Lightbulb, Zap, Recycle, Shield, ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';

const Overview = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Advanced scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const overviewContent = {
    badge: {
      en: "Revolutionizing Daily Life",
      hu: "A Mindennapi Élet Forradalmasítása"
    },
    title: {
      en: "From Concept to<br/><span class='highlight-gradient'>Kitchen Reality</span>",
      hu: "A Koncepciótól<br/><span class='highlight-gradient'>a Konyhai Valóságig</span>"
    },
    subtitle: {
      en: "Discover how our innovative plastic injection molding transforms everyday household experiences through precision engineering and sustainable design.",
      hu: "Fedezze fel, hogyan alakítja át innovatív műanyag fröccsöntési technológiánk a mindennapi háztartási élményeket precíziós mérnöki munkán és fenntartható tervezésen keresztül."
    },
    categories: [
      {
        icon: <Utensils className="w-8 h-8" />,
        title: { en: "Kitchen Essentials", hu: "Konyhai Alapok" },
        description: { en: "Smart storage and food preparation solutions", hu: "Intelligens tárolási és ételkészítési megoldások" },
        color: "from-orange-500 to-red-500",
        products: ["Smart Containers", "Cutting Boards", "Kitchen Organizers", "Food Storage"],
        image: "/images/household/kitchen-category.jpg"
      },
      {
        icon: <Bath className="w-8 h-8" />,
        title: { en: "Bathroom Solutions", hu: "Fürdőszobai Megoldások" },
        description: { en: "Elegant and functional bathroom accessories", hu: "Elegáns és funkcionális fürdőszobai kiegészítők" },
        color: "from-blue-500 to-cyan-500",
        products: ["Shower Organizers", "Soap Dispensers", "Towel Holders", "Storage Baskets"],
        image: "/images/household/bathroom-category.jpg"
      },
      {
        icon: <Shirt className="w-8 h-8" />,
        title: { en: "Laundry & Storage", hu: "Mosás és Tárolás" },
        description: { en: "Innovative organization for modern homes", hu: "Innovatív szervezés modern otthonokhoz" },
        color: "from-purple-500 to-pink-500",
        products: ["Laundry Baskets", "Closet Organizers", "Hangers", "Storage Boxes"],
        image: "/images/household/laundry-category.jpg"
      },
      {
        icon: <Baby className="w-8 h-8" />,
        title: { en: "Family & Baby", hu: "Család és Baba" },
        description: { en: "Safe, durable products for growing families", hu: "Biztonságos, tartós termékek növekvő családoknak" },
        color: "from-green-500 to-emerald-500",
        products: ["Baby Bottles", "Toy Storage", "Safety Gates", "High Chair Parts"],
        image: "/images/household/family-category.jpg"
      },
      {
        icon: <Home className="w-8 h-8" />,
        title: { en: "Smart Home", hu: "Okos Otthon" },
        description: { en: "IoT-integrated household solutions", hu: "IoT-integrált háztartási megoldások" },
        color: "from-indigo-500 to-purple-500",
        products: ["Smart Sensors", "Cable Management", "Device Holders", "Tech Accessories"],
        image: "/images/household/smart-category.jpg"
      }
    ],
    features: [
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: { en: "Innovation First", hu: "Innováció Első" },
        description: { en: "Cutting-edge design meets practical functionality", hu: "Élvonalbeli design találkozik a gyakorlati funkcionalitással" }
      },
      {
        icon: <Recycle className="w-6 h-6" />,
        title: { en: "Eco-Sustainable", hu: "Környezetbarát" },
        description: { en: "Recycled materials without compromising quality", hu: "Újrahasznosított anyagok a minőség feláldozása nélkül" }
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: { en: "Family Safe", hu: "Családbiztos" },
        description: { en: "Non-toxic, BPA-free materials for peace of mind", hu: "Nem mérgező, BPA-mentes anyagok a lelki békéért" }
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: { en: "Built to Last", hu: "Tartós Készítés" },
        description: { en: "Superior durability for everyday use", hu: "Kiváló tartósság mindennapi használatra" }
      }
    ]
  };

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          style={{ scale, opacity }}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 border border-blue-200/50"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.2)',
                '0 0 40px rgba(139, 92, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Home className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">
              {overviewContent.badge[language]}
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: overviewContent.title[language] }}
          />

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {overviewContent.subtitle[language]}
          </motion.p>

          {/* Custom styles for highlight gradient */}
          <style jsx>{`
            .highlight-gradient {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
              background-size: 200% 200%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: gradient-flow 4s ease-in-out infinite;
            }
            
            @keyframes gradient-flow {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </motion.div>

        {/* Interactive Category Showcase */}
        <div className="max-w-7xl mx-auto mb-20">
          {/* Category Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {overviewContent.categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 ${
                  activeCategory === index
                    ? 'bg-white shadow-2xl border-2 border-blue-200'
                    : 'bg-white/80 backdrop-blur-sm shadow-lg border-2 border-transparent hover:border-gray-200'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}
                  animate={activeCategory === index ? { 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title[language]}
                  </div>
                  <div className="text-sm text-gray-600">
                    {category.description[language]}
                  </div>
                </div>
                
                {/* Active indicator */}
                {activeCategory === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl -z-10"
                    layoutId="active-category"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ perspective: '1000px' }}
            >
              {/* Category Image */}
              <motion.div 
                className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={overviewContent.categories[activeCategory].image}
                  alt={overviewContent.categories[activeCategory].title[language]}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating product tags */}
                <div className="absolute inset-0 p-6">
                  {overviewContent.categories[activeCategory].products.map((product, index) => (
                    <motion.div
                      key={index}
                      className="absolute bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg border border-white/50"
                      style={{
                        left: `${20 + (index % 2) * 50}%`,
                        top: `${20 + index * 15}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      data-hover="true"
                    >
                      {product}
                    </motion.div>
                  ))}
                </div>

                {/* Category overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${overviewContent.categories[activeCategory].color} flex items-center justify-center text-white shadow-xl mb-4`}>
                    {overviewContent.categories[activeCategory].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {overviewContent.categories[activeCategory].title[language]}
                  </h3>
                  <p className="text-white/90">
                    {overviewContent.categories[activeCategory].description[language]}
                  </p>
                </div>
              </motion.div>

              {/* Category Details */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {overviewContent.categories[activeCategory].title[language]}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {overviewContent.categories[activeCategory].description[language]}
                  </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {overviewContent.categories[activeCategory].products.map((product, index) => (
                    <motion.div
                      key={index}
                      className="group p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      data-hover="true"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${overviewContent.categories[activeCategory].color} flex items-center justify-center text-white text-sm font-bold`}>
                          {index + 1}
                        </div>
                        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {product}
                        </span>
                      </div>
                      
                      {/* Hover effect */}
                      {hoveredCard === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl -z-10"
                          layoutId="product-hover"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button 
                  className={`group relative px-8 py-4 bg-gradient-to-r ${overviewContent.categories[activeCategory].color} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {language === 'hu' ? "Termékek Megtekintése" : "View Products"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {overviewContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              data-hover="true"
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              />
              
              <div className="relative z-10">
                {/* Animated icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title[language]}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description[language]}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-3xl transition-colors duration-500"
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' 
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;