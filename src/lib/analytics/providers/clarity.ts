import { ANALYTICS_CONFIG } from '../config';
import type { AnalyticsEvent, PageViewData } from '../index';

declare global {
  interface Window {
    clarity: (...args: unknown[]) => void;
    __clar?: unknown;
  }
}

export default class Clarity {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.CLARITY.enabled) return;

    return new Promise<void>((resolve, reject) => {
      try {
        // Microsoft Clarity script injection
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${ANALYTICS_CONFIG.CLARITY.projectId}");
        `;
        
        document.head.appendChild(script);
        
        // Wait a bit for the script to load
        setTimeout(() => {
          this.initialized = true;
          resolve();
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  updateConsent(consent: { analytics: boolean; marketing: boolean }) {
    this.consentGiven = consent.analytics;
    
    if (this.initialized && window.clarity) {
      if (this.consentGiven) {
        window.clarity('start');
      } else {
        window.clarity('stop');
      }
    }
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven || !window.clarity) return;

    // Clarity automatically tracks page views
    // But we can add custom metadata
    window.clarity('set', 'page_title', data.title);
    window.clarity('set', 'page_url', data.url);
    if (data.language) {
      window.clarity('set', 'language', data.language);
    }
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven || !window.clarity) return;

    // Clarity doesn't have traditional event tracking
    // But we can set custom variables
    window.clarity('set', 'custom_event', event.name);
    if (event.category) {
      window.clarity('set', 'event_category', event.category);
    }
    if (event.label) {
      window.clarity('set', 'event_label', event.label);
    }
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven || !window.clarity) return;

    // Set user properties as custom variables
    Object.entries(properties).forEach(([key, value]) => {
      window.clarity('set', key, String(value));
    });
  }
}
