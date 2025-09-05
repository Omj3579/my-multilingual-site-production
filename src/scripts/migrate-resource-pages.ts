#!/usr/bin/env node

/**
 * Migration script to update existing resource category pages to use the new template system
 * This script updates the [slug].tsx files in each resource category to properly integrate
 * with the new PostTemplateFactory system.
 */

import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const resourceCategories = ['blog', 'case-studies', 'news', 'updates'];

// Template for the updated dynamic page component
const dynamicPageTemplate = (category: string) => `import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft, AlertTriangle } from 'lucide-react';

// Components
import ResourcesLayout from '@/components/layouts/ResourcesLayout';
import PostTemplateFactory, { PostData } from '@/components/posts/templates/PostTemplateFactory';
import { convertLegacyPost } from '@/components/posts/utils/postDataConverter';

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

const Dynamic${category.charAt(0).toUpperCase() + category.slice(1)}Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { language } = useLanguage();
  
  const [postData, setPostData] = useState<PostData | null>(null);
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
          \`/api/combined-\${category.replace('case-studies', 'case-studies')}\`,
          \`/posts/\${slug}/data.json\`, // Individual post data
          \`/posts/resources.json\`, // Resource listing
        ];
        
        let postFound = false;
        let rawData = null;
        let resourceData = null;
        
        // First try the API endpoint
        try {
          const apiRes = await fetch(sources[0]);
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            const posts = Array.isArray(apiData) ? apiData : apiData.${category} || apiData.posts || [];
            const foundPost = posts.find((p: any) => p.slug === slug);
            if (foundPost) {
              rawData = foundPost;
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
        if (!rawData && !resourceData) {
          setError('${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')} not found');
          return;
        }
        
        // Convert legacy data to new format
        const convertedPost = convertLegacyPost(rawData || {}, resourceData);
        
        // Ensure correct category and post type
        convertedPost.category = '${category}';
        
        // Auto-detect post type if not set
        if (!convertedPost.postType || convertedPost.postType === 'article') {
          if (rawData?.data && Array.isArray(rawData.data)) {
            convertedPost.postType = 'slideshow';
          } else if (convertedPost.category === 'case-studies') {
            convertedPost.postType = 'case-study';
          } else {
            convertedPost.postType = 'article';
          }
        }
        
        setPostData(convertedPost);
        
        // Fetch related posts based on tags
        if (convertedPost.tags && convertedPost.tags.length > 0) {
          await fetchRelatedPosts(convertedPost.tags, convertedPost.slug);
        }
        
      } catch (error) {
        console.error('Error loading ${category}:', error);
        setError('Failed to load ${category.replace('-', ' ')}');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPost();
  }, [slug]);
  
  async function fetchRelatedPosts(tags: string[], currentSlug: string) {
    try {
      // Fetch related posts from the same category
      const response = await fetch(\`/api/combined-\${category.replace('case-studies', 'case-studies')}\`);
      if (response.ok) {
        const data = await response.json();
        const posts = Array.isArray(data) ? data : data.${category} || data.posts || [];
        
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
            <p className="text-gray-600">Loading ${category.replace('-', ' ')}...</p>
          </div>
        </div>
      </ResourcesLayout>
    );
  }

  if (error || !postData) {
    return (
      <ResourcesLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error || '${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')} Not Found'}
            </h1>
            <p className="text-gray-600 mb-6">
              The requested ${category.replace('-', ' ')} could not be found or may have been moved.
            </p>
            <Link
              href="/resources/${category}"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </Link>
          </div>
        </div>
      </ResourcesLayout>
    );
  }

  const pageTitle = postData.title || \`\${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}\`;
  const pageDescription = postData.summary || postData.description || \`Read our latest \${category.replace('-', ' ')}\`;

  return (
    <ResourcesLayout>
      <Head>
        <title>{\`\${pageTitle} | Flair-Plastic\`}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        {postData.image && <meta property="og:image" content={postData.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {postData.image && <meta name="twitter:image" content={postData.image} />}
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
              <Link href={\`/resources/${category}\`} className="text-gray-500 hover:text-gray-700 capitalize">
                {category.replace('-', ' ')}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium truncate max-w-md">
                {postData.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <PostTemplateFactory 
                postData={postData} 
                language={language as 'en' | 'hu' | 'de'} 
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Back Navigation */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <Link
                    href={\`/resources/${category}\`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back to {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </Link>
                </div>

                {/* Post Meta */}
                {(postData.tags || postData.author || postData.readTime) && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4">Post Information</h3>
                    
                    {postData.author && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Author</p>
                        <p className="font-medium text-gray-900">{postData.author.name}</p>
                        {postData.author.role && (
                          <p className="text-sm text-gray-600">{postData.author.role}</p>
                        )}
                      </div>
                    )}

                    {postData.readTime && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Reading Time</p>
                        <p className="font-medium text-gray-900">{postData.readTime} min read</p>
                      </div>
                    )}

                    {postData.tags && postData.tags.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Tags</p>
                        <div className="flex flex-wrap gap-2">
                          {postData.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={\`/resources/tags/\${tag}\`}
                              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={\`/resources/${category}/\${post.slug}\`}
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

export default Dynamic${category.charAt(0).toUpperCase() + category.slice(1)}Page;
`;

// Function to backup existing file
function backupFile(filePath: string): void {
  if (fs.existsSync(filePath)) {
    const backupPath = filePath + '.backup';
    fs.copyFileSync(filePath, backupPath);
    console.log(`✅ Backed up ${filePath} to ${backupPath}`);
  }
}

// Function to update a dynamic page
function updateDynamicPage(category: string): void {
  const categoryFolder = category === 'case-studies' ? 'case-studies' : category;
  const slugFilePath = path.join(projectRoot, 'src', 'pages', 'resources', categoryFolder, '[slug].tsx');
  
  console.log(`\n🔄 Updating ${category} dynamic page...`);
  
  if (!fs.existsSync(slugFilePath)) {
    console.log(`⚠️  File not found: ${slugFilePath}`);
    return;
  }
  
  // Backup existing file
  backupFile(slugFilePath);
  
  // Write new template
  const newContent = dynamicPageTemplate(category);
  fs.writeFileSync(slugFilePath, newContent, 'utf8');
  
  console.log(`✅ Updated ${slugFilePath}`);
}

// Main migration function
function migrateResourcePages(): void {
  console.log('🚀 Starting migration of resource category pages to new template system...\n');
  
  try {
    resourceCategories.forEach(category => {
      updateDynamicPage(category);
    });
    
    console.log('\n✅ Migration completed successfully!');
    console.log('\n📝 Summary:');
    console.log('- Updated all resource category [slug].tsx files');
    console.log('- Added integration with PostTemplateFactory');
    console.log('- Added proper error handling and loading states');
    console.log('- Added related posts functionality');
    console.log('- Added SEO meta tags');
    console.log('- Backup files created with .backup extension');
    
    console.log('\n🔍 Next steps:');
    console.log('1. Test each category page with existing posts');
    console.log('2. Verify template factory is routing correctly');
    console.log('3. Check that related posts are working');
    console.log('4. Ensure SEO meta tags are populated correctly');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  migrateResourcePages();
}

export { migrateResourcePages };
