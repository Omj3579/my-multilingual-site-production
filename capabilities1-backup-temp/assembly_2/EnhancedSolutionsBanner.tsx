import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Settings, BarChart3, Shield, Thermometer, Package, FileText, Wrench, Code, TrendingUp, Eye } from 'lucide-react';

const EnhancedSolutionsBanner = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [activeSegment, setActiveSegment] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [chartAnimated, setChartAnimated] = useState(false);
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const viewRef = useRef(null);
  const chartInView = useInView(chartRef, { threshold: 0.3, triggerOnce: true });
  const inView = useInView(viewRef, { threshold: 0.1, triggerOnce: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // Move this hook outside the conditional block
  const bottomElementY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (chartInView && !chartAnimated) {
      setChartAnimated(true);
    }
  }, [chartInView, chartAnimated]);

  // Content from SolutionsBanner.md
  const content = {
    badge: {
      en: "Comprehensive Capabilities",
      hu: "Átfogó Képességek"
    },
    title: {
      en: "Beyond Assembly: Complete Solutions",
      hu: "Túl az Összeszerelésen: Átfogó Megoldások"
    },
    description: {
      en: "Across our facilities, we offer advanced assembly and project management services, encompassing a wide range of capabilities to meet your manufacturing needs.",
      hu: "Létesítményeinkben fejlett összeszerelési és projektmenedzsment szolgáltatásokat kínálunk, amelyek széles körű képességeket foglalnak magukban a gyártási igényeinek kielégítésére."
    },
    services: [
      {
        title: {
          en: "Manual/Automated Assembly",
          hu: "Kézi/Automatizált Összeszerelés"
        },
        description: {
          en: "Manual, semi-automated, and fully-automated assembly stations",
          hu: "Kézi, félautomata és teljesen automatizált szerelőállomások"
        },
        percentage: 20,
        icon: Settings,
        color: "#FF9F43"
      },
      {
        title: {
          en: "Measurement Analysis",
          hu: "Mérési Elemzés"
        },
        description: {
          en: "Analysis of measurement systems (MSA)",
          hu: "Mérési rendszerek elemzése (MSA)"
        },
        percentage: 15,
        icon: BarChart3,
        color: "#FF7F50"
      },
      {
        title: {
          en: "Durability Testing",
          hu: "Tartóssági Tesztelés"
        },
        description: {
          en: "Durability and longevity testing",
          hu: "Tartóssági és élettartam tesztelés"
        },
        percentage: 12,
        icon: Shield,
        color: "#FFB347"
      },
      {
        title: {
          en: "Temperature Testing",
          hu: "Hőmérséklet Tesztelés"
        },
        description: {
          en: "Heat and temperature resistance evaluations",
          hu: "Hő- és hőmérséklet-ellenállási értékelések"
        },
        percentage: 10,
        icon: Thermometer,
        color: "#FFCC80"
      },
      {
        title: {
          en: "Packaging Solutions",
          hu: "Csomagolási Megoldások"
        },
        description: {
          en: "Packaging solutions (including packaging integrity tests)",
          hu: "Csomagolási megoldások (beleértve a csomagolás integritási teszteket)"
        },
        percentage: 13,
        icon: Package,
        color: "#FFA726"
      },
      {
        title: {
          en: "Documentation",
          hu: "Dokumentáció"
        },
        description: {
          en: "Comprehensive documentation and reporting",
          hu: "Átfogó dokumentáció és jelentéskészítés"
        },
        percentage: 10,
        icon: FileText,
        color: "#FF8A65"
      },
      {
        title: {
          en: "Tool Design",
          hu: "Szerszámtervezés"
        },
        description: {
          en: "Tool and fixture design optimization",
          hu: "Szerszám- és rögzítőelemek tervezésének optimalizálása"
        },
        percentage: 10,
        icon: Wrench,
        color: "#FFD54F"
      },
      {
        title: {
          en: "Software Integration",
          hu: "Szoftver Integráció"
        },
        description: {
          en: "Software integration for assembly systems",
          hu: "Szoftverintegrálás szerelőrendszerekhez"
        },
        percentage: 10,
        icon: Code,
        color: "#F9A825"
      }
    ],
    cta: {
      href: {
        en: "/services",
        hu: "/szolgaltatasok"
      },
      text: {
        en: "Learn More About Our Services",
        hu: "Tudjon meg többet szolgáltatásainkról"
      }
    }
  };

  // Calculate chart segments
  const createChartPath = (percentage, startAngle = 0) => {
    const radius = 120;
    const centerX = 150;
    const centerY = 150;
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    
    const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  let cumulativeAngle = 0;

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50/50 to-red-50/30 overflow-hidden font-sans"
    >
      {/* Sophisticated Background Elements */}
      {isMounted && (
        <>
          <motion.div 
            className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-100/40 to-amber-100/40 blur-3xl"
            style={{ y: backgroundY }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-100/30 to-orange-100/30 blur-2xl"
            style={{ y: bottomElementY }}
          />
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-40 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-xl" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-200/15 to-amber-200/15 rounded-full blur-lg" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg width="100%" height="100%">
              <pattern id="solutions-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.3" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#solutions-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={viewRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border border-orange-200/50 mb-8 shadow-lg backdrop-blur-sm"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            {content.badge[language]}
          </motion.span>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              {content.title[language]}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            {content.description[language]}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Chart Section */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {language === 'en' ? 'Our Service Distribution' : 'Szolgáltatás Megoszlás'}
              </h3>
              
              {/* Interactive Pie Chart */}
              <div className="relative flex justify-center mb-8">
                <svg width="300" height="300" className="drop-shadow-lg">
                  {content.services.map((service, index) => {
                    const currentAngle = cumulativeAngle;
                    cumulativeAngle += service.percentage;
                    
                    return (
                      <motion.path
                        key={index}
                        d={createChartPath(service.percentage, currentAngle * 3.6)}
                        fill={service.color}
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-300"
                        style={{
                          filter: activeSegment === index ? 'brightness(1.1) drop-shadow(0 0 10px rgba(0,0,0,0.3))' : 'none',
                          transform: activeSegment === index ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: '150px 150px'
                        }}
                        onMouseEnter={() => setActiveSegment(index)}
                        onMouseLeave={() => setActiveSegment(null)}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={chartAnimated ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    );
                  })}
                  
                  {/* Center Circle */}
                  <circle
                    cx="150"
                    cy="150"
                    r="60"
                    fill="white"
                    stroke="#f3f4f6"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  
                  {/* Center Text */}
                  <text
                    x="150"
                    y="145"
                    textAnchor="middle"
                    className="text-lg font-bold fill-gray-900"
                  >
                    {language === 'en' ? 'Services' : 'Szolgáltatások'}
                  </text>
                  <text
                    x="150"
                    y="165"
                    textAnchor="middle"
                    className="text-sm fill-gray-600"
                  >
                    100%
                  </text>
                </svg>
                
                {/* Active Segment Info */}
                {activeSegment !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 max-w-xs"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: content.services[activeSegment].color }}
                      />
                      <h4 className="font-semibold text-gray-900">
                        {content.services[activeSegment].title[language]}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {content.services[activeSegment].description[language]}
                    </p>
                    <div className="text-lg font-bold text-orange-600">
                      {content.services[activeSegment].percentage}%
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Chart Legend */}
              <div className="grid grid-cols-2 gap-2">
                {content.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={chartAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                      activeSegment === index ? 'bg-gray-100' : 'hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setActiveSegment(index)}
                    onMouseLeave={() => setActiveSegment(null)}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 truncate">
                      {service.title[language]}
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {service.percentage}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {content.services.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: `${service.color}20`,
                      border: `2px solid ${service.color}40`
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon 
                      className="w-6 h-6 transition-colors"
                      style={{ color: service.color }}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {service.title[language]}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {service.description[language]}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ backgroundColor: service.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${service.percentage * 5}%` }}
                          transition={{ delay: 1 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-700">
                        {service.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* View All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center pt-4"
            >
              <motion.a
                href={content.cta.href[language]}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>{content.cta.text[language]}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSolutionsBanner;