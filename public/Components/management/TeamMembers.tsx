import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

// Org chart connection lines component
const ConnectionLines = ({ members, activeIndex, highlightedDepartment }) => {
  return (
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible" 
      style={{ minHeight: '1200px' }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFAB77" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0b2878" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3 3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* CEO to department heads connections */}
      <motion.path 
        d="M 50% 420 V 480 H 25% V 520" 
        fill="none" 
        stroke={highlightedDepartment === 'finance' ? "#4a7feb" : "url(#lineGradient)"} 
        strokeWidth={highlightedDepartment === 'finance' || activeIndex === 0 || activeIndex === null ? "1.5" : "0.5"} 
        strokeDasharray={highlightedDepartment === 'finance' || activeIndex === 0 ? "0" : "5,5"}
        filter={highlightedDepartment === 'finance' || activeIndex === 0 ? "url(#glow)" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <motion.path 
        d="M 50% 420 V 480 H 50% V 520" 
        fill="none" 
        stroke={highlightedDepartment === 'hr' ? "#e84a7f" : "url(#lineGradient)"} 
        strokeWidth={highlightedDepartment === 'hr' || activeIndex === 1 || activeIndex === null ? "1.5" : "0.5"}
        strokeDasharray={highlightedDepartment === 'hr' || activeIndex === 1 ? "0" : "5,5"}
        filter={highlightedDepartment === 'hr' || activeIndex === 1 ? "url(#glow)" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      
      <motion.path 
        d="M 50% 420 V 480 H 75% V 520" 
        fill="none" 
        stroke={highlightedDepartment === 'production' ? "#47c9b3" : "url(#lineGradient)"} 
        strokeWidth={highlightedDepartment === 'production' || activeIndex === 2 || activeIndex === null ? "1.5" : "0.5"}
        strokeDasharray={highlightedDepartment === 'production' || activeIndex === 2 ? "0" : "5,5"}
        filter={highlightedDepartment === 'production' || activeIndex === 2 ? "url(#glow)" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
      
      {/* Sub-department connections */}
      <motion.path 
        d="M 75% 660 V 700 H 62.5% V 740" 
        fill="none" 
        stroke={highlightedDepartment === 'sales' ? "#f7aa3b" : "url(#lineGradient)"} 
        strokeWidth={highlightedDepartment === 'sales' || activeIndex === 3 || activeIndex === null ? "1.5" : "0.5"}
        strokeDasharray={highlightedDepartment === 'sales' || activeIndex === 3 ? "0" : "5,5"}
        filter={highlightedDepartment === 'sales' || activeIndex === 3 ? "url(#glow)" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />
      
      <motion.path 
        d="M 75% 660 V 700 H 87.5% V 740" 
        fill="none" 
        stroke={highlightedDepartment === 'technology' ? "#43b05c" : "url(#lineGradient)"} 
        strokeWidth={highlightedDepartment === 'technology' || activeIndex === 5 || activeIndex === null ? "1.5" : "0.5"}
        strokeDasharray={highlightedDepartment === 'technology' || activeIndex === 5 ? "0" : "5,5"}
        filter={highlightedDepartment === 'technology' || activeIndex === 5 ? "url(#glow)" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      
      <motion.path 
        d="M 25% 660 V 700 H 37.5% V 740" 
        fill="none" 
        stroke={highlightedDepartment === 'logistics' ? "#9567e8" : "url(#lineGradient)"} 
        strokeWidth={highlightedDepartment === 'logistics' || activeIndex === 4 || activeIndex === null ? "1.5" : "0.5"}
        strokeDasharray={highlightedDepartment === 'logistics' || activeIndex === 4 ? "0" : "5,5"}
        filter={highlightedDepartment === 'logistics' || activeIndex === 4 ? "url(#glow)" : "none"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </svg>
  );
};

// Position indicator component with animation
const DepartmentIndicator = ({ isActive, color, name, language }) => {
  return (
    <motion.div 
      className={`absolute top-1 left-1 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium`}
      style={{ 
        background: `${color}20`,
        border: `1px solid ${color}40`,
        color: color
      }}
      initial={{ opacity: 0, scale: 0.8, x: -10 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        scale: isActive ? 1 : 0.8,
        x: isActive ? 0 : -10
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
        animate={{ 
          opacity: [0.6, 1, 0.6],
          scale: [0.8, 1, 0.8]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span>
        {language === 'en' 
          ? name === 'finance' ? 'Finance'
            : name === 'hr' ? 'Human Resources'
            : name === 'production' ? 'Production'
            : name === 'sales' ? 'Sales'
            : name === 'logistics' ? 'Logistics'
            : 'Technology'
          : name === 'finance' ? 'Pénzügy'
            : name === 'hr' ? 'Humán erőforrás'
            : name === 'production' ? 'Gyártás'
            : name === 'sales' ? 'Értékesítés'
            : name === 'logistics' ? 'Logisztika'
            : 'Technológia'
        }
      </span>
    </motion.div>
  );
};

// Team member card component
const OrgChartCard = ({ member, index, level, isInView, mouseX, mouseY, active, setActive, highlightedDepartment, setHighlightedDepartment }) => {
  // Dynamic 3D rotation based on mouse position
  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);
  
  // Determine if this card should be highlighted based on department
  const isHighlighted = highlightedDepartment === null || 
    (member.department === highlightedDepartment) ||
    (member.department === 'ceo') || // CEO is always highlighted
    (member.relatedDepartments && member.relatedDepartments.includes(highlightedDepartment));
  
  return (
    <motion.div 
      className={`relative ${level === 0 ? 'w-[350px] h-[380px]' : 'w-full h-[350px]'} mx-auto`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: isInView ? (isHighlighted ? 1 : 0.4) : 0, 
        y: isInView ? 0 : 40,
        scale: isHighlighted ? 1 : 0.95
      }}
      transition={{ 
        duration: 0.7, 
        delay: 0.1 + index * 0.05,
        scale: { duration: 0.3 }
      }}
    >
      {/* Department indicator for non-CEO cards */}
      {member.department !== 'ceo' && (
        <DepartmentIndicator 
          isActive={active || highlightedDepartment === member.department}
          color={member.color}
          name={member.department}
          language={member.language}
        />
      )}

      {/* Card container */}
      <motion.div
        className="relative h-full w-full cursor-pointer group"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transform: `${active ? 'scale(1.03)' : 'scale(1)'}`,
          transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
        }}
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.3, ease: "easeOut" } 
        }}
        onClick={() => {
          setActive();
          setHighlightedDepartment(highlightedDepartment === member.department ? null : member.department);
        }}
      >
        {/* Card body */}
        <motion.div
          className={`relative h-full w-full rounded-xl overflow-hidden flex flex-col shadow-xl`}
          style={{
            transformStyle: "preserve-3d",
            background: `linear-gradient(165deg, ${member.color}10, ${member.color}05)`,
            border: `1px solid ${member.color}30`,
            boxShadow: active 
              ? `0 10px 30px -5px ${member.color}30, 0 0 10px ${member.color}20` 
              : '0 10px 30px -10px rgba(0,0,0,0.1)',
            rotateX,
            rotateY,
          }}
        >
          {/* Card border glow effect */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{ 
              background: `linear-gradient(140deg, ${member.color}30, transparent 60%)`,
              filter: 'blur(20px)'
            }}
            animate={active ? { opacity: [0.3, 0.6, 0.3] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Image section */}
          <div className="relative pt-4 flex justify-center items-start">
            {/* CEO special badge */}
            {member.department === 'ceo' && (
              <motion.div 
                className="absolute top-1 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  background: 'linear-gradient(to right, #FFAB77, #e57b48)',
                  color: 'white'
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {member.language === 'en' ? 'CEO' : 'Vezérigazgató'}
              </motion.div>
            )}
            
            {/* Avatar circle with border */}
            <motion.div 
              className={`relative ${level === 0 ? 'w-44 h-44' : 'w-32 h-32'} rounded-full overflow-hidden border-4`}
              style={{ 
                borderColor: `${member.color}60`,
                transformStyle: "preserve-3d",
                transform: "translateZ(20px)"
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${member.color}40, transparent 70%)`,
                  filter: 'blur(15px)'
                }}
                animate={{
                  opacity: active ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Person photo */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover object-top z-10"
              />
              
              {/* Interactive pulse effect */}
              {active && (
                <motion.div 
                  className="absolute inset-0 z-20 border-4 rounded-full"
                  style={{ borderColor: member.color }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          </div>
          
          {/* Content section */}
          <div className="flex-grow flex flex-col items-center px-6 py-4 text-center">
            {/* Animated accent line */}
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-transparent via-current to-transparent mb-3"
              style={{ color: member.color }}
              initial={{ width: 0 }}
              animate={{ width: active ? 100 : 60 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Name and title */}
            <motion.h3 
              className={`font-bold mb-1 ${level === 0 ? 'text-xl' : 'text-lg'}`}
              style={{ 
                color: '#333',
                transform: "translateZ(25px)",
                textShadow: active ? `0 0 10px ${member.color}20` : 'none'
              }}
            >
              {member.name}
            </motion.h3>
            
            <motion.p 
              className="font-medium text-sm mb-3"
              style={{ 
                color: member.color,
                transform: "translateZ(20px)"
              }}
            >
              {member.title}
            </motion.p>
            
            {/* Bio with animated reveal */}
            <motion.div 
              className="relative overflow-hidden"
              style={{ height: active ? 'auto' : '2.5rem' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-xs leading-relaxed">
                {member.bio}
              </p>
              
              {/* Gradient fade for non-active cards */}
              {!active && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"
                  style={{ transform: "translateZ(15px)" }}
                />
              )}
            </motion.div>
          </div>
          
          {/* Bottom connector element */}
          {level < 2 && (
            <motion.div 
              className="absolute -bottom-3 left-1/2 w-6 h-6 -ml-3 rounded-full border-2"
              style={{ 
                background: 'white',
                borderColor: member.color,
                transform: "translateZ(15px)",
                boxShadow: `0 0 10px ${member.color}40`
              }}
              animate={{ 
                y: [0, -5, 0],
                opacity: highlightedDepartment === null || highlightedDepartment === member.department ? 1 : 0.3 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute inset-1 rounded-full"
                style={{ background: member.color }}
                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main component
const TeamMembers = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = true; // Force visibility for testing
  
  const [activeIndex, setActiveIndex] = useState(null);
  const [highlightedDepartment, setHighlightedDepartment] = useState(null);
  
  // Client-side only state
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 15);
    mouseY.set(y / 15);
  };

  // Initialize client-side effects
  useEffect(() => {
    setIsMounted(true);
    
    // Generate background particles on client-side only
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: i % 5 === 0 ? '#FFAB77' : 
             i % 5 === 1 ? '#4a7feb' : 
             i % 5 === 2 ? '#e84a7f' : 
             i % 5 === 3 ? '#47c9b3' : '#9567e8',
      duration: Math.random() * 50 + 50,
      delay: Math.random() * 20
    }));
    
    setParticles(newParticles);
  }, []);

  // Enhanced team data with department information
  const teamData = [
    {
      name: language === 'en' ? 'Peter Jekő' : 'Jekő Péter',
      title: language === 'en' ? 'Chief Executive Officer' : 'Vezérigazgató',
      department: 'ceo',
      relatedDepartments: ['finance', 'hr', 'production', 'sales', 'logistics', 'technology'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/J.Peter_-768x899.png',
      bio: language === 'en' 
        ? 'Peter leads Flair-Plastic with a strategic vision, overseeing all departments and guiding our company toward continuous innovation and market expansion.'
        : 'Péter stratégiai jövőképpel vezeti a Flair-Plastic-et, felügyeli az összes osztályt, és folyamatos innováció és piaci terjeszkedés felé irányítja vállalatunkat.',
      color: '#FFAB77',
      language
    },
    {
      name: language === 'en' ? 'Mónika Miklósné Bertók' : 'Miklósné Bertók Mónika',
      title: language === 'en' ? 'Chief Financial Officer' : 'Pénzügyi igazgató',
      department: 'finance',
      relatedDepartments: ['ceo'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/D.Monika.png',
      bio: language === 'en' 
        ? 'With extensive experience in financial management and strategic planning, Mónika ensures sound fiscal policies and growth.'
        : 'Kiterjedt tapasztalattal a pénzügyi menedzsment és stratégiai tervezés területén, Mónika biztosítja a megfelelő pénzügyi politikát és növekedést.',
      color: '#4a7feb',
      language
    },
    {
      name: language === 'en' ? 'Dénes Budai' : 'Budai Dénes',
      title: language === 'en' ? 'HR Manager' : 'HR menedzser',
      department: 'hr',
      relatedDepartments: ['ceo'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/B.Dense_.png',
      bio: language === 'en'
        ? 'Dénes leads our human resources initiatives, focusing on talent development and organizational culture.'
        : 'Dénes vezeti HR kezdeményezéseinket, a tehetségfejlesztésre és a szervezeti kultúrára összpontosítva.',
      color: '#e84a7f',
      language
    },
    {
      name: language === 'en' ? 'Zoltán Gályás' : 'Gályás Zoltán',
      title: language === 'en' ? 'Production Manager' : 'Termelési vezető',
      department: 'production',
      relatedDepartments: ['ceo', 'technology'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/G.Zsoli_.png',
      bio: language === 'en'
        ? 'Zoltán oversees our production operations, ensuring optimal efficiency and quality standards.'
        : 'Zoltán felügyeli termelési műveleteinket, biztosítva az optimális hatékonyságot és minőségi szabványokat.',
      color: '#47c9b3',
      language
    },
    {
      name: language === 'en' ? 'Péter Nagy' : 'Nagy Péter',
      title: language === 'en' ? 'Logistics Manager' : 'Logisztikai vezető',
      department: 'logistics',
      relatedDepartments: ['production', 'sales'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/N.peter_.png',
      bio: language === 'en'
        ? 'Péter manages our supply chain operations and logistics optimization strategies.'
        : 'Péter kezeli ellátási láncunk működését és logisztikai optimalizálási stratégiáinkat.',
      color: '#9567e8',
      language
    },
    {
      name: language === 'en' ? 'Roland Kis' : 'Kis Roland',
      title: language === 'en' ? 'Sales Manager' : 'Értékesítési vezető',
      department: 'sales',
      relatedDepartments: ['production', 'logistics'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/K.Roland.png',
      bio: language === 'en'
        ? 'Roland leads our sales initiatives and client relationships across all markets.'
        : 'Roland vezeti értékesítési kezdeményezéseinket és ügyfélkapcsolatainkat minden piacon.',
      color: '#f7aa3b',
      language
    },
    {
      name: language === 'en' ? 'Zoltán Szabó' : 'Szabó Zoltán',
      title: language === 'en' ? 'Production Technology Manager' : 'Gyártástechnológiai vezető',
      department: 'technology',
      relatedDepartments: ['production'],
      image: 'https://flair-plastic.hu/wp-content/uploads/2024/09/S.Zsoli_.png',
      bio: language === 'en'
        ? 'Zoltán leads our manufacturing technology initiatives and process improvements.'
        : 'Zoltán vezeti gyártástechnológiai kezdeményezéseinket és folyamatfejlesztéseinket.',
      color: '#43b05c',
      language
    }
  ];

  // Extract members by level
  const ceoMember = teamData.find(m => m.department === 'ceo');
  const level1Members = teamData.filter(m => ['finance', 'hr', 'production'].includes(m.department));
  const level2Members = teamData.filter(m => ['sales', 'logistics', 'technology'].includes(m.department));

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)',
        minHeight: '1600px'
      }}
    >
      {/* Background particles */}
      {isMounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full z-0"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `${particle.color}20`,
            boxShadow: `0 0 10px ${particle.color}30`,
            top: `${particle.y}%`,
            left: `${particle.x}%`
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Organization chart container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFAB77] to-[#e57b48] mr-2"
              animate={{ 
                boxShadow: ["0 0 0px rgba(243,158,116,0.5)", "0 0 10px rgba(243,158,116,0.8)", "0 0 0px rgba(243,158,116,0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-gray-700">
              {language === 'en' ? 'Organization Structure' : 'Szervezeti Struktúra'}
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === 'en' ? 'Our Leadership Team' : 'Vezetőségi Csapatunk'}
          </h2>
          
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-[#FFAB77] to-[#e57b48] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Meet the experienced professionals behind Flair-Plastic\'s success. Click on each team member to learn more about their role and expertise.'
              : 'Ismerje meg a Flair-Plastic sikerének hátterében álló tapasztalt szakembereket. Kattintson az egyes csapattagokra, hogy többet megtudjon szerepükről és szakértelmükről.'}
          </p>
        </motion.div>
        
        {/* Department filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              highlightedDepartment === null 
                ? 'bg-gray-800 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setHighlightedDepartment(null)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {language === 'en' ? 'All Departments' : 'Összes Részleg'}
          </motion.button>
          
          {['finance', 'hr', 'production', 'sales', 'logistics', 'technology'].map((dept) => {
            const member = teamData.find(m => m.department === dept);
            return (
              <motion.button
                key={dept}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  highlightedDepartment === dept 
                    ? 'text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={{ 
                  backgroundColor: highlightedDepartment === dept ? member.color : ''
                }}
                onClick={() => setHighlightedDepartment(highlightedDepartment === dept ? null : dept)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {language === 'en' 
                  ? dept === 'finance' ? 'Finance'
                    : dept === 'hr' ? 'Human Resources'
                    : dept === 'production' ? 'Production'
                    : dept === 'sales' ? 'Sales'
                    : dept === 'logistics' ? 'Logistics'
                    : 'Technology'
                  : dept === 'finance' ? 'Pénzügy'
                    : dept === 'hr' ? 'Humán erőforrás'
                    : dept === 'production' ? 'Gyártás'
                    : dept === 'sales' ? 'Értékesítés'
                    : dept === 'logistics' ? 'Logisztika'
                    : 'Technológia'
                }
              </motion.button>
            );
          })}
        </motion.div>
        
        {/* Connection lines in SVG for the org chart */}
        <ConnectionLines 
          members={teamData} 
          activeIndex={activeIndex} 
          highlightedDepartment={highlightedDepartment}
        />
        
        {/* CEO level */}
        <div className="relative mb-24 flex justify-center">
          <OrgChartCard 
            member={ceoMember}
            index={0}
            level={0}
            isInView={isInView}
            mouseX={mouseX}
            mouseY={mouseY}
            active={activeIndex === 0}
            setActive={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            highlightedDepartment={highlightedDepartment}
            setHighlightedDepartment={setHighlightedDepartment}
          />
        </div>
        
        {/* Level 1: Department Heads */}
        <div className="relative mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {level1Members.map((member, idx) => (
            <OrgChartCard 
              key={member.department}
              member={member}
              index={idx + 1}
              level={1}
              isInView={isInView}
              mouseX={mouseX}
              mouseY={mouseY}
              active={activeIndex === idx + 1}
              setActive={() => setActiveIndex(activeIndex === idx + 1 ? null : idx + 1)}
              highlightedDepartment={highlightedDepartment}
              setHighlightedDepartment={setHighlightedDepartment}
            />
          ))}
        </div>
        
        {/* Level 2: Division Heads */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {level2Members.map((member, idx) => (
            <OrgChartCard 
              key={member.department}
              member={member}
              index={idx + 4}
              level={2}
              isInView={isInView}
              mouseX={mouseX}
              mouseY={mouseY}
              active={activeIndex === idx + 4}
              setActive={() => setActiveIndex(activeIndex === idx + 4 ? null : idx + 4)}
              highlightedDepartment={highlightedDepartment}
              setHighlightedDepartment={setHighlightedDepartment}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom information */}
      <motion.div
        className="mt-32 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p>
          {language === 'en' 
            ? 'Click on team members or department filters to explore our organizational structure.' 
            : 'Kattintson a csapattagokra vagy a részlegszűrőkre a szervezeti struktúránk felfedezéséhez.'}
        </p>
      </motion.div>
    </section>
  );
};

export default TeamMembers;

// Add this to global CSS for reflection animations
/*
@keyframes shine {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}
*/
