import { ANALYTICS_CONFIG } from '../config';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: (...args: unknown[]) => void;
  }
}

export default class LinkedInInsight {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.LINKEDIN.enabled) return;

    return new Promise<void>((resolve, reject) => {
      try {
        // Set LinkedIn partner ID
        window._linkedin_partner_id = ANALYTICS_CONFIG.LINKEDIN.partnerId;
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(ANALYTICS_CONFIG.LINKEDIN.partnerId);
        
        // Add LinkedIn Insight Tag script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `;
        
        document.head.appendChild(script);
        
        // Wait for script to load
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
    this.consentGiven = consent.marketing;
    
    // LinkedIn Insight Tag doesn't have built-in consent management
    // We handle it by not tracking if consent is not given
  }

  trackPageView(_data: PageViewData) {
    if (!this.initialized || !this.consentGiven || !window.lintrk) return;

    window.lintrk('track', { conversion_id: 'pageview' });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven || !window.lintrk) return;

    // Map common events to LinkedIn conversion IDs
    const conversionMapping: Record<string, string> = {
      'contact': 'contact',
      'download': 'download',
      'signup': 'signup',
      'purchase': 'purchase'
    };

    const conversionId = conversionMapping[event.name] || 'custom';
    
    window.lintrk('track', { 
      conversion_id: conversionId,
      conversion_value: event.value 
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven || !window.lintrk) return;

    if (event.event === 'purchase') {
      window.lintrk('track', { 
        conversion_id: 'purchase',
        conversion_value: event.ecommerce.value
      });
    }
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    // LinkedIn Insight Tag doesn't support user properties directly
    // This is a placeholder for potential future functionality
    console.log('LinkedIn user properties:', properties);
  }
}
