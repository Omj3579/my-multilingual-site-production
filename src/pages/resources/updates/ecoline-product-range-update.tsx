import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { getUpdateBySlug } from '@/data/updatesData';

const EcoLineProductRangeUpdate = () => {
  const { language } = useLanguage();
  
  // Get the update data
  const updateItem = getUpdateBySlug('ecoline-product-range-update');

  if (!updateItem) {
    return (
      <ResourcesLayout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Update Not Found</h1>
          <p className="text-gray-600 mb-6">The requested update could not be found.</p>
          <Link href="/resources/updates" className="text-blue-600 hover:text-blue-800">
            Back to Updates
          </Link>
        </div>
      </ResourcesLayout>
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

  const title = updateItem.title[language as keyof typeof updateItem.title];
  const description = updateItem.description[language as keyof typeof updateItem.description];
  const content = updateItem.content[language as keyof typeof updateItem.content];

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <>
      <Head>
        <title>{title} | STAR-PLUS Updates</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={updateItem.tags.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={updateItem.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://star-plus.com/resources/updates/ecoline-product-range-update`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={updateItem.image} />
        
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": title,
              "description": description,
              "image": updateItem.image,
              "datePublished": updateItem.date,
              "dateModified": updateItem.updatedAt || updateItem.date,
              "author": {
                "@type": "Person",
                "name": typeof updateItem.author.name === 'string' ? updateItem.author.name : updateItem.author.name[language as keyof typeof updateItem.author.name],
                "jobTitle": updateItem.author.role[language as keyof typeof updateItem.author.role]
              },
              "publisher": {
                "@type": "Organization",
                "name": "STAR-PLUS",
                "logo": "https://star-plus.com/logo.png"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://star-plus.com/resources/updates/ecoline-product-range-update`
              }
            })
          }}
        />
      </Head>

      <ResourcesLayout>
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Back to Updates */}
          <div className="mb-6">
            <Link
              href="/resources/updates"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Updates
            </Link>
          </div>

          {/* Header */}
          <header className="mb-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {updateItem.updateCategory && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {updateItem.updateCategory.replace('-', ' ')}
                </span>
              )}
              {updateItem.priority && (
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(updateItem.priority)}`}>
                  {updateItem.priority} priority
                </span>
              )}
              {updateItem.version && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  v{updateItem.version}
                </span>
              )}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-6">
              {description}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(updateItem.date, language as string)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{updateItem.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{typeof updateItem.author.name === 'string' ? updateItem.author.name : updateItem.author.name[language as keyof typeof updateItem.author.name]}</span>
              </div>
            </div>

            {/* Featured Image */}
            {updateItem.image && (
              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={updateItem.image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Update Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Information</h3>
                <dl className="space-y-3">
                  {updateItem.updateCategory && (
                    <>
                      <dt className="text-sm font-medium text-gray-500">Category</dt>
                      <dd className="text-sm text-gray-900 capitalize">{updateItem.updateCategory.replace('-', ' ')}</dd>
                    </>
                  )}
                  {updateItem.version && (
                    <>
                      <dt className="text-sm font-medium text-gray-500">Version</dt>
                      <dd className="text-sm text-gray-900">{updateItem.version}</dd>
                    </>
                  )}
                  {updateItem.priority && (
                    <>
                      <dt className="text-sm font-medium text-gray-500">Priority</dt>
                      <dd className="text-sm text-gray-900 capitalize">{updateItem.priority}</dd>
                    </>
                  )}
                  {updateItem.changeType && (
                    <>
                      <dt className="text-sm font-medium text-gray-500">Change Type</dt>
                      <dd className="text-sm text-gray-900 capitalize">{updateItem.changeType.replace('-', ' ')}</dd>
                    </>
                  )}
                  {updateItem.affectedProducts && updateItem.affectedProducts.length > 0 && (
                    <>
                      <dt className="text-sm font-medium text-gray-500">Affected Products</dt>
                      <dd className="text-sm text-gray-900">
                        {updateItem.affectedProducts.join(', ')}
                      </dd>
                    </>
                  )}
                </dl>
              </div>

              {/* Tags */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {updateItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-4">
                  {updateItem.author.avatar && (
                    <Image
                      src={updateItem.author.avatar}
                      alt={typeof updateItem.author.name === 'string' ? updateItem.author.name : updateItem.author.name[language as keyof typeof updateItem.author.name]}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">
                      {typeof updateItem.author.name === 'string' ? updateItem.author.name : updateItem.author.name[language as keyof typeof updateItem.author.name]}
                    </div>
                    <div className="text-sm text-gray-600">
                      {updateItem.author.role[language as keyof typeof updateItem.author.role]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Updates */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Updates</h3>
                <div className="space-y-4">
                  <Link href="/resources/updates/manufacturing-system-upgrade-2024" className="block group">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      Manufacturing System Upgrade 2024
                    </div>
                    <div className="text-xs text-gray-500 mt-1">System • Enhancement</div>
                  </Link>
                  <Link href="/resources/updates/api-version-3-new-features" className="block group">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      API Version 3.0 New Features
                    </div>
                    <div className="text-xs text-gray-500 mt-1">API • Feature Release</div>
                  </Link>
                  <Link href="/resources/updates/security-patch-january-2024" className="block group">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      Security Patch January 2024
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Security • Patch</div>
                  </Link>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/resources/updates"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View all updates →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </ResourcesLayout>
    </>
  );
};

export default EcoLineProductRangeUpdate;
