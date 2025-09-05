import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Search, 
  ArrowUpDown,
  Users2,
  TrendingUp,
  BadgeCheck,
  Clock,
  Award,
  Filter,
  X
} from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import MosaicGrid from '@/components/ui/mosaic-grid';
import MosaicPostcard from '@/components/ui/mosaic-postcard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
interface CaseStudy {
  id: string;
  slug: string;
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  summary?: { en: string; hu: string; de: string };
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
  client: {
    name: string;
    industry: string;
    size: string;
    location?: string;
  };
  challenge: { en: string; hu: string; de: string };
  solution: { en: string; hu: string; de: string };
  results: {
    metrics: {
      label: { en: string; hu: string; de: string };
      value: string;
      improvement?: string;
    }[];
    testimonial?: {
      quote: { en: string; hu: string; de: string };
      author: string;
      position: string;
    };
  };
  industry: string;
  projectDuration?: string;
  technologies: string[];
}

const CaseStudiesPage = () => {
  const { language, translations } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const postsPerPage = 9;

  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [availableIndustries, setAvailableIndustries] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
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

  // Fetch case studies from the enhanced API
  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Build query parameters
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.append('search', searchQuery);
        if (selectedIndustry && selectedIndustry !== 'all') queryParams.append('industry', selectedIndustry);
        if (showOnlyFeatured) queryParams.append('featured', 'true');
        
        const url = `/api/combined-case-studies${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error('Failed to fetch case studies');
        const data = await res.json();
        
        setStudies(data);
        
        // Fetch available filters
        const filtersRes = await fetch('/api/combined-case-studies?debug=true');
        if (filtersRes.ok) {
          const filtersData = await filtersRes.json();
          setAvailableIndustries(filtersData.debug.availableIndustries || []);
          setAvailableTags(filtersData.debug.availableTags || []);
        }
        
      } catch (error) {
        console.error('Error loading case studies:', error);
        setError('Failed to load case studies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    // Debounce search
    const timeoutId = setTimeout(fetchCaseStudies, searchQuery ? 300 : 0);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedIndustry, showOnlyFeatured]);

  // Sort studies by date
  const sortedStudies = [...studies].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  // Paginate studies
  const indexOfLastStudy = currentPage * postsPerPage;
  const indexOfFirstStudy = indexOfLastStudy - postsPerPage;
  const currentStudies = sortedStudies.slice(indexOfFirstStudy, indexOfLastStudy);
  const totalPages = Math.ceil(sortedStudies.length / postsPerPage);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedIndustry('all');
    setShowOnlyFeatured(false);
    setCurrentPage(1);
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || (selectedIndustry && selectedIndustry !== 'all') || showOnlyFeatured;

  // Popular tags for case studies
  const popularTags = availableTags.slice(0, 5);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-12 mx-auto"></div>
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
        <title>{t('caseStudies.meta.title')} | Flair Plastic</title>
        <meta name="description" content={t('caseStudies.meta.description')} />
        <meta name="keywords" content={t('caseStudies.meta.keywords')} />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#ebf5ff] to-[#dbeafe]">
        <div className="absolute top-0 left-0 w-full h-32 bg-[url('/images/resources/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-80 bg-gradient-to-tl from-[#3b82f6]/20 to-transparent blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#3b82f6]/20 text-sm text-[#3b82f6] font-medium">
                <Award className="h-4 w-4 mr-2" />
                {t('caseStudies.hero.badge')}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                {t('caseStudies.hero.title')}
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('caseStudies.hero.subtitle')}
              </p>
              
              {/* Enhanced Search */}
              <div className="relative mb-6 max-w-xl">
                <Input
                  type="text"
                  placeholder={t('caseStudies.search.placeholder')}
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
              {popularTags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-600">{t('caseStudies.popular')}:</span>
                  {popularTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/resources/case-studies/tags/${tag}`}
                      className="text-sm px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-full text-gray-700 hover:bg-white transition-all"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Stats Section */}
            <div className="hidden lg:flex flex-1 relative">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { icon: <Users2 className="h-6 w-6 text-[#3b82f6]" />, 
                    text: t('caseStudies.stats.clients') || '50+ Clients', 
                    subtext: t('caseStudies.stats.clientsDesc') || 'Successful projects' },
                  { icon: <TrendingUp className="h-6 w-6 text-[#3b82f6]" />, 
                    text: t('caseStudies.stats.roi') || '40% Avg ROI', 
                    subtext: t('caseStudies.stats.roiDesc') || 'Client improvements' },
                  { icon: <BadgeCheck className="h-6 w-6 text-[#3b82f6]" />, 
                    text: t('caseStudies.stats.solutions') || '100+ Solutions', 
                    subtext: t('caseStudies.stats.solutionsDesc') || 'Custom implementations' },
                  { icon: <Clock className="h-6 w-6 text-[#3b82f6]" />, 
                    text: t('caseStudies.stats.experience') || '25+ Years', 
                    subtext: t('caseStudies.stats.experienceDesc') || 'Industry expertise' },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg mb-4">
                      {item.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-1">{item.text}</div>
                    <div className="text-sm text-gray-500">{item.subtext}</div>
                  </div>
                ))}
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
                {t('caseStudies.featured')}
              </Button>

              {/* Industry Filter */}
              {availableIndustries.length > 0 && (
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder={t('caseStudies.filters.industry')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('caseStudies.filters.allIndustries')}</SelectItem>
                    {availableIndustries.map((industry) => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  {t('caseStudies.clearFilters')}
                </Button>
              )}
            </div>

            {/* Sort & Results Count */}
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                {t('caseStudies.showing').replace('${count}', sortedStudies.length.toString())}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="flex items-center bg-white text-[#3b82f6] hover:bg-[#f8fafc] border-[#e2e8f0]"
                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              >
                <span className="mr-1">{t(`caseStudies.sort.${sortOrder}`)}</span>
                <ArrowUpDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentStudies.length > 0 ? (
            <>              {/* Case Studies Mosaic Grid */}              <MosaicGrid>
                {currentStudies.map((study) => {
                  return (
                    <MosaicPostcard
                      key={study.id}
                      slug={study.slug}
                      category="case-study"
                      title={study.title}
                      description={study.description}
                      summary={study.summary}
                      image={study.image}
                      thumbnailImage={study.thumbnailImage}
                      date={study.date}
                      publishedAt={study.date}
                      author={study.author}
                      readTime={study.readTime}
                      tags={study.tags}
                      featured={study.featured}
                      customUrl={study.customUrl}
                      typeInfo={{
                        icon: <Award className="h-3 w-3" />,
                        label: t('resources.types.case-study')
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
              <h3 className="text-lg font-medium mb-2">
                {hasActiveFilters ? t('caseStudies.noFilteredResults') : t('caseStudies.noResults.title')}
              </h3>
              <p className="text-gray-500 mb-6">
                {hasActiveFilters ? t('caseStudies.noFilteredResultsDescription') : t('caseStudies.noResults.description')}
              </p>
              <Button onClick={hasActiveFilters ? clearFilters : () => window.location.reload()}>
                {hasActiveFilters ? t('caseStudies.clearFilters') : t('caseStudies.noResults.resetButton')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Use the ResourcesLayout for this page
CaseStudiesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default CaseStudiesPage;