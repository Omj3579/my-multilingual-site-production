import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf, Globe, Recycle, TrendingUp } from 'lucide-react';

const SustainableSection = () => {
  const { language } = useLanguage();
  
  return (
    <section className="relative py-24 overflow-hidden bg-[#f9faf7]">
      {/* Organic background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-100/30 to-green-200/20 -z-0 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-100/20 to-green-100/10 -z-0 blur-3xl"></div>
      
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-0">
        <svg width="100%" height="100%">
          <pattern id="diagonalPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalPattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* New Section Header with Leaf Line */}
          <div className="text-center mb-6">
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '180px' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="mx-auto h-0.5 bg-gradient-to-r from-green-200 via-green-500 to-green-200 mb-8"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              {language === 'en' ? 'Our Sustainability Philosophy' : 'Fenntarthatósági filozófiánk'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              {language === 'en' ? 'Creating a greener future through responsible manufacturing' : 'Zöldebb jövő létrehozása felelős gyártás révén'}
            </motion.p>
          </div>
          
          {/* Row 1: Mission statement with visual accent */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20"
          >
            <div className="w-full lg:w-3/5 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 relative">
                {/* Green accent line */}
                <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-green-300 to-green-600 rounded-l-2xl"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pl-4">
                  {language === 'en' 
                    ? "Our Environmental Commitment"
                    : "Környezetvédelmi elkötelezettségünk"}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 pl-4">
                  {language === 'en'
                    ? "Flair–Plastic stands firmly in its commitment to environmental stewardship, continually striving to lessen our impact on the planet."
                    : "A Flair–Plastic szilárdan elkötelezett a környezetvédelem mellett, folyamatosan törekszik bolygónkra gyakorolt hatásunk csökkentésére."}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed pl-4">
                  {language === 'en'
                    ? "At Flair–Plastic, we stand at the forefront of the plastic injection molding and contract manufacturing industries, with a unique opportunity to pioneer sustainable innovations. We embrace our responsibility to make a significant positive impact on the environment, influencing the entire supply chain to adopt greener practices."
                    : "A Flair–Plastic-nál a műanyag fröccsöntő és szerződéses gyártóipar élvonalában állunk, egyedülálló lehetőséggel a fenntartható innovációk úttörőjeként. Felelősségünket vállaljuk a környezetre gyakorolt jelentős pozitív hatás érdekében, befolyásolva az egész ellátási láncot a zöldebb gyakorlatok bevezetésére."}
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 order-1 lg:order-2">
              <div className="relative h-[400px] flex items-center justify-center">
                {/* Modern geometric background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
                  {/* Floating geometric shapes */}
                  <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-green-200/40 blur-sm"></div>
                  <div className="absolute top-20 right-12 w-8 h-8 rotate-45 bg-emerald-300/30"></div>
                  <div className="absolute bottom-16 left-12 w-12 h-12 rounded-full bg-green-300/20"></div>
                  <div className="absolute bottom-8 right-8 w-20 h-6 rounded-full bg-emerald-200/30 blur-sm"></div>
                  
                  {/* Organic wave pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                    <path
                      d="M0,200 Q100,100 200,200 T400,200 L400,400 L0,400 Z"
                      fill="url(#waveGradient)"
                    />
                    <defs>
                      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Central content with modern design */}
                <div className="relative z-10 text-center">
                  {/* Icon cluster */}
                  <div className="flex justify-center items-center mb-6 space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                        <Leaf className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                        <Recycle className="w-8 h-8 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-gray-800">
                      {language === 'en' ? 'Sustainable Future' : 'Fenntartható jövő'}
                    </h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 max-w-xs">
                      {language === 'en' 
                        ? 'Leading innovation in environmental responsibility' 
                        : 'Innováció vezetése a környezeti felelősségben'}
                    </p>
                  </div>
                  
                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="text-green-600 font-bold text-lg">100%</div>
                    <div className="text-xs text-gray-500">
                      {language === 'en' ? 'Committed' : 'Elkötelezett'}
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white rounded-xl shadow-lg p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="font-bold text-lg">2024+</div>
                    <div className="text-xs opacity-90">
                      {language === 'en' ? 'Green Era' : 'Zöld korszak'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Modern CEO Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-800 rounded-3xl transform rotate-1 blur-sm opacity-90"></div>
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-xl overflow-hidden">
              {/* Circular background accent */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-green-500/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-emerald-800/20 blur-3xl"></div>
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <pattern id="leafPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20,0 Q30,20 20,40 Q10,20 20,0" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#leafPattern)" />
                </svg>
              </div>
              
              {/* Quote content */}
              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                {/* CEO image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/80 shadow-xl">
                      <img
                        src="https://flair-plastic.hu/wp-content/uploads/2024/04/Peter-jeko_Thumbnail.jpg.webp"
                        alt="CEO Jekó Péter"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-lg">
                      <div className="bg-green-500 rounded-full p-1">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quote text */}
                <div className="w-full md:w-2/3 text-white">
                  <div className="text-6xl font-serif text-green-300/60 leading-none mb-2">"</div>
                  <p className="text-xl md:text-2xl leading-relaxed mb-4">
                    <span className="text-green-200 font-medium">
                      {language === 'en' ? 'At Flair–Plastic' : 'A Flair–Plastic-nál'}
                    </span>
                    {language === 'en' ? ', we believe that ' : ', hisszük, hogy '}
                    <span className="text-green-200 font-medium">
                      {language === 'en' ? 'everyone' : 'mindenkinek'}
                    </span>
                    {language === 'en' 
                      ? ', at every point in the value chain, has a ' 
                      : ', az értéklánc minden pontján '}
                    <span className="text-green-200 font-medium">
                      {language === 'en'
                        ? 'crucial role in minimizing our environmental impact and that of our customers globally.'
                        : 'kulcsfontosságú szerepe van a környezeti hatásunk és ügyfeleink globális hatásának minimalizálásában.'}
                    </span>
                  </p>
                  <p className="text-lg font-medium text-green-100 flex items-center gap-2">
                    <span>{language === 'en' ? 'Jekó Péter' : 'Jekó Péter'}</span>
                    <span className="w-6 h-px bg-green-200/60"></span>
                    <span className="text-green-200/80 font-normal">{language === 'en' ? 'CEO' : 'Vezérigazgató'}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 3: Modern Sustainability Approach Cards */}
          <div className="mt-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800"
            >
              {language === 'en' ? 'Our Sustainability Approach' : 'Fenntarthatósági megközelítésünk'}
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Supply Chain Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                <div className="p-6 md:p-8">
                  <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
                    <Recycle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'en' ? 'Supply Chain Transformation' : 'Ellátási lánc átalakítása'}
                  </h4>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? "At Flair-Plastic, our impact extends through the entire supply chain—from the sourcing of raw materials to the delivery of finished products and their ultimate lifecycle. This comprehensive influence is why we embed sustainable practices deeply within our core business strategies."
                      : "A Flair-Plastic-nál hatásunk kiterjed az egész ellátási láncra – a nyersanyagok beszerzésétől a késztermékek szállításáig és végső életciklusukig. Ez az átfogó befolyás az oka annak, hogy a fenntartható gyakorlatokat mélyen beágyazzuk alapvető üzleti stratégiáinkba."}
                  </p>
                </div>
              </motion.div>
              
              {/* Card 2: Sustainable Manufacturing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                <div className="p-6 md:p-8">
                  <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'en' ? 'Collaborative Innovation' : 'Együttműködő innováció'}
                  </h4>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? "By collaborating intimately with our customers and partners, Flair-Plastic is dedicated to enlightening and empowering stakeholders about the advantages of sustainable manufacturing. Together, we have the power to transform the plastics industry."
                      : "A Flair-Plastic ügyfeleinkkel és partnereinkkel szorosan együttműködve elkötelezett az érdekelt felek felvilágosítása és felhatalmazása mellett a fenntartható gyártás előnyeiről. Együtt megvan az erőnk ahhoz, hogy átalakítsuk a műanyagipart."}
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom commitment statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 mt-10 rounded-xl p-8 border border-green-100 text-center"
            >
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                {language === 'en'
                  ? "We scrupulously evaluate our decisions at every stage, ensuring that sustainability is not just an initiative, but a fundamental aspect of how we operate—driving substantial environmental improvements and paving the way for a sustainable future that benefits everyone."
                  : "Minden szakaszban gondosan értékeljük döntéseinket, biztosítva, hogy a fenntarthatóság nem csak egy kezdeményezés, hanem működésünk alapvető aspektusa – jelentős környezeti fejlesztéseket hajtva végre és utat nyitva egy olyan fenntartható jövő felé, amely mindenki számára előnyös."}
              </p>
            </motion.div>
          </div>
          
          {/* Eco badge 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-6"
          >
            <div className="bg-white rounded-full p-3 shadow-md">
              <img
                src="https://flair-plastic.hu/wp-content/uploads/2024/04/sustainability_edited.jpg.webp"
                alt="Sustainability Leaf Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>*/}
        </div>
      </div>
    </section>
  );
};

export default SustainableSection;
