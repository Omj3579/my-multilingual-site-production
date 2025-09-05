import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  CircleDot, 
  Recycle, 
  Leaf, 
  Droplet, 
  Zap, 
  PackageCheck, 
  Truck, 
  BookOpen, 
  Factory,
  BarChart3 
} from 'lucide-react';

const SustainableCycleSection = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: Recycle,
      title: language === 'en' ? 'Recycle and Restore' : 'Újrahasznosítás és Helyreállítás',
      description: language === 'en' 
        ? 'Converting waste into reusable materials and restoring ecological balance.'
        : 'A hulladék újrahasznosítható anyagokká alakítása és az ökológiai egyensúly helyreállítása.'
    },
    {
      icon: Leaf,
      title: language === 'en' ? 'Utilize Bio-Based Materials' : 'Bio-alapú Anyagok Használata',
      description: language === 'en'
        ? 'Incorporating renewable and biodegradable materials in our production.'
        : 'Megújuló és biológiailag lebomló anyagok beépítése a gyártásunkba.'
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Promote Renewable Energy Use' : 'Megújuló Energia Használatának Előmozdítása',
      description: language === 'en'
        ? 'Transitioning to cleaner, sustainable energy sources throughout operations.'
        : 'Tisztább, fenntarthatóbb energiaforrásokra való áttérés a működés minden területén.'
    },
    {
      icon: Droplet,
      title: language === 'en' ? 'Implement Water Conservation' : 'Vízmegőrzés Megvalósítása',
      description: language === 'en'
        ? 'Reducing water consumption and implementing recycling systems.'
        : 'A vízfogyasztás csökkentése és újrahasznosítási rendszerek bevezetése.'
    },
    {
      icon: Factory,
      title: language === 'en' ? 'Reprocess Production Waste' : 'Gyártási Hulladék Újrafeldolgozása',
      description: language === 'en'
        ? 'Minimizing waste by reintegrating production byproducts into manufacturing.'
        : 'A hulladék minimalizálása a gyártási melléktermékek újbóli felhasználásával.'
    },
    {
      icon: PackageCheck,
      title: language === 'en' ? 'Enhance Packaging Efficiency' : 'Csomagolási Hatékonyság Növelése',
      description: language === 'en'
        ? 'Designing packaging solutions that use fewer resources and generate less waste.'
        : 'Kevesebb erőforrást felhasználó és kevesebb hulladékot termelő csomagolási megoldások tervezése.'
    },
    {
      icon: Truck,
      title: language === 'en' ? 'Advance Sustainable Logistics' : 'Fenntartható Logisztika Fejlesztése',
      description: language === 'en'
        ? 'Optimizing transportation routes and methods to reduce carbon emissions.'
        : 'Szállítási útvonalak és módszerek optimalizálása a szén-dioxid-kibocsátás csökkentése érdekében.'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Foster Environmental Education' : 'Környezeti Oktatás Elősegítése',
      description: language === 'en'
        ? 'Promoting awareness and knowledge about sustainability practices.'
        : 'A fenntarthatósági gyakorlatokkal kapcsolatos tudatosság és ismeretek előmozdítása.'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Commit to Carbon Neutrality' : 'Elkötelezettség a Karbonsemlegesség Mellett',
      description: language === 'en'
        ? 'Working towards zero net carbon emissions across all operations.'
        : 'A nettó nulla szén-dioxid-kibocsátás elérése minden művelet során.'
    }
  ];

  const additionalPillars = [
    language === 'en' ? 'Conserve and Reutilize' : 'Megőrzés és Újrafelhasználás',
    language === 'en' ? 'Initiate Energy Optimization Programs' : 'Energiaoptimalizálási Programok Indítása',
    language === 'en' ? 'Develop Lightweight Solutions' : 'Könnyű Megoldások Fejlesztése',
    language === 'en' ? 'Incorporate Recycled Materials' : 'Újrahasznosított Anyagok Beépítése',
    language === 'en' ? 'Design for Repairability' : 'Javíthatóságra Tervezés',
    language === 'en' ? 'Innovate and Honor' : 'Innoválás és Tisztelet',
    language === 'en' ? 'Eliminate Inefficient Processes' : 'Nem Hatékony Folyamatok Megszüntetése',
    language === 'en' ? 'Support Environmental Initiatives' : 'Környezetvédelmi Kezdeményezések Támogatása',
    language === 'en' ? 'Develop Eco-Friendly Products' : 'Környezetbarát Termékek Fejlesztése',
    language === 'en' ? 'Enhance Resource Management' : 'Erőforrás-gazdálkodás Fejlesztése'
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Top gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white -z-10"></div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-100/30 to-green-200/20 -z-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-100/30 to-green-200/20 -z-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Title and Introduction */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              {/* Circular Economy Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex-shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-green-500/50 rounded-full blur-xl transform -rotate-12"></div>
                <div className="relative bg-white shadow-lg rounded-full p-2 border-2 border-green-100">
                  <img
                    src="https://flair-plastic.hu/wp-content/uploads/2024/04/rosti-circular-150x138.png.webp"
                    alt="Sustainability circular icon"
                    className="w-[120px] h-[120px] object-cover rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Title area */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
                >
                  {language === 'en'
                    ? <span>Flair–Plastic's Role in the <span className="text-green-600">Sustainable Cycle</span></span>
                    : <span>A Flair–Plastic Szerepe a <span className="text-green-600">Fenntartható Körforgásban</span></span>
                  }
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600"
                >
                  {language === 'en'
                    ? "We are dedicated to Enhancing Environmental Health for Tomorrow's World."
                    : "Elkötelezettek vagyunk a Holnap Világának Környezeti Egészségének Javítása mellett."}
                </motion.p>
              </div>
            </div>

            {/* Circular Economy Visual Representation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-green-100"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left content - circular visual */}
                <div className="md:w-2/5 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 flex items-center justify-center relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <pattern id="circularPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                      <rect x="0" y="0" width="100%" height="100%" fill="url(#circularPattern)" />
                    </svg>
                  </div>
                  
                  {/* Circular economy animation */}
                  <div className="relative">
                    <motion.svg 
                      width="240" 
                      height="240" 
                      viewBox="0 0 240 240"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="120" cy="120" r="110" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="120" cy="120" r="85" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
                      
                      {/* Circular economy elements */}
                      <g>
                        <circle cx="120" cy="35" r="12" fill="white" />
                        <circle cx="205" cy="120" r="12" fill="white" opacity="0.8" />
                        <circle cx="120" cy="205" r="12" fill="white" opacity="0.9" />
                        <circle cx="35" cy="120" r="12" fill="white" opacity="0.7" />
                      </g>
                      
                      {/* Connecting arrows */}
                      <path d="M120,47 A73,73 0 0,1 193,120" fill="none" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M193,120 A73,73 0 0,1 120,193" fill="none" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M120,193 A73,73 0 0,1 47,120" fill="none" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <path d="M47,120 A73,73 0 0,1 120,47" fill="none" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      
                      {/* Arrow marker definition */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                        </marker>
                      </defs>
                    </motion.svg>
                    
                    {/* Center recycle icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Recycle size={40} className="text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Right content - description */}
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">
                    {language === 'en' ? 'Embracing the Circular Economy' : 'A Körforgásos Gazdaság Elfogadása'}
                  </h3>
                  <div className="space-y-6 text-gray-700">
                    <p className="leading-relaxed">
                      {language === 'en'
                        ? "Within our sector, the transformation from a linear to a circular economy is becoming increasingly prominent, where the choice of materials and the recyclability of products at their life's end are becoming pivotal elements of our sustainability plan. At Flair-Plastic, we perform meticulous evaluations of new products right from the conceptual phase, ensuring they are aligned with the principles of the circular economy."
                        : "Szektorunkban egyre hangsúlyosabbá válik a lineáris gazdaságról a körforgásos gazdaságra való áttérés, ahol az anyagválasztás és a termékek életciklus végi újrahasznosíthatósága fenntarthatósági tervünk kulcsfontosságú elemévé válik. A Flair-Plastic-nál már a koncepciós fázistól kezdve gondosan értékeljük az új termékeket, biztosítva, hogy összhangban legyenek a körforgásos gazdaság elveivel."}
                    </p>
                    <p className="leading-relaxed">
                      {language === 'en'
                        ? "Our conviction in transitioning to a circular economy is profound, and it propels our collaborations with innovative material developers, machine manufacturers, and our clients to benefit both our community and the Earth. This commitment is deeply embedded in our ethos of collaboration and honesty."
                        : "A körforgásos gazdaságra való áttérésbe vetett meggyőződésünk mély, és ez hajtja együttműködésünket az innovatív anyagfejlesztőkkel, gépgyártókkal és ügyfeleinkkel, hogy mind közösségünk, mind a Föld javát szolgálja. Ez az elkötelezettség mélyen beágyazódott az együttműködés és őszinteség etoszunkba."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Image Section - enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[21/9] relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000"
                alt="Sustainability in Nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {language === 'en' ? 'Our Environmental Vision' : 'Környezetvédelmi Jövőképünk'}
                </h3>
                <p className="text-white/90">
                  {language === 'en'
                    ? "At Flair-Plastic, we believe in a future where industrial manufacturing and environmental stewardship work in harmony, creating sustainable solutions for generations to come."
                    : "A Flair-Plastic-nál hiszünk egy olyan jövőben, ahol az ipari gyártás és a környezetvédelem harmóniában működik, fenntartható megoldásokat teremtve az elkövetkező generációk számára."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section - Key Pillars */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                {language === 'en' ? 'SUSTAINABILITY FRAMEWORK' : 'FENNTARTHATÓSÁGI KERETRENDSZER'}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {language === 'en'
                  ? "Key Pillars of Our Sustainability Framework"
                  : "Fenntarthatósági Keretrendszerünk Fő Pillérei"}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en'
                  ? "Our sustainability initiatives are designed to be impactful and comprehensive, encompassing the following key areas:"
                  : "Fenntarthatósági kezdeményezéseink hatékonyak és átfogóak, a következő kulcsterületeket ölelik fel:"}
              </p>
            </motion.div>

            {/* Featured Pillars in Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group"
                >
                  <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 rounded-full p-3 group-hover:bg-green-200 transition-colors">
                        <pillar.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{pillar.title}</h4>
                        <p className="text-gray-600">{pillar.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Pillars in More Compact Format */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-6">
                {language === 'en'
                  ? "Additional Sustainability Initiatives"
                  : "További Fenntarthatósági Kezdeményezések"}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {additionalPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CircleDot className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{pillar}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Bottom commitment banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full shadow-lg">
              <Leaf className="w-5 h-5 mr-2" />
              <span className="font-medium">
                {language === 'en'
                  ? "Committed to a sustainable future, one innovation at a time"
                  : "Elkötelezettek vagyunk a fenntartható jövő mellett, egy innováció után a másikkal"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainableCycleSection;
