import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const slides = [
  {
    src: {
      en: '/Sustainability/Global_Biodiversity.webp',
      hu: '/Sustainability/biodiverzitás elősegítése.webp',
    },
    alt: {
      en: 'Fostering Global Biodiversity',
      hu: 'Globális biodiverzitás elősegítése',
    },
    title: {
      en: 'FOSTERING GLOBAL BIODIVERSITY: WILDLIFE PROTECTION PROGRAMS',
      hu: 'GLOBÁLIS BIODIVERZITÁS ELŐSEGÍTÉSE: VADVILÁGVÉDELMI PROGRAMOK'
    },
    description: {
      en: 'Flair-Plastic is committed to protecting wildlife and enhancing biodiversity. Our programs support habitat preservation and the protection of endangered species, reflecting our deep commitment to environmental ethics and global ecological health.',
      hu: 'A Flair-Plastic elkötelezett a vadvilág védelme és a biodiverzitás növelése mellett. Programjaink támogatják az élőhelyek megőrzését és a veszélyeztetett fajok védelmét, tükrözve mély elkötelezettségünket a környezeti etika és a globális ökológiai egészség iránt.'
    }
  },
  {
    src: {
      en: '/Sustainability/Natural_Stewardship.webp',
      hu: '/Sustainability/A természetes gondnokság vállalása.webp',
    },
    alt: {
      en: 'Embracing Natural Stewardship',
      hu: 'Természeti gondnokság elfogadása',
    },
    title: {
      en: 'EMBRACING NATURAL STEWARDSHIP: FOREST CONSERVATION INITIATIVES',
      hu: 'TERMÉSZETI GONDNOKSÁG ELFOGADÁSA: ERDŐVÉDELMI KEZDEMÉNYEZÉSEK'
    },
    description: {
      en: 'At Flair-Plastic, we champion the preservation of forests as part of our commitment to environmental stewardship. By actively supporting reforestation and conservation efforts, we aim to protect these vital ecosystems for their biodiversity and their crucial role in combating climate change.',
      hu: 'A Flair-Plastic-nál az erdők megőrzését támogatjuk környezetvédelmi felelősségvállalásunk részeként. Az újraerdősítési és természetvédelmi erőfeszítések aktív támogatásával célunk ezen létfontosságú ökoszisztémák védelme biodiverzitásuk és az éghajlatváltozás elleni küzdelemben betöltött kulcsfontosságú szerepük miatt.'
    }
  },
  {
    src: {
      en: '/Sustainability/Safeguarding_Water.webp',
      hu: '/Sustainability/A jövő vízkészletének megőrzése.webp',
    },
    alt: {
      en: 'Safeguarding Water',
      hu: 'A víz védelme',
    },
    title: {
      en: 'SAFEGUARDING WATER FOR THE FUTURE: OUR WATER CONSERVATION EFFORTS',
      hu: 'A VÍZ VÉDELME A JÖVŐÉRT: VÍZVÉDELMI ERŐFESZÍTÉSEINK'
    },
    description: {
      en: 'Water is the lifeblood of our planet, and at Flair-Plastic, we are dedicated to its preservation. Through innovative water management practices and technologies, we strive to reduce water usage and impact, ensuring sustainable water resources for generations to come.',
      hu: 'A víz bolygónk életének forrása, és a Flair-Plastic-nál elkötelezettek vagyunk annak megőrzése mellett. Az innovatív vízgazdálkodási gyakorlatok és technológiák révén törekszünk a vízfelhasználás és a környezeti hatás csökkentésére, biztosítva a fenntartható vízkészleteket az eljövendő generációk számára.'
    }
  },
  {
    src: {
      en: '/Sustainability/Sustainable_Tomorrow.webp',
      hu: '/Sustainability/Innováció a fenntartható jövőért.webp',
    },
    alt: {
      en: 'Innovating for Sustainable Tomorrow',
      hu: 'Innováció a fenntartható jövőért',
    },
    title: {
      en: 'INNOVATING FOR A SUSTAINABLE TOMORROW: RECYCLING AND RENEWABLE ENERGY',
      hu: 'INNOVÁLÁS A FENNTARTHATÓ JÖVŐÉRT: ÚJRAHASZNOSÍTÁS ÉS MEGÚJULÓ ENERGIA'
    },
    description: {
      en: 'Our vision at Flair-Plastic includes leading the way in sustainable industrial practices. By integrating state-of-the-art recycling methods and renewable energy sources into our operations, we not only reduce our environmental footprint but also pioneer new paths for industry-wide sustainability.',
      hu: 'A Flair-Plastic jövőképe magában foglalja a fenntartható ipari gyakorlatok terén való vezető szerepet. A legkorszerűbb újrahasznosítási módszerek és megújuló energiaforrások működésünkbe való integrálásával nemcsak környezeti lábnyomunkat csökkentjük, hanem új utakat is nyitunk az iparág-széles fenntarthatóság felé.'
    }
  }
];

const SustainabilityCarousel = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Transform values for tilt effect
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  const panX = useTransform(mouseX, [-300, 300], [15, -15]);
  const panY = useTransform(mouseY, [-300, 300], [15, -15]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="w-full py-20 overflow-hidden relative isolate">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10"></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-60 -z-5"
        animate={{
          backgroundPosition: ["0% center", "100% center"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundSize: "200% 100%"
        }}
      />
      
      {/* Animated particle background */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-green-400/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Header with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            className="text-3xl md:text-5xl font-light text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              Sustainability
            </span>{" "}
            Initiatives
          </motion.h2>
          
          <motion.div 
            className="w-32 h-[2px] mx-auto mt-4 relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500"
              animate={{ 
                x: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop"
              }}
            />
          </motion.div>
          
          <motion.p
            className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {language === 'en' 
              ? 'Our commitment to environmental stewardship and sustainable practices'
              : 'Elkötelezettségünk a környezetvédelem és a fenntartható gyakorlatok mellett'}
          </motion.p>
        </div>
        
        <div 
          ref={containerRef} 
          className="relative h-[700px] md:h-[650px] rounded-2xl overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            modules={[Navigation, Autoplay, EffectCreative, Pagination]}
            effect="creative"
            creativeEffect={{
              prev: {
                translate: ['-20%', 0, -1],
                scale: 0.9,
                opacity: 0.5,
              },
              next: {
                translate: ['100%', 0, 0],
                scale: 0.9,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            slidesPerView={1}
            className="h-full rounded-2xl"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="overflow-hidden">
                {/* Full Image Background with parallax effect */}
                <motion.div 
                  className="relative h-full w-full"
                  style={isHovering ? {
                    x: panX,
                    y: panY
                  } : {}}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={slide.src[language]}
                      alt={slide.alt[language]}
                      className="w-full h-full object-cover brightness-[0.85] scale-110"
                      loading={idx === 0 ? "eager" : "lazy"}
                      initial={{ scale: 1.2 }}
                      animate={{ 
                        scale: isHovering ? 1.15 : 1.1
                      }}
                      transition={{ duration: 3, ease: "easeOut" }}
                    />
                    
                    {/* Advanced gradient overlay with blend modes */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Animated particles for subtle motion */}
                    <div className="absolute inset-0">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-1 w-1 rounded-full bg-white/30"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -20],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Glass Card Content with 3D effect */}
                  <AnimatePresence mode="wait">
                    {activeIndex === idx && (
                      <motion.div 
                        className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] lg:w-[50%] p-8 md:p-10 flex flex-col justify-center"
                        style={isHovering ? {
                          rotateX,
                          rotateY,
                          transformPerspective: "1000px",
                          transformStyle: "preserve-3d",
                        } : {}}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.7 }}
                      >
                        {/* Glass background */}
                        <motion.div 
                          className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-l-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                          initial={{ x: 30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.1 }}
                        >
                          {/* Advanced glass border effects */}
                          <div className="absolute inset-0 rounded-l-3xl border border-white/10 pointer-events-none"></div>
                          
                          {/* Realistic glass lighting effects */}
                          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                          <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                          
                          {/* Inner glass highlight */}
                          <div className="absolute top-[1px] left-[1px] right-[1px] h-[50%] bg-gradient-to-b from-white/10 to-transparent rounded-tl-3xl pointer-events-none"></div>
                        </motion.div>
                        
                        {/* Decorative colored orbs with subtle animations */}
                        <motion.div 
                          className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-500/10 blur-3xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.15, 0.1],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                        <motion.div 
                          className="absolute bottom-[-15%] left-[10%] w-[30%] h-[30%] rounded-full bg-blue-400/10 blur-3xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.18, 0.1],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1,
                          }}
                        />
                        
                        <div className="relative z-10 p-5">
                          {/* Index indicator with motion */}
                          <motion.div 
                            className="inline-flex items-center mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className="text-green-400 text-lg font-bold tracking-wider">0{idx + 1}</span>
                            <motion.div 
                              className="ml-3 h-[1px] w-12 bg-green-400/80"
                              initial={{ width: 0 }}
                              animate={{ width: 48 }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                            />
                          </motion.div>
                          
                          <motion.h2 
                            className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-wide"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {slide.title[language]}
                          </motion.h2>
                          
                          <motion.div 
                            className="w-16 h-1 bg-gradient-to-r from-green-400 to-teal-400 mb-6 relative overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                          >
                            <motion.div 
                              className="absolute inset-0 bg-white/50"
                              animate={{ 
                                x: ["0%", "100%"],
                                opacity: [0, 0.5, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: 3, 
                                repeatType: "loop",
                                delay: 1
                              }}
                            />
                          </motion.div>
                          
                          <motion.p 
                            className="text-gray-100 mb-8 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                          >
                            {slide.description[language]}
                          </motion.p>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-4"
                          >
                            {/* Interactive glass button with hover effects */}
                            <motion.button 
                              className="group relative px-6 py-3 overflow-hidden rounded-md"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {/* Button background with animated gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                              
                              {/* Button shine effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden">
                                <motion.div 
                                  className="w-20 h-full bg-white/20 skew-x-[25deg] absolute"
                                  animate={{
                                    x: ["-100%", "200%"],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                  }}
                                />
                              </div>
                              
                              <span className="relative z-10 text-white font-medium">
                                {language === 'en' ? 'Learn More' : 'Tudj meg többet'}
                              </span>
                            </motion.button>
                            
                            {/* Animated arrow button */}
                            <motion.div 
                              className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all"
                              whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.5)" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 text-white group-hover:text-green-400 transition-colors" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                whileHover={{ x: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation with hover effects */}
          <motion.div 
            className="swiper-button-prev !hidden md:!flex !w-14 !h-14 !text-white !bg-black/20 hover:!bg-green-500/50 !backdrop-blur-lg border border-white/10 rounded-full !left-6 z-20"
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div 
            className="swiper-button-next !hidden md:!flex !w-14 !h-14 !text-white !bg-black/20 hover:!bg-green-500/50 !backdrop-blur-lg border border-white/10 rounded-full !right-6 z-20"
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          />
          
          {/* Custom Pagination with animated indicators */}
          <div className="absolute bottom-6 left-0 right-0 z-10 px-6 md:px-12">
            <div className="flex items-center justify-center md:justify-start">
              <motion.div 
                className="flex items-center gap-3 px-6 py-3 bg-black/30 backdrop-blur-md rounded-full border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const swiperInstance = document.querySelector('.swiper')?.swiper;
                      swiperInstance?.slideTo(idx);
                    }}
                    className="relative group"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div className={`relative h-1 rounded-full transition-all duration-500 ${
                      activeIndex === idx ? 'w-10 bg-green-400' : 'w-5 bg-white/30 group-hover:bg-white/50'
                    }`}>
                      {activeIndex === idx && (
                        <motion.div 
                          className="absolute inset-0 bg-green-300 rounded-full"
                          animate={{ 
                            opacity: [0.7, 0.3, 0.7] 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      )}
                    </div>
                    <span className="sr-only">Slide {idx + 1}</span>
                  </button>
                ))}
                
                <div className="ml-3 pl-3 border-l border-white/20 text-white/80 text-sm font-medium">
                  <span className="text-green-400 font-bold">0{activeIndex + 1}</span>
                  <span className="mx-2">/</span>
                  <span>0{slides.length}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCarousel;
