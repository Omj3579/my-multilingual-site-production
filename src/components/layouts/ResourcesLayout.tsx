import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

// UI Components
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ResourcesLayoutProps {
  children: React.ReactNode;
}

const ResourcesLayout = ({ children }: ResourcesLayoutProps) => {
  const router = useRouter();
  const { language, changeLanguage, translations } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);  // Scroll behavior effect
  useEffect(() => {
    let ticking = false;
    let lastDirection = '';
    
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Only update if scroll difference is significant enough to prevent flickering
      if (scrollDifference < 8) {
        ticking = false;
        return;
      }
      
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Only update if direction actually changed or we're at extremes
      if (scrollDirection !== lastDirection || currentScrollY < 20 || currentScrollY > 100) {
        // Show navbar when scrolling up or at top
        if (currentScrollY < lastScrollY || currentScrollY < 20) {
          setIsVisible(true);
          lastDirection = 'up';
        } 
        // Hide navbar when scrolling down with buffer
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          lastDirection = 'down';
        }
      }
      
      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Check if the current path matches the link href
  const isActive = (path: string) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  // Navigation items specific to resources
  const resourcesNavItems = [
    { key: 'resources.nav.home', href: '/resources' },
    { key: 'resources.nav.blog', href: '/resources/blog' },
    { key: 'resources.nav.caseStudies', href: '/resources/case-studies' },
    { key: 'resources.nav.news', href: '/resources/news' },
    { key: 'resources.nav.updates', href: '/resources/updates' },
  ];  return (
    <div className="flex flex-col bg-white">      {/* Resources Header */}
      <motion.header 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -80,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.98
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/5 rounded-full transform-gpu"
      >        {/* Stretched centered navigation */}
        <div className="flex items-center px-8 py-2.5 min-w-[700px] lg:min-w-[800px] xl:min-w-[900px]">          {/* Logo */}
          <Link href="/" className="flex items-center mr-10">
            <Image
              src="https://flair-plastic.hu/wp-content/uploads/2022/09/cropped-flair_plastic_logo_cmyk_full_-_MAIN.png.webp"
              alt="Flair Plastic Logo"
              width={120}
              height={38}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-2 mr-10 flex-1 justify-center">
            {resourcesNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-[#fa9b6b]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-1 h-8 px-3 rounded-full border-gray-300">
                  <Globe className="h-3 w-3" />
                  <span className="uppercase text-xs">{language}</span>
                  <ChevronDown className="h-2 w-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  <div className="flex items-center space-x-2">
                    <span>🇺🇸</span>
                    <span>English</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('hu')}>
                  <div className="flex items-center space-x-2">
                    <span>🇭🇺</span>
                    <span>Magyar</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center px-4 py-2 bg-[#fa9b6b] text-white text-xs font-medium rounded-full hover:bg-[#e86e40] transition-colors h-8"
            >
              {language === 'en' ? 'Contact' : 'Kapcsolat'}
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>{/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl shadow-black/5 mx-4 md:hidden"
          >
            <nav className="flex flex-col space-y-1 p-3">
              {resourcesNavItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#fef2ee] text-[#fa9b6b]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Mobile Contact */}
              <Link
                href="/contact"
                className="px-3 py-2 bg-[#fa9b6b] text-white text-sm font-medium rounded-xl hover:bg-[#e86e40] transition-colors text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === 'en' ? 'Contact Us' : 'Kapcsolat'}
              </Link>

              {/* Mobile Back to Main Site */}
              <Link
                href="/"
                className="flex items-center justify-center px-3 py-2 text-sm text-gray-600 hover:text-[#fa9b6b] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                {language === 'en' ? 'Back to Main Site' : 'Vissza a főoldalra'}
              </Link>
            </nav>
          </motion.div>
        )}
      </motion.header>      {/* Spacer to prevent content from being hidden under the floating nav */}
      <motion.div 
        initial={{ height: 90 }}
        animate={{ height: isVisible ? 90 : 20 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      />{/* Main Content */}
      <main>
        {children}
      </main>

      {/* Resources Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="https://flair-plastic.hu/wp-content/uploads/2022/09/cropped-flair_plastic_logo_cmyk_full_-_MAIN.png.webp"
                  alt="Flair Plastic Logo"
                  width={140}
                  height={45}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                {language === 'en' 
                  ? 'Leading plastic manufacturing company specializing in injection molding and sustainable solutions.'
                  : 'Vezető műanyaggyártó vállalat, amely a fröccsöntésre és fenntartható megoldásokra specializálódott.'}
              </p>              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/flairplastic/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Visit Flair Plastic on LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Resources Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Resources' : 'Források'}
              </h3>
              <ul className="space-y-2">
                {resourcesNavItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'Gyors linkek'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {language === 'en' ? 'Home' : 'Kezdőlap'}
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {language === 'en' ? 'Capabilities' : 'Képességek'}
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {language === 'en' ? 'Sustainability' : 'Fenntarthatóság'}
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {language === 'en' ? 'Company' : 'Cég'}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {language === 'en' ? 'Contact' : 'Kapcsolat'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'en' ? 'Contact Info' : 'Kapcsolat'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-[#fa9b6b] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-400">
                    <p>Flair-Plastic</p>
                    <p>Miskolc, Sajószigeti utca 2, 3527</p>
                    <p>Hungary</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[#fa9b6b] flex-shrink-0" />
                  <a href="tel:+36465840600" className="text-sm text-gray-400 hover:text-white transition-colors">
                    +36 (46) 584 06 00
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[#fa9b6b] flex-shrink-0" />
                  <a href="mailto:info@flair-plastic.hu" className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@flair-plastic.hu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Flair-Plastic. {language === 'en' ? 'All rights reserved.' : 'Minden jog fenntartva.'}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Adatvédelmi irányelvek'}
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Felhasználási feltételek'}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourcesLayout;
