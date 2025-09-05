import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Search, 
  ArrowUpDown,
  Coffee,
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
interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  excerpt?: { en: string; hu: string; de: string };
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
  category: string;
  featured: boolean;
  customUrl?: string;
}

const BlogPage = () => {
  const { language, translations } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const postsPerPage = 9;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [availableAuthors, setAvailableAuthors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  // Helper function to get type info for blog
  const getBlogTypeInfo = () => ({
    icon: <Coffee className="h-4 w-4" />,
    label: t('resources.types.blog') || 'Blog'
  });

  // Fetch posts from the enhanced API
  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        
        // Build query parameters
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.append('search', searchQuery);
        if (selectedTag) queryParams.append('tag', selectedTag);
        if (selectedAuthor) queryParams.append('author', selectedAuthor);
        if (showOnlyFeatured) queryParams.append('featured', 'true');
        
        const url = `/api/combined-blog-posts${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        
        setPosts(data);
        
        // Fetch available filters
        const filtersRes = await fetch('/api/combined-blog-posts?debug=true');
        if (filtersRes.ok) {
          const filtersData = await filtersRes.json();
          setAvailableTags(filtersData.debug.availableTags || []);
          setAvailableAuthors(filtersData.debug.availableAuthors || []);
        }
        
      } catch (error) {
        console.error('Error loading posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    // Debounce search
    const timeoutId = setTimeout(fetchPosts, searchQuery ? 300 : 0);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedTag, selectedAuthor, showOnlyFeatured]);

  // Sort posts by date
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('');
    setSelectedAuthor('');
    setShowOnlyFeatured(false);
    setCurrentPage(1);
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || selectedTag || selectedAuthor || showOnlyFeatured;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse flex flex-col w-full max-w-3xl">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
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
        <title>{t('blog.meta.title')} | Flair Plastic</title>
        <meta name="description" content={t('blog.meta.description')} />
        <meta name="keywords" content={t('blog.meta.keywords')} />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#f9f5ff] to-[#f0eafe]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#fa9b6b" d="M47.5,-61.2C59.9,-52.8,67.4,-37.4,71.5,-21.1C75.5,-4.8,76.3,12.3,71,27.4C65.7,42.6,54.4,55.8,40.4,63.6C26.4,71.3,9.9,73.6,-5.4,70.8C-20.7,68.1,-35,60.4,-45.1,49.4C-55.3,38.4,-61.3,24.1,-65.9,8.3C-70.5,-7.5,-73.6,-24.9,-67.2,-38.5C-60.8,-52.2,-44.7,-62,-29.2,-67.9C-13.6,-73.9,1.5,-76,16.2,-73C30.9,-70,45.2,-62,47.5,-61.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 translate-x-[-15%] translate-y-[30%]">
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#fa9b6b] to-[#ffd8cc] opacity-20 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#fa9b6b]/20 text-sm text-[#fa9b6b] font-medium">
                <Coffee className="h-4 w-4 mr-2" />
                {t('resources.types.blog')}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                {t('blog.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('blog.hero.subtitle')}
              </p>
              
              {/* Enhanced Search */}
              <div className="relative mb-6 max-w-xl">
                <Input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  className="pr-10 py-6 pl-12 text-lg rounded-xl shadow-sm border-gray-200 bg-white text-gray-800 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    title="Clear search"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              {/* Popular Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{t('blog.popular')}:</span>                {availableTags.slice(0, 5).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                    className={`text-sm px-4 py-2 rounded-full transition-all ${
                      selectedTag === tag
                        ? 'bg-[#fa9b6b] text-white'
                        : 'bg-white/70 backdrop-blur-sm border border-gray-100 text-gray-700 hover:bg-white'
                    }`}
                    title={`Filter by ${tag}`}
                    aria-label={`Filter by ${tag} tag`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="hidden lg:block flex-1 relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-white/20 backdrop-blur-sm rounded-2xl z-10 border border-gray-100"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/resources/Blog/blogh1.webp"
                    alt="Blog illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#fa9b6b]/10 z-0"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#fa9b6b]/10 z-0"></div>
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
                className={showOnlyFeatured ? "bg-[#fa9b6b] hover:bg-[#e8864d]" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {t('blog.featured')}
              </Button>

              {/* Author Filter */}              {availableAuthors.length > 0 && (
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                  title="Filter by author"
                  aria-label="Filter by author"
                >
                  <option value="">{t('blog.allAuthors')}</option>
                  {availableAuthors.map((author) => (
                    <option key={author} value={author}>{author}</option>
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
                  {t('blog.clearFilters')}
                </Button>
              )}
            </div>

            {/* Sort & Results Count */}
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                {t('blog.showing').replace('${count}', sortedPosts.length.toString())}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center bg-white text-[#fa9b6b] hover:bg-[#fff8f6] border-[#fad8cc]"
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              >
                <span className="mr-1">{t(`blog.sort.${sortOrder}`)}</span>
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentPosts.length > 0 ? (            <>
              {/* Blog Posts Grid */}              <MosaicGrid>
                {currentPosts.map((post) => (                  <MosaicPostcard
                    key={post.id}
                    slug={post.slug}
                    category="blog"
                    title={post.title}
                    description={post.description}
                    summary={post.excerpt}
                    image={post.image}
                    thumbnailImage={post.thumbnailImage}
                    date={post.date}
                    author={post.author}
                    readTime={post.readTime}
                    tags={post.tags}
                    featured={post.featured}
                    customUrl={post.customUrl}
                    typeInfo={getBlogTypeInfo()}
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
              <h3 className="text-lg font-medium mb-2">{t('blog.noResults.title')}</h3>
              <p className="text-gray-500 mb-6">{t('blog.noResults.description')}</p>
              <Button onClick={clearFilters}>{t('blog.noResults.resetButton')}</Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default BlogPage;