import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence

// Icons
import { Globe, Menu, X, ChevronDown, ArrowRight, Search } from 'lucide-react'; // Added Search

// UI Components
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input'; // Add this import

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const router = useRouter();
  const { language, changeLanguage, translations } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // Add this state
  const [searchQuery, setSearchQuery] = useState(''); // Add this state

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };
  // Function to handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/resources/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  // Define navigation items
  const navItems = [
    {
      href: '/resources',
      label: t('resources.nav.home') || 'Home'
    },
    {
      href: '/resources/blog',
      lasbel: t('resources.nav.blog') || 'Blog'
    },
    {
      href: '/resources/case-studies',
      label: t('resources.nav.caseStudies') || 'Case Studies'
    },
    {
      href: '/resources/news',
      label: t('resources.nav.news') || 'News'
    },
    {
      href: '/resources/updates',
      label: t('resources.nav.updates') || 'Updates'
    },
    {
      href: '/contact',
      label: t('resources.nav.contact') || 'Contact'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white rounded-lg shadow-lg w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {t('nav.search') || 'Search'}
                  </h2>
                  <Button variant="ghost" size="sm" onClick={() => setSearchOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder={t('nav.searchPlaceholder') || 'Search resources...'}
                    className="pr-10 py-6 pl-10 text-base rounded-md bg-white text-gray-800 border-gray-300 placeholder-gray-400 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Button 
                    type="submit" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 flex items-center justify-center bg-[#fa9b6b] hover:bg-[#e86e40] rounded-full"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of your existing layout */}
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="https://flair-plastic.hu/wp-content/uploads/2022/09/cropped-flair_plastic_logo_cmyk_full_-_MAIN-300x300.png.webp" 
                alt="Flair Plastic" 
                width={60} 
                height={20} 
              />
              <span className="ml-2 text-lg font-semibold text-[#fa9b6b] hidden sm:inline">
                | {t('resources.title') || 'Resources'}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = router.pathname === item.href || 
                  (item.href !== '/' && router.pathname.startsWith(item.href));
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? 'text-[#fa9b6b] bg-[#fef2ee]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section - Language + Search */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center text-gray-600"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    <span>
                      {language === 'en' ? 'EN' : language === 'hu' ? 'HU' : 'DE'}
                    </span>
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem 
                    onClick={() => changeLanguage('en')}
                    className={language === 'en' ? 'bg-gray-100' : ''}
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => changeLanguage('hu')}
                    className={language === 'hu' ? 'bg-gray-100' : ''}
                  >
                    Magyar
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => changeLanguage('de')}
                    className={language === 'de' ? 'bg-gray-100' : ''}
                  >
                    Deutsch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search Button - Update this button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="mr-2 h-4 w-4" />
                {t('nav.search') || 'Search'}
              </Button>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => {
                  const isActive = router.pathname === item.href || 
                    (item.href !== '/' && router.pathname.startsWith(item.href));
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 text-sm font-medium transition-colors rounded-md ${
                        isActive
                          ? 'text-[#fa9b6b] bg-[#fef2ee]'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile Search Button - Update this button */}
                <Button 
                  variant="outline" 
                  className="mt-3 w-full justify-start"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {t('nav.search') || 'Search'}
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Resources-specific Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <Image 
                  src="/logos/flair_plastic_logo_cmyk_full_-_main_negative.png" 
                  alt="Flair Plastic" 
                  width={80} 
                  height={25} 
                  priority
                />
                <span className="ml-2 text-lg font-semibold text-[#fa9b6b] hidden sm:inline">
                  | {t('resources.title') || 'Resources'}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {t('resources.footer.description') || 
                  'Access our complete library of industry insights, news, and company updates.'}
              </p>
              <div className="flex space-x-3">
                {/* Social Media Icons */}
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a 
                    key={social} 
                    href={`https://${social}.com/flairplastic`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#fa9b6b] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Simple icon placeholders - replace with actual SVG icons */}
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Resource Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('resources.footer.categories') || 'Categories'}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.blog') || 'Blog Articles'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.caseStudies') || 'Case Studies'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/news" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.news') || 'Company News'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/updates" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.updates') || 'Product Updates'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tags" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.tags') || 'Browse by Tags'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Topics */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('resources.footer.topics') || 'Popular Topics'}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/tags/sustainability" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.sustainability') || 'Sustainability'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tags/innovation" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.innovation') || 'Innovation'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tags/manufacturing" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.manufacturing') || 'Manufacturing'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tags/industry" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.industry') || 'Industry Trends'}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tags/recycling" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('resources.footer.recycling') || 'Recycling'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('resources.footer.subscribe') || 'Stay Updated'}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {t('resources.footer.subscribeText') || 
                  'Subscribe to receive our latest resources directly to your inbox.'}
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={t('resources.footer.emailPlaceholder') || 'Your email'} 
                  className="px-3 py-2 bg-gray-800 text-gray-300 rounded-l-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#fa9b6b]"
                />
                <Button className="rounded-l-none bg-[#fa9b6b] hover:bg-[#e86e40]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Flair Plastic. {t('resources.footer.rights') || 'All rights reserved.'}
              </p>
              <div className="flex mt-4 md:mt-0">
                <Link href="/" className="text-gray-400 hover:text-white text-sm px-3 py-1 border-r border-gray-700">
                  {t('resources.footer.mainSite') || 'Back to Main Site'}
                </Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm px-3 py-1 border-r border-gray-700">
                  {t('resources.footer.privacy') || 'Privacy Policy'}
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm px-3 py-1">
                  {t('resources.footer.terms') || 'Terms of Use'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;