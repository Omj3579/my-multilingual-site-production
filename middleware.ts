/**
 * Path-based i18n Middleware
 * Handles locale detection and redirects for single domain with path prefixes
 */

import { NextRequest, NextResponse } from 'next/server';

// Configuration
const SUPPORTED_LOCALES = ['en', 'hu', 'de'] as const;
const DEFAULT_LOCALE = 'en';

type SupportedLocale = typeof SUPPORTED_LOCALES[number];

/**
 * Extract preferred locale from Accept-Language header
 */
function getPreferredLocaleFromHeader(acceptLanguage: string | null): SupportedLocale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  
  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return {
        code: code.split('-')[0].toLowerCase(),
        priority: parseFloat(q)
      };
    })
    .sort((a, b) => b.priority - a.priority);

  // Find first supported language
  for (const { code } of languages) {
    if (SUPPORTED_LOCALES.includes(code as SupportedLocale)) {
      return code as SupportedLocale;
    }
  }
  
  return DEFAULT_LOCALE;
}

/**
 * Check if pathname has locale prefix
 */
function getLocaleFromPathname(pathname: string): { locale: SupportedLocale | null; pathnameWithoutLocale: string } {
  const segments = pathname.split('/');
  const maybeLocale = segments[1];
  
  if (SUPPORTED_LOCALES.includes(maybeLocale as SupportedLocale)) {
    return {
      locale: maybeLocale as SupportedLocale,
      pathnameWithoutLocale: '/' + segments.slice(2).join('/')
    };
  }
  
  return {
    locale: null,
    pathnameWithoutLocale: pathname
  };
}

/**
 * Add security and performance headers
 */
function addSecurityHeaders(response: NextResponse): NextResponse {
  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

/**
 * Add i18n-specific headers
 */
function addI18nHeaders(response: NextResponse, locale: SupportedLocale): NextResponse {
  response.headers.set('Content-Language', locale);
  response.headers.set('Vary', 'Accept-Language');
  
  return response;
}

/**
 * Handle static assets with optimized caching
 */
function handleStaticAssets(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  
  // Check for static assets
  const isStaticAsset = /\.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$/.test(pathname);
  const isNextAsset = pathname.startsWith('/_next/');
  const isApiRoute = pathname.startsWith('/api/');
  
  if (isStaticAsset || isNextAsset || isApiRoute) {
    const response = NextResponse.next();
    
    // Add caching for static assets
    if (isStaticAsset) {
      response.headers.set(
        'Cache-Control', 
        'public, max-age=31536000, immutable'
      );
    }
    
    return response;
  }
  
  return null;
}

export function middleware(request: NextRequest) {
  // Handle static assets first
  const staticResponse = handleStaticAssets(request);
  if (staticResponse) {
    return staticResponse;
  }

  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for specific paths
  if (pathname.startsWith('/_next') || 
      pathname.startsWith('/api/') || 
      pathname.includes('.')) {
    return NextResponse.next();
  }

  // Check if pathname already has locale prefix
  const { locale: currentLocale } = getLocaleFromPathname(pathname);
  
  // If no locale in path, redirect to default locale path
  if (!currentLocale) {
    // Get preferred locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLocale = getPreferredLocaleFromHeader(acceptLanguage);
    
    // Only redirect to non-default locale if it's not English
    if (preferredLocale !== DEFAULT_LOCALE) {
      const redirectUrl = new URL(`/${preferredLocale}${pathname}`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
    
    // For default locale (English), don't redirect - let Next.js handle it naturally
    const response = NextResponse.next();
    addI18nHeaders(response, DEFAULT_LOCALE);
    addSecurityHeaders(response);
    return response;
  }

  // If locale is in path, continue normally
  const response = NextResponse.next();
  addI18nHeaders(response, currentLocale);
  addSecurityHeaders(response);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};