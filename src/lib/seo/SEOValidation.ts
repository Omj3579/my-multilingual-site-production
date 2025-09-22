/**
 * SEO Validation and Testing Guide
 * Tools and instructions for validating your plastic injection moulding SEO
 */

export interface SEOValidationResult {
  url: string;
  title: {
    present: boolean;
    length: number;
    optimized: boolean;
    issues: string[];
  };
  description: {
    present: boolean;
    length: number;
    optimized: boolean;
    issues: string[];
  };
  structuredData: {
    schemas: number;
    types: string[];
    valid: boolean;
    issues: string[];
  };
  performance: {
    coreWebVitals: boolean;
    imageOptimization: boolean;
    issues: string[];
  };
  overall: {
    score: number;
    status: 'excellent' | 'good' | 'needs-improvement' | 'poor';
    recommendations: string[];
  };
}

/**
 * STEP-BY-STEP SEO VALIDATION GUIDE
 */
export const SEOValidationGuide = {
  
  /**
   * Step 1: Test Your Local Development
   */
  localTesting: {
    instructions: [
      '1. Open http://localhost:3000/services/plastic-injection-moulding in your browser',
      '2. Right-click and select "View Page Source"',
      '3. Look for the SEO elements we just added:',
      '   - <title> tag with your service name',
      '   - <meta name="description"> with service description',
      '   - Multiple <script type="application/ld+json"> with structured data',
      '4. Use browser developer tools (F12) to check console for any errors'
    ],
    
    whatToLookFor: [
      '✅ Title: "Plastic Injection Moulding Services | Flair Plastic - European Manufacturing Excellence"',
      '✅ Meta description starting with "Professional plastic injection moulding services..."',
      '✅ Keywords meta tag with manufacturing terms',
      '✅ Open Graph tags (og:title, og:description, og:image)',
      '✅ Twitter Card tags',
      '✅ 4+ JSON-LD structured data scripts (Service, Organization, Breadcrumb, FAQ)'
    ]
  },

  /**
   * Step 2: Google Rich Results Test
   */
  googleRichResultsTest: {
    url: 'https://search.google.com/test/rich-results',
    instructions: [
      '1. Go to https://search.google.com/test/rich-results',
      '2. Enter your URL: http://localhost:3000/services/plastic-injection-moulding',
      '3. Click "Test URL"',
      '4. Wait for Google to analyze your page',
      '5. Review the results for detected structured data'
    ],
    
    expectedResults: [
      '✅ Service schema detected',
      '✅ Organization schema detected', 
      '✅ BreadcrumbList schema detected',
      '✅ FAQPage schema detected',
      '✅ No errors or warnings in structured data'
    ],
    
    commonIssues: [
      'Missing required properties - Check our schema implementation',
      'Invalid URL format - Use full production URL when live',
      'Image not accessible - Ensure service images exist'
    ]
  },

  /**
   * Step 3: Schema Markup Validator
   */
  schemaValidator: {
    url: 'https://validator.schema.org/',
    instructions: [
      '1. Go to https://validator.schema.org/',
      '2. Copy the JSON-LD from your page source',
      '3. Paste into the validator',
      '4. Click "RUN TEST"',
      '5. Fix any validation errors'
    ],
    
    testData: `
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Plastic Injection Moulding",
  "description": "Professional plastic injection moulding services with precision engineering for automotive, medical, and industrial applications.",
  "provider": {
    "@type": "Organization",
    "name": "Flair Plastic",
    "url": "https://flair-plastic.hu"
  }
}
    `
  },

  /**
   * Step 4: PageSpeed Insights
   */
  pageSpeedInsights: {
    url: 'https://pagespeed.web.dev/',
    instructions: [
      '1. Go to https://pagespeed.web.dev/',
      '2. Enter your service page URL',
      '3. Click "Analyze"',
      '4. Review Core Web Vitals scores',
      '5. Check SEO section for any issues'
    ],
    
    targetScores: {
      performance: '90+ (Good)',
      accessibility: '100 (Perfect)',
      bestPractices: '100 (Perfect)', 
      seo: '100 (Perfect)',
      coreWebVitals: 'All green'
    }
  },

  /**
   * Step 5: Local SEO Testing Tools
   */
  localTestingTools: {
    browserExtensions: [
      'SEO META in 1 CLICK - Chrome extension for quick SEO overview',
      'Structured Data Testing Tool - Validate structured data',
      'Lighthouse - Built into Chrome DevTools for performance testing'
    ],
    
    manualChecks: [
      'View page source to verify all SEO tags are present',
      'Check Network tab in DevTools for image optimization',
      'Use Console to verify Core Web Vitals tracking',
      'Test responsive design for mobile SEO'
    ]
  }
};

/**
 * PRODUCTION TESTING CHECKLIST
 */
export const ProductionSEOChecklist = {
  
  preDeployment: [
    '☐ All service pages have unique titles and descriptions',
    '☐ Structured data validates without errors',
    '☐ Images have proper alt tags and are optimized',
    '☐ Internal linking between services is implemented',
    '☐ Sitemap includes all service pages',
    '☐ Robots.txt allows crawling of service pages'
  ],
  
  postDeployment: [
    '☐ Google Search Console property verified',
    '☐ Sitemap submitted to Google Search Console',
    '☐ Rich Results testing with production URLs',
    '☐ Core Web Vitals monitoring setup',
    '☐ Analytics tracking service page views',
    '☐ Search Console showing page indexing'
  ],
  
  monitoring: [
    '☐ Weekly Search Console performance reports',
    '☐ Monthly Core Web Vitals review',
    '☐ Quarterly SEO audit with new tools',
    '☐ Annual competitor analysis for keyword rankings'
  ]
};

/**
 * QUICK SEO DIAGNOSTIC FUNCTION
 * Use this to programmatically check your SEO implementation
 */
export function diagnoseSEO(): SEOValidationResult | null {
  if (typeof window === 'undefined') return null;

  const result: SEOValidationResult = {
    url: window.location.href,
    title: {
      present: false,
      length: 0,
      optimized: false,
      issues: []
    },
    description: {
      present: false,
      length: 0,
      optimized: false,
      issues: []
    },
    structuredData: {
      schemas: 0,
      types: [],
      valid: true,
      issues: []
    },
    performance: {
      coreWebVitals: false,
      imageOptimization: false,
      issues: []
    },
    overall: {
      score: 0,
      status: 'poor',
      recommendations: []
    }
  };

  // Check title
  const titleElement = document.querySelector('title');
  if (titleElement) {
    result.title.present = true;
    result.title.length = titleElement.textContent?.length || 0;
    result.title.optimized = result.title.length >= 30 && result.title.length <= 60;
    if (!result.title.optimized) {
      result.title.issues.push(`Title length ${result.title.length} should be 30-60 characters`);
    }
  } else {
    result.title.issues.push('Title tag is missing');
  }

  // Check description
  const descriptionElement = document.querySelector('meta[name="description"]');
  if (descriptionElement) {
    result.description.present = true;
    result.description.length = descriptionElement.getAttribute('content')?.length || 0;
    result.description.optimized = result.description.length >= 120 && result.description.length <= 160;
    if (!result.description.optimized) {
      result.description.issues.push(`Description length ${result.description.length} should be 120-160 characters`);
    }
  } else {
    result.description.issues.push('Meta description is missing');
  }

  // Check structured data
  const structuredDataElements = document.querySelectorAll('script[type="application/ld+json"]');
  result.structuredData.schemas = structuredDataElements.length;
  
  structuredDataElements.forEach(element => {
    try {
      const data = JSON.parse(element.textContent || '');
      if (data['@type']) {
        result.structuredData.types.push(data['@type']);
      }
    } catch (e) {
      result.structuredData.valid = false;
      result.structuredData.issues.push('Invalid JSON-LD syntax detected');
    }
  });

  if (result.structuredData.schemas === 0) {
    result.structuredData.issues.push('No structured data found');
  }

  // Calculate overall score
  let score = 0;
  if (result.title.present && result.title.optimized) score += 25;
  if (result.description.present && result.description.optimized) score += 25;
  if (result.structuredData.schemas >= 3) score += 25;
  if (result.structuredData.valid) score += 25;

  result.overall.score = score;
  result.overall.status = score >= 90 ? 'excellent' : 
                         score >= 70 ? 'good' : 
                         score >= 50 ? 'needs-improvement' : 'poor';

  // Generate recommendations
  if (result.title.issues.length > 0) {
    result.overall.recommendations.push('Optimize page title length and keywords');
  }
  if (result.description.issues.length > 0) {
    result.overall.recommendations.push('Improve meta description length and content');
  }
  if (result.structuredData.schemas < 3) {
    result.overall.recommendations.push('Add more structured data schemas (Service, Organization, FAQ)');
  }

  return result;
}

/**
 * RUN THIS IN BROWSER CONSOLE ON YOUR SERVICE PAGE
 */
export const browserConsoleTest = `
// Copy and paste this into browser console on http://localhost:3000/services/plastic-injection-moulding

console.log('🔍 Flair Plastic SEO Diagnostic Test');
console.log('=====================================');

// Check for our SEO implementation
const title = document.querySelector('title')?.textContent;
const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
const schemas = document.querySelectorAll('script[type="application/ld+json"]').length;
const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');

console.log('✓ Title:', title);
console.log('✓ Description:', description?.substring(0, 100) + '...');
console.log('✓ Structured Data Schemas:', schemas);
console.log('✓ Open Graph Title:', ogTitle);

if (schemas >= 4 && title?.includes('Plastic Injection Moulding') && description?.includes('precision engineering')) {
  console.log('🎉 SUCCESS: All SEO elements are properly implemented!');
  console.log('Next steps:');
  console.log('1. Test with Google Rich Results Test');
  console.log('2. Validate schemas at validator.schema.org');
  console.log('3. Check Core Web Vitals in PageSpeed Insights');
} else {
  console.log('⚠️  Issues detected - check implementation');
}
`;

export default {
  SEOValidationGuide,
  ProductionSEOChecklist,
  diagnoseSEO,
  browserConsoleTest
};