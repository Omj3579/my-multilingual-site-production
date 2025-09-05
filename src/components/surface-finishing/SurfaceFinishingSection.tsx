import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CircleDot, PaintBucket, Layers, Sparkles } from 'lucide-react';

const SurfaceFinishingSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // Enhanced view detection with higher threshold for earlier animation triggering
  const [textRef, textInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // More dynamic scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax transformations
  const imageY = useTransform(scrollYProgress, [0.3, 0.8], [80, -80]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const patternRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
  
  // Interactive hotspots with enhanced information
  const hotspots = [
    { 
      x: '20%', 
      y: '30%', 
      label: language === 'en' ? 'Precision Painting' : 'Precíziós Festés',
      description: language === 'en' ? 'High-precision application with perfect color matching' : 'Nagy pontosságú alkalmazás tökéletes színegyeztetéssel',
      icon: <PaintBucket size={16} />
    },
    { 
      x: '70%', 
      y: '40%', 
      label: language === 'en' ? 'Multi-Color Tampo' : 'Többszínű Tampo',
      description: language === 'en' ? 'Up to 6 colors on complex surfaces' : 'Akár 6 szín komplex felületeken',
      icon: <Layers size={16} />
    },
    { 
      x: '50%', 
      y: '70%', 
      label: language === 'en' ? 'Surface Texture' : 'Felületi Textúra',
      description: language === 'en' ? 'Custom textures and soft-touch finishes' : 'Egyedi textúrák és soft-touch felületek',
      icon: <Sparkles size={16} />
    }
  ];

  // Surface finishing techniques for the tabbed interface
  const techniques = [
    {
      id: 'tampo',
      title: language === 'en' ? 'Tampo Printing' : 'Tamponnyomás',
      description: language === 'en' 
        ? 'High-precision transfer of 2D images to 3D surfaces with exceptional detail and durability.'
        : 'Kétdimenziós képek nagy pontosságú átvitele háromdimenziós felületekre kivételes részletességgel és tartóssággal.',
    },
    {
      id: 'laser',
      title: language === 'en' ? 'Laser Etching' : 'Lézergravírozás',
      description: language === 'en' 
        ? 'Permanent, precise marking on plastic surfaces with intricate details and no wear over time.'
        : 'Állandó, pontos jelölés műanyag felületeken bonyolult részletekkel és időbeli kopás nélkül.',
    },
    {
      id: 'painting',
      title: language === 'en' ? 'Precision Painting' : 'Precíziós Festés',
      description: language === 'en' 
        ? 'Custom color application with perfect matching and high resistance to chemicals and UV light.'
        : 'Egyedi színalkalmazás tökéletes egyeztetéssel és magas ellenállással vegyszerekkel és UV-fénnyel szemben.',
    },
    {
      id: 'coating',
      title: language === 'en' ? 'Soft-Touch Coating' : 'Soft-Touch Bevonat',
      description: language === 'en' 
        ? 'Luxurious velvety feel with enhanced grip and premium aesthetic appeal.'
        : 'Luxus bársonyos érzet fokozott tapadással és prémium esztétikai vonzerővel.',
    },
  ];

  return (
    <section className="relative font-[Poppins] text-[#333] -mt-10 overflow-hidden" ref={containerRef}>
      {/* Enhanced dynamic background with parallax and animated elements */}
      <div className="absolute inset-0 z-0">
        {/* Split background with smoother gradient transition */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#ebebeb] via-[#ebebeb] to-white"
          style={{ y: backgroundY }}
        />
        
        {/* Animated pattern overlay with rotation */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
            rotate: patternRotate
          }}
        />
        
        {/* Multiple animated gradient blobs for enhanced visual interest */}
        <motion.div 
          className="absolute left-[5%] top-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100/20 via-indigo-50/10 to-transparent blur-[80px]"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1],
          }}
          style={{ scale: blobScale }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-[5%] top-[60%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-amber-100/15 via-orange-50/10 to-transparent blur-[100px]"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      {/* Content container with improved z-index management */}
      <div className="relative z-10">
        {/* Header section with enhanced typography and animations */}
        <div className="pb-48 pt-20">
          <div className="max-w-[1140px] mx-auto mb-10 px-6">
            <motion.div 
              className="mb-10 text-left"
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative element */}
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-6"
                initial={{ width: 0 }}
                animate={{ width: textInView ? 80 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              {/* Enhanced heading with staggered text animation */}
              <div className="overflow-hidden mb-2">
                <motion.h2 
                  className="text-[28px] sm:text-[32px] md:text-[42px] leading-tight font-light text-[#333]"
                  initial={{ y: 100 }}
                  animate={{ y: textInView ? 0 : 100 }}
                  transition={{ duration: 0.8 }}
                >
                  {language === 'en' ? (
                    <>
                      <span className="font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Optimize Your Production</span>{' '}
                      with Flair–Plastic's<br />
                      <span className="font-bold text-[#333]">Advanced</span> Surface Finishing Solutions
                    </>
                  ) : (
                    <>
                      <span className="font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Optimalizálja termelését</span>{' '}
                      a Flair-Plastic<br />
                      <span className="font-bold text-[#333]">Fejlett</span> felületkezelési megoldásaival
                    </>
                  )}
                </motion.h2>
              </div>
              
              {/* Animated subtitle with reveal effect */}
              <motion.p
                className="text-lg text-gray-500 max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: textInView ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {language === 'en' 
                  ? "Transform your plastic components with expert surface treatments that enhance aesthetics, durability, and functionality."
                  : "Alakítsa át műanyag alkatrészeit szakértői felületkezelésekkel, amelyek javítják az esztétikát, tartósságot és funkcionalitást."}
              </motion.p>
            </motion.div>

            {/* Enhanced content layout with better spacing and animations */}
            <div className="hidden md:flex w-full">
              <motion.div 
                className="w-full flex gap-16 text-[18px] text-[#555] leading-[1.7]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Glass card effect for first column */}
                <motion.div 
                  className="w-1/2 bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {language === 'en' ? 'Comprehensive Solutions' : 'Átfogó Megoldások'}
                    </h3>
                  </div>
                  <p>
                    {language === 'en'
                      ? "At Flair-Plastic, we offer more than just plastic part manufacturing; we deliver comprehensive surface finishing solutions designed to enhance efficiency and reduce production costs. Our extensive range includes advanced secondary manufacturing services, expert assembly solutions, and specialized post-moulding operations."
                      : "A Flair-Plastic-nél többet kínálunk, mint egyszerű műanyagalkatrész-gyártás; átfogó felületkezelési megoldásokat nyújtunk, amelyeket a hatékonyság növelésére és a gyártási költségek csökkentésére terveztünk. Széles körű szolgáltatásaink magukban foglalják a fejlett másodlagos gyártási szolgáltatásokat, szakértői összeszerelési megoldásokat és specializált utókezelési műveleteket."}
                  </p>
                </motion.div>
                
                {/* Glass card effect for second column */}
                <motion.div 
                  className="w-1/2 bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {language === 'en' ? 'Expert Capabilities' : 'Szakértői Képességek'}
                    </h3>
                  </div>
                  <p>
                    {language === 'en'
                      ? "Flair-Plastic is equipped to handle a wide range of specialized services, including hot stamping, inserting, and heat staking, among others. With advanced facilities and a team of experts, we provide comprehensive turnkey solutions that cater specifically to your product needs."
                      : "A Flair-Plastic felszerelt számos speciális szolgáltatás kezelésére, beleértve a melegpecsételést, a beillesztést és a hőkötést, többek között. Fejlett létesítményeinkkel és szakértői csapatunkkal átfogó kulcsrakész megoldásokat kínálunk, amelyek kifejezetten az Ön termékigényeihez igazodnak."}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced image section with 3D perspective and interactive elements */}
        <div className="relative -mt-40 mb-20 z-10 px-6" ref={imageRef}>
          <motion.div 
            className="max-w-[1300px] mx-auto overflow-hidden rounded-[40px] shadow-xl"
            style={{ 
              y: imageY, 
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.95 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              rotateX: 2,
              rotateY: -2,
            }}
          >
            {/* Enhanced gradient overlay with depth effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            
            {/* Image with subtle zoom effect on hover */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/09/Surface_finishing.png"
                alt={language === 'en' ? "Surface Finishing Showcase" : "Felületkezelési bemutató"}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Enhanced interactive floating points with tooltips */}
            {hotspots.map((point, i) => (
              <motion.div
                key={i}
                className="absolute z-20"
                style={{ left: point.x, top: point.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0 }}
                transition={{ delay: 0.5 + (i * 0.2), duration: 0.5 }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
              >
                <div className="flex flex-col items-center">
                  {/* Enhanced pulsing dot with icon */}
                  <div className="relative">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      {point.icon}
                    </div>
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-amber-500"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Enhanced tooltip with description */}
                  <motion.div
                    className="absolute top-12 -left-1/2 bg-white px-4 py-3 rounded-lg shadow-xl text-sm text-gray-800 w-48 transform -translate-x-1/3"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="font-semibold mb-1">{point.label}</div>
                    <div className="text-xs text-gray-500">{point.description}</div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Image caption with glassmorphism */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 bg-white/30 backdrop-blur-md p-4 rounded-xl border border-white/40 text-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 20 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h4 className="text-lg font-medium">
                {language === 'en' ? "Surface Finishing Excellence" : "Felületkezelési Kiválóság"}
              </h4>
              <p className="text-sm opacity-90">
                {language === 'en' 
                  ? "Our state-of-the-art facility enables precise application of multiple finishing techniques"
                  : "Csúcstechnológiás létesítményünk lehetővé teszi többféle felületkezelési technika precíz alkalmazását"}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Techniques section with tabbed interface */}
        <div className="max-w-[1140px] mx-auto px-6 mb-24" ref={featuresRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-6"
              initial={{ width: 0 }}
              animate={{ width: featuresInView ? 80 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-snug font-light text-[#333]">
              {language === 'en' ? (
                <>
                  <span className="font-bold text-[#333]">Comprehensive</span>{' '}
                  Surface Finishing{' '}
                  <span className="font-bold text-[#333]">Techniques</span>
                </>
              ) : (
                <>
                  <span className="font-bold text-[#333]">Átfogó</span>{' '}
                  Felületkezelési{' '}
                  <span className="font-bold text-[#333]">Technikák</span>
                </>
              )}
            </h2>
          </motion.div>

          {/* Tabbed interface for techniques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {techniques.map((technique, index) => (
                <motion.button
                  key={technique.id}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeTab === index 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' 
                      : 'bg-white text-gray-700 hover:bg-amber-50'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {technique.title}
                </motion.button>
              ))}
            </div>
            
            {/* Content panel for active tab */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {techniques[activeTab].title}
                  </h3>
                  <p className="text-gray-600">
                    {techniques[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom descriptive content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-[18px] text-[#555] leading-[1.8]">
              {language === 'en'
                ? "Flair-Plastic offers a comprehensive selection of top-tier, in-house surface finishing techniques tailored for plastic injection moulding. Our diverse capabilities include advanced multicolour tampo-printing, which allows for high-precision colour application on both flat and curved surfaces."
                : "A Flair-Plastic átfogó választékot kínál csúcsminőségű, házon belüli felületkezelési technikákból, amelyeket kifejezetten a műanyag fröccsöntéshez alakítottak ki. Sokrétű képességeink közé tartozik a fejlett többszínű tamponnyomás, amely lehetővé teszi a nagy pontosságú színalkalmazást mind sík, mind görbült felületeken."}
            </p>

            <p className="text-[18px] text-[#555] leading-[1.8]">
              {language === 'en'
                ? "With these advanced techniques, Flair-Plastic can significantly enhance both the appearance and functionality of your products, including specialized items such as caps, closures, and various types of packaging."
                : "Ezekkel a fejlett technikákkal a Flair-Plastic jelentősen javíthatja termékei mind megjelenését, mind funkcionalitását, beleértve olyan speciális tételeket, mint a kupakok, záróelemek és különböző típusú csomagolások."}
            </p>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href={language === 'en' ? "/en/contact" : "/hu/kapcsolat"} 
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-medium transition-all group"
              >
                <span>
                  {language === 'en' ? "Discuss Your Finishing Requirements" : "Tárgyalja meg felületkezelési igényeit"}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SurfaceFinishingSection;
