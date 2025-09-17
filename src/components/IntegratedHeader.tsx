import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

interface IntegratedHeaderProps {
  transparent?: boolean;
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
  items?: Array<{ label: string; href: string; }>;
}

interface Navigation {
  services: NavItem;
  sustainability: NavItem;
  company: NavItem;
  products: NavItem;
  contact: NavItem;
}

const IntegratedHeader = ({ transparent = false, className = '' }: IntegratedHeaderProps) => {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    };
    
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const navigation: Record<string, Navigation> = {
    en: {
      services: { 
        label: 'Our Services', 
        href: '/services',
        items: [
          { label: 'Manufacturing', href: '/services#manufacturing' },
          { label: 'Design Support', href: '/services#design-support' },
          { label: 'Quality Assurance', href: '/services#quality' },
          { label: 'Innovation Labs', href: '/services#innovation' }
        ]
      },
      sustainability: { 
        label: 'Green Innovation', 
        href: '/sustainability',
        items: [
          { label: 'Our Green Strategy', href: '/sustainability' },
          { label: 'Operation Clean Sweep', href: '/sustainability/clean-sweep' },
          { label: 'Environmental Impact', href: '/sustainability#impact' }
        ]
      },
      company: { 
        label: 'About Us', 
        href: '/company',
        items: [
          { label: 'Company History', href: '/company/history' },
          { label: 'Management Team', href: '/company/management' },
          { label: 'Our Values', href: '/company#values' }
        ]
      },
      products: { label: 'Product Portfolio', href: '/products' },
      contact: { label: 'Contact Us', href: '/contact' }
    },
    hu: {
      services: { 
        label: 'Szolgáltatásaink', 
        href: '/services',
        items: [
          { label: 'Gyártás', href: '/services#manufacturing' },
          { label: 'Tervezési támogatás', href: '/services#design-support' },
          { label: 'Minőségbiztosítás', href: '/services#quality' },
          { label: 'Innovációs laborok', href: '/services#innovation' }
        ]
      },
      sustainability: { 
        label: 'Zöld innováció', 
        href: '/sustainability',
        items: [
          { label: 'Zöld stratégiánk', href: '/sustainability' },
          { label: 'Operation Clean Sweep', href: '/sustainability/clean-sweep' },
          { label: 'Környezeti hatás', href: '/sustainability#impact' }
        ]
      },
      company: { 
        label: 'Rólunk', 
        href: '/company',
        items: [
          { label: 'Cégkrónika', href: '/company/history' },
          { label: 'Vezetőség', href: '/company/management' },
          { label: 'Értékeink', href: '/company#values' }
        ]
      },
      products: { label: 'Termékportfólió', href: '/products' },
      contact: { label: 'Kapcsolat', href: '/contact' }
    }
  };

  const navItems = navigation[language] || navigation.en;

  const baseClasses = transparent 
    ? "relative w-full bg-transparent"
    : "relative w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/50";

  return (
    <header className={`${baseClasses} ${className}`}>
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logos/flair_plastic_logo_cmyk_full_-_MAIN.png"
                alt="Flair Plastic"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className={`text-xl font-bold ${transparent ? 'text-white' : 'text-gray-800'}`}>
                Flair Plastic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(navItems).map(([key, item]) => {
              const navItem = item as NavItem;
              if (navItem.items) {
                return (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() => handleDropdownEnter(key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className={`flex items-center space-x-1 py-2 text-sm font-medium transition-colors duration-200 ${
                      transparent 
                        ? 'text-white/90 hover:text-white' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}>
                      <span>{navItem.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 z-50 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                        >
                          {navItem.items!.map((subItem, index) => (
                            <Link
                              key={index}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={key}
                    href={navItem.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      transparent 
                        ? 'text-white/90 hover:text-white' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {navItem.label}
                  </Link>
                );
              }
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              {navItems.contact.label}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : transparent 
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <Image src="/flags/en.svg" alt="EN" width={16} height={12} className="rounded-sm" />
                <span>EN</span>
              </button>
              <button
                onClick={() => setLanguage('hu')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  language === 'hu'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : transparent 
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <Image src="/flags/hu.svg" alt="HU" width={16} height={12} className="rounded-sm" />
                <span>HU</span>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                transparent 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg"
            >
              <div className="py-4 space-y-4">
                {Object.entries(navItems).map(([key, item]) => {
                  if ('items' in item) {
                    return (
                      <div key={key} className="px-4">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                        >
                          <span>{item.label}</span>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openDropdown === key ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 pl-4 space-y-2"
                            >
                              {item.items.map((subItem, index) => (
                                <Link
                                  key={index}
                                  href={subItem.href}
                                  className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={key}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    );
                  }
                })}
                <div className="px-4 pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-center font-medium rounded-full transition-colors duration-200"
                  >
                    {navItems.contact.label}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default IntegratedHeader;
