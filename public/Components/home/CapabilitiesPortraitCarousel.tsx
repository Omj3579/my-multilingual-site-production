import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules'; // Re-add EffectCards
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'; // Add this back
import { Swiper as SwiperType } from 'swiper';

// Animation variants
const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const images = {
  en: [
    {
      src: '/Capabilities/Contract_Manufacturing.webp',
      title: 'Contract Manufacturing',
      description: 'Delivering excellence in precision manufacturing',
      features: [
        'Custom production solutions',
        'Rigorous quality control',
        'Scalable manufacturing capacity'
      ]
    },
    {
      src: '/Capabilities/Injection_Molding_Excellence.webp',
      title: 'Injection Molding Excellence',
      description: 'State-of-the-art technology and expertise',
      features: [
        'Advanced molding techniques',
        'Multi-material capabilities',
        'Precision engineering solutions'
      ]
    },
    {
      src: '/Capabilities/Sustainability_Commitment.webp',
      title: 'Sustainability Commitment',
      description: 'Leading the way in sustainable manufacturing',
      features: [
        'Eco-friendly materials',
        'Energy-efficient processes',
        'Circular economy principles'
      ]
    },
  ],
  hu: [
    {
      src: '/Capabilities/Szakértelem szerződéses gyártásban.webp',
      title: 'Szerződéses Gyártás',
      description: 'Kiválóság a precíziós gyártásban',
      features: [
        'Egyedi gyártási megoldások',
        'Szigorú minőségellenőrzés',
        'Skálázható gyártási kapacitás'
      ]
    },
    {
      src: '/Capabilities/Szakértelem szerződéses gyártásban.webp',
      title: 'Fröccsöntési Kiválóság',
      description: 'Csúcstechnológia és szakértelem',
      features: [
        'Fejlett öntési technikák',
        'Többanyagos képességek',
        'Precíziós mérnöki megoldások'
      ]
    },
    {
      src: '/Capabilities/Fenntarthatóság.webp',
      title: 'Fenntarthatósági Elkötelezettség',
      description: 'Vezető szerep a fenntartható gyártásban',
      features: [
        'Környezetbarát anyagok',
        'Energiahatékony folyamatok',
        'Körkörös gazdasági elvek'
      ]
    },
  ],
};

const CapabilitiesPortraitCarousel = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]); // Increase range
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]); // Increase range

  // Animation for the floating orbs
  useEffect(() => {
    const interval = setInterval(() => {
      const orbs = document.querySelectorAll('.floating-orb');
      orbs.forEach(orb => {
        const randomX = (Math.random() - 0.5) * 10;
        const randomY = (Math.random() - 0.5) * 10;
        
        orb.animate([
          { transform: 'translate(0, 0)' },
          { transform: `translate(${randomX}px, ${randomY}px)` },
          { transform: 'translate(0, 0)' }
        ], {
          duration: 5000,
          easing: 'ease-in-out'
        });
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Add this near your other useEffect hooks
  useEffect(() => {
    if (swiperRef.current) {
      console.log("Swiper initialized!");
      
      // Ensure autoplay is properly started
      swiperRef.current.autoplay.start();
      
      // Make sure the loop is working
      if (!swiperRef.current.params.loop) {
        swiperRef.current.params.loop = true;
        swiperRef.current.update();
      }
    }
  }, [swiperRef.current]);

  const handleMouseMove = (e) => {
    // Don't process mouse movements if we're in the middle of a slide transition
    if (swiperRef.current?.animating) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Decorative background elements with animation */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 floating-orb"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 floating-orb"></div>
        
        {/* Title Header with animation */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            className="text-3xl md:text-5xl font-light text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-bold tracking-wide text-blue-600">Core</span> Capabilities
          </motion.h2>
          
          <motion.div 
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          
          <motion.p 
            className="max-w-2xl mx-auto mt-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {language === 'en' 
              ? 'Discover our expertise and technology that drive innovation and quality in every project'
              : 'Fedezze fel szakértelmünket és technológiánkat, amely minden projektben innovációt és minőséget biztosít'}
          </motion.p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Swiper Container */}
          <div className="capabilities-carousel h-[750px] md:h-[680px]">
            <Swiper
              modules={[Autoplay, EffectCards, Navigation, Pagination]}
              effect="cards"
              cardsEffect={{
                slideShadows: false,
                perSlideRotate: 3,
                perSlideOffset: 12,
                rotate: true,
              }}
              speed={1000}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.capabilities-next',
                prevEl: '.capabilities-prev',
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                // Force start autoplay after initialization
                setTimeout(() => swiper.autoplay.start(), 100);
              }}
              loop={true}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="h-full w-full rounded-2xl"
            >
              {images[language].map((slide, index) => (
                <SwiperSlide key={index} className="p-6 md:p-8">
                  <motion.div 
                    className="bg-white/95 backdrop-blur-sm border border-white/80 rounded-2xl shadow-2xl overflow-hidden h-full"
                    style={{
                      rotateX: isHovering ? rotateX : 0,
                      rotateY: isHovering ? rotateY : 0,
                      transformStyle: "preserve-3d",
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    whileHover={{ scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      {/* Image Column */}
                      <div className="relative h-[280px] md:h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
                        <div className="absolute inset-0 overflow-hidden md:rounded-l-2xl">
                          <motion.img
                            src={slide.src}
                            alt={slide.title}
                            className="w-full h-full object-cover object-center"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: isHovering ? 1.15 : 1.1 }}
                            transition={{ duration: 0.7 }}
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-blue-900/40 via-blue-900/20 to-transparent"></div>
                          
                          {/* Animated particles on the image */}
                          <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 8 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute h-1 w-1 rounded-full bg-white/60"
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
                          
                          {/* Top left badge */}
                          <div className="absolute top-6 left-6 px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full shadow-lg">
                            {language === 'en' ? 'Featured' : 'Kiemelt'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Column */}
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`content-${index}`}
                          className="relative p-6 md:p-10 flex flex-col justify-center transform-gpu"
                          style={{ transform: "translateZ(40px)" }}
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {/* Slide Indicator */}
                          <div className="flex items-center gap-2 mb-8">
                            <div className="flex space-x-1">
                              {Array.from({ length: images[language].length }).map((_, i) => (
                                <motion.div 
                                  key={i}
                                  className={`h-1.5 rounded-full ${i === index ? 'w-8 bg-blue-600' : 'w-1.5 bg-gray-300'}`}
                                  initial={{ width: i === index ? 8 : 6 }}
                                  animate={{ width: i === index ? 32 : 6 }}
                                  transition={{ duration: 0.4, delay: 0.1 * i }}
                                />
                              ))}
                            </div>
                            <span className="text-gray-400 text-sm ml-2">0{index + 1}/0{images[language].length}</span>
                          </div>
                          
                          <motion.h2 
                            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            {slide.title}
                          </motion.h2>
                          
                          <motion.div 
                            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mb-6 relative overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                          >
                            {/* Animated shine effect */}
                            <motion.div 
                              className="absolute inset-0 bg-white/50"
                              animate={{ 
                                x: ["-100%", "200%"],
                                opacity: [0, 0.5, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: 2, 
                                repeatType: "loop",
                                delay: 1
                              }}
                            />
                          </motion.div>
                          
                          <motion.p 
                            className="text-gray-600 mb-8 leading-relaxed text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {slide.description}
                          </motion.p>
                          
                          {/* Feature highlights */}
                          <motion.div 
                            className="space-y-4 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            {slide.features.map((feature, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                              >
                                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                  <svg className="h-3.5 w-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                          
                          <motion.div
                            className="mt-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <motion.button 
                              className="group relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-[20px] group-hover:h-[20px]"></div>
                              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-[20px] group-hover:h-[20px]"></div>
                              
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
                              
                              <span className="block relative z-10">
                                {language === 'en' ? 'Explore in Detail' : 'Részletes felfedezés'}
                              </span>
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Custom navigation buttons with animations */}
          <motion.button 
            type="button"
            className="capabilities-prev absolute left-[-10px] md:left-[-30px] top-1/2 -translate-y-1/2 z-30
              bg-white shadow-xl border border-gray-100 text-blue-600
              rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center
              hover:bg-blue-50 transition-all duration-300"
            aria-label="Previous slide"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev(700); // Set transition speed
                // Restart autoplay after manual navigation
                setTimeout(() => swiperRef.current?.autoplay.start(), 1000);
              }
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            type="button"
            className="capabilities-next absolute right-[-10px] md:right-[-30px] top-1/2 -translate-y-1/2 z-30
              bg-white shadow-xl border border-gray-100 text-blue-600
              rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center
              hover:bg-blue-50 transition-all duration-300"
            aria-label="Next slide"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext(700); // Set transition speed
                // Restart autoplay after manual navigation
                setTimeout(() => swiperRef.current?.autoplay.start(), 1000);
              }
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Custom styling for pagination through CSS */}
          <style dangerouslySetInnerHTML={{ __html: `
  .swiper-pagination-bullet {
    background-color: #3b82f6;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .floating-orb {
    animation: float 8s ease-in-out infinite;
  }
  
  /* Improve swiper transitions */
  .swiper-slide {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  .swiper-slide-active {
    transition-duration: 800ms !important;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    background-image: none !important; /* Remove default shadows */
  }

  .swiper-slide {
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
    perspective: 1200px !important;
  }

  .swiper-slide-prev {
    transform-origin: center right !important;
  }

  .swiper-slide-next {
    transform-origin: center left !important;
  }
`}} />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesPortraitCarousel;
