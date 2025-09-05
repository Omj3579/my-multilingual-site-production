import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useAnimation } from 'framer-motion';
import { useInViewAnimation, useMouseInteraction } from './shared/hooks';
import { FeatureCardComponent } from './shared/FeatureCard';
import { ProcessTimeline } from './shared/ProcessTimeline';
import { SectionHeader } from './shared/SectionHeader';
import { BackgroundPattern } from './shared/BackgroundPattern';
import { containerVariants, itemVariants } from './shared/animations';
import { injectionMoldingFeatures, injectionMoldingProcess } from './shared/constants';
import { ComponentProps, defaultComponentProps } from './shared/types';

const InjectionMouldingDetails: React.FC<ComponentProps> = (props = {}) => {
  const { language } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInViewAnimation();
  const { parallaxX, parallaxY } = useMouseInteraction();
  
  // Merge props with defaults
  const mergedProps = { ...defaultComponentProps, ...props };
  
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const featureCards = injectionMoldingFeatures[language];
  const processSteps = injectionMoldingProcess[language];

  return (
    <BackgroundPattern
      pattern="mesh"
      className="w-full text-[#333] font-sans"
      style={{
        marginTop: `-${mergedProps.moveUp}px`,
        marginBottom: `${mergedProps.moveDown}px`,
        position: 'relative',
      }}
    >
      {/* Floating interactive elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-200/30 blur-xl"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      />
      
      <div className="relative z-10 pt-[180px] pb-20">
        <motion.div
          ref={ref}
          className="mx-auto max-w-[1220px] px-5 md:px-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <SectionHeader
            subtitle={language === 'en' ? "Technology Capabilities" : "Technológiai Képességek"}
            title={language === 'en' ? "Advanced Injection Molding" : "Fejlett Fröccsöntés"}
            description={language === 'en'
              ? "At Flair-Plastic, we combine advanced technology with decades of expertise to deliver exceptional plastic injection molding solutions. Our state-of-the-art facilities and dedication to precision engineering ensure that every product meets the highest standards of quality and performance."
              : "A Flair-Plastic-nél a legfejlettebb technológiát ötvözzük évtizedes szakértelemmel, hogy kivételes műanyag fröccsöntési megoldásokat nyújtsunk. Legkorszerűbb létesítményeink és a precíziós mérnöki munkára való elkötelezettségünk biztosítja, hogy minden termék megfeleljen a legmagasabb minőségi és teljesítménystandardoknak."}
          />

          {/* Feature Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {featureCards.map((feature, i) => (
              <FeatureCardComponent
                key={i}
                feature={feature}
                index={i}
              />
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Process Timeline Section */}
          <motion.div className="my-16" variants={containerVariants}>
            <motion.h3 
              className="text-2xl font-bold text-center mb-10 text-gray-800"
              variants={itemVariants}
            >
              {language === 'en' ? "Our Process" : "Folyamatunk"}
            </motion.h3>
            
            <ProcessTimeline steps={processSteps} />
          </motion.div>

          {/* Technical Expertise Section */}
          <motion.div
            className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-white/20 mt-16"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800"
              variants={itemVariants}
            >
              {language === 'en' ? "Technical Expertise" : "Műszaki Szaktudás"}
            </motion.h3>
            
            <motion.div className="space-y-6 text-gray-700 relative z-10">
              <motion.p variants={itemVariants}>
                {language === 'en'
                  ? "Our injection molding process utilizes cutting-edge machinery and robotics to ensure consistency and efficiency across production runs. With capacity ranging from small precision components to large-scale manufacturing, we tailor our approach to meet your specific needs while maintaining exceptional quality standards throughout the production lifecycle."
                  : "Fröccsöntési folyamatunk élvonalbeli gépeket és robotokat használ a termelési futamok közötti konzisztencia és hatékonyság biztosítására. A kis precíziós alkatrészektől a nagyüzemi gyártásig terjedő kapacitással személyre szabjuk megközelítésünket, hogy megfeleljen az Ön egyedi igényeinek, miközben fenntartjuk a kivételes minőségi szabványokat a teljes termelési életciklus során."}
              </motion.p>
              
              <motion.p variants={itemVariants}>
                {language === 'en'
                  ? "Beyond standard injection molding, Flair-Plastic excels in specialized techniques including multi-shot injection, overmolding, and gas-assisted molding. Our engineering team collaborates closely with clients from concept to production, offering material selection guidance, design optimization, and prototyping services to ensure your product achieves optimal performance and cost-efficiency."
                  : "A standard fröccsöntésen túl a Flair-Plastic kiváló a speciális technikákban, beleértve a többlépcsős fröccsöntést, a ráöntést és a gázsegített öntést. Mérnöki csapatunk szorosan együttműködik az ügyfelekkel a koncepciótól a gyártásig, anyagválasztási útmutatást, tervezési optimalizálást és prototípus-készítési szolgáltatásokat kínálva annak biztosítására, hogy termékük optimális teljesítményt és költséghatékonyságot érjen el."}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundPattern>
  );
};

export default InjectionMouldingDetails;
