import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { 
  ChevronLeft, 
  Award, 
  Building2, 
  Calendar, 
  ArrowRight, 
  Search,
  Filter,
  X,
  TrendingUp,
  Users2,
  Target
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
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced interface matching your API response
interface CaseStudy {
  id: string;
  slug: string;
  title: { en: string; hu: string; de: string };
  description: { en: string; hu: string; de: string };
  summary: { en: string; hu: string; de: string };
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
    company?: string;
    industry?: string;
  };
  industry: string;
  projectType?: string;
  challenge: { en: string; hu: string; de: string };
  solution: { en: string; hu: string; de: string };
  results: {
    metrics: Array<{
      label: { en: string; hu: string; de: string };
      value: string;
      improvement?: string;
    }>;
    testimonial?: {
      quote: { en: string; hu: string; de: string };
      author: string;
      position: string;
    };
  };
  timeline?: string;
  technologies?: string[];
  outcomes?: { en: string; hu: string; de: string };
}

const CaseStudyTagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  const { language, translations } = useLanguage();

  // State management
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [allTagStudies, setAllTagStudies] = useState<CaseStudy[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [availableIndustries, setAvailableIndustries] = useState<string[]>([]);
  const [availableProjectTypes, setAvailableProjectTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const studiesPerPage = 9;

  // Helper function for translations
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Fetch case studies for this tag
  useEffect(() => {
    if (!tag || typeof tag !== 'string') return;

    async function fetchTagCaseStudies() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch case studies with this tag from your enhanced API
        const res = await fetch(`/api/combined-case-studies?tag=${encodeURIComponent(tag)}`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch case studies');
        }

        const tagStudies: CaseStudy[] = await res.json();
        setAllTagStudies(tagStudies);

        // If no case studies found, check if tag exists at all
        if (tagStudies.length === 0) {
          // Fetch all case studies to check if tag exists
          const allRes = await fetch('/api/combined-case-studies?debug=true');
          if (allRes.ok) {
            const allData = await allRes.json();
            const availableTags = allData.debug?.availableTags || [];
            
            // If tag doesn't exist in any case studies, show 404
            if (!availableTags.includes(tag)) {
              setError('Tag not found');
              return;
            }
          }
        }

        // Extract unique industries and project types from the tag studies
        const industries = [...new Set(tagStudies.map(study => study.industry).filter(Boolean))];
        const projectTypes = [...new Set(tagStudies.map(study => study.projectType).filter(Boolean))];
        
        setAvailableIndustries(industries);
        setAvailableProjectTypes(projectTypes);

        // Get related tags from case studies that share this tag
        const relatedTagsSet = new Set<string>();
        tagStudies.forEach(study => {
          study.tags.forEach(studyTag => {
            if (studyTag !== tag && studyTag.toLowerCase() !== tag.toLowerCase()) {
              relatedTagsSet.add(studyTag);
            }
          });
          // Also include technologies as related tags
          if (study.technologies) {
            study.technologies.forEach(tech => {
              if (tech !== tag && tech.toLowerCase() !== tag.toLowerCase()) {
                relatedTagsSet.add(tech);
              }
            });
          }
        });
        setRelatedTags(Array.from(relatedTagsSet).slice(0, 8)); // Limit to 8 related tags

      } catch (error) {
        console.error('Error loading tag case studies:', error);
        setError('Failed to load case studies for this tag');
      } finally {
        setIsLoading(false);
      }
    }

    fetchTagCaseStudies();
  }, [tag]);

  // Filter case studies based on search and filters
  useEffect(() => {
    let filteredStudies = [...allTagStudies];

    // Apply search filter
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      filteredStudies = filteredStudies.filter(study => {
        const searchableContent = [
          study.title[language] || '',
          study.description[language] || '',
          study.summary[language] || '',
          study.client.name || '',
          study.client.company || '',
          study.industry || '',
          study.projectType || '',
          ...study.tags,
          ...(study.technologies || [])
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Apply featured filter
    if (showOnlyFeatured) {
      filteredStudies = filteredStudies.filter(study => study.featured);
    }

    // Apply industry filter
    if (selectedIndustry) {
      filteredStudies = filteredStudies.filter(study => 
        study.industry?.toLowerCase() === selectedIndustry.toLowerCase()
      );
    }

    // Apply project type filter
    if (selectedProjectType) {
      filteredStudies = filteredStudies.filter(study => 
        study.projectType?.toLowerCase() === selectedProjectType.toLowerCase()
      );
    }

    // Sort by date (newest first)
    filteredStudies.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    setCaseStudies(filteredStudies);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allTagStudies, searchQuery, showOnlyFeatured, selectedIndustry, selectedProjectType, language]);

  // Paginate case studies
  const indexOfLastStudy = currentPage * studiesPerPage;
  const indexOfFirstStudy = indexOfLastStudy - studiesPerPage;
  const currentStudies = caseStudies.slice(indexOfFirstStudy, indexOfLastStudy);
  const totalPages = Math.ceil(caseStudies.length / studiesPerPage);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setShowOnlyFeatured(false);
    setSelectedIndustry('');
    setSelectedProjectType('');
  };

  // Check if any filters are active
  const hasActiveFilters = searchQuery || showOnlyFeatured || selectedIndustry || selectedProjectType;

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          {/* Breadcrumb skeleton */}
          <div className="h-4 bg-gray-200 rounded w-48 mb-8"></div>
          {/* Header skeleton */}
          <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-12 mx-auto"></div>
          {/* Case studies grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-gray-200 rounded-lg"></div>
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
              {error === 'Tag not found' ? t('caseStudies.tagNotFound') : t('caseStudies.error')}
            </h2>
            <p className="text-gray-600 mb-6">
              {error === 'Tag not found' 
                ? t('caseStudies.tagNotFoundDescription') 
                : t('caseStudies.errorDescription')
              }
            </p>
            <Button onClick={() => router.push('/resources/case-studies')}>
              {t('caseStudies.backToAllStudies')}
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
        <title>{`${tagDisplayName} - ${t('caseStudies.meta.title')}`} | Flair Plastic</title>
        <meta 
          name="description" 
          content={`${t('caseStudies.tags.description').replace('${tag}', tagDisplayName)} (${allTagStudies.length} case studies)`} 
        />
        <meta name="keywords" content={`${tag}, case studies, projects, ${relatedTags.slice(0, 5).join(', ')}`} />
      </Head>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/resources" className="text-gray-600 hover:text-[#3b82f6]">
              {t('resources.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/resources/case-studies" className="text-gray-600 hover:text-[#3b82f6]">
              {t('caseStudies.title')}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">#{tagDisplayName}</span>
          </nav>
        </div>
      </div>

      {/* Tag Header */}
      <div className="py-16 bg-gradient-to-r from-[#ebf5ff] to-[#dbeafe]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back button */}
            <Link 
              href="/resources/case-studies" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-[#3b82f6] mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('caseStudies.backToAllStudies')}
            </Link>

            {/* Tag title */}
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20">
              <Award className="h-4 w-4 mr-2 text-[#3b82f6]" />
              <span className="text-[#3b82f6] font-medium">#{tagDisplayName}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('caseStudies.tags.pageTitle').replace('${tag}', tagDisplayName)}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('caseStudies.tags.pageDescription').replace('${tag}', tagDisplayName)}
              {allTagStudies.length > 0 && (
                <span className="block mt-2 text-lg">
                  {t('caseStudies.showing').replace('${count}', allTagStudies.length.toString())}
                </span>
              )}
            </p>

            {/* Search and filters */}
            {allTagStudies.length > 0 && (
              <div className="max-w-2xl mx-auto">
                {/* Search */}
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder={t('caseStudies.search.placeholderInTag').replace('${tag}', tagDisplayName)}
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
                    {t('caseStudies.featured')}
                  </Button>

                  {/* Industry Filter */}
                  {availableIndustries.length > 0 && (
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                    >
                      <option value="">{t('caseStudies.allIndustries')}</option>
                      {availableIndustries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  )}

                  {/* Project Type Filter */}
                  {availableProjectTypes.length > 0 && (
                    <select
                      value={selectedProjectType}
                      onChange={(e) => setSelectedProjectType(e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-md text-sm bg-white"
                    >
                      <option value="">{t('caseStudies.allProjectTypes')}</option>
                      {availableProjectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
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
                      {t('caseStudies.clearFilters')}
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
              <p className="text-sm text-gray-500 mb-3">{t('caseStudies.relatedTags')}:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {relatedTags.map((relatedTag) => (
                  <Link
                    key={relatedTag}
                    href={`/resources/case-studies/tags/${relatedTag}`}
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
      {allTagStudies.length > 0 && (
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#3b82f6]/10 rounded-full mx-auto mb-2">
                  <Award className="h-6 w-6 text-[#3b82f6]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{allTagStudies.length}</div>
                <div className="text-sm text-gray-600">{t('caseStudies.totalProjects')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{availableIndustries.length}</div>
                <div className="text-sm text-gray-600">{t('caseStudies.industries')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                  <Users2 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {[...new Set(allTagStudies.map(s => s.client.name))].length}
                </div>
                <div className="text-sm text-gray-600">{t('caseStudies.clients')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {allTagStudies.filter(s => s.featured).length}
                </div>
                <div className="text-sm text-gray-600">{t('caseStudies.featured')}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {caseStudies.length > 0 ? (
            <>
              {/* Results summary */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-500">
                  {hasActiveFilters 
                    ? t('caseStudies.filteredResults').replace('${count}', caseStudies.length.toString()).replace('${total}', allTagStudies.length.toString())
                    : t('caseStudies.showing').replace('${count}', caseStudies.length.toString())
                  }
                </p>
                
                {caseStudies.length !== allTagStudies.length && (
                  <p className="text-sm text-gray-400">
                    {t('caseStudies.totalInTag').replace('${count}', allTagStudies.length.toString())}
                  </p>
                )}
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentStudies.map((study) => (
                  <CaseStudyCard key={study.id} caseStudy={study} />
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
                  ? t('caseStudies.noFilteredResults') 
                  : t('caseStudies.noStudiesForTag')
                }
              </h3>
              <p className="text-gray-500 mb-6">
                {hasActiveFilters 
                  ? t('caseStudies.noFilteredResultsDescription')
                  : t('caseStudies.noStudiesForTagDescription').replace('${tag}', tagDisplayName)
                }
              </p>
              {hasActiveFilters ? (
                <Button onClick={clearFilters}>{t('caseStudies.clearFilters')}</Button>
              ) : (
                <Button onClick={() => router.push('/resources/case-studies')}>
                  {t('caseStudies.backToAllStudies')}
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
CaseStudyTagPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default CaseStudyTagPage;