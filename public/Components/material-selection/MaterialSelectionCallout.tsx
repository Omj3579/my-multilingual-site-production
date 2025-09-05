import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  MoveRight, 
  Globe, 
  Microscope, 
  LightbulbIcon, 
  Sparkles,
  BadgeCheck
} from 'lucide-react';

const MaterialSelectionCallout = () => {
  const { language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const expertise = [
    {
      icon: Microscope,
      title: language === 'en' ? 'Technical Expertise' : 'Műszaki szakértelem',
      description: language === 'en' 
        ? 'Our specialists evaluate mechanical, thermal, and chemical properties to find your perfect material match.'
        : 'Szakembereink értékelik a mechanikai, termikus és kémiai tulajdonságokat, hogy megtalálják az Ön számára tökéletes anyagot.'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Global Supply Network' : 'Globális ellátási hálózat',
      description: language === 'en'
        ? 'Our extensive global footprint ensures reliable and consistent material availability.'
        : 'Kiterjedt globális jelenlétünk megbízható és következetes anyagellátást biztosít.'
    },
    {
      icon: Beaker,
      title: language === 'en' ? 'Material Testing' : 'Anyagvizsgálat',
      description: language === 'en'
        ? 'Rigorously tested resin options to exceed performance and compliance expectations.'
        : 'Szigorúan tesztelt gyantaválasztékot kínálunk a teljesítmény és megfelelőségi elvárások túlszárnyalására.'
    },
    {
      icon: LightbulbIcon,
      title: language === 'en' ? 'Innovative Solutions' : 'Innovatív megoldások',
      description: language === 'en'
        ? 'We balance design complexity and sustainability to create forward-thinking material solutions.'
        : 'Egyensúlyba hozzuk a tervezési összetettséget és a fenntarthatóságot az előremutató anyagmegoldások érdekében.'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-gradient-radial from-amber-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-gradient-radial from-orange-500/10 to-transparent blur-3xl"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="material-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#material-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="space-y-8">
            {/* Heading with animated highlight */}
            <div className="relative">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute h-3 bg-gradient-to-r from-amber-400 to-orange-500 bottom-0 left-0 rounded-full"
                style={{ opacity: 0.3 }}
              />
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-10"
              >
                {language === 'en' ? (
                  <>
                    <span className="text-amber-400">Flair–Plastic's</span> Material Selection Proficiency
                  </>
                ) : (
                  <>
                    A <span className="text-amber-400">Flair–Plastic</span> Anyagválasztási Szakértelme
                  </>
                )}
              </motion.h2>
            </div>

            {/* Description paragraph */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {language === 'en' 
                ? "Flair–Plastic has amassed significant expertise in material selection specifically tailored for plastic injection moulding. Our team leverages deep knowledge to guide you in selecting the ideal material for your component, considering increasing design complexity, sustainability requirements, and other critical factors."
                : "A Flair–Plastic jelentős szakértelmet halmozott fel a műanyag fröccsöntéshez szükséges anyagválasztásban. Csapatunk mélyreható tudást használ fel, hogy segítsen Önnek a komponenséhez ideális anyag kiválasztásában, figyelembe véve a növekvő tervezési összetettséget, a fenntarthatósági követelményeket és más kritikus tényezőket."
              }
            </motion.p>

            {/* Expertise cards */}
            <div className="space-y-4 pt-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-amber-900/40 to-orange-900/40 border-l-4 border-amber-400 shadow-lg' 
                      : 'hover:bg-gray-800/50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${activeFeature === index ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gray-800'}`}>
                    <item.icon className={`h-6 w-6 ${activeFeature === index ? 'text-white' : 'text-amber-400'}`} />
                  </div>
                  <div>
                    <h3 className={`font-medium text-lg ${activeFeature === index ? 'text-white' : 'text-gray-200'}`}>{item.title}</h3>
                    <p className={`text-sm transition-all max-h-0 overflow-hidden duration-300 ${
                      activeFeature === index ? 'max-h-[100px] mt-2 text-gray-300' : 'opacity-0'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a 
                href={language === 'en' ? '/contact' : '/kapcsolat'} 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-6 py-3 rounded-full text-white font-medium transition-all shadow-lg shadow-amber-900/20 hover:shadow-xl hover:shadow-amber-900/30 hover:translate-y-[-2px]"
              >
                {language === 'en' ? 'Discuss Your Material Needs' : 'Beszéljen anyagigényeiről'}
                <MoveRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className="relative">
            {/* Background shape */}
            <div className="absolute -top-10 -bottom-10 -right-10 -left-10 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-[40px] rotate-3 hidden lg:block"></div>

            {/* Main visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden shadow-xl"
            >
              <div className="p-8">
                {/* Visual Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-xl">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {language === 'en' ? 'Our Material Selection Advantage' : 'Anyagválasztási előnyünk'}
                  </h3>
                </div>

                {/* Stats and Facts */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                    <div className="text-amber-400 text-3xl font-bold mb-2">500+</div>
                    <div className="text-gray-300 text-sm">
                      {language === 'en' ? 'Material Options Available' : 'Elérhető anyagopció'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                    <div className="text-amber-400 text-3xl font-bold mb-2">25+</div>
                    <div className="text-gray-300 text-sm">
                      {language === 'en' ? 'Years of Material Expertise' : 'Év anyagszakértelem'}
                    </div>
                  </div>
                </div>

                {/* Selection Process Steps */}
                <div className="space-y-5">
                  <h4 className="text-lg font-medium mb-4">
                    {language === 'en' ? 'Our Material Selection Process' : 'Anyagválasztási folyamatunk'}
                  </h4>
                  
                  {[
                    language === 'en' ? 'Requirements Analysis' : 'Követelmények elemzése',
                    language === 'en' ? 'Material Property Matching' : 'Anyagtulajdonságok párosítása',
                    language === 'en' ? 'Prototype Testing' : 'Prototípus tesztelés',
                    language === 'en' ? 'Production Validation' : 'Gyártási validálás'
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-400 font-bold">{i+1}</span>
                      </div>
                      <div className="bg-gray-800/30 py-2 px-4 rounded-lg border-l-2 border-amber-500 flex-grow">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Badge */}
                <div className="mt-8 flex justify-end">
                  <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-amber-500/30">
                    <BadgeCheck className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-gray-300">
                      {language === 'en' ? 'ISO 9001 Certified' : 'ISO 9001 tanúsított'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern wavy divider instead of the triangle 
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"></path>
        </svg>
      </div>*/}
    </section>
  );
};

export default MaterialSelectionCallout;
