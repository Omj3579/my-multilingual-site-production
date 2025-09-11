import { ANALYTICS_CONFIG } from '../config';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default class GA4 {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.GA4.enabled) return;

    return new Promise<void>((resolve, reject) => {
      try {
        // Add gtag script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4.measurementId}`;
        document.head.appendChild(script1);

        // Initialize dataLayer and gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(...args: unknown[]) {
          window.dataLayer.push(args);
        };
        
        window.gtag('js', new Date());
        window.gtag('config', ANALYTICS_CONFIG.GA4.measurementId, {
          send_page_view: false, // We'll handle this manually
          anonymize_ip: true,
          cookie_flags: 'secure;samesite=strict'
        });

        script1.onload = () => {
          this.initialized = true;
          resolve();
        };

        script1.onerror = () => {
          reject(new Error('Failed to load Google Analytics script'));
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.analytics;
    
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied'
      });
    }
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_title: data.title,
      page_location: data.url,
      page_referrer: data.referrer,
      language: data.language
    });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven || !window.gtag) return;

    window.gtag('event', event.name, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.parameters
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven || !window.gtag) return;

    window.gtag('event', event.event, event.ecommerce);
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven || !window.gtag) return;

    window.gtag('config', ANALYTICS_CONFIG.GA4.measurementId, {
      user_properties: properties
    });
  }
}
