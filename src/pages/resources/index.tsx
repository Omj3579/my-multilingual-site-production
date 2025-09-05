import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

// UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Tabs, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Icons
import { 
  Search, 
  ArrowRight,   Clock, 
  ChevronRight,
  Calendar,
  Tag,
  ArrowUpDown,
  Coffee,
  Newspaper,
  Lightbulb,
  LineChart,
  ListFilter,
  Bookmark,
  Share2,  Award,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

// Layout Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import MosaicGrid from '@/components/ui/mosaic-grid';
import MosaicPostcard from '@/components/ui/mosaic-postcard';

// Enhanced Resource interface that matches your API responses
interface Resource {
  id: string;
  slug: string;
  category: 'blog' | 'case-study' | 'news' | 'update';
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  summary?: { en: string; hu: string; de: string };
  content: { en: string; hu: string; de: string };
  image: string;
  thumbnailImage?: string;
  date: string;
  publishedAt?: string;
  updatedAt?: string;
  author: {
    id: string;
    name: string;
    role: { en: string; hu: string; de: string };
    avatar?: string;
  };
  readTime: number;
  tags: string[];
  featured: boolean;
  customUrl?: string;
  // Type-specific fields
  industry?: string; // case studies
  client?: { name: string; industry: string; size: string }; // case studies
  newsCategory?: string; // news
  updateCategory?: string; // updates
  priority?: 'low' | 'medium' | 'high' | 'critical'; // updates
  changeType?: string; // updates
  urgent?: boolean; // news/updates
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Icons for resource types
const resourceTypeIcons = {
  'blog': <Coffee className="h-5 w-5" />,
  'case-study': <LineChart className="h-5 w-5" />,
  'news': <Newspaper className="h-5 w-5" />,
  'update': <Lightbulb className="h-5 w-5" />
};

// Type colors for visual distinction
const typeColors = {
  'blog': {
    bg: 'bg-[#fef2ee]',
    border: 'border-[#fa9b6b]/20',
    text: 'text-[#fa9b6b]',
    badge: 'bg-[#fa9b6b]'
  },
  'case-study': {
    bg: 'bg-[#eff6ff]',
    border: 'border-[#3b82f6]/20',
    text: 'text-[#3b82f6]',
    badge: 'bg-[#3b82f6]'
  },
  'news': {
    bg: 'bg-[#f0fdf4]',
    border: 'border-[#16a34a]/20',
    text: 'text-[#16a34a]',
    badge: 'bg-[#16a34a]'
  },
  'update': {
    bg: 'bg-[#fef2f2]',
    border: 'border-[#dc2626]/20',
    text: 'text-[#dc2626]',
    badge: 'bg-[#dc2626]'
  }
};

// Main component
const ResourcesPage = () => {
  const router = useRouter();
  const { language, translations } = useLanguage();
  
  // State management
  const [resources, setResources] = useState<Resource[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const resourcesPerPage = 9;

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mainContentRef, mainContentInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [subscribeRef, subscribeInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Fetch all resources from your enhanced API
  useEffect(() => {
    async function fetchAllResources() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch from all your enhanced APIs
        const [blogRes, caseStudyRes, newsRes, updateRes] = await Promise.allSettled([
          fetch('/api/combined-blog-posts'),
          fetch('/api/combined-case-studies'),
          fetch('/api/combined-news'),
          fetch('/api/combined-updates')
        ]);

        const allResources: Resource[] = [];        // Process blog posts
        if (blogRes.status === 'fulfilled' && blogRes.value.ok) {
          const blogData = await blogRes.value.json();
          const blogPosts = Array.isArray(blogData) ? blogData : blogData.posts || [];
          allResources.push(...blogPosts.map((post: Resource) => ({
            ...post,
            category: 'blog' as const
          })));
        }

        // Process case studies
        if (caseStudyRes.status === 'fulfilled' && caseStudyRes.value.ok) {
          const caseStudyData = await caseStudyRes.value.json();
          const caseStudies = Array.isArray(caseStudyData) ? caseStudyData : caseStudyData.caseStudies || [];
          allResources.push(...caseStudies.map((study: Resource) => ({
            ...study,
            category: 'case-study' as const
          })));
        }

        // Process news
        if (newsRes.status === 'fulfilled' && newsRes.value.ok) {
          const newsData = await newsRes.value.json();
          const news = Array.isArray(newsData) ? newsData : newsData.news || [];
          allResources.push(...news.map((article: Resource) => ({
            ...article,
            category: 'news' as const
          })));
        }

        // Process updates
        if (updateRes.status === 'fulfilled' && updateRes.value.ok) {
          const updateData = await updateRes.value.json();
          const updates = Array.isArray(updateData) ? updateData : updateData.updates || [];
          allResources.push(...updates.map((update: Resource) => ({
            ...update,
            category: 'update' as const
          })));
        }

        // Sort by date (newest first)
        allResources.sort((a, b) => {
          return new Date(b.publishedAt || b.date).getTime() - new Date(a.publishedAt || a.date).getTime();
        });

        setResources(allResources);

      } catch (error) {
        console.error('Error fetching resources:', error);
        setError('Failed to load resources. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllResources();
  }, []);

  // Filter resources based on active tab, search query and sort order
  useEffect(() => {
    let filtered = [...resources];
    
    // Filter by type
    if (activeTab !== 'all') {
      filtered = filtered.filter(resource => resource.category === activeTab);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource => {
        const searchableContent = [
          resource.title[language] || '',
          resource.description[language] || '',
          resource.summary?.[language] || '',
          resource.author?.name || '',
          resource.industry || '',
          resource.client?.name || '',
          resource.newsCategory || '',
          resource.updateCategory || '',
          ...resource.tags
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(query);
      });
    }
    
    // Sort resources
    filtered.sort((a, b) => {
      // Always prioritize featured content
      if (a.featured && !b.featured) return -1;
      if (b.featured && !a.featured) return 1;
      
      // Then by urgency for news/updates
      if ((a.urgent && !b.urgent) || (a.priority === 'critical' && b.priority !== 'critical')) return -1;
      if ((b.urgent && !a.urgent) || (b.priority === 'critical' && a.priority !== 'critical')) return 1;
      
      // Finally by date
      const dateA = new Date(a.publishedAt || a.date).getTime();
      const dateB = new Date(b.publishedAt || b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredResources(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [activeTab, searchQuery, sortOrder, resources, language]);

  // Get current page of resources
  const getCurrentPageResources = () => {
    const indexOfLastResource = currentPage * resourcesPerPage;
    const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
    return filteredResources.slice(indexOfFirstResource, indexOfLastResource);
  };

  // Get featured resources (featured flag or newest 4 resources)
  const getFeaturedResources = () => {
    if (!Array.isArray(resources) || resources.length === 0) {
      return [];
    }
    
    const featured = resources.filter(r => r.featured);
    if (featured.length >= 4) {
      return featured.slice(0, 4);
    }
    
    // If not enough featured, supplement with newest
    return [...featured, ...resources.filter(r => !r.featured).slice(0, 4 - featured.length)];
  };

  // Get popular tags from all resources
  const getPopularTags = () => {
    if (!Array.isArray(resources) || resources.length === 0) {
      return [];
    }
    
    const tagCount: Record<string, number> = {};
    resources.forEach(resource => {
      if (resource.tags && Array.isArray(resource.tags)) {
        resource.tags.forEach(tag => {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
      }
    });
    
    return Object.entries(tagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(entry => entry[0]);
  };

  // Get resource counts by type
  const getResourceCounts = () => {
    const counts = {
      all: resources.length,
      blog: resources.filter(r => r.category === 'blog').length,
      'case-study': resources.filter(r => r.category === 'case-study').length,
      news: resources.filter(r => r.category === 'news').length,
      update: resources.filter(r => r.category === 'update').length,
    };
    return counts;
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

  // Get resource type display info
  const getResourceTypeInfo = (resource: Resource) => {
    const colors = typeColors[resource.category];
    return {
      icon: resourceTypeIcons[resource.category],
      colors,
      label: t(`resources.types.${resource.category}`) || resource.category
    };
  };

  // Format date based on current language
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(
        language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE',
        { year: 'numeric', month: 'long', day: 'numeric' }
      );    } catch {
      return dateString;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          {/* Hero skeleton */}
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12 mx-auto"></div>
          {/* Grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-red-500 mb-4">{error}</div>
          <Button onClick={() => window.location.reload()}>
            {t('common.tryAgain')}
          </Button>
        </div>
      </div>
    );
  }

  const resourceCounts = getResourceCounts();

  return (
    <>
      <Head>
        <title>{t('resources.meta.title') || 'Knowledge Hub'} | Flair Plastic</title>
        <meta name="description" content={t('resources.meta.description') || 'Explore our latest articles, case studies, news and updates about plastic manufacturing and sustainability.'} />
        <meta name="keywords" content={t('resources.meta.keywords') || 'resources, blog, case studies, news, updates, plastic manufacturing'} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Decorative Elements */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-[#fa9b6b]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#3b82f6]/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Animated Dots Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#fa9b6b" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Content Column */}
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="flex-1 max-w-2xl"
            >
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100">
                <span className="flex items-center text-gray-600">
                  <Bookmark className="h-4 w-4 mr-2 text-[#fa9b6b]" />
                  {t('resources.resourcesHub') || 'Knowledge Hub'}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">
                  {resources.length} {t('resources.itemsAvailable') || 'resources'}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                {t('resources.hero.title') || 'Knowledge Hub'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('resources.hero.subtitle') || 'Discover insights, innovations, and expertise in plastic manufacturing and sustainability.'}
              </p>
              
              {/* Enhanced Search */}
              <div className="relative mb-10">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={t('resources.search.placeholder') || 'Search resources...'}
                    className="pl-12 py-6 text-lg rounded-xl shadow-sm border-gray-200 hover:border-gray-300 transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>
                
                {/* Floating Suggestion Pills */}
                <div className="absolute -bottom-5 left-8 flex flex-wrap gap-2">
                  {['sustainability', 'innovation', 'manufacturing'].map((suggestion) => (
                    <div 
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      className="bg-white py-1 px-3 text-xs rounded-full shadow-sm border border-gray-100 text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-12">
                <span className="font-medium text-gray-700">{t('resources.popular') || 'Popular topics:'}  </span>
                {getPopularTags().slice(0, 5).map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100 border-gray-200 text-gray-600"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
            
            {/* Visual Column: Resource Type Cards */}
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  }
                }
              }}
              className="hidden lg:grid grid-cols-2 gap-4 flex-1"
            >
              {[
                { 
                  type: 'blog',
                  icon: <Coffee className="h-6 w-6" />, 
                  title: t('resources.types.blog') || 'Blog', 
                  description: t('resources.typeDesc.blog') || 'Industry insights and expertise',
                  path: '/resources/blog'
                },
                { 
                  type: 'case-study',
                  icon: <LineChart className="h-6 w-6" />, 
                  title: t('resources.types.case-study') || 'Case Studies', 
                  description: t('resources.typeDesc.case-study') || 'Client success stories',
                  path: '/resources/case-studies'
                },
                { 
                  type: 'news',
                  icon: <Newspaper className="h-6 w-6" />, 
                  title: t('resources.types.news') || 'News', 
                  description: t('resources.typeDesc.news') || 'Company and industry updates',
                  path: '/resources/news'
                },
                { 
                  type: 'update',
                  icon: <Lightbulb className="h-6 w-6" />, 
                  title: t('resources.types.update') || 'Updates', 
                  description: t('resources.typeDesc.update') || 'Product and service information',
                  path: '/resources/updates'
                }
              ].map((item, index) => {
                const colors = typeColors[item.type as keyof typeof typeColors];
                const count = resourceCounts[item.type as keyof typeof resourceCounts];
                
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`group relative overflow-hidden rounded-xl border ${colors.border} ${colors.bg} p-6 shadow-sm hover:shadow-md transition-all cursor-pointer`}
                    onClick={() => router.push(item.path)}
                  >
                    <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm ${colors.text}`}>
                          {item.icon}
                        </div>
                        <Badge variant="outline" className={`${colors.text} ${colors.bg} border-0`}>
                          {count}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        {item.description}
                      </p>
                      
                      <div className="mt-auto">
                        <span className={`inline-flex items-center text-sm font-medium ${colors.text} group-hover:underline`}>
                          {t('resources.browseAll') || 'Browse all'}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hidden md:grid grid-cols-4 gap-4 mt-16 px-6 py-5 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            {[
              { 
                icon: <Bookmark className="h-5 w-5 text-[#fa9b6b]" />,
                label: t('resources.stats.resources') || 'Total Resources', 
                value: resources.length 
              },
              { 
                icon: <Tag className="h-5 w-5 text-[#3b82f6]" />,
                label: t('resources.stats.topics') || 'Topics Covered', 
                value: getPopularTags().length 
              },
              { 
                icon: <Users className="h-5 w-5 text-[#16a34a]" />,
                label: t('resources.stats.authors') || 'Expert Contributors', 
                value: [...new Set(resources.map(r => r.author?.name || 'Unknown'))].length 
              },
              { 
                icon: <Globe className="h-5 w-5 text-[#dc2626]" />,
                label: t('resources.stats.updated') || 'Last Updated', 
                value: resources.length > 0 
                  ? formatDate(Math.max(...resources.map(r => new Date(r.publishedAt || r.date).getTime())).toString())
                  : 'N/A'
              }
            ].map((stat, index) => (
              <div key={index} className={`flex flex-col items-center justify-center py-2 ${index !== 3 ? 'border-r border-gray-200' : ''}`}>
                <div className="flex items-center mb-2">
                  {stat.icon}
                  <div className="text-2xl font-bold text-gray-900 ml-2">{stat.value}</div>
                </div>
                <div className="text-sm text-gray-500 text-center">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* Main Column */}
            <div className="w-full md:w-3/4">              {/* Featured Resources */}
              <motion.div
                ref={featuredRef}
                initial="hidden"
                animate={featuredInView ? "visible" : "hidden"}
                variants={fadeIn}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
                  <TrendingUp className="h-5 w-5 mr-2 text-[#fa9b6b]" />
                  {t('resources.featured') || 'Featured Resources'}
                </h2>                {/* Featured Resources Carousel */}
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                    dragFree: false,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                      stopOnInteraction: true,
                      stopOnMouseEnter: true,
                    })
                  ]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">                    {getFeaturedResources().map((resource) => {
                      const typeInfo = getResourceTypeInfo(resource);
                    
                    return (
                      <CarouselItem key={resource.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                        <Link 
                          href={resource.customUrl || `/resources/${resource.category}/${resource.slug}`}
                          className="block h-full"
                        >                          <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[450px] flex flex-col"
                          >
                          {/* Full Background Image */}
                          <div className="absolute inset-0">
                            <Image
                              src={resource.thumbnailImage || resource.image}
                              alt={resource.title[language]}
                              fill
                              className="object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-out"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                              priority={resource.featured}
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                            />
                          </div>

                          {/* Multi-layered gradient overlay for better readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/25 group-hover:to-black/5 transition-all duration-500"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 group-hover:via-black/15 group-hover:to-black/30 transition-all duration-500"></div>

                          {/* Top badges section */}
                          <div className="relative z-20 flex justify-between items-start p-4 lg:p-6">
                            <Badge className="bg-white/95 backdrop-blur-md text-gray-800 hover:bg-white hover:scale-105 shadow-lg hover:shadow-xl border-0 font-semibold text-xs lg:text-sm transition-all duration-300">
                              <span className="mr-1.5">{typeInfo.icon}</span>
                              {typeInfo.label}
                            </Badge>
                            
                            {resource.featured && (
                              <Badge className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-yellow-900 shadow-xl hover:shadow-2xl border-0 font-bold text-xs lg:text-sm hover:scale-105 transition-all duration-300 animate-pulse">
                                <Award className="h-3 w-3 mr-1.5 animate-pulse" />
                                Featured
                              </Badge>
                            )}
                          </div>                          {/* Content overlay - consistent positioning for carousel */}
                          <div className="relative z-20 flex flex-col flex-1 justify-between p-4 lg:p-6">
                            
                            {/* Meta information at top */}
                            <div className="mb-4">
                              <div className="flex items-center text-white/90 text-xs lg:text-sm mb-3">
                                <Calendar className="h-4 w-4 mr-2 text-blue-300" />
                                <span className="font-medium">{formatDate(resource.publishedAt || resource.date)}</span>
                                {resource.readTime && (
                                  <>
                                    <Clock className="h-4 w-4 ml-4 mr-2 text-green-300" />
                                    <span>{resource.readTime} min read</span>
                                  </>
                                )}
                              </div>
                                {/* Author info - text only */}
                              {resource.author && resource.author.name && (
                                <div className="mb-3 p-3 bg-white/10 backdrop-blur-md rounded-lg">
                                  <p className="font-medium text-white text-sm">{resource.author.name}</p>
                                  {resource.author.role && (
                                    <p className="text-xs text-white/70">
                                      {resource.author.role[language] || 'Expert Contributor'}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Main content section */}
                            <div className="text-white">                              {/* Title with enhanced text shadow */}
                              <h3 className="font-bold text-white mb-2 lg:mb-3 leading-tight drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl text-shadow-hero text-lg lg:text-xl line-clamp-2">
                                {resource.title[language]}
                              </h3>

                              {/* Description */}
                              <p className="text-white/90 mb-3 lg:mb-4 leading-relaxed drop-shadow-md text-shadow-soft text-sm line-clamp-3">
                                {resource.summary?.[language] || resource.description[language]}
                              </p>

                              {/* Bottom meta and tags */}
                              <div className="space-y-2 lg:space-y-3">
                                {/* Tags */}
                                {resource.tags && resource.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5">
                                    {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                    {resource.tags.length > 3 && (
                                      <span className="px-2 py-1 bg-white/15 backdrop-blur-sm text-white/80 rounded-full text-xs">
                                        +{resource.tags.length - 3}
                                      </span>
                                    )}
                                  </div>
                                )}

                                {/* Read more indicator */}
                                <div className="flex items-center justify-between">
                                  <span className="text-white/90 font-semibold text-xs lg:text-sm">
                                    {t('resources.readMore') || 'Read More'}
                                  </span>
                                  <div className="flex items-center text-white/90">
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced hover effects */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                          
                          {/* Shimmer effect on hover */}
                          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
                          </div>                        </motion.div>
                      </Link>
                    </CarouselItem>
                    );
                  })}
                </CarouselContent>
                
                {/* Navigation Controls */}
                <CarouselPrevious className="left-4 bg-white/90 backdrop-blur-md hover:bg-white border-0 shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900" />
                <CarouselNext className="right-4 bg-white/90 backdrop-blur-md hover:bg-white border-0 shadow-lg hover:shadow-xl text-gray-700 hover:text-gray-900" />
              </Carousel>
              </motion.div>
              
              {/* Filter Tabs */}
              <motion.div
                ref={mainContentRef}
                initial="hidden"
                animate={mainContentInView ? "visible" : "hidden"}
                variants={fadeIn}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <Tabs 
                    defaultValue="all"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full max-w-md"
                  >
                    <TabsList className="grid grid-cols-5 w-full">
                      <TabsTrigger value="all" className="text-xs">
                        {t('resources.filters.all') || 'All'}
                      </TabsTrigger>
                      <TabsTrigger value="blog" className="text-xs">
                        {t('resources.filters.blog') || 'Blog'}
                      </TabsTrigger>
                      <TabsTrigger value="case-study" className="text-xs">
                        {t('resources.filters.caseStudy') || 'Cases'}
                      </TabsTrigger>
                      <TabsTrigger value="news" className="text-xs">
                        {t('resources.filters.news') || 'News'}
                      </TabsTrigger>
                      <TabsTrigger value="update" className="text-xs">
                        {t('resources.filters.update') || 'Updates'}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ArrowUpDown className="h-4 w-4" />
                        {sortOrder === 'newest' 
                          ? t('resources.sort.newest') || 'Newest' 
                          : t('resources.sort.oldest') || 'Oldest'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSortOrder('newest')}>
                        {t('resources.sort.newest') || 'Newest first'}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortOrder('oldest')}>
                        {t('resources.sort.oldest') || 'Oldest first'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {/* Resource Count */}
                <div className="mb-6 text-sm text-gray-500">
                  {t('resources.showing')?.replace('${count}', filteredResources.length.toString()) || 
                    `Showing ${filteredResources.length} resources`}
                  {activeTab !== 'all' && (
                    <span className="ml-2">
                      • {t(`resources.types.${activeTab}`)} only
                    </span>
                  )}
                </div>
                  {/* Resource Grid */}
                {filteredResources.length > 0 ? (
                  <motion.div 
                    variants={staggerContainer}
                    className="mb-10"
                  >
                    <AnimatePresence>                      <MosaicGrid>
                        {getCurrentPageResources().map((resource) => {
                          const typeInfo = getResourceTypeInfo(resource);
                          
                          return (
                            <MosaicPostcard
                              key={resource.id}
                              slug={resource.slug}
                              category={resource.category}
                              title={resource.title}
                              description={resource.description}
                              summary={resource.summary}
                              image={resource.image}
                              thumbnailImage={resource.thumbnailImage}
                              date={resource.date}
                              publishedAt={resource.publishedAt}
                              author={resource.author}
                              readTime={resource.readTime}
                              tags={resource.tags}
                              featured={resource.featured}
                              customUrl={resource.customUrl}
                              typeInfo={{
                                icon: typeInfo.icon,
                                label: typeInfo.label
                              }}
                              formatDate={formatDate}
                              language={language}
                            />
                          );
                        })}
                      </MosaicGrid>
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <div className="text-center py-20">
                    <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {t('resources.noResults.title') || 'No matching resources found'}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {t('resources.noResults.description') || 'Try adjusting your search or filter criteria'}
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                        setSortOrder('newest');
                      }}
                    >
                      {t('resources.noResults.resetButton') || 'Reset all filters'}
                    </Button>
                  </div>
                )}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="text-gray-500"
                      >
                        {t('resources.pagination.previous') || 'Previous'}
                      </Button>
                      
                      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        let page;
                        if (totalPages <= 5) {
                          page = i + 1;
                        } else if (currentPage <= 3) {
                          page = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          page = totalPages - 4 + i;
                        } else {
                          page = currentPage - 2 + i;
                        }
                        
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={currentPage === page ? "bg-[#fa9b6b] hover:bg-[#e86e40]" : ""}
                          >
                            {page}
                          </Button>
                        );
                      })}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="text-gray-500"
                      >
                        {t('resources.pagination.next') || 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              {/* Categories */}
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <ListFilter className="h-4 w-4 mr-2 text-[#fa9b6b]" />
                  {t('resources.sidebar.categories') || 'Content Categories'}
                </h3>
                <div className="space-y-2">
                  {[
                    { key: 'all', icon: null },
                    { key: 'blog', icon: resourceTypeIcons.blog },
                    { key: 'case-study', icon: resourceTypeIcons['case-study'] },
                    { key: 'news', icon: resourceTypeIcons.news },
                    { key: 'update', icon: resourceTypeIcons.update },
                  ].map((type) => (
                    <button
                      key={type.key}
                      onClick={() => setActiveTab(type.key)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md transition-colors ${
                        activeTab === type.key 
                          ? 'bg-[#fef2ee] text-[#fa9b6b] font-medium' 
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className="flex items-center">
                        {type.icon && <span className="mr-2">{type.icon}</span>}
                        <span>
                          {t(`resources.filters.${type.key}`) || 
                           type.key.charAt(0).toUpperCase() + type.key.slice(1).replace('-', ' ')}
                        </span>
                      </div>
                      <Badge variant="outline" className="ml-2 bg-white">
                        {resourceCounts[type.key as keyof typeof resourceCounts]}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-[#fa9b6b]" />
                  {t('resources.sidebar.tags') || 'Popular Tags'}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {getPopularTags().map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className={`
                        cursor-pointer hover:bg-gray-50 border-gray-200
                        ${searchQuery === tag ? 'bg-[#fef2ee] text-[#fa9b6b] border-[#fa9b6b]/20' : 'text-gray-600'}
                      `}
                      onClick={() => setSearchQuery(tag === searchQuery ? '' : tag)}
                    >
                      {tag}
                      {searchQuery === tag && (
                        <span className="ml-1 cursor-pointer" onClick={(e) => {
                          e.stopPropagation();
                          setSearchQuery('');
                        }}>
                          ×
                        </span>
                      )}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Subscribe Card */}
              <motion.div
                ref={subscribeRef}
                initial="hidden"
                animate={subscribeInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="bg-[#fef2ee] rounded-xl p-6 border border-[#fa9b6b]/10"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {t('resources.sidebar.subscribe.title') || 'Stay Updated'}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('resources.sidebar.subscribe.text') || 'Subscribe to receive our latest resources and industry insights.'}
                </p>
                
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder={t('resources.sidebar.subscribe.emailPlaceholder') || 'Your email address'}
                    className="bg-white border-gray-200"
                  />
                  <Button className="w-full bg-[#fa9b6b] hover:bg-[#e86e40] text-white">
                    {t('resources.sidebar.subscribe.button') || 'Subscribe'}
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">
                  {t('resources.sidebar.subscribe.privacy') || 'By subscribing, you agree to our privacy policy.'}
                </p>
              </motion.div>
              
              {/* Share */}
              <div className="mt-10">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <Share2 className="h-4 w-4 mr-2 text-[#fa9b6b]" />
                  {t('resources.sidebar.share') || 'Share our Resources'}
                </h3>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-.219c0-1.495.869-2.61 1.955-2.61.219 0 .359.105.359.359 0 .219-.105.578-.219.937-.105.359-.219.718-.219 1.077 0 .578.359 1.077.937 1.077.578 0 1.077-.359 1.436-.937.359-.578.578-1.436.578-2.394 0-1.077-.578-1.955-1.655-1.955-.937 0-1.655.578-1.655 1.436 0 .359.105.578.219.797-.105.105-.219.219-.359.219-.219 0-.359-.105-.359-.359 0-.578.359-1.436 1.436-1.436 1.436 0 2.513 1.077 2.513 2.61 0 1.436-.578 2.61-2.174 2.61-.937 0-1.655-.578-1.655-1.436 0-.359.105-.718.359-1.077.219-.359.219-.578.105-.937-.105-.359-.359-.359-.578-.219-.359.219-.578.578-.578 1.077 0 1.077.718 1.955 1.955 1.955 1.436 0 2.61-1.077 2.61-2.61 0-1.655-1.077-2.91-2.91-2.91z" clipRule="evenodd" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
ResourcesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default ResourcesPage;