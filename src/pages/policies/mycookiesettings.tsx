
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';
import CookieSettingsDialog from '@/components/policies/CookieSettingsDialog';

const MyCookieSettings = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'My Cookie Settings' : 'Cookie beállításaim'}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Manage Your Cookie Preferences' : 'Cookie beállítások kezelése'}
            </h2>
            <p className="mb-4">
              {language === 'en'
                ? "Control how cookies are used on our website. You can customize your preferences for different types of cookies below."
                : "Szabályozza, hogyan használjuk a cookie-kat weboldalunkon. Az alábbiakban testreszabhatja preferenciáit a különböző típusú cookie-khoz."}
            </p>
            <CookieSettingsDialog open={true} onOpenChange={() => {}} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Understanding Our Cookie Usage' : 'Cookie használatunk megértése'}
            </h2>
            <p className="mb-4">
              {language === 'en'
                ? "Learn more about how we use cookies to enhance your experience on our website."
                : "Tudjon meg többet arról, hogyan használjuk a cookie-kat a weboldal élményének javítása érdekében."}
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'Types of Cookies We Use' : 'Az általunk használt cookie-k típusai'}
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                {language === 'en'
                  ? "Essential Cookies: Required for basic website functionality"
                  : "Alapvető Cookie-k: A weboldal alapvető működéséhez szükségesek"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Analytics Cookies: Help us understand how visitors use our site"
                  : "Analitikai Cookie-k: Segítenek megérteni, hogyan használják a látogatók az oldalunkat"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Marketing Cookies: Used for personalized advertising"
                  : "Marketing Cookie-k: Személyre szabott hirdetésekhez használjuk"}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default MyCookieSettings;
