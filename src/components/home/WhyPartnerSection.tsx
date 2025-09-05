import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle2, Award, Lightbulb, Leaf } from 'lucide-react';

const WhyPartnerSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeCard, setActiveCard] = useState(null);
  
  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    mouseX.set((clientX - left - width / 2) / 100);
    mouseY.set((clientY - top - height / 2) / 100);
  };

  const partners = {
    en: [
      {
        title: 'Uncompromising Quality',
        description: 'Our advanced manufacturing facilities and stringent quality assurance processes deliver products that exceed expectations.',
        icon: <Award className="h-8 w-8" />,
        color: '#4361ee',
        bgGradient: 'from-blue-500/10 via-indigo-500/5 to-blue-500/10',
        stats: '99.8% precision rate',
        highlight: 'ISO 9001:2015 certified'
      },
      {
        title: 'Innovation at the Core',
        description: 'With over 25 years of expertise, we continuously innovate to provide cutting-edge solutions tailored to your needs.',
        icon: <Lightbulb className="h-8 w-8" />,
        color: '#e45200',
        bgGradient: 'from-orange-500/10 via-red-500/5 to-orange-500/10',
        stats: '25+ years expertise',
        highlight: 'Cutting-edge R&D facilities'
      },
      {
        title: 'Sustainability Commitment',
        description: 'We are dedicated to environmentally responsible practices, using sustainable materials and processes to minimize our impact.',
        icon: <Leaf className="h-8 w-8" />,
        color: '#00b574',
        bgGradient: 'from-green-500/10 via-emerald-500/5 to-green-500/10',
        stats: '30% carbon reduction',
        highlight: 'ISO 14001 Environmental Management'
      }
    ],
    hu: [
      {
        title: 'Kompromisszumok nélküli minőség',
        description: 'Fejlett gyártási létesítményeink és szigorú minőségbiztosítási folyamataink olyan termékeket biztosítanak, amelyek meghaladják az elvárásokat.',
        icon: <Award className="h-8 w-8" />,
        color: '#4361ee',
        bgGradient: 'from-blue-500/10 via-indigo-500/5 to-blue-500/10',
        stats: '99.8% precíziós arány',
        highlight: 'ISO 9001:2015 tanúsított'
      },
      {
        title: 'Innováció a középpontban',
        description: 'Több mint 25 éves szakértelemmel folyamatosan innoválunk, hogy az Ön igényeire szabott, élvonalbeli megoldásokat kínáljunk.',
        icon: <Lightbulb className="h-8 w-8" />,
        color: '#e45200',
        bgGradient: 'from-orange-500/10 via-red-500/5 to-orange-500/10',
        stats: '25+ év szakértelem',
        highlight: 'Élvonalbeli K+F létesítmények'
      },
      {
        title: 'Elkötelezettség a fenntarthatóság iránt',
        description: 'Elkötelezettek vagyunk a környezetileg felelős gyakorlatok mellett, fenntartható anyagokat és folyamatokat alkalmazva a hatás minimalizálása érdekében.',
        icon: <Leaf className="h-8 w-8" />,
        color: '#00b574',
        bgGradient: 'from-green-500/10 via-emerald-500/5 to-green-500/10',
        stats: '30% szén-dioxid csökkentés',
        highlight: 'ISO 14001 Környezetirányítás'
      }
    ]
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with premium gradient and animated particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none"></div>

      {/* Animated background particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/10"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(40px)',
            opacity: 0.5,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Title */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Floating badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-50 border border-blue-100 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
            <span className="text-sm font-medium text-blue-800">
              {language === 'en' ? 'Strategic Partnership' : 'Stratégiai partnerség'}
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {language === 'en' ? 'Why Partner with Flair-Plastic?' : 'Miért válassza a Flair-Plastic-et?'}
          </motion.h2>
          
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isInView ? 80 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {language === 'en' 
              ? 'Experience the advantages of partnering with a global leader in precision plastic manufacturing.'
              : 'Tapasztalja meg a globális precíziós műanyaggyártás vezetőjével való partnerség előnyeit.'}
          </motion.p>
        </motion.div>

        {/* Premium Cards with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {partners[language].map((partner, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card backdrop with blurred gradient */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.bgGradient} blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                style={{ 
                  transform: 'translate(8px, 8px)',
                  filter: 'blur(20px)'
                }}
              ></div>
              
              {/* Main card with glass effect */}
              <motion.div
                className="h-full relative rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(10px)',
                  transformStyle: "preserve-3d",
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.05)',
                  borderWidth: '1px',
                  borderColor: 'rgba(209, 213, 219, 0.5)',
                  rotateX: useTransform(mouseY, [-10, 10], [2, -2], { clamp: true }),
                  rotateY: useTransform(mouseX, [-10, 10], [-2, 2], { clamp: true }),
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Top accent bar */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: partner.color }}
                  ></div>
                  
                  {/* Content */}
                  <div className="flex items-start mb-6">
                    <div 
                      className="rounded-xl p-3 mr-4 flex-shrink-0" 
                      style={{ 
                        color: partner.color,
                        backgroundColor: `${partner.color}15` 
                      }}
                    >
                      {partner.icon}
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: partner.color }}
                    >
                      {partner.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  
                  {/* Stats/Highlights */}
                  <div className="mt-auto">
                    <div className="flex items-center mt-4 text-gray-800">
                      <CheckCircle2 size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm font-medium">{partner.stats}</span>
                    </div>
                    <div className="flex items-center mt-2 text-gray-800">
                      <CheckCircle2 size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm font-medium">{partner.highlight}</span>
                    </div>
                  </div>
                  
                  {/* Animated highlight on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: activeCard === index ? [0.8, 1, 0.95] : 0.8,
                      rotate: activeCard === index ? [0, 10, 0] : 0
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div 
                      className="h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: `${partner.color}20`,
                        color: partner.color
                      }}
                    >
                      <ArrowRight size={18} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Animated shine effect on hover */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 55%, rgba(255,255,255,0) 100%)",
                    "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 10%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)"
                  ],
                  backgroundPosition: ["200% 200%", "-150% -150%"]
                }}
                transition={{ duration: 1.5, repeat: activeCard === index ? Infinity : 0, repeatDelay: 3 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* CTA button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a 
            href="/about"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            <span className="absolute left-0 flex items-center justify-start w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
              <ArrowRight />
            </span>
            <span className="relative group-hover:pl-6 transition-all duration-300 ease">
              {language === 'en' ? 'Learn About Our Company' : 'Ismerje meg vállalatunkat'}
            </span>
            
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full overflow-hidden opacity-0 group-hover:opacity-100">
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  left: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;