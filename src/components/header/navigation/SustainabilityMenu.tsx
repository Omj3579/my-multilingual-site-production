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
  Recycle,
  TreePine,
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

  // Sustainability initiatives matching the new layout
  const sustainabilityInitiatives = [
    {
      title: language === 'en' ? "Green Strategy Overview" : "Zöld stratégia áttekintés",
      description: language === 'en' ? "Our comprehensive approach to sustainable manufacturing and environmental responsibility" : "Átfogó megközelítésünk a fenntartható gyártáshoz és környezeti felelősséghez",
      href: "/sustainability/green-strategy",
      icon: Zap,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: language === 'en' ? "Renewable Energy Integration" : "Megújuló energia integráció",
      description: language === 'en' ? "Strategic implementation of sustainable power infrastructure" : "Fenntartható energiainfrastruktúra stratégiai megvalósítása",
      href: "/sustainability/green-strategy#renewable-energy",
      icon: Recycle,
      color: "from-teal-500 to-green-600"
    },
    {
      title: language === 'en' ? "Circular Material Flow" : "Körkörös anyagáramlás",
      description: language === 'en' ? "Complete reintegration of production byproducts into manufacturing cycles" : "A gyártási melléktermékek teljes visszaintegrációja a gyártási ciklusokba",
      href: "/sustainability/green-strategy#circular-materials",
      icon: Target,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: language === 'en' ? "Process Optimization" : "Folyamat optimalizálás",
      description: language === 'en' ? "Precision methodologies minimizing waste through advanced control systems" : "Precíziós módszerek a hulladék minimalizálásához fejlett vezérlőrendszereken keresztül",
      href: "/sustainability/green-strategy#process-optimization",
      icon: TreePine,
      color: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.sustainability']?.[language] || 'Sustainability'}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container xl mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-full p-3 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98))',
            backdropFilter: 'blur(40px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 4px 20px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.1)
            `,
            marginTop: '8px',
          }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-teal-500/20 animate-gradient-x"></div>
          </div>
          
          {/* Compact Header */}
          <div className="relative mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                    <Leaf className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="ml-2">
                  <h2 className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Green Innovation Initiative
                  </h2>
                  <p className="text-xs text-gray-600">Leading the future of sustainable manufacturing</p>
                </div>
              </div>
              <div className="px-2 py-0.5 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-md border border-white/30">
                <span className="text-xs font-medium text-gray-700">ISO 14001</span>
              </div>
            </div>
          </div>

          {/* Modern Futuristic Multi-Column Layout */}
          <div className="relative space-y-2">
            {/* First row - 3 items */}
            <div className="grid grid-cols-3 gap-x-3">
              {sustainabilityInitiatives.slice(0, 3).map((initiative, index) => {
                const IconComponent = initiative.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Link 
                      href={initiative.href}
                      className="group relative block px-3 py-2 rounded-lg border border-transparent hover:border-green-200 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-transparent transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        {/* Icon - Fixed Left Position */}
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${initiative.color} text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                          <IconComponent size={18} />
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-tight mb-1">
                            {initiative.title}
                          </h3>
                          <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight mt-1">
                            {initiative.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Second row - 2 items centered */}
            <div className="grid grid-cols-2 gap-x-3 max-w-2xl mx-auto">
              {sustainabilityInitiatives.slice(3, 5).map((initiative, index) => {
                const IconComponent = initiative.icon;
                return (
                  <motion.div key={index + 3} variants={itemVariants}>
                    <Link 
                      href={initiative.href}
                      className="group relative block px-3 py-2 rounded-lg border border-transparent hover:border-green-200 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-transparent transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        {/* Icon - Fixed Left Position */}
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${initiative.color} text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                          <IconComponent size={18} />
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-tight mb-1">
                            {initiative.title}
                          </h3>
                          <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight mt-1">
                            {initiative.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Modern Footer */}
          <div className="relative pt-1.5 border-t border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Eco-Friendly</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Carbon Neutral 2030</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Sustainable</span>
                </div>
              </div>
              <button 
                onClick={() => window.location.href = '/sustainability'}
                className="text-xs text-green-600 hover:text-emerald-600 underline hover:no-underline transition-colors duration-200"
              >
                View Sustainability Report →
              </button>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
