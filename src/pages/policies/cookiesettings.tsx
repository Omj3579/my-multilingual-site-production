
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/lib/analytics/useAnalytics';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Shield } from 'lucide-react';
import PageLayout from '@/components/layouts/PageLayout';

const CookieSettings = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const { updateConsent } = useAnalytics();
  
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  
  // Load saved preferences on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      try {
        const consent = JSON.parse(savedConsent);
        setAnalyticsEnabled(consent.analytics || false);
        setMarketingEnabled(consent.marketing || false);
        
        // Apply saved consent to analytics
        updateConsent({
          analytics: consent.analytics || false,
          marketing: consent.marketing || false
        });
      } catch (error) {
        console.error('Error loading cookie preferences:', error);
      }
    }
  }, [updateConsent]);
  
  const handleSavePreferences = () => {
    // Update analytics consent
    updateConsent({
      analytics: analyticsEnabled,
      marketing: marketingEnabled
    });

    // Save to localStorage for persistence
    localStorage.setItem('cookieConsent', JSON.stringify({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      timestamp: Date.now()
    }));

    toast({
      title: language === 'en' ? 'Preferences saved' : 'Beállítások mentve',
      description: language === 'en' 
        ? `Analytics: ${analyticsEnabled ? 'Enabled' : 'Disabled'}, Marketing: ${marketingEnabled ? 'Enabled' : 'Disabled'}`
        : `Analitika: ${analyticsEnabled ? 'Engedélyezve' : 'Letiltva'}, Marketing: ${marketingEnabled ? 'Engedélyezve' : 'Letiltva'}`,
      icon: <Shield className="h-4 w-4" />,
    });
  };
  
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Cookie Settings' : 'Cookie beállítások'}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-8">
            {language === 'en'
              ? 'Manage your cookie preferences. You can enable or disable different types of cookies used on our website.'
              : 'Kezelje cookie beállításait. Engedélyezheti vagy letilthatja a weboldalunkon használt különböző típusú cookie-kat.'}
          </p>
          
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="necessary" className="flex flex-col space-y-1">
                  <span className="text-lg font-semibold">
                    {language === 'en' ? 'Necessary Cookies' : 'Szükséges Cookie-k'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === 'en' 
                      ? 'Required for the website to function' 
                      : 'A weboldal működéséhez szükséges'}
                  </span>
                </Label>
                <Switch id="necessary" checked disabled />
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="analytics" className="flex flex-col space-y-1">
                  <span className="text-lg font-semibold">
                    {language === 'en' ? 'Analytics Cookies' : 'Analitikai Cookie-k'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === 'en'
                      ? 'Help us improve our website'
                      : 'Segítenek fejleszteni a weboldalt'}
                  </span>
                </Label>
                <Switch 
                  id="analytics" 
                  checked={analyticsEnabled}
                  onCheckedChange={setAnalyticsEnabled}
                />
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="marketing" className="flex flex-col space-y-1">
                  <span className="text-lg font-semibold">
                    {language === 'en' ? 'Marketing Cookies' : 'Marketing Cookie-k'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === 'en'
                      ? 'Used for personalized advertising'
                      : 'Személyre szabott hirdetésekhez használjuk'}
                  </span>
                </Label>
                <Switch 
                  id="marketing"
                  checked={marketingEnabled}
                  onCheckedChange={setMarketingEnabled}
                />
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleSavePreferences}
            className="mt-8 px-6 py-3 bg-[#f39e74] hover:bg-[#f28c5c] text-white rounded-lg transition-colors"
          >
            {language === 'en' ? 'Save preferences' : 'Beállítások mentése'}
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CookieSettings;
