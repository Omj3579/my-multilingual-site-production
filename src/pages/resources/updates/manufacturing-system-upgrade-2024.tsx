import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { getUpdateBySlug } from '@/data/updatesData';

const ManufacturingSystemUpgrade2024 = () => {
  const { language } = useLanguage();
  
  // Get the update data
  const updateItem = getUpdateBySlug('manufacturing-system-upgrade-2024');

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
                  )}                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {updateItem.category}
                  </span>
                  {updateItem.updateCategory && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
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

              {/* Update Summary Box */}
              <div className="mx-8 mb-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  {language === 'hu' ? 'Frissítés összefoglalója' : language === 'de' ? 'Update-Zusammenfassung' : 'Update Summary'}
                </h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Verzió' : language === 'de' ? 'Version' : 'Version'}
                    </dt>
                    <dd className="text-blue-900">v2.4.1</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Kiadás dátuma' : language === 'de' ? 'Veröffentlichungsdatum' : 'Release Date'}
                    </dt>
                    <dd className="text-blue-900">{formatDate(updateItem.date, language)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Érintett rendszerek' : language === 'de' ? 'Betroffene Systeme' : 'Affected Systems'}
                    </dt>
                    <dd className="text-blue-900">
                      {language === 'hu' ? 'Gyártási vezérlőrendszer, ERP integráció' : 
                       language === 'de' ? 'Fertigungssteuerungssystem, ERP-Integration' : 
                       'Manufacturing Control System, ERP Integration'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-blue-700">
                      {language === 'hu' ? 'Tervezett karbantartás' : language === 'de' ? 'Geplante Wartung' : 'Scheduled Maintenance'}
                    </dt>
                    <dd className="text-blue-900">
                      {language === 'hu' ? '2024. március 15., 02:00-06:00' : 
                       language === 'de' ? '15. März 2024, 02:00-06:00' : 
                       'March 15, 2024, 02:00-06:00'}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Key Features */}
              <div className="mx-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'hu' ? 'Főbb újítások' : language === 'de' ? 'Wichtige Neuerungen' : 'Key Improvements'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'Teljesítmény optimalizálás - 40%-kal gyorsabb adatfeldolgozás' : 
                       language === 'de' ? 'Leistungsoptimierung - 40% schnellere Datenverarbeitung' : 
                       'Performance optimization - 40% faster data processing'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'Új valós idejű monitoring felület' : 
                       language === 'de' ? 'Neue Echtzeit-Überwachungsschnittstelle' : 
                       'New real-time monitoring interface'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'Továbbfejlesztett hibatűrés és helyreállítási funkciók' : 
                       language === 'de' ? 'Verbesserte Fehlertoleranz und Wiederherstellungsfunktionen' : 
                       'Enhanced fault tolerance and recovery features'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">
                      {language === 'hu' ? 'API kompatibilitás bővítés külső rendszerekhez' : 
                       language === 'de' ? 'Erweiterte API-Kompatibilität für externe Systeme' : 
                       'Extended API compatibility for external systems'}
                    </span>
                  </li>
                </ul>
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
                <Link href="/resources/updates/ecoline-product-range-update" className="block group p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    EcoLine Product Range Update
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Product • Enhancement</div>
                </Link>
                <Link href="/resources/updates/security-patch-january-2024" className="block group p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    Security Patch January 2024
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Security • Patch</div>
                </Link>
                <Link href="/resources/updates/api-version-3-new-features" className="block group p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    API Version 3.0 New Features
                  </div>
                  <div className="text-xs text-gray-500 mt-1">API • Feature Release</div>
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

export default ManufacturingSystemUpgrade2024;
