
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsFooter = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const getFooterText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      'cookieSettings': {
        'en': 'My cookie settings',
        'hu': 'Cookie beállításaim',
        'de': 'Meine Cookie-Einstellungen'
      },
      'cookiesPolicy': {
        'en': 'Cookies policy',
        'hu': 'Cookie szabályzat',
        'de': 'Cookie-Richtlinie'
      },
      'privacyPolicy': {
        'en': 'Privacy policy',
        'hu': 'Adatvédelmi irányelvek',
        'de': 'Datenschutzrichtlinie'
      },
      'termsConditions': {
        'en': 'Terms and conditions',
        'hu': 'Felhasználási feltételek',
        'de': 'Allgemeine Geschäftsbedingungen'
      }
    };
    
    return texts[key][language] || texts[key]['en'];
  };

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © Copyright {currentYear} - Flair-Plastic. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/policies/mycookiesettings"
              className="hover:text-gray-700 transition-colors"
            >
              {getFooterText('cookieSettings')}
            </Link>
            <Link 
              href="/policies/cookies" 
              className="hover:text-gray-700 transition-colors"
            >
              {getFooterText('cookiesPolicy')}
            </Link>
            <Link 
              href="/policies/privacy" 
              className="hover:text-gray-700 transition-colors"
            >
              {getFooterText('privacyPolicy')}
            </Link>
            <Link 
              href="/policies/terms" 
              className="hover:text-gray-700 transition-colors"
            >
              {getFooterText('termsConditions')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProductsFooter;
