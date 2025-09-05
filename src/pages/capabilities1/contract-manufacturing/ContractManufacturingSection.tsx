import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SplitBackground from '@/components/ui/split-background';
import { ArrowRight } from 'lucide-react';

const ContractManufacturingSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px 0px" });
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1.05]);
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  
  // Process steps for the journey path
  const processSteps = language === 'en' 
    ? ["Concept", "Design", "Prototyping", "Production", "Delivery"] 
    : ["Koncepció", "Tervezés", "Prototípus", "Gyártás", "Szállítás"];

  return (
    <SplitBackground
      topColor="bg-[#ebebeb]"
      bottomColor="#ffffff"
      topHeight="62%"
      className="font-sans text-[#333]"
    >
      <section 
        ref={sectionRef} 
        className="relative py-20 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-amber-100/20 to-transparent blur-md hidden md:block"
            style={{ y }}
          />
          <motion.div 
            className="absolute top-40 right-[15%] w-24 h-24 border-2 border-dashed border-amber-200/40 rounded-full hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          
          {/* New decorative element */}
          <motion.div
            className="absolute bottom-[30%] left-[5%] h-64 w-64 bg-gradient-radial from-amber-50/20 to-transparent blur-xl hidden lg:block"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Technical pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Enhanced title with gradient highlight */}
          <div className="mb-16">
            <motion.div 
              className="inline-flex mb-6 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-amber-500 mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium uppercase tracking-wider text-gray-700">
                {language === 'en' ? 'Our Process' : 'Folyamatunk'}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {language === 'en' ? (
                <>
                  From <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Idea</span> to{' '}
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Implementation</span>
                </>
              ) : (
                <>
                  Az <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">ötlettől</span> a{' '}
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">megvalósításig</span>
                </>
              )}
            </motion.h2>
          </div>

          {/* Visual process journey - new element */}
          <div className="mb-20 hidden md:block relative">
            <motion.div 
              className="relative h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Path connecting steps */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
                <motion.path 
                  d="M0,50 C250,0 350,100 500,50 C650,0 750,100 1000,50" 
                  stroke="#f59e0b" 
                  strokeWidth="2" 
                  strokeDasharray="1 8"
                  style={{ pathLength, pathOffset: 0 }}
                  className="opacity-70"
                />
              </svg>
              
              {/* Steps along the path */}
              <div className="flex justify-between w-full absolute inset-0">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-lg mb-2"
                      whileHover={{ scale: 1.1, backgroundColor: '#fef3c7' }}
                      animate={isInView && { 
                        scale: index === 0 ? [1, 1.2, 1] : 1,
                      }}
                      transition={index === 0 ? { 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatDelay: 5
                      } : {}}
                    >
                      <span className="text-amber-600 font-semibold">{index + 1}</span>
                    </motion.div>
                    <span className="text-sm font-medium text-gray-800">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main content with enhanced styling */}
          <div ref={contentRef} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left column - primary content */}
              <motion.div 
                className="lg:col-span-7 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 40 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  transform: "perspective(1000px)",
                  rotateX: rotate,
                  scale
                }}
              >
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? "With decades of experience and continual innovation, Flair-Plastic offers cutting-edge technology for injection moulding projects globally. Beyond that, we offer a comprehensive suite of services that encompasses managed and contract manufacturing, from the initial product concept and design to logistics and delivery."
                      : "Több évtizedes tapasztalattal és folyamatos innovációval a Flair-Plastic élvonalbeli technológiát kínál fröccsöntési projektekhez világszerte. Ezen túlmenően átfogó szolgáltatáscsomagot kínálunk, amely magában foglalja az irányított és szerződéses gyártást, a kezdeti termékkoncepciótól és tervezéstől kezdve a logisztikáig és szállításig."}
                  </p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-70" />
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? "Our extensive capabilities enable us to support you at every manufacturing stage. Get in touch to discover how we can assist with your contract manufacturing requirements."
                      : "Kiterjedt képességeink lehetővé teszik, hogy a gyártás minden szakaszában támogassuk Önt. Vegye fel velünk a kapcsolatot, hogy felfedezze, hogyan segíthetünk szerződéses gyártási igényeivel."}
                  </p>
                  
                  {/* Call to action button */}
                  <motion.div
                    className="flex justify-end pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: contentInView ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href={language === 'en' ? '/en/contact' : '/hu/kapcsolat'}
                      className="flex items-center gap-2 text-amber-600 font-medium group"
                      whileHover={{ x: 5 }}
                    >
                      <span>
                        {language === 'en' ? 'Learn more about our process' : 'Tudjon meg többet folyamatunkról'}
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right column - testimonial-style highlight */}
              <motion.div 
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: contentInView ? 1 : 0, x: contentInView ? 0 : 40 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Quote mark decoration */}
                <div className="absolute -top-10 -left-6 text-[120px] font-serif text-amber-200 opacity-80 select-none">
                  "
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg border border-amber-100 relative z-10">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    {language === 'en'
                      ? "At Flair-Plastic, we have strategically guided our growth over the past three decades to maintain our flexibility and accessibility in contract manufacturing. This deliberate approach has enabled us to successfully deliver projects to both small enterprises and some of the world's largest corporations with pride."
                      : "A Flair-Plastic-nél az elmúlt három évtizedben stratégiailag irányítottuk növekedésünket, hogy megőrizzük rugalmasságunkat és hozzáférhetőségünket a szerződéses gyártásban. Ez a tudatos megközelítés lehetővé tette számunkra, hogy büszkén teljesítsünk projekteket mind kis vállalkozások, mind a világ legnagyobb vállalatai számára."}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="font-bold text-amber-700">FP</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {language === 'en' ? 'Flair-Plastic Team' : 'Flair-Plastic Csapat'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? '30+ Years of Excellence' : '30+ év kiválóság'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced expertise section */}
          <motion.div 
            className="mt-28 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              {language === 'en' ? (
                <>
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Flexibility, Reliability,</span>{' '}
                  and Unrivalled{' '}            
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Expertise</span>
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Rugalmasság, Megbízhatóság,</span>{' '}
                  és Páratlan{' '}            
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Szakértelem</span>
                </>
              )}
            </h2>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[1, 2, 3, 4].map((item) => {
                // Define the features
                const feature = language === 'en'
                  ? [
                      { title: "Global Reach", desc: "Manufacturing partner for businesses worldwide" },
                      { title: "Technical Expertise", desc: "Specialized knowledge across various industries" },
                      { title: "Customization", desc: "Tailored manufacturing solutions for unique needs" },
                      { title: "Dedicated Support", desc: "Team committed to your project's success" }
                    ][item - 1]
                  : [
                      { title: "Globális Jelenlét", desc: "Gyártópartner vállalkozások számára világszerte" },
                      { title: "Műszaki Szakértelem", desc: "Specializált tudás különböző iparágakban" },
                      { title: "Testreszabás", desc: "Egyedi igényekre szabott gyártási megoldások" },
                      { title: "Elkötelezett Támogatás", desc: "Csapat, amely elkötelezett projektje sikere mellett" }
                    ][item - 1];
                
                return (
                  <motion.div
                    key={item}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + item * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 mb-4 flex items-center justify-center">
                      <span className="text-amber-700 font-semibold">{item}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Bottom paragraph */}
            <motion.div 
              className="bg-gradient-to-br from-amber-50/50 to-white p-6 md:p-8 rounded-2xl border border-amber-100/80 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? "Whether you're launching a new venture, scaling up your production capacities, contemplating a move of your manufacturing base, or in need of a strategic partner to tackle specific operational challenges, Flair-Plastic is here to support you. With our dedicated team, you'll benefit from unparalleled flexibility, reliability, and a wealth of experience that spans various industries."
                    : "Akár új vállalkozást indít, bővíti termelési kapacitásait, fontolgatja gyártóbázisának áthelyezését, vagy stratégiai partnerre van szüksége konkrét működési kihívások kezeléséhez, a Flair-Plastic itt van, hogy támogassa Önt. Elkötelezett csapatunkkal páratlan rugalmasságot, megbízhatóságot és számos iparágat átfogó gazdag tapasztalatot kap."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SplitBackground>
  );
};

export default ContractManufacturingSection;
