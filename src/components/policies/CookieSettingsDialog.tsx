
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield } from 'lucide-react';

interface CookieSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CookieSettingsDialog = ({ open, onOpenChange }: CookieSettingsDialogProps) => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  
  const handleSavePreferences = () => {
    // In a real application, we would save these preferences to localStorage or cookies
    // For this demo, we'll just show a toast notification
    
    toast({
      title: language === 'en' ? 'Preferences saved' : 'Beállítások mentve',
      description: language === 'en' 
        ? `Analytics: ${analyticsEnabled ? 'Enabled' : 'Disabled'}, Marketing: ${marketingEnabled ? 'Enabled' : 'Disabled'}`
        : `Analitika: ${analyticsEnabled ? 'Engedélyezve' : 'Letiltva'}, Marketing: ${marketingEnabled ? 'Engedélyezve' : 'Letiltva'}`,
      icon: <Shield className="h-4 w-4" />,
    });
    
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {language === 'en' ? 'Cookie Settings' : 'Cookie beállítások'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="necessary" className="flex flex-col space-y-1">
              <span>{language === 'en' ? 'Necessary Cookies' : 'Szükséges Cookie-k'}</span>
              <span className="text-sm text-gray-500">
                {language === 'en' 
                  ? 'Required for the website to function' 
                  : 'A weboldal működéséhez szükséges'}
              </span>
            </Label>
            <Switch id="necessary" checked disabled />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="analytics" className="flex flex-col space-y-1">
              <span>{language === 'en' ? 'Analytics Cookies' : 'Analitikai Cookie-k'}</span>
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
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="marketing" className="flex flex-col space-y-1">
              <span>{language === 'en' ? 'Marketing Cookies' : 'Marketing Cookie-k'}</span>
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
        
        <div className="flex justify-end">
          <Button 
            onClick={handleSavePreferences}
            className="bg-[#f39e74] hover:bg-[#f28c5c] text-white"
          >
            {language === 'en' ? 'Save preferences' : 'Beállítások mentése'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsDialog;
