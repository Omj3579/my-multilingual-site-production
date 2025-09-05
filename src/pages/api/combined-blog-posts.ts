import { NextApiRequest, NextApiResponse } from 'next';

// Import blog-specific data with error handling
let blogPosts: any[] = [];
let customBlogs: any[] = [];

// Try to import blog data
try {
  const blogData = require('@/data/blogPostsData');
  blogPosts = blogData.blogPosts || [];
} catch (error) {
  console.log('blogPostsData not found, using empty array');
  blogPosts = [];
}

try {
  const customBlogData = require('@/data/customBlogPostsRegistry');
  customBlogs = customBlogData.customBlogPosts || [];
} catch (error) {
  console.log('customBlogPostsRegistry not found, using empty array');
  customBlogs = [];
}

// Transform blog posts to standardized format
const transformBlogPost = (blog: any) => ({
  id: blog.id,
  title: blog.title,
  description: blog.description || blog.excerpt,
  excerpt: blog.excerpt,
  content: blog.content,
  slug: blog.slug,
  image: blog.image || blog.featuredImage || blog.thumbnailImage,
  thumbnailImage: blog.thumbnailImage || blog.image,
  date: blog.date,
  author: blog.author,
  readTime: blog.readTime || 5,
  tags: blog.tags || [],  category: blog.category || 'blog',
  featured: blog.featured || false,
  customUrl: blog.customUrl || `/resources/blog/${blog.slug}`
});

// Helper function to merge regular blog posts with custom ones
const mergeBlogPosts = () => {
  // Filter out regular posts that have been overridden by custom ones
  const filteredRegular = blogPosts.filter(
    regularPost => !customBlogs.some(customPost => customPost.id === regularPost.id)
  );
  
  // Transform and combine
  const transformedRegular = filteredRegular.map(transformBlogPost).filter(post => post !== null);
  const transformedCustom = customBlogs.map(transformBlogPost).filter(post => post !== null);
  
  return [
    ...transformedRegular,
    ...transformedCustom
  ];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { featured, tag, author, limit, search, debug } = req.query;

    let allBlogPosts = mergeBlogPosts();

    // Filter by featured if requested
    if (featured === 'true') {
      allBlogPosts = allBlogPosts.filter(post => post.featured === true);
    }

    // Filter by tag if specified
    if (tag && typeof tag === 'string') {
      allBlogPosts = allBlogPosts.filter(post => 
        post.tags.some((postTag: string) => postTag.toLowerCase() === tag.toLowerCase())
      );
    }

    // Filter by author if specified
    if (author && typeof author === 'string') {
      allBlogPosts = allBlogPosts.filter(post => 
        post.author?.id === author || post.author?.name?.toLowerCase().includes(author.toLowerCase())
      );
    }

    // Search functionality
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      allBlogPosts = allBlogPosts.filter(post => {
        const searchableContent = [
          post.title?.en || '',
          post.title?.hu || '',
          post.title?.de || '',
          post.description?.en || '',
          post.description?.hu || '',
          post.description?.de || '',
          post.excerpt?.en || '',
          post.excerpt?.hu || '',
          post.excerpt?.de || '',
          ...(post.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Sort by date (newest first)
    allBlogPosts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    // Apply limit if specified
    if (limit && typeof limit === 'string') {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum)) {
        allBlogPosts = allBlogPosts.slice(0, limitNum);
      }
    }

    // Debug information
    if (debug === 'true') {
      const debugInfo = {
        regular: blogPosts.length,
        custom: customBlogs.length,
        total: allBlogPosts.length,
        filters: {
          featured: featured === 'true',
          tag: tag || null,
          author: author || null,
          search: search || null,
          limit: limit || null
        },
        availableTags: [...new Set(allBlogPosts.flatMap(post => post.tags))].sort(),
        availableAuthors: [...new Set(allBlogPosts.map(post => post.author?.name).filter(Boolean))].sort()
      };

      return res.status(200).json({
        blogPosts: allBlogPosts,
        debug: debugInfo
      });
    }

    // Return blog posts array
    res.status(200).json(allBlogPosts);
  } catch (error) {
    console.error('Error in combined-blog-posts API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch blog posts',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}