import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Search, 
  ArrowUpDown,
  Newspaper,
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
interface NewsArticle {
  id: string;
  slug: string;
  category: 'news';
  newsCategory?: string;
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  content: { en: string; hu: string; de: string };
  image: string;
  thumbnailImage?: string;
  date: string;
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
  source?: string;
  location?: string;
}

const NewsPage = () => {
  const { language, translations } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsArticle[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const postsPerPage = 9;
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

  // Helper function to get type info for news
  const getNewsTypeInfo = () => ({
    icon: <Newspaper className="h-4 w-4" />,
    label: t('resources.types.news') || 'News'
  });

  // Fetch news from the enhanced API
  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Build query parameters
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.append('search', searchQuery);
        if (selectedTag) queryParams.append('tag', selectedTag);
        if (selectedCategory) queryParams.append('newsCategory', selectedCategory);
        if (showOnlyFeatured) queryParams.append('featured', 'true');
        
        const url = `/api/combined-news${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        
        // Handle both array response and object response with news property
        const newsArray = Array.isArray(data) ? data : data.news || [];
        setNewsItems(newsArray);
          // Fetch available filters
        const filtersRes = await fetch('/api/combined-news?debug=true');
        if (filtersRes.ok) {
          const filtersData = await filtersRes.json();
          setAvailableCategories(filtersData.debug.availableCategories || []);
        }
        
      } catch (error) {
        console.error('Error loading news:', error);
        setError('Failed to load news articles. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    // Debounce search
    const timeoutId = setTimeout(fetchNews, searchQuery ? 300 : 0);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedTag, selectedCategory, showOnlyFeatured]);

  // Sort news by date
  const sortedNews = [...newsItems].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Paginate news
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedNews.length / postsPerPage);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('');
    setSelectedCategory('');
    setShowOnlyFeatured(false);
    setCurrentPage(1);
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || selectedTag || selectedCategory || showOnlyFeatured;

  // Popular news tags
  const popularTags = [
    'company-news',
    'industry-news',
    'awards',
    'sustainability',
    'manufacturing',
    'expansion'
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
        <title>{t('news.meta.title') || 'Latest News'} | Flair Plastic</title>
        <meta name="description" content={t('news.meta.description') || 'Stay updated with the latest news from Flair Plastic and the plastic manufacturing industry.'} />
        <meta name="keywords" content={t('news.meta.keywords') || 'news, plastic manufacturing, industry updates, company news'} />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#16a34a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#16a34a] to-[#4ade80] opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#16a34a]/20 text-sm text-[#16a34a] font-medium">
                <Newspaper className="h-4 w-4 mr-2" />
                {t('resources.types.news') || 'News'}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                {t('news.hero.title') || 'Latest News'}
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('news.hero.subtitle') || 'Stay informed with the latest updates from Flair Plastic and the plastic manufacturing industry.'}
              </p>
              
              {/* Enhanced Search */}
              <div className="relative mb-6 max-w-xl">
                <Input
                  type="text"
                  placeholder={t('news.search.placeholder') || 'Search news articles...'}
                  className="pr-10 py-6 pl-12 text-lg rounded-xl shadow-sm border-gray-200 bg-white text-gray-800 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{t('news.popular') || 'Popular topics'}:</span>
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                    className={`text-sm px-4 py-2 rounded-full transition-all ${
                      selectedTag === tag
                        ? 'bg-[#16a34a] text-white'
                        : 'bg-white/70 backdrop-blur-sm border border-gray-100 text-gray-700 hover:bg-white'
                    }`}
                  >
                    {tag.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Featured News */}
            <div className="hidden lg:block flex-1 relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-white/20 backdrop-blur-sm rounded-2xl z-10 border border-gray-100"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/resources/news-hero.jpg"
                    alt="News illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#16a34a]/10 z-0"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#16a34a]/10 z-0"></div>
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
                className={showOnlyFeatured ? "bg-[#16a34a] hover:bg-[#15803d]" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {t('news.featured') || 'Featured'}
              </Button>

              {/* Category Filter */}
              {availableCategories.length > 0 && (
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                >
                  <option value="">{t('news.allCategories') || 'All Categories'}</option>
                  {availableCategories.map((category) => (
                    <option key={category} value={category}>
                      {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
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
                  {t('news.clearFilters') || 'Clear Filters'}
                </Button>
              )}
            </div>

            {/* Sort & Results Count */}
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                {(t('news.showing') || 'Showing ${count} articles').replace('${count}', sortedNews.length.toString())}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center bg-white text-[#16a34a] hover:bg-[#f0fdf4] border-[#16a34a]/20"
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              >
                <span className="mr-1">{t(`news.sort.${sortOrder}`) || (sortOrder === 'newest' ? 'Newest first' : 'Oldest first')}</span>
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentNews.length > 0 ? (            <>
              {/* News Grid */}              <MosaicGrid>
                {currentNews.map((news) => (                  <MosaicPostcard
                    key={news.id}
                    slug={news.slug}
                    category="news"
                    title={news.title}
                    description={news.description}
                    image={news.image}
                    thumbnailImage={news.thumbnailImage}
                    date={news.date}
                    author={news.author}
                    readTime={news.readTime}
                    tags={news.tags}
                    featured={news.featured}
                    customUrl={news.customUrl}
                    typeInfo={getNewsTypeInfo()}
                    formatDate={formatDate}
                    language={language}
                  />
                ))}
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
              <h3 className="text-lg font-medium mb-2">{t('news.noResults.title') || 'No news found'}</h3>
              <p className="text-gray-500 mb-6">{t('news.noResults.description') || 'Try adjusting your search or check back later for new updates.'}</p>
              <Button onClick={clearFilters}>{t('news.noResults.resetButton') || 'Clear search'}</Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
NewsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default NewsPage;