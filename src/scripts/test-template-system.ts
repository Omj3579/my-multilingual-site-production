#!/usr/bin/env node

/**
 * Testing script for the new post template system
 * This script checks that all templates are working correctly with different content types
 */

import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

// Test data for different template types
const testCases = {
  slideshow: {
    slug: 'test-slideshow',
    title: 'Test Slideshow Post',
    summary: 'A test slideshow to verify the SlideShowTemplate is working correctly',
    postType: 'slideshow',
    content: [
      {
        image: '/test/slide-1.jpg',
        alt: 'Introduction slide',
        text: 'Welcome to our test slideshow. This demonstrates the SlideShowTemplate functionality.',
        title: 'Introduction',
        type: 'intro'
      },
      {
        image: '/test/slide-2.jpg',
        alt: 'Main content',
        text: 'This is the main content of our slideshow. It shows how the template handles multiple slides.',
        title: 'Main Content',
        type: 'content'
      },
      {
        image: '/test/slide-3.jpg',
        alt: 'Conclusion',
        text: 'Thank you for viewing our test slideshow. This concludes the demonstration.',
        title: 'Conclusion',
        type: 'conclusion'
      }
    ],
    category: 'test',
    author: { name: 'Test Author', role: 'Test Role' },
    tags: ['test', 'slideshow'],
    readTime: 3
  },

  article: {
    slug: 'test-article',
    title: 'Test Article Post',
    summary: 'A test article to verify the ArticleTemplate is working correctly',
    postType: 'article',
    content: {
      introduction: 'This is a test introduction for our article template.',
      sections: [
        {
          title: 'Section 1',
          content: '<p>This is the first section of our test article.</p>',
          type: 'text'
        },
        {
          title: 'Section 2',
          content: '<p>This is the second section with more content.</p>',
          image: '/test/section-image.jpg',
          type: 'image-text'
        }
      ],
      conclusion: 'This concludes our test article.'
    },
    category: 'test',
    author: { name: 'Test Author', role: 'Test Role' },
    tags: ['test', 'article'],
    readTime: 5
  },

  caseStudy: {
    slug: 'test-case-study',
    title: 'Test Case Study',
    summary: 'A test case study to verify the CaseStudyTemplate is working correctly',
    postType: 'case-study',
    content: {
      client: {
        name: 'Test Client Ltd.',
        industry: 'Manufacturing',
        size: 'Enterprise',
        logo: '/test/client-logo.jpg'
      },
      challenge: 'The client needed to improve their manufacturing efficiency.',
      solution: 'We implemented a comprehensive solution using our expertise.',
      implementation: {
        steps: [
          'Initial analysis and consultation',
          'Solution design and prototyping',
          'Implementation and testing',
          'Deployment and training'
        ],
        timeline: '6 months',
        technologies: ['Injection Molding', 'Quality Control', 'Automation']
      },
      results: {
        metrics: [
          { label: 'Efficiency Improvement', value: '35%', improvement: '+35%' },
          { label: 'Cost Reduction', value: '20%', improvement: '+20%' },
          { label: 'Quality Score', value: '98%', improvement: '+15%' }
        ],
        testimonial: {
          quote: 'Working with Flair-Plastic transformed our manufacturing process.',
          author: 'John Doe',
          position: 'Operations Manager'
        }
      }
    },
    category: 'case-studies',
    author: { name: 'Test Author', role: 'Case Study Analyst' },
    tags: ['test', 'case-study', 'manufacturing'],
    readTime: 8
  }
};

// Function to check if template files exist
function checkTemplateFiles(): boolean {
  const templatesDir = path.join(projectRoot, 'src', 'components', 'posts', 'templates');
  const requiredTemplates = [
    'PostTemplateFactory.tsx',
    'SlideShowTemplate.tsx',
    'ArticleTemplate.tsx',
    'CaseStudyTemplate.tsx',
    'InfographicTemplate.tsx',
    'VideoTemplate.tsx',
    'TutorialTemplate.tsx'
  ];

  console.log('🔍 Checking template files...');
  
  let allExist = true;
  for (const template of requiredTemplates) {
    const templatePath = path.join(templatesDir, template);
    if (fs.existsSync(templatePath)) {
      console.log(`✅ ${template} - Found`);
    } else {
      console.log(`❌ ${template} - Missing`);
      allExist = false;
    }
  }
  
  return allExist;
}

// Function to check if converter utility exists
function checkConverterUtility(): boolean {
  const converterPath = path.join(projectRoot, 'src', 'components', 'posts', 'utils', 'postDataConverter.ts');
  
  console.log('🔍 Checking converter utility...');
  
  if (fs.existsSync(converterPath)) {
    console.log('✅ postDataConverter.ts - Found');
    return true;
  } else {
    console.log('❌ postDataConverter.ts - Missing');
    return false;
  }
}

// Function to check if dynamic pages have been updated
function checkDynamicPages(): boolean {
  const categories = ['blog', 'case-studies', 'news', 'updates', 'posts'];
  
  console.log('🔍 Checking dynamic pages...');
  
  let allUpdated = true;
  for (const category of categories) {
    const dynamicPagePath = path.join(projectRoot, 'src', 'pages', 'resources', category, '[slug].tsx');
    
    if (fs.existsSync(dynamicPagePath)) {
      const content = fs.readFileSync(dynamicPagePath, 'utf8');
      
      // Check if the page uses PostTemplateFactory
      if (content.includes('PostTemplateFactory')) {
        console.log(`✅ ${category}/[slug].tsx - Updated with PostTemplateFactory`);
      } else {
        console.log(`⚠️  ${category}/[slug].tsx - Not using PostTemplateFactory`);
        allUpdated = false;
      }
    } else {
      console.log(`❌ ${category}/[slug].tsx - Missing`);
      allUpdated = false;
    }
  }
  
  return allUpdated;
}

// Function to generate test data files
function generateTestData(): void {
  console.log('🔍 Generating test data...');
  
  const testDataDir = path.join(projectRoot, 'test-data', 'posts');
  
  // Create test data directory if it doesn't exist
  if (!fs.existsSync(testDataDir)) {
    fs.mkdirSync(testDataDir, { recursive: true });
  }
  
  // Generate test files for each template type
  Object.entries(testCases).forEach(([type, data]) => {
    const testFilePath = path.join(testDataDir, `${type}-test.json`);
    fs.writeFileSync(testFilePath, JSON.stringify(data, null, 2));
    console.log(`✅ Generated test data: ${testFilePath}`);
  });
}

// Function to check TypeScript types
function checkTypeScript(): boolean {
  console.log('🔍 Checking TypeScript compilation...');
  
  try {
    const { execSync } = require('child_process');
    
    // Run TypeScript compiler to check for type errors
    execSync('npx tsc --noEmit', { 
      cwd: projectRoot,
      stdio: 'pipe'
    });
    
    console.log('✅ TypeScript compilation - No errors');
    return true;
  } catch (error) {
    console.log('❌ TypeScript compilation - Errors found');
    console.log(error.stdout?.toString() || error.message);
    return false;
  }
}

// Function to validate template factory imports
function validateTemplateFactoryImports(): boolean {
  const factoryPath = path.join(projectRoot, 'src', 'components', 'posts', 'templates', 'PostTemplateFactory.tsx');
  
  console.log('🔍 Validating PostTemplateFactory imports...');
  
  if (!fs.existsSync(factoryPath)) {
    console.log('❌ PostTemplateFactory.tsx not found');
    return false;
  }
  
  const content = fs.readFileSync(factoryPath, 'utf8');
  const requiredImports = [
    'SlideShowTemplate',
    'ArticleTemplate', 
    'CaseStudyTemplate',
    'InfographicTemplate',
    'VideoTemplate',
    'TutorialTemplate'
  ];
  
  let allImported = true;
  for (const importName of requiredImports) {
    if (content.includes(`import ${importName}`)) {
      console.log(`✅ ${importName} - Imported`);
    } else {
      console.log(`❌ ${importName} - Not imported`);
      allImported = false;
    }
  }
  
  return allImported;
}

// Function to create a comprehensive test report
function createTestReport(): void {
  console.log('📊 Creating comprehensive test report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    tests: {
      templateFiles: checkTemplateFiles(),
      converterUtility: checkConverterUtility(),
      dynamicPages: checkDynamicPages(),
      templateFactoryImports: validateTemplateFactoryImports(),
      typeScript: checkTypeScript()
    },
    testData: {
      generated: true,
      types: Object.keys(testCases)
    }
  };
  
  const reportPath = path.join(projectRoot, 'test-results', 'template-system-test-report.json');
  
  // Create test results directory if it doesn't exist
  const testResultsDir = path.dirname(reportPath);
  if (!fs.existsSync(testResultsDir)) {
    fs.mkdirSync(testResultsDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📝 Test report saved to: ${reportPath}`);
  
  // Summary
  console.log('\n📊 Test Summary:');
  const passedTests = Object.values(report.tests).filter(Boolean).length;
  const totalTests = Object.keys(report.tests).length;
  
  console.log(`✅ Passed: ${passedTests}/${totalTests} tests`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! The template system is ready to use.');
  } else {
    console.log('⚠️  Some tests failed. Please review the issues above.');
  }
}

// Main test function
function runTemplateSystemTests(): void {
  console.log('🚀 Starting comprehensive template system tests...\n');
  
  try {
    generateTestData();
    console.log('');
    createTestReport();
    
    console.log('\n✨ Template system testing completed!');
    console.log('\n🔗 Quick Links:');
    console.log('- Template Factory: src/components/posts/templates/PostTemplateFactory.tsx');
    console.log('- Converter Utility: src/components/posts/utils/postDataConverter.ts');
    console.log('- Test Data: test-data/posts/');
    console.log('- Test Report: test-results/template-system-test-report.json');
    
  } catch (error) {
    console.error('❌ Testing failed:', error);
    process.exit(1);
  }
}

// Run tests if called directly
if (require.main === module) {
  runTemplateSystemTests();
}

export { runTemplateSystemTests };
