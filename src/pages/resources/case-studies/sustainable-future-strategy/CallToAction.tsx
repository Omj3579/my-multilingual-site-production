import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Rocket, ArrowRight, Sparkles, Trophy, 
  Users, Heart, Star, Zap, 
  CheckCircle, Clock, Crown, 
  TrendingUp, Handshake, Network,
  Globe,          // Add this missing import
  Award,          // Add this missing import
  Calendar,       // Add this missing import
  Download,       // Add this missing import
  Video,          // Add this missing import
  Gem,            // Add this missing import
  Flame,          // Add this missing import
  Target          // Add this missing import
} from 'lucide-react';
import Image from 'next/image';

const CallToAction = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [activeAction, setActiveAction] = useState('partnership');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'partnership',
    budget: '',
    timeline: '',
    goals: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  // Advanced mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 300, damping: 100 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 300, damping: 100 });

  // Scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacityEffect = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const ctaContent = {
    badge: {
      en: "Join the Innovation Revolution",
      hu: "Csatlakozz az Innovációs Forradalomhoz"
    },
    title: {
      en: "Ready to Transform<br/><span class='cta-gradient'>Your Business Future?</span>",
      hu: "Készen állsz a<br/><span class='cta-gradient'>Üzleti Jövőd Átalakítására?</span>"
    },
    subtitle: {
      en: "Partner with us to unlock unprecedented innovation, sustainable growth, and market leadership. Let's build the future of manufacturing together through cutting-edge technology and strategic collaboration.",
      hu: "Légy partnerünk, hogy feloldd a példátlan innovációt, fenntartható növekedést és piaci vezetést. Építsük együtt a gyártás jövőjét élvonalbeli technológiával és stratégiai együttműködéssel."
    },
    actions: [
      {
        id: 'partnership',
        title: { en: 'Strategic Partnership', hu: 'Stratégiai Partnerség' },
        subtitle: { en: 'Join our global network of innovation leaders', hu: 'Csatlakozz globális innovációs vezetők hálózatához' },
        icon: <Handshake className="w-8 h-8" />,
        gradient: 'from-blue-500 via-cyan-500 to-teal-500',
        features: [
          { en: 'Exclusive Technology Access', hu: 'Exkluzív Technológiai Hozzáférés' },
          { en: 'Joint Innovation Projects', hu: 'Közös Innovációs Projektek' },
          { en: 'Global Market Expansion', hu: 'Globális Piaci Terjeszkedés' },
          { en: 'Revenue Sharing Models', hu: 'Bevételmegosztási Modellek' }
        ],
        benefits: {
          roi: '300%',
          timeframe: '6-12 months',
          investment: '$50K - $5M',
          success: '94%'
        }
      },
      {
        id: 'innovation',
        title: { en: 'Innovation Collaboration', hu: 'Innovációs Együttműködés' },
        subtitle: { en: 'Co-create breakthrough technologies and solutions', hu: 'Közösen hozz létre áttörő technológiákat és megoldásokat' },
        icon: <Zap className="w-8 h-8" />,
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        features: [
          { en: 'R&D Collaboration', hu: 'K+F Együttműködés' },
          { en: 'Patent Sharing', hu: 'Szabadalom Megosztás' },
          { en: 'AI-Powered Solutions', hu: 'AI-alapú Megoldások' },
          { en: 'Sustainability Focus', hu: 'Fenntarthatósági Fókusz' }
        ],
        benefits: {
          roi: '450%',
          timeframe: '3-6 months',
          investment: '$25K - $2M',
          success: '97%'
        }
      },
      {
        id: 'investment',
        title: { en: 'Investment Opportunity', hu: 'Befektetési Lehetőség' },
        subtitle: { en: 'Invest in the future of sustainable manufacturing', hu: 'Fektess be a fenntartható gyártás jövőjébe' },
        icon: <TrendingUp className="w-8 h-8" />,
        gradient: 'from-emerald-500 via-green-500 to-lime-500',
        features: [
          { en: 'High Growth Potential', hu: 'Magas Növekedési Potenciál' },
          { en: 'ESG Compliance', hu: 'ESG Megfelelőség' },
          { en: 'Market Leadership', hu: 'Piaci Vezetés' },
          { en: 'Scalable Solutions', hu: 'Skálázható Megoldások' }
        ],
        benefits: {
          roi: '500%',
          timeframe: '12-24 months',
          investment: '$100K - $50M',
          success: '89%'
        }
      },
      {
        id: 'consultation',
        title: { en: 'Expert Consultation', hu: 'Szakértői Konzultáció' },
        subtitle: { en: 'Get personalized insights and strategic guidance', hu: 'Szerezz személyre szabott betekintéseket és stratégiai útmutatást' },
        icon: <Users className="w-8 h-8" />,
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        features: [
          { en: 'Custom Strategy Development', hu: 'Egyedi Stratégiai Fejlesztés' },
          { en: 'Market Analysis', hu: 'Piaci Elemzés' },
          { en: 'Technology Roadmap', hu: 'Technológiai Ütemterv' },
          { en: 'Implementation Support', hu: 'Megvalósítási Támogatás' }
        ],
        benefits: {
          roi: '250%',
          timeframe: '1-3 months',
          investment: '$5K - $50K',
          success: '98%'
        }
      }
    ],
    socialProof: {
      totalPartners: 254,
      successRate: 94,
      avgRoi: 380,
      projectsCompleted: 1247,
      companiesTransformed: 89,
      marketValue: 2.8,
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'CEO, GreenTech Solutions',
          company: 'Fortune 500',
          quote: {
            en: 'Working with them transformed our entire manufacturing process. We achieved 40% cost reduction and 60% sustainability improvement in just 8 months.',
            hu: 'A velük való együttműködés átalakította teljes gyártási folyamatunkat. 40%-os költségcsökkentést és 60%-os fenntarthatósági javulást értünk el mindössze 8 hónap alatt.'
          },
          avatar: '/images/testimonials/sarah-johnson.jpg',
          metrics: {
            costReduction: 40,
            sustainabilityImprovement: 60,
            timeframe: 8
          }
        },
        {
          name: 'Dr. Michael Chen',
          role: 'CTO, Innovation Labs',
          company: 'Tech Unicorn',
          quote: {
            en: 'Their AI-powered solutions revolutionized our product development cycle. We now launch products 3x faster with 90% fewer defects.',
            hu: 'AI-alapú megoldásaik forradalmasították termékfejlesztési ciklusunkat. Most 3x gyorsabban indítunk termékeket 90%-kal kevesebb hibával.'
          },
          avatar: '/images/testimonials/michael-chen.jpg',
          metrics: {
            speedImprovement: 300,
            defectReduction: 90,
            timeframe: 6
          }
        },
        {
          name: 'Emma Rodriguez',
          role: 'Head of Sustainability',
          company: 'Global Manufacturing',
          quote: {
            en: 'The circular economy implementation exceeded all expectations. We achieved carbon neutrality 2 years ahead of schedule and saved $15M annually.',
            hu: 'A körforgásos gazdasági megvalósítás minden várakozást felülmúlt. 2 évvel a tervezett határidő előtt értük el a szén-semlegességet és évente 15 millió dollárt takarítottunk meg.'
          },
          avatar: '/images/testimonials/emma-rodriguez.jpg',
          metrics: {
            carbonReduction: 100,
            savings: 15,
            timeframe: 24
          }
        }
      ]
    },
    form: {
      title: { en: 'Start Your Transformation Journey', hu: 'Kezdd el Átalakulási Utazásod' },
      subtitle: { en: 'Tell us about your goals and we\'ll create a customized innovation roadmap for your business.', hu: 'Mesélj a céljaidról és egyedi innovációs ütemtervet készítünk vállalkozásod számára.' },
      fields: {
        name: { en: 'Full Name *', hu: 'Teljes Név *' },
        email: { en: 'Business Email *', hu: 'Üzleti E-mail *' },
        company: { en: 'Company Name *', hu: 'Cég Neve *' },
        phone: { en: 'Phone Number', hu: 'Telefonszám' },
        interest: { en: 'Primary Interest *', hu: 'Elsődleges Érdeklődés *' },
        budget: { en: 'Investment Budget', hu: 'Befektetési Költségvetés' },
        timeline: { en: 'Expected Timeline', hu: 'Várt Időkeret' },
        message: { en: 'Project Details & Goals', hu: 'Projekt Részletek és Célok' },
        goals: { en: 'Key Objectives (select all that apply)', hu: 'Fő Célkitűzések (válaszd ki az összeset, ami vonatkozik)' }
      },
      budgetOptions: [
        { value: 'under-25k', label: { en: 'Under $25K', hu: '$25K Alatt' } },
        { value: '25k-100k', label: { en: '$25K - $100K', hu: '$25K - $100K' } },
        { value: '100k-500k', label: { en: '$100K - $500K', hu: '$100K - $500K' } },
        { value: '500k-2m', label: { en: '$500K - $2M', hu: '$500K - $2M' } },
        { value: 'over-2m', label: { en: 'Over $2M', hu: '$2M Felett' } }
      ],
      timelineOptions: [
        { value: 'immediate', label: { en: 'Immediate (1-3 months)', hu: 'Azonnali (1-3 hónap)' } },
        { value: 'short-term', label: { en: 'Short-term (3-6 months)', hu: 'Rövid távú (3-6 hónap)' } },
        { value: 'medium-term', label: { en: 'Medium-term (6-12 months)', hu: 'Közép távú (6-12 hónap)' } },
        { value: 'long-term', label: { en: 'Long-term (12+ months)', hu: 'Hosszú távú (12+ hónap)' } }
      ],
      goalOptions: [
        { id: 'cost-reduction', label: { en: 'Cost Reduction', hu: 'Költségcsökkentés' }, icon: <TrendingUp className="w-4 h-4" /> },
        { id: 'sustainability', label: { en: 'Sustainability Goals', hu: 'Fenntarthatósági Célok' }, icon: <Heart className="w-4 h-4" /> },
        { id: 'automation', label: { en: 'Process Automation', hu: 'Folyamat Automatizálás' }, icon: <Zap className="w-4 h-4" /> },
        { id: 'innovation', label: { en: 'Innovation Leadership', hu: 'Innovációs Vezetés' }, icon: <Sparkles className="w-4 h-4" /> },
        { id: 'market-expansion', label: { en: 'Market Expansion', hu: 'Piaci Terjeszkedés' }, icon: <Globe className="w-4 h-4" /> },
        { id: 'quality-improvement', label: { en: 'Quality Improvement', hu: 'Minőségjavítás' }, icon: <Award className="w-4 h-4" /> }
      ],
      submitButton: { en: 'Start Transformation', hu: 'Átalakulás Indítása' },
      submittingButton: { en: 'Initiating...', hu: 'Indítás...' },
      successMessage: { 
        en: 'Your transformation journey has begun! Our innovation team will contact you within 24 hours.',
        hu: 'Átalakulási utazásod elkezdődött! Innovációs csapatunk 24 órán belül felveszi veled a kapcsolatot.'
      }
    }
  };

  // Handle mouse movement for 3D effects
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Create ripple effect
  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = { x, y, id: Date.now() };
    
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 1000);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          interest: 'partnership',
          budget: '',
          timeline: '',
          goals: []
        });
        setShowSuccess(false);
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form field changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle goal selection
  const handleGoalToggle = (goalId) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const currentAction = ctaContent.actions.find(action => action.id === activeAction);

  return (
    <section 
      ref={containerRef} 
      className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Epic Background Effects */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,theme(colors.blue.500/30),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,theme(colors.purple.500/30),transparent_50%)]"></div>
        <div className="absolute bottom-0 center w-full h-full bg-[radial-gradient(circle_at_50%_100%,theme(colors.indigo.500/25),transparent_60%)]"></div>
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "linear"
          }}
        />
        
        {/* Floating Success Elements */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.2, 1.2, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          >
            {i % 10 === 0 && <Rocket className="w-6 h-6 text-blue-400/40" />}
            {i % 10 === 1 && <Star className="w-5 h-5 text-yellow-400/40" />}
            {i % 10 === 2 && <Sparkles className="w-5 h-5 text-pink-400/40" />}
            {i % 10 === 3 && <Trophy className="w-6 h-6 text-orange-400/40" />}
            {i % 10 === 4 && <Crown className="w-5 h-5 text-purple-400/40" />}
            {i % 10 === 5 && <Gem className="w-5 h-5 text-cyan-400/40" />}
            {i % 10 === 6 && <Flame className="w-6 h-6 text-red-400/40" />}
            {i % 10 === 7 && <Zap className="w-5 h-5 text-green-400/40" />}
            {i % 10 === 8 && <Heart className="w-5 h-5 text-rose-400/40" />}
            {i % 10 === 9 && <Target className="w-5 h-5 text-indigo-400/40" />}
          </motion.div>
        ))}

        {/* Success Particle System */}
        {showSuccess && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={`success-${i}`}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: `${50 + (Math.random() - 0.5) * 20}%`,
                  top: `${50 + (Math.random() - 0.5) * 20}%`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 500],
                  y: [0, (Math.random() - 0.5) * 500],
                  opacity: [1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="text-center mb-20"
          style={{ 
            scale: scaleEffect,
            opacity: opacityEffect,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-blue-400/30 rounded-full mb-8"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
              borderColor: 'rgba(59, 130, 246, 0.6)'
            }}
            animate={isHovering ? { 
              boxShadow: [
                '0 0 30px rgba(59, 130, 246, 0.3)',
                '0 0 60px rgba(139, 92, 246, 0.4)',
                '0 0 30px rgba(236, 72, 153, 0.3)',
                '0 0 30px rgba(59, 130, 246, 0.3)',
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-blue-300" />
            <span className="text-blue-200 font-semibold text-lg">
              {ctaContent.badge[language]}
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: ctaContent.title[language] }}
          />

          <motion.p 
            className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {ctaContent.subtitle[language]}
          </motion.p>

          {/* Social Proof Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              { 
                value: `${ctaContent.socialProof.totalPartners}+`, 
                label: { en: 'Global Partners', hu: 'Globális Partnerek' },
                icon: <Network className="w-6 h-6" />,
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                value: `${ctaContent.socialProof.successRate}%`, 
                label: { en: 'Success Rate', hu: 'Sikerességi Arány' },
                icon: <Trophy className="w-6 h-6" />,
                color: 'from-green-500 to-emerald-500'
              },
              { 
                value: `${ctaContent.socialProof.avgRoi}%`, 
                label: { en: 'Average ROI', hu: 'Átlagos ROI' },
                icon: <TrendingUp className="w-6 h-6" />,
                color: 'from-purple-500 to-pink-500'
              },
              { 
                value: `$${ctaContent.socialProof.marketValue}B`, 
                label: { en: 'Market Value', hu: 'Piaci Érték' },
                icon: <Crown className="w-6 h-6" />,
                color: 'from-orange-500 to-yellow-500'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                data-hover="true"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                      '0 0 10px rgba(255,255,255,0.3)',
                      '0 0 20px rgba(59,130,246,0.5)',
                      '0 0 10px rgba(255,255,255,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label[language]}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <style jsx>{`
            .cta-gradient {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #06b6d4);
              background-size: 600% 600%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: cta-flow 8s ease-in-out infinite;
            }
            
            @keyframes cta-flow {
              0%, 100% { background-position: 0% 50%; }
              20% { background-position: 100% 0%; }
              40% { background-position: 100% 100%; }
              60% { background-position: 0% 100%; }
              80% { background-position: 50% 50%; }
            }
          `}</style>
        </motion.div>

        {/* Action Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {ctaContent.actions.map((action, index) => (
            <motion.div
              key={action.id}
              className={`relative cursor-pointer group ${
                activeAction === action.id ? 'ring-2 ring-white/50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: '0 25px 50px rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => setActiveAction(action.id)}
              onMouseDown={createRipple}
              data-hover="true"
            >
              <div className="relative overflow-hidden bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full">
                {/* Ripple Effects */}
                {ripples.map(ripple => (
                  <motion.div
                    key={ripple.id}
                    className="absolute rounded-full bg-white/20"
                    style={{
                      left: ripple.x - 25,
                      top: ripple.y - 25,
                      width: 50,
                      height: 50,
                    }}
                    animate={{
                      scale: [0, 4],
                      opacity: [0.6, 0],
                    }}
                    transition={{ duration: 1 }}
                  />
                ))}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {action.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {action.title[language]}
                </h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  {action.subtitle[language]}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {action.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature[language]}
                    </li>
                  ))}
                </ul>
                
                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">
                      {action.benefits.roi}
                    </div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">
                      {action.benefits.success}
                    </div>
                    <div className="text-xs text-blue-200">
                      {language === 'hu' ? 'Siker' : 'Success'}
                    </div>
                  </div>
                </div>

                {/* Selection Indicator */}
                {activeAction === action.id && (
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle className="w-5 h-5 text-black" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {ctaContent.form.title[language]}
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed">
                {ctaContent.form.subtitle[language]}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {ctaContent.form.fields.name[language]}
                  </label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder={language === 'hu' ? 'Pl. Kovács János' : 'e.g. John Smith'}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {ctaContent.form.fields.email[language]}
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder={language === 'hu' ? 'janos@ceg.hu' : 'john@company.com'}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {ctaContent.form.fields.company[language]}
                  </label>
                  <motion.input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder={language === 'hu' ? 'Cég Neve Kft.' : 'Your Company Ltd.'}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {ctaContent.form.fields.phone[language]}
                  </label>
                  <motion.input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder={language === 'hu' ? '+36 20 123 4567' : '+1 (555) 123-4567'}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {ctaContent.form.fields.interest[language]}
                  </label>
                  <motion.select
                    value={formData.interest}
                    onChange={(e) => handleInputChange('interest', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    required
                    whileFocus={{ scale: 1.02 }}
                  >
                    {ctaContent.actions.map(action => (
                      <option key={action.id} value={action.id} className="bg-gray-800">
                        {action.title[language]}
                      </option>
                    ))}
                  </motion.select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {ctaContent.form.fields.budget[language]}
                  </label>
                  <motion.select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="" className="bg-gray-800">
                      {language === 'hu' ? 'Válassz költségvetést...' : 'Select budget range...'}
                    </option>
                    {ctaContent.form.budgetOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-gray-800">
                        {option.label[language]}
                      </option>
                    ))}
                  </motion.select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-white font-medium mb-3">
                  {ctaContent.form.fields.timeline[language]}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ctaContent.form.timelineOptions.map(option => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('timeline', option.value)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        formData.timeline === option.value
                          ? 'bg-blue-500 text-white border-2 border-blue-400'
                          : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      data-hover="true"
                    >
                      {option.label[language]}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div>
                <label className="block text-white font-medium mb-3">
                  {ctaContent.form.fields.goals[language]}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ctaContent.form.goalOptions.map(goal => (
                    <motion.button
                      key={goal.id}
                      type="button"
                      onClick={() => handleGoalToggle(goal.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                        formData.goals.includes(goal.id)
                          ? 'bg-green-500 text-white border-2 border-green-400'
                          : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      data-hover="true"
                    >
                      {goal.icon}
                      {goal.label[language]}
                      {formData.goals.includes(goal.id) && (
                        <CheckCircle className="w-4 h-4 ml-auto" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-3">
                  {ctaContent.form.fields.message[language]}
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder={language === 'hu' 
                    ? 'Írj részletesen a projektről, céljaidról és elvárásaidról...'
                    : 'Tell us about your project, goals, and expectations in detail...'
                  }
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-3 px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-blue-500/25'
                  } text-white shadow-xl`}
                  whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  onMouseDown={!isSubmitting ? createRipple : undefined}
                  data-hover={!isSubmitting ? "true" : "false"}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock className="w-6 h-6" />
                      </motion.div>
                      {ctaContent.form.submittingButton[language]}
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      {language === 'hu' ? 'Sikeres!' : 'Success!'}
                    </>
                  ) : (
                    <>
                      <Rocket className="w-6 h-6" />
                      {ctaContent.form.submitButton[language]}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p 
                    className="mt-4 text-green-300 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {ctaContent.form.successMessage[language]}
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {language === 'hu' ? 'Mit Mondanak Partnereink' : 'What Our Partners Say'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaContent.socialProof.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                data-hover="true"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    </div>
                    <p className="text-sm text-blue-200">{testimonial.role}</p>
                    <p className="text-xs text-blue-300">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  "{testimonial.quote[language]}"
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="bg-white/5 rounded-lg p-2">
                      <div className="text-lg font-bold text-green-400">
                        {typeof value === 'number' ? `${value}${key.includes('Reduction') || key.includes('Increase') || key.includes('Improvement') ? '%' : key.includes('Savings') ? 'M$' : ''}` : value}
                      </div>
                      <div className="text-xs text-blue-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-12">
            <motion.button 
              className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Calendar className="w-5 h-5" />
              {language === 'hu' ? 'Időpont Foglalás' : 'Schedule Call'}
            </motion.button>
            
            <motion.button 
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Download className="w-5 h-5" />
              {language === 'hu' ? 'Információs Csomag' : 'Info Package'}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Final CTA Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'hu' 
              ? 'Készen Állsz a Jövő Felépítésére?' 
              : 'Ready to Build the Future?'
            }
          </h3>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {language === 'hu'
              ? 'Csatlakozz hozzánk ebben az izgalmas utazásban, ahol az innováció találkozik a fenntarthatósággal, és a technológia az emberiség szolgálatában áll.'
              : 'Join us on this exciting journey where innovation meets sustainability, and technology serves humanity.'
            }
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Rocket className="w-5 h-5" />
              {language === 'hu' ? 'Kezdjük El Most' : 'Start Now'}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-hover="true"
            >
              <Video className="w-5 h-5" />
              {language === 'hu' ? 'Virtuális Bemutató' : 'Virtual Demo'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;