import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { 
  Users, 
  ArrowUpRight,
  Calendar,
  Target,
  Award,
  Briefcase,
  Building2,
  Trophy,
  Globe
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

  // Flattened company data for consistent design
  const companyData = [
    {
      title: language === 'en' ? "Company Origins" : "Vállalat Eredete",
      description: language === 'en' 
        ? "Founded in 1990 with a vision to revolutionize precision plastic manufacturing"
        : "1990-ben alapítottuk a precíziós műanyag gyártás forradalmasítása vízióval",
      href: "/company/history#origins",
      icon: Calendar,
      color: "blue"
    },
    {
      title: language === 'en' ? "Growth & Milestones" : "Növekedés és Mérföldkövek",
      description: language === 'en' 
        ? "35-year journey of achievements and technological breakthroughs"
        : "35 éves út eredményekkel és technológiai áttörésekkel",
      href: "/company/history#milestones",
      icon: Target,
      color: "amber"
    },
    {
      title: language === 'en' ? "Innovation Legacy" : "Innovációs Örökség",
      description: language === 'en' 
        ? "Pioneering developments in injection molding and sustainable practices"
        : "Úttörő fejlesztések fröccsöntésben és fenntartható gyakorlatokban",
      href: "/company/history#innovation",
      icon: Award,
      color: "purple"
    },
    {
      title: language === 'en' ? "Executive Leadership" : "Vezetői Csapat",
      description: language === 'en' 
        ? "Meet our CEO and senior executives guiding strategic direction"
        : "Ismerje meg vezérigazgatónkat és vezető beosztottjainkat",
      href: "/company/management#executives",
      icon: Briefcase,
      color: "emerald"
    }
  ];
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.company']?.[language]}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container large mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-full h-full p-8 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.9))',
            backdropFilter: 'blur(30px)',
            boxShadow: `
              0 32px 64px -12px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.1)
            `,
            marginTop: '8px',
          }}
        >
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-lg">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Flair Plastic Group</h2>
                  <p className="text-base text-gray-600">Discover our heritage, vision, and innovation journey</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
                  <span className="text-sm font-semibold text-blue-700">30+ Years Legacy</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Balanced Grid - 2 rows with 2 cards each, laptop-optimized */}
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            {companyData.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link 
                  href={section.href}
                  className="group block p-8 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/90 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full"
                  style={{
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Icon & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md ${
                      section.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500 text-white' :
                      section.color === 'amber' ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-white' :
                      section.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-500 text-white' :
                      section.color === 'emerald' ? 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white' :
                      'bg-gradient-to-br from-gray-400 to-gray-500 text-white'
                    }`}>
                      <section.icon size={28} />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                    {section.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Trophy className="w-4 h-4 text-amber-500 mr-2" />
                  Industry Pioneer Since 1990
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 text-blue-500 mr-2" />
                  150+ Skilled Professionals
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Globe className="w-4 h-4 text-purple-500 mr-2" />
                  Manufacturing Excellence
                </div>
              </div>
              <Link 
                href="/company/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Learn About Flair</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
