
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';

const CookiePolicy = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Cookies Policy' : 'Cookie szabályzat'}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Understanding Cookies on Our Website' : 'Cookie-k megértése a weboldalunkon'}
            </h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'Introduction' : 'Bevezetés'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "At Flair-Plastic, we believe in being clear and open about how we collect and use data related to you. In the spirit of transparency, this policy provides detailed information about how and when we use cookies. By using the Flair-Plastic website, you agree that we can store and access cookies as described in this policy."
                : "A Flair-Plasticnél hiszünk abban, hogy átláthatóan és nyíltan kell kezelnünk az Önnel kapcsolatos adatok gyűjtését és felhasználását. Az átláthatóság jegyében ez a szabályzat részletes információkat nyújt arról, hogyan és mikor használunk cookie-kat. A Flair-Plastic weboldal használatával Ön elfogadja, hogy a cookie-kat a jelen szabályzatban leírtak szerint tárolhatjuk és használhatjuk."}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'What are cookies?' : 'Mik azok a cookie-k?'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "Cookies are small text files sent to your computer or mobile device when you visit a website. They are unique to your account or your browser. Cookies are sent back to the originating website on each subsequent visit, or to another website that recognizes that cookie, to develop a record of the user's online activity."
                : "A cookie-k kis szöveges fájlok, amelyeket a számítógépére vagy mobileszközére küldünk, amikor meglátogat egy weboldalt. Ezek egyediek az Ön fiókjához vagy böngészőjéhez. A cookie-kat minden következő látogatáskor visszaküldjük az eredeti weboldalra, vagy egy másik olyan weboldalra, amely felismeri azt a cookie-t, hogy nyomon kövessük a felhasználó online tevékenységét."}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'How do we use cookies?' : 'Hogyan használjuk a cookie-kat?'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "We use cookies to enhance your experience on our website in the following ways:"
                : "A cookie-kat a következő módokon használjuk a weboldal élményének javítása érdekében:"}
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                {language === 'en'
                  ? "Preferences: To remember information about your browser and your preferences"
                  : "Preferenciák: A böngészőjével és beállításaival kapcsolatos információk megjegyzéséhez"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Security: To help us detect and fight spam, abuse, and other activities that violate Flair-Plastic's policies"
                  : "Biztonság: Segít észlelni és megakadályozni a spam-et, visszaéléseket és egyéb, a Flair-Plastic szabályzatait sértő tevékenységeket"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Performance And Analytics: To analyze how the Services are being accessed and used"
                  : "Teljesítmény és analitika: A szolgáltatások használatának elemzéséhez"}
              </li>
              <li>
                {language === 'en'
                  ? "Advertising: To show relevant advertising both on and off the Flair-Plastic site"
                  : "Hirdetések: Releváns hirdetések megjelenítéséhez a Flair-Plastic oldalon és azon kívül"}
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Third-party cookies' : 'Harmadik féltől származó cookie-k'}
            </h2>
            <p className="mb-4">
              {language === 'en'
                ? "In addition to the cookies we set when you visit the Flair-Plastic website, we also utilize third-party cookies from our trusted partners for analytics, security, and functionality purposes."
                : "A Flair-Plastic weboldal által beállított cookie-k mellett harmadik féltől származó cookie-kat is használunk megbízható partnereinktől analitikai, biztonsági és funkcionalitási célokból."}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Your Cookie Choices' : 'Az Ön cookie választásai'}
            </h2>
            <p className="mb-4">
              {language === 'en'
                ? "You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may impact website functionality."
                : "Cookie beállításait a böngészője beállításain keresztül kezelheti. Kérjük, vegye figyelembe, hogy bizonyos cookie-k letiltása befolyásolhatja a weboldal funkcionalitását."}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default CookiePolicy;
