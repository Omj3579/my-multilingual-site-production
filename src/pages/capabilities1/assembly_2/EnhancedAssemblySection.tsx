import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Users, Cpu, TrendingUp, Target, Zap, Shield, PauseCircle, Volume2, VolumeX } from 'lucide-react';

const EnhancedAssemblySection = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const rightElementY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Content from AssemblySection.md
  const content = {
    section1: {
      badge: {
        en: "Working Together",
        hu: "Együttműködés"
      },
      title: {
        en: "Integrate Your Production Workflow with Flair-Plastic",
        hu: "Integrálja a Gyártási Folyamatát a Flair-Plastic-kel"
      },
      paragraph1: {
        en: "Our proficiency goes well beyond injection moulding. By partnering with Flair-Plastic across the full production cycle, we can enhance value at every stage.",
        hu: "Szakértelmünk messze túlmutat a fröccsöntésen. A Flair-Plastic-kel való együttműködés során a teljes gyártási ciklusban értéket teremtünk minden szakaszban."
      },
      paragraph2: {
        en: "When Flair-Plastic manages both moulding and final assembly, we streamline your supply chain and boost efficiency. By integrating these stages of production, we can approach your projects with greater flexibility, minimizing waste and enhancing profit margins.",
        hu: "Amikor a Flair-Plastic kezeli mind a fröccsöntést, mind a végső összeszerelést, optimalizáljuk az ellátási láncot és növeljük a hatékonyságot. A gyártási szakaszok integrálásával nagyobb rugalmassággal közelíthetjük meg projektjeit, minimalizálva a hulladékot és növelve a profitot."
      },
      video: {
        url: "https://www.youtube.com/embed/h0gnHvFlSq0",
        playText: {
          en: "Watch Assembly Process",
          hu: "Összeszerelési folyamat megtekintése"
        }
      }
    },
    section2: {
      badge: {
        en: "Our Approach",
        hu: "Megközelítésünk"
      },
      title: {
        en: "Advancement and Superiority in Assembly",
        hu: "Fejlődés és Kiválóság az Összeszerelésben"
      },
      description: {
        en: "At Flair-Plastic, our expertise and capabilities span manual, semi-automated, and fully automated assembly lines and cells, tailored to the specific requirements of your project.",
        hu: "A Flair-Plastic-nél szakértelmünk és képességeink kiterjednek a kézi, félautomata és teljesen automatizált szerelősorokra és cellákra, az Ön projektjének speciális követelményeihez igazítva."
      },
      featureCards: [
        {
          title: {
            en: "Lean Management",
            hu: "Lean Menedzsment"
          },
          description: {
            en: "We adhere to lean principles, focusing on continuous improvement and waste reduction.",
            hu: "Követjük a lean elveket, a folyamatos fejlesztésre és hulladékcsökkentésre összpontosítva."
          },
          icon: Target,
          color: "from-green-100 to-emerald-100"
        },
        {
          title: {
            en: "Cutting-edge Technology",
            hu: "Élvonalbeli technológia"
          },
          description: {
            en: "We utilize advanced assembly technologies to produce products efficiently and sustainably.",
            hu: "Fejlett összeszerelési technológiákat alkalmazunk a termékek hatékony és fenntartható előállításához."
          },
          icon: Cpu,
          color: "from-blue-100 to-indigo-100"
        }
      ],
      cta: [
        {
          primary: true,
          href: { en: "/contact", hu: "/kapcsolat" },
          text: { en: "Contact Our Team", hu: "Kapcsolat Felvétele" }
        },
        {
          primary: false,
          href: { en: "/capabilities", hu: "/kepessegek" },
          text: { en: "Explore Our Services", hu: "Fedezze Fel Szolgáltatásainkat" }
        }
      ]
    }
  };

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div ref={containerRef} className="relative font-sans text-gray-800 overflow-hidden">
      {/* Sophisticated Background Elements */}
      {isMounted && (
        <>
          <motion.div 
            className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-50/30 to-indigo-50/30 blur-3xl"
            style={{ y: backgroundY }}
          />
          <motion.div 
            className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-50/25 to-pink-50/25 blur-2xl"
            style={{ y: rightElementY }}
          />
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-full blur-xl" />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-100/15 to-teal-100/15 rounded-full blur-lg" />
        </>
      )}

      {/* Section 1: Integration */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={viewRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/50"
              >
                <Users className="w-4 h-4 mr-2" />
                {content.section1.badge[language]}
              </motion.span>

              {/* Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {content.section1.title[language]}
                </span>
              </motion.h2>

              {/* Content Paragraphs */}
              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {content.section1.paragraph1[language]}
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {content.section1.paragraph2[language]}
                </motion.p>
              </div>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  { icon: TrendingUp, text: { en: "Enhanced Efficiency", hu: "Növelt hatékonyság" } },
                  { icon: Shield, text: { en: "Quality Assurance", hu: "Minőségbiztosítás" } },
                  { icon: Zap, text: { en: "Streamlined Process", hu: "Optimalizált folyamat" } },
                  { icon: Target, text: { en: "Cost Reduction", hu: "Költségcsökkentés" } }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50"
                  >
                    <div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                      <benefit.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text[language]}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group bg-gray-900">
                {videoPlaying ? (
                  <div className="relative aspect-video">
                    <iframe
                      ref={videoRef}
                      src={`${content.section1.video.url}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        onClick={toggleMute}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </motion.button>
                      
                      <motion.button
                        onClick={toggleVideo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors"
                      >
                        <PauseCircle className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
                    {/* Video Thumbnail/Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Play Button */}
                    <motion.button
                      onClick={toggleVideo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-white/30 group"
                    >
                      <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                    </motion.button>
                    
                    {/* Video Title */}
                    <div className="absolute bottom-6 left-6 right-6 text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {content.section1.video.playText[language]}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Capabilities */}
      <section className="relative z-10 py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200/50 mb-6"
            >
              <Cpu className="w-4 h-4 mr-2" />
              {content.section2.badge[language]}
            </motion.span>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {content.section2.title[language]}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {content.section2.description[language]}
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {content.section2.featureCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                  >
                    <card.icon className="w-8 h-8 text-gray-700" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {card.title[language]}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {card.description[language]}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {content.section2.cta.map((button, index) => (
              <motion.a
                key={index}
                href={button.href[language]}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  button.primary
                    ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'text-purple-600 bg-white/80 backdrop-blur-sm border border-purple-200'
                }`}
              >
                <span>{button.text[language]}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedAssemblySection;