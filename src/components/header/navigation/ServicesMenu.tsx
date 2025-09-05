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
      title: language === 'en' ? 'Advanced Injection Molding' : 'Fejlett fröccsöntési technológia',
      subtitle: language === 'en' ? 'Precision manufacturing solutions' : 'Precíziós gyártási megoldások',
      icon: Component,
      color: 'blue',
      links: [
        { 
          label: language === 'en' ? 'Precision Injection Manufacturing' : 'Precíziós fröccsöntési gyártás',
          description: language === 'en' ? 'State-of-the-art plastic injection molding with exceptional precision and quality control' : 'Csúcstechnológiás műanyag fröccsöntés kivételes pontossággal és minőségellenőrzéssel',
          href: '/services/plastic-injection-moulding',
          icon: Component,
          badge: 'Core Service'
        },
        { 
          label: language === 'en' ? 'In-Mold Labeling Technology' : 'Öntés közbeni címkézési technológia',
          description: language === 'en' ? 'Integrated labeling solutions that enhance product durability and visual appeal' : 'Integrált címkézési megoldások, amelyek növelik a termék tartósságát és vizuális vonzerejét',
          href: '/services/in-mould-labelling',
          icon: Tag,
          badge: 'Advanced'
        },
        { 
          label: language === 'en' ? 'Surface Enhancement Solutions' : 'Felületjavítási megoldások',
          description: language === 'en' ? 'Premium surface decoration techniques for exceptional product finishing' : 'Prémium felületi dekorációs technikák kivételes termékbefejezéshez',
          href: '/services/in-mould-decoration',
          icon: Paintbrush,
          badge: 'Premium'
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
          icon: Box,
          badge: 'Partnership'
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
          icon: Layers,
          badge: 'Expert'
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
          className="w-[800px] p-7 shadow-lg bg-white rounded-xl border border-gray-100"
          style={{ width: '800px', maxWidth: '800px' }} // Force width with inline style
        >
          {/* Header section */}
          <div className="mb-6 pb-5 border-b border-gray-100">
            <h3 className="text-xl font-medium text-gray-800">
              {language === 'en' ? 'Manufacturing Services' : 'Gyártási Szolgáltatások'}
            </h3>
            <p className="text-sm text-gray-600 mt-1.5">
              {language === 'en' 
                ? 'Our comprehensive manufacturing solutions and expertise'
                : 'Átfogó gyártási megoldásaink és szakértelmünk'}
            </p>
          </div>

          {/* Enhanced Grid Layout */}
          <div className="space-y-8">
            {/* First category: Manufacturing Excellence - Full Width */}
            {capabilityCategories.slice(0, 1).map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Category Header with Icon and Color */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    category.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <category.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                    <p className="text-sm text-gray-500">{category.subtitle}</p>
                  </div>
                </div>

                {/* Enhanced Links Grid - 3 columns for first category */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.links.map((link, linkIndex) => (
                    <motion.div key={linkIndex} variants={itemVariants}>
                      <Link 
                        href={link.href}
                        className="group block p-4 rounded-xl border border-gray-100 hover:border-[#fa9b6b]/30 hover:bg-gradient-to-br hover:from-[#fa9b6b]/5 hover:to-transparent transition-all duration-300 h-full"
                      >
                        {/* Service Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            link.badge === 'Core Service' ? 'bg-blue-100 text-blue-700' :
                            link.badge === 'Advanced' ? 'bg-purple-100 text-purple-700' :
                            link.badge === 'Premium' ? 'bg-amber-100 text-amber-700' :
                            link.badge === 'Partnership' ? 'bg-orange-100 text-orange-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {link.badge}
                          </div>
                          <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-[#fa9b6b] transition-colors">
                            <link.icon size={18} />
                          </div>
                        </div>

                        {/* Service Title */}
                        <h5 className="font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-2 leading-tight">
                          {link.label}
                        </h5>
                        
                        {/* Enhanced Description */}
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {link.description}
                        </p>

                        {/* Hover Arrow */}
                        <div className="mt-3 flex items-center text-xs text-gray-400 group-hover:text-[#fa9b6b] transition-colors">
                          <span className="mr-1">Learn more</span>
                          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Last two categories: Manufacturing Partnership & Technical Excellence - Side by Side */}
            {capabilityCategories.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilityCategories.slice(1).map((category, categoryIndex) => (
                  <motion.div 
                    key={categoryIndex + 1}
                    variants={itemVariants}
                    className="space-y-4"
                  >
                    {/* Category Header with Icon and Color */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        category.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        <category.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                        <p className="text-sm text-gray-500">{category.subtitle}</p>
                      </div>
                    </div>

                    {/* Enhanced Links Grid - Single column for each category */}
                    <div className="space-y-4">
                      {category.links.map((link, linkIndex) => (
                        <motion.div key={linkIndex} variants={itemVariants}>
                          <Link 
                            href={link.href}
                            className="group block p-4 rounded-xl border border-gray-100 hover:border-[#fa9b6b]/30 hover:bg-gradient-to-br hover:from-[#fa9b6b]/5 hover:to-transparent transition-all duration-300 h-full"
                          >
                            {/* Service Badge */}
                            <div className="flex items-center justify-between mb-3">
                              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                link.badge === 'Core Service' ? 'bg-blue-100 text-blue-700' :
                                link.badge === 'Advanced' ? 'bg-purple-100 text-purple-700' :
                                link.badge === 'Premium' ? 'bg-amber-100 text-amber-700' :
                                link.badge === 'Partnership' ? 'bg-orange-100 text-orange-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {link.badge}
                              </div>
                              <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-[#fa9b6b] transition-colors">
                                <link.icon size={18} />
                              </div>
                            </div>

                            {/* Service Title */}
                            <h5 className="font-semibold text-gray-900 group-hover:text-[#fa9b6b] transition-colors mb-2 leading-tight">
                              {link.label}
                            </h5>
                            
                            {/* Enhanced Description */}
                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                              {link.description}
                            </p>

                            {/* Hover Arrow */}
                            <div className="mt-3 flex items-center text-xs text-gray-400 group-hover:text-[#fa9b6b] transition-colors">
                              <span className="mr-1">Learn more</span>
                              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer section */}
          <div className="mt-7 pt-5 border-t border-gray-100">
            <Link 
              href="/services" 
              className="inline-flex items-center text-base text-[#fa9b6b] font-medium group"
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
