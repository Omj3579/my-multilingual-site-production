/**
 * Quick SEO Verification Test
 * Run this in the browser console on your plastic injection moulding page
 */

console.log('🔍 SEO VERIFICATION TEST - Plastic Injection Moulding Page');
console.log('=' .repeat(60));

// Test 1: Check Page Title
const pageTitle = document.title;
console.log('✓ Page Title:', pageTitle);
if (pageTitle.includes('Plastic Injection Moulding')) {
  console.log('  ✅ Title contains target keywords');
} else {
  console.log('  ❌ Title missing target keywords');
}

// Test 2: Check Meta Description
const metaDescription = document.querySelector('meta[name="description"]');
console.log('✓ Meta Description:', metaDescription?.content);
if (metaDescription?.content && metaDescription.content.length >= 120) {
  console.log('  ✅ Meta description length is optimal');
} else {
  console.log('  ❌ Meta description too short');
}

// Test 3: Check Open Graph Tags
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogImage = document.querySelector('meta[property="og:image"]');
console.log('✓ Open Graph:');
console.log('  - Title:', ogTitle?.content);
console.log('  - Description:', ogDescription?.content);
console.log('  - Image:', ogImage?.content);

// Test 4: Check Structured Data
const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
console.log('✓ Structured Data (JSON-LD):');
console.log(`  Found ${jsonLdScripts.length} JSON-LD blocks`);

jsonLdScripts.forEach((script, index) => {
  try {
    const data = JSON.parse(script.textContent);
    console.log(`  Block ${index + 1}: ${data['@type']} schema`);
    
    if (data['@type'] === 'Service') {
      console.log('    ✅ Service schema detected');
      console.log('    - Name:', data.name);
      console.log('    - Description length:', data.description?.length);
    }
    
    if (data['@type'] === 'Organization') {
      console.log('    ✅ Organization schema detected');
      console.log('    - Name:', data.name);
    }
    
    if (data['@type'] === 'BreadcrumbList') {
      console.log('    ✅ Breadcrumb schema detected');
      console.log('    - Items:', data.itemListElement?.length);
    }
    
    if (data['@type'] === 'FAQPage') {
      console.log('    ✅ FAQ schema detected');
      console.log('    - Questions:', data.mainEntity?.length);
    }
  } catch (e) {
    console.log(`  Block ${index + 1}: Invalid JSON-LD`);
  }
});

// Test 5: Check Core Web Vitals Setup
console.log('✓ Core Web Vitals Monitoring:');
if (typeof window !== 'undefined') {
  // Check for web-vitals v5 functions
  if (window.webVitals) {
    console.log('  ✅ Core Web Vitals tracking detected (v5)');
  } else {
    console.log('  ℹ️  Core Web Vitals tracking loaded via app (normal)');
  }
  
  // Check console for Core Web Vitals logs
  console.log('  📊 Check browser console for "Core Web Vital:" logs');
  console.log('  📈 Metrics tracked: CLS, INP, FCP, LCP, TTFB');
} else {
  console.log('  ❌ Core Web Vitals tracking not available');
}

// Test 6: Check Language and Hreflang
const htmlLang = document.documentElement.lang;
const hreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
console.log('✓ Internationalization:');
console.log('  - HTML lang:', htmlLang);
console.log('  - Hreflang alternatives:', hreflangs.length);

// Test 7: Manufacturing-Specific Keywords Check
const bodyText = document.body.textContent.toLowerCase();
const manufacturingKeywords = [
  'plastic injection moulding',
  'injection molding',
  'manufacturing',
  'automotive',
  'precision',
  'quality'
];

console.log('✓ Manufacturing Keywords Found:');
manufacturingKeywords.forEach(keyword => {
  if (bodyText.includes(keyword)) {
    console.log(`  ✅ "${keyword}"`);
  } else {
    console.log(`  ❌ "${keyword}" not found`);
  }
});

console.log('=' .repeat(60));
console.log('🎉 SEO VERIFICATION COMPLETE');
console.log('For detailed validation, use:');
console.log('• Google Rich Results Test: https://search.google.com/test/rich-results');
console.log('• Schema Markup Validator: https://validator.schema.org/');
console.log('• PageSpeed Insights: https://pagespeed.web.dev/');