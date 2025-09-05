import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import SplitBackground from '@/components/ui/split-background';

const OurEvolution = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
    <div ref={sectionRef} className="relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto">
          {/* Advanced Vertical Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1">
              <motion.div
                className="h-full bg-gradient-to-b from-[#f39e74] via-[#e57b48] to-[#d16a3b] rounded-full shadow-lg"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            {/* Timeline Events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-y-0 space-y-6`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full z-20 flex items-center justify-center shadow-xl ${
                      index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                      index % 2 === 1 ? 'bg-gradient-to-br from-orange-500 to-red-500' :
                      index % 2 === 2 ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                      'bg-gradient-to-br from-yellow-500 to-amber-600'
                    } border-4 border-white`}
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white font-bold text-sm">{event.year}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                    } ml-20 md:ml-0`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (index % 2 === 0 ? -50 : 50) }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="relative">
                      {/* Card Arrow */}
                      <div
                        className={`absolute top-8 ${
                          index % 2 === 0 ? 'md:-right-4 right-auto -left-4' : 'md:-left-4 left-auto -left-4'
                        } w-8 h-8 transform rotate-45 ${
                          index % 2 === 0 ? 'bg-gradient-to-br from-blue-50 to-white' : 
                          index % 2 === 1 ? 'bg-gradient-to-br from-orange-50 to-white' :
                          index % 2 === 2 ? 'bg-gradient-to-br from-green-50 to-white' :
                          'bg-gradient-to-br from-yellow-50 to-white'
                        } border border-gray-100 shadow-lg hidden md:block`}
                      />
                      
                      {/* Content Card */}
                      <div className={`relative p-8 rounded-2xl shadow-xl border border-gray-100 ${
                        index % 2 === 0 ? 'bg-gradient-to-br from-blue-50 via-white to-blue-50/30' : 
                        index % 2 === 1 ? 'bg-gradient-to-br from-orange-50 via-white to-orange-50/30' :
                        index % 2 === 2 ? 'bg-gradient-to-br from-green-50 via-white to-green-50/30' :
                        'bg-gradient-to-br from-yellow-50 via-white to-yellow-50/30'
                      } backdrop-blur-sm hover:shadow-2xl transition-all duration-300`}>
                        
                        {/* Year Badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-white font-semibold text-sm mb-4 ${
                          index % 2 === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                          index % 2 === 1 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                          index % 2 === 2 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                          'bg-gradient-to-r from-yellow-500 to-amber-600'
                        } shadow-lg`}>
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            index % 2 === 0 ? 'bg-blue-200' : 
                            index % 2 === 1 ? 'bg-orange-200' :
                            index % 2 === 2 ? 'bg-green-200' :
                            'bg-yellow-200'
                          }`} />
                          {event.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                          {event.title}
                        </h3>

                        {/* Content */}
                        <div className="space-y-4">
                          {event.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-700 leading-relaxed text-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Decorative Elements */}
                        <div className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                          index % 2 === 0 ? 'bg-blue-500' : 
                          index % 2 === 1 ? 'bg-orange-500' :
                          index % 2 === 2 ? 'bg-green-500' :
                          'bg-yellow-500'
                        }`} />
                        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 ${
                          index % 2 === 0 ? 'bg-blue-500' : 
                          index % 2 === 1 ? 'bg-orange-500' :
                          index % 2 === 2 ? 'bg-green-500' :
                          'bg-yellow-500'
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Timeline End Indicator */}
            <motion.div
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 bottom-0 w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
          </div>
        </div>
      </SplitBackground>
    </div>
  );
};

export default OurEvolution;
