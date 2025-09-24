
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Privacy Policy' : 'Adatvédelmi Szabályzat'}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Your Privacy is Our Priority' : 'Az Ön magánélete a prioritásunk'}
            </h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'Introduction' : 'Bevezetés'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "At Flair-Plastic, we are committed to safeguarding the privacy and security of personal data from all our website visitors and users. We view personal data as a critical asset, handling it respectfully and lawfully. Through our website operations, we collect, process, and transfer personal data strictly when there is a lawful, specific, and definable necessity for website functionality or communication, always in compliance with all relevant laws applicable within our operational jurisdictions."
                : "A Flair-Plastic elkötelezett weboldal látogatóink és felhasználóink személyes adatainak védelme és biztonsága iránt. A személyes adatokat kritikus eszköznek tekintjük, és tisztelettel, valamint jogszerűen kezeljük. Weboldal-működésünk során kizárólag akkor gyűjtünk, dolgozunk fel és továbbítunk személyes adatokat, ha arra a weboldal működése vagy kommunikáció szempontjából jogszerű, konkrét és meghatározható szükség van, mindig betartva a működési joghatóságunkban alkalmazandó valamennyi vonatkozó jogszabályt."}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              {language === 'en' ? 'What Personal Data We Collect' : 'Milyen személyes adatokat gyűjtünk'}
            </h3>
            <p className="mb-4">
              {language === 'en'
                ? "We collect personal data that you provide directly to us through our website, such as when you use contact forms, subscribe to newsletters, submit inquiries, or interact with our web content. This may include your name, email address, company information, phone number, and any messages or feedback you provide through our website."
                : "Olyan személyes adatokat gyűjtünk, amelyeket Ön közvetlenül ad meg nekünk weboldalunkon keresztül, például amikor kapcsolati űrlapokat használ, hírlevélre iratkozik fel, megkereséseket küld, vagy interakcióba lép webes tartalmunkkal. Ez magában foglalhatja a nevét, e-mail címét, céges adatait, telefonszámát és bármilyen üzenetet vagy visszajelzést, amelyet weboldalunkon keresztül nyújt."}
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
                  ? "Website Operations: To process and respond to your website inquiries, contact form submissions, and information requests"
                  : "Weboldal működés: Weboldali megkereséseinek, kapcsolatfelvételi űrlap beküldéseinek és információkérések feldolgozása és megválaszolása"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Communication: To send responses to your inquiries and provide information about our company and services"
                  : "Kommunikáció: Válaszok küldése megkereséseiére és információ nyújtása vállalatunkról és szolgáltatásainkról"}
              </li>
              <li className="mb-2">
                {language === 'en'
                  ? "Website Improvement: To analyze website usage and improve user experience (with your consent)"
                  : "Weboldal fejlesztés: Weboldal használat elemzése és felhasználói élmény javítása (az Ön beleegyezésével)"}
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

export default PrivacyPolicy;
