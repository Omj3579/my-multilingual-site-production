import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle, Calendar, FileText, Mail, Phone, MapPin } from 'lucide-react';

const CallToAction = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const ctaContent = {
    badge: {
      en: "Ready to Start?",
      hu: "Készen áll a kezdésre?"
    },
    title: {
      en: "Let's Build Something<br/>Extraordinary Together",
      hu: "Építsünk Valamit<br/>Rendkívülit Együtt"
    },
    subtitle: {
      en: "Ready to transform your manufacturing processes? Our team of experts is here to help you achieve unprecedented quality and efficiency.",
      hu: "Készen áll gyártási folyamatai átalakítására? Szakértői csapatunk itt van, hogy segítsen példátlan minőség és hatékonyság elérésében."
    },
    actions: [
      {
        type: 'primary',
        icon: <MessageCircle className="w-5 h-5" />,
        label: { en: "Start a Conversation", hu: "Beszélgetés Kezdése" },
        description: { en: "Discuss your project requirements", hu: "Projekt követelményeinek megvitatása" },
        href: '/contact'
      },
      {
        type: 'secondary',
        icon: <Calendar className="w-5 h-5" />,
        label: { en: "Schedule Consultation", hu: "Konzultáció Időpontja" },
        description: { en: "Book a free strategy session", hu: "Ingyenes stratégiai megbeszélés" },
        href: '/consultation'
      },
      {
        type: 'tertiary',
        icon: <FileText className="w-5 h-5" />,
        label: { en: "Download Resources", hu: "Források Letöltése" },
        description: { en: "Access technical documentation", hu: "Műszaki dokumentáció elérése" },
        href: '/resources'
      }
    ],
    contact: {
      title: { en: "Direct Contact", hu: "Közvetlen Kapcsolat" },
      methods: [
        {
          icon: <Mail className="w-5 h-5" />,
          label: { en: "Email", hu: "E-mail" },
          value: "info@flairplastic.com",
          href: "mailto:info@flairplastic.com"
        },
        {
          icon: <Phone className="w-5 h-5" />,
          label: { en: "Phone", hu: "Telefon" },
          value: "+36 1 234 5678",
          href: "tel:+3612345678"
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          label: { en: "Location", hu: "Helyszín" },
          value: "Budapest, Hungary",
          href: "/contact#location"
        }
      ]
    },
    stats: [
      {
        value: "24h",
        label: { en: "Response Time", hu: "Válaszidő" }
      },
      {
        value: "500+",
        label: { en: "Projects Completed", hu: "Befejezett Projekt" }
      },
      {
        value: "15+",
        label: { en: "Years Experience", hu: "Év Tapasztalat" }
      }
    ]
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent)`,
        }}
      />

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-cyan-300 rounded-full text-sm font-medium mb-4 border border-white/20">
              <ArrowRight className="w-4 h-4" />
              {ctaContent.badge[language]}
            </div>
            
            <h2 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: ctaContent.title[language] }}
            />
            
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {ctaContent.subtitle[language]}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Actions */}
            <div className="lg:col-span-2 space-y-6">
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {language === 'hu' ? "Hogyan kezdjük el?" : "How Can We Start?"}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ctaContent.actions.map((action, index) => (
                  <motion.a
                    key={index}
                    href={action.href}
                    className={`group relative p-6 rounded-2xl transition-all duration-500 border ${
                      action.type === 'primary'
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : action.type === 'secondary'
                        ? 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white'
                        : 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/15 text-white'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    data-hover="true"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        action.type === 'primary' ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">
                          {action.label[language]}
                        </h4>
                        <p className={`text-sm ${
                          action.type === 'primary' ? 'text-white/90' : 'text-white/70'
                        }`}>
                          {action.description[language]}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {ctaContent.contact.title[language]}
              </h3>

              <div className="space-y-4 mb-8">
                {ctaContent.contact.methods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                    whileHover={{ x: 5 }}
                    data-hover="true"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-cyan-300 group-hover:text-cyan-200">
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-sm text-white/70">{method.label[language]}</div>
                      <div className="text-white font-medium">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-cyan-300 mb-3">
                  {language === 'hu' ? "Gyors tények" : "Quick Facts"}
                </h4>
                {ctaContent.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-2">
                    <span className="text-white/70 text-sm">{stat.label[language]}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-blue-100 mb-6">
              {language === 'hu' 
                ? "Több mint 500 sikeres projekt áll mögöttünk. Az Ön projektje lehet a következő."
                : "Over 500 successful projects behind us. Your project could be next."
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {language === 'hu' ? "Kezdjük el most" : "Start Now"}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-hover="true"
              >
                {language === 'hu' ? "További esettanulmányok" : "More Case Studies"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;