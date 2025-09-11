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
  Layers,
  Component,
  Tag,
  Paintbrush
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

  // Categories structure with enhanced descriptions and modern layout
  const capabilityCategories = [
    {
      title: language === 'en' ? 'Advanced Injection Moulding' : 'Fejlett fröccsöntési technológia',
      subtitle: language === 'en' ? 'Precision manufacturing solutions' : 'Precíziós gyártási megoldások',
      icon: Component,
      color: 'blue',
      links: [
        { 
          label: language === 'en' ? 'Precision Injection Manufacturing' : 'Precíziós fröccsöntési gyártás',
          description: language === 'en' ? 'State-of-the-art plastic injection Moulding with exceptional precision and quality control' : 'Csúcstechnológiás műanyag fröccsöntés kivételes pontossággal és minőségellenőrzéssel',
          href: '/services/plastic-injection-moulding',
          icon: Component
        },
        { 
          label: language === 'en' ? 'In-Mould Labeling Technology' : 'Öntés közbeni címkézési technológia',
          description: language === 'en' ? 'Integrated labeling solutions that enhance product durability and visual appeal' : 'Integrált címkézési megoldások, amelyek növelik a termék tartósságát és vizuális vonzerejét',
          href: '/services/in-mould-labelling',
          icon: Tag
        },
        { 
          label: language === 'en' ? 'Surface Enhancement Solutions' : 'Felületjavítási megoldások',
          description: language === 'en' ? 'Premium surface decoration techniques for exceptional product finishing' : 'Prémium felületi dekorációs technikák kivételes termékbefejezéshez',
          href: '/services/in-mould-decoration',
          icon: Paintbrush
        },
      ]
    },
    {
      title: language === 'en' ? 'Manufacturing Partnership' : 'Gyártási partnerség',
      subtitle: language === 'en' ? 'End-to-end production services' : 'Teljes körű gyártási szolgáltatások',
      icon: Box,
      color: 'orange',
      links: [
        { 
          label: language === 'en' ? 'Strategic Manufacturing Solutions' : 'Stratégiai gyártási megoldások',
          description: language === 'en' ? 'Comprehensive manufacturing partnerships from design to delivery with full quality assurance' : 'Átfogó gyártási partnerségek a tervezéstől a szállításig teljes minőségbiztosítással',
          href: '/services/contract-manufacturing',
          icon: Box
        },
      ]
    },
    {
      title: language === 'en' ? 'Technical Excellence' : 'Műszaki kiválóság',
      subtitle: language === 'en' ? 'Expert engineering support' : 'Szakértői mérnöki támogatás',
      icon: Layers,
      color: 'green',
      links: [
        { 
          label: language === 'en' ? 'Professional Tooling Management' : 'Professzionális szerszámkezelés',
          description: language === 'en' ? 'Expert tool design, manufacturing, and maintenance services for optimal production efficiency' : 'Szakértői szerszámtervezés, gyártás és karbantartási szolgáltatások az optimális gyártási hatékonyságért',
          href: '/services/tooling-management',
          icon: Layers
        },
      ]
    }
  ];
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.services']?.[language] || 'Our Services'}</span>
        <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#fa9b6b] scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-center" />
      </NavigationMenuTrigger>
      
      <NavigationMenuContent asChild>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="navigation-dropdown-container p-4 md:p-5 lg:p-6 shadow-2xl bg-white rounded-xl border border-gray-100"
        >
          {/* Header section */}
          <div className="mb-3 pb-2 border-b border-gray-100">
            <h3 className="text-base font-medium text-gray-800">
              {language === 'en' ? 'Manufacturing Services' : 'Gyártási Szolgáltatások'}
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">
              {language === 'en' 
                ? 'Our comprehensive manufacturing solutions and expertise'
                : 'Átfogó gyártási megoldásaink és szakértelmünk'}
            </p>
          </div>

          {/* Optimized Grid Layout - All cards in a single unified grid */}
          <div>
            {/* Unified grid for all service cards with optimal column distribution */}
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">{capabilityCategories.map((category) => 
                category.links.map((link, linkIndex) => (
                  <motion.div 
                    key={`${category.title}-${linkIndex}`} 
                    variants={itemVariants}
                    className="group"
                  >
                    <Link 
                      href={link.href}
                      className="flex flex-col p-2 rounded-lg border border-gray-100 hover:border-[#fa9b6b]/30 hover:bg-gradient-to-br hover:from-[#fa9b6b]/5 hover:to-transparent transition-all duration-300 h-full min-h-[140px]"
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-end mb-2">
                        <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-[#fa9b6b] transition-colors">
                          <link.icon size={14} />
                        </div>
                      </div>

                      {/* Category Title (Small) */}
                      <div className={`text-xs font-medium mb-2 ${
                        category.color === 'blue' ? 'text-blue-600' :
                        category.color === 'orange' ? 'text-orange-600' :
                        'text-green-600'
                      }`}>
                        {category.title}
                      </div>

                      {/* Service Title */}
                      <h5 className="text-sm font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-1.5 leading-tight">
                        {link.label}
                      </h5>
                      
                      {/* Enhanced Description */}
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 flex-1 mb-1.5">
                        {link.description}
                      </p>

                      {/* Hover Arrow */}
                      <div className="mt-auto flex items-center text-xs text-gray-400 group-hover:text-[#fa9b6b] transition-colors">
                        <span className="mr-1">Learn more</span>
                        <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </div>
          
          {/* Footer section */}
          <div className="mt-3 pt-2 border-t border-gray-100">
            <Link 
              href="/services" 
              className="inline-flex items-center text-sm text-[#fa9b6b] font-medium group"
            >
              <span>
                {language === 'en' ? 'View all services' : 'Összes szolgáltatás megtekintése'}
              </span>
              <motion.div
                className="ml-2"
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
