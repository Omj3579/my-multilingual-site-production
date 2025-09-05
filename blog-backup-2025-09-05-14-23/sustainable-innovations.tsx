import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ResourcesLayout from '@/components/layouts/ResourcesLayout';

// Custom components for this page only
import InteractiveChart from '@/components/blog/InteractiveChart';
import VideoEmbed from '@/components/common/VideoEmbed';

const SustainableInnovationsPost = () => {
  const { language, translations } = useLanguage();
  
  // Translation helper
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  // Post metadata - this should match what's in customBlogPostsRegistry
  const postData = {
    id: 'custom-sustainable-innovations',
    date: '2024-04-20',
    readTime: 7,
    author: 'Dr. Anna Kovács',
    tags: ['sustainability', 'innovation', 'manufacturing', 'interactive-content']
  };

  // Content depends on language
  const title = language === 'en' 
    ? 'Sustainable Innovations in Plastic Manufacturing (Custom)'
    : language === 'hu'
      ? 'Fenntartható innovációk a műanyaggyártásban (Egyedi)'
      : 'Nachhaltige Innovationen in der Kunststoffherstellung (Benutzerdefiniert)';
      
  const description = language === 'en'
    ? 'Discover the latest sustainable innovations in plastic manufacturing with our custom-designed, interactive content experience.'
    : language === 'hu' 
      ? 'Fedezze fel a műanyaggyártás legújabb fenntartható innovációit egyedi tervezésű, interaktív tartalmi élményünkkel.'
      : 'Entdecken Sie die neuesten nachhaltigen Innovationen in der Kunststoffherstellung mit unserem maßgeschneiderten, interaktiven Content-Erlebnis.';

  return (
    <>
      <Head>
        <title>{title} | Flair Plastic</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={postData.tags.join(', ')} />
      </Head>

      {/* Custom Hero Section */}
      <section className="bg-gradient-to-r from-[#f9f5ff] to-[#f0eafe] py-16">
        <div className="container mx-auto px-4">
          <Link 
            href="/resources/blog" 
            className="inline-flex items-center text-gray-600 mb-8 hover:text-[#fa9b6b]"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {t('blog.backToAllPosts')}
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-gray-600 mb-6">
                {description}
              </p>
              
              <div className="flex flex-wrap items-center text-gray-500 mb-8">
                <span className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(postData.date).toLocaleDateString(
                    language === 'en' ? 'en-US' : language === 'hu' ? 'hu-HU' : 'de-DE'
                  )}
                </span>
                <span className="flex items-center mr-4">
                  <Clock className="h-4 w-4 mr-1" />
                  {t('blog.readTime').replace('${minutes}', postData.readTime.toString())}
                </span>
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {postData.author}
                </span>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/blog/sustainable-innovations.jpg" 
                  alt={title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {language === 'en' && (
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl">
                  The plastic manufacturing industry is undergoing a significant transformation as sustainability 
                  becomes a central focus. At Flair Plastic, we're leading the charge with innovative approaches 
                  to reduce environmental impact.
                </p>
                
                <h2>Biodegradable Alternatives</h2>
                <p>
                  One of the most promising developments is the creation of truly biodegradable plastics 
                  that break down completely in natural environments.
                </p>
                
                {/* Interactive element - only in custom posts */}
                <div className="my-8 p-6 bg-gray-50 rounded-lg">
                  <h3>Comparison: Traditional vs. Biodegradable Plastics</h3>
                  <p>Explore the differences in breakdown time between traditional and biodegradable plastics:</p>
                  <div className="h-64 my-4">
                    <InteractiveChart />
                  </div>
                </div>
                
                <h2>Closed-Loop Manufacturing</h2>
                <p>
                  We've implemented closed-loop manufacturing processes that minimize waste by reusing 
                  materials multiple times before they reach the end of their lifecycle.
                </p>
                
                {/* Video embed - easy in custom posts */}
                <div className="my-8 aspect-video">
                  <VideoEmbed 
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    title="Sustainable Manufacturing Process"
                  />
                </div>
                
                <h2>Energy-Efficient Production</h2>
                <p>
                  By investing in state-of-the-art equipment and optimizing our manufacturing processes, 
                  we've reduced energy consumption by up to 30% compared to traditional methods.
                </p>
                
                {/* Image gallery with captions */}
                <div className="grid grid-cols-3 gap-4 my-8">
                  <div>
                    <div className="relative h-40 bg-gray-200">
                      {/* Image 1 */}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Solar panels powering our facility</p>
                  </div>
                  <div>
                    <div className="relative h-40 bg-gray-200">
                      {/* Image 2 */}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Energy-efficient machinery</p>
                  </div>
                  <div>
                    <div className="relative h-40 bg-gray-200">
                      {/* Image 3 */}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">LED lighting throughout facility</p>
                  </div>
                </div>
              </div>
            )}
            
            {language === 'hu' && (
              <div className="prose prose-lg max-w-none">
                {/* Hungarian content would go here */}
                <p>Hungarian version of the custom content...</p>
              </div>
            )}
            
            {language === 'de' && (
              <div className="prose prose-lg max-w-none">
                {/* German content would go here */}
                <p>German version of the custom content...</p>
              </div>
            )}
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-sm font-medium text-gray-900 mb-3">{t('blog.tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {postData.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/resources/blog/tags/${tag}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

// Use the ResourcesLayout for this page
SustainableInnovationsPost.getLayout = function getLayout(page) {
  return <ResourcesLayout>{page}</ResourcesLayout>;
};

export default SustainableInnovationsPost;