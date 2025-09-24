
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';

const CookiePolicy = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Cookie Policy' : 'Cookie Szabályzat'}
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
              {language === 'en' ? 'What Personal Data We Collect' : 'Milyen személyes adatokat gyűjtünk'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "We collect personal data that you provide directly to us through our website, such as when you use contact forms, subscribe to newsletters, or interact with our web content. This may include your name, email address, company information, phone number, and any messages or feedback you provide through our website contact forms."
                : "Olyan személyes adatokat gyűjtünk, amelyeket Ön közvetlenül ad meg nekünk weboldalunkon keresztül, például amikor kapcsolati űrlapokat használ, hírlevélre iratkozik fel, vagy interakcióba lép webes tartalmunkkal. Ez magában foglalhatja a nevét, e-mail címét, céges adatait, telefonszámát és bármilyen üzenetet vagy visszajelzést, amelyet weboldalunk kapcsolati űrlapjain keresztül nyújt."}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'How We Use Your Personal Data' : 'Hogyan használjuk személyes adatait'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "We use your personal data for legitimate website and communication purposes:"
                : "Személyes adatait jogos weboldal és kommunikációs célokra használjuk:"}
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                {language === 'en'
                  ? "Website Operations: To process and respond to your website inquiries and contact form submissions"
                  : "Weboldal működés: Weboldali megkereséseinek és kapcsolatfelvételi űrlap beküldéseinek feldolgozása és megválaszolása"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Communication: To send responses to your inquiries and provide information about our company"
                  : "Kommunikáció: Válaszok küldése megkereséseiére és információ nyújtása vállalatunkról"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Website Analytics: To analyze website usage patterns and improve user experience"
                  : "Weboldal elemzés: Weboldal használati minták elemzése és felhasználói élmény javítása"}
              </li>
              <li>
                {language === 'en'
                  ? "Legal Compliance: To meet our legal obligations and regulatory requirements"
                  : "Jogi megfelelés: Jogi kötelezettségeink és szabályozási követelményeink teljesítése"}
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Data Sharing and Third Parties' : 'Adatmegosztás és harmadik felek'}
            </h2>
            <p className="mb-4">
              {language === 'en'
                ? "We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except as outlined in this policy. We may share data with trusted service providers who assist us in operating our website, conducting our business, or serving you, as long as those parties agree to keep this information confidential."
                : "Személyes adatait nem adjuk el, nem cseréljük vagy más módon nem továbbítjuk harmadik félnek az Ön beleegyezése nélkül, kivéve az ebben a szabályzatban leírtakat. Adatokat oszthatunk meg megbízható szolgáltatókkal, akik segítenek weboldalunk működtetésében, üzletünk vezetésében vagy az Ön kiszolgálásában, amennyiben ezek a felek válalják, hogy bizalmasan kezelik ezeket az információkat."}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Your Data Protection Rights' : 'Az Ön adatvédelmi jogai'}
            </h2>
            <p className="mb-4">
              {language === 'en'
                ? "Under GDPR and applicable data protection laws, you have several rights regarding your personal data, including the right to access, rectify, erase, restrict processing, object to processing, and data portability. To exercise these rights or if you have any privacy-related questions, please contact us at legal@flair-plastic.hu or +36 (46) 584 06 00."
                : "A GDPR és az alkalmazandó adatvédelmi jogszabályok értelmében számos joggal rendelkezik személyes adataival kapcsolatban, beleértve a hozzáférés, helyesbítés, törlés, feldolgozás korlátozása, feldolgozás elleni kifogás és az adathordozhatóság jogát. Ezen jogok gyakorlásához vagy adatvédelemmel kapcsolatos kérdéseivel forduljon hozzánk a legal@flair-plastic.hu címen vagy a +36 (46) 584 06 00 telefonszámon."}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default CookiePolicy;
