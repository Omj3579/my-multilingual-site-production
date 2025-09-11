import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AnalyticsEvent, EcommerceEvent } from './index';

// Lazy import analytics to prevent SSR issues
let analytics: typeof import('./index').default | null = null;

const getAnalytics = async () => {
  if (typeof window === 'undefined') return null;
  if (!analytics) {
    const { default: analyticsModule } = await import('./index');
    analytics = analyticsModule;
  }
  return analytics;
};

export function useAnalytics() {
  const router = useRouter();

  // Initialize analytics on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      getAnalytics().then((analyticsInstance) => {
        if (analyticsInstance) {
          analyticsInstance.initialize().catch(console.error);
        }
      });
    }
  }, []);

  // Track page views on route changes (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleRouteChange = async (url: string) => {
      const analyticsInstance = await getAnalytics();
      if (analyticsInstance) {
        analyticsInstance.trackPageView({
          url,
          title: document.title,
          referrer: document.referrer,
          language: router.locale
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Track initial page load
    handleRouteChange(router.asPath);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const trackEvent = useCallback(async (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined') {
      const analyticsInstance = await getAnalytics();
      if (analyticsInstance) {
        analyticsInstance.trackEvent(event);
      }
    }
  }, []);

  const trackEcommerce = useCallback(async (event: EcommerceEvent) => {
    if (typeof window !== 'undefined') {
      const analyticsInstance = await getAnalytics();
      if (analyticsInstance) {
        analyticsInstance.trackEcommerce(event);
      }
    }
  }, []);

  const setUserProperties = useCallback(async (properties: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined') {
      const analyticsInstance = await getAnalytics();
      if (analyticsInstance) {
        analyticsInstance.setUserProperties(properties);
      }
    }
  }, []);

  const updateConsent = useCallback(async (consent: { analytics: boolean; marketing: boolean }) => {
    if (typeof window !== 'undefined') {
      const analyticsInstance = await getAnalytics();
      if (analyticsInstance) {
        analyticsInstance.updateConsent(consent);
      }
    }
  }, []);

  return {
    trackEvent,
    trackEcommerce,
    setUserProperties,
    updateConsent
  };
}
