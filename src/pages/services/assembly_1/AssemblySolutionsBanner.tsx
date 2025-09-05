import { useLanguage } from '@/contexts/LanguageContext';
import { Settings, FileText, Package, Flame, Award, ChartBar, Wrench, FileCode } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AssemblySolutionsBanner = () => {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      icon: Settings,
      text: language === 'en' ? "Manual, semi-automated, and fully-automated assembly stations" : "Kézi, félautomata és teljesen automatizált szerelőállomások",
      color: "#FF9F43",
      percentage: 20
    },
    {
      icon: ChartBar,
      text: language === 'en' ? "Analysis of measurement systems (MSA)" : "Mérési rendszerek elemzése (MSA)",
      color: "#FF7F50",
      percentage: 15
    },
    {
      icon: Award,
      text: language === 'en' ? "Durability and longevity testing" : "Tartóssági és élettartam tesztelés",
      color: "#FFB347",
      percentage: 12
    },
    {
      icon: Flame,
      text: language === 'en' ? "Heat and temperature resistance evaluations" : "Hő- és hőmérséklet-ellenállási értékelések",
      color: "#FFCC80",
      percentage: 10
    },
    {
      icon: Package,
      text: language === 'en' ? "Packaging solutions (including packaging integrity tests)" : "Csomagolási megoldások (beleértve a csomagolás integritási teszteket)",
      color: "#FFA726",
      percentage: 13
    },
    {
      icon: FileText,
      text: language === 'en' ? "Comprehensive documentation and reporting" : "Átfogó dokumentáció és jelentéskészítés",
      color: "#FF8A65",
      percentage: 10
    },
    {
      icon: Wrench,
      text: language === 'en' ? "Tool and fixture design optimization" : "Szerszám- és rögzítőelemek tervezésének optimalizálása",
      color: "#FFD54F",
      percentage: 10
    },
    {
      icon: FileCode,
      text: language === 'en' ? "Software integration for assembly systems" : "Szoftverintegrálás szerelőrendszerekhez",
      color: "#F9A825",
      percentage: 10
    }
  ];

  // Calculate start and end angles for donut chart segments
  const createDonutSegments = () => {
    let cumulativePercentage = 0;
    return services.map((service, index) => {
      const startAngle = (cumulativePercentage / 100) * 360;
      cumulativePercentage += service.percentage;
      const endAngle = (cumulativePercentage / 100) * 360;
      
      // Convert angles to radians and calculate arc path
      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);
      
      const x1 = 160 + 120 * Math.cos(startRad);
      const y1 = 160 + 120 * Math.sin(startRad);
      const x2 = 160 + 120 * Math.cos(endRad);
      const y2 = 160 + 120 * Math.sin(endRad);
      
      const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
      
      // Create SVG path for the segment
      const path = `M 160 160 L ${x1} ${y1} A 120 120 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
      
      return {
        path,
        color: service.color,
        index
      };
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-amber-50 to-amber-100 py-24 overflow-hidden">
      {/* Decorative elements - client-side only to prevent hydration mismatch */}
      {isMounted && (
        <>
          <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"></div>
          <div className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-gradient-radial from-orange-300/10 to-transparent blur-3xl"></div>
          <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-gradient-radial from-amber-200/20 to-transparent blur-3xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="solutions-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#solutions-grid)" />
            </svg>
          </div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content - Interactive Donut Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-5/12"
            ref={chartRef}
          >
            <div className="relative mx-auto w-[320px] h-[320px]">
              {/* Central circle with text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-white rounded-full flex flex-col items-center justify-center shadow-md z-20 border border-amber-100">
                <span className="text-sm uppercase tracking-wider font-medium text-amber-600">
                  {language === 'en' ? 'Solutions' : 'Megoldások'}
                </span>
                <span className="text-2xl font-bold text-orange-600">
                  {activeSegment !== null ? `${services[activeSegment].percentage}%` : '100%'}
                </span>
              </div>
              
              {/* Donut chart */}
              <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90">
                {createDonutSegments().map((segment, i) => (
                  <motion.path
                    key={i}
                    d={segment.path}
                    fill={segment.color}
                    initial={{ opacity: 0, scale: 0.8, transformOrigin: '160px 160px' }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    onMouseEnter={() => setActiveSegment(segment.index)}
                    onMouseLeave={() => setActiveSegment(null)}
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    strokeWidth={activeSegment === segment.index ? 2 : 0}
                    stroke="#fff"
                  />
                ))}
                {/* Inner white circle to create the donut */}
                <circle cx="160" cy="160" r="70" fill="white" />
              </svg>
              
              {/* Legend for smaller screens */}
              <div className="md:hidden mt-8 grid grid-cols-2 gap-2">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }}></div>
                    <span className="text-gray-700 truncate">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Title and Text */}
          <div className="w-full md:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left mb-8"
            >
              <span className="text-sm uppercase tracking-wider font-medium text-amber-700 mb-2 block">
                {language === 'en' ? 'Comprehensive Capabilities' : 'Átfogó Képességek'}
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                {language === 'en' ? (
                  <>
                    Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Assembly:</span>{" "}
                    Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Solutions</span>
                  </>
                ) : (
                  <>
                    Túl az <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Összeszerelésen:</span>{" "}
                    Átfogó <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Megoldások</span>
                  </>
                )}
              </h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-lg font-light text-gray-700 leading-relaxed"
              >
                {language === 'en'
                  ? "Across our facilities, we offer advanced assembly and project management services, encompassing a wide range of capabilities to meet your manufacturing needs."
                  : "Létesítményeinkben fejlett összeszerelési és projektmenedzsment szolgáltatásokat kínálunk, amelyek széles körű képességeket foglalnak magukban a gyártási igényeinek kielégítésére."}
              </motion.p>
            </motion.div>

            {/* Highlighted Services Grid */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className={cn(
                    "border border-amber-200 rounded-xl p-4 bg-white/80 backdrop-blur-sm shadow-sm",
                    "hover:shadow-md hover:bg-white transition-all duration-300",
                    activeSegment === index ? "ring-2 ring-orange-400" : ""
                  )}
                  onMouseEnter={() => setActiveSegment(index)}
                  onMouseLeave={() => setActiveSegment(null)}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${service.color}25` }}>
                      <service.icon style={{ color: service.color }} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {service.text}
                      </p>
                      <div className="mt-2 h-1 rounded-full bg-amber-100 w-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ backgroundColor: service.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${service.percentage}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10"
            >
              <a 
                href={language === 'en' ? "/services" : "/szolgaltatasok"}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full transition-colors group shadow-md hover:shadow-lg"
              >
                <span>{language === 'en' ? 'Learn More About Our Services' : 'Tudjon meg többet szolgáltatásainkról'}</span>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssemblySolutionsBanner;
