import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Building2, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import { getCaseStudyBySlug } from '@/data/caseStudiesData';

const MedicalDeviceSterilizationPackagingCaseStudy = () => {
  const { language } = useLanguage();
  
  // Get the case study data
  const caseStudy = getCaseStudyBySlug('medical-device-sterilization-packaging');
  
  if (!caseStudy) {
    return (
      <ResourcesLayout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link href="/resources/case-studies" className="text-blue-600 hover:text-blue-800">
            Back to Case Studies
          </Link>
        </div>
      </ResourcesLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title[language]} | Flair Plastic Case Studies</title>
        <meta name="description" content={caseStudy.description[language]} />
        <meta property="og:title" content={caseStudy.title[language]} />
        <meta property="og:description" content={caseStudy.description[language]} />
        {caseStudy.image && <meta property="og:image" content={caseStudy.image} />}
        <meta property="og:type" content="article" />
        <meta name="author" content={caseStudy.author.name} />
        <meta name="article:published_time" content={caseStudy.date} />
        <meta name="article:section" content="Case Studies" />
        {caseStudy.tags && caseStudy.tags.map(tag => (
          <meta key={tag} name="article:tag" content={tag} />
        ))}
      </Head>

      <ResourcesLayout>
        <article className="max-w-6xl mx-auto px-4 py-8">
          {/* Back to Case Studies */}
          <div className="mb-6">
            <Link
              href="/resources/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>

          {/* Header */}
          <header className="mb-8">
            {/* Featured Badge */}
            {caseStudy.featured && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Featured Case Study
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {caseStudy.title[language]}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-6">
              {caseStudy.description[language]}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{caseStudy.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(caseStudy.date).toLocaleDateString(language as string)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{caseStudy.readTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {caseStudy.image && (
              <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title[language]}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Client Overview */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              Client Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Company</h3>
                <p className="text-gray-600">{caseStudy.client.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Industry</h3>
                <p className="text-gray-600">{caseStudy.client.industry}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Company Size</h3>
                <p className="text-gray-600">{caseStudy.client.size}</p>
              </div>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: caseStudy.challenge[language] 
                }} 
              />
            </div>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: caseStudy.solution[language] 
                }} 
              />
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              Results Achieved
            </h2>
            <div className="prose prose-lg max-w-none mb-6">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: caseStudy.results[language] 
                }} 
              />
            </div>

            {/* Metrics */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technologies Used */}
          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "{caseStudy.testimonial.quote[language]}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-gray-900">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {caseStudy.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/resources/case-studies/tags/${tag}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Case Studies
              </Link>
              
              <div className="text-sm text-gray-500">
                Published on {new Date(caseStudy.date).toLocaleDateString(language as string)}
              </div>
            </div>
          </div>
        </article>
      </ResourcesLayout>
    </>
  );
};

export default MedicalDeviceSterilizationPackagingCaseStudy;
