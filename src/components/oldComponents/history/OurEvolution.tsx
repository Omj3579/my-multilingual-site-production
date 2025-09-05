import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import SplitBackground from '@/components/ui/split-background';

const OurEvolution = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 20);
    mouseY.set(y / 20);
  };

  // Timeline data structure
  const timelineEvents = [
    {
      year: "1990",
      title: language === 'en' ? 'Founded in Hungary' : 'Alapítva Magyarországon',
      content: [
        language === 'en' 
          ? 'Established in Hungary, Flair-Plastic leveraged the innovative technique of injection moulding to produce high-quality plastics more efficiently and cost-effectively than traditional methods. Our commitment to this advanced approach quickly set new industry benchmarks and propelled us to the forefront of the plastic manufacturing sector.'
          : 'Magyarországon alapítva, a Flair-Plastic az innovatív fröccsöntési technikát alkalmazta a kiváló minőségű műanyagok hatékonyabb és költséghatékonyabb előállítására a hagyományos módszerekhez képest. Az élvonalbeli megközelítés iránti elkötelezettségünk gyorsan új ipari mércéket állított fel, és a műanyaggyártási szektor élvonalába emelt bennünket.',
        language === 'en'
          ? 'In 1996, Flair-Plastic expanded its manufacturing capabilities to include a diverse range of plastic products tailored to everyday needs and specialized industries. As a trusted contract manufacturer, we partnered with globally renowned brands to produce high-quality power tools, highlighting our precision and reliability in high-demand sectors.'
          : '1996-ban a Flair-Plastic bővítette gyártási képességeit, hogy a mindennapi igényekre és speciális iparágakra szabott műanyag termékek széles skáláját tartalmazza. Megbízható szerződéses gyártóként globálisan elismert márkákkal működtünk együtt kiváló minőségű szerszámok gyártásában, kiemelve precizitásunkat és megbízhatóságunkat a magas követelményű szektorokban.'
      ],
      color: "#4a6cf7"
    },
    {
      year: "2006",
      title: language === 'en' ? 'Merger with Miskolci Műanyagfeldolgozó Rt.' : 'Egyesülés a Miskolci Műanyagfeldolgozó Rt.-vel',
      content: [
        language === 'en'
          ? 'In 2006, Flair-Plastic (then known as STAR*PLUS) strategically merged with Miskolci Műanyagfeldolgozó Rt., significantly enhancing our production capabilities and market reach. This merger was a pivotal move, preparing us for greater achievements in the global market.'
          : '2006-ban a Flair-Plastic (akkor STAR*PLUS néven) stratégiailag egyesült a Miskolci Műanyagfeldolgozó Rt.-vel, jelentősen növelve gyártási képességeinket és piaci jelenlétünket. Ez az egyesülés kulcsfontosságú lépés volt, felkészítve minket a globális piacon való nagyobb sikerekre.',
        language === 'en'
          ? 'The benefits of this new ownership were immediate and profound. With increased resources and financial security backed by the solid reputations of our past and current partners, Flair-Plastic was poised for even greater innovation.'
          : 'Az új tulajdonosi struktúra előnyei azonnaliak és mélyrehatóak voltak. A megnövekedett erőforrásokkal és a korábbi és jelenlegi partnereink szilárd hírneve által biztosított pénzügyi biztonsággal a Flair-Plastic készen állt még nagyobb innovációkra.'
      ],
      color: "#e44002"
    },
    {
      year: "2015",
      title: language === 'en' ? 'Expanding Global Reach' : 'Bővülő Globális Jelenlét',
      content: [
        language === 'en'
          ? 'In a strategic move that significantly strengthened our position in the global market, Flair-Plastic acquired the renowned Flair Inc. in 2015. This acquisition expanded our reach across key international markets, solidifying our status as a truly global partner committed to delivering exceptional quality and service to our customers worldwide.'
          : 'Egy stratégiai lépésben, amely jelentősen megerősítette pozíciónkat a globális piacon, a Flair-Plastic 2015-ben felvásárolta a neves Flair Inc.-et. Ez a felvásárlás kiterjesztette jelenlétünket a kulcsfontosságú nemzetközi piacokon, megszilárdítva státuszunkat mint valóban globális partner, aki elkötelezett a kivételes minőség és szolgáltatás nyújtása mellett világszerte ügyfeleinek.'
      ],
      color: "#00b574"
    },
    {
      year: "2024",
      title: language === 'en' ? 'Sustainability Leadership' : 'Fenntarthatósági Vezetés',
      content: [
        language === 'en'
          ? 'In 2024, Flair-Plastic expanded its commitment to sustainability with significant investments in eco-friendly production processes and materials. Our new recycling initiatives and carbon reduction programs established us as an industry leader in environmental stewardship while maintaining our high standards of quality and performance.'
          : '2024-ben a Flair-Plastic bővítette elkötelezettségét a fenntarthatóság iránt jelentős befektetésekkel a környezetbarát gyártási folyamatokba és anyagokba. Az új újrahasznosítási kezdeményezéseink és szén-dioxid-csökkentési programjaink az iparág vezetőjévé tettek bennünket a környezetvédelemben, miközben fenntartottuk magas minőségi és teljesítmény standardjainkat.'
      ],
      color: "#ffb700"
    }
  ];

  return (
    <div ref={sectionRef} onMouseMove={handleMouseMove} className="relative overflow-hidden">
      <SplitBackground
        topColor="bg-white"
        bottomColor="#ebebeb"
        topHeight="70%"
        className="px-6 py-20"
      >
        {/* Title section with animation */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 mb-6 bg-[#f39e74]/10 border border-[#f39e74]/20 rounded-full mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#f39e74] mr-2"></div>
            <span className="text-sm font-medium text-gray-700">
              {language === 'en' ? 'Timeline' : 'Idővonal'}
            </span>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' 
              ? 'Our Evolution Through the Years' 
              : 'Fejlődésünk az évek során'}
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Explore key milestones that have shaped our journey from a local manufacturer to a global leader in plastic injection moulding.'
              : 'Fedezze fel azokat a mérföldköveket, amelyek alakították utunkat a helyi gyártótól a műanyag fröccsöntés globális vezetőjévé.'}
          </p>
        </motion.div>
        
        {/* Main Container */}
        <div className="max-w-6xl mx-auto">
          {/* Interactive Timeline */}
          <div className="relative mb-16">
            {/* Timeline connector line */}
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gray-200 top-6 rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-[#f39e74] to-[#e57b48]" 
                style={{ 
                  width: `${(activeIndex / (timelineEvents.length - 1)) * 100}%`,
                  transition: "width 0.3s ease-out"
                }}
              />
            </motion.div>
            
            {/* Timeline years */}
            <div className="flex justify-between relative">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="relative flex flex-col items-center cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Year dot */}
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      index <= activeIndex ? 'bg-gradient-to-r from-[#f39e74] to-[#e57b48] text-white' : 'bg-white text-gray-500 border border-gray-300'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {event.year}
                  </motion.div>
                  
                  {/* Title */}
                  <div className={`hidden md:block absolute top-16 w-40 text-center text-sm font-medium ${
                    index === activeIndex ? 'text-gray-900' : 'text-gray-500'
                  } transition-colors duration-300`}>
                    {event.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Active timeline content with 3D effect */}
          <AnimatedContent 
            event={timelineEvents[activeIndex]} 
            isInView={isInView} 
            mouseX={mouseX} 
            mouseY={mouseY}
            language={language}
          />
          
          {/* Center Image */}
          <motion.div 
            className="relative mt-16 mb-20 z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              rotateX: useTransform(mouseY, [-200, 200], [1, -1]),
              rotateY: useTransform(mouseX, [-200, 200], [-1, 1]),
            }}
          >
            <div className="w-full h-[450px] relative overflow-hidden rounded-tl-[100px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[100px] shadow-lg">
              {/* Image overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              
              {/* Parallax effect on image */}
              <motion.div
                className="w-full h-full"
                style={{
                  scale: 1.1,
                  x: useTransform(mouseX, [-200, 200], [10, -10]),
                  y: useTransform(mouseY, [-200, 200], [10, -10]),
                }}
              >
                <img
                  src="https://flair-plastic.hu/wp-content/uploads/2024/05/history.png.webp"
                  alt={language === 'en' ? "Surface Finishing Showcase" : "Felületkezelési bemutató"}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-20 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'en' ? "Surface Finishing Excellence" : "Felületkezelési kiválóság"}
                </h3>
                <p className="text-sm text-white/80">
                  {language === 'en' 
                    ? "Our state-of-the-art finishing processes ensure premium quality in every product."
                    : "Legkorszerűbb felületkezelési folyamataink biztosítják a prémium minőséget minden termékben."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SplitBackground>
    </div>
  );
};

// Extracted component for the animated timeline content
const AnimatedContent = ({ event, isInView, mouseX, mouseY, language }) => {
  return (
    <motion.div
      className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden p-6 md:p-8 shadow-xl"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
        rotateX: useTransform(mouseY, [-200, 200], [2, -2]),
        rotateY: useTransform(mouseX, [-200, 200], [-2, 2]),
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      key={event.year} // Forces re-render when event changes
      transition={{ duration: 0.5 }}
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: event.color }}></div>
      
      {/* Year badge */}
      <div className="bg-white border border-gray-200 rounded-full px-4 py-1 text-sm font-semibold inline-flex items-center space-x-1 shadow-sm mb-4" style={{ color: event.color }}>
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: event.color }}></span>
        <span className="ml-2">{event.year}</span>
      </div>
      
      {/* Mobile-visible title (hidden on desktop as it's shown in the timeline) */}
      <h3 className="md:hidden text-xl font-bold mb-4 text-gray-900">
        {event.title}
      </h3>
      
      {/* Content */}
      <div className="md:grid md:grid-cols-2 md:gap-8">
        {event.content.map((paragraph, idx) => (
          <motion.p
            key={idx}
            className="text-gray-600 leading-relaxed mb-4 md:mb-0"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      
      {/* Background accent */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10"
        style={{ 
          background: `radial-gradient(circle, ${event.color} 0%, transparent 70%)`,
          transform: "translate(40%, 40%)"
        }}
      />
    </motion.div>
  );
};

export default OurEvolution;
