import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';
import { getNewsBySlug } from '../../../data/newsData';
import type { NewsArticle } from '../../../data/newsData';

export default function FlairPlasticAnnouncesExpansion() {
  const router = useRouter();
  const [language, setLanguage] = useState<string>('en');
  const [newsArticle, setNewsArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get language from router or localStorage
    const urlLang = router.locale || 'en';
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en';
    const currentLang = urlLang !== 'en' ? urlLang : storedLang;
    setLanguage(currentLang);

    // Fetch news data
    const article = getNewsBySlug('flair-plastic-announces-major-expansion');
    if (article) {
      setNewsArticle(article);
    } else {
      // Redirect to news page if article not found
      router.push('/resources/news');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading news article...</p>
        </div>
      </div>
    );
  }

  if (!newsArticle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">News Article Not Found</h1>
          <p className="text-gray-600 mb-6">The requested news article could not be found.</p>
          <Link
            href="/resources/news"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All News
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string, lang: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'hu' ? 'hu-HU' : lang === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const title = newsArticle.title[language as keyof typeof newsArticle.title];
  const description = newsArticle.description[language as keyof typeof newsArticle.description];
  const content = newsArticle.content[language as keyof typeof newsArticle.content];

  return (
    <>
      <Head>
        <title>{title} | STAR-PLUS News</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={newsArticle.tags.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={newsArticle.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://star-plus.com/resources/news/flair-plastic-announces-major-expansion`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={newsArticle.image} />
        
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": title,
              "description": description,
              "image": newsArticle.image,
              "datePublished": newsArticle.date,
              "dateModified": newsArticle.updatedAt || newsArticle.date,
              "author": {
                "@type": "Person",
                "name": typeof newsArticle.author.name === 'string' ? newsArticle.author.name : newsArticle.author.name[language as keyof typeof newsArticle.author.name],
                "jobTitle": newsArticle.author.role[language as keyof typeof newsArticle.author.role]
              },
              "publisher": {
                "@type": "Organization",
                "name": "STAR-PLUS",
                "logo": "https://star-plus.com/logo.png"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://star-plus.com/resources/news/flair-plastic-announces-major-expansion`
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
              href="/resources/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to News
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {newsArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CalendarDaysIcon className="h-4 w-4 mr-2" />
                  {formatDate(newsArticle.date, language as string)}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  {newsArticle.readTime} min read
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-2" />
                  {typeof newsArticle.author.name === 'string' ? newsArticle.author.name : newsArticle.author.name[language as keyof typeof newsArticle.author.name]}
                </div>
                {newsArticle.location && (
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {newsArticle.location}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img
            src={newsArticle.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Article Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Information</h3>
                <div className="space-y-3">
                  {newsArticle.source && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Source</dt>
                      <dd className="text-sm text-gray-900">{newsArticle.source}</dd>
                    </div>
                  )}
                  {newsArticle.location && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="text-sm text-gray-900">{newsArticle.location}</dd>
                    </div>
                  )}
                  {newsArticle.newsCategory && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Category</dt>
                      <dd className="text-sm text-gray-900 capitalize">{newsArticle.newsCategory.replace('-', ' ')}</dd>
                    </div>
                  )}
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-4">
                  {newsArticle.author.avatar && (
                    <img
                      src={newsArticle.author.avatar}
                      alt={typeof newsArticle.author.name === 'string' ? newsArticle.author.name : newsArticle.author.name[language as keyof typeof newsArticle.author.name]}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">
                      {typeof newsArticle.author.name === 'string' ? newsArticle.author.name : newsArticle.author.name[language as keyof typeof newsArticle.author.name]}
                    </div>
                    <div className="text-sm text-gray-600">
                      {newsArticle.author.role[language as keyof typeof newsArticle.author.role]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related News */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related News</h3>
                <div className="space-y-4">
                  <Link href="/resources/news/sustainability-award-green-manufacturing-excellence" className="block group">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      Green Manufacturing Excellence Award
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Award • Sustainability</div>
                  </Link>
                  <Link href="/resources/news/strategic-partnership-tech-innovation-lab" className="block group">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      Strategic Partnership with Tech Innovation Lab
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Partnership • Innovation</div>
                  </Link>
                  <Link href="/resources/news/million-tons-recycled-milestone" className="block group">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      Million Tons Recycled Milestone
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Milestone • Environment</div>
                  </Link>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/resources/news"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View all news →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
