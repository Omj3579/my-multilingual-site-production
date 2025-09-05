import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Lightbulb, Target, ArrowUpRight } from 'lucide-react';

const ImageCardGrid = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const timelineCards = [
    {
      year: "1990",
      imgSrc: "https://flair-plastic.hu/wp-content/uploads/2024/05/5.jpg.webp",
      alt: language === 'en' ? "Foundation era materials" : "Alapítási korszak anyagai",
      title: language === 'en' ? "Foundation & Vision" : "Alapítás és Vízió",
      subtitle: language === 'en' ? "The Beginning" : "A Kezdet",
      description: language === 'en' 
        ? "Flair-Plastic was founded with a revolutionary vision to transform precision plastic manufacturing in Europe."
        : "A Flair-Plastic forradalmi vízióval alakult meg, hogy átalakítsa a precíziós műanyag gyártást Európában.",
      icon: Target,
      accent: "blue",
      size: "large"
    },
    {
      year: "2000s",
      imgSrc: "https://flair-plastic.hu/wp-content/uploads/2024/09/History2.png",
      alt: language === 'en' ? "Innovation era technology" : "Innovációs korszak technológiája",
      title: language === 'en' ? "Technology Revolution" : "Technológiai Forradalom", 
      subtitle: language === 'en' ? "Innovation Era" : "Innovációs Korszak",
      description: language === 'en'
        ? "Advanced injection molding technologies and automated quality control systems revolutionized our production capabilities."
        : "A fejlett fröccsöntő technológiák és automatizált minőségirányítási rendszerek forradalmasították termelési képességeinket.",
      icon: Lightbulb,
      accent: "purple",
      size: "medium"
    },
    {
      year: "2010s",
      imgSrc: "https://flair-plastic.hu/wp-content/uploads/2024/05/5.jpg.webp",
      alt: language === 'en' ? "Sustainability era" : "Fenntarthatósági korszak",
      title: language === 'en' ? "Sustainability Focus" : "Fenntarthatósági Fókusz",
      subtitle: language === 'en' ? "Green Transition" : "Zöld Átmenet", 
      description: language === 'en'
        ? "Pioneered eco-friendly manufacturing processes and implemented comprehensive environmental management systems."
        : "Úttörő környezetbarát gyártási folyamatokat és átfogó környezetirányítási rendszereket vezettünk be.",
      icon: Award,
      accent: "green",
      size: "medium"
    },
    {
      year: "2020+",
      imgSrc: "https://flair-plastic.hu/wp-content/uploads/2024/09/History2.png",
      alt: language === 'en' ? "Modern era excellence" : "Modern korszak kiválósága",
      title: language === 'en' ? "Industry Leadership" : "Ipari Vezetés",
      subtitle: language === 'en' ? "Excellence Era" : "Kiválósági Korszak",
      description: language === 'en'
        ? "Established as Europe's leading precision manufacturer with cutting-edge Industry 4.0 capabilities and sustainable practices."
        : "Európa vezető precíziós gyártójaként etablálódott élvonalbeli Ipar 4.0 képességekkel és fenntartható gyakorlatokkal.",
      icon: Calendar,
      accent: "orange",
      size: "large"
    }
  ];

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 30);
    mouseY.set(y / 30);
  };

  const accentColors = {
    blue: {
      bg: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-200/50",
      text: "text-blue-600",
      glow: "shadow-blue-500/25"
    },
    purple: {
      bg: "from-purple-500/20 to-pink-500/10", 
      border: "border-purple-200/50",
      text: "text-purple-600",
      glow: "shadow-purple-500/25"
    },
    green: {
      bg: "from-green-500/20 to-emerald-500/10",
      border: "border-green-200/50", 
      text: "text-green-600",
      glow: "shadow-green-500/25"
    },
    orange: {
      bg: "from-orange-500/20 to-red-500/10",
      border: "border-orange-200/50",
      text: "text-orange-600", 
      glow: "shadow-orange-500/25"
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 md:px-20 py-20 md:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto mb-20 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-flex items-center px-6 py-3 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 animate-pulse"></div>
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'en' ? 'Evolution Timeline' : 'Evolúciós Idővonal'}
          </span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
          {language === 'en' 
            ? 'Journey Through Decades' 
            : 'Utazás Az Évtizedeken Át'}
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'Discover the pivotal moments, breakthrough innovations, and visionary milestones that shaped our path to industry leadership.'
            : 'Fedezze fel azokat a kulcsfontosságú pillanatokat, áttörő innovációkat és jövőbe tekintő mérföldköveket, amelyek formálták utunkat az iparági vezetésig.'}
        </p>
      </motion.div>

      {/* Advanced Masonry Timeline Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {timelineCards.map((card, index) => {
            const colors = accentColors[card.accent];
            const isLarge = card.size === "large";
            
            return (
              <motion.div
                key={index}
                className={`group relative ${isLarge ? 'md:col-span-2 lg:row-span-2' : ''}`}
                style={{
                  perspective: "1000px",
                }}
                initial={{ opacity: 0, y: 100, rotateX: -10 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 100,
                  rotateX: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className={`relative w-full ${isLarge ? 'h-[500px] lg:h-[600px]' : 'h-[350px]'} rounded-3xl overflow-hidden backdrop-blur-sm border ${colors.border} shadow-2xl ${colors.glow}`}
                  style={{
                    background: `linear-gradient(135deg, ${colors.bg})`,
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Timeline Year Badge */}
                  <motion.div 
                    className={`absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl border ${colors.border} shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className={`text-sm font-bold ${colors.text}`}>{card.year}</span>
                  </motion.div>

                  {/* Image with Advanced Effects */}
                  <div className="relative w-full h-full overflow-hidden">
                    <motion.img
                      src={card.imgSrc}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      style={{
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Gradient Overlays */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20`}></div>
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-20`}
                      animate={{ opacity: hoveredCard === index ? 0.4 : 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content Overlay with Glassmorphism */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl"
                      style={{
                        y: useTransform(mouseY, [-100, 100], [-10, 10]),
                        x: useTransform(mouseX, [-100, 100], [-5, 5]),
                      }}
                    >
                      {/* Icon */}
                      <motion.div 
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mb-4 ${colors.text}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <card.icon size={24} />
                      </motion.div>

                      {/* Subtitle */}
                      <motion.p 
                        className="text-white/80 text-sm font-medium mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {card.subtitle}
                      </motion.p>

                      {/* Title */}
                      <motion.h3 
                        className={`text-white font-bold mb-3 ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {card.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className={`text-white/90 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {card.description}
                      </motion.p>

                      {/* Explore Button */}
                      <motion.div
                        className="flex items-center mt-4 text-white/80 hover:text-white transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-sm font-medium mr-2">
                          {language === 'en' ? 'Explore Era' : 'Korszak Felfedezése'}
                        </span>
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Animated Shine Effect */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                          backgroundSize: "200% 200%",
                        }}
                        animate={{
                          backgroundPosition: ["200% 200%", "-200% -200%"]
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageCardGrid;

