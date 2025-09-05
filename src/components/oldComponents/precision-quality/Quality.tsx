import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, ArrowRight, BadgeCheck } from 'lucide-react';

const Quality = () => {
  const { language } = useLanguage();

  const qualityFeatures = [
    {
      icon: Shield,
      title: language === 'en' ? 'Rigorous Standards' : 'Szigorú előírások',
      description: language === 'en' 
        ? 'We follow strict guidelines and maintain international accreditations from respected organizations.'
        : 'Szigorú irányelveket követünk és nemzetközi akkreditációkkal rendelkezünk elismert szervezetektől.'
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Continuous Improvement' : 'Folyamatos fejlesztés',
      description: language === 'en'
        ? 'Our quality processes are constantly refined to deliver increasingly better results.'
        : 'Minőségi folyamatainkat folyamatosan finomítjuk, hogy egyre jobb eredményeket érjünk el.'
    },
    {
      icon: Award,
      title: language === 'en' ? 'Excellence Commitment' : 'Kiválósági elkötelezettség',
      description: language === 'en'
        ? 'Every product represents our unwavering dedication to superior craftsmanship.'
        : 'Minden termék a kiváló minőség iránti rendíthetetlen elkötelezettségünket képviseli.'
    }
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white"></div>
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="quality-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#quality-grid)" />
        </svg>
      </div>
      
      {/* Blue circle background decoration */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-50 to-transparent opacity-70 -z-10 blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with overlapping elements */}
          <div className="relative mb-24">
            {/* Top blue line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-500 mb-8"
            />
            
            {/* Category tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600 mb-6"
            >
              {language === 'en' ? 'Quality Philosophy' : 'Minőségi filozófia'}
            </motion.span>
            
            {/* Main Heading - with blue highlights */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl"
            >
              {language === 'en' ? (
                <>
                  Commitment to <span className="text-blue-700">Excellence</span>: Our{" "}
                  <span className="text-blue-700">Quality Assurance Promise</span>
                </>
              ) : (
                <>
                  Elkötelezettség a <span className="text-blue-700">kiválóság</span> iránt: A mi{" "}
                  <span className="text-blue-700">minőségbiztosítási ígéretünk</span>
                </>
              )}
            </motion.h2>
          </div>

          {/* Main content with layered, overlapping design */}
          <div className="relative">
            {/* Left Content Area - Main Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 max-w-2xl z-20 relative mb-12 md:mb-0"
            >
              {/* Blue accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-t-xl"></div>
              
              {/* Main paragraph */}
              <div className="mb-8 text-gray-700 leading-relaxed">
                <p className="mb-4">
                  {language === 'en'
                    ? "At Flair–Plastic, we firmly believe that our steadfast commitment to quality is fundamental to our success. We are dedicated to manufacturing products that are not only safe and reliable but also align with the highest industry standards through socially and environmentally responsible practices."
                    : "A Flair–Plastic-nél határozottan hisszük, hogy minőség iránti elkötelezettségünk alapvető fontosságú sikerünkhöz. Elkötelezettek vagyunk olyan termékek gyártása mellett, amelyek nemcsak biztonságosak és megbízhatóak, hanem a legmagasabb iparági szabványoknak is megfelelnek a társadalmilag és környezetileg felelősségteljes gyakorlatok révén."}
                </p>
                <p>
                  {language === 'en'
                    ? "To consistently achieve and uphold these standards, we operate under strict guidelines and maintain accreditations from respected international and national organizations."
                    : "Ezeknek a szabványoknak a következetes elérése és fenntartása érdekében szigorú irányelvek alapján működünk, és elismert nemzetközi és nemzeti szervezetektől akkreditációkkal rendelkezünk."}
                </p>
              </div>

              {/* Quote box with special styling */}
              <div className="relative bg-blue-50 rounded-lg p-6 mb-10 border-l-4 border-blue-400">
                <div className="absolute -top-3 -left-3 bg-blue-500 rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic">
                  {language === 'en'
                    ? "Delivering superior products and services is a source of great pride for us at Flair–Plastic. Our robust quality systems are key to consistently ensuring excellent products every time."
                    : "Kiváló minőségű termékek és szolgáltatások szállítása büszkeséggel tölt el minket a Flair–Plastic-nél. Robusztus minőségi rendszereink kulcsfontosságúak a kiváló termékek folyamatos biztosításához."}
                </p>
              </div>

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-start"
              >
                <a
                  href="/quote"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <span>{language === 'en' ? 'Request a Quality Consultation' : 'Kérjen minőségi konzultációt'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right floating card - overlapping with main content container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative md:absolute top-0 right-0 md:w-[600px] md:-mr-4 md:mt-16 z-10"
            >
              {/* Image container with fancy border and effects */}
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-br from-blue-100/70 to-sky-100/70 rounded-2xl rotate-3"></div>
                
                {/* Main image */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white z-10">
                  <img
                    src="https://flair-plastic.hu/wp-content/uploads/2024/05/ImgCreator.ai-Image-of-a-quality-control-inspector-in-a-lab-coat-examining-a-white-plastic-de-vice.-The-device-feat.png.webp"
                    alt={language === 'en' ? 'Quality Control at Flair-Plastic' : 'Minőségellenőrzés a Flair-Plastic-nél'}
                    className="w-full h-[400px] object-cover"
                  />
                  
                  {/* ISO Badge - positioned absolutely over the image */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <div className="bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="font-bold text-xl">ISO</span>
                    </div>
                  </div>
                  
                  {/* Certification floating tag */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-[260px] border border-white">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                        <BadgeCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {language === 'en' ? 'Quality Certified' : 'Minőség tanúsított'}
                        </h4>
                        <p className="text-sm text-gray-700 mt-1">
                          {language === 'en' 
                            ? 'Our processes meet the highest international standards'
                            : 'Folyamataink megfelelnek a legmagasabb nemzetközi szabványoknak'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Feature cards row - below both main content areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 md:mt-40"
          >
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality;

