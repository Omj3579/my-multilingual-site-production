import { ANALYTICS_CONFIG } from '../config';
import type { AnalyticsEvent, PageViewData, EcommerceEvent } from '../index';

declare global {
  interface Window {
    twq?: (...args: unknown[]) => void;
  }
}

export default class TwitterPixel {
  private initialized = false;
  private consentGiven = false;

  async initialize() {
    if (this.initialized || !ANALYTICS_CONFIG.TWITTER.enabled) return;

    return new Promise<void>((resolve, reject) => {
      try {
        // Initialize Twitter pixel
        const script = document.createElement('script');
        script.innerHTML = `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('init','${ANALYTICS_CONFIG.TWITTER.pixelId}');
          twq('track','PageView');
        `;
        
        document.head.appendChild(script);
        
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
    
    // Twitter Pixel doesn't have built-in consent management
    // We handle it by not tracking if consent is not given
  }

  trackPageView(data: PageViewData) {
    if (!this.initialized || !this.consentGiven || !window.twq) return;

    window.twq('track', 'PageView', {
      content_name: data.title,
      content_url: data.url
    });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.initialized || !this.consentGiven || !window.twq) return;

    // Map common events to Twitter event types
    const eventMapping: Record<string, string> = {
      'contact': 'SubmitApplication',
      'download': 'Download',
      'signup': 'CompleteRegistration',
      'purchase': 'Purchase',
      'add_to_cart': 'AddToCart'
    };

    const twitterEventName = eventMapping[event.name] || 'Custom';
    
    window.twq('track', twitterEventName, {
      content_name: event.label,
      content_category: event.category,
      value: event.value ? String(event.value) : undefined,
      ...event.parameters
    });
  }

  trackEcommerce(event: EcommerceEvent) {
    if (!this.initialized || !this.consentGiven || !window.twq) return;

    const eventMapping: Record<string, string> = {
      'purchase': 'Purchase',
      'add_to_cart': 'AddToCart',
      'begin_checkout': 'InitiateCheckout'
    };

    const twitterEventName = eventMapping[event.event] || 'Custom';
    
    window.twq('track', twitterEventName, {
      value: event.ecommerce.value ? String(event.ecommerce.value) : undefined,
      currency: event.ecommerce.currency,
      contents: event.ecommerce.items?.map(item => ({
        content_id: item.item_id,
        content_name: item.item_name,
        content_category: item.category,
        num_items: item.quantity
      }))
    });
  }

  setUserProperties(properties: Record<string, string | number | boolean>) {
    if (!this.initialized || !this.consentGiven) return;

    // Twitter Pixel doesn't support user properties directly
    // This is a placeholder for potential future functionality
    console.log('Twitter user properties:', properties);
  }
}
