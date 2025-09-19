/**
 * Advanced i18n Middleware
 * Handles intelligent locale detection, redirects, and performance optimizations
 */

import { NextRequest, NextResponse } from 'next/server';
import { LOCALE_CONFIG, SupportedLocale } from './src/utils/advanced-i18n';

// Configuration for middleware
const MIDDLEWARE_CONFIG = {
  // Enable intelligent redirects based on Accept-Language header
  enableSmartRedirects: true,
  
  // Enable geolocation-based suggestions (requires additional service)
  enableGeolocation: false,
  
  // Cache headers for static assets
  staticAssetsCacheTTL: 31536000, // 1 year
  
  // API rate limiting
  enableRateLimit: true,
  rateLimitWindow: 60000, // 1 minute
  rateLimitMaxRequests: 100
};

/**
 * Extract preferred locale from Accept-Language header
 */
function getPreferredLocaleFromHeader(acceptLanguage: string | null): SupportedLocale {
  if (!acceptLanguage) return 'en';
  
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
    if (code in LOCALE_CONFIG) {
      return code as SupportedLocale;
    }
  }
  
  return 'en';
}

/**
 * Check if the current hostname matches the expected locale domain
 */
function validateDomainLocale(hostname: string, locale: SupportedLocale): boolean {
  const expectedDomain = LOCALE_CONFIG[locale].domain;
  return hostname === expectedDomain.replace(/^https?:\/\//, '');
}

/**
 * Generate redirect response to appropriate locale domain
 */
function createLocaleRedirect(
  request: NextRequest, 
  targetLocale: SupportedLocale
): NextResponse {
  const targetDomain = LOCALE_CONFIG[targetLocale].domain;
  const protocol = request.nextUrl.protocol;
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  
  const redirectUrl = `${protocol}//${targetDomain}${pathname}${search}`;
  
  return NextResponse.redirect(redirectUrl, {
    status: 302, // Temporary redirect to allow for future changes
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Vary': 'Accept-Language'
    }
  });
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
  
  // Performance headers
  response.headers.set('X-Powered-By', ''); // Remove default Next.js header
  
  return response;
}

/**
 * Add i18n-specific headers
 */
function addI18nHeaders(response: NextResponse, locale: SupportedLocale): NextResponse {
  response.headers.set('Content-Language', locale);
  response.headers.set('Vary', 'Accept-Language');
  
  // Add alternate language hints
  const alternateLinks = Object.entries(LOCALE_CONFIG)
    .map(([loc, config]) => `<https://${config.domain}>; rel="alternate"; hreflang="${loc}"`)
    .join(', ');
    
  response.headers.set('Link', alternateLinks);
  
  return response;
}

/**
 * Handle static assets with optimized caching
 */
function handleStaticAssets(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  
  // Check for static assets
  const isStaticAsset = /\\.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$/.test(pathname);
  const isNextAsset = pathname.startsWith('/_next/');
  const isPublicAsset = pathname.startsWith('/public/');
  
  if (isStaticAsset || isNextAsset || isPublicAsset) {
    const response = NextResponse.next();
    
    // Add aggressive caching for static assets
    response.headers.set(
      'Cache-Control', 
      `public, max-age=${MIDDLEWARE_CONFIG.staticAssetsCacheTTL}, immutable`
    );
    
    return response;
  }
  
  return null;
}

/**
 * Simple rate limiting implementation
 */
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(clientId: string): boolean {
  if (!MIDDLEWARE_CONFIG.enableRateLimit) return true;
  
  const now = Date.now();
  const windowStart = now - MIDDLEWARE_CONFIG.rateLimitWindow;
  
  // Clean up old entries
  for (const [id, data] of rateLimit) {
    if (data.resetTime < windowStart) {
      rateLimit.delete(id);
    }
  }
  
  const current = rateLimit.get(clientId) || { count: 0, resetTime: now + MIDDLEWARE_CONFIG.rateLimitWindow };
  
  if (current.count >= MIDDLEWARE_CONFIG.rateLimitMaxRequests) {
    return false;
  }
  
  current.count++;
  rateLimit.set(clientId, current);
  
  return true;
}

/**
 * Main middleware function
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes, _next, and other system paths
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return handleStaticAssets(request) || NextResponse.next();
  }
  
  // Rate limiting
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientId = forwardedFor?.split(',')[0] || 'anonymous';
  if (!checkRateLimit(clientId)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': String(Math.ceil(MIDDLEWARE_CONFIG.rateLimitWindow / 1000))
      }
    });
  }
  
  // Get current domain and determine locale
  const hostname = request.headers.get('host') || '';
  const localeEntry = Object.entries(LOCALE_CONFIG).find(([, config]) => 
    hostname === config.domain.replace(/^https?:\/\//, '')
  );
  const currentLocale = (localeEntry?.[0] as SupportedLocale) || 'en';
  
  // Smart locale detection for new visitors
  if (MIDDLEWARE_CONFIG.enableSmartRedirects) {
    const hasUserPreference = request.cookies.get('user-selected-locale');
    const acceptLanguage = request.headers.get('accept-language');
    
    // Only redirect if:
    // 1. User hasn't manually selected a language
    // 2. Current domain doesn't match their preferred language
    // 3. It's not a bot (has accept-language header)
    if (!hasUserPreference && acceptLanguage) {
      const preferredLocale = getPreferredLocaleFromHeader(acceptLanguage);
      
      if (preferredLocale !== currentLocale && preferredLocale in LOCALE_CONFIG) {
        return createLocaleRedirect(request, preferredLocale);
      }
    }
  }
  
  // Validate domain-locale consistency
  if (!validateDomainLocale(hostname, currentLocale)) {
    // If domain doesn't match expected locale, redirect to correct domain
    const correctDomain = LOCALE_CONFIG[currentLocale].domain;
    if (correctDomain !== `https://${hostname}`) {
      return createLocaleRedirect(request, currentLocale);
    }
  }
  
  // Continue with request and add headers
  const response = NextResponse.next();
  
  // Add security headers
  addSecurityHeaders(response);
  
  // Add i18n headers
  addI18nHeaders(response, currentLocale);
  
  // Add performance monitoring headers
  response.headers.set('X-Locale', currentLocale);
  const hasUserPreference = request.cookies.get('user-selected-locale');
  response.headers.set('X-Locale-Detection', hasUserPreference ? 'user-preference' : 'auto-detected');
  
  return response;
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default middleware;