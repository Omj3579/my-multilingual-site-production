
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Privacy Policy' : 'Adatvédelmi Szabályzat'}
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Flair-Plastic Privacy Statement' : 'A Flair-Plastic adatvédelmi nyilatkozata'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'At Flair-Plastic, we are committed to safeguarding the privacy and security of personal data from all our stakeholders—employees, board members, and business partners. We view personal data as a critical asset, handling it respectfully and lawfully.'
                : 'A Flair-Plastic elkötelezett valamennyi érdekelt fél – munkavállalók, igazgatósági tagok és üzleti partnerek – személyes adatainak védelme és biztonsága iránt. A személyes adatokat kritikus eszköznek tekintjük, és tisztelettel, valamint jogszerűen kezeljük.'}
            </p>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'This privacy statement, issued on behalf of Flair-Plastic, details our data processing responsibilities. When we refer to "Flair-Plastic," "we," "us," or "our," we mean the single legal entity that is responsible for managing your data. Flair-Plastic is the controller and accountable legal body for this website.'
                : 'Ez az adatvédelmi nyilatkozat, amelyet a Flair-Plastic nevében adtunk ki, részletezi adatkezelési felelősségünket. Amikor a "Flair-Plastic", "mi", "minket" vagy "miénk" kifejezéseket használjuk, az egyetlen jogi személyt értjük, amely az Ön adatainak kezeléséért felelős. A Flair-Plastic ennek a weboldalnak az adatkezelője és felelős jogi szerve.'}
            </p>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'During our normal business operations, we collect, process, and/or transfer personal data strictly when there is a lawful, specific, and definable business necessity, always in compliance with all relevant laws applicable within our operational jurisdictions.'
                : 'Normál üzleti tevékenységünk során kizárólag akkor gyűjtünk, dolgozunk fel és/vagy továbbítunk személyes adatokat, ha arra jogszerű, konkrét és meghatározható üzleti szükség van, mindig betartva a működési joghatóságunkban alkalmazandó valamennyi vonatkozó jogszabályt.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Data Processing Principles' : 'Adatkezelési alapelvek'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'We invest in both technical and organizational measures to protect personal data, ensuring all data processing is lawful, fair, and transparent. We are committed to being clear about what information we collect, the purpose of its use, how we use it, who we share it with, and whom to contact if you have any concerns.'
                : 'Technikai és szervezeti intézkedéseket teszünk a személyes adatok védelmére, biztosítva, hogy minden adatkezelés jogszerű, tisztességes és átlátható legyen. Elkötelezettek vagyunk amellett, hogy világosan kommunikáljuk, milyen információkat gyűjtünk, mi a felhasználás célja, hogyan használjuk fel, kivel osztjuk meg, és kit kell keresni, ha bármilyen aggálya merül fel.'}
            </p>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'We uphold a Flair-Plastic Personal Data Protection Policy and have established a governance structure to ensure compliance with applicable data protection laws.'
                : 'Fenntartjuk a Flair-Plastic Személyes Adatvédelmi Szabályzatát, és irányítási struktúrát alakítottunk ki az alkalmazandó adatvédelmi törvényeknek való megfelelés biztosítása érdekében.'}
            </p>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'For further details on how we process personal data, please refer to our Flair-Plastic Personal Data Protection Policy and the Privacy Notices on this site.'
                : 'A személyes adatok feldolgozásának részleteiről tájékozódjon a Flair-Plastic Személyes Adatvédelmi Szabályzatában és a weboldalon található Adatvédelmi Tájékoztatókban.'}
            </p>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'We encourage you to read this statement alongside our Website Privacy Notice, Terms of Use, and any other relevant documents to understand our practices concerning your personal data and how we will treat it. By visiting our website, you accept the practices described in these documents.'
                : 'Javasoljuk, hogy olvassa el ezt a nyilatkozatot a Weboldal Adatvédelmi Tájékoztatóval, Felhasználási Feltételekkel és egyéb vonatkozó dokumentumokkal együtt, hogy megértse személyes adataival kapcsolatos gyakorlatainkat és azok kezelését. A weboldal látogatásával elfogadja az ezekben a dokumentumokban leírt gyakorlatokat.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Your Data Protection Rights' : 'Az Ön adatvédelmi jogai'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en'
                ? 'At Flair-Plastic, we are committed to upholding your data protection rights in accordance with applicable laws. If the General Data Protection Regulation (GDPR) (EU) 2016/679 applies to you, you are entitled to several rights regarding your personal data. These rights include:'
                : 'A Flair-Plastic-nál elkötelezettek vagyunk az Ön adatvédelmi jogainak betartása mellett az alkalmazandó törvényeknek megfelelően. Ha az általános adatvédelmi rendelet (GDPR) (EU) 2016/679 vonatkozik Önre, több jog is megilleti a személyes adataival kapcsolatban. Ezek a jogok a következőket foglalják magukban:'}
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                {language === 'en' 
                  ? 'Access: You can request information about the personal data we hold on you and obtain access to it.' 
                  : 'Hozzáférés: Kérhet információt az Önről tárolt személyes adatokról és hozzáférhet azokhoz.'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Rectification: You have the right to have incorrect or incomplete personal data corrected.'
                  : 'Helyesbítés: Joga van a helytelen vagy hiányos személyes adatok javíttatásához.'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Erasure: You can ask us to erase your personal data under certain circumstances.'
                  : 'Törlés: Bizonyos körülmények között kérheti személyes adatai törlését.'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Restriction: You may request that we limit the processing of your personal data.'
                  : 'Korlátozás: Kérheti személyes adatai feldolgozásának korlátozását.'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Objection: You have the right to object to processing based on legitimate interests or direct marketing efforts.'
                  : 'Tiltakozás: Joga van tiltakozni a jogos érdeken vagy közvetlen üzletszerzésen alapuló adatkezelés ellen.'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Data Portability: If we process your personal data based on consent or a contractual obligation and this processing is carried out by automated means, you have the right to request the transfer of your personal data to another data controller.'
                  : 'Adathordozhatóság: Ha személyes adatait hozzájárulás vagy szerződéses kötelezettség alapján dolgozzuk fel, és ez az adatkezelés automatizált módon történik, jogosult kérni személyes adatainak egy másik adatkezelőhöz történő átvitelét.'}
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'For additional guidance on these rights, the European Commission provides resources at https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_en.'
                : 'Ezen jogokkal kapcsolatos további útmutatásért az Európai Bizottság forrásokat biztosít a https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_en oldalon.'}
            </p>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'If you believe that Flair-Plastic has not adhered to applicable data protection laws, please contact our Data Protection Team so we can investigate and address any potential issues.'
                : 'Ha úgy véli, hogy a Flair-Plastic nem tartotta be az alkalmazandó adatvédelmi törvényeket, kérjük, vegye fel a kapcsolatot adatvédelmi csapatunkkal, hogy kivizsgálhassuk és kezelhessük a felmerülő problémákat.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Supervisory Authority' : 'Felügyeleti hatóság'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'In Hungary, the National Authority for Data Protection and Freedom of Information (NAIH) is the supervisory authority. You can lodge a complaint with the NAIH or the data protection authority in your EU country of residence if you feel that Flair-Plastic has violated applicable data protection laws. More information can be found at http://naih.hu.'
                : 'Magyarországon a Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) a felügyeleti szerv. Panaszt tehet a NAIH-nál vagy lakóhelye szerinti EU-s ország adatvédelmi hatóságánál, ha úgy érzi, hogy a Flair-Plastic megsértette az alkalmazandó adatvédelmi törvényeket. További információk a http://naih.hu oldalon találhatók.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'How to Contact Us' : 'Kapcsolatfelvétel'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en'
                ? 'If you have any questions about how we handle your personal data or wish to discuss your data protection rights, please do not hesitate to contact our Data Protection Team. You can reach us by email at gdpr@flair-plastic.hu'
                : 'Ha kérdése van azzal kapcsolatban, hogyan kezeljük személyes adatait, vagy szeretné megvitatni adatvédelmi jogait, kérjük, ne habozzon felvenni a kapcsolatot adatvédelmi csapatunkkal. Elérhetőek vagyunk a gdpr@flair-plastic.hu e-mail-címen.'}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-medium mb-2">Email: <a href="mailto:gdpr@flair-plastic.hu" className="text-blue-600 hover:text-blue-800">gdpr@flair-plastic.hu</a></p>
              <p className="text-gray-700">
                Flair-Plastic<br />
                {language === 'en' ? 'Company registration number' : 'Cégjegyzékszám'}: 05 09 004973<br />
                Sajószigeti utca 2<br />
                3527 Miskolc, Hungary
              </p>
            </div>

            <p className="text-gray-700 mt-4">
              {language === 'en'
                ? 'Flair-Plastic, with company registration number 05 09 004973, a company organized under the laws of Hungary and operating with its registered office located at Sajószigeti utca 2, 3527 Miskolc, Hungary, is responsible for processing your personal data in compliance with applicable data protection laws when you visit our website.'
                : 'A Flair-Plastic, cégjegyzékszáma 05 09 004973, Magyarország törvényei szerint szervezett és a Sajószigeti utca 2, 3527 Miskolc, Magyarország címen bejegyzett székhellyel rendelkező vállalat, felelős a weboldal látogatásakor az Ön személyes adatainak feldolgozásáért az alkalmazandó adatvédelmi törvényeknek megfelelően.'}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
