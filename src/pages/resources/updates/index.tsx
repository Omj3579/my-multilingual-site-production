import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  ArrowUpDown,
  Settings,
  AlertTriangle,
  Filter,
  X
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import MosaicGrid from '@/components/ui/mosaic-grid';
import MosaicPostcard from '@/components/ui/mosaic-postcard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced interface for API response
interface UpdateItem {
  id: string;
  slug: string;
  category: 'update';
  updateCategory?: string;
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  summary?: { en: string; hu: string; de: string };
  content: { en: string; hu: string; de: string };
  image: string;
  thumbnailImage?: string;
  date: string;
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
  version?: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  affectedProducts?: string[];
  changeType?: 'new-feature' | 'improvement' | 'bug-fix' | 'security' | 'breaking-change';
}

const UpdatesPage = () => {
  const { language, translations } = useLanguage();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedChangeType, setSelectedChangeType] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [showOnlyCritical, setShowOnlyCritical] = useState(false);
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [availablePriorities, setAvailablePriorities] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [availableChangeTypes, setAvailableChangeTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const updatesPerPage = 9;
  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE'
    );
  };

  // Fetch updates from the enhanced API
  useEffect(() => {
    async function fetchUpdates() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Build query parameters
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.append('search', searchQuery);
        if (selectedPriority) queryParams.append('priority', selectedPriority);
        if (selectedCategory) queryParams.append('updateCategory', selectedCategory);
        if (selectedChangeType) queryParams.append('changeType', selectedChangeType);
        if (showOnlyFeatured) queryParams.append('featured', 'true');
        
        const url = `/api/combined-updates${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error('Failed to fetch updates');
        const data = await res.json();
        
        // Handle both array response and object response with updates property
        const updatesArray = Array.isArray(data) ? data : data.updates || [];
        setUpdates(updatesArray);
        
        // Fetch available filters
        const filtersRes = await fetch('/api/combined-updates?debug=true');
        if (filtersRes.ok) {
          const filtersData = await filtersRes.json();
          setAvailablePriorities(filtersData.debug.availablePriorities || []);
          setAvailableCategories(filtersData.debug.availableCategories || []);
          setAvailableChangeTypes(filtersData.debug.availableChangeTypes || []);
        }
        
      } catch (error) {
        console.error('Error loading updates:', error);
        setError('Failed to load updates. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    // Debounce search
    const timeoutId = setTimeout(fetchUpdates, searchQuery ? 300 : 0);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedPriority, selectedCategory, selectedChangeType, showOnlyFeatured]);

  // Filter for critical updates
  const filteredUpdates = showOnlyCritical 
    ? updates.filter(update => update.priority === 'critical')
    : updates;

  // Sort updates by date or priority
  const sortedUpdates = [...filteredUpdates].sort((a, b) => {
    // Always prioritize critical updates first
    if (a.priority === 'critical' && b.priority !== 'critical') return -1;
    if (b.priority === 'critical' && a.priority !== 'critical') return 1;
    
    // Then sort by date
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Paginate updates
  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = sortedUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate);
  const totalPages = Math.ceil(sortedUpdates.length / updatesPerPage);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedPriority('');
    setSelectedCategory('');
    setSelectedChangeType('');
    setShowOnlyFeatured(false);
    setShowOnlyCritical(false);
    setCurrentPage(1);
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || selectedPriority || selectedCategory || selectedChangeType || showOnlyFeatured || showOnlyCritical;

  // Popular update tags
  const popularTags = [
    'product-update',
    'feature-release',
    'security',
    'manufacturing',
    'ai',    'sustainability',
    'quality-control',
    'enhancement'
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse flex flex-col w-full max-w-3xl">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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

  return (
    <>
      <Head>
        <title>{t('updates.meta.title') || 'Latest Updates'} | Flair Plastic</title>
        <meta name="description" content={t('updates.meta.description') || 'Stay updated with the latest product updates, feature releases, and improvements from Flair Plastic.'} />
        <meta name="keywords" content={t('updates.meta.keywords') || 'updates, product updates, feature releases, improvements, plastic manufacturing'} />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#eff6ff] to-[#dbeafe]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#3b82f6]/20 text-sm text-[#3b82f6] font-medium">
                <Settings className="h-4 w-4 mr-2" />
                {t('resources.types.update') || 'Updates'}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                {t('updates.hero.title') || 'Latest Updates'}
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('updates.hero.subtitle') || 'Stay informed about our latest product updates, feature releases, and system improvements.'}
              </p>
              
              {/* Enhanced Search */}
              <div className="relative mb-6 max-w-xl">
                <Input
                  type="text"
                  placeholder={t('updates.search.placeholder') || 'Search updates...'}
                  className="pr-10 py-6 pl-12 text-lg rounded-xl shadow-sm border-gray-200 bg-white text-gray-800 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{t('updates.popular') || 'Popular topics'}:</span>
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/resources/updates/tags/${tag}`}
                    className="text-sm px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-full text-gray-700 hover:bg-white transition-all"
                  >
                    {tag.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Featured Update */}
            <div className="hidden lg:block flex-1 relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-white/20 backdrop-blur-sm rounded-2xl z-10 border border-gray-100"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/resources/updates-hero.jpg"
                    alt="Updates illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#3b82f6]/10 z-0"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#3b82f6]/10 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters & Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Featured Toggle */}
              <Button
                variant={showOnlyFeatured ? "default" : "outline"}
                size="sm"
                onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
                className={showOnlyFeatured ? "bg-[#3b82f6] hover:bg-[#2563eb]" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {t('updates.featured') || 'Featured'}
              </Button>

              {/* Critical Toggle */}
              <Button
                variant={showOnlyCritical ? "default" : "outline"}
                size="sm"
                onClick={() => setShowOnlyCritical(!showOnlyCritical)}
                className={showOnlyCritical ? "bg-red-600 hover:bg-red-700" : "border-red-200 text-red-600 hover:bg-red-50"}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                {t('updates.critical') || 'Critical Only'}
              </Button>              {/* Priority Filter */}
              {availablePriorities.length > 0 && (
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                  aria-label="Filter by priority"
                >
                  <option value="">{t('updates.allPriorities') || 'All Priorities'}</option>
                  {availablePriorities.map((priority) => (
                    <option key={priority} value={priority}>
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </option>
                  ))}
                </select>
              )}              {/* Category Filter */}
              {availableCategories.length > 0 && (
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                  aria-label="Filter by category"
                >
                  <option value="">{t('updates.allCategories') || 'All Categories'}</option>
                  {availableCategories.map((category) => (
                    <option key={category} value={category}>
                      {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              )}              {/* Change Type Filter */}
              {availableChangeTypes.length > 0 && (
                <select
                  value={selectedChangeType}
                  onChange={(e) => setSelectedChangeType(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                  aria-label="Filter by change type"
                >
                  <option value="">{t('updates.allChangeTypes') || 'All Types'}</option>
                  {availableChangeTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              )}

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4 mr-1" />
                  {t('updates.clearFilters') || 'Clear Filters'}
                </Button>
              )}
            </div>

            {/* Sort & Results Count */}
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                {(t('updates.showing') || 'Showing ${count} updates').replace('${count}', sortedUpdates.length.toString())}
                {filteredUpdates.filter(u => u.priority === 'critical').length > 0 && (
                  <span className="ml-2 text-red-600 font-medium">
                    ({filteredUpdates.filter(u => u.priority === 'critical').length} critical)
                  </span>
                )}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center bg-white text-[#3b82f6] hover:bg-[#eff6ff] border-[#3b82f6]/20"
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              >
                <span className="mr-1">{t(`updates.sort.${sortOrder}`) || (sortOrder === 'newest' ? 'Newest first' : 'Oldest first')}</span>
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>      {/* Updates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentUpdates.length > 0 ? (            <>
              {/* Updates Mosaic Grid */}
              <MosaicGrid>
                {currentUpdates.map((update) => {
                  return (
                    <MosaicPostcard
                      key={update.id}
                      slug={update.slug}
                      category="update"
                      title={update.title}
                      description={update.description}
                      summary={update.summary}
                      image={update.image}
                      thumbnailImage={update.thumbnailImage}
                      date={update.date}
                      publishedAt={update.date}
                      author={update.author}
                      readTime={update.readTime}
                      tags={update.tags}
                      featured={update.featured}
                      customUrl={update.customUrl}
                      typeInfo={{
                        icon: <Settings className="h-3 w-3" />,
                        label: t('resources.types.update')
                      }}
                      formatDate={formatDate}
                      language={language}
                    />
                  );
                })}
              </MosaicGrid>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <span className="text-sm text-gray-700">
                        {currentPage} / {totalPages}
                      </span>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">{t('updates.noResults.title') || 'No updates found'}</h3>
              <p className="text-gray-500 mb-6">{t('updates.noResults.description') || 'Try adjusting your search or check back later for new updates.'}</p>
              <Button onClick={clearFilters}>{t('updates.noResults.resetButton') || 'Clear filters'}</Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
UpdatesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default UpdatesPage;