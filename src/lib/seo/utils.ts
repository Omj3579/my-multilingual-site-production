import { SEO_CONFIG, PAGE_SEO_CONFIG, Language, PageType } from './config';

// Core SEO utilities
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: object;
  hreflang?: Record<Language, string>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleTags?: string[];
}

/**
 * Generate SEO data for a specific page
 */
export function generateSEOData({
  pageType,
  language,
  customTitle,
  customDescription,
  customKeywords,
  slug,
  image,
  publishedTime,
  modifiedTime,
  author,
  tags,
  breadcrumbs
}: {
  pageType: PageType | 'custom';
  language: Language;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
  slug?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
}): SEOData {
  const config = PAGE_SEO_CONFIG[pageType as PageType];
  const siteConfig = SEO_CONFIG.site;
  
  // Build title
  let title = customTitle;
  if (!title && config) {
    title = config.title[language];
  }
  if (!title) {
    title = siteConfig.name;
  }
  
  // Build description
  let description = customDescription;
  if (!description && config) {
    description = config.description[language];
  }
  if (!description) {
    description = siteConfig.description[language];
  }
  
  // Build keywords
  let keywords = customKeywords || [];
  if (keywords.length === 0) {
    keywords = [...siteConfig.keywords[language]];
  }
  
  // Build canonical URL
  const canonical = slug 
    ? `${siteConfig.domain}${language !== siteConfig.defaultLanguage ? `/${language}` : ''}${slug}`
    : `${siteConfig.domain}${language !== siteConfig.defaultLanguage ? `/${language}` : ''}`;
  
  // Build hreflang
  const hreflang: Record<Language, string> = {} as Record<Language, string>;
  siteConfig.languages.forEach(lang => {
    const langSlug = slug || '';
    hreflang[lang as Language] = `${siteConfig.domain}${lang !== siteConfig.defaultLanguage ? `/${lang}` : ''}${langSlug}`;
  });
  
  // Build Open Graph image
  let ogImage = image;
  if (!ogImage) {
    // Use context-specific Open Graph images if available
    const siteWithOG = siteConfig as typeof siteConfig & { ogImages?: Record<string, string> };
    if (siteWithOG.ogImages) {
      const ogImages = siteWithOG.ogImages;
      switch (pageType) {
        case 'home':
          ogImage = ogImages.home || ogImages.default;
          break;
        case 'services':
          ogImage = ogImages.services || ogImages.default;
          break;
        case 'products':
          ogImage = ogImages.products || ogImages.default;
          break;
        case 'contact':
          ogImage = ogImages.contact || ogImages.default;
          break;
        case 'sustainability':
          ogImage = ogImages.company || ogImages.default;
          break;
        case 'resources':
          ogImage = ogImages.default;
          break;
        default:
          ogImage = ogImages.default || siteConfig.logo;
      }
    } else {
      ogImage = siteConfig.logo;
    }
  }
  
  return {
    title,
    description,
    keywords,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogType: publishedTime ? 'article' : 'website',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterCard: 'summary_large_image',
    hreflang,
    breadcrumbs,
    author,
    publishedTime,
    modifiedTime,
    articleTags: tags,
    structuredData: generateStructuredData({
      pageType,
      language,
      title,
      description,
      canonical,
      image: ogImage,
      publishedTime,
      modifiedTime,
      author,
      tags,
      breadcrumbs
    })
  };
}

/**
 * Generate structured data (JSON-LD) for pages
 */
export function generateStructuredData({
  pageType,
  language,
  title,
  description,
  canonical,
  image,
  publishedTime,
  modifiedTime,
  author,
  tags,
  breadcrumbs
}: {
  pageType: PageType | 'custom';
  language: Language;
  title: string;
  description: string;
  canonical: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
}): object[] {
  const structuredData: object[] = [];
  
  // Always include Organization
  structuredData.push(SEO_CONFIG.jsonLD.organization);
  
  // Always include WebSite
  structuredData.push(SEO_CONFIG.jsonLD.website);
  
  // Add WebPage schema
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "inLanguage": language,
    "isPartOf": {
      "@type": "WebSite",
      "name": SEO_CONFIG.site.name,
      "url": SEO_CONFIG.site.domain
    }
  };
  structuredData.push(webPage);
  
  // Add Breadcrumb schema if available
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
    structuredData.push(breadcrumbList);
  }
  
  // Add Article schema for blog posts and news
  if (publishedTime && (pageType === 'custom' || canonical.includes('/resources/'))) {
    const article = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "author": {
        "@type": "Organization",
        "name": author || SEO_CONFIG.site.author
      },
      "publisher": SEO_CONFIG.jsonLD.organization,
      "url": canonical,
      "inLanguage": language
    };
    
    if (tags && tags.length > 0) {
      const articleWithKeywords = article as Record<string, unknown>;
      articleWithKeywords.keywords = tags.join(', ');
    }
    
    structuredData.push(article);
  }
  
  // Add Service schema for services pages
  if (pageType === 'services' || canonical.includes('/services/')) {
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description,
      "provider": SEO_CONFIG.jsonLD.organization,
      "serviceType": "Manufacturing Service",
      "areaServed": "Europe",
      "url": canonical
    };
    structuredData.push(service);
  }
  
  // Add Product schema for products pages
  if (pageType === 'products' || canonical.includes('/products/')) {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": title,
      "description": description,
      "image": image,
      "manufacturer": SEO_CONFIG.jsonLD.organization,
      "url": canonical,
      "category": "Plastic Products"
    };
    structuredData.push(productSchema);
  }
  
  return structuredData;
}

/**
 * Generate meta tags for Next.js Head component
 */
export function generateMetaTags(seoData: SEOData) {
  const tags: Record<string, string | boolean> = {};
  
  // Basic meta tags
  if (seoData.description) tags['description'] = seoData.description;
  if (seoData.keywords && seoData.keywords.length > 0) tags['keywords'] = seoData.keywords.join(', ');
  if (seoData.author) tags['author'] = seoData.author;
  
  // Open Graph
  if (seoData.ogTitle) tags['og:title'] = seoData.ogTitle;
  if (seoData.ogDescription) tags['og:description'] = seoData.ogDescription;
  if (seoData.ogImage) tags['og:image'] = seoData.ogImage;
  if (seoData.ogType) tags['og:type'] = seoData.ogType;
  if (seoData.canonical) tags['og:url'] = seoData.canonical;
  tags['og:site_name'] = SEO_CONFIG.site.name;
  
  // Twitter Card
  tags['twitter:card'] = seoData.twitterCard || 'summary_large_image';
  if (seoData.twitterTitle) tags['twitter:title'] = seoData.twitterTitle;
  if (seoData.twitterDescription) tags['twitter:description'] = seoData.twitterDescription;
  if (seoData.twitterImage) tags['twitter:image'] = seoData.twitterImage;
  if (SEO_CONFIG.site.twitterHandle) tags['twitter:site'] = SEO_CONFIG.site.twitterHandle;
  
  // Article meta
  if (seoData.publishedTime) tags['article:published_time'] = seoData.publishedTime;
  if (seoData.modifiedTime) tags['article:modified_time'] = seoData.modifiedTime;
  if (seoData.articleTags) {
    seoData.articleTags.forEach(tag => {
      tags[`article:tag:${tag}`] = tag;
    });
  }
  
  // Robots
  if (seoData.noIndex) tags['robots'] = 'noindex' + (seoData.noFollow ? ',nofollow' : ',follow');
  else if (seoData.noFollow) tags['robots'] = 'index,nofollow';
  
  // Additional technical meta
  tags['theme-color'] = SEO_CONFIG.site.themeColor;
  tags['msapplication-TileColor'] = SEO_CONFIG.site.themeColor;
  
  return tags;
}

/**
 * Generate hreflang links for multilingual SEO
 */
export function generateHreflangLinks(hreflang: Record<Language, string>) {
  const links: Array<{ rel: string; hrefLang: string; href: string }> = [];
  
  Object.entries(hreflang).forEach(([lang, url]) => {
    links.push({
      rel: 'alternate',
      hrefLang: lang,
      href: url
    });
  });
  
  // Add x-default
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: hreflang[SEO_CONFIG.site.defaultLanguage as Language]
  });
  
  return links;
}

/**
 * Validate and sanitize SEO input
 */
export function sanitizeSEOInput(input: string, maxLength: number = 160): string {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/\s+/g, ' ')
    .substring(0, maxLength)
    .replace(/[<>]/g, ''); // Remove basic HTML chars
}

/**
 * Generate social media sharing URLs
 */
export function generateSharingUrls(url: string, title: string, description: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };
}
