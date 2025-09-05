import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft, Search, X, Calendar, Filter } from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { BlogCard } from '@/components/blog/BlogCard';
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

// Enhanced interface matching your API response
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

const BlogTagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { language, translations } = useLanguage();

  // State management
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [allTagPosts, setAllTagPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const postsPerPage = 9;

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Fetch posts for this tag
  useEffect(() => {
    if (!tag || typeof tag !== 'string') return;

    async function fetchTagPosts() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch posts with this tag from your enhanced API
        const res = await fetch(`/api/combined-blog-posts?tag=${encodeURIComponent(tag)}`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }

        const tagPosts: BlogPost[] = await res.json();
        setAllTagPosts(tagPosts);

        // If no posts found, check if tag exists at all
        if (tagPosts.length === 0) {
          // Fetch all posts to check if tag exists
          const allRes = await fetch('/api/combined-blog-posts?debug=true');
          if (allRes.ok) {
            const allData = await allRes.json();
            const availableTags = allData.debug?.availableTags || [];
            
            // If tag doesn't exist in any posts, show 404
            if (!availableTags.includes(tag)) {
              setError('Tag not found');
              return;
            }
          }
        }

        // Get related tags from posts that share this tag
        const relatedTagsSet = new Set<string>();
        tagPosts.forEach(post => {
          post.tags.forEach(postTag => {
            if (postTag !== tag && postTag.toLowerCase() !== tag.toLowerCase()) {
              relatedTagsSet.add(postTag);
            }
          });
        });
        setRelatedTags(Array.from(relatedTagsSet).slice(0, 8)); // Limit to 8 related tags

      } catch (error) {
        console.error('Error loading tag posts:', error);
        setError('Failed to load blog posts for this tag');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTagPosts();
  }, [tag]);

  // Filter posts based on search and featured toggle
  useEffect(() => {
    let filteredPosts = [...allTagPosts];

    // Apply search filter
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      filteredPosts = filteredPosts.filter(post => {
        const searchableContent = [
          post.title[language] || '',
          post.description[language] || '',
          post.excerpt?.[language] || '',
          post.author.name || '',
          ...post.tags
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Apply featured filter
    if (showOnlyFeatured) {
      filteredPosts = filteredPosts.filter(post => post.featured);
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    setPosts(filteredPosts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allTagPosts, searchQuery, showOnlyFeatured, language]);

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setShowOnlyFeatured(false);
  };

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
          {/* Posts grid skeleton */}
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
              {error === 'Tag not found' ? t('blog.tagNotFound') : t('blog.error')}
            </h2>
            <p className="text-gray-600 mb-6">
              {error === 'Tag not found' 
                ? t('blog.tagNotFoundDescription') 
                : t('blog.errorDescription')
              }
            </p>
            <Button onClick={() => router.push('/resources/blog')}>
              {t('blog.backToAllPosts')}
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
        <title>{`${tagDisplayName} - ${t('blog.meta.title')}`} | Flair Plastic</title>
        <meta 
          name="description" 
          content={`${t('blog.tags.description').replace('${tag}', tagDisplayName)} (${allTagPosts.length} posts)`} 
        />
        <meta name="keywords" content={`${tag}, blog, articles, ${relatedTags.slice(0, 5).join(', ')}`} />
      </Head>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/resources" className="text-gray-600 hover:text-[#fa9b6b]">
              {t('resources.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/resources/blog" className="text-gray-600 hover:text-[#fa9b6b]">
              {t('blog.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">#{tagDisplayName}</span>
          </nav>
        </div>
      </div>

      {/* Tag Header */}
      <div className="py-16 bg-gradient-to-r from-[#f9f5ff] to-[#f0eafe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back button */}
            <Link 
              href="/resources/blog" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-[#fa9b6b] mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('blog.backToAllPosts')}
            </Link>

            {/* Tag title */}
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#fa9b6b]/10 border border-[#fa9b6b]/20">
              <span className="text-[#fa9b6b] font-medium">#{tagDisplayName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('blog.tags.pageTitle').replace('${tag}', tagDisplayName)}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('blog.tags.pageDescription').replace('${tag}', tagDisplayName)}
              {allTagPosts.length > 0 && (
                <span className="block mt-2 text-lg">
                  {t('blog.showing').replace('${count}', allTagPosts.length.toString())}
                </span>
              )}
            </p>

            {/* Search and filters */}
            {allTagPosts.length > 0 && (
              <div className="max-w-2xl mx-auto">
                {/* Search */}
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder={t('blog.search.placeholderInTag').replace('${tag}', tagDisplayName)}
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
                  <Button
                    variant={showOnlyFeatured ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
                    className={showOnlyFeatured ? "bg-[#fa9b6b] hover:bg-[#e8864d]" : ""}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {t('blog.featured')}
                  </Button>

                  {(searchQuery || showOnlyFeatured) && (
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
              <p className="text-sm text-gray-500 mb-3">{t('blog.relatedTags')}:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {relatedTags.map((relatedTag) => (
                  <Link
                    key={relatedTag}
                    href={`/resources/blog/tags/${relatedTag}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-[#fa9b6b] hover:text-white text-gray-700 text-sm rounded-full transition-colors"
                  >
                    #{relatedTag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <>
              {/* Results summary */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-500">
                  {searchQuery || showOnlyFeatured 
                    ? t('blog.filteredResults').replace('${count}', posts.length.toString()).replace('${total}', allTagPosts.length.toString())
                    : t('blog.showing').replace('${count}', posts.length.toString())
                  }
                </p>
                
                {posts.length !== allTagPosts.length && (
                  <p className="text-sm text-gray-400">
                    {t('blog.totalInTag').replace('${count}', allTagPosts.length.toString())}
                  </p>
                )}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
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
                {searchQuery || showOnlyFeatured 
                  ? t('blog.noFilteredResults') 
                  : t('blog.noPostsForTag')
                }
              </h3>
              <p className="text-gray-500 mb-6">
                {searchQuery || showOnlyFeatured 
                  ? t('blog.noFilteredResultsDescription')
                  : t('blog.noPostsForTagDescription').replace('${tag}', tagDisplayName)
                }
              </p>
              {(searchQuery || showOnlyFeatured) ? (
                <Button onClick={clearFilters}>{t('blog.clearFilters')}</Button>
              ) : (
                <Button onClick={() => router.push('/resources/blog')}>
                  {t('blog.backToAllPosts')}
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
BlogTagPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default BlogTagPage;