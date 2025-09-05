import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { 
  ChevronLeft, 
  Calendar, 
  Newspaper, 
  ArrowRight, 
  Search,
  Filter,
  X,
  User,
  Clock,
  Tag as TagIcon,
  TrendingUp
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationNext, 
  PaginationPrevious 
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
  source?: string;
  location?: string;
  urgent?: boolean;
}

const NewsTagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { language, translations } = useLanguage();

  // State management
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [allTagNews, setAllTagNews] = useState<NewsArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const postsPerPage = 9;

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Fetch news articles for this tag
  useEffect(() => {
    if (!tag || typeof tag !== 'string') return;

    async function fetchTagNews() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch news articles with this tag from your enhanced API
        const res = await fetch(`/api/combined-news?tag=${encodeURIComponent(tag)}`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch news articles');
        }

        const tagNews: NewsArticle[] = await res.json();
        setAllTagNews(tagNews);

        // If no news articles found, check if tag exists at all
        if (tagNews.length === 0) {
          // Fetch all news to check if tag exists
          const allRes = await fetch('/api/combined-news?debug=true');
          if (allRes.ok) {
            const allData = await allRes.json();
            const availableTags = allData.debug?.availableTags || [];
            
            // If tag doesn't exist in any news, show 404
            if (!availableTags.includes(tag)) {
              setError('Tag not found');
              return;
            }
          }
        }

        // Extract unique categories from the tag news
        const categories = [...new Set(tagNews.map(article => article.newsCategory).filter(Boolean))];
        setAvailableCategories(categories);

        // Get related tags from news articles that share this tag
        const relatedTagsSet = new Set<string>();
        tagNews.forEach(article => {
          article.tags.forEach(articleTag => {
            if (articleTag !== tag && articleTag.toLowerCase() !== tag.toLowerCase()) {
              relatedTagsSet.add(articleTag);
            }
          });
        });
        setRelatedTags(Array.from(relatedTagsSet).slice(0, 8)); // Limit to 8 related tags

      } catch (error) {
        console.error('Error loading tag news:', error);
        setError('Failed to load news articles for this tag');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTagNews();
  }, [tag]);

  // Filter news articles based on search and filters
  useEffect(() => {
    let filteredNews = [...allTagNews];

    // Apply search filter
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      filteredNews = filteredNews.filter(article => {
        const searchableContent = [
          article.title[language] || '',
          article.description[language] || '',
          article.summary?.[language] || '',
          article.author.name || '',
          article.source || '',
          ...article.tags
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Apply featured filter
    if (showOnlyFeatured) {
      filteredNews = filteredNews.filter(article => article.featured);
    }

    // Apply category filter
    if (selectedCategory) {
      filteredNews = filteredNews.filter(article => 
        article.newsCategory?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort by date (newest first)
    filteredNews.sort((a, b) => {
      return new Date(b.publishedAt || b.date).getTime() - new Date(a.publishedAt || a.date).getTime();
    });

    setNewsArticles(filteredNews);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allTagNews, searchQuery, showOnlyFeatured, selectedCategory, language]);

  // Paginate news articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentNews = newsArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(newsArticles.length / postsPerPage);

  // Clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setShowOnlyFeatured(false);
    setSelectedCategory('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || showOnlyFeatured || selectedCategory;

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          {/* Breadcrumb skeleton */}
          <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>
          {/* Header skeleton */}
          <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-12 mx-auto"></div>
          {/* News grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error or tag not found
  if (error || !tag) {
    return (
      <>
        <Head>
          <title>Tag Not Found | Flair Plastic</title>
        </Head>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              {error === 'Tag not found' ? t('news.tagNotFound') : t('news.error')}
            </h2>
            <p className="text-gray-600 mb-6">
              {error === 'Tag not found' 
                ? t('news.tagNotFoundDescription') 
                : t('news.errorDescription')
              }
            </p>
            <Button onClick={() => router.push('/resources/news')}>
              {t('news.backToAllNews')}
            </Button>
          </div>
        </div>
      </>
    );
  }

  const tagDisplayName = typeof tag === 'string' 
    ? tag.charAt(0).toUpperCase() + tag.slice(1).replace(/[-_]/g, ' ')
    : '';

  return (
    <>
      <Head>
        <title>{`${tagDisplayName} - ${t('news.meta.title')}`} | Flair Plastic</title>
        <meta 
          name="description" 
          content={`${t('news.tags.description').replace('${tag}', tagDisplayName)} (${allTagNews.length} articles)`} 
        />
        <meta name="keywords" content={`${tag}, news, articles, ${relatedTags.slice(0, 5).join(', ')}`} />
      </Head>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/resources" className="text-gray-600 hover:text-[#16a34a]">
              {t('resources.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/resources/news" className="text-gray-600 hover:text-[#16a34a]">
              {t('news.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">#{tagDisplayName}</span>
          </nav>
        </div>
      </div>

      {/* Tag Header */}
      <div className="py-16 bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back button */}
            <Link 
              href="/resources/news" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-[#16a34a] mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('news.backToAllNews')}
            </Link>

            {/* Tag title */}
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/20">
              <TagIcon className="h-4 w-4 mr-2 text-[#16a34a]" />
              <span className="text-[#16a34a] font-medium">#{tagDisplayName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('news.tags.pageTitle').replace('${tag}', tagDisplayName)}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('news.tags.pageDescription').replace('${tag}', tagDisplayName)}
              {allTagNews.length > 0 && (
                <span className="block mt-2 text-lg">
                  {t('news.showing').replace('${count}', allTagNews.length.toString())}
                </span>
              )}
            </p>

            {/* Search and filters */}
            {allTagNews.length > 0 && (
              <div className="max-w-2xl mx-auto">
                {/* Search */}
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder={t('news.search.placeholderInTag').replace('${tag}', tagDisplayName)}
                    className="pr-10 py-4 pl-12 text-lg rounded-xl shadow-sm border-gray-200 bg-white"
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

                {/* Filters */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {/* Featured Toggle */}
                  <Button
                    variant={showOnlyFeatured ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
                    className={showOnlyFeatured ? "bg-[#16a34a] hover:bg-[#15803d]" : ""}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {t('news.featured')}
                  </Button>

                  {/* Category Filter */}
                  {availableCategories.length > 0 && (
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                    >
                      <option value="">{t('news.allCategories')}</option>
                      {availableCategories.map((category) => (
                        <option key={category} value={category}>
                          {category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
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
                      {t('news.clearFilters')}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Tags */}
      {relatedTags.length > 0 && (
        <div className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">{t('news.relatedTags')}:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {relatedTags.map((relatedTag) => (
                  <Link
                    key={relatedTag}
                    href={`/resources/news/tags/${relatedTag}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-[#16a34a] hover:text-white text-gray-700 text-sm rounded-full transition-colors"
                  >
                    #{relatedTag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tag Statistics */}
      {allTagNews.length > 0 && (
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#16a34a]/10 rounded-full mx-auto mb-2">
                  <Newspaper className="h-6 w-6 text-[#16a34a]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{allTagNews.length}</div>
                <div className="text-sm text-gray-600">{t('news.totalArticles')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {[...new Set(allTagNews.map(a => a.author.id))].length}
                </div>
                <div className="text-sm text-gray-600">{t('news.authors')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {allTagNews.filter(a => a.featured).length}
                </div>
                <div className="text-sm text-gray-600">{t('news.featured')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                  <TagIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{availableCategories.length}</div>
                <div className="text-sm text-gray-600">{t('news.categories')}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {newsArticles.length > 0 ? (
            <>
              {/* Results summary */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-500">
                  {hasActiveFilters 
                    ? t('news.filteredResults').replace('${count}', newsArticles.length.toString()).replace('${total}', allTagNews.length.toString())
                    : t('news.showing').replace('${count}', newsArticles.length.toString())
                  }
                </p>
                
                {newsArticles.length !== allTagNews.length && (
                  <p className="text-sm text-gray-400">
                    {t('news.totalInTag').replace('${count}', allTagNews.length.toString())}
                  </p>
                )}
              </div>

              {/* News Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentNews.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    {/* Image */}
                    {article.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.thumbnailImage || article.image}
                          alt={article.title[language]}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {article.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-[#16a34a] text-white text-xs font-medium rounded-full">
                              {t('news.featured')}
                            </span>
                          </div>
                        )}
                        {article.newsCategory && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                              {article.newsCategory.replace('-', ' ')}
                            </span>
                          </div>
                        )}
                        {article.urgent && (
                          <div className="absolute bottom-3 left-3">
                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                              {t('news.urgent')}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>
                            {new Date(article.publishedAt || article.date).toLocaleDateString(
                              language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE'
                            )}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{article.readTime} min read</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-[#16a34a] transition-colors">
                        <Link href={article.customUrl || `/resources/news/${article.slug}`}>
                          {article.title[language]}
                        </Link>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.summary?.[language] || article.description[language]}
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <User className="h-3 w-3 mr-1" />
                        <span>{article.author.name}</span>
                        {article.location && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{article.location}</span>
                          </>
                        )}
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-xs font-medium text-[#16a34a] bg-[#f0fdf4] px-2 py-1 rounded-full">
                            {t('resources.types.news')}
                          </span>
                        </div>
                        
                        <Link 
                          href={article.customUrl || `/resources/news/${article.slug}`}
                          className="text-[#16a34a] hover:text-[#15803d] transition-colors flex items-center text-sm font-medium"
                        >
                          {t('news.readMore')}
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </div>
                      
                      {/* Tags */}
                      {article.tags.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-1">
                            {article.tags.slice(0, 3).map((articleTag) => (
                              <Link
                                key={articleTag}
                                href={`/resources/news/tags/${articleTag}`}
                                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                                  articleTag === tag
                                    ? 'bg-[#16a34a] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-[#16a34a] hover:text-white'
                                }`}
                              >
                                #{articleTag}
                              </Link>
                            ))}
                            {article.tags.length > 3 && (
                              <span className="px-2 py-1 text-gray-400 text-xs">
                                +{article.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>

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
              <h3 className="text-lg font-medium mb-2">
                {hasActiveFilters 
                  ? t('news.noFilteredResults') 
                  : t('news.noNewsForTag')
                }
              </h3>
              <p className="text-gray-500 mb-6">
                {hasActiveFilters 
                  ? t('news.noFilteredResultsDescription')
                  : t('news.noNewsForTagDescription').replace('${tag}', tagDisplayName)
                }
              </p>
              {hasActiveFilters ? (
                <Button onClick={clearFilters}>{t('news.clearFilters')}</Button>
              ) : (
                <Button onClick={() => router.push('/resources/news')}>
                  {t('news.backToAllNews')}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
NewsTagPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default NewsTagPage;