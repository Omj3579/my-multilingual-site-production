// This should be placed in a new file first to avoid any hidden characters
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';

const AssemblySection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative font-sans text-gray-800 overflow-hidden">
      {/* Decorative elements - client-side only */}
      {isMounted && (
        <>
          <div className="absolute left-[15%] top-[15%] h-96 w-96 rounded-full bg-gradient-radial from-blue-50/30 to-transparent blur-3xl"></div>
          <div className="absolute right-[10%] bottom-[30%] h-80 w-80 rounded-full bg-gradient-radial from-amber-50/20 to-transparent blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="assembly-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#assembly-grid)" />
            </svg>
          </div>
        </>
      )}
      
      {/* First Section - Integration */}
      <div className="relative z-10 bg-gradient-to-b from-[#f8f9fc] to-white pt-20 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <span className="text-sm uppercase tracking-wider font-medium text-blue-600 mb-3 block">
              {language === 'en' ? 'Working Together' : 'Együttműködés'}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              {language === 'en' ? (
                <div className="leading-tight">
                  Integrate Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Production Workflow</span>
                  <div>with Flair-Plastic</div>
                </div>
              ) : (
                <div className="leading-tight">
                  Integrálja a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Gyártási Folyamatát</span>
                  <div>a Flair-Plastic-kel</div>
                </div>
              )}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-1"></div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-11 space-y-6"
            >
              <p className="text-lg text-gray-800 leading-relaxed font-semibold">
                {language === 'en'
                  ? "Our proficiency goes well beyond injection moulding. By partnering with Flair-Plastic across the full production cycle, we can enhance value at every stage."
                  : "Szakértelmünk messze túlmutat a fröccsöntésen. A Flair-Plastic-kel való együttműködés során a teljes gyártási ciklusban értéket teremtünk minden szakaszban."}
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {language === 'en'
                  ? "When Flair-Plastic manages both moulding and final assembly, we streamline your supply chain and boost efficiency. By integrating these stages of production, we can approach your projects with greater flexibility, minimizing waste and enhancing profit margins."
                  : "Amikor a Flair-Plastic kezeli mind a fröccsöntést, mind a végső összeszerelést, optimalizáljuk az ellátási láncot és növeljük a hatékonyságot. A gyártási szakaszok integrálásával nagyobb rugalmassággal közelíthetjük meg projektjeit, minimalizálva a hulladékot és növelve a profitot."}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative max-w-[1200px] mx-auto mt-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative rounded-[30px] overflow-hidden shadow-xl"
          >
            {!videoPlaying && (
              <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-10"
                onClick={() => setVideoPlaying(true)}
              >
                <div className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all transform hover:scale-105">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-white font-medium mt-4 text-xl">
                  {language === 'en' ? 'Watch Assembly Process' : 'Összeszerelési folyamat megtekintése'}
                </p>
              </div>
            )}
            
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/h0gnHvFlSq0?rel=0&autoplay=${videoPlaying ? 1 : 0}&modestbranding=1`}
                title={language === 'en' ? "Flair-Plastic Assembly Video" : "Flair-Plastic Összeszerelési Videó"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Section - Capabilities */}
      <div className="relative z-10 bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-12"
          >
            <span className="text-sm uppercase tracking-wider font-medium text-blue-600 mb-3 block">
              {language === 'en' ? 'Our Approach' : 'Megközelítésünk'}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              {language === 'en' ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Advancement</span> and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Superiority</span> in Assembly
                </>
              ) : (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Fejlődés</span> és{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Kiválóság</span> az Összeszerelésben
                </>
              )}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-1"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-11"
            >
              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {language === 'en' 
                    ? "At Flair-Plastic, our expertise and capabilities span manual, semi-automated, and fully automated assembly lines and cells, tailored to the specific requirements of your project."
                    : "A Flair-Plastic-nél szakértelmünk és képességeink kiterjednek a kézi, félautomata és teljesen automatizált szerelősorokra és cellákra, az Ön projektjének speciális követelményeihez igazítva."}
                </p>
              </div>
              
              {/* Key features cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {[
                  {
                    title: language === 'en' ? 'Lean Management' : 'Lean Menedzsment',
                    description: language === 'en'
                      ? "We adhere to lean principles, focusing on continuous improvement and waste reduction."
                      : "Követjük a lean elveket, a folyamatos fejlesztésre és hulladékcsökkentésre összpontosítva."
                  },
                  {
                    title: language === 'en' ? 'Cutting-edge Technology' : 'Élvonalbeli technológia',
                    description: language === 'en'
                      ? "We utilize advanced assembly technologies to produce products efficiently and sustainably."
                      : "Fejlett összeszerelési technológiákat alkalmazunk a termékek hatékony és fenntartható előállításához."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-12 flex flex-wrap justify-start gap-6"
              >
                <a 
                  href={language === 'en' ? '/contact' : '/kapcsolat'}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors group"
                >
                  <span>{language === 'en' ? 'Contact Our Team' : 'Kapcsolat Felvétele'}</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a 
                  href={language === 'en' ? '/capabilities' : '/kepessegek'} 
                  className="inline-flex items-center px-6 py-3 border border-blue-200 bg-transparent hover:bg-blue-50 text-blue-600 rounded-full transition-colors group"
                >
                  <span>{language === 'en' ? 'Explore Our Services' : 'Fedezze Fel Szolgáltatásainkat'}</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssemblySection;