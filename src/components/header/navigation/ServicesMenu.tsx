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
  Box,
  Component,
  Tag,
  Paintbrush,
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
        <span>{translations['nav.services']?.[language] || 'Our Services'}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent className="navigation-dropdown-container large mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="w-full p-6 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl"
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
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#fa9b6b] to-[#e86e40] flex items-center justify-center mr-3 shadow-lg">
                <Box className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Manufacturing Excellence</h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
              Discover our comprehensive manufacturing solutions and cutting-edge expertise that powers industry innovation
            </p>
          </div>

          {/* Unified Grid Layout - All Cards Same Structure */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Precision Injection Manufacturing */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/plastic-injection-moulding"
                className="group block p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white/95 hover:border-[#fa9b6b]/30 hover:shadow-xl transition-all duration-300 h-full"
                style={{
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-md">
                    <Component size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#fa9b6b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-3">
                  {language === 'en' ? 'Precision Injection Manufacturing' : 'Precíziós fröccsöntési gyártás'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === 'en' ? 'State-of-the-art plastic injection moulding with exceptional precision and quality control' : 'Csúcstechnológiás műanyag fröccsöntés kivételes pontossággal és minőségellenőrzéssel'}
                </p>
              </Link>
            </motion.div>

            {/* In-Mould Labeling Technology */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/in-mould-labelling"
                className="group block p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white/95 hover:border-[#fa9b6b]/30 hover:shadow-xl transition-all duration-300 h-full"
                style={{
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center shadow-md">
                    <Tag size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#fa9b6b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-3">
                  {language === 'en' ? 'In-Mould Labeling Technology' : 'Öntés közbeni címkézési technológia'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === 'en' ? 'Integrated labeling solutions that enhance product durability and visual appeal' : 'Integrált címkézési megoldások, amelyek növelik a termék tartósságát és vizuális vonzerejét'}
                </p>
              </Link>
            </motion.div>

            {/* Surface Enhancement Solutions */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/in-mould-decoration"
                className="group block p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white/95 hover:border-[#fa9b6b]/30 hover:shadow-xl transition-all duration-300 h-full"
                style={{
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-md">
                    <Paintbrush size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#fa9b6b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-3">
                  {language === 'en' ? 'Surface Enhancement Solutions' : 'Felületjavítási megoldások'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === 'en' ? 'Premium surface decoration techniques for exceptional product finishing' : 'Prémium felületi dekorációs technikák kivételes termékbefejezéshez'}
                </p>
              </Link>
            </motion.div>
          </div>

          {/* Second Row - Same Design */}
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Strategic Manufacturing Solutions */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/contract-manufacturing"
                className="group block p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white/95 hover:border-[#fa9b6b]/30 hover:shadow-xl transition-all duration-300 h-full"
                style={{
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-md">
                    <Settings size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#fa9b6b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-3">
                  {language === 'en' ? 'Strategic Manufacturing Solutions' : 'Stratégiai gyártási megoldások'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === 'en' ? 'Comprehensive manufacturing partnerships from design to delivery with full quality assurance' : 'Átfogó gyártási partnerségek a tervezéstől a szállításig teljes minőségbiztosítással'}
                </p>
              </Link>
            </motion.div>

            {/* Professional Tooling Management */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/services/tooling-management"
                className="group block p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white/95 hover:border-[#fa9b6b]/30 hover:shadow-xl transition-all duration-300 h-full"
                style={{
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-md">
                    <Wrench size={24} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#fa9b6b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-3">
                  {language === 'en' ? 'Professional Tooling Management' : 'Professzionális szerszámkezelés'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === 'en' ? 'Expert tool design, manufacturing, and maintenance services for optimal production efficiency' : 'Szakértői szerszámtervezés, gyártás és karbantartási szolgáltatások az optimális gyártási hatékonyságért'}
                </p>
              </Link>
            </motion.div>
          </div>

          {/* Clean Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-[#fa9b6b] rounded-full mr-2"></span>
                  ISO 9001 Certified Manufacturing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  35+ Years Experience
                </div>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#fa9b6b] to-[#e86e40] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
