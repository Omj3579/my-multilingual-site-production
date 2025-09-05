import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ArrowRight, Play, Sparkles } from 'lucide-react';

export const IMLExperienceSection = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  
  const [headingRef, headingInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [textRef, textInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 100 
  });
  
  // Parallax effects
  const textY = useTransform(smoothProgress, [0, 0.5], [100, 0]);
  const headingY = useTransform(smoothProgress, [0, 0.3], [50, -30]);
  const imageY = useTransform(smoothProgress, [0.3, 0.8], [0, -100]);
  const bottomImageY = useTransform(smoothProgress, [0.6, 1], [100, 0]);
  
  // Image scale and rotation
  const imageScale = useTransform(smoothProgress, [0.3, 0.6], [0.95, 1.05]);
  const imageRotate = useTransform(smoothProgress, [0.3, 0.6], [1, -1]);
  
  // Content tabs data
  const tabContent = language === 'en' ? [
    {
      title: "Integration Technology",
      content: "At Flair-Plastic, we employ a unique technique to integrate labels directly into injection-moulded products via in-mould labelling (IML). This method embeds logos, decorations, and product information into plastic products for a seamless finish."
    },
    {
      title: "Enhanced Properties",
      content: "We go beyond conventional applications of IML, using it to also enhance your product's physical properties. Our advanced facilities allow us to incorporate features like oxygen scavenging directly into your packaging, extending product lifespan."
    },
    {
      title: "Anti-bacterial Innovation",
      content: "Our process ensures each product is anti-bacterial, making it ideal for food retail packaging. This added layer of protection is seamlessly integrated within the manufacturing process with no additional steps required."
    }
  ] : [
    {
      title: "Integrációs technológia",
      content: "A Flair-Plasticnál egyedi technikát alkalmazunk a címkék közvetlen integrálására a fröccsöntött termékekbe a szerszámon belüli címkézés (IML) révén. Ez a módszer a logókat, dekorációkat és termékinformációkat beágyazza a műanyag termékekbe a tökéletes felületért."
    },
    {
      title: "Továbbfejlesztett tulajdonságok",
      content: "Túllépünk az IML hagyományos alkalmazásain, és a termék fizikai tulajdonságainak javítására is használjuk. Fejlett létesítményeink lehetővé teszik, hogy olyan tulajdonságokat építsünk be, mint az oxigénmegkötés, így meghosszabbítva a termékek élettartamát."
    },
    {
      title: "Antibakteriális innováció",
      content: "Folyamatunk biztosítja, hogy minden termék antibakteriális legyen, így ideális az élelmiszer-kiskereskedelmi csomagoláshoz. Ez a további védelmi réteg zökkenőmentesen integrálódik a gyártási folyamatba, további lépések nélkül."
    }
  ];

  // Statistics data
  const stats = language === 'en' ? [
    { value: "50M+", label: "IML products annually" },
    { value: "99.8%", label: "Quality accuracy" },
    { value: "0.01mm", label: "Precision tolerance" }
  ] : [
    { value: "50M+", label: "IML termék évente" },
    { value: "99.8%", label: "Minőségi pontosság" },
    { value: "0.01mm", label: "Precíziós tűrés" }
  ];

  return (
    <div className="relative overflow-hidden font-[Poppins]" ref={containerRef}>
      {/* Top gradient background */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-[#f0f2f5] to-[#e8eaed] z-0" />
      
      {/* Background pattern and decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Technical pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Decorative circles */}
        <div className="absolute top-40 left-12 w-40 h-40 rounded-full border border-blue-200/30 opacity-50" />
        <div className="absolute bottom-60 right-20 w-24 h-24 rounded-full border border-blue-300/20 opacity-50" />
        
        {/* Animated gradient blobs */}
        <motion.div 
          className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/20 via-indigo-100/15 to-transparent blur-[120px] opacity-60"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-32">
        {/* Section header with enhanced typography */}
        <motion.div 
          ref={headingRef}
          className="mb-16 text-left max-w-3xl"
          style={{ y: headingY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 30 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 text-blue-600 mb-4"
          >
            <span className="w-8 h-[2px] bg-blue-500" />
            <span className="uppercase tracking-wider text-sm font-medium">
              {language === 'en' ? 'Advanced Technology' : 'Fejlett technológia'}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[42px] font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 40 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {language === 'en' ? (
              <>
                <span className="text-[#222]">Elevating</span>{" "}
                Product Design{" "}
                <span className="text-[#222] relative">
                  Through In–Mold Labeling
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[3px] bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: headingInView ? '100%' : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </>
            ) : (
              <>
                <span className="text-[#222]">Termékek</span>{" "}
                tervezésének{" "}
                <span className="text-[#222] relative">
                  fejlesztése szerszámon belüli címkézéssel
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[3px] bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: headingInView ? '100%' : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </>
            )}
          </motion.h2>
        </motion.div>
        
        {/* Interactive tabs section */}
        <motion.div 
          ref={textRef}
          className="mb-32"
          style={{ y: textY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Tab navigation */}
            <div className="lg:col-span-4">
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: textInView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {tabContent.map((tab, index) => (
                  <motion.button
                    key={index}
                    className={`px-6 py-4 text-left rounded-lg transition-all ${
                      activeTab === index 
                        ? "bg-white shadow-lg border-l-4 border-blue-500" 
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab(index)}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: textInView ? 0 : -30, opacity: textInView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                    whileHover={{ x: activeTab === index ? 0 : 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${activeTab === index ? "text-blue-700" : "text-gray-700"}`}>
                        {tab.title}
                      </span>
                      {activeTab === index && (
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>
            
            {/* Tab content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {tabContent[activeTab].title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {tabContent[activeTab].content}
                    </p>
                    <div className="mt-auto">
                      <motion.a
                        href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
                        className="inline-flex items-center text-blue-600 font-medium group"
                        whileHover={{ x: 5 }}
                      >
                        {language === 'en' ? 'Learn more' : 'További információ'} 
                        <motion.span
                          initial={{ x: 0 }}
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.span>
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Featured image section with 3D effect */}
        <motion.div 
          ref={imageRef}
          className="relative z-20 my-20 -mx-6 md:mx-0"
          style={{ y: imageY }}
        >
          <motion.div
            className="relative w-full rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl transform-gpu bg-white"
            style={{
              scale: imageScale,
              rotate: imageRotate,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Video overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30 z-10 mix-blend-multiply"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageInView ? 0.4 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            {/* Play button */}
            <motion.button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: imageInView ? 1 : 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-6 w-6 md:h-8 md:w-8 text-blue-600 ml-1" />
              
              {/* Animated ring around play button */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
            
            {/* Main feature image */}
            <img
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/dec6525.png.webp"
              alt={language === 'en' ? "IML Candy Showcase" : "IML Édesség Bemutató"}
              className="w-full h-auto object-cover"
            />
            
            {/* Image caption */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-6 px-8 z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-1">
                    {language === 'en' ? 'Premium IML Products' : 'Prémium IML termékek'}
                  </h4>
                  <p className="text-sm md:text-base text-gray-200">
                    {language === 'en' ? 'Witness our precision engineering in action' : 'Tekintse meg precíziós mérnöki munkánkat működés közben'}
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm inline-flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Featured Technology' : 'Kiemelt technológia'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Video modal */}
          <AnimatePresence>
            {showVideo && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowVideo(false)}
              >
                <motion.div
                  className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full"
                    onClick={() => setShowVideo(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* IML Mastery section with stats */}
        <div className="pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content column */}
            <motion.div 
              className="lg:col-span-7 xl:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 30 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'en' ? (
                  <>Flair-Plastic's <span className="text-blue-600">Mastery</span> of IML</>
                ) : (
                  <>A Flair-Plastic <span className="text-blue-600">szakértelme</span> az IML-ben</>
                )}
              </h3>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                {language === 'en'
                  ? "Annually producing over 50 million IML injection-moulded vessels and covers, Flair-Plastic leverages profound experience and specialized expertise in the field. Our state-of-the-art automation systems, developed over years of innovation, enhance both speed and efficiency while maintaining cost-effectiveness."
                  : "A Flair-Plastic évente több mint 50 millió IML fröccsöntött edényt és fedelet gyárt, kihasználva a területen szerzett mély tapasztalatait és speciális szakértelmét. Az évek során kifejlesztett csúcstechnológiás automatizálási rendszereink növelik mind a sebességet, mind a hatékonyságot, miközben fenntartják a költséghatékonyságot."}
              </p>
              
              <motion.a
                href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'} 
                className="inline-flex items-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>
                  {language === 'en' ? 'Get in touch' : 'Kapcsolatfelvétel'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
            
            {/* Stats column */}
            <div className="lg:col-span-5 xl:col-span-4" ref={statsRef}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.2) }}
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-gray-800"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: statsInView ? 1 : 0.5 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: 0.3 + (i * 0.2) 
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Final image section with improved visibility - updated */}
        <motion.div 
          className="mt-32 -mx-6 md:-mx-8 relative h-[500px] overflow-hidden"
          style={{ y: bottomImageY }}
        >
          {/* Full-width image - now with stronger overlay for text visibility */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://flair-plastic.hu/wp-content/uploads/2024/05/decoration-1.png')" 
            }}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Enhanced gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
          </motion.div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
            <motion.div 
              className="max-w-xl text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h4 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'en' 
                  ? "Redefining Packaging Excellence" 
                  : "A csomagolási kiválóság újradefiniálása"}
              </h4>
              <p className="text-lg text-white/90 mb-6">
                {language === 'en'
                  ? "Our IML technology combines art and science to create products that stand out on the shelf and perform beyond expectations."
                  : "IML technológiánk kombinálja a művészetet és a tudományt, hogy olyan termékeket hozzon létre, amelyek kitűnnek a polcokon és felülmúlják az elvárásokat."}
              </p>
              <motion.a
                href={language === 'en' ? '/en/portfolio' : '/hu/portfolio'}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'en' ? 'View our portfolio' : 'Portfólió megtekintése'}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Replace both components with this single enhanced one
export { IMLExperienceSection as IMLSection };
export { IMLExperienceSection as FullWidthImageDivider };