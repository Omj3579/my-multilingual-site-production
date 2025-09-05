import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft, AlertTriangle } from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import CaseStudyTemplate from '@/components/posts/templates/CaseStudyTemplate';

// Data types
import { CaseStudy } from '@/data/caseStudiesData';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

interface RelatedPost {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  readTime: number;
}

const DynamicCaseStudiesPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { language } = useLanguage();
  
  // Define category based on the current route
  const category = 'case-studies';
  
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!slug) return;
    
    async function fetchPost() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Try to fetch from multiple sources
        const sources = [
          `/api/combined-case-studies`,
          `/posts/${slug}/data.json`, // Individual post data
          `/posts/resources.json`, // Resource listing
        ];
        
        let postFound = false;
        let rawData = null;
        let resourceData = null;
        
        // First try the API endpoint
        try {
          const apiRes = await fetch(sources[0]);
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            const posts = Array.isArray(apiData) ? apiData : apiData['case-studies'] || apiData.posts || [];
            const foundPost = posts.find((p: CaseStudy) => p.slug === slug);
            if (foundPost) {
              setCaseStudy(foundPost);
              postFound = true;
            }
          }
        } catch (e) {
          console.log('API not available, falling back to static data');
        }
        
        // If not found in API, try individual post data
        if (!postFound) {
          try {
            const postRes = await fetch(sources[1]);
            if (postRes.ok) {
              rawData = await postRes.json();
              postFound = true;
            }
          } catch (e) {
            console.log('No individual post data found');
          }
        }
        
        // Also fetch from resources list for metadata
        try {
          const resourceRes = await fetch(sources[2]);
          if (resourceRes.ok) {
            const resources = await resourceRes.json();
            resourceData = resources.find((r: any) => r.slug === slug);
          }
        } catch (e) {
          console.log('No resource data found');
        }
        
        // If no data found, show error
        if (!postFound) {
          setError('Case study not found');
          return;
        }
        
        // Fetch related posts based on tags
        if (caseStudy && caseStudy.tags && caseStudy.tags.length > 0) {
          await fetchRelatedPosts(caseStudy.tags, caseStudy.slug);
        }
        
      } catch (error) {
        console.error('Error loading case-studies:', error);
        setError('Failed to load case studies');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPost();
  }, [slug]);
  
  async function fetchRelatedPosts(tags: string[], currentSlug: string) {
    try {
      // Fetch related posts from the same category
      const response = await fetch(`/api/combined-case-studies`);
      if (response.ok) {
        const data = await response.json();
        const posts = Array.isArray(data) ? data : data['case-studies'] || data.posts || [];
        
        // Filter posts with similar tags
        const related = posts
          .filter((post: any) => 
            post.slug !== currentSlug && 
            post.tags?.some((tag: string) => tags.includes(tag))
          )
          .slice(0, 3);
        
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  }

  if (isLoading) {
    return (
      <ResourcesLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading case studies...</p>
          </div>
        </div>
      </ResourcesLayout>
    );
  }

  if (error || !caseStudy) {
    return (
      <ResourcesLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error || 'Case studies Not Found'}
            </h1>
            <p className="text-gray-600 mb-6">
              The requested case studies could not be found or may have been moved.
            </p>
            <Link
              href="/resources/case-studies"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Case studies
            </Link>
          </div>
        </div>
      </ResourcesLayout>
    );
  }

  const pageTitle = caseStudy?.title[language] || `${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}`;
  const pageDescription = caseStudy?.description[language] || `Read our latest ${category.replace('-', ' ')}`;

  return (
    <ResourcesLayout>
      <Head>
        <title>{`${pageTitle} | Flair-Plastic`}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        {caseStudy?.image && <meta property="og:image" content={caseStudy.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {caseStudy?.image && <meta name="twitter:image" content={caseStudy.image} />}
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/resources" className="text-gray-500 hover:text-gray-700">
                Resources
              </Link>
              <span className="text-gray-400">/</span>
              <Link href={`/resources/case-studies`} className="text-gray-500 hover:text-gray-700 capitalize">
                {category.replace('-', ' ')}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium truncate max-w-md">
                {caseStudy?.title[language] || 'Case Study'}
              </span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {caseStudy && (
                <CaseStudyTemplate 
                  caseStudy={caseStudy} 
                  language={language as 'en' | 'hu' | 'de'} 
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Back Navigation */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <Link
                    href={`/resources/case-studies`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back to {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </Link>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4">Related Case Studies</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/resources/case-studies/${post.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            {post.image && (
                              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                />
                              </div>
                            )}
                            <div className="flex-grow min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {post.readTime} min read
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </ResourcesLayout>
  );
};

export default DynamicCaseStudiesPage;
