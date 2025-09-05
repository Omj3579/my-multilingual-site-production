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
  Briefcase,
  Heart
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
          icon: Calendar,
          badge: "Founded 1990"
        },
        {
          title: language === 'en' ? "Growth & Milestones" : "Növekedés és Mérföldkövek",
          description: language === 'en' 
            ? "Key achievements and technological breakthroughs that shaped our 35-year journey to industry leadership"
            : "Kulcsfontosságú eredmények és technológiai áttörések, amelyek formálták 35 éves utunkat az iparági vezetésig",
          href: "/company/history#milestones",
          icon: Target,
          badge: "35+ Years"
        },
        {
          title: language === 'en' ? "Innovation Legacy" : "Innovációs Örökség",
          description: language === 'en' 
            ? "Our pioneering developments in injection molding, sustainable practices, and quality excellence"
            : "Úttörő fejlesztéseink a fröccsöntésben, fenntartható gyakorlatokban és minőségi kiválóságban",
          href: "/company/history#innovation",
          icon: Award,
          badge: "Industry Pioneer"
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
          icon: Briefcase,
          badge: "C-Level"
        },
        {
          title: language === 'en' ? "Department Heads" : "Osztályvezetők",
          description: language === 'en' 
            ? "Experienced managers leading our production, quality, engineering, and business development teams"
            : "Tapasztalt vezetők, akik irányítják termelési, minőségi, mérnöki és üzletfejlesztési csapatainkat",
          href: "/company/management#department-heads",
          icon: Users,
          badge: "Department Leaders"
        },
        {
          title: language === 'en' ? "Advisory Board" : "Tanácsadó Testület",
          description: language === 'en' 
            ? "Industry experts and strategic advisors providing guidance on market trends and future opportunities"
            : "Ipari szakértők és stratégiai tanácsadók, akik útmutatást nyújtanak a piaci trendekről és jövőbeli lehetőségekről",
          href: "/company/management#advisory-board",
          icon: Heart,
          badge: "Strategic Advisors"
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
          className="w-[900px] p-6 shadow-lg bg-white rounded-xl border border-gray-100"
          style={{ width: '900px', maxWidth: '900px' }}
        >
          {/* Company Header */}
          <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Building size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {language === 'en' ? 'About Flair-Plastic' : 'A Flair-Plastic-ról'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'en' 
                      ? 'Industry leader in precision plastic manufacturing since 1990'
                      : 'Vezető a precíziós műanyag gyártásban 1990 óta'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-blue-100 px-3 py-1 rounded-full">
                  <Calendar size={14} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-700">35+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Categories with Multiple Cards */}
          <div className="space-y-8">
            {companySections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Section Header */}
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    section.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <section.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{section.category}</h4>
                    <p className="text-sm text-gray-500">
                      {section.category === "Our History" 
                        ? (language === 'en' ? 'Three decades of innovation and growth' : 'Három évtized innováció és növekedés')
                        : (language === 'en' ? 'Expert leadership driving our success' : 'Szakértő vezetés, amely sikereink hajtja')
                      }
                    </p>
                  </div>
                </div>

                {/* Items Grid - 3 cards per row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div key={itemIndex} variants={itemVariants}>
                      <Link 
                        href={item.href}
                        className={`group block p-4 rounded-xl border border-gray-100 hover:bg-gradient-to-br hover:to-transparent transition-all duration-300 h-full ${
                          section.color === 'blue' 
                            ? 'hover:border-blue-200 hover:from-blue-50/50' 
                            : 'hover:border-purple-200 hover:from-purple-50/50'
                        }`}
                      >
                        {/* Badge and Icon */}
                        <div className="flex items-center justify-between mb-3">
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            item.badge === 'Founded 1990' ? 'bg-blue-100 text-blue-700' :
                            item.badge === '35+ Years' ? 'bg-green-100 text-green-700' :
                            item.badge === 'Industry Pioneer' ? 'bg-amber-100 text-amber-700' :
                            item.badge === 'C-Level' ? 'bg-purple-100 text-purple-700' :
                            item.badge === 'Department Leaders' ? 'bg-indigo-100 text-indigo-700' :
                            'bg-pink-100 text-pink-700'
                          }`}>
                            {item.badge}
                          </div>
                          <div className={`w-8 h-8 flex items-center justify-center text-gray-400 transition-colors ${
                            section.color === 'blue' ? 'group-hover:text-blue-600' : 'group-hover:text-purple-600'
                          }`}>
                            <item.icon size={18} />
                          </div>
                        </div>

                        {/* Title */}
                        <h5 className={`font-semibold mb-2 leading-tight transition-colors ${
                          section.color === 'blue' 
                            ? 'text-gray-900 group-hover:text-blue-600' 
                            : 'text-gray-900 group-hover:text-purple-600'
                        }`}>
                          {item.title}
                        </h5>
                        
                        {/* Description */}
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
                          {item.description}
                        </p>

                        {/* Learn More Link */}
                        <div className={`flex items-center text-xs transition-colors ${
                          section.color === 'blue' 
                            ? 'text-gray-400 group-hover:text-blue-600' 
                            : 'text-gray-400 group-hover:text-purple-600'
                        }`}>
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
          
          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-gray-100 text-center">
            <Link 
              href="/company" 
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
