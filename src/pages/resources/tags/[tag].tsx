import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { 
  ChevronLeft, 
  Calendar, 
  Clock,
  Tag as TagIcon,
  Search,
  Filter,
  X,
  User,
  ArrowRight,
  Coffee,
  LineChart,
  Newspaper,
  Lightbulb,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced interface for unified resources
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
  industry?: string;
  client?: { name: string; industry: string; size: string };
  newsCategory?: string;
  updateCategory?: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  urgent?: boolean;
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

// Resource type icons and colors
const resourceTypeInfo = {
  'blog': {
    icon: <Coffee className="h-4 w-4" />,
    label: 'Blog',
    color: 'text-[#fa9b6b]',
    bg: 'bg-[#fef2ee]',
    badge: 'bg-[#fa9b6b]'
  },
  'case-study': {
    icon: <LineChart className="h-4 w-4" />,
    label: 'Case Study',
    color: 'text-[#3b82f6]',
    bg: 'bg-[#eff6ff]',
    badge: 'bg-[#3b82f6]'
  },
  'news': {
    icon: <Newspaper className="h-4 w-4" />,
    label: 'News',
    color: 'text-[#16a34a]',
    bg: 'bg-[#f0fdf4]',
    badge: 'bg-[#16a34a]'
  },
  'update': {
    icon: <Lightbulb className="h-4 w-4" />,
    label: 'Update',
    color: 'text-[#dc2626]',
    bg: 'bg-[#fef2f2]',
    badge: 'bg-[#dc2626]'
  }
};

const ResourcesTagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { language, translations } = useLanguage();

  // State management
  const [resources, setResources] = useState<Resource[]>([]);
  const [allTagResources, setAllTagResources] = useState<Resource[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const resourcesPerPage = 9;

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'hu' ? 'hu-HU' : language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Fetch resources for this tag
  useEffect(() => {
    if (!tag || typeof tag !== 'string') return;

    async function fetchTagResources() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch from the combined resources API with tag filter
        const response = await fetch(`/api/combined-resources?tag=${encodeURIComponent(tag)}&limit=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }

        const data = await response.json();
        const fetchedResources = Array.isArray(data) ? data : [];

        setAllTagResources(fetchedResources);

        // Extract available categories and related tags
        const categories = [...new Set(fetchedResources.map((r: Resource) => r.category))];
        setAvailableCategories(categories);

        // Get related tags (tags that appear with this tag)
        const relatedTagsSet = new Set<string>();
        fetchedResources.forEach((resource: Resource) => {
          if (resource.tags && resource.tags.includes(tag)) {
            resource.tags.forEach(resourceTag => {
              if (resourceTag !== tag) {
                relatedTagsSet.add(resourceTag);
              }
            });
          }
        });
        setRelatedTags(Array.from(relatedTagsSet).slice(0, 8));

      } catch (error) {
        console.error('Error fetching tag resources:', error);
        setError('Failed to load resources for this tag.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTagResources();
  }, [tag]);

  // Filter resources based on search and filters
  useEffect(() => {
    let filtered = [...allTagResources];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    // Filter by featured
    if (showOnlyFeatured) {
      filtered = filtered.filter(resource => resource.featured);
    }

    // Filter by search
    if (searchQuery.trim()) {
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
      // Prioritize featured
      if (a.featured && !b.featured) return -1;
      if (b.featured && !a.featured) return 1;
      
      // Then by date
      const dateA = new Date(a.publishedAt || a.date).getTime();
      const dateB = new Date(b.publishedAt || b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    setResources(filtered);
    setCurrentPage(1);
  }, [allTagResources, searchQuery, showOnlyFeatured, selectedCategory, sortOrder, language]);

  // Paginate resources
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = resources.slice(indexOfFirstResource, indexOfLastResource);
  const totalPages = Math.ceil(resources.length / resourcesPerPage);

  // Clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setShowOnlyFeatured(false);
    setSelectedCategory('all');
    setSortOrder('newest');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || showOnlyFeatured || selectedCategory !== 'all';

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-12"></div>
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
          <h1 className="text-2xl font-bold mb-4">Tag Not Found</h1>
          <p className="text-gray-600 mb-8">
            {error || "The requested tag doesn't exist or has no associated resources."}
          </p>
          <Link href="/resources">
            <Button>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${tag} Resources`} | Flair Plastic</title>
        <meta name="description" content={`Explore all resources tagged with "${tag}" - including articles, case studies, news, and updates from Flair Plastic.`} />
        <meta name="keywords" content={`${tag}, resources, blog, case studies, news, updates, Flair Plastic`} />
      </Head>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/resources" className="hover:text-[#fa9b6b] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <Link href="/resources/tags" className="hover:text-[#fa9b6b] transition-colors">
              Tags
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{tag}</span>
          </nav>
        </div>
      </section>

      {/* Tag Header */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="mb-4 bg-[#fef2ee] text-[#fa9b6b] border-[#fa9b6b]/20">
                <TagIcon className="h-3 w-3 mr-1" />
                Tag
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {allTagResources.length} resources found with this tag
              </p>
            </motion.div>

            {/* Tag Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {Object.entries(
                allTagResources.reduce((acc, resource) => {
                  acc[resource.category] = (acc[resource.category] || 0) + 1;
                  return acc;
                }, {} as Record<string, number>)
              ).map(([category, count]) => (
                <div key={category} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-center mb-2">
                    {resourceTypeInfo[category as keyof typeof resourceTypeInfo]?.icon}
                  </div>
                  <div className="font-bold text-lg text-gray-900">{count}</div>
                  <div className="text-sm text-gray-500 capitalize">
                    {resourceTypeInfo[category as keyof typeof resourceTypeInfo]?.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filters and Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {/* Filters */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-wrap gap-4 items-center">
                    {/* Search */}
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search within tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>

                    {/* Category Filter */}
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {availableCategories.map(category => (
                          <SelectItem key={category} value={category}>
                            {resourceTypeInfo[category as keyof typeof resourceTypeInfo]?.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Featured Toggle */}
                    <Button
                      variant={showOnlyFeatured ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
                      className={showOnlyFeatured ? "bg-[#fa9b6b] hover:bg-[#e86e40]" : ""}
                    >
                      <Award className="h-4 w-4 mr-1" />
                      Featured
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Sort */}
                    <Select value={sortOrder} onValueChange={(value: 'newest' | 'oldest') => setSortOrder(value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="h-4 w-4 mr-1" />
                        Clear
                      </Button>
                    )}
                  </div>
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Active filters:</span>
                    {searchQuery && (
                      <Badge variant="outline" className="bg-[#fef2ee] text-[#fa9b6b]">
                        Search: {searchQuery}
                        <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setSearchQuery('')} />
                      </Badge>
                    )}
                    {selectedCategory !== 'all' && (
                      <Badge variant="outline" className="bg-[#fef2ee] text-[#fa9b6b]">
                        Type: {resourceTypeInfo[selectedCategory as keyof typeof resourceTypeInfo]?.label}
                        <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setSelectedCategory('all')} />
                      </Badge>
                    )}
                    {showOnlyFeatured && (
                      <Badge variant="outline" className="bg-[#fef2ee] text-[#fa9b6b]">
                        Featured only
                        <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setShowOnlyFeatured(false)} />
                      </Badge>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Results Count */}
              <div className="mb-6 text-sm text-gray-500">
                Showing {resources.length} resource{resources.length !== 1 ? 's' : ''} tagged with "{tag}"
              </div>

              {/* Resources Grid */}
              {currentResources.length > 0 ? (
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                >
                  <AnimatePresence>
                    {currentResources.map((resource) => {
                      const typeInfo = resourceTypeInfo[resource.category];
                      
                      return (
                        <motion.div
                          key={resource.id}
                          variants={fadeInUp}
                          exit={{ opacity: 0, y: 20 }}
                          className="group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                        >
                          <div className="relative h-48">
                            <Image
                              src={resource.thumbnailImage || resource.image}
                              alt={resource.title[language]}
                              fill
                              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge className={`${typeInfo.badge} text-white hover:${typeInfo.badge}`}>
                                {typeInfo.icon}
                                <span className="ml-1">{typeInfo.label}</span>
                              </Badge>
                            </div>
                            {resource.featured && (
                              <div className="absolute top-3 right-3">
                                <Badge className="bg-yellow-500 text-white">
                                  <Award className="h-3 w-3 mr-1" />
                                  Featured
                                </Badge>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-5">
                            <div className="flex items-center mb-3">
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatDate(resource.publishedAt || resource.date)}
                              </div>
                              <div className="mx-2 text-gray-300">•</div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                {resource.readTime} min
                              </div>
                            </div>
                            
                            <Link 
                              href={resource.customUrl || `/resources/${resource.category}/${resource.slug}`} 
                              className="block"
                            >
                              <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 hover:text-[#fa9b6b] transition-colors">
                                {resource.title[language]}
                              </h3>
                            </Link>
                            
                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                              {resource.summary?.[language] || resource.description[language]}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {resource.author?.avatar && (
                                  <div className="relative w-6 h-6 rounded-full overflow-hidden mr-2">
                                    <Image
                                      src={resource.author.avatar}
                                      alt={resource.author.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                )}
                                <span className="text-sm text-gray-600">{resource.author?.name}</span>
                              </div>
                              
                              <Link 
                                href={resource.customUrl || `/resources/${resource.category}/${resource.slug}`}
                                className="text-[#fa9b6b] text-sm font-medium flex items-center hover:underline"
                              >
                                Read more 
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="text-center py-20">
                  <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    No resources found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear all filters
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
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(pageNum)}
                            className={currentPage === pageNum ? "bg-[#fa9b6b] hover:bg-[#e86e40]" : ""}
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              {/* Related Tags */}
              {relatedTags.length > 0 && (
                <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <TagIcon className="h-4 w-4 mr-2 text-[#fa9b6b]" />
                    Related Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedTags.map((relatedTag, index) => (
                      <Link key={index} href={`/resources/tags/${relatedTag}`}>
                        <Badge 
                          variant="outline" 
                          className="cursor-pointer hover:bg-[#fef2ee] hover:text-[#fa9b6b] hover:border-[#fa9b6b]/20 transition-colors"
                        >
                          {relatedTag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Resources */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold mb-4 text-gray-900">
                  Explore More
                </h3>
                <div className="space-y-3">
                  <Link href="/resources">
                    <Button variant="outline" className="w-full justify-start">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      All Resources
                    </Button>
                  </Link>
                  <Link href="/resources/blog">
                    <Button variant="outline" className="w-full justify-start">
                      <Coffee className="h-4 w-4 mr-2" />
                      Blog Posts
                    </Button>
                  </Link>
                  <Link href="/resources/case-studies">
                    <Button variant="outline" className="w-full justify-start">
                      <LineChart className="h-4 w-4 mr-2" />
                      Case Studies
                    </Button>
                  </Link>
                  <Link href="/resources/news">
                    <Button variant="outline" className="w-full justify-start">
                      <Newspaper className="h-4 w-4 mr-2" />
                      News
                    </Button>
                  </Link>
                  <Link href="/resources/updates">
                    <Button variant="outline" className="w-full justify-start">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Updates
                    </Button>
                  </Link>
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
ResourcesTagPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default ResourcesTagPage;