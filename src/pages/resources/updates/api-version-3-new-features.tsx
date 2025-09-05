import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { getUpdateBySlug } from '@/data/updatesData';

const ApiVersion3NewFeatures = () => {
  const { language } = useLanguage();
  
  // Get the update data
  const updateItem = getUpdateBySlug('api-version-3-new-features');

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
        <title>{title} | STAR-PLUS</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      <ResourcesLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/resources/updates"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Updates
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-8 py-6 border-b border-gray-200">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {updateItem.priority && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(updateItem.priority)}`}>
                      {updateItem.priority.charAt(0).toUpperCase() + updateItem.priority.slice(1)} Priority
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    <Code className="w-3 h-3 mr-1 inline" />
                    {updateItem.category}
                  </span>
                  {updateItem.updateCategory && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {updateItem.updateCategory}
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                <p className="text-xl text-gray-600 mb-6">{description}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(updateItem.date, language)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {updateItem.readTime} min read
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {typeof updateItem.author.name === 'string' ? updateItem.author.name : updateItem.author.name[language as keyof typeof updateItem.author.name]}
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {updateItem.tags.join(', ')}
                  </div>
                </div>
              </div>

              {/* Feature Announcement Banner */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <div className="flex items-start">
                  <Zap className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-green-800">
                      {language === 'hu' ? 'Új API funkciók elérhetők' : 
                       language === 'de' ? 'Neue API-Funktionen verfügbar' : 
                       'New API Features Available'}
                    </h3>
                    <p className="mt-1 text-sm text-green-700">
                      {language === 'hu' ? 'Az API 3.0 verzió jelentős teljesítménybeli és funkcionalitásbeli fejlesztéseket hoz.' :
                       language === 'de' ? 'API Version 3.0 bringt bedeutende Leistungs- und Funktionalitätsverbesserungen.' :
                       'API Version 3.0 introduces significant performance and functionality improvements.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {updateItem.image && (
                <div className="relative h-64 md:h-80">
                  <Image
                    src={updateItem.image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="px-8 py-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>

              {/* API Version Summary Box */}
              <div className="mx-8 mb-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  {language === 'hu' ? 'API verzió összefoglalója' : 
                   language === 'de' ? 'API-Versions-Zusammenfassung' : 
                   'API Version Summary'}
                </h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'API verzió' : language === 'de' ? 'API-Version' : 'API Version'}
                    </dt>
                    <dd className="text-blue-900">v3.0.0</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Kiadás dátuma' : language === 'de' ? 'Veröffentlichungsdatum' : 'Release Date'}
                    </dt>
                    <dd className="text-blue-900">{formatDate(updateItem.date, language)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Kompatibilitás' : language === 'de' ? 'Kompatibilität' : 'Compatibility'}
                    </dt>
                    <dd className="text-blue-900">
                      {language === 'hu' ? 'Visszafelé kompatibilis v2.x verzióval' : 
                       language === 'de' ? 'Rückwärtskompatibel mit v2.x' : 
                       'Backward compatible with v2.x'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Új végpontok' : language === 'de' ? 'Neue Endpunkte' : 'New Endpoints'}
                    </dt>
                    <dd className="text-blue-900">
                      {language === 'hu' ? '15 új REST endpoint' : 
                       language === 'de' ? '15 neue REST-Endpunkte' : 
                       '15 new REST endpoints'}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* New Features */}
              <div className="mx-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'hu' ? 'Új funkciók' : 
                   language === 'de' ? 'Neue Funktionen' : 
                   'New Features'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'GraphQL támogatás - rugalmas adatlekérdezéshez' : 
                       language === 'de' ? 'GraphQL-Unterstützung - für flexible Datenabfragen' : 
                       'GraphQL support for flexible data querying'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'Webhook integráció valós idejű értesítésekhez' : 
                       language === 'de' ? 'Webhook-Integration für Echtzeit-Benachrichtigungen' : 
                       'Webhook integration for real-time notifications'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'Továbbfejlesztett rate limiting és kvóta kezelés' : 
                       language === 'de' ? 'Verbessertes Rate-Limiting und Quota-Management' : 
                       'Enhanced rate limiting and quota management'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'Batch műveletek nagyobb hatékonyságért' : 
                       language === 'de' ? 'Batch-Operationen für höhere Effizienz' : 
                       'Batch operations for improved efficiency'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'OpenAPI 3.0 specifikáció és automatikus dokumentáció' : 
                       language === 'de' ? 'OpenAPI 3.0-Spezifikation und automatische Dokumentation' : 
                       'OpenAPI 3.0 specification and automatic documentation'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* API Documentation Link */}
              <div className="mx-8 mb-8 bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <Globe className="w-8 h-8 text-blue-600 mr-4" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {language === 'hu' ? 'API dokumentáció' : 
                       language === 'de' ? 'API-Dokumentation' : 
                       'API Documentation'}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {language === 'hu' ? 'Fedezze fel az új API funkciókat az interaktív dokumentációban' : 
                       language === 'de' ? 'Erkunden Sie die neuen API-Funktionen in der interaktiven Dokumentation' : 
                       'Explore the new API features in our interactive documentation'}
                    </p>
                  </div>
                  <Link
                    href="/api/docs"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {language === 'hu' ? 'Dokumentáció megtekintése' : 
                     language === 'de' ? 'Dokumentation anzeigen' : 
                     'View Documentation'}
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center">
                  {updateItem.author.avatar && (
                    <Image
                      src={updateItem.author.avatar}
                      alt={typeof updateItem.author.name === 'string' ? updateItem.author.name : updateItem.author.name[language as keyof typeof updateItem.author.name]}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4"
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
            </div>

            {/* Related Updates */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'hu' ? 'Kapcsolódó frissítések' : language === 'de' ? 'Verwandte Updates' : 'Related Updates'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/resources/updates/manufacturing-system-upgrade-2024" className="block group p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    Manufacturing System Upgrade 2024
                  </div>
                  <div className="text-xs text-gray-500 mt-1">System • Upgrade</div>
                </Link>
                <Link href="/resources/updates/security-patch-january-2024" className="block group p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    Security Patch January 2024
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Security • Patch</div>
                </Link>
                <Link href="/resources/updates/ecoline-product-range-update" className="block group p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    EcoLine Product Range Update
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Product • Enhancement</div>
                </Link>
              </div>
              
              <div className="mt-6">
                <Link
                  href="/resources/updates"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {language === 'hu' ? 'Összes frissítés megtekintése' : language === 'de' ? 'Alle Updates anzeigen' : 'View all updates'} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ResourcesLayout>
    </>
  );
};

export default ApiVersion3NewFeatures;
