import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Cpu, Globe2, Sparkles, Leaf } from 'lucide-react';

const CompanyIntroSection = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.25, 0, 1],
        staggerChildren: 0.2 
      } 
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      text: language === 'en' ? 'Advanced Technology' : 'Fejlett Technológia',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      text: language === 'en' ? 'Global Presence' : 'Globális Jelenlét',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: language === 'en' ? 'Innovation Focus' : 'Innovációs Fókusz',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative pt-0 pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/15 to-orange-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
          style={{ y, opacity }}
        >
          {/* Floating Badge */}
          <motion.div 
            className="text-center mb-12"
            variants={textReveal}
            custom={0}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/50 rounded-full shadow-lg mx-auto mb-8"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Our Story' : 'Történetünk'}
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
          {/* Main Title with Advanced Typography */}
          <motion.div 
            className="text-center mb-16"
            variants={textReveal}
            custom={1}
          >
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #3730a3 50%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {language === 'en' 
                ? (
                  <>
                    <motion.span
                      className="block"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Engineering
                    </motion.span>
                    <motion.span 
                      className="block"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      Excellence
                    </motion.span>
                    <motion.span 
                      className="block text-2xl md:text-3xl lg:text-4xl font-medium opacity-70"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      Since 1990
                    </motion.span>
                  </>
                )
                : (
                  <>
                    <motion.span
                      className="block"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Műszaki
                    </motion.span>
                    <motion.span 
                      className="block"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      Kiválóság
                    </motion.span>
                    <motion.span 
                      className="block text-2xl md:text-3xl lg:text-4xl font-medium opacity-70"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      1990 Óta
                    </motion.span>
                  </>
                )}
            </motion.h2>
          </motion.div>

          {/* Immersive Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Enhanced Text Content */}
            <motion.div 
              className="space-y-8"
              variants={textReveal}
              custom={2}
            >
              <motion.div
                className="relative p-8 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
                  {language === 'en' 
                    ? 'For over 30 years, Flair Plastic has been at the forefront of precision manufacturing, delivering innovative solutions that shape industries and improve lives worldwide.'
                    : 'Több mint 30 éve a Flair Plastic a precíziós gyártás élvonalában áll, innovatív megoldásokat szállítva, amelyek formálják az iparágakat és javítják az életet világszerte.'}
                </p>
                
                <motion.div
                  className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {language === 'en'
                    ? 'From our state-of-the-art facilities in Hungary, we serve clients across Europe and beyond, combining advanced technology with traditional craftsmanship.'
                    : 'Magyarországi legmodernebb üzemeinkből Európa-szerte és azon túl szolgáljuk ki ügyfeleinket, fejlett technológiát kombinálva hagyományos kézműves tudással.'}
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {language === 'en'
                    ? 'Our commitment extends beyond manufacturing – we are partners in innovation, sustainability, and growth.'
                    : 'Elkötelezettségünk túlmutat a gyártáson – partnerek vagyunk az innovációban, a fenntarthatóságban és a növekedésben.'}
                </p>
              </motion.div>
              
              {/* Feature Tags */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={textReveal}
                custom={3}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-white/40 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-r ${feature.color} text-white shadow-lg`}>
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Interactive Visual Element */}
            <motion.div 
              className="relative"
              variants={textReveal}
              custom={4}
            >
              <motion.div
                className="relative w-full aspect-square max-w-lg mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner elements */}
                <div className="absolute inset-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-full border border-white/50 shadow-2xl flex items-center justify-center">
                  <motion.div
                    className="text-center p-8"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      30+
                    </motion.div>
                    <div className="text-lg font-semibold text-gray-700">
                      {language === 'en' ? 'Years of Innovation' : 'Év Innováció'}
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements around the circle */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [angle, angle + 360],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.7 }
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Green Innovation Initiative Showcase */}
          <motion.div
            className="mt-32 relative"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-100/80 backdrop-blur-sm border border-green-200/50 rounded-full mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-800">
                  {language === 'en' ? 'Green Innovation Initiative' : 'Zöld Innovációs Kezdeményezés'}
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'en' 
                  ? 'Leading the Future of Sustainable Manufacturing'
                  : 'A Fenntartható Gyártás Jövőjének Vezetése'}
              </h3>

              <div className="flex justify-center items-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Material Recovery' : 'Anyag-visszanyerés'}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {language === 'en' ? 'Optimized' : 'Optimalizált'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Thermal Systems' : 'Hőrendszerek'}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {language === 'en' ? 'Strategic' : 'Stratégiai'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === 'en' ? 'Energy Planning' : 'Energia Tervezés'}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Renewable Energy Integration */}
              <motion.div
                className="group relative p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse" />
                  <span className="text-sm font-semibold text-orange-600">
                    {language === 'en' ? 'Strategic Phase' : 'Stratégiai Szakasz'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' 
                    ? 'Renewable Energy Integration'
                    : 'Megújuló Energia Integráció'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Strategic partnerships with renewable energy providers to implement sustainable power infrastructure across our manufacturing operations.'
                    : 'Stratégiai partnerségek megújuló energia szolgáltatókkal a fenntartható energiainfrastruktúra megvalósítására gyártási műveleteinkben.'}
                </p>
              </motion.div>

              {/* Advanced Water Management */}
              <motion.div
                className="group relative p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
                  <span className="text-sm font-semibold text-blue-600">
                    {language === 'en' ? 'Operational' : 'Működési'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' 
                    ? 'Advanced Water Management'
                    : 'Fejlett Vízgazdálkodás'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Closed-loop water circulation systems optimizing thermal management processes while achieving superior resource efficiency.'
                    : 'Zárt körű vízcirkulációs rendszerek a hőgazdálkodási folyamatok optimalizálására, miközben kiváló erőforrás-hatékonyságot érnek el.'}
                </p>
              </motion.div>

              {/* Circular Material Flow */}
              <motion.div
                className="group relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 hover:border-green-300/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-green-600">
                    {language === 'en' ? 'Active' : 'Aktív'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' 
                    ? 'Circular Material Flow'
                    : 'Körforgásos Anyagáramlás'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Comprehensive material recovery systems ensuring complete reintegration of production byproducts into manufacturing cycles.'
                    : 'Átfogó anyag-visszanyerési rendszerek biztosítják a termelési melléktermékek teljes reintegrációját a gyártási ciklusokba.'}
                </p>
              </motion.div>

              {/* Environmental Stewardship */}
              <motion.div
                className="group relative p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-gray-400/20 to-slate-400/20 rounded-full blur-xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-slate-400 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-600">
                    {language === 'en' ? 'Critical Priority' : 'Kritikus Prioritás'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' 
                    ? 'Environmental Stewardship'
                    : 'Környezeti Felelősség'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Rigorous containment protocols safeguarding against raw material dispersion and environmental contamination.'
                    : 'Szigorú elszigetelési protokollok védelmeznek a nyersanyag-szóródás és környezeti szennyezés ellen.'}
                </p>
              </motion.div>

              {/* Process Optimization */}
              <motion.div
                className="group relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 md:col-span-2 lg:col-span-1"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
                  <span className="text-sm font-semibold text-purple-600">
                    {language === 'en' ? 'Excellence' : 'Kiválóság'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'en' 
                    ? 'Process Optimization'
                    : 'Folyamat Optimalizálás'}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? 'Precision manufacturing methodologies minimizing material waste through advanced process control and quality optimization.'
                    : 'Precíziós gyártási módszerek minimalizálják az anyagveszteséget fejlett folyamatszabályozás és minőségoptimalizálás révén.'}
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-16">
              <motion.div
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Leaf className="w-5 h-5" />
                <span>
                  {language === 'en' ? 'Explore Our Complete Green Strategy' : 'Fedezze Fel Teljes Zöld Stratégiánkat'}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
