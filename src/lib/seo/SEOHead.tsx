import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';
import { SEOData, generateMetaTags, generateHreflangLinks } from './utils';

interface SEOHeadProps {
  seoData: SEOData;
}

/**
 * SEO Head component that handles all meta tags, structured data, and technical SEO
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ seoData }) => {
  const metaTags = generateMetaTags(seoData);
  const hreflangLinks = seoData.hreflang ? generateHreflangLinks(seoData.hreflang) : [];

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{seoData.title}</title>
      
      {Object.entries(metaTags).map(([key, value]) => {
        if (key.startsWith('og:') || key.startsWith('twitter:') || key.startsWith('article:')) {
          return <meta key={key} property={key} content={String(value)} />;
        }
        return <meta key={key} name={key} content={String(value)} />;
      })}
      
      {/* Canonical URL */}
      {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
      
      {/* Hreflang links for multilingual SEO */}
      {hreflangLinks.map(link => (
        <link
          key={link.hrefLang}
          rel={link.rel}
          hrefLang={link.hrefLang}
          href={link.href}
        />
      ))}
      
      {/* Favicon and app icons */}
      <link rel="icon" href="/flair-logo-32.png" type="image/png" />
      <link rel="icon" href="/logos/flair_plastic_logo_cmyk_full_-_MAIN.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/logos/flair_plastic_logo_cmyk_full_-_MAIN.png" type="image/png" sizes="16x16" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logos/flair_plastic_logo_cmyk_full_-_MAIN.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://flair-plastic.hu" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//flair-plastic.hu" />
      
      {/* Structured data (JSON-LD) */}
      {seoData.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData)
          }}
        />
      )}
      
      {/* Performance hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/fonts/Inter-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Inter-SemiBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
  );
};

/**
 * Higher-order component for pages that need SEO
 */
export function withSEO<P extends object>(
  Component: React.ComponentType<P>,
  seoDataGenerator: (props: P, router: NextRouter) => SEOData
) {
  return function SEOWrappedComponent(props: P) {
    const router = useRouter();
    const seoData = seoDataGenerator(props, router);
    
    return (
      <>
        <SEOHead seoData={seoData} />
        <Component {...props} />
      </>
    );
  };
}

/**
 * Hook for dynamically updating SEO data
 */
export function useSEO(seoData: SEOData) {
  React.useEffect(() => {
    // Update page title
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (seoData.canonical) {
      if (canonical) {
        canonical.setAttribute('href', seoData.canonical);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', seoData.canonical);
        document.head.appendChild(canonical);
      }
    }
    
    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    if (seoData.ogTitle) updateMetaProperty('og:title', seoData.ogTitle);
    if (seoData.ogDescription) updateMetaProperty('og:description', seoData.ogDescription);
    if (seoData.ogImage) updateMetaProperty('og:image', seoData.ogImage);
    if (seoData.canonical) updateMetaProperty('og:url', seoData.canonical);
  }, [seoData]);
}
