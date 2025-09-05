import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  // Keeping your original props for compatibility
  moveUp?: number;
  moveDown?: number;
  moveLeft?: number;
  moveRight?: number;
  topSpacing?: number;
  bottomSpacing?: number;
  dividerSpacing?: number;
  sectionHeight?: string;
  zIndex?: string | number;
  contentPushDown?: number;
  textOffsetY?: number;
  textOffsetX?: number;
  bulletOffsetY?: number;
  bulletOffsetX?: number;
  firstDividerOffsetY?: number;
  firstDividerOffsetX?: number;
  paragraphOffset2Y?: number;
  paragraphOffset2X?: number;
  secondDividerOffsetY?: number;
  secondDividerOffsetX?: number;
}

const defaultProps: Partial<Props> = {
  moveUp: 100,
  moveDown: 0,
  moveLeft: 0,
  moveRight: 0,
  topSpacing: 60,
  bottomSpacing: 120, // Increased for more visual breathing room
  dividerSpacing: 40,
  sectionHeight: 'auto',
  zIndex: 'auto',
  contentPushDown: 120,
  // Other defaults remain the same
};

// Feature cards data with icons
const featureCardsEn = [
  {
    title: "Multi-Component Injection",
    icon: "💠",
    description: "Combining different materials in a single molding cycle for complex parts with enhanced properties."
  },
  {
    title: "In-Mold Decoration",
    icon: "🎨",
    description: "Advanced techniques to incorporate graphics, textures, and patterns directly during the molding process."
  },
  {
    title: "Precision Engineering",
    icon: "⚙️",
    description: "Ultra-tight tolerances and consistency across high-volume production runs with detailed quality control."
  },
  {
    title: "Material Innovation",
    icon: "🔬",
    description: "Working with cutting-edge polymers, bio-plastics, and specialty compounds for optimal performance."
  }
];

const featureCardsHu = [
  {
    title: "Többkomponensű Fröccsöntés",
    icon: "💠",
    description: "Különböző anyagok kombinálása egyetlen fröccsöntési ciklusban komplex, továbbfejlesztett tulajdonságokkal rendelkező alkatrészekhez."
  },
  {
    title: "Szerszámon Belüli Dekoráció",
    icon: "🎨",
    description: "Fejlett technikák grafikák, textúrák és minták közvetlen beépítésére a fröccsöntési folyamat során."
  },
  {
    title: "Precíziós Mérnöki Munka",
    icon: "⚙️",
    description: "Ultra-szigorú tűrések és következetesség a nagy volumenű gyártási sorozatoknál részletes minőségellenőrzéssel."
  },
  {
    title: "Anyaginnovációk",
    icon: "🔬",
    description: "Élvonalbeli polimerek, bio-műanyagok és speciális vegyületek alkalmazása az optimális teljesítmény érdekében."
  }
];

// Process steps data
const processStepsEn = [
  { step: "01", title: "Design & Engineering", description: "Collaborative design optimization for manufacturability." },
  { step: "02", title: "Prototyping", description: "Rapid prototyping to validate design and material selection." },
  { step: "03", title: "Tooling", description: "Precision mold creation with advanced CNC technology." },
  { step: "04", title: "Production", description: "Automated high-volume manufacturing with robotic assistance." },
  { step: "05", title: "Quality Assurance", description: "Comprehensive testing and inspection protocols." }
];

const processStepsHu = [
  { step: "01", title: "Tervezés & Mérnöki munka", description: "Együttműködő tervezési optimalizálás a gyárthatóság érdekében." },
  { step: "02", title: "Prototípuskészítés", description: "Gyors prototípuskészítés a tervezés és anyagválasztás validálására." },
  { step: "03", title: "Szerszámkészítés", description: "Precíziós szerszámkészítés fejlett CNC technológiával." },
  { step: "04", title: "Gyártás", description: "Automatizált nagy volumenű gyártás robotos támogatással." },
  { step: "05", title: "Minőségbiztosítás", description: "Átfogó tesztelési és ellenőrzési protokollok." }
];

const InjectionMouldingDetails: React.FC<Props> = (props) => {
  const { language } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Mouse position for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse movements
  const springConfig = { stiffness: 50, damping: 10 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Parallax effect values derived from mouse position
  const parallaxX = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);
  const lightAngleX = useTransform(smoothMouseX, [-1, 1], [15, -15]);
  const lightAngleY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized mouse position relative to viewport center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  
  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + (i * 0.15),
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };
  
  const slideUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };
  
  // Feature cards rendering based on language
  const featureCards = language === 'en' ? featureCardsEn : featureCardsHu;
  const processSteps = language === 'en' ? processStepsEn : processStepsHu;

  return (
    <div
      className="w-full text-[#333] font-sans"
      style={{
        marginTop: `-${props.moveUp}px`,
        marginBottom: `${props.moveDown}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={ref}
    >
      {/* Advanced gradient background with mesh effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f7fa] to-[#e8eef5] -z-10">
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}
        } />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Large soft gradient blobs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-200/30 via-indigo-200/20 to-blue-100/10 blur-[80px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ top: '-10%', left: '-5%' }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-amber-100/10 via-orange-100/20 to-amber-50/30 blur-[100px]"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ bottom: '-20%', right: '-10%' }}
        />
        
        {/* Smaller interactive elements that react to mouse position */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-cyan-100/40 blur-2xl"
          style={{ 
            top: '30%', 
            left: '15%',
            x: parallaxX,
            y: parallaxY,
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-purple-100/30 blur-3xl"
          style={{ 
            bottom: '25%', 
            right: '20%',
            x: useTransform(smoothMouseX, [-1, 1], [15, -15]),
            y: useTransform(smoothMouseY, [-1, 1], [15, -15]),
          }}
        />
      </div>

      <div className="relative z-10 pt-[180px] pb-20">
        {/* Main content container */}
        <motion.div
          className="mx-auto max-w-[1220px] px-5 md:px-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section header */}
          <motion.div 
            className="text-center mb-14"
            variants={slideUpVariants}
          >
            <span className="block text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3">
              {language === 'en' ? "Technology Capabilities" : "Technológiai Képességek"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              {language === 'en' ? "Advanced Injection Molding" : "Fejlett Fröccsöntés"}
            </h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>
          
          {/* Introduction paragraph */}
          <motion.div
            className="mb-16 max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'en'
                ? "At Flair-Plastic, we combine advanced technology with decades of expertise to deliver exceptional plastic injection molding solutions. Our state-of-the-art facilities and dedication to precision engineering ensure that every product meets the highest standards of quality and performance."
                : "A Flair-Plastic-nél fejlett technológiát ötvözünk évtizedes szakértelemmel, hogy kivételes műanyag fröccsöntési megoldásokat nyújtsunk. Csúcstechnológiás létesítményeink és a precíziós mérnöki munkánk iránti elkötelezettségünk biztosítja, hogy minden termék megfeleljen a minőség és teljesítmény legmagasabb színvonalának."}
            </p>
          </motion.div>
          
          {/* Feature cards with 3D effect */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
          >
            {featureCards.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 group relative overflow-hidden"
                style={{ perspective: "800px" }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 16px 30px rgba(0,0,0,0.1)",
                  y: -5
                }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon with hover effect */}
                  <motion.div 
                    className="text-4xl mb-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center shadow-sm"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  
                  {/* Card corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-blue-100/50 border-l-[40px] border-l-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Divider with animation */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"
            variants={dividerVariants}
          />
          
          {/* Process timeline section */}
          <motion.div className="my-16" variants={containerVariants}>
            <motion.h3 
              className="text-2xl font-bold text-center mb-10 text-gray-800"
              variants={itemVariants}
            >
              {language === 'en' ? "Our Process" : "Folyamatunk"}
            </motion.h3>
            
            <div className="relative">
              {/* Timeline center line */}
              <motion.div 
                className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-200 via-gray-300 to-blue-200 hidden md:block"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              
              {/* Timeline steps */}
              <div className="space-y-10 md:space-y-0">
                {processSteps.map((step, i) => (
                  <motion.div 
                    key={i}
                    custom={i}
                    variants={stepVariants}
                    className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:gap-10`}
                  >
                    {/* Step number/icon */}
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {step.step}
                    </motion.div>
                    
                    {/* Step content */}
                    <motion.div 
                      className={`bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 max-w-md w-full mt-4 md:mt-0 ${
                        i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                      }}
                    >
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Second divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"
            variants={dividerVariants}
          />
          
          {/* Detail paragraphs section */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-white/20"
              style={{ 
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${lightAngleY}deg) rotateY(${lightAngleX}deg)`,
              }}
              variants={itemVariants}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/80 to-white/0 rounded-2xl pointer-events-none" />
              
              <motion.h3 
                className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800"
                variants={itemVariants}
              >
                {language === 'en' ? "Technical Expertise" : "Műszaki Szaktudás"}
              </motion.h3>
              
              <motion.div className="space-y-6 text-gray-700 relative z-10">
                <motion.p variants={itemVariants}>
                  {language === 'en'
                    ? "Our injection molding process utilizes cutting-edge machinery and robotics to ensure consistency and efficiency across production runs. With capacity ranging from small precision components to large-scale manufacturing, we tailor our approach to meet your specific needs while maintaining exceptional quality standards throughout the production lifecycle."
                    : "Fröccsöntési folyamatunk csúcstechnológiás gépeket és robotikát használ a gyártási futások során a konzisztencia és hatékonyság biztosítására. A kis precíziós alkatrészektől a nagyszabású gyártásig terjedő kapacitással, megközelítésünket az Ön egyedi igényeinek megfelelően alakítjuk, miközben kivételes minőségi normákat tartunk fenn a teljes gyártási életciklus során."}
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  {language === 'en'
                    ? "Beyond standard injection molding, Flair-Plastic excels in specialized techniques including multi-shot injection, overmolding, and gas-assisted molding. Our engineering team collaborates closely with clients from concept to production, offering material selection guidance, design optimization, and prototyping services to ensure your product achieves optimal performance and cost-efficiency."
                    : "A standard fröccsöntésen túl a Flair-Plastic kiváló specializált technikákban, beleértve a többkomponensű fröccsöntést, a túlfröccsöntést és a gázsegítéses fröccsöntést. Mérnöki csapatunk szorosan együttműködik az ügyfelekkel a koncepciótól a gyártásig, anyagválasztási útmutatást, tervezési optimalizálást és prototípuskészítési szolgáltatásokat kínálva, hogy terméke optimális teljesítményt és költséghatékonyságot érjen el."}
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Call to action button */}
            <motion.div 
              className="mt-12 text-center"
              variants={slideUpVariants}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full overflow-hidden relative group"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />
                
                {/* Button content */}
                <span className="relative z-10 mr-2">
                  {language === 'en' ? 'Request a Consultation' : 'Kérjen konzultációt'}
                </span>
                <motion.svg 
                  className="relative z-10 w-5 h-5" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Set default props
InjectionMouldingDetails.defaultProps = defaultProps;

export default InjectionMouldingDetails;
