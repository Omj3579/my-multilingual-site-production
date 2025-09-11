import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { 
  Building, 
  History, 
  Users, 
  ArrowUpRight,
  Calendar,
  Target,
  Award,
  Briefcase
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

  // Enhanced company sections with multiple cards for History and Management
  const companySections = [
    {
      category: "Our History",
      icon: History,
      color: "blue",
      items: [
        {
          title: language === 'en' ? "Company Origins" : "Vállalat Eredete",
          description: language === 'en' 
            ? "Founded in 1990 with a vision to revolutionize precision plastic manufacturing in Europe"
            : "1990-ben alapítottuk azzal a vízióval, hogy forradalmasítsuk a precíziós műanyag gyártást Európában",
          href: "/company/history#origins",
          icon: Calendar
        },
        {
          title: language === 'en' ? "Growth & Milestones" : "Növekedés és Mérföldkövek",
          description: language === 'en' 
            ? "Key achievements and technological breakthroughs that shaped our 35-year journey to industry leadership"
            : "Kulcsfontosságú eredmények és technológiai áttörések, amelyek formálták 35 éves utunkat az iparági vezetésig",
          href: "/company/history#milestones",
          icon: Target
        },
        {
          title: language === 'en' ? "Innovation Legacy" : "Innovációs Örökség",
          description: language === 'en' 
            ? "Our pioneering developments in injection Moulding, sustainable practices, and quality excellence"
            : "Úttörő fejlesztéseink a fröccsöntésben, fenntartható gyakorlatokban és minőségi kiválóságban",
          href: "/company/history#innovation",
          icon: Award
        }
      ]
    },
    {
      category: "Leadership",
      icon: Users,
      color: "purple",
      items: [
        {
          title: language === 'en' ? "Executive Leadership" : "Vezetői Csapat",
          description: language === 'en' 
            ? "Meet our CEO and senior executives who guide strategic direction and operational excellence"
            : "Ismerje meg vezérigazgatónkat és vezető beosztottjainkat, akik irányítják a stratégiai irányt és működési kiválóságot",
          href: "/company/management#executives",
          icon: Briefcase
        },
        {
          title: language === 'en' ? "Department Heads" : "Osztályvezetők",
          description: language === 'en' 
            ? "Experienced managers leading our production, quality, engineering, and business development teams"
            : "Tapasztalt vezetők, akik irányítják termelési, minőségi, mérnöki és üzletfejlesztési csapatainkat",
          href: "/company/management#department-heads",
          icon: Users
        }
      ]
    }
  ];
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="group bg-transparent border-none text-gray-800 hover:text-[#fa9b6b] transition-colors text-xl font-semibold data-[state=open]:text-[#fa9b6b] [&>svg]:h-6 [&>svg]:w-6">
        <span>{translations['nav.company']?.[language]}</span>
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
          {/* Company Header */}
          <div className="mb-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Building size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    {language === 'en' ? 'About Flair-Plastic' : 'A Flair-Plastic-ról'}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {language === 'en' 
                      ? 'Industry leader in precision plastic manufacturing since 1990'
                      : 'Vezető a precíziós műanyag gyártásban 1990 óta'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-blue-100 px-2 py-1 rounded-full">
                  <Calendar size={12} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-700">35+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Grid Layout - All company cards in one optimized grid */}
          <div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
              {companySections.map((section) => 
                section.items.map((item, itemIndex) => (
                  <motion.div 
                    key={`${section.category}-${itemIndex}`}
                    variants={itemVariants}
                    className="group"
                  >
                    <Link 
                      href={item.href}
                      className={`flex flex-col p-2 rounded-lg border border-gray-100 hover:bg-gradient-to-br hover:to-transparent transition-all duration-300 h-full min-h-[140px] ${
                        section.color === 'blue' 
                          ? 'hover:border-blue-200 hover:from-blue-50/50' 
                          : 'hover:border-purple-200 hover:from-purple-50/50'
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-end mb-2">
                        <div className={`w-6 h-6 flex items-center justify-center text-gray-400 transition-colors ${
                          section.color === 'blue' ? 'group-hover:text-blue-600' : 'group-hover:text-purple-600'
                        }`}>
                          <item.icon size={14} />
                        </div>
                      </div>

                      {/* Category Indicator */}
                      <div className={`text-xs font-medium mb-1.5 ${
                        section.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                      }`}>
                        {section.category}
                      </div>

                      {/* Title */}
                      <h5 className={`text-sm font-semibold mb-1.5 leading-tight transition-colors ${
                        section.color === 'blue' 
                          ? 'text-gray-900 group-hover:text-blue-600' 
                          : 'text-gray-900 group-hover:text-purple-600'
                      }`}>
                        {item.title}
                      </h5>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-2 flex-1">
                        {item.description}
                      </p>

                      {/* Hover Arrow */}
                      <div className={`flex items-center text-xs transition-colors mt-auto ${
                        section.color === 'blue' 
                          ? 'text-gray-400 group-hover:text-blue-600' 
                          : 'text-gray-400 group-hover:text-purple-600'
                      }`}>
                        <span className="mr-1">Learn more</span>
                        <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-3 pt-2 border-t border-gray-100 text-center">
            <Link 
              href="/company/history" 
              className="inline-flex items-center text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors group"
            >
              <span>
                {language === 'en' ? 'Discover Our Complete Company Story' : 'Fedezze Fel Teljes Vállalati Történetünket'}
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
