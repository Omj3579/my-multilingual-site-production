import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Quote, ArrowRight, Star, Award, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

const EnhancedCommitmentCallout = ({ height = "min-h-[500px]" }) => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // Move these hooks outside the conditional block
  const rightElementY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bottomFloatingY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Content from CommitmentCallout.md
  const content = {
    quote: {
      en: "When Flair-Plastic manages both moulding and final assembly, we streamline your supply chain and enhance efficiency.",
      hu: "Amikor a Flair-Plastic kezeli mind a fröccsöntést, mind a végső összeszerelést, optimalizáljuk az ellátási láncot és növeljük a hatékonyságt."
    },
    attribution: {
      en: "— Flair-Plastic Management Team",
      hu: "— Flair-Plastic Vezetőség"
    }
  };

  // Additional content to enhance the component
  const additionalContent = {
    badge: {
      en: "Our Commitment",
      hu: "Elköteleződésünk"
    },
    subtitle: {
      en: "Excellence in Every Detail",
      hu: "Kiválóság Minden Részletben"
    },
    stats: [
      {
        value: "15+",
        label: { en: "Years of Excellence", hu: "Év Kiválóság" },
        icon: Award,
        color: "from-amber-400 to-orange-400"
      },
      {
        value: "500+",
        label: { en: "Successful Projects", hu: "Sikeres Projekt" },
        icon: CheckCircle,
        color: "from-green-400 to-emerald-400"
      },
      {
        value: "99.8%",
        label: { en: "Client Satisfaction", hu: "Ügyfél Elégedettség" },
        icon: Star,
        color: "from-blue-400 to-indigo-400"
      },
      {
        value: "24/7",
        label: { en: "Support Available", hu: "Támogatás Elérhető" },
        icon: Users,
        color: "from-purple-400 to-pink-400"
      }
    ],
    features: [
      {
        title: { en: "Quality Assurance", hu: "Minőségbiztosítás" },
        description: { en: "Rigorous testing at every stage", hu: "Szigorú tesztelés minden szakaszban" },
        icon: Target
      },
      {
        title: { en: "Efficiency Focus", hu: "Hatékonyság Fókusz" },
        description: { en: "Streamlined processes", hu: "Optimalizált folyamatok" },
        icon: TrendingUp
      }
    ],
    cta: {
      primary: {
        text: { en: "Start Your Project", hu: "Kezdje El Projektjét" },
        href: { en: "/contact", hu: "/kapcsolat" }
      },
      secondary: {
        text: { en: "Learn More", hu: "Tudjon Meg Többet" },
        href: { en: "/about", hu: "/rolunk" }
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className={`relative overflow-hidden ${height} bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-sans`}
    >
      {/* Sophisticated Background Elements */}
      {isMounted && (
        <>
          <motion.div 
            className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-amber-100/30 to-orange-100/30 blur-3xl"
            style={{ y: backgroundY }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-yellow-100/25 to-amber-100/25 blur-2xl"
            style={{ y: rightElementY }}
          />
          
          {/* Floating Decorative Elements */}
          <motion.div 
            className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-xl"
            style={{ y: floatingY }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-200/15 to-orange-200/15 rounded-full blur-lg"
            style={{ y: bottomFloatingY }}
          />
          
          {/* Enhanced Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <pattern id="commitment-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.4" />
                <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.2" />
                <circle cx="60" cy="60" r="1" fill="currentColor" opacity="0.2" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#commitment-pattern)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          ref={viewRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content - Quote Section */}
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
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200/50 shadow-lg backdrop-blur-sm"
            >
              <Award className="w-4 h-4 mr-2" />
              {additionalContent.badge[language]}
            </motion.span>

            {/* Subtitle */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {additionalContent.subtitle[language]}
              </span>
            </motion.h3>

            {/* Main Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-200/50"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                "{content.quote[language]}"
              </blockquote>

              {/* Attribution */}
              <footer className="text-right">
                <cite className="text-amber-600 font-semibold not-italic">
                  {content.attribution[language]}
                </cite>
              </footer>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 rounded-full" />
            </motion.div>

            {/* Feature Points */}
            <div className="grid md:grid-cols-2 gap-4">
              {additionalContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-amber-200/30 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title[language]}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description[language]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {additionalContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  {/* Background Gradient Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    animate={hoveredStat === index ? { scale: 1 } : { scale: 0 }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 10 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label[language]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {language === 'en' ? 'Ready to Get Started?' : 'Készen áll a kezdésre?'}
              </h4>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={additionalContent.cta.primary.href[language]}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex-1 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>{additionalContent.cta.primary.text[language]}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href={additionalContent.cta.secondary.href[language]}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex-1 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-amber-600 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>{additionalContent.cta.secondary.text[language]}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-amber-200/50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{language === 'en' ? 'Free Consultation' : 'Ingyenes Konzultáció'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{language === 'en' ? 'Quick Response' : 'Gyors Válasz'}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCommitmentCallout;