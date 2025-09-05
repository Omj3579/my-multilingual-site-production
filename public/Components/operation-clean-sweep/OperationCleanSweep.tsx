import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle, Trash2, Droplet, ArrowRight, BarChart2 } from 'lucide-react';
import Image from 'next/image';

const OperationCleanSweep = () => {
  const { language } = useLanguage();

  // List of key commitments
  const commitmentPoints = [
    {
      icon: CheckCircle,
      title: language === 'en' ? 'Prevention' : 'Megelőzés',
      description: language === 'en' 
        ? 'Implementing rigorous controls to prevent pellet, flake, and powder loss'
        : 'Szigorú ellenőrzések bevezetése a szemcsék, pelyhek és porveszteség megelőzésére'
    },
    {
      icon: Trash2,
      title: language === 'en' ? 'Containment' : 'Elszigetelés',
      description: language === 'en'
        ? 'Ensuring proper containment systems to capture materials'
        : 'Megfelelő elszigetelő rendszerek biztosítása az anyagok felfogására'
    },
    {
      icon: Droplet,
      title: language === 'en' ? 'Cleanup' : 'Takarítás',
      description: language === 'en'
        ? 'Regular and thorough cleaning procedures in all operational areas'
        : 'Rendszeres és alapos takarítási eljárások minden működési területen'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract wave pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.05]">
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q200,150 400,100 Q600,50 800,100 T1200,100 T1600,100 T2000,100 V800 H0 Z" 
                  fill="none" stroke="#0066cc" strokeWidth="2" />
            <path d="M0,200 Q200,250 400,200 Q600,150 800,200 T1200,200 T1600,200 T2000,200 V800 H0 Z" 
                  fill="none" stroke="#0066cc" strokeWidth="2" />
            <path d="M0,300 Q200,350 400,300 Q600,250 800,300 T1200,300 T1600,300 T2000,300 V800 H0 Z" 
                  fill="none" stroke="#0066cc" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Subtle floating pellet dots */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Left content column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5"
            >
              {/* OCS Logo and Title */}
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="https://opcleansweep.org/wp-content/uploads/2024/08/cropped-OCSLogo@3x-1.png"
                  alt="Operation Clean Sweep Logo"
                  width={120}
                  height={64}
                  className="h-16 w-auto"
                />
                {/*<div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    {language === 'en' ? 'Operation Clean Sweep' : 'Tiszta Söprés Művelet'}
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 mt-2"></div>
                </div>*/}
              </div>

              {/* Introduction */}
              <div className="space-y-6 mb-10">
                <p className="text-xl font-medium text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? 'Flair-Plastic proudly participates in Operation Clean Sweep (OCS), committing to the comprehensive elimination of resin pellet, flake, and powder loss in our operations.'
                    : 'A Flair-Plastic büszkén vesz részt a Tiszta Söprés Műveletben (OCS), elkötelezve magát a gyantaszemcsék, pelyhek és porveszteség teljes körű megszüntetése mellett a működésünk során.'}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {language === 'en'
                    ? 'This is a challenging objective, yet we are fully aware of the potential harm that plastics can inflict on the natural environment. Committed to responsible management, Flair-Plastic ensures thorough handling of resin pellets.'
                    : 'Ez egy kihívást jelentő célkitűzés, de teljes mértékben tisztában vagyunk azzal, hogy a műanyagok milyen potenciális kárt okozhatnak a természeti környezetben. A felelős gazdálkodás iránt elkötelezve a Flair-Plastic biztosítja a gyantaszemcsék alapos kezelését.'}
                </p>
              </div>

              {/* Key Commitments */}
              <div className="space-y-6 mb-10">
                <h3 className="text-2xl font-bold text-gray-800">
                  {language === 'en' ? 'Our OCS Commitment' : 'OCS Elkötelezettségünk'}
                </h3>
                
                <div className="space-y-5">
                  {commitmentPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                        <point.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{point.title}</h4>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quote/Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-start">
                  <div className="text-5xl font-serif text-blue-300 leading-none">"</div>
                  <div className="ml-2">
                    <p className="text-lg leading-relaxed">
                      {language === 'en' 
                        ? 'We recognize our responsibility to ensure that plastic resin pellets from our facility do not end up in the natural environment, and we are committed to implementing systematic changes to achieve zero pellet loss.'
                        : 'Felismerjük felelősségünket annak biztosítására, hogy a létesítményünkben található műanyag gyantaszemcsék ne kerüljenek a természeti környezetbe, és elkötelezettek vagyunk a rendszerszintű változtatások mellett a nulla szemcseveszteség elérése érdekében.'}
                    </p>
                    <p className="mt-4 text-blue-200 font-medium">— Flair-Plastic Leadership Team</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right content column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 flex flex-col gap-8"
            >
              {/* Main image in modern presentation */}
              <div className="relative">
                {/* Background shade */}
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-blue-100 rounded-3xl transform rotate-3 z-0"></div>
                
                {/* Primary image */}
                <div className="relative bg-white p-3 rounded-2xl shadow-xl z-10">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="https://flair-plastic.hu/wp-content/uploads/2024/05/individual-engaged-in-a-hands-on-environmental-conservation-effort.-The-man-.png.webp"
                      alt={language === 'en' ? "Environmental Conservation Effort" : "Környezetvédelmi Erőfeszítés"}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 bg-white rounded-full p-2 shadow-lg z-20">
                  <div className="bg-blue-500 rounded-full p-2">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Pellet prevention stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  {language === 'en' ? 'Environmental Impact of Pellet Loss' : 'A Szemcseveszteség Környezeti Hatása'}
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">80%</div>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'of ocean plastic comes from land-based sources'
                        : 'az óceáni műanyag szárazföldi forrásból származik'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">230K</div>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'tons of pellets enter oceans annually'
                        : 'tonna szemcse kerül évente az óceánokba'}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">100%</div>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'preventable with proper containment'
                        : 'megelőzhető megfelelő elszigetelés esetén'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <a 
                  href="https://www.opcleansweep.org/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <span>
                    {language === 'en' ? 'Learn more about Operation Clean Sweep' : 'Tudjon meg többet a Tiszta Söprés Műveletről'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationCleanSweep;

