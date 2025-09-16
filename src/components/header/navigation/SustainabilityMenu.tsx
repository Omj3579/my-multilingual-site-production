import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { 
  Leaf,
  ArrowUpRight,
  Recycle,
  TreePine,
  Droplets,
  Zap,
  Target
} from 'lucide-react';

export const SustainabilityMenu = () => {
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

  // Professional Green Strategy initiatives based on industry best practices
  const greenStrategyInitiatives = [
    {
      title: language === 'en' ? "Renewable Energy Integration" : "Megújuló Energia Integráció",
      description: language === 'en' 
        ? "Strategic partnerships with renewable energy providers to implement sustainable power infrastructure across our manufacturing operations"
        : "Stratégiai partnerségek megújuló energia szolgáltatókkal fenntartható energiainfrastruktúra megvalósításához gyártási műveleteinkben",
      href: "/sustainability/green-strategy#renewable-energy",
      icon: Zap,
      color: "amber"
    },
    {
      title: language === 'en' ? "Advanced Water Management" : "Fejlett Vízgazdálkodás",
      description: language === 'en' 
        ? "Closed-loop water circulation systems optimizing thermal management processes while achieving superior resource efficiency"
        : "Zárt körű vízcirkulációs rendszerek termikus kezelési folyamatok optimalizálásához kiváló erőforrás-hatékonysággal",
      href: "/sustainability/green-strategy#water-management",
      icon: Droplets,
      color: "blue"
    },
    {
      title: language === 'en' ? "Circular Material Flow" : "Körforgásos Anyagáramlás",
      description: language === 'en' 
        ? "Comprehensive material recovery systems ensuring complete reintegration of production byproducts into manufacturing cycles"
        : "Átfogó anyag-visszanyerési rendszerek biztosítva a gyártási melléktermékek teljes reintegrációját a gyártási ciklusokba",
      href: "/sustainability/green-strategy#material-recovery",
      icon: Recycle,
      color: "teal"
    },
    {
      title: language === 'en' ? "Environmental Stewardship" : "Környezeti Felelősségvállalás",
      description: language === 'en' 
        ? "Rigorous containment protocols safeguarding against raw material dispersion and environmental contamination"
        : "Szigorú visszatartási protokollok az alapanyag szóródás és környezeti szennyezés elleni védelemhez",
      href: "/sustainability/green-strategy#environmental-stewardship",
      icon: Target,
      color: "green"
    },
    {
      title: language === 'en' ? "Process Optimization" : "Folyamat Optimalizálás",
      description: language === 'en' 
        ? "Precision manufacturing methodologies minimizing material waste through advanced process control and quality systems"
        : "Precíziós gyártási módszertanok anyaghulladék minimalizálásához fejlett folyamatszabályozással és minőségi rendszerekkel",
      href: "/sustainability/green-strategy#process-optimization",
      icon: TreePine,
      color: "emerald"
    }
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.sustainability']?.[language]}</span>
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4 shadow-lg">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Green Innovation Initiative</h2>
                  <p className="text-base text-gray-600">Leading the future of sustainable manufacturing</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-green-100 rounded-full border border-green-200">
                  <span className="text-sm font-semibold text-green-700">ISO 14001 Certified</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Balanced Grid - 2 rows, varying columns */}
          <div className="space-y-6">
            {/* First Row - 3 cards */}
            <div className="grid grid-cols-3 gap-5">
              {greenStrategyInitiatives.slice(0, 3).map((initiative, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link 
                    href={initiative.href}
                    className="group block p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/90 hover:border-green-200 hover:shadow-xl transition-all duration-300 h-full"
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Icon & Arrow */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                        initiative.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500 text-white' :
                        initiative.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-500 text-white' :
                        initiative.color === 'amber' ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-white' :
                        initiative.color === 'emerald' ? 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white' :
                        'bg-gradient-to-br from-blue-400 to-blue-500 text-white'
                      }`}>
                        <initiative.icon size={24} />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3 leading-tight">
                      {initiative.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {initiative.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 cards (centered) */}
            <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
              {greenStrategyInitiatives.slice(3).map((initiative, index) => (
                <motion.div key={index + 3} variants={itemVariants}>
                  <Link 
                    href={initiative.href}
                    className="group block p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/90 hover:border-green-200 hover:shadow-xl transition-all duration-300 h-full"
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Icon & Arrow */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                        initiative.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-500 text-white' :
                        initiative.color === 'emerald' ? 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white' :
                        'bg-gradient-to-br from-teal-400 to-teal-500 text-white'
                      }`}>
                        <initiative.icon size={24} />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3 leading-tight">
                      {initiative.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {initiative.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Recycle className="w-4 h-4 text-green-500 mr-2" />
                  Recyclable Materials
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                  Renewable Energy 
                </div>
                
              </div>
              <Link 
                href="/sustainability/green-strategy" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Explore Green Strategy</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
