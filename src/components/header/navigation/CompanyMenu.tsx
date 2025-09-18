import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { 
  ArrowUpRight,
  Calendar,
  Target,
  Award,
  Briefcase,
  Building2
} from 'lucide-react';

export const CompanyMenu = () => {
  const { translations, language } = useLanguage();

  // Animation variants for dropdown content
  const containerVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  // Company data with detailed descriptions matching the new layout
  const companyData = [
    {
      title: language === 'en' ? "Company Origins" : "Vállalat eredete",
      description: language === 'en' ? "Founded in 1990 with a vision to revolutionize precision plastic manufacturing" : "1990-ben alapítva azzal a vízióval, hogy forradalmasítsa a precíziós műanyag gyártást",
      href: "/company/history#origins",
      icon: Calendar,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: language === 'en' ? "Growth & Milestones" : "Növekedés és mérföldkövek",
      description: language === 'en' ? "35-year journey of achievements and technological breakthroughs" : "35 éves út a sikerek és technológiai áttörések terén",
      href: "/company/history#milestones",
      icon: Target,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: language === 'en' ? "Innovation Legacy" : "Innovációs örökség",
      description: language === 'en' ? "Pioneering developments in injection molding and sustainable practices" : "Úttörő fejlesztések a fröccsöntés és a fenntartható gyakorlatok terén",
      href: "/company/history#innovation",
      icon: Award,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: language === 'en' ? "Executive Leadership" : "Vezetői csapat",
      description: language === 'en' ? "Meet our CEO and senior executives guiding strategic direction" : "Ismerje meg vezérigazgatónkat és vezető beosztottjainkat, akik a stratégiai irányt irányítják",
      href: "/company/management#executives",
      icon: Briefcase,
      color: "from-teal-500 to-green-600"
    }
  ];
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.company']?.[language]}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="relative w-full p-3 rounded-xl border border-white/20 shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)',
            backdropFilter: 'blur(20px)',
            boxShadow: `
              0 16px 32px -6px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.2)
            `,
          }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30 pointer-events-none animated-gradient"></div>
          
          {/* Compact Header */}
          <div className="relative z-10 mb-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center mr-2 shadow-md">
                  <Building2 className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent">
                    Flair Plastic Group
                  </h2>
                  <p className="text-xs text-gray-600">Discover our heritage, vision, and innovation journey</p>
                </div>
              </div>
              <div className="px-2 py-0.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md border border-blue-200/50 shadow-sm">
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  30+ Years Legacy
                </span>
              </div>
            </div>
          </div>

          {/* Modern Futuristic Multi-Column Layout */}
          <div className="relative z-10 grid grid-cols-2 gap-x-3 gap-y-2">
            {companyData.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link 
                  href={section.href}
                  className="group relative block px-3 py-2 rounded-lg border border-transparent hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-transparent transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    {/* Icon - Fixed Left Position */}
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.color} text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                      <section.icon size={18} />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                        {section.title}
                      </h3>
                      <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Modern Footer */}
          <div className="relative z-10 pt-1.5 border-t border-gray-200/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">ISO 9001</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Global Manufacturing</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Family Business</span>
                </div>
              </div>
              <button 
                onClick={() => window.location.href = '/company'}
                className="text-xs text-blue-600 hover:text-indigo-600 underline hover:no-underline transition-colors duration-200"
              >
                Learn About Our Company →
              </button>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
