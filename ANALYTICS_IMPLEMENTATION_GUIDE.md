# Analytics and Tracking Implementation Guide

## 📊 Overview

Your multilingual site now has a comprehensive analytics and tracking system with support for:

### ✅ **Installed Tracking Services:**

1. **Google Analytics 4** - Web analytics and user behavior tracking
2. **Google Tag Manager** - Tag management system
3. **Meta/Facebook Pixel** - Social media advertising and tracking
4. **Microsoft Clarity** - User session recordings and heatmaps
5. **Hotjar** - User behavior analytics and feedback
6. **Mixpanel** - Event tracking and user analytics
7. **PostHog** - Product analytics and feature flags
8. **Bing/Microsoft UET** - Search engine marketing tracking
9. **LinkedIn Insight Tag** - Professional network advertising
10. **Twitter/X Pixel** - Social media advertising tracking
11. **Vercel Analytics** - Performance and usage analytics
12. **Vercel Speed Insights** - Core Web Vitals monitoring
13. **Google Search Console** - Search performance and SEO monitoring
14. **Bing Webmaster Tools** - Search engine optimization and monitoring

## 🔧 **Setup Instructions**

### 1. Environment Variables

Copy the `.env.example` file to `.env.local` and fill in your tracking IDs:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX

# Meta/Facebook Pixel
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=XXXXXXXXX

# Hotjar
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
NEXT_PUBLIC_HOTJAR_SV=6

# Mixpanel
NEXT_PUBLIC_MIXPANEL_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=phc_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Bing/Microsoft UET
NEXT_PUBLIC_BING_UET_TAG_ID=XXXXXXX

# LinkedIn Insight Tag
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXX

# Twitter/X Pixel
NEXT_PUBLIC_TWITTER_PIXEL_ID=XXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Bing Webmaster Tools Verification
NEXT_PUBLIC_BING_WEBMASTER_CODE=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 2. Cookie Consent Integration

The analytics system is integrated with your existing cookie consent system in `/policies/cookiesettings`. Users can:

- Enable/disable analytics tracking
- Enable/disable marketing tracking
- Settings are persisted and respected by all tracking services

### 3. Automatic Features

✅ **Automatic Page View Tracking** - Tracks all route changes
✅ **SSR/SSG Safe** - No server-side rendering issues
✅ **Performance Optimized** - Lazy loading and error handling
✅ **GDPR Compliant** - Cookie consent integration
✅ **Multi-language Support** - Tracks user language preferences

## 📱 **Usage Examples**

### Basic Event Tracking

```typescript
import { useAnalytics } from '@/lib/analytics/useAnalytics';

function MyComponent() {
  const { trackEvent } = useAnalytics();

  const handleButtonClick = () => {
    trackEvent({
      name: 'button_click',
      category: 'engagement',
      label: 'hero_cta',
      value: 1,
      parameters: {
        page_section: 'hero',
        button_text: 'Learn More'
      }
    });
  };

  return <button onClick={handleButtonClick}>Learn More</button>;
}
```

### Ecommerce Tracking

```typescript
const { trackEcommerce } = useAnalytics();

// Track a purchase
trackEcommerce({
  event: 'purchase',
  ecommerce: {
    currency: 'EUR',
    value: 299.99,
    items: [{
      item_id: 'PROD001',
      item_name: 'Plastic Container Set',
      category: 'Kitchen',
      quantity: 1,
      price: 299.99
    }]
  }
});

// Track add to cart
trackEcommerce({
  event: 'add_to_cart',
  ecommerce: {
    currency: 'EUR',
    value: 49.99,
    items: [{
      item_id: 'PROD002',
      item_name: 'Garden Planter',
      category: 'Garden',
      quantity: 2,
      price: 24.99
    }]
  }
});
```

### User Properties

```typescript
const { setUserProperties } = useAnalytics();

// Set user properties for segmentation
setUserProperties({
  user_type: 'premium',
  industry: 'manufacturing',
  company_size: 'large',
  preferred_language: 'en'
});
```

### Manual Consent Management

```typescript
const { updateConsent } = useAnalytics();

// Update user consent
updateConsent({
  analytics: true,
  marketing: false
});
```

## 📈 **Key Features**

### Privacy & Compliance
- **Cookie Consent Integration** - Respects user privacy choices
- **GDPR Compliant** - Only tracks when consent is given
- **Data Minimization** - Only collects necessary data

### Performance
- **Lazy Loading** - Scripts load only when needed
- **Error Handling** - Graceful fallbacks for failed loads
- **SSR Safe** - No server-side execution issues

### Developer Experience
- **TypeScript Support** - Full type safety
- **React Hooks** - Easy integration with React components
- **Modular Architecture** - Add/remove providers easily

## 🎯 **Common Tracking Scenarios**

### Contact Form Submissions
```typescript
trackEvent({
  name: 'form_submit',
  category: 'lead_generation',
  label: 'contact_form',
  parameters: {
    form_type: 'contact',
    form_location: 'header'
  }
});
```

### Product Interactions
```typescript
trackEvent({
  name: 'product_view',
  category: 'product',
  label: product.name,
  parameters: {
    product_id: product.id,
    category: product.category,
    price: product.price
  }
});
```

### Download Tracking
```typescript
trackEvent({
  name: 'download',
  category: 'content',
  label: 'catalog_pdf',
  parameters: {
    file_name: 'product-catalog-2024.pdf',
    file_type: 'pdf',
    file_size: '2.5mb'
  }
});
```

## 🔍 **Debugging**

### Check if Analytics are Working
1. Open browser developer console
2. Look for analytics initialization messages
3. Check Network tab for tracking requests
4. Use browser extensions (Google Analytics Debugger, Facebook Pixel Helper)

### Common Issues
- **Missing Environment Variables** - Check `.env.local` file
- **Cookie Consent** - Ensure users have given consent
- **Ad Blockers** - May block some tracking scripts
- **CSP Headers** - May need to whitelist tracking domains

## 📊 **Analytics Dashboard Access**

After setting up your tracking IDs, you can access your data at:

- **Google Analytics**: https://analytics.google.com/
- **Google Tag Manager**: https://tagmanager.google.com/
- **Meta Business**: https://business.facebook.com/
- **Microsoft Clarity**: https://clarity.microsoft.com/
- **Hotjar**: https://insights.hotjar.com/
- **Mixpanel**: https://mixpanel.com/
- **PostHog**: https://app.posthog.com/
- **LinkedIn Ads**: https://www.linkedin.com/campaignmanager/
- **Twitter Ads**: https://ads.twitter.com/
- **Google Search Console**: https://search.google.com/search-console/
- **Bing Webmaster Tools**: https://www.bing.com/webmasters/

## 🚀 **Next Steps**

1. **Set up your tracking accounts** and get your tracking IDs
2. **Add the IDs to your `.env.local`** file
3. **Test the tracking** in development environment
4. **Configure your cookie consent** preferences
5. **Set up conversion goals** in your analytics platforms
6. **Create custom dashboards** for your KPIs

## 📞 **Support**

If you need help with:
- Setting up tracking accounts
- Configuring conversion goals
- Creating custom events
- GDPR compliance
- Performance optimization

The analytics system is now fully integrated and ready to provide comprehensive insights into your website's performance and user behavior across multiple platforms! 🎉
