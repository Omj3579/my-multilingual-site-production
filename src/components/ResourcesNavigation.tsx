import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const ResourcesNavigation = () => {
  const router = useRouter();
  const { language, translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
    // Scroll behavior effect
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top with smooth behavior
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but not at the very top) with delay
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledControlNavbar = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(controlNavbar, 10);
    };

    window.addEventListener('scroll', throttledControlNavbar, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledControlNavbar);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);
  
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  const navItems = [
    { key: 'resources.nav.home', href: '/resources' },
    { key: 'resources.nav.blog', href: '/resources/blog' },
    { key: 'resources.nav.caseStudies', href: '/resources/case-studies' },
    { key: 'resources.nav.news', href: '/resources/news' },
    { key: 'resources.nav.updates', href: '/resources/updates' },
    { key: 'resources.nav.contact', href: '/contact' },
  ];  return (
    <>      <motion.nav 
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
        className="fixed top-0 left-0 right-0 z-[9999] bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg transform-gpu"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 lg:space-x-4 overflow-x-auto py-3 scrollbar-hide">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href || 
                              (item.href !== '/resources' && router.pathname.startsWith(item.href));
              
              return (
                <Link 
                  key={item.key} 
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors",
                    isActive 
                      ? "bg-[#fef2ee] text-[#fa9b6b]" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>        </div>
      </motion.nav>
      {/* Spacer to prevent content from being hidden under the floating nav */}
      <motion.div 
        initial={{ height: 64 }}
        animate={{ height: isVisible ? 64 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      />
    </>
  );
};

export default ResourcesNavigation;