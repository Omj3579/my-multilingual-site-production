import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield } from 'lucide-react';

// Declare the grecaptcha type for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          theme?: string;
        }
      ) => number;
    };
  }
}

const ReCaptcha = () => {
  const { language } = useLanguage();
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.grecaptcha && recaptchaRef.current) {
      // Prevent multiple renders
      if (!recaptchaRef.current.hasChildNodes()) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6Lfw5AkrAAAAACbWt_b2CQUZ2ED486hsUCKG896Z",
          theme: "light"
        });
      }
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-3">
        <Shield size={16} className="text-blue-500 mr-2" />
        <span className="text-sm font-medium text-blue-700">
          {language === 'en' 
            ? 'Security Verification' 
            : 'Biztonsági ellenőrzés'}
        </span>
      </div>
      <div 
        ref={recaptchaRef}
        className="g-recaptcha mx-auto"
      />
      <small className="text-gray-500 text-center mt-2">
        {language === 'en' 
          ? 'This site is protected by reCAPTCHA and the Google Privacy Policy applies.' 
          : 'Ezt az oldalt a reCAPTCHA védi, és a Google Adatvédelmi irányelvei érvényesek.'}
      </small>
    </div>
  );
};

export default ReCaptcha;
