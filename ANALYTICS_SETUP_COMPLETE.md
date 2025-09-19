# Analytics System Setup Guide

## Overview
The analytics system tracks form interactions, user behavior, and conversion metrics for your multilingual website. This implementation provides comprehensive tracking of contact forms, quote requests, and newsletter subscriptions.

## Features Implemented

### 1. Form Analytics Tracking
- **Form View**: Tracks when users view forms
- **Form Start**: Tracks when users begin interacting with forms
- **Form Submit**: Tracks form submission attempts
- **Form Success**: Tracks successful submissions
- **Form Error**: Tracks validation or submission errors

### 2. Admin Dashboard Analytics
- **Conversion Rates**: View to submission ratios for each form type
- **Device Breakdown**: Desktop vs mobile usage analytics
- **Browser Analytics**: Browser usage statistics
- **Language Distribution**: English vs Hungarian user preferences
- **Daily Activity**: Recent daily metrics and trends

### 3. Database Schema
The analytics system uses four main tables:
- `form_events`: Individual event tracking
- `daily_metrics`: Aggregated daily statistics
- `conversion_funnel`: User journey tracking
- `analytics_summary`: Real-time summary metrics

## Installation Steps

### Step 1: Database Setup
1. Open your Supabase dashboard
2. Go to the SQL Editor
3. Copy and run the SQL script from `setup-analytics-database.sql`
4. Verify tables are created successfully

### Step 2: Environment Verification
Ensure your `.env.local` has the required Supabase credentials:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 3: Form Integration
Analytics tracking has been integrated into:
- ✅ **Newsletter Form** (`src/components/footer/NewsletterForm.tsx`)
- 🔄 **Contact Form** (ready for integration)
- 🔄 **Quote Request Form** (ready for integration)

### Step 4: Test Analytics
1. Visit your website
2. Interact with the newsletter form
3. Check the admin dashboard Analytics tab
4. Verify events are being tracked

## API Endpoints

### Analytics Tracking API
- **URL**: `/api/analytics/track`
- **Method**: POST
- **Purpose**: Records form interaction events
- **Usage**: Called automatically by form components

### Admin Analytics API
- **URL**: `/api/admin/analytics`
- **Method**: GET
- **Purpose**: Retrieves analytics data for dashboard
- **Authentication**: Requires admin token

## Usage in Components

### Using the Analytics Hook
```tsx
import { useFormAnalytics } from '@/hooks/useAnalytics'

const MyForm = () => {
  const { trackFormStart, trackFormSuccess, trackFormError } = useFormAnalytics('contact')
  
  // Track when user starts interacting
  const handleInputFocus = () => trackFormStart()
  
  // Track successful submission
  const handleSuccess = () => trackFormSuccess({ email: 'user@example.com' })
  
  // Track errors
  const handleError = (error) => trackFormError(error.message)
}
```

### Automatic Form View Tracking
Form view events are tracked automatically when components mount using the `useFormAnalytics` hook.

## Admin Dashboard Access

1. Navigate to `/admin/login`
2. Enter your admin credentials
3. Access the Dashboard
4. Click the "Analytics" tab
5. View comprehensive form performance metrics

## Data Privacy & GDPR Compliance

The analytics system:
- Does not store personally identifiable information
- Only tracks aggregated interaction data
- Respects user privacy preferences
- Can be disabled if needed

## Monitoring & Maintenance

### Key Metrics to Monitor
1. **Conversion Rates**: Track form completion percentages
2. **Error Rates**: Identify problematic form flows
3. **Device Preferences**: Optimize for user device types
4. **Language Usage**: Balance content strategy

### Regular Maintenance
- Review analytics data weekly
- Check for unusual patterns or errors
- Clean up old analytical data if needed
- Update tracking parameters as forms evolve

## Troubleshooting

### Common Issues
1. **No Analytics Data**: Verify database tables exist and API endpoints work
2. **Missing Events**: Check browser console for JavaScript errors
3. **Dashboard Empty**: Confirm admin authentication and API responses

### Debug Mode
Enable debug logging by checking browser console for analytics tracking events.

## Next Steps

1. **Integrate Remaining Forms**: Add analytics to contact and quote forms
2. **Enhanced Reporting**: Create email reports for regular analytics summaries
3. **A/B Testing**: Use analytics to test form variations
4. **Performance Monitoring**: Track form loading times and user experience

## Support

For issues or questions about the analytics system:
1. Check browser console for errors
2. Verify database connectivity
3. Test API endpoints manually
4. Review this documentation

The analytics system provides powerful insights into form performance and user behavior while maintaining privacy and compliance standards.