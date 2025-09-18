import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { 
  Factory,
  Cog,
  Package,
  Settings,
  Wrench
} from "lucide-react";

export const ServicesMenu = () => {
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

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.services']?.[language] || 'Services'}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container xl mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-full p-2.5 relative overflow-hidden"
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
            overflow: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-indigo-500/20 animate-gradient-x"></div>
          </div>
          
          {/* Compact Header */}
          <div className="relative mb-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                    <Factory className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="ml-2">
                  <h2 className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Manufacturing Services
                  </h2>
                  <p className="text-xs text-gray-600">Expert manufacturing solutions</p>
                </div>
              </div>
              <div className="px-2 py-0.5 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-md border border-white/30">
                <span className="text-xs font-medium text-gray-700">ISO 9001</span>
              </div>
            </div>
          </div>

          {/* Modern Futuristic Multi-Column Layout */}
          <div className="relative grid grid-cols-3 gap-x-2.5 gap-y-1.5">
            {/* Precision Injection Manufacturing */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/plastic-injection-moulding"
                className="group relative block px-3 py-1.5 rounded-lg border border-transparent hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {/* Icon - Fixed Left Position */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Factory size={20} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                      {language === 'en' ? 'Precision Injection Manufacturing' : 'Precíziós fröccsöntés'}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                      {language === 'en' ? 'Advanced plastic injection molding with precision and quality control' : 'Fejlett műanyag fröccsöntés precizitással és minőség-ellenőrzéssel'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* In-Mould Labeling Technology */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/in-mould-decoration"
                className="group relative block px-3 py-1.5 rounded-lg border border-transparent hover:border-teal-200 hover:bg-gradient-to-r hover:from-teal-500/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {/* Icon - Fixed Left Position */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Package size={20} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-tight mb-1">
                      {language === 'en' ? 'In-Mould Decoration Technology' : 'Öntőformában dekorációs technológia'}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                      {language === 'en' ? 'Integrated labeling solutions that enhance product durability and appeal' : 'Integrált címkézési megoldások a termékek tartósságáért és vonzerejéért'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Surface Enhancement Solutions */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/in-mould-decoration"
                className="group relative block px-3 py-1.5 rounded-lg border border-transparent hover:border-orange-200 hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {/* Icon - Fixed Left Position */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Cog size={20} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight mb-1">
                      {language === 'en' ? 'Surface Enhancement Solutions' : 'Felületnemesítési megoldások'}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                      {language === 'en' ? 'Premium surface decoration techniques for exceptional product finishing' : 'Prémium felületi dekorációs technikák kivételes befejezéshez'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Strategic Manufacturing Solutions */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/contract-manufacturing"
                className="group relative block px-3 py-1.5 rounded-lg border border-transparent hover:border-purple-200 hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {/* Icon - Fixed Left Position */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Settings size={20} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight mb-1">
                      {language === 'en' ? 'Strategic Manufacturing Solutions' : 'Stratégiai gyártási megoldások'}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                      {language === 'en' ? 'Manufacturing partnerships from design to delivery with quality assurance' : 'Gyártási partnerségek a tervezéstől a szállításig minőségbiztosítással'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Professional Tooling Management */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/tooling-management"
                className="group relative block px-3 py-1.5 rounded-lg border border-transparent hover:border-emerald-200 hover:bg-gradient-to-r hover:from-emerald-500/5 hover:to-transparent transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {/* Icon - Fixed Left Position */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Wrench size={20} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight mb-1">
                      {language === 'en' ? 'Professional Tooling Management' : 'Professzionális szerszámkezelés'}
                    </h3>
                    <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                      {language === 'en' ? 'Expert tool design, manufacturing, and maintenance services for production efficiency' : 'Szakértői szerszámtervezés, gyártás és karbantartás a termelési hatékonyságért'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Modern Footer */}
          <div className="relative pt-1 border-t border-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#fa9b6b] to-purple-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">ISO 9001</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">35+ Years</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-600">Expert Team</span>
                </div>
              </div>
              <button 
                onClick={() => window.location.href = '/services'}
                className="text-xs text-blue-600 hover:text-indigo-600 underline hover:no-underline transition-colors duration-200"
              >
                Discover Our Capabilities →
              </button>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
