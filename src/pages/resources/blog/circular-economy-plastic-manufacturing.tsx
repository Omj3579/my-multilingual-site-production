import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { getBlogPostBySlug } from '@/data/blogPostsData';

const CircularEconomyPlasticManufacturingPost = () => {
  const { language } = useLanguage();
  
  // Get the blog post data
  const blogPost = getBlogPostBySlug('circular-economy-plastic-manufacturing');
  
  if (!blogPost) {
    return (
      <ResourcesLayout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/resources/blog" className="text-blue-600 hover:text-blue-800">
            Back to Blog
          </Link>
        </div>
      </ResourcesLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{blogPost.title[language]} | Flair Plastic Blog</title>
        <meta name="description" content={blogPost.description[language]} />
        {blogPost.seoKeywords && (
          <meta name="keywords" content={blogPost.seoKeywords.join(', ')} />
        )}
        <meta property="og:title" content={blogPost.title[language]} />
        <meta property="og:description" content={blogPost.description[language]} />
        {blogPost.image && <meta property="og:image" content={blogPost.image} />}
        <meta property="og:type" content="article" />
        <meta name="author" content={typeof blogPost.author.name === 'string' ? blogPost.author.name : blogPost.author.name[language]} />
        <meta name="article:published_time" content={blogPost.date} />
        <meta name="article:section" content="Blog" />
        {blogPost.tags && blogPost.tags.map(tag => (
          <meta key={tag} name="article:tag" content={tag} />
        ))}
      </Head>

      <ResourcesLayout>
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Back to Blog */}
          <div className="mb-6">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-8">
            {/* Featured Badge */}
            {blogPost.featured && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {blogPost.title[language]}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-6">
              {blogPost.description[language]}
            </p>

            {/* Meta Information */}            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{typeof blogPost.author.name === 'string' ? blogPost.author.name : blogPost.author.name[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString(language as string)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {blogPost.image && (
              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title[language]}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: blogPost.content[language] 
              }} 
            />
          </div>

          {/* Author Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              {blogPost.author.avatar && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={blogPost.author.avatar}
                    alt={typeof blogPost.author.name === 'string' ? blogPost.author.name : blogPost.author.name[language]}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>                <h3 className="font-semibold text-gray-900 mb-1">
                  {typeof blogPost.author.name === 'string' ? blogPost.author.name : blogPost.author.name[language]}
                </h3>
                <p className="text-gray-600 mb-2">
                  {blogPost.author.role[language as keyof typeof blogPost.author.role]}
                </p>
                <p className="text-sm text-gray-500">
                  Contributing expert insights on sustainable manufacturing and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/resources/blog/tags/${tag}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SEO Keywords */}
          {blogPost.seoKeywords && blogPost.seoKeywords.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.seoKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link
                href="/resources/blog"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>                <div className="text-sm text-gray-500">
                Published on {new Date(blogPost.date).toLocaleDateString(language as string)}
              </div>
            </div>
          </div>
        </article>
      </ResourcesLayout>
    </>
  );
};

export default CircularEconomyPlasticManufacturingPost;
