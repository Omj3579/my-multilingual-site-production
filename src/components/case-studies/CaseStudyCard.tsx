import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Building2, ArrowRight, Award, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CaseStudyCardProps {
  caseStudy: {
    id: string;
    slug: string;
    title: { en: string; hu: string; de: string };
    description: { en: string; hu: string; de: string };
    summary: { en: string; hu: string; de: string };
    image: string;s
    thumbnailImage?: string;
    date: string;
    client: {
      name: string;
      company?: string;
    };
    industry: string;
    projectType?: string;
    featured: boolean;
    customUrl?: string;
    results: {
      metrics: Array<{
        label: { en: string; hu: string; de: string };
        value: string;
        improvement?: string;
      }>;
    };
    tags: string[];
  };
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  const { language, translations } = useLanguage();
  
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Use custom URL if available, otherwise default case study URL
  const studyUrl = caseStudy.customUrl || `/resources/case-studies/${caseStudy.slug}`;
  const displayImage = caseStudy.thumbnailImage || caseStudy.image;

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      {displayImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={displayImage}
            alt={caseStudy.title[language]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {caseStudy.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-[#3b82f6] text-white text-xs font-medium rounded-full">
                {t('caseStudies.featured')}
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
              {caseStudy.industry}
            </span>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center text-xs font-medium text-[#3b82f6] bg-[#eff6ff] px-2 py-1 rounded-full">
            <Award className="h-3 w-3 mr-1" />
            {t('resources.types.case-study')}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            <span>
              {new Date(caseStudy.date).toLocaleDateString(
                language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE'
              )}
            </span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-[#3b82f6] transition-colors">
          <Link href={studyUrl}>
            {caseStudy.title[language]}
          </Link>
        </h3>
        
        {/* Client */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Building2 className="h-4 w-4 mr-2 text-gray-400" />
          <span className="font-medium">{caseStudy.client.name}</span>
          {caseStudy.projectType && (
            <>
              <span className="mx-2 text-gray-400">•</span>
              <span>{caseStudy.projectType}</span>
            </>
          )}
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {caseStudy.summary?.[language] || caseStudy.description[language]}
        </p>
        
        {/* Key Result */}
        {caseStudy.results.metrics.length > 0 && (
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <div className="flex items-center mb-1">
              <TrendingUp className="h-4 w-4 text-[#3b82f6] mr-2" />
              <div className="text-xs font-medium text-gray-600">
                {t('caseStudies.keyResult')}:
              </div>
            </div>
            <div className="text-sm font-semibold text-[#3b82f6]">
              {caseStudy.results.metrics[0].value} {caseStudy.results.metrics[0].label[language]}
              {caseStudy.results.metrics[0].improvement && (
                <span className="text-green-600 ml-2">
                  (+{caseStudy.results.metrics[0].improvement})
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Footer */}
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Target className="h-3 w-3 text-gray-400 mr-1" />
              <span className="text-xs text-gray-500">{caseStudy.industry}</span>
            </div>
            
            <Link 
              href={studyUrl}
              className="text-[#3b82f6] hover:text-[#2563eb] transition-colors flex items-center text-sm font-medium"
            >
              {t('caseStudies.readMore')}
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
        
        {/* Tags */}
        {caseStudy.tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-1">
              {caseStudy.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
              {caseStudy.tags.length > 3 && (
                <span className="px-2 py-1 text-gray-400 text-xs">
                  +{caseStudy.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};