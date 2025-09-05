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
      badge: "Strategic Phase",
      color: "amber"
    },
    {
      title: language === 'en' ? "Advanced Water Management" : "Fejlett Vízgazdálkodás",
      description: language === 'en' 
        ? "Closed-loop water circulation systems optimizing thermal management processes while achieving superior resource efficiency"
        : "Zárt körű vízcirkulációs rendszerek termikus kezelési folyamatok optimalizálásához kiváló erőforrás-hatékonysággal",
      href: "/sustainability/green-strategy#water-management",
      icon: Droplets,
      badge: "Operational",
      color: "blue"
    },
    {
      title: language === 'en' ? "Circular Material Flow" : "Körforgásos Anyagáramlás",
      description: language === 'en' 
        ? "Comprehensive material recovery systems ensuring complete reintegration of production byproducts into manufacturing cycles"
        : "Átfogó anyag-visszanyerési rendszerek biztosítva a gyártási melléktermékek teljes reintegrációját a gyártási ciklusokba",
      href: "/sustainability/green-strategy#material-recovery",
      icon: Recycle,
      badge: "Active",
      color: "teal"
    },
    {
      title: language === 'en' ? "Environmental Stewardship" : "Környezeti Felelősségvállalás",
      description: language === 'en' 
        ? "Rigorous containment protocols safeguarding against raw material dispersion and environmental contamination"
        : "Szigorú visszatartási protokollok az alapanyag szóródás és környezeti szennyezés elleni védelemhez",
      href: "/sustainability/green-strategy#environmental-stewardship",
      icon: Target,
      badge: "Critical Priority",
      color: "green"
    },
    {
      title: language === 'en' ? "Process Optimization" : "Folyamat Optimalizálás",
      description: language === 'en' 
        ? "Precision manufacturing methodologies minimizing material waste through advanced process control and quality systems"
        : "Precíziós gyártási módszertanok anyaghulladék minimalizálásához fejlett folyamatszabályozással és minőségi rendszerekkel",
      href: "/sustainability/green-strategy#process-optimization",
      icon: TreePine,
      badge: "Excellence",
      color: "emerald"
    }
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.sustainability']?.[language]}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent asChild>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-[800px] p-6 shadow-lg bg-white rounded-xl border border-gray-100"
          style={{ width: '800px', maxWidth: '800px' }}
        >
          {/* Feature Header */}
          <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 border border-green-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Leaf size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {language === 'en' ? "Green Innovation Initiative" : "Zöld Innovációs Kezdeményezés"}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'en' 
                    ? "Leading the future of sustainable manufacturing"
                    : "A fenntartható gyártás jövőjének vezetése"}
                </p>
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                  <Leaf size={14} className="text-green-600" />
                  <span className="text-xs font-medium text-green-700">ISO 14001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Green Strategy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {greenStrategyInitiatives.map((initiative, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link 
                  href={initiative.href}
                  className="group block p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-gradient-to-br hover:from-green-50/50 hover:to-transparent transition-all duration-300 h-full"
                >
                  {/* Badge and Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      initiative.color === 'green' ? 'bg-green-100 text-green-700' :
                      initiative.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                      initiative.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                      initiative.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      initiative.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {initiative.badge}
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center transition-colors ${
                      initiative.color === 'green' ? 'text-gray-400 group-hover:text-green-600' :
                      initiative.color === 'teal' ? 'text-gray-400 group-hover:text-teal-600' :
                      initiative.color === 'amber' ? 'text-gray-400 group-hover:text-amber-600' :
                      initiative.color === 'emerald' ? 'text-gray-400 group-hover:text-emerald-600' :
                      initiative.color === 'blue' ? 'text-gray-400 group-hover:text-blue-600' :
                      'text-gray-400 group-hover:text-indigo-600'
                    }`}>
                      <initiative.icon size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <h5 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2 leading-tight">
                    {initiative.title}
                  </h5>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
                    {initiative.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-xs text-gray-400 group-hover:text-green-600 transition-colors">
                    <span className="mr-1">Learn more</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Footer with CTA */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <Link 
              href="/sustainability/green-strategy" 
              className="inline-flex items-center text-sm text-green-600 font-medium hover:text-green-700 transition-colors group"
            >
              <span>
                {language === 'en' ? 'Explore Our Complete Green Strategy' : 'Fedezze Fel Teljes Zöld Stratégiánkat'}
              </span>
              <motion.div
                className="ml-2"
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </Link>
            
            {/* Professional Impact Metrics reflecting enterprise excellence */}
            <div className="flex items-center space-x-4 text-xs">
              <div className="text-center">
                <div className="font-semibold text-green-600">100%</div>
                <div className="text-gray-500">{language === 'en' ? 'Material Recovery' : 'Anyag Visszanyerés'}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-blue-600">Optimized</div>
                <div className="text-gray-500">{language === 'en' ? 'Thermal Systems' : 'Termikus Rendszerek'}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-amber-600">Strategic</div>
                <div className="text-gray-500">{language === 'en' ? 'Energy Planning' : 'Energia Tervezés'}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
