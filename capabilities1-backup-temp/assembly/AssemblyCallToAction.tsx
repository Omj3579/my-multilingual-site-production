import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar, 
  MessageCircle,
  Download,
  Play,
  Star,
  Award,
  Users,
  Globe,
  Zap,
  Shield,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
  Sparkles,
  Rocket,
  Building,
  Factory,
  Cog,
  Eye,
  Heart,
  Gift,  Crown,  Gem,
  Flame,
  Send,
  ExternalLink,
  MapPin,
  Headphones,
  FileText,
  Video,
  Mic,
  Camera,
  Share2,
  Bookmark,
  ThumbsUp
} from 'lucide-react';

const AssemblyCallToAction = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const viewRef = useRef(null);
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  const [activeOffer, setActiveOffer] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    timeline: '',
    budget: ''
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [urgencyTimer, setUrgencyTimer] = useState(3600); // 1 hour
  const [sparkles, setSparkles] = useState([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Ultra-sophisticated transforms like case study
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.8]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Sparkle animation system
  useEffect(() => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      color: ['text-yellow-400', 'text-purple-400', 'text-pink-400', 'text-blue-400'][Math.floor(Math.random() * 4)]
    }));
    setSparkles(newSparkles);
  }, []);

  // Urgency timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: e.clientX, y: e.clientY });
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const ctaContent = {
    en: {
      badge: "Ready to Transform?",
      title: "Start Your Assembly",
      subtitle: "Revolution Today",
      description: "Join 500+ industry leaders who've transformed their manufacturing with our cutting-edge assembly solutions. Your competitive advantage awaits.",
      
      urgencyOffer: {
        title: "Limited Time Offer",
        subtitle: "Free Consultation + 25% Implementation Discount",
        description: "Book your strategy session now and receive a complimentary manufacturing assessment worth $5,000",
        expires: "Offer expires in",
        value: "$15,000 Value Package"
      },

      // Multiple conversion paths
      ctaOptions: [
        {
          id: "consultation",
          title: "Free Strategy Session",
          subtitle: "30-Minute Expert Consultation",
          description: "Discover how our solutions can transform your manufacturing operations",
          icon: MessageCircle,
          color: "from-blue-600 to-indigo-600",
          value: "$2,500 Value",
          features: [
            "Manufacturing Assessment",
            "ROI Projection Analysis", 
            "Custom Solution Roadmap",
            "Implementation Timeline"
          ],
          cta: "Book Free Session",
          urgency: "Only 3 slots left this week"
        },
        {
          id: "demo",
          title: "Live System Demo",
          subtitle: "See Our Technology in Action",
          description: "Experience our assembly solutions through an interactive demonstration",
          icon: Play,
          color: "from-purple-600 to-pink-600",
          value: "$1,000 Value",
          features: [
            "Interactive Technology Demo",
            "Q&A with Engineers",
            "Case Study Presentation",
            "Competitive Analysis"
          ],
          cta: "Schedule Demo",
          urgency: "Next available: Tomorrow 2 PM"
        },
        {
          id: "assessment",
          title: "Manufacturing Audit",
          subtitle: "Complete Operations Analysis",
          description: "Comprehensive evaluation of your current manufacturing processes",
          icon: Target,
          color: "from-green-600 to-emerald-600",
          value: "$5,000 Value",
          features: [
            "On-site Process Audit",
            "Efficiency Gap Analysis",
            "Cost Reduction Opportunities",
            "Implementation Proposal"
          ],
          cta: "Request Audit",
          urgency: "Limited to 2 audits per month"
        }
      ],

      // Social proof elements
      socialProof: {
        title: "Trusted by Industry Leaders",
        testimonials: [
          {
            quote: "Transformed our production capacity by 340% while reducing costs by 45%",
            author: "Sarah Chen",
            role: "VP Manufacturing",
            company: "TechCorp Industries",
            rating: 5
          },
          {
            quote: "The ROI exceeded our projections by 150%. Best investment we've made.",
            author: "Michael Rodriguez",
            role: "Operations Director", 
            company: "Global Manufacturing",
            rating: 5
          },
          {
            quote: "Zero defects, incredible efficiency. Our quality metrics are industry-leading now.",
            author: "Lisa Thompson",
            role: "Quality Assurance Lead",
            company: "Precision Systems",
            rating: 5
          }
        ],
        logos: [
          "/images/clients/logo-1.png",
          "/images/clients/logo-2.png", 
          "/images/clients/logo-3.png",
          "/images/clients/logo-4.png",
          "/images/clients/logo-5.png",
          "/images/clients/logo-6.png"
        ]
      },

      // Risk reversal and guarantees
      guarantees: [
        {
          icon: Shield,
          title: "100% Satisfaction Guarantee",
          description: "Full refund if not completely satisfied within 90 days"
        },
        {
          icon: Award,
          title: "Performance Guarantee",
          description: "We guarantee minimum 200% ROI or we'll work for free"
        },
        {
          icon: Clock,
          title: "On-Time Delivery",
          description: "Project completion on schedule or 10% discount"
        },
        {
          icon: Users,
          title: "24/7 Expert Support",
          description: "Unlimited access to our engineering team for first year"
        }
      ],

      // Contact information
      contact: {
        phone: "+1 (555) 123-4567",
        email: "solutions@assemblyexperts.com",
        address: "123 Innovation Drive, Tech Valley, CA 94000",
        hours: "24/7 Emergency Support Available"
      },

      // Form fields
      form: {
        name: "Full Name",
        email: "Business Email",
        company: "Company Name",
        phone: "Phone Number",
        project: "Project Description",
        timeline: "Preferred Timeline",
        budget: "Budget Range",
        submit: "Get My Free Consultation",
        privacy: "We respect your privacy. Your information is secure and never shared."
      }
    },
    hu: {
      badge: "Készen Áll az Átalakításra?",
      title: "Kezdje El Összeszerelési",
      subtitle: "Forradalmat Ma",
      description: "Csatlakozzon 500+ iparági vezetőhöz, akik átalakították gyártásukat élvonalbeli összeszerelési megoldásainkkal. Versenyelőnye már vár.",
      
      urgencyOffer: {
        title: "Korlátozott Időre Szóló Ajánlat",
        subtitle: "Ingyenes Konzultáció + 25% Implementációs Kedvezmény",
        description: "Foglalja le stratégiai ülését most és kapjon ingyenes gyártási értékelést 5.000$ értékben",
        expires: "Ajánlat lejár",
        value: "15.000$ Értékű Csomag"
      },

      ctaOptions: [
        {
          id: "consultation",
          title: "Ingyenes Stratégiai Ülés",
          subtitle: "30 Perces Szakértői Konzultáció",
          description: "Fedezze fel, hogyan alakíthatják át megoldásaink gyártási műveleteit",
          icon: MessageCircle,
          color: "from-blue-600 to-indigo-600",
          value: "2.500$ Érték",
          features: [
            "Gyártási Értékelés",
            "ROI Vetítési Elemzés",
            "Egyedi Megoldási Ütemterv",
            "Implementációs Időütemezés"
          ],
          cta: "Ingyenes Ülés Foglalása",
          urgency: "Csak 3 szabad hely maradt ezen a héten"
        },
        {
          id: "demo",
          title: "Élő Rendszer Demo",
          subtitle: "Lássa Technológiánkat Működésben",
          description: "Tapasztalja meg összeszerelési megoldásainkat interaktív bemutatón keresztül",
          icon: Play,
          color: "from-purple-600 to-pink-600",
          value: "1.000$ Érték",
          features: [
            "Interaktív Technológiai Demo",
            "Kérdések-Válaszok Mérnökökkel",
            "Esettanulmány Bemutató",
            "Versenytársi Elemzés"
          ],
          cta: "Demo Ütemezése",
          urgency: "Következő szabad: Holnap 14:00"
        },
        {
          id: "assessment",
          title: "Gyártási Audit",
          subtitle: "Teljes Művelet Elemzés",
          description: "Átfogó értékelés jelenlegi gyártási folyamatairól",
          icon: Target,
          color: "from-green-600 to-emerald-600",
          value: "5.000$ Érték",
          features: [
            "Helyszíni Folyamat Audit",
            "Hatékonysági Rés Elemzés",
            "Költségcsökkentési Lehetőségek",
            "Implementációs Javaslat"
          ],
          cta: "Audit Kérése",
          urgency: "Havonta csak 2 auditre korlátozott"
        }
      ],

      socialProof: {
        title: "Iparági Vezetők Bizalma",
        testimonials: [
          {
            quote: "Termelési kapacitásunkat 340%-kal növelte, miközben 45%-kal csökkentette a költségeket",
            author: "Sarah Chen",
            role: "Gyártási Alelnök",
            company: "TechCorp Industries",
            rating: 5
          },
          {
            quote: "Az ROI 150%-kal meghaladta várakozásainkat. A legjobb befektetés, amit valaha tettünk.",
            author: "Michael Rodriguez", 
            role: "Műveletvezetési Igazgató",
            company: "Global Manufacturing",
            rating: 5
          },
          {
            quote: "Nulla hiba, hihetetlen hatékonyság. Minőségi mutatóink most iparágvezetők.",
            author: "Lisa Thompson",
            role: "Minőségbiztosítási Vezető",
            company: "Precision Systems",
            rating: 5
          }
        ]
      },

      guarantees: [
        {
          icon: Shield,
          title: "100% Elégedettségi Garancia",
          description: "Teljes visszatérítés, ha nem teljesen elégedett 90 napon belül"
        },
        {
          icon: Award,
          title: "Teljesítmény Garancia",
          description: "Garantáljuk minimum 200% ROI-t vagy ingyen dolgozunk"
        },
        {
          icon: Clock,
          title: "Időben Szállítás",
          description: "Projekt befejezés ütemezés szerint vagy 10% kedvezmény"
        },
        {
          icon: Users,
          title: "24/7 Szakértői Támogatás",
          description: "Korlátlan hozzáférés mérnöki csapatunkhoz első évben"
        }
      ],

      contact: {
        phone: "+36 1 234 5678",
        email: "megoldasok@assemblyexperts.hu",
        address: "1234 Budapest, Innovációs út 123.",
        hours: "24/7 Sürgősségi Támogatás Elérhető"
      },

      form: {
        name: "Teljes Név",
        email: "Üzleti Email",
        company: "Cég Neve",
        phone: "Telefonszám",
        project: "Projekt Leírása",
        timeline: "Preferált Időkeret",
        budget: "Költségvetési Sávok",
        submit: "Ingyenes Konzultációm Kérése",
        privacy: "Tiszteletben tartjuk magánszféráját. Információi biztonságban vannak és soha nem osztjuk meg."
      }
    }
  };

  const content = ctaContent[language];
  const activeOfferData = content.ctaOptions[activeOffer];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-pink-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1000px' }}
    >
      {/* Ultra-sophisticated particle system */}
      <div className="absolute inset-0 overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className={`absolute ${sparkle.color}`}
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={sparkle.size} />
          </motion.div>
        ))}
      </div>

      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-700"
        style={{
          background: `radial-gradient(circle 1000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.4), rgba(219, 39, 119, 0.3), rgba(59, 130, 246, 0.2), transparent)`,
        }}
      />

      {/* Floating geometric shapes with ultra-sophisticated animations */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl"
        style={{ y: y1, rotate, scale }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl"
        style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [0, -15]) }}
        animate={{
          scale: [1, 0.8, 1],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={viewRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
          style={{ opacity }}
        >
          {/* Urgency Banner */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-xl rounded-full border border-red-500/50 shadow-2xl"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                  '0 0 40px rgba(249, 115, 22, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame size={20} className="text-yellow-300 animate-pulse" />
              <div className="text-white">
                <span className="font-bold">{content.urgencyOffer.title}</span>
                <span className="mx-3">•</span>
                <span className="font-mono text-yellow-300">{formatTime(urgencyTimer)}</span>
              </div>
              <Flame size={20} className="text-yellow-300 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Hero Header */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-xl border border-white/20 text-purple-200 mb-6">
                <Rocket size={16} className="mr-2" />
                {content.badge}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {content.title}
              <motion.span 
                className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {content.subtitle}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl text-purple-100 leading-relaxed mb-8"
            >
              {content.description}
            </motion.p>

            {/* Value Proposition Banner */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-2xl border border-yellow-400/30"
            >
              <Crown size={32} className="text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{content.urgencyOffer.value}</div>
                <div className="text-yellow-300">{content.urgencyOffer.subtitle}</div>
              </div>
              <Gift size={32} className="text-yellow-400" />
            </motion.div>
          </div>

          {/* Interactive CTA Options */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {language === 'en' ? 'Choose Your Path to Success' : 'Válassza Ki Sikeres Útját'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
            </div>

            {/* CTA Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {content.ctaOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -15,
                    rotateX: 5,
                    rotateY: index === 1 ? 0 : index === 0 ? -5 : 5,
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveOffer(index)}
                  className={`group cursor-pointer relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${
                    activeOffer === index
                      ? 'border-purple-400/60 shadow-2xl shadow-purple-500/25'
                      : 'border-white/20 shadow-xl hover:border-purple-400/40'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    rotateX: useTransform(mouseY, [0, 1], [2, -2]),
                    rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
                  }}
                >
                  {/* Popular Badge */}
                  {index === 1 && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-sm rounded-full shadow-lg"
                      animate={{
                        y: [-2, 2, -2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {language === 'en' ? 'Most Popular' : 'Legnépszerűbb'}
                    </motion.div>
                  )}

                  {/* Value Badge */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                    {option.value}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon size={40} />
                  </div>

                  {/* Content */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-lg text-purple-300 font-medium mb-4">{option.subtitle}</p>
                    <p className="text-purple-200 leading-relaxed mb-6">{option.description}</p>

                    {/* Features List */}
                    <div className="space-y-3 text-left">
                      {option.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                          <span className="text-white text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/20 text-red-300 text-sm font-medium rounded-full border border-red-400/30"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Clock size={14} />
                      <span>{option.urgency}</span>
                    </motion.div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r ${option.color} shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center justify-center space-x-2">
                      <span>{option.cta}</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  {/* Floating Action Indicators */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Zap size={20} className="text-white" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Proof Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">{content.socialProof.title}</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
            </div>

            {/* Testimonials Carousel */}
            <div className="grid md:grid-cols-3 gap-8">
              {content.socialProof.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl relative"
                  style={{
                    rotateX: useTransform(mouseY, [0, 1], [1, -1]),
                    rotateY: useTransform(mouseX, [0, 1], [-1, 1]),
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-purple-300">{testimonial.role}</div>
                      <div className="text-sm text-purple-400">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Floating Quote Icon */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-black font-bold text-lg">"</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Client Logos */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-8 opacity-60"
            >
              {content.socialProof.logos && content.socialProof.logos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center"
                >
                  <Building size={20} className="text-white" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Guarantees Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                {language === 'en' ? 'Risk-Free Guarantees' : 'Kockázatmentes Garanciák'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <guarantee.icon size={28} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3">{guarantee.title}</h4>
                  <p className="text-sm text-purple-200 leading-relaxed">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA with Contact Form */}
          <motion.div variants={itemVariants} className="text-center space-y-12">
            <motion.div
              className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl"
              style={{
                rotateX: useTransform(mouseY, [0, 1], [2, -2]),
                rotateY: useTransform(mouseX, [0, 1], [-2, 2]),
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="max-w-4xl mx-auto space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {language === 'en' ? 'Ready to Get Started?' : 'Készen Áll a Kezdésre?'}
                  </h3>
                  <p className="text-xl text-purple-200">
                    {content.urgencyOffer.description}
                  </p>
                </div>

                {/* Quick Contact Options */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <motion.a
                    href={`tel:${content.contact.phone}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone size={24} className="text-green-400" />
                    <div className="text-left">
                      <div className="font-semibold">Call Now</div>
                      <div className="text-sm text-purple-300">{content.contact.phone}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`mailto:${content.contact.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <Mail size={24} className="text-blue-400" />
                    <div className="text-left">
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm text-purple-300">Instant Response</div>
                    </div>
                  </motion.a>

                  <motion.button
                    onClick={() => setShowContactForm(!showContactForm)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center space-x-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <MessageCircle size={24} className="text-purple-400" />
                    <div className="text-left">
                      <div className="font-semibold">Quick Form</div>
                      <div className="text-sm text-purple-300">30 Seconds</div>
                    </div>
                  </motion.button>
                </div>

                {/* Contact Form */}
                <AnimatePresence>
                  {showContactForm && (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      onSubmit={handleFormSubmit}
                      className="grid sm:grid-cols-2 gap-6 mt-8"
                    >
                      <input
                        type="text"
                        placeholder={content.form.name}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                        required
                      />
                      <input
                        type="email"
                        placeholder={content.form.email}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        placeholder={content.form.company}
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder={content.form.phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none"
                      />
                      <textarea
                        placeholder={content.form.project}
                        value={formData.project}
                        onChange={(e) => setFormData({...formData, project: e.target.value})}
                        rows={4}
                        className="sm:col-span-2 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none resize-none"
                      />
                      
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="sm:col-span-2 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative flex items-center justify-center space-x-2">
                          <span>{content.form.submit}</span>
                          <Send size={20} />
                        </span>
                      </motion.button>
                      
                      <p className="sm:col-span-2 text-sm text-purple-300 text-center">
                        {content.form.privacy}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Ultimate CTA Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f97316)',
                    backgroundSize: '300% 300%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative flex items-center space-x-3">
                    <Rocket size={28} />
                    <span>{language === 'en' ? 'Transform My Manufacturing NOW' : 'Alakítsam Át Gyártásomat MOST'}</span>
                    <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      y: [-2, 2, -2],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyCallToAction;