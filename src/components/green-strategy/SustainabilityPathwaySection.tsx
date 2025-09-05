import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Globe, Recycle, Droplets, Zap } from 'lucide-react';

const SustainabilityPathwaySection = () => {
  const { language } = useLanguage();
  
  // Professional pathway steps reflecting enterprise sustainability framework
  const pathwaySteps = [
    {
      icon: Zap,
      title: language === 'en' ? 'Strategic Energy Transformation' : 'Stratégiai Energia Átalakulás',
      description: language === 'en'
        ? 'Developing comprehensive renewable energy infrastructure through strategic partnerships with leading sustainable energy providers to achieve carbon-neutral manufacturing operations.'
        : 'Átfogó megújuló energia infrastruktúra fejlesztése stratégiai partnerségeken keresztül vezető fenntartható energia szolgáltatókkal szén-semleges gyártási műveletek elérésére.'
    },
    {
      icon: Droplets,
      title: language === 'en' ? 'Advanced Thermal Management' : 'Fejlett Termikus Kezelés',
      description: language === 'en'
        ? 'Implementing sophisticated closed-loop circulation systems for optimal thermal regulation in precision manufacturing processes, maximizing resource efficiency and environmental stewardship.'
        : 'Kifinomult zárt körű cirkulációs rendszerek megvalósítása optimális termikus szabályozáshoz precíziós gyártási folyamatokban, maximalizálva az erőforrás-hatékonyságot és környezeti felelősségvállalást.'
    },
    {
      icon: Recycle,
      title: language === 'en' ? 'Circular Manufacturing Excellence' : 'Körforgásos Gyártási Kiválóság',
      description: language === 'en'
        ? 'Establishing comprehensive material flow optimization systems ensuring complete integration of production outputs into continuous manufacturing cycles, achieving zero-waste operational standards.'
        : 'Átfogó anyagáramlás optimalizálási rendszerek létrehozása biztosítva a gyártási kimenetek teljes integrációját folyamatos gyártási ciklusokba, nulla hulladék működési szabványok elérése.'
    }
  ];
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Modern layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 -z-10"></div>
      
      {/* Organic background shapes */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-green-100/40 to-emerald-200/30 -z-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-100/30 to-green-200/20 -z-5 blur-3xl"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] -z-5">
        <svg width="100%" height="100%">
          <pattern id="leafPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30,10 Q40,30 30,50 Q20,30 30,10" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#leafPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top section with title and intro */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            {/* Left title column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              {/* Leaf icon with circle background */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-6 shadow-lg">
                <Leaf className="text-white w-8 h-8" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-green-600 italic font-medium mr-2">
                  {language === 'en' ? 'Sustainable Manufacturing' : 'Fenntartható Gyártási'}
                </span>
                <br />
                {language === 'en' ? 'Excellence Framework' : 'Kiválósági Keretrendszer'}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-lg">
                {language === 'en' 
                  ? "Our comprehensive sustainability framework integrates cutting-edge technologies and operational excellence to deliver measurable environmental impact across all manufacturing processes."
                  : "Átfogó fenntarthatósági keretrendszerünk élvonalbeli technológiákat és működési kiválóságot integrál mérhető környezeti hatás eléréséhez minden gyártási folyamatban."}
              </p>
            </motion.div>
            
            {/* Right visual column with globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 to-emerald-200/60 rounded-full transform rotate-12 blur-xl"></div>
                
                {/* Animated rotating globe */}
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 relative"
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Circular Pathways */}
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#e6f7ef" strokeWidth="16" />
                      <circle cx="100" cy="100" r="60" fill="none" stroke="#d1f0e0" strokeWidth="12" />
                      <circle cx="100" cy="100" r="40" fill="none" stroke="#bbead1" strokeWidth="8" />
                      
                      {/* Globe base */}
                      <circle cx="100" cy="100" r="30" fill="#10b981" opacity="0.8" />
                      <path d="M70,100 h60 M100,70 v60" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                      <circle cx="100" cy="100" r="30" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                      
                      {/* Orbiting elements */}
                      <motion.g animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                        <circle cx="100" cy="20" r="6" fill="#059669" />
                        <circle cx="100" cy="180" r="6" fill="#059669" />
                        <circle cx="20" cy="100" r="6" fill="#059669" />
                        <circle cx="180" cy="100" r="6" fill="#059669" />
                        
                        <circle cx="140" cy="40" r="4" fill="#34d399" />
                        <circle cx="40" cy="140" r="4" fill="#34d399" />
                        <circle cx="160" cy="160" r="4" fill="#34d399" />
                        <circle cx="40" cy="40" r="4" fill="#34d399" />
                      </motion.g>
                    </svg>
                  </motion.div>
                  
                  {/* Center leaf decoration */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Globe className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-white">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-center"
                    >
                      <div className="text-xs font-light">TARGET</div>
                      <div className="text-xl font-bold">2030</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pathway journey visualization */}
          <div className="mb-20 relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-[19px] bottom-10 w-1 bg-gradient-to-b from-transparent via-green-500 to-transparent md:hidden"></div>
            
            <div className="absolute top-24 left-1/2 right-0 h-1 bg-gradient-to-r from-green-500 to-transparent hidden md:block"></div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800"
            >
              {language === 'en' ? 'Our Sustainability Journey' : 'Fenntarthatósági Utazásunk'}
            </motion.h3>

            {/* Pathway Steps */}
            <div className="space-y-16 md:space-y-0 md:flex md:gap-6">
              {pathwaySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="md:w-1/3 relative"
                >
                  {/* Step number badge - appears in mobile view */}
                  <div className="flex md:justify-center items-start mb-4 md:mb-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white border-4 border-green-100 shadow-md z-10 md:absolute md:-top-5">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Title for mobile */}
                    <h4 className="ml-4 text-xl font-bold text-green-800 md:hidden">
                      {step.title}
                    </h4>
                  </div>
                  
                  {/* Card content */}
                  <div className="ml-14 md:ml-0 pl-0 md:pt-8">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-green-100 h-full">
                      <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <step.icon className="w-8 h-8 text-green-600" />
                      </div>
                      
                      {/* Title for desktop */}
                      <h4 className="hidden md:block text-xl font-bold text-green-800 mb-3">
                        {step.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-200"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 shadow-xl text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {language === 'en' ? 'Join Our Sustainability Mission' : 'Csatlakozz a Fenntarthatósági Küldetésünkhöz'}
                </h3>
                <p className="text-green-100">
                  {language === 'en' 
                    ? 'Together, we can make a positive impact on our planet and future generations.'
                    : 'Együtt pozitív hatást gyakorolhatunk bolygónkra és a jövő generációira.'}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition shadow-md hover:shadow-lg"
                >
                  <span>
                    {language === 'en' ? 'Contact Our Green Team' : 'Kapcsolat a Zöld Csapatunkkal'}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPathwaySection;
