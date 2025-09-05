import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart2, Search, Filter, RotateCw, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const OperationCleanSweepSection = () => {
  const { language } = useLanguage();

  // Implementation steps with icons
  const implementationSteps = [
    {
      icon: Filter,
      title: language === 'en' ? 'Drainage Protection' : 'Lefolyóvédelem',
      description: language === 'en' 
        ? 'Steel mesh grids installed on all factory drains to prevent pellets from entering waterways'
        : 'Minden gyári lefolyóra acélháló rácsok felszerelése a szemcsék vízutakba jutásának megakadályozására'
    },
    {
      icon: Search,
      title: language === 'en' ? 'Regular Inspections' : 'Rendszeres Ellenőrzések',
      description: language === 'en'
        ? 'Weekly inspections of all drains to ensure they remain unobstructed and effective'
        : 'A lefolyók heti ellenőrzése annak biztosítására, hogy akadálymentesek és hatékonyak maradjanak'
    },
    {
      icon: AlertTriangle,
      title: language === 'en' ? 'Incident Investigation' : 'Incidens Kivizsgálás',
      description: language === 'en'
        ? 'Prompt investigation when pellet accumulation is detected to identify the source'
        : 'Azonnali kivizsgálás, ha szemcsefelgyülemlést észlelünk, a forrás azonosítása érdekében'
    },
    {
      icon: RotateCw,
      title: language === 'en' ? 'Corrective Measures' : 'Korrekciós Intézkedések',
      description: language === 'en'
        ? 'Implementation of corrective actions to address the root causes of pellet loss'
        : 'Korrekciós intézkedések bevezetése a szemcsevesztés alapvető okainak kezelésére'
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Abstract pellet pattern */}
        <div className="absolute w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%">
            <pattern id="pelletPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pelletPattern)" />
          </svg>
        </div>
        
        {/* Blue wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-blue-50/30">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top section with title and stats */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              {/* Section title with accent */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <ShieldCheck size={16} className="mr-2" />
                  <span>{language === 'en' ? 'PREVENTION STRATEGY' : 'MEGELŐZÉSI STRATÉGIA'}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {language === 'en' ? (
                    <>Implementing <span className="text-blue-600">effective measures</span> to eradicate pellet loss</>
                  ) : (
                    <>Hatékony <span className="text-blue-600">intézkedések bevezetése</span> a szemcseveszteség felszámolására</>
                  )}
                </h2>
              </div>

              {/* Main content paragraphs */}
              <div className="space-y-6 text-lg text-gray-600">
                <p className="leading-relaxed">
                  {language === 'en'
                    ? 'A single kilogram of resin comprises approximately 40,000 pellets, and with Flair-Plastic utilizing around 30,000 tons of pellets annually, ensuring accountability for every pellet we use demands significant dedication.'
                    : 'Egy kilogramm gyanta körülbelül 40 000 szemcsét tartalmaz, és mivel a Flair-Plastic évente körülbelül 30 000 tonna szemcsét használ fel, minden egyes szemcse elszámoltathatóságának biztosítása jelentős elkötelezettséget igényel.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'en'
                    ? 'One of our initial actions involved equipping every factory drain with steel mesh grids to block loose pellets from entering the aquatic ecosystem. We conduct weekly inspections of these drains to ensure they remain unobstructed. If a substantial amount of pellets is discovered, we promptly investigate to determine the source and implement corrective measures.'
                    : 'Egyik első intézkedésünk az volt, hogy minden gyári lefolyót acélháló rácsokkal szereltünk fel, hogy megakadályozzuk a laza szemcsék bejutását a vízi ökoszisztémába. Heti rendszerességgel ellenőrizzük ezeket a lefolyókat, hogy biztosítsuk, akadálymentesek maradnak. Ha jelentős mennyiségű szemcsét fedezünk fel, azonnal kivizsgáljuk a forrás meghatározása és a korrekciós intézkedések bevezetése érdekében.'}
                </p>
              </div>
            </motion.div>

            {/* Right stats column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex flex-col gap-6"
            >
              {/* Stats card */}
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <BarChart2 size={24} className="text-white" />
                    <h3 className="text-xl font-bold text-white">
                      {language === 'en' ? 'Pellet Management Scale' : 'Szemcse Kezelési Skála'}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Stat 1 */}
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-4xl font-bold text-blue-700 mb-1">40,000</div>
                      <div className="text-gray-600 text-sm">
                        {language === 'en' ? 'Pellets per kilogram of resin' : 'Szemcse gyantakilogrammonként'}
                      </div>
                    </div>
                    
                    {/* Stat 2 */}
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-4xl font-bold text-blue-700 mb-1">30,000</div>
                      <div className="text-gray-600 text-sm">
                        {language === 'en' ? 'Tons of pellets used annually' : 'Tonna szemcse évente felhasználva'}
                      </div>
                    </div>
                    
                    {/* Stat 3 */}
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-4xl font-bold text-blue-700 mb-1">100%</div>
                      <div className="text-gray-600 text-sm">
                        {language === 'en' ? 'Drainage protection coverage' : 'Lefolyó védelmi lefedettség'}
                      </div>
                    </div>
                    
                    {/* Stat 4 */}
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-4xl font-bold text-blue-700 mb-1">Weekly</div>
                      <div className="text-gray-600 text-sm">
                        {language === 'en' ? 'Drain inspection frequency' : 'Lefolyó ellenőrzési gyakoriság'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual representation */}
              <div className="relative rounded-xl overflow-hidden" style={{ maxHeight: "180px" }}>
                <Image 
                  src="/images/drainagemesh.jpeg"
                  alt={language === 'en' ? "Drain protection system" : "Lefolyóvédelmi rendszer"}
                  width={600}
                  height={180}
                  className="w-full object-cover rounded-xl"
                  style={{ maxHeight: "180px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">
                    {language === 'en' ? 'Steel mesh grid for pellet capture installed on factory drain' : 'Acélháló rács a szemcsék befogására gyári lefolyón'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Implementation steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                {language === 'en' ? 'Our Implementation Process' : 'Megvalósítási Folyamatunk'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {implementationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Connection lines between steps */}
                    {index < implementationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-blue-100 z-0">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                      </div>
                    )}
                    
                    <div className="bg-blue-50 rounded-xl p-6 h-full relative z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-4">
                        <step.icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg">
              <p className="text-lg font-medium">
                {language === 'en' 
                  ? "Every pellet matters in our commitment to environmental protection"
                  : "Minden szemcse számít a környezetvédelem iránti elkötelezettségünkben"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperationCleanSweepSection;
