import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, Shield, Award, Star, Zap, Sparkles } from 'lucide-react';

const CommitmentCallout = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax and scroll effects
  const titleOffset = useTransform(scrollYProgress, [0.1, 0.6], ['-20%', '10%']);
  const imageParallax = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '-15%']);
  const cardScale = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]);
  
  // Content for commitment cards
  const commitments = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: language === 'en' ? 'Quality Assurance' : 'Minőségbiztosítás',
      description: language === 'en' ? 'Every finish undergoes rigorous quality control' : 'Minden felületkezelés szigorú minőségellenőrzésen megy keresztül',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: language === 'en' ? 'Industry Standards' : 'Ipari Szabványok',
      description: language === 'en' ? 'Compliant with all relevant certifications' : 'Megfelel minden vonatkozó tanúsítványnak',
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: language === 'en' ? 'Design Excellence' : 'Kiváló Tervezés',
      description: language === 'en' ? 'Aesthetic finishes that enhance brand value' : 'Esztétikai kidolgozás, amely növeli a márkaértéket',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: language === 'en' ? 'Fast Turnaround' : 'Gyors Átfutás',
      description: language === 'en' ? 'Efficient processes for on-time delivery' : 'Hatékony folyamatok a pontos szállítás érdekében',
    },
  ];

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Dynamic gradient background with 3D perspective effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 transform-gpu">
        {/* Perspective pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Animated wave effect */}
        {/*<motion.div
          className="absolute bottom-0 left-0 right-0 h-[20vh] bg-white"
          style={{
            clipPath: "url(#wave)",
            y: imageParallax
          }}
        >
          <svg width="0" height="0">
            <defs>
              <clipPath id="wave" clipPathUnits="objectBoundingBox">
                <path d="M0,1 L0,0.6 C0.17,0.5 0.33,0.7 0.5,0.6 C0.67,0.5 0.83,0.7 1,0.6 L1,1 Z" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>*/}

        {/* Light beams animation */}
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute h-[300px] w-[30px] bg-gradient-to-b from-white/40 to-transparent blur-md"
            style={{
              left: `${10 + i * 15}%`,
              top: "-150px",
              transformOrigin: "bottom center",
              rotate: -10 + i * 5
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              height: ["300px", "400px", "300px"],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Animated floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: 10 + Math.random() * 30,
              height: 10 + Math.random() * 30,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: ["-10%", "110%"],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column asymmetrical layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column - Heading and imagery */}
            <motion.div 
              className="lg:col-span-5 text-white space-y-8"
              style={{ y: titleOffset }}
            >
              {/* Circular highlight element */}
              <div className="relative">
                <motion.div 
                  className="absolute -top-14 -left-20 w-40 h-40 rounded-full bg-white/10 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* Spotlight badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-amber-300" />
                  <span className="text-sm font-medium text-white">
                    {language === 'en' ? 'Premium Finishes' : 'Prémium Felületek'}
                  </span>
                </motion.div>
                
                {/* Main heading with staggered animation */}
                <div className="overflow-hidden mb-2">
                  <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {language === 'en' ? (
                      <>
                        <span className="block">Choose</span>
                        <span className="block text-amber-200">Flair-Plastic</span> 
                        <span className="block">for Excellence</span>
                      </>
                    ) : (
                      <>
                        <span className="block">Válassza a</span>
                        <span className="block text-amber-200">Flair-Plastic-et</span> 
                        <span className="block">a kiválóságért</span>
                      </>
                    )}
                  </motion.h2>
                </div>
                
                {/* Decorative line */}
                <motion.div 
                  className="h-1 w-0 bg-white rounded-full my-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              
              {/* 3D product image with shine effect */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-amber-200/20 to-orange-100/20 backdrop-blur-sm border border-white/30 p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/Surface-Finishing-5.jpg" 
                  alt={language === 'en' ? "Surface finishing example" : "Felületkezelési példa"}
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Animated reflection/shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  style={{ width: "50%" }}
                />
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <p className="text-white text-sm">
                    {language === 'en' ? 'Precision multi-color application on complex surfaces' : 'Többszínű precíziós alkalmazás összetett felületeken'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right column - Content cards */}
            <div className="lg:col-span-7">
              {/* Commitment message */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-white/20 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  {language === 'en' 
                    ? "Flair-Plastic is committed to delivering surface finishing solutions that transform ordinary plastic components into exceptional products. Our meticulous attention to detail and cutting-edge techniques ensure your products not only look outstanding but perform optimally."
                    : "A Flair-Plastic elkötelezett olyan felületkezelési megoldások nyújtása mellett, amelyek hétköznapi műanyag alkatrészeket kivételes termékekké alakítanak. Aprólékos figyelmet fordítunk a részletekre és élvonalbeli technikákat alkalmazunk, hogy termékei ne csak kiemelkedően nézzenek ki, hanem optimálisan is működjenek."}
                </p>
              </motion.div>
              
              {/* Commitment cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commitments.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-amber-300 flex flex-col h-full"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    style={{ scale: cardScale }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                      <div className="text-amber-600">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 flex-grow">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom features list */}
              <motion.div
                className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-xl font-semibold mb-4">
                  {language === 'en' ? 'Why Our Finishing Solutions Stand Out' : 'Miért emelkednek ki felületkezelési megoldásaink'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    language === 'en' ? 'Precise logo application' : 'Pontos logó alkalmazás',
                    language === 'en' ? 'Multi-color capabilities' : 'Többszínű képességek',
                    language === 'en' ? 'Consistent quality' : 'Következetes minőség',
                    language === 'en' ? 'Enhanced durability' : 'Fokozott tartósság',
                  ].map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-amber-200" />
                      </div>
                      <p className="text-white">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* CTA button */}
              <motion.div
                className="mt-10 flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <a 
                  href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
                  className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-600 py-4 px-8 rounded-xl font-medium transition-all shadow-lg group relative overflow-hidden"
                >
                  <span className="relative z-10 text-lg">
                    {language === 'en' ? 'Request Consultation' : 'Konzultáció kérése'}
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                  <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-amber-50"></div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentCallout;
