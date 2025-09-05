import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  ArrowRight,
  Settings,
  AlertTriangle,
  CheckCircle,
  Info,
  Search,
  Filter,
  X,
  User,
  Package,
  Tag as TagIcon,
  TrendingUp,
  Zap
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
  version?: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  affectedProducts?: string[];
  changeType?: 'new-feature' | 'improvement' | 'bug-fix' | 'security' | 'breaking-change';
  urgent?: boolean;
}

const UpdateTagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { language, translations } = useLanguage();

  // State management
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [allTagUpdates, setAllTagUpdates] = useState<UpdateItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [showOnlyCritical, setShowOnlyCritical] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [availablePriorities, setAvailablePriorities] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const updatesPerPage = 9;

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Fetch updates for this tag
  useEffect(() => {
    if (!tag || typeof tag !== 'string') return;

    async function fetchTagUpdates() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch updates with this tag from your enhanced API
        const res = await fetch(`/api/combined-updates?tag=${encodeURIComponent(tag)}`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch updates');
        }

        const tagUpdates: UpdateItem[] = await res.json();
        setAllTagUpdates(tagUpdates);

        // If no updates found, check if tag exists at all
        if (tagUpdates.length === 0) {
          // Fetch all updates to check if tag exists
          const allRes = await fetch('/api/combined-updates?debug=true');
          if (allRes.ok) {
            const allData = await allRes.json();
            const availableTags = allData.debug?.availableTags || [];
            
            // If tag doesn't exist in any updates, show 404
            if (!availableTags.includes(tag)) {
              setError('Tag not found');
              return;
            }
          }
        }

        // Extract unique priorities and categories from the tag updates
        const priorities = [...new Set(tagUpdates.map(update => update.priority).filter(Boolean))];
        const categories = [...new Set(tagUpdates.map(update => update.updateCategory).filter(Boolean))];
        setAvailablePriorities(priorities);
        setAvailableCategories(categories);

        // Get related tags from updates that share this tag
        const relatedTagsSet = new Set<string>();
        tagUpdates.forEach(update => {
          update.tags.forEach(updateTag => {
            if (updateTag !== tag && updateTag.toLowerCase() !== tag.toLowerCase()) {
              relatedTagsSet.add(updateTag);
            }
          });
        });
        setRelatedTags(Array.from(relatedTagsSet).slice(0, 8)); // Limit to 8 related tags

      } catch (error) {
        console.error('Error loading tag updates:', error);
        setError('Failed to load updates for this tag');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTagUpdates();
  }, [tag]);

  // Filter updates based on search and filters
  useEffect(() => {
    let filteredUpdates = [...allTagUpdates];

    // Apply search filter
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      filteredUpdates = filteredUpdates.filter(update => {
        const searchableContent = [
          update.title[language] || '',
          update.description[language] || '',
          update.summary?.[language] || '',
          update.author.name || '',
          ...(update.affectedProducts || []),
          ...update.tags
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Apply featured filter
    if (showOnlyFeatured) {
      filteredUpdates = filteredUpdates.filter(update => update.featured);
    }

    // Apply critical filter
    if (showOnlyCritical) {
      filteredUpdates = filteredUpdates.filter(update => update.priority === 'critical');
    }

    // Apply priority filter
    if (selectedPriority) {
      filteredUpdates = filteredUpdates.filter(update => 
        update.priority?.toLowerCase() === selectedPriority.toLowerCase()
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filteredUpdates = filteredUpdates.filter(update => 
        update.updateCategory?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort by priority and date (critical first, then by date)
    filteredUpdates.sort((a, b) => {
      // Always prioritize critical updates first
      if (a.priority === 'critical' && b.priority !== 'critical') return -1;
      if (b.priority === 'critical' && a.priority !== 'critical') return 1;
      
      // Then sort by date (newest first)
      return new Date(b.publishedAt || b.date).getTime() - new Date(a.publishedAt || a.date).getTime();
    });

    setUpdates(filteredUpdates);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allTagUpdates, searchQuery, showOnlyFeatured, showOnlyCritical, selectedPriority, selectedCategory, language]);

  // Paginate updates
  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = updates.slice(indexOfFirstUpdate, indexOfLastUpdate);
  const totalPages = Math.ceil(updates.length / updatesPerPage);

  // Clear filters
  const clearFilters = () => {
    setSearchQuery('');
    setShowOnlyFeatured(false);
    setShowOnlyCritical(false);
    setSelectedPriority('');
    setSelectedCategory('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || showOnlyFeatured || showOnlyCritical || selectedPriority || selectedCategory;

  // Get priority icon and color
  const getPriorityDisplay = (priority?: string) => {
    switch (priority) {
      case 'critical':
        return { icon: AlertTriangle, color: 'text-red-600 bg-red-50 border-red-200', bgClass: 'bg-red-50' };
      case 'high':
        return { icon: AlertTriangle, color: 'text-orange-600 bg-orange-50 border-orange-200', bgClass: 'bg-orange-50' };
      case 'medium':
        return { icon: Info, color: 'text-blue-600 bg-blue-50 border-blue-200', bgClass: 'bg-blue-50' };
      case 'low':
        return { icon: CheckCircle, color: 'text-green-600 bg-green-50 border-green-200', bgClass: 'bg-green-50' };
      default:
        return { icon: Info, color: 'text-gray-600 bg-gray-50 border-gray-200', bgClass: 'bg-gray-50' };
    }
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
          {/* Updates grid skeleton */}
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
              {error === 'Tag not found' ? t('updates.tagNotFound') : t('updates.error')}
            </h2>
            <p className="text-gray-600 mb-6">
              {error === 'Tag not found' 
                ? t('updates.tagNotFoundDescription') 
                : t('updates.errorDescription')
              }
            </p>
            <Button onClick={() => router.push('/resources/updates')}>
              {t('updates.backToAllUpdates')}
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
        <title>{`${tagDisplayName} - ${t('updates.meta.title')}`} | Flair Plastic</title>
        <meta 
          name="description" 
          content={`${t('updates.tags.description').replace('${tag}', tagDisplayName)} (${allTagUpdates.length} updates)`} 
        />
        <meta name="keywords" content={`${tag}, updates, product updates, ${relatedTags.slice(0, 5).join(', ')}`} />
      </Head>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/resources" className="text-gray-600 hover:text-[#3b82f6]">
              {t('resources.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/resources/updates" className="text-gray-600 hover:text-[#3b82f6]">
              {t('updates.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">#{tagDisplayName}</span>
          </nav>
        </div>
      </div>

      {/* Tag Header */}
      <div className="py-16 bg-gradient-to-r from-[#eff6ff] to-[#dbeafe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back button */}
            <Link 
              href="/resources/updates" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-[#3b82f6] mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('updates.backToAllUpdates')}
            </Link>

            {/* Tag title */}
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20">
              <TagIcon className="h-4 w-4 mr-2 text-[#3b82f6]" />
              <span className="text-[#3b82f6] font-medium">#{tagDisplayName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('updates.tags.pageTitle').replace('${tag}', tagDisplayName)}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('updates.tags.pageDescription').replace('${tag}', tagDisplayName)}
              {allTagUpdates.length > 0 && (
                <span className="block mt-2 text-lg">
                  {t('updates.showing').replace('${count}', allTagUpdates.length.toString())}
                </span>
              )}
            </p>

            {/* Search and filters */}
            {allTagUpdates.length > 0 && (
              <div className="max-w-2xl mx-auto">
                {/* Search */}
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder={t('updates.search.placeholderInTag').replace('${tag}', tagDisplayName)}
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
                    className={showOnlyFeatured ? "bg-[#3b82f6] hover:bg-[#2563eb]" : ""}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {t('updates.featured')}
                  </Button>

                  {/* Critical Toggle */}
                  <Button
                    variant={showOnlyCritical ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOnlyCritical(!showOnlyCritical)}
                    className={showOnlyCritical ? "bg-red-600 hover:bg-red-700" : "border-red-200 text-red-600 hover:bg-red-50"}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    {t('updates.critical')}
                  </Button>

                  {/* Priority Filter */}
                  {availablePriorities.length > 0 && (
                    <select
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                    >
                      <option value="">{t('updates.allPriorities')}</option>
                      {availablePriorities.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority?.charAt(0).toUpperCase() + priority?.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Category Filter */}
                  {availableCategories.length > 0 && (
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                    >
                      <option value="">{t('updates.allCategories')}</option>
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
                      {t('updates.clearFilters')}
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
              <p className="text-sm text-gray-500 mb-3">{t('updates.relatedTags')}:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {relatedTags.map((relatedTag) => (
                  <Link
                    key={relatedTag}
                    href={`/resources/updates/tags/${relatedTag}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-[#3b82f6] hover:text-white text-gray-700 text-sm rounded-full transition-colors"
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
      {allTagUpdates.length > 0 && (
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#3b82f6]/10 rounded-full mx-auto mb-2">
                  <Settings className="h-6 w-6 text-[#3b82f6]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{allTagUpdates.length}</div>
                <div className="text-sm text-gray-600">{t('updates.totalUpdates')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {[...new Set(allTagUpdates.map(u => u.author.id))].length}
                </div>
                <div className="text-sm text-gray-600">{t('updates.authors')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {allTagUpdates.filter(u => u.featured).length}
                </div>
                <div className="text-sm text-gray-600">{t('updates.featured')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {allTagUpdates.filter(u => u.priority === 'critical').length}
                </div>
                <div className="text-sm text-gray-600">{t('updates.critical')}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Updates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {updates.length > 0 ? (
            <>
              {/* Results summary */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-500">
                  {hasActiveFilters 
                    ? t('updates.filteredResults').replace('${count}', updates.length.toString()).replace('${total}', allTagUpdates.length.toString())
                    : t('updates.showing').replace('${count}', updates.length.toString())
                  }
                </p>
                
                {updates.length !== allTagUpdates.length && (
                  <p className="text-sm text-gray-400">
                    {t('updates.totalInTag').replace('${count}', allTagUpdates.length.toString())}
                  </p>
                )}
              </div>

              {/* Updates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentUpdates.map((update) => {
                  const priorityDisplay = getPriorityDisplay(update.priority);
                  const PriorityIcon = priorityDisplay.icon;
                  
                  return (
                    <article key={update.id} className={`bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300 group ${update.priority === 'critical' ? 'ring-2 ring-red-200' : 'border-gray-200'}`}>
                      {/* Image */}
                      {update.image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={update.thumbnailImage || update.image}
                            alt={update.title[language]}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Priority Badge */}
                          {update.priority && (
                            <div className={`absolute top-3 right-3 flex items-center px-2 py-1 rounded-full text-xs font-medium border ${priorityDisplay.color}`}>
                              <PriorityIcon className="h-3 w-3 mr-1" />
                              {update.priority}
                            </div>
                          )}
                          {update.featured && (
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-1 bg-[#3b82f6] text-white text-xs font-medium rounded-full">
                                {t('updates.featured')}
                              </span>
                            </div>
                          )}
                          {update.urgent && (
                            <div className="absolute bottom-3 left-3">
                              <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                                {t('updates.urgent')}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="flex items-center text-xs font-medium text-[#3b82f6] bg-[#eff6ff] px-2 py-1 rounded-full">
                            <Settings className="h-3 w-3 mr-1" />
                            {update.updateCategory?.replace('-', ' ') || t('resources.types.update')}
                          </span>
                          {update.version && (
                            <span className="flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                              <Package className="h-3 w-3 mr-1" />
                              v{update.version}
                            </span>
                          )}
                        </div>
                        
                        {/* Date and reading time */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>
                              {new Date(update.publishedAt || update.date).toLocaleDateString(
                                language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE'
                              )}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{update.readTime} min read</span>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-[#3b82f6] transition-colors">
                          <Link href={update.customUrl || `/resources/updates/${update.slug}`}>
                            {update.title[language]}
                          </Link>
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {update.summary?.[language] || update.description[language]}
                        </p>

                        {/* Affected Products */}
                        {update.affectedProducts && update.affectedProducts.length > 0 && (
                          <div className="mb-4 p-2 bg-gray-50 rounded-lg">
                            <span className="text-xs font-medium text-gray-700 block mb-1">
                              {t('updates.affects')}: 
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {update.affectedProducts.slice(0, 2).map((product) => (
                                <span key={product} className="text-xs text-gray-600 bg-white px-2 py-0.5 rounded border">
                                  {product}
                                </span>
                              ))}
                              {update.affectedProducts.length > 2 && (
                                <span className="text-xs text-gray-500">
                                  +{update.affectedProducts.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Author */}
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                          <User className="h-3 w-3 mr-1" />
                          <span>{update.author.name}</span>
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-xs font-medium text-[#3b82f6] bg-[#eff6ff] px-2 py-1 rounded-full">
                              {t('resources.types.update')}
                            </span>
                          </div>
                          
                          <Link 
                            href={update.customUrl || `/resources/updates/${update.slug}`}
                            className="text-[#3b82f6] hover:text-[#2563eb] transition-colors flex items-center text-sm font-medium"
                          >
                            {t('updates.readMore')}
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                        
                        {/* Tags */}
                        {update.tags.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap gap-1">
                              {update.tags.slice(0, 3).map((updateTag) => (
                                <Link
                                  key={updateTag}
                                  href={`/resources/updates/tags/${updateTag}`}
                                  className={`px-2 py-1 text-xs rounded-full transition-colors ${
                                    updateTag === tag
                                      ? 'bg-[#3b82f6] text-white'
                                      : 'bg-gray-100 text-gray-600 hover:bg-[#3b82f6] hover:text-white'
                                  }`}
                                >
                                  #{updateTag}
                                </Link>
                              ))}
                              {update.tags.length > 3 && (
                                <span className="px-2 py-1 text-gray-400 text-xs">
                                  +{update.tags.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
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
                  ? t('updates.noFilteredResults') 
                  : t('updates.noUpdatesForTag')
                }
              </h3>
              <p className="text-gray-500 mb-6">
                {hasActiveFilters 
                  ? t('updates.noFilteredResultsDescription')
                  : t('updates.noUpdatesForTagDescription').replace('${tag}', tagDisplayName)
                }
              </p>
              {hasActiveFilters ? (
                <Button onClick={clearFilters}>{t('updates.clearFilters')}</Button>
              ) : (
                <Button onClick={() => router.push('/resources/updates')}>
                  {t('updates.backToAllUpdates')}
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
UpdateTagPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default UpdateTagPage;