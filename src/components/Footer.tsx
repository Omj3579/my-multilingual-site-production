import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUp, Lightbulb, 
  Shield, ArrowUpRight,
  Settings, Building2, Compass, 
  Box, Component, Tag, Paintbrush,
  Home, ChefHat, Flower, Baby, Zap, Package2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CookieSettingsDialog from './policies/CookieSettingsDialog';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import new subcomponents
import SocialIcons from './footer/SocialIcons';
import NewsletterForm from './footer/NewsletterForm';
import ContactInfo from './footer/ContactInfo';
import LanguageSwitcher from './footer/LanguageSwitcher';

// Safely get translation with fallback
const getTranslation = (translations: Record<string, Record<string, string>> | null, key: string, language: string, fallback: string): string => {
  return translations?.[key]?.[language] || fallback;
};

const Footer: React.FC = () => {  const { translations, language } = useLanguage();
  const [cookieDialogOpen, setCookieDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0.3, 1]);
  // Add ref for contact info (no longer needed but keeping for compatibility)
  const contactInfoRef = React.useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // Footer navigation data with enhanced structure matching header design
  const footerNavigation = {
    explore: {
      title: getTranslation(translations, 'footer.explore', language, 
        language === 'en' ? 'Company Overview' : 'Vállalati áttekintés'),
      description: language === 'en' ? 'Discover our expertise and capabilities' : 'Fedezze fel szakértelmünket és képességeinket',
      links: [
        { 
          href: '/capabilities', 
          label: getTranslation(translations, 'nav.capabilities', language, 
            language === 'en' ? 'Our Services' : 'Szolgáltatásaink'),
          description: language === 'en' ? 'Professional manufacturing solutions' : 'Professzionális gyártási megoldások',
          icon: Settings
        },
        { 
          href: '/sustainability', 
          label: getTranslation(translations, 'nav.sustainability', language, 
            language === 'en' ? 'Green Innovation' : 'Zöld innováció'),
          description: language === 'en' ? 'Sustainable manufacturing practices' : 'Fenntartható gyártási gyakorlatok',
          icon: Compass
        },
        { 
          href: '/company', 
          label: getTranslation(translations, 'nav.company', language, 
            language === 'en' ? 'About Us' : 'Rólunk'),
          description: language === 'en' ? 'Our company story and values' : 'Vállalati történetünk és értékeink',
          icon: Building2
        },
        { 
          href: '/resources', 
          label: getTranslation(translations, 'nav.resources', language, 
            language === 'en' ? 'Knowledge Hub' : 'Tudásbázis'),
          description: language === 'en' ? 'Industry insights and technical resources' : 'Ipari betekintések és műszaki források',
          icon: ArrowUpRight
        }
      ]
    },
    capabilities: {
      title: getTranslation(translations, 'footer.capabilities', language, 
        language === 'en' ? 'Production Services' : 'Termelési szolgáltatások'),
      description: language === 'en' ? 'Specialized plastic manufacturing expertise' : 'Specializált műanyaggyártási szakértelem',
      links: [
        { 
          href: '/capabilities/injection-moulding', 
          label: language === 'en' ? 'Precision Moulding' : 'Precíziós öntés',
          description: language === 'en' ? 'Precision engineered plastic components' : 'Precíziós műanyag alkatrészek',
          icon: Component
        },
        { 
          href: '/capabilities/blow-moulding', 
          label: language === 'en' ? 'Hollow Forming' : 'Üreges formázás',
          description: language === 'en' ? 'Custom hollow container solutions' : 'Egyedi üreges tároló megoldások',
          icon: Box
        },
        { 
          href: '/capabilities/contract-manufacturing', 
          label: language === 'en' ? 'Manufacturing Partnership' : 'Gyártási partnerség',
          description: language === 'en' ? 'End-to-end production partnerships' : 'Teljes körű gyártási partnerségek',
          icon: Package2
        },
        { 
          href: '/capabilities/material-selection', 
          label: language === 'en' ? 'Polymer Consulting' : 'Polimer tanácsadás',
          description: language === 'en' ? 'Expert polymer consultation services' : 'Szakértői polimer tanácsadás',
          icon: Tag
        }
      ]    },    
    shop: {
      title: language === 'en' ? 'Product Catalog' : 'Termékkatalógus',
      description: language === 'en' ? 'Premium plastic solutions for various industries' : 'Prémium műanyag megoldások különböző iparágak számára',
      links: [
        { 
          href: '/shop/home', 
          label: language === 'en' ? 'Home' : 'Otthon',
          description: language === 'en' ? 'Residential plastic applications' : 'Lakossági műanyag alkalmazások',
          icon: Home
        },
        { 
          href: '/shop/kitchen', 
          label: language === 'en' ? 'Kitchen' : 'Konyha',
          description: language === 'en' ? 'Food-grade plastic solutions' : 'Élelmiszeripari műanyag megoldások',
          icon: ChefHat
        },
        { 
          href: '/shop/garden', 
          label: language === 'en' ? 'Garden' : 'Kert',
          description: language === 'en' ? 'Weather-resistant outdoor products' : 'Időjárásálló kültéri termékek',
          icon: Flower
        },
        { 
          href: '/shop/kids', 
          label: language === 'en' ? 'Kids' : 'Gyerekek',
          description: language === 'en' ? 'Child-safe plastic products' : 'Gyermekbiztos műanyag termékek',
          icon: Baby
        },
        { 
          href: '/shop/active', 
          label: language === 'en' ? 'Active' : 'Aktív',
          description: language === 'en' ? 'Durable recreational equipment' : 'Tartós rekreációs felszerelések',
          icon: Zap
        },
        { 
          href: '/shop/pallets', 
          label: language === 'en' ? 'Pallets' : 'Raklapok',
          description: language === 'en' ? 'Heavy-duty logistics solutions' : 'Nagy teljesítményű logisztikai megoldások',
          icon: Paintbrush
        }
      ]    }  };  return (
    <motion.footer 
      style={{ opacity }}
      className="relative bg-gradient-to-b from-white to-gray-100 text-gray-700 font-sans overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Premium 3D glass effect decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">        {/* Glass blur effect orbs */}
        <motion.div 
          className="absolute top-1/4 left-[15%] w-[30rem] h-[30rem] rounded-full bg-gradient-radial from-amber-200/5 via-amber-100/3 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-[10%] w-[25rem] h-[25rem] rounded-full bg-gradient-radial from-blue-200/5 via-blue-100/3 to-transparent blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.15, 0.08],
          }}          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
          {/* Premium grid pattern with dots */}
        <div className="absolute inset-0 opacity-[0.008]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="footer-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="0.5" fill="currentColor" opacity="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>        {/* Premium floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gray-300/15 rounded-full"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${15 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + (i * 0.4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>      {/* Enhanced Newsletter section with premium glass morphism */}
      <section 
        className="relative z-10"
        aria-labelledby="newsletter-heading"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="max-w-2xl">
              <motion.h2 
                id="newsletter-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-amber-600 bg-clip-text text-transparent"
              >
                {language === 'en' 
                  ? 'Stay Ahead with Industry Insights' 
                  : 'Maradjon előrébb az iparági trendekkel'}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed max-w-xl"
              >
                {language === 'en' 
                  ? 'Get exclusive access to manufacturing innovations, sustainability updates, and expert insights delivered directly to your inbox.' 
                  : 'Szerezzen kizárólagos hozzáférést a gyártási innovációkhoz, fenntarthatósági frissítésekhez és szakértői betekintésekhez.'}
              </motion.p>
              
              {/* Trust indicators with premium styling */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mt-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-green-100/70 backdrop-blur-sm">
                    <Shield className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span>{language === 'en' ? 'No spam' : 'Spam mentes'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-amber-100/70 backdrop-blur-sm">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <span>{language === 'en' ? 'Monthly insights' : 'Havi betekintések'}</span>
                </div>
              </motion.div>
            </div>
              <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Main footer content with new layout matching the image */}
      <div className="relative z-10">        <div className="max-w-7xl mx-auto px-6 py-16">          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
            {/* Left column - Company overview and contact card (5 columns) */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {/* Company overview section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href="/" className="inline-block mb-6">
                    <Image 
                      src="https://flair-plastic.hu/wp-content/uploads/2022/09/cropped-flair_plastic_logo_cmyk_full_-_MAIN.png.webp" 
                      alt="Flair Plastic Logo" 
                      width={160}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                    {language === 'hu' ? 
                      'A Flair-Plastic Európa szívében stratégiailag elhelyezkedő vezető műanyaggyártó vállalat, amely fröccsöntésre és fröccsfúvásos formázásra specializálódott. Szerződéses gyártóként skálázható termelési megoldásokat kínálunk globális ügyfeleink számára, fejlett technológiákkal és modern berendezésekkel biztosítva a kiváló minőséget és innovációt. Elkötelezettek vagyunk a fenntarthatóság és a kiválóság iránt, minden komponens és folyamat esetében.' :
                      'Flair-Plastic, strategically positioned at the heart of Europe, is a leading plastic manufacturing company specializing in injection and injection blow moulding. As a dedicated contract manufacturer, we deliver scalable production solutions with advanced technologies and modern equipment, ensuring exceptional quality and innovation for our global clientele. Committed to sustainability and excellence, we enhance performance and competitive advantage across diverse markets worldwide.'
                    }
                  </p>
                    {/* Social media icons with premium animation */}
                  <div className="mb-6">
                    <SocialIcons />
                  </div>
                </motion.div>

                {/* Contact information card - moved here */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/10 relative overflow-hidden"
                  ref={contactInfoRef}
                >
                  {/* Background decoration */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-radial from-blue-100/30 to-transparent blur-xl"></div>
                  <div className="relative z-10">
                    <ContactInfo />
                  </div>
                </motion.div>

                {/* Language switcher moved below contact card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <LanguageSwitcher />
                </motion.div>
              </div>
            </div>            
            {/* Right column - Navigation section (7 columns) */}
            <div className="lg:col-span-7">
              {/* Desktop layout with sophisticated card-based design */}
              <div className="hidden lg:block">
                <div className="space-y-8">
                  {/* Navigation header 
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center pb-4 border-b border-gray-100"
                  >
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {language === 'en' ? 'Navigation' : 'Navigáció'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'en' 
                        ? 'Explore our comprehensive services and solutions'
                        : 'Fedezze fel átfogó szolgáltatásainkat és megoldásainkat'}
                    </p>
                  </motion.div>*/}

                  {/* Navigation cards in grid */}
                  <div className="grid grid-cols-1 gap-6 pt-18">
                    {['explore', 'capabilities', 'shop'].map((section, index) => {
                      const sectionData = footerNavigation[section as keyof typeof footerNavigation];
                      return (
                        <motion.div
                          key={section}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                        >
                          {/* Card header */}
                          <div className="p-4 pb-3 border-b border-gray-100/10">
                            <h4 className="text-[#fa9b6b] font-medium text-base mb-1.5">
                              {sectionData.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {sectionData.description}
                            </p>
                          </div>

                          {/* Links grid */}
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-3">
                              {sectionData.links.map((link, linkIndex) => (
                                <motion.div
                                  key={linkIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: (index * 0.1) + (linkIndex * 0.05) }}
                                  viewport={{ once: true }}
                                >
                                  <Link 
                                    href={link.href}
                                    className="group/link block rounded-md p-2.5 -mx-1 transition-colors hover:bg-gray-50"
                                  >
                                    <div className="flex items-center space-x-2.5 mb-1">
                                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#fa9b6b]/70 bg-[#fa9b6b]/5 rounded-md group-hover/link:bg-[#fa9b6b]/10 group-hover/link:text-[#fa9b6b]/90 transition-colors">
                                        <link.icon size={14} />
                                      </div>
                                      <span className="text-xs font-medium text-gray-800 group-hover/link:text-[#fa9b6b] transition-colors leading-tight">
                                        {link.label}
                                      </span>
                                    </div>
                                    
                                    {/* Description line */}
                                    <p className="text-xs text-gray-500 leading-relaxed pl-7">
                                      {link.description}
                                    </p>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile navigation using enhanced accordions */}
              <div className="block lg:hidden">
                <div className="space-y-4">
                  {['explore', 'capabilities', 'shop'].map((section, index) => {
                    const sectionData = footerNavigation[section as keyof typeof footerNavigation];
                    return (
                      <motion.div
                        key={section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100/10"
                      >
                        <div className="mb-4 pb-3 border-b border-gray-100/10">
                          <h4 className="text-[#fa9b6b] font-medium text-base mb-1.5">
                            {sectionData.title}
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {sectionData.description}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          {sectionData.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              href={link.href}
                              className="group/link flex items-start space-x-3 p-2 hover:bg-gray-50/50 rounded-lg transition-colors"
                            >
                              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#fa9b6b]/70 bg-[#fa9b6b]/5 rounded-md group-hover/link:bg-[#fa9b6b]/10 group-hover/link:text-[#fa9b6b]/90 transition-colors mt-0.5">
                                <link.icon size={14} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-sm font-medium text-gray-800 group-hover/link:text-[#fa9b6b] transition-colors block">
                                  {link.label}
                                </span>
                                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>        {/* Enhanced premium legal section with glass effect */}
      <div className="relative border-t border-gray-100/10 bg-white/80 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              {getTranslation(translations, 'footer.rights', language, 
                language === 'en' ? '© 2025 Flair-Plastic. All rights reserved.' : 
                '© 2025 Flair-Plastic. Minden jog fenntartva.')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <button 
                onClick={() => setCookieDialogOpen(true)}
                className="text-sm text-gray-500 hover:text-blue-700 transition-colors group relative"
                aria-label={language === 'en' ? 'Cookie settings' : 'Cookie beállítások'}
              >
                <span className="relative z-10">
                  {language === 'en' ? 'Cookie settings' : 'Cookie beállítások'}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500/60 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <Link 
                href="/policies/cookies" 
                className="text-sm text-gray-500 hover:text-blue-700 transition-colors group relative"
                aria-label={language === 'en' ? 'Cookies Policy' : 'Cookie Szabályzat'}
              >
                <span className="relative z-10">
                  {getTranslation(translations, 'footer.cookies.policy', language, 
                    language === 'en' ? 'Cookies Policy' : 'Cookie Szabályzat')}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500/60 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                href="/policies/privacy" 
                className="text-sm text-gray-500 hover:text-blue-700 transition-colors group relative"
                aria-label={language === 'en' ? 'Privacy Policy' : 'Adatvédelmi Szabályzat'}
              >
                <span className="relative z-10">
                  {getTranslation(translations, 'footer.privacy', language, 
                    language === 'en' ? 'Privacy Policy' : 'Adatvédelmi Szabályzat')}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500/60 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                href="/policies/terms" 
                className="text-sm text-gray-500 hover:text-blue-700 transition-colors group relative"
                aria-label={language === 'en' ? 'Terms of Service' : 'Felhasználási Feltételek'}
              >
                <span className="relative z-10">
                  {getTranslation(translations, 'footer.terms', language, 
                    language === 'en' ? 'Terms of Service' : 'Felhasználási Feltételek')}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500/60 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>      {/* Ultra-premium back to top button with glass effect and animations */}
      <motion.button
        onClick={scrollToTop}
        aria-label={language === 'en' ? 'Back to top' : 'Vissza a tetejére'}
        className="fixed right-8 bottom-8 w-12 h-12 rounded-full bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-md shadow-xl border border-gray-100/10 flex items-center justify-center z-50 hover:shadow-2xl transition-all duration-300 group"
        whileHover={{ 
          y: -5, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(239, 246, 255, 0.95))"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ 
            y: isHovered ? -4 : 0,
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          className="text-blue-600 filter drop-shadow-sm"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
        
        {/* Premium glass highlight effects */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent rounded-t-full"></div>
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-blue-400 rounded-full"
        />
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md py-1 px-3 rounded-full shadow-md border border-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-xs text-blue-700 font-medium">{language === 'en' ? 'Back to top' : 'Vissza a tetejére'}</span>
          </div>
        </div>
      </motion.button>

      {/* Cookie dialog */}
      <CookieSettingsDialog 
        open={cookieDialogOpen} 
        onOpenChange={setCookieDialogOpen} 
      />
    </motion.footer>
  );
};

export default Footer;
