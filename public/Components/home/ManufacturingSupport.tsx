import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const features = {
  en: [
    {
      title: 'Design Support',
      description: 'We can deliver total solutions from concept to execution with our expert design team. Benefit from our decades of experience in optimizing designs for manufacturability.',
      icon: '/icons/design-support.svg',
      color: '#4a6cf7'
    },
    {
      title: 'Innovation Labs',
      description: 'Our state-of-the-art innovation labs are equipped with cutting-edge technology to bring your designs to life with rapid prototyping and testing capabilities.',
      icon: '/icons/innovation-labs.svg',
      color: '#e44002'
    },
    {
      title: 'Production Transfer',
      description: 'Seamlessly relocate production with minimal disruption. Our specialized transfer teams ensure smooth transitions while maintaining quality and timelines.',
      icon: '/icons/production-transfer.svg',
      color: '#00b574'
    },
    {
      title: 'Our Process',
      description: 'A systematic approach to bringing your product to market efficiently. Our documented processes ensure consistency, quality, and timely delivery.',
      icon: '/icons/our-process.svg',
      color: '#ffb700'
    },
  ],
  hu: [
    {
      title: 'Tervezési támogatás',
      description: 'Teljes megoldásokat tudunk szállítani a koncepciótól a kivitelezésig szakértő tervezőcsapatunkkal. Profitáljon a gyárthatóság optimalizálásában szerzett évtizedes tapasztalatunkból.',
      icon: '/icons/design-support.svg',
      color: '#4a6cf7'
    },
    {
      title: 'Innovációs laboratóriumok',
      description: 'Csúcstechnológiás innovációs laboratóriumaink a legmodernebb technológiával vannak felszerelve, hogy életre keltsék a terveket gyors prototípuskészítési és tesztelési képességekkel.',
      icon: '/icons/innovation-labs.svg',
      color: '#e44002'
    },
    {
      title: 'Gyártás áthelyezése',
      description: 'Zökkenőmentesen helyezze át a gyártást minimális fennakadással. Szakosodott áthelyezési csapataink biztosítják a zökkenőmentes átmenetet a minőség és az ütemtervek fenntartása mellett.',
      icon: '/icons/production-transfer.svg',
      color: '#00b574'
    },
    {
      title: 'Folyamatunk',
      description: 'Szisztematikus megközelítés a termék hatékony piacra viteléhez. Dokumentált folyamataink biztosítják a következetességet, a minőséget és az időben történő szállítást.',
      icon: '/icons/our-process.svg',
      color: '#ffb700'
    },
  ],
};

const ManufacturingSupport = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Rotation transform based on mouse position
  const rotateY = useTransform(mouseX, [-1000, 1000], [5, -5]);
  const rotateX = useTransform(mouseY, [-1000, 1000], [-5, 5]);

  // Create an array of feature background patterns for visual interest
  const patterns = [
    `radial-gradient(circle at 10% 20%, rgba(74, 108, 247, 0.03) 0%, transparent 40%)`,
    `radial-gradient(circle at 90% 80%, rgba(228, 64, 2, 0.03) 0%, transparent 40%)`,
    `radial-gradient(circle at 80% 10%, rgba(0, 181, 116, 0.03) 0%, transparent 40%)`,
    `radial-gradient(circle at 20% 90%, rgba(255, 183, 0, 0.03) 0%, transparent 40%)`,
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-500/5 backdrop-blur-3xl"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: useTransform(mouseX, [-1000, 1000], [(index % 2 === 0 ? -20 : 20), (index % 2 === 0 ? 20 : -20)]),
            y: useTransform(mouseY, [-1000, 1000], [(index % 2 === 0 ? 20 : -20), (index % 2 === 0 ? -20 : 20)]),
            opacity: 0.2 + (Math.random() * 0.2),
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2 + (Math.random() * 0.2), 0.3 + (Math.random() * 0.2), 0.2 + (Math.random() * 0.2)],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content Container with depth effect */}
      <motion.div 
        className="w-full max-w-[1200px] mx-auto px-6 lg:px-8"
        style={{ 
          rotateX: isInView ? rotateX : 0,
          rotateY: isInView ? rotateY : 0,
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Header with premium effect */}
        <motion.div 
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 border border-blue-100 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00156A] mr-2"></div>
            <span className="text-sm font-medium text-[#00156A]">
              {language === 'en' ? 'Industry-Leading Support' : 'Iparágvezető támogatás'}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {language === 'en' ? (
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00156A] to-[#0041a1]">
                Manufacturing Support Excellence
              </span>
            ) : (
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00156A] to-[#0041a1]">
                Gyártási támogatási kiválóság
              </span>
            )}
          </motion.h2>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {language === 'en'
                ? 'With unmatched experience and expertise in precision injection moulding, Flair-Plastic offers comprehensive manufacturing support and total solutions throughout the supply chain.'
                : 'Páratlan tapasztalattal és szakértelemmel a precíziós fröccsöntés területén, a Flair-Plastic átfogó gyártási támogatást és teljes megoldásokat kínál az ellátási lánc egészében.'}
            </p>
          </motion.div>
        </motion.div>

        {/* 3D Feature Cards - Always showing content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features[language].map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 0.7, delay: 0.1 * (index + 4) }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="h-full relative overflow-hidden rounded-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                  rotateX: useTransform(mouseY, [-1000, 1000], [2, -2], { clamp: true }),
                  rotateY: useTransform(mouseX, [-1000, 1000], [-2, 2], { clamp: true }),
                }}
              >
                {/* Card with glass effect */}
                <div 
                  className="p-8 md:p-10 relative overflow-hidden h-full transition-all duration-300 border border-opacity-20 border-blue-200" 
                  style={{ 
                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85))`,
                    boxShadow: `0 10px 40px -10px rgba(0, 21, 106, 0.1), 0 3px 10px -3px rgba(0, 21, 106, 0.07)`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20" style={{ background: patterns[index % patterns.length] }}></div>
                  <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>

                  {/* Color accent at top */}
                  <div className="absolute top-0 left-0 w-full h-1.5 opacity-80" style={{ backgroundColor: feature.color }}></div>
                  
                  {/* Radial gradient glow on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`,
                    }}
                  ></motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with icon */}
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" 
                        style={{ 
                          backgroundColor: `${feature.color}15`,
                          border: `1px solid ${feature.color}30`
                        }}
                      >
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: feature.color }}></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-4 tracking-tight">{feature.title}</h3>
                    </div>
                    
                    {/* Description - Now always visible */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Learn more link */}
                    <div className="mt-auto">
                      <motion.a
                        href={`/services#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#00156A] group/link"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span>{language === 'en' ? 'Learn more' : 'Tudj meg többet'}</span>
                        <motion.span 
                          className="ml-2 inline-block"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ArrowUpRight size={16} className="text-current group-hover/link:text-[#00156A] transition-colors" />
                        </motion.span>
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 55%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 10%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)"
                    ],
                    backgroundPosition: ["200% 200%", "-150% -150%"]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Discover More - CTA button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <a 
            href="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all bg-[#00156A] text-white rounded-lg hover:bg-[#001d8a]"
          >
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <ChevronRight />
            </span>
            <span className="group-hover:pr-6 transition-all duration-300 ease">
              {language === 'en' ? 'Discover our full capabilities' : 'Fedezze fel teljes képességeinket'}
            </span>
            
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-100">
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  left: ["-100%", "100%"],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ManufacturingSupport;
