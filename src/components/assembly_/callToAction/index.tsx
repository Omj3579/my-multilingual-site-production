import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  MessageCircle,
  Play,
  Target,
  Shield,
  Award,
  Clock,
  Users
} from 'lucide-react';

// Import sub-components
import UrgencyBanner from './components/UrgencyBanner';
import HeroHeader from './components/HeroHeader';
import CTACards from './components/CTACards';
import SocialProof from './components/SocialProof';
import Guarantees from './components/Guarantees';
import FinalCTA from './components/FinalCTA';
import UltimateCTAButton from './components/UltimateCTAButton';
import BackgroundEffects from './components/BackgroundEffects';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  timeline: string;
  budget: string;
}

const AssemblyCallToAction = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { amount: 0.1, once: true });  const [activeOffer, setActiveOffer] = useState(0);
  const [formData, setFormData] = useState<FormData>({
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
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
    // Ultra-sophisticated transforms like case study
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.8]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Sparkle animation system
  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
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
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const formatTime = (seconds: number) => {
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
      ],      socialProof: {
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

  const content = ctaContent[language as keyof typeof ctaContent];

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };
  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >      {/* Background Effects Component */}
      <BackgroundEffects
        sparkles={sparkles}
        y1={y1}
        y2={y2}
        rotate={rotate}
        scale={scale}
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
            <UrgencyBanner
              title={content.urgencyOffer.title}
              urgencyTimer={urgencyTimer}
              formatTime={formatTime}
            />
          </motion.div>

          {/* Hero Header */}
          <HeroHeader
            badge={content.badge}
            title={content.title}
            subtitle={content.subtitle}
            description={content.description}
            urgencyOffer={content.urgencyOffer}
            itemVariants={itemVariants}
          />

          {/* Interactive CTA Options */}
          <CTACards
            ctaOptions={content.ctaOptions}
            activeOffer={activeOffer}
            setActiveOffer={setActiveOffer}
            itemVariants={itemVariants}
            mouseX={mouseX}
            mouseY={mouseY}
            language={language}
          />          {/* Social Proof Section */}
          <SocialProof
            title={content.socialProof.title}
            testimonials={content.socialProof.testimonials}
            logos={content.socialProof.logos || []}
            itemVariants={itemVariants}
            mouseX={mouseX}
            mouseY={mouseY}
          />

          {/* Guarantees Section */}
          <Guarantees
            guarantees={content.guarantees}
            itemVariants={itemVariants}
            language={language}
          />

          {/* Final CTA with Contact Form */}
          <FinalCTA
            language={language}
            urgencyOffer={content.urgencyOffer}
            contact={content.contact}
            form={content.form}
            showContactForm={showContactForm}
            setShowContactForm={setShowContactForm}
            formData={formData}
            setFormData={setFormData}
            handleFormSubmit={handleFormSubmit}
            itemVariants={itemVariants}
            mouseX={mouseX}
            mouseY={mouseY}
          />

          {/* Ultimate CTA Button */}
          <motion.div variants={itemVariants} className="text-center">
            <UltimateCTAButton language={language} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssemblyCallToAction;