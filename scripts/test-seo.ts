/**
 * SEO Testing and Validation Script
 * Run this to test SEO implementation
 */

import { SEOAnalyzer } from '../src/lib/seo/monitoring';
import { generateSEOData } from '../src/lib/seo/utils';

// Test SEO data generation
async function testSEODataGeneration() {
  console.log('🧪 Testing SEO Data Generation...\n');
  
  const testCases = [
    {
      pageType: 'home' as const,
      language: 'en' as const,
      description: 'Home page EN'
    },
    {
      pageType: 'services' as const,
      language: 'hu' as const,
      description: 'Services page HU'
    },
    {
      pageType: 'products' as const,
      language: 'de' as const,
      description: 'Products page DE'
    },
    {
      pageType: 'custom' as const,
      language: 'en' as const,
      customTitle: 'Custom Blog Post',
      customDescription: 'This is a test blog post',
      slug: '/blog/test-post',
      tags: ['test', 'seo', 'blog'],
      description: 'Custom blog post'
    }
  ];

  testCases.forEach(testCase => {
    try {
      const seoData = generateSEOData(testCase);
      console.log(`✅ ${testCase.description}:`);
      console.log(`   Title: ${seoData.title}`);
      console.log(`   Description: ${seoData.description?.substring(0, 100)}...`);
      console.log(`   Keywords: ${seoData.keywords?.slice(0, 3).join(', ')}`);
      console.log(`   Canonical: ${seoData.canonical}`);
      console.log(`   Structured Data: ${seoData.structuredData ? 'Present' : 'Missing'}\n`);
    } catch (error) {
      console.error(`❌ Error testing ${testCase.description}:`, error);
    }
  });
}

// Test sitemap generation
async function testSitemapGeneration() {
  console.log('🗺️  Testing Sitemap Generation...\n');
  
  try {
    const response = await fetch('http://localhost:3000/api/sitemap.xml');
    if (response.ok) {
      console.log('✅ Sitemap is accessible at /api/sitemap.xml');
      const sitemapContent = await response.text();
      const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
      console.log(`   URLs found: ${urlCount}`);
    } else {
      console.log('❌ Sitemap not accessible');
    }
  } catch {
    console.log('⚠️  Cannot test sitemap (server not running)');
  }
}

// Test robots.txt generation
async function testRobotsGeneration() {
  console.log('🤖 Testing Robots.txt Generation...\n');
  
  try {
    const response = await fetch('http://localhost:3000/api/robots.txt');
    if (response.ok) {
      console.log('✅ Robots.txt is accessible at /api/robots.txt');
      const robotsContent = await response.text();
      console.log('   Content preview:', robotsContent.split('\n')[0]);
    } else {
      console.log('❌ Robots.txt not accessible');
    }
  } catch {
    console.log('⚠️  Cannot test robots.txt (server not running)');
  }
}

// Test web manifest generation
async function testWebManifestGeneration() {
  console.log('📱 Testing Web Manifest Generation...\n');
  
  try {
    const response = await fetch('http://localhost:3000/api/site.webmanifest');
    if (response.ok) {
      console.log('✅ Web manifest is accessible at /api/site.webmanifest');
      const manifest = await response.json();
      console.log(`   App name: ${manifest.name}`);
      console.log(`   Icons: ${manifest.icons?.length || 0} defined`);
    } else {
      console.log('❌ Web manifest not accessible');
    }
  } catch {
    console.log('⚠️  Cannot test web manifest (server not running)');
  }
}

// Test SEO analyzer
function testSEOAnalyzer() {
  console.log('🔍 Testing SEO Analyzer...\n');
  
  if (typeof document !== 'undefined') {
    const analyzer = new SEOAnalyzer();
    const analysis = analyzer.analyze();
    
    console.log('✅ SEO Analysis Results:');
    console.log(`   Title: ${analysis.title}`);
    console.log(`   Description: ${analysis.description}`);
    console.log(`   Word Count: ${analysis.wordCount}`);
    console.log(`   H1 Count: ${analysis.headings.h1}`);
    console.log(`   Images: ${analysis.images.total} total, ${analysis.images.missingAlt} missing alt`);
    console.log(`   Structured Data: ${analysis.structuredData ? 'Present' : 'Missing'}`);
    console.log(`   Mobile Friendly: ${analysis.mobileFriendly ? 'Yes' : 'No'}`);
  } else {
    console.log('⚠️  SEO Analyzer requires browser environment');
  }
}

// SEO Health Check
function performSEOHealthCheck() {
  console.log('🏥 SEO Health Check...\n');
  
  const checks = [
    {
      name: 'SEO Config File',
      test: () => {
        try {
          require('../src/lib/seo/config');
          return true;
        } catch {
          return false;
        }
      }
    },
    {
      name: 'SEO Utils File',
      test: () => {
        try {
          require('../src/lib/seo/utils');
          return true;
        } catch {
          return false;
        }
      }
    },
    {
      name: 'SEO Head Component',
      test: () => {
        try {
          require('../src/lib/seo/SEOHead');
          return true;
        } catch {
          return false;
        }
      }
    },
    {
      name: 'SEO Monitoring',
      test: () => {
        try {
          require('../src/lib/seo/monitoring');
          return true;
        } catch {
          return false;
        }
      }
    },
    {
      name: 'Sitemap API',
      test: () => {
        try {
          require('../src/pages/api/sitemap.xml');
          return true;
        } catch {
          return false;
        }
      }
    },
    {
      name: 'Robots API',
      test: () => {
        try {
          require('../src/pages/api/robots.txt');
          return true;
        } catch {
          return false;
        }
      }
    }
  ];

  checks.forEach(check => {
    const result = check.test();
    console.log(`${result ? '✅' : '❌'} ${check.name}: ${result ? 'OK' : 'MISSING'}`);
  });
}

// Main test runner
async function runSEOTests() {
  console.log('🚀 SEO Implementation Test Suite\n');
  console.log('='.repeat(50) + '\n');

  performSEOHealthCheck();
  console.log('\n' + '-'.repeat(50) + '\n');
  
  await testSEODataGeneration();
  console.log('-'.repeat(50) + '\n');
  
  await testSitemapGeneration();
  console.log('-'.repeat(50) + '\n');
  
  await testRobotsGeneration();
  console.log('-'.repeat(50) + '\n');
  
  await testWebManifestGeneration();
  console.log('-'.repeat(50) + '\n');
  
  testSEOAnalyzer();
  
  console.log('\n' + '='.repeat(50));
  console.log('🎉 SEO Test Suite Complete!');
  console.log('='.repeat(50));
}

// Run tests if this file is executed directly
if (require.main === module) {
  runSEOTests().catch(console.error);
}

export {
  testSEODataGeneration,
  testSitemapGeneration,
  testRobotsGeneration,
  testWebManifestGeneration,
  testSEOAnalyzer,
  performSEOHealthCheck,
  runSEOTests
};
